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
    "3xSs1MbkJh4UGA3FDuyQLoHnuJsXn3kqXjreKR3YfJEvL9tZC3xjGrRSUurThsQN7PgJmzjkdzkeQUAdQ7ZPmSkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CADaF3u23D4MmKqzNSqybum5nacySKR5cZGCNnJE9BqySvAtjDqbjCASDoZ5T62Lxdgn4bL7sUYcT2hpwF79NXi",
  "key1": "4JNUyAnJX7pMjNcc93FeDix51TDGCWMuFQa9dhqKSKUT2SvnY1B5qo1ZbS4og4FzZ6SJXdQMQwZyYrsCKUDKnLXx",
  "key2": "3MjzkfmFNcXCGdBDtEXS8e8uiareGtuW7jgT54DaYP3cMd6ZFywprcUQt7NaWtBQ7mFokVauV6h3xLZShEegkesq",
  "key3": "4UEXQFKy36qxWt4rSgkQxaMvhbuugqNDXxUfQKqxU9XMknhP4PHdKe2XuDGcJkekuHMnoxH1rAbrZHtF1tctekXH",
  "key4": "46nn92Uvhpxbs1cyUQpoLHhNZZo1RQWKggwqGyUbc1JkLu3awzYpwkvqRrfAc4WjyNU5UUiDuk7xghG4Bn39geZJ",
  "key5": "4YPjcWc74vKf5jAfrZfwSSV4FRPuQxY87h6Jgs1MMNzZa2dD6ZRwK2obKnJeuJaic9tGqBQLh8y5irEdPz29smCQ",
  "key6": "45xnXqBDT1MjcUAZqWaqJ1mJK2XxaGrcmUHJZCdwtnTvAWHqGBwRfza6AaqkiMfzcX7pb8pafKQ4jqPV8hDeJzwB",
  "key7": "2G4ng59fLnN2E27dSAgELZM34HzkguuUsq15SCKsZAmpqiFZshjca2Wbug4TcUuyspAshLkkVh4bnEpr3X5CQ9Xe",
  "key8": "ZQV89aMVTR2fXZLxHxmwrVHjsD3kxjGdE9n2uYhmk17i8L3B3i9kf2drroSG83PjvWsDtsGLDzwQswgmUiSskXX",
  "key9": "2fR3ZgJx4ArVnMpYhUFLWZnB2ZgoEJbvzk5GxFzXMPCP3JyXGWT3MjkzHWkajdn5LnV8xDmTESoEYdymf5iAvNeW",
  "key10": "4ybnX2pQFDKAyF6ZLFQtpSwK8Hv9KWEAQq8jJb55EC669jUBpZrnGT29AGz7hTNBAmE8ZV5bP3kzJQWFq8z3TMCb",
  "key11": "3UriBj2ezDuR3XqZ4ZAkbYr1BKPRzVfGajfQvjYkg4UecP82PH6oTDzEUxRBmqu2a46PPzwcuC4BWE5z2TNzy5j9",
  "key12": "3Jccj6E8SP2ZNbvS5fTg34UK9LK67WkgLKFQv8QvgN5HNRAUBkFwd23Ahe2ZVg2ugpJp3U5u2tHdFr7Tk8PqoeZY",
  "key13": "3SNyREzekydnsH17mTWezAqxTrY6sYKy6RchAaLSoZ39nsvxG6JHjUzt1s7eVB6tvxKFw8cJSASv2SQ1mX2PVuck",
  "key14": "5F2dyogk61KW5QxYtBMHZrokVeoMaPFiBCitcwW4W6Us8Xn8UR4zGaZVFKTM9TiqpfDjtztjBXtC64oU3mu6EnwQ",
  "key15": "neWgesuBiT4C3SFMakA5pt87DwbRdNMv4QuDDNtfdWWZzEYGtrLDcAft2JCXU7UsKyn6gcr83kFFKZuHpmDFKp1",
  "key16": "2mnTBmULv8udu7LHidvSnWLd5RX6A3GTttmW24UBxa481FnoLHiS42pZnFQV7K86Di7XdPPQKQ6VV7GiLTc8ok9Z",
  "key17": "4aiU6d3zNnmmZXijGnMALyvwVu5HMKTr1wFnBQwjGPwj1CA5DuPb8Kv9j5FFvvzHmW2p1XM7yGFCyLeuK5T5dtsy",
  "key18": "uns3VgdFThpZRAjSJRyQyVZ5e18PuFNgMjjBXCu9b2Wnb8hxRh81KwmoAfdnBU26Yjdwugx3QnuFRsn2zjAmozd",
  "key19": "vX72DFB1PgTD5YDUab7LFLVidXXX2Th56tRuBQqDUrkf8BjKY9yYrGE6qhHTQXaMKnK1YjRbTa3Z4ViRUX19gPv",
  "key20": "5uHFyvtbNMWXzDPhXkw1RaQzenFe5fHaWcbB4221anTLruhYiKjyuFm4FQgWxAnCB23J6jXshVwyYwfphAyMxzMf",
  "key21": "3eHyg12pxYY8rGB5BiYPCiNbyFQwfvzLA6812yJBLXqejG8DDu8jvzKhh4aqgLkz9PEvN6HTUkDXGjHR9cPJw7PC",
  "key22": "5oVFjxxde1AUmtq4s6YATDmJAwfMwgqXsxoZQrqZtNPPP3ZFLtrxXVMmWx5CrUxtZLatdtE9kn3JBSL3bFRuUwrk",
  "key23": "4sGPAzUgx6hLyhy4vSPHNw8hdfmT5fd4j4oZVGUZtdEJarTCjxDPGC8LoK4sTxK6tx57PgNW1vm1UkJGVARBttuH",
  "key24": "5FA5jTpTwAZoyBttxivLYw7T1kXdggXL38kFA2WKCFEHyweWLKTKD6A12Q3ZRz8rrymabG58bZbwfv1iQmTGJbPp",
  "key25": "ULrMyNTzkRiHnVwX1XftQyQqFc8NGb73e18ggFsSWowkDkVn7zY1esK2uYWQKhHYaSFeHYXeJedPKs4Fw9CVDm6",
  "key26": "5xc7tZByfg3kCoWA4aWr9V9U1cdf3HhxTq7pwekkmsPyrJTF6BvM6EbYEuqnDZve5EdJpBLoTSigTBvdu2MwEdFy",
  "key27": "5MmTRwCr4xafUJbJyDYwv2ueWgm6LCpLBsKaQZU5njtpMpebUexR45J4tv6S9pHqPY6eqnhffpwRd9dmAsRKKjGP",
  "key28": "5P9dqh2b6kRmExEmh2WyW4E7jZKvqBCYRAZXzX4vyoE5mWeVhfpSU9GvRyPWic9PvHnvXaBbWhnSL9AYr3WRYNGT",
  "key29": "2qx4STZW4gSnwCZf6GRdvTHEwNGMcjswRXLnUmu8JspNJFF1nYYtTxWtTDQbNqZt7ibkJ1FXnRje6MCJukjxDsHU",
  "key30": "62gLcDyE8Q9cghox4zSWANQWdDCvn1dsBaMQrZ8mC4Eh3uHfwecPcEJL9Wtki8eS79GMbfXna5SP7hzJREa9ikRD",
  "key31": "2UEW4JRW9oZPv21bR3hUZTWFaJMrqRbkcRtfqV3PyP9DAYHzKjDCnhJJG89N5tGYAnztGyCAVmzLWN2EzLyeDDzV",
  "key32": "5b8NHYBR4mH9tMfoKDt1gBuPXnEHaMTQ3PzYbXE7NA9xZN14diAYTv8efAnxABPGLqJZfEwQeerA5CyBNjbprNX1",
  "key33": "5yDrC8CcjNVYRYqs6W4cTDueGuAuV6ybevBnUgT8NyEWXwoQ5FAWTTy8jp3pXBLMkk5iqwJtbghgcw2PB1VrHySa",
  "key34": "2oM8qeKjv2GsMPFjfUizQjEQKRr8WVZMY7EkdqzN8gLhmo6XoubXJE8HmSjycNQPL9P1kavMhdEm7Rx2ASEb9VP5",
  "key35": "22SUtNTyCKvvWPXbeKdBntXwnEMEj1wQWr3ZJWoCU11WE7BFT8rY4wpLjNqscqf9mNooWRJqL5Hc2V2pKgQbPgwp",
  "key36": "FAwr4FripxqTbbMuo9JQeNHNAdyidSLyPwm7o5QmVhW4RrPq2a4HvnjzGVSk1reqdrb1ep4Z5e3xyNBhKwKZkSG",
  "key37": "u1MvMtbiiNPidB1nckZmHUCJtfy7Efqd7JysJot7dee49V6UAEwtwd4WVgyZFUXtjcc76tYXSXJxFpp3Xyh4LDt",
  "key38": "k5qwwGPe1n4dB68jVFV1vjDEmXUZhSUjJfuE4n3svy95UEaEjimAVQC9K5JkXegPHLCcpkKtoEdSTqA56fzKX9p",
  "key39": "5iWfK9VbfCdK6QjN5qevpGz6F9EU6TryBnf7oa99ZcsSYLwsViXASqRTaQLNTq8NLKLrog24gJjUGne2P1FTQZW1",
  "key40": "ghdAwz5Fycgf2MvzdD5ZeqDEsWiaJmZZeTR11or2XPD7aRXPeoLWv78nw84d22eGXBFFdtVVneTXGhMM828YrUv",
  "key41": "3mJBAP2s6xhfX2ANAUPST9CfmJZRCdhVRBv9KknxyxyrgEf2NUxPuWRDY6xLddmewCnM1NGqaJrG5xEntzrTXpKJ",
  "key42": "3rK1EwjhXyHkqTTwN3H8mSLwbUBpBGwzD3p26xQewsVpbP7t2jMkvM9jamZdqYCLYXvwPwjbaKAXF96CvZDJ9mdz",
  "key43": "61BbQWoz13Gib3CuL4CcYEYpNy4TCqXQSXUeEz3MmjyUWdGShHyh34uEQNP8Rap1GGd463PKUjyjWV15zCQE3ZTZ",
  "key44": "31xtGHNU1JibRBhzWLv7ivNn6RApbwyA7tGT4UAvc4BvCung6rBX5wWezKk5j1m4MEySjpzFb8R4icGpwv2hZJ45",
  "key45": "2pL6TfvkBE2ykB4Z3FYkjLFYkZLRJ8pT1jR9kcsAKCdrTTWGG1u5R6xtXoTww7rMD3Z6KA5LSfJGBxfuFjo3kk2j",
  "key46": "42AEmNMppkkt5PBfeCg6X2jAgfyszAHn5k9CbiVYwSi2v1kmQJbbCCT7CmVkrXhcMHKcE9MFw1W45CgVfFvV4PAs",
  "key47": "vJfncf5cxPUjQ3shjrPVi6dFT92CqE25zhmXnXexxKsZrKMPEJxZf51Q4FH7ZmhmXHnenDe45nk4rLa7GK6r3bz",
  "key48": "25jE62wbpJDBi2re33d1a5eoXZr8SQ84UUg4RvNe28tn2oVy4umy3aA8g8B8apTjQwiQRQ2LKAeiKQRwc9W4WfmC",
  "key49": "55muHxve8kLZmwgTUgfZPMYHNhS4zVwKTD6kvHN2oLh3au2UGqdhr21qRkGnxDfFcyZhLYUMU2vSoudu5892rQZz"
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
