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
    "5EaT1wGvHHpSoNYTb587WyE3qw5EBmDxNKGK7zoLerEgdrzXecrxwdUXMCUANUdzQi5hvUJNgAdx9UzT9Wa1gPXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBhnDMi1Ng46E9ttuVhu2n3GAvFE2CfK6PNvbC1xMqAAca1q7AKo1MrgX5nzxKYc1eLuJqoq3y9sHSjswBfirZQ",
  "key1": "5xQM6fUJJY899ckTCdCd5cyHbrx6s47EPAF9PWG5LS8Jby7sb6N4BP8iRjNPasA7dUHij9ioEBAVfkSF77LguFcg",
  "key2": "2kspgcZkrZ5vxrGo9kaTgFYEhbm3irgJYKD2ZEfxeE5iU2T7f9sVHk4kmysosFbBiUnC33wKKWkeKsjqdkZXMwBi",
  "key3": "4eHXVVbEHqcQDxTYwgvLffqxXZUP5TzU8HsEXe9bTgcpP7eVxkGwkaMxVphbJcy8QbZS36YsqVQmCVLsioPgJ1du",
  "key4": "LQ9aeyz9ek2g6U8um6caCoeeYXRSyyUTkwmnkgHaBd7vth291EoqcGkw5JtVLiaujCGjun6t4XVdjfYZyfWWS8L",
  "key5": "5Y5V4UNZBtGHpH2RwGgmcMNdGMDyQQRB5o96nfLv1ru9k5WNWsTuJQjEp4mhd7KjwQcPwVtLLx6nCZZdHpN2HWrp",
  "key6": "5C9vX7AefUwCczSadtPzF9be8znnmxTPJN9Vp3XqMczEaCbZFNaALK4LviDCUdgWbZkZYTxCSXsHPQcQ9itvHooc",
  "key7": "38buShWeG3zYMaDy8oEZY3QA6THDWgxHQLsc8qP3rHwoCyHw3M7RgKxbDtArPhfXaw6WZvuxbRtuaLMoCRJC7oDm",
  "key8": "32ZMrFwfheCKRNakCtaxQ4DUBAxaTdtCKwDyrj1TZBed9n7iskgyy3J5Vdz2hUUVHzPNYNoseEf1wDJYPx4BadFY",
  "key9": "4kecCRCTinTJsWxJPgp5sn8i2V8qXMgc4CxNjb9nyfFHGrV1k6J2zmVJjp7DaazYBEqzM7peoibRqotR5D1T9Pq",
  "key10": "5iApDyYEhfCbqMuQA9ZGyLZeytk9Q7TGquzqKPWVUDJqhJaMK6in3H9HHA7Nwjxz8TtHLkSgmYnzUUkFRfupn3uv",
  "key11": "2H24JA3i5333sbXva15mYbs5ikto3JHnVMintn5x6JNPjppyorjpcHswZmkSFxo8bYkFYzrMUQWhsTkNMkWN8Jy",
  "key12": "5ChNtDDS4DrJJxBEb9bCGu5bt8eR5Tt4rSoSAkq36B4uQksQ5GkkX63XFaKdmwcSopLEeVJLaPiGQX8QGJLfdt9M",
  "key13": "4aNtoCkgYkYrsrhwtuyK6i14TWTKbiaX6WgLnR2hqKZ8MQiqXCpCD9AD8BSzmYY5M5uTtNBAwhVYsEp4rZoy1ndA",
  "key14": "2HWj5FvwDt9uTFK7zLqaSiNqFbdY3kpQiSc33dxbrg833UCKqJWdrj8qCK9ebbRXoHsycW2oFUPviqtDw6YGg47i",
  "key15": "2eJuu92EPoGvTtGQH5t3rFvQkbXUQsvVMLhQqauJyQxGRB8coZY5Fs5vKjKwkfWYqGQxBpdpjgwkoySQYuQCwFj",
  "key16": "5a6SY1S5F9crSKskteFTRGGPPr88bgU1usA5gzBcJtMD8YT5rf9PkHJtyY8qsv9CYum5p4fNyGsfYhD25qDKe6sv",
  "key17": "ee56E1eWELA5dCq4xtiVHBXL4NPjmKH1FZouJzsKbKYbynbocpTtQUCYW2qs1iYJktFehVZXwr2ddn8PkhSLv8Y",
  "key18": "5i5ZnJfVi4PU7b7cupWzb4cjhFJNmtiq7tXzgo7Ss8DG6xUDmxXSCyxjdnyQsfMPibpMTs14pnzDLGy33tRJTuqB",
  "key19": "3Udd9dLUZ6oA64TMzTELpUN5QqeVQ6njXsykxTVLGjGGtSwDTzF9ACRxWp5J7XWx7UYbhNQsYfcttoJx5rL5WCu1",
  "key20": "mMD77K9nPqkjfn2XLzqUgBaMMCB9G3vkTuZXSqXuPNxBiydfJRCkE33i3RN4eH5N7zo9aznfZD43wB3cXm4GfSN",
  "key21": "35Q7tUV87u6P9YaL5UjtjRwFm4NpvEk48GzCMU98SGtL5YhQzWXmizgA5cScMnCPs47JfRwTVT364HNnhZWNvyVU",
  "key22": "4WPXpPabHgtH3JxnSiRa2pHAvMHrkFr45z4zZ5XHpkkp9nv2X2LdrVQQJFwv5ESoanWBEPo2m1kiknyaeKJp7zR4",
  "key23": "2HawcH1mDySYgStYEpvw8uYNcHpsWpV2vGdvopTcddzhr3JPtkf9eZvN5BPuFCW1GQn5HoNuWeKXYRHbWk6ERnQr",
  "key24": "4j1LXVukeczXAVraDfxBooTy1RPFc5PfjX5G8ViVFB5mrUEFfx2N2doYPEgyxeDo7QRkyRt5qD97G3nFmfRyB64F",
  "key25": "4QjHZ6vG7SaXRybbVRq2zdxAtsaRss4YHCNCWr6pcA2ASLVbFGceGR7CZ2EF8cdDH7vr4AF9SFLuMyXcbBTV3P4T",
  "key26": "5oSazHARb24CC899d5YwEVQ49rD2ivf8xg1r5NghJkC7aUhjaXo7jBx4pbBaEx5X9ner3aeC5BSPoe3UXaibyNbK",
  "key27": "2fpp4wTgqfP42dwNwttKiPvmCYVVgA4vxnXcxZ9SNUhHY1QxvYjgEoq4b6SYHPVCKK6StH8cdoZP2vG95Nofiijk",
  "key28": "3wSdXp5Cd34DSrrApQfZ3iGtfqMXYzbLZR8fydCjP5WDcjpNmdsJzQwkzWyyEXK7H3oXf5P7MDmwkx8dBEFKsqFw",
  "key29": "2p5y4P2y9xArbtdSS5qBrw8ZD3akC5pbm8kduZdFKv3ektX2JD6PxxhWSwxs8sy6KxfPmjB3FrRGwYKg9eouTzmq"
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
