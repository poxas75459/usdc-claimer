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
    "5ZJhioDJKuHwsHSmzncUnrGnbe4ruh8tTfAnFV5fVatt267wKJoJiFvoV6MceAZps1jW8M12HBCbpKe12RsfhEuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmmNj9VykHbLx2jRH6SWz4P7pgWUPVBtFhGHi5zJZhCpfQMUVoYWwx6mBWVQeMsCfPBiXzsQTzN5jjGqBpSjTeW",
  "key1": "2Wkmo2qDW3MwDaV97FyKL2A59fzJRgN8XwscPJZcP1ettbSCac3EX4jFahwkqhmycjLanJEvnDL3c8bnfdPRHuD2",
  "key2": "5EyZvEHkBVyEhEwiiMdB3D2JcATW977WfcUq2y1TBPhQNDmDUcVpjiHuC3i3UYQFGnLmeMXQF7pzcwY4senMLRJZ",
  "key3": "4s5NDavfJ4dsihBT1FvyaXiFs4SzXKjrvdi3LKpYtyR9CgwDbnaT8mkh5HcuBCJRsSC5E6SgMeU3ag4D57Kd3ymi",
  "key4": "5hC6Kk2hXuBP2h39HbLh4FNcvj2FRfAqombAcS25vF4mcSU4U9kpF6rvdfUdQ7ChNTVJTJbCThkVyNCCFmcKL6vx",
  "key5": "2Jce3tbQ4Jcg8gfWcnoSL4FLqbVEYSBTtV9B54K19mVBXVAVHgWXGJw1UCUciiFgATUwrZAWoYRZbixWo1qHJ5U6",
  "key6": "4bH3yw7M2y3w8xaky9yWzHuWGVkqVqVpKJJ8HzqZPxkXQKF1qja46wMZsDE5t7qgW7SuUDQY6iwiXgEaffKJGA8d",
  "key7": "2Aj4M6D9sXwzjUgsCyru6S2nhfnRvemvuoyhzTVytobguPdk6HAS5hZWWfwy8jMF8z2TuF6j18MMLzLLVUSmFUKy",
  "key8": "4MDoGfMVSocJ36vdyV4yoB7GuofomzRMCHYXMurpsjDGraccyJyYRBPuv7JprsghW5CeX3Gy3nZDYPHi9bH1mcjX",
  "key9": "j3HPfk6NUkBRk8So2a79jofjWgGdufNLgiKMLvJuGdkfbLWBtBkhf98VsT7ZahcGnda9uiWsMTADM99UzTAg8LQ",
  "key10": "5NcotzyDHGPVPUpiQHFfjen1JqPaKNVCPhiNQBhbGZT27FGRPpKFdWr4PoPBYCJyuTy61gGFyxzKUreyj6Rnbet4",
  "key11": "66ctvVBz5igLUSvdZmjfyBVK8uGumpmF1JH1A2aMNAckpiHPb27YmyJtmU1jRGVaW1sfDerpvziBr1bN7kvM69VV",
  "key12": "3aqS5vB5sByr2nJyykuy5YRGKcBfiJsqaGTnAtbbPAV7qWsrMd7Ur9evvEt3vj84fSNarnxngcGEDdkzTbuVeHep",
  "key13": "4H26prTL6R1e2rDdmwXLAnah1rmHpHE47xRxJkecUJh7tpvvQm7558qBJMtz5ktTw5S71Evk9YmSVY3txvvmx1yS",
  "key14": "sptc7TGEAo8ixCX2tA6fm7xfLax2YkvMTRWknzfknfDVGnazduBpP6gDZhgz33eD4HV9Z4rLgdKrNqy91qXWwwH",
  "key15": "zT2ALWXLeMu7yyzAyZ5gpSnwqS3K7HfL8Ry7AdXUkTboWkmDVt3fLRC3Vu3qpKpEHeM76ka2DFXzLMvzeYnQdN9",
  "key16": "4Z5wTBTGq3qyYCbE1AMBUwWoitJvaLGcor9d58B4dRzoZSrRXEDHZ9Bkv5hRRi8FbAUGy2Wf3VquiQD8zHpcUFQd",
  "key17": "ECUTitXH9tMFoTCnLfKpeZWMe6ErwDZ7ALUmkog3u5JNfw4t751n3XDXTqPqPoHooErgAh3TpKnupWQLCtmo4o3",
  "key18": "5PrsEi97ukZMkKovx8uNngc6Kp5S3AytqddNZd5hHiWybN2p2D3kFH3Ni7VXAPk85TDFATALohX28b8yYxXoP5Se",
  "key19": "4jLgLRNVLwkoQi9odR4Dgebsx2PbiBVEDqkcszdxXPbXZJUGzP1MFGVzge7tDDTu7xwDpixqSrgRjW7rd8weGaKG",
  "key20": "Mdtijhys2zdgvFqYEdBp4YLnhZAyHjPMbAi9Bfy4Xn5oph4eNwuas7sLQek31SL9mdUQ1CZ3xRbXSAj2z5BTYGo",
  "key21": "fU93z2gucpoBnGBXxQZEiPg2gMiC1mqpUj7puMVRPvz7Qd5crTsrpWr7iYCFYAKBaitQZMR66BEPvtyJh2s2yoA",
  "key22": "JcKKGtMA44W3kL7UoDaX2h1aE5Q6eNMUKDyWkeLBYeTUapRN2vpr18v3mih9mCKBYRPRALvBkTYZWySmamQeUBX",
  "key23": "4NBTNtAsVokaDGV4MLxCt2itsSn4mLQpoupjcA8kGd7TGfWDaNvxLyEo2n1te1CZiJTsBKeweUn3Kqx4bm7w5V7w",
  "key24": "3E8jQ8ggYdDjP7DMFSuLe9gX6tFZZkShStMDuWoxCc2ouzs85ozD5zi5qK9yfH11FDdEnYAWvjEyLM3Y3UTJcfQj",
  "key25": "ip9eZwGwaWtzJJfsXRKREF4JFBSzKBWmGJLf1Qpwn8tGWtkXWKQt9rcHEmvTuGddy8HtpgMDPSPHfLAdJMFFMqe",
  "key26": "2aEuqmR1sW4C5DEBvgHSRP8nu827uhKJN736oeVnqZV4g2eR9aTYfGqUZmmNU8xw2EHgkZyM9N7PWw8gsEUMy5ki",
  "key27": "2vQp1EfCBqx5a3wm7hq2CLmDK58Qaigo2FoAtETDhhtCJS4VRYYPRoeKkV7x4Fz6tFkxrHqpS1hHexAxGNrFD6Dn",
  "key28": "51wP6d6f2PpnGvTT4fvs9fZgFCAe1wCWJLdFiyYbPnUsNCGjcvPg1gWxdT8fobA4LR4PLVcSjNEvu4xMkw552J34",
  "key29": "2FQ5E8eBFruR58DctQ6keKzVM2mQPt8Xe9tAXVVpscyoKYBZ7USQWBhepL7cTjAmKj8zR2tnUPaEPy2hs7CWPE2U",
  "key30": "9AUNNFkVK1rMJwt1dwps1vWyLyX16E8dM71b7RZtXh5X5tKDRbntHoPtVS5kPaD5nzJoyHhdEk7o5Cym2MNw6Xy",
  "key31": "3RHhB6c9rnRDnXTa558PULqCVHWR1HGdT9GCZzunMqqjzmQ1CSrEVQzrUy61WxbrGd4SaqSTJ1FeCBUVjU8RtUqW",
  "key32": "5HNjV5tRBWMb88MGLN65SHkLApo1Ha79WyYrfXqScJFE77zXHDN5uda6VG5ytgvEAtrsniFmKvPN6UFzAw7fJiNM"
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
