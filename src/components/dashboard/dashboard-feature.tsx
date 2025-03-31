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
    "5XrpcjfLUei5KhPfx7pB1fHANkt7yGg2fSmCiZbKxjLKCazjuwcSDWpecVjGSJiuHo4aG3ihcsAFtDj6XnXww6Co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jw8zWqNX1LHGcWvMG7vaatrdtbe7zu7cqbcTXq7MrULBYHJszXLWjwLvbFsm1UQ7tpr6H8rqHrvwLdh9VGDg6Rx",
  "key1": "2ueeRaN3tdA6EJvyaA3YMQ3stNr9q7agkS8DK4XwAn6u88VnHzj1TycvDLet92RovWE3w8L6aKmJWLzjT9U6Nmuu",
  "key2": "MuTLwQ3gGsQtURVLFkQs1Fx7LETzMZVCdEj1hPkiPtjrJwFQv8CqG4wLiYZJNhHUFRc3oXmAZkGnjA8CLC3499A",
  "key3": "4krzZAFEgLstJr4bseurCm6hGq9WqCVZDKaYSj8UkEWgCiB9tZgQ4DCXT6iVe7c3McEL72nZ6XurBNbjLTVrKi7i",
  "key4": "3NdJ3VpCADjhc5smMGKFfGBED3ahRghZn1XHi3Ee2rXe3K8YSibmGQ8aU4gzuYr3bKhTS2UP4yEw7Z3yNLQxoMjj",
  "key5": "EmDURstE556P28DR3wkET3CZVPQap3T6RwfXcFudrvAyrw2eqyuCSBzVbhQnJT7UaNg9VuiWhXEK5ahumFsJFKF",
  "key6": "4qhYRMk2aY7xfg1MhatYqWZynvGftbvyEEKvhWfMnurJCBtfja9itTiJBHPb2fTtGDSJiGVzWyFFE8GYAQdFWuxN",
  "key7": "CSyqTYAEZwMExKW8iPh8UmxH3ABX7DmyzqqxR1wp6QnHRPu5JhfwUK6XJ78QK4haegfP6wT3F3WtYqWpsaeRQ1a",
  "key8": "2mwdPAGwbAWX4FMhah6cigXj9ziH8H5ZVQieiSHJQqQ2xgkJuj6YbfVcNWv5ccHk861dMAZe1wyrAbQL5avdde2y",
  "key9": "5x3AcKaoE9gu9z4cw5Kt8YCJbmdoqT6vCb6UNzmx4urE7bbgeukTV337bu5sPUigzD9AWB4hsPVMw5kseNQ7ymgr",
  "key10": "4FRHPFtk1rF517wiEThocuXbbGx2NB7FPqPpoyPtxvtyvvCwAE9qn6eDhnuNj38pwzCFE8U613JZB9opRUdqKJ3t",
  "key11": "5MTUiQcYpbSUmFG62yYPsYDxHTmZyXe3864Q8WQ9u87CF5dtD8TaQrbzZu6XZLxQ4xTVwdDZB2SWFeaUgyvLKGZK",
  "key12": "3ZYtRQinATjqiXguHgzvXGpc9WtXHAMZwrntpSThBnXSvA713fAAJphtz86SaDLmMV6NbFZuMZ2rph5pn85aw8Ap",
  "key13": "4F7y7LF95tWpaHQMp9YL15a8SHdr6VRX3gVYCYJ2iAgBtmK3Wgw9sRtuB1vjYRGR4ACvSpd9g2249LQaYJ3hBFbj",
  "key14": "518FbNFkXEWyMVhU1cTMyAVm3PnG3T3CDyjneBpvbUeNwMrxU7Pjif2ZgTk6o7s7vK2m2HAQ28nvuD1RRp1v4xPZ",
  "key15": "3v2KFfXf9ScbVRWCKwLBamcjtBJuyMQaUHvsozj1tFb3HTeC9BHA8RpKDWVrHC5VtbPDV6yupRNxTdyWcGUTeFu3",
  "key16": "3NRYvwQJfvebdmhAek3T8jETxysUJpS5r9yurGrsqbWoT4RkN4jW9Gjm6UKDTHMdSeHDdtB4UuND3sWVuhi4dt61",
  "key17": "5JCDcfd7NcC6wrWV6fZL8ZPfTfsNLbj9q9gYhfyceVxkmammJxpu4Uwt1BAuMbXaf3pbLLESdrejn88MPvsDtuAK",
  "key18": "2FRjaBHqXPgxRChnYZpiRHqheh6hh1drm9UgRGq7UjtURLqLq3RkHq88dkWmWuDnGupZ86fwPtDgBeo2HdickQdV",
  "key19": "2JKT36yJGriCrLap5BUMfmd333aZywRiKHniAZMYgMaJMdfHmpjNBBpYpJfKMKMXURL9Q9YuEQukAPuWzWsq8yMn",
  "key20": "4AXFrnGNG6iz1jdRWN3sxq3Wqy3RsW7m5DvDJucWZ6SQFd7UTp4zonCmDPHJ4BRMhhFiHe4zbBK5vuHDV2gVTfH7",
  "key21": "4yfN5KGQ6dTte5eNhNK1EzzwTzkDHhGV7pt5oNLxYYj261WSpHYPoa8qKPHWRtFzsCEwLsLoqHN1cE7oRuS2amjz",
  "key22": "2zatZRjiqQc11ZnGsJhEd4zGeJHMGdRXHyhWCsdyAMR5jKjTigRU42RvzgVrTg6JTKHZphjej6RWWmvaaUURsYhD",
  "key23": "61rMSrNCkLwj5RP69LReGfA3KN8bUwJV1no12VWzWiqDvjt2dnfnjujjGpqvth6vX5WcnRC683EDDiZmd9s1HjLr",
  "key24": "5cF1RDdW3WJ5qcvEcp3GdFdMjWLzCo6HN5Fhw8vSHnz6iTcovgtk9tofEXxvmThaEXErrt2C7ku9nXqcUcU9Nodz",
  "key25": "4roDvkTNCAF8cJYpooQgLbmQN4Fgxz5Rudm9PcLCCUCUQXc6Kyq7KHHinZGAeppQ4n6PCqt7xSWDQhS7SwHdRuKb",
  "key26": "2S2hHT9o8Jbn1cpwikAaDLic45iUMwYCeh814x1re7G246B1bhTiCtq6QR3YA5ZeA7CD1bBX3QHjercy1FHVt1S2",
  "key27": "26CksTUVbb8Mm1Y6c3v9pi2tSqhTBFgvnR8MdmQiSFpFNU3JBdpW7n6jLs1s5KQBSA1FWEPe8HD42tMdy2Nfbs8T",
  "key28": "5s8RB28eu1AdHrHngF9vmAxVamRbz1kfreHTaS7gPKiDJk1JENQkatXSqtE6Q2pk4NiVGskhhAGPfbTfiyhQuv9p",
  "key29": "QmwHpqXRi61yzZww7WPkPFGr8ESzSveeNAkVp2qSEDHNxa5G7v5cHr5313jo9g2SbLmz3L43hfLjy3S14FfsgdY",
  "key30": "5YCuQjsKKGuGPv8rTAkjhsJZ58SjshQrLiz5L616vi45qDNyodv6NvygAHkzScGkJLe94CvJPRZ46LR7VZrXDKiy",
  "key31": "3M4A3zTofPbc8srjFASToH84Q1Z6dLs9fxVaWYenvUVNZQpA8XQHgXN851Cds61JjmmrrTo6SpC6566ytsFNUgsY",
  "key32": "2zEEP4s457hCgLyjJGyMADwvk9gxjtyemtBAU9ortvAkbkBhAvUaNNBfKoXLqfRopYAQaz1LcUaaQpNYrU8ZGpbt",
  "key33": "4zLY3SticsqsKQDdyDTRviHnjgKUmyynPyQrSSesXmekD1Bq9TxGNJLjyyYaDsVvVLFTsgkhnE88YFQ5wKzrcApV",
  "key34": "4mdEFJ8ZKzMqyn3kNLVaBTYy3erKR7faYUMvMKBS85JJBMDyodD9ThWqi6GBMvQk7ZL1gF1CJF8bB22LQAHcYycD",
  "key35": "3QExLgkWRiCbYk17Ui7tzXC1kJs1YPW2F9TKUQeF4qtqTUy7nn7S2rBTkPea4sNnCn1D2HxKr2bNafF96auavvhK",
  "key36": "2Hrq1fDhvPBtoygJHVSJHKHg4CmW1w61zVjVxVumBnEBhMeSUoqC2VKBZsC5bScJqRVBdk3GCZRAV9dhp7GdH8LA",
  "key37": "3rSqmo7axP8QGWeRYW2HXmaQ1yXKHNphDDJTmHnWCbUTyCdcftK3Wj3HMv2gUFwQDTDP94MwRBmW2QxZSgaN32JF",
  "key38": "4549hLXxEmpFX1116RwCv1XjxQFpKK2PR3cB1jx4XmmdvcwV3eFtELfeXHbzmxKwXT9xjEwRZ93LePezsm8nBkxC",
  "key39": "5G5o8PnVXnmc85zeYDTXAyMpPJiJSB6wT316B2fW787GwpbFs8HcEP3yh4n8HjWrwg41npLBiSzbMp8CfVPa3KK",
  "key40": "2vnSNJdZe5Pu7fuVhFaeqmTBbjSFYuPVoavhswnjmyUiNXVUovfrpKex5CPu7Hxm6gu2eWDDfb5ZGq8khFBS3ub8",
  "key41": "2QFxy65oFGmeNzLffrH1dcJfm54G6TLARvhL9bUeYqjsdLdh7dosdrLTYtgWsXRhQBZJveHAgiiC6dxqeRxp2r5z",
  "key42": "2BfdEpknryDSQYhWozNP5NtYoYMXmJCj7dhQZLr22u3JtNe5Gi4ipySeU3aTBoyaQuRgsnQX9uhg13MLv113NnBJ",
  "key43": "3QGXNzMiRwan2qwehdrJntuspBTPKsyphrgX4ztihFLPG4vB7VVvnzB7jBB5pQgccJKPPUfapbY1zhAPL143hdjb",
  "key44": "234qgqRqRf3jJfbh5RTraGLs9zfqTtsJcFUMrvBJi1tXzF5yPxcQg8vr6bG2a7Uhv2FXLcHBMtaxcyPXkiPzSKo6",
  "key45": "289F8coMoyyAhvK5Dag8XfvQDc4ViwALqWypqhkaBnZNsHNjTUk3qapzcBZPDLRkPWMoE29hJRbyb48c2PRPpMkZ",
  "key46": "2DWEJhpQMFXsziGuStvbrMy48rTtUhspdCLhmdJ31LCKKjAUXeuEtxneJVVD4k1tChutCwm99HrhQYsP1xdY3GR4",
  "key47": "2t8E8ctgJQ8D5V9nPwvsSXs3bTAqmRV2Gh85vK2shDqBgKtrKBy7N8Jxbe5ayLR1mKQEoWKPqhhMFaEUUwqDKiCQ",
  "key48": "3R86q98tf7RdqjDFpJEWvChJMJf8qSJrbDc8eCwpDJdJq4Ur9ZMixSW9aDWBzT9Gxa94yeFUETGsdWxqMsuvC3as",
  "key49": "2Qdpc6QfP87VWCqL3r95emGrZiZ1njNg96tgYE5p7XYFUHXN1GAemjZQPWWhwQ4xoQQXhhFK5q8nCVXqkBHGJsdW"
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
