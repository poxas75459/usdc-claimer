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
    "3GqfemHD1CmapKJNKD9pt4rhbGm1u1EHvnXBgFmQwujzyPvSb9vVMV3zZMTXZDuXrFs5CC3nK5H7zSL9WjQK5wZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVrkqEdPGEVpKW1n8EzFLqyAhutk9jef3SJTkoEwAYJ3ww6tVGweugreHPXvuH28Lmbq5TJREGJreFCcUQ8bToh",
  "key1": "3izmPrHTyNjtyP5WDW4z7W2P4WV7y2acu2sHFVbdTnoNTi2Ys9ZZ4YpKXwZr1eKCRvNP1bY8ZycUDdx6Xy4KoCxi",
  "key2": "ZStyqTUVP3qcnLj3n4ZXdnhxtHSRPEEHGuMkCFNSPCdqMWUsB3QbgUfVzR5cV8hnGNMYHiTXec4e8zb3EjWMLqj",
  "key3": "2yMuXmJJxRxdFgQsBSE9cnCCiKiisjMLjAC5bxUriWufvvUdJ7JthCZJcuiRZ3WFngrHcvEwvwMZUQhKLFQKPCtg",
  "key4": "2o5cSrwYz52hknaH4cgT5mESykxaqFsLE6SbegGztGA4qGJvEff6S7x9xKhsPQdKqwe72ATjLpZrRhUyLnnQoDxr",
  "key5": "2iFBaG6yXQnzZKmW7ZpEK5nvpb3RqqdHGUeNSdwLBctntdKgnGpZvosz9DiLohVGk4q6HVn45hMPUW7p2GatmtBW",
  "key6": "3EKSHob3UtSLuibrEK7fjF2HU7osCpCwinwfpAzNgGbdNifnyWjyhrQ4YfLi72cGKniUEzLSSLmRLjKX2ELHqDdf",
  "key7": "2wXGVKj4sko8zpMD5uhoruGfBwD4Ui5rxn1xatukWVtKzd6VDQYrUth4zyreHwSQqRubKk4WYGsGHgLDbDEVDcx4",
  "key8": "wApJy21JkGBuoDANgZ6Gfi5SQx6kMCmx9Appzt7qeiRC2xcLPAPHCqp5o82nNPAxqLHkBMRtmqWAkME7WFRbitN",
  "key9": "5JGGNMpysubSNwRcWuDUpeZzYeQWTGd8H6vQBz7YYjApE2qrxCrMqLeu6mkSz9C6GQsZxCua4GdQC8ftc5Dr8D59",
  "key10": "5z3LH8nu8W2FyGkbv77nhY7jzHN3DfMNCc9EPrcKBmwg3rRDcXt7RoEL8HjoaNx1iuAXzF2FCSGzZvNNyt6VayQf",
  "key11": "48SRRHYCRgtHzMq2eQowcWDEzYLQZNzVAtFaaNywuiqCmofqUAnZJ6sY9jQhecN3JPxuWCSCuGUaTzhLb9845eSM",
  "key12": "4aAcjJPAVxNatWg8bKRA4pPD79yoacTHEoTxJxVphH244E7UBDR7AXMEhP3dEzfWBUMnwpqATjbcfiMTuFJ4qSMp",
  "key13": "2NVdue6F42RmzCkBNF5Ga6p45H9w6tNsg5m9RjwBT19YrDxLghBhpAMhvg3j4qhK6etY3K5dBFe1pw56vf4j4KCc",
  "key14": "T29ymmRd3WnLLceby8ZTcG4WoqRExKNN32jwqtf6hfczxSMuZ5RRsmLdktwmfcWEU65sj6BGXm4LyvGf5k5Hh1K",
  "key15": "5u6XWeGHED7U2NbfjW6ZiupPL33oguWfeF1nR3wPL5Ft9jn6517aL491mic22Rcu2udobtXZ6pwX4MKfeB1eYDjj",
  "key16": "5PLkgFymQDRuquGj5rDrfBozXqmNSpLLdJz5VfHspsqiAPry64BLLnsGTYvuBn8BU35s7bzgb3aU4d5ruzo5s4nq",
  "key17": "5Scg28sa1APZp8wkcS4684R9UwtbWTyD7spoRUKj8zSdUifCeGSoqiBmUpvNjFAm8uTvNWg1ntLq3fh6sP2Kvdqa",
  "key18": "2bzBvCfkn9XXdPZHGwW3RHx4RBPAbCZXu6zZHGGp92YkzzQ15fvw8yGbd2Cs2um3uDahztkpanGcTsjLoE96VotL",
  "key19": "31YjFxNWPVZVFSN59SNTz47EvbUnrFkM5Uk2cxJ1dHfpNd1nY4MUW458STGCTdtr1iVepCCbyJRLmgPiDtBwHsrX",
  "key20": "41FpX2WvBXEJz4r1tw9F5snkyXZ2XP7WLY2uUK7kMxGUdkAyeDBb7nNLqs2iH47BEcCEKEPwqhSFYhmEuZYefpEp",
  "key21": "4XJMid5dKoew55y7QtZNmJNNBu2zyxShVBnnPfs5LuwmSXmLnGNwH53DoHSK9pExQ44JZDZqWayTTovJF93Fycrh",
  "key22": "2yaDm8vm9yvfs7DQ79oYzKpgC3CJ86e4sD2et1oCGjY87MSEpJrYFBEHP1xWWS3G53jZP11eprXjKaEo5aJ6HrTB",
  "key23": "5jNMBxJHRtFo1MVqzLN5n2WcoFU7AUamzagvkiboWY8m7Ls5x9J5C8soDcxECrbG8V4MXizuWS5JK7FWvUe7MJk",
  "key24": "5WncWSrQZ6fiyDQxct9hk25p2AC31kLQ6wu739LxT9LWWdKnhPofSBbuf14MqJvGW3QZK2qsBPYGtoJY5x1x6PaP",
  "key25": "46so4whKcSi5hVGUARv8od7mpzXsrkLPKMwjcw3jNoL1spYgSqim8Rad2Xr9dgepYus811cJ85izee7X6tXK2wWh",
  "key26": "5Jd5A6orD8FVm8PP3Kj3evyt4i3b8BfLGn9a8pd1PeT2TM7JPZ7qCTpw5rFmfGMT1T9SVXbsffXLe1pwHrrZmXWP",
  "key27": "pC4JLL7EYgK3saH3uV9A3LAmwzdGkMK3nwxFRZdaVmoWt2RsSjrQkQomos3s8qu4fgEzxDDjUfZtdAHWnh87jHJ",
  "key28": "4zmZkfPfLLhC9p6smifzAX4WsKpki8FN17DompwHYnufmYB8i3A62hkop6he4aJJTZLZAiWyzKfPEKj19DPxnLPB",
  "key29": "4Yvppes3sWW3LQPskGpUpWoSxfZXiLcJAqV9UPvvexoRxTcNXtnSNceR8m88qLYiU8YVkvQLfSPQHnbxyNqZ1DGf",
  "key30": "4EepbCcLeMSt3giCrmeGgQSAwPSBhwXDn53PqiRqB2MaPGruBc3xnmP8Q2H2KDt51ZNSRiLw7X6SLwxC4Bpbe6iv",
  "key31": "4SbbNdCPxG8jmNhw9WjvrLkLqkgTr88n94aupV1ekb5uW7CSuCjfHncEE2LkWa5FFM44y7JrXJAGtUa3w1shh7RZ",
  "key32": "19aqS3sPSN1WPyBvzNMZLQREYpHrvVr7WUiSvVBSr2pQ8vhxfgFdUqWnGbA9gCoJBu8sDGHx2AgYNxm5zAkSpJx",
  "key33": "5SBGqbo3xBcSp3o6kznxtJkN4XmvdiRmkweoNabmzAbRTpkkCe1eyFoUDzD2HWPe7pkeTbaKKCXALwrMaU32kA78",
  "key34": "3Aq1iAExvKtNvVNzNCmkhsJd93ANpb1Kuv15rauJsUni24vCQMuLixJiDmaVQx7RrbhcAB31ZUcBCWLvnVb3sgQA",
  "key35": "5Y9c1eyEyRtCWFkkdBRLmcTNQXyJXbafp1WjuMTg9XGE64yfmeR37B4jQmEVToSu5UqENDbRg5aAMLK1Jkr2imun",
  "key36": "Vdq5qsNA5XWGuYMWpgsc73CHjx5jaieQmugfgfS6s1tcTLTHx4fYo8J7iE2eL6dFrNBF9yjQTjsRZvZzYJjERuZ",
  "key37": "5tdaghRx13Qh7SnzuSgRsjqa4UA7ryhCvJZFxJ6CbnrpB4Rar2oejkcUq7TWPD5JQAWYHA7Y16mWEe7gMdCZsJ5t",
  "key38": "3trYtJLyFVJXQso6ZhJmKvvst92LtMq94B5jmXr6wgJL4CBWfFMU74jpAyJ1tttKR4kiy9Q2Ys3xDizucvEBrmjp",
  "key39": "3oyJ7BrzRHZp7MS3SSvto1oMqKt6iYjBFUFf5LoNjCw5HHVLhMSp5SsVUFLnVM2nQapBKoVtoTygLVgZB4pQoXsx",
  "key40": "36rQoy2xUZhNx4KVPZPrSzwp9tCpgab6ddGwa16BHWVBXqhzugHbFfPe5B39h8nHBup2LVq4sLssgVDnXMd9T6Z4",
  "key41": "2hUM6vMxhLWr3zLjQZRBv4giZe8Fb5ksKY7FYZBTPj3tNvxw2NLtLGkhYVomMskfzKGS6eqDYC7ukBq47zKZYV5a",
  "key42": "x5hZdp48Jqj1Muxtxt6dtBYb31pupTGvyam7KwvAsgWCysG149wF5feErdXGLaF2DaWSf5qzhuNK9hR6Aeaotkk",
  "key43": "3yq9tbtUCEgfXwXwUoc5MrGqk69KBKZmzWRGzTqXZ9sw5A5wvX9WhSk8FgjGHd5WKtSmJb918r2MkeTXAC2nKQCc"
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
