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
    "2Q97x3Rbr1tzxkQ1BaQaZVw4K9mGRPzvgM476Lrg65thPazKHMRVvEAGM9WqmMPN6A5wsWRqB9Vmf5hW1Jkr7ewJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtTZtmzgLDuHR5DuG1K2PzSCir95DpScYg6tc7TeSNmX8ATWiwqBgt8dix8qWTaBwwJ2zKyRyANTAMNVo1uMKJs",
  "key1": "4Scp1Zsp1j3RAvRgcog9D5Qx1s4FiGApaYk22itHzZfztK7RP3gyMw6XVPJvJPmP94PiUFwxaCYETwzpysvK9LwH",
  "key2": "5Znx3pYA5qr9fbv21x3XTvVvPMAn58Luxjb6AJVmxvKAFa8zWLCEdzEYystqzW2xJQTpyTf7EqkQsnKtPWSzSS7n",
  "key3": "3mBQv2zAxRdmDbXxhsRRhS31FTr2n6FypRdDWQ1AHhYKSnTE1bYCEqGvFc5bj57vU82uX4XswWhckgcabc7EBtM",
  "key4": "4hALTMFcxRBEXCd68Bs1rHhMPiBDV7FWpoMvG6qsyLCcfo63EsbnaKYGUxhyWgQpP1HEGwhKYcVNSq8vScRFjQW4",
  "key5": "64QyrZzuhhdrm3HqVLCjcZbsKeJJJwxKxQHP7qPfY1sTS6nAtEFJRcfQ1PneueANkSGqFmkkZbk11546U36sHBpX",
  "key6": "3o618QDz2Syft6Qrpzdt6AFBSWxd3MHwBYCZtTUrvLc9a4yvxECUJw5wnga1QtMps7f7f3FxrcX2D85QNFSGo2q1",
  "key7": "3ev9JbfzQfU1WLSxXvHYDPU9RMsX2aDubAh5BKnBBsuCa7qnkfbmnXsmtjhyp3s78hd5hmGMGJuaBgKGmbkWNrMD",
  "key8": "5qkApJwxaVz6Dq3YfhvFncbWs9rKKXM9oRFpNFXeYc9iuR7qesVCrQdvjeZiCYBpVZusYycQCZBMVB31nGZxMTKK",
  "key9": "3HPzfP9EBfN3k1QGNkBiqMneTBa6efS84SxLqT2jAPTesc2Dch2ReJi1p5hEM4rBrwsqv7WSLXT6d5SvnmZh78rv",
  "key10": "znnpGcmjqLjxwXSr2rYkPPC5cqdygUzBjjJxVN4L3R8c6irnKtDiB4AX448K2sEUEmDWLohnKC2E9e8nr6NxwSg",
  "key11": "5jaRKrDcMG5rTfDXu7BWy1v51vh3rAREG3L8Ffk5vnBmGScTifFsixU8aG62BwuGHLWUiSRSZ34CGsS4uRsBTspu",
  "key12": "2eh7saqPaoa72v9CuBhhPMdqWCucb4Z1svSXp597T154H5etWiQnQdVEoDcEwNmXuDxVanuy1agiBDpEAuxLhmnm",
  "key13": "3qeMxrc5zdecw1FrrZ7nCUA1BMsY4rGb8q5YHmgJXJ9qrxAv6q5P6cyU8JNmxEqMtdvY9YmkKUmXuUFSWJgkHSdf",
  "key14": "4i8zKpXkgwPZFxG8cBqZkFh8ta8pFF4VdB66dZwD1U9dFpQLJ63PZTyMxkWGPxVXKkev8GX3tG8Azhjc24Qaq42z",
  "key15": "3PUkAhwhqsBi1ZgAXYhbTUHNFtkVz5AhaXUJgbB4jFWG2fBjTUBcCnbdVFR1UYEx52EWf7XXx98pPRAWg3zKfhWz",
  "key16": "yAdidajJFP2uTwZvf9ernbHyZrniN2u1qEmGb4DoYi96YDfqFpzR57QPwVpvvXX7kuwdqSxU99nezzaJPxaThFf",
  "key17": "2CBbJWBvSqQyUS8tQvEJ68K9Ey1dGzfPEYF9PdASeTwLNzVoVg1eQ7D5GXvJ5D53uax6u8Jw8xPnj7fTT4XBRcYt",
  "key18": "5iEd2rHRjGd5zn2yDf5LL6R95ALSyZzzYy9AjuuVNY1UimTmULi3RtHfcpQA4YxVxjgT5sMUgF8uKLJGsFCsB5ea",
  "key19": "5aGqCoshNH58kBVnhYzHGkhG8sne2CPuK14bb4onnAC6QGJoPNm3kCTwkFDt9uACqC6T9RFPhxCRddoJQkZNwzPh",
  "key20": "59DjTyHw8zobuuDqoAznddhvLUKecTQY74qMogc9qwXADeEatVrMGM8AqizEzNYSrGsGhp8umjUe7wKkLrzecRts",
  "key21": "5FFmsjFH1J51mFBFNTccLWrpAXKiJp9wxHq1vVHtEfuHMrfyZqvZtaa5crgc6Bp6FmMUajRaWFD2KiFWNofA1s12",
  "key22": "3HjbHinjzoZPciL6CpeEENyrCiYsvnf9W9UXUGSXSTJPocfEP1ZfpS94n3eDb2amzJa7r7sxUrDJMohjhhxsaLeW",
  "key23": "4sy6f5pdfSEafKxzik98f6wRUnTyk6fTGtrHsEDVeKRD1HKN1H5TEaVgPdajEP5cAhCbqpJkXaqqPUhb9kvfayGu",
  "key24": "45L2hd5dHkcB9RhgUP1V2Lbb22vLDcbto1xankNFuv1R16jrYMNGASm7pRLrxivCGGqvqEXNV86HRVd47D45WcxZ",
  "key25": "4Caua4DZwcTUaovjqKoTXXPG33KycZYhchvNJDVpQiiZEctoCd1RKhtZa2dH3bt9H1Ga59YEePyTXSEugfuNTSv4",
  "key26": "3bSLrb8GNw973Xpmjk3wK4upTEHvGfWfoJS7ucDFimStSLhom54DhKokB9S7xdwrGJb8avwvwbdZbJxGAt1YWqHi",
  "key27": "4iFgthhFrzc5zxBDyH6m3JvEiYf3QfmJCgJ1gWqkzoau9z9a6P69t8EGBAiNgEFsB3y67YA4Xaf4W5YsMNCDraWp",
  "key28": "2obQbZYDYBjLY6H5kpfMXRc92VTScQGwu19KjDBZHgwvwUmVQHz5699r48fujW6ozuct9YphaHFXu12ySeXgAEQN",
  "key29": "2GSyLg5Jc8ZJb4MNeHyYN98RgQp3c8hxt5YQr685VmXEmmmtCssh2hppGV3njMUhH1hC1WmPksTkLLY5b8uJK7VQ",
  "key30": "3n5ycWqjucYbr2PGHQVJprZvZxfY7fV36vvjXDweZouS9xrrJw6Y2ki7cpySvV3NkSELxRMQD7jP4Qd4wh6dZeiC",
  "key31": "2XkvYZ2iiHTJUKZU677kZ6CYV9ovyNnmjyoay81ih8oy74Q4QAoo6geW2PksHyPHBZKobZLt3D1sczumZ1bwYELf",
  "key32": "3x8RfKQWa1cbcUFjVrtJHJTB2NVydD8UBUvTW2wkufmgnnCeDL2pKKYg2QdDaJgNPxWzQ2cx4zxb6CYLPMGqhFFy",
  "key33": "3GG8GoJamgfRbB7YvhAbACXn4d8e124UGjUjGpV8hiLWhCgcSTKjgYcuumH7SrgqzdLmSrHBqzrTrzS4N9yxeebJ",
  "key34": "7VQ4ha9tKz3ewjA7R7JbgBRSN71kJuQPWcJn2fjfFnBdiUhb6rMuz4JAeMqmggBSCLZBHDVFSmef8kmgvajXS2p",
  "key35": "J1mYALYhSPeSWykWn7EzB96VzuyWFMQMqujGfQs3VWMG1g66efDZYeJAJjzrCXvAMPmfY6LJ9aRHiVHj85LdzLH",
  "key36": "5B7N1kRQm1o7Gi7bmtPPyqgMP2opwC1FuxBLzpe7FLBTQSFtZSq7myWyuTWgCA4Nv5b1xM6JxV4jTgkyXPmKJCRj",
  "key37": "2nBrXeXrTMxYz6EC8cyhYuNy6WXmCje5P4eyTHJqssBSGTBBRj4RRca6w1oLEyzx7DvMbR1HJNiR7ERuhW9cABVx",
  "key38": "2DFziUHe6uvoCvnWSKf7uSMZTpq9yfHaSSNbcdF1DqCLfqkYYPweN3rZhJyGxAadwM5tEELxHxVcsdtM2WLQWgEG",
  "key39": "5KxoAayL9x47zXu8X9Wx8u8jEEzP1fFuUL1tAkDmqpioeufLyjC2NwRUrkuMFv7ouRYyHZ5id7Gc9wm2YHTE4SN5",
  "key40": "5uPJV8PSjbEkMFE1Z11Cir97yV1CbNnH2J8LdvMuPEDDLXJiYM4EHdxJxFtfb7Zt7Hx4fuQD1bsxZpzi8734o1SN",
  "key41": "3hf6N1kDNhzvPc46MV1ByMz5XL4tFwbLZko8SxKmxVGxR9qAHTymdsE5dBz5bbujYKbEojBKmLPuzUDRDEmsM4ag",
  "key42": "5LiTtD49XBVaBiKFDysVPVkWsTjGnt5qfxHwqr64Q9EFZZ3UFYPij1ivBM1Re4ZbDuXM4ahVoRZcfHzDd1b15NVB",
  "key43": "4neNKXH9FjFfeRUu4MnwM1hnXKGF1SBewXzH2rYFVaijXQtiQnsoBWSbUycV3qpsJShRdpVMuUwQFHThwZXiVSPD",
  "key44": "5kwXHaqvoqLrW6S5wPcJ31B7FvRWkt7TbvBRz42JoRq1W2kwTBBYdNupDLkBbqDTcxWTg337hoxYd8Q2bRw9SVi",
  "key45": "4CuTT9LmgENzCfkY8tX82pVzaBVh2EwtY7vNTAFAu4BJdvUTkEZVcKs1E3n6tpFUbpRxhoMy2QQL48zDLb2i52xy",
  "key46": "k4h3b3YxyZnynUBeeYGtTWXhhNh6o9pww87xHPW9R9n6Wvei2kCgnapCuzPbnpbBYC36bm5ibdJHsZ8cUV6uPk2",
  "key47": "5tM8WTr51BB8B8Di6wZENrbgMs9mkhayU75jaER1cmAjCMK9Vbj8ZoHaefeXNjUQibkHnGq7d6oLWAhTvaMHEZ8a",
  "key48": "43XwtHiekrU3wARjq1AfnHcEEAK3KkMX8tUpddTeZdZLPdaGZ8jFnnWZCQzTt5MZC6Bby7u2QfSRqFXkC8REnmnT"
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
