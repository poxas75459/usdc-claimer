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
    "Cr8fPpYsB7b9Suewok3gFdrYCZwvnRPN1NveRS1ADUbKYWZxP5wauGPNDmYbCgwKnwfJboJFryp9jY9V6R2jcny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcT6A6PUpW4mc1keL4jnKNGDj8T29jG4V2tD3HMPdkrbMHhT63RnsJGuf3ntcvA3LPAvHvAjMkbg1XcE55xX9pp",
  "key1": "5sskzuXXk1AqyTr76zzuUsAeFatg8GQCcUa8dE4qBJrEbLkMcdDoQBa7rAaGAXpt74ER7Kh2QiqHBvjAPWvrmwR2",
  "key2": "3ng6orJtrZo4bakBkjt872D2X1sdVnKWhMvahh5DQp8cqyKH9AgCQdMYMiRpqvVZGVc8xbdAxwCas7VKZD6Yi1g8",
  "key3": "2xQ9yAR1mcCjtxTNCCk6emY1QeHqGme2kWyVPzqYhuMzPB4tSi7o29rLe2Q7qePx1uWNkQLnNjFYWJgwWfiv5JC2",
  "key4": "XnVyqyNBUpT1F8d6afs3mfi4BQD51wxGWECsTpMozrKkQMCciVoJkxNZiiSo6g2YF5yqx1UL3z86CNuCAqnsYfj",
  "key5": "2E1A2annrwvnosvK25dBVrw26w7N8bwErwDYeQtCc5g5y1MHTX2oSk7aNtGx7gotZbJNCT7sun4ZqEQ7xPqSCpqb",
  "key6": "42qay6CQBbffz1gdKyCegcwwkgaKHjX3jvpnj6exB2RFhg7ybFt2BuyEs9kLVi2Df8HYmpgsYV2Ag8uaPKqiVgU9",
  "key7": "4gDbRp2d5GVQB4YH4trvzca5u5G4Scf2GTGs31PG4KMjXkq8fxfMaGyj7Xh5WZiEUhF3qmadChwEX2oMj25XTvoG",
  "key8": "3CuWvhesUjWz5mxnuJBL3Ve2JgVCADzgJgzkqXQNUNxbSoxvkVKpBADYfAicWE6Q3T4yuJyexJao21A7MwiwA9na",
  "key9": "2JANtHiHKPL2s7NkXEmZ2jvn7e567EhdQcs4gTnfL1jCUEBvZJCVxRxTgkEwChUZV3oPJnY7kppQAtY1gaMMLhFW",
  "key10": "7hT737xJEWSDi3Px5GymJ7MtQfohRQPBR4RyL4NNo8HTaSwv2WuNeyafzAVj84xkZbfyqGozvHRNCPmUCNouswY",
  "key11": "3JPMCP2R4iDYFZ6PQLWtc1NniYE3rY2YduowqjXJAecXYWQfgCuC76ieYtXZGszeykFmBvsg1RjeCoF2fRgFJk2B",
  "key12": "5cLJqrDjCjCfVuv1Pz5X3ygPk5C2r76BS8LA8BFNFUMwnh8yUdkKHS6gnzrX3JXbZrWacr6PbDNCfqGGkkE9Pw58",
  "key13": "4fSDDBt92YGo4Pbaa6Ri64BpMyEpL1EdUHwHWyw8nhA82v8XUmT6adD3Epoa6d9ktoFgqPg5Ji8H2D9hkUb8QZ7c",
  "key14": "5tK27hjExuGhAZ83einbrzD3a3TXYa1NwksXP4sMs9ZUrEZF1rCZm8UM4kgwUv25XKn5UajLCFmWaRULNB3B5CAe",
  "key15": "3GrPAYYSzd4b7Lpgbz1e8jFc21L1ufgrs4GU3QDHb3fU8ydyVmW25THtTTbzsw7S1wH7mFsEZnDT7H2YtNgr35xS",
  "key16": "3rQyXdycQYnehsN9U2CgfDtfYn8TCdf3uPGerQLXsSJuPYgo8UQErCXFLPjpsrqEkQxqn4HQUTrqHT8DHZPp65MW",
  "key17": "4LYc4SfFkd4A7rKi4LMFcoYujt2JBX4Y7EivNcieqaUYz6PAWWsfFnjmamYKTF9jBuwvekPf8wezaTYHTGMWvRfF",
  "key18": "5vuSjeP7dpUHWLDV1GJUgK943zht9yjfKKRV32au33cF3CK9rQ49Eb9HdbKMfo6TMo8FauTetL4zCgSm5Eqj5B3Q",
  "key19": "2gLpbN94FWaRaWeiuikfDRSm5qcu7coV4AoVFtxoKjYTpP2deFxNF4p2kRX93n8b1fmVp36i8Hh5Gv8x9JbT9ifo",
  "key20": "GhkxSStXfKi7qffemgr2khJuFRvNbeioYAubfNEuCPecWBC73VjxWTtesCDsSAau1qGnZTuwEZDzyZMSiRVaoRB",
  "key21": "3gX4ipBCGqaKE7399cux5WgqJXeNXfxsn7LaBzTAKc2Ep5XRZohfkFSGHhayRTmigD9ejuXpZi6bKdfvvpXMjayx",
  "key22": "4w7a6xa91UMAp4DNEi9b1uNN2RXFxWmzZwwRYL71Zfp5EMY8YTtLgdWGx8x7wP2dVtK2hyVHpXUpYvi8idgxNKLh",
  "key23": "4ZtqGrYvnZYGAZVCxQ1ZNfzYP1m68y6k59zJZ85NpDGAUkocPkEWH43e3YVU6JxfvrdjNw2qTD3RuYphqLJFuW4p",
  "key24": "54WZyt2EkKvZUkt8Lvx6fUrYHPnbikQfqMXfrbDbNwVwbLgzbnYokWZNJd8gFSQRfttKECrRJ2ySpKK6zkT3faXj",
  "key25": "4rUrHwHgMobvyBvqXmTnmrHT7Csc9A8bRw9f1TtVdiVzUeEwBiWAUCAaUCnZxjwrhT1k4JBqTHby86ciXhphkr37",
  "key26": "4rxAS4SWR1gAaLt2gov7W71JnsnFNWwiDNBFWmbD1aK3B7h7oE4cWpaeNLKm1RSwkKBU8qFNye85r26xK8aNuxwy",
  "key27": "hy9gKQNkFjT9dnBAwnvoz7T96ynrGmhmzi8LWz4TMKANAnUdjAa3PWzeknu1q1MdRWgwAfiHWn5zcaNHA4GASDv",
  "key28": "4TPxPbSroAM7GGZiXEEV5J6WgNEeuTj6NFBtqSheBpkGdv6rvRkfEWBw22nQBJHTu2g16WJGN5qByYQPsVFqrXYB",
  "key29": "5JssxmKHR1ggXyZkdahnBmZDT6aerVBZjeoqD44CRhNai45iozjd7SW5Nick9XC6oWiUEZTbRicWKwxWtnYQnoSL",
  "key30": "33zGwum5s55UsARWxcihMe5XSocPET3P9vStrtdYVhBZ3SH5ytxpkPZDm8u4gLqQrHaRWvEdEXoDZhJ4D9ERJDGY",
  "key31": "518fqS5q4vwbVGByBoqxDTudTVniBcKGUHu1t2qQ9aVqft67Ub6kWmK7YyDeAiukHt7nedhinCojNLPE2a5EXMJp",
  "key32": "34Jc6pgmMdzq1bEZQVtYRpChgAYhjaW4b1UNFaAYR3zd2EwiGgJfovDwHBpvsHzKjv3s3YuQs5LFW8vw3sMSh9Me",
  "key33": "cgNXmHEXQ2z3f69ai4u93xKXHQs85vrD2xSgwheTb7bXQUFbQAuAhq4L6GagpxC6kX6f9goMmK6MEdPMzq1Ckxi",
  "key34": "2ih7zSRMw1rCaokZicAqysBL46y9uLN2CPBM7gNpwoncLucayKEutUEi8uSPg2FvgWRBVeHMnrBdGa9MJwq6wMxA"
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
