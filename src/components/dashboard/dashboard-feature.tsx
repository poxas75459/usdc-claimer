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
    "3zoiSqGm1xwygLKvmQhzQstcndVX1H7GoHzFWZ5WdmS9PrzYvDFtK5tFDhfZUbusnN3dVXaBY5XTxEWHXn1DiRBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RAVHQQ4BcjmT155FKLiDq9YaXFw4hqJYFRwo6geDyro92sDpDEzx9XvM2qkAjcVAP5yK6F6bxASAUZTMBAvPFz8",
  "key1": "yLD5NHBnLsudkQ9JMVknqLKziBhV2AW9SL4eBtUYjCohBTMcGmqpjYxhDwRYGmmWM2uHtpUdJkiN5YbXkiLE85u",
  "key2": "4TijZNbgQJshbPLwKBSPf68KsDYkqCYmYC5KWcgpcjo9fAN11TXz3zADRf3JgWfLdjAVXZpGCax4y7qGu5kzdDGZ",
  "key3": "4AJw5YxN3jFDMezPU9gj7KidSij5NSs9itcgX7RCeMqgcb2hKvqBi32G8f63SVnx8KFBXFdEdVkTixBaqC7zkvjb",
  "key4": "TDutd2V5xhdtJw5strpmCBfgTujnpEqnFNsa4DiNzvgYQSR8S4LH9nMG4gzm78WU15V58q91V2eK8ipZnNivEjn",
  "key5": "36eixTkxWSC2vZNvGYry9yaYXBYWEGN2N4BqvoMQEtUM8uwv2TzfyxURz5d26KTeomufnpywdmXozL7F7coENtC5",
  "key6": "3xgeHuqXh9RVFoMs4geoQ4s9o7rUXdXfBzfAdphqwZjA8n2Xpc8BU1ZEHNd42AtQ631akK383ndg71XidmQi85m3",
  "key7": "2Pca1tZsJfP9d3xm9gcdg9VJfBSP3oaBWigQGp8TuBNSQrwLkwBDqoxtuUM2vXihKsUKapHM9sEwkqf4F5skdxGg",
  "key8": "5xziTW4Rd8EHnhXVCNMc3gHs4mxvFjFo6KncXzBSukZVg3vJSoDNDGfysCSUvAhPbnGhTbVnZaBPhXDD1SyYSekW",
  "key9": "3TVgbbaXFsMa1sDciFdZ91E29tYtWjXjmLeBcfcpeLNZY5hApTc7Df13WctETMP8XA83ft6PG6XB9VycaGfr936S",
  "key10": "kyrD5F788zTHzGAJF6cJF9DBuz4A65k8ktuxaSi3FD8DBbzUpnGHZtNpMSbXKJX7k4xVwLFodhV6LkdF5qPUHy9",
  "key11": "5GtCjeZkSoDsK9yh3nLfbWoE1HwLcbaFRvzzACkH75rdzzmKjNHBRZG1sCXeyLP8eYwWxHV1kj5dMdQBns3jgXxa",
  "key12": "b73S6dJT2ntEnUw1YtNUomBbXUztPzWQ4BCkmVizcQ57PirZ39c155EJsTiwNkiqdrGQxER27PsUgF59cv2gB2Y",
  "key13": "5wDvn2XmZUGUm4yLGkiVWLaz6cxn6fcgsg8uCAsWEEJkANbZe8ZQQwjQP5mk2ABsY2wGJx9fMgGBgDmpU4ZFACVx",
  "key14": "5MP7ZY7bu54ba25zZK77La35thLH4utxRUyYvpx5Ao34YYz97Z19ag5DxWQhXbZDBsoiaeGNTkJYDYyrvghkC9A9",
  "key15": "31p7nGqJnLycCz1weB5MnjAd9P6ZHttfP9h11jFNtQx4t1cffffvovfivu2KLsdprKemtWWdfFfuDipL1DU551Fy",
  "key16": "59Z63eGGFgtVSw24cEKYiaWbnppb5HcXy4UKs7KBVhRfYoB8tkJzs2pPkZdJaremfpZB6HWZmbN2Ggbco4dpj29A",
  "key17": "49sK8FDQ7rCcJEskn3xVDtRC4fnc4WoTJPoSVvSrQAnFZmYqbaY7JKUGS1TrvhFnsSDdqwxGNbXdWMVD5F5b8cuM",
  "key18": "2cEbaF73daBE7YxtURhXDdmQDvgNg9XCykj9dW2aRhioKCvmARxq58RgJnznp9nk6csJnFxWCpvvRjwbV7htCLo3",
  "key19": "4N4dHQvieF7J6tUy7h6kBYgZ1mgbCHW7m1eeiFcHkHSDLE6TfokHy8vbnRwqFzKSTmB3RjZktDvm3BUNgzw1SZFr",
  "key20": "5sLji8CFkwJWkdU2F3LB42p57ntkXHUkSAzGiXjqpxPKXP3qEX3LY8LGGUe4uBCurPqtu6XrDfb3e7d6cc4AaPzj",
  "key21": "33oY6rCg9ndkMTfZ2XgjoHKfF1rw8aUeCnXz1N9Ce7pcopSpMnWyHHpNYNU12fKTj5a2YVEp165Aks5SPhkpNaWY",
  "key22": "2j5AuU4cufupKMJHNErhjXdiUmZAzQFXiPfWxQPGGEeVU2ZWASHn2N5YNPCJ8MfxoU5Vmqp7sEC3Ao7zWsbFTzV",
  "key23": "2KvsYpTUQjcrFv59uWVoDyEg2oNCZh45S4rrYhBN4892nN8fHGdB3XRuw3wvqfXpB4A9tvhCvKEFbAQHn8sZxbko",
  "key24": "5HR5VjAcKzny41wxXe8UwXbhmc3x6AesQ5pCtV1gKK3hMLBbHYHRs1VxhAqD9h2LLAwjfrLpQ25sDEf1Ff9YAUsn",
  "key25": "3HQksjvsvfZMGaPaffWpuWqqDom62cratderk8SEXvqnhqkfum6pKkv6rU13TdBqChBDM99p6wiDreK79UAibHyV",
  "key26": "3PE6WpghGMfQQYkTGNr89KHTZJGvB3omCpbHLHpTmw2f7MovjsKnf3C3SabUwtm7AfasxXuKhCNb6TNvW59u1Qsj",
  "key27": "RTVReiXKEE7SUUVVDFsKxDsnxismWuucP1b7CNyuDGg7BvoXuNFg9PHUCC3uKpoZ9hP9Gp5cxn7Wzf29LzF99K7",
  "key28": "5KAWmorbvwuJxwQbXvkK1S6dcEhNQR8UVGf3ztxiGDcg28oYQrzXGgq1bwxZKw6v89q9sRqeb8aKhVF8yMfsr9ey",
  "key29": "2B271yUeqrxxLq8VuGLkqzWSo5HjFEHWUuQ9FGjXwPynwbmzJVeEtppmUdehXTZhv7xcq8HXDVnW4y2qvEWd1vSQ"
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
