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
    "4hWUXEf4pwPdoAX9BtJdvWCsaEroUQRBP3qYsbhowvZQJJr6aAxqATrc3xwSkEoRpfCeJ8eriTn3YpsibvbxvpYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLkpkUHM76YiCHJaHBCASmk4e614aPamaXXPgiW4MNYHBtcTYJmXZec1kckFZUVKasq59JbEGafsvGfqmd8qDz6",
  "key1": "2GEarb2BSRQ35Mhc7vJzNriK7qe7r56RpJdcY9C78YJnXdJj9K3LyB8xwatLRKxVoADvM6XXLr2AxKfYYLEvu14S",
  "key2": "3CYEkGeDKhFsfiUUSiD9dxWpvY2ckysmZnFkKgarvrmkekJkxhN9E46erQoPMVZ2Pin93d6xCoZnM8Wcn9C324Wz",
  "key3": "cBL6WVCJR1WmHT6BaMeKYYtF8Wgr2cprQ6TZq6B4uNjkVeWNuoUR5YgVQ1bKybDQNLnZ2ZbAAMiukGMpYNdjAp2",
  "key4": "266KKkFcPxJ2nxqXhp2btv5EJRmjw7wCptNQqwwjwTVzgsAwAFqHW1Kod3vCnjZGMSDf6ZYALPSHf79WAiRr7rx5",
  "key5": "rnMm1XojQizBeJiefAeya67Js5x9s7yGtpRhBytbUiCQahmwH14GY46SC1ZQduPAgnUEb1NBM2aAqCN3iyjYqqd",
  "key6": "2BiumbFZ3Z3rs3BYcMPQxWh7Urafi17pnPuBSJb4cXQTA4vCrfrbVTxoK4PPt5vuEL1APcsnCajgLP5PWk2XnDpk",
  "key7": "2ekX1wN69hhMfxspfaR3iCeHGdQi4tZgNLk3AvGy7JJmy4sXmtzzRzosZ6TAixk79toKe1tdwTtg1PbazwW3wxxF",
  "key8": "vTXcDv2mxroLjqnboQAkLEXvhLmd6LninYQASnu7uYwtqaLwGfNBGpEs8fvCK7QQPqV6qy7wXw94cwb7KtKds6K",
  "key9": "2vXt2ft4yZ34TJcd2LCtrqfPZWrSNZrmjSjTvf1jhRWPmJUdFJryFbcmSDSMKdr9r8dWvikv8funVqMPhzC8L6L2",
  "key10": "3H93PktT4HZJWcLSFdDj7ysFUXGJm32dLbZGDXCpHko6uqx6aboaVBTUk3wD2hd7vQfCMW8Hjc2G3Ko1QSjkGdjH",
  "key11": "4bUiG9oioLuRwxxjo9Cog9pnvSmj4einW8oGpBkrwKZVQ4gFRYHTcHaKCwx3Hj7kibCaNpkEZuDjTJ7KzXB3sNwm",
  "key12": "5nYPjh4cFCBRKd4Y2u2obsojTCif9b9rNDVotFTbLPBr7ZCaDqphcNDFTCgiBhrvd3XzjXw3172AT6sTLHV8iCC7",
  "key13": "jQeKBTQ3tmc1eDomKKVhxzoAxrxeYboe4TLtD1AdbNEBHmuGsViYSyLQTHBXwCNgE6HCRbrXyCpoAN5bqBpsWTW",
  "key14": "3vWfbAQbedh1AFJfzviQ8gh2KjscKiWGRonZXqNFs2n2fKc4KsRczzeQmsFjfhkrLGhCPfcuPpdGku71NbWr8ZW1",
  "key15": "3U6dDEyJ9bCJmpPiBVAfP2yyU3tHhjR6tZ21jyVwW1zPbrKD5ZifDd6ZbWJSAPSuEpLcenHBy5h6A5ydDiMjFGxy",
  "key16": "25eT5VqpwRcNx3cDNzs19siVtoPrVH8A5CCJRSZvULrLuiWsBumdWEvQRWb7HaZutwWpzGZVjM8vR2HDBxbTERPq",
  "key17": "21UsGuYxKvhv3dNBc2hKSuFoe7YuKAfuugrfBTa9rWF23yiGsu8K5Q4cvRKZ1zGxfCf1ozKmW5zmWfT32dtskDLr",
  "key18": "2zyndGH1URSWakJayQXpfbaYYFcox34JDyFw5f8xcVcxh3oG1ZRKWTGpyMiM6yWuFeFyrzx3WXhgAPqTRFqTyfJX",
  "key19": "4E6jQ9uiTAfzcPL7zWjycecYGzKhD7kvUenF9eSKL3Ah3qsRzyBgnof6xvXzWrs16RWTkSEGq5TgJGLdGGr1H8Ru",
  "key20": "59ApZMQ31qDnx5BCsKNrDT94S13WU71eZwKPuq1gvujtDdoGRVpxLujCEmRvM6eePEB6qbAz9BfUDKo3gRsynHJH",
  "key21": "2yYSHSrzhwMEwaVxtRT6Xnp1XgkTWjq5chXkc9iTPGp32RF6aVAL4xmhzTVoiKLpT1xJKs1Foh7PuHojF5NQRmrj",
  "key22": "4k8xVH5crm2vTBeVo6HrAybVnfJkkwESuLwgQAiuB8JzTxMYpvYEhbDgmUfU27r6czGADsPdqDK7qCjLSwiEMPBR",
  "key23": "4RNTAtEZgr7JCCApaoh5DLLc6i8LZc8Zd3rDkNg7X8hLFbAHax5iJeg2E8qySNG3AJrZyfZTjruZWHn2dpp9ULeP",
  "key24": "2koSHNvKE7hjZBcETbMxESsJHWgjnxyzWtoENiqz2focyF4PRykzrFWX3B7Ug4jEgoNbSCKvoiuwwabV5ZMDqNt7",
  "key25": "46PhKu3TBS9co93R3UC8GMcDztmiFSiC7z7SiJegMBoxE5MmYKY1KKs8UT6WQvV9oenpq64gRnJoPZMir4LnRCgu",
  "key26": "54RsEfBjvxk79ujeSLbDkns1bub9w4K9NtaWm9YNuv3jLdmadbyK3gJmntMTSPmviyDkvX8mMATrD8SWg39tcSfW",
  "key27": "3S3Rxokz5YnetMoFLijNt53qHApdPsN2kAgw1cH1aqqwyAoqrGyoz9edGqi2sxx4g4J5S5PYQKuLSsoza8sdjV5e",
  "key28": "4tRuDfnFYXGvJks9iV3Ti75miGgisJJxJm66QHafJKxYuu62BfD78Pv61q2mq8AB6ZRnsQxKihzVGybQWm4MyrbA",
  "key29": "5TZoUrzAMxTZ9sugVdudM6K4hPswrDEp4fcKKtPAyo1wppT7BB1MEPjF67y5ssZpCVihSYmZFQu6D9AucYtvmdFY",
  "key30": "2Pcpev58fUn3skQ5p82wrtzBSCsztQcUcs411hEMn8QBCgdLt5mmTydMxLAwGMbrQZiv13wpnxAvR36QdPdiekTt",
  "key31": "yuLzjDgqmgwBR8AYf4L8wDaZtu5XXyJBTtkFYZUxmfeF9J9vqpVPUz2dm4KmES8v32sxVDSnEDPmDTMFtdJGnwN"
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
