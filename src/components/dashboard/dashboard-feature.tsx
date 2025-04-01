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
    "2e3fecL1Pd2CZec18wt2JRvfFnR6mN8rXLL9tTau8u5z52beHvPx84eB3CjtNYWQxSADEHMNVYrEfuGUbxBNUH9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwvkWCWkdmx6fzp9tGhDovKRQSgkMWgyfM2hwb2WoXwJ4HnRpYDh67VyzqKaVukETwqArDvHJ9Xo7R8XrqXKeVR",
  "key1": "2b3d4fjRWmQFVBHEuZFL5GJNftv8jZkr47aJFeYseSPZy36fZyeB8c9xHXpTZnD4SmiQXVqtWLCmf2PMY8d2hti5",
  "key2": "5qquiocaH5eAo3rSkXrUmJTNUzPg43aHZfcE5hC6FodNL75m29E3Bu96CbeMVfL8XsfVRo7tDEJno7qYkbCLu4SB",
  "key3": "vWbhbXuyoYmYTkVJYxBqHMoi26MNUsnKtbqJ2XH1TiPttkjMoHGSRW258uELuXmn2Gb5vuHLUM1TJ12FcfbSSTq",
  "key4": "3Hv3aA85APE4BAUT42QeJ26MFkdn1Nif7fZS2wWsoKRnzZLn1saLXxRkB1p1NDHeLTYEZvubqrXaJgJSxzeUAZfh",
  "key5": "J694WicjaXfEUBK1B35y8aCqSnyufz1UkSsWZaoBM1EzhbrqoCdb6z5kjxfDVU2TJmwCMwqZQHtFyQhCsJtxwCY",
  "key6": "3ctLi9XdaHpFJEGjGpDWjt5FgPENN1JVoFVzonSuWv6ij6mFez8p3PkZDWBYcjcLuS122T9k6eJFEoSEczc8EoSf",
  "key7": "KWCBDY4E7G1huEzTg6BrZ2wwut6eAwqHLpWRWd1uJSJPWLx1hvgsicuSCVGH2AVkHagBdD79ShG9UempU8jfiH3",
  "key8": "44HnznfCnU3nZJhqdmrEAcUeL7g16sHc65ohEJA557h47RRSotWCZNramQDpuXK5HCGHTvyUJMDDsZnZD73HRBpU",
  "key9": "2cGcCcMb5v8f9jUpk3Tu9Y5e4fzz6jXhuTdYv8DarL63toqpbxSvxdb9rxsoj3tZgZ5q3a5Ug5CdrVgYdoAf2HcL",
  "key10": "wXbCeXDLfbD6XtJZ8qyrP7kB35Xr11ZTgRQuMaFzWJ1tbxbY4BS7eDAMXEV4Y8vMq7ED4wNT6zTCm9pRboRLc9L",
  "key11": "59JMGujoR3agYTnUTP9bCKB4JvFe5KmxamTNUjL82ErRvH8LikhQ6HZPgFDYWFSkYpPWvsj8APKw6wjpJgiQLyGo",
  "key12": "5ZARcUgGWL5Cv91xqNuSzJn4kpWBzA2tDYrG4f98QJW6H8SRnorH9zf4jeL3W6k5NBUP18rw1cgjw5ejQoxAnSR5",
  "key13": "4vqcLtQGfhD68JawxTbXLKape7JGfikaLYea2xLU1YEts5xgVwjh1hdxwLKKYrdsU5z3BtqQ6qjKUQmiocrM6YsD",
  "key14": "5pNbmzUeTqtCbZVud25pcnZZhx3mMCmMwfuGeXJgYaaoECQdELjJdywwg1YhYZfz8mcbPA5ozi7e1PQya4FsWNU7",
  "key15": "5S2Zx7Y9CWePGB6HVP5k9u5HKZEENw5bRYRuRaBoGJUQ8o1q4x7yhTgSNR7ihJKwhKdezyw5CrrK3KTJXmM4Ns2e",
  "key16": "4dZv96hK94HCJzRd6boEfeyeqJKSYAGgbNetJ1SUJ3stgei6QircF5nMn7vAouzWpRoB9cZfBs3Zs5Xm2A79EWga",
  "key17": "tt3RaTb9qEUo9YVYUw6FAsrkHdCL4bzPftbFXZhUVB8ei6f4SDpvJZRtrmmZhjniFsAdscnkjSWq6sa1HQkAymg",
  "key18": "615CmsjpUZSk16kjvE6Uc7fgBPNRjX5fmN7EjcRnkyFB2E13gm5hQeC6WPfh1J6NJHjfhMrzzTW6BLBL19D34bfP",
  "key19": "4GEzCq1W12ZAPCbePk35dJDFwKTHMNJwcFnR2ApBj32GnfysJMSHKEwSLL45EpeedadPQ36cjqJgJF1ruPeQXKH9",
  "key20": "5bRESvq743rZE1GULjQu98TojQSYzs9q18KzS19sJxSiJ1xEA8PABmp4tVUAQ2LHmtC9M1YzZhqWH6f8etHunzXn",
  "key21": "2pTP2amdYTBw7oVWMaSTUMZxUh6ftQqjL5wekKqDejTVfEFJpbMdaDhi4JPVs5fCKAB5y6hPRSAu8JJrjYLAkRxW",
  "key22": "5j1zHgFnQxsZ9CkHmefoWaWQ5xjNCibUUcrNE8VYw1nDuwyCHK31ThTywi3gMq1kvbG9btu6ntj27h11WNV562WT",
  "key23": "39hWy6vpRsNKm7CRK53PPyASaDX4hFtNcMHY5A2uJZKo6xiCZZhmQAkBs84wAkprJKTVQfpmHyCdLKjzJoZp5aew",
  "key24": "4cGUBxSVCqtBr2CycWmtHSi6uutcZPc15DNeVofPfV6Xrhc1PNN5bLoyACuv6gtwpM2oSUPvRv83FSjdryqUf3VC",
  "key25": "55DK3quVcwMb31L71wyLiTb3DVtKcf36QCUZBCr3wBCt48iVenb5Goejgi3rtUvv4MErEoKGYEw7NjuTkd8BHM9t",
  "key26": "3thNcgd8C1EjtkhzhRz6ejrrszzk4M1Chpj4F5Phe8nRnpnSatmuEdZpq565k8GReWTUjQAb6jbhD7kv4w3uRzp1",
  "key27": "3kXy3bke311ufJDZsYPYis41JmyHvM8NaMhuGt4xunLMXZHCKPSJ3YeXSjD66eBLTQ8mbKZ5RxJsqrwSoKtDBX3T",
  "key28": "4w7QqohxHSeVoN4yvX3SF2bYckvtNDrXCfyU5DWtnPcnDximtx7qgo2NmtqBke1g9xjSjA82i7Lg7p9k1wFhLC9j",
  "key29": "3u31ZYrdfoHoJt5LBeRV7fD8fuGrHMf1ZYj6YFut2r1jLAco41DQUrHqh55w4vcPed1hryv4XZcQJjjDcxsAwfUh",
  "key30": "21YU4oD9dDfxynTHHQf9D5JfVSGo9LQsuHNqPnmeECvtedrCAq5EE61rpuQcxjRLq1ayktgkqLAFP7vzYpsQWtCg",
  "key31": "3fVsfAQcdAWqP2dq2BTpe11tADSVZ1oJTCBv8uLfQSJhsdK3zVvtjuX2hnWKAy3UA8p13uqETMEYMK3DaHMouYj4",
  "key32": "3sBic64qJHXYAzhSWjENyGBW51HgSEtEjgREgZN9FhY5GVYkAahKAyiJmYAcDp3Q2k44qHUR3Kyi9DZscafdhdAt",
  "key33": "3irenB3dgAeFLUPsoPWPdxDqBb6nuobiho7hMeKme9KK94Js8afnAVuAZ9effeFMTqjabBGknJstios5MQo1pnD7",
  "key34": "2siTwtQ9LG9epamiWgoCCkwGM8rzXjCE39Q6dw5sm93Kygmi2o7Z9v24Vc2pvp763TE6JTh9UUCefPYadUcUkmhG",
  "key35": "5CRFb3ENh6mxLQwvLWTvb4QwfKoS1KbHnRCF1qDPcZmcLa2hifP6UHEwaftbt74NbEqtTcQvUQYvhamxfenUgeut",
  "key36": "2Jrx7mmRAbnRUdFQyMbgqBAN18BLvCUibwJYTqTuZYp6qqsTUqySpuyUnmZx8TPeSnAa3d7cbP5R3RrFUpCHckfQ"
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
