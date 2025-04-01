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
    "5Tv6sKDwLRMFhbJkm8iiyHf2jwKhYu4fNLgxDtn4qpfq7CMxJn9Nm99uFGdX57zx2V1mYutN8H5RpfPDmQSvta5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUkEgzyK5wf6arqDmetYUd9Zjdsjy5zUYiSRn64JEUQSRKxtHiaiidp36Vy83t27RsD5sU7uEQ2pT1q9hBgq3vH",
  "key1": "byGr6niMvj7fstJuTzjeig3DZeYkGwTDRPypAgXbhuy6BNvuuyteqHD9hBeCHeKCW7HGUzNWqjbXvBfFqfnj1Nn",
  "key2": "5Ab3dDT8NuVvDuyLszA9fsjj5Az5ju9PaN4FdasF8q3bhuZYffZaF7rhmh9R7Vg2qPEwBs1YAtJ2QhGRinjE92dY",
  "key3": "xCxrye8mWJxzGJJ5g2tEft7se1BaMbeEW8JYvhicDqxprh2ga1diULYSXH5xd7RKFyNRwvRQnwauonXdpBogMFr",
  "key4": "3nQuNULxmtBxmKQbF4qaiJns4xAXXEeENp1qpehM8hGh9SQ2sdYLqkivpoQXSyCTVK8w8XGWjHvnE2CvKMuqxyV6",
  "key5": "38Sdes6mJK5xNQzL862yPKfJribRdujEXuj9ZG4d4PnGLU16SbLNXdnBNyqrSSqpfDGyekwVUd4LsudVNYcUuHEL",
  "key6": "2wTAgCdmrZsNzxwvka1XTfSuiVuQEAbKjR3494bE5uZexzmzavc6hGVgkbxk36dLMMWh4v7NhRgndspJrDXjAWdx",
  "key7": "2BzaCpppuT5Gck6jeFLx5LTXxDUrW1kiRdWR5SCVVYT5ARF4E6fRBJiDXLGKDczreQgzYsC1Pe9JcQytykrWesJC",
  "key8": "4B7FGakDxFhMeAvqMcTBJAGJSbsMbsvzBvctdpcSxoENvi4zwCHqKThkGLx8LUEM1zz4qCQckL8jsuJETpwos3Wd",
  "key9": "j8iAQC6kLCWkSVygd93FaoCfxen8Tj1vneYJkaSNvedmkTZFC45vwEXTjvgw1qfteon3s8kFodes1vceuVacaeD",
  "key10": "128538Lxemrs8eHsNcwhBDx27rArs1XRmSzkqxUepopKFiDZVNLZrQvzcrfuCh5xeQw3KUR2myCe6FY2LUkQDBHz",
  "key11": "2cX9hbQ75kNSUitSMtxKgFM6cPQPoNQuzPrqe47Ub2fSiqmYC2x38kbBjswC96kNCjmtLb63NrK3JKth1EoJiLvA",
  "key12": "3my654Yr9Sn7jbMzEidKmSPeBEM7YSj35csruC6VziBBzGGsLry1f6eAMP2XdjfEZPii7VBKYMeDi84uvwYVikov",
  "key13": "44n3tmdfGW2yyqesgdnQadDZTGGcLsH49BiZ3QXHHSVfNBHpH1htRmriraTWoLWv5chgGqvn6jjaRAaafY9ck6Ln",
  "key14": "4r353aYVW7R5Qb9pkSkLaE9TKNhYmRuxsqbCGSk6td2rvFiB1q1MD84s1XBGTxagDzCLmzUxYSSZrod6PVo8Beob",
  "key15": "37myRCE3RU7j2NmpAyiKoAUBBD2v94NTHYtk2p9sufHX3dnbNJj3QWt6jFjV4YduEX1Ydk5THCRwG3iFv77FND71",
  "key16": "5QHw7fTtsBn7anhr2siJTdJutKchF3KmWiwUeMvG9utSF8LR9dpwLRoeSyLdxgm85kuWPBEiZJ2HsJ9dkvdwcJv4",
  "key17": "3gaMbCF7LRcK1aSDQqBGuWHBPJ3xaavDUErgFJokUC6tSsNfkCNY1oPnyaxUq2NzqVFuR9m5Vv1uTznzqaoERzWS",
  "key18": "rRSZmXDrK1dYKr52F94BNFHUQf9nEaV6XZVcTaSdHj1uN5zst4EFhjYAVo35DSP4Ya45BbkKw8HbTnZKJjdZYmz",
  "key19": "5sZMMTjervCchZkzF8V9qLj2Vk63CE9u5J79ZzrvjPYVhbtQCZouVyqJSseKEmTcez2D25qcERSXkto9BLHNdhfu",
  "key20": "2PfrmxdBCsq1QnfByhAYQqBBMnP3N5Wa9vxithGR6d1Yb1AQSm5mRFWTapAY6AaU5UMLapQEvcT3SM22v8cacEqc",
  "key21": "yAQZshPsppMGvZkvFd6AUP6SSC5yLfz8xLE58osw4LXHeBpHWNzde3nC79gCRFwxCYRTMLWqrHLPNhh5Y45doxW",
  "key22": "4vxjhvgiHdJCirgY1DgbMZ2i4GL4W2d52ejaXEByC522qBSHHask1K1AqFViQwX6HF9droedHQ9NyXSc1TuJjsn3",
  "key23": "VLxVACGYZJaaTfPwna4XcYUDbJRgMhfrL8BfYSGwm3dBfu823Gy8GRga2dSXSwkmowcHrd1VNNe5Sv9MfXxfZQi",
  "key24": "4i9oLGFfibgK5Yamv6U4221dAvEvXzkUH6CyyRTb41XgLQfFhv7PsXaC9cvVm5SGKh7ZwUowWMKFeZza2T9ghpLS",
  "key25": "2keYJj2qoR2XLfGJ5o8KarmZF5j1TXZQ6kBHc24A6FM3imTE9WaqEzi5zoc9pUXKtMQdgbEKVFjdDcNfwVze4FX6",
  "key26": "hxr3nFumMJnoXX1y9SDLFznxoWsDH63REYjxgBXueHM6ZDvUF49Ub2DSKNWzwEpGA7Zch5g8VuajLtFhPM3wVxh",
  "key27": "4nRM8f6sepPShggvRX9mbrEPgdKDkzWJhYMma3sdhVVKT1SfrUsw87WTYKhgHYsjeCSChz8yzCqCL7Hdi37ccz6G",
  "key28": "4WozCjkF3DYYsgEAR1Rkk5QYf7UpVRCTTUbdL5JX4MmJY6ccBrJBe2NEfSUfEfqpp98pPXS2aq2HZvFd9t2aJe8e",
  "key29": "t4r5w2azaeVRwVTUVptxtXz3wHNDBtJNMPw3AWo7srXM2225Gt1VtRXbLGDK2mc9SGqC3CBbZss6KTWmPGLquQu",
  "key30": "4neSMDNRchzdxX7UfqcB8JXXRZcqM2iA3HrMraDwp3Y3go63SUEcLenEZ18AsZexoDMqsCScYJCf6nvHFk77xcLn",
  "key31": "moRN22NBLvrP2sbD8dP73Ejfe7BqZFr6B1R1DYqnbArm4bcw9tiockNssjmVu29vzuQCTxuQrzd2kXvDq6iLZiN",
  "key32": "3vLAcRa9dtx46AEJoCSCCwHkkbY5VbUjhaom2qK3xRsrYvDdFZg63AXG7eojf4JLfHw8CQa1qd89u51tQuSozUAR",
  "key33": "3oWRqds68Af71y9Ug6yGTW1DnwvhLp9tngAXphNKvwFnyBo9udECAWNm8Xo1fF1yViWX6zZcHRovTB3QsmubbtLi",
  "key34": "NFKbe2PeZSFV5rZ42YD4acp6nrbyuoiBmdoQSxPTbsKA6ACCnLsBJ3jpyyh2FDxfaCpWCG57Jb9eAzDiVsg166S",
  "key35": "2VxwjkgFLUruwWjUZ94aTbyoaS24Rr8SaZ2hqJ5K87utAdCRvea6M6eeVJvtp9zLsyauxrFCVJiH9U8f4RoPZW4R",
  "key36": "33Fgg6bzZog4idWLNrWbzjW4dGRHFdFcAyMiLDWdWW6nxxokiUTEQFBSHVNRRVhARzkvgK2HzRiuSEpdoTMt59yy",
  "key37": "5PRXfnVLviWHgLRVm9Jafc5gQC18jePW2HRz4E2LdGHgymBE95i8qqtiEN4aVZts8q4oEdpw7m1dmt7Nob1z4cmT",
  "key38": "3m3jNVU6UGRTJg7VaR14aypaCPrxFmb9yBxWRRBQSjeAeawJejWPcBMYezvxiaqpnq7xYP5wUy6UV8XrSaeCm8JP",
  "key39": "4ucUyGs4saTbGFoqkQBGT2yW8PTD4NG1CGGgiBTYKmPcHNhoZBfR1qiTNPv11RLSWvYkou4z2GPbrAeBzRKW8Cyu",
  "key40": "3WCF7mDKgwV6NDYjMdGZZ1hEK6hhxxqD5faDwZGv2oP7XzfhvszUwsK8bKXuHiagvvWZ1Y3cWWUqp31yrA21nFQx"
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
