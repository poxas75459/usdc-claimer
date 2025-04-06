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
    "2sj78E1iZk3meuS7qPRTGaVhEZBc3AttUNYDw1WWz1WEqNfDNkq9BpuVDRdGfZCsXNAWqXNGUHaN42imu1SSzN1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TE6177wQr4C7KhXvpdnXgMSFiDYLVuciGTK8RmtTBBKq8gwbAnLaz5UMmW4CUjQ7jeMHuUGPpviLw4tiWfUdFvH",
  "key1": "4GavpGvycUezmqiP5E8eGkU8naKN6x6jDQNxKF11mvATBcW3J75CHgRncRPYvL6xxTcVKcNxXqy5wszS6j5beC1X",
  "key2": "4MqtPerfkdrBXdw8xkLMvHsKBno5GGB3o2Px6h3E2svu1kHosFn6dXzbAHsTxyAg2UoFSZdGDvq7i8zGbbkQKGWV",
  "key3": "52ADE7c1GZJa28zAsxty2WfANSvbz9aRRoXjUZJZAXBFFfcCQgv9Qk5fuNbcnx8RFirr2rmb6hyE6ELChj6N4tMm",
  "key4": "CjYaphzR8cGu7qyZDSKLbMg58NC6oRzoKT6zUeUHWie9J5DTP8VzvTNkMXrzHkykvsaneiFFngCw4CbkAAQb9LF",
  "key5": "2MKQUmpnb5woBruGQxufwQyqwUEJD9hyjenWFKkQnE4RgbNf2NkCXucNuLAybkHGemK4a7m4gkEUS8Xb7Ji3S52R",
  "key6": "APhiahz3biwVN89XCTLtVGXyxiYPqNLKJRWAebgx4TeCHtqYFMiVb3LppGu8GXLMYQG8y9BmeutFjLBY4mFFgPb",
  "key7": "45hEu9RuHDDDjnSKmJURTv7eiiNGCNS6xEV9Pz4ZR4MeqbQLnqPNx3hWVQwe1juc8qpgM8fBGqGZqyqSgE1oAexA",
  "key8": "5rvyUueuV25Ay9E8K5qhTVv4FZnkCbAfK6sWdg1a98KqzHhEr11m32AnQ4xdLKu2kLFV9ZBk67dU3MhQj1LHtnpH",
  "key9": "4hFEH1wNPMCGZYW7B6pxYokSSaj3Wd1yVDm7GpwUrmp8MLswSUHC8fLZrwA8MCgx7p4tm1hBcRMd6RmMcC2FMHuf",
  "key10": "24UQnSAuYZdwXALqrRSgPHFzjKY9sMxo47Pn7BvumvTMqjizsFYZqiUZW9VbaaCEryKApjbj7UqdWdq1WbeaPjKT",
  "key11": "23hGP7Us2yhW6Jp1FZ5qkuMbBcPqnTXKfgwz9YJL7kXbEWhjcbW9XAqhHrsZi7fSJ71mPppDawKFJAAPXg2A1xAK",
  "key12": "2udb9RCjDXsrqqHqmvPKg8nSH7GngABW6GjG11Eo1wCcwQK11b8EETePJZxrbp7SJBZKp27GpSdKLwENKCRYx1NR",
  "key13": "4hpXuiK34Ae7P9R7yuibHLQtz6yZ6fCYaduPTAM9mdvDgBGFDdzG3hm9dAv3WtBLHWqwqNaYWXtqmhozRH8PHNTE",
  "key14": "3EuoUSQoLU8gSPYYt8rkFuSGXcXqZ1nCufWnmYkctKQnGsYVZEkuDbpKh9WFCdQidDestrPW6YjNXwrXRsY2CDgo",
  "key15": "5BuKhLNhoe1ecqtABhqzFxuLZCJc7R7cZyrPH9efUUjZwk7frpBkmha5NWEX8XRY6mWABLXHTM13DUMB9aAX2WYi",
  "key16": "5FxrqefZsddihvzSCzuPe5fAHpV66wraWt5NeFrNYJa3YRKh4gWM4nTrFxkZ1brTFD1fWz7XGwfxKurDxCBQAzvd",
  "key17": "qB8zj9eFxcuA8hUnZySZU191F3oEBYEQDe41VMxk69S1ffu9X98JuiT3mXrxz2egmypsqAfbKzozFRdZZQfSYjM",
  "key18": "4c9X48vYSdAvkWktPqmoUaNvoRxDcno1UUaSkTqwyvaVNwhsGkS1My1rtNyHceDKGtqmz5HKfyjyYsjeKPCbu3FS",
  "key19": "2Hu7RhKHDmeofbZfpZzsALm8xw3tguHSc83s8RbvsJ4TCxoNUmvz2UpifqsBmh4hVBkp9UHmTH7qMiM1GHuBMnqU",
  "key20": "5RCz7ty3KX36j5HqJEVXz19xEVqWocaLCnQGjPpNckunX8puvrb4pm2Au3WdP58NwQZRQ9Cp9skMWgUPj3Xz6dFV",
  "key21": "2grB2CLtNHwtwfXLvbTzQLXYs1Cmvytbb1egP6hnJCmNP668TJPGrVAA6UPU8W5JcSGqHddefWiUHbjqWRTX7Nw1",
  "key22": "63fWJY4yg4GXYPb35g2Zfjd5aigp8PgRtyCQ9AGNPGAtfasDYc7voGqk9DzyDnfF8KMmxViwYrXxxQdvn1dP14zs",
  "key23": "3QC1N1pFTYzb7rtFEvM2v8Vxm8P4kTeP5b9cWK7RgG4mYtpNGU48TqMd6u2nWjFxgb75HHd56kDd9vraBMLFXpYW",
  "key24": "bJLTtBDXx4Qy43tu6rnrDKnXYubzR4dxo9KjNDZWPDfVeQGqTTMJkdsroLzNp1E2XJikwqQ3n1c1egbmo8pH2js",
  "key25": "EgdwyjceEQkk44vJ3E8vnq3Cyu3gLqrJKWdsDtggkwzADBTZ1igtuZSUMfkiWoBUKPcbTk8BkzfiMhnkDUkQ3US",
  "key26": "3sr8qvRokjkrA2VY9X2vsLzxaK6FiQRnRaL5fVFqJ9JbuA9FADaxPGVB6n2Sc5Moxqy3DHDo5gBDErtJqsxymQJJ",
  "key27": "5LEpEch4M1m8rhfAaRUyVH1HZzuaFVB1NpuAV6VP6RgvDb73fT9TWKnH2CNRaWysySiyAySSqyb9t2FHVJ7EPGhh",
  "key28": "wGNNrVLKkuh1ukFnyPWwTeS3bE1SkYYq9E2qVWqWVi8bgaEmp8muajeCvoj8jCERxbhCS6soJvDdgXfznev8QR8",
  "key29": "bqtaizqP5gbLC3X74Jc8GYKN2FPBGcv3qiFamsCoEjwPXo8XBFTdf8CaCtchEYxpGXtMGsqixazH2KijGUQ1zov",
  "key30": "AzoK4ZLuayZo1Hsvmvpm8GKgFNHgQG1G1KGVVb3TiqGdBgHcWzZWUwBMX5CgPMwcgaWtNSKUP9wr8xd4hR3MYzt",
  "key31": "4Y9FRHiWFeNUt2dXfoA3TY3ECuS5oipKdTRwPsTbkDFMATaCj7EV7uEHujkZdys3ex2XDn6FoZUf1HAJBZTfBQdw",
  "key32": "22qU2D6gqTVwbQ1gY5e9cjEgsJ12XC2i1uYoMaiRFZQcurMEjb7E1y8F8JerTNMizGczuzhCBqXvWd17U2RkJ5C5",
  "key33": "2RgJNUEu7n9adNVh4tVUGrxKYWCYmj9asKBBDPxzjE9UYHUE5PKdsm7xXJw9ibdjtyXC7cdBuPZwRxqt4LQXwx1W",
  "key34": "2Eojk6euyN5YuHvsRv6vbvhD3pjZLj5e3b7sU6FhW6WB757RuQSubgQwqrc1NxrNfWdHfeLsC5Af8poijqVMMY7y",
  "key35": "4sYfpCcDxStdXp31GBq9gBJThPt5jBbevfuCdwX4yE7ecf5ZJE2ExkBqYLGKPAnebgBtR2B868Q3mYMXu1su2UHD",
  "key36": "5MB8cRe4utqxosQrgqcd7LkHUCnFjHusysm8XeRNrBid2GE4kuiDC7XVT36dVHGqMDh5V2wx7q4bpgW4RtLiZDRV",
  "key37": "MccJzLeF83WV5euQnPvEWx1YFcq2GrvopXGWNHac244KP82dUKdLdV7YLCvxyvbs2R8CUm1UYm7n9eHR4mMVLo7",
  "key38": "3WuA6h762LGF6ihGQEirteTQZfsiFVHqAboPN5X4MTfuom6Jgb5LuxGYzAXY8868TCWDRX1aNYj9DKfdUtuVrCaV",
  "key39": "2XfP9N7M6BkkFLSCMfgsqCmTjpbqkMXgGNCA896U3WScVKQbHhwtEyrVgfymTpmmqHQSh2VSqzJUJtVXBWp677u7",
  "key40": "L78vp9VRhxCp8Kpsesty35paN87FVmnvMr9iFDxBA5WUS3R6Eo5dz56EFtsKpCr4uQaV2kVsELBixtVfAAVdm2L",
  "key41": "2xtnDNCsEVJHa6b49egG3Gk8ZrNJP6uuoxAEmPM9B4cx7QAnstotgc6D9DxnfCJp8kcNAKSX72MqYkSAEqqnD8Ea",
  "key42": "3sEcQjvdncSk8957qRWh9Ebr8uf7GwHKML5qhp9UyPwZwFXWh5Xf3kPRMat5JUWqp1KxRwUp3fcvhM4TGuFq5tP1",
  "key43": "2nmrn1D238wvTavgVUzPjbzrySSkbCoy5xoK3ywRYH9EuDjejTpHdXAsPVJ9CpkdEzNBz9FPz1x5AzDtiAnQgq4F",
  "key44": "2t5xNRnoN3r2ChgWe27mXfZ4xBQVSNLMgB7TzmsdNt8J4Nx8goUCd7EjLwTg5UqwLsN3HH2HUtMtAbfWjkq9UH34",
  "key45": "28tQTwYZscZjHYgzp5dv8DkdTWt7kZnNmsMytdgcouNVfxN3ueBWerXU3sViCEJrRtso4DKKcoPcHT5zXwDjnGtn",
  "key46": "2C6obwKTzst6Kgwj8aRBjXPMFA623bGwf8rLxNXVPndWXL17ugYcmh6d71R9mvqLJe5WQgC5vaqtFF2tWtfqL3Ag"
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
