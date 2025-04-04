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
    "2AY2N7VUqm1wJjZMuyAVM1uMyn1sn4288DmbjXGYjwZzcBt3hzLdf8GSGXJFwV9iFKY3fMirHPMn9qsn35ypwBHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQ6BoTDABi3qYE9HqrC182EytpGQvS3Gt91A4hwhn7SP5uoHrkB3GNgEUkBvbABmtBFGJvAySAUx7mWbxQRqqCD",
  "key1": "2nFFRcB94b2AuVMrZhqB3Qhnca1dheJDkf7fZrzS7QnzcDqCGFDvvEJX2T2eEE6R6Q3d6FsJFLLZoGF4GZYXWFoa",
  "key2": "5xpJM6FwYjCwSmvEEJ7M8ccw18SYioYQ25XuFe6ajCrX6urn8zeBXW3dbRQN5j1yn6g1ufkqzRihcyUfkhoYBRQ5",
  "key3": "2gVcyKDnzz95qeZKvchMPNovMnBSRo8gphsx5LXCYCGedtyLkgeLzPsRmcyZYV3Q1zKQGJKQ9gxQ14n6fsUcvTL8",
  "key4": "2cBxVkatMq9DupUJFN9Fmghy9itAfa4Nb637g63prnZ3eFMgr49ZaGjcwCnAEJm3fiExt9nS9tEbYvuuk6FkuQyk",
  "key5": "58X3JWG3eG8f2no4S8CkwMBFNJUHrmPTpHXtwfKWjPWpTiaL6aY1daRKUeMA3gqHAN397bK2C4vxi1o1y3xwTUZh",
  "key6": "2fYgU8RDP7aCADSeyrvaqd829MzubWqdZ7UswAXcUCUeMwe5uofwAUbbyipC5N9r4xrq24fuepiE39CDYAy5UnR6",
  "key7": "55ANzBr1QtsCeicMLSNnbCT73dHVnJ8PZ21RB6u7fn878NiV1WouujXPVq9udz887jfXitK9hTEUjmu5tQddU7y5",
  "key8": "48s8wkuKCmNtDFnU9AA1aGTGkuLyNSraqkwAY6uhRGdsHsPFuZHEXU1xrVhLe6QdZWER3BeKHvhHWQW9wt6f4YFU",
  "key9": "5Dnx5cWpDJiPMmn3pyt4mSDr83mRhbpNJkHFAPJRTCA811oAjoamfZtXMcpqCKyJDKGwtqwreEjtA9ZqHwCnNtae",
  "key10": "917QKsWchkXF6DRPpPaeKnz8sYPzwxE6ecsTk65MPfsjnGr2avsovKWdJZeULj3wt4f4whVZWba6yBDy2Ykx14M",
  "key11": "2vjuhUtY72mxM1RSW6XHjno6E9fCroHuhBHbnBQ6ADSAKKeCWpcxEVVeoKabjLatAVxDCLJRcwHK9BruGSb4G5PL",
  "key12": "5dkXyGxxk6L3K3o18RibZKjH1AK7yhBUUzsdGFnT2ajZ3aELFaRdaKHQAvrX8CpFp4xQdTNGA8gwpaBxKSW8F2ty",
  "key13": "5DbAfLEiUKz8SyASJKRgEohD8q1qcLWhE8oNxoUtDDdQY933kofTfByUXZRZf5ir8TrNV3y73BJ5UH8aopFuFEv",
  "key14": "3vG1C7CJWiG2gG84tkXRRcgHaDLW9kHUETJSUspndTWhnwLRkbySnjosUSCQPDYEBNJrDuQMdcm68TydykVtN3ez",
  "key15": "46sVBJqxmBjixn6sHTUgNke6hHPZkMwgEzcA3hHsDeT4M76VX1xmGZVxuNGTcS4kt4KvUrMZdvVwdrhcedco1uvk",
  "key16": "4fnWS9UCwRiW96ESxQja4eTFpvKmEuR3SagBwD7W9FnywzBmhFsVpmAX64uRSfhvPUB98G7E849VEAo1MVCbMoLY",
  "key17": "5WCFKDuCGNRvEU9CLnVj8taRvJYCvq9Z6rGnrHWoAvFef6wZdidTe1Tg3jt3ckUCZHtDeNGLqmsQJwCpoed2xQFc",
  "key18": "2HeJqz78kiaajrkBuP9EG8GK2Ap4i1pfytWMyurxHtiCX8kcYQniT8eBvJLDrQ7HvvoVCB9EkF9JMwDskR7PdpVc",
  "key19": "rmp8oXYgyBWf1KA7Ycxd7mi38Exqi3FgrZ2eHbtqUJf8TC3e3JC1dgnrPuWEnyPFpZgZ8xmrXrpjZVNUaX2UVYQ",
  "key20": "XAHv4poKLjh957VVcGKZNxytdfL1SKw3qFqZyp9srJGMsbZ9T9kSCrBfz8LkU5YsiJ8kq5xfVRhDgY95usp1R59",
  "key21": "5nNVx786KE5KGe7m4kqYcES88zgoWQeUHXpw4PN9TBh2zJv5tfGtRrwzVakjrmmWA38gNkLTNqcQ7KV2i1jQNfhe",
  "key22": "5j7rqMFawX5xpqcyZ1nN9CXhSN9wfAEVJeMM2amKECaRzp6vPD28VSZhXMoenxKWifVk9isQX5viiug6wtwnToAM",
  "key23": "5ESpdUyXxszWVTX4b3RLPMx1SmqG6Pi2VfzkJBikSMjrvggWLoAyfXKpfDEZdFMkPpMu15ZZXQzUvXSd5eybjW5r",
  "key24": "39suRmREwU48crjmsDmTjcM8VNQ3vmMeEEjAiadLyrd2Az97ctMggZptQ7eJ8X1thALWzYiXf4ZTUDeeXqXJ7WBB",
  "key25": "33hbuXPztD3ZbQoGSMppJGf4RkSyy5sU3uFxNeMCGUhoWaez1NTk7TryipxNhDdHzzanPLXSwsFyumUnPD6u9chx"
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
