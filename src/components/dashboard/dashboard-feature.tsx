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
    "5gaM5xsfnuS6o4NJe6fRXH26PwvPXEZWq4xnR51zXRcQBZiYB6Lf86TZCQjgZRMjHCxTLCgoZnFKmQdgjpK25JoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpvPqkFn9PNHgozkrumtJqnwFDv9ZGm6VLH2XH4WqW12BFRshUJPJBknrMDCA5k7mAPkugK9s93eN2HXPx7BUaa",
  "key1": "47JsGqFhNyPFjht174MWQ8JJLwFCw2RGj7SeKSqxD1CdXrkJ1GScdoPd4E5mswYVVxGpomKmd6Kfia1GeRx1Bngg",
  "key2": "YLeWBbMcbYbQzKNn1g81fCKhy1dMUFLDdGRaaUoPciqCn41n5Pu1hSgBrYm47vgx8SJKKa9gVndjcEN7RCfQYAp",
  "key3": "sWwAuB7VW267vq3HAC4YAKn7ekxr4Jr7KpNhrVALmbJEUKgDWT4KSsLiRaNNBgSmqSXAq5mNGMGNfZdvb826Nkm",
  "key4": "5fSPEtBp7ExvWz3oKJKQA1TcJb61ncW4RX1nTKm41PArZhqCJPHNS6idRmvXEB2m6DTUUsKWEe68db3oiCNtap16",
  "key5": "21RYLe58MA76UxwpqvbAHnogX54G9VUggGbA3o3RaGTM7YRPW2j5oi2NmybQprWWdi3fznAnUch4TyHLb1C7GYxQ",
  "key6": "3mY9SGC1ePbZJDHiiSR3tBj9ZwwfvmsLPGd9GePo534egK4E85B6occpnuZFmeTMNWws3U124knHbr24qAvVK33L",
  "key7": "2y3y6fQ58u47WhvKh6bzNVdT7Q1zauGZ9LEtSwkiz1C4QWuLwsqJvLHZveQ2P7jvY4XyHmQ7xZ2GSPuryrsRbhRu",
  "key8": "4v8nfdwCpWhiuZ2Em9MA8xL9nEAzUTGaEq3Rx9k3wKpq4wQBbAUmFakiZsQ81wiokyuc2gS9sQ1tQf5mX8JhwbVY",
  "key9": "2puMmJNKuDpYxA5ynpgMuRHHYuPqq3KrU8wbDeLsYLqawVjzn1KBjT3qow4DdEdFAgh2EtXHttdUQx8ZucP8dP8G",
  "key10": "U1GFjqt9G9KvEWLewgKzbGQkiF62juWEzugHL7rH5knpC32rB5xyAEWx1bs6ZyigCjm7ma5xmpZWFS8HCxqdV4P",
  "key11": "2iPn1xPb3J1afPPVgjYKYFXuPqvqPR1NC2FmJdp6cDh1djbrWqGc5bPs2EhX7SJ3wNJmG39XzcUR5Lc8iLkZns83",
  "key12": "HvC71c6RYyLFviEP3FkJZKyxo2v9NzYQ4a89sxXQEBkprisscBhFy3xKXp1rvaKhmnwo5pgRTRfLpAsAQkBFNJG",
  "key13": "5Heuy4KotH5UktFBQZFTyoRLxmgarTRk9VNQPBeVxtZNLmb34dmd8UD3Bg6g32qDmGtGtJLNLJk4vyHuqxJXfvZo",
  "key14": "6fF8qusScTgMyeGe7JqmJGF5p3hi7oZpbBs8BnvqYnL68nCHPB9PbymNCbgpbTAPZpkLicmWZcMcKfbkosswGwX",
  "key15": "2Bi78T4SGjSjRtpMrhHNaQZ4BEkaEXygGc49cFx28vJhm7WGKhEj6TxUUzuRTKBo5NR39a74zu1LtWWzoUHVys8u",
  "key16": "5WFhRejsT9339YD6YNC1UWt6YE8nR8tEakaT6c3xBy8npt9UfGxwkUGChNPtvz7AdgcPeQZGWjVf5B7Y3gwmoq9L",
  "key17": "5hYudtVxn4JffHYNv1L8shGkax1YvKoHqYbcGaV4FJ9WMs5zXf7gcSH3WmnjZWTH6j1aQhCLz6DcgMZ9Lr8HikH3",
  "key18": "5wRDGYTCbCRavR6EcBCXEaMgBDotRMMGm4ZRCkYmpq8QAySnsnzn5VgaxkN91XjTPL2GN9PvHpXJveuMG2RXee1S",
  "key19": "3YZ1pH4PD7nVrzsoipUR4Jz2x3yyNZYfSxEAUvoDcbnsmmqP3zopj7gXNxHFyfUftxNsEq5nvrBw5VXxy9fooChm",
  "key20": "2mCEMEZamEAHxGwB8BdbSFe2s8DcoYiUJEHMFGqswQb5EHjX2p543ktRuZRPcf3N2DTg5RbJ3PaspcXZBM6qAvAv",
  "key21": "Pr6eJoboQcdcu2gKDRjt6B5wHuLReCD8mtxskgpQvRugB8J4qSj2VU1PMWn7hqixXMGMqM1t6KeYRHF3ciaPExe",
  "key22": "4Xi4D6huZrqmvMwdisXH29A3AQWVUqiJFVbm5krt5URiLdSNcVSiW8DMRZtp6vWtB4P1vB9mX8zTgCCqeP4SvdWj",
  "key23": "4sAhT5GBYAtiFp5UsvhCrMaKfL6x4FGbQhcc3ex8MS9xYq4WSmEw4jMxrFpvmad9pzmMZmQmVhdgSojXU1zimam4",
  "key24": "CJBh32aCMsi3ftchvAtmJHC2jqYdbi92BMz9veA6UjEofyv7V1eKMpn5grfBCXy4dbfgvA86DPr8ez1BrkhdCn3",
  "key25": "4m7v5CTx3XiSJaUykAey8bH2fsFp3oZDji3SBrXgadhHhd97kTyDwc9Ci4ADQazpCTd1JWLaWK4MHXrMYV49YLx4",
  "key26": "3G7rVyFib9sR5svsnf2LDjTjNFdCDPNDsLXkZfsVqHA9dBhjne61FLmkTRTJYVU2dWvyRsAqZoc1gnKcxbaBYDMJ",
  "key27": "gmrrRVykH8fJFpByNPnStwDQXd6or7XhS7aBgv5tJLhsBybyH7QbTv9oor2rDo2YMD51vTmGfyMxCTXx5eWXe64",
  "key28": "KkmSZudZeFLq2cmbpkpvQegcEqJF1RC4yCV1DND55Uj2RDyFUwgh5nDEErEnkGWxHCWCdzVRySsS7qsZcKU2gst",
  "key29": "23UfTqoxZ6XnS2ngYr6b7aw5iUYfasjA6EpePkxRvbKoPX2pdyjCprErzG7Ar9KCRFRYgEqxcfFHzyRbjQEudH1e",
  "key30": "2ScfU5MGK111SWvbyaTDZiay55xtMNMAJCrFRrvddHDagKw1Ro5KQgV7whKSzoUAzQCLjnvsxP3MsMPJdK4xtKKZ",
  "key31": "4c8i9fBZz1BJduJS47epRvkuoSS3gNtmuSj7afTsnnP1P1Xb5rEwSz4gecyFcHVaUsXFiMDa69JP2R7wnj1NLx89",
  "key32": "5cmiqevQQXXRE8EmY8uPonxvxQnKX7XqvuzdMyTKgvhXQXYdUEioVzmzgFyrDDoTDu1KBEbxbThV4Mt9D9gi3Q1L",
  "key33": "3GYHkSPhaR9YsDkFuTgrGyGGn1WRHuHCgzezfXUAkia1haPfknP5Pucfsiqsny34xGfXgZNH8HRXd9Uki74o9Vn3",
  "key34": "5xqmCFTzX9ZmWQGVSTM7HQevWTtZBcnYaYZwu6dAG8X8oEZkbTQYgH4y6N47onn27Qah2ZeBCDBNemLehKB49a6F",
  "key35": "3KvPXnZtKEoYqDcgMHZV73P7ReK7RrwzV4zXgNo3Nx4CGRRxxXzVnqeTh2ab4GfSxD68wkRN89srQhXiw99gh8vc",
  "key36": "2S2KMpdyhnr5rxY3pX8G6fbKCpswqtJbzKMzFe8CUwJ7XTFPVDQgqqu4kCaDFmQw12TaeWCLae8RnASRkEz9nU9N",
  "key37": "3yJECpRWpz6kETcGgGkcdZhUXsj85wRQZWe5YeJARdZR6FUj6tkmWGghoG2HBBrtRXRj5WQx12WLiMomhhPPGdmA",
  "key38": "282JSXcGrUw7iye1oypVeifKuxLrhqxE3q6sRt8LxdA8XeexawDTFXSkVSD6744fP8ncA4eJwX7u2ZCiD6hcuhxt",
  "key39": "5qrewWqTM4ws9CxqaDrRznk6FXtC3s3o6U4S3NFtupVjgvVfhgkhdiXgrM3jZKKdbpk1wY89dnttPfzrRnCTAZnc",
  "key40": "5v5qjNUxjDoaMSz9MpzjkxUNjs9hi1kKGMunx7cSEteVuekx6cSTwQzGmK623LjGBcFKxkX6SeWbBj5c8Xvc1TBJ",
  "key41": "3LdYv24PXZBcyKhGpyKw1T3TiGsY9Jpu12HwzwY36a6C3aUVz7UpeecqGGTVFhYEZ1UGxv4YMtv3cKCHWfNtZM8"
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
