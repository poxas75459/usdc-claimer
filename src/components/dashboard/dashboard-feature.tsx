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
    "3icLYTH44Ank2st6gZ8zduThZrG7ReaaSjUEswJvajcNY45HRQgJg82ywPgke56DHBYVwiFupkVjTvEorKRV3Ffn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPrdZBnUFPn3yAGWWasbBX3o7zJyLjsWjfjsRiPX2p4eF1hcD87Kuv2reJni38xF4HEGYMGFbEmE7LAFGU823iv",
  "key1": "2jkTiiBqvungnEkwdFktWXe5zMZHvmCe5kSz7vRWUkwqt8xoXoSeg8EcGWDRyD2KoRZsRfSsgtNaDMDEJcASEUba",
  "key2": "3kCaJtnu5mopQqSzrZfSiPng7H8U55n52Jwxda5FFWkhFtMNQYnVNpVsWVnxyNCkmc5e5Ru3PRHs3iEyPso9yuNv",
  "key3": "2yXq5DLvQT5V9BgpL7KAmnavFZ8X1JbmNQWg6yqnAjtuiPgN33fQXtQVAuYGFqVE37YC45MUdMGRRMcyCVbdWT55",
  "key4": "3Z9sA77oZ5q7uWbn5wvVrs8WcJgHo9vdmBYGZvjqzzveN2HxSe9cGCdhdUgUCyJgQ6v8dHcLDtXq39wSvgcD39SF",
  "key5": "432Q3Q24zCmmdz2eBDZZ1DBRrLDoCbnN7UehPYbRaDHdLd7NmSFvFwgLp3VKiRKDiD9Kr3qkDECsH1L3S5vDEdwf",
  "key6": "MFMm6EMPVHVUe59ye2hQzDuMZNTqrJb48pgxw6v5vcTMUjEPKifLMrUEMm3rfs9obSFZNiEoJkGpHyHGKeBCSRR",
  "key7": "4f42qLWVWBkTmxCunqaED1WLFXGzpk4BjFTADccDaJMkmmJnHZDfYUQpt8BNDeA2GnoCHdt4rarHi7oUUyCR2Hh6",
  "key8": "5xEyzXBC9mw3FZiLwwrFWjnRBXiUqsAXVte2BSG4EgutGSi4oTpuCatVUEyE4yYbA4BWMCzX4qQ1BTi88P2oEuQW",
  "key9": "54TWqbhaJfqrA9y2cfxrYKBzB1q54XqhSd1LWaoVmYYTKYoY7514NVhya96TTtyJFPD2VSHCEa4y4jnbwNZzGsnQ",
  "key10": "622VPBeyvUeniaPxoNwYDkEAG8eccjSo1XK7edbWKhE9aZmTBUdx4oWMTMkcFmrSJ1jD7G34q4uZShX3xaSPpUBu",
  "key11": "5Z9foa8J7UhiR8y6VJG4S6UFdcWqsuhBFf34v7SkVv5Fh64UxoVyL1MhZV4EMo8vAYFHaeLrpsNrs5gr1cu1ixqj",
  "key12": "9pxwbuBUTEYR7maWQkAoxTCx7Dk5ZFRpgGg4PnkEA9trXJvTgx43P7XzH9xjB9wvQy2eMPX5mt1KmmBUj7zxhnh",
  "key13": "bgBgerroiZsJG8P4tvgjfL8GGXdLUwutKXciVP53tDXhq2ja7kAE4MUnjP4sgCujf6iZtn1LEWZfo63FcB79oQ4",
  "key14": "2AopiaFu4ofPbAVhp2G9e8x6kTqJHRDypf27muu9WBL2aCj4WZxWgKUnURsTSjBsjEzUr3x1Sq8qCweypFaPr9N",
  "key15": "4A3Lrsgw9D4jMy1eU7GrVqhjpU8bvKzPubJV7Mi6XxcxSgD5QyKX9u9UM9EiZssf5GhMJqbFJkCDBiNN1KyYH2NW",
  "key16": "38kgmXGGubE1qMC8AVdNe3zqx7i5hKCkBZyLc5JxUVDJGtuwTV9pWrFsRieprsTA1M1p6Rzii5GxvrQcpaa1H6NY",
  "key17": "4far1kKC1yh497v4PFy5ZcEH5LgjC7fhRh7169KHmp4r6g33FXQvoLbQYiLiRmFkaY8dmomUUkAJsuu5PMz8aeLA",
  "key18": "2WqyNip6NA6PBrW97EPsvmuG9ZRAR7sbmiQ6HuUZeYjwA8Vz28YrueTEnBgcnmHp8PKAupMQouc11ox79SvdL168",
  "key19": "4M2hjBmWzqBrfMmj7i5VUEdkzqpv5VjRvrEtnw7BjsHF64GmxYnwFErHkpr1HutFm3UkqLuzJios8U7G2951S4uj",
  "key20": "37C4hdtEZGGfZ6U7WrQBHHVPi7Kqpgk1MgGoYDogpzar9zAttMn2yASavzFmVgHPvfdFSFWkphFKbwu5P4GTtF3A",
  "key21": "3UWyAEMHZgaohuXddnWaTiX422hRLDvmbarbuD2uVFzte1Pzp6LM4pj9yvb1f9vUo16UWush2c24KsqdCa3gVsva",
  "key22": "1Mwi1BosMt3BwcimfyFdCqc9gHo9f2xREDbKWMhWunSUsoDv38tGqfsecuPZZ4u3TDNLbc8JvepnA1CMr8DT1Uu",
  "key23": "3hBn5kWjcY7qP54kTXt41eE44Vk3V925MyuMfRw33JZfwuiHR4VhYcZqSCtgimEMfBuRGBnKcSxgMaBRXcHqyX3n",
  "key24": "2yM4hLyeyQRccKnoq3aXDtJAL2c18EQ6N8Ckq9J77pmG7SGc7zK4d5z4JwiAS9jmegFvCfGaynvmmVGxByoox6nQ",
  "key25": "vGBwdPruuukfFDpXfi3prkjTYNfRazTigSXR1GdusMatRrc735GRNK5ATBeeT1Z2kNbWttf3qV7sVCUbSq8tqFm",
  "key26": "4wWFaQ3r7DVcDbksFErh65xZe9JhgBfFmJZKUdYEx2dSoNRMysm66FEKENgGihK79HNhz1pkdwUQtVmSFGGVBKtd",
  "key27": "47bWnZA1TiYBxPXyQVLxZPetyWRjJqmE1fcwLyqHWheDAE4DJSptCetcjXgLTZmsbVMPzfambXP96wwJVC1b4S7v",
  "key28": "4PdsQF4c5QHNN4qXBp3bzW3jbmA2aWUCdqWJyaxxYzdVaJjWZfz6SEb9UPekJ3326PeDi1aDqmqheo5nWjBfRZb2",
  "key29": "6663H96Z1L2JJJ4NiKdM3ymbtDKRhjtb8QUx1h2oeJS6nPmgR4sRbGRYqwXKwG69Du5sAVsgQopry12VmVbSgk3T",
  "key30": "62Asj2sQPJb1ZRqUGar23akCFjvcBwXG8n4auv8HxqaU4jQ81g1GDm5NVZjN4dZSbC3Nuy59PT3NiyKcnEY1pf8n",
  "key31": "4JT66sYXYwHRasTwHLzZU8ZFeQMHNXz7SeQwo5g48ibr95WeYuNvWJoT3nevR432K7X9Df4xiFF5h9c9se6eQx45",
  "key32": "5Mf7DQQZeMZUSvJkDc13hNTe9zzEwmGDLDZtanfptuezzUyYCFgjtjYk7g3SrWpdp6Em5hSVRWdpxkTPnczSFAd9",
  "key33": "3D7WoDVVm9yjvLWez2yy8hEcPdx5apztozjP2ugau1U8FfVNHMXiiCGYpgaWfkbwTgRYrvfzEGoJX36fgsEPpy4q",
  "key34": "66qjTiJLzUiCSTXsddYKZN1RyE8g4e1CnojCG7URxFBXX7ZSSHG5MvEWbyYjWg5yXrSrDhYWjoVZfesUb3Bf4qoq",
  "key35": "3SshNvdcnwSGVZQa4Ay6RKTGP7e9WeHaU3XfkQF7o4KNXfHrm1co4yk83yzAgsDupp2J2v5nJdEbEhaRLLrorTi",
  "key36": "5kYc1QqcisSrijhYw8TNfMZPuEgpDJaa7bUgmvb5vzAkuHUBMeJBgsSG1n5cYppCAfR6rWcuquCXeuD6rSH9dM7m",
  "key37": "5SefrmTTAfvEJJFgAfDkzYtv2nQpg7iMVxQFFGsjuCK1sXvq71pk1qiVaqx9AJud3YHfAdzg7Sh2Ai2m7cUkvHG2"
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
