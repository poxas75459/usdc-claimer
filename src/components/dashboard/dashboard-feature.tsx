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
    "2rhpcDKweP7twGnv8jpcvYPHW23s6VzGQEZ1XUgTj3RPQx8gkwRk8NEWRMWiU6QKoiKdU8BuwX6mGSHDidhRqmyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678U77LUdxcjRJyrhDg7VMuUkQnjpc13VNDFRmoJbXrzySMLZ1dWzVCNGdq7JdNUfPcHZS9FkAYBVN5T7qchXS3G",
  "key1": "5MiQ7TkY8UUdbHv33tALsJjVGenTkJuRSEywkZf3treRrAzdpbCq4jsPBa1mMM5xoZYim6o4hQXyFFoya8RmBLsC",
  "key2": "66Vhq2p7HKYwLYjSuLnCDEsPKk5EvzhUtWB4yUCjXNCycnN1d8QWejx8AKuv3rbapXNTA52CTDxNgZWfdVqB4T4u",
  "key3": "2kPKtE1wAPQcygyUniNG6JhxJwRFujBfKqzXDm9USBKg78DRUSSAwyNdb43jt28XUPSry1nG7ezKDk4GkMeCkheu",
  "key4": "2WP6easZkiWDragkzG78BsNo8oNjMsQCjcL9JnUMTDHw52tsbnp9ieGV1JneCQVeGRB4ddMpjWwTu4Yp4WRxUJRM",
  "key5": "5nHorPHbL7GbXu1KnxFqTFegBmkArJ8sdpEPDQTe4is12BY5fzyy8jCDZxut5vuY6gpCxY2kypWmEA2mS6JeJQzk",
  "key6": "5LVWf5Dh68UE1AcSYT3hgvShaZogyAYxa1W93mdkkAfGndqbunG8vWeqEGuQ7YX8NuEsVzvNc6pjo4soD1fztLGP",
  "key7": "4u5EB7fWRo7QtdsWKoTEX6YuLXNV2K54JE1kmyvNvyWBJ7Lk2Dw4aaoo5JaHW6iiUioEBtgZLgEYxKvu34rR63Mr",
  "key8": "5h4BPxbbXEhdVm5XY9RSDYQ2XskxmkrnPSmsL3F87vJJD5YeqaCbNwR51FRaHg9NrPLX5BFfqDEmynaZcY7rG579",
  "key9": "2enzHqsxXxDwqBAgosteTc7RunZFPjPWFHNNesoqoH3mmSuCRGyxsQfT9vGLNqK2cEZyxgLpk7rfjsghbxSAwFH5",
  "key10": "258TkhtzEXcTYy2pUJ37cRPtTVwwSgCL76T7h6jDENbRunz8qEBdmSdq3NZXwtvLGBVjS2QWfH8AEmFV6RFPEZHL",
  "key11": "4tcT91agaDwfqgx2gXwzeKUmJjxKyt7GW3ZJjK8v9KLEJHKq4vhHeEoBppQoQHfC8XvvvJ8hDffhgibwaCfNqFbm",
  "key12": "5YXMVcPo85VELhcfkV7z8DLpJuSsXH2JGjGsVmDokr35wQx7UmnGa7APyQg8Uv5Jf9iYTYHzuQWJEycTv54f3VTf",
  "key13": "29eqsab7ZPLL974CV3FBjcpNzQGM8SbRDXwsfNy8r5ycjmMt1poybnMqmox3C1inZNRDDzV8UiSNhEz8qXc2QBTF",
  "key14": "5oN9GxvLEkNbG9qfGLYUDVESfF7bgX4FyPeYuc1gteNoMeEiokBPMuVFpimyb1GH8kUGaEkHxgozsJsPCFY5vg3t",
  "key15": "23FXinc35V1CwkCvRCx9wnhm9wqbu9KF76Re7uuVamvjJZZkva5WBEERAffzBAFLhSjrnymsz8CytmyQ8M2WgHzP",
  "key16": "5BQUPWdp3cA38SEjGtB5H4YEVXsT7wpuq2TFxHQwxtcWRod3v2zhU13goH8ZkEEEuFM6LwFV55HA8A8FvZaoVp7T",
  "key17": "5UaVTM4nLziGUVCA9sUF5yX2jf6Mf3UDW7TWaF1Z32aL4brVkQR7NB1zWsNAMfF9sNSUJMMjL4roFXS16u3YTdHp",
  "key18": "EVDugadF5y2JPo2xE1tWk2cjbWZYsvB6uyBT7TR6BcKns4mqL6nG2MHRZFrdfx8E7LvRksnALigdWjfmYeydGVb",
  "key19": "3SLrMi4GWS9H8b5o13f5nJckyqfQHfiGNkT48ZFr7KYEpVSgjrkZRkgLLy4Xcw9Fz7tzKKVgLVLHbdDK2YtwBYYd",
  "key20": "4BJohgYE8EkL2V6MZoUiSeFnYXq1rf93wursdoEjwV94Eh6VT77w2LWqY3979kNt2y38QGajohZ6Coa6Qa7pE9Y3",
  "key21": "4MVxNMNk25MkzPHoMj3swDZVCmJFAWHRqdaL8eXD29daGQe2fq4mtL9h552vKiQgKuNURgY2znVNX8iiG3A8HsYk",
  "key22": "3Yyp17rCs9C4xrc2eSYmAo7Uv2TAHJPDcLn3biPDfFaCBBger6sXf6yhRadzMUYtuHXYpLxWrGZWxPYgoXWLQCV7",
  "key23": "3fQvvLUD4jovotqSziZdsAy8scDsE5NqwsTi4Fj6yLqMKJQgETsPfijU4M83ztkiNs4mKojwm69FJrGpiRoLMVMh",
  "key24": "SgpKaRA8u6NCKctYRoL2ZShC5W6mHkK4qdJJ1kzeBRNPWQepZUZUeHFqSHSziFBUckvjqYE9eTLt6vmyVXg7xMK",
  "key25": "48xa5k4XBkhsqm4yhJ2ZbKtfxDbHzfZjxQcFKFNbRtjdXvNMBwaRMF7xhowxpjqZ7T5gcyhuyYFfnvH7RJkyKRCN",
  "key26": "35nobsXkHSLmttUEXEbRQRSkXDejT5kDtp7mbC1cn3gKxenrvmUfoceaQTob68eEjFYucndkLYsqAVbnh6h6wj7X",
  "key27": "4fgP6387bxWndPUujdZnhkKKi1hnuvtwnFUV5Qpc53S41Z9e8mAm96MB938frBC2sbGGv2YHBrFtN43sd5sqL7uS",
  "key28": "2NXPNg2NnKUFiL5YQbSah9j1hvMjsdsReAAk4tFTmXHdTEQczGAa1BQCxhSXguKUKXKtCjJiRAuh8EusBz8JaTqt",
  "key29": "wvu3WwqnVtSLKzABsvjj9rvja7pVZFiJUqtddEYGPTiQEVdNDqcX4wDy1JrfVs8HyXD4FxZbddtjDDTGKYUZa9L",
  "key30": "4znPgNR1Md42hSRPosJTHfMxaR5ZBu1sH9wWcyx8GpRFiGh2qp3f3Pm1V4mRDqnRwFuX7vTaqyuyqpTTCgyg2dcg",
  "key31": "4afHD84EkiDRVq3PZoU3SXZ6HsfnLLw2he6tyX8NLUzaNnFSmnRR9PfsHUoYHYiBZJFqpXqtnMCxP7SgcBqbirj6",
  "key32": "4VgoXhEvog5nmQm5coCkxJ8tjeLpRz4GDgigj2pt1BXCGD9NzYy2c33DE3y6VYqsL1fxBCZQXn2sMk7Z9WCirrTG",
  "key33": "3L66HntmfcBZZK5DkBkd2to6HdqpNp3YKdkECyoRRQMoHNa1ufLzr71CHYCsR2k6RgcMYrrXuPfcBrFXMvtxPVwK",
  "key34": "2N8mT8Ueii7DNe5VrGVGyginaH8XqctEupeazvZBKyzdnKgPxGVAGBEy8BgfxSDRnr5Qxb1YppvT9w3F7gu7oVBT",
  "key35": "3wFZcX3SEn1k78vyeNMZYDu2DhT4cgDpZ5fTd5T1YQp5mN4uzUXBkdwC5GRCYQ2taruRLbhtEWay775UeuF7nd8v",
  "key36": "4uyTEHbFHU7EQ8mKcnm4gP77ZGadK98ieV9xDrunxqFCaKhWzKF82DbPbNsjvsa5pZydPaed2jBsPtwLxi3Q8SNk",
  "key37": "4Je8BL9QKRiBQmyVFwi1EQ7kw8FKcZRPRnqeUY168VfCJTwXMY8QN3LBqR7FEjvLA7fbq1iUM3BjHpaXR9nnFoZM",
  "key38": "sd11puYmxXBS9kJXeZzBUESDLz6aV6J5e2MqyagdKBu8zELtxe2Ck5tcgRBk8dXZAFDQMWyxdxteeMefCgcTozK",
  "key39": "ziVcFGgtahFt9j84A3tc1XwpMPZL5vjPtepsFY266evfMXvr9YSEUpDGgrF83mpmLdbdyRnGVr2pYuCjoynd8A1",
  "key40": "2xGN1KSBQi2pQckX8Dj33SCHpRT8XrMhJWjb9K8BkhR4evbuqHYP52tavpt5Lejr61nMbpDYjxAHsrsRrQaV4kEJ",
  "key41": "2rAbSi3obhaLQDs8mzqhcZpTK4TJN2qZTFcDKH9iASx4BsA3iJoMCSq1rcz4qUj32CaD33VZbm3cnXhBQCGqUnD3",
  "key42": "2gB9qvFeBiENMoxBkB55No9TZXV7wQwvaBUvaSV2Cz4VN24gWRC8t5cs2oufsG2N892vDxs3oYMmydu9xEsWCWwK",
  "key43": "4ApsmnKZu3kWredLxHKZi5y9K7NyAvzTGuXAEhrrQ1Kcfs9JtmdAK58fuMa6QjZ2H6sDjEEebswmwVeCsVr2aXVb",
  "key44": "5DCQo3GjTUWykDT7EMkFkuY2UoYUkocUCcSFZgkQ91efJZ7xzLEQ7Vob2wWmFqXidcfEGggQuFNn5nZQfVxc9K4v",
  "key45": "3a4HBxAxHdt9ViNL8vGY2fdLMuY25tFyD5GBJn4jfyX2imkvvdkkcdiGuVsU3yqonXSHvjdKwK1LYK3wSFPmRNz9",
  "key46": "5V7U6aAF5uN2kSTf8esxcT4BzWDYBJgKwaTWJDzrhvdXts3eUECKcprtM8r8B6Do5shSihNkTj4TuMdd2v4DBysw",
  "key47": "59zZtvQ3hiZnmdG6C9DHiUK8xUuyqideFiERUTqSBsdZ4Wkh1RmEooD8gQixf93ruzBWju4sAa1J9Cs4SRzUYe8v",
  "key48": "21KY6NGv4jkk3DCZtBs3TazHNweYQFbVpJhVjVhEPLw4bHrTWKqYSi8gWELtUkxnit634DicFpuMRzaNmZ197QoQ"
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
