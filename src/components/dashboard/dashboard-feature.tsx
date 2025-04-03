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
    "4nVUxMkFEhCqGBLVxNqDyfyi7Wqf8ZS6GhzET9wiKrgDsuSCWpTDSQYBESJQbKrGfB3jaBNDoNSFfeyWqdGyzVSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QucryhPoX3LCMdaPfbzBGbgH47W812B84Sn4KQhbWmRLrQajPmtqSp7duZ9P9m9EbF9AfejffeE2DjXG7fe6hyb",
  "key1": "6T7QAfAm5C9MvXe5d6AdpRdoQWjhJ54YfXJuhwMc3netyW577bJNSB7cVfcLFNRgWQuUBZBmk8rLd6FNKMxXw9E",
  "key2": "4nHUyutoHuy6ExU3hTMusEbQZXyg38F2jfG2j3fayuYjdorhLD9SDjH7uUjD96cqLCaPea7LzonP6Qi6raFHBVsZ",
  "key3": "4Gqx3ZRvw2ZNYuYKSpo4bxJg7VUjYxPVNTUTW6i7HNnVmuvPmJeudXLiHFgaysHRrWCXZnTsS9oZfQ8jC4rxJRkU",
  "key4": "4ADXdEdXWULUapP7vBqHiBsi1s5MBCFSD3LxWdLTn33N5gja8iioSRoMuBoiJnjxiQV1sSeqyWoiBvfk9UQhMX8F",
  "key5": "4Ln5HYUsyTaVUW78pEmfSEnjsgjeHAqESSJteNjmF15vvijifook3HPhcTpJ8hvSdEttqzGdabeFyrjJFyHqeMnK",
  "key6": "4KjKrCxiJXksJxExGCB6kAJbDDhQnsugjddPA1Xg6P9ayJk1u669qSgbQ5y2QCroGNYRMR1MMvjsL9d2VMUQwRtZ",
  "key7": "5XKKyPRoAUeUzYwPW4ZmV5vSgyrQAkVzRZAbp1FrMEcKQmWpBhGTqtKd62GXzR5i3tHdrM92MkZKkvbDHo6c9zqH",
  "key8": "2dqJ34fBPtX289nS8BbM2wXrtjzXoo3TfuPEWdKevGQw7a4m42sW7XW8Z9i51oQuV5j6KqfRmhmw3TKVEg7VDp1e",
  "key9": "5SWR2ruiDn9pWDs8eoSSB56vmT7wvtznoh5mh2KM7ePLiD1tzcaqBBAtTXqbFV25PDtd6hG8A3kkNs7HsomeFKpn",
  "key10": "5fqg73TjrgBX2CsrrbhZaCCShex5TjwpDKGZySaXLG3waXPDT576o3xFn5VSS5vWqTYQwv49qsrsUrpeyAAajpjA",
  "key11": "3o7g5dAdwng4Y21HUVWy8CjgkJhtE9CWXAJBd5VMW5Fpuqq4cpKGuMXmN5jTfKzgE4n37QNxrV9NTyFjZ3Qj9KPW",
  "key12": "3Z6GybNjZidTHqsoC5iFiXZisAgJzaaT63etBfpBejmoiGfTq5zPUzjXEZjTvnTymnFDvCNVxsGuF9g5phkje7VV",
  "key13": "2K6mTaEGmEhhEQVHccUvBjUKbzowuVHiHPuha9oHfQza1SVd9mGsJB22gmHCEtX7G8jkbP9yhwcELLrCzSwTCS1w",
  "key14": "3De7z1KhA2FPT4RDbmkeuNjZDzWsru2frMTBXvYxZBpAi9GKRaxdrdndeUJXess6Edp39yFCwMLYg4HyjoLK5P77",
  "key15": "Fzk1DHNmVF4gds2rXo1HLz5ZKhNxf5FcpmdD3yXSonqCotcEMMWL5zYVAGJ2emSe8EsC7pob83RU9Eqd7xxUXo5",
  "key16": "A4DroEiNHGDKGYn1bUgwTzyRdJMTLqv7eGQR13vY9ZmwbMWgGcKYJrve5M5JBT24RNdDdzdoNNemp2nZKF1EQSk",
  "key17": "2sSGXpoyfinjEx3Q3pU7GVRmUxYLK8EsjymA8RFHvsowg2RNqFyzvPRqdDp8SmqcSZS6MG2oek1pUwNHNvoxxTH8",
  "key18": "4ipimfaBpMvXM1CgyQQpqdpLKqcHqa9p6aqDaXiV5pEhfAs3vBk9Bq5GkcB5x9y8g39XtLJA2pxuvMj8dwJRP1DJ",
  "key19": "3JzMHaqoJeCrasq6tVLZUTv5BsCYF3vEKeVGZ5fsTEj5zsn4gYV2A2xEr65MW5DaQHytBMBopBvU6rsdfBYFbpY9",
  "key20": "YHHBHMmYWXiCexmjKq8FhojPHii5cBtFC1QH2xuar4ybNmNyg5fUatHSCecdAgTaETsrnRsVW5vhJTQW68JjoFb",
  "key21": "1aPYAhUs4sNMMwQHdg4ymm8MYHKgL1mBYBv8cKxrJa3CY8tDynhB7vD1vLCTL9HhP7auY6Z3qB3B8NguUU9oAMQ",
  "key22": "2yoa537uje6yHNLL8h2kHFd2meQor655GKiEpuYZhGZ43vQz9KE7oP1Zpma9fJtfeCTZXXmJ2nVVxNnoQkAPggci",
  "key23": "ugE5gA9rc2hi74qn2NZHQJSnNkBntPq8ZtppLyAgdtzLFPyAjqznBpJprNYiLa3PpRXREqRqSEdK2UcWBwSUHu8",
  "key24": "3rhNsmvAqq9mEq9xfEB1Yd3srq1zsJSkcXkjzqAH783bt4aNHMy6ZR5X3pSD8zbSGaihasJhEHSthDuLnBXE4aKu",
  "key25": "4AVH4ubYXDJA1waXzw4avNMWzZjkxUs62VZaMKhjBG8TnCZBa7RXxTehuPNngiVzSVFDWFswWu9tzYZpHNCx45tt",
  "key26": "4NcP2KX1YU5aSp4Y68t7UutMkVuCwiNEHHLe6XsDiJLVPbE77NiNjSxJQji6dw9ibTvsu5HhQsZmcXzJ5k4vbEoD",
  "key27": "5XPWQ791z2xTawv9C7m88s2VyuZvEn9Lna48RRz8ivYhpMSzA2BqYegggqZRj1XmprS91wjCN8E4YuXAovqCjeLj"
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
