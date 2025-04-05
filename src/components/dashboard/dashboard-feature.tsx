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
    "pfLxn1Q5bMvkHvFKg5KimKYRD9TvRi9XqjKUQiBqeDuoKDL44LxPay7icMKvWhA9rSaonCeWzV78E4Hw1Bg8pvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2Vb4SuoQhmtB6ygmYww4t37pj9u1EmPdtKp9kVBwef1veRnZ9P8es9Et4JdRWG6KvJfbee5GwCCEhbae2WJTeq",
  "key1": "9TtnXW6gMs7YFknrZCiz8yhEpN8h1SHwwupMHmrEKMCvg8GbctQQNSLG4DnV63J87CEuNvqbWQ3K42GNsGnqjtb",
  "key2": "3NZD4f9F7VE6x2HoZ1cA8hYWrFEu19suaD9UYrJAj3KdHWKdp19PFTVK9Do7v4tW59Ze2doWmScKJBB1iLEqroVi",
  "key3": "1py8eSmnpC1JYkQsqZ6TWBujqt1N6Y6nkQ4u194vN6YAXZ3LQdXKL9n4yCLcDxRamokjWFdmHj7x6xXhGut3ECM",
  "key4": "3zSS6CgBAZ3jxToeTzS8RdkVtqdkmN6zSENAWTbfm4zGMi14hZskVkcbG9h8DVhZypnkgj1dYntoqgMNnPbTCBsY",
  "key5": "4fBhxt6CvJqMHzXRZiUaRRAUH9JcxvAoAyoKE3JsG8ZGx3s4ioE7Cwoy5aETnqysRUVWRHjZ6SKycjjBk6FWgsCZ",
  "key6": "5pzZNyWppnxTLVhC2M71YXazB1VSo3Y6epH6Z8cZJFo7XZ7o1DhmqYZ9pSkm24KL4X1z1rdFG5bHKbndumrsQPh1",
  "key7": "ZiBYuNiSkaxnt6bCuPH1RobtDnhKTscbW6cBC8zWiqrg5z1CWn8LPL1LFamm7QsB7xcf86kTCnVZhvGr4ug2yBj",
  "key8": "u2C227vXXEbHCFC9SVfYH7kpzMEE17CzSdtWv8muyiLCz8X23BMqKkvbqQEUgkyR16kMLkyLtm7EMtj25rWo1CA",
  "key9": "UMDj3cPLwZbWctVh1sVEyLCSfGoxwBfs4fJDj6hVbXKvjnHvedf2vgDmh4xwiZz9pVqEQMUAwMwQfqsrU4rx966",
  "key10": "vqrwYoenUw4ENwTU4h9hpYzcTpJrpn5r94F8eaUsANwF4zZuPWc58LBMaoy26XmLBicwM6VNv6QzVJzZ2YrP1Eu",
  "key11": "2tT33dA9yoHctD1J5UHKqAAWJirER1LuzyfovaGP1vwNb3MsG2ru7TXKVPriqq43HgSx5zsm89ofdgEero7DAZGs",
  "key12": "24GXdJTUWFHM49DKEcngzv3p1oyKMPZhgQ2DK8ghzYDELhQvBa7GJLQw8qoGeReAGqa5vAmhb5jzekS6wtUcEaDa",
  "key13": "4aKLbkbckzwDqqij2mpYvzAv4d5c5m2tPVNXnsGvCkJmKT8QjU1dfTqKLm2u8KZc5CTc8vpkbfdhAiMFrVjstC4J",
  "key14": "4QCVBRobTK3vxJixFXAv7aMFvXsU2BFZGSZr7brk7dtLAKZVgJTjC12dSr8oNT9i35ZQP5wzeo3Q5K7RRoXQRSRB",
  "key15": "3Q1RyZyL7XGNcPs9g6VTy2QV7nWeDbLwRipRWqVeuMG1aiFkp5insKcU153yASC5YihLNswi6HAAsa6qCMYB8b4Q",
  "key16": "2NSCNg7MivLyUo1yWPxRBAgC1B7GQ2JF6wrvkTQfqvoLRAQbnkt4y54EGnBrHjgTq4YXWBiT46bQn56DMaEJo9s4",
  "key17": "32dkcT9Vp1mpD2HY93VQquop5yHqtzxhjdnVYvxNZVixPxcd4BZ19x9GFyq5e22tmELaCGFVrMzdbMJ7BuXvaS5M",
  "key18": "3fmtizhpKMT5Sq7w9SNVKMNG2NPMWDW7NbbWFudNtjpBTKoaYGgtP97syTHzDSBWoqMoVqjkZQTTM6nTXkehsz9F",
  "key19": "2M54wk7TvQ6FCSMS3hN8att4G1v5D7k6WsAgWvVdA9MzQX87ToLgziW5g7DNHRyKbvQG5HLqXwakcef7Agn9NjEY",
  "key20": "4bcBT8ySRSEQuEVhCx9JZrZPkdbihNhAWJqz7G2zTEaGfrtMjDL5EqjdQVEsWxbDpV1Yh1V1wYuSYENJ8uxdfTCH",
  "key21": "32XQA6hRuUVGbVg9UAK83N5WK9z7PrL4mbWjVmpUPjPjtE5dyipZA3zcpojVjubFr2fwp3hYhL5DsiVqbSqMkX3L",
  "key22": "iKu5FDTphiEEMquMtb9cztxoMahP7USnepu8nSxsMvzvNKVPrLT5CLe4K68Kbk2dHU7gDmgz9yxAuazcGxcw7KR",
  "key23": "337gHKMNqqB68eaLHPVNTsMKmM1dKDFCXaY7pgiDDoYMGw4t9TUZGoV3D5KTTvB5nEuhW2cPVEXSEWf8Q1a8VMgi",
  "key24": "5TKdBdS9xkzcyRbzSWrJ21GGKBTmRavvWszMtegJ2qQ2k3sjZTFDfz53fbrDbY2WqmBoQCW1UDbAppgkNXQ58i5w",
  "key25": "3HoVD8LEfxmc1mwA9aDRDBP4DpJUARqepffc3x6er5c86jZ9sDz4iYzBhwbVC6d9SLsMsXtkNPkzGKcK84Y62D4n",
  "key26": "5phXPwwG2vrJ7oethwVEWmme1rKd46AYBXoHgka6dgtYTc2FsN98PRG9qmiABq6Pac5ZK34kAAHBMyu3qJeckJQD",
  "key27": "4fFzW6RRwd2JdfAVuXaAoaHEVhNwruTKHRtkmWTv6NUmfy7XpyTMHQhFJXjU88DBDjjrwdb7L9zY3Lbs83Ly94Xu",
  "key28": "2Met9yGQXTh63ruqdyDnXYg5bsTNmJ24PJFmhkFFtdi1gpppMH3bA6tsg4YtWiAd8Kw2QbSqntPECuszFCjjzrRM",
  "key29": "2Cq2xyimQhDaixDDCN3vPxijUwbEznRMTgpqvzU6gAzKJU6YvdmFqBZQLsQ7TL5Vjsdk3DMHKUrWDQGq4rpcfmNY",
  "key30": "vG9HBkKrperCiZAUnBdPzeefKuNBgdNEK3WKbGezCWUsSY8moh6yrfo14m3pt4Dphr6ZdjZwWzUYHn1GZJDD5f4",
  "key31": "dUCgykJq9aHvw8jZJJvXA5LaxMzEHrjpdTeRfezV7wnkM366dxpRDpZV4QJ9saoDo7VyFWF9FgadXnm4kgEzGRs",
  "key32": "DDLvpNZ8e8QNqCVTTsyJG9KQhNY6HpLQfp5UWMUBSAE9CSwfVttEfW3RP9wae9CdKmDjUC3V9m4Mf5FHhWurSiA",
  "key33": "4azfXYBoviZBuY12QgnKkEMFcEXeMfnGY54vgszBL3Egw6QPAzswi8uNBPwYLFcTxhvZGRk8aNbDFfoV4dzBpFJz",
  "key34": "3Z8p4QtfrXPhiitNk9HWkGQUef1YS3LknK8qtyk9yKT4j1UfXnr2Sn8T8eSVuoL8gE8a9tbVweGxqHjEqt1dm7ZN",
  "key35": "4KmPWxwrSUUfNgxDtHbuuFddM8Cor39K2d3fuPhKvokzpePBrt7bpSen239xoKWmvsEHhWadPFNgMhnbtAegJteU",
  "key36": "2sSeCyRkMTju8SbJ4Bpj1pj4mdetGDfh4EzKoqQW4thneJkqU6tdM7Lfk1rJyVuvzBtg9RZxZjTcPLhdrypSYwwe",
  "key37": "2nA4hh6TVBcj1fomfZ3aU7zS9BXHUrfJSDq76zgD9TKP4iRpWnn6wzETmHeKLjDA8CrTM9NvXvufZ7MykHfTJ9v4",
  "key38": "BuTLbQQBJhhvqLsWtq4qNn2xGp5LbsriLHL2GGrsECmFTBUgft8UrHW6Sk31SGRkX4fHtf7MTewa4rjumb4Tg5G",
  "key39": "66TubofHisfrMQE8FPrk625wZwaB38nrkCZnrQoWmcnx3jipyQBhTrJauxKmZAsycxBeHceYDV86kcUUFtra7bHF",
  "key40": "35TzKCjUrKgqjZChwRS3ECeUQcJQME33sYagUGSSsuZUBMnJZTSiBEQsSzgaJ1QjubmaGpuGGG1KbqNVt5rutjB5",
  "key41": "33QhF4Eph4GQCV5E66JDxhRB95f2AcVe56Qq84Akx5rqnBvt37jKboja41H7QLXpVUc5JSbjKXwASjpgemDfSSPY",
  "key42": "3dBBzUPcZnzh69GtMbfdTvat1xwzrYLiCGiHGK1MgjSLcwneiCfSU2hM3wS4Zh54fruWjrnD76GzMFRmQu1NzTrP",
  "key43": "2ryQfBKihaPiWphhBa4cmMZnK1AkT3k1sH5SLgKoAr1t31k6QWDWR31qqdby8DujGgJXwcdW7sVCcxQf44jQdGq9",
  "key44": "4djhSqksvFgjAxViCWzX8e9yzA848bEg7YgnocShnMxk1Zuxb5FvPrRUbgBodHAgGHEMPnhFDdn5XiFB3GKAL9oD"
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
