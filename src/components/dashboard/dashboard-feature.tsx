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
    "4gTUBMLpsf3hqvXogCDwKg7srseuMaDSdfKwv9TxPPWHDAXx6uYpMq5ykx795SYsuyFScPDWHuvWjw7nJF8KhYd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMhi6WLjccYdRArRuXCxLXHEpWr2BL5ytt9Zy2vdmhzmZYDG1rTp3DFUYeGJvmpHo2TcPrwLPLA8Atgv8vgG3zj",
  "key1": "2nMkTN697scZmTARAQeKqyvHc49eZ85J2gZRY9dw6YamVd2wiFZQ5YyyzhKXpPQHzBtD9zztbcHzpY22ouZ6tPeK",
  "key2": "3bcWYuDxSz8ajWNcgdT7h7zK97CicmgUKv6KMdezoXR3hrjWesMMvuxBg7cbxVQ83R9yg6XbCaR8Q9Cx3fugmFeH",
  "key3": "L99kNGwX3jj6udSYtrJN9VryLzLaUxDpdCVTxu9VK2Rg5tvk2oozTodeUmLELsawmdJt87p5mRbDweCMxTfSCog",
  "key4": "55cM7WiK2tsyUoMMGAoXULZsJvuSQQBW8AK8HB5fSA8vZy1HkW2MWngrCmUVvYk7nAzRLTKwG8pZBZuCHeNinVy",
  "key5": "2xxA7yTFXb3Jauqk5Q2zv3ZvYQW6FdSUdTD5L7uAQAUEMA6vfMyW14GPNzewuaAwjKbSMrJoCSsdXWoVDuctht2c",
  "key6": "cGDcV4FPxagcxCkUoGBfhGYyzwUkPe3qqWp38MvdvAfdA3ZR14F3Xt4nXP9yvwziVsNasE2B4Lsej1z1yZU8i2w",
  "key7": "4Ljn4qauZLsdu7e5YCsySnMxhHfuJ6R6vyTCp3rhMuRe8zqGaYbGUS6w1V3nkgpKY1aioY3NXavc1LDR9nbNZnhS",
  "key8": "2Yiy65QbW2FNusXZr87kxzDiy9hHB4kTEBFwU73NaYEC6pvw47NoigeUxQfQjZ6z3zQvmp2L2o5V3DSsuiQ8FH6H",
  "key9": "22AAkKtP523EDJrQPy3ggxC5YAmzsT9k7VUHcihpFEMVgHb9k4hFgZj8j4wKZwaUJr7wTNKwUkXn4aQSDAdVmnQv",
  "key10": "5orF3JEoUKtgDnQpH5P5nLAQFd9u8ppuE8dnPxwD3WsA7UvhhaDLBtAHZWB4GmCj8bE8fkPNT99fWzgJerZP2FsK",
  "key11": "2UAiCnQKiCFQdhnPVH2TUzzcZcX2MVU5T6x79u9pR7yJ46NKQsxQB5ezdHkTPe5XMmcNfAtE6uvtKTsBSvCbPhPB",
  "key12": "3bEBT9kXsq56rZ6TE1raiuAdcDtunFNJUpLGn9JBFduf5HcvrmCJcw9tpo8B4tm2exQR4ubeWeqPXXmfMSb8uRek",
  "key13": "NfjhLgjCqyLcfCB5bLXH2Z6ea9GgdAhhHKd9B1HSESBDEGb41592z8WcVrKrgExknr6kfBeep1wqE34X67QTnox",
  "key14": "51j9daiuJwXMRjbj5XcyQWxFpeeENF8q1oxRDXnggENAvzaKpZ5DmBEU71aveqB7xnxwfUtBwAHwcpZdd6PwTUHM",
  "key15": "3WQ9fhxmQtk4yuQdv46EH9bnvZ3gzvsumQmc3SemeHFTqTNgLosprVyPrxJ1VjALcBkMYJqtLny7cBBmqdx46rEE",
  "key16": "g4zXqG8pQqpa4cjUNEdF5ryz267hxvEciXwDojcNFLvbYXMxTXUCninAY4cTWT9AqwbfpUE9UVE8RuPT53VgW96",
  "key17": "3onpewjwexJuw2yEg12AnetWbmnDNQsfjE7LzPf5iXrtL9SmNAmFpoJ3yJvN2kSAkN7zhuD9vAfL6EdhmKwzYhc5",
  "key18": "5bKoVNTXnCkqr98TZyioR8XwTUAxYjnDqkWSvYALsQpDVr2kVFZBFbpmnNX7YSH1iLdAeCYniwwhjAsq3uCsGEoe",
  "key19": "43RfxEtbhWddr7Bci2mVxMVLQdWUHKXqVJph8vGqD9jhchv2Vn88byCR5afRu6JFyXtAoXmZspaAuCz5sd5Mp4w7",
  "key20": "KdT2ij663aHw7AXehHF7WSfwsKoV8zPXbgybAT6XThVYtyb86ycpeD7AsnPujQATgDXu4TGZJheY2q26WE8xFK7",
  "key21": "2m1Sz1yrBh595wRAeidS7cAsmACca6XCKVsjcZjfXxqW4Wy89ydiWgWrut8u9S12sD3sQxudY2jmU65oqrRpQa9W",
  "key22": "3tXNQRGBkMZxJWHvagbuWsmoJUZKWFAYzG5ndNcmEFEnBkvzaHJVKWfY8cb58qzigrxrXaSDQhbE1UUeiaDm77d3",
  "key23": "GaS5495tHJob8Aa4QtuGkz5Mvu11JPh1NZDKmS7fjy9gd6NiQqYCrvoRx2rkViDRXGGDbmcMQzwe31CVf2imRsU",
  "key24": "2EPJCixY3keTi5LRpAbtXCkwMvGL1DN4cjX7TLUynT5aS6A3JsBh6FrEgLtXm9KTvmVY8jHmh6P9UczaSj9JfMzq",
  "key25": "2NbDWUz9RFcL6XVzuS7VqWE1kvCwEh1eqYL8ukiVYDwifVzbHx5G7wGEtkUkR5dcvzArfmyAbYK7Dwmgo3TwDnvR",
  "key26": "3VKA5hxYHihEsmsGbh8zZQDyps3DbPd1Vt37vErT638L3zAZEUH1vDJBJ4UvLmoexBfQ7Wj8K8UZq3yMuPabTTGz",
  "key27": "Hm21XGzbynQ4fbztRxtitW74wdxYDr2YstKUG5WfyPAztfpeiLyUpM7krHXWX6ziBUSmfrrxXMQScPvkxVf1JYg",
  "key28": "4GPbMVwx5a6LE4BaYWZrxt49XZ87qbbbyPqR81ntquyVBirVyZpD9AcP3n975zqQsENvdDTmeh9ScUNvWX8xDJHh",
  "key29": "5vmtkwAKV4RBN2GSMnE3uYncRY88zbFzkrmWQVxj6FVLF77RZfp54zxiGkP7oC8Apw6SHk7Tc8b614NRrKA2gVU",
  "key30": "5mjZAFLXg7tcqLCqyZLU8aEY7qmxd2sBa3P8fPeuMh29qHRaXkPep4T5KngrSFKoB7u6XQiY2uVXaA9Sm7ZqDgcR",
  "key31": "5fDAQhD91jFRPRGURrQ6RXCaEbxsWpjXEnHReD8cY6uyw2N7SkG2JJQA1UJizXFAPabxntdWu3Gh5vf7EjNmHJza",
  "key32": "VVRtDhqpzGQ3wPeGpfVc6xC3BrECL2FCxX3QRyAmue9jANMHSTkDxZKWYeVQeNMKvfuFR1xUSqt9aigb24ut3xT",
  "key33": "5HEBraNgvzqcdH5P7b9K5zYTyiFJQ2u164wk2jsHZ5VrTRjBpgEZmuEenWn6BqBDpQYhy8L9Bm6CrT7iZNtFpqR1",
  "key34": "XnuPiAdY9GT71oAq2o1yAaV8jquUbRwYAsCjj4ZCMi8y8DbxWYTJHU86Hv1i1WZMbPzGT2K4L2bFaixFJJysC6o",
  "key35": "opGFw9mEczQB4CPBv9QD6fjuhKxsRBSNZ6Q73krJ1Pnnf2v8UkuqieL11bPYLCo1QDKQuSyuUXDM7ZxzCtp4e4o",
  "key36": "36Lq2jf6ScnJ9nrtEziLYb4wdFLP3mokgQqYvsfBSuX8Ddq5pF6HuoTBcpMhZCmoDKmTVXtq2HcscqJjiyTscFvT",
  "key37": "ZNWgkk2uwh6szW68XZYbNBTmRvRB3rWifofZh8JF6FfBHkZvfriPBLs2JGX36j5zuJJDDnTzqNBixrGSDWaYdVV",
  "key38": "3MP1H8UZJNw5tyva4P3TYUJmNKkuSAUVbhmNxC6AGmkBzHNWShzaxjSV5hDW2B33DRezdAwBCHNoBJTho71Cqqqt",
  "key39": "4WzpGaFMyJBZ5zLeLUpW5LZUvb6rAKkevBG64j1Knr6DAt6pxfV1KPH4xbAa8HzpxPYzw1SrzzqgfdyB6uHKVYz3",
  "key40": "2kVLzeA4jJuGE1WyDcejetBYqxRfoxyfT9bQfhVkUoNy12h7aRYu8or7wzcAKqj7wt8HmptNcYgTm9MXXCD3bX21"
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
