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
    "3dpULH9Tn6C6LatxneGQpyKMWsZ89wxUWmGRzb4J1SCXjTpnRHBtXdHF44SyGd5aTZip9EYS8JpbbDwzqCSZyJVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28cTqYwtueJJfp4YTb3vS5fhWkG244sKR1yAJ3eak3jachHg1S4MwmNC1HmVmgFV3jQN6drLZJA8YMw9tWMxvmAG",
  "key1": "432Krc6zM3dN7HuVtxGqgMwtDCw2GJHTHB2sAK6uM7tSPHa93qP6j6148FeevhQb2dN8kr5Tmv6dnmCnKBMimQH6",
  "key2": "1p4oHGvevod2qYH3twRg4B9HVaurGbWNWcpSC84FFL42xJxZe6LLFeFNrw5bgUG43NTcknMPSeRkbi9Kh8ku69T",
  "key3": "372BC1jJzDfvSBuNdD9mcdrdoL3ZsH2ygsppXDFuBWumZqLGuaGSKdidqAwpFcZKYyMCmzz71tEr59SzCby4cXkn",
  "key4": "3YYuxjKZ2Nyt9XVQL5y2cGrTVYTX79NxtQo475UMWTeqZwXuArJFj2yKBjDN1Pn5V912VxRriJPUcyvdXvyb3cAp",
  "key5": "4nv496D8DKwkPpiYbUFH1YUiURaw68TFHzXfrTkkVJSqKZb1a3o6mCn6YWgLNUMP5kQKkURUbeKzDF9JGHnQviBo",
  "key6": "3ZN6PjmH6GDWtGG7GkXNWT1BwKn8VWe6DWhhuKPwuZZxiAekbtpD6gWwh66N8ss24wfZgRUm66bFEu1hm6sD5uGg",
  "key7": "2uwL4fctiEhwvaLrLKV6vTRvYeutzKf9NMckwmHoZ2qQk8YhKKyfNLRDQirAkEaUHvrbqUxP7V8mq4c2jVKwrLeh",
  "key8": "4prWfvpGrRMoLL1CrEFApG7PMJfHRfy6inRvGPUrKvBGX5uvPJmtrQhZd5xvLAgTaNyTFXszUz9uM1tkMnLHwtbX",
  "key9": "2QsZ5abmmJn5orvWccyeceXH41seBFeZL2S1Go5ZzEAffPhabS7BFCTYfYUFMSHAbtrJi3S2L6CNmAo4dgWCP55E",
  "key10": "5zJbjMHau7BhufEHproSZBMMRwcuoCHLptRGdYBSKWLEazM4gspRiB9AQBJopjqXFJMCmXEskCjcN3XrrRihW6Hy",
  "key11": "4DzPELMmMNxZc7jkghctfzF8xpTeU8fy7HxQWheccN49BY5EDJorzvouwZZnh8Mt2uNc68Gn6DS4KsXgYeSE5km3",
  "key12": "2dEnhmEkgcD8MzDLm5xpVT4p82bm3gQ9xUKvBHb8kjfWXv2qWDRAryCDH14BDLEHdn53wdbuqAJ212nwwAWVZ8A8",
  "key13": "NHwUnPaNg8LShWiHnhbaZGcTVQuKZHikpsqkWYEDpHu236qZDjjF6exWx1pgqR3HtC5ifNy6wYm5ikEFgeHBCiC",
  "key14": "3tY6PNZR2TwM2XEMU3A1kSgSHhWaKSw3q46XYsXkLgNPYF77rrLrnJR9tGz2iYvjAqhy81ErMFpPT1iQh9wt7bH7",
  "key15": "36BaMGfERmYrybEXbJ7vaiMUrR7gndrrjiio7sNz3xnpPQxKfEpKNYKsUdA47AA3Z7MrixBkz6FrW3cV5nQLUB4M",
  "key16": "4cDwyT4s7nbP2VWDX5MPem4HxwkeywEmv73A6BVsWGog5WVucWDbKHnQe71ETu1gbCPife85p71Z52XgpxpxfaDD",
  "key17": "XJEkb7LELAVw6VxQutiSEQjnsYi5gGDYhG2krAC3o8ctPbnbnzkaxjXe483s1XeRZJmX8K4VzsXnTvVVZa59NyV",
  "key18": "aDcyvJSuFKyfsseLbGuxtZsfcMrAwMxWWtHdZYJWk2vGq5GJ9X2bccqen2LB5FE3Qt6o8YB4QDGUxMhDQkEwRyc",
  "key19": "42fNBUPAZj3MzLzET7GWuRySMrS5JB6d7mr26XNjkZ9FPcSQVHZCTA7jr8aW4vPfXmXFHjCZF3waG2EBgwvkqWmR",
  "key20": "2eqBuo4L3AjGgHYjydfFSHVAzxRrLimTDQiY8Ywp41VxnUhPoAm6wqUy2cqnvCrRPAQyHzZeYcUgqdqaRATvDmS8",
  "key21": "2zntmCL7huAe9Gj3cJd11fzyYB2C5Mjoz6ioJGs19nnpvSYNy3F3YcxsgEu3rGDFmnTXeR6HGyAZnS2Fx4rT2aSY",
  "key22": "sohYUfe9b7qC2Pni96txnFDEnWhF3h8itbQNpG2UGqx54FFp3ptbZmqbCgSW2NjA3o8oWND1gSTfdBzjSnwtqTe",
  "key23": "wh3qudwCWTSekZQXYrRiNya5ijyDwaMeDYWgouk5QyPu7DyBfF2YabVYijroMCDFKHQzorxmxMPHcxCvy5KCP4Z",
  "key24": "5pkrC6YG5gCsmkw1hDxvdKttXbnBEzFc2M7ERFdpvV1Go9jVR9Ej3AYV2511depWbwjvZ5B71xpZiNuSAzF6bW4x",
  "key25": "38Nhnx5xg6jbH2whFLd1XaWzFof9tXyMwwpvHGLvfqvQcaR52EBNVpve6WwCKRFrPGuC9u2o59tAdw1L2tRKPfnj",
  "key26": "jTkKrGFSREL9MkXZ5fDZ5ceZfrPdtmb2yuBw9TP4EoeYBqSoe9GTuCg7rHN2eTrGZbpAjkqWNZbPSVk8hM3N21F",
  "key27": "4aaAKx9eFxUPTU4QsfrLPKCsfwUmM1Bohtd3BehQaDpfConfn5jZtkhSeEwfcoRqNbYEmumF2YFHr3dkuVYSaS7y",
  "key28": "1upTKufiKf4iEFJTxqxDvFbjAvtq2dmuhaZVUk4LVDCynitQiQpcX1XoE898hcJDUHE8KwtHEh229yXjKKzFdAr",
  "key29": "4xDQghnkLLBTZEsA8uK3ZV3F1UWkpcsdG5YDnRnLHYmz2FqBNqrZqVLAydFWctP7J48xmr5MVssbRZoD3TrwUV7A",
  "key30": "2T654qKpebvxMZoRRmYf8ZHz6UDRbw7iXQ6S2dLzfqwDUSRSDJzoxkywxaKVoQC5fqhvNxRCAUCATLwLQXKo86fY",
  "key31": "2vjhH8LoZqC29Ethg6RrhBAs4BN5gE338Zosr7EyMhUmKz1CrX4vT1r1XcrWw9tESNwZ5bNtviKmDH3k7XatVNqY",
  "key32": "3jbg73N8T8fNzJQ2npcyv9sFGuXhC9XwuCNJQwYQbVby3M9u9NgxiLkJcfncBYxFFGyBC2j8pQVD8CfpNiENi5EC",
  "key33": "JaivGHpjFpZXfNzDDda1JeGf3qmsBFxC8HgnK5JRfGXMkrnFVjX2wSRoWSKEVeUNLnw2ppWhdDEqhsmzCvv7FTe",
  "key34": "4bAgM9APwfZnAnAeLjdbYpoVFCw5r64cxS94wGeas9ke2jKrKxXcnjE1rzkwaT7GcxyT7HsoYLHg7LpGC6s5A5RA",
  "key35": "4dqA6QnL93abkBzDN1ydcbgukdCiSc6K5ikeKBwmGfDxAzqsXHaqn6MU6WPfYVe3ZfFYzcdgeGvkYQtLTXNTZ3EP",
  "key36": "3H2JrVLWng1j2BQeTq4P5PxB7wbQ73xewgh46rWkusPFE7gUGHi544nSz9dMSKbdBVoa7VYey1FtaRhUJbGtQT67",
  "key37": "3GpS87YNWszAuHh6m2i3fb2RxsWskA1JHYcyv8VjMeqP5rYfsRHaThPdNF4cmfxTxcR5DyRmiCC1ecnR7VvujzDi",
  "key38": "5ovpmqNwH8MjSEipewGzhsRbVJM6tFn2dPK8gVrsLe8McK8sH1k9MwyQ1FKj5zH1EAQB1DEYHYoDw5Hye9ww6BLS",
  "key39": "5gdHhzWY1uvoHuKsUbfXZxGnezKFMSx5R2e1FkER8Bx8nFMzDXgG2vpUNVwCtu218NjYEopLU9rYuRXTDZYgvbSG",
  "key40": "4uUo2jHED3Wwi1Q48p5kZUXUpHUWeoVRBaWPwV9qLpj2FBjJpZhYYT3QstsE394KLx9fa7bn87djZ2FytFtrVfX",
  "key41": "4msrahcrCTxeMc6MXGzE2V94rhnC4LjieQARWFLrq9Hha7ss7B2F6AeP8FujTSGhJhuQEwxNaiYWnz3CrVUMQYVc"
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
