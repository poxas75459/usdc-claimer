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
    "FEMVmR6hqnPfYBmjAxBT6mLtLNtZdSjPhnAQahfnerSCVYVN64rYPtSSE54z4KquqCDuVBPkrRCKvzKTLj9wT9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qKs8WDSsgtH3vjNoMcxhbMcDE23ofcyujxuqWMzubN8PEhLXNfs3qDj4xuoG5MhVAqKh4nGopjEJdoVNzWEWEDW",
  "key1": "2qbaD7ceF5nE5tNjUzSJuVDeebAbMowdYXj9fBdHygVQsCm8QtzzKri6nT1yH58ppUAgJAXFnT2B2uP1ekozjyRk",
  "key2": "33Dgtq7J2FhBcp9a3mVsEt7ue1ZJNQRdtfLFyktLBVLbU5CqghetkkEDx7ejnP9rECEaP3jS3qfPwegBNoGB3VFw",
  "key3": "2u5jVcN7dYVo4kVpzkjygZ2KjUGYNwuYqGLgCq67XXtrE8G5F18tEjttbTk9UeXJQ6bkQSJkepDFEbTMmVRXegTu",
  "key4": "bodgLDAKYrX3RVKCmFcW1zRbWL6iNrakWwJzRAi3UNTniADfj7LD7rpz1ViVbjeJpEu9YqqmKnzXnVbQJgr4uRm",
  "key5": "JQWCpXCL4oK1Kkxc7WuBd31sMhY3uzxbGjDUSXZLq4wpj6EZFvzAso8m8ae9bJZrahKW52HHpagxALrRseTxVks",
  "key6": "52HRL9GbTXWXRJL4cUH1TsbZggJrfmK6cmiqdT8p3eWxa85mq8UNgxjqbDDrZhUDuSDZeAdSkQ86EGcds4oBFtse",
  "key7": "3d4BzHmVBANqipCeCvgLkgatuKt6GWQaRCsEyAJUdt6ruXNh75vjdGoaGwA1zG6Zw26A9isojTdxYXc8xLdwNsrf",
  "key8": "3a7ABPMcnpJW5DrHS4rK2fTZ5mY4cAixuNEgnFYbchNgyBcDTiEtxUEdf3UFUcktTsWZk4VXaB1jEgNMuyuzZGBG",
  "key9": "5Hw6atmKJVZ3Hn8JeXUFvqhHbvVsyMHcSAdksDcx2EXX6GnD12xCYHH2sghcdzVeTknXqdpKWosrcsyg1mrfKuu7",
  "key10": "3rSkgEk7ACRPJCqF2XMJoT5ReSsNXrU7do3PKXnWjMJChm2cpz3BrEeGuZcvj9btS4b8Zxo8ufXaYDfhivd2GUf1",
  "key11": "3zuwAonfgG1aDdVMjQyVTrFzqwd9FwohhLdd7mG1RE9t442A9LKK8mf3Fp7XLZe4VYq4CqsghgJvaaQZAf56q9jz",
  "key12": "3GwPqAAZejCKRJ5RJPWLb7j4GrihMyhfqsD7TgNUsoC7ojhdxrrsjFU3bMiQNMi6Vi1mB6CLYBQiC2u9m4YauLrD",
  "key13": "3KxWAm73CFaGchDzBWKtFmqfvseL2G2BYXbR9JcpwN8rRRBPjUyA32zTnEwYPdPVuwuvWmh8L8ApCC3oL9Ck85b1",
  "key14": "2kGQXmL2kbf7u7EHJZ7BKjJnvoQ3YrKxJVjLJTFyv2QrSst6WgdnSXmLoXtD8D8nM8vKJrZDGbtgAYsL1kj1ojmg",
  "key15": "GvoJ4qwy7i728eYHW1UbMwhf8Rfz1P9N4CKR5UpnJGNVFqsHKvfcsgDSc1YSFDmpxQ8prhVdZLqPxd2xqBurgNs",
  "key16": "3hAmwX58B4U1Addd8fqaBcGbMhHkdhcP28PCtxaeh3KE8inVxuVDYcqi5J2vWwgxzsYJvCL75EnSZVw856iZodvN",
  "key17": "65KWRpAXmtsb6HrShtU3z4LQ7yfB8NKAiBnmmk1EzfraKNnY9v2BQ3oBbX2jqr2H7dejHyo9V2mnFR3avUeFX9TD",
  "key18": "4wUSR1DiRWNPrNyAyqX1RCQzyBziuUSyDFGUPCuhFtS2ntM8BFSVJTGkf95y83m2csL7t6EvySkx39im7ceJqJ1o",
  "key19": "oizAkiP1rcxLqkYJDf4NMXv768TkGuGAnpzwhZYCu8HqmRergPgcbYxFgwdDtTywcpMJu2KX4LnFjms5Pyq2jxv",
  "key20": "4gELCzskUsWoRyurwMCSRSAzBcwrDTmsXsdmfW9wrCRanHmxn1av6cLuBvemHSr2TpqEDjTAuA2LCnZThtCtSaeA",
  "key21": "66rL56Y1h7AHyN4WJ2JHzQiNYFZhYCTnSsTQPAWcFmjwSSGTEwgndPAqW5S7cCeUZYX8zkDctYaPVahVbVhKk7Ty",
  "key22": "5wLKDL2CZLTdDwzGygMxSZsxsuBpHwHaAeghwPVAUycFTvTTyiX5do6xwpzdTe44qM3q7GgWcz5qr4EyfFNv4hgr",
  "key23": "5PorsQbXiPQ4cZ8sbZdij8SWGNKfpqtgtyKGUTS8QtQMS7Jk8kE51funggaeGP1cEY58RgCngcDwfCDGXB4KyiKX",
  "key24": "KvK9NBmWY7dY9owy28NQBsHF3664i7v8sadLgvTsvYS3GsPnBVYbWXErP5doWAosBu2duny7V1LXzeWBrUY6os1",
  "key25": "31GGGBmus2pXAhf2p6B3veCxQG9c6fSC5duoTMDwx76wjtEHxnaFxTF8nBS7vgZYfyZsUNtxMGDQu3ypQ6EAPXzT",
  "key26": "cz1RR2ARw6f53qQjMy8pceUxmtoMfVd2tj3uQSbfnqysvUeMnpWh9ecPjFEAmK9wvmaGAeTcXLZ4jZiMa3Nx8vi",
  "key27": "4WHzqGGBW65sk2dpeGKJCxAZ7P1gYCETFeLbsKWKrMn91JXLbKrVZbmciCbPEQiQJcgRvhm5CBzuy56Lf2Ys2p8G",
  "key28": "3L9NDM2CQqi8Joek75YGZybaiiKDgLWa8Ci37hMj6VQs5fCZX6582Yv25sRnsprp21YW1kLHkX8dXGCXKPRzZCpR",
  "key29": "26atQAPwpadt2W29Y77c6QMGMzXCY7wzFpXtBDiriacfSqxnX3TAgS64QGQc7n9C2HZWi5sgQZ8XBSjTxUAdurL9",
  "key30": "3GkDi7GYRJTShXzaFCx5FvmacAYP8x2pYY9FzBjaAkiQi6ZgtuMnGw66gwEPuvLjGRQKo6M36edbsKWc4mKiBPeR",
  "key31": "5cyM3PcEW5J6gB9eCXqzLAXn8HZ1MikA1og5cmJJQFywpKyNXADx5kETFABp9o5DNCdDWkGSZeNLy54CiBNTAPuE",
  "key32": "2o3K3h31qcpPo9hBTx19y3va4XNkVwJEXnTMFGiEoe7nBFoLt5dvNmHV1zS3262CjWYDA4ecranRhxhBQaqnzy46",
  "key33": "RPf7TdejqovMBuUAQP7DCBp3nUX9syR46jL61Lt5XFBios9kZoTn6igHzjx4rTrZ4SwtWamvPdFqWqcCYyRaJz3",
  "key34": "4eS5cCzQb21GuMKX7kWXbQCNq5Rtv5LkH5GrYjsMPZXUzJpfZ1pmAVFsZZERCixrEMtJPgvhCWy9QYRXT8PyEj7C",
  "key35": "34AqkmbuxHEfHEEfh2LLiV8vSRcNRBnQ7K14PzutNB6Qw4zyPbiAgy1y2JF17DxJcX1ryasdBwVrpT5iTcw3XJQw",
  "key36": "2zVzpPskXsrPHLjufbAyc1fNTPQpMNvv5uzGkhjAMdVqRC7WePmPUJU8RfteqPaPRvjzNPNysDqcGy2Hkz5uCnAJ",
  "key37": "4ssx7rcxXNYFap7aGn61HVdA5Ls4W8rX8TSpo49q18KG3FFM3kRkUmSvq1gMx7eZM4fcCPTZp1K1PPaS9TifMtwR",
  "key38": "37o4B9VHNo69aomsGxsdD74KB1j4ejndzGpRXm7sGyNL7P5AvnR92jwLAP3aU1gCPxGUsAfSpSvtZ1QC3Cz1x4yf",
  "key39": "5FZmgPxHZiGqZ6FjPk5Z2sFt7TGvjvBefhQevGHtnL7zxbUp1RoVc6WCsyDF8eeLmsBFfPVQ4mLWqWhiu2wHPG4n",
  "key40": "4SqhZgnp9cAMMqW8Nvtc3ZTxVqxm6GgTXPFYzgNwew8dRWTBUeMRVjLd2iVAyj3mer8cpsRcRBGU1KaM6kJQXyWB"
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
