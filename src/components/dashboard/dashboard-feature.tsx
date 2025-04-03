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
    "o5HZYM1k74FLBqEWQwnkH6BRM1U6dNj59bRvKmeYr7bsrbiM3H34x3FpTkN8MD4ZYCYfyEoyf365dS6rLhEjGsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4xqKbuf7wr1GXGwNYYMpaThMNdYzDMiCZpBwDhdY5YnDZ4t3fvcL2BDATqoQJE4RLxrgHENgTMGKorMjCAWX4Q",
  "key1": "3HSRUgJa73ex6TszBFxDqbtbqkbHfX2frYiyPMHhhD22FNWKzcNVxjvcQ3rB21pyUEp6eoQ9CeykaSVJuBwHwuMi",
  "key2": "4VAE6kAf31uFsZkxj7Ajv4CkAXpQAgqsafaGvzUpvv4THTn73fQsNstfPkds6kUwbxcuTygeLoDyGYbAQMvkBJty",
  "key3": "JmSmWfCkWBMhiqV9oyYPSAWe3ULN1PZHWL4V9nAPG4txZmBjDrUCuetXXEQ6WtP57dLRAsXfyQ2XdLvjhhgjGv6",
  "key4": "5N8t4CXLbkaAEMHGorZLhGwwuz6jhFN2YGhTZzmmudfyujnqSknfGGnisUjxYf1aMDGwp8mYry94xc1y1XupiVi",
  "key5": "4Emb4vutLGykaMwcKZbKquqFx2t5ybcCqebEoRLbTZkF4bovQJvs1sYhtDWsBcCrYCJvAQdh64McNaFVgnLiekKm",
  "key6": "5FCvLP8gT9ZDBiFXKzj2quLJNAbh2HE9Th8vX8rfCp1g6R63QxxgWu6UX1iEoLa8CfUgL2rgGSRR6sJtZWoZ3ARu",
  "key7": "5cEqbHqfoMGbkZ5d2K8vaHbFrw2fAfkpJu9TNHPbSPHBEJdB9eoM2a9o59wdVuHuGm7pY8NNi9MSEJwSfE2bHZQm",
  "key8": "QZP1E3m6b72ULJgDjnrEXLSo4KSHr1hZAc6RveScV8uAnEohvZcBmEfvsbUTja5brPrFpVrRP4Z3ALHF4pRJCfx",
  "key9": "i955SnsRDbt9xFtePVATYCxc2cXXDq8UesyJX6m1TDHmAwf8rrvGiux1898K2YmBoj5SYmZMxuJLkJh5KJ4JugL",
  "key10": "4zHfzjML93rdejR51xbpyJ74mtDFiysR2cfFsrLmoWmVtJhPF2vyNKaETGHFyVc8hi67Zz9Jes1d5so4n9UxSuWR",
  "key11": "hQdFCcdRiNPJbztaA3HvQr6pXAFPVwe8L8C2PULkm9jDQEZKfHgac3mY5DzV2gQMijrARNqyBW73baZFb13y1Em",
  "key12": "tJBGA6mB4vUZ7ETyyKpAoy5EoWELhuPG8mtx3beogvGbHzUzQQNTqa4sFLg8HUrou9GYJkX86vjPwJEWy86hx2d",
  "key13": "5PBac9gMHzj6qu1UwhXPzGd7oJa5YAp4XRi64Tre32eX5H3nSFwHrdgYtCS7cJGkAMnqPcej1Vi4BqfniyiAxw2e",
  "key14": "44e1LNQPG3eMKJ2rwYqTHivene2XgkxWjKGTJugfwhNx3389mzLm2VZVKqiLZMmKPv7dNnEFHTQGfdKehhfWY5y2",
  "key15": "5Qq3Hbx8PpG8NGhvBFo9opXcQmAKdXYP1qJwimffPJT2m4dqNvRa1pPQJQ7VZtafJ4kMCshe7nEJrghgCSLwAWZu",
  "key16": "58gbay2cfF8dK9pnsZGdHQ7VA4sqDjbk15nbR6ntUyQ3VwTAPnTYYtud5XLoV1rZq37PmTD2CxR7rRkoinr72NJT",
  "key17": "3J4RZRQjqRcA9XuJmxb6DX1MqcAjYnk7B3NravgjyHW2j2r323R7Y2sGaiK73qhLuaB9VRZKVPAvutmRRXDBG8h7",
  "key18": "WhCLbtP4ijjnCaYvoCMsxsHtKsrY8yzhRrjXjXvsBZTRY3cmo5QVGK1ZBTCCkYKozSKrRgkZLTs33zJ34eTx8yd",
  "key19": "5vocK89Wt4LAMYwvrSuMuL1teejyG2bDTrxQQg87nhDWV8orpHDLEfX5AbGGkQRzDjJVNW3ZeJMC1kV9ERvMgzBD",
  "key20": "4coocKJ2AEwahRYUH1B2jGPLiXDLkGb58pB4vTVMuuxFpDmh5aqkWbNWRKM4abU2iexViNTL9U2634wFsKjtjP7N",
  "key21": "oPDeSVw3Yyu15yc25ykU6VVE7KgYENpmy8DPQNk5WMvmP4fPAAaNNzhdpt2SFDWYZpHRvMZytimdU1jxkQKUAEh",
  "key22": "5PQGHX2Wg6to7JSgpHATfskjbgbVPSci9rThcEBAuAvJKmPTL9YiVjZM44D2trceqjc8G8FQJd2jrsNhnsd9rf3Z",
  "key23": "5Vi9x37cdWZGK7x3k2MnBu5mcLb8LwQ8SLmcL6jTx28ATKDeM7r95H7AjdYk1mGvF5aeuXGG3t4uQVcHH1Wd9jWM",
  "key24": "Lj9SVWFVR73c7S2cL4H5dotwBQZMGzUt1pSao6xAB6kZk1urNc9enJGzmfENfBLn1FRKpFJw8DRDMiTB4fT6pCg",
  "key25": "4SUrDFBv6iqgQYbj1E26WVgepUPJUBZonFRvqPVD4KYEx62SR1GqvUbMkfRmHNXm5FWFKm2sAxHS4Co9XQeYfreS",
  "key26": "3SQZEbRGmhghbdbieaWoRuuG8XS6yG3q6i7w6EAxBqghY5X8XCDf8miZZSh1ZmwkdB9uMKQbG39ReparFHdT2SmS",
  "key27": "2jM9rSFZyVxghYrEfqDHSR3ixbWwsBNv75pEFtiCoaYyZ83QJ4mm2eyNGMbBTPLyFpgPAhxfJnP4bqcbtdwzrUkf",
  "key28": "2sHrcbeq7RxKiLQTkgfxTFaBWx8jDeahck43pc5LZ4DVnu4jbckWENWmsF3FFZt7u4PmysazyanZLLpNB3szCVhC",
  "key29": "2rxKPRsBxJjHUkg28B8XRiMuY896XUG8piAaAZ949zRsa9HwEsXUZzfp5cCcnjcQ2aRKuMpL9dfStaWknue3UBg7",
  "key30": "415f2kj6SjnM3rNJLkiJ9rAuwRBJ4sDJZWFKe5o5vkws1DTFzhkk14RbtVzJ73wXCLFiVURguWT2FiFMKaMPZuzb",
  "key31": "2QmFSGtgXpgKvrrwBMMJ6cXNaPEbhuYM7CySGV75pZdxhVCC7FZ2yqZNtWUrWpd5Rgt4cw4MBzqijC2KWAWNuHCW",
  "key32": "3Fk5ngJ6q8zFwxrzMhQH9we21mda2sXJQDjdSVHkDPxqdg11joq5LpLuPGsLfpCr3pU3uC7b4aydUpfB3Woc1SrS",
  "key33": "5tk2GqgULdttP7A76Yto6YcFii8PoCnmLii2MdGDto4FLJyo7rLxWeAhxkzpqo7znGfCi5EvKMzum1hqen37xWAe",
  "key34": "KzQZYSL2RRahTCdUq1z8Sca5mGaaUYhuMHjFoxyKL4fhXZFSn39bsju8oWn8SNadYHQ1qQJJqeg9UcwC3nsdwJ6",
  "key35": "4eWjZLRYBsx4zfZoSTXBpv4KcufQvWcjFZBKPpdBCvDTGwoGR22iC4b4vhH9yeDsDq6ZMdTnJ4p5Pmq8JoXDb3Bq",
  "key36": "yrhbAVKEyNvXubWGcNi172kUvfpbu4k5N9unj5QGk17xC1LkBH9qTiaZ8zGVHZaWraBeDnhZHV43hi4cMdrMg2r",
  "key37": "2uv7QkUaqQwX3vVUGWRMSqND9wDi6tdBWnsRy1wmNeFYXS8ccz3EokmhfzVEVb2W2aMPooDjFjkGdiBxLVksVQxs",
  "key38": "3X6yUPoYYHNXAKEr76LMu34AfAT71Q9HUF7ZAhk2kNARqteB4K3W9Mvrk8LpHUdzM7Xxs1bS1s4b4D7AiQeaiu6C",
  "key39": "4mDFfdemArHdL4cBV1UetVAMGTcJGZbjrxaQpSsRJKiff1Gq2u5GiB1Xyof7vRJchoLHNfuGWKxhJNNr7iYbonJL",
  "key40": "2Qmdv21vHEQ7dJJx3LDHNFtt4uP7ssL6TEvxjEx6dW3rxodLVWv7AtTqu5R3jZxCDXBaSuWnrZS2tUW6ncVBu2XH",
  "key41": "2aXWawdLHQY7ncGJfSgwCTSzs3pL4SZMS2ZQXnCayd1URL8htsBFuBXwmtRBmbZBdqMn8txZwZxsHBn7acsHPQBR",
  "key42": "gCsjqRdCzxY8KpgY3tUJ82SfHW4M75UvStzBZJPPXejTk5Ln8HwfnxhQPD3vYVJ9RMkkvWrJHmn4ZWX318o78Yx",
  "key43": "562wWKJNdJWL5J2Kj2ceJJWWDV999fYYVQiW3M7miRnW214cQbHUr14VmtRDCGWdnAupB6UpT7QdXv2SnxAkPTQL"
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
