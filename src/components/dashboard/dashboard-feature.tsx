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
    "123FXWyXxokx7PyWFfQs37DFXJk3SfBFZEonZqa5pD2c4tmW2bRZ2Lhg5o4nXNkHT1wosGb4BxExYsdunj1R78Xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zn4EBSu7tVnm55eEGjocWD4Ngh8u6mV8TcFLaCrnco3d9TR54SWAD8QPV4ma8JKxh9qgpUWz4w13itjVqCzb5jL",
  "key1": "5XhemECNgHxj8GrbMX127Faqgtgx4mJuv2kr1SANNVRkw1bcN7LSfV9aqAvQMQgFhckKtz4B9yWWsZgkLV2YYw89",
  "key2": "rzcSCGSgLgTwL4ixcrZK9P632hqWeskEURwEsfc8dZycdSK745u6Grhm87moTYzACke6qLa8x4yMgp1Zn2vXouR",
  "key3": "Utaxqy25Pev6GU4tNoL993Wo46pD2bisQ5bLSEEXjvKSMdzS5VXnba6EiMd7bzpsvWVrsvNx88SpYuKRQTrGgVP",
  "key4": "4t5PwLXnYaiwWp28FBhoxSaAtNpdb2WGrWMSpNyopD6hBUvZ6wXQT7Cphv12v4fDzPe58ZBdppm8rjWd9xtWSGbR",
  "key5": "g7AY3jnKH4oLXd8apVsfd8WKFeHXR7wXUMMbN1Dqk3njMmD395MLCCTJ6QcCWaujXQbRoz48LW9qPXpTBhg91vL",
  "key6": "4n4rZx52Si6HjY3mcvZWeKRRw2TSz7UsiTbtgeTMsuHaQwQru5KAh7SMrYuKDLn588Sj3mTLWs3eCuYm1EJZ6Eua",
  "key7": "Krc4wDrNkvMjcgdpgha5dhaxa6AVTtaSm3V4FG4T3GYU9Wsd3dgD3w6T3gjWKmXXXGtYoNw5XB8qELvWLVUQqSL",
  "key8": "zviE5WJ9xPoAVxSdXAJ68kDfn1itLbZRwSXDMsUAH4Emm8kpe7wkr77ggv6Y7a8Gtbubuof24iuWWfG7kCXXdsf",
  "key9": "47ZvSSX1naZPocw9o7SbddfGpFEZfSAjLrHrXxAhe5LxZWAP4bx46WBYccqfwbQq9U7MRSGy5b3wxoHbv3Y666L",
  "key10": "CwKybDxYG6YPgQdapUWnAUamhWCZXRKkqwY8LFabb6Uqs4GE7KM4ckRLf6BCEn5nuvZMGw4TBEij3DGrdCGV4tH",
  "key11": "52Xz8Z3MqxSeWwz91vgQ5qF7rmh76KTbcQZcSj7T6Fi3raPQrjFTUmgCXQ8KuJ2RiNW9xLwyd6z365fQmS2Ba9QU",
  "key12": "hnkUr8EQz5aLkTDBGQLJEGTwLpvKAYHDPeCPc13c9RTRwcGL7izuo9RUYrunKmf5M4qz8HNPtidfRPa1pH4TAyR",
  "key13": "XyQqxhiCFxzrBdB6LABb9xr5G8MHc68zJ2o7pnTvLkLfWwbjVEZ1EKVxP5J6S3Kv677fFm2wAgww4tVLvS4QYk5",
  "key14": "5mxRVB7eeCAPsiesQSKqiPc6AswaKnjek5vTGwFNbdX9TvFMAAmER2JVE5DNpVwoxoGg52v5kNUPJtsnm47Xeepz",
  "key15": "2rBXKCWEsCfhTChudYQHM89iSgLcWnMJhG1oYbA6RjjEjjQX8pxVHcZCKhJkkzoGAivGDpSyuamPykbieLSu5e7K",
  "key16": "3dJoro981cejoq41zCdJ7BYgkm9HdExbdrBPAkyectZCESpJLm7ZwsQMTdWFRwwBE57AYgoUrtqg9QpKKshZRX1F",
  "key17": "4cWh3iBf1z8VpMxmDuc9xhK1ohpXGL76qzdXZydRMmtG1GERwnigXMCnzeYCHj4ZiBWZCja5L6oJhDUj6FFxRPop",
  "key18": "3pM1WZmJQT4dSDmFA8HWqu2NFmZzsyNPWKSfKVc8jDoEnAXmwBRkBpsSkUekfYuSxYwvxK4d8iJFBBYw5AXZRf36",
  "key19": "R28YgmanKRVzYKjHd8ZTQybky4AJsQne52gkdQUyv62qTm6Hr6NKxbiUgqnrqJa8sxT9Lv4YGvaANtGeWJeuCRP",
  "key20": "5ACNn6gWvJwGDS6M3pF4MW1UocR1qucDEPm66BBQC5xjP6ocu1zd7QYdieEjmmmiQdyVJNDq3dvhivUNnei76iBM",
  "key21": "67hxg9W26iivme2UtuhYgX4LxdCXDfU3q8YqtXAZEXiestH9wSkFc4aaPTgxbYs1pRN9pXDL2B9qtjmyHGnNx8NR",
  "key22": "5NErUz1mneJ2wnMoMqtAF38ps4XN6rAgAgx6aAicZZEppAsphSjFjUYyCkSKzeVruq4iPBUKVeL8VubhypAxRCNU",
  "key23": "4ipru7wKSjD1CwUqCPtLPKSv9uJoVMKUBCuW13Nm8n7JcTErrhcDmCaDqDFQWX7HYR582z2NmGEcw3ztvm221MSQ",
  "key24": "5RiPQLBDYDiN4He6FCxJAApoMnYEUbpT4c4iud3nHpnnimGq16B7KsEKNenoQMjhQucPGuqS1iUudYmceKo9uRQK",
  "key25": "3mmgEr3Bbqq5nzaoqbY7jNwAm7uiZW7cAioqa8mVUJHo8mdei2n7ysgrDeiaXGji4V4Sfb3zu2t4nn7FX2i69mRH",
  "key26": "2uWpxNSZe18ASNJzuvtWJBmFHJb9aCD3V3zRcdhqyS44YN5S4WhCwFty1C3vtpCb75emSYpNq3JS7yWM9SWNo1P1",
  "key27": "5MGQyAR8m8LQqg2BJeQwPbSqEtLjaNUEfhUuECsrWAnzvMkTesGbkuu9aV6qYD222skk7y21kkrCMMt2DuXALZqt",
  "key28": "4GGCHyhCtLDxsUTJ3iTrkKXmWZPzj2TzGV272y2ghiTui2nVyzoxAgbaMpwJ5Ut9eJgJwiHZgaupqeCMfwYw1J8y",
  "key29": "61acyuKfQtHJzDZbVSTM9CyjHeAEgB27b7HwedBaTaNDcK55vtUYctdjZYpea2p5RAN7E5ViqGK21CCVwJfBzSvq",
  "key30": "2cPq64mHAMNFVzFX649Bf4n4t7brjQ5mwYMm1a13Queh5S2B2zViY3Ef3ehp5b8AoXs2xswqcZAi6m9pA91ZZGRP"
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
