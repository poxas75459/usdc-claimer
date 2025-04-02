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
    "42cMPV2pnrPDeDn1njqbNN2FsFDGNh7JLSdQa2TNfhQmCqSVyeDfAvn1H4c54KrX1CQrEn3PtZmKUJfAzYQ5grqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GhpLBsRNAmEUrVYdGQV6mPCmfxgTAhxnjwSP3sBkcPSLwLDJezMgrfHVN4FzLiZRLCSEP8JyG957mLAesqHjrS",
  "key1": "2KvG2kGAdagVyaT4Q7zqnTSKWrkAoGJpiXetMxx3fgzoyPsgnbsE6UncwoRgHchhgDMqhRnzBYy7VRt6hrQppGQo",
  "key2": "5uhZxpohXbqHPXtRxhbEXuWfb5rBkTLUPjDUpipTYJuLsHt2shh7tTZF1wy3g2Xg2fYsuk14uTNPEaRwpj6Y9Axc",
  "key3": "2qbhd2Ng9rhJJfXzaVe1zv3MzQaxGGmy9gWhN32FX65piQ2ryQFJcN3Vt6ffE6UoQCkk6shdYp656o2UBXijQxV3",
  "key4": "5V7BX71EoKhV5pvEu4UUPk4FkavMXYxCGBhrzWYCQuTfqu7eMqssPEJH7q5QDqyRZ1wVjqhe7K8SMJPm6N8CWSKb",
  "key5": "sv57mMiMx4wRvpZ6Et6T33zx7wb4HACrLhTrCicXrR1fvZaHEfTqumtJtDf9zs3w5xErz98TDgjgeAhotuzGRvD",
  "key6": "awMBG894jZ7QdjBjJirriwp4FvVkGStG8ZqLPmhB5kP5LLJDh2FerpdTtVjCmM8KA5E39T6pFisCUrmC6oLhWhU",
  "key7": "4GpkJFkZGs22oX9P9JofDtQXbdPUxdpCzWuejSYcjzvjruuTd96joZKbLadtqoHrJtqX6tfCFzSCM4QEAYjjMP6B",
  "key8": "5wZniT9wnhxq1TyNQDmp3theuFMNxz56PqmUXC6zdJbfNNvNVYC4KHUArPUSTyM1KaMQGgyEqBGE9BrBZpUk2o2j",
  "key9": "4GHNtqhHWUQWxBSUNNRcmax4Una1D7FbiMafmRi9EcPvXGuw6VerQsS1pymes9VTq7boxH1k5JD5fjvLUyu9Tu3A",
  "key10": "67XtXdtE6AK1ShDWN8sQGc5DkSrJhuCLtLGbLQJi43XjeXqGR9kVCH4WL1wbEKa9n54WcxjojcCqqLNuJcKHjbUu",
  "key11": "8TqjQ7JBcaqAyn5b1aqwqZnrcvYYFVauJKckNXudUMkWvLxzYb4arHG8W1TzF4ssgahL4MteRWrLBsrXrL8Q3Fz",
  "key12": "2iJSB9mwDNEkAy4d13gDSK1MgiDg32ADJJtkoGTj9VexsSbrsAkpD8uQfyhbaYd286nqnc4hMQhsy1dSawTRMxWL",
  "key13": "3RWX3oCHbDQ4HmZvp6zKZPKq8H8H5YQEXwzFkeEKaFbKPZxxDSWgLyzNLUwdvXXB7MQAGS9zXtpPkxsJmp3TwLqM",
  "key14": "qonKJ5zXjRbeZPsoiDbqFhS76xnAo1Lu41A3sonBNnSjTAyNyRAyXZyDhwRYmJq7x7p4JW3ceUbFNwj8xiTM36P",
  "key15": "22b8BdZNHNTXedG69dmtoNKP83yayu9t3YWTmXM75QfZiuZKUah2gaBHhRvcab26ZksozzaPPY42fm6ea12GccnF",
  "key16": "2gdABu7WKBWhLFg5UYNdeQxQ6D3aCjYZuCDRXPQVbtiHRZaukhsr2hTEpwKMwbV6FAUcQmjzkqizJbQb6ui4Ng5N",
  "key17": "32DP5ibrAY553Qu9ZK7rQwbGt9JD3VpbxWW7xknvrtf8zAECeWDijpimeQwy4qUdVMpPbA7NqmVH8Xb8E4E5MM2T",
  "key18": "42Mnn7k6S6Pc8K4puJ5FWsAP4hBMEiSxw9fupAo7BCzso71WQ3Uaghjmhm5szz5zQwNB7jfq1moJVZMioW2broAN",
  "key19": "4iYr5u8DE84q6Pvfqqmm73jVkjRaVVAzwfakPcsspBAXEx4yB1SeBdQEzc2ahiF7p1wWkmaPEFfhAbirZgaYXtrT",
  "key20": "5oNfkz3nm8M2m6yLU5jFK76gFKmzL4xZE6bohLy8DZek46GhAFCoDoZD3c1gPTqpoQTWWa6bDPXLhWDQ9qSTeB9a",
  "key21": "4HWHAjwmn7BwbZ9rVhVsMS6WNTTB5mEeJkJSNmN4n76Rpc4VWRjKJ2x5kX98neceUK6LKgGXh42cRmqfaYJvS5Bi",
  "key22": "2XE1pnFkHTfKo6V8F28AgzGmiCm76cy15oYwUFw7CjXveUE12YJgNh4CgmdLebnAS6RAKUU3qT9fmeebgNha2L6D",
  "key23": "5n11DRM7XBgPd3HujcTsvivuemQbCDRnjSAN6Ng6VXwtBiNS8zqTJNMyveP3XXEJ6cht4ajNnno3afXwXvLGLa35",
  "key24": "rwQpqbtW875tqSvywKTQp8xjybb73tG3scaXZjdZjkDcNVF6hiraXfKhh5E1MhgZMGEzxSeMhXjv6hFkbvLKPQT",
  "key25": "26cWp7n9HednwaHr35Xvk5fUayeXK1Ly3ZwwrfN21LU4gLd5sxMqAstyKKNqyLGQ5FwRzLensKpy3uKAzsLvsxeN",
  "key26": "5EeN6sxcDAmUSAKeqW2EVv4SMGkMS9Bsv3KMg7ZNbR8XxbwjgU1GYXg8GdjjibyivytJwxkTxYc2eZfkpmQ1NZ6t",
  "key27": "3LxMrDpXvhGoxMe3JDN4hnn16yt7x4dKTeC14wapMJm7jK8scEpkBd71ntxAWYFVHEHfFTiVXgWYiFuxdetGMUgj",
  "key28": "4xoaHwQv2WvMLMpEiUJA2oDyucR4KMwjP8z1CJ6WjjhEsESqZkCG38VC7RUC9wYdUBePaDjPBXzwGJvhKetJ7CWv",
  "key29": "4UHMZA6CokuxRTWNcG5QcoeG1YQVr6xh7RvGHwrJmWAYoSFhC15FpWnANMWigGiEJAiJ3vrb4XvKUfU8QgV4mnfF",
  "key30": "4ihVoHn8Rh1nnRdEBQhz7G3wKjxrvySRMBnRaxneFDTnDKEfR5mQfobpB8bXFFmbJxfJnq6ZMowS1iUcrQWTEAYo",
  "key31": "3iXqoSXtn95QZkvmdwyiTwD8Ja5jYhCaQfJzfM7poxgTU3SimMhqRZW6XjxA9dV7WHMU3s9HKFTNFnZUBrq5oA1o"
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
