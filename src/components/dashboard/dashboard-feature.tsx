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
    "4ZdxThHxdStHJCci1TSJUBqTuUDWfD5d9u28Qbetzt8gk7hMWBpvRo2WSFkRDqnE1X4TX1WLWr6uLPBvFpt42yEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qnBGMYdQq9Ur7DqS1ycGoL4vCqsDmAQXjTSM5f2YbALrxcrkZbi7DZ1Kup76mnpZDhbGb1c7czFnz15u8Qg3nQA",
  "key1": "4dSM49DDTmVcqCWksC6yiku1dc2szJrh7k4D6xoAPcK8xvxtduFD22bHEesGtvX62N3gcjwBgC2DKedS1PoVwsoi",
  "key2": "5ak45PAtuVrSHT54mP89HzePUunkzyNBKBjd7x3aMWgHGJ5dcPQNFxbdYNEj6rK8fYwskuDA8pAQVPWUHgui2HvW",
  "key3": "2wfn9c8bk1zii1J4Vcf9fwz74KHbvr3sWRGQkJdeL4m8uSJjzoHHgmgAzoMbQUUnyDqwJr5PtMPJrbHqXG4DpVWi",
  "key4": "qzTH3xjzbRmwoS3rU2V4vtYAfXjHuKcQFAHQKgVuwppnq3KCt7ZVsMmwm9KopiwuCa7rp5oo6vxDoxssMKDFAec",
  "key5": "5vZZCNtdqGBTxw5T9bWsvXrL4io5upMHWKkAszQ1PFohzgZ9yZ4bzAyxU45YaDg94xN8Qpb1uhJMn3pTP5RGZiTj",
  "key6": "4KUJRPbtX8Dub33Bkhnmfs6mR7A9TU3SaWFNrTsZyJPYPQeNWq6geEcTceDgt6TQ25r6Y7Emah5nPSwbw3zaDcGn",
  "key7": "4t5WkKftKHjwwudUkMK6v8GJMSaeasDJPVq6X6c9v6PMMEWByYNWtGAabGm3kxkLqutoDcmJaL9ST43uuKr3iPpb",
  "key8": "2DXU1bdyQZoQS5dcGyqohb8ovoLyqyEMappzQufdd8iqhFfAo8K7bcF3iZL4XEoUmQFgJ4xMkpnby2bXf3mKB6oP",
  "key9": "3KLhVZWbJttSMEtYSksuDqYVxoL59qimhnDaGC8AUGvAUxewtkiT5uzoK6hDwn6kfAExTH8FQyUCLHydNyFGUzem",
  "key10": "4iX3DdAJ3Pk5m59pM44dUvzK6xB68vfHWjNcdtirpDBDBbbbkJEoDi57cZS8gThXxUuLUi3ofDZ8JFpQjB18mmgc",
  "key11": "3jubZEgPMFkJdLkHTf7sTdstRR2rcpq6CD4vy8uiMmnzRHkyywH2qGe7JJGiAENfBAWkykdHaeCroaWyBSjj2ddH",
  "key12": "SnHV6Gh4tNFaw9gE61MeLh9LUzCACYf5d2tkzMqWc5g5Sjmp561EkFpDcSh8JQd7PUFf9EVfoXLbcfKn6RUjLoa",
  "key13": "2NHQqRgpqSdM5TdcCXtmGoh3jE2ZtMKrJfEUWn9c6xMY57ZEW2rTaoSKUJfGkYrkbLbkQDViFzqYV2UFKGxVvEta",
  "key14": "vQtxnPBWBbcfouHBsBFKdXzsdkA33mKyLLKc2bfqVyaq1LyprqjWLtNMNEebz7xkrvPDnPZFPt84WP6QwoouZs5",
  "key15": "5JfopbkSjmxxwokMX3Ud5V2XGhsSsn7DGzvVjkJPtbiYRL1uLhAWf5mtQ2rqL62aXNqpgKsaL37ksLN7qRQCYWst",
  "key16": "3mrE2QCy5no3sqXxy39mPe8Mjp3RvXxHAwYZczZvsaFJzxigz1yEAdz8Y5ww5iB2NmFkA6xwpyhPu9AVJ7EVqoFd",
  "key17": "2GAZB4Ruz8myaxdWogg1nmKJDgEyZCxfeYixTpaGBJWWsVHXrH23xtBWcXCDqqeYAxUe1VbwaWiwsBkCwwPm7or4",
  "key18": "6351Hhi2jWmn8HHVhx6hM25rvcyX3EKe6gMvFh9uNaSPLCLr1rPTLDnpu6cdCoKYiDXAXh1NuLTMEBhj1wXQeb7C",
  "key19": "3Ksqzv8dGwUSfeM3CKpi2151E1qJm5ruqoUZgXDAa1TmDoGtxUKQeNgDqopUzUa6uwXzVRZeaQjQEebE3dVevEmR",
  "key20": "4onmdWkPVEUpGaE2e6xvsN8PZJGSEPTfJ7RTivAHPKKiGHnDr5MDwFiZW6D4xBNRJwG9JG7c64wAX1izCgXCXH4M",
  "key21": "5MRjTqWQjLDVGEcJwngiBEqC9mCQQaA5mXTWvX2LDzZEn5YkzkZJVXnMbXExwb15A4PgQ5i1BeEqEZTqjY1nSXbN",
  "key22": "5g7hmZNmKFeX33Kn1av2Xdc8EHrjvGLhA3SJUHgcTf14BvwY8zvMvAG9DYjcwuke65Z7neZWi7RL8uFRXoJ51UGq",
  "key23": "5QzsibHcWo4L1emLgoD6wHHXxpc6Y97oHKTeDtzdtYdmX4Rnx6XAA9dnYQ4zyJArpu7voyuU49a261hZrKyzRjUD",
  "key24": "3fk1W9udzQbQT6swYf2rpJfb2gGShA48JBecBKctj5B8S1rR7cYjbKoeeGpJNgKbF7BiNL8vJUTvENhUtoc9XX4u",
  "key25": "4U9bSN4VSnU38cBZXqSqXaY8s2zDQXuP2xCjCSAvEjD9zosf5EiBm1zfukg24sUBW7J1JDNTYwbzXfzVAnAnxjQg",
  "key26": "4h9tJXd4Ya6C2q1r1otd4DZ8Bh5mquyuPfEbgdbPscLY5EtLF8WXc956kur4rP3T5ATncuQLArtJaqswjaDJnGQk",
  "key27": "2gqyq9Jtp75iVs1pyJHRwLqMJuAiwDMnia53bdGKRGy75pHnwZBbGjAam14CeBo2Rrzx7dimJJpxg63hfmv7wsvT",
  "key28": "GQM7Wm1x8zjtRMz7yZ9U3J1ay6VjbBcxDECxWTe2XmxRYWQ27ag5zXJcUmUuvpWkp3Wqcpxj3qX1THxHvVMpvb6",
  "key29": "5SpksXhGkMdtWhPVRVySw8GsS3e59RjAZWLyF94n2buQtCX7gUyknejNzMAJEYP3HZTnmg5AsMqjJ6V3jtAif8LH",
  "key30": "5VgCTWdPcgwqftWCqy9yH79ZyzwJo9aSGKDmEZhGcLdjYiKFZVh4NKUjgVRHFuVr2Y3zFGwc8prDt4vxic6ygrMQ",
  "key31": "5N1rGnX3kXgLhgcGjYmccdbrLMAhykggGDVKRD4FNr3JxBBBU69GFjgmiFdduCdcv7frB82U679HbYWaCk3GkZBs",
  "key32": "2WQWfPCLuhcCT9UbYWQnaF2Ek6G3MaBSwE5K3QUsYpg7ycnQuB1NShj3czzkfxyJ2A6fdQceBpkdhZ2duwm5AjmX",
  "key33": "mczZiJHqWRmWt6pfZaybv2sjrSXAztQf7h4ZvsKUDWuEMsHs7CD8E2FB4WysqbHeox3c3vTXmQff8Z4sQxdF3y6",
  "key34": "55sPaw2Xk7f7Bta36J6AoYANoww2EeT8pswG2rcQivkvG5mgHMVQgutwSujn212Xq99rszoLYxu6KwwApbYXY6FA",
  "key35": "49vKonfj17tVj5igkGe62FBWpyq3tKBbWxpZSfwDFDmYfteLaCMwWQA2YCyZ7SDkZiFW1Y1KFPCS31gkMWkGyfJP",
  "key36": "Mstps8bbQxbKyxxwWDPaKywdmmntSsd7PKEgZQxqhLyyY6KzZ5s9vriQ3sP8P6VZRZKeCPXCVKwMcfTEvuyz4S4"
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
