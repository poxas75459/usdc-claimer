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
    "4Hzs5aPJY52LGoHJWbc1n9bJsXKic1SETZHA8mjwB9wywaff4PiJPsdmeGZ9KrgZ5EPJMZoFR6vpaqxkuRpuTWZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgEfX89byPkENuC5V8S7ku6no8hzbC7LW4oSqLQ1DQtDhH22ZcCuuE93dXnijqJUS8bb6kuE6NredgWTJZ2QmSP",
  "key1": "3QRXdEMf97UAHu2EfkrYgRueY9z8njt8XC2AhPrRCxXQio4fvwz9XR8wD58he5juEr3D3ewKrUrvqeSyUz4QLxtX",
  "key2": "65oazxMCnqzjSFnSo86cnUci9FyEJMibg6GNrU6eQH8pcwieffN4dZpJiW5CCPyeyJWM8QoDkcm2kLishyHFYjow",
  "key3": "4UsnKX347iQhwcWoy7iJAcSB2ftogc6BX4ZvjfonT2yWKRTci2qSs68yjq4UR5c8Z2KwZrtd6iJwKyk4RvZikGmL",
  "key4": "4wnsGVZsKarBN9SVrEPhgSTmR3iDB8K6hxeyvhMKPRYhUQqdN9yuDMt1ApDbjwCQmZzymY7LPfeu2HbMXd99fCUy",
  "key5": "2wr7s787PVn8ekXV5WEU4pcqE4UL8Da5db6iMVN5VZztBAtEHRZ5Z1o8E2sX9T5vi4mqvquuafwhkHkG7y958UZG",
  "key6": "5uA5c4p7TdVKYSZCcJAsKQsaHBwNBpaquwxoZLa4mGcu898sNa5Fx8qcJ3Zqg9LkacMWbrNzkJmn3pkGajAcwttX",
  "key7": "2xQGgU72dE7Ljt4VxwmmKhVL2bZoEnEhnk3jfD6cr3N7aCBaGcJQcpeECM7T8gNcReHXZk6nysAqPPH2txU6tWyb",
  "key8": "2UoqBpxtHdbFLKhNtD4UCfgrqWZDvXjoFtnfC7oqkWi2rTTjzSPykVKRRynMnjmUSe8EgGAHUGJqzXktm6XoiULX",
  "key9": "57dGeLJhpvVEjeF3vyDY7WjtY4mdDCmje2FfDEHqUDttpKdgwoQQ2HXULcZbbygJtBCeWT81xqiYcJxghCdQTTsA",
  "key10": "2JMHX3PiC3Qjssfsu34xs9WB842HMB5j1W62g1TGexmAf3RysqEffEVZ3JKZS5HttQFLjLtpQ2qGsoUuJ5vCBqLg",
  "key11": "3R1X7yfs68SGafuQ4xbKT8CXgTHgoLrV78exPAYkBak7Ejdfi6ieoeiKY4eGHMzdRhE56AhjPDJNbZbuUh6RpCzv",
  "key12": "3seDs8njesxYtJ8cbie68HtJTt8d7k73h4AvdrLWhzxb3CZ8Dz8dCHtjbhwHLhnZVMqZPSBadYrTsCme9c7wAvCK",
  "key13": "5qzFFXURJ34gM6u7q4rKxtc4fKkL2n73Fx4EoH5Es9xFWBNxF2j8iAkcVu8VEydfTwE47j7cN2ud5DSWkNP8jS3L",
  "key14": "4XCMMqPoxeLBoj2jYwBWXWkBPJQcRZ3bC8qEU3Pp6GtQ3h4xztzA4vahxZrtDV62W5wQy1pVNPE6QNefVcZtVqh2",
  "key15": "wRu2okbFAcf58y4mwUYH7kgQCPtLadUYr3kPrUKpZtfHTfWpFsjX5HMJW7Xpf9aTtpGSpjzvVAXjev3dEpk9f4F",
  "key16": "4R6kz33asrUvUsSYbHHd8ixCpntAbFKHWKRTWGvTVqmHBoHzDo5Fto3XoM6FkBMF4en2MvnEdZA1MoKfbM37UvRi",
  "key17": "31WYszQkqvfMYBR6WxNtutWegtGyhZJAGgYqafvgw4BEnXMntcpKtPDFvLEzD3WivxzXLWr1uw5ouvcmqbmkraDn",
  "key18": "5vodXNjMv4kBYaM1WMk8bz6qDC1yYKfhRUcZxXYytGJsa1iTNGHoejwjrXkxKKZgGWHBANPvw83ERHn8DsFqZeR9",
  "key19": "3YDdp8Bq1puzMzbviN1FZdMoNEnajW6r85nWHnZYry1esh97PCiPEFKrwwLcegeZkfGo8H4Uj9BBhRe4xbKyjx7Q",
  "key20": "39Na8om8wXYatDKjJcW7aCJ5mN7nMf814JtwkU1p76GphssukfoKuqhLZ3ro7J1UD1noWqGnwaAN5xVNP1yYUyHp",
  "key21": "5hmfVkh6N8z1rSaDu79rG6bfcBBWjW2x82nzLcugKZX2c7Rm5NKQUUBr6PqvXb83kXhXmPDHioxFQTQ9uALQAiyT",
  "key22": "P2uEoWDthB3ZwnNu1BkHVbhbnESmvJ3LrFP7giSxmkdZnHuEpcwJegGS6RFdVrQU6s58V5SUdj5h6i9nog11adP",
  "key23": "3vNy3536rVgkLEPqzJpGcwy2dJnR9mxmpUXxR2Pdn8Z3gWf2NFQ4tmMdetXeF4oUZgfqhWZFZw4Aso2y39bdym5m",
  "key24": "3WSxbV7qGdAmGK4vDdx884dRoZW1iZWfijoJo6or2D7LueKeatoe2d3cHz1C3TaogyJK5cLTEHMHJn6sQeAjhSP8",
  "key25": "2tVnxc1TTaqM2AzMPoGJTmAMLdxsL5YK9Gzh7Y9VqvtNmJitWBNLfFDhyQkJwApwFLnqrv868466Fo54jgNyHGKU",
  "key26": "4cbWmUaudQPqigvdqZTymebzBMkGViCcZqc1owLAG7nXb6L1U2BKuMu7cvF8nMZ2dQzfxhxoRe1f4pBXr89WeLFT",
  "key27": "5mRu4YC2RYEYWBm5Am8UetkTPCNVtTigoA4mG7GST1ToEt4t7WqfcqWkoyoKyvcJsnFgeqKjx8rELWU6m1Eib4Ms",
  "key28": "5PKVSpp255NumqpVxuyWN1xDmhUu5fAgPkyJrYghQATVPMYijmmH8XHCzJbLWptr14dSDGBboKjeviMWZhMczUEx",
  "key29": "4kDx3HvJ1crh6JzNVYqv4xsBRbmWBpoKVbBf9m4aAvCDJqSiUac6wxGrPN45AhekuuD6oUeqg8YvxaZCdMW8drGP",
  "key30": "48z6vNTuPeDPGBpnYG8gkD6Rp8oXfMKLGjJABcMiPQZV9yDfirCV535SZD4wv7jox2gs8koBWk77FtAmkq7Zf1Hc",
  "key31": "66MB5roBxbigQaAfS2THwmKEAFTz1p2ZA5bfpTEsb9odv6sNwygJFbfB8F1cJXNzFGZvt482Vfy3ZBmXYa8KSrwk",
  "key32": "69x8RniTUypcfCtqqw3DptBmVuLwQeeGrtQrgRzm3FuLYsJqWFoBTK7YpJEQ76fBoPBTyAjqTuB66GNumRDsXLN",
  "key33": "3ZiZKFUfxsFJaUWQRH1rGBdzMF5VCXhyogCc6gZiCYgvgWhC3N6kPJc5xWoWDZL8qhL5jDWnvxWeAthra4WZgiZb",
  "key34": "XS6LVAaum2eEY8c3KW9obwUD54h5cHHPr136jKyiibo5t3n51CsZ7HWuLxDfshnmprEebSZPe1o9voMhWw5BhL7",
  "key35": "ieE3FfsFAcFPMas9RCmR5fCfEZyavskYgrH4VnzAQAy7zqSf32z6wJ9cXh7ZCTiYfESJwUAbw7m9DAxEJg7Ltuq",
  "key36": "5jkSpC9dQX95tRQF39B5jj6XcSrUg19CxXxATc3s49oefzmZh5s87ww1qLXrZxJ9TjLCDPMJrwZeCmNvU5GS6nQo",
  "key37": "25CQNdBV7aqoDzNNarkrMMWvDAKJ2moZhLyBfqwwHnTFt2PGQK52Q6jTMVmmZ94o29nL5ehqvTohdp6UUEnaBERH",
  "key38": "3XMXTabdZiyyR2jyKndRaWP9NtQHvmNLuec8mza5aeqPUUquuWt2xHCLntRiLeWMMoHkvqGVqcz8Q3kzkCP8Z8T7",
  "key39": "3C7XK6jXvKDxvBuDN4bBm89JDEEGyi7AxDuMNBVCQCEc8LFgWxXuZyQbS64pw6xNzLCmiE1tDzF1ADRBBZXffLEZ",
  "key40": "22aXfaSdbYyWirBDFS5Zq5W9JXtK4dXcowHAeW9JLFHXwNvLodhEUMwvuD1vZ9onpjiMaWMgjHBShgHkojLKCQDW",
  "key41": "5yW5MXV2zdNDgUkMnxHpXv7GLpPJNsJLh9VYNjreD7hSF5JgFTGjH8d81Xo57kQWY61wasnkLhYFA2rPKFfEiqT9"
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
