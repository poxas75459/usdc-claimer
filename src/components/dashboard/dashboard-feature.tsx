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
    "2n71BjmHSees34tEcq4qhCHKFspRi45MC4YmPwjdt3WK6ghA4P8BVPfNQzrJ9AnRfFdJiVCgTbGWmKV5eWP1Rg6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXbtDXZ8aiaKgsc1babeiBBbpdJV6HfKdZF6v5mfX5B9yKtJCnJy6s5ajNwWGwTE8n4WCNtURRtFLCBrxfrWAxW",
  "key1": "5cBQ5ohUn2iBpr7fJj8pTbZX8fLWd67CbtiQqtSindP745jmtQpfS2P7txHNWECfJCdFkWGTfMXAejjCqfPQuMUg",
  "key2": "FK9yUgiKSgxieK5vQzC1NrywP3Jr5jVPyni54ZaVXMeoUs1HWffZrmu6KyBuaUCvjyScXqe2MPgv52YD51XTMUy",
  "key3": "3YTQChHB6QZhp2Vg3DViB4FGvzoov14vAa5EncsWTQezHM4tYvSRcrteJhQneUAhHAB3tKQhhNUNgRmWYiwxhNX6",
  "key4": "3Ukfm842mTh25EpGsAKppooKv2Y1ne9kVuDXD1qFMmmid9XZ2tystuZinjTS4FgDCifzRMUFXXNKGqEomBTdL5Ra",
  "key5": "4nCXrHWRVyjG465wBapkwaXtcjYj1G5eiZFWFM87iHiKZiduhDfGcgphAjBbx6tAjwXTSxyArZVXMMWtKhYDgivq",
  "key6": "5Rue6EVhNd92ykugQ6MKutwoNRxU8UXmHaFFBV7xe65afQKTCTCnqB5cexad158PdadW4rVVQcSYwKiQb6uqpJWG",
  "key7": "4JhVMBnFDeT9hKM3L7BXSbsLD3wUG5xvvWNrsig8asKtT4PM5k3KApGKnjbTt3aubiBeHvGgeSfV6EPkMXqXSndT",
  "key8": "3msgScr8BU6xR85h4ssrJTd2eGuKxTKyK2VYZyNuwajYzuhL4NuWiKUt7dKRsXdzFjUM99TxCqPcJJQRyBcAraKR",
  "key9": "3PujUCcDVAxYESeqteCcUfQfN7gQX9kK49pD667ZkevGuLKBDBd6a6TAfaCM2ZrAnaEyu92N628PMUV9DVormzf9",
  "key10": "3KFRVpY4Xc865sDKSar7FvsLqfmvkUzR7tHLnPziBcWyRDyTNQKvJU3qowq36W1X4sD6ddMjbE35ncFxuNumKM3y",
  "key11": "3B1MfYnfStwm95jQUZdt4yuyEW8upS11rQnYehaKSGVtA5pzwJGp6awEAiUsM6rM8izw4WHw59XiMRbDBFervvs2",
  "key12": "5Tx1urwtSsBRmvNqWcznmiNk4yHmTnPpQ4oLd41tnd24fS4gtM5JwDeJcuxJev689MSRwWVARoZ6omr3pCKX3Sky",
  "key13": "3iQQKcgCHfanevhJXj7VH4gMGuEjhjbxuf6676Cf9cm3jkmXEQPacfQ15ke8RCGheEi3NMFHfNbTfR4Kvfb7fQrj",
  "key14": "5BiGWLN6Yw2aUq169BrSshwi24Byq5no8UVxvt5kTSwu8nhtfZAqGvWHZqLDsYVLWjfrpbqioX4d6FjHYNo7xEX7",
  "key15": "3p8sq77JJYjLYyEGESsuaGjX1hjfNaoeqJtripdP3Kzw3A1c9rca5WnQu2RSrCHRWi7JwiHcAv3X6PAkUGXZEQbY",
  "key16": "mRgfrGjrbk4F6i5RKRPhiWeMPdc4in1sdD6Kk6TfZZR1EJEqfgnmkpCYG5wRetAdt4zup1yUqLtMSnHK2pMx9xV",
  "key17": "3X5jtgRCfk3AEfMzjmo2ChhaXxSW953e2tQaXZrGCdwxsXtVnadQcU5PKUv4o54UECby2GsuakbRfx4Gtp5kfhw6",
  "key18": "2Xh7cfYgPVBwNPyTWArgdDJVbj9N7b54d56ornB1FQhpk3MqSQ9EMdGHGEomen3mErFAPjLu7m4fGwCd5NDXRqQd",
  "key19": "4NhMkEieqBy5CpN8AndWDr9KTCyopazPvHavqkEaMaF9GRo68rextkvsuTcPz3LDjSsa5JVpcLXkFET6YPUC3wYR",
  "key20": "4YXuUoWrPGSVBc575sfW2JiK8zXEtd2sgbX4tdVQoxRF65ZeexiedPULtPPwM5EL6Na77bRbuB9rPPp4oKB5AXLz",
  "key21": "42UkEeqXeJ4g6Jq3TfNwbDcbmzKR6qqWLQqFDWiFNUJYEruuokaZsJYRdVRS7x4JAaMkz4JXj4DpjTp2e6q4JS6m",
  "key22": "hszM947tNoFYEYRhgLf7EZ2cLUAyPUsyE5zqCv3U5VQ2GHGYJJjUqgry3zwWUstpgPYrLHqzXDTE8RzqemXL3Tj",
  "key23": "24QRqqWVVxQzUJ531a8AkogjhnA5n8DpFbVVC8Ryx2Wo8oXB9d9Gj7F9vWpcLFWzn66LJYmDBCRgqUZ9Lumy3HVe",
  "key24": "5hkZxGwD736dGhY8HYiXmHEt853yeZc6CZYdVVMPuyQEAev8qxf3WXAbYnzaTLNyXPT13CY8G6d1cRHUDyxsRmNG",
  "key25": "5snnTBsvgd2Q5mKEtaDaifdyfg6XXpCtsU4XEdgHrR7GnxH4VpdigSJ58pYcRCxtCx3YwPkzMT4NKaL6mAzByrt3",
  "key26": "4UArv6pYfr2UKVCLSMFacvHJG8vqZovAtdhYwZSqp3cnukJrwczkcauLeEy6LUoZk8K7v1JGCBcqg7M6Xo9A2pdB",
  "key27": "a6y5kYiQ6fH4nAXdevpiNKX5PKoPQ4MgfWZUo2o9V1xKX5EhxQBMHGZwGVFjzTNhoWDgrSh7j7KZUq1yzdGe68X",
  "key28": "64n4G34hc5HWsVCf58vQMoJ5Ucez8ChNKPAp3RZNVFYvNqDzarYU9sRY1Y6JSJpFAxTQ3wzJBJ7A57eRcW2v3byU",
  "key29": "2Wrh8qhn5ZDFiBTuFbxMztS6K7sonfW7fu4EPehuT8jLV4FR5653bnAaHWMaX61FR3v36ZMQVJ6xEUAbv7cCMBDK",
  "key30": "4snobGMTr7UZp3pwEdyD5pipiw1JQ1gdC16c69UkzdDwzYFUEXq7kr8tvJd4K4KbuqZcsiRF4fDMEtigVEyedNMC",
  "key31": "5yHEaNDEei52apyhEWc8LZXQwVVJwsQk81LruK3q6DUXWg8yNrPj3NZnZ5ndjJ1aYkxUsJAo7yctgBMwb2FiGnxH",
  "key32": "5hPLLKzogCnQQU8HpQGYS5CeLJqcV8XgHRpqUcyZFG8MRSJetjRNutLfBXKqDwk77bHwVY86MEwFQZTyAuoEsoRv",
  "key33": "3SzowNFkE7DjKPPpUzi4HZgg9h8fA4cT6w9Bw7fpDjzZL2n5g65FqNVn3mLXHiAqcZoThDZm6avzJM2R84cRpTM6",
  "key34": "3itNo6yFx4m9UKezdHVdYND1SR792g6MGyXjh84Y63C4q3gee7VrCo8VBcnn8Re2K8RSgxYZbBJ7MLcFtZFRFwTs",
  "key35": "4aj5Ek9CxQooBjz9ntFf6HkVeRUMStbaKHWFZhknZoRmiYb3369ACtHedsfdQLYMdDxqFyV33TXAN8LQ32XqKRec",
  "key36": "5RjaSDn8CZATKeNDiEBpLkMUpHLQuy84jPnPt5r1qJtrmuBJZci8VvpVtFktN3HAmr41s3JBefhuyixQvCWHMJFv"
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
