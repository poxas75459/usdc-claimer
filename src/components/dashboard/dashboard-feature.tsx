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
    "5n7koGN7Wz9FWVQtWRE1CyhyymftAK8QQ8cv1qFTxAeDisKycjjQ2div9GBjQ9TdPP9Kkg5DkwSe3jkw2V3b6Bt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39dBqy9gBcrTuRh1fSdL6Yse8MA9FKFi6WJZ9bJ5yJpAYjm1DcnFMPp8eK5vUkztP4FmCRM6BihLnM87G5WeqZUv",
  "key1": "4dvRBFb1HtYQ53Dxk5HP5goQBBpovA77cp2Wv4FG6ehBheYU7ZVJd2q2tXm5a2V6fUdSEuSggD8iijpD3Yqq99EN",
  "key2": "2rN4EhSDyHf2KUU6Hce4PWNSYkVBGBXj3vbCimRDgWtVeXEk7S3kuvK73JPkTjLK1MuA9Xz7p3HbJtf7aHBd8kCU",
  "key3": "hCwqnk3ppkXo5sjsBvHV9X1fV4kRarvpzFLv9gcWhsVRS7gWfF84njeMHKVfFo294y44WFmKpnvxvbMQGBrYmWC",
  "key4": "Q8CDCmUyngYq3c3rt9euMY9BhzKmRGFtMVPSRGvQeAkKyWfKkE8txB1bfPrFNDbwk1PrpjDbFrvh5Wjswwfq4VL",
  "key5": "3E7UTueFMRQhzN35x15e7zc1mb7pGvuMvE7dynduMKSHkADgbvxkuPXiFNqckARigXtVSUKWMrRxx3tEuLLHkWka",
  "key6": "yvp9chz1bYVY6sdGMPD72uRA1T6KY42VHWoHUFoefu2xnWKKRi36Mef6K8MP6fubcZojBQ7APvRLp8m5q4ZVHBA",
  "key7": "uFAiLuhUKKoCL7Uji88U2m32eP5jLzuaHncHDMJdXVzpKGK2N9j1qHZRvjpB6G3fU6aW95KErSoer8hACe7Wxi8",
  "key8": "4KNWnDLpUxWDnUt4iU8XKfqjowZyeRonFytrAveAyrbKmKnp7c8x4QyMRVHH9AXPLwxxLY5wbgax5n5PUqNNkZ2j",
  "key9": "2yMmNEf8JfShHHXNZtgG8cT5EeFQiUPWMdbbS8MwKL53pZKRxxvGMGwAbmD1YVDvtyXYcVJ5gjMkaQBf7iiRx9zK",
  "key10": "2zFyE9YVQJH6ATbti9uXacEZ2pmUNNBN3PeANdgSH9PNNKSapbdePZvsgvjXm7y4QXT2zdZkk64CTkJA3EJj2SSB",
  "key11": "2kP6kB7bBgbYTAKjn5RCUpX7SeCPiCyWt1rRNgBAGmaaFFaeWZYjaqpKMwGKH6Rw61vVnAR5FdDNuZvnje5Re5zE",
  "key12": "4TWJBLedmiGQQdhUGYtwHPa1Lrj2tpeEqr8EBxMVCu8FVg4EgrqFUyzQeux6vB6MxnjDHzU3gwDgeVvvFLqZmoXA",
  "key13": "4ez8EPXG38SnhfjHQ88NqBCTqh7dh6cASvq5ZCFXu44QvTR5fV8tesRyxss6M5tkhT3x2eLvV5bBSZ9hsG5qosfS",
  "key14": "5ox8SJG3ps6859L1oLLo4dF6Bysuf7QkQgxMCtGjtaWUXLdWsc9MWKhKFtfTy7CrXN4z5bfYHnnPMuFYCX75xga6",
  "key15": "4wshftd94iCK7vWhpt3fkrPdhcbo12Kh4KhakdCAxZjo7em4UUYscDvjhoJjyQkXLiHDESP6bKJc58TayDEABtMF",
  "key16": "3fscjKQyhogmGMX1A4UJhucspZJyBADkdY6aiyyr63KRM6uSbwNeY26LxiTxTtD6sECquD8qFEVKp9SZhdDWUuEH",
  "key17": "5PvUHzckSG4RxWqxrQbdXosZW5C4ZwDc68MfrPMmPtqfC1ZgpdvjqaxeQJra7y9SNpVKwntSc1AsxdpVf7psN85C",
  "key18": "2MARLrMhaPc9bPBaidcrQFCypwkS2VBs6NwVFqAzJkZ6HE5C5d8pKk3PMbdMNtxw66Bzt2q9BasqYqwnB6gjSG4H",
  "key19": "3NN3ysAq3pYiE1PBoEs7HxhE7aip4RrqobYgWqN95MoBnXVUVFnMkwTkDPufXoNPetzoENGQUSCvtWP31rw4NifN",
  "key20": "5qhsbUsGBr5DY8Xx7NdUAg9BkAfUKXrMuotBV4Sr1pYPYZZY5bwkjnhEWak8iXYnGEJQKv5WczkRQK9zrgg1VzeF",
  "key21": "4wqVboDDGxXVhRJcLfLs1h6qdksQVUKsSzLFCcjVeJoat1WxWhp8CPvPLSrZY37jXHUoa6vw8UZfcHawUv37ZQZb",
  "key22": "MSDV1n5SCxcjt7RCX6jswrVUB5Uib2SjA72T92BmgR3Jv2Z6fxxc4iWmLvAetZKt3CrqAgaXrUSCQRBcu9ctjrr",
  "key23": "5BNd1TYX9tyZMazKD83JGLwb4C28f8znSHtSFDYDjaMZeK7FBd4bPnsh1os55UVtsq1PY18YC2uPn8CuS7wfqpZK",
  "key24": "2bJ4mgPZH4q5YtGBRim5PUqRuws7khR2gMBNqCNpeqWzj66PWNaCLD8xAXb62feNAAdF8prB52f5q2E7J1P8eJRu",
  "key25": "2CjxqD3CvvyEkGnHcVjfbtLgWJBAKRAjr1wp3Xm4ETJBr4Bc9UViAFwM1smeTteeFRnvoaVrNA5K988AoYY1KnnW",
  "key26": "3QSaK9jHrMh5srvThBTQnTFFPfz5iRm954dBnxEz4jtjhRKprwmqLVuyGTmgWNm4CPiDtRtvhii27rFLuki4daQB",
  "key27": "2ghTZgGReEEreZ79HJFcuu4YNstvQbxyBkVs79SE7h39rEmkDeAdUjfaBNH1idVabSy4HwifVxL9NXhrfSzZxhs3",
  "key28": "4ikDWpCid2G1Xi1eFz1ziT2EAcEPDwHisXMJJj79WyZDhXYuwbmqftJmTCXokoh1bJj5win5nQSLSU6d3sF3eJLu",
  "key29": "5fVtytFHdGW2NCLeA3EdrYRLQ2fTFAWjxTQQSRWLCCz6z34CKnCkQ7LU6RJqzUQCHYmTBHB5zjQZuuS2vAB4zn6Y",
  "key30": "EpTkek8qFouSzT45ahGeTHVQacKqubUska3VgaYDYK41hYojFkj4LmjhT2vQ3nZn7yy4Az6PnS6ntdUtrxbpeV8",
  "key31": "4i74F3DGA8mWpyjKN8MQCDAYvi2Jrbu4MAtJmr3jhgy7mT4vymbbYM4GzVbR79YCfTnzT19EPuW7urjsas1Qxzxg",
  "key32": "FW3AHqH9nw3NWzK2ipvqXqcZ9KhnW8TFzrN8VoZJ5boQR632fgtyoViu7X8a97KAZFjYEBTAS2DYmFtZWtGDo3j",
  "key33": "3KQzRJm7ZniFFFVMy6y59ZZPpErT1gSNQBoAHcS8JP3penqgMqLuHTyzjFrUTZLzFWgReEyeW52atbfib32qK914",
  "key34": "4UQsQwg9dTguyqH2VurJFtnLaRGrqJecL44S15fJJEVd7msTacTomrCGLxB5oqTFEdN1QzYvxhaar9t9geB2C6Ay",
  "key35": "3Wf7jYmTPGJ74w1shw1rDVJgsJESa6qFp7MNiXDJKPkh24RyuWqZxd5Xoen7uNLh3RqATzZejnCD6MTo4PewtzXk",
  "key36": "4cntFJAk9NTPMMFDbvfYa85dFpykHX5jFukVZ75MSufcxRazFbXSAoXM2bYh51JjK2PVqq3EcMNEpz3oyqhikBik",
  "key37": "2Pj8Eiqub68oGJBXBWhjYvFGpPuuzLnYwmF5aEv67MrBNubHVoe1jh5nJZpvXNLnhtyEgyi85ciU1sWPbVrJ6iXt",
  "key38": "5aD4zJmnZrtZE2tdptb2ZxjuTE5iyZYJKkZ6ptMK2y6c9xdjpfHgtnBBXhKtj45XqKN9XXqYanV86tN7thYTjQ7q",
  "key39": "3cW1ewRjtuZPHyNVfMiiFHMgBnHrRKb8dDU26DZEqgkbg5zS4ndYtCCrb9d5JQr29yeiVhZ5qWjykcMc7eJUwuZF",
  "key40": "2LRBfq3CyztrTKLyTFXAQ4CPMVTvsqg89XfEXsx7VAGY3314Wpar3Zm6GVBaxbtoJ3WjV5AiCTQDE2qnDN4AekyX",
  "key41": "sKwotR2TdBhVFsPDQjKv2D9PW8Av5zxfY78bpajGsNjrgtfeh7bB9cSePCUrs45EMemCnX5nz7BimuXPa6ACwMT"
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
