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
    "3FcBL46KFadMZiezwtSE1Dvpcg2c1RJ1m2Qhn1i1H5HTM3rNqq2khAKCBgdUYYCYcycXqfUcxFBBfQFQJPG2nufc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWomqR62XbVDRZvKHwjUd8XHE5BJw67WgsEVV768E5fTaW3zWGKoSvsphfgjiymzibou1dBeUjQYWDGuxxp6Tvt",
  "key1": "2kwrqo5sVqZwNgtnKFbG5YwYxU2tX455du9VKWtzyMTS3nH2HL47YwKdeTKRG4EDFNS74XjFbPQcXbTqJPCDVz2D",
  "key2": "4UqfeRxagECruiWR8qZtb85eVSDm5fyBEvXqHVu2wDymJdmURCDFc713RBLetJa7YmLEjEQzjHWnK8sfkq4Xm21K",
  "key3": "365zVvqPWiw1RRTN84yXrKu8xKJUXAmgyT6mavoqH5ksu4SHhBMxJAcdxAz5WtpWco1s9zqLJTPRrYtZT8wod6Sd",
  "key4": "5KmSLAtXbe1h3xUx7udPkMQFKqxjopZDivjJmkbxGf7sFjWwa9mBzUvH76VHJUnJX27WuFb5Z4WN9ZLkbQjkfCEX",
  "key5": "W5Yj4nZWNgHJeZMcDxhpEjUozcoD7nop1GWGxqvxtqGBK5kr41gALUD4fHF4Xgcy5Pe8GgdXH8Z9VLHA5FeTCos",
  "key6": "4wsho651rLNaaqMr4WFUNsuciq9FrF2qTqi6rTUPrUeUNqSahft4viu9NTHeRnSVrxqPhvwz4U2tw4c2bW7uKeCe",
  "key7": "2mXB6GYMPUF7zpThPu5A3UAV1a6KuTBYvt8VWgHEMokCeQpX6cZTm76ZJ1Jz2MHjsRr4buqH72NyHZyKDKhrPWrB",
  "key8": "4EVtCBKiGthwro9Q1nVpR6EYZy6ubkUUhRPQRKVvRdxnDosFcYBPHbNU1mTxm68mnFKTKFR7SwumbPxGH4QDKwgC",
  "key9": "2n57Gp4oeh2DxdN75XcWy9euDwzadDahTmu7KZiTCkQ3qTNKuLPBwoBNfRZ2qrnVz3ZnKsq86WXqCmNPGky8SHse",
  "key10": "QdU2nixHVYxf7Jf2ow47nZ9HZSLGhyV2DRFLczVoaYdWxEN1g79wGWzcqQPWTg9Jh8zwDsVDGHHNqx1xRTphGQM",
  "key11": "4PhAQfMEYVzD3pY1g8eVBbkQ5ncp69PJG34pLMhZhG9Y3KEuzMzBrzTEaHppWZ8HWiGS72jv1jpMCvWPESsbvuNo",
  "key12": "2u825pU2cyGkbFczPfk8kp2GFky2XJR3ZfPAYpVSys9YwgmPajeRGYSPJAL9ZEJBHhKqQccHDpiFcqkp3JrKLuCb",
  "key13": "nUKYctLnXP2j5pPbWnnhZCtBNErbb9MFpyKE1Fn62WPVCETBnuEyFkBByVLUC6FNFFbh4VE6MwnD4FqJyxcZu2q",
  "key14": "5zXrSAySQmkAmHJ25E4X8UxsE6HJisaKPaqhdeTkRcqkkgQcUg1dQn7q8baj7475P3o3LtSskGVU3t2Dn9AWwW2P",
  "key15": "5yMwKHDDZ8JWeEsqvzyFrYixFF1C8p9emDX5BUQ2PhL19so1VrUTrsv1XrkVF53yykw3A7gM1XkuTB9LVpJVwjy8",
  "key16": "549GACSjrTMLp4fzf6zdoKEPCP4Z6HhLuX1Kk3DQ7AdGVGXTgbVV4HA8xA8fVhpfsvMZGEp59ESwXu6zjdmSXi2R",
  "key17": "3QYQCevANjLNvwmPgQ6NjLEkfUFkGr7GVLZCVv4mQE2kjx3BJq8pLhcnaVzLbojhGFCYDnQFoLEzgCwHhTjabuwJ",
  "key18": "5PGA8b1sDqZ2tPsFRWaXenHcaduiWb9X72seXLrc5H69P9BMgZqYmVihmuW8WmMMkc2DUMd3wKorpoTGK54h3q9n",
  "key19": "3zfyrwHt5iZaQfKARtGB3xhjqupdhqTtXfHoquyxh9b6ZvZMMZ7pwAYEr3B8HBkcGwQbLCpVdKyjvVkwbh5TiYDx",
  "key20": "5uJsJRQUqEf96U8wxvn2XaYQ874tKJgPbbr8c2b5kmn3BsgChbywk2FrbNWs79wxQKwZZheS3eQvNj7Ly5BRUSqX",
  "key21": "4hbh3bu4JEnukKZT5XPAUi7bpbz986mrJoRyJkwLqrF2MsmXjF6X5WEe8aacE75c9E18aL3ntxVLuczSkkyDvJD2",
  "key22": "wxckKaKJU1TZTWvr4vBo12dopoBddmVCGkZ5zVwvofMdbu8TZvG1o99p8avXwCss4r6GP56fVa327Q26GetANeJ",
  "key23": "5w5WwREhy5ogonoi9AuGLp3nf6YcwThhfbYrcJ2DK3PgrHkda4MTubrGE9c7XekNwzdiQwJDwxDrXxeGcq5daR9T",
  "key24": "5vt28iqkrL9195rQCe9jbZebMcc2bZ5mnMgaHTHB64yjg222uXuLZyZ6fxuHs961aVPMVCsVixDxgAwg1AFtcEQA",
  "key25": "36xD3V2zF99UCWC8uZShCYAC3FjtgK6wVaoKCmnbxCxdQ2bome2Cgpy1JW6uMqzjoS7gb6t7LD4Uok5ZARsmq6eV",
  "key26": "2wshX94qdt6zarnfRfkcM9RMbxPu1zDHJWaBDgqfrLrAHy2oFMWwSJrDkwvsBK2GaPevGB3XfuYBQAYheAYYUfv2",
  "key27": "tjA3RhBP9244mJmtoAwWfHv8ndCpKey4648X6h5XRg59sxDfVtfiFDt4iQNajLHTNbJFsDJyUs6zhbftdMn39ZX",
  "key28": "boEQ6YES9vXeBxBQpT6JUBQydrs78STZ6LKgDcvd2qHeokpqJgYbGyES5waER6tAuK23bVvevLqQzDoQnNk7NU7",
  "key29": "28P6W7Svr3ZYfBZxpxkBg2A4brVDCvKG6Fef3vNuQgCVpjtaUSxQNfu23GCEAfDYudtnGBikiwRVEu9quucaZ8ZQ",
  "key30": "3H84wUHiS6V3qFu7J22wf4GWuCCF7LDH3VnbgMG9s3z2oykZNqLqo4steKL82iXhx3DvAjpirCaYunne9yakjPSE",
  "key31": "5cbtghPJsqRNwc2jpwFruRuV8hB4ZrouSf9Z6MWixFo52RGQcKEL6XxmjDuJhvp31tNasjrj5aSvxCrngyaFKeaS",
  "key32": "4XxL4Gyu9w2o9NVY2knkqb3kLx44w31GDLNYqXd1vhGtKPWySWEaBjiCAaDKQRVQFS2s9U8jssE1txbRGeh1hDS4",
  "key33": "51BqJJq71zupxcn7mwmfQpqJTXSDV2MzH5jDJUU7CcftdJDxj6tutHVjoyHwogrE8trxhbyMdomD8f8V72F5mSUx",
  "key34": "3gNb2jUUCLKVAKGrmPb3GVb91igRZuu6SzCM1MSBUcArt4N9NdiS9a9YhuwsyNmWM9vCgx4H8VB9P3ZGwAyNyodm",
  "key35": "3YeyMuv5N6dHNdtde1m7dY6WXRkJ1WAiP5zK9keNqLQihxau7d7GWALXJNHBNj4r19LLRBNuYAUqwagZj5C1yLUv",
  "key36": "4wwy6wUvN3gk6bQQmNtqBDNiREpZMSqaxGD8Lpwhpn9KFZpwfpEuB8Gstt6FBjZta9TXxrxXa1NTvoJBsYXcRtjz",
  "key37": "RFWpLmR4rKLpaSdyLja9wSwndLgwwfhX9JaY171quo4tcvs4JGGDXNz1dggNJChATiZxCQAdUcKppxna5mJAedF",
  "key38": "63VE7YsbqhoC611SoPqc6uHzjnhSeYCUfqRiku27xyAwpbz8Co1nawQkdZnfcFsZNTmVmqVqjfteg3JnjXuMSQEd",
  "key39": "5KZHSa1KjJdKm4qvWWxBLs4wwD6evyfqfY9PMxZ158wfqScuhoWetJYdJw5FT4SwPWx53yodCdjWU5wK3TT8xVhn",
  "key40": "4Wiyc5P7Y4C6MkTeGN4PEunQ5R9tmKg3b2ed8wNdfDQ6wni2PVidFk4j9CJZ6L695DA3oVu6fvK2kUyvtQ7ktoGM",
  "key41": "4wJ25ezeraScWPYwzAcZgHV73R7rGm8txnoNmkg5vvEvJuDK3S95YPCPgvBm7mhaDJn62uHShtSaphkS4Vve1R5w"
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
