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
    "gTTdsh4HiQ3nSbxEkP5Aotm7eR4nQHQsqhpXKfTqpW16ufjSzaZdYvHDJRp32dZs2YHDZupKuzMoAixraUxhtvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uFeiAGro2FemCyg7jSvSXncYo4arWb51ghvnBqScVKPRF2USrVHT9thaBoq4LQgEBiqLwrBV61ut9BZgReffYe",
  "key1": "3FSKnzn4F5xowsiAwM3Ka1es7imc9pnSTvdRFqpAWwmDfj1ktt7no3wwVTAS9A195hwHjGvrptTxC1XbjLfbFt5v",
  "key2": "W2YvS8TvorLgmJT5916o6gU8RCZVFKWhmcySLEZu2b89inhVxawsM5McjmzsdZjGJULA9ra6qGMbLCHx2qvY5rq",
  "key3": "njc8PnLm1296zhFSnpzGPq13JLg4MFDqBKg2rUq5WkjDRecEmxjHXPvBGY7SBRf4PmUp5CfhLgwe4uFFdnkUCuV",
  "key4": "5D61r3eun8eL6kS5ar5weJDnqYdmmjaWK59ezw5U4VuaAoVkvwQiWW4gZhrGZJihxiPG4rK4GsuQEGTzsH8n9N5J",
  "key5": "2WpepS2Acex8ksXQ9uNvUtx4ns4W6jRrCH7qjuP5LdSrEXFTYuPKjTTNLtuWYvufaJvZi2o9wznkM7EuwSG7jZVT",
  "key6": "d6cbycebp6u9cpdbLyEusNAHKGqHdhD3z7Q12cPeFKzGAf1G975MDoejdqKFaKtivSUwZ5YAfV9G1MKD21Gde1b",
  "key7": "3KB9Eb4Fd125SAJWDY96yFDtSDFjGYyp2xsXijEd1aF7gGZhsSxja2X5cFDoQwhPj9i2ZTEGr4nWFzrnyRb9d6cF",
  "key8": "48VxkMTSpUnkbx9WczFRpuNeZXWyHms1BCWxqsf7QZCz1KhCV5drVx9MHnP81q4zRqWNK2Exb33R2QoWQM4dXhYs",
  "key9": "66ZaogqS7epsWn6YGPqhsSkZcoAL1er7UDkMySoNxMdd6XGqYo6nUd5E9WnHdKbWCDDWQZTKq9Q11s1QGAfBHb5V",
  "key10": "25ZpckY8q6pyoR71WaiCBg2Dx9YmEsnC3pGm9LYHGypcp2nwbzZR8XGy1sKmfv7t2xtd4EgvoNuFuYcpXftX2x7v",
  "key11": "51EoKNtQM2SWMrcL8tsAwKQnE718cCWqeipzenmLnBVShErK14tmw2mYAXVse3oWsYowZRMBLVRWuAAA7uNmmJMa",
  "key12": "3CxaPP5WPgmjgz3KhDHLiL3q8BS88B7pcHxrb4rubJFGQybz9oF67Snhpa7Nr5HVjzNXYHera36dgWchQbb4Fn2S",
  "key13": "4RASshVn2s8LQau82uLNA3DLhHm6g9mm1CVPxtw8qpBWYJu78vJNPniYaezzU6dAkEag9KcP8s5c1t5k3DzU3X98",
  "key14": "4yHSqMsCZnaRWV8qjeV2etCmV5g9m5BvmEyXQFcU97gpjcMDSYyjYQvoEhr1UjSaqp1mrjRdVvW8ZBJJVvJZqeiX",
  "key15": "5vruNf7enXxKNreVz3tbXLgy4hoVgxgGpyxLtfCweAYxpa7KgkJb9fFU7xgibWqTXP3vosGd2serXjkg6KXU5biC",
  "key16": "4JbYNW2tNm9Z72SfiDENfncPKg5iREJB2PUupw5ymGrTnn4eSt9n9Zxff672tNTcjxpKkpKjigxMo8EfBSW7bKPB",
  "key17": "3bskdi2gG3AHbZLL4VNgitUn5FuZ7mwMq5izNSxWYAFjVcVXRnjo4V91cY5NEMBdY8xiiWduasxWvM78kbpewh9F",
  "key18": "QrtoZQtsfztvR2H543MBXEGqeSVmoBpr55QTTzJqn6HsVhQgAWxzbxBc6tyuP1aJrNqFphiiJTSwgZfSH7U8jh5",
  "key19": "2ZEBSkDVsKwnHwKjx9BgMS8HeLvmbBHCQB2UUi8iUdmG4LmCb9hjzp8YypTefeNvnWNBYrBa4T5cLtvqu6uFuKvN",
  "key20": "3FGiAsKTtiLDKbLNBpNgT4QNxqxtRWxgLavYWGGU25aa3JBBw3dH2zWxPvDjBTsiX3qZtqEy73TmEXHXXpUGtimH",
  "key21": "PZuQuQazct8sYtRN6d7oQg3hry3SKZQRpf2CXSgfwj2pYHvPPhAsuhU5mazpzzEMV1xMYVySaViwSzombPhRWgQ",
  "key22": "4ycAyQRJeEtTyH2C6dTzy7DEus8LWyN2YW1cGNdgQVAz1SCbNBptWTUZTSqLEWjNR3XLzbP5Kk5oypSyee5gsHJJ",
  "key23": "3H2Ta52ZPkE8qQib7HNCguR5wSFMnUsBeZmhboGJjhq9m4kR7Lf58NpdD4d8AAsrFZ3vFS5n5LRdD7hQHahHp1aT",
  "key24": "3LwPfEdLrv3sQAdQNJfRGJCKHeZGdWL42vUcR8BfcTub9sDxHDgKuspCXbitPFCrv4n5FG3TSfjFfnrDvemDXTQb",
  "key25": "2r65u5nT7RimokzLh6yq83R2rhkftJzsSPsXkeXvmuPKMtupgUzLeUP5YerprkwPbbfHZXMxGJ4zWppTQLMtr2Qh",
  "key26": "4NZDmGABnuyHTWQhB9e2vA74pQHidonVtPCEutwygLNCXHXjoiv499v4JkLuZAGyDCocshM3V85HMQkTsV2kYNSh",
  "key27": "3o3QpGXucQhZNxd9vXr5o3fNP8c485tTzrZHjys7kdHjyuZmLNuefuvAVFuogkbMR2NaGBbhnpGo8huguSMfLmrL",
  "key28": "515G6z5SyJHbVcTJZyaZ8M7sqh4yT5uhw866DtsWRZ5mUrU6sxpnShk6G9SXKc6Ga3MHvESjagUBChstLK1xcvt"
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
