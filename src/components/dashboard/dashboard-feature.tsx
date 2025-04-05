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
    "74dgTRXDKiKSWdAbRvAafjj3ScfgmQfZ5cnr8k7mDyh8TwF8wRoNnEwiXUEF48FzWBvuJDnnjFFjRUWPxPtdsTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51f8Kdyug6uX7bA95FesjJVii926nUPavmJMUCXcrtNgfUwwifNoxGVkYcB977PW7ga1uuusBzLhiDneGa2XVmtd",
  "key1": "2qbtSshaRGmx5AdjB13wCQasB2qCf1BH36KiicpxNDNzu2wcfGtmxb6rLYocBCYMmqYVrEY79KeXk17y9Kefaumd",
  "key2": "4B8rZspH89RZLRunQkXtCZ6TXzoSfz8fnhqoAoXQBbBB5T9NA6iqSbnTLhG4ZPwnCchwuJk2seQuxwExogmVeon3",
  "key3": "2ffyJfcu6x43PUyPqzjcZexDkXDYTzt7nBNGwrySiLL75ZnwiRVDeJvHFnTKR6kiwGrPwWJpZfFJwao6bmNWvf6r",
  "key4": "5YD44wLaeNgkr45UQTfSq9XyV3pSt8k3PUA44gmyiuej7p47MbmJP8PhCjTF7kuMjVzjmehrYnYyuu7jSKzWeTu7",
  "key5": "5P8HZY3sgA4K3DYGK32NuPDMRwJL18ZAejn52NQNGoULy45KjkxtzuGCWSNH3YZCezmsThib5MSb9TSWGZdFS7Pc",
  "key6": "2qUu4cnc5h98UFe1J91FZKTv5MafBqVBw7Lboq6JQYoYvVm4Si32sCZsjzw4d1vsqoZ4Q6dbXKwcWrheXrziqRs8",
  "key7": "YFzec8b5UdqssSFJJy7g9XmwbCxs83g2XKeCmxhwmLRU7LFhzZZmGR8Yb5TmoUuXZY9YgKAQNkLrHthNWzx1Sg3",
  "key8": "33L72GhDC1QnY5ZjNaJn19oqh1yZk6wuST27TFPFR1Bnfb15SmRVZ7y8VpPaGd3KWYps2rGt6aicoqsXj1PZ6Agm",
  "key9": "3oyf1m52edtT4gNqmMh5k4W4Kg7Q2ErwY9QbYuUimcNnXTcUtEqt2HsT2WbBTCexkPe4xuqoTTeKBgoUzWJZw5NY",
  "key10": "5ZxoffSaMw3jZhG1KDg3cGGC65MpgtJJX9H2ULEvc9edctACoVxurny64sqb73XcMFmTeJisSFFTRMdLXEPrX2GB",
  "key11": "5UvqyoMm8ex55Tv122MaPBKRBnwWd29PtPAuGSv2hFd2EENw6ysHDgVrg6jBd96EDx1mbn24rvhph6KqmNaHriTB",
  "key12": "478CbeEzZh2eSqs1r4WyywEjKE2iqKfTX96qEYrwAYSnptapHoifn1kAaoARZzYrhofnRiduWEbc5KoaaSv3eKp4",
  "key13": "UJTnYE9qewEbzfQiEzjW1zzh28J43b4tdELoP9eEGDr6bAyY1WgiUUNxdzQdeEhNpjz62FV5MG1TihYfwdF1v3b",
  "key14": "4eeNoghPaMZbwYnLMBWfcyVFZAKApgChijJZaqhLLfwGAaEqtZQU9N21pAzqU5NJpo2HFFJ5kSyqZzqpbJjVGtGF",
  "key15": "kXz1yi1o7xN8ffQnRF6fpCvZ58m54XkH87ZHfTQJmtk8M18BRuCdJCqUT43gBQpXXBcPSbAsw3gBDukMCu2jL3S",
  "key16": "3xpfbtmdquZpYJGfB662nMa69XkWqLPzupyffW9gs3zBDKFuntvtwnSr1p19wTqXkqEMKJchqaNhJn6aN6A9evKS",
  "key17": "5qmm8PpHvASkHHo2vjyLUZZLcez577mxQyH11RTVCk8RpxnD4scotmmfuDqzbQgkn4CuQsfZcpGeX8untRijDcRb",
  "key18": "418HoQFS3SRxy1343up7eAN1JAAsNTcRXJxuSW4biXJuTXAZRhNnuW8MSmCZxV4Ckw7xCVM3TSJjnV3pDjehASKp",
  "key19": "5tuWkJy7qkRAMbRJeYr9tpmCx6QZAvzxZWNtR5TiAmEoGXxPw1uP29ko8wKRBbxBy4GVR7juiuCum8b6LUhE7KdF",
  "key20": "2AGe5e6V16XD8YEfXUeQ4LNQPHcF6MsaBS2wkLxfYGuUpR6TP6tGjEaUTXotZKAn78okAXSrFN2uJpVyZpWZcwxX",
  "key21": "H4MPXuJ5j6ed6L7piT893pnTWAre68zCyXajeG1ErBuNCq32tDqbMAwNKNXoZMC6nomPnW1x2jnF3WLrjreDkZJ",
  "key22": "NVTUyPoc15wLW5HitXb2kjXUokVy978PA8qUkwCtvvSBYe3By1GW7MS9GzTP41YgooAkMEZjSjRaa12ygndDeti",
  "key23": "3HwKT6ssKbrgFM9GkVNiaR3MxbQsrh5LVDAy6JsVx3UTB6KxUrTUGhyhUNtUimhQQAFoMdGrHW3k5Sj63rrQXmVE",
  "key24": "4t8fYHjM6GhRFGAEmW5R24kDUdEsMBqYAti9So4gJv2Udu4rqapyY8JfaLW1RowdwoqMyC29sR7MFJd8VhiHSLwP",
  "key25": "3eJbeyzw9cHXyjsXu2cwm16duFufDzVvazvmRC3XACV81npZoQbTXi2EYx3hj1ewPLTRN2qKChMAwqsCX5ND7BJh",
  "key26": "2hr4HsANvWGcsqtX7Dqfst8r9FtVBb6QbUwvqiuHEjxLnjnJqzfbMbEFECS39mBQMaEPscXcYzH3seQZ2WH6guFH",
  "key27": "5gT9ZmBzXg7gzYSHRfcWyHsZb6UJYhkgN7APC1K2W6in3zEounc5huP3bAcYVFdE3TzyLXAikDXthBL17YZ1vMqt",
  "key28": "3uZpbJt6NdbScaejUwJ7XbRNia7pX5ZC6LB2uUokS8wqKnXz7ukxHujTvS3RW1hDB6ya5tQzL8HdUtVwmn8YkePJ",
  "key29": "HX2wuXDGysgcnGQpwWN1aW3RmY7dUT7EWWxUCZngzwAoeuXA1NBCZBEk8b53dGHX4UoFiWTWzLYMmVpFVRkVkR6",
  "key30": "3qkDHwX3HhCXZ6drxvu6thfEsi2VAuqjwk1hNZTSxTMn6yyNrSSg5qv9N4r1o4CTU9PTXzkrfQPqq1wPkXgw8jvq",
  "key31": "4nQmJ6SLfw5eSjHzRm4G4ZQx3nyv6mkWkqUQmeMsiJuJtQP7umbB4qaguRYfYAFPWVj86FCgMhjeARkXrSCjBBjX",
  "key32": "4mLWzeLaUy5PL2vmFtBkyEJTWi3ci4fp6LyzSPKJWUwh5tqTbh5UUmsSnmYnAMjuWkeCxbPPQskX935Ycmt6n1JG",
  "key33": "3dv3V7Y8W2FDZYsbgw3njJLpUHrnPaBK8M3hFwbBWTvxTcvnTmsRwCVzyJKs17fHFBbB3pstrTUskkui4etXuL4Q",
  "key34": "5rLMFA1AXiYcpABUHmEsQpEZ8JvxnLRAJxu2PWfXa3JRmQftATJVcVdXzh7MD6PEs74Ch8veMSLcBvpVRs3twKQh",
  "key35": "4zkNjkQYWjuqnxGL2QEizZkrqajnZ9pvBsa6ApYtLQdHjz6fXTDu61ycnGp9jFzjbxMQdTzndbETuFta7PogeiM8"
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
