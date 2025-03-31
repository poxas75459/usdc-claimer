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
    "Moz41AMjHXeH3cYGgbJJ5iiS9Wmq67QjFXAjUTDsutefm8ZvzHHRDmpVDJ4jnB1ATmr6gK4WCSuvZKEFLaKQ8eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qKcSRZqEk1QeiCCWZqsf4kjoQ7YDFudawSK5SPm3UFiMuLmQfk1gzcfYyk8sbGN1fYk7JJF654EMXX1yVcJCDGF",
  "key1": "5nGbCuDWWCf6xp3mJ5Ca7F6Hb7Kzmez77AMH3BteL6DiMxE4uZ7ZnMVqsZrhtiHqjJM37MyZuiKDwLwqNENiP6TA",
  "key2": "4SxLBGaK8zXJDPzsPVKUjkCiQ4Pe88TXuNcwwdGGotzE75QKehWx6KxKdN32wK6odXRtUW85uDpjrCjbTXisdPgy",
  "key3": "2296eFHASPKLx3LKHNqv5Xnn7Pu49qWXMf1SqFYPjvpXX64QGfuH5nVHHdqZgm8Q5k2ZfgA6yHLDXAtYWZdYMgXd",
  "key4": "2t4KMkL2ErAJ8oanf2sZjiFyHY6WxRwV9CEp552fLQJ4pm9bZThkN1LrkM5fBECprdikmy6UrerUzehZMqzdcour",
  "key5": "3oXWUiYQNL3vewB1k25SQQuULQTnDtqx7rz3jEEtGKuCQhZDk4J8TH4ddNH2f8XUCoJDMN9jzU9qe2ddGnoMX4Ur",
  "key6": "vJBu9L2EHiZucucVJZJhBL8TYHW4c66kL7poExsnj1BvJbN9nvU7djR8Cco5tSmzErb2uaAEYDRXMPJrreQrB6r",
  "key7": "5drrpmsEFLGeE5QvHfuYfhGwt3Pkk2AdRYpNi3JfKHEBBSRojXy6kKq8B8kQj2AHFxcqAQTdsejz3jmtg4P3kHdN",
  "key8": "n4xoJn4B18jGCvX6uZHD12tPTjswpeC7N4r4uY38byt4fAR12v4C3on2xwshSjDbuh3BVFcGPsETDt1gNg7tA2t",
  "key9": "51ZTgh6XXqhHAfBvP8KsjvnduBmtvkzfpyfK8viC6YUiRAxp7h6niZNc25c2a9dDtUdc4vBynLME5QYmQwdgTTsw",
  "key10": "5W3ZS7rwBebTKYfLgLFX1SvtdiGxhK4Gy856PLJvE66Q5iHuQ1W9X9o3xGK7XX1mBehje2H5M27er6NzM4wEXem1",
  "key11": "3vJJuo95CYt5LS8svqSBoBYTbanmBgRsqx4KdUMJJgrF4C2xR3ej1FLTVmiV3tmtJQ9fHuyCm52YxVRHymRXrz5h",
  "key12": "67C38orw7PBk7aeXPcQpyQVjf86qVwwnzKzBBbdckmfoifuZ8Ed9WDYdijJbJoWL6ryhUtf9ATRLJsGnBao91SGr",
  "key13": "21oUav2uZSw13XT9FmuHjVezxpKDvsAWkLrt43xxvVsXdRAAb6jQf76JFnDPsa6y6hY9tymyBA6iUeQP3vVjxzbt",
  "key14": "3D9r8e6YNEvcJHiLdQ5meBtbQB6ZXdLNK1smgKEpBwnHFpmQr78pfrr3NgVAYDrwAgJHgfsfX5szeVspZH4q2g1G",
  "key15": "4dbv2as9yFZx3VGFiPpZndx9gHs2QGb9FmVYdoTEiSenhy1CmXP4BqbqEVLKa6Zhcw2PqmtoqPGLh1n9ncdEC6xR",
  "key16": "2M9iGEgdnTHL4uLt77RkegPBPU1wok4msswj7C1WaFn37QD9sVQfyxwM5faKHwerDW7TCtuqDc5SKcm32zAJTyxE",
  "key17": "4NnSprBs4HVmdxCx5uZPEfAM1zmqoo8pyCZotjM7w2DbKftVuCWM9HMGrxRqezdAKJGDUsmzQ6Yu7Zo9fybDN9U7",
  "key18": "64bfftp6TEKVWSnsKN5x5jVaQgZaXdwKbUHcjPqdVyPHHYUVBjaX9deMWwr4zmjvpVMeNQsfkK3pdEJtJFhhLRio",
  "key19": "21fvvvEXmjPhkrmMuSWTu8WFnkLKzXaZvCNNMret1VZNzeLwNpGhNQAfaveeeNWdQ7Lyy7qW69yQyCfBANxxDnTx",
  "key20": "4irhLzQoaTD3w9c3h6BQW2VTsfHfoQDbYrpGmB7uuzaHb9zVixKFVhWvvxYjzgnz83DRnjREiW5kpqXFLz4aAKni",
  "key21": "3RYmeGAXhoaa7gJZwdtkrGZvmkyKHqBY64jjnL3cR237J4Ddo56SjfvcZ2fSkLs6b7CY78gTRisNSVBzLYqQYyjG",
  "key22": "XAB4EQGYjRLrrkkrVtTxHaJrTkckw8op3B5kacsggft39RGCDsc4i3fvmBSEqSRVMDE5Y2eeWTYozURo7oncNNG",
  "key23": "ZUSs8FWzBnxYJsy8axhpgajYZ1AKjPzPnRfM2bnZHT28A5qftGCaxo2LrvYSsgCDqf5Qa8BU8ULnep99pzfsZMS",
  "key24": "4yjgXJWbVYRw4xycfJaQ2SH3jMKYyLxMriCJijFNscajQynDJZQmAvnjzT71L1ZXTSPLz8j2foxYWY5BERe29jBQ",
  "key25": "2Q3Yj2pA7TGUJjhAuTjRWGk1UeSEfFUihxZreTBkZtmURePVNRWFTonT8rsHgPxsXDGHrNxW6nhdDFSVzUFwJQSz",
  "key26": "2MgUCkbN83x59EhFCEhkBtJNyKBLktH9b8f8aKS1xjc7RNaMfr3F7SEBsaPvoLrackcuBzdBS5Te5UNHEuW1prDU",
  "key27": "5yJRatawZUp95ymJYNjYw5xxtFDK1W414QjG4a7V5d26U43QeqWQ7gbtZ1NQ9UhVzjJhErUx1wV9u37eEvzqAjsV",
  "key28": "5dZuXv6G9cqXX1LLmZeP1y45ooAVNXBXAV6hFi2dBSQ6ZGHeJZHcjViyXfN7uhqHUdGCbgvwzWMaiPvTT4HAFksV",
  "key29": "3T4tuwF6GzYfxGuVmEtSRLTZAAVfK6Y1ECUBg8AYuPesTVKujjCLb2fVBwpktUBgyxTA5ok8brNnRhkF3Mq8jZtH",
  "key30": "5v1PE1ZnLuwQvvpkkYKG1hLQkhapKkELMdBtWinqMNFQuvgxZEWBu38TFJUNqAn4htD8P76MJoo8xou7ePx7Lqkt",
  "key31": "3fgHD4vLn5DHMyAKmN49id9BCuhPtPH6Ci6wWPXK4KDoXzVo9i28xuJDvRvHGbe4TiDuY3Coth4ptxSAvPnKYyUu",
  "key32": "4h8BEq2eWNj6EtBKjUUdtj7ZbRqMEVcsYHW4tA5yTTLH63zZNBp21WDEpoVwjPUABSL8GZAK88Tfz9UfSrLEPHqH",
  "key33": "254xBt8sBuFMeLwXzKkwWT6RaBvsVyxfp6fVTWhM4aKMHhVSuBVidHb8mWRX87fmR815vyjZmQFUiMeKbxv6iQvi",
  "key34": "3oSGP8VXNvP9p1pVqjMmL1LHGdcr9WFjozExSXyaT7bE6HHsHdpCmMZsdBSMvi557JC7ZHNBzfbvhUhFaEWNtEVT",
  "key35": "2bAXn6icHAtfer1sD885Md8nTpyVWbYfjgDMGXkRZn8sDepkr1FFoBN2yqk9VF7UcY5CSFM4My8bZuCC7cpau2MS",
  "key36": "399cANCodvAW1HvSu6Qde4ZaBxZ9iEGq94ev7ii8x8X8eozUpB4r9LpsExNfTbUCGXzERiZWSUEtFd5xDNX89xMY",
  "key37": "31qYUuabM2bsZZ6qAMHMMDWCrVGWneLHoPpnTaUquzpd3MBfCLcFnDUyLdx3R9Rq9ZmpVXbKHUZzGbR6nTSPt4bB",
  "key38": "3QuxMwHGx4v2AKu7P1GAVk3yE9JFYFe9huV7zVa54LvPZ1exewzxkkWUvwaBWnsPDS1cDTsHJJ6aiJ9Pfd4KeTYy",
  "key39": "5pF4NBzzBixpnvrFH3SAW6FkPK5qo53L87HT1EUFK3TuntpD8soovYuxYzpZDQ6LWhcHtiq6BEjC8tSibPWfYuFH",
  "key40": "4ccDh29xZyTcfVwE6rerbVnWNktciykXGequ3CJVhW6cJRBrAJnKP3jpyHCBAPWDPmXfmqebcdS9xmM7nn316cRP",
  "key41": "2Q689nNsG3FoVUsNL79cKUQfSaj9agqbta1oCcqGDcsYoJL49H9JTUfxuxkHeQ1ff1x9HQ36bdp56FvtDrUiE7w3",
  "key42": "5NtWGkL11FbBhXv8vkDMUGX1Uw3xbN3ai2z7SyShY3UDvQEdW917v44qDqA2GWpsK97fSXgNQN2LScVjrLzNqfxN",
  "key43": "eFTYLfFuCrthYUWrBE5m38n494oyENCLmrWdDD8bL4jjNziT1i7zAsMPdYc2akJ89SqQy4UDFguaVaW8uW2J4vV",
  "key44": "3pa5G7VBWbF8c8aV64wtzdMicSn47H6kfkyp5m661Ad3xCXp667NvyPAKsq3n6yWUZMB1bBmMF5mQBQEExmeXwPJ"
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
