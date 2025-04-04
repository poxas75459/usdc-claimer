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
    "2QKyRTD5PGVqwbj2bVShe3Mj3fp3FL4mxGGsN7c6wDLW6H4iZKLqDjH3GpKoFUPQL7UZ1QohQ33jw67bqvcqHAHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3732SYoRYw6S8iAaVnjaGXe7geDvkRnnduV6zEQJZ24qXW5f69ZFwyhM5mnWkpcj33TZPsD2tgSzKLaJ15qTR64V",
  "key1": "5dxPhVxzjzmAmtxuXMAooX6wFs5B1yHYq3GySgMYBEaUBSDmPyoFcc8X8C9yGJTvmiNZ4i63neM4UHHfv7TycTr",
  "key2": "5BXUoknazyLq5Ppa6GqRgfvFAk9qoxvc6PQ5S5gFUbsLTqsbFTbXQnqDcUWEtK4h7tijkgsZ3ShPewBdpj8DAhdn",
  "key3": "2dhD3DLWGaXrgGqeL1LB7iuY7MUkqkjSCwCHzMBhVXhEtyiNSCbv65sVQmwRsopMX3TwQreJoQSfJSV1EuVAiuuw",
  "key4": "3UmSt3HKmgYzhKZAZFTyGwCJAYVv8jTQuvZrHxUWYa8X4Ld3tMEdkQjmohXvVb5w4x8rYvF4JVue5GDKBaAqVQoa",
  "key5": "2iNVcr6n5uStb2A5JA3ocRt6jDrT6k5boMTWxF33zbRjpbPgeN4LLSg6LNmF3YtRV2mR6zzR3kh9d4vZyS4jX32f",
  "key6": "4QkSYwVoUdM3WfJZubCXGtsa9uYxmw4T9mLBqpu9MkwJYQUdJARt9pbYgtiCoLbDT1u9VeVDmid6aY668ViA6Y6u",
  "key7": "2sqTyF6nQGwTH3ppjeWZTe5dJWXCGbbFrWMdFR53KTsCx7J2Q1E2ronjLZvDXuM1HLhMKAaoykdjkj6G6n8MDFjW",
  "key8": "2yUN1YNjctoQZUpgJvdMiqxFvf9nfSYnWy76U7JreC5JWHKrXHUe6C6ZYiRspAJgkpBq35NTdMPQNMtXunDJLo8U",
  "key9": "q3eQAqHmnuP5LKGbxmofUUY4WgrBSZpk3e6T21T87GfxAdfsPXHyNGtTtrC3ANKE8d2Nz2wjqkw2yf8s9KrxqRc",
  "key10": "Tw5yT64UGyRjtQkSyMDDPc4ZhmMTy7wL6gnMeFMvj9eyxm1UvXx29mHTNGbVsReELcr6Lrqg7FQeHHyVCwJocmc",
  "key11": "493XkvikQ3yBptfCaFY8SKwSvmUpu92ioar4NrX5SobVPCsy5JUs1A7jcrXK9MGSZpV3KPyt12j1j5gSpBiewbvC",
  "key12": "8TqMLoDHHWssYyemjAUgnrw98y2QDVt5SH7VJY2E7swjgTTXhJuKcCkpbwuq4HAMXgG2zKYzoRNbzGDsQdUqm8T",
  "key13": "5K8nTPLxoAnHGEuxascb8KJCwEFcvKwiLLesZFEv5cjomPUvNk1NFgp2tHfhZzQMZwwjcCuBK8h2Pp2CxtT5fb2o",
  "key14": "3YGyqhRHiyRepcDGtKNkDymbMim7A76Hq86f7efXohWtZuDPtadk8NZ2EGpTW7tqCVuaWAjZawjx1G2UxD7N7bae",
  "key15": "9iD245mbdssud2xdopbApxteDE2WgitBLhm4hf9Q5pEjLrADHZ1UPatR99EjqrrfBNYJfo54p5YBG5oYQbPmeD8",
  "key16": "2cUcEPjoZwAHkGjr7RgAJqRRdXBbzg6Xi23irdpFEPqtSDaq38k9W7pMiJS1ZbWsYWJrTSsBc49ix7cSqDMmzULQ",
  "key17": "4Zo6ibQ9tWEPMmxh7HBHW9EyxMR4kkD6mF4xCxzcbbUA6eehc6MozUY9brYEEdMZ5BBVdXhQEmcY8wLjDUR35cDW",
  "key18": "3KiHdZz18EA6W6NcujaRSwzYxKuwRVRrdUScNi2Xt8gPkPtSUQY65VmdH5zMCCZqskwxwAjXX5WtJG6pC3McMCMe",
  "key19": "2s7VbShHfWfxs7bVRF5VMPzmcHHRFtuLQDLidX5J5Nzoin6R9m3XPUXFJND4JbRvUtBkkgF9A6G3kgUeidt5w9YT",
  "key20": "52kQyhDFbYnG6cvb8QDdMrvtwamHUGqaT8aGfoXwiNDgEkeZYPVYZASAFKN7k59V2roh1HwU636gsYyTRC9WuUJo",
  "key21": "3FCzTMRoWnZCcqpYX49ecuycLTVrM3RgLgB8aoUZ3BcGS139ogqT5sn4Q4uKJYwb1veWnSQz3noWX7GXCJCo8bYg",
  "key22": "5UmT4vu5Zyv3o9wDEKNvYQ4fD5xQbCyVb4f6fxp313HqMk1FjRrQieSjDuXSYVa2An9b6m6gWg65n8dh5NrVLxyk",
  "key23": "LyFhEnkhPNHkoRjySanQd8tFmF1BYLXnfCMG79UvdoeRrTkg59jD4438cJuzpkTy7TmBAMmCsMyviGwQeWtWVea",
  "key24": "jsiJ7XqsS431w5Zt3K2oboGh1RkPEQNv7qoUzGidujHQwffx9f4vU8mqfYX1xHwcUXALSyaifAPxUdhHRKXsCzr",
  "key25": "96WXqwwxveRBJsB5FEiQ8PeJp2ZGFBhyoSjYJ6pakFb9S3rBaTsmBk8cudp7cxEnwDHMvXueJvgcs9Vx77bkw1w",
  "key26": "Z1VwhmH4ga9TwcmuiTciHMsimBmW1HsHoVs8JRbjvqQkRLstZoibStaj3W4gfzeXcHytg7kuxFU6x9AzPbjBCev",
  "key27": "5MbZ4FS1Dfi5P7qxF4UAfJt9ebS8xnzUenjAbBHh1BZ4nem1qXjVqtwRp97n1hvpNxeP78iQoqn1tqa9vupsxzwd",
  "key28": "3kLfHV2uscBfbkZ9L1MY3wo95Z6QqAcF4iHjTy8CvKQZZKg2NegYTDCb3oEAEPvPxfzR219i8PPFewyxYZummFEe",
  "key29": "3bfioTTHQvxKXwFpPHa2tkidQcQANzMTwJVNML5EZL5xMfvPaj57rf5vjG4F5MgtXAbdmy7ofrJUVZ36UvF1urN4",
  "key30": "44qembE3UqQFMoL1u2yzvPbqFM6H31ZxM2wbxsD3YVk3kxmBxacHfDwraseqqMTw1Qs8zbVbMmJxAdNGzb4jahGB",
  "key31": "5KBL8qVRiNeL6NTcYGGhV3hN15GZJZhVmVZ7SuvpMgMUCBszPpuzyqHLkTovDEgFoJQdZJqB2p3Sxs42sonhnw7U",
  "key32": "4aEnwcuKAwptfMQdfd9ZQXSG3QYBUYZo8KKmooyNsA1iQkzXR3DCBRLGAutxp75nn5q9sCwpyTzdRb4V7AtwpoWN",
  "key33": "29xw6Qka4DwwExkWYMABiNwDFgzt6VR7Dca7xvrQKRT56SyT9rxh53JwGK1hKVVXvka4u3TjfsugsFSJD3FjnVuk",
  "key34": "2w13PE3tGaFpmdkSmWK9tPN2zx7gBG2g46gRK59viCZD4LMFP1RNi6YmaQTojf5Xm4xqN5TaB96a2rV4vHWGQPrg",
  "key35": "3BfRZd5RG1QtV2NAu6aYGCqheAuw3beVEFq6rZYwhETcvWpbA22GwAG7cX2WcjbDQaeq4yAYhsMK9xaXGHTaGNJk",
  "key36": "4dMCLneCzfPtex9DLAszEEFwgYd7Lfww8SNuqL6ENsixBfL4y98VTXEJ4oz8DB5HqjMr9nxp9yzYN8qTncaMBSSi",
  "key37": "4fpsoZJ3AACKzEC9qh8NYr1Hnf6NF88xoQweUVTNPvKNrNxG4fSVKXEuextnpDDhyGwWfzkhtwSjX1PkU2c5JByN",
  "key38": "3zRZPLbXdNYpyLCy4TKhQBdCqNZHZ5nJCP9dki5e8QHskPqfNidhbCvgTvWkvatCcrtK4TQ1JFV3WwTPoL9m7Q9e",
  "key39": "5JyyyE8s5X78MA2ev6KcZ54TsX73H1Sfzqiq9MKYK738FexgMjkU4tPCLpD4FsDiHVDUvKiTTAmT3tMA99Jpc75q"
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
