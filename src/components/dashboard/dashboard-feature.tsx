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
    "4UBtahY4SxsSJdfcWjE7XZbxEbUVbdJNMu2L8Vw15wncxztK5EXGFRr6ofTv3PBpv9jBn6iL8s11CRvQw3MFU14V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcABERUd1KgNTxoZK99QcYzW7k8JLvA3Kdd986y79V9hoRLXeSAXLHveKMo3TWMDRUr2xLgG2stFpBui9dTawp5",
  "key1": "2PCmh1Ub9HLTQhM3zcUf6y2HL2Ti6BeNVJtH3SiZcuXujZ5NyMqFgs3adjinjET1f3eaezUN3Kt6RasRcPSDaTAM",
  "key2": "3HMWD5Cwk1qSRvrZRX85SY7JwAsaVjbFKR9ZkNMm9og7Gn2XgsbsboKvRDptSjfZvUy7szuYMSRYoBFqT1i31Xj3",
  "key3": "2ZCwc9Noc4pD2wE5sKsnMGVeQJsznBiLvdCjrT3uQp9Q5nWdMF4RvppWmJkDQVnddH8pHeNApZjWfSe7Hk6a96on",
  "key4": "2152dJBpiygbZMMVgByVteN5MQuDgAB5CxtGzvn7oz4JpFouXihponBdbMA1urv9HpdTZNq32GyWT4eHromBYP8K",
  "key5": "4DXtSYtQ2LQ7kjicM19WwrZMLfkAWjhheCWHXDkeTnYY3yqyNRa7429vADG3QSe65bjtN8BtRVSuRTKoQMYCfgPj",
  "key6": "4kxAz3tRb35znXYn1L9A8N2KK6xaSjZ6wuBboqfQaYmgx9PxjurcKnpUEU8kZPq9ud6Ld3qJecHu1X4fPBs41FWg",
  "key7": "62KuDFihqfdLN35Hkj1igjynba8H1s4x7dvzEBf9JSSe72zExLMDz6Gq4yxQxUCJQgB95b9gqumd61rrnqV8MJdp",
  "key8": "4y6kBNG7jTFDdbuC4Tt2SjNqg4is7hVdqBrwk7gCsTVJUVwQK3tN4GfiNj3wZEog8VzNvdiFF8xrHoxGBb8opN7h",
  "key9": "5LrojDCEGf6WM8oGQZ3H3eTvHhNZzU84xcgXQJpQDc75QnfDYexDCbZraY7vN6VGnUCT2dW6QR4mRPeeeHcENBg4",
  "key10": "tNM6WqRL7cRhGH15bcDC9PTxjBfkxKxthq2S3Wp4KZx2Y9xY8DWxCGFscEp9xGTuRtZRePznSM8BGymgkXSuEhZ",
  "key11": "2ZZPUme1ZsnyQMBEHXyx1qyaSVccJhh9fRAeuH8h8Rad3Ymuc6L5mSukBrDkkhbivYn2bqjnpV9fvMEWbRQ6mk2f",
  "key12": "hTH1HKAEVtVoSxrxKU5D3ybvERzEhpBgfkzaGwLWVheeiNwQ5vC1aa8bMWPkUweVn3fpzWjFccuAwuE3AFowfqP",
  "key13": "4m5coKNx5jwJvY7pNvUFUHCANnCujGnWpfricRY42y7QtuRV7Gx8LEYYx2DNY6JR5uiRyqPAyeTZEVsRrUSeEMNJ",
  "key14": "56TkMgpvjqbnsaNbvFhgUyw7sicUvkQv9HApQQPY3fBeSydXYAvPhrGgkJ7y9TpV9LVXdZT9czXis6VZcEn7LWz4",
  "key15": "3xqt8VUcvLJDjfDvagThqE6ChSqhhzmAQMoiN1aWQqPrm367vpxhRgTcQ9iqt9PybaLX85HNhBMmerbyhYj11ydT",
  "key16": "4frUZqSGA7UvLNDXoggds4EoA6box4DAyne1yC8XhnHPuT1onvo4yB3AMWX569Kj2vzR7wvgD7pTJXmCmYeavkSL",
  "key17": "4JHQdZ71ZmsmFcsaEhAbyhfoVduywM3iKJbusVWpfGZrRfAapU6SrS1FYQaQrqEp227bB1os2Dtbd32FQUHocsuo",
  "key18": "QyMLVPiqVftrYBtvBFC7byA1FQ8K4Pa8yV8nb51spH4W4Z1NTf8r5JsnrMJ8YL14w2r2TQSSFCoZTx1QkXMZwnH",
  "key19": "NfEMN1TMyNkLmbB3aYFigqNK6mdG94nyzGq4DgtTwCSDb1J18xHfm99osB9xFhhJjVYZXJE9EohP7zbaQD4tghC",
  "key20": "3wMbtzUL8g1grPzxYsjRLYiksCH6cs3RNJPYfBwPT5igwRD43sTEejxGSAiAae8istaRvMcX53M11Au5Hejy1EE4",
  "key21": "2xBbDRGPZU2bQG77B99fV8sfrdj81AUVDi1hFpEYRaB8iCWX5CUv2MKichdis5HDRgBvcLPE8s4RQc6jMN2Ciyd1",
  "key22": "4nWriTWB67rrd219wm6PNzEnaCjavbcfPLdR7raEGpUo8FMMtV6eNsb4XzMjEQnWB9kfCciaFzVaUA4jf3QiyjUc",
  "key23": "49TtF9AfTyFptMZRp7Fqt7zoPDAA5iYYfuS6TYtPZG5aWxc4zMLmaQro8eqkGM1wV7LS2FGJyTtXfLZrsmf84TcP",
  "key24": "4Nt3sRyXsK7szkquMK34k6Vj7ED5L2apEXyE3CnAcFesZ5a72y4BV6wLUFDLdozNKxhtPrA9ydphE3nqKPFMevFd",
  "key25": "4WvjkxuNSJdPAmBBJkPY86TvKzpWdcGhmBS66LRBLRzPi7huBmjjTWA41Y2JCp9cR6qZnkAhdPGUu6BqnrFYP7XQ",
  "key26": "4V9p9TFkbHzDRzP8mfHdtYm2qHXWfLQPDUbdXDSjWJWPSXQKjqfzaabqwWwGRekdxXVdfEG9vg5iSBFZWcum9oMU",
  "key27": "21FLx6xbJz149VsvnYi4M8vFJf2axbDJMcGEM5LPMw1XKD6rgq1is3fG7tRh2RCcigr8ozznmAUQYqXX48Nweet9",
  "key28": "4hn21QG7wWySK1aQoNFbZAqcvLgtcSPTGrAwxChXnxAa34RgXd4bwZKs3w7Wm2msYd3UjPtqbFkcYLwbvBwdDVL2",
  "key29": "4HrwTXhsgYwrAPEyQ1eGTXZSUF9Bn8GN2CxpiWermiGfmP6VQRQcg9dgfTTuQKTYtc2JX3JC85HvCXkiXzDHU6un",
  "key30": "4F8EydeDyTGR33ygHb36s6SSnRBQxD7H7QfPvrhoUYPurKpBnWwAMe5WZyWURiZWLEud1HsisbjyrqZLtV2ykXXh",
  "key31": "5sQyh9ACSvzLiFpa5PrWhWXFtbxwmvssFYmUrNdAmEmtBYENbwhkmk99gMYVfFkgsCcgEhYzBrVWT6NQPknJHxwi",
  "key32": "4yvvUKTqqbD5j2iiVHhfMfaVG1yVhcAuHAEPFQFrBisT17skJsJ4uwE7fsYd63m5oDv5N5phtGfbJBLizWLRhdP6",
  "key33": "594msyyK1ZVsRswHvb5kphpv6tR9ZAYmWDowuNKWneTcq64gwY98nYfu1WaqYPC1SChumJcnF9DfrDe6BUygBvHL",
  "key34": "5xPDstXpEB4ZxoG1ds3hBnvHACZU8Z3aBrgqLzNWHWyQE3ubeyb4XUQ5mXrLWy5qT4P1fQsAB38tC1RBz6KGgUdx",
  "key35": "37a18LAAb6MZ9SbnphxcRDP4uZENVE78BjwpgZk8txdeJSDRLYTJGzj6u7595zXgC1bWZv8h391waiGesquiGFqo",
  "key36": "5FDEtCVCTRteLzhmQosCYw6bDr1JDjBDNUXbXsgNdGkJaoj836wwLpaaxA6eZvfqHjWQcmTQZenHQb9qSMZZ2exH"
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
