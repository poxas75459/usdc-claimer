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
    "34NmXC4nKFab6ZMwKUq7v7id66MrqefsxG6JmHvtAHYeiJTBzPmUNVYR3CGFCczTCrC8VuhyaENPjTkGnEHRvc5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjfNXUdGF4Cdg4ToYTvLzUzFJ253zLdjJNBgZQxJX6oV1A6jyk6ENWjHRJaZX9dXXNqbejSzW5UMNhp1bQdYpuC",
  "key1": "yfEQ8BjdD88dUdJ7zzboiRaAuv48EMuM89v3nU8qq82pE66MYuU6AC1Fvo2yrNZgWPfHW7aF2VsV18cLVWN7uxF",
  "key2": "58RNhi3htdPvqXxf7RUbte94j7WrrRMzzS2S7UHYr8GrP2hiU4abr4BZrAH32dhRceWTK1NSTJWHuz9QrrRzrNwn",
  "key3": "556zSkweggx6HzzcbMjyEzkSUvxSCmdRXXr8mr6k8ypBM4uV1vSoaBNUuRHvCEu5EyZfHxYQqJYqE7Bb8NbvY1k7",
  "key4": "5L9XTvAdkgyk1zzQjbWJPVuEziWM5mgmPAZt8EoLDS2StcE7scmQG1HuNz1nMuxYv4XsNNwpA9E9VEVAgBGdWdzi",
  "key5": "3xD1zK7DFMK13Ur8Q9e9SD2eppQwHdqZgBHK6bpbJweQrNoJcWH4Q2g4RUnQCw6BgHsC6L9pfsJP8Rnh47PEQ8hC",
  "key6": "28cHnu7vD9ui2YezbvT7jb3FWhQLJEh2SgYh6FtqhNzhNjXzUPzNfbWKrPj9HB5oThGpZyg39sR5TJgWHyXUzpgH",
  "key7": "4detTGSspouUCY5SaNRe7cVGMESfKug1umCdYX6fJJu69BDPHzmQgbw7HQmMyd6W144Q1YEaEK6R3sG8FzATCvFT",
  "key8": "2uxbrVuGFcP5fgQiyRyaLtoktLpbcGirAYfC35EmUW2o3iTh4onKFdLDQyE1bhjCXF9KyvXL9apmCSMyQy8oQQzv",
  "key9": "2prjAzhCrfTNbAsRXNncXbDB5PQWMUMopwWXefoirnoYcXFju4kC9VuSpiW5j2yzGfvV55VYQoTQicA9RVFE4yjj",
  "key10": "2d4NahhSKZKyjTBaQbxpxTxdZJb1taVBhxkib3uif124M93oRSSAtvVc44kWvbzGgp7ghfWDzXjxNo3QC6y1b9r2",
  "key11": "2SS7PwNcTLS6xD7VBpHQoiGfvD5QjqLARi9BvKRpkKt3SU3rkCnAsEvKuaZgVPBcPsDR7NBdpXCtKVfVBXbfTere",
  "key12": "37fpZnzT1pXFoX1t5MCZd832Qm5dGY13Cw2vxNrZbkXisb4jFxxVW4RqFnbYXkuaU1gExgsPT4cDwxgRYhRaxg5",
  "key13": "YEWLF2X3gawcNXFipp4tqFRcov5LfWdaiYjFUdzrqgmNQeq1jz3hUrWEevm826V6dcKtRSQcFuP8ktphUMa4azM",
  "key14": "25DN7p3oFT8dPExo9wsFhNNSmU9zBS9xEkJdNvr3dhaW18V1nS7a2rSaQN3T6o1Nj8vSjR781BcLQxbPfpvBnQSP",
  "key15": "38qscopLviDWtAZ27RA9du1sMEADh2DsfUSCi7UBLuxvnmVJQqFVzhTxhRZibabETtxtU1xvfBqFNbZ8HsQNPUuk",
  "key16": "M2brhaVTxyWRKYzkVnLePUsLntXjAnhHhwvmgm8Lg2AZs3x9J3beJzwgaAg3LFXN5BJuYfoGYp6XtsWo2CvLn3D",
  "key17": "4TAEjBn7SjR3LyLtef5VHFPAbDMB2tb4subgcT1Z9Qch6WUbLs3jswjGpdhMtz3qG7ATerrQssPx2ozfXFAj8A3U",
  "key18": "3AEUu8VE84SDKVQ6kE778qyaBhuq4FaDP7Hout1XM5xuz5BgErzBEQQbbYwjXXXKvJLHtmMCMUfcudx2NkNnEt3x",
  "key19": "3yHpFLqVGrmhev4HV9GJNd2nPj2A8S8MGdgcH851iuk8vvvocnw7ucNsPDjJFwtC7oc6XZ7D8JF1L9FFzwuQLtze",
  "key20": "2Bsig1Dpu9AQHyrU1b5WhTSCzbobfh4wrvymgYARNmmU7SPKucZ5iBhzYed9NL9FEHK6E67EECZZbAEF7qEAekcz",
  "key21": "2ufU217nLYSiWvWKZ7AANEDuxmEN6T8vTJxqGenvrXmTvKPSwgwBYgAFD7frnbajQqUAHVsMktSpjuxXhsJxRUxt",
  "key22": "2Dw43gU9nuyiQgnR4k4jqk1hHTXkgaftDbVqh725PwDATqCCBDNe3FhApbt65fQpCpLLagxQkVqB9mSbcH5k6jKU",
  "key23": "4jQf6dMxD4NUkdPWuTUAQq5yH7zkz2rNRKHMiTceiH89B7geSPTv4fshWRPQdJy4ziNf9n2QrynZo2NAn8R6VQPX",
  "key24": "Q3i41DwQsaxWWML1UvgSHw4VgDm2ooH8LYK9cqtJc111YZ7QSt9AWmfLBh7JZdX4Ug28FzLkEnZcHPJ68dAhkHn",
  "key25": "2c4ySD6NuRGeFJxK9FpfzfgWXsJhbqGTtpLA27P8exnNT2wxPwaih2AM4RsejwGxdtUW5WT6BF7BqRQVHDAMG5tF",
  "key26": "2dtdd4vA2xTZafVLwEGGK9iwc4L89XfEegZXZyetbZRv8XkvitHRdc4Sdc9exVKV2apSwns8zxqYWemF43ZbKVP6",
  "key27": "2PvypmLQ4Tmcfa4tv228hg7g19eJZJJwPrBQyrtbGCkVoadoCYvwmR9idxQrcKDvbT5GpreijUJJuqDNovedFyxD",
  "key28": "MXbo3irqLMBF16Eie2HwXW1CnSmybwco56NLGQ8d89o2esjuQqLydLqA2KWqcKh9pSZBS9k8Mhus8uCWSaasaBK",
  "key29": "2Uqe47m6F6xvaj7iWcpiFbT6bXqsBMSVyGKwgvYbt225MhmxHGGqGvmE5YA9DcTubp1k8shDtvy8pinC4VrYZ2kz",
  "key30": "2cwvqL7S6MEM9cAJ34hnbd6Xt8R9ChqqJiidv4jJUmPBdikXuFfsVyaEE1cUGQukeo35YFXt6wEqeCWgZP8XJNvm",
  "key31": "5e6iV1ChHLtobym6sQ3vfVyMNyeZQ4VayS8Fc3Dvjmcif5goDXXVM4sy5whPKe1hTiyis4TswiKvNJuA1GkWbvPP",
  "key32": "58oBfCdE5PRsV8TAdHCSFM6xbUZyDyPCHAgXCvcHnYgxeFteWRF68aYypQaZGUbRovBtfYJzn3wsgyacYCe9RMrF",
  "key33": "2j9dSCB8frUHx6ypvkk3J98z8251qTg6qFtoqu3hhqP8grdfET9ac73ZeJWpLKXNUZJVsKf9af6cwAzh7ud7cEjV",
  "key34": "godeq4C7uHYE3FWaSzCrbhR1KaLsj48g1iaPw6BpCD5t1pc5Wg59aKJxQukDRttX4XTEfdxqXWAL7gTPwNoP4TD",
  "key35": "2vGg1tfaxVywum1XtiD2R6GKf8nXib7fZrJCVgGTHE9o2mijTJ34vNrybL81zoitqhzggPumVdHd4M9GrUvsuBhh",
  "key36": "3R3XjJyznQcP8b5hLBsPTs4NgVLXfKxj5WUL93RERARF9YBERzvpYMmAzAB785ymtnQnt2Y4wN7WZPgecJGd7qKj",
  "key37": "2UEhwrUZNcmPpjaVn8g6z7fcUr2yNufJ1bYJAio1EzpSxX8TsqkH4PiKK1uakAV5mE2aQFwTvCLZPw2CmbPPMQRQ",
  "key38": "2vWM1FU78z8aLi7x9Aks7Rndpng9cnQi4gYcVzwzzmzNvZmFEFNNuc6s2e69FDdatTBREpwi7gHzugizBJU1u9dV",
  "key39": "41qh5i1r1GBe96pN9nE4jNTFmMFKGLPtXFqgJTpaSTKvTgUnyX81WgoFhqVYzYA4NP9oaGvRRLNK2bLA16W63ZuX",
  "key40": "BjBq5AjDF9NgoZ1A5kbaNaQUjCLb6wDM57xp1aPARc1CfhpF9rkMvvUBXZo6frW4nvjUvH5aktjNZzYMGohpSZa",
  "key41": "26CW3eXATZaRQNopbQGNekxaAhfMxmZXLbyxENE2VE55vboanuAcmF8kCx9r4mxi4rD6DnLZaF4mG4uAvGUxHcw5",
  "key42": "27AC7TqGGph3oNB19oc7vx6prjtF1Hv8vKXBFwZNm3c5tWmWBagZLtis2cZzrWSKGGbqAA38cKf6UT5gMkimXv3f",
  "key43": "2868hqbdtTZk7CMbVNVDRUVsWuRk27ER8j1QAHxhWw4j3hoBpNgnPE4YCTFpGnuvakr9DSCLKPGMK8vswouxMs5b",
  "key44": "3YhXd2EtsrzExVDbX3aQ63S9rprrkwu5NtrJ2dhrDssZ9J8a5Dy4RHWDGwuTSZwJT9FRxf7ybmxCeqq7mnb6icjv",
  "key45": "4pnwYDXN8xeqyS2ZZe4tHvjavpN9zKBcDb4vwXjCU6tCuVaa926oWJy5UsdwABFJPaph1X9A6Z2kL2V85ddu5tRE"
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
