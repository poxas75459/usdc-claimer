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
    "5qt2Z3zbAPNrRViCVJsXUUv4rewSkPGnu8EwxJT5hLmHxsyx7YMik7Xd3kkQDCkYTg63keNAj5rRTwxEZgpCsVzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVPA5aSoHhpH7YPPwzBnDDLEJ3QrN6Bhm6Yu6kfqWc59Arhz4eJj6d6K3fEkAQGQkR6KMaSoEFwPG2zchoGWwna",
  "key1": "2nB75hTzyoi8rek8AkggEKbVGrUwMhbWf4j7Gmw3AcgLqMYZpaSZUSxrWdkVrQPaSHiwRJ1nqtWERQ9unwXeB5yA",
  "key2": "5VmabSHXnr5oFP4Sp7WeDvqSFVjXAP9NNC9sod2tYJzkkuSVXJRhjdag7NRryb5QQ2cgSAoP6jG5XVLm9n2CmVRX",
  "key3": "5ipoNFR2BzUzG3CuR21iCwxUCSstF82qSzcaL6BDP1niqmuBizMzRjnHvV6vY8fLoXH4qkFuqHJ9GX56ZQ6Dcj4Y",
  "key4": "4CLEEu3fFq6vDgsCySxp6uqebLJUEDrqzjaZC2eyWe5aUjwqJeA61KJouQr8vBjkuwyxdWT6HUgYWe8neCXMxAvd",
  "key5": "5cdvxKsGYDP6NBUFpw119biXpbmEcpgzfgfC6RnwTebHdDiBPuVE2GGbzCFoZzvhToaSxpd6H9QvaEvhTKcBoPCa",
  "key6": "3XWs6ANen6edWpXzBcUnWzFcFqDgExknNQZNKocWHPmobhomAeSRR2LMQCdgxYwUX7JweULGgBSE4HSdihztuRVi",
  "key7": "2ACTgMdP8UbqSSBbyw5nk7a9uTDe2Zh469yFfWxUNeTY6pmE4txKRuW5NuvV9Bv1qjiBu7RnNQjZ6Ute8QMDXHZy",
  "key8": "4Jw3a8rVryhfQJcLHA1FHtg7Wm2waPYWrgRB3dEZi9J167u5LFpUGEmJ9nqG9YmmtksvxnkbV5wNfQxoTbrD32Yz",
  "key9": "25uY8vX9eSkUxCt1wE6GcTNAH4kTQW2xginMGWnWYQdNHawEmd3N1warWS9D73L2tkPFFhUR3Q9bDZG65neSgfsH",
  "key10": "6252UM9gVZeJb3UzjMWRd7Ak5b4Avi8s8paMMkr2rTBR3E3TFb2tGmxuhMZcP3n191wBh7eGUUrtwUQPiRXWqgAg",
  "key11": "3zcUrZ2fnX7LedKKUD235mKnXMUGvVwzdfmpWTgG9R8BLfc2LHXGUwMeMGuRRU6FPnbdYvc7RwnBUfH781ujQqMR",
  "key12": "3GURi5atBVq85QrX7tw9A7iuD2tUStuju9dwFKRx7saQ4U6P6GWMPtgZHeCipEJQ5vcaArwHKPSohXpFDHeGbP9S",
  "key13": "2LuuJusbjaHsj27iNvoF6BjGLh2wWvpLgYC7zq1d8qatg98sSbDAJUjvfqcKtPgPVCwT9tLF92Y4yKDn6Btgmes8",
  "key14": "4TzxGx6qgDphG1LWWchKVNcyYWVJgrBqVURbfxAba1kmjMxu2ekduFPFB2UQEG7ccCDLrBMkwFHygkCc1sRFcoFw",
  "key15": "59rKGmsvvxnURJ9TKFgtXoo1e5LSpgKMhbxx8pJytG6HY3cY3Lp2Yp2AkS3tAHocW8HrGcTsTQK5Y2Ny9KzQoRGn",
  "key16": "2aCK1gH4de9HeaWBrTm9FcdjJNtNDz6n7Yfn36MK7xBnnbb1ztRYUcfWU1arHA8auoxF2DjyicT6QRmYgDhzVCRn",
  "key17": "3j4UBZbebQLj1BGdrFSZGevcD71KEkDewhzL8DK2TYnSJLqLUABYwXKrbhrHGm9qg8ncBoBiMHPYqMeNnAq66whr",
  "key18": "2GFXqnrBXgJgfVSApgW4Gskos6TnRHMSGqHSDtSRc87wCb1vANBvqcX83UBsssmWUL7gfgxrWJpTqth2Vntd1PgJ",
  "key19": "2bqJ5n6G4Amm2Ze1F7gQfMfqUx5uGjgP7Ty68g3hJ2mECykfWwvFRs96XZAHXjp6PjEymAxgKQz75SeAY1LcxFc1",
  "key20": "4E4GDVTwq1JUHr6yTSA8rXSgaNvMLFduwxroFKg6nBW4kKeYXm51JYCDMXkQpdRpWHskdoXivwwKqBzjbJX8EWZA",
  "key21": "XWiPvgCnzXr2DkyZ2GDtvM4p5fg2jCqaJvyBYvKraCaCmo1tPtB8SFMFtizsieCKFrxLzQ2gEsGaGKUFVqoqKoP",
  "key22": "4Gj6HSTmQPHF7bKXSXfdwEdcg2XmWbgGWTbrGokFQqmb4rRsu8Vk2jTXUjEjqjgohvh6T1hYEgEraXAayvFe4h23",
  "key23": "4FrxpyyN7pEgKXKBEbDgRV73VC67c6L2K7CvRbZHy7QrpBj5PBvEhN5s5oGBmqu4njQKMfMhZbEW9dpETft24AEZ",
  "key24": "2DnECaygN8ExqnVwAqh6N77GRc7Qdn57FU9Kj1y5cWv88uK4ewgt9VgCX6hTP2Rqc6tJRQ1s7mEuZ2gmaLHK76Dt",
  "key25": "5pRcESfLjnuqNgY4yxqR8rVY4kw2bmJ3v9bzYu5W6riZD86D3M7z88sntqq9oqPgBcEuqPNtuCbfvSzmjDUuuqxw",
  "key26": "2AkqZg7AXU2xhuRNDUQ152CSYQ6nsNDjUdYeB8Cyg2RgpEdTa4L3wJvYU6CYZHpgaX9CQQLjt59NpWK6s6khdz8U",
  "key27": "3nn24Ee3aBhFLJELwj621cLtZDJAhJedWPAJaATn9R7uvNtpdD7vDPot1mqYrGX1bFqU5KQfxz5DWZqADsz4oMc6",
  "key28": "5T6DZhVu7CAfigGb85PVZFsVRgR6aEirws2y7AGmDDgm9dYM9zHkMPgEaqkaR3JSGpQ78GaDTgtPLo9CzaD7tPJi"
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
