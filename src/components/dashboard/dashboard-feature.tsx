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
    "3GEB1wrMnzWRS7R9Fwp6aijBD7uCbVhHimdSDb2SiTKjbtcuY85b3SeybvZ8LiBtD55nDyoKRHiEmBqXN7pQeJvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAJxqU4M4Pux3e8PavgERAtb2GhMNDrXSuWb8LrQBsUCBoZJfsWdn3Td98D4fnYjJC4Fq4FZtWv7f6F4vW7BC6L",
  "key1": "48sPQt4smhK6ND4kgtApTJjyRQRbxDxWTR683XXNv2jrLFKpLMxETAT9JvYKk1zB6NT6cULmEjBt2ybvNaAcDjWp",
  "key2": "4vt9ymGc4jLe4JeqS6dEFw5hiVN3n7n3qEqoETv7V3oCvN9BqfHmBRcd88Wrre4YQCMk6Fc9sACpKziwQkiGgxML",
  "key3": "3q6fd9ZbaR49zkMX8ig9SGNaEtML59hbiFGefEK51JJXh5mX5yP5h8WxZq2wgyoF47qEXtP1ERfpJKJDqG99K5qc",
  "key4": "3rqBH8Zv8BVEybvauNjcccVSqy55eRzP7dWztPBLqtvBoYFD5c5jQ4q3mJcL9zyokatbANcNVX1wocVyw6qZCZAF",
  "key5": "34qSo9zXq6EsP7t7YdT4rDFzGnejnab5YGpF1VMQWWNeTqRE7LgMDwTPRdNJanehk8eBYFAxdBjrWUrG1buSZ8S7",
  "key6": "yy1iR6cBESVvBFPTKwja5VgE1CLs9NiFtXRwJ5envcTrsnKpWTBZ1f3PQws8k99wosDsb7z52wChPWCReLK7x5u",
  "key7": "4J8kqP9p2F5gnRZbLaAc2MUUshGdfAZNd62QEefkQtzj7vcjsgrq4H2uz6c4YxajCvATuz5mUP41Db8uvZ7swhVV",
  "key8": "5c3cEeqAAiwWwiqt77jBRzzD8qhF4PSoQRAYJxV4L8X8h5rxdDqGkRDUaeqLh3S9SLLvjPF2onbGHCikvNjQwGwQ",
  "key9": "2BBTadTJ7iqad22qEY9nwxZTdjHhM4rSnga64uWY6X4hnHqHrXt2vDDdhzMwuhLYLbvqbEXVGUyWZD2wwZqUmGfQ",
  "key10": "44C6HKMTSrpEwXeCx8SDgYVU1bh6LqM97TRRxUqJ1x8ANZ8tYBwn5q8Jz6X41oz26k3sUJ9xNBRSwoYKrs4FwqrF",
  "key11": "2PS1Bz6UU7ajEjCE7Sx4BRDA86nyG9XSx61srYkghF2SyJ9NaTn27JYTyTBV3xuJHiYG2KLYvHs8TgvvXjZgH6pE",
  "key12": "4fuHmvtoqmHgNBQSDhLWnshArGBQ2tRwsuQB4v3jbZnmQoSdt7RZ5vVpURCusPHDxMiphgxjjgsdVWAFT5aAKy6H",
  "key13": "4kXpDTvVjkTdPWubXcEWDMayCbcW4qDKLB4E5N56A9J9tqc91i6CefZCXXQ1ShMPK1cW1JjLQwcAk1FUAzm4AWbX",
  "key14": "4a9cR8CN9ktu5SBeVUF3oSdfup8mzfdRE1yZS76XjiZCQaya6CY7sku4adJxsKBeSFCUduZgDxRMjPVv5Q2w8UHp",
  "key15": "5VcQYh39NMEjHif4ikwFP94r4F5z97JEGYVsuUUZdtB2U9Y9cTMUBarSYCJrb5LQtSZYbf2YmBUeEg9JL6bqyEeJ",
  "key16": "59aZTryhjheyzgVtRmJQiEzAdNN1Thkjv6ypYijzwMbU82RLnPYDqX64KfXaeTm8x4yCSjypAxyMPoYPSewL91yz",
  "key17": "4dPMEgqkBJwPzs86dtBbju1c197siB1wuAWFnWL2WSApXWpsZqviZq6dJbVjz6aXJsrAc25SMkfji4nLVyfcYzEU",
  "key18": "278VJsMeGnFDQkBtivnsFeUJwqmmqCnnYPkU6NkCcj856AwgRxg2V8HUnVfXWPMvXCuD4jwi4e2N34LFZvcqCjwk",
  "key19": "4UGTSZUuxvvcavJA2ubgmcwvhfrFDVXjCZAyyUQNsfh1ffAraxzcku47tuPDPcvD3PuJcBTt6pn44HFLqMuma6Ae",
  "key20": "2MMEkMTKMoK2YNC5AjxJVqFQ9sw5FiZSAWYqrX1fnNCfxFXVuHdErhB77PVhk1AFn7nJLMkqkEZoG9V5m3FmbAdg",
  "key21": "FSCRQnXqL5rTmm43TzxmhfzWucjNRNotzMFDp8xoSyMdfq1pKaYVALhozKoymSkjx6aGJmRqP5Y7AtwGmKaKxJD",
  "key22": "5J6EfF6XGU54g7BWA2bTe7BXZAUiQiRGXGHgd5DBmrphCYejYv7Ha4eUYE3GwoSZuDc9TFr3tshmXgPF5APjR6qS",
  "key23": "5gri6PYq73te3dkfLZznfNGeqoUw4tVJBUzWF54iT4Qihb6YYJMEp98ACxsATvRpBibqfTKoGm5SQi5wiPYEXfe7",
  "key24": "342ZJWKXTKBVCDhtEmkGCkMUc1ymABPTsWBbA1oX8bUJmHwPsDkFvz4vdfrGRFCqfoDifFKp2a4S3fAdDpnzXSiL",
  "key25": "5zLB8SD5WPNTXoBJYz9QktdULPR5aCyvunXSfWGjDAe6DxoyjCgeWvT31o5uYTpG6K756yLwP2oBVNm26zD76KKi",
  "key26": "2ahLsbciC5B9QPwQKsLXTzVQ2KjaXnDj8SBGZUnPhxC1wcPy4qPjemPsoWM47RS3GoRfTkxGqMbJDr1ApAGApmXf",
  "key27": "4MbQkwLZ2mmC34cBCXLECefoZNbU1PW9vag5ToKUr5dpTQjfxZdUkkrXTU5ZkuZPLeaSu5Zvkogn6uNvpSCDBk55",
  "key28": "4ScaaGLpgGH9VocVDSwLJR3xmobqcxLQaBe2BQqPY5u9VAiRM5nTs6gjm6UgVnfYyTDKyTuiJafRZZ8aTACh39EH",
  "key29": "43BcyHPedvdpR9ayy195z3VobHh4mgATuzSMd8rLsc4UMsYri9LeGfJjGdop4FWdWwAwVFDPvK4jeWS7XAEPPT4p",
  "key30": "36N3JXNcTSneTrdpYNLbWnj5AkPGVuaPTHPai2GJvVSCaz7HQ3DTQUXZbHiU8jqUxZbDx4kUY9ZZrAT5whWe4fdN",
  "key31": "3Ko5RG1APdYvhRh6WTgrpSxGNP7CMXu3Y8XdCH5UuZS3i7GKvkuzzeGgxDsRyMgcY78L8qM5xJSvaQdFUWkZ8cFg",
  "key32": "3UTfTJxWSzMHooCeiRNJZ9B2XjrG8bdfT5uw4ENPAGhJFoGYpHjgsjqTgveX7tm26xEXzfco5892j1teAsGQaYUr",
  "key33": "DL6Ww7tYz457qR5aarVJibkXVQAKkFLPLDb4G8gHjSJnJGja5TBPMaBjjZuF5LVXpLdhLj1VAZHs4Q1WAoNSdZa",
  "key34": "3EDdXz3FkskDAFwyHkcU7JXCetwMwU1bi198DVtrkXDH3xKRVAJigUH5T3nFVvfoWpyYA7cnQWiSv4zg2QGLKk8v",
  "key35": "33hstWeP6RBaCTuXTHauiFCM2jzTENZZXf3AbSvzhvEpJrP2ruGCgjFjY1pu2WRmv88HF2A1myiQ9FwUXHy79DeU",
  "key36": "dN1wLxkHHt2GxaPSzSqHYquUCbHLZu2gtXU4jo1aeS62kRcrmY4E9mRynKg8iuveq5kykXLd6TWxSTRWz9mVie4",
  "key37": "27X1vwhDBAvMvSUPAa13PSEYL4qeMRwR1a8N8ws14BZnV6rqZ9Au1aGZdVwq6bxKwg7HaL1CAqQrogT9hJpnRsgz",
  "key38": "aDVZiDLwQT5msiTzfYtpg5YFATrrWCo4vzyYFZa5T9fReoUsUdNtzLD4sQA6E2MtKk2tKNgPduwh8uELphN8nuk",
  "key39": "8agQdNHLyNsS6nwjwMRi8cn3x5isSuppR8wx95bHpmukHcDCutL2Zse9WhVdkz7oCxCFyeaPrNtDnphaCuSKxdf",
  "key40": "4REC6vQ219v7QyTGVHrPUhYDoa7KgvC5Hmfg6cJvBmLU4zDRntMitiGbodNQRP3eJiELMsTnrXRs2P8v1RoKdLEe",
  "key41": "2De8p2ccR6NnvPKsCMCZMcocEgVGNK6MQb8BdLDp7vXyNZzusFhujHrv8dvGV4VPxsvcGsH9NHmXxrQnajmGFX6c",
  "key42": "4Y655xocxWAsWvC8VSeDvP3SpigzvmkhawcZUXA1PqhHMSstqnsCA13u5bCaPwABooTaxF7riggrbZ4nZztjoxGL",
  "key43": "2Rs9aLpdejRdTpxLNTi1r8ndo82pfM8YmrJGmCAbDf4CGqwmf9STdDFj7uv9uXupFnhuhzDa7CeyozyzSiYM6EhY",
  "key44": "4xegASC4h7YdVX4toBEWaCLCacSCH9rr7EAPWrkbnVA36V3oL1RmdD8sZY6XNgWeZrpfkif9A8542uXsSCkuvgiG"
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
