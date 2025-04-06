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
    "5Bwz9EUxVRUfdfM8djSyoxRqB2zB644onFcPYwxN1TMMB5fNGSVrcJSHYzwJabz5AFNCsG7YAxVxda4EfT8VisVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzEfJm9q2DhM2dHWQFVKchJx4Pw2jBGrQHFWxhBa7714j3ybPWbN1oA4Bib3TWaCFf3qfYptMAFiHsY7CVx2Z1G",
  "key1": "twQo1MYbcEvVtLkoyi1UQHFDyauhrn9fg5N7HmVoRch3sRAGbKjrpqA5eGR7bb7znCBC62DSuMwmzWkve4sdhwe",
  "key2": "5nHnVDuEb9gwYnt6VfgY9bm7YiQvkZf2QtXaxupiEt532kRyrgs6WcTUEVDuP3sJSHskNSEFobPcTpJc8PWTmdWp",
  "key3": "25SnkQ448PuwT1kMuDEEJHLoaj2AjDaqrPKXeJAMUe4y4PHpgfMiVoWsHECN6KuX6YKvZEzUVmFudPi8Ln9rrDUV",
  "key4": "4DnG7fVKtStSLRNuGxGtyDjcj8kXtPtH5XCPEpDugfpxamSyCtftmuaukbZqWaAyz4B7L8e4ghaJZB9a17F8Rat6",
  "key5": "2baa676d4hyRw3XtPY8pXw2ZEEgXbfcdGiQDP9XZGXG6DJmcaEwLkd5exURWywVNWmT2gbrKHpYaSP6djiD5usqk",
  "key6": "59YtPqGwKgDZs7pJS62Dy189LuWUAQC4RhYUm9HRLv8DHVnWS96xXpQqGV7sm9ddXJprjFCBwty8QDDv226XDYRr",
  "key7": "3KnmTNjsjYXoRZGmTQPHTNH7daRBtD6g8wJPhPR9HfHxY77NW9LLvzVjbDc4m7HvKQNipoyLcuA4uqr1azkGKMwC",
  "key8": "2kdYVVYicn8x9ZyroUdswSVktmFeiSo2nD3BCimbu9vpQr64hexBefQN1p6ZbJanxRJ1Tx2wJnEhSEY5JS1kFvWF",
  "key9": "rwHimPe5TMHV1XuZY3hphBvvfERwtztAen1pcyEtqkAuy4o9eN3DyXRnBrsse8jxw3UWeRM2GjXdpatGhj5fBYA",
  "key10": "CZfPFut3gFJ7fqvVNR8kiH6YNoh7R7KSjMypjxC9oNjAGvta8cmipSThwrR5P67DXtuZRSchwJcUzyhfEinCWJ3",
  "key11": "5AquaMRLuEurVvb4oAyTxHAcXqLxQCztqJENJV9BudMsqSdKe1RKjoU8tyZaP7vHqiPyF7sEKSoWeRGG5irpNnQ2",
  "key12": "xJ6jCfV73WwrndjHm8y2Wnq4Kx47GZc36iqQsq8dyW6qwMENHsnHrYhGaGWy9rMhXWPxp3PdqMF8PbCkWY1n4XU",
  "key13": "3PZTiBPJTr11sPBuM2L37bkFU4M8WxZy3p2fkciYeZLKdDpTWsLHnucpdRiuexRFW2RBjNReVoKR4CwLwSQwqboA",
  "key14": "3ZXqZXMPp3x8RoxHQoLBfPEWF2emQ4fB2cjjEzJD5oeMexEA3kGYZhEqL6Zg59sKA6o8eT4XyzhmdRMQQyoxyZiK",
  "key15": "zCdqYdG5YNMLKyeN3QKpevxaN5VKfkvdRJJjsDgA35YiLq1RXy3fBEBYRie6v65n49tooQZM7RRsyka3AjsUQMU",
  "key16": "wsXqw63YngMYdq5kuMmR8Zwr7rVZy43uGeqTAGdE3B8kDq67SngA3oV6YnJLkAcN6aSZa4WefVbZ1vVbmYPbMFS",
  "key17": "5sNM8tZ7pTYFZhjL6QWu3PsL6VrUZottbuGU2u2Cx1kqZstxWzjakEFELJk6Rh3QB13ySgcXZKCXCq8KqF3Pw8vU",
  "key18": "4xr5fFhgwHgUjCZtvgJxKqdsbkFE8GUv38oGqrTwVZPniM9rT5redce7vqACQphoXsBxM1z3WJHzeToYX7nJJzuB",
  "key19": "2gxdbq3ULKR9dcTg9GTGbed2VXNnFbSFcPM41CvjmoydtyTJXyG1SJDv3sLaodQwWBDfps4VdD17xQGXVT4QC7cR",
  "key20": "5gSefmvM64ESag7f2uXwQisqtAVk7sN1VNzfkVCarz5u8yuEavLmdxaEjFRaCBJ7iMvSmars1HSXdJufYKnybE5s",
  "key21": "sL4FJWVhhJbVuFmn4sHrR7yWJpoqthoLLoJByyijYeTrtqLZ5YsUTRBsUWBkmSUsVC4PoLMXwZuWQDB4FV522ow",
  "key22": "3rocPDN2ugJUHfTxB1Dj18vC8f4NaNi2y594CBf4LK4ZNCviBLQNvmjPHSHgbnkMnYNZNVx46NToWhC87myLMrDn",
  "key23": "5s3Z1Mr46zuNsyfZkhfoSd8ZYaY26cANPUPmz1GVySLrmh8SewoaZFWiaYX1jY7v4TP5VVN6EQf3YcpAUgkgmLb",
  "key24": "5AAEHkSYQ6kmqa4RasCV6eubwwxKnfPDoeyoJEE9EV3YbcPjTEvR37UCKGtJetoWRxSfVpgmW8dKjQyDE1KQuC5U",
  "key25": "4mwh3HG4avLTieb87G2Ydk7JFkdr5Q89UjtGTa8sin8WJbfS8DLBqS1mGW4GdLQgQxqFmtGvKtVdh3tAv8Xnj4sJ",
  "key26": "27FbAgbkhzcrQewAN6CDsYiKs3AwvpAYT5tcDBA5xi25PXhQj71HxKCCSw8Z8yeNNAHiZDMhM9L8jUwtCaikUEzy",
  "key27": "2vUWyLJNp5psCVQeNag52apk7e8j5foiwAswjV2WUfgsfkJpJWJLqXTbucyE9dJhoXGpXHrEwDf4PD32J2e39pGg",
  "key28": "5bbnBmaDSE2X7GbsjmUT4GCYoG4frQrxN1mKiCDW4iPYj3fnh58kYzRo98ZLbpb8gFoL5gaGekxQRrFDviJmfq61",
  "key29": "55jfbbRY9mzfgGgAqRahYgZXedfrd8ibHY4zkWKJ3ciovnsWYChj9o8pzC9rwbCDDTb7o5m84EdH1rzevB9ueRTm",
  "key30": "5FhGKpVHrBENGCdTCM6FMVwNwtbLjDwYY3DaMEcXPYssc4Hf145EuWpbUTX4LMmxrPdtpM1BW7NR6Rtw6VagpQ5",
  "key31": "iL6m6DXroqukLac2CjjpaFY6qJ5VD3yDgQrSDEXz2p1NnJp9oXMtix6hudgXGRRVeewzZZFM2BB1VTyNmUV6uUV",
  "key32": "21sk8yv66FphCHcZBCvVL3546x2NUEv3rmu7nSbV5WwxhYvcZZFtZEDyooEaFY35fBC12zzNnf47CkaXwn6RJZUU",
  "key33": "3Y6KdkUgRFtGYbW7kHEMs7sBkQa5dnoaJtHYrvaUUUTsw5xM7CSzoffDRxq26nqKmH5gR1xqd9ZEttgk6B6YhszM",
  "key34": "U9PrnqAuRMVdoosRJniT23DvVL659zSRtnNzRLXnhmComqe3diNWi5mghEPBFQbNuJEhVt9H8HtQa5TEWjAHEA8",
  "key35": "5JW6JzybomesD1yFfju9L96uJufetA2CAMnQ8nJ4zqjKUCpmGA6qj54aG1uapJCGvdyFL384vz5hKZoboyDzUGr2",
  "key36": "3TFkGj6PededpsC23zjsTDKnVpTJJHrsyPwHYJXVY5B7HTtyhBTy4fqzTQ4HNwkEwtxTtaoi4aNKs2vcR76ojJs",
  "key37": "2gkgibx2TMY3n7yLzyvGKuRLSB1wU3h8Jfxpj4xTfy5qh39at54wyVTCyLJrgsFSomMSZkdv3jsWxDrkfsmzZjVy",
  "key38": "3ZgFmyKcwohRdL8wLtvivynjAXAEhFKz22G9waW3gpu8g25UDDT5CyZp6uJ6akzFVJFvwftJB7vnHgREuMYG9T5i",
  "key39": "54NPS7MiJm3WEqNTTddhXA592HUTgo1HpZnzmjHv6pRn9SdtByh6uikmDyTkxrVdc4jxCtELspAczLLCU3YQPNN2",
  "key40": "5BjtMDK7sQczZrWvuUmTSNYiMow2PDeVRm6FtJX7HJp42JSeWWRFV9qBCbUJeKy1NiEDo3ZB5Z4tbb32LKP9XfCs",
  "key41": "5cj1kTHQfp9cTyuctCYSFGSzEF2KLpsiBKr4w7zYmPShmLpaF52zu6j5cHJwkHCpmiR9nbT6MpyPyCGLZpYFHU5Z",
  "key42": "3qknyZ8fYxZMGVq3cRZu5kDaUvNRn62WQ3y7MuwxZYEfciLquSbmFpi6LbtqMvG7gaE2gwegv4GKYw1kBTqp6emw",
  "key43": "iZiYx11fnHTNPFqLgxZWFWstK7eqCkZ8dvx7KmnrP9VYjFoqiyk8Xqx6v28qpRdDG7tzhw5ggNkgeCeg81ZvQDp",
  "key44": "56iKbCqCdMPQd9dNM1p2W9xG7XAMsFaEX6H5J4wg5X8VQpLYrKK971KLdrZgwn8LZwzdoZRSuh56Rbr2psucz67C",
  "key45": "3MUbHLaqoeaj7WEZmHjQba3GpWeoybregtVCt9yf5H6uuLBA5ALuYiFxPTDHVyBrDpbh8TSCg97wuYhk7PBAfWu9",
  "key46": "hZkE1fuZxbk91hJcNZNxnca149fCQVFTkxsEtfeTB4T4vrPXbbzeAg2W2pGRftmYvXQh17DHqctTqLtscKcUR1j"
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
