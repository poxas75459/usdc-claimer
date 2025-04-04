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
    "cZfAs686vhkJJ858DyVsM7KAfjNz1y4ALJAYCY6QmZAFCN5YG9rdTYY5n9ed45TmxJPWWSj13dzoChyA13o2Cmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFDEYiZgPsyWz5cNSMdamZFDPkH8yfcW8XNa1KY343zRaMKLt2tPLRwzBYoS4rQr9pfcu261ZBrLSbXvrQWd79k",
  "key1": "3aT9cHXw4uRnNsf1zrNwEZnbSTrAGJS8N6tEZVwdg9ys1o4tEbn7Uq5Y9cssiGPK4Se1qn52XJmnWpbpW2MtSfp5",
  "key2": "4Hm985qoVFejK5JdTVNY5PuGH4ZK7ZHHokmmN9DYCMtV7M3SygxjYTzupXqpdjT8oDq61yZHpZgoUHH294fCbYDB",
  "key3": "4cujS3oYmj2b4NCy3HrNwQfqbpXztHSAKtZ873CBG29UG2bZ45Qpoyowm8ZawQLPSJZsmarsV7TivammjUC7J8kC",
  "key4": "spzs6q1fSWZMSYHDdWRfS3UgWnULQ2vpFuDLyASxSh4KtkjhNvkHjTGB3p11JNncZtNwY4pu4a3XJcYgGpEmPiF",
  "key5": "zfwyhrMT9vdE7ZStKFwmaXW62QycbAXsmGfTXyrRxR6ZjfaZbAAtKE3zz5Pw1CzPMMNbgSM12awQtYePTyr8Rct",
  "key6": "3GoKuKVZtV3E8JeccNhs5m6DWdNZKzhfCsqeT2h5XDTqwwMZ6Rgs8fuAikvigrxhp3ygqcXA7DnwQNXExr5LYVhm",
  "key7": "5i9LaM6NcqkvLxRVAev2tAcqExs4YW1sNUZyyfkwTZE9LB3Lcj4zYVRiVgYY2CProXBPf9skG7bApJcGNdtUozqz",
  "key8": "qPV7ginuzdCLxPN538sFtGVJYfMzWqo55k11NR2m6TkmSVrWbvuNDzryPqdpBgzxZBbexHNwDo6YqbqQ46UxZoe",
  "key9": "2Q7wWoyCy6S8WT1pSsUqHYPoB5J939GYsf7cjC527hSSoJSykAtnreYoniQ1jPinYXsrntGgtCHpeX1exwRCRTFF",
  "key10": "5peP6SFjTtWpN1Nszft9Z8omMDDLdwbqsh2287V5ce6h5kr7ATLYNCHx3ww4R1WmvFAsaUSbZXBESkYtr64HKuHN",
  "key11": "2gH1DD816Kh1K7wDt8Ua1iR7f9chJiUTk6DjRPq622JaPTuatAAASEzhxYiCZdWBrrL2rYWsARC7GtfAEseATUuB",
  "key12": "2gdMuSrZaRAqzSzHyvuMautddxzxm1ugEAm1quaCquo2tQDk9QkuvYbq2HqCCAioiWLKkNC2n5qWiCN8Xid7wZHW",
  "key13": "58CHNs5hp1AhUiCfKhxYXdiHR76MBRLQNLtsstDk2J9CKnY4cThM7MrU7tk7kkRGi8VdCmmApL4mRhtCt7sz8eHd",
  "key14": "LFRzcruB5VZ2NE3jCETSy1ZH4Xmd2PF9ki3NgV9oNSJRfcpeZBGNmg6qcAccQPUUoi8YzAseYuK2VhYQmPJgHD4",
  "key15": "49fn8ZCru6Q5NHtfDwRTyZp1SuixKwtxKejDAtw3bRNoyfJcirZQ1E4p8ipaeRnPB5c8CVFJER7MLWAQghWz784g",
  "key16": "53JxZ4bigMPyw3e45pA3cM3iauiVG8xsE8Kt1nuwGiBqLitcr3tW44sfVHBqrjchczrS2gP6K5L12C9xmACcXv1V",
  "key17": "639Sy33eGhaHUrBqept92kBX29ijaEvxhpzUPCwnzn3n2psGm8uc3hRBwEHHcvnWqVTN9tT772j5HdybCjCrsZs5",
  "key18": "4MhYCLFYWC5RmcMRqYn8hnkimGqNhvZf4gh4LFoECN4vwWDWfgdV3a1znQJSSSMudmBqkFT3r2xEGdGqCFQ5j8NL",
  "key19": "4UoHNBdcxHsp5JqtkPTjMVzd3L2Vs7owSFStKDza2FDseimiryEGy768s7sSxFnnZgUWjboXe6PrworajAdWaAL2",
  "key20": "4ZZhAh8wDVweXjgRnP3cWu9XvZCyfrh2vFaQKZ6oqPffCmL59ZKZoMtLU35WpdmA1cXYVF6hRB76hVsFSEyzhqhX",
  "key21": "5RyTaSvMRyqiRrMu5oR6PrLmJnKWqtkPw5iM2vpoJjqeccrW2o8K8S27Tzjyx7Vi4CMz7pxeGsFe31cA69t1vi8q",
  "key22": "rqXSDFAB3hidjLGBcqXs17ezoDirAmFKLx9b9pTvCFzv4V4WLjHsnVHdMU7iCtrn5XRcwHbQiwNGgW7f9PswZrb",
  "key23": "4SyBB8U8mAVWbCSqycquc7q2GxpXcV3ybK2CnaV2LoZjxfHzaL1thyfJmwyvLo3rC78gEydrDJw8QJ9sMmsMMMPu",
  "key24": "2hw47cebazSUGvF65hHcSVV5SsMjwZkAvrFnfKeXANgRujNHsXpYYPvr1L2j1PEgnA4nMPTGQXT6vDsRmugL9RVY",
  "key25": "67XyZzxQ52hRkyZxH8Z4Cy9onSX3UWj3iJ3TX5kK7uvL6njNPs3hsYWchHmWUicmZKFJfCJuQY1nYkM3XzUpDCKe",
  "key26": "cmm9FQZ3jbUqKpA12BJ3K5iz2rKuf5KdGdVc2pzjk97oXNu7Wq6NGEcUeCHqy7hcnBF4cBrxY1p6tdv84bqYWvG",
  "key27": "2fbYciMqPXtm9xLeXWbdv2ogmjU228is9NiEAtHjhrtLoXnoeR6q1eqEYwVNPRWzzExQbSij3gbTRknj5VUddYFx",
  "key28": "4sBDfrpXe8KWNSX2AqsjgHKDCokY4jR5nMDmvXadY8o8Aqe73MguwidHkXrpke4chVGA66JRdbsFSMcu33prvZiT",
  "key29": "2qubRBwJuVnSYtN47CKNG9SVY5Qjw1vZ5GDEMM9HFk9X4fxbRFE9fQc3oNniUZXgKg9siVoiWnSBSLSYAMy3A4dA",
  "key30": "5WDRGNx7FeWoxGzcUfNNJCnn63UV3qHzxt6ADNKjJC22N2hGdsDU3PkH67bqwzyszwLacLdubxUBHwLEZr7bVvbQ",
  "key31": "35YRvf7NbaWdPGvMAEuxqn6gGAHMYr6BFA6386MUoi53SxC2SiZ2vtigx2b4jbXmxaD2egyhDwWzgGdqu7epmgyH",
  "key32": "cUo93ry95XHRibeRLKYJrvNcAimicnKuVWuK21XnZSaMCWBdWjxGmtxJVoBQFb5uBFuWs4CC7dCqnEMjKpNQCHC",
  "key33": "4qTLBekQfLbr9hsHFofxT9pBYvo9kEciXb5XR5ACY5oR6N3RcxPWBusDFaYWLdFHfCbV8WCQSNrWHfmgpDe4qb33",
  "key34": "6293j7cEEYb9nCanaNkLzvKNTXmAEzeo1sViQkisaBTPGYNkazM2nCcQryfN22rtDiDVsKdPfDTKrtgsjFwUuxr",
  "key35": "41NQUNcg36FNfWtv5mN6Lnai3kd8rBEwerSmytCM5q8sp4ACmR8sD3DKBJ5exT2tFNbrYeiJLeMSS2VqZaHWjiAK",
  "key36": "5rbMNKkBXemr4hNo8xtcX8HCfdnEC9x8rkRsgtH3AseVpNBv866g6z58XSTgzezDDckdsih3DwZQEwQTUNGDNSf",
  "key37": "2RyihL9x8avgEevF3E7W5FJWZGg2Cjhm8yKnodx45vf9c1mBKYbz9rS588GEQ77o11jAPG7doeUbMVpZz9z7iqt5"
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
