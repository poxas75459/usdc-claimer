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
    "3y14C9FuY1CR1eRKFTeDaeZW1NoRckvyUEACMZCL62EwkGy2ci9Kh2ASafbvecVgLMi2f6GRonHQp4JjypaC8Hef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i3cXsmPQSg55NuM85fhg7uJpTk6H2JuewD5CcCpJQV3WF2vk9DZRq4mmKYQtV997gmrKwbH6d5GuCVbhG3fE7Pr",
  "key1": "5Km8NQfmqKZst41hE3jax3j9NYDnaN5wwyJChgYgZ2J8MMK36BrJViorKtvSbUZJ6XkssfVENwTYYWtjwPuzcob7",
  "key2": "5fWcZpewignvDQwHmUbPEbmrRWJW7wvqcXqaqgV7AAuCz83F6cHHsuCPm32y7ojmfgZUmzTR3e1q5on7M9eSh5EX",
  "key3": "oKbzpJsVYSHkLoMrUFB4yAeoL74kRthEsjtvmekm6ePnLpxeaquzRXSB2kCAd4vAMB3ka1BouwVx5kNfutbprnP",
  "key4": "3kt3hUWiqY6XDtWuBvUj2ZKchxRPifwFzBt6CBifyFxfYzB5NBB1xydi1JuNBm7TM1MCaX8Hazqgig4sBHWcLQCQ",
  "key5": "4T72GaSzEXbQYqT9bKNtuFTper8DQJDw7h5eUGnUYqWiArmhBSwRKef5z5NHkruW48Qdrqd7zLCCrp7MYRAtRZFc",
  "key6": "5qVJqZHNYbb7cp7qXes4vWqu96WT1RTpMecK9ndaqygJPUa2X2nnh71juXbTanJ9UbJESif8iu58c9NfL2HJLqLo",
  "key7": "5EHY727vsQiJdN79rux9XyDfbfQ1JtTyx3FRX2dvLDMjRkQtgAzrDtMHm8DSvAhYLS9LUtGMboBtSmSaZcpBiEA2",
  "key8": "5WJBFwH7ENUPQWhJ1oh1cGaHqww1pQcjbGkgpgxP5v3A7i7SLx6365r9HB7QfD31xJXUFJiTbNXFhFa4YuvwXW2a",
  "key9": "hU3wnfm9QTsu5aVoQCjuWumXcUVeJGp5G4ekFEyYADfszTYJLAwEeBJ4xp2ssRD6WkJK6py4zBiAhP5PPhhSDfj",
  "key10": "3pA7N8vEFPmNtiGP87z5fKVcsFK8ceUBkotTE9BNn7fhfHEh6P8FUWxf7mEGGu9SwntSHfFdaFtzeeDSLrBZe2ea",
  "key11": "2Ba49FVKziJV8hiYbgi5tst6WyAv8ZefxBEo5DGAHXADT9eTCTV2aCHmbWe6nAxgeUJJb3oZfsKXZC9b8dTjExCq",
  "key12": "bNzdvLfYhHD3pcCEbZ2vpncdiZiW8FVKnfJtcAfY3SdwVsGrLs9Ux6t7PJFwe84rY1PuMJ779euZ1jr61sTa4bE",
  "key13": "4qvKJ9xzJLBJ7xnYRBEQos4XXSVfZiYxstrGH8XXFBApdZad58QydqchDzL1oh8HJT6NAnNeZ65Hi3MJd5HhBUzD",
  "key14": "4CEEmw6FEMZvMkfkceREFkK5ahmMFpcqPbEgSEPjuDZnrF6NeeQ3Te4cNtZ9zHADtnB3McFWoYYLqQBhfZAKJFkn",
  "key15": "4DoV3jaNspMTEzrgf3ohZQvZ8wnngU3W5NaANWa5iUGjV6vQ8ebEqs5JKp7djA5zfoVe748C2E3Mzz8rqELLUdcr",
  "key16": "4KMzkCLZZS2dwYmTp8f65PL7TFaeU6CKDZth8Q1PmiHKZ3LrxRETPqEZZD7t8m9LKJZse5MJ8h6ToB4tfNNWJqum",
  "key17": "48JLMcYGwxkKeHEpVRUiGi2XRoHLYPW86FymdjzXc7J6EHMUmxBkZiNa2pGpPDa7vW1UTph1EvJRU1UMdrrhPiFa",
  "key18": "4dcineQpMvBt7b9R56kQW9Wm8EPoaT23Cu3TY2TFbh3WHJo8LCNMupcwhkroap7RJ4YHn7RsECfLLGBWmgeCorGf",
  "key19": "2ZSgY4ga2yJfSgDvb8B3MkfQAXYXfoJstYbPhF3KWEtYjzpvyUrb6u7SBBuj33FQ1nEaRCJinzQrkLu5712isNzr",
  "key20": "goiuFuBb1VCm18cQaNpYpHwCeYLg6jbQ4yuSmWFH41HBVCAAveyjmEJVVFDn2SZtNoLx5M4qoTw2oBG1RnJTdjN",
  "key21": "2zc5mXdVGAq8zSQAGERL9v1CbobHBFUeJmAVLbEdjA9Thhr9aLUGxZDzjNkSZmYvsdLgQsGrc94PnnGCaRPoKN2f",
  "key22": "4g1Roiauiwy3AotYz4uURcCvqgWfEmiSQt2g918vfqdPs6YqFCJAbb5px97mnFAVZRpvzMJqVXgpj6eUcWgUJmrV",
  "key23": "3h4S4XKvwRaH5vvJpioZuH4htMFaU45oK321pK2c8WahTFVCRxcd5zRyKprhzm48tjg5XcKQ81aqkxLcKfDmGEGY",
  "key24": "41VqjiEpzRn5yd4nwEpcXcTfCErwx7xDWVhZCsqjfecYRUztYuMGSgmTmLZQVsuRnkKUaNAu4xvRXf6joTh1vYRL"
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
