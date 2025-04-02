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
    "3RMjBakzAfejP15o1wWLorbrmioMHMid9BBWBGDketn8rZNr41Mi3n29YJbxpTkSzDEhE5TrJpxL9P21JDfzwDLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LTxgcCbWBGNp2naTgZpreThLoVEBywy2w7286fGqvWk4mLGtx5HzLi6aCTgeifQd7hnXpFzvvcWiRgxS5Aoiz6",
  "key1": "3PWr3mV8Y5Rg2omdVvR8uXTWK3ctzDZtxTGU36PKmcETYH4V8EVRPFwfDjTh3sfVqP7epawwDYaGzsVmXaPPjrtM",
  "key2": "497t4bePjWDvX53mtdKX1aq9UoxjM8Nn7fsZubiKxM3kHLNNRY7W3qLwdCnGa8bD2y3eJukHqXxq83PRzYJDPxea",
  "key3": "Fx8NQipTq2hcZ3BosyoUFy2hryR2AyTSfiNKNoo5bMsBGLff3vFQZvjjGnNT7AN9gZMcrShDLSpBtF4NWa3djXY",
  "key4": "4fjugZEJDmw22BJ9EwjpJXVwovvRot9FjtfdgXXjxqmyqBGmV9vE3Uyz4AFhsKJ3hkAyLGrauVfZ8Crp82c6ovuc",
  "key5": "h6CBC6ybnr1KJgfxCRkPjvfaJC7uvedYPjPtPtCd7obYiRshBSaZsrGiu6eQib8DVhfUqg8tfyHd68DDqF8BDaZ",
  "key6": "3QSAUutrNANdMT3YqGvzQE6HrSQw961WwPZ6D7qTiBawLWwdkTqB4SePRqi2pshRrHMZ9LyW2fbgqGWiziUBnz9h",
  "key7": "5Z9QxZGrrJnE8eTFUHBMkuFTyh83v3WLpoby5d9d1tM4H9m3pzxLbe5HvdViqNG5a7EmyRRkkw653uK1vxCcMC8R",
  "key8": "LpjjUK929UcebCgoBWn7aBERJpXimnUmxFRt8CTDKTRnDSriSqvxf3sAwdMg4iTcPG4B4C8UfhmgRbFFx7yyQBc",
  "key9": "4oG19UguJtrQ6GNvsxqMpFHSUPgEiFiPRNpioQnov995SfaiX3Per1WnriiHC2gfXbuQ9xK9zwU8dBZirurefsHf",
  "key10": "39Pem3eFUqrUFkUA8vrJpHFTQnzNHTeH41HMVXh7k5sKvidz7eM1FGyrqLpYwKpCwAvgoeYRxLuX9qE9a8y64U3h",
  "key11": "5Qa4xXpEXAzZQqVqfnjqB7mG3YNo5JeKN9efK5peVz2Ny8pDPfRefBNscKbjce7BdtLA1MrGgo4BkH5i1i124DeC",
  "key12": "24KcDBqA3b41xGivauorBgK4TJEg5qanb56GUDdBxzzvSiEZRmsgheHXrHaXajmrDFYmsJ9hb8avsxELzLcSEsCj",
  "key13": "Tv9CS98nP3d5vdFBzC5SJXve3tkr1tEncsnFkGWAX7M24j2GLRFp3GxVJD2g8aSH4uGRCt82xqk72Kb9AnPszYx",
  "key14": "B9z7rMJ6B1G8LoKvuUEuofgY1szJTokJAZvcj9JxExESmFStyXfydNqzCTRCRfCfNnNhVWxgaEG3i4cTABtdoqs",
  "key15": "49CbySQBM9wox7JzCFt1oCtD8q2LwRWog5wayV5gk3R5fuf9uZ6j7h2d3eM5XQSfKDZhKte7Nmo8MPsaAa1BZb56",
  "key16": "5FmqgJCjU3s1CdNRtDVNJAoeuMVU2aWvP7iHtSzpVNewJVyEFUmrbpJHfp44NzabLXV3Jsfwk6h5tcHDz6PBQWFB",
  "key17": "4TC1adxBnv63xGscSBjNYBeFhHSfFmXS7QbCTQ395EpjjSX6jRCdVZ5ocCae1qzXNAWxH1bTNvkrrtfmsomx2vzB",
  "key18": "4Ms6NAACRifnWPznhPdueSYL4in7AxKrURFYpZwZS8ifbKf9z7hXGMjLBra4VgDZM6cjYvg3AGhJxLPddPqV2wpC",
  "key19": "4VLYmAZ1i5QVn1P9UynAo8fVFQ7JU63AzghdJboTPXyNHLnYiML6S3pAi3mhUE2U3vjnfzAQg49GS7K11KMUXL9z",
  "key20": "3Lt3kq1qcvTcQTJa87UnR4p8Exq1aFRQvCvySmQuHousbh4eJ6VwaLYywoULW9on46i5rARf6cKGPWiUWeG6Zi3p",
  "key21": "5ideGnU7Cs9Lp7aSGKKn96t2RN4o2WhV6Y5ZCFQNbKc1CuZu8PfJzBnNLPmnapeao9t3V8HivDWQp42nNdskDxex",
  "key22": "3Y6BRhW1u2YT21XQf77XxYiH2zJuAAcVU9UMGL4s65JM3E1LVMMFgA2ypsjaRqyW2LsYasvxTMxbtX3ePJn4xoTn",
  "key23": "2Z9W4RAfbrbSH1BpF6mR29LCoTkj6maR4RBweLwqum3UKX4dTn2NiKSn9sJXmFkkaqGUNGLsPLGbZwrRDZhfD55x",
  "key24": "2s3Dk5abFBQSKE9aV6E7ZdNTZrxDirGXUyf3RtMA2jpx7SK6qR1Bv8jkmVx1j52dcG3MgnL2pPTLKY55uqY6xAvw",
  "key25": "3vxyQ51xRRGgiBYHVubBkjhCJ9wTtM8qrsCZu3K33tZwyUCCCMbo3Xnewxqc5R29B4BZQQJaTS9azaZoNce1A3oH",
  "key26": "4mDkFjgQmN9cDTfkU719KxQFHoxT172EymhiC9ayVUcDpSMKUVNjc5N4zFfgxjhKczscfFsNT76tFpRQ4iqG2A9c",
  "key27": "37xWnFveBK8Gb3VDniwtUyV175K5Dr6PPBxcuGx8RbMsFhHanoTG8tugEofGFe9qPePSZAbdaA7zB3QktHqyZ8QQ",
  "key28": "5p5Ffu4gzz14jeZujRdjhkbx2ThaksChqDezMRKphG1Q3Faq142kJ8Lj7C7S81ACnRS6KbyMAFoAE5dDLiVNon8d",
  "key29": "RWtMrkdpgsS4F1giun8GWTg9z6PsAj2BpnMBwTByDnAfS5ETUh2PZ7FKApUSaqzhUNecvW1z5zMACZ2oTSkZisn",
  "key30": "2GCnXU9M1Y2yB3WtaTWnfj1HCcQz1YL44RdomZobK9d6ALVweW4SkNvNMcVgBNYUUrEUcV9sFCduk8R3RvrxY8Fq"
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
