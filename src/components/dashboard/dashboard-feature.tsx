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
    "C1yubhvpNE3nJhV9PfSgia9j8JhrsBGWSQpifrhv6z8z33PwhyeGVeZ86Ak3adN5f9swo5nFaTwX1k2ASY1XYvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dk1bt9iei2ArPAuTfupx4qx2dqPfDT8izTdqineEYCjhyAKhMbMJVhL4f89PCwBu3K6HXAvQhfRwkDksR7V1g2g",
  "key1": "3d6fkPjLDXVwob2vRDvCBWsYi6CYnrAFPntYEQakGPXP9Kopygz7K8ffNPDNsDXfs1UwRWbywXZLYeLcPNFTNJxa",
  "key2": "2jre25CFtwyUuMDmgJYNaVHnd6XnnvKHdcupigVujEGUzLa71v4VsAhkX61cfiiAxWFYc2biQ2PCv2vCftW2jio6",
  "key3": "d9R8Mymm1H1SPCf36Y2Zn6J6x96GLr4qnmedroqDd3ahQrWA6WUUX9T5TK4HkxxX4QainchcM9RaBftQX3Go2SR",
  "key4": "5ty8ex9XeBL9eHA48siYbBwh3vf6wkc5cvvnA8K1Ee7JknWmsHJtX8CgD6yRNKea67cqiiRvVcrBdonU9aPytdXv",
  "key5": "2xE3awgfiav7Y9gUZshdffdNrZZQi5YqwY6E88gLLshnSbHzyDyjLnKuvoDr4GMDyGg4jzfxTvXj3KbY6AFED9Rr",
  "key6": "5uTi4rj2rSDL6adgHs9vVcg4wVzCaGnw6AgzhDTqaHAghxgpLs6p8mfCDuWRH3oGb4UHR3ZRXBuXcKorj5bLbG3C",
  "key7": "5FkiG7Uj6ytW8ZAjiUDZDSNemn9mYvrdAFVkWvhs4JDmSCVdHjQBsoEFgLTmiqXyunrfePuhh1r5tzRXLyjZS5R2",
  "key8": "3jJMEjo6K59bRVr8FTd33xRP36JMNoX3sTHpxBCSDPqvU9i2juvtve1YjmC4Wo2Qj6f3JF1uMnXcJn8S2ykyYAgr",
  "key9": "5HNK4JedkUL1m2eRxWi5zRyczg8NhHrp7hM2ejifTdtVf2Hgp1ZpGLvqbJrMCka4acseWE6CdWF3H7dXczJARsQG",
  "key10": "3Uvz3YJoCwzm2FUF4BBKuxQDaFgpNvSngeNtspcQNHNcd6a324XW9Rn54dmxgkppm6W4Tw4ox8n4GFE3jsptJiEW",
  "key11": "48y6XhUSxAxgJMqTKFut57AQyvaw47kJwpp3VqNuST7xoZQDMQyLWdyUnxa5SofUpTZvJqFeH7LTPtDeBG6ZTeL7",
  "key12": "4eRrVAwqWzREGVojNuBfUWCGbkGb7P5ATKra7wUjfnQKvTkifRkgWj8kWwLiXgs3Fe2f96pctGfBCuaSN4K63W1i",
  "key13": "4G3HoTzTKzKTYBFP4ATbWSErMpN6w4SXGhz27wP1VxaXCugNAiAVca6U47pnUjSTDThsnFrThoiENC32BeU1U7Lo",
  "key14": "3Fhv3vgqMNqQz1pqKNN4TnSNJFsdcjHDkmXLTKK99h5yGSEoUQrbLjLyBcu3PoB4jQe19mZ4HbMo8sTWrivECCaa",
  "key15": "zHKmDuFQb99tzsGdYYPKCRGaLQ8EhgprvUJwp7UW7vt7E4j7PevCWgzCgPaKh63FyYfcXVFhkPe1taV2BvY5uLc",
  "key16": "4ZD46d6CwXM72CWAn1DixJkiaH5VSvV1qT8daxrGvsUJNt8xsBDw2PCH3WpXzpeUdXMdDnPrX5uyZTeqtXGWwZtZ",
  "key17": "5Lv2KiMneAr4NXrFuCdbSUNS4g6s1b8dQZfYEspZDmuAp4Mh3PqtYknrWAX6Fct3X9MZLwXgJbdes3W7t5p243u9",
  "key18": "SgQwynGNXEW2zQEemAngUsn3uwaV8NRyyb1yrpsYm5v1GQp8wu15rnVRNNxvEfdYAe2DJxKVs4JiZiProXH6sLZ",
  "key19": "64UBgXhC7988qtQcwnmnMEVn5smDdnrZYpqyM5rwLqLcRR4dnqvRea7wGiKbrpqBzC6FHpK7aVLHHXbSRknVT1D",
  "key20": "YXu3w9oR9geMb9pcq2fKcTkmgMS9YAzrDSQEuoL8qQSKs7rVrSftGCuVxyRbf5Y6vBWn3G9U75ogzn5PvhFXgkU",
  "key21": "3h3FatzvfHSZSQMZTvGKyVpy1FTqjQTuiyxez862hfHDyRa29LS3JcknXNcTusjGzRQ95qMeZKxRj7nZZGNcYojq",
  "key22": "3CvhktZ6oECnEJ3g6dpd7iKnv53S6EHxekadBptaaecZeH9n5P56cmHNnM8chnpBtjaMNKJkLxGumAEzzTA6S4r3",
  "key23": "5FsjqaBakszQtM5sxwTVgoie4haGtju7NoNJYKUFr1JYPAj24oLbhQVuandut5EzeoGsKQcjeXgiTBpSzZdkXCdo",
  "key24": "4ytN94FepGUeqKVSqUDnxmJ4YJW2pg7YPWLkoaZvHPXoGwv6H5DdVwQ3g5fQzp2aLnqXAr8Z4qrbthBYqbNjRj99",
  "key25": "45LmccQGVg3nywVW9Vh35Khy5qbYRJmr7UK1gKRHYytXpTEk6CgMWJzsVysJmWQeQrX9M6t5NhLL2AznSBXDLPwe",
  "key26": "2TjGdKYCWxgcVawzPGoLs8kwCyW4EP8wB5sm62cdyab7aLvYq8rhZvF26jp6H84jr2FDSH6SWJuZcuBMvjqJbxwh",
  "key27": "5cf7MDQEMweUtAZuEUfGMg9qyfNKP9rXyNrRoJQf3ckyqjDGL43rSC87oRuWeXiTycqYPRoizmWZ1bD5ffP8r5uZ",
  "key28": "4tUB51YJc95j7y48mAV2KdZk2vMdAMaYPkYcMkNhho7WeKvpxP47Q9YzQRvt9fsvsh3YZ2D116aRm4Yc94zWeMn",
  "key29": "2vgGsB6juUCYYJWsZ2RFv1MiRwkLYoySuXFFi5Lu1bg2hVArpMdQFzvuBzPiQm5rkkmhXkmdf8qA8qPsffE32g2k",
  "key30": "5JjH6Vb5nTJf5KUz1gbmjYaxUQ44MBnqdh9t9v1JJ6tYyVGzGcH9o84ZrQ9rFbLRYs6A6t5nUeFzosP8fMxizm4y",
  "key31": "4bCNTtbsFazGyLac749Ne332nc9Dq2GsGZSDPu9r9SzvZTNHgEBgnWxz3DzNdvFAt5rNaupVAdNmRxFBQZn9ja8m",
  "key32": "oiED3AKf27ksnLe8n6qYukWd6v1JijfVNi49QxtSa77pvA8n2aLuBgKmHuVZYGcg6gx8UdRLiPkBJipkGNR8v7J",
  "key33": "4CyFuHj7XQLbrXKtJGPk9bXTod5H6yCWJfs6bZPmcdVfowUjhUfHZk1hh8497EMaTRcQHG3X21nZUdscEdcf3p3",
  "key34": "2Q2Mg5uEfRQySVomw6dM8nwkHUTTZYGT77D6yWsMFj7Nez1WnWKejMu1En35XSyxbsmvWjRZjtXMZ4Wy7N1ETzBb",
  "key35": "36zZV3s4gv96qNJDFPKmMzJd1gsduMECN2vQ1gYQjPCb64DYDVXZfYWB2FdGVCCHrUpZKBsYoXYKrRsnbjSBiGbK"
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
