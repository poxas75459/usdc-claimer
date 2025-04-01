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
    "2TSd3oAu8aQRppFB3rdnSvNqsGAe5kGhEajNMYEaJSsXY5pHQGxBewMBUBy37aU9W838H88MqTEQz9tgnR9vVTn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65JgWvRdL6M5HubGRPkvfy2Xv5WEZQK2752zFY4ChVTTfR1WVjsqqWasANoi3dqF87zh92Z9cvaCAXdC9zyeGYzw",
  "key1": "3QNF4bT7HrHZEmNiUgH4Mh6r4BZXZRYrGyjVhECAQ68xP4BjQ3FQo2kp5eCFEEQtFkZ5D4TEJtBfa4uR6ZMv6m28",
  "key2": "4KcFAw7gtbhxcxzrw8P3SBELtX7kmmXixwh66ybgSjoBYtEKrNSba8JTSK3vWwQb83ZoWKnvWChAdyFzkpgUAB5X",
  "key3": "5hnkkyXofovWmA3mG2vg3cW34EQHYkfSV1USYXMzu1MX1uDdUYeHhjp4dZdhTK8uuHyBf6mxZe6PJYz4mVUuvZA2",
  "key4": "63A8JPkpdXx5y5vELfAd5Z17cUpW22oXjvyzcsQsHqUGpK4jrWG5NN1GPYm8msM5y2ApYwfJsQyYkAcmaFDud3Ck",
  "key5": "2hZEEg5mFtAD6pwy8Z8aKxE24CFnxD2q41WSVFBQjuJEgEC1zrTFycDukorCyT2LoTns2X7fkLE4EKicNqRWz1on",
  "key6": "5EQEWHQRKkaG7TKQwPB4Ba3vtUcZZ3qkenBhZyv32zt9qjZDGyJTkuk1z58vpqhiAB4Fn3VqnPXTqX12s4KKzNiA",
  "key7": "44C979UYKw3B7h5Hn9tFwypJY5bVkEdGcxkgBAfcpkY1gmuGoamsgngwE1pUVNWCxgCdDfzAGWNrZuseJXQnHL4n",
  "key8": "Y5752vLymUdANrUkQN7PRu5WQQUubGevjecatuftsGBSmbvvrZkCQnzG4SVQV7akTdAt1wzmEAPAErtvk38F8yK",
  "key9": "3hnJXtVAZDNf1yYaVmhNTJtwizcoBajbnpsthq8zkMUPTeGuBTFWyhxBKxVPQti3GahF38wLTN35MBKqLTT3vsij",
  "key10": "2GSri6AWMReaqtyqJGfhd8xYd47jz6g5gvjM7BtEo9hGuxkVYRBMP1Z1pF2Av26rxDzMsKAjXANCMjAy7a23cDSE",
  "key11": "5BeZUumxhzCzBwbUfbqa78pvTSTGPSdfby7BifqxQzRTY9bxGZpWwt7qPugZFCzic91Gq2EMdVoxmRJNRbUpNPBk",
  "key12": "4gPmMvE4xuvd18r1PUU3WMVLdBmJe4JmyewL1r2MT3eFJPikSCqF8jbF7QnMa7R4RaTNikm57SK8CCNLYTvsBCw8",
  "key13": "2pNYXYw7ntPMg7wcHd825cL8TqEVLZWVheED5k59ZCWSdQrBqkgo15YGVpiX1karb6bUG8TESdejVa4jpWpXY9iq",
  "key14": "4cKxFhvXWgqQ8oQZH2P1s9saUTX4cEYAuABBfPA4hyG1XCnr6LVTpi72Fz9CyFA761fhHBxtR7GiXgbD17YwFtGS",
  "key15": "AWASAKVSe44TUKkRrQ896XknvgBwCakiRG23VdbnvARawbLF3KM12LapGMKBtkSQeVu2YKqeS8JDVMs93VVj4TN",
  "key16": "2CQBhZCQJqstmHXFzv4u7cJZed1SQiHVDx9xhvKe3henWkGJ4oQZDz8kMAGjuYasPp1JzaiBagkKQdJcKuHmsCnT",
  "key17": "5dUyLGRwDnf3GF4BqEd217hoSaDWbY8bB1csPe6wp3zGhxY36NapJA2eCYyrbmakiThyETPCcCc7FtspeW5wezFW",
  "key18": "3tVdsTDGGXYbLyfuZHBkCxWpgsMBbYtb5JLfnwBTjN3K5VoTX7qVShctmXLpvdLWNeSPirQS8gsfqcsyGhspzey4",
  "key19": "3uX23pXLKC6PnPJF3LSHrwA7Xaki2uBJMY3oTKEVHnWnf8S5Xded4vbgX5VtinDf9bXXt4doGFrWxpxEyc53VrEd",
  "key20": "4WPCEorjt8UnjpoxxQ6RuBE3RTr3trXrR6wLy3vz1pcK6Gv2MtE8crZumt7VWzuXWQHaUJgvhRKKJtCd1U1e1yM4",
  "key21": "rYjW1FBSuRY2x8zY72z4KQHe7UxqCadJ82eAXrjkH6gXMudN3YAngWekivJPHgSDr64j6TdeEkcjpaze7AVBQCp",
  "key22": "5bLfR46G95UvphyLT2osfHN8BfBKRUBhqh1VUoaCrCqJwpznG3EKAEKBmWRGeqwH2HdHq65a21yrxJj6xWrQiRbs",
  "key23": "23EN1PFJExZ45gKMPqoccm7k55FCoMyajDZyvTs3ssNyFpLYKGCm78Nsvq4Gh9k9VW7onStesTrKZmkCfNxxY1Dt",
  "key24": "3hKeG5tZC3uh1i4jFqdDXdQWvDwEBcRuRbberF7KKxugvns3VLTFwhivB1HNxGFoose9qcYLJPBoWnf2zSevPRFt"
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
