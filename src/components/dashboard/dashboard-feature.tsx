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
    "2vBDpJdCtaXXrJrn3UkMDmY72Qc73qk3fwNQBG4f36FpYbsi6DDZ4k4CgzeTbcN5jeezBnMuRPFCiaMoz45o4x3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P181szY8v95wqLUjZ92TiHs4JJVDYYgZjB8MFTXfnmDMvTN5sRdB3feP7ZkkAmVd5WAcVS6q1UTKB1v6Y7ZfFbs",
  "key1": "4TrsSibAHiRGrXBFJrm9YAAki3RtV2tqaVb67fpVwgJjEktieRtPSaxdE8295vhCoVS1cRHmjNk8F5ihQnnkJGc5",
  "key2": "HpcKFWVYTAKdAPXiCzJE8t7YEMdqhAGDLztoxTonvQz21KuQiCKkAiKsgPuoBAWMRNzqwJ9MBVPUv4si6rErQKL",
  "key3": "2y9Bq9949vthpRsTLtRMLWmumzU5yZwUp9GFXtxhYJxK6QW5XVPqjtTwsYWWyg81s1hV7nE3w8Y65CkgKrVgbkNL",
  "key4": "56mbbuSUJfqmPWXQd5vbB4CgheXCGeer9ofAjZGskcjrLZjSiUsRyujTwXsoiDtJJixScxNNdqtovzXB61Rc3JsZ",
  "key5": "3k77mwsvnFsVuWMhjejHc86juisR9NNTbuEEr8nZLdodPCAYcL5B2nQRFEETDeoYuDArLskt7Vd2pXpJayiofaSD",
  "key6": "3F2wWrUvuRy84EZ6P6aScc9QkfDCyBkFXbdZQUQDWuTzAzF5AFfVstUszip2cji777NyshrBBoGowDMqxChjLZ3u",
  "key7": "4XW2pJpVBJ59CoksDfjLc2u8AAdLqpRh19wwMBZCimx7Dr8jre3Jg9LB5BpAYVYPYsW6G53mDtPUZVdbj45ngwyq",
  "key8": "24TuVJzPTJkCJYDKQHNy6eakQ239s6ewfAJuAc8jxSbrBqxCP72cPzZ6rQdQPfsZ8fb4Z48nDCDptJHMquY5ke6w",
  "key9": "5ZwyFXuvhZwR9XjKRvDGdnyaxVe9trNv8AHHdtfkzJNhCmqkXoMsjA5f7YxVo4gNWDEmY3GtzKHGaP4pn1CYpdwc",
  "key10": "4qa7qusEsz3NTXJH1Kbe5vyakBMrB6zYmPJFsupNecKoumJbWBgQEwaHRqyMMHASgLr9dQgaoqSwvhdFNSGxTAnn",
  "key11": "3YAwxvsskJrZzcWWxmQeVSZkQfcvnoVTfP59PC3oKjHVNxH5X4GpPLQ8hvzQzTKWJDezq57LaookDy6F7yPHS6op",
  "key12": "4VSPPzEchrU3a7vSEACeEn9hgwzT4b7FrLBbYJZiDEE7vhusnuVNqSAqRzmXukFNmURDZ33vy21FZHtqXAzBUudh",
  "key13": "24KKvAMGqhssj12q9HfSedYdpEw7xaRTNYsN5PvkiNP25a4rJFL9rRkhzCokVKNz5Vp1v24Dv7xQxSGhcFe9oK4m",
  "key14": "3ew5z2Cnm26KGGDxdrusmiHqZZUCnNKRPQAoNzbGEgoG9wSheacJ8diS7o2rdiqYq7weHgq9NjkJVJZAGqE9tg5n",
  "key15": "2k1MJjyGNHhN8D7HPiKsCNaUYY41E2YGraXqvpur9JbksUeLdVcdj1PxrUQPd8Kenj2fkzfYjH2qS2g2evfDsz1C",
  "key16": "3temiwZM11VnmhS8artJt7BPNu4mb2L6Q9pwjxHjnJEGFnFM3dDjLdeUA5xsFCg6sYGGKYC2zMEwvE2dZjVv73xn",
  "key17": "4Ma8kuv63Y5Rbrhtkb7CoEoh8Jh8Jz3kpZ8mJjfNa8pZpcAKZpEAemfUKBBcjDFKtRmZUudvceB5ApdoW15gc9ni",
  "key18": "3NBZ1kJRZSL6KnxTyLUXmGd2nTBtoQKKeGrDPG8LLY6RPvccjRpmPvoVkZPBG4vYzdwYCv7fXWDBkjgaNeHNK2jL",
  "key19": "4VENHcAqRKTQ71pgcf6sDpN2i1r4UbrXoksWfJwNKiv5HerSP5uaNoHjRQC3XdSvzBCssA2hp7Dvg4EjzkQcvGPJ",
  "key20": "3G8Av9B3KyqWJKJL5iuL4MoVr25QhzZ36ZTY3ZSVUhMKcTbSgitK4LFAGLRJMusM2YVFqY4c3umohnHbSbTir7zs",
  "key21": "5RpPV6keTSDQUjjosETygUs213tqAwwCLVAZ2mbuTdx6WDKAkrPiM13PokdFuB59wM9bLFARMwPfatSvwNusY4LV",
  "key22": "3wYNmVWLZPJZYDuqxEvC2HkYfRH4ntv3gWRLBzsmQbR9ucuUzN7WL51Nq9bU5r3WNCT4zGx9BaqXCUWpqESp1RLu",
  "key23": "4mRioP8M4dQhbUu6ogYnZNu65rRE3rH3dCgb7JWd8VYbQie9jbQAKar5XbYVAUwSmZmZsRkKvZNwFVVa1TFm5mfi",
  "key24": "2gX1RibL3MpdASUGTu6Qsr18kDSTFgHXowkZFgMA6UWiyTMXBJi5HGXrz9171DUYFpy18Kyic1HJ7wRV5UtshWBj",
  "key25": "UbADc9V2UUwLzb7pcn9mBXeADF1z8wFop2Wx9Jr2q6TvYvwmWwuESwLe3JAndGEcyMBiHJUDAMFijMQSAPAJNh2",
  "key26": "4xkRj22NQ8rTHhaR9Zq981iBgY6ckVrbgh5EMLrQ4Xf6HRmJ9gQNs61ki7n2iCTnRPXYYUvj4rAEtP8ARFdT7jCX",
  "key27": "3CA6i9DJc9p9t4HqyAMZtjxaPCDdbBrDC9Af3C3wBBS1P5afzekcX7MHnD91dss6icb5YSqk12tNU5pa4caYXZpa",
  "key28": "4XQswmnVhKFDX2DQVtRAZq45JhQ23Dj8pZDN1URUsVghZaW18ZBdk55Z7bih8bCjAi7Bn7MqbSF1K6sfBVk6GpFa",
  "key29": "3vy9AtLqiJG5SJrswfR8JAqPUGvm8Tr5a66Yi3eCrK7zmKLsoDbRgcj6JocmkHpN9VRvp215q3qHwBYSgKxb84XY",
  "key30": "upT2yKmiUnpsr7vJvyhFFug3p1h89Wr4MfFQSELkhoVKxbkEn34eFPCrzbTC3JAN4yFDmaiTfTVAn48LeLkmTPL",
  "key31": "4HX6Szan3WivB2YSvv2CcBXcCVuvhkmVo3cr3QAxeuRhGZLWep4g1NvFSmTbSxPm9i4ybKAgiM56CHHS4Ju4ghtB",
  "key32": "3qaxuABCiPexbFG3pR4YWv1C3pUiapuNQFJhYnDgSwSQauRLkBUgZnYFj5kHDUEaFpLcktufUMxwL7JT22hUJ4Kz",
  "key33": "28fUKtR3YmDyZLze6LpGKhjhMzJeEmC7WS9BYaY4ghmzW86ApL5fvCW3ejr9snybeNayV8wnLC9UZqpHkff5GpA8",
  "key34": "5PvLnhBWZozjggJvk2CvpMZAoQGvti4z8ERRpNhanY4ghidVYE9zK6EC7U4FrPirb3dJLoxZR2N9f4ra9XQ8cpVy"
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
