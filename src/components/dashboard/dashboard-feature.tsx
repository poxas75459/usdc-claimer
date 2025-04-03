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
    "3MKt4h527xAU1E1oyrJ5TecMfgYP6dsnM9RSPjxsAmW6nEF2qmU3sMtf24uBEVxkpHUVyZZkU9r49K6aMcNCziB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDK9hCWwgTEpa8xBeHk3vpHAnyU6tD9g2Ekw2YtNYUiAMNo99W4WpZeUsg6p1vSaUZjsuHznp47PRryxmWFyejp",
  "key1": "Lx7DFaHfks5gViFE9Zy2iqmnBUwjm9A7sNZBkJ7sykRoW41C6mZNfCPbPD2F6fCvhqbGEkxKv3U7Qa7C5rx3dyw",
  "key2": "4xxWDneENkxUXgNcCQsagu1PfDzJKuCV79nzcGqP7VZHZYe6eJz43EGZGjSpc8uyN6wd6esecohL5rEN2qJMLq6L",
  "key3": "57VHDzLCJVSFi4DtGKToPDqGSYjRAXbSWrhEMr5wXVkjGPPzzBNoBz1di9ReeBmmwqURYRejSpran1m43zkB29aP",
  "key4": "4p5Co1RLueUpVNybVsqid1WHdo1vWfGEPw7PxzdcYJ3T2SMZ5R9LrE2MMsnwJdz8EH61VCdFVEEEQoR1tGLTX2ep",
  "key5": "3s5ahsMaDhwCEf1yyg8c2gDDFWMpCJxKYgoxbV8g5ZP8v3w5H6kiwB3HBQtWSfmRQ2TvcWagGRpqKXZjgsU9TEhd",
  "key6": "5sjTAbExa2Rwg9JigWxQqswQ5aRGS16o6ZgrmSiJMaDjSm6XC6m7C4XF5fuEVefTpqKT716BZxKt6u3cQu1ku6fX",
  "key7": "2YepgLRyPu4xnrM991M6ayxgSzV1Jh36rn2irwE384afnLHt7HuJ18FHhcpUdTaaU72U7YYza51MGqvRnnD358Hu",
  "key8": "66tDdR8L81ANQQRtX9Hp8cPBVTEHZgYgcvLkWHu37PcvhijNhN9266Nr6935iRBvjJAiiQFoZyu7f4VU3ZHWE6SX",
  "key9": "527pFbB54Xb3iyWfYumGanmrkowCeFi2w1TAJ2zkJeCMisY1xDkW1GZM1Yo8sbYibXv9U26Ns9uzdxaGK1NztLmT",
  "key10": "49rQseTv5eZcBymhYVX1CGotVe1dRcruJ5i8NeWycLmm6iS6272rfeCt2mV894iDH56G4UmiLmY9BLscZjU6XUX",
  "key11": "2jjYcX7kSe9SL9QEiSkxjjJYoAXFu2XYXSjHAzKxpKByhg7kPDjadBDRTHU2MjRQPHEsYabpMykFUJ8FxmJ7DRwA",
  "key12": "38XEwEtoHhPRm8kmQKxgv5x4X99qjaYZ4zRMNP4zr9pczcVfbQRe6haubwJ27booRPfwKnmkdspqhkphv7hmgDV2",
  "key13": "4nnJfr8YaGGzBwbTTwK3VNJqdgwo8oUbHCLaCcanEoSCLUkumJbHWHcgeC91Ko53mw41ApznbHE6SFjAQgFm8ZFt",
  "key14": "2z1o4fw6L6mdUVALqCbdmuYjzzrWPQfHk3hMzc8muEq4774WS4AH9eRCKdQqU23dExaPir2vQXvbHUgrwWitWjjU",
  "key15": "33ndVZR6MnqeJHhxDaKP5H9GLqG1Gr5S7Wf6qNxkSFGUDZHQs92E8nJnrAxRW524931MLNbcHqJdxP3KgVJ4ouW5",
  "key16": "3KGvmspAQqjbPhuVq21qAFQXuuaXvpNfXsKsj1CgARbuVKepGK3BKyM3xPpaCtbswtzH5VfE4CvFNibqPQBfoVcj",
  "key17": "yswrvr2XtPdfGaPvSHjeftYdb1ngFrhTeaHsTfQaQ3rzer5kyrnFmMLgGbPCjtxZoQqiAsYNFkUdCd9EjTZcPkG",
  "key18": "64s9iSBqQtNhM121VoHP7mbX6wUGkud74DaZcZJGbQkYGkw9UUM9hfkN7eYwxwZz33sPQv4S6TsfMMP1PbaFwTJy",
  "key19": "58CBCwUyn4RfjmThETowgShiMSxQ8KJKoVBKF9anKrzrJ3Cu6h4RqxUYBVtsJuPA584X49bSrs1kHif2Kdpp2LRZ",
  "key20": "5voxvt8FEfXoMGygzPtE1LzcpAPTNfAXzoPvi8PpJ4Sc3zKhpyG2CsdryC74XLKEcG93P2jqADuxFnQahLbX2Kvi",
  "key21": "2uUUXyDoifUXwb7kX7bfpbY4K9CqbbDX1MbHE8M6PCDRZEgwC3fM8PcMrnKEqZNLBVNaZXgBEgGhC9AJUJYLbxY8",
  "key22": "2d1neu8Se67AKZ3KhBdhSgnrbGWen9EWddPca53xLD9nNfWKHz2ELTL88Gh49vB3Mw29ZJ29UWNJsXKQL7C6yaEW",
  "key23": "2AFAVn6i4gghwKpD1ynfmR7x9LKUc25BCRvV8P7evxFU26FTP29KRUkK3KUu7Jz46PrcfENVcb1oe8uHaHURvKmH",
  "key24": "NmQbH2dqidBeoQhta9o9NShAuhPAJkdfRLUzezzo7BWb32MK2X9BRR3ot5aRPnXGWV6xbQy3twnZiaJHH8cBRfQ",
  "key25": "3cJfR1qMbxLZzTeYY4AGNjBQYLCyBJ65AM4istFWJWjtUnMFPnP17DRoPk7CHSQNqwfxHKghCc786ot4ntQPSU8j",
  "key26": "4YHqZEv5qpfFvH5ByRG55HaD5yn3PsiorW4MukL8vfudEmPYGGHJCvb99vTgUScpFSKd2Dvk7MWD9BycaQPBKeNz",
  "key27": "65muUkutmMTSaXXbHPEYHvm1HKvLvjmArz1LhL6bz7rxJhQUzckPrSkcKsU8Mcwc7xYKfgh77jz5P3FWG52Dr3ZP",
  "key28": "ErbUtr5tXKMGSP1exvCE6dKhoXnfuJGLU1tn8aN9yuaqHcSDCRmqwMjnwTkyCd8SmWu3tubmtQ1VVS6xAFDbhZm",
  "key29": "f9yzVSDJ6rbwxshzQ9tbg9fjwfWaCs2WPPYB7rn8z2mFJzgZujiinLzyT6ULmCYLTpAvcP64GiFY9igEduNnf2y",
  "key30": "2HNohsdbqKUFG1Sy5sZVwtkxdvevTkpp2d3LNBKMxL57ss7cRDSVZPVWisKdsJfr1avqquziAe7RSniCtAQ2Txbs",
  "key31": "5zbBFsmUmK5h4cMXeAGv7m2pns7K5ud33oJF2MS5H8sBzWaU1n9pjbyRnW9oyzVfEbCVAxUBkP222p3FXjDzvu33",
  "key32": "5nivstbSDmr4JH7RJZCjZvbKDsTzox3MMZQkuZaHMKAvUyMd4v8Hntc2x7okAMZ3RH3pvEeq4wN1uDXoh98Q3dtR",
  "key33": "3PZZhMj3UDGTTwWVGcboZsLdxn7TeNiLp6wEdaAGnwefvwFpXZSpD8XGYpbnXc75Jfdhp1ZQftKbDF8YzZVFEdLd",
  "key34": "4xpnxzLcLENGwWsJ7fdb2Es44jDLRvofTc6kVN3bxL3CgJRLxuL5MnKZBsYb4ihEHUX1HsCfuXnavzdqGtDWNcVW",
  "key35": "gEge42MvpaErK9kP9sFxp28PEpxmH4opMzsGfC5bvitCji76kbMvdHstW2tWuwy44c24a8fxz78feYtDTCnZp2k",
  "key36": "2kwAvJZMP74PU3Yw3T36keYjKM4XX4JbcUWT2ShcGC2HXZnQ6w5G6mn67u9338Qz1ps6EmvPFeypnGup2oHdoCjt"
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
