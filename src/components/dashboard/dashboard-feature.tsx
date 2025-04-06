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
    "3WJTErDdaEYicUW3aMbK5YSVhMQSugPZVHrdDjPaYyKCiTSt8dLsxAcRB2nspdggQXkdTDpkeZxdjkTKAxWCYE3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C8DhP36UR3yb7jWody6MyauqAMzWcPVoCVDG4H5LTkqkKgaLL1Yb8YUBhiPrpMEXdNawCDN7XuBDvpabmnBapV3",
  "key1": "4D7UNtV3agz6ZM4UsCC78FYbQP1sMdJ2PA8kUt6P2CBxeutsaspN1qChJJxEPicLfinKHyreRsRjwDrGzwYqBmTy",
  "key2": "3ALzsDedNCjuFVf3kxuTATZK6QRzvzXqFaj6cUaDLFKze8o84t73eb3Q75rQ3Z6W2p3F19dmF641K1BN66mZaADH",
  "key3": "4bCEp5yKsVcaafxknz1tF9NUWA7VjpQF3AqxAhALr4J8xWKS6KaxTF8qPR7zpaWGeHwF7Q1paCcmGKF9GtGUTTqD",
  "key4": "DJbxsyzaPM3sBBihRHYGfPYuXkhEw7e6EdhUgWMcsFSuCBqwwt86qNbEUqYNVk8Dv21yFdqe26MWRsh5nYLvLdk",
  "key5": "2TZpcYjyJoVAXwL4NBDGY4eSL4QUQXfPoKB2nJoovkMg1cCXoDjUBCqVpDFrx7vhAkAms5yPj2iGC8amofzyzu6p",
  "key6": "iNRAmUqTU5VbXVDS9aCmbkLZ3tx2BDodwLpouxvix5qVoo23QAf9gy1JSWxvTm4p59kZaf4mao8XU1VwYRAbCZS",
  "key7": "3Fu9zGiEZynqTwkzdRpysPkXc8b9P4VZ83yXUVYsTC6zUNxBYPaKCZhsDQhTUCJLk6MURFvuzDWNuJdhaHJbQdm2",
  "key8": "sS88QjiGhW3yKy3zDAYvR4FfB4NAVSGCBbCGsLw2CkmKLoa6uCRd9XkpuU3gVGGRe4fbvPqGWgCjvd7kAXYktUz",
  "key9": "4avqa7ydNHBdybyX9B7yhaiUVEkWqyEXnoXL4zw16YpHwVzyHg8gaMVAVqtyx3scyraM8jBNSXvYhdf5Sh5pYvvp",
  "key10": "2szM3Pm56c3Wv4qRUkDktSGPXxAAT2HMY7t9Ajgz5kucDzKJAC5jut6wYZ8H1RLbY5A4ne1KaidsYkQqR5hyMoSS",
  "key11": "3nTfRPfN1U4jFFdFtk8dkasuYW4kMATYLQVoCkaTCLSW4WuJrH9nYAQQg8vnifU3JHLpKXSYDEEZMhGcpeup1MNU",
  "key12": "ExoqoKqBnZKCWFVkpydjwkrxEL8pocfM6uKVcEx14Q1T6ELDnWiYQFFX9bZ1AQTFTKMDhmEh9KFmCZ5zZdD9EBK",
  "key13": "5m5mn5niA2NFXCLjhzvvyfFLsRT3p466qkxKHNtoV7Ht3bjbyV6KQLEDdAGPok3aaFTFs7uqJDVzDdj5RRi1JSpG",
  "key14": "2kEYda7uBUDWoMy1UhQEH3xLogeyKS7jKtgvX38uVALfBuw8zx4tf6jTetXASX8kMjdWB7TT9Td7ZnkBZM4x5Mxw",
  "key15": "k46HtCHPQEGgfgk4KbVCH4jebBLjbqsHn3P8FyyqXLomSrYMv7Ws5KAvNWozpghZQrPYyZpZeFVkKt9EQ25AiCd",
  "key16": "3TKtBEfqzjc8vGtacn7wQ279cFsGxySLQChjfT7T7Ufk6Bkr8hG7PhLLRi9jHHX6kVmnE2e5kMa6jE5NXTRnSQvf",
  "key17": "5iP8JAwiUVNzf7TYddmFvjLNwCwQbMxi92srgQrjhg2a6C1jHhq3ezrZceadi4Xr6gHWCV48Di6PahhQPBGYHWGy",
  "key18": "4deGYm97Nj3qfBHqZQnKpzdp4SAUBVo2WJcShpDktWjgQR8pWCJvznfimHx1pZ7o9hfw9C4NqsBf2c4LsXUjB3Dr",
  "key19": "5oRsCyq87Ph4s3XXaqwi18HTW4XAuCkBmHYh8JEULZNAaB1xk2ey8wa1HYfYRuHeKGhfNzHnQ5ZowJq5uUXjWbW1",
  "key20": "2PyjNv6R9cBy2P4fJUQSDGjYVbpQXpEi9XAxddkdNHFQNipyoxquBcSjsp4PhmrGKA1ZVQypjQ5yU6gw4E6BpFiR",
  "key21": "63BPSqtryrxSjGA8suWU6GWnbzJuYgtwpkYgD5WCrC9r3p2dAraeoKtkH8XvYS682ju3baKu6Dc9kmg68yRDdgQJ",
  "key22": "3BhAd9iacjDJjU3koaK8ycJF3LF9ARD6gpyG1g5y66wapP8UhXjx7oE3kvoSkKxNoSeMsnDnqnDbTUR4pbGPLddD",
  "key23": "52ArcgBLbNYTam4EE7MuqACtBPbj6fWjVL2LdVJXQQJj3MoLXormCM95HvA6Aihg9G5dG7DQtShRExyACF1cCvEE",
  "key24": "4ismAX9nUybUuNtF8GFBwwNaMaHywbbZj4vTNQmMFn9gSMNfA4p81toTzRNVUyXndSUizMi7NqDhrLAq4qgKNQvN",
  "key25": "conF9n1t8simHurfnLQmxV8pLv3sj1fspJBTqJVw1BfHun9RHsNxzQZwaAFCNbiZDm2tq6pr1BFrFg9p1MHqEjG",
  "key26": "2JqgsiUcLqBXUt3femV2rUhpPmBWvSoxudKVQrsasz3QVkGmAMRj1GaViyWXF46LZYqhSV7iCa85JsHwhWC9gLa8",
  "key27": "3h5czryKyWiGGwBVSMNNGwSKPRZ3TYeDCxUpTfvCXUNyfoQJSXJHXiBYSn5d4V2efJQm3wzA2XkSvNA8Ec5tUPR8",
  "key28": "2aQsxLpD2ynfdM45jCPi4ZgaoQGEaXCY2ru5DWQXfXuogTqwLWkFWd9BoMKC5jmq24Mc4S31HvEE5tnqPJrL1LZD",
  "key29": "3EXXeGxGuHAvQkkAuVpkVdmkYPNVrAE5FBqcqTwShELofyuQV4wpAEpbmrJHgSfZRCv9rhBeRV6G1tcR3hA61DEs",
  "key30": "e79o2ixa3kumhyXsyVC7RdDaR1fzfcwwDvwy56UVPgphGGcLokCm6qdAHZzHn695k4DqLPQPpo4W3PiWQPR8fFY",
  "key31": "ZYQJ6RH1oMa486GJYX5pVVvoQhkRWWidXoSLURbHDooUDXNzzkSB54swfG5X1McKkDGoJyYu3LM59988ugwV6nM",
  "key32": "2Sbx4BvfraB1yY8M5kyWGNy4bFebkborV2oRawG4i4A541ePHDWkua8ozHq5vw31N34GXRfmBCZdJBDe4BtQow3m",
  "key33": "9eAW2Lm8Wf6sLoeY22gVRdw5mmMEKb3uLbYWMYobU8wQo7ByRNenbkSiGuWF3zWJRSh7yiSB7yUFsDJQcTxNZEs",
  "key34": "2224ed4sg4eYTJjBDSBCFseargsFf2APczzMmWELgK2wb4xxaqi4FH611BAnAheiyyxMCgHHYNshTAEwub9sxiYU",
  "key35": "x9mXMPqimroCugLoid7kACvMy4TC5KZC1ZSeR3ywM7bTZTjSjpaFRt8VFYrcjf4fFcUnDWmJTNHvhy8679tm8nf",
  "key36": "2HV7tawjw1rTcJC1EK4WsWK64mgAWSkD6woZBqnTCmoaLFVrRfQsFw5AR7iGxJQuZLaKaqGDQNoC8gXAY8Si9rxk",
  "key37": "3JYBq2uyWZrysvuGR723W1bEaDLqMgr3sY3C7wtRp7PFoygBiSdNBJcysCv6RZJoAVRE5ykBx9nnzoZRnY2zL5Zu",
  "key38": "2L6eJbxdNaSzddmxGN6KVtLzKK58Bv3nwNrjh2g1u3h6Tfm8CLkLZtXnsFofBPtHZgJZsUr2MEYDDZsBP7JNPcSY",
  "key39": "5cn17CUediCcmjqhbPez3i2LRkad5iNuKm2XCyQHwmnXXvKbKGPcdchMDnXTD8jtJ1gdGNdta7Gvq8pU2acsnV1A",
  "key40": "4SFijQQD6izdoMybUUPQTMTqQw97VjEEu8d1QxTCTPBbfFQuQRRqtu1nTBHxbeyEx2zSKvgKk6y5vwQdAv5WZyiC",
  "key41": "16b8URySjqzz5hPd6a1THDRVH3mbHKMpLwsxGQa77Tfwb4nnJ3XGLXLE8YWjxksaRVU3hgvwwuuvU9pahYVS6bm",
  "key42": "58VnTNVbbSpYAZkwEeSbPCXu1J54mR1aZqEVEXBS7uzYE9WbmS8CU9xXujxNHReJwhfiijCKwXskAHo81Gd4Qt84",
  "key43": "3dZFj443cPBZE8W27dvfbGRPcJt845nfjgAs8AbLvSRXzdU6oxqzWprZ5EiEV1Uxdgub5WfuFFZL7GLtBodQW4CW",
  "key44": "4WUXMSErs8vi6hYgbBzpiJHezekhTQWwVUU8PxijiaDSPhErhEDDh3H6Axb7JksKr5iKaVEBafLkKvKN2y9RZc3f",
  "key45": "3DareHLoMQmBMbPZYLqcCp2brpYrKvS7ENF52cdbMwJxjSgfk1fztnMqnEPrc3WUFem1xV5ij279S1wQ4VdZgQ5b",
  "key46": "2QWpn2NwNCiCREA4ATQx4mSWoYbAmadgeqrZLgxejRsgQQjPQ1wDFKAPMfF7vM4kKPtxYcgvPCZeawwX1fsyiWJD",
  "key47": "5zyUHmr7fczD9WxDbfopHXTBMgwxXPf2vLXULY7T94aSiZ2JYvBpnQgG7YorvtUk6a12gPzy7LbEp5vDcDnZamJM"
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
