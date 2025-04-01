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
    "4bwnHLabspAqkyusSgBVoCw4NmX7W23VA7oLZs3QJbX4MCTU6rPeyWLeGNsFaj2GP15iy4gYDnbGzduXZiH52qCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXkp3ZyTksquFEL5ysZto1KzrSbAgcEBpJPkz49M9adqW6fSEfMmWnZ3V2L23gcT5qBNTzYqtyqDHRNz9s6eswk",
  "key1": "6s8JjkGshDUugrYUBP5SVuLvcQgPJsRtHKdoYPUjG4C8b7P9uwPMJiSp2dxMjzG3P2onskx7gVHQvb5r9EAXXWk",
  "key2": "4CaUhhvJ1aYFMqD1uhNNu6273KsoB3ej6yJsKkuQkeXSVzCiY7rtrLk5rY4DVTgekKeF6CsqGFqBgAR86h4M26G5",
  "key3": "qbtS3D4sx7AqAN539bPgsrDa1p6TZivNgZz3d5UtGoni85RFWaMqx9tsFbZ7r3pRTSg9gnLNzdGa48J6rLUmCpK",
  "key4": "31pej1wZ1XWuLFfWfZfgxBSqA1ZSfrWFbEXZ2tVEHtiv1QZWYVBD6vsW7ZJEgyrJXS7pu3vTvLd4hQX44SBy83xL",
  "key5": "429PSEpBDc7d8qWWvhCNT4uEG3paAy6eP6zx2LumuSwSUeuQkZRxnm7UcQRB4SS6t9Q9q1VY9QxLVNan6HjJGH1p",
  "key6": "43SHkfAuPLCyk19mRuGsRGaNKxw4ghvKPL2QHX58BL8BfT7nuoR8T9WZMYdX4SmZPciR8oR2x6cfF3khTZ5nscRZ",
  "key7": "3BX3tqNRzk1nsWNiAjTK1GDnwjUta6apS2gfnSFTUYpwgMLUEE1ha3jQKh5LpCwjC3Uc9w5VgVeYy9PE5eyLx9cy",
  "key8": "435QFDahhD41vgQYFERWnx6AR8DPVjMM9mnmDFkT4wBqwbqVQaEvVhnkdJbj4szHckPSLLPSmjM1fm6dTBbKApoC",
  "key9": "5KoKpLzsu81rYgtvny9QdLsppMmnjDzJHDcGjo9HcVkFJSbXhkb3UTmCJHcvp8Ckk9mS1Z9SRuwQaSgWT4WkL6Lm",
  "key10": "3ifkv7QdfpUjpVAMMMMWBzRyDmyAnrrnkuGHSvhruDHLRrqUmW4vEizbTnZ9jTY4VSyrqDGMs8astmnyB5aV7Rtv",
  "key11": "3FhBtkJAPNao6pEJqQEGj6Y3BKr7ajjQPZBZAQ3ewGH3H9bEuJEAmSgaj2AvBCsYP6NaPZNmgEXgnT6AAYCJyzwq",
  "key12": "3upEUp22emScGsz9Li2FEEzcUqhaxHJomdFiQRUGma4VtxKxVbgTGZZDesk4bLbtfdPzBiRQdMDBi6se4fps71yo",
  "key13": "5yiFQyvC7W2nk1V5uVJD8bgHY56dKMUKjXZjqP1taX1WQMPTrbd7MCUXFz6MXLiV6AP4cMQXLhuhGGDbsTZQ5rTm",
  "key14": "3UMdN3QdEsgpQXSQYNnNvTRRVU26bxdZ8Jqkk5mqndDi3afvgcZNu3HDe4akzdGpE6ALDChFUsZ8BuyTF4NQRfQ3",
  "key15": "5YuPB7a4JYAMFS3QpWzZ54361uoBpNake78WGfoAupFE8j3GuAwQL5YtAz8suGtHWN1izpVhknEjfeAyH5VkpMt5",
  "key16": "2cAeerrYNzWzAXc2YuW195x1BJoA4eXHEUe8tpHe7gMV2Zz1oBMt5JK2YqUM5C3ZWkAV5AhRkQpg5dqXChiguKJS",
  "key17": "2NH4rRtDQCASvjGzZc2tKgZkGJuPRcdJ6ZnJ7mDHu2742tdfyUeSa5LtziR4av75xwxr8c5Nm2piuSgBYjxegJ4q",
  "key18": "5yTAZDbM8EwDuPqqAphgeDBL8tQKRWKaFtARzqsV99M4atEfJhXhsEmuN4nU7yJf8exwgKUtL8eWWz1M6SSDzsTE",
  "key19": "3jhTWtnABE2Dhj3sV9r3JJ49T8C5fVK46epbaADtXgFGpJkNv4tJa9MCGipjKDw1AVvaycG8JftjgthP5ZZ7eHEg",
  "key20": "3h9vGoRLADZSmwWZkSZwkT9zJgfCw1aCrPzGr11BJpDYyChpTQ8bPG9ompWHXjyMZxayp7UH35P42Q4PbBRdUjfC",
  "key21": "3p6ABcXNP9fnzKtXCnxUv3vjH8Kx8GTdtAQqFLr8rSgFhmNzgwAXtcLNWsSBURdEbVkpztfSiGKS8ZpASZme6fne",
  "key22": "37XgTWfq38SoqUEFhGxP4UWQ4ZmRgNoTdDmcHn7ACWDQcMqgUNwzthY2iYV8Qp3KerQb7J3moPXZ18o3pFGC4eeD",
  "key23": "39B78kQi743spMAaikEUTE3gin2zdQMgLeFTdjo5xXeSpyi8XzYWpseSTJaDtgeLT7XYdAAoMDB4tHDVzQzsHqaJ",
  "key24": "3QfvAJ42P8Po8VzScdeqRs5VYStGQ86f58TAcZWZrzuw1WehEdVf78tziLkpUiwEsGHWCvJ8NaWuceSpqUnHiTKw",
  "key25": "crMDupvDRp7MwG1DpsjZVboKRCpedJKqWn7sbguHJPvy9pfwVCMPRKfSmhhhhMGVCtwRiACH2xaX3hbPSVhVEqc",
  "key26": "2dnedbgwHdEywr13ViBXxugCL3jrNsYXQFC19fqL7L7Yt6nJtLAyUtkYP7tHdfmgk8u8oBVVyVRPPMi5FYWt696y",
  "key27": "3qf9ahnBwyK5hnqh7K6kAv5KGD2Ld7c1Bdg7qgZzy7NcVAXejCTEa5poSd19xGaYkA55VgJRR5rrQ6tdaLnug2ui",
  "key28": "5mUXmWrfCdaLerakwcTPiXeR2iiWREM3cv6H5HUJTfMdfCJ7pR9JQP6BRtuQWiKfBRCQZzregB5tabAtxMdWndSr",
  "key29": "5rCj1vDUWMaFHUVaQ94eMNT7wbGxWmdVjiAoxmVFndQMuLHcabHdCfxjURxLJMcUAYKVMAMC6bnBdm3EmuoMbwH4",
  "key30": "3SpTsLUBBpLJSGo3yZrpXyyLeCKvFi1JBHbmoMSGLAqqSRqYT5zYZKWJmeZWYnTLM4N1eUHAFTt7ZEj1MVRQ1mh",
  "key31": "2sAHWVYXd356TomMPJWET15WPrnafJjEjLLg746wQCasLS11LYYSzxEnEUwzXCq2Z5Jq42CbnKQ5rzjZ7HqQFHfX",
  "key32": "GhKuv56HxypufiJPZ3R7hmoGoodxSCQ9NoTKuttnqRudATviPxVyx2i7vEQkeX4Ccz51zU9vJMr5c86cE4FJY6C",
  "key33": "4Rw45zyTr36xB1xMnUp66Qrr5J4rPASDMrJDkcS8W14iToxfHqCdsfVHHa2yCDksj5neGStFa8DqJwcAafhQ3szP"
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
