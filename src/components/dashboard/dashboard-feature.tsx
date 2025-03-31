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
    "kngjtVYsqF9emxrmTPDhNVAY1c7zwc3bJtetzhJ57dxGMqmNvHunEtoPRkz7Ryjt4zQohyQ37FqR8cVzU4U1jUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imvkbAYgA1tD4M54hgpYcDExwSMZvkjcmKw8d2A3A8LWKVvX7Xv6JYaV4yvZBghwuNLFHPLtjhm8d1zTYDinYAH",
  "key1": "2yMQV63MLq4WBsPKaPeBXVJ4q3yUQPEDLNg1EPgQtuiBwS3bi2diPNKtSrq95iU9ZsJhT7h5D6NTxRpL7PwEpqND",
  "key2": "5XQfvGDWjN7gZHC4EaVwL9kAVANtRZjQrewEq4fNu52S1VQMo7ZyyXUrS5ZHKmT5gCffDocDHHiepZ9eMD1zkQmz",
  "key3": "4R5uyLN4kFXYZZCYkynvv9pGodkSPnTjTybQG4kARDp1Dp1sn4kEQRtSDrKeEZS83odyzkvp8Yk8G5YsD6WJJa4a",
  "key4": "27voscJcHSeiS4a6cwhktCpVenyhsqkHk9XVGugeT9Hxt69sZjF4vbgCPuwiKoqpy6dhtnSuZVhcfnUBjBEmePA7",
  "key5": "3LsNmmhbhNYSJKyX3vcCekzjJSAzokfoDBxh1qJrKonAn67fgHFRotDoeKuqR3Yw7RdeMxqNafapZfgiEbsHkceV",
  "key6": "i4w7y7yAbpfvaTqhZPyCVx26mttHKJTCsXNcVaD5TLSDxxAv4p4Cu7H3bCAuW45jtJUsrYJw764gibvPQSCziwD",
  "key7": "3W9LRLEEzzDha3oB4DUTuD5wsWDGfbiy7iexfqKz3LfhbRFLHc9R6gXyhSDpT8MqsCg4kcVtmdrHNTHxmbVGBm6",
  "key8": "ag5e3z64ukzJwyyj1aPDiNuQ3UXWE2d8uWHdiY6RpWw4h47Xqkb4LZ6Lwk8gML8hrMfXaheXnB9RGRKxtmgxpVc",
  "key9": "2bFCXfD9efVNGLvQS8xWAkJyncyVixRXjTEuMH6LRngc3hCSHbDUArx1aAqaV7LmLgZkJdxhdFVeESKmJQJDuU8g",
  "key10": "4GPEvu3engfe37DbtvhGwnSTGZDGp2VJrmg4iwYNHHa43Fnuiuk1h3JEzwc376NyDwLyT3RJCwC6Cactq5LUKagq",
  "key11": "4a6SSqQuJUyXsvL6ZHqLe3Q9JeehgPtqGMvwDi5yRCpPxZ4Yj5hA8ZaE1LoGnDc58NFvKuZydoLUNqagFrDqJDKc",
  "key12": "4sxWzLaY693Am7SqTwsMUaiT4vXRatG4V3yQduECjBCKJrGici2UMDfjxJPnLwL34sxZz5z4o561uC7gxZDx239m",
  "key13": "4DBce4duFQ6W2oYiCbAYuJvpNFNvNqzfqzNjX3VjVUKQEkKpNV4HdqP2iGLhAuQw9Qedya44FUBCPpqC5A4y2nmn",
  "key14": "5JXKmEufXQ7fSTt16SgF6msrPcwtTPcDX6zUP2MyDrwnhtq9WobLVyqmhx3u9kGmnd5pM5R7rGdc436nrJjdfHuV",
  "key15": "5dzZQLNJMSdUjus82d6kWpu4zs3uSr2VCB7wnNv32CVBgQ2mh4242HjuZfQ78zV6b651TU1UudkV7bbdYBGFxBio",
  "key16": "3CJk97jgQWMw9bfe8ugcetVx1gTAcjcfcETJWz78wD59PidCriD51i55u7oyKxXYZkeYwZkPQQ2C1r6mgN79RHfr",
  "key17": "45mhGo14fmdFr77E4GnLLiguPEvBXBGWyKkLdB1Dnp83okXa1bwBBXiCaJCYL4nDBJj4Ck8bm2uRrpSUyyy2HWNK",
  "key18": "2gA6tWbprstMVgSggGgNfDGKojFUKZqRipzMQuVGzerSSUBF4583SqKA3jmrbP9VhgsgwuJ5MfEEx4AsVSPee2pp",
  "key19": "aHoQsD5c4M6aLzJoL3STj1RYT6VnkSNBwwPNFX3hrQe3VBxzyWS77JQvzHmcJiUad4sePYMLShYpVMy9o8sk3ej",
  "key20": "5GWPppy29zN92WkyR65t3fx3MQ3vZFxsuVeopD7onf1wwFDmr5tpYMnspB58KhXyR2jtrqYNHpdqQVuNqpvBPnu7",
  "key21": "3wpC6aDq19LGekKD2tgD8nUZUW5GemcarnCDHSRmdoRUPY4RGXjKYMayq3sdHL47UD8DumNBao6yq82tWs6Y23iA",
  "key22": "5WRUT5CJfFKwDJVjYjKuemNnZXiDJi3P3EYYLxAaBWv2swyhyebjXFwR5YCQaLmWKB4rCc3MxQHYQbYfYV7u6nBn",
  "key23": "4QmjtygkXfAxfcBQ6e1vDLXqs7wMt1yKTuDccuWRLB1Fppo3RR7sHfj52pdD4dSgnQ78EXoGmVBoQWhvScMkE1iJ",
  "key24": "3NuUZY6hBNkiWs8TnVnH8V6qY9Nnx2FMDKE8PJpcvJ7RtTT9LTEazXAiy6zMMp8PQdXDVJTxKdVU1VQjM3YWFkfL",
  "key25": "67d8Kc8NX6tGMTNLBjScRRsVpd5UpPee3qfUUbpeX5GbqUBXGQGRpBhNJSxJYwGSR8HkfNXqHet3w4QNYCHxzzWq",
  "key26": "w7AUrW11L4viV4TFAJrqD76H2VDEmamCRoee3dCNYC2SD4x5zYKNhiWSwKrYN7ZshgrhQQYdT5TfhrhfwvQ4Ybs",
  "key27": "4LL1fFba1LT1vJvaQxwbnPUCxH1yoS3J6TUxeWhwqqa1BwAFv1w1rxC7CvVqCJtarkaURReDbCBEc5NANBYEaF3z",
  "key28": "3Hj5pd79wb3Ng9Gj6vs1fGg9akvKb8nP3xchb1UVvuAf6H28TqzvPpYAFKhVe1sBL9uudWXpnjorWkYdq2XZJakw",
  "key29": "4n7hdZB1ZRixisYUmcUWUwsYkHFczm7hqTR229QMn9WLXqjD7MRbraxPk1gxzhVVNCYFEE4QHSQUdLechyumc2Y4",
  "key30": "31QvjGWx4AHYx6zGP21i4r7rd3fVc7GAbNyKJVzikv7T8yRq7KpteHdCfcUSQsBkaudS4CyyVnURnSpVabqWtxNB",
  "key31": "2VHbaxf4XT7KLReatuvvmsgYJSsb3Sjj8qxWMdaFyxeKAQ4P5K56t2RdT8B8HcrNUuBrWx4RzN9hqH8juXHWFd8C",
  "key32": "i3P8rH6zFed2TCsCRR9hbS3AhFSwQ1mtGTYYTguTbj4tWR7mx4uPbymjugV7YUVbXgyMT18vr5ybMcyeuEnaRr5",
  "key33": "2HocTWnxVWECtdtiR9j5UoGR178ZGD8QmBAH2gFsgkf9gZn4sjkEoJfqJ8BNAios1LcRGSnrwpixKgacUHSVw4t4",
  "key34": "25Yoj6DTGdKpgQ2tDGHhZJXotH9oNBwM3vYP7NswWBjSFuU47ctCAqW1u4FZHYgX8GnjjHgnMECydDdupPSRoiBK",
  "key35": "63565pySLgVjmdYyCM7ysp2uttazRHENb4XvGvzWn9BmPHhEzoaj4xWMNNDQkA5fvTE3MYZZDEWt7vGGBPbDRqqi",
  "key36": "3qFZCo26JFQjVKDakWYaaV3cdmcUXRKciJQPv8jeXPFVdDNzuomn97XLkm8GhXLfmZsFmKmzRbkxWJJDzmMJwRmo"
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
