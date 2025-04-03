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
    "2wDA5EQcFZiuatBa3tKjbLnPoi2g58fPSa1gRC2RgTR5RHyQt1t7g8qtWS32B9325U2UGgmr8GZK8XL4xCoFr5Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f6nQXu2SUE33WUBgAWD55aQ3pbV5Gyw2xaM3hbFVdaQLco2ksRahcaxbRyB4gKDAyvcw73MXVYXw6SFchxFTRuH",
  "key1": "5Kc3bqyktvUXCNULRiHomw27HC6VbttM3ej1tB3xCE7KUYVNCMxbFFkp1cLwdSAhXuqy5mBnkpGh8P6mmgDwUKfr",
  "key2": "3trr4oQSojFdkMqv8zHSuVEMGjujakxMpHTpZcswosGce4XC2PDxnqDD8d1cg69EboD48vPAEyTpg5qP5m1VPyR2",
  "key3": "2NA5fBjhjf6pgJUfoayEeRHUphEkJuuGvtPDV4GUAcNx3s38qfgZYiYpQyBcryshaHjZbftJjeP5PRR7Qviuwou3",
  "key4": "2Pj7s4phW2UsBS6BiFN9s4oPPY6ee9LmXGwSrNqVf6bg8xK96q4xbgdcQA1bVjHm9JdcHZ6tYuoiAmG8rtgTLzG9",
  "key5": "3HXTSdi6E6iPbw58rttGxkot5jmYUnubxX3pVGWo51YzLMr6u3dKbgu8qiMR9iGigy2jp7XMsoHT736pRFgBUUPt",
  "key6": "2WTLBh436NXFqhvDQ1VZJGBHZzhQi5XX7zrr4DBPrDKLmEjekNhEE1cYuC4o77PJCZf77BH6FMc3m3mVbYLLiFiF",
  "key7": "45YcPpKhGRSyUYSorbvkxvRSJmPZGqrEW8E6sbTrdB9d7QCMeXpVUEzP2gmBo7mdYhEYDV3EYCcLPdMSKSZA9MaL",
  "key8": "3mr4ZN9btjnw5Xz7pyoyAe4W9i9AAxxbd8rcZ4FppyZie1PTksqorgSdDr6t4pfsPqSqDzKaXCA42UWUKa87rV7T",
  "key9": "3mPtaFL1PSLehNuM5EWgp6t5n2F49LaVv5EsesHceznpqtG9MoYvATuwzw3LJ96Sw1KZtfdU6NaPoZFpzRqeEefb",
  "key10": "2crm8bRR8gmQaQrAVrGBJKNsN36xf6uECknCo7LLpbGs8BDZGiCs8AvevyHZ1adCyYDszFMLVBqZ29Wbf82d8gzy",
  "key11": "3RV85i4zwHpEzg4K2YxPBbjFWLyDjYRE5FSZyNKK8ZcWcZ8TkYtx3YmhY5ttzRM4n8ySrDwB7uprpWfCJjhPEAtP",
  "key12": "2gb3pd67AxNneByXGwvsqknbkGYrv7D5AeGcsHw2fAPBACsWW4SkBvemYvqmGiC5hvH7M6rmJgJmkxnNyWXH321N",
  "key13": "5aPsLFLuAxB3bT9cvrgP91Sf5A4c9VpAFf8xzJfhLgZZTZuoKtaGVZTwGSQ6YmraPJhLTcDTjCxs9fRSkKadYkM2",
  "key14": "3WEmTQv4qwCQTGRqnvkUGCf5MfRVjyAS55Vd4Qm34ZPuN96gmrHPUrKBfQXLCbvVZRKbVVtw2S5AzPTTWKAUKPjo",
  "key15": "3S5FKuwYyW1WH4CNhtQscEoa2WymoXMVaWnjbKHngZgom7vM4SVBprdqh7jdhFcVdKPsYMJRr1hg6DYDrzGrkDpi",
  "key16": "4ya6fofrTTwLsauHwKYAtj2j7mPfJvoZNNLBU3M2fTUv8wHdocPcB6cuyeVMML5dk2X4NYA8F9auZEeU714nt6EJ",
  "key17": "2yheuKcENTb2DNDvSETcfBsoUuiozVSR4PS1iLmdJYPVBTGdWz99Kk21vgDLFG3kfkBx9ZN3DwyXEx4oDr6hiEzY",
  "key18": "3TWSj9pbJELpfpk2AjncFJuZHf14E6XsQMpB47BCJmCNxPb8HsVmpMXGXwR4BqoUPzpnHzhaDiSMNt2fGpkkvrGj",
  "key19": "25YBdvrDFoHWXwJFeL3Bi6NDXTHGiHturwUS1fx227gsBFLV4raNaFcE6Ks7MYCL2JzkfnJCg6SqxkAmABWuM88p",
  "key20": "2PhrvduwqtRUVNijMyA4dFhSmg74mjjkgJCxqMWyWvy4yuVPy6JsUXPE5vNynRBUvXadyAAHAw9R2gjJjf56dnLf",
  "key21": "59crzchqi4SZP4QuyaopwkGs7czSVBcdL1VWxVJoPYbU4hQyWKFocWzEKLiMLVwWG2c3JLdsxsmVNnCavJHVRcg7",
  "key22": "5XAronQHHNwfCdxaLHRYrxVLuPaMabVhUGuNYZ3wHxrYbr8ttmQvwBjczHvEaxaoYJbTBNVfZcgpfm2dvG9DLPR4",
  "key23": "4jiEDvjUvzgdt2xMg2wXPnMxpSSDZRoUKWHW9LqKGJFVgiw2qDgbbhKb83nVGN5d6r77qbhuhVf17AEBGrQmAhau",
  "key24": "RFtvtDc8sfpJ6mZDxVK4KPYSWqkdAyY7j3WQAsxGMksXeYZmjBeqCrJtZkhCc8iPLMMArVYcgT43djPkc8ajeYJ",
  "key25": "31oUx5qXDbAxCbgA6p5N3hD6N5JVq386frS1V4zRBzyzg3EvnP9u1h7uJMgL7FY4jejT7PNSpwYJnYH8D9Zsj55P",
  "key26": "55sW4UZ6ox2Xaht1PQcCdp4vYBxX69RiWTBJbnTTY3uZE89HcvkVKSSXhjckzSzdFMn6gNNaWdHURorAZVXyyTzL",
  "key27": "5jGnTT5td2chyDDF5EqT6m3UQrRqiN55SLZdCCW7Apf3ruBWp9bdDHgB4uzx4yhfcwP9m3DwXk3wMjYvaUwTA1pA"
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
