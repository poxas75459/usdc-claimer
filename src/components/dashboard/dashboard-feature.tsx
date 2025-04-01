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
    "3rWrce1nRf1QohvSjratcvrHZ1rBv7wMEPSgAcD9VtatVwAgeax6YmKWV8XBLJWtgJPn2opZcXkhnVx1FLHWkw8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtVmjTUM3UpV6akSFJsmUhYnxnXqP7Zi6JB5EwpF36bYey3WyoHVd8qm5LLaeppUDUENBHgBXCnztb6h5hs921B",
  "key1": "3iYFGb6J5JbvYPKadx4Dm4fzFH9WNrv7eTTmsuf5aqXbDrZ3e5dP7gMoXaaBaEteMfubGr4i3yJr1xs5VSWrdw61",
  "key2": "2LyxhqLuLJcuRKqrQygRuhGyGBy7DakN9r6VyZBAUSz847ysopSRuvQeEzwfvfJEdPyJTbQisxqs9vHucQJuB3Jk",
  "key3": "4acqv8PDYd7q6NjLd3VLZHQsjyeH2oxLqyJ68PjTaFog84VgmFeRkrAW8SqRJxJyTD4pT9YWX7TEVXqgGNuocCBh",
  "key4": "53DGuKZQjHVfKRxrV1SYBPs2PyzWK81Borgzz8RWfEMScDu2Bqj8EteRG1GZ5eCqe87wMaRyM1SN4ht29HxXiyqW",
  "key5": "2c3te2PRDpdDvYBP4rKRf1HqYK9eBejsZRcTDgzB2gsqNWoXLtBDMgMKmc4Vps8gBdpAV77goa27DTazb59fv2pj",
  "key6": "4bWyRMgmziwggpZou7F4REsgSFzrz6eSQBhjkuGgNED6CAFQ6e9ZuHEN7sBqA1Y4jkgiaAGt2F5zz1mGJKnwbN7G",
  "key7": "5FsaRBg6VeRC53CUj1fiFRJRCwUr3pdLamCAJESiyRTivFq2nYAv1ZD3ujXyipsMYo9KHTNc3U64JkAeTsRNRz2t",
  "key8": "3CcR4iCvA5NMkFezEES54EzK6uGLg6Usafvs9R2H8tjozfSWLFMdX4vmQsRFBuztQnaKwJNWYzZ9FPapMnBFAGMS",
  "key9": "QtXKr2rSd5yPuaxZqzbaMymjABjcpnvNXietT7YwkY1hApveDMBWnteSmJz4goejbcxVLgzF39FATTqKaS4R5DQ",
  "key10": "4rbsu9zbr1fGpYyfDEZMY1BujYNf3iD4rWwFHSTWrriUVCrQn5XqmsxjgxpPu79z1ieWUp5SGvB7Y6jECvPbbmCb",
  "key11": "5LHqL8aouLMQDoo22bJgJeddw4viJDpnjjDSpJdFq9GWqrH82DbZsgCtyJvmJ2X87fG98u739MVvrpCQWpH9BPhr",
  "key12": "4ZgnEFp8HRJmPiy5d6MezTwUwGJGESJVXEnxkjaHwnUhG2K4rACCQynHfjbqfxCv24x7xCWU91ewUnmFQs8n1gP",
  "key13": "22Mmr8FP8FYmPtPWZ8PW9zSFTan4THk1ioqRdELJL6n5GX7ejucurnid1R6YnJ3zRutbv6mYcbX7dyzW8b7ggE3C",
  "key14": "2Kshpz1Aw7pGz1DEZ1npMeYQ5Jhvd8UyPFGzuMn1PGK9aSZqPdH1iQr2xGk9rQgsgKVq7zZHtSocRYoEfm2jDVgs",
  "key15": "63QxgFKLdwRQRkJ86jBRx7xu1QAzJ51oJDNK9GoEfPpwugEmYwnLTm43C98Npx6f9UHPQiTY3QTBunc79LsuX13U",
  "key16": "58WdhY4xh2Ya7hk5YBRHNLQA2bft5hpykFqWP9U5ZNgN2dusXVQRw5tMdihAdk45e72yHgMmftHKHV2mM2LTC8Qy",
  "key17": "52itGV5RfyEESnT4kBfgxssNYwjyaJGktdeSPGAGRimRuDg7dyMqkkfqdhL7Yy1NRXNGp3EJMNMGgHh6m9GRaXNL",
  "key18": "3DUpSu4XwTUE8RU4UnJVBQshFwpBx1hwUjRSSCXqDueXJG5bCB7CvYGzw9dR2ZHZUDfWqMaeJd1F2WhZfeGkBzRU",
  "key19": "sSeARVPc999DzArD7mgWEi3Sxjcv3VHGUfjkz38yoRMKU3iDJkRpr2EAX1K6R7JSaJMH3VTiBGGYy2tdxwGdSdZ",
  "key20": "LGXNDAoFCpLKjTC979nzd4ghDGT1KFiskvsME2eQMUb9DBxJ5n9PNFPjWe4pibYiLjmLZfhyvPrZ8yDj85UmGNK",
  "key21": "JokY37HSJnCExJmnRbAiQkpKUUgbY7onqKsFEWpWWxsp4AP6yvwmexAG4dTbaepy8f8Xdn8wZ7cX5H4Ka1oa82e",
  "key22": "3ZdFesL8mgSWVeidctoZeFi9FWN3Dj9BkPuBEWgFBmgEvm32yTfcQHHBBJTGKixDjdviXFySwEFAmgW7dskKGQDo",
  "key23": "2DyoNbPEhQsesSnSARQoiZS2Mbu1C3gX8JS1QMn7Bzy4mkxAfodxSDiJ8Kp5UJMoVmDEyfxP3nVTyeM1HGnrDLKc",
  "key24": "2bNSWweX68eCeQ9kKrK1GPoTAadsJZ4NbEmwDYnMShoFF4hdgsnY7GwaUbWcrf12NHBwTKVzTEsE24ZvYUShMJnH",
  "key25": "2bspwQm2kQH4M1eZhsjXpQfBmD2vAwqfF8tbmxNZUhiv1kAqxxfs8NxzsXcUt56LtKL4j97xVpBJWid14Uk5XHxA",
  "key26": "64NAHkHfZ6ffcxepNW9s6rKYzeg8m8NVbrPJiUUjkDjuEknpbKtvr9DjWC1RBHVVLFEcnu4Vvs6ocmnP4yLdUAm8",
  "key27": "WndoQPsv1w4jVjosfYRSFakvnLWnQGeUAZrcaczUbq5Ebfqp5EGVFF4jdwbCjptujwBPvZ9aSJiUjz1UEx8B7Rt",
  "key28": "5iHvjHwkYcmMMigQK2NFXHBmkkDJcPNUTkCwFyaMpfTNYwAqh59LGge1zoF9svAQ6rhTPQrafSBUqirrtEHEzaL5",
  "key29": "ng5QNFLRzUKmGN8P9vCmDUmZbhPkRxv2jVqeeqRt9WnabiCb9UnhWnXAouWfBgVjC3nvFovHxeUH7ghdFSdV1Vz",
  "key30": "3X6MhrUdo3LrQFGfcQikRBqyvoawn17cvDEHXghsi44sfuE7PbtujCZ31AM2tMBdtPdszRnwQsRfFdfQh8iFosCS",
  "key31": "ZUKjcRQBDjFVMAkXhYiCCoAxRA5X8guSbUvZ1tdX1pXyMxcaoM1daqc9FTa4UJ5RvHbzQniMeWVoJbjqHnBQKr8",
  "key32": "49xqMLC5ojn9ro76SRfF9p2GU4azGFvAUiUgW9kb6F87eV3jPAPtRDBem5mPwa3vavAM7Jm9XBXFwUuDhUysPEC2",
  "key33": "5QAyS9feuSUgZm4UpFCSW5aZAQbh41HLiq15NjXW6imrzE6amt4yvrJvLXLyYDs8ARyAdjMCgmtGhCXADW2K8d3f",
  "key34": "44G8PQU3v8kRq7LE151JALm9jQZr79SryUyRsEKnMBnPU66NU85avpazs11C9YKNksH1Tn6eAEb4xdiLRjjbDAGy",
  "key35": "5uUBc4yFrha7MHSQRfEAJMLQjW6C4vwmqkTpj6eXwWs2fP7dK35HeYj68iKy4esaRf8ctNUjhHNHmiAc62JooiDD",
  "key36": "3tiZ3hrSsk6kL4wfKMhUZUBVoTwoKUavKXjn18EYrXhLsLiZmsuDKVpGJunu6HsexnF2XyW7myGNSRY7gjkBL9Sy",
  "key37": "65oed2EXUsZcqcT94u3o9NkTDcwTQT42S5oK4qggiAvgcYhbp6gF7m3xCzkFVJ4BpKpk6rVqgBdF1Trqc1K9c6gj",
  "key38": "3uv6DSd4BnmfNHSvNa4Yp8PUoBncuHtGAiCYemY5sZG2TQQW1zfpagAUtbXoWihdQZ7k2B5LyVVaM12vhPTZhzMC",
  "key39": "1K3CLmCM2ijaCjLUGwcYMeAiYJEuHwUxydz9Zxjh3ymc92DJHEDVxQQnNtUCxxE6GWzn5Agny6GM337HauKaV3K",
  "key40": "3AP1XgzsrEjPMToxbtVtDFsUeB4Uw1ewekUBponbRzUhtpVN1HT7fukpuDwMFzWCgvF8PuqMVhUjWGkVjhPpDRrj",
  "key41": "2GFaKn532YDnSc8VVCL6x74XRkh4Pom7N2st87QoketBiP6j5erRuojuUp4BqYHZ4AaJMdADXXcTJRMTv5dqL3vi",
  "key42": "3Sv9tTckeFkF52cJQ1L49RXyM7oPyrYpsThMVstMtTAVdMJDewNAEog1YQ5frWZ8YHXB7Nngs5aa67BqTBXnnLEP",
  "key43": "5aAkS3zoN5sJAgP1w1y2cZSRkQgw8XK5wef5ZBxh7SjgyQt1WcoUvHheJ91df2Gp88Nd4Xrc6kWZExVCTu92Ke4k",
  "key44": "49wxxMwkbq7YgjWdJAQJMh1cskCNbGsYWXumievmFaYCxwEBzrejoCppsB9xmFa8GvX5Gsr86p1eAbPCvYauRT9y"
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
