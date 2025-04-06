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
    "Htn3Gz4boECZGz1B4Q6kpCW3MScfoAmtF5Hi1SkAjCGGWm5sBxzxACTK6LmQ7Cb9qi9jt6raxfE5JVWTypg5YVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XhctfcievafJnVfQh3dVJXVcVEXUsV1c9q4P9ZpxMXywqfJBZSrBzD4BbVvuovshokrVGPbw2G3wH4PWMW98Vs",
  "key1": "2ZPdzsuLN5EFCKhbRAbmadsd5beyXPyPZhijKPrauvjEWzWaXdFfPhbeRwtVy8tkaAXKNti8h86u5idWa7FAU7Uk",
  "key2": "65gvyEfyU9UujZfP3uyi1ixgzZMqffBHjAJuT1f4h9DRZscCe3XdMHQGbnFx7VEPDqp2Y6bXyPuUz1NZKLsQLR6u",
  "key3": "4dJs43e6G9CCj3u8q7YE4VEdHcBtvkztELoA3QWxuvBJ765mgH85JZX2BZCxF7sKEyX4oLmr3pbcNbFdDAhRPk7T",
  "key4": "54WQ5vPFu4K2y3sNoDRMwi6vSHT5Ca5ed1kjPQ1qsp1EPyc5Lfz41d8VVrqcr4FvXDkecsmmnv7r7y6nKAWU228m",
  "key5": "4UuSfmpekLEGFMVNV9cCCuN4XBn4NK5UugceuAsdN9ingXe9cLAAwD15PdhhnNgwjKFXHFiMhnvNvqidLUg1MTn1",
  "key6": "4YAjJ9xhctSq6HexUZ7WaUohW7USzkWtjZZiCa9APEKtgeNsHpsKTHnPz2zaVxTYssbnztMjyYQbJV6HC5PXa8ow",
  "key7": "Mkhtj98r8Z5f1APQeRd89TLuujouRJuR4EDtVFJj1D4HAuYPjKH9qPFxXmxbnRtvnNukertoxUwvTs5jHyNjquC",
  "key8": "XooP6MoRRdDKT1RyV4snvTqFqRxqgCZkoCJT2PfrSzTKcWMtNiSqJaGGCkZQrPWz5WnReoLenxy6vcmympByRQM",
  "key9": "5VKGJSU4rBJGktsNsuAfHuh9MNZVhHGA7i7Sw9TvwUq9ym47Bw4Gbfhr7XPoLpfNxs8c8myRBXguJ5SuWTcYKUDn",
  "key10": "5z1SVRfGCwz9YSFHyiLfFuQcR4jAtnrnxn3er4zWWRoFicZGW7EJSjFSmobyTgZ4zrwHmiQiiLyJSzbYNKxdwJmg",
  "key11": "kdDcWbRJCekWb3bC8YDdTgaSAfAKv3ktRi4WGFtajSDoWhruo3woX1YRfc5sECmi4B9AaAH8qw5qY9EyZQAFguZ",
  "key12": "7D8dmuWovPyrz2kDtntUyhnuyDwPgwZFXEtQDFLwD3Q1M86exDqMF9qDbjCtWg3i86ZuPzpuADUjFYuxunjwRHM",
  "key13": "4kVcHRHz11CUHhLwKscBT1gG4RVn8qct3AFZQr6hvZ2GRqn39meGJR4kYXR2vbf2yRPoWU4qpMyF4JD9232HYNbw",
  "key14": "52r5xXJVRLATGZEqURhagykgqNS6S4UqqUTJqg59f2a1g5XQfmM5DjXitG7xYSaGu9qq7cx4457gJ5Z7Ztx3ThFw",
  "key15": "55E9L37RNMRaz4jWDNJBkeUQEvjjnZAVSfx49VSiQL3FyCdsMroA8HdWpQuvT9SfYQ9TkxrpSca2aD8hXqVEPVnm",
  "key16": "4epKLaTVrcdXvBR1oRR1cmSFVQLb3FZB5CGxoXWFqFGws2q7nN43Sb7iPoRLyXdTAcbS6STjSYrzxGQnHkX1GHSK",
  "key17": "3qeYcRroboNYinUo2HLXUFAvPqTwz5DWTqDtvvJ3o6ZjibgMWdAxEriJmyMoB4YLs5BvdhiPkxDhXAQcfdQrEhab",
  "key18": "2HMeKWkTFvBoBeniRPtT9QDXwuryBif4UD7i7rwy8XEycDR6nLxxm9WPswUd9vbDgbwR4Z5RWqPFogJPpi21wJ9P",
  "key19": "Td34P6Ug1jG6RtVkHvSRUw7v2fn8hjLubend6FYPr7k53RLVFM45o2rT4z1dae1j3ff4JyXrNXeKKHX8ZZ8aEeJ",
  "key20": "21qK7WX7UQ9iNVnNLfHFRdrUVAmA37HmfXwcbh8DBWd1KxBm53M5eUXdgYCAtZc5gEjWsFyMCZ5MKtugr5jCribi",
  "key21": "355mbHWt73rUSdr9wCmbEqjDQEaAG1TMnTzypWCGHiCcifDWbSTfHRndLzBYhWbjXYTs3sLbHMtdJ6dr52Kbh5sc",
  "key22": "4A9Qw7gQ32yifxg93jo8yU1ANtfc5QidN3y2KHW2LXdgzXryieoQRVJTXjo77UrqNjxRjDgrD3kFpVFSt2iEjPVA",
  "key23": "21ugoCjKXQ2gPLBJS64xHDbCyoB1HHi5v6uyogKzuMh1D1CSvJkYLQmKN8wsLLd9b62TgEGav7jczHSrFJnKXVdb",
  "key24": "5eb4Y5tCvon9MdhYgEwMz3JqsvRE6BFNyorvKe6JwJr4NaTSqnZzJHA7pdnzf2sQxn8hxsXBeTMFxdbdak2ZKdoR",
  "key25": "37Z6DzSLVAtakX2nFo5C8dFiAvngxHDrLAKfaMUPJemVYpvcC5kBABCcYxQFwh4ZxBPAH6cNEiSmFcnaTsE2FF7M",
  "key26": "5sGwvU9wjC8BqUqYzwQWbxJyticiifVtKSvQcQk8T9kv1diibpqSZQALrMc5xDKd9Y12nkxWhvgjGjr9L5fypcQh",
  "key27": "2W5Th2wuR5btUnvKT2wKwWP3CfvDWmc485KDWSBCJjYbkkufpJtFCgtdtWjUn8eRDL9yQAVX1y2PTpMHG4SmFUDx",
  "key28": "2W5knSnkWGWuzW2iWs7ApgBUNjbXQigYNHTmp4jLW6vpD8kNGW5CYkcsAdGgZLSWPLL1bEgKX8epG8S3Xftxh5Hx"
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
