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
    "e67HbMASedxRMti9KR5xs4SFaU5RzagcQGFUYAjfTDpSRGHjuGsvxAhiYV2NuH7r2nXT8GMFDF7Msm12yaVqsGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639LtUcpUynPQoxhfkwQNojQRb1qLmWfhfHkbAHj9Z2cGRVciv2uRqZaP87RX241gqsywfYsFYSizmsUhTTBBs5L",
  "key1": "3dHTWFgrcfPrxRvYXMMATAwkTjttbsviaoQkHuyUVkrwKdxLXixoiwU7oS1mJ4KYBjva3yyWey474rcFPhGojkgd",
  "key2": "5kC3CymcpwYTgu3DrpFkFHJ2efXByYTBjmEn3597FdvVkAqPRbAQ8fwNB1pxFNeqkVNtRjSukxcZ486Jd9fjQRA5",
  "key3": "4JjxebhZQxkJeEsjJ3PWUyneQN4Ht6G9R6RBrZeVW8Jkj1nywaZUrHZnKFUwoBjbk895Z2M9gqRTbTsqKgVHosEj",
  "key4": "4nYL6oPd9jJ9aDw1jGF11icJqumjQkQgpddUbMufCyXU3FsZz1FSvCaybk7L7CFwVUdrPp5w7tct66faSPQePQT4",
  "key5": "2ZPx6WgpQL7YQyy7DtVXaBD53xZe8JYfgguZQoVq6bHdSjCnN7fdqPNhefBe6tKuczkqdevsV7uxxK478SMSaqH7",
  "key6": "39mv4hDgjqNTphdWwarPMbFeteBaRiKiSgDut4Ueqpirqm1GJqyHu9oKRGsMPrWTPj8zBosaNNMHw1h8TDMnQ4hm",
  "key7": "5j2JHY4iL9zahjhEQBd1r5PjJQ1twzWqgR9SpA7TkCpYvMz9akzfgVM3ZLbcsr1xHnE6ru7c5J7dmT6CjzfXcjVk",
  "key8": "3vJ9Q7tah7srdLpmvqsNNQxxPxJxHY6uK12JwRU8iNYJPBvHe81g2QCJAo5nZZhCHfHuezBx55dWkY4xj1Di2rRZ",
  "key9": "3v76qBgdbY2JDGw4pvgeWvGPigfG7RBeroh1s6wGJ1c4PyQEqhg9CjYWA5ifPibHgZcnjDW9tMtoSeKRBekUshKr",
  "key10": "4gzZ7RjoQXfvQDrDk5KT6Q5bBfGm8fJrzNegoK2STWNXcnB2MzVfYQCXUDcPSFFPonsSmbdzhYjuPNzGzQcYNCbK",
  "key11": "2oh6qM6EpRR5soDiXG1nt6TDzXrTozMr2dXWyoZ9u5xoeYBgSMzcdrz9tYG2zjRoy5CrwFQGyaMfvkpb3AXmYqgr",
  "key12": "5R6csv6rLZUbuj9Ucsa8SZcaN1Fm1BBhPoLkfZZRHNfaZyXR6aQhhCFya9Lh9JwUBjxpJVRAL5QrTxJhPigRWtXn",
  "key13": "izzknjmXQtLdFw8WqKsjuKXA2dabuF5SeW8Rxd6fCZSbBxvwXuNYhuzzPhDy4ed1FcHSS8iAPQpf9vaSVq8nY99",
  "key14": "3X1ucCDSo7duMX7xaNUDnnx2HaipFnfMKgX4Fo5o3aArqCXwxpTXrBx3LUQvWVgGwCjebHwHSaHKV9rQQCRDdzdP",
  "key15": "59RAuPm553hiHYNBKaYprQDrrRjAGzm27NsjgPSadoMJbX77P6n9L8R8hmJUqaVSkeiufT4RmxzpTgFHVGXQdBGC",
  "key16": "5RqMGy1ZPW32nxu88ATFfBLn2JdU8PN9YntEV3mgHp1tBnpc1XixNCJQWknT4ESQEJvm6hVsqKg4iec8QBtqgoJm",
  "key17": "3kTjn5jTkb7GTHchxdyiXC4SpW3CnWjWAo3sERh44wre7qyg6eMqETLcpqAofGSyFN8WqSUyLjoGTQs2FViWt5k1",
  "key18": "27CdjEdiMVMxg7QVr6pncUZbiGZQZpGBXjerrz5wgDVu5Chb6zGuFqa5xforNFNYjee1vZonUuxjWrAWyqGD4BkH",
  "key19": "2YeuoycxYAtMzQppTMr6iLo5vqaMfSpZVKJrhYyNzKaGksWrcgYtSJUKzHWKsf3KYsSJUtg7b6MFDzmPK2kNSd39",
  "key20": "5JMVmo7x5AD8d22fy7ysCvtn7pM2Hmh2VnfBFvFBwQ11E9cWoy7j1mXr8XyLpgbFdvofacoEKebCioP1aXEJWi22",
  "key21": "3vatqBLcpaQ7hZP8LMhrFN4GhkfscXqys74xWrXfKVJGQAoA3mqbXH7L2xD9wkkyZAoTJXeY2uWD912bbPgcGsk2",
  "key22": "3p1SxsE85dNnc95oL6tkt23vEcAY1aD6kf4qFjMYudq9HEZJkRgYrBzqzF14iuAqvitZmBNgDiGvCCsLbmdURNWP",
  "key23": "45sKx75HHQss9KUivCLi4updFn55VUv9dNFoWfY7xjtHVPHCc7yiwtsqcRJdRVwHktmMWqgZiLeu4rVoYiiBK2Sn",
  "key24": "4sNYvK1UrDe4FDGJFvf1q4HP7V7u66k6XisFG869cUWFE8vdbYxBWAvhPoxsqBFXxcis1wgjhMByC7fn7kGwXBL8",
  "key25": "4yA1XpyMT5A6KyKfXws4mstckXTBozR9Dt8SEDvapuu3xLrvB2e3Ct8iqxwnvzDrivBpWq8Qg1pPPMvhwiVBphjn",
  "key26": "NrgxSMS31yf4KHe2ZsEHJNbgbxZRMe62aRd9KvVduZjis8f4PQeoLMFTsoDcXPSfezGaXf5JCFyCGDLMBky6tzp",
  "key27": "4XeQEGCKuTzCoFLC6wkYwLfRTkd9T5PravKs7h3o858gmDhvtPdCjH4XnBCGjgm98JZvQgM83sPtRX29uAhKYSrQ",
  "key28": "sRvWoqhnuFQbHwAm14oq1GUnupfvHcqrk2yXi9ia2BqSNfNaMkzUz6tGPiZWEpMtpwDct6ykiLKwpBofdfYmeAC",
  "key29": "5xnj73Wv2bev3rdA9vsMvDhNA44WcoNupyPwo8ScvLwFXdfFeijYwTWaW5kbrzYriHTQ4ycqJn6xDDnFgUQyJLym",
  "key30": "4WPppmkJ2DxMMaAyjR6edUsNmquzTX8WQis7zi5FzYuK1KXRTYtNvbLYuKx462vZciBxqNSMXNvYs6XYadVTGcK9",
  "key31": "v1rqqWdWAwkmXYdu7jLvxnNzZUHefyxQCFLizLTp49vQ45B4FjNuVKTLyimgw1QZptMqzs5QyddwQpvqui6t6YJ",
  "key32": "3uLXjxiRq2GceMEPwZFbNKWCkGsZYYoSQBEBaUgKAf2ht2PD1suY2fdAHPUiZC58LbNxZHTKqpPdw6G4LkUUrZeb",
  "key33": "iJkGsDU7d7qzkU4GbB8c1B31rYrvG8GiMyd5cuvZrC4jSwaUGuCqoedAWCiC1pYA6BpZ8Xas6haDzsJTxnrG21J",
  "key34": "Vs4iAS6PEho59APM85WWoF8w1q6Ly76SnsunmBtBTk7M6trUT8ZBzWLcejkmT4cX9kXstB77SEExA2VSdq5U7bX",
  "key35": "2n4cPNdptRyT4WUs17fJqpgTwXfFVmyXa4yHFuBENQ8QnoCSQD21n6Yh3d8gvvusRZA5K8skL3T7SJFv8NYypKPT",
  "key36": "3XMSYiYobDf7DNrWqGeNGVndFvCJV3hY18EqasJ4CbUh3T1RTrWneBgi2jfvLWFAFGEoLHBx5xq2Z5CvTJcbp3Ak",
  "key37": "2C2SZjBi3nJmdrdi3V2aB279dBXAmr9amBvTKU2r9skvgYK1VBdk123uL6AZ5wpqiRuDAgEp7Nc1W7hbDw1eSFZh",
  "key38": "3akaKA4puteUZZniB6waG4kAvyoFd9SXtCHcTJYYCSBJn3vzE7Y6iVM3og2UJ2Z8bsdy6uAYms4bQP5oNoftTLQ9",
  "key39": "z4ffTp9YngUrCMbrrzTpE8PxHimPCrrk4JnfSWAeLdp46qkyLqLVyeFS3NWExhEVE2N6mtHGQRQcg8mAzwmu7FL",
  "key40": "2TYosSgp9xExJxCCHxSzThUTG1FgMcNjArKjTKL4DVhPBdN4PC78kyhwHY6WCH7PoNRHkWHYuDujSsDpkwjNbZRP",
  "key41": "dLE7jMXj16Jh4AvdbNwFHQqR3KNcqDwqisJVpWAV4c7QgY1Y3q96PKBgWKMeu3emyfw5ZrseVW4SRJ3nqU8pCwf",
  "key42": "WZNyM1rFQMerHiEMRV5Kh8voHumqSxz4UePdx3FSvW4M64TZ9AWpxXb1WwUincEoLu5h9Nc7Ekke6K6i3xhey9B",
  "key43": "4cdvELFaNPmyU1SviXauHTmmSPEDCvH5qCuMbyUXpEMDroxTmC5tDLJu4q9ULEUp4uKcL2pgZAkr9QrgmCsPtNhc",
  "key44": "21CvMuEKDaFtWt5wQWoH65miDXusoqCapV5WrdRPPyVnBLmvsWYiqq3jqRpHttp3swUJYS9zZUZAhFJfg4xK4pGc"
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
