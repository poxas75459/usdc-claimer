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
    "5XJ8C63scder8EgnqZaygCBBtUhmxPuDSAv4XVtnm4UsgsFMz1J67HdHWD8MWPu5NMAR8NfoQ9gL19RGxXgeqdFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M33Nxstfx1oKsRguQJy9gXktEjeoYxGgtjFyiPtzwdevoWxL7Cz97uMTXUaSN1oe5i9ZCPx6B7dMC1ZGdM9H43W",
  "key1": "5hJCqfyjFgTBqwzD6yA66bB6Q7yyfJ7HLtmDp4y5SJAKXB4Yjc3PX4ciCtByw4vF7nrV48kK6kducBYZm87NXDFe",
  "key2": "2MB7APVwtQuokyz4o7Yizj8hBtqZUJ1bmNmuud6wVYtLKQGmTHKqrrBA6omrTjTjyzYdka9F7J1BCQ1cDoSBub8H",
  "key3": "5pBGLAAREHKYC7FeL8u2AB29EupwismAow6Tb8vYagiF56bz4dLaBmr7a6bdYzmiGUw7GFHjrBKPuwQnec45DrQS",
  "key4": "5kEk5vNyhBwo7iELpcBUPUp18iuuYDygYdWAywADycLYqWLh1XVtsMw2j7e8j5RjnXJ8SAC4uvN3ZtTMaz94VCjj",
  "key5": "5TRaFAXSAofg2ynHbsggBU1FU8tUMgsAS3Nj85P5okEnzbka2B2ZwdNuoLGrvutAw9uxJXjL4woG7yyaFyotxbwj",
  "key6": "3fMNu7WVoqpXGxA9r4ZQq8cCAvEsa9e8pXokG9YV5RNJHmiTURfPbeXKVA1dCqCeMNtCFbr1y7dbpQH5bXwN9yVt",
  "key7": "5U7cVLKyQdX1n26gKuTXMLUGNJNHQHLtdBp33RiV7egTSAzqZmg4MxNxLPgUsEaNs3VUMVZL3AqccbKwk81Ki9LH",
  "key8": "3wSQuNfxk1MvKBuxSh6i7N2quedc2hkUPvyW5QxH4LaSiBrJNH3yZrJ6Dk6opT4hRXrGbWQM6aFy7UffdckVcYuo",
  "key9": "57xurQZC4Zc3TyQRvyfEAnYoREBHYBuMtNvkJBKAVtBprd2rZWak19x5JTrYWMqTFgqQ11GJSCcBJ8fFLmQiSYBm",
  "key10": "JgF11CkTUzHeGiC3kDc8KBQHiK5wMhKgKgCaDBdmxAZNTKEoCwjFZXW5EHsfheBh8cY44v83K8k51B3Xzdmfd2U",
  "key11": "36uPmZrJwKaMrxbKvVAH8tTz32iZ5uKZudiAwNCsdV6h1zU4Z4wbXBdPJbbeMDJVCbNJMk9rgUpS9R1RseNXXTV9",
  "key12": "5JxJZvuTXPL2RNbcVDchWTYwjGyh4bwLgBkSY4bDHgWwEu9r5xTgCUg9iXirVZAdTyFj8rXh64FEXFXhqSDPbwgF",
  "key13": "2ejHZP3Q1b6QGUkovSdTvGXFGggQzabjSsZTEcwJwPhspnyJ51rWZAPy6GACV36B8XNPEhVXER7X6q5JcthY1Z1d",
  "key14": "2C3gKf2V8VXbyTjD7tntdb7m4Fq5vrXpVgHeqVvR945HZtdnoN38BgtJHv73BMKPEqp2WvrmsLUFG2jqUTFN3tBa",
  "key15": "3EEv6zJ6X8siRxmD8NLcnXNQJJskr6VH13TPTUFJdneH5VBTQsozSfsRSmRnBY1qPhFxYdzQ2kdbrioavheYFLLS",
  "key16": "5HDCAwzVmW79anKpSFEdCQs8v6NYX6aujegLLeSH2CYUWmtN6S7nPqJZpV7LdZz98PNE1NQVh3BzEXm21jEWYo3B",
  "key17": "2VkMY4vCqRHdYCaazM1P8VdU2Qoqb5aFTGw52qdDpVE8gJEUKsya7Qje4qjqr77JRpBAyA6cvKqFcexTxBa8CF3K",
  "key18": "4MQpNwr35iaRsfH4RcoXP8FkWc8TUK5RCanPQNUDf6tLuTvXaVT49qeKr9KEVmBHGGpJ5UqNB7fLWLobyTtsSKT9",
  "key19": "2CG8XrkWP57AXo6EndBJGrgP913muPKx4QyGqpACUFM8edMLPzHYohWKuqEWFMpFKS34MnhtiYGRShUXphmfyTxA",
  "key20": "2MqEG9Be4supTaMyymMmnvqpWxRGb26EXuRPTGkc1bsKL22NsaxmQrurtLDG4BqHAsqCfpKiTH6BwZ3oYT4aYu7x",
  "key21": "5MWBeegG9fvMuTMpvbL1tbKpszPoLrgkypa47EHoCd9Pd7k869Wy8Aqb73uhYeffSUWJyfdVZV4RFxLZP6pYXAJz",
  "key22": "ANvqUcS7egJ8yQYzoFFBNNzBrrRV8rzoLXfsoPX5ziY6x6TcpEcjCQrtPPv5nMVmh4r3BoxY8uyRXGcG83Vgeme",
  "key23": "3bWbgTQWx2CM4BDmS3EEMDaVTQnBL2gp1J1gZF3qiT3ALmXqwaiRdDWyZuzsURPNdM5ALxmjfw64wjqfjJH3Usqw",
  "key24": "27uyMaVbY3bhH5TniCE7QZM5DqkAbiuA32zpFEW7aZxAwUQcFF1a2w3bpag1fMDFqoAjELzPd1MV9t3Z24zWUQ2s",
  "key25": "2FenbZH8aZ9hWmpm11USmHE2RXYEPzVBtYy59y3CXmcMHKL3AuVpUHhDNVAJmc34DaQGiUDA9GsqfZN1dnWyzeCK",
  "key26": "5t1rDvwRJu4xaqrNV7jBJJZ8yhhz8gumHeDuyqe8QXbttCz3JMcrmZVinRmjAFPmucbYJuG6XfNtapEodKANYTqY",
  "key27": "oAcBgeXd5wDKpK9F1fQGjGeSTTotZdcft6gHJ5BYhQLGeu9hANQcf41TGPvWthxPHaC26eSUXyZ2K58NJ71vGjZ",
  "key28": "3UXBUJqTcdzSYo13ixiQtKS4wRPYEZTWETiRVt3p5xbLxZqJtJhizitdNqA1Nuoqf7xPy8C9Kf19sFPABXimjwy6",
  "key29": "4FCLJb9pX6S1UD4phgiTVzqx3DMjoQnE3fN1zkRkTpTAjrP9ABUw96jUxLQCwqaSdxEdPtCaGHWZBk4vYFrgYzB2",
  "key30": "2b6HYtD1PjfNhJPAR7Pgq3UDhUBeTbkWTfirWZ3G2sbGLPLWJqZ53LT5PU157UFjhVeWe6CDdBcagyXBHbwt3Wu4",
  "key31": "5n8jvyBJccNScowwhnLzLUGHWDgbHdupkJAHEw8eYjUJGdmNZfTbsShjQ9RX12QGUhfE2E6jDx9q4pLLm6r5cZZK",
  "key32": "5sem9KfNVmdswcDQ6UbPnfhTSoYPHYqzd2ASLUNwhgpJiSkXUCjaPUKndAvzhaNmJ5VNGQ6jGydathgLyorEZ22Z",
  "key33": "3WFEC9CiUzuawHvhjuwkKL5Hcw9Xo59ERU1Ryjn9LJ9KeUaXwrrSLBv3ogYRCeWWJ5UH76XCJKQYQCbWYeWvtn5Z",
  "key34": "GKBjGTesdMuesrptTbgm6uP6QbNwUb2rtjoio244PQKa52egMDY9iGLu13YXAqd6HyikiE1jqnTs7gCUcTMt8fo"
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
