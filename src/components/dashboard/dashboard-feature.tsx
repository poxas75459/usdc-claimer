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
    "2uKTreUe1HQgoYjqieN9UMTL9bEajBwFYJRSr523L6UUxMJwUPgRPVoCCReKWGX4xh6c6wFkjweguYqrGN6WdFjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgQtQ9MVUisuMEbpZNirS96msm31sybqoFmXzF1AHd4b9kHwCNX29zGHyDqxQDYKqFj17DBCgVuH4efYkfZb3jU",
  "key1": "rSTS9R2zQfbiH6SbNUSNW5QQfyiDTL4UmwTEsZrd3adwQPiauhwmMPqnDvEKSPA2ULDzkRm8qebmzDZ6mUJiC4s",
  "key2": "2fr4vD9A9ka4tS3Zmu6D2apctzN44QQ3T8vwsk5NJcbQ9jJfcZC2RrUkgFsvPn82f4jd8ousP99GXW3uX6dtQKKC",
  "key3": "2MauesG7hC9gDzvKpco4yopDYMzY1JLpGr3bxgfXNaY7Wm9FttEMxbdqtpH6Qbacjshpe7EQcXURJbCi8NVFkDAL",
  "key4": "62RFpZU9pvAcmgPW98mHxrUgHMcbtxyMaqwmfcPVBHNjqTgNieEkAQQ3tS5Xhx7jbsiycs9PbDtpmyfzwc6MyT2D",
  "key5": "4W8ysT8ryM9WKsybXTr9A8yxFHMP6foBE4Sf6vXF2c6YQjRz4YEowtPC5KYk7mHCdLRsTyAQbqy3pYBSqKPM4EzH",
  "key6": "5ihCUjZpMrNjUbA1XFxjZrJYqMCTNE78SK55rfpP7Y3vPsdSUcp5rucvAkS13YeKizymQ5tyZkYdc8Njmmz5U3Ss",
  "key7": "8KF4UP4ftu4eS77CZRrNDgaMEXSUoAdFBy9vfBGK1KJYrnFuBeEF9CSF3UVJ3FdVB6JCJ69mXhtViRKzZgcnT1i",
  "key8": "579MYXuUaQ4xxKkRRWcPbmdEngParozvLnfAkMzDWqDjwMgjhshC8zDs4yNjqLuzh8CeQVBgx7WB7rj3uXxkcUYf",
  "key9": "7LEbswv8ioq75cVEkrecxiH85g7hVxx49qMfTEE271gMPvYZJL8GNpvS1eDLnYCJv1q8pmekz2m1iTMQuASQWWo",
  "key10": "61xV7WKBd1yVjiGcyv9mq8sY1BVRSEruEWfDREpdiRgeowABiD2nLiDfo7xj3H9Y1JappAyDFgVPjWHdRvrhbrYM",
  "key11": "3nxwFrvtgmgKCAdT9ieAztruiWDEGh9amMsy5KWWB73DyZvYhxF6Yqa12enxqP6MNd9XmYpPmo43bBAdZvqwNJeG",
  "key12": "5DugvJRVhho5WnMCGbuBiDYNW12HF8gm6JsT22JpguxsbFTYDJ8y2kvBXmSfZbtxJupPMNjYjHGQ5ctNZWKwg1gc",
  "key13": "4zXvY7hGE9xg2f6pLCM38zZ8bGreJ88SyNnQau9TiQyn6Uwrm8y92jgKmGrxMgYeJgDcfPp1nhzEHZbhxugzNJYf",
  "key14": "3rmRAGnA7Lz5GNKJduZLDQCrrmFZdDoKdBsvSoyniLc3Fbv8Kns64i7iGt97BBYifkudnkp62i9qbwbsci64ZMZ6",
  "key15": "sN7WnCmMnj6wf1MdPemx672TKdZXWdeudZ8bg4DhudXrTZ2kjiUoskcreeaCCQEBk47CzUGDGNkHhM1ruxVvNPA",
  "key16": "27NVPXvzwHkrrbqDT9JYxyZkWbLL8XvYLGEXAsLFv5FYubdh2ditQAQ4nCbskkYS9bSNJgUcNXve3NmUofsVRECm",
  "key17": "27xQuyEdsFuTa5gAvghrN5Qk9TdiaddyLW8gnUAHzZBp4LTefaMzH7wsepdFTo7M9fcmwkLjdgncFABbnQ55Gfqt",
  "key18": "5te1Biw6K7yy6Bj7Ts2QZssXQWxLV4tMFMh4Mz2QQeUrM17Ebt1NrBPx37FDZjp2qYkKrV42rQ9P2LkgQE1bXtUg",
  "key19": "4Ji3nqT9Ed5qek3zGaDWiVtaPCqzk3VXrwBaZetHWdxv8zGT9cxYb9GjnQrCjZStpJ5Wkvz5EVtWyPer7orT4aGE",
  "key20": "5ZTHeuRYKQV6L27x1KRU281BwtNKr1XwvL11HrmejTx9NzdMTnDsswMoANHA7wZekrizAHSXQg9h6eHUe7c4KBUK",
  "key21": "5ztLpLCp4Epfjfj8fEsBxVw4cSWhdLznEEkBns1kBRzaE8ogRXfrxv6zDLqYKZK9BAXSZcUTtqkay3q3fQ8oUevs",
  "key22": "JYKcnCspoWhg6eaPJwDdJVw5mFBJhaGMuzfu1cLtdDvnq2RsbJ76EuJmCrrDMHT9ahMSSMdLXEJv1FqF75CeoXZ",
  "key23": "2KdUh6icm1hd879PPzrK9UKgR35yBesejpu4WAjRx2Qu9cCcL5cDc4hF2F6iQfXcLYDTmvNTGHZDH9XuKr1bynHP",
  "key24": "4X3gTkJ4V3S49EhWTKWrfGCqNsDdq1w8uiJpQeGY492E5dvQycAUewMnBrs7X51SwQTryGeZadL9Kiybdf9qjnq2",
  "key25": "5igbbF9BSkAaf6TBHxsdppEta9KaKraWDZFaWHtb9sjomRpikmnAx8ScNWKgpamutHXcPGQR5igGefz8t3dMx1r8",
  "key26": "4nxwo4y4v31gG8ps2eR3vLfkMpD5sRNXaPaieJS4oK8cZy3vBt7YrRfNYbdiujfYhrnYCMvWhZZH4KzxP98T7qtT",
  "key27": "2G5zB6QPEQqPd4mPUim2WpVmUQ4URm7aVhn13XggDJEQgJvbXmjTaioV3i4mpRWBATKWSAiSp16wvPbCsPcruRGf",
  "key28": "3HYBxMYmbnwGkuFLVnXD8vuArF9odHvSbLh5YkAwL389SpqKxExAz3Kj1yQXwtMzcYDwnm1WcGYZU6cBEHyAvYHG",
  "key29": "56CoK6WEwzy6QZdVExj7CXpSJ3pn2v6mx1FfwDpwEK4yymGWMWkKh6c2AjDVo4Jia7ExS5XvSWpZDtbiPxBSYdop",
  "key30": "3g4Ynx1BJKb8iiAfRvgkR2ZTD5DCYXTqF6NJxM4K6KvugQ4opuC1AsnUBqptkjhdU7crtJNat6ZJMwrnNjGb7wve",
  "key31": "4Gxa71krU7fNc7xDS6R42cmCFNdtM4HE1ssdnyvBzawC2iZFk4stt6XYEG2CYvsLxmNHwHSK7r6kxSdXfwtee1oJ",
  "key32": "31TRYGz55Y1urEUSu87cMypfkqJmWntaxDp311eWJSUj3Nr5SPCZXPSUXCo3yhMCNHnZJ5hpLbo7Pf3RDffV8S2P",
  "key33": "3aE4JaByEEfw1tNrRHCeVadk5oBdZAqD4L2RvTZ9DfhgY9DrtttrGPUu35EZQNNLpA5N1wJDGpb8MVzqsGDJ6Tq7",
  "key34": "5Ywufao9dLg7tXFq6rs14MQjKfnoZGrW63YSzTw8cEtinmpXcYKYvHk1jfkrGBysBeA56FsXvutcRmggi7LVrdh7",
  "key35": "3KVW1dtaytiur6QsvL3Jsjm8B1Rw5vjvVszcsguPGSmgzgmWbri2srnjmeAi29VX9Z8VXVessdrfgobRr2DL4932",
  "key36": "34R85y4BM6eEMDgkUmz2ioKLiQoJQodhkX4zV2BQNSb1B1HdcANgMNStcsUqERXu4crCLMm8LYg1CG3LgKg1gUF1",
  "key37": "4YkUxjsEmNdJAicyNjgsRjcABSuRfkUcPuNLaTxFgix9AebXLvy2yTGifarBjqS6Ydfaaj67J4Bzex3KjVayG6mb",
  "key38": "p2oHd8D5ht3vqewisrmaqSFKL6Le3dAwq6LLP8b4gkiA1dLgAEZZTfeuy5Kb5wfsXdC8aFHMTjFU233bfo1AafS",
  "key39": "3Cp2Ge5qLNz2iyx93gRvpE4bEVWSeDZxeRLDjm1b1RHGFoe4MZF4ZhU9hZreUqKYyiwBzWboBSu7TKe4rhxeivYn",
  "key40": "5TWQFMuG9fyB5itqYcJgTiNrbM2WLhFf6KzywBYhyX3bkhSy78Y2M3Hb4rJhGdPxTjKxWVW9nWD6cbiJ1Wet1k5c",
  "key41": "2ay69mWrjZyTtbQXZWcCEFDabGRt6k3vzQ3fTvQs2bXZA35EhDqM7sRfBuqkWffg7tseasd7SKXAJkBvLNmy4jnZ",
  "key42": "34nAEV8SVuVr4L8bpbjPiomC8fbX28dXyv6WNLD4fD866LwEseUMdxNzmCzvMVgU8f6YgZmFGP6pZHCh1U4x3DpC",
  "key43": "3Ugx7SrqmbD8nLSEFqByfMkpGShyH8BHuQaw2rz7GmCh9q3BERUyC91tD82mE1iX3Qr2GSdbLjJ7qbqLCMjP4ZeR",
  "key44": "3H7zBNXE1i3QtVhwHe98QkYuBQLthGDLLuWsSbV12EgE99ZEnS8zajKCzPrGTbfrw72c4AgZdPFtz38pHjtoNUR8",
  "key45": "2DgZK8ijfHKmEQXaRVFnFqT3buKqPug4GfMPQtYcZTkREdcuoAEzhx2UG128DX5uJpVtnZikvjCApgUomYMucC27",
  "key46": "5ZAQ39cm6X2C9jUggkQuD7w5nGBwpkF8jPZdvUaQ28nD1dJnPDcLdEXFgSNoWwaaszF5sgxKMaPQ6Pk3kTDDBwZj",
  "key47": "4avgbRQ2DUCEPSQgzbJjW4WdBWjMDsFV28M9tjTEKprJ8CdScHsUdWoyVhetx2m6YZsZ3LFeT4TeybzEtJoXw3uD"
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
