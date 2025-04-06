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
    "2aQNDV5FxZQnJ6Kb66NwCKtBRXyELHMXCcaKg3EVmHxFqQrMmqzGSZ6tW1qy5CoJpiZ9Cn5kWqhA4ES73X5oMk1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eu4bdmF6cPT5YB3E7LkLAdrUysxdMmDzg1w28zKXLh43LyUqZ7zSCBtSVczUMGusXhmPgZPVtCrS9csBiDEUAm4",
  "key1": "Lu86vzH2KjHNSxKEpE7nGCMTYMvtFzuRaDSkzUojaMasvGYtERiTKW5cbau3FQaoJsnf4FMZbkLv4vhwbvGMUoq",
  "key2": "4M5EJu4NDnSXVfVLfud5hqMSnsEVz1Q884UADNQFwL8EZgoQiH9QQtR6UVw7puNdRTwJBb5f2nAeGzhnmuchonN8",
  "key3": "4hQwpDhjH8bEDi2QNTtU8qGAMiFY6kfpKitUBj7MDNgLKsG8a9cSFGana1xtnabwdZWFaqDwh864dLqXGuHLbFV2",
  "key4": "3tupoTnCUCVH6wewnNgy1BBz4hc2nyNQkfcRqwkpZM2jAz8vMG6dK1cVvyZYKXMsV4zvW8qwmt83PGucbgZK4ttR",
  "key5": "2jpBwXDFGurdwpogcgHbT4XwvGQwFG8zozktZzj3x4SUqiBAoSCnDs3zzHqoBirv9ygn2b4hZ3bFaRhypcXqQXTM",
  "key6": "2GN3tEhM9h9fnWHERoEbHtmoK9XHSfvRK6e3sWno5qdQqQWZfM6hrsjnJTs7VRAsH2RYskLWft7z8DsYnfSoASX4",
  "key7": "5Z21TW2FwqZn82QZWtSGxvDYVDSWBugSiAZruLf42N8ZQqCXhJCBhfMCB8waWWunUzKsQKi2Qf4iMNAZkMgXz7wh",
  "key8": "2FAcGwQBMbm4G1TfbSwX2uyip1eBXtu3f7PZybvsJpkxG7ss6wrwVp2MHA1C48mZzokZH5LyQEdoJQ7ouBDB9MGw",
  "key9": "497pDYuMcLBWaj1GXBCR8LxPG3LwiGTnZBq1EFVgMn6kyDLQGbVB2TKP8uqGFL6KwzyAtJeVJzB1siQCgq3Dw898",
  "key10": "2MWFGmgi1U2DKyUxZRuASzq6FFc9N5z6VddWQoZXBnx3FGXPkwr4nTS2rcmY7cYcGQrjpL4cysHj6YevhHBe5jZU",
  "key11": "3mFMLMfM5Q8bwRpg2iNm3z2RASnpwjrjzY8MJYAcL1mNbKGFe6b3pAXpD2tabp9kaD36kHtrAQnYqYQfq6hoVhLS",
  "key12": "KPGavn7uezKmudehFcTBQtEJXjCwHxj5MejP4pWFqTsw11DezfpGNWKxLFcc8RVBRtnP6ExzBhTaJ2AkLedgpuu",
  "key13": "3X33eFrNPWHJ5ntB89wxDxYpagyjNhgvjdvEe8GUZ1GAGpQZhxByDL6AdcHHJYPtpnVEK9Eof44yK2sPniH8NHT",
  "key14": "DiJqcqPPbAs1wo1WzvGwVcvoBW73jqRTmbscteHagbpNZhnSU3xk65Xv7NPwHetnY6XGmUCqxQdLronXAsTz9x3",
  "key15": "ifnLAGMJyHcchZoAaD9TGTv6SACKry5rtmLPrpbnYGMto9yzorxrLcYgPgDGZTXfwom6hKuLJHMb8Qq1Bmwzbt2",
  "key16": "QFiWqFsByw6m6VgMmVY1sMuK1J7ZgA8X7c7vR5FoAgZ2RLkmsZCUZzQcgytnHGzP7zyAbGFLAn167QXEdLaVXa3",
  "key17": "3LR8Snw6mRdK8NqMtDxpLN6VWotH4mBurMjmmLRiwDc8wM5V7WHxE1McpigWms4NkK2qumHSDxMW4kTYWCT2SLb1",
  "key18": "2kbpwmte4ciZgr34GUAEVKWAXU6wHQHmTuT9rL1PxmtszRrwVyUzxoV9iTcD1xuAvsxrGEkC7qpSCST7M95HnExz",
  "key19": "PpRVEqSFXQ912F8E7gJdG1HQA7obhSsKsrXMfxnGzr4jEjBUrTDcf1w7esFkB7yHpP7GzqcaShnJAyAz2fZ6hkS",
  "key20": "2dKvrXbTT5CaHf81n4L3izpCHengNq26CxhgG4zuMLjvZpHFrGpeN6ztZxgkYkvDCfycZ9ukejrpF4KPYjQmt1Pd",
  "key21": "5hY4B6CUBNe3DQ8ManobF35TVRjNy6kf1qHdtLDpSXS4mpaYtxQdP1jVCbqsT9Eo5sHbHRyh3CxXrnYrAvqNiL3N",
  "key22": "5uVGRqSptpQs5hRrWfgEXq5GpYEF8yRdj8yePVEbjDH3UNiAc98uB8zTVzVVF4wvjrPPYWpNVqgGZuttz6LbDBdM",
  "key23": "3kjveoZi9awSw7DQVLqFWo9rwCBznrJTHdAzuEYkskoLfRFr85K6nihmNhtSkK4JLUjQhvX7EGvvyUyLAvY2bfC5",
  "key24": "omav4AAtpfGJdDzC9cv6siaXKkyGnRrudN4dmezST3SN7kW3AyjsHpyG7EzHunHn3UxcVfCyJWGtmHZ7XCdGr38",
  "key25": "ZoVN3ciSLy191VGkjNwxptbFauiFaTazV8sKEuYrXXwfF8XfFJRtecaakPr2NxUK5fWCvaSJkSUpgQTi1r9Hr2P",
  "key26": "3xsSCsvQJxu3dcZ6wNapkPygLMtrXkfbUyAHpmVNqdRNhxkmRvBAJpNkfuEvX3ut1RA3CM8G8EvPbyVMiDwY9hcD",
  "key27": "95mY11dkJ7uWTgViBpV7kiGJ1ywxiNC44GQuwRZrbb4HbCg4y9zFya6baTmycyNAR37iHuBXSw7FmucLTfB7jx6",
  "key28": "37R62VbExAGkEXdyeAsZn5vfX7mmXyT34qAeMqfk3NbSKh5gkDrQ2KJXvGYTkbvpFnsLzdJ7JzAFHuuz9PjCM5sU",
  "key29": "2ioDZpKx4AycfMq75yYwSGB4RwDRVK4aB5Lyp3zCgUp6ucrDrg9qpt8XGT9XJ3K7sCok6FF3eUZHfHdyw7zkk8de",
  "key30": "4aNBLbR3pa1eFQ5RZwmgvuLLhdZr79iR2o4yRF1ftRKvAqA9rf9tNrUR3hpkUuVT3btvop7mV8CACCxRdPcHJr5n",
  "key31": "mDcg24ZNSJ35MESuBdnwBEDqTcc6BnrkEfs9TJd4e16iXdKZsZBAtVQWyKoGzuX9eotsWnAG1q13QSSgFEHkcxz",
  "key32": "3xt5JiwSGJ13FbtwjaEbCwpazHJTcV8HF5moFzxZH3FnTQdqtMvsfdrgNSjxtuDrQEEZAh4ivhkny4DyZawCXqCP",
  "key33": "3UKdW6esSHm2SAGYRp1dkAEYZKGHDzZEcDpaUTrrxxu6TsnucQhQCSBuE1incVeMnU8ajUtP69PbkdKfi12DHEbF",
  "key34": "3Znqioc8yr2yHjFRCF5dnNxoH2Pauw41hDASzdKZEZqnZ9vpQ1YqxMraezr2F7kJzCsdw6qJsvv2Ckiz1dpPVwqB",
  "key35": "2Ka7Wzff6uTWP7fJFxkDEKDV1xW6LRvrqKkCauSxL322kZHmWxBDhd66Kzix6AbTE5oi8Yb67Rn23rGyDBDgjjZv",
  "key36": "347MfxWFW2A7drHmghZetbDC6hLKGDZzyRzkGxeK89knDVDisJRbWDeb5hxPrgMEJ6dp9zD6gx78C9USsdCYPyNZ",
  "key37": "M65ATNPEMKxaXaJSDmq7XmuzoVFX7sPt2ueWtQ4fBooQh6eGwLj7j9fjTgRSxpMdSMy9A1QGqgrJHcNh8woRg7r",
  "key38": "JWTpL1qD5ZsUCNXNWKWLkPCzbTrtF9Cif7jGFjt3cdWwUgfk2oWekTRme7mWFmq6SKLVjbNZUepdGW6tJuVzJZh",
  "key39": "QTrTVsV2pd6Pw8c9x8sMpUVn6v8SW9M6JauEYNPkNdicF1sNrCvS8pZSPop6BV6FP6Zo98YPDj4iDjqncFJ5GTd",
  "key40": "4jmzZwtbXu5DGuajVk52JkyzgXxxm9PZ69tNoKCqaPBWQVKF6NFJDA64U76Bpb2bQojAMGqQRxh9UKwfVCrCo46p",
  "key41": "42XZtwFHRKMekbKvKrsAfFw5KS5uKpx5ajmsWLGEkgLgPvmyiLhrzqwxCUwWQSU5jqTmK4wgRtmGdSFmJZMHj1yB",
  "key42": "2AQqp9NKsWpWmSocgMuxNq7Crvyf368YcZY69YyWfCLbHtSeU5gZxp3JRPp2DsKwVNTekFg8SPapRPRrdTJteA2q",
  "key43": "562eXovwCKfknMUHcVc3ubqSCgV4pdfqD581DYUnNYTVB973JDh5hYKjBYatZqHocK8fLNtHisGEEUsaZznesBrz",
  "key44": "qxV2K6TnhdNwgQNtSG7uzzFR5SabFgo8XkxMr4sKmRokKiLXi7z7vmxofkbi58CNC2zSPBqz533aKwQmSQyLoi5"
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
