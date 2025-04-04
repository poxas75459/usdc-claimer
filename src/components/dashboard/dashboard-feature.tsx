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
    "ZNL9JA65K9KyAnPNQXinFXtkxFDfbJg82CobBMSe7r6sDeYydQxbpei8QZseZLT56HEPwjvRoc8j5Lv3eGVQNBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QVHucYk8ZaCyifatLZG7iptUK5g7UoEtjsjetEdDt4or7ijBMJxqAb7cq23fCgyP8vcU43EoZknoednpwnCQW3J",
  "key1": "5wFSAFGFE2c3PWzjF5ExzNF5KxFLoEPkhtnze6KmWv7Uz6bpCX87Tq3y3BnaLmSpAhaRCDEUgUJcb1LhKRvVcFQ1",
  "key2": "4eZAwo8tqQPrQidXxF26oMsXC4dWsGSmaEbcUfAYRkt2U6cr8UKcUJp5MtigQtJDNzgxuvvasH53vSZseP9DAipL",
  "key3": "5ZGD12isgFndbuPw1GULnjrdEWvcJZuny8KofZ6xqpJrprWfEWHKhGi3PNEzCdN53v7beUM5bLHcNRGU2Uv1tsML",
  "key4": "3cYxackHSfWPfRK8dNsH7yxAuBUZ576Cj8FiFEpGCmsW4UVYcPVq31paw1uFMD4MxrJVhFtQYJV5vPZxYq5jDrdi",
  "key5": "4djSZES3GbdcN3n3n5YJMJ3xA2XEtRRmfE4tFCeG2g5Zce1HdK1DsXmKubG59ncaCNw2gc58aj9VLFopTKdX9B3X",
  "key6": "329UHHpmmeuUM4M4hHeBypasxwN5Tuzj6whbiXoZxkqDZ5xd9wvSz2KJZUFD2oryqwRvVDfs4C5mZ7HYpBakFkWG",
  "key7": "dGKKMVh3TUAh9ZCxuZYT286hVDufMKJDSjSBycZVj8VKkjczWzPdwbUhwsWt2GvkSp9DoSkomPnMYrytiE5F2N4",
  "key8": "4FHBDbH1HhS9ky7djWHusMCcQkMZfFNPwJD9tT13JfHkGXmae4UaNVCuyfdVjwks4tC8SM5GveY5RT3DqPiVEzgT",
  "key9": "2UXDPmmUTpU45yW1fJPvGukP92zYcAU27tBmLRZprCvxkATcKDSU1hUZ5Wgre8QzHRfuqMAKfN2CovfGKmQYrtiJ",
  "key10": "2iSUJuRHneV5JLh2QcyaTaq9jiYH2dwZrTbTEJPzJQ7ts2AC6FknAasajNCMFQg9RHwwbeStdKuEvtSnhB2a8VvL",
  "key11": "4KkuEVTJ1SJCgYFezfQqvRswBmByaLyUB7ESmkDhc4PAwEjqrhmBcooBrtRQXdABZVuW9ne3LQfZHow24m6ECrTZ",
  "key12": "5Mqghx52TRtA7Syn1MTRf4EjBzRu466npAiRqcvZSWqiTRXaCbQsdRLo338frzZp2FHWjr39zEZc2jMEFGhmKezq",
  "key13": "Q5rQW1gfYpfBaGr2SfXqP5PhiPbHGw8BwLd6a33hxUcsycKdBqzr3DTNyeQ6jcw4T4TQzaBEDyZWZ3NNKsEuWmG",
  "key14": "4LJqxbqxnnmopdhFhSV18puzfVKdXPynQGTPfYNrnbPre5fPsrmWvFd8wdxsuBrSb5W45LYZfoWn1CEHtfJZc4qK",
  "key15": "3kxNMK9scSPHGdbmqQpTtBu8Jq5FvYChF8R97Q7D2GWPCBxkkKvSs4d68wTSuZKvsKdynDAmqFi1QWDeymuCDPj",
  "key16": "ZUBpXwDtKYD3AaxDkUVmnvYpGMyUD2TQNaL1bZg5eHmowNw5GBbQ15Bk7ZbxUG1C1Z9uKf8Hjf85GcXwhUCBTwK",
  "key17": "5j3jk6Z9UXdAXd7LwdNaZdk5cSRUKaNzrE4pJyHTaHeXCkaV1ajiENGHYbTJkBqnvUHwTVZrZm3PQXtNATxXKaf8",
  "key18": "cJkLDB42VvKAZMtozQafZV8fpD8reMxN7DjuCiXnsSCM8h4eibBGmrFaTGWAZoSQhX35FD1PoR53zYLsxZiQpAM",
  "key19": "3JQWampGZU8RRGp6SRWPtXPZeaF9iDyjrUaL99S5MUvWPWPtgTQ9PDzvQxxae1ms8AZzRGdtobqsakNtTKCUoaDb",
  "key20": "2TNzNUXk8dxBXwNASbVsqJw87GYyt41b3gfvEb4kmTAuwvVJ1UAXXq9yTJvS7qWRWRV36Z8U6tjndn9bmzRPFjJN",
  "key21": "2Eq9NjwmGP95Ku6gyjXVEzFuH8dmmp3bQZUYRfpjj5Kymzn5NBrmgYN8nZro4mV6PccgrPJLi85iL9N9R8mvg8t1",
  "key22": "3hBgfxwt2B8nGwrrcbVYckwqWMjUZAWpPTpjvwH1T8ZGouR99kLinCLvCVXvm2jujqU8A61EAC8S5jbDxmZtKk1A",
  "key23": "42YPhBB7WMt7CwcpAxzPGeNaKhghn8bYN7NFqRPBSfjw63grSFbq4AhA6yNwh2iz27hGMyB6R69u1pUGjpRViEbA",
  "key24": "3yNazzWkU7kHHZdKFwDDRgpve38WoCatg8SzrU9xgRs8wQr6jyLrwmC2fj7BsGFRuAg9KQuTVVnA6UhkViCDV4JW",
  "key25": "2C4kZR3dV87kXHEY5CrtYuHCDfu1znazHdiZjj9JWaccNXo3zVmVgC98HNUs6peHPoRfv4L6TXe1K7zqMHwqusBX",
  "key26": "4BF2zHUskQJ6ehjqUNFbVyZvqbPFs7hTkNpud7DzYPuZvc5VoseLSLD3itPqwTaapaWK3DZKrQ5a6Za996Y18bDo",
  "key27": "5ZDGHDwvks4gGM2wDFSHcigiKDAeHTJ1mJdtK4ciT9JYK55Ry2Ne2EmWyqiaJFHTXxeBpMwgU7ekXd73r5iPDDui",
  "key28": "4JdaY3hQJX2uKSbykMUedHexEjoDz1hx47EFYRxjtxWDLtX8YuYT2ubswV9YYJez8twcviRkUNBLaGYP1bHwHQQ7",
  "key29": "raguH95amJ1JLUfYEvnLyQ4kSqj5CiFFET5myUasmmfCAZDwjHXG4souAPq6v5D3aePkZWz95K2Yk8Uv4B5NrXy",
  "key30": "5YDFZQKuHhUupjgkic2fx5SkriWT7vrdZbQAUfjT3g7Vm8dMSZe5uLDWjERi3zzbwHbjfVgPX1U2TJrq1bKBRXRB",
  "key31": "3g77QkXqWsLmnRV142qcjzdHXuzfk8J7ybmzuKG4LPzf6ndZQP8dX5W1C7EGRhLNSWwzQQA6n3nnRrv8nh8na3Hc",
  "key32": "5YdKfw2GGnTaKZFsuedBS4tvP4tX46asEU1vhAf8TFU7Z2YJqtXuBvJ61r8SbbQ59WXHJ6ByziK8Saunnvm5NPxB",
  "key33": "KUuP3Hqi1TATYx7Y7bsJbzntxtoL1uHYUvDff7Nx8Jg9BrJMbS58npVF5R8KY8pX1xW3r2Jhs2vJKZwuKs9FwyJ",
  "key34": "3ny5wTDDKdGVZLPDaLE4EZJtQgVhcXVtrK9UAufyicyY6rfPT37zg2RV35heaG45bMnxJLgYA9N6kXHrPijd3NrR",
  "key35": "h1UpRHFECSnqmGCt9Qgp8MQKrDcCKDSdA2HZMu6REqYJUqmH3NjQL2Q8EKQqWJFWQwgySsaaTNbCjjGp9Sthwh8",
  "key36": "3eGmP5kg1TgNFARrEgdgUkTmgFPyGGQ3CjHqqRXC6vygywEt3KAFyh8WzPKbCnkXFdyBiBaz1WeRDL47PcCYaXVm",
  "key37": "x99pkdJqJCYDPRHx8BGRnyK48xFEymVHpsvVFp8XYvH1oBEvNVDoH7HNw7p8xTsGzoBYeaBXLvDRSjHvMk9wC32",
  "key38": "4Jd256jaR9cnV1vUhzM4KFuFq7ZppykFd3nmjDAy4rNBS6vnybeG76e3jacSjwbA5DpzgMLRUef4M3mPyauJAyqW",
  "key39": "4ymmRAqbWLWPuMfLMJ9tZwmuLk6CnxYvfkFSH7St7Z78KxMe9RHLtKiFzSQY4wDEmCVwmcSnatm5WsL1VFsq8NSQ"
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
