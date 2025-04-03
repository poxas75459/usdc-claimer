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
    "4CCpto3vXeK4y3cWrE8ag8opAXzhZKf7xi6Pti5CaimFqG7NmpaRDHJyiTduBzcsD87UadT3CNxSodkovTcZf7Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tbd9idpK4CH5e4UMTBTzFhRE8URxQtu3KMsCo6gjtaGqoWwc3dPi7DHGTUyHHLm9bhwGPMxCjKmbbxJSn2AYk9b",
  "key1": "5oQvSLeMrmMPFxc1NYaHFFWv36jzLvfx2z94ede7JZA2RksS9W5XDL4UvPFVW8j5H5qUEHZ1gAjkUXCYjgXWtAQx",
  "key2": "3Uy7qinhNkpeAEcoR3J2TtPGZ6tmJJL3LZAJJWCJxnUiWAA6vSBAxVbL6puBXXcLNDFd36yRz3Hgy3rwd4dzi1x7",
  "key3": "3hecwfUSq1j32GZv7WDzAAQxDiYpaffFvQ2VxEqiy8yBLHPj3boGdvXwtZXF2HZQWChhAhkqVWKHKbHXZ7qS58ST",
  "key4": "5wPywnfKwSkputRLYhS6hDm58XDrhtGATx33D9De9F5esjKbE8fWEgCUzxjaqSeReunMXBBeeDsXuXceSq8E7ZaG",
  "key5": "4cf6aFzmYkwvWWovokEE3bdswYmkG4KaD8yCWLPQLw68UQDaWfNA2JjGeufgeFa2cLrb5mqbuZUXBYuiKrLCFMbF",
  "key6": "3m7XgvuCAPJBZ4bULgYKmxox7eq3YJvNk5jzWM4fuzvkoZMUKctfSec236uY2NSsQ1cRP4WYgiwhebKa1CRSAU5c",
  "key7": "2JTbQezbaG7FAM3vvLVdJ1EDzRkiFEs1xU3J3QUsr2uJW2A8SBwmp431wmrAk7Bz8E5u5ZVBRrVtWbbY5Yg7bBsJ",
  "key8": "3aVTNhYaG6qNRUTfKRv2C5s1XhE97M5SgrE2wU8YWvsRzSehwptX8XAWiKJSy8pdjiz6qiRSTXd722Bj1hQBhyn6",
  "key9": "49BXyDCQRjv94mPQJU6AH4Wi9fECkUT8jut4uZVaxua68DZfMAg9nB7U2j19xW483SVVqu6VoQe4F5cEk4tGx557",
  "key10": "Nq39VAVYLYgHHc3jND7dqq5ebGTa935VmuGPbbQPzX4RzTzoXc7nE9jts1HEGfVZYxuvojw4bwWotzobNBK3hD3",
  "key11": "2pBZC6GS7FkBEZJGbiRccR1e1XaAwSbcdHMxEiQmG4A1B2mtBYDLfzYGH6EK66o8Uk4WTB9biaj2151j5859RM85",
  "key12": "47U3Q9XiHK7LRVGfWMjrsKfvRV8C6HGb1w7doJmJbDdNQ57UqQqYYUjFxmgFZemd6zSePJgeFaseWNoq6nLdtUg7",
  "key13": "22ZDWy5qBsb2nXLb9BNuYAExYyXZv2RUyR7wRHG5ZSNY3wPhmSaJEEx7Gap9aJxKCibVwXPcevwms9frDJw1GZ4P",
  "key14": "2hyZzf8vhXQy5mHZMDApX8XasE3ZDBPYRVNnJQ5BuyEKmvxjfpsUqPsY2JJMuNqZXiHeAn3AhmVj94o2g2XTwgUD",
  "key15": "42mHMCLBFzYgTFdNDHvWkuz1fgSwTGVvTbkPtL3tATLALcU7MM9VFyZXxaDBdfbUaVhAknPxHC6BCY8RuPdKS9UZ",
  "key16": "2yUAY5fGBggNXKfrev99NmXfHPM6ewfaDefYufJnQq9QXfSLRehusUbjyW7Fpk2wrkTTqz6trPi5VtMbNfpmxSnW",
  "key17": "56Lag4XkxR2WnXPWuGHvVmWfo76yWBpnKzTkRtSZEh4aF6e3dS7xeUHiv8a5U12fdKbdPZZrorvWU6aMDbm9j3iA",
  "key18": "4YfHPVwGS2X4cGmDeqP7BwCNaeyibpBXFj7fJ7MUNM2RYy9bKJ84dhoTmeMLdaCMGBynbWRvNbBCZUNgZVjECDe6",
  "key19": "4XagdukgtgCnPW5eDpnBYkCn5H9iRMom3w1GtsspMSmaZXiWN67gfvBw4pQKJGeyPUEe16azzKKwwheEsiJSCfLD",
  "key20": "4PdYKTSGRkBD28J7cbnGNXXhToCjxXrTGpimYTwf6xKF6oVmuDNSW67fiB1z6Lr8HXrNNApnFre4DNRBLN77tHoP",
  "key21": "5FgT5cwPeiigwJZSeDsUtuQRqcQCbkwVHK31EWHLBD21V1sYouhPAwtF5ghVA1huRzrXAE443BtbWMeBdxLeHhyc",
  "key22": "4h7doeUqGzhrsRBH3JJMTJaUMyNMtWymCzTLSEYziBPUnSZsXqhDxr6CM4QYDYzzfXLxy6668eqaMCTxqEmzNJT2",
  "key23": "2uoQRXiTzRYehNRm29Qx3rHUyQCWmDWnqqEN4ucZJHoQz7MTrSzNoZkcR1ZJ7DT5HP4BQijyy5EbvwuHTr7gUKSj",
  "key24": "VpfRV8dNjFYg1YWThGeNM7wRAxpSY7onUxPfdV4kYYNHpQRPsHFWLX2EaB1A4PjrDWykfxwxJuDQtz76o4BKkKA",
  "key25": "2QAJWHPntVjGWTHrbvcu6QXj3LPavDGgzAUcb27gPYwf1fcv6nHXD3XnAMkDWadm8vdbxoCLyRFZUXz71wCUNCT",
  "key26": "31UHzZttSov9L9RBB9TABvVnT5gfQpidYMRVbqj8tfiEfUPsigABSgaieiqH4nEFpN2xws7vmeRikiVmDK4kxLTC",
  "key27": "3QroszABZm7tsPyo2ZpY17G5urBknHpaVFMFwCT7sXn9krQhPE7PBRj4n6t2veRKbtM1dLxVtuU3r5VgnaRayLhe",
  "key28": "3EywiPmc9gF4Y5jqCXJh9tkrEFBNdAMEBv5VT689YGyCGzbBRzAyrpg6Y6HLihhZGE7Xk95JxhayLkijX5C5q1SG",
  "key29": "38yC8RhNCzNJYHdT856LjjK2r8zu5yYdvh6XoSe49NefB57gAZFtrsGgbKfMZURLsHvBNro1o13SmH5pqcnxxXCk",
  "key30": "4J7rFr4qM8gGHqCS4cwa662H7dQXyZpVox3ykRrfGmwuEH7WMzvWaUgEHwg9UDkQvQ7T8mwTEgmFXvA6DutGFR8n",
  "key31": "3K4Q4mT22nT99oqhKQFnJU8mAPTiY3UUcM1v7mvXkTFD5cVHvFtR2RsHPVjQU6rsYS4GZfqLrjg9EfPnmZSDg4PC",
  "key32": "3ALb3FYa8B3ufEtdtu1d8A6ZnzL7Ak1MjSZpBszNEycFCVZYGbKtZERTuiHUsX5UDvGHHczWEzsNR3TpaoJFfpzs",
  "key33": "272bSYKWJaiPN3UJaCU8yQXjwBrXgYQiTe4YXknB3UJnW8hhHjBH28dddStFAtoYKR8DvYbScfKYrSRihx94go7S",
  "key34": "3y3SpA3GH2m8gjxZnRPdrHdRdkwkVCMgPpiS7GT7gTX6r4yNe1nudB6BF4NxuahQKdNzMPZPX7b5xvxubkwoKUXj",
  "key35": "2hPLxKmiHcMqHaMBpJArYzbxmfVNupRpEyZbHdkPm4VxAD2GcLsCMdAE7ZZk3SGxhgK6YtqvwLXmaLvdxG7z6WXi",
  "key36": "5SJW2U4xQLH14LGWJtysHv45GLHxRBLWfSWBh1nVefXHAcviKNiBAqLoJYWeMbnQH3Pv5dLtYkYG3Fxps3VnjHkp",
  "key37": "5ETuNzjXzC2GWZdSwoHiWqP3FYpLXiD21RwX9B9xbgorGWi2AQkeHPF2Rh6YPrHSWf3hQ9N9qkdEHTDt322TiWqQ",
  "key38": "9dCG86fU5Z18X4yad5dPrDT4gHCRA76KVLfQMKqgwEEaiM8v7QFUesAAeKPq7v5AHYTUL2De4iZWM9Hj52FTY8v",
  "key39": "Gxje9J39bR2yUHv4TqdHFxW6fzjhrkjhBTE4D5jbQVrW9Pg5Fs7NUPGd7bmo1W1CFQVE2WQCCv8LjBpGV4MDeaS",
  "key40": "39zAV9p1KviuqEoxKFBAozhRn13npKShDfh3vu8RFzg8XgiEXoJYaKTfKDZygspN72zv3Mh8C22ajD4oxQZyZ7JJ",
  "key41": "46ecab8EsSHxKFxPm4qdxud8eDtCU3j4ujmEGezmh9jAit4BWfmhrBL4i5zKTmuYiompSw8AviN6KWAgCwuuLGpi",
  "key42": "5177PJqebQ8E7MEtLwot2kGe9ZW9EV8SRMtLoFjvgrC5AhCTErt1DxH7vujkJdPKKQM6UupzhmiVK4cFbTSM7woc",
  "key43": "5W4J6mSCW96AxcvGQwNaCQ3titgjyLfN35VgY7H4LuKwWuHG2w67xQs3WWEw7UYkSKxfgcKu4YoqeYxYS2fvhXQi",
  "key44": "4Rxw78RBXr3rv97PFfVyoNxCr5PdLxsV8e8xgbwAmXsKBNZMLqsFdR8qSHuWhdrQitE6NU3pV2yjSxEnVnd9ewmj",
  "key45": "5UNrpTRA35ijNx3uFpRtenVxy4ZVzpFShrmVHEueWoLxAtMAq5TJBQqocC7H9TkeDmqyNLuT6zFFt3r1AYi2vmGG",
  "key46": "6ubR7jJCgkBj6AGFtNfTw54cmnaraqE7Q7JEBSYBq99Brx6c4PL8Bmhrt9p8Lo3ChQZ5LZNnkwNFJWSUAvwWWpY",
  "key47": "38k2ptZySj3nMmBAs3Eerjyc8CHQvvYEPj98VW7AVQEwAmQuBFaRGF6gC2Q7pfXZSMPDvKR9wqk4foRGQy93A85V",
  "key48": "5wcUEJYFMBsuHbJQtevN2zsKKLUBmwoWpEewDKFxD5QG3oJ7rXwh3VW6qCTVD1rfaSqjvLCRe4TvtN3M5viMWDhU",
  "key49": "5RTSBaWdM4wnpVGbjriDBvXoavWufFMQxr51YPwL5MGu5kAHsd1yRjWCH7y3wusaqDb3C6BQt7tC4hvmx5HfcLPm"
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
