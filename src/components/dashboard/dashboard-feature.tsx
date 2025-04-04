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
    "66mRDZYXYDrcAf5WFCLGsnwqWnmZUeT9zg7FJbRB2F3iYeZhXoDQXhEFqfnFCAJxDERa6SErpMCb9ZLL9ijdFmbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQp7XYPEeX41oRJFgLyZASu1uE5jj1YhAy92K3uQb47ULQJSdezRHLAmP7j5J86axXmxVezbKXi7FN8eHgvUC2S",
  "key1": "4k5mfa9tXSgvGLXZwCaY9eCp6Bnu7UxJBTMfSQ9BAk3rdPifjDdkRRdQyvAwTiRMJDmKPaLmdeZQCmva4bfAJ9oS",
  "key2": "5QWXC1FHGKZHeo6uUbu8fu3PkrFRRiwuNB92uPw1Ex83wimRWdNGfSzyht5EVJb7K6DBWb8SqTC6JLz4jjv8ZCnd",
  "key3": "32nfh458r2VQBzKpGdRv1TyGqjJC21raKCZGpJ4zv7ydVSd8jVV3cqxSiq5BViic9bioXnJweCyJH4v6f5Sf6wAd",
  "key4": "3pNkjGFj17CqMnem6decRRkSVRrveRg8pthiwJKskLtKgAFcSqBcvy7HifNJ3SyCmhJdNLoNg3aUFHzPkTeoxyej",
  "key5": "KemY2y3myb64qy3bhuN6SZhDkYqPZuLJGhRHHvc8ixPYJFeU6hXRDJAghgPHT4a6QCEVKTmvF98eY5jJZTVB6Sf",
  "key6": "3jW5QiTo1gMy3m8bQFyCnC3ji8trSF2JNWyyyFNUHTkyquuwvCXpjrLGnaAeReyEXLzhTsapqDxCkoXL3vwHbCAG",
  "key7": "59fwSPwUyQR2Ajy3jxFs57MdNKvCk2MbRPj2qQ6qjwQ9r4QFdUtri5coXxW2ELvFdVt1rE9dAmjfzoXxxVHWYoWd",
  "key8": "5FJHbnwEfZxkgqRSXrNZDV1j1nJZJ9yyHwChHMgQ917uRSDEuZGJHe1PzGqcecuFLQzVJqqhkZa4uv4RgPHCtpLA",
  "key9": "27WwxohriBHAt62WChhWTaFqB9gboGgtv7bZgwWU1xvSSQLhU8EDHF1K3Ny5uvabzJR4bexW78UndQhAVR7GMcGu",
  "key10": "5kfYgsiezZFb8HiqCJW9VSKiM8wbtUkKSRoGT5XD3w1Ji2o333Xh3f6BLE5cPG9mB9reeupc6y3Sv3wVnNe93KQm",
  "key11": "2CWDqc4Ms2n75v2xA5aDXzJDwPcRdXTfpd5f9DxL4UbpsMFRLFzBKmCPkuMNVBjG8ULoocGCZWkdtvZMmPKbpkTZ",
  "key12": "4stdRdBJLTqv26kdZMvmgg4P8cy7FwaNAMRCUimResxbXzDs4DbeqYo23hLzWb42aoJGw94vavHutvfsdNVv34GL",
  "key13": "3wSwT4WfsZih9DPMxa7TG5UGc3m5F4QEznkS7QJMkBbu18NH64vYYNFMz2kQBB3CtYvbLbmjfqfCBCYPvS7S5GGH",
  "key14": "4jGqypDCndsecCmUMQL9bRnru3yLhNijHdCSNFCjthRVc56yNSLnXHwtYxFjHTVATXgk8JyGptgjrWFZCnCSDrDp",
  "key15": "HPdcYfnRspFjVwFXufU6bZpkPRSWbjKxW9VcSwtKcsMoPF1kU2zMDYPnqj8W6FtLM4vCJ6V44Psecjh4Hyo4T3f",
  "key16": "3YXsyi8dobtsvZBNMJzmt5LRPNPXabMVeq7F6o4z8tCZ1M6rFvXogMzyr12uSvzLYXKfJ95iGoAw9mQsonMhptdJ",
  "key17": "4wg7KSRyAc1fdRsowePPSjiZSpJfXXoDdjo4HGr7MqFj4wtzH3qH11ehofUNn4mxE5vGy7i4UmCSGbBszHrqzkxD",
  "key18": "2A4D93PvfeBhENEgcDYfhimq7TGjXazjDEqjC3VY6jaGFauhsJgnwNgbdMpSbCQXchyYQTSNjaAaUHu6Gb3zh1bB",
  "key19": "33tvGax5w78JkMk5EdEtGcewqtnLcxTbpjTqFsNXfRcQyMAWJRb8LYJ9s4tGYsCthzts2gpQcxB8mu9gB3u9m33k",
  "key20": "2pRfLAKkpWvLhRPjfzXZcPBF9pGnRbEa6D4NvDnCidpuFhsp9hAAzVMAEGf7CUkjzkr9c7sqEdv3M6WvXu2L9F3t",
  "key21": "H3JustjRX4z87VFQZgKBvegkYaksSZLALhL3JaniVhw8aoDtrvPAwuiTNYC3vvUKxVTFNayfxmpCPZV36rfd9qT",
  "key22": "WHkToUjhLSPQjtwGkKKzF6nB3W37iS44D3ujemyrFG3Ly2jKbrX5GKxjMJz8vnnm89AKQcKgKM3gBdWqsmq9JYs",
  "key23": "3dJDmWrBv61f3sp43dbqtZKctNGX6spDom7fiwbUpUbLPhEMsg3rMxB2xiREFV8dY942A85Y2ETZ62WdkeQajdA",
  "key24": "dkUX3KtS7NcZ2URMJngybqfa7Hzcyr9N6kExi2U7DBAdBuq5DUQxQC5ix5A2zuJkQEG9dxhqsuFnQvdXBWCAnjw",
  "key25": "Bs4eAkvbwmHqshdCSK6zYnLJJrHGqgufw6yZfSmM3Qh2zXNkcB9MTcTB7fN6VgQNYf75wkjTN6xEYM27rin8uM1",
  "key26": "4oXAneAARRCTmWwGzYNYxwYFUqTszDaaECPPX4pqkCTfMor88o5toSjMfbrKVT6eMfP4fBKNRuG9yW65cUmizRwL",
  "key27": "sXzFtjkFW3pXTpJueYhPKc8VUpt7u2BSF7BY7atdyjk4fCwumM8kV8cnF5y7ow5y4gpj44NFNmemkDCUCuAQ1GD",
  "key28": "pRu1DSiGGg5sUNmihhKHT1ZUP2BwVH5fLXtTkqyezPbQQvfvxrdp4Zq3rpckUUxwV3GDVxHCQqipG9NCi8SUqEP",
  "key29": "f87g13dTYJz17YXq3XzeQDCHe5gfiSu9jjYEnFUtmyiCjggnY1GNCzbYrVLDVV2um8H4w2StTVQQ4LFqgijnS3q",
  "key30": "CvfaksHpjUrusGeiWNv3GmvrTHizYCKiGT2x65p32VjoqAxCco7sDY3X5b92FZi36dDSYpsHGMnkH1LjZt1A69c",
  "key31": "MuqZdweXm3rTC9ZL5KtXwQKFR66kY4XpvMn8bFuP5c5wBqvnZHeDfGVUuFSHg6MLcSfgumkX8nd8GDdWnXRJUmF"
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
