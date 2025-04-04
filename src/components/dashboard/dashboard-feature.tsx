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
    "26iFnQmcEqLNBb5XV6GrSR4DQxXzEnaoS1oTeTkQ1LjzwwiEPLixy7DBDCeBzpoWqYjZMeRAAmLZGhSXKN9Jgx2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kZp891qLvvVDugy4SPdKzSTGi9SUXyrNYrF8Vbc8xdGRE5uqVT2gGaHhHK9hVkhfjqM6XG9zJuJzMqeYqwy2yR",
  "key1": "u8ogXtedeLYfRHfpKNsnnHKums9Nak7hUgjsiXQXHCvMaFyJnyNTyZtXo4q8dodJEhBcxmXjeu3cLL6SStGJ8cN",
  "key2": "7SEzAHoK9KpV7eDpP2TjRgN1KGvoSJDiuQHNas88zi2YAxVJm7vjcBjaj1EG3KKUb78HwhFVxMgXmuP56B9ApG9",
  "key3": "3sXxjS9cWEjL5U1X8cePP9hYC53JTZEAGhxQYWDYJYUEn6PcF3bk76pJALpy5xoywwn3P36vAtE748xSkp6GM3pX",
  "key4": "2k8MZm4nN6XhaNaKkfjug3pvbFB2YqnDZaANUEMYgNTsRS5mwo8fmGxpTZNjpjtrYnGyDhZUvK3pEX2Fi2SP1gsu",
  "key5": "3WegZfAL6LAgj9M8iDCpa5DmhQHwpRRAqasvT1ximgaUC3CJ5S6GrVFzyAXLFs2Buzt4Cvme5tKnUGLc1DMxNkWQ",
  "key6": "3GaXmapZCj7wjJmxDVTcwxCEpRRrtbQftZZxay7GAbUA55dkXwLCuKAWSfFAXYJxqEphu8HHtvPKE5gdJQXvxhbJ",
  "key7": "3D3fjN4uv72n1ovbhkdGg4XdPH97Ks9FMacfXdhvJngV2hQn3nxTLAa2ZPbB5xDUTuSwaSei1xUAyZHL9ebT5KoC",
  "key8": "4eEyXZ1kXGttpWTNBzbUdxLuQT7CYjWC8ujpeETEFcWgQToYGs7ethsyJGJ8HAwQurXSMhBYS8iLGFoxFnejgWd4",
  "key9": "4xeZm7EhDJFzeAPcVr9XncJGJHKitanHz8nhjfpn7BfN2hmiVt5swzn4GhRd7i7pnHJZPZQwRRGjQp4t4A58eKjZ",
  "key10": "5Bar1xsAMtW3mzgsVPuijXnLnytFU4PDjbqRAdTZj5brNJ3kHEKHEZkoTr6RNb1wSz4pcZm6Dcyy7kTdKvCwN5C5",
  "key11": "2AEyNr5ZUmQTSDUrJn43gwXUPusLxQwkyKxpKXXZDyk83ZbUbo3fvLz7Ry8W8G8SZ1ydhDNFFiDzixfQVC2iDg8j",
  "key12": "3eXaRQb9jpSWUZ3dcVdQgTp2B1udo2gJUSFXFyuz9ySjRhH2mdYMKRxXs9c1J5atdnKH6cCpkfcDWiaS5EYkYCp8",
  "key13": "5ksGg6NSji1fQsMnbXZXKvwymubm6qrXNxeJgGeGrrVtSgPcpM3TEqX6xTRWzbzMNy5pXh8Xv5QHLVPh4EX9W1ep",
  "key14": "54oKh5NFeMyVENJNKsescrBH5pSZmsiVi6LxQS7rMcY2ybSufvj3KCybU7PBPGuun6dfLHAATfvSDAbSPTCqKM5a",
  "key15": "4ah99uGGMZFa4Fgr5kYDBSRDCWnNykuTqx88HtnvNw3spLbe4wGe7TG7xiJcUw5DAQ92CSkRjxAZNi5Bz7xC5hzg",
  "key16": "29z7TJhnAm7kxjCsUyXyBJXNWAwMxuiurj9LLVnVSZraUoMTSv8UYpq6AVtBxuW8ghLmpAzC89UAQCtnP2fb8PjV",
  "key17": "2BgxwKqon1EwKq8HCJzQrRn1bsa4vyZ7Y9TweoBnqfRp3nbcw5XEsGxFNy9ruFdKXPnNCrF9TpaCVVuTBTFF4sLH",
  "key18": "663MaAqKjPbUvx76eMNC24uZGz8ixoCzCHENtfifUpGJiP2UZEK6zEMtq6nDoEkVsomCMmmqACAkf4ApmWWajZdc",
  "key19": "2voh7PCzSVipENGKSZRHpf9WzdqFdApe6tqwxuFDDMxrY6yfjjUqunKk9dCf9ggeCJi6tJ4WTY6fh3rLAeNi1afn",
  "key20": "28Cv9evmucxZShuEhmvUDbwGiJBW8fR3FPPvNNQCgAfMhZAC4qJuUG2p7xYTM7NVqHfxYuKN6wqEZ6e1bHwi6fE4",
  "key21": "3JpAHb7fPzvh3Tw9g9XL4NLhvaWv5ePDp4giTXgeUc8BssKPodYgfA8hDy8mvXmMLWyz1vgtTULE9Mjq79mxgyfP",
  "key22": "3SeAtDtYHW9tgx4m7YMfp3uHNR1oFJ6qYLFS61MpCoaPcZPLq6hju31hs5dtXPnhy1EH5VAB1ELVaCGphJwaNoEY",
  "key23": "2cVnXjFCihd93WmxdpvvDvu7CkeQUX581yAzG43jxJUkxWcekHKzZFSobVec9saRRu4DHMDx4Aqq7HDsZf9ESPww",
  "key24": "3pfa5cTcDUUBkAjhcfTn5ev4DP6NMjxNa7Fhnpeyvk9XT3j6FtYHdySu6a1cCsmNEMV6PiNMurDuy6EUVFFm75qM",
  "key25": "49yFuqBeMfcRkW48VKicqEcjggFJbmsdKmUtmy8cXupRa3t2mEuYMu1CqWHBKwP5DgwJo9C2FB5BqGmDiXKyDEHL",
  "key26": "5LuAnE8vGAWMkT13a6W5939rPaAxHPBWbSmcgCMjyYYqBBzSpaKcbByavLmmT3qocLbnLLj7FxmviHF5Qu2YXyjo",
  "key27": "4ZTnFp8LQRp83CEELzZKZzy87V2dJis9TibGrLBCiwE3AyxCkP6ZgWsyKPkoG8TTvqupd3so6e54D2UyVPpPZ8xK",
  "key28": "5VoY4TsweFrnAb5jYRg6DGMTf3iRLcwQL4JfZJfWfGyaZb2mpECH36w423aEXrB4nKN9CkMk8Rw4uwEszmB2STEK",
  "key29": "EmngggrWD36Yc6VHGuvJxTmb9Zqcn51LZbCeMmPeALRkhHwnSKe79KSgdBQqzuF3pACMm3uwZh5cniSbgjrLUnn",
  "key30": "2rdkeqv2Z4p8QWnbQgCKbkUHg69po34U6T44UayUZ6T3n4YnxkvPDvndFciEx6ZjfM4xkrk9VhkzfCarhPPS9Z8B",
  "key31": "5NnxvC1Hni1asf7QRY4kX4C5BNotRF9Vdp6iU8tnJw1pNKyhGJq43XBHCamfJKnCDADgHmzWrTssViTnDdonyyzh",
  "key32": "g3SNHMN8cPsj6XKMkLJEesyQhwrPmwXpYw6ehS6Md4PX8zBWfAYWtyFNC764HVkibw5nY4TgH8GDsgtCEyuQax4",
  "key33": "4tx4q9LvxzWMy7NJRVexwz7MpeSrk9v229Z4C3isD5CxW7XAWD4URxBWJfwnXEUcq3EHqWJ15ZEiLXNsrS6ohEg6",
  "key34": "rfGU2vX9HwqzXL8wvvtCZh2hcMrof6nn9m7LUe7cxTaUePDA8m93yKog3pF82Jt1P1dBuuyDV5V8uhkhacfZRfv",
  "key35": "26PeBZSxmMEdR8KWyNR9Phs2QWbhKySJ5xb4WZRkHWYphSrKupfvdwhEWo51umr96Gpm8MF3bePSqFfx5KpYPLjv",
  "key36": "5Tx9anDLUgrtLfvQ7PCyDpt3njDnX2zM1YqtLLZD3VErpEGg1XyR6gUz1QDu2ShpTAat2XxZYjL8tZhAmbtweBmn",
  "key37": "62WVU5c6ZndbZtrSDPPSVcr8yHfhk5awKee5JoUJ225vCd8PZbRbDgFXcS11U7mJLzQvcdyfooYnR4oBYKbf69pR",
  "key38": "3vQa1EBjkG5bEPvv8NWLGAyZaNsDKbZ8NTruvDZNdKFWWXzUq7ftWx6Zn9BoiTNYvwH5k77dkptPFRvrQixVPEZC",
  "key39": "4KdbqZfftB9gBLmLMQx6gihq6rPRS9pVH5SwMMLkDeSSitRq9gQSp77tRW5f4R5JDMD31wThg2TppDNVnCK1PkBh"
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
