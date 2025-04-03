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
    "Lese68Z9mtpLGErbCsXJFgXCRuGicsg6kgxr1i6wEvH6wZsSyJPFR8mbawtjriTMmeFuZfzzswrioXSo5LuZvuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b45joF6SGghffvSQm6NobanmxgNeRYJ5WzKPMdxudBhkHSiiRyBEnBTfJTsrduJbtzsii9WnyokmfAL1mNEgzrd",
  "key1": "387SrUB58CYRdC2nEMmwJScXugGvZandLcuNk48f2KRjCT8nEQr2LXiGyf2intgVDSLnCdGXL4Zy6iJiYRgFPTee",
  "key2": "2ED1EzJZkAg3fJJdXHtxapFeJtJxp7SSZmtzpb6Ja5dXnYfb7iVetZfWgW6KKDc81KHU5C5G9AgEjBVxTHLfdXEC",
  "key3": "5ZynLLSpGgk23GrxoXK2WC2mAmehbDzTz8uGGgwxNndnbrE9QcRRopnrzskY6L5soawqrTbtifXYdabwFN8iMkhw",
  "key4": "2yUMuVGQr4DPphaNwjtDw9kByv1FqPJ4JUFPVmBALUnQo1tbgMHgVBVmqEKZQEAwzP28uwU8HDUc3cpoqp7CQcY2",
  "key5": "5ZeJwCAUg8uVZDWksqPyZaM8nnqHBapEC86b9fdD3U1dqXiprPUzgQd9zhLNj1nJ8XFzrMJpGWSxs6g58woH33nz",
  "key6": "4dAhLE2fiudSyMYnu2PQrBvjEVGWcsLFLVwUgAHi6LmiCVHVy3WMQRy4D7UsLrpWeqYJnfL7MhhQnfKyDgvJf4Td",
  "key7": "4zVM3pjZJBu3sXvUS3zD4f3k62HDaRhHozkyVYSgW6n28HPqH1tZSCevMymYFu5wEbSWm2H6q79TCSpSTumSGY1W",
  "key8": "38fWPHHPHRFxqCd8YE5WcGLk9fK44baupZud7bmAxpLZoz5u46KgVCLKwQ4XQR1pp1qYYYkr3c4K6UDwSw8Kj2wq",
  "key9": "wCeAnRVdRnFpn6zp17NrmyR9RkPUVrbbtNsS68Wk1cZfq8kSMAwytq2KEqVq1EsXkNwMpy5CC21FNPZSDzVzNhQ",
  "key10": "5wqvzqYcGQ7FWUYX1itZca7Hv2GSz7cxN3detxHPGT7B1cvwSiygWRr6TKmLNrfTcKaVpKYFHmnchR6hvkTgvCWA",
  "key11": "3tVdprP9CbyCZe4nNt2NRxjvpfdR23ynTMKgLXdzqKj9AwVvLmBj95kuq7iaoSE2WeNUVK6aP68EdybniCYt9E6d",
  "key12": "5rkVHADChD3zHUXr1rdaDq3fStgfFVKb2kT5Rb3eMXxgAwMfLpNMRr8Siep9C6u73KDU2BcXHxWNbmS7SJ8cFPo6",
  "key13": "5nu8N6AME9t8HnaN7Fyd6GJG7iFZ8Lm2hngvqHGLh7Q9z7MiBvTHxGbFJfQeFQuVhsL4iyYV5nHsY4Cfx3rK9UXk",
  "key14": "4qJqzZURXAVbXZEhEXGTqWBpy2QhwtszzvUHQyBNFexTdNA2SkFy11nNwZw6Buh8K2z7DkZ7HmSpRckdBvb7nm6p",
  "key15": "pzESdikwScCSe7c9bnzcLQsEhtXoErt9Dg17Um32YuMR9PS52rciupfd8BNRNoMAySbNeMynvGQmXZqu5aoUcYA",
  "key16": "45W3vhubRdhgcgs26SQSs9jr9woQotBJ5Pw4huX2MXtr7q9j73v5fQvGkowczwBSbyVrunkrXsHUf11HXrZRKdR4",
  "key17": "38uGAjzh1mtqnfJW72Qc7NHk4rMdVCzjTBfB4Rk6CeYk2jEihExnZd6shtjgeAT1nUqTqCMC2MMEXa3FAcXpDf5s",
  "key18": "2EmwzHnecn3d5CJAqFDgyqfZvC7UoAzSThDSYJvADhANJUncA9g9gTqcrj2KRTYaviVssjuKcfLYmyiJpADHie94",
  "key19": "3pTTgo2adsfyF5T9DnQBzBjvQVcLGydhNEr2qp1MeyeZhv9Wrc7xi24n2U5seK18tdRLpoxxaMNPpF16RME2EGia",
  "key20": "kZecV2aZ54WE3w6p8uENTTPUgz5edVzbdUmVhYtzSCUWRxEU39eSCpTYEJMxynSV8VJwhxYTkQGEGDtDZZ9gjae",
  "key21": "3Y6qo55RkUTka39kXSdrEEiaoLj1FPpHgPJohE9fa9wvQ6TMrWRp25p9V4b311K4RqdnVeQaH6MVG3mSqGD8v72C",
  "key22": "5h77oxbqaud8BCW5Q6ZJza9Uh74BAckivVnmQjtymuqVxBXyaLLsFZHzdmM3UPzx6nrHGYf5GjmwNPaZF2M4HqrE",
  "key23": "24rL6jrn459vdBjV6nPiMZ6xNwsZ56FrFGUTqfLacMCXaizz3VCjpaMHBvmwHb1xN8Ljk9zEtm9UtUwQ7juW15bM",
  "key24": "4D6N38t8qub1VsP2KkjgmdDJBCjjq1kBwMfGWRKt3bnqeoBSJmHNVFBRWoQnf1ZtnJsRy6AqEAyZZM9TS76HgSN",
  "key25": "rzgA7ajiSrTcCTqxJMAeA1JM1GhAPKLhmNYkP4STeHQnsynzx1xhonWdNxbqH5ZmcBrTYDjaBySsKMgVFQ5UhyG",
  "key26": "2PtXyupHu4hkrN7uZZUdirBrB3Qda1h4VMemAxkALSgivec8yaFB7uepzNVqeX46FZEr3VLuENL4rJK2DqjfftHM",
  "key27": "4EccxcYp52kGv9Zj6WmHQncxJSMnAdgtU9if4vwPVJnv5R2QyVPFGPm1MMBNVhiJCbejcppReRVUGToZCzGmEdqV",
  "key28": "2ZtYQp9wV1wQ3upFnpnjX9QQxxAsHxPHvNCbj6bUYTEF2oNzRtdXSENfJZiRECrDbnpshyL8EkX8ca5f7A6raZVn",
  "key29": "2mMSqvNbCKHL4JqPfAm6o6MJRsuHNx9TTMdHiYsYDcyo1qVSotbjH62pEFyu8j5LJyDX2PhQiWB94F5gNbRb1LJa",
  "key30": "2UCkd4ACrFGYh83sN9BEHGSWoGuoSToNXePkh5GxuxNTjNPtDbcoiWb2uTemwZZzzeKq9fYbtxbGoUMmZTs1fjvH",
  "key31": "3JAGXAwsk4y2Q1zCQMvPmgyeTMQcxC3QbJgEHdAuEjutNML93XVwiHTB99qBSEWwcy8dYeSNRJMFR5QPzRbGTMuU",
  "key32": "3BssZJfzpGf3NyEs9q2hUgaqg9Ukbt736jWC1cX89K2Dxxrzy9fmE7TpemN4NBZGf6RzU9wcdukJFP1GiRGpUGaZ",
  "key33": "2koA8Wx1MBx5X99mozHzFHwwrQPZh4J9cb57aU3ie9wkuZbcqBruACwtRM99kPmHHywWCWJdTicY4pGLPkx3kqJF",
  "key34": "8GJSCmXs5Lgnnzm5a15y34pXtfCvuaa3RAWDWRxbKF8x6vKuvuGfwnVjCnpjvX1qbvF8xCj4r4EBHdAbGE56Jrv",
  "key35": "4uNwqjTrHMfN88NYUdfnuqwc46qNc4zyZEHksMMzjHRijzyc6gx44f6Ce97nT2kgB5JtUDYjykv22FFvkfj2uJJ5",
  "key36": "46cmdCC8G5qSo9vZppowvMHF5FB5DovotiuiJs9gKwHqVgTtAEx5nRkguhWX5QSuP3FKzhh4kc5Rt6XHe9j4XAo3",
  "key37": "27Hmmkgp5aBFk9K1hhHWmJ4k4vT3DJJPC7py6VaX1t5kdnBmy19kVrt5QBwPcnsseoidEZbSK4nbq93XXkmqfo2q",
  "key38": "3ZpfATUDFdYGDhuEmmYm3U3Hsfj9Mv9ZGKyAp4w2wXp4Lh6EAATeVqmyMMy7UUpPJZMZaizAw7snTp4PSXrEbG1w",
  "key39": "4gthaoTNCgywUdp3GubtgtdYdSUiGQYpRFZiUSYaXMqeF2tJHQCSH21jMRRWDHXk6m4dbJxqRpwqEFwpHYeSJio1",
  "key40": "3W4HwX7gGnYfEEA5SNitdYA4sjmeMs3VuW42DVuddBT3MLT2eV1eSAXPB5MtMptGehXxdCG3R5jBmzLdME2UtvGo",
  "key41": "3hKp6EX4QVN9dLhTeyRZnPPk7jgzNAddkMXc6cmpx9M77CRTG9AAdk9rjBtJaDndcHAEXQpBsjGvmbkuty34oQzq",
  "key42": "5WCtFsv4UkZatnBRWW7wKkb2cw7PeTK5xuny66JQqHiePanW8tP8aCy3JvAsAyaDJEMEwDJopP1r6jTTpB8phD21",
  "key43": "5QRQeXw6Yqx1owX2yG1e9Yva2jVHUWPtooki4HVjVeNamn2sQqEQM4A5yE6f5JgTA3etTSX7T2iEr1Po3hH7UrXK",
  "key44": "5jNxzGitH2fCg6JJ67BkMir6vry3fet8gj8tAyPfKaqyUDNLUoqprXJQ5rxToKQHeoCiZuxEAhauTdbMg1kz9o2r",
  "key45": "2iBeJYTgYAoQSs9GKJUdD61RSiWMrje6jDv3reezq3mioZZBhwoD57hpY7TowJS4amHSWLrXb5cM53RNoSCRzgCX"
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
