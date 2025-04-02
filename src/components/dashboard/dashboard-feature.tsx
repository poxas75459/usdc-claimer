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
    "47RyBHGgteb4rHUSxgE2JML68ravCno5eM2UJcSHHCoKuqjCrd32fnG5j2m8XqxVN99VJVsWUu2K5SebisCV8PQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGxMMADRXC76ifm1CVMnRhiBUiUfnbgLnBosf7Ldqef4D1iyXYfTYDTKbgZepoKT4yHZoQr9SPHC5uAvAy1DrWQ",
  "key1": "4cGszcQ8DZ2qqZS1rZvohQGLq3gHg1ATzrS3w8oJqph8zfVvpuQcfdaMwDjQeFDVtEZxoe4qzSaUmDZaJF4wJZV2",
  "key2": "2brPfVyt5U15p35soEw1Vq8rfXJxrZdpZfEwbt4hengqhrdUuu3eaTyt2eJSMrN7zZTW91fz7qY7JCv3sHB5RRiy",
  "key3": "3pnDwTRTvnHqVMVQYv8zH4ysJRKAxvLPNYMC8fYNdMyoPxXBtwqFKZqR5hvRreHtcWbVAB57GSV6hWjXeHdyvHa8",
  "key4": "26pzDfr1vU7GBwqC9WJnjHEgFwKg2trJ8fNt6aWuBqDYgzhfXcSVUDjR8nt4kypAnbSD4N4wRTYiF9Ms2SSFCmu1",
  "key5": "3ohYLQPHLphuFDeCWCXPkH4De6qSoDVK1CN5f3xqSK6YdduEQMvvY3Sbbgb6tD4hXN5w5qmwvu28TEJV2YJas6tW",
  "key6": "5qev2awq9XAX76tqAzUVFS6re3pFPmKY7vbGVa3ZWaSojRbez7WKLhHsxtobQun5tjiSF7icqYkkmTYLfgJwqyq5",
  "key7": "2v5deUZs5c2itkJmB8o8fmU82Ms2LHeUUu1xjAg1Dnj6v8tusUrhgZgfyKtEK9GobL95TD3HtxZAZecDXyuiJQaL",
  "key8": "4gwbpC8VJfzde9BGVo1XSnvVBXzZXG63B2BKohjSnkpmJ84XRCxmLZhgb7JSxNvWPmKr3j8p1wC4YtRbTx7QjNLn",
  "key9": "3j8Y6ykGRxoEPqdRUvybFvffe4TNqjMHVm3qKc7syfpLC9si3VyoF6JQCfrr4VAcQJzJcfZLM2uik5cMEJn3d1Xz",
  "key10": "3TutxK6csxQ18quaJWVVkwyyY1RCbz4sqdGcKHMAJPyfyLZaBsw9rPW3S6Xue7NKNfjDj3qqRmNFUWcSfywgVakf",
  "key11": "5nYzHQU1QmzcQsUFeFmJbRYgp61tVnEEfwS1sCSLRn2ZyRs4M3yaehzZFMQSM8Gkandr7se2NJw3dBL5zn2LuDnL",
  "key12": "4MzobP3WsT37LEmBLninK6T31mGcT9d2dbhyAyX7huXmnuuYXmHQdVU1hdzR5Qhj4qER2XfeMwETB1ZSjmM9qGc1",
  "key13": "4MdeA8xeZsyXFHqZX1J1Cnq4SwiW9VAwipK2DKkKkVZhtGEPQwfMP1JACx9vczTR4UHF9HYXrLFaGZRkyqEi21xg",
  "key14": "2EJEj3s9WW3aHX8SDphmmrtV6xphQo6xwQANdq8FCDDui34ybQqauLabqaa9hKibRgVJN7PGaMwap6TBK14mGhYo",
  "key15": "2dSuLCZBTGjkEnWdshJ3FWDgYZvKejm9Ko3ZGEzEyCj9sQTAcpJ7P8xUmsJbsD7wYDJKhWRCtcBYZyYot9eYB9oV",
  "key16": "NPorPEv1QV8JasuzvqbdxrEX7ZbEMhaoKx15LGkrAKFUWS58t6ZFHocWGSRJYEhEHsYdCbUt21KBq7A2NQJriBq",
  "key17": "5PVQzqwST1bhaU85PSyJ8ov2Pyj2eQgPr3dFg5jG3wCEKRmGdZQyG8Kk6FpyomLTt9ua272qcNADD8zr1mzi1uTu",
  "key18": "3cBwJpc5XmALty1k4ZhX7Z5V3a5DV3yjVgEx6D6UMi4mjD2db2M4mmvFyH7k6xS4797xy7jARzdKdE2vkpLKo7Y4",
  "key19": "3uP1qviS9QwqvMtPCkvvwT2oyHkZdL6a19Xq16g4KbdKfXoykT8hpMZ1dqgDGnbRRxTRyrjcizem9GM2LLs5wXUH",
  "key20": "3QBqWoV4LodgmfquM4Sqmhj4aCMy9hbtoeKUEYQhchhh5JEYrZ4RvVUgf248MYSBHk5K6Z7b2ZPxdAqJrXiXacKZ",
  "key21": "4wZAR5Vg1doacYE3N1fJLGxZNX74LFNpP1k9GEWv5Qf5AxDyu59HkYx4ZQsYtXKZKhJLRRCkb3sir9Ge4HHRDg6U",
  "key22": "4B4zVwopwLHQeZVAyA6RHhp8na3JXXxKhVDE86yo1MtFangE2GFTvtMsLD7LeLxwi27H5B21apTNgVaSWiQxLJJV",
  "key23": "3S9g8Moz7eX8Kqsv7XhGEyiDU3LrMmtMAiT159vHSYK148WdQhoKmDJQac29CF3E7CeyBWaXfzuqfe2UsPEidqes",
  "key24": "4TBFwsYFt6UAA9zF43Jjduzqiu2gT63GsSfcYg8ibf7z2XcwX7k4j9ud6AW4SJzJQH9ZKWPJKZsuWmUtyDRqcckd",
  "key25": "mxe733rFc19muFHdbQdRNNenvsmYCa7chcD3vA7hKuqdX3DDRrMJjaQpJJky5oJh63vrdkgsV1PQ7rPfCAdSVZ4",
  "key26": "4tPX6PPCSUUF5M23mKpdHLdYBLtmqLnC8bb3wZcPyh6MQXocGypytiVeBKbDnaA4sygP7gqxxTvaZxfhVPQhooXi",
  "key27": "5PuQ2L8QmvbeHtcafpNT2wjzy8nh8GYzj2oMWvjGyvAj31YXtwN4qr41SkWMPiYqvqxFZFbDmCpsADsphwEamYZC",
  "key28": "3bG3q3gTVd21vcxhjugpb2Q8coF4KN12XcMkqGKHq6LWFRyA8MpXnkut1HxEQFcqJcTzn4EXnczciiWfByR2n7c7",
  "key29": "2SxxbSMquVkBrSnYxKw4LBsFk9LV9PjabgKCVUTmpVBcxwdAALyvVz8ZfWdYxdWhYaZTDxTysQfeDnQtnEZBtyjc",
  "key30": "3NoQ97Kx7ztQkPA2UhVYbfJevvTWkCQfqWCRaJd7yzSZkVrEJ6CEFeTFjewcpLtACpkDhKgdHepXLumAgrcoJbUR",
  "key31": "B8komUofDzybd1F9PYbP82ow7V3xM7dcpHCB1xFUiVHArBQVAJrGd7iVhyM7aK8yu4f28JbHxAVcbcYzwLXJPez",
  "key32": "2waded9PM8shFiWwzb62RBZynbuSDTe9ZpygPfCCzmN8jYz5fqqAsmsXe1Rd9wWR3jhTJGA1HjsE9e2kEpYJLHfG",
  "key33": "4B4LrRcXmDdQx9vNqiMXinA7UMWxx5m3Ls1Sj1ZaHUEtmugmke9gzywgBcZiEq1qZmkT2wcFwsmEL9Z78AgBcv6C",
  "key34": "4ExeoCfGUwoqL2EDhKQ3kNGhaxuZnAUDkA83P174bVc2cWUvjbWTjvxNbJv6QVSAgd3Re5pBWpgSQ2KNeUHRHwcD",
  "key35": "3JwYPP9gaxUip2skJmz8jnaM1PvRbvcui9STgo1abrh48YnSabmtgksXaCEDN3WCk8YgpQ7er7rcWrnsevfcLen7",
  "key36": "WQTdtvMvCYWeHXdUytRzYPpwwsgq8BbVvCP4m9hCEcNJroyqsqwKXNSJE2LypZGLs7pVui2QG8FymxkXwdmhUGt",
  "key37": "3jHUzNUE5KdB116cWX1CqRqMXY5kzAWZF7FFVc2eCrpuXvqVPdXWkug3sMjp4BvGH143es17UrARG1bRLnFngQaA",
  "key38": "2YhFmjZnWhyum1TyWnQyXiRmSe5DXWjdynP9xd3ymdKRYnH6Za3spDVRWtdpvYfpj6es4rECfhuNccQ1sgQ9SsYi",
  "key39": "5PC5UxvSjXa58jfmxaVtKJp1VFEVko9XiyL3cP5pjHqkRix5rJGkiR5wCLoGRfJUF8EPokXwetaPXEm1UvvsTR8U",
  "key40": "22ZGLpsoGVevKiCWFhi6WM3rpjzCtuTtpR6hbqXNgt7VLfutgcLK68wikzUEBGUsgw53mcr6Uj4nTrrTyz9xiwKq",
  "key41": "5Yyf99TCQrfHcwLeZ145nL8SqymFQACcVnqowDvSTgmGbiAzCj4XGKcypWLDaRZP5FZPjtDBkCDr2tpRnkKAySFB",
  "key42": "2HC9sAWFVGx4xC7cWeMRJ8VCui9XEhgrUySVmMpZ2ZGGhf9EcJVLrR5ZyuSSoDkx5r8UrEg5vXUDij9rEr8GK6nG",
  "key43": "EAsPSGR6hZe9rodXMx3wYC15hnYTxFTHDKKHfCHSstS3LxwZ7fjQuQq54pP88YspfuMBsLqadTYeUUkhziTyUNq",
  "key44": "44zCXj3jdEVA9YW41xSFAfvnxwhoQuYeQSxWRXj12UY3MfGa1kZTzdcutz8ZHqLbtxW6vrPtZWBqNyKxsDxWwoD3",
  "key45": "2BQf2PSfk2rz3qaXaLmVertrYbSyRrFKynYQpRPJbjsTawtN8hPDM9bNzyChe3A5bSCb7G5UxPn6Ak7MoKG6dV4s"
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
