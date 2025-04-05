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
    "3i7Ks1rDAaucdVyLBTf63qPfKBEbRrCK4n1arXfFXaF3gnJxdXbDqwe4Xr38E5ANGFjzfiZkxgbaF2otpVmeaX9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4ExCNp4Y621MEz4UFkiSqyKMRn4DtyTmtAZgnkd9fMRf8M7gFkDPibrmYpYhqgXbTVqqD23rtVC9PuGMCKMSCb",
  "key1": "5PcWY6uKYDPhTHYX1NuJYDM6cSb1UoSSJ9qSTXKKSVZjM6AfdBkQaiDXvpmkSve8Y5DeLnYCHZa5gEYcq4DPJFRu",
  "key2": "PJF4TN8Ang7yK5gB6xyeJSTDpnB8j7H1iqRpKY1hnLrSw3kVAwxTvnH37paPqzns1kGrPvcWVk5EugMeuRoYdad",
  "key3": "422vcDg64MmwCL5Gd9HfGCb9tRAjpiuV6kLEteXTa4Yxm6DEiy2Kw6LJCZQdMDNGToCP2eZFP6KiT2EJrDoksSz2",
  "key4": "3gY9pQpfsQU6ry1TAZnCdZCozkRWjpfKakw9SvudPCU4trjXxLebeQvF4CNNVu5fhYeaDiUojA4rfABUnyu49UrA",
  "key5": "5JHGYtp74U3CLmGC41fDWYHX7tjxPRqDYeFpu97i95pFoaDJ1sNdHnZtUTPEkbUrCjUqx63df3Ms5NF5gXcvkHt3",
  "key6": "3EKEVyPHgdZXTETm1L7bubn4SZ8AoXNWhCrdGv6xMxcNtvxingJkqos98uPhLQkJWX3RyAorRubtrWMPAWuMpsGA",
  "key7": "4dxTG5ENy4mPR3gKhpGWMhzzPK7T4uabBfRdMiseRujZ6tiJtcYJkWcaojUFvmDQgqCgdmqkhW2VA567TxwBuJvE",
  "key8": "2bBJbpoWaQVnmoUFfnGB3tbvve6WGwt4EXXWV4rRxHyT2xge3Ls4jrtgZHrqwS6aN7sXeaDyMWY5nnnqkJbaNrMk",
  "key9": "2K99tAPg9AXu3jr8Tutf7EtnaQXi8i6WXgG2gQuzznmdxGbgEfirQgpuMhndKCa4G8Z74W5pfpFLPqNw62oFspT2",
  "key10": "5qvC2tiYaho9SiDW1ChkNxg1fXLWyXdu9edDGjR73BVRRrHRayMNAuE49DAbwEmntEGNhcxmAALnEAJ3wyQTbj3j",
  "key11": "4TzGeydgHVoC6c4CXFUQ9EX6amsPKm4vQDGDUh6x1cHnWefeLzB9J2S7emrZvNKGWwoRwSvsowhkJLpnQiNVzLdi",
  "key12": "3v1SfHEEynxmDxiY8UFFF4iy2fCyfpCnuMoADtVQC2WfbmrWcmmeJy6Uus3RmMnhyXrWD4UZByMiG2bvTi2W46cr",
  "key13": "4UGBgMwNxnQkvHmWhWUpTYpZZvLurKAEs3Qv2B1wQtgAj6Y8VX7Us5MQNToXm7oMAHgzwW8BFwymsi6FMr5hzBPw",
  "key14": "41DcJHLe65uzip6pqekDhypix3E9JKSNwBe9KQzjv46jBQTa7caswEEzWvJP9kakCc255Cqbcy67F2MHZWj3way1",
  "key15": "2QQ2JF8CwkhzsjhdABvaqWFXX5wmhnCZ8ppHBA2ZxHb7areknVLQayY544UiQvGLMX77ewJT37NXvBZNzFTxT9Pt",
  "key16": "5gX4zNZjFunogfK2qWYVqFCWuptN3nUhPfPDhEbR318hoZ5qStZVTDTjmCmjtS8HdtDw7E99LGanMoULr9xmKndX",
  "key17": "5G54LVEY6zc2ctMtAtawT1EgUMhVTL4JUdZA99wqkf7Xsb65CKJhJWMgdAcpauXS4wntqbDGxHB3zGyhr7WwNYiB",
  "key18": "4iqMXMBSWHFGYdbE3nWUhoAkQyBg4BzGVnjoSNuP2xvFEkTjS2scfSYXwGoyPbiH9WY5UDUQpzFEjWaquUMbYGqC",
  "key19": "5pfXu2bbq6k5drhZgMUWNG6dRWBmFCeH4wGLYf8RqihqSC2wU6CeuU3ZTtVZ9SmERTHBkULYkdeucjddMyUefHtb",
  "key20": "34BRYjbbxTuWJNGy4UKDKXVBbJptAyAdGQawcFm9YEnbkHsiZVZkUcajtuvuo4i6PzpcniokZpvhqv9HUWBgibpg",
  "key21": "5u4XzLwc2cXpkj6xs4swEvq8kCgy3PvBB84kEPEMKTYU47JuLDJFvssm4Lfzk3HqjWsUdz1KZ595XgUYVGUWHAyM",
  "key22": "5xLoc3bGbPrcvAphj6Fq4Z6hpdU3AbZCBPRUxjSvFXnHXmdhyF6YT1iF8GEf4JwmPKfWRb1FTobaYPnxdQ6Y6gZe",
  "key23": "vBtpYMPas5XtC4E3eZF2KYKgbpiwDjgzspwbh2LwbSLvZuLPst3YkUpamNX2S8o5pLeJqW8ShtL5V4dyiu1Di5E",
  "key24": "44uedS9LWRJrGwD2xyJiEzppsTMLUt27Cq4FFUwK8EP1LSQVC3iDLAErd422R63gyXF8BRBeusmj9ajet9fTzt8h",
  "key25": "3ubMN9mn3z2wJ7jRvDgzqHvmgpRwvVbqsmzawiXhZ5TNvwmbNgunEdhSmzj16ctAiPK7WxFTCwNHNk4xL8Vkmt1Q",
  "key26": "4wTjnNgHuKPUo2Zm3Ew7bgXyL72uprwdvnZDjgvgKwBMRVenVNnwB3927z1hXjAKjEqzp6AiZf3KyhkyCPH6vJTu",
  "key27": "4fkbv9cw4keAJf6AedgsaHLKQNCuvEwjGhUGFo3ZFroW8wysto49VQdnSKdaFcZJF9rSUxcYmJmbjvaEXbJKoP32",
  "key28": "DFrhgr2oWUsJD4JHrWanEYKDArYqpmGNYdwJizDVn3MK1j7bMN5o1mwzvocntEu2bP9CQudxRkY4RYKAXfs7t85",
  "key29": "5fwkhA6ajPNPe5XgGkcnf8YYAHG3A5P1EUQotsq7DEKg36BwzWcAKuSSSeXYHv5Lhpr5jrwgT7W9mN5HKfY1Czm6",
  "key30": "2qY9a9LDk7xjjwSTwiSiKQR2VurtZoCyL9b5aUQV3scbinBBYNWVd4WPQNhU8c1Zm8sjuBSSpcWt7X2vn5tTdVP",
  "key31": "2UGcyiPifQpXEpQBhzcrA2Ld112bjaUAUDsw7NskDNJT5RkavVXABZ1deZaVrj1uMS4HGB46s85ChQ3WQDgDFf8Q",
  "key32": "3UgV5XyAFFVxnNGGA3ideZ2oWep21JiuMv9GS5Cj2GMmb8xTa4BPTYrsi57YDhYjRtfL5iUUj5Xz3z5n9a7vS7bs",
  "key33": "2peQdVNbkuNtqQXayHNtmVm5sBRiRsDbWiRzQXbj4EiuP5K3HjSfHRZopXHRWPQ251oDgF7utaGKfszDCwXJYkW9",
  "key34": "4f4KU9RvLk8WPSm5EGcnqApNjuA3XCNq65u188xnsLZAanXnHio6gZgGVVHPZKiqf6yeHSnFaspTGYod3h1B4YWg",
  "key35": "6uQsmPX1Dp77G2nNWiuzpx7mQTMvuXQktYnhxEjX2Fgw4XSZc6urboaQfS6zNkMSf8ofDjLF91p8qjniYdjCbNd",
  "key36": "3LDohXvv4j6pcZCXSXh4LdWLPzBAo18H2BRYhp38GWdNPfLEFVwnyzn7z4UKkow9CfugkYkFCXf5BpkiN1rQxSjg"
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
