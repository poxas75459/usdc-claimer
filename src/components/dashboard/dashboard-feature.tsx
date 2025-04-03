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
    "Wr7wGFCJFSnnnjd9xgEhPn2QGB8xNH4H8YCxYafgkEuDgq2WQy42XhQtm94Pwic2BErAA8Vmfu3qzBJC3s67BYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BNC8k3fBtHiTVckT2xmRGF4XyqSh8RUFUuVsHNnZXLVBQDAk6RhQxkLsf4j1CZngMfHn4cecv8driyFnzdfjC1U",
  "key1": "3gPVRmhfBvQr1KMFWbPN1qoimQ2ETFJ8VCJ8x7Bvt1FQYocbLHQdUM6fpqKscngKRnmx9bVUJSGU9tLkuDkyWUdd",
  "key2": "8vExrLr18Kuqh3VDw9cFjd7VdJKV8RZ2Zp9T92CisPbg3fGKtgzBZKQdcRx59nyeZZGgFR6JF3sY9qqfzkJX2Fy",
  "key3": "7sAqFwimLAgUs1izrnaYBB6WVcc4gpKBFU5euXttkUo4VucNWXyoMnG1mMs9eQJHC7qNM482MJWofL9UBBvVVSc",
  "key4": "4emPoWRC6tiEhUN3GfgbULSANwLBgZhoR9LeeWSNfwgb7q9tQao3CZfurZjjJqA74ayUcQhuNjgD3XQb1vW27M6V",
  "key5": "65jvDSRoyDRRy5J1an7b8JN9TmSTYj6KagfEBxg64uyNTtMAedE7D8cWg56YnQc5ybv83wGpo9dn9vJkVeAFQU7G",
  "key6": "4uNQHWKXYjVo9jvAWi26yZ6R5YUCqTnY2xZQjZdXNMytDsUXrEVDt9DwTsFQf7ke3pg1cuUqQvw2zo6c3U4eXCB3",
  "key7": "5ZKwm36gTTQoQBCBry48HmYqvqWLp2E18HEWmeUuu2TuAfdGuxPhfykesBa8UnA8yYbdQab13cj7dTxcnE4wAU6K",
  "key8": "XVudTyBTVx4f88EvariAtVj1XC1Por6jgVThfmJhkBunf6mFKpQUBSUmzQK6Vt6LXqvaYiCcb4EHsbTqUvdTqeY",
  "key9": "3VwLVDdUMcDJwPBKgvaTnChZ7Efbf4o8g4A3raRCdzBjQ7zvqjF29CNmsgcmpm3L3PZ82fenxst1DqVJ6a8DNmff",
  "key10": "53AMYSK43HkQWjowBEvPo2tvwMZiDZg3diUthMNhSQaUQEu7hJiiZvppBZCa7Md5RrxYbafVeftDNgvnZDCEg1yu",
  "key11": "5BJQQjER9io8k4G6qTJGJEiUVw95mmNuyLTKdhsQpKSjCWkDoMQHzc4kxURCyWfk4PkKo4JxCp132hzb87G3XzzL",
  "key12": "3XjCjHxkW3zAc8So722s1eBcPehcDXifkRKw4BrhTQKBs2ZgxvhGcDDkeKRMXw4DxgrQtpRNzz1unasssH3SWet7",
  "key13": "4Db4X83xjgqpBn14M1WuKHT5GgqEXhS5LFTR2wi7uKfqMpLzwWsmQxzNvRDqRMiYznGHfpo16ouWpkW29rDMuRqp",
  "key14": "3NEqaaChYV9L1UdStSvHdXLR6Js7hBwFpao7cfWhomYifMPiqcrpGR7zVULTMpHm1pXUoFgbNLssuWMzmbbn96w9",
  "key15": "2jwzfCsthKj9SPkCoNBLVgwRJ2Lwqbmh8xQFE2a4ez9i516HfWzhMFh1b8Avg4LhLdXMJM9nrCCb864Vv1QrvbTu",
  "key16": "39dz1ASkDrXyZz2sgyHeiZdEVVvCS4Nizhch56zHPL1qUvAd2axQLF1EGS2FWMUfSJFeEbzV6RAhYNuZFNhUwVkS",
  "key17": "4YLEdLYQdpg8d78Le96fK8NrA4Cx4MfMGEiAVxE1yfRPsNAHAWqauoy8zxmJ47sEz8XiZr89T3ZvDy1wEzK2yVPJ",
  "key18": "3XhewkrzAUaGaWT2Bo3GU9nBiebEymFQmvpHJbWcAJxGW4RyRV2rNLGRMoNxom8Ah1hGXpTcGYYrJMWjikCGnnaR",
  "key19": "QHuaca1FgCwRwnbFkop69nsXzP5GDnbFGVJ5LdsmiewptymxPLpv3g52RpPLTRHTmgP65jVBBvZGyfHqRbAwbUG",
  "key20": "2xLBtknAKYboLG7btyqBmJaXMpf2hFZki4zrDh65eYr4RueB1P4KD4UU9jCYJKGx5s3THqTshXcxF1W1z5xWaJ1E",
  "key21": "5rTXBfXiZV5dysFnxp5uRb8fTVHVdiuo7xMJHo4zag9AmMHnoVJKTE2MWRtCsKjFvhmz5csx8HL77xNTVie6oiFd",
  "key22": "CFZ5khfuJDTV7jmhuW8EWnptsndhspmr6cD7e53Hfet7WwNJkAQNB8EqYyaqLiNYeGwXQU3BqSEu5RhV9FN72ec",
  "key23": "4f2Q7Xrs7c8pH7zph5a27kAvgmcXJGFjSKDxostJEmeEBr8MD438K5Q582NMHbNrfFqHGSgrbLHtgedj5KsjDPj6",
  "key24": "oocxmpR4DJQwiEJsjvFZdyAvcTF1jVqUuxF2PJkAQe5cAtFiM3ydJ4QTjbar5NeuZv29et1RafUphHXWgY2Y7W3",
  "key25": "5HjYWooVYMf69pLTK15RvDraTcB2mah7oLXbKZers4ez9JZnJhNq4hxn7gqeQFnpsBGjvQSR5qfxZtk6DP9HEb34",
  "key26": "5QDzLxTz3jwemuiQAj4Qbxwq72NyrADnnaGZuntikgEptykWnHtBhZ4vb6bGJ3EKwKydjgskEUjMdkMpeSMFtoAk",
  "key27": "4oLigVwwcSUAUeQejGgj5AG1bBhWRQXaETAMzuJcK17pBswuK1jLtbKAoqApzDkUAJ98ZEkQmEtuoU4rVCjXJQX6",
  "key28": "3dFPPMXXum9kSPU9Sda6sBh5CQuaBVoRTXMkaVxrrUAesW1qA6Q81M1AgGEksJRLxxT7DHUvATAnK22SdDj4ktEK",
  "key29": "VQAvnLDYm31F8ZXkGKKpMqqmuvLF23GAhXBMqkCv97hKW6XrjwkoQYgqmzMBQuzt4w7zYaHj2qZTHikfEiie1KP"
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
