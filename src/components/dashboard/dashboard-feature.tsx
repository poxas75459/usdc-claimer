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
    "5TJP5Dn1x7nnYQWkABo7eouNzoMXVNuqcMGfxnuEU6PdY4KV9wbtdquL4QBU79xAmvEpkYyfbjSLneEiyroaU7Gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5soerWp1Xov8srRXFUijxZo82WzYJ13kwDw7asUQLxEqHjaQ2BmLcCf2kbKbzwTRndXKeZkuqstzeXtA9RcJkYfN",
  "key1": "5gRYmCNx4esewyH3bga5qT8DFmmmxYdwLLshX5K63X4RMY5djCzn6jVp5UpeWirCP8pNw4fjz8BRqTiCWBWNfMgD",
  "key2": "4MYrxsAwBL34ehCJT7LXntJZkwtzc3wCU2Pg2M375smNTSfpVzrtTj6wTUvZJjqu3b9V6EitkdGSeYtjCLpRp7wz",
  "key3": "3HZ52hhtWNX2UF2j4qBUum9QuqkU1x2uk7LRpo4LTbbxawCWezcuosa7k1toCpUMH2nmKUJm3PWgc8tkCrju5gf5",
  "key4": "3pDRhjNcRZsUdQ49Ri8tChaWkzaiXpgg17iFZ7i8kqfx2KaDgV1eZ4R8PKmaEVZNpdGjr9F9qKVxobi8PQa4exis",
  "key5": "eGmnqKr8NH8fia5mefCFfRXW4giJTtB4yW65LmbDcp2vJ2tYV731EbeG36MU4aBeLdmSTJM6sedyg4rZVV8AKpM",
  "key6": "sWYvZLFoCCnLJxd27FDbnMyv7hNt8KiEfoPRoo5WCZcnrB5GpvDvChXeX36SSqHsQjWvgi4JLgBvpwQ8iNd1i7y",
  "key7": "5vVbh9YfuXpngABsQQHAW1ixYfNPYGEreuUPEt3uFUyiJF8Kc8UVHwKALYQAWLzqt4R794rLFNNNpnUSXxpuzDQN",
  "key8": "4aZBaPYrjriqG5j2qzjD5Pn1tMC6xSjacEPYmSHSu5KJaZsz3jVx182m1S3r9ws1YycKkSWByZ7w9R6sovynW9nV",
  "key9": "5oQrMe4vLw2iCwcKB5BDrLuZZ4MnkSex9n12y6GAKHisc3Vw6Y7KVV6YBHpFYUXiZj12jhY4htic8TL6AMiwsHeK",
  "key10": "3sk6fHRcDGE54vCxWFwWE4zT23S17Rk1JCJb1jDQMkYnogteHp38D6s2DvKsXvApQyn8V3QoU5D4DCEdAEpBQTzj",
  "key11": "AyHM4NEa8sAu6ujPk2GfW4VwM25Gn6eszkU6TP3qbaFubwjNuKp9RQayyvcKTreXoDgvcvNx2HKUih11Rtd9yZs",
  "key12": "2RGCT8qSFRjjJEreLJNeowQgmQTUjtNYqvuhFopS3mwFSbuwnd2gZ1WGRm89Zta6zFgLNrJGZuXYTkx7jo1cawHp",
  "key13": "5E3m81N6rDbkxZZ61qNLS42MisABMMU38DbYJiyTphFRJxQ63G4RM2yCkHvy8DnYLmgcd6cVFLBDpqxdvUjXP2kN",
  "key14": "26Ap58pb1MTvkZ94sPqNuHifr9nvtc6PFgEJetvcJLAs2nDzFhkjgSQ9s6fvyhbT8dXwUzT8er4hMkqGtMvzdbkM",
  "key15": "5hzAyfBkPYoZeRnHf5dcXLi5gE6wj4K7cbUbgbFcQFKc1QWwa2rU5KvFqY55oKgctnzS9QnAUE1BqyoRhzL3Bghj",
  "key16": "Ptq6hyjsWGeLUj7g2CsHM15xWd7H3pgm3abhTJSN43reLxAo5BbvY2aJgPsDDEUZj23P19s9DQnSzsnMffQb5ne",
  "key17": "hqS8mZQwdpVzoaSkGmh4ScuHQCgThRVAcXcF1XC7suJefRcEK14VQND4qNnH3e64cAfhHWEqfkYHzL3dotfXgFc",
  "key18": "5pNuDt2rDygy1ZjBWtipMSMUD2QKwvH4QHELecxqppHwuSvonZfhVmWdF3WGUhvG3xrCA8ubSnW4R6CBMEJLxz4Q",
  "key19": "553o1Bsdv3hG89EVVJ5RAqq6dK96v8wwgNUfxRcWUQeBMuJvDcbjxVVN5vSDrNH6UNzUuM2c3MNindiY2teWPmPV",
  "key20": "2u2kqMoeHwX3LLhagb2iBFFsJuiEFFUDwor3ELQvMYhuGbRhTGPtR5TWchbtFjaEbkAerCwFpuTdVNBzm4aSq3X8",
  "key21": "ChMm6bBWNj1QAnNvXFkoKTdRRhTg2Lvqi32Gm7CFrdS2ddVbJ7Wb6NqELoTNM2ZH9JyZemQK4edzPCXY12QcLwr",
  "key22": "3ZnMWQ8hXozhupyTs4WxNwRywhevjKQvp1pFW5L4LuGkeQxaoGNdyXvQqPqJ9UCMaT1q7k4Cb6HUYmXGJ9vsoeMp",
  "key23": "22EeAXXxWemzDBYiQG6Fx1WLwmTgYtxBL9efF85gbVgrA86P6PfMFTnARqnnuFTumkH21uKt9tDLVyEpN12EUvec",
  "key24": "3hHyS6gKZ4AC17Bqox5ZMmWmUTPeAENXtHPQWgWrRWUrKZu3q1KmNZk4WRuYZuf8PLd9LdiQMzB5dyruzJn6Ctgp",
  "key25": "Rezf8Add9ajHZPiXnMnHJjNWnuh3JFCTpqnsHRVsdTp7zkRb3EfJSCSmqYH6uU4xLX7uZrzUFnKSovQrVYa3kXP",
  "key26": "5SB8LB2suVEYZgTrN91r7KTCXjB5SoF8BV4XK6WTWzeLkkNrnyvUo4epoL66g97uwKx9cakE23r254pGowNp3RtU",
  "key27": "4vLwcoLf8DyVWVN94HdJFNTCNGfvowE7KR3VKjYmQJmr5aunabmM7qwkfTsEgCspiJc7GsBdmFvR1BA3aqSLrE9y",
  "key28": "4SkpaLqMMHT633mtRFx4JLqu3arYn3RcQupKJJaBJMhoHZmmUDUeytUd9JXWuBzYz6DwHyQ2rt3bVjGsrrVveuYz",
  "key29": "35N2k8Q6wNa6YanVbQgKVQjASJoRh7GNdU1AUyDj5LwfdyExyebKHgQz7Qkqq1JF6yUTqV99xHiyxbThck3KdaVK",
  "key30": "2U2EUBN6GUPfraHZAyUCzhaw3GzF3jr2d8nM7im9WFKRFwTbvwcDo9ERAgMn3ZczyUuFkeMaRKrvCyMnTnTGBxig",
  "key31": "3AH9eMMv58PymNUqTEqfeKyGnwREDaUKkZHKxrMrpvHCcVYLYKHFZp6FTS4tTgxwoRbxSwPVDkhFRoCxGToBP7ci",
  "key32": "5hL4NWgogDdHNiThanDjW3YBDSCsguRvpPwh7pzfVFr1gaHwBYD1tHG23sL3avfhbPCRAgwgBdNfae9MdRMwfpEj",
  "key33": "3XyZNBPKuGfR1gCaGHHyvkJrRuuvAbPwMHtLv3CtByzbjGiaMnYM2M1aFdy1Mq2mdSk5GPEjU6KebRFKJfWSxkkG",
  "key34": "3CS21nB7sZtjbdWLtwJQk4QJCjydSnbVxy4Mwcr4wfAEZzFnbd5RbQHm8x28bo2YBywWjxGpXr3WWgv2i7Ey38jB",
  "key35": "29zzXkVjarhXNEcjFmnBc15GZVckNRnUz7vFRJr4bsmhx1E1eyTkfCVxRAiRFz774CtZMXeerdNA7cXjPamnjJu1",
  "key36": "42wJAF4VENNyr5tfKFVoV5nHdEjvBy277ypBbipQDTCmjeityQsiqXzpxSnHK32C8FWyFsnpa2piymJAcpeHMrtC",
  "key37": "3uFQcFGNuPZnCLeVGBQ95XPG5FPeqQRyhRqZvktzKcsbRabdb82JbefRE5HwMpMoQ6JXQCvrLiwsdaMwtLeCBFwZ"
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
