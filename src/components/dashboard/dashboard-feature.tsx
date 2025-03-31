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
    "56UXqopttFgdPDHH6mdBpYNVMU3mJWHUcqhHhCgkhdQHbiF8wEN2ZCrQT2U6XGL1H2cqfYSgVmWQXaWgZ6yjb222"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZx1Xu96smxMpAt8o8KtM1yNRQMC2hpiSHLivuVLVs3r4iXQEw55paphxN8y1AprigBEiA3SoUTnUGwah9vL1r8",
  "key1": "5btpTe25yEpYLvmrTVUmKPvMfbcERPNTscRCVcC4C4mYvextrqyYRmA9iqQDnaVV8Kbd5cCPMpNpzdhx2vX8rZkM",
  "key2": "QmD8tUD4pjQioFiA4GA1KqdHioTL9PxHCQEvvtLJmwYvEjsbvwze5DGrriFkfSs7LPkocX49YhR9Gw5i79BvoVp",
  "key3": "2g3ZgEjn3jFyTMj2TDtJ5RH2crhEt7ZsiJRYsuGXowqhzJzDPes6iRYa1m2BhWnbq2FTUX5wtUxfWWh2JrTKekbg",
  "key4": "qTTbFn5tPvB3aoTm6DvgBY6d68xRovhtFHcm4PXNbcD9SLvViy6onPwzFBtpNvrr9mZ7pZWjaTnNGBSxjmseHgB",
  "key5": "2qg4JExvGLYEnnsXggbWCJL4dmxZsMA2SDw7xMSTA3wQgnqKidJxTFV5oUXAfJH3ChwcL47AFninMC7uqurZdKis",
  "key6": "3eSdPU5HXzLMXAFS577bMoimq4E9CapvyYUeEgwoE1JAtrhRHuE2aehvtY2DcEBNgqHPKQ5j8PrB8JZfivq6K19r",
  "key7": "4E9FeHCrt3tGceVP7vuE4nJhWZ6LRXopo489ARM7LuDZrrzUjLAHKHMdu477NPUdHtQh2JjHgQU2Q2BBYzRh5Mu4",
  "key8": "5B9PMuvq24y6FLChPRZnSYxxLn25wUCU4av4Cf8L4aPBicZNgUBchYijABYcxPT7kQezzmjZT37x7AyvKcAbED7g",
  "key9": "43X4F7rULZBfb788NkQVQ5Q5YtGupa33P2ZaivpHYDmb72S9vgvMtfkzK468Jz4EbeF9ZdDTczypo9PAetYVe7cZ",
  "key10": "3NtYXUVLeCkXUHff1qjVHBJJ77ZHNte4tBpz6RdUkEAKxefb7oq6FjH17WHx9c78wtvX4A5jEsYCUpxkhSyJjjwU",
  "key11": "LNbiFjtZkAk2k6cA9cmswPxPCHCxAKkcs246kZyJ8LpKvq85SZrqFrXbZSTxQd3hcgtvUqnCpBSsrbaQDMkhL4u",
  "key12": "5fAPS2wt4zQ3F6GiCWtJw73Ss7oqfPJUjd1KwbEUF1tcQHPa6jMJFN6eHL2NsSeHrHu8MgyU7suvcTCp9SF4Wjot",
  "key13": "32Ugm6vQH4duzXw2X1Z6q2bW2A2QirUZDR7H4JCKoh21Efwc5xaTAm3qcGFbBwtBJ2kB1bpWrUgLkeb8M3yE4Wa2",
  "key14": "4aomi1uCQNGyPqmiavqifYae5noSVzKRHK1BVmyAWLHf7gyuX8SSFQaa8SQEgnSjFAns5pL2rPy1TtnvPxmrkx2e",
  "key15": "2V7LiPwhcAzUpP7dKsZbiEcMFNK5w83UDm2UUF2ngzTnXouaMr7yzbq5GR914ice2zzXd8DTUfPLaqUQfLnhm2Cn",
  "key16": "3CMBb7d5aWL3cjESYPerB4LwLi2e69hF4Lb6NBNL4woTkvUoFjHvi7p36Fq3cdGPN3v5yNU2btHZ7v9ag5pqtuMP",
  "key17": "4bqMx5EgbqeS9i13gCJCWKMHgGf7GdbNeXapEnW8igVuyCV9s512QNef2i29nLEHWBPtdkfiSr18gRdmqB3P6qCX",
  "key18": "3Rq8y2uqJVaBfCn3CePM7fS6fnZ7VYxwWZVNGtq3xqbZtNcuFDQk2yRUEJryjsxGbvtr9FQmFHo6AVAM7K9L1TTx",
  "key19": "EF4kGznzWE89eNNco4GCWDsEEjQG7QQKj5L98oVP66A3dEUqzwsyPNapKGapY8nGgDUcrZmCs3e9RPS97DXnzVd",
  "key20": "3JNkP6CzmCXNi4bVh44zXi4Moy7wNzgFKfvNgKMPxzxaAKu4jHK1gTfw9etcMUHA2JpSKEa2kCpE8QxyJN7fdXUs",
  "key21": "DjNzSbNGcdjWvthvLEH1vKw1T6CNjXRS3taNWdGqm3DBHrV8ucuHr8x5B57XcGYWnD988hSnQFpDCrnKJQURDqG",
  "key22": "25Z98eoNrB2pQtB7po4zeKLAYbH8n1pVEwEWuFQgeaVAUVDHTsxpf6FfiKJenUxMeVaXQXqmXxgNzdqUzToBwh5L",
  "key23": "28CuZEM54mdmNZeNdEMnAnDPWcaH3itaSHtJ5E1WuXLPu76bA7h5yc4qKqes8xYSeLVPJtyV3RXGakVjtA2VwfFS",
  "key24": "5v7K89FSwpQo4cuy6Ji5XwjroD3kaTECnKUVHsU2hnZoiwhTuCwL6fwRuCu1ZRZCRTx9CaX1QJLNWpeBsVWz49BC",
  "key25": "2AzBZfU661vaTUx4nmHkHVwLuxDKN5uN6jkpDf12UbnosYmDKBvdzWBDhDroZmtbsZ8pwRMitZxtbZBaVnuMrthD",
  "key26": "aK13EGBXps4YMCkkqohFSc1N5QPUgvbrJ7ztrnJMWWKuf3BM9RswqeFsVUtWZrxUULow4KozJXDG24GR5uPt97Z",
  "key27": "5roXix3z37hSVNy4mUfqcPK2XC4i4rFB49WVFWSkLecW6x9yqojyyRmfSRKBekssUFBpujcbspcFJep6htmWGLkB",
  "key28": "poXZJyQu9E3Jzm3kUmH4xaHWkijkAg1VE1PQNuLkZUe4if63e3tvRHsiy5vnZNNjdk6mrpfez9Ba6JMuhF3GKBK",
  "key29": "QQ12aWUV1j2kqbVWzvF22fcX6xnqp56UibZeCrfaxfg8x9oD1Vmd9KbR69ATvKAKTL4rZWm7pzTyyCzC5Tp4hdu",
  "key30": "4HskQw1eEuyqDabkAQmQCL3SNtrAFaWKCbE6LRuA493hy1B1iSnaBk1S7XyfC7hsCDDsxzfAtH1goTJHHQbrfxfA",
  "key31": "AERBsKToDj5utxzUuRv3xLMQTo4KCqibzSWB8GZJBb7qsBfzd7gsJs5qpY4RqaxpU1EkzvsFdLeE9B96WVDXz16",
  "key32": "3gjmJyzv98Ae8Ar5T9sxYX46dsiQqtvPTZn3FX5U8bEDAtHQqtvELRZBwvEv8kEHMFEC2W32mvQLx86hrqurruHU",
  "key33": "5SuXoWGV19kfTEgoURRfGWLbpsWq5Hb49e5wHdJ5BZoEj5QQs6YPXyVfaTjYFRwwpqhdtYjTXjeeB2E6RkZySSQA",
  "key34": "3GzHAW22Tqdpc7eiesmVo9KEqzpd2Enx48EbKfK91SBGKdBm8A4uY53KsibwndNfPGrebGy7xykEw1jkojy8WWa5",
  "key35": "3dqu6hRKBjf2aLJCJPNf7CAGHqwSJih5EJrPozyhciWPHL8bUfi9ZHFQA3dtMXcsqM5bw5SuAK4HVVnVVzfpkuTq",
  "key36": "4x9miCf62FfofMwVPZbgsfcnBFkoDPQEQ7GA6gsDjXJ5eDsNY4SBub4eLjN85uXRz1jGDdfoYBvL3y2CcnRQryTh",
  "key37": "4uvkbDQH3uiZLTR5dsx9pjTT6uRajUD77BrMCtcgpNVcnF9JhT4sggejDWJnQfWCTbb3DPnVCwWawY8iXDtWNRe",
  "key38": "2RVmaisjBELKYEh6V9rGRSNKEWsBXxxm1Wmhewf7xvRPvXHSFCKDyMpvtFPknXYUZpgXk37Xa29CV7NWzcznRVbg",
  "key39": "4RDZu8NgN3oWR1oLy1VGJgTg7yXrxrPgTThjFMrbLuquuaNS9pnNXVKwF3mFqq6L95ukn3qNsSg2iUtqf6VXnJQc",
  "key40": "5YyQxZXG92ZLj2npntMyv5ZCSw3oRBgUZRXA9STjZzkw2kpTz1nrGudLqiAvrcdZnkjNfmkqN2ULyb1mrGguuE8G",
  "key41": "czvRUtpVHt4cd9c9RRV2ptBhnNBCu8caG3DCdPuRX3shfCUoHYV7JsTVfRkMRB1ToUG1Sec16B1yzbrZcpjioos",
  "key42": "5XSfCLD4iiX1k1pD5X2xk82rBg6SDqg15UdH49yS4St1doXGU8wv46gZPCuQ2TkVLMz6LZWNsVVHLrA9gmKe5cVG",
  "key43": "3p6JAURCvcANPaAMdu5TVF4Z3GsNdMSHv8qnyk4U26LSFU9PkQEB9dv4gq3ELwLs8a3sUdK8fUnseGEaabs1fTAy"
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
