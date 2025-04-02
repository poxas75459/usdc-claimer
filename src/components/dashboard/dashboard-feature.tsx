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
    "613PXcphse6ECsSN7dQTW9mGJBDkPyWbBPWm6P9qbSzj8MFvnhnj9xsVCzThCQj2PV3y8syCT4kbCFSRc3EkJbQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V4TRxFR9fAySkN5UAVZ6WvskDJeFhF1wn4yQBFn3RKaDq4udDWx9FVzDTHWD2UVp2UjrhgCk2ReJyPxq12MyZUW",
  "key1": "3fywMeRGxPq8WGmzxYdBPBJajyH2xYB3ErzNTquG6FSRfGeNKjm5GDkNCgYdvaKgKqBHYMpsATHw8zD3UxH29Vtp",
  "key2": "5s7C6uq1vEggQBoDNHehyJnndRiuz7i5vGFnqmXhqw1qeq3aZiHQ6xYkPEEXBUhEHhbYxDJwZDEjwgb1aU3JtnqB",
  "key3": "5EUXKUQttkAqYy2LyJxB1RCNBXvLLk3ohWMLy4bo3Hcq1NnUfoZaLwZmXSLxZihznne3CTDvwJJfHqcFHfRxCGDd",
  "key4": "2HKK2vjibSejvuEyBLwizYscdxHeZL9KJXExSuP7MMN3QBVyRrbmNocp41FgonPohnbqQDwpv9DniCr5g9LJ35a6",
  "key5": "47uYHgwHGQ8XVjaZ4XmBzMuy3UaVR18t1ocQmtVjUSnRu3QqarkWLeFw8M6nUfc6a3XYwMXGF9euQdMeRwyjE26M",
  "key6": "2uxaTwsT2BmcrABsxpJKpCi5mmZYTmY3A5PPY8Um5Hk8bYXiwzNoKyTwcin2nwu3tT8J2vASeErNBviuL4dvxGka",
  "key7": "4u7qLLhL38S1qkVhmor7L4XRkUo99fNPVcXuc697198Xd7Ss37V1MPDJAmFcKMjmfYUnPorndMAb4PjKRwwNY76M",
  "key8": "5qJD57JVSsaZMqH8xor5Ln6h6tFneLSaoWCJgqJeakN5sGAkqJ5aFYT4E7P6smu3FWc15TDZVCoWRGGsVPdDZQ78",
  "key9": "3GfJFtHqX6gyf6bm8pMqyMGyHHbgJJFMWz5WktGBHxas1t7Sr8QqDo1CkEqJNBPmbUMGad8a4oyF3qpRgv9DcK2M",
  "key10": "4A9u7nRF8BGg8v9QfQvnck73rg5ZH28F5ZeSnNenUYshFy1gp1sSwpahgemUTFaGiDVjAYHfCmfLBLYJY6rEYLLb",
  "key11": "3h7RMvpp8ffGnUBkbjEbJgwEYARMKj2WtbHh78FRqpiw7um8E4mJbGiwcPSehqHug6bAfU3L5RFmyXvhJPPE9D7h",
  "key12": "52ymNTE6N1DJ7nAPbiRpRdGRchGt9upaDAmKDib42J9P3jQmgE8oSym257cuAnTTsTCGZmxi3oEAzm8aHb86gvK4",
  "key13": "2ZuLT1M6DFZQaTYTgubABYBfsWmdsQFgn8HdN4TGShYUz5xRLeMPCXKAd83QyyygLj4KpLghwGVh15gQhiWv5oWR",
  "key14": "3ySWSKFw6JnMphwS1EGV8JXRYonNu5vSo9YyDVeiyWRF2da2fRCY23DW2ZQCC2yzHheQWGxECQTJiTPC6XgDTJVN",
  "key15": "2jiDLofX6sdedQ8YsL4AK75rifxhaYFRbmWTKiDPK9VVXzonrzKsAQKgRV9smvVBa987XSRfyX1fp4KbkK9jtj3a",
  "key16": "2FqukQ5rHGEz5yH5kB56opDUowE9BuDP6sq4NYARroJiS8Xjtnfp7qEVTP5b4CqYufVbmXZSde4JJLtMRoHcuEcv",
  "key17": "5SLe55CaHwKxKDoiifaVwKAjtpSjuhowVVBWG38mSDSrfDUisKV6cDvknxFUSTc7kQ7gQK8XPjP7Uj769PCVrUEd",
  "key18": "2GSRqAyHmwuEqGjG7tdz8VAGo2X49XEjei9B6gWDmkFitJgkvdhQwkA16Tu2VSVcgazPK5zaVaic9mqxLWFXj9fu",
  "key19": "3trzePHQykvsPYb6p2t5znJbYuinrTomTzd9pxJpQvpvJvvNc1C5Yew94ArC51PUkWdaPaho3h5KJ3xhx39NFKLs",
  "key20": "2554RQ4fUF2xcRUVaWsPuJ1MxLhRXowCE1oeLNyZ1D1WQcFbHMcfSWwf6Fjg648zYXaFCU4kxHYoTevBYsZXDfA1",
  "key21": "5TEk6eR5dBY8CHJbWuBBWkatQnWyYtrGWbaXk8dmmXY1j36F9CW4L6LmKj1bsDyDu5FFg4e8wYMWL9hZJwHYuPwr",
  "key22": "3phaMGz3qVzyhV1gZeRmX9pqxUQfDAqwJZfiF2a7W29uiEw6DoWpRXjbxfxuEBuBaZFYS8Kc46gXnCf1W5ygzUK2",
  "key23": "3XcqX2DAmrZXEAGu4fTXSXkiHWU3ZrhHww7jwaLHYohg2XedeMGVTi3G24sCBsvUTBgqQXn5RpLZUE4uh1wZ9EfB",
  "key24": "3F1ovpn5MFzPu5QmExrGZXh3cGj6jPDWCpJ4cQoqtozDAFKbRvrBFgyej7M6bfJC4ewtZXSQbkJLAmZCf67tAXrr",
  "key25": "4Ybt75JcnftK21eBDiRFmzyTXSyXokZpu3RXzhBDvSdv5s6f4YxK3udpnukWNcNyQA6wmAW7zMMiYA4mdFUXb89E",
  "key26": "3AP8rJWmE4wcStXUHcQUm7VdvnS6KN3uBhnvxZ3W7141n8t2eS6M545Vr46t71SGnoH3BvA719GL7D5aojrMLFnh",
  "key27": "aeEaFLMZ9S1LuUz9468sNivjR8zHZbn5e8CJ8RASmiZPSVE1wd5mb5XgovoubcPGdx4bEQbo2JowXEogfKCfs6E",
  "key28": "2VvZURSZnvNTd7PLk85CoS83HtfQKUxzAdg4gcvGHc89NGxjKRQffhCPUHd7HTbdd3SXw5k3BsZbTLvXQ9GkmGn",
  "key29": "2X3nZVfByra1rtc1zVqWr8jFJ3nQDetzd5eNZNx6h1S6tgcbQzzYR2TX4HRTMdzFMFLcrw8dawTmZPRENJRt8D8s",
  "key30": "PuYFYKg3kDvXDLsQKF7BJq2UmLE8E9cttN9mps1kjjWmPtyWxEzpUbYfLd7WZWjUjM3c6guV8Gtj8MTVyWWT1U7",
  "key31": "2ExeipowGTAQHa7HayvubaTXNJz7TSqJzvqKuMQQLo9KBDQUphwXWjmMjA1YPNvg7XFENRpdUP648Sj9xzN4oqhV",
  "key32": "2gYLFzcsQG1bnSEDVuy7SVEhDFLPJCqQbukPLciF7GVWPqtwEPoGtNzvT3BazaiAZEVeyBQfx6QrV5exjSDXFVYD",
  "key33": "57CCMXJgdqWiMDJnQXyYCJUokmjSs2kY5D2jy9DCRCtt1vfBHqK2Q2KQMwKDCsyLjP6vXPNTpWG655SMFLdrHivn",
  "key34": "3VpGeT54r9v8sDiLuVigMrAtbMGhWPPKqjMsuPAtXhKjxKP11kYFymSoFC8TinawDMKTkFLuufW1kiUFFJenyQa7",
  "key35": "CGSrfMpEgdS99XgQtrcZnKaFK36qXAT5kJSWeFGfzmuQCQ5rob6wsrsQT73JSRoTqQzErT6UkyiGS2okMonAo7S",
  "key36": "NCmMXdM8ixUL15vF8WquLa368XciJ8EihxAXzb9cVPkSzatdnXWdm4FUPVhfFvfGxLRSbvnzUKtzeWFVdzuU4Hx",
  "key37": "5RJak7u4sMLqmEvnakUdnHuTU6cP2FnEaSpRPvLSaqb4X566nUraHkovgjJPtm3xF89kMn9jCkkrgPM6RRBT6zyM",
  "key38": "nhJmZXnkb3REebv5XX12yyZhiQShqag61L6yNUNNiswGse1n14AjvNNGecRw6iiVDcjgeJC2u3Jifir4L5rUkxQ",
  "key39": "5KHgt2dzMMJy413GMDowmveVjrZLhTypSQU7vMeggsFkum4WsdoZnWrQg2nz1MVBmsAXbfexxZAQgjZMVoGtFKSL",
  "key40": "7KUfYN5FY7ZdPoDLHxG6NVTEpzumpfFYtnprV29Ndw7Uzpijyv4zBwL4Di3KPx9gbsqDtfmm6AuNJDAtA5SF7EE",
  "key41": "5qFdLdxDiRwvJufANYMRTNnF6wSbKwh1r6DB16zKZaXdFT6nfjSAarwMYTuDXfLTAdKvTFiMVLhDSvw9QJAZseP1",
  "key42": "3jY9LxuuRZNGA4ixRcKLARrEcyr1p9QTNgcZ9mKXyvBx5Txj7vSsK2Cgc9TN1PYJohAKcY76tzpCy6EG1BCoV56d",
  "key43": "ofKDvicz4LX6i7r4Y1BiHfVanknX6tV69Wtgu3mYCGR7oBCjodNgWnydsDkN7LWKtJErQQiERUEBXWCyPjiJoD3",
  "key44": "3EzF4e8iA68yKGuwL7GbfRnKFc2CHdYW6UKSPopqHeFw3GhVor5fBrzesTWbPN8bShmkaeez84ns813S84eaaMCz",
  "key45": "5pu4o59jR67CEsctwXtDTeH2DsLJBhrvkKbHctWy9578WJ4cz1VHkzQ5AU9yBPv37VpDvR1tVqFZp4yLyh3VoNR8",
  "key46": "3TgtHNpBcFcB84ff8YHDBpunqqKX1CVLP3QENGfcLLs1TBLsLsU8LToNjAq2DbVBLynPNt8hLCVfWyEi84puYo6W",
  "key47": "2wyMFQnYu6QhNhixn3ezyFwgW6WDB67xLeAjo9uYvZfvDtQKqxHVnVy8jL5PPvGmBWZBUFmmJAWUcQVDPhUARahE"
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
