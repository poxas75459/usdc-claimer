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
    "3ps1vi3kvi4Y5T3VhYixbVuvXmT1tDKm1J56y86KgMd8KvCD9QSQbbQWX7i2PfR9GK1cCaD8bryshBtqb19NZJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2ucBtkrzwWWTa2v5wC7ntubrMJCV8DyCMEJBjqYJYy6by8RzPzr1fWkL9kWKXQAgmZRdj45pApnpmhm5AcFpz4",
  "key1": "4fwgtPt983GZPGyybSNT66HG3jN38a66skfpDhvTnzpA5SKLwqzUvuSBxpPpxfveotocU7oj27dS7nskrTZcDzjt",
  "key2": "5FCh74uqxRy34EPvnp2LHfkybdPZL1LeBGo8ub37pEqD6LGRosTiz22rn8kDJo5L8mEe5264hXEkGpWDFVxMxYHf",
  "key3": "3AmJPofdspbQxbNJFNWNNf7fLcKZhFS7wPqAgh8fgxagFEGjLsQbBfkwCF2VCe2k1Hokxfx72LFg6qtyZdLQhgV4",
  "key4": "5toHpuKaKDhGQukxeX2mjYpCmJxMkhjXuQhXhuHw6a1s8JCJEqhZAF7kKKzP1Stnzwv1Ejn7P9Cac3x7xk6Ed8Y8",
  "key5": "2CNUXmxNQSiS1JeLGZsvwk3yr8jmhhAkAtvG7yr6mUEksHWZM7opSJYgTZZWWaZmWeC2Bph9tqqyvT8GQvi88apt",
  "key6": "2eS5hVw1jA1JE4huVnqu2wYc1xQhxpdUxKFp41cvu5WsXRM7xxnRCb5edrSkpje814PTQT75U34JomrT6rrf29nC",
  "key7": "3EkbpatwNjn5jQ4cwKnADrfN9yTwT7i5T72cU7S3enAfahW4yXFcJkNxJi5ALJpyGgMC3qhTpkBaB9rkJoyn7AJF",
  "key8": "3EKpxZLQh1aF9wtfgSGMPajbe1zPLiRia4zga5H4MiKKjNpLAHuNHGhzWeenWefMtMuusVJnGeTFUAVYkqiq1TqC",
  "key9": "MaqwYDRowBFcX3o2VQpejxT3NG78gm6iCWmQLNKCBTWqEW2kB6D43nUuov9jkhiYLTt2TEtWzJXpCUj6pzgpMbQ",
  "key10": "4HverijiKCWAc9gQL55ZvDSnBJzFiCsccQ7EaWiJhSKZWZdKFG3Kj91JYAakSX1aD8yrYgVNxY3RJWWtX78TXWYR",
  "key11": "2Cw2XykRU5QecPHq38QtA4uUhJT8k2qDTzSSJNKYRZhjjtWHTBrmAw3FrSeeHdmAaQfd9HvgZQt9rqbcjxosNAMK",
  "key12": "34Yr1WKrXo1JFjs81nLQAc8JyxpZugDZY8HB2FJDDc61gGdd71Jumwk3R7CE5tHeMWzMjwgmxXNUmmULrmzckMYB",
  "key13": "HaF4QbghsEEQFEFrZF91Dibz96G6jdbGu1cfhRKSBEG9Z2HqSTDZUQopC31bwykyF7gR15Q2tZSehxhrRLchypS",
  "key14": "4MSA6N23dMNB4uJxFUoeSf14kFPhwRorCXei8uDYdEBkZ8cy58jtk5YT1yp3j4M3AGCB64vPwFfgXLJZoVYduDsi",
  "key15": "3BvEDNPiDySP6fZ1hrMU4NFnvQhKMNdCR6PTtFHs3Aydzg3ZPspTv3EehCf5zyVvAjxSYX2HZvYp5W17QpPTBaWv",
  "key16": "5KkJQc9RwtuMgvyaBTZU5ToweeyFV3yvnfNe5cn3jRWFL2o17SGUpFVWAVsLueKphxbLVUai6HnmRAvgRqunqBab",
  "key17": "23DtKvLhyStgppQrnD7AfT5sjGH6TrJcanQ7tcS4rRSKCeKui8aCwUqaBjFFEfdeCNoZaF7wFea4pjeB1k3Cpp48",
  "key18": "Rz572BMun7Tn3bXA2MYVzgGSHiTbJtBwLQsNF2nGeAuen5iAbJPzdq9LeBcEfcxKwZxcckZrjKb6TQG6sh9w7M8",
  "key19": "4sJwRnchigwon2YV9jDoExwTuVjZJ7WNeVG6BbRjeyxsbGza3AynoQ4okN5FbyKiG7XEb1RrmfJpZacwYK6yvBmd",
  "key20": "4nBWPUcG9LpxC8BkvroD4GzHihKy8pwFx3cJpTcpcewEZMb7wWdHhWmy4LWztGbmJnwsjgmajDGzwXrEC7iBm9s7",
  "key21": "2bPbctcDih5QAakSrh71Fiioesd6YGCW1QhjZGVCgpD3tZirpKVsmXFfdYrMjfkA7o55VtR4HLZFZH6BuD9cZbCi",
  "key22": "4dLmJSQicbWqDWWRNBGcSMyP4Do6pHkExCwpQa252UUv3PVyRRWcbvWx4x7KgK6vvokbdp6F67oGyWBYUa2gXqR1",
  "key23": "21uHuCtfsXgK7EqMNyodseyNfbXJttmr2kZR6DKKVu7gME1tAbpSHMzKZd2yAUuqzpLHXuvTMG6mveXi7NNhYyhP",
  "key24": "XRL3VG2hDpdTi8BdtfeFxrdw6qL51exWx56QUdDhgK3tUSnPu88evtuhMD8QT6BMuRaU5up7TJAXndAW8zm89eq",
  "key25": "4cAnDDif42p6fbkSR2UpS4AuNPryWDLhGcenRCfi4LssjuD7QnhPZEwNjcvqrQ3ssG2rvQxPvPFahhGg5YAigEi",
  "key26": "65czm5MSummN5DTM8Hj3kotCt1AL1qZCWwG6Twr8iPpfDU6XA8VhJxnQZ82fhG9euZbzSNnD7tiJ579yqe33B5xG",
  "key27": "2p7Ewq5M1uhPsjBuxgz3jAhzh5aWVaaNvLQ1m9T5CWy4KDVo8xPHjdp4vJuKA93zQ6RrHduYs5jjg1bMgTuWyHY6",
  "key28": "4qaeoKEPNzPYQ4gvpMvNpQ9TPVVPhRcP6MUS4BtKApG7MMo6Kh8GLJj1ThHCPTvkHE7gkmNcPngZjjkNW4nEFRnD",
  "key29": "2UQvtsPN6Qs1FA43R8t1j5ZawYTdJeDo3Yanpu3ED4aKWHEb6B6xCT5QKStdtWMZzyqa2uXTCkb6qcUc4ver1mUd",
  "key30": "4BFD8TUxNXudLar57NazCZzRCLTtKtBsRzkHF9KpexMe6dPGZUiBZLzobL4G4iWc6pTiRFvHy5MxsPJBBgKRT7Kc",
  "key31": "4716yU2D8VTHpgZ6BqQPod9Mztq28CYVKNGR9xMqZzvaZibHkYja7hmhx957yvT2De6EN1tp8nEThEFGctieKB8E",
  "key32": "645wo6QbnZteFTaHiqPGRip35qJvbBy9vvGmnPRG7FXunzrtNDgeF1nUuDTYK38Evz7NRarKa255pyGjwHbFKwHg",
  "key33": "XwsQo3iKGBMD2Dod2DmQJm3iUVT9vtdv7Q9jhLUqWmQxfVpe5XQYE1HoDmfk3JJDQE99YnejRdr7GBynjdwuBU7",
  "key34": "29GNPSkBrh1kixoEUErDp8H3CCSEQY1osMSKG1MotjJRtnHDMmi3fXuq3xXzzChqfTi22S8s3WyVoKTiGvB96Y93",
  "key35": "43Nd3CbcqV8iTGmXBwnSik6tbhC8iFzKXJAc6UJNrTZSXPooFVZ4jqukPaPgGQMDmAGWkpPFLatbxgVGqi7wdzm1",
  "key36": "3dMmG7hWXHWn8gpiLE2ZqFGueP3tXkkbWTtVX6JG9z9TCiSpb9yRbCnFx3ZDEapCx9f8PLejMurGZDDLjFHnjFvk",
  "key37": "5qw9BFPM74wxdHsoFrKucrJXK9RGurSUYYwJazUquTPqnsfjddCofELMY8zT5MQ2G7j54VqmgE7BMBxPxy21DFqk",
  "key38": "3SHHjeXRqbnukvffFp64sUDUf3frmQMPP5ivXAaK85KV7hrWbWeXghdcrtoRvR11P52ADHhhLxVQs2p3Tqok5e1b"
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
