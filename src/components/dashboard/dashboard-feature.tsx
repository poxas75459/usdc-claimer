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
    "ouu97mxZr4CoCVW8Z9ux1Tsgx6VuhaYR9uUBMkPfNz1LSuhBi3rwa7LM6ocLqh3mHbV5D98R5E3N3G9q7aFp5iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTQzZbkEPxdTfe1Zc2f8b2hQ2seHtnbG7hL5ra6wuMt1D7BdBwXcxmFT9VaoZjgwCY1rhauFLKmGn6tpbJ4ae9U",
  "key1": "2WesQGnjTPaqKaLv56SKWnemTUhLvMMuNFFFRsUU5wiwFg8MYudD4WM3HV7tKdWPsiEYjteAAguDFFYVG1rQncEW",
  "key2": "zsuVdZXFLXNk4u2T46ize4pe3hPh4kYAdpv48wDazodvbpvzZRDbsVyA568K5dJvzDitWVZk8JaPgMBA4qmFRyi",
  "key3": "2TQEugtCdmmtreQjAACQT2p43JShjWmSBixBb1SycBZGsk44QKHgFb4vzePpXbsDrx8bNJaXBw12mN4Mh8RS8G1j",
  "key4": "3Vop3MScUkVo6xQ5h2W77vW3u9zECeXCXHHgnxaoMmZE5S3deaDJZ99tcGW5ZawBFjC4AywfyTqw1KMfZL17yAHC",
  "key5": "4kTUoi4aNSwLTMqLQdpiefV18PnLPvsGQ6cJ2yo2XXDYmfGWDgJ8Qv3wK8wYneRfr8EwUz7u8Z66FFEeN2z5Q6Sg",
  "key6": "32Cgk8JRGa2Mwzkeeogdwx3QEGuuWx8Fsu5WeGsHQe2MgMN521FNpxVvQqLjW98ZfB72FxnGA9bSubqH1fdwjRZJ",
  "key7": "4PQEZvMr8dHSpCbDCNHiNkxCjjTsb4ZdH6k3SDnJXzRTrU5HNWMzUDQPipJBdg3rbEvb8btEWFCQAr3PtrDn9NCX",
  "key8": "2cmzwy13XdYDNPfn8p2JN8Uk5Li1pQ7oxxLPEw7fRm5vBjLubP8ufGsTb2WXHeRTgMoaLf4CWN4vNkK5wzJ3ZRJc",
  "key9": "Aa6cBA4Y7k4dSYvE8wRV95vMGTh52vSMsAawEjwd88cThLM4DZpo86v5wAEodvAPqEG63KFkETtU4QbeT1DxVx1",
  "key10": "3BdsHWAG7Ei6TkyuMkWiEbbDEwiwoQ6kPnXESMEUQyCtA3Xmqwivwknr1fbhFsiBWucBV4bJbrmhZm5Xz88HCCet",
  "key11": "21u3ofHEL7GQsDVnV5bYAAiw3jrmWTBUwix9QwQ3swuA58CwEv25CPinsyytqf2GGPddq4mjKWtY6PQ9Gj92iANT",
  "key12": "65NAdjLTmM7W2cteuQVnpwxzdKHa1MLW8zc4MJBkLLToHYwbnt529gy4ZLkJ1WR9ru9A45iNJ5R2KCLuRpEeduY",
  "key13": "2GbrbH13MgCiqbYXoRfuWbC44ZCzpdXYNvo1JM16tpSpzKsVFrYTrXbYGCHG8msJDY14H2VQAdaZvxs81k2Rmk6Y",
  "key14": "52kiBYog2zRqJDyKX6ntyTaXMNG4jSaSa885LhyeUwGGDM2cn97inuHoKWnC1jLx6mkRt7xgjqrxgGTR2zmmcuB6",
  "key15": "22PwPHhe3Tu5z2KvoZ5BVJ7x1V6E9xLkAdemHn6AVArgCuRYNcSWMDKjvuRDP4qaSTQoAdWf5TWUgwNYJ7Q5wpzf",
  "key16": "P5qxGFzvkW2aNfisNHTHpc7Rzef6qPYci7KBBgVGpWfvKiwKLXFDr2Qt9fJk4Bs5BB1K58HGtGVNgXgQLcqxZKh",
  "key17": "FZ7Dd3VzYyNnFjpBkk67qKWVV48h2yKnyTA9u5a8pBjKB69uGsCRKY4qwChUMdd4Dm4tpGXfq1n2RN7Hngg77a5",
  "key18": "QF7beWqqUU86HPxUsgiQd3V2paxZmjeCAquGzpZmpxnPggAmfjeWpLJhv4TJzpZraF6UmwiECZC5rgR1SzaogmJ",
  "key19": "5vj2N52BuFFHLQyewyWsYdmjRM6Ds9Bv5Va4etEZRKBjFXbAMrFCNewumrXvcNMqE562p97hRExQWyBDz1EXaxho",
  "key20": "5Ti8e4k46uLibT3Cecv4nz5wScohiovUBqVG799C4ktXufqUSfMUnUVfXnqGpZau66kE49MEedpWrW3C71BrL9Qm",
  "key21": "4vT1p1GCPTYFhAVCqf66njwatyuKdw2vMXMc6wFgVZeNRok7VSyKUByRsq3zhfCazFQRY34z5D4Pa4yUm4swoMF8",
  "key22": "5tCzKsWFFFyTLxpYWvYndVxGmA9jxAV1N2YdYtzCJbaDCoKZYFyeondFUSA44whBXsGqn8u4wjapytp9sUkCjfBD",
  "key23": "6D3YZDiAHKJr1BwXXgCvMJZTcr5WhQmHNYkecuA9YUGup1gGMvVrN914Km5DmvMgNG5DWhBkoBWbg3vuSQUssNX",
  "key24": "5VENG4yZj1prrttg3rQC36HeW6kZgzPMCmjUfsrmYmGRHjM9bTfcjeEEZA4wccGYuRpUu4Pe6BqbuCXiBCHxC9Mv",
  "key25": "tCoqKyX2NkZWiuxubRYUtNZsuDzNXK8vwq7uhTrKFioK1eGDSuyohnqakvSsLbCAk6M2r4Ktfp8dTw5yT3ytGam",
  "key26": "2tFwsfEe4YiuxmpQxv8HVN8q1Eqt72prwFCPcZqmmZdtMsc9fzGnSuhPqvJt6ecnxrr6CxoLb8Dis7MU9zNz55pU",
  "key27": "3Jq5qT7YEymvo8okiRSCQ5Bzmav99FCaPYEY7fWYTsnmZDHxm8oq16G5hEkbNjwfMjka2WvtTqJpMuKPRf181kZ2",
  "key28": "4VJseLNitF1FXK2N5FptvkSxauo9z8dzzgjkbSAypVVbHUXr6ffob8uqvTSdDDRXfPZbCcZGEwsdyrX1TduxLJdL",
  "key29": "288QgJZPH37pT76qxTCwxbHqm6R8jNw9iKWxjqDpEhgZEEMevP2A5LGWe3Y4MTLBeiDiUqFAZUc8XkC6JLevcJBr",
  "key30": "4psLMhmeZfmzEH6cPKU8pUVXxaK6y2QjJes3VBGN1oojLy37P8MmQaj4dthdNKjuHUHBdqapCnZkWrdCH1dJFwJL",
  "key31": "2eswczQ7K33uW3XJcoLgi2aY8ynywo9BZowQHHrnqTpBG1txLBXMKFSoj87B2cpjuWqT7tSpEyYGWqRUctru88Rr",
  "key32": "278zNVPXHscAQR3B43phHdY2r1FCvcWjJExFVrtzDdccb4opGxNu6cuKaFGW7jYajmu4duE7xZhQJzW5Rg3japQh",
  "key33": "5bVdKgAMbujWcxBEzqJKyj4BJaMX5JgzMC3py1mF7eYdqaBMVcQa2scYR25ThzLvrvpR6yk7we7XXMLdWQwsBvkj",
  "key34": "5GoR8pAo9ST31HC2JC3g1Sfa4x7tH3cEBwfnMFVYcvKFbSDVHyc276SYU5ZMZxi5PwvC8BFgMPar4cart895wjoB",
  "key35": "4K9BNPqupjgbXJT3u9YPkAK5JBmR62UREW8iieFbbtQtHj59o18jyjqof6CefciqrvDXqrYmDFuCh1ZuRfDJbm2R",
  "key36": "21WEVWfRa8E2KJRuBxDmZipRG6mEihA2L5Vnsyue52pUqGnHiLo6wTzyH5P18LAvfQ6jv7E1kkuXKZf1Uc5TJUPx",
  "key37": "24e3B36V5B1dBYNVbwU1fkEXK4H76nFuUTWij4ssPZWk1YbX7r1TZyCP9DqeAQhzLYrXYXS1Egj7RUPMVE4jWrRj",
  "key38": "3jNvB6puB8vjYpwiY3MwDXoAtis4jekiwR9eeupXoYhPr1zd3z1ynGL4T4yU5rAx3sL6Ejj4LVwXdk8NVnP19KcW",
  "key39": "3DR1dgxrbA9ovpCHsXyXfoEE2R7A9dnJu4GpwTmRictJxq5ev29mGnN55hozXJX7JzyqDE5sQ8bpkfqdssHddwPx",
  "key40": "2wn7L2FqrLNsr8cPc1N88bgjc7g6t1VNWg5ZghahLVEv2sbhBvN2hhBzV8PqbHEsnR9iyrLC5xWuBpGQrGvgpHNx",
  "key41": "3F2PQ8QCnCPSzw5HrdFy2GFzJkq2ZqW7f4WggyuxXcYcQ4KHyHFQto7kFyZQY8LcKyQbmwR7xA6B83A3P4N2fTYN",
  "key42": "2PX3XTVggcrBwKKjRELeAV72SNFQUW4aDjPy6udU6eeCDKtXbGyC6jBG3MyXSEHdUkHr56Mtwf9LxmZUtxVvbEDR",
  "key43": "4CQCK2wCaPdjiABHnCNf1Tm5vLDDnuGrL8mrgF3bmgnrrYh3MTewR2fbxQSttfGGV5URVbAuVBa9XoePgUmfm76A",
  "key44": "3o1XoVqJGok19KsxG7SdEW5vDJL8qaCixUCKkTmT1raoQ7qq6dYXSCUX3rupL6UBdZyjW454gUvJGbRiwtrNjJt3"
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
