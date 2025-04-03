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
    "5D1xURsnWXYruuH6vRKm7KJmYzdi5eja1SyScBpJcPZAct3b5PnSJHK1cp8WarW641Rbdnd8Lz7L6WsJytSXzpsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNq3DtrCjkWWBzRGzErjjwtdd8P2vm99WMAfwisqQbSimYYS3CX51v2pmmDm4dMkAJV7TVocKCtNo568ypzbbDJ",
  "key1": "BHi7Ft8iKQMbuPapJebiwUN42wfM8XPyorjsqAP9p7pbQcBZSnNDK8idNxvxSdLFDr4mnFSvM7nYb74GiqQ9c5s",
  "key2": "37RvX1yFnd3ezCwLmaev2cUiKhEvDMvj2iqLff6Gti5XxMMwX8QPEM1BujF4f5snvwdTbYbV6piKmoAaytYspvZ8",
  "key3": "4P659UuEqUpTdBkR1tv2FSyxP9fuSw42QubkwfSrWHUmnJe1m4Pfv4ZYPiXkrz2t5WzTd1VbbVHvUMUGPZKDSgNA",
  "key4": "53TBYFcjBEDP2tEnug17JVu2nkPzDDULykmSpDtpZGkTjYEUau5zGXEm7882qiXWvc3RLKnBox2Q5eFAyeYUtXhx",
  "key5": "2YjPGjtWu5u4KQH4cz9NQnuk7fTw2u1RdoKRE3ysTtjbFmzBySptUzx24eyYEjgYUFh9w1tbGsJGMiVLkoCyja3r",
  "key6": "3TNrCwwJA6AWKay2g7MegkhLmz6KkfTNnsvPEh4sndKXNj2FFHB7Gw861uKUDQBzvPUuTCHNZ5gEVyrqh5TyxMF8",
  "key7": "4SmTFwHwPN6eoLo5cRPve9bfMAF9N3a4qxV2HFe8yjXnAfoiqffWFZxweJbv4ApNrL1yT6bNYBFbJptwmfNTAbrc",
  "key8": "3gR3AKCDnxe2DqNdhWpkPHwG2zEwYEmCtsC1HTbFKPM2MKpxzi2KgTz4UAcPTJUCy3GiFDwLRQWgV1CzpQMmYU1g",
  "key9": "4z2UruTtPPJd5CN8rfkvyBmoVBhtUd5yCQHD2uJwWV1ZkKKSqSGGskymTFq9ACfWzWX1YCek3GWQRNS7DdGj9n1k",
  "key10": "5yUvLjhDXKm7GByk1Fp6VyQ2tTWAsj54eL6c3x343mF4LP364s3r32UNUK77DLhxt7QQRvYGbEkxfY7iq8Mzp8W3",
  "key11": "48GRavZRfRVC7EA1JhpYjKWNVow4ML8LVXVyq9SZSJffdPEgkB3rxn7PwSsUqtoA4UEDyKG3RMd9dg73xeiLKPQu",
  "key12": "6GBABST3xNR2hoTRZ1o3KAxjjfqALfRAzypjq5mR6EiKSBUztxZBMrFuVmoKMof6ozYjQCD4ozdbWdAL4uvedGA",
  "key13": "56eMN5ZxDJGncrJ6DJmYmVKVrVbrPupj813zrEU8Vvpuc4UDeXkZY8T3C83YfhqwX3tpTcWg8vG6Y8SfedQ6haxW",
  "key14": "22N9bg5JZCME1mfyimJnofDRXiCj8RmWvZtteP3cgam1uFkGSbhmpirHeLPVxoW5ofENxtDTQsfiwCiPqaK7BxGH",
  "key15": "27PwBUJWydzHsJJyxwRP7MGfNRBTr88VLkRmLZseEDUftyLLvax7PEeqNryUnouCc8APghuWUqeSepHWtVdVPYB7",
  "key16": "3mhom7hPU1HMRV55mS9DWzEGmXB9ps7mewsBof22RiGP4A2hDhZXp6fUfaxAZuhde8Tn3UCRpj4DU9qqGQUanNDe",
  "key17": "3AuwaGXUTwakQ32TYPUPxLW4zxy8U4VHuThF3yMknfYD8wV45FncY3rV3JEx3b9jUdSmsxTXZokyhLsH7eRw7hg2",
  "key18": "3FDGMdQMtGpaEzQs57kEmai4FDj3j6AThz8SGkQaCmCewWu4g2ifg7KnTuwQkFkHhpjys9bJ4rV7vbYvWvxCQrMt",
  "key19": "52QY3FkM9chpYc2EbGyZ1rYwoeKxBRorGNsccki9DZP8cZT9VbLXfwDyNirH38Gr3DDfqdLJZtZPMgtWa7cf5851",
  "key20": "5PTjfVM9zFos12zW8SCFifVwShNQkayGwoc3pMQ1xVBb4bYiA5vJ9tZT44LUTNQAMcsgG3hhFTSgQ6gjardVcCZY",
  "key21": "5PMhHT7HNSv8bYNC3SJBGZEH1NwNqHTsGT9fsMMdyqM72wj78ZJv8jUvqVnSMJtVfeoJKcsi92JmAvntR4Kdssqr",
  "key22": "5kwdasgG19Ura4yarSyMhVZdmqT6L1zEFuvy2pg4kqSZPNoDAnNoBzD158Hu6FsShdzXSmefgvzfd3AkukH5QnQP",
  "key23": "2L9b169kwJXgnGn72P41N26GV42p6Dymqwz5iKqs6YW5JMgq7QPYqsUgLyS66ZRykr6bXWkA4zXLvnmnXNUG7P1w",
  "key24": "4dGgGMRLy94xQsKowW3w2bF45q6LdAembhtNGVFCQgTSFtP8RWh7cR7t7cBMxB94B8nYMpUrTYU3acnPeDydwrwn",
  "key25": "5iE8WLgjLPT67XdieRg1LZGCkcNLJVkFL92qUxB2zUQ5N9kXxVCHbrfvfQbanYFmfw4S5B8A7cFx9SfdzeL83ERR",
  "key26": "4HVxHiNvSU4dR9Aj857nkuBnzB7fRTZMowmy7wH9ems4oYdCr1ZPaFgR89XRDsyHighFSDPp1mBRjBcysKJgvwrk",
  "key27": "5Y6JJGLuipH8SADy7F9BJcfAnQL5amit3zVeKusPhiv6o8YoFGEPMfvzchJoNrph8uQ7zrsKz8F8qcbdW9P97PoE",
  "key28": "4EJBYkMPw3mT28oVab4p7U3Jr79YzSSiBgr1m7JCNw6YP5bgntaaBy7e5bRgMJPCf4YbSh9CkZjw2ErV2rebJwXk",
  "key29": "2hYTRhS6jUvTZk1WHfkrreNot7ZUbLudG3j5utFbKNwUDVRn8bhRw2WANxq3uw3XwZAsUnpuPNVkEzP9zjEHCwyz",
  "key30": "4wPa7bb9FBRa5KtBp3xvkJ7fPye3A9F3YpxA2sfZVQnfUBXjLUCJ9vqPJdV51pX59kmSP58c8YNtQT11ZxWuqe5n",
  "key31": "4u1GKpAvWDQMJ94ofRJk2E26JYuqnQYGsteijGgbSYXovfHxCPC9YeQi6w4yKvXjjctzkRdcKhxiUspoPmW1bWCP",
  "key32": "25U87t9LN88pjGw5CpDMFdvRNscq5MqcwwbMYbKppS2jTBVqRNUgZbJete47wq53ghNVdVxHff43d7XtzChC2DUp",
  "key33": "4kHBvuECiDoxPQunErxcaTRACeFT4onkD6KYDComgCG9h3KVCnBTpLKhPXqaWWF5dksRCke3Py6Vyz4MnBWngTaz",
  "key34": "5AJwbyf7XnvBbYNLk66rWrpTA4GFub4dJX8b4CiHoC4rrte68nHgMVrkinR2m2rfmLy58rd3LZinC2dq4m1gWzs",
  "key35": "5g6zxM6PZQo6rJQy8cJicjsMa1a2SCp75RfRZKYvusQCTeWc4yrnko9Ghv9hyUmz3ToEwGW64Gjg8xBZfEP73kkq",
  "key36": "2HLPFdEZYFZRRP1QEHn6HfoSPtTLVxkigGvhQNeN3BK2FBPfmELbDP4oGp2E6R5rJp8xUf31LEb8QcGNRve6fmkS"
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
