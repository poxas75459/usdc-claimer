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
    "3MSuXwD9snqsSVzEdq7vhLb8nNNPUGiceA2f8kGi9QWdbcFHokeg5xZY8zDCrh9r6ejYQc1MWzqR7TyXdSGGiC96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52f2MH6jrKWTCt36d99EoTe6Za7gCAWHY9NQN4vaRTa4caxLjkjyiaFBx3dNNyLfYw1kdQWkzUZh22HQJfCNJrF9",
  "key1": "4PS2AQ6SjozvENUViVYDjXKg2AaGaTB4BbSLdoX9WVLSUQutPqdrqs9YdAashLRfjteiM6D56SVfSVTrbM5hrAqW",
  "key2": "3rdQZDSL8BG8DCdL6xTsym9fz3jJRTzuzZDCFVyjdSCCZo8rXMGpPzy4GjsrkDNSucJJhYV5PGhwjVJjt6rPZ3RL",
  "key3": "pWUYC5vjWMt3XUxCJFFCiG1ftRj8h3DM5LvyZuUwXS4EpkoLfKhQhMrHh1pFdqYSeprF6w24HekRVCjiyyJXRKb",
  "key4": "CU9JqWojyt9t4AUpXKnM4XAw2qdH5L22vHUcLBAVGcYo7EaEZi96UeidvJvBe1gFuNKg2mLi7CghTaS1hwmYMde",
  "key5": "2SAAHLiaLi4qwzYYGXqQf8dNG9Ss8Y1qmgLyKwXVFcRxqE9VXAbyLhnBACoJjVKGdgDbzrz7hEFiF1jMfnqmfpVZ",
  "key6": "64X15xsmkLcgPpgcr4ckFTJWMrvrxDUzMNX6r3junqcCm9LSfz1N6FvJaJ8WfA2N87CGAD5dA4auNwgMRrGxSA8o",
  "key7": "2yQFkaKtzUj2YNVbD23GMb3bcvm6jcQb9RnazHhdYQBVoheHXCWYZDfiS6DKwKwfE6agoun8Ku85SGPY4B58f7LC",
  "key8": "3dBk2prXFr8AWEk7D1dthqMGeuWRtVLrrhitaxyfLagQjAKugqYa3swfEnVqczu4zBgvcSGy9uEyBLCUVL6h2RuV",
  "key9": "3dSFuu339MwLkrPPVjvhfG3BpKkALGRQqxuJdmiv2Ebv1i31eHF8Y3yNZ8Bum6vaCxpMppsoMVD9c441HKqWiJqN",
  "key10": "475asH1As2d66XYrDkCugmu9bny8G9YeD7zD9oLsLyaWVuyjx4vj8iWxpK5pW1XzWih2hnE5cmzqc6fZp4XppECC",
  "key11": "2Wp3Pnu93qiUDm26UbEh4P5FQp3B6GWBSEGL61UBTMMGdXAS49oh6TUWTu4zF3UUXwquVKzXbZdMDytc1KBL7T9C",
  "key12": "tWVodiknxaoskpFLx7ko8PvsQUiDfBSzEday8WHYg3BqpTc4psBVHTVCRUxa5z7mbP85GnCCnUWACga5MBEWT8b",
  "key13": "4Mv6vXN5FjSMigzn5sC5Xaw5pKxGXGhgd9eNpoXibaJDXHfcRgVWNupkBXBBi4hdkEdMPQosjdmoNqnXLeNLzkZs",
  "key14": "3gWMUNYNkx271YUYJNUBuuhCkRVMsteARvnxvDyuJii33jWdVzLHzYrdsEvE6jmpT22kRG4pk5zLTiw8KoTrPg9c",
  "key15": "CSGt4g9h24cKxUnyAcER3jCNc8LPNSKLyLFerorCyqkfQYTav9gPHa8fnimkwYso25N25yxH6eEnGEh2N7gmC8R",
  "key16": "5xJY9n6Endj1iF8FozUhnfahcwMffisibZCACH7cPRjHQ57dBBdKhNGEMMWjySKdpvX5ZqRuTJuv9XFPthpPHMwA",
  "key17": "3tjs8U4rudGne41HrAy3de2ntrvhZV3QtWbdxxvKGZx1vTHifWxR8efUNq8sZCpxjxi7rTmrYubFWj2HMmJu5Yip",
  "key18": "2hw7J7Ltfwzbgk6ZtsB6oTtjs6Qj9dsEhyCQTzRnWW2zZL9h8bktDbjHtkZN8bKHVkuzYs85zjwWQanWQRUE4cN3",
  "key19": "5F7ySVCqXFRJ3SoqH53tRvvDvjwQHto4zwxrRqUTMaR1Md942QozWemdKhPZzg5kMGg5avg8NTN6eK8XFUjCP9qB",
  "key20": "22gaHESXcRVMUEkyZNCCZqmggmgnLMfrJoEYsGEysWpetUWzkAENuoUqhfpt15kxEpYJWX33hUAzL5T9ELmnVUe7",
  "key21": "cGHVzXtuEbJr2tZ1u5RqiStViuQCwTB2AQc4hmV9n5S2XbmiMLDGpiEHEYpdum7U9626KqJguMue3GoAzRpazTj",
  "key22": "5rCT34dPog4kWMoRWZyV5ja7YTekS1cd3xCE59CQwtDKzeQy2kZd7SeyC8dk8VLZBD8ZzKMUUBtcSd86hYpyXH44",
  "key23": "37d7rmaBtZZDadCGEYmcfvmF7vBuqRNXvcsoRhtpHJDwYVdKa8RXUZu3yu49E7841pbeynxRcoAH1XtHz89UnJzT",
  "key24": "62XhTboAat6zoiRkJzxF1VtnDHRiSSdVtEsiCDmVkG4W33Rz5K3Lq7pf7BAcdPjHyzVbSvGtcxvzQ6WfBosE5hzz",
  "key25": "4fsFyxKXgjbHvrQx9Pns4eLS3zjWtQvDhVSq1sCMGKZBLmxTStBJDaTdE4AWXoWqiMQXk2TqySWNCVux2YoNw4zX",
  "key26": "qmRAnBpzkUtVEy2Kw4bUruxsvv191A25ZNwRCR7Y8av33QsPhadNveqRMoLnSahSagzdKVL7KAmxy8bu2AbcJqC"
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
