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
    "bLi68SiMLxSGM3nQpH31vHf8BHy7apYTwsx9eJVCLXez8v9hu927GpbYyZYpSiHd9MiNs9sWpJej9Zrs5eSNjqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Krz6sBpXniYXGndcs4QEKCVuCnvDhYwzC9SsLpNLHVyCAHg9eHoSASJkUhvaCPGMhXAXrDMiwUo2G589R75ZkVM",
  "key1": "3qoPiMqUmvZNpvrc4bjpRsRBTJMEq7ijUVooNeUmZ9kYKXs7hWsk5rcRSnaQSqEZp1z6Pd5Cj6CWPwGbvZ948qGV",
  "key2": "hziDPFQWAsoZabDu3H5TtQ8ajHZVwa2CUkfxrct9yaD5zqHrEdniNvuyGR5i4kTP9mb2XMURGy1ZUQz12pcNJyH",
  "key3": "4v1DWGfW2gs4QovNPYumQRxmstbT4RT12cDyH1LnXS97xF8GdCXnCkPSxSNTv8mEvNYM2eg2P8naZ2X5gvredSJt",
  "key4": "4cpdoBarjUJWi1wUyEPiCKnWbxUT4wDuEF3Z4muUJz125NaJ2GsGk3dN6QZCwopuKJzB1E9jwnN5TzdMfB5EyDjV",
  "key5": "5Yqr7NzJCGXJyyvdKwoWRKe9PhqcXKNeLKjAi1DoMbApSjx8SXX1x3v7DxybrNBSJdBCXhVAo9Ez8dAvbdTLEpam",
  "key6": "3ZaU4nxXaD2cCEBAphkCexhveixWsCTtHx3c9rSxZjMtKYaJ5TQJgvdARmDm5ny8ixyzszWjNiUE5VUgoD5zwN9b",
  "key7": "24awH1yCeQPuSBZFvr1payFxfkme1ptLiHnRxLTxWioNSJwYuZbb6EC4GX62787ZvDydT2TKkNMYcaaLymoUFan6",
  "key8": "CTJDZUJjSFQybpUqZn3LERYfHKNsPZXyLEWAbvsxGPeTdZXC7JZzoREXhnxEchkgEu7jcBKb4YZgJaaTyCQ4VKZ",
  "key9": "2CxQfU9tpscU7vPY5H2ZUSq8XLwa7KrvcAP8p3UY8uvtu5eXqF2uQxjDQXeHgjQLQBkndBrA8dCt3y9aDmUz7nsL",
  "key10": "4woSVMwGYQLbFRaX7g2ujo5dAWxWbSa7sfkDTagxY1EGogus9G2cxdfb6amPFkAuqqKhS7fMa27LchgvscXqREiz",
  "key11": "2u4wz55MjhfmRLfaJjzgKk8UUHrj42cZwWbrnmuj8wEtF2oHrib39p2G44Dexv6ngBX6fbX6bMm5AUqhqBV36BPM",
  "key12": "3Lr7ocQB2rHhjcZcvTie4UBg1anjNY33pCizaZBnjQcbkTcKiixPB9Bf2V5NgXVdTpP32dSq6zbwCvgmZPgBpLKd",
  "key13": "rpsbv7vRGhc2JWacPDymaudSzJreB41pwrctQDhDcRhX4weuzPQnEUnq2R1SRG34sUn7tWXAJ36bR8gyJFZo96g",
  "key14": "34WAPDXg1UYApVk8z7cjJ4z9KGek6ng4eDMxT16hzXoykxvgy8NgWm5Pa4dX81mptqHL8X1Yy1Wa1vmrJuCsJ67a",
  "key15": "kM1U6g2FQ5UoGvL3vkmYCR5rTjvdK2HjRKtnDXfDkoKcSdD6KC2RvAp7W3ifnncUg9wDLkDKHw5HbWDJpxo7ziB",
  "key16": "3w5d46TUHYW1dLSk9yTaeb83VYwVC7B6GCXRfs6SWPvVEaMm3eN5V4C5MFggLxdg1jsVFUtiP3Psno6zisJv27Cg",
  "key17": "1vbvqi3zFMc4hnFMtnQyE8iVrhKCXv7vq5sK1Uj4SPWhWEEd1VvTtbKyQMRz1ToKu6jH3LFJHXfgCrBeM2SrYBc",
  "key18": "VLy6fMvp59ajExMdhvkj1YUT1khDAfPFZCBtMrGAxezXb4hX3G2hDnXKHHtf8TPLe23ddoSp8Nrnz9ZzyWNZa8n",
  "key19": "3XsYFDjvVroJ3M147kN1HT93iCBxU7MMZWGuGFVX3Gov6BNhfrbZr6zzh43dRbFoTDN7LYvraT69Py3F18oUAvzx",
  "key20": "3hRWLbo8cWfPx7jCwRWL9E3QaJvjcrtmYTxuxz2ppn8LJQBJEjGDg6Hw7Rpa1e6zbmyYytuhkyhCMoBTAwkcBAXL",
  "key21": "47FsevWJj8tFiFDsxPodWwH9kEnEAAXkFyimBVVZKurXPvvurGw9BYabPPwqAGv3SLh6JDMuDLnBNvQ2brMVw3bQ",
  "key22": "2BnkoULY9z11U839zxSh5EUDomT1PpgF7jRM5azaRVF4tLwuabyg4781TbYbHMKhUqAE58KYfbFxUcYBWwG7Nc1z",
  "key23": "5cuymJPL1KSZNGw68XT6CSMt3DfnRzdV9TC7MEr4p77oK7dXsrqugnjrZpzQmgHpBGPQXrJ7naG9hRpoefHMWh5m",
  "key24": "5t4vrvPSUeCxSgAVGKjaBJh5anm57WaRU1ULekmKkVkEcMZyAGPdN98aDinBfq2i79s4ESvdbVze435kGLemReKH"
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
