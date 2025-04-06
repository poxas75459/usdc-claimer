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
    "4paTNhLq7C9LNmzyLJFNZAbPmeuWtU3aSCUzgSnHv6ceF4o8MsbZZVXbTc4zadKKk9b1L1dmvt6ZpoTh4EttSfrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbKYMkh387ACbYdpCCHFJSj7dMzDvVRrmFbUz3VArnq54VxgzNjo5qexvGBhWQKYq3qbamHkTf6ytXd3JddvQee",
  "key1": "5LqaCDfKbcJDfnQux5kdVhmgK4o3dFgNxNKAfgufu6RSvBk3dXHRnpEra3Urmqxq1pThqpVzhD6qoZoKNNfkZVhP",
  "key2": "3Uu4EEqBGiuBQvKAbuVTymCcHQzn46vrDrUQty3hBYbAW6z8nYc5gWSWg9JDX9rsZMbHir22d5R3Bz27HcdmUPYA",
  "key3": "2KtVdfJxUPnbgqhEtPiSVHzZP8RHWrhyGw36uXtfqWckN2U5EZT8Yp9U1oaX2AmyGsWMSfT7JQGpQnBkV76xPtM6",
  "key4": "58rjcVqQUrw9CinYz3soe7XUR1fUJbgfCNyGyBsnPoEgFcnPzxsTcg4z8U9SmPArpUSMoRPXiAB4nZRwAYMo8zV6",
  "key5": "5WeQN6Qt4m9QkRD9NCeoXVvBmLL9wV7aYAhNc3JdHRBoaGGdC66P9CaJYVnFyLsL9SjuMYSCvY47QWDJhXQbRTPm",
  "key6": "3cJzHX4TXssn12JvbfPdgRuXt8WT7ud12GYevgQKyrZAoMd89mZj8PU4CT73CX79L9FT5BD2kn2sVaccMFYbgr27",
  "key7": "2R7YCeBwAvv1ExvoFtLjGFYFEKnFK5K6VNkRa5zsf4kLdHrZVD2SEuv3tAGwENU9WTJrHyPiji5qCrD58G1McT87",
  "key8": "4Z32RTfuwfYqbL3dEdGJZzAt6wwK9dnAEEk83aQMZwmWKbpppxAsgzz7C84oGPGKiS3A2gkK3ZeD1riX9hxsuY6P",
  "key9": "Am3upV3tvYZqq6xJkrHo3SqSBCJKdFry9WeRGiT4aVwDrM2964Vp18bsNfuiziVs1iN16DtiDxYLtYc9xejFWJF",
  "key10": "39uokk64Vtzm3R7MSQi6uuThMJeY7tSPgDDTmY8LYNuFyvPTNfcPSw7PgxfSPZ2GJ8TypzChzYvdTnkpyUMumWXB",
  "key11": "2aWviSxKGPTPaVCWfbQ3mbyGU84Twihbz2FeiQR9Ufn35x2Jkjd65mmN6vNWWWvogwRcT5rdanrFVDrZBwJQE5L6",
  "key12": "5uDQVtFSXBqEAVVaQx5Pb3FmiFEdGQvYwpPbC8yfKamoAiGPZrAQMuERdZgv42MQGx9apxodKGGerP95UvdLDo5n",
  "key13": "362CfJMBSwFPym7w2D5cWAuh2uQKRowEMQFZGZoKmbvi3MrmFcowvJRuYF8JoDxApeZNsSYNvjUQY4J2A9o9WtmQ",
  "key14": "5tRiJPT2JZrou1Cb5f9axg7ocByv7MyQY9aQ2Hzefmw69MMfr6SFcbYdurUiyAtKvKGPw7VvvJuPh9qfzLDEaeGc",
  "key15": "3S6h19KLvPoYbVbEB8nNVt5q3EtSBKh8pzskEURrxtUmHXavmaWqS8UZ7dBjtywfB5bHyp96NbSHWoGxwX9oifXL",
  "key16": "4mXKWxXtY8TgeYaNHq8Ss1kJSsAfzdJKPej4PvuEj62GxKaih5jUKZtayAByJN4KiLpK5q2uMgNEsXCPa3TLhTxz",
  "key17": "4CFbJu5WVGWcJz3WwcZxhjLPTYiVbFFp7vyuStjDvPnf2q82QJFD2MdVEx2Hh9w4XTspPhgp98L9qmvJhmq1J6Z1",
  "key18": "2xW53jDz6vGTQLQGY24bd3hW6U5zxrWZfuSjxJ19x8yiuqqb5YV6bvgfz9qrjfoDaRJ72LACajYnxm2wWnDGgLV5",
  "key19": "4uZio5x6YM2xcAp2Mx8DLigDEtJwNeYHnDQ3C8PGjWE2qUakHQ3Ds5462uuEs8K3SNJsfjg6UZZhGWtwfCXQRQ6p",
  "key20": "4WRnSkQY9gEFASC47ASrn2y5LFHqX1tpg4DyWENNKr6k3KmPR4ctRFg7uVxyRTXvbYmM7ge13Mi6xULYLDMLkzrc",
  "key21": "oDrMr44vSpdVZnWFL27sTvMaajx26W6HMMb2SaZsK1breSKRWP7BoGdCMSNyCPYhsnga28ZvQJzCAbE5d8gw1JH",
  "key22": "2bktpQGSGCN59X8E2SqxLb9owFFvJxnSMgh6vmpYYsfN9vooZYhCbWXwcgVSX5aZmQupAC11c9HcqDkzmZtKfCCC",
  "key23": "3cvYyybGoyScXaAC3L4yS4QMAYimBKPqydF3w9cpuoQXYMAJNdAW5PWJVBfopfD6UfaTarEXCvB9UsSiBopqQGXv",
  "key24": "1odz43ZQGLBW5MCgPkvKXAmyqh4iYAmDuWS3e9U4WxSVosgDbj2t1HRuikurRSsWc8cwXtWKzaztXrqHo6ZCMcs",
  "key25": "63Ts63NJ5gHmT3zrjniSFoZAV2V84DNnYZHn8wEyDdgzR4ZDXn9pzcb2xgCKVJwJn6MLyoTW6gFrd4BGN2JTNBRd",
  "key26": "2K6TNPyRZ7aBomm2HgKX8rP5SnYQX4JX33ifffUw4f2WfU7oMZuYAnWp29YubaDn1EzgYmqUCAi3HD1MNveDeFRk",
  "key27": "2fHBzZEqadf6zN71DeEL6ZtPSzd73jZG7B8Qpu3W1dWGz2Pu1u92gp1Q5Khrwnt9rGNAE1vAMSGtfKmHW3YJ15mg",
  "key28": "3wSzoP3NJfDuj47pU4bnCkwxXxEM3aMj7Hy8FF36X7o8H4JZKpYsTNgAy9YEGWgsrWLuzxcorPv9taE28K2vjanz",
  "key29": "A8yqmWuhrbaEKHSZECM3k2K9Ji15feh2E7gUEV8SbMUmXdjNsmQotGHfwTzVRptJU3DFcAFB4u18WifNMPDyntC",
  "key30": "4tptPqPLW4mSmSauLzqU4ydzpsKmgE9LDsr1hwD8hGZ8tocAgmxV9jDE7yhavp5NTFHHWPCXArdxb1T1ntSgzQzH",
  "key31": "5iXTugoRVnGvpqKoyVyZ6UuJgALSmgPHkWTUMNr6UpnPEChPkbJWcpFQWGK42ZpSKhJPWU9x9wAmipqkdo1tKdiG",
  "key32": "55XXMZsXq4hPHFMsBvNVB32NEBgspMSdGZPe7m39iB65DLSJYmbKpqXi88JANnbsfBEVbyx9M2SySTR7RHWvgDxa",
  "key33": "2RcEzbGE2oTgQKd23y7GiUqmb1JvkxyGoQVwLsQQLwPN7VYwFdaHT2M39ArhDQ1pQX6HFe3GMtPYBuVf6bSoSLyE",
  "key34": "XMHqto4ZFFcyR9rKNTbywSJ3imrH4rqmC8rgsV8mRiMAfqhy3aKAC9X9zpj8BHWoFvKi1SBR6B6zCA1jVXEnS94",
  "key35": "pW8PrHMzPL8WYNqcoM95J77jg7fGkjwrDFuCWPVz8xdTfvd3ophhavFeErZ476NeLN7cZYrQfgUCco6CqWVND2g",
  "key36": "5DbHENj36EXoaVkVnHbLLd7oCYgtTNKta7P9LxYA4DBMiFGWPUSfgTiJDsVqA3dQA5kvmnGnTkUYM3BGAg5UWtt9",
  "key37": "26RELKTxoMDcb3ErwJpwmT9RLiFPY8pXK188ceh1u3MhtX5jyuz9biQGhFrM44mJaaP87nG4TPfkZg5EurK9E9tC",
  "key38": "2npfCnj2NtWpuUC75gSPHTmvBfuwZUsAjB7v6fR2EZq5hiaFcNzvSpB3iZfzuTEQsgQtTSszpsvvCQzvKAZAho5V",
  "key39": "64GyHckTPeP9rPHA372641agKvwJyE2Vz4Ne3KH9suEp5GSeLpRWpi9syh1hrSZJs5nkyBZaPKzdfDxgrdsYGHFd",
  "key40": "5HiPyVxoZTXKqYJK9ntTkMsJHkZzoW6YSbARzVnXCxc7uqS3aGpzsYn8LcdemKHHtWMYX9HriDCVtekKTkfYyphv",
  "key41": "4W1kbvpGmJGyvRgTZX8iEiygPsnFCM1XVsyesWtBSKnAFiyYSaBbNM7SKAkrnh1ETARsftKwKAPKT6S6RxGdsRDJ",
  "key42": "341sLxiTSHAZYLVmejt7JWadqkreys2Sr1aS4nge1VmhMfMgwEP2gRmvy3Ur3CBkrRxEyRQWfkvNdh9jwji8aFgN",
  "key43": "5tMBT4y1PN8D4S2rn5odSfETjbRryopoqwZ2FNGR2ANAvhpNZkESCMt9JRgn8TJT5KrY8tHjcScSjc69XwaGaP3k",
  "key44": "4AEPgxMe21o3Ldxh46s3dEHaZ2tm9xiuzq3Z93AYbEVSu5gN1z4T4gqxhkFpyr1KDXzYP4KuEyxZU51VjuvT9z7D",
  "key45": "5FUSbF5AHKSedA2EuPuvx7B7sJDH9JWhnu4ERKbupFDyF9A9e5DjWP2vnievRL5XzjFurjTEgmzuGGbE5frEwjCJ",
  "key46": "2VwnT1kqtQswGBKqgmuxkCqSx1xVDfPN7zeaegrtn2GxqRRW7aBVa2nWhBvF2BMHjxQXhPTya99FauALVDSLua7C",
  "key47": "4kLGYK7BtciBubsdmgCKE7Euyhc1QsfnHRZg9Wt3KY5hq7MXrHD6WRvLxLXpa7y3Goc6ma311oKS6BM1BNehnftg",
  "key48": "3nAKyW94e8dakgahM3nDE9HnVcdcm4aJe7BpAFYhXcpBhH4688So1rzqYFiLT61wrxjyMxWF2e3VP5i2hK5YnRs5"
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
