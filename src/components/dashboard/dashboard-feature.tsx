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
    "4rNhsJMj29MN7QUs89tLZ2u8d4q7c2zKi74WXKsZYzXFf8UbwaAehRZhk3jpcdfVXaWDGCVoZuLSZUePi3yruKXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVLbynJi558LpLybTWjQPZfU5hM7Dxk8zNxf7iE12EuuN6Ybxph8qG8TxJcLm7SqJmAWbUDCNdbfqE6JZtej1Zk",
  "key1": "55ZG2ktKCG2eaBWn49NE1WB8o9njZvjB59DGQdSmEDgYXxVgZd6f2QVcM4jQVUfP3HBBA52Lyq93m1Q5nsCrAJfT",
  "key2": "5cePPraqyf24VnCVuhBZ3n2KZBL278vney4ntpPfsf7htKYaP3E2Cnqbi9gW7rge3fTcKutYdEheoSPEoKwbcXWU",
  "key3": "129MXHmvLFZ9VQ75CG5rNogzgmmqeSHQC4BKrBoWXyePjrExXmkadezLWDkMd9BCvq69iJiUF5CFWTY2fNz33CiP",
  "key4": "4oZ8bKnWZqeD3LG7FSJyQfRnHQ5VTRsnUv8J27gKQ3KGZG4EYkM5YHe9PsKmKbxPiQupY1x7fcRqcsMPEXY25pLe",
  "key5": "iDBu85DvyKbZL32hk1Ts8MrKT5Hv9miqoYUFZFUitSDHAsnZtgZh88Pk5GSe42CuhTuqPAStsdRLqxATEaA9vLf",
  "key6": "QfnbAYyQoYNP6yZ4EN1BpBJHQiWRqh3QALarYYQuiqqv9DkJowEcLJJH6x4ejRsZQbAM6KHNxYYqJMmN5HKnLeN",
  "key7": "5kxYaE8DbXqXsmA3oJzhbvG2Jv3VeGrNU6C7NU3JG5nZgPsCzuoc9VuvQygPi9JfPAHuPHpB1W4j55waTtJuDatS",
  "key8": "2XgmDMsV9Tpjzn6HxfJvbgBZ27MYrLGAMUDkBUerkRSRTXRd6B9iyp2apo9osRgcm2uGEDRJkCCu7MLNGsbHrkAG",
  "key9": "3hsbuj8NYmDnVnJ47Da9Rf5BZxYk7qzXh1T2MzJ9Zmid4DgTYwFCCRcWT8W9fUapzNxZtZZHGEDATf6uJnfdkYdH",
  "key10": "3SEFgS5jB69Lapax4V9tx6NNXZC84rC7r4fvFJAndHRppWyYkCZvpkYuoFBFPWGdNSC5ZWbBXNFLYmesqBdwqu3v",
  "key11": "A5LGYowXGXrbceFGmkEiPmtx9Ev2NrDhYAoiM2yjx7d2P82uFamJVstDycg4vghtyMcv8Wb1PagvptK1hUgKm1j",
  "key12": "42zWhCY8Xk9PoVWBXV37Joanv4m6Dn5uXPXHd8CG58qzd4TRRXSTFntKcswcA57bAx17VHJfWtFS11qzFxdYpBUC",
  "key13": "3ZBU1HHMZJEezTm5KiiRUamm9CLJdjyAoHn7rYmue9QzngXMLFygnpezZjtspnQjhKzQHidYVyoGbjiPBuyNwdr2",
  "key14": "3rJkqTfKKHFsurS6DeHZ7GMNVb26RzKfZAZ4GMrN5rgjY1gPmJX1xGCbi4nnRF3iqKPUxZQ3u5BWKpbdpq8LMTVt",
  "key15": "3YffGpRCtqkYWH2LLvBom6xnppUkWg19ZALM3zWJgBs2xZCMC5Gwi2dEGmkPHpjvadYPH5v6fuhzHAZAnDCrBMCu",
  "key16": "3ibufphHMoZKtyhVXELaBnJACxtn4165HujFLeLE4VAPD6FNtWw66C2BPNtqX4Ak75CKWYrRz3Y9gtUD8o7h2jKq",
  "key17": "3VfwyLfPs9h6AoPLZcqLmPZiKvqF5oo8rGmCbcF86yLmyQpcmfpDDvBX85MrFPHmkVVv1x65v7HRnUB73NWHUp62",
  "key18": "3degSbmnf4QVW2YdnSscUR9VfPH7adKbwpZ52FhzkXRzQ1MQXd2E1NDfCPFnNzTAH34THSLRELW52bpnsh2eoucm",
  "key19": "5b157CWHKWkThq33ueB5VLJhgh3Mr2pD5SuiRiaCqLE5zBMyopUXT2L3buTYe3bHzfYb6xbBhSdbpUfNsWxqFNyn",
  "key20": "2G3jiL7S55NFAsHwf4fTguyom9aEKY6FVsmuaZTHrs8fWF4LkXpsXfBgLe843LHQjgSY6ZYzgAXyRedtU7qfmoVn",
  "key21": "56mq34PpZkKxEwKCKbkt6tSVbXDN7jPbZZaGrFZfn1CxuzjrPVt3S6376dwn3GPJXRff4d7DzrFpvadYPunSpv3T",
  "key22": "4QtmE295sKXkrwnM7CV5dagaDgukUQkGkdoeDJ2aTLedrVhvJmbkRTWxVfhQuZPRXRa2q9JaE18w1stnMqUPRzid",
  "key23": "vRuK3rZptsT5srKLuZUakAAfeiKUFenB4xLZQRGrNc7mKu2Q3HYChWnk8scurNED2MBrs9vtdLZLq2zdvMKA12P",
  "key24": "3KtRQisFtaiRRXZoMMKTkjDNdY889wUTmAkQnPpVBKfet624yCYkQnz9pKwZSVzAwE44EUE8e28kfTPTLtsnNAsv",
  "key25": "3VbXASy2pfQ2irB5DzbDY1gSEMb7X5AgUAhYEMDz8of93YJMAN8zPEgj2ZSWED5YN8NV22YW8ydXRseUdSWJWn8H",
  "key26": "3vkCSfKpw9xE8s65SJJkQQ6ZSVrJHByGygeyfVJPKBwkuJw1CGNSwiRYBU7qZHTjLuCByXC8q4sd78xd6qkrqRgK",
  "key27": "3mJdpPamCQuSGhBtCHen6SsbrzmDL1RKLGUUXCxtCCqRfJceXjML5p5xxx1zfFfKZfz51xwDjkxfrb341PKfzGQv",
  "key28": "CZfpaH4e5ywXZ3ddt8x5zNfzPtvgx5tt3qPQw9VMpYEQ3pYBYSxSdgV1wd1gjCy6B6jGsaoRRDtZ3QDqJp8cbkf",
  "key29": "5f9qgjZj7t6A2YQnrrg8ETK8TVaNYByiceYyjqhnL6Jr7d4H7dL8S2N4JKU1jYGDXGwZhdDFhyHqsYVyq9e31PQR",
  "key30": "4sCNEcmHY7ogk7W8dtbdaiNyvT4Jp1GWu6nQKzLPgqgGgUWescbqwbpnhgGjrYmkugUQ2chJkX8dnn1ytdBgJvxo",
  "key31": "3XQowrM4V5uH9sKMPTtbNd1GeqC4RsFgWKGpf2cSbbiD3X3t1P75otZu1af9khJXmdRGJTBSxeB1ZxaQKjTN2WmJ",
  "key32": "5itz2jrzwzkxV9aV4YQ7ppjZdCSoucTHdWiyXnbNdPax7MUGGY2s9H5bEHditThyWDQfVp5rru63PRLGgEJmgdjg",
  "key33": "4Y5KDzgrVh4urKPVR7B5HopzgLvZPgeGj74eDuxPFz8axSECbWUoBYrH6rz7VEMuhv6jVqFR5XCVBCAA6BCMcwB8",
  "key34": "4yExKz3aqeiUTSexHLzhKcUdtcfQPF7BBk8LvWKDpNcTxsQ3er3eTN8YBV8pU7aam425XBG7FMh3wWtnszJ3WXNF",
  "key35": "2SnidrPRbcr8dMXFNSXarp68WzS13QBs6SXWYJQ7yL3h19e5mnx1nYjSLhsjZmusoNCvAZWATP2yYbtAk5NCVDmE",
  "key36": "3Ac7VNYuTfDoRuXh345bzTq2VLFGFHpXCPe3GaVVkhUWhFpckW22Vhwe4w57E2DWjv2m843k2opfmiLQ1ZkGdjGz",
  "key37": "33bCKXE2QnKqXkyFBBKz4kbf2sDAZbsg1aJdt52LEpsBiqUVatwRve6oafdtDFLcHquJQZcdFEr5eHdxUD88z6at",
  "key38": "21C9AMcwveHeoXaJH1hJnrsdhxMcaN6DCo28np49jJkZa5B8eGtMjPdnStZa37yy55x55emJhWz9RwYXPSK9qiLb",
  "key39": "5pRCba891TzUavFR65z5BR3uUsCJAtQMkSQpgiQS9DYs5cBeaUR4VBu2jkXrwiz4j7psuPvfkr9y1aBjNtoA5mhK",
  "key40": "2NwhpzC81Y6QJCYjbVVBSArFHvHod2g3ogGLjYLHWvzpM9migHXtLjUJ7NPKxpoPQoS6eQMpkGsbkTSZhiEDMuYS",
  "key41": "2mvCKBz9wJouosNbbSE21xaJicWD2aRmcCk5mhkkwf7onRQE63mcoPMVYizvu43Hsz3LHSUi4vYiWgyTr3KcpUdf"
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
