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
    "ACW65XpP7zfSLHGepsMr3soMJ5iDF6pLoWXcGLusEBRokBV6d4ziBtCMzy7Uh6Af3FN4vfhG9wFzakBh8qix5Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RsqV5BHtvSve3sxSD3yGer5JuEYTib9XfMdYJrLcov3RaYcEza83s2y1bMuDHyHuQ7UMkCs2TFxtp8h2eG8akom",
  "key1": "2w2ptgX5e19q8keLuHhCgtf6iNkb4bi9utCq7FrVg8kehWCtgiLLkwEZVkLdsUWnBLKbgNgnoeMKAv34BqUdA6Yg",
  "key2": "2VAgbVdmt4wMYHaQQkaxeVGsmTVD46bnhitrqfvnNDTgNayAkxfHZDmT9SW7i6bC2TTQuyCCxoPnmjMAmN4veuKu",
  "key3": "32HRYrBatinjZnkqHiLLjvTcUw3SYGjuFqFx1fU6KPqgHnV8NLmsYSpsBfM9YRScss3p2Ko1ssoNjSzhbJ7GGkUc",
  "key4": "61NmxDVXV5DkLQaYUJcB71G2nimgdvvYEJ1XMKmgL2nf5zGJmB52LMhhfCzB1YPiMNEwTaoDYCinUpwv9V7vnrhF",
  "key5": "4ZFtqa9u1tStAdMHo1aQ2FbiG1sZhpC5fzGx6Tqb3CvThsXY8Tm9nDAA4UmvbA7v9vKZ5RRP64WvvX6xTnJsCVoP",
  "key6": "3Rwxf9ATP7Sij992K4aTWUq6xQsU4Bd1Xkr1W75YiVTLUDRYEMB6gmeLUaPq59CtoFVoa6UxHRxGdUbgcpgJWuNT",
  "key7": "26VVr4jCozWY9gGqYeJZsvfAQby2LafKB9fMQUfeKoDhiFspUtYxtjWEj3KHBVucJcq7ia39HyUJ6bQcuiTsBbP8",
  "key8": "659vcbwtnuc64xFzDirm3tFTbJ43ZysPER2egrCYHYEfhgD1XrczsdLbdZ2qxVPHyvC53F1qRPVY2x73CMZaFSmE",
  "key9": "4wp2wSUVc4v7SYqUZigYTNspm4zwz1X2yT4Go7QV1XeZc8VGsaHjtgXSXKXvatG1Ko8KomQXnJFsYuTD3iTBE6fN",
  "key10": "55CMPVa27caVNGxkeNoojF4e4Yovxc8pyASdzQ4W6rhq3dBGX6NWS9zUfC8WUG8r64cGk4AzS1SfqvXg2YrHmdFn",
  "key11": "5J92w2npj8Cjt1H5gb4hvTSsJbDB8XaHjYiW7LVMc5LWrRpnGPSXRYUzjFjWMqj9BMKaw36h7pEjV7ffDtqDR3iQ",
  "key12": "65bQhArHG2CAFe2t7v4PTZ3cCpxNhGoxT9JePyXZr9prup1dq3bKVVYbvCnxfTxbLkiaCynqecj544ryadhcZKMz",
  "key13": "2RXkD7HbxVsnvv6jENiNZd8oiMZMVgM6GpF1EFGnrnKQjkszqQV13UGhyq6LiWKh5V9ZapedrGUAgUWKxjJFW8AF",
  "key14": "56q5nmbJqE1yUNXDDMkTBZqGvmdvV8ZdLUMk7oZBJWKbMbLQ4yCrbmMNwrnRi27jdT4DqRcDSMdgq1cuoqo5TLk6",
  "key15": "3NzS2yTczRfHq7SaL1njBofEEwKSgGE99sV44GqutJ83P7Ak4uB6oh4xZwi6hByqW143821RytjPYy6ZtNLT3ugi",
  "key16": "2WneXDeB1soHnvbpqKUjxHD2vPy43CVAP6VXAgtRwsfH5GmVsUFruZJP6uayCzzX8c4gdMs2QcQGU9uUwHHzpWCM",
  "key17": "hxzzVDpbS7TJvEV5DSL7zUXP8To5v6pkiEgbAvaemowTQjFAz3M3EokRZ34eGg9Lqok8wEQwKvAvTKH6ErLgJZ2",
  "key18": "2SHSzcr3fCUxCGuKJrevStPmNDhWibuMzWW6NC6fgpnxP884TD5TAJasp2bd99ZqaNoL47y6rADzx82RaMtUvks4",
  "key19": "2Bu2Qbf64yxq1rgprEuUAf2xrgND5tVjBTMuNffcC9LWACtXb9GhDh4Qby4GsHi7tiLiZ1aLsDKVvQVQTeZ1DUAz",
  "key20": "4coLMtjrZiF7ewfNuSxpJ5rSc1BrrPzcr5tu8Aejw5xafFf5tXKD7yr9y94Jfe5DFCMAtx6QqSDGakj8JgfG5vsS",
  "key21": "5KeN6dWC8s6sK6QXcHQY9e7n5ca5DrMtA1csT6zgshTms5WDCz8DuV99SAJX6JT8J33TPAW28RQ2khZqpriibHDR",
  "key22": "5MqcCmmimvWLdaE7hzoTpPSFnHKv2q4YVwyA9AtHnRohTmax96zqF19WYvSTRu8YbL9DtNKuTG5CaaVzryCPiwgH",
  "key23": "5munqZ5Lsm2RKoG6yNTjwtqYMeb6Xjy5bpnEsav7YxDHqVfTxZSmAkSWTFpdpghPyLqEHQE2XEbVAw4CDnGX8A4g",
  "key24": "5egaDHwZvz3tK1mGWCeBpUeSphdi9XFZP7vEtRESDYcu1xnLk8Zir9MqrYhrLBSd8snUr7RLmxoYnGpHiBdTsxSs",
  "key25": "3UdKU4RUHn25SdCvV9kMhN8xCYpz9V47mzKgW1Mpjx2hG9Q2Rcj2MJbBPYbpohgxPGLfHqj61rdqG8YBhRZBvsHy",
  "key26": "2AWH3QyHdS7WrST7mbS7G3tEjSHpqaE1cRVWszWaJk7g1q6dQ2i8VSE6iXPmi4bNXLhrPY65iUiJ8KBxJr1jRzx1",
  "key27": "3mone1ZYigGZ6pRkmnsJc1W1KjK2dkusMBozgToKzvGg2XFm7qxtDkq9JduTjhdLc5jY4k3iD9uBwgYeyBFAuXtF",
  "key28": "2HLs2bVc2vXAs7jESxcrvrUMxDWLWG9Ho1aubpw3g7HnR68xhe87TKhJ81K7eaxCJm3iT2zqbKcrEufN3typEHuY",
  "key29": "4EzHyMhnQ1kr5XTbF5UK76KmFbZELRaJhwpf9WTMGe7dsBPUh4ycspSEpB6J2Ws1NHDXHUDguQnKkxwQoHr4DRQZ",
  "key30": "2S9zTrsrUuc1GJMzeF5q4y5KMbdhZSyjohiaa9cY6xsvpfxCuywQhFvK4tpSek3rRvQxmM8LSwhyYXe9boiRMzPG",
  "key31": "xgEquUUhKjbaub1A1S9xJo6uqxPoBrr4EjMj5uG6mkPXJ8qkNWHdc7ySmeymrWeQHj9tLitkbo5Ddn3VYWCoeFs",
  "key32": "5ZR1mdEBf4a6MG7QDnubWf31RUGTES6wYrxzTQRbnydwfb1P3kWSLJzyhAzSteTkoReMaXbgwDcT495QmXhw9Xb1",
  "key33": "4Le8HZmKCjRQ6ByjDzFop9LzQFTRp2Zukyvjb1qV57nGqnfhy5Nz3MQZqAY8szubRGDNkEm7NWCiTbhnmhTeRW8m",
  "key34": "5jCsDKvrBQ7ECoiiBAZjtVH3kEHaB1J3GsZHByMZRC4LZaee7tX64r4Hub9UNaiQNtrxHrkHtBoXZH47ZxvPCYkH",
  "key35": "4oRg7iRnrdSJpxGHtsxRfNkzJkJphsV9ipp6WUcDDLP1moNcn24wJ51iUbNAkq6HFupc8e2WtUGhcHWAKZqQi7NZ",
  "key36": "55K7gKQTSB3SEeaXrSt3prXDpTXgULowbYc5NyXDdgvPWps6V2XiwXF5yNN9RyoDKiZ9ppnKe9d8HdqM5kENJNtU",
  "key37": "4GcYiKgfvgw98tvLMnDZNgtvgt8rjt2wSht9T2jF5Jv1q3SELTNt9SdPzqgto2vHJ1B8iBz39CmTDk8Jk1XA4KtG",
  "key38": "5GuxmCEEsxwfdzff69Hif5A1aVoSvUjeUVm7fWW47ny79tmJWEEFjdLu1yLz6FcAQ9xdvfBQgqMW6icPq98uq9Ln",
  "key39": "4cN1RViPkkUnjpbfREMfsVgzJnXru9qFvAYXh9NdL8onxdtstBce2gebGZEzBuocgJ5XzPiQ6HcKweptFTqncAsQ",
  "key40": "CRn1H7X6gsJevzP6TsosPcaAnhPd6pDuyLxodd6m6LnouCWxJ574y8s93vCgrh2eJQZMYDwyevZfR3NUsKQBzUL",
  "key41": "5pnDyZKAXwurMXektDxhfhuP6efmj2puHzCJQQo34FddfZjqzeZJyv8fx2NCMPf468tAheZpsRrikgvjnW1Am7v8",
  "key42": "3uKhACo7kchXubZgfEcTXiEDvsD6iMM76ood1yx8nk9GN8rRZMtmYmt2YXUCAenqeUtk4CLw4rUcd4LyDXpxZLQF",
  "key43": "28jomxmbMBStM5d8foChAkCZ8bMSUXoET1Y1pGPdUmEMX5fo184PVJg3aHb6bJL3eVGL5KsAbTiyWBP13QPyg4Tf"
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
