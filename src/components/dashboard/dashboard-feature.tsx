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
    "3ithUn2nY22ZLPhx5UCiLLzADshJwTbZjZp5AN4tvA6oFph34DpH9cyRooM4VFAJUmx3HQe6pqkpJrVaKbwx41hF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9jSwgAmzKPW8hbP732Ms9BDqNCGUhfgyjrfPuCWc56tDpPjsEAw3tHJRGGbWufgLgFfseLvvCkbL61tUiC6yj",
  "key1": "57nVpdvLtRNDX7gy81LAgKzMAgjufYkbAPWA1Aho534Y14ER9LSABVLyW6SYnMHk92x9XAWn3ZgTJPiABx76v8j2",
  "key2": "45zpdaBeWEWJnA8S9nUJRPvmdxmuZCEy5GGbHaaNFZfAam3TgGndDrPZhMXXLdsaUzPpzQxKZK1LV1VRWkkgotFq",
  "key3": "5VKQ4rSckk78ZUiNGxJPxisZe5ZzUomsh5WwLDMWtCp4sEXxLzEZVZ8EpPdn333dfU2DCEtNVpcAXFpJs57gNrUS",
  "key4": "4xVQLfLyHtKV43jDKwoifybAn5tr89CoYTNch7bfP7sLc5StWgCfSS2LfhDXYZYAo22gtK5vngCwSKk2KG4UaV5p",
  "key5": "5w1oEN7iTU7F3ZTBttYeogwZX6f69oGoztnQG1iUbeD6prBuedp7z5MkxVD86FZHWcDTm9vqzwn5u3aA4rLjMBGV",
  "key6": "5RJTwK81XhqEKELdWPHb8qS1613CPAygYXgHNCgFGZfoKYVhDQ4PntZPR5EujoZf8Xma6LXVZoD4VzhG7mWYUGtW",
  "key7": "K3cKWP5J1k5rQiMvFqq6RYPmvdYGBVbz1aees42PT1SqDNfWqXnB1grkGRneMxGShapyADUS8qU7aaiaXC6oFc7",
  "key8": "2yinXL315Ju5FrK6rMgRsTeGLnsZ6Ho5iHaR17eDuEq9SXT239eXf5eNTy8sFZByZzaFeBbcUUsHydSc5eoK1iWh",
  "key9": "4TcqH5uyoWfrgGGSJghxi6mJNuC66WtqrX7rhjweq4htSTmFUk8j7Qb2BdAT84oU6yUTgwFABnZB4UpT2STLnTqH",
  "key10": "et5hGgb1YXx7KPrWyf9satxciymshPJvX72arfWynTSxC13XzhFXCCQ1MHqaW6VRCMJQceoU6cbQseCECb35hvv",
  "key11": "33UEgx8G9Xusmj67MXq5gPsgxm96pKhjsoVK5NXRQDE6zgEs2SaWsBo8fiQukJVmuo8tCixyGNMND3X3c9jcV9kr",
  "key12": "31MUAQQLPLR3J5w5FccwPQqDDRsXvpkPM6Tz937UaSkHVArnvvMqbAf2zNUXFqacJY1RcCE22vP8U3KmvJVFNLYZ",
  "key13": "3KKqJvMwLzy22rq4WL7UyX5CXi6CGUrtpKhDNB41LDAVJSX82LU8sT2CipHxP8dni3MLR3Gj5ueV7X6nAa8sjF7j",
  "key14": "3DZfuxXZ9NjuhuKcYrQVS9kFDWgnoSLZuMaPUy7wYsWevjEosnx57z1ADnDDd4V4c2j6gT3eS7PEsNKVgkUDrf96",
  "key15": "572jLoYvxZFeqWWgTo8kzCnKcJWtfXL4XNUCp89hz6BZbNJ2grQ5GJtFq6a2T8aEGtGQKXyJpUVE1L7PoX5QQ5CJ",
  "key16": "4BqVznduvPLVsCkFKFaJxrcWvqhCi2mtkU1ajWf3qxarmvm5NCJyFidWP2ekHyeWZRFtL6vmxPfXYercYXFv3c3n",
  "key17": "M2G3EbM7YZcaeYWhkkRxTYsgKNgY8CZ4ZuW9tLfX8rViTBpATQoegfk1mAQAC2pMF4aww5kYim4xUPYJSMLFMFy",
  "key18": "2SPLGnXbnjMXKY5q5cGBLdB5gwWCB2TaAhjfyhhuZUSZK9vomJfKGuY7pJpNXQABWiVqTZMwe4URK4ZAwpkRa55x",
  "key19": "4yFsMcKSnk6dLWq67NRbZ6rmD1SmwMga92qgykTcfz21yPotDPHUz8EznHVM9dxytQA9bVos3Pi7pXUTzGZQ2wtu",
  "key20": "3WKXV9FNAgRjwFDAQ1SGhPzrmnRpFrybDqLmCjuN2CbaMDLiDVDQmoCvgo4oakue5HSxukJ5HQcEfrzwGUo8fCpU",
  "key21": "22GNmUXKrVpbJ75nPtzCwaVvDM65qWmEFMm9e5ent6X3AMHwwsiTYk3DWCbgCffPM1jgoRHXKBL1gzUofubRV2tE",
  "key22": "3tvCsHJbe4tKDYtyD9ER3Cw7RGwyY128MAqLBSMaM4R9ccqs4XWG6QmJ1FmCWBNpTj8TL6gdWPnoK1f4fdVQqTau",
  "key23": "4BPzD9VLaSMeLAAZ3bkkr8eHWPpV4jXcJvMHU81Zo2LhNdgk3oMRerreJhCCk4BFiXGXDyj5cwHcJKWWbmd9R7hZ",
  "key24": "3T5hAfFZMS52drtS19vM2RgZ1pS59Gg2FcroLcEDsTV72hLpgRiLwM9VNPgY9azmdNnz1ikeXBQeSFkT6yHzUQrd",
  "key25": "2EXCP1y5VJdLbCckEXj9sDCbjxhT3nxC17GLuntFXURLaTe5YW4fQDzQru7zK68iyNdSJ7rWydoE7bBkgW8AuDof"
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
