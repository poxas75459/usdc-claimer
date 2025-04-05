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
    "5s89TUAxTdt5w4K9dfAA9EccSRjwyi4XMFcxTW1qY9z51wdaUtk74F4SPTKwdcNYRdP7HMNtRkbpaeU7dGUmqpGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZPx3DjSH3E9PRBS1vgrHydUfH2eqmRsmx6o6C4qHWhSbeTQkSnWJaP93UxLGWNXahUC1bTseG9doucks15bJgj",
  "key1": "5UPjNNjRo9E3BgEiLChqyb4PuHGX7k8EZfyvQcRLX2DdNZduKpytGetj5TM1YziNZaq17ULTdLS1gU2vUXftVPcZ",
  "key2": "4dAnKst1Mg5wAY1cQQSDq1WUjvUg62ueFmZvdhR4JfvQzepichqsUDJatTA48ZPwDxtHBwprA5yp4JfpYXkJHzMw",
  "key3": "57SiarCZYYDZevM3jK3GbuhQjuFiF4j8V82WFjQw1Yxq4MiV8Bo2wi6CsYgsbfbe2dhgKRPmpVpdQ89exoQPXEN6",
  "key4": "5M63Y3s7vFqX1bSLhRzHHp3MrMh4GdimQSdGkwy9cTb74cbKc7wi5W79hGdzLxBHkxc9thudiGnUbFAmMdzqVHnm",
  "key5": "2H3amMP7x8XSpgs5JR12rVTpWeT73AXz8xNTLZbqFz9MykujtMSuWofGsi77PcWPKAi56MaahaYv3JNepdmF1brB",
  "key6": "62s476Eg1kSFBgT2pFCfdtWbWRAVYqVsTSpWQzLFgV1a3NfauCYDZruH7m4o7TfUBQHATHDyQQYKiYh16MCLwTxf",
  "key7": "4FYT9aYqVzu3Sb8HmGfnvrCSjfjg32cukzuSrTXwkij15hp4jr8Jopgun87LJDacSCkTwrQM2KyiWJbYPfZj5B2T",
  "key8": "3fWUGqPCqv8o7xPbcfmTuP6BFwBdvkvzAoKq3NpJjtDJcPqjZ5XFqy9me8dXMoFkXpzrkVfYDxcXkS5m5mfQaGg4",
  "key9": "2iJua9Th9s8qPBe7T3m75AERWg6KxVq43xS85soksuA3bXUobFjmuwGxKN8xTeZgqigdVLkpaZScqq7vY664Y3hX",
  "key10": "59jhmCVRN9Xr77JSswcnSm7fzYHurp63AbnUh6UcsD9tpwHNCUjGMoLcvb8TmRh14fxXWfzrHuDTvWqBfPankgi7",
  "key11": "aRzPrk3tcdLRuLCUuABpS8gM8TKbkMQcGxZJvW1TcSQRGw31f86dPCbzSYY3CwNyzozkhVfXyKs7xrPpU5StFzq",
  "key12": "HBwjQPcR3n3NmUn8LhgQd5KujGKDcCK2EszFjKUjRU2ZvVAd21Rf9mt58sMZan2mq3vDB5txoRt2mxB9RgdAw8g",
  "key13": "yeypyBuWipdqnyvNw6KNTd9vew4iHhwmMXU6gYZ69WRjCoNZssBSRbShKgMt5bEqbHqPvKUegWKjgLggksu6eyr",
  "key14": "N316cix72g8h7KjH5LoAFt8XdFCSp42V81YE3RLJKjUYrfVBBwziJCkU12zBs6RC26UVhGdkQTD8bKF3MzSoVw8",
  "key15": "3EgMknJx1Vp8JuuqK8JUk4CmR3F2e6UH9hE6ox9r5ZfRteTETzayWvo5L1DNmEuLANiRsgJeo6Tw1ZgtbsTpByW",
  "key16": "3882iSC7TwqSfqqaoZL2Ni3qMKGw3qnyrrucrQk3DsvobndEaS9bkfURXSTAxFPPbUfWh7jcxHHkytrhH38zsCJE",
  "key17": "4mDLmnewWfKB9haPZFYhvoEqKSi4yNVSYDbjhrbnc4wgtd9rdHajPRJifik21FWhjC57G5sfrDCMpknvGZHXGsqs",
  "key18": "6y5hNnAum1eUXczWyAMUWPdnLq44pM23RmR3WbBvWVcVBiz4Rk5JwS6BihbFUfW1TymQQAfFGALbdi6MrHUcysg",
  "key19": "31JnPcU5oyjRVJgsDQFUuvHU8gmGLkao5Fu4qJubifyPiHgMyWLzdxutxPN8h6gbHZyFoyCXZRnbYo7hJ6Pyhptj",
  "key20": "3fxnAT5W6pQYqxgUgxwtA3dTwvG5UXPyQNxrkhbrKGtsroa9rcEbTjuHNyra5fVZjWTADBdkYGrr7hMr95kzPxev",
  "key21": "4zKD1g897dpyBbTTo4kSYFiz9sMXPkgmCz7QcCbin9eoidwiBXXtp6xiR5NcKtfeoUhcLZ9rdeW7SGTu3HcmSuVV",
  "key22": "zioQt7uUDBb6vL9iNJ2mYiPojnKcju6HMbZS3jLre71jP3DVnowXEdHGSPudYAzRe7r2zvGQbKseNYdrzdxFA9T",
  "key23": "3e6J7JgEcTNxg7ud6pynXjqGzNdsVkS7CiiPU4sSAFFqT7Fc6c7hiVHz9djFAp7oerJY6Cxh4zP9EynNcJJWS4Uo",
  "key24": "grKJc1AVy1eTYpmVxUoLXSJ6iL9WwgyGyq44GucPCzTNphr3EVPr2gn7L1WA6PYUswbgRSKfgTPw2WZZKcHNfgY",
  "key25": "5bWDC4HQSLzJXDHfH7y3Nx1zZSBbSuihc5TJkDzZWjc7iYP7qatsaWiBf2xGgbG7VmcwFKebwFGSeMExV2J2LVKE",
  "key26": "2L7qjygG1aLEHWjdvEXQfGpVNaLNzDrb2wTojqnp3u75xgSAznHRJ7paBYfhYzwDGkkb4wd3AX9G9vtfCBbZvJKZ",
  "key27": "49dUWY5L7pRh5pFMbZWKn2f857AUej779Y59LaPgamxQDcFy37j8urTNskimBzcdYZtxauAWFRb3Q3Tr8kT7iGC9",
  "key28": "5Kh6HskamcwGfG87Z3kfjHb1jHTVjBy9BocjpmVTXGjfEcjLdpwNcjDpEgeeWMpoNtt9FKfCksnfsXkZJL4sbi4d",
  "key29": "5SvyXq7yEMVnSBwDBCw9KPYiiyQ1vbzCYYmRqnAAc9cnfyipmES3b5xeDzSUXeoPutzAjwBwAhcR9skbP1NhnZaA",
  "key30": "2dSsP3zAS2c4FxUu3kYDe3C7axXnsbdQhdJuNQjFUxYx1mBDL6hjh2okHmMT4c6azYPD2d37aUwcTvaJVzLc6u56",
  "key31": "491sMQuUidNJAx54Py55uQ3sPyx8gVHDutnDhNyxWQ997qHL9BNf3uPqwGGpS7bU3NrAUgpS7PY1keamWgS9KTMW",
  "key32": "9e8gAAsx8tfeRh2MUj1Z8MArmmuFRoxVzAtaixprmse1C5YpUb1VJVeS76vyrGuXoYBBgQYKsUB5mrPHKAt2awr",
  "key33": "3rxQ4jgZzrx4JrSevjjKX7KBopT3ts7eGFEzhEDBWRpKAPjNEm8SzHtRpLXCv55q3y6PbtvEUBwRpYXi2ndnncGk",
  "key34": "3PddRPDYpAKEoztAbKEQYenp5RjtBu7Rb7jsZpdzVbNsHNUUgCb1uBjyVbEzK2TJQnsenH6YELoMjuUaZ5pXL4A",
  "key35": "5ASvesbCAWL18KZPhGbN3CEfnDMgBtDdesuft3PgpJfNTSdqxvGipYsap1UxAruJhg1W5SPuCFmMzreFieFvRYEo",
  "key36": "3CNFAhe1vXFsU7NPD1TaS3vrCSaNEGHcFcgy2469m7orPuZ5mS8eDcpWhbnpQTddCJe6Nwg9b3cwHHP8vX9gsWpE",
  "key37": "3vuA5dSntSVRStjT8j1L99TxgYdGou8t7QpcYYp6mNRcCLpfz3qpE8WsK7mwiobhatETRwDCaHeBcDdhAm3hjGYH",
  "key38": "4T3rWLNZwbba2T72gR699Dt5une6Juw7gfcnzFusmcusUDE4QASdxHWCb6awJ9qbuCLVQLZxio67PYvbvnEwNeEB"
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
