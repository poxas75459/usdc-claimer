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
    "3MfiCw45ibo5cbX18wu9L95xj73YVoLYhLy1bu9mBMAbCVTuW2sXNHUgWh9mLij4sd5vwM2GML4zo8Gh7m8oMbY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tgP4jkDgCzRLYrEozjEooodGe6XTLRiVq9RB3qWo4HywRb1S7Z5tjaqFXfSZycgUo3H4ygSwkj6tUxofP9eH2Td",
  "key1": "4EVdCEUvBbv7sLNJHuECr5rXEpiXJdmFRbpCKorfYBpADvRiuZqc4wg5tT8SNt7uJDieGyBaDFaM95nFC3qT9WdV",
  "key2": "3SXFqJYp5h9YyzGA1cHGejFdHNzq19T5iMYCqGkqEMksPVgFSHBkZwQTMrtm8LKPgE8oEDo4bNJgu5JTmQAJXThe",
  "key3": "3SvSwsDEwszDnBKKuq887eGBc8sksUuctFNBn6XJG8kPif657CDWrXURMgL4xAr6jPaNwzjUwuqvWbghnn8JGESq",
  "key4": "4eYhSmfMaNMeZfPziSonanY5SAz7fNUb6DL61Se5KrdpoXgzGTm3b47zHNnV2fHzuCMXxLeiDERAxTfqJpnC3TU1",
  "key5": "347v6uDC2cFFXoK2UyXUxEM4R1HLY7rAC3km7ChgHrDM1kfBefBSkDyPpzFdgA4YyKj1eGCjFJpFuxbqBpPs9KWr",
  "key6": "3CKs3ynRamQLPnupsuxLUWcHwLanvQv6fTbtB7ARjwahDehGnRwnsB5yjDLC4iUuh4PQHLZmCJevAq8cZStt5Bh5",
  "key7": "4KiAkZRC7C6jf5HzHXoMS7PFFQgWoBohA8iCx955GCYMRebY4v28LMgDw9zevpbuxSYFkgEuMSCt7YXKG7YuaRi5",
  "key8": "CYYYzcbzUspJ7wdBAkm3oqjnegKqrUazHVcQAgsXmC2QjTroHJapCFe4G65TQydyj6tiVFMuBob5s1g1yuJaCik",
  "key9": "3njHHRjY4dV8zaHLp61eFLxKe47Z4RGcHFQWugM3jQyAQwRTwbLn7XuBBakwpW1FFZXQoBHcTSpRCBiv3XQtKtXn",
  "key10": "22rhmtWByHDR6v2v9QSMdk1FkhgGKhW7CrZBnqgdqMXGSwinoGZy5d1vU99deHkSHRnhVpKNCj8rGHiBv1eCn6J7",
  "key11": "5YbSMQmw5iydLCC3GNghREX6Af99z8ZxJvx3hEE8gx25MUhtprNVKgP1TpS2RZVZfK61nmcjgAZKE7PKKmDfWuWB",
  "key12": "2KWqyVr7zUU7D6DA7eC3jNA7roxxiqrgewK3sr4tmssvhxHutoK4KrpDuWV9ofX9se7eH4VMqfoALWFL87t3pnpJ",
  "key13": "5kvDcd64jaeTcYFPGpCqrHeaeSmy6XVzWwpwtjj1NBggvW3m9UvhiLD9UfGvXkdquRhtiPUu5L8kVYWuvxSK4mBc",
  "key14": "35VKod8mCtk6z7srMGM8VF3WKdCisvw8srKqQaFzANTNax6vWqwgf2fkWoPhYAmfCf3e8HZDiN43noahc1FxqbJ8",
  "key15": "A686Rq3cjp6GaXvmxVph2Eg3TX1DEpvkcXkFU5BP1p3hJ9ywV8Swzz5rZGgWMvUwbuy7sJy9SBa4Ac3ih4PyPhJ",
  "key16": "4EgSZGmeRmS7c6SUdjRdcyQc8EM9UCz5yKT2gKbuJ4YYoQckSRXavgCUsKgXwoybVSLXq2JgJJpo6NcM4DkTXNSo",
  "key17": "2kNaA69FCvAuhrRu9wVBF9MtUatYG4tPsASb5Pgw53iweafYLUKh5ByDkhDsY7t5Nn1bcCswVSEiuY11isYQk741",
  "key18": "22ZMdhCrGpxRYWNoWoDaxeKWMwTCep1TCJBaN1ii1ypGwYsWzu4JYXPsQyH8vgmsEHwsneA4fDBHYkjMYwDKmcJk",
  "key19": "Xa1hY7S4TTUg6qm7QrUnvDZAZDg77H5ZjLRmdfpVgfFg2ynKUMMSVTKxXN38Mvx64XVsEupy3uNGEzciRCNQuUU",
  "key20": "38W4sFEnjNVP1hnWziLJ2zFrfij5rnp7CnLKsHSoK5UsmgnjrsisXNhu6rsMNp5Wajt6tj7GCVTVrsiU65ZA3iwa",
  "key21": "367VbRke4pZiADjxTu1UbkZW6aVaB22yAT6LrwyLUZBHsmsPNWmNk1ctCFUXpvEjKvMMHPzdBApy5qxAKVsuHgBi",
  "key22": "4EpWS8s9YdKqNAkZNDzjLF6pB8reVYrd9rnccLwGvQx6HQZuE2fLHdAk3kFBCChcfXoqiuzQKKYC5UAuiyLGrGB5",
  "key23": "2WGz61fiwE5q7MBprgrX7h95ZkRGYT3no53CRMWwPigyzFRZMQ99owGMwpEMoQZyfV1dVzGL67ZWDvFiyvrafLWn",
  "key24": "2qJVq7hJP6A8pUQkX69XqtJgxZYMFdEpvXDwLP7uJY5NbRsXWr427h3FR3dUapA7H42z3mnj35WkarHhwoRQi8bH",
  "key25": "2u8ZvgbWJM6Q5YqFsWTkozkT1bx4g6yb87LkZeZYSW6gdRvHrzD9mRD9rtaw6SHMR81eQnRXw8Hz31W3PxpDcqHE",
  "key26": "3z1jKqymhCBVjgwJqeyWgumgWFWoNW8FGu2f7FfaZBDqPWcNfxs5fUd5qfcDC9CxKzp8aqNWHoViJE1J7TcmUw5W",
  "key27": "3VhJmKz19DyzUxNcmdSpecpBBygECxRrbDUc3dfzMHkEpZTV7rGqeZz4nmG49MCf1tCF6UxPtP9tSkkZw5hodUWm",
  "key28": "3kmKLx9QDbiqKmMQ5A9q45kDYJJ7GnAvSayuhQJsU7gZJfuKS69K3z3Gb6x8aWgosSBBXDXM9B57UyzdBfpqhF4d",
  "key29": "w6tC8FnT5g4neXGe1mJFrqJ1FhY89sM1aMrJxnYM4QVZLarP5TDpA3c3PZ3H9Y4zR7ruMbDPjrymk7N4BLNBEV4",
  "key30": "4Bfsg7YZRhCfB5vvvEEPCG9Ln4p4fmsxhmG6MYYRJiGYs7UG7eti3R1j8G7RKqMSUcBvNGnZ8VMLmKRUPZJxFXVs",
  "key31": "5HC5zUAxMymDVBs7QqKSoCcM1v7JJJxY1JVtMaSi6vDeNGK6gKwGqejgXWLXruNZiKMFkVS63PsYsDGR4VykdQ7g",
  "key32": "4XtNsVEXJih4sCtcezbebVbpso7Cauas8osPKF4QzEq7LyHCttV4skFrHFiGDw8FjYbGsSnnPX9nBZVBzNSfCmM7",
  "key33": "3kvZcGTNkzDgdt29paAUTp8XUy1gjDzGu9b1W8RgTrE3tjNLKWXwy1R85JShqWtgQ3A3N3ZXfkibymDNtyQzzMhg",
  "key34": "5Yq3xDVy6NXVh27SuGS7E4X4bpvUj8pS2gt9z1eCiYjNy3UJcvF2xHdFXr1Tugh437gMbFXMbjZNzHeNp646cAbR",
  "key35": "2j47oVwwFyQReRRhCXpvNbR27UA61JRUPQeVg2Q63cJtxfKP7i6vhx3ACqZyk6cNpQ6wRpmMnpta2WqoJETh956H",
  "key36": "54mrLbuNTBrZzcU37TUrbiwMSKkL5YDwqtkr2ekah2uX74rqW6ena8i5D5UQm83RrwgC1DaieqFHFpmgBkhUtBgb",
  "key37": "3h5vSaKJXkyH9cLTGbrdr65aUZZgt73KKWMHNkiWBbKJvegqVNKqzHXt5crVzMgEe5RWjQNtinQU93UJiaFWfy46",
  "key38": "JApcoQqKdWqPTsrrm9PYJvUNZJD9icA7HHuQ4GLG8eLGYoJrDMjDekB8vMxwRo1kLm6bVKhBwNRKZNe7hgjPnAS",
  "key39": "4gxNGQhmpvUCnybsRthSzV9Go2dR8KvWsu615DviWxVTNLCRxxbyWUsrB37nGAbHPXf58JMA9jCNfgqTfzMA1ANr",
  "key40": "5qDwAJPDpx7DKUzyd85zfbKrzE4BmYXVfVQ6QsSu73eSWgZ7XL29piFwnBhTRf3nCPtfQofnvrXbK2yYX7kg3SfY"
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
