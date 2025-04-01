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
    "2bWmsBYX3aGWU8Z4TVTT12ALzCtAEHvQ4U6qphtTGHqccyZZ7DsdBgE92j4tTL2BjeNtEyeGkVxWPHhWiTCi58tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oJxJtpGMkMrLfbVrJrRd3M3KTEbR7RKmTGjyrG8Vh2WFWCSLo34LxmuF8AoFtvXQzwwHodyqy1ZZrTrvcNXN53",
  "key1": "5UypU5bAVeSbEowF7Bq77GqjVRGPS63brVx9QUwu3HF4bzXW2nd78ewAXfkUoCMfqVhk5FpFkPRzRB8qG3w35aAM",
  "key2": "5S5XU4tB1V5UZVDz8ei8sd7LAy8i8AaUnqqNPG468dbkws3Mkre2EF9V1K1mbPQjgN1q34YoHnM5HN1sb816aQzS",
  "key3": "2ZdqwKNWmb2Sxc2o2siUqfgZQpRdvdwwbYzDT6WkRmoxHNnmXCNEMbgeMUEj3AKRzmm79vYQKGR83z1GFYbC5xho",
  "key4": "4TSxvLhwtnEBSXqAniBt5F1zVwya3gDxZEsEXoKnoeLoFWwsx9pD6o1U9LGo5XZ7zC1eGMdbNyUgk1Jpk5G6C3p7",
  "key5": "5acfvUnRCWbykRGbJxFcpanDtMaSPNrov226zQ9KRvY3eHcErrMapiC5zugK4i7YxijgEnbiTwSD6euTkbgUCU5a",
  "key6": "hcP5RCchW7y1NPmkiCviorTRi9GkFi2E3QDpYaFgGyLauzbt4N4UNvT2S9HJGzASc9ecSkmStDjiZ3RH9XjHAFe",
  "key7": "3e1PjLT382yfXMF7Rno3umxWHeL5Yfdjzbrg5t5r1rCNGSF3tAHFmG1dG4y1JdqceJGVEGd4Adr86dZjd5YVfZna",
  "key8": "quxpUDyLhS5JgKmypkopYPJHRrSsgdtyn5oHKZMcRArjxEg31F9WATfsJ1CARgEUCEmEVq7d4t2oWvKNpyAYGE9",
  "key9": "61QE9ZfUShVnKcX6CK8jUBC9zYYfXNEa5uKRDrDqabghmdEscMMfCYmpiht4QS1ferjYmAbVXMja6ExFGXbUrqvf",
  "key10": "2i9uLz3JJua6Re8Zm6vR4BWDH3whzbQq8SA7aD71dS7tBsur7wPgisgaA7KrJz4yuwaEjCcquCXph8VnGfKYwsVb",
  "key11": "4xqjuPzwL2Fabtiis6PLnnPrQuqjKji86bh8k2V6JiFZuAS7PGJ3vTVx8ooU1tDJSTqkAw5WEfDEVRvWdgCfKmaq",
  "key12": "23WWzc85KYC7oY6bkf53nmRa7jmyFiAu21LXHYGLwyQqor6FGzBV7vSybGdDE7oX4khVcFS5izx1bt9UAQKFgktZ",
  "key13": "3ojCYGko6AVqX3Rsaa3MFD7BjoLEG1GHXD39qb9oS5qvziuDqxoHWo5HCtvyWH6QUX9rf2Bc6RXs2Dq27bWUh6gF",
  "key14": "xGCMX3sPmJjyCbF6zg71scyVipta8PJmwxm1ruW7kzQghfYYGLuSbBrroky5Xf7H7oCHeKRL8gMbkT1sC13zaQN",
  "key15": "51ZUQQA4RBEgdriLKfzKN73g8jyp1USsKcf8Yu39BXicWcgzVz4y8yg5TGuFVpwAQ9oiQLbQbMBAmVgXtmrza4QK",
  "key16": "2uEvXyHBjJB3ioqbaMk5osGSuDviMMGSatMKSjt7ug6LwzZiE5CF8KccBR4WYCGY2KCM9rAM7Adathzi1Sdf232K",
  "key17": "26iJ3SPj79TfP9sXHedw29tqSCbhasvk8VJc18hZRZW2wacnsBJtKH3XAt8L8ndwNEKm4AZkdYjtgWXpPt6rRYF8",
  "key18": "4fxAGdJyQoAJGwRPq1mB5K2H2wt6kSVaoX1VKRHBjUEH9M44dG5FYZNDXkCfLw7Bdj4gDwLTFNawTHy7GD51dWfE",
  "key19": "4qHSFoDKLxGBiSKSL7gpDofcyYZpF5eBoA4roJxGdztG5ZqMivSCDSA7PLENG2M4Vt6RJo7sMXx1YVUzgKnRuy8G",
  "key20": "4KmHmNs3BjckzWaUygpT56DFSnDmWvPWoDkhoAAGpcwiThX8EP2hRzvMXEMJq74FbBnLfFRmfhgH9ufA7vv71jSg",
  "key21": "2se47CaxLXgQWUyQCVsXQWrdXQn8cij6rVmMR9ihzExysJqo266M2WW67RZB4JVpvdURzDcRP3tUCVNutit9TpLQ",
  "key22": "2nk6aETvaKfJi6yRKMLNDKhJ1CBryXwi2SzcfXfnuBtk18nQhU4xSvYJQaorz24HmDVFMxZ5WKHButBKRKQLzySA",
  "key23": "2RomX2UwHAsaDo7YEixbC47GY9mAKWVVpKok7cMkC8tAoyjLdJ6biunyCQBhtrV4TxepwrWLb4Rz2HXejdaxrVby",
  "key24": "2tsviKPzukoWwuMmtRL1XbMHfrig1A8f9funjD7tdNF3EQfBLgVQQnPESJ13S12PpHsd9iUtp9As7iLiCFcJ7Ykn",
  "key25": "6T8UgEMsxuNLvWmFvmE8NYUGamGMTKqGFXBbGA9CZ1f9pBtKRLQYBef33A7rSuRvgxQEkjK7LK7VpNHSGNWCSWV"
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
