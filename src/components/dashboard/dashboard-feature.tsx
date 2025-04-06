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
    "4ZeYnY5cZWUqovJLyCT6WAPanWv8DxykSLzuRsvbUWZbP5fPeGC1RcTMcHkZPSHJiS86EeuHNixQJNGAQRgDpDdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UakEi3AuwUsybGVoJhzGNHr6HsAcZR9YZgqrt7v17P4iJgDxLQ9ap24MuyWdM6iHg7YcthKk4i47Vv321pwYKT",
  "key1": "25yK2wErakKmsUgsMcRH34HWjMdpSwN53wF2vbsBGHBcb68QEDv7eYbwYTgyAcK3HVqFnB4xfBY6hdKbkNf2hFvT",
  "key2": "5c9faV8vd9AnqCuTncSRmTFZEsGh83DpuTwFS5weSZYx5titgKiJL38UVtZMUuT8ExBoRv57Uk75XiXtTsNFZSYU",
  "key3": "2jpiQY11hBHJSCTRBj4tXLVLN6evoCnEuT5B7EknEG2VeKZuuceVvZjcauk3MR5phj8uPcTq7W7SCyTZ5hPhs9Zp",
  "key4": "4DffmwYSk6b3uZPtVLPCLqdF8FLNcEv2MjsK3qjPPqedGtGLqnCAMgxswJTrQHbJfVbAv2AM7w1oNwxnjn6fMKr2",
  "key5": "4Z2YymUConLvnT3AvRhnqsoyBTXh2yUCgRXffAYTSyB2S8gBgL6hS9rNAdoVwqvNPuGGhCZzVzVbX7S21jryypAJ",
  "key6": "2cosQVUf5p7X1LG5vNExtRPqUSWwKYQiSttuDMnPbxeUwDNRHrtL4NRF6tDEgQJnYQxRCMtesfPeQ6ZXbfqkdPd6",
  "key7": "2CL3kVz5PsHACecnq2qqnaVyDiG17Q1u183ih21GYFsVP78YbVp2BvQPdYcqxU5a6i6s3DjJiCEafS5mQP76sJPa",
  "key8": "54yEdguAjHLJTRQ7S8yoRE8HBcHMiTo6inNtAp4xiy2X2Ruz8diMLjF1jhDyehyDC28bDMWdLhSDSnhJK3De5sP9",
  "key9": "Dw1eHTZ53ssRJJ6HPexR9birabpzNMztmFQdYN45Kduq3MvTpVH6jCir1U6mGkKJxEwNK3FnAAiB2bzPkJGmnqq",
  "key10": "LCmacuh9af1JxbXJoWQzDmo75S1gFJESaZdnUe56oUShVbv15JgLameSRkq7DcjJicrK94TxSXePUzvRvXF5PFD",
  "key11": "5bqrGcKJw2EhtnxCitW7n85oi9VSdE2reCvzJUDYSG4T5wBrJTWFMwWsmySjTTAKfZVHTjdb44vDhe7J2PUDp5TM",
  "key12": "4J652C6ZrFB9xxETPDTZkU6wrEGKvruFgVNnqwdAp6h2aTa8jooxpN5kQ2MQqY1wGcu5QsyRWZGusYebZD7zqy3w",
  "key13": "2xWsuAiFccyENjPA148FSK8oj1SWxhr6rU4HuiYLZswFBUM7ue1iURZ6ipNSW44rEAQvvsdxqyMAX9MLXUXGuSU3",
  "key14": "3se3apoL31soDkcHSztHXg4KaFUxDq2mLucZgSCfeQSqFLe1ckiJgTU3K53JsYLhFpRK56Td7PmrQ3m6Vt126V2f",
  "key15": "2N4nhqGQL3rrCv4B397MP3wFEMmTcnBrVzbnB5GAALgGonD5C9Lp6cX2Qo7VJsroBvEcksb6oN6oscC9RQL62uGx",
  "key16": "4Zuh2GYd5kSfnyHfS1eQR1tcA97yBwJRebMLLRM7SSHvxNCvsnoijFE2N2hsb3jegRjLcjT1kqwcHU87ZuKS6vHp",
  "key17": "5CV9YjALtDahCYs8iQY1gFiBNvbxG9uzArucLmuQiwAChSnba2BxuzC8cpSqvNpfuFfDhYGhJ5ND7cbGBLHgvz9V",
  "key18": "3u8h1PAyyoEziymgunRxdstf2vqhT8eQtETpWKxYzTtpZXV66fu9yh7yQ2d9qxUugBfMpP8PNMK4oDGweGorGUvx",
  "key19": "32ZZZjyVK55UZy8vEjoeDKUPYCGCHDgrWrgDu9StVzBhZecqFp6fNjARYcBMkuAjV5kd7JcNRaSfbBHAZfCBJ4R7",
  "key20": "3N8HobwnWYQ5S9xvPzRKiX5ZiSrUYYH1HSkfQGi3Vbxs3yUxPBsAXhMRZXiWntiFpe77wP6EMjn8cYo41JPu9VY1",
  "key21": "Po7nAdqsy1fSpncbrYtnm6ndKANshRR19JZQSY7HEnyYj37fDcCHhMeh8HDCiRy9AVrkmk2mLJANe47kxSjJv9h",
  "key22": "2tZMwQj6dW7YAjkGwhRzFwZSSUYkwRdU8WVazC4H9QuoGpmkvRvTiMJDWrdh8g35SU5tYCDu4DztE69sdNq57L5q",
  "key23": "qoh1Z64JbADP5XU9M5mj8wvnutjDpWt77FRtR2PKunUCsxZmDkJ6PW7RKWYsTr9qshgAF8bXKxAPQf8K8ReBjXN",
  "key24": "4ZeGW1K1hYsrhUBNiyHtPT33ZL6XEoJmbH8mfMSQG1tT6u1ZDXoPDFVKZXVc9HzXkNBDKXfDwbr58zhwRYuobhx1",
  "key25": "JixH2YTBEP2428MV3hYqQFzb9GjpAUv6Ne1925H7ufnqNzGfV2XshHMUcJUzWCc12wj7ibbyG95vC7HbP3q58kh",
  "key26": "3jCDSGD1sskLUdCc6ZDj784fx8ebTbZhSVxzhcAWJQrqGLqMa7rUS58esfFrHCchdwaUphLyBJe2EP4MtQVnGbN2",
  "key27": "4HA9YFZU4oDBcKkFgks7AWmbWWfN5ktSuS2EPm2KyYXhnnWepb5hYfUZtKK4oaMRMYBLPJwJYbkvDWAju499eksb",
  "key28": "cyHzYGd3DC6d8mikNVGtuentGe4E9yWkjDHhz9kN6TtnP8ZL7scgDrKwmhFocbqwBduZ1SqRfedqBzoPoZiMpxp",
  "key29": "3tGtsQ1XXGmZmwqnv71iZcozYfo1wjUpw5b4SfqYydoK4AbUTuBYrfdYckXW8BbxMReMwb1vq2iZ2WKpGPgcvAM4"
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
