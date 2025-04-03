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
    "4FBAPgZCdb2CBSgsn2iai9mFpMjqS56m3mdPB3uTmsxQJw8wfa8SdXeQU2kHQ3E1mDtcwDSqWFUt1HTdhUHKZWDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cuCbd7ynEYD22iPMnfShvr7GMR2QkemebUVPZBc79LLntygTo9Uz11dS6mUGvsQHx5u44RDZ9pWukMGFfwsoGZf",
  "key1": "539QwC6wRrvNwJ5qc8EDJtA632V4eViJAjWSdxpDGdHsboFGWcd5hfHt2Y2jXsbc6LvvTLzbtRngaAd1esCoADEP",
  "key2": "3w2ajXPr3RoQgc3Nxh1YuqsKE8HUATVB4TawA3sVffXAN5yUgg9Zd5LFoVqvx56nU9F7ohmjidZ59N9ZUkH8QaXv",
  "key3": "2mcANVbQNzmv4oYFAf7GQ61EUJbCX47NchYW7GCQcLgdnXCGSn2rA4xFDgBsVbMgdniyt1ktzwLLupfRttsvTnkK",
  "key4": "2TL5J2VXkqHrpmxHhj8TmMQH6QDpbYkKr3zMG7NEyPDjyCXLNR9mZXQqSWdCKEnH3wS5jbCSxuF8rXgCeFJ48xHk",
  "key5": "ERqUHkgacmD2Zy7XBJZerXcZp5ewrqBoXeW6u7tqeQxziBBgLKSVL8eyHcdDhrFzhHj7HRNSPrYMzNFjx9b3eY6",
  "key6": "4FsX9ty4EepyVwR1TCsFRQvJ6WDwRaBoqQqPGvqA9q4qxfaieoGNDqo4xyAABvhpT8DpnRz4AUjjtsJeCjUdxySF",
  "key7": "fiirW98NvCxQ3hW6s1SRgNbzy1GNjeq1WTHqnmXBcq15RDKR3K4mPH4yxjsYh74stXSjH362LJoQ5EbjptUj6e3",
  "key8": "2VJfNJFchkwDUZS3W39121xC2w1pMg4tUmdqwzJviieZxAzGH1ctX9PqxL1rqQFZ3mmmtqaxFXAhes6rKUVp983a",
  "key9": "57FLoGnzsUkPqWZTxBCqrC6uiZEG9a7qTprGkxy5gvjYfw3Npa2ZKLb2kc1132FPmVr53gowKVLxRqF545fqqqNy",
  "key10": "nzaxbksefFRDWbryEy7HfF1LhAv8WVpXqBX8cBt77sUE9ScbUY9SukFzUbuf6LRv4gGxXdoUMccE1Mk6Jg7ikVa",
  "key11": "nUErZEZrNUraq1qMCRxofhNqW25knA6fNhHFWgVjg1FBSUcFbajPRGmztD82VyCmnWB2fZgmo1bzPbkKGp8RJ7P",
  "key12": "ffiJpRGdJEhJ2qfwhkzAeC5Ui4jz55cF7EPpgcsACN2qwdYsPxhAGhNAViLXLKiciauFqa9PX8zTkTUJcapKhc7",
  "key13": "3quiYW12Vc1HDzRF93jRVxd7i9LZ8hXUxwTiqs8FEZcorVrnV3G49EcuvFagYEcweyb6VWqihPfhnyfYph6jsNHu",
  "key14": "TGEQtFzjWNNkpRfuFqZPRBKPbZd62QtgSN8GSpMo5ECbBgAkPhqhTf2NypYUmHPadBe1XzZKRgAYyk7m2MuLHMu",
  "key15": "67pSSM3ik7psSFyhrbhrusLqSFegzEmN6ES71J5jRDjwNHPN9EcMgf5yTtun49ZDquViSMtBrYsr9mVALDYeGYL3",
  "key16": "66xqFJDDMfAXnbjrvGa5mWQV191ssRzYTCUS9ApXMEU3kTCBU33gjdREkok49Unsm3siypbqLzRtJoBxHiXxymja",
  "key17": "53DTjM15vvDnHYJMVacCVF5r4s7V5XNodvNowcPPEZ4tyTP6vto7kbeCJAXaaGqS75w9tkh4iANuWJaSHpzqvQxW",
  "key18": "5UwMBXV5jrLts6QYFFmnRodc5BR4wKnQ6amvCbQMwxGwfYEYaLCMQPB1t4Ef1NftrrYMCu8mQ38DDaQfwGQkHUPX",
  "key19": "5cRpAWNvf1d9owc2zcrsyJgvdGJHzFF9fg6YdW948wFHkmeW8MAV2MYzXQdMpW8VS3E2y8Urfs7M5k6r65dzrrsS",
  "key20": "59RjWUYu15qn6ZZjJKYvrom4LwZr1Ko8yAU4pACJESAKWM1FL5hhv8GawdSW3fXy3XCiB2jwi1jykJr5UP1B8pnL",
  "key21": "5dDGjZhbkadbhn5QSKYRCGDhQyk6A8dA3VNQrgJSXrksQ4ANhzKN4GLictir7EB2yChkd3JWgjFQsHpyDLznCtxB",
  "key22": "3vZ8ktoEvXjriZw9EFJaKnbZJdFwtbTxP218WqNN7Unk7f1rUKeHVmdjcLE3VFkhbmYsNKqnu3ssAgCBfWKyrKp3",
  "key23": "7iMGBotjL4JuTosAZs5kdjWY1dWZPp1HmVrcSRrskueZgskvHc57hwdNNPiX5SgoqftmqMBdxCNU78N98h9LyLF",
  "key24": "58ePiZrmbWMH5reYrw1znsbxUdKAhgc7i1DwVQMcD9TUEk1eiEvMC3VGhekYnWuXK5FWnKBqfHw33qyopWDkvpwi",
  "key25": "2TGUPGBvagH3tSzB9qLDucNyExUce5woDQDfqY8Z8BA3nNx3guC5kVnJ1qa6Mrt7AENcuN2A53FSTshTWirHUM2B",
  "key26": "2wbiNdCFCQczF7fhXx6V8CAA8B8yKXUoximRwbxT9Nw3ibXB4z9w2usHYXnt2v2zTY9Kwfnam2P6YRfcMQs4j6ad",
  "key27": "kygv95jE3S1U5sXNbF7b7HR6dUg1P2eXUY2EwwHxheisgor9JrEr1fEWWbzjVyPjL6h8YFD89xgtjLiBKhC2S6e",
  "key28": "42xTNhZkzdZWxdvK7MTgoupCoAHn6CXBhMzRuUc6m6gdCZoLJo5GkgKkoaMfvTpUsEQUe92SibfzTeJBTrVoP1LV",
  "key29": "23ZRyLju3qLm9QGo13Y1uzTq4E2SKXQFAJswdzNV1nNyufjRc37STo2z5KXhYy7pCKPereMLWKvqMTTgceKTAsQt",
  "key30": "2ychnswLfgFZSnNGVmhwmpxqtwaysTn9vTztx1MsoKcaUQGxG4ztKuBGnAnMrm9aVtvv4h6rf7eas9VHQTP9VWWS",
  "key31": "npTGmnamVvytnGHZmUwMPCY3YmPCbvnkFZAL2czdvxpYUsgTxkkupkhxYHdZg8tvUMBbCJ5SqWgYRLPuFucmyJn",
  "key32": "3F8xrZ56hmQT57p64skLMRjM3o5wjoQ2DTSwCkTg7vf2fpd29bZTLtwYA7xqDtcjDavoGoog8q6hyiH7fhqYVJSL",
  "key33": "3axYyRQTdtVdhMbHUL7MVR9rnLEiR1KzeYQUtFPVAVbqKocbhUb9S4d7vz3kt8uPL9kNGcKD7HVvTMLWXGhLh5JE",
  "key34": "3uy2LaneffDV8Thi6dbvXXZqyjBL2XtUGgoFEm5U34qxw8Uv6VLmgBayW9qamGN2XM4aJHCDFfipasce8sugALQr",
  "key35": "24ZaQhY3Pv3FwGnyzDpcuycvvydn881cnfvmyUg5DDRj5JNerUaLDK2mm75HZpisXbVTU3zKrHk1qMCD3Q2ckRCf",
  "key36": "5Wx2cwhKK5FDkMix2RaXCcVGBPz9nLdwNq1V7iQyXw8FA4mn8vsaz5YMAdzKNjywKHMfLRB9sqbd85Kc8vCi2eGX",
  "key37": "3xZTZVyrDMF6QCdRZhwNSDYsrsoprqPBqGL5ck5z8L9FAZzsFK1VAdpHf58KNvnNPsenGqFPRZ4rYZUFDc44b3iQ",
  "key38": "3a2KezoMDDbk8YMfQhgJX5ba7ohmmydGzU4usjRP9H9S6e3rsvF2y84gTQh8FTNcby3jRMd6cmcSs68J4JPpULv",
  "key39": "2xPcmw1oYLd9zcG9rQPxVh5eoJcR7LDLuA18JvegN8UBjMEPghcEE1wxbtmF6kwXxd7YaBCYVuMca4oKeRMvbNm1",
  "key40": "5V6F4kpvkMgyuhn3Gbgsu5F5eFkFXBCEwK4yr94dpP5o6Bsfc6YXd9zQCe3SH4getJZPyzbvcHHvkHEZ2ykiJ1CT",
  "key41": "58vYppwyjfrobKwc65mLsXaN1pYVvGotEcUhxGxifuQxDpxxCDK3H7YTSKwXobdUixXmJAMMS65G9HoezMyyVzg6"
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
