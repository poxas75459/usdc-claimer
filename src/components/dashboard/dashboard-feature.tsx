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
    "5LVzcdyWUrtwBeCgYBPZvCBqxKUYhgPKFwg14uAmzGq5ETcUQAYiL3ksNCB2cQ8JVCb7H89M7oADD5oNNVayWFsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1CK6ABDfSm6hhQbLpfVxk3BX3yWa2fBrFKQthNGfDY1UEo2CWaVvWCDoiX7nQ3e51EkYpZJVbGXDsb5Kz8J9Qz",
  "key1": "48DN3cZMfyftPoyReYZygawWFR1TsV17N8trWig1hp2xmpkabnUfuxgMuPCrt3z9CqaLLELkA7wsRv4WnUxEnyNK",
  "key2": "5DFXpDTbG4moESAfG1RC72N2mzW4TqfNwVF9QUjEX1jRJhcxTWC4z3bKH6cXiBmC4B39kcmrjPQvkzDyD48zRV5o",
  "key3": "2ZtUMAdGkJSkDUnMRhwcTTd2zeU2tdf3g1EZ72KEh3ApsKxugrsLADWG3aLfUPGXT2rhCkwfyoasZVTsjAmXUfSr",
  "key4": "2d8K19YPghCbeJQTe91r1u8aZPJWWpubJiW5vmsMyvATKUmsZzA357X6M3C933C37LEhPM6noSG3WPHkWu5vWMTF",
  "key5": "3xQ99VxDW3h1kCfJRoJEdDt2xTSBhYn6PxDq5tJp2omcuhXwP1SVS6aJA1DPSQpuaMMiB1b1L4kNTASsjB2hieau",
  "key6": "3QUxnWDTqdxQPLHX5eCaWEWoxfy94fzKc37PA19iZdeXvzVCAEsESiBpXhvQUVXN6rWdCEnQkvcdjkf9iUBwH3Wm",
  "key7": "5WcYq7oMyPnY7PquH8Wn2ioPi2EGAFpqiHCwkmXs1KETzRpR6c4xXRvXUbezpiK8Smeduvd8GYXfiKdbrbx9eBAE",
  "key8": "4X2cfoaWwVENWsPKWTXEUHa5aLYL5V8nKSor4A8BpNAqrggV3mmmM9RscinnTHMWr7aTwGB9Ev41VoWpHN2wqdmK",
  "key9": "QEjsEyQenL9fM7tuKDVZvGLc3VN4ekpE3sYuF4HVJnRiAmm5HjuR7gRCcnBohtyhRc6XDjDJWtqcZKbHt1EKscd",
  "key10": "22NAmniamSzGTEQwVpeTnyBitrQDh1AaXCoREQZHqNhqrNUiknkswGvf5qFryr78NAyB26hmcu5gWsWCDGMHNNRZ",
  "key11": "61EUU3tQahfQpHKMWZmfFMzFJJpNMwLQtZaG9BUSeF7EvrZ3c89NrhyT2HCNUqsFsezNcHh8qfuuXjpNQFPAF97u",
  "key12": "2ZnhoFhajf2sGktMduvLU7h1RFni1orfNFLfMU459W2NBKNaL9AD9jwbu1hFsVYnDQV8Ag222gUj8cR86m5YgNgf",
  "key13": "2G1zA7FJUwE1MXKyXWVJWGVJP1B6gmRAEoDFGyGCDWXB1tkfq1cvqkkN2hiyrPSBszdirSTqhx5TinhFAqMRtLYo",
  "key14": "5GAJ64YynWtBFjkiTBpnJ65Bg2udttv6LWVqqxecnzy6qweDh9UnPVBDDLysFBSvvEzVWqgvxPwUaaB6kL5gRYLD",
  "key15": "5fYBazxnAbHZhF2medTRnQ2RMwrZSk3urqKo5swhEwnHqvpTrFcdowE3rbt1DrbMRPmF3UwS3LUTfUEpYCkqjwdV",
  "key16": "3JU7jFZAUVP9dknfqSvfzMyZ1ndrDurF7gm1rhcFSmBK2u5VdC7iRDG78B8yNEWBqiiggozSK4N6qd3p11kJXE2Q",
  "key17": "4SvDX7g82nV7QXE1mFDkSLmUMamFDuoyEs1HjKem6XCv37vqjQLxJBhx7j5nof4YcPe5YsyYX6YHJGQt2vaxZqRB",
  "key18": "3RrdXiJSQ9o7GTgfRXxjLzHdG9keiZi5vfnAK9EVaXCF4M71ZcsLpvF3TxRuEyMMY4kaEfDutrkMZfatCYjNFtFC",
  "key19": "5GWBMD3NkCLyA3ce9CkaLZyzw3t1ZzrKynYTJ9Nt2AmZoHqatzQpRZfmBK5c2A39yGRk99zJFkwoy49GaCdJSeC4",
  "key20": "3C1oN5nzPSJzxPAf3ix4s2v7tChxEbEFRc5NH8Ep5L188K62LUH4jSZCNS2CmGXcRq25jwSMQkHQca5vvwvkyW3t",
  "key21": "2yuEg9KQyMatxQiuGFUYBoZZhNbGEVjNoDsDg2a1Si1zXvDbtf3XAc9QkQ3YJizztKQshyzqWdzmhQSp9SkvwknN",
  "key22": "3xuxTGhnD5q5Tf1zeYQpCVo2bxLyfb51fPCawz4piuUHWnTTMTDTDMn7pw5N9GoTXnzDUzFYeJui7mw6E7k8RcbD",
  "key23": "2BaqjHqkKgrZEieZA3N3RAiv6ddsZijkzKEt2QdRWJEAY3dWxM4qto4tRgEB4y2sJWucmeDhA2wmi6LLTZrUAxYq",
  "key24": "2KNDcJEE1dzfU6rAmpgCzsdpDsmfoL6xPoSVrVJrtTARQNFixa1CJdYAJMeao4ADmW6Gnfc9TMXeMNcbcwTwRaEQ",
  "key25": "2hAox7H334jHrNeG3Qv3hGZ3ksRunmtL5rArrmWYKC4QHFF6yajweZg8u82J6fMY4DCv3zdXoW1M6BoTfFo9xmLd",
  "key26": "4xPafJgX5Zobzo1wmtqSez14ccvNQg2T5uTcDstMtGehPSn5gUXBBnFixnsG59s3QexucvUTZqoVLTX9w2nnU1gM",
  "key27": "3k6Q1obeko1B7Qgv3GGkU4N9A3W9CSQP8jxVU9YGLjPtPejMZa45yyPnJowYe6BqcGxu2WgUa1tFNkdVdDvdTDDz",
  "key28": "4JJtrYBjZd7NhWchCeQquya8aZe4NP4bMCGo9kmv16aeR7zkFmE1Jo26s8h7WyiSQvEtcQWuYKSaF7DyLKoB6Yve",
  "key29": "LqjGLn8wFnKHxctdFWUc1akAddShcsCwVkr3gAZc9sEQVazkijf3jngzS2ncdWkadwwRbyLf7RFREiywjeSGEDi",
  "key30": "5hwmkh95MYM3Zw4LHvui6zH5k3e3uCbMAvxbe5uM3Y1a43oWmuFwgVDwAHzyJg3NhnXEbKYnwJzBbM1bxFTLwDdG",
  "key31": "2ffyXWdnJ4RcghW9a96gkoXUZxYyCG6KC47hir8nCZYjrEU4cRWTi1prtANfqzhsStnghvrCs5iQnagJZ7oo5ovX",
  "key32": "2Vs7yYmCTt4h4fA81Ezy9DUfEKCYog2TVYwPTCH4EGVk9HA31ynyKkxp31xK2PowzjYfh9bjuWaGhmorderY3vhK",
  "key33": "3f7qtu1avfed7kg9gC27dByPrU6SEcQrTUYWDCRGKN7EKB5zMrnfHQdBJXHMnjtB9Spmru2hBnMA3ATBf5XJ3mX1",
  "key34": "3F4QRZZMmCUHgxPsabdBwT1fA1UoGy1V9A83hQi43u8E18A8XiNFLNqJiwdoTQH8MM1PCygPzJU3yDwVckoASNCV",
  "key35": "2FzfJN8rrWPHyMZfC3vztPQD9k54Usqnzdj5gBvwL17bUh6DKkwTFcL2voyFi2wJNRT3K9sKJiQqcycRTYVRrhfA",
  "key36": "gr9srRz6RUV5KEkjEjzewNSWRCizzncEWFKVZusn1Ms5jbSzJQchGmpgT226py6WZbnBtqwZvFb69jdHrSiSmRQ",
  "key37": "3XDMFcFLsqUdWdHV7MHZoRLRRSa2nrXAxrKkCeigYbMhAqdf8d1oXEVghPawW5FvDxxK9Mmvaxb5Mz2ggFuALcMr",
  "key38": "4P9C79FTWLbFnw9n1QN9nPZdAYf4KucPdY3cxtpN2bDbkYp6JNvDev6ZKVpB6yjx59s6F2E3D6zJ557Lo7w1aU3j",
  "key39": "4yGyLKrWq4DyYvsFWnDL7HJgtYV98Dj5Mj8qrt4jCW99xYdffEok9nNcMHdWoDWe6XrSBYxLxWYqJhqjHN4drj7j",
  "key40": "x3NjuYRsQR25hj1yc2VvWYoheyMrbq9HFJcW4sLbuw1PXym42qpmBzv65dGMHh7ovSC5EdHu3Cxm2r7HpVPEPsc",
  "key41": "3eM2VunLtggPdS4uxL4igv9FqSBkcu9r8o2ziQ8wDZ5SWzDFmWjUV1xCKxfTSr2kjvoSghx5paA8CxmUX7rbMzZo",
  "key42": "4t43YMkDsmqtUko7J6xRMTtLXBivJjP5HkfR8s3jyf4PvcqSd1HMG1nMdvyUJPo5j1kwCQC4z1NnUQChzuKE22L9",
  "key43": "f2ediG6vMUs8qtXcfXpr35Peto5z8WWQPSE9f3rCdCWBcBAWEQwHA7VdbK7cpKJKGTN7dcYJ7NqSbSs1FCRYtif",
  "key44": "4NwLD94RVtzF6G4RLwS1ihyU6J9m9iQ1SPVg7MKsNLBhb75bj5DUeWx9ZSWb7o7jxCyYvjUow9V4cjvuCYa1pgPc",
  "key45": "8tT25B3Yg5oZiFYrdsAVUaYpPKxJv4eqcunrmAuAPiTXNXA2J8tswJfuk6AYsYYy39QgedYKhdATxYmUZBCprwM",
  "key46": "5uYquE2RHAfVstHDvsVFV4Duema6vpYYQz1m8CuXKwVbguVr377uSEsELCsysEGVEnwfZE31WNeu8aYCqcYhwXMk",
  "key47": "5XL7PYgZ6UjZLvYj8CAxtdsEvMES2BGjWK4fD9omGeJpUDfPiL1trydU5nZR2tgfRtuvrqCPNGZMBFrrV6PHHZmT",
  "key48": "2Lqhc5Zgb9cg4PRjdMzcesT7LVzdKesXUEjVU3pvdzF2FJxcPTw8asRbyjJ3A8voZbbS274cQFFSs2Beb9z94K8B",
  "key49": "3tHoNwT8wwuw72r3E5eh1gBV8UPmGv5gQgP4zYwbi5NuDqGgafMGVxPArNpzWsUVfZTGw6Eyo1Exj231QKkxtVRo"
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
