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
    "3j5GxPein6RnAzYKmku3K56d1q5X8G8uNbAD49pYE5Qxt87ManjnMvFV96s212nMz7t4fbZXhfbDNDtTMsdPR5xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hKnC2GnTnzrJdwBi5L4gRqxfUjiVYLbL6BgKPL8heDewBxJG4qSXWaZpyCXBqkofkssr9Ev48Hs31rRWhQEKi6m",
  "key1": "2PoekR6ZN3PzVDtC1JFw7aVGQMMRoaCUrYTDakjCmxZ13xs7YSqo9ochpHyurkxyLbzkJ7BdzRkWQ42zCEubLd1z",
  "key2": "2j7ZDqSU6gG9MVrnXNwVu9GKZpB4TWiXXFAbtPoMuPDHVNDDTkRvLWN7GgBSbzkt9L377oxff9m8jo7MamxpAmNY",
  "key3": "2L3WjniFW1djVxk8k6LERxAHgFRpAfFtYjnJn2efD7sa52ZnwumCPSwkuudJZ4aERcetKU9fj9CBNvLhCgXS1TW2",
  "key4": "3uz7W3yet8Aspz7AvJobQJ2uueAaWQKNJjM9cvxE6wmVbVNhZY4th2rd8VUm2kiA36J49Sc8xVLfJ9z6kH8SEheU",
  "key5": "3dDYWqmp9p33NUM7WYW6NJi9BJk9cq5MK8iZ5PnN1JjmmQeUs1vzxNYTj2uq9P2YR6v5QxbkKVEuzfxj35tCFfUa",
  "key6": "3kZotE9NW8nfDbZtqNy3UZT6zRuF1y3QfUZ7jfCP9i3jhWFmQYNAY5L3R9iTFLK1cJBUYKpebuVXkDgNk7dwKSjh",
  "key7": "4EQxdo59CjYHDR75Qi9WHGfQ7MdRGQApErynpx83UeoHr5zSjcH9aA8tq84d2qRrAbAJgzDma7mxUPRrBDgCe6cj",
  "key8": "2PMTMCbNvtC4zoDLEgmCnqgYGsV4DQkPQX8BAnfCQkATuTCGUiY8yYZtU6CBh2h8f4MtxRNG3sqiHcFwnAfRH6qF",
  "key9": "65gyqQ2p7iPbWQ7CwSkhuH1SiVb4wpnUz4niDWXbkY3y4VhmxjUfE2AFWT4yMqhtjGfYDLpY7C1z2DJSuFJW6TLx",
  "key10": "4B4StEKJRawgGHCK3jmN8jKCgYPFiH3kKdtKGVX34jRnta4kbpaPdcTFEvyxc3RQHVBmtaiVCS7jvNoekPs2Kxmx",
  "key11": "5gS119ZuW4NNmnwKBQRyLQXFapK5QZVHCLR6Piq8uqXjrJy4iUqcvYwWTdz7nP7iFPTt4czEgviPsaKn7VMGHbW9",
  "key12": "5uyrrnYDKJ4ye3bCXyMoA5pzSkR6KpHjtNitKYdEUzsURzbTm2YuSeQ5kyidksDnxrcmPUKc8awYD4tjRGTNNVok",
  "key13": "k7ZfEvjXdy46F8EgdVfqAkkzeTUqeA587Xb6PRkA2J6AdGkZWSyT5j88iMjz1isva15KokRgcdYQCawzyVnS7uS",
  "key14": "VH7GkKtv9nUSkvvVkAQTymchip4xrXFN1YCXy1tGYgmycYG5cCkL3LXvLSmC3QXU1JkgPXzbtfD3bsRE8SmCuUp",
  "key15": "2uWHnABP9E45xQToViyqUtMi99xRsqKPwrPjJjp4wBpfNTgK9B2kNUuhS4oe26SjXLdSBNNUyY8qubJMXkEKF8nP",
  "key16": "4Qk6maDoZAL6cxP8d1KG6NnCTphjjpeTbFU8kChmvkyhMxtmK8E6yJeaSYRQLoSHDc1M3wPX15y8XfBcoJMVBmTV",
  "key17": "22eETo2rXxLWHtKfzaqsejjqrawU2PPw9B93uSF9VSwxQe7wAzbhiBEypxYu9czN1SL8AtuiCr9CejDxt9q6ZkcC",
  "key18": "5guGX9ixzpui6wZSVHn1x1BkE8KREc5jAT8dBdPbGSBKZgNQk78a2YWqvpEWujpiRcwL12wNGCzoP4cE1DChhW7a",
  "key19": "3mPrFhn3F36Wb4vWZh7ZnTaiJ5LpavN68Re8jiUkS16CJsWcJt3JFdQWURUEh3MUNV9KaDKPFDy9pV6i7KwxJ8Ym",
  "key20": "677TydJS5JbiUWfz9DFYj1jPCMVVjLuGn9XYUxs3uCFTn5pyLLACUt87YRTv2aNaYz8JYG4BTat7YhBuzE2MKFhH",
  "key21": "2TjULgY8EGGodHYcB8xrfpzcWggNcUdvxcxYTL1J7H7RB8ncUJHPr5sKXi3TptCKyAF17J9xBxPkgQxrELmeFsV5",
  "key22": "5QTT5Ar8MbcfzA62GAK7Fpk564RodmAJwFsDnVbTK5HGSty54LWK6j9LN6B4gqitvvXWvSvyquGTFXGnh6ANjUWC",
  "key23": "2UA7QzMSgLSp85AjTFCQS6oMDdVjqfiEQsGBvEpjv1kRZG5QRjndGmeeHheFPD1xEr8B3pJzrh92LzQpHXkxR3WR",
  "key24": "64ov4kmq6EdqnoAv3pVT5fdU72irhvYF4e9bcngXsoCeXN2p4UicrSf552XkpBWvHFuUAnrGtbm1M7yBdqz2gWSF",
  "key25": "5ADhmTG2nJUJhq9nUV8mWdQexLuyd6jD5LAm7Wr6EK6AcDwmYc5845baapRsQDXFgfXUBHs4JL2Ad8VJKKkH1uee",
  "key26": "3jodyQteEyBJnDZEgZmvMAL9AxbUPLcuTWAa4drzNhBYy6CKx1o54ybkNa165nboJB5aHuddmcHPQWEHfvMkzK3Z",
  "key27": "3gWCb1Ts58eNF7t3QwjLrRC2VDtMApZ8NXTk13mRWGha3UsszSEoSTusVqJDk3QKm2nxbg4jqoyDYs4UZpvLKhtb",
  "key28": "3vaD8b1UpWS5hZ3Fei7uJLJdCegBwb47yZKCeRLMFXhQxh8PWqw7g1NZiJK4E4rK84rm4991XD6CtMBzXyEd9oVF",
  "key29": "51FuGsiWZ9DEyuvsNtc9bTjkMp5MyTPGuahS2ySw8KyrhYoPWUr2wsUEb3SunLFw7D6HaVVFjrX1R7nyz5o6DGR9",
  "key30": "5wXjjVv5huBGeuR1abDL7obUWxiELNAikYTahy2W2yvzEHUZHoZRwLovSQJv5qNjcSnEJYHxwyR5nNt2sXcd1E3S",
  "key31": "3Mg5yUTB52XpW1HLGZdAQZHVRF7ZYPcAfaiyFDBv9BmsKNHAqa5V5kLN6S59pXB8trATS92pwfv2kS8Kph3Rh3Zx",
  "key32": "3RvA3Yj325wQoM6cbq4zpEqVQ5wQR6YBmCYB6TA26gfYc6hEoCTtX3mqk25YqD68jd35xg7frBPxfWjesjpn1mhg",
  "key33": "5oWaxgTQzm2VaaPXooWT2u5E7ZTeYgvQSGJkCqUQ5JH1pWVkRL1oU8Wp5Cw9pd5tQrXTwgNYQDzpySb7dLVQTAbk",
  "key34": "ZwsLF2XirwApgmqQqdBvEDaqmwtBBD2ycfqS17RJXY14CiGt51951Nz6mHFBV5AtmX4jfrjEjJT9iwNr453bBHh",
  "key35": "3AfZMmkqJzDqqbFTxpHJWRUGxCgnvZTbHwNHCNFKic6CFeLYEKkoE2jxKSQ9Sr53cJXnb8qPSqWVxzmWX6tf6gXP",
  "key36": "9k3umBm5jjY3WdzJ6kFM7gcPzxoC4m1ywA1HpyaUntsjPEFPUaxpEGJCnbrQXCHKNECtd1BKBchaSE196nVzYX4",
  "key37": "2sRaEK2XNY8sPag1sHMzZa7JCo4aASci4z1EetF9SkdHiZxCc7mwRB1opzWAGXYCBZigxdkWYcgZj5mPpeMAZqXb",
  "key38": "3mqsSCKiRFYqeCTABHpD1xd5sL3VptidSgLohmhq7EK85kH31cBeW2ZNgXjrRGY85gnMhD8MZYdMNqhMB1SXCW5x",
  "key39": "2Ckr1hFw7vn6rACedJswASch6t2MZwq1RLmsXjNqZct3my8WHpfXHn8cJNmy7S4hWLAAv1BjFRbFa75yqt5a4LEj",
  "key40": "5UhE7EyRkupAiaDY6oAAjrxswNRZL9Wy8GupRAFaGJ27G4ZugSnDiSKi3jhKhLZJ8EXz9Z9cN5EhAcQZAowo8m8y",
  "key41": "63BaFEonu7zjZmFTn4CiwcvdeoNucd5xXPhp1QYvYvAnXnm8tQDLgfSS264T82k7Xkm9fbNWxWETeQb4yprDvGkQ",
  "key42": "pEb5RKXcT5GX7PSUoXE51Zi4JYMah17zHbzSL61ods6H42iti7vXWaz6HTqViA3tV2CWsrZoHvNs9tjvvoJNZit",
  "key43": "2XpoR4HGpFfHjLB7Vrx2VRdJc4KAw6f6WDoLogRDDpaKsz9EVMpmPX3sK1XS5SDYhQUD5pUBBkQYwkwNEvgtc4Ud",
  "key44": "t9jHHALui6dM9pT6C6thDjzCvnLeXviKsY4htuS8W1D3tfdCKnDhshyg8wJR2D192bKRiwQNfbczVFkgcs19ed6",
  "key45": "3qxpuWwtMa1CmQh2C6B7Fsh2gduAzSbgrx23mZGsfTd3LDpNFbpbDp72yTQVZeg7VatcNDZwaU6TMFnZeY7hxDRV",
  "key46": "C6v6nPK8q4D3TM8nkGzjzMLt2er7eQGMCtk2ZAT3jKoLrrT8TZumNPJyzKSr9JBTPM6cCNVXTz7YMwiiZM3issP",
  "key47": "4NGkxeQDEv63MP3ufqmcXzArvZmyQnetZwimNVW5Td2BWX9wtELDysHopBYSwRbuh3SoA68UFD6dmEaEavcYEo95",
  "key48": "24pJGMHReXAE3DYAjLVB7gDcuoyiMga3h2dhagtpDTtX9ZzKS4nxj1dZySB5EizuornWUWkJhqKUarT1wGFdzRs3",
  "key49": "2igQD9R4ewPcbqkKLWJTQxoVQDssc84GBTAfkrcUESP9bA9oDVup4NVEeRGKRdTjpwmF1VviJbucFErYiNtaapbJ"
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
