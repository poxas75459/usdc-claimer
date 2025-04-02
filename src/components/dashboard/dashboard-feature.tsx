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
    "2pSuQhMtsVUw1fQfrCfDYvaFShff691bDNQoRyChkPf2Q7w7cdT8h5z8C69N8oQAHBrmjZEhTsCpt3y6gbg132LA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xg7mASvEVTQKLCSzdGBJxnH8LAeaA5goLqSUyB2XCUW1H8VcvuZQwDq5Bcnho1PLUDNGrFCGso4AfKHAwHPBCQn",
  "key1": "4S88NZpTCSmc7SeZqqW1bQYUWo2DqRa2NimtTdLUxyRfz7eSLMKLJQuD62YA9qMRiXd3M2fFMrqFAZTXrs8LXVb",
  "key2": "5Cx7FXc9eCJaYa7bzeHRyMKACRJ6G8wawcj3Rhi4XBPyvvsnDqZK9Km5KArAXrz2Vgn8YoEkHZZz95mFaJQmkqUU",
  "key3": "2oXmfBSg117ac8MFAXxK1qsGNimgtxoFbftwpQBgYTUiD3jBqJ8Js14W5muxU9YAJqeG6aKnZ1wPz7bb813d3p53",
  "key4": "3T6mgWp1QNrRx9dFnVuK9KPaSxXQQzwfwbcddkpnmBJZVbWUCSnrFRywQ7VHGCtRWR3z7WxRzwZmz9shYneBnu1C",
  "key5": "54s2zsuiAvjFgzL35D3Asfppb7tbYEvYUCFNtYFMLoNfj1MbXjhSiTjGrAWQPZwN5Theoj5wGw5cpKv64uia3t1p",
  "key6": "sRGcBvRFQYWVaBqB3MSsQb1P4cxKgxdS2C9RYessGVDrQFHzSXYrAro8R8HKsHCzKpB2Zqid4mtPcVJSegKwyVh",
  "key7": "utDiGNs7w5n7T4Kzdd99hAW76ad3YtSPqSvHVaL4EipmrjXdS5VYF5brurYm9mkJjACWjv8RENZMB11uwyjNJpz",
  "key8": "592m2PLC7JP5c5bGgJfLruiXqUd246SdHHUtmbooJrq6ePTBDQHm2mQUjCtSzoga6pDXsgbW2E74pZqaGMjVHpWS",
  "key9": "yUDyBJuNfLHjVwpG921G9AeNPdzZpHs3y6i1AcWLMd6Ju5cJY2GNahyuyuFZCen3gcqaBuHsDhdcJF8EyqDWjo4",
  "key10": "4hz3cTnP9jiEqz5EHKfKUofarg4fHKsQASQJZt1hKTB3vDhCDatGdYAPeNKcDqEQF5QuP516o6kYk8tTjwZ4yA6z",
  "key11": "2UrLjxZXbWM4opWfcRFqARvSh5vpdYmTT2a6XJd5XbQU2AG9gVJypCwLyWbAdScQAfCn9mVvTywfcg8ry1da5yGx",
  "key12": "4Xp5i577ojmnnkQHAFQgunRnBtKWCdvZowWpLCFwsNa5LrgdbusGrtqbqaDGKnxdSfk4u7yBbj134G3cZ1suGE2u",
  "key13": "2uE4dskVJC3knrsmxNcCiMMgCFKBRDAKYjHm7EpfAQeUGteGXYcAG4LE32v7zspELQ7U3guuaEYsWw6S8K7t88Xg",
  "key14": "2Det4jSHJGUom5Q1n9V21eMjHFYyyDsn6Da3AsaXC9NvVhNjkeA5NnDhD7jhbA3VK9j2FgJLW6stAHGeuBBpwZVD",
  "key15": "4vV8snS7XcKDLAe3q3RtmnrzBvbYnmzWaMKMWdMngF6C9n6iiZD7BYrfPH8Ym5UDeYzPntUbzwAWAY2fc4Th7bcG",
  "key16": "3qhY2fBRkL48iHDNhxwCHZuNKdGBAwsWhGGpxDS6Nuh8ukXeGUNyS6SLy9EF1U8KPX7ytCoodUBqYKdpm9fLrsbv",
  "key17": "3HMpPS1rf9NKucnq9M6Sgaq85jieanqtBzVrwjgt2BrDHfjZFq6wmzXuV3sb8uF7vmPfYcPjfebiFo7avWjeRXwf",
  "key18": "S61N3omPtYxrnwXwCqdAusuF3hmF9wHBUPjS4W1ZsprV3aZgFFKo57rKkVFCGt997Wv6itmeCLTRVoUq8oeL2G5",
  "key19": "47sgyPb1VfMHJ9KPGcQaviPvJvEupXbA9MgeggZdGZPU6TK3DpLQS7hjXbNqcn2PF3c6oTWUUN7zRiENET6r9ifW",
  "key20": "4z7i5MjCfSy4cbMdvnmdreBZfax6Gu7Ne5u1Wbf8P82YbGFQweHkuwNxamSp724Wi4JGxdKXonZVghUdFBChZX8s",
  "key21": "5QrFcuhyiPuFPbXR6S8gPM7pELioA4cfVWHUHaQ5TcKqWv76yu17Zz59hti7L7LZ9j3Be7FEmBQWHpA3vCJUzQvH",
  "key22": "4K4fTKzjyqXZTCMsyCpEKHS1pK45gdmrvZeU12H5zYJpeHueVcbH8svjBBj5gewfV1LTNVtv8xZhZRdQBEzqdnLq",
  "key23": "Sg6rJ2F3rdH2FwZMWYnsnGxwsQY4ZyYV1ctyS6akp6WXkohTWxCEyjwyPLUJhwhEA4r2dU7JshCFJrbsNsmLNcW",
  "key24": "5DWXe4CQoEC39UmYnxno4viE8jpRyCRujRyYbLCq9zh7d42Jb4MftggQejWFL457DAwLb6GFZRs72JzwsstCLfXg",
  "key25": "XGF8xWiKNdqkdGiCwUnTa8Jgck14eQfwjHJDof6b5XSMJN7Ym915gCcyHc26RXSnVoH74q5ikbZzJDSGqZpHKAs",
  "key26": "4ity4MZ1QCwh3g9PkMeMsqtUyfZQNL9puwnLMmivcvhNV6xW7xpRd7bCgipRU8v1mmKoBYuzvqNt5bCnXqkkYu6u",
  "key27": "4GXFLMcpf7JS8ZFox81dppFFeknsL9uo1kMPY3sboSNN6DUaVbmFXS5TzLaq3EhnYL71tMBuWJzPmQ5hXibE4K6T",
  "key28": "gYmVSE9JybLU2zHUWYCbMghyv84gigjGzpuua11brLKgrRbvYM8o99asbffjsnqGTgEeuV2nUwBfixKo8XxE9gx",
  "key29": "Uj9pLJxWZKTDSyXuA2YQDc1DQp2hHrje1pmiPh99TcAHV8SosC8ZK28UeToe1WLxWP391deZDwdBn2eK3wuLbtq",
  "key30": "HExwSLjjCuUAoaLexSxzrcJLbxeb33HKTU6DFan97xNFLLpofi8ig4gZjksLKy6Gn1uVb52tm6FuHXjoaA6KGQU",
  "key31": "2LAwzfVzTCmGyCVXR4tbjgksDf583p5R46uUu2pPC14N1EBbv2pxin59ytcrUQJ6L9rFvr7xkMTFn9JjoigmDLC6",
  "key32": "3nnMrTAxsL5KUDZgwafbnD4tZ6jD61H2TtubQuDUELbrS3gJkpkT7zxq9jEdqLVMTgXutGpQ3eycQjBTvvnveFjM",
  "key33": "229Wpp9UA9KccA9QR4KmHwftfhukfxwRXAGH5YiwNCcRYp7t6FDy38w9USDq9wPgcshNvVydDzMRgJZhqQuX3LcQ",
  "key34": "641XBu5wTeJR2wJcBzbmfyoUqCWTU6A9JAY1YYWCbJ6pXh2JMUt8sb3GEMzPFNGvgWG6VDUYRaemgGWPY9BqQJ4j",
  "key35": "2yud4ZnFd81G6GBEhQwiwCfhxCpjDZcZ5wEqRVzU4fgeBP22FDADpadKvuLmLLhKWKJ66FMMhGWfAnR943ZSrdtK",
  "key36": "4RLkanyq1t7vfTSXkctriD7xSoJqJ96BL73iPmoaCAneuuugJ9qX8RLSSF58qXqsVLvQSnW5W21pwG3wh6nCZoaX",
  "key37": "DxuJ58KaVrTbYmrcD18tNc4abRPP7v6SZmd2xVfZwwQTCZGpDNzAFXXqHaNYYShSYzr2FCD78Tyz9bp8ZDwRVjx",
  "key38": "3hHChHBY2y5boKa15dxrBSXm1AgctMpBWfvfm4GxJgwiLZreES16ymgdvPQkSxnyt4fwJ67gQMvqAMcCrsV75i3J",
  "key39": "RRTAyLyn6CG9tRiDGfvEAU4GNZHLak1X4oRgmxJkG1eAW5xRvvGjJaR7pvbm9dvtoeVT7s9wiwVkQwzrumqzuSo",
  "key40": "5MrqQYTxwrvZnossFv4VpFNVKLTghZF1npyPvE2G5Yr9kYobMWE8DmqdH1LjPJQLcBAsLNEtoLLKDRju5y49gPEH",
  "key41": "23PipHxPb8uxorhkxYGjW8zJ4KSY2ZR9NqDhWqihAVybdw6PYeDcYTGUG8fmr5M5GFb5r3qvEXatX7JJHDCcKU4Q",
  "key42": "3QQiqLLPrhaPFGLX1Rd5T7Ze9ZjcNrkyadKjWjct2k84PKRK4fWKhjURG1Se9erwuXncJdynza27Aca9Q3EB2nVy",
  "key43": "2iVtfkYfAYdaqfzBc71eLBCnzyWdX3M8qG75yaKM9cxHwbtmbpBzvmGcVcYmHCVDRhcUsaCC5bWPanh9xCQzRAoL"
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
