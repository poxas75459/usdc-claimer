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
    "372h2BDcdRSjS7gH4KJkQGdMqUCEy5TLufd1ePVq4uHqos9w7ee385Jgc94mrRmmFdnyjden2T6PX1ncos2us7e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tRZAWL8s7tuFJDzV1Q4TioFnB2NG4jUHKMveWXTHCVuKQdgNsFbFNKaByTxAq4R85njS8z22V21yrA1fcB6WEk",
  "key1": "54acp8sUnCLjvtd85v1C3jHXSFqu6xChP25pAzxoSV9VDhwYyv3Ad1kmLGTzQyqNQ8k7ECdsmdmE8jiHdvGuYCy8",
  "key2": "5qprkNt2yBd4mdPBH1dx9rLahsEHbucXM5bXmkAhzPhLgLjY4LAD9hzUURP4Z1bMVzkFVcyxAf9jeimPBmAKx1eL",
  "key3": "hJn7Ay4CRFu5TjPWQ9Uvp39NCkc3hiYc9b4xYDT21mnDak9udQExn16HHn1JbvhT1Her17fG1i1oZ1xcZTWEVjP",
  "key4": "64wspCYSZkZiXbSFRG4rn3d92usA2BhVPiLynS2oRq2wUZBr1MhPUE4KFaZw6reCLJxQc2e2V1s3sDwBiZhvnZZe",
  "key5": "2s25cp84AmWZprjiDNXcpwMBiPKZD9sG7NPdaEdXhcb9E7eiYPpLVKT1Lng7EQb3jwwCaY1hReWSyu3YcNUf552Z",
  "key6": "3TzhVHKcAyitfdfok4YoseGvEMs7Yd8HrnDsNXwrY85vtFvKKV33kzp6okkNqVyFxUTnLkoMU2AbFDJ3Ys3nRb19",
  "key7": "5XmqoLFPByCGDeT7FxWkn6N8gkAV1tbpob2uRMfWpYoRLWZXtuStEXSiPhKAf3yxLts5pCwQeMZHnLypARswoLmZ",
  "key8": "3PazYLQYA4NcAP7VfcjyHXgS29cJQ9VjanKmpJpzZffenZkT4xj1Pe5ivXFa6bFLGNrr7q3wDHdaVWkEGJaXsC4x",
  "key9": "46MbfLiskmVGmbqdUeQUgKocojuj85T76Z6XD6dWMGWJxHxKPi5tYZzcz1e6kvXHkcVPn7WATiD4zgoHLG63ZBgt",
  "key10": "3311hZzrQQMRUefBvYmcauwq5Lpjt7oFLpowKbTUkXvJ1LygsWBEUjccBVjXieowjLZ2DbUea8BiQWHuGyH9APM8",
  "key11": "2vJXKR9Y8r7vT8Ho5p1aMS3K1wqf4fXFJUsChshREA5zhMHTgh6kUzZb2sBZfjMnzHVx8SePSbXHyheJHpiHgK8N",
  "key12": "MDneymgV73ZDVTF5hQkydNhHVndSNvd7qNjGUKncmu7Gj2sd5aZxPty4Tn7YwdvFcYLrAtLptmGE5h6YC4KUFPD",
  "key13": "Fa3JJpzmNk93NVqbj3DAhi8cRsNhT49suupGxrnNiCqqLHWcrLJYv9drjxp3UyMcDKUU5qweE4htiuEeyKvwLqD",
  "key14": "VyGvVsXBNd9FuPhwY26PisQbkTgDgKo8qBN9hsRkEJHnYKqGvPi5ToqMmAtwmEX76Xfz9ikyoi71X2nUZkveVro",
  "key15": "49Zw6sfmmNNYzBZNBeN6Eg6kR4QQKdNgavAWaX9CmV5MDbmjpRfC6JyyiXE4tS86pLVje1tVQ4jv1NRvdrZZ9E2m",
  "key16": "3HDw3pEpURfcwZbe2tdQ51ACTfKPSpJHzVh5sxSTSRBP5z9ytwZLHZjCZ158CNT7sXMHGhMzMJRRKaGRaQrgwRXN",
  "key17": "4mTJ5yNrjKU5CGzvtfMEVqmK4yYUeFgJDNfukrE17NQdfXZsgwU6EZ7GgDTpPoMMYwvmTqYwXZoa7QNGETRwPBKJ",
  "key18": "4MUzCZJY6DekC3kctvspv9ntxgx5rUJtcCpJSzaL5EjGbiLP986nPSzBki4GfSdtv4CpHqtGBeYnGSEC1uWxPE2b",
  "key19": "51iv4YvibiykDPZms4HkirB9u2dGWtyHMGkaJe8f55Lp6rSJDz1kzt697amWqWGdA7RjSmKpWQXrcbmm6VMtsid2",
  "key20": "2CcfPe9HdPzzKFXPgD8E1fw89RjkNfQDKxhnRr1AL4h9yLCjFdjUEuLTAuH5ghoYTdyyHEuXE8H5iy6s3dt97Nm4",
  "key21": "6FPVovzx6GUa1Knzydbzj6EmUWv7qACgPvoXbchNC5KuyqwmQeJ8cyAovweLPqvt59a7zMpjh4MZhzob1cVwUcd",
  "key22": "2wt27h62td2z94qYwM4voY3W1uKee88aFsWLz2p36UkiSyQvNTXLmjKn62L6rZhhZVtMNUNJRLCvaQZrcnEJvmut",
  "key23": "2nz7k96RsyBeiTRPfcjGDaDrp3sGoUHfxAfQbJfkJX8buW9vbwAEkKY3MVTK74eUounRXLdyMCJpM9JYso3Woox6",
  "key24": "4zb6ZNAMgfQ2DQScZGaiMD7Q1mwGhN6excotugPehAbnstM9GqvgDwYBRsJPCiKJy9Zw4N5JXP1F3qtsHiR8bNY3",
  "key25": "3oh7xfvHiTRLs9TtboUjVwRsCX6pQtFSxRYmdJEqenQEij7CduQTj4gkPcZtfkWNW1D25dsqVWbZdZSmPf1MovGz",
  "key26": "J5DuPLXbSVQBqoRdWK9YZHHKqiVZwmNwhfcSKSv4WzFatkH7VFjXJxsF5SBL54pBH2m6ZUXPR1tRvTaJFLH3waq",
  "key27": "4RqEA1xwFz9vkQvXF2BbfKBQpMwqw2wRWnRg4sg1VuF2hCySz4ktQV5qRZy5DvcCusxo9zSkTuPgXDjDzj38iwCP",
  "key28": "2bJGRFzPWA2PMf1ajKSww6Fu6Cezk5tRMjkHJeGfVXd1rAsPefCcX2HyxuQHc7pQjMQAUkwoB3R9vxvbQ8gjxjzh",
  "key29": "4TeBNcrjdMKxMxxPbwBwVWkGUWa6iBtEHwQVBE7vbUeFxt7hWWqyH9hnwq2ruuv2nGozhnk8X8fcosUjXQ7sEGZ",
  "key30": "429fq9YdDBS3Em9hjEMVVJGBRUkcYuZgzBTuTZJJ6PyJM1thNgPxGL3H6oXJahGu15t5sL6qDLFaKaKdfU5JxxLP",
  "key31": "8R1Svf7SsvFWhw618fYwGqwhbC5P9VftrJs7MimwnahQ9hnqocnw8AXb48w4Px4zo1Ay36rexiUhfrxC5JDsNJK",
  "key32": "65vNypkbNJTkWtdc2VNGxsVNffS5ZRoxdJQaAuN6Z1ZfHoevZTQMsuVRGxmZq2VfrtUSnG9iqSnFZhYhUoWt3yga",
  "key33": "5ifB8NsRW64oJTKyQjtPJkdma5Et2xbs4ZxeQ8jVHTQ7cjqek9Z5RcfvaC8pFFH7zy6765hGtLoiE9sf5ygK8Msa",
  "key34": "7AoLw5q4twYgWovVBkFqRTEpvVvKVmrhTMUAXRyBFtnLwMpG2Z4Acb6DjkQnxmmWUPBzDK1e1nmkeHzwQZbjJm7",
  "key35": "2jp3d6dVuogp5R964hVGo8qMVk7BiN6MEHdU2Ge1bZYt1EZNG7evRwCscHiBKn58KYfpwdrTR2CBi3otd3BbGZJF",
  "key36": "3W2oy6uwZf7dS3VTLKBxp6nbKmD1z5jm3BiaS26UxG8adkWaEV2BEdT91Tfda7QoXRPRYaS66cbds7N8uzQ8Aars",
  "key37": "5oA6TJyT4ury345FYZmh4yTTnjBa7tCr7c62m8Mz7VJU1Ku5XcLCjHSX1ictiA11xRBDahzU9Df5CLffiqqGnNtD",
  "key38": "FxFy3wSJptoVYpZhJV39KJqqZQvnyAMv2xo66LUgiVXeKqiErNMD2ThpPgisE9XhWXxntNkeVN5bPhWh5E6c5Do",
  "key39": "gPJVfqk16mp7tGuiYhToyem5kKLGhUCgWpanssgnDZc984oMrSNZApG4eTKmEE9ut26g3KELLHmMQXGMH7Z7mna",
  "key40": "5WQVB5hcLqCzVYYvZbchbNSNLrdKbM4e1dVfMNH2JQ4pM1gxFYsdns1WNvgZ65A6aemDU1vaLRrujTcpasJZNwhv",
  "key41": "o1CG4zFejqyfe7kYzCEz8hqHUQoA5bYbZEwJsf1WE9RTRq7YLLqzWofwaVCfsFjzENUTtVx5QxQnMbfNzo2589w",
  "key42": "4s5axoTkjpywTDeUYXiuMfEPi2vgKRs8RgM9CNQX6wup6pDmrKhQzT9ERCXkuPiYiTaqR9CQ7URac7P2y8qhZGdK",
  "key43": "F6nK3K7FkjgbMEwkcmDPCPrDtn26oybsh6Ji48giHtGfEgPg8QTb27nhpXUhgHH6j35LRRaTYhx7TQh5mEqkam7",
  "key44": "Z2UrTUqvDh7qnLKR2aFZK88G2qcEAQNWo4y23qoJrY3m4F1Bu2SWUay5pNZ9rv5m2VPR7dA2ZUP2DXHmhrreePZ",
  "key45": "3btAT3Kh9SrD5eHgFywquGCQaYm5CAK8umxgiL3PA8qoPw2fVJVfiZD2uq3dE5peJb2gmcE8yjBm19QJVkTMvTL4",
  "key46": "hm9Cev7ENLwsrWA8PsLpZm3VFxdck19dshH7KLxKESQGmPmgacYcHDtPwK9x5gnzeTiF6aUafZp6qoU3dgpqeTf",
  "key47": "4MzBKpML3nBUrRT1s871p9cT7QnPyzCsnA21Hjue2BKENCrL3rgyCL1cie7UYdREe2UKhSHrPHvkBcHznzhxyZ99",
  "key48": "2wfxjaHjSerf78APUS3gD1nJPZnFVK9ku494kNWMNKVtMNXgTyHnXgtDSNLwibxNxr93rsK7hseM7UTQwRbFmfYs",
  "key49": "2LNzmww2oYFQ6vXF88Gaw9sYJ8VRnxfgmzwyDU67yBGfHz66QZeReEph21HZknwaQ6dqUZfJAg42FoYzmzq4qDw5"
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
