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
    "4k22o4G1FAvUku716rLW9A3RQntYpHNjmL3avQYKT98Qu3Zc6yiQJV7hga96Nnt3nsJF3wLLFDHBBG3ENGxJihYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZK5U4zqmg2CjJw6rzfGEm73cXzs19oCrHMiqAtR9irJa5avhaFtMjA4bE8X5hpQuT1zXK7Lo5sq7MDwvqx7gsh",
  "key1": "5CvXXHkqwupxZjNArpmEgZn1M9BdeJCgFgpsoPjffNbSf38VXa2ZqXfb1ycWveZ17BFAb3bBSryHifgFrMiNSE7v",
  "key2": "4xNQqM4rPLB5HkZdoJZYH1Us21m9WaADjXsZNdnUn1XHwXDFhrw1gAFnHY1kHqzp6HNDKVjhW6iK7zwqWgdiJWtb",
  "key3": "52BSnP3QVXg62XftRHtPfadb4Sy6zP8PRkyD43d1w5pi8JaFto5FYoJQmgRKcixBqQc2gP1u23aTe4D9V71xmpjT",
  "key4": "aJncXzir5Pokhf5xA7EL6bbnQQjcgBKtw4wA3qiVqCQpAYfDfKWfdWrvrKA9ALbYzRToGW8nYY2wLbw6NUWyMJE",
  "key5": "2B68ZFwBayzbms6QLTcDCQKX6dYtcYaTLNWk3LMHcnuUcahYBUE4ffTmQ4TTzwQifza5nQFMUE5XQtFehwHnSMSu",
  "key6": "2oqb9nftE4LLcMc5bj6JAPjS55Ga1X1YDemYCw7TTvJGKsvW2G5XkjL7vfPT5SvQqHQtjQrbZ8waLMTsRafwqkCa",
  "key7": "346ZUNpNonKaHQrWasHAZz5Y2wCPxiQVaa1UDShgWxc9Ja3ZW9ywDBYZiWSzGMHpck8BvTfXLNSc9uaF551n7PUw",
  "key8": "3NLviyeAYQedMCtaoJMmDN3FQ9zcR3Yc6gtSzD4tNKxgdEBvH6gmTshudK7x7Y6xUkpyL7pAQnfDxnWEmyrG1FwQ",
  "key9": "14NmXj4udgWrpMdKkAUKKmz5VssjX7AzgGVDspnbJj3iXJ1BzPRetHx1vjLXzKbHzaaU4q7b1hxq5L1sRn7Q4Sr",
  "key10": "KysTGzkPjaUtuXNHaGG5TiwYVEUoUVXnGaBuLjNKGW4HEPUTNgoQw2nBL3m8QBqyehcwpB67ztAsJ5qBrHJWwhg",
  "key11": "5evNQFc5awcwVh4ksDTzZeBTPctKLzpgrp9hxVzx9AW2U2nqnKvtNP5cc1YMZVYCDcgNADdbw9tbiALN9cFxwQGQ",
  "key12": "4gBHb1ApqJmvgEtux66S7RW4ZtKdTMGBtXGEq7MTpzQjcCtXrPpc5ditcJfT85rJUMaXDt1HXXPmdqBuzgjKPenx",
  "key13": "iVKtLUBDrpGmkz9rY1asjPkdA9hKLVM1SL6CjEoEMfTRZqVzaysHkhkD4PWNGaPbMSpP9YP94YnJKmjJybRSaoz",
  "key14": "biPkTH6JFrxQAK6zMVtvAe4Vq4oFos6uQU8guuHGVP3CrJ4tKgNUoWPJKL53yEEorqr326q23DGUpMcsiWVpHRu",
  "key15": "dyHGnVYBbibxxShK4SxdqswE85qfYxii8qsZKJNJsBBrJkjbDwYtSNv3n1sQQAQWS3CvgmLSMZgapz6qHsw7snm",
  "key16": "337JnTYu1PftTY8VXNoYP8ENqUeKbtzJMi4LEAjH35oQZPZuiW8vnDuxVJDH427Gczd53JT2D1Tav2he8V4fVzbD",
  "key17": "cFJsBYKccZ3pB1coiakGAUkE4Sj5TQh8g3PdypPzGNZ5AVDqisNTJCTArDWuy1ZGFEPFsSBoiU2XTVJzzNqUjaf",
  "key18": "4Co25Ycq9f5VLcoWfVEHitYKjRQTje1r1unpjGo6sUcKAh69KSWK4MeMG6JLVVK8PTHecoBWNhtCKDo8RaN2kTQm",
  "key19": "3dfC37oCj6uBhKdo6FFYSdWSjdigpVHyJj5KnHVFfBs9SmhEgYFeshpNU9kQBqqmL81791ZHiZeEuTtJKxroSAm7",
  "key20": "4Vifi5fpaqp4YHHdwpq9VizoBEv1iihQ8uPWRa6ivWzddr6TxNsbzEB9jHPBYpaXHdMUG7aAMV7E74DdMyEfu8ti",
  "key21": "4qSqsoi3n21VRfxPaps7q2mYyE234Kb1QZCBeDv1CKC5H4kk6bQru1EHPiPPEpiW3F93Suj2KPmnGMfE4yucT3XQ",
  "key22": "2p7ud2y9bukjDy6cZyc4ExMgPjpHh488Vq3bXkN7LBbqfnnfANLQ2zSXFregwbewzNmqTPbi9k4DQMzXZ8tT3mCP",
  "key23": "36HUEqEVGdWXcG8UYf7zajLLb2oJesL4LVXFz56QoTB8BDv8mz4LbgGPLYjN9Dq3j8acwVk4QfSUYeYiqnktVGcj",
  "key24": "57UgTF5HtEPQ1uAErKHdPYXr2D5wtX4GLhuBTL2GCV8S5UJFinZeCmhB9aaFVkoePVoCMsxbDCATG3YCDV7KK7u4",
  "key25": "3bCv3B3LzAJ2Yewks8L9vcZn2mnvaD6yPVFAhQCxG4yEj9UkvYTBn2u63YkMYtkZqBSTZJpNhJ4juEiUi2DJiNya",
  "key26": "3NvT1ZbuoqSmdGsNC4JLvpHzEj7azMP1YX2SqdTTuRTjY6XXjLCsMEtqAVgRF5QCMat6F5yQKdQtErKtnAf9WHvd",
  "key27": "EgygZc4SCUHz7ynxJRJY9CPeApRjK721ZEyFUiFq5fb6DnUYeUMmXnJBpmgrZpbReuabRLWgWdW4RSc5BNrkKxb",
  "key28": "CNgxJ66a3Vtf7NdYvihExXDvXPTkGgx1DLandibJQ4EDFxZYSMEPS7rWMoZiD2aykUN395CPVjA3BUPfxcrc22u",
  "key29": "2LZkeZQK9bnGuHuZHw3vsuYAxNBxSAwTNTuhJbhh8nFPs4Zr4WTA1B1AQsFuCNhkfLpCav9sQNJyD4rCkv5JC5nH",
  "key30": "3GRsLmVkxj7xFhydVJHq1AUuyTVYkqEoALuNTd7g74sBjRqBiZr6Pfa4GiaxZESh91RXdgs4kSBpirAmugeFmFkW",
  "key31": "5B7cucS2sMx63BQ3h3i6L5v1s9t8JicCjFj3kcyGMbNSghPZh7jLHb4pi1Y77bWsRmpuPFRaVUZcYZcGWk5Rs28d",
  "key32": "5qbSd4YA13TV9dgEGMH47NnhBx7fKQfrAhDHrbaeba2fTxZdnFE1V1pMPzC29Tb3Zo9oozwY5GALYKYNU9K6psk8",
  "key33": "5e9mmifj6y8z3v5WfGP1FixEmyK3xv3PTBsRp8CeJxNyKNN9Za9UScdCYzKkQfeKoZ3pxnEJE3JuEgknKAadZfLX",
  "key34": "3VASzsejbVNgEEcxCwwrgT4ZfF8z275Xtq4dfoPNnYCD5WfBGgU9GHvBKAe1d1ZAgcgkKc4bo6mUBkqVXvHnKxqw",
  "key35": "27vcDimq7ZcQcft2qaK5G87ctNnqhdn2WZybYr6XknD5UUR3L9KAAowjPe6fq54vYSvbASnsDKgx5Zv7GtDskpJw",
  "key36": "2qk8BhTyNSywtBAuhtPyHh1h9EZHAnm3UcqqRXuj81RgKEMNNXC5uBiBH3UfTFTw4ixrJScBwYzZ9HvbNZwztBjj"
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
