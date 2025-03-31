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
    "3ctCPCt6W5bjyk9CFAivj2JotXevWesKbRNrWqyPDC1nxZfUqA1Uqka1NfXEnPiZf2oFzu3RJ6EeMdhQSBBNUkhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tJT9x263WksspSjhoPbT6UrvAcuwXGNdah8ictDdmreA6E9CTnSREupHjAso8CByEp9MRLW2mQJuKNSrWC2uZXh",
  "key1": "cGTfYv7Yxu8Ky1gWeSLVRz4p5HJMtF5q9tmugJktxRbJJhCEfcPBqcC6w8z7Qz4JTdYotkHJFMzL6bFmLQZadgj",
  "key2": "4NU6TLNF6G7xfgPPic5CwWbTAe7Hg7F8yTz2nk1ouSiYGDRTTR858W3R9hjddJQdCTzYEhuM4onot4h5TsxBJEuy",
  "key3": "5dtYhn1jqX1QyjkU5ybkjtegKXgffHkeq7vgGBoc8obrWZb4imgeiDbtcjnnXCUMeS2xdK7Qq3WvdYdgVhpyMRMP",
  "key4": "Qy5oDS85PHP2NRYs638nUgZvcQjACMegVgP7XRr4nVEqL2Gw4dG35y2yFP3N4GPt5vJdegq4teL4eHMVhUXYZEW",
  "key5": "5cQ8sKeVrVHgut89GgCK5rjZwbpbm6TLfgmiActLgHKU2TABsKn7cZ7BTrPQEn2UPF6WCkBD1m26cALvUrkwNHGd",
  "key6": "2m48h9z2u7jyzPj5AvMvJmTcnfRtP9E2ALpsvRJD2aNmL7LW3ntX6codsupoQxvvHiNZBv53Tt5rTHd1Vr3PJ3hx",
  "key7": "3w86mPuBG4dckjiNQPrhajNwkAPS1Fqe4M5pS7eT8DwDZLmhuP3e1JfzeNMvUQxg9idv7UkaNpbQnyw5dp4ZsJkN",
  "key8": "2VLquSsaNQwGyPogxHR6UDWLgoaX37Fx3rGzpGyLJhNc6RAWyUPXaaXHFnppUJeL13h4TFSeb2JMRsEyMG63Uajv",
  "key9": "55sYFqssjUs6ShscUe7yvvmcw5jrG4xDW1qadcegWF5ysE1bxxosty3XQBt2CZduUojiPfTJnLvTNr3T5XeTpADS",
  "key10": "3oK2hk2UFKSoHw6NDTd18h1rN5TrQc9UY73dFcAZtCyR68cm2S3qbxoKaqf3mb6sQrcicYKftLHzsSDw53BDEUUu",
  "key11": "YH5MAfrVvcZgyx8nJLe91zG6iipxMxM8JD9bPJZo8mRw3ShRJhkjdRRie5eTBdtmxShS3N81pVUf1jMHTXsdMSP",
  "key12": "3sk13krV2ZHdkyxG2KTg69FXimscTs4fxkCtzBHeG3a18K7WbTHLrjvSzhFLDztEiA7eq7MDe9r6Tgw6HhZaZmJi",
  "key13": "4FB6wUedeZWepG7d1xzuXW1UBFJMiJ6B3Gqj7SjauDEo9Vh5nVimZ4CYAECWqjjYZFcyjYHzrvEkVoXBTRRa4UeK",
  "key14": "nPr1kgwtntWeBX1Xf6qsLpQL8PJwHSAqs86kTvZjs5NU66KqE8JdaQpsz91KyPpYmTasJsVdyLnJw28WJCf8Arv",
  "key15": "5DPCC3cnZ9JDR49cEfSNC2h6VoHYQjckD4SxWm2R3aPgJFpwdB7A8cKDREbDEt7iFahcCvaPpSv2XbkkncV3qPB2",
  "key16": "41vxGF4MtKN1fe7adq1HXj1UWehiQKfBakEQomAXrAtCRqJbL2gx5XfTVmrTLMzmCTXYrNxsumf3bjhLn1FRKD7i",
  "key17": "4Ukffwk56C2pjRKZ4JvotNkvU3GDKkPA9Wz7wDj7Bs98RbVQqmqeFxa5r9R1vpK3c6b4ktoZ3rFS5ecqJKREqEMg",
  "key18": "5bRgnajhi2nfdGY7ZQQ8RCs9kREfkew1NDSL5NBcMVRjRQURLJwxnuKkpioCn8RUH3P88LBGh5XzBksxR2um14RR",
  "key19": "3RAdziHRkFzabepN6HmWVkiDzbdqkwP3U4uHpSKw8y9WAFVHn1cYhRa1iY1dWwXNEkM6xkPN7eBrA7zoxaiWkMoS",
  "key20": "DhYUzoEhNLW6LuTksGzo1w15Ux7RqwZVup2GEUEHGB7M1qzF1yMnXzf1hSUXQh5bDJwt6KFALZNs8ZRBh4hE9kJ",
  "key21": "486LrVjT53KNnXvdyYhr7hcqU9AxRupE8RwTufUYRkCLGVHZt6CwiJvoNMfRdGYXzu2YENBzoEL5z68rdn8hcAzj",
  "key22": "2FRyjDUxPfcsoaY8DK7Vexa2sACXwSDVVhp5giAy5z8bTRDs58gQLB4YDzbzkbAcTeiwET7LEBNbUmEvc8hkrte8",
  "key23": "5D4b9t5VdaaWBgGXtK7nHK71GijU7W8FU3Xc2TrKecMicPpEYuavjURfaNEjEA9o5te5sqwhv4mEgC29J5CY5mPG",
  "key24": "3Go9z1PJLku2nszb312jPjE9PiPQx7RnJYsRsrVAPjmuVrmjBBS796yoMBorC2G9dBT39S7zUZyZAccw8z4Ggh5L",
  "key25": "4wEi4dvABuaM6pBK1zjr2B1bjZ3wh3KrxczE6Sn6mv9FrwT29qePh8kaZfHLinnFuLscaDukCoBdtxVdUyP9ycJD",
  "key26": "5WX6ymwYyeVcUduRqZJgNJv9hHJucvB5B6wxXKjp4DSJwYpWMpND1hrP3N4PCF9i3s69kjpLNXhiNSM6ut7EhM9N",
  "key27": "3t9jfJkzjeGsHQbB7edpuAsLz7s47DxMNMUe5D5p3qSMd5smCjNp8DMXHWEyCvjwfpf3d7xJo5R9e36fDontXaji",
  "key28": "5weuqYvDmextKby4hv3X2egpbe71KKkgmcA95kC4DJaNoASTrA57KQELnwzinGC5dZ8zdFgUSQ5srhV6QR6vKiQA",
  "key29": "3LTWLGXY6p24BUyg6teYorfy98TmK9e75kvHPY5N65EM5yyQRTCZvN9rYxJB6LYUHFwKDVPtiPEGo8h7iW6GRtA2",
  "key30": "kdCe1u5Rvpi4G6gSdvG67KffrUKBHcC27MJDWi4dox21q9fzVdYbeBtMhrB3rmPYNgsNgFe2QCvzZsLVF2p3CuV"
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
