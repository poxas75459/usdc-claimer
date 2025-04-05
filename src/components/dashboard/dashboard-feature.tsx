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
    "3n5NegTa7oKfVmz5ApLXN8Qjxbm8Tw4q7xT3A4op8pi3uDas763LR9BxVVUx7jyptNo59fJwhjTETT9KzJeY1111"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZAeYvJgvd7Evrwp2YhJa5ZEU9hunsrGUajkrAAnApNijJdpRwNGo7m784xWM23fHpK4SwTYuzmnCbUoFr9wRw46",
  "key1": "2aC8k6AFyD1MvSCRLo1egcArimFJqSCuhzmgCjtfekgPiQK8J47WZSnetddAVqC1pugiaezPQ5dnWJ2aMVmsBiuq",
  "key2": "43faSwGBwdMx3bVHjSW1rxgbhzPnCtqKdYKHnQGjMXVfhaYniq8zEasLdLJ9c62sTAKMVG3wZ7TKReuJUKbUksMv",
  "key3": "P7GqsrpL2RmowyfmSvjufjPw5pQDUWiwimqW5ckp6HV3RvtUVnXEbDmJnMgPDC6QLij81vnQQvKr1uqYfLnM7BQ",
  "key4": "2bYUandaygCoJAHPoxwiBHCyv8UP7dQg8EB7Y8Awf9VBgqb68xv4UijaaY3XczshNeHFUnGvWXAfJseN9tA2jHE8",
  "key5": "2cYdP9rKTtBDn2HYDJFQoxfVTge35aFpANBuj6AzTz4aH9FqeS4N6LGJBx4U81vrwMuEiSLXT4wBtj9ZS8TcZNHR",
  "key6": "2oVZPmSCcErvEej1XznFAFCYJCcdCiSWkhUtSrxxTrFCtqUFPVSNmB2C9otktKFYPB25dvqn97fh8WBkdsnP3SA4",
  "key7": "3EzTMXCSDNz1r5uYs81w4zTwKYL4xsAAjyce4Yv7ixFUSVrpKGBNMoFJKGEeZWfYPqamKnCEVRNU5BPukKnCyb8B",
  "key8": "D2oNW7rqDNoWacmCQKzhsBHnw8Y6TF1z6q91jkVFdRSTQiZeSfnEXdBBwnk56LK2oKuU1pH9KXh2ButVvkvvnrS",
  "key9": "3EfQ8sPXngTuZhmxZWp5Cv21r5mG6cmsSzBipbYRnz5fCJWJt8zrn29BVeoqwygpKzd8zEAK9foYn1x1JL1jKRJ4",
  "key10": "5gTwA3euW7oR4gj4ef5UjxasRS6Ckmjo7fQbYJmzWTD3SPvxWmxh71EwWLgQR5RyRA6mU6B3KSR9RKAwQyLNibDJ",
  "key11": "4AjXSsrEV2Bw3YyAqB46b1AEHLq9GZRH35Zi4Qjhx5eM3FT5U9ohYfWrptqEkB7dXvmuXXdWeiNQz9C296RTUxZa",
  "key12": "oQjEFCS6GjKiWaPdbgtRihN7mqmNWiheid2TqzkjkCEa29AgpJW8ZB7DhNwbWGBckCkDz9ukz8SG9qTgLMshz8E",
  "key13": "PxaGzxJNqhjiWZ3vEEQSgCbaqMX5WEGuQvR5zSvKYrt8do8vsj5GdK3cfYmbsThKzRU93obaTgCw1J8pySGrgzL",
  "key14": "PJLJuJ5BQ72EXUnaaL561StDCeMs1H25C3wWXRYzjf4LrjRtbdVFeRTe4PPjmJuy9QFnLdtgLzx2pvP1mReSnuy",
  "key15": "4EZiBVvBvcxbqdeVBCwhdRKhKHwH2pViQGAnV9fyNrqJbDu6iMJ1GFkeNFzQ1Bo3NdhPasQ5qtZCaNXZbjRFpWBR",
  "key16": "3J76QxRBrRzbHgeHUMpLLzX9GyqNaovQuBaKy3f5wiwjyhyxvMmznqY9HLcwc1uUbuTkA3oeBRrDQEZ14V71jExJ",
  "key17": "5sNgxkoUWKLQf6Tv9bT96kNUFGqLWjfDDCEp5xVHQg8F926EowEXirWPrkv7J9WxtnuJKyVePhZEbV8oWFJ136Ez",
  "key18": "4VqNaYHn6v2YVPLW7hAzSp41K3YXeHehJSFN4qabZtWFHde5QTwqwtrhu9G8d82rnLMJZiXNW3z9nYNnTDv4GrEb",
  "key19": "2BnxrVNLdaCXkmf1KZQZvCDM32iFGEQ1R2UAjPy7vgh5ZdCP7mEuSKdj4BNJYm4pub5K2qKsFgfouN8femVWQvFH",
  "key20": "5MXXvrkvYLR31uvpG9xCvvmJz9e3RVW3SeqBW9zowMDyWifbXNySJzPuZaL282sDbvzfrtKbKT1FwrnLWN3AKXvH",
  "key21": "3HMemMXheC8zed5WhDgK2GAbdU65NWoSM4t1e9PGp5oF9HEGVvVQiBgW5TCpcbEgQLHxDKGbEVHQBixY9pRB18P8",
  "key22": "KMb6PnVuvu3eosTuHweawzoeYDoU8ZiP49nGCTy8dM8paCdwgWQoo5yf4B5Bvts9RNQKPJMyMwmPk9tmxwLD5zP",
  "key23": "2Da9YMbvkc78VV4SokTYCVSJVgopcQ2v1ifmZgGzJS2VMnBiLBfNHoPj698S34qp97VUZJ9CxKPvxUTzajVuFWXR",
  "key24": "4nVzXzBxjsdbUvEV6ff1hMLysSQuTgheqz86udXuBVnmQGGTB7bPP9RbghAra9JPRfTWoDG6pucU6dwQjupU2WQt",
  "key25": "T2G6EAmHYrJ18QZ7hw4dVoxW3Q8YPbAKq96T4Qskv7bLRyvJ76MEGvDiGnmR7mBc7GuwY8p51NnLUvzPgELdbKz",
  "key26": "3hQ1HJKYfRkaw22gPJqsYJYw3SMQqB1nKbMjowM4s5UemSBLqnjkACNc5Gjze3bL5bSdiHr8J9bbsMjq2MLMqaDd",
  "key27": "4NdFQsK5ghTN6wovsPP7m12WHcXJ8mRtcU5kBTyZ53sv1Wtgaed6nksmdvCz7CXW7r5kSnntZJTkGTz399hegcnf",
  "key28": "486PQ24QwyfVGUU7iS7rBf7su9Hs6SXmDjwwsvhPQZRznhunBeJE4bmvjeSDBg4v8VLcQT9zHtuVzDvsm6wiRgZt",
  "key29": "29npTfwyDGrd1yyZWnG8A44nMW4iqiU7fz9Rud5s64MBodTbjHQLn8EVnvcGhqfFZkJeMe8YJmQr4Y1ifGLJpCXa",
  "key30": "4wPxTT2tpuvJR3tLibovnLLvMkud2qgVyToxHuojfehuimUgLjzxvNEZhYTdR2AV4ZFqWKXwYfoCaTtXoZU2rm2o",
  "key31": "4Xc3Q5m1vV5a4APGVsiUHcooE38cTZaWifZrHsaw2RbHAa6mnigR54MkozNivGvwxHSRo4nr4yp3WQKV6WbUoPR9",
  "key32": "4uEkbcZZrsMi4kPn8ddu5A1SES6BTcgG5p61x4Ko2GkCPGkSxg6FCLeiHZwUGa4ennmDXQBEyU8WAVhru2EyNSBv"
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
