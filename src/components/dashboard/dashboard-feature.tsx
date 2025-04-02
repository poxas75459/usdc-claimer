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
    "3Ttmq1x7C7hQU8pnfuFFzC4Cr3nanSgFuugNhV5Hpgnp4RHbKwGEPBdL7gpGoutSCEyPWimbbsQ13NVT46KJ9SGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcamqfwvK7McGUfYVSF8VLnwWY2zJGsvG232BHLkx36EPPREvPpWcvaCE2gZPJKokrcXe1sQ4WtnimM93AfLKJE",
  "key1": "3Hj7oj8o8D32Dkc8W5ppuRfo9XLUieBRRhWhVFZvYZUF47BfEPybn7Yfd4sAZkJQ3x7CqEB4nn3vGQ1z7YoSkHE",
  "key2": "2efuYwoUUS4wkp1UNfG6FPNM6dfwJUQRuRUPjiG5BcBG99WHMjJsrGPM7RLQbTiq37x6WAkrssjaXCmi98rFeiN6",
  "key3": "4541xeJbrL6MAq1L7w7M8DGAiHzHNVTcBwdMkjPqgq3VVYfUZ9H6sYTiyQE5GFyM7j56UpzGMF5G8q547RhR41ix",
  "key4": "3MV79XJTjPKXDPHvnf3exiWB2wXWmhB7fLRnmuf265Wzauycr4nMPJBDzENA8w7VmqqqZdnzotptZWVyMpwU9jsR",
  "key5": "3nqwNCW8LMSA6TNSiWUphiJZQ82Gi83oV3CSE3S5cuAMoSYCDZR2BWT4XsLcSbuieAe2QRfFfoW2V3SqprEPXnkB",
  "key6": "2Xr3kwcnqBuwADWABFUzGq7yHMFrsXKeCDKTZAqgdpcMYxMr8iJwtEVb5t8NdRxC6EJGDSsyoeArMsfAHAQt7qt4",
  "key7": "2mHde4h3i1DSKi5SagWZFhyii33S7XEiAmE44wqYXYC5j5Gwek5fwvGxJCy44qoZBWTyQiTZhwkazy1Wvt88rxg7",
  "key8": "5ndMYzALr415Btk4te4J3GYe4QH8A7SWrLKzSvRbzVcK9an1x1sv5S8pU61JzYnY7q1eRWzRkGzTt2TquaiKCiJK",
  "key9": "MgiiEN3Ke8ri7MtVMUcpJ4muxXUGdiUZXDzatLwyVS4dBSKuSDbY381f6RUH89bTDLrXJFSpwSQ3fJXubodPped",
  "key10": "5K1JJdVdrAHnBHc821dczNzbLAW8uUPKxKwHqM4VPFncfCkqLoV9URGSBj4NhzvqB6LJhYAsVBrEv6q2B4XsUkD",
  "key11": "5KfpakTTD1VXnHARd93oKioku5cdvUQGjb5g5MFNfvMBYaddEreDiPDoMuyFZURrST6oA4NFtC5qTKAjQvw3vJUH",
  "key12": "4397SdxLpXxGWmh45G1UgHiYzYLNEttECuZ41ZxxAvy3zxZgGyBKxgz2YQz3zvJ7WDfErb21p8uJ9oPGjzEwNGZJ",
  "key13": "3G4YrmvAge9y5Y6NzAM61ZogES6DQHX3EVk7aYCKuUJzuubwhMFpMEiZWfNt9bTeDsPmDFfpt8ipv6wQrTecrJJr",
  "key14": "2h5wYcin4cJbJoGPXQVA7eqq3uhRN2GfEHApQGyuGLvVCFFEkDsTFSMdLH193h3FKGsouDRt9yCLfNb8iqy1Sj4i",
  "key15": "4CPpCCr4vq5qrtUmYPHfSk2vZkk6bJKQCx5DjVpopukAS7LC2MmeZYbwPjCY4qX8zrBFjh5HvFiAgK9rZKQBJg1w",
  "key16": "5BuizdacELqQ5yVDkgHf7c5Li3bvMxg7jd9fT2VRYMBzCatT31KdrhS22ok7fBDYZDBoMyPZro4TtF17zwp62bZJ",
  "key17": "5QeDyEdBZ2yo4BDEsNTNMAsjKWdwTcqXhfExZ9MfsSaqfu1MyZHpZasBDPh9o58gwKn8ebMnWeiUtNM5p5P7ziqq",
  "key18": "2Nbfpr5Xm9srVUxDQc94RSL8BbMUHvurCCtJKf1qu8z5AF2qGymWFZqE2JReQ1DCwWyk6XJoaHpVBqs9h2reN9Vy",
  "key19": "YkK4453BmLu2Ynz2tSK8iXmYqPmHrAHqtnmCuhJeFu18AUkHe9LicBMMdcLqzVyTRTkC5dWJ36gTs66ZiyVJx5b",
  "key20": "2frRuKsQyCdPNvCqfo8erfUUYAExLJZHDtgFTfDBrM6zyTXsGuaEgDQfvQCcupy1qHMoUAWn7SAz6LLAw9ErVLnt",
  "key21": "2kQnCKaGLtH4GVX2RM8VR2neRZq4pPv2rHd34CpEEhaLkrAHjJuJCrep9dLknVRSM5WdTsjN1a49gC1ZDhhLzsKH",
  "key22": "3vdLsKdcMgzk1FfsYQH8cRpN8ks13pWB6R2HgzRVmy51N7k2E1L7N3pFByfJ4FTm2JPDRNfzVbVQv6gfqWNrLJhu",
  "key23": "3GEEbBM36ZFg6mbmLY7wZdRzTGnrFsWtRWy2kCjpDmQjVqKim2TpprsKVgVvvZHhkAviDS9JFxe3X7Suggo2Eikd",
  "key24": "Hj2bVD66GDS6EimWNPKntcfJUYGmZzbpJb2jBw7YY9zLN1iJV7P4UdjxeyTZq2jzkVSa75L2UkKtveKqkiVFdz3",
  "key25": "2xojcTYZ7zdouTYGPBsFbSH4i48SNHvru13fD4M62FcLbycrW9RsRarx4JPe2rhn3cbdw9pgDY1Ku1Vj1Xhusst7",
  "key26": "5yPZgM5HgbxiYS6n4WTt41kQSCnLANECJkQiqsVdLfx6NzfJZPw8tYisYpJ5UxzX6pzi68pvcgv9eLwomvqb2Vg9",
  "key27": "3aprjPUxT1fBMpQKjG16ndBGCmxgvAB3i12CdWCTa1T68uamQbPTYQpf42utWquy3ZSrrnT2GvLoWZdVp9vv6Kuy",
  "key28": "38sTifR8y8vdotkK2shwrn8rZqncP7GuztUq6Wf1LCcYMYpyKZ31T7Y4GrthinAvLc7nTqzTYut5QsYQDJ6UskQ4",
  "key29": "PMez5HrBCGPS72zGt1kBWt2SMFo3EHkjU7iMCAiEDd68qygxGCVcuM5mC2diL9sLUQQ62MjPYwoUHgEHqEUqSW5",
  "key30": "38GujTMCnAFYYWFqZ36ERjWhExsyQNJLeJ4vFMuXR33BrAGGMSSmUAFFYbNQHJLqYm3z5bKbQxhFZwjcFudunM7K",
  "key31": "4DqmzF744zmvsWEi7GNXsJxevDKVTAvqVVCnfRDS43o7wywHKCHo77aMPCM9Rd3cvxWMaieTMkqB6fxrSN75iTAa",
  "key32": "5ZCDBL7ozr7rK67i3tYzXeWFQGWyD9HQtmncMQSQDYy9VfRwBmXmmBQyNWh948uHhjxGaAfytPDsF12CrKhyLStM",
  "key33": "3S4fSGZzuEtahp6wWViYQkJPfyK91V56hkeyEPaKbC3Tg84dufJegUBiaFMGv7bv2jE18MBwjTXJgnzJap3RsTzd",
  "key34": "5KVU8Xy5QAgoYRQLmAYorBs7iE3Mr1rLytSGgXsovd9oM76TPheZBP3uZ1MDSfquaKAV72PM4rEcSR2YKFtEwzPo",
  "key35": "2Huwuo4Ky1owgt4T4wvETETj3VsvKwbyyqXdazCVJ2zzaUFpwtY5BNo3ccvFkHVqk5NQbxHTwGGkZvDbQ1JAR8vi",
  "key36": "5pYjx1XRydkq51Z7GYSbxEfvjuxr6hFHKZGFW9er6XjodV3quyU1vcGFAPXtRN2qjT86AgC2GsxVihAJ5uXNtF65",
  "key37": "3r3ShiXvvn9tq7Dv1AE4Vfn6WVWRLi9UkahLAciqEYrQdWKvDeRxHGDq357iZY9WCEnX73tFXjGJGCsaxQv7tjpS",
  "key38": "5TLKM5SJSQnkUZU4gRAsDcY3mroskDadV7Cf8EzTHbJ8qe5Dpwu956NmcJiSygMBwkPrU7p2UumUG5woLocibcQ4"
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
