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
    "2hxRL2voZG2sEtVYFgNW9F7wwrFNYbtkhq8YC9Esbsz8j5SazogswSeNf9Y9wVHWGTh9SXDMNrMLALGa4jGJyB1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27VBMJ1a8KvNHes5X3Pkckm5KiUTGM64mUj5SmCHQyCSLGfodSyfTtC9LnacrRo3XMiTJZ6J5RZxjtAennfBNYW7",
  "key1": "3Bd137Lxjdw7nMwdYXjacL4cVMLpnUiex5o53fQuiRE2RUvoQg8rX6kK3jUwAMmmNXdgc5NenXDvwsvoJzjHP7RR",
  "key2": "3UuxdkJqSN1weFhBNqdcnp7bZQxAWUUezP1yVCxqG9Qrr8VXVmwLTvAb22dd5pmGyi3r4fQBokqhpFiELDTy4o5k",
  "key3": "3vMkHkhL5dpnkXEdeKmD1CMQAgikX4iuVgDRF98yFJVCF4VjLQx4KyLHNeVZyz6zYJfBE4Gjy6ki8yZAT9UfhBGd",
  "key4": "3AUZ26dA1gcwLridnh15NBDbQpNj8BEiMagP6wHCanUcVSAaeqvgopqVCvir2D6pMg2Zs1Pycbn6vE3YCe5DNXie",
  "key5": "3Jbxum54Z1HBz1G9k1LhN7TaPgEs2CiVd4xechLh6LAPB1iq4qfhH3xtJ1BbbYajZsBwJCXj4SDWzp9W6yikUCB",
  "key6": "2gMiany5yaLPYAvq2sChv1dNiZvJyvfAjXxEzDk7mo3TYm4u7VL2nKHcn6y7gi2TFRsTYAs3W3PxEKePFtsD3AAU",
  "key7": "2nRMcZ1VVUz7j3XSiwcwXiek4bWLZVVDXTWeAmptRvW1NkaMeo2Prnpsj8njXNDBvZY6THVWsjnHmdWMxYwE2cVK",
  "key8": "2P67hcJCX4rjHdczA7a6XyosVgJvmA9TxRYtUr5dgEX7EYiobHnACTtLqX6KS44EZ9xgBYa84PvAT3AYAzYpqfEL",
  "key9": "iB66x6jZqYJoh16EuqooChynhosMnzCAxxx5f4CmRzBnDTwkF6CqSPKz6Z8W77e9fcELe74ZzskiD6CKfZ8oLav",
  "key10": "wNiM6vypJMHQi1mhoL3Fx5wbw9hXLFoncDwqJPgYVDsfdfzurwKhd6VBFFiX1QwvundBanaseYwd6GbnijKHztA",
  "key11": "3JkE7LTEbAxEEQVMPzt8sQWkbBWNGQKoBTZKEbzKckPhGfFyaETkD1aBjug6b4xLRWFJGjKJDkDXGrm9okTQ1dkF",
  "key12": "3zs4pW1dtdnHaQSJvsVp8oLTE9im3shJzGVuVzDN6ZKsVXEw9jtMysSHhURiLKtD4SrwebLxDQXtGetDK5LEAUip",
  "key13": "46ZSUr2LaG5YDdJBGpMFyTgJYHUQjQeqa7s8cjPu91nQ56SWkm7SBnKsK5GBqsBTB9vk7K9h9syhGJULH7h9nHRp",
  "key14": "5pLQ4ZgBfLVtgvmd2dWY1mdaMzeZmpGs3nhXabLB9cTnBb2c3oECKbPtzWrUZ7tN8CZ3F21wRbgD7mcVtCnG4jup",
  "key15": "2FzRKQE2dnyKUz4zjRLfxmzUKB59PX9sME3nh2Rxi1azEoiS9FaqoddK4tTvvYqNQ8NiKY8MGM4EMFJsxjgne3gf",
  "key16": "2bGWFVDUtnGCo1hvwBsYe8nercknCD6JhwJKFTQrzGoBXwwd2NiJLam928nGPowB5saiufsaNudYooWN5JjNpd28",
  "key17": "raABJqsMrvuqsQUewc7qy9VnqW9J7MJJYQbFRxCkG75ufdVaxReqjnV15MPKCQEFxkuvqN3y9vzovWAd8XzWKRp",
  "key18": "5cxFD35BKSgxBpGgqwkHzoZ7Ekgb9oGYeV1DpkaLRrPgh7zkLZf8T5tJGvvUm8TYqeQWprFSu5QnnbEVeMHx9P5U",
  "key19": "5HCYuunwsjeXi4CLgQWhXtP1bpRu9oiL5FG7d5GrQh6uz6TNLx7q69hx2yBPoSpZD2pV3xZeG8RGGqRDVqwcPZ8W",
  "key20": "4f9MQZwm1i2e7aCJ82QetyZKiVgBTRhBCeHZPiB4knMxAaPHdp5FBjhDC47qV4Pxu3cKdxZm2QuftwqehtU8HCN5",
  "key21": "47pKfHrZ63aKsvkER8ETbduvtaDrLxGMHYm31HAFPRcVZAUjHHrxUVT7urxjKo8ibs9uwGAbjW1BdsWi1NyC5Rht",
  "key22": "42hEogTteoXtWbM7fy77QvEtqkRtrsiq8jcJFSjcg8izijUw23VeHVYNpRQ8YnnJRXRYB4Fef7anteuL7zqYPTxE",
  "key23": "3otd33knPZp3DPKXXK6rWTMCLgpwnJXicfBxALWjuzuKqZrP6DvSdCrbqpQi369JgLxZop8DBAgAUPvdi613RnYd",
  "key24": "Diwq3ihsNe5EhBmfyhb8ZHTSwKNGBmTrkaXs8nccm6eKgeBGtG48Zkf7PaDq6adPVRgwa4ds2GUNuCZGfsNDvfQ",
  "key25": "52DAZFZGzsZunhmakD8dL8mhaX9DqHRC9zpiUUkcTuVLuXC2bTQWQH7wJFwE5y6Yr3CTLZ37YhFDqLYMQ5ubUkWf",
  "key26": "5GaeMnx6j69gQvNWjk161YyogYNH3AQbMW7rQCcRDkPW5WwJge5EfV2fsMy1iVL7KmjAPdSVxWjL2DUNhS1UMfv2",
  "key27": "32WHFmjtuQrQRHnSsFZVRyphZzoJW39YomN8tCthqcpSvErToJDdYPAuJz6YCFkFg3jr1taJ4oUUiScNeGjxMko9",
  "key28": "2QCS3zC3AnaEQ2yJfGCyRGeUywF58KKgqN1b7prceQXosE2SMfN21nQJy6S4Att4FArTf956u5GKBPnfvLBGBpBs",
  "key29": "51GeZSgr7CA2HYFQbSSNbA5yyCmSrJqkqxxXwufDphENZEGJciWQB2Miw6HvZ4CiPBgAqcHULqPxFZGa9oWWn5h1",
  "key30": "hFGWS9ALtHpHygm3hq471beh7tffBctz6ShXAyxGHRCmzeATCUGeitkDiqqGh3kqTKtTQdLYYfvHDYpDbXnK2JY",
  "key31": "5sksh32f9Kgyv1G57w3anHmcq3tBMKd47spRAB24dFAVW4JdiVEwR8DGJLtKYNEAzggRZnCHRoMGj2giWJFGyyHy",
  "key32": "3hwsgFg4Pwy5HH45ewsFCti5XWD6sFhaQJ5n6R41ezqsaf7daD6EXiSXvgMR2YDUr42WMXii2BQnJuGViiS8AGh4",
  "key33": "3qA9JhD7LfsEvHXxReakDNtGRviJ2hDq2ndbk1mRy3Kb2jTe2ERrEVk882sd5VAWFgJoCxqGQKJHtLfddaVQ77Q",
  "key34": "3uJDnpyZ5T21Sq5gTSo5gRiL4LSvt2nqbVnohCp6Jpe8UvQPeRGK1THhwhkRcEiHoDUgmaWfTkx3hU79ABwE8pgR",
  "key35": "3zCMYGEGWGYqLUzxYB1bH7YCUpNt15rLqdm3mU9cq9X88TQ6S6dBFuHAce2dyMSeRVo8d3dfD72qzJhMqWFHPofh",
  "key36": "5KtEKFVdVnAwDWu5p3kvgep79BVie2qQGcSMPDrbCt5g2neEwm4xi3gPEMHKG5gNTmEU2JsxknhzGLyMTBLb1Thh",
  "key37": "4DQNBiTsbqMhg65vXnL7exbAwgJCVg7tch9eYxQRvoV2SAGSEYvbC7upiPuMxmsg8gGrfnzT2jVMB6kzw1Eb92Ha",
  "key38": "33KfdAudZ26cQmp6zNnJbv7oPRSj9V6ZYBk7wPFVaZssKHMUwEKfGFhwyK4ZZMR5VnXkpErfZ4sqxLoWJd7GQmWH",
  "key39": "2d92msCY6fKHR41EbSsct9RV182M2ELMMJeGxmHGeQ1dnsoviTxTsQPhPbp5ZztKpYxD6M3ZK91DzpCF5xCoLnRT",
  "key40": "5kpkQ7TxP6wDeThEcyFctKVdaytmoUSrZZ5zVH25sXMmejREaDvU249fePELLjjKwCjpo2PCpjdJxgk5G96vZ9uK",
  "key41": "2heJMntDUm24h7j1iciKujiA5r6PgNNLTnQYxEMnUKnwexJrqTvaSjjGefGAcgHcNh7tihbzCDifcEiGnsGT5xY7",
  "key42": "5yZdpdMgc2nu1g6b4jpxBMnxDM4Z5iaU7esPT13pJZ4d3xnBg6sdWE6qFnhgtEbfQN8FgdtkuN6ozPhmjB5ZvsVn"
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
