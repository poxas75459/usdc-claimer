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
    "36mqXKPQiMVuE9CxzkVJbaAHL9eir7g4PNmZhFJ4YhnxcepyC9dhRu75TdW3pa8cX8Py9Qu8Dte9gzadTvNf5Guh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyMED3UHnNR2FGVJsrPK2uYEynVJup3hF9Xr4YpziqySBZEF7K8CMgDDEkDAtRiZuuMP8yJisC4crEaqXsrB2DF",
  "key1": "4XAaWmvkPSzTKjdRFVBzWbmvC1ASc9zwPFJQFwbEv6UEE84ZsLvc1mAuUbh7nVLLi6Fc9uLwxazVAFKbB8XjUcrc",
  "key2": "51te7ctEYLyNH5D8SQhi9TL39XixCwVuvA7rae82kJtskbmjPGkdFCAh7SjRJHdseKWR22fzMsmCfAeCckqReYFU",
  "key3": "3ukFQxTQFNd8NBq23Hy5RErBPkw1bGneK5G3prwYwcaFKLJa6WCi2LsiYKQ2SamPzZCAjmWqbakCVah4LU71MWUA",
  "key4": "5UzYAAWowqpN3sXX4xoeRJ3i9vfvqv47iGSKYDXXnbmYV6D4D8Fm5zv1L54HAcuUu2iZsrRhEjL5im5QjxPy19uc",
  "key5": "57ibgjSzvrLCzsoFFoCQXF5FtwPtWxSU8vjsyzKTJs6V6FUhWLps48woiGCB9uDHGvu2pKveiLfuainZBwbfbkSu",
  "key6": "4mD7N3dnKFeYBmhMZqVPisbyVfQ4BZ3bLNN8pvH6GNKgGeSNQxsyHLsHxNSKourNw3cvn6fApuvMHRVp68YzwNJA",
  "key7": "58AghPBPv6nMsfj6YDa4vifRFriVefEhww6bpSdb45KanwYxGFJm19Nz4qZaMPTDJWe4mCYjx4gqXUrq7SWoo2G1",
  "key8": "35TfaypZx6zCKVt9kvGMvDdoP9HUNeapf3JRWbeZWkbyWzW2UKuSzKC31k8cLgwDHJgd3WakVf2VmQMPy5nCzY9w",
  "key9": "5Cm5jTYFghckLKBzNaQqZuEDsFtCXCH5yJihpWf4RNDyxF4mdUicfrhJBCxpf7FKqRkAjyD4rXSjePvYwoSnQMuq",
  "key10": "bBTrQ28r7Wa6khHuFZK6bkU1fK8Wntzhony3E5q8kSirFVDvvPT58PCWUyepqrQhTrTDh6DXyqZtmPaHr7uSNzq",
  "key11": "5ZW4L5ruksWUHL9CWvJBeRghWJrwvqJzKUBWe29xF4qS55DNXNEovBTpKWeyMDXTVsHixRvy8H5ZspxiUZ1BzGLW",
  "key12": "3auJiVV9GwraPqX36QQpeiSvC2cF78qsNPnU91o1h9krHzo3q2BhxHmNFU6mrcBXjhmhEaD1K71Cqno4SUCjZv52",
  "key13": "4dULhsFF43pcqJGJFFiZL4hP5fkVMYaUxge5UvT4NNbE4JJ8H92ZXaccQV25MU76bARhdGCtNkrAC62LFefUod8R",
  "key14": "24qUrzK3d5d8qoKz7ooqjJHmLQuC9e98x1p72BmuABSRVVNLY4TEvbYZzSQQm1Yv7ReHTZ9nY22p5pkVoVhUtgrm",
  "key15": "vxioNKAXUkhatjwGB4ay5oYG5nvgmdHSy4yvMrxuKaLtVHCveJUvUYgMe4YB4fqDk8NRWx9ZQHL69S2X9jstPV9",
  "key16": "4VmT8Tra4hqwjPxyqMVwueNufjKRv4TVjCwATZgzRACJ5yeggUDe14pcHBeTvEMrEJ4oKniY44ShrH6Y8CZX9VpU",
  "key17": "ER5EVaYrj81B9vtNnaKSGC5MzN8J4QzqQDayYwnsk7gA4juuFFReCARg4YJrRgPogXAHszpofFdbgQ9bBEx5C9d",
  "key18": "5fUSFU1a1X436EQywsv8NpPk6nB8sPa6k4NLZ79H89vFcryQ283JciyHuF2BrTE3k5VkPt4q9xyjL6zyUrvFvw79",
  "key19": "5KLTZ8RfsCL75PjtPv8rXEKQt2unCUADaMi35YhiP9SFEDZCAHxfyEPYTFY5AG8CDr5wy3bna8mEJqbn2yLMtCDi",
  "key20": "dEmBSrJt5VqfnwxAhkfvKGHJHUAWkekaqL2UTSUz3PXnUTXVm6SfwxQvmy835dPCGHpr9zCwD9NwmVosUQ1UsQ2",
  "key21": "pgH32RcKqKjriZupqCuS5hVq1hu6EQdjKLCr8ugBwsfVMgwB9SZKaakrNgfxnAV9td5XsKd2t4tqKw8MSFzSec2",
  "key22": "3jDEWLQ49SC4hrEpXEhARUWEtP1GzY2xXY8k5Ecssdcfw5UMsa4i8gWN34uoDxKDD9e3Zir7aHujy3Hxe5QwtMdA",
  "key23": "4AZkCBBMgn1H38XSZqbNhUP5qgxQqnY2YNWN5fHLC9TqSrp6tTVob2XeYNkDjEheLNasZJZMaTPV7Y65GHz7qaCn",
  "key24": "3Ao3ypcgGKniDvW8WFLrH9oZtCYymy61TCo5Hh487D8LgGSaHEncMmyQNofjAo4LmNtD1S24dnJmApAPriH4ybzu",
  "key25": "4gJHs6TQ9RuS3qRFZHRuKTUWZzuTJppVvYz3oWMrRwLqW2EQzPHdatYYvxgPeUdrozVLETE26TZbwGQNAoG23aP1",
  "key26": "49VB6HbbJs5dnpFQzVZDHf6CKT1QoVmgA9difkNC8vhnG3c6J7pga9S3J4D2T9pkp2JQmhh98anGva4KvMbR8SmZ",
  "key27": "5sNuSQUWGVmoQZAPsTZ8p7wEQUbqUoXgZNfAcSZKZJFXWrvXmLTkiSkUqipT1qrvMUw7skStFtQXozGsiULmebK1",
  "key28": "3UTAGpJBScRepTq6pUSQDsPJ9xTxKee2DYtXtCnadVrrvC69G88YoCUu6o3Yq8xubmZ3StTHnugEjg7Fq3trwgAr",
  "key29": "3MdNrgcqN9A6DH6oiN3tZxunBC3aJjsj36QytQYDEWr1k5dkPcAtdevbcrqDUwWFZZshWVZzoJ6LEwLS1vNAMS1o",
  "key30": "3sfPgabQvXqQvoR2LLvZAf8ERWJ7YhCHH2xHDxRs9PfwZrB257S9E3enbYz7KaqbabhnBEqp2RX4EaHRUiKbrzSN",
  "key31": "2dV4qWiBYQpJWHyBQdatDuGTUec3bmomsf2bP36aSLm1syi8cfLgEbhnMFjH7Kvwz96zkwryL9jnnK1FuPbenZPw",
  "key32": "623gg6e24kwKcWpYEW6xAJiomhVKTdZaaedCmwAznLnYXZLds5xkzW7gtdAFR3dkGPi7kg3WCwHkN7qAyPt3NGYX",
  "key33": "iQZXrJbwexDBpFGLBwojRqUtFpMWNHuGaYjFeVpQwd4Rb3iEWpaRQrmd9UzaGMAZhJNAo5KL99PbPeCF7MxZMNx",
  "key34": "53P7RKGrzcGPzG63y65mo45oMtRX79DueGNGjc26wh4rUTuFL1sHaECUHtZ9bU5QdvGiNxocy4Ln9BLaFy3xK49g",
  "key35": "BC6RWhtC9AWf4vTFeFfAqaLxzQDZTbenSnkT5dKL1ALqo8iSBENfeYpj9s7j7SX8atCqYkxxEBGouFHNN5r4mxg",
  "key36": "52RwpueU7tn6PHUrSKq2gm5kx7TSz8N8iZCtoPx4dA1jp8xJsCkequWkW1Q28iYKk3WahTpb9ozXzK1ccTLRMa6v",
  "key37": "56pNdF6qK7CDP3F1oqqQyq91C9wyuMn4KxRhoNiN46JuHwWoDvRDfzfASaPnqKJXaHvk9TiwkeQJe4xrMjLqhnqL",
  "key38": "3tuPbk6vH91SUgHzxst7a7oNuTFyMfLKZ58gsJRot4zycLX6FpYjqxz1zuWW3ffnfBLJHsWxU4V7rMgAC45Pmvbr",
  "key39": "5hpy9YkYYgb2UZjkoP5jfEqAj8WZM6vofmGDdmjxMVEUtd4ExXe8uZcU2BS55GQD5mAcQsTTeRQCNrJtBvSegVYB"
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
