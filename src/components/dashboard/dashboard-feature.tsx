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
    "5ZxsyNJAMhEFCTC9Pi4zTnzwzaNBCqWvfi849tTPyumYC73hVmjCJqhZw4EFH7tHqqkBgr22Xx5L5rjNmQMHWUU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6PvNLkZxLsCo1zGpxkcXgFTMufeDpX7jYdw6B8gi51ZJnQrgR1Y7fDTRU7JSJjMmBWLYQgK1MVLHcE8cmHsq8Z",
  "key1": "2TAzRTrF355D575TvFNBbzuhDMSAzxydo7vGEeQUjSgapehnh5cCCnEwuDTVBXyWjPdrfv4fPDrndZqwSNwPffBJ",
  "key2": "2aPo4x4kQHomGzMwcjnFVEqTVDRXuiA7TgH7iUU7u7vTnRbP7gKqCz3btLNRCvvBS1rfV5bsfh8TFYcTxRsYcLBp",
  "key3": "2iciAao6EJLsUCXnHEJvacsRrEzrtQCfaRx21RgHZteAzbZEu67Uk3z3yruGbhoeXPQn6gQoc2e7GfLWJBxNxeNj",
  "key4": "35y45KMDV6NcwG7b55YPuPN7TuHWJ7J7DjcyhWAjHmYZ7vKuSnjitoTQFaJu1qWwqjn2WUvwcnw7dAqaeiU1NDP7",
  "key5": "2zW4GVkD8ScLHSCyu2vVRktf1SzubNACeYsL1HT9QuP4HCf7Gr1sxWwcBFgqi2nAPm8UMNbfMc248G61cp7tbCfc",
  "key6": "3X4eEMerVFXcJXMTaKUy2Bk6c8VrVPtbhZJXmRSKoAjdewRiPRbyrhbnWDoUEi3JKz9MAsgwnkhmiabfhzRhs2FW",
  "key7": "4mfGDuH2vguP3VrBHoBvLrRvSuNNy2z2SjayGSwowsghNrQHB5aXGBx6FJongo2m1RC8TDWoYih9NUYQcix66XuD",
  "key8": "2YGeDbhybJ65KfTXu98QRx6bkTZNsd3S3wAYVn8rq42E2VbT4kgXgYHupFmLz1i7C6Q3pSskemuKP14QcyAZgoGa",
  "key9": "3PDMM2Ev9FDBfHpLv3X1DJCiCyFzhXc4J7c9EqZRZG7rVUeSoG9ExQtPGxXNeLyV6JKQZHC6SfvHxhprB7TrD7yg",
  "key10": "567yneSVbNXWFi4ozSmrkRy8AytKxj6hdvQghyv2VC96HMSHuS1uztiX1WBuX1twgFKyv4qqDjsnXTwyapNrVMJV",
  "key11": "4EbnqB43t1LhZZaYAUD871buxU3ZB9wDqAbW77vYWd2Z7DM1TMz77KsqFh2yjmNfzRG4ojjZNJYFiQwSog3tdvP6",
  "key12": "5a4NC53GdtTP5UR69UwfN3kjna4gGCL4nBJk8e3Hxkuza4LKUhxtr6YA5TpJ2C68Vf1kJmnmGzdWRPqjgov1eKSM",
  "key13": "5vLViN74Z1dg5h5s14LBhCLESPR3mu43owBWjbb3imRPNXfmnk2qmSmUcPn84VY7irvMLmuQ69FMtNwGRBZqUgd",
  "key14": "3Y3pVsWyG1PaU3aFrWDprVumrH8LMS8ndQxyLkYgrdVgRyVkR261JK2xpCEEj8M3PXY2aLweeqqFc1gQMexYmtVq",
  "key15": "3cGEfLCd8QAT1eCmWtAadLYV8wjwkiskqWTeFgNxoYksaYeQJKRvX3aZ19cTd7PPxhQT6dKUtpt9KvqhfB5683SG",
  "key16": "Tz4Xieqc6PSqXENkfrN97FocaoEHVoXUFVM8s3NQNrT5gpRqs4BvgLKDkofhAUDAP5o855H66it2P2aeaGsBuiY",
  "key17": "QWBCKgRMmYQgz48jzThUpc4oKCGQWrvUDTL3br136ygWPBqcqNZbAWvsJ7Eke6b5RgcvoSE4JzWrfm11Y6q1p1P",
  "key18": "yEr7aj2KEmtFSErfAHHNTAhmo7J6whKRp6Lka535sP1xgE9Vhe8i7HduPTfqRZH2ZrdBCpGtAVgS42PpJCG8XyY",
  "key19": "6354xXPeLknMYmhdQJGpDC1KmMLs76hcRHg5LBvUW8axPkozReythXQmqdJMa3a1dw9QfWcdnZnxbBXWSeHpipFn",
  "key20": "5UM4myTYw8viu7q7A3g1hnN43njWUeHeky4ucZBAD9yKwbF3fcAYwdXE4CS5neewv1gpZkdmxBBfDVcuQbE5b1fn",
  "key21": "34JCEYx2Lw3i3uHM73TzgscsH2yEgbmA7diM6JiJ6MwXHwBZkkX1bRK5GkY9Q6ko4DcXpEaqAHimWWGYAc2teeL1",
  "key22": "sfDC7ZpRWMdqniHqoXUfRiuxTACuRaNkRniWpFmpuZeL4oud3r7Diz4CEonBJ1aRz6JTLQCQ9RgPYQC6xB7C3EX",
  "key23": "5wHbkBPnx3wHJZScnqFpvzFxeeD8bf1vpqAY3xBvjyJVLUjTDfEj35EGen5LMf6qLC1oJR92yYpyk6FYyHbris9b",
  "key24": "CPWmLCPRYsYeF1q4uYagPiKXhd1CbVNpJr4T4VYtPMVXmNhEinCAW6qGPpiiZuGm846457BjjZnN4GUTSko3rfM",
  "key25": "2yWbD4siM6mpoK8XjYUC3wYMdV4p6h2pKDjnjeUvr9Yhvj9YjacgZ7pJDtuqTwMZtHH5vBX9mcK9q5uvmatHMwuJ",
  "key26": "3V1DR7kjAGnB9HGRYEy1pToJaNmTSKnXE5MCiTQUSLG2yTFFAQ8RJvWcH5XRCCc1kQFAKvh3kExHmDjxu9LuVKKH",
  "key27": "YHtQUzy1FcZNTiQ2Yxy1a5xp3YJwTnafcPzfDuHee6ooi7kcWPw5U6Fax3JJ3RsB665PSYRFSE43fVQnjooBxnM",
  "key28": "SePySTg1hnJZFkX4CHQaiY5N4iCLziA8cVJvKjsV2ir2Tz8ra7nmSqMvZam6z1bu6CKfbJCMEQ7tswC3Ly8WZf3",
  "key29": "3Myq7b37oumeywKAt6MD9WMmkzvqbjJvWRSG7nwT2Q2TcDAjCvdRUm4XiEcKCiiNHs2jwQ75BwBucGFe6hQAKRgj",
  "key30": "4a7Vf8GVsMmRuVfBXD4GDvFSDZiBm1HT5VvkgYpnVry2ivbkgAv3BWTBjDaxFXFae2CFS52aDwXZhLrvs746SXx7",
  "key31": "49WoFeGBP2EWueVtuhAUCyKFfsSgnnXJcG3jckzF5vQsZwpBCNpaqm1Gxz35NHeLt8B9HBEr5bbraAwhuDu7daFr",
  "key32": "3RxGnQ4NWcy518Z4jD3n2sC7Tk1GTEPsfzX4g7JELfRfT4yoLBxEX4Di1eJWyw1jNPDubv29hubhegqP3YWDsczL",
  "key33": "4EMvVXJkoAVYVBCHwDTWr5KnzsHUVdavrYVvUXXKL9PHQMsVuVNeEX1JC8JcLJuuSHFhcPSXC5wfuV1VWWmLBC6j",
  "key34": "47mGvJVEREAdbpQZwnLxts4kxkFMhHoAwL3f64BALRXUNyfpeLBu8XvBSg4zDusVJ7DNhTnubU4VKxL183qKxCvu",
  "key35": "4uLYdUKDWX8uwJegw5NaFy2KyYM7YLEk3KMR5vDXGmGprJFU9LjwJQkWjwCTviQa7c1mYcc6Wg7Gb19rY7YgDQJn",
  "key36": "zkDaqBkgdesWVojTcBy5knY75vttJzVYLdMmbSNwYibKdBS93SWa1URsgTqZccQDRq6QuYT5zWCE21Cvzh1wTmN"
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
