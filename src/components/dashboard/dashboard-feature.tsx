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
    "2iXiWHs6Xz76kzBkRX3G9jKtbMj2hjNur9FUJzPX3iBBTSxZS6oE71BQDPBBihkRqkjL1TMvxdrF62yQgyy16bJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onntbyALs9j1m4PESxJwLZU2g2cs6DVrRJmw73B5iXxXohDeuEUdzb3QkuR6x2Yj55qLkGpT2GZ9RyHJRjAPCgu",
  "key1": "4VJqag73GSwHvrkWYP8PW9SDU3dEwS7KmwetmVH1oLM1gQBN7a5j3j4Rxzy6YbAFeT1dpSyq7uHKh7Cho2Vy6oF7",
  "key2": "5bn5DDj4GKVhCtUPXAvDC1wkW1km8a76TY1ZLQmAEshqhE8PetnXNVAfTpEZbEzHYPngzHvPwdiWTzRwXtYezgv2",
  "key3": "5SSgzjh7AjCbMh7GjSvDDkEA7kbDpn3rsXZHTkqBFLs9vEVwqk2bfTtsk9iYGiQEZMpCfL5PS39bkvGVqSJtxkrv",
  "key4": "vN8YK1dne4ANPBJS89iZmQNZEcPDNJPDNichmDMVLtYCQtHPKU5DnRyaNYy5k3x9Av6Dtq6PBw271gWVpbYQ2jt",
  "key5": "4LGw4QUVkfPitr7smaqKXc1PrfLviWDgfduTq9QUoP5DvP2dS6rpobozTgGrbdPyw7X4GJoYnhcaWbtRodHUiej4",
  "key6": "5cRuFC996Bvyn3wRUg2uwQLorPFAXhADot8bhUQWf5nhaFbEJxmFwsapnu1ev8NTa8J1YYsNJh5KkQW9GXtsh91D",
  "key7": "4u6d7FLLjQUW3YDAVHkWsJJjFJ1LSG2d3P2EmzryNZ2wTmcivPNeRJm2bzex8i1hAkUYaxiNnb6bzGKvGpyUzbVo",
  "key8": "3E1jgVi17Zgh7LjdyWCoLYC63ZRWnuJ8CLaEngjk2wDQUXFFjtHbT6HQJ5Z33shNXzLNyWVqgQQJK6kD2TQPTk46",
  "key9": "CLojh8eTFnxDYF3RQWuLJQyGJ5UgQAC2DHiwgf9D1LiL4sVXPds2whBNfrnjn7o92jkrPhfgwPWy5RYjkojsW7u",
  "key10": "LBK4xiWkizPZL5CLMrV4rRtywCqeRTAShTJgPPpbQekQCwupNdyem8aFubpbkcA9uax36rZKGQR7xXa6bSDHmjX",
  "key11": "5njeXhCRouSvUCrEZ7DFmnFZ25KX1Xuxi9RkHwcxGroRrMJqjtWsfSovfpeoDdmQ3FgjUcZrZMW9qeYR67W8msvW",
  "key12": "4eZwgzkQ7kFrVM9QeN4nB3s74FG6iLwBWMiEFL8yYafmaMH3VwdhiDXUbn1gnTPig6GkTH3Jqvy9Lrf7AqoegwM6",
  "key13": "5Fdf5ZBkt3LmBHwvsrFcxYbU2pvq9xHjZ5BkVue8YMbgbxoD2m2DKymJc9wpMrqMx4TF66q4sKtWpRmvJ5SBxwg6",
  "key14": "hL6sqRNSUX327vBKVAW4h7vneUFvzQAR9uufQEeWe86ZRe8EaGibrrFWBHGkn3TVdvSFgvghVUoWkcdCZgLoYXD",
  "key15": "2oiVYcd1TMM53Nb7YsVXRM9sP1fhLrNHx58tGCLFPprXD1mjeY9pNTPiyRUzWjRtt5baAngBHkYkXRpb2zie77td",
  "key16": "tPiCMARwUvMB9URVKtF5aVQTUnYK4VCXTzQNHSRALQFGYArU4RFL7YkY1zPMkKLNwfNUMScxB8uS8sJV5zwmM3z",
  "key17": "CSKsW63NjF7Ay73zCumnQsPFRUbn2peGMA92941XSV8PGB8BXP6F5FqGhpiS4MqtpbZ6cEK9Po4ftC3hXuGtNVt",
  "key18": "5j9k2gb1HnkHqsVtuRuGC92vSsLKgoqWabHJSsugBhkCbRbVmaKo8cHk6QHjgANQ5VVmC3yZU4dXKhwJVptF84b6",
  "key19": "4Zo8FoSWkh4BJHqW1PngNVjtNdoAGUEa7LZ3JR6PePMZpt18QiS6476aXNmj71uucEoivY9kT5AXrPeWfmiDMKZ1",
  "key20": "yw4s7qw1rtPVDJkDRBqqP7VQeAkaecz3myzWzUkgZDxBmB76CQnpyiYzSGG77R9uPm7gKRA6idA22fX9GkFCuRc",
  "key21": "51Mrb734eKT5r55oB8ycsLY5K5x5r4fjXdHdLNM11J8cpPDCHNv3usLa5u3kzim6GPHArcRQou7JhmEaNBYBvDJs",
  "key22": "29gz5XVJDzXcpSsNUcYer6mUgvdsEwDRGcdG6MweLZ5xBSCtyvbkdspYukL2EN7Nv3Tz2dgxcqD1D9y155y7eiqo",
  "key23": "2NgmLckXnKcEyhLHf8qykRW9kaiG2TkWNbTKGSTh65z142dPfgsWCv48HugGvzzSRweViUmsMSvPM2y1dEFgsR4S",
  "key24": "YVUZPV6qtR3Cq95Zk7ZaiRtQyfpEHx8QtZua615f1kvtBRySHRTLNZENHCuEp1ccy4u9BkNQo1kJmD4MuTAuGVv",
  "key25": "5FBzq75dP7kXkig8nkTui5ggn6eBr6fCZhdDoXyQA4xJ5CeqapXWdU99eYNbTNUB98RV6mkn4zGz41WiyVQTBUyw",
  "key26": "5m6u36qUAVQZkV8iGLbeeGYPWQEXcsDL8HCqY5ZRLgGAyf9bczG2FYxhLHjEm5zA2L97FjmKFRoD1XAqdLQ96LxN",
  "key27": "HsZbiF2niRvL9igYDV87nRL7heZHyzmDSUcENNNhTbQt5nJpKYzEG3arkrBje8qH46h56DqLnc28JRZBpuYABg8",
  "key28": "31n4o67oaV68oBvb9wDhbXs3KT7x8C9HAJ38poFX2YjMLkdfgCgto5YS8Duf4m8XmoqF2mGm4CxfBKaZKQR2ETEp",
  "key29": "5gF9gMeqy8h5UpjUebhQoRD8dV5DamiGad1No8NCG7G1brqrJF5kM9ZkXnLiM3zPJmsCf61PCKxtgP2V8BTqVvp9",
  "key30": "5Qravdj6MSknRBTwoPNSBZSno1DMrDEYjKZrqW9HeSUuqfRsHJrFQzrizg8baFBp6Gp8L5KCmkAZq76z74yZMZdc"
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
