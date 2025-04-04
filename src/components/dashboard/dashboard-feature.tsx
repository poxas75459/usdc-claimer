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
    "43eowEeiR4Ub395AMZhXu2zgtvXER278Hz1T5TqecjqmtDxs2JyxJQnMgMXPXuus1LFSkobay27hRzBtaiBgVJQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcxsJquYw2wEqaSzbckJzxcKX4hCKDVKyThDog5er78BqTAdoStVjRZf9Y9bPUqEx5KCe6QMGb2as6KLDXCXJJF",
  "key1": "3JNSq2wNjaKGU2qTyzW6hjC6ZcAEYwCJUHt2jTDFtN8KERh98cEqn3Br4g8qyaBdWGJYNK4kKaRop5yqsx8xUNcj",
  "key2": "5U71v1uZR1YKMZVrpVkUtbttWSxsHMxXqpzPg8wU1EfQhfgw2XmYcsN4cybkEWfbRakkSbVQqWPq22zbZ7QcpCGL",
  "key3": "4jbzq7qB24aNvUzCbkVJC7EmY2g5NBPB2VxvWwv9NEtj49YweA5xKVqGXW7kRiEPSVPm8wuY65ABckF9H7xWytRp",
  "key4": "3hkLz8NWmtpwzoaRo23ZWU7bRHRiQnFUydmbqCsLAnsGf5KeWEUcHoeYcbkxHV8GkU9Zbm2iTPwN8hPBQStBmU3K",
  "key5": "4feuW2GvxWkekFjYM1KwZJz5hBUT3DL1qBFcK5RdcfGfNdeWzk6BgvobBEJtJ3geHaCiSxRWde9iGR7FWUAqDhxn",
  "key6": "67Fw6x6LJtjEBjvVo7M7VLPw6dDTsj1KcgP4SBibisnTBH7dPnFY7BwRuVLfob2mebPwsFiofyZddLkSKEz8d6Ld",
  "key7": "2LH57pEZLm2pA58puhmw7UHAqcq87QQkm94g7Wt3PAdXfxtHnWDryTdm28mcMHApmE8uPiuczLFSX7h9KPk2hqHL",
  "key8": "2RgFwbpcmvo4XUmgGtnnsMpPccBNrgBzFzLNt99SSdiaznoLHfPnSd3DKUx9aLxSxvvjD9UAjEPGXGP9cEebsaJp",
  "key9": "3C9hjbpCAqRQaiR9s3JbtxyHTA5t5vPYN9MjMd7bRiXcSQ6tWstyTi7KyTg38n6721A7RLr6aRvX7Muxr6t4BFvD",
  "key10": "2v8vCjPUscpgWgoTq8hnVHSpJhR7TZaBebtTjRX9ujwXtRWGvC8B1zRbG5YwaTDwHTf3hvvu43QU43KNRPSMtEUD",
  "key11": "4PbJCmq6ueXisgSYDXApu3AsTVaiAx6fewnpboieLqfnBrkR2Qce4b4wTgqt8nMrqs6pFCU6UWKHf97imyjX7V8R",
  "key12": "4jjgnc47J2isfC1T4Rme9DWMcdJBqRTrZWrzrvnvwaZNv8Szbfo2Tz27d5McxZEtuTUHcpf4FYxEXsvoXhiSwDjd",
  "key13": "2nmLTCZG3sErA6XCp9pkBFKURUVezoDNaiFQzRwAUik7vjWeRR6DHT6qxVozCgybzvnFQchWFCDp676JRYZbJ8fd",
  "key14": "3bmsnkm7f3arNWTW5x7BaVzW5zt5FE1vpaUUJYvkXubRarsDVNEv3GogDFo1332vEC9atjEmxSgApo8ijaiVSE4Z",
  "key15": "3BP9ZHMLoE39bD66KgctQzXw1d21bGdzx6UxZtBLDoHrDcHgyDNduRTa2sPV5J42BpVjNifm1jUBZ3p3yW4EAYRK",
  "key16": "5ShsUgC4Y5DabD2Gt5EEDNHWpLKNDMCZY9wbniNDvJKCRhukb2fJ5MmT1JwYHTCZZf3S4LY3hvjHZTswuk4QTNar",
  "key17": "2WfTKBccc89oAUdsYX4t5A3wyxzSpsTwAcWkXGMYQvhhQnNcHCXobs9WE8FuwczdnGhWxWPLYs1twfyNvGzoX8Xh",
  "key18": "2cChwuUYPKzbPoF75YRynxEK7eTuZaBf9vGtQjf1RpCDk2rriLux7nvsMcrhsY6Qc7HuL789yHsEok6kuaYyhrfX",
  "key19": "4y6e3z7vXMYQ3VoRYrKEBAN2sY9SBEJdjKXBnSaekC2WZ3KCunBK5bcEYGv9LDjp87kodTcuKfT7cHQ5vVpdNqix",
  "key20": "BpWmZyDJWQ3ssc4sy1ZnWWz82qdbpGrgoyyWEYgbw6uPajAMMw4fPZYvw5sLczao2q3NDwvdCGF4KMvmCZ4koBe",
  "key21": "5T43pvA8822nbJ1GQM61N8ekfbnSMafBaGj3tsFqu16fd4LVg1V1sjtKeMGmDed81itT6P8FRYdYLvsEWjUtkFN9",
  "key22": "3YFrHv4zbjvLzZrNF7M8jkPpgoTGhceosspnEHQL4BRzFrvRPUQyQ4tsU596keuwdGVFFk8R3o65EkmMV7cPPmcG",
  "key23": "3X3BnLmY84VtAiurFFCvMCeS9ER3tFvvpSdankAxjfnSjCmjK3s2AvK78jrvjTHQScfcuu3UmnvAE2xXvAXr7kC7",
  "key24": "45ZiGke28gUZpmBLkuE8c4ERUrTmtpwfMQUhimJTKxxPyaETUfh7sQvYeoS52ks5r8sbbKfLY9nhiPauqrKhEsap",
  "key25": "3T8azXcoUsvfmeBaEh4in35BC6RXASY65e3mVP6QrZfjnf5rCE8BhAdCGkUwJJa2M6aJ2RQqNBfMku1Etn5TaVHV",
  "key26": "wPjS8aG53ZAZdRNvq3ERam1Vz7Ye5qrorG1UWLpo8zQPm3TLiNErdf7EuvpxVBvMGFuu7AtmKckygXr4RevuuXD",
  "key27": "2mKAiL8siXSbhuGFyvUNygPWbSLp7VrwJ2Xr774AmvNmkEXDqrzyvru73QQmWv6o1zBjt7Acp91acHpnUnYCdmo2",
  "key28": "47x5cnmNxAF2NSW72XsBMLcu8ktXdMJd59AhV4HPNac9zp7kKQyw6aoTfDgRypzPUU4yxYiPZDARFgo1cTf1NNAS",
  "key29": "5e7FnXr4cPpnRaBYzwUXEXCxmffjhe3SobnChFC2bqYgBE26uZb4JqS8SGWyzkkXHMAggQ73DpHk1F2ePbZBJLpR",
  "key30": "3wWUTRGjyS7b4PByNyVpEVBCE1V7QqpgqxJ7VcRMxvjzA3DPxXHwuTZJqpneHwpNPA9eddqZ6Q2N3x8kTm6sKxXB",
  "key31": "4djXGSbfCTJ3ygkpXc7VA3hhGF3sRKkK5Xrf2JH2N2vFZjiemjsvP7ddPUWwXMEWMZwExUp4g3b1jba43xb1Qrnn",
  "key32": "5xHuJBuAjQ919d8cM2Dad56tqHqA7GmFtyReNLDP546bsdYrasS4atiyZpkHxM7fazVgd1KKj5aj3k1Nq3QsfTtJ",
  "key33": "55FLaDazb68KM5kYDqKYFLqYZLM7KP6iH2xGG8XNodqAVcBCScBkBesrcmVHxj69EaDxneLotfqxrtK3s8P9MzXV",
  "key34": "47i1SYfX5wC9T5bRUU75oEEiZ7fmM5oKP5GieuoUY8DQUWeffJoWqRcFK8RH7wQ7w4QQd4dgNriCZ9BnqZWJwsx6",
  "key35": "2ZFPeoiGiYvGNAVsVjfJxjh57XZ4jhY6SB4oFPT79PhaxpHTEeDyshc4deCqUDFEXSx8PTNucvadw2UpGZhAkWrj",
  "key36": "3mMCEdvW4yF1DAxX8MreUnNJvdicbdLxLZksVKKGWAFtoANyBD5UthTR5ecNBx6t5YwNJSDmpfQMQdC26c7PeAnw",
  "key37": "5M6pFzoigMjKxj2hYHjrXAENwt2VBcB1oijomhoEeLnv2FEWWq1yHq936GdJtrkcBaQKskSumnuKf6uJ9TZVwC68",
  "key38": "4XpY37tuWq7uwgYxbxGRwyanDSoVvjRxPrdb41JUsvckmYBm3s8ZHvT3RAXFcBiimcjrp7fCTPf2cPqKMNdC843j",
  "key39": "5VxfRX38zC8SJD54KUBFc3j5fWCXxcuuZTA56vMs9qn3cgBgvy5Q1RRqaygGAiyZRGFYrSajusJFA9x6TpWYPP8f",
  "key40": "3DVHf2yqW9Ekmwzndt6s8iSqaypw94pEivFq4DPVmR2vbHaRojXnxfsF3dde48mTJjwe1vFTwG9G6h7C1VnqsbJF",
  "key41": "2df4D8AZGLjFeQGuRzaxXJRm3bnvcJCiL8MAJtVCxaFeG8DAb8WgfJtLrMjeXdCknFALCHJuhJFyPzP9GBozakk8",
  "key42": "34HvDL7aqqvhArxT6zaNw48LBg4vWuEHF3dAk4i9ExTtAM46EoAHQVfF5GB9xhYRWYBVpqTfst9Cg4vPJH52gcJw",
  "key43": "KYn4DXsnYZGNHxivWw8DeJ6UYAqJZcwazBzEYKESRTzhGUaGtXaUW8vfJGArGJLFN9y8p9owTUac9pbUXN861Xj",
  "key44": "446tmq96yr4f7W5LbtU1qKXtTQZctT5yUwj8cafr4SEf1HtS3fVmUDLHxvJ6Hdg1jr9t62DUynFxmNMYC6gUwVqt",
  "key45": "47p9vZdH8xZp91CGeyVTt6Bcvsppdrs1GiC9gVPdiAT52RoHcj1iWsKci5XwDJA8Qguca1xE5mWsaQCp2tHyXSyv",
  "key46": "3vvhLnpqiNq7HdtoNCGkYRB4ATLRJUrgWA2DzWWyDwcTBQJzFhQrrev95uXVPzpobm7hPS4EDt7wzb7mLrLqrvKt"
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
