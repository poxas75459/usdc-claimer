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
    "4WgWWDM4R8n2CtGtYUXDSq98vZRz54p2p9esS4mNU2G9ngpwWLgc7feBoyXRFGtjVoN22aPFWgroM5XrYYFwypKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48S7mua2QGurTTos3aKKu1vEwakHTrRnrzr3bCAQCJEtJKT7TWSimxiwHLyUi9ixjtQgBXMuaUATMqMPyJs2RFWJ",
  "key1": "3HB4LkFHTJgAhCqAcMQYCQB6hoYKdKSnTptM6syCqFZBc8VRmDx3K3T51BHxd7MDkfdQUp5kJA3bBTtVtRKArZQv",
  "key2": "4xptYH21K2EueyBmCKW8CZ4jYLMw1EDW8MPYvVfeG9tKcV8S2jWe5wJpF55Jq8JabsKxin6iNeVV2HZTzW7GjCN4",
  "key3": "5xgVtJDZ1NU6mV6eEcZ8fKfMMeFgdoRyRHnBDh2EnoDPxNyrS6JnVEADKq4b917oFUYmSjyDvnDZ3jLDhJkZXHoS",
  "key4": "5nKGKH9qKgM7Dsh4uPUP82euHxaxHaFu4huej7jjvTD9YaVv2ZFxKYEqHPMFCz3L2cU4rF7Gb1ThdDsxYvbPibgH",
  "key5": "5vobH5C6YTgBJAMbCAvHByeF5fepGUKkyW1GHUKPuhaf5RZZRx2xHN45UjKJkhecdJP2xX27MVnhH4PxwxoJt5qy",
  "key6": "FqPKpUHmWtAGBULBxX1JUxCVqp7NuNjL4bRryuszPaje1twPcTfz7rEFqHuuQzptmWT6H8ccSrfpiTmnnEkERYi",
  "key7": "X66PsW4KqrnHBG4r1KwJDM1tLrWyaRwP28vzkgzTwHJ6pUEENUgEC7mmukeZKqDGRvqBh6gA63dEKwy68PKuQWi",
  "key8": "3gziUgcG6cAa3o8moMV4wtbKXpDuxmLNY2cZRDSNxxxpKZDGkm3883VLLDhDHL3JNe1oaoybTCPK2eLoJETpJMmb",
  "key9": "YXoT9aHESaj9usRL88PuRTngs1mAt3JkTXXgwvLEj2AAXKZTuxhScQoj4e9JTtjKw58v2sP2T3d5sdTskNuqM99",
  "key10": "36qJyt6wB7vp7J86MXRvNVCEDcBXhE92Gqsnbm6gaWy7DVqVLiarVKSkedeWnxCxPs6cmtQMLcSrUCrM2zjEAZo7",
  "key11": "3QJzHrDy7hKeHWzB3EtkSFPpqHVvQehB7oc4khqznHavHorFq4n1exJW6hkDezDvQ8vcVEdAS7Z6Ry2VCcfHvkPi",
  "key12": "2FbwxnEsWxmnEmzNVcZmRqWzjchguo9KbmSati1UuyZuu2DacrfT5c4PGA4rUUfggAQ3XGpuUSr78dSNcYB71XMY",
  "key13": "hZYbbF9ahGwEGLTyYAjCWBjcT25ww6s3ppUfiBHvMVqeo3buGmPsR7Rx4G9GjDYzHi2zw6tKTrJwDikhruxgpYV",
  "key14": "mkJ2eZqy47zpsNsixrGQ2DNngfbXc8YaTsRMgaLhxAQUEjHKLf9oK5C8wZf8QM4NuzWwzL3nhSG6g1Z4c23TVWi",
  "key15": "vSnbQDqa8g7siCwWCCEYWidBjb6uqp1bFzZpsuD7nEUYhsykfCeph3xVHFQgTKKtuXTbMbqyhdgvNm2fQQjmjL1",
  "key16": "wx1ssyuMQ8YnM4YxNMUn7w7qNkaYFMm1treA6NVM1vpwZtsZE3HeoYuceJsVsUhKB3DUDpMwkzzGNgr8cX898gu",
  "key17": "3EZqAxceAfJG1Eb3SNHA74Q6k9VffJEkfcMReubbtRJLuEaafmEz4yQ76wLxkijjkgaRZKJNtSLwQA4GC2s8JfZk",
  "key18": "4BqBhUysTKwT5UnYEvMn4nHpuXorCHHt1JjGkgLkw9NYoRYt76wCRpyuiP1CoXCJTkmBp6LbxtcoiVvMW7RBUZ8A",
  "key19": "L5TZJWusvU1yg4Tv8PqakAwSphZejzh614k7uLJRsHbcHk6mrsS7MzmXV7ZJj7jBN3oXrdJhi3gCUURvVckCCzc",
  "key20": "56ky6bWLumXocKZVM6Q9isKG8eQGT7u3n52nxnmMBDWj2qDaxDvzuPRAoGiQabdGMyhph1EV28yUFUhHF3DpbWAo",
  "key21": "4rkxy7VJxrZxjtD1eKkACH3yHWBnC93HFfm8HECHjU3zKg2Jzdgm2QqrncwCigGvKV6Gdk36AhwTqwwRTWg6hPzv",
  "key22": "5zHe4ZAHnLKSBbn3JsJg6q54yyMaotW5srSpC4T45XnAcWbkc7hPtfF5BYVfWdvScfUHwxrAtHLDbXiYjn4z1yR3",
  "key23": "2g1CUy4Gy7N2VL2K2MGt4yi19HtX7MZH3yUpBKwkbRR339ARpUSTFzpYA1KLPtxBWPPge4hsz86YX8DekgPgdbCt",
  "key24": "2hByiHAHkgJHkFhY8F7UNZuwDGe45xtEKZWKzKwnT6bm2cXgTn76hu1pvmDGWdx2gjAnjTcQPNarJUjJicycmwbj",
  "key25": "5X7XyDhYqNHnBq4DPiNSFSeFhAVUgXrLUvktRyws6qsoC46knbLPi4wUtQnNgYf1hDxpgH4C5m1WAFLTB3wsDf1G",
  "key26": "2ctv4bkqjk3FpXCybwpocKkevVKkDZ3vh76hYSXvpiT9u9DrvqWwnHxcbK7Xtwuy5due15252mtWB93gSXMDdJtY",
  "key27": "443SbdnQsxHRTH9mULPshuHZAc8YheFoREPtyqTuYL2JN5cGAEPd32QuxDRbtkeYppWbhL9X1RNwJVZGuQJY8ztH",
  "key28": "4q4H1gPLYWkxaDUT6pQh7YV2717j3q8NGHGQfGaFwJJPbJAEe6dgqx23kLL89F24iHN1GDh9ZipMofyRPFTYhYqh",
  "key29": "2TwoZP2YdyeQFdkanPfzqkKcKg8PBB7mmVn41B1PQyj4ghwRj8kW5dq1wWpG5fLrssg9F8AcTRnx1vgWY4EUaGEx"
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
