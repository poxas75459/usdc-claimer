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
    "5Cav2dpbs79UHyYWD9r7ZN8xA6G6r9FConMFKC49yDrseWVpqjDKHb2cGwdx3TBJMDLfFw1fuC6bPwgrLhqYp1U2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X86KXJwB9WfBwEoYBrNZEiaN6pQwfXZzE6PcCdTXDHTSNmR9LPbAsN87azUoGfjaGL3FVBUBYTH6Mf5B47uvBF9",
  "key1": "3vKeQBAhFqzZeZsNTGmDB4oup3NtHCR1ET7JaygPYRF4kmyMU8CJP4oCfsRmkWyroyQhXmxY3QpPn2RdxNLv6rQi",
  "key2": "4CBqrQgCti6FcVcUfUGbZBBfojuGLZattM3n3853dbJESksM4tddTPUYqveGsXAVbVvotSXMJSGKREcSjorUR75b",
  "key3": "eorJkYmARGFKU1T3XesH7nrznMVXr7uuDijTaNTB6CvxPpHttcM1RyqVQqMWjhB8NqNnkc1L19azMa9gKMevxAz",
  "key4": "49RyQoZRLWexLq9z9kzhwQrBkDKBsXBEYq5MNyk7BLCLAryE8LQMPKpZGMDy8pNeYGTLxoJSnxoLB8HDtaDzszcc",
  "key5": "x1qJp3YmdU3ykSrVfM29BNSacNfdHENxxr8PeVzPLhhyfVNwfJgSnJVY2my3vqPEHgGyqQ1gbU62dM8h3bbN52t",
  "key6": "md4PB3KqcWPXLVzYSwM1Zirb9XEApkvbxkFQjwkvpwBm9uB5VtzNi8G2rrS9kk3t24zQ7hN19higVUJuexD4rmX",
  "key7": "2t7U3p15Q8wErv58VqoSU1qQ5VqmaZrVAqKV969qyUSQzP62MfReAWrsV1UMB4aLhU2Vht5cq87du1a86JUYD8eL",
  "key8": "4heyBKB4157iVeeh9heRoCDJgFSYPa6kkPhZLymQMFVY3CdYdncsZGBGLi812rduGkZK9RCEyXWjzDdSpuBkMfJt",
  "key9": "4uQ9ZEzLvuDW3H5m9QoKqbPSgbWVGbFSa37t5TZK2HoakcSaEhxuQ5cJmhNqQhcXr96E63XPDxuEdHSDmJRThqRK",
  "key10": "fXncM8VsMyi7QkBAaWNrh3cNewocVcvK5SDihttyfGyirERgN1YKHWTAjdTNbkf2euuW3X493CjBj94LN2GYtJu",
  "key11": "5v2nHQoykz9zBfMbcPiasfuTxhmK35t7uu23bsXorSsW8UyLqaT3WuYZyj6yNeh7LZo4saCNTGySiCRKHTfxcoBb",
  "key12": "34LvaZF7dFcR6ucVivF8nSdcbowDCZSqCwjyQ6rQaRYyMy21oeVEGwzxdkH9nP8a57CXK7D65ZybKEeBf9prjuE",
  "key13": "ezpG4L2FWvL8haBHTAMt1eJ3VSkPBzd2PzNgk8Aj1HPtrBbScwWVH9m3t467W5J9HUtUJU5PmXY9Pc81SU5Hcqe",
  "key14": "2YSfCMMKAZtnBBTnHpQCBSVrqb1Ao3BUq5SSv1xzxQdaKjQXGfJ84mDZ722pQgQk3U96k67u9VCtWVRC97zShbvj",
  "key15": "3VyuCtpvMp9NZDN1mDtTShqnE7tsMZjCiFqNwoPq5BtTPFB4JDoxMCwmC6gj6ABak6vMf6egKdAg2mY7taprgFSB",
  "key16": "5EtZW9jqXEnocwTVhbPnZwRCtX6TyjXeJjZ3SUi5w2cXzjE8k6Es7Cv2kBmqREpxReauey9JeTNa5XifmJLGWY3S",
  "key17": "wmeU7DZTxEgwkQF8LWr8ajyPJv3KVSvrQ7EB8BzaTkGvfyNd7bqQfYbtjRpuptgXuYEjprWTuYsYSf6PAkEvM5T",
  "key18": "5dJachYymM2LK1dhov4uV7ndH5q4Gw1qbEDCUSneKmPkLsLyAez4FLYDksWQkKDsPh4KWuKqAjakuY2trrBp8dU",
  "key19": "HcQMGNGHGahxqQo5Rtrh8C6pfSz5ZCaEKrZwEeJnkumMkPEjEPY6Ku4gJ335xzurz9xe1ZnxF488Uv6MYMQhkj7",
  "key20": "34aKD78RyukWPF68nprjC3uYEHT3eW28ioAGNXUNtBFVhP4QXEAMAcisSABEueWYFp3KBrUmwNL2sAFbavcRgZRh",
  "key21": "4M1pPGGzqNVVVxHx1TMeG4DfF4RKqQ8rDACgkyfC1CfvjZZiZScM1NxsjBfPovVcjKeoTjbtCqtU1oseuALiXAkh",
  "key22": "3QcZXKAyKpZpmTJ523heNiRvFpZcagDJQGU4KmuEtMMCSEuaa5YaMZhRniN6fKStFaV5qtE3ZMUeSqyTVK2Takfu",
  "key23": "398eKBAckoqfg12g5kNtHMbHyJPb8xPK3e4ZYkk5MYd2NSVkVaYfLd8Dsvgzssj3KCkcvrhPk2GXnxRik6oXMjyj",
  "key24": "5kAjrpMaFNmz8JzXbQxvj4jNEQ55ZmoLxEztzegMXycssZ4PmqLBfr7t7sr1CHfUsjEjb5jzP8c1KdkoYxuSdYDf",
  "key25": "43344rLSd1VqDDbecRFkqgFi8NgU3YzkxEY8BHmyNETkb4azhWteBZb9cvDqNAkXZiozxRjS7UxiTGnXf4XBvkw3"
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
