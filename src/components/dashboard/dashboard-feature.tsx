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
    "52YUtxkdUXqsX5z4wfjDqKhkdKhtv3QNJMfNTcSuimqgt24Z1Jfqr1tS9b7CUxysmogA5gK3ZFZS1fG8ZNyJWZX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MirXT8m5yJ2oNrahih6pE4rgwoCaVMmoHdTHMF426Fu3aAr16rmtqT8eNtvLSMvJ94Jw4xiyn8K9YnGykLcv5AG",
  "key1": "4GYDNeeaaujft412nQiUSdQFQMJrq46u19xGZ87rDbFnQ5yq6XByzhyk99eADt2vgjGoPjngDiq4tLEk3nQ845HE",
  "key2": "5SQdn7mYVoGBL31UzXbCcV1DddRr6genQ9QmbvyzGmgWJwhwFFns2uYA4EVe1yNjQtScJyEX3gmNV7zV23DvYud",
  "key3": "hRF5kRUDw7wgZqnWPdnK2Fr8FnmU8LkRouBcFvU9Ss6R3igdevaTuSwVAw35cS3TnAG2E8rpEdZhfLa7wkFcKmH",
  "key4": "42ZPsVjQJrv3BGtyZaPQxmJYftNCLFwB9KsejmiJEEpKhKSHAojKizyEwfaHeH54GtZ91rCCBTFUXEB26ELLFFM4",
  "key5": "6Xqm67D3mXBtWYWxtThr9AvmTYSJR5BkrbfKZAn4rNSCrtbydGafzNbgnXqiwFhPiH1wTxFzAgcv4kitLgEexPX",
  "key6": "2Dy9zQ7Q38VkeByPeGVJS1QGt8v5P82rXLMEoBmHcMoYzM6CfR3VZ3VH2BDGADRJ47DCToSnv7k65RGrmBQ2AhhA",
  "key7": "QomGB3MiyHGe91jo4cBqyFvT89TkHatf4HBZF6AAX3XPoY9soZyYAyDw6XNnEZaP1aA9T3WBqfUF6Ktbrs8kwrH",
  "key8": "4KNGdKCww1eGuou5dYhjUhohipdbQrcasn3gd5PCCyNwSbBsFX2Dixnc5TFZk248Tdta1XszyufvYePAaxYfxaKk",
  "key9": "5Nu2C55BzvguazziV8bHhwyK5SMwh14eECQ52wcFxVJHpkBmYL6iXLvNUkGnxByjjNheVDRzTGgPk3kEtrLwpoha",
  "key10": "4THkN778GjjeBdrkfirzEaCKrsj5yVMd1ZQkYcehxyzqGAnVmYcUvA3WxupCrKLGavXf3ULB1kyeA1ccjzzGCAkH",
  "key11": "2CfX3JxWs8pDoUD94kyJXMmNFcY3aWiSX13hqEYtfcivDe6gnJfXagQ9H8nicLM6Uk44NhTLYN2X2J2LTACkYPox",
  "key12": "4nPzqZmTrHhLff5LcYAjDziwQsWheiFjkf6hzjipg6XRbb6yV5tuf5ZmbW3wQZtimPSPg9QpKZ5zM38B9rjHNfhm",
  "key13": "5MEPrPRtZJVpsgNFVthMo1djenmdkEH5tSSQLrviQv9nUtyW2u2Up69rH3cHGNNChxrCkA2d8gxhghT7KaphsavP",
  "key14": "3kz5ixYzF7BBcNbaowqAob2hxNX3mG4ooVyS7qRBPwmkuj7Z62fPTfRQKSTNMiqpiaGod51KvNZQVaZPWt2HtPdD",
  "key15": "3v11Mr96DuEN6g8JLok9jtLn17W9SZFoEEi8UxAiRHoEuoBce5JheFRsAtWfGFMzU12JMpCGoGPnjNzEF3W8uRyz",
  "key16": "2J3UTbgkF4JWKRUxYT6r21qBCqX4ScmDdpvo6bF4Mr72aTyoE6sZhscpqJBQgdqu33FSdcqwCYw9Z7w7Hn4oG6YN",
  "key17": "2HWLv7JHNk9g5q2bJeFw8YsAcG2EGA1zS1fcxX7QMbAyrYHzoCMfE2rVm6pZRp5UQqLBj9c4RnRQVuDXSk394gbd",
  "key18": "56fhDVPLEniPbFRjZpEhCYN28viXA6NU8cdzKtDXz92reh6vmcgbkBKB14yGTiycA5CHA3pBHcSzMwDdPb8Sm7nF",
  "key19": "58snHWLZ3PCxz8SuscDALdD8Y64wTgaMCUCWRjUgze1sHsKTF992kXu53JTLCQ8xfDcTZPUTkqSaEbADtHvfsLZ9",
  "key20": "5mJm93JRfyTAfXwNrYxHF9xdsSwFBvgB83NxnWFBHn9qQ6nVtY6Jfx1oJ65Z9s9CBZsaKUoKGqvM4CQN7Rwy8fky",
  "key21": "2TAgWewA25fcovWbdAeXabda4SmC81gvguwxoZiuMFUSVi78atGjTkutypE7e1UBUBjmYC7jatWs1mP5MFG5YodM",
  "key22": "4FJVX1pBkRoJGQYfaD3ouBj7bS9gNtx39XB1YKqDtwbqJ2p8JVE9w7zdtwbK9cPwWnc31LKwvoTHEFM9g8ftVpod",
  "key23": "65SBTEy2torsMVZhJSevgCyQkWhab7Dvwh4yHiGD8VkWJgz7dTRzovZ87HzG4VafeeALZBibb7v127kx7RW9pNyL",
  "key24": "31U5gL7NJuP3Pbqof7t473qrEKMu5B21CREB6D2mULgiXFQabsJD2jmo5Ej2NfuizVHAHxRv3LetWWe7Rd4Cq92T",
  "key25": "5hsyFCMfFBb4ZsbXF9o2oCuoGEdd38DYiW9RTWSa1MdEw1himntfH7xo6Sk1TsWrXdrSf7JgVHiu8oQx6VWpE18D",
  "key26": "5ftoFXmsk3wKqJWK7xNhQH2mT8LX6KdDbY3nQeKRMHuKzgewDyAxoTxNCiigeU9Yw9MoFy5SfT1ngpV8U29Jtc7f",
  "key27": "2y3Zz8S6kfknSjWgzgNUfdadyy5QzzwkzjBUVP6fVtjg4iPW3ALRrFD6SoUSNMgdaZpghrQCtBi7B5xUKKPexnjR",
  "key28": "4g1LmmgzGY4i6m9rFxbp92jHueSDvqg5LrsBbpE3jhcwxzSnFf55xXaHsfc1ffiPcBmyRvqdDMPezR6g96fbNTAE",
  "key29": "5YuLSG3SbwhHUMb4gPGwKHAEgcQ4MgHteG81JMJhxn7Kgap9pHPM1WhfmP6zBQ3fSnKX2jsqPu7SkMvFRKB2CnH5",
  "key30": "3QoNqepMcEHLdkZWxYZKFH7cEiAe7EddYX8JbuqJGPGoXp7WuDeqBTDbHaFnAu1J56ApR5QBUbAK4ivNbu9E24Dm",
  "key31": "4oS8o8DNZ1uSj7owbFCXT1q8bNMXBTmV4kPMhzMBhxbEKRPa8xtuhx79PViaopYBvktp2qvcn7cUTVXZq3GsQ9c9",
  "key32": "4fxZ8f9xhKWeSwHHAAmYbz6LJCi7BpobqMbLBpydhZW8WDCPXSyHUXg7KUyTNoof74jSqJP6Ge6J7yKRR6jd7pJ8",
  "key33": "3V8WAHbpwhdz9usju4j4D54w6HXQQjyZUgSsjs3JcdJWXKucM1LfV4szu6acd3NMbdFfFr5boWRVuMy9EY1AsmVp",
  "key34": "4iooqJUH1YhMHbe16HuqnazCC1QES2LTAvPyoXqXLXWspiX5fXFFLpA44em1o2h8MhEJC33qdPm6SuqbEirqzyPp",
  "key35": "xktYpqeUKrtKgs7m2h4oNw6p7AB3BJYPBFqpNSUMQYs25qFgeWYY5Mx6zNxE26eycFb82omvmGHWptVKP22DdRL"
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
