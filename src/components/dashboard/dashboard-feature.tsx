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
    "2p4hSdDpYEBLFjUc3YzksTnaRjJR6TB84CNmdoUo4VX3MhnG2G8KrmiDu4wjqDtLNeNEgM5NQz4P6ATXERCnib4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AjfM5fS4pNhLB32kpipe2jZgSBLWKtE2U2wji5B7AGCwcgxXmzwvYrShNt9REXvYGzuCCiJPQbAGATfG2TAy3KF",
  "key1": "4Tce5pMjTzKuY2iiQY7yTMhNznxLqC8BFfnjGNmnWgT56NN5piK4mDaoLJ19XJHbHcGWkAdtLfo3HoE9NJBJUB24",
  "key2": "JvbGZkNdKcWezsnsqxFFAdMDqCLvVQdjwnd51EXoRnTcM4nhRRQDuBrsJWjTdHYbThgAdLCgJNNATH26xjSzNQB",
  "key3": "2Fmdo7ckKWtkYVjQjbah1tCemzAriQRwyuWLWxu5UL3cuhquN3Wjpv7aUeCCLrGUYSqxQe2T4A1H5AkHy46YLUg1",
  "key4": "3qavU2GubJPyyMNaNQUTbMB1vLgdtoUeT3m5TdnS3HPEyRd3zAwQWfMMcwbcvHR51Gzo8RtvN5vDZCks7Rt4iUBb",
  "key5": "4i9BVUkVMXkie2WZm3qdaKvXafEQGTv9swR9XbAT3AJfHm2uU7rK3UVaGXYmYr7qcB3sBJu4c3i8UWDfjg4rfAbC",
  "key6": "3JhnzTVkK3EUegtjCM8SeZW8wJRqnGiR9XS67eqainoYxeTuTSM5RDzaxEPLg5RXJP5GxswiSaPcQ1V6oesYQsHv",
  "key7": "2TyfZXgF3mkXVWkJW1VCyB6HHUZHuQMSG9sTQvS7aTxn2odmcbhZvrgJV6y5sYfKGWe3qqpBvSxdtzg7CmZ9fKB4",
  "key8": "36wha3oDhcoqDk76ajstfwmNeHoLp4rFDvjP5CM9iNxq8NLGNjYgbwaQ2yS3ba57gNJJvbFhpZCn1EY6Bn4uH9j4",
  "key9": "VNfBBGvdY8ZLkDNy8P8QcLEkFAnzVUjTR6UKjh7ffcv2bMprywwm5oWFxgeFtfiWFxjNpoamV3XDYb4G3rfB1rn",
  "key10": "3PM9Wc5w3rQTE7tGWwUxrRzAMko9bvnhTttZBfm1ecFszcX7XmU5ygNHFwuMuLiJ8N5P2CBDkMvycqkB6vxydhrR",
  "key11": "358PAVdYWMYXEp9J5dAjnTT27PSgc8KLbpydRC7KFH7VKzCQFnbsnjABLP8GPKNjUnbdzGM7Frnh8PAHLEcHbYd1",
  "key12": "sNKvCqpVRAQeDXPwLyCCAU4sK3AUeW1xsHYt4LqGnAbYCRgSFkumxxqEJax6Sywu8QdYHeyo7ZmoU7A2vsikqAf",
  "key13": "2QjtFREfLbr2rUqPRTDGawkmCFQhmbFfnFyMvZe6P7gNJhkhc2njYA2VwQqQwDM7Ch9Z3ZdmQMWnJEYripbrxCno",
  "key14": "4rG8Ja6TZRm4N3ABU7sVHsGzrHCSMzdYtg4i6QToHHTwjs71QcmJPVvqAsTx2YJiMPYFGLvLU5q3DAkVHedfFZ91",
  "key15": "5wqn3UobBbLmY8m3e6w26kNr4wm1xjWr85TgKNpzn7uGBszysgEmaHaCje2bkpboVAkcazhZ2atuxvXbqPwvKa8p",
  "key16": "3i255pkdWSigpEeLqUb2iapT8uy3GKSVsQ4CDcb7tEHSozTDuM6gAP77kan2kVYnGD1Y4wCA2wHv3xEexZYMxDfq",
  "key17": "4TZx6ef476Ufpkg1R6CB9EMxeYB9eUtzzrJxHzgKperzEX2aqRbSTCKmh4jiDRFnEsEpmq7zgd4oNiMPZ9oQEH1C",
  "key18": "JLn2fWNY7QxKDtgNCJ2tjq2Fy31MecTvf9HE88bc82Xczxh8sF5nLbF38qWJ9bwJ7bL6E2KQWM9y9RGCcgAqwka",
  "key19": "38bnuPKzX1QuGBPZZw49F1eg6e2KG88S5ACvCVwoKkaELwNED6zV2cVEZWbUMzPH2HrBW5nyDBQFQmxqVzjB3R4K",
  "key20": "2wXMq6CUtG8indanmEEj8L4dL72Ushz9tGtkUGNxpyEapCcGK2LSqodVyMK4yopyftCRDFePqN3ncrC8D8KA4UoT",
  "key21": "47ZBSyQECNYP9DkwJoUCuiPsGVfq5zNSXZLvEnGHnX1JaBwaQqayDAtrA7ewUf5ZDQqM1wsiLDXqdSC6g4gSDcDG",
  "key22": "4kz6r9iTK6pznTDUXcKvm455mPx2PKm8nw52MHUv5ib1kKJg4h1FKZjhn2jzQS2hfWjFFoANCWBVCQomRexcMj65",
  "key23": "cutDpSaA8LFZWH1Q1jaRyXvwHe6wD1S7283YaHyhaN1xaGp1KuexpjbLxtT7QRCmbLQmejBigGZiL3X1Sg5PAdq",
  "key24": "5VvRa6GmKvYSfmdwyECNnxifRRbBjHNs9Akj5tsg4663SoKBAgqNK7F5SGWh3PxiEJrvxgzqqwfSKdmqQ6wcpU1h",
  "key25": "bXEpEKtrDGBdYdMfsmv9LnmiGoTQrjguG7fXgoJUHkYp5Sz5vAorzN2Db8JWgRC6Hdo37UouF6n7He7UjffyTe6",
  "key26": "rgKgEBQzMEcPmRDENwJ7a7q8BBZhioQeqrmevSPYw3RRqaJbh2nYjGQ8kDiNGd7MWKszDDTyFZE7gijqiejN6YQ",
  "key27": "46tFwqWz87iUyxEdVwbxhq2i9fqcs9CRwkxecv1hCfvY7j311DzofG3sChdAtCg9k3jNxxxZt7za39F5YyBuZEtw",
  "key28": "2Nqixzfvm3wVYGKC2Ab7BiGERAjiTFfkmeBpoBotpem2AK6cP4aFtQ3kk7sbSYzDZrqMLqcQmCLy5pvskSXhLhmj",
  "key29": "4v9SYJwuJxZ4UdMamDHejYKi8ECnGjEa5TiW4kUH9CWjBoRNVh4bHA6jZ8m1GVEm3rYqcMhyRmuF5E9veJBvyzmU",
  "key30": "2pExq6BkTEUfHmePsmDMDqekkkxt1BDk5Mb9BQUknsQSfCCgYXPB5TLi78Z5UbWarrEQc419HbfasYMQ8X4i63ZV",
  "key31": "4WByJKmknU77L33vLPF58vhJ7eVtQ4k3cibwwD48HAv6wpPCKmcS33bwMKhW4RhYaanPpWG2NNH61QxKNUuBcPUH",
  "key32": "3jdXWjHBv1x3FCR1ohVJh6iG3Vihghg9gSoHwZnanCKEJu1iLqTLHkSrMFZPUvhEwXg8qzwmDMhm3HTnCzJ3xbxz",
  "key33": "5jGbrcqrarBga1UsPPF8RQGo4pY2n2yEzrki7GZ9FVGF8PbncsATC69aJ87bfaW7UchyEnEkzCNikm9KAUYDx4Vq",
  "key34": "6xhEyAgTio1QU3T7J3g246XQdCUtBKdgxjeV8NrDBWNaTF5NTiz9sEbe55e5jZPeWUktqqzxyAhwc9Ctpmib7RR",
  "key35": "5RMsnHBW7CZSrYiVKgj9xcA8hPrmhDdDC1Uru8HLij2Tfms7wtPrmSdtASCrEGHsjXTri55V8tuvWy23sqq4RKdE",
  "key36": "5R1euffxhEj34oBDbFXmfqMgW2WX1JWdkh8et329EQw6v2RHqQRK9TqjKJTMEDijNQWEc2a3XVudP6sEiiknKwHd",
  "key37": "5mU26qzpDzKSs8udEHWkrt4FZ7Rz5ekwhNZvknEVPEWNydoR6nhEpizBz8qfbk7DZ7vCsrXJcPZRs2d37yiiAdnh",
  "key38": "rjyATNTxAk43epvHnnxtrPJhuLMPCy9nAdikyncLHuxoWj8YsGvrqThNbBKCRXUdAQuJDZD28RPkGdNoCvjCsoc",
  "key39": "5yTNWALd2yRaDJ7pXCBitUgiUiZMXuZB3TEEjvoyqgmnmLp5d2MaxikUszQTsdxKhshZcVaRW3SU9ABiDXQdqRkW",
  "key40": "5Est1JxA363FiXMnkRFFbFMfWjNjhDDrkKzt7vFnuLn5u8bLDXgwuQSVddXdwZ4ZFQq4t4GqaJTszxZXwr5526Zq",
  "key41": "8hnBp7PmpRfqVenbEmT5U6SWJhkzFvqra2SSH83hiUnGiWscsXdMYaMYVoRaLW4hntvmCjJNW4fAs1Fya275tV2",
  "key42": "3yrkn5MhMDWDP6wzmGLVxdPLJN75kFm4GWznFv3YqPwWpuES5G1VBw8VRRMsLx4snBMYFeMjqPPJ7Zq8KBaYMdss",
  "key43": "22gEe2zEuNT6oRTezrY49NetnLs2HZjpauZnUDEP1WE4FhFi3NExTk8mx2ktRQ3HHt2noCYVYhV8XJZtyyggJKH4",
  "key44": "21JGgnHpFiBYUZEkUodec27jFSpdrKE5n6p9MfSpfxEjdZgbxFLihH1EjCB8xrLJBNHmmQ37NkaUNy3kotXAAro8"
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
