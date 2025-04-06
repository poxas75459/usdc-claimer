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
    "24qmEs1jQvn2hwCKXXFgUhjAjzwBMrXxsiLS5WH4nBArK3kfvrsCF3j7JzLst3bce1K9pHVUvGRTevM51Hyr7LDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y429LEUfhAnV8TAfVU1KHLakmNWjyYAhc1fxgpmMMawT923CSTyHmBLg9mjiApVj2jYJoAzwPp8hQ4G8pzqpjye",
  "key1": "48xaiTRsXf7Kj6vbPK9dVYiFzH4jS1j9HKJSzV798ABsxM8bTo8iA5LXHnMiEdK4QMRBUaaucqFKPoCbgWyMHbeH",
  "key2": "4wc6d92ibgFMjVuYaTcr4qygYcJn4xgQ9q1csnn7huQcpKo8JgEDjvBR46n7zrfduAGHrJ4TFegFHe9fyXQr9ZXN",
  "key3": "2BdctaMMV9P8XnvgmaFyoZedQHdhmcRMMLfvr8ZXRHNU4vdiaXnq2dYYfaNcitmuJkN4xqria3A3EoDf2WLVBWSy",
  "key4": "4gjroneP5BQTJQnSKsHb3zMVCh9bhCXgYwAokR47F1gPuakavUGz7DZjk456Kf16PCVemrGzYHnosrsiW95krjca",
  "key5": "2dZB6wq1c2LBNr5jo6SyFLb1cptrdsV8inWkcDNMBm5RTLuMf9mjm3x8wPpD4DFefRXNiVpY7QqxEsisZmimhFmG",
  "key6": "acHHED8i9dkNiTtchJtkoRVH3CMyeupGZVdii4MLdPqrUbEQkvjjnRhrFnRuS7tEfsZUXv7rmDqzK11gQNHqLNB",
  "key7": "5qkYkNGtDmH9U7pA5M64GDpFY9tf3GzzHt5NimQ9Yx5u76Br4N5m32qaDkS2FNTJVz3iqFpV6cVKEiV48ceHS6fF",
  "key8": "2cTJCAV3BCjrEBZR7SLZLGaDA8NDmSouGntkGmR8LbjYcyfZqD16gFJ5hFvgFGPKMwGJicN1GKoNmwi8oVziJkNV",
  "key9": "385b8DbRNBgujmRu6xU4R3XpZT8KgfsFGXThQ9tBsUwoymbXCn8i2X1NiENFub775LN1abS9M25ei7vRjGL2Am8B",
  "key10": "5fvCeWzpmedLQfAc73k5dyufC4L16KkNyMkoCxurqAcdHF3GgVLtQCtmou2FvKdpKqDtNLToM11QKuGZMqBpbEzd",
  "key11": "XNQTFjnmUPGsoZ3g9RbDuSVieTQ3FJhHDVUQm2gETmW2is4TKntq59EztZxtN2ekxnPesZ8wf5wEMVrsuJXyfCV",
  "key12": "2URrDv15UfgpAwrMENV8vXnvff2JZ4rFxFmBm5NjwPr9HUadap8Dsq567f2Lv6rokJ9qJRdcfH5PTozp4yzMF7La",
  "key13": "4vpdLvg9QjjwA7xAVFji6HnRqEsSskRde5qHzP4T1jatQJrX7UHDfeavmEoX4yzPdbHKSgQN2jJUVxjcjxcPnmt",
  "key14": "27UTv9Z6irztYeAmu1beizDM1KeoCsS1mKf7EffjtxXbpupEBGTa3DuTKv99Cf1e11e6cMAc5ixes9QYrrSwNNsS",
  "key15": "3ZGNgzPWBe2z5UE3f8zhVAuWacaVLiQ9Bzn8UGQTFZXnnuikMBYcDTtyfgDJbXSgkp3LPaeMRgYmPPvaaBzKnPiS",
  "key16": "cq5niPnD9SSbf1GkZJ9zC7hJTaBnDoBHY4RRby18hd7TcWDiFNNZT2dSHys7NjBWYTAE3GP9VsgNk8zRGzVeuha",
  "key17": "2xvvyEdXYGY5GiPzAQTj2mwZRaoHonURfTcGfse3v5Eoc2pAGmm8vNe4DEr8vtsKDD2UXkLp5nWx63urW1SQJECh",
  "key18": "2rYLB3eD7kn56hgwfeTGejQMVF92WdT3ACWBTqMoseEkD8xTRb7P7K2VRK6ejVZuS2Zrc3wk1JVadXAWs1bdWaoP",
  "key19": "KH3CuKydBGVHUxgdbTB9y8iEJTxJwYLoN1edpEMAPanGKL1nWrsi7bz5G2gokNFVXkqdqrKjXFp6gKiCZV3Nz2W",
  "key20": "te8M1pGLEqwaTvRzFAi9W1FpU8ZeZV28W2h6RS67gQd4HGmbHhaaju5oLKgC8xx7hQYfnhn547VKouRcijmB9QV",
  "key21": "4Wn2QJpe86JStC7BEV16pbDQquTGrkmbFeHzrwxpQqLqVG4bw6zmwPxfhukKp97qte5jhbdXESTNyCA2WaMUksuY",
  "key22": "mZSSZBTPP5RtsrnC6skLjBB8T6ZV1DV99JKepRwfUicvqTT4EnVQCz76RAVKG7pahXnngDZh5bwsQKrG49Xiya2",
  "key23": "5SSbmXmdp3kvg3v8vuDiBm4P7FKHu5HnQbNRLt78eYsEif9nqvRoyb17c5pJMYdKokJVdq62KSd8us6rD8Mtsy9a",
  "key24": "5wWyUrGoSJiJtS57Vw2cXMo39DtDEaYT9MAuQTXjbWWzQEkjzBBK7GV7yjV1TtiVKxxL9hxcjT3L1inc7T8UfsVf",
  "key25": "3Gq7K1xgvhPtfYxFArHKTx9RCqs1C98LoYvshjXFeTujWsZyKZtBNN1TqQ2dwYYGtr7upowpt3acb5H4ouywWWuR",
  "key26": "3Vj4D8PPqFvCta3sjebyzdWq7XaDzWZJgX9UsGBEFVNuKiAKPYHRJVeHutFMiGvhewiH8YKE2hSL4Ly8vUqj4cHg",
  "key27": "5tNUwPbtyE3zZg1XULz2SeEfEugLQF2ALKJ26dN2ifmFGiMPjXVuAkZ8tHibkm8ZRNgnaiqTQWYtRbTC8Vexio7g",
  "key28": "3UNSiJs2qSb5LyCpTQsfZ2m6UPW2nsBWt79UutqnujMtVJVGv84tVAgP26K4vdFzswmbUU1GqUk4D32eMemrboam",
  "key29": "33QnyXudGcdqV2RwfJnnQqgpFCpHyXhQp8UpcHwZ6T5yCfpoc4vgj2ZGZgcWUzad7VCAEywEAzcx7s5FmKwmFwsJ",
  "key30": "531tTMJV7bzHDhijkqiqraBQZcgKm2bAaxKgYb86RjzqnWBCAX13byxBPpSnScyMH58qw4zTsJbwh72NGuSPmXBR",
  "key31": "4f3cEU3BfEsTv8VB8AGFLzafh4MUnJePrWLpqDwsbaUfci6YFFP7jpkzhMnNEVLWJ76BK6HBdvDjswxXVYDmzNCe",
  "key32": "2cxN5tZxdJazqe3CR3d16JhcYywRevTmgpHcFdhxHQZSoZtRTNUoAK4grAv91Hj3BT4NrpU1EkQVPtJPEfpH4CE3",
  "key33": "5kA1GURS92kTfJwjaux15KBQrfKyvNw6gANrKx4gnFcratG8SitkBu8eiKzHxPxM191mXxZzAV8om6CF3J9nBnKB",
  "key34": "5uoXq97QhMBDxmamnZX3xTuiprLD945baG6EJmDaYiEQJR1hWAmRbUayFEYJ4U9sPsRdSBqx7gjbxMmsW7m2Yuwq",
  "key35": "4Phfopfkx7WyvdykdZeX4QyMrGnCYKK1ki9rmJmyuJi1LriKjP1wT7jFykA8yERFeKJ4mbR9M5Q4sH87PALNRAtA",
  "key36": "37QGGdoZdnhhcbMJzZPWTW4u3EH41ii6g3rdvaf214fGAFJdNgyc2tjWVY2xTtechUV9sVzseGLZrsUcRCXhv838",
  "key37": "JG94sv9uK7vKZKA321RrHsMifiFxJUUE77rkMFxxB5VubKSTYXnAfQRtQcUcJ4wJFqkjQbmwQRPhQAd7hCLgtEo"
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
