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
    "FuzudVebjcqvDaw7ZritbpdFb2JrKTTnqYpcNVv8mwHQnnWy2aCmYA8M8WRLSTgWZHT1U1pmzdt9keeNek2XyTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHvnsWuMm6eU4WmLze4ZqZDfebgHSuaPSy5b6dyUEx9Q3CH4ZR1emBUveWa7tuFTUvS16oPNiPXkNKhvGqfTfKD",
  "key1": "2Yv7sMryqKoERWu5VdtMJes46n8aaUoAD738pQ1XXarXVNAo3jgzpxc11t53RxK3Es89JczfT5Sga97BeYRmGWYj",
  "key2": "4YVEMWg4iuxiYF4nmhH46jW3CKNx95B4XnbYC1xh4STQgJ4DtW5U3G7KRqG6jQ3EaFEamLn2oejAFQaxPJjpp1WZ",
  "key3": "2wVjdoqmoyNZprRRJkqYzA3rk82CtjYTTG14Vz2o9t2C4dieWNPJcfYawWZuKrSKJ7EukskqWYWNxfQiZvuVbQ6k",
  "key4": "3SzVmBnHPe1XLJUsvbAGAwVv1i7f3AYsmtV92NhKxJmUEThj58EVJqZr8tPoEb9y1hFE5PsRZnMmUcZAUrFp5ebm",
  "key5": "5jFD4k7GbrRhJhcBPTNVmzudFJ7PzqdkFqrfHG1U6XBuFwDXkR26k4YiSWjf7rTnZgrxXCYBLPZiQMqbdG1TrX7h",
  "key6": "2zPY7pDc3J2Kc1GsuVHfZxEFzL1ztMX1zzmQcKmgKi2Z6miXBRK5no9NXP5svFasDVynTA9ex458eqqxswDv5NA3",
  "key7": "5YK1bc8Sg9pUzMF1LBQbxQDxAVgYrgpKhtnGRxMar4qSYA5vT87pRd5fjpqWpH1RqBNpYjKu8o84rXvk92BNCSzL",
  "key8": "jK9ZktdBZTCDAjBMKPsWSQqoovYfM9Ku6sea12aW8q3ZLHLEfXZGxz5xJvBukCf3cBLih2e5ckv1qrLfBK378St",
  "key9": "5k1fkBaoactqSReEVJnJQXvEd5543x4bbYmCjidVjSyXdfx6RTWs8XHsZiZL22VvKWSQTRoarca9iLdC42r2ssmY",
  "key10": "39NzGzJ1gm9sHfhi5nPXvJyWsiYwsAQtR2mCEER4Dv7cr5xCUCoo2pcZ8v5VUKAisRGT3F5fMHvdfsBaEErNWZHv",
  "key11": "4TUuHrzJCGWD3TdtftM3Zc61F3pi7HLKK5D9gRVhcEQoW4sPr5ayP3BwobdHGfJ2SSYcnpnmZgomWiQSzGv9jCUG",
  "key12": "kUdKdCDs5bMxLXt8esTB5XuvfTT5PEAdqpUX8iK6YUBpK3n5GnTybPX1bDYAio55E36rHqzCp2kLJF4QU3qy6wi",
  "key13": "33rFLWgfLyZNMg99btWdPYax5uMmqiGsk9QQmr8NRgCyAkZGrY4achHj1SPozrnrNSaQdrkAXsA4HPqMof3VdEos",
  "key14": "4HAWwuuAADKRhUWuDRBWXRnJtwu8TVkPkjfiAerfu4j7L395QX6CLJkKaKg9WLyxoZhHkvNj3PAGqt6B1qb2Eavb",
  "key15": "5JJP8PKQVCkMouTj3mCVwk11qPqpW5S9PHDE8vWWam5ubnb6yHgvZQXWUGZgrf3KTMZropPMZkKW9y7hypdMLVcV",
  "key16": "4hNZwi2bmRRHY5PXMVBPTsLCsBeetfKbdfY9MawjKvLqGvsAB2BKC83Sm3vLYwuvvBKrxJEFxRS62JcfwqVz8qaj",
  "key17": "33m288zxTpKCJ3PzQRf7ErQtbjL8zgcExKTFB29N31ycFNXfPHhruAVTz1bSmKcEEdowDj53HEdAA583FdsGEnNC",
  "key18": "4CcVTCTCEQ4xePE11pSkaCoMxYuqano2BAdk4hssA3Hm53mKpDSNpeRhxRyq3NvjWcVtEkyDRvkQN7A7vGg8iQdp",
  "key19": "3BvtzjteZZ1N93HKJ8R6jefyZRynnKPoxTEd8SXYQe2wSnHEALWatJrQBLn627bwAzgHspbxAJ7x7C3BBcY99H8d",
  "key20": "2pbZm9rBrirgcE5DCSQkwd1ErfTp1C9YH3Mqik5Q9EdA3Sj3tvNjrgiDovm1JmWqTRmBVSqB3Ns1JhiAERePgpzP",
  "key21": "5sDJ32GapypHXGdjBsXGNHpjxkhiue8kkeP4HJnXLCYXzRDzaDw9oGwJKGW4gAh7ygji14UoxZeDSWqBdg87jDSB",
  "key22": "xZ72XWMBPf3npifTQsdbTTGEFXWgD8poMD6ngRwNhaF9ULpx5gYxELyHViWtNpNJoBrBiVHB3npt2UXRw6LWZBB",
  "key23": "4n1WP1rWrozggHDKjW4p1exKCwWu6CEAtbNaNc133SGAu8DNn9HZJryKwiYupyK5sVqgDgSsSbva5f8eQaMKJH5E",
  "key24": "5Mf9GDm1SnBwLfw4bWc1FXo5eytaYg13csTPkjHziKFmGFwXLCZ4b9VD1Hs2mBnCQUved1zvbDKDuW7Q4By5fHzJ",
  "key25": "2Nq531Nk2YmMCbNXMxrti64zZozX9Dux6gMQrkSuXDcG1q4U8xakVS5MdSnbxT6TkyMDhWDtwmc4MGrNmE6psdS7",
  "key26": "2LcuqViQr2Yy2K1pvNs2pTLFLtQ1dqqPHQKoaeR3AWiexEMpvSEhnZBGNohHkgqXPLCNvQxeGfHdwFEttFBK6R2B",
  "key27": "4nKa7aWeV4nq8abGNdgkKNvF8U6vTanqqE16b9gkGe9Fc9eKKQ8CWiuN8Kq8ERJtvZko6zBN1gS7FodU6t2ZqXM3",
  "key28": "FA3TD6jERQW5mXzCtZkLmQVR3kEKjNUbeCbdpgqiZgvhzaJftaE3gBvz5AnZYtb8QYcXtQso4Az6589CHQ76RY3",
  "key29": "3eFJFaEWxuvaWZ7MS9g1kGfFHMJ1C9ECvTE9wbFGovmynNfqusUWdxeHEWQZo9i3wwubrtJkdZ3gdKEfPh5Mcbun",
  "key30": "Ke4EeKWkrBVgXpp8yh9d6AspBxsqJiXXzVNnxwA7EuQ1WoHdozYmjnK1a1JMaSjJLqRAJvJmgrSZWuQUKtZTjaR",
  "key31": "j1aD683WkqsoLU9cLND9aJTzAvUTdwzvAEz9bghxa4qgeXt4W4uvAsVHNT6Awt5NQDyzU6GTrpnc8p838SEiSDH",
  "key32": "5mWWKvMb58gcyBoNoS7Z7JcPST34YHEpHEpzEPm5TYffe12fnw1gZ3ykbJWuRFbfW67nWmst1GBBz3S2nfNaJ2p1",
  "key33": "4oXu6qTmGUo7jqj7WndKLs9BrXA24V6U3iXzuThjoX4Y2WDUAyroLr7ShZ2MCQTrjKKiL3xfv9PxrCnS1qQ6eRYS",
  "key34": "4rJfcQjy5eeuPsd8Pg7HAae4pswDHEv61NJgYAtMqjZdm8aKSoRTy4tPRUwS8vjffAbHYnZa7c8WrYWvD32x6Hdh",
  "key35": "2EzKj3ZUMmgsGUBxDWatGwNo7A2Sg2rV9gLfiXQrodn1fTKTprrUZdCPtpunY8tjhhm84j1rUxUBNwyDwm3FzPsV",
  "key36": "HYrUEdDQRTbNdiRqK6GTbD6mNzuYFo6m6iTVZtDfq4o64FV3PdyzdM8d3UAaqsPrx3EjuWGq5anRdVYRA7aVyMa",
  "key37": "3tfdccvKXVv92yqHLBMVKhBTLs2Ym1keEcq5n241qWSC5mt1beacr4k9Jca6hbpXM7mQkjwxJMWo51DDxf2Zkcck",
  "key38": "3cqXpifDWiTfAaBQNkAiDVjeKwSVHiu7s4zzTLPV9QAfhYXbWFuDL5tPS4qSTZFtyM3DsVKrhGsRfZxVR8fS78pi",
  "key39": "2VhVt3LcssduRWguUipSsQ8SkWQudhwPS9XNMzBxKAWEWXXP8U96LuZo4ffoBectujGrW8UqXARsquwX9WN4nmM6"
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
