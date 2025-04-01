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
    "2yK9NRvnw7mejnU6JvKmy22XS5LbFbAutd8ViTVcka8p8FM9K7axfVNbWpAAqqVvHWKg9UrvR4guMc9V9G9Q1EbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfkwM4rZmqpQ7TzVhX3G8NqB5SrEiaUXz7Xu2SjiEeyFcV4yuX4dgxRbMkxvSJCej7bn6sAvxocsieUvVqPPryC",
  "key1": "cuMwTtqoSxpCZWTjjmPrpWbFCbpGY7apy2fWiue46pBsYEtnA1TDrSZHWz8bmqqj7dhx5E3FnRx3oCrnEJVQ2vd",
  "key2": "4ezeCyuUmvgTMDadkFaM8kDHMMUn8EjpXLm2pdSmVgZbMgarArHstBkEyyx6zJrfjRTmu8zaa7Pxt2x7oGLWH98G",
  "key3": "4Nb1hgRQXpZFjgVofLk1GLZ5fjgCpu3483qfYr5d5gezc1Wnb1m3aD8iYvMbwS5T1BAVmtW6aCBssvcKYX1UinXo",
  "key4": "4FaLeArUPaJ23MdGZW6MNM5DJuFQ7QLsXPAZiceNETBDovRnxuG9dh593vCkdRCv6jDYB6HuLPqbbajBZbkrc8dz",
  "key5": "5DntW74C1XEMKn9Qt52bE34YukNQyMZnSWxN7kBEtBvT3AxRXppBvxgLGUcJqSLTB3CXfJhPwBKGrJkgG3vM5XWf",
  "key6": "Ahhhokg3uyv7teT5gUEwdJQc28nqiEY6Q8pf5etSAiu2UjYx9c3FZRGiSqDJ2L72GuerkRFEby4pVxshToKe79o",
  "key7": "43SrR1NZQr8PH2ZSpRB6vQSAqXUoJuyB8GNvnJs5EHJXXwkGVQoiqpDPfJEpWgmx8SsLS3a2vLw198HwvMGVGpf3",
  "key8": "4eKfUbdo1n1MsdCRq3sDHvNQbbF9x6c5KD7unxuGZ3cY1ysgVyZr2fbJnFchqXyuQrcaJV7EhzJBfi9shmpZCdrk",
  "key9": "Jc62uzxuRdpbYchbn8XUeJMBXbc3Hr4HVDidNkYfdchysnuFNtGLCnea27bzLzSutBBuzTU4NxvVGBamE65w62t",
  "key10": "5hSPPVCqX9RM7QDfXPy7ERGVNJWK94ZYuAhkxoZ6cfSR3Mtfk9npPf7JHpzcC3EpLvGfrow3HbrMtFSS58NPs5fv",
  "key11": "61A2NpsXcnPmzsZSWr6KB5GyopvcfvJ6qhobh4ratjXyTv1P5tAwZvGoZaxgdksFcnoN6grGqoQexMX5E2dSDZ9o",
  "key12": "4LviWYujdbqUmzUiUjWwgLGDFfma543GSgejUH8QyDzqnaXshPUzGBRFpZcfkNW8g5FnZPhxTbx4aZSMVcMWSsxk",
  "key13": "23havgmoeQLPgqrZnqoU4tcbUYmFpbPEsssYYx2JhPhsBiDBPV9drJ7NxHkSTS9zFVL2kuDyKUJTcALm1FGKxYNv",
  "key14": "4Z3DTCZfrKbhjXAFLa2QdiqqGot3DkUkPs2hqsPynmfgRVA8Woy6E6jXXf1djRkwvKrw2sZu8pdEwMGxAHuf7tUs",
  "key15": "2R1TYfSJMkKJNCZnUns6xavPGpLd7uXUu7JJsPoPcvtKxwXfwh4XqApiLodGXfpwjJwkw23As7fyrNARcPdczU4n",
  "key16": "56Zw3nMAcsPqaA8tqjj8eMyyLbZSg3aHwAsev7ZzVbdHffFU2i2XNLg2RhMz2on8BW83mjoUfxwyL7g7n1q9b5hH",
  "key17": "4YYAUYjHBJQTxKxDF9EWzfk5VLuEyFt94bpi3rbVT1CSS98wsydEzdjyeP8F1SJ8Lz5bpJaJYoADH1m3mNqcU8Ea",
  "key18": "2qfFbwMdrCbUxTMKHpZrcSstq7KFT5ZJbesGtxPt49aV2MRZZGzMwTb7dUDYs3PHFSNgRheJyBfjcQ3UrvUGSgD4",
  "key19": "3ZJx1KDGZpQgbdwdwXkHAvB9TzmuNDZdcqA2vDtroCNAKgET93z3s5z8B18sZUfSNN7vWRtGRFEoZpZPWcDjkw1s",
  "key20": "5NBQwhrsGnEwYMbXkqNGaCFR65j4Hio1zYoSzpWH8qAm9FW8rMKEn4R1XjeiuVwQsBC35FisjQHyuyE7Ac1Mb9ob",
  "key21": "2FRsVnoZRwmGchiUoVGUMQMK25ZNs2GUBYzFbCWrkXEAbQ7BqTARDYW1CjNq2vfbmB6X3JSSo48R3FCiKaajoM4M",
  "key22": "4z8Z9vGwgvLmsZzqi8ujDbvCThhRhLUSGV5wJekJRDx5sb7VNqJ1PWYcLP5Bz2dnNwJkQ4Dmg4Mr25jgjZQf7tAD",
  "key23": "5K9vdMWBVvfqYRzmZMThPAjvCoBT4qtMXHCtyXZ682PMnKrVAtY33ZAZrzkgwY1yowKqYZaUJwrurcKXwuYxmA7E",
  "key24": "4RFPeAepgrneLswN3mSQT85Zz9H4LwKzbgYWsjCfFcxBwfRKRULUdBagNRGmsARPVjWzgFRN4UEpzENU6BcgUiXr",
  "key25": "5eWQmNi6Hj6DXCVpwwDYhCobNvfYQdNewTdBYpK7Xm8yjtvjmJ8TjhCpnnLx6MmJzwkgi6KgxLx2vS4xDGm6NeWM",
  "key26": "puuWhuUANMg8ZbGZ6dxmSHqmjaSdBXKZ9RUNkxevCTQBoidKptExHuMzapSjCXNNqQZmiZiWrJDVEe1cCJc2K9n",
  "key27": "3oHqfFiz6tHLcKvHQdqUq4m7AYyYEmFcCDWQZWmJZkgaE7iGDpgusjdKhJVDW6aWp6R6ZM98878oYhC64Ct74trm",
  "key28": "2FKBA5aUGwxz3FGT8YauEtf2MLJyoDortFHtnGiNbxDVNkZCXYbjZo37E3sYxAAYnpYVw5hin8rhn7271iHQXtTF",
  "key29": "yZZ1f6EWXMBgHSA1xMQoFsK4kH42AsPDkSfD4tGqU8rwLhGH44ELrSUDAmhH4NNZwAAQEdgaZDGrzDskPhsvFH3",
  "key30": "5LVNR8Wm752NrrPUwd7tyGJUWcKmcywJBSHzxwr5YJYdkVqr2hfvkCgHmrqfKiueBfgZyLVmn74sXr9w6gPWtHwo",
  "key31": "22RbyBCYy3xJmC14TsVpLvtS4r7uUGAzoKi6nmC9Tf4Jkc6fi1LUzw15Hwf5LTxqzeVYM4MhDYvGqxbnAsJF2FbH",
  "key32": "4SMe6fLwqofYmpQ4fEhuSVWYB2AxFb9x9P8w1fLqVLexEWhRa61KisQ6AfefcfcF7KgY22LyVQqnE7uriYvwGK8Y",
  "key33": "DbzumcvMJiFpLCLLwaAPdywD21e39QzE4RqvLWNBJU81UoAP9HW6rRGfiJtesjqMtPXJ4H9w2zkLWpNe8DdV8zt",
  "key34": "3tc6iiXSPuKVbyyA6pC3VBxWFU9jg135vvw91jkWaFJ2ggNik38vDLuqfkyZVhHcfNcMSakdm6vrM4cn9QmdQftP"
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
