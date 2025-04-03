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
    "2AHdts3bbo6knP5HpRtoLHZG8hVy8korqC5mBVxeBHDvPHxLP6EKKmgnxx9mxvcmCufCGrAUgFJqEn1nqieyVPxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48B4hu1U8C4GHZTfLud466CZwK7DUSAwRUxDJr2Ms74v9m7ZJGXFS7dCccZYS6FCL4bZjdA9GtWvU1wbQYA5EQSQ",
  "key1": "3BBg3tNrcqNfK42FqshiRoRN9ciDyfvZumdCqeAt5CzgeB2pGmMYzkPcLym199wNiPjbXsP7qYoaXhGyu8SX7U9z",
  "key2": "619r4uJB4QYj3YFV7QdvgKadaCC7fSs5uxfpd9G7LNUBbgxZEXcQgK6kVS15zmtFKYpC8pA1LV4dpy2qd3tEHNci",
  "key3": "CqA86YXrrqpiPsWPAEfFs7DkEzXSymXU8gkPpQtn8og3Z5ehRggpQneRLZkhCBdH3oZuA7NkTVDfHiW6JwVzfpb",
  "key4": "mVq6R5Xc35Hy4kEmb3bsy5tS92xuYjVYW9sWMQid6TqiznFESopmp4qxTTd1aM7b5pEok3gbAJ9KbRFRz2GAMKz",
  "key5": "UK3WnMjqQ6KGej4ygHoFA8X9K6n73zVKxQh1ys8g8U75cXb8YS59j7DoGGiLNS9Zo56XhwoNFEmK8zQcue3QBfs",
  "key6": "DudLtmWe2c12YPBDYmF9vNBwAKNUvhosCzfz9AszLsNqCmLLQNzftjNmXRtHRN4Hc2pQHi3nHk89KN1tEYSA2qs",
  "key7": "2g9kNvutvMZcU7dPL1UA68kfZNp7X4vQGatWimpWortkR2dCPcUGyySmpQPaf8mQLe145SS9SsUAiZzLHeYDKVLZ",
  "key8": "qsxyCiArrUJnWUeMyrVfK5oKZ4GEakECL8F1n3uuchRRvPVpKvr34scFMWN3DNdaQPxrhiurJ2n58z1ryycvdYh",
  "key9": "2vGBE2sw5jSsVFxuaZWHcNrcZxxd8mzL3ziKNHdW7iA7aV8JsKgzamnN6tbzqwq9zSjJwat9qUMhGrm7rAeKnas2",
  "key10": "yB8vsTZLKJhJ9KwU6YAFZz9VcAyUNNsdM8zU9qR8No5SXPA3LZdHpfheDEkZ9VzsMr4DR9wbtKXUyxmdCEno3ED",
  "key11": "2xiz3gsRFu6HovEzZkKgDBXHeLGMjFf7Gmm74tAPT7TaUTZfKZNgrpPtFo7ktoA18e147v7qURRiYmHVp15SyUw9",
  "key12": "594YNgBZffPLcXALK42tnzY4Q3nDqo4d6RgXAPKKjUuhMK1Pb9RGo5sEden3n2pmcDcHe84dDCrbpfUyh6JdXS6E",
  "key13": "5t5oambc2akJ3ai3Twp7k4H5wAyNtZhWARGVKPejf2gWbepCTm6TiCuZwABrTtZcKwGQpYYPtXBmnPpwSAsHKZdA",
  "key14": "dcYXACh2NPZJtSwQgjgt6k9sN7FimxVYLCj7dwVGKkLEsErg5cL3zBhM3FQPqHacNBMFRF96ezyxFQzaueYqnuX",
  "key15": "DfY9t6BePR8QbctnN22FVyE6pGB1pysXd9Ffw3N7fr3E29LaredQQLJKf4sZ483ipUXXeDRkKssbgDu617ARkJo",
  "key16": "5iBfrhJBrkuWkaVoqjNxN6izxfZme7C4MXpLQCngxkqWKWuaPxhvhxPbP1UDACRKQSVq3mtzVB8fKMY9xFApZfSz",
  "key17": "3qx5U5qPZfkhDkLmeUvNji12egP7ZzSZVHRMsZhjpSk2wyx15iyWPRGxaAhHPgNeobD1udWvd9tNxWarDWTs79Vk",
  "key18": "4crZwqZC6R7PCQPSq7BW5ciCb8qov6PZkTebrHLBnxLtCNy5VFy6oNFYm8k8KyD8SbJKSHYWiVoHHy4DubDEt5PQ",
  "key19": "4PASQztJdrUCCtMRkn1qybVtdqin8hyqYQ2yFwxVrN4ehGUBxMJYpVmWtNvfyZt8EJNtF4uD21W1ZhD39Vm871eh",
  "key20": "3vtogpBiNzVi8gdTsKVHwhmzZ2taum2RF97EncFKFETN8hBU6DjLEfGhoJ629YvnuDs4vmHf3v8TaidUkUsLEsLS",
  "key21": "5mbANSzQFCoidJJ9keSmhabxxokLRvyodGDqRXRvHH1T7iX9ahXWMujRsbweGcQhsJQ4niiSMtYrSMpvLSbE3SSz",
  "key22": "EYwcRjzxg1SZgKNTcvkzFdfxg1HwbNmFVSWZpB3tHJ132xERy1fz5QKaQdcfY9nmJWdowJrnKhs8vtU9TgFV1Wc",
  "key23": "zkNyrJxxP3q3pBwUZwRopub89NR7SgByLmov6aZ75AWVWmk9oeHqXGtTEA84NW7X8xm82WH5qpUFhLEs4YwLC5H",
  "key24": "4wrnAHtbnpw39Tuq3UDe3MDitbLt8eSa6Rswo7jsc3BYVLNtSsnLvBMLta4vEJ5gBvGYgq7TtxZr5yrNeHfPAioS",
  "key25": "4Gjch2p1XZuSZ2DLiT1rWutFZ9p6xVj3W2uQ4DFxi3s7idxMrtipfMjgzzAAfo3m8onc4vf8ZGW3CbUurNV1NevG",
  "key26": "2ERv6MbNDChSXUKWuktc4ZW2v1yAgmY7bgENS4FXhp8yVtUYcBmZdrMT28v7wMGZATQbethJFS23rNtCAXjYmUGp",
  "key27": "ng2TbTz89aiiRQUAqSzUmb5yqx8wwPRG96dtHC6KShoLbPjStNCkqpwzGt2EwyiNJxb33iBCs1BAr5WhJYzcwGc",
  "key28": "5rFopojgXR6QK9DtRM9vstCgqbRjgM9suhiMpx8UCegT9EqWBFxXgMxAsE4ZWvp5Yo7yTAJmWgt7tNsJwGJunZE",
  "key29": "2je9MnrLWukMb2asL3mfx6hH67WkFKpwr1V3eo1SjhYnMkhtV4aS42B9wyjLcYeoHxHCuUEEZL4JnyYamHz615Qz",
  "key30": "4LoGJPoArXX65KrWhyG3r2CByDiCzLPANrV6Y7tGjt4Uyax33EH5wYbPotsqwuJmUivCTGsRWtx7CLMpVfAhtKmR",
  "key31": "CRdZerK6L9N8txBWrzj37LBAg9nK6dZiJyAUVX6guwE8XAyaRbD3MkoP7QtyxRMpEh6w7itoyupy5gSmDJn1MH7",
  "key32": "34uT3TgyP2GLy32596dotSo8h9eFi61snkHBxsP42dd9XuuT6bX8ngTnUbEg24JEiZrPc8MWzNYrWQGgqkX6CL4c",
  "key33": "3TycfXX4Pb5rHMo3Ej3SLPDpKfmCwqvodekLn6HVRcwdymZgAZspaxvRGkNNLpFoQs1VJnENVeRX5NpoMDSTdgM6",
  "key34": "4JFapjvFM8VjgsnUC2C8NUysvJmKYKQNkxfJ51sYYJ1KfoiNptZq3KAReQxTY7R8Qg1RqrMYErvsY3jrNGmPsfrr"
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
