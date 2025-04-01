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
    "4VFwHgRjj94pYL55vQwcYmfxjmGp9XXKcYmYhZX9rNSYBQ5bmTb8CdbqBdeZPRNQrgQhdMTLEeCvKMyDKG83WM2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MPwJ2ownwsyQxzwomuxMHwpbtHRZw6XwvpE5E6tfFhKE6KnjxjjX39rjN892QwMJjuENaYTa7iCDKbQoUJdg9h",
  "key1": "5aj5eXDwKaxXGcKwjvhKfmd1PErANSo26R2cSwqRd63snNcZUFJZf6PohdKCgxK9RbP75hASb9mWWv13zQWvjycD",
  "key2": "2qi9uQxEwG9J2NHA2RSLNsaErRAxdA6X9Y1FVBZKXimgu6aURJBT6urPqPh8d4EWCJNoLWbKifghb5uJxgbmCpCT",
  "key3": "5UwEMrJY3Ei7uCYimbERvysB6uypjQQV8ffSMZhtadSxR4pWAt1qq34ogupZPv7fpJPNdwrJrkcoZ6SmJb5XDPwV",
  "key4": "4AitnBVpx8P8Achpce3uBVyC6DmZBv9brDjT7dkztYK7xoJpKrev7r1VbUAZScWVsYoXkAemLgVF2AiD3rRGgB58",
  "key5": "38UWM1xxfyXE6g2sdwQSgFEf4tN1uDj7Rw6oVa42W6EUKJb8Tkafv5fvtLCh3TbTDxF7bpF6bc7aghDKtVBWTFQA",
  "key6": "4G5wvicPfHpogabCvEdJR9CRcuA9o2nCMsiZ8THYUUW36BYhVRMEiKvfhfcntLRS8GBoQaTv3YKvuY4T1AjHo8vB",
  "key7": "4Ku7GYLeHRuNuQd2iARovYfvqmmaE2tbeyQL52fyHHjRQkwuZpTepz9tsY1Q5XNtKP2L1RKykZojAoL9kLTQXmW7",
  "key8": "2688WWGmDxDLJw9M8Mr8rPK7ePRJZNP32wjyPwDSZbDAHRD9BnFShrTUq7bLW1iaRcrh6CqApBrfrbZHm95515oW",
  "key9": "2TFj399cdJepwyEA8S5KHsTFYdJSELUqb7Skm7Aa6TZ5Vu6TtSE5Jwi3VtjN3vDEmAURtAZVy5gScYqtiu46zCKK",
  "key10": "4G5egFTpTcadNQBCcKLh2ECZzJtZGXdjAcGt3vKTD72YDRAbg7fRhGcfwuhPwQfm16eGJhjvmBeckQ7P5msVCY2P",
  "key11": "4CBBdiJTh1aW6kHdzoqKYNCbkVHWCBKjfBLWD8S61BnvQBXWzgp8TB43FdrW184MNf5WSfmwtiiL2vsseyWxp5aL",
  "key12": "4yw7g7nZP3fNC2ZvzDpjkx2G4msG4XURdFX6nEZH6St4Hvdbo9YYrwh6rLi8TCh83m8HEhq7P2g31ibRReRZqvVo",
  "key13": "3zEd1cPvgTY4jTz6huqmbbpkpEKd1Qdf4pncyjVaopKZAxzESXv1KCZZzPfEcjqrQtJfHaB2myUz3AE2GqcPEEP3",
  "key14": "iEqMb5A4zvLLQfPPUm3RJo6cGKXAER9QVCdMFwpfPvV62yXtgCXyVbEdw3Pa1GqG2RNKJNn86fGXCvm9Eqq3vex",
  "key15": "5ANhouhdZ6scfJsgqBF5DikscaUjb2k96hMV4nfdqfnhDLWbBfe2H4LWa2wdencoBB6WNRf7qsfG2cCABtysykZg",
  "key16": "24vdtc6wn7W1wAERUMUJbdng5Hqyzo1DX332xb9KqAKGsyaRgfHrLgY3MACw9PjWCeYDhkxh67nURdWoNDDasK11",
  "key17": "3JuXUrQjiPJQWMBcFdEdcftzzSyTHVgminkWfHETrcrZHkzEsiFm7TzVB29svpX91c6CpaLfF9fphqMVyeGwfm9q",
  "key18": "4y5mgQMi81ZAxVLUkB1aH4fpVNPGm76bHYXL2DUTfrP5JUJ1uc7DXH8xQKykbvEmSpsr85wqecJiMbAq8hUoWx6k",
  "key19": "AVg6yE8mA5pdXdsRsWZpXkqekTgahUupf41kitScb1NCfe3FSAenxiZcaGbzsy2kvnQwqChRqSEDptSeUBeWAkk",
  "key20": "3DEaXk3YZDV2iT9XzPTxkZdk4C4agiEGMRjHCwjGmKsnVBvVXbSVpN5WdeQ8F9jQd71bLNDjqpy5PEiaisqjrCx5",
  "key21": "5yrVJwHZkFo6RzxEvdqvhRu5EtvFZbZa4qtFxp8CERQWHf8gXUtxDLohQW27ebJBzZgATgR8S6ZEfu5cmYL1vHBj",
  "key22": "4wxzNCf1zsSFyLeCRivv83vM5CPXBUie4S3wqZkmGFazkaGXBub6o19sf1oQYhK5KNrbDb6227FtpzcNmHJiiSHN",
  "key23": "3BHggTE3nutGRt8UtCMmD4zgmUWkvGJMjLae2x7L55hH6h8XU3jcgmBoR67nBMaryRbpppVw1WgwDFi6UmF7YT3i",
  "key24": "3mF4ZNEZ3iTYfqCiuvhf9DKB1sWhEHDsBW849Ak1hcTSJVXiv1UWH9PqmVHmYjT5Mc8iWnjfQt5wxqomHpr69EMU",
  "key25": "4VReEXoXEV4jJtqvtACB6Qc2cBzpmjGEwYh6wsYveNN49VcVLdxFPHzEfheNjC7y6eVAenXPirt2YPNF5JEJDk7V",
  "key26": "4eMaPCUeQeMHZfHS5CcPN8e3wi8fHu1twa8DLzqsMQ1FN74vxECMnSkLGPNawKb3nrjadLzZqiHe5nuAVaxT8qJv",
  "key27": "2SFmQXPdNUmaL6MbYDrKeZKjtgaPRL4KMZpcBneXjSkuAmsDXcybs8y9hTwKTXLDGoTJ72ggKqiBEP6haz7M1Vey",
  "key28": "3oE7SbAe4zYXSp99BbxA2GqudRsH9csDrPypBP45afvtsHxyuh4GfvmtDSWWrdzXibQCkbgjGjZBhhJRCD5pYVDS",
  "key29": "4PBNMczkpHhhjhztpXxTgZPZBNLvDc1Xg8XzPHuEtTVPJfyS8WEuXGHnmbhNFTcnAb2PkZSZVYvmcNaNAnns29Gg",
  "key30": "4nXAaMtZ72cBKAJU4T4bLybFwcDic1dckQktT57TtNqobmfiLw3sm4QJkp8oYNwe6v4XjMeZYkWQ6zvAgyw8Uq3f",
  "key31": "582AQYsAT3HH81LuvhBEZ7LmE9UJCTkBGp91GYreJnJE9WV3jamuRs1dRtpFjRbNh83Uv45cfXTyCavkoFQVorrC",
  "key32": "5XmcimGJJpsBc5UZo9s8fTsCwLBaNhMR1Dttck3uuwnGTxXW4HtRbg8UwsE8RtehqoM4tiZuyeYDCMZaPwXZUHJx",
  "key33": "TEdBwhsZXhRZX5wAU7P1Prk9SYxosjuHHKpEHyYpms6NWziCngYD9VuvDom9A94YgScPFr8r6D5Vc76yBQXLsAQ",
  "key34": "2N3pMPeqFi8dR5G4AiDBZ9AjsgYh69sh9qmr3RKS2Hrt15gyZ6pou8NTxTVJ5Mc2fXFX7tyJNPvU1HRuiuL8NVKk",
  "key35": "4fXJTvJerbjrn92Z2zESuVmiiTGvThiHFMHJDhRnN5Wnx7XZ6qne21RyA2yXkqDTaoukiGzaqV3uwsFye9kFiJce",
  "key36": "2DeVn7mZFaXNh73a6bGE7MnsTZtNDoasgiELmWLrKNQ1TdZWzLyjRM3FmXWuegn6Ex2Uq4MuiVpoV4pJiiY4iP4Y",
  "key37": "zz8nBwhnQqKbgW1rG6fE5s9bj82pWqeMksB1vY1MhtT7haB573vhn1H5ECRH45h7nH5oWtFLhzNrcKVs5idNfmJ"
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
