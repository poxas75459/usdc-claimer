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
    "3Ban2tJ3Qep8wxYfG7GTrGRnHTuYSB1YSNWP663jz8zBConVVonzAxEobncy3c3MpXayvo6ThrNJmvwgWWAaxmVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWFWcTRA6TwaB4s3zZy6biJtxgnAxKtK1BipSZXjUcaA3aVmGfRLch7mZL8KXK3MRA4un8thJzeestqDnWXsAzf",
  "key1": "4bqSGQCqmUrC7GpNx8mhPcUDkmRFM13jT74QzGuZ4buZ9dEcoUEbZx6cLygkoyCgiY9whiYuNuiAQDritW2v2rKL",
  "key2": "46M8hdYDj3YQcN8XCSoLW7UcR53wDgRs4VY6uhttJatXSRXFchw3oUqwym99ywowD8M5N7sfase5uS2L4MgbWb3r",
  "key3": "2HH12wQ5AAY6uaNNdPRqbhkwUippDwz1BoZwRH3FYjUermj6ic38f8qAtPK8PaCY8UtGgAvKso5trdkTaRRVoapp",
  "key4": "4nJr5VBsh5Wf6ynEsLbz9K7DQywLYVuL9cnm6xtifyEWFAeftFLj1yuEMUfN2aTKVvejoD3uvLkEZphEt6Kw9af1",
  "key5": "5r9UAxEDxwkxiibNekrQA2ukNDumSVb77goD9MnHf52pfdp4RvSfrpVfeYbrkRVoXn4c1kUvQheenHpdYVvQy4Yy",
  "key6": "4RQpnqV3CcED1zPqMgCDMtEDrUHWkzaedeU7TGEDd8DnKvaUSwPr4vjzFpLthzYsvavCfnikqMzLvei9yUQzXS1S",
  "key7": "2KxcVANgh6REa2ewmmArQbMsGsJxnEM7BCZtWi2efe9aN9ACRb8akCkA6JqHkAJRKFaWxabRN9a67PghyvYxJHBv",
  "key8": "4HA3RqY4qUAjSQSb3Ykg1cYxizsttLsrG1QQvpL6UTXwDu94vMaTSZfRbj3MnjGFAvEcVNUuXck8tkzLoShZyvoe",
  "key9": "TDmEEvdx5xnwiWbvDiNSSNsUDDbNDtA6VSJrhdotNTqeazrqhjdqsy322MVrPXrRo2YNpcStRtsPit7mXqEwBTP",
  "key10": "2tbHfeezCtZcnXgKopTHvoZTWQwdV7ENGML8J52kNegkLPSnMwihnvhNa6ucFLSHTSDPVTzkJgp46dbt1gZdPzfb",
  "key11": "26imUzbrcjmz7VBDCh64YmzdMLyPPjG7tXXwNsrvcSsvWLYQ62isjS3cHWQ1DPVU8ATF8LFSxuSiihTUdETEzHkC",
  "key12": "65fsG1Kk3SN54Z3c8mCs7drm3xtQ2KshvPCaAHefdoZyWy3uWGW3DPJVXVvrbrELZKE3VGEyEvU6h66LBH1FA4qG",
  "key13": "2NcdDYaSFmTBH4pvbAFBDn2GUvHgsdueiyyYEz7sx8emmfBdBeh3sD6goFdwzzh5CarHm2B7bxbnMTURSgsMY8wr",
  "key14": "64pRmddGxqwLRpfqd1NfPRfSTCum2wNMRbhuJKvxV7cFwrpc3mjfKT3KfuzegHWoSCdb3CA3isU1ZfvdRyY8q4Pz",
  "key15": "5LaGqbv9HutQfw4pzWPuWeTyXbT3JvqtdH14UtpS61pJHDbXcwuzPoFGyScC6u5gHWpSSDVFVtbw66145oWgxgfR",
  "key16": "3Ufnsc1WYsJWfhiaChhAMHiuWxSdhBVg61Yrt4ZWyEbasAP98Lou3SEPtPQtbHDv6HL3QoCfyjxdK6uQBERb4yUR",
  "key17": "5eoccExNUFJASBgYP4DqnaBsh8g6mELcAvKJwQtaM5FgDvaEEHC39cmiSLYPg8j1jAyJa2yGrpf8EEWFGGGKk5Lm",
  "key18": "gGXt2dm2Y9SQ4McVwNGhhLtUHoJe3fmRLh8CQkCFwPkurw7dXFXvt8UGRMhHScGaQkDqQdav9eqZV2a446oYNTh",
  "key19": "2GWNY4WwBEtdfQbZW2Yy47QGpgLB494rXAYFkdjdtQJn8UoyRD6nJ8pX57yroxyUFMwG5URBvrYzTNBCWJfV3MPJ",
  "key20": "2ZUHZBzcsSdrvN77KuFqjjBQdCfTUrKtGcb3q356afj7bsZTD5pHzhR6VHvU4XGLbH5Gp56Q3jW4eJEv6sHV4gCW",
  "key21": "3kuuDhSF6wcZiAErXYLxUF4yonBP3MR9m2Jv5SoiEkV14U9CKGuyP73MRA5x6kDX2am2eGwkfVC9LdpDvoRkp4M3",
  "key22": "33S4ybNoS3ToPPy2wV4iRz1pACCoLZg5Qbsdo8CnGMUtrYit4WY84rGwbAXq2nh5pFgmWPThj6i9PxBnt83h7tpp",
  "key23": "35Lq7Srw9QVXymexvouf35SdbAjLgfZvij9wWKx7Mj8zoU2Srh8bPdGLsVhqxcdgBvH77qxAsh3wGUD8FZTpH2SB",
  "key24": "4CFxjujv2F1bEq24sEzTQcDBjoqBbHJQynDmJyzpKn6okqivUs7n4FL8S4HKAEq42HJMU6kAt7zLfMZhbmJaeVmA",
  "key25": "3EkjhgRzoWNj93ELrsKz7wDM3w1y4XazXNDPnW6er1PZ4WyFGAqRgNeEvgpMT2sfAwNqiugGuJTy6C5htxE8mBfQ",
  "key26": "pu2hnJWHq39V1P8QuCTRjRAXTtxTnVzVqSz4ysPowi3svgfiiiCFpUnU5Mpr7b3o6ApAPxPMQrR9N3ZvNTEiqmB",
  "key27": "2j4hk64BX7MnxqU2zdfH3CBgcJQkHaDhvkEv6v5HhHtY7uk4rLfbADXk59DFgoUR7x6CUpTnyUczJXqf19rGKPGN",
  "key28": "3umfVRtRGJmEecpwmRiFnEy6mcKtcHPs3s8XmZqnnN8ww7NaYkNiyPwc3uvvE1ApXm532UCs6LhTcRQE3uXutyxk",
  "key29": "4L6VSpjJqRKn1PapDVYoGVPwJX3g2k6JEUGpqzVLgEKWG6Fkt4qEkc51PC3UzMwhT3ELdDyMcXj5uZGjCEvRyZcv",
  "key30": "54AP7EEkyiYfCYftiK5iHSCWrxK7R6j3wYbbqiye9Yqj6YK3F9VAjvYe17RqRhRRVWAbzEZ7VLd6YmJibh9zmQMf",
  "key31": "5ECfLPmvuWJjMyHKwr4kKff4cEAioStJTRvQGCQapexQbVh8oHwndfLG3M7nphkssnHXeYvrt5ocMJKLbrPgTajv",
  "key32": "FKMbQj4BPR4BYMkmjmFDxnfA52qhGxnmHrxXz1U4AmahtAsPaSAACWLGpkgvCLvFULVRJdiUgnAGh5a3TVKLC5C",
  "key33": "4sqA21iby7bmKusKEUN9HTyyr86Rp7L96Z7WfgQLqoHbotsMcSpQcV7gmH7DDSBPtm4V391j3GHMBhBjAF2237BN",
  "key34": "4ZqH9RbwBEKf9MXx7W5MHZeisPzHLXs1SrP1mcbzUUGpaEKwQe7LUfbLfruDpSNjcMhwZR7qp4hKVjor7dGkuRtv"
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
