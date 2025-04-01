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
    "z1xowg2mjx2KNNNrLUDTKSjiSjJ5Q2A8Amgg1p5VkrPYNBjtnBwCZ8iGPNvzpsANzpRZgYMRRKJPUZEhckHm7Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdQLPJeHcGDBVY5MejUgXbGLbXHyKixLXeLkZNGFBYxAj3PnbwGY18bNNGznTCZaaJ6kP9aYEtUZHXkW4DUZf92",
  "key1": "4sL789em2JVqPzwr7cj9QxsvGaT9BjrcoW143LcGgtRhgGisJ2Ub2Y7mA1GKrrSDmugwd48JfBMGtNiD9PnkV6iY",
  "key2": "3LD22vmujMzpaQ1ntzCrP9GrTqykxNAbevjxpeMnuwTXF6E5B6TwqNdADQxFNspv2hQyJ6nYHuebNBxRCMvVTxQq",
  "key3": "5Gf4ATFUavbA5WfVhMy1hDM2N2k9ABFXW22Q2GeJ4ZRcLZ1JX1nP2YHzZkEWPxEVDmaa38NwsHiVVhsCFXuD3WMY",
  "key4": "5kSzVo69Jt8Fbt6tPxQgKF19dD4FdZEFoQ2pXHzMaSExT4GNZrxsbNfWDPHqMFEzckHhyYNVza35bVizp7y1Br7H",
  "key5": "3buwucwAhnggChMCSWaN6yqgcuT6xL8j3mFaprNV8J1V3tx1AVLr1hUTWgz7t4wXt4HLvtVpSdWv1Q55gDusK7n5",
  "key6": "2ageqZUYJENVtXQuwfxZcTyW82guC9dWqUq1YV93MWe4At4vWKgg6s8N3nUb32sqxq4cmjCBsG8rDAEk4morEAhG",
  "key7": "4PCRcqxhPU8XgQDHVJ92srDHi1zkPXuDpQ8dMys3upWbwx2SHHMh8yf2ph2ECEZnKELAgVu9cv5h9WMbDvZ69r7W",
  "key8": "2yyrAe2ZJ5qoMVQXeQ1Gvbg5rM89TuxTEY365o9e6SLfGrG8ouA3UcyoaAHEi2PxrRRm5j8UKkQTSddtzbLSWuFM",
  "key9": "3MmUhRz3kEuYWp6MVfcXFJzPuakAxq1bqCvsQ7oYXPuKGP97J1K8vS6iTPnmHous87gfFzytXRz3ANRRk5W97vEs",
  "key10": "c33oDYbAPXkrj5ckg4kVHnJ8iMAsxsSnU2dNJe921SF7bc181d2KXStGaEn4GhvePUuewCsphg6sks4hQ7M6Pn3",
  "key11": "24izMa7TwfqD7nvpjsBRatMpHEwuR6rahpVN7ctgH7WyVLoAUCW4ATxqB3f6xdY8TAX1UZjgK2t5UF2RMz1Ln8We",
  "key12": "5HJPquNV1tNp87jHNDP1CpVJrWZJBRPvve73edbLjRikf6uCMqcxtzu4vaJkPK8LEuaaCwnkCcghXALJHmDAJXMi",
  "key13": "4SSnAhF35UsH3edcNHt8QYVbYyYB6jXiFwvzbzTM58ygHnyHS3tQSKagQW87Da2opD9EA5n9MgftfLqtMdXjsq25",
  "key14": "4Ve1bRJmNarfFqZBLerL3hy8paSDTkcqnuUpjJfwaPckutSZvk9Qyz8pxyNkXcxATfja9XgQwNBHDTV3PqyQkDJv",
  "key15": "4pVNGpWTuYMDcc99e4EHus57pfS49ZChAnKS86sQhFxk3ZHDgNVSyiPpw9nVXvv9V7w4WCm1AmVBzty85SrYWreH",
  "key16": "5PBXGrgopmR7RwYnUSdZ3hhLtGNeF6F8CpGonaqYswmMRofjij17VkSLApAv1F9whzAVwEbGD3ej9MvycUxitHzm",
  "key17": "5xtpstoc6VcF6oFjVBH1CNH7P2xYSxEyvWCS2b2x7LwvfsM9PU6AD2ym574uWe5CtFpLzscBGS2uHXNTQLNSFG4c",
  "key18": "5zf9BN3CxpYtuXnFECE1nsW86yaR2FpFzeAdpHTfUz1ocEX7dLNWSZru7YMz1UhRPX2Y6TtmXF6qgJFDRY1P4cjy",
  "key19": "2vTKtrqkjAcgwsgC8MzFecBax9fCkTSzHdCLcV4aR7Vcu9XWrQEqSoCdGr6VUB78kTdPJgqAw3eA2UeSDpYjDKsZ",
  "key20": "4pdVX22uVFiQ7nFHeceUXWXg7bpGaGJe6DCUaQfVwebHC8DQG8P5qppcyen39eTZCGPGa1fdcWiZc2THaG9q6cRU",
  "key21": "3dd6P6aM8CbWe3kmp5C5dbZ3G6FvzjptQ38jD3Mkq7WshgsMHeKoHTKpZ9Q58W3nn8TpL18Axx6D7RrSSn4Bb2iy",
  "key22": "2yQQZj1iYWwqLxysiSm5eMGhwdMG6NTSzNNNA3pWguBpuQNthQr3jC9AusSKA2U6xkb8z5Z3t4QF98L31jqRsLwN",
  "key23": "2xkoqNsM6LKqv4EdRt8eJwrqJDPttyhP37uLKPZFQ9EfFn2TX5XEqtZqZZZT23opQrQpUNKripjYyTFrWnrkV5Vf",
  "key24": "FvVzzYF8N3HzoeXHbGPRSgoxkopWzK6bihNdpd1AKyWzYHcYWdvAgzCrcFf2pGGJ1TPSjHoLiwWj5CA8QEnGAAF",
  "key25": "4JqJJSAjprfRWR72ohk2q9HiuaV4Ze9mBGNY6jpCvZcSaEgtTa86c5E6HYnDVWU59Ga2w8URDemxHLTSQWv3rXDE",
  "key26": "5NCFjEGt47iWPmWKHbcvpNjAZVM8F5VbCYVcHEPXeFmb8W6XhZqVbExtpzash3HyANAyyo8osLLPfT5vDDTxHnBP",
  "key27": "2NnmtXKrcKRsXehnLWcnycqvbFj9MiH4cnXBSfXq528ArsyPW9sKKQDDQPaBMmLgokUzcXWMLZcPnpKEu2HY8HDa",
  "key28": "3NVNJZhGLGLyT1WXFGC91bqFAx18MavFsMGYhoBRbeoio1kNnSm8PatCn6Ciy8RqDz5EGHxTzAhMSqqMnJ4iR3nh",
  "key29": "4ewEmjN5tAje9AA9LPGWCDCYNUvLUVXkTUoXtgxgQMz2LzhhyBf9AoJSGQgaRJDkbDwMVd2nA615gVBCKNGyoc9Z",
  "key30": "i1g1zB3xEjZBYjkMCRdCunvEAbhFNofkCyKZLqDuS1QLbAbEfDNdPkdoUHM2LTD96DYDHDvQ2rtxfbp24Tqk6az",
  "key31": "5P4EtjcKxfC7ckrdwAUb3qmM5pRjFtEv5ueRmFjqCGYqMi1WJMuZirUW8vZ7mdg917phE44tmJRTsF6dh4fxHh66",
  "key32": "r3pSpQYXt4osoCWsVELuWhiXo6WwdVNnSiPWgdzyZ24D1URv4Bn7UJv8cMzUEnETy4rUfVQY4tNsDnfwDLnNsqX",
  "key33": "hNFCbQpqaRjPFS18MJYUUJ9ZBk7v6UEbcPTjh9eCx6FHrpFDW5NazuTWh5YUVnz464V7Y2KekVqkzQhMihWCYT4",
  "key34": "5womLMN1cx2oxc7n1WPaNAB2dPNhR2DZEn7venjVxrYYHxqbVDe7phoUz8TdqDRgL6C3w7zqnj5PsXMCe8wHLzmj",
  "key35": "5REqg8VJgWkgXgQ4cM9YoYLF7zbJgmbbxHwZxF2kEsXwAJMZFitpGUS69EXaAETEHUXdd7it32BXYooKa3PUUjqk",
  "key36": "5wk7sCWjHjDvwyw5iiQKfhhhZUbbsHogSwDeW5LmqiETrkkJw37hvpUTyHTK9t4tha5TZSHTFAJTkQ4kwDSaHRja"
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
