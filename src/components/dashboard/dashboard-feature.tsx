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
    "2eg2ztSeqkzaMLBCzFyba5mhpxTQFJosmSsth629PpmDsArJ5HQY6J236Kz4qChwFRbtJiJHxxPkkY1Gg7TWeseC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8votwrxBgn1jBVmVAU3qb5ABCw9YBuqTQJrkm1CbqEr9nVpX8mtaufSpcYKRNwif5QXxii3mXhZwm6U4jfKf7h",
  "key1": "5foLKvFiWF9umCUyFphQpwqvQsSZCW3KeYXLubadi2wXG1nNemqD6eYXSsNtbWPDmC6Y3cUaPixp3TKBzXMEfwjG",
  "key2": "55icL4iHAEshFF9kci6YxFQS5ryGLHxWGTE4sXf5oUieguSGhiQ6Q54Qx12Z94t6GgwDRLkogNjr3eko6Y8MwwFx",
  "key3": "5RVwjuh9TZGwb4XWQLJCWWZTtzEdY6qLL7vd3Bmb32CdV3Vi52S9x9kwSkiCW2owHZCqgBWRP9c8pFSfqdQLjnbz",
  "key4": "4risCGu8swJvRWY4Fn7toMS1TioYoCwWf127omQdWArbeiHT3rhxLf4Wx7GLcFvR9BYY8TJwYpgDaXyfXqZWcC4q",
  "key5": "5hCBnJqTbY8fo8UpTud8ZshDqueyRRktND1wwhCpjokHigkZkvsxf6GY99gKZQoBaSpd2hEpyBczc3EwNMZgHBVt",
  "key6": "3LTYavx6DkJRX1bECRmewjyttPG2MfhoWpQRMMu4wvu7UKP9qrgBDJVwfPZWwRfqw99uhuJbHvjZ2oW1iZY5Vor1",
  "key7": "64CbmepsGuCbpkdcJafpP1BVSbPUGiCqqeJEdgu8gQyzL3kGGszohaBrkjGpVNJP8wxB8ZUNej1V4WM84nBTJpzz",
  "key8": "4377dMJyj7SSWQpAjULPyg4hZnCyyf7L4aLgBo2A4237fEFMyhPz2nrQQQGqb21K6fWioKk8VWurbXVAt8tVfWhA",
  "key9": "64hNMER8DSfhodYXH5RvQiv8HguaKF2TcfZaP67AD4s4ULZaNJv3svZPcmdm3aQwgLgqS3NuzY3xxEHNMJZ14jnu",
  "key10": "dP4gL3Q1nRCkTy4mBBXGe7KXmYta6xsTBcbMuMAh4YM6QhMs9jMHWpCLEb5ZwqxHJZYZ6crB7ka9csS3oeHZ5Qv",
  "key11": "2pU4teWAhkA7tFvGFfwarWH3cotMnjYZZVySWdUXGPyZMvsdEsd59ZugDKRNkR38iH21RvLxKnpRAxkxXVniXpyP",
  "key12": "5VY282fdnPFCVBmTnEJjSchskrFcYBGQuhvnvJm3yAv61EQPMsrFQozjNQF6po3ngMmSSsdkas8ARt8bwWP3JTQN",
  "key13": "rNWmwXSXuo6U6RQtCLywawqTBBmpioRkHLdAo3gt8bdDQc4paDFQ2yU9oTcC16JW5vHjTknjGgBRtR7JctyrcS6",
  "key14": "4CZa4F6y2ii9Q7PGDooqYjdaKypsdbu64N3BtsVuLUomnSryZ6c9nGXFDRFGvBjBxuLLRJ259RMaRRELTwGPpT25",
  "key15": "5Hv9mszMsvzP4UcBCqedeDHBA6zwtonwsNrazAH3imw67vfbXrJUruUuM6fEajjT6VtP1e5gCZqYVBqwoMxhNcTc",
  "key16": "4v3kBewcrFLFX93ZVvec81yxdeePpxQZqhHTteCQtLwW8xtZmAu5tXzrf2Z5dfLPrKV6bYPoMHBHy5GkaUtFEzAA",
  "key17": "5dr5hxfHjW3CtotPcebkHYDYmDC5mtFUwXghDwqESkJMy7Y77S3kD4oi5eNoxqXzfhvmEavbaziumkTLqAaGhVZx",
  "key18": "5r5z3z26CHvck1wSkrNNGJTehpVUsQeU15bnWf6xVLQcvdSnEeLyxUQD85QYZik3ichSGjwyWosWwuALJJAvVUwv",
  "key19": "7yqiez4oRSmm7BLb5HK5qPKSCWyfCavdxZjgUfnV3uzP4gZx7FnaZSg9LiYMXBs1ZXwe2TfvgdtX1ov4fgK7M41",
  "key20": "4ULmrSL3JspFgbGgBeggCotxWKNb3jhQqqw2UDi7miCnbVEqjCKRsR3P5euH7REyQ4EPNseAehg9vz3MzRrrnw5E",
  "key21": "3AizXKUhe7h7po5SpTnkwuJpoT9bFjbi4TQYTbE4N1wns4fheB9JKERkP5Z39h1NSeojvPStf7urMyzP7gZGPsvn",
  "key22": "3QoktwkeDPQTLNgWbck7FHg7Xt2hxsN3yk13Es6tZDKEKdmkTqP6bYtiSs1bgFYSkFQRqzoQQ5tymZDt8EQD7Ks3",
  "key23": "5ZWxuXncgD1XkYthXXzFNXwjDobTK9kiaoy3mzAsFVbKhHwLqazBYEFWMmfRtU5qGNZfYu8nb6SUxrH4YcvhYfJh",
  "key24": "2gHb6s1hEtonCAVVzECeDjj5xRhCYYztTijtF4c732enkosbvbhZ4Kivx5nB5d7qW8bhFaASzo8kpwhusu8CZPLK",
  "key25": "2GZUktSXEGPG46fgXoBjj2EodB7TPBQkkevW3AYgnMennYKywLfjQdVVbocqh2vexrPRT1K6eqTxHbM29dFoRaTS",
  "key26": "2mfMKgJbJrRWVbT234vA83W9atjMGhJ1vUv1h3ZhB3cWU5xQ7CPwW2tAyuLA5VrKmVp4Y6xxSPPTVxLNT6SGFLi2",
  "key27": "2qXWizPYcDsrRvYFsPrhE7LNXToJqQ2BC2V2n77TmpXipqNoqWY1CdCToKpBrPkZXroHbV271aKk7vJwW2Lnfddf",
  "key28": "SEPdyrnuoKLfGJeWteVTTqpdg5JA7w7iGdEp7YJCWmTbRPHMBoRf81Q5X9nDfhWceBardAi8RBVsE7SWuiRa5Cv",
  "key29": "3vWsGnU93bVZYM4nC9NuKGiS15stdtaibUMwvLvFaeoAB8eqxtTTXwRcnis7aU4D9CqVbnjZrXrAUeeq7js61tWN",
  "key30": "5eFZxrjFsZp16FArNRVCUjYCqNg2r2RvXPNij8REQ8CjYHRaAzRnLhYfze4HEAehh6SK8GMjsJcoXxGmNcRB8Vvy",
  "key31": "5yUnTD8cuRUwjfc7d3pR1Ys5PSWPgGzCCLHBrreRAumjVSqhy8ExT1JH9U1WtZBtK1mJ1NLLDY6JqwMjfNZAZNgF",
  "key32": "4jeQM6vjunpc8x5hEr25tkGrbo92ryKXeCN1YuZE7RGcCDXAhEZ1beCcg3wBNchVuQynvk6bqFMfLv2Ymcw7G96e",
  "key33": "3N2SM1wF7JdD2uzMTMnhb12P37r8fTvwF4xFnuYWgs7AtEUKegN4gDwBkjK1TbdPvpS8h2gqwsc5Ti5RdhRmrdk2",
  "key34": "xr3bgYbkQJgEqQnFyPUvGinRtxn9XaNqGNucfPosawVAWHXGkpdSknwdT9WYu2soz893ByK29yofKVYx6Fzivg9",
  "key35": "28EmCwkbr2C1ru3LUCBhyZzq3THu6Ctotu41NVJPFJABNnNVC1gmiXL7S1Pcz5wMjZwLMZEpVvB3Bs5yFSn4B4tx",
  "key36": "2u35qQBnKr7cx9VjPymnNvKfJPPQuABi6mfoGweiSBHP4e3V5dA9i6BkRKzmqhAJLa5CqfKUXbjcnpxVkyaJFJeB",
  "key37": "5pWLLhomxGfEg2MfFToV4h7fp1LdpcBmQETrkQLtr3Yk3c42SQVPdKepkCMKF5z24hVWFiVjGeuXdNWcBif5Y4Zn",
  "key38": "53fioQ5TecMDDm5w8oEp8Wrsdscs2WsPLP8joSsS898sJouqJcpANqcUwCat8w4n6zDhpMDzwEzm3Wiq152jifa6"
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
