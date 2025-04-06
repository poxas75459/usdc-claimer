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
    "2T2WSQujZyYRPknRzYVa5adjsEY8baXgMYnmKG79NnvwHCokYA9hFiH4UmpJcT7Tn76fJzQdo4aWJZt7UKeAN6sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41taQxxHWcW99hxC6pbaz2WwTJUgtriWcNPYJgThFf3KJfcowhuUWLoh8HdMyDyztFPaNbiX2cCXgCbkABjzkUwe",
  "key1": "5CaDdr6qQs7XPRwEJAuhZi5KpUAkq3DTHcUvFZ5DetT8rcaKufXs5fatu8wE5G5ZVE5cFnSfARWfe3hacKmncwQn",
  "key2": "3zkPDXMdPTEeTKN26kMJVfnKCXNEoGJpMVrAgUZWSBbDrTXaEZ81bUbFF3TDQ9hNPFraamnzxk22WXHu65SP55Qp",
  "key3": "4K1xxk7KBKr3muJ9Swn17vESKd4W7qoUenDpeGTxAxk5Pe4XV3ysuQjcQ1nGAp9N8or17WVi1PNpBTA6UidGyxs1",
  "key4": "227URGD5VVLmsBpYU4pwTjbM5LLrsott8x7hX2W58t4WRayHtVJ8bbgm4eiJveHEkPrEBpEeaTHpmj3STJ44GqBw",
  "key5": "TrGuDEjnYHYJZ55QNcBuPguaUQyu9Lt78dtcBAZC38Mxd63xkcHFuuvDqngep8REGxiH9bZQqeGRPX4rA2okXjv",
  "key6": "4R49A77dwY5TVBKoJm1boQttb7SLrEHNBxAiF7V22wkyM3phvmhtZa3hXzjg9ihWagrqbTHurQCFxwxMWcTScv67",
  "key7": "4c5RQNWcU56prYPnVpWyYVwGggzvSTMndcsroDkKtrdq2vXhQXASiKUnbzE6DA3dSBcfuQhY5DuVQ5hzX5srJRDL",
  "key8": "4MJz7uMBc8vU3x426viJrXkcNX7R7vvM6qXQfksgcU6dW3gnLzqV1M9bgSq1x5xn8tmACHdgphEeYzx1xqFWdnkf",
  "key9": "3efFVFTdh1VGenJ1PFsBzrth64dDrV6ughPGmsM42gjRBsjeupZETQdEiBUcLgJcccUQi3R3jLZ5JcZHnvKVGSBS",
  "key10": "3iT9de4bK4f6vfY61jote1kyysy1XxPAZstCrMdrpVnY3mxsF1x969nThkMAmmKEUi7sriHCQhqxZt2ZEvxziR5k",
  "key11": "6e7W9dmhUUnZAAXBWstZe72wVamvgfDfjexhjFnFSSUirKGwgaNWsF381UAjseeVhgWKmYx5DKUX7nFY24uRx9s",
  "key12": "234LBJtAixHBRiLDZhxmwwYWXQCWAdr2o2MjnXfTsxGfd7JzyK91uPh3sipNKaXjbiYZK9mq4Ma6L8sjyG8YT51e",
  "key13": "25DE6ASkyBsVDyiz7iTgc1KYTuG1uRKiSiAjxGA68gwsHoS8esshq5XjCtp2L5NUyeQASE484kAMuZ5zJd7g1Ljk",
  "key14": "3YyBwykkfnJzMSBjvVcN8diMc25KqW6mbKWyBPs9NdCvYakSBrQirb2RQf6EdtEXQHbqkv5g5YhG72YPrvTU5w5a",
  "key15": "5DoDPEzFW3JHfbWdo78JUunrE4AfQfH9ZWKYpXf63j2wWFsqSBHyRbc62zMr14H4CVY6KarQSTJvX6DB7vSEHsf5",
  "key16": "25MwA8JKcWMCr65ch5r737kEg3DLQCNd6VmpbCWwXL7vuuJuGFjox6rkhZhHH2hvk29gYxX84mcGMrxXM4bCYaLW",
  "key17": "5AsFnMb9f36CAjTcQ3dHq3TjLQZKTE6f8GNDAjT9d4zWYtDMZ6Cumc4B15Ndomu8zZ9YW8nagLWSP2PAoAsxpfqm",
  "key18": "uarGvg6uJShtmZszEJTe6C2nM6AQtRM93nMvukB8cdHJU8YBhgpMgnx9cMDwEVWaJL6YhehsZrYME4w7q1sFCbR",
  "key19": "RZqXJvdH7EhUYTc1qSyKFjtp2tko11shqwsAiYV7ReGTxuNmDrzTuK6qnJdSHtPQjz5eiZCC1osgXRLGbiS7yZw",
  "key20": "5QMz8MNofhKbj4e3qHZqS5cUs2gnLAuhiz4M8gmxSA2W5q5zMpLo7sEN48VV3z6Sxxq6KBnuGvfEdRDAMSEphnT1",
  "key21": "2ZYDvAG55F8P6rVd1UXWY2Fvz5az6KeqPfAWRyEjNBZxzYXnJKkHvjpMf7k4vs7snhH26dNWeSauez8HwaBbNHDu",
  "key22": "5QZb5QGP3CyzNLS4udDdEwY9xYgXwQGemv9GfNvpFefPL8u6uB2v5aXquHhEt3JkdXyqav7jVNS72jBLdbjnXccH",
  "key23": "4q5qWh4kt2XoU2FjjF2MqUDEm9uZbr2nx9CnWkarKNVj2944dxVjyfYv8LzrvuZevLCjep4VKg9HXjMt3J6ExztP",
  "key24": "3ye1o1ZiWsP6yAYqgBLceNQwBnwSmwkjbeeFZxjnyxFN1C4wVgjn4Txczk9Wc3PspaoRonEVghfpdutBY4QRRmvH",
  "key25": "591x3sCPGSRpQHuiDouLvsCW8eB9trpnWR7svCuAMHpeHtjfnFmWN8DghKmmC7HFgFLFJt7vCBepW9c2XaQZ7xJ8",
  "key26": "4fWDVt5jB7EZdikGprgX4ZBATc7vN1DW5grgMGF2rZnKZ2cPQdud9GQhbeeJ29ukQspyTbeR9HVuqQHRiUjc9LRN",
  "key27": "4Z3zALXBx4CWRbJcMicZvtLLt1v2D8WM4ESSTYgKVvB4w3qC8SBKU3JbQomEYKLwt1421xGvLuhVqbNujjtXEg18",
  "key28": "3a2imBcbg3TYACmaq1DjkcxYKMdgPb3R67PcMs82odAZi21PJ2F56t81bKU8o2VKEMdTz8oKcf9wnWSVYkurwJzK",
  "key29": "5dDkeFkWvVa4k2M21rMbfwqNCL5KxxVxsQMT9jLZKZ3uubS8qmxHF9gU5d3Hzo8LELPZnzwJFd5tViubp8bzkmMK",
  "key30": "2HbEzYfbhmb5ZgDJb2vF2zG7EuBwrPZRpbTZTnr6ivMYjjHFapFwfFG256jTpbgwxak6UcuARUQ9RCUJEYGnh65D",
  "key31": "5p6vTXtw9ftBQiMnWXHYRtnDcGCXSAEytCnMCRrGVUAofeciZqtwE9Qpw5XWC6ysxwVmKP28B8RtbdScGcBe42iK",
  "key32": "5Xe2muVVTQEPaLGirBuXfGUAKAzKmXpgLiHFCDJVLbqKHhWB5SAErV5G3pxgjRvBZ3zUKYZQFn7Hqs8DZQDNzNze",
  "key33": "4kY79j4VdC1UMuQCGgtoq3pSCqgxWsS5KundMHsSJdKKLZrFkFc2UmkUQECzKiZW99JXpyUYNQMLp21dHSLUWb7S",
  "key34": "4bGGehCAougFwvs3R4e2opJ2nBgP4JZe8ayMxgtKSccMqLedTydJZZ6gmVftQmu2qFbuMmAoabnToUGfEymg7Y8Q",
  "key35": "5eG1PvbpHcXujaws9uSCJoSUgn5LvF5Q6myRntJFTc9v3Sudh9UpdeRLVKYKs77Nyo7rLfTaKVuXtq3bqoiXtixo"
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
