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
    "3J3eKSVYgehcaDzrESScnhdomQeC24DLycFQviHiiWwyBfCmarczc9tJZBissnFghPeEik6Py2P8xoH53VhEfxeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K97w7jgNeuzPzwi5dqvfXygi2wU7wsFzqNs35tuXm8vanXWVNjo58qXtYuyTx685wyaPJ1ZJrmzjWXudEp5Rj2K",
  "key1": "5QNUoS5Kwzwy34ZRTz5yviCyopJohejvcPcWcNzWCEvoKst36BfvPzQTjPb84mXR2JFXBekkckY56VuwivQ3fteQ",
  "key2": "oJgMLPRcWZzEYfHjmG7ve4iCCvxgZAAucWJg4f6cWVhkCH6ZoAtxMnU1Vmd8H6yKrHjWfa2HAwfvNifdYFMcLCo",
  "key3": "2azSqfAF5Y1ce2zsdxeVvCS5VfjaRYiPt9tDVAW9PaUxVVyWMTDp4yGCiCJnYXREqqr7wJkcmJe66k3aidWp3Ygt",
  "key4": "ozWRwz9cQThPAorWRpj1RFw1nieWeYf6dergVtKuSTv8StrdBbEQncRSqt8jXH3a47ncZRAurzpwdZteUNorYxt",
  "key5": "2urpVauHyS1Vq21gva8qe474atK8LyqvJSjkjHTqNKg5PxoK5gT7fN5wpjgWAQH7JCUqNSDM44GPna76iXLirCt2",
  "key6": "3SRm6vwWxh2HsUEZzbN9uQqdhTELypn74HSk6TL5cfWvzDok5mRwgfh795YwLnmdKZib5poAWJ4A66FX2uq9JLMM",
  "key7": "38HB8LguerixyG6NLNA4fghiPYudHotkEPSR6SYjR1mRZUJiaAYTeuoPoYQJbm2LqdGp2KiKtsVh8eTbW2fB8n5Q",
  "key8": "4Pmw59RieAWufwHHmmHzF1uuD3ZahNz5SdnSFfdSaVwK3bT7GEpAJ9XbVizFv6pK2qLqmQZ9aFDKBcNdxLpWA7kX",
  "key9": "vGhAwbrevwi91hXhfCi6zYuWxF9ixiSY5R9F3BaJnXvXVzijGvFfeENhk79haLbg7M9AdDEb9Fcyu2LojJgZX1E",
  "key10": "3Kx9dqXhCWsLonev32oAGC3KhoRFGuifetSYmf8M1sXRBWjjEZGSsgkaHFw2exS4ejSHfhpEGVCmjVbf7mMK7pnE",
  "key11": "5P2Qh5PhrYPpjtE9kbsyvhnWGyoxMPkf8ygfYHNMoFoUcgU7a4zeyWrLoQmk7yaVHwQHk9FSdf279zmnv4Riod7h",
  "key12": "4f3UPqpdm5duZPERXo7w1EeueqJci7miPJC3VfwqJx4VMUPjpawdt9RLvQVxRo6oh7KsAwm1fw6S5V1QTocMFrnR",
  "key13": "2UAimcoxwnSgTT5AgEbyfm9FXLGdYZUKTpjqnQU1tjHZ7d8U33cfrefUk6MjPpczwaukLP49yrAKT2tvAXfkK5dY",
  "key14": "44VDQuBMuzbJYohwc8Jw2ZGjohp88ZegnU2hJ4JcQw6UaqGG1oqS1paGdB7KjpXTtQV7X532R38ankyv7RLL9wez",
  "key15": "4yoTZTNDebXTQc72x9rc4mrMJC7bNFPFTA8t99K1E5U9nh8AHtMpFJbSh5hTVUUX7rfkGkvJ3wX8YoVniW5kf8sJ",
  "key16": "jittQEWK5rJbrPGLi5fUJJ36fJtVcLYxhtn6xdXrhYQdZg17QomuZJVEmbn2maujhunJTif9iKx2Dk9s9Pmt8Hw",
  "key17": "3R8FfCS8z4qYMxkdNjM4vPRn6NuS8mBTHsSmMvXCFkZZrHJ3C5ZBhAhUxQZoG2Hmp2YBGny6c7ejzfz6MoRe38yY",
  "key18": "2iUB771FJ2EUf7QChrTA6tjB9kiRco8TD1UrSgbTQnxkcTHnFrSHb4yGo8usbKTxyt96F3YH1yg6XvmqGn3RfCBU",
  "key19": "3GK5kwwCzJamWCvptxDp41Zy9CUreSQvat6s98rgRiZeZD3N8M3QQvucsiJKQcGjYnTvFq1BoAvvGjRb5T1nBTUz",
  "key20": "5Jd4xsme9Qc4P2nCDHkpVWTaygBDL7prHLwPBpxcBhWnT7525Mszf27hvkPNu7WbnnENMg4djNqHqxwFnyoyzvVQ",
  "key21": "GFQkC7Nb3Z1PTDwAXmdeMbm3c4AVKabY6HYbFvU2CUDVf5fhy6L22WoTyC3ckwMU9NiQu6kEJo8CSvU3AG6UqzB",
  "key22": "3FYja7cEu9uLR4NLSGQNK8QdUp8t2p5WqL2TfynzMuMe8wcuchwQaMo9naWeqDuPnHBV8wmiBnZa1mt17hdY3GUP",
  "key23": "v8dGcMJAnsnCiPMji8ABJXmt1avrdCVfCkv2E9YVEeNxafwkihtCYChWTGhK7r5xkqtZfHEmFi1JCj7gQfYk7t1",
  "key24": "3LQWeZ1ZyRNV82aYZPDQMfGKZFfM9NFxQDwZMv452PRp9XmpLUeAm7pVnzvja9ePDwvHmGFZPHSGc7qbHLWwg9za",
  "key25": "2y7ARqtwf68x8dSEYS3sPjxMScXb5YK2boU8SFNNMtnfGYfXWtY2v9CX7vVRVQ41SEnUmTrk3rb9fEudsbufQjay"
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
