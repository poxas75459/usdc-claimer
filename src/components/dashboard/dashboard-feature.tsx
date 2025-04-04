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
    "3XHDXYRpGbzcim1Vaj1a1DKLKrMQz6et6x94acX7xqTCGAu7mTbubD1DWqD25kFt7S86Q2oA7iC9uF4dLRiwN6LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QopwDX4Dc5Ph6gMhEzbfmjn2tHW36GrLrVHuG5P3XpRJYHZhmouWSsYDmqLAzRchFLh8Yq8CMUDP3MShxbpX79o",
  "key1": "5bJEVmAnfYF7pgonEK475s2MKrkgdadAwZq7rbrQmhWX2hv2Q73iZKpSpmzgCtkiSreVgj47ot3MMaCiZzRSB9gT",
  "key2": "4txAM5F7E5yb9c3jytzGYGVRrvtD9tYPAGh3n7Ao6PwqmZbpdB9A3uEMpwJLc7T94YqADP56wLgDGqy7gK2p4JJd",
  "key3": "nKhyHiBRPxAhaKF77swsB3ZYocNyzWfhqDurtLWuy7kRHCS4vEs733hC8pQkozBiBD4cSGQfpm2ibLyfCM7DNJb",
  "key4": "2JENSCwhSyJF8x6cwUDtQHtE8mdbswqAcdgEPiZXbB42izBtg6bCFrMyT646HV4U5JWhh9wistWGeEKnyTLuhDT3",
  "key5": "goqZxqoPSNmPe7gUQk7S3wf1kzhHZFx3YcLxpccg3uVKTSwpgRhTuZAzFgzTGP4FFe4z9Xu7hmr63S2cjpDcGJM",
  "key6": "4FHFsidfAmR5RxNqr3pp1awNBVDBHJFBjMhttpPmy6vGXRZsWpmbZSsSsav4KuCchHET3LZDV9g91r9uGsG3xttZ",
  "key7": "36tMjT3PUeEZ3nQRZhZd3YZDyPEzo72SKbmJApBQbQizgwGWSrNberYzwHJ2B7jSZkFrACxcQvuNLjoZYD5CudNF",
  "key8": "23fvTtoHWL9gV8y1nEfzZ4nqVAj7icXJyEFR3kue9fiAFYb3bmtdLre5sxpTKz7gLwmc7jmgMBfK5aY27PtH8SE8",
  "key9": "5PDKzPTUptbsoGeTZt8TUksW8vuUW46t1QuoWkRdS1ibvAPyJL7AiAbxS2CF1Zzxxkj1jcERnuWtaswYyXLixNeL",
  "key10": "5ru2q6mgKCSG2HBMJ3G1FjN6qhnsLqr6PucjUo11HwkBgCHNtfCv6zVFCYFAfSsikuTso2XVHQzxPUs2kBxCXH6q",
  "key11": "36u8VReZr7m9JCnUqXTGckYMMKZrHMduTidamRYx7njiSGbgoigHjq47ACGG6QH8WDAzTRHW96o3RaPAQykvpBz4",
  "key12": "2BiXtxeVMv1wMV5qpzxPHZN4WRAtrjfFBLNGy4PDW5EKvqwL61PoiHdguiXh53B8gCNxA5qv5C3N5QshDGPd4FAE",
  "key13": "5DUrqzY1E1RxpecAuj3Rd4RLN9EFDSFJHHutFfFL2uf22ycvHjwF4M8sFMsx1Mm9vDJmjKR57tkuWyQMmUsV1N5f",
  "key14": "3h7SetWwJscC9PysHLdKfL275QiPznqrFC75APK9wdbMN4n8AuJAHaeNoVYDuTiDzgpqTLqaB4LZK5CzWKx8vZFg",
  "key15": "4hsAPsfMprnr9BHtYLyT6WoenPMQjVPkGZa1v9FiLcWHBVDTHBNcyBomA3UaY5EnQn4HfSqLmqNwxFq18gXXZpqn",
  "key16": "2Fyzq95jzEyVSeGSG7kdBnJxoy5vTRJ1VnGYp5zUdVWQBzwKjaQcJ17qhikC3RoZ7DWyrqXQn2ETzPWDHarNYoXX",
  "key17": "5iBMrsZ2BwU6V3snu1tqxfedGMuMiw8Mw8BMfVSVhr9r1zW57yZje4ituWufNtFZTMc1f35XGzHpQdPuvL5B1w1C",
  "key18": "35nVngNUg65usRmRJJ8hjwczAKinAxXvPX3oD9ib551GLaQN97GeDPqg5senPNbX6krt8J148kLTSEXMnHkZ7WoW",
  "key19": "86FMcYuuyiLVJNh8wh5jQ8qacWtY4iPafvz5TsmXotdLo6LXJ5YGVHbTEk2ZBmwmGhxwmCYbeqgXxmzWkkPJZL2",
  "key20": "3XWjvfTw87XQt5kUkDuQWcWyjCEZi5bMoL9Bmnr3goZ7KnZFtm3qWyZ5yH433NcSJKS5AaL6Faxc8HzZiMZy3DWo",
  "key21": "4fUHFe8n27QnWjfvhbU4pDhNeBteKGFfcomNSeCPuk7xcH8Cc7Zp2kr8Lq6ujh7LQsUSTdSLKhk9RtHqWY9gKSwV",
  "key22": "4J1e2aM2RUjaPsRFQbEPHtAZnzvUabeKV7xAfQrhMtwLxtYTQYH8E3yNmgHkH2UgRjb49UEoLpkXmTQPJHPPxrwm",
  "key23": "c8TvhHs9p364gb7LXN2fdci7qUGXSHqCwYQMrcnH13MzWhVVBeuAC52CYnnnJGkbKA4tUD8mnSrgbn7z323w1yL",
  "key24": "56JiWX8nn8SLeQhb9iB98pqLuZo8BJSsC7uvtCbb6vR5CMd7uHFYKxVqRRtqK7umo3hj6nYhfzg2kutD3tJNKsA5",
  "key25": "4KGrqS8hY5UiQhriF98wmsfYHg7d5QqD7c2r4ccDKwvGnK9nUpT2k6pYgkhi7CoHL8HKmL1tepFoCbnsDCsdWAw5",
  "key26": "3K5LxF1BvmWd3kqjUzSP8EJZGRpomZvnkZTmWjajKByHaxfQmvrd9ULaoQCbyAS6STCExHb7RpSBA7GxotDp19Xs",
  "key27": "3UsWVGKjqUxCcs1CPX5ze1WHwJGMdhbsNAqsYeMmRRSNKmMLQEkKDcce3ejmfgLx6x97DrZuZmhEwgvPLttV2AVY",
  "key28": "qdJ2DcuxjiS1nJ6bXwUN5iw1Hu8s2GLuVvU39CMxJrBYfFEeeox4WW7CWMw8VHaCqC1TCUv6RUZEEkzhBZ9jnzq",
  "key29": "2rTb8NruEhWHQyR9zCa4d7fPV8Uddg9eVAxekKXAQNhLPmocZ15ptNXcKtSuZJC7NwmucRCUnG2mGvCFwSNsRhD5",
  "key30": "5CkfJwWRcftHC2sAiAzRG6V5BngNn45SFhD2Exv6dMaCUe6mF4DKySd71WUiWrQtGgLgAYsX6uYR6bxtzfH9nh24",
  "key31": "5Z9NSFW2Kf82bCRKWNymgMeskYd92QEE7gf1XBsNtJHnvGqtoFPRyWeTRPLKGq14sLz95j65gbxqjRRCxhyhTuhw",
  "key32": "598S6vEuLeRKATGJT4cuYzPr4J9BE26p23C93AWv6E7Mjf491rbbf2zeF1usF9vvgCttnnhYFo3kJhxfDxaN7iGb"
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
