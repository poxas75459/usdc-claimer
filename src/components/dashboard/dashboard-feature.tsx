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
    "4chdaGCSXPmmAZwokFFvbcDKeZkeDncsTc2mk4EVX5QKCiE3JMrtV7PhQ5pszBoxwoKdN6xspzLj9WKWtVZZVSpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47bED582UNeHofDY9bmKEw4aBE6m4TQAuTRG2cxNDU2UXR2eL4NfRcqyNvWzA8g3grcgqxZ8sbgcj7KQzT8izuvU",
  "key1": "rvdVh4zcJxFGF2RV21c6PLoineeJehjeetWEP2P3X8aMRGwAUkhX6wiFoa9tqTh8yqpxfC19uhYe7hJErcQ165h",
  "key2": "kZpVgnp2g2yFqg8xSzXs4FZiecDsYc14hhnegfdPjFBiLQTxNX7NTJjFdM3qgPdGhHADU9Bp41gnnzWVfxfGXkQ",
  "key3": "s7fonDmuuh8US5XnNesaEHKJFELBwFWSDuRkaJ2qejxH4soZaczuQjb2Cf5HojcjZyHCRYwLvHP51FHurNDJBx2",
  "key4": "3qcVoyvWWckocFmXTWoBbtqAKbkpVwjE4rs1rVU2kKdg8yvMe1ZdrB1UCfCZPtEiguQgRPyPsq2Qe2H5MLpkgV9B",
  "key5": "3h2rTdC1VdvKEETGQw9uDx9FmKmMkxJFGfceFRvAtCFAUHrXzTJSfcPw6uGEsgzfBMQmz4ghdQHy4fsiS2zyHwQ6",
  "key6": "65VrwZEMdD7DFRey3gNPA85uKsj12x84cLv4mawkAn3ZzHkYa5jsso9Y7UQHLH3vQRzKtjUyLYvgzg4boGdkVXDN",
  "key7": "2n3ThzxHvzEV5A3GwEMkmDyh3q22p6uDCQBHKHWvDdenuNxs7xkLv6etmXqbxQ8K6jGaF5aXVjW1jMmWr6GcTuF2",
  "key8": "5vZTqvWmHg57pWCvmFbmSJuFbskGRShd6bvcDyinzpPA3Htgr3oMCnsANDpsivb8Nu4D7tBCB4wF7znpY1EoxBAp",
  "key9": "5qmADFxioGUNPBu1dn7gA4K5kLjwJzSpYSw8ACa566adqeGEgbJkFbEiu1ZeTtkpTJtg8NR4tSXvMNhBtiujuUA8",
  "key10": "5e1zNBxxrYa9x7WV8nvyXiiP4GZmRzQZuXaNoVdfywBsyQAGno1YGQsCybfX8k45KgxUdSsGJCFqJ6hmi3VzpUP7",
  "key11": "3huWUBW59pCNnp3mMVs6ZVnpZYeyn72UJ7eb8H79z2czSYVz5CZMEHgRSnX8hXUbaXszqMHv7jL5hXPjecf9adZA",
  "key12": "5S4PouY95gV7UaSbjsfr77pweTgJBWYHg1MFfj66VLFFshkzrghLiHsmL1x2JQVpCGyTTiSWSYKTBdy1kiq7cvBD",
  "key13": "5VGknnAWSoLhL4xTskTjGKQdPUDBc3vSjqJw75Qcszr51Vzoamxct3ao3KJYymkRzwCfhAKaT2PWSSMzooawRLyb",
  "key14": "5JQeURQKF5siyjC2sqH961cKy3A23W48odXcPEuLEjmMAgTAAHyYHKSKgUJtPVnHxj2aMKN22nx1LGhb8wuMcYjt",
  "key15": "3j4KxeS6H6n8pFYU9wu38PN6yanZiDbwbDa9jooVwQmn2ZSEENRCz8xSBT3Hqo5jv5UNof6MmemCG6C8wvQ3cFtq",
  "key16": "4sisr9a8z5zCmvjpeHUVwv1Sh5SBLpzEVgjxLZ5t8PPRPrLW4kY1FHb7HauNNjuJgZsCuoeTGoGE1Li6xngnyqEj",
  "key17": "5XNG3ktpGdf3WYbX5oYCcNjwZS1MCdDJmFfvSHJgThSFAkntcXx7jHojoywApdzMrXhCvEDpYVjGSwBJGj87H3o2",
  "key18": "2AJ6ZnfuhLre7yjszovQU8zPmJaPmnkbSzk7y5MFu6tr8y4tSoeMn6e4mUkkXQANU8rHvcR21GNKS8uwwjVFNxaG",
  "key19": "3sB9zrGe8QoZJbuxepk7r66AQow5sutU2wmc8YyRU9UdesBKLQqSQdZes8u2V5GBL13BYdnzvSuZjvviBoVX2qXF",
  "key20": "5JH3neQgMBFkPRYME9JaVNF4AmY8GYT9DBrqBRJk8gKyDajCeWZ28NRhnSah5XUxeV7G2WDxyCzWjnbFPZ6vA76C",
  "key21": "2vsaXJdMmCDkwetJRaFrWg3eAbGfvLE1ZJMfq3iR7z8ALTaTGogfjiqZavgcAq6GDun12X8wWrssjqnVc9thZCgR",
  "key22": "5YhNJwVGY8f5z5bWUp4A3nVyU3QAdN1iCE7scdLG4UTPpmkJw9WrhrVehD35UCMYvUdF13RKkJo5qcKjXieRKWDh",
  "key23": "x2UCCHB5ps8sKbLGXB7pC8pp1LKNsBGLkERnBPjEwNy4djq9QZSssFQUxj2Rn2qMJNhUQpFFo3szn6EBcte88uJ",
  "key24": "4jW6pvGLarBCAWMQrxXn84X3jDehxvKZ473cWVKTK4Q2iagMSFb9bK6j2HHe97wSJHfT8iNUm8dwRgsuTzzshErC",
  "key25": "3MttVXYKFVebt1seWvtcHdt6zY5VfhZ4UJpQAy5w8wAhebk4u486NZNA8cXWGFB9emYesjuP3CEuXEM8uHJecuaM",
  "key26": "5rpywj88SM1HgPADSkaziVxqMYa8VSohh4aSVHE2ZtgBERxNijtNrTxXSUTi6TBmEyFUHbZyTDZQE35FXou4utjq",
  "key27": "541fGQy1bBTa3WFY4tadScgepsjb2uCFSxuAgbD8WwK6rci2cGvGypLs8oV9LdnDL2H1CQmigc1VErsg7s1ML2bB",
  "key28": "J58epFTsPs87VmBDT1E1ymKLbvPGCnj6h5FdA7gnmiPkJ1P78bwGtFnRquHT7vd151juPZr3JP6KM27TCWAeUem",
  "key29": "4rpP7Ff1SWnMbmjwwoshpSzjGe9b1qNsJaktorsmKsPNEEP5SHxMyKTjYR7DEWndbhY7GP9Kt5eZYLQo9wzoNiMo",
  "key30": "CdJyWUbQvwM36g1gMbsT7bUsajj3KJTDfWsfy7K9gVGRpFTWEfXdqdUQPSsev45SFsntWivADYWDTrjdKg3Cbbz",
  "key31": "cqtyKphKfQidM1JKivHSrii3B8snT6pj2tJ5Wz2sYuBNdzxpoFx4LvaLjjJz9cgiBMSvqtS9Bo9FFzZLiHJWPjp",
  "key32": "4ENeb31zhNaznhb9TJYNMzFDAqRypKqULBYpuj4H9mm9sjRmAF9ouoxwGHchAcT89WEpVZkGur9MSE997vRb8juu",
  "key33": "5JkrgDZw5oPnqaLbGRnZAf4JDevfwAF6PcFikL5AbxsoJwmXnsyE9eWxS3qC8g7tgZUjjJwmP8Xw3tqH8HC4DfQG",
  "key34": "4nAz6gqWP6YZmhsM2i9athpNt7xx2xNXBcsDfrop5zb3VLAQTagrCwgahGUVJk4n5bvx6jMMVM31VWBo3hS6vE6h",
  "key35": "4TGApCVUZSQdAqPVLrc7vYwtjhtHEKsy4vz6nwgGYqHiCcRWa82sEJ34WwRduHZFZWtw93pvMUCuTh5dMUycLULv",
  "key36": "5TSs86RfJVokStShXjgmbrAYeBr2oyHJpahcyEucecVBRFrsqxdoGkSzxkUw4nLJfYBiPcaLnrFGRAxfqsFGvjtp",
  "key37": "3kM8S5rwEDtjea9hwmamHc5wAxQS6BeWCABm8X5KCCACQz5QcrGAuA97m4QMsPwGwwQYiSvHsSwKnduB86CwNUXN",
  "key38": "7VnZAJ2TLWaVV7nsjDXd2CvqTCAgp4WGjw3kVb4j3vS7PCV8TDp7UmXCtRB1f2iXdqoadN8sULKy6sMvimsAnjC",
  "key39": "525XmLeN8fZTvsgxRhxe4LhramxeF73hRnCPqpf1AKDdYorL3F2THzZTtrSgH8GrZuG1SY4q8LarcXfuXAznrg3B",
  "key40": "yRD2WYxk9qmYJni5ZsjqguD1w65qCBLMc4czPH3y2Ldz3n2mgCPZvoWEj2hZfBnxM51Ed8stDhGq4GnCGxHqGbc",
  "key41": "3t1NZ3P32KWGNcCj4zkyuVgg5WaAWn7DSYZQaUdZeSc2GLrpA5yhysxw5w3SsxPuHayyDDjQKdXjupQi2KVyCvDv",
  "key42": "2Yvsh1FkPT7k6jNRNookmK4jciA3qPuMLnCtsvZNfDH1q2GCeZX7BSFk7mvpRcZsnvJn5yGswZE1WFo88Hhsr89d",
  "key43": "5MEdVGSgi6uX2XJbJEBMpM45LDTwobBjRh3K24jG8t5G6BSu3zfaSDhQ966W5Wven3b5qzuP81VRf4mEBqHrmMha",
  "key44": "KYhQVLLxL3VTR1d8LzZ4ghV9t3K4CP37w693o1UZktWGupnBBcUyULaok64LtfweFNzjYjPt7F4VXmzqC2gJ88R"
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
