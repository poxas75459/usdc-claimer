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
    "4SizHNoQsGnTZon62ListBspfHbm4oQwPGE1MSrT9HiwQ8h61QZqAZfCg7JDPht6V82kAuXVrjoUWCs87fMFJRJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66soQ5KnfvMfHgaDMSFZTjgcyZt39GWK18tw74cxaZhHFpXKg7ZVbWNGuBdznfhJv9TJqzNoUBcbx5etwdzFtxxT",
  "key1": "4LJNLJFiPvzQ4NHye5RJwLqLS79fGyNsFd2sQGjRhuZKQiR4hJbu9wmGvSbo1P9cuRwa6GbRWbfJoBinc1PvQwHf",
  "key2": "2GJgeMwvd7LJogAV7trizBq8g8FEvcKpwDXiC3T25HBqoBLpXTYiyypGuWBfFw4yj4AQ8BASYU4UkiUEtCGB22mL",
  "key3": "5gNate8PZ5zCpG9QJDbQ2phsjrh3jeMjxgtVnQ7nX8CyWBmu17jkajS7L3sBNbcmf9tsxFgrPdAyTEp2epovqXm9",
  "key4": "364UZuvQ76WNjGDsuWuDA1Qo9tzBG5u2Ejd8inUK1j3AsY9KEbTbXDLdFpPpyFX11VS96yu73L6ene8Hx2XUFat3",
  "key5": "6uzoYdnmoPyPoiC5QdnzJKkQpCa3iT2DiRuz5frdQdAB5ipcGaxdZs6vsnS9T1Z9Dw36FLvGUuLn8sbTbvC7Z2a",
  "key6": "2e2dK3xAs2poEfgjyr9JKvcc5xyDh9Gc84GeY2TNAoeMLVi62nHrtiZ7oavPkjdRUkbfXAJQoGNNLgczmL5d7roR",
  "key7": "5iBoySe3K2Z1EzvfM13MySdEXop8XiD99WzigdqPykmc2EVTG1nuve29VDRQDzeUvfyYs64QUTKqroshq7iWh56m",
  "key8": "ko1jhsDou8tHJpBovY29XG94ABs6suyKiUjjMDgg4gFNtLicKt6n14FQRrPfmKxE5TkcJdkMgpSM7dyg5ZLmMhA",
  "key9": "3s7xbSmS1pAdABr17da2oieJm6HVQ1THUAhcteF9HPYuWL2i1eXYfQJkjP8gtvkF8cVwF39BHM7b4dmJoeqmY7JU",
  "key10": "4WwK6QCiam6wfHzoTQEVr38qSMmLcAe2aafRaCw4NbCau5rEupwvSor71y38iwBVAfRv69MPRLqTPo5RbyXUygwM",
  "key11": "42PCELwCSAbkHgQw1Hz3G4GeWAGqqYWMNhYEDYPiQNREiTBRy7Yx9sHJc8s5woGSqjhBhEupgZK9XXz7tMgnsyxp",
  "key12": "4hgVKh2VszxUbzBWBQeAzPLYqBVw2XyWboDetrTaQZVvDzfz7XyYcAAyUHTch3jdyfT2L4BLaTUxC74iUfX5Vpj4",
  "key13": "Y9JL41eiWDvx1EZp3mutBGXpuGgvgPs8NkxG3DXJeoF4MhuySjKR5Co5rYctvZksX6JPfaNjTHy3PajTqBcDfkG",
  "key14": "51TkvHSjSUAq497fQj4efUh722CHixWXMFspm3joRsmMRryFU14mqbGvj6ZhEsvKixJAGYobc1QeK623Nd3ft7ya",
  "key15": "4QfF3jpQTQDS51p1WsNLiWSkPWxFHz1TcBCwuf2wHQ16cFx6im5xzoicPUHP7cNLByW7VfTz27CDhNa2q5Vnfp1Z",
  "key16": "4KaMU8QyccbUaK1PorQFRVbYVYA7EhGjznUYMtQn6gVe92UdAScSSKCTSt3WAQSco4okXnkohZWUMPU1t4JaaEk8",
  "key17": "3TY1NJ4NArFiBy9mnY7kGYD1WsBSCLgrzCBgX5YjNXNgb3uGjZbESv1J6oEMx2GFkH5h4GQN11oJnD26r2kNfhHf",
  "key18": "4tVKjZtMeMQ4DpLjQTBDvXYCQx3EiYRCrHnzJ381DmTUqvrRnSFXAPJ2VwHNrTxFfAgmhuFoWs3BzeCHgCwYR8v7",
  "key19": "8jXVdU4gUEdHwnLjVhWy3RDt75y4kTxq9WyzwmcC243ekiAd8dpSvnf2bxRV3DujMBzoUSv6ogYbusKMmCYzrN3",
  "key20": "2HozPGUfNV3PwR2cbrsgciW1YTn2J3xFEKTSkC89JnFQhY9McSgnwf5iNM97bA1qqgvZhEFmKYem5TuD3tg4B5Wi",
  "key21": "vHp74cboQztqYYmSVbpridnVCd7Esq1vizqUmv7nWFx4C7z1A4iWAAQwAKJuAXdWzhmJhjdHEEjwhdQdQantDHN",
  "key22": "2NLQAsZm8zb9zpQPjER655tvaZrcswedpsZmLicy2LTWc9sXrz2bqCnuDhU7tHNP3MADBnFihU9oqMqFptJmbLKi",
  "key23": "54kiMLHiwzHMPevJr3jqd8z5MAHcLXThG3WzTsorLZa1Kwo6gPWPPJP1xgkR5HDNfHsaGpcomxr6bWYWo1uxPNS3",
  "key24": "4eG6zarZfbNhrzwm2PaJf3rBYdJ4oXGthC2W6aZwi7YvhchKvAjyA1U5sUeWUGkfps8ztER7M4dcYrTsVAbYKuRo",
  "key25": "5rx6RosPasY3bGnrc93Lwpvk5hypAPCGtAk9QuSYPkmxm9g5kLGYnJXYRrgJgnZkByPjwCXseVHHB9frdPNYcvvP",
  "key26": "pe4MHyE4zHX3n4op6AQZtRz22ndgmpM6nAgJkGFTGYDeH2jLtUnqjrjGcNP6MsfXToX83t4HVmRqnHgH3rbUsgm",
  "key27": "2axaymAgpbiSmYjAQM8c63NNpviHkZeD5hCcUNHndioMxMsW5M4MAt66DuQNfXA69MS6zkwZGS8iA8x6EGGJCfrs",
  "key28": "58JLSXCauBpvCo8DQ8nBG1TpMJBLgM2ZJCmny2JXVvAadUUjxCWJPktDFaFZdkoNuXtBJAD9wrvjqRNPkAwXa8DV",
  "key29": "3dChWcDYg4omaww3dKiWx1PeYSsWAtr1XhA571NuVcUr75yqfrsrp2rDAoTr9gzrUrLYeiJSWWUviqaXauwQctSu",
  "key30": "2kTEWRZVsSQnv7Q4qjSuqnNEHb1qFF1f1tFnZfey357YPiNhxxfQfTtFnW2Bvd9dZWExXn92FMRCqZH2JXMNQQ4d",
  "key31": "4K5askT1bjR9sGFTieDByC5PoxnGC7FSP5Bze6d1yhRmRodiDnqYwzTR3omcWV4wvVRwD3n3LhSx6CrXh698vuD4",
  "key32": "5EuTNrw8eJacbXmQR5kGTCyyGFBA1ZUC5VXBZiU7rpV7ytRi7NJxEVWXUKFreZqU6uB6Pvo41qE2BSM1qBBBrno3",
  "key33": "mPdkStTZVH7acoUbAdRGbBMbrLgw7UTdGoRX2hzSpdKgwxpVYVFGyAhr8t5BmzkKhnzqnMFiMqzAyEp2QvBf5Nt",
  "key34": "2Me2yeHwyfJEAR7KmTHea9w1RN7FgvfLHN1R1zzWazzHBYZqvUqDheCxVc4SE2Zp3Uzi8seLy1RGrK6wzCBsZCXe",
  "key35": "58AvuXeHpZPqYVN7imjFy8xbW3y9kF9VbAfAnz4gjF7KcHmkT4fs9NZqezrmbn1tDFhPpvyjN3hpBAUxKmdBYovk",
  "key36": "2dFECtNZzwtpRAeq5DF6uunTkZ7gMjmVHzLTzTcBVNYQevB5TGP1JfqhXSGKn8VxTREwb7FJY1s6yHeuFoXpj2mA"
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
