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
    "3MwmLQY5RgZbDk2XbwWi4oPxBFgG5SjaBBmSfchHJuiTpihEnXurfry3zv12rK6GzhrNXsViJGw2QUfhSs6YkBbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNtJaNsiCWBScQtimQo3kEWFn2MdyCf1AcZ9R9mSsuL74cffC27nuQfaZw4mHKKAL3LZ5wZ2AxGt68Rp3uX8HhK",
  "key1": "3s3NJr7oLR98ZXh86zxa3wkkMTwrHf2kibcfh5QAookvCEZNzA6djevZrVUQP2fwjN8r2w4JvRKCFYx2G2JKjXyG",
  "key2": "5T2VYAZqtvT25o8aYvKyHgYPqwb5SvZ1cFb1brffXveQU5SAFkLK6RuEnxEvsZ3DuioKddjKEAzE5iGb9zk3ZCmp",
  "key3": "4SPHCc6mCU2P35pVRN6DRRRAbbWaLNJvQ1b46WMmwSDYjyRBV62Sv4jQBii7HukvFkh37cPMtPxF46Uaj1opS8Xy",
  "key4": "2RjikLN6kadcsJCxsfFNq11EWwWZvPUKiSpCahTnxXNjiTjHFzLksX43wf1EBDt8mG1R1FsL9BhFF1MotuUxxexQ",
  "key5": "4tRecaxBZdMu8eS9iYg4HUyTF1jUaCxr7oSKfLxkyuM5yMiddA3NhpUUo3EJFRt1zKw35QAr34rZ8fBw7VJDW28p",
  "key6": "5QEyGvBDuHd2vQ3ubE29Vrch7mY1tygyhER3hGdTKimyoYKUSgphk1U5Y8HvWeimqWXpQRLCGgMc3YmAL4JA9hFf",
  "key7": "3Cb8ihNL9xLph5kf3cMLfgvPv4Mz2LDuKzbziQSmMCGZwUdCT1Fd9puLyALAUEG5VVdqcJJhYVvANsWz7mbJrG8p",
  "key8": "56QXH7aVar3X9SaJpQiU2RJqcrrekV5XcvKw9z56Z7uGW88YF9DYbhuwT9YTtkPEML1hERRpgEyBm79rgfLep6z3",
  "key9": "3W865fAZ2LBkpkwZzCEhzHz3boNV6o9xyR5N3qBceEhVpZWx4BDNSV6tqhgJcqjZn95sgv1ieC7h1dEYDQvMB6sH",
  "key10": "45XYvWb4qNeHrBZQ2yuZwi5A67bu8MshspcgfHrXPLH7tBodj5g4JpcnxKqdHr8E9RxWEXJkrYyVpY8TvEf9sbK3",
  "key11": "3AB8g3eWkVW8A92d9KzJxy5xeeogL9VcSA8CzrVhr41t4wcsH676WDb5AEWyXb5rALhTWcow1RmJbsoJQtqTsinS",
  "key12": "541hgFo1rRKjBCrkEuWcc8Q7R5UzLGRcjW9mbCU71FSa1zwdGtn3ScNf8TpTRBQUmYMGdAZUFCQ6SVfPQfXJmobF",
  "key13": "5THeFFfFCeqy65JP2D9xFbiTUyBqPEeMQZw3QYse18V9SMbMeCnHk89r8Fpkg3CNCYGYWs7NYq4CuFfGQpDpLZob",
  "key14": "4gbbsz4gvKhDpR8kAcDnKJRkXnpW2RAmKYsjD9YomqtJXmx46bJ6cyHyKw3Rwpnqmsn1R4SVnn3ZHwJby2hFwZwn",
  "key15": "2Rw8BbkQZ2aHKnX7wwjp5uo7P61f6v5eht4pN8AKAd3S291h8Xjppk42xQPSVv3DyDqh1mtXEsDskVoNW2Bk3DJf",
  "key16": "46pNa6hLWUntXZh3V9Z8aTWGJpEx3QkV9bDwP9V9MYJ2a3ZhiJuwqdJpFRqD7vQkM3DAxPQvRJXSJCYrFtiSXQf8",
  "key17": "NUCmed7z85nSvaBnNV3tAQcyrWSDfoYFpv7wpHYaqPPo2LoCqyua77AgDSCYBhtV1M1Axq2MW4XW9ZEGg6eW8ns",
  "key18": "4GXpsKoJcTo7GGUkFCGowuSTfi7GndpMPGpKSz2Bgjfnik5kGHyTjxR61m4pX3s4WVcyS9mN7GzoXot8KtLMreYu",
  "key19": "4u1a9sgvK5c2UpebFZ65s7qWVTjVbwwuNbrHJHHt5EuYrWxpREPfNafXJHwKHLRy3XNaySCRgepBGW6uYM2M38Sp",
  "key20": "2jifD9mVdbby9rqPHpGwr4WrdDKkadT8oH7wqzwuaQQqmCeVXNEar8sDqX6yMJuwGQPhAjTTJzzfRSt2XyvxN1Nm",
  "key21": "W1T3m3uexPJAACLzJYmAUmbd49jX61FTXBAGvBE4hmh2tTam7Eu1ercENJuQTAfYmWqnxHAeXvnd1c6xP1D3hCM",
  "key22": "4CKZ8cfhNvwjUw8a5cYk9c4KiwT4tzaKVX3gaXSSHaYjw8f3omq2FW3cY9Rae9S9sPWKpsEAhoowL5FmSBJe6xsA",
  "key23": "Lq9cgN3nzofn7vNGtV77p4LJinDgAioorxtjaGcjcQzJfwf7DXdjpfK2V5D9wjQ1MLrX4PoowMKV1t1MhQk94Df",
  "key24": "21BuZkdKQmPcoKr3U9hGUj2gFWR7xAttRPrPEBAkqw3LS8Wav8Y8EDqmciCMQUrFMUmnZdF3Ev1vnzPfF8DJZgtQ",
  "key25": "rUbg5YkFpVFmmoHX58X4bjiswsZKuqV6Qaej9Z87diqTywtYyTdCKRztzUMNZMzMh1KfePBEVzf27aEr35svSGU",
  "key26": "3jeYnHickeQfCLfYyuXCyYQkjGgCcemZefFrRhQkXvTEpLduqZXLgg3xpgHfbgcQk8UCLPyaqHDfEkV1dZhNcPLe",
  "key27": "BWSSwuHQHthsvuz1tXzxfwPx3XpX8ph8VdzWpMKFsK8Xum5UBg4ZDExZQL1dttTTVvhDcymfq5UUk9fU8kzH9ai",
  "key28": "4oDe8gP62n72XBwfkvuJ9FRjrFsrjmbNouiqSbD4tnKqDs826moGQ6K1PBHkRpqUNdavg4sspwy98Te7mSVLyeR4",
  "key29": "27DxmAxnGcnKeb5nKdNyyHQCQhq4Y5jqkSYN2SZ9r9H8jGFNBqZLBPJKMmWTGNDPDc3RkxbCW7nZG1R2b88zLzpq",
  "key30": "2Jea8Sz4Sd2BZCgAPu9X241w4nySqaqq8Umr6jR19ge7sqHeurxsyhmtPsoTekPr9fLSLpVXhNEzaLReC6qaqacG",
  "key31": "5aPyhm9yJtp9iswybBBvFSpFWGjMwUva5ovzytEpeNVdhLv4tg7hwdmVX7b5xr33MUq97syjfypLMAvif63WMLpC",
  "key32": "4hn1UFJvf2Lgg44zVeCBUTmqSDLLuHYwCDqTZD6zNKme3c4ik6Hr2KtX8DLPc4YRvb4bGwXXMYwj1qbkCDBLpeg1",
  "key33": "5DPmfLSNnCKueAJr3tY2L9yFZiuNAFBENjiux1RnFQuSj59jj4MFgQjHJwozmoghaVd3myA9WHLH64V1PQVR3z17",
  "key34": "5DWmHVAqgN18rJ6C6CMfJsfirhNDNmQXuzT8mdvQyLmrByxrgdN1WxFPQSMKDh3eTEb1EvVTa6VuZnEFbNMG6nX3",
  "key35": "4DthSHa2GCRSo2TN5WcPGieqrMcVgdvigPT5DA3wjvJdmNgwm2Ze1DagfS8mCbDTkqYD3NfaubF4Eh2BJQfRP7TH",
  "key36": "5RR5moLC7VYiEpZvhmUCFbb6EYjunJ1VCb76zqEq5qW5nWvmZrwyxhhJ11jrUNUYZPEjiV4vmnA8tW416HsScHrp",
  "key37": "3mqYJSEyCtxg4WiUNw1teuLnh8tWWwNx4FohY69V7gfGducBigy4Xvr5BuQ5KNxaFtiHuwehBcHSo2j26xW54Wd5",
  "key38": "3a6aBtxiJ71zrfsbKaGNBoMg9Z8pgiVXqmw7QEiQsMKLjDhdw8PTmWXGyRwnPtoSo9w4WvL1fWYcSUBVWaxwbnrv",
  "key39": "5r5B3PzfYquz6AdKT1NgbsU8ZK3DVXVbrUuAuhDCph2u1ptyzbi87aN6mfxK9Sfu5Wu4qA8bGHwAJuB6D9L86RHZ",
  "key40": "3Z9CZzkjDJENbGg83C8RU5HdKQpEdPBBdiTtvvykaVGWKZE9c7kNAXRhryA9dRL5yMmjEg8t8CrgLtn9kZ5Vh7zW",
  "key41": "4bxyH2B8fx7oS4wSz1C4GSb4kkdUgy59xWFZXuSfg8BACnjjCQVv6BgoP1ZFhRmmryrfWNLMvn6AC337RBMcCMmi",
  "key42": "21JEJrLonxvLpeX6FHaGUuALSjvPzw4u2VEQjjkEHx51uoHnPyu57VhzsUq1nhzXoeQpifAwyoqqqBtoa3DhW9Bz",
  "key43": "34baz6iRpNh23eTcBathiBhdbdkMT1b6qkaGibCuxhKe5atT7kPywyEZMC86FfZswrZq4ZtrPg92xmuKqwSbEt8f",
  "key44": "2NMAAkPbDwinqwG1RX22nj7xaQpAJAvH7y7Px9jVPFHNbKZedePaTrX1ttRz5Af9UbVXugZcSbvdU5L8jhgxStz3",
  "key45": "qoioPtBeTbRBUXFjKLUqwKQgyjFKvQ7Nkvx2HEieXrgHfRZV5CZH3vPAkVE2xAkwNfYnQcHgi1eqgqWGZEoUfEk",
  "key46": "2Vjm349zWvnenH9jrBUwJ5GoP7vm24RAWnTDQrtXfW5qj92EuN9onJbdLaQB64CGc4nePufn2WnM9s4jpDGxrBLY",
  "key47": "4uNq6WHR7VLu6wdsHMsfpqpYvSqnd7sQ8KrrVavoxP6J2xPrc1txruzrhu1ZVZxAohBo7w3i9KMNJRykhSCzLrzd",
  "key48": "29oq5v9Rruz3i43mXDEu3w1RA3rvRxDMnJwJ8KT2XmZNS4jQ1c4VUd2q1RbCgkFQnJJfzf9ZiYWxTUXvp1MTSALx",
  "key49": "u2Svf6TNgDBtVBhkfNogRvHDH9EbmbrUkdRnEHoZord4ueJNkGKtWJx34Hbbg9R2vKttPqUn5FTURS3NXzDrtmn"
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
