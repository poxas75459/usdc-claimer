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
    "2uDLpMYxof3HxQFPrHYnwmzPg8jXH1k4HZdtYqeeWFq5F1itjVMRgjnCXAM8SMiwgpvy8h6i32nokxoesZW7Qerj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhFCqWbopbXS7i3rcwpi8pctJMk58CM5JqX41XcjW1SH4WRgBgdTjhzJ5kGJuz8xLHngxRrFaLQw2TLC2K5M1Z5",
  "key1": "5MBXVDB2Nmopbj6kjDX9HU2cUDqj9ZdxAkYgvYYgzpuYR7xpsQJAnH5XDYsPijVeCBFfU9VPZ37Cct3EaqUFWUMm",
  "key2": "2Q8SLbdW3DgNu6EUoB3gPybgayNejZtuyoCkfw31WSzALvUFeCahdjoEVHnjVpiSBpWQHq9jLUM2FhfAFcUEoXcJ",
  "key3": "5DvWkHSsfcFZMHWMsRQ499BJXZw8YyYzFYHCD6SZRms94F6mBk3tdSAzfyEYHXewZHUqxP6Tb1RuLimss8wTLiX5",
  "key4": "2L6mDYGmw5kX9JGPL9bda9vAAacCu4EzE9BjhdykfTLij6z4eHMgE4sbdSHVfSxxKReCsk2mwQB4gvo8zf4ShvS7",
  "key5": "59Qta5C6A6UoHsgXMNkwzT1cLSYRo6LvrhNn3DNRTn9fDKtf5S33DRAHTtJLdxQ1andaSdXiGfHg6tL7DwrszuB1",
  "key6": "5fHqZDgE4qMdCc389D8sEtxZGx263j6zW26eeQ91gYefcML4vSgibhSnJNVPKtd9pPphC1F3zowqTG6XjLsXs5E8",
  "key7": "3GjHTM3dRbxstaWCzH1aPyDHCFpygLYdwboXRWssdNLZZuzFASMACduf3E69q9i8y5AKKZdmsnd9itXtzrUEavLa",
  "key8": "3t6KdwSjeKTLdsgXGkx98jtE8RVCkSGL7jB7j89HvAfiZVKK1ENKSG3AjfjmZ2w8k3djopHmZ6WuRRHyEiVnBx5R",
  "key9": "3pNMprXzT1iRhqLDuYmdw6Z2eNi29kLYopTj6DuEed23dkBHYzkB58G91LmscJnxkRbDhekfLjT1i9jonjx4PH2t",
  "key10": "3LAzvk2vQ4A8to3UoyUajRYDkpKqaGdu9KYW4XoL9uYaKh3MKMNU8S2gbudfgyLdJ3fHtaxqChDCkyChYM3Bk4fP",
  "key11": "2Vwru75qDPbNf23CAe7DM2vYABVj9b2sEhTmBdVGRrPYbKkk9CPhDkCHPLhimVeaE7DY47UgnuyZKUdQ8WW6xh2Y",
  "key12": "2Zt9hRzY1sZBWoahnjPdFg9gtbgKcq7wCqPqc8nzJPNCHTaaw87dqdncexgzZzbyLtPaiFeoRRutZgrwoPz4t4yS",
  "key13": "5EFdi2VC345YbUeR5qH8EnghocZGJPor7iwRz2XE9pw2wT8Cito84GWAZtRsgALQXUUbevkuzzf6sKas5Qibmvhe",
  "key14": "2c93auM1qftz5A4oCCmP1h4wPxmTDGwCGxKo6iLn4M2wC34EC29N6fHEyvq5NuHikL3sosoinzyqwz1Chf5FAD2d",
  "key15": "526Rxh7UHDfv5NhqWTyisUWpjooWmUjmMThYXnEZXcEMrtyTR7orcW2zSaFCYAPPZ3yjxypuj8nMgvADCanZUK5",
  "key16": "2KuXHmDTvZoXQjNyVvhixUbHCQdfSNqZuDQtUfMS7ocLYZw9DS5dTvkUjXTRk2Xyh462bcq3QeaADHM46uBoNXAT",
  "key17": "3GWAx1dCFMk5i9Lrd3BGBkFNp9SHb6ixyQmZA6W7pHXfYxMhvcf3HNaVEWdmDwLjkGMvMtMSKh7fxMWhem74oetg",
  "key18": "wJS61FdAhZr3R1RGEYA15WKXs1Lwy6T52ffTrptSqA4ThQDt2BdyPfky5NTBEuuqyqHv6cMrBFKJZf3Jk3SpPvQ",
  "key19": "3iti7HK4xKnVRyTi4EB1EkNE55XfmoqZa3731zCgNCAHQnRMbgLGXKrtAYq4m1eMreFm6GRnf1TzaWBc135hgyzT",
  "key20": "3d1WJVuNNceUDRKhboQFB9ZSNHYDJJGaN8qgFm5sYT5bD9tVA4XisBP36ZeVKLLkqZCWdMLqQnz4Gxciqrq4RKLQ",
  "key21": "PZpya8x3sPV9FmpokoVaDEBJ5YGzbeDybFjnfPun5vyBRAUZ8W77HYkTUCoo6NHHGRL8Kx8NmNYhspqZZeCwkEC",
  "key22": "643AbjGv8ZcHsFQfkxKvtwwZzvhkjnu1hzBR1HAruSQgwPu3mRzhPJTo4ZLPH8GLrfWWxrgNeQQTfbLrEn5fPwST",
  "key23": "3CW6rvXpnLNNXQeTCSQ9mAZNafYhX7PRVHbR3nLqgKEiqwbSFSVgBwmzZHBvuRwqhAxxcSJ25rikWrTa7BGexqHJ",
  "key24": "4HSRofF3jG1KDubW1HPgExtpzAU2i8eFyLh4Bq7NPDbNmKR7CzggD31SywfDpSNe6UzpPcwpzM2pMedcfsTwTZe",
  "key25": "5djjUjM9dqv7UPUDY6kTUGkgKq9WLKiTnnUJF8G1zNt5N7BskyhuzACiuURcafsQvkXgGwHoWLc7UNwDADBNGJ43",
  "key26": "25etcv8YvLQSFhpao9yudFa7hX1C71tVUw6s83xYzPDPftw9ErU6D8XqKWQqKeBx9prqLzhja7S2kRqWVwUiDbPV",
  "key27": "27LRte1yr57cg8XzDNvZyV9gt5Cc9y8MeX9zjgPhsCBigp5PGJ9YuQoxGuHUcVMsJAy5me6UUGHBhSaY5xK79WTe",
  "key28": "2iNc8PupPnvXQw7njxHkwq7t3H5jtsfTiK6wPi8ub1G94YS8nSPYD2jVj6Sn4jLHJ1U7uLQKJgvvkTLXTzoV9Mtn",
  "key29": "4uhcF2E2hFxMjs5RMiPKgpPkH3HuPWT2ssbBeKpGZGnhVXapqaCeSkwzZYZEZrXmBYN7FJjNwJg8qKgr3u2jWe9U",
  "key30": "UPXDfBwMvRi3Lt4ANxWVQVDFuuJnnz3sFTvxFRVonR5bWjo5qGWjdhpa7pb4zvvo1xzpMqRPi3QjeJ6fNMxzby4",
  "key31": "5RHFwhLgCCgujQ2xbZ26yk6C9fptoXCbtcfd6pBhY1Z6xniJrtFvsHp7iercoajF7FgyTfLwpgPimZPuZqkRY922",
  "key32": "5yJD4KtwDoAu5AXSziyFfrhSrbEvjVAdzYEs4Ux6sC8PpGaKwpPJtzebqc3Advn65Wrf6HPHdevpQdd6Y224mBpw",
  "key33": "5SfREEqPnpRkxxwYmLHBQfqn82XvfKY7LFPSscWpzqr3HV4LPFsujnuYU6gYAK7NStLbUvZuaCHYFgEv52AKDYXg",
  "key34": "4sRVGbejbmm3NdMoLDLyBerXqU3x98MRQkbNQJJAPzs44gHgYHngPcAGPLdrWbb63UWUNQegpmBVdeyUwkSeEKwQ",
  "key35": "5Pudt8QnMASvF7Pogbwek1EDLvpXLyhwtfNerfiGwbKAJ441T7pbvWWbMH4o6g3vDNCJzpgjqR1XCWLuCAGoKvba",
  "key36": "2yWHh2WPxUMRSpZ8c9oY4PbJyvBKpe1rQVUBJ5Z3noajdc6U8tMueAk1G45eCdX6U8ePPPEYYYCYvjPW9vKF6K8D",
  "key37": "8dVBi388EM87WVVMrn7oSMgdgmnm155iH87Hf9wHgsAFFHYXo3NfWP4EBAn7VKQqNWoXpUnmoY9pHprGhrcAnsY",
  "key38": "nW9yBpm8WeCZhjjwbBpbgtSiYzntseth4nvGXLgCscYvbcaNvRQYcym7uk7othytoSe68zuCCoyv3eid6kitk16",
  "key39": "3DEuaTy5Mu5ZCCkWJcmA4tUGmdHmGwMpqpqqeSfNLRgSneML2UBZkE8hRBAPHx4UNd9x19emG1fLzg921gjFh1Qf",
  "key40": "42P2wxbsTwKTchyewuPz1vAUsEoV9UvfPqWC1ZRyVqKYy6JuaVjTbpZZEsAPcfyU7HPBzbdVM4QKFc31Ygq4mm8c",
  "key41": "3FftAD5J5htKeZ5YXG5hWA1QLTrAYXM6HJpX2zKzutNUYeFVrGng3DT2hERJ1A1Jsyp11KU24bKL7uFDZAiDQdqx",
  "key42": "3NVzGvhLJ1ygdX3Fvfvk87S8DgRXuLgxvnfzbdomgp8sBmcjR3KJ3zPRaSwxrGVqszYeAtTCFs7AU7NthKyAfMJv"
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
