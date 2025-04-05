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
    "2MMtCJj3rYHTiWTxG77cAEirJG2g468rqWYxwRJdgH4mCSgnZJKwwNUbAQbScdYyB6MrtA1esFCieN7Vpz9gtctY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZZhxuS9tiQvvVvwLRP3eU5ni9GQyfVj3NGDnttRyzoKPzr6KE6arjqirgER8zfTg4rqp37eWxtjJRHRuLZuuwv",
  "key1": "HjCB6NwMCM3CFfWnitQnGvmrdVPFhUJCWAadjxqk7SP3bQbR53s97W3oY5JbrsEnNwuuwhFQxH2LUVUvEk657E4",
  "key2": "26eSjEmSWP7eWqCMs2dsuYnyxjpH9vQYhE8qKdKzNqananF2yc8XtYMdJsFHay7KjJHDjHhn2z7Yj8yK5Foyz6Yv",
  "key3": "2UfmPGmScKQz2ScEeEMbW4cbMjpitmcDrAxCiGes2pgECYBF2KLencPYnRrbMEgxe1cky47uQMT6naccrADDiJiC",
  "key4": "3TiUdAXA4ZVpNRyKJmfmDZ1SS1uujAG25Q51vPCuEwrpBmpkUP74nyFREPwx4q8LzP78sLjygMzbucnxsBgcV6qt",
  "key5": "9kDMNvmNJbD7dqh98t55dx1LYjKL59EswowjXQQ2PNUiACJi5KFeRLJREjgkxnEQqWw8o8gzvZHymSvgvgA5NWn",
  "key6": "4pdv4dbbiWKQeFg9xaNoaRYKHw5pLKyNPfmtGUUzNtMpCj4GPLsKGqVjjDEVmqCeTk4GhognjLSF1UNet9TtqoZf",
  "key7": "21gSdVnTAsvMn5oaTjoos83GYSMw4LrNRqpfofB7QthQ5qnpwvxPmn9nMdcRa57pNqgu8H54xHjB2wsRWaDQ9jxi",
  "key8": "XFenEchT9DNQAormSEktiFsenti8o7qC1ErcaDE11DVWLZLboJwWemsgmpTCyuSawHkE7m3aAq9B91KKs5K4yRp",
  "key9": "5tmX1QYHwKZFtvywJ2z6Ly27x8gn8dfUtt6gQqSfHFy5ywUfGbfF6wF982auxQhA9B6fnCKFwWmqDjriK6c2XuHF",
  "key10": "FqssyZQLMpB7mYKfFUJf1nvTurYcwo7HVKpYLeRSVnFcgYw2AzU3pG23idehxbLj3EchLTwo2dpf8qytbEftULR",
  "key11": "5BMhTa9TP9T8wcv7myJCKwQJUBRAjdCcVLqqWrhYncurrzcqZWJWTWzfAnP8WwZMy9Cg5jdungvrPWzrQWQNGmC4",
  "key12": "CxhN3hWz1wfpP4yi1BxcvEBb6xrUrJAzDMWe4HDKMCwDa5nWx7Nr8kn2f7DAHUBx3EbJnsivT2FLnufwRcJc4N2",
  "key13": "2cNDAw6aXP5rAxxQYhqtpnp7WwwEXmF3jZj5MgXXMkpmVgRV3ZM8CWouDwCDywnFWWksY83ViUWoKC3egT7wwYEK",
  "key14": "KHmdgpVCQiZAFFUaVQ1D91HGm7DUk5pkaTnNr6K13yJp1DCqwerjnTcF2H3eSkHdNd6XnDzhrpdoEMaLsSvkVBv",
  "key15": "5uGm8dVvKXFqZ98x78jMATeTQcBhxjUNqt6UWp4PCxWmz4bUzLe7pCUN8xQZ2X9NJ3DGHNHBY7MqiqCedpNGS6qq",
  "key16": "49yd8oYJKmyvkKbgBdHBpWNVis7jRKFdJNhaRCeCo7wPc5nU7qfh72653NnnBWvRqcSojsxGksGuH1Jm8Y4uy3nd",
  "key17": "5nzu5oXW5VDbUfrifSaCXH9bchxWEqeh5L345XCAyzsLeudLo4scLJNtW8rcodMT2qtnTHoroUdLzoSMfgUJCVnT",
  "key18": "5bBF52o8x6NZWNaSvsZ6H54S17CerR2ecUHJRRQyVyRye5QoJVb4CzVRt8pVbi2UxwoHQRGinyP7MXoK5tDjUAZH",
  "key19": "3xwTb8VLBbS38go4oxJrLNHGsm7KDE2kuZmMDBbNZ9syzXamhFk7SFcK4sz7ezZN54765KRRkgsdqNsEfvaHAqPm",
  "key20": "9QwAuiytmXtPnDidw9bsUYnq2u2JTSgP1jsrGuCvzbxvF1t8ZVknMyvQdkxo821Gi4xRaLQrAhYfiu4TxaauYvx",
  "key21": "3p4og5FpM9Q1uJecLtQ5YDpyG1uCwn39iaU9wchEkTLzZsjDWrm8xHeTUhTVkU4W7Y2gm8gyQDWLQK3utyXEKxxG",
  "key22": "DYjn9LsVQizhE6z6LRUUQfbhNbFUw8n8LYJGKXZtBaDoSA6XK8jLxoe9oVmXUT2KnsuxNGDsrKd1yrinVmfSe2p",
  "key23": "2SBMe7DcKjRYg6kVgeZ9M2W5AiaY1K6wbmC4Uq5VgeHndw8JsQziRazRa72WnUtzZexwsjqK4NC6ypdiMdGjTHc9",
  "key24": "cM8ymZja7uLKFxaGEWpjXxkCFNJQVCNyJ48C8xyQSWp25z1hgdu4N4ZzyNxBCqeHGon9oQD3J1Ngd7iGDjiFshe",
  "key25": "5iVMwsRU9fbT5VF1FpLGagnT3ji5kk6m86YC7SfnixCyqYi2vJARTkS8Ggrcs6APygpEFkoGttawGAmrLMQUrpWf",
  "key26": "hpD7jduqFZtChutMQLRV9wUh462TquvPioxK9HN9QvA6c4yQateTxKCRqmHWkRJuweMf5zoBzDeojkC8jA4Djai",
  "key27": "38bEoHgNyxS26s1i5o8Pn4r5Y6xsypJ6om4xc4MQYnzwj5os6Uqjt7u4BBgrTG6Fa6xsAmofG2h9346gj6ZxXLmW",
  "key28": "4itXh5txtsPP2ZUbQQypWn83TY46TXNYiUwFJbMtUGkFzArKGJmXfT8Wc3yA9tQdWF1dmVqn7hh8vfHb6xRV5Gvi"
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
