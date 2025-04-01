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
    "xYNDwxmZhEAhDj2zQc5Ni7PGgJdaDkBjr17ev5GEtcu882t2phhQF2yD2Ut1ELPsvSMGu4dYFKPfSoWjQyccaH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J7pCbvjnPDbqGuYSqfrzzPVQf9wo2hkWt7Va9G25jVDFFpbFz4sNXCLkxHgbkG2CqpYpQRJFpz38qLnbyhwMhBA",
  "key1": "5utA2DDTMDMpnrKDernTGSU7Nc4JLNQM2BdYxiPcCvs31RV42jKLe96bLNisP9F1bLnbCPb3UM4jwmDwFACvZuXR",
  "key2": "2MTok8r1Md32uSDzNc2LdEhEpL9SFGucAez4tQrqNfmJ7wSaS2m8GycixMBchULKyiczyTqQM98tRYuXL2ShVXke",
  "key3": "2USuaBiJ7Y8beRCm1uXSrGf2GRCReE4kiuH6FqMGpZwfRJZUT4VZFSLTa5d2RkyFW1ckdgJ3jaEyMWJYCgeSo5R",
  "key4": "2Ah5HB9Au2BYb6d4VaQYUwG7bTCtiYamUerkfSbgV2h8oYupDeQ8MY67D6zYvLQ4dvQyXUZo5vkGst9n34GqPr3h",
  "key5": "2gtZiAkCH7o3otM4qeu8fJsYk8pPRXkd4tcbTbsp1SWAEL8W8uuFNRT2nuQeeX5AhLd7J955KcRFmaRkA4E28FeL",
  "key6": "T8hZHbw5ZYwx7cQdCZ8pLPxdMr8MYd4rUpz8TQDX5UxpfNRhzbMfL48ngYxmqhnBjds1EtH2MAS9e7Rw7iNeV9i",
  "key7": "4WNijdxRNtUfDpudmqUjiM9P2kFX5z9zjLStLZJoXKKtiK8ueo5dVJJFvGyeFor2iTVL8wZ3fUp3D3qbKLzSENqu",
  "key8": "5dpCN39ya7dHnY72kSvHt1csM5bEPFxGJoCfuSyGmA8VohpVgbPPXByYGza73PnbYGVb2VBtvgyd336JpCF6cT1S",
  "key9": "5adS7PxnCfbx8PbZUM2E5qoJTqFhVYbAnrys2n59W6cUxThzaECHNbUdT5N8VWKve42z12UxRKFTbGT7LCXNumfH",
  "key10": "48gnEtpnjjDjHbdyUqoCJwcGxPqkuMc9mNs9jppSZVJV6U9BxzhdU3kjYrWBKWrFPeA1jwSXdvPp6MLyhYCmqoTz",
  "key11": "2UvmZ3SgWbQaqvRDpihYbQAnoPdnWJ7cDCUSQ5PVNUMyTZhqicFziLjWAUUo2fxXvDdeiQd6qxuxpD66Ct3ML839",
  "key12": "4z6PkT1csMWvWdCtUSWycX3FnjKTQQ3QPruScqjix7UKj3Xedgkg2fgghDekhJhr1PWNiGovbvRrTAzySyRwdYm7",
  "key13": "3TtuCYrFHW5A1WVz3aA11zAxuzDw6bVtHyCsVAY7CMrpfac34KR3BHRauAYidQunUasZNGm9GrLyHGJx3AiCHXZZ",
  "key14": "5XL2xNVYEQry6KMLDMrvfmGbq4QLhAPdaURSiYNMYQygr7BwN6XR39LW8fFrgkjXXubH8aAfDK9fSTNn4mNw9QSP",
  "key15": "462ccctk9fisXnKvYKequXGmCTA9R7ATrjyHfH82dwfGQYmx3kczrq12rrdpspS8f2VRH843VXoezmBhoRqZC5NP",
  "key16": "3KuUmFbu78BZZFiv9miFx2RkfRmqTTCBHYmPfqyRLqSgnDpH16bLjXoXEZgGg2icHMqX8z8YFTGCAGsX1rgpeUVM",
  "key17": "4ysi2nPwsrBUMWkBHhLUE8neHFyrhUK3WANWoJUCU7umhGJrqLDAysQ2wY6Pg19vTq4sazqExdnqem2zYrJKDhQi",
  "key18": "54e1315Xprohcx2WBj5UVjdifjWByZ5T1JAW8haCRtqkuXy1oNbaRFZqCrkuF5dS91mEqVYBr29jMcZN4a84yVSJ",
  "key19": "T9HVNdNcsHQZ2z1Zt7Mja1REbUPwJsfSP4m1FNUFjYg1sEG8P1Q6S6aABreCoge52QSrDzpTjVH3sMMyW61jAeH",
  "key20": "5WdaMscbEWKKCHNWH34JrfFTGds7EsFdiRxGZYtWoQx9K7Zxjotz2Cn8GE4xVpvdCqV7F396xiBRzvsRrM23phLu",
  "key21": "Tg28znuRn44t1Ac6KyDsF6XPDtmT7j2HdjSJrGHRkghfjEQh8VjPNs2EzoznsvNBERPdShsV6EKeiByWk3KjinN",
  "key22": "4Hy2uK1XrHdphKChw4QkwwBtfdG2YSzWwqyvpzG7XPAEGE3jFNV4wqnNgNzM8HGyN56T6bXx3EHTcUJoxkUEmMPg",
  "key23": "5q5ZeHBQLKRz5RVGPTWpa1JvNBRosAVxQ3oqfrkLkAD1STadSwLG5RTALnc218WyQbSS8ijTtRJ21ZQHmd68bhVs",
  "key24": "3efzUV4cmDLR4Kw65Wx7juGKK6phYQNiUJiVNPqy53ANrGvGns7PqvkopTVBQZt1piVG1ycM3RJvFtvx3we9iqQ1",
  "key25": "h1zm5ri4XG2EQo83yBtXrKFPQ9vywDC7JfmS9zYCYirygFrkWud2EbznbBPvmAJeeFaxYSbEWzANFyXnEF9EuDK",
  "key26": "Ge99tLb72BLsJo6KWiEAmWYiEdJHLzFzJ6ZnFoihfph5NGAK35b547u9LbYckbCZdvtiZJxCQYVWAhwWxUzTPcb",
  "key27": "3bndta8nA4WL45338qtj41LZb3SBbqZWuiQpQdoDnTrQZawzHW3trAuR9gZFaGuYUZzjRpyfqDKGfeeUeHBV6aTD",
  "key28": "ZuXtyrtkLEsQbt7wMEqwLSUS4AcRP3SiDMVQB9yNgptmCGf8reMFAPNEnzu5FuhMk6cfL7JbJdFyFYJZMwTqqHJ",
  "key29": "3t3NgpEbRf9XHVk1UoLXDRmPJsX2hZ4b5K6cT8dd32TtjTMAGPVTkxBUX8WJoafJ2AWbA1CkPQA4NpkW49pXSxD5",
  "key30": "4PgeU2XHJeygPixGZScsSQRTFPBJnkq54RHEoMWq6qwmp1Pb56WGynZFSzjfsDoAuUYPTgaCL2Gry5P6hyYsnSUc",
  "key31": "4m5cC2PD4nfmXT4HaQmTBqCeTndLJhhzLN8Zxkge2vSecsx4GwTvTze2R4WhxTz8evX1g3JcSY5NeEM8Czt49Lgw",
  "key32": "3RWrPceiU9wUJyNgFFKbwV3gr978GJbozg65LaNh4xV6ckF68FyidWgRVypqhTXvyvezpfE2rR2tivs5DMZbzSoC",
  "key33": "62PckVQQuSEmrnUegQT9BVtvzzTG2dE5CEWNMnXruAQBQ86fR3saC5ZjmfRojVisddbf749sha42CL3DyUv6AVMn",
  "key34": "3jEAqE8AXLeffkji2rztyZEoomPtaaorJcNVmyZ2Xu8YomMYPCCZdVmyrDryeLNK2v3KTdnMpk6yyTLAzdWXCFxH",
  "key35": "umJ73revNX77AQUqhF5BiQiKMzmd4j6gz3qLsgf8L93KHpgLzG73SJ3MhXrAmKk8QZ2FH41c65PBjeif2uoKixt",
  "key36": "38L6amaL5itxzGdjxCV2teBe7tkJ21wX9nQre7YfmRYorRTeFmZA1jmtqi97QamzobqHs2ysZPUgqUjsqZF3NXNf",
  "key37": "PHVKrtQ9zAaLPyevcpnk6LqGuY9PjvTJ4ARsyU3LuVdhd5ynzbpyb66RAbKguJusG1QJ8WtzTeYvnYnBe6LJMDu",
  "key38": "2D57c3ECsCgeSm6eVcUa7pFJJN7L7M2Fe8GHEXMgQ2ZtD4fvey5FaJnS3aS62qNJVuCFM8zyubVKgoNtJMhKzKcK",
  "key39": "2NRjcbDdH1SNgTutCfh4MSnHWWDn7kEUjr2K1DHHwpqJYwJCfy9Uo585BhaUqnyM1KKcd3BWXnP7by5psG8tqjou"
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
