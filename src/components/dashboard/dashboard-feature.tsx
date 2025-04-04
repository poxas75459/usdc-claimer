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
    "4vFkjUxzSDQSM4zBfpncmbvRPdhzoegh3WyAkTisAcNMU8GZBj77sZh8Pv8FWDniNuHUaB6kUap97B2bLG7RtYeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okSiw2aJZ7LeA6gPTehkerSix1gFWp6NHbjeGfjdrMnW1DuGD9zaKwwAXaCmRrgnpaaJRdsCuUGuGgnFFV6RD8B",
  "key1": "21VYvKCDxjZnVfryVAuUUgbVnXWPMbKy64ePQwXN6EDuRoTyNvYUXFN4gaoRUQD1FtGrbCSiEmPDwxvsVZL76YKo",
  "key2": "49TC98iaBG71VVTZJr2rv2fmNaSXwuVjrMNsQG6R7fUwKLXJVtaqMxsBMC5B49WZebwXSbALCzNurrBcciuSJaLA",
  "key3": "5amGBt4EXWAGg8pEQNJSohDYV3HRYhW6q5zxRQQ6eGG7UaJb3WtPeYZVLZ9Br1j8y8YJoRyDzA2bu4H7HNmMqAVB",
  "key4": "P7hbRnwGsruHfRkteTPzHvrFAgMPaXDFYCErod26ewA3vNSmw9rdGmh1ws1iJnRkCnsReyBicLcDfQiEFH5GATL",
  "key5": "5c36zAjmZp4Xtwm4piFZ7qTUoWXYZFtgW5rdV2dfYbD2iCnMPYf9p8acdDC4b7B7K8oVdXVSwbEu2rUHtzirnjwP",
  "key6": "5P8SgRmCPG3jk3uPKDKbrf2m2mzvBrABGzg9PJGPmzunZehU5VuNeFbicHkqRoKPvFqa4CVGPhQiDoetRLBCjPq3",
  "key7": "2eqmX7VU4tyTH5BLJYYzh8iTqtGPTDW5kvLkxyFH6RjnrbgvDPDar6ybCbDfwLH5rtmL9DeGYnD7fKKkdVpqEG9c",
  "key8": "2vMauhAQMphNxwahV2yE37iWXAQMHpg7DQtyggTCcU7kDuYPsWwEnY56p64eH8NDjZU3Ntev5o9zHxXH1Whd3ev4",
  "key9": "5cAqV7xYjsCBsf3REQ8U4L5aZqKYYdRATpDzeA258Y3CynEtUHAd1D6NvWjJLfDHW48PRov8fo7yesVLYR8KudzV",
  "key10": "4E9v9RK72aSkxgCPMxRVQ97q5aGXfwBLYWHiGV4MV9UUUwAKmxtK1ypvXmpe5JRDewxexDVQDc64ZJSDdkt1VGJ6",
  "key11": "3WxoFXRTpGb29oJpN7esiYHuBrv4o3ydezYuFCmBFgaZDtFbJUvW74Fa6cgVH8YhYZx1gPDH254kvFWrwcQynRm1",
  "key12": "4wGxT3Sv8at6YN7AWsXqRtpBfcA3gf2Xb5a563KEk4JcxHrdMUtAFhYwxYt8ippGLKZ1QyPN4mm682EuuBPKkKTG",
  "key13": "2jd4PZU8zEnUM68GwhpdVwxo2HXjCjf2AeushjrNjjLNLJpPckM2C2nR8bmZ4FCUeV8FVPDzWfg3diKQzd7WoQRA",
  "key14": "vGyevnqiqwwvpW4oq9qVBupV2TwaTr6ShKD4AecJVM3DUvVTQnNEZved6VpsktC61dWxNUkpPGv4czhR5u8SqHn",
  "key15": "2WXF1BJ6aCVJpkLMj1pPhqXPoAVNto9u8CssG76jUZdhFUvomuzNLDsusNjwNRcXJuXAJovgyoLX5ptC3DAt6XVm",
  "key16": "2cnUdGiZz7ta2LQap4KPc5nvMJ4q2PJkFb23iRvrWdUnJC5vPYAjWsxgRUGjSnKLnFRRUhCW9rxo8XmTxrUmtweS",
  "key17": "28hs2JXLb3YxCvgERVdvrWhT71JhqdvaJX16TyeRestVhUQJG7SxMsCkbG3DLRdtdnBCMF4f5ZFsxpoPgGR7V3Zi",
  "key18": "4iey3emgutnUDsBWeWtShs11J4nGUX5eHB5eLBF1FfxwGSKuh47C9FvvbWPKXD7YiTHErBK8UQBBKesdP6pq9vw5",
  "key19": "2zngCmtrD2oGKNxxh92UJy3CqTD6zLoNB2x3JvAXzZdKfNN2PD5TLHNeFvf76AKShKrcK6jn8XPYPKbH3hsiTYxc",
  "key20": "5bcFhzrbgXx6FWCG9bGHL6BdrJ878oHS8Ci5qemzEbwwUfQcgzvzUv8BRisFHx6in6XGaTs14htcezS32VNxwvgu",
  "key21": "5HRXG6JCXhpd5CpGo5dHzY9NupJPDURESdeBeU3UnPmeTjrsm3MiSbCziU3os3A2i38oB6xPPKvWYhYTEVUy7Mfp",
  "key22": "wnmwhWu2hN3Z5DRGb4x5AKx1psHKS6XC9Y6ZEwcYMDh3AMR8nrfQdFgMZqwYt3qJH61yZPoZPrwgM1ZTKdiNX5G",
  "key23": "5DmpQa2XPgJnkugzZ2Lz4hx2CtVCpNyVWHsvdWBabuBQhySByRoY8Ag8RW4QJfcHFFyQ6hAVJcb9tYMbfWz6ezBC",
  "key24": "qPk8qmoQjaxBrhaxMWUcmxijreCSD5LUDHywZzgSCnFnQ8avaSJ15YVv84HUbekPQNXtpkQVw1xHcUVCVeDLng1",
  "key25": "4DgHXiEozbmxR3AuEVHWvXKkjGL7kuXgZuUjQRLW7uyz8xu59qAS9rJBDZmfsD3RobeeoMFzmDUjujXLXNZyzDT",
  "key26": "7AD5KKUL83tFHQbJVtQvKDVonTduvtC6rDeEovFjB4Gtd2RrRnK9kfXM83zJmA2RthaTj9NfhpMCwcpzBkQbaNG",
  "key27": "5BmK8t34c1RiyCZaSZ1Qb8Zbepv9WTjDjNMQAe8diZfXnWgua8Je4WQR4gjNGh6EehC6sHNojTvnKGn4L83CDvXC",
  "key28": "4MTDWpqxECXZ6sWRcs4sisPpwrJNYRdejatXTRk768tB2G5zsd3JKYmiBjUnRGDjTyCANbeoEDUUZLZw4FUgD3RQ",
  "key29": "3KYVGygGcfkiUuYv31z26qBUPHcM7iQtPX7wRBiBbbZcrHomAWdqZ36H1Q9WkDoTtkUG7bpDx41StvkUaYvfFAGX",
  "key30": "tbFHL8mSUe6oqsCcQphtk9TJt5LT4kZT5G9EBe1UDWeFUz9NghBZvQVrMfQac9pemJRgSy8THWAMqjddWkysv8D",
  "key31": "4KxAE6opw3LKs3FvSb4TYNoZSUvsy4jTY13YZcuqr27kS1Zp7hZw6AFbrwBmWS7XcUwza6ECtoK2nkTwYzMF57W5",
  "key32": "5oVnGNur6BqLUST3zWenaLmrVTMLayZLnkmTNrJ2cAFY3ZhgUpuw58kxrnYPeWxC1jxJCucr7fZkHXG2RGAhWnrD",
  "key33": "hwiaG39JrXSVLHgTYpe9EifUE1jN17TFnTsihC6FTavgyk5JLhzjymGLUxT6b27ucfSnkQxU3wy9HvGQXYU4c9k",
  "key34": "4gxshpPQivosfTdojTJ4WHafQL5Jw8qGqhPjRaJwL9VatFd5ShRRGq2bJTH76zE3ALDYTKGm3CbW7Rj9DTmsmtv8",
  "key35": "2wkrjjm65PjNjdatCfriHV6XcoLKx8zFnBK5xW92t9e8VoM4ZTnfUB8mVPCTT86EupGX26hVjscXXugXVM5YMfFm",
  "key36": "3VFxxMbmK4JjBfUfvi61C1SdbXbtNRpQzLqBpNhXHcnNasTmf6vA2VrRZBXzC47P8xLTsAoowtSWU143app9akhe",
  "key37": "5An5LVc3zadFNfP2tYgMyyi4NuUXmzj9xYZChzyxygG6NzeKaa44bfq58nKAUAe4oLjia17Ho9KxSZaoYNBhcktY",
  "key38": "Uk5ti6Nb3K8aXKGYPx3cjgRurQSKicvUdpqbncXCrjvPUy5dQAEuzTT7XenKJZMv8EBVq54uVmriCbpVBVDCdbi",
  "key39": "2nFNJBQTjGcWoTb4Swwz8jPb82KLVMjtBd6HRgBbkV7mSAnPDptvcMWkUPWacpND9xgu7P4L41P3nqsDaVCkRpM7"
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
