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
    "5eUs9bZZNxP3VyxS7aQfZfUebrnhrtkbZHp5o35i96AmRBx78LYL1FX46g6tqwxAt7g4rFSBT8fUq9bG4bqLqxgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9XT9UFjfEXyrPPFX5M1NxnMfdm9eNDYvMS7DhiV1aNHPDVyiufBnJtEVAiHhmnw2nGVyV87MBD4SE3bfsxaPJN",
  "key1": "63zKKNjnP6WXvkvo3jLQuCwhh1xwawj3CikHx39wM8dDjYRgRXpWkjHLMpDytSA7bCzAN2TbnAK3y6RX8WsVTq8t",
  "key2": "Fc2jpwvMrdTmrU1vHZYzJd3nS5L9tb8nGCW268m2QmKAR3zpnLE4dMRiJggc9tv8XfCpcyvt5WWQ6y3KesXm2ja",
  "key3": "3XNewuJvJAkSBZR3wYgUS5erpVaAqFD59PqVSoLi4cdWdRibrudsWSBNqvzR4pxCngqiNu2NedE26kSeUAK4bmjW",
  "key4": "2APQgqYUrNB6pFxeAo4JqB4RW7DhnjUS8ui8WRxJZgQzUHQstocss6NHspaS2EX7CPSvpg5C49kK3CXABGUbaxHc",
  "key5": "3EJn6RsdrzNyxG5HYbo5VLnXtCwmZksJJaziHa1M5ZuygjbMRCvg3QYxvAsimsMgYLk1xrrMNZ3H73gvdvvtDsg",
  "key6": "2diF4D2oy3ekowNchEwzCSrePWWz1oS6Vvbzp4m44tNfxTv7n5Zb2N4H2BPSqPhMj1BELQNMh5xsP65FTf1mQRgY",
  "key7": "2GFW2cfL5rJBJgDEdwjKjbmXDh1aJrE6jBeG8HF6Appnxdq9AXKyu3puXjbArW3nckvE1LM3NoNDK72wK51TWmAE",
  "key8": "5EteTN1xBuJJFvJ79BPg6m5uKPWdmwafTZFyDvnokgAhuTTc574gSogDvKQKa3DJujVfhNTxDyHrTTcRFSinnQ4i",
  "key9": "vL6cyjgnd7zeP2QovDbhsvU6HuqV1UUSkLoNRxR583LtRpdDZeyjNBjMpavRMWYpYPDCV1PLCVcKTCi2nQgzRBy",
  "key10": "3Jx4wVgM6QpjBKq7WLkxKo1Mx3qt5vkDmZRRDzvidhMnV8ZfMTXYFizrMmEoRWtVvhKSzPy7jE4NnFny5dNjB3Zb",
  "key11": "QcKZU6cai5sZC6n9sMigtCqGwuuFGShgThVZufJzhbSQepM2bxnFVvFDqyZnQGdLnF8k5ZjbbVfTdFnrgAJ8bqW",
  "key12": "CfC2C4HBaQKQGeVD1KZmNjdxKzrkdeyYhSc2VpiEGZ7atzYMYUGsZtipRqpMWX1pX8y4gqpnrJv9qAur4ZurhhH",
  "key13": "4ntWoVKvRJw37aLr9dV5CvtnEfckU1DoBrgtikAUULiYWvRLbCj1AaxDrcrX33tLSUnznPwzsghDvM31HeFFhNyd",
  "key14": "5ghY6WDeofPvexZw7qUZsRiBx9KUkgiD2RBuCTRrKr7BBp4khHuAwsHGm7L251SQLPq1Q3ZgVmvCy8LWv2JdFkSx",
  "key15": "2dLSYH7HmErCXvu2PVatEvSxYqhZrTdrgbqFtpTQqAQkZ3W4vhH8hruD57rBYVoo7p6NpoPuLHRJneG2MZmZ8Wns",
  "key16": "4LWbVp3bjzQZXRkKXWgfcJApZoBQhkXocQyvMX6a8CU3F9BJTwjLkYbsPc8VhWPdFeMhmWQAFFATzpp7BbneXqxP",
  "key17": "5gbwboBU4Zyi1ba9yHqVzTurUoLeHCo8RAqnAbcQ5JStBE7BwhSRRDo5Yy6u89QL9vE5ygFzDGmPRTZmRdiDrBpf",
  "key18": "8QCH8KYEbt2p44B7Qcar7C82i3pQMLJkipww8mWG9RpH86vMCxQz5Y51UwZPWUvriPNKiuENrkXtQcnAAHrwBZT",
  "key19": "64YgftXvGjfQzTKNWmFDJ4rXHxmBVP2QowwqdoeGXVQJyYU2UFHFe3tHK7uc3Hwc6uhRMqtXxjBT9HqcKZhBPCeJ",
  "key20": "3GwHEygpQJPe3X7jov2HUWKZDeuthrarq8NMgAPJSN45HoxJBQ7DUEWnufuvdYG4HmTN9ytLFy2z39s8Wdpxg2Gj",
  "key21": "5uDHV2WjzrUBnawXTg6EBJiCvSawCCQf6k8gn674rQL1dSj8194fRjd5uySvsmXux2mr8g5RtRgB7zRvVJs1TyWZ",
  "key22": "2wMHzcM7JiNPfoVYUDnKhk7f8JPCyFivG685811Qta5EqeUEnicxw2Wntkx6Au7nvWwNvHpqTEUVZNF9HkTxXhnA",
  "key23": "3T3DGcC2t1EV7NLoNsmyDDLkFHr9BZ8jbovBKxiNTNUrVjiAhx12G6rg75gtHYa4bQ3RV4xnyECVYoMv2DdQ9hdg",
  "key24": "3Wn7QN8VydM9zEcnqz1GePnD5wHLhu9LKCuCcc6XgZAspxPwMXTCPhWKeTiUBN1BjrWNrRt4EtTQgq1AsDeHdvXb",
  "key25": "4yeCn9TfWdGa1t2nqsNnNdX1Ew5zSqtKUttYQZ52hfDZ6GEdz3zozhdnXa5udP7UXmtCqPgkhqR3yd2Btbs6x7b5",
  "key26": "3RTPboo1Qgw6wMQrTnhFTEYZxDTQLd3P4oF11yYqnZkukhDH7kr5CLK2wDG3ywGXtPoHwovRax1vW6NBg6EiE6AS"
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
