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
    "4VNrfRNrdBKcjK1juN7HHmmt1th5MXJAgQXR2bNQtPccoa91DDwcSDqK2Fq7QopNR4w4wMF1ivt4MnQgWZvoRNSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixtvYgzQfmDHB6P1zjhUN1XwGEY4AKX1XWtAiKVg6RMHXVYQmYizGQcMVNiCjLAQLy226Gv1f29ne3ZEN8YtCLg",
  "key1": "S7SeoVB3wS6LWjYAz6Pmf5wx6NjV1psSofSXRouE9ChoQH5h11Fookf8kQwb6nv6eLSi8qNfjDz3ZTpxPnKFuHL",
  "key2": "3ckDGg2KBerzAGSSTSWLAS7fS8Qf7XhkYLmfH5DpuEnkUo5QkEAuyKiyrMAQb1etrn4eVPnumcnyVQdq43ow7Qvd",
  "key3": "3jWN5oQrtrrohv8wQNdtsntHek8AtWrUcFLm54bS4Vw33stT8a3jDiiVy1h1hwPDwiX2GuouRA6zC6XgRwcXWQwQ",
  "key4": "4w8U2XPKWeV7T3dG3bC5kJ5PUJkK4HoAG1nTYWGPjZKfwRVTtdaNaCKThLhkGV5awz6QWJc4f7w3CAMpG56SoHYn",
  "key5": "37zhH6dYd93H5etUiH9NP6QiJ4rQA4sznop5dmhnG569TNTLFrunBdZnLX6vPGj1sZq5WUJqYozDEgF7PuAqzZEx",
  "key6": "13nxkJ97XbiYtUgpZ9nxjWK2grejYsFC1qpE1CpvxgcViQnC6z3jiPB6mLreTpZvXD2nYEwnzHz9r2B4SKU3uLg",
  "key7": "5aeavazdWCPw1uYCXUx9W3DTJ1KUEEEDTgqSJdkEtRzqQqPdxaynCZpe4muC46RtzU8ZfQkSF7D44fXYbEWqrXYi",
  "key8": "5nKzAUjHhhV2652USBDwnSkMCC2BbD1BNwWhMGVcZryTdoZN3pV6L1V6mgsrpz3Lbfjr9GgZEuvTtwDfgsLFc6Xj",
  "key9": "4ZAGJqXqcDYNGnGuzsSh8YvyDuaTgeMR1AKQE3Hxn1RXafYRnmvyzL3gqQ3PxPtKFL3cUxMHYRnS34qqNUpMcGq7",
  "key10": "2xUg1QSRh1aUfjT5RLKeaa8YPPzyYUr4gK5BPgNhykvDf2bWfsqYM1dvQjaniKxxYEQnyC5eYdiZUwauimedNUxD",
  "key11": "pZJTV2iPjZdGCCsN1gAQyXcgwAtUnxds9j6tfMtYaAxJjJct6oXZTCeDAvGEQbyCURbe6akbVbxT8Vh1sNwp9KG",
  "key12": "2zBZL9fuTUyXuXmtDjJ4TeUpwco1xaTh6m4ddgmbgWnp5NRa6Xoz8JEQAEufVoePpXEaa6xESyYBQ29XipMnmwmY",
  "key13": "2APQqW3TUt7df339HR22TntW33uvC6ioEB1vA7zXmJJYjNcUYoXZ1WrC3DWDFcSRHniQwCJdzNnV5EX5BQVJ9Yj7",
  "key14": "2Rgs9oS7EWGG3f6CC79xZRD2C26mttpwC3DjGndi9jBgRFboq1hbKoQMomcum3MnYUjDGDNMcvoxDbJmj3UA2MD8",
  "key15": "4GWUtw5zGtPT3WBPKY9ruRBdLbfWotGopk9ShmNMMyooVHzNDhrdymngw4FFrHweyhQEAkxcurxTwASo2rAmbUao",
  "key16": "124KLUzVZHjSRF45by9ZkULDcTdq4g1AdmJtm59d61qWyELSYFAPHa3SMWVMPQH3f6WuyRbpoSZaCVvwK2BpZgEW",
  "key17": "NxT9KnvX6iJPXGfLpqLNuf6qMZH7AuqpMzBc4rLWZnvh9DqXnTE5sAj7h1cB9KM8dQj7BtsxousnWQgd9syJxoy",
  "key18": "5Fa69dCsrvxxx4R1Gvuq9bGafF4FLCWd5GTVYe8WqtL31xLRVi8aJYFYeqmsCX4qua58PQHM8Jk6BCeYM4r4g5HG",
  "key19": "2fciQfTLwMaxy9kuEjSASUe4qxmNLRpF1cS2TjeyzLzrqd7ZuAGijQjTfBnAmoh5q7Lxv5MpN9C64jrVHrxX4bWy",
  "key20": "3wgq4TLUYgb8uLrwsimaxGJYYhneGNVKnc4zkjRUajrQMqaWTQD3jhnemQhMvWzFN2kr5bjCW21kHHz3CFConSrm",
  "key21": "4T3hbLJMZKXiP1F8yoprxUzHBh4Kqbz62xHJ2Q9AHrK2YRDh4eRdWdPxf8gQA2kLBfFehFXTUnWkD1NpT3J3a7Tt",
  "key22": "WPxtPcHpNcJWG5TzbuqZRuVySnrBZXySBa42fmGtC1Syd6m7qM9aXnvokCZznTMasPTsZiNZ4wbKVEouPbqnkdC",
  "key23": "2tRT3WSNqAXimveVQ1rv7qpNGqU8SguSzFx6rgtAwps5ZLGSgWQuTDCqu1MEfmSGhReBWXFbFBWF1UPdmQpiEw8",
  "key24": "j1dNmLtwS4xuGTW6UBMDeY2fLS5PnMhdSnPKeP3skFTBfRGdzk6hJHB8wjvEJb8hGcjGzF63zfZk5mVoBsB4cYU",
  "key25": "4FusAkNST3bpHWG6FDRPcTC7HvgzErpvdikGJbx4djbACrJMxi3hHKuYp4JBTv8MByHtPrci1ejydUnFh5P1tj9G",
  "key26": "2XitihLMDGndCGn1pXtBMWycGG4GsoxHqb38SNZ2FBXeu78GuwWthH4kAEWAeghThGXg9G6aUWufR2sZnvMDk1wq",
  "key27": "5sWCMW79BR1XC773zh6a5hhjgq3Hq6VVGcebqCGRUo9DMK8zKDG7A7KsnE8J5Lt7Xb4U15hNZ9FxeTEMUf8CNgsC",
  "key28": "4RCnbr3sA54QxYEYUfzjQ9VWcyEqtah6Qppcdd4VTLoeE4RGbCzQafVCAAuXzSsrJZ3jnvAC7JzaNEwiEtcXsEPY",
  "key29": "22fCnDAzhHuLfKxCTLfGugXXzh42jqtQkjem6MWonXXQ3zhRCkohSWhcQct8QDk6ptRo4ir5P72ekeBpJhMndmSg",
  "key30": "5dnmc1bG6gwZbB7UuSkwTXLZusKKgFQA2zDQCpBRwFrV1JFhjgnNj2K1cwXD49d2XL7WCNUsUDQUxFCk1LHrvwPr",
  "key31": "Qw3ELqJTVUB6J3j4BM2d1ihxzr4ntAq6Zo15DqLNxD3nEhT2yA3fBbzjXhV2Nym4ZEDw8JgaKmhgAE41R5HxTNa"
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
