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
    "5wVb4eBkMPSbVMy7idukJzUThVxwgRnqrekaUJTSCNtmDfxr5tejGWYPargfvJzP4Xsgv46wPmq62WsUGVb9NRTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfdTSDgV5RyhrEMuc9ZXPvnQj4Zix6hHKgXBJP63MwskhWiPviuaRjwzd4YyJeeK7pomBRmNbjToP9pZnMt8Wi3",
  "key1": "4PiVNMurXnqG9LEEG2MncpCgpNwnoEj7Z44bP9mV3jZb8ukCKnDsj5wamf4ym3XTQTk1ftHCWXGd2YSm7DYvMA3P",
  "key2": "5mjzxho6vwdvqVLZ7NsvQjpF1KbBdaJbVXPrbEH1KXXjPK5GdHkEPnzt6yXEv4NhmUp2cLkE3dM982aaazbfdCYN",
  "key3": "RYsrx7AkKPV6WP28XrGvC3XLhqYTmiKFdNoLRaRRckFmrEwvFgZqGwi25vqf2ETbv5dNrRYc9h7zRi9ZkxfsXBF",
  "key4": "5vFWE1gzPdMk5TFkWUfyCaR8VvfLZV6CTnKs6mtBwt7zVHw5AiDzJshL3LisFfrpBesfCGEQdoAyuamRvxWmivoH",
  "key5": "4XcZKonYUqbfMeCoMHrDvj3VoEkCpkryUBfhdrGisBTTH68co68Q9fQ8NP736cBWbPty8i7B6quUcJaVxigaaFb7",
  "key6": "4L2NnqJFihsHqM6E6J28aixa75LJdiEP9RhCQxM4uWboDcoFbK2DjCxV58VJ4owgbZ1qiyfsULhQ9HRTNaEs85C5",
  "key7": "4EzPnVXznu8fU1BUvMKaWuW3X7xkApnUfueH8uUoSCWPeez2tTP3yC7Er2vD5Z4qYzHVqGTR6zWCWr8M4ioS87nU",
  "key8": "4pCeJ24TgyJoPeYmAYRVy7nm79qX4Ht5h6j1u1NjLfqrne7pX7YmkT9kkw3vCdnptNdLwgZTiPeYXa3tkUpKBDDx",
  "key9": "PKp9fzxZo49qtcHt1jdBD5Yhf2mgg6L2wosysM4NyKJnZf4kFMuahcjM7Dk7UpN5EQ3vhNmFqBV86pmajVxn4L1",
  "key10": "2bt5kZPmZQ83cYanqi9e7j9ehbu2nww8texTcLvvDhRTymjwJZQYfyXnsG527vDeJm6948Vewis7ipXuG8NovCfo",
  "key11": "4d6MfS6gjVpcPbeX42hLLcbs7q32THgkzVS2xpwg8XZp6ARozHYtErkT3ie66QHoJodWu9edBn4SjFVXTWshfMmk",
  "key12": "YtzGAAUhhQXe9VvEJFkyzGEtw7mPUDLw6JdYoRfJW5GLirSUUhioAz8AJeEaT6PG3hMB59b837XzC82gymSZBrS",
  "key13": "3rCwRrZueCmR7VR1ZtNuNYMdm9X1fFiwsNoroa1bCTLYYaLCZQSezVqBvxkWWiLHWh3H6UbKvr17CGt38MKGbznA",
  "key14": "Af2oJywxeyiKzA7cchc7eSNmgLiER3Sg7TqgmwZKQVM7VWapgsc64H1g2QmYG32GWY6HDhUy7aEnjKcxxEbU2i6",
  "key15": "2PgCT5yptE5nAt2qEnscuPSrEq8VcnLVNryhy6BpD5q4MamT2u1CfaL6XDnuXKXa4cxvu4dKiZUHbFn7T7bPAS5G",
  "key16": "Z6yxsWjAXD1pvjb8ebgdFf6sBhQaU8arVtQaR1XrmT6DiNoR1oYaiosmVVSZ2bnssTHzUmqrpcjKjP4TWC1wAVr",
  "key17": "4kpGg6Z5327HzsFjNkv1LcM8dbJNvzGpokTdtodEavnoA7MrzBB4Wyd8nAbrCYSSYsokpdHZe6AEx28GcSJSbi68",
  "key18": "2AKBekuQ5oa9HXRwjWnRHARCk89euDGsWcMYvkmYuDUF8xbWB44xzEruk8i5nafbBjq1dWroHqVLnosAo4RM3dcc",
  "key19": "4h3iWrHCyn4pGRt4wWVAmg3kkEAjp8t47d5262fPq5i4X4GrozD6BStvRDUZ3m4M4aPz5Sqfwvc5uGcK1KupdH9z",
  "key20": "2QD5qD62pQJo3W1RG7LuSVe4FzHdvkboqD5v6phnKgWhZWoXmWdRVMyaKQUMCJwEjsbUhmc13hmKiJxJco9eYgkW",
  "key21": "5REcu4LX442Sf3EHgYzWVVqYQHVBr7BvjUWq5eZJTnjGV4FG3ExV2ZKrU9iUGYLYb7XQeKtZDUeNFoJY2X1xPsLc",
  "key22": "yt46puLrVVgwSDfUyqu44Nh3g4Doiae8d1KZjfMNCRTCC6mBzmHyf11Xitvk5SBAmCd4PEceCaZKLUfPMdBMRNL",
  "key23": "epH18qFNSaQQngKa1amtdxvSqaQJAV83kjtpKFC6Dxp9uYyo9ubMmZmmdS9GWcZtQLFDZgap1jxf6XEfZ5j4TRn",
  "key24": "4aTY1Eg6KroiG1riWDGVTLf1xLQpiq5enB59YW8a9HyHwmS8YbT3dw5g4LmeS6DNiRXCkM1QVfuBPuMebHmZfJfh",
  "key25": "5oH2gWSQevzeeMTLhnLvhYCLNuUGiFvQvtKcRQsq9bNjAEJBiGDbCuS35sWugQqrycpTyGxcSwE9H6mSMQnDPXLe",
  "key26": "469k9a7Y8t21i9Ko6JrPoeHRjDU3PnLjGsx4pDhka1rLB75K7zaGo1EGvEsCZRXNawpJrjPmgbGsrQzbrQyA7V6z",
  "key27": "o2GacDjtZM42bKHvdFTqDkwbReFGQkufZBhNHBq9zJTaaXQGVz9jXRPrKnk7qbY4jyi79j59V5wDYqVQjN7KZQc",
  "key28": "3hXcduC4K5QFwPEgXWdDQJCmk7RwRWKd2ZJoU2wAkYMcztFt1S8pzC3AXU5DZJ3nRB2pi4dv8aBBQA61Db4j5etF",
  "key29": "Wydisqc5CmUAbLRMMsjzvCRJLCmieXBLkVY5C17Dsw9acvzFJtvQ6qsUUd7i8yCsxGBCpKgCqjq3DtaqwSkxJCV",
  "key30": "31TbaW6RHw9wXst4g6uc8KqhieW7gZnosBZyp4RUzLBxYF79wRn7Eb8KZBZVW6CGgsSCSmmJqgx8xnaTxTPnXro3"
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
