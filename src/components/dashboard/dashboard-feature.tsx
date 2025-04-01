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
    "4Kvr2soFda2cgWVWk7YYug5kwnECiRfQTooCQihUS3powWosD8nBuZdku2qYE1u864QAuJG4C1k5KCxJLEdv63Si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npd2VzxC95hXLPFXeDjcvHfw7nVvYn8J8faf8nr9DhM3FX9vMAmcybuxpHBYUEAowc92iBpfTueLeMq7awrE49P",
  "key1": "Nf7JTmRjdpRQ4QK5cFR3zR4xmTQUwNwKqW2UBSkRTwnU54RtcVHP7YFBAn675yPkfqcKcumq1tvp1pwYAHj6CxB",
  "key2": "4g1RVYAxTonxv6wCq4yPMNYzjvjaBAKt4vdsmTUTofC6HWCETRmB5N8tcoWZAXRzKgYg5a6W1ndw1toLhsRfA7TZ",
  "key3": "2vzPP5y8bhFMRoBB2CzZnEseXc6KmtFyNo7m3zSqoNWzx8qqmg1MRTcDJmmYD3RjaL23MqKudoy3SPopvrTzPDNo",
  "key4": "3tXVuw6PisEax6XryV2avZPDvZvJUsNF1LiMkrnSqxcLSSXKcFEbBgehQq8FRNS9894vamiibaADj1czMYBQGaHS",
  "key5": "5b4okUF4yTNTrB8tqWLPy1zTyvjFmK8tqvPV4TtRF5cUymV5u83MyxdrGmGESWSwARYGgHfZCye61pp7hYugmSpc",
  "key6": "2TPzrW4rJq6vUmW61K6Cj7e3uvq68TCApNSPBqsfaTLcd7T3SAug2CZ4p1PRS6mEGjZmGmRUSXUmMiR7No6Z9FcM",
  "key7": "2GEeAfWibPEYu7d1GnNmby8VbachK3LEVcAMq4G2wcFY66BtrYM93hTUq9z5D48NuVxLyqFkGngbMuixAY6MmHyQ",
  "key8": "mr1prdnh8r2PQhb9T1FV9aUrmy94XFwHnnhfLvah6jipyFrogaF3CD961QrekJPEYFUTmC2JJXWyr7PSn5GsD4C",
  "key9": "4nM91z4mrhqKd8aXZkfj9XJcJEjVqpcDnHdnqQ1nVyqw4Row9C5FXi3csfVFyJGXWJsSRGZKfAgBHd9VqbbdnGJW",
  "key10": "2w2FPCcTMbzo4WxVr89cBEHWb9MYdTsqDJV2vfBZL8CwiDKggMK2766zpDxvzBxxV32iimuF4EwJUbKKAghXwkcZ",
  "key11": "4w2eoJYPJDQTEERAQ8oEa6kJLA7yEVNyUWXqQHxDuDfkVNat4FxmUHqkgJL8JAsJmPzma8TwDXCQ48o7t1hFxzxz",
  "key12": "2iRutk5LymVbEQaRU2Tfq3XkxjRxhNJaiJ9PSZteWDYEfyTeB7wQQJ1kyyDqVPCQU9P9ZtEUm492urQjGCxHq48z",
  "key13": "2Fy9TAVCmBRG1wscsVtPKk593fJTjvd1gpwHpzeiQuHifw83AzApTToNredBBKi5uxq4RJywQK3nvD23i6aSiqRY",
  "key14": "3cDCP9gmQxMiMUxxSBUJ1enm3qpXmeWrh28VhTZbpd7j3CSnqnC5ZCk24XNGpJGHe2Sp6oMvT8ah2LFPhAgrfrPW",
  "key15": "2LoTwfoL971scQucGmHzt1hDahvt2hWRShQ2wiNGEkTAumVC3NhvMZ9c9SHJ6RPPuUP4kHKkQMyRR5YfMaKFURio",
  "key16": "2wrFAG3YFRZDzdtiqod4basWVQrYveo3fK8JZQFmQtPzJC36np97Zv1L7oPP5sYSiwb4sDq27Uv1BM8CnHFtTqyW",
  "key17": "3bHweVPfpcHi5MU8HXT3JeDLAEZVSEteohmdLxDnsyvJ6gpd6e717dMZeNbFaMjte1XQBfo9Ps9wR65Eop7tYML4",
  "key18": "3GGQuv8JApdnUtuRbiWumr3fCicSEc6TkC1fH1K2aSinQey3Nh7xZS3FLiMzyyQtwf6xUmYE1zkakzjBYzwHevsu",
  "key19": "oFN56QDJxwTNWrRr7ToTUZ34Kytmwnod7w6G9BnHC44A4eRY5QEerSdRCfY4Kep9AzYAG61wQYENNxcG6beUhDC",
  "key20": "4yAWPTC6SquaBTHfCU6ttLkJ6KPBuFHDysZ3ErWdKXeL8wK1abCMCBTZGv6TAx35BS3iuRCgar9uinzcpyzwqiXu",
  "key21": "22KcavPrH6x8cp1ePGGovYCnST5NSq5L23NjHBDtcnXeGYJq53B6n7mT2pNhzzWsCwNCGwgZsHtZaPkw6nr5WrSw",
  "key22": "34bvkBge2gj42vmuyuduywsZaR6txL77oDHk8Wy4v9FyMgfQYm6MNFAkhnJDzs635N2yPta7qyjFhvxxBNQKumFm",
  "key23": "EHDvzXuvohzBoySEXsTxfQzuvPa9kSiVTVS1ZQkVgo1xKjib1oVeZuiHP7XnvDZ2PW2gFnWDUPtbDNEYLwLnjLZ",
  "key24": "27p6nkVZHdPh2QvsJeMggdcXAFc3225a9ZjJJMkPMSXTt7p96WMner3rdEuhDVWTZa2Guzh6AocNJ6tKNSmy26wp",
  "key25": "3Bsd27XAu5mjWcAPPLd28MHXLZWzq3gCyC6ABuqHz2zLJTwy8goPy5SC1pt3A3vbwyDyV43QqWGr3SW58yN1JjHw",
  "key26": "4oBeCsV4gm1cYBqSHziiLpL72rDtb3LABkWwDwJ6Ri2BpgWFnbzMWDB1ZFHy9L3D2YgBNNYwLEayGdm5aEYMgtX8",
  "key27": "3DPojZyYNuVxogHq36tfpLr9J2piNWzsvZvvRN1ZiFm1Mz3HpaKKfDqQrRFN2DnRFXFZPJQwfUNJ1jGKsaufBYgt"
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
