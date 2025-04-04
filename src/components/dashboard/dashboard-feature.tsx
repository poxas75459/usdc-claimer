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
    "3EnvGCcJvPMcSeutUr1SUwm5NiTYuJq5DuP8mtAcks1BeL4UHbe8UfdvRkVz1XSFHBBAAe8VPaHdswMe8WnL8rvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YqJ8nc2w5A1UpJKAChRaxqEtTwEmS5sEyQAvzGrC7QJ572XfPJwTwVjUFLgpuJiFi2uQf2mgkH1VzVWi2TMz5w",
  "key1": "2gwDz1A9YDsXnsdTfu8AwJRKZPFxc82gY7tNdcnMmSyvtZ73To4SNy91XnTSYZMMkXakW72mrKzdnN2RUzu3wL1B",
  "key2": "oHs7UGNHMD2F84wjUKqWsAA4NnYjzNMg46XukfAd3GKC9KyoY8f7mJnt5huw4LXJL4oU4S3WgPkfLgWXBZYx7Fi",
  "key3": "jiBBhssrdwpvKUUYCw6DCPQA7Lds6Wbe7Vb9mATsUBVKJuokRQUbqZbPCwuRdWDSAujCQt5r8uJV8RoxvHwpv9R",
  "key4": "3Txx1KE28uMkZ93ZsRN6zFwS7ocBevHtYYEZXw1Jdoex25M9qz59tizEys9hPUB5RPG2sLsvwxGqoj8sVsMPenLn",
  "key5": "4e8aV3NVwgJahp4sjvbDC2BqVGj6iXmb4SqcibWWjoack4QX5gBzRqxJe6MJcZZTCxw3MWXZhveVRqmjkfPr8F8N",
  "key6": "65B9xgyJQqCnAM4rKhjfdcVfprK9pw4QKg74fStTMicmjioEUSZ9NWYJHinfKJCNzwmPdvhvVz7hJFQky2zFvMMT",
  "key7": "2D4QqDt1qb9NTQWNGVAdcimEWhjnbfJ3kKPTVfvrddPzX1RWTkc5FE9pFciNUCnpCL4sMRW3SgJN2oiytzRLPxLD",
  "key8": "pZhY1v5Y5qB4ZYF3cpKvEfEMicJDpe13oG9wWZej5pLjSRaDkgKMhDHPE6BNNWYFzhqnAF6sq7ED8TFmpbLEPEf",
  "key9": "2pUM3k918pxZ8yLvfpB9a3vSNicaPNwXYQSVaeVS2o3XN9SqU2n2eFuKz3Hvd4hB8R83LLTFN34d5jzS3jMQfSBS",
  "key10": "1JSSR1mKXwyh5SkA1LPbsmKm5WsRKM2PfKBmcT9kM7n2AQpkM3mgrhGcMXcbYSnHmX6j4Jh3x6VLRqHATNVnk94",
  "key11": "818NWAnkpKakekrvu3Ab3KL7vewYGjpqLGqTuT6ZBBAo6BkJv2z8s6dbR7dnp7ykxzi1ZSZCXcbU2kcvfLFy9UF",
  "key12": "nqKmDqxFCRVLxiNvpvPqAaFEMZJMyjuEiiEYhY8iZaGHUpdhqFfRmB9pmbY67xeQDCX4J837H5Bjzr4MiZKKnAa",
  "key13": "2dAz44Rs9bqkFntrLLRWtnMa9wJAtarYGznDQzRJ2eDGhLaqnWfkdrELChk9eJWRh2qZrWugd6JARRRMKa5KDKmi",
  "key14": "61kfWbQf1h9UGsVfRCr61n6mZR9zf8sM1jgWNCXoNDb5udJSL2NYmKtZDK1ve3QAhPJiAuwAhFk5FADK6ssHKzks",
  "key15": "2oiYeUtd9Zphcr3resRtZTG8D2pGXCQfSMZS9kW2QuVrtQ4Fts6Jq5GjwzvFF9MiRMJVkTsABjaSYpM2q6fYroN5",
  "key16": "3QC9sDoaz1ZPisGCe3prAbZ6gDoCs55JrwAreLvSviiFeKZMGr7MUc4daPyExe5ftDXZfV15AKYhePVXS3oDY8fX",
  "key17": "5VMytvhFpqWVn8UAvA32H9iVRSPkzNjgiBNtLMcJrSRmo4Yrq6tVRs1HqfR7aY3g2AdBY6qSL29zHtmLohLxCFyc",
  "key18": "4yM986StARNkUPUtA7LSFqryugp9PcYDE6Kx72yGjpa7vtAxntZRugSn5GoZFdveD6cADpRyPP5XBuvCEDot64QN",
  "key19": "39a169RW8C97KnSkn2S6mp4DzYLn2kWXDrhQ7pgacbvT5ADkxVQoe8mQpx35sJoiMTAESXNVYJK1Q8QjJ1JDxCru",
  "key20": "3sk9GpXs9KQArLnBNJrmRRLaTCARSd9EQuVa7GcKUEvd7WhVRkh4Wb1Kxm4kJhQWeiEV4yGPfD7bWidwfQXnC9fi",
  "key21": "5t5EJK8Qm7HZg5cGK7gqY33tQWY2RoK3o71PJSfgp99fsijFtYG4CJtjXsohHztpqZW6P4qhsu81Yx1ZJbpXMgxx",
  "key22": "2JQN2A6Z1doEUaH1HBAVT14Hndf3hU5tjAz14794ZKRyEHQwNchNB9od3xBvXtLsye9YBWg95FUL4j2CCzk8n8iB",
  "key23": "4zqR3kqmHNr3hyZzuYEdZbrxQGgHAfpVbpG1hTaDeTsBUbnZxutuEsyryJH5bjK3CS1ZV7TeZPeTsE1oaERGeqF5",
  "key24": "CFhQaVJL3JYXfkAfi6SQMdCUYxzvY7TNzqcWgSyapvQQgmKsqRfF7ZHhbMUGLXXMtGq16XXiLjbp3f1ZWzCWmbz",
  "key25": "2LnTxR8ytCGTCvrePNiZrzMDT7NA2ZrPfJuZ7ZSWN4nJwf6G8LmapkeCwtHR7EfqBnYLbvzBTzHeL7XcpjaWoef3",
  "key26": "2ACRH8k8MgQWJeD1GydvtZqxSQH26EbYgt7kxRAsvD4HhEQxkD32idAsnWHNvHN6MB2Uy3oSPu5PmAeZt9igCeFK",
  "key27": "3sYkvfTdUX27CTVDCwXqjiprpLub1912ujHZz8xz3hn3fi15JtGk9y8BMWtiuHcRQw2BjMgbYJdmWb9zQbCmZ6K8",
  "key28": "GNibSxCAdmdkMzxotDp35jrKA8RpujSBCCDC4BimELC8gDumYQ9NFjkhcgWzmAYVqmQuqE94Zp1TuSpiJbbkehz",
  "key29": "4vUtwys8NVtJW7ayceMYfwaB2rohr4rFbU6ootdM633qNpDKXRDnZVe9HXb99nPHHKqx6gHnqqWzs5Qars6Bomtp",
  "key30": "58BnSK3X6SKfFF48aCaiwEsCYWbxM5guixHRFKxZNCNgLYpnNFu8FNp8HSUdMkxkdAhpXfWnvvJdqsCYHpEZVtZH"
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
