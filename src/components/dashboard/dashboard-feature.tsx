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
    "5PzV4dFn6iKNLJiW5vaBNdY4J31x8Ps5Tf9vji16cyQV5hqJLwxJBzFbfon2ZFbKTqA3icQ9kPvaudARyT2JTgKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gX4eTGBzMPJNNpAmujv43eaKg9Cit8GZqNBAn7BUXvGHQYhPBCVRquhmtNdk7sUt5F6esAEVQC73B6yqMMzuQec",
  "key1": "5jrQHo1ixG9ZrcdKmuSHSrBa8fg5v1vpEFymvWPiUQ35i61P2YQywA5DEPm4jfP3ZFxYQ5eFADc4DJeBryzKazJ5",
  "key2": "EdkYc7MWGsfL3AD5r91w4HYqtDmyNepyhwNfkiYM3bG92NcPvBDk2ysE52FNkifYveuUAUCZKaNsfsktaTByX1M",
  "key3": "56t4MTZ9PRc3RAN2d8Cy2a4ZaJ5VgoagB5MK8eAqeKjyoJpJU6f9VjhHpLGvuERVhvE3avWdWuRcDuqXuzN3jiez",
  "key4": "3tNggRGKpWm4w2c42K4sHGt1V8YDKH9DmcLGSkeir9FyDerSMP2tpVnJCEuC8XmDzMvsCt242xaW6wvRdGQ9fTMP",
  "key5": "3brWSJXXw2qKCASmM9PmqysnWEXiBc49jH7UrjsScvYCjFxTwaE3pQSiXqiMGJJzkjbh3ywpDK1z4tjzp6w73LAS",
  "key6": "2XM91k9FTegrGtRDRNMXQ3tKFXoDZPzapWsCsHF6mpdj9SF88JRHUeT6owNb4MrSYuDuohALkUvLxmRXtU8BQ53s",
  "key7": "2ocQwy2esv34rY86E5eX26446jVva8RmXh4whUHAty3cLTk3tLAgAuSLDNatwbkCd4pcFRUf8aKmCpbMjBMkDu6D",
  "key8": "5VkwdRKR2vBY6V2M7pFGW7D61YWBJDFLB2Q93DQTjvTgnipdTCuSMkojFUNwqNm7JQ9fcvQAj28ays5Nby37sVmE",
  "key9": "4zN8bBWe1FYfj6qkGFwakKqZwz5E2SPzT6SgYn7hfk6sApQ5JJVMnRitAHiJezH3MaRvVWgmAYoKNvAc8TuURLSD",
  "key10": "2oxfFkzPEz8dfJgQSdgsEQie2dRRNcHVpnjZWMcV6LR44HVcj5F7tgrt2PkrMhG9Ek2Jcj5CXXaLTTZXoASPXnuS",
  "key11": "5QAxUWCNWBXim3bRhLVSpECFKpU5JePwcTrXmzGJDGkRvQ97cf3LyjpvmhSEBBPptFqwJgceqJK3L68LzgcgqpmU",
  "key12": "2r771cdqwWvVWftMALJJe2KV9KA9xctxByzGRqZ8J9x1UEtU3cgXcMt62tHB1R9eohrNY7vr4oKU9nZ1qjLatve6",
  "key13": "L8hKq4gs8xDtdgBFmb5o9VeTKWtomLXcyfDue3PdyQmJnwVEKS6wyCxwoaNDNQKsywcoCCTWFUwYJheavmmQDF2",
  "key14": "61buDkWcLv7gkibavAy94u54EmLZzxr8ZUVJcxg7aL4Bbx6v94YVNkASFvtN4CiPdjoCpgvazGXnryzugWKgXoXA",
  "key15": "5dhVHmAF6kWx6fGy67ocLhWEvEXaNfKzWLMwA9gcq8BEYYXsMpcZF8LVzWc4BwuKXJ1MjTTK8chpMBM46GJYmaib",
  "key16": "26uu6Sa3rrLvkDpgy53rqRxKqdvcf6xpuzdnopVqroYwmYavr7VbuVQwNqCaGYg4bWsi3668LiUtd7V7AyKLDp2Y",
  "key17": "2VgMnSBXNU11HMJDKF4VS3yr98LUdyHEiDTtFDXjbJ6W7CdZK6kGB8jxfct1CYbBxpugYnHPbtbA4k5aadL6LxZB",
  "key18": "2cGS1TBk5zGicfGGMyE6EqxuEhTiLUrHEMMBUMEe285DCx2M7ZosNicoKLqB84wyw3ffXGqYYZLkSr6DMa9ySaM9",
  "key19": "5DvgdFSXBfehSmV9eq92Ewsh4ewwRWhYW57cPg6Ax3kvt9nohdgbzfqvQ1DcEUAt6t4wy4PbEazmJpaoKTErjB4K",
  "key20": "bKAFp7SPL6NGPq7zJsH3V6y7PshTtKvnetFtXLmZeLd97hfA7gcCT37poCvU6aj3YCWyMc4etpR1uwbTH1rzx7G",
  "key21": "4XghQQAdu1gZzp7k6GkdKZCH25qarFX2hMbQHQs2uRuXxfPQ5LCQgFDFzu5Hk9fWkv9A3jtWt8Y9oweUQLBW4to8",
  "key22": "3arirZMgZJvmmSvCSLBqs4YfysuXcWN2YpidEW4yVfaPE3CLmENrnniCKJGkNxWiT5E2wMsGYoTRKdZH8SNRg7zT",
  "key23": "2JHA8vPakMNjTCdpjpLYHDct4F6S21kBMNdwhdJFB1fR5rdQR79j9NUuU6pCUSdAqX1rD5FMTYeTZaFKD23ZATDd",
  "key24": "GYnD4MPXpvxXvY3s6GkNzsPkXXgtYhBiaSwtCrEnFUCH9y6GB5oUU4xNq6ykZzaGEcb1MxzVtQhD8u3gWqHr8uR",
  "key25": "LQK4GfN7YSykTeE3J6af55DGJsrBJcpuj9KSJrMyGum8TmifCD8WstvjG3qRWdyr34KAYU13yBLK8zWizGQqaCQ",
  "key26": "3vBKY7Bb5CvGgvUDyqz39srBy2HsXxsMaazeYhRsXcVw7c2VgfGVt75CNS4mUrLDXgrm2P8mwpAe6uvQ6ngQ4wdB"
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
