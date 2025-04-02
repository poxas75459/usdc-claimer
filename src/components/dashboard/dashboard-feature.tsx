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
    "2WhpmvhZVu6P83o6wHGFopaRuEr6JUAiqEDaDNvxAPXW7RQ9yqFt99wQ5TQPBrK1rwzVQ2pY27FdZcGSmf126HZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwVgQgVmHtE4Yqiu67GVW7JnPUfRKLPUQui6u3wRWSYk798vjExeJTnknpPe5LGcseAxPr4fNygvrbrMKRZU7dE",
  "key1": "4rDpyMsvgLFf8ncEXNgZ3fed1gM4yXbudWretmNbifCZTUpEW7fccuWnvf4aNyP5EPZ1HvVDn4qtxA4KQNYGUmKj",
  "key2": "4iRDkiCvyAKPmQzKVk5A6ktCW4jan7EmLCJe4958XCDWGy8EbsomruqqVkXR8AXC1NZ7E8npsqwGzfu88zEaD5UR",
  "key3": "3DdH97PMrKiqZoNmQjE4fyVRWgUZL3f1mAwqppqGQGXfAXJEmRnxtedN3whzzRr4EHAPGvTvhEMRRQkNEgDZwNdz",
  "key4": "4QiHddBVXj8VxcSRSfvuKLhPSz7RWRJKW56UZ5XSR7uC1EhUn9CAutZD8LeqB3jrw8mVfNFoEedWM2qi2vdB2ho6",
  "key5": "2v6BkryNHbULALpAfjQpjS3wEnpvfrE7bmSyPaswssV4eoK1FWnRP4aaLhoyi8zduLT69ripYVJsp6nMmJeuxWjb",
  "key6": "3zYCVbt3xWv7Xpy8SGgMjPDwC3BBq1PmLF6BamyAP1MfXX9npFwTCp2P2xHYzDaRgAB9py4P9m4qAg7dfCq9mEbF",
  "key7": "5Rrp83UZxCzgGTygBjBNvF5R88s6cc7ZETvxT7UzojT1Joo3cPNTarAmXov5uwMfEK7uHX63J8praAb78BhiYk18",
  "key8": "pHsXLd9M6YbVa8k9NyMvqF28gwWsLZfABDTTRvd9MsAQGragqKQWKuHBvN6ZqpmQHML6cVtXZoDCnzBdNmhL8Fj",
  "key9": "3vFiT2Njg2DC28C71LGLdRdqW7EhMb1QKygs2jdvXVhiTfcfntL6VXnmUfYTrrHYcjW1rrDrDV7L6xeu3hANBEME",
  "key10": "3A7SGgf17KtnTLmBqC29ygGncezAdFdXYCwyLaYnrPm68GJojpPgSHkJwo4MB8FBzGd31T1kvdJ5WefXLPcyGiE6",
  "key11": "21rgv9X44boNV6nJNWP1amEd3bVKvDP6JVHe4hQNKUs9uepotyYGxQZ8pgQW9pqcoEPzCvgHT42dnn6NuNL3irBz",
  "key12": "iJCFjgoZf3BQHdRiuVYtsYD9VA5nok8TEMMbAN4seKgC4cT2qAEc1yc5hWjHkdgREQAMYTmn9YfVeQSy52vgtaw",
  "key13": "3mRKwdVQTSHnLCyPqzNrYDFURoJfq4XTKdnESVLyDBZqXWsr4uhgSqd4T3urALCGZPbfxRivYBopdKn6vRiE971W",
  "key14": "2RZxJYUKXUB619X8s9Rp3WMFzzYpwmrfuEtxDTfjcqkuuus1Bu4g4n67psoFKrMjERZL4sSfFZwd4yo6ynYwEt8s",
  "key15": "3vxD5f1TQDnpcxjJVdrWqyaZpPJW9Ka1QRQNVDGFkMU1ZJeu49vprMfvdS2pHoucTRb8dXyinereork4SxZQRMSG",
  "key16": "65fvy2CNeE8x5TDffVni9KguCuQ6G7xVcRH1Ux1zkfJHx1cEwVKQaMWC5UBr3SavciinZy2dPJx7b1o7BrKQPdyx",
  "key17": "4hZACJxCFan57d6DwB5rNgFcVP2EV6BSRd3bVW4rpr92qpYAm463pN7Xu1CHirv3GCdu9PLVNaLeWE5n2w6X8Fmm",
  "key18": "5623ZS9p6DV9ama1fwZn8F7hTusFydxHMKjkYdhyLmdU7asoJ5uXDjYGWfaEa6N939Eu9HdGqsZHBRz9tTGLkz3J",
  "key19": "56CzpTFDtLPjjDdi8GmSs5yhnWWpVudFkRipxQNQMxqqphSZynkFjnYcjSynnC66tKs7dosSTXgKLEZV9NQpqf2Q",
  "key20": "iwF1FxXe85LwKy5AFhXgBf4ZbWHgHsNFZSSAm23K54jG79Ka2Sd9SxrGb7RC2NdWB4EGsjKCuv8Sa1ooBhLQG4V",
  "key21": "5g1PY4VSMPsSLscZWYXcZCapef5yHHbpiQCdviTUBiQGW3rmNDzQswhgbXNEUnRzHsTGg8vD1jratVWbCsGN2xbS",
  "key22": "2cnneXH9LtSssDjxnVDnRR6akuD9TqDFFEC3yicxMv7C89AQLvn5DJASutfZVww4Mwm78rRxEtD5Xikch8hsr5Ys",
  "key23": "4GnrZ6MrY5JV13QURiLxA5ieufg7GygF1w6gBaGqQbA46MDmGN5nCSFMAp3RqY9m9JDgzwmVbLTNfExo3VfAQbd3",
  "key24": "64DdhSNCPmnq436JDEA3hJ6zAdQyrenW5aRdgwXHswQBBzKWX8SbATKJr3WPHMNbY4MANEQKaBvR1LXbzADG3Bs9",
  "key25": "5o29KhmF1osGhzHNHaWF1cD7YkKAWFWmjSJEkRndDv5oLFZRzPRUaLdEjFh1wyCVCCdvoDjJmqvXKM8MKf984Hzv",
  "key26": "4sVpFWfRsNtMkK4t6CBUkHhojVhVYHokGsb8EivzPeD9WBCY9Tz9GhenLsS6sFZ2dLxoFxvwX74pYEE9modb54Gs",
  "key27": "2ojTrc7umwWwR2dUQgmURUAxbAYpbZ4pBqRJg1FpHhUCDuxqvpiMpr9DT9qQNeo6g5Ufo6KBNrLPxnei27HcPfCd",
  "key28": "2uB7RoHQdx4mi8W1JAdm18CiTCD3mK15cmTA8GuwSDDH1jZ81ocntpX45GmHPF4ERDj1yJwB5XBGHspNBEen6UZJ",
  "key29": "4FxtKYk2ksqGMTD7QdsuMV8KUM8Wq6hYf9CaTggjRqWkPiAQMScxYKkZwgCCvq2Rex2QLcs9F41DA5KJkT1avhW4",
  "key30": "5eZA9Jbvz4uKnNpT7PdBoGrho8PN8q9mToVW694zzjVkTkExRp9gRxrZZBkFca8Bh9f2bhF9puews63vC2MnBM9K",
  "key31": "3UqmeXYYrqgNgtKFArq3y1azfyQEEQ8NoyXmCzjRjtd2pgejtN5RHZUfNMbcPnh511mnD3evYZrFtTYJVLASF2Wu",
  "key32": "5kqEi7tqwKHzsLGhpqF9gs84u4PSnzsCPjoQL2NEF7RYWQGBq5fSs4wdLZoNm3cETi7Ni9x2DjNREtNFT4o47vCX",
  "key33": "5SiLeY4eYj8F4FfxtEgifJrJwinvNuQH9o1Dup8tGKT2ctY1CLVePDanFWCLRUxr1GCxKyuyMiJWN1MkD7fqvFH",
  "key34": "3WqF82RoCvfKXMgvBmht5onhR9Gq5xQRR28171VowaZ3Cox5buPWKKFCishhemT2qozhHiYYNLsZRghRaVzVBV4g"
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
