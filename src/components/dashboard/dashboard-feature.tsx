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
    "6XhXM3pjt4NGUby8hCbiXWroX29cCb5ZG4b3d2gEr1Kjjk9nmLaU7fsuPfjvRsGD8G8GicpsKfUZQh5T92FPo5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3qrNvRKdm7Prj64oaYZ9E9oUcGtTnuHgcsyJGRgWFESLb9rAkK1EcPrzCmw6WTUki2aD4GAZJCikfGttqNm4d9",
  "key1": "kfcyKjzV3GioxqdEK3Vz6k1wLu7LPLFdoojP2tKUwYHrPEPdEvdDsytNthDtt2x716SLKPnGHC8iNthQQsXffkS",
  "key2": "5ExZaStnEaih6UFUnYwbUqPh3DDpTggkYMk5z6CjwQ8UvFgdTyg78ZCnnPkAiRC4RHahKQYwrJTGEDmqpD8oekL6",
  "key3": "3oCRk9kzNT1cpFhV4pUaztgF5JuPFWZGmZw1eTaMdELPAxgs4ftxfwF3uPv2rsnwusfUG25sSwW8zqrYLi6ou3ip",
  "key4": "3q4FoQwFJwsYZsZb1vYieXS121yqwvtY93KZiaCwNKuhM4BaPA8n8pwBuCMQ4vRZDrmoTVvpjs48H1xPbxahRkKF",
  "key5": "3x9w1kLNqpJyJqfPU2qJrT2xVyqLZ4VmymLvm8qPFJuqbzGPgd3x1ZeGDjyBRdhyf9q5pnAmeHpDMXzf4NYL2reA",
  "key6": "5xLTfSjhRKjHf23cCqUDVRk7SX8gbNCSzjot2SxsxLDSbJnk7UQNnHJErKeftCv9oyW6vtoXPu5Aaa1EyxZLx7TN",
  "key7": "5TLwouAyjz67U4RoFUy2fSSgW4Twb2ULvfjzdA6dpAzA1883o14biaeg1FGz6DY562jmLKWeX2YQQhDtmZENjuyc",
  "key8": "5qiNPhxaP4TFDSFhgifvobGVqwRCdgVWqpqi8mhZhf4fyoYUM7ikaQrSP3eZTcCoyHUZ9C84jmopDEd4R6jxB53U",
  "key9": "EDqEsMm77PTeasK5r8RPu3TDUmuTCgVha7ehTWE26LL72YiXUQg9EpZmukiSfuQJoFaj4porUKJ1UzqyLmdkVCr",
  "key10": "3ukEV4zAiV54boq9E6qLrnHbTgPnaEaWXAvfbLKtzMvFoKgaCd4n9CEbtTgswEYgzYRbzmginrT3C6ZSxACGm1fE",
  "key11": "49euJAcYDrN3SHTaxf7BM1QSikQEVrHhJwvMUAqasQimoLCfVY1m3kXUJETuTCv5QBvdMvhzcrosTHXsjuDKzBq1",
  "key12": "42ktDK1nozGrcVZmeJAkzsWEJ7xoDUvqDicdSYtrzxWXf5sgBH1nBYbVcJWMkuohRJiceVL5B45Na52m7be6hP7D",
  "key13": "679N5vn83MvraxmJrnLTybMNRaHTaMgiouHzeHxjmBNyAFwzjRjMK2dRcUMqpNzaiBiBM4ejA2QvUG7xjKCzbm9L",
  "key14": "Lin9RAaq2Jq6mEFLw24B9fn4qpbDVGSYVLHxCqLhB1TWPs1SvgW74CbuPN9Zy8tjaxYLnEqmJYyxpV26zRdFH9h",
  "key15": "2bHLjZkjP2d3F81dTXb8PPJU48m67KodzrMN7Rx3jbCBJLS9d8LebbLS49XiBN1FDJDJoX4FweQnLQDMjFF6GsFy",
  "key16": "4p1Kdmmb9RVx2EK6yU2MQZqyaGnugQrbR5qE43gD4eNckEjs3to4Yrr6qag19PG7KbXvQJ4aoyMCZKUU4DzdJABV",
  "key17": "2NzJuSY5EHqP16FsQAAp6cGGDWZ2AvbdQv1fQ9g4UbZdtMZX3s3BvKLonU9NFeyDSGY5ioBADQnUXdPRonecuK1Z",
  "key18": "n7CEiveCX2gG4wv3grGEgZE7zXcqbGag45izbHb9E5PWXxYp5a36513ZaZLz42Nzy3kdZT7mGjZJtDB5ec4GLW4",
  "key19": "3k1fz3ys1FmgEQHBw38ZbJCFVUREJru7XnDVk3Gbkqz8ko9bWZAp1fMnZdZkNE5SGWn1C3Q9RcAzczjPJsjLhqLc",
  "key20": "4SwcHbJeyxfpt8ysmC3BahBR6tPFeVYDvx1CjGoH6GBFRgvKgkopsNTmYoC8Fd5DLf2RaHpZEjm3EsR1rosdiDQP",
  "key21": "2MuYs4whJ8Lz7wz1j8Q9XZtrkHyZHWxHe81QeGRr6vdnYgxis6kfKGGt6NAy2on4aDAEhzwRb73TUjqbWUWBeyg9",
  "key22": "mqiiR7WP4jmZscZouCKcuSCoAHQztLt2nJM9pn6pSWLs1CV2MW2ZZB8NrKecNq6qfA51CzzsujKydCJ23VgxnMZ",
  "key23": "59H26eVFX1bwmqhZ6L9yteftYWWC8z9MtK3C3CcFWN7UC4Yw81hyz47vdsQmFDPSJ4oau4xGr5JExVxF1tRaAv6g",
  "key24": "4q6VHHpczJEJREnXV8YC4bDxFQeq4rSxzrzVbWvFbwkJvSBNi4umXHpBT96Q8ivDEf85SADxDy9vS5Rnr6Etv4uo",
  "key25": "4F6zmKaYsYF99KVX19idSTWx3jfD6TdWVnf2nmHRWtq5vGD3uBfBPv22xVNG92QmxS6Bnpz7n37dTW4NQmz8xu36",
  "key26": "2fkX8Vk1YY2AgWrvhdaevYoEkdLNUK8PgiHnjYGqun7hKLSVLA7AUZ3PWMrCZN7Yj5cfBLHx9tNRYCHz1gWshKSW",
  "key27": "2qd1c7CWXTqghAM9x4vytsC9wvh13aqAFjd6GsrVYiEgPg7Sdp69AqxR3bYYFmWoSZ4DzKZctKEPqMKVNnVyAGuU",
  "key28": "2fgUpdQMFxNzVKzJwxX7ah64GhZFgh1X5Qss9Ldb7APSacsdkyx5GkwLEgqcjGx3gzrspPKRu49av7zqJ5aAWAY4",
  "key29": "55Bw5LFqKcF43Abnj6L6ZVq5WBFpJdVvq7BZNFeBTeCQuUxeMGHm5tqGpvy7MpNgCj99qPpaYVBA38tNwTVKKtzx",
  "key30": "obNeAhTUbo98rzTYw4Aq9cUqmoFXExnkKqdJhjMeuke292uaTrRRRFhYXjp8guwwPTTXWTaTwvMqPrF2oEsmpGz",
  "key31": "4cXVPXuiwAkbckL6Rarov3hB8uLCmhsKN6wrX8jtax6CsuCkDBRcwbSB5DAdh8uc2oeZj5fc2AAhmZrcg1H5sP7k",
  "key32": "2S7ruaK6tfHC9en4ggzdJqPt92h75TaMwu4QRcU5i4iUhGKppEjNV8sN3FZKcqZJBXofPXPvWnW5TFefE1g8VWYT",
  "key33": "3bycs2DTrFTRbYp937oZ9Yu4FYk78AmJ6a1jAd5bzo65rwC6CwjnYXLfSTZLgj91JStiFFUbrDdBaPrRTymw6f3P",
  "key34": "i6tVxbocSJtVRvXkg6RdB4tSNuEEWcJ7YhYScgaPP2MP8L8UTc6sDHGAiRBHxPt761tvnzvDQjqwwzEtVyWSkSX",
  "key35": "3NejuvYTf9tWDrN4cbd5hetMjyts54WHgbPWL1jhXXfhibTPmCbNyWff9ZAxLBrBteyXVc2nA5gC22tmti189F4F",
  "key36": "4sXytSmYMX9cR9oyJ3npsQ7fWV2kGK6umptGscnD5sdtJDcrVWzgjhL8rkYn2oA4KpBQiUwVcVrbiYkhdTqcmvZb",
  "key37": "4JVifsCgMSFb4ryRQACQxhtyrGyLxfANv59orkUDw71DBU1hU5eshna6UcqmEfsdzUphGjgj43JbmSbrAds9gAD",
  "key38": "3kABLFvgvUD1bNAU2guGS75Hbo4oEqt7KDnKoZpTMbp8ZzmidAgC4qkVsVHvAxT3ALAyYdUgEgVsPFCV1ATGaKTn",
  "key39": "2xTBy6aBd4utw9E3TxNpUMqdMT2ebpfboDabcYobvkRvob5y9TgYi4Ay7aWmV6CHUMAHRXwDCnxoP24cLgAo8KT8"
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
