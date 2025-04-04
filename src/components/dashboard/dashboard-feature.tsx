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
    "32SzwmLKs1aJ9i5AP5n6cURA7acY1rErsXxgLKeVVizA4UmqakmskLJeYTwuvC7ARAZyMiuiihdSTQ8FfeA7XTJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDBKEVE1RXtWs66kH4hcKKFkhupHN7fV9s6f8gkG4crrK51jbe94rh3dXgiFfYaz4gfm672Fzt4238pkT2rJrRY",
  "key1": "5Se9mtovs5m3cHyyAtfrt2brXZ6MnoJNpwao9os5t1gy1jv9Mf62pdM45LBpExjwec8v9oAUU8roYzjCwEM1ucWG",
  "key2": "4pu29HL6dbwjJQcqompt1d6CeMBZcqhAmaHtCoFRVvjBwdqyRgFw4qhs8rTzvteoVQ69WbYS9VBm9NGEdo8cLWSk",
  "key3": "2Fj1YERs37fuviKbY42C7hfQW9r2TkxWBCLJytKWJXV8XY8x4uaead7baHQpSos46mYx4inEQd8mAJmNvkKxgYGu",
  "key4": "3R66F76bs4jgL4fBZPMhyy2ghjrfKfMobH8cV42jwqhBuXuRj7Etr1QKJDbojT4wrVksMJ4mbtM3bB8qqdzEcpKw",
  "key5": "3Vspcc9LkFF8PQdcGkeJP39xhtYGnYdih3sFMXLkea5euyzgik54UrJC9XtBUDaaSf74fok3U99m5WJjKcjvwRKV",
  "key6": "5Zo5wk1o3VrnE5s7pkje7VdeiVBMNs3nfjzxDBaPuDETG9ujQiJEkSJckePCZFW1LjWsUAiGauXTpoXZjyLp22Qr",
  "key7": "3SXR3ZzcpQsTHWWJWw1bo8cs2jbWAv756jR9QJv1nTsw51xySBkNbApoGmiUi9bNjJZ9jP7eRHxnicf1wnmdS9M2",
  "key8": "5DWNMEdbkLECJiCbT4rHr15pz66NpoxMa9hdzouKnsvyiESt9N6GYn1LK3tJoXWCcDrZN3HYAv5Gixa79XH4nVkU",
  "key9": "4jnhizqqRNACfwKJSjEGDDshwXXyJZ7S6v8aZiB3tKHPU66Rjsmq9jbUawaQgQW9LYa8ZKXSwo77DGqccMvAsC7s",
  "key10": "tgjwPoNuDziwr3uwrFoUZNFCeaY9wdscSsaPaa1bxJGyJ86vxAKyTeasSGQFcYagGYjyziFjLTLUKvwrVyQCYAg",
  "key11": "yPj974qFpZmFqtvuD4yTyv1sAfctnRmeVajLUb7NEb8GqYVkiF7QYAFDGKUppbXmRHW6ruq7ZTndDhiow5zPMup",
  "key12": "5K2dz5ze8TxEebxKCA5YVEeSFfXTvysdcrC5YAqTN113LfntWDSSZbZba1bzJ6KiNTrMaCdpgA1Xxu51MpVnTZTa",
  "key13": "3a9tj7xwnyCEw8V5SxkM7UGq66vBm3qGaoMDzipzoarb5NSmmabBCbEV8Z94AuA1Xqpzs8o2mAs2q4yTcXMeckDe",
  "key14": "2Wd3WvafrWAmsn5PzRFN9N7nioUUpfSquJ6xXBGbaHW737jKK8i14hRvcNE6NnNVvoWMELS6pFJNx6NKBz7x6gZX",
  "key15": "3uWUMhAfkrVtRi2RQZoS9tRuenNuJaeP1sk8Ce7rWesGW5FkvcyXeKbjpLUsnatPFTe7WEJXuLv4u5bvxndB87tG",
  "key16": "4Moy9yNZ7eHUwJnPfMZu4yuDX9BbcXyWJQptcHDjXaGFzCBiGRFEWYUMB8LZHMorPgJt53GqKnUoGJeAT7L22BNX",
  "key17": "B3EBYYw4unqYhSVhkz6iXNrhnaR8UjZcynizPtPqbrdz5SPavpzTaWfdbxG6qmBCmRC4LAf2rTvFgssPiLUu45u",
  "key18": "5WXZKwNfjDyXci9rTJ32idQYfnbobued9JihFowvJkxEecj4L8eQMYo9C7VTkSLvBhnfb8b2tTBSKsiA2orduLfe",
  "key19": "2dzF4cEn1fQHSQzsBxeU4HC5PoX6MSjRGtimWSee1y9y3dZzg9mGMghx87fm5YFpDF5p4EE3Hr8L4i5SerYm6cTX",
  "key20": "58oBGRM4DositjCkfrEneXA5ys5R3DK7jsWafydmBH1wFrokVGUL3KoMzs4hhPcpcgBQnyse4Y3hS4JgtV5Jn7h",
  "key21": "ySSi7kJVLAy9ogJeXyK461ATtfRUs6QtkN7jyeh6667sLfSEKM46KnmQgEVKgJCegWkgLZoP96AJF55xKoSGtRU",
  "key22": "65Rs6FCHJk4Dcao8AuQUtwNyd8hEE22b1inqFwCkEcbowz6yFbHcvQxawLjMAdEfwcyUToW38HVFJmJftxB5LoaW",
  "key23": "2by24bNJo2j4v8SvvwnsPj8Qc3gMVkMdEBcpihiSDXjfX4CNjvwjpaQwb4EE5GAXjrKcwXMH9vgSWts1cvdYsMME",
  "key24": "3Q3VsmCQY9gmDfwXasvQFvREGicwMBdQ94es16217wp6AQf3EodcfHaJM3k5zAy2MaEKFheHKL7JxZgfg8Sxh747",
  "key25": "3v5BNaLZh9KLhejf6vpfAZJ9ZpmXHqtLSqSuk1PQDT8Z9RLx814DxvreHVQ1iVEZTsUkF4DCrsymVLtuCErSyboW",
  "key26": "3y2dPu9Lw6fJ1TtcLJQQo8fXfLFTXnZ1bKEEA9q6ggsm7Smt8mJfU9uUY5cLhTx2Gc5hmWw4zuaQrsyjkCtZ6sGG",
  "key27": "3iw4veyY3s4Fp2GkvuMD15TEkqYuYyiTe5Xo9U6ePSwAvZfidh6wEyDV7ZMvcjP3dQZasXSr2Nwxu2hzg8a678PX",
  "key28": "3Q9gTWbuQcfnW48hb59gwYN7hu68AzAzMKs9BLdYDc42UZGisvUDsaWmkYBukUho9J3PhwvHZepE76Ryc4ckw7cq",
  "key29": "yA6xUTniMHFy4YQSFkk2kU9axA5QMYEjnDgw66uXMDhVe3wiEm4dMq8kk9TgtdGH2GH3BnmdAPqbKQryaDJcezF"
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
