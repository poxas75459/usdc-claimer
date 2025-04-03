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
    "3srB7gN9qt2asKrPhGSTV6BHazkpbopasCFkXVZ9HVSN4cq1T4zqV5pa9fkoJqjHqbg8GbfS71N2N89TeU76knTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WwDYJrWGoz2opvZDYJu9Qs1qiZgZSeoHbX8QUcuCxigqhiGjdHRKog1g87wq2ekPzSrYJzLNnwJVDDpmufmMzzg",
  "key1": "DxPQqsu8PXCZjxdbrkHpUy4idczVFFqNjJR6XyScPDdNU1rAiZPNxaic8MCsuie9SZ2zodnxuh1EJFD8Pkm9Shj",
  "key2": "4fW4eeFe87AaXbeqtQVy6UPvo2HDNbQRztBa5HYQDNmbbmPSP8Gxh3o5ebcj7CuoCPisqMyhkk135TT89qMqGQh",
  "key3": "3xnnzY6qzgFg9suZGXsgyz8WTffseK55axjshoXUXg1t52ipwwPwS26FkrzrZE6zwLu5Cf9ZrUVhWTSfcd2ajRAT",
  "key4": "5zmhHBeQE3A3pxKxGmHMUziGTPjEABbGhnrdjymwsCr9uFvHLwqHnb4AydHkqu1B2QTBxRLwgP3b9djAqWNXSQMa",
  "key5": "2DePGfMRczWUYgkAiVfk1q6RdKkf3FrYxM1VLxCCC6z8ihpxhWgBi7QVeRV9SdZCGMrDcPhWt1iRydRz49ugNsfB",
  "key6": "3BUr7jAfWpMrRxXfSitCRCtnCRHPQ3CGZUAafJWPAS6biyppQ8ipYuYwGJW4stPjvZMJ3DvV5huZYaMExgcQjkis",
  "key7": "5bMhxLbUdSMQE7aevrD8CKWPbwM66MdouetvCc7pcfD6JGJYw7s87T4HuGgTmChGx2EZbwHFXq1UUa7DLh2YPw7e",
  "key8": "3Forj8YFVwiK1FU1QfPgb2ZMdF3UybcbZN2RaRrhgEfnVdmc83m1jjwFHfPncnzC4kH5gFgrUQzpXAC5HgGqVvFe",
  "key9": "5eqeRA61fAEGZiZ72u4ZPCoQ7U5i9HKh2TRkjgeVEyKFAUQRUFBLMNFyBZd3Y6WE7qvXrPk9b4sB5zS1fifyD32v",
  "key10": "2XE8JqmuXuBvak3dnLbTM3AVos4T6aBYHQ8JaJeYwgsFfNYYGjmkYkdTcYNu1fsWSCCn3uRH1oip8J58SQZPeKYN",
  "key11": "qksdAenydgeT84tkiHBip735UqFQ9a8yLBwLBsMsX5URXMxVYf9dusGr4KjJsxSswXhMSLRpFMS3yRBgz8X7hq4",
  "key12": "4T8MWBJA2p2m6uapNcdAARz2edaEj4R96rti3hPPgo8eynRorbwxKtRVtKu5T8UYhH6KomFzxUuXB7teCVHzkWKn",
  "key13": "5wjMuYxjSXjxdcypjTZcy7yDkVX1VQPMAZ115W5ecEgeFtatjqZbCGmNWk15Q41cNJ9RbbRd1TByGZynoiSntEzG",
  "key14": "MXvfrjwNXwLMPZDqkEbSmrTt31dcoeqGpkVyPzvkEaLhkzcebudzg3TZY3XtAMV3w5DpLgfRF14UvV474Me9GTx",
  "key15": "33Y5Bkec7xTb31ybKs6xhVsgF5qXiM68eraKwHCpyXeEr6HYxEjT6KeGKHm8a2yE7J3bHtzeK5oj5tQZQcBqkpjV",
  "key16": "5duN8Z7nL5v1xVPL3dXvm7bZF4RV11npovpc63gotXrn2WuGE3WjbNc8QwmJvc1YzA1u8zmVocGev17QKhrzAiwp",
  "key17": "4Fg4T5NMAjbUgQiXC4npTJ729VzP2G78xL4FPEdjeFMyHC8dM4VcdBuNtmqNeSN4XLY5umJ5pmJ3Tvt8RWQsvkMB",
  "key18": "sKboSfFgtz7jPh1qjdng5HBkcX86HW6B9pDiMrGMcyAM7KAq1tf5666A9EgmKC9m3p5Xwo4PnpR9FumcJaVwYHX",
  "key19": "4SQFWrQve4XDJ8L8vj94kmcDern1gn1fxHc1h7ZHmtH61Bc3enZ8A4JzLBFmLYdGU81zhtFfx4kcXBouXNK2kPvB",
  "key20": "49dQthMzrXvM6HFMzWUAAAmPeag1AcvyDnxYZ7avQ1NQySeMAtLW5BUzKMwKQrMdzLqwM5YXUTHC1hQT2edZbPxF",
  "key21": "2fWqcAjJ6fqmyYnNaiGyTcnQTzCDGGhbEWxpaYui9y32cuavD4wt8UoCENgvaqKzpXfMCYjvRsuifzrzWooqC9sb",
  "key22": "2Et1ZPspH5eC8Da4bSBdK7f4mouvTPic7m34j912MBYVKtgA8q3Wi61DvTpTh5SNYZmwPfbvwBfaZp53cdmTWshF",
  "key23": "42xD5sPPyyEicT7wF6cGJVBZmMAX1ccofF5hh8uFdpNupYfoMyyDRyPrSRVCh5tiGh1z8RyoeozrpWk1tymYXgaH",
  "key24": "2VXaWAKmTNYmnVasSRbSycDWGGJNKQgqEznxmj7BuTFdYGXHe2aRPMB99Q4Ln1udEKFWgsSe7T9fwfSSdaggH17f"
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
