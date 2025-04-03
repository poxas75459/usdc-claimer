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
    "2PNyrdoys7bTVjKnPtnJ5xyFtGW1wBFocERq9nF6o4BRr9a2ngr2eH8BrxVt8Wz96jmEyyKb7T2JhJYv2kBdr8jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Si9UkCkXsEsz9C8jqPqsaeeYL8LfT6WxCGJcCk7WADaAzVBzsU1xcXUuXgXAT9SQhZGk9sqeabz9LuhhfJ2Morm",
  "key1": "5VN5UmNr1NydeC27E3kePKbRZfxe4tLiz7nznz1TrByRCDbf9r316SkHHgUMABE734Ag9U8ditx9WJMnsDDM9uB5",
  "key2": "5PgzLrYEgtf7GZ1zdVQfvhmachxcZ9ZwrfamATYhz2BjtF2QAqxEDrEHhBbQ2ujpAWz693vBLtdTXWgTCyWTMQeu",
  "key3": "37oCg6HRTurZVp86V2LNWB9pJea4MNboMV9gNCrkkCY8hJ9i2EheWYHu8H1eL1ibBR78RTFFZy6hmhzUjC91cJLx",
  "key4": "2PrqJKoZ4cJK4vxuyNXmJvyCYS1ZgT7QjFkCjEPFaX78EP1CsKvjRFxm99UQNqFzqkrnTXca7c5NR3Un39wqGrV6",
  "key5": "3UmxE7tvhY73MbK8NumxQ8iG3NehxGgq5wQErQhn8y6uY4QS8Rv5ttmayDQ1iyYKmBqeR4f2mzNLUQHcaUKc8cua",
  "key6": "2jKUcBvUMbW3UoQUqbSTXDdTuAykv2v124BkdD8hFc78iEqQhcCkafKKP36tcMfZcxcFWVvNki7yePe4hz3fRHK5",
  "key7": "3arWBsMYYn6zzJSnnXGgq5a4rSUPEZmcCYTK6UEdXeFjxarpmCWbnzKZQfh7rRSdczLKBmoZjZw8MJ6SYm3TQtu2",
  "key8": "3HpiiybGZpDrzgssXr2vsGQPoJuHT7CXvkhqtujQhY2H6E92Fx7jVYNgRuA7KZecmRZh4mAUAMRqsctazvfDW8T7",
  "key9": "5fAZEQzvyBG3QdZbr1DcE8rvcgExgNdjhmZjZRafH3YCoEjPSgDdBHJ4JBNPazhjhU8TY8Mnp8B6y5g2CwktaWaT",
  "key10": "4vjiUJZXokACeGYCcgNEbnn8tJRbGMRjbum3JYeje2mSjQFBr8bNV4ZEyMpXNPBYLqQ4xLXNGLtpjeReb5vMAd8E",
  "key11": "55rDxRA1dvqyGFsM7Am4A3GxZ2p6TU4Yj4Qqkh1SKBfBLJQMF25HrbcmDbbNrMMU3MnWeyy7azeMGhysHxcqUbFB",
  "key12": "sJ1WRpzXiTJ9ERn5cSHWFd4SVUE7bZjsEqoc3PPiffkCA8UtAuvQQ4eED4CfS6Yp78xFZ2P1vH4JzgMcdLQh1W6",
  "key13": "EafPHTjc2sHhawqWWatmpgFP5r9EvkBTLWh9pyQvcbaTSD4ay2MKv3zUy6q3cakPwEqJjakSwU6CHFZKbHyRwsU",
  "key14": "b5jXUYTb89hGAKEPNJ9NZfYmq2Wz33Hk2XuVEZvpM1Vguf3ha9T7Y7H4EiXfKL4CuJtu43Gditg3fFQpQbAL7No",
  "key15": "4CvRG2UamaBUJhsKGDJuxYikRS4kz1xXVJ2S2g99E4gph9EDM8gHH8To7ioEjprAPTLBasFFu2Jbn9qbYdCiTJQ3",
  "key16": "31HTZLTaUede53qmoEGX2eGVmrsRthFNa9GBgnxSMFXCVoSwHbX7jrHvrLsznajQWJSufpQB7521n5ysxdsXVNoe",
  "key17": "4y3CY2CZtwHTrWvfhhDZc7nq1yz93qJJAbg7APhqrd6d5TdZEMuhUVGKMbqv9ME2U3o8MT6SJDsDHf41tsdth3pA",
  "key18": "5udWePb3noDU5QXmvy6rps7y1u6yTYY9teV4ucsa9CpMHn8xd7uPew5Wb9fzP363yfnk2ZvByKE2ZveZwZoyua3B",
  "key19": "5mQaiHAFxjuz7FG5wuSBLYpWVacWNFuxSYUNtPz6MoHfUGzz6ELWGM8EfbotoW1XZE6s65qNiyP6oQ9sRoYnSfJF",
  "key20": "53ghjhkk9HwtRb41L7mK9Kj4tupiqMGt9AMGannFssH6vix9f4oTc5QjvvqRCXU3ft23bf6eLiKB4WvD6uuxSPZg",
  "key21": "2519yWEbNfZY5fxGnXQxVuRDW6GDWBoGDrJvMuej7JmMMFHDzXzFrnKPj93GkF38d9tp8PzevsZ5gZeJT9rjLsW5",
  "key22": "56gkQnh7MHzoGMm1nwcjwEikmP8enuLitLjSQrrDtKwdBr2MhSvXdV44zoDC4Ficjqebhz2gjzTmHgQnWLMj1u3Z",
  "key23": "4bnsMmxLzFWVpSofi74dv1shTpbh7DtuevZQohCwfW2eF7b4G1pUiNLkGER9TQRuKcN88WvJhUsZQQJRk9yXiCAk",
  "key24": "4y1mYrKNHSikdg3arxaQ3qUBb3fHw6RrtorrQdMoWZgMGfVaf9bwvSA1pe4AnnJShJ3Y39F2reebCEVFhcxRYe5a",
  "key25": "578zc9GVEy7TZZDiT9EvaLbsTCsggrVcWKqVqjRrzq6BXmLrtowHBXEDSTrkFLbWTKxVh5QyJK2oNP6pWjJwkVNf",
  "key26": "2C8hYXeDZeNQ9A4z2F4gtB4bbZRqRpebY9cTzoUevfXfFxRxYyprC5sHeRpEFPPsLD8cH1LU55oYRR8seJpcxc5K",
  "key27": "2DDHd4eNuD5RqT3ajrahzxmaVisLQgZyjjkzf9jPrCZtiDCWt6vqs2o3kWMQWqXH98R3QEqqt3oiiFuVTVZkyKDx",
  "key28": "k7vcq3mjwBtdzLzuExvwGJqj5rnyVpAKBTAY8KhF9jFwk1RbYWU3dkKwZAuuG1oQWoywrGR15VnF9mgLy9jMSvA",
  "key29": "W95XjZ8PiW9Co4bjHx3ZqWZeyzEJTKXFGNh2dvWPZrnJz6uC9dzyTS5w3E9NWrHZSnkDV9t6UQmtZXRHZBoRJN2",
  "key30": "5o2geFF1KUXS3ECS8RZeAD2kGXwvL8T6PCmwiw983ANnWqQBboeDgA7ovGcmd8TC61jEm8bgWZ9LRhYiUuL4gbNJ",
  "key31": "VoT9A7b1miS9CzLAtBvVPaEQS9XDquAv2P9iLz8qvN4R5SJ1KhQaQuK59MvV1PcYWr1XaQo2aDTsQMgbzdo8aTa",
  "key32": "DhjZuJWGt33ruM21pCYhyuF2yLMQ3P5ayr9a6D5duujfeRdYynW7kKh7qHrVUyQxg1RwXftmNZe7y9PNyve1QGQ",
  "key33": "BXhVAo1GAHVAZv2k8QB7jXxyzwYBDtHHEfifvov7DzCu3CNnW84xNFcxtJJgVr8Zyhwnovhxhcfn91S6Ahefj1M",
  "key34": "av1BCpmmJqdq2ahu4TxiCTyBY5xqm4JTCG8za3va16bLL97RnL2HmskCzzwoLstTBSipxfEDjgtvEXmtxHK6sdz",
  "key35": "pMLSiEE4XZLw7EukPnXnPaPydmG7T98equAQYBdYNkPTA8F9eTLeUPWcJsndKSE5MJp6zzHGRX8CU28guhQfh3M",
  "key36": "5rgHwfnKwc3gtUDVwGGU4taAuquFMYHsBhtj99gvgngto2hV3eqZb3N8vSboEhSjGWRyeKAiix1hroYLTMNFcpKX",
  "key37": "YjxXSuh9DTx6PRpUgwBVaA74gCMpfbf1UeQEhKgHRQXY7LxRxGxwh7ECYt2AfbtMGiaPJ9zKCgkmrawhhbaMzkB",
  "key38": "dHXaHdvxm8wiDkAuRQBChYZK6g8ZnneUoLHqKCDSPgNgCJ9JC6TFfxsJ4HPPniNvAuYQ2Qaje8TJnq8WphC3AJd",
  "key39": "5DTbM8irCqih5pVJyczCM8RjsDbBSbmmUkejhcNdx4LPMGQEaP7cAHeRSXAT5ULETvvpgD4Jo1ND65xG6ajxETiy",
  "key40": "5eauNkp38CbQrtyMtqSjjsp4Q2Ay2hskxHmVUfcecjcn45q1jP41g1CDKxRvSGNw6jJ7htPXPGzpWaierWKC9Bv",
  "key41": "4nqsAB7DziXG1PueJvpgY2pMJwAJmEzrpiLVT3bcuqGeUAntaEmz3od6cyisa5rk9uctBPFk9vCEdUFfd2vD19AF",
  "key42": "4H7wAYUr8jipzxFqqb5Ad1UpLPqGG2216DqAUis5ANZMBcjBKZKzyWHA5czJpn7ooZKcdRRMtwUuZW7u1YnHBXdL",
  "key43": "4CnrBJcwn7RJSg6X6HJ3WremZ7tPJv41ujDTeJXtup14AX9apb5DffnJeCYWsNHSdm28yx2bWNqy3yVJrs2v3jAL",
  "key44": "366yFBtU6Z61k18PxGiCQZsA7gDpVikfuGWrv2tk2rmy1sYFw2N57zNzQrkuwz5W7zD1q5X2ejZwWnqwUfPaxqNx",
  "key45": "hB83B9pWiusqwzRSNqaALLzKcY6d8W7RQCVeH9zdCxvkRirba2CXrudL9pK5q9AsCSB53RPubZueVufvAx6EN31",
  "key46": "4kfoiSuRVsKMJsFptRAPdbJ9F8Jcvpv9Aw3ARJhTf5kBad5Qnh47NyHkG64RQwZQNJi1csMJZh7XiNTrKQ7Y6YPV"
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
