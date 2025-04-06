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
    "2WHvRBvZ9QqJ2cKLGDFtBouiWApnYf1XgYXZxgTTixxX1aReAndaZujskUxegdYBYtwo9WN2N6mZuCceW9GKwcWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28uaZWWLEdVEc26SeToHHUcCvLQjiwzKV5aFEN3yAwCBEgt6uQjEusTTtGL2yrZfKk9fvEErSiAcRaECe1hJSJ8z",
  "key1": "3uHnEikYNUyFoi4oMk9mbCBsC9tBMriAjxVv3jK8EQExFkf87wE2TdZNBUkfmpaPBuXGDyPU1n9cMNfzvFWSFcH4",
  "key2": "5BD6WvLjBrDf4hh4LJtniCiQm25nSXfCmaKi1tLyEqYhNXj9Z2HpSXxtpvtafXcQXgHemj8J1qdkBsi7UiHeW1yQ",
  "key3": "4inCxT18VrkcTt9B4fXfxdCDhCFjk9t6CKuRXCC2T7qx7kdzErS44wQrgNJAWwh1jaDV96txqwR31U4ssRwfwsut",
  "key4": "27GK2tsUnyGuWufRZoHLjzP3PKegz13Rojqw3uqryA8c7Htg7UvQJJRHA5NM2SESX3zsuZKaRw1aEAEHvCcrT7T4",
  "key5": "4D62wfq16VAk4L1EeuJGqDDARjdkmmwwBjfBK3vG5pw2JzSN7sHPbxYcfbeabbFx6ufo9wUMYEBe5qHNQnn1Z6Wu",
  "key6": "2w78biQVH3GdABqfVFXWPf2zbpGxawQqnAQ84dCHr1bSv3rpF8bayebLLDeaJc45ysAXyX8AKxxUNmufrwgRURxv",
  "key7": "3iyBpzenSaHnxmsvyn6goGHU9t4khQnY6MamBvTQbSUnBCTvqSw4C1rT8zkiky9g537Dyp7ZqppvhqaFzGKqnagF",
  "key8": "26SjEXEznn5HKboAacEWAxe7evFvzQ4KvebEFepz36qxdKgJ7hG4tQkdbD55RJphrFNgU3enSQXqtUqqYgs65TGr",
  "key9": "K3CXxrUebAvWhnZifQ7f3U7upHbgLxqwaYnMbtKScNnrHv7Ui13sH9wvcqDnmDE3RDgQNLoALuvNyWU51tXXjm2",
  "key10": "2D2TNNdK8PMhFqFkKoCmRAZH1F5S3AhF2usitt3SgxorKsRkVp8DsnLgFCLVmX5EgQpKmCiwUPNwNNzh6GcKj3gA",
  "key11": "4FeHYai5B7VyvuGPAeGSv9c3vL9dxaRKk9hnbVetrH9icQz7xPQqeRdyVg22K2EVoxQm51WW81J1JAQ6s9MZb5u6",
  "key12": "YaQhRBZAGc4G8xNzdZxbJARu9r51F7EmjY1Xf3f6TgmVbqwy9Kt3q9pRUZhEYuUEKtC7AKngeMY16P95Mdnh4aX",
  "key13": "3udb6zGsTLHMmtS7xLMRkZDvCyhLwX9njA2u2Es5h4UB1TSSmywZ1tJkTfVxC3AkzYMwJKFGk51SR3vvR4FotyLe",
  "key14": "5V7fBYVJJn1st2emTGUrjvAW1GbwxAq7TUF7RSwE3d1Y1vQXmhz4iGE3tEZpqoL6KBvToKsfe8XqwnEXVNYkJp3x",
  "key15": "bnev3VmSRLp5ogRnmAXt7hxcA7i4Xrym5mm8pj4bsRm4wNFNSo5sRFS5SXKEbEAzgZSw1naGXEBXfAQZMBrtEDy",
  "key16": "5Qa413ap4gDMrwzwUm4BiXv64MWHPqrp6f3iaXuc4knk8XyVXFFyYQR5ED9vg2TEp4U6XTkgkrzZ8W2W2kSjxb1C",
  "key17": "4V9DSHdWb6g6RpF8ZwzsK29eG9VN2kWrzpbtWDUXjDq3iPs3pcSBLT8oUqxnwhF4Tpw2gGdzzJWr5iWBxsqs5NyJ",
  "key18": "5EHTnBVUUQjccQJtxiPQkSDV6tV1mV4Ppc2jFprmVNfEFEzsgBm5EawPfQ1TKnCrURQcsEj81XnDGpSWmytDD8p2",
  "key19": "4GYgLdyVtQ1B2Nmfd3wCLZaskepSpnNDnfqS5ZBXL6eLf84tg2VXvQZEUk6s9YyXqAd72hjP5cZCCsnWqTUt9es1",
  "key20": "MCJC2PQi6Y7F4u4r79iXbrFtKjgrGr1yJmp1om1hYnx6G3KDiFwzm24mZ2EvVZeXtjMkJEgo54ZHqYxMqoYghnA",
  "key21": "4mBBcTjeGpivPF4FxfuxpoFF4Doc2ff8We5d3WxLM49ZmtBdGFng8SwA3vyAjjiiJEku4mEui7LU5x4VK8YZNjM3",
  "key22": "3Jv6BFsR5Wbf57eMf5SuG9rr3wNaEbURcmbRsBbK7cD83rs87td24Ghpcz11Md3r9rxb9gE6HZFWRw76xjpJGVuj",
  "key23": "2yofsU8G9DaW7hntnVwbdjHfHSTxLCUnx16H93ajsV3EBhSAmaSocaSLdeZyW67UZi3YDymcNeUAmskGhkgepUV9",
  "key24": "4f8ZX8HvYpHjbSRAEkExRfZZg2p3GvV1sKyVtJrgR6vUc2PXw4N8hjzeQs7kjCQoSfR7EkEFtr6LUuXMqZqLZYDB",
  "key25": "3eUAXQEQdNSF1BtrJpWPBiiN5EiguushbUmBFoX6SwAREJ1prg2rn34Nqr4XS1n6wqavLHhytTkVL68FrQbYkRgs",
  "key26": "5NNrtx99gydrF72qJCuADzMwDJgQra3wswMgxprQn5tqnLEEwjwsrwfqMAwjW21KkKpeT8BZLwStLHqzt8hPz8Mx",
  "key27": "4Zcv2KJszcXfwPvKQGrfn2k2cQsPEgBtDGy9yVX2zDSyoEZYMP5m2Uewb4fTYNi3KWYHmPVQYkzJWinABm3fXzyU"
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
