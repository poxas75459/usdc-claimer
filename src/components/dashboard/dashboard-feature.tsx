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
    "2NxbaexEfh5jWq3p84Lj7AKPeZM1h6p39tAjSo1vyPJMGbgXFpAu49XSwJFVTQj6svMdcbRWtagg75LiXA6d7kwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zG8V9ZUwEUBqKrHwATXLsMWAzumbrXL5qqgZwrFfCiRktUdHiGDmQvXZYjcSXDbcsY5s2Sf8NRhjq6KFruz41d5",
  "key1": "4Jug6aeAQZj36QU2gz16ttnQ387G1MsQPyFBQfEVTzuuFApuXYeYC5818R7xmG4Ec5jMEsutjQQVrdc4dBYumHPq",
  "key2": "4yVdRR9LKVDKPSgd7GKx7KWTcxU8ZnwwAA6KdS43sNg2ZVnpKH2J6CHyxy4P7uYyUpG6GWFV1DczSQirwCwriiiY",
  "key3": "4wEzMyZZomQa7pk2o21K6dTbpnRkQB4btFHaLTdRTnegKqy2JhxfesYi1nFXydQiAH9YtmCHDHojcdPPDwJWiaM",
  "key4": "3GS1nuANSfea95Mskav1rZvr3qZzriiRBACaKzneYpsrTMchLXz7PZeYkFcA3sEHzfZszCUZx7Gp4bjmJwPmfYgC",
  "key5": "55QDpfErrbBfQkUXBHqaBP1GaYL2cKzDYV3EWStzvRYLFTQpASMMaXQHNXxs48T9FVxVcaASWxtKv8V6Lq7anFbd",
  "key6": "3QWbWcSbESuqLxrVXqeiU6GuFSP8oeuxGWC6LJQxmKyuEGGauZbV1xgq8UM49XH31RJPW78njKfHzU49u5d3r62h",
  "key7": "z5euEd4vQDV26wQgWy5nR4ETSVTiRqBt53Cv1tft7EoCtHj5ytRZ7uGMrpRvTdFWvqsge89b2dyosZRvVNmRYDk",
  "key8": "p4fP25gJh196zVmE9G5gWgM5ukLLbzbmTmKxcHaE1XhwakyeZE7soUkpZivZEnHLsw6hjgz7u74zMJS4BA9VdUr",
  "key9": "37oZsS7Pw4k75Ct8iocVzYU12Z1DVL7FA1oezi9QMCRfrDzerePS3PpbMTyNYSNFyn7n8YGBLvMQTufvjtvMHjKv",
  "key10": "2XkAJfMKpXXpXJEVXFkk1qF6kpttyHBr4xptB2jBAW3hp6RGbn5xGjibeZ4pPqYX4qv8CBosuBbf35SGKeVbeTtY",
  "key11": "KssFud17ucceXocZVS781WqxUuitsrX84C1oVyw2oLn1wo3RGbZQhxcHHRyEBm5BD6kRUbwCeJGRQynReZWryN3",
  "key12": "eYULPvTzkdUfxnn8kXk2s54pwzQND7u8QVtH2Q2QCftSQWDS9v9pWsfZcrnL74ocbzpHy1cdRL6HnCDEx5UY9kP",
  "key13": "37kLfSvkeb3RVACM5WK3dKeErLsJK9b7AVM4HMseaXhpKUvGALFt9B8FPRSXFunRtBX8TmaG97XHqSJDxVoThGYo",
  "key14": "5bGh7EGKQ9ZcSdTEhUqR2m1KUnCZZgs1nBMyY5EHaZBcQrh7w1sKF7Vn2xCtEKp8zf3NNao5g52y2YQdanaew4zF",
  "key15": "4iTZ3eDsqJkFqS5WDiCM8sRFBBWgC2o3X9bMg615bTaxxvd9NWMThF26QUctzHmBExpXxFcgoBufhPB5giBSWemc",
  "key16": "wbrGqi272tJq2oRJ1GGwNgNfFQoYhjyBvGy7kTUS5KmK2otHDAtbfz1dZuG3PBhjYA5apPVUL4KFrKDM7GDF7q5",
  "key17": "5dwewmzaTQjqGJbLmsAGPTQYkiGH8Lxo6QNP99NHsygcY8EndP3dNDjwq6iYRgTDL1A6kHqQ9NGWCh2xb976wmQ1",
  "key18": "3vr9xAgQF2B8eP7QgqejxxdAiMJmhS98fBJPVvMMg7d6JfqHgkD5rWA1wbrU9VtNQQEZYWaTb5AP4ZHuoVGJUGnm",
  "key19": "3336VCFCxcJDRfq8fnfkxGa6EC952qz6CDbv3DWVnYLwprLP8Bpg758mKFErKPJKT3SSrtsoXyRkNYRHArK4kwp",
  "key20": "3RexQUsP6syU9t4KjPquTguHfybHAtsDQ86oEXP2zBvHhAPU5AoD27pC9VK5CLnEUGFFV1QrBEDBVAyA7DckziSM",
  "key21": "4UAXcGGpB7SBZc19PdheVY1puQuJm7W4CE495NuJyNntK8zerYgpJZvcpfwzdaHizQdduG1QCZJjaoeYp7Qx9Pn9",
  "key22": "3rNSjRaz24TRqiGMmiWkDKYMzoZkkyuvMfpCcEjzqPgsK52QfGkYgrF4GvQyKm44Ps4o2TzKjb4vzmkFJ4dczvAF",
  "key23": "3nnzuJaCCVHYSDnc5uVQgmxYaHcUeAnTVPP4cnb4ThwUYauH4eujPn8eyiyq4Siv7UTdHDCv9Tyz3mRGQAxiALdM",
  "key24": "5yHA5LVcWqFtQTb7uoXdLiszYERY2jKPaCCXBVn3r5STUtiF9GKBhqq6BWwPQLmMDcDoN4mruVsAiXEiSAThQPuB",
  "key25": "2Lacs7pCWj2qDc2TpVd9pqt8mJw5FJVgw7s5aFt7Ddgf7G2nNSVxCX2kmCwBtTbyWubKqLrvvUDJ4QjwYkpjrkEU"
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
