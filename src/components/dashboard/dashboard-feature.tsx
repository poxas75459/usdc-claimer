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
    "v868J2pqfBroyJ3CfZQz8vTKFYaDEJf63z6ew1cnhiKshw6F9d9yZBDYXfweuySQdj2YYoKh4vTXSqE8JPMzE8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJgTFMn7r3qWY1R8Fsq168Cmy1sMyBJoXsr2wEhbvj4o9s5gBNktBsM3fs9SR4EFoDdix3c6qTR3YturhGUBSaB",
  "key1": "3jfyHxg6gtCXSwcAKHiwqP2TnJuxngTbLtzXtQRL1bN1eZG2wWAykRHMzTUEgJmfwMs67tBawRzTLcMGZhq6sYYK",
  "key2": "22suW8EeuKQx8ddTs2vUgJpf9TRLMjamsNhdTPWgn9Xb6Ppe9Fb54P6LAmAExkYFcNVykSvVG9LNYd8GNcFCsHqv",
  "key3": "3VAJEB2uTzuBatbUHi2rgLZuL8X9HX5puAoPoUeihdGDHeHcvb13wPG2dws7S6tth927fhkwg4Xa78DT8PxmqdEJ",
  "key4": "4NMLa66VxoMajG2KbZX4pm1yfWUCNvBixpP94E4NYMGqscHDKnEWig6dJu1967VdqeTHymbe3PXnpv37bYP5DZJG",
  "key5": "2iJwp8oYWvKNTaWa6KPyCY3r2ZezZd1EfcLGVA2KyfWUoP6kgCcw5Y7uqJwBGhLgJXw3Jpx565hvV6j9BnUY93Fd",
  "key6": "Pcf9bSaVNredkx6kUgszorTFK2L3xY5CGjFtYCGMQiHKdjBg1NaQ8hR1wXEEP9qDzJeBkUWdzhMbKNX9e8MyMYU",
  "key7": "3ffyjnmUKgYaXH5GGpyT7MbVcvVW6TRndXXzFgcyjXWDQfb58ZEZW15W49U4NDvfNUmjFuy3yp4DYfxZk4dc157r",
  "key8": "4JB8dAtZbfmgewKzPziYnV6QhNtqzisYVUvJqVG7jWCnpQN3FeffAo5WXdNJoVPyeDiqVKzzvKxzvd8wqDg9AJFk",
  "key9": "4hNf4Yb3quHckbvRy4bVU2XCNW9E9QjZd8mgaUdU6SjSQb73byhhggXt3AWTET1ED7jRpbbAzmBGvLGgo6tHtGBD",
  "key10": "62Ga6JhngxALx71AtrBeRwPjtws8uBFxaLoji5aJwF29dfFGbkW57YxX3Pp8UsC28RdFyCXRXMqt4Wp1imJQQLtX",
  "key11": "6jqCz7tjGppnmz8sKW4LRtyPwYK35C8JNUczb7DZqVvyxmoaNgCGFgiukxvyUFqkmQNQapz8pkTfhTop8pk27oe",
  "key12": "3aMAsabV7Bd2Z7GaGcxHNE4ieoyFQ85LDYk46VhabiL6tLKVh3VqTCmzN7X4eX2Pk6vw1ukBzXqf8j6RYCwHZZWi",
  "key13": "2JVZUAjorZKwxgSPXUNGPhp6dMCuPMrXbHCoyT3acjtABWGXKwK16XA4BfoVnhSURs34PjzZs56fQpdFWsWhkZTy",
  "key14": "2HPTFBUYbiYVHonn9foj2WZxF56h7CUVdWehiivZovm1Lo4xXykh2mdkbd8SHvbSvsTF83PADxh6cbM7FZcK1H3z",
  "key15": "mGTEDjuXZ8Zpqo97QKAVopsdqwKqoBevF1mYN8UgQhG8iFfycF9sQSFrKSmmAf7tzVpahQ6AN26436jU4CjQSs1",
  "key16": "2cnVTTxdx1fN4qvkWoZGpiyGfpiYf2rSV6gL57EArD3kUBTJZg3EXC5cfAr8egYgzFSZEpYU8XmNZEGf25Wh95Qi",
  "key17": "2qVT8cbmh5XJqwtnsswkDjBGEMDMEr7BKQtqBPvY85HMAEn87R7DMt69QaVhCbw1xUW5LT7NAECe2DWadG8MJic1",
  "key18": "LmbVf3Q7XPL9ximKLfKecK1y9rCkPzW6E2cxfdvw3FxTJ63frQm21TtXBVjWfBXi9YVVAznuxd1t8ciGBZMwE1r",
  "key19": "2nEfT7BFhx6QeqSSeFQTszjXmGcW6vUXiqQZynyxP4EpY65uathrxa4ddwMvzuzQbaiTL3Di7HTn1WodoEGQAvjY",
  "key20": "2RQdU6BGwD1cnn1ou9d85U5K4DuDWWU9Sfmo9DGZh9XpRzdzEnGEatwETLTJipzAkjfrjLe37JJFn4oeSBSgeUAi",
  "key21": "iS9iL9AXUiDnrtnt6aTTA1BLdFzctDQyiFdnF9DbF7e4HT3w83hAJdqHh1yjoULNpYjw6EtjwK3gZbQWteektk9",
  "key22": "3iXR9ibhPSwShcdb4Ky9xmZq4LCBNXdjZcVniiumnDs6hSafhv3cv1nwZsH4jcCvCoenGGwEABDtrzZgEiGSdUJo",
  "key23": "3tyeHPy1i2JkLsQR3XAepTee8ejoc1kSq3dcrRoT9w1vMzbabmoTxxtD8WdyfBRHkYudn9FbMdWYzKi5E7pgWUZs",
  "key24": "4uVxsmWvvDmStXB7A6Kqedqdv2UrpSPyi9W7JHx8zhDjoWLwtj1xDHFojpqaUqDJXfPXh6wvnmQ2f6tGEm3E9Ly9"
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
