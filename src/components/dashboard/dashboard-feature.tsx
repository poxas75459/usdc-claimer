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
    "oSJuocMYj5jw8KyvunT9Hmtp4QoyzYXCcFyQnvnRLzRhtCRm7N798zAXHb8TMLsHHFLADTfuB1AAzZrEAbeR5Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhDaWbpTnSQ41TvXCRGHXtqGEd4kVAkY6UYkLPaP1bgHXNdec2x9gxc7qg8f9xiAKd7yn1bWLpKHioAPeA1iGhV",
  "key1": "2B7ToFJub5vGEU91rDpdKuxxgFasESTt9LvkQZKqjFn7xJrLtEoM8o9rZogGN8tJkygkGD9KR4SbEUP3JWCVp6is",
  "key2": "awGjfokM4RuF51owRbdi25JM8gGFWgHVjBCmp7oLtcza6hLiyuHFJBLvtKBPaPhAAnMWG7Q2mJKsJxjjWXbcNc9",
  "key3": "4cr2wsLUGkmFVuCiDjQsxg2BiBithez3qWkTX8XobaLYK9mgpX14mHweCfhsogUXfmggys79ZD1Z8a5cBysghNPR",
  "key4": "4HefnYBtqLUUXrwuYNJiz3Ed89UyWGBAbv7ChnmZR4gfENxAXC88mtL5qWG3fTbmPCbcD5SXYSH7NhPYzHhJiJCU",
  "key5": "4S5oM1AEfovFX6LDTcBzrsP1tyBvPGmgghtncvgqWWtn5VfrPxE4J6YtbVFF1RHifKhDkYG4ci4gjan9wBHySvt2",
  "key6": "4TWYP6csejLHKK4wH4K32jLo2qQVpoR9wD2FnewqnCaGSCVPJCgi837yChTKisBSMo3Vhf4ZhHJAwCPmQgyfRGfv",
  "key7": "2FMeFYJERR7Avbca4k77ENEksLEUEQfDLHehXtrN6a69ouGmDJYH8Q2g3TJLWwdZp3v1HPh3daA9mJtjxtQYqJye",
  "key8": "4T8KfZcuz922Hk4zbwHHP8KYyFA5JKX28XDPy8sgSGxxESKQ9cN3WEdW85D5tNCJ7K75hgwSE3CSkAw6Wxj2KchL",
  "key9": "61XEgZ4sSU8CkkcufSAs5SgeW6YPpWzbH2V1Y2L7NKc2zPefYWMFfVdXAr2ErzDgsRZQ8vyKTWRpg75FhDYDjYkX",
  "key10": "2pJgrFARELM1MhDFQgLDrSsSHMsXqkW9Vx7MyBc9iUFhjhzPRxccwg9d9hZJcpxE4bPHSaeeVmyCQBBi3wAX3jiU",
  "key11": "4BLy65SwytEMwKuNDtYZAPGhFpSEQVEU3CyzzZvSs2hRuMF2Fcj3kAcmVjdXUkC99TVM4tZHA9Fo7xf4FyPdgrp1",
  "key12": "5mmEbMBnnETCaCCWtue8549w7MmkLe1xuuuCgoBLr4e4dFuxF4GvLA4LXJmsDGzDPpKdjfNbkKWkxvMwG4K5ADxb",
  "key13": "29YVNMAWKZ3N8QCRQsE6FEDcPUeHRpuGSmkmEpsFpfau8upQC1dEx3bYjoFsLftmwJaXKRLM7sBUePgkdZvVN5KX",
  "key14": "4qQoqcARKxNUxqqEfoGka5ZVC3aZacvDMk88RuahwMnL9gbDW78caFFG9mLuiS5Y83NZpXa1ZZyTwRaVStr66NK1",
  "key15": "34bFSpuxEcmhRe33ie5X2oQZ85UoXHw9DYSFZbJUn3ndNxvqc3T8cyHdygmms8NQ2UiCbxcRwBoYbxUbfAxJT9vN",
  "key16": "4jng9EuxwyFFwXhjKFLdifs9vMgSvixCwGeH1erVpwuw8LyocEPjNn1s2Si2Ei8d4BworEJ5xANs9rRQFsBauNjN",
  "key17": "5QuLb9oEYTYpNf1ZEADEZ6MBakCJnBaxvE8HkR4Cwqx5sTjFYAcVyMGAWvzcP5pbCu3S1pbrFnET9jxVT7AnA5Sd",
  "key18": "UZafi9RFvH1wgS99umz1baP8HZwMhax6RLpkS1Ayx1986P1Vc5bBS3k4U29fzKrTNPYjwZQwbNMdwAQeXkEszcY",
  "key19": "2stZje2YUSUbCZi34cwMBj5MdQgfJsu5hQjScVZ4M1C8KR6u6vKhU9hAD5yYUNeRC3P8RhuYmGwPLJgrVnkW94Qg",
  "key20": "2m6QcfrSaP7uHbYRa3fsQf3t1CScuXTgtq3jaQZAafC8ZGJ84TBPLdrDEUzJ5fNkrqL7CdqAoFTyRgP6GiBpRd7h",
  "key21": "XLb6qrSZYHLyeRfDDz7TFAjZaEXF15LcjYcXpKgxNbCag3dapV1yZWPwu2UzGEB1KumBt9o5baB89ZmA7taScD6",
  "key22": "NXQ1p5yUmWBXh2W2Ge7fj8pJhAjJcdUFezbGArEPMKNx2LTTYQq78mU5GLDRkpcrYGNxNFEVoJPfvbxwKNK5aEb",
  "key23": "YZsRUphVaY11v5cZtKCpz3aQVCK4fmMRL9anbdN8CQnkErbHqZhPFZAMpUPCjBvyfqwvaWCrxSXzhJ8MBDF5uYN",
  "key24": "3meaJH4akx9euZMjVtuquYjjBHWJkCn9ewX7ESvMsFbXxBWixYnWq6FKN4czsvp136Z1twKeHYzi1HRbqEX9JbTg",
  "key25": "544SkRDmcfCk3UdXhnNX4haoPtG5WqgU2jwbzXe8CdD9QQXkK5i3HUEPfw4WoQYLdnioCAMBGTsQKHrqbibjroH6",
  "key26": "zktHCFY9x2P2apjeJHtH45R5S1fhRbmZXEP4gumArp9hRYTz2zvfcEj7nJosGNq3K9cHuUo8Yoro9JNDma9xmMx",
  "key27": "2orkSbp8VkXMVqHKqb6MznRtqYhPFhr5dMTR3b1y1wZRccma58mPPep5cvmqrtSg1uvSZ3S3kFSzznHNCsFv76Gv",
  "key28": "M21WSJSXRGNNWsKLgiNnLt7QScztGQBVbV2dncqU5YyQaamxFyY8xEwopTfaC7Y8t6DWvmCH7vmXpQqxypJujaz",
  "key29": "41uJnfdkE5jt2cnZ2ZDZ5XJa8zYcjV4eaM5u39PRAiiLMiQDLrbwmB3PdnT9NT9pHHWBks8cHBdhedtmeN3aC15h",
  "key30": "4b2UdwNMWan4iYBbkcD3jvancRVZT8zbkHSbezSMcsyE9bvbS6whN7zjEij4weh4W5mvtYsUU6rJqm1d6ksJwTYL",
  "key31": "2Y68nLBgDNYYAvafXskkao1Rvrg2Kz7xNqwZ6AoG4poPtdN8bs9PPxShcd86UyvSPHuLdYA54kDWRYhQ4jwoy8EK",
  "key32": "5X42cKDNmgNxWRe62EJYsVA94MBFsZkvKEZ1UQd6P3LLwUAQtHZgiaBEnTj66bpViHzP45bp886LN1KVdKdgXCZk",
  "key33": "5EMnrD67r9pvHPTH7MRLexszxGkC5VYwqDmjGzuseFfekXHPQE6n7Y2uxgFUZLTse9wgDcEKbwxRNdDzhdtTo7Km",
  "key34": "4wJNwztv9y8vcXKKapctSYzC96gDmhdPnoQBKvP5Xah7myR6iQkTZT8GRraWWBM4krRGo5DiQbEmzFXsMztQMXX5",
  "key35": "2vahKdDEGc47danZZ8vkVHqkCW7kmBYFPsNgsbVEsTyL9qCahxahrnvafrtj1RQXMuqk3CzoDmn3P7ZywzrcR64b",
  "key36": "2UHocqTxcGCMvzs6ZthSbppSEEBneVhrgiggMKZT1ckfjbnu5X4KuvRhLEmEZMhKTeWdyWnbeWZgJY3i3JPKE3fM"
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
