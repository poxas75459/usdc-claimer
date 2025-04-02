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
    "SAXKdKmos4vVg5AjRxJdB6fEA5ykqmvfJLkw64qymuq2arUpn2X8dANEn7YTTy1E5oGrGnceQWRX5Da1BfSvZiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jBezqWzy49uexy86SbYf8yHy1zx2jfwjy57wrn6ryDzSwDbtU6mbb63QnfQQbk3M6mLRdGdPKrs8p7wSSzmkns2",
  "key1": "3xy4DhvpCjspSvTArAriJLu2q72k6tN3th7DsKM7PFm3qR2KHmp91tj5TQmzWKhtm7JAjDvCKi7rX6b7mDnNNfwe",
  "key2": "cSN3CKbfU9XmtHtM9zWUPYzLY2ZndKJmptPSYctZfwz7BEqyDoht3HK8yKtYtTTP6DNVEwBdQHG859WN1rwXVSV",
  "key3": "63CZr78nnoZvEfxUcXbSn16t16nhxWEQXUmaooCZ3DJyVQi8A4q6kRnN19yifw4QAoE8UMx9T21BQ8sqqNupxVk4",
  "key4": "2aVdbUKpmELznbwEFGxhvVwnwbZjTqGBc27o9bRXvVyyNmtw5VeZLQYrhANusQBtEjiTjreyBDw3tZKtrFt1v5m",
  "key5": "25CyffjRWY5bv9pYbyop4xX3RQRyY9ARKiikttEr47NuZVz7Fs167c4n2uJxZeGzRHma5muAmAczkxhcsXcop7Eo",
  "key6": "Drw2jdyiigpweosnCzV5WXfrf1RuHntdUiUBqn28iUXujkWdx12iPVYgMeLU6Fpq16SZXpPvsyF8j9PZcQU7v9Z",
  "key7": "4vJe8oqSSBFjh2U88dUJkuB75JBeKBzZNtRRE5gwekujgh9YU1eYdHBAXyANCH5aR9aoZqWMo8eJJpwMMZE5jgBN",
  "key8": "2vp4sKx3YEZzyBaFg9WM2LZhH6VUWBdyEpiBVy4vqSYqFSyM4zpZcexUC5jpmKXw2g8xgRonkgQ2G7f9UdT4iuwz",
  "key9": "VJLnxBRa3X3mhM6APnJcbUDPTpqdxs1Rht5A9MTGatnZhYbMGd1pHRWfjxBVXd4ePHanedGG8m8tUGeP3L4vHY3",
  "key10": "5HRSRwHy5EQtqUSM9U7z3wPzi9htDthv72rETrYV6SpWErLkPjEiRxSR6bAuQTXErJc5WQwqhsAXGm6gZ1oL9YrY",
  "key11": "3Sd7nsm8HEG5B7CUC3vyDKgNxJCyQpbT4dWKzWjgGE1q2y5hY5wW1MxtY8SXbvaibwc7VmaGJYqWWv8Pji4CjYjz",
  "key12": "242iWrKRN6CB1pi7c6ssVNi5tV68zwS77xTnwyNn35uWiTn2vCVCWfZLHfe1utkGcTjjANakNXqetoPiSdWAq8yo",
  "key13": "3VXidCpgXhPeFL3DdYhCqHDSjBp1fu8jTPXSah3mcwfxVeCZwhvEb7KGP24eKoWVUEiaubwUjXMSkn5K36WRV7Nw",
  "key14": "59wQG4fSnu4RXTVxCBWn3i9SB4hWrP9jh3GGqKLfWQjv4i6N1EKhwL9X3kwYSxZXaPpRDJ1EBCAagj9cc2PcSsK8",
  "key15": "4FSQyTfvvucXoBrYiW3xaRM3KJHuzUrdPH3A2SSn5Q4Gnv6euo9BuzGaBzKRit3QPJCVniSh3EWR4vLBbXV1uSpn",
  "key16": "2jYwo6zm2E2QMnVoYpNRHahT3kfCaoEMg7PpAgXgvyFNngVhWf4iWAGuUtg7d6f28RXsAb2mQMDUmf2LA1d7Uc9r",
  "key17": "ZZYBUdW62mon1dt1deMqHCR3yFjDgbBJFaWZ1JRmhVLvKbT8SrThqsLk2e2BHyPKMnYESfGv9HrH8BnoCkbWvbs",
  "key18": "3fRzc14jPf9ZQDGNNAUiTKLqy2KAHnoPfBeH7DXqKLwzPFA6NnaRiVzbbGzGZ4PoRMLoc27if2dFSMTAqYv7WGsT",
  "key19": "4hkEBSDFc46mEqjk8qhhTAwskGKsvtt6Y8D1A8Lb6K4sWFeuuMM2qfMXdeY2JHSv96uZHFaLxun31BgKGk6CMbmb",
  "key20": "2TsqYBRFTCZEJoMRBL3C7BotR7cpDcYKJnjtAMFenbuQijhkTQy3LUhJHj34p8QJficHWKv7AKBuuRXAYpD4RvGv",
  "key21": "t4qRPEs1YY2Hki6TGCBzzF51MMMNtTNf5ujTnBnBobubsqRsPs5BomK6MCLc5cJ3q3NxYL1yKAzobHQ9vzGyBWN",
  "key22": "5dkmqRrX4pvZ9J2LVq2fRMNYen81UkHBCyKwhpv9v34tHchBUXk5PsVid4r85YVBU4y3Znkkx3F8f4uJMHwAVtvZ",
  "key23": "3qtTFxuVn8J81Toz7C7rvqDNd2w66UaPYEWHsP8U4JZmZ9fM7hZn7aqezfJk7kSu7HEmWzaSAyCFtzUWf9cbp1D9",
  "key24": "3wPNafzra8umSxJrvu7wiq5sLgUcQxMf54FtmHtSdjfE48PT61mGvPb6zhc8UeQX7NWX2pRuEFDf8wZiCvMNtaba",
  "key25": "F3JrWKkZMg7ZoUuk9pJQPCWnSnht1ar1kD1zw8ozeuZ95KqjypofLaZ7pQVepwZUWLBVB8ck6Cds7yb7dJXfMTg",
  "key26": "5z17tCjq72La5mPs78ye9LQL46L3BdxEXvceShc2VeR3vHRMdYT4cHynnmUzQRzhrkVG3P2nKK7hNokyUbesmQ87",
  "key27": "3tKQWLyHJzs2oCLtysU8eeHnLjz6duuEnYtbJfo2DRZTQ38bjF34Mo2qC8tiGL8ZshDhgNJbhR1qs3JxGQfbY2yY",
  "key28": "5muTSQku8fT79G7JprxG5DAx7mNwXdPk3jqZdWTcC8SMUeTpEV7EzCKCkhmZgdVriWZoDd4eZaeg12umWeuFBQSn",
  "key29": "2nLPvhKgBTpGaSHRVqCN4sj9P9XRBsp1ZMXfPx1LkXhE9NgFqwnkgp3wgLxWmXf5ND3eF8EKqqkqNagnwJqT3961",
  "key30": "5bYxKtAd3VrLwux8mhZ7ChkmP1RtLpaocCjmxgCg5QzLc3fvKs5TSHcpF3PX8tvZb7FC3qEnjiAyzrxAeftj6er",
  "key31": "5CbQufa9Ss8n6qiGnQUqjJJBKgkW4PtNjceXWMqAvGBYrwovLTe9KrGEMoywrKL9RJraAzqPgJuNEPrVSwRX286S",
  "key32": "46Xf4tCghdtN4Mgh9jcHG4pANzsXfnH8MSMMTsyzCK8sqzJgAKT9mJRYdWntBpCzEHDN1SWUybmiENg39ZPfzmk7",
  "key33": "2hSPrx89Us2sqEFZJNbL3tJonWMztWr6sifcQXqsaKj6tFZ5LVBiGDs895BJtjH9DJDfHtzas3w8YsJjojrsRVvx",
  "key34": "3ViNQm35WFoWM8oQeRryDvYbM27vKpLH7bznfwzvhEgSFGNWpgoARLRhuX94Lw7V36dTcpdDdGeruXrXBABHJwgD",
  "key35": "5skRQpTWSinKh66rQJPwHrik46pan4KYEuyEs1VjqbE6yghBbhg4JWdTyVLJaFR5FtSwwWwHRY7PQVHTANCncPwg",
  "key36": "4hABtATvsjbm4V4hzyNnyYJh85Yb2ot2tCqEJbL9U5PBJX5Wr35hwfeVoDFNAhRfqnSPAWS2mNTVEpX3SjxEyzU5",
  "key37": "5AvqrGGfRfUZBViPJRcwUCSXQFzaLgcqDBF65tbnkU3m2h3QdyCHW4qLBxHTxFDQXbcFwnaMz2CUamj4QpeTyxTi",
  "key38": "4ohKywzswjtk2BYn2SfQNCpqmqQ9buqui427tiqjCtUwcgDpuzEHYUfMWHJfH8j8z9BRQmXGYj3Bmk1vuasy3Xsd",
  "key39": "4VZ7jxQh5VqFqBfwT5t2C37XHGGNLzE59bRFA29uVfjthHwAf86LH35sDn1M8d3patZ5FMGR53gNyxum176Z5EVD",
  "key40": "4h75fZmrDw3dDXpWxvdxKJwMbM16mHpd3k6aXdXsjgr9RdLU6figTSowtep9N9yCZgwZF1UiyJ712UJvcfjDraru",
  "key41": "M3Rii8utDCv869BtbVAAFCzS5ZKGrhuh2mVbX4UYm7HkTcNZkXL2iUjxtwpbDyDpiWLFLrTzXK3xzE6NSHArCKn",
  "key42": "2c5gWWqUUMeXP2Dtt5fHZyqNQH5XiCV3fRFaNN6gJ8WniAkVzZBKjbkrGgcbYCsJucERCKP5MFJufE1UQWdidqjg",
  "key43": "3zMFrn8mfotQM4u5XoiJ9kDEEL25cJHhZzfM76wKqpnYALWCwY6jo8xHAFPcRvUVFmXgsuUDxanv2u7i6mksnoLn",
  "key44": "5XsDmH6J3bB7951uMeevRxYCi7mqbZBP18EizA1F37tmQoGxQ3wnYgSjLvSBefx1F8dcJnw2wdYbMCXEr4goVH5Y",
  "key45": "4aaUnrRgeDuwb3zjxw3SJtXkREWRMd6DCMjSpi6DqSy9qh2KAbDjjcFon7BJtq9Wcyi7R1FnAhGm63ojUQvtHnJV",
  "key46": "3rKTFsqcBktTmZzuimwGjLxBU4XrEzah8FbGJdiNStKGVabD9v2S7ADnJGikQZw6AZsvbpfXKpBDAf2NLRPjcPBH",
  "key47": "4ZSTfWjSKmkuajXGEjoP3dXBMav6L8o8C3BrzgPnwreQaegoa6P2pa8nNLwtV7pLEjJc5hR27sShucyQQGbhm4ep",
  "key48": "5DiV9kS7GeBMgfn2FEVitfKrmVtDjfCEUTGaQvouFHN4xf6f5rt2VX9LB4LzX9gB1D1cWf2X7aYsseWQDozi1dhp"
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
