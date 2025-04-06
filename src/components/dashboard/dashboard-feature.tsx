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
    "59XfgttduupJ2q5UN3jCMTznxbYvmWdnjEydQ2gaQCZdCY6uvoEfMpuUTezft1XozjmXjrDJRpzdugj52udg6WKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "raZNBMZXkt99HrUGjyPzKYMArZT3cgbg2aLmuRWyfRugpVXD6kqSXyogoX7g8DFUhUAwaPvKgmkBSSJG7u9Y6dR",
  "key1": "27qgTfFv2MajNJ9nyg3zy7V1z17TKjj7Cp7MCp12fZ9gwwTmkM6p6QCtUuHPNVKUF9HJjWj6CT8PFFwU2xh94dZb",
  "key2": "c5PU16KVwvHsmCSbGmWHnarrtNUr2XQFg5NxqJHKZYagfiShmoX1PHcgZWBY8teyEsk9dyBBmp8K7E4jvrNdEVd",
  "key3": "3uM1opnuxzQtNcvXVHpyt4SvcipWHCREZpEKTNPRyHYL1bG2F6sVFM4Eqzc3WxnE5eNRvbVafoNAxd3Ak4ngcxS6",
  "key4": "4wSppJJgnXjqX1MjwhXMzfNs581U46Yi4fzyafETjfeWgNh4nWpgxm7QtrWTYNCgWSnF5xjMbxGHFQpr7cRXsE5K",
  "key5": "5q83CLwGGcnjvwfmmi1z2ivs6y85z4UsrudM1Y9GhTgEuk5sXTK1Ewkiq7ZjB3nTrWcHt3vUDUrMZ8bPAYSXSg9G",
  "key6": "3CU7yKBWnx1rpUsimdPHGBTWcF1Uf9QfoduKtihR2UTHGDZSa9Dcfqsi2qDfKetuEA9EHWkGJgQ9WvfAkGDSN31C",
  "key7": "2nXGrD91ZKwJMMoP8271hMmsbrzaW2GZSfm9efCN5iVNLk4excuXKr3w1q76zBU35zNNhBJVk2xLXJ6W5vAUyHe4",
  "key8": "W8KA56pCGimwqokzqeu7LbJNdj5K5sdQqwmYaZr5KxenwNSBik8DbC9SRkF9j7ixpmrM8eG3Ads3pHMQyTwXx8s",
  "key9": "5JGE4gp6LKLH3UuafEhXPFStRPSV1vQgtsCatBGBYSLRZnD91EFPEJ7G6QAqZ9T6VnLMqRmPxquhVtWECmnj2xtU",
  "key10": "3xmRT7SA2YHSXx8tQEFsffbpS37WehmXao9UcxsQaZ2veC3FBiHscdmzQz3LV3GT1tXyF3htAcj2wguXf2JXEyhP",
  "key11": "641FrgeGCNogDSD4JZc5MBmiJCVct2YGYx3cdm3Nx52cpbfnEH1go5kcXdrfGiAU459ckbrKhg4r9f13QZjQ3zha",
  "key12": "3jkWfaFKcmXtamCi1mUKFK2eERzgDCdmkGikT7BSkmxY5p2wUpmxCrU1k3KusP8EMt7pWqUYqFDKMM3PgbQLM5Vn",
  "key13": "dRFZhBJEpSPC6mpxeT4z9K5q6T7H6FUgScFyVD45FXHVi2a1KXT3YYmpytxA62fsyehik1qrcnLZjj7Bc5o4YGv",
  "key14": "5oq9QZn8J6z7kdiSCMjKXr1s9zDPiLkp3dRijR3auZTJ9PjdQ2zS8PZWJPvawiJ5uHUi6fjGmRGbREjd8L3qNrvd",
  "key15": "DLgvxSqoQiBtPZtmJELQTNZP7pi3CgAmhoCZsJp4JR7gkc9JqwozXBUpUeJ7cX142RRFcss7avzWAubwNPjWX7i",
  "key16": "3bM6LKVv5m2uo798MSx7rY6VWUo9ZhtArqERntMBh8vzrpdMseLTxU1FwHhnFbeNyADfwq9tMTzD23ZA7Hz2z7hd",
  "key17": "2ZGYq1CgrHToovsYYkNt8AePqF8tu8DAyBuXAGSMQtzfABHrpp7ojm4ZWbBzbAm3V51KwrTyNN4PxGPbvDgrLdSe",
  "key18": "3YGaojWDge9YXB7MFnCppNL2Zycm6jTCD9Cq44iJbaZ4sx3sZN9n8pgrW1zB4LEURwmEPoS3MxKkntt2TWHHyptN",
  "key19": "32fCgYaeePqqHLg5GqB26R3iWQAQvpvbskjUx5Ui3JoQ5uyae2zbgXeShYEka6eCxgRbUocRhvo88TUefZWDUU3a",
  "key20": "nYofJwS9n49qfjjLSqgGMmbfn1oFgLXb2k2L6ky8mKDnnhVMYJuDFRPyGjMH3HMbkusXyosTX4kehyiyDdr4GFM",
  "key21": "4hcsyGchNcpt9e3en2PJntXwNd9h555nQqT57pdpMyPAfddzx1Tn6HaAa3wxdUdJ3N5qtbJAf7xizwmXmRkosWQB",
  "key22": "5xQUTgRH4h9VDBp2Z3cFJWQvPAdh5GD1Wz28z4kFfMGmuoWtW75mnHhKyzTejuYP34yVrisFNSHMCDNNuSNqxYk3",
  "key23": "4MY2fZaAKPNpt3M6BLwg2H24NnaADMAaDDL6kHB7jmw1tZYoQYVPvteYWE1uj8ejRQh87LHZRshPCUsqnM2tk4sP",
  "key24": "4dy4WwTnM35h9UjfH4miT9DriFE6vx18AhhnunNKTnkQag3jKAZWp16S7eYTYEGue5zhfxAnWeoBc5tYC6qxHTVM",
  "key25": "2jymKad2WEkWJPB8iL8chWsRZ5SZMeizL7f3HsJGetNPtrFL2VVsZ3ncHyWrTC2LT7PFy3LYc4JhLFYJuKgwkSbC",
  "key26": "2T2cTJ1P6rqNraAXRz4TEcTGiA6bBrfipiwmjf1cjSfWks1Hgp7aTtB81T4Xs2vEZZNPqoVT1Z9BDTeYrgo8GJPQ",
  "key27": "5ebKNfZysijx536XgbscgcB1evQEs2qsKQ5NgAzkbAtmeKj98t2tK46BYpF71iP2i5DL2j95vmnG5w7HQvQoiBc9",
  "key28": "3hezrdWXQT5RKLckpy6NbWjBphN6UXiYBpvC2AQM7R56N8FR2zXS1gM2Xc3yJHqmxP4M4gmhpMy9WEZ8RQi3qmzd",
  "key29": "3d5iwaceTphGN3L47kAy1A3o8CLsLf5Gk7PKtgUBZMTuSd5MopJTzxQSMbs5zy6amnvQmBrWPGcsbMAsFdYwBUY7",
  "key30": "5w2Qrg3iiJJQJvrCtZuWhQ961Zsz8xbwrRJ7Z61ciaReTppnDDw2QtXx8mY9znP8DsjKVxbhHGwnKBwt6rtzdXg3",
  "key31": "5rFcU1z2Y4MiC436zSsKqSmwPPTAo9usdKKK4xZ2pMypweSwghdRmoj8ZCiMTqmfSYnQb49tyFE3nYXkxQbj6Kqh",
  "key32": "2YkigW4T1ghuyhV62SSze9LBfuQPnhB7PMey89t2EBrsvB7s9RB6FXy8CXazxjxTtAuNtuz5xviMwpKWH33cFgVK",
  "key33": "5n97oXzEpvEwcsHxq1KBEyxr7FmMAurXZkX4dr4f5UPpDdio8btDLDwMUF221jVMdMK7uPJYacKF9saiVD4FbfWr",
  "key34": "5uJuDJhXVmp4tf9imHeEtBsMNVAR3v5HXwikkC5dqsUDZMP4mXXnCBS1TwrZbrXrj9JVS2m9cngd3UrjTLBBewkB",
  "key35": "3Ja5MQPiM9UkcUR8TXpv3vfJTqjCt6DkxfdJqdneYy1RVTxK2A38kHcEBAduKFiZH3Y54XyEHfrTkBXbpwYtfirc",
  "key36": "4ucESke2nX1QZ786qhNndfwgfMdFyizaUynLNCZHaP8stq71uJBkaLFGJVELcKWcLW2aj28UaA2Gjrduvxf4va5P",
  "key37": "5qvuy1kfmwfbe2vCPzNjWCSRQhxSkQpz5jfQwwtbg3ax4b68Z2x18YTayeZDjYCHaDT8J1MrZzBYeJ8TckCigrNP",
  "key38": "32RTfUVjj92bFABBZQ8Yf7dLFSNF9w2SyFt7c6YcUrrCM1QzpqFA18o57A2MbWN8cVFdKuadUngPectpVLZmmpxE",
  "key39": "5rcffb1nZmSFLkDeJXmNvZsUbDV8DbJgow2yUuJx2gaxuf2UvFZKJe88aLmAwRcFqNCJMiuf3qoMgLQQXvdvH7Dz",
  "key40": "2JVbzKXeg6gqFME9ykRJXT4YbYwisNeNK2oDoRkCFwsnHTkEbCkum96rLVqk5VHzqibJZS1d1dw6X7mQCSuHHZSF",
  "key41": "4UFnHaJU8UBHCQrzaJgMsJDFgSk8p7QmUNNyZCMjKnDKMT6fnT7eyxwkXQQU82WK3QUzGBSuydaWYcsNksQkKAYr",
  "key42": "2XTB4h2eRVE72ud2iDDKvEYc1bJjLkEgz7LPZUQigTJhhtm433gSBxg8riC5WV9khzs3yJD5uPbmUYZAKzLEex6o",
  "key43": "4peEAawwrsq1j9M3Nw1K7P8QA6TowBVm447AjEryo3VPBo9uohqRdASLXbbK4uohgZbdKZ19MNBbaNpkrQt1gCPN",
  "key44": "25dmXwXxQ2SrpjD1YZdH7o3BbM6N33fqan4HX2YWrZ5DFRqXttvqKBknheECLKYfeMh7J2amt7Dx3yvJsZzvdT3j",
  "key45": "2iiyEJ1LMdneUEboUey7j2WvzS8Rd5fELLhees1TWKsNe39oSSuCUnXTZULMta31VNUwqhCWqf57nb7RKdT2RFKK",
  "key46": "3K7ACL5E69mW6uz8Hn32b4fhb9jAuJrzH1MXHgYZWH3dj9anftNPXzrX8hVDSrpWrsqGmTrsr1tLWgxZ9naeH7r4"
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
