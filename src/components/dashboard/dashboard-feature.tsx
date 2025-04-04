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
    "3VAEwZVBtjCjgfXZuzakGqouYCkBfZ84mwAsBP3ZSMYR7fNhdoJzYGSy2aMMRQKgamhBTY95yEuBqFDvdgvPvSM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gshZRfkSBPqPhDywdep2pMNnJmMi2CBxJGZ3ooQHxbA6ypf3QBHjHUdcgDdN6JTxyKDX7XyZvR3xMnAcn5vzL7K",
  "key1": "3xS2BHvAuM6xhMYwvMLML85kVBWZXniediUMQYbjMq3uZ6WDPBJHbQbXewZ5vBsDMRktxf48BVF97U1VeHPq7DbH",
  "key2": "67KAvGKgfkckahj5TehPdWrgswaE7QycQtm7YX2iwFAgSM63c4Bowg4ZEF9kwgPMhDgf1H3Yn4W7TtaLYpLsmuRA",
  "key3": "26PMFzUc1oziTbC9hnPti7M7ZzfrCdRzfdHxDA7wiZYcsfGgGdc9h7B8EBQmvAbdWWPMc24Dyfx2mU8htGmzBB47",
  "key4": "4psugNSQkubRkqbCBaQwEX71bZnumZYdwDFRxky9H3kHmsK7qJq4wuTGbywSNUrn3WNLb8TQ4qeGrA8x4nhK31BA",
  "key5": "2EjY3Qg9kKZcCgRmrRytfM95H2EyFLvyrkEFUdSJP6v7Dv2Njw3mXxECeBsguMieRrqTUB5PQnsETSRx4VgiXnXf",
  "key6": "2WV6phAoakzpitsP55peLV9dfa2DTcWyNqPhtXcZvMAxFZAhyFUrCutz8mPDAEFXra6GGLnPxZvsbbsRUMRAZ4hQ",
  "key7": "1eZNGm9UqzFJbF55vrvH53njCTKr2C6qobbTrYYxRYGWdDhWQ6TjBo3QTAwp1XiEKWqcc78rPpGhyX1YxEPBhKN",
  "key8": "3w2dwnrvGZGgkDjayp4ayT39gTXk5g3mLWNxhR3SUYZnpmJTyHcWKqxoMWmE3eqBqgbZfS3D4iWiNW1phhknEDsQ",
  "key9": "hmruWRhmZj7pg7ARjoivWBAexPsMdQTKr2UPKqrkZXcZFfa6xKgiXjgeBSzcdpbF2wagqyf563d6TabVD4jvNpd",
  "key10": "ZfjWYCxxzpah2yhmWdiboGY21v1BxNnjWfCByH53fXFbQk2Gr2TzhE7ZZpEtaVypr4UoaNQ5nGzu6mhRVQkA3Cg",
  "key11": "3FZMXAfLQMzMxem7c7awwWPWYLjC1UHK7RtfPdBiNd9HZQ3L7e6yamLWVYuxD9qd6kqQFXwpQt5GkiTt41Y62N68",
  "key12": "4vFyAAqqq2DwQgywnbTGofvfXrWA3i89TTHf8JvUBoZSxuVQYq6WZcEHcBxSSGfXJhRkemyRefXHjzTKWYsiZ9np",
  "key13": "3RykBqvm11DCu6xFfnGAAM7KQSoRuYAAyNGLpad6pJQkGxJfVoDWfMxh8hY3ecH148DvVRdMPHP13jfJTFPvJqck",
  "key14": "5CDpTRmjMdwrYr6zgqB7sSLxzo4A5zmBfSAaFoNEwSEJGJfHu5FxVa5KG7p15ccixMRwvjh6JVLRC6DN9UQTjXdW",
  "key15": "4zcNw5wxxQ557Gh4KVvf6h9Uxar4poXBgHH2E6XP3jJyX2yiMXzeCcL3mPzMJ2gTR6813AVgnAYzHMkyL4MxkgcG",
  "key16": "4X1388pD62JGZeSq7GEEUeNm7Tsq7MA31LQYRCHR6rUK7psGqiqriCWLhakxZx4RoAxEZNqtEgEAiuWHLXxgRZuq",
  "key17": "4gxXeU5nf86V8NtuZsm9pVE2tqpuBzTXEa6RLHr4tuQ8z9auhXeTS5aRYkAdeCRQmTuBT6xGkzQ3uWQZ8pok3vQR",
  "key18": "5ymWcqQXnZ7PMFkuB6YjZk235p2XWjLJfL3u9SSghnehW6RnPE7rokbqgo92pC1TRZU6azrYrttzY8K8qeSaHVjd",
  "key19": "2nipgXwzS2mmWZm7R6h4C6dnreJGQr3emiBaYCkmjMv5AYaC26mLanXYrg7Yz44yMyTrrLHB7Fc5uiUGdhXt8GAm",
  "key20": "3VFNJWSyRk6Mf86uBgWo3eyvYTrRCViDjwMC51bMmDPJ58SCvrtBakr14fRrKtgCaf6iwTMmG8DjVuk5M2HDb7mh",
  "key21": "zX7zYbyyj1A8RiLweSa1u1RguAGYKguvbZvBbz7ABfqwt3ahKmeTBJBpyCA45dcPga3GwtDQmNHnUkHLtoFH4aq",
  "key22": "37y1AUjpxcJ2UADN26dH4v2JyFYJixwfMLeVruPhaQonyKnwANNYv1yqg98TJEYyLB1WkEmum5wra4wYdPfQPu1i",
  "key23": "38eBn7GGF4VhDMzCmVZwvoM4FwwJjcdY5XE1eq9PcRjN4GjJKh9vLDPtuUgvN2tA2FcopSHx5mB9cLZWDXPCY7VR",
  "key24": "4qJbUMZjxdr9TNQS61vXoqHTjbvfBxt3QV34DvvWTbin1QT5J6JPRpwFbC1tFowwBTxJjjCb7ET9p42SXE3j1u7q",
  "key25": "rk1doyzbVq7BJfZRFNvBJAa1AH69e7LnSZNQwvLyLH2dvx5UqCCFhxPm8mh6Ax2q1uYVzXVCHieCsMzfCheGKFA",
  "key26": "3cfqSEPjQjxQnQNaDGrRFk5so1hyD7ChpmqnsKtCHjXHNJwTC8eAjtoke33DSXGDD3dofZYeEjkF67Z7u8BTAh9V",
  "key27": "3RvvsN7oZL8hSdLbqin6NikHs7kZt1o3EAo8mB3rjmXDhxPygWw3wkR6EHp7EiHvmVyKUXaUnzENw1zGhnbTUMqy",
  "key28": "JHQkcqJtUq3YuakFpiPUbnjcmyTNkzL9QgLiKkBkA1PxumwivoY18kAssR8Xi9Z6dNPFTsXH9sCy7pHkBjXwJuK",
  "key29": "5B6zkPqCrXqcqLz7Gm9jJZ1XrBMDEYC6DGK2mi7hVimpd7TGyoYBKAGXYdpmdMXpf4Mj3Q5YREot2Ku4eGzFrsKD",
  "key30": "5mPyN8TTXj64GVzCMKNykDaAq4vXUzTLAG1GWtP431D3gTDxZ7pZaMRYdQ4ytYBo4PT35eXjMbqxcsShwVkq6j9Q",
  "key31": "2muL7cj5SQssYCxXbcAP23XvSqNvfk2zAQx8NEQZq2c2BTvryyBcNy5687VzVcioVjDr7TaSrW3mfDS6TUWEpSAh",
  "key32": "4WJyBPewiFRpqRwN8uBxHy81nLz7wkhqZYjWEx2cuEXQ53TaDhFxzdXB23hdT2JxyFiJVkbkJeNbJMGcTGKSpuv1",
  "key33": "BzJnPgcG9cu41NiPZuBXbiNxuYk2S2b2oi55TpzEd2U6KL2exrFypmKyFgg3omz4vPCDmFQ2QGGqtqYFSFM9maA",
  "key34": "66SaMVCByPwuS6orPij2jRJchoW2dBFw4N43uYnwHZGSCbAL1R9buTjzPUWyspwYALUo7EDAK3AZCfYvquDfCGrT",
  "key35": "25vcDE5AjiGwvXAb8eTijpgyxC518jeLX9GHbcrYnW3Tgg9sG2VhhbfEFhyQkr2Kcy95YbXJiXEaM8HU9Fahddvz",
  "key36": "4gGXh4tHd75ieqwPJGFxaDW9CWsMzcwoeGZeNUPkPQV3jnZJhG9Z9wDNn35pkMZLNddaWJHCuK3pNnWZtVJfMXh8",
  "key37": "Ck56r8QsiLdJ9ixUtazB6fR83s5XmcMYnWfpePjVqMLu6CYcYzuKThgDKKc4TSeRZYLGmsSdpr87Dknmo4VCaTK",
  "key38": "2EHcCdkjBt3BpkKMPeCRkXEYy4jbk4mrPgEeyMm1f7Bqnd4KfQZgF4pfLMYMNS1CQv7dYgDFUsFC2ysq6VoKNkFn",
  "key39": "44zRHj77TtBAcZGZ6S8f2esU3DZaSD8Mc9c4H89X1qe6HoFyVAJebm2daw471k61Fj8zpazKeyYKorPTwPERpHjY",
  "key40": "5YnkhEQDDre45P6eCBEhyDymjMzhH7Rxt4DavYN8bFBoDDbvt3q2eaf1xp1k9cEMBwfaVL8F5qXpUf53MWnjDmuX",
  "key41": "44b671yHGcSBhnkBrVqkXwSwnAafgNgKpdghHvBVpSFENd2ioxH5Q9yHL3KfX1yRK882p51krjTBfprBceLNEycs",
  "key42": "3YkKe1Pu4gVq8QGPeXqgVkZSWgTXaBa14eVYBPyh743fT3LEFKxsWqUaJdFKqVQurbKQnmTNqZ3uCC4fmavW7ojS",
  "key43": "8arVun1WSSjfzsgBCGcVUL5u8cUkRMw8gHGuLSRkusXSZ8kcEYsFFvWE2K99941hgXrsThCBF3jto4HYKgmdVnh",
  "key44": "3JSAS9qZwKPsgWDJm4Rsodv3M21SAE521hyaVWp77BViR4F7n4WRbUS7ebnQ5htj6BqJEPDgFAuRiUH5ju7ZuXSF",
  "key45": "WJKYmRkD8osJ6zM9yxBbCRxfFowBRJWVRe6Uaux3MsP1j94v9HXRSppsdFYJkD5En3jW7VPgMEPU7A7T1k5akvJ",
  "key46": "4svuuEpeVJWYRRRffiJAg46wLZQG1ccf9nRgEH7G6DQfapBFGHbd6TzbNM1fvspKiAQ4K9gbyDtrZHm5PmBnPWu7",
  "key47": "2bnxPtZpqaecfuUD1hJXkVMpqwtHwhXnLRve5Zbwmfvv7ujU6jQgNsZgfkCpKhfvVDiNcMZTq7aUmaaSFGptpH9t"
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
