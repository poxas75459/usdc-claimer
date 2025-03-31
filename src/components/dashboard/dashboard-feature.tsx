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
    "4GMF8Zxbx3FHtXrJNQ5XsEZzFAcZyoXVeesnhoN4eEgw5AGwspV2VEU2FGRbDCDfFiJz6PT2RgqMraszX6vESEfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mh1E8i4JrzB1bfFUVswx3xy6MsiAuxjBHfzrZdg8ESDZqZscdsGnwEdHjydBGNwcoxEYXR8osb3oBFXDdBejDNk",
  "key1": "4dBS2nGLdvG4N4y1n2Vr6CqkTFt8ABKDfMjnwAx7oTydCmTzNJE5nAJ9grfJGzrAx17J2vt9yRkAFpFqQ2s4fegG",
  "key2": "4eZwUnVD8VmsEx6Suzg8Jti1oRaryQLH9B9roQ2Kff1jgd5eMQS3oB3STSz2fkmm7NN8ynaTUTHoHS7diSxov2sN",
  "key3": "d48Q5dpb2skVysJo2hSoU6Y4Ny62URrNj8V6DoRKgkqy7vpCEUC3CVcTVssntbfEuvTLnarMBiYFYuBuupgevF4",
  "key4": "3hXVuXiTkoVZvyWkV4AWU4KJLKMC7S6gaQTpuQJZGpdF7hF2QYCm6xH49VjjUm3BLe2hWAUf2v6KqpJthNoNbRZj",
  "key5": "2MUf1sjtNsv5t1udthn3KrpG4vcZBzs55vBDusFNWwTshsTDzGsmqVg1NUyk6wsk5fTaHboohaFhX8DKVE6n4RAZ",
  "key6": "5L7uJppVUHUUi8uuXGQFLgVBcksoryCukVLzRYT72YhPEqb76QFNsN4jnQ9aPaTpHJv9mHLksNJjeGgcuSQ4E7RW",
  "key7": "3AHwZMkHbfyuvnWn2Q1r4in7m3VpVsUGPS1TLS3b7WtC94mZR6RY6YrtLAbpvq5PajVcAtMg8jCtj6hxBtpXVcbo",
  "key8": "sUvAH7CYoxivV6rxAmaEYZWovKWcei4Cym9hD5XrbFgQZm7rXJzyhiTT8bYRhBqURnruWj86GY7mtCR2j6qd1FF",
  "key9": "5gBjp1uqTW7DwVr7VkDqWveGe5jrGBdxeaEajHsoyaTQJYojnpbNAfQpnYxeDL5RRAiSYkwSv4jkMYPcc7HpjqR5",
  "key10": "4iKzJoswHU64UAHzG7tjo7U4H47wrMZ4kCTnC6iSdfjrq7ULkAo1nGqEdYDTEytxySj2CVG9FXfQ6j4FSQFx7EH3",
  "key11": "4bAFw9v5DBidkq5MD8UHeZqr68EE76EFrFNXtndQVzPSow57AFgGGy3KqACBr2pr1dB1FdQjuWY44B7MnhqknNfo",
  "key12": "42DYSkgs36s3FcM6aWsgaRHmQ9XgYRb5uk4eGsfgYnqKJqzq3sd6nQs1jBqZjsosNZ4WfqyKweqDEUbKUGvo9EFi",
  "key13": "3K31fbiZUoXn84krHBVn2EQFer3roRGAw9MisBfd28kVa56Lb2vtKhnmSun1n2hqi1FACSRYWPzHSVTbP55o1hVp",
  "key14": "5ZWHyiizzkGoC2Vvg54TMTiKrqQrpMFW1ir7vwGdyM4fQ5HGooVzwH6SPLNKeu81fMQC3wCxqtPTufrSTenFYaJt",
  "key15": "3CU983Cj1Ln6tmB32GXshX7VhnXJKVsffoSvzqWtqFzn4kAk65aSddhTV2JFKYm3nw2JwXczxCiyc4ukGKvqzzSa",
  "key16": "3C186PPN2c6Eh7PRnvQK9yDSKEbfmecxuKTAQXZWjVZeBLoutT1wMUE5SzAUK7WuqBTm3Y3zQpjQ4qYigr8uVesk",
  "key17": "5HiAT6HdQoShieo1eZrzSvcZ8hWVDY237Q6m1RXFF3QU9Hx2PMR1dKdwLcd7Rh6cm5yrtna8dzCYjUhpB6XjaHSR",
  "key18": "45noYQNmh6B6RAR7dsL9bTYgxpKQqKrVceasgtWTYYwTVobEt978kzeMNNa8t19QDjaKJ9Nyr8k1Zz5QevpU49Eo",
  "key19": "4osch5UvSZjkyhh2VjY1PETRDMiTnKdcjsERpVCzdiDoG178aUnmdHRC9w4XwR2LAXcU7KjyN9kyWmfgdNLwvY1r",
  "key20": "3c6n9uKyzp5DqMTzdVdUoh4cPu5hJajNQXWobi7Rg9L37xvuJPr2hyeZF3QMrZm7dpQiYXA3oNiv3W2R6Nc2uqyV",
  "key21": "rLG5FURZBr5TDWFLtSVf7nTYGjEHaLio8NyfEiWGZ9zzAqDih3VM9rsjQZtHzoPYcEaK6n5RaqsHBaYn5mmtvEs",
  "key22": "5uErdcWX33ZdbTW1nrLkpoAUGtFMArUgHAwshr1fQYS4ZdTDXhndCwoAttocNQxGz81SjwktqVhv26wnhxSyJyFg",
  "key23": "KKF36n7DTV6PfwSgPoD6YDPfWm3Beet9wLYnZxW6hPD3mMYuRAP7KrB8rmjjRLwecfSHxQhNTHcMX2wEPTVWSS2",
  "key24": "57t3CTRV6fnAPDaQaXotXPsnggcd9jTa9cveycsWPc9kee1Z26CAQZ7MqztTFSFFaRnJm7hZmZfXyMXuhKRtSk2a",
  "key25": "67cotUrAMMnNb1ViXnrXD7CPSr94yQbt4FejvuS6CP3eazKNpvHE59s6DgWazbjkyS6M5fK7J1twkSe7DsGE7Zmn",
  "key26": "4EJFpbnjVP3zbZEbBgb3zXtQb3xC9ZhZZ6rswjvqw7upKVaQTaVnmwgNxL181BrW5XnxLa93i2CdW4z12PkCtT52",
  "key27": "2uxjBuDbQynFQtTaebKecEKJc4XCnRDmkHP1r5UGmuKizvEKdCNj6APK72ztHgVA6e1UvBJVJ5PVq7uF1HwMCLcy",
  "key28": "3k7D6uCr6Bo4YL64u1ozp6bqbiKpYzy1sPQkYe8tKeCrKBFXTL1g12U6DpvS48aEDiuMKpJfV3Q8KdbQURJZrmfi",
  "key29": "5EZSKTxMtFy3HW1QLTcrbLFPjFuX7uw8LF5LdnLcsoehtfdkjYtRBR5dhf7XQZPh2HBQqZtzHecJGQ4P4UJ8nouR",
  "key30": "2ScoUWu432ivFSZ2kVe7RJhX4r4qGAKMs7UwgtAKddBqQksTGQtarUMJvrtWL9sMaFr9rHsSRjJjoxf2iwUUnWbh",
  "key31": "2VYqYnNQ2ECRG2AZGkygRPVJtz8D3KjftHwrQSDkYZS4Q1cU46ZMoAzrGjfNHHRYaxj8y25hje3jraKD1QuRgU5S",
  "key32": "4Ttc4CeMwjWHvV7t5r3UwcTU1YZdsjSRjnmHEUVxaWouNKMJH2jnvEXsrLiRwSJRRqSmiPERKavTVp9gtWY7zRzf",
  "key33": "HTMiMG3dLfjmKKwebBYttcjVgt4K2fcvbEwxtf7CB1UbPaHC2RbKKupXpP7kbih9oqynND2RDDvanePVTYv9NAD",
  "key34": "nnFJVjrWRdj2Dea318ajziKjnWmc5cNjtZVJEXLpAFhuUuDACAbExtsdt6pZVKFbbNjDvUswESazhnTWfBbGYoN",
  "key35": "2skChSkuuhr3R7K8z5fhXT3RjX81sgL4As8VvWMbB3G8PhdnVTypLbXNsdY3yYp4RyFa2EgENZa3RuzJPPUe5LQt",
  "key36": "434PUgjVMdXXtnjFLUiYiVJAMw769rRV7cyyyxUFAVwusY2wY9Acx91mECk4CDiA3DZNGtkYMYKBPgsQxQkf5NQw",
  "key37": "4aTptf6mGnpgnCKccUimqJtcEQvkYFR3E4GMGeQob4MnM6MtUxTqnmWYAbvoZm8W81CSWqUgaZPQfqaHbWkEGuF3",
  "key38": "4sLpjHVXoYfceEYV9tNKsS2aBDCzJHGZ8TUhTBkVeVXYvpPgnKX8fzk1i5ZrF99c2xxraYSCXhWMfS83KVgUGbxw",
  "key39": "2Du4jCPzsJh6D5C62vRH79xv88njVS5DCziL2D64B15RVc65Ce6iQ77JG7rRqy5hazK65j18N8avpK7p8ozXSYWQ"
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
