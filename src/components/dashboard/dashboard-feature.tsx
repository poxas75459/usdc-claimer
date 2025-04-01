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
    "RQURZHMvHswkZv3Se7XMAvZcJW5DkZsH9uK3NcwhcWs75AL1U5rsWPyqoaxQqDhfSMgBdpsf1RzmVTDZ1BzwXtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsBEuVnwgXj315bbELbMrht6r6zoWa4m9bT3oPx8FVPobKLPBQg8NEHtenybNfAyzZFruKBEjNPD953XJ7n66rM",
  "key1": "26bGMhnkU4mAkYpYmn2p7b16cEKg4K7WUSKXZHguScuT8Mb62w6QHxDiPDo4PEtxDgdZHcbVRKUXxXW8EQVJAQCZ",
  "key2": "4btwZiq2hi2BSs7Mku1qbXX34YPpXDzKEfH2XG5cBw47Wkf9J476ifc4zRkScVim6ocNsnrpDDV6j7GewJxE5bkK",
  "key3": "5VbXcevArkF4aDjbqwtu9C8FSWQAxyVZ82xgSu42v7iRm87YzMkchFhzCWnFYNBWjogTqSJ9H7ZNyhx312j55uiF",
  "key4": "3xaH6je79VBNybQEuMhio2GQKahi24Q4cYRdXPZexNw2vrYxfq5Yv5vdzmkqMn4gTB8WnEc7mdimVacn9eq8t3QH",
  "key5": "2P9gozLkgMUBUAq7Yrvot8MGJSgBcvPYhMugNUrHh2WWEbmMfrRyfaFzxDzE7gYXWwLiC3FnVkdM5R3JSswFiNv2",
  "key6": "yAerCxmk6F9fBxzHMg8bNvAmD3DED8obg58Jkyado7iKaAkRm4M2U6VJMKUSXbZpqSK8V417fgZnhgzwFhNEoF7",
  "key7": "4hv7iy895Mi6ixHMjej9MDg5vCWk8HEdXhi7s4JoGEVXe2LaE44PXQrS9b4Dud1M627rviFFZ2GqGjKBCVGJzS1b",
  "key8": "33tmRLbUEMNqLiVuGuLoNdn6Yt9MneTeirDFnU7Q8hHZcUVHpVVQa1YhBfFpzFB2EVM7VBYWhz1cXKHpw5Aqvve9",
  "key9": "3fBvqtGPiNRDSiTPQJxCY8XFiSqRoZnauQhPJznBNDfJESdQ3Kk3GM5Q6N3RGFVoJ7Xe3dV5riDGkaXURTH4ZVZm",
  "key10": "43egSKpA4emWdg2nduKPRLn2EhXKX8MuAAdW2VPnEVCFyhKj2jEJc4FAoMx1njA7PRUkgvjroG9NnA1apfRVFMnA",
  "key11": "5CPxtAkseCGCrFEWYET8nAY5rTopWbFt5JooiN1p7tvMhGRQ2RsZyZzWxfubzJAH2LDVVPrYwQEep9TsCYY1rVuE",
  "key12": "RiFeo6pd5r9WMiiN6ykRjV4Fd9bFQNKUbwWUaG2CunhRMjBsXREBsaJp31Yitnw2bn8ptuvRMoQ3FnND3XWQj2n",
  "key13": "2ef8rYfh3SR9eiDFvJohrYyLubnQibbRdqoCVqy6xy8RP9QqiwyTNYV1BYRrSCWvMbCfZ8ZUbZBa4BFwZsFsRUF4",
  "key14": "33ePbEA1KzJvivJbKFAPeeUgJpQe7V1gZQoytc9Fjn1zJg3McDfbmZjyKoRo8sa1UAVTEMxg1UkGrn8gPkKHN5yQ",
  "key15": "2rNYqR39GoTynjxgDwUUnhdc81sNSiXL4y7FLwRoerZ77WbYDn2grZ4BaKAgcwafpcEGgQDxEs3cCpPvwn5zZ4Ry",
  "key16": "5PrT7s6kfs3yp5u4aTNerUsnX3HUqTgriV5P5eLvxvmkpyNeFYteHKiBgkUZDX9R5doetduZ9NDosP3ZQi5ifeuA",
  "key17": "32b9FrhVRjECuJFUemfUotQoZLiBvoXitkZd1vjqM6bq3hZQgTDYNLgj5WmG8VvfQixtySwCNzein47CKXK2PfvH",
  "key18": "4rjBu63iKYosZwiBVEVKpcaRyEzVeufxA4JK2KeSkotBY6KwoMqZsJGUbADr7wpDACJZ56A5Hu5zexV5hVgZ1xrf",
  "key19": "5mM3pmaEJmpYrosJrk8cKBWyQbnH2GJV4hGWY3yqxZfzYKF8STmsG3hHG9ZMBBcCmKutAGLK8tbYpRVxd2oxzi3h",
  "key20": "27FKWL9mDhCekEYrn9MDtY2eLLAunTpeoYps8TJkiAUypwNHvUJHyiwrdWx2dGwV4BoGxe3m2SFijC32FWvzYvbX",
  "key21": "4HwUPfAneLTXq8mmYpg4G4M7UPhhKtQmXPmwcTD3mtqD6PhR2mtxdCguqi7C9nHeNTedP4Y69xkF2D6NRMsnqGRU",
  "key22": "3xDi64KbVKXYFHGGz4Khk5VEQHTJPxpcv7iuFoTRnuFPQbnt7TCF8ASe8ZUfCT2w269czdMGnVd361WbMXdbC5R7",
  "key23": "5Bon9cEBQ2bVj6ar3w4CcnBgRnwo5tmgzStqyJ6GahVPSxkojQvF2CkxY4w2nmPZbXiss77WT7s8pAcAoiUNeGCs",
  "key24": "3tzBpVjMZjvDCsshM5Bva2Dfpqnr4BWnUdS7J2MBycksTEZBUCZjgHNLZsH47nyhwpfvUNJapKwjYvomxebPxhnz",
  "key25": "2HXLHFXQ4awaaLucvaMA93t9kttDJDCbAae1oc4LHvqqCiAQ3JCo81PmYM1WKyKDiKrLAeGwDC6iobx34CPKrPNR",
  "key26": "5iwX7nXVf3Ut6D1wL8fK7GME4bKkpQdaaBcay1ZGJnbM5eDGNLqS9qkdtxZVZeKBtxmBRF7fo3eJMnpFqR4PrMV2",
  "key27": "nX1fNjAHGJDx9q6J2aY6VRAWAhc5Mx35DUSYGv5FDLu3LAqngmagWAuxotMnEyFHMpiWVsf63eSK34kCfgCiVCk",
  "key28": "3ZCqGX974PiYgsgxcBbvXPDdgh25dWbJpLPsqdZwfvB63xXaGrGSG4z3DHwPbdjFGancBqUcM6vZTcyLPWBBi8po",
  "key29": "ZtmRWu1iFbX8V92pKxjLfhj5MhTnTBdoSDsZn9V6gaKcZ47huXpk5tx6e9T9jhNfS3pNnDzxHJrqMRWBxTVerL1",
  "key30": "3jj1ECtG3qZ7Ju7gf7RnA1shed1VjTXd7Z2EVxVvbDtHVL7cgLrT6ZjMeDgSwzQpepP41Ba5xeB54aFVycRCqRwx",
  "key31": "5zYQ9NxUof7t6x4vY32RZsWs1Nw3WASz8jKSvh2mu4QpkYCJC7cTFmRR6hAsDo4FiizBDcBoxezygkHH8zGLk1Yg",
  "key32": "268Vk7wVnMFaYpDato63i9h3kYkRfsKeqSLn5Ck8ZqfFtRCRX386K61Mq7twX4zpmCJsFqrGjaagQr2bXCu9V81C",
  "key33": "4HnxhnHrhUfMHTrqkg3eMpi9YxppyFrLtdba23oYWU5JZbLqRR55LNgNKRfKGba1GGFm83ybpaKFbbE8wW4xVDai",
  "key34": "4tsXunUL9Su9U8p21ksGSBaZ9yB92292khrfjzVG9LFJVuifvZD7Wt2SF1RgY9nZNMTVttRzzakS8nk4KzTc7nn8",
  "key35": "3vwzsYpi4u4irVzaavdeFUjrVMdyTTpgWbkfn2UsfWqnbGQfJkVkk5MK9pZ38CRxDn8SLaQ1DwspjgruXjUdw9FE",
  "key36": "4Qu9gk7ApSyFMe6DMEgKUiH8q1FrZk1616k8RQsCsS99xLJhLvFbF4pfLzPnDvL9YSnsQ3WxhHAiNvZdBXfiGxxj",
  "key37": "5RYRccWC5raqYMCQgHm8q9rptn6QpLnYzJ12BR6tMrv774NbQMKiHVUWK9PjzGdUv9iWNX47optNAHJDWt2YBAyN",
  "key38": "2Htk1qVcKYHX6tuWT8ihEKCCDgjjdPJRsGoK7zbWNBKc5i52QbDkMVMUkhaLeZ6vHn5oxEQ7RB928Xo5VTZ4oNLt",
  "key39": "51VfUuHGJVeMsQguPfYA6wBzjhKxGXoXNu4CJNMRLs9Ujh6A4FykcSvA5nyFR23ioJv42TLMu7RsWFEEcrHsq5z8",
  "key40": "4mN2wZc8599MZnZFBfjnyFBdpsPCpf75ZALo6YBPASeW54aHZnpT6msSBARmb9bNHbgrATRJoKXMWWyasHJrh5S1",
  "key41": "3DqPjFSDd1tPTJHdxNBHYVtDnT7H7YQqz7qagVxwYmuhyaiFzfUmwpKXeZFHE5WrbyK52ZxLuDcCc7FiX9WPXStn",
  "key42": "3J37QnPpb8t5d5x9UsjqMUs7bhUR2FF7EE2Ai7AuaBUjsNAgWAHWpbNo52BPkfjtAKo5Gxsy9ReKfBMuWfcmNGAW",
  "key43": "54SqqXweCBenJVnMh6RNRRgvC1df3THCtMZfkoZMLA55sai5vo27XBJ24snXKkwC53EJs9Km1wmWGsU4eF9hUp4J",
  "key44": "4pfHvn5jeart3TRvAbX31FbWe1K1M7FTKQ1mpiWaEpLjrdLeXMfaFVAtijBBbb7pY4xGAe8HSTigM6w9jrbtJh9Q",
  "key45": "2pT3exKSbW9ibeRa3AcJ38fo1k2QFBh18UmTpBZj1Dfzcj2irkhWQ4ii7rsJtZnwxk41Q2TrE862wp4XH66Xrkyg",
  "key46": "44jzDgpg8afG14Bq7MKT4ciJf39LobuWShdU6anmqEnuPR2huyxym1T7ZmpCq1hgJpTMA3G5oHqvXs7zUEEsP4VB"
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
