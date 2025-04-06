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
    "5fTmvz7GSPHbonHxwWk59VfvCG1NsW1DRq92YCYaFXZvcBkX536KPgpoaqPDX1MiWqGz1Z3hd76E6NPF84kSXR4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nwdhva8C1VFUrpsuc8ePrcTtB9UMYNLPfSr31iHFASSnjzWBR6Ky9DtFxLTuDXUBkyokf7RGFNmCZoN73HwbXpj",
  "key1": "5zxqaQbySwD72nLxmDK6D8rbFdhzGfNUZXxQ6oSjjeRTMHkKVYZtGZT6585dXCsNmmiDxMk9uXMHfqT76ygRvLdF",
  "key2": "3RFktwcHFSXz7oj5QMcbnJjHtGtmERnGZeqa1NLuvEnsfAUtxWCgkcXgRTe3Lh2EnxUohMNm1rRnP89gHcJKKbqt",
  "key3": "5omDY75X3FZRDstxFJXmMN4kbThGajhTVb6ZDvjq3HTj9cEm86Ge14NYXKRK8FRvAQLLiNoxrgL88tBry6AYVEtj",
  "key4": "42EMsv6LaeZHr6u2S5zxiPuGoqc8R9s4j4ADQ5igbpGutnm4QHSrn5JH3LY7dbmgiGYwzSiXZkeynKFZxKHKnafk",
  "key5": "27sAnEpmkfTgm8bVckWv4UgrcAtrLFLkr31UXcskJFCDLM5WzQDeiKPGyi7d2JmkrqzagnShVdRAdTM576Mv2JWy",
  "key6": "3uitaRBcvHZTnQzv8XWNrLWmd4rMjDpKtT5W4VU3h9LXMnpNQGygpkFDAQ1EqGBT1zYtpDx8CCHX3nZRw58LXEMj",
  "key7": "FgoDvasa42tqYvLSxkwH9kVpFLXxLazbCTza1GkJfxs4cvMqsXCgsE5zgBrP7maE5vrYdxeTtEqegp8ZMUjWWcB",
  "key8": "5THYApYQrXftwex5gFGD7BhoDKDeyuuJ8DdHGNKwhbr4Na1jhCHafyX8t1Li3s6PyH42SgX57KgghqSdWtLTb2oN",
  "key9": "65CEoSbfyzaCevHyNrMuGZRW3y32nW4PDpFVKoqVu6cqqYBEnGg9QhTDgtrxbfC8VEB56o878a9Ef2wyob7pZw8h",
  "key10": "45okMhabwYDWTXWJ9VqWYweDsMceDW3orQZeTr2dbDcqFAjXhAGf5VWhw7MjhCMDSqumsHettqnVdTzs4xrL6jqg",
  "key11": "3UyMJ1rBgHHeXHz7joJimVd6oAJ1FMcy7BrJfAVKM2smkaAkqj6GAm5Ls3nw4in8QHRk8a6w6qjjJAqa1zfY85TS",
  "key12": "cjEvtxChB7ATZVu4fFFHUYZQjsuwMEVCHgp3aPiw7W63eRh2DM2TX3BuwkdBBhG8HQ2HTxwqTZmUb7hEpU7BbPF",
  "key13": "PZmRYkmpyPuB2zLQSDvstMQFk9rHwAzk6GSWyDwJwzUMnyFhMp5i96TG8JSAHjaAdN8NRvRUQhRi1Poev82DZAr",
  "key14": "3HDQ8jh6k7bCr4ZNzQag2P8Bb8kUnvYq6pDGcxdX6d1k9y5ijkMVKVLBdMHA1KGwiRXFTMvUhrBvLEMkna2gb7WH",
  "key15": "5zWquwAYKG41QmSpiZXwWVmFYgZ9BBdhAbCvWR8uN3kwFbugm6sT4dujcKNLKiGdWKNhDQHXK2fYgD8kAjHMgYyL",
  "key16": "32FN8UvUwLkMAG311fiWrqJsCZuwPnyHQdZZiaLvtnHFQvjgarAGf2BVfXE396epHTmwNFNQnht5BwNKXmGqaoAD",
  "key17": "WqXuEMr6bhBu1AzmQEuwDYe9rJTcoMpdekBuYezPbJLjYWLfneGnXYv3197ESCD4RFZpfw9227VJKLLUgbSsUSm",
  "key18": "65df6Hh9WNWAfuAe4BZDcKYinRBzgiqaNYPjcoAJCiWQdaZ7UAhKR55DwSdbyy7D4DXHMAWwPjfL9BqyfoVbRrZx",
  "key19": "5L53C63HFhTR8yU96G1LBMv8q5jS1dxhJAfNBWHDzEeotjLrmsa41wdKW6Ds1LoB5USJjvNhKShgYUxPQ1gSn9qx",
  "key20": "2jiTX2KcBgXMU8NViPjJnKnNKgtTfQudfsPT2X8SjwWo1JzJJtuiD3tF6MEWHqJVWfJhHtDnP3b57GAmmMcw8JaD",
  "key21": "3bzfUjLqG3VSWgrXa4Z14wkTJV14zZ24Mp5PsKmt9zbz5zxAeQnjypGTmKsJjFsed7E6xBsjXvvSmz4ALiBJQJuG",
  "key22": "xoozt1QrxDURArszUePyYZNPazwwcxsCZTQBoHFC8xF7b1Qsob32YPfSH4A7jK1AgU3S2rtZfw3ewsb2rV6yLFH",
  "key23": "TAXZ3wf8j9t3EmPEWiJ3NWAFwb8kUUccs56F6K8LAJbZ58sSdzLFedB5nZRscLLkLeLoYtaWmqrtARXyWQFAXk6",
  "key24": "3FDuJvCSGAkHt8ZpNqQ8pomKGVuHK1ei33umWds48xjduXpwLmYVwxC4VUmckzU74T8MSReFFa4JzR12UmYbYEmc",
  "key25": "EfHSB7PeNNpuZcJZF5sudMvGfcJCppXR8QEnta7acBoqXdQpNuAcEjVkLAtGnpSqke57UcAoozhuEpxY1b39jfq",
  "key26": "2AUWu2uHQoz9fSqrKfxzL8Vm9nmmms8YM11fB9m8M2Jrhf4S8A75HZczD7VWx6Qfoy1LzdisDkawjwB1ZceCaXDZ",
  "key27": "WmorfBs9tu41GyyZPu8AiQMeRpcNG1QfBdZ1oAE6yyuEViFTfz1vd3genk7nLwmPR8r7XcniSK4RtY9BZHuXGmz",
  "key28": "239M3NmUqZkgwidgKkXxVvhZqqaBV17L6nKDxTZmNrLHD4XxgVWAQtqTbyB8f8oJR6kchQ5aYtCbH22JQSX7g94T",
  "key29": "bEe5Dc8R3UK2X5w8BZcjb3Mny5J8DNW7tTF7V4jBT7kgdstXGVueBKS7zj2i6yGFvWevwg7Bi19S8UWxqf94j7e",
  "key30": "373vqxyeqA8texx7bNjw9Rw2Aujam4SWiqMtZv52WKcJtm89643BsesY4dcAxPaj8R6yBQubf8xQgU2Hk9HuLZ7k",
  "key31": "5NVT9KbA82oU2yveYCGkvjJbgHaWcuKUVgQc2HdWUK86jz8b4wgL2AtjiNuvfvTqoFQxCoJrzYtQnuyMY2LFePn8",
  "key32": "3ocLgyWDAa8Afr8xfy2TrqMgcPomt9RUE1ssxCVM616zU7ttqp5cwypgbVNpq8ozY8bfYSxom11Nq9vAYhc11eat",
  "key33": "2drckCufCYLYaRgmzY7BVCo8kxH5j3h6SjeRqm4JyACtQFvEp3iL5jZ6iaaZxn7QThjnfNRk2tJw2KwERES5ZPwt",
  "key34": "35RqaHHiirtogCPwR8E2eAaTTDFrcwJcrhuHhCszzZxHScum3qM998AhWcfqCDJ8neKTxEBP7NABXUoGzm8abfRd",
  "key35": "4nYoohVHox7mdWgTJQJGijTxR52BH4rKvfU9w1dQQkuswnQVTuHfQJZWAJR7U8TVKbiS3i1TrMuuyRV1Ntu6ZfrU"
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
