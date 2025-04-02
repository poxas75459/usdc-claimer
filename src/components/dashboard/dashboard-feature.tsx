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
    "2kpiaRrPVPT5kNzXFrbNSzBa8YP44AjvXcisZ7vJVMHonDqtJF6rGLkDUtQbveUJ8dyqNS72Vsd3DLoJPB4RbgmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHFESNjSs9Z2LzPnkQJCx5CwoyMcLq1CUEThxApy8TvGnSDNkunDLENBDZJeGhf6BeWzN3rsAwUToUqCgSkjWm6",
  "key1": "24PfPgxLHKGSmL7GWvS5TAmMM8KYJPRQZD38BmNVX8yZmTojxdfrpgA4puDwDrb1VSFzHU5UXgYg8NnoBJiftari",
  "key2": "2BPzRvL4SPaaeYDYyEheqrMhGMjRMyrKmuNTKHYZFz13VzXwacftXMV5B9vNRw51yEY8rLcoxtpJyQUKKTjLgBgs",
  "key3": "5PYv4U6oP76DzFNAZusxak7AAqq7xJs5FwwN6P9q2BPdA1gVf1AW5xsENabZPNCV1Nr19EMqdE4YPJUpmdeGRgNP",
  "key4": "2xCyKYuL1cNufWi9ZXTM2JAmzje5zD1vGevngx7mx3DoRXsYLtQ18yJ84ao1cGXdXYVx9giT4AGJWmBRgumcPdwL",
  "key5": "4czibrmKg44mUTSRmZdeciRMqS9U1MinD7HGSurFQerNPWb1x5tYSmPkbSW5kCeM1VKk9sw34xFgHQy9WdzWvSnh",
  "key6": "5LBSaJ17GrpYyZgExonBzmpm9GaShDNBDsMuZNc1GwGZomq2WaZxnp2teV36pnXJSEn8Y6NyazfdYFnDsa4hg8K8",
  "key7": "3zHZYqkMCJLRk8LfdNigKVSq3wNJUFM1FVZ4KyG3W5Pr7b8FvFQvNCCk2cUHmCD49JZAeiE3RiRKzLmberx4EKWG",
  "key8": "39tNNzU2SPrZfUBbek5W2siu5pjA8v5y8ekf8Zci2cDTfxYPDpVgaUYizrcmHRF4TWn1cNASUkD1YnnfZ9A7qeaD",
  "key9": "27SnG9W4xZAiizX29dtyb1U7MjNhgp1epUfA8BxMNbffZWZpZmTJWRA7sjcgYcL4uJFdm9WVPoMx3DPdHRjQJT3Q",
  "key10": "354vckjRbLarCttZvm8zAT3E9UCxCg9FSvBJxg4JGSAaXMy3AjbWTK7N5ooKZ8pbGt8dAjCknV6fnN3pWXeFrstn",
  "key11": "3ucZ58LewJZNq4KsseVCHBMUH3RV37HbuZaUwQjGvG2CbDAdk31B4RoamACL6fvVxUp7jQxxQf2U2yKAQhT1waeq",
  "key12": "2x9tcebfnaQRVv6nschQtSfCtisSFTGJoSgz3gWoQ2jo4rVxEPf148E5xw5nf5Ft7EKdjk47TYKg7BUisvgfCsW1",
  "key13": "4RS6rktMJkb6hUE4WyyzsjqR2GdybUgpbxFE5Be9i7zYDcz65qXjtCydNUeTNyvSZth9F5pWhbDxemKFQvDznA86",
  "key14": "F6qkGbmncdnxEN28Y54iunE5jJP4g2Fi1LTdJdF5ofxmaa3Mr4j58APzEJeEFpgqPXHZNZpe9qWqvYntuZj6DgQ",
  "key15": "2yhCWSB46Du8bmaS8d1P7AKNTJog9cH8fziF6TaPAszUYaYS3UfV7YA56gZ8xZrHdDZAKEn8Ksd7fG3K9GHzPHoU",
  "key16": "3z5dFgJonMHyo9NWXNAn7DSc5hpa1P9obYyw8uE54itqX3nXqbQe4RHKMmwRdnvMaLwYxiwEspVt3fmT2JiCcgeL",
  "key17": "2ce2fjGzbeSgCGJr9u9jiPSXxGCDUtZA5Ge8z5YJzSMWfqj4VuuWaUYNHhgh8aJ7MogftctFsqDtskCpKkikdYF6",
  "key18": "4VNJgKP4S4CtzMWtXe7afzwtYmZYwy5eZb8d8JxzZZ4yfi6h1MPxuc2V5iUnoTqc69wtHwvHMd4DAqaKEDVnVDY9",
  "key19": "2pn5rUVD2SNpbKeBhNjzps4GM8hFobmuvKmP3XQddKfGC4HGHdSfDjNvwxQTtNnmYx9php5EkSNk4wZ5qQLYNZmF",
  "key20": "3ks5YX9qYGDWxHdbDq8AYYu2Eyp6EQfEGK7kv65dqN7i3Nq8Xnapg8aoThQQcwK2vTMQ9BA4QhTcnL9N1oEnz31s",
  "key21": "3tyEmwjucGx8ABE9Vix1ErNxoyawdjKRybYWb5YBbGXUgLM8wGGYPT36FCsnm7wF45Un5Eo79QH2jCQwqbM4mW4C",
  "key22": "4NcqRuemxTX6tnTiRxNjHAyX49ZTsPQNKZ5B9uotrV6y65mjEMYNdhVHryTMwnWakqcHF1acQ5J28PY5XEsebhTz",
  "key23": "xNiYvyXCTNHmN5GHR4x7axgheyVdjmk7Y9Vr4XhQRy26WXdyAF91j9qDKxYGJfZ72LuwtRdAp953A5iTA8u9HUH",
  "key24": "4aGmAjQHwdMyN5wZPKPv6yRgK8TF4ia1zThCyFK6Eaf1gcrSxgGV3BDnCiVxYctaoKHqTjothU8oz2bjBivwjmk6",
  "key25": "2VheF9t6g3yEdGAGkQxa2sKC7XqywoczUiE4taoyTTAseX7P1PjNyW4xZm1BNdT6WDPn83NQmCfLxJfQKZgSbxqS",
  "key26": "2Hq9mP5Zjsb6YP9bddAtt8tYSex9J3KfSjxpGz6576gpzGuKQuc2Agf7yLLRuJNvoQjgabjF7CTfjNmpcvUnJxff",
  "key27": "4N2cCvSaSRCFeFAEu4UCRZn6a3esqoFU7MEaJuaJJi18U41vfbfZUyKJArCpsqRB4PXMRZf34NAm5hmr8XGjN26f",
  "key28": "5AE7n4w1tFmfTEDMKshnXFoUtAy4pNovffVcpQzRhAkTJYy2toZmW81gp8XEQe9PR9Xk55cuMa8uNLjsBhUnt5k7",
  "key29": "5EE4w2eik8RT7PuAiLD2pPpW7dvne85hrHqQDeDYbNfQfFpjDuFe9NR2iwwDBaty6GfHvKzhVeYVE5jYFttBAuD2",
  "key30": "2QXoVnJg3STFC4GS5bSpbUDirMuTjiLTUkjac3oNNnso7q5SqFVfhFbqQYH7xRCgAwjAqrcAhcJA483QBVbexBTn",
  "key31": "47aHoHbGmHYsMA9wdKyTEbaaZAvXV5KdLu1L7xCZE41ury9uPogWJxQ6zK8inPPmkEbdyzZb9c2HxmPV1Vc9a8G9",
  "key32": "5LHVUAJGAZaGpPAawvp4JtAuyB87TvgazcDJFmaoqtVjqiyn82f4bUn73XaDH25Yh939USWBQiDNwnrLZUmpwGTR",
  "key33": "2emZzgJJcPbEwCpMw2ceNu5odacWxAqscpfyj3qSWmNjhwE8uF3DYmUcPZNYkCZZzJwTp9fnEqAdzKkig92mUyv9",
  "key34": "jyHGerkByTa7CEQfjAsNYxBgt75N8bPWHsenaAjM4pCWfmqGTotU7pxD8LaGrfA2s5bdpHFWwVdP5pvUmgXjiPE",
  "key35": "2uMK6h3VdTgdepV6ZkhTVtBw588Vt9vj5vzE3NPhhmTDDmfSyzUJe6taPnLSUokVExbt7noQk6E8HoP2j6411VbZ",
  "key36": "4eUdGpBHyvMu97ZKjaF99WYHxGTW74eYVhKGsnHBmeemBnshkMR1WXjvJZJ3GSDUp1t45ZsnjGx1NDF2UwSHgSoW",
  "key37": "56c3UezyX7mytXL6hJu2vwAooPM9zcW5jRqd7cWnnm2BRN9xTfC8uxsZDAqxG4XkA1CECqWBFFBvdkSumNiqF5S1",
  "key38": "BGYddaSDiEKETJEySE334vpL8JsVydATSWQhbL7uojiPTbpjHWg4BrSdn95N7awwaqJwhYjfa3q57x6G31hcRu2",
  "key39": "3bGNAR55j8MDj9CwrDHHyyHcA5Wb4Yye2ktiFDhKqVxYJS9aWQvqgZskEsRCEnXWLspcpmio6gZMKcwJAdaWehnp",
  "key40": "2oZB2dkjXVZ8Ytn8RWN7hUyLBqTENaA5RaiYMj36c1D68xcrHpDwZHaNvTvNWm4joPNcybSDuCZ2r7C26ucgfPnN",
  "key41": "4jtwfbmaA7Qwdv4U4XzKfbnZmrP1JAaTYKXhpVHUk8zPy4L1DhVdqfz1wBEKzVxXdhWyoXZzbFhBYc3REYcJhtDS",
  "key42": "3jE95tq3LUc9EnvezhR4k6SdnAe8eFdZ6n3dzmo2iFHDtPQA7t2gdaaJbBjg7oVZdu5ifRmW3ft8BKhHUJsZG7Xt"
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
