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
    "c5QfumKw74gaWfoLkqaZq3JbNcRXzX1JvEVYsLmtZhxJs8rZmQdxHGkE7UoB8TfCVNyaZCqBA9nkCSokCPZdg8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "332ykxZVgPu3BFm7juBuaJZLEjKyJWdoj94VaZHcQvkdzpi9s7p3AxJZ1aGp667TqpBAgoXCvbhpysyrkmUiyRPh",
  "key1": "45dmXmuxq6obnxTpvQ1WuRuF8WF2JgiVgV78pNwtX29GVhMG6YdDC94vQRhUtaLjuHQb412ygKZ3CTL5vyzSmnez",
  "key2": "5oRxNzSy43BoxdMm68iM55hwRDCwuAmyQLYHJu4kuHQa5xCH6ffZm3NFHHd56WcdH8eUz8AKMJj5yN645oEgHWUg",
  "key3": "4cTFTv9tr774VKwTBjpTHKPKo63e6VMNQuduEQe17p2HMmYbqBnu3R2AvLYAAq8ewYYbxXaSWJnEA2fcwhxbrAEK",
  "key4": "597u1weogD2qVJq29U9pqSjA9QHo7uNhxxwt5ZmY5qeUkd3EZ8zouEvxZwjzeJdTTRqdonmhWQYUNLpEpmQbmaNq",
  "key5": "4FQJHRrXe32ZiXmDAFnbqQaMhR2PanD5rkrZxmvP1LHcCFCaRzvprBrUN956rcdKogoKQTqAX5yb5rJRNHnGa8J7",
  "key6": "4XqbYsZQhwbGpTZp5cq7DTNwnmU16sSN4pQzvKayU9Fewuvv6oWRqDoeyz4d8dHfDRJd958GjfFFXCPxM9dHRKEb",
  "key7": "2GRrr2sCiSSFPhsS3uBuRFfPuyaBxDA9yffMYkZ3rRskv8ZENkwsmxuQMntEsFrkYSbUA452Dyqjuu6B3P1mymah",
  "key8": "3RN8bwinX8Ma6VQ7N7JHuJNdK5FKKXhjrS7fauTtKNia8VZpRRamQcvVCz2K1TPsVvM7K2vW4r5MZN8Whqw4mBXK",
  "key9": "5z8L3djqbfXqW1TZKYLpR94D4SAiVumaK1JctQdmTMhdJzNQGU9cr9cRFC239kGW4NrzFTx1coSGXmSohYi3JDJr",
  "key10": "25TCwNG6hHDPzr5b2hNYidSFVrnGqDXYbfteBRAE6VdSCtYm8nqHfi7rjPigevJfJVk417KHt3E9B2Rcqsz5fhsp",
  "key11": "4DfWAR7XgXU8BFgWpcisUPPVYY25AKRmjJtYtZBXQRUodrHZEyfVmE8CMNqtTFrrP2n2VJkC1xVdzECweKTy7rbc",
  "key12": "2CzKE4LUrx44QGuF4QYTQ3UP6g8Rj7wYduEW6gESpggj2yaFJ64QDSM8VwL4wmang17aL1L5ear3QedVkWjSa5N3",
  "key13": "4k4Rgp9UjM2qe7P8bstfJuDP4tGrXvvcvzJ4GrWkQyY16ZD8QW5F2yR7LPDdmiSphyJxpCfZYgxhrPJC41hMMxQt",
  "key14": "41xo7L986kkjJA5XC99g1YpBxrACdWL3ER32xX8Zp46rS1PMN6Djus3QqzwwBLaT38avLiqyURxFXcdGApTYy4Hz",
  "key15": "3Zbxjg6irHZ4bK4AYsdFfb8jn9Bq4q1eskCkU9YrMJ3q217LRUBxhNYBzYZue27mHybdG9Wj1r7Rv4Gho23pPxNe",
  "key16": "6CBBQPc9UZqWc1bgoxfQBmsK5Hh62cErPjySXQ65BRyQcY75yMUA7PfsmL2QqveJ9zN2hxqXEQAdN9H4F3R3VmN",
  "key17": "BfYCTbfmyLugHabLbDe497SY46cTsj3VjxVrXAyAfkCehf45fGJbQco9Fp1jeUyWF7t2JfPvHsCpCFLoigepxvL",
  "key18": "5z9h3htx7xH8iNt5Lp89Qj2xVtjvGmTxdZftzL9qjydHa7N3dkNyv5hRwxKQezWPRd9tVAGgwJrZYdsZVvKNkLhN",
  "key19": "3tPN6VCL55BNXXPB5tSk9yZU2ZhWpRpx4FgqCLWPByMXz7QwRYs5WPGK4qCrYVBomak97BrcapQm3DsSneWjt138",
  "key20": "HwqLSJwyfCBGX14hBKuRkXYr6PqLtkbGhmErHFpcvMSEnb7d2yEUTwry5Te6WZH3TaGoJUbCx8rxqrcrsTf25zc",
  "key21": "34zeP6p84tmas7SCbWFthPiDPkiHcUPy7FeRePPN4yQZWyYkBqFBafEXfnHwnspRay8PvYzLQnFjX6UYTkeqLvrr",
  "key22": "5nKGk492Re7J2194XahoYewJ1t6cNZi6MPzZXVvVKM6ZfvbVEVpMA6WAzT4YRtxD3LKL9KtqRE8BhVzbV1MtdU37",
  "key23": "24BharMdkdCFDbYy3vecwRZq7Jx9fdvKo2zE42BkP78q5dGoYvZeBfQ9fRaSbvMBEtQfdyi8YhsdWWvsERBTPgUb",
  "key24": "4xARgBGjTPFJF7oe6TW92TbNm3ne4ZJxsuhgfPrLTZt8hfK7ULKXK6vvhED2zGEmkLHuyRGAK9SjSBFg12EYT9tB",
  "key25": "TFyPzNpgpiA9KKa6n5ZunkqUrrrJQNJahthed9AW2jr7gLTA4W939Hpnk8U3Xp1NdFMSMJjMhkK4gFxeLsQFnBH"
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
