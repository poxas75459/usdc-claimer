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
    "xS8yQg9Sck9NdiZDwM8khYSsLWzXYDS71g9pXkiDpuasFLWPoUuZMGPT2rb6RNBfUBtWyzTD6kRaR1eyTkCbbXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RtjaF8A7r7fJM41HGhiREnSTYnHU7dij62qDBo9B3uniUAiT83bQjW4yZz5tUe6ongoWXEoVJsY8XedbXyua7w3",
  "key1": "4szJDo9MNmhJSoxhHv8PYcJp4eJMo7338Wt5iJZx1PHmwChhnL8wB8Suj4NpyZnTCfsEaQiTgeUjX6T3zoxmdXUh",
  "key2": "2eybwPQc8FUJt3eZFZEtgQw4aGUZPJ4Ltc3Y9aRr9jBTB3W8iVFL4XUu3hz8FMFzvwqWK8gmswNxPHr8FTtcfMhM",
  "key3": "uKYH18FVNNah7JM5H959oEWqZ9HaPkkkiVY7WBRzxR23fViKUdKbGdR6A7NxXqNTtKwzpzTypWSvhQAd6YwKn2S",
  "key4": "2VnrpSPNaZsego5QqHULadmjCvRNt6t3JnYxHcuCgPBDZpJGVUWzYQg4WAE3ymqpKgNRMB2RZFUY25ne6PVP6H7g",
  "key5": "22xkWRi6L8LJbnZNGQCtTZkP4KYreX1xTqeZRMJdDKppGs1N5GjSpGSbKNLWNAMtMe9vGiGYYHVhkH238oUG7wfe",
  "key6": "66QCeHvTeeVVLrhv53BJkaFCWsASPAxTNJMc5VAVtEhCt9gyV6ePBMm8WTKtcNdopAgMtuNNhEmnZC2dA5Dc64p3",
  "key7": "KJuXxQtMDwQTnDP7oKj9JpwtBtmLvCggG7mkLqq7EVW3wci5D1UtnxerVsSfQWUdJhQjZRxGEqpupdQXGGztt6Z",
  "key8": "2dgrjE74a5efEN3VXdffbqXgxMBqyydAAfZ9XURqvrQEhHGd6YpE1K17qFy9ub4h4aL83qfpEwwGkqPnoQU2CbWx",
  "key9": "KHS6SgzxkoSQRLeVaCUmxYnPtre7YMwv17jo4qdWFiMMaM5b7fw9xdLBfnmfXnhCLYjA5oyTsi2FZt4CyiYGcjE",
  "key10": "3xViqpk75VRWrcfgXDDhvtzS3xUzJ31BLEgp7C5zQHfv4hUui6BetS3bQShyFEDLLwFAWLoYZ6EiJFibcJEG8aRa",
  "key11": "4voKf7v95hqTm5y1saqLHDbS9LT58fMUqcwQwDKWuEQMVQDqNobvGf3HBtNirKz2qWYLoATrChCzcBKDePnf3xyJ",
  "key12": "3sF9sSKHdwijtTUjvA1ciKZ5sk3TC2JrjaZKvijRYYB7K7Y65wwMsvrwCvmByySCgdh8ugjMimHSCEt8UmMbCWua",
  "key13": "41s1BMe5GKheyBNRDaaA92KXgvykC9t6pmtGFwBbYy12Q58y122p2kQXUmRE1vJvXhxvt55h8RPasJqTBVFbkGHf",
  "key14": "KuqAXjDznMNYcmxBpUU2SQJkRmWUXfLim8ZYzEzkLcxJCFTC3jH5pvukm2gtwzR21r1vfvKWqwfogFoHjvLZfkZ",
  "key15": "4MyaffZv4UQMZ9U3EqGyYgW2GCZ8qF7N8H38DfscXnP4vbskuSyusKRAPfHSptbELwJcfwGVu7HB4dXsrQz5VTqg",
  "key16": "5fTxCUjEDDwrVGsWhWpVpjX4VhgiqTLh1ERm1bK9y6duAQMXHVTV65h9PxhsFXpCqUqU9fBKQ9yEkxWK2kD4gLB2",
  "key17": "5TnQDv7FGhqEKj4DhtLRcheqh38rARm8nv9ws6MyZXwiBQM5VLqfV3ETQuvDEMJjjr7dsFE9LTUCaApSKPVVszu2",
  "key18": "57jyBH8VebL8FFrzwxxpkHJkpWEh4AfCRoQ9izscZHVJKyqjpENtRxHawyZaLyhHRd3NSYnPdtuVcpojQQeAKofe",
  "key19": "2rqAoAuNCNmQ3GCWUSc9yjXzxDCzGyCRrQhxrFXQ1b41jxqWRphF2F69U2L3awUrKwCfbZ7noq6c2LayBbduVBp8",
  "key20": "4v2VzxsiKaFfEkacJ9pTeEiUwgiavcHbHGQy9GBCYTfuYMpaCaBwFvTmYJpwaWyTkeLt6dcivM1HdNzpfDmCpiVj",
  "key21": "5rPuomUWrkpfBfP6fU3zai1uDTekSoZ4yeFWrTvGi5bUXNWiz1ztsuY5mCMh8MVQAocWVdaFf4XTxSevvhhVG12W",
  "key22": "5cmKqYETZRJ6KpUcyJxvH6fTFxnSYimpZaK941GhNfWEVbZ1Mk92JeDktWUqQng5kymG5udwDTF3ZEQUdPfynRtR",
  "key23": "3CPqZhw3Aqzucy8eQxzweX4dt9kHRvooeqb8E69e9DBbg4VWnN3Qy9SgGkXDEEhLXDS3heZo56m6V4JLve4dz9xf",
  "key24": "2pJhEAgs4zx4DeCtBFsjQL5VAYS2wmoVJUBffsvdf2NTk6g5qJVwpmiSGCLzoQRvtwbyAfwy7aCW119VuNvM89pq",
  "key25": "5UqSwAtnxE9Koe5SYBM9qAvKxo9M6FW2iZf4rsHCnEM1CV4zrzNNd9USb8BputG8bd8jGoV9dH2ChfamcYyvSmk1",
  "key26": "3YiH1Kf3zPUcFn9vfbQdqejmLTeHLvCGRL59LX5dPVocUjTapenx5PGCDfdpsX4KujhxPoxbtYghaYNq1v2F7Zsg",
  "key27": "5BmVzaY27TbV94zupjpawNgzVLazA4disQak4VYHM2k2j3T4uXPbbX9DL2hg1uiytVRwrgNtideWFdHSSmSR4VYW",
  "key28": "4n9RTXhTRVpMm6ixqeHbCt17X7HKuApLyJChfkyxvdY3nZneCUZvpFgz9bKKByBbCK9iSCqeHiswdNM9DoeJS3WS",
  "key29": "299TYyVmhRMMYm2z8zY1PehmzUXtVBhcp4akDpqM24LHo8q4xP9ubANRvLtBw5MWCfPhfuPeUuBE2BsBseRgw48r",
  "key30": "3qvZo8aSUdfpvyNGT1wW1kkDQXHkXxe9H8A1Dz2EGEDKrCaWAUb6k7Qk851aSvsz8S81vwmRjrGLJuZVob8evc3Z",
  "key31": "5KVuxAN33abhcqMYo6PgiMhVD8CHEzUMYq6vJ4idE8t14ASMXwrvWEAy2Nwp1Sh7rz4zv1ysncGZ4D7XMvxEPsar",
  "key32": "DmYjMSNJs6uAeVwfRRZzgHZP1XPcKXuQqa7rTEgnfvcWX2xdFmY3SMGChSWLBALjULBhTiJ8XGmYdRDA6ujm2FU",
  "key33": "2Tc9wM6QKpLKby42822LABZBcyW6jShTHD4r7iw8y4f3t9FyKvfkkSK2adDSyTCijzQKaCSYqhM6xSTmzoLCvH7v",
  "key34": "vw7adi4yKgFLxxifp6BLi926FKLzXJVMGtgCfDXMXeagikiH9T3V1L2rPZBLs57szh74aYZH4H27wag8KhJmYTn",
  "key35": "4jxgjUgEGSpwJojTRBt2jeJ3JQ4NVaYJGQHEoKv6vCN2a22Vcxcwjy36ynvmDC293vtRv24tJYikGUVyaXMVjnz7",
  "key36": "4A1Ecye7M6Ny5FJvpLQLZXAs1UCS3t34SHibyArNUwEQkpP5HGY685foJwQRsxnoazfn62AyndLcq4nxSiGUggbN",
  "key37": "4t2BoTbYdYq73gtk3i2N7o4Fo7iEpscNsSWwD9xhRHXj9CJq6NHfzqhacNmLyvm87GwQqw9CcWdstfd8MW4tLM9C",
  "key38": "34LBec98vuwFUWQSmWuGeeKqkZhFbAtYQmsRfrEQaXyMVMMrjwXqZTEVSZftxjZ88wCsyqaBoJ63NJWUQPxgjX4W",
  "key39": "3ie1TpZp6reSkT7jyx8LWW83vMkFEmPbnSPhQpETWsokiMwJhp4UqxoWC5v9NFoNXfeK4yjhH5DszH7LniFQx1Xd",
  "key40": "5yLa8hfVH5mNWWM6Tm2mP9Pf5D1sHt1Pwf2CFJcthuh9i8DG2x3VteJUbXHa6TxtJkmRatFWUGZLRZpR1zhfbzY8",
  "key41": "95rQ6jeTAPHThpdfzGeVKYpZBknVxDAjftUnCzyMUvqF5M5tu8kRSucy7erw46WkHoewavbdAoaCSA7UsKJ33Xt"
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
