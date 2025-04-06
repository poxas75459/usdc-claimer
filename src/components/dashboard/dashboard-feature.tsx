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
    "5BLbuvty5h2dPUxD9KBAFTAXtPaatY5g4YyQ1qzwB3f2CLZZ8cSX2BnoMGXWm8ueoKgFQgh2WpKBCyjbFBr4HPXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5httNGUCuwextsPumeoKf8ee2dM8r7jDoUPFZbgMLWTyfNJd4aCDyNWoYaFdQ1M6NYjQLds5tgVyWcrjKP5BP71B",
  "key1": "QvF1o3eszjm4SqKBQatDvU5MED4Ch6x1JFu85z4YUGGSzyDskTMqKv7EHUMcFXT72NQY4pBm5E1e1vSVZPZm2Pt",
  "key2": "4hAFBhRXrZzQSXrgPmkC4KUfZRwxFNhReAWFeZcHUCHSWWePndrxKZSgD6BNcRMEbknRri18aBnb9Fv3jQrxr4R1",
  "key3": "46ySRB8tW6xaj85DxAyAA774bdbydicc9XezNcGs9JFka4gLuU9qFsP7q9Mf8bXQwKJc8rM4vqoAgi12drN7nrHU",
  "key4": "ESQ49LTg7benL2Ng3B5KN26oPCaiFSPPniiHncxnTKpityqbzbcCpvMaajgQfMv4Hh3bSiLif8CJcMF5gv7AaQz",
  "key5": "2dWYKdcY3ZwK63eH5aJnrFJNZUFxHfYhaQgrQCautLZg7U8KRgpzCQUCTvtkLwMGGEPmc6CnqvM3PPhGcxXjqTrt",
  "key6": "3xQKTJp9HsqGWFcWZ4xkgvC93xxDWHoZr4maJJYxKHjxRJFbFdaBPZghBQSkGD6JbyLvbaYG3Tj5TTyBnh8EaAga",
  "key7": "5HWTEboSWDrnrc5f83r6wSdyhbE1WtiUZ97SFa8gHrWoeq3E3rLchEG7E35if5WxNhTeNcDKW3cR6pVWfPNExmUn",
  "key8": "3v2Bp4MKrVa8rn3GuhGSajWTEK8osvnbTv9Gi9o4wh8CGGiwKryA1a5JMsXa3V75NBmovsTMkC62JtstrD3az97n",
  "key9": "4EJAgrRMXHGRrBZNfUYeC8RVGcEqV8mJFwL7dvq3zJWvU8dNA9S4D5s4o34rWxEsSvdB8RTiR6XqamZXCeXrciVs",
  "key10": "27PZnbnMgMpJmLJLHfoAMDawev59DDe3cZsRKji31Cnrsrgkgdkeqh7S3XKsG7hjWe52JANdCj1R4Z147aoJ6s4M",
  "key11": "5UGED8MktsaAbNu8xLn7KScKtp4DkHENKqXcgaUP6WTnu7CoYAX39mvvmyFaEqdibK8nZ1sQZRT79QZK3GhZQJKR",
  "key12": "4W8ZkcM5Jwwy98XHyiYULHGa5F9TtKfKXKce46MV2grZgLDkHemFVGmmYPTvsjDeuV9RzTY5mxtWBaCVWT4onfiQ",
  "key13": "3bb2LzAiKZfoXY8KRYP6HspVp4HfLJxQNTJBaK3DtpcMFWJ1Ti3UzukJT8mQBu2pEDqEuziTTFWt4DwJ6SJL9Q6q",
  "key14": "4AK6hJjqjcx7uriMPS669c6mdMMkxxuNn3LQru3H7vUScwu5QbAkc4Kaw31y4fHW7om13F3i1rEF4JiKf991q5VW",
  "key15": "2m8VNkWTttyCF8q7rx2aqNmRSDZw5n8z8eKuMhdBd7ia8mr4uCKJeAbU22deF2AC5exdSSTypkUSBwED7LSBi536",
  "key16": "4EhsMdek57hNm6wgcqBpXcFtimpQEAZvs9z1EKpF7S4r8D9m3sXouvZgZuFkce1sL6XDkQHmHWneDZo2PLbvcBJh",
  "key17": "5romDsmS1bsZW4EveAhr9f1tF3Yzib3WPmYnfLkM9MuK9CpNShDgWTHKgbNjKbFJnr2ic4CiKFfTGvHe7sgxaZ64",
  "key18": "5krVh5urTC4QmQxEmzu6XVZyW9Ze1JbDjTMkG4cyCSDyisX9MtQvw9aCmD5U6s3AWPtpqj73taxrz6LwXrB57PiP",
  "key19": "a4wjCZoM1wXQiv8pYMJqyBjMxrh1wmgLezXiA9QPwtMDv3waEwErnAwrydHfHfBc2EEcW36W8GCCKqY2D4Xnzd8",
  "key20": "3EmFEeAmXuUbPiQNCCty1YFN4HMgodhGQYDxYFi4DSgY3F2otL9RvP6HbCr3QyNywjihgv5h8VnsKHS4AUMqLQ8L",
  "key21": "Q4cHuY8Hcfdq7miWLBdYk6Bdux6VFhkvM6K9KgQR5h85arE1rijUM8ao88r1B6r1rdjqtdspQx5esWpir7FUNPP",
  "key22": "3aYU1F1xMBsoz3wSqnzjnmJ4wHxtCfsRNAoWkQ94StrXB31Ub4xpyaqTtqRHdhKvBU8T7VmPmCtM21cnTPrYDXgv",
  "key23": "5AHh7QRkXNfTxWpZSk6PcQK2NFb7gDKFa72umcqjE2nPYamQUHD5HEHnh1mV329WBuLQPvKK93FWsKpifYbP7w7C",
  "key24": "2Hg7mYfR6gwPAqe1wXQ1AmgSrf2yMT5X4DyVr8pKHakaqw4KcmhWuTYBtiLq2ssmxL56Rp3S9X1XHKj6bmQX19fQ",
  "key25": "3b8LnwyMKEUAG19REwiVfHRQtMSupxBt42dTUaD51wdfbRy6iZNnv93AU9kUHumJytvhHqNHbfeaZPi1DmrZk9Hr",
  "key26": "672SBYcruVPvdReHHSXgMhQ1E5mirezRg5WNmeTqBba6X6wRNXwQtXQVUUHsgfnt6un1xgx5K8YafKaa4jAXErc9",
  "key27": "H7T4Y8tyv8TpbzCbNw6eXQ7Qh2hp3SrbH2CQuf4hJ7hrgHFfvCJL8xuUCKMcLKg9JieYdEYLNMxUF1ULAakLXcF",
  "key28": "46ujeS9TuqPw8z9V4UwPXtAvKk2zRcL6S72oJGjmMubgEsVSYVuSBH8BivwDeMJ7Bs9bVyGZRV6PR8nTm7X9wzQD",
  "key29": "2v4NgxmibsZeHnHhTjpf53sjEoByvRHxx1EBu1zDZhQ1pV8Y4xMQB4tBzCU78x9AbFwibVGgrxZgpFLfqt5APk35",
  "key30": "2jHkKh4iTozH7wcajRDQxSTHj6CUSv5EjDFGYuQ2ZL2rBLKavKaymgHP4A3yMCx5aNfACm7apEuJoVi7SfHXYDd8",
  "key31": "61TcVhF31vPsYhSU6fU9zGGaEo7q9QJ2h5qiVVSmGjcQ473BJdFmt3ZwMko2gw6T4qD8tirm3UJf6XQRzrgGebqc",
  "key32": "5vwXDuCr8oNKVam91BPyrGfKfJhqEJe9Z4wjNYC7YtoK7saKykRxEjLwUtHhM79pq3fBfu5L286isDwUFFyvo5YV"
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
