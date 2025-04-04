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
    "3yiSh7SPvj61j8oZnGu4waohNXgmzj1dPh3qZDFt7smAmXCLNppnGc7YhpgaxDbRwcZPimL2xjfcgHqBbkKgN796"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HBM3jTP7WUUJJbHv9VBiyNCy2GoKiw9unYMaFyeKf4P9qhTpkwGPLoszMSJ4NiokDhKpPm7NKEUwiqgCohseQc",
  "key1": "32PNJLM2hwXYhztqwfTKxvwz29XxPKPshYx9HexFGh3qjcqyuzV6sv2Mqge6m4sbDVtTzfWKRt1KjDsZXYA4qWV1",
  "key2": "42qdvqzGrqkPPN8JuGHDSw8d1F7SkfPf6pUwX2qHtKvZy3K4NNsyfdxB3qbmrDPBUufAf3ZVCf4UnSPRC5AbBs9x",
  "key3": "5mJTjDwGPH8CA8GCEuJXyysjnVb3dWBAjPh6jP3F19SsBtW3K1cT9czzWJrEBCXzhcDFFYtt33bT1ZXAoGwW6UnV",
  "key4": "3nzSsuTrvHDkwHdEF6EU92KRu7Szq8sW4KQQdtv7ELTyr2fuVAN15TW9PkcRqxPKnDoAjdyueDBDDVSMNC8nKNr3",
  "key5": "2czQLZMDzmx4QWJqnMH2GvtXdMrHAYwimHUAioapfpMCpii6mYwfNuS4B5aZwNfKnzL4LXuDy7BbaX6UiEbwYrvE",
  "key6": "pMR4fhkrzULNsEaSWB3EhWus8nm9W93rvQxKpUkixwFJzGNoQtAjsvGyNPjqj9ahRgptXNQysCL2BeDV1SyKeWG",
  "key7": "5PzquB6aPaYaEMkPvPb1rAfctn5K68gYpDud8zZmVUctMpyaUoijRoZZ91kvHVuVbXJhTxg5q3sKVvkr5oGWAFCY",
  "key8": "2UjeA5WwuW14EnJz3HUbK4k6Hw1doqGgYmoUiK7VNCV56F8tf5RLzGVc2CRPLm2PW5xkVZbvwe1oYVY6MU4SzQP6",
  "key9": "332RZn22pw2qnRivEoUz6fJMyhbiiZRug3rjF1K1ApNojqxxSd6DmK3LQfe8VoF23nVstXmrvFggAieHGMcmF7s1",
  "key10": "3fyaeeyY82j45DiMCvUiAoBm8DULwBMWzw5K7297QwJD76sZrcoPuFxB2TFnMXwcMhA2NckwRHBhXGVKQ1jzJJ6n",
  "key11": "4jT7CCWD4gm38J9eLgJ4EY1ydPbmU1gGJsSVAgNKYmxaX9ZiXU8nAGFnJ2441bgQTYb3ABBNGQw76w88qpTDA3r7",
  "key12": "4mnZ3oTjo6BXJtAK8RrnxFfN4Ly5zCWLeZ53m4VaPHMY1VNnmGbEhoJpNkYtsisda3XJxNqUTfiJGceohMEkih17",
  "key13": "4djKP9ABb1Rb5JMM8cjxQrXwhtkXuXutykvDsrAXgNT6C4fJRhfRqcZ5txY7foA7CZ6DUoQQV7G5vVzsvbVWrhVq",
  "key14": "3EasVR6NEXwvjW9K4XJHnrQmxs8uE6A39stqh9L1aVggbBJiq6uJ8q7G88sX6WQfAvWX4bFfYC2TEzozu4iu2AMS",
  "key15": "5BXaAcdBEv9nZUKkudFb2fkebvjcsLgcMZNYxSXyCybSZYDQ3N8PKBXNkiXTMPxV7SMXmHWX8PU3sTPmCVtFwWJf",
  "key16": "3p6eqtiW7DAsQG1mmSrVDAyjDV4gL2U5vGTjJKL3M6PjC8yBcywCzdVzQ92pmHaV3xAiyqyZ834bUyeBrJfQGoWa",
  "key17": "2Ub6565SuQHm7t8xRVtzCzXgBDiRGQnjtRFa9FwnJHQ7rQ6hkgMogMx9SSi8AGpx2fBqzWZLLpZV3qvEueQUc8sR",
  "key18": "55efjvq79bwozMwQ89Jf9qykRGMHjX2dwxWufTD4kzkAGUi7b8rVpzcngGrnT5y8KGtoAkKdr2pX9Z61kwXx65fW",
  "key19": "2K4nczeLcagdF9UuZNXoexcoNiherRcxj5tKgFjwVUHVK8HtCkmfMaWkWEQQayURSPiudm3qaLgY9JRGYhy6sYpd",
  "key20": "23YdaWGupjtirciS9WnNWq5Vkgcj1bfYzxPtLVB5t9TTrZuQr9SCs5qJwvGtSukGP7epeeK4WPxywiqgfZ3QELKQ",
  "key21": "3yNeXXeR37yvYtz9c86aCc6oai1gLNPRAEp6qFzYybjYNWcXx1Zr6DPKJGpAe8iCpQizUsj2Jshg6127KY8TxMjW",
  "key22": "2DN47ziLuJpmxgCHZT5zdyZqGj8tyRfPKX6oZx8sW1Sabr9Di8QANV1vndrzHNw7Zrs5tT7uKiHhgSUP6AQps6Lv",
  "key23": "4UsL3PY6Tzz4b6xBSJkNBhG3eEnb8NY8NNXc6socEV9S8ebDkn5zRWj6juHxDFgM5R9vvD1cN1udwFkLBn6di3Gr",
  "key24": "4GkF3ydyqSMJxjAj55mki33ENu7pmZzHNdXtD5A1hJyNf1XVj8i6hxoAX1kvNFKaBgMcTT5sZgXb98gHjKcQ2DdB",
  "key25": "5PRFY222DmCDCAcKX5v8eoSgZU8nxGJxwKuKtoQXZacdJ3FtDB9JWbp37Bs4FfGk4kxhZZJ2uJyP1tpustjKhLrK",
  "key26": "3HkKMVkrhZyFTR3zRDBpBX3ptcHzahjKYzK9XmKxEzto3H6UhSaqctFj9eyDkp4jdSEV4uBQV3cDkBKwNEv3kY6R",
  "key27": "3b6xam5WoDNeHvwnuLjXpsZDpsxGDphEPKCHLzquM9JRjEVj3sp6TEdpmAAwuPwLoceQzyLUySEJGuPEsqKitJ6R",
  "key28": "UQMycLDWZ22QhQYUjoGvqKibQYhTbquhCWohhpnSScN7xkKZYQNHHmfTMmSM5kVMhdzyHNU614EHEysY2dvPXGo",
  "key29": "2M35QkCw1VxKfek6w27JzHrdDqQXt73RXRz4hCZ6KMAzKiDbHk2npfXxgshw52PmroCY1hyAjhpMH4sgKBNxpvdp",
  "key30": "3v1fMhqFsgM2ZmT58nqhhYRVUGUy45GKUxpYrJVWKqYeci2SGZjiR8yWif95cNgrbNYcCJ62KSu1joWZRq9RFpz6",
  "key31": "4JttZU8SoTdvsxTy6q9RZxdroKvbeCE525KRn5MVLEdn4kuwuYfT6mHktvTWDR2Cynyt9ZZVWUTA3BtxhKjUU76j",
  "key32": "2xEPN55tUsvDb2N5bWuCYPU8U6RVcxN5YDzYNWVG4JGFqZmjo3FdLLPkRYGgqkxgkKN1eg6wbTDR5vt1shaDqd35",
  "key33": "5ZKPy8QvpYwi6RZB8m6qR8CrLnYtwP7HLd1NR2sNxYi5J7YCku5Gqt3LUrFZ9GDwrNMN7bdnxT1P7zKdBtUVL9hy",
  "key34": "4JpuJgT5aAqqCKrwxhaG6tKjB9YNx8y2wPqNHMf2RG4K3bjGNYmv1NheM8A7ecym49Hjj5okJdcXDrtkJRA8BvJQ",
  "key35": "3uJiZzb4EuJqQQwCf8wqa34pwp7jDPDKaGiprTRFpnk3f7qcAkGGAd9CNzZKg7Az5xVnZcRngrcBMs65Ss84SJtH",
  "key36": "3ZM41eJXHy7kEBZo8PfghyAXPmwPDLrQwkbhnJPfeaPyXhd3DA59u65xeSwq2EkzaPQiWjFUkf5hNCkzRkoep8za",
  "key37": "2h1PpMkpJYVVBCvh4M2TiPdhhvt46DjKixA1ompsHAMxpRqjqS4PzSfmmaJaXssGermQtwbWitZCVHohxsDdxWsh",
  "key38": "21kQkvMp1tifkbB8rThHkX9AN6ovYKXi9ASLxExAcn19Ge7PWVFFLmppMKY8XAyDv5gEEC6RmTyuKnzUXqbGYyes",
  "key39": "sFaebgh3QCj4FE1bPrin8FosfcWqUajTtbcj4jSJdVVEbWUfVKqgBUtLritA38KD5gcBtnu74KHDqQhew5GaaVC",
  "key40": "23fw9rbNZf7vvcTpvznCyjSW8kmogphB3n6buwjeAcGivfvtiSAVhkrbk4XtAU8ch8WqbGnNfrAyTxNiJ1WuzaqV",
  "key41": "uZoKS69nVXNL5tfR89KK5mPmcgRRnMuixWaZzunaDjJsR84WCtwWkmZk4hg6wV1p1DMe5LgNGkrSM1EduTdQav4",
  "key42": "rqs22uvYiPmXSK9EcjkDpf8Gnqs2KPyqeUKPuu8LNNrPEfKc5um6BS8QthK6we1kSpwSevTXGNhAQooH3MbifJZ",
  "key43": "5AmYd4Kr5n3fmij2RZTreg12Vy8v3oNfvCRG8W6JFmVz7kzs4CJ5prtjXZESmvaLCC7FbqdfJ5N4o9Qa4uXj3wX2"
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
