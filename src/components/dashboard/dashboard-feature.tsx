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
    "2vS6thMtNCmHXBR2aLQ6xwEg8Dg87nYpBmkR5GLw6Heh79JWvePbNKRr3r3RJPBFmgvkSBDGbCrbm5Nk5HBes2Kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQap6M2yzPHprU3dGspKXNrKJtBJgLkxdvYC4UBZQa9A9mfhxRm4gzrvmDYWswLQTSqmqL1knQvkr2aEzm3L1ay",
  "key1": "4yqYVKsTCv1wZvBVGs7BaMdcUNB6cbLYPScBS7XKHtABKGxhG2LkbrzzKtQ2gERkTEHWFnSdAkqfrUGWoXjatA2R",
  "key2": "QEyRPuGzJZjEiuuMbDvLA9YALeWjPL8pLronH77jiG4Te5JkSzMcrNmshurv3d5E88KLQk2q4K5H23xLAFQXRBu",
  "key3": "4Yimxmd1H8RF3P7ygn2ReFe9hT9BHATJzHVp2Yznos2fgBrXZifuFSkH2b5QuKMo1rw1GuffpoLKQJxpg1hyezbs",
  "key4": "2oDYk8wi9JzNCRnBeXode6iLqFEfiANJfa65DP2bMkZw428tLjLw93CdQXm62XAK8zh5mzJDF5j5rHaREEeo62Wh",
  "key5": "5Ao3SX6HQT88G9o67jK8jJoSJ9T1URuCUtq5VTS3qMAgZvzGwiRDSPPxojjXSPE1c7Yi6xvvV2x79yb9TKm9fpV4",
  "key6": "3N4a9k4ev7N7Ncy5fm62nDzZo4fijAURSbHG1udqV82cVMfWnbJbY7f3YDwooJr85keyNaLiBB2EChpXchvcdnzD",
  "key7": "3sMHMBS3JtUe5GoS3gEsEMqgGDDcNBncWtgWKAJp6ogmqVqthvSFwTzDY6ErCD4wPyy9HKKUcJtHgxgMBWH9wMaU",
  "key8": "oV3WXCPdKEXG2yvTSvygL3CTC5TyARniJQPQEUfFgMQHn33M5WfJdkF73v22ToJD7LZzZeZhWbRJXxBxgeDYZd2",
  "key9": "4tdmCnMrLDkk9gQUKbgL1tuGjYG795AssmkJ7ikbEQuiuoTN7TaHEcqmm5Fw1mgA86Q9PFbWdcUfdmr7gpTwVNbC",
  "key10": "3UrqX5Tg547FuRXQnQqgdJmFGi9UHy4xSLGzu6SaivXHLekUpTV1kEfMAEEKNBkRQcJEveGspqLRULL6Gt1JP5Nx",
  "key11": "3yak7WjnTUgsyhzAWCTWgwrAqwrDbVsN894tcdbzf8QcDR5vR6JorHEqg9cYYj1wji62PU8JDuUnFvM3crZWSz3r",
  "key12": "5kaf4uNX6yyMQANiCSww46NEuN1BewnvqDnG86zQS1nSLpRqgqURH566rPs8Yut61HvbkA2hSsYwrCziZpwGwgbE",
  "key13": "hQ7ALjxE22zQt2syVUVLVSJTrhsRPzVGTCdDy5qUA884rzLqve62GwWVwz9EvFfgT3EDBRda3sG9hs6wd9MsDvj",
  "key14": "4bLuVEaVEkaQ57XRnABb5pwcVEvtPhevRo3zqTuHxSqc1uJ2jMN3h5sK4pwm95GR1zRamv6o4S2PKAy69sYJXxzw",
  "key15": "2skJmjSUxwALC6jvbwoqMYnE5agkctiZa7aiF1QZoFptUXe7d189nR8fvytD7WZsdsZttJs4HnUbFrfXj5SB853g",
  "key16": "3oX2bCxUTHLRhi3jv93ewoMefLVFxoCcsgZwHAbBLn2guUBDmxc4JJAo7CHtj3Enj2PcQqXvoRkUjNYVpmMiP9Zj",
  "key17": "nU4MuiJtdfeUJqBCJVXKHDXKbefZEwBPQH4jeGgnahz2VAVohVwJGqu5qcjoH9y3xQNXpJDUyKbLpU25pgtqfQY",
  "key18": "s9yDVNvNE7Jhy7FNPiBtETjQnom2ZjmqKAxWxhe7o7GTYoWzLUXYQrXUdJb3h51t2khNYJx7JSQivay6SqyqfLo",
  "key19": "sbY2miS5yZKoqNNP43oJwS9ekmQnyTJG2bH84P3n2mTqtXKCxcKfCcNgepeaYbQtLEfXGMWpdqsuTW2qUewzJ43",
  "key20": "49U85Msfi5Jr3vX593297EKWaycx8rt6T4XU8tLGtHzf22TfqpLGAWo6G8nDHDdJhn9kZACfUe7onzzoPRT9wsBa",
  "key21": "h8uCFyuppt8vCGbsLEJKSTTC7mVTn7WQY2eyS6bU24PHNXfqZqd6jjENFUE24mEDDLMk7GvcDrUpaSoEJmDbfDM",
  "key22": "ei8TDiJVSzVBboCzSkP1PUFoomTHtG4wnTjKjwa8UTKNLzXKrghbFPYjNrhrY51KrGBt6mXB3RcwZwALueRN77p",
  "key23": "4x8VwNQb2Db7XyGXcCBMmmYGm6s2hTp7i1iaS6itZiJbS4mX7m8hj9C154W3DVbk61hSPjNt7s5PdhMmsJGDu7ko",
  "key24": "28WfFCzRK8p1QekKv5N6yEy6usUaBdqDXeq5CDXSjxZxHWDUCEAV9QP25nGJYcb7RpDwCopBzUAdjme5yaRvdLsW",
  "key25": "3tkEXXMsqKAJBeWK1JoU8XT9xJV6vC9nuYw4ZqKPTFhrrcQMGvjCq9X9bNqtBadsZ9Ga5DdZ5LDtEdNrmBerkRaf",
  "key26": "y23cbvvzgGfTLRYM2QrA2wy63jMLWQNZDSbUqhASuN533HXX4mfXUoAjGhL113Xj1e8gJu13WcHWDWtFRV5hoYN",
  "key27": "5HwgKGmaJj1ddT98FxfeWnrfNwD7V5GZ3Rei86DU3fMmMVGf4cUYSYjXJsmRHP4YdBxLhG9vqRJFjXRsNCXSQr6a",
  "key28": "5MzAxbDncqg7zLC6QDQFUPK2qEXX19qhDbuYHGBQzrwxcYKXqEHyeFrbWxhuoDf9C6BNKvgSMAeHdbDPTJQnujMb"
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
