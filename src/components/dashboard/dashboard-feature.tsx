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
    "4akSuWUMYVmLsLg2HQZ3hGCQ1AkKrhJRMgUispNWQRWvixu7NDHyDegFNDeb3Uk86yg8VzFJoSNJtjUFCLexcbAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hku7jgscbzRcrVzS15XncqPZTP4pBag8YUdVPc3cwoT7SXQ9nRMcZejTQsNKC3HM6JBTmVB8Bhj6VPssY4sGgp",
  "key1": "m4PDTgq1EByr95M3hfaC2FaCXpB8n9fCevKFLRFYiP42xmsXrWdRnTS9yJAwU5KWPDW6v5Zdt4SPLrB3bihJXxt",
  "key2": "3b9Tp5pGGyhhMUBNR7uJGcHmS9xThLSPn84BEpHZ7U3S4LSbkLu36sANNUGV8HPabwgtpmmSy3eoDpVSbfhDHZXs",
  "key3": "5TV3MUToULeE1Cqj638NVTr8grNZ9fjLY6v7dVrEdq3jcEQpSrUWM6v5xx9u2PYLnk2dSKN1jnQVybZF9do5Hr3P",
  "key4": "5bp1rEhXWzTKLNFfxvjvL2tR6BW2ms5jjKCVj6DuGBbC7u2cd8vFaU5gquDWa9JhDhR4ZHbBPYP3TQGxJFvdNGMp",
  "key5": "3QP5uKZyjzvSnah8TdUtD7HMJmTiT6EkHgNgFwP5XHbmmkpnM9tWLty4ABSGHijGM24nTEntopQi15hPz4Mr4LKg",
  "key6": "4Kto1SWjGxX6umbe5gsiPLN5ibq8dZCYETAxL4Pcs22Tt9GeAModctxwsSWJDAgmpf1vDpY7u6vMTuYWSZK7XRG9",
  "key7": "2YhmKiRimfvQPLYji84oHuMnrGE9L4thr1LUBCZp8iVgBw1c7KXEY6nGsmJ8EDXWDAcyiANqxX42hiE63VbVhU4C",
  "key8": "5FxD2veeHkZhHKT6FsHFULjY6yZVbP4ZUbvLaDTJdQNuNGRtebCG7ZuSoxs8wP1Xxu8muhhfgVr78poANNao1svM",
  "key9": "2SrdKsMDcUTw6ZraWkP6rVjTNRKC8wndBSDMSPuSrfpMUXM5tLoPYXqAzmCkDaCMbPYkmTf14y192P9Xc4fKGXD2",
  "key10": "2JdbwQudWxEudP7QNSi4aG2eoVRMKR6SFDBmDVPytp6g6KtunU2NBQHNWioqtLQFFHGnZduQonuTEMWbmCPmH2Xo",
  "key11": "3KGxBSrwND51Ue4nCqbVXGci1aiH6qnzmZB6bPzCwk4ZYrzQbhqzhUiXfqFmTinNgeT9wa7AULe6jgVuGaQaKVsq",
  "key12": "2S4GfZSG4rBYxEqFxTsMh95DCRAvHvDBaQwKa1Ub1ZDt9Yudoixh2b1Kmdy6cDvxEDBRdxCGLGmbd1wuRXJaNmKq",
  "key13": "5aioD5r4yKzPruqqWxi1qMN8b3hJaMahFc6GWFGUpiBTUQLij6ociXcUpaHL64NJsdcxL6UmNgcMCWFfYAtD7k4D",
  "key14": "66tjVxHWWrymusA7QvSWWpd1jLFUp2gJH5HwpAWK2fsAnd2XcfYYaiFxBYKErCq1H3UxbgUW6X1NWou7msf5Pui6",
  "key15": "55zsJ2kbgNnVaFEykMyanJwXY7daLSHyaA4KXbaXkV6VQHSGqEiS2hqyj1hpukDLbTcpM9nNACCj5jj319UFypw",
  "key16": "4Z1fnJTwzBygoKqs1UAhoDH1eUatMaJC9YNbmDjA2VB6E4Xheykt7uUQdY6NAuvhv5qjMbRFekR7YVWvBUiazpPK",
  "key17": "PJqjjewdnM4wQEihg8T297FXzrEeUGpjeFtKJoSi8bz3HqsFf41KQXwM2UGpJsMx5L5fodTKkDjHsAUzoFBH7Tw",
  "key18": "5whZJAy1cBdh76JGv2WPCKqhzBf8q7FaTPhQtd6ksMvt1DkWrVrTFUA1NUGtu5NJKo7EsApbokSi3jXZ8xKmnA4h",
  "key19": "3PDjwA4E1t51fetZse4wEe4u8whnxyFfzUjTZUUu4cAGvgF64Xnt1uLRnqqB8GSKbeAecVGLfSo9Ei2eCUuSp5ZY",
  "key20": "4bBQN4Cxq6DCqmNXuSFk82FTZEM9CcE5sL2B9eTsWe7LaCsuXzCHWpaqRdAnCbtrWSkyF9mCfhkb3uLaZ73w2V2R",
  "key21": "3JgzeyMgavzGygdn8sQbQBBjgVQNd1grZqtXQgC1LRqRYP35HbvLqne8zoy2EchDv7dBCeSxWUS7FWfuD9qxMXKF",
  "key22": "4Ro2iB88JNkkM3dyWawnebXZV8z1er9BzU1WJQdRVhGFG6fvECyjb1wnHtKQuCki5eVjYQ8MYr321TSrVPHU8t5x",
  "key23": "qVgRs9KBCLuh9Ctpv5F9Mpt9bV2c3uWJU9YSwCS1kE8qUGbwZfCHZWaRoHcJ3ReAVZCMwLZYHAfVZYnLS2odJaZ",
  "key24": "26qf74pM5Mpw3ZXg59rPWKMJZ3XWP7gJSFr4VM29nCx2eoEHraTX6J3UKDpXY7JUsufaTNUzHcQyuxcdUvS8nnDv",
  "key25": "zxCNuePJhLJE1URsWgBooaAeg2oamyHDxNoauAAerhFDsrCJJEv4gCGq3Q3YK48G9heUwVxqSWt9Vhoui2exSkN",
  "key26": "2hiemPgUn4wJP62VMsjwGA8V8Yx1cuz5d3FW3XZqn9DpMEQJ4yeTw7JWAdDwBZbHQkVHkGewsDqyLBtKZ9ESWgha",
  "key27": "4GApe7BRaHzTkX1sdSpe3BsaYBYaEd7JWjPRd4cywtyebZ8XkJr16xmUS2jfPpWkLo2oZ1J23Z63VbPmjPeFZPop",
  "key28": "2VrxFZPojzmAmaBsJmWJPdwXU7G1LHpMwNG88rEXB8GMC43K5n19YTGHxotukD41XaFfdiTMKxucTPf629HrZkmT",
  "key29": "8r9zdyxRqq7jtu8qWhyjwDR61JqQwFifqJy68KXfZD1ogbrq6PytPjnYKF7U1qgpAkEbdBzzeZ3T5rFyvCtnsS1",
  "key30": "YtTT9YXQAHZqj2LrPvFydft9bVTaQYS4UoSvZhzy5KbBNMQVVCdM3QegWJX2qN2apmZnKWsEwt9Z8pHbGHxFGFS",
  "key31": "4bakFYH6a4cSM2f9BgCxeBF6kPF4jwKWzcLD8RBLtCUcpT73HBXJw1prCHtZeMiyPNNsdJUUSC9KBUhshY6hDxhb",
  "key32": "2rYpzsdbxrY3ZK24bgyJna6PaHuptFDM4HocSD65Kwop9c6ywmW1EoqqRQaF9AUkJKoDdqsfbk573Leas1e8MPug"
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
