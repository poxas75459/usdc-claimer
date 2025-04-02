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
    "2z4MYfGLTEvg5kpPXAXMCLkhzzKB79scDW9rj17otRrWtcyX4jy2fQr5zw4NqrbiygNmu5cY8vy2L6F5Hg5ofpag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xg64Rzw85oTyVXeijWstcbjqW6YRwLb5pTz7Lxm2ih5Em5ttfZiRsis5WwLJN9nVjysm43bXk3AAPGJqHf7FiTj",
  "key1": "3rpvGqzZ5iE1A5Sfa5qzWwZq4ETfJYb1weuQk6HTbNNkZfBynxkQgbfym38AwaSNXy1PfQfQwLex4snLC4Mczeyi",
  "key2": "47VksdHUQAQP6Xh5Ep7EweSyYc9kra5Z3NdFfwXmR8Rd1wmgwQoit2xx3WkuZ7sw9f6dM266uaAPTEQXVrhMwTqY",
  "key3": "2hvWvUEzY2nhmQ3kNACKLHQqrGz3qU2XQ1t22DwMZjMgM87ZoKSCi3CTf8LwaSHziAtBpgyjzaxHCQKKqc3HNzE",
  "key4": "2tbV3jdCLbvzk6DWkDyA9xYKmdrhN1inWowaJTtZUpfJi1cxYy5rcSnSp6XdSDdwhJFo7D3RcMp4xNZofFqQN2pb",
  "key5": "3AnbrpXv5ayFSXDhpxBCo78oBLGg6xbFcDFCWv4rAftbZkUJxfebNjpUBv6vJMWe5DUVYPD3vWA9HTPHE8QUoLtr",
  "key6": "4sr7VFwPH7BfosqRa4KfWUQGSPq2HsYSph9hqivRKixwX8gZKLwYtK27RQYZwH42bmiXPzWGonXzP7hHHntsRBPc",
  "key7": "4FayM4ziMEbTtX7t48B2Fe5Ez1BWrkw1Li4XK92ptBYjGzEiVj5EqqfCUB1sWK5LwjtDucyeUN8m8zEGSZ8yEJNB",
  "key8": "2q5a5349fvontB8D1KnpTdW7RWqF9jBT7MW5zxXJJhRRq4yaLwvEoLGTvVxKjAPNvb54BFgJcn7aeDiD5rFitmBr",
  "key9": "X7jMY1DPo9CT4YBVGegkPjsCUHMeoQLSG4UhWnjevGys5bAyn6MH8RtLmSXC2uXearpjdyWnReVnoYcXUGAmJdS",
  "key10": "676JWbogHsbfk3keuShQtkvAjszmt3JBKpwhNX1tp2m6m83dZYhns8Z3hLGiQqSyvdvbzJjkaCYFndj3GjXwgGoD",
  "key11": "55MjEprWGejTV1yTYwdzJ8E8yLrjFiWRaJUr3jWaRcRDquyCtWhKhW9G8m4Wg9wtxz5MR22BqKqqYsMNQG6u2JH2",
  "key12": "4TbeaC5HjJh4LdKeHdhWEuvtFoRfrKPQuEQyJUtxb5mjQDSEpEdXFDvvkg9VNL57uYVeuZUnzEhFwCw2Ken3L2so",
  "key13": "AAp5bqQYyYGJpttgDSkU7GoRuSyDrs65Pn7REWwg395MptVy998MHrmVqwRidsATk3Qbz5xnj7rk2P2DxsPcHWo",
  "key14": "4SCXEEk5unYqr4RxYxmq4oX9TsLieFbmNMZXzppHB1pv8pRgj94P9tfKTPVG9WMnSWEwtZWbZBVKJ2cwRGvYujDD",
  "key15": "4ZETcPktzBnEswhhe9k6TbhaRVxggWJzhxWLyRmTgrWmqdxqDTvYbWcQrMW9AQgR33Zrn5PDJMsSghhDzo7uswPc",
  "key16": "3A2txbnZi2Yj59GBkNKq4Pg2ZrxexqDUE9ergT9TiHSyfq2EkkT8rs1F65sBimiA9PCM9GRCH7ETWvu2tf1Lovwu",
  "key17": "5gcJbjrWWYzLAnL6a38Q8zg85ofjrNip7udfFh3yCnN91rTcqs922xb1npBgkG9L7FHVj9M3yk3f5YiLiuDLaWvi",
  "key18": "56YPpMAgN3VfzVP2rRnJDxALmEoQEVEV1bVVDHRpmE24hAH8RrWGA3V9Fese281NkLh5cNdQ78fNSTwNfTqDN16Z",
  "key19": "5V6FEubW2HtDoiPuGzDWtckyBt3DhWkHGdzZo2CDisSxFxcVKzEkzuDG2mwRAuXNnCwRQUJfPaCXHL7es2bgn3T5",
  "key20": "sAZDCHjLZSKTeyfeiDRxpgFDZkxMT79viYebqatSYAgAHkaxthSuz92Q1yvBXdj9qaGaNAFNFZZudxbzHvJHrEM",
  "key21": "5EEwZJ1asFTCGAz7HBcddBtKVZ6YMcZiCs5hE9qHj5NXqaQ6qmENPZMkEyhD7HV6tg9yKonoJuLLEKefswjaTSNW",
  "key22": "2Db9rREso9RqRqN6XqsETDXvprFRShVcbzNedXieJQB2yH6eeGuZpztDwRWye7iKiVqNTwzychxsDX7gvjxMmJ2",
  "key23": "5wVFMNvBhua8aY5F5MRQhHqsA7MYabRJu9HjVREhVNceWcpjJ2vbVNeUiXADrx9uQ3TXcyxFxrzVGHU2hmMSLv7g",
  "key24": "3Ea7ZM3WZoaqTH2czFoPfGb7yXjDBkMMMBH2MVsfnYoSwAtZv3pUnqNxrKPqRUzbUeWjyqefgBvyCg3GQShCCP9k",
  "key25": "3kiW3eHEv1yiWnzYk6ecUHb8PYbmvVieyWJXNSEVbXkQYv7FGPF6cggQ4YF8TZwEcW9wqihUWaH5nbaFqZRSpDm1",
  "key26": "4LxB2qKJ651JS39EJU38goZsWf8n5KBB38BQcjsouBy86bBEutYdYrezoXTfYFrMoZQ3w2FEQYb1A4MTgs2BnVY9",
  "key27": "3dFmTf2ZdnMoUGL79LYv3Anu5NgoYf2t1WxNoboDEdQ4CPARamZoGbmsf6VvA4oq5q6VLaHP7dvKbLqULdHbFw1K",
  "key28": "4nSbJRgkUXt7uG75rXgrAFhWXSAWshr8QzzYbTrDdqWGPf9PpHzsAaNojTbSGpcxCBXzCRS2Lo2SPta3BepaMjxa",
  "key29": "SyWjYWog1531pwN7VnpBoRRzbdQ8fMAgd9abVJTJ31nG15TuU5bkr29QgiXmyD57YETBqq2bTTck7K4aNFYTxuk",
  "key30": "5rR26ihhhWLDN9TBwjr9hNYvLkcGNkrUus2u42a3UhDFK1zxgEQvwZ8ypFgJPxdns6ESY7GjNWJUu2pcaPeVxqnn",
  "key31": "pru3DYAVq6LmnSchTDKgrHJb34U9EfR4djqgKBRTsZ2frsVZb7VNTdxK4K14Qy5NfEGZwBi7eQFJRfNjgVkUfKT"
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
