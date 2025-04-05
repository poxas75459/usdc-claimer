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
    "3L4uDDMCzymHfKvZuWty9hLbfzJJisDZ1sitAjH9T8d8MZJPZfCcGLM2v7s4UCEfjLAVUCQnaw2jzvxmea95Bm76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGbCg9yQDFwdKKxArZJ8Mr5VUexQ4w2ebMfdr9BkT9osjrjVsSruvje17bZtK9wsi7XTzrrSsccCjepjBihyn9c",
  "key1": "3Xj6FCJxvVEMKejiHAfccPSuZtSohBhmj6qHAX2nYJv7ymJGDZsRgA12kZcAAWvvcZV34S6f7bwiRV78byApwaxW",
  "key2": "3NshLWocaoPpzgVdStt8nonFk3nm1Rzi8HJRVVytdc7AoBDyLuEdyPnoD8EZb8b3faunhe62i9rNSz9f6KTC3xnH",
  "key3": "2EL6hxwBtXNxevs513i413euXwLwhYteBPnPm5aoZaGvSayu5fHKhmFF4QT3dfoxm9khpavdK8ax1xXWDDgbwJyz",
  "key4": "5zV7epTuFdBrhRYaLRtgmeqdJsfDJ2G2T6gSmu5UJKypAwz7q6b9ohki4d97QTsKZG4nRUBadZ5jz8oipb7D5P65",
  "key5": "EhT7DHHLesvTsHGPRyn8DojHP6WR2dQQSziZ2xhWBfXK6dTT9EZawkNyZL5bhM4VRZy67yzCLZSMVpHtmkrivuz",
  "key6": "34PDkTr8F1e83NYAohNehhTPoKWNiBgtqw2XknAmrUKyjdWmd2wRni65StxaCWxnKpXDEDo4NuGFG85VKQ2BkLU6",
  "key7": "2v56mFsXgnEVEybKKvSiGB9yRrvMqPojhp3Bo95dpuLmaTD3rb6jaBcada9jMjFzaWVDjXKzsy8zchPLRoPHwbq9",
  "key8": "3N3mcpQmGmuK4JaxPLL5mKPsKgUNxXXgaHvj9mR9JkqoDkjSUu8mSDVQnR3CBLmJRWHZPJug1Gafbk3uXLckBmxh",
  "key9": "59Cis9ZYTuvrHvjaSj1JwY9HHoeYZZzVNZ6YHycWags1DoBwQhBKi2QpBDJT1TYenrr9mJWgKwLfiuGZRaEjeAmT",
  "key10": "3ETrD18fSgNFmNeUiQ7Jd1DrWorEboNwbYdLuk6h8Mjdx4ULBWk1tUF6b4SigUqtqN7TAMNderNpCRnAfdadL1XT",
  "key11": "2Gnc6jb39fyea2FgfrDNJyKgmUF1nfkzi92AQaSM6H4gM9rx78M1dxbTioe5HU7xm7ZP8Z1YudCczZnKFiE8rfsJ",
  "key12": "A3BMjTyFSANL9Ho3AcQnjorBq78wyNLm3TzmrE3dpGzroKsT4XWsvrc7vu1eUnbAfq5Qi4YcaLmkKL3cReEZ6Wv",
  "key13": "43F5i9zzBsY2G3Z4M9Ur3tvQ6GWPdVgb1P2FBYCedGSZoQMVE7r5cbvgTzoQJx79QcSvDurrumsHtr4kkeMQnCy1",
  "key14": "5vtrEBD6aisNvtV3Zih39btPxooYC8u55NBjBy966W5cvkgUoysYVQyVqzpz6yV6dWuko74Q5YAjtidTa8Q2JLMy",
  "key15": "4wmAok5oYWZUfqzU3Jm6Vms7zaAtdrifZC9H4sWQatZDJH8nej4SeUY9JJkMUNq9E3k66a9nyFmsX2VrEJ2WaXXU",
  "key16": "5VgWVjm6Cu8aALGJfFM1DcCSZWoHPcKrMWBg6XBH8kGN1qRkEPLon55G6vV6o1758e434iR7fyaSxXP8xpGpGGjb",
  "key17": "RKhThhSDhHGVp9DdcVZjDNB6KgfxHH8VpcYiVG716nd8buCyqZKiANuSh5QKkRRv2cAhdnZBTXmeEUuAZ3EFJNq",
  "key18": "5zMKBZQQ47YSEq73itpHiScNvUMPffsUq9EL6ckhHVFCwkF8aXZatXihXSgKbKdP1UcshcYCokqZsbJX1adk8MjQ",
  "key19": "1fbW59AoyXemUC87yVHcNNxSpuSURox5tRb6GmBNa2EYLxGNiNRhRnzdgmYcdtG2qmaRdvUJ5rjxGWcc1DRGBFd",
  "key20": "34dAyF5m1zxwPiqtXvdAs5w35FzTQ4bu2sHibT4C3FsxjiiKxEhRWeQALsL1Re97WWxejWzAoDvECEJQG9hkD9ew",
  "key21": "4TXpNcq7NmM4aAbG1Qrusqzc6GzwtLzn7x8GNcXU9ZR1nfppHRC2dccif7mCyZ7ZsvEXCGX9TbFV25GSn2WSZ7jS",
  "key22": "63w1Q6ZMphL4wEPNFWHVuA63SRgWgoS5ifcLy4E2NbBy7d9xVeZn7TkKtUg17vqtAnKe7AuCo1hjzaHV1HKyYTwP",
  "key23": "2iEp3GkFX7WLdYRy4aNTLU9YcLn2rHyAzEfkiDAves5BweDAE3mBv7zNkZLSPRLsbty6eSe63Dfoy7XcvwdTb1fG",
  "key24": "4bg6HWHMjc8V129EFRfFCaAEhWfrvUAwqBtJ83bwVhNLkbrza1T5Ju1vBsGULdy4GeP6MwvmRrMV1bRRKGp98AAh",
  "key25": "66X74ymRUF3dsWh4JpVmorG6tY3dankDZBqZEejVX9ohnzctp7QQami4ZGK62NJNbnRwVpq9m95WaNaPTdEm5D6j",
  "key26": "45JAbPNFgH9b4QjqtzeJAZQPeemAPC6yx31Cuv3GNRNkyZuNWrvs58SpM9oNacdPLnFto9P3kSVTcV7PTEiDdjWw",
  "key27": "37MU55vLbpEcvTfHgoDkNFrYhs358w7bd1y5XAYuefzf4PJRXgTin6XYELWyRuoQNxbz36ffb8ytNCmupf5fh1zj",
  "key28": "3LxmvqTCtqB2JDkJjKdr7W91EX6V9W8Wb5szHDkd6D5VFLzB2sF1PEkAKLesBHWJdYmCAHNAWLgoy4troc4rxFy5",
  "key29": "2ybm9iNEGrQNGcyVhU9wVnjEYQ6Rkr77kHkhjSiTzoxXaVEXCbfMdQ5Rc6bRAaq8qBPbYyxUJN24BTF8WMuDRRWs",
  "key30": "3T7jCCYJrytY98Bbzw6hVWiyYVKeGxCNV15gqthT5qN4uHY6VbzrrCLJmkA4pxhfVbNhGXBak9vmjgiCmmDSC3nL"
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
