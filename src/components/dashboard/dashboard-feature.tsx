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
    "3RwELogXkYBMdKq1T6Pfv27W7VbeeUB1WUNNazDkVKG4LgzxkByvpSAjFbY6MnSFbTS8YBdXHP4trBCvuCVPjhVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hX6kU9Z6jkyZBvT8huSWBjFQ2pMnBqE3kKZnyuUP2YVCCkiWHPUpXXJKssDguLgqPjoVMwue63SbaXYBdvZR2S",
  "key1": "GHz9f8dA4xJqnGYqajde8MaiSo6jpzcgiKYeinatY2VwweKjfNmooUAgpkjVAX2fma8wzDjD4bFxzM91yBbNo17",
  "key2": "58N3ZWAFnbRTZvx2tws8vcWM1dtnHkbYv1uhqx1kJ3MhUUimG6d4q3bZEt3iFLr9pUL2LmDvhz8EMfP9hxeVQu9w",
  "key3": "3uWuQN8ehePMKLhJTENF9a9gwBETHR7krSdb5ydok8cDABiGuy7BiidFjVF1VVyesFyVTQfgzMVmJKejDdFsm9uW",
  "key4": "4DhsUV9rVW2Lh8WmgM2hqUrqrkKzfCgm49b7xEj8u6gSbuYFm5gSZthhuUgkjgiMQP5s1wZPLXjx7K2n6cp2Y2Yu",
  "key5": "5hqrRTsd8nsRfFJzJD5k2QsahwPsMjSaXZbASQGJDoqby6WouXES91D5vg9ZLvFhNa71TfMGFS3HJQbBsg4JZc98",
  "key6": "a63NTB7JQa9JkUS1EhUPgUYJhi6vbm7DpV5vbvTVq3g42dRHFPbZpugD6XqK1csUVvhmFM2BeyVP8Muo4b6i1AH",
  "key7": "5Qs2sZPX7jnpUW3D5yne8USMvZagpMrAJKujSyy873zDaoMsNy4k6Dqm8tCN1t2wrGLYDZXUJjt9BRaua8FyuVqp",
  "key8": "2762R8hDYVqxvfw2NGpBhs6nP1nagD7xyV8sMhTrBR8z3XD2nofSbC3wZiiRqRX9GU7te63QDjgPtoU7yaQtsS9C",
  "key9": "5ya2YsDC9Zt52JuDrdzW9oAQ6n4EBc83rJUmitM1LSML5zVABBip2Sji6VeumQVjLjUcZP5wHBWXJnSGrhgxH8cS",
  "key10": "3DUjx2a7jxfns14BFmXDmnCT2KA9VE2BgQwnJWJptsoagA1pcxD9yJTXqjv31Wf2kzZUxuAPqqbhqMUaUGQFirK2",
  "key11": "668pvvx51hXrm4b8QYyiJApQM2KSCWixL73nmh2s14xwB7ZZqDjg9SeEbmiANqA1wMs8oo7H32sEzRKYvGQmzWy5",
  "key12": "2mPLhYxqR1d4fgrmHi4BUTnS5Z2jZ5HuP1xkpUakqFsP3TYLdavVyWEJwRDbmWNyVin5Z3sWJJwivKda5aLBoxFe",
  "key13": "4h9vmxHy7NN857etW9HC8jrAhGM3hM9UhmRhkkn5248orFmWj3sFcLpvL6hUx2bHZ36x4tHwD3tBHgHYJxboe5Rr",
  "key14": "4zYfjQa8rKPjrSE61jyLa4Y2MSofrpzS5TD6E1E4M5bmzX4M4EGciTWmRjsv2XZTTdwss5xyfLziavbbPa9yGcZf",
  "key15": "4Pv8ZtwJ7Q5pWzAYeHfwP8c1kPCgv5uDXuSv3kThmUodEnL4PT8yux2TrrMxKhosLH19DpZBzpqEuwgajbKZE37f",
  "key16": "3uEoM73fb1igKh2vexUj9koV94dcYECwTeVp41YcvDYgq1X3mmDUxjcQNFWeHDrKMRhEtdJNp1CUEjtRSEMsbxXX",
  "key17": "24qSdWy5z3REDEsFZHAGcZdSHUh4JbWrpgr2j5z9LjjTyXu7ewDwjrA2p56HRa9Rw7Aev7gLZUWB4exjZeczUQr3",
  "key18": "3SPY9RQWG8N4hKGE7cCAUDeRdjeanf8QdtkYKAXZbowTymwmYiRbaP4Sx7H7EBuxV484WB8G5Y7Ba3fjpBhQ5ZYi",
  "key19": "H3p2FAZCtEUsUXwVJzMLcj72pdHgrUJri1V8WszPfmV5Cu9EhM45536XqfgLsYnFUdCJ18i6DawmaYxvQsmEB7R",
  "key20": "5PfxAy33oUBDPYLdKzbTMUoYwvmDkXBKgb3eDC6fFsUhPdK2idXPpbUBSFbvoGDrShwCsCJHWBX9aC6gFBMQWBax",
  "key21": "29fJYArd5NPkvUGbvM2TCStCYttGk6nq5LBLndBerFUgaduioe6NRqYcAPGFKEEuUHSDZvihxW4WoYH11hADUbgh",
  "key22": "4RjaebNnv6YuZ6TZrQdg2AvoNiYewdkFfneveKBmigaePHw3AaNLLX7KkuNVe9db4CoTsvni72qTZnvxpRWSFUYZ",
  "key23": "29Z8PrcLyNEPeW3xpGwoJ7C2wzFXxZoP5baNjKNsNiURDDWEr14mCVz9ZrhfRskgY4EA6VjbeUPewfsv7r7GUuiC",
  "key24": "3JM7yvnRvnzisiJfomyC6a3524kbdevrZxgz3mJZjidTLuchGmGZXUQNR1L4Wr52ghrexyU89b1ANkfS46ztjrcr",
  "key25": "37bua1Zpvw4qEjkM7akhhghtsmnuigXC4XkAB6T9vLfHgj5zqLq72JSmLeKiMv3faQBjJHSscpVMssSrsqVYhk9f",
  "key26": "Z7KrE3AkkBQzXabuEJKicLBphLZYVULe7SU5FtuVa7La7CoqvNjrizwPf2ZP5TUeAsQykLihLpvfZiNXGVvb3hv",
  "key27": "3zuCjsVfejF4D1N6RCnGHP7zJ24UjP6w9TTxA43Q21owtc5AsPMJeHk5JqTSLYdt43FpdATq4snbFFCLFzSk9xhm",
  "key28": "5zVcyrmKJVRQbzYFk4tiav4bySWHBVucDd7YCBPDBkrd7Xs6C8pezQ1E4WB4ZKa4wN1xJkr9LZzjJ8d9GNvX4nRh",
  "key29": "5ZR9BoEfr7PbrsmoWNTath55ZvNjMXKKXp38KUZctN4Fpt73eXRVRhVXbPGW1UaVv3ddMBDEqZRHmQN6vCkKrxDY",
  "key30": "5TSXzh39997ddoPME3MLQ998WPLS9wL83XwapxeSzkbyayygPTMsBbb54HMwKqxeqqz5drStujxQos1NAzCWzSWL",
  "key31": "5v7tcGdX4vAs4N3LsgMjx3qekjcfji2sngZMaoAvyoEwdPHheyZ5zCGaP8cVxTFwVzEenEwg82nuoeGSQhoUr1t9",
  "key32": "36tdtesdCByAPzG3qrF2WLrzwpJQaA1bc8uWRafNm3hXCnCXXRnqjBs2KF28oMvgvhRfx4pZiUeYZkNnecruB4sX",
  "key33": "3excFHWH19G2CU9V9iVVreuNpA42HmhmQQdtv3HAmYG4n7E2PYabB2qTgMz8QWmB8VaLCfrYZ8Eg3oVyeqMH3kMf",
  "key34": "2EnGtB2TgKJMyoLiEU51ZeHoT5oZeoo8jzPKH2xgfen1TYb1ChPsDsrNLVa3oE4eJngJXwju4jVct43qakSbXoZC",
  "key35": "2urddNmcPEr97mbVTzZeiEwKmszzBpYpHESZ5zaRtSG4Ubh5wJbSziV4XA5FAXWkFSyexYXTSSPY8ohKLCpKQmhZ",
  "key36": "3pcAwey9offzdEGrMjGwsitUuPsPRYEhxarRfAhUCLf5xFT47Eg9erNrAPbWj6uJKk4yKkJf8ga4uvjgDCQWLAmk",
  "key37": "5d9YgueAUb78bdNVBccxWx21ubvuitdZnpdGicFHk9qfUukGE5RSnZDSS6rw6osvKXvKGc8nAZBhhsw9fJKsv6GL",
  "key38": "4Y3YmRyqEQfLThdEvgXcCwS1aUx2kjTEr87BuD8c2FCnx5mmFMkDnMTy4CP2uW7i3R7piYYnZcGAcAJnuheLwotW",
  "key39": "j5FbJbjWuBv1pFmBG3tNgvqSTZyT458NVfeaw7F98Y8Mg2hBDDbZ5WCEoT3CAoaZohvAaTL8nb4nVdV8Mm97EMM"
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
