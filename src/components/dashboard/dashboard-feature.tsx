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
    "4ZVVE2jGvZ7GfM8U2s2CY9K71zAWLZ1LkrdHWKV9gDDz6HADrNQgTV7eXXSAWuaxdbLcEvJEGALfgw6NurEUefgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34iXXf7oA6QQv3E12ZciCPmhq6bfjZjbnA6sAP7nVet8g3riB2buq7F4v3ocajxKq7xkvs7EkxWnqv2uTLEfdo9S",
  "key1": "4mcjT1NAaKAqRgRp1XhMj1vH1fg7NRK52aKpxninKYGjb8bg9cujR5X6QMSYUk2QZD5wgRLrhzqmrEFz9QqPXRsr",
  "key2": "5rzCwD5Ys9FeysJrvu2XWMqmzajpdFzrWwMzv5dE2j1AmZ8w8dpvLQHkAv5eFJMRgEeDjDiFh74h7WeB84zZ1LZi",
  "key3": "2MejcXci3QR6Ph5hy6xSW41EWAbHwQropnZU8jbxveLe7Rx7wZvXur415pEFUjVCiRhKfDkeEW37kvuQLT4exUhw",
  "key4": "3ubaFhQYocvgzSyzvRL7CubGcbZuFDvH6yCpqrzaEEKGznjuGd7LS6iCthvH2Avvzmvb7gDffWJZqXGtTgouJncS",
  "key5": "2R5k4nQkYSYeMbLzxCx1kd8vGkKuqynDRRf1EEPxVD2CmFwYLwB2Ncu3ZhHkTPkSFjRv6bRAj9rTABybHqFG8S6h",
  "key6": "4q17aDxhxXALEPQrrZo19AKMZJcTHZ1yhjYmPwAQXJht5Mj84bHvHMbM1j28yKkz6ZrvqxqH2yiTop5YTuszkuPM",
  "key7": "3yVqWfVU7BwPmWLvh4fyt4K7FH6bNpe9hSkS8H1JcGXHpERxn9rY5fEFus3tuFUKyygAnuGwVoq9amVDrUZA2BUP",
  "key8": "29Cjvt1QJJxw2SJgQTnHgccKfPb9bm6qQsxAN7KdWYjFMhCZ2zzVhC7JEW91UatUogmHmth5SmLX9B3GCueJVE8e",
  "key9": "4w3GZzdrsstMqs9Gz6AsekXvY4ZWrHuK6avRftxBdpL7PBma3BjsPtsjPfF1AfrPtWEfCbbL8yaAffuvLtMDPNUZ",
  "key10": "4urefnAJWghauLQkfHLHd8SXUZT8g57hxQ4t6pnqhtD8qZ9xEPQQribEbQzcHjdhBZcC8ZvcaegDrKmjeSjQKdnX",
  "key11": "PMq7MKjWu9vmPAnSBc5TobgAUYv4A9PPGRmMkMVu94VbwgkokkvxspwsMmdyp54G2fMnT5mqErHhTYcU7CH2Hne",
  "key12": "3ZpAkn9zHxhdLCn4a5h695iDpo9wGFJfoHwoXzYj6AxCQUThv9q2kSs2idKoftrrB7xKktDpWtYHWurrSNC9vSzA",
  "key13": "4ZT1vRVq2HqtMZRPqvkUgRsobzmvMuRZGs6RvTtPt78iAEqDi76yvfDjS6SsuRtVFFdMsGtXkh2XkqyHttvNMuvM",
  "key14": "67PUYQaLx2phMvQrApBfH1CvZmYSt6hCz3SKAgGYnLRLm748QvbQ8na23FkGkAicyedUtMipjYvw9n7nvw4Cbyao",
  "key15": "3cN5GBhAqmeGiEvQqYcvNLyuzYhPmiL9C5TFbFpGMk1CihwWLTHEYmyxjuEi3e9bShQ1hfN7LcHCH3Zie4dRaf6G",
  "key16": "4UoNLWVdGJqg3wBKg3QGMk7zt41Wag5Lg3ZuMyxFVEkc5HiutE32y7xjHxUZ3rtVRQcWDKyxDRCFm63jVEbYmcBj",
  "key17": "4AuYXRS9ZYnYvQwy1PgEJq1UwBdaqbajjP17G5Usir2d9YcE39J8wvBdbvFQBvwoGRZmjNrG4L7SKCc3WiqTqUi2",
  "key18": "5f9eJNWTqsVeZxHm8vQ1y5XxBQbHNhHaFWPCCJuKPJbhewGm5r79UnXHb119KXPu6vMVY7sDchnGKT1KCMfVfHNr",
  "key19": "3J6jjYigscuTZ8QkddenQHDVnNZq34Q39F4NnkSnRbsPRDa7Ssz4A5AHQciTXHgGBz5Q5Tp574j3QUDcWTYg6nFD",
  "key20": "3rtA2hoksWLUrjWHu1A1y6PzCNBDafajcGUhvBnvvXEYBHFkz7f7HSfDCAe4fTDsmCnT4WxYcqexvhyu9GH3iExe",
  "key21": "3SEkmFG29VMKNNAAzcAxBvnDT5E1gGRdgQCd87G76DuY1zov7K4dbXAXVrR8mttef6dmveuoZSuGdtr63eXsnRa6",
  "key22": "31o196GM988VjeQfsjAJNe5NaAJyUSAY8RZvg9CXbo4RDBRBcfrGrkNuVAUsv6MX2iBtFNtVqG1EwSJZEeM8fAAM",
  "key23": "5EPQCxng2Y4ZYCFsvR7h4ERXe68Zrg4VsSB1Jtj4bUoAsgUNAbfHN7UH9Vc4yPYAxk1NgjVeCRhkkCVVS8tGLCqY",
  "key24": "5BGp9qr9W69X4LxCNtpNPxan6fz4rTsibve2rs1NpvMddgjjZmCfQN7xd8T7pfjM9qVasMUDXFCPaomZjJ6VPWGP",
  "key25": "5JzAnKKNDnbah4F6bovxtLiFq3qo6zXbAPt3AfWPVZvKPmXVB7J9UC39SutPg3crbbFkM3va69NgnMWqDnbHzpyT",
  "key26": "5oHvyBhWdgKvtdRbcPk8ameWbND6XfW57v8FrxugN1NwQz3fbV3erJM9a7s5PEVUG96PGrT3fxHcW63sdSTE7Pgm",
  "key27": "4pZfYT7uFZ9wyUMPaXDx2RAAgdhST5QPE2rMGbsjhY26R6ro28UJfXNiyi1pk9cuYRRmFxPaGTeeVVNrjdGakVbo",
  "key28": "2xJEx3enzt5ms3TDivJQJAud6tA1SwhNuujAamGTs1LyiZaruik7Z65g7MRAx9n2PMnQL73aK4rsrf2oC1rkBeb6",
  "key29": "Nc3vGEuAn2DyrREV5cq2MW7JjnaPAVx3AESvZinqrUEt3TJqDjyfoycuDpthBSjxZJ1kbeoWoXWX31Hxb3TQkEs",
  "key30": "5fASk5SiBw5E7BZwqy2ja6w4tktbw67d1dGQqL8yWaa5WfYiESvFbBpxgBrQZac9tR38MrJmSARGi9uLCiiiFUof",
  "key31": "4wY7ak8ux1cqHfcHon49p98P4zTjPAAgQCjNnc6Qk9VcMQxvS8VUPqsQeuAH4txazC2SqCzkGBrdmg86WKBqSkZ6",
  "key32": "4Y7jBfVpfiS9MZTpkRGQGZpV1q4X6dDSHvHY17yGE5BnmMuR9i7yqX7XeenMWTkbrMLW8HDpXLvMQGQZjvbKAcaZ",
  "key33": "54EmJ32QTa3ebgeQ3Eoq7LvqeZgMrTAWTermGN46DUZva3vJDfzgguVg2JLeGfUsrcw2DE5WH3ZjbQU25fXc8cKE",
  "key34": "Sk4M7et9vFCKkTiqZUMd41Hxa3HmrbyNYd8KZ4X8oHJ2ESxfWoJnd8mt4qq6414WZeSNkyH4AmozV45dqkrbLMS",
  "key35": "292CyJQ1dFWBf9peybhismqVstJn2NVWUysFASyWmszV4Mj2feVYcTz6xEW1V2kdq7UsJy6DxCioz6mnpnvr1RaH",
  "key36": "4kVRHB2bEU4r5mEeTjy5N6Y3ertkCfsLjkDhM2MJn8cDZFtWHaGwsYaubaZaAz38jUdAKofBQ9cSTaip6fBgrAL1",
  "key37": "2zxdpCYF2JNaX1A4ApspqWcB16YLGvXjY6FzwbYeLNrtR6TMcHWutNBu8peVN1c8YVvYkjvGwhpJhzJnLZAmWBW5",
  "key38": "5ZWWpU9XDr8BpYwoe2GytMp7LRMFkEVx1njBV36d3ex3SgAqrQYEuN3zdNNXSPVrAzGzp1kaJQdr4L1c6H6MHE2U",
  "key39": "3V65UW3HjZkTc3hmy61r9KC1Ydqtr2z8PGTefn8oYW1mG8Xjgvf8zneyccQrdkLXAySRqo5Qg9DpLXEcbnZaBhHV",
  "key40": "FhUyJRBnCPsSHRfS6ECtzfakkYNHQo1Ah8X6XGBoHZRXaKrTx6vLGEWK6PqQyRCuQzsQYSbSBd1enb2SCRVCqaV",
  "key41": "oRbZzhqBWpgJeyqoej3iyy5YjNQBWMcnARf6Kft1EG8jAAMwrCiL49o26RyqMF79s7DVwGYwAo8Zpf2KB91oKqH"
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
