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
    "4vRLEzFRJ9vB9U3kDyRPAWVot33urrE7aCURiCbxcuYmL4X9op6bVPTG7pyLy7iyqwuoDe1WRgsEGwREnjpEthXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4X1cgjXp6inmziMR9v4L9BzPwW4vdjrBt91iMEU3NjpFsC2aCybPWes1cHNCjnfAFncrN7KwjMXAz8ZSfbtKhC",
  "key1": "rHjh4JMLrQGdUdWAiDxuqfwBmbeGMSX4u5CS6SGQ6abofTF8E9VAthGVyer5UeXoNuiYR1AwY6M4d1c8gH7vA2Y",
  "key2": "4mvP8Uxo3YeMUAcPg3pCfozAW5zFuRA3KDyrAJH3qdqz12M9R6PrfwLsoKcLAN1H155pYfSSDXVpfErdNKkCww9",
  "key3": "MXY7XhGiyfAnyFtRaUkwJdaSzfcNhWVNi56uRbScygdDcriw4iqNnAi9EGGiro8b8BqzaRVWzqVyMAGnuCX8HLn",
  "key4": "tdnyq7sCuGebqGj4cNKLbDJPEEPpv7s3nq5K7REve1hqbSSMQMHUJxSPdXrGvw9pPbjtCmy34scgzAd7vbkkP7s",
  "key5": "th9uZSkzpiqrh27Th1y2jeiJA7gwan3W14F2yNTCaoAoGiHUead8EJLBqUeo7x3hubdsy2ZbaEoTucC9Zmx4Hdb",
  "key6": "2uZkbRdeiFHyZhEMcSSGwjSXYeDZ1ut3V1JZ3p1YyFJWs7pamo5sBp8dHZD8kkD1iTvihwANBUfpvy8h3sUQETkX",
  "key7": "3iHMMk5eskC97vuVJYXYv2rpmuNdXupnLWRGQQGdvHJCP4qx1iPMa35ZVMMEYbgRZUJ7ueKv52tWc1v8NerDZXwt",
  "key8": "5PZP5rZ1ScdSmYt5zzVyGdnneuTjwtooxxic8C9DvgWwkJvuSt7GXL4rAQxqafkqen23Bo1ST99whH1Z7og8asNh",
  "key9": "44n2BMCo4PcaxtWVQ1is96Dudz3s23u5mMCQeUpXZvv86jhqZsFmCpfpe6YhXNdYapL2PX9FtEwWao7siPuYXk1d",
  "key10": "3hFpLynA23n51F2SXj7oEYMtBxJyWfCx89DotfWJBEpAZGQxED3qnUGik1CexvthWKyFEyamtVZQtFN5NL17ea9X",
  "key11": "7ennibYUZaK7Zbo8dB87jnh3PxhCeG6PcPq37ogStvQuVpuJ9Xjm1C4kksGGFBCnQAitdbcDPQ2h1KmUk81q2ya",
  "key12": "42UnQDgejWQpY7d9KHWcWkGGkckr3qbDHTXRJPLiHzz1Xv67aVYECXBVF5RfSixLegiVDX9uKfL8cgqSZmfLLqJS",
  "key13": "3yBuCCcQKvv7JcXrV3kGFKf66XRs5p5TZPkCcFoXX7mLuDnEaRESNabv1F3fEyztVjfSSjjnK3eaq3FhPvEnGLU7",
  "key14": "5SgnFocjN6AYnneLVsxW3WMq1T8NNfuuCP9bFaobhBA2MHjCixsXFMQ5vv2ZSkU3F39x5tmWZU7qDJPHGYDyx6Fs",
  "key15": "4qxkMjUpVwArCNXXndLEjAM9AtWFPcUMTfZaYVvb6NMwceayFwhpxMX2P2SSsawuuhMUcemtPDZiqE9KfPNRwvCC",
  "key16": "shxPtURP4fULqECgsngifq5G8bHd6yAmWHnhoeUGJS2qmU9hXSkv1VQuCLi4aZib2s9wz3pCep2HSkpbp3izNyA",
  "key17": "VZ3QfVrjxo8uA5aJbgGG6PEW2Mdtm3p6kdk9faiQpR8HbiwWRFWGGWcF3DbNhk2BKE8xF5ChapJuHACV23dnBuA",
  "key18": "29LVrkiB9kQGvMNXkqJfYwvywdNGy2R7JnkESUyoD98fstm2VR389skPJzdanRYHpj4wjYWEixg6ZxMyPTWcmsLW",
  "key19": "2MQRAxe2332qQDdtxVmD5UMLgyXmA5ZGMeFHcSb52tYAjv7MoKtf9K4pSMpyfD4bpEk8PkWG3DzhWCCtuQa8uKFP",
  "key20": "2TLBMvNz9bXRdUYbRRpNo447zhWN5NP5NcBweEX1L6UAgJHTwYzN7fHNM2RhujDdrQHTDUpkvox8GMfju5yhQeQc",
  "key21": "5pu1fnzRCvn7F9nFpymG6Mf5CzUsCjLzdMRgvqBLtqNuR35FiLScKybA9qXh8GkDKEuWnnjxCV6Ls6vWCBfRn81d",
  "key22": "2nBEB9k4ZHVad3kH38raZ2fj4GzC93S5eC4gHTZhamxeWd4RAx8QkKWxVvr4dsLBC2M5Rr7AhsChhVVhRoDaDYvQ",
  "key23": "cWWaZanTtnZozdNmchN1V6jP5JnLDy4NKwSac8xQY3RaBYMwfTQYk97E892dd5BD1MKDqxuCYrdvEM35XLHdrvo",
  "key24": "2T71WQrg1hpZot2XH3z3SVUoHThQem8BVnWaWV9iZJ3sAWPmoeXXFXDLV46dyA8ZD2VGSTDtm7zkSBCksugovAqW",
  "key25": "4a2bFmzM4CTRGdh5xCpXyktPzxtCcsuZrxkifa5rNq7gPEqEQk91HX56dB3U9AccTpbn4rED6o2nYVQseifpsV28",
  "key26": "2GeQry81Yni4HrUKvhDDcJumwm8sdkUnmyex1n4BbQKFaaSwNJZV5vwZvUE9SGy3EZixLetYTza4cpBDiew9ZCwQ",
  "key27": "2HcSzMu1bo7pLdNuAqtFw34QGu3wRHCf4J1Beg8p3GgxAfyU6Mwk9SGUL3i7W6SXW6zCLSBkbcaajXsdXcowLyzV",
  "key28": "yjwyaTu5ysGsZC8uXacAbbggTNdBCNdH15FWF4Kxvre3NPJDmeKmTe9P9ZXvHWNPKpP8ELS9UM3iCy2q2JBfi1E",
  "key29": "5DYzf75PJCTb2cCQRij5HLqusgpTg77SNTPmLzx6WrUf1bt7cNTAEzqKS4kKRPv3b4ai8LSfRrW2Wgs5k7rq1AjD",
  "key30": "ebQ9Rr8RmArp6xyKycR7r8vVzUM3QRLiwL1h3APd5wvopK89kZAff7m8CEWESivEPgyeHSzdtR5V6MGhqjbuUhs",
  "key31": "4BkKD8kJZvJ7c63Ako4qVfEbkLaD5P7EoCMe4DZC1WVCptSaLndeuqzAxFj7F9ULiQ44taY62HQ9gFUBzqaXExLk",
  "key32": "TvuqssP8GXAomNkbf6mMG6fZqXWyi4DRdHD5Kcjnqrt2jFKkQCZCbM7PCA1jVtNrrAF6pQd33LZnrKxBX4ckM1N"
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
