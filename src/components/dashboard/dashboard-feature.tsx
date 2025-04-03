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
    "5MnQWQMnLAp6WFcvUxxSKsAMCf2tM3dbLQVLjSTqKjhykBQGRhszUverLr9a4xBFL6ZnU8NYjtfnUA57Ms31zPrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSs3VNNuETbgDUYCdUiK9ZgAbkhYEGePzxScWM1K12w1Xxh42QS5NeCyZHmbUwFSoFs1VwwfGJ3QaU8eKsWBcLG",
  "key1": "2vhN5QRunyafywKJ5zMogbLUGktizavWwqKFd4RiiuBjfmzGpaARmtsZm3wK44dSv1JVYokRTBtpHKszeRN1C2ke",
  "key2": "4GtWD5X1hv7yTMhRJLsk6tn9DpDYm7VdPikxSM8rGh9UFfcTNQNK77JHrDHG9UDYVeyxJUQjCodV5Y8kcceWWeq4",
  "key3": "4LvUrXCgUkjxPvTbp8yhvc1s8XvyZDuC7HKTihdAdgsGkp2AS6stqMsXpiosxLQuzgLzGpjpoWLC2wNYAqhAJQy8",
  "key4": "1p6Sg3RhH9e9f4ew8hVKNkJyhTcydZZMm2VCPZCpHTUhcnTfRtFnNNMfRxMvVC3MC5C7vicXHT37QaQRVAAx53R",
  "key5": "2GzpCbY8pw5CnrKptfQEufuQGVyDsy1DGM4B4VX5YGb9Ev4Yf4twUgmNBy2vmsNwG2ngJyC8qxi4Y3r5wbSeN6kR",
  "key6": "1272MpYkhRyLhKAwJePtfEP6beRsgK7VWDuZcP8noN55cTVsPTB4XPP4Uh5SYPkMHjQpPFZhF1dUxsVfZPq5Sq8N",
  "key7": "4jBMrfLvr3TgLgH7vehimeLiQoV9HJB8GX9VCVTgPo378mW5UdmHjXq183xqFkB6simaC1e2Mjbhk8KvxzZ6pP4R",
  "key8": "2rnetwWAr66npG3x3ojJ5pNWJzBhpA8z7fzFEeNrE8dXnbb2FSMHzCNW8FKm2FqQYDCCvNvy6X9oCtGkNBzDk6rP",
  "key9": "2JHkKtt2jFDvy8VmWSt1fKJ3xDjp3NFnS2tnUEYNKx6KdParARCgmxDQSjYs3M6zWrY85jctBRP23hMfyQXEgiWc",
  "key10": "63m7XzNG5rr8tiDhyLwwEhRDxQTcUCEe2EjfSxLT2uMBJnnn1xQXDFT7ZVqf7VdWrNWwWnHmCvGy3LwG4TBKXp1h",
  "key11": "37hBKN1ErU6fRExVzHEwd2VhTuHgadu63B9E48fLK19mBYWzbNqmPWpqYuxGkDcpCAXKsNriXf4qzM611XGLGg1",
  "key12": "5yMQU5xU1RKyniPH5NpuUMiZH9zPSHY5Uz15tGHEw4HxLNUNXVdoiruGaxacYXVVn6XxFog7mZZdjpYvdvD1sx98",
  "key13": "2QG4PxnN7EjEfjm6H9LEvdgue3fm96PfN6TTmcMSK23MqgkPguL7mfHbqnEELZgWhXnQVmrK7cZhT4yTj8ZntpoV",
  "key14": "2SdLk4oL8jiEHTcySuhijoKKp2a6FfVe2u74jy3Vd3CGGbycPvQrFcWgzRggzrV2JFSCc9d48iFCkHiTJun2tYqk",
  "key15": "3Utbejevfav3D8hBGeRFNqiEQNwXGX54r6VYEsEpqyM3CSE4xAeWJGLa8Hi7xSW4v6Cd9hAXumQYaq6oZVsXbRda",
  "key16": "4AW9d9ZjBi25Ph4p1b3ZgnZtvkEscfB4oJUWV5nWaRPKNMvncqtpxgS7T9mEMDGH8LybtJm5PstBau6JEr376Fi8",
  "key17": "5xSBvWdUWhb2rW8QKvmDtDvRF2Y2gHSSx6HEJLrnphfyFL5pTddwC7Mr8ny8N5TDeQLMast8wTZbcgt7YsQgAyBy",
  "key18": "5E72t4Z53USgaJiyPTz1jCERYc6T4xHoHhtn6ihaJWdAJvR9Vs4A5UpBQBHnJhdHj1VnyHn5zhopGgn1JVUxBqY6",
  "key19": "4mP8CqezTHfcqE9djBFqYnXuWBXPxzd7BBrjPVtvn6P439NNfn44LDwgtKot3XKPQNpgoz4Tk1GDhFXiZmRVuFNU",
  "key20": "Yin56gJzWyonwvACx2NxT723oGUsvv7fH6AdAc1XDEB2REXqGqoWiJzZRtTgtqpZG4NkttgpeRm9Tcm4Qc1qsEr",
  "key21": "5eBzzxX69WDwHMmutjTxP8iqKMPs1ihGsvUF6G1XcqdChhi3KStRg2gzv6dNvMxEgZr6yLRFnVFHF8DnSWVyacH",
  "key22": "4ttYZK5RjGK1DD1pXMVeHbnTUFF1sj9u57MgmxQQEWPF3isrdRKkXbt5HugV6qZvUbrSBAJ6gcT9raSGz8kKaNSe",
  "key23": "4oBJJ1jT66Xry1QCBZarDdjNfm2itW3pJVw2E31oq4XyCQDFeqgysLtdYT5xxfPr4Tcz4qgSKnbBFNXi1t2YKPno",
  "key24": "5pyTWZg3fWhebL7hc1ePHCP5ZoqpamjF4mNopXEJJSi5yRMf6ywnVYvsbYfsx96J2HHgpd9T5dSUxvBa3bMfUY4d",
  "key25": "LXNuysGafSuJTKychiczm2oLhhbNzqgdtuWnxXBBY96z2HbjhVzMepZoLgG2inhzxdBRfxQLi37FDFboNdSuPFv",
  "key26": "35SWCkSpqFsMJCNSxwShJ6PRZCCvLHg5rZ6DoytCdD5VjYvawW58QhSbNUGfTZDYNNCFWYkH8GLwNymgKV8McH8C",
  "key27": "397NihJGRDpNvwsKgqMebH4Mp9GBgs9GHEMLF8DTG4p6kyvyPAvvt8WnoowN6bLsfpyqfnRpAvgWyovDtRa7NmFV",
  "key28": "3d5DCQ26iydJB5PatzXYPCNDw8zNwdxDEyMrpZCe5Sq8v64NpHb4kpgB7SPg2r1VMrDn75GE9J3NYZgn1qQhV7X7",
  "key29": "2SkUacT3j8KQ45cg9zPx23cyjDiYTy7g2w1HY929YgaLJLWqiAcKsUTPpRxxg9AyuEFZ4MPgKo4Km2mPTtQ5uh1a"
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
