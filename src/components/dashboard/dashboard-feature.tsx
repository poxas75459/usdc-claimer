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
    "3VUVioZovHJ959Disdyzg4ZeR23YJbXv67TpzqLidKScf747bEac16ZW73NF9kDhZRWvLjRHziYmzoQDhqETxnQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTAW7amtERXm8KktCcoWY4exuVp9TxmRRXiJypTcWeZDcZV5jAKVf34gQB5r7gshGJmmuaog1C6V1FbMVkaJjVE",
  "key1": "5mPPC9dPHfnfniCnqoXNXLGdJ7aAXVwWeTATvbpyPCCFmWcGLNTRTRAUKn2UEckusRPGKSwWEKMgqFhgHttMqa61",
  "key2": "4u5Fhhr9mjsZmLb8fE6WAuvKEDkcjeGh7Xs5x8MCRmxikoaBBcWdda5DkhDLgb4rnsEqGS2xo5b5ytwEoFpiDtoT",
  "key3": "5EC84ncmHJvxD7Jt8MHE1XJi6MjmzbSFfBKWvvbxNwpZioMTDd8rXqJSLTkYCpP5NVNYnptfDXPodKoLPGaPgSnw",
  "key4": "tvjdnN2Hyrx27dinb6LFo4wRByxonJkZbmFTEr9gmnVghsRG4TEHMjkmTTB9Ldgm1ojWLmdcyHmJisxvoepLfzp",
  "key5": "EXzRvjoPTjTJwTVtfXrwPxcfMMD22buNDqdYdNAVh73wjzQJHMW7D4NaCkrcfy63CBSRkjJZ555RPaPryAM7vRq",
  "key6": "fKcXtyhnjKcYRhW6YRYu5CrYBhncLjvGE8Y24i7DpWCVz9qNBz5GPeLsywD19iSZCMEbqWfKavgvU23z5Ffh8TP",
  "key7": "Phrg7JE2CGb1KUkqFH6SqoyC9B7fmPRw98UmqZhuDzDiSUw97F97xW8uMCtkoFpQiJbTLkxWkA1dkiHWv3ph8hJ",
  "key8": "5fvdQcLgMxEH6HHmF3GDBVEiDkkCE9rMvpczm92dhdiMSuq33YQwntVYy1mjQdT1EjYwXrYmjxnyVsnvG6FXyFiJ",
  "key9": "3RHc8F4JeNMtvjjNKh9bh49KA8pokW2EmHAfX8BCSa1pkp8h7x4r4ekh2fcWTnKHkvKFKxzbqAkbc5E3w9SViRnc",
  "key10": "56LENnnJeHQACkEvQbH6q2dmERXH1UvVqcDWHnwBcE6zeCxLixktGqnknPzVGQyPBkQqBbF231QqJhuGrWv3VtSd",
  "key11": "21YVX4AhGVB6Td4c5UKvmg5BbzqvJveZ6vQA5Z3An79Vx1NFt9pQhztgX7V1PmdCS7onUQqx5THRxff7JSyp7xLp",
  "key12": "27ef5kN1dpjSk9BvSCvVRUaErMMM9EGHcGg8LrDnWB4xfqQRSwxyz2hsLXCc45ma9pJ8PTbZuwoG7jqraTiAZcDp",
  "key13": "2xpGYAfRMX6GRaSLH21Bg98d7nXrvYmRy8XidyEN94LFu5yd6YxcjH4Vxq9TL4PUhWbL2bK8z2rvDV9g5oiVGDEG",
  "key14": "39z6zQYkegjLkRU93bevu9h8hSRNLtfyfhvPUWqCiRZJwbXhA7pEPNX7CREhC6BJMGnS9L3e8pvn1ZBotMv3jUe8",
  "key15": "5jeAuGJCVrwAtPJhtuRS4keKaHGtWxaf9DNgciqsmzMTmxd6xnWP57Le2BRejPoRwQ4pRMkAXiBnFbEb8jwgbwjV",
  "key16": "3p8VbBucAzHuxf9HB1PDJqzEdcUbG58vRdTdByfJfDwEEarHZUMUMhCrLaFyS9EYriCYorfmCQGDMQQWUyP3ZJ9V",
  "key17": "2M2dKWnpNjUEu5JPb66f852gEiX6jPcrZnqKYS83dRJ9KUL659kCWuvrzUSw3CibMDxsNBdTXwyCZqi3TfJDm3Ct",
  "key18": "59cv4xijm6adufSYYtaLutdn2d4wL8YogKWWqDYfoVtpqZGkFdnTNrk7t6fdyjHDjseRKVrAKvhP3QVeLHExwJfM",
  "key19": "QvhrcG1GkybN4KptLWx7NiuZJxDYQbhfnuYXwN5zE8e4dReBMgi7u57wEzRZPs5ZKoJ7Sk1mQ6MGNhPsm6CDDjR",
  "key20": "4s62jureZwanRs9wRKD2kpNMx4ouJ8HPwcZiJxCeRMS2t1gFQjQ8QditUXg1wRWwjHUhzrGJAdARGeMmAsJbA9jX",
  "key21": "5GC1GeiHmnVpBbXaYdtc4yU2gBKUDxb9sumsv4BGPa2mpR8dN5PuJFhPtNNuhghWhq3QmB4LbDUwMaKFgzmW2b8",
  "key22": "3eXvH2ds4pkKgUADPJ5SX7pqFXjXN7fHqfJ5Nbx2HAX7iVG3mqDsq1KFfXsxrrGzrS7cNMKKpVxtCweFzQZjJNNF",
  "key23": "4d3bKJo4c2BC2yeYF8edbLStrAvH775zKmdNDZn5CVLmXn5a7Z58momW65APxM77F25eP6hjKYPbeXD1TBtUx16S",
  "key24": "2HxPBD1XjmPU8weSNWVMk7oB82wsSNcJxtKvYGbe1NtYiH7ZDXfetxBpXRt4afnu5bkdSReM6Rm6SFkh5j6ZTibr",
  "key25": "5RC2PM4GLbKg8gbezRTwTxYbzftJSeoHvzjtZY2xE9cmPPaqPJ8QmtyRGy5hScaa521f3xuzST9FDWRSdPeNFma7",
  "key26": "3r8DjXsJnyTPLiqpGrRcWr1QwKy56Ffvx9KPy3VQoDgjGBHpBiqnbwusyRqqg8JAMsGazxaHATZdbbE9FFEVQCGK",
  "key27": "66YMDYJM5q2AcyoP8akKmGUCr2yRLAwX5DhGbWAwzHShjCqpUDsng5QVK2UqrakUUiDhbbihJsZMdjwM8GLZjtyY",
  "key28": "4Y7tqGytmtuqPycMbuUXRXFWpD1XNZE8mdsSWvVYJ2YY5yHsf7ubRQDiF6rLLjC2L1Eq79BXwHDb3KPHXnQYki3m",
  "key29": "mGxTYSEMnSQm1qgDGqKjUzMwWN4mYjy2417h89CRCWm3fKaAVkZz5ZT797UEn8z8tPM5VLue26Y6s5jZv6jFZFt",
  "key30": "2kMTMUaTZDw4eMyvLV4HU14ZC8YDSPwu2eFjNGn5XRriUnNzb8iyk86GJ3prLNPCCGCqezQGX89AhDahC36rTp1H",
  "key31": "5D3mMF2DvmucULMY6vpQauppM2pufadBB9CcDNVasgiMXq6TWShMFPdGSHzwsHh3k7ytrvtFVzezeTDx6uqWx6hn",
  "key32": "4hbVa4bngFoEi25Ubs4uZpTb6peFpvEozkHyxipALCT6YPxDyHFShcoXbNZJwMnrEeDFyjsJyQK8ciS3yUdcgxg1",
  "key33": "4BqrRAyVCCm99qbSRksoADpqQWc3SgYDgNy9o95dsk6JANTEB9tcBCvmJoG5mNwH8APqsGVwA6PXpUaYex1TEmk1",
  "key34": "3QMBQ4MUStfhWX2xF7246jxPW8j2fTp6JhQXempiBvEYFh6doWREqLrAATXZaHA9QNDpDSfembfpMgxuRoCM9syZ",
  "key35": "5sXkwd4fDmbNcM3jJq7XNxThDo22EEdo3RQDtexqcxuMd3rMC8AQGZEqJvgxQoR7XEHqRGq5646rnzNFfYB3aTAg",
  "key36": "4dnCYVKKp6qPq9trJy8v5JUV12s3yPrvZidSpfsJMAeqPmSR4Uh5wXhMGW7e6a2aYkAgWVggTCdE1DRJj22YCD35",
  "key37": "5vhibv1fTNubX1NhpzN8ZC6SbLfebwckqafsN2qzns9vg66e9QtxcVQbZ1bRDya73wnYqFvWrGZQJvJ9aB9QAWdV",
  "key38": "66YhiWLqtheqNRJ63DZzLhpz15Bnq2azCN4ZEfNHqBCxNnrwceyYJ7zMgFBabhko8NXL4fjsxu6iV3oaqHGzrPrS",
  "key39": "2B8h6ipUJUGW5dCBqxanVtmvqbvoN4FmG5NQUrMi9W2aYdmHktX8AgNg5NnC1GHhZrQ3ba4o2mipSu43CFYGJJR9",
  "key40": "CZARuvXQpfUuVFN3ZXPurchtKodKKTya2RbWjAuXn9RnbLTEzeevpZiCT7fRtscSgVhACBUpnyKG2gVqFEyscx9",
  "key41": "zHaRwN8trFBB8f9n7cqiFQpEb7Ueq4Y3nkWMBZmuFG5TdXggKKS34AqLPmkswustTVST6Z8ppcxpNbJUkqbYfXV",
  "key42": "2ZRsRaF897etKJkTYTLEaZCvVxva25EHgTaUnp7ECkjKWQURzmxrwhLVqoL4FGUFbq1afK6DxJYGpKNr6kPo7nKM",
  "key43": "63jPjxFdjW9JUPJeLxcFjdM6YWbDG8XtvypfQpB2m4rKiVhwjJGUUn98yupki5hCPK1eniQdmHQ56ARUtCMCPxhU",
  "key44": "3ZGfrYHmTiiTVq4mFyJKih3F3QLMArxL62BH7vSYdKvDMt1CC1LuixP9YjF8NtFSEJRRzidSyqP48gKE97e5pBMa",
  "key45": "8o7rzEcnokrurEvDW7PywdcL557g5hM94ftS6Qz9jBQgsnGduBLZ5RnDzv8e3riXUjowz4MLcjaMjh7L11XTpxE",
  "key46": "3zDpzNXPoFz1CJgjSgg8qejKLaBTErrUMaANr5hjB7X3gUpTV53BHN1TrMbeody9YgfJzrh9ocCpqhKi2fPPRCo3",
  "key47": "UvGpuBr2kNKJbpFioLNXRV6NzcuW5oYkurf6o2twd76LkMZEG79Axx8XZdZF9LHQApDcx4eLF4LGK4JachTwvAz"
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
