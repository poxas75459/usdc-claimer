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
    "46xi6difYkbF7W5XV4ZsMgYkwJLmPZ8aFXVwWzt1SFsT5ei44xiLEFHzpszGL7DEiZkdyetxGRFVqMaaUs8275aQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCpvXa3SutkqMs2qdGTYTHSgq8hAFYn3ASCVQ9xK2fVJZJ43xpey6JxofRXLbyqhREChoDUHcLrXfAkgzhrBiMp",
  "key1": "28T1vgukDYbhePnDeDb1fP9xGoYGRmx9DJFo6arBSiRqMD2w7qH3XcCtJgaPYbxzptPcRTungpBWiFMxzgkM7wnM",
  "key2": "4x3dhXnhiXXvUn98Ucpt2q5DwAs1JuyTHs9wcPhLhrxneQjQB8UxALW2kuDyBHh5RuHcNMy7LSfPnKRsLgL5mpTR",
  "key3": "4aVNqSkMxMdpWpxZEaTQ5W3AqTP2gjMvKmSDcyEG7SCnKZRmM8YdsqSxhfbgLa8sfpLm43fokeUX8yCFv6uNUtPV",
  "key4": "t6HAwbVEhZEzZCv3NumvqAXpWSqtiAybGVsdaDgZiC5fh446B75inU9KMBNsqnQq8wNFEhDJbM8jcj1QA5PE1Dg",
  "key5": "5UE6DCgKrHQL9S8gFnVDvZiJKEuo2cwnf2dPaDDQggnyDPLgm2mSJfzGj3UqzHEVC1YPt6svtMjzgUV3NT2hm9YG",
  "key6": "4S7CeEUvhq4uNtwi6HyGj8wTFoYTHVrbtMqtxs4kHYDb1A2nFsjzAXyHNVxnXphJuGwk2gPC9yVryeBoxciwh9fT",
  "key7": "49YTcra9rkM5pUVP7arbcbpdiwXFHJEWv4RPNYiL3pyLskk73HPoU7sn5RWM9bK2PzpZyuudUTbGszcuYuBq6Gvd",
  "key8": "3YiJhUNuTjJ9kqHovvT9ex5kSfRmcHCZynXcUCx54Epkr8xjsDembhPz4yVpZTPSVkmxEnoVmQPSiWrvnYFeQyaX",
  "key9": "4TkeoqWD43iRaB5c3v9Z2s8X75AV2kQ53SZ2uSCfpJVsbJwjYisAsYHY6FcKE2U11MmsCD5CnqC3k9AZLxEvnQj1",
  "key10": "4ikct46x8E2EpVRGf4CWEioyu3ftyRwyhMkLqsn631oS4Z9BsPAf8kahUCK1Widsgr4XLR1WzWh8s7ba2Pyp6Tnz",
  "key11": "2hb5ZmGAwmp7ZGAMzddpQJTb8NUTW7MKZkMw4UyMWvyMnAgu8g3yFqp7VxAaxMhUJwDVHAB5Yhp5EgS2C2KLzMVH",
  "key12": "35aPueeiXJwL2yY9maJnFH22Hm25U4jZuvVmgWM8YL7d9P6frFdpCK3h8gCuytZWVLQ4xT162KBM5P4EVx6PymAT",
  "key13": "GUf5A93bc8pmhZ8CWpKi1XCX9VVJXwXVmVGWLP5MERVpRjxx2ALjgMvL8v7vWDcudrspfXAsKdnHfQVHgDAw5YB",
  "key14": "sG7iMEENFPx2ELPauJptx7AABe5NF6EnrmVhnWExiTUPPTBQXGzdabtTC3DHyj2pmBHjuNcqrHXTeSGXCX67F2G",
  "key15": "43fmr38WfKNFFLUoH2uwKo3GjGMNKBo3MvGSD6Fb1sdRbeHiV3bFrAKRnxqMvHTUGGyn1hQYmYhQBt459DMWB7Jj",
  "key16": "63qgedHn5p32sFm4eM6X1rYAQiyiweWf1Yf9oTQHJas5sSYbg5vpLAwU3QbDm92m3JM5qNNzUHew3NPWJDQozHcV",
  "key17": "4fQa2jFcAtjKcJTEAjcMkR8YAX9oU1Yg7U9y6ZheYRTb3Mn6AjHQAxNkzfny63SuXD9bfRo8wgoCyp9kppDu7CWR",
  "key18": "2n9VLErV9umV8fCeyZMapKeJg78bfbeAt7NUTfLFhYwxB1bk33S2BSW7b8i9DtvxSHq1Tq7yxCRDU8NXMYVPtfQx",
  "key19": "5TmziaVxkgaTrZ2y3fSzjZsWLtLQK87aoECnjZVXiCZPJDnzQWa4BVjyYX2aJM25bnt9FhMYJz4bxbcdCjqBnFyT",
  "key20": "2KHoeHcndBD42PUq1TLdb5yBTNHDK2XffnTFMSm3qvAjKjc3gab4f7hcjA3H2cENyjtwCEimZe86H6k6Bhw7Kfkg",
  "key21": "KSNkttJDP4TPswzhKNRXThMbNEMUhrEjTMhes6USG2ZEDVLQjhAuYEPYA4FypNaLfLLzrkzYfVB7GXCd7DVzVUE",
  "key22": "3p6hG6GgTBuf12CekTeBbqJDvCRhZG5tKmE8MEgBxsJiv3py786XGyqvu7tvqKK3MU9xLByWyRwrdhJ4dBiJRN4a",
  "key23": "4xAgWAV6Fy1GqRmsK4ZAwwrUbdMUxUaz5S91rYNCeK7ETFqgRYbpm2fovUwi1K97mkLZEEHyNbQ7LQcZycbzAuR4",
  "key24": "5yKTo9qRZuwrbYdX2r4XNbVgPpL8KqEiu38bjbyGuGYgHGwKNiXC9vY5bLNzqCJtou7NDCGfmdiY4ZLWEDrhXpmh",
  "key25": "5Hi56KG8P6tjVqJW8pp2VTMAtNZZKX4b1NyozS49wrYa2eWd7Ry41ATchUArfswukiYTCqyzTdvvugJ8ApZh9w9G",
  "key26": "52hS66hYv2JD1rZNwbRnUcLgFGHnJwSGRhgcTWMLwy7M4L1Rd9dr9NjqHn6NeXt5r6WHNxfQ85ugakVbtANn9JBk",
  "key27": "47Un3SaS59w3fNJ92rjWhJQ38WvvvvLwFKRxPmZER4jdDsvd1E2uwDF2uyYHCbZGaGuS68e4FTbiphdysKGkgYYs",
  "key28": "3CHEoCHh6nRCMRq5xi6PBvJ2yEccxFpSsgJb1yMyFjXus3RubePah5k2fvpPPaLE8Fke4gMJLcsUWHCYAbB75m9r",
  "key29": "2eYFh1dLk5qc3qiyjk8EG9WNRxh9wpZsShbFNUuSHN5tS7ZSmsVRc9aKYvhWvkTxmxRkuUYeupcrjUsMBB53u8bJ",
  "key30": "3F1G9J4y2ENLyssCJZbAVixn4g1ypJEa11sbJW21APmUeaY4v7PGNhiUwW1yRUaEw7eCRgwHjkv3wqhkpJyqUFv3",
  "key31": "689XeH2e9vtwNJUjM7a2WreZM1yst6sbhnFH4KyaDR9s3g9Q6EXrg8GRCuhvENETx7yHgHHwVtb3LLKtrhY8Nit",
  "key32": "5Vezpnf1AmHZ3dXoyDrwVMGwCMzr5WQNxHmBCMuZPsERjhAbJDPEM1X8bvoyWzu53cvnTtxYdVeqwYXWFd5aTJSc",
  "key33": "bhYzXKTSWXfGYRRDMyDUmitf6aJM1g5xTyHEKfJh1qkPG9XzSxYAVZiDNXXw1jAmmBqE7idLshS4Y3RjH5NaN1Z",
  "key34": "2TYcAUiabTyr1rixyJQ8jHBtSn6DA8BrjfsqUjEaMaTsNt6Z8uhURkF61dxRvu9hahxBjvkmWuqKyoQNmwBZeA1Y",
  "key35": "3fktUQ3TT1rvpdbpi9U163uvsfpyAXryKL5M31j49fTVTejb2UkExtCvVQU2Qos8oF9pN6jfhWmZnJ9HDFKec3oe"
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
