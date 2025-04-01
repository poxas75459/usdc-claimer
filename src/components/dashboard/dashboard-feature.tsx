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
    "2G8etg3ugUxdxLKxJpuYCXoPv4xSDzV3MFhPeC3Nj15UaRtMG47we9nXkodH1jMusjYRwtmtqqNv43549HH2paEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BwQ4QRFfzcQu5Pfzw1ADFEUjmWCtLi5cq8kzY5Tv6twbfsiq2Rh16peMWufKQTMfQaX57dDFpzb5yPHBSD3XzT6",
  "key1": "CPKB3f8nbHs8DFv8ZmMwP5u9VpZRtpzz6ageQ3EURvnZCnYUXE148DBr3RqrNgHTMSUCqBXezJTLDLndym51ZFt",
  "key2": "5Jb6CkJfkLhydudNso2cdTmrBHKV9F45k6JPAqdEBLVib4mjQrxJfJR6Yr4D3CvE9afmszarUALdKGTKQMyTmnf2",
  "key3": "2KDqibWKEU6dRVBdGoHv4Hxyd6Hjoif2NEdKUJJyDqd1KtYtbzviVjxTBq9QZGa3NY1ZUHVDRmiTBRubz3AU1QYu",
  "key4": "3Q2dNe1PP97oUr7nqqjhBfRZd8rop6SRbBuPsc27j1srVtYEzksjFjZKNtzY7WCmqwMzRZwoAp9VHw52BqFAJ9FE",
  "key5": "4wSmXk8mAo8CmmMqczPkjBo6zAcgBrRL1kkpXSU7Gkc921sEPErDzxu9Ydhq97uNdUCWNbM9hqkTnaEWBz8kunqJ",
  "key6": "DaSNr15VmN5M59vXzVXq7GLK41uRZ9G93r3Y4LkQnUmCgVaCR6Xwko13eLi683zKTd89DaWqKvaHjehG7kCaP4L",
  "key7": "2vSi7sxJ3qD4cPKmGC1am9hqMWVf5LmxamFE4JA9zfiDfEyXBmG8NAHKbS1DfPpVq5AYf59rPjNM87r6iRAByPQA",
  "key8": "3wo5g4QHT34xiW9VJepUk397hTwBw1mGLpYRWmJxnrYPQBX2tGgGtwLjJHwQHT7rZyzxFcHZHStkyb6bq3yNTarE",
  "key9": "5UZTjWhJUp445QQbuvik3GGq2NLga44mDuGmyZR68GK8aj9wzcNayuBxs2qrutgze1YqyXWr7C1DWZcgLykqYoEH",
  "key10": "45VQmWUPp37hNbz9CYmyJNmEJ5f9zR5UU9pWgzmyJ5pMYx9YTBoQW8bvyGDzY55yuuVysNPoZZUARutRsShyphxG",
  "key11": "4mmQSbzq5xGsCwU9kU1uNafRBBd9rFjUrUh4Sm3TkQ1rG6FQnn6XYaVHSJGtukTT3666FcREAuvEukt5rzTFxHUd",
  "key12": "4aEs4MTXtPPJai3AArXc5cYQVAzi4SvypF1j2g2RE2fs9byNUbaV3A4cAD4jaRAcMzJc9SfmvLRhxDhdapUJBjxW",
  "key13": "2buUDUavcws611WNsz4rbkDsRdqD7U6WgApZhgZcBTsHTipfJNG9Y5D4Rzan5A4VYoVyc1pjqe4XituegZ4XEXJU",
  "key14": "H37rw3C6uzuTnAU3oqxFrxx5qPnaz8MQBuAZHXXsjakRFTo1fyFgXoPiTRmib1qdv5vGBd1qJ5AxrUVCujV8tbD",
  "key15": "GxC6obkRut9PCugmvqy8B3uH7GfCaVc7eLiqQpamteznmEkYXYHNvCie6wuqAnHWAoCRba7vQDXn6hZJfLQmGNC",
  "key16": "5C3CAhgvUZMfeN9ZLxVRVioFMZq5nXyo8LJbTW3Nwyxh42ig339S63CEF1CV2YVKjirkwi9dDCU4yg2PjoWz94Bh",
  "key17": "3MyehzbJ2Nuxqr1YvopiZGoSyNkumwZJbdkr9rtoESu2FCjG18QeyN18edFZLTET3eCXoYmxrwKtgJNgE7Kga51x",
  "key18": "35SQBwqV9eguSTib483Z4URP1Kjjnqe8Q49gYXE6gYUCuT15LVcT3K4CC95FyH5L9fMiXUpW9Rx871u5Y5H3MinU",
  "key19": "52HUm9xH29qqK9xCzqcAERuemwapQ1PjDHVQjBXTJVJypivGT7VduKaTg6dMWcMibjsE3fZC1zc9mLhxmcW626CM",
  "key20": "2ojYwuEUvWJyMPxYLmJn7FzNX5BraGvZ5EenYcckf2FHedvXEtVoXzBktrsVnDJc2AybpYCxuuCePk4191Fww4Zr",
  "key21": "5Gg2Kvoo5EtFJq37hWvzadRCr2hqRzSe8nYoKk1mQ1mx4VHetejw4aCGdY6LkA8Bhm4TXkTikxZUDvSznW8y4zk4",
  "key22": "5a6dkV5CAFonk47NGXQERptACCTJKB6RUeE22BpzwpdQCmcvAMS49BjJMfY8hDTc7qDY2j7ajvSGiGudDr4HZNdj",
  "key23": "2vTTSAuhKiy8rayqZ3vPKHVVxZTewZP6rN8jDzuuoiVU8GuefWVTpRxQpz68kByd2vAW92DfWEqV8XivFLtqAEE6",
  "key24": "63YCmf4iRxvoEdPcD7ZhQxUNMxcMaUEzarhsJq3DfzWYTzdqFaByoYHhD5zQfXT77L6wGJ8Rid2yhijE2M5HSyxu",
  "key25": "4wrybntQq9FhAaNV9dyLeTCSWGpm8qLFJzgJk6vzKYErbYcmzZpnFX3in8XvoMCX7H2WzV7itnams7qCJXXfJvyW",
  "key26": "DjoJWenLf7q7xXrLawKx6PBYnZNzYapzUFuQwZKeUN3fLCBrxRVsz8xtwcdweXRTH7AFBmKKJKFofGHWzGD1Pa1",
  "key27": "2BTSfNshm53n3cChYa3BYKYKaxhob9tpgQGSXwrbzZ9mvLmd1pADqSBatvBZnKWkXse1kLDghcZVDJS6EJhRGGud",
  "key28": "51CgC1UaHe5mi6moTzH9r8Hc6HKfhj4qkiKp8gfCtLgFqyoZePquTwvcBJkG3FHL3mR6d3MThBwGAcxgeUUJDL9b",
  "key29": "2FGruVKFmKxwedSacXEQpJzexiVMcdH2RDTMKEWL7DvCTSf9XWESPNUcTaK5zeajnSEt4aXeFVteCUwnEmTYKRuH",
  "key30": "46h3iDrNLSWXEsPDyxzZFRR9nwGSg557NG2FMJWWjhySvxMN7Nw2mf5GnBEs47aLiqE8Uy9zmfrTFDD7CdBVubK4",
  "key31": "5GCY2LK1M2MLGdQcyd5WPGcHacp62jXP77ymnaE71bcm6FcgoCBS9DYPZuPTCB3Rp5i1ca298LDvJFmBNssMkybr",
  "key32": "3JBkPLcQojBvW7For6c6vnh5QBhxYWi1SedmWZb9fPrqLaHPf1X1YYtiyDQLz3RzLAejaJynMTUoAJVpaPUCaeEj",
  "key33": "5HCTqmZJVu5KCsCYhq9y7jE7jdj2WZq55wqxr2FuT1zLGaZNz7NqLvpN3LXZLhwZFJWzmg41YDQfbRbEZjgCVLE",
  "key34": "4ESqbK6uhuEiJQ3P9TStbzPBLF2TCGznB3WSuQaUU97G8hj7nvX1nrKbAMELCsYuUesJxG8Pur1tmgqDGRxkKnYg",
  "key35": "2YVzVqvm38rvTo5G17DaSQbiffLTWTCwE32JGxDvpnwzJRVdkwBmdeYbwYbir7bT2ZstguNuzUhNdFXoEj3NSCJj",
  "key36": "ZbPjtwDnKd1Qnbxkxzk2UQvDWLp9CYpUVFTxdTe8xv24GZXvbCq2o3Z3wzsZQhDfoQvyFa3YUPfpVPcXqkmBVhZ",
  "key37": "3NsMDdWccKQNYLtTBDttyhZnaHLCakM8EqurCC2kbsWWMY38yswexf8mtN8kKJYn58LPxvd2vD8Gmvut7AnWttGV",
  "key38": "5p8r2N5MXPxWHXMHF4cADXrvAUer7jHEsESNiJHrzZzgb5ociv6oGm1XupKfLXdEiqcNFgJGmUJRRGJMLWr5Uh8H",
  "key39": "c9P5VoN9FDHsJSgiAQFxgDUHe56nsGhgBrwovpKKQUKaNKZDS35K11Su6kVWGmiqzz6TRjWYoSPsBUAHzesWRTL",
  "key40": "353mo1SXmm7snz2nkq1TR97T3q93UJro5JJxKguyXjt3PD2yqF56prsmCoZcteDLYVMHAA3NzfzH9JALE5F9cN4y",
  "key41": "2vx63VUu8WNnZob9LE9mi82YwCs9ZVXLY7A1oSovLYnrhXLheKfB2xNDjdTV1ps9PMjo6UP7HSvYuqPAQjhK7ruM",
  "key42": "jyZqi1QAuNNoiNwyRFvuwkTV6nQAYU9uvfqGia66uFUwLfQYVYgSnuYdpncH81WcqpipzX2DfDiF73mW14B8Ksx",
  "key43": "2iQmfxDwey6yUmQehLCvQ9YPhzSVYD5HoNDotgE9Q5seYZgcunzuLk9eKfDmBLcd3KrubQ2z5kDDjyLB1awPi5N",
  "key44": "5YemHDp7N82ToJ6zDMSH1wnFKkeMBTQroxkcqP6rR2VC1dpxZkeg9CNjKAQpBoiYqUjv9E8DJLRhbdhGZ5UwPDNw"
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
