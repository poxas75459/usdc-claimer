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
    "3UbXcRupbRgi76p4KfXUJhr6YHBG99aMmF368NGP4weFUVMAhRAMG6MsPN3zs2ZNsXNWALJeFTeuZWSjZgNEccYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WRkdsoT49FTsjyVsjnCgyqkti2N1nSqzXSeNyuQHjtr5CyMu85nDZ4TpbL54uju6MdEisaCx3aFAmUKcGgEwXF",
  "key1": "4AVZMuHpShxk7iSDF8n6BrjqNc1cGzTqBbNY9Ye174jVbrpNMMKb79dBMrr2iv9fcqpzuShjWnmb7pTWei9XpEEd",
  "key2": "3HHADLGgLPKbcYmyTCaSYJETveRU5iX6fHBwmw7ZhFEAZGdd22yWTYQVFmpTxVhrFYwX932MPzTcMqYW9EHQg9ph",
  "key3": "66r7pwEPjkS2ESfpeBDfNa4SnFNh8XPpkcWbZDLogMuTn5AbAjaXVrANuRQoSK4gEnWA6d1dTW9hRgW34GULeig7",
  "key4": "56MwypCx8u5ka3RdudzxeuGVVNGBG2xQHSoE9XWtpwr7c9EMED1uNPMSdGKkk4gnLeFEJkGVMPhpP1wtZ6rVWJot",
  "key5": "2puAgQnK9vegpTTgMxvCu1GL3LxkoUFd7kaLFASic2oL1BSiExfGDfzqGaWWtyFw2WpBCY3uJx4vxnzKZjvQNBQq",
  "key6": "5hr5WLfCg7josk425V4BXdtgy87EqXQanMaFbYtZKuADNjMZu2WMiS6QNjBSD5CsDsNCWeFgXoAn6bVL5XATzVYX",
  "key7": "5KWNFg9FVjGWqKxFqntmdyhtqkeDwbB5KMdLgZQ9WUJKauz56e4id9KFXn3w9vazvJpt3dSKW5waC8PuUGL6QNFy",
  "key8": "2vURVWDXdQQBbgRebF1s22ZgZuFNzciCqgmphYAFzGwWRDbG7yQpwvVQfUEHtZw4DiTVbx3Lj5bCDYnyNn8UYjkv",
  "key9": "3HdnKu37UiecSupCxz8THzRyFXKCqaSr4cmHLebRVULFp714rzWUHi3i5humQ9HQLN6gLrEgg9vYpj6pPNzgiqFA",
  "key10": "3V1pNMzWw3j8nJYXFQKFDiJD9dApkidjRhtixuA6t8Lew7ReP4s67kUzBU2uZ5QZMdnHVaDah1ixdNsBuDRDhVmG",
  "key11": "47RsU9iMJWCZtD7Tg8PSWaA3cZdsNvwBAdntbN3jwziFgKT81nE1xx7MD6ySvHsGaH9EbeDxJd1xcwwZscRGSVYx",
  "key12": "2mdG41sszit27qbJ6y2gntYwMMtWxUTEwhY46uRbv8jFTxLyDaeLEgDzbEN9r5cQvF8ohVABh75BUQxRyxQNEif6",
  "key13": "4duz7Gcmq2LELhVYGpJvncmKzsAzFMJ62fY1zfcX4GMBw2DR4K7xWEGa2k9mgjMkZJH7Usfr9Bt3UMipHrcvogi9",
  "key14": "4rq1z5X6dCkt6dQjtUDa4No7s6Gp4sLe7ib8SWtUtpX4vD3rLojypBVuxNmZxE8mGUovzxJU4WLAuPaYtY5bW9oW",
  "key15": "63hRieqrX8KHF15Gro9eQgSqW4Uc1ZsGde1u2KCJWiw7NiMCxbTKJd5WunDiW2VXbRbtPfi9iFqgA8yRAsMjiwKC",
  "key16": "5zT77xCeqb5AsyDtjqXcbJh3gcfWfrbQ4VV6zCf71gCu2ZL7QEWPu2GrtM3YhFktYW8pxkzcTsmnZyjuyJ8gTdeq",
  "key17": "3xnpCqCdMWyzCUb4MQ7px5nzBSowbU5ePAc7271Q7tfDQLV7ZGd1dFDQQbxJmF5y6YyHnhL2ZwTLpZEXzhMC9pPZ",
  "key18": "675kS53YtQtHPEqCUGPbTAvVJqzbBXLDRPZeBJLbrQFzW6xvEfmbRVN2ZLVVWfrijWkfpyfR1onXr7uXnQjzqsKb",
  "key19": "3APqmibDwjPWqWxcBmv9CJLfLsR7XrSGq5CxZop81pNQnhgCUJdHnqJMpQk8esftsBctyusCtttWm2VbhCXZHE7j",
  "key20": "4aTLMj7Rs7PZ67HDFiQJTGCMokUgLnS1WePpvfLKgcksEi3q8KrEdtvn9cRo8rBpASjVJUaoaYbwqXF6yLdoPeiv",
  "key21": "tPkwfLp8cHzd1xucLaNKtMkUoDung3H5z97iVCAho8zSqu27vciz6VnemofmQjtDmaYApafCQAxSERHFELdbMCH",
  "key22": "66iWPQvSVR943SFqjUxwC8rHeme4sc6ALraiNiWpTZ1AoQoJ6BnYj5fcfRFJju5ohzk9n77V2iLrChXFfqbKL4mB",
  "key23": "3zgFtnRsVYKUk7N9BhMBdKPrnRvU8jijpoL6zRsaMuo9RZ4LQVgtnEChQ68Lfviw9KRyyR1W7FRCwrCmZMKCbTfQ",
  "key24": "4WLRrQVLLLiefSUZVNJhooPemrfmUGE5ZviJdQLYcuSoZxqYR71YanLhkZBQJuJkhV9H4q3YqvzuW7UJEzwkM2fe",
  "key25": "5UX1mgg7wT6B6N5ydDQK18Kux1bneCpryxYgqhSRyDH4uwXoHf7hQfoEL7jLHkdkr64JDWERtMP1KDMdFXvH8hWb",
  "key26": "kid4ZBUyA7mdveyY2cTejx9wnAnwnMeBV8sNEwYRusKkDTeER5MHpEat23VHieh5tAGQayY4hA1NfYEFrzTUwAG",
  "key27": "N8RuK2zCCqYQ84KyeKG2X8myNpCTQzebyv5EzZfzBqFRe96iGYnaKdResUJbdGVuk9ZAKCDym7Dgsuv56QNYpQm",
  "key28": "5E8Tf4PMcJwadKSXaXd8nRYv255nBjCHmMQjEq7EvzCPgt9Mk7UyvJoHre59vYEeKFV4JFCCPjVpfH6S3LDXeJQg",
  "key29": "5XoYAe8vKwWd7KmM2SAQ7QBGmaWRhK2JFJf95ie5mPFNd212tesm8P3RgKS1qgLFJdkswEyMMW4huriF4YKAbmx7",
  "key30": "4JH3hCYsPzpcsKHGoKRMLT5CwSFng4Z5rq9VvUkQcd9y8G4SN6cXMHQ91gJ1TJEUFiUiPPeeQJGKdT1CC45PyqTj",
  "key31": "47dAkGbXrmtkRciYnakBNydhEDDEYD8YBvmdfuw3tRsswNc6ZGCf1sCTs2iHpqvjj8UqQmw4y4zhT3VvF8428fKS",
  "key32": "5JG5vRCoGc6EH2dtD3f5S1WGUZvPj24Ms1J8H4p4gK4wtrUeqVNo16wuJu11yVJddGvW5ujGFojAeXYJVtWQT7dL",
  "key33": "5r2WFeusoScD413k3hpfRYpPJnZXKvEXbHd9erQBPEsMEb8emgZHw8poPZaa8DhGd6Z6xbH5xkLMArxcPvw1Pt5k",
  "key34": "5AquxJu4JRzhDkYogisfrLbgoQJvBFXphgshixWwZe1zzaWn21Ea5MAG2ZGbgSvxyvAXkL1tLTE8ftg2Cgb8sEf9",
  "key35": "3swEJhFTPyAotEUahEq8CvjD5NNVcFMtTN8cuvfiA2nx2eB32MFTkWbTC5eX6GPfkzW7wwJrreW5cKk7rkWo5gZv",
  "key36": "474p8Z5oWskweSmXMFDxmp4epAc1hJvCTKsvgLfmLKxYrj1Eay2mCwDg7mDVGmha3SsoV3GhBRdCPhqNMoq5ptAW",
  "key37": "4AN6qQMvMaAVXLGcdSCm1M1Wt5ocAKLfKohFXuTWSaWRkQmBY5D1H1xPwgEXvRbEpuDSPgBb8pQnEskBnRQNJZsH",
  "key38": "3VTZesN89ZDRYg3MgWKprZD3GpHUmi4ayFXfmJqc2WyFg6r9r9w71XmDkXSqus2hmiWvgyocp6XxJer7qzficZ57",
  "key39": "5EH7NARgXpGP3BTiunA1syG1aCYL8Dp9bQ9yD2zkAHYq3wfpKJbhZZ2iAYjNs6JNv1jC1WecBe2QcfxFck4dsXEy",
  "key40": "296yv9dh9CgntynYce7koXye19oaPPF8hF7wPDGSsurvwYX8uSXssBagnC8RSaChc1MYY7WDnnhqbaeBXG42QVKr",
  "key41": "qaH6G47j5QRAAQDAZ1UdhHj6UbGAhLku96koh62mcf9bMhaQpHEYFBUPtffWxG69vcxC6ahLF5AsReSrxJ9dk4P",
  "key42": "53BoKsFqMsUtvy9zCTTK8vx7oQ65buSH12gq1Kaoi2S5DeGCe3ZEgcFCSZ2uX9qTSav9qmWStoujuwVHV4pdtZLN",
  "key43": "vewD89obCzVSFz7TPnoQZr5So7Y5QzkaYcYqq9w4pqTYujkBQhXCLJWGAxerNnzXCd3Y7FSazamoXiGnyXBGTLi"
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
