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
    "4E2JFoA9eXnScF7KKhrSysVXuA29JZZ87P3X32NB5Zp4ZyVGtfReKrQHbKZ9mWob6X9YiuPqEJsi9JzvpDdRPbiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6DBokxupApxW26arBDWcSBPqcUN1GfQBA8S9zu2RXV2QRwVMxCZzf9s9SyAZqThjKuJZrWoiXnbxbx15tQTik4",
  "key1": "2nDmEy37zXG5x4qWr8b4t5V9MTcT4byjHKN8FgvPSwSckTQUhLdAqR99Wacxwwzxo3tYSHTYWNBnJ7iwLqLa34ga",
  "key2": "4UBRAZCvizVhHiFKyuwTjJjV1bT6uKsvdJfwc5NbQ6c1bJqWRXSwGcuGJiH5s9pMk8EwwjvjPnK9AdAHMtw27yeo",
  "key3": "5BWJbxZdVtBE1nDvRRmEAL6Dt3iHPpmqtKhd5NEfLjRwiZfVuoh9iXLdJnn5TNAKKTajGMFoUjCvDegCEc1Qw2jK",
  "key4": "22s4ixuGpyMqZx5NqMYeeCCnNuUoyjozJL7uLi4jsdP4spKG8b18sPTvVbMyfv45qCcp6abNDBZKqcqySpvpbzVS",
  "key5": "4eHZ1tmVMKMqY4Yi9xX6Jrar2KZq1Jq3KrQZaonNXdg45cir8N6KxhyogujvSJsxUMjBjZRZKR1WJtseAtckDcaQ",
  "key6": "2LYcTc7sLBergPex9fLdQ6hisLt7FnBuhPo6yGU9vmDWqpy8zJN3HPnvCUk8ECoGgjexEiEQxLroaTcVYnBSoGee",
  "key7": "4G16jQ8YVGp6MEpdZvSPoE79A4T6Bmopirh8HWt4b4BHHmQQtKjroSxnm8ewSaT21Ghi8o4BRFAk3p7zmiBn2L9F",
  "key8": "5oYEdgxN7gBARj1JwQ7UiNd67AGSakokta8VntUeaYuLnZoo4A79dkj8KS7qD4ikD48TCKy9U7TKNEbv314GchKR",
  "key9": "fgveHuqAGsMCBXESYGDKmiHPUyxDhSrfxjfEeyn62GXfx3niAbdLGiRGErtHLM6h5CMZxHMocKvCfzxbgehNefE",
  "key10": "3t7X8gqYMQGd4qc2sek4AzoxcK5efkiMuCLMGMhZke4GGU1HRBaNgnNifBudgG1Aqy3VuKJPxFvocsFr4H2VnaeA",
  "key11": "3vGhYTfUcMt599CQnxGChaQ3BVStJVN1zMi6QAm2ryg7KhUrkkWn3ND9qUp9W4rRF17AjPdTcTQF8aLKKCMYQ3Qx",
  "key12": "4fUbL7Fy7xmGUPqP8Sbg175oGVJoMUnGP7kF6PDUaN5PhzAoGNmvr8E2ypZPGhypsyTwMFgE92DAQBPeJsD9GtwH",
  "key13": "3QtRz7s5vGqvTNfVg3Q3fPHv29YWHZp2Uxf8FPZrfDzxDpjg8pA3c94ULvB4dLRNT2KMjdovra1HxTktbxZw5XDM",
  "key14": "4SgtC5J7hHE7n8oXKtEfJ7KxMWbiSN9HQq2s7pRrSKW47Pj3Je3KejXsfQESK7kjoWE5t7jpwNfUKRobCkvuG7aN",
  "key15": "2qd9Pb7mEow5M6Y1k9pKDP3TYX1BLeXBhVJYbfGh1riktZBcxCmto9t7BSYtorcAF1LVoRsxo8p8UfKzU4xjviXv",
  "key16": "gJQCLaf6iARjq4cnSzxm7Dzbk88SV7VdXWLSRAWKYDV47opMVADfofVeevhDPWqMiNSE62jVRMgiU4bG3HgVN7w",
  "key17": "AdxXTT9DQgrz4czTKK8dVKc8FkUvUXDPAH5f8AS33gfGsC5TLcTCUtafBgPF53vtpRjafhiA9k6rN5xeBtuvmp9",
  "key18": "2ZXaPxZGMNphDriWr42JFENkoAn58kpigkttxA5XzzaxnYVnowqCtmLKaa6BwZzkvL5jY7bJq39vvaaaEXCAWZm7",
  "key19": "2ok3f6LZ1WovtowVmtMtbXybAu53wCQxQ99b2LfQTNeuyAaZfJ8DKWcsPXP9ocq6qp9aUv87eFoGU2UUr5rCi5JJ",
  "key20": "3eJhJ44YeWcpxXmcQFmJCGWA2vcY1noDGU9atMX3gZVbeUmyuNHusiQCpqFeHBh25qtJSZsEtG9xMDH2657iiAJD",
  "key21": "tiLi178hPMTo1D2xbiDTCXKqaQduDhci76xHwKMymnj43ZKQfbWPfyDyda5Mcz5FZxNygNANY83hhaiEHAT4h15",
  "key22": "3pabniQ1j8iscmAfHsWPfgiNJrUY1FaWJrih2GVqjGN4LTdv5Rq5d8HFtuM4HxbQoUyowebq1ebQ7E5tfoGDATs",
  "key23": "Z5zcFDTTMniCuV9fM4dW2rSEa9oZGu3r5Lo8A5q9nJs4Z2GCdJHCuTasw99HHa7faXkbL8CJsutL6ZPQ1BtZasv",
  "key24": "5RPQQggWC6GNL3Yi1PZ6L92ZPh4toNBbYTAHv3xgHsqBFaoe8MNeB9yuebxqWBdKe9NCYxm3eH2SBvg8F9TxeiHs",
  "key25": "5HExtYa6XVki9NZ5SreHqh9TRTQUa1LC2MrjPcrP6EiKPpNrQRWE5F894Dsiry96CHTpi52kSRei43JMntMmid4o",
  "key26": "2Z4E8Noyye5H8Gb1KUUQuThQVEzcZduDCztzTd3mug1e8fw5x91gNSLD7GyZjhEvgYLS3NY4JLQdTSkRCjDUG9h9",
  "key27": "5fmRDvTWv6nDGebDFT7Uu7QuPBr3G2myYN1sVyhT7kjo64b2onzJGzrvsn23EDuqJ8C23XEWDrRJa4Lrygj4qNM9",
  "key28": "2EqnvPeJNctRMkkijcS2XETkfrfSBk8EaMs5Q4msUvvpBnHjAxdLAKzUJXDUATikTrw1L4potdDz3D5AiwjKYu3r",
  "key29": "uVGibRwGBHGyQCTY6PdAADRjvHuVDKydybXHRUjcxFFYjER5zLxAWLhzd7BEaRa5UJbjo9wAQ2Kv47Tf94jW4ep",
  "key30": "E17qEyoZ3aVxmKB2nUcMBRRKJ2HrNez54bszos1qfsXv9M6BijugdFCff8rRBCkg74bDGbUziykPg57T45ZKzgG",
  "key31": "5EawnRFx5Mv3V9R2zpUBMjvDbgSstKdC1cK7LjjMYiKjeec8ETYysgFbXksFD9DuMTpwdCt5MSWdRyQiWSu7jnyr",
  "key32": "5ar9Xpwv23H49ToqLCsrapEbEHdndWPLkbeST4pcAg5aL9rRdKHqbgWnpqSNAAPaCryCpDTw2sapBnfCqFyGudmY",
  "key33": "29L3q1ifnEHttmmJNTUEV6QVKzjcD9oyzJgdSVstGcfnXispgFeCAD3W1RuE5mT59HZsb8xDazDMhSEjbpRLFqkb",
  "key34": "2MrYvnokWXrbdGbotbgb4LbZ142oKzTMeiyG4TChUMqdy3A4eUBuuH7GV7yVB15cyceKMoaJaE8bmHoQYsvm7CQ5",
  "key35": "2LxvBikoFZKF5xHLmmMJS7s7mceAhapL9yuabLNPZKvFNgVyFP1bs9KAb4p2MDTJXCSG3atDZvCN8NSjZAtmE1mJ",
  "key36": "4XdWZoUY4DZBoL8iUqB7js1hmuq4N25LJwhmL5RHzhfZKYnGNH9YrJJF3TkxjEdAtZYohWg9ZAirXrhSiuSyNKoZ",
  "key37": "4qyLMakoC5Do2EEiJvqD2hnb468ey3RgMk4MetJkdh1MYeRb819JWC3cLBT4YpEfdhzuu3o3mCe4oN1wdiT49GmB",
  "key38": "3aPVxGtnS6RJSt4zxbHPnZr9PvLvnSdGrqRcRJTfk5X2KdUtdPNe3FRHFdih14JEd4UDC8GP7rPgFiM35671z1LB",
  "key39": "53CGr3xbsKbqAxDPpSUvBUNBJvPHKMp75AJqQKKaHZt9ao8CCVvxN8dYshCZVNr7xrnBYodJ33t9DfzuDsspYgZ9",
  "key40": "4ha97dZkRYGRWJGEAMgvamX93FKuhEXGwr9QsmCWpDrrySsjaqtZnheGxWqBhN5qSqCVQCKaaXCrCHtw5WskHBXY",
  "key41": "5cZD5e6ddRGWX39my74jKk1x3FYV8GDuf7T92wuhT5Ht2K6PhgdtVzQHz2a1XPSLuUEUL5G5gyHbZjb9Mv5tmjz6",
  "key42": "5UMCYk4fbi4eXGpJZjrHPDqXntr3X6xPJDsrqiGNRW5cTjXxD16DgT7M2KknTK6sW48crx1yWZHjQHc3rAQxpYRd",
  "key43": "48ZxXPmKNjfMrLAen6Z8ZS9q6fKuBocG34DmLe9GpWY4J3pnixmzDi6y7jgwsZ5Rvxi1UBVBwdjttBGrhkUc1nTd",
  "key44": "NxqiBp9coJrNNXizHho6ni57JujJpuMJWrA5tN5M7jmSGuPoWZwpQY6rHScJppVvXQzauVJX41sfrfj6eoheB5W",
  "key45": "H1g54YHqU6HB7GsyW4JpdaeeRinNWrZQQogTa1VcNEwf13pxjA8mufGNhVeZgAZXNTPABoPonDAq7ZZ2z7JeWtz",
  "key46": "4SPz8YgBp8Ssw3uTj4hzesBrPk8hCRMyxneFRSm638FHXNn5zBveL5GXtkRADZyvKPfXVAx7xhgMUwpRVpcHiE2E",
  "key47": "4TfUEeFhz2X72byoKZ7mKunCoLsLTVguUY1FZfSnc87hNoP1bpEs5WZSwG7p6HKoNKYpM8WAv3ifgGap7eV7jL4",
  "key48": "4bQ7xhChNXH2dLXEw33LDCkPyRKXQWZETaEYrh2B1M1B1UNyEoRpfKADQhRV4t4gtAij8ber5RK8928RDJqiaf8y",
  "key49": "4UNCyNv3tHi3kNoTRUai3i3xGUYuxJB4ifuhyNNqWZxGcXcvYbFHorhcw2MVxQC5Y8u5xViA8eTgZErEYYQYipS5"
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
