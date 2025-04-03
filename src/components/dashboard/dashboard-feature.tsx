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
    "3yXzPAxBo3Lt3jPorBiwf7XkEGEFPRFBzzU1BfjnvfZ1Yf2J5zsbQqQcisEiNjCA7UDhaRwLmvDq1xqHk1sfffTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iUqtvNnJKuorp7WY32HChkXW3MsWFZ8tyzqSznZf5jye5StxPNoiwQmBHKE6RpHEV9iqHyk22ELdLu68ZMFjyKC",
  "key1": "4KnNirV4Pu5f5jGbzpWPeGzuMJa2CMGi6gYtcYnvUQjPie7jgA5dQ5DHwBxT2KurRGGQGGmtg9Z1GGYwgJh3N3XZ",
  "key2": "22So1oyJgnFyjx2dmwrJziQkj2Y1PaR6rLwsDaET6WgkA9td2gYoJRWPYtQGuUyPmUqspYHbsc6BYher2TcLG8hw",
  "key3": "55Adp1i3vFe19KKbT54C9S5NqSzWG2ZLxaAwN6bBRL6Hewj8Ry2fU4ZgbbSz7vBJcK2PZcLwJAnSvBardMEDK1ar",
  "key4": "4qj3j4jkjpRwvh8mZUKa6z3anGtcUU6xGPc5m8gMS7e11Nke7no8opDfrCg3ritBLnC464QN8BsjtX83s1eFrexN",
  "key5": "5VFwnxFkeqhc9QaHi9BTVitfknsd59um3BvdHssdB9poeAfN318MSDTVtqdH6ovTeGD5UGge2uamJZY2qfvBcLuY",
  "key6": "rjFGqLuHKFxCAk2turZjBFVgGH5y9TDmmc6Qbp18itGh7trYZiuL2hz7E6hWVtBbT6BGCxBb81gzegdTakeZcN9",
  "key7": "2YWERPG8zZWyK3Yvx7C8vtwPFRZvKExovexk4gduEwnM6BY3uVduz3jQmtb2xeCtzGEDYWmr55abX3ebnzw8QEkq",
  "key8": "3Be8SyaokoAr1EzMiYh29RGLkeH5rAz2xVrtkzMfCPGMmKxebCg3EUYHfMfuGgdsvMbHpwtqzhUA2X6kEbWGCnAh",
  "key9": "5Zc4xJG4jZBJ48bhuH6MSFVXMtAjS1XRrAd6vQEnCSa5dd2vMcXF3QE2P4jtunLkGjyAY943MJ9KRnzgXpVgRiHH",
  "key10": "2jgHeLz7JLgyr4e7CVtrM53UoKft6MYx4pUyYum5xdzQkUpuxpnRKfzJK1HfX9YLFdXH3bEHJivgnsaDZUafYhhc",
  "key11": "5wspWtvL5D4K4vyh97PphLGgNX5K2L7S8cqMAjcvyE9P8Urf2DUDCaYzXpSQkwZBzm7LbhuMWppUcS4Gdk7cKjYa",
  "key12": "5eF9sxvenmQAnBm5EwMfhdsB7a5kbJmgC99oGufX4PFgT7TQAswMB1X1dgHZENCDLeB9Vo46ZkFXLgpFpC5vtxBX",
  "key13": "5vxZCDNuQAn4EJEd3CbxqUYFQnnQv5TevZeZLcUeKgNWLhnA37rJ4tFegv5T8v3B9Z9bhhPNk4GSfjfwS6VMbgK7",
  "key14": "2NrN78ibHSxfqsjK8HbEyRiBNy3qiMHZLdLGkWQBbB8oXs3GDbCaNGWJQw2XtkNrptWsnE46aiqfjx31Rf1Bg1VX",
  "key15": "S7sBQ6CnyAtnsKps985P5g4FqZDSP5yJpAVEHjwpY55QNKcwWmzCcioP8W9uj5FNp8AwmtFr5tD5yVmKCpeRfxY",
  "key16": "8SzH6AEDdCqDfgvXFCASeBgR549KXmneKML4PYP2NtCxqc8qf4tMF1D5gqzzQh6BhgUhBhY9yAokxDT8BUrJTNJ",
  "key17": "65NHSu1GzjUsdgPGDk9efa5cRKZseq5guNDCwshV7NE9kTzg76TGFytpEMQNo2w5Bsqf5mqVEj3TbKb5FxyhHREQ",
  "key18": "2DAKTV6BcvT2RKXSK9najNgbrgtRgwpoS2gHJUKqZUHPQRwGEGwdZGpb4g5DYqV6czYfhxVPzwKmNqdxufNsmrjm",
  "key19": "3DtPTTR7SR85jYuBWhsu6CpRbN9CyDdhiNLihNn6axvxY8wmSJuSY77bvdyaMpsgxoXm7o8baBxPvGXx6o8cRYFf",
  "key20": "4x22Lu2ENgWBj3UA5C6etGYbQZCLmJQ48MqnbhNSUMmPUG1AEDo9Mx9NKb5L8ApEyCenwCKHu1PfzNRRhhkepWnC",
  "key21": "64aLwkjyyiTFidyC384wTFuVyae1EfEcop14gErNB1Za5vXTDNE9tND7GAKaYQf8PvZodjNuzYyv34bm9a7WfVcB",
  "key22": "2BuuKLijTMMJmZqMrNUUBHj8XqCtBJecn9wbQC1pkx78et6q6AYvBGg5DghKvsmK9e8DMaW8S8EqfVdJvTTYpxQ",
  "key23": "4n2L1WHFaQJ2G3b6npPQeyV9DwGWJKK4vQnwzkM2ZNC4Zs91gSsziENv6YvcyS9o1nPdk5qG1wcGFtLVBrd5oF7Y",
  "key24": "y4nMxR1xfya45Zc6Y5PVrCdze6Sj5BgjoVE3vwwtoFuxyRSjEuEU6u6BbZFUu91S3EQnuvGCqhcdQA5J25pqGep",
  "key25": "4sRX4rVhfrRh5T7o8Csuon1c3D1MuRVPZX9WXo5Pc46SrWJ3Pv8v7oSdawUtoJvoVTdhsFYiXJmkFjShWhpz85r",
  "key26": "4hGkTzZiFUHtFsiV3k8ZmodBvBdnW2vV5UdaoqNS8yMTZ5h1xeNak3KLYxrkyyyNTRpbqNEMLPtG1BmwXE4G3MLn",
  "key27": "Pzjt3HTCR5v7qSGRQ3K6KoBSaXmoYrc7GJdbDEx1fqgfAKvhoSwryLLpoomKvQg57tZK1eyxnd7hxrzLF1fEwov",
  "key28": "5RNZXfBLchUao5y44ve3iHoS8nre8bXj5kzx9ULf45NpXAmuFFg2FqU5GHiox1TxfTug4ZFKEUKuVFuY46qtLenr",
  "key29": "sNiET8H6AmCVecQHQ9mQTkAb7sQzSdMnyboxK4iXmew5osxdgReYNPdBzbRwJYNF2xLjxgd7n4mibWVYCdAWs6h",
  "key30": "63knGv7nDQgThbVc8iyF3GKDWgNMNQ1JuvAGGKko8cobNUB68F4zdfLCi8XxjzKSWdh4jUnbHD4GpfhdCVEFT6iq",
  "key31": "5nSLsWY6APewPhAwSESJZnYGG1msXVi9dQBps7EiwEF9H3AGuVhuh7Hq6D6p3859hgaZ5QHBM1VUypGyXD2jTRgk",
  "key32": "23Q14t4iWaMNgs4Shn7XiKNrQu2HECUqBK9uLozLE7U3mYGAvxRoGK15YpwxijCVKzeho6X6uQKTjUEVFp5zhHJa",
  "key33": "3F7V7tefPDmRYXTcoFiqQkb84B8YHZDpNRKh2J5gcxnzaYftpsYY5aTWc8H3orFMMCp9DW91DEtHoC9WdJssfJiE",
  "key34": "518THHbHEt28vFwxgeaJMeU5jhQW2FmGjB9kj21iQv8ZpmfXwva1KHvfLFjbEpeYEv7Kk5iiD8nPNnDoDFRTFSht"
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
