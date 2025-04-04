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
    "4xRLBMKb2NPYKGNGu6qYJZyAjD8cjUSjF9HgE8zGkbicT6ioKDMWZTmi3fr48sNgsAZURR6bJRARdrmTcxZ4A1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sc7nNNeNDC98ZtzhvZjD1HDxqHJjKwuCmHtAfYhAgrhnVDNv6z32RiirFHbwVjzRo9qoYuNnqX6wtYmA1wK4jsf",
  "key1": "4yyDMoZthiudqUEEL61YyE88WXvVd97vszyVs7PazL5FYa62y8ArLTvZrHq9NWsU3ma6CJjUbEHMhV8wG9eFffjy",
  "key2": "65Yq8SiSWMC7zkYTPnjJBhGcYx66dbmDQDNjDDEEAkwTQRAuisHp2JD3gXxmYJbpocb2xES6WR3xUaVuJPCX8TdK",
  "key3": "4AdE8Yp3AD4Y5DSkKNQp1Udk6eV9NxuoakYHQEnCK6sTQQUrndu94ZmzYjNn4sT55d3c4SuV8xW2PJj25XvhPUNG",
  "key4": "3LSimnGDEW6v7jw5hqXWeB4pauedvcwqhaV3rJ4uAsckidghEmqjJf7W33iedPGahCTQUVcJweBVpmFVKoD7tCre",
  "key5": "2aQrw8bgKSiL6HNox3vffrz8YczTumQoHo9m4qn2CEUVBPtT3fHrUu6tydqogPbXD318WmnYtp6cZFzbdz2seDrx",
  "key6": "5skWMSEtqT5cRowDY9Q3TN3Zkk2oPX4fHQxtkHeSV8u2Z6y7BjszxM4GCuqAUm89HSDKuvJkGqUJsAjMTcmNTDhm",
  "key7": "3uCCCee5RRqGFv4hZVaBgJqdWc76DfwfwXA3NNxZRKJoecR2nMV4Ka17drsBWKaBxhu8E5eDBrZx9AX5CNznzJeD",
  "key8": "YXKXbnmhJ34T9HfeiRLbRi6b3P94v44wAgUK5etieqRYrooBQ2mKqCVNBGJ5qV19A1FTr1VWm6xT9p89ZEZAg56",
  "key9": "2XC6nThcpgq2aFugGWjzWPWJE1d5DuEiEDjVG3UhG64MrqSh1NvyJHNJyi8y6YLCiT9rffDaJCbg6YDbmEKRkr5x",
  "key10": "BEEzWzdfhAQiMHr5RuuMrzMjdmq7w5id5Gd3aqGwnFkDH4pFvg8gc9V63aeQ9xrfWrdS2CV5rJYP6HwHKSZTVHj",
  "key11": "41Xd3hXK6ZXeAy7AxhoHG7HXVxcQuUsYGvkAQxGtcigj4nsJi2eegVKtWC1TScF5yeerxn1aEXUcWpybq2guA3n3",
  "key12": "42W8SXvudnCSLE4BZHKYaR76TH64srpYb2i6a3wKecbuaRkmEd4nbBUEbTvnn2MzPwXHzQxrR7Jz9wfHfwvjVgMZ",
  "key13": "t1xrCKntLoTiP6zbHVV2Pczr5YKSQwfmtcj7urHztraSP4Ar5ubrbJW2VevwLWEu7o3cueFXvQCNvUEPgXygc1A",
  "key14": "WfpHbxqRHvGyKKhRgUsZJQSibuHQgARowgcKV3zQAFLLNo7pEr8yJoSDVHZ2HV1kiQHaVw6yQaURcivjgwVEaVg",
  "key15": "3qUNr4Dfrce6F4jSkRV5pb5fQ36EuJAXzcrEfBCFFLRx3rYNbL5isu9F9s3MGAGp3CAjw2NKAHW1o7u4Ui5vGYJW",
  "key16": "5fv5StUVH1oGqgiRpgr25QG4gSCA83TKDhMEEk3AovCBZgrir1KFqHG1wpeLxLmKmor5h8VYw7bW7n1fJE5nx9WY",
  "key17": "2ZV5HDYprJFxiK99q8rdwi2jZAjCAUeGNLat34D6etXB8GTGbVjKEHYMxmHyvEU19Pf8E1FA2jgmsUPF5FJVwv1D",
  "key18": "27AW4hyUZp2CZgTYptxvMJJqSBdigVGUcANn8jHXH1Ptuiz8tWh2dxPBZxXetAqb16arLsvx16yMQXsk6ePkxYKT",
  "key19": "65rVxeuUwSeD8rXhEhzuMCDR6Fkem8uoHcujKjaUveVZSV4yjz88GLVsvPjATmNTJiKGj4N62yY4rPEVB86T1Joc",
  "key20": "2fPgm1NLiu6bA7tYjh58SYLDHyyTb39hwMbUKKumW8wp9xX7CNeiuueiAZcACCKREYo9E5PWBA8CQa2226nv4xZV",
  "key21": "467AcSzEQt9FisacUZmueJkkcrrpXx8km56riwuVE7qbY9WVemRH59gQBK8hcPH2wicyBxn8H7tNXWviX5k6okX1",
  "key22": "4GLcFSMcpNnFJr8XTrZ4W8Tghbzkb994RJsRDc6QHCyuXrfJa3XaG8XGieAWkfCgSCNJ4eiUjZzBvKBtrqnE6mNk",
  "key23": "EBgbGh9vyA3pjHHpa59UFDiVpuRfMi61CAF1ByKED9UqYZurTanC6oGLUfjYu6M2g6JBqxskEYFohsu3HKaZdYk",
  "key24": "4NWkRWpqkmgLBSQ6KTgKi5qC6r9E9qFVzEsiseTGZya39rvBbqK82LWaAAAUQNaEMHXP2dncjx6moQFmZHFGM4i4",
  "key25": "61EYsg1hw8ma5dUekdTjs7pDJ8QJcdHcGmamShtTvBZ5U4hhrs2nTgTPPknurbRHN1HiV1ZJKmAFc2Tmtaz8kirh",
  "key26": "2rWoMqwyUstWu3EQdRLQ3rPb1CTwmMS1tnaeyzFAuL2FfqfYTSYvBTicVR2aQP85Esa86H6a8kXp1RucehVGctph",
  "key27": "5JLHvAcSkhu7J1ch2sMet6oc5koJdVQsVTNH3njwMSUeZNcyLTEPgaq2ggbDS2HJsVR87qi1XuPN4cSBFWViugb4",
  "key28": "5oqRPmosBEFGFidPrT8GeBEHXRGbMsgXb4WSUaF7kQnU4FBU74EfPA8CKNh1FouV27JSTLvsHik6qMmmz2yCWFPW",
  "key29": "3VUGavbA5d66EDquBv3PGfx8xafrw7N9UDFm9FYWhHgPUMUF3hmubVrddYoeneFj6PJVDwgu9qvkPANDNyhuuZv9",
  "key30": "QnYwASVktVJ19En3L1o7f5LyWt7fd35rXkraUSGPeQGmX8bE8zJw8bafqpv2mHkSZqz3nZLPyDb5aeTYzUnfd6H",
  "key31": "6hUbt4itc9zyozgwCmKdTpz7uGFXD6Cq5ejof9JHwySbpVZgMgGAiq4gEC1Rwm1BgRQ2YwnpUjKiADgJNztazso",
  "key32": "8QwvqoRcQZSwichg5JDYJ7CeC1ri8uPKNZ9rS4VHQBTYaBNcN9waKgDJFJ7pojwQWpShuxd2S1v6od3E3CeWoKM",
  "key33": "2VUgCe6CqpwMRx9UCXTJoYyrsS9XKeoLwDgwGbkMEyBBkZzHMQpynyxzwjSTeAh6Ui9YCBPXnJM7UqB9DHCkj9pw",
  "key34": "28yFnt6XKYc9fYZirvmmhV9wFYGX5yiGay3geaANbcN9Qz2HLhypb7bAbnEnoTX7HVqNus22LThwZ12tpmYeggzQ",
  "key35": "uW5ZKQnkNypBrqW6x1SzGKML14hnpVTV6zPSD5vTWtmHfSe8o3WVL8VQtRqDoJMPVHxdGuXt7rA96tsK3tG5pom",
  "key36": "5iWmDuK3n8xD3spbaxFJzN3LhnaiCpPngyeue1QNG7AHYyjuJUUwCH2gfzTdxEQqQK6T7of7LzJJoioCjaLiKsBH",
  "key37": "22UcFo7jUB4CFkQ4koqtB91KPCaEszbBdEWJ6upvfutqowdkQS3KRAYewsZLuUxe9JWzHYANEGEBjgnc1UA6GVps",
  "key38": "4Bbuhgd3k2WCXpqNV6Lmy1ewjpWWc2ydqJai5mr5GJ9ip4BP4nu3CEqLFMwFwiX8BJhYCDYEjF2H6NLJdKozLNC4",
  "key39": "4WkRwAQtkeG8AaqRLmbNKqThnCEsYSG9i11FdU1jrVTqNHaJX5EMGtJZUVg6EoAXMMevJW62jjirUGSaAC2zUD1L"
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
