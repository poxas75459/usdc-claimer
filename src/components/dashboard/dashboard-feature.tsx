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
    "61pT4Qt6ekffsAjQLRVWjxW1dopPVuNY5Kkse3vzey1atJ6AsFhAAu1m5RkiSNpAB29FUeKxGXJXGU6gih7cXBJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2dhWxNsTgjwN4jdxReeYpUzQhbZtUFyYoGRHTctiB6N3Giut27MduJ2jZWWptn1NCo43HznKLNLd3BUtgZysmo",
  "key1": "2emjDfTK2ufGhMhXw4H8ex5fxDHzzoco33tZ8goNGuaX9KWFScrKTWHSFZRZYL5nANwuhrzT3jJp4ZPfXxwRcPJn",
  "key2": "464QsRWP6Q5nzdGD1CFGfAhYuUFtzcTkNhaaMiFeQt6ojWihaKm9Ks4yr1HXJq5xbZp4dLBicNQKJtQ8wkkUhKsQ",
  "key3": "4XvycndWjiReZnra3UyUxA2p5aUR3Muvqkj7uU6f1EWgiwqmT1TKatUv3rUzJZ47hd41wWPU3GgvcpeujZq9rw3h",
  "key4": "2oQJCDF9tvRcsYTaPmgP1R4rHjKaxGfoQjPEBsmbZ6AfJn65Wyvu15G4Tf4NM3tTaRUbnaRnvfUaRFZiETBpq9RH",
  "key5": "2wvyFW7ffAr9twng2uEkXonTp6619MHWHNbX9C9vPmfhXuNC88NMDcndiTZRkCVarKbaocDrdSaNcKz2UXH25iz2",
  "key6": "5He2tB2jypwzb4CZNFGB8tSqpVuSxr9wfHghufTBxzmw2UU9QtFkrVCuYEKToavDBRRnrKDPgBobbw84Jh4VPq4u",
  "key7": "32z1zkNncqfRP6megDd21M8EQWX9npT4pqNfpK3mg9LcJJnpBF8ZBPaW9PT92rxeNtJnT3YNZ3CAx54cA4gBxmFy",
  "key8": "aXY6Hd7t8QoWSA89mDf7fDYQPyDjv7k5QTsUKasNAFgeMLvrpynWDH6c6tHJ3MyjMeCcxs8xPipKBp3tpBPn8iT",
  "key9": "2kuwSHVPHDS1X7ErY4QGKYzaeCfMQb8MGEgimHaesjyhemnsZkr3w7Ah8WhHowKR5yubJv1fouZyeUgiynZFNfqD",
  "key10": "35TyX669eodSfEnJStubCMro8xh2Sy2FnMMTNrEkCxvDrANttpVwP3tiABa2MPBdVGUvYW7fYNyiMWFNkRZxMiPN",
  "key11": "4uaLDArcQDA5P9aQX6ZwvzPxmodUp9oi9Qr8ceVmUeikKMAm1kombp1vjLTSRcaSr4DQtN3AtrFSaYA88sbMFZ4j",
  "key12": "vh5Pp8YH4wCDVwgwEJLpeXQBHHHUjUV2Xe52PiHVwPz5nYsmNQbe1U6B7B4Pwecs9CkzaTDzyjJzzaiD55Z8Vhg",
  "key13": "XH8UwZeBHVpmhYREqfZizC6VWW7EuLs3UBscieFjNvUYrdEn8UhpgGzthF48vq2t9J6FePCXuPLPhEJr2oLiNrx",
  "key14": "5VbNQAEQ3hEJbPLLg7MNoAJZW8TCPEEjjpBiKkHf2bPhMdsdMQYix6iFnbkfbHBpXUyxAQ8oi4zZGEPrt4ffUF55",
  "key15": "5G29Hjq1g4iiEsA17shfPCTM7Nf6v1TLyFg7KRxWcyUZMiY4Jx1bCVs9zR3Y8TabB4kJdHEnqPyV8bEzvhpZwX3N",
  "key16": "57kUzJMo2XWv2JeBVvsJb3VGrr167NAVFdLqs5A777PhZFaYCR2atf5PEUH7D4TqPMh19KNMJayrdo7LVT7SmLdw",
  "key17": "5kvYMntCdexsU2jioUwDHmbxK7SZLMtTT2Rn2wZjeg1MP33JG2EwpAGSZXj4XxbG7wSQETVhRbCBBKYoS9WKdWUJ",
  "key18": "NZk8Rff8PrhLJitwaN4KNC4ZuYNgAQBMVbXo5Qx6eVp8shLMaWLmqcFPiXHQSnz27w4ZNuBX785Eox4Z7wS1SGk",
  "key19": "2AEAtkDMVWPtrRNqms6pD91iSqdmS3r46PjcGdLaWYhcJg6wNc5pN3wLGWQYoBuGJDWttUPdofRXQnF8Vf4r8VxZ",
  "key20": "3h9tUi5rh5NS9ppaahcx1NKdde5J6p6AHxs9i92e8L6296N7kAMN83yUqqdSmwaCfH3kA7V5P8pDExCXR6FV8nGK",
  "key21": "3BDDGFh5HvnyML28NFU7YCsRUYYYufxkip5unuQB7cnXs6ZyBvyMwMixpoU5yfZW3beje1SLJj6tQu8GeZme652Z",
  "key22": "5ngnm6E2EQYf5331iRaRNEakq5HbrEAMQ2ogdd8i8LEkhRgQEGfNrNSTFk2KbWPcC1Az76LjVqQu1s4xDQUXoBMv",
  "key23": "2tQdLkNWLuTHjGg58PMH2JHBgrqgn9ke9FCiUaSdCPj1yboqSsZDrHDvWhh1hqvKt3TxMkPegAEJYjtdooSn17bQ",
  "key24": "r4S57Zz9iQ3YznA86NfiXT6o2po2QyZLgi17txuGk9y6bGdGYhjqKQJratDzXvyhYEbtt9fqVuArmTCAwDNLDMu",
  "key25": "2i283xXESEZJv8Cg7Xq71qdNFv238UzyYzyRgCQXRBiRTgg3nq2SFuTEU9AzbZRzmgD8a6a6sW4RkWY9sCDXeQZQ",
  "key26": "2Qxvx43DiQesT4U2YrQuMFrbo4JFaKuvuC1ofVNoPnLfcaX3QajBZE7auKvaV2v2ATQDKtoEryEAMFer2q5SN4wC",
  "key27": "YqyzqCmNP3SyLfZqBDCs7Ziahq86hruqwj8Ra5MkzjxviyTPVMrPK1q2odmRncdPCrpLi3z7fKBTUMP2eUxvCgL",
  "key28": "3KuQMPArqDmJAPJT7iuAScKZ7L5F3cfBEZu5dRVmDozqAXX7RH8BAiMWzF1Qa77frPLrwN5ipJ2ghTag3USZpFRE",
  "key29": "iCvw6sdabSxchMrEHKVMCneYENyKTn8qXX7S9vqZEF3ira5VpSr3xKCG4E8nHFFQLS6TuE3wSsoaP5usgCuy677",
  "key30": "4DQEnzEgAiFxf5ViuQScdZa62gEH46po2iNfrXTdPXaZmJBDFsp6mV4SWqV5hPSCTeNH9xA41ToVXWuDSdYiyQ2z",
  "key31": "rvfskGQsde3T85yGvmx9HCen9bRTz1pH4kHyqVeqK5dcHAt1LKVxRhDvKhS2yr4tXT7pvm1dQXiay3tdN7Xaf4Q",
  "key32": "5e6pseQpA1VkRJgAePudKuTGZJrH67ScJYzVwruJ7huEiB2LGezmJ3aperXdyJQy8XXzTuVYuPKtJk8AHYmQ4PLu",
  "key33": "4A9c9rW9tEf8fRqX9Lpu8gQpx5RkpJiJLLZzYvx4AkQtPTe2boxQj1PbK9Qp4DWUQSGuftawKfXsRtCB93nAb86Y",
  "key34": "4naKy9wvAiE4dQiy7cCmp5PdNaDXFkj31XJ3k47R3xJ98LeAVApNWHMKd4nk3VBptmEBBkDYKqSGeEx6VNGn1f5W",
  "key35": "3ag1JNKTCQSSASCn621PAMNx7xcMGCXQi9M7XHLoa8T28WTjmuSQZ7rwzSTt9P7xsBNjqqUo5N74grsFzHZvm5Ph",
  "key36": "UbSqSMp4BdsUozdsVXPaKm1zi8rHhNF5B2h6KJrz4UVhdXvT74cViZ6sHKrNYyNSUd6f2j2X97zPzazyjVRANdQ",
  "key37": "5DAbEUk7XVRtBJkrC2KghUKQDRRtQGks3VfDLbNuXzbPKzn5jR2u6fCSGeZxHqmZtz1mPekn2SDNGtcGfWZqe9Mp",
  "key38": "3EBxVx3iSHj4vJ6EDougA96LRmMdZhmFG6mgGfarLrPmuzeaG5DRJcnenBTYvG64w2St6WjNYVpaB9rcBrGfyXrH",
  "key39": "4tKpMiJg1wcyaLLvBZCJkkpwtNQjY6ranBvj8kDHzmxrkaMg9YpY4GMBntpYDtojqJg5nApZ5afWjm3tYUrFdKU4",
  "key40": "4LAZ5fNhckewHB7wHwfQBkJzAVWat45SZDZP6RYZrGuu7ALpHB4AFouefquE7U2gtZZBpUfLyBAdJ4KfjZUZHQxQ",
  "key41": "3uecEyAc35B4zhfuSk6AiG7pXoN5ss9UiNa7rUYv8p4ukuHB756Uxt8fQB4GTSvCHCGc3aUucmr8EFbtxqDJ9NYF",
  "key42": "3mprAdB1gPibYgRWoq2Rafeowi2cHSANiskYiuUbT2af5Z9NXP5VaRbQyGVm6LVFYNoFfQBuzHn3FfeqdfuA2aTp",
  "key43": "3oy4sqKiPA45CnU6vney8WVyyCRqYDzrgJVWyfnQyu7RWr6RQpQhyPoD72eah84JSoHJCsdHdvwCmqV3htffezNy",
  "key44": "2oV37L7v79sHr8eADA1Tg1onco6f9AaLXAWtmPBk4HvgEPCiXvEdEhZxaA5JQ1XGjEMo1bXnqoYuFWVwbTr8eeWP",
  "key45": "2PgCX6WcCyL4BFiebShAdsFyuwTmtem7rbKAFaGu2xPpspETFUVYqHcGbQTMgJnN84s62VJDfhRwSQsCjXeW8J3i",
  "key46": "3FxkNkD7NCKaGEsfLuZDEZAozxhRt4vd1sNzB1VpVgEBGWBRvvXioecUpuf5PEZFzFFwXFk1Bd36Rp5njSoM7FwH",
  "key47": "2ptnchcX88uyrpyCgxQqu1jLjrGkK4b92kHgttPQtUgXeD1NP25QYJM4ZujeMR4m3NmLJpAVS5eb7Qj41YaFWgtT"
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
