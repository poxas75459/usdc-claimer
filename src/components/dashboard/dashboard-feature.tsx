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
    "5sKf78Q5ywxTr51rNTqN3nZdqZpACCLsoNjv32U7pG5HYjFap8SEHmb4cidDo6k1yMH5BETgC5cfW6q7KrKDC4Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYwom3As9viDCiLzLVAokEsUEmprrASGGzZKRGdh2nz5qXAQYy3wPWbwHd1SoYnQZR6PsXmmXGLzxdj7qpyQRXn",
  "key1": "4zDyYKnPhcvp95wY6KLpWEaBUKVcyiLMNgB6Z3zBrbk27A3k1FaoMfQnQVetDr3Ux57E5peMowEwU9U4FpZt3YHr",
  "key2": "5J1aasE9j5LJPCetd2NXV9hQEwuQ3Zf1Zx39Tw9Eruaec3rXCXShsGwocdfAucmkGrWEQSgHa7L93jKd4Y25jd9h",
  "key3": "3tfAtcWrufmFUpasmusHMb1Q4DYdEdwoNbGoTC9DqKxy2vzv9VJNFXejjt6wQBLPj72sBL5ei5tFjn8F1cXtFdDo",
  "key4": "535EzVf444Ne8UTWJ4Px87AoPNWMizuYBMeRxz5MZhhcPdhrUC1UrK67o6qQrUa1xxgoQFxvMTRhRfHjfRTHtAw4",
  "key5": "5ZmA4UcCs4oVGfastqEPaCCiD77dXJBMdjzvLSQ6UphEEiuTH1gLLojSnvoxQBedtwkz5xTZt68M1srid42Eyi2d",
  "key6": "5Lnm8osVJyXiNECN1T7Z3p1S6uAKyMpKnSiSVWa35iy7W3bEYuepxBKTNAmg5xSeySu6jDg5cZE1zRVSqFYi8pw7",
  "key7": "3g6WqtUzUuGUU63ifxZhcwsUUNR4r2DPd78UvDjHwqHkA3XBqsyuYGFuP8cFxRePhGAF1UGy5r8io6TJiLmXDKmL",
  "key8": "iQMBygjxwNFx7zrAxuKrPY1RQhnB4Jh1vivcgGFC4gbT2FFYJqJx2BkUJLLQhfppyPUSVjdMmkdZSAp5ULf8kbL",
  "key9": "5pG2aWMc7ir9fUMruwp8U5evKSXhdSwgcvAW5FNzwr5ySjVcekByNJ3CELxkm6DWCTBxLQyf1Dzhc37vvuwg6YKg",
  "key10": "4Hvm52vPx21tNog31mbsd4oZUnnr1Zv6RHmTdgD5CuVMSWZAExN3kJMUXmc9JusXxL2nFeDtkmqN8FLtguPx5pjE",
  "key11": "4PSomrr2ECpb3cZtrAH4a3NqBimNXm5wPxcSLFDHxX4jmsF8fdHMmg9sV7WX81j5wfgVVsYp3ThPmrenZP5MiYTx",
  "key12": "3LMRoqzw4Ltp1kjJsYsQyYDsmcskWqFWZ9DrWEBhbVEWT29v2Ta5zbUE5T5rqLgzGquN2bDjjPAWAvA75e38S6f4",
  "key13": "2MQXKp8BV2gcboQh34j8RVxPaqt1wJSQ1HURxn3subDwaEZSqW3oaaC9JAVUHN2dqG2WQaroe8ArhjH2gfpX3BhP",
  "key14": "weJz1eyXCE3AKn5YWAqZerXePu3yRW22apKrLUZhuu3PRqkeZp96rHDDYPWkoUPN6V8usek9PNBLitkfNYxarxY",
  "key15": "64jWjQrX1CrjC4LtT4qc82kTA6u5skjmz35bn61aLWapjwgcn8qksrjGQHNMbsRyhUNdMkiGwjZGciDAGVFFup6m",
  "key16": "25ecfM6oAdVaTsC2WNYKhZKaFZX83EKr7tWXEQh1dui2DWqrehAq2ixPy34z6TsL1BLXUN8cmPuw5KAEsvWZoAJK",
  "key17": "RUX7zHQhsgXtuAAk8LECfjP9q4H3z13wu8Xyrjm9kaTLofXZGgUcs1cJWHcREw1fSG7pR2jPQtdkGULTLusxYXZ",
  "key18": "21bpLBibkycjo3kR5yofYMuPxgAY6me3i37TGgoMnKLgsAruoHXPJmMBC4mtUbVXJ9KUWXWyuphi4ovhEqPD5xYE",
  "key19": "2sPkBPB8QgegRuF9tqwMviwLK54ixSKzSuos6QoeYdNhw3qfoQccYTGYgEC5wjdaS1fEwEABN5qo4jfAKQKSeWC",
  "key20": "5AGxfUu2g8E8vfTdQnxH3SEkHME31xPU1aB5UUWzAfAW3TT1n8N6dzqEHrX1xM74YJDbNWa5idgE83w83Md27i6a",
  "key21": "3UjLhNcfat5icXHMvJLNGuLJPr1bV6S5DR1tgv47HocGDfsi5kTWa48QUbDicrCqSqKoxLf7EXgvwmqw16pack6V",
  "key22": "23FHH9MtALx3F7Fh3DZzSZnr8p1S1itBKEnPywrqnkugEVShm5JVkDCNvMsPiFHW4icHwWXNm6S7e2X1TzgongUG",
  "key23": "koURUYrzTn75iBbuFVGhPRTmKKNUC6FSwLJ47axUE4sMuv3DhorJDpyPSBGE263VdZHjgynjP7cAz5eTERtLd2a",
  "key24": "5dZ1NQaWqdYQcN11eTTZgqeKfb4tm2CGMWC1V9o4zsj5T7YBdQVWXe9pQKjhnoWiasYbJ191PWqtASPYgwmE7N2R",
  "key25": "4TTroJMpwNn4Nt9KA4KnHXDECQqPGSBGFEqAE7HYyA3cQVbVUzwptZNguCyceywy7Bebb3S8RgitPfC5g6GzUm36",
  "key26": "2tcs8WhVEcMBej7jr4vesmVB3SpY9Gd1GvTYKpFUrKPjky9Pd87SrYWbpfsYe1c4p7pUpfF66iqXcnDeYtLJqBHG",
  "key27": "4B12GATJfYS74yPy5HrSm8LDek5Jbb72fVFfbsy2kPPDgWDANmae7kLPYZm15fr4Jpg9LLp68VHeN6YADNN81WRC",
  "key28": "2Zz3dzKbMeNSVTfMtibYFZn2fA1jzF8ZZxQhXnFSPXn7PtEy8XZwHcbpFetX7FWKQhPzXk2FDK2o8XpjE2mbqeB",
  "key29": "2pZnHJHRgDs7nmQDuKoVjSnvqTJbvHx7mJg2GrfQWZuyyYJgEj9jP4aNbkGpTF76JDbHv8an1VMBvV8fWXki8Zqw",
  "key30": "kbJQBQP46rHPFpxhvjT6Zkx3XSPTv7idewuSAVhN6rirZinrQwFBHkYgS968qjcfV5NJy3NxpDRk1Cjkn6SCVYh",
  "key31": "m3ChWwkrWZgBXkYrcxhQXzueo56ipMg3SV1yQWjwVfuwtFNqF4EaPCiUeGGsB4B9jsJ44om6ftHyKrZkN4czpK8",
  "key32": "wNtf6NAeFm1KephngFT3XKrB2xPp2mgH7XKjyzw1QjUmwsh9wn3JRGbn2H6sRNZjchMKHae9CwFoahKmc6zqCvC",
  "key33": "H5KrYj2LFGhFaU3FcC47bVXEV75PL74WiHZX2HKpHaodfRjBBwqkWSfivkwGFAGvGmxP9VwKp9TFZYAbgSSqx5v",
  "key34": "2LGSsPn4b2NxRwDjgRAqirCEuQcqJLAtp4XpfVDNdfBZRUs822nPerG69aew1f1LpjtueWw7Hg1xPLWzFCnvM2nJ",
  "key35": "2tCqXJWCpRFttjqb6ZfMc82gxA7GeiTu9fd8sWy8Y7hdC2r91UsGiAB7cyHaDunMYZVmH5FiLBLZX7LGje2kF6bc",
  "key36": "zER6QVS4thScPiqQnH1L63MzNxczMpLwTg4L4XCxuzLKCMJzNDVV79CKkheqX6ZP5qJyD3PStRcnpFfdDYxaB7t",
  "key37": "5y2g7q9GMDGea6zdXEfwSTJ1TWbsNxaBSUcznpP3Mat9KD8NEEGwaGFxWcdf4ZsS4agbTZFoLrq41dzTXsjRA5mY",
  "key38": "4g2cyJeJkknRYgfWzPW5uT2mppLtSNAdBfViKkMaN8vMpDPysV5tLKXML71QCFXmMnemubHyiodhseeyHC7aZ7TD",
  "key39": "2UQVVHjZLHtTQiZb4f8Y2WxtsQvGtUkCz6L47jmEafL5yVZsjhJGMJReQFTfrxpgj1f4MfCLYp9xcmJc3jsUEvPj",
  "key40": "3JAr8rMaKhdYH8X6HFoLNVNoNks5T7NpwownALjP6hshS9nXvbMEXSwT8YWZ94gdFeP3RoFZHFi9BBXTsvrLpjRr",
  "key41": "5u1cu2aDNEBsNtjRem1mcFtfdyRR49krecqvH4swe8yUKr27J9Sv7Py259ey6tsnZb1mSzjaKd7C6teW8s8Pwh1H",
  "key42": "KbHkrnHeqvxeumKpryiTT7keyZhV4nE5ZUDNcUXAEjgaHcTwB3FZYJqgCmKtszdPk44zLmeaVRghXUCB9ZtucHx",
  "key43": "5JqtXxsbhToQcWZsTggCqNPx3gHDTosFKvkv4if36tQgbEsqjHoUdMPDwqrMQ1KMgGdUeiHMCj4Gzgctupdj3zZi",
  "key44": "5xETFvR29rDNshbCzvrintrnfGTYP45NHZK35Kwxu6davciqgKiGsGCoAJPDQso9LVgLwfiGDTfn5UDz8VmV123T",
  "key45": "3zz3h48e7hcrgx7wxC6EUYzfFcegPhz9rehPjD5qpvgnVwmi8KUa4rmgVZkjXwRZE9qMWqNabtbfFXNDhXHD22Wa",
  "key46": "45VCM9VEQQqFzzE478cB6MzKzzWN3LDbHpVH7SgLCXAnArQsoRyiyLZU8FdSG3HUkhHEd2SHs7kdobSWie8FmXaZ",
  "key47": "31YNqUMujCwq8Y1BrBUEmnmzuE2ERTdXKaGS5uCjRCunqXvaffcSCjNB5zP3pXTBjvuMfpnLPsKXUugA8sa8dazo"
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
