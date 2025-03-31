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
    "4hd9PWmBNXyVYkD1nub9cEP1AWaMe64evfKaFiiTPDJSyYa2NNWcn8VD5hpvxYHWEDhe3mjid1tC3MssibnDZxuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29U4Av4F2owf5RtRhHa7L4eRo871XfEtoc3QAMGUt2odgE7ihkF358SAb2JuurAwpQuZ9Vw1ccg16T2Cd3XEymEP",
  "key1": "3YYjNzSL1QsnYcSi2raoha4EFb46Vp1MGty2wXyDMSKcycLhWxZ5k9p4jHjZQ8vhiPk6i5Gf3RTEULG4ruPHEHBQ",
  "key2": "2yrDVDVZojbmvg22CYX1Q5nnuvvzrHgo8MfdEU9q28yMtZXFiUWjuGBWmJ6YJmDarUpy1fWiE8apT7gAcdgmuHys",
  "key3": "4yx2jw7ejbxyQRQxGWHehXSMZNxkDF52Dt3UMfWXkTANxhAdscxcu6iTMePybysAZpjWRXGq24aURvHuzMK51o5V",
  "key4": "3JarCjJQUnQT9gxn53pF5P5trz2o3pcqe4woXvuTs11YQfhgqDrsmBz5rknwqZTbT3cnmT1HqFka5J7qM1k2TU2D",
  "key5": "3nSbEqzwaWuDcjWC8YYWamsq8QC9K3AMhVASqEnJBy8PKpB1kANvtd9GcZMfJdf3HZRjTVhvNwfoHR9Vr7Ty6S7S",
  "key6": "dBV4zW9srvVqEnvHUu5gQEfJg6UsTihjVRpYDpxuiUNMQLjbKG3m8VMyRtnzg7ibGmkmTU2wMzNo2Aacn2ecC2o",
  "key7": "2cmPtF7oWxE9VvX5McryKaRGq1acFtjfPZrDn1S4WKqNpbJ1hzct1FysmdUUNLkmTrrLGGPe7svCgFKWvdMEVjBV",
  "key8": "3YWiYx1JB3cmH67GxiktnRvWKLrjaC2o8yZSZzKkWQsDAF1srCCGWdaQ9DSu2SGJLJsdwoQWJdTt4ksgsuVYq7K3",
  "key9": "9LcZbVLRpANDHoapsJVDhWDdWFr7kNX4Jo2mmHXZ9cXcFX6dNffXzNF7Wq5KjnX5cjQCDGEgXPqZWrwFBVHPxQH",
  "key10": "2iDLBQgzzNmRNbbbxEZ9WQ5s3vLACiM4HcH4ygQJvesefKeebLdENW8oLLMXtfjCem1zQRdBNgW1vPt8sULKoPH7",
  "key11": "5tqTJbieTiwZXh2FccYxPD2K3bSHrBX3gbXPKxw6JquGAnsxmf15xUTy5EWDiNd3cLHxpKi3ve7eZz162JEvrPTL",
  "key12": "4z5XZUoDaux3KNmEKCZmtn9nLfzmXYqLZWCJ1SXbvnjwVsAD9xUFx7SHN63eZXTaoSiRc7fiVFNPDCo9XFy4QMcw",
  "key13": "5k9hPNXyUauDM4Y7wGZ7TRxcWf5AuN9FDpDBNcVcLiihn22YdRGJfAQKjdWyG78hKQUXhsAaqtcBiVVvCFN3rs2g",
  "key14": "6UFvoEguptXPw7MBVEQdYm7jZEu1ZyZftpm4H8hUTSoeu19csJPL8VAUJa2aXdXwUcKxUHKBheZYktQJMTaepDR",
  "key15": "Q7dRY8WXaXPFRZhriuBy9T94R41bVCFWPYTFq6qsRQpsWaG9tCxJCJ2yxaaFvaN32GpLTkZY2k9r2PSnLdVZrMf",
  "key16": "4wngZK4R4xQJFtxWm8Xge24zFSmx3RS4rfojf3vRPX7nALhwXf3mdWjkGfVB5KMEyeKvcLXgMQtYXsSh7z3EbbSZ",
  "key17": "5uuyetdJTUsqXcG2FqgJDyev4JqVWyC5ckmAMD4TF9AVMg2FVTBxnvQQxfbPBDg72F4hrM6kT83nGV98nLXQkgNq",
  "key18": "3d51zVH73XFEgbH6i2AWdegbL5kTk8avNWakLsvotFzdHr6k8omwPQtPEDQHyFqx8FnoxXDsrAWHe7btmLgVDw7Z",
  "key19": "CAhbB4kzFe7ZXcpfGWKQyE2ootBFT1QBDns2rCRdmx4U4c9GzVSXHJsBsgaDAqPsAG7SfsXAAdMH9anjBgcNu51",
  "key20": "DSafDs5eUKFXcHtHtH24ipuxuUKaHDXo1E5oRo5oPss8fuG8D9CcsSai5pJBje5t8CZ87rZ5ZhRAj8q3frdLzR5",
  "key21": "5T9QpiaZSFxXTNVjKmGgAtiAFXiQH47ed3ezKmJuuPECNdSrmTmj6UD58F6masDXpAbAY7h6ABrPqpaGynbiiWTK",
  "key22": "4KYXXrdzk7ERsiQWF7juV5dx8EHWJDTGp8PCpKyyVptsXCZkHGrh98aZQKCbtmwvQtAt2UDV7asbSgPuKiKh9Auz",
  "key23": "2GfCQJ9xAQDqpNPgi1icgiS46V9oQpagF1gPVnd58eAXAKpKDSXrNymbfsMyjtDac62K6bJZVmkmwU1eAL1jbaHi",
  "key24": "3uArBfk1pkrwfL1LVnVAud3sXMxcxc9fgdgKzogEAkgXHsXhfD29N3wnrVfSwdBksbieXra9TXTQ59gGLtWdAXo7",
  "key25": "5Bzq3Lo9NUJZ1r8GVhHPpDtD8ercnnsk9wWXwv1JkyaiBan4yoEgnpnc8vG9kodvKdL8JMvQ57EYGx2Nsqg3D4s2",
  "key26": "3G7rNotHjvo7uvPQ4FhPyVfXg4Y9ei9wXHs1dNmKVYVHVpXLE9U1LkXs8WTe4aQwfTRFkEX8ayscQT79vRh2MayZ",
  "key27": "4vmwoZrV64dfGxsJtq7HgFqHHdjQjZoejpyRyWSMs7cGvwfqcUEMVj2HE7gcoKCviU7FHm3jyoshqUD7m9ft6zkS",
  "key28": "4oKfFeFeQLHRoro4QcS49r5xczQR5q3x38qzhtiLKadzdF2CirYJZ6493ZGnrbaZNHmgL4dYTShmxH5YwwNethRZ",
  "key29": "waXzRQNm1x8Dk3MMjEpNQfaUiQJWaUSUuZgKX6dgkTesxTEoX4dUCCtcw32GHECQkHgAWDjfdieSYNNnL9yW8mS",
  "key30": "35VoTHRoQqnxnSCAML9kE1M8FRyVr5v2zBfbNeYqrXRM6wX2mJy9pAc1TGLUsUMFDE9gr8XKzp8dErfVbEKcq1ta",
  "key31": "64Cbh9gr2reHJNjhkSPdo6XaEsuHBRkUkzC49CEAW9KTowz7yqJw2FX6wTjGKeb1u83EC2GAChRu6jxW5RmydD9U",
  "key32": "3p1vpkjXBr4fmMzKk6anQZVL5Wiq6z3iiUcCoMngLYTfMW2ACsiwtrjrAf4ZeQLKm5N64Y9RN8cEscYgPuhyEqqt",
  "key33": "3Z5DuBdFkt4dAD2YdBph9JCpkNtYu7kmHsgTfJevT9pjJw5Zfh9H2TdRD2tcZTTmPkE7qPHnZKL6rsUt28guEwrR",
  "key34": "dC7e1pb7qU4FiGV7yPSbDKbLLnPUGcGj1mdW4TWwUwMAy4atUGq7aEwKumKWebo8Y3kB7G3eBRgJ2RcVP2FzsEa",
  "key35": "3F5wDwKnHjVrdMDRWE6H8LqiVg7REYtYFs1zfV9Fa3o3y2foVrwfLoLGNztRuZbargPidWYgEQBqdkBEkSWtCm2f",
  "key36": "2S8vnda171gHQEnkBQyj9ddbR5v6gDqhSvg39QmNh6SS4ET3VCnAoeHq8uRRHsqjet2WDbPFeUwrLGEyXQBPijG2",
  "key37": "5aNo7e4pFb1fsXkyDMp3stEPBELBmMTGGbnsgxtG2CtXnWCX7Rb4W5YymvMfPjpjs6ffb3fyNm3S5ebUAgozKMt",
  "key38": "3F1ihzqePqmsMAa2bSnT7djBH1JboQJucrmkaLoMV3YrrhFnRrTMsKZaLGX8bzPXBanCkFaSzqq5zZo25xKgiR1v",
  "key39": "328fcuaNxu58Xa4V7HSLH8o7GxfppuQ3LWJMMLaZTjRKvRBDDV2zd4kGrFFQnGXruV5FftNKr6AFJEiEJPXMyfJS",
  "key40": "3ioBRiKigv7eB5HGZXmYXWyCLZEEAWF596FvQQBEb4UED7ERanCH4RufdsJtY7QA1qXwGfx5XsauGY9JjopsRkdo",
  "key41": "4djpw42FTeMmPRRDRaKkgaL6o2aJ1gRTBMWMHWgsMpbEPS1SUXzmoBMzhepUQQ7mHsZCTdnVYk2ceAziD4Zffiax",
  "key42": "2YZcwQHfUEDtRyYxhsVhbZTcBVQPvSwSJi9ZaJHEmHSGZNR9k6EqdjdHseg8pYjLgmCNU4GoxXMT3Feb28HDPoRc",
  "key43": "2LYKxmJnPaLXyAKECLHBkwXBcNx58Qjvx7GTWVc8KgCngRvizALbNWR2tSxw8kSjxwSbMCpzGhiZSmFHBeA9a45U",
  "key44": "2zyrCvSuMz1nhipNpCAfexWQeVb2xomBTLU6J4pSJUodgN2RXkU2vcfBRLceMp4kNJQYum7QYzjRCrVS83JVge4U",
  "key45": "59UAsVR3Y438WFsxTQcdVi3UaHEJsp1GcU3EREBfn5e4Uew938FSvUFKRede4quyg4DGdU7HrqhTDH4PqyMzEu2t",
  "key46": "3f8FRy8JfkZMUriqbDKZEfSYXi1Sgc5UxxwgFYosqFpWJkWkKWQiuvvhv5h3665pDgQCwP1UZhCE1QGzieSuNyt3",
  "key47": "5hzwcm9JCE8qoZEb8PfqNgSTnGsrYDViYNMa1PjziREtcy9GjZTdz6sonh967UTuhEGhT46Wx8a7S8Ues8UQC2YU",
  "key48": "2s4jte6i25FA3GyriZVhJAv5daivPtKJMctBfvcwsLFKsFFP124kp1rXtT2HfqQfasARZAv4mYE7cqPzYLhqPMrH"
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
