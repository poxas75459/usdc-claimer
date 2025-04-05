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
    "3ux954r6vi1ahog5X7wMrDRGzXFVNaUEHVBpiBW4uErAZUVnYMHbLcgR92r7tECEZga8AMaKZZp1r4A4QVVXo94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHiwLbVNmnxy5VqFRRcjvVRRdBqkDW7JE3NA4fQ2K7Qh9gmcmhmA48vRHKUcqdzNQLVtxpYwVFo7wTGk572fUDB",
  "key1": "39WajCpN8ookrdDu6UA2RcfzaoVTFDvx2k6wtqDR94SK3qCRcYzZR265MsvgxwSuMjaUCTHXhkcjSEtw2Haq7DqP",
  "key2": "3k7Qfw9iG8C3Cs1qFGzAdndAsZXM9pjJ1HW6EfU73aG8DWq2TexxJUcBn47M5nZiFrMTN3huteqcs3Be452ZvPh4",
  "key3": "4ps6XyfVfza5NvVn6PZmciNjPyF5pcrYBrpAW7ZubuzGEhgPY73qVCLmdLoeXAR81JxPKxyQjcpXVep2aaAwiWiU",
  "key4": "4Z7MJCuoP4WULzKqiGb26iDnNiYdqYB2WXDLo5Rq8CuAS58j8mLiriAQ1YUuEL18bSUU44BBmDxwGjWJJXFsSwkV",
  "key5": "4M6MQPXwv6mRB9pm7QT2v8rWkytfV6TjQaq7iH7vGwdMf4bPnHBc8yv71yVxRs7zJrhKc1PC1NGXYpP82hxaUkre",
  "key6": "21LQ6ncK7HdBp1KitWXzqsoa9Ee4f8MxqTNHweNxkBMZJEYdrtiZuHcjychD89CBbqmSnS2iBUM3ZEab32TYxPfc",
  "key7": "Cg1EXCh1kEuVv9q2Hkgoz4S9cP9M1LMKeJSmBhmg65sB9wqBofTBwZxWufNF5qb5M6W6ZfqRLtYE1LTfc7udZvm",
  "key8": "4MJmv3M6WbAWrgwVxtqB3stM7vC4Mt1azEeAxQz3JW5uTvrB2NFRbrzTJHE11a4karKhUdpR7JTL3XXJ5Tkz56Hj",
  "key9": "5RapioyQ9xbX5mUerc8cCpghe4kHu2k7wFSJhquVNQzwibwc3khXmzjnDwxv3zK8jEnPvyWYe5yGK3hYdfJniL74",
  "key10": "4ME5wbD6Ao39nVC2Ln7reD87Cs9P84mHiP44HRrmnNNCkJwjuFVHpLqWHxZxbcekkN3nfenjVudBoHK51UmjSjiP",
  "key11": "5B6UB7ZN37w5CeiMtUrKSPzicAQZFsEyDz5Koqfx4X36k95gx5vFS7hjEtxswuQCgasUH1sbgU7D5S9DyMoyaEnj",
  "key12": "3JnE4cEdtzYaroeJfe5io6bHrZVpY5fKHFc6JcBLiLDWxchV2ZyhwsZ382c33EbfME2bJgjuakVv8nvMwLG8qCjt",
  "key13": "63fsEfocg7CM1QhTArHnvPxns1zwaGvuSX1VWuG1nkLgVbAYgC3hY1hz34GgM26MxDZ5vgm92DWPvbyUwgepiKKj",
  "key14": "3M86umHbcRkRms4w2D9uAoBmodBDahgb6TU4N93ChgLror6mhxEea95N8W3T49gqxyF4fa68zTu3RHzQ446c36zw",
  "key15": "254gGzYE1BftraGWZ98d1wMsHdyTqmYKy4XNNPaWtzqAhR3xWr8CXiiKZ1Yw4154kcEphQ5hZTdiJ3NHcdYxJhTa",
  "key16": "3AaV3uQmzFVL7YStMZ7TXuEJnYGXw3VDwLfbWKtV9D5AL3vzUnr3k14KjstqpyMQsGpmjWzg6NqJDiHCin2Buymw",
  "key17": "4jmGh6pd3DDwn1GdXbqjwcFbeQt8WF3t2VKt5yYfFkm8zxXwz4fJgVs8Km8ViGsYmJ5uMhEdG3xhw6yNBYoyG9uo",
  "key18": "z178q5jQCXmbWTQ1L9aCmXTHvwdjpmEipvd4tsGbsUmxbDXnBVLSSnv5nD2o1SJ3KcBzk1CJauKZDZjvSa6oKNS",
  "key19": "3YXpDfuvjb9FXjd2hLHwkMtgAh1PZAxk6sYQYWmZHuiFxXHMgJeaRMnmVqvtRsPG9UbTz4voH1dv3vBHJkUS76XV",
  "key20": "5j1PdVn2VeWu7bK5xjhXC4LMERBcF8ubWCvYaNDkYZVxjs1AeHXa3GoS8Z6Gnu17vokG5N1gH7rzPsSdyzhbWB5A",
  "key21": "3hjPQZyfFxwKs7oFw6nAJ1ErToiTZwHLvwV3GRbaEX8VticjrWTvMQxvq85keytekBF3N99tgCmEo1MtwPJr4ywg",
  "key22": "56nj77eHBquJxfL26Ldf7VsYvRm3XgaBsdgpnT7QgtQ4HV8HFFPACPeEMvGZFJpzzJFWd16FrakZ8NsWPhCZ5cyD",
  "key23": "P6a2TqBidiaTWaF6b2bDXYcjpEzLVrapXQQJ7mjCyRuKuGPbTq2Jg9jLp1NDEd55kkC67iaRWLKJmYt7zJK9GRE",
  "key24": "5sViYz7itWtsw8dEUwPW8m6cWzDaWubV5P75ku8wAKBEBDtjVVmvYuaSzCAq9hjpStEhRYHsJQG2sDEsRTzu3vmi",
  "key25": "2hi9wRSWvLaGALgbTfZXKVc4FpCmimxJthCPRzR4UvJwg99fqeComgqhztLt6k6tqckGLnXg6ZFtj3QNi9HeF6NV",
  "key26": "2J1pvGXyEDPDakYVVfgHyrGDQr49QNm2EgF7HxtbSngUjvELpXjg9mEsxf7w228t5bwShib3xoQcg2U2R8bncdVC",
  "key27": "4Efs2vk4yyWJR6emkxtAo5orULSAHssFV1veTDCyx9XpUMxPkmw52qBR98EUgJNs7yGsbvF8guAacxWLAY4qjiky",
  "key28": "x3XubmMQ4CtHj7iyrobzX1eymogTsCbqVeacce3z7P25kNvnCk2uoQyVG7XaZDmzQMh5wQEze2LXJuTxLP6rpsJ",
  "key29": "2QKSQYXjKTZrVSYYVvF1YfULTSobyJEf5zpT4aPvC2nb3M9JVMXsujbvZ25SqFPyJHK3CxuvZ2jLQ7Tp8DbwMBkW",
  "key30": "4cUazG47ZYPAvGE7zL7qvZDKqCjMUHPKSZtqd4g6xy5EdcMr14g263UBgGvcN8v3jxySm8RL5up8Lq6Fh3PwxTdn",
  "key31": "24Z1iK3dL6GpxhSMqLqonXPAu1ASQdamaMW58N7138N6C6gSBKoiro79m3GgvuksnWytZY7V9we5qqWjG7xwzvCW",
  "key32": "65ZZhi4KvLt2dZM1GRMmZjk7fdHu9EEPz2aGKVehiQCyhpDau6HXzgQQH8qxduo6dena7YwKpttNUWzuS34dbdWU",
  "key33": "5anuQt3bza3KbmkbqhbsUBZi9MeUJtqGYSEyqMTjg7zkx5xETwxQNrCCp4Mfx46Cnnsb7TshBcyTw4yXuUZ73MEu",
  "key34": "cBpSyUff6cpezNNoEqa3xDdbUwJMue5WJddLbmYFPoycvT9AiU24CvAPdTAyaPrTtUhQLkirLBd5YEgd4e2VMyr"
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
