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
    "5mAxRYKKtZxTRRpuywoCwP8GrVKkGLpVZAmEgmd9gf8ZrtiCjwKQDkWCSdjorZG34Ja1LnAzxvPcg2zj94T71F6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YAtUTEsRB5g9Uy3MJkCSuXSFvB2f8cLy617VMyLtbNKFUJnbFJr67UYkneHVxsEHd18zaGajdkeVd5wiiWsKfC9",
  "key1": "3vWk1Pjw3QbedmvFFd8MdQp3mQpMzNFKy89PUEQtxQBdsWXtUz18A56MyEiyaDtJyFjEteszpvm6u4urHnRkfPmk",
  "key2": "5Rwcqr5g6PiNFhnZHy9fLKbAsyxS79ZpM73cH2PxmZezeShHhBkVdit2WvN9gt2vEWFcvJztWVBeEMfbyKYERjRB",
  "key3": "64QCU49tb4Gg7h1bGDCvYnCh5MSnYvJrEUYaSqticgFdmAjsXwRmQPbXUPDzekDwWgycckJ7BQv5bibHRrKFgndJ",
  "key4": "2vCnNSPTewLRNdtsYXEU18XpbFaCdgsHXwFWcUN7nncXbqNr8Msmskf93h1eVNhpRJ52wf7MvFHhqbzwvUr1xG6H",
  "key5": "5EoEWocJxtCjA78r4vzscTFNPU4W34K25FLvvDwEfUM7FqyPkqbNwrpZSwapJiMQY3zZmgLniEj8siYxcHzdwsr",
  "key6": "3Df1EpgaeNJjBmmH26bKj7hsbQCeK2xyp53ZtoKaeWWPbkyt7pUi9Xy6eE9YbczthxC9XyaNdaC1m4Y9K8UP6mAE",
  "key7": "5yK9SigjMSGsTmq6J6ErrcCTp8TpKUU8n85WpLRoZ1ij6GLE2Nu2RqkjCWjz4gk9Soafr2yM4qp2hM5MwqZcNEpV",
  "key8": "56xssEHPkco6JQngBDMLbrKMg3mY637zhp4oyki8AAhK2abMQxW8V2GnGSzCpCfVvYGBWRLLG95kU5N5MR3d4Mbg",
  "key9": "5WiwFxC8iNrkMrwShXripyssbjr3RCYiEwEbfZfUBqSW4uhUCJ9YDrpRcua2BbZroHXympxZazgjKcmkgVvFzkEx",
  "key10": "2aC9PM72GzcYovHJ9rbPpR8c3zwQw6EBnvPGRyGa7NqgE35wkW1GqVCD6c2J7sLv3WpMdLYYrzC6HwgX2zxq1sPK",
  "key11": "4RV2Xe8PToJnCHVtUjvLqHVN6iPRZPJXStmmbzmY8gVR7SkK5wr4w9H2ty742PV6ap6XoU93Q168CDGV62mPuFPD",
  "key12": "DYsEmCkxAjRpVUmh8rDdZSQNumC5PAQ5MSnrFMbauSWwydbmgw4chRBjo8Jw5CcaFsX8Jt8k9bdSuq6NFSgf3zz",
  "key13": "5E1yhWQcJJvMMdmDBAWeWksB3GP6NxyjehzBpJbxj2oSBubEKRbs5gfsCeaRui832obeXYViFdvMs1b1Wt7FiQyy",
  "key14": "4pnWhnoR9ZXnMgsRBCg6tMtCiSQ1bDxM1L8925weycFuTaLn6DCpWsJCbBsAYpRH1s6z1TQCjPPFmrP5nmU2u7gN",
  "key15": "4tdNnzxR6XLWsyMNTap3q4GgBGvJCHnTDfQ3w6Brdbq5usnpBncEf2e4PudVcciKJAFESdWfdhcsGmprRCxYBcvu",
  "key16": "kvt4a7kHZgNxZ2Xh9wtAReEc77FkWqTGGBLbMgenWRjQvVtrf2k4EN1T3N5TBgBKdS5AcZNct1uaa1hkuvbWuMw",
  "key17": "scD15zcDLb4ZXnf93HhgrEY33g73XLzDgByrLa6Esx3SNym7ngmGsSqTdp4LyXoVKBhCqssYcPPV6sQbcfk2kBp",
  "key18": "29vCTc7GsyteJHKUkUuPGLzXBcqcbcjwSC8niEY4nanwRzuQopY2n9mUAU8pVJbWycgcQRgBBy26BNgxTpSfmuNi",
  "key19": "2pcShACLbFSmxmZMUK26fvTA1trX3uYU24VscVSnMXCcKJHh2WpScXfQTjMyLZEuUfohDGxVY3HE79EvEcAX1JMn",
  "key20": "4eNiWr1opoeEvpCPDjaknSSGAgjjVEtughyTfbdQajWVCUBZne4DqVrF2vQnq1n5mjbwKEeL39m37orWxmqqqhWU",
  "key21": "3T18W6iVKZeSc7zrjqkPdPbapfh68EsHyz6FVfjKSEQJwV1SibosdHEvTcyzy6EsVPP9mz1PkXe3QkppnPu3QgG3",
  "key22": "5ZZji3hZmTRWXyzmMtLEeipnrojjKuuhLUQ8vYYiVnQaxBVAHBcCWH1MqXoLJ7xh3ZYuxnFSfnvYSh2WZpPwR1Ps",
  "key23": "583DjaxFR37aqGAbPaoowXJuazRy5Kiu6CtGkJo8WsRCKz8MVfoF5VREd8cZ31reqeoFBzZACP6t6nB7jdteFfC",
  "key24": "4jEgQfBcYw8aWnwd4wfRmM3LiBHnEyUkVG7Cxv7pyNkAfcziZN59nS6f6w3h2EHj1SrdsEyqXvZe9rjfX8PDCFSp",
  "key25": "RNQtaS94ZxDKtNuNJdQK5yjzpu1HK3sXfxaSS4xooL3gsoXe5nmezqgWzGVdbYcJutSrnN5aHcaCUKY7ErbNi9t",
  "key26": "2zayXAJCNq1SudLPmSUQ2t82tHkuUPHnEnmbw671fX9iGC6gNV2GZoiVZfXefj7vtbnM5gEndvN5tALmFQ3y8WDs",
  "key27": "5mtL6XqLBDSEFdUr7UafSY9fYJE3dubf7U1pRYCSf94kutueByepZNTY6x76qxrkqRY1AAhdsStZrqeBRxstAdMQ",
  "key28": "XcErWBU3n8As9X2An68pHxbbcVnqo8vvQ92dHmucEa7BsBTWZ1iDoYoS4V6cq1xsyJwuxsaBYArhyYrxfFagNjP",
  "key29": "4irFdRV2EXUcZq3gssV25t6rNJfF2CKuYaaKZrvYNZrhFi297tetPvbKUymCRiQ8EY1L1AP37A9ZdWJqAzpuKnVt",
  "key30": "mPgMQxLzFpAeTWwgCYg5PwzhiGQsEcWpAhrf9oYDoAyaG5Xy6wz7Zui889NEUYyFKq36U1DGUTCewdcAQNoABtL",
  "key31": "5XL4CbNodrZAS2ffgwg1A2ERGWoggYrWDwaQThiXaU52BE9egBQJw4yCJj4d1UVt8JriMQe94UYb5nVnp7K6Jmno",
  "key32": "2TRUCuDLoBD9aimCAeW9f2YD1ezBXRwYF7qCctiejc8knaShnw6321SA6kDoWwxYnBHkQn3YNJhd5Tq6bTGzWX3e",
  "key33": "3LVc8iHHvYE4vP1gokdCJGE3fsW466FmeMh1C4mw1QauHTnAL63zTKNZcThqS1uJzK6raY4weMvEVR7VrjEvjTjh",
  "key34": "4WZ9KG39aYvPbFBMvBDfxUq3dMRs1V86N4iFgMknqcJTrU3Nw169QehEe85h313u2zAqZ6S24tzwmqDyaNMBDqU3",
  "key35": "3gRLU5C8PRNmj3D78gLrekEWkc45N2Dw57ydQ38nMhzMVcUT3NMQcFKvVvizaniFG66tWCpwNDmJx7iR59my9WKj",
  "key36": "3kLrhw2tAp56FiH8NyMjPQe78GZHEGKRg2DfMGHNsU1dETs58iyn5vveJKsEmjnYQJowR3MFuZhEH9mqvaaYwZQg",
  "key37": "34VTrfofeqqVCvMK5KNrhqKkFK7ytk7sHTVdoukCLBe9yv3r753xPgTT1TBidedgeqFFmMa71zRCVH11uJMneUQj",
  "key38": "2MWBstJeqf9qyQUubbzgxSKxSnvXKPNc5UaCm3UddVrJN4j6hQJDvp65RTyTr8dQSjKyML4zVJW9om4gE9n1wUE4",
  "key39": "2dakUuedBu8zyhWUheHBkwKAFx5kEEGfcMpdPKmEX73nNjPZtAYgTjPd55T58qeeRvgmsMS6aVCiE5Wk91tN48Am",
  "key40": "3Xy8zxH9YaUkoKtNHAaojCLQJBPiY5yij4A9ZU1NFTvWFaUsHVj8jiLmrV8fVq52cSc8ag7kVTMozAsA7JEw9QWP",
  "key41": "36Ae5gVSkAkKegXo6jwS2kQpguorCyZYYY4bhrzhwR6L7zL3mxSS8KCpX1Z35syM2maDDck7pVgQeUpTJXa1AMTY",
  "key42": "5wrEupxgkvKsVHQrgEpVM7kGR2Rs7paG8nf1XK6kf38bx2zgUwHjsqP8PqBqQ31bpw5wyt2pWyFz4uT4iSw6kwNx",
  "key43": "3uAfZgzSRRtFzxeM22RQHbSxnHgumRKVAyN7wrsy5JiLoLoHaPzSqMda3dx9aXeDhxHqLm1VKkhKvFD6M9fZQ6q1",
  "key44": "45viAydSaM6rQUCdHz1Tossd96Z1TNCgeLohFnVnZ9JjX9MsZuMgDWLctb7ri6s3GA4bG9qFc2d7s3oBQSU4YNH4",
  "key45": "3dtF2N8tuCWmcgbv1bkanw9b545bnwFuDLaeXNteFdgYPckCLX8qjRqkVBNvECurjwuCCvJxHyazDiHcouxNhXEx",
  "key46": "3ihHiSj6jH2YjLSM6orPiU1CxaHEsh9vWMec6n5L1JUBXHMxcPVZ37DNVmqBfPBVEb5ckYvwUJiWymEfiyneUQHA"
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
