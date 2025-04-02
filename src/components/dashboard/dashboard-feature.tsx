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
    "2X2GWUTmnJLRLgLk5HC6LgiuEQZib7wvcK5ErRHQe89nKXSLd2PrZx888CfpmJ35hG8YXqBms3oMjC4T8XKGD8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qt82eVFMtCYLWKehjUiUNReWCe9kTPZvz3EFvTBSEt89x5hL7ZM2GtLR6BRDvE7NLZgJ9wuXvJUgT6YTSZx5Xv",
  "key1": "2hPf5eaZyvShn1TQYeajLrb7VCHHAfWfRvgFwUVWW3eVTBN7t7qs5v7ZCLcPJ81PnNEVcdipnvbbDJAiCDcdHcmr",
  "key2": "4BmkP8qD5RdbUdRExAML1nbnXSbrVHikcoACWWJVHddPwCJJQSF4zejCxnJbnyoZ7u3dF7TcKyXEXN7tQjRyVi7s",
  "key3": "2P1FhcTd3fBvKE46HLmdwgUtjHdnTxptv7sRPcgq5sPQt1J5TrPhwpWo1iSUCEfKryWQW9tNVwo4ArDW5WsNLZaV",
  "key4": "2Cbctsm1RpXUs8dveC5qhCns4fXo8GKLva3VCux9TpYToVuubJkNgHjHvpXthBCa4L485vZwRDBmwMoDwZXzuY5s",
  "key5": "2zPydkcg7ab5wKvf7Ybrmr8sQ7o8EXeXBhtxGngDH3v48MbGKSdPY1w7NQxsz7Cof5RFSSUAcuu3eZxVFKUmp19z",
  "key6": "4dsrGiYUCLzenDbEfq3joDpifxCuL5RzoVVtgQNqenw5fTGWgaDw3qdUBCSgXVBek5LvM7HH1gUMdADJBRoRRS3q",
  "key7": "4U2b2PMwHVy4TnmFhk6Z23MGa8P46gRuckporBNR1ychwGconEHyKouTHoV9fMz2ovpAYyBipPeTRGi5GwmcbN8W",
  "key8": "2EMx7TJ64sbz64dbkgR6unonMBeJQk9Xx3Dc6vnuUMSJkhYGMTEvUwRYVaYbcMiQkb7P5boNFaDYDP4ScPVgfkdp",
  "key9": "2x4okEm6tfztnWT8by571wcEZAgUpjrtYjrCbvjdns4BtXmgA1YQiBKkqrjBJR38zhQqRxVGzwNs2snCvT9LrEdv",
  "key10": "D9ujUUDcyGo8ZCkZvCjEfWrmUDgCmavvGhwok1jTimhnmitKkvR4de4LePeeRfEgNgZzkmnKN8gEx5fKJY7RLi6",
  "key11": "eDfps6WWXiRZmdRnCSKdWg9q5NPh4Xb3pX4mRzBG8XmwgKEVoYBAr8up8VvSb3bHKPdDPJ3ZdE1qNm7YM3E5VZL",
  "key12": "5yTEA1PVexzTNxSQkh85Xty3vSEtxoPzU6gyiepDBqveQ8vNWLqVofwAyenjSf3jtTDKYtPiMd7MDB87E3hN453a",
  "key13": "2PeXfqv6wiYrRanjKB3N4BxmxeVp6JfSuxHzjUvsD4iLqCxUV3ev1ZdFWF1rEhwDZJ8xLWBhcUzWvz3FSzHJAsTq",
  "key14": "2VMZHWR44RwbDxAhTnEi8mZqwLV5CQ1J63c8udVEbKQsfW4BKpvhmD2hWFDkr2SW8MyuhMR41QssYWHc384Xs1k4",
  "key15": "HqJVrzrfbH9riYC4zGsNAmi6ACtiD6fijpjLse1Ys5rHuKoA4yNC2gRbrAZxYiWyYgnKsApiBdwawnR5dCczi63",
  "key16": "4NMLVDsUFZMDZGehn6htkufKE5M8FzZXpLdayBaTw9d3hEURDDPmK6zMGXBFo1h3XDHXH8XYeoaePTcHKzCoLB7i",
  "key17": "UQXWcg66ZsoT5np9S8NsTwDSnTGS5w4pN4w3EsxV6yGJqNkyhtDNuSDnpdEUZ4peoWNVmGKy2eA8Q3trMGpd9xS",
  "key18": "8gBoD1nb9vAb6k6kRbQ7id5efSU5LL51p5ECWdKc4S1RBUetX5ottTNjPUw4vVuuL21KNV4RDkRWUfhkpRXjfcE",
  "key19": "K72KRHiEze1hAuKg1cnYMWgcbJvb6GJriLrmi1hU6Hut4NXdNBLGU6xZZq4xepkTpVdstfZN7CxeYyAKn4NfpSd",
  "key20": "2Wgr884rD29ss8qqGkuyWbP8bxKLZaS6AALyNCGHWewEVipEMFwtjDzbL2aaJxEDXG2t3azaESayy6dEGBCGxMm4",
  "key21": "4DwioksarUJQk7tVr23n88ziqZZdhbLQA1pLQquSrPTL8UvQDGFMcDC3oJBC3PQVsToUXmBegsokBNmxnLsKV89y",
  "key22": "2f9fdMYyPfyJ2LFG2ykWMkuxR6aSJcQguCWkzCJaoLmQYibu9crpQNYjPHdHDfPbPKV9kUGjP9rLqKdpEpCQ8G3Y",
  "key23": "5dvsTsyxWZCEpz2VZoMVoGYu2gXqRfMieqJjNNHNvdZmXy1m1sNAHuHzopYtz28yGwusZs3pBNPEEHWi1UxEqFvq",
  "key24": "4aWwHuZaqHveewYzrQptrPcSqWHP2tn1XyhGPXQT7c9Dax7hqcRWFG1aaDEVnMFMeCtyAdyMaKajX57gnxcQCtq",
  "key25": "2AHXFjVqaESax9BR9gQ7uKuoTeK5VDZppN9MWQotJ2fmvNYvpyGVCtKzjwCC9ev3kFtE5FcRHp4JKpZSe6c97XAp",
  "key26": "5FW78YcGuZdh16vE2UTcopxndhR2BnSBoczbCHyaSfL6GUnv3jVhntoKz4fw2rU74rdGfgn3fwbjzrDYTziQpvkB",
  "key27": "26pq2v6bxhbGh4mZmPF11QGTX5EMT4jw2BG16kWeyXp6JpWMfDeUyRSLQjPkd5jiwQMiBtcPFQgm6maLJtYujCVP",
  "key28": "CnYXYy1cUSFRpazErfga6URmsp54WR1iYS7YsKgG4A7LF7RhQFbxAs695ncGJr2yUEWDvJZqq8gAvFqfenHsY5u",
  "key29": "2WgKYokdhcJLt4GZULqezf1Y4CGLAGaLb3hjbFcGMP3dEJJrf2f6uobHFFJPn6T3eaKBrBn51pmWVxgDqExCSHjR",
  "key30": "4nb9z1TNmLWZuYHAGqUvseiVFo3mb3DHycvgQaAwEJHD698ZtFr332m6VjNc9BHDExVT7Dwrmeh3VcJXtcomhz8E",
  "key31": "399i2cm1sCdWHr89E3bPFofzLRXCt8KTFcaTNhCWttY14W77tfR3StAmk52k9bN4RuDAasVPff1PjhK9RXgHiCLB"
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
