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
    "3gPvdcehErnrAUt1MriizaLyDBRa5VYSMcgkd2SPtZoSYghkKQaHJnxLaBtEV7abzDNSzWxGxSStknJfM2TPxX8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38h2EM9wHvJaLsdRQmmkqL2ZZqNQwA2myfnTpXCa2pVE9ixfuqGrX6RTPn81fbmqJZfyyPas2v9whK37wCzktLFA",
  "key1": "2FQiXSLPvf9xjyNyGSxffgmo5CM9qaxzTb5euANidSfax9XY2yLmc4N9KH8hfkqGEELgEHSi3wGqzouFjrH4QjE",
  "key2": "4RQc2sam5WprKRhV2Fegvrqw8B3KJHtZ2wMrZKQri4PNog5G4JJY2EZVg1LLhmAhZJnbXsZdyyFYUYxx2dqubnTb",
  "key3": "335LYyZcpQPQ2Fpm9RtuNaa5tKFmZer9FpovajjkaxCR5DYogzFsdoeFKoem9FVAW9b7B5EUschQ9VLYeM3UBTz5",
  "key4": "4pBDxLimxLSqH5Ye7Q6p2rTQUs8Lf3dSjohZoFgasffP455HLT1N5xRu5qJZ6b4igLu9GnyfAVvgCxsM5HUMuTLh",
  "key5": "bhJ4a7f2AsFGQyWJo5E1FRPTDrtHbdAgpymHRzrbYtzyN1wiKY5WL7sYYhXL4cD7GcZyKgQoNp8ihmGBKiQhB7k",
  "key6": "25i8ChdVkSyNPDVgJF9o9wwnzkCw1JvZ6MihvYuj9hSM4HtfhHHJgz37ZhLsMA66ifgWibAJ68j3Z6v15nbuCSiK",
  "key7": "2L5WcwxcPvn7tFqvwhozda1XAroKu2MfVM56rVST3MhpaazNXkaKEiSqZAq2fnp3uGDsHMZi5f5Tx6PQqDpBiswJ",
  "key8": "2KU64xJmfd6wpxCQ43p2sPpWYGpGkWmjvVqSKyXVrdfVNc3EBBUkb8MU7Ze9jAaNSrCVinsaHjMT3R1xYYgs1Bq3",
  "key9": "4BawqmNUvDhxeYZwEzqUZiNx8NRzrKJfMkmoCTcJGXtcYqkuVFG2DEQHFhir8KxDossJURCgS3Jx7kLbCYvRFYEC",
  "key10": "42w16LuShgqdejKiR5shNia1BjSgdqydMU4FT99b1Gp7vwLDZXFQU4tLfeiN84QaEKBFnhakuVgHWkc56j1cwJNz",
  "key11": "bQ8igqWByE9m5eFcFtxsY3TfKssUy2Dn7yEkZDLwUTLxRniDHASqDWGXaAwwP5Ya52KkNsMPoMmo2ahZEJiusbn",
  "key12": "rqxumS7RvychDMrZHzgky7fpS3F5DXR6ug1cxJqtJr2xMRehuWG1F4orain61cP7ofQmwEniwXqvcDXh9EdhnLe",
  "key13": "3wuzQEUzWu3ioMajYK6EwHRKZr75A7agGRewXFjHriZWRVvupDorygskw6NE1q9VpkHUh3SqeMEbLPymYRrSEtFF",
  "key14": "3j7bcWCm7LFzDmB8HRgdhbwc5nTWcRBM2WeGvVg2ceq7L2fuBDTGYMCJG2aYhhACAraCDTnvAHtjAan1yYDhC7Vk",
  "key15": "3NBDEWxURTtBuuVURCrrU5pVre8pyTNFSutMAa97QjLH6KCT9nzGTbgeep9zQWTg1JpCxKc6CRpSgHa8z3QYDPdU",
  "key16": "51eoBfKrubLwCLJ1eXfJhYbk2SVjgZUtaQFA4G6efCzJQQ9Bpd281o9ZDuH8k4YxhyJsxhFcbWiFFgm46MNUJENF",
  "key17": "5AAAp4XCLGbszepSCKnV7YZP5HYNkZr2ywBf5BTnS2FnXr8eYMVeNEJEXUMsaLqrghzoU7B3L1uA491jmfBtgM1B",
  "key18": "3PjKdyGqhipyX3iJRo7s5NuhXdUnSpaAFPZjWkMsdVdaTQJqFUc8sqSujDvTPrPtZAtmBJX9fcGknR6TeFsX6J31",
  "key19": "241hTCqcNH9GaaiFbbdKaGVYnyUZR6ZfwACfQzr2anzfDokrXjdPVXd26EVHwC9uwKK2xxjCsnNJVrKmks1xaGaX",
  "key20": "5obTCXFiATU5QtzrXsLCE2rwLGekoDTSXbExhBaX59yFE2QfViRqJDu2Qg2RbfdzofZtD8cfBkHQArQ2GwjsRbLe",
  "key21": "ZLeWyoKwD96ZJurR6tQcJj8X6ki72C55VXtd9xfN4r1pFcAsAhAyBF5QnyhmWE1hfWZPNibxjGojqss5bVUPcKH",
  "key22": "41X1k1ADjhYRnFQXkFKuj55b7by1ddybn6qVp67E6AHKXryx3uGNrLYk3WThCCEYLo9gnUyuAvamucRp3Y5aiPyV",
  "key23": "2nnqpQjh2g5AG7Gz4tEnGBDDSN1rLjcFfE2t3NwXgXBNJK76szhbXSUG3vksF25QnpqQsHtuayj45YnorgBkDvbc",
  "key24": "3cHJgi398NXEzbE2iNFm2oZH4SkByJhrGz7sRr5qBd2j8PSDPvdTcgAmQ6JyC3ayZicaHFcPJzYaNMNVPT3CXnVr",
  "key25": "2i9v4h3BUdv8vmRjrU7hxknq8Ts6YEq3cQAK4rgFxTYvXnDU4E4wBevErbVHYFbqWUgMtGSxUS1Jga8e23nj2x34",
  "key26": "3CcVZH2PEUNgZnUJYh1ireim4W2kKF6P2ZKtno14fMJe8Y9WkjfK4KCYSS2DSE51WBsGVJqt8fGLJiSiy9nBHieW",
  "key27": "5EHpcDDzuzgUt3seuyn24hXGb5sikxvSGgXk4epxDbHTL9D1QrUJ3ZUcdo2JNsWBi8ThTeFsMP3wDYk9zRWDkFds",
  "key28": "4NUCbn4W3XKyan7BQTEnuNscggDzUD8ozCk4RDT21YRZBL6ceVnZ89vfUPu9AgHh1ZzazcpQHpZwoXHUVQdpjznq",
  "key29": "ZjQs6FYKKM2HAkknCXEsPnf1dCEAhyBbzbtnNxt8L5hUaBTWe7AcrxyX939Yz4VxhesR7aCtu4U1TKrJoxYWVNs",
  "key30": "3z43K196rD47pR5op7QTN1wrjb2unxrZbJa6kU2Uw5iJqimN2qWucD1pfZqkhxMdoXrWmTLCK561Aa7sc3HuDfGk",
  "key31": "yDumxa7pxyULisiG7Xn5V8ufWqv9gEmykv96tLtUHeXE1oBUPf4VUpbGr5SPT8CixXURr3WekFW1a5JBgFhGzTt",
  "key32": "47CK6B4GFfyY71piRqfR27RtrkGpA9ywP9xMQVH3yPS93uDRhXSom4ffaAG7LPJKiAHTAhafjdqXRYuBYNkKohDy",
  "key33": "4Lp4GWbiYHtcKYb4jiNiTHnVRFv4Nia8z9o5jATE8HRhYfYqAd12BjSwSZhxmrFLpG2f1xqJyxLaLPjRebphCrwh",
  "key34": "3vfG1FpXG7icTosN8zpdfeSFia5vLtwShqyugoRgmt9voEesMnX71KLT3SC4euBd5Y9cH1JpYnt35eepGVEer6SY",
  "key35": "3Hn1oZYBxRRQmvwnxQNoXWhH4cYW4iXkUVsjGfSedAPtzh9ACX5HhkJiZRxfWBqdNHQ1VBdN3vQgrsmsPf8mNhao"
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
