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
    "2xuN1iV1XGXPGKC9VVVw1urLzz4ZZoJLCHrjhApT6ys1DVSRKHAbzuYZCx1pqR7n2AnJWT45VpMfeLpm9aL2nnWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHQ3YAFKcB29WEyDdGqHbh57KjUG92dmiHJJVZ9fK84xvEuyFWc8b8DQpDEs1HZCuV5j17hV2vtFzWKnu9UMBJK",
  "key1": "44LUbWibhLFmNb47RFEBMdSEyTYrj3TVh7T5Vn86vpWkHg7hgXVcyB2eKrAHuKmucSDAmbeK9uUeoAL6hTmBSbBC",
  "key2": "j5tStSPFgmJriL4e3tqJ5E587KjedtVoDTXyD98wm8EUdJtdbtdX7jo8iuUyjK6NFGquSxepfxYKHnRpM4g4Xgs",
  "key3": "mn4Vty6D2caB2bFCvWgciGc8BT8rxBEEY3t69CcZmwbkQM64TKrqsreebmzcbkezAnCucdG1pvQKnpakp6VMehA",
  "key4": "4H6YaeVcRL4nmVRdMB9guYbm3FTqWqeaetXqMxCNU91AgndZbhR6xSfr8x1Gb4y8Vhfvp6UvJQ451wk7amVuRvjg",
  "key5": "3VkRKi77rASuYqUzJ36ih4PqrYdxzvnmRMo61VAxKFE1g7Y4nkvgUtKz8kesCvhxENS12CFuSqGu46vhFw9e4vsm",
  "key6": "3mVaan58VwxmwnHTshcFm1Abx238BA6cd8kVtPq7zHPZnB1QGnLbaofVR1nysELK14BY6fMfEJcnEJUDbrdBcQoJ",
  "key7": "jqNwR28Du3D58thyZMFgqQhyExuHKzTaS8FjU3S2mrcNKuYfmNka5fYWyaWqwFh5NpKsshxbfizC8SPb75sPaD8",
  "key8": "2GQovR1iWFxucf13u4TPxhBeH2CUzEcFuYcaNfTS5ZRhHQWrVX3Ddj2ZgeBX8VAhgpG13kSWbWdpniZ1gyixuWTF",
  "key9": "2w25joXEMctXuVnRKFSeBz7S7CM4fvY7ajFpyCaiqC9FZaKDXuBeJJ3RnFcxBhGemFThUFXXiSMaJg1E2y5Fw4so",
  "key10": "AejRpRgdFjZeqTJrvN6EFx1YRohs37zJCcSpscVLQD2643eFSpS78gESo9UjPykkECyrNmp8Cx3kEb6REDanzga",
  "key11": "5rWCCWXCq8qFndpmE3424kq1iL77A2myRZgb5h3MmtxcdLC7AHPUWZtaghN8wfBKfef1GcsULGJxrpdddYAkK21C",
  "key12": "5G8gjkLgEcRiV1KeaAiq3uhHh94Npg7AQ2ipFB5qkFUUD85Nnrz2pCm1r7Dfm9DKbSMoGEzCwqTam13oLurnL5H1",
  "key13": "3wiXJT8LwarqpChT7qFd3rmUWB2GjYFwGJ4aRHsmUvuS3Vgn9SAoJtUUgqJiRom9aSTDYZuXdY7XhCiSQTb2dAJd",
  "key14": "4XALh15nwccBy5VQN7PgppPqmA3sxpXJe9PxTh3hS5wTZ8XRFywEY8htu5EHuLrqNPdSdRUDK2A8ARGcFarRggw",
  "key15": "2Zmbe62qqFY3zyCME3m9vnHp4G7ZAWN184i8QD4X3KDQahUFztGZuajYNsgMAetQ9pnSNbMTfXW4tHKRk56NjRHM",
  "key16": "61VvmPNWGcd4tLVPmoFNM8S5963UQg4jNqKKYkBwUairk3b5P2nfjLjdporakrqo3HrY6UhBHK2wfATAeESaSzuy",
  "key17": "2SfZzwrx5cSTHTeGjRDNLQUDH5d3vXa1iBAxBm8t2d7yWQe44To3bNkb2JfEjV9bEYhwv4N6TphP3FKs2XTqWL57",
  "key18": "4H3ctSs4L7Rx18kivoKCCRgNmnPrpUZxavgVywBcPk3v7FNbQJisE9LAYco2MDquKwZg359nz1AFc12BxgMN2hLW",
  "key19": "624BiSppCvZqKne278tApVd27XTP96N9Ee7mqYrDXAxQYWnZQWpqYZ3AAaNoPfBdoxoUKhL5HYMYvUSzwyY6Kq9",
  "key20": "LjubPibLgsSW2N2iH5e216NHW4rmnc4MMPTKfRrVk19DW9MJyxPCDyYzdgEYLznhYFDuyYkiGV3Zq8uNoijBw1S",
  "key21": "3hZ2bWEDim82r5qYNV6Netri99treW5qLPgcQiX3oLmQTT3GdGZG9Ny5TeNjjWB3cj5MwaeYbf1tkEqvcyKCzVjL",
  "key22": "5Th7rqvV9Vq3ZLCZEvjrL2zKPtnZvjuW52yUqDePbVBKVkSAW6kg7YpFxrFtLNELLg8XvR8bie9azrPZWENez9qN",
  "key23": "4iAdrW3CdQHuHYKss7i8ajinuvTLcZYS3jZCScU8eDzkZoaLNPxbUat7nSF6gf92BVQzbL2Wd2KY4ZMid3rvv3vD",
  "key24": "3biFSYJsiGtRMGU9ZCZWbPdLczwm1Th7NwEHCCuzekBhMSFANJ8iXnPE9699Q5346xa8FgHgSrZ5xBKCzkucctJG",
  "key25": "5cv2AvbfzqmUhiWfrmfgacipwm3Jw6hNJS576c6HiLbkm5dVmAcfKks6bsSH9EfPnt2nV4FzjkLaxMmHKZ689pDk",
  "key26": "4rG7Pm3ACu3AoN5ufVFUxLBTCyMLF61roroJzqT5SRD4CpxXekhg6344XZmQGvp6AjdSEuWpbjbyABMUm13TwEMP",
  "key27": "5JB3ZizuTU2hdFXU12bmED7Ac4AT7AB3cHucxGjPgx7JrrgPj3AuAMe1XAJhHAuyjUgfXt3KiJy6v2STM8s1Di8E",
  "key28": "2XDA8g8QWMcb3ySkzkDfizfjjBra9iGb7G7ax3N2LmwYRpy1Kku1SRQ8kDC7Ai8Rjftsj8hWyGAxLh1ab1Vkmsz4",
  "key29": "4JitZhZtGNwzSFDKY7czFeUMsqNfVMtCYxSiJuW74Zo9rLL1PZtbyVf91DqD3Ytazq3pYYetfGD7N5sA3tzuWNma",
  "key30": "PbxdQ3Fiijkjb4MG4W1FLtua1XHSzi1ic2HPT6q9GFrLESEicxQkvE86hkR1qwG4WGzaJ36svxydPCJ8hLT47Lk",
  "key31": "4XK4vUzEsDSNCJWAD9vmKCSBZSnZANrdMWg1oJiPGW1kX2FSzVvvTLziDVZqVKGtFXHRTL9AqixwNo9o13pF1Qkv",
  "key32": "2ZY4tHJWFT9Q4aKPwVqZ2gZDwu7Gok24YCSQxtfKM73tKs1mZqEt3BEXok9CvZJdatiBzBFbfosxU2mxx8uxm8EC",
  "key33": "2ehs549v2D52oGWQdh3PANH71ZZNSGYjv4fJyh5nWnJDwWRFuoEuyRRYzTgBr7oUo6cmzasmYCAMspLBpGtwyGUh"
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
