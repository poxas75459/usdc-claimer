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
    "2dQNpHDbndH9p8Hbq6AGeUcWjgi9wqzFkwBwY17YL631ydyhMze8EBkh96Poj1tn3Rnzd8nrLH5FfhWohFaM4Ucu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BugEHfBtn2SoXF8tRff6ECPh5U7MAqcJ6cGaZr6MtZbL9QAGKgZvHkvBxg3523r1vWYUauQ3ZX8Ngx5Mqvc656Y",
  "key1": "3ji5AEU6JcgXZrQkyCP5x9YP8mLyAMCpTmbpw7tYHyQqoeW7KDc1mbNEXaMM6akKByx2B76LqA5gq8mZ4Whz2G4Z",
  "key2": "2F4AjVHw6KcuneGXoUQ775dzH9T5rwxRsUAyj979Mcq3SyUoYVxAPMbyVwnZPF2u4FmQ9fKBk7UgGFPdziat4PMe",
  "key3": "436Es5gRdh8C8UkZyZr5x5VZBvmP69p5eVeoFYsytuoQxLYopJaGZoN57TQ9rjmmG6CnF75A1B9CwaArXso5axdg",
  "key4": "4F3n8mA4sNdvf4bA9Fck7VMEZ6q4VBDKkGe7hcP9Eqf1ahCEAbeWjgB2P1bod9FEaJjy2hvYVeKHRfmjfzs1CHhp",
  "key5": "5rgmM8dERAbuuqt91Ui4USsadZX2JXowp8rgSgxeQXqdrWhM44tWoWy1M8MQRaXKd5rWrpzTokSzyYBNMkqrr7Xe",
  "key6": "4EbbMfbQ4UGxLqQ97J89cSTy9Hx4BhCGWDq3EzZsZLtbGUya9ZuAX2nSfsLz7H2PNSbgoMWoxZSLDCeq2hqt3GLW",
  "key7": "3YmjUBhjNc6gBAqPAFZr1BcoKNQvXUHt3wHudwHtQeUaL8RnFv8ABbkHhDg2KefkXAHkQ8aDRWg8SDcpbZBWWhqx",
  "key8": "33CBANqSaVsybCdskMQwvLxoUogNumCh5M6Eu1X91h1VkofNj5MUfnDjvFdXjw36V87H7vwTDSnEfjxhh5iffcNJ",
  "key9": "zSrLg7AXU5B2GJW42fg8RwwjhpZRMb4gSctpZGQHsVfLUSdC6cygjjztNTReGa6HHk4NCoL6LexzZi7uXQaBSRk",
  "key10": "4bxqvnLtrVGVmBP6aepGySSgGsgE55tjAKqSHRtVFik4V9jTiagRseZcAJSvA4N7cdp6257zKDrya7aLTqmc9c6v",
  "key11": "5BKwMZdd8VCoFXMSUjEEbVt6b5dQp6HndTktLJ3rS3eqHaq6PKxDGeECdARj2xWwzKQQwo9c5s4n16a8t6PDN2a9",
  "key12": "4y6oVNLeNFYsvu8ioHL572e7uZ6AmMbz5PH8iCRrynSEbCcXZPmTz3UcSFxPSWqQPvq6yywTaGJkwHEPML2qKj31",
  "key13": "558oHSWnxYiTp9vVvch9EUouMCa8FViEk54cZdxDtpZRPEgckBHuvpDMtrhGLFMKpa75efSRZJdoMraEedyUpSoR",
  "key14": "2JFfqP52jmFacw85c3NhPTi7TpnaadxWGcNU4oUkEbfruUAC6AG1nHp41v5TY8CeSzJ4GZyDAH5hqvCJ5a3GDGb8",
  "key15": "3q7vHxGtjw3ZM83mhuo5P4ujhaP2y5TE31NdLAXe4FfimzhxMkNfKSGDgLAif9G5pXUw3sRVTJae6VYk85wXoGCu",
  "key16": "Ym6SM2qbnFiGr7BNNoiruaR4PmzxHkDHG9yKauXqurUuDixN1PdzMCy4cEXpndPakQTK29Uq8XjjnxupJqBnvaH",
  "key17": "3u3VnntkCj8w9BbfgLbEGoZcLsPeEGUMG6Gaa4e2GJ9VkuXHQzfErx9GDgDmecDdPKY1ACt6sei5x6dVegrx2K7i",
  "key18": "ZWcpt5jyR5hiRr4fK2JhXEJyeBugWwaQpcdqvBz4ogmCyXFVAGjJV5XAzGLQHwwrQXAHz78Kdatk4dSzeh9a6sZ",
  "key19": "XdskVrjWDRr9a8QhBUqp6qVbAEXMudWxXCoJS1geitcqydP1Rkbx6bFHKcjLCdPxrE9NCE1g3MAhYxwEvDoaQHN",
  "key20": "3BD4rtGR83BEB9ndxKADyLe2Xq8XYQrT9pHVR2nEqCYV4fu6RRYPjmnDap5AT2WRMSMYcEa8vqb4CqCxzKx9zCUu",
  "key21": "5MedGndkxWDtjeAGo52Uk1YDdz3HaNjjbBhpNzget5Le4vNyRvUxshXoAFiruF8XxiKmzgA7k9NbdjiWCP5rWCDB",
  "key22": "63PiRn4g427GeWf2jbNbH6NRTNrH2HnmmnFK4xTcmAWZFKyhhzdqHuwBeMv8ZmdstYbydHu8nxqzZ2orT4ZGxU6V",
  "key23": "5MyQbmhsta6cf9AQ9CpFUJRC4ift4JVnHhwV5sKbXQyUnwp1j9iSmwqPJRDgabbymk8dVJG55reZTLNYK8N3KqaE",
  "key24": "5uTs4rartrJUCrXtfrNrt2Gj63wbsNgTbmBezPmwiUgSNCg5AiwdJwMSCwN3UWtGnjFZzjfbY4BqS4Sh659jim65",
  "key25": "2mcPgyqbAao9Q9WDc2F8qDYxVh97Yg3tynb2nSUF9N7vXE143bZicVPtWPFHCr6qt6K6mn1MC1Fei7dUEBbZvkD7",
  "key26": "rphhg92QvfQHt1UUmcxnmZzzs96FVPVHN5iHPb1J9NgbPB2uqcxNKFNgygF3ih7jbYnrJ6PX6RucFRdtCrjKXhx",
  "key27": "5iwRa1HMcMTWd6WdjYSjfZc5S7aH8t8DWYEqN4pX2XLigRoAzUizPcWWLU7BGFigfaTTCs3ZjNe1viq1b7pj97X2",
  "key28": "5cGk9CDqRRLSXbQ87t7aUMtJ2iennDRT7ybUHPrqw4REEtmSuoQVgNY4hvMWGciahFGVWQmBwrkDpmAFhk997nbk",
  "key29": "sKGkY515DpAfxbbDpjiwspLszTwBWbQVdWy2ixga8B9nBsbNf8oVCGWQkU21pDaXvZw3AATiJZQyAVA9ms88SZG",
  "key30": "8vfyhBM1xnC7zVHaqpBrkmULRLoWHtruH9GJcpxd7NJmtEb9ET3jbo3h6HxTSEyn9V2Th34x2mWavwyWymRk9EE",
  "key31": "tgDJmsZpvp9NwbFjKZEJphaPrf2UrFJQpHHyRkbTYvN2SYHWDrstP5eG6wCRK6AiFZWcNSDYqybhsWKu8xd3HQf",
  "key32": "46rMfvC5xW67kimkRj7V5y2Yr2epB4XHpokprSHN3SMCi1wFfk9Md9Eh5xeuEN2jdsUEjYUCCouHziSAF7YLGZvV",
  "key33": "4hMaYjscQ1oGoCM8W3DHqhyEX1yuARPbgszz9FrEmddigCxdgs5RMjtBuKvNLXtnvXmpjo4CLkV4eivj3HtVKJEc",
  "key34": "h84exM8f6XbNFvKpSpYJLDDCovEmyKcNTaBjVFH8y8k6w4fEvcjZBJiXScp6TJyzSY6AENa7SxWvB7xHt3USrvc",
  "key35": "4N9qGsYjT8AgTJ6Eyx4tRXVkprBT9xEREcjGsKeSg4esvaJGnSQrXkqMTdhwFZdSmfYVm5FQ8d7epcReJseLeNxk",
  "key36": "3aBvLdLFihnVDP4ZzGGmokdPY8CTs1dnyFHthivcQ2N7FyZepurQ2cQmjkPhGX7wZFKFbHeFmac9HQavwpR4aX2b",
  "key37": "5qg8GH3fwgJF9vRdZUstCCojw13oXC8BiDPrYmAj7C1cCi1FLvrm3wZp2uQZH51adafiJ1i6k7wDnCC1pJKafCLQ"
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
