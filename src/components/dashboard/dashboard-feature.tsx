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
    "4zzsuNeGGsKZdUs71L7KS7Engcc6GWjeBHK246XFm4kyCs5KfEHjLgCySyeyToEeceg4CB31fU5iR1FoVyLSw1cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KurxWS3oadsakuEYA6vzwY5PV1xcNBNgKmZtRC5RByaruLX7JnCgbEKz4Ys49BZQZgLSBeQMdXxiWhSQn5z4zSg",
  "key1": "5u4NQXKrogRF7uRZwpyosNedp4DgoKoTLuBiLiWSMLdnjknGRHAoUFjkapwmNvwEiq1U2zhJV8jV16GuiL6u1Ffq",
  "key2": "3e3LTx2fmmyP5iZZb55ZCaGwsX89ywWY7Zg8SnqFVvvPjFcdb6kCdHMeJXfPWtdSSVcyWNUoj8i7THP5zNzG7Sm8",
  "key3": "3csHSytikrjkMj14yZeiiYSNkZkXxKQjL6R9p8NwseSxBni7ZNp1TVe5wDZn4mwJqmNn2VnoWQqGZRDKGmBKBMBN",
  "key4": "3SucjYytJQtEsnq5AX7SfQyZLiw6igAv7N1j3tri7KGiuM9NCWrHoLGR8gBgankZRJZUmzrNzpo7xS3q3Gxqs7Jk",
  "key5": "oLXFHJ1un4sY3xXk7UVQY9K6D3ihByDL5ydU1wztpLcbvyuPfLv3G2UxVLB5jrxyqhcgYWUiEUkmQEnxm2rzHFz",
  "key6": "4g3cbJxAPM8uh7YZ4wxq76rFoNfkqe5RrfXcSifCJNSkGMetueWSLFQMYpWzDeTXtULWmPARcKihQU7tNNrwmdTF",
  "key7": "2jXxJwpPnSk86kGDyVJbfMLrB6dyVYJC1rKcbUu6Jhns3Ae2rrvwQe2MsoTehLyEykrZe9msPDc52Bu6JGzZWPB",
  "key8": "39iu1YLkNA6V4nynXn1ib4AxnBSqT9KRBdHnrAarw7ru9DDfNFxF8FbL74mFbRMR3YtvYk84BXHBwnhXeVQ4xrgW",
  "key9": "2EPBG1PgMMRH27Li7SUW2aREtrGFkPjCz6iRZ3Gi1DjdM4h7mQZx1hAzQfqrAkeqQGpARb2gc9VbwttTVnu5Ew9Y",
  "key10": "egz8qU2ZuY4kKABn3sPPNjhgjs2DeMYQnbqHtnZ81p1jEJPJgcpKk6xMM6QsUQcvomYjAt84fJDUsz7zrdB3ReN",
  "key11": "4Ua5LBGD3LW4s7e8ZQ9UAdohgWjR53yrhgwCgMcz5HeetA7xHesFfsKMSrsndvsUKgAjag9tvCy8jvFmiPZCunFs",
  "key12": "2FZ12CryvxV5EazJGwmNj2NRiSfyvNpgCfhgBHbg8JTgH4qPwjLNnb9rxH3ZJBBuPaKn4rqNAkU269QkH41hCBLS",
  "key13": "2FQjUTJpCwwTNJrqfRJqCywZyghXy9uh2UZKuZgjFMf2aTpkdqvyCbMkZtToSSc9SURrwkUrY22ryFuJey6He4kh",
  "key14": "2t2eY1hEv91ofEJvssBXDSn9N4QE8MiTmVdK3X6nSMQhAmPdqcpiukKno6kShQRLqSjRsNEsQKvLdZNq1wHDQ4uW",
  "key15": "44poYviZEGwWXjntGmW6HCBtkZ2WH5n85Ksu3R6gZnQYdxL2XtsuKWtvnhQ2vEyi8J187Hr285UPBUHTcB4Gv49x",
  "key16": "5jnc8cbkJBG1sQGdEeDMReqbXq2TwpJFfrYHhtQPRcyT3hcKnLyzsM8gSK6WLieMr7bQJSQxU6gFzStiVCnyhjYj",
  "key17": "5XB2KEtkgVsR5cQWytSxnXGtH2qAEwYYDc9wK3w6ANcoXvYsCVB3eg5ybhKpzGP4zGCH2Jf2761RutTR7GqeAj2z",
  "key18": "3AvnJY2cSQyUdH5Zjtg2CPXhhBjRhUSzTRqPS45xbcndLwcTRELRdikScHL3xiCGHyCnkYEXAGxsoDRuMjrvb1pM",
  "key19": "4hEWA4k1qLrT3b795xjKbb17dtptJtbupxgdtKS7gZLFnQozXkrNpvVkrmHkjsxM5rZFQpQVqoiTnTYn3JRAyaWh",
  "key20": "4NjHmYTRKrSh6YEqPfj6ToCrn8A2p6HcT2dT3G3EdiR1t3EcMu6sS99ND7DQqv1Mh4FpqiPfwA8zUXosGeQm6ax2",
  "key21": "4PCt7s4fkDUEaXPXqpCcEMz6TWFyfxFvaF2RV7htDVf6nuJ6kj9hjmZvihMNCF55aXK2kJWSGiPpFfpTz1vpzifg",
  "key22": "vReZu3ghBWsgbYsYgtAmAr6rRucjM7aqewgY3DYgRtmYntSjiVqwjm3246Nyz7o9TTz87Ed6XgAedAvJYhAevTu",
  "key23": "2oAkbnFrMJxiXhRnq3nq1Nm6LPPQQSkvacAqkGQpGpmsjGS2iuYfNYCPZypgjAMW568JgFDkwa7UmhPnKBQdhU9P",
  "key24": "RGuJ5E9hVNMN8MT8KFgutQcPsmU6yUBZq1gm26ExdqMw9hqfa5i4mTtweWpMg4Z7aEigU6JSBvV99v8pHJ7jE7y",
  "key25": "44ToTeH6svNjZGgKUgBLkGbZW89QWUYsXmN1sMfBpnebvPxD3QSqbaG4WFZia7GEpu5t1FkT5PZCXxoAbbRfQXQV",
  "key26": "3W86JE6gtztGAYAuvVtmhYiX1zrvc6Cjs1G2kaexqn4N1UVF3nPHY3G9Xc5Kp9hEK9wgxvbxfKzWzRihWnma2J3s",
  "key27": "4No4e1wM7Cq3r2UE8AjdNp4fGqHHCNmuLLdLJV3712dvyQMz5WiHDAfgPakoZYEEXPcJSWNw48ahY49geUDgvH6N",
  "key28": "2GuKYxm67S8csEavzj7rArnwdckxTwx3ToMCE9sPn4fDwtWt5tSNXnu4b5GU74yQA518qJnVk135iLnXY9RcG2yK",
  "key29": "4RTz1RGKybznsJmL8QKmGvcb5hMMqm1dxZzPhGDe4DJvxLjN69bm2kW1MP1SB4hSPwJs5QzsBTnDLWfrM7uSHR9j",
  "key30": "3eL8d7cSEJt9hp9B1cw9dPV2GmmwMSV2SxRz64H32iYMxhTJs6AGWVUuiP8WuMm3wh7k3yKAp6B5w73Q4piVvAvs",
  "key31": "5cq8aRstzYzzyEPEZA31tm7xFkKrHhuGnLv29DFBMBjp3sW7WThvtfPcHiF25d3bCm38NKnwDYwhv4mEbqbrtHFw",
  "key32": "3idhCac5PUT7m34dp32F938UrZEqGq8DM7Zz2hAYs7JrZVSt5cCbMc2tBoTLTxf8gxZn8fPxdTKpQ2WiGoumxjgB",
  "key33": "3D6nG47F9CUXb5u2p4HgdU5nXQtRa5F6kghU73aDjdXJ6FqfUWPcrx7gqHUUoS2xTEZwh4ES8hfgF2sNADnvSLPp",
  "key34": "4GRGnoqSMDRm2CVXDW7JcCXrWAWD5VY7fCexwmGLwt9khWrV58SahLud1sXRtXMzV12GGFtYEPvcLsa6DSTobuDD"
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
