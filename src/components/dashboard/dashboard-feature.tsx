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
    "2VovVbAboJ4PwDoTDy69fxLTGXfRzgk5Hxa57PEHBmuFuQWXU48K21VzX8i4A8gXbiCmJeL6eiXdMSMRFWRmGuqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKQvMjXbed2n2awSRufFnMKCC3kVz8Pm2SAVKFsRWXdDbh9daJk2fuSyPjLrnyCxnV4tJKwV9KZWAUpBfX8Ekob",
  "key1": "3ZkY7z53LBcUNhknAHq5ELBNW8dsQdmct3FAqrkghM28DswiripVKBVuYkJD8LptkGkWtbq2q6etqAj73SDUmZaM",
  "key2": "24jW4a5rAJEgC95VLkqceZGktBsVANQcbpKKpppxz52yQPkxx8k8ihT4thiupdA8B33t5nST9uF3uQjAPa67jzyW",
  "key3": "5SX7A9dbG3Z8hTrZydTLwuDcr9U1XEbRTCgG6kPH8vogwCgudLwAEM96gCpioyCLMjq5A4pRe18Fnsp3vFBupiHk",
  "key4": "W5B5Zzhm98xQ2p66t1NCxYWajFZFS1iCNsQqompwLzu6iMwjGeH5iw98v9UNaQjZuAz253xc89AJorrqphRVfDt",
  "key5": "3DYgB8zgxyC672iToszCk2duKgGLsJ2i34MvaC6ECgqMqU4m2CaeM7XGKbx1JtziC6jHH5w7Er8HoAXoe6K6DnJa",
  "key6": "SGkLBzr1DB1zxjs8Eguovq9nSGRPaUccWkWC16nb6RHhKg15QV93PSRAdVige3GfT5HyGy643DUC1hszJVdZoo8",
  "key7": "3RjjzDyjArDhzqfp92UKzXG6kmzxBmu44akZHmcgYUugLZ5Uo1pr5Sx9PsRNhfaq35WaMHEfgJ5vfDg3h33yUU9d",
  "key8": "36swBkxD5M63miLEmxStc67f6iD81nXbwxqiMU1DWb376eEeRNBvLzVeGZui5R7d3Zgn3xWCkuYNYtVSHCmWM8Hc",
  "key9": "4uNr9JeFwZS5c9waSdt4uFQNea3wCbzQAV49ohbvidsLdychYGR46dtFErDcexnighf3KbjwN2hh4hhu15hdLXbj",
  "key10": "2S7YQgzkd9WT9QbUBifShzkcLLKFeH4Je159knd3c5fiYBdD28XQSJciTFdCQtWFnLrVcvAa8Ngszy2MFVxhU2xm",
  "key11": "4T6k14KdyRsHLz9HmXX9K2RgiqnKfrk35LVadeLB3fbBjPWXzJ3MdSqJnK6yg6KvQHif8ssDXeoLZU2EY2UJfB8c",
  "key12": "2WyjcAL6EFvGKVigv6XJmizeMiJxYr3APydxtong7Y7GuzQ4xREBxc2YKnXK9a7KHK2p9WskhohfT11GDeGA678Q",
  "key13": "3rGEMwr1dUDjjXXqTXkomLRB9wUn9CYGhidsyUCid2SrgPBzf36hctJn8CcL251bLRZpAcW4PDxG2wTrHMiD9coi",
  "key14": "4hqyyaUYapuehZnTB9SUCF1aTm7Sb5XqeYVfNEszazNtRk4LuwsHbZfvqGQe3o7STYMnT87vRP4JFdfMDH5Tpi34",
  "key15": "3VLppTcxhKWhmd7MHguCEUS6MqWjNUCwaAsRiq5q3m6KQEb5pZHAQ4eeN2krhF7e9B2hcDjLpPeWcXrPgcdLkJZ9",
  "key16": "36mQtSfkQ6uX4WFWGfJbWTqknkgESq88kLHuwuwBcmpNZ17F3pAwDgsojHhns7u2Dpd5np9FCGfchTBWnp3rLN1E",
  "key17": "5zjGer8E6seQAswwHvN9ys4ZGgTfFLSFkebkHZCJJHG8w6NbMdSy6WW4GxfY9sHUPdoxxQDSqd2DkV97mZiBuJwq",
  "key18": "2t9qsmPK67P7rgLBj9wGxXby9wKSdoXJvfXreEv3HT6k8DREmALzH7anDf73tMRgsnev9YPNiJeaRxhUsULG3BJn",
  "key19": "y8zwTup2QAo6Gz6xEE2TnxiHUeN6FPjqA7sCYBoAg85JxXjnEkjcWajJyFC8MkD4DXHg7TL6T4zLb9McPqUgpmC",
  "key20": "2oZ6WhyYimNp1HCCipzgU3qSRNq7YP9hav8peVWsPP3mfnyMQL8EMS2ASRT1gf1TUQVAy6YhcyNWxz3ZziMhfU1Q",
  "key21": "3VgjNqK14G6YLk19dkcA1rjrTpJkcXDuL4bHGVhqmBXwqLn3jHX4hdJZsNxS2YqW8rwhvjnjRivCB2URc9aqgsRA",
  "key22": "wn5HXcGXzRnUQNEAuuYgWuaCM24K9uqKS94tu5CQukWjoKxmzZWeWmSnW6ho6kz1kCk2TUoTsELXv4rqDYPQbfE",
  "key23": "4DFiRkyKn7tJFtysgi2j6QfHpP3WbYb7893faqG55o4NFbvG7X2AknFQwgEEoQLDY3bewvaNG8MXqL3fULirbkvF",
  "key24": "3LaQzBaZgN1FdeVSpH2NUCoksmzHk8s6pPqcYrUGgmxsrYJUtm2JxBbHqvAUDiLuvccGebJkJRd9NoyofAcsi8R8",
  "key25": "64soYRxwaQodzorZ9D8mxmsMJjFbEJjRzyu8U6L25TzVjrfAmK134GyB6NUTTzJMzmvtpi2k7KMokW495XhNyKmR",
  "key26": "LgAmgrqHkiyEnfAcMrqeyAsx6gBm8Up8AA7vjfEemEUGVp9meKFGeLdUSH1HT3x5zSC3FSB6H4XgZ5VREzy5vdJ",
  "key27": "2efLAhyiLgRB98BVVD2WddgfyAqQT7ACaJ4FsFmqdqHe66M92pWeZ8QQp8fZdNv48vw3YDjbPAr8Etkiv3Q6X9R1",
  "key28": "2UKUfV8jJeBZtvuedrpfc5Rbhnyp7N5P4JGMDurAF6ZtVQAp1f2vk7FkPyDXuB92ikqRcUvSeNDEGzd8cLR1KtMQ",
  "key29": "Njyp2c8rtJ1j4DqXLBuMfdkRRrULkChPf8vA9ojn7jgxbtJpP1uBsUodkV4Upavi3YTsdhNMATcQTUoyBbAmP95",
  "key30": "3qggskmKrbMZQuQy327cXMwUQ3Avb6KLT83Jf2ne6QgHspaj8fjURQp3dXmd74uKN8iq5quFXTYZ7bkKnSDwNDjt",
  "key31": "USzD2A2v8GByRme29vixWiz29UtSov8AGWjeiFszMYKy3icf1xE9MEB2peGFn58SrCYUqiNMr7wuGFZo2ZAtd9h",
  "key32": "5DEvsKKDTN1ibECpJM8dcxf3c4KwvvvBEocBqUriZ12wbUGArW4HSHGqXkB6DTEfGfQ1njK3wt15bhfdWHsFgmBz",
  "key33": "yfcjMeTXoqUWphBis2nWwJGFeWUo6zfjMfcN3t4p8wswJaZKHGhFTgSZH9ACSwo713fGEj2QW4tc69fS7pTUwff",
  "key34": "5M3pUJjiX9QRLw354vCNephTpeiaYwjBapbRKBrdYggEeCLNeuiCuySBgMtZjEFnCHnpYVh4WhGSXzbLU7n52Tvi",
  "key35": "32dFU73cumhu157G7q1sWaNCiimzT5oNiFoLLDo7P4hkF8UsHgQh74RqoSv2sh859KYAT6D71XAdHoh3Kz7nhF8A",
  "key36": "owjzmo89PmnubcHa4LcdEo7bwHLoooheR3xYZVnSB8FXSnG2FL8Nr8d3XLk5TjDgxdWmStZhaQnS98tJfZyDYQq",
  "key37": "2RQ3B84uV1WCgovrp5ifYmn9csX9uFXNEHpTB4RDmqJaCRdh6K4AUYCiSoW41gwBWBvriwsm5HZxaJxPyjiVdeyg",
  "key38": "5P4kPitqUfTC9R5KRKqn6VyHkkMDHDaTJKK2kTe8gbwyt8XavDv5xazGeFSb383HwhTLFZAwBRQAoTBaA3hAHWSf",
  "key39": "4GcHhHCZsBEBJ1zcYXMSXRQSEvgVB59brbwGWKhGpjcZNCjZWrQkAr8i2xKELnc9Z4iS7FTSe3wyGcMzn5XwUimF",
  "key40": "2R1gayzwpRL6WSSyLqSYccK1Uv9EEZQqmyG1PYrXhwoHXPavdGkJWqA7Q1jWxAThzkBzqzhwtaS3dLxCK2UNrwXy",
  "key41": "5qxf6DtASezvaepJSSPqMfWdAwF7Cp3KCYfDDWKbUvZUtWWtg2h2AYjwTPNnexh8eLGXkQhANe7T8PBh9dggag8g",
  "key42": "7V3DGxWY3UtrnZcLgVxo76hnHEwc3Gz5o9A2AXiLc1K2xCxtuXrjcVmHA7ntmHGXhHzYVBVSF2KfSamyaM9trGF",
  "key43": "3N2jh5qRA2oPcHUAdJ9qguAtkHRcUoMQDhpfUuYncpSHewnFEYZ8daKgimsXZW5E9esawidnHp4e8CaxSzCySufp"
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
