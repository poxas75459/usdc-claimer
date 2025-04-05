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
    "2qxFBbWyoZWd5H3Fnwcv4iunyfEjPctcvJaSjKp8imuiji2gZixFQfAKy5aUeDWt7Lycv5faQMqeXbZP9r11AUQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzuukzBWjUdHzTRVfiyXLrZQsE9X5UAPcAqpCcddK5YHwavMVinPr29ks1YCJqb5vwALBu2pGTbjhbYWTTCWQRq",
  "key1": "5wY1UuG1ykL6JJC4nChkbiagocZyyxGdYGPLCu63Cmejgnc1KGccetfBPCnvqgQJMFNTTFyzECWTN52sdgMWwDuY",
  "key2": "2XB5M2JyAHsRFKR5sGnR28G6JX71iLDKLXWZuXpg9vYF5A11ds2Va6zExVbgqYaSNUXmSHfhcdAWJQgXSGMf1WYB",
  "key3": "HAaZ9pAH4v4t59r1uoNnYm4mHfkWdvJjw7bRi1rk1Z5x2k5QnAUVyH8QmScJW6jre3XMxpA4RnCiepKCrN8Yxff",
  "key4": "2UFdKTqaA9QX4xEfEciEbvE49y6mc2jx1ipojH2yx2ajDp9svvvqv1usczofZP7WRBcdv2N6GGCKZdpVsuasrMk3",
  "key5": "EKe9QEQrwoDG7irEqLSNNJHGbCAa8gsxqHisabjELnj4sQEaXg3LDkjCy92WmP9h5Ci9HAhADwmkj8cCQu9gJpC",
  "key6": "4FK9cJeLaWSnfFsb3TjG5DZEFsdvjeVLCizAjL6y8vYC3LhQ8Rqm6yZKS7f6xogb3CG664dTasCEi7GRAwvmXuq5",
  "key7": "41rpDs6PLhfwtXoukrN2byxefzsabdTyB2tbRSMm2jVKsXbXrmyDCijf9fsELvRndVC7x9MZfHYJeJmu5vyouDvH",
  "key8": "46EtKPxLvqHkVUbr5vYvpoYcxzt2PYo32jPg9G27RBK1WAPejzvFJrPkaPp59MJUXXhD4yftCpqJddyFdMWT1dSW",
  "key9": "5u8y6unoXCvKsCKzC6c96Z5obDbcsc5Be4gN7fcc1qmReghHMo3N2MSwEKMa4emjcHQ6KV6HrMoHSGovNksSknWo",
  "key10": "2FTLWZFzQWcEEyuZwr3WkPJJkBTfKrCU6S5w3migg3ypfqFRND942pBBhKtR9moSKjbxJTKdE79eCyA7EpQURXWT",
  "key11": "2HA4TcegZK1a4bUNNMNdnH4qGkomxrAsnr27c5DiyWhgJXTAHXDu1BFuVks6DEnGRq2jP4CyraYHuYHn4LnAfHeH",
  "key12": "64bCi55prcLkgdAezuSMKbLVxPrevDCtW4VQw8yLWLG2hdT4vQ2Ls4wpJym5QAGD4G34PwSFriBZDSjsbC2aEERN",
  "key13": "5heszMqcw1xUezv7WDhbg9ULLqJBHhC2FDHPanWAiR5pbnGzPcWNbYF4uGUVptLBP2gzgKFPqjssrzR8aucRta2w",
  "key14": "3k8KCg2EHue8sRYktVqjG71RCeV6VUHj2zywZRDYdqGarfJEeLt9Si9MSNj7QhMYV7iu3tenA4AA2S42r3zcy7sV",
  "key15": "2hCDw26Tg4ab9S63VmDVYpeLJ2JavP48EikDUi8fMDyYswv9yWajR77NHXWdSHfHuMAtEJAroGuSvT57nRqHjohR",
  "key16": "5Ji9LborRgBrDnNoaVUv6w9DPqybL7eqiUkgDQJxEsGTjGN2zBpL93KaFd2C7sGrXCRbVJxCYbj1ZYqV12f6eyZj",
  "key17": "385g9sTdpPSxeaW9W2vGYvqrd1fJtXcf3pis5YdMxM9NkRSjPJZpUXvpfBgp9TXMmktUvaDRagtw7jQpNJuMNYij",
  "key18": "3MeD79Q9Mk45c8sKLXRZevb5KntBE1K3MUVLywEtApNiukDxw1LFoC3yPDfwmuHukbVVB8rSGki1ZKcX32uc4its",
  "key19": "36oGNAQseyAnqMKD7xbApdNLnsp4Qb5N4DiUyhn9VpQo1itusNLdJvPtZbSUWiUcdiV9SZ5wJoSrxa8S9487HodR",
  "key20": "2JHsEHNAENh1HJQpyG5fCbTjR98fo65DP7sEH91VjAcxCtVe1nm2egSQjXFYH9HiRFpeUTCzJZDRqAQyBLWxKjze",
  "key21": "2qTK8xLivP4adHAUNh1CEuanxLwqR7hvjYt8WvjRjqApZXH8tYSkh5Atvmr5i5wSGiM1UFafSNtGw4CHtLPPH4FG",
  "key22": "Y8ZQL3DBMQJQwRjqcWJZ27kiCPPJXa12WFPK39GWBeQcc1VPRFdqgwiL5hAWyAC2VArZkrnJ3AtFePuHGKMqoij",
  "key23": "27HTX1grmctfzKUQpBMJMC2crHTZW23M5JpfB2uokGJ7E1wT9nbHrfVxyq1s737dMJKXZB2HvDqSWFCrRAwmwZha",
  "key24": "5Jx6SwCuzzHWJ5LHXYuitfqhMSPZCmHjQYsD4Yd81bw9zhgPhNh99zhcsn122ibYCVt7RDJnP3V8W8yES2zCqEgd",
  "key25": "239bgS8VZZ16Eksjq1uRDzK9NbTXHssG63MHuCUtiyopKgTtH1pFDcb1DXxwwNHf2EKMNRE5okWob8TDXAKxt6zg",
  "key26": "4j71XoaJke3FFkiFrHG2uMGC8vXP3VLXX955VSycgVn4SJTAWBqXxXZ1FpG2qQ1ceTBDRu7gmmuCz4ydWBh9gHDS",
  "key27": "5nHGXRCbQd9ghbT3XRVTUpqb6ioLiv9Ne2ZwhoxLqXvRBkPfMNauTBBsYCZsFo1oAnkzS9omrvd25ZdLR6gN9Uik",
  "key28": "47oCRWhra9YJ4gevS144PpZjEnNCe8R6GXivNXzY1TYJhD7zh9UwcU8jBHQy4kwQHvS4RqoEjyp6Cv2UzC5rwSMg",
  "key29": "4gAykL3a3TeMwj5CathB5vgTTcprqzfWBr6VHZmcGK5Fp8pYbEtwyJPSZyoPAgLKBY1opSpVZDEg4Vv5FucXPHpz",
  "key30": "ovdNSUvsUWsQdD4KFib2HzEYyEzN2yeYg9EruNm5gaYjX3PXG9zKo6xhKBfgrgRCATAMrQD6smT87ZVAs7YUbQu",
  "key31": "671CeBfL6k3dSYxvsGdpDH1NN9ghW7KPUJ4EMzmNcikEbFsdjjwgQAAWPKaR2KERzGiytAk4masfCLbsHmiaBrup",
  "key32": "5oxjdkxReoaJFsu6XYrU8Kzo3FD9ELtsA67rT7Vt9Nt6qMPW8sLGqL1auHJxCBDHiQ8B7YRZeyTH2bLnkdRp7AXv",
  "key33": "5nM9QZDcyvV9t25UCXC3iRq8NjpPXn2UMN7DDj4omXsjKUrkgVtMsNpc8eS9W2M8PNuYWaaqYZFYYu6pxU8Tzmvg",
  "key34": "2f4iZkn5x1746DcCYTA9gSoLxerp8eiemguZV3akWNbCwLaeJLPEFgWRK4HyE1C3tqKimmoCsaE3W621pnSF5YvK",
  "key35": "fuWeQYuHvyL3fztxM2KLHWYozveg6bzQjZFcPj2UVkDghaafERQKhQy5apKgDjVK8caUT35GScQRjmCQdJvL7nL"
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
