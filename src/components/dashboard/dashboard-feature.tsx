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
    "4m1p9MY4QqvxvdvSx3mGD1qntNxFQVH6v9VDTNDoF8T6Warte179txtSGuZwPUK9m2fpfuZBXPatb4iQih5H34VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wxb9sQvu2giSL9keM164CL6Bbww95Fc4ry8gKrssEAJjYzK1n2WLXj25R246FWmKuYk8a1uzVJeH1bzwyszEXX",
  "key1": "n8ey6f2SH9EjRuUB7qUYDkyi7VVE6SfqovQz6m1KGtSVPigNUKMtDgBZFq1DY2LbJXfpYu4uh2VgWp4u81SQVhV",
  "key2": "2RAjCaSeS2pyWbbg41gGQs6kJeQDXmW9vH3fnmci7hwuLykV3ybj9w9cKS4xYCCigUFyx4YsVBYbioee5hxtBtXH",
  "key3": "5MEVNY1xnfAvNpM6ar54RvyLbzpBPQis1DVUBfuuk7WQQdujDQErRD8mQLE3vvhzHAsyW15ctyvdXomjVnxUFGrh",
  "key4": "3FvrgeF5822JU6xz5xT44iTGeywD2RoDsDsFUygxJJmaXJJ4ekKnX985kKQ9i1wwzASg1Zy7X448yaM4NH6pWJJT",
  "key5": "3RwTTtJFbC7e183oFqmDuk1n57ciPrwZQ1goyUbo3UGXBrRqULTwpnwrTib4jScDfvy7W3Wxv9xqWmpcoWFNtS8n",
  "key6": "3VfgbW23oiFvzF97nTVoqx9CRi1mhSwCVs72U11wVvdM6RPntErKUT5NJr4xPFPxGFgSxBpvyZHBUEhmaLrj6t37",
  "key7": "27UgxhUp6jBMPpXfpQAQFojbFwjcDxzhrbnfBUXzXXGqJwimPkXEQhVv2dMgS9fL8q2yqLJ7HRdFAvBg2CbwLytg",
  "key8": "MyW2vErEM4FdcyzcZKMz4zyxUdgqPNFg5UFTmQmYjveWZ53dmH8WGJb9k3GnMEKHPDoD5KtiCnUeieQXcbEQNZV",
  "key9": "4hWHyjUoSjsB2ptW1Bry6yHnHwJqAcfpAtzUe1GYQsVnDm4iAbZf1KE3KKWEjHeyoiq3D4YCKMGZw36oEVVx2if2",
  "key10": "2x4Tw7rHsRZvRH2FMUUSt67cWui3mzq98LNfnRMQGoVzFgZGj7SYfKXZLGoz1MTZHQoVGADLpj4eRGJk67ik34Bv",
  "key11": "254rrowNZmCfxPrkSotBt94opKfDuNGQVxpkH5yYw7zxhCZ2fiPp3DACiSsbhy3W4UFkdv64R78rqdd61sbHWqq6",
  "key12": "4DxaURJNgSD1T6W2gYe4WRnamPaydRdtKzNJre5xYJo9AsK5tVG6xw31i6dRQGWWjZ7gBdbytXBUninWf5fpEGTm",
  "key13": "HKNuiEjSXREt8cWEcs5NtHtzaKRBhPr4pFKXUZVSEZNtrrQVdBqt9Ww8GaEKm1utbbJYexyqCHohtcnHHQrzKKc",
  "key14": "3ZsXukDvqAVmjbmNr3Y5nE8wtLQgpvPQ44EsdQNWF5LqiGaRYWYVb1JRWw8dRBK33DrMKKcLq1BTWz3p6LaE8doS",
  "key15": "isnQZJuU2Lfu1XEuckAVW5TjRtdHq6D1NvkfDqSEb4auBy2z8HEmpeekmQjZdA2nzTpEboA9y7qdq64h93V31Am",
  "key16": "4nqXaWG24cTaegqVyDHcSrfFq1VGTaX2vzPtvBjbTD4Q2M6mAS4ags9QXHHQMJSLjmRwa6Ztf9TnwJ8QUVCAAv7w",
  "key17": "48Eq73NXRy5guK2s64JKnmzU9MwzzqUJg8CEosy4q7g1qhkqHiyDFAi7A6e4RxdoSzW63cmXkbmemchhw7Z6Bjz5",
  "key18": "UfWd8fEteJ9eP5zY3mbqcsJcEJFjE389e1qQ3zR4ZcmrYYWMyzh5Ry9X3KtNuvyBQeEBmnLSt9HwFySNwJNXGEu",
  "key19": "ojUBaumzoeduyXQKHE8ZMEvvqtSHzE1rt3SxbdeTJ1i5yb7nUrE6RtY8YRMH6HWDpVKG2JiZWQbep45EMxhZtXQ",
  "key20": "5Q4zKMeCzTjqdKLebx2vhM7HZsBZc77egL3yd9f1rfv8wnxUwJvQhMmqjsj7yQtCsieNDLWoU4SuQG3m6smf7KDT",
  "key21": "92XwTQKzT6Us5sY68L6uHXVj17u2HFaqx3v5NCvc9mGpkZaySWR47DV6NPwxAtLXe1ofFbs9hW2AoqrjPJZARXa",
  "key22": "33WhAGrkRtKhFsMgoNerZTZ3JbvWP2BU36Wq9cBeS4YCBeKnHmkZoAzzU3okg8uQD6P4HxAyD21gt3MJTCM2TxAf",
  "key23": "5qAv7ozTzELW6PH6XLVECatCBwUg5fh2VFPe3Wx55pC48k4GSkKr32APGC8uBixr8HX1AAL8DoYuiGsjJWXUtQKy",
  "key24": "dgscZJjv4oeG6XCbfA96ytfh7Np6uQnkN4reUw8SegATUJAdaxvgpTUnBBHxzTsKcjAbEoze85KcXnGc1uT69Sc",
  "key25": "wtFotkzgrCcYGEWCEEoCd3NeNEjc5YG4cX9TFHvhM4dvzESmpJmstENXyDDriRXMQ9TtudkGCUYhrfDnLYTFLcJ",
  "key26": "3vDk8xMSFcQeAwFBYEv38YwGEwieWJFaLHqcWyDn8UxGtmgX59hazQq9yBngoj4MTxWFV4ZDGYGd3zrcWqgKgAnx",
  "key27": "5vKXvLfEYKAkvRiE2afHCFDmLawvQNunRxAnAjTpv54NTAoCEtNUUBeNERnkjVifWH7xFUaM3hTf2bGhkQGMtFYG",
  "key28": "4svJJLWPk6gJT44y41eNGULYZcLav7UAi6oj7QfstBQoCvfiNyyj45eQHie85RLnMG6hmjWdzrkibp13TFgp1fMW",
  "key29": "T1BvNPhHFF1rxcn8dMTmJ23MnFRZ53eXQrzAhwZiA7GWjnPKHsHpCDEquL2uaUaKAjA3PL9wduYY6QcWRpyepqC",
  "key30": "4D4VuRNK9wEGxR5n6zshGFfUFTrBH7qNGzW6ezMWRUpShyD9LEEZdfeyiGDs4Yu7X4r54bBbdLvs8944Xg2C4B6x",
  "key31": "3YLg5KVUeiw3UoumaL6Bui715GeQWJyRg3429S3KenDGYxkTPEGBTgyDJS7U5GYzzXGrLVud1MFFdyXLnfjYvRdf",
  "key32": "NF484h2ohYhzq3ZYcbPZDPgdRJvVtdC3seocbxaABCJpinPKQK352Ljb7T9dPPpXQ4enAvXrRFSn6V7z5XYcumf",
  "key33": "4G4RjRv9XgVEpktstM6mDPBEobbjgBcnjSj2Xy1TUw1pBqiJ2uW1BM9Vn6gWcRcdvTzoF6B4UWCyyXw6wsxJWaS9",
  "key34": "354kNNBVwQQ696dr2krtZJvkXntB27Z9uTcpxg2TKCDHFzDfYC5LhypDEiDhmfGRbwraoLYqZH2Ubb62J8J5LVN1",
  "key35": "3Vh5aVb1HV4Xf8SGeyGTBX8cX1GaVRcnTPwu8vBciPdVzHSh2GR36FgMamwemwTBtXjEfgPJCRM7R41426hwWEyS",
  "key36": "36HSvRMMj5c8b3tf4BnxL6bt6BioD6zhRWviEFRUPhX6PhGARt79KVP4UtSkjzhgU8NnTaQA1s1Mc7wMFev85C2L",
  "key37": "3VFhUZLm2aEaV9vBAwUurY1fTxvMbEZxmhnpxXMqwGo6fYjkr4ZPNjZaoJAfJgfBTaSG4b4eDbJtt6U7AZJEGMu9",
  "key38": "2WJNVmZYXKMbVF6wsvMXE9ektTgE1pGRuveEpwgFscMEVxkheoB8yLw4DbQKakHRrWiSNGsXedd9nrwcQugsYY7g"
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
