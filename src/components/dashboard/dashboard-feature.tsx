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
    "2MzL44YgDGUwMhnB2i7JwsaLHKSRe47mqCwVj4JrDVhpJLRyf2DU4kBHWBQ2ijZnGdQMa6L5sUKsZH49TxZHWNET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9FLv1LW4Vo7JRhHyAwyzq8p9FFu9B9vC9XJ75PkKvC1d9rAskn7DL3L8jYh31buY4euMen7YEJj8RXExJgB9Hz3",
  "key1": "jzmQ4SXykT957HEqGReBjmYGusPkXBejmh7vAHyU4pojKWaaEsTVs2FqF1FM1cu2uNqDw1gvxvDD668p4doku3K",
  "key2": "4rmpUzGuGE46am7YfYVKkbiinqrGpz54GyMFc175dh7FjifyndM4nRbFD7VZ1mfWiNJyZvSdVdH7AhqDoWKoXhd9",
  "key3": "heFFNyPvmTbDbGiTBGzCmNT1w49fGmDzCiL2NWDZFaqeg19CdRzsTWBgYGu2Lw8jhriSW6Q1i3xpFgziYdi1Aan",
  "key4": "4moUskeYxkk4a6w3E4E2wz4TPS2XWk6C5QHz3VcpVyj2X9P96BcXLDPbcSHRfPR9WsRTWGyZJS2NTQ8fgxTfcfAG",
  "key5": "3Y5fRaejZUQxFRRQZV9j3vKNHZc5gP23MFF19s5LCqE44ehkMAJknQpA7kMiNr6Liy2oAit2pa7VJxtsYenGEBid",
  "key6": "456EzvrvAM7ZbKCG3wfpGGrBbs4xst52jomtuojHJoTSwaLHH8VGK5tPk51N1euFLFjX5is2Rdy6pjkt98Y2x5hn",
  "key7": "62QtkE1kFnzUjgBhJFRCyyxwVnuEib4mvUnGKZ2bp1P8vLg8VubDWK3wHDq6Q8z8p5KMSrL6PqpGjJCnrv5TAYUL",
  "key8": "2mYkUDofVothg2iEgAsptugqxWFwRuy8uSRQZwgej4kMbEXUDrjRimeNt3TNDjEY6RD851bngQdvJwFNmqED4fBr",
  "key9": "24tZb2buMigJyxDAhTWnXGbx4oepEKbbaCBar7GJUG4aW7JKHWEaSx7YJJcJSZZEcKe93HQCeqUDWsQxJpJe3kTT",
  "key10": "46Lxy9b4v964o4Vv6AwuA854mJwBhaGKyQ3Gx7rnYuH4P8yzJLvKxnbk6SRWpKhtzmPNKBQYZyiShMDjiRzMaX13",
  "key11": "AAnAfsuJR1tmxhEkxNbn41sHckWyDjKPfyT2BESSM273d6iq5dp2afzpyDWg8jA3p1gaMZ27W7jJKykUXPLrmDW",
  "key12": "25xuxtTcEYWJELJraYSyiNKXRxtNMwa6sLhm2SJk3rFEvG9WQcefxyRUBPvD8jZ37VTH3vy9yhfUojSpkcSXHEir",
  "key13": "4rJ9LCP7DEYMNabAPdmqXXqdYBA4obespuwDj6HZC7GNXnZCkmHkELxoD3RZFX27V6u3nATBo2od2pz9kAmDCmC7",
  "key14": "5q6e9BxZgRyZy9mTza6sAjDwNjGsNm9ksTM7Na6CVfcVLk4Nw1g9U1Ra8c6st6nokGwfdvF8NDLXGTUKJNmrfwZj",
  "key15": "43TuP36o6TCbn6AGUronrz9UD3hh1b5c7ZvVqc5oam31cFEim2W9G3zG8HXLhz846r4aBveyDszj3HmGUMsK3Lqf",
  "key16": "2JuF1fWHdRrqk1XNTbGMev65USFnmqMcaSTMXxQf614LvrhkLf26k5KKnd7poGfZN4vK4Y1xLpP3N4xRi34iiWEY",
  "key17": "5mCdsDtsph4UtZNrCQzAQBdALFYnvVFBJp4CXWsLibGyEhsSx1euoZM37hwTHEXqsti2u73nPoy6yTCMbjJZZHXM",
  "key18": "hUtdBvUSzhuuCDhreJ8AsPqbuZGyZsCTt6yCcG6beZHYQdQS1Bn23t7poqcJNpCZXWwRD43NJBvompTDrY922GR",
  "key19": "2f1nKv5wixrRcVFPd41c3CR2xtY25Xx8EjbcpRdQj9GjnXuUjRjBeiZxccKQjBob4crjSEwoN6K8NbW7jG5MdmyJ",
  "key20": "5VtfZgT254HFayreL7JXgRRe6bSz6LdTr6qNiHLzzizxq72fkHnVDLABJJgh3vD1hLzX7AhKvD86zMtiCWDaCQJE",
  "key21": "3dWJ1AGBZLAx5czYmHX45fH4JtaK9rMhpGtPqFnZ16wGfZpEEdC9nsGCFQ2qzXHB9khnbTCicZkZV5uFzBqF5it8",
  "key22": "42oJE2xt9GJZBZs5oFhXioNhkDbBvPhKYUy7h86D5vFuNLbn5P4EqMVJfeMA41tLoSq2BinQrEnxr4YZA7mnQDeR",
  "key23": "64ZocNU7PL4U8EJaAiNaK2jcjeTMm35KZvRhdVcheJp9EjrJCVjZqctuJXZ1gT5rnQmvrGjrr99hJAihYMwZwNdj",
  "key24": "355P1Rv9tqWtPUF2fSfaAxgjLde4aLvzZqCtzD9DCJgsqhdNvjk7YBJtZmqfJZdraxXnjsDtGtqbn2KwATvVjRsK",
  "key25": "5PchpoLHdRMqoRPLn4k9XHiKLAyLFdekCCgoAHKxULCQi5j8AWbS5FeYWDfvYJgYxPYndQNC9Xvsf9fBe6NoEGhV",
  "key26": "3RpPg1AuqMgHfdbps7T9rR1QXpPtSy1KWwfdhK13VBSscCb7iEEHmCNZwz9v4FSi1e65VDiPjdgzYnfSFZHM56tT",
  "key27": "3E6iWTg9bp44XCxuF2n66XScpLy8Eiy1snvaTUnQNBrhQJk8FKCCSehUFt65qWpfTwBs7QxKv6Wa1GugPkptnbPz",
  "key28": "2RZ5PRnSvdnBNiC6Fi8dA6pN8pqLEad5ms5zTBe8x1H3MiupJD2hoVi8b5ByYJsNarYhTaecamum6X8YwQkeuXg2"
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
