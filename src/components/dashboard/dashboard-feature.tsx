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
    "2qA4CpPS18oWS8J8topDxkbpQjp4d61zAC5xym5K7ZdcgXD5EN97QBcAFtyMbyiVziBRpXjB4KvfRtoQgjFkCEHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKmWHJTXGD9Dh24W6hgAwJ1xcYfP49jhRUSUqTmrHw9rjtpwhepK5f7CvgfWZYGUbyKoSikJRLUG1DnU4KPDwu7",
  "key1": "5M5JtTC5cs25P4qEM2AvchE96uQ4vpe1FoxrESwYMC63iJWRpnkYLGDRbwaRhk1cnAJJGQ943c2kzGHem7WZyC7J",
  "key2": "6kNudb7r1UmzvXWnA6TJdZCZ2KHbgqNgEfCW48DqZ9hn2pTsNTByWkkz6WrLhKTr8nsezgoDZ3tUvn33Zg1tr76",
  "key3": "27WqeUJGL2stdRu8jKSZDpuVDCi71VY77qb2zmXcPFdhzE4VAASU1BSuopkFNmhdDN4TvXtLy1VzBxKdcoWXZXvQ",
  "key4": "5xgQUQHZvAxV4VpApsxcdYRfd1bDaF5X2nSXn4cLoqTUYbug6fg4jUbUwu4ZwthqmwTizLoCjhXsBdbNr6fKwzhF",
  "key5": "2bE8rsEUMpaMbQfxEj8v7o2TqNoKiACxubqwNVYFET6i78C39mGYSe61Jh6mkaaFwPwnZjWnwpnWwcu4SRf2x5ze",
  "key6": "2uX8c6X5XpuR161YpZ8bBf6SKW1gRn68U2fPJ32s18p4k5B4TR67NigHHCBHK9qF7aAVWLdouzFNUhQunrFi3vLa",
  "key7": "3corKXVnAtQtRy5NK45JxcBDrmnp7C7zEKPAmTQdHiY3MbUMYv5SwQTNwomgXheqKjhxaZ7dXzvXDgibmi5MBV3h",
  "key8": "4aiEFSa6FG9wMqfUsEht4fny71HKJxz2eFwWLyNQ8EsZCMAEbc4YFvTTd9CKcDiD46wC9XGtmzf9HBJEkH54Ez9X",
  "key9": "5o14tjfUmXoEjUzQFnXUMYDGiFpqyXGRBSn7qeSXop3Bsf77meCVvKjPqfptrwtybfFP4LcVYapBe4oFTXs3MpyU",
  "key10": "5gzwJar1dH3QEyJTNNyob195BkiPUCdyLhisCVL4XvvisCfykWwjZYi1MMqcn15GYMeuieAT1CjLjRXjgqJW8aHZ",
  "key11": "FpxifreKwQPXST7ZtJAGZUnHzqtaND9prgBDKyFmjve8EjqiA8jtJ8iyW2PL7TTjf3SkNwVWhgbgE21xWfHxeDC",
  "key12": "3Ce5hVS4WJHQbqsKde5BPt9mKcWQd9N2bh8AxW16GonA3TEWjcJpEVjWWYcmq6UBUS8L3zeU9zAqVFW22LjqKjKP",
  "key13": "62i6GQMaKxuHqYroVf6pFwMuViUay2RbiFb6WY4H4BoZFk8nng7CNxaxcV7VEzFSq3b2XsXgqSwXZfBexJFHefNk",
  "key14": "3EcmjZTo6MqSenTcWfpE4P9SKcArY4dcKeETLHt2iFEoXDt9NyzGC7C6qc6fRt8onjYXWkpRZ1jh7YESfhVv7LKK",
  "key15": "37zPJA8YXjv4ba2K9QDJjwZMbbNQKTgTHjMYdhD7CZAFQDJ2nBtD7VDeqH8t3xeihnsEdk5TQyHW6TzV7YdsBN5h",
  "key16": "22Gt2f9edrZSqs51raiewhuJPTZ112MPe39S2xkHAFGtT6iakejuzuFh7QiEUt7r5RN1Fvj9TJpLnR6t5cmykNje",
  "key17": "3xS6TrjgVSJsXxNyApyp8ueb3Pt7vYgBHFzPRRAjfBx4tGuNQ7yyPzZ7E6RZd3D7WGzAx97kEELTqVLdt7LnvDQc",
  "key18": "uFbhr6h5FfieoVTVCdb7VCbb9hMEeZFRSfFx6AxGgZ4zs8eVSmvsBUDbmtJ4NxUmx2En9BgihyEAbSXsAYYQ6Az",
  "key19": "3DKBGFaVdtx2a9kq8A7Z9WG11PoAQN6cCrjG14Lc3tdictX6WxjNEGiv1jDNezKeghs4q7KcRGqebNtXc4bab4uT",
  "key20": "4L67kuP21mMpczkSxmZutSRhaRQ9qaiz358KhoYSzMYohdPraWxdBjDsKaCTuyjwbHpFpNrVsmgsiB5F6WuyJ3Ya",
  "key21": "3uZFKvaRRCJEmHmUpsoLakzCZwbQuSeTjFqrH7X6G318f2ZytG1wAHLwxWSdL7cntZmDEWqq1nSTrkUDypxRvS89",
  "key22": "3kLhUVCmxgC6hEdsuJJ9xU5rEdo2a7RoU8d8zYceXEFRfj5aXg2uum6ZMSEm9ZrBTdLrhrjYa8onuemHcqhpkMqb",
  "key23": "3WLsQfPPdcqxLHYQdNPLRtoABKGorEvDRHtX437MsWJbjWKtLx8N58yDpeDsNnFYN6rMDSocK9jdyk5q9UrUVPKp",
  "key24": "2isM84btLBakqQ1ZdjcYkGPnoH91HGTeCiNiYFdVthhuer4aLjYjp9F7C76MKXLm8LW3Am8tyW53PfsTDT4NGdXN",
  "key25": "5jChHuwXK7ikck1BXpvDV1UvviKgbMW7jnYzES81ncDPJVoBxQ6h4kVTn7TKgPtDyUj1q7yS3J84wFuK55FQ2EFr",
  "key26": "56os9Cfr7z9vCAAmcK8dr8xnjVaWmaaPKW27UFdShitkasNszYCP7nRxeQVm9SLpaDT5GuqgkRU41PMKJ9DxnSty",
  "key27": "3Sg8S4mFdVLEwPyfJ2raabTmqwMdDMU1DRhkRW8RyG1tr7YkJZPQH3nJtj39fcYXM8wRNQHPguGc1gHqqZxQhwxT",
  "key28": "33XvTHByrpb42oysPuxTrNAo3V1vK5SRYCHVhXqB82Jn1VBBsNSFjfbJJDBcjWyxrAfspKf6e5WvvdCDLifU124m",
  "key29": "3XRgPwuAVCKtKunRc5GZMvx1c8QqLuHdvNy7HdRi1XBGvaNbkNenFLMNkoQRM3mJGHQ3VnQBA2Gnhr2aVm6AJDWn",
  "key30": "58JbcYaAFZ6REBMhxJgp1SDVJfQAUmCTbNfJn95ZBuaYXutQUCHrSkLnWscjCLYGZsKiBPhZP5eqgg6Y7Uzjqqd4",
  "key31": "33qRXMF4y8g2Gtv53AW7w1LKN5wV51fqJW345jhVFPGoYBHfBeJ6qfhTzPqGEcAhfG1tjWsf6RKJGbj5nK4eefNt",
  "key32": "5rn7BrF9127yaS1a8KZDUZGL5ecUzy5p6mTFkSVLMiURycmzeydkn7db6SPMDaHHCKo5wujeG7w1T4ojFdPaFZaK",
  "key33": "3V9xTiFhxkAG6FRJ1k7YVgLW7WoR13n61m5bTqXcYuBCk2hs4XqeqJNgWwsQg5TNKjWiSbb89EpLRphCp6Vc5G5k"
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
