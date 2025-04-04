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
    "3x536HbK5eZPbvHC4vP7SmFuJrjrkDc6zVnNs15cAKggqG7guRHDy6k9ncKMjVcr8Xfkkrh6iEoQd8se29JCWxC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6cG31JiHyyjSVkeP4qTApGCP4NwgDdXR4XKQMRytvTPD57KLWDexLUhsMcTtoQb7kUSi4zWpJCU47mTGbtNpd",
  "key1": "2BKKX3VFiLmYKiu27PfX2XyHz3JD3uedhVyX5KYQaG4J98iPa2EtxDbDAUG3VS5Btqj2tj44Kra5toZarvBgAZvt",
  "key2": "47wEMqK9zNAt2UoScRgFWMFx5Sa7bS5Xv67jxUxrFgZ4SK4NQCdAPHNMH9AWeiLgLKAdUAN9H22k7wyQvYsYYSga",
  "key3": "5Zrc8BLeJbH6r9SZErqwFjEpfLPfjrMjGuvYwmXymrbjqDaceyyJaYoE36ATxh3aEvGFeKDQ6mdGSKzE5ASr7pA7",
  "key4": "5wuHVArQrj48Mq23UBAs74pRjMPYBaJMk4cucSennnwdcENHHoZANaMBGziJmju4hcVsruJmQxZydecN9fwc5APQ",
  "key5": "2fM1dkRJg7Xbevghn1XU358AbTBbN576jywb1kt4tSgX9QtvZ2LG6bGuzowLkSN2h29AAbV3L9xHvEhdTHyDC8rk",
  "key6": "35xNTuFBJHeLXTLWMbPgjWPZ1DEfuBfmeKWL67ujsdAoYuZ3YhKjyAJhPfQZ5TSR33MXKyPcph28LTsMeKpaYnMT",
  "key7": "3FH4XjxHejdh9pNbiWBGxV6ZeVwwxbZRWcbCUx6kDc7WAgV8uSPfSRt8FMkRJvQmhbKu1npTkAUfb4Jff89SrUKd",
  "key8": "3x5WruTB4SqFJmbPkKoAW29z7XfoD43ZnqsANktGeNizjNz2qTMTq6PBPYC6PkNexfpMJperpyKSEkgLfFixxYXB",
  "key9": "zEnwjgZkdRDFM4VFG9PZ4corReWnpNnjjwTTSiEg2YvV7v1h54HYrZJ2mAwndfea5KcbUBaSAtFX63siLnhNDLE",
  "key10": "5e8DdP6BvfMk9NSrQX22pbCjoLqD7gqhJpiv3PzarYBsQj8fWnxgXoyBDEc33Ub1SzhX2E9JvSUS4uj8SRNNB8Z2",
  "key11": "2Qqj5JvpEEP2h2JfdpJ2xaqmS2zWposL6NF295bhdZE9D5q7zF5CMxh36Hvg6Bk3kLERx4pBLXaD1BqfMb3mt1T8",
  "key12": "2s75No6L5RHgocak9xU1LwLQBHsz4fzufdkvRmNHF23NCUdfTMWMgfoEBisJg2V5Nvp4MTpxKvV5Cgz2k73sPnN8",
  "key13": "4JLhjHfGJbMgmtACQsmCRZLyzpV6MDAxRGL6L67QGY6LtEo1WQt3hKHkznK1mUgDrJjTBgpLTYxmjpzhiiqCd6jJ",
  "key14": "2dfn189XrQS6VLQphanmLkKNzvqKmT3RhCSshCoLpj6QsKAJXfNT2NXkL6j98ioM4Fvvnd6KNdyBEQ6hsAS3vsSB",
  "key15": "4fcidDvEhkvbyTQz5Csw8rUoBvA9tNydXZCujcAp2uJk4aWj49y3qynSMrbUECedCRXe1puuG3mBDB79bnquhBei",
  "key16": "5nF5HXbYxbrTgNGpdakccr1o2oJZTcmsEL3KjvLJkyjxHhvL3r5ZYdRmV9RCgJEkHFa5gwaTB9hS2kNnM4rYQpJD",
  "key17": "2a23Q5tLkbXtjMdFpp9bu85YhGnKUeSc3vyhhhzFwNikoa93cGsnbd5rDaqXRePLPni6XkpApaiuGk4Rd56NgAv5",
  "key18": "2EUaAPST7fqtkt65oXSX4gv4wikYSQoRviAgbVToKxeAEVk8nHErGmp6jiQ9N6bP39kad1MiuumgRgueVoADGHR",
  "key19": "F8cwYvxEedZmA9pn1hCSkDJdw8dxMfMpCgh7gPhdWWa6RbkxmL79GFyLAdXASLwn4tvrCziENMKLbucSGwN4dgr",
  "key20": "2r5R3U16xgSzsucYVecDmWVfFTas1Ejm8qxgDfR7wFLmmV18J3w3njcmRH4fP68B55PkJTKAJrzCCnmiZqdc97s5",
  "key21": "4ebpJGn4zPdMYF8zbmQ5jb8xoYDo7LRg1Aw1ZBHVbgFEAjc6dyMcJPHwR4BeB89nMWoGHqiTEgn3bbupYaqjMMR",
  "key22": "THf8sYkUo5NBnpzE4ZcKELxceBwA1GZT4EDMQdfSSnV3KYaQJPJnea6pf883GnW5Y5jgXGCbYdW15QxDQN5SHAB",
  "key23": "q3HfZEpenhXpk2YobhSQXERjamsSTwcmgbD9eeiAzzTQ4fDjMzVzUcVhNftmEicmViV2g5DUiJaY77zHsizQLVK",
  "key24": "2cokVjaUbioUKTtV7d74ao2ZQ23Kkosif8VDbEkPhtKXqjFpwNVNiJVYKe7fAZ5rcQu4ReMJQLcyE3ft4nFPTU8x",
  "key25": "61xZdNJGd52rz3cSd7ouN43hACRCqqhYB96JxaLkZSir7W6gT7uLvsrKEPLJRKxMdka3YK6R43i4gASZJAPqxW44",
  "key26": "392Tp7i1R99dpDHY4841zjQsNiutb81chwMr6wFkn73drKeLgNsDn7ugYAFSwcKDB9twPpV7C72Dq5k7qz4TdaHF",
  "key27": "5twrwK76p4m3VxhTjqPNfuWKrXwPiRicSP8S42kuRUAwCYMkzbc35J6p5Z6tV6v7qgLhc3Wbce6p9fGQoDbhzUhp",
  "key28": "3rcodsfTE7Q3qAiSE8fetFXva7NbatLZzqF4CswhYhGHVFxkuNAjZrn1hayXJoNY54uPCJLob2tUWBU7SYjnf5ZX"
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
