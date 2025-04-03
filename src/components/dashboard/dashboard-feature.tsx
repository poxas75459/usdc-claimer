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
    "3p6oWXD2EjCzsJiTBnhRqhxue1Xn2FGBrTv76hQwZ6CzFuXLxbrPZjbgAzRqVaz1ytsRuaS4gtE2au6b33t9Jvqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHxyyszJ16FyXo4rLNdNXjtgT3uvgnJDiydCegDKPhesMg8xY9DjFRU4rorbGgsYxSSyu8ARz1SULv1Uc6JP1Pb",
  "key1": "5nPzN7HQFqv64Tg8zTxm3kbvWKGDm77kZ6Si2FcnT9M76w2wF8cka39bZZLGHjvvLBUXUcRsLoHEZ2EF32CfohuL",
  "key2": "5MFYwJVgNUcVJngZ4LNtEPU5gys5dd5yJW45TNYLnTcahy3ne3PFhE2dsDGUMz5YmqnQGwDY4FqQMiMfhm1byT9Z",
  "key3": "gvweqQQCVdRZdWAQqUu9zC7Qh3H76kzCHg6HdRLLprD7MoWQiDKMtwrQCYmeE6Gbq41M72CK6QT63BK7HANXP75",
  "key4": "2DQPeL6bJw1josKV8GdFt7b9bvJo26Dq295ngaTvQ9QNnLaBYGZ3dpqxVLy6uudDbnGhFfEqhpPJcdK2KPamK3Pk",
  "key5": "5HcqN1zTgt3cTEsLyiTeKc5svc4SMwhq1hmWjtKDBVnXHFDNW9v3ahFjmS4V4qZxDPGpCYshcudTJe8FaqYmAN4e",
  "key6": "wCHQNqwLmSq2TVbHC6P1ZQ4W9noskroAkcX6dYKa1tkubWusE1aTP5jJG2GNuZsKjs7yr1T2Q4VZdYE1yyW4dwN",
  "key7": "4ugkAAvYdk3gK7akcVjmXSN4BeBWTQ9Fp7VWWEQnRJVeLRJ5UMxfRnNNJMwgGSvfmXGhLo7if4XbtKiNzkgLx2BV",
  "key8": "3wVJLk6LQySwPESrRggNfheKTVBY2zkHoFvD4Kk86vwAeXvbvdA91bvrkqLKEawFD2ZTqP4AhzfcwRXohCmRWUWr",
  "key9": "3LkQS8ncVjSZj1J4pHivHk4qXbAhfohRscwdJdnnYSe4xPRkBEb5YbgmkHAokWP1dYWtNfnNFdddyf3RUx1QRAUR",
  "key10": "BH34M572m68BJFkp7iSzfaKSFBPpc6Nc1EqqGjYz9EYjg5tMWAqmStUMy3EkNxEmZaXx1QRbRAR96wUG1GkkYzq",
  "key11": "2iWut5foC9fdFgajsH6qYPvupgj8AuDNftSya8n8pEMQvGpHCJCfV1QPmcDVvrde8jh1s7yqVQPE9TJnZoAVQXyT",
  "key12": "5LCTvzvsDP2tBFEuCcQGe7C7GTerDpXNa9r9BPKDhyjf4UxPD1SXBz85NKMjTp3ji6yvdXvUi24n1YTCnNTVk32V",
  "key13": "5fMZJLSVPbbieypdWwBr5HzeR5VdrQowhavLU5uARJ3MAgwCKBeVnR9eD19nd3NK6g11Q6G6yFtEMS41y2J5G48n",
  "key14": "2hy2ajAojS9WqreYu8p1skwDqtLo2m2HeMViqgYJ8NUSt9QWqk8FjEmvNkR7qT1cACkFSuNRnTM2EfZz4MD3QmSp",
  "key15": "2uMRKEeEZu214JH4chnJcXb49dcMTTpE6qCu7LZoMopBXRYhGvg9Dkf6yt8x75xUwuB3q9iTXhEjuPnUG4V8FPaK",
  "key16": "364z1K1cFeCmG3U4V8mtbvq1HSdcB3f3mBaPSyyCPnymjtFmyg6LBgNH6Nm1g29Jc6Ag7R6BH3utEZRyLGUYdEPe",
  "key17": "5kwHsGVyrqUoWjnP8Vrybv47FNct1WM8hgbFjp8Y8RGpJ2asGFz9N2i3wPHjjFxCj4C6wbvJ91UKNrrpqmp5eKMz",
  "key18": "3cid3zHPQjcvHhCS6U7m7yVQL7ir12PYqCsuMtxEpToVmkAjsxeTpT5xcPaVALQ62EGNw9krRxyhe9ureHoAA7Kx",
  "key19": "4fqzNsBWMvmC9E4VdqEjMbGHokBovmMNc8SeKctLo2vcrM4LXjgCNrxYWKVMrZwSPiGskxt5GZWX8GEP1yQShf76",
  "key20": "2nr73U2uaEziknwhgH9eiSuUXyH4rzGEHtBn3jJWRKjpGzh94mJH6eyHquXT7gKKLG17R2sF8opTEy3V2tqss6ct",
  "key21": "65ymJV95f2U3wyc7RpCA1B7cq8PdHrrZEiE7iYenxmMUgNWP88J9B2ahNXn3UZPFveNiDf7eGoLKsrXMGyADKhQM",
  "key22": "2VxDMxfLY1Yd6gNqjMn8iJbKjFaLHvGN76MDRYcgkE8fsAXa9tcFGgiwJxf6m6bdSFu2uCV6yrnHedk1ti7oQ2bF",
  "key23": "5kAzBjF4xzjqxzVConn4dNmGtF3wDh25HUDc1ZgibQ9kMVjhm6AkmGjqAD6DmRQnDZTgk2F8qrR3VMooQ5xWGufn",
  "key24": "2xQLE8XWoD8tsHZFJtTtkrLEoizEYf1YKZb3duwKEzWyH2aqd3s9vkemdvU5UKyYWN8mbDEKvTiKyuUXuhr7Hqc1"
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
