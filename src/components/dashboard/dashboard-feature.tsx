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
    "2SgXdQEh3aZN3ZbpKTKPEC6VpFcuF4p4HnXsNzB9XrWYJKsYNd5tZc6DCK9HQSRt4U6WirEgRaddjyYPo3vyV1Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymDKDzX4M7DN29BbdUuXE5FRbmsphLm1eDFiDrdUaRkABHQ5i7bbG2KHJazbnBi4cs6hJAxediFvcAbssaZt4WM",
  "key1": "22XewvpXoBQDNwBcMcz8pKYXNPyLmmfMbLaFSm7Cd3NfwxS1YihYEpNeSZvSbe5dBQUexxewkdVSegwZwDP24fSA",
  "key2": "2t61fC8ygemZ5YgTqY6KqxtnxE8HKPytT9e2gngXHbS1bHBn1QMpzGQPxZqDwKoehiTBSC8WvRHU6gpGe2MYXSRb",
  "key3": "WNuqc96muuF6uYQogSyXmUBXDUtpEV8aaJ3ZJUDAAufGcAu6UsmLdHd2UN7xiXpNarHb9SxJXfkTp1J4ryGzfLv",
  "key4": "5AiRUVBqXPLG3VtCRqxYU3h6krrsSEQBTALYfQk8odWtdQCY9LrDsv7g5nuqZYE9c7AMRzq1o9ntXV5fT7M6JbPG",
  "key5": "2MgqWAv6EnCt6sqC268ZeFxcixEsyNi21FWjvws2oRpws95zZiY5vR8sCTqxauhwxHr994hEn9AFNfqSCak44jHg",
  "key6": "65AsdKpeT8NjBY4tDciuyc5nmz8APZiFwc6GWRMQjJP1TyqrzHku7tNYNHyonX4JmEdpbp15fzyRvQf5osbuYWuA",
  "key7": "3fiLhAvomZXJmE8meiBDJMiKuGBSevtEzesCLvT8s4DoyhxgC4B3cLXce5uVLw7DFPCriaRwyaMo55uE9A67kGFQ",
  "key8": "5RCMQLTReE8iriscGq77yZWpEPW7XWZeSH3wMHpkdVL6dNsGHtAjfyYgHACm74xJfVVDUnHHhbY5gSY99NDG4t2P",
  "key9": "3QPxHQVdHUeXTuh6TdzNBQj8tKd9LymApLwx2QXAhpSZVd52nvCjae5NA3vBbW71cq62GDsiQGXbytcb3bufCSiN",
  "key10": "XuWx9HqSdS6Lb15Yw5fzGEZyr6UeTiqE3F4vtnKercEcApwmDHLH9tp8ytYRXUkDk9gRXLxYftB8fU4CVZ2cQE8",
  "key11": "3eTPXicVhx5dHzLzwMmXRtu5TNVphaPgnpgnVyceFy1qM5XqpjoaJPR4qdyFtJLag9WX9kXBLW9Mo528M8fLPodc",
  "key12": "3EvjwgwtK9HE1MjZx12xmNRdbooJFPwfRzVcmsJZixfaQ8uGCrRcnWHP22dhpSKjNrJbGWrdQgjhZB3rmNXVhdEw",
  "key13": "5KZwULYgnym7wCLZFT5vBNGQr5vC7c1DLZc8ejBE8rvBRmf7ciCeWZENLYkY4VoNHeyMXJMY97D9emdjWeeuPd2T",
  "key14": "cPCMRrZENkPkjDuxtAoAopSxSHr6GYhz6gnb4mSCjcJPVUBZnrMgVwXG2Co3fuQ5ft2j6AfdKcosbS8kbaGYBBA",
  "key15": "4syz4pY6iHHNDnN64YdZcioF5dwNL7m3bTPWnwgD65V3dNiaYaaBL4YsfKPpWQGes4urkyAjQaSiJLd8fGRfdHTF",
  "key16": "61qQ7iZ5UgAkSba7HnRoTogdY4C5UuNe1PjbTVAzcpF1W7XxpE1XWBHcFRmgQbyexPudCBD1RY8jWzuuXZiFZsiC",
  "key17": "57WwAJ3EaRhpZY1ycKJth9Xnt67vHFzhvybrvpRVdfJ7yMXhteNR27898MBi2L6gMdvS5yKuCZJYTmkTDeB1duQo",
  "key18": "3NUpw5XHBPKYbwmNnY6guZa73bFM5ftkFWjHjHNuJVdvGBZWfFwLzqeW6RRbLMtNkCJvRRrBYQnikp7YA8aPtjkm",
  "key19": "2JJeZE1zif3iE5zU6AbtKdQ1koqjqpt1DRcmtUQCqsq8LveReGptBYDn5dW6fFW6qwcCPfg4oWXGGBnNy4G9UHmo",
  "key20": "61SGfaifkyrAjAB8koXZJzK6CzcM1VAvkevXnroRJ6UsJxX9jThGYJaCjfZdv9FAHD1A8Y2fcRT35a8hUCQacvN",
  "key21": "44UsSyw7WHxJX4XUo1G8eQ2f4t5tGnoFQLNiPX7sNWnQ4AF7FNPv59DrcrkbHXPFRSteS76yrw3mW1gfKCdtXNnM",
  "key22": "4HrKmJETVSpWe8ee1weAnjoepJYLSiszuxBqRgev7Jad85BvJQrfBZPaTGDS5NEi8ViW8SFv49ToNjTYrJqdLR2c",
  "key23": "5GTzQpitMLZwUBW8YW9v78H23ZLLchuKyCGB6mywaxF95ZF2FKx5MfoPf947qQ4FC1RjgKYxaXxY4ZCh5u7J3G22",
  "key24": "4M3kVmY3a9LRhKzR2EivUkmMf5Mj1itF1gxjX8VDq4vPCu6ZF8NX9PCewfHnWCXH8N8TrgZyqFajcTzYE8ykCHQE",
  "key25": "tHhQhfF21Y4d7eNBwZkYBj57CEJBoKJ7ihBMFyuXxS3sejNwREA1TfqRzjNacksxsJyt4F9YHxbjU1jTeRr4daY",
  "key26": "9qoocCLWr8ef1Sx7mfLshW4RmtcTCdvxD2bwTLfoLncykPV8G9vmq52FzjWC8G6vr8cf7YA6jJvDi6jwXmuhxAH",
  "key27": "mso7uPcKiAnjHCE1rYccKyoHMScF7u4AKXTu1ZvLXCKwS6STSvRUzKrsEzdXjWomWuLXUSNV5Umi7CMn7xq38sQ",
  "key28": "bzkAadTYgZ3ULek4jg2s3vNdVvUTH8CcXdzuh3XNr7Jk94zwwJvb9gdMK4EJao2QcmnyB7tjU4tDz9rmN1NWgwE",
  "key29": "5RKZJUxytJLk8ZNeDx9FJrTTbKnwFgGvj1msSxfGfcbKjRmn7s6d4bjktWG4zXwxoJAu23YFMyiEhxuXJ2RzEdH2"
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
