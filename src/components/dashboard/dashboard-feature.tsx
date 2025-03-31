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
    "3nJf3LY5NTGrbFopRP5jhWjZSFWqQedX3uAdeZKCqqsy3wQRwyc22NQ9nt95Bn9bPeDbCo84K2VDd3ztyeDePwkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCYC1oLpLQdsZq8NjgKBcuuMK2s57g7zEPpQcu94dZvNw3au9C8P2ANdS43FmHkf9sjpHqMuH9G96rafrYNw124",
  "key1": "4AsGJDSabMwehHfiaozzfrVmvEKxhG4gS3fNwwDZGN9MyVXeUG9ApDdxLdUSdhpYsqjBrwurLSeb51nyeSmNteUR",
  "key2": "43aK9Qd3d9pVfGVrh8VVmeMDSMqwFhz38s68tYmtRDZAPT1odK4gyZpvCMWPKxEEXdkPJ9Un6beDQykAZr11yMTn",
  "key3": "4oqac78zG8VuzVcmEFrmgCuDUqLyabWvPfvmSgBiFG5YonpSK5W7G7NgiYsvtXfJdVtXfXDiRCXeBEU6pw69wXHx",
  "key4": "3jWJG2DNvSjmA6JwdoLDnMMySisYSV2VEbCwuUFdMFo1cfmjoZ56ysbAYQDgZo5VTPGovK6q5E3sZdR9Pjz1VHwL",
  "key5": "3AC7dDFLsq3nooquPX6Gd9iVgcnrJFyojScAWAGAGiqhSkarBb92Nod6Le1CPPGHcobdm1T1dCeGpewM85xThbVF",
  "key6": "4o6kDCiP8pw1fXVwgHxWRRdtEQFrxZezZxmXw3NkNfgfPD8SMwx7kHkommUutFiydDcWNGeMv3EEgkhxvyZBEU2r",
  "key7": "2jVxUCmaYdwdaezMH5WNsEacuaXaDHwAaaxCNMDS1fj7FWpiJt6Vjef1JzC7jXPYLS62gE9PCnxX2X8PQHTLr5LC",
  "key8": "272GmBFDRccqmVTGyDMxDQJm3hxY538FmiCUT4iHuZihEpre9JjQVJfkL6N3wZ18ZqEA5zRW32MGkzzsoGqHxLfv",
  "key9": "25auDxjJssxP8tfjxRrPaNnFVZTYXWhuHpA8E8fhNDcMFF1979q5bSq1D7vwP3YSeRxTczw6z8d9GPJAHb1Ei7KC",
  "key10": "AsAQx7uqmJWxqGTfUVX4Eh7CtTDUsQkeWqAnPS8QSTUrTQ52fsFa1KMHBi1dYHsGJrEwrkwK1SqaqNCmYrnVKmR",
  "key11": "3u5k2iq8vSXAz78VvUCdJGXHr9xFmWesncB31kDPdU89Y6N4oSPKHtAR5YUGDzUFj7TFLAViDBWf3dFK5DcJEEbJ",
  "key12": "1t6mVQcSeWjPesZobuDDd9T6pU2E4nS9FMxJ2MA3tujcerWmkfPcgn5dZaSjrj6txAm6AZvLTbLTiGFwakUKWUT",
  "key13": "2nPE49knLvpesaLiJHa1mR5W7nCsrJ4BsRyaD4btUhKCFfS6k1x61gf6G37MNgYsmtNrHoKuy2GyiyDeFUiMzxBg",
  "key14": "38YGrhyBetdW4h52JCHfiwPUkjK8ji5JkYRR93uMd99bCvp7defjFaP1uGvHbYymnN6pStyyvBjc5kkr9itAdph9",
  "key15": "5BoR7LUrHw7i6hKKwb8LUGJWAYREXfzDm8AY2cRw36LcPJrxH3Enu6EX4bMT1npCyGtZJKeS9jLuNskkKXzrkyNy",
  "key16": "4UkXxBckauE9G6Niq2uNGXQ6Nr1XqayTWQn8QpJSc2ANnDWeXhawMEPjRcC8VwJiX8eK5D2rJSmGGNFRPSLSpSVy",
  "key17": "4EHgF8ykB1YrnFYSZvsNh55pynQs8TciciwXaVDR6PEP9vmuey3HMwWJVBkYC3BrG8an2ZPSW6KU6FJVkuCwj9ay",
  "key18": "5KXZ5PXEmuTFUaZ4h5Ce8NL1igMiX4TdUqN8Yi6ufS6S8LM2zLjRWUTm9pMVerhSxortHKiwYgoEGn1g66hmNfxs",
  "key19": "3JsGQTGFrkyYE34YcR6Kw7sVrm1NwKUbJeqwV5TYkCe5cH2eEpBzviMqmp82SK5cyjheVHxMbZRai4QEU9XZrBnC",
  "key20": "3ZtU3NsNSPzBppsSu7pKVZbAczBBmwJczAwxBNiMEuWFB9df2JqvPsHjLuH9ZcDSFmuciDvfti7uHFC1gsBo2HDL",
  "key21": "6JtdSp6Kg7ckYayoxy1ELTtd9Mf3YbAkowYpvNLq4XfFXAow983DhLgj3x4Kf5inZ31GFZrqSqztwAMtMSXFwCb",
  "key22": "34PKPcLJ8hNyt6kHVRk7x47xedziC4FLxA2JkBHVKuu5kKE3rMyFDctqsvhucyR1joMDgeJh1hQhX2zedFEpodD1",
  "key23": "5d8MicjFrdfMDkVHnrCh4KCxM6arRw8JqqPPWGVTqcX7eCv5EFjV4rr1NHNWdA8Wz5xU9givDgbx6dU7NUDXB5mW",
  "key24": "2vuumTvrCaYoqEGZdeH6mHGzJd62FrkaSXd4utwQk5HPp8xnTHYK8FP6oW1T2o2YTbhkzNMTPksEZgLBhaSinHPp",
  "key25": "2WxGCgd4KVpRGXbpiyCcVaSXx3MWEdizTaFu1PHvNzAH3Qf5DfbSsQm41C4mkAnQWdRVfSkhioZGqyKA5xMpeHHy",
  "key26": "2rncfeiuq9HgExipUXq8nXFF8nt8ALtJjGYhWftv28Km7RYmYtrzhbyvoypi8d429oksUCZwr37g6ya6t59VDdjv",
  "key27": "4NjFWPuB1uyqAdhFDfJTxUjAoF8wQJTEXTgUpxje6vsYvs2YwYxaCa2y81RyXcMBoF8qBDKtPvJmeKU9wpYtWFMp",
  "key28": "37ar4gMLptLUgAw1P76apj1nF7MFQPQaVTPiKrvZgUE8Q2j8rvWFGPfrrXfmWAoY7iRqWJk7Gdfcgh8pTQcLHrX7",
  "key29": "33eF5mA4eVXdsyqf1r7rcS5Dwm42UKr3xdnENm64T8pF4ovW8QXfixQFJz6cgDsjAM5Pv8CPxsEyWohYUr2LNb8d",
  "key30": "4j6oNcLBJnAr7BfHABStobvShvH6d7oaijyNecjFfTE73rZA7Hm7R4MptGWbLVY7z6hBuyzomvUi5c3uU7RdQkAB",
  "key31": "2emJT8F4ut3Z8HRbdg3h91HsHAo3fv6TbTLmhA3KYrHCjNd1DCJFhQfjhvfL8QcRUAE7SCFzwqJY53VAyPXdhr8v",
  "key32": "3aMmh6rWpmpMSF66nGR1Ku57evScAwZzAhjshnsWQyWN1DKKYdzjRd1xhzYWgWJN767DhYA11BAjYmAFnpSGF95o"
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
