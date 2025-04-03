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
    "6BfUkTo7hM1bFfaGNRFffebAgjqyXPvKVPNUZ4wGajojYYCLv7xg8vgdk6UYXeB4LUBf5BQsGHvXsweJyDYokvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8TNHHUj2FxmzSJprsP88jha3hynVpT7U4hJtG1abJbSkP8SHLfNjs3jpHdZU4YZWA5GErKytrAyKhAAiMthGo6",
  "key1": "2o2TshjhdY3tXipWV1GzESfwvZrioEfn4zSx3HrR4qhvsb1GRJKdTgkG3MBbsVoyp4Lp9e2SVkH1jkmsbWYZcwdq",
  "key2": "2bHtKJ7aKTz9wZkArGn3mSsg31jfbxV93HCA26VzTLTRPQbc27L6NegYVsG2FR7FxLNiDtms2tnbGaZi1WBq6HoN",
  "key3": "H3hS3mX8jzcaHRoQgqW17es4sbh6G5n4vdewS5MuZH8ihiyXVqkifSrNvpqhXaNyNhugfrXPTGbHjdt8KhoEC8A",
  "key4": "2VNitWZ8aWW2LLmY5DsM96pJiVw2c6tFrTZEfU1CWADMBQZubp5pJhQRpU9TM4QeFwRGWLsk3jUKp3Cb3uSyaT5f",
  "key5": "61R3ZRcAsswSaug1EA5BkCy89NRaXTwGreU61WLPnM6XBGmGyKTGs9m3azKqCfidD44STHekYjtdcG4GXpWx6Gs5",
  "key6": "eMnSCSK8R8ogCfiYVkhWSUBTpcBUnsM6hffvq3cFnTWSJmrqvCmh2fRE5pLtas5TavDUCDg9Xq7oGJajYyeEBVh",
  "key7": "352MiCKth5Q2EEKgdDmjcWyWPFiZu3eHirqh59rYdbYJpFXapEWWKjhhmzU2KFwxMU1HBAFYtVhrgHmHp9kYCwDf",
  "key8": "5QPiupM57L6T86JYXa8uFBRUoV3qTxxoYjPTVKVcJ67sNCKyfdW8j2FjVx57NsYQFQqzyKKiNoG8cffEV3vj1qSj",
  "key9": "2hrCkNLwAyZ2u2iRMy6LQrALN2ZcejVc1HD4VbWhEyXAgGm82KrGLNwt4w62j1B2zP7SRwrRmBMiiXHckLWwEuva",
  "key10": "eFKZSbPGW9QifNTJrgWmatrogTKneHeYK61zi9evn5dAbQsPriXURd4EmFahhy77fTNbEwzcCP4JFje7t2cfWZh",
  "key11": "3GjjHcaLtS23AFE9NJBb1B6xXKRZst65Y35fvc2DcREXwJV5jEbquCRaC6PeGfYCnqrc5H8yVV7STMdEygzAJ7qR",
  "key12": "2aFbp7nPJzYjceMLPWFVgHETMPGnTUHihcG6uFd1tP1rqWhxDDcBz2bqrvcd1799GEjFCdpqk3mzJqEfutWjbRWt",
  "key13": "2resEhmFVDQ8C9szgVUrjfAAuA36JAMBbZ5zRduTrmdufvJwLE3AcChNj5dSATDLERTUorGUecb44WqWVmcRJFnq",
  "key14": "63KSpT6XAF2JB7YqxeudJkYjgZLu9ATgTeqyH715URvWXz8f2B9o9MedoMPVHb44RomcBFTHwhyh8P3vgx7LzrMp",
  "key15": "HTHSjvLddjPDzchNF1aB9ZoN5U3P5NcXZZHn3LbQpkexUCRgcRcJBjGyLKwKND85CpiMdYKKTJJoiaDrYuspb7D",
  "key16": "2UeTBviKi63rWzBXxmrzUVLHwbpYXLvXhsVbmcsvspWubg73zxtNH4KJPMkVEpGsZoaCQJs4auoCvRsK4ifgK3iz",
  "key17": "3REP9EJGA8n7Sz3Sf4X9J96NvsixfaRueDseQ45esatojtVB2gW2rH2x51M65HWQZwYDRMGN6xo6RvXcnoxWCrPN",
  "key18": "dZiamUFaRqxwg6B85LfsSw86nBH8o9v18ZySxA5hKykhiqN4KaMMxsk6wskoDZmiSKVK6NNZQTqGFcg1f38tnne",
  "key19": "2vh5d2oonzF1kbbR5RghcYjqeK8X4Ld1F1hKNXCDNL5gKsyQ3Sanw1oTihj1yJ2P2etC7EvzihQtk7rEmMFuVZa2",
  "key20": "4tGLGwBYMZsG5UPvVP2L32tYrr3WLiDDAdvA4f1pEAJbytt2mSKoxbY5rLSiVqnLUEv1LPfiShy3d2GZ1jUYw6w5",
  "key21": "2HhCM7h2rAnRc5KTh2sFwZqNzteAiwmsrEK3uHVaR1o5tRs8fNZTFn6oJVhG8QAjK69dK92nfykh7AMcMofEwUVx",
  "key22": "8F2DGYtGB7zQwLSwfg66gWP75fpgJjPDVozwGvaRZDucR82ByvaXgidDa7xCzgijp5UXqifjmFpUvuGnAEkcNm7",
  "key23": "3qPVB592Sdwf9wiDEu9XXforrNU88kERow13gt8MvUQ6Qvue2w4RurmtapGZ8MmBy5oZsR311MivJpt5eVVpvL38",
  "key24": "4ZoGaErEZ4qpZRicEtE1HBhDJuApe8ZReFypYwkGQi38MNM9nS5B4cJGGW6t13tW5wS8PJY6VDzUuR4Nu3YHPVVK",
  "key25": "3Po4bAxo59KwiKwYuU5jDT3dCMnA2HptuM9Ez1BQXKXwvoV818jHwzX6B4F5dbYRnyqziMYbJxgVqnnk9NYQ8Yp",
  "key26": "32J4fZQEHVobh5Qv5gxkyfpyzG8K53eAKgmd1gsFERhb8cajxiWYB4SrQ3veYGra7wc5DJbFxHcai8k2yvwqPMqS",
  "key27": "3h4tEQGVvYA7HUBL54qAFShQY769Fcqh4Gb6wkEpbDnXBjCToh3b7VVAJNpJktwJ7Wom9H6c4RnTH58JJF1mDX5R",
  "key28": "2bbaMGpo6LidtC4QX5XDbVNvij42JzoQjzQJVSetDaa5AkxKFy1PrANT4MnAK64cq5refuineXjCRBs3FALiwENM",
  "key29": "MfCS8AcLBm5B1VbFnPt7Jf98W1cWP3MrSuBaDJtjZ8SokRW6HfQDVePq1xuD1CVyoUxTCfcKgyyijUPo1yhQxNH",
  "key30": "3xbbBJaxskfyZHVeSFL8KaXUHFGHpLY4uH4UCoGCV1o4A5LugHiPTDahfWrMzxwLhJvfgu8LJaUQK2koh1taTGN8",
  "key31": "2Ey7ycXKMAmg5W2s87uXNPvxDAknVNfjtsy6vbzsJu3eaxgAj1qf4cw6HTEwukWxo96RkVDhdkXswZwa6TewjfL7",
  "key32": "3bHECJ2LF4JJSaSD4jsxewJKvkDe9xmai8F8d9AaeN8frhSG9WEh88vTvXuuSWbyZsW3kaiZQAd2YFDrasi8q3kE",
  "key33": "2199Jx9ihmqt3igXbW7Pnr5HkKL5M38UEW5iAovvtyxXDuiVnPfKtvaLvmDtQbdPCnKVSUEsN3AFjxuSVzaQmxt8",
  "key34": "5bN3gCZu2iWSFd6TvPU5tTJ6ebLM69HnBpdH5ZmXxnXNhcz9Fvd5kFLm8gtsGtYfzCMh8bB551BLAGek8vPgxPqA",
  "key35": "2oJXCWYHUiwbSZEwMzkHoMFjqeyZkHpPC5sNtRm3dK6ytqcNWDEaAWBHVUWUXzxMgM6mkg3V5BojRfKdJ4jQYid1",
  "key36": "5Nh9v2xTP2AMQEAoMGNppaMxTfLPYCAwzcGRiEaJsqzWjdLFbT7bNGj5erJLWhVjuJyp5FLsDuGuS1NJC6DW4DXW",
  "key37": "3QACqwMYGZUDrnoP2Q4NNEuagi7xjvnAn5TaaKaDoe3f6tQJ3GYjbCqx3sRfAByChy8NfvTEECidAiXQ9HNfTRTo",
  "key38": "Z1AhtPmJo2bc84Xnyq9XX5hbRG6RnMbPGsfN8iWCX4j4d5ezFn9ecfdZDuMEF5ejYH9cAmgaiHbdaqQ4bBbWC2j",
  "key39": "3GwRSuWHPZoTsEyuAXBgJjVZM8jNPqLZmTS6fX3NSY8NxCnjjmo7wzd2Q7iXVKvTa5Gf2DgrL63uTRHCCUKY8byj",
  "key40": "3eoTqQw6iY1AikJeYbmY4eE8ZnkH7Yq2HXSbaYiqP9nvfvjhBCrqPHvXJL9rNpdTSU9EpSGKT2XDpNB1ZL1JpNjo",
  "key41": "5woQEAdbdwbDfgD6MSce93FUC5K7j6AJKu4FGZANhKtJWNaK9uEQ2LEqPuo4J3ywn6RPaN4Kvdz9WTqeM5n2LNxE",
  "key42": "2hUyNCa76hexp1mgvYNzYh7ose5QH1VQdAgB3Q7o1XAh2oTi6rXci3mjpjs7DorKq8zLeM9iTA3bMQ9TT1SyqRE6"
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
