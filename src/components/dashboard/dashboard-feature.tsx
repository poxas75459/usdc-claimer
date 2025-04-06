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
    "2jcSCNLjSGLLArwAcZLs8yj5Zqc7879r15jG3WmfWy53Wc5yv6PzCPgLARUQESUEsV2xGhDBqM9PHA7baDKjjVwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKGWKdffFJh4QMXZchZ4ScJreWC71cW9GcYwuefvrfZTPkgyNQQdnK2SosRBrrTxHGPQ9iKR4porwj4jZ9w33t8",
  "key1": "4gmqj3YxKxWso7u2PrHVqjRDH8VeiUqqh3jc314LXHHoaH7Z3rThE4ao1BMAx12Hw4KTg9ibo9asTBG2iLM3CEBX",
  "key2": "5m1nbwRMwMztrUp2n3K2pKgEJrAqn4Hgm4CkTtdmFfADThaZriaauwPo8zTaVUqiT7S1vC8ob39Zq9wtsC4WaGWy",
  "key3": "x6i8cyELKchP4exW8CWSeo1fk2pcCML4QokSLpvd945sM4b91Abwv3ZkMFRH2Y2akUhhgUqLfzURD927XFxQvm1",
  "key4": "5fxeusen438Z9zbzmwTGhojW394sbiioaJoiwUhE9tXkzAUH4h5FbXR6L8Me11tsNtM5itwuxcnsh1cs6geLcvW",
  "key5": "qjyZxrroo6zz7xJodiPbsAdjRcyMXmexWXYpv98ejhUqFFJjEmd5JS38jMwDPTbTLfkQ8xqZJTbKB2NT4RmeDy6",
  "key6": "2AEQVZxcFkhYc99wmMsvLFrJSJtd77fZA9ZHFPqYFRvHXjJuseHhD4BvjNzTkvpu3xTqnPpn8qPC1YCAGSGgUhFu",
  "key7": "3wGvuAP78ufT8Ka6pFdpsG2Q2KBvJjgjAmSYwLSqzRTYi5CNH982fLhWC9HW4JRcRY3QtaccVmE31fH7fji3yxPz",
  "key8": "2macwUjUhiwbDhj5Sff8UwE2jUBxPe5bhE5CKeLHN5GxzVMhc8Nmu4fZ1YFizvdjJV7c6prdZoSL95AzCQ74j7zv",
  "key9": "22xaLRS24qD6d2uwac31vKQcPqVKWJzEi2FxcePHk3T5xijw9LWfhHGtj23CNKTAxrJ37cZcpfPhWr8YRJNi3P5G",
  "key10": "3kxPtCUpn85c5LxeJ1LC6tDPoFGCeKNVvQJoBYd8oi3KqYHUzEmmpCjw7n4N5HeJZR7QNk81X8hkMLdPsWR4P7P6",
  "key11": "pDDaBVHnvo1uo75gASTeFtMJnJzsxLPfC3bygLQN6hTT2eYzUDzg5hC9g3ts8KDx2wciaQQeqnnQGEye6MiKF78",
  "key12": "3m5FLB8zGQvuSmSJxQVWEhAfzguMiG89ywNURDofdxC6c1Mb12YeiVoKS4t3XrFSkTaJs5Uo2zBdgZ9BvFykaiMi",
  "key13": "2oAcK4au22LjgtxPoSvke6j3c6uWgv4eBBYtdDZBknnNhSwZg5ocjdMCrWz9bTsdZNqtognHZWcCjWiv7VswyFTD",
  "key14": "oJvrEsyeesdLF1EUF3ipk4bwhykQZYK4seHCBvwqBi9fuQKQXhNd8HRnVb5d9B198U3KfDvBbqDQQXCT31xBvGP",
  "key15": "xyXRkMPRvHBWc754xkbboZdYWkrcNHtN6XwgpPFnrzVWhjAnUCCN7dGLPFchyLyAKg85qzJtqp1A7JRMh3jgq8x",
  "key16": "5n7eaKHghdi9dZGJfLkqSRoAYHDqocxdK5sgcVG5WAXsou7fErPVK5FDeiPLzEgNbpxqEvN3sKhCtuMZjAKMgPHY",
  "key17": "5AKow49hi38Eew2iSeeGBSsRQEK26mZwYtwhNCVrmmZZJw53EWrwzodi8KknU6iRZChqusnw3DNNX7uhUxVew9RX",
  "key18": "5YqVbK2QMk5w2e2FMcUmyVGSBiW5DyKSLatDfEXKLAWUptnrXQjnTr1K2DbNEe7nbKpPpaVMXNg75Wp7A99g1XNU",
  "key19": "5cjVYdm28etNJ76r7B7jGFWWGXjr1JKULp56TeREB878B5MD2848upyivfZQfJq6xBeNu8N8ajDYSytY1QJgoVYE",
  "key20": "5HSowJ2rSaJCLKoZ9x84Y8oG6z3Sb4UeZcMsyNtTfvc6Fu45rGZjGcMYjhqKj3oeut3UW6k8qATj3jYu9PMTKwZ5",
  "key21": "2NSZdhU9psdnkuPM7cvRhmmA9GWYu49EFjfFGSJDnc1r4KgGTq6snZBA1KFKN5ncQutKNsKsHsrn8vuNR8mmh48R",
  "key22": "4gkMvfNE7WFgTCg2FHzWDFwmaz4MvJYcBGLKdy9sxEdvnZUePg9uZEAYqM6RThUrkF5wUgXLLLS4QKpxsLe4fZCE",
  "key23": "389WXjNsjrwDrro2KVm4VzB6TXDfQeBdFvmW1VGVCsTLEY6gBvZugNu5R3Jv3ZkzmfwTJuBY6gLUousfz8fvwPmj",
  "key24": "3idBHd7YGjWRK1JdEp1TmLNcFbZ5NUHiy4LjCKXrN2Ak2XtSjNzY2aouV6d5pbJojRU4zYLKT9PUS5hU9kBP56uT",
  "key25": "5dQxc4ADbm43pdvHa1mzmXU5ChonA2qStigPuFkKtef7mkWDMUGrSpfL4yVdm95W3WBfQ9xBf5HUxWZSiCf2czdq",
  "key26": "3dRog32RJN61w48qox1gqyt4rxAA21dYSWr4ngJcwTCrdHKgaSCtRCDrV8F2SK8USkgSrXUryN6FMWYatNXBSUgP",
  "key27": "2ZRrRriUmSZx8zExZD1HZZxBEisQovX8bNWhMjvgtdURvjNZ4mzEYkD5kUESXBYwMK8xNzYGd4FRSFNaEo6k4LPx",
  "key28": "2LZtP3YNJmEZ2oE73jQPNp479jxpXMFErHwJcnVReEPdcoAW9XibAMJcZED7ae1nf4mXCgNZybns4xWafDPEJVCb",
  "key29": "5xFstDUU2GgAAeX9ej7QLjfxA1i1nzGWWPFVnn1iECeJHrZ2iKrifoeopbb7z1k33Mh5yuKATvYgFjAgGmfQHovA",
  "key30": "4y5RddiQ9tvaj7k5Vso414LasBAjyrZ9zN4pCYj82W8VKvBybSNf5rzbk4ftRY7YBLsM7XUzxg76DSrWo69MSYjf"
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
