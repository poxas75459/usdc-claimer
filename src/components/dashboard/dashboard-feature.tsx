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
    "5pPkHRgzfLNbj5ehVgwsuYAvDFDAEC77NGjgsNMMuXv73nRw76hefZsg2qU4ZqbSZdhKL4Y64WxNSpsvwixTnhr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irLYv4TfVbcrqqCxDg6uYu2Lc8UqVEMmsxdhSYR8YmceCkj9d4Y6nUpjK83dHGFN8XMUyUfma5gFnVxcmEo4ijZ",
  "key1": "3xx2unLptSnSYMGxqgH3smXJfTdwV5s8xt9ZgEG4125cjnH9JyEc37mZhpYQC5PPgJuTaZJ48NFD4DkPd5jzgX2t",
  "key2": "4w5AkELZ7etB35uzR1h29jJBzEn4FhArpvihxCsZcimm8ZPKSoZz4ikcLLRNfck2cJAvvxySYfsJezgyAwY8Wsb8",
  "key3": "5wZVS7TzYDQTWXfWkmo5HofMN6hUdDRL9hBXCpo9x6vt7n89jHL3YK5Lnb6XiWBXvjDPob3YDK6fYvnotBqsZcXB",
  "key4": "SpztRqoGBDC1mWRDFef8xkdL1napjD23Znx8QxSiDBtWLnCTcCY5s7C7RRnnETCaptCfnBvPjUo8eX5GdQZ2ktZ",
  "key5": "qHk24EeAZQ37UqRMVjgjtjKXeFAL8ybBCBm6esVZs71jXU4GDe673SEHVubLRK8AksrhNTSJTkGrn5x7GhFnJAY",
  "key6": "2aR9XKvWXLGPa21G8dTgR7nyhcWmosJp2pTE5f8VKgy9Rs3WvscbWaJ68oXB94GwKq2kyQaUeiSdNu2P1mRfHKjX",
  "key7": "4CZwghA8X6tvig7KZuDt9Yj34aYbXpzL9q29fUCBBsXT4VC9o5xE6RkJVLHKkdqQP9cUDoLBiE4bVMzdrdn6d27S",
  "key8": "3WtqydTC8834VhjpKbSQnwEk6w7MvY7YkkgqLGKz584gnUQoPYFhXwAQzEkBRRFqRzVoWnbgRDx4yRLwZ2FmeWMo",
  "key9": "2iUY4qfaefHGEF5N5qWacDN2fXXjHaW3G4MSa8HBtUEtUoK5WjpgJ5jqvq2NqhArhVjRV23D97iALx8cv8vtsvrq",
  "key10": "2SPohWMCeo9LVLuNuuv3JqfMeDB39B2AQPg73H9Y5ijp8hBit1GwLFu23rJAPuvmFwsX7iK7mPAqHHiSvJe8FF2z",
  "key11": "5zvMKedbqisYtBGJwLURjSKs26yS7JPUuapa7CxsYfyKUbBcms2Ttzo4VYrcv65LX8JRLpcVBvmayN9Pi7pBLqXn",
  "key12": "4HuVGwP4ZaTjKT1gdzYe2Bzu7HWS5fzTJXQwL5XFM1sa8pQFMFB3Z2YwpKToEwpD4K9LNAP3tyifhSNgiyrb9Dak",
  "key13": "4MyTUeZyjapjPVVH9oQxL4EjJAGXTq5v9df8gVZRGSpptngHpvhEfQn6vXzj8jp2BTdtq4ki1KxqqpiFKHMNhtom",
  "key14": "5cXS7xjRdohZNzAvpdeGgJkcW5X6wLgc5EjQK4DSPdXpHbjK9UpFnBoH2uZEE1oHt9PNTTaJYnY4Sby9JCaZuUVK",
  "key15": "5ZthNCs2AkVj5YD8CwVdHiQgwW9nnyFkkYKPYPscEKVLrttAfvv6dZz3pGkhRY6irYHSf31foabpnsh9YrS4b9PH",
  "key16": "2vJhXUTsgb8HhprUL1AR7jqQNbEfxX7Vh24h5tmXopY4ejYhEousGWLJCUhtNukCGp6UzTZasbogXR58JLozcDM2",
  "key17": "4zq19yEKhVu4zgWJNeYUnLrYzQsXMysa37BMzNYKDPeDFL2z92qCM1qmJNp8S4vQaFizSG8cZJf4F49pc86NMiJn",
  "key18": "3njTmyPcR9NrSVfxqjEzb4f65qs1wrC7ZzzfyPpX2VZV1KVh5MraVkW6bxFmbk4vuxTAffP1EB8HwZP4C2h6BM5x",
  "key19": "2jncDprTJMHwM214jz6RcnYmrvNfDcaT3cjZz4CwXUqSP7rCyTatMsSrbNve4BWraNzo9YFuFCaa9Nys4mX1Kqag",
  "key20": "3TwqNg7XGLG98s6FeNsVQ9DDwUh7fd1BHJLabP27R8bgXaSMLHpro486gUbtHisNVBNJczriKUS6LmoBaqXkf7Vy",
  "key21": "3h8YVKcPeBMvS69v6mhdjva5xYMsTop8cmSWzBqEQ6hpXec1fh4cQqDv3cofhHjAeChnqV4omAgXoK7N1iWmYiTh",
  "key22": "5udefsD1c2YHcoGapKrorfU3HNgRAEn4oDeoX9UZBQSC9e6pbQ22ybjTEAKYxWfD2m1YBGiJRfiJQ5KVYQBUjBGt",
  "key23": "2TXBXT2QYWGKpLnW4jPEy4kwtpJYRBTTrgmvUqUCnpmD7AwYJM9Z7HT9eWwoVr7C1w7GAX8JYCBsCZqhqBHYHQ8k",
  "key24": "2qTXvPsWE9WejKbqfLWKZSocWKx4iJw3ou9fjTgvGXtQDPYY49HQmhP9DgzKVfYnY9gh5oVcLR5UWfuWEBrEv8Sq",
  "key25": "4ddJWVVkDVveKpXzhaTcz5X9bAnZxbAW7rP6gWxBMsAuiKZZFTCuhNiC9iUuvowbSeQFi2Atd4MLqsiHqCJjXQ1k",
  "key26": "5kRZ9aYLpJq9QnJtHnUkxfzD71mxdCo7en8vm21rYv2M8QChNBmRu1DJpWJXVam9MyQ4F5CsGtNpEHsSxFEer4hW",
  "key27": "CdamZPuu8g9AjDf2eVoq5dorFq6eW6if97VgNto4LUmxLxu8cSfb2DvRwRFaEzZ3Y14RnBGVLAgNgjDxEyiVhYW",
  "key28": "5i4DyZ5MZmq6z5fY3xC69EjCYK2zMrG9CFBtD7hGfmXybfpbrR9r4LxM9NUeEjxdir7gyQbvwGxzfcR47mmFHNYR",
  "key29": "5ckDzNezmPqG219EMjj22QoNKKn9bNDPSjbeSP1rcGwuRBwkwTX9othe3V8wms4y6E44hai2Vw2ZtNLVGgnwfLqH",
  "key30": "549VZc4vM1RSNodSWtLUHde9G3ZNENRFEASDARWPXsjzF8DvWKQ3yr43rpQL9TxWnTZiLAEQKrdrgyALGcVjv7Sk",
  "key31": "AoBmfb7eJX3SZ2rkD2iELPBHmHUEfEGe4cJj9LkN1DNmdkJE3WNXC53ErPrjyXrjeCPBMLqpjd98aLpeGnxhTBd",
  "key32": "31vYShKqXHdV6UohUASWUq7dsTkrartj3zaZPfHh8FCtS3JnyNN6zBSRQQSExaFXtEtW2ZZ33nMEpTZYKeuBGmRb",
  "key33": "24XbJzW3TnEk5wc8dw5SX9AjKvocTpLMiLvzntco6ziSuEV3fjbgFoCY63m64FvJvkXmnr453FjCvzCpdXAy3q9p"
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
