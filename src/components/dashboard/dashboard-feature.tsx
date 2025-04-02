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
    "5fXpRLDBwXdaZoqqCEVG1iCqruBbQySuanAYXcVvkznxCGcyhi8hqfWgUKqbCDngeX1vUqSyByxNBc7yYXi6Guga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aY9cWUNuW4J52awst56Y9yR1uLRioAVBNGUyWCtHQ4G4rT3tGbo89SR39kNMUjiAyK4PWMJjYAhUFRdjp57VXUQ",
  "key1": "PAtavw4ayy2rrWngTigjnf1ANLQeqnthjSc4f8uJN5Pm6E16WzfPm71fYzvUebaaW5E8kLtqLD5JNKjU7sBhtPz",
  "key2": "5xzJSNsL8o8bMCanL6yb357r517ybkN2JMbMbfbFPdjEFhYtwAyt9TypsZA1Kd4n7nTtAprbGSCVTxtMfWqLKvA7",
  "key3": "5LRWC1bbtf9CndiwZwGuLvoxmZ6Wjwcjy5yMaX846NrfvocCN69Gh8Hvj1zJ7s8zLVFxrjNXdMZCMj4RfBRrLip5",
  "key4": "4xbn6kgHHvyzkFLXaKhFVscyPi4XTmyZBqgAT3VF3EzovcodhJvePuPC4SSMQKFBhZAJRSMMYsgFHG8fZsXP4Bon",
  "key5": "oSCqw4dv45ovgBmMWFsrKDF4rr9cRrri4vr3PdxJ6tR985SkiowfuoNdm5hxbh78cUS9LUGifiNMdCcTnBgA1dh",
  "key6": "5vKazteoctwzpnae5PC9MxMw3K9QPrZA1QZZHRSxDDs4VP9wmcjL2wLaVUV3JXczFKUs97zY3W95K6ebCTuGLcxh",
  "key7": "5a1chsSBxjeNiad6zhw9fU5V8AYHHKRg23hDhTb7ir5D3iEiEe1PZEiuo6LnCgLWxDqqnoB7CCHwWUizZhvBVN8U",
  "key8": "W7GT8y3eduxYeX154mKQ2qJXakcSQmjUaRnDoRA6LUR1qT6W5efcKWcX1nU7w8mqDKrwnBqB7FXjfmugAdZWoC8",
  "key9": "622HqqoDQwsqcaosj1G3mwNwjnWCpbM3p9w1jQuo77LAitDZoWUodTXazwGUUmz7bHVq3SLAkgGmLWnopHQ1tJWy",
  "key10": "5HmTKRwm3vhijm5ZkjTR1Cvnj53eSbDL1DmVj8uE1RJzAU5o9DGfuKMizjW6FWhDJMVc3oEgAAZAxaWbFVLRpMQ",
  "key11": "5YxmzS9RqmuDmRjVveJ5gfXr7cPJgSzWKfki3i3J49GmuyD2bKmRghi56rJV5cpjJvt1sM1uNVsGs1PQpA8t4vVb",
  "key12": "4NhJdRCHQdsS3MMnyPCJLibfm6Tcd6rKMBqEfGHS6wGubNioWASYXCeNaBVLH37qKgyZXVN1fGfeazjo5ynK5URh",
  "key13": "31AC7WTUL4hMqUPT9AJZgM83MKV5wXSABKrCANZiHk6sehcRpJ8RUEi2eWXW1pAUhArLYSWTezv3abe6cDNLNuXn",
  "key14": "4zBEuWwPHsq1YiYErL8d9ym2mTB1vks6gC5vTga46zrf3dqWLKHL9D3LxAeCNTfLTkvA2kXPC1gTXeZqE61Pw1G8",
  "key15": "4eUdMbWc2TokJddAYDzokTERA9ohCsDJK3TocJ3jXPytSbHFCjhYqmzveFZnjRxEWcLZSiibtCJ1CwFtUjfzVhUt",
  "key16": "4hEXQZhmJWVoaoZmjWhiBajFuV5ZVtug91KNAKrXxh7qQmojMJhWyWRdjVVijYe6a6r5eAEC57KD7bjzvmFJwQYP",
  "key17": "3v4sWAip6DtAwgSfQgBTzqLZCzcZvJSJvkLXeW9BUqf1ZSETiB8NYYa5CFCTczvaC6KWosYMAbSLqLEVPwQFCcQF",
  "key18": "4frjEovmsySK7qcyBfvqz3uckJUCw88sqwNtpFmquPz7KgT2EsjepfspQkvMuQobnAM3BBoD3KsS5WwVw9em8TVq",
  "key19": "4rJRj3R11wNqtx6nKc7fVDvdQzzXSbdD14Z5FVkpVQ63HDgVfsYhnXarQaW12v1H2ycni3tGZW2GtHqBs76h51kY",
  "key20": "2Cd3BKW8epmvBpAkCZHnMfawo2W3YHDoCg4oELyhBfxtikoKQa5dKHyZjiPbgGtF9VaZpve6wRF44Tuzv1xwAoTP",
  "key21": "557jgHESJbcYL33ay8ZFgB7KFyMYFdqGXXYJTaQiQZbAQrShUJ2onECTNAmww6CfaDct23EjDFUzeABHh6iWZBm1",
  "key22": "34gryR24GUDyM3acGZ7ou9xWdrALnrwWvML8bEz4Tb7q5f4rvMAJAHCDhsW5FWD1G13rjhKwu4SSEFy8hXEdgtFD",
  "key23": "dKPbfitZwEyuW7F55X9UawTFiApoHBkkL74biDWVjiZatdPBYYcVuPxRgatogEpPpj74MdZGYWqkVjdg3g58UzT",
  "key24": "arxbJdtzvdzy7WXqfysBcwXoBuM9oq8wNpDRAUZ2rYG24Dy1n2Z7QbCjuJmBovFgRVdEJVUPuYZZJc61k7Ax27t",
  "key25": "347LqMkvbKeZG9M8bCgVQDFh2xbfujgRmC4meNJE9qJeArczfCr2pLQjkK74dgSStZ7rXVVmNFxh2roHazwyP4aQ",
  "key26": "WUNBoxQYVaJtJaUb63yTTwNyS1GNSNw9Z27kHE2fxtGb82vSTzkQGxQMCYBMpM9wUCmnUBg9bFDwTBcg5MMwzNs",
  "key27": "5vBq45PgsTpmEWzk2g4MYSE9HtTTv1cCruxKEXJ18DqYEkTkVSZwwEMe7EAydCCVzSUgcGh47zu1TjWqERgQUphe",
  "key28": "5X1g9zPU7UaQvzw8vAwnKRqe2qWefJFioVKomu7N9zAiJ8wEUiHLnyvz9nx9wfufMaBreacGnx9D1MKcySeQQF6s",
  "key29": "DpLjRXHcd5YF4M8jMDS1JMu6znBURUYDsSeGw712otrporBUD3CPoRXYxV5TPiiLc7sPCn3rksTzsYgYkY29XMu",
  "key30": "3TFtpKDKgMf9kvpp5QjXbXLvTmdxzkXWowtihiXE2Bkh4DBeMRghPiegrmpzAxVFccQx1xtE5pgrTjK7GHUNecSd",
  "key31": "4BzieZCDUiqYGzpe9T3UGHUkeK1axfGcmTkdzVRhyHx27M6eR33Nj6V7hcBpWQeoQ6VQckaLpbgn34WYvUDHBiU7",
  "key32": "5r48Hzs3iU2F4BuoNKL4pPEipgbVmGcwdPJ85HC7VgKoBeH5qEGQmXpvAaJ4kdeKQU1E4CQWYrZUeDFGKRM8K2hL",
  "key33": "31ZmCZyM8JoK8YCeF4EapX6jkhszhpd4aCnsJmWsvNW7tt971RnJiGkWBBWsBQA2DJCM5QjxydseQV8AmJesjKuj"
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
