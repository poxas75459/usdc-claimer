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
    "65FwwrseXHcVHM4VJTpSo3pdHB8LTiATXwFVyuicgBJFFgPMEgRp9tPJn2PyJ9WCcxxc61pSSB4zkUugXqWpBz5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YURFyzi7fNGAUHnR2wWBvHF2g6iu4c7Q47sBs18YEc8xguqHiNCE3ngTKgCvhRnWoAo5Yst6VUjKZN7LTEAou32",
  "key1": "3R3bf2Gxb46iNov3ZWbcajacbrHETc7GuuLhZTahCs8F2SZHQG94Tq1mN3tAbSMXCFc4QZazrwuCWb7UTNs3QiUa",
  "key2": "4KspctauiHdoaNmag9j7JUMxWBYDKZ7ihRytQ4MH36W8WsZuG4GehvS74qC8AKCmeyGcci8EXNWbLR6vPbR3eWeF",
  "key3": "4tFr7L9M6ArUBxQpwTFsWh9VWwDL4CTy5ADKiJz7P4LfT7dd8UevJCiLTSso8BExYNigbU7M5ynEsv3Zxu7SiGUg",
  "key4": "kTyJCrjLo4M3WEmnVVF91mSfpif5Fjhgt9Tots8EXFuZ57SgmJZWBLgw7iAmkBsSN1Kb26PRrnxirn63y3XK91W",
  "key5": "nRCzc74iu745DXZt1dsYehPzEqBJ3Zx3HfzkD5wLvZNWP6EjyfXiSgeNB4s1FazuRFAoQveQtc8WqN23rYird5i",
  "key6": "3V32VijdEurPtRiTeSj6N12tfFJP8Brj6h3vV7VYUCrFA9HCwgFZLRFNXpP9dzKuD19wCx5aVzguZRGjUfKmK19F",
  "key7": "6r5zTMKPanzNStL7wY6RPRiEnoC6GEa62DDnWjzn9eLfQyXrhK2SKa8S5cihKbgqDHj16jRSiRyZuEBpx2ammu2",
  "key8": "2XfbGjbuggTAHd8o2S9JT78wrKSLj4B1CRoEXBB46BskvEbKbWz5YL9XeuSRhWJKG7TmrTcJfNWzibnP1TJh7AL8",
  "key9": "5Qkttg6iGdudyURjfqba62rpQdh5tCa4h2TPg46GWgraUArRFvNpVQn2rVMLBbwejRDREW72rmS6TzotnNhpTuzK",
  "key10": "2gSgTewdczV1MU8GwFGgRGYVRw7jWk82kmG3W5uYk1K4cAa5K4szbWkLW2TZEFAMWDRH1TKbSwf59NNHbtuvdxZM",
  "key11": "5uEPZ6TjwfENczuXqxYXDfK3FfCEpji9VatogK6xc8EKt7sFtZLQJER3t6MrwWLaeTGhELj85bpmoqFtS3Ao14cG",
  "key12": "5YQEKLM3FUxoPvMebgVnjBDSiyZHdXAQUka1tZvP6kxtXBa9ZH7Y6ZkPMXueJmGpJ9PZzU9wk6goeCd4NjJXU7rB",
  "key13": "33VW5k8mrVa2Fp7Hy1RfmrF6EVX4UzXsne84foDsER6PumEETf4Jy7dvgXQowUXa82u7oE3gzu7ShcSGQNFzuqyC",
  "key14": "3qa9YGe8uiPhFmoJSGttEMnKxhgiiYP15TAPpghxp8GTMTa4z9T2NiT2GZC7Nbdo8ALbQ25pGZus8v5rmJo3HuVk",
  "key15": "33MvABaXVaUVAaCPJNYBupiLQfsKtB6FjpoA9x42fGYztHMxgbSwMWTZzSY8JXy3JrTHf5GWUcPXkEWcoFfjBFod",
  "key16": "3ParabUvWr8JVet1wEHiR8s4RnRAHCUvi9QAPjPUfWKuMXj7Zh6S6Wvq9F4LxrdgSvBBux1AMTNd1DvgDa3L34wx",
  "key17": "55QUwFddeBE6UwDdW6HEWwCksBohFacf8n9wtxeY5FSsy1tpViHrKRVT5t5BAkPBa6nqcVGVj3ZjmqV8XYB1VQ3m",
  "key18": "2YFRTWuqb6kVKC5XE8Bqfgwmb4PPHKCizSA3HBQJnXb8VahgjAteCb1RPiF5BPKt7zaZcLShEELvpF4VDLvouuTi",
  "key19": "3Yh5qKWtewmeKdYPhk7tWvbXCHbEvrX7NQdevtMJeMNNYGRunyVBZGqxKbRjsi9mJVvery3fX63AY23HJPmdApHc",
  "key20": "3TakYmrdiEBzotutFt8PwrBxnXC3iDqvcWoG9K14KLDWet9k55aX1gDk4DCN4QVqW7BorArWAnoXzMZWQ6qzbrvY",
  "key21": "51rDVdHkhMQ4Y49PpxMFNmCg6GXh4AHgNiAxPNQejABWv6KEL2cTsa4GYXM5MANXSXHbxs6UthMHoHhEgbvCjjUK",
  "key22": "2ZcgwEo7XjujXMVXAf319vVaAZ2FrvbFmBDQhxkybnti92dQyRopKLUg4tbX5id91tJVgf4uuXhBCaByqM6Yy2aT",
  "key23": "3YUWkQZLJtFq3cQ6sUsD3PuVSGL91xgijzD24UmmiChyQEJPMUqFuxZHFuuRu8VAWKbBU73HSJFUTyGPPidoq7DF",
  "key24": "2UDcHANarm591NhVZnipRQbiLnno38qrb6Uw3FAX3m2Cxn1gek5CyR6P4m6RnHYUNGCe8oAwKqGJqXRuKR11A7XN",
  "key25": "DxTgyWA18m24kW9oN8wjLanQCf8YFY2DrtqoSz8MkaWsdHi7BqwPLNVPqfiqE2aLcrEtmWakgzqcYWAeSMb5Juv",
  "key26": "5EZYJUZG7FbRtR1bqd8B9xfycehuZJYTH5DbThXwRNj1ddSuxrTUiSyPecBewBiDeUhroEHWqiyh7jzyRpjEEs2h",
  "key27": "5yVGSNQ7pSGgSgPSpisdrnUyfAXuvBVK32e1mpWjXuUTrx4Fcug39uetPKiKZQQ6yUu3v3Crunvpgjfovku8Ez4a",
  "key28": "4iugLhZKREBFZi8C4dffKvwoGF8P9qtw1HRaC2JCPPQtg2QqAH1PZCSKvBpQZQUE5YhhXfHyMWFJ3KwgRWBTaLZ6",
  "key29": "558LZ1SiP3NwabzFD4p5SRWay5zAh9upy3DaL79woQpBfnXPZAqYayku1KqDdkhqfwzt9M2uMLuYbiLW74zPRSSX",
  "key30": "2E9xWiTDdrHkJ2kqJaQ6E34J1iWx4PvvbHMyYEcxMySzD57A6oUakVcghmG53UoRZL1x4FATZEDyDzjfDrDXJhRU",
  "key31": "b1kGHqH87AjSmJcxcoVgtA4iZUBqG7ESEwoPa2GQBhvTasXefJopKDKBbS9uR5JVKRFTjMwm5AJ72GQtULkAQPd",
  "key32": "3wqXgiiq24SBDJsxXBNFq2pXzrSzaN5DdJfZoxh7MXBpYH1XFoSRBGoBbS1C9tZMfKe4QoFhyxQ8Uy5CLMACJoRa",
  "key33": "4gBM2fKz3Rv5eHHuzWAZKyVHhiYh92dszPdhpcZyFqGZNc1cNfTsRscT1TPAS32RfSCpfFYoVdBdqTzV2C12E81B",
  "key34": "3RRUxus85EvTwXnz4DxcKitUGEH4eMzqX9zxxjDqcBaZebEiE88S8PWG7q2mNj3FPauDrRK4UbRPNXNpBV6Ea3S2",
  "key35": "4S7wmJYJUsTA1G6s7fqtSNAdSbije59EsiFdg9P1AWSeDpZ8BmkYwQKKoT5AhEUw3qDxBCHD56LkJjfKoLuJoQEq",
  "key36": "P9sJaDQXv9qSZxEebyE8VZdX2GvM8nB7R9xdtGpixw8a21ka3FMEPvsUmD8k3Fvq3ieRTXzJDyof8CezuquUNoM",
  "key37": "2fzLxyu23i4Zif5dug81dQgLVc3xFPQ8c2z6rfspsamKVLFkfkDQ2nvmQPi5DZ3gbPSChfEHwHyeW8947vvouaqX",
  "key38": "2J6KzKFQnM3ZYvMpnr1zu7YZMq4Vwv69ftDgeT1U78wenwtjSNzNvwgFTztZRZZaZD7P2V7KVtupJbisAtKjaZjf",
  "key39": "2Hza2sM7oc3eB7KDNRdUNTZTVMMsi7WHG1T4ngP3Ei1javWybkkfiA6hk3p6WrW61qaUWp52shEXnyHeHNe6yDsL",
  "key40": "5MDh5QoMtrR3B9dteY9KEN9FvwLx1xzVTgX1owtBy2hRxzgCMsi6jysgz3boN3CzqvhACAMHYShmaKb95ZDq8cbV",
  "key41": "wRfg53R2BtkUCxNUhTfiY2rCGYot45QnosZBsAzB5yDcPZYNykV3WRc2JogWRKYV3WStkFRzoDocTyomFJYDF2v",
  "key42": "5eZmenbu9EQv7jBR6iNZQoSC3DoyUSc6VLFtvEd8RedVpSVrG7LFJXQwz5wGHMY6x5GyG5yj5A9Ha13uLavKku8a"
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
