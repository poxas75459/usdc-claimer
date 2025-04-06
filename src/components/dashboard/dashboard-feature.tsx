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
    "2ypSZudg6vfFhfdGvm5XPg8LCvjXrJgBHaBvzQDB72uhqxhHM5GxfGXZNip8wtLq2MmWJMSiXn65qqN8SQkoS4KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXyY8MhXo2SBoiEZLNrFtxzQqwkMu2h2sXCDbFCYGdabj1VVDkEBBU7g9LWPCJXR8UMBFs5oaDUFQKC4CnAZt59",
  "key1": "5hrxnorz3E5277wEL5JjQf31NdyGCvQjxDyr4UfcZWWB68z3rPaMou8h4KGkAg3MLoh2k8brkdTiEkCmn4hYeBhB",
  "key2": "2qJrdKBWfJsKygAaZfoGSf7GGKmM7qGGYA9HqM5Fkz6tzYTgaWiZikt8zCeFiDXc3uvMWXNW4Xz9wzUd5G5kLDRX",
  "key3": "5KKhzo9WMi8HF271vq1KeL5Tr19Gets54ia5929QymVgeD7r597t5EdWVgdGw2MsnFgyLSU2mUcECc9kTks1mnhS",
  "key4": "4q4BiFMuuSdSZTQjCFAxd4t7dVryj8HTqv2KrFWF1yRZjm4zGLwUPSxkA5MSe8rUZko8CseuwUKXmaeSeWkGURZ5",
  "key5": "CFQjfw5Z65mXFY8kiXtMrKpLGepTkuHub9T1rjSnyAaN4UivTk75A5PJ74MshhMx2aR4RM8rZaSHHUPvV1AJEgg",
  "key6": "5Q8fYupf7bPBxTqvBJ2qzkut1E5NBbY2bRcoC5yJLyF2R9TqaaFE8qRjybVU9NnQxQ3wb9jbMWHZEQjcZyNicKyd",
  "key7": "5ghhwvkcTMLJLYywR29tXFxRWbNnBsRfyCxpnsjKKzNSkPJkApu7r6SiunqiSwJLn5xQNbxddcHm3gfjDUvEBUmt",
  "key8": "4gqpB5gnC5RKwWENyPK9JX7fuW34hcCCxU3UVEHtiMFZCu6XNDWoS9LqDw5nG2ssHGGQazuky1kcX87NwVgjTnT4",
  "key9": "51M5e7j41n79QsH4hzzYt3d4yE2A4Wcppt3UX9qSAtSATnrKvLyo6DTJ8gdP6JrCphYCnHcoWHyaJtBrTGUPBHAX",
  "key10": "4g1sxjUkuCw4WuHhZ1qxecxGct5yAq8cBAhV31yN95QqnvLGtNUAyDz53oFKkhuUJRtrzweiaqJEpEqzczddaRHD",
  "key11": "2CSogLYWhE5AyApY3vYs9WyyQvQasBAtYkeBZRfG8XAEygEPeoedMp2X1aMyUbVfsXLNusbK5VM4EuLrqv3CDg7p",
  "key12": "5dXnfAkwAwbeDKkoEmvuYE9gramJFK5e823XdzttUK8WSZnUKR7PhWGqzDATfv323D24GpFyjGEQtsTXirEx5Y7p",
  "key13": "YHJBs8EySR75mv9Loj2GUGptDhoS7pFhySzqtZmRLuaxzu7gpVbdjECAzqgYGExkGHqQdp1or6itiMaF3DjMYFD",
  "key14": "2po4xyWahkcm6N4VstkhFK4Jb5vUaVUshjEyK2aL6rLJc79V87QVRDVDgTjuop4j9c2UoEvX1oRRPvZJeddL2Lwk",
  "key15": "2jD9wA4LNsu6SrJPNvoAgGgCdqoyhqDw5MVaz1XpTC2VsFpqdt5RcE6D8setCiFCwwTLpmiMU63PZcMQuGTbbQkm",
  "key16": "4iuRiFyhXB2mgLcFibQRau5nAjJpu5XfK4ntsNZyii6HVgQk2ngGqd3CrtZBE6TzF4ujoRYk1xWoEyd7ZFrhpoT5",
  "key17": "3WDjWZccGNdksmdUQ8wZRcwrBNy4qNqxNY5A8ECL6Ct2gUR9AGMRw6iPnDeDNEtxPiKCtUDSQkjaS69cAiiAm32W",
  "key18": "5xk5LRvmPkzWC3mDBCSc5adqLPnWbhL9RgV6BYgDjQSQDUamnQM4GqfawavQg8ZBX7cUewtTpDC7d8DnT7FtG4fM",
  "key19": "4SKkHtjrL5DLdY7wFMVtFnkVkE31vQVNghxUediatnA4u4RxBQaiudfC1f8NQkmDyNdo8756oDcv82oZHPjR6dX6",
  "key20": "4WSdyZSZ57ngvWefsNhEhNvzbRH4XgLEJKFnDGqXgSjysDueR6V4L86nyzJuERe4isvayhYxzcJTr6SpUBqBFWKA",
  "key21": "4egkPSGYTk6z15Xyc8wFonvv7yk94vAsq28hVpV8kPMSVgQ7t7bQGnj7ap8RJ9n37BLyjuA3dsRQGtHzPhktYu8E",
  "key22": "nuhpfAgCUWsUimEcEZKag1jXaFgX8uXyPX3GTqSwLPcr3sku3jqZD9ciZW5NQsP8182KaLBdCzsCRK3EDiWbYC5",
  "key23": "3mJjoEaXTL7AUktSEjidYdsTpkFZC5ZiSgBK4eL3acuxnjBr1KcDp75xjkiMRVaSuVMR5QqsJjUqDaNCYQfB49rA",
  "key24": "3UPrtdLQL3C1fDXGeRGcAtN13QvVvdeFo1gEkEH3TJsHiUBiA1jSfDmKFeEVtxSjtzxhgoMZbn1pbTXJZhFE4Mp2",
  "key25": "43j4GHfc4uAiGYb7iJHWsmRWsKycRgVUTpitXyeDCNEhXXvSsyxr92tz5hfEPZijbBeka6qdWFkezGAeRBhFoKpm",
  "key26": "HnfqpT7kcGvducWocTHyV1oNbzCRk5SH7oro4Esai6Z9puEQGG6Duac3ZbNJzcy3FtZXjdgDXEZS2DBJ7PvnjyC",
  "key27": "qc7sLMsa6DThaxAKrzYGGr8f13vc4qPoSUZ11ktGXTxqHNkg9J2gmDETcvDbbGioauCfCb9ULqyAVCZqHYQfWYy",
  "key28": "4XMRZwRey4rBwMQXydwXXTmhX62Efi71A4rfumUBBggh7reTAy6jk2DAT6JTpbNLs7nRSiA7LUyofgaNooc4nyqA",
  "key29": "2c36zdJjN5BDPLHZK8bmLB3pQ1T5FSTTRLGH3iZUMuHA7HorzrWsKV76Zi5ho5ciWcuBCndLwAaBrEzZ9HBptdGj",
  "key30": "EXvG3ggxUbSgJSSq6oYdtvhduLFpaKuEamiCxXkLGB9nBjZkUdYFxCQ4LqecqnW413tTnHZcF7xubdvb5Hr8nr2",
  "key31": "48xwfzTsH3pxcVhU6vkiXJyzXLm42QF44FWuHgGBrywo4HBjPeSEQLcYgT1UsZozgkXLv6pCKC9KmhqmHLky3zrJ",
  "key32": "3uZjgkuFyuk7MfG9Fxh8wwd4uwS7nQwNdgZW34SZeRZxzovdbh7Pv6kC2M416Eu97Z1UGRXtzJF2EeL4pjvTxoyK",
  "key33": "3QaMYD3QF9w4GKfFbXbeTPtDhiHCkHki5i7Nquii3bkK11fPKxksULSp2g5MGypi9m6VSQYLVKJxMpopSqEw4nUr",
  "key34": "5j3n2xJMSadkFVPee2sged6V6NuAnD2de5fJt1MXm7NHdTMiiNCgdJ6maaKjWKuUfoc1263vBUaKzRb4iPsPH2Ws",
  "key35": "M2vdzbpu2rkHTD94zSHaqoiCE821kkfcvsevNpdjm3oB1m13CpiG1fAaKtiTk3tbN9dUfRYpdJnHWY9L1WqSJMB",
  "key36": "4dcJ3HYcxJugEhYSRu35VXgYNSW2T5XytTWQi89typBT8Abgd3KRnFEjHERUMviB7DZ7KMH15zGxpbuHwk6T4hqG",
  "key37": "7nPZ9QkHW6HzNVru4YQXyJofwMUYUSNiSA387c42BFFQXnYSzoAKgZMvnHrHosZTisPitdKEewGUQLjBTWYGk65",
  "key38": "5k7HKd9y6tuUKVJNmaYymLspTQxjd6gk2Ad8LywA98ymwwazBPGACLsjG7XniS3EJH6STf5pLobozxe7q1gU38Jv",
  "key39": "4v1nR6invnMcYTUNPBLoNr4tbdXSfhk6WxsZRmnmjedufwLXuSrEq9yqxXgJXaQwfgPN4o3ojN3udSsztMZRT9Q9",
  "key40": "5yHqzHWR4MBsSVwq6HPmTgv9KjyiEcMEFm7GhaWXFFsHLSUv5bPJoS2U2FbyAAfQiLGGzHZ7UAMKjiQDYuxjy2Zz",
  "key41": "2PFqDJvoE9igkSCGU1CVhoYHpjkADhVvZA6d4d42zBGfyN1n9wBoz6PzKsPiC1MCxSLMsvaFKWBG5GYKx3DQCCtH",
  "key42": "7BX633zHWCvUH2ad1qX5sVqYKSqqDsTP5VASFKDGKwpGhHuavYufmWtegodrd6fbELq58AqtGmECmuiL39ismBV",
  "key43": "5LWr4jApk4vgZvY8gby98pLzTSMiwU5765bXpas2aNejw2w4XBc9RRcG3KmaiBW4oiWZFMwTbkHcCnKAdtsc2ANc",
  "key44": "csczSP1huGKnTbwx1DS42ERhMZaKHkxjG4YorpHEN7zr3LY9ShHQTRn7cXkfDBV11fYbm4ymyKsrKJVKEDxnJXN"
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
