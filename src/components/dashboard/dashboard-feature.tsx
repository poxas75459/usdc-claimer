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
    "4tqs2fFgkbUvi53n9EnicwQJFArnhMB4WJSD9oT88AE8q5hxdeDMnQXRw6mWrj3jJStqvygTaeWmPGU5Z7VzZ1ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HUCkhz7BXrd2kQGs4BZEwF3oxZWvMXrMzJJRkp4tUXgGrBazEEs6dRMPdY3cAShUG7dDwZdn7jnHP8cfz68Y8sL",
  "key1": "2WcUbEtk5V2w4DzHVKuZveL78HdGqHbuYzELxR6SqQU5FSSxqu9umsnoiqknmCNj8BTcCnaM3ufarttxD7ovCZAH",
  "key2": "5Uv9YDCfZk5V9ffsvmuv9Kwnivzei9eRAiP1aTLUH8Z5pSytHN1Jj5RAjecJdxNvZbxabkYMp1ehzRdPJ1WC4zdY",
  "key3": "2TwL5CqqN7zfzCErEQ187cdUuE1UHBzVRMnih9GphcF4aSpngpWK6RNBiN8fPqWmyDmiYvLjQUzdWxDo48RVUkcF",
  "key4": "2cmeGb5oEy61N2FVN5gkQD6dF96WfvtkXLmu6qrzBUMNbE5yHm86A28DYwBVw8DrjGPWL3ZzjWy1fctj8qrUyeMF",
  "key5": "2VxW9tMfwVgdWX1PesbzNWe2fkvjNPRupZDkKprhPELpQF4Rdh69dwVYdzBAQT8sitvZWzyfyjwAk9yztMjbx8KE",
  "key6": "4MjMCxh74uJoW9Va2Sytw7oBuQN8e1GJ3md7FwGbwGoJy2jbdFC8aiNjiqh8GUnYKFs1wB8JSj7TwFA982dYd2mJ",
  "key7": "2FEjN7p1wtqSRkzZ1gzpxYjRhVCPsz9G3WXZsaLbkVCZ8bfhakCRrA9CoTAKfMC5dRfQjS5y7vTKQcUiu3LTWeQz",
  "key8": "4CAdDkwfMfX29bstb7En5tWWib6F5xgJk5JzByMmstFhekKPypGqNHXvZ6cPeGexgUvhzAwaa856QsVrP4UtW1gu",
  "key9": "BJbEtdG3fvUGgWE4pic55VzRz9n2SdHkNy4jcFLjcy1TwVo7XJcVE234eFd7mXM31GKKQtNS32UQVjFphymSABc",
  "key10": "3uRuwmrRCDx5REcNmuRcjheFRtWQxgJ7Zrs2FXxvCJYSdxjPjBDWt7TNx5c1S9WZ2Kh9Ne5TVKg8o4AXcf1JE4NJ",
  "key11": "3Skq6ragCueyWx6a3cq1xpY67uWPL7ygnBmpyMAYQQQ7jwtmi6rQZJJeecbv8tC7Hqm43CZgySUS9gezjmKHysQY",
  "key12": "4rvkoBuX68wcyMMuvCLUDU6tLM5fCX8XH3TthgaSDaEPfuyGDJcyAe569tmEz53be1w9btp3kJMXCsSVVcu82WYQ",
  "key13": "58UoodDmp7Yc9hUqyLcfiatq2LnNssXTSBCJNo4tLWpgPDDs24kP5epcc52vhz5fjJ7xHARFQNP7vy67CCSnVgNq",
  "key14": "2PdWw1AxxFPrzawnSpYQVm7Qdt943xfWFLT8frdQ3G5crfCzxEU3xpkAfStYbmeqcckkypyQMxKjzkZUUtdSB5w2",
  "key15": "3yKndYazntnto395xvy5w2qT3ny8aGx5kL1Z3WJcbQrPdZyz88cZr3KXcbhwb9Bw8GArYvpfPay8pHhgsrxRXkTr",
  "key16": "Lcwp2nkg5P7yGZ8cNXhnX6wyr35x3i3ZH4JtWme71bM4yhpVAxLVyifMmUTVchzCAvYa7zqjdc1uyeNbY6doGYp",
  "key17": "xcmUfaJxMcqfUEhF56QC3iwrnobzv4R5yDPYHgFkPjJXXHpDsnhusvnSTGmgauDvAPu66WCzPQnuDkQbdLbz2Vz",
  "key18": "qtSC78v6kRwFrvCfet2wKq8SQuajVyFZmaKoZj8hqrowrzW8YXRW8BCWnMjupbLQ5MBME5vrhskFDSzXy6Bwv8g",
  "key19": "5PHd8G8tEzJfkjRutZBGF4MWAuWu1MmdGg9FaayFYmTkQu4U4CPhpEfSm3u9pERZoDCWdyz6r9MreUC4BhAghFW5",
  "key20": "2tNQcjHxP3TerQDtHVoRmZQ22T8mK2phrEK6iohUXKJyEvVa24qXVxKwDHGTGHUSRzh8Rwv6pCSwh8V2simbJX4t",
  "key21": "224YRSmnmuj7mDJ6DWoyNYNqeBT94gVNLMDdry54qDJq7eRK6kmscHXJSsMtSayeNVyrG38iXcjPzq2siAuKJRAQ",
  "key22": "65aTLgByxbB3U42h49Pvhq9S9pPSd4WX1mmEzGM7qjEvoJKh9HRZufZfzqDfwsiFcU75YLsS1K4uQEMydR4Qqw9w",
  "key23": "4h42TFndv7JqoqNeNUtCnTBN9X7GxXHCAyKeoHYTfzbzXsDrjX5YL8KEsYwSmpNfBm7bGmxeRoAnt7BjGxAFa6vV",
  "key24": "4AKpKgmKLXhYD4oL7bXrswGqDZNKsJoXwGrySirqjFFq8FwHtsi4Wv41qSXLYDE2qDYjcddSJeQX9XosAQnsTaTo",
  "key25": "ZDjXfPifEzsxYSejzgR6hw3fuyiY85hjUJVG5DL5MUJ3k8wJ4tsBiu65Xf4Cv9dGivnwvqNLeRrmgtez9nCHVbw",
  "key26": "3BG24r7Y8So6ZEaWgKmNWnPbWjf2zAJ8y1vTRoPdwLoRnVVDa7kUUCpxJeBggt61tg6ocb8fEUK3LBcAG2JCWaFV",
  "key27": "57JFEpS6d5YMRhmFR2esz1hxp9F1KztBzW5htx4G5eXRU9e2jgQdHyvfVCijQe61U8UmE7h5rEvAHTmAAPJXds5i",
  "key28": "3MHAr6yYtvTmGXELhNSVNT6BUEkgkhWPENsTX4oxNxG9cMLxJLtx8gGAZz6VYPMbpStqPAekGAXhq6Vb67AB4uq7",
  "key29": "2SvuJd1kWmYZhrE2CPBn1bcb6cpyK593RAv2F3Fsj58DnEt42cQkZX8cw3vm66FvPBscnsXCh1thEvb4ERUid82E",
  "key30": "4gHjViSxSDuMooM65tj9qksTSy1S8xduKQ2Xgua2KTjfwg2SLUrioKYdx4zZuZ4S399vY9waVJn6ZPmnu1Xm4wm4",
  "key31": "2nAKi72o6QFBdViNM8srYVdTaRTs8HHk9nXvWWAeP3GxmhT2szuWs4JZZhYWbCQBqYVjkrgL3qsPE4cZVYxhesD6",
  "key32": "TxZ5Xp5xW5fE5fFSBShnD9yADEhVyA1TztY3QnRfNa9nZDsEcaijuPNoKygHTxzsvpKnXRKTKyEvKhf6YiwgW85",
  "key33": "64Y2jANMgpa33iCKvsdFsBvQ9YsZen53FDbzNkQzV2jmuR5xpWVQiT61Sw9unQcxun9mhXvYC1gfsEos4VCF4zLv",
  "key34": "7Vd5uabNqFjWWxNbmrPB43e8FNod8GCRfQTHqAn2ZHwV1FTJrxAW9aykETxQyrTxphujPiHxvokwB5pDdNsyPYn",
  "key35": "g5pWxmQggB1pidc7JK2WQ1x3bdcq6x6JxVugZN3UbZuJXbm2ZqVKmgSYdUnfXDwFJUb11uZkgS1chgURXXdgPVT",
  "key36": "5mPeyDeTU9cjXSky49eCwSt4pzYYF1tEYnoKemnRGSbJj7gB4gizd6v2g7Wxi5zcGMQED4767rtdm7VEoJuvtgh",
  "key37": "DzkczjAcce7PEdTEafYLAC1iy8aHcdX4muNcrWq248dmzjCnHzhFRHNypF9AQwzX8UT3TyPbAe8dkmgmK1uuNCa",
  "key38": "4H26EJMQMPwpoZBPhgozKSCjyozkNYeWyKuSMaz6VKSxbB3eNCjBzHa32zs4z3gFx1LeDmkMKFEDY2BuQuiAZvSR",
  "key39": "2o4oibfgcZufn62Xbs423urFjQ7KEWnMCDAHiLxKff33bTp4q5j5W65JBhYefMHVRAv9dEeLumMeRcmopZQCUZKi",
  "key40": "5zkQ2Ta1gKHNKECtxTmHxAHQoc3HyF66gntvkH56A4n2Z7MEem33TmYD7Nrfq6koms6T6QRNK6b5NxWqRVh7sG1X",
  "key41": "4p7j9kpk6NK2Cn1qG2PtM4W52fZCbEHnqNodFt9cUmoFD3ppeWnitAHGqJJUk6puUEb5wQKvy4dREHQVoHdeNdvo",
  "key42": "D3mAy6ts3BHCPZpWt42Si1t4s8d5pH6L2Vaqs56heY5CdQiYaGR6vsvoUsRBRMpL6CcuE5r7dqR6K5NqKox9YYf",
  "key43": "2SpsqQ64qvhjBn6ksfRrrR4u7dtZUBSYeWZiJpr78vVJqChvfePNVsnsnMjqCHzfNtisWnEFnHk72K4y9BnPoq27",
  "key44": "4v1iADmJs6XbUUfb6pQLfF8d4AnpW8LEzyWqu3QiuEcAqoNznwJ4PWTmuoAySGEXkiuvKx41phQXipqvSgF8GBx5",
  "key45": "2WDiGsQ6FaetCi1pBtW8GKPPLRxKZvzp9abnF7ysjRVK6YFcGw3v9bo5KNcsXimj8QcoXfkNbDDQJR5p1GQE8b7r"
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
