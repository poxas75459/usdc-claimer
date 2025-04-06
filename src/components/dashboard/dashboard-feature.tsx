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
    "5bpcr5v7tkMDi9ewJRRLBTU68hCnE4Zhc8oUt8Q566GR7iX6CNnK8JvCuDp2Yk2Vp144PNbv1693wpjzSRkj2mBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SEcZozePx3Za58CQwcxAPAY3jgSBfdE9VWfbA9ssh9cpwiqLEmdpoT2fyExYSnz3nQn7wRakWMhoGxLWgGgj8zh",
  "key1": "2gXuXbLbSGMq4WtRzKwgrfuxhX8UybdXV82iYzBkjgJ7Bn2iPCdgFhgtuLph2QJMWJ6LbY5oSdaK3qMPCHrprSQM",
  "key2": "2ubHMeLerNTWKh3zSZhbGcERNikVxNp2x4WAJnyF4Fp3sZmjMdjmaG9FnjQsKiW3ymM71x8teyhSbG1LD7NQEjca",
  "key3": "s6rMYTXtsRUNNuwn8fwcXyTYdspekV6mmnscnKKemLdqnnoT9qNggZtKdBVfSnZRux4S9p7bvY3aQhzvLhK4qJA",
  "key4": "3nTJPKmxvfJE3NkdSgNDf9PbUgJxh5t6Ezmt1GxLRXAuvq1LvFHxscGrsjHqcdAbRyKfVjMRAuHsoA7xD3EnDEUy",
  "key5": "5PeTM6HvysRLJjphGCmxbcVWXBvaokibNhyyi24vRYmcKtg2kttYWowAeFZnXjRRhNBQudSL9vNG6Va7rtJng7av",
  "key6": "2ihAZr5f5gFLVCSEMXL8vGF4sN8oBLhgHdwnAPr3DCrEKBFaL5PKQ4wZBh4KxZCJVFemezmVvxyL5v43qhR2jjhp",
  "key7": "44iCjsUw6Bj1hahQJWJvH5Rx3Lcf7cwHa7JYqBF3iPJCkkQ1hXUBz4YeRef9sR7umq6rAoeYQKGXNZw9Qn7MXz3k",
  "key8": "3HTXD77haBumgGnzRxkXUYkJwRjLE5i5XtXrhGcrwNpXMbuTmDQFVr4nxxB6E67nXXsRGZN38ayWgh4QsVKkU7bX",
  "key9": "5jSzUGWxum14QEyJ4CpGbH8HHBpQUscgXJ6G2EAT6MAcTzKjixtQkxzjDXe94e833zKzBLfMJKNUagcwaco6CfPB",
  "key10": "XTd8XZj4wG3QTjfQe3Byf4CV1DxnMqDRWPyLnFXE8QdUWdaK68sch3bb8bDRVGGrD4J8jcFznak5VEoFdhufgSF",
  "key11": "5BDxXTocZ3sExox2jwEFuZUkR4ugJjqUJhmtE4BcG9vXwhF77MQsWS14PetCDZJj3b7NtjY2USjVFqSYRqyqKbJC",
  "key12": "TMcz9sxrDM8G1Yze9AYuJ2kYdqtgeqEJredQEUvGfHtqdvYegzEatQ6hP15rgrLRKAFuiKwv86sQvrHyHefiTdm",
  "key13": "2EfvG8KX7kYT7S9gS4xvD32rvTjRqyNrLFW7Lg9wr3Zzk7zbrCTLWnCMhRHXXUKpYdKfQDoqEgGFmryhwSknZWRq",
  "key14": "34GnprEf48yecrJ7yFvReqC7n3Ls1v8wR2jxV3MWQkUvtmPj1ABtKs6UzCbWZjuFiDBZcH7xn3smEkyZ7SKQQm2v",
  "key15": "3ZNNXeaupjktbdT41pR1uLH6hENwcc2zzvQP9iaChP1Zcu7oubJLgvqKwCoX1vAhjAcD4wB2u1PDPJJgmS7A6ejQ",
  "key16": "5vZ7yjzZC6u51kPP5eVz6j3T2JxprroQP65jKwNhMrn4xNMS63jgEksBZ9uqRBYdkk5bMBAk8hzEsdCLeHCqgZqy",
  "key17": "47WVB2WAyEwWds4BD93g7UPnjrVKhRT6V4o89W46JwyJh3ycJrwgRsg3JuQdQc8UvV41ahCmXUZweryaC5aig3mX",
  "key18": "2dtASWKg41hAXR7tBABkj6CrkykQ7irzLgrJzE8UhdTccL2uo3L3uXJD3TVea2G4aVwKw65YmVgzuib4L2XExeDn",
  "key19": "oy33bWDZoEMtcfv7nkH4htPiMo1duSdmCoMiyBR1viBoSWHD2J2aHh8XvpaGeyzrAee8pSs7eJmUJyKCAfKy8gq",
  "key20": "2L3UzHYy3szZW9e4gnhUnNNivHmEcsHfbcyuHJ85RM1513Jg5MAP4f3myY2z1Xtik8NujMHaSFrGo7eEh6qu2yfL",
  "key21": "2QZimoqS2mhFvNUNTaG9xzhWZyHsLfjvdiMMSne4eftFn7Ncm5isc9Z1BrA4ufpKDWjSwMkYKfRj5c8etHTdA8Zp",
  "key22": "5CnhHYeTrLbjtrsbwydFhpRZwoGS8wUb8eX1xHT2vPVPnbkDF7ZX7gfgdyXuNepQXknRiGxt2cR894Kx3xPT18Jw",
  "key23": "4JwnTnRh8QwHb2rdbDFRZtWvoKYMH3vqsSFbshZ8Xo96mxLi6H7ZWrfnaSQomVGER8FdEwq8fsV6TdNRgApmKmsg",
  "key24": "3scw9qq52DEuPLUFvAqwk8AnUFkchDB6dQP8aSQouRtvpzNZLWQNoyjkHDVGC2PEa9xZLjBRGGfpxZyX57QPCT96",
  "key25": "jV8YGkwEJWznAiXzbHHpEKmWP5e5FTjJpF3LyHPBhSsyeSqbBsMn29HvPyTYS2dyfbCoj5YKSMYUmpZfs6RKa6j",
  "key26": "3aRiKqhe7pe1zm24Vem9MZJQLh3t7GNtoKfr3rMjFuisbhEbYJoePa9hYEDyoKH5jrygNy5gA2J8ifZiPBta1MKJ",
  "key27": "63udZzjUvhhLYQNT6Njn21gVH3i5Howvg7boLxx9NkKBvXX3SJHUuikhgTgPr5aDGWGp3zw6tfkQFBrpqq7WrK4M",
  "key28": "3wDgfjcxQ7q7sEuRyV8D4VKihwzbpfF196eaMynmLWPyd8LuP7uNtp1Jx7dRcr3inyzvgksuaigPMvuXRptnAWGN",
  "key29": "3Z9JcSNj87bnw7BHjqrw7t19jAHZkPmBq9QTradsskCRxuVh6LshB7afZVaqqr8iBnpUd5f9BvWZwgJo9eUY24o7",
  "key30": "57DxMdxtAZ3S4fU3qvf9W8N3VicrLhKGvWgjxoUtJkhac1Aa1YTC9ZTwEHUEtZoCEjgriSrUoYSmnA5aZRK7UA5q",
  "key31": "4VvXMEB8nh8YaTb6vAGjbZvCNrdiUAJke8b4H8xu9ibXbWqGnijNa4rqNZX266jZTtUB56vkSPxwSGDRefyXnFt4",
  "key32": "4tfNfdcT3bnfd6V4faX6N4sGsdirWVWMKqDCEAYMFTDxXgkw4jTQfrZFVskDVFcsNBXTkRW8nUw8zK14JaokEJum",
  "key33": "3mijMmT1ccTMJtnCbkeg4KX42pZ6B4hKzb7CR6nmov1i222TSTw7gaVEWWvXW3epAECccykLBaQqCQrEdZBDfLFD",
  "key34": "4TQfuSpsfGNoh9sBxENhd4r6fcSEn7rEeCvph9NgUokN2sAfWrC52mYPqwFSFpwDgxAqJcXD5QoGkw27JsZ2pkac",
  "key35": "2HNYHNzsirLKqssLNsd6esTdRHdj1czw78fKTiiemMpwUcvUVQdTa81UGXcNjLqqXUiXGZvbXk9muuJ4urxpNVt",
  "key36": "3GAJMh1iHRSDQ1Be65DkHKVpWwgenfigjP9PWAN47HrkjU1iA6zumSdLfAfj3aqCAs3htCxNJ8AKu1zoQYzA5qSC",
  "key37": "fzMArm7acXL31fLBiiBQp5QaBxrNYB4huKzKNUw5Sx9oi1pvNJezA1hZuUw4XZK9i4KeJacpWcYsCHpCRrN8BXi",
  "key38": "UQtxTvcSSfMjcqxCRX8tCHbf4oDfWbNEJ4Sh3GhSs2ZCWPfE8aMYV1oxttWd1u15epotaGGrikDaFddHhE1So2Y",
  "key39": "4y7j9zzoTNBqGJfVLRP7X1bgsCGnu8gdjkMrsLLjr8FHTPMAUT12RFqJJcPNP1U1TUyAbEPMm8waTZjCCwGDFmnJ",
  "key40": "3PVRyufnvQ9b5TVDqeASfBjbh1fQ4FBUkqkX3s9U8s3n7cvz1AQGYcd9BC8mb1ywKB9ziUXXRxVaPd9W9dt74UkS",
  "key41": "2hZXTdrfFoiLDTATAJrvGUFuMFRtoRYyUAtZb5gEHEyGVzgyB28jQNPHeKREYrpCRtMyCCe4ASqhzbLuHjRJGsHv",
  "key42": "2BXR4fuWsshF9DxSz2TYEAqE5agFBwyS413XD2FKZeuUHx1Vh5hLYcrneRbTAJGFunXS8imiHw8EYreju8MCbshB"
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
