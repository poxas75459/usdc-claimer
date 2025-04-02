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
    "qviDm8rn4uU3HNVT5x3J2YYA27yKaQFKD6Lca5b8xTsoidQAvhuEQVtuXwJbwAnUYo7zx6CFG1MrjbwZmaLPSEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1HkKiszmxUwon3dry7AjrUKhDpxuz27NjpEYMmRVAn9LFK2znzh7CX6ixRbShy74Kgt3HVUguSZMHgcerwbCsx",
  "key1": "4qSL7bAHZSgqsQCgseD9D5tKEaFWtT6dh8fJ79WbUeEL4apamv1xsjUEmQ9tbWmhxyePXpLdBLLJdfdkbzxY1rm4",
  "key2": "41jRLRFSYY7oH4TJLNNbDpgyVnak3hXw1p2eED68aCvffo3f6FgeMnY5bYvrEYwMoSWq1cjXH35NdmzyBPNPQgYY",
  "key3": "3Nuh8r7ibSjUmpLJZqWY8hQWEAXpuibticyZ7WdAV3AiLZEGC7cP8ZhzUmtX4vZnNiR2kVP5usVb9FXGvJPJcG7N",
  "key4": "4hKYi81b3HhwDYHcTVVCmcJPLg3eYjRHJHLzEeMYgrDU9DSzniEPyHrxwu8CdSfHydnwgY9sLZfUuNQwybxE8Kw",
  "key5": "31XxiPes1EkwTpTBCTJkjhqzK48BgVaDWHz3VZiQruQ6iDNQB3NJWktRhJSpBQ5S2tSLLfhYBJFswGz4XqTM7JRQ",
  "key6": "Jv1GfL1qSt1WpXS5Ba4gAPEMtawTf2SFHjC9AaUjFsK5pCXmn9emgTLvzePQTwJYurDZuqNGqJbHwYGtp7LBG2E",
  "key7": "PaJ3duWwtA5xTaz8gKtgdTfQHBA4Uh8MVdEJExDcFQg8eBn6sU2kSeF8i7MUyLqbLyd5rZk8fcqVxkPtFGP46h6",
  "key8": "3RdpHeJAJNoe9Q9mEcj7fe6Uo919Gcmd5BJB8sLBwd5KqYKfrc21UR6z9CpeWuC1ZeEXjQVTTY72Hdyu6UqhKPeL",
  "key9": "3HPcvGJhtjar12yZS2Xb4Frhs2edQN5g2vUUVT8N4Ck8idkM2LEBSCJUVv8n4URaHzoxjkWdAmaP6JoLU73RGomD",
  "key10": "65cucg9D9YnCGpEu2jPfExnPpnUSrjn3Ue9hFYY1hqNLZpwYTsNJbGWM2HbenC61MJrFW6d5F7q8MU4gFUJi55Uy",
  "key11": "5JcXA56ZkBTQXbC9SprqsXZYGraPA5cGVzmYsXsMPTqg43bi56ZRaxTVpwc2x2onYsTSiJMGZzmWMa5fDpj1Tmf5",
  "key12": "3QnTUJuWZznMv1vp8mE9L5uYGWNZ3kNMk2foAdtL32jyEmioJzo3qD9X7FV1rdUG5ycApCCZc62ccC9J14iNK85m",
  "key13": "2oProaRPkMAdMJ7eEjJSZdymagnA7MxCzwrA4MXUfHe65WmP7NLoNNLhWi4hSG5Ljp2EvE1K5y8ibVpuZgbaozJ7",
  "key14": "3MX49hfWvibq7U92SJs3iMJvt4vs6xUHUQr8U15iP24rA8dawfNXLHcfPLy3Lm1yukDmnRG1JNkN6CZpWvFEx5YQ",
  "key15": "66AMR1CzkWct2Hd5E92d9EorEDcxoqMMqqrbcFXxXXaRUrAvKvbmGZzvrLH7sL6rntewQ679KYQdopZhj5VjB1L1",
  "key16": "46qprfDpmvZ6saGqF86W37qbp9fuccv5oeZNKKyKZBG4CkuEaJ5E24yF8YpmZanx6c6Y3V7anaxBpCwvpAPS3efP",
  "key17": "5QuDd9qdMTenv9wuNXVNLv6U9DHdrzLmHEMXvqEDaw6Sn7QJSe8hVppnByYZ75RyifsgFWP6PK4j6Kh1jgC7PeMn",
  "key18": "MFBUU4qGyYFPrYpijTaaUfB4XcvM1uxPtAxTqbEVRu94dwbCvDwDckvAASzXEWgWdMx47HkeE8ZjoPsKA8yGUdB",
  "key19": "2AitQ7UDGwnLgg79jBzggRo5gnzHWhDwgpgo8wW1VWA5Q4VuTtGzAbkYUd7QcMttMzmjBjAZ8f6mBUBr8Hdyx7vH",
  "key20": "33tT7evNZVTrqsr2UuDR4mnKhJpDVfaXs2zjEDuVUdjE5WJ1NyRWSEyXfBd65wEhE664KMCR726kQcwHwNCJcNQQ",
  "key21": "33ucV472GtioZGEJKzJ7LK7Wvg54qjxKeQax2YTXLmPNVDEySb4VqPWYktNfsWSPLi7BoNvazBzZ3xTSkf3xRBxc",
  "key22": "34SuP7AyobUX1pYhuJWZcn2waLMxwtjJmotV3KJfHPe51PGwXi1BW2zgPN5erFmQtUp5UGBVF9vVC1jofNogcvAJ",
  "key23": "3VFmrZx5p1YjTDwCmZy61PeeZL6JFBAVEnjPG4XauhaCf3QS3NgiGhuGJPHKZPdfrChdR2sdTeZ9Vn7MiC6RMNqP",
  "key24": "3BrtXpAcCkRLCmWibKPsTuDg1EDBNh8BApx4xg9d8cAKVE3zVYJXhwnpsThyWHHBdCWxDbzm4qaKaWhq3A5xFTLd",
  "key25": "4ViHMKFjVuNM1ZnZmuYJXWcDnXjJTDdJqwbHyNuEUMNk9tkseAwuq5c4fQkCBPtiaxjM5msoRhhYdSfV1buu5kjG",
  "key26": "3jdKi5pwtrGM716wbg3TNRDvLSZCfYE7BmYB7caXt5GMDH2DA7qs69iAfGqGHzUykTS6H6vT6C3ZYi6bGtECLpuw",
  "key27": "3mevKwu3pVLKruvwnTpgnPqneHrXZsdWn1K864xtSFRa87HRVijxgHWfE8XWUnsRYE9EExTfefTKfaXHpmUS4LbS",
  "key28": "4myu9rHLDcEZ6XWb7gRG9FydrbG7DuYVPmpxbFPdwmMDfb9QoN8Z2uWktb4s7xq16PXFDA8WfhN8SAqyctCUEzwF",
  "key29": "4TqsyjXuz12mmoUyF6ZJqJSpeSg1LdJ4DVeEA86yygTyV7EYcq7tvqeg8hVMLGDzw4eaHUYXnBuUPY5FTzeDXvGn",
  "key30": "2cLRhxEe6v24Wvz83W6CY6QFvcYjpDKoLaFpnQ7tAJVhyDZuA7BHN2vWjto3sGQZWkMZYARh5aebHqzRs3rdp66f",
  "key31": "5SgYwkCep3BKWXw3Aimonrm4pZvEGseBZTK1LpjssZGF8SnKjug3MQkyXRjf4wXeRdkMM3HRt7EfS8qxPtGu77rT",
  "key32": "4S2afShkqEWXhPkDLafdeoo4mKGxwdCEKzVb9CDUydAgBib8v8KhXCzBF478ccdYQaNkHi5XvDAuZdajkY75w1bd",
  "key33": "UFeCh2TtncWFBazQQ48gqbySv2iqrigiFNy3JSdnoXv7joCkbG7RgjSkuVjhS4JyRjNWcjok4fz3KZy9RmmFD9C",
  "key34": "51aTWMfwgmzK44A3nxiGM7x1ymEqVcz2JwcHpU2TFHC39a51D8x5GawhqQcogeHyT3aFu7EA2viBS6JgPrPF5vkx",
  "key35": "5MxQhEUhNKRhLPrCPp7qzV2ZcSx2Lu3q1pUyMK9LBTyeRKUNUtEGH58XfMJEaUXDYQXyfYRkEp9qkCWx8DUcLezR",
  "key36": "5Cn9fE3GxjQzKxCaR5Rb8zqcw6uMkBXGib9A4nKihupSrrpuAUeiN2Nc9wdJCXEdJTy1ghSLuoAFw3WePj87Sfh8",
  "key37": "973nbxZhrAPp8NvmAqnBMMdq1CFcgdAgtXrmKY2bycCKAvMM1g8QxmZGrK2wb2BjdSMhviYBGy5iGrd1vX523Ud",
  "key38": "SvQoifbjGSzc7ns3oZHZx34nSSwhe92oeYJptes9bsUubdyVikc7JwfY4hLDtKqijDspXwduYu4dqsmq3oJUikw",
  "key39": "2vY56kvzRbzP3GLWuQdk2a32vrX2GSTcj1zY8kwhsKMSQPhhwTn7rJytKbVeGCAkC8YU8iUFicnzBcTyfDBTvqK1"
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
