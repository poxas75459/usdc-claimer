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
    "2yYQqd5ct2trRRasgRMF199NkpYSGNnQckSr6F6YrNNPNHMEgnbSWgkj62PoVKTW5LpsVkraat4TxD1535X5tXGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqw9QjNCnCMBQQgQXvhWWxgdx5A17evo6Lsf7nAv7sb9ooqcQcyJt4Es4KzEgk1EfYGbpdYH7beVdBskm4duFS9",
  "key1": "2HjAaUa6Q5D9vhq4mv8JEMd8Bs3QxYMad1ckCb3tZNkmTaPYjtt5Z35UiKxCE9F8tvpehMpVjiwBTCMxTP96419u",
  "key2": "MPR4gsFhtgBsDp9CV8FKRNLZ4JwCpHyuUxCNiwLC2e4uqRCTFVnKzgdTvz9WNqs17T5c8P6fbS4Z43pRhTSi87L",
  "key3": "3eihT8qL38RGN5Hhtqp42iEftChmfWkoYGZMpJNGXGnpJA6s8yYQJQCBkPfDq1tr7krvEoZRTeYEUpM3B2q7r2Qc",
  "key4": "5Ug15uQHwXGiujwCBkhwt8HBKcYYBL8EmEUjwTCeNQZ4sor3JjyfhyneN54WvgSh1tcRjwsUWmGqoh7xX5MFmDPR",
  "key5": "4bFTWmZVYHqovSzZh5jgcenrhNSjbf16CS5XPULMsDV4c967DYDnaHGoDaXiEQHk1NZeSDZH3V8wLn7WrBCfLrWz",
  "key6": "2Ma5qkuipEYoi3rKjeUxcBV6oUYVy4Ve5cH34XjiJbmFzoULbanKkQsnJ9gt8qYKunK69utj3yRkdXeEAPH6kQpD",
  "key7": "U3hBvvWXiMB1vWitisSzyQio7BHEsTW1ChUWtTibF86x2VcbRo3H5z8Wv7rrxn9aHLAWpVpGgdptpdPaVPKuFpa",
  "key8": "4BL6tMLkmwL7gP2VUkyjRuTY3UziLXE3MuA7B7iMB6aynGyrejdjBr4dK42v7EjByV8aoycLtkn3zsPBitHYrhHQ",
  "key9": "57gbJnbZmsrKieb5EVAmwv3NZ8nr1owoofhbaBxsxkg67UideSbtXyYCKcrjpHsGo2WCYxhovGLbAYci2YHWaYvv",
  "key10": "vEcUx7owq8xPhw71wwZmzCWVT5mdpzkrR4G94YwyukZFtbbuJ9houKs1Ch5fGpQFpXDR1V6jX5LHGXZxsSWyCUZ",
  "key11": "4rKNn2q22FUEqkLTY1wr5RDkqkK6XGXwnhsGVth6zHFr8vfVfQUmoH7KoZ9tQYYJhr9BL3ZA6PQb9BexL4u6JUq3",
  "key12": "51JLrAEhotrZFHPMK4S6H7XfSSXvZD5WVHRKpdpb2YDjz2c7oZB4joap55vhmLvmsbtd7BD2wV94RCEu8tykjroQ",
  "key13": "5x6NfDuNCguW1UQhS8E3ZqfCoQdBnpxqCpdBkHCKW3Vtr6WMq9x53vLG1asxao8HF4p4ng2yx6rKtQ3d6kqUwsRf",
  "key14": "47Z4hfeGUMKzQBNgEjQqoibjJYRa83t4FXkmB9JUdARdaeZAAZ4fBsXk9viaReA56iGPu6xRQZx64w9a6j1JDWeG",
  "key15": "35ntD477U5cfGHXdDoEWzZjZWyzDBstfbwzXfCRiGG4rYHygxKRwaBtjv2KuqABqxbJ5MEvepoczkpaEqsohiwF1",
  "key16": "348iWWc9mcUtSeQw6ULhxqBDurWkdq5eqsrSsiJxn7mnjy6thzygzZCNYwPVfBLSgp1uYuKvubYnJDWeThZTPiLg",
  "key17": "3GdZm2kNUZK55oymTAV9i5ZraAoGKLUXZ25TRusLPmQQpqwmgBpar1caNCspT1njqad8EesbmvmPdNcvFo8TQVwL",
  "key18": "4MDbS3NGcurwftyd2sS9WrptePn4v3xnPFvmmBjYhRsMN4pF6Ynj2UqQf6SfaSXmJaHr7VJ8SrFMLmWz8tJLAbbR",
  "key19": "FhV9dnjMkRQbsPtSgxoRPGYUZogADH1ZpVV69bR4o7Ry4YMTY8QKMUYUVuJSzy8m2zuQAMoPxzqmjSsJadRMjcE",
  "key20": "4v7Vy54a3YgeRcfbmxNXdy7r33p3NgBBzzKbZLBUSKdgdjb3eB1qRyjXNjeNJ6xmwmWjiAXnhCHXqD1WdMfMYrLQ",
  "key21": "YuUBqWkLnadmgM4JRJNbQwLiKhAiqFXmU4mV2rWdZvAgA7sJLMZNybtZ361bfkXefD4nGkG46yhNNEb5qKKrABp",
  "key22": "3NtDteGeQNSXUa8cqoNBKroUUATAcuZmCFtqN4jA4ajWugWwg8Dnhu6DLv2yw1XJxG6iaK2VbHg92Prtq1uaS1dZ",
  "key23": "2MvV51ksrc9zUvGuVwoKLP6vRT33MfdTv1idQgeKNfcJjBkLZHNKeBWGKQB6kjkof6e9gLj5miURBDnRx5FxTkCi",
  "key24": "2peBn6vNeZrxGUachjeUzLkKoJcjaF8fggnNQRDogxipcwwFDxBTNL2ScAamEMoqow4JhQ9t7JgtNKygjGDvksT4",
  "key25": "2SNSp6wz7Z4xH7MVaGc97na9PkBiCUH2ygzUo9aUP9xRBns7CuCzcP8GFbCVNhW3WuRVPJSBPnJDP57gecyKygSu",
  "key26": "pMXyRBwUxNanDgRUXsZkd9TBLvGHkxhEzrfXoxbmGA6NwJBv6CjmKR3vWyKWiMtZLc9Ls17sabgTJo7ZN5sfkQ2",
  "key27": "3HZUAJbBc3MENz7LDJ7wDcrhCEvHsCB18tS7vTpgTCnLhtVHPtSBaVQBXu5yAjTbMkkv68oTM2yj3wFuHjWmZKxV",
  "key28": "4zjAxAtCVGtmLMF28o2pub5cGcey6vXD9aph8FqySQPb5pSueUkEnyuZfMdYhFThaEmt91toTARc7G1McHMQbQfR",
  "key29": "67RRTmYtjwA1asdpFJa3LmVh2su45NpYdKaziEGp1K5hbbSzjjwTycPwx3NjUGMDDRKa1NvbT8nQpxpscKPMtowy",
  "key30": "5wSPfSMebrwJiDkDiKK8ELpkNz6SXCR4GnJ1qbCGpQ8zQfad68m1ii1VhY5U5zVNFAUvwENCvsCopkBqcimdKDKq",
  "key31": "3bRfQSt1P7uMJuRPsM8hvRcCZvyvzHFfkfiAuhZ1LFtARRnGsbQpiydfSQF5jjaGxt2vCKFYLTK1VmbtXYz6EWfP",
  "key32": "pueCQM8fHU7NbE8EJ1VdcRk7UvEZXE6GXixqZBBnUYiKD4LyeUN2i4h3M1jxazkqNtZCERHAqrepCR5hiSLt27h",
  "key33": "3bYcj2S2YjopzggmAMCWVFEfoGE8fgRbswMAShjDEVrohGSodyBbccnhRHuqadbPz3tQENVESPmHNnMDpvnxddCS",
  "key34": "4Uij8HYUZzHSvVfYJNePnHZVFqJgfcGvVb4k9iUFM9ERABDU7TDhF5anncpWq2YisQQG2HwN7QCtu4SR5ETtPppu",
  "key35": "2hQLE2Rz5iJqyZToJmkxuUeGiQfutN3TVjAsq2AeL1dwJf3Zg5SzRWyTLrWeRS3o8bgsgTuBFXrrSPnP3EQGNk1H",
  "key36": "3NfoKki51qYjY2rWdYhQCxrcSh9WmA4GJ1wf8kR3xULMmvbBbxVoRZm36i54kmSBZB9UYv6vUYmybMfFAzXaottm",
  "key37": "wnJ7TBhWm1hypqnRZk9er4CRhTsgcYuU9uihmBcdKMVY6JV8jwWxvkT1UuTKyMjohS3JNKzfzxjZPJTZNAHd9Lo",
  "key38": "4nkvxGXPAhsRAYs6wFKjsZNCem6C2YVijkmRzCW19qiHKHe4vMFWhVJATssYuTwy9AvnuLTE5qgSecUAAeV5o9YG",
  "key39": "CEzEUT86cvu5HLxzySsDgYeBiWnxhUVFC2Gbd6Vpbgb6fQthzfKBUnC7QRa4e6h7mXjpd9UfRQCzvLoASZtpJ7J",
  "key40": "2qfGuYbMnY1UEVJS1pVWT4YTxjgsfmTVRAYEjDVVtEnuQTe7iiV5BgZoJk4k3dT6rqv3jQqBBQcvpJANmVmJPkgM",
  "key41": "4Q8LjQfk6comQaScGw8Kdz4sk1njFi2W7bgLjXcT4sumMsvFAKfPgRTMzUwzacs7QZCdUP6QxfU6MumGqECQ3TFW",
  "key42": "2cmW9iDKTyr8zRgF12WrS4jz1nQCsAddva1tdyp54bwtK6MMXdw8ZKKQ9rtPsBaHi5SHKt2VBBfDSD6F5173nKEs",
  "key43": "6758PcVAsF1ZHVCrYVZnqXghE8HGeScFda95QUfmeiWZD6tcSk1nmoUEmTsdPSb22m9ZG5nDVwSyXAKZfYhEwD4B",
  "key44": "3TtZzY8TZNVUqZQPXRN9rCBQYbPL4281iiJqPhE9N5KyEMp3LyF7khZDjzahh25RZwThQL5UUpjKdo1m1fT5JiJF",
  "key45": "3n7JTRqjDCTgXJP2b4kEiSdJho9aXwqSNR3DFExTZwuaGtkNAb9WG7ok5WcqB8pQCm4FXoPTBiBCnbYbVVw1CxBa",
  "key46": "4iBCbLyxhRmBbLxsjS7v1wtgrBtWYutcbUnu3d3Jgj9L59HgXSXNVKVWp8VWjichYwxXRUwsT6KeUwNwnrsts5yr",
  "key47": "5woM7F7eygve3Kt23k9DbEMmwAVhKrrUeZMcKXVDAHZTY8sr4vm9EZMne1T1fXLQNtvWDfLLY8cPc4XUxVjz2XaY",
  "key48": "3PSZ9ZkrLWQmrsGfpAeAKofftfdvToKFrAaXZkJQNnQYdKR2hSb1GZ2GaUqzzaE8AgjuHufhrSfkLM6yM7Ze5JiL"
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
