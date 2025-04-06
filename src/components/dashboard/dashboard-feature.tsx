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
    "2dM22jzAYmMPybbZbWURkBdjq7PTzoNYeUKDh11BqRxQURVnjoYA2opRnGSy8kdWFQ9z7xK542EMERz81HbQTrbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4T87qCPBi4AZYWmUGg7Qq82KNno58KMAERSfTFgZp17Si4Nm67KqWq8aTLZ5DuKRjD3W5w513UnQdCDmmgPpLV",
  "key1": "3udYyR8PwzbRapXAs4MzJz8XmDovM7WRir4yKE7XmhbbCqHDwWddAQhGN8kfsVWroJSKtVZsc862pc9HKB7hHpcW",
  "key2": "3Mrcwie6cUmHwPZsvBKunbuJwCkcFBdgotsDqGX3ws6hCetM3gLtqDiRXEZMhk58WiHSVZRibNSd7a4SvbJ9QnKQ",
  "key3": "4eCMToPM8YfHCbFq1JTWpRsMpFZKzZniXrz2WskAwTKnB3a2EDsXo4xHL6GMqi4VQa696CfiJa38qmXbWxNuaXvJ",
  "key4": "je6s9gdnwjB81s8HqUqHKesoQrGNRjEXXhmuL9NFaK2MUYNtDLFoFYNZ95s6TuSFrDKfHygnZEzq7F7b2p7g3Ku",
  "key5": "5fydFRCF2pwfBxzWZBCRvtXqfypoEr4fv5EHFcnehSpejEzcHQGjGWmP7tx7F5zU7vmDgrvuN446vUh7Q5UmDvpn",
  "key6": "5AKAtDLFhCFoQQcX6GpUzNUdQW4gckLYFvjFDaemfj9yCq3Fpm8zM5dbZFkEq7DGHAMQbB3ohjXzpwBA4aFWrAFE",
  "key7": "2v1Xi6U5562xFGpoDcYzcG4Rf2vtEakBJbgLgJCMGkh4G1XzBV9mqFQrcJiupxeB1wSU2dyXxjD2vAfFHfeABoWU",
  "key8": "5Q7y88Y1gjjF5GYqkysrnSu86KaLk8uwGHRHJ8QBXrH5QLyTXMXoDAjzQrvoLWGtaig7vi9bL2nGvStPbpGYEASs",
  "key9": "2cB4bzSJWYfkhSXM4FPkfqaH656kqw647KyWgdymztDBvJfnBsNGRq5FnbMeyRYXFx6ThbzNXBB1SuThNnth1oef",
  "key10": "4zQgjXVPBTUyeDHvnmA3jRyS2bZcdxAvAo4pr2eYuhWKKnGozv9U5DNbSy1cxDYsqjWR4fZQBBWsFtarjKZs9tcN",
  "key11": "56RX8Prk8BnpPBS1yqaSkAwDmsCx7ZmP4ApUVT9C9jej2K4wR6fKJRe4oNA2kmotx5su9L83YNw3hjxf8yL7wnnk",
  "key12": "dZvR24BtAJUtpyDZ43qWjkyndqmMfLZEpCZs29sJBuSRF7AAfSwnzNL955VrsNXr15Af9hTG2yyaF1eCDu5w9be",
  "key13": "22pctqopnsX97Grvdbb7qGPf4iG51EjTDSbxP9Gvcm75wxjPAFEzomtgzmHVEJF93SdxoRciWUit1aCNMGZ2USnP",
  "key14": "Y7TkPqzmV5Q7FDgrAnVYJkhFaWevfsT1rsYzU73KokouZZQRugA7XeAgukDYn3iJjnNCn7Gor4d3hiQV3KDGsKf",
  "key15": "3VstKFMqMeGhVF49gF6aWgwF6sxhuQdW7iFuoC2pjj6zMhm8AZqwKdchUzegeaHEXkJzQk7TgRxo6YiG486nSbJv",
  "key16": "62g3qZHw3kLANcaDz2o3hx68PLg4bcUZFbeGwhPLartypMXvKcCqQHiitBu2gjXi72SnYMVe48fwAFzzc9xyMmKD",
  "key17": "3HDAWdUvJioYyy81hxs6EuX6zLbu64Tz8wU2Grgd7wbNSwdT8FFhYL1h6mZCVC5NJe51QaP7AJKYrcPBcMpCJQdc",
  "key18": "3ZQ3yNnXjBXsZmPuEwHNE9Rd2xUt1CFiWPykq4CtrNpe9BR6yq51HrzhxWAVJNnFhs4oR2k97rNggkg3bdfCzJ4Y",
  "key19": "5y8PKQ4CmU5KkPjvBKWFbZ8HpLqNBpTz4w4ZzVdZGaiGn8XeFqYMkKADZMBdCQH4KmUSNancy3N48MMoTyoRyBWu",
  "key20": "3G7C1jUDCmgtYkHpqzh6prB8Q3qDqWb1xC1n6Wco9WUxHVLpkapmnAPYdR8cEKHmW85JWs4fFt5fTWyRT6Zh6474",
  "key21": "5Ut2mp4EwPGUHPjhsiKPtgQXpari6ExZaRfmrZyhtvngCYqBdvDYGaPS6iz6W9DbkaECPigEfPwpMPymU2ErXAM8",
  "key22": "3U7yqQbuy1hwMQeXsgFo4RyHTjJZkBV6UguSqyatsQGJambqkvv74FFeeXrBg4Ehi6PXAudsPXzP92tH1F9vLXuZ",
  "key23": "2cZZd63vmKZ4Aw1Mfbv9jsD1yXVQECqMKqFTMGQGQwR4tbMyFK4CqZYTqCTyJwAs5VEEwWfXzCkF1FLDmQWe3eF1",
  "key24": "sJyvmfosdt9g6uZaJEg5nhzk6mCdKpqcg5TzU8s5QvHktmp6qLz5FdDGYHmwPp4ykAbjDVVAAL2HHRUM2wVLeok",
  "key25": "3iWiiHLx3RQmQmNfytoW5a2vK22WQ8KTFu4p3cFDRnUM9dNanUQCjfZUht3UMSugA3qbTRfYtijKLAKjdNzuv6xN",
  "key26": "4ABHNXGV8mVPagsMthdZs9fevapY4QLQywBqp41nNSx27SfKNESCekjBWw3H1RbLA6kF4dGv4mCUAJic5JHrB2Sc",
  "key27": "3v9yQYF2YcmXdrHkvVxzA37Vybp3qHo8g4jKwNpRdxafBoFXPgUkcros9KVQuSy5yacezRFVonnM15LThMrQHzZH",
  "key28": "2ymphkct6oR4meCGFZTqzwqzjoBWFnx8KmmCXRuEBdtQKKEL2CvMDZoye6nyDkAXQTvkihcGo2YC6sqHPUA37tGe",
  "key29": "2nmaKJRP2rv7v2Sb9J6geVQX3M6r3nF4XE8QqJvc4SeUU9JM5X89KxbMeUQn1RNUqEmxc4QJFvwBAWh4Fjb1j3ML",
  "key30": "4V2KQ4zwYTx4tJMTM5jdtzokfHVRXtVj85jmvVQuNaK2GumHPQbjQqCFHFiu8kaCwoqyefPJCwQmkcn2S1DHUSy7",
  "key31": "2P5U5Xuu9edaJqjTtNRE84AwUo5dr5YmY3RgjpTXfoN8gcTnmgGyVE8w8UxJtfWHY7nsLrJHgGRkxodg62yEgNbi",
  "key32": "2E1gFwvhxVkYezEioZEeowEhSu6V1obpXsPUFzzQsB3Ug23EtmUwoNxpemtyoYvnmpUDrAXzRFJsCpYq2mpocjFU",
  "key33": "4qNyyDWUgZACGgMtyKKrVbLdfAQ5e3EpXxL1YWkAJAWfU5Z5jitcbwyy8DG35w3dAWsXMcH6keBtyf13ogXbYwVY",
  "key34": "56dWbsWeB3XifJdvMVxChy1E7ivv6Lt9f1N96V8nVW3meWzTozYL3ZrkhuxnxCwDu6tiSk7h1cy68iTw367tFPXJ",
  "key35": "3sYfrvzDnWucgGNBysYTZvLzQJFArKYVUtczC22qYZddiFV9cZ2F3ZmjQ57Lzk3iZEmE9DVMAdC3gcyRcZPVrXTK",
  "key36": "3G8vqreGprrKXEzLJzQtSuFt8i9WxNweRA9HEqXKwFmAFKPvF5PWVwqskiBBUKLKqBK3QJerseRKqS1XxUGdh7aZ",
  "key37": "fXRt6G57fEAkb1RAFQJZ7zY5iNuyuj1brQK2MBM5jLpzTx6GmSAprfdvMxSkiWbWGpz6rJwmG2NZHY683UfqJ8f",
  "key38": "4Cp1YjtEhDZCTDTZpN3Cx4YJceRP4zHk1MMHMpz1JbAXahdx64ybMasdvoYK7VKrN9RSnca4yV811o2iZRL3WDSk",
  "key39": "5Evkga3KZzn2UY1ZoGtaMFJY5zeA8xni4RJ7PaUb76TXquLehqtPVVjwTqwR28oYtrDPp85nPNKcoM12KuCAERkP",
  "key40": "27qPihKGzhtgJyFe9dVtYbuaRNZAbreSXTHUsyWkTwk4iHPGhS3uomBGDyQJM8kW5SuTcNuSQAHHut3vGwX1kpPS",
  "key41": "gCXGKikRYVsjcy3VCf295VPUSzqCvkAchFSYLct3HMgGHC4Q7NUdh3SGwQyiC6fszRcMRA7aUmdcHSA7ykVGbXD",
  "key42": "4ss1kXxeSeJYzPbtZQhpsGgDFvVXX3vw2Pk2Y5KV643TXBP1c9cDk9h9UQgogjJdDEoV8hFxw1uVLXpuKqy6QxX",
  "key43": "3mhqVTTx3NJHkMGacD2khTvEWWTeRh75Sy4ccvCADmVttKYArbWYWDNwpDhY2ofXeumT6pg74XqSnNbj7Cy1sX38",
  "key44": "4fVTugMznJUoEDfoquLaVSYXSKjJd3DFa65QKiwUMNdso9cWNzgwoEbfwvAiMHVHzW6Z3FA9Z1g4hrHqbxdfX7g5"
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
