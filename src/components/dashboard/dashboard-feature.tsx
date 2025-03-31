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
    "2u1znsJNo6jtr6pUSzwiNjW9WQ14p8QoEdaPKpvWougnBqTaAB7jAnxxTeUkcA9Dkvzk6xj1Hp9cD2aZyQg5qbcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PD5BX1DSHQHt5LzSu1xocgpAuHmkSuRivm8LcwRk1rSiPdZr5e5fk54SioxnTxosZByM2YyFh7ghkGbETZ7NiS3",
  "key1": "3oC9ewLgc93xXZaHBLTq9Foq9vrn2BwsA5escTQFzAhKVZNMdNh5VQjaRqLRgEjJ8JEiRB3jkvFp2dFcMJVHPme5",
  "key2": "62TVGiqxMkVsFsZgQNxJDt2pPYbcFFdM6HMqR2MHm8XRZBpckfwTBZrnkWjr8eXaxXSwVMeHyRCT6hhT1Y5eTL7B",
  "key3": "SWfKkvnt8ctb6ejSxoy9pLoKZWBHMwewP6oQMQw2RUpUk8xVzLyH2TUabCEcK9tCfU89Q8xrL1Rro2HWyUs8aWe",
  "key4": "Dhz2hKQJj9m2ZXv71ujnjz19FdhJnM86PgLGCT2F8yED8ZehvmgYwkyrxySzgmaxdcRurfMMGvdLYeyFH5EL1UD",
  "key5": "2EKLBkwW6PBiWQRCJWTrZg8sL24ymU1v1xZXdCkFzGS3Mp4o6F5jtgVeeiUeLreefMG2sg66y4UGGEZt1CLVocF",
  "key6": "5dVo9gp3R4hxTs2WRTCNDNMMfwkET7uGwu7c1vBxKFf19rDYoDZGXJ6vXU78go95dSKbFdk949ZvvtHQ2oZzGAZQ",
  "key7": "3VTBUzZ4yHecZnU4gNms5NdCK26cW937bNq19C6UbvQ6HuXb6DD25efPDVpwPPpLsRZj4aqWhBM5pahDqYftCRAJ",
  "key8": "4mPvQMKamyqwcE3PrCUfAdSDt6BZsiSUuYFZuN7CWX4SbMwVnTZxxSXto9Xm6FdrPjQzF22HEjwcxYHDekiaXiuU",
  "key9": "4z4RnyCHVLAUhn9Ssr8Vor2uqp4G934noX8eDpJb11H3kXLBUPwwpXxGizt1K7YHtPfb9XpyZwQyKGtTZQLi62bT",
  "key10": "1cg4mzLofE4qgwExtdQnn5PuTENVtfpBEhZtrWeTqMVo3RsiaEY199aahxfRLb3iUWAzGPLJHvx3mWZaYpxM25d",
  "key11": "2puyeP2Gcx9KpbRBnJLhz7oh4UvZofHPWWorvxsbPfa7ZKy8MjQMQGpacgd84nwvkbz9d2DqiU6uSUVRUp8Z1xbX",
  "key12": "5Qz9ifTew22a3UMV2WK6vcGv2jctJ18VWkr2JTQjEZapYmLBhDv2V2UrVfBGpnyGkmnLNyaBm9sLJcicRNnzjJvQ",
  "key13": "4do9LZrF8YeRZH4iychThTqiL3ZRc5B9R4QhmToepTS3zTF131gRBcpmdME215XDkxWsbHYMtCSiZiQLGAsEng82",
  "key14": "42YLgzAhu89c7inXT9PLy7VLzqpbAefJBDLNrTCgNPhxgmq55CphSKHCEsxR4wWfVza83d1FU8fvzFrfGmcM636c",
  "key15": "4HStQvNuemXvDwDjWiUaVpjVrzG7cQZfqJqji4HEuohm1yzAAhQ22QWBaEbj6YnvmgQjxvf4SijUsyLWUCZ5ciXM",
  "key16": "5aqYtLbJWzPTC47T1W5hqy9noy1m8KzmckBZyTeFR918dmUG8JMe6SwRzU4jw22nYiJkQGjY38Fi8xdXuZvUZYfL",
  "key17": "3msVYDEoUr3tKrXNs2ubdd1pHEU3mZHuvy9Q2RRFATGvHbp3W9sBvxep8VHVx9qGSNFGCfEJVNtk6KAPjvuyfLCk",
  "key18": "4GiBQc6maUGGjK6ASTywh3152kvsnGJrpSWXxvtzoMW4zuEpT7nV9gDux3bRZFmFonB8gxkfCT1hezH4TjroY9jF",
  "key19": "RnMG3Vnfo9EHYwH1F2h94Kdm11ti6oQaNYc3SPoUk2HV1MJdK8xs7TKAqp4DLSSGu8ME7ynHdNvJvLFrCzCiTGj",
  "key20": "3a36diYqFpKedcddWwAWGEhS7SKVWCuW4dpSQaqDuGBGBAiUdkVqHsF6ttePZVqW4K3zbxxWbgC28Gv6ZNuvQjtz",
  "key21": "jM3oYceQvDvFf1tTQwL1u4kXPzNchUZvFqLjYKeXU5ZBQqvaAgrgHYsFBPC5XHMiE3QcF6rCgRTi31TybGLBJjk",
  "key22": "4csZL8fuTH9CeGRuUSo3DdkNPDLJ4LVsRwJafXQkbPTAZHhAw6LuY5xBafFzfpmrpnNDNxqmV4UzNPtiVJMG57h5",
  "key23": "477UbRNMpaogbHY43FTBB1431VztnVbz1WriUpboQBLMkoSv3caqsxK4xrgQcWiNB6GXu7hMguB6hoaLBGVQKAbg",
  "key24": "2v2wXHpbnvZ6Zb8Yk3n9soMCDhpEGdZ4XUZtg47aCPMcMBrG2V7M7XfgaqEiq96R3Hgj1TqZzTXPgLZqagux9KR2",
  "key25": "PbgkzWrLtWtdMpZzufXJFMu46Kf2jyh5X8EVjiU4q58N5EbwAqVWL45mvaEq7Q3hn6rBaK3L38Dhz5PEtBwCrJH",
  "key26": "hkVoYPe6kBjxxGXbTYyk5LDN9kRzXqbxXaDatbtmnySzovt1xkAWMbsyJeoenabmkesBfGhugvcZxtNWo8E9sdj",
  "key27": "5krDBhVadHYGqS4aYQ7NG3eyty2i8rRGhepRKPKDWr6S6aoLvmLTDzEuWDtiVzgTwXEZHWzxZaoq6H35TGKGuDFL",
  "key28": "5agSTrDdxToc9zVcQ6E8HYDjPDYTuBL8JdPJyjv6xwjZzQPHDJByjfKh8hbuSJ5bQwFu8kVN3Qd1DqmN5Xzmcfdg",
  "key29": "itdHHLGQPBz8YhiNDgFo5uST52AthfFmSfETuhfaAksmGZUGCzeBfvdzy13k5sCqDZUs9FpK7qamsBWEvEcQMHR",
  "key30": "3iFN2XBa6ZZNSNMPzpnypHCtCfRjFQeph5wiW2kjdqYsCcAxc8eqaLsVVpLCFYjbzeSHPWfXbihuQBTXoCSQKfG3",
  "key31": "4FtiejHLiayGuosn9dbW62YGNXhgihrLoKKVbU8oKxcFHMmuggERpMHPmuVjv4BGTDyCc66XZfh5p8HBqymGvj1s",
  "key32": "47XS32Svo6PJ4hgK2XwPVrkMAeDqqHFAFs9m6wS8bF9vm9rJR9yLkNCB3Kib3XjgbHwwJeR16hksTqgo6g2K9odj",
  "key33": "24xBwfLiEg2AnoWXBzoZjJqTQqc4aeAUnrsg1eay6Qtyt3JChSisZsFjPywXKMnea1ERepP2MinbbLTy1rv7khKX"
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
