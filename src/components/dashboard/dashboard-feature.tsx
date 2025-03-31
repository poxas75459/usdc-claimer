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
    "2mrUxE88KcYsY39KqNffvnoXhvQeCu358MHqKgpe6z79o9SuLwtQavkbHAcbZmiEwoUG4SF7huZVu1foDDWcZ5ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQCWP3bfMy5nDeVmki4T2QBAp1D4zTaDH6wBqwEwgtZ7qhLpiczbfZqzWdqZvmXAMU5BGkLVJT2c8WnFSjbzbR",
  "key1": "2UBpHjzTyytJQk7SqdYGFYimyCjZmzoitSE8EdSVMUqrY1seicbW8hX6etx2mFUbAkHRxew37pWuP9YVRZwjJ6rq",
  "key2": "3a6FFuixHVQPdka8yhcdgtAKLx731EJkHhnKbzGrcpTi8DPgngLDtMUyank9vVwjGBRpgx8kXd6NURoEFCZcemPW",
  "key3": "5RCkcXYBRCcJUWj1EKdBGJXaYq367SwsTaNfcBBM5Qh5QZcbVAPMQNoitH6zXbw33ZWFkduHXFgTp9hPJ8WC8HxB",
  "key4": "h62rEwFW9cTrK3YoB1qhfBmGnC3emx3GMGa3L6MSUfqH6DoJpqFZQTFfNTHGBK6VUsfZ4QVNj3rBqBzYWDKSrsA",
  "key5": "35zzqPBYNH1waKAsBiqYVEsVbkz3ZDtKYD2cM6Ud8LothdB1SWTJszZnh3VNf3aXro44aRynPxx5y4E6wkUr751G",
  "key6": "MHttsEjiusG7Ej9LBH7ovoK9fm9iTArrDjVPQVgsjiZBmDXU226HvuGhiBkiwwj7rvVf9vPYnDggMb6LR3Utpac",
  "key7": "bo2CZHGacVfMSRuFJX11Kt1Mjb7zQd2Ave1JCtmkNysyy2KUeeB9NhePWP45rzMtR7Q1XLRhKx4MNC2mEtp9Fzb",
  "key8": "4mZBiMrh6bCweVpcWSXT3SNjuX8qKxJ7FQAFLboJYUFm7j38BpCpobkwyX7PXuFGNrfq5kgnDU6eFypfj5R82dhp",
  "key9": "DLykcrNp9iTjPtwQ3undtsvNtK47j7JnKRz8EsC77fQX6TY1dRmKQe3r9uXkoYzez34NXSi7XBzFFu2rSiAPb7D",
  "key10": "2vPi7WbNcwXQmZvnmmJkFaRALgzqP6jvWj8EhTJQyxZ317ueGhoUAxyf83qwKSUMQKec2gJxo1vjW6H1B99phpT8",
  "key11": "5sg4aJGGYH394xBND96zkhu2grL6WDJwdAZnTYTG3YUmQzBmuCVYrizCW9kBef2Tc5WmQ1m7hXo9xm9PckQJBSwQ",
  "key12": "2YTFsWm3ehqRsR76ccJqCJadFqCgqiCLXpAYBSv5zpcr3YXxkYfw3J4vExipN5AWAUtMZ4CESm9W5VaWbod3UuZv",
  "key13": "3Au5vgxy4YF49A7Fs1zsgYTB6g8ZUXs8HPQLTK4kj2CPYa546xomYqKKzBL1YGNXHKaJ9qLxqHag7VqBYLVsaPXW",
  "key14": "3tkyaRdx4CBg1BiyhMx4jeheBKrFzTMqvu5koJXfDjBP3zV1ug4PjyGhqpacrER44tvZMH8gZmnzntsbUJ1NjXta",
  "key15": "32X4JsdMU36Mt7aWkUGgAVos5jZSmY6nb7DBXXPM1ns1r4BTa2NwTWsH5VyTTZgZVpHASuwoiwbgnPcNRTAELM3r",
  "key16": "eHeJjCc6ZJfvFY1s9dQEoepy2MkVJy7WMC3Ni5tppEd3YNiYXUAiBnja5JVjUjVUKkZBcLoSvKJWv5ptWZbzeB7",
  "key17": "5QmtddqdqzCq1StE2JJyYXmvLenSiE6MhkWj7Ht3NfXdHefmkd7fSUpWWf3zeXWEw9NufDG57tLPzGFGg59Mq3L2",
  "key18": "2tXRi9ozT8z6QnhEDjxUPs7bwoC9pcziGbC96Z2M2RB8ejwQ7trxMWRmV5aFPRV18fZ2ATAMZfwkXsp6BuUMNxdb",
  "key19": "4fR3bKYwyuiAY4Ln7aDH4snr1wNQsn15Vr9girzAuhPYcFHUPzLKybdbpszdW5hhbvCM7khdwEzEnxS8dMJc2MAS",
  "key20": "3nDBNN4R2VfF5YHUFx8LDEJSjPE9Zn4RFvNDCteNVp8zW1oLJSaRxBWBatTA1i8VbvLwb4mvHn3y8DuWKUhjdck4",
  "key21": "5tyW9uLqRAZLE4AXgdtfKYpQuGBzM6c4uj2J5Ua6AQtBroSoeVv5aPaTrHujeGQu99L5yTNbooDczVtNpQyHV2Uh",
  "key22": "5E2a14N4jWbhDwn3vCiNunHWjpgWj4j9c63YT5VHVnvVujspbe2NpAPkNMaDGVnSLwcfi88LNpQGw7rLM9Fsj9qi",
  "key23": "5Etr1HUQqJmu3JLpejtELnoV6LNNvhpTMq7cP6Nk3gxuQhVwFPFAXZSkrvG2pd1pkt6mhcCutvc47EaD6U2u7VtT",
  "key24": "4VH6Y3e2GW7zifL13zfDuv5WcqF8oggEKZhPxkJWg469RRAzRe3SpyybigQMVG2be8V3bNHMNqTsfRsms41MiiDq",
  "key25": "2ofggnGmFavM3Yi1YgjHxLj8vdauSUyGasLfbtK8MPM2tFrEEL9sPBKbCsuUmoZN2ekpJsTrivorp19Q5N9ASRVn",
  "key26": "39GB2TLMYbGJkucX7PGCWqtrqH7WPiL7PDL2wkvQ5AnGtbBSPP2BffYeApyJQtEfWVpHriq3qimWeLpvWkGvK7rT",
  "key27": "33uKdrvLFAQhhBXfemTgJLhGvYVcdmQpAuKUZ5bbesZyijZ57k9RsBwG9WBQQ5AfUCtpowmsEPUDo2ZhbHAKvr4J"
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
