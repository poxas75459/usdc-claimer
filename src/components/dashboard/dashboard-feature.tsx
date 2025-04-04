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
    "38y83z38ynhCHL1PgCoFX7nAYr1J9JSpoHV7ZLcd1qt7dkvZY4TVjDbArX6P8tMQUBBQrCzRf3WBUSvaGhABg13N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dn3HHjASD6CSAMtFVWA6daQK87hcxCaW6FmBJqoJ3it7XuJPN5GxRjkoqzK1MtQohBTUwwRoH8g3Rqs47CFNNBZ",
  "key1": "3EcZgpFRYKju4dUSb6fGjTCMTG6BcDkW9e4P7jZANVTjo5JjAezJV6GiAVaoU2SWCDTKVtfnY27dTZJranTd7ZWN",
  "key2": "3SKuKFNoihA68H1kw3ivipzPVHcbrwZkE7cncpFhxgEckjAiUc289xdM6FNdaXfsWu9j5AMZuwabJdLrF7m2NumS",
  "key3": "4wnKE45JKRg9dhWfvmtERHPHoyhXqxdi5rEdkcy8Aqqo82krihkMH5JWphZZ5ZvbsxFbJ1nXb7LXQUdnZzKrMyBD",
  "key4": "5Q3j3FwZs5UKS7QQNJiv1NjXtedPHekTphVCKA21QXvV1eqdfSx5sJZSKXAASiLkKCzHq81xyQna7aTDh6XNKihw",
  "key5": "jjisExT4RnKhtY6VmbrNdiNzkrahSJCay5SXYcmmnA3AtzUum51Ci85LpvVMJsWZ8XarswrdBZvLKGzTaAGbqmD",
  "key6": "21RKNy4fKyywx8bKrgv5jvKnQtiaEYh5Ek4UCvxmoRmBnnMj4s8kTH2rVhCkL4B7m5jsyvmcNbQjMmVF6ZSTuxD8",
  "key7": "3WS75xqnkxLxeT9sjYvFDsgK2fJJVHxLdLuYmXAEjJyyUZshrcU9ooN4rXt8FdjnxM3cta2BqV3vXDbE1QQkcQBJ",
  "key8": "2t65EXTfu9n3otMJpYN1RYUbcE8UEzuz9H3oeaoxprdrWnkyFBu5jSAZZf9fPPy3DsNVAGVc5GFryuVw7cWS9REw",
  "key9": "3yzFypqnLP7kXwW6K4EeytLZDMUtpmET5Q8FgWxKfDf5PZzaoMi1XbKVyFdGjVTF1GVRpyJXHEeWpyJmr4H3iJ5L",
  "key10": "tkPq2mmRgxTT8r4sG85MCojyuA2YSCNpHFyiCuup57W5figHV1wbac5uoRLWHP8oPXExdBPF5YQFCSrtYMQgLGz",
  "key11": "3ACwEZGV72hd5aVyB7W6vbAFoyrWehiKNt7jPX6MGgpTsjzRnKX5fhCXkDmPpagVVH3674iwRfmBZFQaSJANct2S",
  "key12": "3ttuzUw9hg5D8zvhNkSJ7J7K1rSvMfbGNEELKeq6gxMShCsQQX1UNXtcSM4ttVUc3z2XF7UdZaisTXmLp8qPjksx",
  "key13": "2FDiNiU92vHcSU9LcsK49VntcEGNEPXFdb67xzwoR2iZjVYsZJqiqfKtDipu65NvALCXexqsEzmfr1s2MNx53VPx",
  "key14": "2A9Hek7SLU73dYt3S98vMXPi6j5fRyDexNu5BaC8f4DwkT6dy29vjMYSGQcpJhD3HoR2zAYi4yxmHcmX7hFM2huF",
  "key15": "2bRcU2KcbiyagDSb7Ty6NWuVmxt188A1wAFKy2pUMDWaUPbw2AYipDQBdvrKoYRqyQyfTjN41gRtBcW5ZhQ7PmrB",
  "key16": "24ZwgQV9uJ123bajvKzbMW5ArbmSff9GpgGkcD14jDGuHwcdaeMWcvotYT3xEDVVLBaXe913hGXZXDwoF3ckzNSy",
  "key17": "64cXZ1mYX1SUjbr86ZfnSNMQpMQom35hgGtNAFJ3iUsMgiU9guQSbCxpyr1835Kz81yq2ReEQA6CjQP1U3xoHvwp",
  "key18": "JQQPfZCiKxeMw2jZ1xXL62dT44qVXZ8Nx6k1sogVmwgNiugKZ32ZY2uaXzz1LaZiMbdhjxvCNW7xzHkkb24vp4w",
  "key19": "3xGSyLRFdgDJ6HDki6zZ7mVAN24tTyN1HJpJVzbheYZtKfJhJWGKTnNPdHXtad7Cjj7ntHPxhBRZiZhH2BWKw2oC",
  "key20": "2uS6Yc7HPjnTgJtNtLx9f6Siq8UYEqK6JVPqUoN3tFKMWg18t8VkVrS1jDpnzsjqaLUAmkc5Qfg82ybFVDbD56Wh",
  "key21": "36SCaVhpXJc71SaaySXYeicZvgKs9gvonVifxT47QHXbYMp9DH4FtuVcqCYMgzciHYQuGBWNncUPRkP8DaGzxXf7",
  "key22": "2cCJ4JHDbjgBphc5wsD2VDzKFupX1VnWBUuiVByWRim1RHeZtrzC2ThNufx9X1xyi2xKw5mPmj1rHZgCkkb2EMtu",
  "key23": "5ax1AzsQtUE4TVXjAbNFC3sZxD1t3TkMumSLtB1wWRNV8pxjYknfXfLzsXJAwraigcHUKi4hMRksPDjFJB8ntYNG",
  "key24": "2spMSezYhSqDi6SRUXDFg6j4SXp29m32W6AVkvhKjCTPYKHszFsodVseKWHM48AdZFJsaRDju3hGYPXVtjYs6ZUF",
  "key25": "PZgLHCSQseubtssbzzTcEFZqZYmsaaoKQpKU4EwqfqNoHXw8vVyEc9Y6yUgzcdkpQktVN7cR52h12fdq7ALqNer",
  "key26": "4PmEfTqpvkPkD1BrzWfYBHLGWXndxnzAUwnHkgyWpSGMbf1kV89LnUSjHc7ummVnZK1Kz3JqyWwNwFnaeuSSjamc",
  "key27": "42Cu6bUpw24BzFehWM2xrUuuyUhJ1J8HEcfGqhXcj2VYd1Ntus2dBsc1T1RXDsXJrEXdDytuAh1vDHPNRvHX7UHg",
  "key28": "41QsAE23dbdDHRwzQdiwBVYbWiRLDu4wEB4JDATZegyEpKEAT564G6ujjL9mGCRmXxv3vF1KFLtowkprtP9tJWUA"
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
