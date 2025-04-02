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
    "5Q9u2V4AgR6d7T1cUL8UQDdspCnbV78zsU9UMfqhki6r9xRPtbDMkL3YT3xxaDwAa62LvcVgLxbPiMpv9VvwatTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2URFW6krGQkhNtRiPexNQkvWmjCYNcN2RCx1G4tVPRAoxuaDqWS8PmFhDMBqSHtr9ge2iTBboKQhS7SkcvJFeKff",
  "key1": "2KoqUCkJPa6YYnBRYBLbZf5jgdQS6bM221Cw6idd9ZYHc7kFpW6gmUFfbQatUTqDp5rkzpREtS9sArxFSPHkHSXK",
  "key2": "4zWF3DVCrgMdbd5PjBdEzFPguJ6cv44qx7PsyLJKj8WoAJtcay2kDQnWu4V5GBUkUH7Rq5a6SJyzHMQL7ExbMrsS",
  "key3": "2ayDD1ssvYcmmnbAcuxQKaCVMqhWaqx8o8DTjMtnk3MJaPizHjvfAftzjBD3HXHKbdserSxfqsma9DNGmCzYCRup",
  "key4": "25joXj2Pq4dUisbY9fiD57eNEGKwNa2ijbSx5By8B242ynQnfCq14z8edzjgpFcL9yVs5sLBk2BK89UpuB6L9QKr",
  "key5": "2Y4Nnd1FEdGVAmZjVuCgLi12u5Ro19rE4x3opT3rS3cHCz3ubuSQoyayMzAiYkqwNsqagFutZTH9J8mxVABUKUwA",
  "key6": "4tamKzUhPwS9QV9JKpyUfG7NiouUes4fpv4JLZjecdUmLksT1d5mNUPbMGkBk8Ue24ZKJimwQUejzSLpKtjzPF6k",
  "key7": "4WNCYznsp5Bejqk17xBocfaMbG4L2G2qHG9M1ePCTgbyBJDkedWaifrt53kmVrsMzQcN1EeBhZz4zXD6GKB7uvE",
  "key8": "3fEZnCdW927u6vuV8qZ3im93quPWdQ59M5J2Zk22cnxFGwqjVixcu5xMbqrFTXYtmpjCyBKLLSk4KaQMgHr5hn4T",
  "key9": "3z4umTAtnEJnmk2rXhU8RnL45yufZT5xVY3Z8ZxmJrVT8sn1f3qSZ8WKkwiobDLzKMP3GsaxuEjXRyEgXB4SpiXH",
  "key10": "woMbgUPym1CeoCyxyM5XQZyk1xDaj3C2956H4GFtWGS3zMM8wZQvXfWZTsLUAh7csP4D2XqJcdvNocoHQbsDiop",
  "key11": "51EPcG2yCxbohzwGYkzgn4noJ4tZiTv7nai7WeqhLGPxrqiCAAdNjyfMLNSB9Z3Ni91zHdJXgM1KA2Cpk4YZfb2G",
  "key12": "uGdr1kArBmS5XND7V4k3UdLRa7gGQLqKkfmnqshmbb5myjozGjyLdF1pjJAyFWrz6HdaSTUeB9BYGav3G91RMgY",
  "key13": "58bvs76vgrffiMn5Qy8RyDBCz4VnX4DvSXH6HQB3JywhVRnWWrQQDHhnAEeAA2rmWk1viovw59xVhVyA2jPbthZu",
  "key14": "2JPMG2q98avsegXwpyzx2pGDDUNcQKFxRVU5bqFd5EEHrYUajUCcvqfDqSYn4s1xJGSWJ3S3y91ANFWsCUwx2Pgg",
  "key15": "3JSjcayY3SEHHSaVLJvyRUnd1MAiZ27AyAcimG2JAXLPnrquPUoMdhUoQapZ4Xv9EZnoAhuccKMQiciw87hLHURk",
  "key16": "stubv4NkfbWvzNjWBJ7GAGDreDu3NBkQfeBnK57K2uVGMkr8JqB5SLsxK8UF8roWdpiKR8u5qbZKp5Rrd9t5fDk",
  "key17": "2t1BYCWxrLwA3gfxV2C1bGM2kfSjsVyaUjyFJewqYc9FdnN12DFPcmPWxJ3T2HEQxSP3DuPbhKDbFsrYWPTwGMbV",
  "key18": "66eEwceyUdBAtTe9WxvA3CNCSAd5kdM3pK42SuyJ86zpRDYboG95iAC9bdgGCVnk4DK1ZTdd8kmvUBJmak51Ygrj",
  "key19": "WH9JJdhBaHJKXLza9eJ59DrQ9Sn9Yug8tpwJEGk2cFZS2KpoVKhtiRTc4UpDhYbrTZ4fLpVx4b7VijxMyER8EXQ",
  "key20": "3H8ojgsTNHe5Q8pDVs4DLjahx6B4ZGdn4pXpxkV1F9DUivi5XT5EWuPRHqFaFDyMjBytsc3cRqZyZz3EGdjjEvEz",
  "key21": "4wpN4zBu56sNco8Va8zA11CtXE6tDoJEHfVV1Jc8rSicRjXBAZ9jCVjZSoPXDzbLeUTzNwEvwMcrDyU1ufVj4ApR",
  "key22": "5cC58NmLhma9yY6KvtJbiADgUQrSEdXbyx6WNoge2aX8wiweVxkq4WZq58YLt1AZ2sJv5f42PNRKm1zsywfx5Gwa",
  "key23": "24Qhbn2neZD4wMzzTrHujqUCNCXAsgF2JyhsNoxnr6MHR6yb6ZqXUVpHgGBD7nPRsVZY8jYxjLcMMUutaxej3qb7",
  "key24": "5EaDZrQr5UMRSR1JsifPnGjQWJLhMZkXU3T2Kzni9BV9357tfD5pVbsiGmSF7E8Lia9tNqBczYpvszHYD5Mebz7W",
  "key25": "313K3wy62Si7gGfWg67cFRi5Pz3RuDkim4w1exDfuXER9hQuYULxdHt4aRmHqBEA37WEGkA1edhVuUviBwsKwAfu",
  "key26": "GfYZmpRdwQJyFbddDXqhZPXRH62HJSKsWaudk6v3nhtV5N32pGTaWHZPsqYwhvcipzag2WuR1dQZwshWmvXovzQ",
  "key27": "57a5PXWix3z8Fs7Gf83yPMtuCxzTDVqyz5gYGq2jk2rV8zad36urgmBKoZd73ub9qWMUePFHd6S39xST98BDAUFJ",
  "key28": "57SLeR1KZNMZPsCw1CE9T4fRFv6qzhSUeBtHoGouVS3avhnEkm2Uzmsr8ZyEFm2FBJPoyVqP2L7HkMGM9PjcZdrL",
  "key29": "3MPChEx2kheX2Yyt6YNyrCCU5ft6vjmY5a1NwkXCSRYVrNq9Xi7iN61RWo8EWrb6zWfzKbMmC1TEa2bbqbkiBmQs",
  "key30": "3yPY9wgqkpcRVXMBcgX4YVTqrJJvtsJiDqHD86nH1MpMkW3rmY9RG252ftNLgeBZnJP92JDHUt1p8C841HTtW2jS",
  "key31": "5ADrUtiA8JmLsasxDqv4isPnBoaqUAtyJ38zWC7ihbrGx5LAgzwaRtzRWbkBXX1oxgkUYHunwsCSKuA4V14Trb79"
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
