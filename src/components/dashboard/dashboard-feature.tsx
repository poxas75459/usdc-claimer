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
    "2yQLLqHpoHksxsVnVuSYYCHRt5TT9MJiidqgd4i75KKNwZZf4itFyzwwHLUMRgHEJDaqQsDbZrpcMhPtxwoZaBWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nybRKLjEAJLHtkCrRXFkFCTYM6j6u3pE3jGTuBMvLknUiot2crWeDChDQKEy2hJb2CVxvTG5e7ri2CVpiNfaLYH",
  "key1": "635UUkeeJMCk5G1KZDBBESEKxpScBDGbQyW9zVbQDv2rC66UhBzAnb6o73ek3RZ5R1dxntdakBJH1oKPbuGRNoGw",
  "key2": "497NARe7qBb4H6aGK68Yg2nJcMgKG2YA9avDCmus2HiU1UX9SrZenQYYCjRBB4Z16wEHzEKEgyP1b6TQQzP43UL5",
  "key3": "4B7hcgVQm3mwL1TQGRXsVXQLhUgTsG9xWLB7m9bxPuhsVgqvu4pnApJrFYyY1r96mHg14pUcPZeXJGWgkvZAkUxu",
  "key4": "e2YVC9aBKmymc8GpxSb5MXkujUyYCqZtpH7Jr3m5YuvX9fwsEnhyB2sGZf2eSFyVsv5yxEyHLdaTUtfDWszwkjk",
  "key5": "2WJu4yPD64JnKexA8DadRAwcyU9XvPEiUCsiVXAk55ssUChMdYz4qWYonWQYe9Eu9UhSvGVh62WntwBvKAe66Bi2",
  "key6": "FA5vAvSDb5KwWeKp8NLotmnHGaP1YGgjNkJ5TwfKE254tcc6yf9tugxqAwnCWKaUeYcfnpdgcrqFfYNpMH6q6rh",
  "key7": "5zXVm8t9KKYLLLx6r6ZLQVis4Fa7kWP3nY2N8vqGB8JB47vbPpMpNrihijpcDfNbywqSworoATbkPhtE24KkomNM",
  "key8": "3wi2HnZo9fccm8bW2ckDh8emhZDhMYT1HztJxsm6AykeAypZigvX8WVZtKmsTkWboQmMXGaUaWbM7xBYV4vKhm82",
  "key9": "3eNBtsgoULb6PnWetpuQWNsrsp5pSp66FpgVr1sm1Z4ickVCbjGVxaLkkDVTgb967dNGhgWwXC5Af3ej8uwfCngg",
  "key10": "5KY6ffL1Cm3XH76PoFNMa4v2Wimquc1cf5pJD7cFiv2wQLVc91ynfdp8755resSQyWUaVoU8woXXVyPyfUeBRvYs",
  "key11": "4yLmPtAgJAMLHqkcNttmyvKmXsvnanz1ZGYBGG4EVP9n8R3sNrt96ajcLdbH8KZjFYKjY2PB8HNf6GzFyfxnTY7u",
  "key12": "4snxuDtsMfAFadd6Xi3EG9tZnRg96zgJyRNMgvV568sXdccFVNf8gqFufbKKYUEt9kwXtpSPfhpbrhVz9P9gio5h",
  "key13": "cWikeiUMPq2F1m5F4Vjoq8xspU1BkgyuqBCsKogyFuhcrpJrCRf1cMuAzBGtbNYYkwJoRtcG4khFettMuT2oMsR",
  "key14": "2ifgPQ156BjCM3mYxcpTNMr17VaxuF2hVsrPrGZum9Dw7XpgEgT48BnggXryWgSTFA2axMrSifFpzLuS3cUqCfKn",
  "key15": "2srXVzdgEGcxZXdrMk9nXRJLXNmA19fngSCeN7bYzWGDWzhqPiX6SrJMBrx1ZTY2ckqVoPboPm417DHcqFggb5iA",
  "key16": "eRjZyduWcH53UsCURQVp3jdEr18WjptMyijsz7TkWbLBZV4b28scVQiQ8jxXdGVD9azEN3FzeG8zXiyGRjCiUVh",
  "key17": "5Un55WQT59U9KbzdpMLg13hLfDpRWcCVbrmFuGVfoRdjSScoNZh3HigB7UC54FUPSx9p6DpwTAJjPnwDNPrfdNHS",
  "key18": "4ZCvFC2uB2Q5qkN8m8W8zkpowRBbiH8w9SGGNEiW6JHcuPRgLaWvocxvYsU9ViwXjzq5MzqJXMbu8aVxnzqDyKJP",
  "key19": "uct41ev2R81XXGRRwgZUv8mzXQL2wMyyTbpM6PcPMRqUtj7CtkH5BSwY4ucDC9nxZY2FDGQE9S6d1zvbKMFm55Q",
  "key20": "3DghhGbWDXgh6A9XymDnDaKyLsMQmykPoXuhi55PoegwbdFFXsUvcTEKwyyoJr2YBttuxrkFaApMFAk3wcDQXzes",
  "key21": "QgFvyMbEs4hCD1mmBdexgwtnaaK7f2LSbCzLo2rnhjetLNa1ygwT6hph4mBPxtTmSBkW3j7XZm86QPjwsVJFW7H",
  "key22": "xfauF2HGtee26qHpuWGj1vjc8RaCHuP1DQHecVQeQm7kqjtTa6qmH1P9y51BQPFxDHoTow8qL9WqiYfYiKAqvfg",
  "key23": "4kcmNt9xm9hZujEgbotzdneRttK2es2E3uChSQ2MwhC4uv4EpZhwmsa2isfZRhXxjLiWZpfuyJ6Wu4bfxk2KsUKz",
  "key24": "5ZtoS6G8tqRKca6NhrxcnZgQdqNEn1SKHbFAtc34EZnM9zoezMA3z8ATQQvJGzvwbGmAU1bTTLU8G3S3LV22Zv8z",
  "key25": "fqZpBmWggN8QAb7eYP8YqjYG95S6tsELP16NhFzYNTksn8gYeBfqTCyxy836uTzEcMFqsCVGtVNn9PxgHffCPi5",
  "key26": "2SMBHJByXHaYF973Cr7mA2Zq81WkdvHiMUNxeEBBjGEpptP31go3czPaNnkkd5ez7XoJ4oNq1Z3cshQDghoHQbnA",
  "key27": "3L689bfYzYE8RXacEeugPDgQsCvXLMuVQPEHYdBZ4uBScvKfKpX6KuKvmLJJ9WthyBefATMxQGQxYRFmcadYj3iB",
  "key28": "2zDdHpd5nQxedX9rgm7picgdtmniEzyCRpbXcjxcBaRqQ129rbU5aZDtZXADR9pxEBCLgAqwe9YUpRii8vtGvUqW",
  "key29": "2d4VgmxjG1mLK4gEjuv113u7FERFCLKUEF5nnXYEAvB4Pnk2Q1P79nkJAZ9w6EcGeiBfMkRv2aGGSW2CHtkuvzDe",
  "key30": "3EfVHSor2AFCJ2EDpdHkQ7HkKWZgWury2t9J9cURKVpwQ8QQtBcUAFLS33owvG1kc4YGsEnZiPfDKZk5UXJzwwMf",
  "key31": "3LmEqhrUUwBjMwagehpaCeQk3PKFxq74ZmmNQ8zZLiAfREzyvF9aP2Ds7DBYnXPkregaFjNcjJ6tUEUb3Lm3f62k",
  "key32": "2LXTMG25sTzAz4eCZQwQc3AKyDYLHu5DVYfNatGm3ENbzMSL6F4gVSVTS4XE674usU1cZBx7UtM6sq6zMYmQnRBV",
  "key33": "3uhYiV3bFBtYbbDDM7FUfiaFtmESf6pLmZFnVAUyFASBT94j7inTNZqRQBqYufRZT2xeY8DJGSTuJzSN97NNm1G2"
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
