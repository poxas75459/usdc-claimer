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
    "MuPypBJhVqjKzEimsyKpZKuTusjry8QpAkPaJR7SVzXdMAnJcu5B4Es2J3yg7ga1ryWnQwqiAjCuaAQ4oq8CncS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CiFRC1LMbNvxU3M1x5R7wkpQjqcXdUZumH4MPqBJXVWoDn5VpCQqJvtZyx1tqkrJwsKjJz6bq9BDRyRHHJecv4",
  "key1": "W3LBnS39U9nwEBEAkD9R1tSmKP6kEPciwv2NsWsjscSdYVSm1iN5ikEhST4St2S9A2jBou7EJmUXTBxGQSADnDK",
  "key2": "5x2EG8jnVc2mJqVnxzQU34dg6rDaLAoAGhQxpACwtbwmWtQwnCwdhwADJSgxSbXi8xzQXZRuRwgcQU8FQejFnCh4",
  "key3": "4vx3jRRtPb5aH4K3CptscPaf5EMQkUTdCAjfUX26p3az8d1iABkK82jQVPT6PjxrfzVHxCyJzutrBipSWjrxAAWE",
  "key4": "4oEMzUqRcwrmPKeonff9mo1TBh2aAWeAax7o277YgZJVjGoLcrs2C16gS5MtnBReqGmvDUoFMW7hTzqpFKudgL8h",
  "key5": "38dNgy6Si6v65NEeg623HY4EjZDTkETxATeYwLKc8uAcGT8h5w4LNtMqSd9X7wsVVQGP5FpZZsnxFCoBzDAqVNKG",
  "key6": "2oFxkmJ5NWyYk857xkqPPzUJvx5QL9C3TPUYUPs8rAy43tw6M2MyRVk33sf78SkBD1znvp4CNJdWXey6Cxkc8VAN",
  "key7": "3GKfVuqh9Qw2SNtAD5TGTNinibdxen3WHywXcGLuVKYsQJLaSnU6SJT9j31Sb7n4P54q83AEv9Sgdky29dj6JRJ",
  "key8": "656dr6KnhnBJGFkAkGQnm59G9oBPd3MKRWDQT4vnDtBjtWCULdzvf5xxqbe7vcxiYGot4tPaNh7HLoMbSU4SxRkA",
  "key9": "vBADnw77ML8oRNYPTrazm9A9LFZQg4kryFpQrxodFsNRvDSCeoqTtw2ZK9qkjCRQSDwGrPw3pHrABZhyqYEyPcb",
  "key10": "4bncw1d439xF3nJxafmE7Wsd94r7JhgV6rKst76FzigDKYMvCFkyaxSpKHi3TGYeSpN6jwND68ALfzCzuuLFQXno",
  "key11": "hq6PagfW7qX3TweDXqBLi5HaTEWEEKpGphMWZamkUdWX7QL5ZfSKqgEzzc8Ua1HjZiLmR3Gpxki1fdFbNa5hGMR",
  "key12": "5dfgqtSx6HBVKhxJMS4BywEvCJnYJhhVoZZ2tzVaVyE4ZaDvKGCfBJMS8Bmb2whFvV7Lh2YQgSXc6wyCGCM5BpkX",
  "key13": "39on4beJ2HA5VZ2WkmoZFFmfaafykvqQq3xpY4hhvw4ijdTT8L8nmMJtr2GWjCRRDrd4pEwN9xfErZBcYy1zVfmA",
  "key14": "64UoxuVq7MwwuvA3jiqCHz3z4zaBX5gN5RsNd8PGRWwLQpcNpHMfdxxUWsxM9EaKbR8jXTVEEoW4p9qWVwd5YvBG",
  "key15": "bKoGEmHj3qhUNqDZiumWfs4xSRCRPXyxpYSQTMjXzkSEw5zLK26fnaWhFnr27u2Nm6w9tqT997gDHqu7fsoBtYV",
  "key16": "oko7PccF5h6LRhQPjveyUKYgSRDrcZ6sBEFFtqq65mda6hyuA77uef3XKvzJBN9xwXtTsygzBRMzJzGKccawR8g",
  "key17": "5f5dV85RBd5WGqzwpZrkznWUn5k2yovmDw4nj8gxmU9rogMqxsJWv4Houk1aRXK8bpxAF34qoo8KGxsBwRq5Xjpk",
  "key18": "Yv1cBey2u3nP6x94D2HSvGrQbVJyAHayMNi7kTC1S66EBnzK5Tzg6fC75At1KdxfiptUk6rGYVa9t7jLeHRPxp8",
  "key19": "bxvHuqMwxGpmuEazPZdUhws6JKwCVaaF7upTwgao4mzTqfjeWCp5ysLRF1W76tgNp1XBog2mVUW1EhfQUasfswc",
  "key20": "3rsAAG9bU9HFG7ktEQ3qyGkWL1V8wjcXpMo1agXGnw4fPMMJVAQuez2td474n7Vcmnm237CqtXHC9sRGavNUAGda",
  "key21": "3DpqjnCq16cHQtk7v5c7LP6zygY4VBp4QsJ8ZV49usRuzj57nf2MU7oFq7q5NdxSbubSwyXXcM6LmMeDvwcgTYqV",
  "key22": "3at9RgEMySJDU4PLWEKzkZQZGKtD4K9WAE8etA6qd9uBUKPhTEzq9UwoaocLw3VVEeUuDGMgvYqWGR8uEmgw5Tbz",
  "key23": "26zZuyUWSChJWJAdv3ofzmyK8Fz7FiKqikhb6TNpuruRA4dc2mVYnUAcwT5wDBGTRezT6uNf3wDvQnVdY3D5PMYb",
  "key24": "3ohBUJf7utPt85PY2iL7vMWgZLyPDhWBbzDKWZPotRW9wqbasGZD6Brm3X5j6NZ8RLYMkZvbNPA4ok1h78CUUdBY",
  "key25": "g13mQ5Y4JiKLnCkEdFbFy2FyLJLAekqempKSDM58YhngbS1t19qS5NFU2yj1b1KVW95NkGH43NDtaLaAzQhkPcm",
  "key26": "2SLzWcoZ8HAq9wF1yNHDUcBvZiKLpMjSD4Gc28nN9Nn33cLXYS99QVMpq7vniPpqh7AtZ3AsnHw2KX8SVZZ7NF3",
  "key27": "2hJiMqveczRpG5TzGTSGENHZNyb6Mpp58EHZT8y8xkjfcHAEbe8RSMEFuudBA7D9s6t34fuWnXsqZEZD3yMzHC1y",
  "key28": "SFt1bqDbwWsjg2Q3SJbckJzs9paFAi7zSNF4GXVBpYquEstovx5Zh6AnaAKTifrKvHoHH8UnGEbZh95r6yVwjQT",
  "key29": "484VraDuoGBR5j3QSfj9Kg5PFMspEt3CYmQDbW3N86tspTwcfxtHDEASTAL6G7CSTE22XBpWQCYisqAxjC3tJUnz",
  "key30": "FxuzWYSexoTCNEHQbW6x3BytshahMKFgN8PfxDz7ZCFUUzU34mx8TJ4gc5W6RNujxtD5tLQ2ManqdN41VcmfBUW"
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
