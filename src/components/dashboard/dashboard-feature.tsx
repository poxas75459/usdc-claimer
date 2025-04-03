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
    "jSn9gRPVWzBzb1cHtKyk9YhjYY2n9QZM2n6epQyJxmhDUrapQbKVWUF2MEoXccw9GHcJebfV67jVgMZWqAYdddW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYa1cMNidqCSVhbdMkHYfn7r9XFGLMhqNaSHwduVHiHKqJsj4FfMdygfebLkMGzRZgskLpkWqsDAx6uVoQ8WHFm",
  "key1": "PTh4mhp6nFqiqAnirCPbNg4AAm7Vn5Ws16rigegJXxr7whej88YXZHmC6NM7fmdrNPB4br7WQs5JC4eJVMXdeFR",
  "key2": "5PMAR1hWzQATSw1z7hGCG2d9n7TQcR6rY4373h7CfeGttka56aEQQtHZwuzitUSB1EhL2esVfSAQaFNLMLJGQsrL",
  "key3": "5kzkWMogkZjdidcgsXvj51WUmq4DNFAnWNoZozQtZQhM8evix8S1acpJAYUWgyK3ALcg1Nawe6aRtJ9uMKgzKtth",
  "key4": "5eqXTbo9A8bHEV8Nt3Qhk1qjb6vSmotsuAxaqt9eKvZFApPEvKA7vaHFghayQtreYdLDd2mMTRaE6YKyZxzJHzvi",
  "key5": "21MhZHUrCaMpoDdT8Dd6LZP2cQ8WS8xNHBW64Nhp78pTsmrgxy69yYTETouJqMWf4sEGdp2jPEkHBdLiz59Q1rN5",
  "key6": "5GRWXU6HemBtCxf8UMKJFVZqWE2BrDC2KK65N8vN2NGEaAP4UY3NTeEVq7CcepyP4bDgkm6qCjheHqCzieYhbS3Z",
  "key7": "3eVk1n7ixnVyhvwvRTyNj6vUpi2DqYYvss8BQ43VN7TPG3zoj63Art7Ysj6KCc9XrZgxetohjWSdfxzFegBrTggg",
  "key8": "2sDVj4YABj97KkBYJze3ZDq4jriWSj8f4YpzG4rko5wkxtiU4L2UmC2Dtd3KLmwwprjKnxmRXbPpdpH5LrZrFiXw",
  "key9": "9p92MtCcM1aMFJdQccJEQdX3b7F8NZkQek1QCGqpfv5sndnapotATarmSQZGVhzzE1XKMZHzLfqZFrr8T64guQu",
  "key10": "3fx2TtrrvTDVeuUaDm3J3ZAjAsbyhQvW2htwjGpXVaJ9paKcxYsQg1TYdnsqTDua9yLJpdi1yzuyzMFwqH6QarHW",
  "key11": "5kYMWmBreET1BVA4M5LZQ7ynhpQBgGYGywjrYC7bYLDtpbiJhLj2MVyKyMR3rHFHzAsypDMsFqoEur7BRoqkimmG",
  "key12": "38vfpcSeaqkJqSEP1icrcPdihWJtDZ4Ur7ECnqPuZpUrbZkT22s5frxLKnVFGmqefzSE9us2QVjKVLP867gsLMEU",
  "key13": "2qPs4mXECF9uBu2ozP18KsCb8Nqmezk2jPocpQmHvAvZvsBtKuRhqaqo12camdqoy632Rgt4df9Rhvxm2WcLf1YC",
  "key14": "26N9XcYM6Qdf4vHTiQoAonsvLA9yfFkCxiQUcp4JyzkVRNaje9onUihLMbz27mE1oST8th5Fm36H2BFLKBtQ9y2T",
  "key15": "2QR2tPfi6pmos7hwicXSHU939XwNRAnBiLAKuBLR8mpfgNc94UzqXmd5YfaXGEs9qmmWTBokanrrbbNYgoKpa6E",
  "key16": "2nvAfD7QmsMah5co1ed522BKZYUYZt7Kyb8799WyTVesDKafaw9PaSr8fv2EbttSn6oWZrnH5x73JXhoQSRKbHLb",
  "key17": "3RGd5RtNYmdvJGUGB1xU4N72Y55F3b4eRLCeKk3kp6TJkz2VeCAxykTvd6s5kYb1torDJsU1wEvKxRvZwzKaRsNE",
  "key18": "2Pd6oeqmAXWMZzh8fCXhQYc33wgk8vdTv9u8GydW724KFSXGTyqfwaut1HpTZKcG6rtH9qhA3jS1Ta8WyGJPMYMo",
  "key19": "LTz6zVSF1PEhJQtya2BYVWHt5gCGZQrzpc75PDUwW8cyZJ9mwFGYqLw7PpaAFwZgxoDwvuveMbaVyC78pm45BNu",
  "key20": "5Hq58or2xxNrnDH71H21VgbL3v1k4KHX1mPFXWstrwcnJyujVEPHyyzncugq3Vw6RQWE43PjCCsnAzEaNVyjrm6c",
  "key21": "5ZDC6WQgHQobrT8P69m6nfYnuwPzVskPDCrEqMSc6CK6NCBqocC9WnTvYqRBKQXHNZKbQmuPYjuFeFVNRJtZN1ZG",
  "key22": "jdSzpLG7BcjLaYuKfkNfLQFDxKvfmJ3hueM4P7z6XUvrWvs2Tox6KU87n6Lxoj2gKZWUAFTyr5bhgaCLLuu5fJi",
  "key23": "3FzXhsagj2P4vhyCpioVj7Dndkm29kaZshscZXeZk5LLsXZ9TwAwfwKuPNzT1vsvho3FMVpzYMzsLnxc5GVHESMn",
  "key24": "3Pb2sM1TDykMtDsRzbomDUrv4bXXa4pSWswSXR5ppvk2brf7TyZmobJnFALc3PNitCrVbXAwRKFNEnSDBeMzN716",
  "key25": "5NU6VGHCaRxnq4wpAPSoTTVeXxLKXF4pBnF9s17bTzhLGrqbVPHJ2kWm8y6iZHHN7b3vq7c3sf27zJXsDnvBsGZP",
  "key26": "5oGiBrDe49UUHoU2XyLnJCackNsPi22mNp9FRNSCcNYuAtU2s9Hmh4CmQZjCPSyXJo1KmYBEyj9y3MwFTAo1H6fq",
  "key27": "9mb72dcXaB2w9QufWobxj1rESnw4antRrfmeyh6nBMMHjckbG47GZ7ogfksik5nyNTXSFLd1nDAkEWJ8tXtRWQ2",
  "key28": "2t1Y6Nro9gkL8YSzqyGuisWnUtYkxvzi7pztW39Ut9ArqV7yWh1ZYGjjGHaehzHnUXgmsogC2jp9fiXm6CC9XcmK",
  "key29": "3cvJmsrdxvrzWWa1mSDXPVtEtLHkPUfhndD9k2dFCC1UQyxbDKLxrWfLSkKZHhyhP3wLJbkHn8ue8UXStZrBoaMQ",
  "key30": "5Kte5SSs1T23yNeiKBo7Ze77akwjicUaQsThyCk78j1DwgeoA6Msgp83d2mRyW7Uc6m3dKRAY1UsqEAo2yf2CmAG",
  "key31": "2GA3ABpVTS7K8abTnrTYHqqmbRG7oZkG67vNZJe5AmcPLTF1Lri8F2ytaQDExBG3HYGYxxsmGEt7nXhaD46WdWzh",
  "key32": "AGbcEricbhMRRxZrcgZ8VRfbfs4hfU3NWzUmu46BdKcxswmRfXvpqPXcy9YQJCjE3X37i615DRwL3nAYGh7MDLF",
  "key33": "5TAxjmq39sqbLTHdDdFdbTJSprkDVRoXnyCckVhUALkET8QeE4pJrtFrZ2urUPtJnaKUg85bausCDmjYXrCk87YF",
  "key34": "5MrV4SxEUwhtxfquFnfB7Tg9FKyBHNRUGsL5iuptbuFTZZzF1vSE5vpsFFXa8JBT3tc4hqE2qjPPrPMTV5jk3yEU",
  "key35": "5m8HgAE8bnpGaNp2dUrCjbdA42Xdf5cFx2gcNJJwhyy6cfi39xdSgnZGnCTh7ET1HPgKkxWNJJX3w1H4RwPdfYgX",
  "key36": "rrGzu7jdtJ6PHVMt1rAucADt1thvTuP1H6VjRWZAZn6zYNrp34Ja7pd3kwaarZAqMoEsbTcKREqoKKTjWYnXbBR",
  "key37": "5TdLDZVZwPYocSFqq47oUNmrPzJMQ6YRTQ2ZMhoh1uvocb46YzZV1WbH5J5EupGtYEB9aDFbTvpC9Xw5E3PqmZd2",
  "key38": "XQVzsNEv5GmtHPkhbNn5mkZRLBDrUCEb2RusGBzHSw9jFWVVa5noQQKL2FJRXt5d5UGz26wbCFhvMdQuE4LekcR",
  "key39": "5hKHfE8wMEEN7mQSVf4xgFyKs6GecNw5ZBkfKbjjS2LPgX2f3Q1NZVrKQt7QDAEmc1mVzsYgCXgmAPUE7sdagnkC",
  "key40": "2A8hwvYuj18SyorrbZVFBMLFoaLur6UNcaz16u7BDDXshfgsb4rqifVo91K6VwA2tkLr1nSf7Nc8FH91EBFGQagA",
  "key41": "fXVj4WM9TCkAkfNEYQHGHLH6UwNhWPwVe6H5xRaEbiDV6tssgaCEcKqZzN96dEamBdPYQNAw9jSJ2j1wWmF8kpa",
  "key42": "2Rw5qV5wCM2HqQ5kEta5oisoPC4M7ckgHS3ZQj9jDe8Ccswqq6ZGUe7BiSeU8ekXJrd7z3pr63CgRegPjwkatjWP",
  "key43": "YZw4wkVXkYkzusaVopTaz8i5PQx38RH86PuPHbD4U19XJP5Ag5X7BKRe6bSc3tcGz6d5MiqeUHCrJSstWbyPC5u",
  "key44": "5EMQYMYCy7HcdzJGvFqBbPP8BPYeChZTZUbJvwPcXcM598bBjJJdHoLTccqi2Vc1bU7n6FmteWiGmvfBjSuvWogb",
  "key45": "PgPzQDvf9jyuZr9rcv3cvqNCJ1zyGpFhYH2tsGFRDtwjWmNL9yLpmqNME3j1QAtD75mBWQg3Uhdk5apM2HHqg2r"
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
