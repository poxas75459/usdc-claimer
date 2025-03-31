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
    "QuKRVi9RiUurNtFLgbaBx8wJVRSCr8TxEFe89wjuKGPNuVssErQn1PekFesPm9kBScquM7dEuzMuuNHvMvZdD6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSERg5HnKWNNzVqf5KfU2PF8PxXyqJ6aaytFv1MTfiLxPmw3v5X3qyFPEgfvG4dsoZHjycGZfVnY5P9euRe57uC",
  "key1": "4629Lpo3obyNCnPwvDjwNQ9UeoSmwLTMLW96pnS9x6FUBWBxv337pXttXDiJMZjrhhFBEVxLD4XLLXfsqMmagvPV",
  "key2": "RifxwXa7Hh8Ex5Cv2FhFgxnMLD5r2WbYcK6tYisaiaQXgMxPN8UZttNZFkYnwWX1Ykog9wUjPWEbf7ZKDpjwtSQ",
  "key3": "4RozM84os27Q3i2fKq6qP1dDQ5PHsqZKHaQKVDUuvxs8gdATNuskUtGgqc1VcfoMzRqd67SdSffNzzcAxL6nz4xx",
  "key4": "5NqtEn4uiFonCjPRHy7wsRbTZasgdK8TuEgMGD4KPsTY6hShbZpi95WBwJpKqMWcHN589svSX3jzurfndKzEUf7m",
  "key5": "2bgssrxwW6shasftL59M3Ju1Vet3tCDwJELpH5UhiXBPDx8hm8Q8D5TpfK1uZ189WThDWxg2nzspDeiASz87r8sF",
  "key6": "64XgRsUCiF6VBRDyuKc3Zxxe8LBXXCvb1perHMhjUZw933Gc7Uqgxo573KotMVqRJkeKxxe4AdAJcs6qqyTUqG5J",
  "key7": "4Wz9XmCezsat6eAChyi4y9vvxyo3xRoNSyWwRoPbRXmeeqpYjwQ9eJfw4zsfyGjenWis5hnxkQx6CjywuT1HUmWD",
  "key8": "4z6N9zHUQgA5QobWBSGEnG6V5QxdBwpzWMdfxuwFnn1EnaqaNouHFWyVL2S3BVSL2vRH8eM7uBFTHXymPo5zQHnx",
  "key9": "27fiDxiw7qx9qf6trb3FDS8wuqY2Mkp9wLMFxKzms3bM2R7WN2C7a1Ljn3Q7WCkctbMx1VxK9NwjhPvacK9nhzVL",
  "key10": "5Ag4RCT2Tmz4CDk8Vwe32oAh6kLuAs1jbAC1aEMCiUZvYwKhF3TzQjMWmZRxTGfktJZaePRWh4h91BYeGQn96vjd",
  "key11": "31UKndG7Jgt19gXEw8y8QMEjfiyFLtJDn3iSbMwkdnE68szjCWHAaLMgvtUAdY2fJqW1r6Vv7UEgYZPS5KEbNUuV",
  "key12": "kJFcY2koSZHpU9cyivWyUW65dgx9D8R8sZH8N9mykXYEqU5ACpexmRJhojrMSjaf7VmWs54xeotAAGJExJGvJWc",
  "key13": "57HvVHcUAiy32ky1vjvYTmQMkAeahEj2ANiPNL98DdHs9KRJNjGk3fBPcanKj46kGpWR55r1Ke54Xh7TiLMccxzf",
  "key14": "4mFh9AsCTaAEkJu9M7LhdpqJVYBoKDd9XgxBk7H38eKk5cEff7veZE57nsfueLoqUUtpJ8uYHFjxBXwtwA5EeE8h",
  "key15": "3RaeEsZqAEdkmHGztZbZkvLTKHwh6FZVPeYoyzGfTCWGeJPBe2GQVqgAhFH91yvWXgY18Cs9uc9QScL1zpLhWzUY",
  "key16": "4Jwga75PmRHp53xeeDFNUELoc7tNGd5Qic4xZMcumq1zNR4P5HxYm3BSrpn92cisfAEDzpPKR1PAGQMN9ipbL7p2",
  "key17": "BtuTNeBJSTcZswRTjzVwpLHpbvuxqzoW6rmLnjLfqkUqRp5Xves2pEZjgvEcjiBVHLhKkpibu5A6tLPeaRojPKS",
  "key18": "2ep9F6sNcjkwm6Ap8TrBbshZLBfmRkYZ4Y8y7zy4qvHQQhHKkgq6D3MnG6wu6xdeHZ6ARbY4WW9R5pU6eaJFNjw6",
  "key19": "59z6DHkvJsxgJqJ7vfinYDwFHs2yvrvfL5m3HmDGpymkxKSWdbSkYWu5qFicXNHzrgP541xxCWWfLKxdFA586xDj",
  "key20": "3dVwFBgqMNhy9VXFjH3xfykwHAuxuF6mvpcxsCx8dmcTmnoU5ccfgGA5fqgNUZZRPKvpbbe7UmHxisYqGykDmpAc",
  "key21": "sKKox1eZSVGf5ukpfdGjCWMZmM5Z9Thsb8cpCJjTVd4vsfuZWEY5nq9LTGzA7nJhfV7W3eP7C85hqKPEV1Pytu1",
  "key22": "2rNGA8weJaj8hRTv76owpWrtuMnM9dFE37jJtzZQCZXqesav56yqG8TPCPG8K5vaUjT8r1dsHKM1DumwMGaXhyXr",
  "key23": "2XVVNhiQTZoXnWVsQCoALyPsxpBKjMXsJpgdUVsFhCJw58gEfrA3viri5iBSJiXGZL7EErURCiHgoV7CqBcCsncS",
  "key24": "5n3Qj7NWmruJLKDzceaH3M79c5W27C3NrKa315cNY5qazf4f2Rm8LnPGx1cc5MdCwVs848PEsWMUezFuRBsQWRup",
  "key25": "2VPXyQbLTqkbnfjN1kDUWBKX1oh5NmYWzmvT5H4TATn8XNNnS5eS7U7VJQGhPg5N832mtx1AK7WYhvD65QCoPvBZ",
  "key26": "5byFntC54Wy2hTb3fAdMR3AriYyTcp4z2D6x6c16K7inAVyz9T9SXgD2ABwgQSSbSjUk28sC72okf1duwT85G3gs",
  "key27": "598BCEEGoJhaCfiD3WRfTfcyFHob7jbDX475XdBuG5HdGgWs4USrm9TKswchL7YmKFjHAk8rSVoR13UdaJDPqy2j",
  "key28": "2dYcyoEzvB69eaHv6pcWazZn1UdBHTqFpr3NJSYeGvs8HqWPgicc4dEnp2eJRbAZZ1B5hwUWRayHD3JJ9z8n67VK",
  "key29": "3S9Du8fMPjuJG3Gm2k13bEDkypcgkTUNqL22eMP2FhuDh6LagQnJcRNT2VSjQbSzbSMcSBnQ7ruZUf3e2Qr3Sx7K",
  "key30": "U8WAgjUxX7RnLJL4BhdyfWAqbGWCfv5MiT3rLKgKhqZFTB1PTr19hSjH65DsoEutnJhCqWFZ2iYFQ7zoiWqNWyu",
  "key31": "2VXWXaSi6rDGwPB6JbcTRfj2t8AMMYgaXHg1zcxPovDWHubLqbW3oGtsoGG5hM5b4f1whEVnoXwmP66c9A2BuTSa",
  "key32": "4gBfLDnzRjd9XBiSkk4umZLfwrCC269PdoCAdp8N7aCgbbVctTB5XD6sB3UHHsHQ8SFa56ZMSYDXWK9kNn6r6thK",
  "key33": "D4qVtvnLt2Zq1LDTdZ6d8fWeAcsTnXeYkn1omhN7snwY4aXnuAUP79i1bjwjEzNhFXqdSAk6pC9g2t7ueVE2NaR",
  "key34": "5GzQvVCFzkPBAZckxobBbyrPNhw8NeheGX49S1ZE6iAkDfn7kYtE288xZiwF8isbdhrovtbPZjTquw8MWJKW4gw6",
  "key35": "61ymc7monoFw3Uja7bQSJRmnxGWZyPcc54cZp3eWUBkFCnCrqsgXg6rUhFvGuGLXLhd8hzdrMTjUKj3TjnG7npC5"
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
