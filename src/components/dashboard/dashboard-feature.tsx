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
    "2umfp37d4TgaF3y5Ysgm2wAFmhiZLaRF84F5kQwYBgfNdRfw8ZYshquCERSQsY3WE8hLAMC9x6RkeXq59722rDPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N6ZFNfamVKLMAqbmxnCVJ2ZH6aBkaKr73xYoKkiP1jXHLD37CFUFARbC6HQ18JiqsEMBFZWHgC9hKQneEaKrDgL",
  "key1": "3WV1w6jyfWFgxm8zJVHF2xUvumwmb3YsMPH1sgMn44jBbs5vAc4RdniamKjvGReQB9apStQqMMmEjUtWWY56bpS6",
  "key2": "4ao73PhEiutLXdnGKAPRULG6PpVP9BEZpydN31nSAx2N3YEdJfPFaXZzs6ynC7ZqN88SjDwY8CwMTnVJsKHuMTwJ",
  "key3": "5dAr4xZuFVVy9nGDaixXWrNGYmETGAHbhhux5PG9QP4dn7bqrJmKjvTYFyCwLQr9u2aHDB3jfg4A493tYJhsNsAq",
  "key4": "5KTgkW9RZDXN6stcCugpYSg1i5weY3kinBwmrczCFHoNaF1FGrEp66h3WwVgBianTya3XHA47RSQDUvw8ujFyGZj",
  "key5": "4xG5ksUv6FJty4oPCqT8pbYXXYCLWWnTJ9EJPdrKN1VSiqC7FJ9kY4YZLZxwKAFyXJXneLnGJQ1XgSGiDEgP4egB",
  "key6": "4ArUn9orG2cYpxRBWEGLaH713YFjByPcWapbKXVbKeQYywFSTpoXzfNexMNDGogzSp6xGtsHhNWJnTPGDFHs7Uw1",
  "key7": "gqMTjSAG6jLqv8TJz5QB3BMr4196zzmrmKiaGyi4s7WqTJDxf1CLV1a9t1U6xG2cXzJSV1kcQHoWNburSHBrj8k",
  "key8": "5JSGVLkoMPDE1ba2ag3qU1obpRKBo4TurtpcMkXtJF6nigLbc48zeVyWBGVJyLyuT6bWVi2MJ3jPS1Z6E8c8BgGF",
  "key9": "JVX4Yyqrwx5KtRfBvC1SJntKeC3ibv4jua6GRfxg1S4CLHnkUKjmg83hiCda3nWt8CBsTSb4MJuaWvin6ZM4Z3i",
  "key10": "sxsduMzXtuDiaFpWmMtfJ659tcuJJVV7UKTtHGRR98X8CkwcTa7RKsjBjrJQe1exWSp2PuSU6abeB4PkUvW11Pp",
  "key11": "4ic99QDNH6k6zERzAaD4cG561ZSK7kznin8dG8c9rGKoJ21bkBn3jGVb1zRu3aAq9ntdtRPyheLvPNa7d6PBt9ud",
  "key12": "xzct7yKximLsFF49R4m8YXr52G6d7iHhftmX4z3oaspbxTvrZmUXnaYxUGWyC9XwCFgmEgc1M8HXMiXzzAmxEPG",
  "key13": "63n7wdwDR2zmkNWKYPbShA2aJuBpBN37VBNNWU4uDJaX7mHa8Hu5BsfDFFpbuMNqtRDsbQdPhbs5JQpgDMW6kpcp",
  "key14": "gsfZ4fbWbAsVxuXQiPrGpovQuMCwdHBfnX4CKpoLPpgRSHLFbH2qx2Eqep8HDmyAs9ELXf6dCu22XDAjpg3qzQo",
  "key15": "62rEf1LmtvPrPfTkrQXoBcHt4zrzaDkkgM5amSH4VhB8SJGfPddjTfH6nUddGsjMbxihABh6npLi1uuG9Wxsi9Bz",
  "key16": "3aGZztoeQuVnCYBevzVTL6UcwECqVppzvcuwHTiyf4q8H3hW99RHSLYfagwrw4EYghwPbN19Sz1RBSHvDV4izR4g",
  "key17": "59PQsvwhkNG3a9su5TrUMFqpJ8WLYqLhJXFzKv7ZhELmpzfv6xttZRnYoLpsiTEfXUeaeBd9SDYQVzVNJ8N5XBu7",
  "key18": "cPoqpPVGBdxEdgYXfn4wTAsLJtbUaaqME3yqCr3hattcv5qNmPgysmEMUF3RLMiDjvULCPgXPTVec8PSvWorB8e",
  "key19": "4C9E3RHyiECK2TYNsVXLNZEQ7CBYbmqBQYVpksSSX3cZFwg1jQiEixEphXBzrsdwYBUdGpP96k31csWaW37ai6u2",
  "key20": "35e9dJGjEh37B5az26vWmSLgcrTtoMdRAbdb3NDfhM3DR2WHGvVJ3sbt4Dozeu72cBj6SVW8wtuhUyidxQombPKv",
  "key21": "4rYMhe6CqBjjybzh92H78BK1ejZgcSnxwGyN4WaDsfzHKQK79zHzaPMXeTvAgdshjz6si9AKbxryiCkpddZupbw",
  "key22": "YpbAwZ39PvG5vuqKuyLF2zW55BrBLQX6dubgvdGF9QVnAZDxoatwaTYF1p3LYZrmkUzohBi6sEvTkhQFtLkyaQz",
  "key23": "5qGX97zyr8RAs5ZRBmzq5AFcRSGuXAe5AXyiB5AwB1GBMQ9dY2WzYSpLJZgZGDYWRZMY2WowaWqgavD1PkKFTo49",
  "key24": "5JnngFV1SjnbcvuvTsdrqsB3DQR2UdPfSbjem3AVLqqKLkkAJNkkGXiN4osDfGaSQsd46qMMeCPZB5tEkg1aiJZ8",
  "key25": "3QiFPKxkfmY9iJ6ueZvS8hSHupQ58mKyseNwg95BJGWxbYWWEX6nhV3AY4pmFhxVveJCwQZHyWuESq3q2qWrkoFk"
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
