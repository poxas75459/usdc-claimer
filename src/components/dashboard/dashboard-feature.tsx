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
    "7GKvAqduNcKUX6nRRKZREiiVVMTTNTMWYUqEc1rWLPqvsyZRB6wCj3LJbDDXp7fnWgKDStxZDXeaUcWespjqtnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vhoc35frdpAokNb3MnkBba2ApY9oVKMAD6EXiAKWYFR5dqF8d1hRHjGV1tGN6acbr5aDRkULMD84USNcxVs3bbV",
  "key1": "34oXD9ds3U5cq2FDtKwTchhrYv5ZmFovQrG2QYvCzwbrLkWh2a3ivKh3AmtDFbcCbzb8NZYxorZGCrMWWMBoMhda",
  "key2": "KQ3tthKBq97gMTB9bkKAVVwsjdDxHWQSQGktU5fdirY4g6JwB8VMPNPf2cdXY3RWMh3XgKcDRfEp2fRun87SFhc",
  "key3": "5n9wa7xhvZ28wTqcybd7gwYEf89ysrMcZFasm3n29Rh5Mpw1jJDoF3mosDhbJNQay1YKCUt82yaYX55P6fjUHGmH",
  "key4": "41yySYqQ8jDbec3rGFHv27oqrTFuSUwFEQhUxkGKN373qBKgDhREYCHHhHxQRR2RXzJS9G9mJheaHGxWx4cNWhAF",
  "key5": "5xpuvAMYbC77WYayuCQ7gxpxm2nyrcfBaDYKvrY92srfA57QMJqV8Uo5y4zV3pLH3UeP8arh84hvBZxVgZD6sgei",
  "key6": "5QXJAkTr5zL9G25sgnq85yQgUXxokTmbQ2QrvMJrXvEZrouSLZW1zTaVWyYx1PpiCVZFFP9CccLKP4n2VzZsyXty",
  "key7": "4UBBuSsnW5AoQArXaoDUBRFCsHAoPduK3GzAY22yiMrHmGd9joxzDZ7US1b6MnHpV5fUvxDPR2xUxqMMUN1MuDsJ",
  "key8": "4RxPGoewdNtca7ucG2mnCc2GbkYhzACa73dBi85aKJHpj2Vm1bwjJNM7M6mfr9sHGTa7fUqiwtAjemH91ki7D4yx",
  "key9": "23YSfzafACFz6mG8Gh28mqqi9bQxCgP8d5GiMMQeaA4xJib4Zr8u5VF6aa4xkrRTbsHbJkw5HfHNufpjwAEffUA7",
  "key10": "4GfSrysy9mUJKeiRhrv8u3jiT5dMbKL2hzm8niWhevYSs8duRH3gFaAKTfKm9W9ZNCK52cw9tQWqTeHXX3faGThm",
  "key11": "3U8MBBexxz6JVjQcyM24rVSmkUYkq8SK8r62wrrRkZY4Hf7H5SkVCxUHzQRrVek3Wvw9ZNdojh7qWFaDD9fYegB6",
  "key12": "4g88ZVz1iMmNQcaVd3UCAC4zVrFesP5zpMKDTC4rUQksLEnRcqV98M5j2mGRi637r4jFfXaUSqupUNjp1WmhjK8R",
  "key13": "61wVndmzddGWGCSrZSMooMegGiEc8ghLrHi4wUwgm24PDSnX6utH2cvKPWt3dYWL1eG2hHcAb1SWRcig9dJng7TJ",
  "key14": "3MqFwe6mJvgDsizuZNxKAxszqUY84SsTsbVAjfQd3MCecQKuAupBfxf3TX8Ee7jDefusNLqn5LPaoeDA6QmVBuNH",
  "key15": "4aWv8HP8prMpfeqnqzgMiMC4phGBvQakVNLu6RoLWY8JFRWLXQdbgAaLZbUXZa3mN2qdRUvAVNeysCY7AAb53z3Q",
  "key16": "5vj3K9DfvzT3b3XxevaijFn8QJDoEhrWabsoMT9S2thvFh7JpojmV1SUVYB7Pus4j6W21ezTNv6NdHjfqp4mzhEF",
  "key17": "3wPPHp294ptKXLP4SLj28stNE7uFNtNyW1XNtTE8HenqLm6j3Cc7peoyraCPeEWzmETk9iuny6asSe2hQ4yiVJFi",
  "key18": "2wsVxbMQMCanca3riPnY4fqvG3bfiyR8PhmAkxxocxfQ7DTmroVPm8qtW8PcBZgNZGJgQ94t2ixF1akPycAEqahg",
  "key19": "37MH9bpVF6VTqBbPqJbHNeEfvNqVvoAPNWSaiwxk3NquFVVempgZardeUCDshAoBHqoCyU5SBSXdg7684EsNNDJy",
  "key20": "4xmgQVHR7GgTsnCLbUoQnG5WcUoqtsVBDphzoXJs8Y56PsU5zTsmsU79teniBJvxARWurXskJBmZsjiPGG9FkvbN",
  "key21": "w46Vy5vGTatVQLjXkB22UCo8jEziJsDBhaCFAZtksS4DvsYAw3whE1abz8dF2Nd1t2CarteKTUQfHFgXJYeAefb",
  "key22": "2tbGmtGh6FLeqNYqSvWCCMqCMmQ9r7CJABWqgJ9tQTZh4PZkqCDwiTUSdt9wwjMVLSxYe5cZMPDa5DLsGyLV2kUT",
  "key23": "44DcQFLXBg4pUw5Pbj4xtF2qgC5Dwtc2XvyKbboRJ4UEccNA6mqTTPX2TgzpjNNVPBKn7N5hGK2x8U3cDfszvJsR",
  "key24": "vb7F9gn811MLvxucFacrpbGP2gqCtBJkRDvBwTBNNBFqLxhfM17A8swqueEeuhgC8ChCAsVMRLxTcuYbdi2JqEv",
  "key25": "3UDsKCY6igcCySqU2MfsjWBrK1619bGQDzbmyUveYRMkGALkhtCjuDqoU5thodFWsqgYEV24DEpFo1ezANksauYN",
  "key26": "caxAUPHtoip1WBsUpjv1Cfudz8W2EmfY91AZW7Qaz6pBSfTtXQLc9h1W7Swwa85Su2hJBXZ1UGZ2QP85EEqqqai",
  "key27": "EKLMBgVJH5VPLsxaA2peAXcmBA2sPCDiZJtrRRSAyfdtkFno2cAy1xvMdk3ndb1qHWU6TFVGzWLZQcsKyEUPa1F",
  "key28": "2qArKsX8R4xEfjdQZSra1gaEYkV8ENAmR5rqgeRaUzDmor2xtAimT8FToo7EusnZgE7hrnjyut4eMoU2Lzwjm3Ld",
  "key29": "2gejGaXvSDQKPTGM1HC2uYxXXhMYMYR18zuWpoUkt13R5ETLVzGf1qddWUBNeorY7hkbgr31kZPqFCHXcP412e2E",
  "key30": "gB3a3wkGEdzauDrhcmgtzqVp9H3T59etugSJ6LCyy3XUVuPrpNYhtboCSBCRaVMnWWerokoZPKMKswCBovCmK5A",
  "key31": "28mZkQ6SwMkqjHgdZb2K5EgMwKSjMrdhLGjp8xC15SAyrV6E4bDRXSRpLKT5wp8AByZCVdUpor7kpUyMfvhQkoDi",
  "key32": "g6eubTaDbz1cAaKjMD5XEb9Zu4pjhSVYz55zXkEuU4Jjdw1QhTUbGdHYhQp6267UFxHawYCekmE6xhyftQNvRqK",
  "key33": "3K6Wtics4Z6VbB8vs4f1TqPJoyUeAiHY7r2RdoxnkjxqWAfssPNXoPQcKXLgRLFz7yjRKiUPszHwbD496eGvLeqR",
  "key34": "4fqTEGpaTNozBorpQXEQEn8tftAm49zsJYRpF1Ku3ayTcQniEs12HZxf8CgdLuoM6VMWnpaGZPyrXrrYPFuqLpcF",
  "key35": "2psFChDr2K8FcFhonHHBVJyQrAftKEcGuxQuHDD3f8ZT5kP8PvB4rxawPxnGcPERkr5F8S7KLELCfk6LpwzSwvTU",
  "key36": "4YEoTUtbY13ZXTY7kWD2Mqu9sfEjYDj1Yvc2d4mSLyEgtycsSGaa4BZp2zK4dTBNkGQdpDzvMyGNGVBa3Qhf8eiF",
  "key37": "2JzHLg6idoKDmcacVX68tuAQ5HYjhsoRRzgwhdzNQd4ZNF5yiy3EqyGoVerfQvfDsRf2MScx8wx43Loz3usxNtPv",
  "key38": "4iocoRKBN6Lb1FkZ7LdRETn1sMqHUUJSJtxKmH9p2Ahs22LT2xAyMtHbgcU2QuiejYKaqJxTw9HjsKmVEdd4nTig",
  "key39": "5CEJLTmswYtTujAEqfg7dDiHvQVby8WvFCL9p1dUpTToc6jaAxazCPhbbZvvvWEEvjvsu9SCEf5xB2F3UunXRn31",
  "key40": "2hrsfGYUrkMeBBqKZ5ykwqmJFmjoG9FfeNMwDNoXUh8czrBM6Eez3pLAt2H97A79iCKHUzhJtvbZ4CGhSx7pi4vc",
  "key41": "3cj4DCykCPwHu96dpD5eVbQDtKNbfbZu9Z8JxjjAfH8XkqMuMwMBkE9H1wbu1aa2ffVJgDm6v8a3YfqxDoYiJXsY"
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
