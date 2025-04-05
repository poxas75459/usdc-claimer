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
    "WXxE1F2F8HtZefQeLyiLBTfbpiHTAXDfcgYwqzbuyze87Wy28jJKYeCPUZEi4DdgPbGJH1agvbZfj6SLJeMMzQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGx1szf6HedDNuTPnRnTBS1iw737TPEed5kABJpv6xs34uzwzCZyAfcvB64YSZ7s9FvX77qGUfmZKKt1XAUzvG3",
  "key1": "3Tkrs6pYCeK6rASNGPAyNGijQcRrHSyVY3kr9LzqJm3DEiUmfjzrPdttwfZf9QoxzL1E7qQhDQ8XtVH5rhnmhA4v",
  "key2": "4Aco8gD8HAAXy5Lg1ZNN1jeCmVwk38hjmxBXYWXaPoULVkMxcF6ue8RwMBzz3k6Ci1gCAsMjr8SKpUVY9s6dE7mi",
  "key3": "4UfoDw7wkDpwrVK3aKU3zAkKgcvgjqatLgwuhJHLacfGnywR6aaTgZ49TEUTyP9NF6vYgKxsZbSUY2BZibbRX7Hs",
  "key4": "1HcHAGe8qzj4KGMdacqGTSywQmi4CdRC6KqHBJ643PKNvzYeoVnDXt6WdbK4wvkTJEhc3PQs9SweUcroTkPkSDc",
  "key5": "2XMNnyLr4yQF3NotvDVP2m81fKcbxQjHftiPffZ972YJuXqVv8yLcFnH28ecCoSRQsNsXPGZPju7rvfQZtGFfP3M",
  "key6": "5R6NGLQ49HBctBEWYaNcde8pzyaxmxn8WcvX6fQTwhMjwfa9eDg3vw1gRUureVNQfSFHC2CNyFZwT8QzNDLCmAVb",
  "key7": "4REogK4dAZmZkWPxwifkuRtwJU8b5xfL2SpwifsV3XB7dr5BzPcgzbGRC57tsersadLWyeuWqTbWscbi5WjTx5ou",
  "key8": "6fFTHNgXG8EEuWVT7MwoJfK2qKQy1UfWqdJVsS3gRwE9YgyM8jy6uPDgkZYGc9jFedMc1p9KaiFrWutp15bZ9ac",
  "key9": "EnJaHKNbn2skytW4jnUcCQgcoVFzK4amBWwvAJVR9LQxmcj9pYgpNrFgTEWUhRTteeSUQ5qP1cqKzrRF3ZRBGMd",
  "key10": "5zFpnmEnUcpRZ1Nt18C6LaKqtd1tAhaMxB3HThUUDCTshH9c3V46cgBde5LGpjg6ZoGfn8vvD2CRqjmzNQvN7kRC",
  "key11": "3eWW2pxvyqNf3erQYtiUo7HEpRqGDz4fUaBmLnEMTaDAaSHXEwZEYVg5Zktx2eNM4fkqJtixYW792dA5Rtqmqpgw",
  "key12": "5ny5FepMSzu2qhmbqnMfn4zTDTXar9xf8xYvkyvQaGSQ2wrdsHJjqpL9jYSyHgaLyrk1mVEnND7mCB3uV1mxwCHC",
  "key13": "2fH8se8iSFdKUyD2Qi6pVNt6kThGQyR3LnvnjcBPYcbGeha5LcKWctPzLR7FDrJaM2eMeEWAxtjftgtWDGQbyyZL",
  "key14": "27eoqReRHGXBTRBdNM2NLAE8NrhDA1rN3Rj1inHpmFKHw9KCsai4EKhxcLDqsVctCYLauo3Qa5TMBYzA1qYmUHLQ",
  "key15": "43iCcryvTN7N717AKiP29hLdV9oJdd2dFvv6ggnRrrxE2pSsTE6kHrb3oF6W6A1vf9gPyJaT8HqoDXcPrDwYJd2J",
  "key16": "4kogbtjS5mhsE9Q3oQtva1v9u2YD9f3vDK4vMsc8GGLLdxQ1WCsdqqbbkJp9aYnwzJb3Bcyv28xXP2giSKJEcJAZ",
  "key17": "2N5Ei5wqCr2UZrV23PXn1L8WTgRzaH1i8sqv8zAUWzbsGDSfD8ztJ7UJfoujcToWtJthLTFg82jAJXwiUwkewxJd",
  "key18": "V1B6KyUCUCMx1r1KWrzkpGFfV729qQFFqhjkEkFJAqW41DLYtx5n4n5zk5ut6qsdsskptJjDKiqqGBizCUziPsJ",
  "key19": "4EKAGypbuLRwBjjV2XZRDeVgvVbu5a7A17wHjUJ1DQmiSVoMw9Stzgv4ybYtj6aZzVqW4G3gNDBdPCXENmimmF3c",
  "key20": "5REjnRaMfrNnZBHCKkHWdQhALNJAyjnF92PQM8V38hccx2Yv1PSnMPhR9KCvwtQm7Ev7qLFQaXbLTV5VkSFwbHqq",
  "key21": "QkM3XCGoh67nfczk6kZ6P1LGRDLRE6hNVM94YvquihK5cjxrDHAgtoAgdhGZSn87H59imNn6dMzmpmgnp13rPNQ",
  "key22": "2hqWA9kiRBVyC3qqQY8TKPHNhMLZqCG34URZJZ3Yd4kRGo2K6Ae2XuS97J421aRBY2dR9EF2SqkX9o5ZZvRTDVJ9",
  "key23": "4JVtcgvM56Aj1TJeBHh7rGoCZUe4kj2wgT3mXpFMJWqekbebQV8T7FB1GDkQRZbSmhQm4x2BfVxRcGhALFv9U6o3",
  "key24": "5D2FHSJWnTmSLwLgB6w7AgxWeMTs2zfTJJzicaoT7FqVWWjRusaJBLauWQWrzRu1SShcf9zhAtqurgafxajGwrKi",
  "key25": "43fqMEKWrnnYVrzZyudPSvQabBrmZWPTFwYuZ1gWL6Y4U3zXhdQwwr1qvStGBJTzQyJL4stKruDPzCGdG4KTR157",
  "key26": "59PqxdsqQZ679KtXT87Xrr8bnXpTs32tttoZCg5U42N79udi7uTKFbYcJFDRA9HHcPNxPqurM66tBpA9DqYkN5WB",
  "key27": "hdDCsiLLBjvjvd2f692FjzZdZ9tEgzHXjAc9JSJptcXbbmGhWcyk6LqHPSGJpUZCYKZYoXEYEoZMd8dYUU8bbYE",
  "key28": "5qy7SQhe1ms6H41igpWgPXupRTw7EfroRMU3JqeJYH62YZD6pckoh8zm6LbtAThFTvAEsCRcDBhaTMdQisAKPa2Y",
  "key29": "3t2xYZUpaVuU8iRvwhYd7EDbUSPp2B7Zr5h3C3hNvSG4XhPbEZRfsQsYjhrQnzNRPvfp9cpRFjMh7gv2WaNp3TKC",
  "key30": "3DkcUPiwNp51GUPozPinnjjFVSPYqEBDA5DRmkcC21dUBLbYH3dWgNxUR6VFpD35XH3DzooTN5wmJmTZSpwXgi1v",
  "key31": "5TaSHFPgLX5fv7NUuan3PSgbSw4tK3jD1jSSdLwo9Ki2Axczv94T9tgnbt8p3piJiZvRwHeZibTZ92y98S3J1d1w",
  "key32": "2x6Y7nMd9MTvp4z3fW1B3CDzx1Wc9C6ux1ipBJd9M5EcHnnsWKZ5qA9tnA7qLPwSbAApzwnRpzyeCjF5Ebo1fKfh",
  "key33": "31cMQEytGg1F8FSTeg2SGe2KioeYPQSXERAkFjyPyFUzVV6HNy1UabwvvEYbyRF6JoCekNb5xpHVBNAXUNt9Bvcn",
  "key34": "rYk9jns7LnzWvfXQ7FWGtUkiNxFWxSm9FdpeY7mFgMP3Vsz8BFUvgBACCy2cmZxWV56VZ3yk1ZWTqDTYiSWweka",
  "key35": "WaGskL2SwJLgpDe6YAb7DGkbdEYGVoN3Vv4inM1D7fxXDzAwY5gJKpudYAzkZpUJehS61XjdFb1kM8AatWyd8US"
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
