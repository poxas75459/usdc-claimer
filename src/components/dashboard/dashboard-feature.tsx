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
    "2xR9iysHEWS4W7UhYZNBitjG1jkxvG6meU2ohgiZhQzGxbaeNkBLbzCbyNo1c5hBidZ5VN8zxKem6a8AsREYxXjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U3kNRpscc8WhCyHqKztW4LjEkRBAJCzvFFFZoqKD3mGYPZSJHDga3ZFLPpC4G27MLLwyMsZGcLFkVqNhNLanZ7U",
  "key1": "2qGcDyXssxV2mtmMuxqRgP6isPUabmRc7X9uQNvvUMXd529SBAnAA8FXFh9zcNYyZAVeXvXrWPbbq2CXACMXiuLG",
  "key2": "5gsKQaHhcEHqE3em1AeqXLjjQtgQpSadTNLpWa8Y9iZYJgLZsPP43CX1zepbC7EMZgArHyF8KHKyQbknMyZL544y",
  "key3": "4XJaes5FE33TgGcA93V48CZ3oeWUCsNVq8xpgcUUQnciENAxuVqMWXCzoAm8ubg5cLbNSiDvKqUWEgS1WvKQXEhu",
  "key4": "5CCYNj5pFvgaHCQtW81Zjv2MC7FvdBthv6rb2VFSEG6dy6VLRNQcK3NvXh6Yjyee5ob6LqUVsEzhXKwkqQ54Ev6",
  "key5": "47X9UyEvedYPaZVcWDs3dXEcaTJrLiE3z6VBRAHHiFdrYGW18rWnDnxCLm7hkSbKi5pZ6vJeNmXjNhJY8JFM3wNb",
  "key6": "59B1eJaDTzewYCjABfKoCMTof4bSuyRpGKk6JUbUV8SkYukYd7qbZpCdGM6Vi5oSF8QpeAjDLwesgC1HsbatsiLg",
  "key7": "4Qz5bQrLzFdub1eGgkXn5t1VmpzYVMsRHipKU9HVy68Uz2XRbrCFsh5yf5MhG6wfFUbFEpVRAAsDUnKj11Bk8jUh",
  "key8": "5KJvAz7cofzX95z3F3fhR3vbBQrNfoncUhrScadE3Zku5Cn7Zs6TcTNW3ziNqVqFw6vyyRugnV3CUMRGBNgxY2vt",
  "key9": "3UzPWUDa5LQgN6ZFxCzkMVC2E8SSFe8rytadkpY65h9BAdnXVjJwg3aLkD24UhPzbAFLTKrQZvGkVMtAyvHr6rBr",
  "key10": "4nRPxEYNGujeT9X4jwmy5dViRJxU4VKHgRUKrzXgQQjH6bQefcMZ5ZBwdACjJrwxo6LzkSf7UwdvkiDHSMY3pxqa",
  "key11": "4RB1VjU1jpmiH8LCgVniPJZ7uiT82UMa4JxDG7SAKTiojJ7GgxuiSJGj1vWwNDoFHd1g2XMzd1AgPT9wQhfDxd7V",
  "key12": "2Uz3BVtP81nHdahEg2FDVSp9WR9XyVQecYvFGwU8prPNaYni3JMsHsPudXsu2pH7QMJS3vUMJbqCXu74VrU4g7jM",
  "key13": "unoT968BomLyZgzLQvEMdfaPETFAQaRMFJ1TK6ijvXtqZ6ysYMW6VZGn6iWxo2V4f8c5aVLjMxU9UMqC4nU9MUj",
  "key14": "2UuvdHQ7bftZAoXiJmiWUFyDfuAyd3o1VFBxUqH5wRLboc1ZRBKZYWsSgS7BBPQEHqSQBtSyqnYfDcXFoL4ttTbY",
  "key15": "4VPYViJWpbitjy5qETCLsWzztTGdqV3J4H8YCQmiUrcuRz8E31MQTvWVHVEpodk2sRMv6ic2WwcbbjcAQ7ZXVQhk",
  "key16": "euLoz1JWfHMSKZWo4dy4uy6QCV6krQUbF8oqjo7tiFtAHAMWo3x5kUQ1NuzyHjcsWZ4wAnWLzfjtBa3TMqkWSkR",
  "key17": "3V7m6mer9ocNGne1q71UBnQACQaRhYeYHZ84j3BnBkm8EE2kEcDq5joJ8yjJLRQXRbuT2eERrfo4gNRZDqYRV8zt",
  "key18": "36V5vgkUxvCVbr3G873kzYkAu4ryrjrcSR4NUGT9nmP8EFX68qMUU84M3mm9AoPJcVsuMy8LjNwhsnUTnyCE55Xt",
  "key19": "4oaxUqWM3sPjEFPpAdJi6jwQBpAwH8trypPTZa19qfn3J4H6hvrkqmn7ggARi457dP5tv2WMK2zcb3p4gcrhwnLP",
  "key20": "29k6nMg9YQsu4FzoU2wrGfGz2pexLApN45J1MVh8Xy1D4ZrTQC1Qx8yFy5Dgaa4BhT3PzPxGwCQvNPKPZ2SquHX2",
  "key21": "ySb7J7e5JXhahsoMmdNhA8hM7xbcXpoNJrpAFDsJjiX1FHp1u47hxfNWmkJBZUtM8SYWmbsMZAA3Wq2U8eyQwEn",
  "key22": "nZMnoSijKW8YZ253ScXPpKZW7misjUN3nP1j9Ym5qoVFWL8J3xBeULntZ5cS2BogXU6kn58v6YfctqpzQS2GQyB",
  "key23": "6E7K2TrHP5iwA9Tx72WJ2gm7VFpYoRzZb1re7uHnrVvRs1PgUm3B9wTnsg4QaVQD9apW8hCcy7Zmfn165MSAVnA",
  "key24": "pP2G48MxvrWBZa2DJ8rm9GM7mkZSbfAvGASwPZVekFkJCxgRBQ9S346b3Sn5Ja1Wd4Qhz6DqcpZCwbDMzaHsGL2",
  "key25": "8Xo4PtegtLGuZCaRuWNENuef9hURHZg4fna1FDkramWZ12fGXJer169nY2LqgZTvY434rAPxnY1d2PBszVWfq4v",
  "key26": "2yWJoTtrgJMo81MR3VE7w8EJzKzbRgJHw3g3scfeqmpTd6FCfLHvR7wDQyep5XNfbZVZSgSoF2bo8mGBEy6nZQAw",
  "key27": "4EMf35H1CqQrZ7Fku1DF4ToqMBAcxChZjkb3UFiKMGWpE7DcJPjbfLPvuY7u63fiJASu7v3HZLSnMEEBC9XUNHCZ",
  "key28": "2LiFpcKC4Dj69oVPd3wfnvooadfezbubj4YsbWTvvx26cgvAYiqEiQsvdc4Bcv1x6iUd7KD4k2bqnozDeKTE2RdA",
  "key29": "37oWcyKWFcjjPgYJZbqwLt3ZJXL9jRxLNrfCSZmii9ucJxnnCtS9yzL9yrUYLzvZ5woVW8DpCHazANBJ6VVisEA",
  "key30": "5jTzPay5Re6cyxvnwLiyrTUv2nZvd6UR7i88vSDoUzSzqBfnUaHuJqtNtjktYAutbYGcnQZfdRH16rSnoiKiV3r1",
  "key31": "4sWsrprxBnLRQfxrPfFbvcbjzJ5gBZFKc4jmQeYhfUEDmvd6n6zXPz57ckhBtqBPahQA6Kr4qFaW1mjcxnzy7DUm",
  "key32": "61JWpcfRoxgADJ6v427qhGAFM4oXVxX5A7k5YpD4G5p2cGD4EeBWpKf1FqWUZHx9A8ea1QTzkzeboYYYpdEmEyt3",
  "key33": "545N77eEoV34iQi4n3MWCnrkyEnf14pN3BFEN5PHSKvHKLN4uVz6GwP8ynmWego1UyqiwtY9Tv7NqLfiHAisejW9",
  "key34": "4HvVK7vtfBdjwoz3XpDdpVYnsoGucXrzbZULBkB4Xd8N749wfGvFAbDpjswzHjjLPKu2xxuwcHn1bNpYr83a6Tux"
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
