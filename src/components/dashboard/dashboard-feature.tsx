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
    "2pXteTm7FNjXnRLevaAocA7bXgHDhkKKpLWVZKJw8cWuNfDJBFynw68dmBqecHfuezXFci6idDyEXA1UNLM1Wnwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VvTC335GPjfSZPxrutT6H4Wqanz9EUzHodzkUntY9qD1ayVpPd6GhJ6LEPU79gU5p1iyRnjk3oLpwJWw5Vh1f4F",
  "key1": "4Nesyje5RQZPjKmqoMzB3PLLwjozJ6UQaXY6KnUNRSimZieHYDH5oYhFpNTGLKjhsynHYhp69ewsTUUa9bHfWxPr",
  "key2": "2Rfs5JuaVyZMr1CN4HgFZ6oByTSeyBQNchE3P65QUyGH8WhKY3FUEosYz3dc5MGFvB52qSp4CfSj35wKSVfvqLu5",
  "key3": "i5meQ2j7hMLtBERdna1DBPLDMuYVmdfXjZvAjiNc8K9LQ9i6W56doQzzw54SA5MF4vsyKFFCr7s9jZ9TfU42BA3",
  "key4": "5YagvwLWv5vscqpGsZ76eSrjm2eHftjdj8q79EtpP75uTX9cC1QQzw7W9wAxUbimdfpjF9LfWuxLgheh7yBQrb49",
  "key5": "4JurbeC3skAmFtvibyae44K2ddivDsWD9WfPujiE67b29BC1vCaZuSDf3zstE46MjGZs4eFPHBGpPqYEVLqWVk22",
  "key6": "4HnxHyFSWy4rRUe2ssHAcsAe8kpzjauHq7VcQybCcrjwfEvAjqrVoL9Jka8de7wg37fSmXYBeYVd9SvvLQCajcKB",
  "key7": "EwWoPAAuWptejfix9zgUwzmsDfdcKM45nLhn2boakLJXUGdhZBnPAoUta2ybyPfVfvkWmxfoiDAR3a3zPFGgx9H",
  "key8": "3P6LuF13iXCZurbgRu2ajd3fn7ZVkZnRLfpo2oLHfwFpPuvCPAwGfSh7o45r3ZtV5WRSLW5e2b941X1w85VCtMZP",
  "key9": "3HRWqZtZaWcRE3zA2o2NmwVmQtKgbzFwYfNzyqQpqtTuTvxWQ8ykAqhJkhsKapur6LPpi4GDnbojCEmbt85D4C1V",
  "key10": "4uhyD3XygYAxXq758bQDPA1hLq7gxT3iA4CzaXCmX9SLPdZHbbTjdgzVMoXZZXzD5F3DPvyJMJVbjafQ5okDjbnH",
  "key11": "5TokgWJKKYRHaDWQXBLfhbNoM6C4PfxcN3s77QCbmtvmhaRBzfXLgqbX7hGNLveqrkAtPzwm5LBzYmasXv6kd25G",
  "key12": "46yQkffQGzcCYkSVn5d11YLUDg8bGqB8o3PWBFPxv3nDhct93Cvk3b3aDzq1YHUNEJxJ1rbi6QxqxRWEyLXahwEy",
  "key13": "4oMNpzqcRcNiVBmkDKGujudv9kbFmoJTcu2cWv1hP5iueMCxCyrFvu7YkNBnBrtH26nbjSoDt5bVipaSfArnigzP",
  "key14": "3gDuNTHY8P53V1zB172vzE1JMkRZpHFwS6r2TLNebGraq11KHXZ7yhnziVGo3iJZMfCgqm9W73Gt7X4giQUaSNVZ",
  "key15": "3hzydbmBKnPAUyCiV5b9txS8s8Fr3bZiLZh4vZWCiM1vbsqEeyeGtDAS9QVxoQ689yFrg3KyNaJxfL6deeu9kxKU",
  "key16": "553bzKrkJiLrcz1KcnCyAgShPB2A38waQVkHdvXq2fSmdWm4u72e5bQkvGNjJGHrcWu8FMsE5SoqA7aNbWK5U5nC",
  "key17": "5MuhXo7cYkThqSkDNWPsYz3PPQY4uYpzsVEwevQ6V8m6M8myJHn9Hw3a2UpTbARmD9pjZUKEJiEq4c5Yqffa9oB7",
  "key18": "2RqF7UtTquQVCG5p9ikHhuhKwhq5mcp8Yg2mTwrarFCpMFqTkxuXXXYadrydcgen6bXxfM9UuAb4HY7XvQXhK8jd",
  "key19": "5CT8NRfxToUHEjjMnVs5v9RDpf8c2h3uvM39hh5tvdMcFGKegoVgi9REYSH4CkHcCjmEmnm8cbejCoJ38qkyR6hm",
  "key20": "5PVzahTwTjTL3zoihAdYz37YQjvLy1477mXrMaJTHg2DaE75DCBKMEqdFVpnPqj5W1NsYU4Zz91YXx5BJ4rAjEzY",
  "key21": "4w7DTKU8zwiUJk8URbxgNz8htP2k3G4xcNRKYdp4uuaf92Tg7jBHhqXs15p4474dYK1ESQWbyQ92m9s18C2gASxt",
  "key22": "297njZ2CTWiZ9ZcsLSVz4QgkLYvBHyM2Zyo8fYpNWkEWNuuntXSkahyHQSs88viRaPMxMVARPg1HYj7EvBeVoutA",
  "key23": "5VkhtJk1vZB7cfijUuSVifBQPM7gBgjQXkJVqm7XGfkK4sTy3TfjZqnbPW12mExPRyiNG96MgmiTNGuVPp46EHnd",
  "key24": "5ycMQsd64xWZx7NFQ6bZALEWsr3iaDrVTBVdf4WkNozRy1VU7Uyp8tbtoAj3iQpJaevMJ53sCzxr3mjeHnh5vpB2",
  "key25": "2W1bEnhDToyFdj9YFXEfwNvVTcMGTRgetteUrk1qdqB9LMdCYjqsY6nHc59dcBiLGhFZbfrAVAbqsftgZz6Abrjr",
  "key26": "2dkRcHvGPbTq8AZYWEELa34wDvX69FpkqeyN1EnUB1yvGkzPeC7tom52FJqx6Esg3NuJRrfwH4yqPT23dmhqRnrD",
  "key27": "4MKXm4SpjKjdxYFLreEGPhWZqYSmzFqPvFNs7GRcxcky84oLyhGA2eKsnew2YzQ3nFdn9YjE3pxqPgFDnJueiVA6"
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
