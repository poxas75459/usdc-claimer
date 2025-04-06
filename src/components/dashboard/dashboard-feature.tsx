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
    "37S8JoETowbgGS3ZDcAFtnVHo5fogwHMqQsiuEtsB56rKqDjuFzRUwsZZKczHxM5hiJGqrZK4gF8MKq6x7GxH9fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6cE9hC9Ew7LHk3cnayFfHoFREpVcAZ4UKeHm9VvYc3Tkx1F2QnDZhak7Z2ANuRRXgYkN3Tr1YpP3A8qeiBeP8f",
  "key1": "4LZF1szUaq7cp2BMm7pDj5yJQwN9obKmFrVbJqFWNtVwj2Y7S3usCb1LP5aYhNSkLiSsrKDDkYNqSQsu3NByK4MH",
  "key2": "2y37zStBmpJy1sf1rH7gRyvs3TfN4fBt1BaroX1gfFN8SZiHreSoW4Dox81iWJhTiwHwFAopSkWSUFiSM7HQDjVq",
  "key3": "3N2vTFDQ7AeRbjbj5dE7ocEN8YQHmkx6NUnaDn5HGyeFUWSghFNPDBuYcdWKbrTVpBWBS4LNSheHMJYG3tgNHU5R",
  "key4": "4cAKxhg6ruiGbtBFapmJrinCXYLgMPakFuLtfBLwPGjG9QBdy2QDHQYk1ZoqxdYXapeEeEHggBPp1W72BR29XkyL",
  "key5": "2AicNnzYdQxyqahFkSpULWWU6FNewb8emHQRD9YPyAHGCiLAf4rHAiw3iGpqKrGqasdxRZa1Z1sdvJxHnVHe8yBi",
  "key6": "4UM3NNy4mFF7JZgqwC4vvp58DpULwYM1jjLuG4qfNwSskhPSKCAydwPgY3CmdFpj6drM8SpTkmiQSGnKJgG2ewvm",
  "key7": "4bLMmC4wrhUDxGqzZYDqtXKCb5yCAtcSF1pW98zmAv56SyW2RRZig2sStU5TxbMQ3ohiZ82NTdCZeTB7v4jyrn3F",
  "key8": "4nJmvtYWTADcaN1oFAY9Ahq7tJzvB7icqAf9cSwwSSSMF8or5dLHMsbABq3DbpWvo4AwZ4SfBGJPLnKBskDLzdyW",
  "key9": "67RS5YDWZyNof3J6JpXpxFZ6oKvvSyMiQFqiMiy653osH2kKvTwQ1dFK8iKbfpeUCdq8vzBJkqf9jWLGa8sMnz7e",
  "key10": "3Dak8pureGDeBYzwXYPYo1TgVmYsrX2pHJbmnHYfTUg9v73TEKPsPLMpoBMsEDVe2aqquQc8b9MKBw1uUPXQQtE6",
  "key11": "3vLpzYzcD2cASx8Fxf3pPcdJEdZsXiyxYnm7J8PVCzwyss7uS29CGxbAVUaiBNDAVcaC69jmgfkRyf6YgPCNSYHE",
  "key12": "36Jsg8SFec5h9A6zbXj5MNCFWhYdiQP7Wci4DGVntyiLgFAda6BMHKJ7L4Lq3jjxeQTCxhLRNmvoi3PZYYFAeGhE",
  "key13": "5LDtGw1FNsCddnkQg3L2geqTCsSFr8M5awzj4dSAVzPnJ1e8A33VMriVk3jUoJ3u2YBEZEb4FPB4ycgmf3B4UStV",
  "key14": "3y4izmVzY3debXEyVdNMTFaLgvxhYGcTghZEjpWNerG9u9szgF5RRBtc4vLTK2R68HMS7UPsERfjm59R4j8Jf536",
  "key15": "3bmTuJd4Hxv4zy7xUQuokVm8qAEhB9yqfaYzemHhcU6QVbp51k9Ynbrwo8sWBX7iKdfBe2EQyE2jYdzVu4FZcdod",
  "key16": "65vqgdKeZU55Utnf881TDF1q3Em5bo7RFAX4W5uqAGyuqbLALSnEKzw6dtYD9py3UeGoQKE6JTVZNEcyGgW5SXu4",
  "key17": "26uiLPj4WvXSSv1gURtz1NoWNdFyaksJToqssx6qvz82XEiMzMkNXUUP1wRot9u2x61jyGU9haLQEfFpx6eGkK5A",
  "key18": "4tg4YBrESPUWsMvXzA187ss2Ywt2nwvhg6JzwoWhxtcBcH8uHeWjekR8KbDG1KbJjnJgCn6RGZrCcRBEP8fj5HvS",
  "key19": "2WTGFYPMxHaApaJmxorvKf3hHJkhw5AzuzVtajzp9hWQekwfXSAtuShEXvmitummq3MANSfZ93vhUuGW8RkzY6VW",
  "key20": "3ePj419HCCjeUChJoi1Apw2ZumZFMkGYpWQfXRVWynX9G9dxjX9jThuRsu29GnchKde2hxJXgRrbMo2YjaqpMb3f",
  "key21": "5TP9T9UAnxgNgeDX14VHoqrPG2QfCnS28C8jWSy1oAegPnxSEVpTjGEJrRVYsmvaKKKyQMCfmWx18xHG3YgEHQ6B",
  "key22": "2rvgaLJPYvNf5GWx3xMf9YUoFwHeisTHWm8iHjxALyozwPM8DJaPhNU8167RAFmeMgv2CKfKRUR8Cnzg68cubtBU",
  "key23": "YckHpxKJZF3bSnMQP4Gs3oJHvz4PCYtzucW71owp2gTB92B55xMf1eomGbggnvdAViwxPQ6tGEfeVuccX9mHVhQ",
  "key24": "4wtqkag5fQ3HawHnGd9eU9iFwH4J9ccaNPDmpZ6Fbjfzw4zKfMLMkwSyTgcrupDZBtXxRTrsfXqJXFj5tvjuZyTZ",
  "key25": "4Qy7a4hgSgzTKeZBYv9EY1hnmjQvkFvFwCVgfLQY6HfefZYzK5JWeY4CQ4A4PTgAcnoKfbSsmDRJpCT6p9duprUP",
  "key26": "jcWcEHA8Gs9pxigUsSHPftye9ZnycTrMuXpLRARzxrCegRWwg57C29aTJHaDmhHudEz4fQS832JbK2Y6gZDZJ9f",
  "key27": "31vhmj2oXpdXngAbMxAmTj68vmKoeDjaJ4WdtB6oEehxxzhLjeHZrjZrhbPGPz7VibqsHxBKGNCvzstw1MQ2QWwF",
  "key28": "62fVYaF4yrqwVs1XBVFiSgRxaMTbQ9rhDNGeiec2Jx7j3kdrcgKbTRK2yNpqKStQpoFBqj5LN2mTChvctUtpYnLD",
  "key29": "2gkDpWGeiT3xxD3zqh9Bv5SCtvrKZ4zVWBtwGsi7i5T4WFyuha7TKjDHASK81PE4pEy6VBGEP82cKmAzRXdnvcEb",
  "key30": "2XSiztnTT3jXkKnQzs1RR7YRpnCzoP4BJSEowZpqwUKGKUxjW6ogkUHvkUyixCnYSwi9DpLD8KLRhx59ZSSL9Jp4",
  "key31": "4MFM2nU2ySgGFiNqqrTjazRbmCtxtKGubcBKq2ZLDzDRc2N29DYmt6j6GD7jkBa4vSHzLnKsCGZw9S6bHBJoxVpa",
  "key32": "ZFSC2XkNwfxVsE1LJnKcTL7LefnnjoB6VETXbTG2gtFK26NfsadsnD5jy1ZS3kB7uPTUR1KSv6RWBrf3zx8f4sm",
  "key33": "43pERfi3s8K6BG9dQuLYXgr6xakMejDctDGv8egK35Y6vmqitJsEkPDbCkzWpeD6mJQfVMi2bXR3jDM7wimgqewZ",
  "key34": "64aV5J7mQbYGLCGwdaKBLzcGgCBMVo4GjYB3qFCKUgsiTdK1DuVsb5NUVsyx1Y2tFZasoyGc1jYPzpebdDAEi4mn",
  "key35": "81uK8Pkjx7ztokdbcrcVNCEMPFS3B1bWueRoPigPSFX8pyCYPgkjaV1cMY445WSLwSgzQ9TuL5PAFNqND7TBKQL",
  "key36": "bgF42WCmyXBCPF4ke85uLLYnUKTB7BWr5ijTWLwN4E5ttnhf2hfJRhUWeqerN88MKBt8udp4SPnyTPQWAFJ585o",
  "key37": "SR6uLgKzLv4s75UwD4DEhQSkAY91jjrRnywvbsrshEaPveQdtGgyBoSgNE91taAaStcAFXzFgX4GnVvrJN6Jo8f",
  "key38": "4yzcNK4rDrG7J7K1twfjp9LB1b8bTncyWT8hTnKR2ygJEdpkDEGcobqpXAPA5EvD6sHVWBAKeMbXkfgtesZUuYPs",
  "key39": "27qzgGx4XPzwf7812wudfcn4nUg75Y8HdtTAeZUvJqcbu2RQHfX9vV887D1R7ck6a5KTYySjnW4TmbmVoSWy6YPA",
  "key40": "3G78Frmdqh45wJEts5vvfoPNuuxz37kxaV5rty6ut7etjX9XJDLvrPMHg8ndcLCivgHWy62osaMaPt826cnz7gLq"
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
