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
    "4nihz49wfBp1TzcVLYKCvSjXj54uSgkqBYReNBJ2Wrb3RCgrjb3gqi6byGxGfZFucqUJNbTnPrVsZ2zJPCJ8cKZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7ovDKCUYwZiM2tP1fZBkdff1Xi3fYg2sdwDFenJmfHgD2wCdsUQb4eaoQT3mQFRKpKGNxcgSAn7RFhxWoZDSJ8",
  "key1": "2mFMfzNK4S8ejJATY5zKcm3hLoXzDheFUio6kMkEbF5VuAFucoj4NCdG5T8xX2PJEi77geagTnvuJ7mzo3y2KaqF",
  "key2": "4GaFPLy3gQKKi5S3wtZt8Qa8saEg5jbYWpXJCZHfCTBjMGtJsNLk2gr9HG3sTqb3m4b2K2Z3N9EVBMGu4pMSXb1g",
  "key3": "66oD2LuXvFUaJgr5bxZLD37Yhp64KxWUC1cM9Gik5dSzjmUF1QtLioDFpGdpprxwFm8vBoUghfMf7Mqa6qCDiAgd",
  "key4": "34fcYXTUd8to2FeNvUzV8shSW2xrVBUpuh9SuXeveyCDPycGACy5YZYuBxfYs6Xz7GbmcZ2CG69tAQStuvNfaDgw",
  "key5": "bWtdd2tEHb6vKAeECPzCPxcGKdaRCyPb3VgLf9NwZs3PBeACtCiWCAFnVTLWkwxJjx2qenkhXaK3yVeByp3x9An",
  "key6": "5LHV5yaP5vrmcAKvhYrPgLBTe4YwW6DAq67gmnKJFB2pvZ34QRLKTA5H5N3x7mRQ67N5VECTykjGe95Vp4FWytZd",
  "key7": "3onBjYLLLzz1iJTX24C7GJyrriqoqHMWCer8iuNv4pQ4hv8feVfQwjP6nCb75Bg4Ju4QrKHVT3cPjYLv7QcSAtbB",
  "key8": "q1ALwZAV1MCXtizD1CfDPEMbs5yc8jtSdzSJ1gveyKUyKPoH8t4mN43UZG7N37MtwiMFQqwm53chVDp6A9WGM5K",
  "key9": "553Yfn5FRTLE6U1puWi7x89zMYzNmc7ZScNA87WwJbT9FJgYaCkso4HqJsPn2YFZzuaNtAvRzT14hc2CWqgygdDD",
  "key10": "4jfKEUqc2JXYWSDgLPUgpfuYajokkMVouDW6cz6hXhkJaqmTckXNSMXCV6AENPPwe3MyjsdhLCDa8N2mhHCRh9sU",
  "key11": "5hTNcbHzoU2uTnRRiZNECCR5hBM9sCfZ4qUcy7pcYDRQjgXUGEY2WZhhqrAd8CXkDY5iU7xNovSD9sKMF5EKX1Y4",
  "key12": "5HfjDjjpDGGbQMhvMSCeRf8vWZGvxJzJEHAytH1ZX9Xg6RhpsEszeHFBWLuCA5r7jSX7Hc9q3pNqa2MQbt2AamLh",
  "key13": "3EmoVkoUDSrGnXUUpQTmwiALWnVVSgqo5UxiTnFWT1sxJmQm7QGnZKXbEoexcG5dXVoTLMVmzQxejxKWGymjNhY2",
  "key14": "3MP5LH1aBMxTrfbexRPgKTiuJ1yyMe6FFqsBCsKo3bEWhpXvu2vswc3gcF6frMbexYF84Jzjdaoh2NTo5yLDTyYE",
  "key15": "24QKnewrYVyVyDNHQzr7CpvmJYnxKFsKMSF2uPRRw9Givwpn4TkuuNE7AkMqX4EQeJD6bsN19abxH7SBUmmGxcty",
  "key16": "4cjcSgqywD29BXe26Y915ezgY6d9jHzPuoiVnRWCESooz4e6fKeo3h3CSQu8Bn5wsuncU3U49FXA4GKGSFvMyNu8",
  "key17": "32RJGZZ11cEbJoatyWFkYLZBmZRieRt8NFK7UjSqD1Hq7gSU4UnAJJiBMxfYjUW3DZC3hSEbroi8cku8hq9qQK9a",
  "key18": "2BSNeFewPQkxbmpNjgWD7Lq6URocvCuoDmyZUAtFFCFFHFWL4xLkCGrNRKuNi1YEfy2ob81juzmmdoJwBJF9sV4D",
  "key19": "2uFKht5aWfggmkqNXFYpeMDdEpbCqN9S6GaQptgpo9onzBLrrDjUpLKcFM7EjzXfk5W946SfTYc1yMQG5wZ3zGUD",
  "key20": "MVUrvZRm8yCgsJegTfmVdJ2sjAC5SckW4L8kYLpmDXLiUqECgQFkQc5BC55d2WfzPYPYBRMrTM378fGkD8d1o1b",
  "key21": "4uDs3EsHxKeqCB184pbRvSvFrGxgZqVJXuwp816NEoAhS2FNQPC9MJMyDuHud8EyZjXavvqptxY9cpPwLScwuRjf",
  "key22": "22jrV4iAVzc46bzGgDYq974owypp3Wu8JEvjXGCRM4ANWTSyKu9uzReqANyj7TDvWhVfaMkVVyTjTh22DE185F17",
  "key23": "m8gSshBhkaoNnVV1ztdBfhaFmfbHHGqnyRYRrRKNdRAR1eKAG85EcfdG1jy6X3twuQuEs5uLg2xwb6Rbu7HZFx7",
  "key24": "4VFwkvqxFMrQT4Becn3dSBR6ZP6PYR6uXsAx8tYgE8wryYKVeRe5ygEMWVUN4zaucwM2cKQHE69Q116oWX7CBTfu",
  "key25": "58vNVEinVvcVKD1qevC7hBrNPeWuy3TZAV9GVrunQweea3nqPCQgTr9GQvGhRcYSv4etBqWSxKexdM9YY1ibTJDR",
  "key26": "34ARTs9SK7aKN7J57dYrSJT2bYGTzAwYsF2JdWUFRK8QJ1dmvCy7ACkwThu368VaVDioX555PJjRXrCABfZdiJ2B",
  "key27": "2SeidhZVByRTehKkVmfnuZJARDD3pcq7YHYbD5eg1PY49StoHj5nxoXTczWKtFTs3snqqZQSXWcP3Drxqt9f7Lx7",
  "key28": "qbSRcz7h3khcVNcjp5fcoEhQvT1RR9VZFCDEoYJLNqhbkmttpxwDG4EGkem7NXbHnBbaNc25tkC17M67o6u9h1e",
  "key29": "PU3A4XtMoLZ1JSdrMPBS1KUndSz7h1S55Z3YGdLUmEL9QngYyQhonNKgVUQm4FpNtMq5mnnsozuVswiskWY99eC",
  "key30": "2zGJx8pkuUE7VABS2wXdsR9vBBUwQK9bksYAChsL1AHuw7QVsKigpnb8FTQSSQbFr4oJvNbGKv64WaUxPF2A2XD6",
  "key31": "4ngxXzKaogPUn3PzHccafcciHrdd263iettaDbajuCVy7e3fejcuASc71UT18vxnX2PT31sooNbXYQvAfaZNPJXo",
  "key32": "43vS8NYB21jb8AJazFegPRxkwDKZhxqMVXQJC3KfxvxeaSdRV28E8r93csby1Mm3aXZ36v2ctoshmMFiES63ytFb",
  "key33": "2mPTCJ6GjfvbKHLugx2wWvvtrbhknpCGymFd3Ptum7HPFR2Rtfr9K9Rnybg6ez9zcjrT18u5NMoferN4NTM8gF4D",
  "key34": "2hAx48xqsKWFVZd5cMEWzJMRew3EWSPJyhCobTQJNYf6j2KQd61vuwZnVwp37sToc92xBdtgPWmGV6uwJkjxWSRK",
  "key35": "55Rdf5Nxr4RR3T2NQEYBMmMB9sSQStiC9QFXpV8KnvBGN9QHfeYmyVPqKRNFxhWhZSKSwr3E29UmPQYQMcHxcKhe",
  "key36": "37EiwtExuUiaVsrpos6Qi6RxLKtCsBiAMZznckef2yxfaMxzpyK1NJ38g2ka4g1233fLq8MJ6sxm6UKD2H4nXNqa",
  "key37": "3joDyZQ1NamQBJc3xm3fSDps5Vs9GnZSQMQL6fc669Vew5v2dbAEBymg2ExLjGGckyoeobXCb9Ciyk6wGUZiiWZ7",
  "key38": "627Kiqhwk2atmuyMfeMJLHnkqXS7YmAdTcTisxm7KKVHLnyYGxrJnmAJptLox2B6SwWgzAbjB4wNJJo817DAqU6A",
  "key39": "4ybymhqEwrzHBpoUPUZExDK1cLdyNYfCCQFc7q7LkYHUTttpUJrDE3hGiuq9DJatjbiqgy2cFioSH8j2CpvEjZ5g",
  "key40": "2bThSK8Sju4vvNC4eagLLwF3nyEBpFyxeqSaEXtZYWvZYyhs4dXkPzrH9CeNJCoddfsJcFwCcFKG6jsUsFUkC9u",
  "key41": "DA6W4JgGM5mCArJsPLNyahgiCrJ5twTB43urPsWDLPwtUSZJazqf6iDjmaxGcBFnkBcuv7BuxeMiL317RzKTXYR",
  "key42": "24vn4DPyXosBzcSt92AxdBBbjhsgQU2CSpWQx5oW3hyAsz6vikVf1JQ1jZ47zL5QoxEdsKruDZUhUgakwKYmDTf9"
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
