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
    "5rwbK43uFqeoZbJcgkE9P3GzmRjA2Df8ZyQkdiPNkkfcZsyN2okXcNsazpUam192HY9F2ZX98JtUuxYUw3s5g5Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377SQCAJrNt1qPr3c77wfSGTuBhh7P3k9ApvxwaSgwvd74f5C96qdQ38pn3trNSrXDNwY1oP4gwq124Uyuj7wWAS",
  "key1": "3jkUKMXDTAHDX6BBmhpMKt6XSj8yGestkLw1yAwfxcHARihRPWrrRZvjB251fTg4QdCjeU7fBNj6arQjVBaVSn9X",
  "key2": "4TQ6v1H98LXsH3Gm9rQeKwVYrzmXjFjAvMvnGUvBfjrQWG9cQTikrkE7oRRPqzqrR5R1XbrEkaC3g48vp9VWSndD",
  "key3": "3fPatYyaGowwW2JVfSfrgTQbiJcWVsRLNCpoAsEmUKrZMMxLrWKBa78oDNRVEHgqgD3JWx22XixqYrK6YPckhRMt",
  "key4": "4E5WHTVSpuo2dwsfnEGGTYx71deAYokxJNKXnkNb3vA1waqWmBRshMko8WkrVw2zW2n8JpVndTPTbGGCQuXH4fCc",
  "key5": "5G4U2j88ZKHJjiwoUnXRjAWmozfXNr5ZET9WcFZa4NM1KZTNGSg4Uj4e9L94TyNyWN2KQwX8D4Qy1Mq4rNDsTT4P",
  "key6": "2dbJ39nmeFLetX1swpQYJtYKQuu9VEbL5nzXbwmCa16B54BDuvF827CCM9f2vRTJz5poAAE1sY56hm8WtcbZJ6cN",
  "key7": "5E7AuGwZHTn9Ad3RyMPH8KgoKr9xDHE6U2jhn6PcqPCzPcT6oVPqY4m5gUuR8YH35zwq4seabWjKD6cJ7BNi1HL5",
  "key8": "25nE8wULVvPUDNQH6o6hoxaVN6BSQ1JCa8mfo53nJUWtAA1ZgQyF5DTdWL29zt4RbQZhwEYbLfgHkYqHPp49kdEv",
  "key9": "2freF9cAbQ1YrWMjiPKYDvEW4Qe25bB7cTtKVTDjeqaxh7rycXTewfdwriJ9vC7oy9q9twqWtkEKPW5zAd6xxRjQ",
  "key10": "VMCkspaU2wX7CTQpawhA61t5FN4LdxZmVywMCuhrLbxhJtK3p1oyxx9Mq1u4Km19hg3asAzSAEjBMcU2R7x7Ub4",
  "key11": "37hrw4NdAvfhH5rNGCF2amjiuv1n3RUS9yqscvQprPYjkJJGMsvBGPvUy7eY5awRUjP5gSffWrmPV686YvYuULht",
  "key12": "J8PYh7FTHCgqxxp9eeXz5va4yDj7LhSonKF5FTw2pmAn55pUzQLrbqE41zh1is7rZZYYdGHDCb8tyU5W8WYMbmK",
  "key13": "45vPJ2XgGyZoTs3pv2bvqYJcos2XitYYuXtQfTtbxBs7psAif1SKZ55Ug1EWpzo1ECE8XUdTdA4KNaF8aTb56Dby",
  "key14": "cX8QW6ra18vdACcUcLGXKEupfsLUofMkjxuEAY74mfdRC7ped164TDtGQbHn81tNaBr2PoL4ZekT1VnyvzNnnaT",
  "key15": "4A6H7Z1UiyfTQtiv2grhwrpUWWBUJXR6h8HzUYJ5r9duXDBo1Qn9qXtf4wUUjfrYapVg3cN3Fw9aNmqUUgZL7sd1",
  "key16": "2xhKyZnAMtz4bhW42nYwY5nQczrJRETKo5Bx78oGon6kR2bWSSPSYVMydje6gquFu5vqUDZqskw15Lq8N4NZXB4M",
  "key17": "3Pf8FR8WEGr32xWZPgLgbQGZR2FJEZ4bNBHRixwETNmz1W1gSfMkEnTxEfVtGjnNwiAAztABYu8q9oAcL7TeYCnK",
  "key18": "2JbSmeUUnUs6ZyTR2DT2Go5UeSwHXXZs2eMZyDZUrXqu3UmEJ2ogTjtTquoZm15LNrTp2bnJxWRAFuVivLgmmYwp",
  "key19": "2rxQXSWa8tEYA8M26cLeJZwBuxvmhnxgjcsqmnJjD81zfEbpCFnMoZ21BcPALnwFHbmEinE8z1Mr4JFtAYWJ1VPu",
  "key20": "2ER8KEypXZRQE8MHJhqpvw9GRND6rtKv3dmDH1YR5RYes3u4ou7TnzmPF1bQNQKPEU6QcMrrih4rqCb7D1iEzWf",
  "key21": "4PyoXwuf2Pz4xjkip9cZPZMrUgjYyitMZFYqCcubWVpLCKWA3bDxPbHGa6LEs4NXGCXKJuxgT465Ty4FguFUJjy7",
  "key22": "2HRFWcs3KeNjvc1J9k3sX5E68ixSXgxMskFAvjz8duCBgbK6Ro5s2CQq5X8phVMz1ZZFJkjNsMy2qxEoAvJh4yN3",
  "key23": "4ShhK9EzkfdxJpHMDCLUg9kNq9Df7umhtNDjaM9NGmhpbZbxbhJySWtQcL2oWB3kkTvuKaE9Ec899UUD7m6jkCug",
  "key24": "59w8cqYCJq2FFxEnjMLrqMGoSKai7eR7mxJexizyadz2zQAuZxELJn9CTYBwthLT4EEJJDfuPwQbzqeViVLieaJW",
  "key25": "3ZxqaUB66a4p1g8GUudMHiWQoBTp3hoNUWcT5HAjsRzq2PT5D35wjPe2tSvq7DNzTvr7Y1XCudwZxZ3V95iF6WkN",
  "key26": "4mZTnioMzzzcKWCq1tucN47TmvX2jnSziWrHx4N3w34aN3XjpQvDNLF5xpDjhxUekayCqKGk7MLPfGmAKwUgAmx",
  "key27": "Ed1SLXMVprNUajDEjWP8W6e5Umy5BNaXDqGxhqteQuH6Z8yk9XyGbZrR6FHGZhnKEPY6utNTc2nxr5H7QDeCVGB",
  "key28": "3o2iLDY5xVCqtApdiu7NxjYvJhboHZdfx1MFi62bnPPjRk7mMDGv14DFtjrGyTkizbktiC6hqzkeBsQAyKnQ2YUW",
  "key29": "2w5Z9gnqyYMAHNbTTib6dKUHNB4wCQmHmFR7y5PUnb1mKfpWPd8ZHWRz8vLH6giuCUDDDcNBXudfs4Yo7sYDfqLK",
  "key30": "4ir2oPZR65RidtRtWDkScqVeMXHnyEkQVkMFeNH3J9iQ6m6SExeuAJfYgt3UDQpGiPvcaTq6hXo9vcHCAa3iRsdp",
  "key31": "aPXZYEify65quC1qUgb9b6i3Mx9NdVayCMR5nTRym635pPbe8mRe65PJP5sqv5dkf58Zhv25yQB4gupHGqtmdSo",
  "key32": "2yZenBZg1KAt6AByLBcMcZDjXGWXha8WNh5jWqcLpNVB9ciGF6NQRNYbekQLckUfqeoMbYXjMovTb1CTQewaPFNt",
  "key33": "2hNaPU6sePgEQHNhHUCE6p8dtJKKQhL1UASvt9oT3weJH5iS9jkUTZvcUTErWVtfpfswY6YrX5YnmYS4HShrPFrW",
  "key34": "TTq25sLb7CSxUsfFvqwkzJjMo1sxDt5LG78PkYChVVphCg2d3D6A9tCVK8JJaYvQ5W5cn6n9Cm4nmzakPouw1tv",
  "key35": "x1fo12J1Y4zuo5Ygf28gFjnGAiFRhuTse7HJtgzpxfqjEV9MEhzQcBMUvwkSumdLyYiMma8hEFnsfymrQEnYuhq",
  "key36": "34NjQv3ybvKcjcdtQRU1eKYmAd3CrKWtAVKTWFGvZsSBVmkqP3m4z8DR4Zt7SEgoPjYqzP43oz52SY1P8N2TLDRg",
  "key37": "4wwdHEbpUg3HdZXwZQXPMPQuLxDtBg1xEphVU1X49M7PZya8UyPd9eTrfGAWd2nJkw2ge25Nv8iQRVTA7Qg8B63Q",
  "key38": "64oeQTDksLMzPQnWPNxWACDZZD1po35pkb7VfCJU9jTCj4PT9Yu2ke2sCBw91Ywm4ca5MH4cUGGVACEZsxL9xthX",
  "key39": "3k9wA2FpmqXrx7SoimEc8LvmnH2aG1c1XA7nE8Gs2PDcESKkt7KQVjRptkaW585xyUNsP3eH1f2j3PypRzUxS49q",
  "key40": "4DdnKwbHpbJnhyUHwYYr8hicwkzyudPvgB3MQanAqTNDvyTVu7WydKvVg9ZyEZfcmkvh4zXJhFuebE8Jg8toNj4v",
  "key41": "4DGj2ib7htToeS5iNRVvMLcmy2oPVhuCSF8zzLRYZNp4iw75jM8mNYB9MraXttaND9uB1aZWLjmUQbZfRxaahpXB",
  "key42": "FNhMh6HDEm5HdMGcmmzvmAYiytFkT15AFiRKT1KMznD5Wb4AdWyx7uKiKVStABuEQ5DKTjAhBvgLd9ZdeUoX8xm",
  "key43": "6GQPzAkLTFxJ2X4zRmi6kD36CuWjD4tExqSsLPK5gEjQp8BYY69vuEtViAEPQBg1eGdsBPH5b6d1kofHJvZi37E",
  "key44": "4hsvQPpzt65b87ssnZjTM6m18sMQcQrtMLQg2DyAQnNH1u2nJ9uwUGCfEE9raH4RaCQenqmznyVy7nJjt7C3afzm",
  "key45": "5QFP1W2D7SRX5TwpXKA8iNcWMj1V1SdkBjGwvhCg2pjNkuTf2mDiUocSyX3hZ5hgkhVVTEu2WU1fyiomiHSr73Qy",
  "key46": "4WLdffxbWF4KQ7Kkm13YRNpPjtHQ7tq1ViNusK17ivm3CmLvMCQ3CMTSr2YYZiH3Ar893N3ipkLFsPrvR7GGEkoi"
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
