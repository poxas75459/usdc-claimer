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
    "3hG4GCNJrnRVWMx45vErXgfTLcbjSkdqhxmh2WRZQbuio1pvf9NRaMcAhtH3eQjByujVFMkDDfbYyEsRZPL2gRaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4twMWQX64eEnQwQTF9msBF1MonU4mGrnESG4yna33gNrAPv8L77XGLj73VYHFdm9MJ17t3X7552WY1zCFcYE3tSc",
  "key1": "5imKT7E1r49yzcB1PXBpAniSZddxbTxcqzuRvVfpe9yLtejq15MZbRoqvjQhkLAkcSuNZbRr9FkbadyPb8vRLeCe",
  "key2": "5RwckUDLDURKr8wjQKBgfoP6yvH4xohTcm3JncV2wsLDeu41rY6ckJTBJrZ4fCThxAdis6B1GH4mGCg1DHgjUhyW",
  "key3": "67qTn1QRnndpjUGRXTgU5n7tqbMXaoamyKsMKCGFAyq2Egk566auuFd4HQD4JcMwoz6LqzeRGjjdPwLSBHSBhpU5",
  "key4": "5xnxpY2zpMmb6KJGTcXJnEwWDFXtXogGfkbgLRWrZWbBirmicFfaPEN3avu9X4Xmcs4uN3zVqkagGvQM4pWYviYX",
  "key5": "4pUDcczRaChvy2H4BPZLuKXQXLDprbVh7ypTNNCpszkWKtbUXDYs6cT97hn8PabjDPUFqBBqnSuKmtuje8Rawr4V",
  "key6": "2a2Ye1cpJ6wf54aGTceypr6ZuYgUZJPCQTnX9oytqLK1cbAuwjv295Cj4DTKsxycFqRLCo7NtGtsvZopo8WRPwdm",
  "key7": "2RyZPpA4UQpdWeuV4DgxCkSRijMwVMzMZmXt8m9HWGzyYDyN3hHK3TF1rfscV7UHs17T5qbTXegGYbdpgPRApr6x",
  "key8": "37NAoAx6PpjiK46tGUi22XecYuhfVjTcbPEJjkQowQwcn59j4CAhzk7wEmfFWCmzmRAnwkgD14Y4LD6VPGNfjcac",
  "key9": "4VfycCxetRNqLXppK8jT2FFqgrWwcrcH6PgDKjmovd2zEVqLVgFeXCmuin5yZ9f4EaSR4r21itePU9AABXfwkvF4",
  "key10": "5R7M1pP8YMP2XyDeWDgR7WhQGvN8qMsEhqwHMBwHSQ2ELcEuQhdTeCruPq9XcmqymMGdq7vkypRp7h7jhHopJ8zf",
  "key11": "6ue4xJv2YTwMtw3LMXkTvTvH8CksaVaBAq1TPjvFvwb8zaDvuBM1jcj4RC68krDyhiw7RKYDWwELuX4QNwyAdLc",
  "key12": "5owU8yDRCarTWiNHZeDso9C5QqugVFAMGHQZQEEBgqdRTSfBJAufj1v3pq7fCxjjkfzwY6qUcxZDFEu7GLFMPNri",
  "key13": "4fj5THnEbKpKZ5HqJ7wnrwnxtLXHxVcXHUWkhyj1TUXkD2pvzWYBTsmJbTVcZFvvTZ59p787AGkDVbDmFDqoUorh",
  "key14": "zbXj1vf8jmJWVc7vbVkAUsVyc4uFtpGXayvpALYu2rAMoRgbNpSfZbPGr1D24fjpPEKAsYSfVrrBtAjDpKoWa2n",
  "key15": "53wu8v6n97U13gZSHDfEYpWzqMEwQV5FDXce879fMP9rB9zwAmpwxbhGsP51xUMorR7DE18N8VStwZ1JrRyHfCMo",
  "key16": "YYDaaT6dz1vg4XB42RzaNxKAczJkktNQxkesdSczsLx9tBHYrz7H6R8sBJWKW65Qu4edeQ1QCZC9Uc2nFpcVsB7",
  "key17": "4xGJrmX9hNHnJLA4446eDJuJYRp1B8kPUnMVMW1JF74q5vDHK4fGgJT4vySj1Zm4agKkzqHhs8TnGE6Y5phDimSg",
  "key18": "3JXhUMifmjUBSRWRCqaWUztNCk75f1tv6FTZfTP5tafmq66KbZWQ3WGzxhYYYRyyxuFLUEZrbECnmdL41R11dRHD",
  "key19": "3ixYmQ2Dps7b62TaZP32Md4aeefodLxt4ipTYBT3WD81cLiQpKkRgCuV6ZB3ctN9tHRXpB1oS42kCp9erMvWbDvU",
  "key20": "3t53L2dthtSFbcp1cQw6c6JvrohaaDrmFCzNNtLnn7drbdNzYUvq6RNLMKx8ffLUy4rf3NKtSXyeWg5t7qns2kd7",
  "key21": "2Uead2nuXect6WnfKs3qwARcjQZS1fx972LVthhadDeHzJEadQ7ycgm78hSqeuhrPtpeBTPMuxRV3qcKXZfZ42Bv",
  "key22": "5zxvCUAxcWvPJtnNojsdhuAUttHcjuya4UXFiaVEUxEXExUKfDydq1oQttGhZA7aLeUo6PzSkuAP6t2JyaayVZ6F",
  "key23": "4okaw3pX4cx3NKeJfiPZM7e2oeTXa5whjwYR2nZj9vzudkp7ZCc3s1ETmAzRC1qUYT1GJADYdfGQDvpCmRfy4B2k",
  "key24": "2GfDAsezhNexRBKJ6cmAnkDchkjFmHtSMSxnDL3jmmGJPbTZnKmgMoPpzdpEUens9TJFoEMyHUJTikWJFgqatA4w",
  "key25": "anJmJ5AfsNCisMVYU8mirgeb8s9dDmV3eqNKwThZ3edT4dijtB99FQwqZUMcLChfmBF3iockz292TmamxdMBpHr",
  "key26": "2QgtwrXuHgvEfS5ZQNWdGx4Hoq9sRvu7bzwJdCMuNDtqiqP5PvKBYtufkSe6okz4qFaEcHa4z6m8PEhEBZXdniDT",
  "key27": "64BZ5L7AAJ4DDeRxtFQJBk9PzmF6MyTda7d5Mt1mSvAYVuvExh9yEzvhwA4FxxuEmcaumSNEwWwciGpf1cteGK8B",
  "key28": "4UReroAn2RuQoUBsjDNjPoPLq6kfyZffawVWBAuPaDbGZXfQgLzDmystgTUaHHQNR1aKdjssstxzmB2SCHcgNZcB",
  "key29": "3BHg1Cei3EnMyc2qPgy8xygwF9VyKa9EcUimP2pjkms4Qdyu9p1MSpSdMYkZSqTcLGeC8Vn4fhAdH4bP4Zp3KL2z",
  "key30": "4WXtriVqrX2JqGyMuXxtEySYQaLtHK8cb87Mu4Rm3CfPQkNebPwCcBPKuB6ouarUyCSdX4uJrUJs43sVR72jj86T",
  "key31": "tqH6qtxRwu3rjdtyA2JsxUWzan8bctBUfBCkd6orZhF17xAqccEDUz7LiPth51ke6GPtGfEtJuaQx54F9mqew2K",
  "key32": "4EVPKhiydFRmxZbYcyU4oc7QYbpofsrTgQLHHXNTAwa9QVwjMZNpHAsX91oAZpk6cFLNqA3cVN7ARiUqVcvtunBa",
  "key33": "2a4hMPMmFJ2g1pt3CtPrUyEeuFtioWBqK4Uif433ztGKajwug72XZzcHumXTDd2HFhq1PPCBVcxNvoyEhMTPG8PB",
  "key34": "61V1yCWNYAq3z7rGdpQUVJkrSnw6mjiACTJ7qcQEyNuYvd96qMHzNRYeLte3xE6UfJc9ri7awbMukqWXP6vpq4Wc",
  "key35": "37ezJcVAY78Pu4YpQNqwaYwrbG7GhSExoRSCjLT8xFQeXwo3pUb44sryCiLXXXFpqnDyqNTaUWJQHHPcqu8pYn3N",
  "key36": "4iQLYLPQ7qJLa7TouKtDGryRKP7C1Y2Ljq1RL8KUiwUEBYEaJa5SJF62a4GCYuDrajVSrjvQPMLcVRrEdpaCgJHs",
  "key37": "5EJR1mBKpqVQVj43TgtLXW8V8eG3EDXcptAqmEfYSWJEx4UPtYCTjRGBoHJiFCtkTvJyj5VUqjNh9rp2eRpNiPfo",
  "key38": "5YnMoPKFynAaQFjhFAbjDhf7oPGYvuY1Y4hXhQZJsmjvBAVa85jQL7Wyhfrn8W85BPoifGFvuKK3MUbEaB4PHWYE",
  "key39": "3i3Tjj1cDgXB7xM9MWp3Ztkccd93vCtWKc3CAaBdXSE4dt9KMcVCd9Cn8unuZhG1ZFwbmnKVjBZn6Cbq6mAnM2Dk",
  "key40": "51m8CBdJGu6CHMYwZkP8BrRLN9dWF5Ps9xr1Ue5MGt5B5uXasNJsuXdGCfXMM3dKTBKwXmszm8QxXy6wVzeSEnK"
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
