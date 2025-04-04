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
    "5ueX8VpRm8gBDhpfHKTCrYK8n5S5jwbkHPj4hi9HenWiWixfku2vMkfwWWncL16xdwbwRFEhLXj6Ges6bfZroSy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22eGtPYdcYcFCf93me9RYQLMvZ73J32yPnJ3hABJXpX7RhsbVfUn1itemkekT9GCg3bxK9j6Bmh5Fi87dutjp5Sm",
  "key1": "uF2YjWcuRF6oAMRn4z3s7AfCEYbhoF1CJmGwLfTb7fFWbw9FpeKhoeX13j1WTAfmXwux4sraohWyKGCR3c3Z6i3",
  "key2": "3oLg7LVaZufBgdNaBRMm6dEiMdkNa9BhNJjtWitLDPrp9LyUyj3FUzZNoVFS8WpMdJvNxE3jAmbKo6BL1efsFkDw",
  "key3": "4gn3E6owFxSxgMu9LPt96cBVJuYsqmaoak87HxqGm1MNQa31iE9HfzyL9bwVtdtzH6QZqioyTDhrwfA5h1HsGAVJ",
  "key4": "2fpjbDCWC35QQvLnq39XjJ9TKYokZMQPwpi4XxqWmyZWtMq8Z23MKqRLF1G8KwUdRPZrwrHjnwBmj9qUS1PZFKvp",
  "key5": "4aoR9SLP1s3WEeaCE5CoapedyPEta9PYCSDsa6ELNuPQ9BAwiFqM9yR1iYXsQi6eKfBtq18bVCK1zLqu41grxkTT",
  "key6": "5sjNhnhALcVpQPLu17m9AoiRnffwQMe5Jmyhp4qfQF1rKXN2jzgXKRnne43aNUYptHacjyZocPByQWx8Y4vywtdX",
  "key7": "3cy64fHDqLrnKZKg8XrCWnCdaEMXzNM4HSqkigRZ6pgNyFVNARMhES9tHt3dywcPnBSL4QMpM2gkFKgKQLkFpmmT",
  "key8": "1TG49oE5yso17TaRX7gcSYcszUA22Gvw53f6aqVQzM2R4vGJ2rJXHenqL6zQwQbGzrX5N4tKnwQ3RjjBeUPmtfc",
  "key9": "4u4DLYsu8FVmgRg1UPKJNkRwsdoJHz3XZYtRWfo4itFBp8ajnXh3uTHwnmPMVzq13EyMpUmpDxK1VvoovXRcNFNB",
  "key10": "2AjpsNBnLu8EpJJa4mUhEELxSnbyzdR5U5Pd4MzDCYomuskpz6Zvaw2ca4JzZtyKrAuD5Bntd1vpghs2u2xo5CmH",
  "key11": "3tQnpdnodEVNY15L29nWnX85crd8a9uCYTFTf4YkSuG9bVbGmFnCvgBqzQrPmn9sAed3MwtWnCaZWVYu7JzMerzE",
  "key12": "3cpNYzUtBbavDGbZ7hDZngN79rNZQwWoCTSqCoWDfzmHTdPoLmrupAWJWh46mhRgMXaVJ8vLeJ7Sj5PuXr4nVBiY",
  "key13": "5ubvSjtBJaCCDz8iunA6zum3iKjNpNpD4skM28QoHXSuXNxUTHA9ewfrpg3whhU5siiqUVPNt6cG23E9EAwhF3bt",
  "key14": "63Ez1HnQosqM8hNeXhKN1dtzp4AF7Lp7AXWZEQGA8APpjNhxwhzqgTq8D44cjK1gHW3BeBQm9GugCfBeJCGcxnPQ",
  "key15": "2E7KXwUmpGsY7bmYwqnz4n5zSTF69n488EjFCaMWfA7uYKATt2MNdqaNMgKakUtwmQueL3yMiVWjBCchT24zhMb2",
  "key16": "gwovx1HwvX6emgzBhTdHUU8uxEokD9uiSaDV1gwBPtupgZw1XjRexoD3TJmoBjwGK65vZuy8Qji2Xq94m66Zn92",
  "key17": "5xVhhimr9rmaymeDrhFKjUjVcHbnxBhXs94LLp19xR2gWcBPPB3Diti4ceFA7TxWp7e8EnMsXndfN5kmkqfNSABV",
  "key18": "2nog7WmWqv7YbBWDojUbznPEWZKVdCY5XtqtaMweroepVdz4kKU3eVaPpBZD68ERBAkZ9tMjkmpMzJA6Uza5GFz6",
  "key19": "23XQGsqz1XmHNGEjGQRueBTPmTuzugzoAd1mkXufQcbaguaDsD1QXKSThMcarDeNuix95sU2imgQs2RiqzMyHiuu",
  "key20": "5mFjwK8Xu44B9NmktqLvDaKxy7SQdzpmFcfkhV6se2uKVreU2CNVvvMNKYPmB52DBB4VHaFVj2xBwRroBGY1NPSL",
  "key21": "5QtZLvse9Xov7rw3FyrW66iSRvaRvEayRUpTmkYd1veQiBuGu2B6aPuaXifaxiwmrHXjxtW598kQ2sfHVe3fyKeD",
  "key22": "n9o59EWnNDeHFgc7pvEFXvBP3kMdDB6AAg1oKd5E5jr2exSANByEJDhyawCiJQJTCdNAXGSR9rmP9iNKctECHcW",
  "key23": "2ryeQne1D3y1XTWF8ShYwn7kaJZUQESCQPeW6Sog5XtJscKjguJp57EGLeJmNL2rY5jnvfEECGA76riAWPpFyPPT",
  "key24": "2tjjzxKakuxgstDxS8gKG9qxJt6NkTK2hEAMoyWVoj9NniPPkZbCoZC2Nja1jtSidn9LeWiFRodwEMfH1829avp3",
  "key25": "33ruQeeKC1aotnEvPYSbwhYwnMTsX2Hhgcf3UkspkPsbx36m5qLB4s9APkJXKKZSttnuZSyoFrcuJ2gdM6BVEc9Y",
  "key26": "pNDS62qF4QBqqx8RoNFD2JQ8dW7PYnr2fufbRFvNie6aExkVSXtCXnQytAtcXKaaMeeqJyTwdZt8wFsqXS5hg7q",
  "key27": "5bK3HCepocMAhPdT6DdjVU1FH4DbZAEUaDrEWdLBKMDK1MFJ5MSHFbeaGtRUgbMHYaruPtqbkDeKfqtRW5CCX9NQ",
  "key28": "3eKhHbzBbL2fB7PXGgxSDeLYyoFLWHMRb76mc5FVNwALuYv4G7NxkrAkPQriRW23VChZ4FVBnRXZhvuaQGnHvQaa",
  "key29": "4gnyPPu7CH23E4pVCKqjXetdunrxg3yzsUvQAhiSMt1WrpobvEqBWYin9Li25yaB1EHTBB4SzydXq7krGRFrHT82",
  "key30": "39YD6Tz36J6ynJVYc2bv6Vtcm4zNa3cUdEDBwFJ9ex6RSgkGy3gqnKs5D7ZXKUVcyrUCdwx93YBtkTVmrGor93dp",
  "key31": "2ru3Swu9cYccWNZ6ftYqxzUuPZuH6s2cSVNGDe8f7bE6j7iaDstMfCMRUnjeRNSbjs8yPqP1ECNLdPUiHso8vhmL",
  "key32": "cTqJBXUA69ynCzvMphnThAwb2u5BPfFGVxLeEeeZgWJf26UijgHQNQJq6vASzDk9gEMLLgMDxCzboQwhLsdPXph",
  "key33": "FzX76LuoBrs18KEfoHigg3eaEoCLkYLyMid7pu47dM1zMmDHwDzvdNrThTEaAkuXExxQ4SnY7cyPB915UhzQNuu",
  "key34": "5tZALcKYNBZwGJcSS5vtLrgkLu7CKWCv3gXwh1rrM1C4KBGeonmmbJias4XhuwiLePeoAFyzLQTa2LFMv5eKG7wM",
  "key35": "VyVb9voy8F522dhL2gMMQNP22vhAMtGE8JYyc8Z7MfGGtKrJkXS4xzWYbkunoSYqoK9zfVBLyRSb5RgMndHb6y7",
  "key36": "47Y1kujT4FErzvk1e95jkHJm8pYifLNj44wB6yWJcB1de3e4em9dKdHJPmmBgorf2eLaPK5zgGE96qrdAwtkubCx",
  "key37": "RQYwGdqFkhFT1q8XVscvaNofAbbod2MMpeVQ218kRcjeNu6HLHZE29H9qXqdrb6MppWWgt28acVbxMc9aiFW616"
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
