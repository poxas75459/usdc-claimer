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
    "2ss69c3oA8TpHBW4YEYb2Hsz5yZbDWKwp1MBtWhN6CrPRASfSu6vzz26d9SqqBFAEX7i3LPjCgZDBcRc5rwstdSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NR33vD3cFWGS2znipHutkYJ4yg9vTdxaH9GwtdvBxiD1oKJFJRFektTWjLb52JhYBJ8HDDvbbAYbfqcQELSQuLa",
  "key1": "3cutEPFzBHbazJiWdWLELTVsGT5TreYfRxH8RRSj9JUmgHc7FyzGDR2KiQskFqVsYBBPy5QLCfb1LY5xa3mqXo33",
  "key2": "TJa9byfvUVa8BCY1zQcBXEXMRVv9NRaKxNmtQvZZQzeMykPRyjPYS7Ke22CuLC2Y1MkL4odAjGNv1qTZ9zXVSsA",
  "key3": "2usaHbk5UFbRYehmB24EKRMCKcto76Qy54frjcAS3WHDhUaD2eWaWzAdzhDEkTmhkpikGMTwKu1EHeN98ykFaK4R",
  "key4": "4YGTWKbFqXdv8GHaZj8jCka7oSz1MG6FqsW86yg8gbSEMssXbYoWV49447hQnVXTRZy5QR2iBud8kuMj9E5xWk2H",
  "key5": "4fAP5wwA4A5W89HobSAGsM2zFbtrTmmkrkezFfgXWAxo2DcnGE9kLY5vfzkN4yZCWjJpht5zbKexzazfLyTqRJrX",
  "key6": "5SUfKQvAroFRZNLNK9cvAjeBJycHMawbVsjYPEossnzdWXHKB8uMBCyJuNGQaUBSyQxdmd3j5bigXHZWgNC1iJap",
  "key7": "5yPHscKwmMtw7WSFR6S2Bs5moEcntcux73Qs7v63kMgyLD49deueSr97RDosDBgQsPjrnJ1ZhrqUu7CmQeauNKAo",
  "key8": "2CxyH3UPTHb1cJrHkRaTnwpkLGzeJ4ntvVtUTUVQ3wjXGQVH6qWmnPCQJFU8vfYKpJbwevVNK4CkG5XiaJw6JCJT",
  "key9": "5cSkhQU2dFEtKkHi4u5eR5cGaCR4Q4acjHShc68KrA7nsXNUabyjWXtnJTCxoXFDzVfMB2XCiwnKh2hDKvP9jikC",
  "key10": "arX9weyc8pRjm7aqokLhYrifx7dfDv6uM59dR34zJ42CfeGEwMqPfGasvi9mXTQfZnDvFw12c5RyfvsDNQjBp7x",
  "key11": "EhW6um5HNdVGtZ2nS5QLcDCpZE41H7R8SzwZY2ne4mwWbWVwvBKY8PV6hqRqMqzf5jkzvqpLKr4LHkZ6ipDpkeE",
  "key12": "377SnM5rsFxdciygM3dXSijs4XnP4pXUjWZNjTrTF7GypqMLiEKSUiN9Q8SbhicLZF9BPXtVkoAzotJoQwBZS46Y",
  "key13": "iUVWVCHwUuA8cTQ2GHxBY7wbzK2qgZ1zpoqoULxyydjcpEZZz8svP8hGHsx9qPjWgLmgDB1nJSA4CKd9qJVqpmS",
  "key14": "5rs19oUqy6WdUz1NPVqL7oriz1443L2TLN5Kd3hueGjzucsZMQ8nihv64NCvu8XPkwRFTdwFcrF9AphfPS4rKyVz",
  "key15": "5v19bwnfzmxpjnxqQtQNL5eHj5NyVDixLoGnR27rqpzKGnaxVxjVPpKwQbQWB12BB1ijwm1hWAHRk6zUzmmydBAv",
  "key16": "5CVdggNpuXorqTPhzbnWu9izW2kJ5Bb7dyvrygx9chgQn2Nej8jrV7toSrCcHp2h1iFrmgXSDoP6jp4uH56brgL4",
  "key17": "4WUBjk9F9LQsgfeXLNHHEMovANvvNXMq9PCEmeqNfxMNnmqVSsQMcMVi8D72RJ78zk6nJ1AK8qeLH2SoGr2k21xP",
  "key18": "3stcX1TAntYC1fvwUqTmg9xJEEEzbofJwCz3xLgc3QWjVtnzpqzUqV2XvVy3uQFxhFmDBWBquhVpTvpY3JJNGxsQ",
  "key19": "28ZayniPY3KLhckNm6rgqTHejpbk5PQJqXWextEW6UMrMZee8fbsidzsCh3qUVeNdczrFmGsRF93piZtK9Um9R6k",
  "key20": "3P1AZGzvSqR6pWphtbvQHUoKc49LmjXAystVjpGo27CWrYzPGFF7KyYVbybExtpMkJY4nTFpV27dGaSNpKwhvzB4",
  "key21": "e7SCKBMVUzFQ39vxzDaTykHVWZC9YMShit1xp3Wu79cRwQvw7o5mrapHEhd5BVroSaekAqdAiDN2mtYUQFPt7oA",
  "key22": "3ZTZ1s8NoEYecMVAaWdB4Us2dG1HQTRLwbRrQ4TxhPaR9NCAcpYrQ8chzg5G8Qxwt4hTYuNQSX9TZJTEkmZqPxeQ",
  "key23": "2FwunWa4QBQXi7CKxpn4CNwtJvEue9XoJR59c5q9JH1BMCg6QtTpYnLZx5LJdvvoNyStFgqXtaeyTH5BNvVCwVp9",
  "key24": "3jEbL5FJnmFKu7682SJ5Xn8pyvhVPb2GNMfHLEBKasPCwajFp1Ex4FK736V4tQC9aCHzMzYPu6vPfRJbVDpJonRA",
  "key25": "4RQxb4no7eej2dESMAqiDUQgAMHU6Pax5e3eJbBku8pjKBsbNESuUrwp7sqVwdfAqFeXZck5THgUkKRvCSTYMEgV",
  "key26": "4mbP6ry4R95MWyLxFiU3hq16TpN9vdcVsjJVVUExunNahQjQbhCYUvN5wQJMbkdFdvX4m98VzfpYbd63nhGMqkZ4",
  "key27": "2h3sBaCZ5LUEQUNNh7PUKmeVDu2iP73p5DxAC4QnBfb64yaHz6tr7hQkwotBV4d745q39NpcTtfJ3MwmGBjHeqpB",
  "key28": "2pFPTmRRwN5XDeGHbogVgyJnpg7Q1JejPrnur8LvFxEEyzCrsi6ic2SLnoKAdYRwwDTGMJBHCbPoFy7gC7Kdqszv",
  "key29": "3JGUhFPN3b9o8QenLh63sSTCFc8U9iQnKnqx15jVAAR257ga7kb2Ae8SqL2WgNFMMjtUWadzkexfwxskFLvPp4a1",
  "key30": "24H6bNyDJx5gWTcB8517t9KJKJoyCvhJBwYsmJ5m71vyVRheqEV2zZuoEA2ymRdnjBKHpNsEZiq86Dapym4rnFkX",
  "key31": "2CgAbVNXSuwq4nsnewKmAyWuFDuTybF4EopHFaWz1ysPvZFSKijwqu9RNmbNDMwrffspAWupFTJBQUmmeFTCSyyv",
  "key32": "4sXQiR8fWxmq5Xj5yypbZ71BPAZzZqYKJghubDbbaY7D6SYajkkLqUHAPS6mzJuAXBGqS32RMoEphdUVktotai1Y",
  "key33": "3KKpw6SZKeLtZaxpcyL2jtwXgNpVquLd1qqXzcsN9EeUJQkytcxWy4uoZe1d4MDnuHhxgp8gVxHbTyeqnsPvraX6",
  "key34": "3e5kJLWZZdjWPmnwpmrYBZFnJjcUrJNyGh5URXhhPNndSpTb8ak5vzrJgFWQeWT1oid93eefFr6XFU1RuXEShyU6",
  "key35": "4hxazpXD2WDZkv4vxHsqouz3BcczerMM7vwUEeGnZj1z1uQJR4mrq65BDdsCEsosaWYuLAe4nQ2RJK7TbVPHkBQf",
  "key36": "5MYBEbgTDxa46QvdMhHSqXoaqhz21acBiAFYaqZq6qFQwS95dX9wg3bTZofbP8PWb7spd5qPJ5u7B1cTTvwUdfkt",
  "key37": "4PFeijErmeZckfgjz8XzY2VNRx7x4KtiQCu3T42sMd5dxtMqF4c84cKynomz8Yc4KR6K8AV5GZDtKpEQgjUyjjBd",
  "key38": "4sx8M5Cxk47uVCe972v5AfS5arGEGeHa74e25dsffinSAvGXTvw3qzHyHptHG149r5RZWGcF2F58H4QoUvhTTgfQ",
  "key39": "ZAJdg9MfQGeWtyKmfnE651xrsvfb6cE12sNNQccs4cUsxFBRpkdd9ZgM3Zz1zfTUytm2QK34dwtUejXYnC17NC2",
  "key40": "2GRG3wma3ZvU7kN6BxqD8dXS6WAszTc2zYRB3P37dwWVDWj6XG3BfJizR59tatFRm4FSgaGsnPs6ujXhQhsxkVrT",
  "key41": "2v3CJ32xCrTEqdvrGWwhqvgDkpoBv2fKqC8ecLaDYeidZLHJd52gPEKHEHqsxKbhJCfUD1UyqxgNjhPcSpLgKZTd",
  "key42": "3fDA5inpVqumTm7jyMbkbSKGU1YCiuVSdR3ftASe4Tuc5E8X8BAsXzmrxkvjyE9TkK1cvwky3qgLmobxgUiJYrUG",
  "key43": "3qxF6TnoV4wA2gdWQ92iJpKjRn9Yb9uxCc42R8CaTY1uFXNHHFPWc9qXZVU6cEivLBWYGzacABAZPF2AjPWXnezi",
  "key44": "2onCoSj19gBhXyMW15vkSoVGo1mrvMtFAToW5A29Jxzk876XAdBBSupJURsVqy2xVFzAuc9zfpYWDT62s7mLhvGM",
  "key45": "596WoZxfYNCnVjTe2j5Lm2TbDJxLtv7iNyyM8wH851Z2RD1ufTvDtHzAewtsGrLcsjaMymwgdXgvdryrMKti4qLq",
  "key46": "4grqw8ZkNMTHmiynpHwejKqZwDnZcJi9bxbo3PcE7UMLpZ2vJZM5DL9NpJWF1AaVBsv7nRQqUPGLfFPiyupc3gKd",
  "key47": "4yT5mwjcxtbRJbqX9Ud1pwPkgGgjPvL3VH5ZaVwJohjzCGhgDRUEjNK6zDTTLBQyMvJBwU9AH6jxrJLWRziV5AWy"
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
