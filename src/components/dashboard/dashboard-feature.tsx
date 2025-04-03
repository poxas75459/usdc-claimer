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
    "5voQBtE2Eh9MHw7oUq4MMkh6RReLoJeSaaDf1GSnQ66eWvpPEELSZMCDsjz44H8bhFqNesgYiHB1UMbbo1pSjbsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Epch8uY3iTurgzyWrK6c1uwmG3BVnBW7stS3TVhANcf1FBF59azLwvB4QcAWS5R7ufGGWYVHGxZtee9VNyceo9F",
  "key1": "4BCfCGs6hS7fSBkD6JxBe96sJbr3vQPXf4xGq6oh2UFnuucuEpWn62J4tfZC6znZGyDG7UjaoEVhZ3nksiBcAR9y",
  "key2": "53yM8NU19sHjyphpC9VB1AjeLYmofpNmWP4UaVfjWTigQyhnKyEzZY26yTS8ej6JNa9kteUzkhuNENYPThjTCfTa",
  "key3": "ypvf45HkkjDNMpUcgMSs2iyfPiTM2K2wvyHgv7zjQP6SoUsSRJrSGFRBqaLLr46UQwnXuXdZzyCN8Zx1JRjPeKQ",
  "key4": "2Qgu9Ypv1FApWtrMpgVHSABDRwxYGVdky3SKWbHg3JX2J2JQMSGmCbdv5t6ZZBXGpykhmD2CUPak95HqDW6NXe5t",
  "key5": "26f4tsLnfb9Aq8hkwxQW9KaQCVCrHvTFzECrgxMhYJxE2g9evWaWMca5YadwRNWdeptTBwHKTipX844KoE9LN2MR",
  "key6": "3Wryo9kyyW3zSS8VoMmf6ZSdMAgrG6j2d4sp8rtJxGpMUNc7f4APj7smWPxietetpj7cjpi9RFXNg7GdczB5Qmrg",
  "key7": "4UsDEcXk3YvkTHdeHagk4RtPdDKr94jNdVVzjKBzMaY5k8CQ3ZHt8rSn9QkGyf9dCh3eiAxsznvWe1TpUnGvwaYt",
  "key8": "5HviYXARxPbb98UmwvQK6ZkZFqwXZ6LKNUhQei1pntbx8Kv8YZbwNxzu6tD4bD69ePiumAHBKMRa9GUzghAUPTU7",
  "key9": "5uyjsfaEijaNyWWD1oRmeo1YGPUiohu5XQTSX3RuRuKwX7LwCf1DSw12T7EVtuwS1dpaEyF4umAXPvfKmfTX346h",
  "key10": "3G8Coz1BoSMTS4NddTWAPgMGVzo6a6YioDLVU7EnSLZmRvpwVjAT3d5DJc3ywUg1RwsXsPHfLuzYE7UjZypnuezL",
  "key11": "nFkuoP8gSPxQmUejNEK188pRY2QALLKfRCLzy4uLYfVctR8BLATohuS2ofeWLD2HBuDwuzvhsXf3z7qsdPqoSTj",
  "key12": "4Srmj4H5KNidThfrndbh2hyxci6ED1wdL9CEf8BsWuQJxfyzsc4nEPwL36GvgxvzAjnUjVbRot25pakg5YN4Ls4t",
  "key13": "5tN7Ck9CGzF9fJNntpgHi7SXc29eTCrbJJByGwZp2H5jhdRvB5GgSNoRw8VjmTtyjussPMinykmiru259HHfcvRa",
  "key14": "2D6LXLHFr6P4SGWZVhx2aovubi3GbbwJXupx5YkarHiX2uL4UFamhwff61Yez4nSUXGW3PepHczStTq5uLQzc5Te",
  "key15": "5egESyquVdRHgxmnFC1iaR9XuKG6KCxCM8aoqnUoH3FAJ8mpC48dWTcGi3E5v3GJG2ipKUivD32sUqP76X7siD5p",
  "key16": "5TF1xJ5kdGAMNxsuJg1dwuBAeLuX6PsCRmAyPaXqDfKdT6MfLWtbwYD5MQHMEJms9KYsedL32RdcphFh5uhrffvU",
  "key17": "2QDp2yafKYZSdagi7pGjeWTKbGVjZoUfZyaWx8KeaweRNXC1t3KCJXwr951x42xw2VR9B1WpTqCzFDmb9uMFeLHk",
  "key18": "2u9AByfLwRXSSZWVt3HbYZtptMAjqXeo5ekLXzKW4uS2UDmWVBcTbpBxXajGmPvNpDSYb25j44AiapATLFk4FLB3",
  "key19": "4imKdU7nJFtwHNtxuHN66p7Hpj5oakS5sJTZ7RxRxELp4hAtxTCvp3J8uS1CXYLc9j2V8K3yPenGZPHoYQmFGnXD",
  "key20": "3hLwKatxga8cYwRCPcZn3SS8dpr8pEZ9dRhhXZQdZADtRmF2GYdq4QZtLSbQg7fA4sSgRUVjoQ3kHpfHLmc5osFS",
  "key21": "59d1MgDeUZzC8HUdYotAnLYxvSTHeRKutEiKTm8p6hkGgFnnKPtqhY1i2m1TDmGjVGPUEeigKTDASBhKbaWY7Sxx",
  "key22": "2hLd9jZeBVaFSKovWAwwjAjAvD1sgvUTT69SZZxi7L4YBA884VHEGJrJY5cR82sCvXgkxrnpxPKycSYSDbLwksAE",
  "key23": "4rSBUrvH2s4Ep4RRhe1KVcymD9E5caXMLKuJzmQ1aYWUbXn54bPBJkwmGJtrWfgrBvaPtEJoWB9aVQUTCkotxg5V",
  "key24": "33ngAJdTaUwvXE3wJmeLF5YfJAx2WjqLnSh94JTWpT5qmTec654btPfRYvFXGFhon2ARwkfVE4RiJbxyyen8NGHM",
  "key25": "2GKtdJWGFdTwS4rbqNHH6mtVctRQSyNeFCeuQEf79jQrWdcMhmBtaZSymNL3vynpTcZpCoTYV7BHgLk1ENoU15R4",
  "key26": "555i7rEbr8h2xXFqbREnnexLJgos7UMryW8RUvEdkjDoj9tRy8KnYZ9wfqo4joZQA8p76G9iYWtLHmNrfsgqQbyS",
  "key27": "3j5UgdtFh8xZTWT1E5DZg8tA8VrXj8diGPvFSjSHmCQaV5WBRG114f1wVVbq2nT1FDnzsNxonghz8nDqwRFM5HK8",
  "key28": "2TQoZeWje6iTr3gGUBYNspR2RXZVvfJWxF16AZcPQmJha3rXj3hyWzJ5q5ts84nELGxRHQpHTQbgBmoutJZ6JEnC",
  "key29": "4obW1sP1qzxE6fwPZvTAYFfCrc1CqpKCA297Q1MBJzUCRP6uyPArkc5hBoehDyKJm4atTFVqYuDW4Vu9DAxPfZ9b",
  "key30": "4NJuweMT9zEJP3GqaH8QexGDJ4SgDGCyL8yaDU2VJWewvHhB9GtDsTyUCUCAMQPz8SnAQ3t6jLyqiLAVhYeBCW47",
  "key31": "4N1pqZuYW8169g8r8s9uByBDNoWorCMaDTHVRCGvRM5zxi5VZwfdC59t9wdB6GytiXW7mD3aY81wH346kqcUeK25",
  "key32": "5AynkwUmmhc84n2mKBKdp7NKwFvFo6uK43Mv4Lv8Dynsovwa5VPcbQRKFk6fFgRKyxdANT5mbypQVMmiFs1VFvJP",
  "key33": "3wtKfeLTPLahM3AQifgaXLTXJZJs9TS6NTC93ybW8SfGSAifskarnniWTnNexVgKJFCFw9MMHirukSBPjZxJNZMv",
  "key34": "4huhEyZBAE1fWsUytbE9ji1qs2PMTCmuVnHu1tPhaEuBaYjcmmmAA8fuo5qp4Qk7VjyWf11eoiia6KEHrTjbJ4gV"
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
