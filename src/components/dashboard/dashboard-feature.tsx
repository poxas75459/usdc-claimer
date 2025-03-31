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
    "Qq5EDsh95QmDHG14CZwMyH6L6g3cALtKsWEh45PPjP6j1sF8BzfbZcXic5wD2w4ytcEFZMU9Yvx7YQ1umZ1Df9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5scXHpiwAQ48KeKkaJiiFuyzqLSkYwnHQWwyzg5DTRVt1GQCcE6u7FKZPVGVb5UtrFJG45JmkaFqkP4nQsPr5R",
  "key1": "4y3xBQYRo6K87LFoCS71Gtgh9jZd7SsrL635Rib62n1pBm6qq36kGipwrG1vVLh21Eyh6RSwSK3u4panVi9cmAPz",
  "key2": "2dk5ap8aBWZ3y5ECY9XXeqGB6By4nz5Wrj4owv2hG89cD9hWf6NiduCNdsnR7d3sapswM9q24uJH4JmLMJ66WzZ8",
  "key3": "5EbLXvw7tgko3QAqkc1hQSj25noWCpvMH7sNZx4T3w5Fn4CuzqvAEPCyu2KgGvVjWau9oCJTfLCxMFNwYMR6moyT",
  "key4": "2ojC5QcRHp9vVVDcLTbKCx19Xno5L45ZMd2LDLAem3aSMsEb6UKpKHGkgazVhfVGwne1AELXRnwEg6wtSnT4VS7y",
  "key5": "2KNgzyC4bGbnxCjdQk9Q14Z7bwYJW687iYV86d2kjPuUSQ9xqNv6KuejH5fVNcYWM3M5tjVeyUqFNcpUnGGHzZPx",
  "key6": "43zjybyHv5gPPWTszH9E2eHe5fw1mCZ9Zp6CfAYA5NcRZrhH33GgRBndtrbRaXSAmHdfJBziQbxHTzpFiDPjcc6n",
  "key7": "5Ykehh7dJwv2ZnSy8JkXiwDS8vbGU93mw5g6g79teevZzusCiDczRpoL5FwkDaBVLLpovMeh1dcHePkW8BvS3MXZ",
  "key8": "63fEw1WTvAb2SWDzTF7br5dxfg8vmnrxEHYjZPAANSdd2acYLHEn4vqWFGuPJSxB4FBG44P17nsD7RvfnartBUAN",
  "key9": "2F6KXPAhK8e1e93ajeEZBGjGL6QvJ1xs2ryotD2SbHyb3JvNgvvQzjQuXXmrdG7EUojzgjcrvKdLResQV2pXV2Ex",
  "key10": "59hFgGxdSbaHs9tUAwKjVU6K81WSHunFdk5i1ZvhJD2rkJZxAWqoQGjo2fud9ojLz12kSuo1tAFzcGJq5kkqvmEn",
  "key11": "5HN94zBhx3pSraiKPeUM2znKRdmbUu4Cxi7jqSUB5NjQndQL2exB7jQsp7tCqvmU66rsKVE6aEu3STxLRDJKPogB",
  "key12": "5YeR15tDbTDMt1B9NqSpR6E1h7MTSxjh1qybqGgyzeBegwdthkx1XVBV6Qn5GCJ81j3gicAQtG3BDudQokxGLNd8",
  "key13": "oDHnm1JaiCKRC3nN9P2Mq4qSKj7sqkWdESi3SPCqNTP4T5pWFXLZWCp6DwbeYkaY3sHaV9QLYPe3KXC4bAn6bHZ",
  "key14": "2AtbTWcQWqohvTuJANy65Uh4KeFniq7qhbViQUWsLc8wUv5nhqL8NTyZu2hjnWcpBkTRhXoE4rcsZzL89GrZGk3E",
  "key15": "4tTrPuzbPXMv6wvBDSwuxC9Y4Wc9i12cUBKyk7BtcwReRzw4b3Lsh6bQdE27aK4fq3dKnZEJ39EfpXLowPsKXZq5",
  "key16": "587qFBQdzo6F8z11RxPhLi9S1NcMnqcSgK9Chkhd8nvjRQCw117W2JCaxQkbPuZyv2hwLDcdtnr8oFp1ijrosRzr",
  "key17": "5eQhZu9Pr4mJwKdsqsRtQHvVMzHJuCaw6P4xWzXjroJGr1KhtuRQUeAsg5nawMz9rnVrik57exX7UwF6pyEA2wuX",
  "key18": "2ukxSq9F3fGu5ox4RhEfFLvj3oYEBkkr5FaxMAqnAXwo9WdsYE8VaEAYVG2dNyUzrktNtA7uzrCwpasAyMV2dyPQ",
  "key19": "3CNtnHnsNcw7fgmrEr6pcCtuHFxJnFkWy6wnq937hWTBEoMyrrodyaSGnnsaSewUVRziKjQsousfYfSYUYbVnjvN",
  "key20": "5bSNEYfbLyeieBdFNVZD3b2edm1GRAoeyNdLN2w5YGn9hPgUxw9DM5MEu6v5qvBLFBbtPG2E9eR4KP9zkw3aPmGA",
  "key21": "2KSvwE7TjTSY3ZW3sWc4hKqXYJrTRaxnY3WxyqH1x4Pjrk11RFfd54TXWBnV2FRiuXrHYNkvuHiE7j44JSMcLxaD",
  "key22": "4V8VdmeKsgmVz3d9DnrSKpQAzk91QApcU4jBuxdPMsckNyKpfFM37vWSULgnwcTbKBkMkb3G6G4pfrugHUjqP9x5",
  "key23": "2FnA9ax6qHUtBAMEdn8Xh5XTVjkv8WA1DYRBdXSmH7GJRBjpeRsiZkWniQTzrdrGiJffC1Mq14vuF1PLKB3wHyGL",
  "key24": "2Scg76j1EgRJLokQuvUmBrc4ZqN6H3KAGqouM5rAnLULG2QifUCiQGvS76s21anE9t2U838A8QpAuN5kQwvz9FaV",
  "key25": "33MgBmpzTZZVLmP7JwEimnX8EKtAnLGRL38xCsgSX9x2jWQA8AV27nS5gNveS2Z4jUf5GF15B1UuNbkngX2ZKw3x",
  "key26": "35nRrLzZn87PAWoykoYEHJadnkNhPQ3ga2Km7uiuH2y3XULF4wMscscy7kNq9BfBrxiTE39aVgUcX98RrRCVfomd",
  "key27": "3mfdmLwFhAkwKEybnvJ4qKEDB43hkcPBoDqDwqAJhrbupqoFewRSTYc6H8bDSEixS4esfUvWE1mqdDB6QVX1hUZ2",
  "key28": "3ztviPXfdSnpBETE9bQWJVYM4jTxd3Z897PmgLf2u7bgE7559CeZQk8eCcxjbkPPLVhtgU79MNmUGqMJtTQg5W1n",
  "key29": "2iMAchJ8BmL4WPiJ8aYoKstyPQ4MPJofrpzWcVT9GEhBMyYmoUjsZHp9vD37TtzVbWTLgaumZsHdbK7hH4wk54df"
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
