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
    "56vaqH9vc7UbdcUniXpcdTM31mQpJNQ2acyndnpfi22K9Skffv5bM5TK5Z2MEk9X6Rb9vnjN33navSQezHDUscWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRhL5kTniPyttLzDVMn2zHdh1yNR35mHqn182wSvCqFPBoP8Vezr3Wr8kmonv9KNTUcKkVQwn3ydWCbc4xqDzdm",
  "key1": "3UcTTRsgJY74YwCCJSccigmx5wDvSdG9cdYqa6c4DE2K35PzYjceEcsESqJ9N48MZhZ9LUQ9mBddhnVM4HdKaPWp",
  "key2": "2nbJRB6FtME5gfDkAjj4uVpVTw9Vqwh455h1aYYvbL8mnvDgzUTzS5DhsT6FqBGhPngeyRY88jtU2ooBcbjJD4mH",
  "key3": "66CPQ71T7HMGDK88HTBn4XsUWEcG5SXdaMjBbBvyuA47kKAnReiVA9xMiyxAsWEmPWbbiKg2qB9aUeVCaNcBcmjP",
  "key4": "5Q4FXnmsjF1AXDenFZ5fb4X12gNzvQnnwtwgL8FN9HReTvfsURddkM1zSguHdto66HMuN7TRMqi4dHXaMhm9yFrr",
  "key5": "DWeiT3UETWWXQqhpN1VrT2WnTZ62jdVubGwGJCDtSbPpQAu26JQwgGtSv3hpNzHTW9RZeXinQy9CMQycfbd5c76",
  "key6": "5USxP1WR1phYsoDPGNhwa2jQSzZCKWswo6iNkEH77sfiWSASGeMiWkgi4jUsa1pbJiHJZNSgjLADSZ7nm9Hos6y4",
  "key7": "2oxW1z9mViqD3JsWkrHDTRoTMaTF3sX4G7Tfz5hFgeWNciAju1VkmN2BZNcpjjByKmYgPtqGf7Vn7pwFXg8PpFvF",
  "key8": "31xtuR3p9yVhD9wTreDgNcSrrxiCUHQKJ8uJSsUrsUaHuvaC6GzTqd5Yc7FF7C1wbEhA4D9vmHH7tNRQmvB89DYC",
  "key9": "2tP86Z7zz8T1LdMQme4xNZySygoxPWPgvqibhVKxTP4uqTKzR5qSy924xPtUgdn5J9xsVrkUsjSHNjfWhTQgeTGn",
  "key10": "2nFvGStNiA8HYZrMrHWJHpt8UbKP2skM7JhmsTsgvU567StYnG59ZvfPy4LVK792KR8sMui3rANp2H5yiupPQoWm",
  "key11": "4gtbw9N6oAdkL9RMopk1vU2Mq5qQRq4JNSUiRWeRGXM66jm3yfvM2pQzCjcMM7yPi6uL3AVKfq48U8qQfmmYFDBm",
  "key12": "MNrzxfxxH99Kfrp39vq8QHMrjgcGhgpjgGoM1VMx57PeHPEQSABTE7pATLoHGunSumJpFTcTaJRd1Qo4mRB5SKK",
  "key13": "4uwJkDCJwBUuEYyJE4ZE1kU47ioCtVd1TCBoSHL7K5aNXW72EqnUG7cTiNQfbmyMMTJ985xX6Ghk2w7P12ZXZheP",
  "key14": "4Ta4u77gL5yMuMPszEHPUp2fwAfEVQBvLrdYBxrSfzJumj63iazTWK3RNKAD29fqVhhAKP7MeSnBmg9pfLfQEfPd",
  "key15": "2a5pMo8oh5Kx5CegULedreD7vV7ncp7ydUCDRbVCpRFZJyuukdHe3sf6fAXxJEGaXyHnTGddRsQkFyqQSGGM81TF",
  "key16": "3oEDLXRFZq3mkCQXPkhfk6EE4BuhaDFLECjAn5idVg8w6KjYusgN496Fjcbtwffnq2XjU1GbTXn38VxJXcn4Lu6p",
  "key17": "6EATy6xDYSjGNF2kG91k8KJAw2cJ3rpRTtU3MPo9sNYgNdxbRzrLWL7uqGLVC13kJP2Ggu5gZVYgAdaaqkiTu1w",
  "key18": "5N7D1RyCvjgTWMcqSpp5N4dPXfh47ykgab17Juy8tAqMBjGTG7eTvhwFYjZf7ZCsXV7CQTqBU3LM18vyhaZRS19f",
  "key19": "bFs6NGuQu7EfAU6boc8wH6yd6yJbMr9fZdjLnxcDDJ4VtshcEdWCok54mMjoS59ufKuiYmLMWUAXAV1uBCbzEca",
  "key20": "5EnrPTmAZosLHN9xo6ZrvhsKbXySWSeandPMqg9fQydavuvneLwwvSBcuHz4dbmhXb5GQ71zib89Ecm5Qjk1tD9U",
  "key21": "4i68bkXHD7hSUARqNuq9iMqKzPCAaPwT1yAWSYE641jYMHggCkax3UbaUFEYxyuJkx6LWQjSBr8Tf57V3KvyMqoZ",
  "key22": "2wHHBC6PriG3Tp8JQh2z9oo4Y1PB5Kxzej5BrEprDMBgq9pHxYmbJCdjE1B6gcAL5sR2xKhSt5ZpvR4QUMogX6mR",
  "key23": "Re7hp25gJWBhe43wHqzSo86WmGG8wQ9bJQ13Qow1o3m1eR3j1Rpes2DWWnixWX6pyiv5ZSWHDFvizckLjip1Pt4",
  "key24": "35omZczGhGwW8RNV2AjqEZ7fz2ZTJeSVgdT7ZaiP2TNopE5PRiBoWxeBoP5ZWjzmYhPjg31YqwoudKfYDQTkrr33",
  "key25": "64mcntx5rEzGJj8gmFHo1Re9uuT6edbDx7JfS3miS5Wars29mEPb19dspCBQDcKRyxpwBeX8AyvDhusyqhnDxAHy",
  "key26": "hy9ULn1bf9EPFKm2YDkqx9RSZm1DumvMKGqxuEqqfj8dmY8vEThGhokAvkwEutpXAUiZCbPkfE1i2jFvzoaNcvk",
  "key27": "4GTGQboC3CDJCo2eopLGNfcyzUYgmjJ25xpYM8Ay4j6PqdyzbwwyqyPvTJE6VNC3nEBgb7ri469oYNthRWwspz3H",
  "key28": "npf6tquqe5iJsP5qY3azs8X6bVJPfX5ub6vkVfR7UZGrGz4hzt65wGy7UV37djWM1BH7qShuN1yh7RFFqP5RZx9",
  "key29": "2ja63wwmYCqQfSfFgXKi9BqBpvEJgYVGzLxhVACPyZR6csbusYfZcdq2Bb7R5mAiTKpmPgdRXediaWyfwquLcpRR",
  "key30": "31mLqZBhW9gf1m4GwivkUHhUZLZhEuXur1rRjdHe4msJyWLmeo5uuvqekEJX7JsW4Dtt3HxxFmmA95ucsy6dggw5",
  "key31": "3LaZx9x7VWVDYtCaZ5kxZ4UJ8MtBaex9oZhWxizLmkEQaawvUZy9bPFFfAYdGq4ourGoJZ8PJXXg2edui9iTyUz8",
  "key32": "3N4rWLGG4addshw8BnZnDwsxdNkh6Ek7WQvvPVVumBRi6aV7cnqAeLKjyEyMx9ipyJ4VkhqaFRnTZnirCpJYQjds",
  "key33": "FX6RfXwtLdtbMXvsPMxthGY2KbuHtVcZPqHArczLY2CfNcx5u15kHF6tQSKRftf3BenMCE9UZHAa2nB1tCtDGuq",
  "key34": "JRSJ6nFP5syGW8Sya27rQamb3RxA2tgos1dGYU5Qa63drPnEkUaZZ9Pe7VC8VdWZf83q4HNEtcycR58RXfvBhjy",
  "key35": "24EcLZsuFA6cNSNncCCPVrvjRRbJdTkNL6USmPgoRraxtDDj7W77bUxQK825cxvzzGrSMSUioGeR1vtvxM7yswKQ",
  "key36": "5bhrgCoFyd9BFcmzkiHZu8dkXXCjUNhE6AmDTPVbdtDJxPHC1yRF5dPiWQkUGooLkW9MRjQuzVYg2aEkXoSLLC4R",
  "key37": "2bQJAXe4mE6BkfDZzaFAS2MNEm8wqHFmm8aLyDtdfwV9HHpY173qc14fLNMne6K72rkCWU2g7NB9KNvuzzf8QFw4",
  "key38": "2Vg4xC9n3T9MRPLvdRdqe54atEKzL2vZpbYkCFnwyZYFvyPAsEHY1u3AkVKHvB4fsRjnX3EeDbXBTHog3w1f8BoQ",
  "key39": "45NpNLX2fqQGxLR9XE4Qi48w1e9kXfEXdufKN8SJ4yJgWj4eGPWkFAPfCxDgtxXWuDAaWC8LbasMKRPbm7EcSrBo",
  "key40": "5pqLcU8GFNjWpq4nFKTyTUvFufXcaob5xQpShaNF1srRjtxBCiT17gcULDFk1GyPhQWmbwhV8vMY9sb6uNM3SpK4",
  "key41": "2k5xnWcXpw4QFuZDooJtFU2zFWcXXRBF5rSymUkLbU9f4osiY3CYsuNoNoxacFv5rfbszkmdhGHrmSFDfnoy686n",
  "key42": "SUdfuwzL3JT7LzTBAko1iahSfodzs21Cq9rSYp35QbTozWCbSPUPq1LqnsLZEeLA5AxrUt7M4q3LLXr2gioqVwv",
  "key43": "5HrY2ACPM4M6x5P8Gg1vxi13peVbHPR5kQHrboNCChxMQvtVce34voStpPpmMkdM6HxuMdcQVMaSttMeyPcwMVNb",
  "key44": "jhWtqPBpV4MEGHpqgJwih1EhK9XUZ53LiUbQQSQH7HuQ7U1pfZRLAseWdnn9qjwztYEEBhHkZ3Z9tEpGcAxAcQK",
  "key45": "4SAP45cRuxKHJPG8H6eVhCK8DTFjKm9bfBwGC5KM2bM4h2X1k1HCNnZ2HPTYzSGVNqhF1eFVLwTqVgLPmseWunkA",
  "key46": "5VbH5cWaj6CxKKopfJnE569nnuhAuifzCmfMN99AJmT2VjQcCJf62Y6nP4k3iobyMbxSoumHDQX5vWNYXvVFUsmg"
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
