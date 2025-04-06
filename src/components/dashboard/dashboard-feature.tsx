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
    "22TN7JgmeB8ALqta9A8pdCu6WB9mWMjUunPAJzkbNzH1TxpYphTE2tjfSi6HBxAe45dHmcPn9Bgf1LmUTvG6JLSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHJkoC5EqtS9VLYsqsmLsWtgDwN9YVaoXeHewvnHL28YUFDLcjydfLYC4RFtGaX9DSAT8njt6vZqc4xmGbRkNqQ",
  "key1": "5Yx58XWP21UF17YsMQKhgEjDu7LW3tsr5UAdA3sEmzBFq6i2diPCSmtAyz3u7VcfEZXxuBZPmKrQUrMZUBrZUVkp",
  "key2": "3mdiiMzRdQhD3XM6qV2mcEaUSQFH43dscYh71CNyyNHC9KBVqv5CUt5Kv9oMsqtBNQAaddUtX6rSGCpbD6qNbum3",
  "key3": "3chDoaTa93uUR7fHxrJJ7JxvmyXyfk6WcwuPftYqyAb6ksy8LC6vnJWmSgjSNPypPNXuNPhaTD6ETKPZ2ejefgSE",
  "key4": "b1pNzcYkSrcAy56xcg7AC2KyRPuYTFWgFbmaQcYL1a3vEMACGqK6xHMUUzQFQreGjFk1fed3qN1Lo4Fgx13bPxH",
  "key5": "5JyGjq6a4xWPpU1Gg3zuLsbxuHp3evTXrP2iea4TWCpuApd6b6FDJzvrpBntS69GeBttEbEbvhGYjvHx6dHRPz34",
  "key6": "NJwEzoieG9wLnHcwxUrKf4Q1jcSBU5sL2AAwwD6JzUXffC8P4zyn1Pq9n1QsNn4JbHTrkz2kkAwPvYDqEpc4qGE",
  "key7": "4La7yyouu7tynw7rjzTqRhgqwm1VKwRBYHSoxXsH4bgJ1haqWQSp5piTRV7NRyosUtdXwd3LDu6vvW1mw5oDGmTB",
  "key8": "5JJPdhnzjQVDmhJuGAf9hyEiKVQgHeEgtnb5aJinQ2tmduthpF1TzpAMV7Pc87mLJtcNnqfa2BBF9wXKwUeN41n1",
  "key9": "26SexXTfGHCNBBsJBbdNqq7r3XW7CMyqSkFdvfk8JqjEoMH4sUvCmvcxuputUnCxtCAMFZda6v7pquRcxzz6ihzW",
  "key10": "5Ddj415jHY9nQGbi89XPycBr78b44VjEZXQ1vafs29UAhDYLP8bDntCNyLKn8C5brzWeWG133YWnxbvxLwdgbiwR",
  "key11": "3JzaQsZ94BoAetwbcDHxdrx3qPVTsQaCuwPH2ZoEjMKkNXFdjGrAgJYTUCQy5RiAwFv1xj9bSjawJSMEXU71qG7y",
  "key12": "5GYsTApRWQ9rfX3G6NBpxF3smcQvgKbP8LviMWNiw9WH6SG7MuXHfQFWQeKtzoXhPjSYZUpsbCQEYoNFm2wuuf3c",
  "key13": "49yQnHg7Sf3ZafSqbHHeHcFy9ghpHPyht5NPLDdTvtBMFuAhq1wxKUcScqUTAMWGhGfQyMNuiKB4dpqsF6a5nZpH",
  "key14": "3DVDgS45qoj3jFnUz9MqBdcnxqoqdDQNEB1vcGgynXECj4vNHSXUZH9tGgMhVvME4anjz4EqyAc5BsYnC26cAix4",
  "key15": "5e5ccox1zg5BtsYRc3zgveEzjBj2syDgsMyabRVJYvgMdqiH5mmxZhKXqKNcF7sfzLwjBGyqM4gC4Wt566T8yaQe",
  "key16": "66ExyvHhap8yUfA7ioq8HcEDP7NxNxgHTi5sQ3YFpzyXpHJ6e8DKuv86orbeKNhzSz2FXW9FiQatyEmkD6Tmq1ff",
  "key17": "4CAiTo4kXz7ojaRYLgRqYM6dwcTLeVNupyNtwMqNjhL8UN1kmfXzdft24a3DMeiov3gv4ibQbifUfWwyarpgFato",
  "key18": "411V98csiUfnCRvdH8UsJVpkyX5TSayK4esC2kF2Q55XBkgqepBd6djszup44myTCwijaeG6dqDPYofNjyBo4w1U",
  "key19": "4JSmUqG9QwdwYAieyovCzioER5ymS1zJdSMvVV9i2L5s991oc8EQAry4pMYFN4Gnp6nohbiwpbwjuTtDsctWNdVC",
  "key20": "4UNPmhFeoyYZMCXBJN2oLBM9whB7qNSHi4qYkMZ7FCZA7XwMNKUHxmiPrQAj9RMdCuWESTAHgEQGmrYMZ1oaa9S1",
  "key21": "6426YUVuRhScwYqxBR58pABRabZD4rqthLUL8mQS5uRNsNCzSCjk3n89Yj2Ytx4njsesFKEAszP49SorgvjDGBXs",
  "key22": "4reGNRk6C31cUnDT5zqR9HpS3n733DPFVwDz1ydMNY7P6Uw9vvqmp6xkjVnM7TVWmwpU7mcbmGov7qbz8mzZMDme",
  "key23": "35YonMFjsWEcLwR3c2gYC8Tt2dGrCoUWET9EfiazagqVsHsiGnBDUgRdE3kAG5C3ed87Wa6wfD6e1knMMcZpS26t",
  "key24": "4zUe6KdqEcrEEpJgPjaDgMfvLeXpyc43QZ2oXEX1YPfUKHjk8sWMdsoU5foqEBSTtvBVXvjaxRMsmssibPBBYskf",
  "key25": "Xw77EopvXb9nhVUBXbQ21LAK7tECPgBMqr2qNws7U1TzoRHdYvedELZE2hLW64RYySx5sAQ5hn2Hu5Ep2aP3CY6",
  "key26": "3iLQiYR2kTSRnz5FZ8LanbNyrE5t3BzweVkwfZkr6NPcJrdyQtQNgRcLHLSGm2qYpWFq52upT3889SQCwcXJ5Uu6",
  "key27": "5rycPiryTXWQ9PqHfJ39RQPVo1VPaUmc9CCxUi4PvErkVi88YK6ZQz6W84i6f8ZhVFdspJJTw96MhmQ3f9WK2gDX",
  "key28": "ePhwNc38Nnefgg4mY2xV8pLwjop67JtSBEJQQUbQkRRpMTBgyCoDzFYUR9QgChQbVm6Sjtpdr46qSHP6g5DF51t",
  "key29": "5p9PnDfFqkX6wxHcWL6V9uWhUnKvYvZAQxFyq8PtbSeHN8NqipwBYff58KJrQ36KTizsPzFKvHwkQyth4ziTCU1A",
  "key30": "UmVfNCenbr6TfRiDR4c2g2nbLnGRS9M95oM2WJ8to4MoEKjX439dr8gV2zJKEFmUTMAxv2Jr79T4MSYw5Z2TuKV",
  "key31": "5FQjBmFHcBgLDuG4j6eivX58mf6QaXakydk32T3D3BproNtuhkX4ZDki7BcTP2ekkn6vhY65dsPatmFXa6HC9GaE",
  "key32": "2HhUBxvQejAUTNwXhZxDF3EC4J1Kemze9maRS65oozZP4t3ahPXxMM2EXiacQEoJ2syvGb9z57QtCfbWKFkihahs",
  "key33": "33vZtiJ5ABtXe82ShVuURd8wGFkBayvmU28M8tmFKM2aTyoZp6TNX1J1BdypTQBsShMb32fqHVFn7eug4j3EFTCj",
  "key34": "3541ddhpoTT2DZF5H8vSn5hxPsoGf6HuyZYN1aicv4yjcNpQM6eyGoQVkszRpi6cQgcZRvFFQpDFn9HmwgvPyY87",
  "key35": "XCccqaNDiMnrzs7xBCPa9NgkpQvjipTd3jw16f4fpcbuDjr5i6qRArLXSNUbjFENjjM8zQXhm2h7cFqGgQeYC6u",
  "key36": "3i6P9DWLkvYweG7iAcLMUqEPF8pkLGEZy4Mti31G9WsfckwQeBqqrTHbc6mY76B92hxt3bCi8X4qxyspegcjDm2R",
  "key37": "2vFVP2zNm67rKppVrCRgZC12BqnwfdsFP5B9va3L6QqAbq9dwJ6rxEqzjZc7PehmtU5LUAKhfswBLJTer2vis4vQ",
  "key38": "psLpHdTSxFGs656RMs6QTA2qYpMKQdaqojGR3WCj1AthCSZuRBpewJVWMPEn64aGYZV6miRFHkBhxjc97fxKM5q",
  "key39": "F5J7Q7Eta2mAap4eg2FzXaA9hyxLfT6JQjVZpZHVjzxkFt5paBa6u3mMf9TYqgCJRZPZGBw2tyMVgqFrtnCP5Y7",
  "key40": "3j1o7b37wuSkCQLANrZT4YtyquHZ4vq3xWRgMRoitnXfNDaJgC2YBq3HRSksxL7SeQ3yYTreEvmJaV5UJ2Y9oEiC",
  "key41": "4kkXk7bgznnmxbrBUoQ1E4Gd7VbfgtGzhDuvB6vmWrbvZd96RnMFXGJoamieoiRsS8uKxN1gHE9FF4xp4yBNnYvv",
  "key42": "2bAjSvf1W64rSaKFMos79WD56hJShxrYXZ7gXdVZjCr1PHhcp5g6VX8UP3nv2e7cAhm2fCNrTUyZjBXNiMcp5tjm",
  "key43": "3MJQwQita1c7Y8MfMwfWuQm39kWhqQLLfq8a945KhhuMooz3M59RGdLyWbpUPde2EyeKF5pkHPud7UWtTxCKy2jz",
  "key44": "EvdBr9KmbKETVVm5cQ9LSFzCyDmcbi5XaQdEMX3BLf884wfkJvkHxNNarCwHsdaEwGVkeDyD4gnemM6daNfxfoD",
  "key45": "mdosRYSN6NJzAh4tHM9wXoqDc857dRTmfYee3XjHiHW4AREdkjjuRzCNzSf2J3YCAm8P5wL3sQke2pNu2ELRCc6"
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
