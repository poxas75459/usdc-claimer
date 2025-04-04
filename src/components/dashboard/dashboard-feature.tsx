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
    "3koT4iSifNSustLjv6Y1mcgdBxPNHiQMPcDp2BGWqnj2jv7S3zKvCnGxNuZAanApPnFAvn7o6cX9MNz1BeRvc4Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzKFUmwhFLqgaYpXTa69E9Zv9mUejzLF8idH9E1izzP3zS8TJgGosQ96ZbJZrHKGGSaJds6ikU3jnk5P15ajgwP",
  "key1": "5dXg8g9Gz2xn2RerAhhEPCHHPXdZjNhZEDGA71dkhH5RphfGw2JrsrbxxFTRpbCEeGnHb3Vk8wK741kmM1tKjaVH",
  "key2": "a8B6LiKqPREL3XuVBte8cCthrkhVrjRozsXng2WyARJik5UNRfkinxo8eAhV57y82zw462Ey6gm7VTgLZoGkqkL",
  "key3": "5yT6pxRWwsYK46z15SJczKVTb6kWSrSNWdJagyBF1Tj5YdpuzSsLxE2eWXfAzTYsE7oju3AaUspmagp31gtLRAKs",
  "key4": "52by4MYYqSGefh37zDAf8E53n1pGaAp9rnSQzBrS5FX6YbTZ2jnpgcVWiVg6KjUBDygUQqFuwWXfpQqeSKW6c5w8",
  "key5": "5LeC1FFXUvYXmDmCRmkgixBAiZAQKb3yMsPQLHQSRkAPqm2sa51feDGsgNd9sR8fAqF12PWKTyHP7LXi2iH57nsh",
  "key6": "49odfZ43jSDYUMbXodXXwiRr2iexhLxXoo5QzgSVJxYiMqbq9jebRvYScsHWh524BBzYR13pNwu2dugTLRkiZYPL",
  "key7": "C8WJBzZLz6eLkJdpTzdzYe4M7v2UQt9jo115HwoPBKFvCdyuX6PYMPEJFaVDPcAnu9ZvDzJu85QDp56PQHajqnK",
  "key8": "3Sdy9PgRJVKZhQzSRV7XsxbBEjKGydDhyha962iL6DyA6jrVvSc24SkGVpcocmXSfYAM5GSN1M9ryJBVkT11JzoJ",
  "key9": "5DzDihiWhWVGgKnVpbNuGM431sZfFnd9kN29hwjTcVKWvhWe9jLnVezJiq8LRvTyTvANcZFU2iBD4FMtjgE7XZEf",
  "key10": "Gv5VpWav2i7a3TKQnxwUHzTsG9vTWw3LUWCpxn2FoD39jPvqfUiphCdGoARAuA3htEWZpF6m94CCtJzAFf3MAnT",
  "key11": "4pZZhtphCJuANaHfZRJb1wZqfEdwf8WPttZVbMeU3sVfrKZavYZFGGBgNdMFipbk8rrDW65jvGAiTQrLs1DvDdJo",
  "key12": "4haz7VCimMoJyjrNXwDShngWktScVofs1UxrxaSLMEa4nHgXPJpsvFLyKAAkTc1mDZdCKfWpK7NKgjCkdNCaqgm4",
  "key13": "24PZLaWqVi6TRKfmCSZ6xNaX8jB5SunxvbX7RBnWnzLxE6cUynoL2ejWTkKza9VaV6RFWQmWmxAEdetMwhynxqii",
  "key14": "2VfdsYhJh78HzN9KaQSJAnv9GqZTdU14XzzW89gUSHKoyoPLS6NFM9wL5384ShMMZPM1CYgGcbsWpLk1pmTyzrAK",
  "key15": "4KjA9ZmMmd9wa7S94svG5uXEvVNqDjRhx5pNXfXdbWJPoh8niMJYknotPT4sjFwdG9gHHzKCXKi22Uyin7Tj8BA7",
  "key16": "26bPSL4ybdQuWvDZvvKZ8n27ArM2NY2PknBsTF8qp1tYKjugRxsTGUc3v5AeEiuYMvRTjYH3umMVe7eMGxCr4zij",
  "key17": "2MHz3PsLn3pLidAQqXSbr7vK8nVr3UKK1Z7odrefdDAX8yjYchSsVdioAqgwnvoYLELrsp5GC1gbjfSnU8RWHQAt",
  "key18": "ZYf3p7ma1YABtHaPuvqHSUnbPrYxNGRYE43Dd6mLYfAxxKcwTqR1ayXFZznSfgz16Xw31PzL5gDEYi4mhNjjgap",
  "key19": "5Ri6vQEpC3veTLtk1S4HFDWHEAjAgEibutHwgHTdDdhewZGW47kipNS8YecMWPzzvh8xKZt7ttZ5MrhYxuxFpC4x",
  "key20": "5XTaRRS2uQQvzKFSqPQjxB6pAg3Aer87BPjaqh4r8RETFRFCKgv9MoSV586PRcneuW6a7jFPdpHbvAfaHEASRcPy",
  "key21": "4PT5PipCsKccaTmnH9efzdinLUthRsgX7ZnyjEAANcL9t2ych1AfFznnyn4rVEuMVRs6y5cfnrChxzgA4mq2oWnr",
  "key22": "3uHFtpQZCrqhUNDhiK7vSTzDkHJWpUoaujUhD4n7jLzeEqLqQMH2VcNdSHSxjw5DsucnLE6NeGnicXRK33Cq5PpV",
  "key23": "2Za1F142ChyCrYmwrAz69KeDbrfJrF9oW5FMMJPQoTZmpGguaUXRX9Jh2EuHkoa3z5h2BhLRuKNNKDuuSzAn6dZt",
  "key24": "3dti2TKMtWpRDtg3UJaoigRimEjHzXFgXD2tB91bjzXoJkANRxMJ3G9jTPe1H7h7copXDTmDxen18Mb4jKPbZjyG",
  "key25": "5hA8ugQJvGe7E1gYUSkNPyhF4WZJVApHgBFjWQzwm6YUxgXwavD43K9G9cUWTJyiAq2HRnoLR4ZNEZy9poPSzau9",
  "key26": "4Cm3JwRnJjq7Ntg1ud56TuU43r8HgDsCpYeTmvhQR1qXP1map11foL2AX2r2kP5r6g22x2ZtpVzCZMVvuyCSgAkY",
  "key27": "24gVFjhkhBDaMesQKgbdQbqHR7PEf96e98fsjLpCuyxAMxtFNAB5V8qjjFoWZdELWtiwcg3W5A7THxJGkcivH3Jg",
  "key28": "5bdqvM59JVXrqX1iGJBFqst3yPy9J7Z95ihA1vWL1vsvTn5ZvZ4uKMx841SXHwBXj1dvMyLFr4SKJZwpW6FzCLg9",
  "key29": "cULseKpugUop4UCXMoXtPjHEF9gVskQsuirTfrMLkKYTQYLLSXQhnKbqcUto2AzbWxEysxR7MN5j3VaNuCSzE2P",
  "key30": "5DdEhrekLH8hMXKhsydhgjkjRM2Ywj31azPPmurL3BDygkRw1ec85dG4E8WaqV2dF4NgzzV1dkx8tHMiGvSkyxSf",
  "key31": "67MYwMk8uDeZxvM3biDRTCK5AFCSpCwXz6gSJCXw9zxt7aZJnEyuySwBGHC3XCi6qajDHhHQBUx9u3vG9C2dx7oV",
  "key32": "4PMeebh1CiCbkETsv3FznM2A611Yrrqqvu9F8oPABJvoKG6Ur74yqLwDbec1i6TJbefJd6pBdSEe7t5jWPCkzcse",
  "key33": "38Sna5ZWd3grKTQe6PaWwvhFS2wAQpCqhPBgMK5XZSMHs6BrtSpYJkfbDfdXsQniJ7BCkSvx9D22LfLvhyBiJneS",
  "key34": "6kQ6zMtqgyxV8TNCUdMTZ6LFg7jETWy9KpZgvrTZGzzwRtrxxT6vbuNtbvcskhVCvnTzBfeRJsbgsQXLfWgcgxR",
  "key35": "5VrWMGTBJJvh7NYY5veicpqvxvaCCN9SxyMtx7YBdk8URVHrJo6hgAiYypFhQkjh9a2R3dk9cToh6Y7LWprWeoQK",
  "key36": "5fQdeyEgtsgsb8uG6AKEA2jdJDVjtyzhgaHgLEw9ATwT7ZF8sFb2zYvnNFaxEJMx255U6NrMKA5Nonq5afvw3wzV",
  "key37": "2tL2FzYfEE9aKvdtjrUbCp3YzWyikKhKd37FPWwMz3H2kxXrQCbSDGn8zCqxeKy2kVUk3uryp2VtiLDwa4h8GCNZ",
  "key38": "3SPLuWg2S6tY8YEaRVRu3n44sHWyxDg4x3tDcbBL6nMDDXLFLKjBxHWewT2hDfQyzFHi14boURdZHnUb8WGVP9BV",
  "key39": "2skwNBBLi83Jbweihjf5ajTAkfdxgxB9fMEgRCPikwFZeJQiksASWzsD5Ka2BqYDP4HyJ2JcaWUzNS1FCS6Ld3qF",
  "key40": "3rKPwXyGztQqafcRJwkEWwUgxjnPTh7vpaALUJhJpa8zuoBiFJhNHCXuQMtAegPJoji49jAt8MrrErgyB7dYJ373"
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
