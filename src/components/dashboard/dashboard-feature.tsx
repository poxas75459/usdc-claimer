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
    "3X96yjEC3jp1MEy1fvGhpGFkP43bzTM5Lewd1ZTtxBdyCVF6qdnpNJZZJ1q34CA6q3CbWKBSeAgnzoAXQgRCS4cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nd2HLWupS6n9K33PqBShZqgdib28aa1iM7Ckv4hqdEaRYuAHQePpZ5JNZcubqGpvmcjsJYxLiNaTKZmgZ9TgeFY",
  "key1": "3yKbo6ET6hvJSHb3zFjc7KFci4feYfgh1WfhUsPKH7yF5ChQgAG4hcLtJYYeoorP9o9NGre5iZ2dXHsqRZdqdyF7",
  "key2": "59ZE7ZGjJxueW9LrQA67FMgan6CVm88yf1jT4bWZARE9gW2eihjwKb4aQ1KsCEoqhqs6tdLbjD1BxEfyZ3cjjzzR",
  "key3": "3qTMbazaBqAH5tS5EEK29DvSt5paUsG3bHMX5xvnh8jeB45nEqatHrCZWr4bNF397P53h8DYLdibDCm94dcUupCJ",
  "key4": "59HUWKY1PvmPET3ezmerfCmfRno7DzC2exyCBpShePyuubGi1GamXVCPqAFNaanEDXtZb9gH5LxVaEiBHMU2F9HX",
  "key5": "5P2s5SvmvCUprqiZuTcHzZBH4fuXt12Aec8xjXBguVAgZ39ACsUmiE7tZ9kny14xQcHWm87i6LQzjGi6xkTgBVxu",
  "key6": "2HuR1KCr313z4bScyWoNQNSYdU5DWAkwpsqKiHNPxyobUWPVWce6WKHoA2h5b3vsR718bBeihph9mhKRbjGSZYcj",
  "key7": "5MdCVENRaVBhLqFWpA59swebkJwSmPf6RwxvUxpf8z77RBAtpJeGwCb5S4M3Tze7nf5AeMfu95yTqKZQokR4PNEM",
  "key8": "4SdjxLWm1qkrorNpRtpZcTBKeLCb8j4HNSL6S4PZrptXEZQKY9iAj9MzZqtV8ZKMPh33XQzut4c9RTRnNgMSGnHN",
  "key9": "2XGebgtqMtrG87eNMF2bPAbPe7YTWzNhS3CinQpJui9y3keHPpdUGTRDLsMdrt6xqMX7kw6Gm2UM4EtJzxiWMtnD",
  "key10": "239Q7rkJpuuypobR82kVKg4BEoM8xuK28zLfge8bNpEMCuvha3xx7xLsGTk9g8sP8SmoMD17c1x4G2q16bQ48nrv",
  "key11": "5WS9tyGw3Bgrzh8aqGwVxgky1nH8XUxAEdAcuREMbu79HZ1jc1YL4ZM8XiRzMYj5rg2AqvDY4AqhRWUnNGb7dcUL",
  "key12": "4nryhN5TYdsMrahsQ51xb8UDC5kc86ReUA1fpQGYwnqfU21n6vjmgEUXH5q2NprE9ggceqD44PskdzSNwHKXcSQM",
  "key13": "4YitPYcGGmTM4RFikDjkHzQfpsjFqXVhPPavXQV9HoeZwBeAQdWuTRiZaYaWjpz8YSz4Gu9RQYftnKfeUPYgQmJc",
  "key14": "32RkQcLaeubiTfUU8t7FT2b2myBz1YX93CF425GW1K6RKwkb49c1hpR8QyUX7WokfNDm3WJC6tVFBCPt3WkgsgVG",
  "key15": "3Vjqcx9gbTsdadvSGxEytchA7WKEbREMQvA4cH3H3Mi6ovJvX8s5ZgzhsHec7TStnXuk5iw4QJ1caxeDr6dgnFw9",
  "key16": "4MdVaDoNYiHFpzBmaWRUuUNHpwrLwSSxAAd79YajkJSzs9SyTdZfQMtKTEhXKBy4bLquN7d3q7t2CUXwyW7YWkA1",
  "key17": "vpki58HzZgv1qofcQNuCWDegKv7LsooYgTaJvz8oRNQjPtBwjUZSrgG4AUuFXqcsHNmVWZxWvUnVC7zWDJrDFVP",
  "key18": "hnCcQEP8H5aHi2JBRTseQnVihbnXkQRMufW63YXu8x5XA9ZP4me2AmKcR1LFGWF2JUf6bR6xazxxuQWH9pQXivi",
  "key19": "3JdnpQVYvwNHBSBvqkh9Nn9zJ4vnJEAXiuiyjLHGLKh8R2qKEny1KnaS1UnAEVen8Ny5BrRJtzjLojbw9o3dNXGk",
  "key20": "5y5gLMeSKAeAWDK1vWkGHBqogLLXSGdCh5vwZhMfvvJqSw2VQzKNU7viuhG3KoZLtG1oGhAj4qkV4x4f5dKKv72",
  "key21": "5GdtU1ov3EPhmpUjPCib3CznuuL4SPpQ2fRqxZ9eY9NXQqciKuhMcD9ZoGnMEgSKF3F4ppLqXS4zcBHYAY8GTdjf",
  "key22": "nFnxbC391y2RSckkQzf7Ajb4BBbzrSnvVa7JkK8BqT5bx9nBW6KetT9g12FLCJcP244CQ5Zi6Tqs2m3Gcj9KWs7",
  "key23": "2ZbPuqna6hx1DKuV6L6FDgfU631gQMCxktxtTgK9U74wi1dCHY127Nptfxix1xEvu2uvCfAGyTA5VEChX22dphTL",
  "key24": "4UYGYcZskTH8yBEs79WCq3cBksdb3qtGEYGLL892F5bUFNBLAJncywYfp59MK7a67ZNFcC3ok33xNYeV6aAZExbn",
  "key25": "25DcStEUYbDvKSMtTQs3qgLvAQHiZv9H8PvFUySMrzJALGB96RYsX9KTkyYsK6mrLeQPTDfwVr3BgXkAJ62AGkhE",
  "key26": "pq48dFR2tXpKT3Ete4NsVo8ESt1asW2w3YNJmAWs5UkGZ4qCnHi9QfZJ4PbGBaPpD1sqYcpMLVmt3EXUp63PFqT",
  "key27": "3UDAhh9zDC7thrhxU273EZzHZ2CKe3D7a9acuXWZDuWJSfRJPANErWwWjgwTrx6TuMEhx7Mmt4VB9Sp9ATzd8PXG",
  "key28": "5BziEy95sWMvMqJshGcQtzi3uSf8eCpT346YA9S6nWfExSzTtMAnKfAHUiveTniRGM3sMSaLAoWqK1VukzL3Ngk3",
  "key29": "4vCnQpdiYyBYDVrEj4UXaXABHCdQqgkFqMh1D4tJ2azyKUR7QpiqwaS4qXk8YSJg233zETV3mjZ8uw2f8U9sbKy",
  "key30": "4AF1QMjictUmF3jjnxbZ6y6TVYPi68NEGbd8cn6wUKZyL3GEntQNv3AWRK27XR4XhL72jnRwVvvjRPr5oHLajpwo",
  "key31": "3HNUty4BskVLwN8joWkuW1uyNFh2hLeCKZhDHSFvCTMhtosoMnKNmhsp2si6mAuu5zHJadowGU1XcDBaiyDWMVVd",
  "key32": "2uAT2MVeg4o2QWMn8S2h4aLK4wKUVC8Qeps2tf7nC2xbNHo8RU2aUuNrfCioJsavdwMDdF5tiP6T9K9gJ2JK7Vhs",
  "key33": "2WurJ4Hda6Uja9RYUvMdPqnwYAfALCDemd8fg5cn8qb5cgTWQFM3XcGK47Lwkc5BEkgsBgFPAnjLjjnbq9VPxrcE",
  "key34": "4UCKRY7jvPqYuNfCHG4QRSPdEXyJKzUfDJMCs3tSABnecLxPcp7X9kTeHgt72U95SjtCDRBmyavvwiSf8DvqCweM",
  "key35": "5EMPvoy8ushsJT1YUtHtySaSrDRCrGWDiXpo8RYeCgTZkHjdP3Ah8YcNfevt4nkGPHosyYwJ4EQkHdUHcDRzefR4",
  "key36": "3qu9qC8VA4w3G6ae1RoS1Rh76WYM1m1FvoKUti4ejue5jUtLB8YJ4RjyuAd2JRFRRDeiYgvA9dLWYXenLQ1MUMjC",
  "key37": "4rKq2ok8LLxaySRVSgb6dYs3WWYKomFSxGU3tWkDCUr9rsFCXnHpUNZcbnCM12C3QZEejeRT6iyEojTWaVVqivq",
  "key38": "5fA6gsWQyWakEKFfu8jsZ5Yt47dWA88N2QPp1bRkskV3XxmqvhEEEn2rGGmYrFh754kMHGK1CRiptmuJGqoGuLHE",
  "key39": "h8QwSdDwgMnWScGGSnDYJkqqehirc7qv7EGPjXXARYiFYsbbKV5kUxn3Gne5EEKTssi8YKtZduwMmLQCWevy1QF",
  "key40": "3CtW1eq9G9HsqiKTWTM5VRH5EmQp7S9WG7wcojyK2nzRe946zJHSR359zxc256UhravLbSLgxAVPs8RxE73pePKD"
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
