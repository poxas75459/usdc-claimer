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
    "2kU7pDPYKLCV621bJEfSra3jGmwUJHJMQwsnkm31mm9Gnxek2gh2mDoy4B3wRpeGJpBGnP7cDjpNWNwjupmoPDyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21idqVigViHr5QhW6iXHjwDrBU6z1EazCzpdSjscLReyAsMLMyKCX8gLLjGbogwmRQ6nxNvLtkCoFQV8hDKqjxWm",
  "key1": "5Avd4FxpvT4gzffsCBmLRwRJJDngWVoEPbuRzkeWWxKAo7XUB1aSHLEMGbyz13YKFWUtKNtuQiEWKUoJqVHh9FNL",
  "key2": "44xE4bGohmaaN8Z1HxdcKH1QvQxJHv3iVAoe1XSUBRiBBiszQqVt5k9fXgqpGGRPjHNJ6K9WUL9Jfwnpx1kXQKDU",
  "key3": "2JCM7TGqTRYu5W453X6wTPNisBKUx8vtf4qbshnoWS579ZHtvE5tXWDnUWz44DXTnjWqhdAnvdxcKrcRVSVMTgNm",
  "key4": "2grEA8vYPNhffPxGG3FWLKHoKvjRdy5jmJ9CF6eV2nxkt2W8sMejoXGaaZubArwKpHMr6Ji7sb8T7rZie4MWd9WF",
  "key5": "oWVHnrz8jPFDh6yXTdoieLvCm9rz6HdQXC4zAWJjuKF8weY2k7GUfcCZbA5Jq7KbdK2tpDWwbcTHf3KYzno9vfi",
  "key6": "63J4wWPHcSa2kP93k4my1brXbSue6kwtHeDLar5TPTFh5vvqNTtFsiDc1Z6a5eXECP8PqCyCf3WkdHESGMZ2N4aJ",
  "key7": "4Q7c8NguGZ4c2rfKg6D7pCWtb8ZWXhyDFz2MJqCK4Sd3Gysx42Kf4kPnKWHy4gFuebFkAG8jbxaocEoYkz46GZPn",
  "key8": "65jLNcKdRwS5LTKqHQUp58pzwLC4kbaibQFg4mPDidRVGWQC8pFLmBx2kHLuJrBWwQocJUiPEhsxE3MkUcqZj2na",
  "key9": "2de7sCBS6JSYtfaoH1m1tamo8Tfa2SevwNwyML645zWPX7M2JXK6Ptmqh5vjTZ5bFcUfLerLSFnK7AGsQm2Yfjny",
  "key10": "42PFvsAKUc5TvLhegAJLQiRgvbGyoE4ncbQurkCS3F249DCMkV8KD6siKmzycK3dUum98hHfwXzq3iY4spZHWD28",
  "key11": "2ZiJZQSqF8jzNCmftZuY3HdZUeYHjtTK69vt3KGQNRo16aEBaUAnBHAXLiaKCkqbbad7tWfCJYX2ACK9yfmNpRdk",
  "key12": "3h91NUn7RWNZvdQdqxDUCjNJgsrb8fBbzpEYfrmrCSqZTM78aVMv7ciZhkNmhq7PE1zTh9G5FhiKmeJLop6cF8GH",
  "key13": "a8Z1nwdKXsAkpjJmoiUdU6HStmfF6ZGNNKvfYtRbvtbgvhcRVnjSKUdAzn4uG2JawFppyQVqZXZkmNyJVrctuq7",
  "key14": "zZDZay3EppwrYe56BTyjt84ryXuyGevgxr29AH3emjGsWN8E8LPLPnGRXqTz28JRS5P71BCb6JH2mX9ShA2YTGM",
  "key15": "Wki9A1rxsY7vMXbHwebRFEfU7M9VVZLU15kpFmgo3vQHasZtAzCkwiph9dijbc3mXVBEuWEecjeMmrDwgoA5JWY",
  "key16": "5p7v6mPJE1dJW1embLCfNSi4Mz9HtRgwgohr9iNKXZKS2STWpe2bqu5GLU7un1WskqQtDkwvYePKW76JacKVQPuD",
  "key17": "3spdbwzgpJjeGQ1wsRy8gh3337oY93Nu7MdDhgwxwrAJEZnEeMET1dN6ntQFFXK6HYcrWSNJpyTw8cSAup2XH6WQ",
  "key18": "2eVr85QTAm6RAt3DRXR5S6s4ESv5iArUizXf5QWWrU9QsvT4Loia6beLWQ1m4vi3mcRSFZsvgm3za5ozE8sb6N73",
  "key19": "DVL8hFdJeESpC9xb6MBvZ3GogfCmPyNCmbUgUPFMhQgCD4eMoM8ZeuK5jJmusWnt4gYSYy4tC4VVauevyM1pJ3u",
  "key20": "3cSsfrQJxPAQm77pxfQvhPV3sYZck6Kh5pcQgch88a7F9CqYUT69sLnTivRk2PPjoiJ4598ySVp4y7gqwHrAzH1q",
  "key21": "7Zr2xZiEqyntr28TH3YPYvcrpGC34JrUD7tjzLTuPmash29q4J3RGsSM3SPJX1uBT5Y8j4cFeMHPuvvmdFjwdvr",
  "key22": "63Kqiu3g39zNb3TaoEpHmLDVy1ZNDh6ioJx2jZbKLSDMPjjYgvjaCQtYQkvRVsrKBwuYFgDM39qUS8qSHMcno3QS",
  "key23": "2heJwTk1bpaVhi6i7xkrdEV6UKqPSE7vCSqoTJXK9xjDneczNj62yvgHwZ8MJH7QYsZMcVHr6bmB9xCPFPUVcGVe",
  "key24": "616Lbe76ZJ1bN4GqYd7ZiM2anhaxfUcg83N5cqwgqetWxnsKy5Xn6MhP1C4oWNx4tQbGjQU8ER4wnHo9DWjJ6GKA",
  "key25": "2JUp6H9kL7cPY8yJkFKnBJ6roDZzjrhxBttpmpQP2f7CzCeLbHAoXMiSfCdSg6Bfc82B1F935VoikMNcjgJFY5Hu",
  "key26": "waZcVZQZrBKetBavj13xKYLXpfjQCP3ujBFCtZ2YH15y8Rnx7oFD6fnt842QXuEKckMMAsUrVw9G8s8NdGczDdz",
  "key27": "64KPdS1htSDwVaxTXJZMxcyyWbWwoGU6A7Bom9STU3KMdnN1mCpqf9KxxP3HnZ64mobNxjMmKnsYFKdkALKP523e",
  "key28": "MaqvGfKjYqU1Jr9Vjh27i81rfrhFsbcHem5RqcXKkKDpaQtqJf6Q2Ufxdi79H3xnfc4h7rVm9W198N5x1A4BEGL",
  "key29": "4UxwY5nyQPkdhAZrdJjdBrfdiK3riAgJgW65ULBnKQEhn5ctAFrkb7ACreGTD8cEmuLKf7oP3XhUi9iC9iZoc6yW",
  "key30": "3jNrJ3KjWUy34W4MCtJbfBF8mgzKAwPGCtYN1bE9AgAneAsihV8Y7sCc8jtqojdDXwfLq4mqj1xXfU6EUnradxy9"
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
