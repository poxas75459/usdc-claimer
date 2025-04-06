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
    "4xeYGBo1zfUBSR8WafxqmVpaVDdNrr2u7VKx5W9L7fcgZDYKgUxe2yduJxiTTmA8Ug8xrbz7YwT5iFBkXvq21aeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvh4DXLS6fWn96iBkktJ9RQyDxKoUevqhjRy3FwtVa2sRxtghv77Z6S9PtLFSQsF2sLgazspMf7BXUuRavEBkWi",
  "key1": "BzTG3LWKbor6sipsSzu3iyXT7GCvYPCC8uXrxdp2VZwP57bN9souxAyHtQJZJzn6jhdQE1t5HzeiodBHSUF77hf",
  "key2": "4xeshBWn9NMWq4zA2XpVmEXGCehr9KcqTxdnyabSDgvFJx94XMCwugEdAUbidYCSprfmECUvMxPAohYRerqTAJwt",
  "key3": "4sSpGFa6bTFqCNUCisu5gXBFTFMwYZU5GJKnfmoocEbnF8Mm1bHfoBArFjSs73mnLtt5kLjyMjoNy4qyVmkRoCAr",
  "key4": "2fyAKG2uBvVUxwYLoJSEykTcPDJYYLRnm2rn6BjphuTrteJHgfVgvRSSJccRrRNYXvfAZp8vK4Fge6iGBUyY246p",
  "key5": "5UxPAXUFJ4uwhyhLhypRV9qvCHRr2xoBkv6eWSFSDozgUxakXY1cRCsMnDd9RSF1hc5bj5XDCHj2AdvdoB6Si52c",
  "key6": "36miY8ZKWbbJ1r8w88wT97uYugWKtzYzSKDsTrjgB6VTu9sLcnVSo8XKoEoAvwXjX3hsHEgEweJ89jg2ydeUkxWb",
  "key7": "5MikV7K3XSnXsXTqmbwPS3KZ7cjJZbeDuPtq2KEoa6WF6g86ssWGxWmMHMC9VvLB77bY3AMCuNW8oFgtWF8jHsJr",
  "key8": "3VUCAFuL8HsmP4BM8GXooPtDE8gDBZuq3CD47BrJdtfexRhceYCZx8hKHJjDCyL4fFMWqUtngMxVaJK5jfT1oKHn",
  "key9": "HkPA9KLfrUkRQPVxeZwxjLSHjqT6jMeA9vTaXggXFMFXL9uUEJP3rtutx8tyE1wdvayvkjDqAfAEqy8cvBZgGqW",
  "key10": "4QFsL7grESqxmAZYq92RxmxUj1TgYHkHLeuuoydFsekiqgNyL56ZMe2Z2jshAwXKyKbuVVxrB8YLA73w9UAKAUSF",
  "key11": "431K9Pi8eKc1j5T2kVePqD4P8sDdysLHY4RNY5pDLr6aUsWPzqGBczgaBm5H1TbPdN2PxCdWSShQeCVg2Zek1Eq3",
  "key12": "3TV3ypbRba8qP91n4nMpBgqNubqW6BkbS13h3Mwenegzc8yQzchzzTzVLtKcE9pH3ZWhFSBmi6N1Zh58GEubt9rW",
  "key13": "tgQnhhGFY7irN2vUSv3KUUZLyWH9ctkC6CA5e81jqZ49BUANyWGYTNf9A4yVosjDNQLAu7jiaY9cUT9ZLun1K1r",
  "key14": "4HYvdzxV8rHmJWNXcsnxBEQ4Qf22r82RhvQZwN7MjoGNBc4Uw2UEpJDG3MhsDQCAWTAKJ2gDzxjGfArWNdtv7qA2",
  "key15": "2fSS3iMVE6BGPf9zKp1uMgFynLNNNXkqmWyENXCX4KD3aVJuqZwoCZ84D8khcgz4schNGfGoSKhogzWunqVw29MR",
  "key16": "2M9p7QKEijiy81dTQyUGMn4XAFW4N6KgkoyhQcz3yTBrdhQVA5QiwGdkVYohvmSLqs9nKGq9AvAdiESwPtybXma",
  "key17": "5QHKr5R4ph4R7gSCmyCSXZjQqpdimRUQLTDcKYpkM2xxfoisKXHLf7rLBpND1P1tg1skGdu7zLRkPKdNPpop4kR8",
  "key18": "3stFTP1zco7AkfarYePgtwz9Qhu19zD6MAS3aPknPtRYZWWCVcLPiyvLvV2PJ5T9RN4Gibie7bmXT8gYh83rHBr1",
  "key19": "24ZCPSPkHKFohTH24cizfUnvsEfz2uUuFYkgo4NZNf2qU84AL5cCo7vVaFJX4UNZ14ES2XvcZaf9KCVj8ovkwW1i",
  "key20": "4c1ZWACJibrap9Bz1RJkF5rpWWmjm49htHTAdSGbYdSbDG7rPTGKdJFjG2r1rMiLVAToLG7cZ2jafCA35sT6JPqp",
  "key21": "3VL3vzajfxyApTJbVFqXcKpizKU93anqWPMWhFSagp8eemkLLVBPYeUQrPPRbPf2XzKnxLZ8naQb7hiJ6t8Q57d1",
  "key22": "JhJ41iMudnfBEHGFEXCihLXDxF8hy9R5Q8uZLrvz2NoibvdHPMewB9CMo4Ew4e3FapiUb5jsR6arWpq2MGN58nL",
  "key23": "guhmhaCjVyNXiHjmBHX3fGgeGmY9CaSDWeCtwWnCi2ibgMPPnJ2JeuXeJVbso2PcSD9e8rMVBChaeRyJ6NkUpus",
  "key24": "56jwcwhMBULQbSyPnRAB2KSVd7LsisqpGPmoykCpNtciUe8KsXTMhQ2CqExv3PsWUpFHXxEAiJ6f7W31cPpJeLFo",
  "key25": "GCJrez3AvbczE1eqwRrhMjRz3asrcKvJGNUAAXbTo6sPC3N3zdneZk75bv5vHvGbVjaUydmn4b7yPSxjX6vJs65",
  "key26": "5HF31TuYb1t3iMmde431pXV9zEKeWT9haJz4nLnnkMkHDHdcdVLmaLYJZn6QZs9dc2ikFNDvdUf4GqAKWJCQRiKh",
  "key27": "nPtALeqLHVLweQFBsQNg1czzQKjqcB6BCyNhRJD2E8b4TtCAg9x5ujvpQirKinFmCkf1NF9BAZ6p961R8K7f8gs",
  "key28": "3SrnR4MgDrY5jt3qyThJsVS9iTUgU7dNJnJbxwsvBLQjpKKRvSvLRSzvMnR2SpWhCQjLGGUY8yg4zZZUx88qoGSL",
  "key29": "5GQCRKJCPb2jEYWHRtr2JEokvAp6G678bKESmVvqsUd6efNJjT1KT19GnJTe4K4JL9StJfZarZGDvBGwg1z97X4p",
  "key30": "Tum5Zc7sGzzYP68DXgbvkg4ttMExyMuFsmr7WAiZNkm4tTDftzEvedQMHnHBC1Z3aKt3Dz3zrc4cF3prKxn39iQ",
  "key31": "5VsTRz4gX1RLqZnRTsrNNenfK9hJYP4qVb5GpVzthPd5NQa5Yd4hveMPcKABGzSQ1pMdFw3kcVSCD4xZDCtpWLns",
  "key32": "hu44VyrKF4Bv2EiN7e5etMAb96xWzb4nWT1C8A7GufbpNqHg1KP3Xb2tR44fPaHLcs2GdGhaeNGuEAc9N1ZhvJK",
  "key33": "FhF3nAScu4GzBrdz7nJfaCroJtAEB1eKJBZsVYFHTGLJks5Gah9cpCx9XzX8YYYhiZFHwNV7Z6iK91n5dSSyRbn",
  "key34": "WPHCr1VEJh6YrudccTaZA8TL4eqGaoXtVTuEoD25fo5D2zWJssXDhQvou4ziEkp1WNHKMLxCLWsb49URoTMnoGA",
  "key35": "xyHyzqAFgjYHR9bXVLMuUmU5Mria5zhE8gY3K3ANzmPZLromP8tGvTEXUQRUeWWf5kD2ZjBaSm8fi1ZxJ8nBjZd",
  "key36": "3VY9GFBesVHqt2qbwFtgtXpsKqESqQ7i4ziU7kb4ZjD3A882GL4D72ifCUNA3EGTMv3nqsmUTjLXSbpH1TPhJFsY",
  "key37": "cSkwWDdC7GcZqPYwZiiYNH7XPk75zq9nwXxmPh4JtDM9CmbeCV5bGcKMuk1xyEFkLUcfZtzZSSpQyS1jWd97AKt",
  "key38": "2H9Kpa9kzZXcwXTfX5pxY5ubfYKfszaDUBtbjbFaDPrZAPpYx5KRg4avR8o2951quumMj6YhSo6VKAJBE8uhChtj",
  "key39": "4WS4W8NHs98hDY48heSkxcFU1651gtCVBHqXmpL2TgH8fozDEbknhXV55B8a5qcLHfCFjwqV7dfskvAcDmck1st3",
  "key40": "3J5z6gp8qXTG1nn4hsThgJpgMr1dnzAd1A9KNnatMMmA6wMwHtK1SM2JMjVMz671GFnLdWVeYDKz7Exx3ncSrj45",
  "key41": "cca8oe8dXSmjcgfQ7GSaxSB3SwkmVkC7ED2jWfJ3s74ZyF21bbu5biSbrARezCopcyDdhrek8qvJrTCQd6Qy458",
  "key42": "3zumTUnpEkhRtU4YxkMTh4swDJEWwdrb7v3jNBR5r347ck1uA4DJn9WkKU4ZjnCYjr7qE4Q6FqpdhPAZKYu1uKJ3"
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
