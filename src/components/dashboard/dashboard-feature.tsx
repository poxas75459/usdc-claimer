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
    "jX9TthYECVJH7td1QAA7VTxequHhWW1iqq9XAvrH7p3E7oyCPF4HEuTwC1n3uJgmPgeVqPfhyrL3DoqBqgPHYRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4osavt1juxG4gXe1gBm1KSVwYHJ3ma4SKszDwHZrzRD4LpwmdSZV1Z9GULjzjRvLYAnc9PCTk1eNkwTHiX3fsb",
  "key1": "hcjErZSCRiX1L2FxVxBAm9maT13U16c2Kp2zNmxtffGHJPi1UowNMznDm1Xj1z1Tx1jE9u6r1PCDdksRiQnLzCJ",
  "key2": "2xB6unmz8JfbntxHMAkBCezo5f843SopzqTKKZrB5kv2AiZNeprfJ3fuF3PgchCJrUM2yq7RoZJuMn3rjxQdtEhk",
  "key3": "56PWZXwRFdkW48kokdFHoj5o2zsrQTV67ym4oU1h38w1Tba635xwBaHa3nCcYiFfhiXuLwoxbyw7jJDLxV1WGMf1",
  "key4": "4WHVxke5EagZUshhAM2FEdJsYwifFKcyAwNKdNzJrHVw4qT443jGFABkMJxktLMQUvAcCB3AjyFTd5XdMU7NrPPi",
  "key5": "Qovpoe4WwThTmiJDLFgQpUztQ5i8JQyFC8fbNoBmU3JzN2VH1yUo7usqwFvCehkBhN8Qy3aztdfisCYL5Qh4iqj",
  "key6": "2WmTDs4WKd1755EuzQXnU99ThN5rizX4jUjT3AfLKxmb7eCqbXYMowg3vDEqyJVZhgknZnR4fV8jyDFuegw7X4Hf",
  "key7": "49q6Zhu4ptZU77yDpoYSi3BZfCPPhMDKbfqSeXe6sVhxpZiqPv3QJzNNmpAqLk1mX9A8nYDMhsuQgP8bTzR76RXP",
  "key8": "365SM1hTvZzzZACY2sKc3a4FeYX5stiAjbDTGR7KdRHf7tLbPDnvzBPdjChKcm8CVwygrfD936BYE5QcFcpjFnpA",
  "key9": "41AHkBMtbpJJ22qyfCvGYZgpGG3YLyKzV8GRiUPfqsQQw5AS8L8QNuAU4yy7m6og7BCZfs77yCj3qr5ZicWY8Zv5",
  "key10": "5y8LR3sCGTVqs3rg46e52cFA4x5FtK2v5o4XAuJRnQRbr1yaFHNLvVegRAkWcjpGEHRoJJtpQvv5MTHTvw7bqsX9",
  "key11": "62huxTHDKpMHJskGcMXYTbH2sx6hAT5XGhyRiJQx4eazqz9ofz2t5xKf1DRAqSinDLafWXRQBkT35RoybxURpXyy",
  "key12": "3ddfAcVVjDqsHWjcCfNorA1JxaNzxC1wuwTtSJ877aBmmQ1ysG3cSy99ARr3gbxVG54bnuPQ8ouSqTnpMLW1TJV6",
  "key13": "5mM5KAC8eqqgkiFREFnnycSuoNfG3vdv7JVceG4qbziDJHvt3rMDqMAtnZFaevcqrmz5i1LvWvdPKCpyQvguCLDo",
  "key14": "67fzSkNFv5C4kRpVh2UNtPeJSvVy2bXaS7fQhuWAo9w5uiExiAj12pUKb1QRKRyVWy2PUoZq3xdcoNBwwc459hBJ",
  "key15": "2uKRwham9FF1LwbNk5tJBdBq7h5CEGsJw9fuD1UEitcaYex8tHRuWoEKdoviK8HoMMSg7h6Ro8G7E7PAsdeMYM7r",
  "key16": "58WL5BYJ5fiY4JybHpficcjhJaVMJ6JAfCHjwBsm2ThqU4Bk38BjGpFTZLBfSoKtURoWhj7fxZDzSHjm4JUaVF2B",
  "key17": "4rryfUP8TfyEs9BLxdhTdA6bzYM7ZGmA5KsLDACY3Rz1nNjn6ehcuWK45bWooVXVzjMbHm44gQsnWLrxi2R18w8B",
  "key18": "2Uea3oFTMdNCzxydmKEeEhiGNM2Gjm4GDm6vy9LNVssZ3BtyxNGfd1xrSxMWpz8Kvjcec4Dc3GKQQmS9bwQhhuEb",
  "key19": "2bQwpdQhS2N3tV9PdtNnedgvcw1iykqXck9uiCgVgvCiESTamdjU9wKCFPr2e7DNVQnWwLxQK4dnsdn5hciaHPtB",
  "key20": "4greuJyk1dBxLesJL9ToR4TgLCoMaLP1iMrWZEW2TCt7o5ebq47UWGez9ZqU97EWARW2AM6mDm3VNVrvj3ei3o5v",
  "key21": "42TBAehDXzzGmN1NAi19b4EQVLe42Zvyiudrqw8WSDnGkwizbK7HetuF6b3wv16z1NDYDH2pAKiZADE9E3uawzhW",
  "key22": "4yyRnn85NWJPKajMCFUojsuZ1aT3RTXHgMqTdZ5gxDx2nCSSjGsVMfwh8A8D1DYrE6tDsE3np3UHYuQ85sBM92Ky",
  "key23": "4NpjSfNPuNLEFW4TJt7PVzNDNXmKsuVpFwY6ddHmzCLbkPo8YrRLLwGijhE6SCzDF6G3VwzFvvYzUJSGwWdz656p",
  "key24": "4wxB6sxiKp96UMcquWKXJth777mdxFyQYjNo9zBrwMMsR3fEToDcqicMbF9XxsS2T7cBdU8bsmhbXRxCHpHax9yS",
  "key25": "2wuehpuaGUFdi4M1MvejKVryvtSTCRAfAWLbi8nvAZQEUtZgVFi7rzGPyBVNRT7VT2LEp5MW2CFfkXuVhzuWZM9u",
  "key26": "AojsyuBZSVaKbZbXx4smioziUcAdGE3pfPVHTYryEiX9X91wY4KajBWMAFueybp5jLdE8UgEfT82ivMB6TnKcqV",
  "key27": "2m1WsM62M16Wt8FFTRwgK3WZQGz96z8jHBrugMN9bTAAoUBg4kTVzME4bS3fdkchfVfUgPc3KyJaVSfHK3ChUUa",
  "key28": "9DQqrt2eSKzotdyHpHQiDiHcbykHezDrKh8sEK3oJi9isFCYXnog5eFjQKYmSxtp2ETNXpvJTSY8zv8JxexWDR4",
  "key29": "2DLinmMUQX6K7FCJTFyjjLVKFcLLLyaiJE7LV9NNozxs8rVJ4GyQsS2iockrcPgi2Jygs2jqAM2k5feHXMU4tjcR",
  "key30": "V9XYiguA9K4UpUg3GprJiRg85MciiXLhf23Vegc6fPEDDQUp9ok1LbGuKdCTwsrh5r145BepU3Py9Kw1T118rD8",
  "key31": "h1NF17AqJg2QiTK5VTD8CXqrKM5ydqSouPEwoiGFsQMZ8jUJAvRDK1V7P9ueLm1bYX6riELairWZqRVszFAPuy6",
  "key32": "4vQHEr8UxGN5eDMgh9CQZXYGTCj8r7AtKHqBfE8NK8P2A3a48WdDRQ657iKJk4GUsdSxrnMKNvpa7W5zaWNSPAjx",
  "key33": "3LEhKRRsbsNzsmWKSg8pT55w4cQBqwi7Krvr3sqiU7TWFQ7PAVQncsJ64JwWbaeQUr4LQCq36pCbqPYGPMfSu7Sp",
  "key34": "3K932E6wWQd9QDjFW4aZauYAgZDqjGW12zsRHkf8d3LKGyX49Mb6PnATy95fD9whRG8FKzB8JgT6mVXPWF8ddpAT",
  "key35": "2kZSbr2d5vgAaDxcwKkbNaHFkArkfKmddpBNHC3ewrgBjT5psX5FJwDKPTwLUunqPTA49DBSg3k6UPZbzKtYjK9o",
  "key36": "2AGBebh6RiAZZa8Jfy97AGmmYTrXEX2vc6vkqWDgQbNyhBGFi1NExZPghN8NzPGG7yDvH3ZUmxmKiqnqWS9BqtTK",
  "key37": "45TzuRfvUrsZDmYiD9GRzivcSnVaSR3WoPzDL6yquCQTxGwGMWXPNyp5seckV9CXWh9RvL4JzmZP71VMLgoq4Mzz",
  "key38": "oYUFPiLWTcY1MeWKGsPMFfPB3MMThNVPiVF6NKL9BTnDnDvSENoKvgVEzYWeiTeVeGTQG322ZFamfMXUsEwqCoj",
  "key39": "4VaiSxvDeyQ7pArfnPZYHWQdkQ2wCW6SqFepe5obyRLwtySPQy2XvKrncVqSYYZe62xkuyjQTdz75bEnXWoZ3ENS",
  "key40": "2wyWMsGsJhtpEy9cgJp7N6m82GNzM6ztJ723yaqWYTt8CLyiBHBvmnozk51yj7cm5dJBmK9wKoitumK5fyPHAKRo",
  "key41": "SuL2AfEdVDnqiVSipcpiGmctD3PHk87k8bLfdb5npxkJArSN92DFDQEfCCfdqej46PusC6QxCpFxw8TmHYWHbuu",
  "key42": "k3nZC25JfZrCh1EvsXso5JKxC4LPBQd7AjxVg11SXKivqtBCAx4eXSLmotK6G15Tka3vBn5DeduzBaMTFXUAbpA",
  "key43": "3wCtGuVE4bFxAH6K729PrfH48H1zUwac6qwwrxSh758fmQPxGaxRDJpou4tQEszsW7LjNBRjCXcUwM7VBxb1B5Mh",
  "key44": "2hDaGWRpcAecxqpDGUMU8bzsHQw3SAA3C8qPenWZdNEHm3cj1qAn3JZf4zkEpK5GRRnGFNQaWmYVFDe49YP2of8n"
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
