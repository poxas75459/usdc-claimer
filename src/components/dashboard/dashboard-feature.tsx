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
    "4sX5J2QGhQkDqTGYZcVLNariMR6eJCRJvrnVads4ukz9Vh5fBKWf8Uh94PhE5nR6CKTgF36ydVFBfdiaT98dYJGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iutRwL75p7KMhxy3Fvh7nRwdV53oa6kUrbUQjzXVMQ57zUAgKjbkHfw11KJiD9kH8uf1Xn642BtGJCQdToSsqyW",
  "key1": "5FK5H7jMvgAJkCkxQQ62YZ3m3SFfuFqkGkEXTiRJ7J8DMtTChEirY9mrbBdoYWatAyAgd6roougZ7gqU8VgypEjh",
  "key2": "FF5xP4f2dAUHo75qn4FGr6sPbV8Ec2pVxBDeP4YwFrvSJaw4yn3SkfMmpYM5jQn9j2z5PGtW6c7tFCxpGceD77d",
  "key3": "5YcB8sdg2eoUh8ANR8CDCiYSJDRyPJZK8QoJK4UUySuFiVRSFzVf3TjQsRBZo6ReEPicb4fSeuT36v26xAiKLxrN",
  "key4": "RrbVfNLxi9SXgftJwhw4A9DABEN4qiPDCBrL6psTHz2Fs9uM8nvC1zLyNFKHGwv6anBagAq8iDpFkrHBtfW8BPP",
  "key5": "27zZeF718qkstbGun61buFDpKPhcWB9JS7CB3kaPCaPcVthNz8HiZJJX1WnbZQtzjyxMRg1AeogK1KCrS6u7voQh",
  "key6": "5jV1cD9ZR8UCQ5TMawLJtWeyPz21wzQfkA9iuDstZvp7rKztoaU27x22f9CyCg3bFsvLvsnf2ZRmLr8YooWnc3Rm",
  "key7": "3PREMXGf7tjFsU3dnd1GK2th4ZuDeGiZQSfMn1mh6z4VPet55cJF2CXf1peA5TUcsmccLcMbhb9LhF1bGxKcttgJ",
  "key8": "2VgUhcwuyhve4PXZa6XhshKcPAjdp7NSws9gGHZC3girvYnXPvkKgvoJK8hDwPYYAy7kykjusLekRDxTVbZNvH96",
  "key9": "4yuhjdUSMjErum9BkhjnDD2xHidNxgkKizKfwDNwVuBkjksNbFhokWc92ctRWkSX1E636Kjn9ockZBvh7yMFYMCR",
  "key10": "ygx9SLH61LXXW4kX9WywR6Qr5GPteFfei21xgtEDd9e9rY9kPJQDSenRi5iv8D6BoCo9mqukccLRctCaMXjWcNh",
  "key11": "52AsMvUXNzjUj8L3kMPUEnNumjPvpMbMuDdLDA7gw7XUc9pDsQQwgG3Ebmkx8pMH3Ror3hrWZcn99uHYUeJAhGQt",
  "key12": "2c1vwUwCfSi9s151sJGg6bvmY5vHn4FUUuTmhnevHL5jsvwGBt6eHeoSugxQG93dmwkvcK4R8DwQBDmR2L5EtufA",
  "key13": "4s71XddW7s6gaCkGr88WjoZ59sCKPnTNaCZdtmV9Fxc7p4UahNLRXvPw34K6w6aqRz5uMHrJ2yQVR5Zu59zK4Pfh",
  "key14": "5fAXr3rm4wxdQ6pqPXWFrRwv8b25cFex5p4x5JYVPXN781mU1LNQLtCcXmNxxrbBZ4CegRpXKbtUAGZop8eiZmM3",
  "key15": "3ZbmBGs4oq4aU3AGrNixgSjAHGb6nAXnTE1ojp4PM1Qgd92G7gxGTrXScKCsGH59D9S8kNkrQqx7KH35uuiNWW9i",
  "key16": "9b84SAKmN7j82HvNZyRZAt8mWjNqUKByxxyKATiCEVTmFs2T5vF6qDSBJtmKJC4hRJxD4XLVnnU4Ai3jxpznaVG",
  "key17": "5GKJQGrLzxVQGNCksXBc1iD59tDgUwSN8yAgdZEndULRqDCjEn9LuHd8BeuWZ9U8KqBbc29A3ixd6EPktKNKchHe",
  "key18": "46dqe4jW4QKz4jRSYpWGwJfW15bBUvFWXHxQwamEDgfnsbMKcoqA81LAwB3w21koBVFnDhXbhntwezLKPvZdGZ7E",
  "key19": "5HhDUbxQFPs31JAPtxmWXP8YCk1C5V4APKbQUFj2aHHSiA6L5NUpe6JyTDszhAEC6243z84XozWQAGMuZzXqffHT",
  "key20": "5e4a96nzrvuMgRMNq4JCtXpXR4CfrJZegjjfrjDEGDkdonvtS9WK4hjXAi4WGoUVrE2Z18rT8KTiPyFwQXVT39Qo",
  "key21": "5HTKXPrw9gSMyGdvmEXKgb2mHbuwJkM68buhrrkGNL4MMtamPYxzvCwpi9o4cgSBMSt9PLRf5RaJeRFHzXFCVTs2",
  "key22": "hvuhtyoXauByL2E1ocbjFYd8PCYdr2i1Xc7vP4FmUzuQ73huY8KqZBpUZxmBhq8cV5LCzPSWP5Gi2t29wwJk82W",
  "key23": "4kTJT4u4nUZfLzNYbyzL49nGTozajoMrhHYJebeT8BZxPndniMkPTvZCVr8Dim1tLEQWjGGGzqCtgSScyG7P8WNE",
  "key24": "3BLscqRrXdWTw84QHrm39dibqA5a9vQ9ndHYFPud8F2J28vSTiYgiBtkeG3aA3c72gFv5EwTCCDSnSF7Pzj1wcAY",
  "key25": "5yFYcP2TzoTgMrmS3gTerV2W6BeNsujXEVCeRYkwbFdPBLmz7n1tvPXtnMYjeZi7YEm98jLLqQp8M4X5wxMQTaN4",
  "key26": "2gjebiEd33Fy4DF9o6aqNd9zaWKj464CN6XYrHXjju5Jbx52eod1qS5nR9RptvzF2Pk5GcDUNidviQ1W9EGUnNSv",
  "key27": "34j3a9uuqHPpbZAEM4WjjFHZRwqprxB3gwPvyYJUfA3mLQozYmorWqkPUyJu7wQiMTsmTLWz5V7dN9eZWYpUWxTx",
  "key28": "43dGTFH4BaEq2X9SohH9qrXqnNR5GWK3W8ayer9EPYnN2yLAGuXu85fwwTzfQM9h4qdmm3v4riSdcAjgQxX9caLJ",
  "key29": "2bUgpQUX5Un98c1TXrxg1GkV43dQiafApQHkew5SzYDbgs9duWyeqrGW2kuGnvV1CEXdNKUraPVz4P4Sv91bY9my",
  "key30": "2iC1YUdRpjsBYQmi9bLgKbffnTGs4XCAN91PLBD9MgXP5pR4zqYs9Smaqo5zoNw3aXVCEm525xQwwLgL7fZZC9pT",
  "key31": "3fvkFrn9v8ZPvnL7PHBK1e8KrdQCHpyt7iVC3uBezrgbC6h7a6YDMEMJ31GpD4uZay7kPMZPssnDqnu75yRQvm3",
  "key32": "3PyZegA1RFWXoH3eqGAPYp4eAG4BcoE3j3UMJkuLoLGVRnaB36JzpQiUaQ6d2kp5xdTfNvW9q4mWxivTSkRVzGcW",
  "key33": "3Gmtb8Q69M3sFZMKdPeiETqiwnAJ1gf67meeBaR9HXSJPwcJn4iK3hRzjJSJT4TjCmnPrHoTRvUaNooEdbUybq4m"
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
