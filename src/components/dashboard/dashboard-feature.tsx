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
    "qW8RcQu6EmPaAPX9ANcqzhSPQZcGqezPWWxYfZHM2Rams8JNg8m1bY5DqU6NXrhDxfSsQ4qpSXMDV8KaM26drog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m85QEzwxibECgAXfaCGhAggTSvW3oQXCefa7RqNBDhvsYsUEirj5qQpoaVXzGheR7C9Zc5ZBYA1Hz3JcV5QuqCX",
  "key1": "2yFKWV1dZjUWeyW1s7GCyjh61mDVbuADsLoiZXQ4FLVD9XGz5fVixhasXGLR7QVpGwDzazjRtHCVgf314YJuYv7k",
  "key2": "2fxRfJyPYrTft2UBvFgjBFxEvFeK7BkvoVBoiByiQ6on2LokM1kp4jbEz68c8HCwF2ofwRnZLhYj1koo2mycEib1",
  "key3": "4ZLd7HZXLingsAeivwJgoeQP8o9Z26WtZ9Puknrb5nnpYdJTXCR95Bj32muUTzcij3dNm7JaGKKe6daj7RKMp1Ds",
  "key4": "TENjn64HDVdY8mAT3hNW8YE2Fwu1k62vFDPdCwCNadc6enwqJJiAaXiB948F1ohoDgC2G1rdJmhdhZoxgcLiHWk",
  "key5": "YTwsPAN4tnjQQ758YhNroZ5sjiVMqcteFugSq9pKKAshn5gLrTVVQWCKWLpav8ibUFQymHt9uF7GhsjFGvVvp9Q",
  "key6": "3ozXvYBxPppwz3qFuxEyP2FAnUPZQ4KYiEnP3vGthkuFyASdHHFCGvKDKLBGZJLAogz8Q8C26UCNqo591c2JMJyx",
  "key7": "2YqcJrpcJdrYPVwnYBA8u5xZsqRs263ULB21YC8Vw86odiXe26bvbdiUDiAg1m8dPbcPjnjk1RYF4zALawwFoBbw",
  "key8": "t5b6owPUPU74QfLNTxRxBFgm9XeyY5zHtVLevv676R41wvkPdLuyCQ3UWVfpfCUjNtzmoyNMyKiS8Q6p5Ye2Kyx",
  "key9": "482C6Lkbvz1WSXUtvbiAqzSjt4XqfyJS7jJ56HHuHGhxL5KFomxZHAoMRBta4HgcwyZdDRivwsoR63maPnrXLFsY",
  "key10": "34bMZGTW3UH24UHiAzJpUCiGBTKUf5pHJ6WfbKXnRhuK63oYnpAUNa7dC8a28HyLh7HkU9PfFvRPgYaLzsAgpr3r",
  "key11": "32gk9Gx36gGXtSRupn1eCNwUMyEFuqUWBbAQixknrTgczHYDCQ7aQxQwLBhzd7hJWs6rLntXDYkCdhkMS8Sa7f5K",
  "key12": "2QaVKyLnenoP24y1Ut5YfBDW3TJZHg6xKkvRVcoU9sQngoAJJqaSLgi5xtJ5m3eavMQudy9R91RzQxtjEpXyeXJZ",
  "key13": "EPoDiXQ1gN6rMXKAWeSWFaMneFp1txxvKStTGgDBn95r3DPMVpMsn9qmtZy7CfYzjQ1b2FnhJQ8X9NPgv7hqitd",
  "key14": "hXUbxFUDTWdyHkrLQ45pVmHMrFgeLqejTd8v5TutYhzecPNTcBVbZ6ZVwrQcVN16NtTt6wg5oLPfcHpgxkbUHBs",
  "key15": "5Dwav5kgA9R68KMpADYZtGnyuhKf3cCjLhjVYKDqjuNRoQvdsLFoB3zRLXHGrt92WyXfQkwycUuqp8Fpdhq5NmsF",
  "key16": "3UfsfeNCitC4rAbiyrXiQZJWqJNneMJrsjnBR2sKASg1r3zsf3wCz6Kbek4a76DCidCAkGK96A8ofVPJzUsWBvJC",
  "key17": "2aEhsHTFJ4XQi7BMimSRJN9BifAQHy2NZFj6pt7ijHamX9xQ129JDgmrvs8Hrf73xQ6T53tveuBcenk66eiuD6dG",
  "key18": "3W7bWZtV2FysiEDRXyN4jNXU1y91UrzBTivEWogyXc3768836ecud8SHAU4tNWEv6KxnH7fQKBVMFmYeBvcxph8J",
  "key19": "4DN6V5XEtoh9dDb7ZBMB5LKwA5BiDmQYmg4jsefGXDGiKyb7buYSQpaXvs59EL5fHfwcGpHu2sQKGtkrArv44Lcj",
  "key20": "48fF1ko3PxpSdMkroYNmYHSXtLQwBnF9WnqKepqBUWeYGDYChPgsx1PK9UA5MkFKZdMj1MoS4nCq7e7VomugDAnm",
  "key21": "fbidQ89mCRaSsKetuULXu115wFowLsDqV9h8fZ5przWQWmyHJNFEdadkPevrkzXpsUhsjMq1yDabAqCNrrNxFZm",
  "key22": "46XYge6Y9WL6Zyx2x1EKJacGkzU2ai2L7AcUFQffY3X8ij1MSe52jX8WUGhcs3VbzjyQVe9Dg83rPMrPSSwRe5xU",
  "key23": "46ViQVZusRK3VMksVNpuBa1AFd6juVA1eKbWe3aytJ4KKNkGoaJLZ5huqiTUUUsJbMBg8iRkj9QDfookH3YnmSP",
  "key24": "4HiEKhuKmZ5MhqQHWj2LaLv5h2ZGuNbmSRqHFGpiaaeYbDswZMvRK795NyAei3S5ysAsLY2YT4CyzrA274cnrCyG",
  "key25": "3Fy5oovyE7uhD2HDjFkTp6vBwCJEESKtQ1pM7vUA8G7DwbEeGFfCvQKuzC3pa8nGgpaJs4pqpCSFJKbmHzBjdHXn",
  "key26": "5Kr2Sv897E4CUDVDAaU5xiJ3ypRxZFZw4HiexLjbGMHv1MJycecKC5dFSeAc6ae8hGk66EgtRmJXSQTYSTBnmZ4k",
  "key27": "2SfTA2Q2omn2FVuChjLy7qr4ZfzZ3ZnyRwMyrX8SNLBXQxAkt2s1erM62VW1cGJScbuDxfEsbsCpm9Xy98LNEJq7",
  "key28": "4cxHFLE7AURWyzAPQR9FDDieLHGfJxnqsQNRnUaz53ARave8nDR4wEkc4d4tXWTYD7RcEBZhfcWiTK37SgFB8U1u",
  "key29": "2HUkZreQHA9cSHR4dz5Re5M22V8vh8Eam5gYfwrhuBjangkH1RoKmZh4UqWiYFwdPYXNfdEF29YiCcYb1NWxwPqP",
  "key30": "2Xp6o81xgKNvkmnzxqA3LgFcP3Cenw3AnKoXYXhG46zKKqfT7snuLLUo4Q5oh9Vxhv4sgaxE1EKbh2d7bD6xvkbh",
  "key31": "2YFd5MSpqSUkfZ8eJyQ6whJYwi1JpBWwTfPufwU1BisA2S4j1WLVzpfqbnLPjGsUdxYwTM2mzzTd7N9a7Q4ur7Ef",
  "key32": "4g2Cv4mi76WzHmCEmZ8WGnSQYAgBmFqyJ4w5pPZQtwDPDfnUg6SGhAm9fLu158ZmGgKH1WovvWLPP3cBZaaxwwdg",
  "key33": "5oVQ5Kv3fgE3cZ3BEka275UxUQJ6xsqXttTHGH9AKp7zQyPjArD5NHa7Y6gMT1bWzaoS3GF4jfCLbNhAxZi8ox4U",
  "key34": "4mjtG2X49VjKzNj6K61i4xiBhc3oCyTAKCNNH1HzRocGBPFzAB6pRJ3Cb8cJpF9JtNccrsHNWHSHDtCSxACNsm6k"
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
