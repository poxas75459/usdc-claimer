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
    "4iPswbgF6pT1qy8aUXcfcSbvYZxntFE63QcB1vHADGnynaNg9VMNHJc68F1h41gKbZhw16MajgUATzJrs3EWQFro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62v4jdTPjPua5P2nxsvu93bZ19Sj3R1StCqWL1yosxbkLZCL8ZnzJUXnK22tmY4UkFE1pm5BFoEdomfGQ9dbKWfP",
  "key1": "3sA7Pvevq4DtD7QNVgzXz8r7fQk2iJHDvzrG69GkARsWeBCoMVvyC8qi6wpMvX1WBM8jsGTxgJeZ2zhV6KNTkQ2G",
  "key2": "ACqEA8xGR8iv31LDQKfgbe1pHy6JArAJYGEGwbSqbZg2cLXfaCPDdQ2kNnEAQjXQo4ACoqw6MnakzKU8c5EGrFT",
  "key3": "4tmZDmNcjPiGTPzBtafTUCiXUZrziwg9JWiw1EkLVUypht8aBS6yMXhrU8kYAwEByMEB7w23DhBSZx6egh8g3xUz",
  "key4": "skE9mZExw4TmdN8y6Tiw8WpCWgDVxLPpqejYvtLVyAoePHYmu5oJUN78Y3BuSN1SDh8atophAQrQsAK5GqhuiZw",
  "key5": "5bwTrtFwYLUFZaSCCMqzTftfarnvdo9KrvnkNqVJQyQo8FjtG5gDS3Y8nWnCRcnC4iF2zrcpawjTpERzyYsJz7kF",
  "key6": "44QjMdSw1PcbLqwBVSqHSBmWTZt2nndaTUFt6miNjQGhZntnsDYxgEZSDXEsvpBNYszZRANmcQ1azpkRHYyM7QWE",
  "key7": "2sMPHWkFQAiDfqvpPTgcQzSxCs5JvdG1QUEGcVKVHyef2U6cLQ6hHs86TNnDN1rf4wUVqTGyyQRaRETFq15sZfVy",
  "key8": "3JbCdKpBVDnGoA7kV9gPrQfeLTa3g2zeZ1RLeKZiSyiF5DPai8eUPBQZAZ24kRwLYWckN7Fdg5ScL6Mhxb4S87dd",
  "key9": "2t4w5hWnJKFZDjwDAUq9ivJD8KYZKpdx4igkGiy9auj3qqiej7XzJ5j8evZa2yQY3qNm9DRwYN2BsHAvFBCp8H96",
  "key10": "ZGUe8ge3EJ9h3im7v5bDmTExyu8oqQLnuPsGLNZ1JW5sxGViZoYJdeLmwdrVGtSt8rtM7xMfmtAUJzDzGbeAihN",
  "key11": "4cUrvMEf6mp1UMaEhqhWukD9Grafa2RN2GWNmb5aumRbzGt7qD4qXVN4ykRokrPqZUWJ81eZHFQZM85awevoUFFQ",
  "key12": "65njBZHWEN1mqCHDVzyAHmcSgNcEfJLemySaJKGD4hQJe8emstrsDfQWpGPy2cM76KKUbR4uk9J1MAvrrUKxYESd",
  "key13": "3xFFtsWZYjgXkQory296WgDpcNzayFJCnUnJVzGDaLP3RZedjctn6YWZswtXTCUwb4f6xjkffU5QYRjyuN7CskMB",
  "key14": "2M5SE9RKm42Y3tn1DoU3vbMMe3QMjB5t7YxNVfixvP9DDHxgajVGfvQXNvLBAxZAztCAnJu8FVxUPZsuV2ZdBBUE",
  "key15": "3AwxyRWyN92dFz5Dno23QAYpBxKEVyCWyLgkocDv65W1YRFKzF3i5WgtACuTWJmDb3kRQRVFfeo5qiwxotRcJ3sE",
  "key16": "3adUXq9KGL3QSFNVB68dAWpM81Cb3ZnArdWNL66Z4FcTqRbxh3UCNb1h4QYb11Jt83jRyptQFvHkisvaZVLrhpme",
  "key17": "4YFi8Ra1FBLCD77yJYQiFz8WBrPK4qdrzQ4FMwyur8irai2aseacK88X3MxsKsidunRXyWeAtrtWKeTdQcVNw41T",
  "key18": "5wSBTcyd9sx1yTRLHrdRJCSf3TQq9rm8jchuJigJfJoMeDAzMAZD2RDdCbvKtuJY7BoE2TM4Ve2RT455zQ4oRC3r",
  "key19": "3UMiRkdJyqHfMtHaH3VyR9SNkw6dZw3hgGWmbuaxEG2iwi9Mv8pFvvvJA8svFbjvLYxcmZWrfLQfDfNbQdhUKCoc",
  "key20": "4y5YmvZ4F3Fd1cTPhoCtM3HfQsYCK2izeqMvgvnQnDseUrzmz1gRWW1oW8NDfgvd3ALMyQte7qsUmRxYKmHCbvUq",
  "key21": "2Rg7xq1U1CWroLvNLvmmYPuDGmUQkNiJY8jzfW2QmcD3LdTkpuma2AGUxbb9wweGhSxWKRNrjmfAqrLPmP3qyLjE",
  "key22": "5tF24VdMQ79TBJUUtEo3d3g4a9Fd4UyC4iSuRYZqAuLhGd4fPLCPVm925qmLqwmdq1cXtMsagZDvqpT1wLRu8h8d",
  "key23": "BFCVhNnKnSQ4oYAn1WsGpZSaLgNXNxR4DzDDbTVF7kJn9mneoDPCxB4FjbuGrcRwFyXYz7Yks5D1LP2oMgQZfJ3",
  "key24": "4LP259rTLKx3pxKxAquzjfB249TQUzuFtennt5yjZnE3jyHW8tRk9oUBcwMjVT6MefwMnZVPsUDHZY6VKD6FUxNH",
  "key25": "UwTPR9CUxQo5ezucRPMr4tgoggVVyDPk41xNyiEbd49tJA63nCSZpNpk1qsDX4R2UMB8gjv1hZ7peQZHi8VTQJH",
  "key26": "5pR2rXsuRwahBisFg6Df6qU3MewKvzMy5EnqenJDbtcUcgHCBcxBeRPuKb8hu6qyC78WDo4GY4YmcuWPijM35uoQ",
  "key27": "M4GDyLzpwMoPHZsEA8CsVB67xEsuufLs31Cq6NHHrYgGtSL7iHJTjg72nzxCXxb94iYoK57345z6JiwGtN1pRsD",
  "key28": "2f8a8CAsetXitRHFsVY9WyHuLsa479LAsPQGPckzxyZdWHGuowXut4KhbFCDoe3SDq3whF8cT4oBeupkRdZx8Hyb",
  "key29": "3Zc3GCuKNioypmG6LAPFcKiMNavUq19zEwy4JMYK7z1xeHAHKHKnt3VRD3eG787VaoHViudhdnUM71jG6zJV6mub",
  "key30": "65JayRVQ1g7LYnT9EPdQmnk5UYkQj954ZZLHSpsQMP9fvU4iw1Vz7axDLZDv7bWRkDu26Po5zoxL3HHiEoyfsuxe",
  "key31": "8nhzh1TALwEojjtN6bDq89BmMhiKV2munzEQpdG1KB7UHQEsBNzBHctVZzGurigUmY3PJRtTzowQLSGoFNi9QUY",
  "key32": "2AsbmjAwKbY1q2pkdmqUqi3geUaNfK5J4E86mcXn8NBwkrE8kTKVgLS9G8fzcruUqWkk1BSaeXBXVDSgzhwLySf2",
  "key33": "3AwpgnnWWfcHGpEN1dggRGkgoGxFckoeWwMH9nUxZgpcVWpK4fJDst5rRefdEdkcok5q2ZYFNdetc2vXeUhzZdkC",
  "key34": "3AD8oKs5r7MKZ9fyL78PzDmJvHTBmxPBp6CXzpgX54DHvQuWPbbWZWVjmF2oJrAYrKFGVkxzxvEsrydkFzTT53CN",
  "key35": "5w4Pm8Cbx4isP6x8XatR8xGCukpxAxirU4UiMTKMW8Bygjm4aAgcca35StENm39BQeWpuBi583o5Bdxqrtk6N8oY",
  "key36": "5k5UuLzzPX3XcMLvisBxRD26bC4ybnA3hmSLFageXQtNqczCdavKv28qTAevhmUKKAjjyvCXCnDRfoS4YqJUrt8w",
  "key37": "5df9sHa3u9bCm6fxVEtq1UcTPPktgEmAuBZwJPoAY31t9ovLrrv9Ypac6JtfED2NaJkvjWmWjZ2eUoBF6s25Hc1V",
  "key38": "2W227biguSsQWZ2DpgmxFe1mdmJFWTmWUEpVjK7A8zyMem1JXPNJHD7ePh4U8qVS3Ad8WhAcZbrexYHRHsXP3dFY",
  "key39": "61DNnDPcoLBmfJ4kbvfT6q59Z2oqMnsc9mBpq6Uq5yb7wxdyqdddPkVzfBTai3XmxqUD5WLUofuxc8THBzbtBhKB",
  "key40": "4f5SJuVC3XDb8iqADh3TWjHYRzrEDrCL3TTkr35A68zaH1eknPag5GoPnzpVwQuVMgHwdaBczG21zawQgWwuTyiE",
  "key41": "5cz1axKdZddXXuUSKPEqFAQDiPj1zj4s1K7zcBNKgU8RNZa2jsrC98p38528eRRKCXNgkzfw8sG4K8qKJvyj3BLF",
  "key42": "325Lwc3fUHUSTs1jqbggAox13quHSJSnU4SjBDAq9U7qecGBfaEy4zvbGbxTq6QF6j6o9nujU4kFieU8bcbSmn1r",
  "key43": "5WPrqN2hxxXiuB3seDYXMPCLhHGEizBVkaUsUQJAPoENYVzcKLq98MMQehVWaLvW6WPC5UtbNmmPvmDHJMpoT1eZ",
  "key44": "5cwXvWaVkBsdW43EB9BLdVt2pHtwzvPQEqsN9JWYKHFB8nvrRQsEQdtrBn4eE9MB19ZGru9Ct2wD5EzrjEPDYwTX",
  "key45": "xjM1pK39ypgZHkhunA1Pk1tDzWBiyygpqRX51HMuwAnb1ucfx5yATgBrycJN4Qybbzx22LhEnvAJJqEga3ifdG7",
  "key46": "29d7xqwcTBHFSFigbsRX4ca6Tfty4bSqJkvVaWLMw2FBeFCTnL2gqaWXKiyk9v5X6x1nLHdNFFPiKzhbZZQKbHKC",
  "key47": "5ZqgcMDJd7uENtsPzZ6xCbLKmrfbCsuv7D86M5BcUwnEee5zAnbR4k8eTkHqo1ZEYjwGnosN4Lits7RESNHvMKmc"
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
