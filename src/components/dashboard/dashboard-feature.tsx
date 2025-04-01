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
    "5MNG2LtmrU4nfGqx5sA5e1yPUHnw1M3F32oQA9QfhV5pZtF2Wr1Uy4gdMvJrdG95dCzCn1NJKef3kCSYut7B15VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRxAQk4PTG2kwTuNshLFhQFAnuw3wC7VXqnUDQXZb8k8wpPyoLhUvVyi27iRWqnwHoPpLRqCSVqR88VbaZBLiCS",
  "key1": "3xQSVXSs4oc8qvKchyx9iozfqdg7sxGpitTm4HxbfFUZGC1nApkZT2abwn4T4CYZJM1TN2GPQ6Tr6529Tu3hxn7t",
  "key2": "4bCEgTC2fAycyDFC2obYDjVW7p28cLTUM1pvB1AnSrzz2RYAPLU9czDGq8KEWvdsvj8N3c1PvRBohSMEL4awCccU",
  "key3": "5bThc6HNJ9e2DJCr9BYnQDQ7ssQV1FBjj92fGrRDC1BBi2JR3U7FbtMz3euCfjhVM6wkEaZXA7MvujwSa9Uz5uL",
  "key4": "dMs7jwBrrBJyxVhm8So5HAhZabGDXH5TVBwQr2Pt1Gi1hpPQw1ocG7EDDpfBswJQmLyJZ5QekhvPkAzKvYiYM3W",
  "key5": "4ZJ5LUzmVJAoUwByZRidk1b66utcsSnLauTj6yXFTT7anf8D44ybeMXRExnSy2uVRQ465JX4WUp5rvnvcxyjvFXU",
  "key6": "462gnEZTdpUZenf56oe5BM2LQWgojtYDtqcFM1mfMJe9Rp9v5yajE3uP2iWGgPMFRdYqYhDGBTvHDyUvX5FYbhMu",
  "key7": "4ChJaWJzyUQtv6A21HWbPqnegoJyLbph3wes8ts2pB8iVWH4Zht1t8qzYLEt3fGx7N7QnikpdRLxSbJWt4BdbZGv",
  "key8": "4ArT3YDguH1rwd1TPbjKAyQ7WuVEZWxDQX89RPSLDxmNbK5xTer4qFUzaaNhQTdVT9uGKhys5hcn1rfPs2FbHSoa",
  "key9": "2cNCdDLaUKWauUV5N4TCrGepgDrXqvTpvwmajJVc6byW4w83xB1GsprJmub4spEwoKiKvwa3pYhkDY7d4XMCmnjq",
  "key10": "3SKGowVagn5B6E9tBRcfE7C7wVCMCrYNm4RZaSSzBn8bpmBgA8wZQHEh6W1TucJzdrRCb93xjkeoejBizujkBJok",
  "key11": "623Hzkr1iCjBPH1jUPKHM6smKGYbLcAubp4VqzXh1PZGxoKZETNQLby74uqy28xacMDN3TWwkcujT8WFedXyQASG",
  "key12": "4emq1ejYsDbwfaCmaYN2srjp8iodduJgUceGv9NcDf1yTiYheMgjjot7chYF2DEWUsks9b1hioM49PQdcFERNtP3",
  "key13": "4LRQSpEzx3c6bcFJiVggS7NZTYAzTQqckpa9Nxe2CbabgjydWk3FyFArRr1oDGmsWCyjgxhYLNjjvSCg34nfFbVf",
  "key14": "3afXCE8vaNtsi3k2Kp1WDyZT4JpCsWN6nap2hLsc7yKohCvEyLfcCmvgN89rstH8YAfuKbtM5YhEPXtbFbN4YgiN",
  "key15": "54f4uqBoFmDg3UVFJFvLVsAdS9yy5n7QgrCAQG7ZfdtmPaHEpuynJZQF7viALo1d9GK5GGeVR5WQvhHf3kuSAA1Q",
  "key16": "3BivDRZLuD8ZMV6sMcSf4pSCSJTs8BzcSbYSgLMMyTWkQh2kc5NiS9uz7kSgykZMTxZMjeWrUtYNHhtJhiKBGRd8",
  "key17": "5p1hfSAhej9ekpMV6NHUfVPWPPVPpxFgyBRxRuqKdAeRGqZQPeunARznytfvfgpcM8YibzKthZpD9HiT28Xr2FkP",
  "key18": "4QhutivjDdwPQu93wNZFZzTnbU8gavzDCLEgRahpyx6xyB5Yf2yk213kV1YJCyvBKsXLNQg6pkFeA9dDk1dLiML8",
  "key19": "2SBH1HbZkHM3iVtnrswYfKF4ZrxBQsjVGMdp4zR38Ctuy5hrWNQoKwuFJhUq38Lkd7GEKd6NoeGHQe4QeJxvGuNd",
  "key20": "4ipKSE6fRXT9xeNHMrYNXLh5W9dH9PxoTAma2acNQmRAD4JgTCxfgNqy9wQXMFoBEaazTrpSAhETJb1ztmcPk9pe",
  "key21": "4Yy29KQg3DQtKACbawJRra2nSG8mA9wgT584UG2GZzYGfEVqZVp5pxmCtHebPx9UNBPLTxW46Aw238wUQNfkRvvT",
  "key22": "5cWpcyzwv1gbsGDeaNTxKc9kj35zkKJw61Cf5kB74qNjdwciKupFioWATJeAvDEjhM8xFbyFfLAv5yvG9x9RDx8S",
  "key23": "33LczJEP7wU6Z2Rpg9n81gZz9HKRrRs3HSLKHRPm2TWxMasuBuguTeJjJTvfvBrjSYnzfoPba4mnMoNo6eH6yozC",
  "key24": "3FZsu3ketrba5LH6knhetxDvr2WXdopJvtuHgkqMei4GnEBb6FHGxs1FiQGVbwaQc3PbYbqwB3xiqLUPta2PXgYY",
  "key25": "mfvUQnMdp6hJD9aWfRM4Q2YFdBkEg221JYRiFV3V25i5zZSHfKCMgFJkDMsZC5HiimEHYcnoMTUwdUpxMgWadXa",
  "key26": "2z9ZYcc2y57dU5FxCu2PCKA1EcP7Qa7guy9kn1Y74GiJ7VbG61WykRdaGte8vi13S1rwiZCNL7hohraxtQGRhRTd",
  "key27": "Wn5x41DXYJLfNkt6EdsDQZy67Lgb4Eifm6cmLhHnf8C7uPjAdPwz54R9bijdPNUuNHkTkeMU2ra53WcNEaDJY7e",
  "key28": "WcecFXe7cDxAWjKYDbnshL2BJN4vDMDGagfar32ckuqtwtxaoEMZuNJMMN1ezQnWp1HauXbzA5yrhHoJAgmdwkf",
  "key29": "36BBjMUXQ7vHMZYuScA7UL2QmhM9K3iQyXM4DFRs8RecMAytr1gJkWn5c6pyRBfAgTiRLKYCAmQ5dmVwMnNemCGd",
  "key30": "55hcaS8yFCN8EqGhT8uCjUUqRJnj1sUPNXgQ3dVy3QoNiF2oujpHWHePvp2Tac9YKz46F4UicPzRD8hYqHKZMF4T",
  "key31": "36hmGjzjxibe3Hn6Zdv7LA25zr1XjpzAyz26YZY9e4xq2tXQfc6HbisX9k5ji5fYyMRriRVk3NJkcwRj8B5rqEbM",
  "key32": "4VjvyJgfgQtgu4nizvohsxCvmTRdZk1JvLTNe4Jcd3dnP1kozeyy1dD2aHgNXKKDN3kVaTAmRrsN69dPUXvnNkaT",
  "key33": "2x1pVYrNKXtkUTrfvU2toNzPioMAnZuXSqU1sTkwAw16wfw6py7UAHjupYeqACbfoPUVH7UKHQnW7BKjChKCp1g2",
  "key34": "5hDdkVupECK8FEFAgxfodTG4kGUBUtor1SnURxMYUhJT2WgDMn44o6fTzTWLVTERthLHK75BttZLT3NCHvYvGjBF",
  "key35": "4a3a4oRYrSeLA2ZXck6UwF134VdqRbe5oV2ppF3Mb89dCTxWfDss626R9DjdVfFB7U1uacTHwcagvzLhDCvuoW9C",
  "key36": "5JsvJQkyXpXBManSCjKPjF8vZ2yuNQz8VdKP8Y4E2YdurwfNLmPUmiALjuP4226AvqsLYeZXcNCc32KXY66YTFhK",
  "key37": "22ijPKudDtxsyagNTFY2Y3ScQUNcrGavoHbv5V7xWYwp1yihsBEu2d9zdTCrmDpASk88drDiyH6YaWf5xKFKL734",
  "key38": "TF4B9jcHqzJnXYBjcR9gcdj6wraACLRktpAmj7RvD4RXiuVgy6s6erLFoQkneiZGv7LVodgrB3YHhVdvdkYZJES"
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
