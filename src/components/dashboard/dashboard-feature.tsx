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
    "5mZUH2o2e4uvkckteFU6kuudN22W9wf6L7sLco4SrpHUf4qEfU4wntDyq3UuFRRNEDaRyDssBTBVFXgkjMavhaJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j5s26YAuUgbv8HHTS4vtqJo4zTctFGVfejp4mgxxT2Q9T1NF5EVEtPPS12K7mWixpsfZPJNgoZoKG2jTtWMAuQD",
  "key1": "dDQqvDJcRzPFdj4c5VHY8o1dqaShXQCMh7Y3LASpBs2ouWxSM5M3SkM4m7odybPUBf1jp3ywCzNabSEHAoFHpwn",
  "key2": "5qEgkKo9NWaZU44Hn494RqcjqhqUbRDL63DfkZUdHHowmZRTT636kbqoea4UYNbe2ycf9MhbY6woLDxZ7R4zvAq8",
  "key3": "3DafATWP3Ds7Z4pHJTHkVmcyzbmbXjh27N9N2a8gUtcmSjRBddRWts4iy4brgXFNRnDZBy8KYwUzomQpN6pj6uRD",
  "key4": "3uPSmRzcjzcc465XVHT9LLbTWfTxArFVo3eSLkoPFdAwecyvuTZrkx1q95hKpsHkVgxBBMBZJHc7qzq6iZHjgcP4",
  "key5": "3brVwxHEoayawVPvaXhxAm2Gc5CbLgtGfBDRjf8bcakx9d63Dn6L2QJoRmKgqHgJahyCb8seTvAjWo1q1w5a4BU4",
  "key6": "2Y3JUJD1hurrWTfyt4egLXsQwVo7ZsYZGr3jRBrmzXWPz8NgJeQa7Ehf73zJT58XshnXjAmJVMR5C11RiRTb1TQC",
  "key7": "4z2pZpxjoR9g7KCm6PBR7G7S2nqfKBDJjaZXYawgdnLL2bd2FirQePkdMf2KJAkMXjGRvqqtKvVsEVtTEWqqJzX5",
  "key8": "3qHB7RdqHDUrWbQYVkdX4MjwekFirb6tbX4F1dcmyrJatupkdLZs7etAvh2BssrgoSniBUbEHjCtsgzC1GjHbi7g",
  "key9": "5KFdx4WafSrEFyxNdHwwkPwHpSfZBqD4HXjVxEyGWyVAkqe83xX422Xpiy8rWhEbQWtZJuxM362d6RK9EdWkJjeZ",
  "key10": "2ULCkfKVBtd315pv3XAiQtaJGummHvvLDrXJ8RoA4JmgR93LbssuhSxDXpQhSfASvMxFwuZdYAMkNmVkCZ8jhYNg",
  "key11": "2vkYna7DAqXL8zZr1RZU27XTq8C9bH3hBfdSk6N47wLSQPo4PURs3rYnXXoALSNST4imrPWWeMCZB9iex2VCsbtA",
  "key12": "5QHDFG6EQNjh4HZcRYvBRqoBHa8bhEi1sxYzHWeqqkMjCK1JRsbLQiPUtYVUDAsqfPjJYKSVPVHifsE7iG94YCTJ",
  "key13": "2k9UnSUn3zdHKcjwxrMzK8xe4PjvSwo72jBHM7bc8uBc5xShi9qFK3EBbK3G74KjaAedeUhQPKdtyLS4qj1mc8LH",
  "key14": "5aLrPFZDjuyLCcf82gr7Y9AEbJ9mw7Yca1tBPobLrJGfxYXKP3oZm1zPi8JZoQTncCkj1cMD8cdr3JdR9zCntsVK",
  "key15": "QCsWQ25KBTpdcwuSdqjsBxeyz8twJHGt3HxsXU1JjK6rHzBSezq94QD7y7AKRBbGYbCg7Xa4i5VXpWy6si6Ef2J",
  "key16": "5GJcXw1x2N31Qvm7pfpNSfvbFvm5uY768AJmp135vnxVDAPspUVGmHspmZ8y1AdFJGsJSe3c6QfSJznUd9pSErya",
  "key17": "288qPJXTRWiwRdF1PxxtQVKbPpMG2fs9wgUqnyoqzZZErNfyV5RPraNNn1vyhKLHrgwZZvtQQc357PzByCwybgP2",
  "key18": "3iaR876TDw2jzJLAbXn254ZyN1YgatKFdaHzirhbrZcfPvoVdu9JGEAcpDh9v8FHQpRmMNE3NvdudoTuKrHZiev3",
  "key19": "2YBUsbU9PV9iHggiJPqBJjUBvU2VdUWKhdnfaRch8XhZJDp5z4WZxt7pDVCZnv3G4tscGRCnKdkoxoQs8tvXh5df",
  "key20": "37vQR1ibtssqP9EKvzVEBKE7fh6jjM1y3UN3SxHj9eMX3biLwSeU7HQwcynUbVsbVURpnuXDKUAnKsMw2vg2sZ4Y",
  "key21": "kZPcjprR4mgkABy8LirzqTy5jPfZYdaLdMmeuhmd3R1DjY8nKTbeXW6b26MkjXwjXsy8zhh1iWFdMusKLih48zq",
  "key22": "5mHsPJ7CnwYRkeZWwKu4xj2Zz8evR5WnSXtcS86tQQvhjpu2oQfv9N1gVXeHDhKJN9wayiq23yCcXmEoTJx8DVVd",
  "key23": "21iaTsi8zRPeD36xgXKkqTrMkVhg7zLNuynsTEjFyC2vh4toKeUsr3AQrrCVz35Hm2bAWySPE6yzBwjP7hgxBPzc",
  "key24": "2fR5tZDSpL8ULN2tDDGTh5iqvtEGqNvxh31UzC7C5kFJDK8DAxkbqFDTagdUqgynnCYnHAvmhgfUKziDDZn3VXnw",
  "key25": "o9Jb8L43fNsEgLb7hxhkTMBLgVFU5xX65wphSa8ezAybeSzq3V6GioWRn8HD9GSJbkBX9B87HCEhWbxL8FRhvGq",
  "key26": "5L62MyMFHJ6Qv31KM3WTkDfCZrXkYtPVfgdwRsKNXDJNqg38EHjnEHTtGm6vNTcRURwecUByKAg1vsFpK1g6qmFP",
  "key27": "3B6TohxEVu436ceNMkCvBAsh4WA1Cr5eU98v1B1MknWp3appbuf7WJ7S5DSTaxy33SFnMovuS7teQV55cMAdieiw",
  "key28": "2DNUBAroyDm9iJbEGrn5a6yXyoDb5CuHGaGeZU9gf2VZ7kW3ezn8bAMGErkoaKydX7bUxDoqZxYdVWhYdwagpLJC",
  "key29": "4jKt8Tftu7nrebKQiA9L1WhGSpmeheYAKG8c58fErgRgKc5tqeFy5H5Ecmhodb9fGpDLuX9EzrjLfvSFgWP8CLbu",
  "key30": "4YXe7cmAwyQNsV2VTfmep1GRqppuYrxHHhiiJMvHRmtypjwoBX4ZxDqzW6qTRHGVxEPVpbZrJzEhvFTaWRcJf9YL",
  "key31": "3gpDqQx5pTxhbs6fvp2uFA5k7c2GLLq8t1v9Qc6hHZTZZ1a1TyuREofvPfMaaN7VZ887eDiV6DygUwjzEL4KSpmm",
  "key32": "4BS3SnttHPUdZgwuCfzunXHLxY2PBjgEXJ5pdRWV7NyJhcmZpWLpPizK32msgHftWt6hfvE8ZEX2jTbpFBTqoVXM",
  "key33": "jaNHPWmGkViRUxAfoxfgiNbpZ8jCAHwDKwHoZzPHw2Ru5aJ7JQhrdibuhFGWmchjkv8noY1PX6yJe6N7XGcV9Rw",
  "key34": "Ca9RaceEqd18Kcet6nWTUh3Zscj6jPC8JDE7sf2LWaR4YQ7AeoBkdXMpxANb6imcV4CCZZ9yL8nu9yFiaeu1RVg",
  "key35": "5Dv1kEvt3dAFPgTESc4x9bGwMjzUDG7bADaSqT8mFRMGVMUct3JB9dZzuqtaLmnpz9ZhKXMdsSYsxGNxA2HwRqwN",
  "key36": "2qMYGQLd9QGA3M3Y5JKrx8zPabLBZyVwM1JAoCf7vCEEan4k4LWsEt4WDHgr2zqmkpPSusabnsfdvzr5begCpeRf",
  "key37": "36Tmstvi1ZLWaJkgXEtpimUzfo59D538kmMvtCfLzzpxZEkF34Qoy3MJARAt46QcSseEnjniLMqqwHUz4Xgj62m9",
  "key38": "5WWQcpNgTczaTd7zpSC6hLC8TWxDwfgCcaMoBAaaEVGVav4sWJDQGddTemyBw7X66ZSc5Cbv2v4LyH3zqUC5Fweg",
  "key39": "5BP1xzRE7BQdJFgvK7QBYwYYUFF6JNjEsHcdANTrGpfvRA875SEHv8zCfbezt9eoyJkMJNsr7upiKsSBaHPfybdN",
  "key40": "qj2emhWvQ4SWG89DYb9UWb6oHDAGzpifSGYCsuLRUJGWEHfzQ9phbCbmbRZwZro6feLJwZ1tyhiE2RADgDAJjhY",
  "key41": "5iiK5SyUeqAHJQ1LYfmpv2TT2vhie9a8TVaisLLRXvaVd3aCbVoEsz7FwhpDSMrjPERBAfK6W9PaNptWQUrpDVeq",
  "key42": "5fzQNJL66UKCcrrpGu3UMm31kYzxcPY5rhdYQBqwtNHRYpp3afoVZvxTnckEzwrKGZngyiwcnv4h86Th9Y42LYDL",
  "key43": "2pWFudGNbFbXU5rtQRWSDuJcMc8qVGztRU7oXzp9iq8DW19NvrKaxzcLcanSLNkXY2eVDMcQjn7wwB6JqWJdvto",
  "key44": "24No825BfpCiGDnsme7AYjNHVECUm1J5TBqwib4pLXDVmzfSc4K6dS2xhaHWijjLLr2XDakiJNmzHhmHHFh1oma2"
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
