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
    "2gTowNMC8hhSsD3ZMeSK3mF3zXsmYDg7zSihxomfkJhpoRSt614Svnm11bnv8q1E5H9gnEuHu5f74PbdNjXXpUFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UTNdx4Po9GeqVxQkdV6SBTDy4jYbaWCkvAs9nxMzakgGSGaoUS2RR3hRiWC24LhxskaVw6is4Ygbmk1TEeXEXPw",
  "key1": "nfvwSMbb6zcBWsgRuKNWotnnRtenBKHAepJHgXxzHQFwfoQtiJ2yzBXxdzh33gHjct3fkfp6agEmavnBRvma6fD",
  "key2": "4cmYQBy1rPCJpvzY3LCnwfEXV9V8yQQHz7XtitWMjk65YxFaeffSsm6Qfsr1LFkeRBaAmu9AR3iYzwshr3MAjFMy",
  "key3": "3F1jqhAgYr6zfRwP59QcAirSxuLamNUvQ75sYsuf4SzF63TQuRmhaxiwHJXycSueAUeS7Va9Wn2nHTuLUPyGBgMW",
  "key4": "45nYgjLJqDr6dFDgWZTtKaGJogn3wn45zioMuTBBUGiuxV9dQMqFkHQ4FquCBANLxhCDjsjBV8AnoZEHcA3Ra7vU",
  "key5": "jNHHByzjcSr95uwLxHVAjPpvS1fpDLrxi5uVFxZMLySeaKS5o8wp9yyLoL3rFNYHdczM3cWHoAxNNMhPVTJuEAn",
  "key6": "5nJgPu4w4aczE3SiQ9RgR9VWtQjbC9wFQ96nx9dqztT89LG7iLRUHDiMB5rby2UYQL1jrbb2tjXtDLHHQgKjDGSa",
  "key7": "5FNynu2SequyWRYiCyqrsK48RbtwgHp1AzM5nVSCGzakoHDzzL1dxjasoZqWUsgzGJkJ7X8LqgPhQ2125geNZ8Z1",
  "key8": "5MN4v36cDf6cXtW3USVL2qALKeyz1e1sCEramgws4LsLri1DvNXCLz29x4kLJPef6twxJSwuVT3ecyw7RHSFYhYd",
  "key9": "31ukvn47rAP7aYrNR285mrYR4Cr1banz3zKpZ4BdTp7UcFnBrCohyD3k4X5rfQ4M96cyeLDb99bXtsqJW3nAQ6mf",
  "key10": "5uohQD45zt7tErbMYmpkbeEmnQYxLWsaykugyoQgRCX4UZUkPDLhZgXnqLyr4LtBzMEbUz8yVPPB6B3xRhfArJMq",
  "key11": "JELCPttd2cPZNp71TffLv5ERSVS9c7KEiDCijsUyHaebpu4fLy2x84eSm9ADVXLbEpRg4nuLze2EiQsvSLchuzQ",
  "key12": "4qVttJih53aDA6iYJP598vKUpX5F7bWQPEH2EfFoEV7WTNHnLF3Je23Dq6U1ytiCt2rGiGDJ4zseVkeRy3mr5ffi",
  "key13": "58k6pNiWThnjo3pV9czxsMjvXg7a276i8QrLFCF6nVhhDTWddZMXQFK21RQhNTNgh3BodZKC6mho9bwDmMHKmNbQ",
  "key14": "2tr5RGSosYWoUxucwdDcUohoCsF3J8KwqghhvkZKc4wYVt3GvLs58u9Jqn8SdPthspHF1B4hhdAexV81nbXp9KW2",
  "key15": "i7gdLfvqKT4MhUMEsfo9ReUKVSPD9mkrGiqzwymd8dKwEYq3wJHAGoZnfRAPu3z7p2zCDWoLw6KHJpuoxxH8FeA",
  "key16": "4ZWepjjoHpNWPjivrgNpMPWv3mxFLzxbJRnCN3fDQtWCxiN7u5hsMvaYC56LvzjCNKq53bNpiLwZsjTdo17i56Ex",
  "key17": "2mRu4mC5AinqMeRtYyUAVDYvYnph8A7Aw2yHReD8THV4FAQf7STYUeef3UZpGUrx6m7mbzXPNZkMWbBMcs8RCCUB",
  "key18": "3ccsFRCSC9XXkbBGJQsnSPnxwVBVN8beNXraWH5uEdeNfwim8q8t2oWWDeMNw6mjMihbohRzxTWRUW5ZQcXPQpxm",
  "key19": "5M32DXLvkNBbiANwDngQbjeULEAbm1X5KWCNtEEfvLLYpYhCzzCmt9GxAq882ttJbZLCcEcwNbsMB8R25wcsbpDq",
  "key20": "3d4hrkuGA4acn3n2xXEYcu6h6gmToEkwJB6Vm4YJB45P6X7LxekCLaEfM9BRAw7cZNw2tdgfpcfwaShikjcjneky",
  "key21": "2hwkHdaD1f8FArLZ3ksvmizKyYtUCw6ejJw6G43amr1V5q3kc9pWCwLEifCEpDeq67KRqc2k272KynjhHps1ucHx",
  "key22": "3huoaLpuyy85xtny4nwNdkdJS47c3u3iLGDH5m4Acbh7hYWExy41JQcfnK2mV8hsa3mmmwpTV12Toxpz3fE1HW7X",
  "key23": "61HmGSnL9bJKLXmpxT3htQkrGXq7iTTLTNjFzUHF9hAwsdmW6F48immYZjgFJ55GLbhMq8FgKevEmWvuegrBHACr",
  "key24": "sV57PYA9n7QqvbkYVwxGrHPBDy6g4vaW7j1EdaVegsCNARwisUzdvpRv5JmqTNmx3zj2v7zKqw6kAXexkvzfF1H",
  "key25": "6CfFQsmmXEZ5RbRYsWaHnfob1sKdGDnERdKHHBLmw3XDGo4wc96QATf6jBcVN1ZPyjKGe41YMv7VE9HqK8cnBUn",
  "key26": "46AiiJd2rwv1K9dD4swQGM6UeSz73cQ98YEVkAogimWK8PKZ61XZpDtRQVxoWnFn6T1SeXBQnWwqNw6f94PD8LN3",
  "key27": "2z6Te13xmw4ELutFopcbeW5sbcfuQeRCtNRGFJryc7MTvYGfrR6fiDNzf6myjLaHsEpCWo5rAnXXimVEQbTe2fv3",
  "key28": "4ZqC1rLfwP4SxnLUYYtwALZsorxpnAvCve18rYJaQr9u2wTvqZqpa6YsZhk6upcwG8GJsytx23rMC9Uv38gP9VaN",
  "key29": "2zA2hgYFSwNVXfK5re3mkuUZM8dirP8GDnFpSYtBf1KX5eHjmj6cjspFpvpij2FnspMrYWrEGejvoQP7bD54HKH4",
  "key30": "Z4CTA3QuewnMAeZwbT4Et2jjb5XNSEwDSNnELsAsgvzm3YiEDkW6Nxx2rTeRSzh6TAdqL5btrYRokHuYjUao1UF",
  "key31": "5axvbvRa6Gx3zeHf7conjcdecJJRfUvBMJz1hovzCh6fLECu4Rv535YYUygMjFsY7fr9fhs8EHeAfyREg8TQUDQ1",
  "key32": "2iJB6zbtknyrRPF3dYkF7Z2Ya6MuANBhcghzdevuuWMYki8koYNTxPdtkr2kG3SBraWKvG5D6HoZEgbRHE4kDdDD",
  "key33": "2acShGvVFL741fRxLqv2bmEBtzCVsGvz9Hj9HfqJQWSVGJXJJzpW8fQqf6r6FDEfrQ1JrXMQ7buqfv2BzLduBKaT",
  "key34": "5oysWDHqWje3Tuvf7ymya5iyMghtrYStsH3EnKZSu7f48ic2qrdzA3htBCiKPn639HaeGdtD1xenjZxoas6uyJCm",
  "key35": "eqvEQuhS169ezUUdNaQsFwap8wiwKUwaorEQsLAYyfmGp1CRB1Jbr8PJ72ZeXGitTjSQphZtC9rrGhaB9J6Ygtc",
  "key36": "5t9sPnVzURsKG7Tc4b8G8p7xnhCcQ4ojyktaCw8Ndmw3DGeR4o9fAmtE4Jd7iAH6oxvt38Rh97st7iq3SEHxieFJ",
  "key37": "6zjvJE43CjuHkMupNTpRarzpHchUYM369fTjCfiUFoiR7MXeVzKzuNFggoVooGRdySEphUF9duaVjr4Fv41EAHp",
  "key38": "3KScW61j6maQzHRT4i6iVVD28hZ6gUCLTn69aTCY9CqX15pg8jh1xdpcxckZF1Dr2STXidiyEjfdENVBu1r9i9ve",
  "key39": "uQvDqtynDUg7ZFwfJRxBos6edB69LkjNd9osJoPL8yugKnTRfgNqRfZay1RVtnCbEaRi7yZftqe8Lxi4WKvEUx9",
  "key40": "gWFP3Rw9c7P6QDYjPN4hbNRRGtvKov4P6tiKFeBeGmaDiP7mX7igKDCzN3thxypfpE2fErcYWDJvxvy1471KmJB",
  "key41": "3fqvJ5w1qLS8hN7pBZG2rYCLZL1zNzHVXr4DrHfyKnTkbjCfdA2eVJcqC5w1fZfoT8c8e7hN3Mh4Xsq2UpqwJEMf"
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
