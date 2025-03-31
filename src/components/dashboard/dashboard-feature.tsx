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
    "4tmvsr81mVe9NJ98WcxU5pFiSsHSLombn5qfU5xD1Dv95tU6kG6EWKnQeoMWYbmDdpu2AzK1GmJDssVDWP3vNavL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdFXUUJYXZ1RYVsnRMbadig7UNAvsR4UA7QmpX1xHaviXUHoZt1fcbSxY1rSZKs7QWP5bREZxeLB1KxjZPxpyA5",
  "key1": "4Rwe5A8NsjZhqimmAKF8YWc1SmNkV11BhAkCbuUvZMQJQMW71iqjizHEXg3PV6QUr4zF4AC8J9bD3MkXZyLMsLGq",
  "key2": "5HkddEkNtKJGmnkSBfRW8g3Xm4ecvxd2t7NLh7WAbprWQRLUpDGYmJM1gXUAvrASN1hexiZnKmoQtye9NVbnYLEf",
  "key3": "4mvgzELUvUWDX95drVN1b5cogaM4AC5mYaG7p58kZrxFeMNXnGVKqffenu1VHhxWZmgghn14rRfSDXfHMrzYYeKG",
  "key4": "5nMiGWAMagDqbLxMD5G5uivXVAUjkajxUT4qwaNM8oTG7bMi4YPjC2krPHrq9qbeHydXotJcJKzCPZoaD7c8FT43",
  "key5": "Qj4LZ3vyuxoqwAnxoY7n664PwDh5tE1hBqjFFQW5UPanMopUgpoZrEzqdEjmyyAKw5PX4viFsTrkprasTLBQJwV",
  "key6": "2fFDVc2X1iUAQ8wVVqKGMBb9NWCUfGdr2oSUp7PYopnviJVwf7zATiFixKCuJfq5caG5Bxy2PWGxvTfKMeWtZDgV",
  "key7": "Pfq5Xab4pthdUSvezNYPWTMgiM91jpkEK28nXrCTxbPVptocLLLh4q3yr2VG3Ldn8tTTeXNuoYgwQhYgQ8wuNmM",
  "key8": "4mkRA5hMw7HAFJgK83VdYY2cGjLGWtA5dXWr9PeNNAHVaUhEX84HDex4x8vRZ2R7obKJxZDawqk4d5khLgUwXkUZ",
  "key9": "2cqH2M5LFSpjvp9hCSrjWFpzUZC4mS9DC9Tao9jS68pNWa1WomCGUr3wjuzateP4XoF6fqLz2P6heArgfy2S9kLD",
  "key10": "5rtEuLYJQS5FNYz1MaXauWeukWGVKKPLWA7LgxhDYYMipUw4t57VXsqwECX4mMXrjuXMpZRKvugzuBEuqtKCs63n",
  "key11": "24SvSw64VAfgEVRTcHKEaDU9bNXnBnUmpDC75mhR9PTbMj9qJaoaJP819zA7Xyn3hQnhuF7XytE8dH2woWikW2eq",
  "key12": "2Rset1HJUW6586wTLqxH5uRjVVC7KTTayincVwqAemtzeSVahNHU3tAK3juzNC12VmVYuMDfPTr2cEw3SW7g3oze",
  "key13": "2spU8fqnWxrdnX4T6GhmHdJrNrCCSGv6S8owWfyNm3xAnLtAVmZUHRk7qxcV5seb8TfWyeHtHrXtFUUbQs7nUUUr",
  "key14": "5iy8FJDj18h6WxoVtjvsG3AGnvANBgv5TLQ3byN6F5HkqYkZZ7ZucAxtm2wuG5dq5AEoG6s7UtqJNVNW4VQJY6wQ",
  "key15": "DLs11ZAG4HiEPToFoYkvi7e36omdtNGKScSaQEz3wtw3ja4KDsnQsczScWbu85kg4g5PHKTvxG9g9QAQp7tp7V4",
  "key16": "MMQ8GbyctEQ1tmpbTqLy7jZhkhaAZFasrLU9vog826gzqCUd8PrKW3h3tdMRmVWjVwY4LRnegPYDCZvBkDVhqAz",
  "key17": "bw32KNf6x8VkY5tQqDhfYvgaxLAzuXvbifmV4Kc2EV3xSF15QfeFA2s4HNkAKHA7aPvNcHCgWpqgtTj5xKcn8dy",
  "key18": "3d4M4w8koUvbgKvzRKQTBz2h1aSpMZDuGNxuDPh1Um3cRLfcXYwZefrWb1HvDLqcGGcaRTyfyVMzTLVbCRrZ17yH",
  "key19": "2CgWF5DFdgXB2HPaGWGHHeSJZDLHsLnbAP4dkd1rmitPptEavf3MbCLn4ZJKpMePcv8iRFVGPUQLVL27fbChCZG",
  "key20": "4365fZh9eJBQMYrt6fd6t4MzmgqEhhuWNo5twHqHGo3PzTxoy51xRNjd4jXdnkkwATW34NUr5CvD6CWXBSxNSk29",
  "key21": "75FD79E4P6B4ViEzZc8JF6jgBrSkBXJ6XbbjkFKy5D2rWiq5kGv1hwwXd1Y8uaJMh6Hi4K62t6ukFbmjVXZUZN4",
  "key22": "ynQ5pbyTXb62ZByFXsAB9up26FFEsqpz1iJkpQmroRBTmsRWdBUzbCP3AkY8oXskTbNt6cSr52cfnp19DKxQd9x",
  "key23": "4eJyQNTJuD2yEHD7krrRQmEUWXQwmtVc4FDGVLyeZktmJ6m2eikddYMYGPbY72SndbrQqthYRq5Q7f8bqjUHxkTQ",
  "key24": "53s42nETHxE3sqTD5m3SEo4RaYHa9i9wfb6jvY5vNn5v3TZzuFrDALzHsMxifnG7Dm3VkdNNQefWzQuwY6TgF7kB",
  "key25": "66Y6eFmhen1jWxkNUESVJAcK5kfRebnoyxDJtWKqamkcSVtYn8hGHtZjLQAyjufYtwa5U91VR8gwgFw3hivtmbmB",
  "key26": "4sT79dsGjsDEScBuoWDpJi5LHLqP2916kmoEWQSNT9EMJGU4UL4topRnibmVzMKydfWta1393z8yak2GChbE5zAW",
  "key27": "NTfFcraN42N1cGLDFooVt2zf4eKmN2CXJ52LoMDhD7j7mPdXrvwERE8Esmi2iiYY6Y4MupY3A4zM3bCptdGPLsZ",
  "key28": "zAKg8SbuYvCLikzJ4HdHtxtnKRFoLArgzBzguZuj6ybJ44FSuRf1VuBmNHeHpNLFnKo4Vt6Vk1PMQjw53mn2AVy",
  "key29": "kLKdR5WxDtUTYqgx8tGpdgcAAQKLGXcUMGZo5izNm5XkerbqasSHMBVTi1HqEozyH61AZd4sUpjcxqZdijJ6CYg",
  "key30": "49r12GyF74eQg5W6hjdGXSGzgQdN948EYK1SE7BxyLG5hP7JxwRQfWNfRCt42Nav7Eyvt9EYDssphd4C9UJhAfbR",
  "key31": "tJ12eMSd9oiwTGqPCDMoZWE1fZWQzg7g4LukoNCN4poe1dTr16e9GkA5BhLFHZc7ufUAVwBiHaUM8U5edXztgPX",
  "key32": "LSZo1V5FtzGhZ23DA8UP24SaC2UuZtTUWWxWz1WZZz19eFhz9vsXfCjzCVMu1sLZsemRrRfT2Ng5jAxcbg8Avxe"
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
