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
    "WocCFBFSDqJVEsdo7r5hWEXbb5XFo9Jw52iD4HAG4f9PJaggRBqEMz8Yo6DU7VVjSB7vhniECs3CJnZNij6A4vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LVJayd8iJ55HFXser7zFAY17yguvhGY3iVZPAkErD2cpcD3aYnyW3ru5SohpneHpmjbRrgeSM8bSVutjGRthUrB",
  "key1": "3ufy8jNx1u5Qchr62uFhDZsVma6wDKaRE73dYZnnkKfY9SLfXdYA91s3KAZoR81yud8LdYxkVPTsBjbEwdPZqnNe",
  "key2": "z6NDmiXhsPAMLDTp8HAVYQTAK1Hi1v5qcdyYPQALTz2aQxPHPYGvexWhNgo3xFkatwCtLGUFPd9vamQs5Xah9kg",
  "key3": "rAa7A947nMP7BphTqbVoBF2ySUM3usV6g1ZWaPjDJiQ3tBzgkXobxSQMSMheML3DbMQGmHt2FsfAhwTASuWaMkk",
  "key4": "4v6o54aT58aTxUFQ2AoC45dxkmccXEiKpxdbXyVEFx3sUCQth1YXwDL7mXJswS1dZ9UkGpeVnnbZxEk7462iKy3L",
  "key5": "3ZAvSuyC7H8Hwe77mj6CVTATewRNhx8KdTXhihi1yPzD8ViZMNajSXyvKAUomdy4Jmz7DPZumLaHAkQL2P5Z9Ykk",
  "key6": "4N5pQns7jtWmWZYirkft7zgGTatdSTx26binZjbuxFbroTvHag18Evsy7xiPS7uVKaf7nFWt3M5qy8f3DpZTdHKX",
  "key7": "QpnP3SRisxF4jCcQALKDM1rT1iK7ESvHxWSZFUmiTzsh8MZvZdZyq4EC1E28EAHUufF5dtECUTXgNpGX37DUbdA",
  "key8": "29Am6b3c93ELtCrFPGhQbYAK9iAVqN1JvvaztkHsSRtD7PcqTzL2RoDGixfbRLcUBvAfjisChYxe8SGp15yQHteF",
  "key9": "4TkP8hU3Sk65byxfosRR76xif2ZrjoH8dFh5J3Mrjin6FgdS9UAemUEjrpNPdT81Rym15ZeqY8LEjroef9ndhpf2",
  "key10": "2w9rnbsEwdNsbccnQrnmtZY2nHgYgZN84NmtMBYyomz3NgFi2XPh9vcBL7TpLMCpPPZgPoD2zSUz5RYtUgeB2umw",
  "key11": "2m88QeiBBuDkTPLUmt2vVU4A48HcvyaJeotCoPcM32aTobNpeEGLPrZEFNbZjnriiJgvtEmFyd1VbwY8WviCXBbR",
  "key12": "4Q6YErRhh5WWkLr6NX93Q3U2U7cywUDYsRU91Qp1chDQZzPKJvX83yLWai3e8pPzQc3UKFXrd7nzCkwYuAdxnpdA",
  "key13": "21szDLcaXJAziKTxEcUYWukemAQZJGNqyVv6pXzx1sDU2tutRrG5Nc4HtjJeCjCgzPM9FcWJj3YQs3FDAYY54A6D",
  "key14": "626tcyW5eV5QnaRSv6raiUMY1TaAL5dHB2iT2KGbDcgmzKqYECAeYeXfSVSvU9i57pNipRFbzFBHQnXiY3gyuUh2",
  "key15": "4Zh3icgc3SJqxDKDj1uCFmS2UPFobgw5AeJwCjdckKB6ZDjSNtcbHbDVVExqQG5m8nT7CgGndUA2dXZ7MjJR9RXf",
  "key16": "3SeUURU8z3kBDmz116CkZxy9zMYwVXh4HEhhtSJyob9EjJexVDRnXPDmBzs37U1pdNdgFtfW9aquAz3Lb6oiB5dB",
  "key17": "4jdX9oAMtbqvpeoVHcNuaQ3PbgzsNN6EBpfi27D7NK6t8yStbEuFvF2ZdPRPuPVYFfB1FsdJfksCxs6frcmCurvc",
  "key18": "5VmLiUiKsJsgX3f4uwRoc1Nn6QBXCYTvaJEs1TB79vuxBei3qgjheqEDMdZx4DqxpkhnVRhjMYdwszAkkLcVKEet",
  "key19": "3un1wBhSawiMoPBncAK8koci5qKmNpfLRxUtc62yT1gKBCfQCNfPD3GBDKDktV2EbRVcvHiry1X2dzhJcjT3te8g",
  "key20": "HNzqL9bAYhZ82LC6Si5gAWPVRQcb87TpX4K5ycssNFS88XrkTJBgcvzQRcTGE1BwLQL14eiFHAJmPz1FuRgZ9i4",
  "key21": "nphZzQj1kengtj3rod4USUxEJPBVUnEXByaFBDYLzJhWVj12BTe1a24wrSvAyEMXQP2WLd9ac3zWSdu8LQUe8zJ",
  "key22": "3XfbXVjQiLLMBXCZvKrL6NT1EEi7RtiJ68VwfMBFsSqittrytFeh7NHDZ5Xuw6pR445mtpMJKvLt1rE78dZSzQi7",
  "key23": "2mngMyQCcH5JT5P3myLY8FS5MnBUF3vWoay8eQs2E1fyfCGLKfhcMTRLLnWW6ARJbcBwCiW9XnX1MUaR4LroLZzG",
  "key24": "2XexC3Q9t7WcG49kJtJ2FQErxYHjD7mo9d5481SynDMTuYDxNBZAdoxtuAr43W8sP779YjBpt9McmRVdzqkaCr4q",
  "key25": "45gLMRewpcNzAuzWjTxgp8DE5YSR4VhkKPuZEHGAhsXMCyoVXPzoAFFeuz83UTcFs6tqZuqRfY7xahf5do2BLGz3",
  "key26": "FPDYp5BSWc9UDF5usa5Ku1Fjz2p5Aa8gRQc1XWAreedrvWzMDYgqQwhTSxxrFi68kZKidmziBFhEoxFL1XvfgMB",
  "key27": "42tpsRWwNPjxF6ehi3cVvCTtDN5CTNJaHjLkg8wUMSeFhTV1H1fYXUbgM1fS9pB1sNoKtRR9PAEM7MrjQ4pVc9qz"
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
