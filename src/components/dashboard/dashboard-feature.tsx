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
    "2wPt4qmdgXj3K8PNLa3t3oo9XKviQ7bFquvxmrqffNZzbs1CZpqZASL2sQv2mqM21ZGeEsN7qrH1qiEwWFL4Dm1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvYTTh1eEPXEXXKu3tVDM8BfobjFaoGC1ystc4JJoyhyMXtb25cjNppmr5MUzr4eVKL4bq9qskz2qFaR2jyv96Q",
  "key1": "3Nju3MDWxe3XrXDqHzzVEdx3Kvi8gp1xMGy3ULND4sBGscDeJavDDARi4kRZjdhxEdDaantWrFCzqR5EG2DzJ7K9",
  "key2": "35FP2ciKFFHHx22okAZQHnfFZsqyWU4k1c8WLt1ZkAighRYMod7kQViH3egR3BHLPj44zhDcqf9H5rZtdFi18pwx",
  "key3": "2M1pJKyXrAEkWCdwHgbsTDDKB8UUEcuYvwkKKcgKf2t7xvANs5bnSHe9nT9THAsYCwCHjx4B9ry6zCYya2Jxiidz",
  "key4": "3TeRsvdixzzJzJFMM4V6SZGx1zLVHtQNPyqV9WYmKx1xnrHYihc1aRfgE7BW6jynKfhSrq2SSskZXwg9ezENXSTw",
  "key5": "4PnpPARUzwgq39jwj128RWmeez3NH828a5zRxJR9bba2TQctdZMDkkxRhzvaVbWixRwR7GbmUNMarsSWtgiYvxiM",
  "key6": "2HvLEEKdQntUzDPcSzTRcG7PDTTjyNcLs4jMNmDJ6hrFnkq3gjkJWhgf4cyGSyqt21z5jheXfya7aBH6ysNR6yAs",
  "key7": "5rmtRsx5vq3VXd4Ut6Vt5mrpph92T4kTpL6e9CcYBEes4wvKW9dkUDh8yAZ7WsS7d5Y2SgeeitNsgD23zTaA3pY6",
  "key8": "44A1XcC6Sa2hcDEgKg1L481t6Q4NHDmqS1PKsFEEPa4f8MyXCXDy8yrGpxeTQ9ZwHALFjdWvb8Vxs2vkvttTMWrB",
  "key9": "3iF92RKtiqeQ7gJavZp2vw6LvFnHNY63JofoJUyQB4MrvaqVtYt43Da8F7Y2FT1U7oRkvfb5wUSxDH9jsfTsyR43",
  "key10": "2VAwb5SEBrRHTJLLFEJeFWGMREhuUPgnABJeYy5GyPoSTxL4zRiypMF2TWy2vb3nSm7nqD63SXXS1NcBLtsrE6BV",
  "key11": "5D2cUmvu5cq72ZqiDidkacoi3PjEtgEmsnVQLbSCaVLfza3DhJ8cgHfq9gjWNs4zwuZDc4uJa77sCbBNbttKqEWi",
  "key12": "2LPVySjCHK6uWEbYfFQGSTJwRk4JpLxSqyesAv5Ec7VdERbeJbDJf6RjMKNGe6oMJUErxXeqveWWGgo6d7mxyxQJ",
  "key13": "4ZxhMWdHCgmkkykYkbYbmsra3tjsXsauyWDTJmaAXfBpiBEiQukx7SdttyAvufXKgWNda3kDujwop75QzPZ1Dk1n",
  "key14": "4r9JrggkjAK5PC4vBZ7Cu8rduBY1pF8AyEo1DUZ6mx5XMeav7sand5biRDiXWPZrocGAgEgXFJBfrQToMGSjV1JK",
  "key15": "2wr3ohgd4ih3AqWRiYLqJ5aEVjDZq63va7Cfrdv4PLFjir2iJZFG9RjgSijUw31FuE6wjE4qshNHReFVLHNwDLvY",
  "key16": "3xjYuJtmdVnipDanAMiVNACMk8XZJhDk2FKEgvor12GjFy5dFP27pdxXB9oW9RKjTTM9mdEHUfUWYzAkVzi3B58Q",
  "key17": "4AqGTceWMYfreAJRLcjnSAKCP9QcSVsM1afg6GMq4XepwrxE1sEbL9SxPMYdw2dGmCGBNQSh39A7JbMZp4awqfcc",
  "key18": "2qq7uGHRjXs5PtG8my2Sq6Wwqw53gF7HMCdy4qWQgHF6rufvZfRPwQSqUrexDX6zRqAxr4CeWGMTECTzRFJREkxy",
  "key19": "4WJBPgVp965j25RoScoYXktX4b7F6fSJCW2RLpHn73m92XewDyQt2dAqnsLjsyJj4GaqCocn8Y7srusQxdTbHLy2",
  "key20": "5E1eWuWhTN5EjjF3yWbiMBkmx5xik7KpBV5kE7xMrJBL9C6fM5r2uXEPVvRTCYfvcA2qUNSow2ZtDV2En9TgFiS4",
  "key21": "2iK4yrHTkw2uYoFCogmZfBBZyf1UbkWkKmShvxexHMi3RzP3SRs7MRJM1hMmqdu7qfW1NKzLPYyuWBngNC32bECs",
  "key22": "4jxYmesXSBhWeJotDiKoAPCeFmdxTdztTWHp6iTPzGHduoS5JLREWgRvpw3kQN1aMNFRHYUaP33nSdZxvwPpRQKm",
  "key23": "49ucwYaocrp6ijjnFBfPoABtsdcYCCzPw2uqwRVAjz21nAFZs4Xy7PZcNLPfnhZ7wWFzcJ6SW1LcCKhayARFawmn",
  "key24": "2W4oSXrC5ezQcu7JEKEV7BC9krQn842NeuJPfnoGP6gkxcM1YVFxZKXzVMP9vnTrZCQySvjHe9To8NZwBLcafiJ6",
  "key25": "3NRAY5v4VQnkSWo2zdY9NQTgaY5PXVJdsehAfckbY2BsKnkyqnmDT67UBZ1UerfrDs7DhkKpSJBpbpjLdoTEYiop",
  "key26": "611NMLg3szQdXpJU3hZ14SBHPKiYEroKqUDycghcRAheHruC8M94AbPkQKjcZDqTc24DKziVLUS3bxNnB5eH39YS",
  "key27": "522iy63RLFrRUVUaV4Ud3BiXbj6afhGarA87o3W4aNGmcT4FCa9fSACPN9ahVwNmerfxxoMtj65zwzZo2gUcv3dD",
  "key28": "3FAWpvQoVUMwAZD1E9z7C1p1wP7VTZ9hyKuRLz7RvxCXV1nNVGuea1wEh1kCDuY4BX6rakYusXdep3gWCmPXGGdE",
  "key29": "4qQfxYeJMMPW74ewp8g8pWc1JWurXpX2oCJZUP32N3GwK8sMMDFgAAu7R9sMimpd6otY3dRTNfXx6WNbM9Esknt",
  "key30": "5vML7UxnwZspqymgfR2mAAc4HR52j4vXa3fmboBRSGoiYdFAtqBDL1FLfoCSWdiBdWqovkpD8FAcW6QxT6wetHq2",
  "key31": "JQqHXiGX28zRNWx9cvfphWT4T62TVQ1WXTySuyCEMooRTPsTrFkbCMxH6j9Go84Tv4Pek3QkESqdMhnJGMaB9A9",
  "key32": "9TKTUzG4979B4DUxbY7ycjCsY2EV61rQsyA58ecFJHEVuaHm9Jh4nzPRpdZ6uQ9LZaXypBAZAeU2ocYT1czEgxc",
  "key33": "4VxyeVKViSVyj689J3FtkXuAi2jnN9VDLqvsRnbWuXSsxpSgi5t9SVoYemiwQW4ASv7F3S3JwBWQiLEKj2875WAz",
  "key34": "65TwWWgnZfs1bBbwWNt1CMYpAzLXHGTMRwGsMTGXT9HmFjZWQRJwwgHcaW1GnV5NfyxMrtyBUqsKxrEn6e67d54k",
  "key35": "2bdwY5e13fRgcT7pZeepkv6i2X7WXMriJeykde5xEpHsdf81r5bFKAWubRQB5sYWHw8uzifVjgLmJJNFEqkZAaRY",
  "key36": "5Z8jVmf2VQ2XNwkmTksxpuqWjmfoYJ8begzGS1hUUVHbS2PSW1J8QA32GBwHsqQqheR6Af1LPpqgt1WqEzhKCgsZ",
  "key37": "4gQWHcsEVPPzgc61L2Jbmyt1xZENMqJrasVyabc9MyUfRb2ZCCfWhhuRCNj8jxjHX66QSpEH3X3aAmLtnebGSu3e",
  "key38": "5Dxkq17Qdge77tdq5YEUuHhCBA6GMSqmJM518Bb4hZdhh3MsReLwvL63DRv8C3AzZy65rsj4YAATSdbwEmYzybXt",
  "key39": "4huwJ52XwVCooFXmPA8tDynnGhBvZvNNDZtVvYHXDTBTQWzFwbsN2R4L8mDKD23ixkTWs1ZpxuDvqoMP433TKHRv",
  "key40": "2TCiavmveCL9o2vj5YbcWt1Bd7JXybcUacfLMb85L62VELMFqSXC3yqTvJUdyGKqDf8vWUAbFFd6YJp5Xqq7Qy6a",
  "key41": "5DJ8uZk4jEEQ5xNEcux3TrB1Xp69HivMFvfWCa8UAWpgGGPomN7dhX5mek6pKWovNsJvBWhgrPKShGobn5oxRgR4",
  "key42": "2G34AcqUVh4DEDfEFfSr4oueR6BLTsyzq12LPaQNVXBhvGdVNdkCn17ChpYnCJrsbzvfjHtG3aLQyG7Ugoih3TYV",
  "key43": "3psHUHUE2p8K6kWxLgtMozHuwSGdMhmeDbsw5fPQVMLJpUZariwCsTQgRAHDKhDP2866P6PWLFpS3tqPnQFqVjBn",
  "key44": "23k3M9q6fQCgjdxLKNKAx5JsNRTXcn18buDeqdMBuC83KKun5WX8W3Gsib4YE6R8TTub7BJubGwJ1QeefQuwPm2w"
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
