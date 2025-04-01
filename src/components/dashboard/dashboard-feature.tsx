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
    "2jNjsb1NdGpFmKYFH5bdLG7dbjVbrLEcSXw1KMaJ9ZwbSzNeHxchzjEEg6bHkJbsgzQsmtppoHcUueTG7zreMwws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDhb9ceq1n4xox1j5cSZfE1H7mT6Y6oDxUjvQSeyet3DdA1tURGLAGRCft3wV82VEiVeKbkUBmQxnmab5kc1Ddq",
  "key1": "2APnrt6Wg3xYqP1LG6y2ofvF2smTjHFibzD5SapukKQtNbuTaGzNh33ZRzq4RpEEN8jmK47MX33D6LeHoebSi4Up",
  "key2": "59uoxC4FaTnL7LYquGZvkyYVUoTpaxqhujLUsb2u6qaEvfb7sLA25aPCNx8XqsD6HqdtWu4scpjQ3ydWeFTRqjTN",
  "key3": "54pduFL4GWVosTV6RY1AHM2VynbNiifY6nACBiWP1m7EVkPRE8B2Btvt5ZfB9LhQZaCBQLvGiXc1jhsVgMDVWx7r",
  "key4": "4t5q78BiHvNWhgiVtfgtr1AGHQn6NQR5cEkyQDFHmQtyhUBCXqAWsaXHTGrECBhQxqTnyU4NPizd9Dub25NpYs6k",
  "key5": "binnFzQLwhqEkyJnhxH8jKfwNviR2WGdLANahoCW1c7bEacRvyx2io5Qzs3uSrjforLEWc8EnggEu5kHGU8LySF",
  "key6": "gUDtF9hrPhH799mt4xi3cpd3Ty5QpSwfduicbFrn7bcaHTQ3cx8wKEpjHuiu5tP2rRdqUq2VtoiNDb3JimNfTzg",
  "key7": "3jB7jYN65QgFUNcxysisNLS7du1vy9jDupEV3yndxmPAJCfu8QEXSqYUAL7SXr88kAFuk5i1miyCcQiUcNeKaB2K",
  "key8": "3Lxd3pMJkgauiMXEAp2SsUQk6mzfKeFzi9v48iRS9ST4hHCZVFQzx4FpyFVDkjbPGJ5iyia1NqS9JsyHu5PHiGgd",
  "key9": "V8kpQt4EDj6tUhjXzirSgHvYpdzGWxkuu17omFNsjFzs9ZtSxrC6xbni8UgzZGSZchgE6c8pCJtZQE72EKfnV8v",
  "key10": "3GYFp2maZAz1m7ureuEXMrUHQUQGkVWnM4KrAtagDAx7aQP67rcGcCWVNWZ5gUpJCz1DEdNDLKeYgN9aNkVmFLiG",
  "key11": "4WJp5yRV3LEyAjef2wk5SNe94uNAtJWPd8kS3ULTPabfc3FxBqY5ESqNYdvfJznzSuo99jJGHnUAjZboW6TcDACm",
  "key12": "3RbdFPSK4noR1BXjUwoJFpRgwHTcVUrmHGiGZ5MxZDqBv6sgfrSRKsqD4qwegpYQgUAbaZxD6CkPiAKcbxEbkQLm",
  "key13": "6ZykLT8MNpyZdeo9gj3UbmxRLXfvwtThgKEJJcagceG3KYCgSjjguK9zukTfL5qdGGs4PG9ySTSnniziZMMCiB9",
  "key14": "55ZYScxY4JAnxqq8PwBvgJXYzHbVWKJLCdZVUVsChnarN7nTgSyEacGHGsU5PwwbjRrLhvqxve84bVjiFGzBdNEu",
  "key15": "2RMqBTZyW7W5qDddKQR2mD39wfKM2Su1qHjURab55ADrFtegVtKhmmHeavgB8t7bP4dwQ9ndJNMJ6tavsJVaRdpx",
  "key16": "qitaXVMUzdfX3mEXWcJ7sjN5sp864DpyQWSQWEVLdicQXuUzgxtegZ7TKszwDWM8CxA7YA7SVjswLTThaCg9zwo",
  "key17": "3J533BxNQVaxJR9aJc5FftEkuXn8yfYhm92WvmG72iDtwKNa8mAogBZ8Rcda6MPLMuupe1kKkYipStwEtsjdox8i",
  "key18": "3gvCjrmLLjPDPpQTWbfNgzChKRcwscesfDYYnpNiqJKPJb6JNGqfudgLV99rAAFUc9HCZ1FBoB84vK1FLDBgNBTb",
  "key19": "3VmqpVNhWy58vHZ99bcWnkTFJymx37TqGJs8zepcVeQJGsjHrbjuVcaScwbhkVFKg7kEm2HE7Y3PHobyxJL2zYRo",
  "key20": "3eQmRWtGx6miU23mGN3tyoKG5tBZCByvckrGrrA1bPjgVz5qShbH6mcpP9yMLbX5bvH3HMJMFww8gtApHBJDJtVe",
  "key21": "88KhAAa1hpmWu1A1Gg7Qb4mGuh1UaHPo5z22E5WptVAoX5RE6A7qcLPB6fR84oRKPMQxAFQFvo1Sye2WX45rWUy",
  "key22": "3G3Q2Yh18tyPkYdM7KB9a7Qmp6xAQfuiTfRfrFtjtHaVdK1MpVqadjMieFDbuoW6b2W7ZMKfBsCDJkX9Qv9rfkhF",
  "key23": "2N6CBC5GguUrghmiB33cLSCFn43yccLz2eBXrFBaaheADjeBc7odowswGFdypqykwZK6qbLaegUwTqhSpsZ32PPF",
  "key24": "2TkcPeiZLZ5kDQNZcE7H6oh7zyhYTKYuDpnvThERiFXHWwrrqAVb1a5SboozeN1TRmsAUSGwCnCU3raJFj3fjmHp",
  "key25": "4R3TEQ9hUiNbauzB2h2EbyZx6A3EeguwF2DyrTxV2P1anAr788DaynvGQMaRFKnEmu4XHX4JmfX8LwHpw1dett7D",
  "key26": "23pZaBU224Pvx1N5yPfDfmn52DLfHooiRe4Em1oPrc4YiXsy5SDspointVjdDH6EAczK5RtxD2PHSg9KPP8vr63S",
  "key27": "67HfCaijWWBnwqwNknFm381qMReDBFt3W5F69n7jrXXo5kvE727YztASA595h1euWLBBkcDwYVuDJKj6dnNzNSC4",
  "key28": "41Z4EoyDHZPVY5cVaKvcrWRpoS4wrwhDkV5Vkmi8hzQMQJbQaDdqXutcidvMqcuNcVedJqeWp3nppL2m9YNLDKF1",
  "key29": "2a8AdzdvrZH49YVLKKHrYSreFdqbneX664vD4shvDjaLAPuh2wcvBhSCdxgvWdfzhCbhdGd631VR4DD5Mp746fCV",
  "key30": "2qL5zMqu8yafj2y5xoMig3WjDoJwk7jDHtHDunBfKaz1ZMzKYiLaiZqhugVv4YobqLPQ9wh55YndpxCyWMvdVJwQ",
  "key31": "529bZEF4Cx6wankMRWuUHWWFUFkNikKDSruH8ggoaHcWCGzGgW1AZb6gibNEW7jqG47LT9EVgRPtWreUyLt5g4QY",
  "key32": "4jA381qu4uy7SRQP76s5ajm6NovnEJgxWRz3owQcbQmfC8b4NkjpJ1KssGb1ZQ1pXy1ZgiJg4unmgH3L6pdGptKw",
  "key33": "4YmGWhuxDvYQYjMHBwXJmszWj7FSAXeXrGFize24CYqCzX1HJTnDPvssqWviLVvJ2ERC5dGn2mXQnHpaP3srgTde"
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
