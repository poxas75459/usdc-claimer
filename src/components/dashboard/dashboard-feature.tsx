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
    "niA3yWcLem8Hne3j8tDmvLu2LrVQL3e7iubDAz1Zqp17vgBUkghpL2zfx8vhN6CHhpSEWEYeSznR5p1i64Seb7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPzU5rLPWFL4SBSrfM77FuCQ6Hv7XnCno3GzSNXoCsa2AXPhsMisC76A9DmrKEkzzZJyvq6gAi8FFdA4VXwH723",
  "key1": "2rzJKU8LwvcxCMe8skehEWdAYCK4hjqCYmXD5sDeka3UwkPst7UNCSyFfgaybjqVm7oAdm3hqJpMK6uQFgv2qeB9",
  "key2": "5LeUgJcH2wNk6LwKyKqfWLudEtJs2oVrSEZopro2um5kkpr2tJdamLRr7f3pPozy3JWyaxFVBTJn43HTWQFbgaeh",
  "key3": "4p5r8Q6bEM6vuWLKkkeNM28pkRXoQEpriz8VM3QTZd89qaev1qbjqLtKJG14563c9G1WGo2PYjCUg9w6VyXVjwpj",
  "key4": "5XvAYEUJoKA3DEerQZM2MYcErJPw1xLgAry9NR9XWy7rYCg1WA17AhQb2Avfegc5cmWvW9i5AzsRhwtsqyPZLHTD",
  "key5": "2udVH4fHUaUu4UHyzEvEYNmQgsgcY5JwMcUaXg8kGiQ4fJ68rwqWNH6WQ57VbrwRvfWw2XQwshaeNXVDUir8PDAD",
  "key6": "aWBmGXXowKiJko375pdRDVmgHyFYDwMQbzxJu2xcvwdijygNhFy6U8uHvkairBeZxjGyEqNwL3ScHN2NqBNiCh9",
  "key7": "4QSDfPKQve26Ncpzc5iCxgNEk9EKxK2SnUy28Awsf77Rr6xjYsXXw9mrff64csHJriM8ix818HPk8g7yMxu8zsyQ",
  "key8": "2wCX7iZSreiZgd6grJbjSCoWr5TdrfvAWRhyaUyNho6Mi9JKuUgprG1bxc1H4Lo4MMzEeTCsRh37shWhev5zURHA",
  "key9": "2Z3m1sU17gqg1srGpf3q5z8vRjWrHZiE4j9LDzFdiF1E2fEgUHDr2DFZ9cmrqGPs8hiWZjDBqLhZq1g2SX8YHeHm",
  "key10": "t98vAwBAFX23PHudDT9cxDCpjS63hJr7T6UMbQNMo8rUj4CxpeHjxina56PYfroqxiJy4FjRLSc9bHzyiAeYyLX",
  "key11": "2GcxCgiHwLscnpnQhM7FAsqrzb9sH4iFzBzaTnsVFrzrEcdKYtX9T2ywM2GzkPyt2Yq5RQhh8ZZkFFgm7E6oTgBc",
  "key12": "4Yh1UgGf5QsrgpxzsLtYrn1QwXJxztKEXt8VYWqPAXP86yXGy5cbHHiN5RSi6MggmgAAuxb831UMpxXStyBF5Doc",
  "key13": "27W2FhvkQYAZzQp9JoH5NXL1A3XTkqvN6E4t27ySyY1aXuYfpiMDvRNAP9s45W81prCFDcJxF9szFtZZUGtCbXQJ",
  "key14": "32p64KBmB5pC4jUfa2qfFdDmAauYLSa9KJP7UB8yzDbzJrJZDGydL45KoS5dj5uZ9pUir7ALhwGgMjcM7KHNYP7N",
  "key15": "5Kzt2iM5ZwGz9Rk3eGsExTWf9v6HjAvWQwe8PxQs5h52GECdD8H9iG1noy15vaKyvgm9fNRMW9Qa5VHb1pRta4hw",
  "key16": "4uXmmX5agr2vaeV949Bqa7AHtzNuLyrhSBdt58EwGMun73Lg5QfrjJF65uPSSBmW4ZednrUSSxHZJC2GakGY9mzW",
  "key17": "35iHgbHAxDpReaeRZSUJJcNxtQc1gy4dezbQ5BAj6qWEYm77tx4DbQ4wPuF8KdrHtnhQd51zfuSfchJyTTxAQt5U",
  "key18": "24ShcCuCv3wdWbAXK6CMbzbMtXfYvLmwRt2s3kyczuWd67UxPwxY2aHAkFrcZLHZn1Y9H6wcjA6pZjwsYjQV1UWH",
  "key19": "gFZaR7i9oMTYiFS3JhsqnBCkLKf4XcYNFTDWeZejcraxxxPwTqkZsQ2tfNWgZVNHVF1w9L1V4CyYB33HbqwSCjF",
  "key20": "5RMaNhhcznnSjLYWdXBzMqtdbfqCEXpbJ3mfTGSCDqmDx8PtDBDbMWRqcFrHVM1Do6coM5dXyKdRZTej6kC7RkWZ",
  "key21": "6CXnWSpwFH4totS8Wx4oQ9QA5GXNKCW5vXE94dHFByT5jjXEn5yrYGAYGV2AndeJWdwNk64pBh581TGAqNx3c2J",
  "key22": "2qk8n663UGgqE6UTc8hZhgFf7ujBb8vb5d5YzAL3HHL4sD6nRuyZkZHtVDLvwwf1LPSgE5KJuiVbFJMmN7ns6DXf",
  "key23": "YXzvtQTfghDUoA5pXSedFvKsbM7XFFfdcNXm7yBPRGYCVpgarJQov1HfpTfgV7zKgV6iBxAnUSFYHCAKkAA2rRH",
  "key24": "2dDv7yRiPFJ2MWwWJ5kUVgdAHktCXPrMB1CizB3fiFUJW65yoqddiWJSGKEPiT9o8j6UpT7yGmVJ59Uwk2YVLKHE",
  "key25": "3o4TXpVjqm9YP9gtqW5NjbiioEJaenUaJTC6sfsgrk4uLAeVM6SW461Qw8QoyzvmozBxqeJVXnUQrLgBA3vpnkM9",
  "key26": "e5NR5ynzuNrdLn2jM1QgwNd8jT345UDpQVbqvk38WYKvosRtAv9DpcduE6sfFtVGwvBZkBDLoBdis9bhGSxRhB3",
  "key27": "mAjhd1JGhek5zYizT7TyudsYBCVwWnFpUHmDGgNajt7imknjnFeZwN8kTcoXRNp1qDPaY2YZZ7KnpzNMZS7zvTN",
  "key28": "5Wp5fFs9W8Suxjxd8BkbysXCRTSDyzuPYQHWkrckNKszzhsNGGbZVDZ8sV6buJd8Ss7GWQZM1TjmyYnMRDTLtjWu",
  "key29": "MvjWHqppkkx89oXgD17ZTKieBzcntFr5jmcrbpdKH4sNce6Sud1vV3xduDWwFL6Tk6PBbqG7WufrwvSQvyotEMf",
  "key30": "2qaeEswDgc5Gn4P3UF8cK57pjHpHwxupkRX2heiy6uGSBUzwWXFwb17Z6EzwP49PnNz5PuYMDXjzshY2hXdb8s4y",
  "key31": "ENjSEpmrTX3THqrT4paKfZDXieuKbzcbNnbcpCZ6hDPqhBFKaFyTzpXHzBbUL4q1NQ2DNLbPp9an3s8U1Zw5tnp",
  "key32": "f9bJPmTGrMWP3Xiei4PorYJNPfsxS5RjHteJunUiW9onzxua6dXn3TvMN5Xwfp7x5oyCysbJdRtSbhMW4bmgQVg",
  "key33": "2xYjdX9aPosJ5Q9HHLEmQGBVT8rpzRCjtT8UyMqRjHLoo9fr8CNaUVDCYes5PLu9MmNN82GkWu51FHNu5XTEsNXD",
  "key34": "28AdnwFuqH5rAu4MkjueepzkVQAwP9A9Vn5ZGVu89uYwY7Q1XYJJhchawgvBeawfbHxTZHsekqNHq7yj5Jaqh15V",
  "key35": "peeN28Pvt8yzLibSZavHC1iyRTTvM7AFkssWhpXhSzEuEoBZVWFErRDyYaQjFSZzaR6rYPLLKAXFTD5gUH9F2ns",
  "key36": "4fUHdgkStsFUx6uLQU5mWKwmj5F1N3hze9UHz7cPm9MWdLGG1FXkDuZQQYefEKCvaPQ3Rmv5LXr1tNJJKjn4Epoj",
  "key37": "4KxG6nEgpZDLw4938L2e8ToDdFgJtSW727sjWNvqo4iZWtHeHdytEu2AAYSRSqEZgXLJzNc1uS3zQEFzhaLcMqcQ"
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
