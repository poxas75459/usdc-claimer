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
    "2wXDghJdpjgRS4tar5muYZ7aQzHADSwyj1qMuurW7Ly767H4K5am1wAmMmttYKnZmr8e4MgQPcQpGAmLjjvMQ6Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLQB4xv1tgpa9sZwbvykpnEL67mTiVUZx2GTBRaBCg6M1dNqKdD3n8p8Wdvfi5nvMSjA8mMQqjtxnMup5jP7c5T",
  "key1": "2DYPFJ7eX9UN6Wip6YvvgrGzZrU9weYNp3V3p7r2jMiHWj7SssMxnxMMagT1LM2enD2wDvoygYVXGcXQGLWeEFw6",
  "key2": "67iRH4g2umTs2VYR4a22mLog67hKLqRRi8z1By9N8Rto5QaFCMrPcXNUK55YFcjy1BJg8mfUBSr4AdDNr9EcBMT7",
  "key3": "67kudBfczj4oc5n9Y6rPPaZEXxUaudMW61uRTLVfBcUeGxAgZmZ8uywznsYhLb2KaozNa14A3esMQjUEy2WwHajr",
  "key4": "3HX8EJonSKBRniUX2xeFVnjuaQQtvE6N8SQow8GiB5kZ8SQqjPT7gPYsj8xhW6VuPwX9n98eQT7nMmMxb8kKb1iX",
  "key5": "Y8pLhHifkjMuuHv5XmqAndebAnyWUfmzoYL2H193aMPPpNiEMVy2AvwTGCgYFwpCvJJFsN2GqqaCKBpr9n4dTru",
  "key6": "2aRDEYQR4ZbEy9fEV8Xs4V5aR3dQQXCWMfp4dU2PNtEuwno7E14a3nrej1eiNgvNYZ91rzcqRj1TmHAFD7T9iMg8",
  "key7": "66etYQz5HKreKaba146kW1FkdtLPxbDhjrx5KZbCgdE97Pg8qvhWEMKSQcLSGkNpY7WqJmL42ZnCcUSX7QJmmhYT",
  "key8": "2wkuD3zVzodGLQ7gaa5vhq6t5mcDp3HNsCR4CR94P5doSTmH7nF1UoGK7VfsCxczNwYmxRF2bqy1kVPj962STpRJ",
  "key9": "76BuvDuZ6yAYJ7eV23DpnDgFmfynkaiJBTEdSaNP4vDHEGQBDjpJf8RR1Cqs1mMwrcNtJbKw1rRm1HRWK1F2wgG",
  "key10": "4onnqxihTgH5YQWMUXdGJ8ukQGJ1MTi7wp5LcG9CZsFHsKPbsLkDAQTJwqGGRsg8D9aaLur4XGxcLG1RQUA1FZoy",
  "key11": "4bZ34588aRb5bxxeJGxUYQXqos7dobezK9aj6WNhubcRenR3sM8GdC5qbTLsYi1HZq5VaRpFouhjLkvNQ69mhC2v",
  "key12": "5QzcA33HpG6aRQqP5x8c5rM8xn54RmLEP2uHbBZv1zQCJmdHLDeqqPaVuTMqeYamBepyCjqes1uK5DZY2uBSLKB7",
  "key13": "4nQuReSjK5uLND87dgnYaTJVs9jc4fC8dZvPFYv5d2by9ER7j58JyR1Cwegs2kf4xAhNqV1GFRDKHyjMjJNTKCbh",
  "key14": "4go9yhwMD9Z8GjWxUdNNvJp2N8soQf84c4RhFKb428jChVj55SpfR7wWCXCV7wmBNbtnoGLJfSR8iV2367rVCLSK",
  "key15": "5PbWGx1iW7yhmnyi4UZAjqMvdy7uYS4yXQqzNTDwP9QHRrFAcUwqFy676QyrCnNkQNPwSCw8Jw9opg3XbvqhQKm9",
  "key16": "58yzaMyBbnFcX454PhxU1LtUKT7BXkDKzNEUwA9fNVYN4YPuWhX6td3cxCB762M8cM1kfHQKj83nZKxvAwfPVZnE",
  "key17": "2UCTEwhpG9kAeDLt2BYkzniAjxvKytcNT8ahAmasQ2WjhbCQvMd28U6aPkzTBK9SzAnbTEzZFNV9YQNKyrBK13Hd",
  "key18": "39NczRo7MqMsZKYxwqzMLm77mesbFf2QzMA1DeKVju6eiG7YK5thNQ9NnHpwUHGbB2Udif2WNF4QbHX5Pvna5HRp",
  "key19": "4C8FFDx1ag2iHNiJsM3VUJmzhfRDX7gMzzphjL3hpa5ZebYHygqpngxwwAKwbUM8Aj9xBvhnVnJQzGd1ASZNBE2E",
  "key20": "4Zu1BRxeP1cqY1UEW4bEjEW2JnLH9MG6MvFQJ4nbzKCBAMiR7mxLi5M1ebNaKyF5AddviCasSZ4bgmZLupzKfjxY",
  "key21": "3wkgKc1nEJkxdki3SN1oUzGqoT5NAydAW8LEchU5FwnddrE8xN1fbV7gUiDm6iuLi9yZ7e7xtPYrJBbMGomHuwPA",
  "key22": "5D371piG7b9orpP7fLi9EH89rxJG98aeXjaUqP1dBdnthhSfPgRmB5gn7361R2GkWWKRHRAFmEAkHPVB57LmCkqD",
  "key23": "5hdUFGZU1U535CPH4idq2ftf5F9juZcXBzgJND4tY6wfAz4kWQYr9MhVQjaoDGNmgN4kq4C1QTfn5LSjm63e1CPH",
  "key24": "39d4GCKT3nv9wbsb9Z6pxBxRP8rfbV3cXM2ixZbdNWxteHTVVA5XU6acy2j3SSFfkLjBRrK3pptQjX6BDsoF7Ci5",
  "key25": "5rSGN6gZy3ysYNToLUZk5kQ5Kq8AHssRvPpJm3Ayu98QYSjHBdjUh53HQthzV6HNrTn6ZwT9e5nVYvzdj38kbBmT",
  "key26": "2vd9kSGPRcDp6vuEUFGndrvbY5yt957rTTKKWwqQvD9f2ABbg6iGkWqsBVt2AHwzst6cDsbi37jj5rLRKZdg1fxZ",
  "key27": "4dN6zAjxJZg5jATPhqbDAnE8EA99Vqv6H77R57Z2qDicKvP6yg7Z1Mhi3WHiK6whHZsGeFU7iK5sRVJiqXn3EPRv",
  "key28": "2iDgEcPpoH57chkXmAJY7XepSg48t981RUHp8PhpmqiDdGrqtNB2SHa1o5FhzZ7t82TXyiLMheLsGtCXBPeXBBzZ"
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
