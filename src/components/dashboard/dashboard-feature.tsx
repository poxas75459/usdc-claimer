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
    "3uqwx99x33H5oHjCjejqfSHvpyk7QPkdTLWs1PWMzCywinUoQ3REkekjWe3G9uqkPjijnYZn2XxRYoS2beDzhqW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jM2a7g6h61yYynW5LrS5veSffFu1c5QZqxkXugCucdRMMuaTmRLuTxQVZxThpT9uxT9yBmDSVJfwR4VwBYh4kEG",
  "key1": "MYiYea4thsXR5oSGX41UhKZXZ3voja3Ju9L9bzDxGd7tWBTQyNUFay9TmTrbNEu2dXdjR3rZLzmhda8AQMw2mtC",
  "key2": "4XzZCqtAP4zveqackTXQJmQsvfGhfzfsQ1hxczNvE8xpBV7g9KK7DyswZuoX6hD6BWGEfxok5RETTkKGz25uUZ2",
  "key3": "4QmeLwMZAdBnr3t3umaEjBov1joqQJjwfSCGfNjw9rDc9amTtnMQuWge9tcSgY4k48gYXvacCHvU7ju551YvRFWv",
  "key4": "4PV2t58ysVoYRSwty9PMBV6u6FtnQ4ErqDyCvJciBSBxKE7bwru4arSV261dctGF8s1o6DEMLBCDsfgHYEtpH1k9",
  "key5": "4TCMhRPjHDPMdHtosERVoFC4ZCjtDdzVH2qmrzs7ubViXyCsJq4NR1Urj84qEGiYiLqXm2siq2oAN7Msg9kdoHoX",
  "key6": "34LGsEopizDwMqoV7h7YmqbwrBESdZba497FVgorr5yPy757RRVd4CKG8hcQotbQXhGmzazdBQVknoXrWrvLRKDW",
  "key7": "8e75ytVQPLWKJZjt5GoUcvB3KVi6nFrPNgB3PX2Z1ndXUy2w1jn7r1Na2tLGQYVs3js9VxbBMJ4XtwdSZhktzBE",
  "key8": "4HbsaZAEMVy4nBN9VhQ8iozUKrr13wTEYkaTU72Cc24Apt8oBw1AuDAnFUrbHXRBU9LLc7mHSh9inSR4BUQtRpuF",
  "key9": "2HV3hcxpTjbAxSMuERiQY1raivZx9rx2G3MexYXffqXKGUbHC4YTDxcZ157oLZhxjkkmJi86yqXqfqUJKqN38pGE",
  "key10": "UgqgNozW1GJwQDBHYnPMk8eTEaeh2LVdYUPxsrmbgsELPjnB4WY1YjcZQnBZBpmBzeV23PELADf1q868eU66PAd",
  "key11": "2QrAWJSL9sm3bKx4Lg9UBRjaN6Z9KiWqSx84uVYCAXcpq34RjS696sEvbEMpc4DitXHTtkYmrAeC2jW5QTeoZ4pc",
  "key12": "472yec1pnwnSGhKefRQdeRHy5kHhqgJuH5pteUgHcPrETZo1JzGF7V9YdgvGZQb1FZegBEZbqxDJgX9iHg81A6hS",
  "key13": "9ZnVVS3y3sJLE8V5j4PKUY5djXKbSqcsHYq3A4eNSuBpkrGEJZPTwBbysDAJe6PHQzwqN75keUQoqzdUuRtvyvo",
  "key14": "nU5VhKyBd6ci6jy6khkBNgjf96LPvBFpnrrM5VzftffvUM7XvXmRSjhwE3wnvN36j1Ub5LEoQJWMQJqYJJViCa2",
  "key15": "3z3x86hFJyhrC5SpRAaCuA82bbNKSfvsd2zLxSHvyqiUhFRqcde7Zrratc5SuaYL11L9Vhou4VX4mTeLgVyrArMP",
  "key16": "CnWdVxeSjKr2eEK4jtCRxeYd56X3gLZxNWpefm9gUpBCg9pV5NjZaAssfWfRmd3bYyiZQPEnWRG7vtRAouWYNhB",
  "key17": "5Zhtj3x6CChUF27DtFYgyBja6G9WBK78XUaRwxdWA6XXtkixLSNaMY8EGBXMe3ywwYhUu4JXaJV7C3H8ZG3fAbVk",
  "key18": "5gviKudVJwLpz29w3YYRrTAWwQtAm8gWoCTsBjv7sGn9W1D3N2qkFoTv92gQZCs8xUAunV9cYHLSQ29nGt8gQKbD",
  "key19": "3jHhs8Ctegs6dzhiKDapJQxBqSNDJnEqsXWPbYufP8TbXFyubKt4hUT1vxvrMa29X2k1V2vvvN7dhBhR54C7n3j6",
  "key20": "4YAQzMQAF8ur4hf8iZRfbZ1Jc24pK49pVPWM6Pee1cnuJrGsTTYWBwnfiUB1nmxtCaSQVxkwuMz3N74uikonjm8w",
  "key21": "34BySkdXhPSqi6nEnyPAVdDd9ir5gpZ2hTFZuoNSUmAhJB3aDfS4s9kHnNoGoQ4bPBCC7TmWGR2CLSxh2zwKZH4E",
  "key22": "ousLTLcyDGicH93mP8QwiJZbwLTXptYEoRvcP76oPFqyRh61kNoar5WU8wkV9BnwKq2KQfonJovmkkwgJfrQHwd",
  "key23": "59bgkL9NhWzRvBmfa6JB29CjsWJXtej2wzSKSEg8VmUDfyyoJPrwWNjfq6UgEYBJ6cwWvzWkZXQgaeACYxMBn9xW",
  "key24": "JcSHfFzCD212pNaDVH8PM3u5J1ikyAGzYXkcom4cqPtAnmjDZK8o6LijvSSd8ZyLnhoQW6tTmVVVfyk8Af3XdjC",
  "key25": "2ctdP638WCFCtRN9Bef8c883kpAVnd6X8ncsxXGXjnYeYvedshSHkJ7BkJ44onyS9ZuoTrEF6VCzbESiCQtzU8ht",
  "key26": "XXaCDY2sdfb753nqCT9Fd7teLZNm4q4XbsBPzN79dxVufGuG6hwQQBMugFYhngksuFasg88zACWe9U4jwKdGypT",
  "key27": "2dSLDALpK57RfyUBtJFg9StMHtApBKCyvVyULaamT2hXa73xDZ6sEopmrC1qKH9cPtzbgL2yxTXM5dm2uSSpjM5J",
  "key28": "3Q33Y6fwNQ5VSaVykmEJAjBdGxwQJE998cBJZnyMPDQjGyoFpBQbpZsRGDGw7oHPFQ5jTXSR7G1MhsY23DmxmY8J",
  "key29": "3t4oLREKzDR79qPbH4vQKu7vhLJy7Fv8p6wg6BGGn1na8XbRmS7Qpi95vhwrhYkTLvqRpej3JfN2CLhHqvZ8TvdL",
  "key30": "2nidfGvqGdrCtR1CnQDk2VAMniwE692oSZnQinLeXPe38mAzbTqfNAJyBb7PeLCzUtoLgwPYpjQynkqEKYH5qdk",
  "key31": "4v4mwCqp22n6bnVCwMs4sPFZ1PtcD2bK8bEGz29tQVsxcAXdpmf7zdwBxbgwJhJCCNAGZX12fJfGF95Qjerfxy6E",
  "key32": "5ya6Mu6VBTHR1mnhHWNH4TNuzqmviLzvwPzmQhmsFETuXA8ApKJxV4M1EGnpUz494rvUG64sNX1E36pWBBLxTtvq",
  "key33": "cf23MYtyMoqmxxKdrNTQnmnF4S3fvRYzeFVAQk74jWP7VRnu4WLQDNHHrn1D1AYdeZwt9ECG7vfdspD2dBDuPxJ",
  "key34": "2AMuyHJKRQjTjyDYeKq3zAaVXWELLGQPe7kpZDp29bXixX2Pvaof5MtLmbKcSKEV64xs1zZNRg3pSBryttr9Y3ZA",
  "key35": "cKAyvwF3VDsTuu1KXs4X14sjVXt6Ehm5dgafBVdkB1Jzgts3V62x3ooEGQ4pYgWguoRFhSvhYdFEHSVDKvkxga6",
  "key36": "5vwmQimT2xcrPiUN9rWTEuAQ7WAkAY47GzYX9spk3fW4nxVuVowuWA6YECwYCYyYqTF2P7ypFjEU8vqxVMQ5RJuj",
  "key37": "5xavZ8RDX2HNzDsoQ7iZwvjHpV8h7SxoqDZMe5Vnzn1h839iQMsSYhNE7Aob7QCxxWj51NqjLZp6b85a2qXSA8XV",
  "key38": "u6hAZLqDD5snu1AzFi9wDsEokzjJTqojJtjpRcVzcDtfYt6EiFU862V9kSrztPDprvGYfy2XLP4VdmCEkLZ1tEa",
  "key39": "3w3UkW3UC81eZRrzp2eFKfrtVHvD7PaGZeNv7fvFWKFfvWUGb1y6TGrmHYMeTjCiYJGZapmJknDnTpo6cUMQ9fQE",
  "key40": "4jqKdBtb3PFEFRdD6HrmXC8qznfkSgqoxT2Goa4RTZWcroFkAWtXK5863zH3kv2X8n28xJgHn6utYvTkFtkVb6CH",
  "key41": "4n9exNJ5SZnqMoMCRYpedaFRaX87u8rsU9nqhovsw9Jw3fCTJnwJjFRx6bTScxCH2gFvA8Ci8TbR147hM5Vbgsk2",
  "key42": "37k3tGcLaZs8ffLr9rZWQZ3T3rhttvtSEZo1JWw4mqnf4kYWbMkNmwEQ9xQDk46wT812EqSHJToYfWteiySxXz9V"
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
