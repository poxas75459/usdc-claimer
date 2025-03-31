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
    "3QQ67yZsLCkazRuzSi92waryJHpvvjBWGjp6xKTLEeEF1beHYuHivCKrGtYQbY3oFBCYSxqb3qEpqSCqwe3mzC2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48KUvRL3QTou9JSW3rFu1o2BYfHLTJZqDZQs9iohhDwXjWb5nhkVkKmCdisvQJWWJbAPZDSnFaJiGNXbt2Xbeihn",
  "key1": "5Cy1weNQjKokPUEJxWH9YaVQ1HQ6hGPXXUXJpJZZX4gWuNQVgBexvgoyqQiV7he8YWX4EWMAqNQvxGs7htT7Crtm",
  "key2": "2haGJJMo6itVHfd75YVpPyGpAwgG8jzLNLmPaq4BUkSLzze1tYA2FLCGtcVzyd3as3J8s2DGAX8jb2igMrjfngiv",
  "key3": "3t5GdvevkQS4HR4S7WeJgppLMA5G8ykMN9FS48UGAFH7ASWdT3RsZMYFBdxjp2aatHXyw7Cxegfk1Fs2kFcvvir1",
  "key4": "4FuVLWB13XqSsRPWJBBrCApkXwAA1MXNabnS8XNnqKyoVaAPiApWh5ZrS49q9VX1MzuTRSrPQ9HMZkVv1sS6jLry",
  "key5": "3aAF1pHsHrcvFuvhaCRrcuMBkfcr9wTQkgQN9r2hPeTds8KR53bL21AxywireMbxwpr895jqdRxkprZ8CHJccYJE",
  "key6": "4BRfUYXfYmTLREB2vSm5Sgj7KEyHtGqHFSfT9KLtrMtoAYHg1CYCyS4PYs4L78qVzAW36wZcxyj6ms6rzMPi9xtb",
  "key7": "qFqwQW7ZTu4PJqfvDZuxVFq4UtgtaTn8iwApmfkE2VXiEfLfAStgXuS3fp5rbKaZDd3eEmVCD7cfvqRzwu7gDXj",
  "key8": "1ZtLbzAHmWrA8m6f73tmd1d6DY9ELnL2JozjSSe6vpSmfidY1xxYQMCyMhduBgifoLHBaxtnsWKNTTsAQaJJk6g",
  "key9": "4YRDtAF5pkmriusnYWkJkCBN25RRfQCaHEPFqhhHuL7BWFiX3kpgVGAXfe5z5ztFqHfdoiyJp6nyczZZg2zbXHUu",
  "key10": "zxS9edtqtGf9fEyGVTFkr5v1Sb5yN8SWXuLtbjt5dMDpraVd2rCnrWhkvWfpXFnWSrGBcfRMWpBwN5942S6hTki",
  "key11": "4qHFsxkj895foRrijMQsNSq9WjMChT7FuGJNdCPSD34HBBvg5zX9KKBsKtnPNy6seTNWK13ucaJRRDNEhf5caeps",
  "key12": "rbNiL84MEtGPJjMEcQgg2FRafXjFXAAtC2xJ7QncBUbg7QJT6Pa4TZgGSTaLsjy54Y9W6oZZY4gCmVeGjP4z8nK",
  "key13": "3WB2HdyeBXiFBpqwVBDSjkCW7RcTXEXPUaRomoBL6yaLL2p4gAiVsyYXcoxQ5kDMF3xNDxtn5uZQGAQd2L6m6r7Y",
  "key14": "PTVm9aYv2Fi9F2Rxj4EAFuSrq8W5S37kJkUDuMRsci9HGrhU8N9Yc21kt18X7i2jWP8c8aqqoUpBnM8ythZqC8o",
  "key15": "39jD9buFUqBQD7vQ1scBss53i5yLgU15eo8xMvsKvQ52PS7J3A8ZwyzUHQf55CSVLjhprSZE94CgrHjBxGSq1cR",
  "key16": "4k84BTwoYbWxZX1qb4kYtcQwL6U2EbgzmwaiZEY7g9qpCDpZJ2TbNyc1vpuAPs8epZAyWoxeNUuM5Rwr6ySt4abt",
  "key17": "4J4xz34VoAhy4qRxCTu9vw78EUWTjfbeGDNBW9PN6zL8MJ6KbPaD1nJLMPog5yVohkAnrTxA4CCegXasbMps2jxh",
  "key18": "3aStU3gDUQ6wHffShNswhmTvN3VDe67KGZYLGhvbJYQt3wUr7aAqk58pdKFtcYdzgjTTK8aR6G3SJgjXRAiPbNKp",
  "key19": "3xZCUuZWmyHTZevaEgj51gxUu4LrSS9ggQgXDJfqBTF6Qiw6xZbnfqDqegqBRqXtw7Wc7QzTvDoRKNLsHB8f34JE",
  "key20": "4wy8YpFcZk77M8T1wYFKsa5P4NLALVVFj8JrHnyVcj6erW3bbNPZ3e55rF2zWde1YAqvaLJw8UrCPMvhrq4w5PaD",
  "key21": "41X87xAxt2vAaD51uwa9Z9DUmwSETJt1Ya2fsqMXF6KscMWwTiXnB4XDMPWxxEwGsbeSGUavDVR4JKKr3QBzwTZZ",
  "key22": "24BYV9MKJFXpcW1PhoNN79FvTAFrxyj1b7dKzJeSKurFKaf5pWesqywADod1BiXDmRXLM5m1b9i1EUnb2ZLu8ntL",
  "key23": "5gdimZ5TuCkVM9uBeWad1hJgSqQq6acErruwGAvTDuauMiZgEnygdw4cE54MV3cE7BXVvqnC34QrR23z2Uc8nz9V",
  "key24": "5xEb5uPdmVdpu3UiqwDhorhTgsLAcEBiCNVwrQsr8QgvUpmNgesDC9JGHL3RLmgYckHvg8QyGVK1z2wgGnfG3mL1",
  "key25": "3bEfqBVi4zaF2DFQxvSyhmegJ16PzucfypHdpwMamWSajLKDnk8RqT6CtUMd5tigy4rPDhibnmRFYwzRWxpTM8uh",
  "key26": "2xpzzK9YverjeajJG1XA1sn9oooKBB8XRtzYsXZbFcCYZAzxmusTgGE7ofgn8s8USLyTNmPUBXrikA9kzKob7BXJ",
  "key27": "57dhaTkynn6qBudQ1avcXZJvwU6tvgV88CszQhyvCB9EebeKpsKHxfxJMvNmn6HnQGtmaw8PgmuHbAfy8TqHCKsR",
  "key28": "5X3UVMwbZwkdkq4V6kEwb2CrvYGW2jNPRUiuhWc9PYurTPTZnhURdLz8w49Yo6VkGqxuTGMCPLEaspk4h1A79mR2",
  "key29": "4XdRAXQzRgfmY5GG4eSp8PJKBd8Btqhr1Pz1fNH3nvxYaiKtn8GxBUmHxbaebjWc2GRDY9VbK5osQytG55jNUwxW",
  "key30": "oQmEKA9wiTEFGX7CTu76RUDA8w2T7d9LHEUkpTngERpHQNRR34858p7BBRMe3EUi2NyXkREXFnjjJTtUmfLUxa9",
  "key31": "2U5Gm377NAi4vejkRDpWr7ZGAUksG7pKJrGPRXWKeMUartXXQd8FALRWg48TbWkURd9NonrSNa4GmAPGHhxqfJCX",
  "key32": "3rsfubhM8Xp9qF7kdKmpwSb8GZCyY9HtDfSVHNdoFeMk1s2AxaxprtZyL97NQRKcSiAyfGhtfGBGu1TcpYG1Xi4k",
  "key33": "rdVxqR2vDCMftaUbuSWrTNpenXYYcfRj6KDGJRZGgZr56f7W6qL9QkNmBwiLUgXQDmXfwamLpoGpN1NiW8wV7TY",
  "key34": "3U1P8QNDsC7ZcZCBP3LbfYPBb7ZXAm9tgAmN1kvNpeTfFU3vLadBRPqsrfb6Ga2FAHEcmgvqDvpWMoxsRK7N8d4N",
  "key35": "3aHbxWdA4yteD5isa9QKMnxFomCA3ekdmEqxFye8qkL66JUftHYwYySCzrhBB22HhaSnXSnNZVsbb4NusDnwz4tN",
  "key36": "5K1gGdUKAeuRApt9xBttxSuXq65sRy7mTY7Un8QQRmHrusaJypPonqpixh2HeUmHEMDF7Yg13skR5jgRDUAzeXkr",
  "key37": "L7RoNDDEJ6msn3tBMDZoqEqAW2JBHjGgm2CWqeZU1G7FX5x7unavu5P87mEq5CC6dXDzVdrdcoUafga5YW1xgFb",
  "key38": "2QHhMu9aiFHSTXqAH1TtFaAJBFy5yTCJ9pdGDTnizWzmDTiPF8z2gwSdQxatwqutYU6ppYFwkp8tQT3EdC48aw7",
  "key39": "43qwij4JNWy3A7ZFyndtTPoGbu9oLRUwYrYQP9eqAmebyuw3MC2m6FTXAJkhox6TToZSwiRhudmpUi5pSmdH8h2u",
  "key40": "tK44ritH1McJKU9tTzqTnshY64oM3skghU6R3bpEYzpn955Eo4EHjgiAe81NNYWMoZbBoZmZcqwr8KvjaCRqYj9",
  "key41": "3ZdidtYAWVXXRMizf2MPKjzYywAzzjK149Wkjy3D4kvFxxUPiKeYfbvo7CgH8BVg4gFZ7mWr1c2kwETN3YSersWK",
  "key42": "5gxeDE8HMqcEBByJRUihsSivmvrTUCGQ5L28GmcHsUpeYPxbEgrmr1Q2Ux1Z9KMBVsDCCeX1Gc5fgHGvG517au6U",
  "key43": "3CXxQ37ebZaJ8bCNXTy7AwqdWDB1JyWRQPjjkMX2cke3T9LMLJ8RV2KZ5p6fo5yrFTcH9r4CSSe3BtWKEgAVNpVE",
  "key44": "3voyfdBVfBfeRypYxQ6spkUdwyubYBQY6x3RLmNTKaTtDuDTwUsvafXbUKBQ39jE2mJvXmAJaedr2zdsyPSQX8EN",
  "key45": "3yYHsjxsig9JDQwBSwJKo6SZT6aUHNtYXNWUkoQudvRpQ78PFJxrpRVqX3wbekxz2jFAtM6oMoipoLEjfhxBinjH",
  "key46": "3og4imBob21gKF2kKTKW1Z8N31Z6WW9WLUsyAN9YBJM9EH3Dt64o7Sh4gouEJvmAQV4HqcnCyvSCnzekvGzKuuyt"
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
