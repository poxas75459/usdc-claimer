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
    "3Y9aHaFpnUmD4gmHerLsdEgaupftEXLszgHdPTqHM9FBygugT3Xo9QwG5WxXbsuTiZSqZfYYtm51TPYUwZm5t6xY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dR7qq5uNDrnYvTxZgFVFDQDwNt8rUybv1GebJ7KLgB5EJau4qqcQjHhzEfbKLEe1FheJQrzeYHykzkJDQbWtaQy",
  "key1": "2iQBfszCAbEze7HQBBv2sx4DZDijdMfjny43RBx67gg9gNVBHZHfEwLFkYYrd9uXcLk5dV2ud5qjmPXTQDSJTJGH",
  "key2": "5rmJRne8KpzYRUi6qiTny7LDurZVJBpM8PhHWDYQDJ9qGJiMGMLYvfPix1EPJUVNE1njTnCyvQgUnzzfws241tbT",
  "key3": "23maUSS2uwt8JsxqiVfjQMeSeKuE6RRYgbkuezozpmeFPrbqhXwULpFaAyJbMv6qZvrvbwHHv1FC9Unxk1K6Cj3E",
  "key4": "46swzm8HjGtZRVSw4f4dqXeKU7nwVWvbhRvpaZXyKF5cHvk9mjjSbBypGPyyZZEyzPnbxzdu7neD8VRrLF3AUGUY",
  "key5": "xenactWfCopofWgdEf2Pv8DSGFSXq5qtxbYWD1jiU2doN5ovHYBEUSeJ6hmo6CUKqaX4enqXnKaKnHofPFdPcuK",
  "key6": "5pRAaxT9GkTGmx5JWjKexSgxCMiXq4YMXhXwCA5NcbTCreh4cYtAdzdfEHd9EsxG5Ko6uAoCJh5T6uHw6hxHoJwt",
  "key7": "3vepPYnvCGpkB9g2bkFbCAcqy92WNXznyBjUxp9bN9VdGRLxFfNiez7crZkz6r5kHQ7oiBFqocTifV5MYYrbLKye",
  "key8": "34CYQ2wcBC33Ch5bmc3LLQNH91q84s7GKchn8wxJ7xUpjiQqDikkNobwXFktsoLggmC35sFBZJ9uCJ7GDD711RCK",
  "key9": "64cnbEcLdEvvmnFb1RErV1cmTwEK8MCp6X6Fiz6xP16QjB5d4NUcDNpeKzNEJZ2jv4se5v7vhaTX5fUcC93RnkZ8",
  "key10": "5VDf5BHKW4ACpNnG5Ru3ifujdmmSgtVYcTfFQYqdmTG41EKHKxnXk5eZBYeKCkKQBj3K1HD2AdBiCcQ3EJRKNyUF",
  "key11": "5NuyByqygvzyx9xxwX9t5XSj6NhTTAK3eVCEQvhTJnD4MqV8wswYzqmLK2jNfj7aBbEeXMnjnDCjPaqrynSbyUMF",
  "key12": "4Ss5H5EvxU4nyjuQzuJC7EfSiE8szrU6KDhFNht4x9acnmtE3mDrmUXyscxRNBdqBCKtjqMu8c92nkUtAYGnaFRQ",
  "key13": "5Y44Jt8ZmVh8GKdFTqrUjjevx5Qyh6VJhUdDrW68Qxc4Gcmwik1J59uNeLTWZsbL8QQrQyVEEzwyGv5RBw9Yo7Un",
  "key14": "29Rs28pKWDHxcokHTfdjsWpd8tiomPneej3Qj2XC8mQf1nWknq6hv4LU6Cg8LSHjRD6kjpQQAcpQ8am6FoAYFKsG",
  "key15": "5wPeZpTrWANFLToBXpUZD7gNUvtcTPNoQursmGMQgD4nHCSEZhBhZzDLiMY8QNUR19HuLB33WEa49S2aybJMz1kx",
  "key16": "TMdpqGD2Zptx2ZR7pCntNycu4T8LV7hbcirAY4WrRwe3uyZefLi2C5iiHJ54SJ6Wtd3GncUgekUa8uLiGRZAAyV",
  "key17": "3Jjs6GJS9AB4unftn9k4G6G48hDZKPopTXA9MwSV5dEcjQvVaCiYi1Spq8kkEerGRNYaCLzwdSksYrsoBidPgTVh",
  "key18": "5NxSmHSYhgyVPMuPxcgsd29uHFrDLRAFwkPu9fQEuWUi8nQ9y4ckS5XkpupQqQHSBpDDaCNCLabXBSHmmA6jFgyY",
  "key19": "3mWmFHaXe5Y5NLcysNw1VY94LUah1Y87tPieNLVRF6Txc1KazBdK7CWQaKmPGwAiKPXDS95fVBrKi5NrHQkostML",
  "key20": "48yEVGBKHB2GJKUtEKjmsQhQCKRafZ3iviRuuQECAXnMFNwRcX4UJ9gZ4KvgcbvR4GwhVLxUCjyz3dUTxEscpG5z",
  "key21": "5mfYShq5EyDKvdrgwx6PCybJKUHsQaXjq8BBC1vTDhvmfWcJFiz8642zaEN7UXbWWLwtLoMawq2KVjAwNcYitidp",
  "key22": "2caW2Q5XBuvqLWRXQg948dnMt1WwPbwsFg1hG8VEdnk6X5F41N8mdKbdx8nCK5zCSUYLCJcH7mcPcw3PTDHQKDXt",
  "key23": "2buapcEg47pD8nfrMo2WooSdhKjYj1hCKRcj8s4q4Md3dR9Xn2A7x33xFPTuW738thtvLzTvUE147PQn6dcdeiED",
  "key24": "J1iLACDXKR3GjtR7EBAg6yiaCz61Q3dKksv3Wba11nURwYAao271AQ9QgeWzvFcVZEtvTYtQkSRKo3wyRLQY3ma",
  "key25": "4npPv7BmnvYcUTuTDPRjSbHfkAJ4HjdG7WDVsR4FGHqyZaqBrX9hXo7NTVSMJt1qbtvjNTPMQ4e5sWofG76dB34A",
  "key26": "4Vuk5fCu3fwwBQGEccmp1c42rTqhL5kTFkSMnLiV7dxL6ASrj2FbT2sTXazFwEaCrVK2fxNKFp11tUs6cFmzz4eE",
  "key27": "31kMASmCDMB1jnD2Gua3s8udVXu4JrRNp9d3k6u8QLvZtwPXPWPapiYZYLkgnxrxjRqSqA5ER2rnQVQ7pVqqfTcJ",
  "key28": "2CVyxB75BtZoAaBHt1GtN8F7Lq316XT8Y1CfEsoMvF3Cu9rvhqaBTNbNkYxCRA8YDuYjdQJDYT5Vx8GvqFXXoYRu",
  "key29": "5WcbEfjpEWjzyDiQSCLXE9i7thxB7y9aW36C5vvhrczaunupGP8y7n1t37yHgvJ6pATaeCM1CCJncLo4V5TvxNZP",
  "key30": "5YsSFXaCj41xeCZBh2EkkVHTYoLyo5ov9CohMrnfP4epjHGKSMHDVw76LwhvSyR4RsUVeJ57X9Xi1fGaDqPiC2Po",
  "key31": "8Croggjkmyc3w9bTcHgo4fLETopssurZHywFvdZsEq9NZEhrr2rXFNRVaVYrF1VsqabJenGBQR3xyVau6b5XYWx",
  "key32": "51xqBrtDWAWixW9brmpgxqUZ1mYSCZNpj4rbbgV4KgfbrfvPoUvbmoi5oFTJk7Lw6ZntokNpjpRa37kJfL1fKfAL",
  "key33": "WeJR5r7Lj4dyqkyYApu3YUULymda6yGWcQard5Z1ywxmHHZJ8Y9soESP49uoZWhcYTuuwDYFBPFqRxV23L46kJo",
  "key34": "3N7uBaciDrucujZSvtY5rQDNX22RkzsayLWETdnt4ouzxqQdgs7JbJ17h9A9uj6arcWCoNSZYfojM4XUvx4eXcq8",
  "key35": "2c7oqPwHYoBisk8HJ2awM7SZ3zcuUpkzXZezxzxfw7Z18x4mwMoZorHCWnDXavVDMH7MYwWdBcauDryqh8EYn5XC",
  "key36": "5uS95wVMLEsewctCXrhD6fq4v6w7WgeDTiu4cy6qGHvV8SWZXJptnuuC6E85Fje7MhrhZ9QvaSSj76yqzKnm3D8s",
  "key37": "38B8geYY6KeECNNUNdBiLygJCgwBYssP4UAkdRQPVVkWJbYVjSN8DZ3akeom95WFaU9x9gzTL9dxhoZgd3s948fN",
  "key38": "5oTgXZxkSiGhyarBjBSQMGinHAD5v2KVQRCkCagGpj8FAuBxy78jqfA7PHAqy1fev9rJnx1fF13sRuvkyuKj4MiF",
  "key39": "5bkPSvhuvDk5dJYyUsmRiLssLT9rAT66SpaXYkCowaZsRmKuA3Sb213x6Eq22biHxYVBkoctWJqSWLfRpZTPpQ2N",
  "key40": "32bg3g6tsdoh9Gmo5vZCs3NqLTsQVeV7PTu1vT7MGD1sUFfwQWNn9Wbqb9AitwbTnpjVPtDGiAxr2rgwUgZ3bHY8",
  "key41": "3DN1E1GuQ51gY3EdE2F3TBqL3RrYrmQRymGZH2MfjeLHNUCHTpiAjnQqu7w5hoskH4dzaQNmAFKitH32ppnLx66p",
  "key42": "62Bv34ZvyVqT6K6BYaLsucvmSye9RDT8E13F8PA3jzd5dv1LY7XaAGdZ1ZuyxtFFEZgrP4E1gGzDWQ7nFgzj3ANW",
  "key43": "625aAkK1xyzZPL8NK7ZQxrC4vsTPXVGrQunJUcfmek6amdL7zq2FKL7YbwfCEv3d3XTQTvNWr1ujdY33eUFYguAN",
  "key44": "2cwQUf9iSF151tjERXb1DEzynjzQnivmg4edu29JmSHJvmv5am4CkjZSFzTc5J1cfKicWVp5vzC1XzB5663e8Emx",
  "key45": "2U6Kov2WZpbETo6AdND31Gsdi6aLLrXDC28XxxurnHjUXzPVXbNUJ4K7KU2m6QRWv9xXGEefthR7mDpsQRnVUcko",
  "key46": "4WwxzyxzfX9cz5PB1sdZCiKppwax7s7nuSx6tzVAMfMxXuD2CttNp5R6oRryACADGfZoYJJeDB13LTfWHLTV3EZh",
  "key47": "5yBeFY7uoJhSjx8n7sP1hYSMTjbDG45JVjrvAgYQSPqGksYSEn2DFiNsauYvbMCfpjaqC3CMUMQ5f9HnEiWUoNhx"
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
