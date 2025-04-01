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
    "435KV4XBiB2g56rEq6sAXUGdataF5yekJiASyF4gc4i57tafmu23EwFk6Fa6UeRqfjo6C2o71UafpYxXzSbK9Jtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFWuBK3FbAfHsY31JWUeDTUEfmRLxxEpp9Sn1pX6sh1P47CNwKR6REG9Qd2gHP7jk3EQhBDs2Z1RsXAge5jYgb1",
  "key1": "4y9dtfTJtUf9tYTj2vrt4Vf47uFmtnh91P9ZN4xVSn2F69DeQWWKQ9rfNHbDxNsmPa1PxJxbPeTyXy6y5RxuXRM8",
  "key2": "4gvRSWYaJWt8yQpXt3MQG2GrmkN8geMFUMcHrcUknRxL9Q5xvTeKWmrAEuB8QpCqXWMakpCPwn3YT2oGVQq5zhNV",
  "key3": "5Pac1tYzB2HQRmk1KVE6mpMhDrDTYeKCHeEudiYBZNb8K6bMSCNYoHKiL25nAi2PvJBgTPoDLFgBkPPARhwF89NM",
  "key4": "2EGWM4hGZxe6XihSHZRfzd3eqcaA18ZKbkTv8yZrEGZNwDTCrWRHeuqhdBkr971MgptRY3xLPyeD7YVVkcbeaowu",
  "key5": "2ZYcARra4MazwSUukbrgnofqscfUusTPRd2rQDCAaVvKiNzNqJgRaq4cKD7fBLHDVLzCWxQDmDPBxmu29CERRvWr",
  "key6": "27kguR6qvouoYEaSfcB4JTD4s9QrsY8obTCiscYnSW5WFaBFx2tTpjJuzBLeXu5YE4Ark2dcsR92prSKzNSQeyBB",
  "key7": "4LNSMMyEZLEkaGF8CGFYULNvLoqrUcagWNYUH4K9yzH2cAGAzxpyeCKJyTJ5cYjXo4wv1aZ8i1hz4abBkBNj2WvX",
  "key8": "5rVMhegvssAUT6YasKckcAVZhXNYASVRuhUuKnX3ZfemGutbNXjs7TPhYXNidUwruvMLUEKdhUiybMvHg1S9PxVf",
  "key9": "4S1hJy6wYpeuLmvSpJiEHiXNWQPCCD3fDo4MtEWmP84y8fU8A72F1P9fvvbcis5f7snbykz32K7av2fZY3Shf6fh",
  "key10": "3ykQQC6wBfKEbVZW6YFtTbrBUgnVMKsvd1PuF8ResTCv9YLPTWTKFnm1T6u35b7biB1zg9dDiMZSuALxTNLFfUBR",
  "key11": "3GeFdjuoUoiwWen12XfdmoKztqtSXxAMaa2HRuZnra3wQr26AjeDvykJPEK6AAATfkbQ3mb6nuxkZExKUgZbFxbM",
  "key12": "2px7bPUQoYrUoeznBjLAqTb4W8mcN7kEJYfEkPYsw6uyeZosK9JD1PoaYQ918CjHUqpQjt2svVijeNJj4dZbNs6b",
  "key13": "4L9KTRD1M5KTSzJK7ZPsmsZVL4Qdv3F7egpJHU717poa4R3Vmt95qTTfXtLp1zH4mZYE9whwbwAhyURUJfva4fsy",
  "key14": "3JeX9qxR9tGozrR5iRnioVzM68DaSSdq6Z9seNF9nEnV8yZW5gJjAYuGLg5PgNbUWyc2DQ1tCoQ3umFwtcLXFqUZ",
  "key15": "2bPzjCf9XY73BW4DTJ2iGFdbUrJLuepsunpcCcekYFdgn9WKNxR8ABUhbpU4tQ3HtFXm5q4kZomc22vwDzdJkEV4",
  "key16": "25FKNgkRFE4xtnDgqMJ89zJkyUfSsTutG6fSdzKfhrnHfqEq9W26dWpn5EttjNGPfw741oBXFjxFaquoLLw1KRcA",
  "key17": "4caZjrcCnHcG9ZLXUd7hQxX6UZ2ybCGJ8d4NywP3XjEK3Hb2k6EBKF62YMjKqJVq9fwYarmi9sxKwAHnwYdc6Zkw",
  "key18": "3ZWAet1E9Nnjj99UUx8wn7TJX4hrL13yhPE58oP2NtxqTubUyLGdCdrPwQho7c9jHUB1LrEcubM4MzjEvM3gsFPo",
  "key19": "4aekxRVET7WizoAEpQo91HLm9mF28AW6dw2H8FUPUKrDF7b1SfRKuyquthr8sp3ZYJoS81RwQgzoUm6uewkpSqFx",
  "key20": "3X8hSWXGC1U4vgqQQPoooe3Cj3YPiG9eQem7U6vB8iPP6pzaRVu6gkMwKyJ5NtkABYvsRXiNfiX5jTXLLyX3RurL",
  "key21": "wHGAry67NnCq7Qi5e2ZJJppFxNrvKWXKme54unjNEsNRUhytcE9Tth4186u9Uwp2r3r9xktqw9nQHhDdfDj48Gh",
  "key22": "2fgqeRNkmtBpzgNEf1GxwPp9XWqa3Xh1Z6ZJKriWGJQRXWXFdcb796LG9FSMo3HFkpdVbutH6WJudy9o2moZyTuL",
  "key23": "3ZQYdyfTx1V8gjA694DscacYoXU4nRgbCm5m8kdLRpWM7XDcpjXZdoLorxHUmnZ31RTEJAFVrusRFqthhc6LXhci",
  "key24": "hUvNR5UgtX1B7uq42sBE4ATreofiy2QA3HJj4Ah49FYjKtZKzdgNAHDYsXgLvv89Q1KmEHjXDgZqWuTdsymMXxX",
  "key25": "4wsKFjmsfHZZ7fgt7VAUbbecMtZz47xBnDuCRcwugEbhrCSEeg9z2zXxKFHqpFSxccmPJutgtpwEtL6EQWyQDs6h",
  "key26": "2u71JWqvhcBq6733SLgniJi9ZdQVq1DUgXhyXqHJ5kBzk76hDsVLQURXJCBiNUTN5fVk9BsayPRCYZW6pomTZDMW",
  "key27": "59TQUdUrG9WcLKQdM6k7McCjrHCt9WDXvfM9KSkB3E8nRYddmprpA33iTAreUXBPhnyvxePG2KsT7NJEhz3puY8t",
  "key28": "4XDLycc1CYsT7L7LX595nPLgz59ccw6sqCAdMDRyzM8WEpxUHq55amhwpuGGd6tq8vsWQZCUEda8WjWgbqEMHukJ",
  "key29": "5fkBcbaEfqtQebbFWadzsG41nAWSQZ21aQsTWRMthYVsaMHFwkTtaBYbhYp76hJwMLmwyVjzC2pVaH1jQEsPN5UP",
  "key30": "3mbHGrvZYPLSqPviy5pumF9aQWEbuqxaVdazrZC4naDK36gT435Pb2M7L5Ku61ms8eEakNqHNjpnBZwWdgcW1Bc6",
  "key31": "4cDbvi5uz9kLDhDrrfJV6SgfMr6E9oEDLmhCyJ5FQBoQABgTD83XgsNRJxDLs7Gz2HocCVwAd2ATEH8d4zCFJiNF",
  "key32": "LKJZiRjbttoZKgQx8yaMsJcidvzkSm78iEcdYRNDZTXyjjQqt63d8XfAEHKXqYFxdEi7A7BhCfGeeQLtHfN4Zyd",
  "key33": "5isbGySFKwmP8qTpEAbeUqjCrAry8gZY8ndMjEfjLycRb9x9n6nbepu2hKY7Vd9pj4P47YeZ8obhvaEpqZmvCRhQ",
  "key34": "qVe3fL3Sq9sXnaipXwoS8o5Kt8reYuCMPKqiSXiCfD9kUy8RQ5XQCZq8H9ugUmnfinajSmS7Yd5Hv33GqCBGZYY",
  "key35": "4kmpWMefqukfR7BS9RzF9T6UoRnRMehShRfkCWa5oQP5uy6Honyk1ynDLDS1M3yy42XBLDDFesydhA1HibdDvABH",
  "key36": "5JKXsbRdJASCQdMsTN3b8HRKrzLtdxHwCxZWX1AuuovyhyHDP6NFGj6gjQWsijsbwpNTC8iEbfxuJxKen2VCHGCS",
  "key37": "28pbF6evaVtx6EEr9Ec2ayBFfQXFXzoMyBnPyNtH3yqd2dumaRoukgZWqu1Bjn8BG829uK6AsLn2rQhG5srGeRVe",
  "key38": "4UuC7515RFSTCGyuZxUMkBjdPHeyeon6KuxUifpertFvzivNt7gS3tc3StQhXVZBcooSoF919ow9f5iTJ7hYgRwg",
  "key39": "2nMwejMEAkHvqPqneG3mjSSTpB8rRf6CzPvbXmMFjYaoXJ4FU5pYDevuYio8ct9Yc5LrHbjufBwmuyD5VrWs6gZk",
  "key40": "5fwjHXw94umvejbfwahDbHMqEYMawY9eWAPrBXKqNcYhc59HYBKenGagYXgmPrusH75VpZX8P4XPRpjapjHqmyds",
  "key41": "46W7KGEiZiCLrihu85U2yjFzUk6a4LLjnm3cZupsvDX2wwSkCeAgM4XuUEBS2G3hRMhTKSZMjCgFtmzAVG9rizQF",
  "key42": "4NNoVHK2ukktCcXU7Sor627sSPcnYHbMEY4PHMof7UDopEmqe1ZtZVWxG4fUAcBGoD5jUSt89qJ1fttB7cwckwVP",
  "key43": "eGPE8g8srk1d97opbtDhKng5yRpBQNe5NsHQK4hMixbRGh7HYKXnfLTF5yBJZfiPtuD37c4ohurSKt1qm2nibEC",
  "key44": "4KBXLPM8UuGtu6So9CuCBshjyJBbLpxvQJ82LssQ1qD4oXoVomVNgfWDajn3TAmvFHERU6ZHod4PKmZwFsxMyxmf",
  "key45": "3JpW2i9kLq96A3xb1D4EGchj6dHYdmsaPCcqheJyAUNixv28az66JJpbiSSWaL862R8gsCSZoyWCnQu4SjLbkKu1",
  "key46": "4yBQ4n2Aueu18FELpUsZanXMbQNNzLkyz6U4LWoPeDWC7X5mtnggCrfjvPcbGMnUjU8CUr73wn1czoFQuw2m6zk5",
  "key47": "4EdVzyP4g5rTFrrE6dEXHk3T3FLW7N6h79aRe9pCKFvTXYodJ8hSBXTKi3myhkUSdmiAWqGfbdoKAjmeaCrood4y",
  "key48": "3PwWtLYQbetRitwV3w8XzVq6cBGpok2ic6zwJNCjTCk4QWEpWLKKic8B3ohc8Gvb7AKKCdrpf8QWom3zewTBFvVV"
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
