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
    "4K5PJ6NxRyPWrj6nmvR19WU4EE9ZLheJR9kYQETfxVv6iM3Se8jgEgEtEQQndh8ZfaAtRS97X61BEHifTbLG5PgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBZbJoF8ptP3mxFe8CVmTJx8eQgGDNZ9FZXXrAEFsDngoeQv9pWbm7GH7Xeo5ykVetry8VJRhjaPxp2FuG534gQ",
  "key1": "3bAepSmqumHHD2iqu1z2jxFP1wwPLQmQAp3TeWR6hs3TPbUyqCmibsykDiumtaw1jwCtirBQQyA4s3kmvoZB1Tot",
  "key2": "3CYT3k1GXCAZB5Dpcqx2cAfmvEMvVAdREvTv6kjSp5nYN6G5NNetei2Z2Mp7PLRB2mtBc5GxV9T1xid2VerdA8Hr",
  "key3": "64p27bVL6gSrBG9Qpw7FwcQz9yve2M2F7bwZhS23yk5rinfKHuSdvQsVzsBdoSDZ5sgMNtBuvJwMDtY38BxDAVPi",
  "key4": "4LnfEPNygpQSmCCLLd1GVFRcm1eWG7uo42zuJy9VvzvuNeDNGQiBbTwMjisZnFKwusMNwxJxgL3rrN4RCBVaASeB",
  "key5": "3HMAkFkRrsSk9f719MTeSChBCducsq8xrqnrHwxCeSvBqb9jtKSabLaxu3gPBV9sMsAYzdPwPPowLVVMxEkgYgfK",
  "key6": "4t1u8zgBVJPGgcky4QM1dcTxMjHQRVcH78NcoE4Qfn47wZVqnsr1utGt957iUmpzL8z95zwaaTca7miRK1ohX8uk",
  "key7": "4FnbcMyLkmrFyiY5anme6QFWXqH5XtBCqveNYfus4vGLrobEbfqzgT5GpAjgbkY6N1v7NLMJMvRb8dwYEzkPL7Ve",
  "key8": "5bn5Y6cLBVJWQRBj2PHrqLykFfCeH34KALYMjM82jnr1bBXjr6r5Hijtv3T6PjzDBxM5NJubrmwo52eWV5JDMJ9D",
  "key9": "5gm6D6crAMhzYYxczX72x45FYwGzFyZkpzy6g76a5zX5nQsW51S7VrvXCCVMjxeEYLgFH97cNE9pePAnr63dSP51",
  "key10": "4ZpMwZjAfcNgPsV8Ny22bB4GHRjXgpNZCPwDg999rwjgoEZuLAbsJXFxXhHv4LvPCvnP8EZZayF7GbBCeeXEZM34",
  "key11": "K22WKR417EbV1Ypv5pcmnSnbeuTBvwkdJ8csVNLQSvmN861wCPQhKcUgXBKocnN3QAFbdzbUssKDaszCiYZ34DE",
  "key12": "2WKanMYDfDkUd8JbkAffqRfuNdTGzMHVJa6vKrNNqsLTk4rnYsBn8V4jwgiFMt53xsFYjvjRpM2ftovZwT937m88",
  "key13": "2ZDiu3H9iVz7zBXywG4121t5CpHrXsZdjBEVkwx7JY869ZxFXVXL2zHvj8fR8fKMo7DfqhZjR76puoFxdKBiPAok",
  "key14": "3fnzMVxwJrV7B4cyqYXWNwHao2aKpcd5GUeptHPiAHhFbYKjYFsZNUULSPHi5QYXtV1dmzQYb3EzaKysxba4Zztt",
  "key15": "284sLkjfkUKvZM4gqFyE4i66WhsK7Q4d5rF7g7vmeNi3tSL2JBrP4yb2nJsbL8vk2K6B353jiZQufi7d2hEiryZb",
  "key16": "3x5XoBhPy5mDVuKAkfuTNK5FHAF9tjQ2pXsqVRdjjwLdCtcRF7CEPpfJdwnMe8usQ4z2RHrN92s16npD9aFgiNEG",
  "key17": "5zTe8mRSiCU2y6pqwFDPPM5QfA3hDPM1wxrLpJDZNkTWRorhKnpSB12ydcyc2NaxymzwYgLDZVh9TfkL3Hzm8dtC",
  "key18": "5tdQMnvDqzjLEPQo6roMAmaTCMx8XXrM85Nspg3z231LQmNEEHZZhytZ4qxkrLiBtDCC4NDY1WncC3Y1H8Y9S8W4",
  "key19": "4rpgvsVXitJqvgh16NrQKLs2GGrCP6BXFeZkRYxZiY4FxtYqKRM8Aw7zGmKrgPgJ35si2qCk6wAdTVFCv4v2vthJ",
  "key20": "U9kptVVXzLmYDR6k7GWFgYTAYcupoh3X73N7NwS3mZfHyxfiKoD2qtKrtUdx5ksNaqTmtqhwUNPv5dACpcyJUgK",
  "key21": "aV6wyDowhQRnsuLLPwXwYoSepngx4SyWUeSYUQYELLtheRJhc3BnujBCSSmZ9NbubTkJGgd8KoLJrK2qfyoTf53",
  "key22": "4pCQYy6VXcgLQ4qminU2CzjrUeebHbnu8XEFLrBLRHd3JCEdadeapemxnufGQ2X22LC2GRpU5nfoFSVKYsWmze1n",
  "key23": "2MKVvuJgiSHAkyRHJkqnBzndWtgtNoKRvhdinBjan7TBm9Sa9f2v5MiPWN8pMY7kw1GEbryLzoiF5XrR7a8kYWmy",
  "key24": "5UGghiv1nfsUk362uWd9UfSF3n8KWBcsMEBvvZf3KzVFDsE4Hzk7h6WG8hzL7xcuvF1mQnZK1ptWfbcArZ3vERsK",
  "key25": "3YukjJ8Z8QRkCTk5hSru5LFEVLWRhQC9EmoLd8Ne2452nUXcRwhddnZJe5h9WYEr859FLC8y8LsSVJ5Kqwrcww7B",
  "key26": "4J1ErNdrwDfhWiDuiXzH5fm3mHpCaEvYFrfVZCmm6FAtM5u1dfjdXUzt7LveDMdbyBkcL4hM8LZyiuwsSRWMbAs",
  "key27": "2GjCmuXJFffx8qh7WrRMkhMySxPh3QGmBVhH8KdyAdLUmQgecyiAfsGmPVYnJUT3mEMynM15VvdapGQkaPXZjLLE",
  "key28": "59tUdHv99G79KmZwEwG48u8oR5kdKXVrY5UZ2h9Kr7X5wnENZBSeG889nXL1Tz4bsknkH17RVSR3CJttVbx7gLuL",
  "key29": "5zAYDXY8KHbWazZToBD5pRpKtNtqU78W1NWaWHv3YSRkdfbDqjmdhRigBwc2DBe6pJx8bi5AKeZiCMrRPgCUP6B3",
  "key30": "5uuAvBui1CLHZehYZarNKTATS1vxsdPYAhctECPheZgaUoppHCdhwpHJSTfDcxpsyng1WaQ8RPn8NzyU6i3Rxyjy",
  "key31": "kPbnNx6iZGZd3iK3FhFTxK5RaWWticBRET56FL2YR8vazQgQLwvgah5Jd17eFMCgSP9fuDaM6NUDynyXUgbzxC7",
  "key32": "BcfgEAQK8h8RCjp5GfB5HpLWQ6NqDDJVYvQGo2sbUJXnjfbLZNYBuvgruy2Amtnyf7EG9fKc3J8UYcRd37BTjcd"
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
