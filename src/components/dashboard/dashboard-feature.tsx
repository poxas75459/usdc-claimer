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
    "3qku61VNGbZxEyF4b3YYdWWGWQkkMJFVPar143UeA1rLvWBGDqMCkJFHYTSRnDahjCVWFZicgaSXHEYDvu2XQbav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hdEeXwNpecQ5rSQzGKqZwvovrZSZzzF2wWX3Y4XvqAhtDZAfA1PRTUGBj5pWAz5Cz2ETDG2ZGuPUcP259wH7Uim",
  "key1": "2KVvCv8ysWY2zQuscYi1jc49EuheKKBipDKxRgD5KAC2HXFrXFB5MbKVcqLFtkhxrpqJU14ZbaguTkaA1vKo44bP",
  "key2": "2J9mswmKk4DTRZfdudVe3iXAqN267c15nibrnm5fRNKRg1N7QEwRDj63zFZUJaiKkT9LFSnNUW76EZrgU6Fw7Tx9",
  "key3": "4S2BcEVEdg4yKZQS8UDDNL15DoHKdRebM4jiGxQj1b5tKguKC5DMMWiPfmUjajUnzfWNxTmjwap5mBHCARkpVqCc",
  "key4": "E4bPjgT2yYFPdjLab51kqTV1YNTzSkydRhdkQgC494EZBCtTyHs2SwfXer5Qgi3qTL3QGTtcGzubajjpCM3AfNY",
  "key5": "W4o1XKdjgnpEii7BiFd3c1HRrA145TQG9UvLN53jJx8pnBT6Wx4N7wy2G39bcAzqhP452kzZXe1fqYU8iwKnnFJ",
  "key6": "4RFE36w8ntbdAsE1Rw5mKzJy33bmXsXnQ6NDewabqYQYu639DP32jNbhndtRBcLy8TLs6JHMprBkHh6qV6GDGEeX",
  "key7": "5aRqmSgwcAYBpsj5o5RKSpmQqMbm6bVpzXYYqTK7YK3zRrzqThYyHhETd3N3avZwiWMUhAuMFEDSTh1wzCWJhudF",
  "key8": "4FqZGcVDYG5YzS5MSTJbLCr62AwwRSZ9PuRLrUXi8hpqb6k85BMroF3wZmKpgxKEQgKTrrGRQceH8XntUGxFxEWv",
  "key9": "33QjZ53d9AKN1Eq6hS5XH4if2pSHXoTyDs5YBcEfE19SrtduJkXbPj3283HCAwwF2DJ7U3EuWcjLqX12DaSBSxQP",
  "key10": "5Z5dafFhTiaXCRzUNsa6hLDGprB3Msrw7V8iUKuk1jPy2BfRgYM1f1WJZhywQKDjqQGth5HntaNgFK3fbFdGbBXB",
  "key11": "28qjDtyuWEdLqEeEjVcKgJTmwphs9eTGgcgy8vrt4yuBtdNHdn6xpe66jZX3sNRvqhBaqeupdNq8eVpYv9skxEPx",
  "key12": "gyD8g28p9djKvnR1qkfNjmqaS4q8C5oF6eWnkZJ8awowRt2LRiqtUKtsAfPceDeTeS7PwqPDPiwn2ZKGMzHJ7zN",
  "key13": "3gJvov8FDjYUpqE6WKqpx4EYNrBmtZuBcY1QhjMhdYp6AvgkyeP8c7A5Xj2GKV9Xqq5rfL1LESPjDGXBPTQwz5f3",
  "key14": "G3syQESmAksouTW14KZ3sSNY35JycFa643ApD2wtJseJs9LyTttSaJQCBpBZCpCK9bphd5C6AynWR7EJ4kTwLfe",
  "key15": "373XcYCa8XaXefiR4EJHcbNYH2LDvt3VioD4DdYzpJcoSspB5NWPHLTQ823nT6Yzf1yRZ3Hky1MGKYke83DkYoKr",
  "key16": "26KoXJ8tsgW3uFJrBaPUHRmJbva2nbQCxDJfsd6SQcASQAQzdYCrjnyGHjnudRX3M8rCnJPjGJjw5ifVgxki4Vy3",
  "key17": "r51ci7z2FFr8zLfaxqp1pJ2JL5o1qtmy5PnLAUJCp7UMEqJTsN5eDEdgN79n6zhVeLHdQyYhgFt3Xohyimwx6wt",
  "key18": "qM8UtvDU42DbfsbarkUspWFZPLAZoCQVYBTyKSyyrC52fdbqUj6CMd28YVsBSEAzwLuqfCZFr9ZHUhDXCrtJEnD",
  "key19": "5XU8YKuGqkPhR31zqYfcMwEqyWjyAKcGtrq79Je7Z3E8YZQ5vVpq9vAub2AVC4rXFNJnCdwoLohQbti62d51h8NS",
  "key20": "4rfiSgTSGeRsE86W78tFxmuCy7oMwZbjFa1f43hq7yKKspgpq1sDjqM6i4HuQPWqfPEWvbyVt5Hwj2Zp3bcpGeY5",
  "key21": "2YRZd9R9t5aksqwPzdrbCFqVyKyzpHNURmETDk6UEJSKfYur7LZZ32UvKCP2gZzmemocaiXHkjsChCmwKTeQ6pkW",
  "key22": "5yWcu5Ebk9f6mraXzLdjVtr2MPASacW98j4f8FR1Bm3horzapZgAgZC29dhYaBWbsFRqYd9AzTXdP54vSnRcHFf1",
  "key23": "2nYGwzEMpf4nsXicQeexUVkLa7SHptgMzSRvMPvWgsc9y69xATc2hiiWtMvcEXKjkUjgPgm286FhKz1P1DMJKFBa",
  "key24": "3rN9ZfELG2bNVKNAZqd2UU3GSdK2PEr6JgjgXDV3Uq9tmcTfbi4rUP8XgPqt3ZaSV8KvY7batyYzBDwhXxvJ8PQg",
  "key25": "4D9kZLKWZwfM5WMyd8v8Ymp1t77hs9TRHRZ7LNtjQQtT8e2QxeWPRdKBia5Fu7aUnk1huUMp4B2wLB3PcfEWHJZW",
  "key26": "5SWFnXMQqeyt8XuPPoYpnG7Fdtdp74fxUGovnSae13619EBNVB9ZP5ySv7xytuvsspSsp2CBh6rXQ7in1aucRAMk",
  "key27": "3kWTwqZ8U7NHCs1bShXapHfqQX4xwmFfsGETo3JBCMfCGKpRif4id4WjeWExpepaLmUq42wLBaUrmCxZoCspwkpN",
  "key28": "2BqPmPsXqq3xZZ1wq71aGiUgTBsmWk8UXxoXMunHsQotwLkDwaqgiREqJuNSMpFGEgyDNMz5jXjT4aQkQrVBh1BP",
  "key29": "25DzmoxfLoaccjam6Tgz4NMKA8tK69cRTmfdgGj6iBxG6WKkX84oNu8ZpmMSZxyvSmioNySZw4BVc4YDbNKGjvni",
  "key30": "5Lf3ajhGpYL878p3jUx9wdJaT4G7xp6dVo8b8GNaBbf6dTsP1qDBGEFyXwBL52CYc11HY1CTiimv9ojBnKxTezDB",
  "key31": "5Z5MXQ9YtFSBFxXeGvFGxZf9wdJuLiJxa54AuBLVfA19mBLAmeXW7huDsSRV37BxvZ5qrDF7nfnH4sHqxERPtv4w",
  "key32": "5UBLENLs9dC3NenC1sAwmiZDNKkgkwkeB1rnSRpUa2JprLNbhsPEMqddA36f6ZCU462T1Pycvd3YG4pb3Lf5autj",
  "key33": "5qDAmi8DUd3P4ad6dRU9incmiiRhSTigYRRygjwNbC51icwbkVsiHGkf5HCiJR3NQk5udjvSg9AT8kH6AetrcAEp",
  "key34": "29UybkxYUErthRQyrP7VZUPgEz7bjVAVi2gU6MiJxCyxR5ksKZDiN8vbqmodrMJ7rzi4Grfr83ts6w7qSNFTinB2",
  "key35": "2YhAbP9TgJH1L8n5iF8wB439kYkVKZ7vFZFGqEWZtC8Vh1jy7LETwofxZxLUHDqdJMbzfw49BuaeZhP7VskQnzvR",
  "key36": "4WwpQ82hFWTpjFXULxpt5AaBakosQXuxuB77kLLQxpSkTjTkLND5F98YEgBVd188QuW3vpaPUTGit9cL5Vc98jMK",
  "key37": "34ReGmnrPDTcm5zqb5FD4iKnPucQHDKwCWVV8p1LQAeSLbtSBUeE7yWXWPVfD18g5eGK1NasuJeGgGDvUBnxHvra",
  "key38": "5S8BKy2KjWEvqX2b85KrofeFzyYHRqTdDzWs2evFKTbSVzfhBDdi6upmAYNRYhVCJtG3u3AS1WMidSzWmBc7sYrH",
  "key39": "4RrYYvnhKVigdsQYUTWXkPEFzfrQWCxuK5Bi2aGCwvmCJR1QiLuztEzjLUgYzLxP7DdudeCHpnUu2nwyCMsPCXqU",
  "key40": "2iq5RkKKZVz7qr7gisJEWhRSHeVjZGPyjiwkaejJZfPez7zDTBqJjfg1XzL7TYja3rNJYbybLYWTJjmnHbyDp93B",
  "key41": "4SexSYkWxATy39PYpjcZNSQy6eBNHdgqVEM8gFPURag1bBkL7p68agfGnSgaG7WcTea9rBa5Ev7Z2Je9cSJ3rWiw",
  "key42": "46jAJkZRzw7yNErjTmsrrUEksFMvrrrJQHPTBfzNv7RkEceykf2gkMYumk7UNfMZdhRb42eWDrHg7TGRnmy1JtqS",
  "key43": "51QusxCPFKgJNsS8rL1kxK3hg349D1v12vwcSEVAVvyc8Nye1bEHRmL96qz8URvh5567muSkA2tqaMjfbtg1xLqe",
  "key44": "36ALk96EQxpmUTuikJuhZ9ShheZ1TSwHb1nckc7XanUMF9AztcaNn5RNi9W56ZBdG9ucVpA36Kogqxb86jjirGjX",
  "key45": "35mTasuyZ7uMaqhZsdm4enat4CLjFxjNRaT6Pjw6AFaaMhKPZjEpphkL5o19PUfZipS44z6M69XnWNPGEtR8G1N3"
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
