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
    "2ZRdu1TEbtf3d5DuyB7vsLnBVaWqhhU7o8cJti9CTEJQKrkopBSrhEibL4NTouiYm8tTsGbDojtNJtF55EwmgVCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AkhyeKiUUjFrDwZsH7Ni8L1wXtuqFp8aJitxcGyG5idtB6PZyGCjoFd4rCEscmH4u8S1GT4E4mKbzjkiwLwpqb7",
  "key1": "5oYU1wU2ahFKjk4PyjFtMka1WYYe37RDv5dKfc3okJFMMy6TAsr5fFceE7j7g5wwyAhrw3zXBwRMY7mHhWkJ1RRq",
  "key2": "3mTfLyzmz8eUxa98qCFA6UKLFhoHMw5dEQtPLsWqsj8KVAvEV21HCW2Aphm9YrgC4Z5XdVbCfqsKL13yG1pL5t4d",
  "key3": "ZfmYcyKgc1skJCvriBgwXVjxXEeYpWkdTJV1qaWTWUvftGeLo1wLvVxzj21R1xGMULSwrpiW6ZLmxp3nk8Ytxaa",
  "key4": "2h6hXygZiashAV6r2kTgZ2UmgBwiWDCb2VALUu117mPpq4DWn2BXksHQ2zKiCJWYi9Xs1cnN8NrFCPrAG24zHuvv",
  "key5": "2umt9koigL4Rb4TzXEi5ctfgqV1hQLi7qPP5M7rgWN5efNvuj7vcG9j8JoArpqzfhunG4MjD5RR96R1FatTWySSZ",
  "key6": "3nB8qpiboyzwW2YeVWMajKBy9eu9GdGKzcUnXtBNe6XjsMwveAbWm54xS3dvUsKJdEfZdscQ6jQ8AhQA2bJuv6J6",
  "key7": "36RQfGAb1iyH75aa3Nv1oBiJP4r32pDzu7XCg3zgBdFTJN7SZL1JacHt6R5a4vnPrkaaG2ysK7mpUwsQex8UBMnf",
  "key8": "3MtX2DMELHiq7Q81czi8kzRvV4Ut82e84t8xnax4gEMtsojN8wuCYSwAriyMYzDdrbW1A1pCoz2aRPsrTGqgX3g2",
  "key9": "vaeBxC5ndLWN3Zo3vaoHAQNAydX4qdDKsdoYmVUZBtgvb7pgphv9JViMcbJhgMnWJWmJDq8EX4AWJExkA5wHhML",
  "key10": "aXf89fe9hJwXNz6VAmxjVfBc3UoKQGHTnXCgnKmERnNXEuxe6jAfQbz6uYwoDAyvNnce5itKoJF9F61gwmMMzbN",
  "key11": "buPLKkzQ5Et2nywbRk1NCsKV5ZVss7V1MaYpVRoQ6uua5SgjCbfmptCFqpAwrPrzJLdjwU3PkPR1aPpWYiuCSMc",
  "key12": "2MLRNMZxFgHomWmieg7z3U7fcaPCDnwS7cBLNSiSRb3Zafy7wceskWYm1MN8XrpVMKNGJDNz1D6EBS19ieSd66Do",
  "key13": "2QHj15AEugD7sqtjBXcbG5cSBKyt9cn9XxLcBmBND8wFfFGwGQKjUn8um2Pof6MKgHe859enHAMqwB3nNig8NdER",
  "key14": "2JbmcS9Jz4CiFrWqfpcwBXyGJUdtaxtz6yJ9LcMHcRG13Ktn6fD2mQ9iQozGSqVvz4yfRejKFkhxsz1ntqbp8GAh",
  "key15": "2FZziYE6JhhVujKt3RMZEy4MyEqDj79JRr6K7ud4L9kV7cnTErcGiTMaRKdZtHmTPnY7hfsy8iJHF7HG6fK554W1",
  "key16": "3npZGKWMcTaZfBLaCXibs7RJKi6vYEXrMDN9okSMJuCsnzh2UHrALqVWCACjdggRcKq9UpXiL16QKnH1rZnzpPq",
  "key17": "3ZbccbkRHf9NayMNPNcjj5pzXL6wNTaNyYGW8Z1BkZgpssHwerogzGxY4FRYsaGcDfBNbaxcpnW5SBKPT6V3FwL7",
  "key18": "64HZnbfLEt14YGruTbMUce7cCFCHNJdW8WMs9hUYiYQDYr7UTYJBVE8QCWD7xF7qjinzxLnAhCUuSVYp5qfh8PmM",
  "key19": "61Mq3GEoGngweDv2xZyXeLJoiAKzYbj2M6DK2UFX6yfAkVmcTNVuwoR1RWVBWKw8UqE1MRrpRq9WohXocEy64xQ5",
  "key20": "4aZFkppoKaq6iRduQ8x2zcpPLbLXoYWhDvzFjbj1BfgnjoQNBX72wjebfgzyeMMeVgrH9C3W39o4pNYBaAmYNrBb",
  "key21": "2sTFKdPJwR3J8Ds9NXihHZwPuWoAJUqDLaHwvguPYJoPPbyuCpvwt24cXikDTJ3DoQQQPCDE7ivebpzWr5wVzwKf",
  "key22": "45ugmmhvp3aeGztqF2qn9PM8us7NigtyKA9SQ8cS3wbkKWbuMbtovt85ktMyeY4Q7j3qH9Cor3TUU5s4X91XkczH",
  "key23": "5Xe8s9ANvhSNc5Wy1Et1SMT4cWhZfkoN5s8c6TERyQQaXMwEsxCJcarc52YEifEw2mKJThWQWiMFdhLFVSbeCwKR",
  "key24": "2wNU5XdH2fU2CrD5zPKgtAoh1aSiVJKdWGvPBAZbo7mVYSEm8utssfqPG9W6ZcnToaWkWNj4VbPg1QtpSr5pyNwM",
  "key25": "npsG5R2nJwNYpW8RSfWdutUUaekhaMrieqbzBhitVhAoJ9kmgxqeqkLBLm8LDNNbYuo4CEx9WprV9DFRwbXyazd",
  "key26": "66AqfFEKrF5hpaBPcBia9Gn5Cjm86J6pL8rnw5EvH38yVZqmjcZQhrnWn68qV9Xd1kpDxkiSeTpBnex7yfr4Q287",
  "key27": "5GAHEUQYfNngMbVQwrEQ1196rTDC3mvywH5GpTVMqK5NohgnnQGkda3wAFNKJtw6kUMjyRHc52w8YN5KWi16NpLX",
  "key28": "4929juC7bNRnV5jES267Ny8yxpwgee1Gfv7oaogo5UzKri687CfDhSSy31D3C6n7YKww17BESLBXLc56cViGdDHQ",
  "key29": "31mYkGL4xpp4j3sboKu5gRFapWbEXdGa1EVRNeJBsDFhyQ4HT6EpVn8NXqws9kgVh6b4caWePxvVwKRaihkM59aB",
  "key30": "4ksa92nBLfP3DtNn93KuXtvhuiNWMYLSHrLmWemML3Qnpre4jde5scNaAgXxT8pGs9bWVLHBkrDZ4HkEFQtUxq5X",
  "key31": "66jAjpcG6fJNjVxmoBoreQZtpRGi2VUg5ajRFpHvBadFeyYuM8nP1MyCMMQoLp1zZPv2UVrjHRBgYMQ8W1prZsRs",
  "key32": "hhhwQofZUfY8q5rHRVLd7px4945dmMD1UVKWqrohECvFaWXqDgYjxWtYp8HvvkwMAvrPt2UGxby4L2aTocCsbDV",
  "key33": "4MPUs54dJby5EhfZL9vtAVHqrT6VoioLvJDNpPQv6S9Es6DrWN9x2HcRrkqhwqZMf6KhvL7UvLpJ42iRS6Pm3XxA",
  "key34": "632JXns6NX7DeizxNLiyqhFEpUz7oLeaYpkiVNbzpUXMnXAD1x1qjXyd4h7inq4KikTBS5pEXw2subEXu5Cby8Vs",
  "key35": "5FWWfQ1B9n3M9QfzGpu3toVL4fKdvstX5mUXKmeDR9nZywqMrgRcwPm9mdAia8dCJes3CXWJXmmtUqHBFhHitD1P",
  "key36": "4D5agiggdL9DCwXmxcWDtVTbFbwsrngwcoBo8aAYVo9xNJwiMnFZfgtKDJB4RarZqMVPnDDo2ZDFZxWqSJWFyC6e",
  "key37": "2m3nTXToTGN9QGJsU1yppw5DL6JZR35xaYmCSpkwY52LhxnnYTixEL5j4c2Dd4yP7hUGpjL9ZT7rM3b3S3x7wotF",
  "key38": "TpTdbTZQ9FEPbQbi2qcwGepZM2ReWS2iY2DmCyHjM6DVaa6ejeBxFEsmZuBgvHqfoBE1aAwAX7iKdWh8RWzYvhC",
  "key39": "4o96zSYzqyrAX5UbtCgx4rWssNdmkt8wWTcdiMzAD55QYpWoEHQyKekaExpEbj5CSiyRMU45obDioUcVULW2GzyD",
  "key40": "t6eQLTCrewTVAbWn9tgd1zYjYFe8gJ6VKtQhdrzmFGWA3amXHRg3qWWeD4AkUyX3d4Ne3MBvav4qeyBfUM8Pfkk",
  "key41": "5xzmR5YSG4Z6ndDJUm7eE2NUNYxRAGhKFEfdYecJNTeDbPQJASPUauZNoB63iGb4bmLhdQUBGfkApHSJZt6MVsge",
  "key42": "4rcfUo5vLorAy9PrASqaovP4v7n8Pi43HQb34Ls9cPHVWvh4KtUjLA9rSFi2YDtmbzZQo6S3N7c1h7ZEcf1A1ge3",
  "key43": "4rfDQnrTKWfGWPaxJoUFjZScWGRtkjsVFGgywFUwxv2n9h7mafmgfw7ppbb64KpwfVzhfH2eJuHGUE2Wiwb6VQMa",
  "key44": "3VdHVdKRPcyPsgXJ7hw9L1GxNq8H6vWHe1LbMePFxtgcizgDe9Z2h7mt5LJNQpqk5CHohkEPHnomFijVXRQSQKRa",
  "key45": "3i14aJza6QXkwnNHt9UGPtuYSyJzRt3jwhzamdfnxtMwm1R17krJe8nXpTSYENdTcHX7KNGMGwiL3ytYdNRuVAJx",
  "key46": "Ap8nSWphGbMAu75hjeoVChjfJtC7wGYJ94eLTQ16UBU917VZHpbhzLU4XJNrF6NSp9KMhtdifArbm2TofsSiXsE",
  "key47": "213Bem3Df2QyscMfEcUNG8cJLMjtj9CZ2iNev1mfsk6yUVDGg6hFeHFAXCkxTgB4eY71X1SWezQnFByPLyssa4Vo",
  "key48": "4x66fTNgfSPCu8SeukvR3hvYWYVhr37uMLkpEMEn6Av2ZUMxw984QYrzsSqaYHXB4C4a1LvCqHFDBntsR9sArAkY"
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
