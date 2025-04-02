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
    "qXc8chWNS7yVqhYi2GicQrdnzaYRgeuUf3MqAv6eMUUJRxeQrDfNGBJoBLktjEU2h4PZP2SX52WGjczeoYYZHVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qiV9McebwhVfakSqyNw9sWHHew5xp628eXaANpxHZJnQYie8TAYD8EGzFTVLRM6xeDr8JYXfhdpRhhdmT6kphFY",
  "key1": "73xsQmvxREw72rMSzvx73EDZvnGsBHht3xHTFNCe871WfbY87bxQPNToSYCA8QBuYv2uf5cBdJxGT5H7crYUahm",
  "key2": "3gfQwuzcph5BapZboWS25dZwQvZKQrALn4XS1rk9Nvjnv9dUuGJ9kSwgWxoGvg1rkRZZmwyyJVkRgnxwKne3wLcu",
  "key3": "5zMCZVbaE3bs9WtwnDmLzBy4swVvbND4K2LPhUzGsuNRkQatgFHtu39HRtmThxnNP2Tqn58J2fEe3hEEnoQFf3Js",
  "key4": "5EFAoisa2HeTnHoJ8oW5txNZAAn4VQWuTCZMbwjiv5CNvHPNgPUpVG424NtjFXkPQGRqEHPDASJYYMTaXpkL6th3",
  "key5": "597Es9NNDZGXtwgxxn4WcGLpURNP3bZYySgzUYLjxSBLb6iW7DjB17fuTTUL9usrv9WTtSp4VikK5mvYpGhx6Aee",
  "key6": "5uU8vgmUkYBUa5SXnC3REFW4vMdx6corDmJ6xcxg4qimUGkEPNmXXoCaaSnsXk27FtZX3SQ1Gqjf4pph9pPLGQLP",
  "key7": "57wx1JHx1xJQsoZ3Bm5vA1jWVbSa7ZpgkTQ55XrpECcjW2UiVF5q2xghzgK6qM1uUm782j8A2VRJhrXDx8y8AT8q",
  "key8": "2pnwUNqb9XJjGR6zLWBUXeWtGPWRor1s4NB46rBTfDzW67BpkFuNQcqcHZ7hNhZcX8LBjxJzrNSiwzftfRVVMXCy",
  "key9": "41g9vaBGRH6ovREimvSLe9LwfxRU4JaC6tMBJdU8v8hgw5pBDkrXF8My76PJ4V96LBCfAGBSpDefDfgK2BsSamhA",
  "key10": "4d1BrejDGhpKrHgEXehKmYW4F5XGr9MVnKECFH72Vk48KwSsqFmYMNWZ3LJGUfWJao9mVaski1aLCdYUAAQaq9oo",
  "key11": "3U5iGHaB5Qyyw9x4Gu2DEfydK1BWkEKDvzTMuLXFFihoFrsbJgJbAh2msfp3nw5V7jeohtPcM6d41MCCK69dxeL6",
  "key12": "3TZu9D2wPJYUHXfxD5gQHKFToVV3HMpQdcqpFV28mkcBSf6BfSpxLcmF5VFRKAXiUQM9DzfiUXni1eR2AGdxF6vr",
  "key13": "5HhzYi7qWgvvyWxceYnmHaf9ncHh9UJxNPCYMW2DXZU5bCw5zuY3EbBvKGGYu4CKpxgqFcELkvVGPEqpE3EHFs4E",
  "key14": "4XQwtLQx9J3rd7G64nftMfr3jtq4EkBDDk5XYVxG2LCyJpiuLH68VzCMU8kgfqEFQT2fmMELPv63YkfvXmXkHkwC",
  "key15": "42PuewpHLmjTrfD1Zh76EEMEGLcvvFtdYcgVHssQ9RdPki8yv1xrQf2HnbZBirgYkQox9eBjQmorMFSLEyz4DzYc",
  "key16": "4qFtFstSfuDzLceVy7r8f7AfFtK9Fz1ZCtv7QK6qhjuja6kXMTpxV2Zs7n2Mrke6uX8ZjwTZgVGRR6DTuqnYani4",
  "key17": "4d6zWikbLiwAF3WX9gHtyaVzctnkha3GgzdYsTwbjjqTV4t8iBHCBjG7YqBjstYfZ3SJRGHjm9S5UNY14eRwUkfv",
  "key18": "3aP9Mfm98SAi3gSKys7WHAv2xSMDcVTGq8cskCHfur7acGjJeii2iQkr8Fdy14DJ3noUKzsQj5TJyMFVwzh8rCPP",
  "key19": "4f2WBwsZFFN9miHU7RHW4vFLzWgNVPDzHwYdarPtzG1TAKZPZHdvghBMTcDmkKupSk13FY11WBAAHXP3tcrfVRGP",
  "key20": "4CM5t2Be1ykwoiDjCjiLff8i5rKVnFeQeuyq4riyauwe8PsCGuh6EKBqWbS1CwzPiHTHzDFiTRNQJLVTs28ff62f",
  "key21": "3sBYrES4xdKUZvfDkJw556K4xEhaLANq8MBsFyWgP8T87oWhNEPV7c5E1mTdPX2Qq9UR8fwasuom4u4yf4RaJBeX",
  "key22": "5RUxz1EytKXfrB3RA253t8HWfibpMbDznkEsmqwNbywKZ5RefFUBpnFVCjfVHd8qxB1MqQKdJ4kuDNG2EqxcwFcs",
  "key23": "54cmer23zk6t4Aj5GtbmzP9SpcKjt4BsVYkucudCFxJL6q1N2n5SJMLKJfTzthwWGNZRVVbQSrB95fgngda5QsyE",
  "key24": "2BWPUer3TgcxxRRHSEEHZVSGFd41dnCeAsZipp93qXuk4FqvxijAUPJWQcKWywQEHCcsJcka4TLjSj1g6MkS5vKF",
  "key25": "4sqJacdDp18sjkLKsZE7SjVbYvHZkXzzwyoUjuL15V2LKe92FKM5UFaCqQHB6JpaChkMVTC4dYrjVqJe8oWagU3H",
  "key26": "4bTPUr5QV4f6w8xHYU7akGvzLVMzxVtsxXqHRnU5TrQZKhXUXVRY2GKd3xGKqieqtPFLBVvWce8osLBEeJnTEkN7",
  "key27": "4r7tZyCzzmpPJZPUBAUAgSXEmheoGdvHsrmAanVAxQTSDNWBopN7MKrnGtLzuyA4LVvUbiV8JGubhf5arh6MiSZ6",
  "key28": "2hNB1YaHYgR1rYR16MWgRyAwb7oWUzki6AfP1TtMcjyd7KtJsfUHdbtXNjTi3uqoSwRt9bAxkByUXXh229g2Yrz2",
  "key29": "5qo8JVjgLPYpdYKgWiaW7RwstNTui4LRCnTFzZpBaocAvAJdaDAsJpUfV7oENJgioDAsYH2uBrefbXhMhggLkHB9",
  "key30": "GiJnaFpFWdynvHCXM9caoPkTyMnNL9nEiJ1CY2uBMLjDCtwv1ruVu6kw3dgdtZ1bBS1VsFooZhENg4bTL55QJng",
  "key31": "5NZ56oX5x1gkZwErPvj8As3gNi99E3G4a8bErfhTquRDF9yPMLFG5C3b9wcaBTjyXRcdoC3Rw8GrzRb7pbr7NhHb",
  "key32": "4KaPcmYTaZ29SDWCFsZQ4gMXAhcEVspu9y8v3JaJXedtEQ99WfzczMMY2CsaQvZuwB7WbQknHpXb1scYFevofufj",
  "key33": "2pSZUV1xDMtvmZJK88K8tMbTVJDcyUuyibJAdtemJNQASD5vLq4k7eBUGXuqyGEJCwZXfKJX5ZG5Xgtp8Pbfxyda",
  "key34": "4fYXT6ZGJiPCFKivpBdwqf1e8PykokEodmGFTYSFX9BygsNqBMnA3fCwVg3CWSGwy2o74gBq7R4mUXcB7Ci7PX4Y",
  "key35": "4qbaKAS9srtA1cXxjzeBxuX5HGYjBeSKR2oi6gnfRe7AKsEX9x9Bqz9zzdzqrPniZr81YXsu22M7w58UoM4P8cTm",
  "key36": "4rkPaCbxrytbeTn1Qmbccd9g8Jrmgu9WDcavbf3soJsA5zVUyuUHY7q5XQ2nkyxekCgQP2WS8Q9u6NAUdDC7fz1P",
  "key37": "3SwJuRuCQTFn88LoWufx258cqVnJLdkWDUUFrCqVkwc5uLC22h9Rf1NXLkc6d2qiiWxqvqDHDSPHuzwJiR9VHtER",
  "key38": "wW51qhSreZvharx6w2cyJav7467E26vPR7i5N8KrPpWcM5W5762C5jf9EMBgGjDn92zA9S7MEHDpwYJomhnn16C"
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
