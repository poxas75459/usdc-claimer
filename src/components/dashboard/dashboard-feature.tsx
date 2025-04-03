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
    "4UQWjQmpfiDz3qYmBr1xk38TmznwvZ7Kskvt6hmMtCimk8hE2uZs2ekg3xBoKZ5TVJiDnKi5dgTGRBfPweUMAWJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwtZYwyRuMDnBWdcfrmPmwnGTcWPgdGA4V3jHcrj7gw5jz62te6dHG9xUzLu88UK5UUJgbsvDJSDDv18oUPAgVT",
  "key1": "3URBNJuNbLku7Gsbyj11PvLCSDAuL7FxKGdkxXwamMifpQ6cdm6a6WeYfu1JyvykXTuAsucBZbHwjNv9C7PKrcSR",
  "key2": "5fA1rRxscgqAtuWcyfZKe29ZPFu8nvKGk5HQ3qvdZYyNsMkaGeBsaFLNB37fACTHMwjqNDbnjuyqhLnwESDbEkre",
  "key3": "5CGioFkNVjCxNesPMX1MNyb6rUKtikFEHHTM664AKmhFMtmkRA3zvYmKqtMxW8ixQ7T3rqrzRuR2gxErqWrNYiAp",
  "key4": "2ZKqH1Hf4RM8grfPws3eckRhd5kKc6y2ZP4X85zCtaRDzUjPpP2xcW9z8EdTsTxQ1krkTTiMqzVHPX9PbD3kjeye",
  "key5": "2ap5yrRxve76pXN5drapzNM2fJqovf7ZRNEBQd3MrR4SVP1qPfHeRSPSa3wPuoFVoYtPYjVohTWytSHyEH7ca4Dh",
  "key6": "5hvnBqquMc2NcEZxUi1TozcqvDwwHYMRSQLUm9pXsdv7zG9LyVLujF5Uer4FJ21zcoYBr73BqFps6PoeF3xV6kyD",
  "key7": "44yTcEAfUjkA9asGnZDq6c3q8Y1mPtx3DmdKqe9scZXehMXuv14a2w5WZ9WMtbaiGu3nqEpJSbjz6mQDdunagePR",
  "key8": "4TKLJB4zi1UbiaK6bchjJAkrWnzN21g5h22XaToqXv3z5JREKVMVnK2Db2h6amYpJaqmzXeBkcghXmqwSfsXV9XZ",
  "key9": "3WgkQduZXeeqzRdXwC1YBJ4EuuWHc1pWtbpautBDRzYgZfxrDm4zAt9FyWch5AckMAharguLrPYw8QH8TyCoKWC2",
  "key10": "2UUwyd1LN46fk6egMG1TecfGtjqau6SSGcfqdvqLgcDqZpyc1cHdzzyMjMWDYKo7HeeS6vU4ANqpTLwP3ymPVayr",
  "key11": "3LY3yJzXrVwMFZB4kgWwyxrKQq3YKELRe1fpMMK8cjyqu2kNwr4dosfM4pcf94zoiPeGU3iAxQyS5tf9LSn5RkWD",
  "key12": "5xi1smnwfCWHhM1VNuCEvPAtWWdTGtXk1LGnTmPUty9oS6YPwueDbZ1kLaV7g89iH2xJodydq4dzyE6LGu1M4rh1",
  "key13": "QornKsbSBwiKMm8mXjdkVEwetXFCtafLoSj3qBQ3Ynd9sbqJLUy2A1Az5R9PVmcVvc9APGsFDmkWbXWbjUuEZoq",
  "key14": "21tryeHR5ynk2WkP2RCc5fmdaBzUemYTjXXgkjsTbsiLaxTGXpLVeRYenPz8uvnJQMt9JNC1H4hyjERAetGQXRY3",
  "key15": "5mwbTEUyjpWy1cdtW5UjrtYrCfWCqD1156qGt8465xNAKpMsYCpFZVMJtcTg8wTGW6vHsdJyqkFteKcjKv3njK4C",
  "key16": "BxVDKZsJSAMQsZmSZEoRWVVPYwu2ZkSDmPmg3D3EyrGWmX9JjS5sCiKDj9NJ19L5dkdLBWAytXeGJpJ2znDG7Fi",
  "key17": "7569An1scgmXfFJUhz9DLu79gEta8NvrGizWCLzicUVp1vBDe9UEC5HgukSMJC91dUeztiebsRXSgEm9rVgpYQQ",
  "key18": "rRRD8YjnPtpSRPmwHvoiktSCq9awgHiZ3ZBP3DXhBHFsERYLWTHUsaCp3AxPR2ammJ3mQd2oEerFmiNL577Tait",
  "key19": "213m1C2rV7d9gta5KXrBKfWyNzbienGqUGxhNL8n4kNpV5kuYLC9WveqTS7DGzbdjjG4cHYps21361HsajZNjoq9",
  "key20": "2V9hzKVxzNf4ypH8EGVc9b8ei757xsQgCkYqNF7jTB8BNouPLsFYysxp3iQiA1sL6YiB3u6D2959d3LhmUCPmfbP",
  "key21": "5TAyrA5XAATtNbpsFEPcAucWZiqNrhBsHWeRzzQysnABqZNdo2tKmJTKsobYocLMZYGXWPUFx4FEziwk8vkcPxM4",
  "key22": "2fT7QLWZ2onn2iyCaogKUjuLAcsRQ9CbfXoCvkRRuSoETADKom17FNV7eZyehP744btw3yqG78nJojAeCxcLCY5N",
  "key23": "5UjzawuPa4HT1eevjkCdJA7YQpEM97ZmEnfbPHTCapYcxK3j1JtCJngKdYeFfwrb5pGoSNJBDk67zP7sHXToDXT2",
  "key24": "yVoFxGaBkRG3EXotk9oUXtAmKGEVPFHGdVHE5ZFaTj1AbQMNWiRZpAuqHyYy4WaqKakePoQxVthTiWDHvLz1jsB",
  "key25": "5Pd9xQLd8aMmsTKGG5oe6wSuK8ipLoVNUxHnVPwYC7QPTpa3ppQH5zPRhsbuHiQXYgB7X4qFPMSX1CkzFvc1oA2",
  "key26": "4LGbUfoN9vs5RFpN1fE1CaDreML13TwCGviaj8y2Bbk5vNTPE7WAsFADakTbHxjYM9k5MgyDNQWURxgUqrGMeNoJ"
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
