/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4ZmXhFWFWMGGkYPtpGoHDMe61jny9N4Twb2pHrwgvWzCBp9tVRkBVrivi5cJAWhNbNosHxzY1mgmismwBrGHKuZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qctg5r4jYDd4AvR6BeqWHroUg6wopQqJy2hXhWHPsqBDKWLan5JnKs6GEB59usD4y9r6bNiKoNArYPJAwCQ61H4",
  "key1": "BNMvwMrVD6WKWbssKXxbUGF64HKxg8Ysmn1LqVEDqYPKhgDZN3yHchFURSyx6ApMXFt4EbvXyi28RgLnCsNoSZf",
  "key2": "3K7P1J6WAAYLfvjQ5TvhXQ7kzumN9XLZbXo4Qnv51AqqG3QcvhLTvD4pPBhxcTHQkyJDociQbgMSm2ehvrsbLtLf",
  "key3": "5knjEHVEwmjd1HqJdkuD1NF1bDatMuzwp7KzTVj62EZj5mpAbMHoBBeuz7ZJUvvjTESY69dbVnjpbeBUVF8Wo1C8",
  "key4": "2cWxrZVuPGSoKpPGUpBTpKTcEZfW8ovCHJ8q3CsEMEyoSJrpoS6C486ryvV7t45Vw2eoyrc6WmaznveHshPDi1GQ",
  "key5": "4GwnnVTZSsX3mmyXzScjDgtzWJv5Y3j4FKkquBpE6ccuHJzv8Xwm2yvXvSeqLNpGBQf4pW7vgvJnHLkqL9mA2j87",
  "key6": "3s3jHUqz8hh2gaXW5k1xpGiEkSHpgec7owRhXwn3sySaZL3AFU6ZnsCzk9MtKaifEiQRrdWgMFxgi6kNPkC3vHsa",
  "key7": "5AaXwRGxMGKiBVLd8gBLZshS5vfEJHjRMJTiHqEdgzV81QGBKYvhuhiQQrFAUxCx6NYEr6EEe6tytCEKZvwwWgWR",
  "key8": "5J525NmCdtxjQ7KBHUKaAMNZmK5LGcgz8KWGGjBirDhQbZr1c35FJB4HaGRkdTqtMeqCCjunRNr4rx9HCEg9DPvM",
  "key9": "4JQStEaGe9Dcu1xJa79PeKytfvt4ToSBz2k2wkRoy7joBPq8anrLaKSfMUXMeMXSDjw5pNxiyWJE1mQu67Uj6pjV",
  "key10": "3gbq1TyUMajZUU9kwy4YeBUbhjvhL3mu5hpXYcjjrkK2VsAXGBBascCtn3WoUbv38rG1gQ449CUrjFkpCQKSeATG",
  "key11": "3ZE7q3jHFgv627KPJsZsFVK5vtNr4YMF2x6voATdqKXQMzW5mQ5x7zUcRm5kECv911kLsAtrrkwGiWXJN4QCqAJS",
  "key12": "4w19H3pxax4P3USUKwcg16jQLstjgLH3zHnqAY543VyZxpfGNJMgnN6z9LNGJpiyEsUmkpcZ9eWtZjrgUeEQUdXt",
  "key13": "48vBCgGhE9SCkG5J8qQXr9UwWZEBe58EJSRQMDJq6ncP2ABNt3YsWMKJMKobxeBs2iawGZr2SRo7csfzVkA7QzGS",
  "key14": "5gEff5kShrv7AWq2RiZVeHcTuuChKbaoUMbUzvnEFyVvFqZxdPM1gu51zmMMPqMJTTnnco9bKsECWcawwf4mfhPm",
  "key15": "3MCXzYfi1avc3JDNp9MVyjwRqE2HRci4KcVPShcPcJ5RaqdLDqb2wqdN3RHdS97BWU5ocgETfokpJsJCzEptHsNR",
  "key16": "3qsiitrABNWp2oH5VEdUQWamHSuckbGeMF8ZxdHkNeXXcQqk2xUdFvhxdfpCEZt2SMBvYzZVktgX4mLstsA1AV3P",
  "key17": "wnJn8hE5WEUgz2cKK9ZD2tiNDaZDkHQoSPyr1kFvKxRcfemUXTu4ZbAfvswqnrc65eC1CjSGpaVps21e1H4onnb",
  "key18": "4MNkNANFkLCGxgtb1uw39h3decFwZHBHPsDnXWmVwJzYC9wzzNHKTyjbrwn4AggA7j6Zv9xk4dveffWBg6eummCN",
  "key19": "4tENenzRqHWiFotzprWaQPW3j28WG2LfZgd6JEnCc5MXTUVneJqTQQYZ42NPjtYddZeyR5jSbwmqWit9N9gaLer9",
  "key20": "3HZUpJeVw7yVA8DMpJhNhnPJyuZts1K9YE1nu4VfyfvFHqg1X5zcsjsCVjDjUsXkjUxwKHS72Fs22CGf6HU7xfG4",
  "key21": "4TUkadqVcrchUkG6w1LrvwQY7fxivwmoGNeCtzqwk5EKHLVmysBwEq2mZmbSFi2HwJqjGVUdEqV3H6pSisLYGx1e",
  "key22": "2tGaJhqWwKvKJgFh2HtFDoq7UkLwjRJQn1E9nLzzNWw4FS62rTTm7kjjGrZDNUg1HX4wJHH5Ly21hUPi4qVRZQnr",
  "key23": "4KEVwqdeYbAPB61e9HhT768BqGWRWSyy7grcdT847npfUCVUzC63BUDyZmChWhLcytRXnUV4hqjWuNyEmAYCFRze",
  "key24": "yAaGUXkXXyUX6AoFfr5cbP1weX4XP3VzezVYfpXA3wX8v4WEAx5cM76UeM5JjFbUCPrBzsXK9XLkroF7uetBDfu",
  "key25": "5dTmy8AUPoU1gy6YNF2HfpzhEfRkThSYr6RF49gRdTPzSyoKEhrzEJj7FYbhfHUL6aVHh2iLVaHXpQqKgMqELNbZ",
  "key26": "38e7xfKRLEBB2rR5XYMz6gEiwTWJdW3SNrQP9MqKj3ErouLg3CchAY4hVtQDwe7syf4Vf3DdsMuKqDmdi5MnqFs8",
  "key27": "E8xVUELKgqz9xiYBSoGaB15PV6ozjbpxbTg1cjPMQh6haxMnfrETdn5LsZ4KuN1vNSGG3VZVwwyL499SBohHzpm",
  "key28": "dTJLtZ3kTqw6cgJGvVJXb8dHCxqVmEnEMKBpC2bUdqcrnJFWogvrmhkzXMLzBtTWjQgBCZarsrDyrvRHuBBctXW",
  "key29": "U5buh26yQMRfoqoCi79i2D3fZvn8R4YtF6JvSr8WocP6bNSCCMHnK6JAGTpBuBNgwZa37enw2pzssLgiGkYfBwU",
  "key30": "2y2D43eWYERq4LfBPhX78qZwn55Avcysq868nzRLWtqr4v18GPA5FAEmXtj7uPfBU7zmwpbz49bhhEBg8cfdbv5Z",
  "key31": "Y4z4rqDDHkRgBamMPUD8nxGveKXy1uMhNicHqGW7VWS3bK9bp8jRY9X6waoKN63B9CPfEMeRctQkVVxNmjQPzQ5",
  "key32": "42y65M9eas2jfxtCWZWBTFg9smXPLgaPaueFuKjjP757438A1DxwPxjdLv46mSUoj6w9WHNcbpQ1t1Nn8f7THiSC",
  "key33": "2GskJjD6faUHkkyenPD8ChsdDyoQwgeyTfF6BpRky8cyh6AAxKGvWznYjmxnEvT352xL6FpEHWtpxFmTSGCFjDu1",
  "key34": "4qdYMbQSzSgqSFgwk6SLbnq4kkD2Fubhe8nPFZifAktZgHTb7iFHpxnXmodoYWnUGsNfRw4KPVcPJsGB4vmVVnkx",
  "key35": "5EzjkcjUXncWrMK2Ckd1bWuh8oiCkUWRcZAHMdWm5yEACC2juaJoB59x7u8ip4SAcnHrdMzzdFikDC5DHpufiHD5",
  "key36": "jaKn9fR57uiEgp6vx3pmb6pnqvtUon2kM4RyS9oXmAfGwSUuZMWkaSkHF7jkkg57GYA5oRZwJvsiewKGnijPAC4",
  "key37": "3Gn2RzCzKNemCg4gdWGQX4MmYHkHdTBX7rBCgPTFDReAJAsfm3WLFdxzMtethiWjUBg8df8GdhZSjDCvzP4Fk7t9",
  "key38": "4bf9diw6vBKZYN5ivDWiERFmEsTTUceJSViueyM3Wd8qQTSTD5XdgiuKWr9FJKkM8STFWEc6ZkAstt2aDd2REaUT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
