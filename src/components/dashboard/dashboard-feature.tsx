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
    "2nNkfLtcZC4GB3tXgdtjPtHv2nedjgvaeBsA4Gq3VdGBJP4VuFcdpQx88fsvRu6dxU6UyWyhWTSspGPCZLrPfjJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZrhwtHTK7tDFnNqqfx7zzU5oL6GmMyv3hyRsNhaM5VuioLWoiVGqYDwHGPqsLh4Rpbvr3kZUNMyeRE2DeBJdT3",
  "key1": "4HYZTNCxJRSkpyjCbbTZiCB5CiRb3JfbGQC5ejeDhfcyfaVXijkiRaLfB4JsDCFE2GaQ5KxnVV89kWBkX7cDMYnf",
  "key2": "5pWDq8gdomK6sRXo3TnicYAamvc5MGjNV5j7nZNiPaZVdTXqXtiqKvGF3gKX8kwtR5DyQQcXTBvtnsgDqbvZrpzZ",
  "key3": "4QSxj8qYWhbVchzAbgh8wvmBg2NtdSCGyPgKkxkG7Py3CJTK4n9mvPKizmu3SP2jP5mqH6j1zZyJZWdwy1DDmULf",
  "key4": "4mfDnRauPfMApXhmPkKRmyKmVCxAhopSKEUagCBNF9LrcGaNGvvcoznGcsjeVpHH9GkUAsCZ6v7vHipY6v2p4Jvc",
  "key5": "5sth5ZwXy8HtUVkv5iXxnJ957i9KuQBh2XMXjzC9CYpqJU2ivi9LbH79cQA9SWbCytgwgesea3mdxeo1qfG344oc",
  "key6": "QPXVHt4sBjyF4GixDmkPsXJvVbUHE2YC2pbh5CJdwC6g6Fnr9CUL54ofJRYZDm6ETpkP13ZH7gZT8Xvhi7GFJPC",
  "key7": "4zLyZCry2XbmThXAH9AofwG7ZhBjtA5VUB2WsXiYSRpUD42WtjnRRzAqXo3SiER9EEBBdMF8fwHsgtG2wStqW7Ap",
  "key8": "3bRzZhinBhQEhR3aHXPwNeULpxDpx2DSH8TtfAu8v4XMX3neswNTYUKwytSZ9wTtZk8XPk6MBmyk9z2345wY2ELv",
  "key9": "5V6x5Fq9o23J5ihp5K44zE8bkTGhEuAZy7KsWxeNFFiwethcyT5qWY5jjMwRqtFDLuAMv7W93Vgsw7uh9t36Pm2",
  "key10": "57JYX2w5qtdzTuyyQdkf2vpX5P1L1KbBfo7hPFLnzhYb4KjfiBsnpGvU291kcLZpffVRoUsjb2CAV5YV5instTCM",
  "key11": "uXM7tVEYQT9XvzuxAJ7AHxg9np1aVZLAUMfSjmFRaZSkzrnwnUmF3VyaU6DP16qyiNewtxXp8sUxnPegnfGZAh7",
  "key12": "4atB4KDvhL4HfHiS7Cn64M5mB5T13mwV6VbwuHYL2K42Nqv9M9oT7a5ECJS6TRUZBPJV5fhrGWahaUjBaTnzcXyH",
  "key13": "3iAeRyyFvvsT2xumBbXYKsgcE8SjMywfNz6G2B6oGUfzoUTaDWtw9K44MErk9PBZTvCif42kZzBLGX6nEN1PJ5NF",
  "key14": "4Vb46tBMHXKgX3orjrkCWteVugx86xRsE9LaRKATg8wnJsopWE9c2uRTeiXTuv6wdvY7ey6YuzEN4PzXmoisZU2X",
  "key15": "CJQybu3fPDjA98AnDVJ2N14XxL3rh7nWVcTfniGNXA9EFLsjJEbsYDcHJhwFdN2D9jwZtqK6uSuvF1KZwyW6TS6",
  "key16": "58axnZg9LJRfed4yKJYDeELVz7RqtMVtZxTurHerCD6F9cL9cryBj3zERkNVauiENUsQREaBPF91mZMg7jvx9Hq",
  "key17": "2AZtUGPYUu3gKaangfLins7W3PeV8Guz44J8YmmiEA1uXvpWp2zrXxXqDLeEczTd2Qc2CgBFA8SwiQAh5J9NTWfH",
  "key18": "4bySu8qdeQSDBHZYp8uQ9UPbhqDATXH3SH33PbcnAUk53ZAG11QaC2DARqPJJNCpg3QZGK92nUkBHKK6fY4kh9FH",
  "key19": "3vySyE6zQkkhDkAo9MbGfwHktxNCgKCWdxErsbZHPBkHVVD2TdkDzgWAMXoXVeW7YXVCvr9uSNAsJTB2kadppuVj",
  "key20": "487QzxoxiPAsJSw1trZtp6wvHp9EMb733JUcwJEKdP5vw9PvAY5hVxMxphi84GZFh6bkF7BsEaNhcz96XuEiTLei",
  "key21": "2pbBW7n4u8z1N4gFhY7LAVqk14y3TL2hsEmaNHCUvQQkfJs5fYfjUuexBYwTuDRds7rx2akHm5fctVLoLnkY1ZUh",
  "key22": "2sh4B9h1YHZTPfCFz2GGi4EeXwFziPmpqoa2nEJrYBRccXq9SBUrL6w4jNb36oGw8awvChw6e3QZQAFi92HE9ztM",
  "key23": "3R2ukXfzf58NeorKSzVQWSupPNRXvBHNnNd2RPTSS3AwaZ3S3nRo7HpXFou8vi1g9jtCJSYtKLvrZqGQp3hWER1d",
  "key24": "5WMqdhvyhfPxDRmuYpQGfRZGX2d4G88xfGwDHpyLgY2yUNJiHao2CeXAcfhAfZ3tGfX9ySkR7RLZAsgMbGxzMn3N",
  "key25": "2KiJqLjj7Da5Y6ttDpr79hG9WwjAx3HfRsed2bfXMLaj4FN6gjFvELz5cxaaV3Mxhg4N4ZdBFbimCzXHHUXzGjgC"
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
