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
    "2HEEhNNtEbwJAr25bgX5UPqnmXuUnsddkB9dpk5ZoCshtKVqioYLFqASrviF3b4D7qBe24HBggosekyom4SCKRu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNVZ77ic28VTucXyyTYXE3YH3wnwwoJPQHYystZa6rmTmH4p4zRGBshjQmosGxeoSqeonwCexgQm8FSsE3EtjXo",
  "key1": "5JnzqNYzK2QVeYNmvSaKfjYqSU5xFVG1jazhDYqr7C8Mp6spkcMJEucKrpKvhhYMKcqo5rz6iMuJLWWaCGBp87Mg",
  "key2": "2hAN1zGVhfgFTPRyT3C2UU7xW8d3VDKA6PvuRdp4xDobXxTfwwzCGwHjZEuQ6hr5kWf8PYbvxPMFi6bA9Cavc9PR",
  "key3": "5gJ1eMGMHXjpxY2wwC2C4A6f82VbPp6x9jzjZR66HtrCEG4BDoVKMaKxSxo2VfGnPThjnXv12xdpHnQS7i5bw4mu",
  "key4": "28QpmdKznkbPFNnVJfcCATmzgcpysAdFVgFLRort4NV73rkhid7VMH1pF7ayxbPuFp1ed5Cbysfm2j1C4v92PouZ",
  "key5": "5u5ninsUVXspe53mDPvbXwTQ3SPi4G1rCwsUtuNmFTYRNHAbBhp9zHXM3amGaUic82jbyWyJvYSgrJFzAxjF6AVk",
  "key6": "4rPyfHGWMmdVPhuy3dGyrw2vaGjbRrdiP7VEywLHa5Q1jQD3ew33SQYrRmek8xS3yKyxPYpXB2wnih7xP1PLeYnx",
  "key7": "4e249qKGirghB1wZfKFyHowShsNB6KdsTwChQpzM4dJ868jxKvxTtRyZfe8XGUVfbnRy3XtYb5FxTXh4jBLRYA5e",
  "key8": "3tEkwhM7B1zLrfiHMC8ZrEaRjDXjow8uDbZfrhp5w612XHQTz8Wg9vJpEYkZK6BWdXfQYxwi9C5bSshpEbAcCzBM",
  "key9": "4ygYz9B68F6CTrU5tHAk5EYzVr5gmTjLRrkKKqMgu9uoR6AovbdpHGocHuQzTQq5got9PgyMviCJtu1xQeCkGDGD",
  "key10": "2MECdrYQJXhXQ8g6LQWWSDtNqSuBB389iJ852xxTmCD624BZjnL26DSU55gxkNTfVC3GpNYyoX4HMnDUGN5ri847",
  "key11": "5R2HPogNxvYyQJ4hmeNUQaURaG7V76UeWDqbeiGwcMQpzEuVAYsgUdy5qEA8BghJ2Dye5vwPcmWCnRBJPtTX6tZV",
  "key12": "P3fd4XiMEFSUcBwJphNihduBzW7NXLh7Eh759otVpkuYCm7wcxsap8udDh2vuT2iJQPp1JPxt9kfyNMuitcV7Fd",
  "key13": "2oV1a8bzWDdC8TRZixUB1RWtmS2bmz5dsc57Ev7ifLjzuwiXACSFs6LETuPQaDtHWYMG2UHny6copx2vdVFYmbkT",
  "key14": "3PLgRKc3bYkwc49mMx54GCz8uz1S49ppHFUFeRqu9kY9LW3YEfnVRm82FGp38hzyYsAukSEWoDmSjZXqWMpCq2NL",
  "key15": "eDDjBmgDjik3D8WdJRX5TAavQGXcqyF4ed3dxaXwz2TXLNW49haFcSkBderG9i26iHH8yd2dGn2mrdSYTzTJyYz",
  "key16": "4EJE2X8Srp8AzBdAzkPnKVUD2PQQeQ2JAPtfhfJUDArhNFfaAxoV2S7pZa7s1BmnjsnomghXmqdP9QRcNP52SLLr",
  "key17": "2c9KiN2hDTS75QxFgVbc9QSoQLYb2CqU9mcECjJV2Z4PS3K9rTv2aQyKRNE2bPjcRsY4KLaWHMf2JC2F6eK8AYcc",
  "key18": "3vTm4gSM9C68zefKGNmigR6n2Vdo6KU6ChBD7V5iSxyiCXx2CJtode3HRjjmaafmxLQdAjT4p118nz2SoJD6ZLeU",
  "key19": "5vDwqXWjnXVc9MtV3y7tn3rv5qDEbMjsbX13y5KeqBB3Zxe2PHhnEroNaLxtZD5DuD4sH87PYXvsQnDK4XDwebEB",
  "key20": "2mDhvz6b5ed7EZAqL86VVSQrUh924FAQ1ysVRgSv6cigULKWcjY4UyJGJUtDddfEL9XnKtRvBUyG7ZDSgJTwK1gB",
  "key21": "sik7UgDP1cFAV1rdyqd2nJzckRUBVWc5BVqkp6VU92a1jEMaT2UPrcEnD3MhgmK2dARGaton1hU5zNojgJTyjKn",
  "key22": "M2K96KZvz2MFxqjnXNHkrsAqFEptnjxa7imVuoabbvojHqvagUfUYCRBqd1Zh1HB16iwmndDrTm9TLskmmtx7ud",
  "key23": "2LUKwFWAU1mKVjzxQq2ALCRUzZHnsTGhBZT62213fVWoPXRqzYCvTae7jYqWQv7k1ovMMMLECmHFJakfcQXYtNpP",
  "key24": "25A44P36JChnG9QzoK2xgFgqadhQp6Vq62mxkHiyi3PRXcb69QnKNANsX4qdzszdvRcenb71SMTWJaK2dsjnt36d",
  "key25": "y9GjnSorAt1FoD2D6amxR6UZKXLWtaR4HPkwKuPCECY6egCLvQ5wX4zetsA7s3dDUFydQ7izHxTXFSAyJT7vRKU",
  "key26": "3cuJNGtngUPYAWwxehjrkbXyJd2pKpGH7jjj9wbFVfGuPfpThaoi5jHwCApsUBN1ysBw6Kjixy1wM59fNk3RbGYc",
  "key27": "4CqYWNBfDU73gzMxEaLio9iQ2GtcwSDS4gXWagfr1JQTujy2BATvweEqzdC6M2nE4AK8hkKPmTk6jbXnD68N99mS",
  "key28": "3eFJbYqw5CrwaJ1T1miS4qXbY9KJ3n9fdTzG1cfzqXzLytKnrmxbr8eFXkhVbGRyund3xy1hxxAMVZ8bSJwN17Ga",
  "key29": "3iEBb4gk63q59ynQoBPpskhydu9ADbFwfwyfwEm6Y2GV7epK9tW3Pc2M8TaZqHt6wv78jyUQqrbtKHr4zbDzr9iZ",
  "key30": "37zVCZYgDZondxZU71P1DjsFhKXCtWZ7RjqVv6VK8Ww9dQeqCi9HbKLqTqAMmLtTSwBfEcuG9poJWkUFmXDk36ZV",
  "key31": "3cJxs5XGiYz8gyf2PXBu1xLvTJK49VwqkigP8gtE2TZUBvW3nUjDVfYAts19vhY3sRd8NfotTipaUsg1pQz3E8WG",
  "key32": "hcJen9ndNXU8gP93D9Z8PooXircupQr1w2sqRhKyh9fAKJM51PPTVR65iVm1DKgPkMkKV3W6hhgC15DAzM3nV83",
  "key33": "4uBPxiHH2LCYQTzmBjc3fiqjbG5RG5gzT3WGGY6JyvdHtQm3shV4E52AgPdyV7zZC589okmxQjL3Qj6h22bKyM45",
  "key34": "3KdMoVnhMAGoCrZiRqfDbxTJekoiF3tH7JsqyHn8vS8MjS3iiYojm5b3t4qKK4ERtPu9U7cvkmwbQPUVfftSbqFC",
  "key35": "3RB9vp5W1r58BmMDhyz9pGHjtooMzGiMnH6TdPS9z4MsVmGy8eaprXJsPGqJ7fPGmSQMG3mXe6E43N2SJDHdfMXH",
  "key36": "5EdRabXsRnt3tXm6UGk31GcvVmGJYsw7gSHrAfnSihPPjKvCra9fNvn91YG7smkPW4ks4f4jm5bGLQUGVRxK16Nm",
  "key37": "5oBCNZc37PFJCWPMCigBDXvfv7K9RxM2JEGVwtd6CYxB6XjzxbJ91vpMscJ7f67Jc5q9FGiiB1PNNJgUXZbocUHA"
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
