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
    "5ZqcW3pQmLmDAQ5xFUtfyJ66rAJwKwYxEFznSw6qppiqKGp9qFGAWMeoBdagUrTEfdBYRggLyHenLNbDHfxiMXbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZjVNC1kVeQweTaDnFYEXq2wTjgS3rbsZVUGNgbUqRfGpdKMoj9Aj4mu82Tef7UNYeCcqFNjY2icTDzLNwwtEki",
  "key1": "4MJ1fVM1fe5DAuy1fr56HJWk3QhB268Rmnn2udseKHY81hpEwTuM3eNscM4gnW2KX9nN9vwU1Ku6WMK8LbBzS2XW",
  "key2": "4GfiK45UGKZu1tX7CeSYMwHhBtVM6yy8VRof4pRpJ2QMK6B6RdMHF7jmmqhJx79oPpXqyGioVJYzeLTQyCkgJWgL",
  "key3": "3QEEvdhPD6ko4os7EBSnMAiMqg6mp86JjfsPKtnmfb7kDA9VY384vnQSHfHhMHBXQtjowCALYgNkmNFyReonef1t",
  "key4": "59SVRpEfndRyK8yecDFwRqcT2kN9quc5v6KXEy4HYViiQD9ysVBYd3n4HTaaJjcfDxC8oigTj5eYTDzHfrQZVrJq",
  "key5": "2uyLaAPNyMqYTdLMVnpxdqtoNJtMKiENe3hVGYAP46wqzyYJndaSpi5ntDpv1dr2C4iXc5dbU17oYMB1DdFFXB1z",
  "key6": "5JAxgW2JpL8J9VpkyMQQnTy6uoKnEtYFcx6CVhpzQzLD1gD32PvB2DM9zBdemQj9CqD2Fpe8VfVddA5HpJc9rpbr",
  "key7": "4uPHhUn6FSr1Tg5sfAvMhUMm99vBwjemhmX7VVC2BmdyaWoevAcBTdq9iEaKEJqkNGWesAnxHJnwHx4Jx7MFSh4V",
  "key8": "3vf7yd1rUaAEiMEKr9R9giZgLZvvPVr416nVVNy76VFrzD8ogBznkcLmVQx9jS9KjWh6HK7Ped4sNcwxQFdKbTu6",
  "key9": "5X6XDicGQKy6GqJUswLBteV1LLGVXzC7L3SnCGNRRx5voiCBNkSTGZzLVCixqEWR3Vm82i39pzmmAYx8EV3MXCik",
  "key10": "5pf1cYRrLkr9rYJMifNPFe3C29XwELBmknYzGmcCPr9B7ZgvP3vZvDMQCvZW8vEpHpjhtS7kTScTcWmDCUgkmD5r",
  "key11": "5icD1UYn2MZChgdPoJKpfLn8LP3T19TD6JPKZvSBCNcY3aNNcuX6y5x5vs1X517oVWubvAVkTZAFrQscqVSR8Aun",
  "key12": "3QrwexwPYsFzFVz5s9iYaVouqQ73p2MMFhCiySodBrjWooFx5HxTUkoUTbkTfbrYgcWWYCoxv1Ta5GBVPsp2sS8n",
  "key13": "2Wg9rGP9jCxoJQQLbs1FiVsuCnsxoYK4wALwi3HD53eVNjgYBHaWDbUMi7MipfheaDWXteb2sZg2yprzgHMrNmvJ",
  "key14": "36kufhR828HTDCg9uhg5FJEcU44CV2LpVg4vxFBcabkuwVXSxMHh64xnKREaPJuvKVUhBytsSrNue7nQAArK19hV",
  "key15": "5SqqiiV5ENcN45Dd64K4Vt5Mz34XdDi9AwDx6PKzhJ8N1MSV4KgguXwrb1kcFbfx624amDgJYtC7kctBsAAPd7VZ",
  "key16": "31kLtAFBxdNVfBzRTjn8uMaSNYqPAG4SZchYHhC3egmBTzscLkzR7KX26FsVHQ4tMyLsmYcY9LZ9CGV38cuFhhZp",
  "key17": "45ByH3nfPTFDjjdX4Jox8iduugh6sqpQjC5EoGpVv9qNDhhoYawGfZcaYsuCMyWERLhaxhhiD7Pa1cseKgdx92Uy",
  "key18": "31ukdmHT83yjpqjCEhwDwH9M5CeiKvNVf2RGEGooUVM7Eb3FJdd67PCosTJpNHGnpu8L2BeLp1vQSMjELbHSz4YK",
  "key19": "4poRKi3t8SRZxEshu5gfuY1NJ4inUcfjmntfYXHmB3zW1UjGnPHYx189pfUgxBuzfXC3FXVeS1SaPScLZv9QqiiM",
  "key20": "2syWhTR9Ybbw5R8jNyYJspPRtWgHw8xLvAdQVzALRmUjQea2yMBEnBi18DhsuzaL9V6jmtJJRDZVUCmGcco5xQ4T",
  "key21": "5gjYoCQj2nkKgyDsJE6xKphmSZXHMmtANH9sJesBFVUQAAMQYKrg3xugS45r7A6zdyhrJ3nfHxVXcuKxQP2tUKjq",
  "key22": "41vBsbi6MeC1jwHccUCGNpeeQotfnkbY9EqYsSHgykmqyVcJ1oztyt1FPEQhgDoSEV3KGxwrhFfjiud6iYcaZHM4",
  "key23": "3znnVJ1ystYsJsSpWDnVvcC3B9P4HBPCpCoSxze8DUjxkiBStw1x6G829sp8ius3J5zw7NoaDM91kNa4YuC8RkhV",
  "key24": "4dWMeouFakGwharRbUKeLAJSmfQagE4MAG8YmPArBtreAqSNPkRHmdefKsxgU4jFpNzFb41kkM1hjA5aPnM3JK4G",
  "key25": "5yNxwG7GAAjUmeo4R3cdtLTPUWkjHBFPN6Bzhk97t6Vj7tfg4iE4tkvW3eHD1ttev3uGWSDa3PjkrHJJqASpXhPB",
  "key26": "3rxUsxSZRmD33RAhfDRCwEBxxS1uZvB82LuUyt7JX5fXeLThr6Csg5HekkPuhxhojHNBxvbMXr1GzJricVsMYJE",
  "key27": "339dNkVCYBTQh2d2DzuUp8snQCwKyokVqHpjBm4Jwz2LNjGnDccxFLDMX4D5kduKaRxkcS3MJwb44hnRxHSZG3D1",
  "key28": "2YYorKLvFJntvM32Qfw9xvXUwc6LAQAMWBWLoWEcceYCZxfuKeRV5kKDn4T1d25ScyBRMDyvuqb2hdVT8EcKKkRD",
  "key29": "5Kmdfr9Q3Ft6H3B3HiAM5Gm8bndwgFspBRjsSoxwGBp49mYwWngtgU94y1MeB4sa8YjU8NJGffYWSURGChMw396x",
  "key30": "5wzQ3XocgRWSJno9CxNDCS6q3vMjnQY9igKRQo1VRYvWSPyWPiZXzgMRsfoDxUP2mjVqHqDhpLNUyxnbuYTuXEzN",
  "key31": "3Vb84Rhx2xo889nMB52QBs5aMEhFwSVTLjZkpoYogagtq5aqBpx8Zq2QW5DjVaGPWPJKY8SLn6nvRpNY6Zdp2DYU",
  "key32": "3ZnDsshubwnpvwerGirx8oVjgJftVJ4XndiFLFAMYr7GEiNaduxQRPCT7iuJUAEefXGBGBibsMM7B91wczBFhPdY",
  "key33": "2AL6QumWZrpauWNyFdnYbsmtNtxZ466jpW9RfE4nz4yTKvDtEhHdyXKNAT71piVAbjfGVcqBzK1Wpne71aXR1oDH",
  "key34": "JPLVe3jmLnjgkKBBLdMZniWCyYr9ZAbGq8pJiCYKS8AUvz4D63zQtGYE1uM4dQyf4Meek8Z66niP3tvkE1mRVM4",
  "key35": "MQXiHdUBsYtGaQMWYJhgLhRv1tFusk41Eb1RuWjyURJHxQdPrdtp7WBw9rwTHZpW2ZroVxBTF59Lvget4FWH3dj",
  "key36": "4ZL73C6n4rhLzVFtYdrYCTup1D6t4wYuUvD3Pjzc5mZHCj9eJc6Vgbxcj9jz3VUiR8tz8dEokKe2TTR1o218fjuS"
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
