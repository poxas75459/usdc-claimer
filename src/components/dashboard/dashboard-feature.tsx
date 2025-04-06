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
    "2dtiL8nq1XCiH5aziM3vpK8MVYWkLbnZTzWwm6HmVicyU8MALtqHHFqdrBfVsBHHHwoyD5hhhVk1fyVK8rmyV8vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSe9yJzmDxkqvwqvdCQi8Pdk7x8pgQpXnr6MpVVhYqSivG2R4TUJntTcu5D52rDBrdTEVuFyTwQFR8D3YjyccxC",
  "key1": "3uy6Cb9k8XmhsWt5o5PZHzx8NFRiA1DA3PaZgm7Rv8mQiapQedoU3rppL6mCTakBRoRAewkqTaFoGdRTZsPN6x6R",
  "key2": "5yDAf4qs2SQSHhuQSNAgxkigQuNa3PJzG1iBdweiDB3L3Vp1fNoPV8drJ7L4Ma71gKK989kAXu2d7q7aThfNGPjT",
  "key3": "3yGp29b3E8i9wp1WfUqW3phDE2GoB6y7WSZJM4jfUP6LgXsqMTqgpkpk3yZqN3TXdu2EYt4Sv9ctKWwXhr5YfuyX",
  "key4": "2ENa5dLpQwMLT3bSqYDdMrDQwGSHpHWRicozZK643qb2hZxvU2y9nMmSxaLYnvxXuYHWjgZj1sqXybDoXLpQjgyn",
  "key5": "2GVF7jqrvRTe4K7byPuPYUonTQYg2LRqyDBdRUyyueMKhi5Xa6ZsuF1fWMxyWyTyZYh7wb3rsKTnMfm2puGph1Kk",
  "key6": "5FU7H2HgdJbj8cY3m5suw6EVnDUQVqirhbPhW7JwKJtpfH4FK7mzm5BmJVH1cNWfrzBZzYoqi2MkmR19JDNnD2cY",
  "key7": "2sKbjr8Gbbuhohf2a5pqUTL1TWtzWjxVXcyuJ3ZJxu4bkmmW2M6oSj2SxV5fbqGrDmTPdJtsGsXaKj5cvHpAEB8Q",
  "key8": "3tyM5dY44gYf3AvNPx8KgFR2xuYSMnW4HWQAsj6F9RQ1GC2bNjTEEdCQ2W92xAHXbHXMF8NUpFqfHabyHbxUbghX",
  "key9": "5TUcPNx6UrMaypt3EF8fFMuXWNWLMZzNoAzJYSxJR3W1oQaJbswBek1KqknMF8bmEfVgDTaxANuxCbnmtpBT1fNa",
  "key10": "2LdhXxVz3RDuDr7CeTGTk1XEKySSFaeE3DwZxotcmvH5Gs9NrwHHNY7bV9GpR4mmX76Bw3BRCDT4n19dbUPFQM3u",
  "key11": "doz7H9ExvqsATnDxeCLCdRxzMysBAqvvgLaVHXbHq7ySevmEQsg5K9H7wwN8R4ZRM7x4Fi6UNpxjbE15gPzSowe",
  "key12": "3XvWRoGeemxxPJmsn3WaNuzFSJDtTenBAoozjw7RdXDsok4d9kzPNWMm9uNSBkty3CwUkNdjuN2W9H65iv9s68nd",
  "key13": "57DkjKY4Vryve7tmakA9XMqf8JQPFCSjrrimgnjCzAJWJYdhhmD7QwSb7rbF138uWKCDkB7UJ92jYFZ4rgQP7vni",
  "key14": "3dEJdQLxDsVLTCxpGS6d9uRskNL2xFkrcD1C8pcHeFPmLrDrUfEd6yQ9NHc9jAUSNqvXpZASRBiTKnEWiCzFea58",
  "key15": "5zu5Xrv8sFo2Ym1uVUEfzibcnTNr4ZW4XWSt9sjm47jdn1GWHEs7uig74oJixsgbgHx3sYaYZDc4Hsg889HQyfFh",
  "key16": "4uURiRB2opbTiciWe2NBSV4gwBz2F5hoC9aiqJiUvtnBJWeQMaH2wGvFRuF6iAg5aBGmzdmypy6V6XoksxH7vgMf",
  "key17": "4budarX3rMGVP4PvLNDCYu48NKrAKkQxcYNmdrPLHmDTEXVeJkCiFXNXsPDNMYu6EZrKnwZTFcpyppkti671s1kX",
  "key18": "54u9j4JHxNWZ2EhQnReRG6b2vg9pohySLgpJ2udSMs6PwV6xRTrzMUMw3p6Uat8nWiY3TMVLh9izwn99zVXkMEHL",
  "key19": "4kRCTk5SfYqULueahGQNDRwmUeVQsaMpwNuUB1JsjMMR8cogSaFraz1GkcdwSXhSFrzvcZ5D8HSKiD9KxUHzwmRw",
  "key20": "5HMmyS1ayFBGfeaPsT6zafibjSBiAM8wpgNn5LRg9w1JZWnyC3ji4sMsBUZyvUFFs6HPjBhfG6EJBGpdgaynrEBB",
  "key21": "A39mJpJRqMzVq1VqQ8xSZ1LxRB9uzhyJHDR2uYyKv61TydQmYnYjxHWfqxkXmSzYpnqhVmSsTtejuaGhpqeZxgo",
  "key22": "62YnVAxeqJEcEwYoaA2Xr1ARM9kyT4Fn1oDTqDRuxfW6hUJsZPWtPzHyZUjgHy3V4zDLQrx66qdSgWEsaVBmRCSQ",
  "key23": "2XpKdzVSmiRNUDUnv4ZHMa91pCa6oBnMCFQTuFQYonRGrkcY8n9RAYTXsuPoPTZw2yjxwa136CUqcvwQ56JNRG4J",
  "key24": "3odxRGbWtG65Ux2bkgNKWkLfQa9G8hbk8rUQHSGFvVVqzyuwyey5bAWL5e5SjEnLpvcpPc6eGBi6KySFYCgXTLxK",
  "key25": "24VMuLqLmqtG6yKZeCTKSWYziA1WjVrD9opiFTbr1aWWW1EVDdRUewBgWPD4SDhgY1Ep83YcqUQ7M22qd1au1HAa",
  "key26": "3EwL89hMFY8frzfgFTrHW4VD4LYEqDYZn2muttcL6QCZx53xnYooxLZNPVobPqnb5NWZMcbn5ojU7HCtRmNMEXYQ",
  "key27": "yYyE9mZmAhKz5BuewnW8HHA9tiy9vjMS824zqesoYTL2B4mik7zZmXHxHgFbAf9RvLVAFK5H8pJ6MoaTcMMk5xi",
  "key28": "3nzn4hrciCTkK7TQoU3gCNch3J8qczBLqS7oFFZMRJ1EQt59BVZA1Bt1jwPZqtiRyjhLvbNLd4UcmiegtDasFHqr",
  "key29": "SBRRndVcyV8E5mZ9QAu8KcQA5nQxUe41NKf7XBAxyes19m91Be8nTgsrPc1cu9uCDarthM7RMmE6JDHYDFQ4tZC",
  "key30": "5sA8PveSHocv45gD4J481PnENg9NUUYa9wnwdkimQHodNXoLgxzH9yJ7ZJDt5LDVC1SfXFA4hLUCfNHuBRV3WSQF",
  "key31": "2JLKqQ35xJvX56X8wZST6kuku6N8iw2abNKM8TZusCT3732bSXeCrDN6hHeFrd7VBgqHfbAG1LyxFjCyXk4g1cRM",
  "key32": "HbsjCXUUsNSLvCLVqvyRFfw5zNf33NBa6fMMjgQ6c5Ff9rAfocNALvCbD7W7sWaAVixQiFKeSea9CwQ9gTFMrbX",
  "key33": "2heVr2iCwqj5X1Bu8kuGjMegauPDVLZTca6n2NKcAWY3HHt6ENvmMQE73oCopzNo7wkd1KLSWYRk7JASaM7Btk8z",
  "key34": "5qtXfh6d8BS5PG2h51o2UN5PsW7HSGuRn9SiyAMyBvr36BBDZXu4VLsfqNZ8bDKMUNuZcE9Sf1LkG72PkXEEiKGx",
  "key35": "3WBKRbyYDa16HTsFixJaGBuLeqWzNMtiTFKj5PJa1c2y11zDSkaBmmnrVPFv8tBcjiSbPFYzycccKQs1pbiw9xgW",
  "key36": "5o2N6BMyGQDnpzfeB73swXtwVSoprfMBMyuJkMVC2wz1cUd2vjnv6LXvcA1mJjBZPi8bMVZUKXNyeCZU5KZ7EQbY",
  "key37": "5c7wkWmTNJiknEsvfvU6tpGNxRjJTuZYV2Eg4TGxNszmgCrHvVmgt2BKnbSepo7UEpmoZqmYGgMr2oLWnksLpH9y",
  "key38": "3D4Jtxr5ndXdu2ad9GCMnWeqrsq5MKNe7upgpPHhPJ87MaTrRvMtPQDkKAMeGmtvXvopK5oaVPurKEwLXLcuSzAw",
  "key39": "48Ph4eQaVKd1NUqKPkdMVxVWLSsoTJKgreKnW2ZPCt2e8t79oaoWT6fZa3L33gBgQVpffA5mdHjFytWwz3bmSkLo",
  "key40": "5JN4FPHM5ZHBoC1aaL5TT6N43wPPJQ5toKepf3ZVoR3GehAP5uWNMREF7ZgicgGKb4RuhZ1ZKpmaD2fwGbG8Ke9S",
  "key41": "4jrAieBmBd7UEFtSZUk8rJX7eCViJrBcHaiXutVdzefQ1haKTsqtMJhNqQQ9paAZbqv6KyF4N7Hb6tn84BQDTxEY",
  "key42": "4pXnFqYNggWEadL6Q2JcjpeTHf1m9BRW2QLgJHbvgyYgRqcYYxhKTdkyk7RWr5Pq55X3u3pJBnUJ18WmDTo6EpS",
  "key43": "RQEcyE9QmyKgF26aqidW4sqXQz7JmhyEgXhsQ4GJqf44oRDqf2sRRbCvHG9V4DAgepk9bJEDMidMFsZptsTZ6ch",
  "key44": "A5T6S8CSthxsEjbuK6aGUijmkax33KgPbeU9rWdaTYj85o9eWX9upDL2DPdZgMY4XYE1h4uRYmJCVLTbNu2e3WG",
  "key45": "5c3Q57Ci52s39xxtcmDWTXrWnbr577ZPaaoPVY6VrwDGdBY9ad7ehoDbxMFEair4Lf45tdpREUzz3yZEVS17ubMX",
  "key46": "3HxKBcuoeANxuJYPbMPCw3qPyumXcKw9H6P5z4qYsBexvzFZg33uHBpey5y5aihCCUx4sfshdXnLGPMgMpYXgcN",
  "key47": "Aa4b6P4qDbWwKV5Pa3dverM6nLWC8oBsjzNf14ddUB5fdFZTRL1eM5Ti7JiKf5rRx7x9wECa4F7AxEqVoPgUuNi",
  "key48": "5Mdmaxku3XNxQeFej15GRgoj5AJYTaW72NgeymJGwva1oWs5cnwk8DGA3k4c6Ar1ifsiwquP1iMf3fpyvmDWGL16",
  "key49": "5Gcv5Cg6wymtF9T8oLwoqM7hzoTvhojLkAUDV86pgKEHxRDZkDDjo7GCZ6ZwJeGkvANcHucs8umN4Kv7ZDfECyvU"
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
