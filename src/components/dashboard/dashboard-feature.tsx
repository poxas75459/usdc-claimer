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
    "5k1QAYRBkJ6AjKPbCv6AkKkMjp51iKqo5LTDYjb42F79KjEp71rpjRmmgsuXm8MWgWRv2YXsZBvMmkt7Hy5JGTri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6724eFDzNDt2vEixAbgnR4sywmkcvidd1x64cWW4MsqmT3Caah4Ei77p7FAcFhj3bLyZUnadfbfwwDo2rMm8igMp",
  "key1": "3cPUHmMYdxe3qvVu8g5QdcebcrVtzjW7TMpP6fJZCuQDNYf4STTdtfaqy7RJ2KCs7574Rj39VNjkvo5PwxbNCNmR",
  "key2": "3hZbMzF6oNW2h1stqMTgkTgiSvNRmYPFvpMcLXqG38n7RbMvE2joGiijcDMhAdvQGs8C1hkrdkXuU6tv57cH3Bz2",
  "key3": "5BkpYKNyq4JQYyJTzrmdH6jpqMsAnf2a2jWHZKm8BnxbAxPaLXjsEWRHjmGBmPsiBcrLa7t9Mryma4x51uzxJ8Hm",
  "key4": "5Cg7VrFPvd8Zf7pvCJXjWC6TRLJjAi5WeoTsBrmox7kS92beYRt9ZmpfFcQ627MgvSr4RRCKRJJci74G4DpPqs5f",
  "key5": "5cWEZXNpLQ21ugkrccYEN7WM1FCGvnbccpXtEBzrcUXLjQdhd4kGsNeCFkhqCeqSmgfp8Qz99oM1WKRkemsiYcLP",
  "key6": "5u2zzaQxPdSPdet8zn9mPkqnb7CKuGS5otuBzNXdPG3sBWkqRFYn2W82uJbWp62CsUKzod64m8Xc5qYyUnm7mSUr",
  "key7": "5LzeTCk5aPiMU7hkVyfPTcUFK1Rzijn1EoFSN2apn87XMjeDMG6SmKFkirCgZi1X9i5gePiw6JAM4UHFuJVk36w6",
  "key8": "5wUDkXvViNq3c39LSQ8HioSVEtd2Mdtq4sEXt5YBfVkHnEiTaHLRrKRTA7U3dvGfnaPRijxmsrLU8jJWnPBNjGni",
  "key9": "4UF8iiqLR4vGwp4quNBMTnTdW2Q1QujJB3bBA1ZtNWqDtYFMwqCRMUkkrKMpBMNtWpfMA86W4g88WR14VdDEN9Hx",
  "key10": "5YGN2DcD9CVuqdWna9TroA9NG2BSQHvJc2JxC4tKyzTo8yUzts8fFxPBA5bUiXbYce11gCY8MnWhyjU48rDrXkfn",
  "key11": "3xMQMV2zABiQZUXmPM1r6dK3EHykuWqPVMZqbw14EYQKBfmtZQNifmyzfUQCYAFX9FExLevcp5EjyFuy4okLBbnJ",
  "key12": "4KMifwpUZBvdoYvdCT7wLWF3M7kqzsPDs1qh6ae2yH95yodEmBtZMHneu7ZKc33MspGJx8WPDRQ27aPRsF7GiESw",
  "key13": "49yE5DsnP94CoFWYchig2MEFLM8gTBs2UYiRCCWdeoaKcr1NDHPGZ67w5RdyMqtrovtEFSaAoNkE2ddnVMYscVSP",
  "key14": "bz3VV1niStf1gQ6Qi9dvAZfCW5ziqNt5sqyfZvbQRiE5T6LSDfk8QqkgNX8M3jKMEDxfkEvuy7jbn7XVtG9q7kG",
  "key15": "5ckHgFEEBwQj2khseBZVJbUJ9rhpFjLNBqCRA2GJ2HRWEum6t5LqQo49BkU6Y6Zi6hTEyk1nq8vVeRnvg314voEM",
  "key16": "ys2SXxKkUuFMNweoEVfpqCEon6NwwLwsFHCU1a57FNsEuKo7kNxEAnbiFM8ymU3tHHhK7w1ooTpaeLwR13pjPg5",
  "key17": "2GsebhiDkbDTQFQQbXSurZZnF8Rcd97asRS6bGPuKY655p1thmMtTKnyD8zwma4V23swA7r23nDySqEFBf6BWFcu",
  "key18": "4RsygZZJS6TNoxYmQW7Ym19sfnALq8HyiQUKUrYdNcsiVUsc8cZpLjPhb5sfw6WwdtBDFieMCGaZeAcgWgN16CFr",
  "key19": "5MJowFPuEd7ixZworww8kAfh4RLrDcd5y5GLwwJdbTKifHe2SsdKgpT5A48xYJ7uAdQRv62jsJQjYt3MUKeCdNh2",
  "key20": "ySvPDwzjhsS9NmJCzzBwbjsujoeBP6MxofXm61M6NxfXnwTfwKJFfKY7U9x8niH4tNRoHgKEso8dGR3EBZvLf1n",
  "key21": "YfW6PF9MPzXUcS2f5dCuzrmVqbMeNE7na4kU6wFLpGX8Tz2peMnyBpTmj2WG9ev9HVuB3F5yFpzSDWzPNtgD2VS",
  "key22": "5FwbwzybhQWsXzWTmSH29hzsG3YLrHcowgzEnrVRLyerkmBrdQpq81Px8jCygjY3JTnH3W8AvTJZDEztDyKZCDdw",
  "key23": "5nLGtpGjeirKHvvx1F3gkBdFK6B3DRjG7ZunfEbzuWCP3P2CXchmiJyTRcZVz5VEgbEU2T3GhMo26naZ5tNumQvW",
  "key24": "4Sjs4NK5ccuVZ6i9y8PtX13Z1P7uAGXWYuSTbzVRCRqBLGts1Ce8FinDPUa1Ua1DdzDSSyQiNbzG9hbxCGd6ufUz",
  "key25": "2a4KJG6PVJy8QCid6QMT1BmkD9fsaBJZqKJPtaYXyhQCsJJynChJdLLnXRKB7AGxPTF36kAyUiZK1xzBoabi4Heo",
  "key26": "35PURcrkMzuEsK2PDePjtxLhgJyQQfy14o4DNidv1Lw9APnYvyQTLT7SFJQnLPo83NMZfBMkfL9XQu16C9hr2CLV",
  "key27": "jqdHcQQPghT9dpjt3LArQ35ZU3cKzz2WRqcabzGzgF1kfn1S3kAZKHTnBbsT7tkoe6QgHcLLkUsEpGwGozkQEgu",
  "key28": "4QaV8bGiEBfSY4scHgVai56mwdbb6Et3fhVB2XN3xoec4aRQob4FupSx8Nf87QRk6EBjXCdUcjEy71NipmaibEKm",
  "key29": "2JryW1npCxMsNtCHwZtNK2BW3ca3C1HN9XW1ZK8qkFJupC6ava1gBTuc99NdaSpvWqJp77Sz2YStwvN1vNAdrMnS",
  "key30": "52HYEq56Pe1CrAANsfE9zGSXDyLq6iYjPbrsLVYwpjahRzgYBwxG2T2eeArSNq87PEaoPrq5H5pUcH3SHoPqgw7c",
  "key31": "5D8BjHN2Ld2Xg7haxvJkhpDmqVK99ZRppdQVMiPquUGpLfiHzHbEzbZbunBeRwRpVr6k9vGwKVq8qUFC6xgpMrFR",
  "key32": "2r46trCCddT1espRoMsoPEPeqaakv185Qvw5a8vU2Vo5ECK9vYz13vy5rnykm48CAXfyX37d1AdNDAP162dBQHDz",
  "key33": "535xqkguNEwVCTA1xTDWVr54iJmZwCmQDyZijM4wXFhp6FsxCvZSbEkabFHaSKxUAzh22dgP49vqQsXQ9u3ser17",
  "key34": "5zZjmt2JdPWFq6UfcsaJmZqVSmPdW74jt59gePNPebYoRsAZcsiSYUuMzYBT1mFyDZUZBvw5mHKTMbXRZTBuuLaP",
  "key35": "5swp7s71sQdmFCUhzj5gkbvpKcxgby3Mkz8Skqi3UN6AiWaXigAHh4ZYwbwogJEJPAJYo3iSvxXUA4PzfLRiykbp",
  "key36": "cAB9KQNXhfoCMLLMSCMjWsH2m1wpaX8hekSi9Bgepp624bNUAjxaXmk6fxcAh34ffjLRa7QRdsWSZYy63TqyE3S",
  "key37": "2qoN3h9GJ6GLeQUT1peuLtodx2Rwk8njZy5RyPrYWwCLFgNREfaTY3pCqqvEmHBCsWsKVDZCgjfYLgLTfWwNKgN5",
  "key38": "2tsXVmxoed2BAzEWHmNXvACgb75cZ2VgR3NSt9avEvy32oDNBCNdUNvnryhKs46PFTvzqPLtozsPpiVvuXEv1M1U",
  "key39": "2RHqvL3oEupJiXLR5qDDrB6Vsu1N5e1fmE37NHGS54KTA9gNjrRxDtA2HaLMvqofUamHjKnBQU8wwLmFhYmtkiD7",
  "key40": "AvhDfcrpeHFiauXMKCHVHUDgYUAmw6GTbdEn7t9K6ckmwN4XZAWCLpwkrvoqTeDt9jyUNgDJDaQB31aJNp9SJqp",
  "key41": "49ATjcWAdiKJBTyot6GqwA3sYgU8WBzwJ7HV9jhiVQrqyii73JpRy1NHFwvfXnec1MQ615r54MGeyrXTvpL9hKHQ",
  "key42": "3JHjbvHoG4f8kVsuevVwdMxMiPbFzKSSdcXfbvFFLt4PEhMqJS47PksZZD44JbHZsYnHvXctJjv85TBdgGBxUr3u",
  "key43": "3Ao14jwGfh47o5iqUyZpkrcSsE2wKWghWFV4afRZAajWXpLz8RQJDvvKcPFYC7WdjmChYBzPkYLnwtYS5wy2jo2n",
  "key44": "2FbYxuZngrn22d3isxVJ4w9LSktN1zXS34Pm7EpDjfaCp3gkEGc6q5e3fumigip7Ta7U4dMxXssshTvdvrhQeZry",
  "key45": "5ktwhkYfZTojGRi2niYjq7Y1HaMowD93trUXr3BgJRBwcYiof6p1idGuQzbcXUxb8nHneKgvrwi3bvKC3rT6Pdqm",
  "key46": "3jSdsmiK4jHGmi4dseRNMNWp9bwkRYZ9dXpsrbYXT9gEZsHWwcyEVAQLasuM8z85zKSr9YcxzbWr63Y5RQfx4qGX",
  "key47": "3ojQxoYPXr4TP7yy429Qk58DakQyEG2UdhPAfjyT5qG78sM2GgPDDCmz9UzvRCeCv4nM42HWUVHS1DbaVrKYbXnh",
  "key48": "5KJAUHSPL7JdUQwhFAW2NyzmzYGizCJGpf87TRNzUyk8D2ukMAqeyuYSKstxPHwHwc1nVbt7NFyZMT7F7BpjsBUV",
  "key49": "4GkPrFYcLNfwCxhYLBSDw3Dxbhd6r19LUDbb5gVND7vUv6ukxS3vUBDaipTUnAe4bscvD9kwN7ir5J4yCHC2ne8z"
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
