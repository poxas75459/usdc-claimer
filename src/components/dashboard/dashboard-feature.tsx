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
    "3Frv8mueF6YRqPb1nyfgVq3Tk7VdhDmXVnKAikmB6Ly7HJJx9rUSV2nawEHMu66mTMfr6HZ51U9jVnEodQaF6j2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47NnLPoxWS7TPGWYZ3HBAqZoFmH5zyBr7qKMeyQxdVRz8V5HSVTaoCF2HerTZCEVxXdpipAvvJcb8VoJJpGZ9Xg5",
  "key1": "3qgu6MkiZUeaGrz22R71TgK4tV4wYxgbr8FP8ea1HyjdVae6peQzQAP3ZnvnRf96uzXnNYi5Z65nqMwH1ZiQmWK6",
  "key2": "eNgdKfsHeHZAMt4NBGtFD8K31rcQVHbCSftkoLJ98Ns9xM1RmmX5rTGZyKqRuwKwyPjp2BhgMGdKDGkJhHXE1Ha",
  "key3": "5gSt1rUDZ1Mc5PeVgZ75bcPAwBapEPW2yWfq7X4Vk7uGfjsnGPwgxJPP4JM6uuLCVsnpXLy5gA8i1cVxu6C1fgvF",
  "key4": "5jk43mxw7f3cRT9pdAk27mNhLBZWTD5dYc8LG49MQtyrHjV3UiRTQ3DbtkykUcs36fS9snovdHQz99aTiSapZ9Aw",
  "key5": "izSR9y8uKQjbcEKEyDz1pRjWZorg1R7BmzAVRe9x4yjAzHY25Nhas8FpFKzqP7MpULknUegohoXmgq35gJecFoj",
  "key6": "5VsXBdQzLjLGXAEwBdDpZCBs27iYxer1Q2y7iZYDryLbbvsjREcdyqegy5vjzqE7yPx176s5ZeegRCB25Cdb4JY1",
  "key7": "4eWzCBtso9GM3KFtNbHgTnjzmCyJDfFK25JJH2SAxPkBrrV7tyUgtX6mnk21Z1DjELLVKwKFfEvocRhmzFYMdbe6",
  "key8": "2jckduw1oqQrXVxCL7vhfKF3dszHRC6YQH7AYpRoEwF1DEkvchxupgX3DY2cLmaHUdcRhcaYcC7XyR4VSuQmvjnA",
  "key9": "4XHatAdzQFpPqYQy9W6V9dwh1Y2JMurc65EikDp9a1P3k6Zf8mUhp8LeYPLcQfNqVQYw4tb9HhWgrXfyCG4XgtH9",
  "key10": "5L3Ph86K9Kgz2yexh82rku6bjgaiwxHu8xMtZAH95HCv5hRBXzHNws11s5JcuXUwjf1Th1Jj1zSH4fr94vJPBbN7",
  "key11": "5xXJfWk2UTAFDpwJY6QjbbPS1XDcurUai396WZhu5BRaQRpZtYFRKMKLhQRQeBE4G3pHKCbdwNQ7qqzPeGEgu363",
  "key12": "47DRHAwQLF16QaUjdZUm6FhrS6NNSeoj3bfjxUKZhwJR177tGVqgszpeRAuy4SRtburBT5b6RAFD8owEQaH78Jby",
  "key13": "2KYvUBApzCw8Gh8ZFZD7hvKWfnj96eK49tYGeEyoGQsuKG6f5zA4riuLPi3BAVdentPMA6z5zunzVgJHgEmNwdrp",
  "key14": "3QUFjZeQgt4XQDMSCgnedvZ2XwkrcAz313Ru3cqKVbcMrdYwxABcm4qtTaxxLL6NsuRicAXrYqrJL1qGXHqSQSi4",
  "key15": "5QprTZeSqaY1ZgKuyDox3LN2xznBruBtfHwmvGvCG1WZCGYBpHoAR7MC37gB7xQ7t3idq77MoNmtsTVCewHhaHPz",
  "key16": "26BkWC5eia4rjCjgf2SUJEESzkdqVMfkcw6tb699cNbMBbWy4yBPTyaYPbvcVoapQGfE4DB7VibbBuX9mtPTexqQ",
  "key17": "2QXVGpZf6hNiasAdobQkyfPsXN5pxtDM3VJSUS2bFJYWcngynSiwRTectaQe7aWfP9GWsbSmzRrkY3jKsUWfBVwL",
  "key18": "MqwUpEqD9YmeLYhArLtoPUiig3GSgF7ExPpzpLdne9VQDg1eznfuhm6cVfXdy2448nzoFhGaURDdQpghoM9vyAH",
  "key19": "kKfQ4Le5Jt6qkjGjqznu8xZsXNqintHrrAAwVHez2PdjnFgbQrVEwEuuSpuP4etKx1MRSBtKpKo8MNxgZrVL1fD",
  "key20": "3q56PNw85gy8s8x4yDbnjEXohG7TJqa83QUbxc1juvEz6MQTDPwHWF6F7aTb5ydX8WQqHmkkEb7ZtQmcUyN3uVVE",
  "key21": "3s8nSy6kPsk9g25rXiY5bAhKN4S3sJPpBU86zSH8bdhMFKQJA4FH7GsqA8QxF9xyWHPT2HZmv4A5TNSsMkThM3kL",
  "key22": "5HSEXYhVBgamdYq22ufnzHigSP8N7bXWR9uKmBS3eDeBHWF2wcUorbwCciWeV9fpnrD93gx4bUmvqnprAiE3ghus",
  "key23": "ViRoz8w7F3kEPwxDKMz11YLt5k3XF8hxdad161gEgnAGqtMvaq8e1ehNPSNJqsn52Ux5nNbPxBshnmfZMcw3CT1",
  "key24": "yF5GJGpJHA2Bwrj2sGTzmo3B1JD225uDnqqu3G8J7tQPcZNbPHe8Vm6si1RVA8JKAJT86N1sMwE6jqvvtGH5WRc",
  "key25": "4ZUPRPyrfF47L4qVTutNeYhjsMQkRrB6z5SrBs5TenNHAU1JeKLYGfrfwSJY7b12vkb8aKQdJ9Zz5UXSkGVBeJzP",
  "key26": "61kUmQqFr9hWbijzppMy7JmoGkR7Vgm3ujwCPB9wrEk12C4j19pdSHuWZAx4aLq1JDWCNjBCsz9gvwZGPj7nnjJK",
  "key27": "3GtbnCTdpSN2CqYC9JW31z8UKQEJCrMfNdutgFy6xwvasmFMCHgbsM8AqKvF2c7FnF3iagqw7rDgJbmbGaGn9vD2",
  "key28": "25BX7CwSDPx8iYWFjJYRcHoetMZj4bQRtCbmKoTECfxBnK7dYEg2N2c1hNqnf6HRvaZqdvVz9ptMrZjr6W46rCPj",
  "key29": "64ggH4p2ZbjPBFmwX8M9GMcgRvsE1UaqXASL4QrJKsvm9qvFqNGFYYDMHefLLYhrqDS3AHtLNZ3VNBMdqQD6UDXu",
  "key30": "tqxGkD8kHR4NiXmn3jPGeYKLSWadjGHCnQm8g1s8Fgo38b8AJJRQvvNBt6oUp6kEzRARc64cnvs9kTEd4TbwfwF",
  "key31": "4cD8eELsFJNFrCgQYwpSs6PszkZo6juEiDZ1nw37ssqxD2amVYc1THy3h46Y39LDPYjVJuzLncDgDkjQr86mbxfV",
  "key32": "3i3o8UWdnvobUEoSNn2T6pnB8mg4xyLDDMpGQPzs9iMLjPs8XoiMxnE3AgeajuViw5E3SLVkSLeduEpN6mwGGs8A",
  "key33": "7Ea7pj7isEhiKSwU3VmyDMhR2rYooKGi5SAVRpe9TD2Z2H7uMj1PCXL5tRK2FNrbhobEwXHy73Wco6auGUmy2np",
  "key34": "dKcW6HD25SL17eR9KpstkefBf53bqtTZur3EaS9CR2c8PoX8WSb6JnKM1i7W8ckQJcDbGAwa2BvQE6tjsLwgKJb",
  "key35": "4huQNmWju2hWWGT8fBm1K3Suwi9wDpfbcSknBCxYbvHjdibs8kPLEphqP9VYN1TP5X4SjkYHu6RfXyE7TFG7BVgD",
  "key36": "2L6BDvBxtHVvpVU8JsWY4ZQ3HPJHnekirJfVbPESirYCkfwL8MZyDgW7NYbhhxErkMh4xC3wCBDb3fMdZkH42PRR",
  "key37": "4F8eKDeVpsXuzKaeUMyWgXxrHffZSuFTF2M5vqxtCZkVk71Te3hHgb91pUgW5b9bM9jiR5vhryjABfWFELDrtp9G",
  "key38": "4TdMvdBLVmst2zRkxvWjLvRU9sa1sBVTSxvAQLNLUzaompuZErGvZyBZfvwcijtMB3ZjX4aaPfEGEPhjiZDEuTok",
  "key39": "539Tp85pxPFgCpKeCLqNCJo978WXvwDT4gXYynYPYLr1fbpY25J5oNyCbzdxDrqhKaK2wpDNWezaojJ1bwjDQ9Ux",
  "key40": "2TXe8UFN1kGuqo5BUBAdxmQps7f1Sm1WW3GG1QBWCqzWEq4V6YE5Biq6x2tnzqAV9LHpcjaxNpBmFUr9Zqx8i5Bp",
  "key41": "2HXYZUeuDvkY2zKJ4jzQCLxNLXzdVqFXFZEMcFx2VqKXucWQ3DgYLB6gpVQ9mQQ63xK6bwaUeTTkdiF2PYuyyfen",
  "key42": "5UcRwY4r7FFQX7ZXyPpe1Sjdxc1ThJqGVvhu1jRrbxtfVxtckQb3Df8hExkNHxiNDjR7rXYBCKZ4KUeZpSz1UDe4"
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
