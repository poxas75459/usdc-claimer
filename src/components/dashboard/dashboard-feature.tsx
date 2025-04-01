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
    "2qrHZf3TwunyyLdjoZ1TVxHVaFiGoi22pCEsCLxj6fRJHi7sEjvFCDLXQcwynewaJEpo1GeRm7GFiJz4Xkk5jnaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaUVUFQEcqzqVwgeAK8LQ1KbX81ypoCZZKXwifu5NMvtaXSTDQAn7ZzMe5baMMHe78Rz53D7GHXmi5CEBEA857Y",
  "key1": "46ua4r8b7KaiVXqMrd3HDt441uEVV3w3owLHW9SFkhenpULNv2QeBncMLmg47qAYhtB4quiHHqv3z4e4q4Lr1Tey",
  "key2": "3GbheKnm9kENAjM2yb7JqLjpZw7ZyKran1S4X7YgFxpUqG2xB6jcrMs5WuGcTdSZiU72t53UqqYnDAc38AVTTTZm",
  "key3": "4ABUtGBbK7BTkSoiQy8moHDkpY9K9S6NoCRf9fTksCgfU722Kp9oc32rbm9G2829ZSmppCXFr4pqnPWZwKKRzuzf",
  "key4": "5oSS5dub8Y5FR8uyjwurozc151FsFAnSQLdp8eg5P2uzYSwwSBEtU4ErbwkTEFY1MB9YAR4HRcKwTzZmF2hqdYVy",
  "key5": "4m65GCoYy871DBD8gdZDKmC24osbGBoX13mWgevg6Pr9kYoTfHimBWgfdJrH9dyT2HTxs8j5gHjJecFkxM1WR3hC",
  "key6": "3hwpwnfJkrgSyVnKZ9sP7KTNfAo3LP4yQWt7yLiwERTg18BkdgE9HbnwkAsx7JtqsddMi4JZG1iasrgC3fUt2FZ4",
  "key7": "4uPHFUogKRRzR68kVgaScu8o4iDGuCXwhpiemq55w81FZQV53TZ548pZgdejbB8QzrLv4pZ6Gx9LhQeAFc3L9u73",
  "key8": "4qfbCutbhshKiopte1YHu6xg8UGwaoafA2zLjtFFDnhiboWcW77xbFbsJfCrFGTj78ZtpaedwQTDC4CwAkfCVk3q",
  "key9": "65Prf5SQptfhiFGZwm8rqmAQZHefMQ1dusnyBYAF9zA1HbtBfu3dBgebQeHo4yFZww7m63oAjvdrLBLBTVzEKGws",
  "key10": "54287rxc5TSho6XDQeFxSen2t5x5Rky5DmYsumQbDgp6p2ndqjCnS89AS7E93whMT3rw8DfXABe1oqgTwc8ap9hu",
  "key11": "5naHmNxzvoGmZpCMNLJmjD5ZYPa2DKaYgBsF4mM6sDFurBqRAYxeuBMTvivk84KmV1EJQc246hW39fasxjfsqLWg",
  "key12": "5QZm8FGmkoYuNRWvGaXAvE7QaV8sakQAfYu8JgAaDgYVYjexaed2rjKcYmLKCVb2iJ5PbZFjD4JgDbfSrY81eNQY",
  "key13": "3aCv3YLoLs7ZrJ2SD6Yij1Mm5KtqwVdwUEi1u5LGKS9EDEwK83e4MmueBpXEPSyQ9sGiEtSQMztM3NjrZYGe2p3r",
  "key14": "3tUv5wUqURvY8RcFq3XsssKW25qUATpPGksYfJEyrPKAgCir2KJvXLqB9JLcSpUAsac3MkKS5t3HmLwjVuip4atL",
  "key15": "3hk12cemjENNYa9kUuh5p6TocbWA1hsd4koxuZZRFAZswJ2quXapLxwngzUMQuA2AoUg5B1sU6SaBDBFTxhE9ezJ",
  "key16": "2HTkQrHGwjUFkvGXWdLa7QWm7jKNz9dEefizuyJH2KdP9rJ5L4Eyk4jNBeDNYaiUJenJ2sBvGUFiQYW3wDMRr8dT",
  "key17": "63THmievhPMPpzLd78HusnRMosqmkscUNc4kL1dpFSSAt8JvH3zsU6mVxWa5jNnmyR2z13ZYPSVS2Y1jfoK9spc3",
  "key18": "5HJqCVFEzvtNXJVS7eCsa7JoxUMtoA6kWtux7BXfXEnN3ciMdbu7VLtrAaGiyA3vjjkN3iHZhYAcX5ZviAkjmJgh",
  "key19": "3xpLTPbaqyGMmNnxvaaKDwn849R2g1NY3UrtTWQonT1twYxu4TnAY9ActRmo2U5B5GSNHM1bbfrEWJwb8crQraQD",
  "key20": "5UhS1xMZsgRNWdBHXkHURZGjhff4n5L465EUFYK6npZTFrGTeGiMQTFHD2QCmJMB3NUeeRd83DwaehVp758ZLw4u",
  "key21": "2FYpxTgCwYqrNapsF2U2xw7p12y8udzRwR6ZthkpMZRw4DnQvXm4VecD6SpfcG9VuWiwLHqmWwvb196FXBUPW1a7",
  "key22": "3jS7gab6m3CEotY3UeKWyJVaw6CXmHSwz1XidchC3JCugjTFC6uXfMgWNUpWpy5ug6QZg8SoLDvGFwL9C5dPpG8t",
  "key23": "2hZ5vCKftCbod7Aw4z55xNgHgpeiW2sTX8N1TwkTj1aiJrq87S228dVKpvkXtMoSSc2Ry9kKSy1aXwJP8Jxv2Byu",
  "key24": "wAvMdepX8MiBCVSyXNfwtJXKatZtfvzPaC7zfEZxMTSf2QZGSjFDwGRZgLW6WfTTvY215KWAwyGoMG33sFqjyx5",
  "key25": "43oX8oZVoVz4BNe48AEGsoX8jJFNz3uz96N3gN8QiyuAbfjbNaVczDNy88CYVVUhKBgGrjFgFEJtFP1eRrDBK2B7",
  "key26": "3UFMP8V2DrgGEgKzwxw6qXzG9E3koXhHcxtqHk7qVMpwR8SJgfuyrMJpyA1izxUgqfg7iEMRA6orTX4BhPiGCoFg",
  "key27": "2AwD6nWQ2Dz7fwsAyxz2XvQPpALGxiCvuiuWiGadGRvAdrn4cYWJBKeT4G6usYTjaw2Bj1vrHtY3GvW1rKSekoKV",
  "key28": "mzB9mqhZVPK5cvzQrNshbpRcXq4iqQVsQccJGkx7wk9NfCiH6ErKfXirPHFzkjjkc9VpkMxVaGFGxzcq5p9QapF",
  "key29": "58ZRwDwZ7JdUXxfLmj5nxdjc7boSTQHW8XjNTp4VFT9MooMnYYJcgpe9xVbj3EH2bk56uA6z8sYqgzor4s1g74ae",
  "key30": "5S7nLyqFPeonVUuDHqamjV7tD4bsiNfrMsUHDPvEvFKLqxDeSiBL4ydFeyPqnGbrd97ypJCJHioQPPjYgzXZDyCN",
  "key31": "47cQXAFw7168JWuc3XQWd6TXp2papCce8yFQ6svXsmsnmcyeRPYUkyKD1xPC6DQnc6GhL4yERuxEdFqYxWBKsx5n",
  "key32": "4e9kBD7Ator82VqCh9tsp3fMsxHfzSdAPB1j9PjhK2gGbTNAK2w2ug3PXoj4FEAnenLKLgQHhNgSi1FC11rDCxCK",
  "key33": "3ujLGWig6hjt5c6gQjaH7WFacKzVBnR3ZW6BCMfwG28wvbemJKrTsDCDtBFy5KTmxj9MZpzQsVMFU6bSV5bF6wit",
  "key34": "262SXgCjW8UoRaCLu9HB6kxN4S9hs1FM6J7wXHMGXbBZjqmFk1osKaPVdJyrqggbvFFzhsCcvxDLx1mUZAPTSMJz",
  "key35": "5spUsEt57mx911yxopb6piJXn4isQjafkRUty76GU1TCPu5BmPcpxUrPoSUHebmU3eX2tQM6kgnU5Va7hsS9exbD",
  "key36": "2V4nvBErzJrBnoJctqKv4WfUUfGnbSd98qf8jkmTRhiiqfwQ9WpPCFXpocoRjdy56b7NuEsiYMyE9iKtYaVnvdMQ",
  "key37": "4mJ2T67YyT1jmQHT66fEtbneKdtMCqJS7nPihAm2M71caYDptKHwzYRZhp2CCXfUD8RrxWwfT7UyLcA4iFsJSamT",
  "key38": "XMdGf4q8QsSNiHaC4fMYBuAzsvWmsaFcnr8ACoPPjk3Nv9YeViVRhG3Mcsihb7gSUrerY4evD2fYnqkFYLKRU5g"
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
