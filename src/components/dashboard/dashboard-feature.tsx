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
    "5G2dTPMyvHTC8PqciAc3AfqSv31a2evQFULC1vKk9UAtBgMqoNxXm63MeKBQmw4YHfCDC3Trh22rAkfQqMteXSLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MR3r5FY9Qz5kGJXuonbxTPXQKZx8WfoFhEWwKWNGVD9fyEL4vUefYNEDVcJrRT4HMHP4noAdNZB4HMGbtMdn24n",
  "key1": "4EUMRZeGksPbdP6HLBjnmRsJZg9nkAHc7aiGgyRE7V1ZqaKHfqztr4GarkCArQTMHjkZcxkooZZjKEZPy3vrXeZj",
  "key2": "4vkWdegrBqHh4kCBr66EhBVwUwEHQMvrScRcVFTqrkfss2hph9DEV1JEATDjpR2rqth7hNUTUunnwxDYd9DQyvsT",
  "key3": "544qJTo8icFzMGDnJvTbCNrPWRB1brDN3sxeM8uQFa59S3gnZFNAwKenrfcSQS9y8snuBZEdL8dShoLR4KinP2tb",
  "key4": "4MGmNtDBibL4HdNzZquoXFxX7p8n6JKF5PY6j7cpEkVgMZz1zgcDFaoJdfbE8DCpVxGX2KSm8RtBewgTEvZisjQr",
  "key5": "381xW1BLoKCXtYAeqyXxsuLL9j3v3qB8kRzoBTzMuivxacRgAC4ZY487XUvmZDUM6bL7dQ9wbsVBWt6uWq1zqPRf",
  "key6": "uxRrdZ9EAe2PLBtSxGmeB77ZrJJQcsqDrdVreL121sJ1k6LrJ3g21zpU4MG9HmnDqxGmX1tMQTDQyR3jGkGVqWJ",
  "key7": "3vQXYxReZaPcncUUryg8xuck67WLygRFdu9KQ6XxMcbzBztBt1hRPcnxLcUSFQVABqQoR9UL52xJpsSd5pRpgiPK",
  "key8": "26ZDnULPMbNKyrFPz7bujJTVaTEzv7ZPGdRe7bYDR7ZTUoaywFoGXxb7sdFCXKJ8yg3Cyc29fMQUBTQgXSvYgSJ6",
  "key9": "2CtFRxWhHYcr4J8QZtAz9ojrfjrFfAt3RvPQFMb87378HfM4TedTmqTEm3n3GWD2yYAKmKmG3gdsVeDYZQB6Mcg4",
  "key10": "4d5C5GVkhYZkKA24qnzLuEpXnyUvUy93BWKcVB6g3A8tzkewJiN1MXBWY6dGyfbxqVpwLsWaRd9YvjuRYSvLXqXf",
  "key11": "pdNcDf2jjFgn84NDemSC5a1HFYRBXEdo84yw47rEMvd6LaAurV21yQygrycGc8sE6DbuuW4NoDXg44LTGMHSDMc",
  "key12": "4agq8EVN9Pxop5pWJmnfR87g564aGQXWYFeJq6FNtjJGmB9yz1zLf8XSBjvkcMRVYjuN9B4gpPCgTRMNwEzdeTdj",
  "key13": "vD4RduU6vKcBTDbpzw2J8sRNM84A1sbdCFSTdmA6gJu9pKHydGeFvkHpYLZrzseZZ3nFzYDgcbR5zJYKLAjwsdT",
  "key14": "52nY9DMqv2Kbe5w4bnBstcnRHXNkR3KyrC9hNLKyHM6wpYze38XUXPHCp2Dvbj9tas5zk4L1YMJc5YvamCy3ARPr",
  "key15": "2Jh2hzdyZzaWYeJQr2y5Azz33yroJMJgrB8zVFRbwPeWRbc5TgZsgdkqpQZRA2Rfc2b9ZBB4hAZ4GYwJ3vGSWkE9",
  "key16": "2zNJbC4NXyxGaoo3M87U3aL4qMT3PkvdfS4cJhxv1HvBFoWJ3i1J3nL6wxkdtHivbrQmSQbXXKT78sRRtCkqtAJS",
  "key17": "2nnHzmprBDhxmWbH1wRkNBicA72ZWaP137FEycUrUZfmxMtUgKCnCD2SwrQ4SArvucug2dKpGMTPdoQswUbVwKo",
  "key18": "p8Qc7k6CRsoXUc8yagTKSAuY7eV2Tg9os9qy3aSriceu32X7ZzYwLf2jGuwPi7GyV7JkpTRzSu36bgCXgsFT4t2",
  "key19": "44zmjPQdsji5bPd7fxJvq6p1fkk1oE7jQn1SMkW3aVLGZrgy8ZimqrQPuDwGeYY16QipYrS2tQ5scRPUhnMDwcJE",
  "key20": "5s57ieqHg35Zj1FimbAJ1d8qsA1AEjP8zuKvPvdfYSNMNGYhKF1yHtPqYTgqCoPKG5LcmGJbiYu6SGNe7Qnniifc",
  "key21": "2Ypvs8fjucPhWu9TrmpAoaMhojXxyGFVuq1LqqazZsPH6LfBfqBPdY8GKxvqkRoegF1eGFE8aBsejabpXsLdqbAf",
  "key22": "wbYvabYrBV1MLhb7E42bd5D7ZzG2n8i1pcpiivABbCD7jqY93YGcSsA4ZrGPjuDb7MqVC4QJFM6bv69CARG7otR",
  "key23": "64XAJZc8AeYFt3D7ygmbLrd1wMniTPZ8K1HJreozR1gjPuAZWZK7LJcYGTQWRqtUqPTRTwAwvhTEDkZHxrjyJjd2",
  "key24": "XxtzdDTs2Ethg7fXaP4vmSJKBVCgPGDUBC9H5VqxgRLXhML8nW5NFZwAUoyBEu192EDWuigyiG7ijotCvxVYiJ6",
  "key25": "4JaGAyQ1sk25XMqowC9yRdXXjxrfXhw9R8MkVcKPTf8tFssjjS19B3nVR8KUpa2jzvJARjxRnmCUZkCQ4UNLYkDA",
  "key26": "66afzLgkcvxNqSZGw2vwvsgWQQ2bXSmGWPNB6wu6VBMgiyWrk2ZsqV4W1khzFq1m4kxGCofsWpxw1UZTU2LHpxmL",
  "key27": "4AFePrMp1RzTzotxW1kJNwrMh8EtXooeivASa9PxLoCZ36MX14VM4NDEJi5pxnVk4jGyZu1BzNiYEmWeUmaxWrkM",
  "key28": "5rNAZQYbnEVqRC1TP4X87NB5nTWVZL1cxWonioEa1vw6rfYr8n4NgesjDDSWRwzo67oo6TxSXWkjWp8Qh1QLyZqJ",
  "key29": "62E9RRu68WQsVsPH6sRgzfQYJyrvApTpYVcGrcP8EsWdaQNrgbrZgzbB11XpYdxRztWWnngjaNGfejiVWx5kx6mP",
  "key30": "3nZyK6TZuRFb8PLZ7wwXcU4dSJQZqHMbGN2A7pSoLCv6KjfSPR8jFMBd6DP2aRmkizt44nzjwvMUgLJSwt7ToBQp",
  "key31": "5J5WzjsKXoEAFEQkkk9jzsYdxAb5VSLTnBCvvzEFsFBuq8FhycqKzQJ2NKuS3vBGZkKMTCTsXBstNmimLhbAU6zt",
  "key32": "2AxKzqT8LTxXhTDAuq7s7pC9AE7WxPLZX9YUUME4tXt3HcTA5QvapsqJyr1BG8ucw1QJ6ES41xemdC4d7twxfKoX",
  "key33": "48UeD99s7rgCYTQngpzUX3WjsKsdpshFj76f2KbwK9jHrXWtqaDYiC5zMMqpwpr1sogmV7yM4UUgxcro5fF6vSH5",
  "key34": "5SFohmhwmuvXueeg3kGJLZmkUjsrHFD7ygfU55S6KpTDBnivR8umZPca9k5g5CiH7qhTxfuLcmFtrhQP6GuH4HQi",
  "key35": "4o8aJfqWYkJP75qriDSicNZNKq6kkDwLQTdJmUD19n1WMA1Qts7jWfVEnLK1wmFedgukL6jEdLqusZhbQDAZFHq3",
  "key36": "3o9PJZZA23U6aqcrnnPKtgbfDvDxzeq5Et99oWYzi47Jn8YDNDEQt2iW58o76354CgMQ7CMxg3gdrQqSENwQx1Z",
  "key37": "XXPSBEJHD98XrhYjZPKabdYb7pjzs2TBmJeu7TMvDifN3d2gYXiN5QBk7FSZaqunsmMkQkkNoNEaLimNeyEbqX2"
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
