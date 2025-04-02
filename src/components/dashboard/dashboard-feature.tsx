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
    "28Lp7Mn1KME519LheTaMAbyySTz8hJhgyr8fWwea33adzvNLHbW3PqryeVtiv8UXYyNymU9ncPtj1nYdV9sfWEbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrFHJrUvp3J8smG11EjcWhh9yymnuWJoeM7rzZ5pHjJpsHSLrspDLMVKkeaimd2anqEFdhcSPH9u5FurKgm6g1b",
  "key1": "e2PCLqXpgBcL6Wtk4pi8rprryRXHQ6ySiegbedZe8uyu8F8UYLJ9FPXk6DmspBj5BuEF1cTaT2t7SFiBEv3zCYp",
  "key2": "49CCZr5GQPiFHeFX4CQCNDcT4okNGkFCQ2XLw9Nc4HX2AgxdQ2W1oik2kvcsuo6BZ7Ys6woyLxGJrAm2gkmUZFK4",
  "key3": "2PtM3W7ZrtqmE6w8W5ndbRfkqZcEryEBp82i71kyxTZuXy9HSveHqsjpNxWRuMBYgVj4THTca1ocLnZooUy8o8TG",
  "key4": "4CVXdunuXY41FobbDXxiZNXnxjf9XTDuG2hHcPN1HDShoD2Kp7FbaMhbR348RKUBPD5v1toC8aHJ3sW7BpKCBp2x",
  "key5": "4phdshsxc4Q6UcwTxJZYxXUMjUdBaN9cZr6MrnSgWnBB8Q9xwAHy2P49co5y2GNsYXd7Y4dF69cKZenrr8JMTyWL",
  "key6": "5nzBcQPSy3cMYsXfPopFo5FS3ZvQ5dVYZyzHaJFDor5pyLaKmFwSGkSp2b6JV2w4bT4GptqJn7TqWEfCrC9QSVwA",
  "key7": "3BcVzU2LDHS6fdUrfDxjxcwe2ZPNh95XZc5Pej9e6tVJKMdz6hTf278fdZhNu8u2LK7TQfZRqnzA2XYGrYVMNLVf",
  "key8": "3j2LLUm6C2ZH7fr9PZA3bwaA7cXkBnPS1NC9Bx6usWzfM5n1JJXUy5eoSLswckJjAudN83gf8KteFbCpJDZsViko",
  "key9": "CtYt5hpyHxe5QasmFHbmDGpLnjUpYbnPRRZJopbLgwWbaFMa88LTTRXuNChSr6Jqp9WEwGu1budzH5fTZR4fCLd",
  "key10": "5Z95XW5A7acnNHCvBZggyUWieYoETHCsDY9JxR3ZUxXRQu9AyGMwjPuDXnYQxs5n6yAUqnVNfDrYv7YU2xmJAA47",
  "key11": "3Xk3JHEZt3bx66viRatBmbbyLZ9ik8bpQ1XM87qifagrR26d3GEegJYMHBV8dEzX7sHGNdmDGZqMn4v5VBzFFEMm",
  "key12": "3kNq3X7ZbiJr3jFei7wrkR8Ub1rmtAbTJQkirR8MSHyGrqWGmJVy3PUuie9DkvgYxiWdD2a5iFJwBKBJ37pukSEe",
  "key13": "gaijjWRhqPacjQaUYod9FRddCebVMRCYbkccTGj1LCtLDB9odDsTomvnYBVwQ9q39jWzQV4C1Vu2K3xWyNux84t",
  "key14": "2tTagncmsQL2UWvVYtUz1ZBrsfjRdnwKujHTnUi4bPrR4hgLkv3zyDsAMRvJ9ix8s2gfn7ihatXQciRhRbRQpWNN",
  "key15": "5KUV1U5jUsGFw835s96Rbq4bLW7nsc15YZsgVcShE78HmAAg5HHtyjqMwVzk1ZU6hdmy6aLxLdFe5jWihADE3Baz",
  "key16": "5hEK2bPjdgaRBGwECSE21paVjXP6C9sPs9khRMJKo5NuvnbjDkt7ogAPQjKSJiLxR76q8QYVbs8stbgnGnKgSJo7",
  "key17": "3qTqh6TuQogTVooy1NNDEGBbNxAkbKoCpfkxZLrbTPvUa82p7cYCgsTrZedGa5WBm98D6TLFU5oSwA8xLeLnMJjZ",
  "key18": "2sLr9nbnoEpL4nu6vwdpDn8GT62chVg1PiQ9p4DfbMSawfophBGhiksqCTK5d5QBxKoUsJDW3PxHWDyTcbjgyv12",
  "key19": "4j22wdNnpphmQjkxxA8VTUce5YpDsLePS2ceLvrYnCRYzcZqJsXkPRLFwJHVEbgxzsQRZJg8YMLLLJs6tRji5Xcf",
  "key20": "2hunKjYdhnvzfvsuWDPSKuLSVkPukvk4MUMDiG1kx9BhsQFhfLYQeQXeQ2DDEw99QnynLSGZdKDaFZENMpZmAadL",
  "key21": "2EYCcnxtLGGnmbshWZfAiaomAcRZEPoK3Q472jDuSV3FBSyktwm5SuMmas6XB9EZrwJhwS1yA8vsoc2UdfC1CNiP",
  "key22": "pazVGcaqLFpxnM7J5LoXQaaCzznhF4n3fVPdqgBp1zv7sgccdRuyfZp4CA8kZza6NS6eNE3atj4GASr7FUUDnGZ",
  "key23": "552MPPiKV5x6c1eBs5HWbAG9Cire4FVLn5BnrYY5EDbCtj7mJ9eLtcFKqxQX7EWrkYkKSqVcZEQCWc4YDEZi82q3",
  "key24": "63a4xyjHD5EH2kfAih9WYiQi8t4f2CVd46vpHnQGjxURLtHTVKoSMr8ts8ipnJd2pu6YMBcUvLSZyPLyAkJeedTJ",
  "key25": "4bQM5eXh48HRaRSe2Mz36WWu1C2BF2fzJZjsvMF2J4HsCXq7b4etP7VhMLq8VaixqJ6M49RaMVFCdMD57scXYgvz",
  "key26": "47baeVAerjpVrPY8HYbbLrjNS4d44k8Ntv54cRmLzew73W9uxgA6domhiyH5raTDYuwRqmru4cWYWqnVGk6Vd1h6",
  "key27": "5d4pBTi91BNM72ZHHvP27vtcrrem8yvEVcYrdaEqrQ2a5AFHxEhMpNTQLe4PfGckxy8EFgAg8Y4NWZG1M2gM1UTG",
  "key28": "2PESgvErv5w9LuuB3JfnffGSbg9XzSuLq4G6EUFEFxERXkqt4mAvUyMGiQS9SCiMwRHaJPgcqv1AtXBJXpXLGi5e",
  "key29": "Lty7a8LECSvAMj8DJBawoWfLWQsJGin9HHkM7YkPuV2GDDc7ZxkA2eoYiZ9QkweHuDKKoYfMtTRvPa98TnQ9gMi",
  "key30": "3kXsYdZCkWRaAi4xaiYr25NxS3xWE8ATKu5po1rckQ1C1RjK6xJws2fJL53STX46m7HLE4h4iTTzrr99rNqsahwy",
  "key31": "5exg5UqWjpXhXyGSsRNRuibUqHowJmnaD8UY17QzpzKDc4qFGDc5TJYKnT8Zc2T7kxWFjLqRbeca8151VHHVBeXN",
  "key32": "4MabfDCSZqHUuEJtsNy7Xqy7HaNautzUsGNr2a3LPXXpjEmW3CNjajvKXbjN37Y4KVdb8Y2DsK3trhpWKjwenruT",
  "key33": "5XRhP4f5wMSDaCfMyv26Au1WDsxChzXhedRM2yTUwgX5i4PrUgYknnDgBTEvQjPzAv8iJBKD2giofLjWThgUqmXB",
  "key34": "4uih745TrU7yZheDQx4zbxBMhwdTqnDXWnoRShbjAD6gCu3SVc6XVzAAycoEnrtvfbaCefMCfRD69fkfciDjrgyi",
  "key35": "4SHxAV7SxEmhyyxhzdKCf1GuMBmgRoNYHsJFgSLPMKQwC9xFGi5DBGrpjnFRJ3c7chkrW2tB9JFXMZKkpUxofuHb",
  "key36": "4SVCLobWU3ZfUAw1sbZT9EamPVd6woGwxPqVK8MEeG14UEM74Epf6eNaZ52B4o9rEYz1nhsCP9TTRBvz8Ticj9Uz",
  "key37": "2jJE16pyBuiyB6RBjcRpTJuyVdPyTA2ZUtLai7kNcVFw2MhJ8BLLcYoB1Sf88sM4yBJcLWUERQwf8if9QTWtHHCV",
  "key38": "uJa5B8sxkiyL8Yc2TxpcZ4XoMQ6Z8dbQcgy3XAAgezWAhGsxSTjkVFEL2YwRaysPJmPGQuWCvemi4G2tMmL4Lyr",
  "key39": "zJJxdTZdN78NP6G4T31r3Amkrx69Jz3UfC4tDVHJG3rcSbLyvJfHd6Ne5cNaeZggFWCfq2SPxrGsychpB1G2ybE",
  "key40": "3xs74pV9TsJrSU9Uh1RKQqHiemuwf2Y4bRCkUMiLHmMtfqyW1zjuWF1nNSaN7gFw5JWRXuBbD3W3gRCDAEWnD8PH",
  "key41": "4fH1J2Ln8DoFF1gfyAGfR7j91brkBmHSbYuV5nHDA75L691cpkEUpSXU7Xoj6GakzpBpkvT5FVEHzTUPvpoVTfYX",
  "key42": "56ek7jbnTnFbnax1F7HhxLa3pS95jYTuQZAkChPao5Ju2oYEn9na5EW3QEEv2uya3v9eiA3pNoKRHKSTb1V8G3Rt"
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
