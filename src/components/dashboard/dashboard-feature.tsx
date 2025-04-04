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
    "4Z3SZWHxpdzNK8otmNYR1o5H2NpkPGxPztRguomi3y9Ykk9dixQF9KSscEruUCLARQcqaRLnVzR1Hqu8bdaw1Yga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wZf5cQpFWZpZXDduwz3gP3Vu65TPoLRij1BHJptGg6XNsnAgvsPhEXDC3iHHQXBwEo1tKuUBTxT4V16jEywQ97q",
  "key1": "4q7MEgf8W7tMx81oxjPwZmJz6AV1psBLf5fRCs8kzFqnTkeMXp7faMuUXCk2XiTYBXBNL3yQxVZBxv9mkBMwMWcS",
  "key2": "29XE3uNUxrzynV7Wfk2b26wiACFHPsdaUj7gfk4XTyUaY3bHQkrPTAFzXEDVYfYzxw4AhktrLfxxstrGt6f7XLja",
  "key3": "5QN8MVp12X5EifNKV1LqWyJv3bJa5gVUYCXmTp8Y4E2WDdNtYDvFrmB577XnKNpNSbSVEHCbkQPaqtMMuzJnTcMR",
  "key4": "2ERKQCxbL66Vtv2bTVCsNsK1GE1cghzNN5QQPoeybcuhZ1EqYwpd259J2cTQvs96Cns9CH9rz9zkWwyPbKWxFi5W",
  "key5": "2N9VJisJfKZr7JwPUdisMCUC4VePdPRZvQRGJpTv9QUsew2iFE9ucfaunL9dZTcezomHyyLofETQMcwUGffZQZUw",
  "key6": "29iyaigr7qx1MDwxEeXzT597AVoEDKjNEHvvP8MQsaXbUUvkjbYg6HyNcRb6WbvfbaJGj825avvhYudpm8fnKWDY",
  "key7": "3gVWK9WEN8nvJGgffiA8bVfujScjaFCgWZf4Dte2xM4BtePYBHuiR1QGwVUhHNnaAGzjGSGZkxSv4N5G2g9CfpYE",
  "key8": "CSvuSsLFXqCEgPGAkQ2R4UiNuxXs6vRJsMe4XdgpLMim8e2zVs4JNUgsACTSZRY1AxfNSjbfdecNvyWanY1Jn62",
  "key9": "5DECcUTaH3WRMursvCCZBcGC2R6SFHM1NqaUvTo127smU1rUkXi7hwn8STzuT5NJ8md7Dfcucjj7UN3bMavHrJrp",
  "key10": "5j5wyVSC2xA5c75BH1NCxbmFyQKd5g6KW2pCAuR4ayULbzn2hznbc8dH351S2vybW2JxhQXNEnyPEB785t3ik4UZ",
  "key11": "5jZA5Dc93YTgfuPf4nZEcdGMmWzHJSqkwB7yGsnHn3e6mF71GaQPtTvryapD6i7KGhzGbGpznJZuQa8YkLTi3dRe",
  "key12": "3EZbG8qzB7B9C38t5g3RNbaLm2RSYR4gveH54PXc6BqerRMHf8FtZYYp7YoewMm5bjGQjtHhQmb2zJr1im1QZgYR",
  "key13": "2BYh8TQTYcMyqPHs6q3jkWczZuYyGNETRcAzaerEFtcc89Kv9xVXSWnpW1EXJyMfdQ5BVkVcsRMcbFXr68bYBU3S",
  "key14": "3SkyWF8xXCXrTgmmeTcB9G9iLwoj1XVzknWJzrehtXSiJdDAGf2VsJUJrxRQxLKUV1eWeNGHdQWHVCgN7qWJnkfT",
  "key15": "3riNLhivsh5KwjUNw7KLCkDvjJwk6ERgKSvUPFZFAz9JZpuRBPrNZjQVxjjsJWeYMLeS6qYfN634qY64Mew7eo6F",
  "key16": "3vhyaZjBraZfCM26SJPqe8BXReTQTTv2sKx9DwYhoesxLrtYyJ4VB2h5YkyfaPVr6V8MGetP1DXvS2zZ4uQBDRQz",
  "key17": "4w5aa6y7GQNCjHaw1SdJA5mE1bC2Xd5Vv7D59t4x1WJvwg1oBayWX6E1WVyy1S8vjBNVJTccF2kd4G6GTddu2pf1",
  "key18": "4xZCuicKGfZX8kMBVbXgRJ6X129vqAvdcsXzVW4jVfnLifzmVjEoJP5WTTZZyR9a7mKxpY8nGfZkaCXNcJMbxkNy",
  "key19": "32xEwGm9EfST9XoXnb9AcWZ5bgwsuGv9kA8zk2trar4uAicqwXS3NvwfZyTcYfpZyKrtboGCCUwRHmBm6te8GjP6",
  "key20": "64yNed7gYBDCkWY2rBXH3SmHy4WMZYS4ys3rVkdSZ64Lhit9tdWpjT14HhQP9ax2qdtQvc5BDZdNUYxjyZBSn6hS",
  "key21": "3UfF2KRhYVKCfW2AZP5EEQA4QT3hL6tijcZrpyhzUTqwS67NKkf1LUjU7c1N47jXh897C3EimAMp1W8vJBozZNei",
  "key22": "5Co51b2ECyCwrS7PqiiQdyFe1MYLbUKwo4dd1bPphK7VTX6qX9zX63QeTpWCcLXmxPdoAr9kjseTNDtbZQW3qG4K",
  "key23": "5DZSK3cmdkZxXkTGLrRJ6keTP1A2P3UjAWkjXDd7t3V9GaRyToANWFou9hCfgmkudfeRR5HAnaz2zHVFLxaQNZZT",
  "key24": "FZKREn8Ac3cjMBgTDZZfDq344tNwV8HH44odnEdFQ7pSRFvxNqkQK6iJUvy72Udyamw9SqkYfgZWEpSTQnDB7fS",
  "key25": "cwZvoyYcunSombWTFNDd3BCJEAVLt33fzApbnUnAk2uMBB2yosgJMxkecUYeh666gBR8rQn1oJKQZExT8Qibz2g",
  "key26": "4qD6UrX3ML5T4dVLebyrgce17BcsqVSJwp9szZxgvz78SPS5qKXGKee41tTT3ZkjKitxcsDaWTWvzXukZPMFfYYQ",
  "key27": "54kBAZoiGd1PD5yFwx3bY7TyPoGyVNn5f26vnsDYFciojp1vF96H3WYgCbjsyFFBMKoWn21fdTDFP2avChkCQxzU",
  "key28": "2WWM3yZ3yM4JesJMWqjoMHVxPUcnG8DnkEmVUUbooEfi7i5AoSD58UL31j9R1chtpaiMWY5yRM1taiwBcNsrBXUJ",
  "key29": "458KBqY6pd4i3v4Nd72Qy1PGj9V7NtTj7q9brjNqUFvUUqJRn4UCdauvs4gCXN2tMRvUip9V42kykBUWxdTEPwgG",
  "key30": "49eKVULQegc1dSDwYoHMNBxTRFYLqm3KcvsbWZMo6A218SG5B4F7AN9DvPwXhufXrpMnjyAN8tXeQyAydr5XaZF3",
  "key31": "51VGXGi8kN5ZYwD59EicJ2KkA2jGVysxgX5FzhUYRSCvb1bGJKYpj3ko5H3pF5NcR7TobyzWz9vQJ277y4WJsDPf",
  "key32": "5frrxZyCbnEdXNJGrKqbE5DZeGvaLMzz54N6REdN67o6EdS47YYJskKPmekJy6w5a8vFj9PrQyiU413GJo9ZikaX",
  "key33": "MTWXLWTZ766HzAoLV77x8WqR7gx3PDvgTMFtDDF13n4bZg3fxjHzYX2VP7uT55EjZezzfM6VNxvZy5nU1hDEr5x"
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
