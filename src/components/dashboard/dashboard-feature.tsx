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
    "3fRv2SucPXWzfrAmfVpThbhGZAQnzDnj1mpYiD7rsZUauu62Le5S4W1N2Mgh3KGdX4o4zXmfGJrz5BPXAhrha4d5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KeVidEiR37vvqfzs6Jtnm1e7HCUtDBxJjtPm7XvN6qJycEanuXaNhLR28uRMf7mEN5XbK3pRJCkAx7S7GaRJHKF",
  "key1": "5nLfX9zb39o8AK1hu2vVnj23kTYgThBC2bfDQCAV8WofGtmzqudHRy4r8285cA3mofqDbv2gC3o1hzYCvrcbvEqN",
  "key2": "613LvFcJRRonygGY5XZW6Wg7iRWyoQbHjoMgwGZfW3KQTBHro4JCXy6iBwWFdeoHhWuUFbtKFDfbMJUjSPySo99d",
  "key3": "2mfYKAQF5g4nJsVgz9VpXER36JPMnPebyywyxPWgePqkTYzTUK3ea4DnwWUcUhj5Yzc2jwp3j7EF6bi5ux3zGUGS",
  "key4": "UZrFUW8BKA6poBewuHZa3sUu4dUcvTFgExvH6z7KHUBTA9GyCWwmjLhChvJry4igsVRgbJ41HULU48R4hisUF1A",
  "key5": "wEXakscX6pktvkZGW21YJVmeiAziRcRhuiSDEyxgaxhbXJV33PaKtevgAewsUuwjCBHd3h4ELDSStr6cR7VikwE",
  "key6": "3jHVJvZBsmyRxjWTg6VNAhcETXVpNLYsnwxsJE8CjDMmXKjhNMn1fDGTF9XECJHcBTY34J4UDkwtT75mGZehfrDP",
  "key7": "iH12b6ncUsgkWDGymEPaHsBsenBvJD9p92VMB5EjvSEN4oX5wbk8ftMVdoPDditvHZRemHRJUjgJHu9Brjatxi4",
  "key8": "5bepUJrD8jTxS8G2DhWgwJXbqmfsa5jcukSL4sPYo8gazckXgoX49uMKw6cVShgFSHPkSN34UqER7ZgHzBNzsR3k",
  "key9": "aHJTNyfAeTVWxxVTUtESd9YdXqDUBRsZZtoUJKKKwJzwdzFZ9zzock7pwZXfFvo4vGdE39VpkuER2wvkd2WFmpX",
  "key10": "4MuTomZvAJZMZhep7MzYdRF7JmMNnRCYo8wY1djwqCAnxsWmxyziq8DBirYLt6XNmTLCuvd9iE3FUkph1e24cSgQ",
  "key11": "5etBzPJteC7B6e7ooohZBxsqV65JvqvJDccvbaSoFo8DNuZdLVBnWVQRFc4gvV3TUWKGdHhdPrwatrYp193eBzua",
  "key12": "5UCcuu8E8kVSDvBZvkp5pctXS3WBVTiCNXa3ibm7LZc8iGgaeWQAh7n8PksDiQiWu7vprvQZ5yJS7yu8HtPSsWgb",
  "key13": "2caSqbySpgVkyPMF7eBQCdAdAyxf7gR2mTZWWwrdE2rzznq89oUaPgoa7WXky4f932QB4aVCj6tswN7KYXXPeMfe",
  "key14": "2LqY7st5u6ziXhbBcMx8K5CcxvgB4yXVwyXEJtrQRxXRahmb4ev562dpGjVdVYE99vxRtw32QGW74UyUvR8ihEA3",
  "key15": "4Muvxi3PPEQTu8yTXffmxdEY8bskPnWGtxVQniPtMBffeL5u34wEGS7d9Njqp9Juw7ZraUf4q1yx61T5oEtGWkYA",
  "key16": "2FRMLFn6JTR6hmnqSh2xSMgJYeTQNvy49WV2bV22GhP5VZvkSAGin7ieMaCaxud3y1Sn76nK32EZdJJXTC3JmkNb",
  "key17": "4Vo7pqk6RfAX6wowq816MmmNzcUdW6kp1VAgu5i9uMgQDrKXmvUne4n2oAWWg9dZW7q6ri8ohwxUwnWR7pq2FiTG",
  "key18": "2mMDmiwwg6LntK64Lmnyde5YAdnytErAReVQVXqYp1HAV96pc6T91HAnZHDoqad8CRoNc2S7EB4B2uL1Lfxqohjd",
  "key19": "NRCFTRwGVxbExbuVfd3NCJmbvQnBNcB6qEKPmCA2H4VB6b7nxdh2pzoVDytoL2rVbnVRGNCHWnLZBrnKuiBohLK",
  "key20": "22XvSMTE3qi9Ft4SfL8B1XVqK7mtUsomaFjnxAbMTAfHfdDE1M8YXooTmiGroT2JemSnsQwgPCT8tA3eQQBWTw2m",
  "key21": "ctHzvMZaFa5t2LgTGXZqJKmJoQZXQ7AZAb5hifw9bARPdqQSNC6j87g5MXNXriXp9YfN9yUod9Q2JriKdDyb7vW",
  "key22": "2ctv9UWw1ozg1TquMJ6HSuU2gJGaAu4QGP1ccE4chFDrzmy2oT1U6Khgj5WvocNZU5SFXBQ7eZUVpHt1amyanmUt",
  "key23": "3ot7rMNwijeKmxt3BooN8Cx4BViY8D7RQDBdQ3BnBfNQs7xKsLmtTEhMda1zdwQSH8HMuY2gdGaYS145k6PXiV4Y",
  "key24": "geHCPKkYDdGStKKKTWQuLwELyk2KViTTQW1dxCCX5zcsLDVc1qhSYtV5knoymrSgJgTMekaMnQ8imrH3p4VaKZK",
  "key25": "4b39QUbdJ6UDycosh2dFzHZ27tSw5U7PNChsj3EB2Jw6sP4hLLfQm2EtXQNThnDAMu8sD3bgTrVKmnAFGpUFyPvF",
  "key26": "LzfqiEcs7eSyLFjptWPgBLJUhfbAK8mrUxkbmjDy561mPLCGr6ZGc31GdH3MvVGW1roPDBdzwsDXTe6Sp9XfdQi",
  "key27": "2V4MxD5B1Y8G9njxmK4BckotGbxdpNMzvkn8F5v1AC2nqv9PAshW23eRh8NmvRmoXw8zxoNNeEfZquCBoviEhSh7",
  "key28": "VEWXavATFPBGwi9ijYYejF6b3dNae1WqWNe3vpEQAsY5zNUXtyRjV5LEauY7hNAstbsHcsgNEb1rVB68acS6DiJ",
  "key29": "b8uwNZ6Agzs5xk2Jh5Fk8SuwCnPeAo6wCNYhv9BL5bkUdUgnZsiYiqd7XAAPrtxiW6NCHea1CNVcftd5AxgGiX6",
  "key30": "jVZ5f4Aqi7xnsWS3MDampMY58r5g37aukJXdEaUrx25GPc2RgBLvSDJKsKCSwHiDR6rW6cNLumZQgJE7dNYvyi7",
  "key31": "1yrmcRfKwQMhothDcb6xb2CVv8mEKYDzRjQYntVzXenn4jyHon8ncrHNAET5Ke6oJLAaqTWbHSzwxeGTWPyqhxs",
  "key32": "2zCzEzpEXpgexSNRgU5XLZdShmAS8fXPYarmPwd9Ru3guEoM8i9JxKNb8UXERAwBKUBotN7fW1is5FS1oyNQtg4K"
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
