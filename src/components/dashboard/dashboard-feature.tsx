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
    "zC5J4U8ZFR4zPaB1G9LFJCV6eRV83hwBA24DFTR9jCLGA2hNZPY4F7LjBnAcwqR3wAyA6ib9cfUQp15QV9szi98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juN9yoFLPx1CEYsLgUM5Kk5AwMkippN4JwDheGtLpdKfrw2bkCinWLzfYJGSChcFx4JxZuzn7guQXYp6JdYHAK6",
  "key1": "5JFB68MmkYGLkiTUaSCUwk4gjtwn5ANYiojRQTtJDn5zfChomNZghLwBFpsvVXvjfyQfi7pfhPPuGjduAb7T2bxz",
  "key2": "2DDhM9K6ZSx8m6ifah2jhTbC3VdFUeNcLa876oqmd4znGECHMYZr78ZvohSSH8k6nqi7fd7Tv82ZwTM7LQJjftqw",
  "key3": "5XtVtaMLb31ot659L3uMmMW2GLjrwtRACAdY4473FiCXbEpn4Udm6GFXF6q1BZ4CREWXQoa7yPY2dE6qKXrTJtRL",
  "key4": "uuoXDWsHxvwi4am6rpkNaDMvFaVh2df8gEFPHNaZAfytenaAxJZCsLozaWtxRX6S37C9cQyFVdD2Hj75i8q2eTK",
  "key5": "E3ESroz9UyNQtNTvya5tup3x3iwkgZHDyExeuo8QJkdL2PB9gqS8AVATcdavZvyFdqdCU5NdtC2D7b3eHiGJQRy",
  "key6": "2EcNAhQ1Fh16KvnnVRU3vWDEQY74dSTbDSpfqRNWJRTeEs6rFuAzdkT39yaEwYGhcycMdfBFDrdHdrftZFz1vhEZ",
  "key7": "wEDRkBTCpuTXrLHdhmyXxcg9RTCsJpWs2PNYHcY433vSTVP1fj93MPz2QdacVnLMnwYkvjfbr4YdtAUan8ghxbJ",
  "key8": "5eE4C35eLSy5GvwRnLfL7aXJH3b2nFhR7bEijA86NEVwEcDLhRpeqnJrnUKUcrXmEmbnurh9PkkKJkvwEhg7JED2",
  "key9": "gvrGFq3TvhoBN9LuRK1XWcdGTzq3zVJxGgcsnnLbrmgWxgDauT98we8ped5Atcj7Jg1DyELUdFF9P9kgMrf2rq3",
  "key10": "3DgTGHBSu6us3snVvHQi8cdziGAE6ybdNhjBqMvEkf75mRrGdG4DHSCvZB5CRu1vDKpu732o8L6uW9sfHUQ4RQry",
  "key11": "aYfxpJq7yFgtVmvSopJT9PkC2b2LZkXZxHEPZHnb8PVn8NG7fpBmZXcnN3zjucmsVfmJC3MDm1wDKTAsdrduzyA",
  "key12": "4cdJeuB3mEUB6AQsm9rNomrFD8o2docJi5Vs5yfX7G6nnm4h4uMdsBmKgfZ9x8MdkPX3CuF6fcn7SwrbCFma3dQS",
  "key13": "5vaCgq2uAEiw1AjETLKoENorgDUZEvSk5KVajgNC7fVQqvnKZkLzUizJtLnZ6pdXGkG7Fp1ZyVjUoJ6yNxcsF1uJ",
  "key14": "EhdDqRXsYhYpCEuiDieKLn6fkvdiqXSMeTBecEzcMy8QTfZye5phzjbg47hkvKtwca3xFEGGn3RKroRRzpqMNkx",
  "key15": "GiizeW5KeXmG4xcpWRy4WprfqwyVeEkU4f3WUDvgLBEshGZi2SBrvpPD8MATEmFByLFKz6hYu8pys97656i7zmw",
  "key16": "33Q6ZBz7inamsP97JgirecehfFfz4xP4XcuhYFHJ44xWitXeqUSwhuFQnnDqDa7a6WbircU2SzuLAsYNdQ8RdFi6",
  "key17": "33zQzaVhtNF4WbCcbx6DyGYS9a4n1Qw1uEzJ6tXEhvZ6yfaiwmBg1NVSzviCCJbfL85pRpMr3NyW8LkrNwb3MaKB",
  "key18": "YSNDNyZPYbUc54zff9X4V6b6yr4N28xzq7w1oF2fNbD9eLBR94apmNZFBj9uQDhoU5RSm7Z22p3hwaLSJUrnEP4",
  "key19": "3raiT1LS3CZDoVHWx3BQsU7pwDuzv44eXDUC1HiXa6XQTEDT2zik6nPZvL387H4iGhzdfddG7z6ptokWHZALzUUi",
  "key20": "2Qm5ogsNqYrdLuY69CnZYE9NUTmvd3oPj42sipnn7zPCZHmRufTYNth1hi7W7SqPswXBWkkdUMGebVAkpZeeoRXX",
  "key21": "3ZR8yBjsQUcyxbbrREU7h1k6xGct69gDykgHCSJS3sQfATTxcM9rsYh4Ku5pPnonexs8Z42mP86zwH2E4N3qXmnS",
  "key22": "4LH91Wwnut3tFt2V4yF1ZoWkfSLUEndcdQ7KesCb67z5GN4C2vsVnng6q86e1YXHdqk15LHZWZWWPGCLR36ygunL",
  "key23": "3ydFg1Q934SM8Y8YA7ab1rvXDPdBLAfUwS5Qq1YtGF1m8GW21CjvKKfTYwy1Dh1pnTDGfFAuFs9m2FzZEWWPapYh",
  "key24": "3teiAhXsWCDnqZYAYLAjnKsRokcsJuPjZqnQMXzLiySqfSoyj9w3DVskf2CDNqnqXhbcsn4KVYhcpJKWigfP9uuF",
  "key25": "5Wafs8BLSDMbUoRjqmQffArJ17rEfJD4CTAaybMYEBz5gYAGPRExeQjhMcMRXF636HQwDGmnvGkZRWTx4H9cSEko",
  "key26": "5WqCdp7oVMrB9EM95afKh765juztx81ACBdHsdwEod1WtD2d3cD81PKgxpEKEtQkKJwhAdvsMZFr8WUFVLhZrHDy",
  "key27": "aHNfLDxSgxgUA7Xe5N3RgTcDmj5hVXyj4nB5CBu713xyAjYDZGz5Tm1qpNQatuKB4a8B7ovmcXnMSgmgDAseKUK",
  "key28": "2P6HgGciF5EZ9LNSd65rdmodFZi19LsdBTYHk2X5LHNBwxv3onjyExT7Nc1DUgJYwrP9sWoaAxfczDjVUmx41U8e",
  "key29": "56VXg1ThJ4E2yDH6VCiHF1uvX2H5EZHmPWsQUmBoTeNopBoFofvTeD7m5HoRS9RCz8ZEPCagLKnJQBGsio6mPd69",
  "key30": "fjBLdrGaV3cz9SFzYWmQAQTDb415bsueDFP5YHLDK2WwKV9AoVZA6tYzYKn9jAy6831YFjckREzvgejr7mURXEt",
  "key31": "fmcHLckVdYnfKTGLyKginf2WQnyx1VCaFexmizDEXDHebdeCzMysC2DTEzbVbzF7Kr51Xa2xmUCpbvmoJhDbx5L",
  "key32": "2oqUum4T3LmBYzSDr2EsXmQgvSbXUmCAGak1GmVn2uEZuUAku8xJXfvbHS3m3x6TuZCSDiaVZNEb4UXRTFFTwYqU",
  "key33": "3SNFxrfbYydpLaw4bmGkdcZAnmrVNs6Tm1t6FJNAnww4baxcrkq1czBFaL51Gz15DsgCnkzh1kuhZPsW9E28ZuB1",
  "key34": "3xCDTsd4jLwnJ1JS9tZYUBRTbztwk7kSw2XoZ9xRtcicb8tQEUJzv33Q1csb39gjNYqZgfHrT6hJTHzTcCoGPww8",
  "key35": "2PgpsadQCSoikzGAcMwQKsgXBHCcp2PS9auUyjMy33tEQSz2E5iy2W6JAqMSw989PxkVayfKGJQ5MkaMf92iNUd3",
  "key36": "5g1EBC7G9LD3YJuawgmkDcE4zEurC2Ukr9vPjTEHgMeoN21q2LauTt26DiyPjCCEFfYygsX9txU8toMAZtN7bTby",
  "key37": "4KoF7wwKLqs8J6vAto7tMXnAev2c2EyarUqG5bhThCaCdKvLCcUrva1dXyQnVPECE54WSWHwpBPEWNFyzrtGwK9m",
  "key38": "RVKF8RDxdJWCCRzgVzciLdiP1V5qQUhp5onjEbHF2XAeZzH9zJ1KjGNxznwALEqU4pGZHExKhzvz3hNn22ZAFGY",
  "key39": "4AiDJArSQz6bVKMVHzEkmebbAfNExvPMAKGC6SbjTe41QDjffxWtVbuw86Wf8zXokyWgiUn67iYskSBe3zLkdriC",
  "key40": "4Gab5hKRHTKizXvSWKkxUCQsWNvwdikiSq8ozYeHvzkoVMMUBrRaqBr81b4oKnR6PYVP3zRm4T9SysMZzugBuiJ5",
  "key41": "3Zn9EB5mBmHppFZVFaojrzkri6fN3C2568HX1F6NA18zpnsaPKtW2ULzYfWKTKEmTY8ScJHzW1RbtxVwLEJQbHEM",
  "key42": "5QeDddxNMHp67k65ysKx5fRjvgUcKe3oUyUC5iLFaMNzeqAzWD5JcLG5UwEVxhHBEajtThvQdrYK8f3hgx5P1r2t"
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
