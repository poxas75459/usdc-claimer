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
    "3Cdf5dRxWUVtWYPiSWp8JkoHxRtSuUej4vJCM8wVgw9eMHUWmc99R7Q4rDKqdDgmUipLXkzo2TZjwj8QwQc785jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHZ89KgFARDeQmwzdhHJuYcYJ8Vxy2wkkaAZYknm7EDQzygFgAX3FSccF2GN1CLTZETVsprcXc47mKH28WVHF8u",
  "key1": "2QWekh3dmt7po4fRKc59QEF4FLjM5nDKfaaqiNB7PcQtAsDoH4yorGU7Y9xjDfL8w9kjLaVJ6rHMbLCFcxNd9P27",
  "key2": "EuP13CuuV8esbRSo3MqHH2KHVYeE4K3c7az1ioMZ2AQMdrAPy9xUKD6ouYroTTnfGTE68Q3Rq1wdLgMqnUEb2qw",
  "key3": "2XpgQC5PFXjAGdMVHzxPtY2ajmeFrU9JeMnST3TCJrfQ213e3cGhqvFrZPZgea4WRv392SJjfBBD5R3U81p3sEQ9",
  "key4": "5igZgUfHgpUc9GGJDwk1UYmKzUKu3gJ8CQgVEJe6nJM7d5qWKF8ZpFeijg8ModhY8mJC1wrhjsefW1FA89g1yJ7X",
  "key5": "2u6ZiWCQaVYAgYR7XSBa9TkYgQ5YYsUYEDqrbPpKGQf2JyCMhDNu1nzeTa52JG5aJhRwdRPrs6Dx7B9D5vExuML3",
  "key6": "4h6a4Wkajo5zQAqKVg7ZxhStbHGVj24uoRdjhZU4Rpui84FDCRTMj5f1oQN3Znkj9ysjW1urK39NCq22MiBwSSQq",
  "key7": "2d45zMwvUwGnQLkTjPLKvpCyxwUzhGt5UUJR2ybFf93sV31YYutU4887F8VgBpVUDzuk6c4UzxoojAepU3HredoP",
  "key8": "5fw3nLjBQMBvnuVF2X5mk2QG8tPY3yH6Cu3cSnHpYmnXFNKBryLUMzHJKhcdCeva8uBDvtKr6T8FuSZSxqAjhU1c",
  "key9": "Do5RRjn8nb5AZJVXsNkrfx4hDnG1L6yGEsMH55sZkpTgVxv8JVukfhSF62pG2o8YKeLVLYETPmqEauSQkRe3ZSE",
  "key10": "3TEbGw9nx1Z3YVucdzTq4ZmZg4aZgdjSepLQz98KXLJuo3exqDgyYrb3rGo48qn1nYPxGwdzUe8XN3bPJHTbut2s",
  "key11": "3yUruuXpTMyRGtXjJf6HfQhUznsm2uov3LjLb5fbFF3wjkS4nKdMSWBAvKDu1xJSKWrbFvm7UKrYomPyXPpPviw2",
  "key12": "4AcqHV2JyaHkAJWJXq8dmY3vUZGYBsuh3C63z1VhhMbhMVtuGmAi6FuLH39Qz3tTyXRhVvw5hjpqw1qDP6iYAmbt",
  "key13": "2pvC5SxvzksiAFFji73dG8ZkYSD1jW77NCzyERnrDU25vRo9twbwpEkjZVPZ9wLQFx9Bg3Dcf9hnRdiRtU66mP8E",
  "key14": "64gsTKSbGLBRk8NbsnX2BAF7TqRxhXxqvAtjTGe97Kioz8EFL8TtmKmKMUQqtEQB1iqvWKLUbqvkTRepjnE9bh6p",
  "key15": "3EjUJeYHx6cuCdML4DEzvk1zt8SXLD21zvVpWsYHh4hjjFCSWBkV9pdsfiHT5MeipVZgu8h8HnGe4SasuLEZSr9W",
  "key16": "4ypgNbAL4u6N3XAU7QrTf8fFQCfsHuB1jZnVoMapMwcRLgqwwyRpSwTSJKMHHyR7C2mbTvsdrTJxRzj9msUx7k8x",
  "key17": "4snAgBUAz7nD66mzESNm99HKLkZpsDo14CyZ613Sfk3vhuiJyfCBVRrcQYMPLxs7p1Jmte9abamQ6oi3MXoDc7Ud",
  "key18": "5cxp84yf4DJxyUfq8d5v3jQkVHjUaC3zNPFw5JLYzfXWZuQwMfVJ1Xkc8bUtvDx3zH1pnzuU5XUMUbJyCrHbNCTT",
  "key19": "2HreLRXaU6iJFudQ1t5ALWBkGzuwvhzSTSpxWmLc8BDMCwksMRnVvtogp2xX7BGwByJ6uH3MMmG2z6WeQ74w2Xxy",
  "key20": "34TCzTqJzzqbpL2zrd36BJ9WiCy13x7DdTcsUo7qAmqheEVyJbJT3RASAwNsF8EAJrMSkoerupHyYtAYSMbWm9Xv",
  "key21": "4vMXPVkR1qUBS1cm5EoenYdALd19pwgyEzzRTuzMJqoqL2f9yWFh9jcwtUFCMuz425YaU6vRyWFo9nNSDxDizShd",
  "key22": "3WFpfc9icohgZonw3daG9pwJqrkUCafrBHvzXNeUTKte5zeJYxRcNc93Lo89VRKZNk9G8avr5WyFDcfiP6FGJhxC",
  "key23": "3T4Xg5ePQkWZP1uk8FyxVFGqvqp7s6CET83c3HomUvtDYKtzjyPdaZXNWv2BavcWhD8Aw8iy5jGTaYH8kcGBRkYt",
  "key24": "4qmEG1WDMyv4u3JGXdPg29ATSPHYVuPfknA1iignqBKewnLqzktp1yF87ZRLtEeob42uu1sVQMWop3yDbrspMQaE",
  "key25": "xj9p3P5FSH1ohSVXomBmmd5CWVi3uwDdf5c33JBQKiERUMkVSPB9LqkZDNL9sBaMEn1DKjbkF5SqYMTfjYpVZcC",
  "key26": "2HuVohUD9qyBwPpw47V4tEBJTdSymLLknquXQyCivs1yqaDWc6D25K2rXrNoo5MTv7R5qiKU1eoa5pQmR7HL9MJB",
  "key27": "32SXXWzCoZd9pbs4xbjtNXS7GgNWVijBkcw4BFukt1CHZPfMQRo5R1rFnNMpeNWwjuhrjRoRHg1ZKrXc1Yw58Un6",
  "key28": "3DeNTVo9gvP6JADBJVzAEUCpTJzTo2Ln81RZns2RNAat2UiopDiiS8QKMEw7shuKHq55cHS4XpP2npfUQ2m2vfYs",
  "key29": "57zv2g6upVF2kAixbF6nduJjfDsbbPMWPMpQjAjCvyM542ABhESawzViptSsRFKGQyJwfKuiYwwKVJeezeEqUbjM",
  "key30": "3PXyQHx9yqWPFfqZb6RLi4vdvb6owTyNqBsCnTqUMEDpN8vjnUzR3xV2ojUiFwRJQhKPaCkzhDbaXzrp5X5D5Scw",
  "key31": "5sDsdoPPbGidhE1k9c5NWG7pP23rbw2L4vhfhiVSmvmhoVpxFxvnjZLZohmtE73znuwL7mgTYu6HZB5BJEAUmtNQ",
  "key32": "64BWuNzUd7wGhRxGhJxnQLKKbz9rUQHPf28Y4Y5N6Mxz5z3GTo9EKFDcdffwZnVshnB996cBCUJ4TkL85RSRi2LH",
  "key33": "RvkvSnuWyt9DZqSLwjvsvzcTZmcBcoQQ6ozcRzcVHcYNrbvXm6t4NUP6HJGfrahEYLKQE61pcCVAV5uCcbC4QoM",
  "key34": "2tQNcMNbmrfkFBWxBtZgmyLDchyg9M2iAAohCGGX1aGhMAb6gkJJN4fVKraJmFREW46XkkznhZ9XSXGyPK8FBGip",
  "key35": "4QLcRvgzB8xD1q42DZDFjtEmkKXrPsTyNWNv5a8JYf8RgNBMKxHxVs3k6e38coRgKSzcfu9NHwJA3ies5BaTABpA",
  "key36": "EvD12Z4UqzuaHUSXdVKCQjszekPd1VtQ6emLMcCkNZwJMQkSgdsHnEBn28xz2daufnMCm1xAcFY1qSNUTzjjFxN",
  "key37": "3qgUaCTgcLV16BRTTXbANTYTyyMNFBedBxBEij9HcGFJdbk6Wtx2fgZ4QbdD7xGQsz6NAk9Y8r6JVwMhi9mcjhzG",
  "key38": "3kYnMuy94cYy3j89wHSZq2AVvcgvjfYobzLX5UcpeRpMv1EyBdu8Shdw16yrd8spiDYezYzPJsjjvgnsWnEe4Lcy",
  "key39": "2FaJaA3CXsKf2zpetwk3363bzLKCS4eAC13hrr8yKHUhQdjQi9uG3B7ugMvgvz5BRtqAAPKgP3EYrXNVmQ6jM7qd",
  "key40": "eUEw7K6dUUg9Whki5JGwbPRqgr15L2kmmfCKz35F7HL2H4Uj6mYtEiM6xVJDQFXxgDzL9hD2cRZZogStgPDWfyG",
  "key41": "fPnKLZj4E164vNvBLSDBZYnqX1cWrA13bczfghKFJKpA959qdHSa1H4w4ZXKX187Bedfzc1MZ6oY2fsSgnTqKg3"
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
