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
    "5eRRXqXmbaLZgfU8ctJ9iVhra5dZs9Wg9o5aFjuGD4bVMHzbba5FE7Ri8t5Wa2upBF6QmuxXffTMnfS2jijjiXgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3chcjmuJmPF1sDRAhZqTzEMo5giGyvVizpdVnmCTFu48eBEL7ubABh1b8ZZ1sTFK1MczqkT9CubAVtKSYrrnN5",
  "key1": "28NzDtHqjZzr5DVMP3NbcGSnB4ZRhBn9tP3Y8NyF4dbYuhjvD1wBMcaoBx732Uycurq9n2bgyhwbp69CT2VhFVxo",
  "key2": "2CJrUZ2DdrtJJe9trmQPSssCEVziLiZmk9HgDvDMfhaQkRvX5AprkDyPWm8k6dmjj9pqsJbuwuGUXEgK7VUHzudk",
  "key3": "2u91upM6LL1p6r3pMDKCEwaWKTthY17YX4d7HbQWiUnFoYF8UTSbCNyzZkcWRGJ6gYXR53Dh7WkNmdgEuzBHuBsa",
  "key4": "2YhG2zrdhvRyo48ZY8Me65Xx8b2G8YFCKjfMLyXDVVJYMyphSUHmgbM4eZS2kYtQaRsBs5H3JjsFvWU2vAzMpdPc",
  "key5": "3tvExFK6NJ2neT7QdEXTxib62fqajHFe3kmsSGT6rrRk9aT6pLgd6PUgQxNWtaAsJddgPtV71MGAk2PgHx2SKZrg",
  "key6": "81QMpNejrew6iKqSoSjQFwyxNErY2fmcLsJXrS4QYeTuAcfwzum7Q6TiMHcmFFdd3vgAMkqakoSaW3jrYT6NnLq",
  "key7": "52VGVwfSULSmfWBLvJpwMbJFSrFCDKGitk1tjgjAsNzTbzBuVSHNKxRZ3DEhPkJHtUxiTmKKAFXEs87nd8rFVznR",
  "key8": "PjWqRthBcqCqrwY8V6ABtiQFt9wbcsWvxcttbsbQCqH8TvsfmYChQ8HRnq6sN5WPLHz1MYowER7gBzRVFvqqQpB",
  "key9": "gMUXcJutFLyszKQMTb1Cv1fbiaQnWeJFxmc27zevLeGbjBcYbjdZU6wgtjrhYEb8FucMr8prrNeBtx7gdW1xe8r",
  "key10": "3pTkBv5GUWrzZnnUaLuoCP9LbW23Jv8QWhUFPBU7NU8L4V9e5rGXUcn43UiXKZrisHq6SqAHM1FP2gvkkkTWzrY4",
  "key11": "3uJSxV8mBmd3csVopobrsdiPFJS8ncQZWhkmjTuvEKir1YzkKRCg8JCFM7zKtVUG5QK1i647PMWPPYxChNv9MVmZ",
  "key12": "AhMBHmxcYtiKFh5RHZuYJPQGeWBc2hQxnTEzQTXHaugRrGkHSfyx1ccB3SxAHyKj8UNVvwSQomd1x39Zt7P4ucP",
  "key13": "3HMNhmPrzgig646umT5zPZGtp8z2pRHih5Hk9pray5ZrPMZULErPDwduTmoR5G4RurrghLEnwqz1AYiwesixAQvm",
  "key14": "3Lzxs4yjodG69sc4xUqKxs91YVCoWV6L1sGm1KdEuuYWZ9675m3HNoanXSdJ9G51f82qvEoELzH6717VVtEZwYFE",
  "key15": "dJz78TsHKvYLLKH1t9wtPx4pKiSZhmPM2UQ7iDBVotMMR2FM4ZXUfoFLiuKVy6bU4gJLRPQZ6G5haHE28eujoLH",
  "key16": "3W9NzovRp7S3g92CUE1kmUEyCnj2bVXqx6PY6WBAnEYd7dq35USxH6LYpoaLNCEsWomnkkneN2rMrrN6UUtn71B1",
  "key17": "5WTHdczqhfct3uACjAKypMgnF5zRZoiSUQvjcJKkpAckWqZgqj2CNKByKFrt9UPt4YdbPXK3jLFBPnH2SAj3jyPY",
  "key18": "4fc9spJsLhnGKiz8cRLjUKZQpSQTNu61Txg5ULrN3kCCUijSetZKKUgo3WVQt7gf9Nfj4MbHzCeCGMkeQBLg63Cn",
  "key19": "2Udnbz51Jzv8ah6CB1gi7TbxxtHJkmifFf9Mjs6L74mcTZys66sgU5Dpr3zMPVWS6JRsX5FHTFFY32CvK76Tgdxb",
  "key20": "36y4vmwUCgYv6Z2Yp96bkHaoBWZSRAQftJRNA6UWnHr8PQ2yh59nc1Hp44aLfgqVxVJcwLdwUUqrXf7rwL3ykHPD",
  "key21": "4rKtuMN679Wwye9wHSknLSvCGaogKRAMNrYCtBsMvxEZ49cwzB1Fj96Y5K86LWg7T9jvTiUvRyYTh42QujyUt29Y",
  "key22": "4C4vBvX6Wput5jfs6G1Mbx9XL4RXmLmDf9T7qX8sbLpCTJD8pFrRAZYGL4rE9Hh8CeteKFFaP6RWJa42D5ucHieJ",
  "key23": "3M92FaF2XFrxq81bVUPj4sQUin5LU8bu4RA7CoHTEmRd4b5uPT9gWFh3u7fRWzYBEeQgjfFNngnaHDi3czEaA9yi",
  "key24": "2LpefBkrAnaK7Qh8Bo6BQSJvxeaJzDypzzMcAHukkJ95xo5EqDPwrzXsQBz3eLLKG5ESggdBRGso9yZAiEZdKwCC",
  "key25": "5MKx9F611hYv5pHKxxzJPawZPWoRb9tBzJvb9rdygwSZ7i92iPynvR2MCE8M4bHncT5neHQugrcaXRMKS72gJ1CC",
  "key26": "eHY7nM8mVwqttnY9XE5Ln6LbN7XMbkPy2bkPL5zmf3j3YhSRV7GZijFLiX5vxYSMuhz9Dk9NxfcqMTtS5c6DDpY",
  "key27": "2ADfMUWcGyQdvW2WDeDcq3t7FP7tkwWYTgph9BsvBs3wZGwh2cHKnK6zBHA7e4RhCVP3BqcZXawHr7bEnUR6Kr2S",
  "key28": "4GNPvLWH5WaZeif2ete9kqDohGGv81tJpBGfq2mSM1kAFJqHZdfsN6DU1maY6MWH86Ukw4kCqgmRKiXeC4Rvajai",
  "key29": "P7rD3iwSmW3mJxW5zhFXWsA5EECv3McCuGabdtD8HF3TF8RWY644TTsgBPYuCjg5MyiUbi2hSaQsvKgzd6f8qpy",
  "key30": "5co2NmYVHQ95AhU9mAkkYhE8LNTWS5edrYJcuRzsUnmNC35kVhxVpWZVpWRxbT8db4SeTYqrQyV1tEtrE5b23GL8",
  "key31": "5ZXZ4Cohiph2h9Qm6WoNpobtTJFfqt4LrNCfq676pmAxzVoJLj2SB5ZtnYxkP6jHoS2YccVKyP991Y2adNv6nzVo"
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
