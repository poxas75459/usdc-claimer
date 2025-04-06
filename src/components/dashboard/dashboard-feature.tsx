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
    "285SggNKTnqXoUZYHJ97MMFTQt1cY5XPE9L4E3uyU73dLsicE2WAm3yTx6E51PYYf7S7kNZt8J1vN1n6AUGjXiF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eeZTz2wgcpS9nnCFUny3L66oNsX37PbCB7bJu8aMPE3iexhkqkaVxU8oZe1vdrASiYiCkzHa8iXS1hRC5t8Dt42",
  "key1": "3HdrxaJmQfdDUaDkdxWrqe1ci3A2Um7Nd3H11AJo2cLnkvqfNx9TDapbvZgcFwWcWg6RgVU6j4qpcheQi5dgCSEJ",
  "key2": "2qgMPoxqQoRVjCSibvfN6dUHMtEdvgumzKok7PhkqCthdW6GZZVmpVJmZm1m6rmFje6S1wstD9sCBrPx8V92tZ1G",
  "key3": "5FzXmhgAJvP2EZkD8hxAu4wi6mMfSijKcgx4WdQq8sc35NNgzeCgFN7NFzYFZ4SynVjS6i4fBjH7B5zBZZtFcvM2",
  "key4": "3wm23DRp3Lrd7y5jkswpPN9C2ReM31JWQPFVq3c2ffYScbEPfrqUpUMxoHotHiJjKSd16AKxqKdbLHGRaief5xE1",
  "key5": "5ekMRHWB3ME6WMRJXVWAHN5SiMBAZZXD5sz5QY3waJjvX2xEDPbpuPXrdroM2dp25jAoP1gcKbAmcaAtFi77q6fu",
  "key6": "MxwSXf9evRqVB26Jg9PJ75io3yNqeKJ7fZxST3EfE56kzWcGDYXWoX4gD3yqeGYstiQ57mWw3MEPr8ZsErv8baJ",
  "key7": "5cm16WoaTSmXSKRCyMXBTZKtUtubXh66Ub9g7dfnAXqaZG6KSW6rDiRK9a5gM4TKaRhXskC3eELmHNew31CWm9Fi",
  "key8": "aYP3MJpe6NN2eDkbPXM4ccMjkYFSJo5vkJZUwwmjX9jZT5Phnn4ng79DXsLA8FEk3F6GjBnQtFJ2UPqb1Xtzhsc",
  "key9": "3trATMivBA7aDt6yD8gbnRLE3v2Ngy66AZcmMerSYtk8qYtiMiULAy4bvgJfwZCUw8M4KrcS51Cc6XZr7pjLP9gM",
  "key10": "nQ9jQ7LgTfs5EKM1uyrMUCxBDo6MBB6zZWEhiAgAV9ExHZcygmTHumTX4RFt8AXzk3zgSwQC9RKsXgBjVpBzZeo",
  "key11": "2w1pUKMrxQKnqE3cNyj1y1FpkLNi7sjbh1RAid3AXB2kZYrZQJFPsbJ9Emruj783uFeTWYpRXWNSoe2dmefqrv6q",
  "key12": "eumSyoxRE4uYiBw8wuo2L8m47tJJp9bQPhGHWHFciwgvCsfrqZtzh8vqTGguFi8FRJWVX8G1RP4vgfbY3q9zFtG",
  "key13": "5dsuGPjQZPVnGjE5zVqJfgeRiPJtQQuSKo57AY1PDC7NMYrdp4wn1vTQzBf2dpDKN97o27Yeroffw37W5HYHQnHT",
  "key14": "2pf4gjrPXNqz87xdfQWUv9mQ1ntsSigGPs6QjUUM73vcJLaUwZ6g3xLgTk1hyybZS4VyxSS1UgdbGm68skqPpWAd",
  "key15": "34ATPbP7WkYaAcN55HURT5PCDKzwTwNhh1ZTtwX589mnBRjtP6nzUSsZybL2Ui9sCHxWVFwchH6r9NQ3njBmMm1g",
  "key16": "HiH6QMF64ehwsETNXgy2SxfsUfuAyuB7vnrP1GV6FgdDuDGwBkAiaeg4SJcJBvMqwjA88fmBcMXmut2SZCxEpJX",
  "key17": "3GFtk38SXFHPwA9KJ5hMrZoC8A1JY4D2DqPErJZ4Revox3taMwU6TeFfDvqPst9VWkzZxJT8qDR6HSW9kSiHPS1w",
  "key18": "33qs3NTcDwbfupzJkarPz4HKfKLtWhSzyKfQpiNYdV3c1B83zgqAFAazaA8UuFNPKm2KYVGduCJaamGEUrajoCmA",
  "key19": "5nxPoVgzdGhmCg5PgNrWzYLR7D89EnXw6zrLCPhDWv9Bws1ZgPNXhEbZbb3k9inVSrz4uebaGVWwoK8pLThu2XMg",
  "key20": "3FAsxYUxBB2CNXDAud6XXBBcdGV5bFZwe2dEuivRA3Ns9KMZUXMrqE4vCXtJzo4Pf99M8sYehrN9HTmDxsgCUS4W",
  "key21": "4KHgyqJutStBWaQQC5pVUHyAmwsR2PCfDURRWJhtDhz7GJZmuhdLyyvJ9wwqj5D8xmjPx9mdRrzaeitiKqzVJkCw",
  "key22": "34gRC62ziX5nMxmP8Uss9zeE2qjy6W8Y3n7k2rPHCHSiepnVqEVBVD1PxFqrThSRGmLJHDgiW7tnFZ1HDnVCuhHM",
  "key23": "2sjbeCWyh8nZgnUUHVN3cPGhxUAbLApSZvZ3z5VmWeyd5TWzRkjk3qgNb3kKrdKNoaFh2vcKDyLFo8PgUpR6T5G",
  "key24": "2Nkm3A988fWT5RoxgifTdPBpEKRB9bhPaTAWTenzizViBWacrRKnsfRTn2JzQf6UM9R8NvcLLAH7SWkHX5grpU3D",
  "key25": "YhnaNganjxP3AEaVX1BE1eL8H9o5hGPk5n3MzKB9BafGchK3hrJdiAYLsnY1QjmCsPWEYyEDfYhiJ674LSTQzi7",
  "key26": "4DCPLvtBeBmoHyMNQPgVr3twkZqmZ4PGoKt3ebCA1h7RM7jjAUn3rzD8V6C3DR1BMxNC1YBG4WHMNuv71QRcSuz",
  "key27": "5XXrjhyoNdTeQN6xMVLpw8Jmg8MLh1oTp5KZPRZ7jzLRVVVsUHn9tB9RE2ZoBt8tqctyMLGrMz5DARo4RqC5oMGb",
  "key28": "ZdNMAWkZPHc6ygXDg3MhVPYcp6fd9kzs8C6rTp2ts6EyqyreCnN9ZyAYeU86edjSiRN8V82HDNCRY8HhNYWn8gH",
  "key29": "3bEAguxNfACx8uccVQHz9151mCF7YXiM3nUEgrDKoFv6StiNhNDcfQHM3EGFHZyVDf8ciTubnJcCMaGo3zjuxzvC",
  "key30": "5QUGmf9opUGADAAFtE5PJ8k4ioU2VAaXKTDFzj69sgpWeobRK2STh2dfm9n9M3RjVpKPqmW1zMdyPaYRJogbUig2",
  "key31": "k7zU5mKYUHBtGPk3CYTYrruim61GSGU8yT1waPySX3dCxNG3jEdTY9AHg2LKzzKMu7NQp5H2q7hEg8mD2JAiXFj",
  "key32": "5LsWEoEMCTwuuwrpW2CPERa63JYPrQH8TRkpNEnxtuMvFtU71aHavpSHWcLP3t3s9GAtRj91cjyNNp2jFtLCbva8",
  "key33": "2s4mAqP4BdPrq25unUVj2392PNHGD59Zeo1iDrahFiJrPgqEsGqKj6oU61SYHjNfVxzuTVBVxjNnVNHY92e7mPai",
  "key34": "4AsfZaEUvNNHHf1sHxvP18SqHZUZZAsVBetebKBY7TAVVbgeGZntuv9xtARuURhZKZccFTaYZQNF6JbpKYRDJ9No",
  "key35": "YRHzgJLjMo1AsZiCD3qxnTV6yg4fcSkcYSpUDYsC3uyyRaQWUfAS8QAaBzLk1WwWAdEkEVJnGT61B81uBFXf3kK",
  "key36": "5sxnkFHAH14pGs2kWiHDCyx5HpDzTvvPUr8GgDUgxFkiuYDHEVfUFqnwvrRudfMnnkeroQoZHufNtDf8CCAKj5X",
  "key37": "5XFPUxLAVvgxWZ5ZXoiU2XK9wYsqUdwJCP9RYWs2q2qmeVMHBmXjXBSoxeZbCvjZRS4LjiSaijVZr4U1HZmiTgbk",
  "key38": "4oVbWhwnvv6nNJzwLcubcgGsegGteg1qvy3dFAoSy8HuPNTxuFvyMrLnszczUmjfn5Ba53PE7jEFubXnWUeoUc43",
  "key39": "abo3WQzRX1o5zfjUD8osNhrug19LuGkLkhuJ5bkmPRK6iRYdAiTYbVv8CpzuFhgzh57soYyrzUxmSAGgDmsMczU",
  "key40": "428xXjvngHUcPZEH9V2eRhTUeHnTx9cF9L8YhwVSrVzBjG3yZhfZ5C7rwJbQ9NGJ1cZz1rbT84GNoB1v44qYCHcM",
  "key41": "4htKQzzkVvmGmMtjEeaPSZzDTwF8XKjTGXa6fnkuVxXHUF3BzVwK5wkf9Ns6iJvVdSDYqt8KJ6pRPssuPmTdu5tv",
  "key42": "CZhhV4xMkHN8dySNMou4DnZqT63unnQQNQp8bP15svPq282qf9ff186USWdAermxGddEXiciypkks5FNwEYdPum",
  "key43": "5XufAkHVYVpWvdN9cH8gHufdVSuTJKFqqgtwoD44f68ppbyu7NE1AqxqfL1hPoghpdW9hMGJADDpkcut73BYdbYu",
  "key44": "zXyNaNpJDnBNFRCDUFNs8mMpHq6bZQDPLZNt3ynnpCdWpRYwnXaQuc328YKVo4QVV1uuUnYeUqJfyM3nRZoeWmU"
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
