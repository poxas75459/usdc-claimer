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
    "5Qe9F6kKMVfC8Rr3dMjmDFXAyx3cxEtM9yPGvqUvEGBRrG39i9LXew5cJJLUihGSjnE7AmDRzhqyD8gpmaCxCrZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnFkBxSorfyri5t7enx7xDw6Xnj5AS14mMi7ixtEYt3h6CMTHG86tJVtCQYaDhkG6BzNPoNjRHbyXC3UxXxjhoQ",
  "key1": "5jVm5nhkctk5iRxHrVG27VtjFLhVKXKTNd3VY8NhaZWkxFdYVkQahG6epU9L54UhdGxg6JRKWLt5HJBNm6ov5g2K",
  "key2": "3sAEy8kWxye5W9sVv2Mv8Wx2PfVGTS16hnKig9HoYdxZRJBxac2XmQHXfCZhvpA9pkMcKUT4Y7PtMuhx2nS3u6UK",
  "key3": "4681hfJCSSM8iiG2LzduLCGyucxiG4TZfQbRYbSqRUULSGJW65nEmGyZ9U3N3DNzmYDFgNXheAx8WsGhP8U5MBg5",
  "key4": "5byZWVU4mdqM5kdBAByRF3kE7jCwzhZEJwxTvN2c1jXChQfNUEtpoWMASVRjDf1oTwFRompaobxQtw13hCNnwDNn",
  "key5": "36JECtgZDAsyWEhJ9n9eRG8o6WHcjL8zucjUp1QXe8yY1MXnXV5TriLgZoszGYEAeAv4YsYhCNNBSZunrrGhc5oJ",
  "key6": "27jiCoYq6gMovwXvkfmUfpE5TnDNrkkrnNZhhuguULApzdWevvgTT9JqSECHRzc1z5P2kKjXgWY48mB95YJ1xw8f",
  "key7": "2xpTj5AfSpPwoKdQmHKzffYpN8W18xWa3eZi4S4goMdEWdBZg89cpDvCUyD893VudA4bMMUnajGeWniPx4jNDwK",
  "key8": "VCS1998Ddngv5mZgstopMWZdexMvuSpvbhfLhtmtQpkGPiSKjLYDMe9oqEoyZZiUwFx93XoJ7fJqp1FNeJuVAma",
  "key9": "3gtrttxMUSggWvaMidvbyRtreiYCijKcDHcUhBYQpiSgwnbwJr2DD5i4pJW9ipuRwCN2MWTKqpeynYQptobq9AbH",
  "key10": "5RzktiMsKFcADHuABevQAsFL9EmmpYg8HcxgworjQDb6WoXCcPYEZZggXWtFhzo4dC5VciS3PzvKF95UweuyDuFo",
  "key11": "3GFbbUtgP5tzxkZERFQobiM9s5NvLvmrsDJYUigrL6U4jHF9ciTduJSVFnq7v6ccvAMJ4DUNqXV1vsraJgvX1Gam",
  "key12": "yWxBavGLi5wyJFBV8EvxPJafMfVaPsy8WRD4p73rXLg2wo2THwUMyRaRrzW8sTu8BPN8jJgCtUJKTNDMiTk8M52",
  "key13": "52WGWjMVdmgJHavCrpkp2xjfRJQGLqmwBVSWh8vE6DLi2JFeNFUovsSvgf3pPjLmWeG9q6BP14rshdD1LxWtHYJ8",
  "key14": "2AKeX6yaykeo2S6uJPKYosoAwe9t9wKcKd6UesaSFvCnNjKXqQQLsSL3Z4dDDqBpw7MBGsff9jduHXs6v6bUKXMm",
  "key15": "3RbDopfia5gutniZ3tqT4fk89E8j4KWJ369c4FjuSEni5UStZMgssXXCykwsCYgLktvHG5faRtXGMChHXpPSn7Qm",
  "key16": "59ndGhht7j3wi4aPsogztpzsB62L7yYEueBhNJeNuLxaFNo6E5VU9MHs9hu2EA2UWYw5tE4N5DKzBsis5RQwcNhF",
  "key17": "2TXPrgk7Q6Ev9hwfWcPBysMsCVA1oqoa6J4WKHBTDPQHwGqn3moeQ5ZFBKcxZdquTN365a7ZrxVCXFrVmrA8ose4",
  "key18": "2a9nDeFjP2jCjeCu3vxNvx1jiFGtgSK3ZFWRhVGBzaGxbkukZoBU6nFTMFmviY2UYzrQvcTtRhwzBnxhdBgEzL7U",
  "key19": "2Es52cv42ycDtoCvzfVQwpTeLySzgdv33mNqKXFz1E84prq5nZM79RMqGm2ePjL1Mw9vQftakWxVZgfhER8D4Tzv",
  "key20": "33uawQ2FRZtBkeMafJsMn9AKFaM7npMkkmUhcXutUovTQU4BGkutuK1kaYMGSaQgKHYLBtrmZUtEjicGcVnqYDVb",
  "key21": "4PYXc4pNseJz6EZs7citDkwceEeW6MxNNtVf6hpsWcEsv4obQsaZPKeD6PY1zpTFxbouDdGVAKydySDutU7ju8kN",
  "key22": "4B8r6opuJQV28bxsvAxLSq9C4xP2Apd6sX9277xs1aqiD9V27M1QAur9EWZnTEmYzGj4qCwS3oCP9KgzMheeMJW",
  "key23": "3Yymk9oHEYBmxBhjjuGDcaCkh24nxEqsrNSEfAxZEdwAspx92Sw6UbU2ND85NLe1K2ps5dzP1uWnQpz12n34Zgub",
  "key24": "5UabkW2znWmaBEx1ezRdkgghPmrEe8Xj5Fodw1zroX5xxTAaaoXTCEZ5SvsosQFzb42U1EDKamFavyxEY7FPcVP",
  "key25": "5iUWPiAsjV1oSpuJn9QXy6u2JUFtzhFkA3TsZwmgYGDfCWgzK5nWu9ysDY7RFwqLmWXAKR2pbLPfku37h56wPFuh",
  "key26": "2dCQscWqFrQn2ELnt9ydtgusGuUJi4NGXtoGkn93qKdK4P1F7ZeU51nQUhFab3ApJYN83DVRmA4u43kYosbU7H6B",
  "key27": "5gr5EJSreZDkjJ4q4ur8cRWRPbRiyAB8VYdGf42bpzHz8wmrydWGuzPbgBL3PcgXqC37z1F2fg81QhrHiPfYh75T",
  "key28": "3ZzYoofeDHbbAbzcY1sLbtYo4tXYjgompPvWEXqrwxpABW3ecTkAoMYUhLjYa8LrFHEKqsoLPQBmx59jawZDTAmD",
  "key29": "4QCGEnS3h277rDkWHMqtWyd38k4nMNdLc8pHcyXPwsqp8f5z17GhcQzrKLo85wg3PFaw6AojSpyuhRPCzdApWmg9",
  "key30": "5ryHQqX4sACQH7YvnN577kHPVDyfWcb5Q3cMzae6NSgtEToszCBFHQLQfv9VXvPdVmbkkmWczFWK26hA91CUBdpL",
  "key31": "5rc8G91YMXoZSZEgX2zqSa5GTc1QBJSzQZnCYfRhUKCs5tvMdgcFYKWydaghyCcS3JY2CVCDxA4cFqwynLqMFnbS",
  "key32": "2RjutNkvnCU5XenuZxSiBS12DF7y5vAqZ1P8m64x37AiXAanxLqbrbUcYi1cBjhwtMNNb53qMS6d7uHoh5YWSkNL",
  "key33": "4vVa5nGXXzc89EDYsyGxE95YkvJsvE5wtFysika3NE6xDsTNJuCPMAPHBpgCAGHc6vGkj7vd8sKRbdxb87c7sncv",
  "key34": "aEAU2mLhDXVCqbTkhRrBqDb2SYvaxHtqHuMySasYDhRFSdrBuk4zddM1FzhuXNZvPqXKqPaezVt2huaBf5Ta61v",
  "key35": "2MxByoaYv4RFtFAZCMrevBb2R1rBWhRiSEtgYPf9zHFhZBH5UarpoQd1fwAikfwqygMwPLtacccwWAQu32uVqn5S",
  "key36": "43MzYtHHGeVP4AxL7JbWk4roBfg8WJcySA14aAUBFq1GLLWhnfhwUteRnFjDLWSDM45rNr2PaLX4Wf6gYYhY7gMf",
  "key37": "3yyTmApvXuMof3sXrHQUoQbwt4AHC8BKvzREj8BZGgbyuM6oWDi4DUVYC9iGJxMiWpjwXCtUaEzfzJs9S3WhTpxY",
  "key38": "3XR7NqRnw2kCN1avzR2dY9a5Dnypu53MjhsqvvQs3oUFgUn9Jv99RJik1ZXTNijADSgo4TwQx2RN1RfrwnS9oaRo",
  "key39": "46uE1UdENjBkuX8cTCazgVhgcTSjbBXad8kptWqAFuhi26PHP4hHdcGV9reiVRM7dwbZW8oEPAG82ywxEH1LtfsD",
  "key40": "2TnEVHjwhekYH7sDAp9jfgfyJAAv6FD4AAY84z87T8px5t1QQAu1GDBbUdqJKcg82Fw7ASRcWbaM4PQC3Qh2Akh5"
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
