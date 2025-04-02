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
    "wQSot9n4yQZFoZ3DXKPWBsoqLLabpz1XkeLT7awbrQ1ZeueNJ1xpprbi2QrbEXBNrRHyLJ4bvxh3R8ta3FbDJ4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZiAhn8dEWmRo6ajS9QahpkKSV7pFFNVhgYLszFPn9jAM3D3tsRVFxVeK49eMdRuGUzUKXiWQPWgNujVcaEeJPm",
  "key1": "4k636ZqjAUgBRgsY2XvKh14gDq98NFKkcW9mnaTzYua7rqcC9FvBy94J1hn512E1iA3yJrcrqjAf3fZREEYKAnRN",
  "key2": "LMJ8zPT8EDwyMM8ETUCwQE4QCbF4FqDwH1zBvmrgiLkXRKuEN68BQLtNqALSHZDACvBcug374dDiqPwTaWbndpj",
  "key3": "KD3H47Qit3G43ftQAeQ1w9AyxtbUdFYzbjAhABCLKC1CcSNDTLJB3d5VjgkQcrcrtosixM8zVzZuBWkuAQPXy1P",
  "key4": "3WdMSqcUXtiqSkDR3kTZ2CLoui78PixzA1uRU6J2vCDqw78umC299NUSPc9zB2rrDhFENfZUfiDLnQJiHh73NVVb",
  "key5": "CKU8iub8fuCVYMYDcUryzPE12xgsn2g5neAv9GRuDfu9ssxCxVFdNjxJeewikiUQkeK8RAXYebXHUDaYKd1tcwm",
  "key6": "2RPP3iopP9pbV5EbzC49W8Bx9EcHrAgBqsgkzgtQ2Z8ShGGAksyy7tpNCBWNVbqbBZjE6pbYMVcEv63JH4F6At4g",
  "key7": "2JZrJ5WR7SSzEAgn3ae7FNwxCuS8AGL665D6B7nd7rRG6ik1Vf4Kti8wsnuVgY1RZzUkWSp7EfsUkGMhJVmHqpLr",
  "key8": "2tziEtz4w3EAUy6kNmjLrFS4UCrAKfuibvbFfuDEr4PPyF7vK9LdhhfzE36UgZjX7DPPcb2LDNjC5jQTe78jphb8",
  "key9": "26eF2ymh9NPxwxcyWSMK9zncHYf58cB9YsxFVVFtxskULVFwDao2FqBguwwRVj2kfqosDqaa8uRHVMU1Rp2k4P33",
  "key10": "4iPqEUFaFPVivU2gYYpRN4n4xE217Br5FZGjMuMkzo222q12pUHSDTDJcn79RAieYGtWXKEwL7MasYrvhtoDt3US",
  "key11": "2RVCFMQ7fHR3hv518vRbudP5XMDVKAag9daqM5aevVWgZanJUhCVk3nefqzt7wMgs1JH7xc1gQoEgeoPbKCJymFa",
  "key12": "3DA97fZxYaQjd6qp2BqxBmMAKZTWxFHKSRK499xkUpeRi2WfrXBXUQmpuZcN2pj7L2axgSdbmB3PbCyVBQCSg1X3",
  "key13": "5TTL5fXoim44RySE8yyRMFAmcVQ93rn2yxQ6FvoSsdwdRBK8kje18WpwPDtB4XZduwTLWRXsG8uwzWwHQaYreJ2q",
  "key14": "4QWyEBNn4C8ZDnmaM5tXyUemvjDzmzAKn1VHnAFvmu4WPE6UvYsUdNWcFc1zZRHMhdV7cWZaUFYv46FoRqrV2B8V",
  "key15": "5R6zaAnXFfsbhJmZH86qAtQPuB5rLvqzQZGJ1dFHoCMeZ3ACnqCg6E7VfWCVdzPvVfyMXqzswHg9dpnwgdaaHs3q",
  "key16": "4DcW3FtZxipQEv1pZNLBPAfdJYRX2LsHbQoE3TMARumMqjDvKKj5dgMfNuT6g2z2emJSquuN8qnCnfSXmWuaWjoY",
  "key17": "4dJKiChE7YyEiFX58n2cR7mY55WkN4nSEMXaQSavUUic3NrwE4AayXvWtQ7jQ61AvSzpJ8me57E1V4AjcfdPfTH5",
  "key18": "MjgsQDsz3sr6XUEDShPQmyjWAWysG6wBKtgs3disz89eRLKA1H2ixQsk7Aa2go1MVHEFson1kRKTYxvyTncvQxj",
  "key19": "3AeqmBXSLaWxg4Q7Yg31YvSCJwMc1oPgA54Ti4fiSNipx2xWk9m89s7o9JVe11ADwHketqZzPShPLRMwFA7qhnPp",
  "key20": "2628VaFpx2nU7csuXxyD4JCRodbWyVz7JjmNv5YrwE9RSp7GenQzR34metMcDZV6uBTnyrEc5NRBumybAbUfoanB",
  "key21": "2Pc1XxkJf7PMqkJ3gEsKvdgBTAa9iCAMVfpqRuLgL6irc9fEEax5ckdHChFsca7d7jxRGoCQs5C9HKeJ59CJKXtQ",
  "key22": "4MQHBGMYNGBohfAvjpiG5gWFvLkTAinL9n42BfGVqeuEvoy9DaEJknVXxPWnwM96aC6oCb7Dr1QnZWSawmgAujUj",
  "key23": "B26MYwPHfpH79N6D58TSf2dh8GyyR72EHg1S8VYHUL4ajuXFX51nkQd2uHvZotN8LgYRA31tSDtxLcCh3yU9VhA",
  "key24": "2gzQoy7mBmnTqFsSh2vetcCtsN9BVAwLqerKTyfrFrzAST9WbVD7dViULkeTZftBnccXnaWHmYrcu5KHiGCNHVQr",
  "key25": "cqTL3A6FLtsPRdWNXso7vXEByS7gmMDP4vdEfKNWsozbmi3j9KX6iTMtMCv7BmviJss3G7WYku8qhJh5RhuVwHy",
  "key26": "3x5RWnPHv6fp3PxEejFiwXVFLYEuqqkbX1gvvPLAgsXA1ijeYePARNmyhw9CfHwzc6DoEReRfZQiq78QaoYZ4M3P",
  "key27": "43FDGJTfuSKCfKXREhzTo3vUjYspNZKiAQ4snfqdifMM8ek1VpuMMhyvSb3dTVtvnJiXu4DVgTcWo2ByT8DUDfG",
  "key28": "3BWCJCCDdPtvJ1jrAgFwT3yh68kxv6ukLwD9jBk2L4FTDKMBepWmHibacbHWU18SEYGuEA53C6ypLfn73FAU24jS",
  "key29": "28cpZCR5tTcb8DHERV3Rys1SdjSoyP8Wus6UJFGtxCJ3b9mDf9gnLbSoRnttiq6LnGDiJx87jbCqoZqMMwuf1V9U",
  "key30": "3A1bkVo9frFWK7G6BNkYZLT4snBu3bvWKrQvAw4vxS3GpsnJ6Tj9uCG6LVdcXf1rgW4jVTvc3TqzX6R64gQVD2sE",
  "key31": "3yhUggsRMxGywDJpw5PH2uMBCp1ypcikdzAsT7UM8niFw9BaPaYNC5RWSvnDyrtaUwNaPrg4iLkvjJXzgpjBu9RW",
  "key32": "2k1GM6H2XQdyn3jNYA1ypfu3yBLtfKvhaTAtHPSrhoFxjRG8LDub1V7KsF8FvTikcSTeEtRZkAUWGfFz13fsXMKv",
  "key33": "4XXm3MNnarqELSS3vXCB1fyeXCrdRrfzP44uqkrLg1u29DLtbjTFQXESRiT6WGXzUXTw3a65WUNU2zuzhMsCAw9Q",
  "key34": "4BaJwih2VR45ipS29iXPfRq7naD9rkFbWexQjCEAkcjwVZJoHLhjeyHU7XRsN8m3ARJvLwQkQzDGLfheK2CGc9Eq",
  "key35": "5pGnp81HoBmzBttSvjxboND4Crq4uLrFKoNJXxEn11Nv4wJEHWAhEjuCLaUwuaCVED5VEZPtZgTd2r6BAG5Txdi2",
  "key36": "WfLJiVseEmX4zb53kzjSHttsQuyY5ypDpuengGuEnr4g1wDNNdxxJFUwksQnVBNQT9WRy6BzD6a7pjX6zWWpWTN",
  "key37": "4TtTAcb633GRdgWSfVzQHY54we6yzTTSJ68Ci8AhP63JvvAQXrvN829K96oamYpSsWu55sDF9hDSxh3QzoEA6FeB",
  "key38": "2BYEHCDZJaFjiyqY6S3detMpc8iw1dFn2CpvC69GBMah5jUWMQQHa9whNuNoSDohx1Pik7GyDEJjhyQ99vfBAjvF",
  "key39": "2E4NtPbSN73suZXmEVbGQfqt2ub7t9taptF8k3YSUBbJiVQYL6594NW6ZjaAVXLc7mPLxNy2AqdeYFaCTMJ7SpoG",
  "key40": "5sJgiHoszgo2ouUADCnSzC3hPohNUFQHXV8nKRh6xSHyn2tpkR5jcSTLoPQzX4LudsSkH7jZjdV1mDFGBDugNjnL",
  "key41": "3m1bmTnhs4CtvGFQktJWZ35ouj2yprBNyLgL4cxJJ2xVbiK7fawPafyXTeMzdqMGAcG2VdanknpXtx4ZfBf7Dwrm",
  "key42": "2gEesTosE7jdYjSk5aidzdFCBgcjGxGwavnNnDuNNcfVMTn9ismF6LCnJ5T4zM39SYQVo4bTNUvzvoAeJ7psMzme",
  "key43": "3JuN3tymZZT3Zo3YoZoyWBhuoFLUazbYxvrxXGK2WeZGvX1hMzs4zMvdJBkH7eMEbdMygQ6wXQhfJ6ZPhUgyLC1e",
  "key44": "626zHRitePkqgU7pMwNfXjc2Lt8ZxctAn8Go4pBdGT7Ct8TTeCgivM23gsj7FEUD4xpWqGs2XSmHmX2Rmb7KVakE",
  "key45": "2Lxn8cwiuNdmMy3XYRBLGfGrd2k3UgAksy74sbq4mpQurrJRF1jZqND87bGvXo4eY1SCtXDh7eCh8zAGRtRko8tf",
  "key46": "3tnwoLSr4xckHqJxhtrKdbwMj3b4LaiY8F7Q94GVr6nGd6LHk7M79y5TmmE9WkrdrYwwy64faZJtgR9MFm3C4iaa",
  "key47": "zrdqW3YpyQUMwmP7pRWpztbJQRcw64VdHUeVSiDZzkxoXwQC4dvQ177widkfvU22c2UEdg9r6itvLnEn9ZK3EcA",
  "key48": "2oKqGiHAzB5PpPmPdndEot3a2EvefFRj6bJ7TE6Mv63QbQVAyBrdm9oYCWWNje46JdMesGJXwkSJABCLQv7uJoee",
  "key49": "4nCFUxxUiksLQJbBDCM5WqpsJULsab1VFXSiUrJWaXw38cScmcsFfn7pcSriW85m9MW4aS49apwUzHubjF1SmLxc"
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
