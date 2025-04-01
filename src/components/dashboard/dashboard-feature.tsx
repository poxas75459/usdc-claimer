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
    "2PPnYyfeL9C86jTKhvkrHwFUG3bKbot5GTGRtF4fyd9Nq2YtLRKw6XuMT1BbxrP5JaH2gaARe7T8gTeLRnaiC3nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rxf8KzGTUGKJhbANhgFXX9J4yTHySPhAg3e2cLiee1CFR977oRQi6wjNY1W9JyAoMsHCHxgAYPxge1KVt7uJC6z",
  "key1": "4THptxD6jEZmFQerEoqBPr8mTpVWG5eHCNq5iDx6V84dwY7UCL47QrWtnXYHtTwfxjGksVfJeGjzEGBB7i6wtP28",
  "key2": "27T4R6UFugyvxtDLDN1pHZcpL3nNuigrussvx3tsceauo9tFNGs7oM1Buiw3YcVFhqbmkszTCxFxW6oDTXWGMv53",
  "key3": "4TFtU7sPuCQdEmn5eu97SwDSwSrGHttXcZngyvr5aYo56dDf2cM38aA5GkcNcJaejcixaYqvGVNXE89LHxLeQeUY",
  "key4": "2mYc9yGcnUQVKF1dkDti1EBADJF6pNMu9t7NgAw53cmMafnfz7KU9tPCQWdC3d98cdPMKZLtWAubPJzd7vVgETEr",
  "key5": "45JMzwfrwJCouojdK81M5XfrCZEDrWfN5fNk5f1KxY4tFYMtALHb1PaSqNjEyPsLmZMGNwT2Nr61VbiCyCDg7bty",
  "key6": "mNUxzDj48ne5eShgDYhcQbkUSWsTpZQ35dBv1jXWkCwH8wYwUHpk51KYCWsEN5w6tKwGyDHQstyMEyKJtspb9W9",
  "key7": "5p7TmzGWX2fLUunMeWk1Ca3DxT6pHF5EzmWsQ2Fzu1wfgimcoqi1cPxTeCQ1u1et632qUpCwbuiRLazeC6Vs93Th",
  "key8": "B86BdVSH243g4gRi2Myy3KWyGFSzuqiTSMKhM3BmRy4RZammtHDN3yEHkaCXgLrJ4kD8g9qmi82WRFggcvQz1e9",
  "key9": "3bS6SrVDup3gn2pafDEhoujrmywyZnVBiTSnUkdFTVk5gDH6jUdcxgYmVfwhdqGTh7fzxDYczN7fShNMmstdRWSN",
  "key10": "3BByHbjbYB5Ui6ZrnnZqCPqMS4kaduVW2n2EQey3BZ6vjJFVyCnPa5A3PqbAxiAdi6DWVAyucMuKesBv6rgCzBR3",
  "key11": "8wiDD6dUw8SnB7S4xG4W5XfYkWZ9bxWXZMXUkhKdSFYQv8ncWwYVUxdS84TzN8k8YYLd1BqJVJ8qhkP9Z2UcpwS",
  "key12": "2WFAgGHTYh1bzFY4HdRQc3CNxuMxSHbKSUTQTWyg6uQXURrKrY2QbcYQqr8nRFWZZpCFL4cShQPsuCDVhe3YYCFA",
  "key13": "3avubcj1Xj2aWBHye6t6s6ybS4dHmmim9EhzLv45WMtQ3gMZqX9uqEHngf4Lf3QeQGYafQXuF9fmXS5b6dkVsQED",
  "key14": "4jTqZhRxaXgVcpKawuA6ecyJbfWyegiaca4VwMv2twjMX6FqQzMex9zNL9oSpnhtujod14tFD3sMtxAHbhofiqps",
  "key15": "3tMpF8dM1Eb82NSMJzqb441UF1iWVSFXqgxVcQw8cWCWgBq2rUF1Dr6ELn1WjjBHvJRAjdxGNt2fc4tqW5UQLnZU",
  "key16": "3UvSP1awqoxaWipNibMi1M5EiJoTNYFLNZ82YczbPzb7eb5xH9ctJEn33PHzzu1FzyR5Y5Q2XQu4L2dChAG7kaQQ",
  "key17": "4zk1SRBXcndxHkPvsn9J48T1NVqPpb4dGFGHVPNvjfXVVbK24k1m9DipcfVspuEa2ca576qGVsn6MwE7hJLLzPom",
  "key18": "5osbReFi9kfgvzXJbXF21UP2QSBGubnjMX9E94q5doocmZ96ELdPBHkgrSJgxnckVoLLbwRrEVyFm5dtrJsfQUD9",
  "key19": "4pw5VUfDLe2Teo5gHxUswnQmkXEEC9AjkF1ARcAfMUquVe6juEvQHTC5Ere2vHgwJcUq8fqSnq7BqjtCJN13aeEG",
  "key20": "2woLYL9CkkANrFJzPePcgvA2nvr7WgTJ146TyrPBuNyGEH71ksfwhGjHVzRmMg29vGcR8kMNXADSuinNwNf953Tn",
  "key21": "2tXQCx6XKmKRcsnT92txftkT4TvLKgiY4rd2njRihGLoLXWf3Gp1KoWj514dZGADGCi7wXih7LEj2YY7gyiG9Znr",
  "key22": "61oHptxt3ARFQcaqYjuRiCsEEAPgjxqnbTuC9Hnu8rzhSHAg4fAbND5KgdvG3Zxo4fWEsbLjt6sJ4xRSvvoWxrSD",
  "key23": "5AoUZkxEh84s4uCPq6Tc3TxumosxrDEvBUEquQUKyKsmBn1KoQQ6VyPqZtm9yanV549zRgLPTJPCYH964VQxRYKg",
  "key24": "5jYUQfxmphrK8Dvne6fnvNaRoAp5T3Apg2emKXvhtJ6WsNPjoJ3UUmiGfatEZjt5vqFLz1pdDPYvfh6KnyXzpo1U",
  "key25": "2TEuN6zcGdjeFkXxyEMK1WXX5SieJNHGAwcWEbToCEm9LLsP2aBLampi1hPoisydSbBFVz1PSWg6g1PwZQNF85rt",
  "key26": "2tEQFk7JirmhynNMdG21g3XhBnY6wSbQm6jAPFveQ3CELkUKGP4bGXnoiU7E7ak5bYtfCavPFvt7xP1XuystGoAD",
  "key27": "5bgbAUJ8pdfrMtRxs8dPDNLFfJb1cshW8C1e21HDHfRAKQAe2qNGaf8oibSPQdXowwAQRmYb1sJQmAVmDeHWWgbV",
  "key28": "3nYAB9RW2xB1yoFMpZi8SP6JsMCQeFvC5Mi2eVkxxgh4kGkhNZvhB8P12qwU9Lf6eT6h4k4yqTXMy2rjTuQL6fU4",
  "key29": "3PZSNLJnCKQZGSGssJkNZM4zsH2CMjj8VomXP1EkN5Tw7T9SqEV4fAPmnVvofHxYk8KxUyqgoLa1RSBvRm1dekbs",
  "key30": "3A8PXanrrx7Mrcabz2oH3paQ2t9yDYUCP1J8LuZ8pS1xknHUqNa2ctZVSdFJWGNLq1KYj4Qo5e2CnZmEajU62fNy",
  "key31": "RBhMFyAJ8fnAPYXXu33CAcVHb8JGCvxTumsYPNejtVaTZcqkoPBAhcegQWJNUDGGqDS7NrwFyMd9JqGd6SgpYU8",
  "key32": "4YbEW8MM1Nxkqptvxvsq8AbCB5QNHPUDbFy7sBPJ7V4SreAGfY7iUJb23wAb69HvhC2NgJUnbh3pa8kZxdsMSpoF",
  "key33": "2Uj1wiAAaFg5tRWhaw8zZN4SwtqBFWYQpjoa8aXftsGTvfj5LmZxDasxjh1fbTFfTjq7skGyFc1NUaMBkE2MxCgc",
  "key34": "CmEyPRqBbDrnKfKrWpcxses1pXGUYfPRDBsFp1fZQD8qyomhjVA6jRTwQpiYAn5o8GJafyAte2Z4BnpXXpH8sM6",
  "key35": "4GbGXXYyJ8oDPnUbpVrYx1HBPcchKDgHNZrSutU6cKFuS9BTsCAw5Jg3N24gydW34sBk61KDfXdBDNaXzvJm51mx",
  "key36": "5dP2NF2ZjybLtwQ72rUpr5wX9fhKTazMTZsqMcjPjcDEegXf4MwRFRZ6vESmLoQoYmVWPMtvQRgUayCZxMrjiCcu",
  "key37": "33AabZx7xwSGk6K7QnjRFzwMmbo9Dr7YVEKZQ1zuevXH1L7NbdGCEZTNL9fTfEdWaGBVwaHP2oZ1k2bQvUGPm7rH",
  "key38": "39FphwaC75HFkZnUUo4xDMWiyyGHniKrJhus4qKhtcqg3RpkijvoNABnfonysGCj7v8RViab31237wbQbnhezos7",
  "key39": "2TuM7eiHPdWfnxdUAZj7kpET3NhCwiFPg6ijBWtcy1Wec7kx5cA2JFPYczhsoyzQhN5VZkkGsXWGys9iRQ2PhyRV",
  "key40": "kTmgHzZnf8xfLe6eZKRZBsNuFGo3hjuue9v9DPT6xyNFDKnoQtZqrrku6wdTksqXVzb1jrtSEwgFVNLckr3SHAE",
  "key41": "LB2EM3shmkWcTDkDVZ9gMRnBw7FgV4DKvqceT8HDwwRczcDwWZn5DLJD4n3W1gGUuF6X6BgC8KmyTYNfMRjCoUT",
  "key42": "5TzU8896RffdJusrS4XxVNAF6RJR5rh7hyZR97SMg26Ka5CkdM9fd9wK9CnKjuQT9wBTeBvBb884aXFS9DW5bA9r"
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
