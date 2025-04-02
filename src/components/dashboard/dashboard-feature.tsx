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
    "4cRwbdqrHWNZCMJCPtWhQ4tAKuB96WezPe53Pez9hApYN5fu1A7W1CvKrEiABtpgyLixSCLfWpQmZz1dGFWGsbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDfHrdt17YhzxyhwbLhGvS635xuqCdkHy9nXtg18pwvtvaVRwFH4NR1Jo4xSPW1rgLXmEz1cFxy2asvYgXqgX3j",
  "key1": "3Au4aKRSMdYbogzQwJ9sRbAn8csRNCVG6e9bndN5b7iG5MuR4UGVVApcY4j2Yo1PMCZp2EJXKBWViPzCRWuMiwis",
  "key2": "63MhmJT2hQv2MufPVBZNa6UqijEB19FxHnEFW8d6Ce9nmxBqCaUYJBMiz6o5PGHrfWZQxgTL6fxGFfZ7cjXjR24U",
  "key3": "3gfUABmfwr19GbhY8gsPB2tkt3jLbjFJ3o4hXKR5B6GZuaA2YvWURHNTf76SpnPjjo77LXHcpbthaLFaQ44FgEqD",
  "key4": "58JYZLJy1iU4v64VwhdAfGcz957t4rbbNytcfiVzCAuwD8CSbAQ931xqgfgmkDhzfTYjpKSKBouw68YyDfhf5JEy",
  "key5": "3buTosKEmscLFcvtHRnFH87LubkhvLsbtw2ZcrjeN6kZ7jY33CHQYc2ht2cT1cWJq8TrX6osRrjkMrncy3dUGTun",
  "key6": "4UpESqbm3sZRCZe4DgmpxmJmYMXTaXgQ2dLEFSzFRRqEo8eWBxQcKtm5fwqAFzy8gWRcvvqoGi2hzmz9e7BQf2L8",
  "key7": "JSKJMMWgkeqL8s96EzNCwiz2Q2AiMmUTHerEDyY7K1rM2S739LUXxJNBQH1GneqEcnCZbFn28GUp9G3zdxs4qna",
  "key8": "2HEXZsegb5iVxr4WXpcHCuhvsHF1YNVjYsfpo4GLzS7nDexUCZhW4G4idb6brcG4U937VRGZbz7CVeF2rBVZV8uf",
  "key9": "4K4C8J7igQKcCqEz9jMqrD39pYmSCiYB96Ucp7crtCr7GyE8B3tL6f4R16iiSAHigcdw21GNKij6kxAT49JnGTP3",
  "key10": "5ZUeCZNJ6vTkbRDHpF5eArhcFoYEB4PWLeVjz7UnWV2KmxJEkwnrBfWihN1BpGcCET7GvPoJxJDnmMG39fwZjwvE",
  "key11": "33NqcvVamK7iCxMqkQTyJQc1mtJKxWyTPvm74na4g8EczyPtEyWZszydTqTLWiiRFK9NsvXMcaYVJHpDE7BFDdgx",
  "key12": "318b2yJtXTg53G7ecVoWBppmMuJbvga5Livd3LVpzjrYtTx4BdHi4qQUCuDygpZFRCEqiSjJKwJc2QhMzDoCRiCc",
  "key13": "4mBSNDphTbaZ9DhzLN8TYsHhd8g1AH3KwSVbDfwYRqYxJv776fYusKZntKVWJoGUKehbFjqDNady57aGVPY3dgju",
  "key14": "3RePv7cxJHDD8Y9MigDf7ZJdpBLCApxjVFkrKUNqKQ8w4dJbtrj92hmHmRgEyxo1ReRvAFm5r6YWduUJySZKMrCw",
  "key15": "4G8P38awsVtScNH8b7XaJmHq13Uadk9yJg9H3NmRiSsh9xdj8GoWzTZMSmMfgw8jk1fr8RPtF6VDX1xar3myLy8x",
  "key16": "FTqzrpLVFogWbQ3YywrJBVWZCLjCmepnXH6MRTXZS4LFVQvmFeFt1ASyEkCLFD7m74rLeWKwe7MEidhvCPNtCKv",
  "key17": "61P7Ec8apvyyMfxmVqSz7F5prqKh3dLaBDUgatYFAGxEMEuZ6wEq548JWQUv66U3XdXw3GHszYNVxZuGTHDp4an2",
  "key18": "2dk3aRcm2HxtrLPNCyiognareVTdWGzE3C1LQV3bUCpLxH7xxXuF9XbzQMQzZt6P247GknY5q6hyqNySpvPPoA7d",
  "key19": "58eTjDy99wcvVqjDY3gybudQJQdrCET81XCEo6x4CwMY5TAv2qg4T1R2nQosuMdW3TrmguUQrGL7drbqg2bHVwZT",
  "key20": "51usYHkQAnjCnqEEDw3CnaGWsv95aNfAdAYUTsHH9gesNj8Hg3LBZUKUYNGYgKfRU7BLgcjbbvEfk2iw7bpBh7QH",
  "key21": "4uc7qzRiFiq8yW9CESeiQJ81HsXAxXo3mmuktmGJtacbj44uuHt4FK2pEZEDDVP7PyR9LqU4nmF7LxcwtLjmazJK",
  "key22": "4c62mxbVzXJCk5ACLCxmkq6Y4xU6Xt1aC5rZUSV4yqyvxrVMcmHKVY2aGUnepvy32RH5w7xPWJ76aSXYhc2RrxEo",
  "key23": "4UB7FrV3rg43G64qb2ZRE8kyNPRPUnXiyiXHAPCxkLDVi5YsD3s2xcxuRWc2Bqvx8qtF61S3UXk3yURjALwh8GhW",
  "key24": "5TNwmiEfGodPUcrCGitKdZomqWC3gMakBt5V9FxtDo8Qgu6ZBwgdonBnuvYTGfaHdkUpTSYBjB8Xx83vFAY2Sh67",
  "key25": "3sBhuPHQWwfQt9VbUN5x3SKQpxgMFK1YXUuJ71Eq97MTxxszrtFsZXVAgGPD3jk5M4ho5CPDuz47b8RtDLawKTCH",
  "key26": "5vjMxcRvBx2M7MumyrD4FhJpE9pdxMqp7ZrWcMf3nXRqTxFvz33fm5tPNhU6r363ZRFhGqCCkXNzxmUU57ucDhwA",
  "key27": "QGfazyHueHuCxnWULiuy2KqU8oCzfDXJ7q8x7Fr2Xs9SSygD4aUxme3LXUaPpQB7NSMXhRZMSbnGbiPYpiScsce",
  "key28": "5VhdJDPxCVGoFtcqfBLst47BnaHYgyYxzEZ5h1rtaS66g6gVVea7Zcok4pauDxZiKeMjfnP8EjJ7kz2oAisag7Fv",
  "key29": "5WLqNjqr85YojQB72HszZ7N6ZXCMsd2SnMuVFteJa2e54sXEjbNp9rxCGPMLj2A6MqaKmyKXzb1NAhchCHDRFxsJ"
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
