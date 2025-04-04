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
    "EYbKyyV5M9qHYNTjVtiRPaKGfA9jsafUXxhGqzdpw6qxqBYT9rgsYsGz19EmMYrqXcz9ZBcWt8DuCHbJ9JgFpYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6CNpU1vDmLXAvNezVqvSoLJdRZPxZcfnHdUpdQ78sUA41UfKAzWZvQLAM2y61TQXjKBEWErfxQQxmcbQd4zaQ6C",
  "key1": "2QCmSPduKsv77tUodrhskPZ6QAwVdqAWGTUZkepTuuzKNpo2PWXnb2GpT9Mw95UKQsAxYEAJRVcr66DcaqkiKoVP",
  "key2": "5JRsp7bqUy5k73P8a1ftY3QAvq8rrPpPtemczKsNtHKkVstywtPZ7uS6jnyH1pNtyohVoWyNuDUp5QGcdsLRJxyr",
  "key3": "2GrQh9gmAvczFYoVgvrb9UvqTbJmrqYovq4fpBPFCJLh1xNhD9RmksvScffk6EM7rfEcPSJddUz5Kbm4p2TH1oKw",
  "key4": "93m11A1rwqU1RHLBE6RserJ7CWNVnPJLC9W1Z3jTyaQkUKZSS5bgzPJMAxyaRT6uzxSbR3L27AHKAVHrNdCVGaH",
  "key5": "3NqjPZ2gqbuaxrysLgN9piNiYi5MtkmqTwbEdCbtCSgsPKuk4nkKFD41kLr3tRrMUxBMLJJy7GWJjKPF4uExAarn",
  "key6": "4b1kENu39C5osGb9gtLRhzioiGkRDibyjmqT3G4jZXAaviSVzwmRsNgbUzjt3syD5tqMP5apZJRaSYfY7yM6mqbP",
  "key7": "3CwPYhLoGH6RZfpAirBnKiKP4NKSh8V1U3XBLApkptmEbgYKfpS9oMLHBTNYqtTussgN39Fy5foduXyA7XxLeoem",
  "key8": "3GW4n72z5LnT6j1ePFrrYyEYt76SJ6GRA7tuLTdZNwMrtcHzsVps7h2B9Xjr5dn93NSABMyiCxhzDnEXA2mtjNqe",
  "key9": "2TvFF3gQv97wXjVkmRtJvRGmK8emevDaKSrAeT8ERpQepm6aTLRUxHefaPGFiw4XuwAkkqLyorozz4Q7bwKWCUwQ",
  "key10": "24sUpCHgGuwiUaeKD7PziAWoaxEW7B6WdfUh6koLx7KkyVDZaeHGRtefPPSgZG53hmx73kRr6eMfPAdp8CegzN3v",
  "key11": "636sFq4AFs8n9ipLL4wb2r478ZXEE26CvPz97RSRuBTKYaKDHLrLSeUj6N7yNi26Mo8KmKCiu7eoQhXpTamnEGKB",
  "key12": "3uNYeAfrhNRdrszaaJ5uLJpr775kLE62K2ooz7xMbRre5VQp5jVLwcQFTCdFCW1fTXY1iGL4o55pyEbafrKCb2w6",
  "key13": "28hwQrpQLDWynFZqT3nUAxUhhYMRiizeJDowU5MSSeHJ84GvQEJ2yhE1kwRdBs7abidqUsgk2csywoBhUB6XEhkk",
  "key14": "2DbXK9ec2aKQZL9wmQVBnYqW92ZQSiTjSGNAA9ojViokcwLUZeKPwD2D4LKQiznt1o6kzjcfVVqUeZWhsckVjRej",
  "key15": "vWCD4Wczs23FXj8M3Uw1W88TAe4ECK5PpVsXwMRT9T5V6sFNZRkCBDZHhbebiqNQCsPxnYfyejD7Mzu6n4ds5a2",
  "key16": "3W1Z1oWmGDa1bMozCW7bMvChUHVhhutZ6AMwbZ1dzLg9RM3PvwyKq9usK3a8GEhMMmtWCFKiCJYSDSwEf7L4i9dq",
  "key17": "5u89jyEDkUgtj8EW6wxmBvtirrXtutYoDy6QYzGiBvFb2zsYnGWPpsKFVC5m8F88ZNbBXdQ1es3dJKhxerpSCfQL",
  "key18": "3uJ2DHWFR37QdrUqjofLHCHsqsc1pfbQHm2ffr2AQeNhwie2pg4jX6Q2xWDeRe1birGdQSyrb2wnZLt5VShGPQNY",
  "key19": "2DmczkY6Y17kpGPt4hpVVQjxiuGmWXBa3Y41KgsPHc17xR1HboBYHA5KJgjUkPJx4C8JQyw3Dov4QvCLw4vNCFUp",
  "key20": "2Vs1Zim3ourZiHHqygYkqbQfjtDxfATciBGp8CU6aHngfLk3ujFMKpwW2y25fMJ42kgcxcaG2KHPXPfRykUgxKz7",
  "key21": "4qgxTxhnK1rUDcp12a7d3VtV3TS1h9kgyaPUQU5GRLLZ2zSnsdoDgwcuygRyzN3q3TmhUoEvKqmEDv6F9vHA2Dk3",
  "key22": "3rCqn4FVgSYXRobjw8zLfLTHfRrraYx5QHk9F3iTmEnXCC7UDwzaKP5mF5h56gebMGBjQrUTeTFoHMiFydjPcwn3",
  "key23": "2uKrQEGJyycEF8dQyqgVzh7hhqL1LTbTdh1s8PqYiK9MbBMJcsB4hNf19xZyZgmTkiyDhSdV1bXCugngMF7q24f1",
  "key24": "4LK7JZkJfdkZe58h14DToE1z8HjDr1AQFZBswGx3KKMjj4hxcpEHfHARXMT9pXKi6t23jMzs5bnrz5zeRtzFRVHo",
  "key25": "4VtGe3bFNXutP2X5aevSmrwcKNVzEDhHWm9ZjhgwG8D9QeVW7ZYE7sJzex3Gsa9m8v1PHmSppboeooectKp8Rkwv",
  "key26": "5UsQ8c9FuZWj718Mqjc8fYkQYwWr87vLsTwi9yDKLAzJERDtRyoejArhFWhPT889b3wByYzm18JeDfL2gddt8Jv6",
  "key27": "2TAvJkmN6iibVeMe1f2ShW61KKYmHjhTmXC59BjqQJiZFYrWgmSHg4Kr5W7sVni6w6dU77dGLZdmUVhuXap4hHZQ",
  "key28": "57e7XAjPySmLck2uyBKtHVSMCiqKYkvw6mQLzd89R8FkogDD6nLFKDfSXsK68mch7qrQ1u8PTT8J5wyb4iaSgCwY",
  "key29": "5UPyWn2toMSoWg2GWSzaYkSEXEnuqCkwaBvQszP3RosbW6NTpdJdRMhAoHCB66WSvnbMPUYksERnuspLEqrgxzU7",
  "key30": "5TmtGZe3KoJk9h5MehhHKo7ip9ix8YV24jizLZBt3uLYoMQpMhbEv37c6FW3QjVZ9Kbsf6j2Ywfz3kdng6GXj1Pp",
  "key31": "ZvPPSBSDncQXxcg9Fz9qAYr7TQ6iJQA8p7SGtZxs4EeesDec3iEnfSjzgKNPnVjqzhuHJvD2jktMbE5cdVe9BDg",
  "key32": "5Zqeui5d9jtoXgbp2fbiLxSvx3JfSaPbxRCfG9HAoZfi8LATYrqQ2HRq9eTF5GgboywGeZWz1GMXvkg6iJLTsomu",
  "key33": "32Axn6rzsfvQR3GJWKYnyq7wReVKt1MAJBnh5eoTh69VVwJBxKBzr5bLdQ2w8pNcqRDHiDJgW6xdMktUGyeUtDEN",
  "key34": "2kL9XYN5jgw2DhLnHpSqzmLZiGdCZiZoUYaVTGs6FAXwhVfaephDZ5wPVKtFLTCJJtBo9qtK3VDTWbpq9eJywo6P",
  "key35": "4uc2PLTnHQsJsJnRoDnRNGfdJxncRZfzvacA5R1aKTc3jFSjQWbuvtSkKGhBhJ2HEQNXbHaVo8ih5aBM1FYUaY3C",
  "key36": "EPrWssXESL5byboHqKn6pLgRk2DzQLcaS9abzsgKrYLaxLfp6sX8qGbdRZhy9qbaqHwX6cDdrqApv66hYiqkCQd",
  "key37": "5qh7enoG4ZGc31FvCKfvW4pzssdNTtL9E21ajnP1SbbeVByRSq5Svs8AhnnxS8s6TDtHcnH8EaQ2ia8eB1TqjvU",
  "key38": "gMynJ8QjAHoCLJcTHtVWNmeU7it22DfoymPAJZHt8Mxoks5uatyjKt4iteATHwtGAqaesXFfHsaHDztLQcSSdy9",
  "key39": "3nbRoBWHs95573V3AnjXP4dvZmGVQEkofuiEJCLHLQtVZmX1UndsxavFpr5y9KAyc8jDgqfWPCpc2sXQtz9nnB47",
  "key40": "44q6ZGsWoRiYKfV7S7mWNfjLHsHSGWDMfbMCZZF7knDjZGcZ7iLnWQNYuNttnRxJNxG1kg4cnTjHBH5FxQT2HuK7",
  "key41": "2toA5AH6CFNctTHZtaitjxnXrNoGrEg8b8QEszW39WUJyxLvCFPHonbBgfWpnA3t7AG7gEZPofArzGEFTQeCp567",
  "key42": "M5Liu4bs2K68YpbJsNg6vmFxEfPz8LqEwybDrXfbRtHTqB19CeJzZwoRfqgdtHUsKZD2dKspRDYnHDMAB85meBS"
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
