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
    "2eAH7K4GJqL29hHPQfjHrwUhvBtYSR7thgW2Sb77XATCZS2CCRbAvRFnPcspiwcVfYw2zLUzWVCagX492qFcGh6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56815f1MvHy3V6zf93KyL65Wxt9oShUjkSMGidiRXJNmTqJrJx7uR2w14kkbiWi7d6q219mr2rXshPMxLzww6Wop",
  "key1": "66LwPZPhbBFPT5kH3zVGia3aAqZihgDCi8M1QkTBySVKoBWNuvpXsNeyVWogL846FFDKt5JDd3B8FPf9akYHxUEF",
  "key2": "2fUxMtNELkGLzy9T4xBomg4NyKJTHiJ9hZmdzcqHY3MTntPMifmqVfHiye1b3oJbhHrYoKSwuHXmSkvxt5UZe3xf",
  "key3": "3poMM5iCo2zfRYqsaMHNHsjEQFo99MdBVxoKxPdRfRjDzELesWy1oK7jggSaZfpfZe5VUhumtTxmDTHemzMdHUJw",
  "key4": "2rnXvUNAS9UAVUL26pBGJftvnKynngShAyTJhTwG1A9T4jowJjBM9QLHiGeH5YYespBQfQzm3yZ8fBRxkzds1UnT",
  "key5": "2Qo2oaeT7tcYWFLS73NS1235xP2yEdp37Lbm1mSv3otqyyAAaMUWVzfNVXBw6ZHJKDGh9JRzWoJsoJxZ9QHasUek",
  "key6": "2hADXZdPF1Fidt59F6KgEywjzuwQ5xDgELNuxZPsqppiUo2pZwon9ef2wzaHPVBbuHQZascgHYerZ2BisF41YATx",
  "key7": "2Ymvzr3BWcMoGG4TePibPpwBS9YNoFeYZ5Qqs9hhU3mRcxasquwmCK4yx5m1gVry9FrKapgHpWd3eyE8hCn49Gvc",
  "key8": "34mc3aTopRCXLWFoCPs6dmVkKrATS5a8WQcv5UocKN3kgavtMKgEiQWKzSW8j88HKDsvrgW5YrBJqUcFbRJuc4nx",
  "key9": "LGR5cPvyMXpC7G3NcB1QtGwpiLMtpv4a8awTqwPF8w7EzKvf4HNiEXHuHhnTLWtLVJsomxf4RB11hbkd5ah1PDm",
  "key10": "5aruCRPYxBMo9BwFNvMDoNbscztsmKwzDLY3voMKWHsxwxTEE6rc6cp49AXw77yXXA9BcAxZFAyzmSqEQxYxpUbR",
  "key11": "5ybbvDrw4s31qbw2fJ6ntBr7ced3c25ACJdufqEerzcfgaFFhxvPsa1hSxFgC9bFKKbZoCZYrtGy8Y2Z1oLVsG8j",
  "key12": "Bw1SYqDwkCGsSf7m1FtLiuyFFTz347QePyyqrchESEFD4TF7FxTFMwVU6EC7sLxNceTCHGeRQbqNgR5meGx1GoA",
  "key13": "52Gt8T6UTaCk44Tc4phmc1jp7rY6ScHtWwjW3e6zmw7boP5z7Q1ibAx2mDf13Da28yR9SeCwAz8U9ueRao4i3zed",
  "key14": "AuuHWjH71KNQZvPoUXjCZEGKFhb1KWUKjsDQbBMERGw9AnNzhrtKryPn7mR4MDuPQSQUR7c6MmDKwfWji9qHviu",
  "key15": "n2kLrBqe5CkZL3kFKdf3xCQNbrjK3AcTv7AGiTqMLPridmcErYsZhSugB8zBe1edZSd3VEXoPQjeHVVsBFQa4Pu",
  "key16": "5G32QJN3dGvY5WP5X5F9rwwYC8hTMemaHWhiLBNxcCZp4GRhJmsivX6zB13FijgM1uNsksmhzvgopUpn7rnZ2DM9",
  "key17": "53DDJjNGJt9nqeufJ9JeXFxvWN6MvWzgkqspc5ptfCCFMGD2uGXGbHNYF6kEAS2daBk1DTCwiAfRw4BF1B5EkPac",
  "key18": "2Gp7LGjnYkVZ3MXRoi3nqk96rXzyiFnmBbzaAASczjjxbxzyi8BAuzLfZNprDabx8srmUSiLoDqy1X7ch22vydAt",
  "key19": "651boHEzVrfuuGyvw2BU3VXVcfxKTrRY9vTVLc7wJGPJeBWRTaeKQwdH6oJJxAgbQjXkTQ44GpxZK7G6wE4JRLJj",
  "key20": "Hv1MydnDwADhmJK5Uq2Da798VmGcqyU4goTL9CpySt7KwfCnvYDY7cLS9xVfnsVjzqHFNJF5A8VuQiQEVXxHeez",
  "key21": "3QwzA8zuRf4udNv4Aszh3fHMxRDL1a3Uve63AM1cwCj2gy6b8iaMQ7MQZAucS3QPM8wEsKMjN8jK77CAXaHuCQ15",
  "key22": "4cqp6QzToKGiobyVqXjL7hJfZprG1oKKnohxKULgqNPMGwBKArWDsrrh5qJg6rZCojAAjK2i27DMUCBzvQsemw5F",
  "key23": "4YY19CVQKy1mZKbpu9zVhMwqB6w1jGYg96zgcWQWCqE8Lq2ZJ5GMLQKTayM2TXbpwLUr8VvWFqDarDH9SWPgrQhm",
  "key24": "21nWUdri7cf6Cnsd1pjucgMiXVK2FYxhbCru5A1Q6zKUrFsirwASHnXTQTyiFVgezcWns8AZykwq4kHSHXzGvcML"
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
