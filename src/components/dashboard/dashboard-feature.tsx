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
    "2vxiemTjnViKPPZNRVGRjSZhZfuNo67u6xry3gFWAVKpKBCMnppR8UhTXDfi1Sbwd3WiwjmZmUdu68sL2se4MFKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9dhcnYSCY4UxvD7iS5fgvv8TchRj8StY3DSmdMg7QcZnJwUfJaDRsnNBxJRVHoKbnWJSctbJHakKEy1BZKHYijt",
  "key1": "2QkiRYRUyEoP5feuiwTemjsgwk9V7Bp8doHqFQKmvqKfaWRVfXz4mDuNRcNrNAyBVdMDaRtbTSdAJGZNsd9kLKu1",
  "key2": "3KEQJwbLFB2BVnmTqmQjH4e2bhPUU49tqkakGCj9akCQhpta1zmZvFJHGJGuwVQA3hZx5Ax1uPWs2pR8SQ2fpPk2",
  "key3": "4YyWVBHcCdNUh9uxkGW5AeFt12Sfz3HgxQCbwdThv8wdSPJaeJKpXfrAmig2CicgAQcM5wMqYsQAkAgsXG95UJs4",
  "key4": "286xnoJR1dBAPnaZRxaDMEaJcdQi4vs2qGNz7LtRdu1jy6Mw3nH4xVaBxdb62GocLAgiw2zR4VfLckgjh8j2Hpms",
  "key5": "52iq4iwhhfidR35E6zSQ6zaJEYGYvzuqhdnPtCcRaJX7NFX42cddYEzRxPnLqXACM8zffSbCE2WfBaUbqKxt6h82",
  "key6": "56BPsfHz2wfEf2rmfhkD1CGhGon9a5RxQTewsNzZBYtRtxXn7nib18s42fzdHFMwBHPsqCMjwJCGRc8pX6ZeSCa8",
  "key7": "2eeRNikfLbKm6yXEx5MBBscT2mp7A4RFmN8o3Pu4QXTBFTWBnStJpMjYHRQ1p4CR2prEH5R1CC6B8fCZuBvEfPwg",
  "key8": "2Vzi33mCQc9BcPuGSZVWPMdXApTe1NzM3m4PPU3mXbRgdJuGfJt7bWVrMSiJxksXJ9FM7Vqp31XBPa4qZTxDZhKx",
  "key9": "3nR1vWABsuXUU5m6xBe5jh7fxU58CGNovJpyw4jqfbnrgWHYrJGVBjAH9NqT2FBbKnJ1zQuiVDDy7T5MxHPMsaSN",
  "key10": "4h43rzDPDL35dxTT1vqRLK3MRRpDewV9BRkKLp9iN1esA2q8eBjSzpi2D1iDe3kB2LezhSun3fhjwScJ2qusMW9U",
  "key11": "4aHh4aLDzAGkQcTzXBrBgkQrLxq9qeza6ww1m8u8GCENvEC58gK2wj9ncjKm26tuAejpmtnc4AZ3bindgf54hnwb",
  "key12": "5uzuhLP5kfWEBbeT6PRdoPMWVbL36wtVXppnyVbcFNvzdwgvBT9GgqkBHMkprtVqCb3bwYHCjZy3wp1oxZVTD6jT",
  "key13": "4gmJnpoMwLYCLd8ks77zcF3ZEJyDyWycFQAfmpAdP9r4BAKWMoKB8pWujSEFvMR7JKyas8wE8QxbtEnj5PnCMHg9",
  "key14": "5gcLQLk1tvDovYxKZbsbbX62D9EfCTUvW2Dr1pZaL3M6579XkTDhTPMTbswwtPkZwkEq1WF4Ge1Ym338tAtEpFHE",
  "key15": "4U84Jwf3b68NQ9ENvFAiNari8K9Mg21ZzXiVS1WJcWLiudgedvQdyEvTnPZY7Uh5ny5EyD1zGkQnJX3vqddDAWYD",
  "key16": "3gVqjMgNRUv7D4AYrh3BfUw8q1x52ZbMcNUdCQyZjz38oTtMJTmNMAHVUgKKNMsye2vtkrcS9QyZSYLrc3yYwWS6",
  "key17": "3FdWAG4URf1h7kCaReG5naofm9EVrHMYoEGbjeXXz2mN3R3Va1oL879qj1kqpLZ7Sux33c6bkBMggNGkhjep5WyW",
  "key18": "WCo6Ryn5ounj1Z1hJ7rcbACRABrhxdzktcvJp7YNMGJzaeVs9yt2ppQkEqfwou16pDNB9nRm9hC5M5Rpc4M3J5h",
  "key19": "4AiYbbHqGhnHASsrRaxLFaaDdTD6nqhMvBDkA4xVndyv8aZnX9tAfCFKJyycy45HEhVZiUPAWhpx77hUfJRRczXc",
  "key20": "2Tce8ccWovzaNHnp5wEtN82nDnFAMAuAncMA5wJTq1Gx2nhsbttMWLcS2pGddmWgioNUqFJ2BQepNTaxRX8sL6Ge",
  "key21": "4QjHAwDcx63QvSr6Bt34d46gEJfutdp8cZ5AnZPZwYdaNWAhFf6na5rKte1dTv5nE6XaoSZ9MKRGZnwrjKR48CzL",
  "key22": "3R1Y4VQC8k5YPznFNiZsp5JxtAhkzg5q5ZMzzY35KN9z9SLPH59ZbURrA2uFf2BDRiAdduogPYvGwrD9MSMrAYrg",
  "key23": "2vbC4DjKJbHJGsFtgspBeEbejQcexwEVpKCYTpcpYYL7uqpT9Tz3nLttvvCtyd4oWBxiVt4tYp8ijzv6BBigYDs7",
  "key24": "21uxof37LJMuByj5jbPrJ3NeYk72e7SVtrEZEmN3txtgf8cwyGs37eHFhxG3cDMx6gP6PGPyBkd5x2TJ4waUXFaH",
  "key25": "DjXGUmyswcwDvSMujtLDGoqiCCyeqAzRTGz2vGLQWPANEfSzA1DJLWNUyA81f3V9FsKVjTpEL2AwvfpidjXPqJx",
  "key26": "3ybz3zx8D4aL9baDu6ZfF2Mg8amtTJHLAdvzAoyvSiAQFj7JyYmC7rsLSrCW6gRdWseEgepwhVW6BrkLhecXs4nC",
  "key27": "3QqhPZ9fVzaRMsnaMhyzg54KnUdXTkjkaZJA36uTNnhLnGP4zLjYZP1kXtMbuQtyHfh8DWXvuTUvgVTWMwbpvfWc",
  "key28": "2dSdsxsAsWGMGZFYk7FJSaLNuXWJFauMqp2rn1jmo4fbjaJBSgk1KkoNRq9Pb46DsVoqRbGBzixtUGXPqgPYpMWL",
  "key29": "54VwUWGdycUtDVCfyikvumN3scehy6yqz8sVxfCmHd7Uh53FP7ci82VVDe83yVVp1kb98K9bap8T5AnLcmjwv2PC",
  "key30": "3cRxQ9soT8ioBayae22T4QMr8uE4nQxu96D3Mfho2m6G8cU9LXuTzNn5Y23auKA3VbHe2XvdTjS4hDi7jCEfRn9s",
  "key31": "23w3qs5R21Z8AgDYqHdwAnMNgMe27HfGnpAR1U5XqctdTpkiFkyyup4NCjN7GTFj7KS1dBSToDZUtPGSKzvVGXiY",
  "key32": "2gCS92EFYqaBEmW4SdhMvgum3uaMF993NVYHWywXaNPk3eCG1Afk8CHnPkU9TAqib4XMdt9w8DSuNJBmV8oCBPrd",
  "key33": "3ipzhgnJPsSNgAR1pEWLY7k5eKwepU11Wajbf1frcaDDxMBskVe1T64qCSXQENf64ASYUqxE8SBAX4bCkVu8Z2jA",
  "key34": "2s7YWPvEoYhp23zuTpWcvgnXFv6S2p9zY4uLEWzpMn2LgECS3Vc4C5Q1bdDo1KFyqFN4ZYGY7TSkf7SCUD48vYCu",
  "key35": "4YNSALk8wDAxZHMBk4HmYYNVwAhFFZ116qXPJg9GPGktP6t5nqcaQuuArpdagVm6y1KRshBJDgTTpXS9obkufcKo",
  "key36": "2JCwncWpfSSc3iSwVmnZDv6tdgTv7X9P9wpwGnmVLrb8dV3xzvs9FYjYy547c9DYsVL5CfjEvGSDXpsW4tf8R1ox"
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
