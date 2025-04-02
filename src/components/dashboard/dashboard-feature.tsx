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
    "Pn3vEHLs95btmzAfYYjicZHC6FfyXfB1LGmJeZ1vHwGvU6JJwq4krANPBw9Pto1arwC1ZnzcVmAXx6LGtfYXLBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ks42vF6yt67YAAZWQZHjoYAHQfHxpB6LB5KP1mRf8MLD3zHnn8cDtEqtAHptWkqmxJT745vuu2jTkgRVY3LrQuL",
  "key1": "4Lb2ydjvNcyosCJszx66UXzSX2HkAYxtyBdDkypDL8nbVgvzqpCuQEcNd7vkCBobivEBmujTy8EXvo2Friu7EeYG",
  "key2": "25PuPWoC1v5JF721MpSNvKCXMJhk8usWP5FRVg2LBHMDGg31LScQCC8KgwBLDYC4Zn43LwWVPSVvAtEskbmBGeTm",
  "key3": "2RwbnGbWerSfzoi3e7cBJaSBiPHRLjTZ2Hq4XuVcJw1ZNK7Fo4eaqWVw35J2gdcVLXL9R2NqTEDELE62cbg2yftF",
  "key4": "dww1wGdgZz8qLdMSe1qQzMFwzzvjj4LoMWCQAYpsF2fcnjgd8kEEUzkJMmCc3AGnzhbVtWDGyoUdnqAWxqrVHB9",
  "key5": "7ooC6Wb9gp6YSyAPs7v1ADGYf5UFpxYQBpaZ6rkQapxk5Mzq9Du817hYduHUAYFaSxUBV1Rt9cGTd1JPrYufuos",
  "key6": "5GU5tuP9hFcaXSGxh1xeauKXQxevAfaA17Fd9iymYJU2MB8KWbF4oqZEdVVV28eKv1h1A2L18fq9izCBXp2ifybx",
  "key7": "TuTcaotWAXiaXuJy5JSuxE4RkncCpHEUYNdRc8pZkRoT6STvBVGHKXhmYCX5MW5SNUc6FXSLFqUYa3JGoVYH3nD",
  "key8": "61grPGEBskqoinkkjQeKN8Gn2ozdHnc2yjcfVztJzthLTzurdcHnAnzoBVp2iBvVeaJUVXhHvF99ngzDpRTBdPi7",
  "key9": "4i3qtai1DkhJ75W63CtHF6w9zYnGRKYTwBTpA5cGb5wQdWykWTREAiHzpS9Qaz7tg9C6NYQ8tzhjSN5FBqnmrahV",
  "key10": "5UFGeNwtfW4ENdLX6yorbYRUXGLhVowBJyVtrnoeQQKrUwWSPstgy3DAtjaGRF1bxDCNg5oW3kKFV3vCeFMcpA2h",
  "key11": "XhKehbRKpWYUJX3zdTwi8WumB1DJ6SgKfRE56CJuVBdsgJnNVQH9jhT9ccojjXFjdhbzBfh5ewVFnGxoRfDNe5g",
  "key12": "2wB4JEEEduT7Kho1PV7qdSWiBHAZNfLm3MKT319uXVrY8VHoWjiCcPUs2MVLfJLnAxiM1qBW1FAwVsm2UmjAzHH5",
  "key13": "42t4yFXwEXfeHWi2abpEGCxfUipNZCLFdsC3jkfhqT45A4RzR5CzqrDcgHvNsECis4Th5FL1Jm1HkUt7XSnpFd97",
  "key14": "2ugahNW4VkH5fQn4BGhnoMYcmjEXNyLshSbnQbZMnKzaTabFMFZ99vu7KHVKTm6G78RBv8dpPy8K8W9u5dkE5LT",
  "key15": "5q7hmiBLyrKXjYgCHuMt8FuPgTTXt99Xs8PB781nAujBcmgVETy7s7bL48B5iUYMjBGiQ7wkvgdcWHQvW9AdcGsz",
  "key16": "3e1QPLURpuZFuecBqwN8azYmtKa5A3GZzYTTx2zeJ5TC3tGrs8u9oBtsBJ9prtNwyuejAAwvcnK9pgWVPdKFcu9C",
  "key17": "48znJMx3CtTm6ut2UrpHsu4q2Pxhnmh5o8wa2bn3pa5uxXWDP7vUougetFoHE9ndQqZaUbps1BTKwpfXLpm7EvM2",
  "key18": "DcUxg1rDMjtyoJipzAHVfYZV98GkoBTd6sJ55Pa7i41CQ6bsGrvvoEPmGMSj36eRRpNdh3AVaMgahWEv2T4WEq2",
  "key19": "5PY66isTacCjhFXMq7Lo1TyyDopbkBFK9sjxwhaJ3wBNQFj5uzNUNw5WZGWsHVX8s4hvzorfxDbVgk3FbXH6oWs6",
  "key20": "39Yri3XJSu2yEVsu3zxxqNrCq6SaBpusPea6RRoLzeRkdFTxmRecPwxqw5uKNXqc5T9SUvqwNah3soahrfHyWxYX",
  "key21": "2EAfi1sepxQnXUgUE3UkAkS92tCasjhcRbrAkjUF5nzKamxrPbkaSgbs1WC97F6uFNenQ5WsPstG9KVvNeGJDsmo",
  "key22": "2BpuFyEkffJ3uhvTwUFxebwL1FHYHhp7w3CnbfRwHnbNZT8GHXCQFBYFYpgDY5KmBeCUo4pjf95dBSjd46L7XHAH",
  "key23": "5LcMwthaAZnNRr844ipD641ghyxG95CQT5A5krFP8jwnK2ciTY4FvS5APX1oAz9W3jhX1LWsp1hL3216wXFLxmME",
  "key24": "5ojSdPhSkikf8cWDNBut2SiLErtccUm1hQd6xzSjMTrb8vkXSNkwudkQK2yvPZSvgvMZ5xVWW5ncaNA3Z1Vih97R",
  "key25": "295DRDQNc8ZR5jei6c8V3jvjTLJ4ZKiLgCH5EWFmJe11H98JrYfwmHEH9hkTJJ792hKuDNNqssKYY1ymWgWMsgM7",
  "key26": "EJTKr5WNpxyBiyxRqQVgZEtQY8CaBjxDJBC8AwBU7AcBU8uzNekawj1pj9kstzMNSqN2wCva67BzpgjXt5Fr6ak",
  "key27": "3zFLx2VXXbpr3JBWHKRwiV5LewKUNMx14pN1VPJjpKtwLcaqg6hPiw2zZRtrAivrpcdnrcYG8av2xx36khAUBMMv",
  "key28": "5RGJtednHZiMjaV7sv467ZsJf5qHj4v3Cq8c969fhM9QRJfbHcyMtqsmZLLsMRsavVbUC6CqupaFNWrbDcQ7Erse",
  "key29": "4YcXh9MFKALtQbv25kdvvSHwG3aEquEH2LdzcMoqbiP77soFqUL5Mt7mdUJFpMJ1CbuZxNfvCJqQ9mSMWsSiqyX",
  "key30": "55igcUQwqrczE6uVYNddTFJmKUQg6m7N8oZbMpc3XcCy8NmuL2ibGCwFg544ygM7VoybpcqDq7Nt6mcVrMpm8Vjy",
  "key31": "4BVpjiJDpsjtD6hhds7WHoUwXpGtsptMfGiioKooVxR5KGRzuYMpfhZGyyA1UjbA76Vs2JWorbTeZjfFnaWuPuZ1",
  "key32": "4iQ6G8Hqh54NLWjbtisb7iFE9XP6jzukvzkmBaoAYXzaJbCDDvk8pCoCdYhYpCsPvtbaAe5aePVsRLLXxhLY2QfH",
  "key33": "3HVRdAahXw3Be2tpDWs9TNwrgbgubrevetaLaUrWo5ZmBQPjTSTbMjBAnMdA9xCoWP5rNgh8UW4mEnbJqfkrPEaa"
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
