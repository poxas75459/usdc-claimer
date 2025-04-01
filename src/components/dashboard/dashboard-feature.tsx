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
    "59KytikeQdGr5zeX8GgXhQxxr45ZdcHxd31hFR2Q3cwTZBVd82sdMPZ77KzPrs9qbErcmVpkJjqqsFQuuv22za3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEaJzceHH6PUaDDkxqNcwPkVVxU5NorLtbTvryjvY3gwNSveCex3jtgsnesv5DP9ujEyqrYGqb7yNHyidUND4gt",
  "key1": "63ZFdypo1pkNjzyScEq27Xpb2QDFDw6vhRWrUnnGMJ7SZvcaMwmo3KsQ7y46hcYvSB9SwMv5Ze4e3TyFudm4wWay",
  "key2": "Eoc8TLb5FFMeW3MPNqiPYK4bK3ZJwVRA6gHEL7HbU4BQMnBXXjk8q7i5mVQswmUK6isizj9TfzUEnjHKLQNmHXs",
  "key3": "gL3tarJRjFCAvXvtnCt98eBNoFLWNnf2LkWk4zcx6RvUuMSKuKvQLmLvTrA3kPVvyt9uj638nELB8gUJDD9kXeu",
  "key4": "2FuFPreVMLVt1bu78q8hJLKbz6zRPg97vs82VPHokepRxvzcfcktiTQdB2SBppEpqoDu27ShshHWkCWD3GBj2tc8",
  "key5": "5tF18vWWJq3uzEeEzPxJrseT9eJ1TnuhCmCUQ5WswrZRKV22YsLEApzKnG2yeM33yfCtRzzosrhhkP1UKRdfkWjN",
  "key6": "3yMpmDy3AxVQmtmDqxDvkPnCuxvDM4V5oPUWG9gjasCrZLCu17wGD9kds5uBSLfn1TTPAMBXd9tkBcrnKM9LsDLN",
  "key7": "4QUqpFhRrQJoYfFUWPKPtPYsygwGGDjgEFyKEBXXWzhY2vM4a52U2aMRoVEMxWffcmDrNuGkuCrXoTbhqG9KyEfE",
  "key8": "5nHw6ebZDbRaqf9BrHfuPzn97DHJxtobHmpKAAVg8pkGV5Ek6UfWxGHH5X1rNpoervQLs3UMvqu7UN4kXyaCX6va",
  "key9": "Ce7T9QJePi1jiA6Xs6oja9uEkGAGwKwaV8VZzZ4BRRZb8D6ccbqx5PpqwyH6rEuXiMonxNsrc9s49gnjHHsDTxh",
  "key10": "3mpW84p6dfitVPNQh9v6mextgqp3Q9pwGeqJwSMAK62SKHmAReYN9pcLEEMC2ntouEYVku8eHSrJrxyprSuZ83eP",
  "key11": "4kNHkKWnZ3DseLwhxZEQm1yXTMe2zRbymHqXXNPx7Y9NGvWci5jPpoE921H5LsnSnrQKGhRzpJZtghKAYSXc21bc",
  "key12": "Fq8q8ffSpXpCvmKLQGVMhBYUqPbR4YweFx3TxHwydKSZ5X2W46rgUtLe338ECt9pwFNAHu8YmUby16r2cWmLVaZ",
  "key13": "23E5Uu3XJDu4RZneNa8s7P8MGBAEHU9otC8yDcNrwdiVLTBbTRNaDvPpsYwvB2mC7p1ZTLW4woVBS9BbWf3ACXcF",
  "key14": "2eDGfcT7x5K55DGJaTjWcBrg5Bq1aFaafdz1umW8rp4bq72KKAh9gEAg4qaHc8Zxwovuz6qMQwhast9ZmBYKcFwD",
  "key15": "5L1pHqkuUF4Xy9Xh7Qs3JW36kGNDJwi3WPvk7WuPRHdNxGiri1j8rEYacNz3UNwaZwsRsdYjFnaZ6Boczd6fAGKt",
  "key16": "2QtGNDRux29TTzky9XoToqPn46qzvhMEm5fTevMRALaianmft1rEcrPXbH3fbrrtieg5PkjwmcT55AueFtmtPx3u",
  "key17": "2ZKKbzcf18qdvLBQYxF9uJkZVLGi8MiJt1WWezRz9995TgGGxEeiQTpQx8YEbg33KZCqky14ncJiMAFnYVRLxGni",
  "key18": "4AqwizoLKDPjafSTZZsSSWauKjZFvbPz6ttMYsfju7brKennHDLcJivmqXDdi8ZCv26ksZGuw8ThByA7TjaNPdy8",
  "key19": "3tq5dnFk3Bur7fWuq1HExjVJsstuYkUR2ph2usLQNMCpd9sPzwuuKJeE1PfpM6b28HV4XVAYPDUtYv8s7ypUizQD",
  "key20": "4Eam52HksbAjfCn29BNKJdKMFsohM7a1t7Nb3XAbnujmLn4Lwib6iGBdhg89uAQTMRQrnLNfimfsWYpEQe3GpbMy",
  "key21": "6478y3o89i4Urqfydm4jB2As6LM4XRBs15VYqTc3JadLzSV4gXPKwxAHRYGT6LzF3kvqKm4eq3QwW5x5KJgjyZUQ",
  "key22": "23f5iEHbqWtGXfL2q171TenTBRW2jWow5nHAGmsLCZSgcZ53Px7YpxWsNNGtE3tDfGzQZ8qAVvU8rTeR5yAZWLzv",
  "key23": "2XW8YGanJcM6832Bm56YiJeLeUiqZ657SCavJ6DCei2RprNGgvQny5GFMocsxQEJ8RUK5hALYFS8R544MXUyeFzi",
  "key24": "4hCdktrMjZFZT8PqEWWXNRDYjZycfw3QqbfuUZYHvvWFUAAwJZnk84eo6KkJ9PTMEcJYPJih6EJ1x7reX1MveKWu",
  "key25": "5nzFdCv1wj1v5gey3udbvGisawGyKn33frf4jHRQBawcCgWXqnCsrCpDdtHSDuBrDkhZmyihv1jJL55V5WeRmLYh",
  "key26": "vqc81pFipAnE8SmLroykS1hpq8pZQht4AXswQ6K198Sg7QfL5xeBBCGzhTrAbVJK1VRuoMxzQkDhkqvby2xHdpC",
  "key27": "5kVVxBCJyCZDwEQQgAmsjqbfrWVWaysikqaAf6mv7XFYVyvgmqVqL4BthSobs72qBkACnaCXyGV1GNruGJLaFaod",
  "key28": "66AnYdPGgqfwSpdxHK55CQH6DkmYgz6ToTTWhmxLf3XzrUYr47A6o9Ngkyrc2uPaJvRSWZWhvuQEuDZeX4JJDyVp",
  "key29": "2Zqn2wKKaWRKfUSVb2DjNbU4J3m9BwSyTXXqMjxh1de8NjUk1M3ZQM696TUbPp9tuF2g9ciVycf1qBwbYAfptK9u",
  "key30": "3xTWJwpav1r6DvGULqyN1e5NCt1Zy6bF4vqhLxUpAv5yxetMQ6t9ojWwnxjmKSzwi9Bs4vyh7DA6epmKdPUhUeBs",
  "key31": "5u4ENGU3ABTgJnsjhtFLefzqXMhAvYi9bLKmihYhr4RvMvcVgayFtLWQaaWeeTHMe3fpJuxZezvAFrNwq6hDVxSi",
  "key32": "49dqAxojEZuPXRSpr5cFv7vJuJUKt1WWsHHg8iYVmGLkzhnbbFzMxxfdRCZPHcHpaKPZgt9PkcgjA9UADWkJawTV",
  "key33": "4RHjysAjq4MKKsVDxy6bo8vHT4FEAzP7UbuhaY7jpHwBBWzvJZbLignki1ecMq6VD7vzuCuJore8Yuvh96Ju2Yku",
  "key34": "fszosAa1oa1R7DTwmzkk4xgVKkhReKh7iR83NgpnXPdK1jNae6rB9Je8RPEnks7L2xzTm4g7iu7vbAiDMTbkhjv",
  "key35": "4LVXRLrQ872MHnVZ4dM4in2xsBDHtQoLUWTJYNXVD4qMFQ7EP6RM9nrM8nMDkBgtEJWsjtRYU8N8kJRQxS2rDrKd",
  "key36": "4mV4vSrNWQFwq1JFK2pgAPDGhir8rmcnXhVyYE8oW7fdz78s7jFzNjJrhhcBmXAgaVuhcx6oYe8FhAZatvX1KQFS",
  "key37": "5puyKpRVT6ro7dDaz8HJ5d4zineCdS8MdnfGs6zsDUYgH8twidxXkuSs23iCC9bXHqSF8AiSbTMNkJnLFmwDEB4",
  "key38": "E4fQjFFWq2dgU8UWGBpG1tcyyDU1UXxnpvYbzMQ8ATek2fYq76u1eTTeKjChmDqbS6YpEntTKEqVpminsK1ZnZF",
  "key39": "4ZD71cdW2vor3uocQtt8yyrnDtGeCmDr1Q5oRwcJNRq42TyuRzFbZs9vjssajnJVsL66ufYeJFXqm7Lyad61Y2y7",
  "key40": "36oUuLCyiyqMWonx2YwJhKXoN4QJycgRmcKNGdiaGDVoRoPCfS4Lsh37ZmLK54FRtZdxi9qf9cozm59FTkHxum8E",
  "key41": "35LmK6cYZ9ASpYcTU6Zjx561iL9qt6A14eay5VNJccxCbC8RvebkixcZzFZ5ESCGwJPL3puVy3oyLGJhLo6sLZpY",
  "key42": "4wjbvhoogTrau6BWYhCXgF9ViNUmkPePaMFJQEffT2hMbeMDK1YL5wiReur3adZiT7WLk4QULjAe7cVBsxZLVmw1"
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
