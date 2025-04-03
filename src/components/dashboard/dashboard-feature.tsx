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
    "3ACxdW9FeKWuQPqCfvRe2hxEQfhh6RhcaLSGXiArLAJ4RvKQoyn3rWnQoXLgqxok8TpC4vP8L95fJjFkkYmVK8Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLLGEBBHGZc9ix7aoKtPeqEoEe5mGQn1eiJ2Pr8wQoinv9FJbYMdFayfYw3fJvn4nrPKMNdG8NEB5Lvt4V8773D",
  "key1": "2k8bns4rf7CP7rF2VsVLKe8FiwVRXsEdPEkLGZw6dVVwrPSzJo2ouAXdkAyxL97P57sA6QYtNyangxXeVBuyiXFu",
  "key2": "3ZmVPeKiRKNYXUqj8n128JBkCdX7nTENVwuotokxxatqgay4HAGcFmBjzeDP7x6YxTL1szhWhi1zPdFYjgezQLiV",
  "key3": "4MjwR4sBsthZVx3YrcuE78eSUdH3quBHYJHAQ74Y3QFHyU6TFcfVsN84U8GHRdZMRekB9iZqUyKj5eR9bfka9cSk",
  "key4": "2MWYrmiuNGfv7gFLv6NfvfqRgJJEbVaggXKuu8cMGUTov5u289tp34fYp6bNF5LT3huDtaWTaqQYMFnFidFUH1hh",
  "key5": "3rp8anzVThrHYPZmRK7L6yBqMeYtLito5pzLu5BvxeJa3PJgicgW6tiA2zPoxDsc71CoVFabNzEyH3tCrtufmWE3",
  "key6": "4hbURcESjZisJUnsr4ZUcw9Fo7FEwQMqPTi7eehSQRTn1kg52RhAPrHMckCsxzeaXKK366Ni5HV41Wfg4BdSvbyx",
  "key7": "3zUZB5WztptaEyiRHzN1y21o8QAZzGyg6zzYCgbX3223XgvL5g1ESio3awnMD4sMPVN6khYtrYpm2WWHNLBx3rZn",
  "key8": "uhqUGwGnLeK5hq3b3ttXY6XUfR1Bi42q1sVaD2diNSqrovvcuMmg6YD1mupvXw5i6UteGZPhwU5kJNuxx4WH8EV",
  "key9": "3Ej9uRzZe1MpiDnPr5NGuvjG1SzE6bJh529Jbai2fpgELRiYf3wTuEXstpFigCUhoXXLLYjzQzjqD1GGwFsU9K6e",
  "key10": "3LpVjKLQxxBkt17h7fas9mQtgy3hYRRcThsvMffWijkE9KHESYTgYVtdfDVkxCppFLccQQamB9bdKbTP9MrK69iw",
  "key11": "5Brn5Dvhdhwfg4dL9ucEoPJEFkSYyhERxh5TfoAbzALuRfhsNH4qT89YEGiPusTE4Lo1NowcmLKWYa3zHDU8ZCMS",
  "key12": "3fAa5pB6aBh9EFoVf4P5FRqSym1g4udserkzJzHm3ZugkKtTvEv1Wv6HCssU5uWFpgQecjhymZRrPi6RPkhqaTnd",
  "key13": "5dDstfZ1d4f1s9e6ZHsPqk7fGQm36AYbSaygKGLxEvtKJiMdUfk9FrvN2EVRu1jVUBDk8Cgu7QkSc8ugpDxCe3GH",
  "key14": "4CD5Xf8FcdPiBET1jbBrud4uK9KrnQKe1F2pwktkxfS9LKmW71TKHT4tVPSNu6gzkMpCsv9uPDZnVVTDf434ciUN",
  "key15": "5xQVk4JopEeSY62BKYJzmcLgYtFfnVmktfyVfPVEZiqW1ErUEDKrcjpqx4nj6ruyzKSqkzSLTTBVJZ4BPLX8HTZv",
  "key16": "kXJFQRVRJqJfXf6XcaCzrPJwUHoE69fBSxVTGM5LyfM3W2QUmzB8dckjEEV1oPQbN87UgAznWvLh27gg6DLe6UK",
  "key17": "oDwx3DgFPxhTj2oq3STyEpzr5WsfrigpxvoY88LP3o7ZJ7L27LbJoG68Bbc6uj7RRMSNAF8cbyJVxmSaJwwsbCJ",
  "key18": "yroCXdqbB3y8NxrjTS43kqaMokTbisj4HY5XAmctJcZnJHPauGQhg6j5FixeoRMt29RYiBHzN4kFReTNUQk5Yfv",
  "key19": "8MFXkP9i4WTwggReddVgb3U2MMRKRLD9vnDsUdtuBbuUrUz17wHvodt73ppMYbWvh3KrXyMYgC8gV2yhhsqoHa7",
  "key20": "43A642HYb93eATXdttWYT9EFBgnyfpDUaR7hCbxjqVuKxLFLjtNikn9vp6xSBq9dghiDfHAiF6RLfSBpSZJpHZFn",
  "key21": "2aDhVFcYCE3DUbBfWsGoFpmabvSNYyH9CW9iQFvx94BPsa8mj4Rw9e48sdShNuEznP41GUxzR99tyxmAYVNSn14s",
  "key22": "5GQbhwVQrben67VH1huZ187xCFBWjVTwN3LeVhAbwFpQ5D9xPxUshKHQpmJNyEiSwSpAfmxEu7vWVdyE9ovJU1TZ",
  "key23": "2jAmGnhz7wrKgWMWtfGRNwbyn8UiNo8EARSvoPSfmBfyAcBw1nuKu64PFNEajc2Uzva5rDPF3AkTUUMPUD98x3Cj",
  "key24": "4s23uDUBrxzg4Pa7EAErhQYFAqPi621k7vMAwCZ8qyVrm9ZDt7cCpTVW41PoCCRWRfyVJ6GZG7FAnqqyj5MyTfcY",
  "key25": "4pX8PyRiPQVKn8RjUb44uBoPp7zY4jL5XJKhk4tSyJbx1QK9KNCgyWVM6Gjqjja5nsB1v4BPHQipZC2YpRqFtuEA",
  "key26": "v1U4WuUCfhe1Jmf5jMCvTgKff7Ui2JR6XTXQyDiRHMbtMqGzMZtUj9CpqQ7WJxQs3vCEPYiovSMWeJR5jrPHo7W"
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
