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
    "5eTnSnCtVrH3rS2HM6QEV8FqAHkyxdx8cHLwBsYQUyJTUiceHNfvuKs79pP8VFLCbVLjjpvckvgAX86nBYPEZQJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XmcxUBKCynos32yWM7MM4AzbdFhJsaXDaDN9f2UM8ztYANbD49Q7uruiiLFH6y8dxUc5Yif7KsJTLMsweSbVqEN",
  "key1": "4nKDBF7c5apGykEjaAzyNPTfJRCf1Yre5fc5X1ZgXMMV1qYgJb6KEQPJQEeTLdkVimQ8Z3mCQLpsjtZFW6ZB2Lkx",
  "key2": "BfRWJ9yE91G3RMdHebdXYisL1YkqNNBCnqNvs7YuHdDYaDoDacgbeRxPXUponWoDZNP2yhk7p4WGz98MViWK1jA",
  "key3": "5pg2AFr8zGbStUSgHbgvcnz5Y7CwuYcQxHuwTv9mh2VKKZ6twHCBiEKUKJcSDk9A4n25EKJRrK8y1dnTJQgB7ty3",
  "key4": "2c2zfCRHmChiG2cFsjSBDLzJM1WysPjmhDHixerkb1XzbnNrJgKZcGTswTi3zGnqRTnvwkwPG4FjhhXLPy12x4aC",
  "key5": "4pjtXmv6LXtM2YQDzB2ur1ZFufxCKVY8z1vL1N76oezKoa1QabBbGtZ5YheyfVTZhL5H9aMdjjD4CmhCvW59md8b",
  "key6": "5FMpfqiLMP3qf1B5V88Ayg9XdzroUHXkKSCwhzMMLgNvoLHXhK5ocA5cs8PrRzaVYoQmXyWfE6FVu1mTZCyJQt6H",
  "key7": "3JKWPANG9wQz4ozeP3LmKJsW3n4RRMKHYXZtHr6H4bUQMEwqBFRpSvhZEURZyfWK17LhTJ1vKEM9ZR8w3L5qhh9y",
  "key8": "5gjArFSgdfv5pyxraTuPVa3ZMfVKiYXzv4B8BjT4ouVUP8TFDpB7mZgkkZRFdpnFYSJrJvcWHviug8bGhViEFa6H",
  "key9": "bSVbdYdDEAtXzgkEtMP5ipiGRNw6vu9pKJAMjncgPADdM7zMVUc84vKsCaQYoCLQaUaKjUWjsxvEX5FpKj2gZC4",
  "key10": "3CEG4Z6iWRqJ7WLAEKux63ZfKijw2syMZHjdxx6Qc98Gnn35MJyazouK3gYih24z9XDt6rmdqRecYtKmWaX5UTQ4",
  "key11": "2dgmayDjbko5uu9yJojehp5KJcvansSiTqxXgwm6oSojf4czHK8JfZjKRZ4VuSBbkGErJ7EpC3pE7EWUwzT4fdWr",
  "key12": "3jAUs9DwMbYe4V5xxrsZjenRJWwkr4hnSjyjhBCVz9JdBR8ZoHz3xE7pjm5C3q4GRwJTBfDbfJJnc4F3hDMmtMCD",
  "key13": "4SbfTn5rYThFiNoA63cq5CvKaioKZtt3D7z4wqmArX8n2tco4mdR1GcdAknDZoVm9uMvK9MTxrakzGFvu7Ztx4m3",
  "key14": "3RMXvszxngT4TaD1MfYYRyMmRvMKnkPhTz6qGGvVWMsHw8RYr7tYx51DWikziXQHSyTi3v4JDDwnm3NnemeCFFJQ",
  "key15": "ZLj8XQJMMcQz4Cd4tLxZsv6kS4GUnaU3NPq2dKbVgZFakTTFj3oURAAMeFfzMV9uUoZrK1TXk4kfimdZwLhwXr2",
  "key16": "5cFs2agWKEL8f7tqg3iAZAkhreQ7zvUQYUfhvppuDBrQ4pZP2T5sd95me31LnaXCqDr2ctTg5CrjAAuXRoXqHywE",
  "key17": "3pYtL4FYwCCdTu4EM62z65D9Qvvsd4o2F4nep5tqyS3toAB2567WeGG9YubxUBB5osrGbryVUHdWDj9jMeEN1myF",
  "key18": "37W2c4txyijvfVhSYbkAsfAyvVC7wphyyHmFi7CQD9dUMzp8xFTyA6DT9q4XeAijxYVeHWF1kdUAN8pJvEbGXQdU",
  "key19": "62HEGt1B7raKKzfeifoZez2KvW577Dz2hze1YhLDGCtzoUEdAKJXcZBQcqb3tWenASTuRN8kBhtdZbeMAQC7XgS9",
  "key20": "5vWGQyZZhwyCHY4LrUYbv2mur6RxEkfXVd1Uo6mnkmZ7VocmVw2mPexiZYHSf1wK2ia7oVhngU6wtcbwPTK5ZEdQ",
  "key21": "5ShzLzsYD3RguLheq4Ssg3U8RFA1fumaNgwnjcLCFvUdG8sad9bFc4JP2eC8wtqo6Q2sfBFxj1ZaPgzZgDeGRWbp",
  "key22": "37VpcqcwTRheBXdv2SVhGGfaiTmuVAus8TEaVaZCmirYJDFemGz225B9cWgzM1kVGqycBVnG58fyeCduiSKvzJTY",
  "key23": "5SQ3eTSxwdAqsbznCijnVqozC4XnzyCvmkeGpqeWNa33p4p8AWEs77ezuPexr74MDkeQRuRMhS62dACEt5D2ZoMQ",
  "key24": "a1o14T64f423DUdFQhGqJtV2RU4JNt5obcc6zJoVY31mTy7oRyYcZCHZL5TNi4DFN8rsCKKpwz4wxqnTHKaffRT",
  "key25": "AQZTsghMstSGHXnFca6HHargWPqoEX5GwPYykcpZQ28M1jkY9kfM6iyX9ohAiwdRcJcJ87xn8NSX749RQVPm4ta",
  "key26": "4Ybyww3dYqELsTodRS5t3WXtcd6sHLsc2Scf4hBRcqUXtYbFPin8QRe7tKqy4t2mxUDJAXrkL4WVtpKJhpPTvNgq",
  "key27": "2mWWFin6vVjQzbfrunNBNYm1jPnQ4Wg32xjDS22QLAe1ZbHuf2A3jTH8zaMzybdhXbpzHRLZD6g8en99GY6yHqCu",
  "key28": "4fpc7jUBaBd1VrCR7e8w9d6XTjEpfpMw6bfaQmBWDCJ9rXw7etnYQFAgJKRyaruuZCnahYEBRwJQ6189327Sg3kd",
  "key29": "574gBQoxJk6bENLJbrkz8aDqq6qVcShafWofFYt5gNeWVUbN9BMW3jn3mfJ7STsh3tRe4hcdR4HhwLAwgipQpD2m",
  "key30": "3La2eD5bmEQZF9LxRB2HUXDiE9ttRau7mGpmGZ9h8rYZi5PLLUhuBZvUkvjcmAPMcJecumXmtdbEyw4grdKkCijW",
  "key31": "KTEQ7jBV48AAUL8Nss6uYMP6CcF2VmsLLMrq615AQPa6BdqTxSioFXphx9RGuXFW8UgYZUKwFyudP2L95hev93C",
  "key32": "hrKqWH8Qjvq3o6oo9rs9MwvbPLXHs4akk6d3VR28QZAYhuULEge1JLQQp853MCpSjjhfnAixCXUXcFv2BytGRdR",
  "key33": "E7EiY7ZSedurSpkmFJox52uAFSJTi12ShdgpNPVTqgvYEVr3r9hXQo857XnZtKh51kuxUGetveL44PMwjmKHyz2",
  "key34": "3x1vc5kvk5Rm9ELu5zKagEtz4Qfth3sh4jvVJ9euNPreLbNw2vkguDS8wH5mvVFQB4J5Tz6ue7vdwEg8FWTWT3Lx",
  "key35": "4jcGoz5oLx2TdLhQL2EfSGhvcjAkNbrnVXZdKws9SyEaTy3x6q2yiP1XBg8wUv2ytH9vKYR5ChLdgMZs529LuFSo",
  "key36": "3cfiBsiR1CEH89SrhJye8Ki8vu3XLejxRieNY3534RvYrAtMVJt6mQgEy5Wg1akvKo1fQLGUdYq4TVDRKgP8EKcF",
  "key37": "3R4f2datiot89KgK8oiHxppqH97xw8AZuPk2CNw9agzShwA4M9TPpDFVm2exPmfzZAmXru9m3Z5Tr7xRf8x2iwzf",
  "key38": "4ukmNgUjDMpNnMTwxAPy3DLcyy7ZhR38D6nVBdzkKaMS586Fscq3c343KdSZHxAGvX9GcjwDsHykVGX5uoYkEoCS",
  "key39": "kGHtwVHt9g4fNfWgE4F1EQ74j1UwdTZwPD6Kppvc7TyF7R5pskFg8esFLb8MZ2YcSEJNKpzp6SzpU254DAn9tPe",
  "key40": "2PSxMg7jhnA7rTjMy2zUU3U3t1yrneq7TooWYXC8P7U1Bk54niyLvi9R1D2LG2wKGC9CMCYuQ5Wj8WZ16EjyxoDR",
  "key41": "3BSKPe2aTFtMzxT2DHrm1GrR6M4qn9x7W8qomd6YcB4KFkBhWZQ74aRjxyH2rvpv2sb5BcbaRWyMRDikGcyJxVpy",
  "key42": "2Du8jEzvAM7J6HkEdJ7at42GCisuv2zMxoskKi1kSpy3ozpza47kjcBCVcdwcCk3V7M4QpEdyYW4q4mZwemikQe9",
  "key43": "5UE5PKnx34Q52JBt6v54aA65gYytyXEY798CZDpXJmL44ZW7eCpL6WNyR8fKPQwBDjuUGu6YfRx5CCsP5cxQ1AVR"
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
