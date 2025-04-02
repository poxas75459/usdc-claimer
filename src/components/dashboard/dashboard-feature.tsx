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
    "3nFZ3zcksr43jXN5UoCL5tcTBj5sXckGfwWLg7Z17pj8atgynHQHwFUUqHjMTSmQYAgN2uXNGrzrxZtdPCDgmrTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EZqamcd4QhSN1j5zYxyYBMCMzG5agHgMCobJqxcy45vSGJYdS9iCCWaMLjoZoou8SLzpbmKAuBsjkzh7hupeWye",
  "key1": "2VnZeoWgWUhVDyZ2hEGRsXqSHXTNvADUk4PN4uSz14UbaDXMSB1rgSADrjoLVY3zxKZo2etTc3fbzinv6RetxKZj",
  "key2": "49vQReaVFM9VCQNvzUB8fybhvtRKm74RijHJH2Lg6RxL1mf4mRerjWbuZpaWuZbWQwXuaUXyrbY4NLfHwfGBtw6S",
  "key3": "4eufrbzsD7HGPfC77gg3Yhm4KLRWxKoiTfRefJJ8nxXoEajzfDQYL6m7WnwYY5qBUtotPa3B6LvquwKrQEFg1XoB",
  "key4": "GECCLoKnDYE4D4Y73hNSWjJF1PZ6Gop4NhSi1pcj2gAbk5ya6M4jXMWiJKB5yCSoMMDjjskmxF2zot9h1MbSYeK",
  "key5": "46joxF43PH8eTwGtmWFPRGFz4GtudnE3QC4GzyXdBGAhy9qnUAyL1aqzveSgF2D1tx35aLRata1S6sJvSacCS5tr",
  "key6": "26YSES91Vs7WFWfdGgvBcA9pUUB4qUuKAyffk14PMHQ9ZSsramifFYEArmVDbGMZsqTcKdJdD6k1f3eXWcdUm5Lb",
  "key7": "3KBaK81mz6yTjFaFChab9DbtskmV4QgpVG9uNh2rGZSBHZbpbGRaTwSTx4NnHarkmXJQCuJfWZ7uUzeZffFJfBcR",
  "key8": "sQimXepB9NZx5tc8pD7h2BZuKoy2RQTZivVVMgsYXugpSQKs4GRqJRgTYgNMV6M9vLB98aiZ3LVhRU3N8tnhcMb",
  "key9": "4TWM9qPmEsZjrnJa8dvxKAV5qwTe3fNWEe7FFefBKK7pzBD2wkVStj4YcCVeQaDSkWCvxgnsL5aUyS9kKzixf4Yh",
  "key10": "CH5xo73aesh7C6VmdjQna7KSfpxaqAmP9Wn2qRCdAhQhkMEUQUo6to2NtK9jTNpT81a3PSx26GirruMBPGVYoim",
  "key11": "49ASGavBbSK2hfgqBXL6AfWMgHUuw46BBNbU2tPB4QvsfTMwGX6QWUjcbPHzK6YoLeWnv8zrLWJ9AxgefjN8avrf",
  "key12": "3zYxYLvdA44coSFoVgBwhJTJwrLRtViNZUxy6BDm3Zpq8yfrQb84UfsXuAMTUjUAbZbh4gwrYx98zD4NFTN6mTqq",
  "key13": "5UNFPoVze3aMtLJFssfB7ftJXLRCTjxyLBLeBiPYgXx3w17wTvNB9z4xDhEtuEmEXHNH7UT2wUhxTyLKiGpxjxjA",
  "key14": "2BhmLFcP1MwmTgA6iRK8V6owbwNAdgpa7oG9zyyzARnnorefEii3RwK9svEPnWaCohuDc1jYRirWpZw1KSZsskkZ",
  "key15": "2DopVoR7DDuG1pv2eDMAjTLKYqAEM9yg88aQKSAo8vvDbSeSPS41YkYsNaxCodBCxsjiuqf7gwEML89KX4K75r1j",
  "key16": "4Dii6e6oX6ruteRncn9nkmY7ZMeJkBKTewMHXUbSRYNjk3qzAvzvtwskVE2YuhogRZ9rHkDp1r1UVLmavuJa1Rru",
  "key17": "3JfnzhdfLGyR9DJ7vRyNbC6JnMHwAvYBxm9YQbx5tmmj22QNRTnLYeBiEFHRBc4sGCy4WPsp52hdFbmGVAiNjfqQ",
  "key18": "Rw895kL5htDZWKRe7hNwj6i5Ny9mAD2RjBTmaKQF6ADrcG4mGLW4W2qhDevExeQ3FpQFFyXhas4M4TXHccd8MSo",
  "key19": "5jF2zQYkmmuZhrAzbd8rCgPZ5rXN5U4uNHLncq54QrLHm187cPPSAmahGfPWXnhMnXFtVuDLVr4kqtnAikjtJyLL",
  "key20": "2py5Swe4B5Ewg8ToTiMPoxDzGjJH8669KkAKZ5wRicXeRXn5GriHhDB4uGMuXjU8zXwgFfY6rQpJEo9yXQJF9avs",
  "key21": "4mXLM1XLiGmdAf55EHTA18aZxnWgziLzz37s1WhBMBfuUGPthJhQd8x3WSqjm4dzyihLzfvf8DnMBBWgdhyiykbq",
  "key22": "2YoGL4YBtXXZJc59THPXwqHWs1skXxkYmzyavCRt2zUXTe1zoUw9prw2QML1zydD1sCuMFk8coe1VDE4q7PaGHG",
  "key23": "62TpYD5DKS1eJp39aCVDLPLS6Cq2GpGsYygBG9ULPAVcatG24Jz5wuMeV6cPUqXVm1souBWnYaWfv3p4oRKc2uef",
  "key24": "672TstpRRALbRAhzMhoGqb6TVfyqTBNzVbEc54Lmtc7uc3rHoZEUVED9m6YSdXZbyz5uGrcjJudPwdrz7RitxTav",
  "key25": "4JY58uhoRwjFrsy5ELkAG2WVyzNvcqVj6s3uwf51BzNYjQUUFSPqPXuLWv4hTmaPJDFJy938iAn81pS33HuErSBZ",
  "key26": "2C16LiZz5b3MoGBdWZWXzYvVcZhhs5MBgWMtdbULiSGCYVXyZ3HCCEAVJya9eCPYWmyfftNgQ4eH5rNqdNqMB2v8",
  "key27": "4ZaskEbbBH14CzVBN6iCjtiMv2kZH9AgmRkCyMdatbKqXs62CP2GMzEn9vUsX2q7n7qmhknFrc9UA3Dh2KQ4Hh52",
  "key28": "2ws5ofPu8ciPDYCE6PTr5wbhj6Naw52PX5dP1PfDD2iqecJrzP9CLKtn46q7qCMq4Uv2cuTK515G5YVR88vUYFQj",
  "key29": "3o8Afart688z7ysfVSMrNq2UR9SowfgwAuFThhtdn3asGdPsvMY269sZewDPMbj5KYKaHzH7Mh2qVUS2ftbYFsMQ",
  "key30": "47TFCMkSkNxeNSFAJRXw3Mc7Br1K6869PeoFNY1TwX1zQXMbqmYnhrUJycSaViPWHfThVnW855XaZ5HkLXVeNnzT"
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
