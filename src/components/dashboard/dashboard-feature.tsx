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
    "4X5LU2xz5zL8QDyuc4F1EEtL37zBBwk4Dmp9Z6xewnF8A5wA2p86q78Ets4H1CN1eo9NC3EbmxrK7vkrvHWxrnAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3zgDZ1kf8wgmtqZc54i1ZYjwGdtYGycKXn7c3zpMCCw2msnSmNSQTpVXBJS3su7SQiUjREZ42P4joMxwHjSRS4",
  "key1": "NKcyVR1H31wLJRziSSkwrxvDg17GXMh2moNTD4nRW1PRzSjHJpimGgEWBH1xyPYiRbLLc4RT8ja8WAdAXBnbnjw",
  "key2": "4raycmUcBCYubSaDfgQHYQ9xnhEZEW9Xhn4j5K31VAUek47oW7abmGvWDyFAdjxvYE1ndCc6Rkg9vQQe7ZbBMeUm",
  "key3": "4195KXSd5X5Wz3Agc1JuwnT6ZNMizUaYhDArvTYxMFbX7qNKbrmRsgHDBSTYG4k6wmzStNgqGdS2eQZobAywzfDr",
  "key4": "5z7fHvjpDxNsCU3bRMUPhiYZeyqVvK15Fhov8QYkBNero2GYCmeKnLKkS8tviPX7REU5FF4RZAAKQ1qhs6x9VNSQ",
  "key5": "k4suZhUKkXhSB8vd5beCmnYdUHTSCYU7xeg1jLGf1xWxnor5TM7LQjQcjHmhNW8C4AjQhA89fRgionGk6osndpK",
  "key6": "3eM3m3AQRdwNBiEMGyPZc7XYun3Hm9b2qTkWNVKxJWr71X8BNVpg7gnizZm3JygBMFhB5JL6wV2DZaN5duSuufXH",
  "key7": "2DuNZVxfYyYpe23Fa1zz4DstGnAPuwBWbqidr4fvvk2A2kpFDUJMxPGVP61A5CwAw5d5KvZKRUvUUvdcYgmSxFXx",
  "key8": "24v7xLs3kiy9ix3ahPUBfkhUKx8PaHrGZqKWNCauYkwGuoYXCnxPB1e6a3gJE8rCCu3RuqtxTNDCycPGwEDRmRsw",
  "key9": "3GCJU9GKHZxDsuCCSw9enGhrR9osC22ozxxuvXmmgyQcFJS3R4ZD2HXjazfA9hNnWYQ4mVSZUTTbNW7QksBJYAxT",
  "key10": "2w5uz5zGMU7vkUE5m71quLfZAJBQn9qEVddYvuaUfXAGuxsh4xoqxy4X5CgSkbp5v6vbSohxUYfer5oyK6nCzjM",
  "key11": "3kijaC2FrL6veyWqo8pNLWK1tPC8ygBVqMAhe78EAkjBzd5JsYV9gH3fHZdztKg7UmiW7xcuuCFVKHyEpiVnpjTx",
  "key12": "3nK1SNGY5oChRQ4jkG4E1TzSoN24YQ1pRKQfqfNGBs4ZPNZjcmVQZcSG7rpLTpzcLw1f8sq9yYbVYZ4utgVqzftT",
  "key13": "3JxmNwufnPhKNzQkfHDhmzDXdeXCWiDvs3BAgytbWwC98uLumBUi5fcoDqxv86pLpiK9kFp3ZrBqmdMqZZ5nNi78",
  "key14": "ebMPvcxerRCYnCfChxgvtAaBRScozuXckBipgbpcWLfSa7sXgRJ3yuJrHKTJcr9cJkLWcVWUZvx2ozfGwXgrB71",
  "key15": "cabHNHZYxD471jtLGGcWV533Mf9zkh8QCAxwGyobe9V5WFCMNgqREnnXFoDBQ5i1QDvn1c8r2NvfEviqdir1umf",
  "key16": "4QckZNkXbQsJfegHKKq4jXwZok7LFYsXDjtvpo4pvhBzVk54ngmEHqaUzb65djzvMf6pJTL5Hb9ULGbYNjLGMFfj",
  "key17": "4tjSDV8qrg2kL8dssddteCTY1bbKEp4RweY49vemaytnjK1RPenbupHG2sYyajKQyV6wSoe7RCuVQeG45dV2Pv6N",
  "key18": "2UP9qryZp7Fyw6EeN57tr9RkpPtVFBJmG4g4hFB2AcuGia7Qz7ZVLeV7EcXQfD7Ms2ERFrEU6BgMiwejy2TELnnC",
  "key19": "4p8TVtUktwz4KZeHbEaZQ1ZFxboBBFvCuMpkqdxqjZur9DPJdi6vUiwtTno4Fg1E7zDHbFx1LToYP6NpUKbV9Yvz",
  "key20": "4sgrhzRtCXmAxPerxvseGnkK3XFTuokEVSsnHwhLhY5EAkoE1twJsK3Uy9dYqaZmb62Q9o8K2UH8JKAdyK4cEBkG",
  "key21": "5gNGTcLhNyS7CaZUFHcjogYYSpXJRoKt89gjLE8c12igLpV8p7TzVhKXeqBSzFDbzJ4EJkaF5ErHrMskxmuNYqPv",
  "key22": "5WAb5JsB7qeP3AYmQaea5f4ZG45rEtC7mharqEJ2oNuvjjdYgmkUcS5fCBeyH5KjQBVNNtC54f29DHBWWpqSKdDY",
  "key23": "2udS1cXGAnz8iLBSkpZ8XPZwMobs5phzWV4zgjaq2S5ApV73YXAf2ftRo2hG1rPVmrxs9ZzWdJJnaPq4f6LWQGJd",
  "key24": "2anqPxcY9hMRYpY27VHHTsZ8LaqUypZsMVj265w4W5dJgcWZiGwqt3FU7fU2FqbiGbSG7AwfmCTehgMLT8ngn6TV",
  "key25": "iMjQF9fMx11je7WejJzme6qKLGLjW6rrwsU8narBS6tpcqo8tjTj9UuJCfuN6m2boY45cwwqxjTcobWBTXJBTEe",
  "key26": "3fgj9x1rgEr2Z7waU73aVJh1bmru2vRxwVzTrkuGncFnkYnzGiHGzKLd2d8Vovh7CF3spz2LjzrrW4yUxoEBxtSV",
  "key27": "3aiS5zc5UMmcAaqan5txdEFMhjNw5Fbwhj8PS67daBsxNzhxd13guqURf2jBpGiedTjUvKHo8MC3PB1cmpjLAR6D",
  "key28": "3Sikvgdn4zqwJ8FTvnpoeNBgQ39Dbxm2XXKEmJ3oDteQEngh6eKs4kuEHqXRB8E5kJHubEFSwLp9AHpnS4FPLBSQ",
  "key29": "4ZWVFXTt6oYHazthpEP2pj9m8brDmc2poXrtqgaFsjkac1DYCWtsBrezNYQetzDTJiDZC7wkdKLWs6XEsKr9BaBf",
  "key30": "5E1zEsgkUjDXuUg9cWHHcLtHxFssPrjTQyFBMkMuwPkDMfLd41bBw6H5wDVeQDTKf9LNejf24NCufJgnFfBG54rd",
  "key31": "3UKtszNdnrdwvouEWtuFzThWyrmdPkm385cQFHS9fFXrUbAGPheHEaJrCE1DQCS382ZbcD3Ayzh8YPAGEzqiturP",
  "key32": "3iBH7nnqJuUC2dQYXVWJWxhEKiakjpvavqMX4bA6hd33zaZZqyjpX3QuBKBtXh4crA9BYeeeMP2d7mraVviLuKcN",
  "key33": "7SNFUX95HZPHsFLFTpvKiVAj2y99F7QRgi1u6MaZgNXkhpSaY8q6GtUE4JCnTijVSq8rZbmF9QZWTxcKXLkY9aj",
  "key34": "5zgYSjks8KxZ6P38jFnzZq6ad1ivQVcuemBr9nkoLbFtoSKc8hcWjDZ1SRtGgPoRJGGnfaAZHjV1PoL3iLLjS1Sw",
  "key35": "3MN4ACLX1DwQM9ssFABibqx6RaX5MV2gdikdso8kjw2kApXn5XTyDPuVLtXdH9EAecXt9fucf8NscVr47mgUHo2r",
  "key36": "5nb9DZGcj6oundpUH38P6RobUMot3fSw1Prvq2Dw3kiqSAesSPPDYbcmNGLiBT9tGQt4atdvfeP4rdqBBbWMvepu"
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
