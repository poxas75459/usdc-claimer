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
    "4cRmbZ1GTMp3QEzC28TCYro9Dn6dMeCtHGq15WixCRUBrbGi85CYJWv9zeZH3YgkAjQrmGPzQ5P65oTi3vkJwMH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iNUKuwkz9ZQWASgdSvCVZiNhMPBohpX95e2S3e8RxGJPzJ9mdkPzsZKERC2ejr2oPXqkVvWLB5RAgjgrdCcP3y1",
  "key1": "65RcDsE28rqMEsPXM8q5FE5funHzHcAPED6bKfYeZH9dS6xPHUVAfqmBqR9AmjX13zqYrDcVPQQJoVH2yHfnUaFF",
  "key2": "4D9BSkUVHetUHSrRzn27dZcesci3eVHTCPFJQZguUr98QPSpZX9FdLAAQGrytsj8y4LAfK2DS7J22GEc5vmtAb3b",
  "key3": "4t5qxHux2gDX5BkBUAcYwvb9hVoQw5iTyUeGFrZu7Kd2orBxaGjFtyAiwPkxNkMt8gMggD3hnQpnT2iMHGDNhxCz",
  "key4": "NPkueQs8VFjEEAFmF9fzDffhdzKsJpknmggdZmU2MBAzJCB4hd439VZG4EKUMi5TFncJrQSQa5pMUcuwjbFL8zi",
  "key5": "3WJQAxZmuWjgWcKqKbAHaup8NgAqocmRsS2yF8rf2HTF89Ej1ER1TtzP5GpsqzQr1X1zym1Eut7H9GpYh9gBoDao",
  "key6": "4kErEsmAFihCxbiMav7vvc4wQFZ7ams8tkprJLyj79fooTM9Y3vmKpP5SHqzYwQ3KU97JeWDqykuz6gNY5SXbAhh",
  "key7": "4J3r4fgYkJVMu3EwBD1uEMHMn4Yk1JJKWGNh8TR8ienyvzfsE7xAMREaM848E8mU59SAi6r5arHtfM4su8ouZPct",
  "key8": "21wJKYPu7CRxBFRopsVL46RKrvoRxyoYGV1wDMFwEiHJ8JcikshWLpEN9WfRDCR2xCc6xypTcKd5RHLSUaX2jcF4",
  "key9": "cSm422owTyg69Fw9hoLGUD7LMPLEfjDHshSwQ1mx6rHm52y7tDFF1UZxvhWJiA9DNDykyrHFYPHc89Nq6RRbymG",
  "key10": "25CFCmgax5CRdKENgeNzyMViGQhYYSTohve2JPwrGvRv6eGv5SzjpNy7Wuq9GVXfXv4hwDg23k7G5mFKLAbqHWDf",
  "key11": "36ZLeyZSDTbZTxjXiUBvrgFbdEPF7E1yVpbSaP1TRxRXc86Tri1fHHQ3DnQ2dSCJY7kMQJ97ResTqe4iunGdRPhh",
  "key12": "25UwKCpGVX1azAyNe9fmyMWygEvPMv3xXWsHt9N1TQ2ejdpw1ZQtPxxnyg65jXKrnEMTsyLoruT5J1BxjTK94UcX",
  "key13": "3HmJbeERevod5bVUdrtBGQTtqCSzyrvaFmct188MPLVGi3gFU486tXDQxh94qteasJDaPU9Y2EBQjV2zUS4wLut7",
  "key14": "2p2aYPPA9KHj3wL27KVy4ynSz6xv2iti34HC3iBnsctNuA8M26rtupuP1RybGDtYD62qe794D52M6K5V4e3mgzEK",
  "key15": "5uASuM2x9jHWGHpjao9zFKxNRha9WfLH5mpFL7AkuNFXMPgWDKoDkAKr7DS7UwBDyV9r5RWTvRpX3Qdzr7W7efwE",
  "key16": "37vA6yvhdiAtYNLyQ2y2f47Fm1FmfDLNxrvMHXZ8mcu7NxqZwB1G6pWMV8caEV1cKvRK1X1oXNR6o2yfbhnJ7ff1",
  "key17": "3XHkTYJNFnJEdSpHTN36hFbuDDnVmEjumvWadTjhaAM9otuVGjQFxPVRh8MNYptyNs3um5cedUFcLJM8f2MUVVyU",
  "key18": "4GCB4uu42VBGgEVdvVELGUA8gWPmyiLUt6BAUZcopy6iSy9YyfxXiDn1n65Cx8mpjhQ55SaRpW1UNPo1KhX1FY6u",
  "key19": "4wqDzD4eRqm6ZzUESQ7YnKdccjWJtc9CK77FiseyaDcinL9HsSF8A25o2xXkcn5SasLfM47cSkF296raM5jDGPYo",
  "key20": "4iNciC38uXMPANUEZrovUmHaMPP71Wos16BXwbDAJqs2wSt93NUciDaYnCtH4bUKP1cGPwTgcxSSfpt4dT6d1aob",
  "key21": "2k9NFULQimcKL9Z2Mr9q8ESVi6jsCoLK4Vst4XS8LL6hmrukrz1rf7GVzpxEiatYJfvgA9rant2fPWsXzH9FL1kU",
  "key22": "2HM3QWkNi5uytVK7giAjLw9bzsfr4fj964qE8Yai3uWiJrWYA9tZitsWHkE63xgch4r6kRErjNVsMzDFqGwMCjbp",
  "key23": "5KNcHHyLgXaU5Tadq67wYMASkEW3cYJL4PkepZACY23CBjy1wZdSx5vVveP5BpfojSh7QVLsi9xiYKgzkCdgXD5z",
  "key24": "5mqTewURkdQVWass7xHdZ4ijBABFSKUQR9KjjBa2hTcdpS7MJA4DUBzJWAKX8YkvCAzRRUGyZGqzn6MsDx2BywJH",
  "key25": "5Pa6R9iqUoCCYSXDYThN8TcpySg8Zq7cYoRnAxiZJKg2HgoMFR2iGA4aAtDSZCKVw8NadQvVoshHGzsqu4FZx1jf",
  "key26": "64aFwZUuhNAib1vwfqKBYCkoRytpzwcq6vJbkvSVjJxYbD5Ki7eejyhSHS7QHQAQTM9sPsWFuttdBUd45p2G6t4p",
  "key27": "CJVJKBg263m1agaEWAhvFUjPi1LA4GzuHtUK6VbvtPxAbfXzPn18cULT8RLpfX2o611TEnW462PvPhzomgqfVr4",
  "key28": "5ceVmPrAjNaMLV9pXDJtEx9TXcrvZgWCcCwUJpy4U5AWN7LDmFBnebE3r33D3CJ1HRRqk64tb4PAtyWNY98aDSNh",
  "key29": "2fRJonzfk3ApyjJRY3QbqVFvNSKjjZBWyjUH3oZSJXycy4LgnGQzshnWceZXNtRG2D6b1x4DX5SgivLwATLgEoCZ",
  "key30": "39q7CV8SsiiRVdfNdrF1J5xC67rw1v3r2ETmKgvSMzesrsvuoAgDbVo8oM4C6RKwksdFyKKJNm6hb18J8zHskKhZ",
  "key31": "3PX8Ft86TWSo9xUcDSGfa17SqCNkKGksoxKR8D1N7vqM66M2Phn1unmb93YWLpy8DWKDBF7Gk66AMxGp1iRCTv2R",
  "key32": "2RzcaG9P1fF9n8x6UQgYjJtayL8mMo99wupuKFQai4PjVazaeKCEFAWVzGbbGeLEYWpC2dfpSZbPwHfv5fxvgcNE",
  "key33": "2kHwyb2PTvi2MheX4oA4TcRNiXjnhEEP6rGcUH7QGy9Gt7MGRonotoNEbmuANr4XWpnmDqMMMsv9mNafWSDtAgyF",
  "key34": "3CXDZYy2v6EV4MVfvnQjmBJsXS4cp323x5n4dX4u8cS7sV6DUJVsu4z46WgkDKQc3crWkAF2Dnf9kXq17yN7KxBu",
  "key35": "cwd14G6D6AcWzrDMtJqAnTKmyiAkoY9hZevCct2XGPsCLJ9c78uHeEyf6cm9TacUme5GiPgacVUjRwhXnvbkHTJ",
  "key36": "4prPuyHEU2aL84zFhbSXFF6Njx2d6rehmqWeHHJcexWfgyfdRCntz2kcNy6axvxFNP34HQU7LGRdDkkPYi9ZzuxC",
  "key37": "67gYQkJutkY4sVYYd9E8RchL3DPHE7XYMRZ5AkbBHpFNGygu6cm1rPyGQNhdsw7qS32zwQSfVBTnQ5A2NKTRtUid",
  "key38": "3cQoWtSXyYaEzr7VfF2q52rpPavgskVoj3CdzJrmef4271x59FNBCXfHVMTstc8WHT3MroxYeN7HbAy43RUg59dw",
  "key39": "3rPkHd6xWoSgq6ZTaok1yciw7aTKMKFabk5XwP7udBFZzMQZ5m9YaxafscAnpQVD54DPmy6bQBWMQkbREiXpboR5",
  "key40": "434CuvXp17BkgEVB8HaNdcT3CA5eePbEtrC17TzF8FdidVMuu3Qa2UZia4uwmp2M7zNco4udF2DCUN5BkHocNELM",
  "key41": "5depjgjF3sQTNWkVKgYVzKEYc4PiYc1Y7nKwSqASQAtVHuRSzrPDqZ45V3ttV8AZbK31yv3X8vtFrvSd9zKvPxWp",
  "key42": "4nBgXGqiqg4eLywC3Q5FBqi2yLhoeoN3rNj417FAo5Vb5xzrFJeVVVzdLvZ1HaNMhK1wNfVfNCScNTdES87vAfLB",
  "key43": "26prvWbDpJHe7zqJcuqSBBgsnw6pwYQjmNTMtyDqvHK5AvSyLwVn5pYjizK1utgF1db7AGYqfZDwCLwstC8qsMJG",
  "key44": "3H7tjquy1fPb358aKiEKKm2ksBJxzMtZXKiiL2B9LwS7VHwV1Bqwma4HLFxsskTXHScXBqRZTdrbbQKULdrpb8s",
  "key45": "43ixDDFsYK4GHTgVC2ELhNYRxuQp25Du3kWqfcUQR58AzAaU5DXehA8Fsq158hRUVirDCtQm7vu3fdkdkb3YJ62U",
  "key46": "3RxyW1KX3DG83KhefrWPzrJBPSsqeYhSAsxue6syfL8e1JjMmMqzKLvN6R1egfzEmEkQNp7JR3G87yuSMLRSLnbD",
  "key47": "5yrhahY6CjeUBhUnm9Ut2LLtUtY2Cj3iJtXo4TAzd4RoFbTwP8HrforCcauMKLjxbQb1ifDUBQpoLFhpDQN1u2Xi",
  "key48": "oKJ2mfQaVk6ZcF6oJypyfPHtqF1WA48aGA4NaMfL8oKJoANPidGkCJs9pCKHBzwvPT5Hb9ep2Gy1n7gkccqipaC"
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
