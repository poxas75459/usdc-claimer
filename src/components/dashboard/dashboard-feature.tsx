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
    "3FqoDyqnTCPVGik4WDrjfPoFNs5j5bBy3mvrz9cD7BSMvnRYdSgnyvwvE2RkkYVZ1MTiCCS5MNc3PTbnGZQxZcK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zepzq7c2RzNqGmQd4q7YerLiCFy1Hio8Ai44goMqfkHr2HX9onGDmCQnRxs9r7qFqShKHwtAzyMQfMDpJTvz96",
  "key1": "oVo4Rc4d74fhXyFJh6NKEM1gQHDpguq2E9PzyV977yJ7buzxqLR5abjCUBPRH9KcbPRmsQudvVbtfmzFuThF93o",
  "key2": "2PtR85cACB5VrJFoP3BCR6JmFn1CkDuF2Z7gNSjA1NzLTdK5oUCwg3dYSCkArPHagU6RjeDEgjfKhreWowwud23J",
  "key3": "44CTo3JFNF4BPj7Xn7xRJBduA1uAmsgYaAjeYn1zmRX1ZsrzPsdASjUNj6eWPgyvsGG4wkpok6yetttgWPNLjhsq",
  "key4": "4dvqgzMq7GMa1Hht42c2S1b9Wrcb1Db1RV5v3UtQz7M7D4o3nKb4frRrNKJkznofW3U3EeEsxaV6vtXMsbCpmtdV",
  "key5": "3QtfpF3C4ESpMef1ZFffHe2NGgfhf5iPwnryYRqvGaWsHbS29s7EPsxhq1sjHurVGWjoy2MPo59LvoHrcSXykNau",
  "key6": "2moh6m3Ma2i4SgpY7kYAsQU3NWZ19N5Co4MP4dz3jATPq4ydc29TANTT896i156umPNRT3FHj7Xbvu81xvzA1a85",
  "key7": "58P78MLWm7qg5rXdPrFUX27ESkbd6eXLCwdBbGhhDcnbBfw5JKpLoLfQtgeCaA1hW25cKPfVdQKxwQT7kHVqnkTb",
  "key8": "2LvArFffXKvfKQi3zPWTdxuna4wXF5RPqEANXuDHDaQV9Sqwv5WXE2NmjWy31MoPkRTCH7gExg42FNhFpGU5sUyE",
  "key9": "5SbGq4n91J4ZNCUZpxMoWVA5oB7akok11dj871mcS46CoJuhyLfAvWAt7BvfQWtM2yL78qwcbsst6AZKUmdBAipV",
  "key10": "3fDg4oZM7kmAaaoCGn4dMcQqvxdw81THiuioSchrjdMfkY83gVHqCDSwFqPVaTuGNTEZr4dShab2wNrREmu3hU3Z",
  "key11": "48xcE1bLhToa4dB3BNGJ7yezJ5S1hMAFmRshoFwYGYxeNEgqeNwVbxELXZVf1FJjiGarSjso6p2cr87mdboYcRgH",
  "key12": "5UNjAbfRbKgfjmFNmtzW2LUa42jmcrcwEFHctRyeqUrDBXWewhmAa2q9Tr7hWGhjbTkBHKR5aGrcBWkKvUEbcBMQ",
  "key13": "2nSUHQ7i7oW441PPhU7a4qGUoa2jjnSaNdzzmEiq21Nn8p6q31vVDdGM8UMXp3wnLiKDBgJurSTpdqdTJpitbN2U",
  "key14": "2fwWrbrAYZzNpn2nB9UkzG46uDdE5CW8yuEYchH9d8D79rDVVgWFoFQGHdP5g2kaM42vFkyuXJVEnEN4YKRMfVeS",
  "key15": "4YTR8rrFrM8DkRtPVtUvbChHMzCJR8M2j5FmCro89Fmqta81KzWkHicPMUBzpiDVHr9qFfV6uyv4bL4QQu2NJVdM",
  "key16": "5GLxgtR8VHDc9fwwau2q1bnqUpaW6fMmryNVPVM4pmVj3HaXDkD9EMjq8njhNjRskK7qweycnj3yQsoCQNCzTKNe",
  "key17": "5qkMi1Gw7Hu8uXbYnVHD7Yx1Lbe4enF5XDXX9LvGfWZjbnHjdFUoFAXUgj1cSRc9cTj1VCnJ4YQPWDJ1uge8S84P",
  "key18": "5KxxSkrdd66AsfKjRFCHpjgCQHbVYMVbUNy4rqFfh865aP1A6YMJAUEjLxpZJKZcewAFR7KDHeJ4SGJVrD74T1zK",
  "key19": "66CCqjgBdmrDrFzwgSw5fUcyNsXupSNbziz8uL7RhyNyYPjzQec3kSjeFAbJuKK4AxQXees2QGpfK768cLReaVdd",
  "key20": "2yuNAY897T9xdvEhZ5eM3Yrkxfi9vm4xHiBtWWMXRcgBKv3nU8sQsPbm1FW3nFT4V4U29xFW9qaZEMF5eq19c5n",
  "key21": "3LqY6duTTvnFRVufmh3sVCb61XUvriagY1FMmurwSpADd5L4G2wG4E7P2JRxEMrPw9osytbL2K5uV8f8MJvz37oo",
  "key22": "hVXK484L8gcbPzyVDSdEnRuyizup8qQmBQiuk2FyPDe1N5aJR3CH8CLYz55nuimdbKgWGnu8DHXajVm6wGfC2B7",
  "key23": "5dYx5Ymfg52DE6M6pQsxhjJ39mgBx9Qux99HUZkDmzsxndWfMwgHqCiTv7htKbH84Nb1zQ5qRc8s8WcYaLK6GeXz",
  "key24": "yFrFGfjZzpZdRka9EdmppfayoNdV8vZhtRyyfceS2dXkgyrbg3Q1kG1NbmCUYuJjB2b7RWGn1rNKUSRnvtzb5Jp",
  "key25": "5bzPsK2f9ghUKFKjkLvRtVTriJRVFjH5RAnyejXtq3LyZ6KtqsA5ZjczarBYNjPGMBQmertymBQ5utjtJXwYaijr",
  "key26": "4yWTDKGHZwM8viLwsezGgw4dnnx83rzxSNNW3wXBxkmfyW3rj32gCHpBjzZ3UyujgTqEexyKkhx11LLUZE1Dpc4C",
  "key27": "2bGw4ptMx8FiyzBA37tBNDrhDPkHAzLt6jGda7tRYf4nwuyohV6S9YEZtC5gi1PpfLfMWU1fNdfewMjkuozSHRDt",
  "key28": "eBPc7QBbYPgsNVfTMyPwAakwfocb2fnLXiQ41vEPT4foqAwZRqkNkmPAajESG53CY6QWoCa687hHZVQjbZn17KM",
  "key29": "ijDuSqsjkDDqheT9wkx1oWrgyPJQ9fk9hEW87X239gY73FLHndMHXs9tj95wYZ3uXSqRdVmM1gPReJcgfSXRQAq",
  "key30": "wa8iVnJXzh1FxZKk31y3uvKTKQP5uWDrCKxKwtcqdfLz3vzc4BrHdBbvTbdnv4D9qU1FXjvx54GTydJVFBxkpak",
  "key31": "5EX4HGUKKgj8smho2sthjXTm4km1mmWZD1szdx7QL86qAhUQ7vPbFAezBqDUdbWQfQapWrEguxojuMMNQW1wVmy1"
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
