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
    "66Zts7CrDegfDUdaQvUNW3ZzFNh5qmqTYKnbGCDTWX9B89wDoijpR1DGvDcfkEcudoiz4n9eR6GAcAwL19Zz7Uzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHhigDNaZ7qji5PUbYhn51SrsjpAw3whFffKtPWKdd6shJpFMjjT1x5AwKqmgMPSRBbhu4tNUxkJR23xjGQsB7g",
  "key1": "22ATDAwmSD3YCs2xuxWzZbW2GdLbyZQy98NpwsEiyCXnaqprje1wZuAxiAgiyBzmLCZsMz8PQsLEV8AjVxAh16n6",
  "key2": "2jACeJeqN9v3Q5h7GzDh6EBL4vgAvTN5uHjDg6ZFRoxNCsP6K96xQdRnSdoiv3hQjkrGonwpr4fMHnqHsNwbpYTF",
  "key3": "2w21nYd8FtMNv5hXszuY5nhtgAmMc7VRRWbzY56vmEZx4z9j1HePstrssqSkVKdp7s1LEQ9K7HvHqap8MeverDiD",
  "key4": "3GXCsYFVwDQfCX3cHznUcV1uqaaUGiMTyJQthatpE7PoG4SHnWHHNZgDfcmChithzTRUi6jLKaZaMxZsyfk9ntc",
  "key5": "5aRaRuXRiCN8HBhXMiL5YtDPFE1Hpgb3Pj8KCxugPRjwrQu6zG2vLdrJdZ1LkjP2H66dtjHMSAQtRDVUNM5QgkZX",
  "key6": "61sc1zS5aT7i4AEzxcYPcQ9MogCmG98Hg8B4SLKF5yML9SPcppddgGgWpLT6BaDNnANxEnNvUVLrkRTJn48LoY1S",
  "key7": "4WytXbDTp5LAu2Dtke9vkTeaCcTXydbi4eR17F64DKhEgYZiMc7vQJSvgsw1zbN8UBEeMwFDicJ3GTXuCmg1GqYC",
  "key8": "3V6F43dh6DZSpNA9WwX1LSN377vnHopEHBg7MX3bgW5J94uQ4TqWW2bXJ5Fx8iH9CFYxGmgbUcSwo3Viv54FutVr",
  "key9": "2ddMNnYwJ9cp8TvAR8F7wPWiSRGPUzzSvaWB2cqZ78UznsNTwZiey7xnNt7vYkV2kC786mafRZAi9p5BjkHsBQtW",
  "key10": "YAgHjtrfKMd1M3PPrDbxxkwcBBYbtDFpdi3gYUrnUPkQCASS4Wirjo7VTKCfWTB1eZdECmaZ9FyfUW9tSMbMp5h",
  "key11": "5u3SHA1qkE7ovktpQyJvpLiWSv3YmvLC8k9AJRRGUaQ2dWKEdDNbD1FuXCrh8yxqkdMhHDHWxRJ2TLYaLdV5iA44",
  "key12": "kteCNCuRMExRC3xF56h4UANQR2FZierpAAFLnk2jKgTSkDoFob4siTxe2tqFhgzZRZnjxtn4ZQPDteJ5Nn23YWM",
  "key13": "2RBuhtosPC3xKCwZjeFU7zdSRoWbCLB6heesy4odq4N8GtXNq9KxEPJAByx3TweQFvXYzBiksupq9ZefqDywv1WY",
  "key14": "4ysVKAuJL1tjmtFTqfN9YpfFo6cfrsNnHVGBsckAzCaBsYTgYtxbSqeEYfXH3qCCV5o794zbmcC6WHus1dRkgvLV",
  "key15": "4P8jDgXEkrEVvUsbGMWpURfrWpsPScT1wBsoPfQzNMZ61vfkNQfjTcGn2t341u8xLhn3NaVjgPHgwiYf53PsNLc1",
  "key16": "4xWXUMHnqZM9y6ucmCMYfyvNRNUzNvWZwtHQ99jYzLcaJUQYs13EC8itQmeec3eKNe7Kjo2AXA5mziDmcq2C8CBE",
  "key17": "LbFLX3XFkgTYcFcPYRdMj5ycRPWtE7wnRgj1V3WR2fGLRNPkW6T3bY3ErZ8RLQVqQDXXX1Ko29wqb48mte1go77",
  "key18": "3yQPBcRAEwV6F6d27prcPwdyCp3L9seEjqnUWTostzbGtuxFNjgSUz6r1NHHpJZJ4PRfQfCGUes3BCveMy2Z9GjM",
  "key19": "gmSZRyDwkSNHz4qFqsRfioQEjxw1ZU1ebUznjccPhQMKgb6RXwZnZfgsRTng3GTwWTx6G6AnhFPtvnAHiC74xLV",
  "key20": "4MhRquktgcwHX1PFCsn1x4tS9X1d7MUvYsNLg5EPCQVAhgsc8LP5yMCgebFVC4Dci7nZEdFiNxMey5cWes5zJVL1",
  "key21": "piHNiAJeY9RiU4K9VuZm6YfcQgNMabgMYFQ4nXpJG6vG8d34pk8MrDTxtod9Bnt4A3fJpkdoMzke4A5uLjWj7Wu",
  "key22": "4jkFfZpJyrZ9mcMkK8JWQdFGNEpSRvgh48M7FPr4vXKHceWqAugDzVW6pk8nuC3xpQhNS6gZb5vP2H3C1xR8cGEc",
  "key23": "2scY2iAyMyi2ttGBn2zBigrLz6697fgrN5d3wNCWFXnUVto5bcpubmn67dLXb6dkxzL5UBqT5cKBhBV8e4tyDRh",
  "key24": "jVkUn78KgEgXrQZXSBYWpUuq3E4dykh6uTsVtaFR9eUBsK3KdUDNRWj1mELepH9N4AQkeP4r8hjSvmengVaDgHy",
  "key25": "4SXJkw7fkoRfm5mhTWyx7cUQycGNZUpjKcEKni9Hz3FDbngnmv8rupxHksdoFdQuZQuMz4nYtAFgXZoD8fzNEJ5L",
  "key26": "2ajmvwh3GSagRjzo4NM6v2hUj46sf7pi3L8NTdqfkM9EAXseWqfLnW3coAMYhrF8B31dGmzutdrqYuvG512n3bqV",
  "key27": "NeD4aJMuMZgnqBcZiC9kmZacVoiwGYXqVvGCLquiT6wMZvwBUWGZshNaFkizK1YJQdb9n4RpdN1Rd9Hop6rJRH7",
  "key28": "4q2i4rQRvrrUEHwiijKtygkYE5Tbvpt9Fbbsk2iBqfedu8RuduW1vuLmi6VGkn8vHQhe4C2GUdUwMCZexeXVthu4",
  "key29": "4DmKMJw42bsLgpcKcxf98TbDKRouwiEM2jvt95WiBHUeE9Vuyw6sfCgjt5MvMF2U1X8NFwmo98dLbjsDBztc8vjH",
  "key30": "GGds5uk2vm7ivaJxXcJ3ntH4D4A7oGffjemDoZ5KdKTgKgXHYa2nAQeenCnvcdu1Zju7JEM1jx25bQv9eKJTHM3",
  "key31": "3XiAq1HvqTNwgvFrsnSvFRfnF3SosQj6RyHq422r67zuq5vfskT2hUg9cBPiKFyBEVy4nBta4CLumRjMy7Y47ena",
  "key32": "2Pqn1EuYhLQtwL61ih6Mb32cFFmYyZ5jQuqd43niPN1F8QHxv3iqYbTTT6DLHbTMVnKMbExP3A8oEvKTh2Gc3A8G",
  "key33": "2W5uux7NniK9cbgMQWtNpvVu6gMhVKQsYpZhG3fzeVTJJ8DBR9mu1SUbeCKn7YD4aoFoTScRQ4CPLeK1YujwDPgH",
  "key34": "3aAiGcpLGTgjqgGbLQ8mxXEXexNZibcpZEsstwynY9BH5LV5m8emNfjEJWZsoXJL1VkeSvqx3928KV5rCgTCUPHS",
  "key35": "4JLxV4UkAfebAKxH9xriC1nGjVZeF2D3QUQAmk3fxhz1hmzfuNAEhF4snoYuGt4gNJzCbYfmWZKTEjEhuqQQRRm2",
  "key36": "45ZCPoxsKfCo4qQuQ7eS4AuzmxoSRZJeiKYpByuGuP3uLF8aYDWHTpcDXXfeMDNv1WJfNvSZQZLEcXu2NoZY2uCq",
  "key37": "2LL1GCb5MnNNuCrSqHpPj7MsXZEjzdRU3uxyQMPWDXuiCRQbpkosF9q7spMbQf9X9Ra18w6VVy1rtgV5FjHb6XEQ",
  "key38": "5PuKxSwQ49qCpS1Bu5PQC1dzUtoEdhdQr6d8wM3GmKymXT5EgrtRaYZQ1KELT4CBJteY991er4zDyipQhJ4CKZy",
  "key39": "3EfjuKykRkoyzwjttCV814o6tL9PPWZx9zk1S8AR17EmZ6oduQzkSnjrgBAhVjpoG1a6LdkLMcFeWR2P3Sc3Weyr"
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
