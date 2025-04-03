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
    "5KphfCs8qYwh7MVgLaQDzcrCsf9g7B4WP3nthS6MACtRpKn8n5iGUdrAedtAsVMEoCp9n2gc7TZMXitV2ysqTXyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4XK6uypGY6ggUYah5tKfMTTsANJYHXeEk1SaGh3qW8TsiELMYM64ZPofdQwRWC7co53uCt5NK8gRwHU24bJtyz",
  "key1": "oaoB16TC2dFJJL3hZu4ENQW19XFCAkTMRU7GU7XsM1u4p9kvSLyET9Ajx84SfXRn8VowjHwrw6WJ2yJgZ78AvY3",
  "key2": "MTPzxdUwUvhp99spuZ9BSFLiNDmrkbsLfVEA1rPSFkNPSnmgSy8kH848vMFPgvG8gDrufNBTV1pRyjvxzRohLdW",
  "key3": "4EibBXDzsVXU7WSeAw5k4zurdvfNKegMKCmxjraxVeH8PL9wh96JMqB9tH2SuyzuCTBmCGXGw8cSCM1Y1kGkuuP4",
  "key4": "4415cZSbAfHyEaoX3Km1ZWvxn6MoTqLkRf2qmoNsmVvfAXgoAUxT4YVw3PW9Qp3N4Z7CvmXZQMtCrm9SZfgiHZsn",
  "key5": "3Z3Zx8GrMNc4piVYdUdWfyF5KbYcMgsGicCh9NzrVLd1KiCd8Mjk7bSGHxzzLdvzhwnWHR4vYfVfR1E9gpHc4uEz",
  "key6": "5qMjTS9F4mwN1pj53T5w47X7Y8dSYbyVNr8oyUf11w7wysPqtH6jC16BXaGWt41vy2iLeyq8dfirH985Kz1oKht5",
  "key7": "5oc9ekKPZJJXNAKm3NjusCb4SEQ5PheYo9xVyJFTb5TxRVYsuSLkAoD6HLHvcoSydBFygFxd3gzCdwNqeFyRxFgo",
  "key8": "2rkQBYHjTXQsnVa8mJpqGVyDSdPRv4XM27RgGQyzJ6xBBhDjUM8cPi4vfmJaQY4yL4vjZ15azub4Nga8SFrKYYaK",
  "key9": "65rmMbshKPcAyEBR6e7nC3Kae4u5pcx3yNWyLmWSrmp7qum1aETiAtqrfpRsgdFhyczwPhdVPjwzniCa1GgSDAdh",
  "key10": "3fptH6N38v81fRnDPytcMvYC3uvUqVYRAv142qZ4PenssgVidnfCwEDq5ianzfPgwgofnYZaeHdcnmgk1Tqa8bso",
  "key11": "32q7YXbEYZ8dHFNwzbVfhsZXsXoue6JFQDt7KL39YTnV23p6udSBPMF6qYyje8dQeN4Bhm4EsTqka9udhqg3yesT",
  "key12": "5JoDhF5Ww5rqofkvGnknaXEQ5cYmrtd9vKEEA39SdJSiRBbUfHMg9gmRbbVJTyC2Qtf7Hrd2vZuT6hnXz7cQgNwu",
  "key13": "5CUAtbAbayGQSL5rET1get2jSWChpnCPTSHVGvkFvcPxgwcWwX2MXMU79J5kjiRtpVLSXRnwZjRg5pGim5QnLNPQ",
  "key14": "4FGTzeqyicM4jEduf6dYaQdLeMw8gmykGawKWVpqaDFS1HfeEGR2uFnqWFRU88pfxU3tEz2vVJh6NnNvs1e5pSUs",
  "key15": "3gg74cCTzTs3e8ipyXvMeCbgr8nQfHS7LuQhaGfx4d1868u8wCLb6iWELbcELXzbrK2ZvTgsgLKkj63uEUYozAFx",
  "key16": "4qvMfLFnPRAea7K6tGZcL2Meia1mebqfsaaBnbWNLDQS5qzisfPyMpKQvAkiPdKPZYRLG6fikNFmarBJZh1QpNJe",
  "key17": "3DbgAZM7CM8mfcaB94ED3tkhXzKR3rysdwVt7S9s3Hvtzwz77bJn6TP6iScSEZqvZ8Qurnn1BwCQYgT1ALbWCmuV",
  "key18": "4zLx1Eabzfn21kivV18kb5hHycdrfS23VdxzbSfEdg5a3GeLd7dcRZtfNB9TM8HRQQ3h4cgDmCmo8ht8KVLTHJU4",
  "key19": "4ZRix8UN96xHm7RB64mZBVmcqkjtFoAdY1CPF2mvASthd1yG3mxQPbUXgJNxGvUVg4XjRk7CQFwuB5rJMYGTUgYH",
  "key20": "5ipCcAvsoEDKj98FNDKJxxipQvpWZeKenZ63swR3Add89pajqCaASSzy39CgG5KRg9tRKLRe1LYQWzWLQeABxdxZ",
  "key21": "3KZejDZX9m8EStMK3ip7TpSZh2Fi5fvGBJgSrTitG2DgairCEWaEoLZywzZMqyDWYGqQAAeUf9R1LUkw5irXu2MB",
  "key22": "37MC61rxjVm59jFjnEmLEiYcHHXRpAeqarK1iwaRM1DNzoEjta1nZFizYk8uon3HdPqgpoTHWHPTznmhRKi5ayB7",
  "key23": "5NFufRztogJMxMoVKiqfTmWY8Xf6UBswhC5SNcD6jgzJYrXnE4NcgYJ5BH5NzaXwLgQ9mDK856Aw1Hucz53Z6KNX",
  "key24": "5Lax9yzRihHeBJEqsTSMrX24DQ4ADuKcGTAUVXWoP3xUbAGn7SVzRG4vQKyk1gQMwYKMWYoZ2QMcgnpXfkTgZX2j",
  "key25": "2gtADwTE4tZabUtM1BCitv1i3grrbiFMcXuRBSxjYy5tE3JqAaEHnuNE2hgdfUmaLdG8Vb3tj1LUfxfccKYwcPq9",
  "key26": "3MDPXGJVwyE5HgXB3Ra7AiHHkdeWceBC3QDrqRqaKdbixYHjAJznvFgphgWrZs6iuE9CKpN8TEhqgFymkQKLH7tj",
  "key27": "2zvGs4HTxqyTM3esMKD1EFYgNbAFR4eXCwUfxvmFAGeWCDDoRzRsdhj45gBK6cvp9bghYVAy3dEupUs9jsbWCGTM",
  "key28": "4uTZnEkyyuerxAYc9ubRvWEYEXCpDFBBzbnY1FQKtK2RiD6y2J7PgoaD1dDeS4a3kJ7c8HTrRbpjyTYqJNH9GknD",
  "key29": "4sqTkzh7TBX4oBjbDt7Em36kNsGUiLhbowvXZ6K6BQy842ESJdJ6CAMbDWZFxy3G2Hhz3SGtAF3taLdCCd3NeYnf",
  "key30": "2rgr5tpZx8gUP9MyZ5MkbTqWZVFKuPQuy88TYmNbXdsBSxFVseJYcNf5eQjvB5kW2GXmQ24Vv5pkoZNk8kSJ4Hi7",
  "key31": "2Pz9BD9FShNSjMAy9uBk1ASjiv8qBJR42Qwepw14AFqX1snJJNthXad19RhKRqwtmqk3CzFL12spHJow7th2Gtn4",
  "key32": "4QG9YEQSbjCmoW6DujhrWhnghfkYXkNbbeYdmRVBxYBbRzZ8uvLNWvW6wBN7CxcnGW5YtuLQ7nYUHUpVauNk4FLA",
  "key33": "KQ9fDVQ8rmAo3f4M1zCswaxFwG7GsnmctA24DyFT7rqKWB3fg92P59vkyH4NvARGctNHedhtTwL7vTFin3N3Xca"
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
