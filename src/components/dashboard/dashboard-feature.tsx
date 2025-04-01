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
    "WStkMKtqe9Huk7p26SwQfuqZ2qeHuiNTAThwWyjP4YRd3Lc1B5NyjqTYAyAQnFujtpLJoTJyQYAzvcZcs87Jzmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UdGMT7ZqHidL45WQ4GeMQTMoGCagvZAYviDqujvL9YxPxtkUasRZYGLqHSbUsDdrrqqdHPZfSqC5h2sEGH4bpZL",
  "key1": "2HrhjNQjtgc4dwxrQjTWn5fXDUTdaMipMqzgnWn6YrZatb4Hujee8iXaNnoYU6tF2cqYiDjzP5f3cJgZijsNacJQ",
  "key2": "25DVh2M44pHk756NfFEiNATH7Rd5WncBfbSpgHVhZ3Sh7YNapFfkVwMkAPptwejrDDvBV92zehBqE2TmnWYcXFj1",
  "key3": "3etVe8vCk9ZMPDu64VDoS94zkKRqEVDBVRh63ebMFfFSVHgny6XA2EyrXYvRDPmGrj9qXxpGnUjkdeaP6GSkjJoy",
  "key4": "5RpQuVGdgeURzP1DGEb7W8eYvRRbaH1PLQmpLk6otNGtwJKNxuA2pHG1jLydS133gzsZU7rU55hbN2YNJJNUuXfo",
  "key5": "572JCcAD1eoTgz8VVnC1aycw7wX8a3ko1SBJVnQja9Sn5914MGHzPio1AquahWDbbLbuhdCbQqcbodoa6TY5X657",
  "key6": "4pKzZA8tGVUiwc5f7wrGxB4WvKgh3U7QbcnYEqrdibd8SAVK9rQ1juYHyfNwWFaAPZAZsVZiGpY3eTo932peUvSg",
  "key7": "2XF9AMVcRshX7sUZncD5zHpPbREA8Jc2pLZFuCnnFinsx73zAi9Qv3scnWbscPvcBjHgWBMuDNWJagHXcwTdGwFC",
  "key8": "2F7kzhYWYfLiHgdZwnJeUCNRcCxMDcopcruS4hcrmsknfBG3HM7qUEgoM2iKvVrLnxkjuqPx4NgQe9L3pyqXepDy",
  "key9": "5xWNSFN3U1Zev1229MiRRWamGQG4UCAHb3d47NcuzPvqSsmotGW7ibZ6gmSzxjxP27Q5UB3f5KYtnD25NiyHH4sb",
  "key10": "2MrchfUnyS33xUJxX444XtiW4SXZmtr8w6wSRkcqiPGGVGUBNZCa6X4UvJxsLLaFSXtrY1fWd5ZnaHXYczf7jn36",
  "key11": "4s9tyGLS22yDqtkRCpo4Ax4MEAV5cEGJ12PS3hpFhAutWLPZDV14cYHmBcjJ3KKo262K49pQoG1miqTrduB9nUQV",
  "key12": "2c79kWeDwvZMH1sw8rWC51uvELsXxJZhGigK6xbKDxFD8EHpyY683Xf2u4GppaHT8P4RkYXF1dgM6C3Mkmo9UzPg",
  "key13": "27Guwrq3zyQQmj6j52R8XAti6JANEEJe7drtyLyMcH9BmhoCsSCpA3Ttp5Jb7kSRq1jTT3R7LPUQ4dKXp4UwLXMR",
  "key14": "43kSBiEUR1Hz3RVjpm3AdZJveuPkgNaTpFmfwdkU7vQSdRDzPQWSKiLj7sVFsF1rrrpWHj6eVCANVtsAzSUYfNpS",
  "key15": "2VYquT7nuJyJJTGzx6t23aubgwxooqWMfcvVWU1QCHnpWQWPNrp1af4ovpEU3VXgXsZzPKfpNWkTTmQiuZWyYRS3",
  "key16": "4mXZtri6M1CQ4zqoetyenj4P2keCnLxzCm1anhhk8vSpa7yciq8fBoSH9AcYUeFibWWgXa8i5tmqYLPYzV7LCFNk",
  "key17": "4DZuQ89HSxA4PRfY6GpoTSW7AQxC2f9bdVv2giGww8Qt1bP5WQy4W4igbCQCP1DK75UQHUESrWHUZeAd3SC7sR7g",
  "key18": "44MRsadko27Jsy27scFoTeJrRpp4EtRdUUj7FvZNkcWkUMXyRSJ6UsszNmmxM73dcbiK6rLgKfRRb7w6EVkzc1Vo",
  "key19": "3tcDcLDj2qW2qTPPxCBBNyYbPtcSArKM9hTHKRm3G57ggiZ6YL1QfwG7qexD4mstSxKsnK9pNL2gimzUYLCoGP4N",
  "key20": "1urv2A1dmtgAApBMLhCgpgn2FGqqUaH7HqC72vTTctaVVV2pje22dzm8nLyHL7ioyco2myvF67ZEiS5AwcbNd8E",
  "key21": "2mEiyW3m3WzFK6WyFzT38hm41Q5HUNGaiYZ3pPGk9W4AVJenAmAg1vtWV24ZbCxh2HoewETvcrHyR9JUzXxyPz8z",
  "key22": "yZLNHWAAn9EhY82vtwEg2D9Tmc49VDqLCDBEpNzEdfTcKuKmhC2KEmuDruq8UTTiV2HChYiZqaupdWbmt7QLQRU",
  "key23": "th87RwULdTamVqecjR8o2CS9CXA3ajRw6xUv2UMVgY98bBmnb76fdA7AMHetRRJVuQZDz62pMMNq93pLvuKKqTH",
  "key24": "3DoH6GCSaQbafmcxYziNrXc34HudwbqwLxq9L2mskJEkWjMx7prymMYnMAiXBqeRHTupLvAxgw33tNBirHykcibv",
  "key25": "36jySUFh5RmQsVkRhRCMY5dwuiGu8SjBNykR545k5f5XMnvpAvTrqNa4xdnXheRrLUFZebAAYEZqY8P2h1QGBgwb",
  "key26": "5VS6r5wsB7SiojVwMzB4WVa9g5Jq6djCaZKKFxwFmqJNxYvLTL1ZWTU69wrm5m8mcYVso4DQuVkpAjcsosS2E9p7",
  "key27": "4NM1isWm7hns6ZPpg3df5aDHMGyvJcvKcZha17eDy78foXahC1AYQ226CFRKJ4bLV3DvmXDKof2XnA9rRUDQ28b8",
  "key28": "5zEAsuMNWqLf6SFUkXTAEJvBbPfa56mCqdpVNWv1CaVeddpegsi44oS8LY3rnmddwosEUWp3joRwiSQ5APWe1ef6",
  "key29": "5WuMj6te2gCHQYwY9WWjJyZ8Ct22S3C7suj8kh5nHbvRnnW6JfTupswGFtjXLkkDGKgcPD4FLiSdFQgWSY47zTS3",
  "key30": "TwsfRGgjciE1LAeRC9zKtXob4BZR8sHDtgZ878Wps7in137xyNsfwviZx3dAgRzgMuE2yyHaMAofD93dwQCsyTv",
  "key31": "3URpGhjkN4DhCu7nDVmNy6UrXW32C5fNtAQgZxKvRtf2h3YuTditakSiWkQfzdLjMccizk4gSrJum5Bba5F9Seed",
  "key32": "xYJaesskSCdChmkGKgWaTM4WsCnYecqegBWznm9LYdoVPx7RFiutypmKmY2tE2XaNwoKphsdndzLrir61Lowm6e",
  "key33": "fwXzrLmgzXQYhYuZyzdfF9JtxC5q3bRv9ZkD2ceRQW6oian6e8dQE8bXYHYRwTNAUfPM9Xf5zKsFgSsRN2HR4rs",
  "key34": "3arbYttYpEKQ3RcV22fTFAm4CCV4V39EcgiwBRwUQmQWHCStCyq21TTnTn2hAqYBz7dQ2GUUjoxwvXRuZog2vsA7",
  "key35": "5bNR6fPCMgzFbZpLdM42eYQ7jduKu4KruqnZ1EYd8shLvnQHRMe3K7Gw7z4272H2K3tEY5QvEGivVsSFrdB54oGa",
  "key36": "kWc3wJx4k1xfinwn1P9QTkALrZ7et6uLWxGhCkZozvQrfK1Qee1jScSXifoQ2xMcYTQwztU5dVEctHHHLy2cVqN",
  "key37": "59YiQWwFyHYk8n11Fe27eN62sufPuWmMWqWW1paimWhRQZgbz4mgfwZdNTQRzCxVewyNWNjdua8KwhF7LJTzPw3w",
  "key38": "5nDvs4rcuWsZwhpBSS8YyJ5fuADdA4kxgXDfaSMfVR931ZWTHVVruFMddAZL2dZwGxozwGiVTUTRX7mjA6NnRDtY",
  "key39": "PoooSCuYX14H4Kb15TqXySJ7q9PmkgDG5AjVS4qYELS9ibHQEjXkvyyrbZ5qRoSVhY1msAzWZ9fVxgEhqUVA65F"
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
