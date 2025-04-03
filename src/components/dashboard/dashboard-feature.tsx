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
    "5Fgsizp78cq5DMmakcsUGLgDb3Zotunq2unk4NWtuqV3NuqW9LjaLjH8u5CKq4i5qpj8e7X3YKiAzKxa7nHJDUdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQFoWiZi4kCzxtAds5yBSEeRzgEisaKMPyVy1dTyMg5CuProj9mL1hLEeKisDvsfen26h1UqMEh6iV9qPDu81so",
  "key1": "3M21XPpkpERdbpyddNDqb7HQvznepHdXJnLCMtTn151kn3RU2FpoX8ofpM864r8ogp16EbCzmPJjDXtDbn7M63AT",
  "key2": "4qQP5CeTrxk1tsHdUnuNjUYrMvs7ovh257wwp5iLxGp3NLBwN29d1BuVuLrvYHVxpsj7XkJCa45Uwny2ohNUQUXz",
  "key3": "mvBU5GRaK1qRX4qPTxDnTf8jJE44SZEYSX9xxo2KTbP5CpdLFLjSsQL4Dbjm5PAhU1uinVTQhpW58RisCW9moGs",
  "key4": "5z3aMTTWLFza4vuHmVECh4sdXgBTNGTnCnEmv2BftnJCcS2DQVwZLuuN7zHRzeePWY9bq2TSVxk3LvAkGtvhy16N",
  "key5": "43VnwZvqXCnsz2fgvFbTmq2ZuEp6Xizr8Q7HeTmPcQe2Y2cj8YQECq5tKhAcz2EWECtsrQbpRGKkNdLqqwaoGqSW",
  "key6": "5Qmr2uAmuL9sPrzqWCQbhvL3hoBhNNH1uTXKtBbaTpcJNZHyNKTprFhwmsdrMN8X9XJ2ccSj3aww87LUWB2ZArxY",
  "key7": "oMcHitnBrze65g2rchkis2bUaGA76a8ocQBSytVNhxs5oPg9chCk3mNCNDNM77Yk3wP1SdbaEWF6cWxZTgNyPQi",
  "key8": "3EWTbqtziQvJxawxTA49n2uaL3Lg3u4t8jtSWvLV2sxcx2ckvfDkW6DznZ3mZTJNFY4HdDqcA7TkQPHvKZC7sPHm",
  "key9": "2qinbvgfXGisKgWtpBjeLXWpfs2VxpmHdG6Xnr5YAoTpS4KExTHpLvqsjFLnVZuoF7AfyYWzueAevw8pXw9YMK6w",
  "key10": "3AbqA4pktXoE1RkfFnE5DyaCouskUjY5XdrkQ3cxE6DEi1jKP1awcrhTySknDgaStpCzWU6GVzzJtdmMCVJmrCHY",
  "key11": "4gPwQjLEYsBCFmq9MpURkRZmNqHkgHBLL7s1RA5W1EYinhaER9vGw9XTscLo5ibn2hH3Lmx9gzUNg2dPYwiPH8rD",
  "key12": "2dWCFUhnHhkoJm2mhm8NLa3jXpTHbf1ePxM9xydW2iGUcVJWNKe2GHJP3J5oVMMj7tvhTZdYsrqwYfAZicAH44VN",
  "key13": "2fjCKsRYsucvm2WHXVDobLLP8BDCdDePcgYP8naVmLMeiHQNaD3E5MZ2KsJqxx8DPWF9BujJLbiDZ4JeVm8S9GD7",
  "key14": "3xTPY1PFgWE7ZHTbyymAFWvDJssZZbAyfGSjVk4pBzWCT5wQrqFkGVGhHVJyNDWYdMzwiQjGD7Ae6xE6q7GLxLv2",
  "key15": "WbhpCjsu6R2vim3nhP9yo3anNd3sYZ84TUAAVNWTd1zpnDqGy23KjCFAC7JGWtZarqhjrdx5b8xwCqL1hCnpbbE",
  "key16": "Ek9riwhpYVipBpqTcJyCbbEGzzHNLdhoapegSTpBFgXp8K5ZSfdAcBxjvV9hYACGnukUoQSqn3CXWrGtKFRJ1aL",
  "key17": "4LsmQHNymfsVxzuaJaYzBoNEF2pPcFPSEgUJxhheM5HH2pCWeLwpV3K1gC1ZqnBAgtKH3RftHD7GGAdjRoAgRuSU",
  "key18": "2A9jjHYx9B5VyDCniXrPEgtWtEJZcq1ca4DL33Z924aqCggGJkCuEKetoKKuCmndtxxpoXVcJRsCNaPAvRhnbUCy",
  "key19": "5CGDuPd2xCrU5tP9AsSsLsB9NJZWBmfGyFvttsPiEjAix91kvmWjfu6EZuWd4EkZoYe3hUAt47PhbPX8uT9jMKM7",
  "key20": "3nVKd4AWowZ7rga1vFGkVHPkssUTkQMvQARK3RazWgrXGZTmm72kC1AjmQP1yvUcFn6nS1EV9B6QM4sLrZM6N5W5",
  "key21": "2W9VtQn5KtpgLNpD6tWwUY4nKfUeXHrHrjoYhKQaxjjEzzpS5Y1BtzB5GW8YonMrKMeRrNmaF1a8Mr6Jt8eKSdVA",
  "key22": "VETFAAtcSeV7v4HQNXVjWsjXQTAdnW7VLrHMHSzCjsU8eRsby3YBLxt8u5f2pyz4YcxZnZQ2PesRmEGgC2PLzkP",
  "key23": "2sMxEFCGKVVyUTvojyQfdTqMNFRYxEWnvDQQwsSmYg6A6wNFom5rgJeanzX39C3jwv2RSGhmfHxpD7LniYtDi4V1",
  "key24": "5PcHuxibqh3u4BZNs6ePSy5soVkiEoNpwpSW9xMmQ6qTTukUqQqRPuaK3hjPAEWKPhBUCDt9ZX6bCQdGRwSgZGuN",
  "key25": "5CbB7rC8jmmRw8hae5bjKyggbo2rmRmuR3ereGCu3m1UHwgpaUwBqaQkxKArGssXcqJKLuxMWMgrQJcLRvBDTJY5",
  "key26": "LSYDov8Susr61TwpaVWe9Ygrz3UovGALFBAM4EseJeqQmjf4nPn5F4aHo7Jw5gCgXTKkBGwdwQfVEhc4KDt9RvP",
  "key27": "21DnCQ9BiFuyR66NTyi2hWytyo8j8H3v11yJJR6ryvmkSPpgTRA6nbcd3Q8gXDEb7AtCHNrtc7g8yNabLEE6jSd4",
  "key28": "64SCG7qEWuz6jY9bB2u22zV9e2wnE2F6asQYFvvTEGHVvtt7sWSu5aEtqDcNALtbjYnQQX7RAkuhZP32WCdZjAnt",
  "key29": "4cgJqftdiQJVTf3dpzhSzYV6G3As9NNP7JHC7VLs4MwmAUQdJiYbBUoJDWxJaQVCAT3Ywt9NsJKX43WWD953nvfJ",
  "key30": "3vcyTErv3Ykbs9x7qoksy7pLzNZ2fWG7cvzfonyey3LsbasUxh9eskjW1soRhPdB89cSPdVcXq11N1Ac7bXscU8H",
  "key31": "2f9DMoKWeYvamKao587tGrWpZfnyZpZmUMZCRMHA3Kc5YfDtd8g8Kn5rm4Sa2gfgyATewzHjqPFG2Pn6mnjUbn2E",
  "key32": "2aN4M94qJaHNBfgy74hqZg4WkZZ4ZxV3wM6ZDBFksyfreG3PG8vG4T7dQmuRiSzncqAXbxKBQRU9qdfBTGmTcZKq",
  "key33": "knkaxBBnEBSmoFnvScTamuYTFdwPbHPu5N7bXJNfFYdpEg4xCLYRtxmy1riVoLEeSe335Eokv5JUazLsYzcJFTh",
  "key34": "4ujuvCCzHJtYNGbtNFxQurq8pnTVJTypRN5urfiaGebVXRHvFjL99vxGbfYhzKBnKjZAVEU2U9zGFb8qrEPgrUYj"
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
