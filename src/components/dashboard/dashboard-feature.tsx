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
    "4pABHDZrSLCmQhXXUzeQhDh2Rtkesnqv6S9UcpGzvPdAeUxWPTw6y4dUuFhNqaGyB9SCP4pq1FVaYvARsZkS4KtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FUec68bfk6ExWnve941yDVM5HoUTAvC544ULzXaSgNccgC1yga5DEifYJyAfb8RqME1TW9Uk5Sa1ZCTT8oPPPQ",
  "key1": "5W4w79ghBv54k8V3AJgwgew1Z96mq3R4xTAkMvhvc23TAvRUzAPKPRZrsfQfdFQm3yMxwkpfuBtemjwDksvnZoHo",
  "key2": "3FA84G7AD5wrHkXJPgVjnfyZr5EQ4g8XnrYuQ2t3EXSp31SaCnxwpL7rrycBRHqu7GrN3M1TUhbLAhME4pnTwvGN",
  "key3": "5ULfmaPSKgtLHvi7kKSEZrZNa3UZ2ddWu9BnVv2o7zaJhqx24E94c4siNwGRjp9j8kaEpbYp26rtR4sLMsiaF6Mn",
  "key4": "2UeXrTrQwPQdGSyQ7a5sMMVrbbVS8wCNzAshrbzg7M6SBZYTCutxtD1tUnNRUMTAc6Hj5ye1bhZCX34TzfFFncbX",
  "key5": "4tG2p3VB7MgcJinDdnBpyLMzM9u6Tr2UoQbCE1fsJzyrYV14GBDue7KAMKNnipMMsZWSqTcoaEsENXVVzn9zwRuo",
  "key6": "2YodMLoCxdyQg7VLSWYUT31HRS5rG7HtoAAkP2Sj7iqJW2aESMH4aBswSy5nMyZ6rxvNhGTvvBGW9aBijm3NFJge",
  "key7": "5QcsWeAFejWdxzX253343uuDixE4Vi7mBxkR8D313fBemd2c7b7BRXbm8PipF3nWqEEC2zCQDgLJv2cH74a9CCd6",
  "key8": "4ds4Sd9849iAh6bBMnuMkXPGGde3AqTMwTezQ8AQVmkcSzzhgKN1MfvbeufHP8tn5PsX8ExTkzEkL9kpoP8oqEbv",
  "key9": "2GmgeJ7A3tiuKD5hQLYB3cLW8H6oFichpDSyWzxYR6gNxjK8ND3sUULDpMbtW8sxqdiTBngSaTjmMzuRQ4BocBy",
  "key10": "3BCmkNCpV9juEWeyYjCWiBA4sPuChuRc1etuFRxKcuoEwd1ADt14CkjVSQx9JtRX4PWxeEaEmuxzSsvSw5kmMcc7",
  "key11": "2CiPs6XRNF2eCezcNZseqtJcNJ64mRm5bNCtVhz79KoqR1ncPPSfFnoxAi8Tjyi3sfYXuYWpZ8nAxk9LgnQxauDW",
  "key12": "2e8oC7sTMrYo727WDDDYn3fYcrn4ZyBKYTiwV8UAG2GU7mRdRWY1rwWgSg3SoxrDUDhBMmRbgRkAEQcLJagPagf5",
  "key13": "Jg2VUvw4QGaQBGWFr2h36xVYf9RTEj6a32LEcsCffXp3HCPgdUmYfCNFjp3XpX3FL6JS9HH8ijH8CPa1hTbwycN",
  "key14": "2zWy3QTaEBA9rTxMcBkTyQqovhZer59YjTGimdMU9QRh2GYU7ZsqSaL2sGZuDQHzUyYsQV8p2MvtkzQrPE5MFs6D",
  "key15": "2MMjqZfNte8NcoZmXj1X81m2VEGDhVPbppNRY2iTsjF7skbNq2jdTEhgaoxVdVzxLi8w53dpPCmcMDaetyTB2hQ3",
  "key16": "429GyoV4reqMjthC7CdmNsxWtHwsnYDvdNgwbmHYjPDabKecZR3S4h8DppoWGQKavvzL6aMA5ThsvEoMYQ6qagW3",
  "key17": "nEEfZsf7jmwXHMhAvgy92ENGKEuek7qt5ZGnhwJFMFfCPUkPE32bmjdF2CKWjRY5xL5udTk7Z2Ct69hESTrcZc7",
  "key18": "5vzNX6crWVtiDy2hVZ8214MgQTRmcZNgtGKfXZXwEPAVhtNdmNH9EB4VFbtuzMRdn9Ht6YYKPoms7nDyiVvP1QFX",
  "key19": "2LQtyQXnAA8Mhq4bms6w5anU8FLMHsQ4kmy7vsMNoxTp2kZTxUuwW1FzHosMM6KqrsDmcHsPLzXH4hn5S8NJn6KB",
  "key20": "XYTFhe2vwGvhYz1jFPGGV1LfiWDAGJkZkBGsS9qzCNDf8iytoMgg92ktC9qTV5hD4xht6d3hv7maGSrzfvFzzkQ",
  "key21": "5Ntu4MjzFvUgscwWYEQB6FUQFozVih5NLHF9rEaBG3y1Msm3G3vYctm46e15tpjQXqmjTYnsREW4Sn2xwjPxUtTq",
  "key22": "3p9mbrKCmzmQaXRp3CYLn5jzW77eh79s75iELwQmweuroReLSBSK4xN2hrbsA8jTaqXPvPp3MRqfibJDCoPWEYWe",
  "key23": "5BqWjjowze7ZAitsX5frmPMUzWPabLH5jQoDQNue75MF9chE7jDkZhHkyVnF1KRTuDRagj947ikS4x9CNYCJcfLm",
  "key24": "2KG8LJ7qrozF8u3DSPKDER6EJowQhosetCspJr9pfouLS4iyQh4JLsE2w4JkVjrNAEua7K4MaF7uRVvFDjL9go9z",
  "key25": "5iDpnnnSLcSNaRNg26sJhPRDdcPAKF5KwZm2sCMLVFyzKKZBLDCsHbk5haL1jqgmCYbtFhTWvGagoEhN5THV85Sq",
  "key26": "yTWHEFTeSoaXfTGA3kuW55VG81JDUveKtkGuJto3dV8J6iazUX9w12hqcaiHzserYuWdhAipZU676YoNUfbL89d",
  "key27": "2JnuYGJFZLK6VWQDmjM73NLFrRuXEm7sH6QU5tjPZwdLjfDg8t66FyNr1sSn2k871AJsyCmTMivexWqFVcmN1pz4",
  "key28": "4G94U9QNnZuWK8MzvG6AQ6DTJzANqtYYdET91EQL37yuxBcuEYKFTzccXpsnBq88s5KjhQ8hMxYuzVHt3oZQwgTX",
  "key29": "5UxkCFJdQpbne3TXiNZUPcZXp9gKYd7HDmtbH1n9weCeyY8h1oJirvMeLfi7ynzMhSYzmcVQMkusD9zBS7sWY96c",
  "key30": "5qP4WCfa6t1kSCHh1x8sAy6Fa2UMxk6V1iaXVZMp2yqsaRtfdMkMLGtnwiQWSyiYLLQy6B8TssKE3WgR2wxMKVrc",
  "key31": "4jjXwvGYBnmY9GW9GNtLQV6CVqm6cQQPGyZHujdYsTaaUPQ7nP54UKKKLr9ryGKij4kMCUZ6dZm5V5hbKzP7V93x",
  "key32": "2SgX4yTK66KdBJB7vekFzPj9184zB8uBLfoPjVpgvTyC2vu5EFFsjnDN4N9uS6eMQncPKHFQmWtznnJGhLfuVH4S",
  "key33": "4Yxb8y8CQwXHpCJR3cX9NtPxtakEJdUL4Tn1xLcSsm4MQssqUToEbrpAPUKEq8PQwTBK8vocuRjwMGn8QCgrdCq2",
  "key34": "4Cp9qHWcLPAbXJZP43QY3uEiuSLvTgqnZxtY34Lvg3o69BZMqyTqUx1mEF65NWcZ8KnNvbMe2qCLJo1ePNaVRGhn",
  "key35": "DoTLpsR5sb4Vrx2UGXyb6HWVnrFsMXvPwNPayFas1TtQ6Ac2cKzZhrSBPmfJwQGXzx7rbJdY8cHbbEPLZkMDxNv",
  "key36": "52suv2rjQEQdTnqUXeGcZdxN315D4eWNsR1Fa6qYC43VpYwhgMDzedM8kRUUTSaTVp9xgKWaTPU4yFGGwgXausyP",
  "key37": "42pXyhf3sozZC3f8XEz7Unw2enGCi1TSAkSJkTbSELSAAGDnMZ6sdi9dVBn5UsGZFP6fD547knqXqa3DGn1Fu5qT"
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
