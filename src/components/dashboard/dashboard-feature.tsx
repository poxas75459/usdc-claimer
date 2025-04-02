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
    "4Fb2migjZ5uhjs8vTV8YA8bvRoEpR93bYMWcpvpJzKA2sKKW6wLaGnWufMrPoUw7iPCpJfAXk2NSb92efxtt5MCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hs989Ntz4KiJAxGX8s92PwGbZaxDbpJgGNJeDhJU9LgZMhTsGXA3C9Kt51oVM7P6thq1WvSfKvArsVDcbVickjP",
  "key1": "2Gigpvv3oZwkn8eMv6pVZiy23JtFHrn8iQWkAkcTfHc7MyPUw25K1X2MXT7PdRw8vCwVMhuBdAPHxxhssGmARq6M",
  "key2": "5ziK5FsbgYU3DoC4xgDPRWZTu5pDFaJehenzgG1XmkDVGgAeyjFSYrcgfoLWb1CJyKj7ZH9hTnQ6yTv4R7Hog5q6",
  "key3": "45Kso6He2zd29G2ZpAfCBFHuKj7Y1GfZ7VgTTKJKnVGo9CXQ9yooqeY5rc5EeaJ7AV8roTHauX8hWRdjb2qbNfWn",
  "key4": "5LtnF5Gva8JtKyiTiNkDd5YYio4paA2jhTxe6QtJLVHFtzQWPNBjSTCFAij5pXX4nGTjFG7HXQW4nGhwvdFMTYh9",
  "key5": "iBoxdSBmiFDd2L1Dd2QixkbxWu7TK54xqCQKqaS8csDnvwAFmp5raLrGpqCbLXugGafQNpyZPeopirkjaKVw2zw",
  "key6": "34wh2a88dEi4dWwNLBzbdghbxv3KnvTVAVY7LnJtb4q7KCVavAKzWNVfQCvqc1NRgaVLYMZ1RjsLaKdVhD1pi9wE",
  "key7": "62AecQxZ5mbvF4HCNHo5E55QFV1EGrRSCEDYQAx8k33EZdr65SJRG7sJp96J6drPA6n4cNKLPYnYoVVYT5XhDz6u",
  "key8": "4CzGbVPLcYAnrYnw5oYmT8jR8Hrx9Lqz73iocTgQbSPXsfRaQN2Qvai3KJPFzyoCvG635fs6bSyfxttQUyffnBp",
  "key9": "2KPJHZSVN682NzrJLmjQatFm1b94v79ca8qDA47eKJC1XNu5cdP7P3sgcS9g68pBjXYi3G4PLw1B5ibbWtwfbSjF",
  "key10": "4uPMfq28MyLgxkvpVSTmuyEZsyk4eRFZT5DBowyZQ2P7pZg5wigQ6tGzvD1nrmA5CbKAh7HsrNupUxvRZZTYP1k4",
  "key11": "2dtFoTjigb6L2y8UqRNV7JnhCYUHGfM7koSsD4qnVLxduBYSUzznqt63qqapBTrGm7MHbwh3aPNWmkjNYw9zaRDH",
  "key12": "5hQuDp4osLD1MhSPed53URqnKWcpvvoXD3B1oZYT16do5SH6tBuPypiBtRF9jLEPiTsTH2moHWWHRnMT8LMWS2w",
  "key13": "bRmbhDzMxiUZqkhj1hTjyVu1zv6Ryko4DN5wbdJVghUL1jhJven8hBo8xDqydV4Hovr5F4guEX9ooFJrVDWQH6A",
  "key14": "4ZoZACEYefMyhPpXCDUGPfJxfnmvHcamMeczCTAE7gytiSUVCwUkBgEBh67TddQvW8uHWf9qQVQpNHtNMjKQbwvt",
  "key15": "62wP9dsfMx1gtH68sMSqvFdkMGWZ6WHsX6fWJ8nN1hurEpUKyiz97ZqK14co4moYTmupsnvA4jCnSNdQg2Q9fqRR",
  "key16": "44aMeAgq746KKWicivQZ3jqFmJiFezqgNyggwUjGRcmJwAFuazHBQY1Po5qq7CroxARQNZHaiUweDrb6c4Jjt7CL",
  "key17": "4vqUEUh2dmF3aqSMTCHh4wV3DB6DuNKzrHpKaGxwfveA7gU2Snb1VxhjpSFpaiY8ZQEKzLk2qDAUp5xRHkhkqCt",
  "key18": "3dcwF3Hegf3BicfEWvpS1dNL9prvJLXpTKjjghpyQa3EzP1ud2RM8zg7Lvtvc2UFAtMH9TtM3BnUHJ8ovNJroL2D",
  "key19": "2uCy565GTcAaS426qkYoUW33HP48Gf1crfHpsCmYGzVNJTeKZSykh1HqVChiEmCfLd4s2T9NU28SikVXm2MUuHsh",
  "key20": "KfLFddTMYy4GLqGSqZLwB2K1z2YQmgp4v8Q276NenW1St4xPut1A32gXg4aEkVhA335a9AudHEkKxPeSsXFLZp1",
  "key21": "64TZgJFtGToRY5TnCpN95Yg9tj3gXWBAgL76nSEFVDpnRmZiLV8BZLAdeLjPf5cMJtJCoECmG5dXkgmqTJY4ZVhg",
  "key22": "7HvuD73peozEzkRrTYUZKBDYSWPDurY9vzNLz1Cm6JQcm87Jj4Civqxb1K4FYvnjUp49gMmyZbx47LxzQ1rkfXJ",
  "key23": "2TTbWeipHjiSUwZqBCbU1MynCzH1h3HRtqmhmQTcRKe8Y1WEEXr7ZbFWUvbcnmLpy7wwsHMAVTgru9Ka1AYCmQLR",
  "key24": "4DKWvvmfADp5T1AgQ9TjTXgHDCySBe1RigedvKE8i29CUd4FYB8AK2wDr1eF9RxuezioCBc7M6KkeZ6Fhrv6Arm2",
  "key25": "3AdHqMt7cyaBGqRF9Egtxjix1JAhJWKVv6bjt7n9hLDRPts9qJnQGcBJ8U61ULdpsTQtgx1fZuhAWUsfzx2YUefY",
  "key26": "3RZvjecKkfMRWJW1DQ8JEpmv4Nur3CPvjV7HHW4qTTE6MRExkvx28ACm9ZLyHB8zVx9fpez2z1qbqWi4c3BTxuud",
  "key27": "2Ltq8XVb47nLeZynBV63YcF1UKe76TWJ8VVDsfR4pvJEsQ3irVuaHKgBNTnooEPJwMhDko9mzqGmEHU7i39Jft3D",
  "key28": "3GP9STrhtBCsUt8WMUaXDeCP7zVyfWn37eVceRLJkK7uoyA6NsC8LFFFVgqstUNNfTy9mG4PMv7ZQEbxGn6RB1aR",
  "key29": "4YLCYj8TnmrWC3F2bASwXhMYsYmK2L1ZYz4yCfd9doq2svNVkVDjkCSo7a6U2Yh1vBFq89kUbJ1tQpU28WY9K1Sk",
  "key30": "5g6ik3ADpXxGvVZ4S2eGiWDhG8hY6Y7TAe4ds5LgWGud3qSDFixWN1ud2KKznAxU3USF5NCbdGujGXnrbaofoefA",
  "key31": "5YZaoRGS1KqKdwznt6ArXHfRwnDH7Gnq5EuQBzHusemHiFuuZUZKUXDsnfcGzCjbhQGZSnW5WYB45GrT4Qq5Ju1E",
  "key32": "3RQMYH4tr7j4NsenNwLhWuejEoEHRa9TcXdVXGwxjMbgLVN8Mp4N9ZyULGzfTZJUG6AdC9ZDBzwNqzxjQcaG2FbH",
  "key33": "5zHwWRgmCszZYX5cNYdBbQjyuGwW7rYEsijkFFpZtkSBCoyrR6xkY6zoxPFBmB3VrKTyEYVpcKKdGe6teUTyeKpM",
  "key34": "YV9Ahyr85xKuxNsXTV62Rd7wUj6VihGKPmXgZ2FJvi5Ad1JTGiCccisuGrMniMbM5VCEKTcdjAMP7zUots8vQDL",
  "key35": "5FzmgbiDbYthmcU6XrkomewsBHd15CN1t13pwpS7DLT9rB5dN1UmHRL6uf8XFPAuX8f8yD9WhkPMuM5r1NqbXFrg",
  "key36": "5e4H5QPt8uVGm8nWJP6VCDV5DAadRCpTpdgD26uGUyXsRfbfUWbC4gACM8HPznqCGN46s8zraQQPZ4mYixAhMZvQ",
  "key37": "4dYGfa38d1FMNnfSXhB5Ntg3j4KzHPUt7mWVZAw8Z5SzgJWFciiTX5ejbsoEM6tBhjK3QeBT27wN8ipwNeBtbtD5",
  "key38": "3rDk18uiLvTkoveE4AXgZAJr7PV9o9mzZQrrpUo4nNBuv7HjtDyXVAnJo9f6mXDqeQMXZubSpUmc1aGJQRFLuGnu",
  "key39": "4PC5SrT6dosu2xRo2N5jg4yQvS37BmKvH2RpKb4u2H4MTMWqvtiskagoXzWj9BAeCHS9E7EAxz5R5YBcHPWGha5v"
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
