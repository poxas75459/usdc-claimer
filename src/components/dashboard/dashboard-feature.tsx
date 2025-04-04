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
    "3sxLqF7tcyRadWaqn3E6R5okTXRV3nVr7ZsRmjxGxpBCBbMHhkoeH2jd9AWgJ1yBuNu7B693EWx65pjBpbfm5bhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCoaiZbabMnFEqET9XLgjomqJ3CScvMABGSdH6bwZZp8FaPwkdr1J23BSWLVePqNsWqimFnjvWjYynr6axmpUkU",
  "key1": "3YwtahRbdJRfF4tuZwfkNKYoq2o2XxmQJXLS5sqyba1mk5x4ueToAfviFfunUoxoPPJfpYXaQwDYTG7rqBs5sVWL",
  "key2": "2aFwMtte61LefkMmzBjBBsTUApHrzdfVqAGYqf9LCHScVWRmt9Eyw6Wtabdta8WhzGajd7uveHBCUHgPvFRXYssR",
  "key3": "3WyLF6GeZp6P2ii62btKDDgU34xBoYLXRdg3E92RMAuDQ65tTN2UAzZXQzFikFfjk2Ts4pwyRphaDYe6CcPAsA3S",
  "key4": "4s75GcZnC5Fo6z4GgKTSR24rDKCMFkHMK65RwmHHduzpGcC3kLMMxA7UMGQvrFgZcyQ3dnuAiNEoM1jhxh7ddFZt",
  "key5": "4foPzKQCLqcz4Mfj7Hdr4ojHLYfsnDSzRPjGAVpFaqY2175asmH3uwE7Sb4bHzLZHhL2AvXELAnsXqvVAs9zdveY",
  "key6": "3XJeqHDa3tvqtJWhEvUaZWF7o6Xo5HxTCgcKTUtokX95deAC41uDRRZRMSb8Nqpa8Z2mzNy63FwwNud82Q4bCqRX",
  "key7": "2AwjSAagYqBGgVxxj9TdMqRtZ3ijN9R72kUtAybmYE7ou4bBczWP5WNNrz7oQWuUnXSbYTnuUPoBHAJL6NrnuicH",
  "key8": "2v7Kv7bD9B9mEcYpYx2HtpNEKcdjzgK3wehutLPcx17qBqcuAwf9wnm3NNjNFsUYsjywYKET1PEyk9oapkPViQSd",
  "key9": "6EVK7nmoXi2ddmvkKRqb6Sh4vzHEThy3ovfz5BZFGQZmtY8baJ53rheKUtpqyyYLrfbzCcN9ThRdFkeNWV3qBZ7",
  "key10": "1exJ4pRC1PEDBLoC9nuovWR5WQFxP7897PAPxS6gk93bUeCvj28HwWhaKoHiw9xRw48RPWQCDmn6PHf9fcvNUZU",
  "key11": "29NevSQVpN9Rg9vwGi9isiZm9gRsk8gCZG8y1zqTkzHzdg57LLs4YF2BbAEb6EP2rZTU7F7mvmBcubRKvajCKVLd",
  "key12": "39WWkncEqGVafkNJB7NWKrF581zqh8bXg8yA1RwB6bVzDU2ztm8jugJenmdjd4nB6whyfsms5iWUmToZK76K9i2Z",
  "key13": "2gvvwJoFoDH5HHmTmcQvQgGjacrhgZNJacCQXN4kSzjAZ1UkbgPRwSGDQh95uoXu7RpSDUkaL189Gv2rxtufzJsh",
  "key14": "dtZaS4X6gfrQ9xCveXZRDDU1CvnniLnKDKTLf2XXj2mgnEY7Qki5kiJzEsvqLqjCNm42dV1g5ewzLfYXicGpuCS",
  "key15": "2Sm4qHfjyvjDmnvqMSDG2sjeTCZZDyckDfRRunnxJz7P7YbuNHMh6bE581hCYWQog8Xc8vpG39wfmFkncW9Y7Ma",
  "key16": "3N2zjFu9vCc8dBef8Keu5CXpBueXvS7FaDCdQ3z74GQd3UzicdRHmmxD88CKWza4bkNBzDychyPNEqPddoyCShe1",
  "key17": "5AeJjJ15WHLBdyWeXSSjJh3bgyxYw5DRnqjiPBbCYRAVZypdDj1rdTm6yt39ctcqTKJugozVHuxkeyBbvxMusLn6",
  "key18": "5ZRavBV14NZfEUnNP4h335GgLvnew1xigwPGEyHhiKSuESn66LUU8oAfb4VRoHG4Xb1ZcGv53xWCM43sKV8i4trq",
  "key19": "4Vdvg5bKWn45pHuEKKrHFLybEW4fDge2Z1Rv4Mbog7qx3SUwPRXbWeLwZpCCyzU2sBvGJDnGy9od94B8AUe8Mk5R",
  "key20": "4WmYzdm1CY4qMUt1kZ9qGWBUPu83WysePk5WFiHF9WrJLeZDwiDz3bNdeH1wzuHBPLd4GN4HPNRBBeGLUSwX8YnJ",
  "key21": "2jSZLtyYmu4dkpYrqXL14rB9ZtWVEvnbU5syM4TJWKZMM42un55aWyLd4rtH4bTX56JbG2Gxt2pp9NBKE7iRg6Hh",
  "key22": "5bAqCYkLytjDV3FjVxysEJsAny9LFdVgpBo4JacLdQzKfTViJqj9EpALtc2Y8qsfQs1auVqh4wVX7t3x7isKLh8v",
  "key23": "27bghs7jxDHbRxdSKY2WfvxSHe8MbKMHASgtT9fyiMmTkrkZwg97tREuMhwuLZzmMBm2Ex1fENdwt6PY9eoJuz75",
  "key24": "zhXytKeXTysgX1LAPzXjZJDQyStyMDtgAzuDadJRmDMiddFe9jkotgc8oQRWoHvrcCoZGwbDVH5vFNzdkafp4fH",
  "key25": "3wVes6iCUfUNMuFHMW4dBFmgJ8Ztems2rVLYDVXmBpRGtukWpjCVxf7o3jedEBu1mjn5iZasUu979hwRq4v2Tbs",
  "key26": "HybaG7pWHWbyRg4rG7LmM45fD2YiYCB7g5KVit7w2cczYWiTuzbMqF6CACF8zTh2oN9CzS3WccBktYoWxu6CJhR",
  "key27": "313Xj6WDnqsm6R9bq38DrhiPSJ76LtDnGaLYHgfBxGSUfJypPJqQaDAGEoU16UezvRuZZe14v64wGCDSPHhQYrqd",
  "key28": "3535ZBJamrBSKRSb8k5WF5ZX8y9ziDYLBAsBb1owKzS1hP8VzbBhaSMbXdy4ccdQezC4LUfLbsNF9nD1bZBHqin4",
  "key29": "2bAXxKmiYiXMWLggwtM9YBb4qH6qqkFqPRh6LXzPgzrhz3aKGA8pPx63fw9Zhfh6nzXgCxxcpRwkN54QrrhjFWkg",
  "key30": "5CNp2KBM5rehqo1EYHJYmg8J6mPCwnrvwgLxiWHHwW3Pp9b2g4gY7AFgArtpqBadWiiFnnCCJb1o5ZjssL3reWoa",
  "key31": "47GCko9EBQH1bFTW1awr2dH9To5YLi91tfzY9VnZHsrhhd7jzMyGC5K9PHqkqNKPbHYexPW7GTV13QpJUJp979tR",
  "key32": "2UVX7pQJsESZvru54K2oKwUACXbR9TkpsR5a8vh6LhnKMU7EcQ1Z5MXP2BqTSxDSqRLvL4uGsKW876A2uV9BWE3p",
  "key33": "3rnHJRbJmBhBXQH6khtJXsUa7qnJbZoSp4z4Ck1cJALUyN3zpRzcz7urRcFQkUHeqUs6LxvFtNkbpKrvmNxpTYBK",
  "key34": "4yV3AdED5qNZ7PcVMWFUxH6McjX2Tc4SZooXyyE6DHPXmq4AWkRFDYXdXozBFJS3ZF9mHarpUte4LC3c1wrT1URH",
  "key35": "4f9aA448raVyYqom4R3Gnb6LDBYSQD5DhbnqE88BRu1XRTShw5DyeHK8CYVnKYbzwvzfN6cumNRpeH8BhiMS3nrX",
  "key36": "DjP1cRvqTuQT5ghvigqorBGHwt2jfgneaTQHq8PmkcK8hQimH9wk9wYdVz26g8E1kZsPGmCAcxameqmD4FbwHji",
  "key37": "5pwLp2shA9TQLSsFnBuwhPwnQVLSJqrLAfKFpP38QrQ1D8spDA7qdTwRysYCpVaCxBdvnRiNxDcs3kSmckmWwx4m",
  "key38": "5SQ8kdzxaZFKDaSLXsWnVnFqabXZGrV6xxLBezuix1zARugg3HCxwFBTv4ukVEY57SgTScYaLpMSNGavuNEKmPnt",
  "key39": "67YwEiFyzH413s3YYW5eCrnHJpFznbGddzvvwhTQfBQbmB5ouUNmtEbX8tYy75gJ9ML9sqaKg88t1pqeVW4r6BWn",
  "key40": "UGjhRD6Z52rvg8ogxTCYU2t1iP6mb2oYC9VJfvea9vKf3tbB7TZGVs9FTbaHnmAD77De7UtWTWjRp4Rvwck691e",
  "key41": "4T9pzEXzC7xt6jfsduvHTWuqv4NDwRNTP9Q813iGGK3Er7jtEoNfvQBLSov5w2xcbRPcc3UxCjDjdWkEKJaowz74",
  "key42": "2gvhhjae4wGq6AXXTBbtjvJJgx292XW9tLkgmy424CMBmgM2vPfj9wyanMXYtSxoVqFu9HXy4Xn5Y7khForwYGw6",
  "key43": "3kT8oKZ2hGMAXZA3KPop2swtsoC8GtTbVEiRqjpfdFAjPDJ2GSBj5bU6wCGVWwZz1WRAt2ymJyksgHDJncvJ4mHr",
  "key44": "5ohE7kQVfsbspoGJ77XFoZLk3aWPTTrtVcSE3BeS3u4CMh7SKQPitdDZgAAqQLfeDia9WTJowSY1qxTszNDsM4fN",
  "key45": "5EwLxxL6URzZVevEvp8NhBxsbjAcXvzGEHpRSMgp1zXkWAuaxwQ9YCS3So83LDM2skY65hDmwprCfATM3kx4Drui"
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
