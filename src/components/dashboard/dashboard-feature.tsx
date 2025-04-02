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
    "29ER6RACPAvVG7PojgTSE7zHUeipN3tNjCokGCuHH4h6FN9zDi5iQVxngYNEav9QB4jhZUfU8WKL9ZPbZ4bPoQ9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21U6rPcZpgT2MhsGxEbGcMroMk8xZMyzZJ4qMRF8TurAtVf94R4tba9xezwcw4mPsDmGBnww8QGqDs1fxvN2Fcri",
  "key1": "jp8nXppL6ByyPY2Eo17KCBYKgRQbQfnjSu8noiUVuDiJh8ZjA7ws1o4yQo3GuotWzL6MFmE26cHpPYUaaCCZetK",
  "key2": "3tXbDBKWAMQZ4DGSmS2uR8VsejWzrqs5NTgUTMA7cKE3YGJdLmczb6CNTL2Chau4HmzPns5rKd8uihZx7tURiMuB",
  "key3": "2SekXxp7K5W7Tbz76d96vGM8Bxt7aQrNNgm4ZS4YcDLZRtio4k3ibedn2jNRQGXVMPje8FjwQXvyhNGbqZwxW8g4",
  "key4": "3yDLTsxomWzNYqPrdht9rguNbgfHGrHgZqRnKk993ekQ9WCsz2oK3cA2yKx8RpEKdSbeMB9UVa3xYeD1McYdDB6Y",
  "key5": "4PousH9NszoSqcezvRHpVbyzzNx2iT6MuKdC2gXKi2XRJaYsugkBnApVSvjjjuYUhiXwRkCLpmTYFj8YXkZEMjwQ",
  "key6": "4Lz3Wh5t7iaEM1f42vE4m1q3M14vSArVMmq7mJvT3br5HF3HEkZKVPCUnLXQc9Pa4yBMxdcPF17yax9HmD27Njnd",
  "key7": "3iNQR77ysLKufoPYJ2Mw7a2Gizh9SGzWuy1q73eB139pWhQuxmKhW1oqGpZELXR6BtY3SJvAyLTKzDPo1EcV5Zkt",
  "key8": "2wemBtDJCuengSZygKh6yLgJ1285DQr6VJDCgvGM8LJAGrEnJmYkTw8RwAzpbw7WzzSp4jUMnhie3cAE9HwMCKok",
  "key9": "363oXn76oyy1ZUDSH5MdiyDZ1zoGGKzwS6CKSkkEsrWiUhcLJjSVHsBkd6CRK8HJTbJBd6htCxRRHCqoJXEtZmYi",
  "key10": "65emfcVFs7v7DgJUH6nMYfwPRx9sUc8wtiQA2tGQVYSY6kBXZgGuXLH38UZ2qkC3uJFFWgstk1doJRSvC51E2AvC",
  "key11": "3xxwfjvwYiCkw36BpjfhDN6adb8ifvpVRzPk7mEKJ6kXChh9QrBznFDtmBLoTmF6HAUW7J5ZJPKK5jgbmMHnNFpN",
  "key12": "2Ph5DaNHBWTQxz929Rj8EHd82hK5j9yJHoRD2oTGXjGbw1XQxwDaf933MA34StdyegSqDvytzfCyGGDvfFSgqZpy",
  "key13": "2ftypymktXxkimZhBBwir2JqpErtqKvFBJmSeQSKG8SLTDZugkZUwurgtxVkPi6cP6YnJe5meosh3hJZHiQKgrj1",
  "key14": "2VWSxS4hCyWYFAtYnW3d9bznFLTQTcTzcxvPKX2RS1roW4RmF6L4c19bHAVezrGJ4Ju6wDDbJTiTpiiWaeQptkP6",
  "key15": "51gB8KN6WiGTcstQXadW3xAwPdtsfTChH18BGb6sRoGckdwaavKDmaHTEtVRzd9iqSX3HNEyFvHw2zKFUMP8dfrM",
  "key16": "5aTktU49axPhayRnGg96bTGj5cG6nscyk8n5hUAqBz1iDivZbFWReXS4Ev6Yx39GwZEQeadG25FUtAu8YQKAViDW",
  "key17": "2vNWrLaqrkxnp1GV8NRmxzPnetbkXL3gJin6hkyM4u9SL4x4UueK7fBT5aqzf6EQeoDvrCaNMEBihntBXFycYRTo",
  "key18": "2V1uQeaLSgd1Z2ZhZkXPvCCd7KHKfj3SU9c3pmb9fDwLdFETeUwVHTdJv1yXStZCgMTuAQ2NQnC7Wt9tsYBAiS3m",
  "key19": "HxKmEtKggyK6KEfB5oAcWHyj2FYiaHM37aoRKBy6tQ4GJbcKbwgrByHxxrq9Q4z72xURTRmvxKaiNpHKPzVGcd3",
  "key20": "3fknmzf2G6BHkLnTZG2D1ScHfhFVkCwExc8UC5GZJSuGYDVcMiU9UkUjGcp9HTDgvQ7Aj3e4s3CkuLeMPvbLbVy",
  "key21": "5SXNMJTRzsb7qDEoEwvTWJPonbms1863uTkUx9t41XtD1kVJXPrQRHWy72zy39Zi2faukD8fsdLA656ocwPXcNbU",
  "key22": "2aNhFbfCPkjjFRJ3KpqX45FfNTjF6J3nvrDrxfS9hvd5Jvye7ZT2LZd7QwfRytbvRkkwBZZQrmGZgDmRXUt7wqAB",
  "key23": "4mjRAjDh8bHzCR7XFFF33TfaPvuK47QfKUxhcfg2wSDvznjDah6Jmg1Ksfc2qYpPEfqG5gAqmRT94sD69c6U9AiF",
  "key24": "3n9vUHRyKJ6tF6YR2eYaJB9ocAZZQ5mGcK94ys2aZmFZoXVF39iLbFHQAjgF2D4mPmVSbqvh1h1RizJ5dsNMAyxB",
  "key25": "4Fg14jXXy37fgu3dTaEZAb8CD8aoQT9K9CAdRnSSWsx3X7vfpv9CJQXhatwJfHn1qiu9bsCHDPCtnH6G9sfP9Ppv",
  "key26": "3BU2hpzxeJJekR768QczLQMDU41XciNHNB6etxY1XAvNRzA122zT1Fg4NPtLWYb3V7765Hn6HSB3nZLk4j5PFcsB",
  "key27": "27LWDrvoCETUHLTH2X6k8GTeX41A7anyEiXySp9hxnbAqNZe3PPdpHdW4WTKzzeKeuPFdtcx7DRXdizW951Tw8Na",
  "key28": "4ZBnEFWa4xumfUMEYhcvbgcBZEpYE1czFFqcwbKSKsYS5NTquNvYEDmRXnNfk6bEzdgqVYRsQmG6sRDzHoFEq7Z4",
  "key29": "T7FKjhWcQaGrGiBqEFvKUTmfyNB8vVVWT1d9q8rDTSMeWregMnMrKhJZ5upH8zktJCj8c8jALxgVN3U4CEhqsRW",
  "key30": "4R68JthkzoQeAacrWGLumtRNwyCYbN2KW6roZeQpmfjmhRzXjYvUDAxX6UydreLH3eMzkgx9Qfcx27ZwFgcFgVeA",
  "key31": "3dr8jV5cB5qKec17NXcehJ1G8wPpibDZpYKkCKxBy7kngbdmubdWN2WbpuKkhhRCuq384YA6vxsJWD21XB4hagyL",
  "key32": "3gf7d4ikPWdHpSm79HWS2QV41FCZPVg7QhCc5jEtMhrCGzGLCPE5WmQg3s3433a7MKNyYmCcJsfFKRPxsUGqLnHn",
  "key33": "rp6Y42LDLTk9VNskCsUUHkjgna8CzXrHhAuJyt2pgGLhENrbGKEfSBdc4F4BJnpcnAGXCbsVTs6g4RuNbXioXZ2"
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
