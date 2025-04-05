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
    "LYdMaD34NWHuB9gksL151VUjK6sXzNMTB67zCwpeWD5jbwZsYCeUoDLW2Si4b4GQbQQWKw53rYWZbCGHzj5AM8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRQrf2MeHyQ5pKTMtVvtxnCQci13RySgwMAYcCVAmVeYoTk1TUgwvT7m6rWg42byCbiFhebzT7cfY1wNeCHjfYF",
  "key1": "4FaZBoJUF5avkqqEFH1g7U917kMH2vh7buSUmjcnkRfc2Mvvzb3Exw9HxMhM7Emg2t2o3JDhu7NfASmiDuJAt4X",
  "key2": "4uiQuPa3FMxuJqTgk9jy9WAsUQNMBs9QuyRsTU5mNXTJWGprgEc6nu3WBECeYvMc7DSurj2n66U6usVjaD9rzhRh",
  "key3": "5abQVUUjbYJshWSxMurxpaYwk6DLoMXBKsXpMZURZkSR9S364zA74N7K1VekwGeTSV8DH4VmTFpCTea8DA26Zbz9",
  "key4": "3CABVjybJxE4ayYZrgUtcPY5w86roqgbyVmC6WnpNMjprqfX8DrgDXS9jwHfXX8uEZYuqX8r6pQv6FcxuwNqJN3i",
  "key5": "XJ58HhHyxha5xQFhQQHyAQXSvrGpuzYfTXkx5R8mVL6WvhM64nMHRPMQJ57WtG8936RCafeYUUqjDLqtNmftYKj",
  "key6": "2Ma54M3UAhKbuPaQZghbMuuPWyhwjnNru6wDK3VgmxQssGFs2c464srjCz8kH4BH7QQJzj49Z1KqxhYjUyCw1eAb",
  "key7": "3Miync9ZdLtWQQ7emRZefaqGkhGaBmCraEApHtr46HYDVqESbxBvn6SLAdb5UphCrwnbUDbZ3DmQ4AmzmYnasSc8",
  "key8": "5bbu8ikHLuq4yoHbFBdcyMhouf9CN2hXseMJGS2SCDsuXZgVjbdWn7Wv7ScZzJwDHM2mt8jKovn2K9mZFNZ2DqYD",
  "key9": "39NtvoFF8nEZGJtzRWemfBJeTATEyAtpYWXxLPfu8pvabJeYmJyVWyy7h3idznjuzTBV9jpBqZMfjCLzcFtGV1NH",
  "key10": "5ezheYTFartemGcg9CiKKgmWeRvcjeLxYQK441Zj5LAJeznKmor67kmHH5RY367LqF2gVbH5LR4Cbzc89qtASdSK",
  "key11": "5xBnxyKE3BGs1GiskbuHSPz3CW4PrD3qKZgqsDuHcfo1FBXpkEPthAPjBCWtQ6TLmGxC6AnoShCJGegmWMnGRmV",
  "key12": "3Tc5Tfifw9cq6RCk2Q1Vm5RJRse6jbTQyvYB7Tv3pyQysz78CZuvkn3PPQzi2DT1B2A35jDU6fEik9K7y2TJ4yiW",
  "key13": "3Pn6Gpc2xipTM9xfiM2uLGNhfNfbHASPUgVYN1YwxgQsXXW9JTVxr6q9MkrvAjeLGY9pbbfdAaoDS16Q81FnLaD5",
  "key14": "KiX1JzRhKBd5wVdtX9j2UzwQy1cyeWshu1L2aXwhFDpdPdkW7tHqfhZZHhQ4oAE9duVCzJqMjZ1xYfKu6X4MQfj",
  "key15": "3fPWaBQsB9KMBZhqgJhukVLnZfaPEkSLmR3DF63YH14Vj1d5MbEKMacppiBwGMDyKsJ5pUuQzGJBqNqpTD7qFyJT",
  "key16": "5ncd59w9dDKemK1RBLgCNPiKnnDHLTbiMnaahcdTZzbiwQJswcFh57p1T7jyddMmmxCCjSn88DsiL8txEn4Yt3Hk",
  "key17": "2tVddUifKRdQZsnEbWHcoAGNCqB6615q34jBry3fuBDxu1bPrtdmLvXTnNFVRfztoNt9fmUsuzEQtcXKHUxBioJa",
  "key18": "61iYNrNbnBmC1gwH46NCQqTpgdAbXYAB2QvJjfq9vDrcrWGapNxabDGQujsHN8PyCxUsaKqaAbefcGfNNDSsahhs",
  "key19": "DXaGcZkvJpbc2DDjpaQN8BecCm5wssaReq9La9t4EXdtzYopR3gCCLNm7pK9JKyDBV6VidGLArm84vv5aHtzGtL",
  "key20": "3dRNTzu1TjcdjQoKKigr4GjngVwnnH8cmogANTSs5TQ2sRQwqC1SL5JsRsTzYzaEFRwLAj4bKWfU5rc9SZyp8CFq",
  "key21": "4jtmr3QSySivEv77DCorzMKTd2qmfwX9UvTWE4iUnV7gQxukTDwJDU7R8eUnev7B2Rv5BbTk4ZXWBjApYH4E65EW",
  "key22": "2Xw8o4ub3N3TeBcYNgx1K6FnUycYV5FxzFxQXKHAyJkoEvAMLhJCXQMdcVq1pkWQeA7L5pucsVx9B4fyTe5rGJbi",
  "key23": "5ufcDXenq2QDAqJEDCHA6TNcwZFL9JDJvM496rRm7GEYtHZxWx6roj6B2S8pLgffDB4vC6eoMCxefjPA75wfAco9",
  "key24": "4rEasLwohY5aAZA5fUiGiJgosxijXed7DPzcZTfFVq1BEBuWsGzcqqU8h13aW9HQA7QzjRLGVcp4B2JcUEyrrqFV",
  "key25": "K8niAcsEv4xkGpcnb6WTvFFQpESSRcZfdf7JJZArfTRBSUtZdMkLWy5wQLQmFPncD86QE2cLCUD9iQ8jBUipTRF",
  "key26": "5HqVdDUDk91VAJcJg97UzNkMXFJYEGNHSLW5Mv5wqD8Pe2CsGa2SAENKYmV78zhb3YeC4Cv1igTDz2XS6fDUg4eo",
  "key27": "2RYaxC4SDSVGuEN7BYDyTh5KddGt8cA6SpRVjJLcypyC83QstajCasnZftV8QTibJG8f3Qp1iRwA1rYk262FB7p7",
  "key28": "3FYTy3HtqrspT6Cd72Sy4rpcXyRkZXDFRLP4HGEKiK6W9F6LJ8gReW6Q7DPRxBrXBSiQyv8DQaj24iQfjtZpeDWi",
  "key29": "3dyJfz2hRKCMXd18nZdk6vC9Lqwcryd3HR9q9ApTByfnbHwUVAfxwWzrwtB4mghySUQGyPqBcNTFxZtTm9cVyMEy",
  "key30": "QWZwUAe2AQ5JCYTb4DUdcZk41WhqBrVyLssgi4HGnQQosfgRbwzu3QGw3uQpW8ACx3yNYPKJdRnkWwfs1eLegGc",
  "key31": "48VKSAQxyZfZ8HdDsMHSiyDHtyLceLjBW7NXiD9VXpeQ9V3BimeSfpf6vkKb6G8rRR44QjyhteBkPaftN2HUEZqh",
  "key32": "KP9Uy3zqt1M2B6X7LmF3QrABQVKL2GjqqJ9wkifVLs8uDBH2RYQSJwW6PnWGzBqEQtnrp9QzNDEWCRd2SdNxtd3",
  "key33": "5LK7QDuPQq6gPhQiMgkXiXKwdVKG128WwFumaiJBz7eqKFL8VBPiCJPRxhWGpRMn15NhgfRgPciKg8fi9jt8t7EP"
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
