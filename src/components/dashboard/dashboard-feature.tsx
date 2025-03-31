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
    "3YByLLsWmcJzWqJ3ksYYLdVjAuw6MXwHt3jfQiP1hHMSZm4i9uBZP3jnHq3pS2t8C28m2fQVkuvUhEfZVxTrcjHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbXqRL3Z5G15w598Tb8tuS8FijGaxiVVhZPXo6jWQDLUyMDQNGFFiGmk1H3tfD4CZmWNyEw9PMok9bUQi91Pg1V",
  "key1": "3hw4ot22EduJHGhG2aKsiY5s4MXon4TjvDZMjEj7o581MeNjwBGrdYjmm8azPSBkmuep7Y3Vuf72ZDoH9CwS1yXi",
  "key2": "5UkeYQfXGEhRrw1hthesX1y3jTNUiMx9oVnwoRtiNq1R7gymifihw2mdSkBbvGuShg82Ahtuouv7cJTUZtn89XVb",
  "key3": "5WpUWWvB5JL4i1BUqctsRk5ZXBhTmrasCGbmMru26qjHNTJR7sVStPRrJQufwfDYx8xaNWoi4MNuMrR9mskGmp98",
  "key4": "4iq2YHSPckohAVAEATwFAdpv83RYxAQ683z68uuQxRsLx1nECZp1W9JgmUdcFLWkpaFuRRmSCYokMP3Gga4oWZaH",
  "key5": "2sYHe9fCgCeezThRfNUPu4R8D9aGYywpcgUT2sck748u13tZDLm63wo153eJQSMJpQZvV9i2Bz8yaySwd9Qpz7dK",
  "key6": "5fR7a2LFFUXKspTANBK5LJZg67xtPrc74ACzCom2NN6vSqKi1bNdnXuPSJfCgwNKXo2jyxDUQN1Cz2vjRJg2Yshf",
  "key7": "4BuVAjk2tXYn9Sqzhs1dDXSsQTAKYiYfCRs3nGLJS5VV7LdvA3AdyWcyqTkLJZ3TXC4LU8LrG2kapMTq9Lfc4ETR",
  "key8": "HSswBWge5bkQUvbVQoKjhuEPU14NSpS5gadRYh64BUKVHHVXRRN2F5yV2wJfrKktRMtmG4qYRbDeSPJ7oHypFoG",
  "key9": "FqRi5tf3YDUmApfWPUJo5u48Su3CwEAZM42T3eVwyXC1a52fHn5kE1t4N1DJfGu7VjxJa9d5EUG3sQXDCpPP7yQ",
  "key10": "57zZUdgvPxNdWuqVPe7GUBrxbTQZBrXVzArNcKG2ALVGf8YzgoE7BiGo2qVABm2LVAsTpLeme5Wu29MV1Y7HQFKd",
  "key11": "q6XhFCMXYVsRcrN7NR7up1PoKVAdKpj54E41kvihYWEmYoRA9KNhA4hEau1gwQyRNqLZLbjLELh1GVT3Z7sbn1m",
  "key12": "NgQYkGMHiKLA5CuZGvTRdPfHHGGYahsE5sEEsxnM1peyJbLk3CsXtBEBRQjnWF8PpgHXkBsNnzZVhxpqVYjdTHj",
  "key13": "akbNgzmeQf6r8c48XSykWtESKP7S9YTt6UNPh5dRE9fXxfcWtLnJyu37pXrK482ungWmX7hP4MzD4JPVWC7DKwy",
  "key14": "WMTmtNtfEzDJKvPzxzab3afrR2HNB34YTCasXRPh3Sb15gnYoDpKRu68qF1RFaaJPaeNDVN66Cfqy9ccJvC3jiU",
  "key15": "2EEY8XhvhSyK5WhzXvvZnNgWb1NGUyopwJmJu6Ska7vwo4BBH4eyD9V5ZF7DpM3PdESvVrN9kAQG9ScrY7XJFGCT",
  "key16": "63B5S13932KdkteDZrNycZnAYmiPk1PnwvsKCw9D4SUd1AxuJT68oHfbBoSR9Z5rMvYtyGhTnNAJ7kDLUn8bYFEz",
  "key17": "fstJE2pzgwNAEqmQUthWiBYbAaqLQvDvhdJwkfgtcnj9t4MMfetmpdAdtZjN7FVfbCYGjqxkDYsgmgPq5YMfcGM",
  "key18": "kCWHGpchx92R5mqWX3EHRkT3dGjHVuNGBSuxawfF8J3Jm9shYFsMnno4TP1d4utSDfsHzTrVebA5U5LjwiCQgRH",
  "key19": "5aSrNNg3aQvwnsfdppMfTvMEHeEbLSKRw2ggkSqruKciCQjLCxtrTZYA6ES6xUoRDzZazgq7hQfaVqFDaCbqiu8k",
  "key20": "ZBsbfqp84D2Fm3n2U6LbnWtUYTDNq8xARQMPZTUu5Y9ZXGDrnkmAZecs9b4S7TUkngJtMTdMgoSWG8atvvGD8Yc",
  "key21": "5Xi9VPW9HH4zrfqkYKyGoN7hfrNZRV8e4f2JeyVbyxG1hyk5RbQV7KvbUqcQJowGqeaLdDYCwVueQ3gfPqEe4ipZ",
  "key22": "RRVpovYpKbnyVa8RJsYQawniuR32YPi2bmp92kuJAx2XBRSfz4apcEHiVjpdW5cCS7FsABpDgS2pouCRUmhKxYq",
  "key23": "rTGJAJC5J86JZifZ1wdsDTbT28eiFfaoCSr24CCduLBEUTeco1uMWG9HL5SXQX62QJaZPwWd52eyHoTSkjXhydx",
  "key24": "5LL6DAgmDN5NoJLRsfKsDoqCCxCXqxFNbUhfczLs1ckHYZsBrmSnNrBUDUjeg3wsDp8izoPJGuwEYYnLcXVicUgz",
  "key25": "3SXXS4dcPq3whgGKuUDYUeb96itQ7AQakopnc77Z5f6sSuovqPyUS5xyizzRo8Znr7sSh3568dYJCs58Pi3frXva",
  "key26": "3wmU1tpsDf46NSEkzE3Q14GPphMZbdKwRfW8WBAMe7ZkhGgTNFbbopMSYFvzKMmVM9FFEShtNGpwzQ5eTLgdfVJR",
  "key27": "2QwcVS4YC4HeWeNJArKSsnigoJqBuyyRie7GeK7UVKR1QeBwFHx2MZhYQLpQKeLgYJ7i4BhZ2Hvk5cZa3gt1Btqw",
  "key28": "FksXhNeww6meqaoENmAtvHWCS3vq8GpuyeJBfSfRs1KsZ3gUCBeEDyzonPyv4qNHBpbMZ72oQunYpgdqvBTvgMt",
  "key29": "332KiJ5wfSK1vv6nJNuromo3swVtQazJ8QMT7F2FQ33888GWXTYEGW52ovXSCLiJrxcChfyN3cbdLkds4kTsvCU7",
  "key30": "3jq1mPm2GPFS6xPnRDL4rAnzHx4uQRzDhZGkFJT6TQK6ZbfJBfmveyP6Thv9Y8QDdD2AJr5W36QSfXeWr3i7kgY",
  "key31": "VNEWZPNStANexwZx8nqG4oLynZY83sWTxQXdGpC9gYnFHJRHRBu6oeAFd8mdSpPG2iEBojtNFaR52yW4Fzfdwih"
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
