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
    "JYqMBmffLJyZW7tesnqBiQn5T4YVc7fAv6xr4cXGZDumm8W87PeGrPQZ7DjqVDC36PLeTiLjX7ijXCSz9uXP4M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382LpN48L5s3vcRU7dACTcCXnkjBCF9S6azmwkxRoSq24qXLuXm29ZYYLSQoAzJsk9U6BpCssmAuLt85RAfABE6R",
  "key1": "51M6KcPqU4QnVYS9qg9vUuiaDvmjbZSBz3DuuH8xhL3bTPtUdUFD3dNsUbUZ6h7cx2nQztb1pg4AGWrGzjiFmXn4",
  "key2": "2rdyZvZDsJUgUT9XCg1J5in7WsrdCzNh2tkK2cNLoBXNpjmz7kqbqDeurZguj6viknjVMRSMS8TpGBoBQAL5GMjD",
  "key3": "4bwAVnRZKJYFm1z63DGfQjTwTwi8nLbdQ9GhLu77BeL3neSGBaFTsEHDqbeTonmUsPzV9w7bBEwbeQtjVaHzXGhU",
  "key4": "3bKqnM6EPxHZqApJCfpAejRHnhFSKhzRhVCWYiJ2pKYaZQ7igCiEp5wAcwNSUsAq66qUiopRZE2vx4b53Nx5cnJn",
  "key5": "4VzrCB9YPM9sAF9tKWmUhQP3evjS9b1Bto7yKVGvuAKpx44CFvkVhAvnwvJeUN6FGWapDUhrkdnT8sw1BqhR2nk9",
  "key6": "4uCF1dVqwH9SPg9kVuheA3EACqwCJKbj2vfH5GLjuMaX1uHGjLymxajfwYu189GsQkzq5mALvf2tbKWLtLZgDmoV",
  "key7": "2TNubMj7QcAonFa1i85CYsU3HUMMdsbRNTZwNgPgdBoFf8P7zTbCAM12rj29fpvRfEJZNQPaqCSvzL9kRNDxth2Y",
  "key8": "3g6oN4WmuQ8pVbjBcyQMLZDy21Q554Dh7ow84bnSV1kTdLEzBNTQLqXqanimeAfv7hz215F4pxDgYnXDrjUBieqG",
  "key9": "2Lh2EQw5pYcnsA36jE871mXtcoiV4HrbNJrXkwzkNYKCjihdkj3euCKyihhUk9CKJHoLvkqpLMA78RZcH9DinfUC",
  "key10": "5qoTDwJmztxkmtKvQtqYy8uWuPnozz2GVKAX8XSAD8agVFzoWJN77YPoVBwxbWdeKHy1jFBUc4BLQcrPGyCAy19n",
  "key11": "4F5ctCVruTEF5aNmCCMa5YN5fZ1NcqWtXcRVrbL5fsBAUkyKHL8Buwt1sex82SxxzWc5WtdsNsCFTCkJ5Nc8sB2n",
  "key12": "47AZaVeW1LxoHZCW7PTbEk3TK6qTSvHVfQyDuL74YEabra9yyW6fe8gvwjUxKkiJ5H3YYFcYF8M4B5dRXoitBAtM",
  "key13": "5rFhb6vZrsSbur1KzuyxCjSNJJ8W7KHuhMkUBS5eTWSUJkokJSTjZxrftU2v3KqtjmASxTQTftvdabHx65BK1huQ",
  "key14": "2yrpCQx7zSvh8PoQU7sLGYWzBL5oP9S8bVtT6dQ12m9NF6T4hEup542fq3PKNpjR7jHCPLx2gUKpBQP7PS5tz6pS",
  "key15": "3yRRtFV4eSH7bKd2LTDcJRgzzqnHfCF2KT7LNGvm4pos5erWZxiqWZc2SXpnvJJ72cenXxQzxGi4Qup19yi7PSK1",
  "key16": "4rVfeM1iofSVxMpiTQiGYxy2884m4S1Qhi6VaMYhK6uaJ5xvosMd9T43o9CQscddTubJYZ2qZRo3R8XeHPefCUMT",
  "key17": "ka3gqwxMJJiV3YopwiDcqMK1wChA3jpDbaKXCDV39YPJYYCmQJQqHKp2KTtnGBh1XVJtfitaqXDuv4jtyzuLqro",
  "key18": "65j1CcRt1TyHrUPjT3XEiWP14jEaY4mVCuLusieauf7iB3J8xcmimQaSP3XABxf7ttVzQcwsa3U5C8J12HdQt7YQ",
  "key19": "322rxqFTx2PKCGB1S7qSLzxjADFRDMnuzfn7APqhDJdTKeLSmieLFvCEWTRBgrSt65MT5d7wt7xtGKe2kJ97qnDc",
  "key20": "5WJ7TPbqis99fhxqqeGW2B7f8upRqkp27SsjAvihZyRvCYwoL6u8ziLEmaedcHEScbQw9LntCbbBp9qUsDviSW6n",
  "key21": "2HTCUCFg3bZakQzYwPskQmVi5bFEBgni6UjssZ44fNLCnbx75wnDGfSt4KFTtvsHqfndMnTCbbPZAT5QMQMoQaVT",
  "key22": "ZR2FXjFrx3L429J3ycn5k3Tiia5XLDJWb2hRSmry5pfRtEaFKDpRVzx67WY8XinJSv195fACBRrS9Y9712x3TzX",
  "key23": "mXt8MDYCXQsMxxiYZbiJAAh7AJ3LqMJeUcGzQ3BG6DFq4p98htS8ktVpCFd9XobXkXuLUv85DzwZknSVHhbU6gy",
  "key24": "qCoUcAxQLzhQ7QGEm5T17PFgUkdiWfbp2KEwjxfUJ7vizfUyYJtaRVVp777BZqCz7nvnEex3NCSWF4Zbqg7DAM6",
  "key25": "5SWfR8VkYF9qJevUy5TZ2ykjjbxnaMiyncZQVUD4gLLYMwLGBGQtd2yNEYCFuc3JXDEnp5ULUfVb1CXM6UsRmBfe",
  "key26": "2NCwmcCVmCznsiE4PPmVmxLXiaEbU4eWRAhAzu1ug5DKsp7LQ8LqcP9xHjTqgWyBofn6eQtMw97yboR53gHPuZAA",
  "key27": "5dLp2CXMzBBDmRXmoEiRZiyYHy8ZoYtbXnw4cni1jURTqp1m35NPNivi1KpGmcMxRWNozXFsBWNg88cmJZNyqWLQ",
  "key28": "2nLvs6f541mfbqMMPDGzPwYwU69fBDViZrthA52UUBysjJMBrkq582hv7LBX4Zxn1grNrscaCxpWVRDfNyiybkS4",
  "key29": "4zxfuwz7tNBnvjKaDmqJyGnEUb1DCqJzXTShhJyMjEZGfzXo3gDgY9g75HSktX2dyp1BCXqpPvMM1DSCzJteXGzL",
  "key30": "414EjaCPLhxCpFUEgCeNFapSGwHuyHMpY9BoZcRREnc6X52kWytVkKHCMidh1xdvk6hSeKRLzi3KNmtEtGdMqU6E",
  "key31": "4B4WzYw5M1Je3Tpa47eLqAWHH8YhKUqDqzs7Ay9HXL477cFkBdDmX58EHWcayXr7fVzDsddDAZoLUJD8GcYX8Nxk",
  "key32": "63d96wZ2v3ay8agV7QMDxQTxfcKD2dq8baqtgK7Rqepfxd356i9nNBJuCE3dhzEHXNDCEujCg2bYYoYpdZjYgYXR",
  "key33": "2tRgQVgXLZKcVRAuPcWCGVe9SUGr7c24UNYdMDbgKFTmc8HuRu2bGdxMYsSvN1CEcHKSKhMC87WjussK5BdgDXAE",
  "key34": "2FhfB9q4gMbm9CdBaaNCH57RGSwAHeM64R7SgQTQNjDA5QmkpEhsv6e8QfgcBGCVKFK5nYYBWuqziKJUXv8E4snU",
  "key35": "4ZDJzhvbZnRVPebarUHRJy5nvArpGKNdsHmdXAb1otAT989TJdxABjUvmL1ZN2wThpNCkEBuvEqLu79LsKZ8n2Rd",
  "key36": "3VH38J4kaP3zyXLTq5tQoporpxHFEwgCXcrpVpaan2USchPRe6Nk6AKpFcAo4ieu32KwdPppPVDMXmzgtdZXqcjT"
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
