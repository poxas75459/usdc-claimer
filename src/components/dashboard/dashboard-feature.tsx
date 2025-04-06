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
    "3D4hY5NyJqeKNEvDtEeT1mtCPQmfqceAL4oqa3DDFv5EJnn7FdtxND6iVPF7nVUQRfbBpZFgPF58rmwAC563NSMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSiueKr6dHpPvGAa38hCqBKdpvSVtwZTbyzsQhip3R6fNoA7BBjuXcDFUUE8s7zri56kABQGrbjNYGMbyKjsTfF",
  "key1": "62TQHpw7mHQTTh16AtFY28Jg7mNQ6sgVTLCab2uAuyrpCNFz5xuakpnZQpGJsUTUAToMZ8v1SYdEMXWcjJ1QeHAA",
  "key2": "54F7mWtwXojjvWoUF6EQLBu8c27XEha7vrLwLYC8mwisuXqXWW5wx9ACCxBhe8hsC3L7kFp8hBUzdYA9e8pbiUme",
  "key3": "21HoBw9QXFFE1RD6SxvQVBFvHrzYwD9JihF7CfJ7WXir5DuYdhqB3zSztdAAKTYUvaJp4XPRYQTZtbGnfL4jWcJR",
  "key4": "3vaS53nYmQf26WdViN12UQqNvsGwVdJotMzxcfNEYqtEFaUxK64mfNKaY7ZnK3mxqXUQNfUbsYkvjWjsLBNxGawi",
  "key5": "1FBQKL5RjUVdE6jAxtM8wuniS8eXxTsehoazQWoZ47sZX5wX7kqmEcERAmVdwiXRdTZzCKs2dMjUxhQChR8mHXy",
  "key6": "T3onG1ua4PfrUgSnLsxXwW8NFp2tbXDSadvR3BRBGChY6MkauqCRKt5wNDLBqZ1Nug1NxXbKLe6hcJme8dWX7ho",
  "key7": "2iBUVfKaXRBzzvY2LVDJWTg2PjKYJnPMzsJ5L519uUWWscWPzTm7cRApYZXT42C6BHdyCMSd14rxft5Tx46kon8V",
  "key8": "3BSo6B65DxJuLqT2opXPgNji6PDCAXxGH7qvVuke7FBVckbeDKcJ7KdGJRwobT4rwvfggYcvcX83NGm5VyZTYJhs",
  "key9": "59k7Yz4VKTrgNPyDKcJNoKaSVsVYVbKFSteQm1oKGubfSZLjKoet9xGJ2iqeC2XhUJuJWAg1jTRAT1duEqyqzQuU",
  "key10": "ym2Mn57g31K1ZadNYJQqxT5ckae2oZug4ZKz8YNrL5GD64gczFNHzTqR6f511LSVn5AiFcKY7JmusuiDHtndyoW",
  "key11": "ZAZjUirh5VwdHmkyFiShExLYAzCH35k4jcWMQGdsGpPeTjgcxwzjSF5ifQHzXvBfYkjkY9wS8MTsarjAonrc4oB",
  "key12": "Mu2VtcApJAQh3kLecaeG8NkpeXnGumemiGKYjHKMpFkfTVGU3i7R7onVk7HbNXFtdx8cNKocm1FGs4z7gM7jQAM",
  "key13": "97hjUjfoNYUpSNi3NUvjinj5Dv6wyfs5VrkV3NWLdpRRMsHrMuDFYNgzKYbAsMqPBsr9Jeb8Ztg6jnaNH2GZKzT",
  "key14": "3jVtLXg9CdS3UMn7jUZVxist7G3ErgtGAADwPsri141aasvnZvwrWKaWmoRd2MyRB792gFkjDT37QdGbCkBqnGmX",
  "key15": "39dFpj3zCUeaSvVv8bS1tSmKT97bFe6Zho488ReNcRjFSCPAsbWvCdqn4ky6kMZMS7bzitFPKg2EZiszLi8Q62NL",
  "key16": "2QQJB3mjjooqpACmvqy9ftXPNjfGxm1kE6aQyugAHWAqBdQiCF7bHx9Uh853VfKEXwCv72NpjcRbSSd6H2AuCW88",
  "key17": "5r96R7zNbiD9fEZmYL6Q2uQMs5PSFTyWsi93aYFtb8UDHoBhh9Zk2JK9LAB2CPaiA6DxiagYYcbd4wGLLjCqwWCE",
  "key18": "3PkjUDBi5foS3hjt8qYxF7Fs4cDGqv8L2THkbMzmxh7qqJwtcjUNwkRZgMdkKmUNcyj1NHSv9Z4zuKQSEouJQ7Y",
  "key19": "nsG1yERnjs4H3585BAsNTcMGErrWm9XmixefwUT16ca7QAqfHfG4gFBPVPpUdw5UbRhxx93rT17DQFnk1F6Lo3Z",
  "key20": "4kQdzw77yGgUR7KtHUhTLxksHMDtKS318KCW9BK3YW2DL7B6QGrpE2JUsu5QRg1r5Y7NgWSWroDHuKkijAcLVSVA",
  "key21": "xx2tJ4CA7sMQ5KTwQyw1iLwm4ztxDaBtYcujLeu2JQAiY56iDf3KArTPjwE2LUvgUbr2Vtowt3sAhZ5QosBrfMC",
  "key22": "2ZdyLnjKSoQ6xejzjwq6NXEAec5dALaxLskMq9w156qQTXX8Rw4S7zbcteg11uzK839WBcT6yg9d9aTSNZz4KgkV",
  "key23": "3Rzc6qRzD54msCvxDaqreyccSSw1zWYS35SszyvLWLAaYHcr9REDVrTp23G3EDL3ompT9PGNzvYYrBfhrC4ynzPX",
  "key24": "2frePtr4k5zSR8sSLWSga315DgpULfxAYHv3VnJ9kGdXkiiLXvtwGr9UpiztHJCMV1WTgLQj7RTcfMRP4LW841do",
  "key25": "5Vm6xrX9MNDA5pgh4znzCHAMPzqYrZRJTUNW6o5gPSFzgz6BaudKjMsG92CjjnYgVGcbSRQNhbFu3TLjfJAHpPFs",
  "key26": "125gtA2vLvLVrRwoMSHZxWsqogwR2inX4uCEy1626qp3FVJL8fjvF4syg5o48McFcWrTFTJhh5F2zurb3PazR8EG",
  "key27": "Lra1XFNJaEwJzuq8PeYfPCmn7bjsryWwsPFctdxrMdFHbK9nKrQWtHKhxUZ7zperWKRkebYV9V2oSszrUbj13sc",
  "key28": "5Hasw98tXrqADgGT13wHnHuYKUt15VaMYTB3XWef8mNEpsV1yQAi3dBBJ9ecaHtWJZrF1JLmhjjYxxR4mSQkSjy2",
  "key29": "6JzHxg8NTSvyFQxMUK4cjgTjAYUi47yFJXVDgTMt8Z7CFRbjjs4BZYwxnnW7LMr8fw745vtivtLN9kxzcLKSdqq",
  "key30": "664Ar4a3KfEJd4kBZPMmwxxZ7wi5XiLHLVpkYxLYy1NKVhkQRNRG7m3pANf1Yyhq2eGWKf1y5msa5C6J5hsCfhLa",
  "key31": "2iZxxkho4FyKzgZsxibLjfU6JeQT98Q9MoCV8VM5KQYK6hEU9f7KLmtiT74kzJRNQEMph91ZU5DGhx8raTwyYvyD",
  "key32": "2xxEScXc2mdFSLUYAxUtTZCVARQPgM4MQNcRDJqTWntLjB87Yfjtbj2z85grHVTaQfC6yr17vbRnQ2datfdXb49M",
  "key33": "5bFzLC1FVcw8fXZPSsFDtVKPVwKxQTEu9Cdg1V3AF62pRMDpP46SyCSvqC73NecZaDAkxmnWQu1wMtEz9wasCcJP",
  "key34": "41mFkZNcWaVHNux5zHW6sYWiZiLxf7XkWLHx4j8ghXnYKpqy1fACDRBPcQnLFvBVX1uZ2XQxTjaCAyHkSJGkEZe3",
  "key35": "2YcUXajFjS8AxHSGirEFhtiWBcXSm6YJnxwEjcp9K4CupPmE4GgF31cnDmeHejemQDJwtHBFvvu4wEp7npdbHWnq",
  "key36": "2D9pKCd5GTwa8eNoVG1AyjgGZwRYwdoW6sMdUS8M2K5kawozjFfu9oWHEYKA1AuYgDcqTQx6uTRTDHfYcD7cxbvT",
  "key37": "45apGsKy2d4fS6ouJRmUYeAqzpAk1aqurA1GHYQUthqrNVqHWy5U8zjFUYyQ8XAVHQqW9afcdb7LoSTxmusxX3ta",
  "key38": "2qaidpANcHwKpDVZKphwMGC4MjD8AaxWgchhFDk6yjcRSZwBMrJFbPUWTx9nSU4ju2AX7SmKHVi2uc29LhQ83MUX",
  "key39": "5dLT7ixB3Xnmiek4pmHKqmyBkm8bS4h2b49yXrXrdfwdmbsf7YNEurMpb9Nf8cLJMNQQnJ6h2a6vv75LAPC4Ye7J",
  "key40": "Q4Wdy6RgvNykTRF8cF6fYvdmahoQw2kgVCute3unvktyNdcD7QyfV3YqeW1tVZH9dro45hqjKXKsmL9sxVe3tXr",
  "key41": "WJhiAzjpFNu2KnUCaZmg6xN4pAVjyT4G7H4iLGLa7NH2owFRFonLAznYKDU5pWQBMoaXDH9DrU5eX2qrEcYi1Js",
  "key42": "32xCqjHM3yU1VCq72dCgeFdyNBWmWe7Wm2aLSWq9U8gy7wLV3UmbJxD9niNypPEJsxRojJFUW7sB9ByxZ2UQzS11"
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
