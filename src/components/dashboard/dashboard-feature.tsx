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
    "3sNnyBdFPxs4LTkFExe71XLPrrUUdtjbBBpfT4JHc3XBrs75iDiSwKK1wksrsfi8FKU2tcZvd86sp5M1ESB5kyoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQKvzZk15Edih5LGKyJacA9jM3Ne6dsNob1saFTwrzJa2BuNM81ooK4WYnegsuXW4yFhs6oFKjFejiptiejECFt",
  "key1": "aeom1tYaj9EWHKGXpTTPWMXUX1UQaSh3it5B7QpTnbQh5Y4pp2trdFwCBNjvZ1ZQRKPPUzYn1xELF8ViCU1PH1o",
  "key2": "55MG9aSv3XFpmecCw7JvMTmoRAHK7XQJXuPoDuipng8rAGHtzDtMPmZya4Lq4JPyYTN92D5DEVaAAqQYohV7ZWYr",
  "key3": "4kcNFRURhwadT1cmFnANaEVpdo9tivsm6RFz86b6E7JqfThz2zZc7Uo7FCjmwLPgW5og9iQoPHnuDsv3Jcmrm4sJ",
  "key4": "DJnRdHAijfZTmeKyfKY2xmqpcnVyPFNWxodxMtecjihvj7XGJrpJqWYpnghWBuKrh5fo2YMjMRSmoZLp3mcMbLE",
  "key5": "4GBHW8PfabFDrieYymRJENePZgvQ3w9GeXPYYNA5W9q5Frg2tXKi6wFy4kSAdd6iKy7A9uU3nVTs5bJkHDoU72a8",
  "key6": "9HrEMpMNHe1vy9BMPrHtvqjUHSNtLB8DHkJUseLZjoqKLB3sz962qUDaCHH2jW4WsakEVD8G13jqUhfdsnBDR8z",
  "key7": "5qHfbB6TzRZnjkK4UtnvYif1a1ZkkLY61JEx2BLSZ2hW9hqHbRkJp2TyPvZwrP2Aa7mYFUPXPdLgJ95CAnFakn3a",
  "key8": "3HCsuQmg7Ne4WMRiDjqa76YJkXMyfhMdt2jvj8Mm45RfigX8kJX3S7KLydLVPw4Z1yJYx8L64zVoGy9MQjSd8aEt",
  "key9": "3NWvtFwwnuH9j8YKKhxFeGkjDbPAUoPwWNmXrvPMg8wg9HJAxBfdnZBMLSf656eB46Nv1e7TDmoWYdDRoGCfYF8Y",
  "key10": "5gDuooaCzE5bKW8x1UJYLZQBU5H5enXsownkNoS5JxHRxPYwz91S2zZft9AgbfWUhoe1saygcTKW22H9LBxekLch",
  "key11": "awH4DM9QYkR5KtDq7dXXoBWgA4zfp33SNySoGz9sMQVM2D7GfoeqHiJbxzWhKyHgvch7RS6rqxyW8mSPtPy1QKV",
  "key12": "2WWE9pvu2JW7Vdmym4kJL8MNqGfSwzeWG5vpyktDeMiDPsFkF1fSJnJKRHwvZ68xMYqr72ki2iCm57k9THeDykCF",
  "key13": "2bjg2jqDaoDyDgRbpzRZwEpbsTv5PdSUHf2aj6NYfxhv2PYwNR1dWYnCYaWnKwZ7crWQzQUVTtfcJfA62s2mv4g3",
  "key14": "3AYYdQmbb1RW7djshQhEEwLKgnBY6E9SEz9AvkUd8Bf5S4tvpWZ1xNzHHs9vJMGRKpLMWZDYVe2XN3GNba7apJsq",
  "key15": "4EwGydDF4kLx8Be9gjiqAstRKpx8uR6pTE3GESaMqQjQQWFck3gVqpw8VXL9BnvPEgtzTxibhckEKA5KqqZcv2bA",
  "key16": "4SZ8P4aJFE25G9mCw5yiXioiyMZr47fWc3MZi9cED7Y9xsNwcXmcp5vkt8SchcrcTvA5vnLj5VBEed1it4XXrQsf",
  "key17": "4R2Z3f8ga1TkfXSGMxhVFn4RfKqrJ2r27uFCCnt2FY1xVUUCRQG8bywQEkNRYhKEhifwwLcPXLTYA8TXi63Edw4A",
  "key18": "4fyiCV8hDtA7CNmiTo1zQa65RcCuwkbx8ejM3pGeLue1xP81EzwiCEWuSX5UJFjmxfjN3u7SCYe1p3BvWpeCtNJe",
  "key19": "3hZKVSDk7m3YxVrbuuSE9xiKbHZU1gstctzbUjdHLsAVvy9hemRQhjL2xxGUtp1LYnzVgSxhv44Mn3SVoLimGxB6",
  "key20": "2zqFj7tQS1hYLUP2PuYAwuajJfV42Hya4gxjKBoH6E4dj6S6GGpLqsz2Usi2Qa9sFzrXAvfSwzJ1zn9rE53twWLw",
  "key21": "kzLGZzb4eVfLuobXXWS8WETAT1wvYx1W2GWEwUbTXuaWG1154ygzNhzboNasozbGbyLuqpntcVUjtFfjJB7i946",
  "key22": "vZXn8YZpF6sU98fHcskBKo6bJxA7sk56bzNHCtab7Nnh7cHHssRwj4AbB4pmHM5qHGdBc7WnBzyEYp8MNcR3ZoV",
  "key23": "3vhGz91p8ZwiAexYgyWENXc8WyzX7qVSW1pw262gVTBtpijJE3qEDSGgF8a5zzZd9zhJtgYkDBWygsoHC5uuA7Vk",
  "key24": "48HYTUhVkYbGnfFxBEpXmgLMvbR6tXSGUq8ujzfN4nNPZED9QECHuf611to3jm85iBsquYFdmDqvEG9gCVNso5nf",
  "key25": "oJU2LwiRQSyLduVo9pJ7cTj2KGrq6yqebCyVTgEmwf7DZv7GwM4xURxmnUPmc44JVVtfoBt7T11QCk9yAwFuJn2",
  "key26": "b4QQS2HrGvi8yntQZ8TzW6H2WmWHCdKcRG7qyDvTH4zKxx7VhBo65CoJGUfbY7Vdb87yC3HmP1CHjduDCknBKf3",
  "key27": "5ZW8HP8sMBobmXbdGrxJCjMtpojNuiwiLDrBMMecGVPVHUxArUKVekS1H5oubYbi1wDGUDnmrNnCCaPjTLWYwg7Q",
  "key28": "2hRm2yiGqK13LnMhSRG6Jowb1BFZELRby2YqKrhjURvXGuLRykdemiB5sZynQLgATzynBUanmqEjyBGH8DAoxzUX",
  "key29": "58niDFnu67FZ1ryX93k3EdeBTHZwzDPuEXwiMKZEnu5nvaRciG2xuxEecHZ9dGrG8947YDDcDLjNjvLJGCnVmGs6",
  "key30": "4E9cpw2eCqJtA6c4EDe21wMuFQAGu4GBTHJghox5AKxvTF1JqoArQny2otDBj9FMDDHeAbjwdmGWwMMNcFf12qE9",
  "key31": "3gS9TNMewtvtBRLSUWGGfV1QHMgKkNSUKxqLv5ep1QL7s1vAwJLxn3o3x2bCY7eSKaPS2GwYVbTEJa6v9wyndbcR",
  "key32": "2LNr38vg8UwoHFyuFQZ92eopDjGoJphiKQqYrsJmKuWvCii2LnB3RcsgkEPmjxHtfcReuLsK5ELjoWDaCPwVzRtb",
  "key33": "5yEabCuN6YkqWFe19Vyi9kXjMWSmwc8yWycXVueiEdq5q1rRkticyUf1soyhw5m3Qa2YRHECzmvUr6oHmKPuPDkM",
  "key34": "46gpFYjEzAnuo1soWucdQuBTp2D2Tbyp4QFowKUh665gxKpBMuL6EbgeuTyZTzz2xcxtpgUfygVaBXiT4FtHs7Ef",
  "key35": "2zrZghL7dcGbSo6V5S87S9qNHPE5tEncn4bVkVdh6tvB5UhBU7tC2QktP13PQwP7Auv3QPxK1BgFUvzegQAvuxYY",
  "key36": "2koySvcgY4KL5iovhZPuSru7om8nmLbCpYvRJU4Vd5ppQEotuZzZZjNQx8U9GJcjBkgJ6tf3WxsSMKJyZhzjTYwr",
  "key37": "3CYZLe5q2jpu8MESZSsTTEGZo5ppnVnuxhRYDpxRGJ55PL5RiJm9yxiBwNEhaYV1ATRnReXjDF9o2dGE1joNw26C",
  "key38": "4N25KLo1245fSyERYbhDXgCzDBZDJLDJKAWa6BWPv7miiq8S44dwwTKEbwoTNSbPV4BHQRqHNfukFPJAA4gEf3DZ",
  "key39": "24ZZNGjkxhmA2hGz8Cmaswk7qtpNLQhqwPQ4b1tMh5suAC3LfkgA16Pjnzn3Ut8Din4bEi68b9tWKLaHaNTeRJGg",
  "key40": "212hAcDFUzun1D5AnFWW29JMN7JrLMhk5uyyr7UyVAuShCyh4eFRVDTArdZxf9fxqkCRFnjbS3Lkes2KDdD9djr2",
  "key41": "3qGz4Wv7nVoX6CHUrh75V2W6X8wQWb3H3qrG8N9zvVs7jbkVvTKBQNzHcvFWUosv678Z6kyPfBdTcHGofo1Kec9b",
  "key42": "62Tjgzh33vtnw9AnrsCziaNSZ96K5C3Gx2EwCJzjBwfBWivZZfSs8seQ1hwbym1UsSPHkgUsszhzNGXfSwfVKFeL",
  "key43": "3fCq7e7arKxcGGpNQ3YE8zCHH6SBo1SVW2XXKHAkqicJxodKw9yDbP47mhE8dmGKVM47BPMSKJ2DMNMSFYBwLtzn",
  "key44": "y31gexR2TtkpcmJSkNm876qayvcq9r1zLyCveWgVbdQpQfZQCbqy7qPm6BseARiobpjFJqiKmp4oGBU44GPc9yy",
  "key45": "58ySuoJ1wxFrCQxq6kdPCsujefGciJNVJTYkzYFtd9TSAwpbP9MuE5wwV1E22yck2kpFbiqqsKaYm2Q3vjV853Qf",
  "key46": "41RwQR9kAtBoCHumvevBdzfBEYg6CwXJwizd8T2b9f4dr45tSqgNoNQpPS4HTSdh8AfeR4Q6tvhpffrKExS6SNX8",
  "key47": "3uNGxqiEu31xsZiboUyBoq4iMdLRnLvGAzcXDMGW8wCyySf5EeKUUFJaddyqwCJCfoaH9MLB2CyWzbdz8XgjdzDz",
  "key48": "43rH3NuUd5ZHewz8ys5QTfE9VNTqLeJLGDnz2gywHXw2eNYHtyBTvCA8qPR9MzH13KJ5knjDZ43Sz28VH5ShtN2X",
  "key49": "5DUcTc9vHnAMyiui3BoNfdmG22dtNwcMoMQ7MhZAb9JefeL4sYcTrCbcUe2RcLTXJcRQJ7HHAW4DFZwRXPPZDvTF"
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
