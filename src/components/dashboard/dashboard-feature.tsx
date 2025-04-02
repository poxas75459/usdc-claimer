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
    "32uxVy2CwYk98xWaBV9k7BQundbG1pYX98fvACpD8C7wNjTYupUAhAK9Wq2sg12Usav7ypkqv9xgrXZunxbrZeJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAamAUZoyBHXphsMwwHiP75s6bS8aABxpsWHhp6HCmtKqHaRyTvFshXCRVYjYd1SyBfVnZ8kpAGzkuu9txQsy8n",
  "key1": "4R9AAPXz3qmJpLDuX8JFZDvBTMHsuw2affTA3jPcZKSJh3qJh1XAiKYqYADwLxpdr6KvooQ4xrZP8P6mYFq8u8ZU",
  "key2": "cu8G4petnkUDeSNGknJ5HLeDmp3knrLH84WCYeZvNTNXC5xzr4j73mmGZ6svKehjdhUwevoSd1hcBHbw7nDZxRc",
  "key3": "3UaQDE3fiymFNzrkgPPzJ5PtzeV9vn7pLn3thw9y3UJShCqPFCZrFi8dsxpGaDraLyS3iCr43izN6cykqT26XUcE",
  "key4": "3rrQSk7YyooNLFtXQ8t6A7HLTZN6CibCXbyMEMLvgDukfG748MTpvguhbFaLxTNHCs8tcbURM3AjA1YCk8QeaqMe",
  "key5": "5DffZwi5hdPzViZcJU9FcMcxJfZGm9oc2cSemdDLqmeqRaFtyesRKpZxj1Kd59rb3yzrgHuh2BpUzVZ4X9wDef6F",
  "key6": "WcNe1JBn2Nu7EMpN9H7Jrn4wcAuTDkHXPw2dYbhcfqLahUHBcUMPAZUBc1Fy3UdhG4E6qPyCH45kmM6DMhufW8n",
  "key7": "3YWPRGqR9hWCAXKuaG6X33G59xxQ5awAzUzr86Y196YGJcsn6x3geoYF4w9J8mRBDb2tR1ntcUkq8Ew46knvraif",
  "key8": "5ursSvc14jn6XhpA6bDqKuTwhnRBig8KNY2WXb9fzYjyfrHsWR4En7y1AH854ECrggQu5N5kJPVxZEYod7YaXf1e",
  "key9": "VjfBtFg9YwMFS6GyexHmno6P2gMdtnLTnpeJEgmDBxbNr3z5182ZULhdEio4dTqu5tiykwqnEegCFR3jE2gBbJ7",
  "key10": "3KciQ1rH3fgT6JaDGV6Rav3VVSQrhQNFJDSkueYeyVEj5qhKPGeUwmsFTQQpHPfAwzjrX5TCEBa2CNk5vJTgRZ8H",
  "key11": "v8DKXsNL2mLMWCyZXTk9eiZvAUSDAxAKvhMWV7UohVQAwFHf6ZoYrUak3PNHRR8YNVuZj8wjzSmmHqNSDMTBCw4",
  "key12": "17pgFzCwbWLc3FMFnrKTeyWAT5T4XQ6XgdzvDYSS2ryV74K1C7vfKUtJBZ7HEV6vnryouo1mgYtsP2geiQfW9F7",
  "key13": "2o7YQrb3GjJS59oQjEXCLmUausFvmikZrLWhSRo3HUHsu4WF1zYvYMZvqsyKGwH3cuvh94TZmhERD1zYjZaCeyzv",
  "key14": "2Y2fE6eZKPHXWVRku1ZFvSKpLSpqmPiFvJJVKHJBHYRfVzJekWGqs5PrCFgDPNryuJmRrHo7biFE43Ej28g6hUYg",
  "key15": "9CDGx5WgBJMwNgMfh5UN4rWrELbv37mu2EhYiuE7hYpTWACJ6kyQ2r9er6qDAY3yxQv4Jda1dTuy9cB5sa664JV",
  "key16": "2z7YHXuFjm4SzJTpE3E8VTxFgDZfhz8LG1yqyt32NumhDuheRXHTUSEhJVSHF5v7bZU7CrHj99ervuNWjPyJ8FgM",
  "key17": "ED4Vy2XckfmyJGuyeoB5RTGcC5PuPw7QWGhDkNib3ztcXWQXTSsYK2RzxUhTJXYtb4ZBdf8LheAkwpfmCUseEDG",
  "key18": "5B4dF2hcfL4yXcar3Wcf4wvF9cNpuQ9NAvERdxmE8rNtMG5GK4wQAjg7EFiu5J3TpUj1LrR3ToGVhzeuXoqFY1Ux",
  "key19": "5GwH5JFR4NtQ6bBVzBx6DpPxE2Gb8pnWSZQkuy6JqTKmxDANX5k36srdChbcffq4utmCUjbhKkD5SCM4E1QN8p1z",
  "key20": "3HbNAMBsCcrXbJSAVhsFuWU2sxyNu5eQMfLRfaZyvgw5MBrr4Bc2D72rr13S5aCTeuMRNJmEG64p7JNFAZ9xuZR6",
  "key21": "3B6kgEpaKSCPAFiPae31Uj3FHa9vonnNUdkHRHHZncXAJ4YyKWNLdNoQnprZbtS1WmzNcs45Z7DZWmVh28GdUHLT",
  "key22": "3hR7fkEfFD7NSBmRdCo6SAFWSfYfJZp5whb347G7X4E2RLyKFnpkwNkNNFcvSTKSzZA6iwhmx1PbY5w7gCcBVZj",
  "key23": "343CHmZXvNK3b99Csp72WANboCee7wM8BjzSxAg9u6QYTxfUw61PAb7vtpzzsts1yijTAsM1cCsajys1EB3BDp5z",
  "key24": "5EtZYsWR11bW4wyY6RFr865184ag5xsgZyZi9JFjFiiQms1TcjCxuUpUpxp4Qm5tMd8jbuPRAjU1wF8NLojXrDk5",
  "key25": "4mipF1JfoBf7VBXw2vxxNcwReqgF5x7uPWu4iT9GysuJFZNNskVa7pznGdxVXP2vZSA11PRLD39z19jtzyQMXoYU",
  "key26": "2meAn4jqdBwwK2qnKxvJSoXWgjUeXPKjKBbnrAyeVXRe8aJyibnNrG2q85TsZLF8cARt8QCev5Wa98gPKaZoS9oC",
  "key27": "4ZpCJC2WDG4RMnRum6yoXWWPyhD2LUvVe3thPZuBdcqevWkTCPgYjPp856HxurQde5aCKfi97Po5tyD2VoFJ1b1J",
  "key28": "43tz3D3kkx6npAgSAWkwJRLvysJjCdEUVDYnQhpoL4P9gZ3eAgrs4owV46XhiZdq7GNMfGVF8Lm3GvaCviua1r38",
  "key29": "FYQqoGt9cRkwTCKq1ahVr3GJCU3Wg5cC5MTZ7jP71E4GE9iAFh87JEaaTmoLrC24U7nvJBTP7MMRm8JGkFZaJca",
  "key30": "5pLjmgTk8CprddjpgXbwYw9w1LsCsL1mAjP6NiDqFZrxgaRNGuqgqhEkQcoZYzAf5FUq4MnEo1Y8yVUu5w8VKC1i",
  "key31": "3FTg5vZnhHZAdW7Nu1gQVdiuArebEnM5f3c1xo6ZPzCPQSAHh4Rwb6yQMLp9jSKwTUaqD8e9TFCQCHwGBxA2AToG",
  "key32": "32dzh7GNnde3HDMyvhTFj7Pi1xTBfD799hqrVgaXkVi2BNPLtfC3ywJiuJC4NAEUQttka8V9npCJ5HHdoYbwxsvx",
  "key33": "5dG7ipcuewNEzxSKpHL993jaVnqe1YF3cE1DdK7ze4GR5NyMJe5uef9nhhQ4cyP3GkjdBbueqs6DknYC2NzXTiSm",
  "key34": "BWxrTzhy2AnzxcnGaRFpctdBYvym7qCUbkSCBtpMT7PSaTqkig6xu5tFyTqeYpRxF18ZMdPV3Tuhjm6U5jQgb3E",
  "key35": "5KVcLmeMMxPgkqLaxKE3pHYKHo8b84SHdYNvc7ysqWo5iEGF3povXgg1EFb9inH4BMWASNtJCiHZfH94cSdwkSUV"
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
