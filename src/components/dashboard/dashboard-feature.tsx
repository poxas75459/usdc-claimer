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
    "2uRMZjt5abfyDnQhrRJqPh6prfmdVUB92yjLKihF3pN2sd1Y75KqYnpXqp29rqwZRZfPzvexhSR5ZhLyAN56c4Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59E4oEpFjNRzg3hKBA2bagKkQWoZveFfsaerXGunTyhYaKN6Whw5b3U3yuxFkyJ685Qb5q58wKyyNNzsYEv5jhUV",
  "key1": "4c5CvbhWYpepBowDxvUKgMKhnxc4u9iUEoE9hY6JWAX9nanuwM2x7Jy4HASgRkbu3kZucDHpXNso2vM2EzHjirix",
  "key2": "3ncEatkq7gYjBb5p2JZc7PeubRFxrY5frfmGYyQVHszoSFFR4mUuQvULgQkd1H39jahdb6UuLDraLXbmZCNgXEW8",
  "key3": "39vKdDUKJdfkuvHBaxCSFWvGCyyWhc7v6MVPTytYAAgwzqWXAyUL8wsX7cTD1cbgz3vy51ngySV9f4WxQzDLuxcM",
  "key4": "5sFpGbbwqaDJmHZicAwE3ehGU2am78oZuxeRwcQtW2oFag6mjyed32dmfaELt8xGqVz9hes2AMYreFieeJ32KFcj",
  "key5": "4xofKexLcbcXDERq6r6dAMAbWhJNdkuaLg25sbJzXEJofMdP2KMUrRS5GXVagQtsfwrACNXmwWrCb4j6uDjtHGr6",
  "key6": "5n6QSavzq7jT6WSvr3ZYxN6dbKjSSkEi5Q5nEEiPgVfkv7xu9ehtfw6KNbxg2wEL5nt6bycHNymvhpxuQgvFt5Fg",
  "key7": "64cQ8KzzSfuHTVoPRLeqeNsfLZ6VhWUe569EWPCct4DC88UhjfW3K91SM6iWjaXQz8CjuyMUxA1x7MpnUEP5PL3p",
  "key8": "3NWa5tqvya9aKH4WqisLBDtLqPn2UzJwZmAe5TWGEzRkb9FdMw1ST5GqppmPaiAffarnPkypQJQTPCMHrs9z6Gt6",
  "key9": "4QHDVssm5fZdtRNGhmL2hzVEocy3jpejcX43X3MPJTYjByBxL4Pf8nAd2SYox4QnXcTRcqfsUhJvK5qzM3tTD99q",
  "key10": "5kjuaWoz6vVu3bsAX8zXPiV1eMd7ajHDbrTBNbWxZEejJFXMrpvRVrS31LLdBtGEnTUA2ddSP3iteA6AB659wLEi",
  "key11": "2T7cgGuVabKBkdUuvMifPoCuHJtCMqryHfa1N81zynaLZLGe2AMC8hr2WpKVtnhp7MsAAS9nCUY15EmgaNg6ra6P",
  "key12": "4gNFHYDgXYjv2NMKenxHoeR64BwDEbYLQ89dyneLoW98D3U5xLNgs6k1utF4SbSsgcAJfAyWPUR2TKQVcsdWsHjz",
  "key13": "2Wvg22a6nwGgrhNCcgbrrxez1WUeSmc9BP8DKNhcKm3jRChg3vMM4YKzKv111vJ1J3DgJbwGvtoTzc3dKC5PToAS",
  "key14": "3Z43HZFn68quBtUz9ar663xQ3VNZuhp8ivWu32waiabcu983pbEjjKSgEU9xR1WAueK5kCFXN1ZbSWhv4QiTEpxd",
  "key15": "4QtFGphvpotQjbkfSHKZSDQXGB1aPFSSBYac5nfpQfzfK5ksQ6WE6y1xLwT2aJiLZ5JyXGkx2R3xGbgdUYgfFfRP",
  "key16": "roPZ1v2igUa65ncjxh1e1DJysjdyhZXKuEzspuoxnuhHAmmDceLZsbM5NWzetGmJzeSPi93EBrW2TPyMDZNdSHP",
  "key17": "5uXPs1sCpPUAZBsAepdx9QPfjA53u6UedrD1bUWjkyLCKvbhi24aozr5Pe1UgL6BGRnMP54ccQJVeVCsJVyHPMaH",
  "key18": "55SDniGR3ueZ4rqWEgWdvgB3QWWjoYXavD7rVQeGNqSFdz757BRwFq6KfxTuRwKMx2dY41P1iQn43vQB9qCZDmHV",
  "key19": "2W2VBXSjKPkFudMoD8CBjY7jMV78CM8hMZpynQyRjNZGv9MZWgXV4HC4gWcvZmHBU2bMDJHH8s67S9AAFqtn69He",
  "key20": "4yh8CkDDrPQ5qFgbsi2LKukamHhpqkBt6rPzTgcsu65ThyB8ezn9QCLy3QWZB7ggDYN9TjV8VdjDmzAKeL1iHTqF",
  "key21": "2PS57fCMbt6oc3D1EeeTTbiSgSgqizQxERs4KZwrag1xtEn5bQQDWPwwgyqospCocbQ5EGFv3hBDqNucq5kZJrCb",
  "key22": "35xUfdNyJJZDYqNAE48Rf33h8t9pi9eWsbPAvXb43m491axomUfcES7KrEN4728mTDabRqKXJZ8z8EKxcgw3vkUs",
  "key23": "5kok3qqEs7hRarygSy3QyWF5R1Euwb6vodSwgiRdwXx2Sd93ZXYanRszJdb9yCKC3jen4mdLrcsfjDeivqWei4xp",
  "key24": "wZnJjtjtSZBKXeFELLyPbLQ5BCk6t6BUV9BHcLDhogrdgavFiZNJ1SMW5xDyikfiwsmy8MirFS28rYKDqgxaB8m",
  "key25": "2G3GgU5LGkyLRbMKeeen24YwvMg6Q3XiSxuHatKPL5Ai7yemW5gYE9VbbB8NGJg36xw3kszgQj5BcyZSdsXfv2Ej",
  "key26": "2ghT974eeE27ZcRKu6gNSDqX8XsTuwaZeUZDERCjKxRTaoajqvgQe8cmeAoEi1JtuA2iLBuvKHB4YrC5jPr2fBk3",
  "key27": "dZiaeYVkZKw8n1ESPMXzShqvCgT39p9mkUfK4MRZQ15DY6pmBUJrSoGGNRSJyxJRnKFeELH2BmMaFnYdp5TJjYs",
  "key28": "3kvV3U4j3Zf1cfXHZmLPtXc8hbr2gmmtPQHno2ssq7d13GV8TXdui85z7juytSGdz6g5sJ25tt23YerFJJCzJCoJ",
  "key29": "3P4JHsgsKo75jk95iepJeDS2jZZ7X5JqVSx4gpNbpQ23vFn7PZspWS89ugXvM6ZEHWE2FRC1ikERqaUuNqzdSAsA",
  "key30": "1RYf9bGZcR8r21QVtoHtFmZ3gw7SFdDhHzBErQBkabi3SNQrm2UB3R84dBk52x4aq7WkFmAgEVpLVSXaXpwrNTp",
  "key31": "2eapqwYSkT8DoiEZEnyz5yi41QzjQFUZfoXriXbwD2NKYC627GLRotc3AvhFuPxwL12SCatRv5uNktiRLEfkrtcc",
  "key32": "4LcVbvfu6ngyVAmYUyDizXdBNhtddSfQmqxiEp7wcPnygNpbB7a64BZkzn65tgkzmft1KkautdXQrt2SbmgFDG9a"
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
