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
    "5rvug6Gsgyrv5L6gRftqoyo6bVGBWV9i6v93NHYPyDPQXERwYavKwaTyKwYLCVCi8tfM87RsZdf4XNwP7oJtuuqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNy8TB4bHdFAoRchZdpMMEeW1yYAyAeZVfa3PyS4DuakXQQjo6ANcLZw61D7n7CT1u7ZgJu7tnDg3cCaH5K3W9z",
  "key1": "5G74Z5SbFC1nUvJ2xAw175nVCXguYuYJqV8QK681UHrL6zGvJ23z7rJEmYghdb2UzDrtV9F81YVsWbquCCH9NQuC",
  "key2": "252TJNNXXK2r4em44jc4aZyNEGJcGe67eFcVvdXRDxnQiSU8cyi9VfkBxEwknE64mrxHqxK2S6cqULmzBUYTpbUj",
  "key3": "25xJwakhuEqhWv9UaTdFFhK1MXgfdJFJca7xCCrVd1ZPnYio6LSSmp77KSCmT8JPekYrbxgsLhxVJqVPQbsXTn84",
  "key4": "2PcHkrFTxUwhXdifQy3WTZ6Qy7mKA4aaoE4kD6jpBucfoFFZghK46tVphDC98WgPFUXzWCr2vrZ4aPpKB5Sxfmw7",
  "key5": "MUEPThBajEP1HptKVAFkQV8MoSEuhv9d8zhHrMNgZqhfzLxdrojapKj66SavvygenfNbsqeXq8cwaYmsgDSCcJZ",
  "key6": "2iX4mXfW1rSNANNvm2ZszZ4ygx1wGDUXVUqcf47bev9jWAPcBxUhpEjHsxJnsEtt1Gu4a2MRtnmC8ef9jBGMfHbw",
  "key7": "XxmNdKZh59a1TfgP49oeNkrwLP2FnfgypS2aH1hQVumXZBSYmVqz8zhHmwqXiD9vgeLJ3m24tZjZEoDhgz4ykHv",
  "key8": "4bTkVsqBKAVXQWV36BbgKFD9i63sfYxaqvfenGURmoN2Hh1YDa2btaAm652K7NY7n4gPEMxr16DgvYXfECxCVPdV",
  "key9": "5TUDtJZj3zgzMXBfNTGWZmA9ZAtL6UTyzhuETzmxa8LpUsNjAi24P5DeST4K96wiMAatGKcELvFhw4G9Ua8i6cia",
  "key10": "5HkNa3TsRtB9bxyfAxQV1C8h1YTmTeXCG9YYdoU3ppeGoLyQqLURsrE5hBUZeXNVknr88k6UVqXsAesJsWPbT8V9",
  "key11": "23fAwm73rZ3xuEspivoz56LuWCethQ5xt62TEk4U5kmayJmD8GUU6Zner8fT9WoPEKo9RULRtUBP47csGVyh7YHZ",
  "key12": "3gyqVMk4wtQDF9q6nd3xAba794TSWzPqh9QnWKPb3W3mHjHGBkff4bqyxitrKwspAKmMGg38b41uk62nf62gYijC",
  "key13": "5SjZ7tw76MXNGerTMZ91M2J9KZyCR79bHmP99h2x8jRsjzy1NhishP3ekkxeS3doctEwZA3XQpPwAKegYTJCQQua",
  "key14": "XpxwuotY4KvAYPeeq3PLKtoxZshMqaqey8KAEfvhqjh3RxDxoMgoSJZUzfSHPgJijS1cK8kHgTN7qHEWQKRyVeE",
  "key15": "Wc71VTQfnnEaf4QyxxQAj1hrY39Tvzeff1nSfAHqLA4EHdruFyEcdVJnb6RZwBdgfCDM5zhwvzvVesV9m7Epmws",
  "key16": "4PuNy4tF2wzkqqcgraZB1D8aajgBhTFibzpKLsJBdkj6Luj2FbtknxCr78NSgcAo5mNLSvGqfoo4Ft3SePSAtDVr",
  "key17": "3zgMVfoNdXBqZrjT4Hv3p9eZKyhiSmyMHbHKytSNohrzUwcQNipbzqVgxuyKmayGCzBHexrSQztc5WGrVDTajS5G",
  "key18": "aQJ3zGXbDDTggLCcwk5Tza7MxzpGMyyAeaukteWSthrzDf6Tb3jkotWzY74SatXVJdEQ1QoR53dRyTZfREPu8ro",
  "key19": "3FTGU7FiJKa956hLW1qyPGdXd2HJr8jayUUkiQ3VhpD2E3Fss1FVVetQfPKieBKBnLkScuo7CVqpsvPAkuMT1ahS",
  "key20": "cXKH46oRvuqAy8nAC6hjuJhHcVWzKkhJADpmuJQVD66mSm8ZCdwdk8c5B1wJjkow18PzbRLLoJwvkr8pRFkcSTJ",
  "key21": "2cTvxxx2iKTJrZPmZJNDh46Pfbo1sBE7prk7zFzVYbib8TrmCcN49Bj8ACT6wqb7QnyJfKUpLA1zPKaeRbneecd5",
  "key22": "EfTvZZ7UeQJoDew9XiiTo6a9dhC45vFJZY7fjM5tJcLs6LEmZxR6cdSBmN9Nd5faxMhkEDyEuv2qL2qZjS5iunL",
  "key23": "2gniVv487Q7yxxYc471MbqtyfcHTgYXLy6iGMvELepawJ4mPQ9whTp83DPs5thctdutsmKrRnHrKXkXdydxomo4C",
  "key24": "34UmHxnLW7ub2u2LDFCFL8LyAUUtW2V7mVXJbU7JZgBbHVbMSn3bqt5r8E8L5NCGyYbzRvSgNJZmgCPCZt8gxYGR",
  "key25": "4K5Aff1psVxvW1yoaSXLE1ozwCojzAWgEUuAVkuhy7EEYUMxohjDZyZb87XUzcLqY1vcicorxE6VsCDwTHpPyZki",
  "key26": "5FC7PG7t2kDQJWrSVu4UMj2Lhk9FEJy937Sr1Stq8zmfLqpdpoGtUtN8CgWrYihVavJrho7qzkSZsJy3og1z6kaf",
  "key27": "4DZiF4VCZ1T6x1ZGUKZH4LrepSMrxM8vWjjmB9WhWyAjXrKYxPMTxC8SxaQaLiBfdA7EYe6DZzofzTFsjnNVndsF",
  "key28": "4AG7MhyyPQe3L8m7SU4fmnZhnyPYa7qF9QPCmV332yt322zsNuKTzVg8vggL5C7LPcikgs668LBNptswKapL6qWE",
  "key29": "KHFoWQA7k45Rvj56hjc3wMRB2oofuBmnY8cmSE4iuTzGuRFDgRvJmErzoMvVKF5FrtRxULbnb7NkRsx8v4hrk1k",
  "key30": "2tEWwWiraRSXArqeuU8VRbS6SdR5DVgAeHWUKLAUM3MHrzfvvpnQ9tL6o7CpZEQCvZotday33DnwkjcNz9rG9N3T",
  "key31": "4ZocwCMm8hXy27SjZTD7Xdgm5jZ2HNYZ8QbyiUdydYYUEoRS3mctsexvtYh2xCnjmusFyway62es8uMLm3f7uaEM",
  "key32": "PvnAhGwHKaYNiN79f3XvkpyKX9UhX51oxP2ux6Xks2xyzsy6ezigkn4867aLN8TtAAKmDzNjQBDWznREFwCVLJu",
  "key33": "3qXFCC66MXgjuKJiKnJo2EMDsyk8Gt5NCLU4BsXKT81ZxAEQZ9HMoYMKMiiUofrMhJDc1n6Jm8xywPZZCzvBp2eb",
  "key34": "2kt18bjP8bPTP1yR94os8VLRYgEd3cfEvonrwhR71wvvWRFDiwML9NC2yDffFUq75whJaZPHUFGN3t39yAH895zS",
  "key35": "5kyTCvsDLkY7jPiDoGKLCgmfCqa3bMsKYgZS3ZXUMz6igBj4UdDbFJ2mPTcdKeBuY7j31YbDJUWySFJ7Jnx5RafD",
  "key36": "3FVg2AWrgK7MAZSk5uFKzjQ355Htf1YiJ1sPfZv1MHmbgjcVKTP91i3SpGJkACrrLpNbhpmZbZUvwRn6hqThuwYi",
  "key37": "3XnxCvT5zrdCc3eHtna8YNUsT9KQHAY8KDcJSeHn2thQexRLzUQFyx5dbdJsSN2ounB7rQo6dA4CxkeKSe2Gfgf2",
  "key38": "3Hyr56LEbGD2H9AQnfkdmaQhtEjdHkMPvahUEfm8ttrNAr6qyGWnRbCFHiQiVPgmdKYiXjRTDkxz1UrLoVJUMhkT",
  "key39": "5h5ChSSyDRYJXWQC1Bpua7ZS7MGTm6BbwvnutAgUvhyieHMRLFuDTVxY1xx2WtjeeqqP8ABJQaSYywhWg4Vb29AK",
  "key40": "43i9fwoGmXuFnD6Wh7GpUN314WfjgkbVcufnBp2qvdZ8ds5ZhwiVwn4RBsomE3y1fR1XXD5udrMXxD7pTi99WHNv",
  "key41": "PPHtATrBfVs1x9X8HcLoVji4GgeoJu88NHtXWcomVCdZkRqHDeRp6RgfxKMPSyLbXVq8KgJymWm2sTXCqDtiHvC",
  "key42": "31rT6ZTLYN9He4iDKKd59ce5fxLLJ7yr3wrYs1C48v43sWVc46kBrqePwDLqYkqRA95dxy7GGFJWqRfR1nEXe7zg",
  "key43": "3jz7ECZJKiEWAKEHsgMNHfjjJkKRPQcBWZ9LMXXDV9zNfLRzLwMRCuo9ozyhpY1aZbJdNVmhutDnJwN2T21gjuAx",
  "key44": "5fRCVBVCP3UY9VKuqD2uTtBb8cncBseKBbePP8Hn6sehKTPGvtA7GY781jUEtWgp2VXqrVhXjiEZpfUQqF6dfhfw"
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
