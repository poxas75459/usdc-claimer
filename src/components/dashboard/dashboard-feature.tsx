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
    "21EdXLCUmQ9F6Tr4KBQjvNivncVTm3zGHxeH23B8rPA7VeMyjXvHrN5VY4ipXrs9Xxi2AzkAhPw6QrGPNkvXfaze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyRiUrt1EMAmC8MHDqwwVQRMG8vjnJaAoCEqJK3DZsoLdi5ZCHhhGG7yiP1PboRuPCKpftoXvUs3pjkTkiWYugF",
  "key1": "31DDPYjYAt2SZzkGSTYGkCMzQTXuyQT9h3yK5eJ9K7NDCtRrjnHSqkBzbRLiDGf1hCiDkpjSbHUqv9cH9xExnNAC",
  "key2": "21XyFzu1yyfQ5SD1o6CUof8rCDh5bJ4cN8fBVnSEZnMF9oRN9Y8A23cdvxqccVe5uzGpAfWFPwpbtuHGTw1RyFsz",
  "key3": "5Y2J1jfENYcrUfjmgbvh5i6dYcGwEQSSuJkjWAxTyXfNXtFRoTLw7UnnfJo4U56kiSLRh6vpPa8nshnc1dNAvM1C",
  "key4": "2us6thkR1JnjVEUcuWasLukbv3BPGQHfCJK1dC977nzEzmP8caCPAv5YmnFjSUiHqQxY6Hth9d7QaK97xMwHxrRQ",
  "key5": "U6MPZeW1HfB1MwXJ7UrtCHv2qTg1MVdSGkuBzf3FL4eaj9MUacdDsPHDuwm3mP9mKRof9ZmdEyH24Qcx5kNHCZG",
  "key6": "42amNnejXB1rvmQtLojp94QnrHb7R9oxGD84XEnSQRvvbFm8QRYZ6zdUqBPuW9neTaGRZGqY9m6hUSGbgXHwGy8Q",
  "key7": "5ZWqKzphwjGRyJCZpAxfYXkcGnzM34pHbZwNQyB7Aa7umuGygYueXWWaECSJY7R4eSDhWawxydSUJ13aU1aRGLcd",
  "key8": "4ep5sBSi5gk53o6yJGpwf9ddd8HKvfmaRj4zxd2AYhJ1j79aqdqXwPPf1LidZfXroRyUvDGjH18NUqnJ6EZeiFu7",
  "key9": "2gCvxDmtAXS94vDr4Yzmh5Hb9jUp6fonVnb4KqNL9yxEu7xZowzrQEejDxNudPA3VUsKmDd6u6ubkrDsa1zCsW8q",
  "key10": "3Vc8XAMMCrSkBfnkV9k5oLFno8Zq19GAbxJcYiQXnFwZpdEhkvgZndBwCeJhN9n4Ek4939LEt5b48rR9ce4gj1Xo",
  "key11": "2LAMh3iZq3EqmFrMmW57VC8BaY5m4SS6fV1tx38giKCMmeNP1yFq3dYc65WTBzLBMDRJqKpVgJ14hQv8RUnYCVmh",
  "key12": "5Dvbpfxh4E9gGjheiq2QzYqGVtv9jc3UZuniKr5WdV9bdXkgNoCQrAuZAyysw39bC6SwgKYsn51QTV1PDfBUYQh2",
  "key13": "JCoJ7u8LDD3dT4DPwLDffbY2LadmpUoPhc3F1w9rwuCsYCNvUTdLCQk95EdEgy5sLmLhFM3adcYazpPFipzHbD5",
  "key14": "2rvwvNhTWfDBGmcTk6iXDJL6X5ycPbqTFMAG6QGqGaeCWheMSdoAP7BvM53Qfxxd758PqFVJwfsA1yy1UDL52CAd",
  "key15": "37nXuk3Fdj1m5TULtJ8vKLu2ZLonyiz4adiAt4KGN7qq5J3XEoKC9h4kvqY3ifJEmegxvPTRn6YRsfoKwX25F7zp",
  "key16": "3wtuGay4x5XojrazM5jDVrt5CieRBhWWDB1k5mhsbXc64UDT4YJQWbgfKwtTxKikmq7eUt9xY7bt3gAfZCKYMZCD",
  "key17": "3xZbDsvzXo2tLi3g6aw4tbk8W96xuQajRYFvsL2kFZUAhBJ7Un7UstcLYWfbbtExhVg6u4AUjuvttfR5Pz2Es7vR",
  "key18": "zNz8XYsacs9DwYx8g9LfTMq8hVRXxqMVbcLZRRqNsHEzDuaFodu7CwUiBvnjvqvsqyy8L1NXhmk7deymdXcwWyE",
  "key19": "GPtSh95qPVmk8WQnrNU4Zdct9TZuXkPJnJPD4DyBMzhkH7em2MaPKkGEvWkLG8sZCHtboCfJSEYLwX1urYHBze5",
  "key20": "XFuXTZJ2JueUrWewLPbBH1XJZtJmqhPvnRZf4BtF47ipLvi98QWymHGHA2RozrFo7aPcpQJU8e7xNTVnJe8gj6T",
  "key21": "62qCwPUu8ajf2yozqo1DyufaoMRLPnjMEqB7A9qXV7hj2N1rKsWQY1rgWWDbSNDTLaYVUdpddy6tjZNrq43qnEbQ",
  "key22": "5mk1K7DStDTVHBbro8YBQzBsEPnnpsGYYr3vNwwRLy69Dd92Gjyg6XDHBicngcwQK2AawuB1VbCmGZZtA3s6wXL7",
  "key23": "2zB5bax2wn35s7654wR8Dats6MLsVXEsLffJp9MJQKg1DPVYgQ5VHeUVK3ZQgKXX5ErzJ1eK4DmvjVuVpxm7AgVK",
  "key24": "5JqCfbTjfAbkVvRfukhjpomYU8xi6RGwPXSbwuGK8aQxy4GxKGsZXod5Rg8rnwr83wGqvwx1riq6jLLcCy2Di3JR",
  "key25": "4dMpzLRG9TJBw56Tgjb5hvQsW4oi2SwCVJdV4MuZrKUoSXrvUAHJyn9G1ZPgtLERdbTMbLJ9UPN8qEUzLG9KpK3M",
  "key26": "2wHmb8QAjKMyd7bSJ64eYdgdbuT2RQUADyHprjCMk5pXvr8F7vPSvAgPRV35sQ5MuVYaTC2aNUtnRwQVDzW6y7gs",
  "key27": "5mf38wLVot1wLCduUEGteXE9b5gV31AmTNM3EJAn6yQx76YhUFKoNQGn8kSUU9dsZo41BxDHNZSSdCu24dvHiPsm",
  "key28": "5nQxpZuY7YmQ6ZdA81WsV24SFyZCz215Neh4EH1ekUH1cTaxwoGVWUBEtG5xqgjogYdxXqXh6pHw7oo7m1BSZ99",
  "key29": "2uksAYnc8z1ESS4fvMp2UQvxrMnkYiytT7ytfiFP1zs6GjB7abYmxXEJLACWeaUQbhtc8AJ2Py78158QpS4iZ2M8",
  "key30": "4PCJUmDsLWcebxgR48kJxiiAbAXdmvSQ1fNQuHsycRYU5uLqNWqEkZmiK5KcrrbXPkWNa5vYnwDB4K6LUA5Yx9jb",
  "key31": "5Atnx8sXqK23yk7nLhh7c5TAoLkfeT7mbsmxJz2WdZmyKQ3A7vKwtXkBS8ANQcUWbUAJZ6LaBXYdFk8apFN6iQG6",
  "key32": "2XEME5zNrfGBnWEWaHe6H8A4dcTKzBt2fjdJTM3ptTYJ6Ej3qYrSwAeXyeuLKATbXNHoVLfyVVUAeSMtqFSu32KG",
  "key33": "JCeArC6QctmB5PHhp7dVd9qZF7zPeiqdeA46fw5ME5TA4kxmYYrnzFFjzZ4vUNQ3vDV5KwwqpHNATwhXgbkxHEn",
  "key34": "33kKGh3e8dmH84u5uiPyxKMzBHKDFKvxnW4pazN1fuvjrUPJLdrBeEtCDCL57GGWveBtmDgyydcDDxWR3AuzjDJZ",
  "key35": "25JttwQv3oBGp1N3t3FVU2SpXCtRU3ogHjdomwZbbAZ6n4TfBSefhjAsUmEaWPe3nCSQVYUhPByDFTKP5EPFkQjT",
  "key36": "Fui4E2MjHB5qZv5hcv1mKR6iLuhkTsenQ8FKSr2xbJ39zxApYqvF2Sb71HFwNTnf69tmbcxX9fMaEo8KJ4GmQRH"
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
