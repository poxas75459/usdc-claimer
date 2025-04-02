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
    "4fF7wuYf4hW9VCqtzMKjP1N3XRtVqVqpStr51PVwV79SaieBPNDciL3SfzMD7ox5qmVAZLJiFUbYkigFc6rfiSyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iGkXdj1UUs9WzEVfUBzE5Cw4HPQ2dqwK1koBVdqWFYwxXRSbkpUsSiLesLwE4h4ai2VKYzSvR48AwULmrs8DYnd",
  "key1": "2gLEVQP5uFBPWryCgfxc6AK2FrhKaryhrSZhRY79uTa17n7QwiwJNGWkRaiTCyccZGtyM32AzVXuZpe8MgLBUeVU",
  "key2": "2rjUF4mZ1GkSFPMDgmmtTKcvQNpXA5tvyhTUZWyf8x1bvpscR5eBk6k4k9Um9XGSUSREf3pGsL8afGYW6ZdYa3HQ",
  "key3": "3m3y732V9Po3SMPgoWP5KTFJcBdUUfLX88XXi1KshXsNGLz8cXYsfQ4K98YMWKD561mpJLmd14ZPRVeMR9hgokLW",
  "key4": "3CkisDKcgmcH1zS2htCUnZ1PQq8U42VzMDi1q7mbjGuPkQ8t1c9NhPpdfwNvDkZ8fGKFku1ymVWUGeCbsaQtN95L",
  "key5": "5E3wjXsaYN8FJrW8pyG35nQRi6RsSFHb4a1bE8BMgJgFtrXpcDiZezDkjFDG6Dd1jSk6XSDKFrjj3v7UQGvb4ban",
  "key6": "o4guH6iAK2G6hZh3vRE8ugmGBSZh1nLzYn1xafqJxpHr7WArJfnxc2dJkKndDxVtrnoSZQyUDSjhw2SA4YnZy8u",
  "key7": "4ZJEc3QkWGKrudbgFytsWXQzW4yB5EfjDdmNVkccuYMVreyBGEGewdzchzgJxSdxiPTnGCqKMwnMZxvY9T1JLgRr",
  "key8": "4B4JTHdFhhtDS5XqP1Kjwz4j8AQp813Mv5Uxbepq3aH9QQPCH4sGR8SYepfud4u87nnJpoxG6cHddL7bJ85nWpDS",
  "key9": "2VJNkZ2vXbmvixbWRYS67AAeq5r1QbbbsCcTmihxyFTc1NUgxBd6CRkBuigpMsLM8ymiDQEH6jBKv3xsYMjSnFhW",
  "key10": "4EPVHEP9hUtMdo7zDMQH2cqGseZGxaJZBDBX2h1yALTaCwpSUsnYzcit9A5tSzkPYhxrjDiuQ11ri9YhB6byRJXF",
  "key11": "4oqj4WhnRRT2aJMTtzMPpr5u98mAt1aSvFaJVTj9fvtRQHxeNKe4f9zqdTrcZVXUGs1z2Eds2NsMu1guMvd7DYXR",
  "key12": "39J2jtPMFdnxVy2MPq9HcVEwbGkCcfwKsWvVzMxxpQxYWB5Jhr7eLB44zreji3eEMq91SbbvxaWxV6Q7fC1WrbRZ",
  "key13": "Yx2Y5Em4qWRmYoyzuA82AidGJ7a3Z28VJT7b71oBU8oWXjT99aAWKuQnfDpAxHuW8mDdc1GBxjbFAFATQWVJx8A",
  "key14": "5KMrzQSY8C1SrCiJvNWpLyVR95ncwDyzgWPs11WNj4yLcrjFFwEzkAqe9KR9pHjGzXBUzigioe5vq1BUfhfNVTSZ",
  "key15": "iHzTsdTSPRcQtetAwC4utYeFVaRKQm6uXuPvs6tYk6GhkwgGQGDm7r7xp5qAXBPoLMJqsBiodK1uSTeugF9hoXR",
  "key16": "36Ax92YVycM4H5H7CNe7acZMYjattbgjK4UsL3aeW5BpGVRSexY27ZmabpJipSdUnLaBKHieLZAfBh4kMEmStJk5",
  "key17": "64wFFfPSMHq1ZxMvv6iWsmEY1FAv1tjoopGWsrVJJSFFbEK9BrWwR9kKRxM48myz3zbaX7rVTHxQnN7utCDtdPwf",
  "key18": "5NSeuxhv2TMKt67sCHxJBwfXrkpBrFqEpYth9RVKsa9vE6GxUQGvbs7Ww9ubke571zhXT8oKb6YfnEQCAkwTHHJX",
  "key19": "4azpA1iye6NmDu63m6QsKqtMnQPZp1MehRw8bb6mQr5dEemt2Xcr1TVwSHhyBWFYdFSggn4mnjZchRnNfYzW8hZ5",
  "key20": "2RGQwFHroZQGJtTe4znvVQxQsXtr5CAduwTZvQhmRjRjyjRZTxDGYHt7AW7SW9kSogCMoGupR3rRnP1VCEAUDZ7Q",
  "key21": "32jbnrojfdDH75rGasQj14C9ssqzcHyDVByq6LBjBeqzFaqbCG4cisHMTY5f3ErDgm6uDHhNWvu8MXjFeb8bUBG",
  "key22": "4rfp2sVYpstpDVLPkzmeQwYWnJkQEgC26hKiH8WiGsWv2DM59ou2sywLzm73RaGWmP2GNPijeuVMcc6orthzaDqS",
  "key23": "f293pQLb1zY4frDegthHMvVJgZBkqGHSJiaeZvYbcvpKEbUF3KnPHpGH7ssMownhWhmfSmXQMjADn9aJs53BNyX",
  "key24": "2AHPq2XfrjRFEXCm44zUCNHXwjGCXDtzZkyE8TTWYx1sHiN2qDYukXZE3EQi1Xrmhn5PPw34z6TmNbH5btx8pJ7C",
  "key25": "2Mwji3RYdaagXTt1GoVyceXbxc6qPVgro34f5vKWDwASTvJXCdFuR3ecEw3izGgQKBZ1FC29Howsaf9DuvAFt4Qc",
  "key26": "34FFvGUpoGrSYLuZksESBaYAC2eRejpH7zjtDxxxmejgYifs2h65pSXUPtdAPhbb2msN8iqv3rhfWLTqzPdQLTJs",
  "key27": "2ytjvC9LQttsWacwFzwqcovsHpRhNLYPUCBydynpLkVB6a4yAa5dGTCYfDHsP8yUMum3KfutAEGdQCwnYFD4KvT2",
  "key28": "3r1DCWTfRJ7tTxpeBCoDpqQBsd6nVAfKCR7vGkYTAfN94QGep65DfcudUyBD9hjQnGwMC1D6mdr2mvuvZq27JqJv",
  "key29": "36kQ49CGRyoMsw4tYirC434HsdhfY8ptSm6EaY38mqNzHYyBMt7KNx3P3xarQMcfEtoBjyvRUdZSuaTut6F41r2o",
  "key30": "3F5LQvchuxRaR7gTVdEXdCxaJ6bEuG8m5XFVGS5Ugrp5MtBRn3a2uQBnUBjgoashmLeLvLWMqbvsbbP81MpdcaWY",
  "key31": "5stGSPtNcqKXCy4LFg2SxiztxNsmCoEmDgynNhfsqH6Na2jpMcKfbBKwaU8fUN4faW6kAyRzQepVtMgazqGbaULE",
  "key32": "3skRxEC2kchoKNEuHZ4fMfHUEwSY948eRB3J6QY9J6LLXyepu4TL6Kd28ViZcT9hUGs4MsrbC9ySDb9cmQ5BVtNg",
  "key33": "3Q9qpQM8iHh6N7hMjSufGiZqHEv5Tjwi5cCQzaw198PKpMyxbXxw2WRLetWsr7Qi3LTvdcToNSP6o3JccepXrHgJ",
  "key34": "2A8jpopQ1iBwPvAfkpjRgAfPABLSEspHE53sUd7iwwBkqf99uWoGgSxQqNbDRnXpRkyH5ytzBANDV1jLC7VghPjX",
  "key35": "22RMQXtinUA9XfcudKVz6NxquaYuqRH1ZLiQ3P4cuasajHAbNrk1WfXrxjHgj4MwH5bX6KhdR9mgJU8qBkxsGASu",
  "key36": "2CdCrpRPjbRjkNmzQfwGHKmgZbTDP3T13tCYXa3CG2X69uNbMQ95vH5TFEK7US9gujxBufxqrhvUTDv7Ni6L1ru2",
  "key37": "5wcZwusLk6uz3vz2cF3Mf9y2fytnMMGzALvFmEYJkyspbfLtFDXxMhV99eKkBJXmzwKShaxXMNc5EVENSSkx8qdR",
  "key38": "5qKJR9A3aDieEqM4j59QG6HN2jCHG5vkEJWRFqFFuL6Q5ZtwtJQY8V7yymKYjieq37AAyerod4X3ax8UCw3xybUy",
  "key39": "4oKgL3T7PAB2nUWAiLdtGZ2RXZw326piuEszV4Na6tS5bobgyhiGXv1XYRvF6pTt2S5iisQVQnd78JYscixi6F3g",
  "key40": "1jcsAKCFde4ULjEhHwwnmyjxVccbrR8Dhj29piQoGaxZVrr9g3kVuMYeYe6zp4bQEotXSVJ6ghg2q2P5BPgMx37",
  "key41": "YsQS8MDWsJswvYjmViji9zjrcy8os1415Q6mTM2K8sEb8m2tJR5GJxum741ivLKAJfk24sywqX74656G19tcmeu",
  "key42": "5PjmiZfqXWwv7E6Uw51wMcAchtjrFfuMWNcAvKTdyrNymbeuNWs6M3KgLN2KTGU1rVuapbN5CP4q8DBbZgUQrR4m",
  "key43": "4T2wfx8RdqPJFjqekLtkmm385332YgDcKo3Eb3qJmiMftZDWu9GJrqSF4uA5g65rthcqSMVTbC88vwPT4SZMyvCx",
  "key44": "2gKnWZvbEZcCsqd6jYRfbAdYpEcpDFcPJ2Tg3WQ4g4pRjAmnZmsZRkXsM3WexmQSvi6FbyLUrvpzma5yH4niFjS8",
  "key45": "4iRTmxmo8hchHtA9VW3uoHSB5wUhFhoH6xbako91wMtqgHMMG89AADzcgZVXA5j7B5xsjgTMnYFhi8GqRdw6UPwd",
  "key46": "48Fdd5s3JrZVqG58vhSWV1XnRicZvBmfsmmUwGzSMTakV1DcamqUzpBsnyag4TRy8akBfDHMCBxQXzytUa53GJMb",
  "key47": "2dAerwjJ5x1JdTi9hzErjCwykQnzrxyRank6hw6vAx9ErjHcH4HuFXWoRDEpABDPrcZor2oSFzbgCjeXriA2RENb"
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
