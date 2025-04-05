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
    "3754GVsYJdqNtDfi15BNvHKxn4U3nSfa4Xs11j6UXkSgCHZBSjGYAwHqKfoW8Vaem17cxpWuc2T2gKTr7Lo3mDyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVv28RRdKnetqaH3Th1KJxfs5vNhbJz74tRW3Y1VkqCg17GfLUMjyoEzHA1JQc1zVv6BCb1HifkZTFy6kHNk2Cf",
  "key1": "F2Yq8KHnGUxnrZVRbd35MSSkyjLgMnxNSv7DgxQ2nyG9c28BWrp7TvEtNnQQuCXvU58pm7wfXkh16KFXZZh9awY",
  "key2": "381onW3HJAK7mYdBqbfrwjDtEaNdtaizdD3dZAjdpQt1udzvWgVqeNAgAvZ2ufWYnYb8ZhQufH5H1MSK9cAMHok9",
  "key3": "4JBFHSTuMqdYBUELjbc6rvtRep3Nehv5BZM9dcd85HHFfCVQUNYGoFH2kwMRRYKJTaaKjyKdMWaTQKnF3X6hrWoq",
  "key4": "3v1Db6im7zNJ174B7V4GXqjUqyFysMQghZMeP8da7xST61DMK5CAK3qvSjgM72jVQkZPoVeMv1aYgNDaNLNBhqbH",
  "key5": "5KBWDxDt5VYNXvAz3Mmm9r68yMPTcaTiiT2PzkHCuxLQ3Ei1Yf6uojwrzvD9r6MEy3JtXot4WLQvmpM5wEWGwCqq",
  "key6": "226QAv69M6W6ZUSjUCpFXvsJie9cNz8AtSnWhU2DQy2Fsn2hLSokLWVPT7iibRrh6n9VpqyfdFnoUegbYn5DqF7d",
  "key7": "RqosX5NU8UFdDRfcnew7EcLn4EqgrWfLdWpZ2uduG3SD8Gf9hcyqP9mqHvxKmuH5QFLo3ecQ5invjmcXJX5eRYN",
  "key8": "3ATeunDbK3ZjzmnXrFDNGa5DMv8uPjGXfL2UGUXjNheThBw33U6qwvS5wWPMnRtvXNUEkAETviuLtKUtMeLaqhTp",
  "key9": "4pkprYkDuRZgTKLN8qo2AvSoqCCCujq4kvTryvFvuDThWFS8bEhkL5uzCisSXjGERFdFYKaTYg5CDWK3W9tH3jS3",
  "key10": "47t6SCrgakGHJS2bZNCByh3zUwMvjfA4xfEAX5HLxhJWaF1R2DpCaRJNArG2zBBasot4Hi8DMg379phCMc56rGvU",
  "key11": "5thQwmbHFXYApJACTFytC7vDnMFvapLVsGsiZGdMSoGbey7RXpvQjyKa5kr9ggg5tDDiAcGCqBkLfiHj5frnnNgy",
  "key12": "2VSifLtV6rA4R4dt4nwD7BZy5BxvDMmrhy1k8yqp7T1nNtg3ZRuEyG5tiVyUoMSPf7YmUK3BcbDpke4hpbRAT7ov",
  "key13": "AZ3gxvaGZc3wv6hw8mzxRnXQ5sYNRKHFsAGHiwRiPbaD6huEYX3XwiyeoD1fJQJCCr8BP6VnhaPbzXU3Jdazcsp",
  "key14": "5Ldf57KxDAJtQR3hX1ULSWAGC2G1iYuLdNBF6a1mvJTRLpgMdNfhF2SebfK9Y13TWJERRf3NrfnMiiVkQ7DkbkdX",
  "key15": "5hSJ1adgas1AhB5is6rEBKfEqe2o3J9e5ERzUgxUT4HqJkeWnFYvrD1YyVWexQWnL7cpmNRuMUtMfef8tmxKB2tp",
  "key16": "2RBYapGjUv2g68RT9kJUgBC9Km8nyaeEDJnkchxAd8dEsRXu3u66jkbd5gDFH7WBDL358bBxa2BTuWkdC9PJphBw",
  "key17": "4Lei3GuwFYmJeE8YezNRGinVeW5PjqXZmXtarEWeJRmqVzq2zCNKkVS7TUvk5PaWzcwyQyEQZG5aAifFuzEaQyDB",
  "key18": "Tj7kqsmt5q4XbnJYhvdw4gSKMk6WQyckMZhsNB5SPUdExuj2PeCKwJbxPujKB4JWY8acVMdDR9jaEkGZkTgs8bo",
  "key19": "4ebR5WGbPKCQJUwYUKYYYkyePxK2vPJqeFnPxzmunjxXKoifDf6kdy1V7Ba6BPHkzFCwPfcY7ufbzUY7mZSjzDRw",
  "key20": "4gxUKjwSDKpSHQEb6YRiadjpaiyvcNgYeHnk5qUXv72rwWY8B5phXXSMg1WGaVYqK6oy6XmJwi5afN4mmP9oAp2V",
  "key21": "5ccX1gCFZ3PaPMpASdf4Q17EEFzX4Cy1RnhbbTPPaQLH5Sh3AQTiYwMWqAVxXwrib1Rszn2XKvGBAm9cxe8FcXL",
  "key22": "62S6qv76HpvaU4QPByjwZ4DhoC1k8zUYnvviCmYZvNPNyXmRjY12ZZ5hiby1aet915ieGLGZNMUAh7og8RG654DA",
  "key23": "24mEhuau9N8GEVUPq4iA327VQWPU79bp4KQwtvUcXoopJ65xCmPGiUXmPHks5Wr7CjmWLhwDnxpazqLzwAkwhCTC",
  "key24": "4skXg64VM3SuuR9xxg7m9egPBuQQCGCHM4wzgNayNGpeCMXTAsZzEsdCWNswkRDA1i5J4vnnu476AesPsHs992Bx",
  "key25": "4N2aKYs1S12eEZK2i9CK3VBbGMQvYYuJprrFf7ouaaf7hiq6Fjc7UjnKknsS1U12VSBPAs1bD77FcYPDquevbMT7",
  "key26": "4rdJwQBGWLLVyzefWETHFneZ1k68oSEZP26JA1FPfW2uZGefWwNxMnHj6bvREDAMbB7H77yoDjvpVF2cu1WV2cEv",
  "key27": "4QUKEV66zT6aZ5QV1jopxTX75mwHpSUmPU5Rm2G5ASMgZfXVojfpFvtNuUubPTqbwqy5xsyMUPtbdbnUARyeASiJ",
  "key28": "5vbwsNZwFhwWmkbBjoyKGhTxP1LqpVGf9oCrvj73pmvjrCgeUfa1Z6xwyoHumRyjWuQazbq7uMijFLna4CbJ19eD",
  "key29": "2yWfDVaVv5LBuNppomTFU8N12E31tpjRsnm7evR9c8kSKvFf8kqJL5Bqujy5ifCL1f1iDoXBGDXdir2QYrdZV3gD",
  "key30": "96odRQue9tn86BdBhvzwLx7xDEoRdAPACd4EiqywHtXVW7hgmwuoGjmQ1thutpRiMzibg2QwexiZxfzPLrNhSVD",
  "key31": "4NQ2WZvHpjP6BXL2Zk1LTDYtCMtdQn3AjjaiSj3qa4ThUKhocU79NcmFYgQKzagtD2hgn1DTxtvzcMBd4eZDvfYV",
  "key32": "4YMgW2cKrKQWZCSGU33ETDcNzbGZmQQSd88RschPpvpQXhwqpCB12VMaWUK7sKiJ9m6JoSbCT4FdN8p41ChXQoLy",
  "key33": "3PwH8Br843SQxkQccSJ1WZ24vkSHVGKwQv9L1XE5wi47DSqqpbRhNwrKroqAJv3e8skXtW1LqmK39HzosFSs7LLW",
  "key34": "2zRQMryLKrwXMNXSgGN5iK7CbUctxb8HCEVvf3ptx31vMZDg9JPvyFCZqPPLe2svoBqxQZ6LEs5NYSoVV3YFEnCH",
  "key35": "SDKJpa3GzWhS9TDhZ6xfqsJRFfjJuq4syGpYgwqr4aC8HwcqKRDVC5GVsdt57pXEFSdmwP4swbGqj6PtyerZd2p",
  "key36": "5wq8CJfvSwZpUSjEtpDh4YDTk8r7KWfcQH9pqt5bcpm2meuzJA3vmvUBkXdGznj28KxWUPsy5oMuMgQyyf3uZTgy",
  "key37": "4jispRFaFGknuXe94UYxpcwuqC368B6B8tzDZsebCpWzbK2RSWKAkkSW4jHDMvuVG2EdsLwPfqaCEBQaetvN4yDs",
  "key38": "2uEirg1W6ZVJNNF9ks6NCMuG26iY7upJ8tZdnutsJ68kGpHb2DZAEis88HcAXaV6DozciKZDteJueXHoPYwQhPhH",
  "key39": "4xvi98XsGjKCwSRRPvCs7tpgdjbivA3BtTtFeaBQPURRh4sA9UNWRiLy6DPHiZGzaCGA4wUWWkkaBaB8H2ogKw65",
  "key40": "3AVzjUzvoxXgG1TRjwsNxAXPLv7gmiEG2X7mCZwArGUEj2GP5cqZBpAsZcAsALEmN4rynqXuC6oqLj6ZB1JwHVnk",
  "key41": "5qQJB7LsJRgRZEbyMGsw5L2mTA25WmE2uM1ZcNErxPmYshWX9Ma4rCeCKiZ9iSZYVKEfNFiQQegfWNemF96NPgPq",
  "key42": "2De6UhPGENbNLszxSZbWENQSfQc6LZWY2LXK2rr7Du4ETbmGuViLvTJksEdsV3c8sU1zRAu99naAqQUsBEiUwXWG",
  "key43": "34rMrWm8pnzjJdatx95t6qHxL3SppWE8QS6vyGSECDDNBsw8mWnjeLw1Gf4aE54pvKQsi3ozoaHdoTew45jwn1Pe",
  "key44": "3LxFXFYMW6VXsivr4kCkr5DV7wkrXq9u8woid1GtAhvWd6HH4Ubom45gpUPsm8pHrjgFbrcXmNvugSCwbmvVFrnf",
  "key45": "2M3gdsSuq2iK5MExoEqWxgZY38hY4o5EkNyaBR7xKQsdhzQHv6fwS4f9W8hmrcWwuQZJKmMQ9QxQ4KrLoXv4J9iE"
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
