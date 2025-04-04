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
    "3LixrSEsyHDmKaGbPYZh2HPmxAnBckdBbpfmyyVANHTJTQib2bCHwSz7b7WE6gxNbU64iCqkG7WskqPJzmYv5yYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1L7WVZkbzrb4piqZDGG19n952vCYGjAsNoy9fuNhvv2Hgj4xJUtbtvy2TYzaPkftXVjFWJ82PgvkKWhGtviL1vB",
  "key1": "4P7Btoc8iKvVEyiG3zjV8Yjzu4XbQcRdze7QTkCRBF8f4Po71PEEwG9Wqb39AqswFRbFn4w58UfeohALsqsfm4cs",
  "key2": "3G94f7oVftoQVpyqK187Xq1Lrmre4iEUg6H4bu5UDbiN3acdwV8bssw7GWUwn5ejoNYNYGX8Sk2BvgHmsJ1tj6L4",
  "key3": "A9RyhMirZuEfaTvkknh1djSw1UMaXLn9b66vSxmyZd85TtdnubK3F1dL19dpRhgCPVCRuj1cxLy2uLmPGHeUdLN",
  "key4": "66P15KHsNBq9oaJ6o3my92Y8NYWZwKVcgVBPEviCD9tiKhaTbraVNKA3ufFeX34ZHuV97AyVHB3zLvYFyEynQ7Xz",
  "key5": "3UuiwyvyVAi5g5iLNAjEGgWMFpGh1DhBtw6akugCorMJZa5TB3Lkbv7J9MSj2uZTxZmgGvpjoN4pD9Mc3xCswgWK",
  "key6": "4pstK685h3FdsMLFYLC7povr9HxhVTHgG2JN2JRVH1uixweTUQ4co3nYZk8KCrcvVnYafb5XSxrSB6TZJ2UAN9qv",
  "key7": "4zxbRK2BNfwzWXy2stRRdemWweSgKFUMAdnouNcCt63n4eKdHAmFo7zrBuFu3C8rUBFWaZvWEv13pH5nqftwyEPz",
  "key8": "5AGXwfEiw27v244txwgbAmwEJuaNYitVi9oUqfgCWUj6785VCzWLJSh29nnxSRkLMoM2WSqHmLYrk4jpbt24tSQH",
  "key9": "3dYjUY8Ts7a8mwoV73JfCB7cM64K6JG3Evtj7CnHmtNFu2qtdqSYg6dT1y97e6keEKmVFrhAnccT6xC8rjgDTeR4",
  "key10": "4bvhLmKCZTm8rATRUyKB6Bfy7NC1byrPhdbx45EZFiCPpPXtvvda51UYLvyCyu58s4CzXtvUxjLcqmKeXD21VGn2",
  "key11": "3putxn58mQMg47aNJSkc1DYNyHdNbbiPb31ke6DUU68FBGeCDRsxhHmViZUdTeHFqVS4aCXmkVk7rh981ZKEytDc",
  "key12": "3422BLWnrnvLs6GiTWMSfAX3JsmnMmhjWgf6QCMvQmNJYyEam6Jdv5iQ7mDZ94QK7DhgrVUwJPzdVmf6751k6nZd",
  "key13": "3gzJKk4dLaT7nEVnei7X2t7YtsrtaaNGBcsyfpKMqq5T4tgscyFB6RS5atp59ZSB2vKkq1VAjFQ26dMVNPcEXbks",
  "key14": "5ZRwjKYKkZw9aWkTZmWwGWpvMXHPivPuKfB8gYeGkGb91HXUV3XDiMbVbrYGP7huLeGMEGRhCC7nTZPhUXGNYzpd",
  "key15": "MGHR3YNqEhHbjDSTGPNyMBDctjXXM2rWKt2UDmiPLh5FeSULuqUbLqMPQzPUEyH3ZfJ7AWAHBzxgB42bKmfKjxu",
  "key16": "krACwX9UsEgQvcRNphBo7aUfkozufS38Kv8qkNTZNYzcvMREQHwgmE2igKLFsc16dJafP8xnCjh7KdEKPfSfKZ9",
  "key17": "5Api93M4uzE5vgHwRQhsAUHpUzvxUYfJV5uUHUzFueuEtvPUTNox9Pc6XAQkghPGv6V5w18VovgcA2zH22e3nzij",
  "key18": "3DbaiMr7XgqtnwahPGteH36SnKGqBz11u3m16Awj2c6Hu54KyWU91ZkZ6kfWNMKUtHzqEwkExZv2MbVVz7VbYCNc",
  "key19": "5N8qN8VJYuxA7D6Hn8gMmysvzzugEp6xeinqwPAM8VMWDN71Ph6zk2NG2PTkTvUy4JYvRrgd6mUut9AtnrBPTzZm",
  "key20": "4TeD68rFBvPnNyy8qrQR1nkATbFdC4J941yAXudu89BRYUN7tB5ZYskUyz8ZiKuxFXo1B1iaLKiyA3RHtEXyoPrf",
  "key21": "3VUxEQbpKztBVjEi7tTpd3yABCKqVu5LxcJdUJDGjqvJ9mHEW8tEWVN912XPiZLA2zcs2o3Gs9VSwNboSdmJZtLR",
  "key22": "xZt6keqKnsd2NAEiSQPfdbm4ceCaS1KVXKXDtKNXf62sRENAMvF5dGwznAytwK7KUm4spzP3N1rz9C136TvHbuJ",
  "key23": "3hEMvSdowNFLAr81qe8GEKBnwsMxhjPkZa1pBVGy4cmXRBcvZdJCN9AXubYVM4BFkWn5CdKDhvu1c3ekGDF2eemF",
  "key24": "5mkY2YY61x1dJHebaSbj7D9TXQXsFZU2uYoJZPa2VJHnH4qfRQ813PeUzvdNSQKrt52FPVX9hos12TUHF6HK8wCd",
  "key25": "5Pssj4R193YDAgASt8gFJw2vXqyovKQZ7jaDXrbQTJvc3K49Gu5rKCCXx7AQKo7Et9qe7ZCLhKpLZXr1LxNafWbZ",
  "key26": "5MFMmTaSD2jjpdeQwru3aswkfbos5rE8PtEmn3EVTk2pow88k4nfCxpJUH2oowjKc36r5z3AiEaozkpq7oNFw7dX"
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
