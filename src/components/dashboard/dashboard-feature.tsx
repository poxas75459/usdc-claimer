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
    "unt1JEUWCZbZKXg1KFVafEUb2mXpUBZvLZSg11qCPeH6rNRNCmWkJUmeGLmvD1LM6ps8gSBnC5mytVnHMdyvTc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9FH1hHeQoP3gSUmQiVLWU3MXZH3sFjVJMdJom7UrFNNG2sJZJHPcFT6vKSgLpFDkZmNtzp3HitLiFvUaxjs73S",
  "key1": "3NC5U3qBDf63iJ7b1VbBKpTymmKNYoazXfZwazd7yER6aBR4HyiChELSuVKeiz5DrU8x4YKKX4ckUdfs81ypVDby",
  "key2": "5sNvbg18LCJhVoGz7BcJkAYw8VMDh5Z4QcTt2xkjEkRnb3MyeUad9gWjRhwKRAKVCHfbK1jFrtHR75NLvtEGbnB9",
  "key3": "2NxJNiVkweE1nG5sUMS9vPgdjtQqZEePJbQ2Ze4sNRJjVbZKy34ENxpkssGdBvkFSYvEEgmGjwdo5p3wyrxNQC1r",
  "key4": "5n1ZyDzzMj7X4FZS2nPUCQG1gGj7efYFYqRSna2KTuzRjAmF1HS7mWQ4M28C1VinBXKsq9KCbktEjwy7P1piHr46",
  "key5": "3XfEByyhXnMomN7Aw9pZ5xqUbMtLbtkh7fu2S6xveE7dB8at7YpXgeu78pdtn4hkJwkymm2BjbPQqpw5KMy9nbaS",
  "key6": "XRHqzG56EjmoxSxBFB8z7EDJCnBBd4f2JjuCYEticBejbmmrpYippXdAdExwUoeGCC8HkvMEbXXhjjeyqMxNDJy",
  "key7": "4HysxDLThNJWrYkF3PKXcAdVHr8vkhKjn9QSvDsfsQKGYHNdMFVVK1EkqGA9aBnwK1DAPSsvrJaz2NVsTx6r6zvh",
  "key8": "5Dwmzr17GwkUsgeQ5ZWVwi5wVLNftzijmqazKTYaPhunhSHLL2RLKKCAzNtd5pehXrtKf8QadfF1AyzyJXFpsjkf",
  "key9": "4n2aW6ukN2d2wyGiTWPpHVSbFY3Hsg62WwMLsN2pwpng51DuixSaMS42tEXnp1mcfgS8YgWvTrP6v1jaWq2cRME6",
  "key10": "2gTpn2Ln85oContchTYFLYrZd88DcvqVk5fmDBMUtorGx6zTTiqmtBy6iWhcUDGJHVu2AvAuqggAVw68s4ub7uxd",
  "key11": "4rUgmHQNmWab315DL26E5UEBBZkVrWUgkMFp5VFrEdaRmwkCwPVJuVuKZFAKeFg1V1gx6sM5HmM1xguBneGYfhWJ",
  "key12": "3Wz7B7sUKcMH7yrox5W7gexDcWTc9CAvrYHj5ZjEyPMaV7FNvSWspViDkzennyqUjsoVzeFx9U9KQDR2T8xDP79b",
  "key13": "9uVifioMe5p93nAtLAwoJNWhTMuq8g3iVEAgSkZY3yL6TTLMvvAtmESA1bDn27SQ9Q3ozzGZYGT9EQj9zP8yeqE",
  "key14": "BVXzwKNzKrJfs948KtBed6aEeXcz2HLLJZ1qLqvrMb2FbsJdGk6Dg9nhRFvFD9tFSUAJCNkSgzw5f1C21y6vu3q",
  "key15": "59T7kkjyHS6AajLFVAPWi9KaeyTgQAexg8LomwrLspypKW38oAK77tbAraE5jZC4Ah62N2mS6YdpHCoraTYrPW1E",
  "key16": "54pMAJcLpZ4qJ7bRDx9FNZoFpwug6HTLrKAcgY8y2zJ1Ufuk8TN66rYsjoAyHbQpNHxnrgpMahsjqqueKf4zVVCd",
  "key17": "4syac4LMNzxCYSy4tQbmZEWNLkyF3iXS9pQaeuhJyLwooNVVooeKfmBSBmMx7BnNC1Tx1sPsfRfb7ZCyJCpKFRhS",
  "key18": "STYDwiCH5intgAgUF49riNrUSqnJZ5cUjFGBhCwWtZQFeE917uCkr7wM1HcvXLtoyqpc9WVtu7JsBvs6WmWMiQ7",
  "key19": "4Q3XEa3v2g8hTBqMmFtE8bvAhmWnP6xm58v3L32mHN33iLi49z2TRHC7wquR6iadsByYRRqXn3C7ExdbjkVAVZVX",
  "key20": "5q7JqueK4UxUGuQRQkNMidPGupRUThvNduqEpT17gTpHYCFba2qv2nqLn71D9ZwxCgBYJqdZ2xUm4uc2AQ2b4WCk",
  "key21": "jhetG6iK3TUMC33NMQgCiuoavr98xbQ4ZeSzoq1zykcNTJmB6C8QLzxY4rnr6ZofdqL2m7tzvECproENM3FyKTw",
  "key22": "5pSynxrNvztVKEk3TbAjtGF9Dhg8FiN6E49GGXeQjDZKr8N2q45TYQ37DYUwXWU2tKXiRuunGuWo4gt4EzxEYhGx",
  "key23": "5nAbHSyoJTEdLnDRP627aNbfK73crJ5XJmKFcWM2CBv8Wn6823ttUM6RcFHntyS8aXUbtPSnQotexwKC8hiLoUPf",
  "key24": "2MqeWHcoEKdc7ZpwmxaHJDn5M1XhGUyHBmaZvGnqS8e5F5n3MGD96P7sypzSDggy6onc5wHphf3ADQrQock6sYJQ",
  "key25": "bRosjqZTELEgp1PQvKjKQ1jN4cMKQEuLN89dwXact38f22NR3mzupb3xvzE2hKGwsqVguv9dTNtBtmHMLt5oPkF",
  "key26": "5yQGCzU9UrrQhHeMS7vft8hmVM4mFbAR8toXeGBfjrp7BwWcNqiTC2rpHxg2HLvhVfjmGE56JMVTahmMpt2wuPzv",
  "key27": "mZUbmXSPkWjGL37R7BwCE8vjP3c3rmtfzLArkh9eM6S1uhxLMq9JfBUAKASen9gHreqHtyHAw7gL5q7ZbCHRgkr",
  "key28": "5Lqgs7RWy3qDDjab7qe4Yx5YX7XyqQVdKPnvjA9gGuEwNtW7LMKqzoRjNd95tD6bEqStqid7Xds6ZNyKc5rA37wx",
  "key29": "2DUov86BdE5J4if82K57Y6FBhS1VFct2DKmziW3PQsCf6mJ79Hja7EvuFovhZReaZmh18YYxs9vpAraqEwzi2QGM",
  "key30": "2erqAYd9cu1sLUyNqGiTqDb4mXA3YXzfnQKHirK9c1739qSnff9Y7Ep6WksAwarChDW4BsuXLKHPCk6UiEKZhPJk",
  "key31": "2AJz55eRX6qeH1uFwgUCVBTFkr6DSwhy9J6giCjpHgcrzrf5mWUV13LHoU7rt7y17KyPiC3STTZXKC2M5EYLZCYJ",
  "key32": "2xi4JVd7T4kGdXu9EEXD5RjiveYLFxsXyJkiAztFeFLG7Tgi1EgaRxvhoGFiK9R4X6rmWXGPocN15NBoC6enqhVS",
  "key33": "2c7d7HVwA1d6CPF9oqnsnUzkMefjaHdo61rD1zUHrQ1ySgnUxGE8Lse7dFtYCadBNQJMsU9HT3EFPvo4VNWxqjbJ",
  "key34": "5yae5f8e2Vb1p9tDfqNuxkyfuJAUWmCtbkUrjKqn6jDefxzbqYCjFd6hcUXnjYB3ZgYmt8D8rkBZogJtEyNHT2Vi"
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
