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
    "2y4LE5CgvGpYnmDSCtHxpgDatmQ5yJuHLPSotFegsFS3operQRQVqaKn6ef2ESrmxsmpRXzzT1auTRWk7Z78cXAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxtPq8Uxdk2k1bTrLcrmdWnV2w9pN1QBG18dA82pE3PeskQRrrM8XfHo63qBAigJ735d85gCXRSWFtt8zcMBF32",
  "key1": "2t4Z3jzVQWeuSJjX2WLJq5vcSYdcBcnvxUSw9HcCAwQVGjps9s3wPSf3eKYUWFK1cJcszxB7fibNRsQdBaaWP77b",
  "key2": "2kx1T5C5qXN8xNz5z2obsiTshBAx99yvLsze5EUa8MFaELuhNTKDquqhV5eKd2GbWsiAfZdRRHtgVfaNY66TGDen",
  "key3": "4rtAJ8TWg3S8T4pkYzjtNK7FPco6xAcpEXndqN9NJwo8tbZuEhH8YVfsLtuif1nM2shWRvP5YMQmx81zmCYVxX6",
  "key4": "4eQ3T1PS4qS6x4bk3s8EStg41sscZqmcZ7JWQYHQJdbVFxEfX5YH4PtZSk8Qf1trQ7ydRzQpbuLQvBtUnbR4YYxu",
  "key5": "2HtdkRbARxe5wJEKXjgfvf664GPJkBJVJumSQzBPJ4yY4uuL8eZGw1UGc4t6C4o2jKzZaganphsWfENDch6jwe7K",
  "key6": "zdqFnqe9TMjNk6uetYL3ydg6tLWohQGJvALSQ1QVNcXmGGrYvm8XbznSzNVdux8w81kZ2oqVNhBAXtUuNkT8kUj",
  "key7": "3W5uFq46LBXnp5yDSdFXBsv8P6KZTQncB8MaLzkJ1VAXYQTTQcSs1AR1XRBEDr2SVnuiUtuQpbrvSJMdTYsmhFJo",
  "key8": "4joCXCQvBzo7XUfXmJsVS5Juz4ZAY3mLcyBf2EPCwwMFkxzkJHKF6DQ2h7Thf4pSqhPyfwuL5crxNv8givkZnfc2",
  "key9": "5PmDF1ziJjhYm8xn4BF84BebdRFEY3tbGwwsDymnyZieSjHv25YkEiSda29qc8qLJmLPdZpMiKWZF4DYrbaQYSW1",
  "key10": "3RhSav7g238uCoW7ViT7LgUikpuynVQoPsPojZkFbAsNZBnmZRF2vYHygv5VcRzTzyNi8z2ACPAswZJNmEfsqGng",
  "key11": "5Pk6G1JXKGjMp6j6bgpBVxVx3XtXpchJjuPwrbaePxQW2JLvAM3MgxMT6puMTAs8uC9qPMK9XJ7TNzeNyCDJPaT3",
  "key12": "4XvA68y53H45tqzQTm7PSH4HCbD79CrfgF1U2nt8fuCtrVPVqVDorAri21tqWbT7c8hA54eFQwqBqjdb5xKiXiuQ",
  "key13": "Xq3q7f5AF6f6LYZSKUVvnVKDMq5E5h2DkrYzPxsbv1FpqfT5q54HakMNq3rUu6pCmJSmvwrVRuC9cbQZ1z7EGzA",
  "key14": "5fHxcMvSdahiMFYQu3L9VdE877itYq61hK5YZqcwPQLpziGQe2Bv177EmCZuiw5eQUdfyE1dN9VyQEMgCYpFRboX",
  "key15": "5cBy45ekmXVH62xEFp2P9uFpGWi69K9gho3kPGamayFn1kQcjbftWTmxMSGiRi9s5SjF68UUkobUKc6MrN2NCcv5",
  "key16": "4TBwXan9WTNNqEN4ET9gHzuXfAXLfWKPwVEehqhUYFH3aGoFTc5nZJWzM5mTTzDbYWuHvbaumYSykm2h61e7zRKi",
  "key17": "TztFKbpvmKazCH7mpLZRgvXjc38r8CU4PSA7Yk4C4RaK3pPfGsbZhEdJBvZypar6469QwsJMQSaFa2SxJUriBRo",
  "key18": "2R9zfpygfCuukN4nzWxRKAaG1rPcMBeE83oU4Urq64SzN53vRsQ56m9KTTQLPSebzCJDrdHdkgKhE1JLq6iLgNm7",
  "key19": "2diZXfbVVBgLi5v5DeXczfwE7MiLbvNX9StSSUkM7cEHpT6dxXWDmRSMw69jCiipjFVPeYh7uzHaESDEXWZUspiq",
  "key20": "3QVcjChxEe3xosMh5e3E1J8e5DtvWBo2sgBJF95cebSBWnSwW83vipcn7BD6XeXcYkTLNmKs6ZQyp3GLEuTcvcSv",
  "key21": "2nxpt6bZQPECc8oAeo7FgWmbpoWzk3xtppD8bbSNza6GWVsTYuReV9Ku9ajHWTLBkff9xKdGvSXCF4cbNA4QDx1H",
  "key22": "2sRKPdcZvRtsSBUmEvz6ptCbhDQgYFeSZyLFWqXpwAfaAvbDC3tuSZsDW3B9maKg2K43DSVZHamerGfXv4LBXsmF",
  "key23": "2wzpr9o4HMKP5yhYNAkxrZnAB7oi7QoYZZNAxZwHh4f1HQSPizHnV9Sj4ZYDx9e8F4rrPAAfNWi2sq9XhEsY5S9d",
  "key24": "3TXYguQfHCCR2H7LmYfucEizAn5wpHqcM5aPyhopdsHeZ8e4e4Gu83kjR9B4LjjvuBqcai6ypt6vUPsskK4yhaPq",
  "key25": "3nSEChum1m26iQCQ3w7dnRJpHebPZXo2AKnc7AvhwVYVDTcJnsRX59dVyLp5PHqFjuqPEe1i4vUiChgZjhcokYNW",
  "key26": "4KkGpejSA7p9fXbcMR6EaMPsi4n1jyvRCNKJP7tJoysvnDULMwc3LCArAVRGN27Rh2a7NJYc5cBnQaDdYuNvJ7oF",
  "key27": "kHceAjR6ZZQBf7PBYHbZbMou9U5iZSQVa17Bth9emPujRkyMko4bmPA1UTZsPGE1iLPut2Xrzsi9kESAHFiw14x",
  "key28": "3vnkHhN6RdDzj6bbjfkQGF74icwoJeynqK2az5PCgYeSMfiNbT9eYHeXVCXXhaWsc8nUNNS5YVMB9DcVwLsBiQj4",
  "key29": "64viBbMqpNj5ekkQsVwra5BsPDHfWh1iDHXGVvkiJw7uLrotsXQJ5G1vqZjEVKPuYarWZdZt9kLGyw1UX1qr5u8C",
  "key30": "vnF5CCyWfZCZCybCxsghj3Lmv3WphoxndDXByfKX2eXAnjT8TaPZDH6URJVKpaTJRM5gXZDDeYotoHz8LsoRVnT",
  "key31": "5b2fxD24GJYhAs9eFwdSKHpymCQNmFHVCbG2oW4XpbBaVSpCXwFMiMXehQQerUd5gzAi2rX5SnZCuwacxTZCHD5d"
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
