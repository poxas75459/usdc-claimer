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
    "2t7i4qmhpS5BUw7kxJVufC6MrLznhcGC4auq7YwqVxdCdfEhKhZLLZWP9rMsWVY227jr7nDHZt34znoMLWeg7wfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a4HY2XfhzEhnThhza7gxfLun74Z37m5UyUM73vXUv3KrPyoXvcwxW31DAkke6biFWp4Z1gbEhsfquzi4BDdzWzC",
  "key1": "gCbqmMTErhF5NtDo5wXq4XZhPJY4mt36ggRo1NBkAbbGpzHFiicng2kJJKFZeh1VPBNjgSpEmdoT5hUJvncn4jE",
  "key2": "2GtqnriLvb51yCsk6YmkYXbGi1CpjqzbwysmypHKoCNjKoaTYhF2WmeZNe1CivZfkusmjyKovsBT3An5rjCVhkxU",
  "key3": "3nszrCFohdDwGxfhFwczMsxVE2fMsDH4cLrmFdb57hM7WcVMmbbpDh7vjbP6peAxQq4MjzB5ZaaF53ywnQCEzeT",
  "key4": "6cnZN1BNANW3zvncuyu2po8ayS4qkq3dyVfTMYA6gAycxRXMdDN9NDMB3dCSG1e9b96nXVvfCAdxBndG1pHq3bA",
  "key5": "cgSfSVdEDi32qHwMrFezR1JWgdZrxkuqhffXEnabJMWbuDVDe93KqsDLpQttsQx6sYT9esKq4wKW3GixL3Bx6TY",
  "key6": "pKtrGvxJTqY91SoyGoR7KysUd5J6GSpzN5ysr2HqA5d5sj4uBE2iWJ4zHQ8bYMGe1iFWsBmcm6T8vw8QzESaJTE",
  "key7": "4uaNyMemL59jqH9CGqWKbc3Cy3DenE4m4AjdaszVCtJJ4q8mSry3Evao1zrdnYm6jVYo3FukZJxXR3ZGor9BzG3x",
  "key8": "yZ4h4bd2EtQZQMjBCorcc277N3ENJzG8gfvZqwCBZYUC4P6PyhdZQRZ5RdVVDu9AiK8GgDk1r9VQ7uX3KcLYWYT",
  "key9": "3qnW1y5EYJyJz7VJ8sqTZX949tTA58yuDx3Db2Fga9NTdcN17arcsK2UHng2QwsZxB6u7tsVJ9u7S4Ro51xJzdvZ",
  "key10": "3RgGRsheJfWHuLQih2iZZzh6HyVm9avncTf3gDNexbhcGBrd3xB1PLGb1rPkiv4NwFhtZyqCRgnHPnAJAhLikKEf",
  "key11": "4uXdMTWPxYQ25xHua52vL1bvRSKjPaa5WMf2hv7qPG5vbaFqweGk914S9EQn6AyWNPKN7tGaUjmKzZoqjb8qtgP3",
  "key12": "4xf16KgCJnCtBUKfLNx8Q1L9jDEBYyHb4viu7g3QHjZWPZm8RwkZgYAMCRznTFPkfiQy8fRjxmNHvu7Kde4KKSXr",
  "key13": "5XNEct4rtD5x7BizfabMFV8Ff5X8bWMEwMhMMx1G6bjXpKdDx9kc7B5V7yAzcQnAYrgVbbcnMCB6y6FLL8AkCJyp",
  "key14": "4QpzVazFQTFRRbjGMbWiSnQSagu8utUnvkyaPPwSwDFUh5HiLYua9cqcTb4mNvMiw1fLaTKifMpwmngPC4Wk45G2",
  "key15": "V4A8SX262qLk6Xn8UpY5PpdgoESkk8Tb3YA6AwC4Q3QBTcrJ12kEZJv2jbLy789MxqpxV8PZQTcVsM11CKyZbRD",
  "key16": "3XwXfACVozKZtPUbkMDcDwMXBYGF26NMiiD6Gf6pS9PTn6Y1ipoNy1aBoTkfHbEt79DiYBbTxwrN1NrRbG2H9DaS",
  "key17": "3AXLz3WGi9zXXMzPiMHtPY51xrGveRHJV8dFYG6nUBToj9a6mysyEUE8qrv7gvuNW4uStsT3fEtK1NUccFm2CzDY",
  "key18": "5KgH7wCTnrEkpNze6sNCSZ26qUfkeTunYeBzTDcr8h8hjvtkZNR3zYr2x7AHKscdaajnSdU1ZpZd2FA6UknyRTVS",
  "key19": "59KBFtMfCJejuKybHXhtHTvQ9VDta1wFktjSF7QE5u7XzpKTv4WFP3eVeji7S3aYNWv8CUA4R1XLCJFXbSQRo7Th",
  "key20": "uj3ba3pGwHGK7RwjSiAxjLowDEiqzJRcXbXqdTk2ZU4pC4VF5DuFrkQdsFkZYqnoDt5dYXFNoZyUPAdtsnT7KA7",
  "key21": "tRdXgLErMuyp7yLTZNuZUhLNCDfXbJ766UkceR3o9uM3KZDLQ1jbTnBs27xT1dH9W7x7wEaFG2nvu3RwWzUM3Wp",
  "key22": "qHV1nRh7n6tSpe4jKKBD9hdwF3G68LJSM77sEDJLpyTYLRm9f59uyJ7nC4wetQodLorREWVmvQDABGf8kqLKTWr",
  "key23": "32QyoAw6LqQePQdutfYobg1ufgiSU87koKCBssUx6N3a8MVbH9hNtBD8ktZKkMAjWKJPGv73sZFkrjFeqxwpiygA",
  "key24": "4Tot4LPWxWw8BZi5XAVrKHgPkg6HHnAJtAnzmrk6XzLsFaffrfqS7gZV8vuorHDUe6oBGHkZErAeyKKCu4NKHtT4",
  "key25": "5K1PLnp82RKAynbtBCiRpn6oV1sk21GtjWyJdUaVREKxJHqr41XvxcFw8P6eNi45jm3cvWJMfRAxYzfdVnZdyoWH",
  "key26": "2CdBwWB7up8UduCRrVGPmiT2Jrk3KVWrLPah6kTNcsWC8vMGo1gEBF43omcejhEFpPJSTbCNR2K8f1WDqX5xEDYc",
  "key27": "3FGYxNvU4VoVzLjmpEGTGXi5tyC1Gr4GrCpFwMp1b6Ph34gXFRhotUHtvLDgPGvhRc4awZFvdm3Fbwkqd9nxB2TK"
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
