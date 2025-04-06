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
    "3N9mg5PkLVp8yQU5FRW1Pd3ZgcC1WquEkonBg4T6UyiLCVezMgoG8e7seQCsTF8ssdVKPM8gvbruBDcSJwCkJKXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31B2Vntr18VmKZHqdZBnN9JCFqbVSL9jS841Q99B539FLU7ByEyA2EnPPyn3ajeFnQM6b2yzvkwmJMjPpzSA81YH",
  "key1": "3mFGEXMxBEDcm3rPLKiWTEsP8MbnFqaP81q6h9FjZf1kh8Gd3SN9FX7MFrbu6H7UNrprFqrN7d8Ko1UfWeLt8DuC",
  "key2": "2vKYc9WNd73xqa3MV9G6GTzYrCGoHjVKVx4kud2uWW7Z2pKnNkXLoAjUZN7xBU29LfrvPLGxYJ82iXuS5eqj3tHZ",
  "key3": "3htvGi9GHaEV9MbeiwongCBk77DqXhdnWi3oDYW38VwuY15gYiPYA4gz8LKmD458xQChTNMwNG1UtvidCBryn2Bk",
  "key4": "3Jpv2vLuGxtxJnHTV5encjZUZijbEZxLK8ZYLxf1EdUZahx6mEZXp2Qj1yNakMBWuQaRCApuwn9sN6Qg2M9FUUBe",
  "key5": "ThqbcrE6merWZEaxLye6G9JXFtXhM1CQgxJwxcys3PEdvXN7FrNFsk8krvoipyg8dpWfcL18by9grFXAUKJshCD",
  "key6": "4576NhQzdFyuCtvpwDUgYenxW8TTcH9RGJQvBWzBPZdSjv3TaJYFFvcarVRpSTPxvDdNLRgcLjBhqNs72VzYqqYZ",
  "key7": "3AUHAFeKzkB99xKMzJiXcGShjSGGKJ6EK84ezZdMZ6WDbYrijAzEr6GHNzP5XnkmeCisj4NUu7vfoR1cwskhZQrA",
  "key8": "4j1MxCxh9U1thv2MAZaHP5LAYoRQ2BkDuqvk5TeGjH9L1fQ2WA4MLafh1DvhVysjaJpZpU5ePhNN3qPtp7C86fWo",
  "key9": "5gjwhjJ9qAPmqvs31RmH9TNm8bwUWijfExnGfk5m3C36TzACutoDYVjJcHuL6JwLVvUsQbgYDBSzkL16u8Gz58n1",
  "key10": "53QThx58etMsB2HHD8fQebFgxr83LgFHQ2RR1z6Si66w6vWPhrcHQhtCzUhRAtA4KxUqBEGDWyfqJ1BiMKNk1tAM",
  "key11": "2jWG2HHzmBJpBqiZH9EBVVWQUDJTjQ8DZ62BMNZyuXREGZMbVs3ThgJdepsosxFVyQrawUzeoGPY6wpP5LjWWpYA",
  "key12": "33xmENK8Uv7C52AXB1rfDGykLLCmTZY6DCEWgzHvBkHsrBUC3MU9UiWMGZBp5QL3je3EXKdUdQ1AtvwFYzczVtf8",
  "key13": "4TkinbYUamen1PibVqrsXiUwSQN6kM8uTvhNYPaxYRXgL7A4bTa5hf9kMuojdATJdAH3dvrSePeiGxzd8WHv3jBQ",
  "key14": "ZaGTLkQka7gob8veYno9WNuTPgMaMAcz6u5DWn5bDZPDZ4kHrj8wMRMMw2qcgXFjjiUTfkiYwq1zUnzQFd6AxV1",
  "key15": "46moBzctbxFusxiXNMzJzvQTvW93YZK6i1cRdKfqzEufPgiKCxcPRyjAL8ojbbpDunaWXgKLC4pvvbG9KsjEDmXy",
  "key16": "22Wx3ZGLhZovastDsGSVPsisMP36sVDgkmbyf1on7ukth4SjZnxu1L29XYu15XdCkwW6bffuCq5qknbd618dnpea",
  "key17": "FZDQHtti2cBRm4PaUBC9JGHpyyi9ugtRjGBu8JhReFgAk6JCz4XT8AYcDzTUb16zzMvD9Kp9EZGrsfFm2ZqqCmL",
  "key18": "3Sj84fnb31DFJpCJDuXzV9RMns8SrMDgRDyp4Vew8SX1xoM8VebV5FJnXBGQKyGh3KJG7SsVLHaCcj7pwpShhuA6",
  "key19": "4pdSsnEPM1aXooVMuC6hCYU57RrQMu6Mf5P7C8tjZjP5hCNUVCewEu4JNYjDZbUJRWVVoZrR9tR2EQEXq9Sk912k",
  "key20": "upfamWuv15Lx3hSyrAAS1fN8a6Rg36yqpZW3spTjWdS2BP69RHuLJPUQnpXZuB7MGjRNMHM1f84Eky4p2KZnRfh",
  "key21": "5Wvtfba5kdzy5BVX5QsQdAhUGy3W19G8i6Dg22o8JZuQW4YwmwJMdgSLB8u56qF7KdqJzV3JDauqtLsgfB8EoJQm",
  "key22": "34KeLVrq79cH5KqQfUFJqomFQGiiAALBrYRJMkt1NGox6db9eVVdSueasrL9s3nk1iaNuf9nVc9kEqHFUvFMZpmT",
  "key23": "369c4EzeicTG3ZqxHoiSJPYEf2kdNZUvc8PLe5MESgVPomHMRcBrGWX2KXGwCxu3KMgWoRyT6pLZwT4ot4zxJryn",
  "key24": "38yeeZBC4sn3uKG65YFsVLUzXeeanjVcGL6KynfQ3iT6RetdsCz35LbVqJFpm98kBDHS9ipguiJBxXB6cMwBTKML",
  "key25": "3PpEiduvxawAs1L4kRFa2R7cmaeXSLUxK9kwgovRi8eGEpjYQRbm9Dp1M73pgUWQCJuF7FQP6fjQ34FFwkUNRtzm",
  "key26": "2Sfg4pDtgoL9cveB2rEfQsXsVq1oVRTkoGpUMz1SmkHKWbV4rkDTJRifcdvJAwRcZCu4e2pawAsLtcCUndTL141P",
  "key27": "bhXb6c2AcH6W7z2Sv4MELFoiBuAzfxNkan6Li1DXvcEDvp43o5o4n1DwnrFnCknHgLMkZGHWNT5GVHmxJfGLMM4",
  "key28": "ZeAwHYpCZCqvprchQtNahttNpe26T9eSg113865pQqpS1ZgxscTaCXkWrdZKsED6Ao26rDWyR8mMpnS2peW5grL",
  "key29": "BhpYcFkErU4erpGEcBqfdBoZDK1NbuXKnScwsPCk8UYDq7Sh4JKB1xU7VmauqMi8MrTYKLkgLrddvdYuM8zutYd",
  "key30": "sAbKFQywKS9USP4eyz7pq3UDTuPR9zQRVZpSG2i3hxAzi1Egw9EERosPTJSePsspSynwB7fF1D1YwkhKus2QJX3",
  "key31": "5P3M2YXy6Pz9wuraYixoCayuN5YcqUSxYmnfST68xFnDgZYD9Q77r1ahatWM7nAGx4U39iWsNoppCp8WTBf4oug8",
  "key32": "3Z63CRS2v2xkmN62gEDwkm2FNdgycvcaLWGJy9Gb876dvwKP4wTVb9siB4nZERg9uw5YVnZMzAM8dtdF7r9zAyF6",
  "key33": "4VWVWzHsuRqL2XeTnieCSckuRc1qdGvs5LbC8YykAwa8mufBzn6qK73acfna2XNxj4WzdHqbKkmUpxqLWAXCbM1w",
  "key34": "2iEmh8xYUPbgbvnDs2T1qkmM4Zwj3xpwVMeKbB7kG17GF3U8WKVRDm9Un2kcKnE2eDdxees7wtsiE3fL3SP6gnML",
  "key35": "5MiHeg4488baamDkVeE5bbwsgzQ1wPLcS74PGDYNoJK6d9ty3ra9m9z3oJh1mxYW7VfvdPJbuHEgaqZpAB7Rzscm"
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
