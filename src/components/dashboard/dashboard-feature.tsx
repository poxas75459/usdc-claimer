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
    "4sBSiiitdm1QRCsARRyRScR1fX1ug9YNG6uLLAiqSQSyxV2qQ2Mn3zEoL657VWcBteptt2Am2YeJgVoKKDf7uEjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qesShiUSC5QGpEsCimZmBYTykqLozMXt6sh3sPbEEdm9hD4t6nC1H7nvuu31m6qHb1eZ89dWv1aSY7DPVZmJybq",
  "key1": "5mPynhDwYahcWC4CxnUJ6161B4ooaEFByf5b4PGJX7NkGc62rp2epMF8iUYfCTXnftW9asSekSwY8XGnZuZaaQfc",
  "key2": "4EiEAmt6mMaGjQoMcqMxbWposGg8zySpnXhuJ4VPPKxzkRmcyKb7iPa9KeBbw4DY2Sb1k3xNVf6FUonHpvEBBcog",
  "key3": "4sPBoTmedT9SAdH7Wpedww2SWzUCjpnHTWeYmueUZc5ssbKPGK947tnY9yHawBWT1oF6tXmpayyLd74MFt8SChGb",
  "key4": "2xr3eZNTHcPZoCxGhwTknACQoeF5NXANKjV2feREkRU63cHcqogY3V4CQA8zRScqcebk6pyX5RmK4EhHmUGuhikj",
  "key5": "38W74ZZ3zV3sWMTaqMVkyvgwHQHXAdrPiToiVYU6vFCkRJyuAiFbKjiWSFNnjPqQpUGGdQvSrZdVPmBxsrw27J1M",
  "key6": "MMS9kSUP6xArMGsdouJTa2RiwvWP64Kboh2rnwP5rRXPGhySNk899yMtoh4CvXp3v922UoaryWHocyFzQLNuYcx",
  "key7": "25rCGKF8hQxrZdLTHqJfbtnQ63uAwpEgiW1836ma2WD66GEPQajqWaQUAZMnTEUDXUXrwcjVUeKuiqiGYkk8bhxK",
  "key8": "2vmb86S5ZucyySjZXgZbaMrSPcCpXeeASYwJ4zfswu82BK3zxDNRW5Kq3iE9TbpuhgbxhxJEWv82spckFejYBPN3",
  "key9": "46E5Wu7J2Ady7zYaiMdkgUj7gXNRqFA1xVm6PwdqDdn3zhmxWwMjqiVtNHs6v5HwjpjHJHAgggwpziBvJ81Lc5a",
  "key10": "4vxDpzBidh3cQxRtMA55Jo4WS8YuM7qB5rKHajGxFJnseCkg8txumsNyZCmaWLnsSobQS4sQthBWoGs5CuRXr5yw",
  "key11": "446BLGSKaks4QpexmtNrrf28TH88hC8q4MCRdonwe5bDYFh2UsZseCbVFsvL8uzR54i5wKzNyANP9JAKKrLS1H4f",
  "key12": "5YExzMDfzRKj2Tu2rfMzTSztMydLX4S8bMUZmBfMFYkky8FSZSNtUTreSy1qiBaBN1kVZAPBxxjVceEXmZ32RCAt",
  "key13": "iz4QeFyC38fmcyiGuAz1TJV7k8gQHnZTv3bHbC68s8AbSFagMrdGnVjYdNB4XVY28oV7FLyXCAXCmAtbRHQkWzm",
  "key14": "2dDhwzRNsRLMNhHY8N5LjqMbne8EY6vy9m4M7HPfH997oWg4jAPw7b4NJC6mKmUbSbkavBVx2xppjefQVf3gh3z3",
  "key15": "2ntPgirYzTt8pwzAXWwgezLKFcG3pmYTztDQbgHYtrn2fW9waVbgUEznPuSzjWNh2iDYe8nmrTubCGXQrrJvik2n",
  "key16": "5fuRSsUpoJFbWzfPoHcA61kxW2y2MamBHkJVGnvzKafzvPqToJjcGvP2xotVAMLsM4NKEJmjRxiGzkhoP25Axpgu",
  "key17": "5m6SKufLAgVwxB7j7uk2ghgS1SqibMGKoyqfoChE1NqMk5JHCrvYGvqfEaNqhBNQTxGdcegRjjSCD58fhFuPkjVf",
  "key18": "3H6oqAc3eqnyxNNpej3SiypQjog9uHFgRe3fk6nZ43wj7u2vPJkv5KXPngbxLj2Mr98rMKs4hwRAAJPEa3rmrVTA",
  "key19": "2dymVuK9JWf84Sd9S9CXzAFVE5RcPWB6gJkEsvUqmx2xjSyntFW5grx6Y5tdwGnSvHtEqCcxyEdpeZzYVz9xsMQ",
  "key20": "V4a8yjmu7KznthBzpcU47BYNKKD14UgHc7f83J7nuWU7rd5abznaMwsz221J7HhVHUNCXfgawKPvfiubzuvMdgW",
  "key21": "4VDf6q2WsptvPeuvvAapyvumtt48Njdd1UQpi3wUBaJ58L6vaZLh2c7q3XAjHdp8kbiM8EWresq4nbgJ8quhqGDb",
  "key22": "61mZmrrJZEyKteHNWSWNLdSzSsC1epuyEz8zkfCbvZNHCw5JBTTX3fcYhrUkhnw5LxjiCDoM9GX4zraS6h6ukWLV",
  "key23": "285HfVQxzpY4GfJYoP7iyBuVakJM5iZjXhNVgBoCqcSDnYrANbsEhHhV7LKdPgJSjS92seeyhgD9YwU18bedwCCu",
  "key24": "39n3BSHmKATV3AtuZ5Wxn3aHrau7tgSTKrd5RFqyNwKT128oCQi7YcTq94yG5EMib2pVUMxRDFv7AbzzHNPb6k6R",
  "key25": "bU4Q4zm1xzpziaYe948N5pmbimYAFJc8nBSaRrEfLeijqaoYAFueiWxr5mvdGFyU4Axq7Xv4iFSSmVRE9vWozde",
  "key26": "2E6Y8dssGJJKRsyEUchYRBgpsWxJGFrJLywFNTJh9yM3CtwVnEa9pJT7VtCgm7kH75thNfbZGB6BzPjeuVSf94ZA",
  "key27": "2w2t4V8wZC3NUaaaHkHTbGcEBCsUeT4fWDruvEnbxBojm7rYBWJFfTVRJbVxZ7TLmGTCqm7epP3cx5xiK1SELA6E",
  "key28": "MnjcfUe6aY8YBNnWVKBuYaY2rEnExPfKnKLxsQaHQmmxUxpTfQw1PRBXQEdVQYHZ9NdvNwqC94uuds7MriVeuVs",
  "key29": "55k1jRQca8YHWxfyqMJXzAGp2g5gh3XZFCPbHfV1UKdWpwPnzGaehHNwAXQmaRSiqkRjpYPs1feJz61wMA3ochY2",
  "key30": "sbEkGehTY3QDyYsC2acFGj4ak9iGBM6dEG3Zt96o1m3PfS1KDnCt6Cmp7pXKeBzqe3zcHsiLQoEpQnJunQwZMLk",
  "key31": "4WfSQ27KdQLW2zGskAhtcAKVGTLhCcQoXnwyoioywJv5QabcUhqfB13idgUf75LbLJiZvVPFkaN6ogP4prtTJwjN",
  "key32": "3RXYNDphwnuf87vYDLSSBq18aQKHMyxoYzRmpGC54eNyapvGqd1i7BokDHPUgn9DsXVkkHHFyA6p6xwjPnBAJSQB",
  "key33": "44Us3cuQiQ3U4pLYB1fEuQjzK9bHCLMaZaLeMDjjRQ7BZfpKZ3NbppvxAbUKuWnnbAZSWqNDBx7nyvxijLyeaEUF",
  "key34": "28jejd2uVe7VGcKXA9eDtM3DWaYX2ADHSVwVzG3id4hvHUze5fna58QZaqepv4PtoePymaD548ecChE65Gkq7chD"
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
