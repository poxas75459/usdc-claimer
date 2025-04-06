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
    "4K1qDbcfTtU1aSoNhkBXZ9fRT2sJvLyadGqDN7P9DUpNsCQgH8yY8pW1MtZENTEfSvfUERWSSCLJ3wsd7wp5ScyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxpSFmz7Rg2D6LAVjkiTK5vkaDz1FpWH2DBXCgus3T6Fiypjp2gkGCTLpUmw5ZnqsAHEKDPTXcoCHnodt9bACKP",
  "key1": "5m5vjNnFQDJLToqyLLK8yHfgDTjfBB8bWsbEpmnGeRan321iiKK2svWx6B83cgJ86ZPwL8HM5CJiaCqdvKN3iLgx",
  "key2": "2EKSuDsguekUq3ZycGwzWNnuKVdDMD37jeLYKvXgAx6iV1WjjibiQE32MzZUCwPgG8qY3qmewmBBiGt2dt4kGTfz",
  "key3": "24jKQsqU5A2JZeutpbnCGEgvjpiK5BTGQobDFUvKdczcJoCjAPbCccEcfothXVNnLkJKXKjq35PoayEg8BHjJPNB",
  "key4": "4hkYZswHfQyyu3KKSGebhijDn1UL4hLzuwjnwXhjnzH26avnqUHe8URWiMJXuBtKPMmmpUdfNqAwPaQpTi4i4Sjw",
  "key5": "3sQaMbtaFP7EiRSFMeQKkcn595vGgvqtShwSUbivv5UyoBFcs9HoKtkZePcHnyUD1JZH4uHk3JutBz5FzSiLvbXE",
  "key6": "2q8F8AeccwP6qtfV1nVPi2A8Rp9iVVBtBNrSW9f416rpiFxtdREU85JfUtr8wxS9mEurnURBh3o9XdMa4dUa6z7d",
  "key7": "3a2qowH7cgkvMCsCpcujFxVLsCZaDPwckkpoCFsFmcP7o8JouYpBngUgn7rPJ7VD2bRvVgQmz7SsKFP6qUZXqnmJ",
  "key8": "5SZ169NxobqfhvqvnzQWcGSuJWyYf86QqkUeBWL7dNQvvxLc8XCnmS6s9oC2d3Zz72SGz9pyQrLYNGSvcSnz9HHw",
  "key9": "4HM4Bpwy9ifZbagijgUvRUHnExzXgWmcLQAxSw5BWyZkvJAmN1banBk57MeGnZvKop5VXTDGDfK52RfUqyqBhkNH",
  "key10": "2UeCs6mQV5X3atcNqxCDu7bNoDXiRyCKK8d8PH5ntnt453xbBgnzwQhhWN3oE5aWHjmZKSc3z4jGmLvvdq12ykFw",
  "key11": "4hfJLRs63AWArZ9Kt2yRtbnAhxJYwy5P8taYd9J23i34AUuQD6nTaRuaSp9EwqVHsDjft5ikzeXafSRyvC5JGJ3Q",
  "key12": "5P6QiXBtU44je9okvSx7yH7NW8pSgdfHZbq2aBZMRM3VhEdDhbgnm3yFjjtfH7oCprYp9oZ1UQcaMWMFwbydJ94D",
  "key13": "36HZgLJ1ovobcCmu2ikmmmBqG3iW39AoqxCfsRdjrkQkpEE4QxtZ5bcGkpTvs2VvzunSABJCwD9o15dua9t7cXbv",
  "key14": "2tK1S4wghcvFUbwrPpu77MXyhmLrpi24HD9R8H8kGCuSZBg7DkiPhUbjMM672PavcqNGE7jUmTXLhfaf5wAzXYDj",
  "key15": "3MjLjE85HRKGHNyuPKhFCnxD6GN3u5UxdEEkbfX6vC8RUBwPSZSKXCUVbNTTQw4Z3cto5e8QfNfT4bw6TGWMhdqo",
  "key16": "2WEUuSxP731tWemAZEMbnvSU5AYoA7oyTfLEGzUa7eEfNYe7EvokHQ8hEfWeutPJ38Vqh23iECQaADw4nmdbuaZS",
  "key17": "28GvNoLZBxnUb7fWLeMy7EETu7WsVaam1f15T47ZzFH3mXDRtSfiWT3vFPvhA3dLPmyaVfqjnxwzT5JYyHvTDLhf",
  "key18": "3XiC9LjvJTooQcqdU3wmgNwfx1Hg9QtvoRWrWcpdHjBWbkjh8DPqHZ3iBVKtdFtRKPPKoLrSqyCtSw5TB5Q66fDx",
  "key19": "5nzGssXCUPgWarvsR2797774LMjGmvG6gtMy3GULZjTKFWi1G66SD7NF276qia4vJ9LWkDpEo1RHGzavfs7W8uG4",
  "key20": "65QFA74b3XYUNUJPyBQcVZQgSG7u4RrsepL8UgVBHCCat7Z2t9AyXyhdHrxFaq9JtvkziNDZKTgR1JjcWqyCDJnc",
  "key21": "2WxCW6rhkY3copTbksNNgd5f48Wq67qd8DQHPihwdHi6aphWe8TeSgx92BNv3kjmnxQZ3AHJTZ93AJZSJufsCWnN",
  "key22": "5JcEkHTvmBfU3RdXDz4Mta8GeaBhu4htQhc5J68EfuB7W8Ev5wwR1oeEcUZ4rgARtBQq41pRGDrS81GEvRTBygD4",
  "key23": "5UvDeh9GhjQZX4EC1GzQe1sQXw2Q1FRAASeZk589snXMS4MvBJKXfA25QJ4nTrAnWJpveZjGV8VkAtfwFv8tgvhW",
  "key24": "2PrZSG12qQ1pWJhTaLkEk56ZaaaBANC7fUnw1HgHfwff1BPJnLWSzysN3oeChf8BsHTYTdFUsLWmkJzsowwVwefF",
  "key25": "3mcYcASmNRNMdF6pF7aixpYJSXNG8WdTH3JraRKaHjQy94DesjpD6viJKcDrUUhqcrDSvfpPURsHBah2qwemjBRe",
  "key26": "Pw4j1JMWSh1jpHE4Dhpb3GCBzsix2CaaQpiqfmPaE2GrXEeW5qGmvS2tcX52HdJ15Z3gUCXx4h1VfPSPhi8TrLA",
  "key27": "27bpNSLJMtpopyKmsqFMagmoLfACYSiZKrE2rRYUs7ux6d89YE7C4NYroAFgrbwhG18eXJy9BDj5aPp7nmHivxPu",
  "key28": "51ZecDmbYwdzfrga4R1RVYsuVz5cUKY9672Yxdr16iwap31bfYt6xT5RGqmjWsBrqf5yL6LcAHpUtBwLrCLJCi8V",
  "key29": "3C5DGc3YSj6QkQFC4acYbbAh9uSZHKTy8hcarpBuCypjJFeBo13x7SikjQNDrSWJag7cnNgzHTgxqGvzHibwemtq",
  "key30": "24H5yeN4Dgj5QwN7B3UV9T3VeXgkpvGMV9E9Vti5GM6gFFdadLacUevrGS1e8eEfktrYbydGSDCGSfcLr7dGQ663",
  "key31": "7yA1j6iAMJE87PUee5S5eJjHcfRU7Xqms9FCxxmuSgTJLXhXVuf6FjdoMRfngtDyEBvRCpMuSkj2P8sWCkA1pUU",
  "key32": "4ckX1dXsHVDtuRbecyNUEBHxguYtebP73xD2B1YkRKFgibezwgPt1pfqy76MBq4mHuuagE1Vg8U6XCW9mpUVX6rY",
  "key33": "32KUaeQscP14dymhfSJgG7afw65tDgdynE6K8prueKTvfaTkwxJrA9nsFSP71t5JeYxQdcCSnwyD1sVvsPeM21z1",
  "key34": "5Sop84Ni7hr9EfYU2z55BqTRKgSqwx1fPb97WVySZgcauLca34QKZnJEZwbUs7PUS8L9JWjiM9CFBA2t6rq6KwjV",
  "key35": "5opssaRBow6j8VvQE6377YFGQP4Nx2XNdYJpHFLnp4Gt738t6iiPiDtm7RWBNpgjBArk3BjBEfrqvt26tr1FE7mu",
  "key36": "5QjmFVhnF6SdYjnj4UhEcrMwdGDmsZYCiwk7WX7Mnf8VgPFyQKPqpTkNe4zqWAJ4BqS1j6dE3zRQJXtxQEYpP1rz",
  "key37": "v5jSajDsefkbgCv6Q6S52i4f575RwR8VBb7amdwgKU5EXUvjGgoGRJWtrCwfgz9zpA1CbRbhbocrd2TYSTQoZAJ",
  "key38": "4Ki7QUooTy6Y324pMu1awu3Ct8XNdcdXBHhfejimfLo3aD6LHTFiU1dmvYHcpRTPGnfK9NjpfpDoGLrR9F6DALXi",
  "key39": "22f7CpU5euVWYxJtPuPdM5Df7xH9SGKE4jEuh8HCGwGgaBEUjAgVGgAHU4Lqv9Ttbc5Htz3SUAMa9DvHf2iHEpco",
  "key40": "WkyR7SutkYMaJv61Yu9ALAPvotBRmX4EvG8b7C9URdhYq8fXTmioPLfrGpKjhdSXWd3fAHsyZ7JF5G5qFeqXFWu",
  "key41": "2rMWU5amoPuYpgtRn7hKji9Eo3vQwXcd9V5eZCZhbWFmk49wPFe9eZnpqyeqdMpAZ1mCpi9jvrmahq8TZvoPQdqY",
  "key42": "3dRfgKHuSqVTT6EGhKDB29TpmC3psMaoBZ4H31jdhkFDuDQTVXzZTryuGRSw7PdAAJPo16Tts8qJPLmvL13bx7Rq",
  "key43": "2ZWXqDiv63Y2WEmWTxbEnDxNbFdShpEmk7QzsdszbDAyPYDzTQYFidWQkdZY3PhWguP2kcz6N2oMmfxZgNq1oQt2"
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
