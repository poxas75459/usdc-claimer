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
    "4w8MHEgJRZuaMF4cxBLEJs3R4dfn9JAre5wM7Sm7wedXYGTaRQ38DyFTJ6PDvK1Xg7nP7LN1y5TpiHgUQfH9tKKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vq4uhC5PHfYb7gc44njQVu18xj58GNCjcLvXXSAAWXYpCDvHcomuDJDcTtv8fgqc5s9MQQ16RRPsAZuu5Z14x3",
  "key1": "2adpWzoNiVzLExcc28H8SijULfbgGpWmxFZZAkr3DCzGEm4uRVbbnKidVJ4Wd7yM2hayrtKXHML7wLLccfMvX6ep",
  "key2": "4M9iR6Mzb7iM6rCgDqUQu6ubXZS9tgYapBAZpF7Eb3NwfDnABXSDFNkav57pH6poPZYjj28L1QTJdozQmVej2SAu",
  "key3": "54vFXfYzQGDRyka7zFHiRTrgoJze6Tt9bG94XvZovAemy5XoYH6v2XtoMQqheK2q4BdeczF1K3W6XEHMvJ9tdZ2z",
  "key4": "5v5uvgkQosUyyB6qEQbSs6hDcY9Hnzv9jCFprqzphWJaybQf4Yc38VQ5X7vYTmXZWxV98Co3k1ieAu5xwtiaQvkR",
  "key5": "tkF3hTTSjMP47JRQnin4zTEeMRivRxnoSANig9n9Rx54QYPk8sLXq6Vog7EeURTiLRmyBT4DfcAnZam1idbZFEq",
  "key6": "25teu5v7S6nHo67KfFCb1nCb3x8xViqaXHpMsPXKJ1PwK8fpw4bYtL3t4afM1LQZ4sTFYMesa8FnDZh6yZAWFtRZ",
  "key7": "47dpDX1Vwk7fceNshZczmq2yw8vyyvojjzmjVAw1PPDSmVauaVQDcEFstpZNbR7zEkjfaWmYb1zpWUkv2uAGuLMD",
  "key8": "4PUhX81DJvSqFotwcSUubNb42pXpkNZVzRcMBm3KdTeSYkJwkDmzp74HqQ5gMXEmt2WoV4aJUPBvt9dEssLJP7z2",
  "key9": "bZzSKEnhXZJQN4h3AxHViBYMyV55jUjpxicSgiBAY1rvUbXbUA61cGQ7q9cBWCEUjtBt5ZvpUwag1LP6LfVPMeK",
  "key10": "4ob17qWXgXzpVufD154vNfqeLwoTQW6vp78EcCfzpCKSNqhpcaAAfpjneU1rZhXvuvbrE9tqU9WisHnA9He8ZamQ",
  "key11": "FQe6wVY1Buyn7FVpAx6qcQaYu5J4FsJJXr1GnoEeE56KXbQV4SkUHQeigCoZdt4uhzioSLLC8REBXDik7QJR4qF",
  "key12": "2SxhMncv3Jo1R3w1vq9QVNrqcgXrVa8YYuNb2A1BgWYM9Lzo9V9YTxncPbroEGVKW9qw4uXfMmyBK2K1bCeEfcG2",
  "key13": "2Vy2NpcvvX2GoVjPJVcukD4k8ob8BJwr7DvbapZmNNKaoiB1kBwhkvVnHHK1RRAee8CcVmJ8M9VrAcb1YoKY5wZK",
  "key14": "41YaYZdWWHrEiMADRNFY7rupFG9EsqfrLKboY9tVQDfiAHN8XG2aELpscrsYf38FYECX2JTo74GUmNLpXEkNsboy",
  "key15": "3TuZKCQnmW3ExdEidv9c1TmRFD9VaitQq3GYenSLoH4xeaDuwYMiJPeRotFgqXSq4ZpUUw3tBzAATYm67tG3SPV9",
  "key16": "4gMSr2tYJNLwPBcxtKb748JfDYewtHBeMkddgn7MFjBVwbnMuy7aGUcQBMbjrFmK4KsfPAySWt3kbY5FJhz8o82Y",
  "key17": "MeF1Cxw4YqS5ktTgrCWEwHfq6dthtF5c7VNwixuiwpRkT5fhE5eg4k6uJARJc77Y1kABRzacu6hgEAgyzPxQJBo",
  "key18": "5P2GsfCY6HNP5y7W9kmVYJjn6u82Hs1iPmBxkz6DRt5VKiaovKgyxCMXTrN7siwTp6QHobPwGn6Mei8SbPGMpssB",
  "key19": "bxRKDzMP6Av17yk5wnueySNFLkSohxnQQazemaPRiktxD7MwdTBZu3DHjY8NVGaXiXi2ewBunJqqc3UGTWktsCs",
  "key20": "u3VzZ6CgM8JoJpmTtqjFizupeoJ7BgiYmcqmXsWRdm8NWGYofqsfn6DHDQXWwWpaN7cuQKBoGg5KrUw5zG7Ub4o",
  "key21": "4xevcnXeQhPA1YhUUrud9usKj4PYSWexASouZNvsguyjpysiGo9rdKAwf1qwwzBfcg4QQyEJPBw5ff9ZrSbiMRC1",
  "key22": "5a66nFVjF9NT6e9LGdJFMWSF67fPWFN8dGdK2G5K5GCTkSo3xqwNyDBLM4Ez557rqdFvsm6M1KE16qdyvTCoGqT5",
  "key23": "5HBHDVMoY9EY8WTCmzVD4xMG3yUm4s9gApPqCKrWBv4Pn3R8sinoZQ4XbBoippxjx943MPkTu43caMCh7hZVfL7x",
  "key24": "ik9i7gHtiVbZJ6vZVVZURQMnJo7PbCY448yTqgge6TmhbDyKgubsLJnu7vda1KDsFNZZXbdVTucrHg2MdTGuncx",
  "key25": "5DsjC5thLMdgnhHtdLpLGQVCnuhf1Vht7V54AQABaSFEfVm5ejpARSPpEvbZY5myWV3MPhHpk346AhH9k3awEcFw",
  "key26": "32MKJM8vzdqKN7MfGjMwgspcgSJd9G2EEbrY5UyVyt4EK2RQDsrTf45CfA62CQ9mYiqTKHLVCrS8fL9ppRpwVXFQ",
  "key27": "UrxjPGtFribkUBnHtDCie7zqi7ocA6GZJKuj91XziDMcgBR2ULgbjPPv82onXQ3Ppf9YBRUeKerAwiE3raLYHeo",
  "key28": "32iWK31sp2ufD1btLAATNmZfQSdTns5r899T9Y3g3Bqb4519Uc5EJUNwi7tkekKp4gdtin2oLeMkecNDqHXQcnvK",
  "key29": "5ycbXDYgu1QjnAcDcXhJkFVm1v3Sd5CFvyEwBxeFPzahDBLuwwMX9quLRDVnxAtTuKn7DndX98jxndfCvtjbcNUy",
  "key30": "5F3PwUdVsYqnMYooq9xPyfC8ywU8mZ2cWbDNh1pvw3MWfWwUCdqNesq4mkBidNu3H4bUMsBgihS5p4dUqLezSCY6",
  "key31": "5JLZrpExKWN2e8732irA3nbna5Zr9Dod9bA28Y7v3wYnsqzqp4HwUdL7FZgLaZAN38RmhkNeGFXZgAoAWQSbeCyv",
  "key32": "5jz8GRAyuWiRe5MGLCdU23kYnvQQaabP9FbE1G6gsxLgNz8owNQKKmBk87zzMoPj5JySJDehBWTJZD1aq61YL8xz",
  "key33": "3AanvRm7c8b6Duxak3YdSkwDTfCRUAMmh33h9AdgtV9k5m19ZBVpoDGaoMPJPkvSaZKuaFaE4Wz11hP8jhmj2ms3",
  "key34": "54jyGa42bgbDbAHG9aczosWTTM3V6qR8KhirQp41RmRFjdeiry3oApK6mxrUuF3uSBj4YMbYRuTyLrzbSu8s7a5A",
  "key35": "4UHVGvTMJqbQqUpDyvXAPREJNDidZ9Lg1GbnNArm2QsihGy8oZxwhK4XSFutaUQRQG6Vso8QtLzE9QTjRANqWQdS",
  "key36": "4nRbBBZKSDHyniyAx5zK4Awo79XDzC6J4oJY8naTq4T4wMsWDxPtYQCxFAPewkJDaNezC2APamUeeiwJMLhUczgm",
  "key37": "4YVJAY5bqaQad6TtUTzZQBeZjg4TqfQF5X4wESD8yJWoRWRSMvZMBwHD3FgqUZwWmLfaoRarH4TsLWtg6YfCgfj",
  "key38": "2gCedHbbcpy2acEGVR34RJGYkAjNBDg4FkuxYyDPnhatg35Xd9d7kTRj8ZHKyFWzcqTZMxwTZ978iAKkNkaRC1Ks",
  "key39": "Q87VTjBc3BwWwyK3iNUf8vGaufshaz45gsUHTqhKnUhpqi2TRc1Z6MWq2tpMN6uVqcFRYVy293SgnawQUCV9DjY"
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
