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
    "YES3p8y1mBKFju2KEgrVoCEVtXdfiYTphVvWZmfDAUtLiT51uJrMexxuoGcDnB8dtzmZY5nnPvFGvb2ZGqqeukM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mg4izHmmSeHZXyVnaT7xnSB8Ky7HUEYk5joxMv25bw9qu7WF2u6cwgDGhn5DtQv2M4SKPv5oaMFrLqqa9Mw2fK4",
  "key1": "3zJycBC6MtKSeECsJZMn7dfTFBmLYvwnvebR5LHCyWDGSAU7m6vrf6djdwp9WNYp1XnydioSKDNhB6rK6ffmHS6p",
  "key2": "3wG4RiUeX221nPQV2vHAUs5sNY55TEafrwhd2kX1exvW7Xo285LsCxVK589HuQaJUKgA8CWRZtHRvuXqX1hwVgQJ",
  "key3": "4EUMnhPkasMBxsSJKmwXWFuu9oMhggiKCXRKF95yYYDHZdM3ma2wLMnvfwzhPvsxHFV68dFjXPG7h4nN3rsw3ZDb",
  "key4": "2HGSKMqS2YWemAMSS7NmmJC6K7TJt53baaaH3LDcHNpiEPF4Jt39QcyuE9Eq7ZLpkaaG9aLFY7SJ2Uh6jwwvipaq",
  "key5": "4U9eucxnD5jxALx3cHTwmLBXatHyzz3AbF8qBXnCNRvAb4AhuScMYFQat1Zx9cZBt5E6Qu5xvBCjrFnyGPKsTJu",
  "key6": "3ydxdivfQxc3DSUm2RFVedMQEDLnCKYac7qkCXfWfrCjRdnc26VnPjAT1gYmJ8YWX8TcmPhMeTQHPFVTNeBip78p",
  "key7": "38kpxo66eAvsmfCemEtpQJSFcPh7CinuNafEBcroaEmqezkUuLHWcCnbhpw1YULuB7AuKQqbYQuwB2SuYXWsLRdX",
  "key8": "4jtRgPKpuGoV9H2NVnmKiGYJEH9GtX4tG4wrGHmJYsUuQW4LuXbJU9HdRzvBEGf1foFdsDxKHQ3e3PykVzni12R1",
  "key9": "3NjjdS6ovNswiFNmqhfrUdfFGcp3wm7ko2nFCxJCtPKrqhiqJVUhrPHWBqodWht8L7U3usQMSnGv1H2MydHtJfMd",
  "key10": "2vxhXiCioK1fxHcH1QVzX142G6PwaeZasLULvQkEMvYMCg1wWX6C4b7EGB3nCvpjh6j3fNAxMTW8ufBZCT6pz3Vf",
  "key11": "3gtLbGYUddoH7VN4ty5PskC78hvaUJSxcPxpj7FyEiMo9KGGeoZXSvNYyqg4yoJgAvY2EePL2e2dDYtuvm4Ui1TE",
  "key12": "4F3kJeCMNkAYymVVwqm2PKDqeLNC8PxTtSgr5icVW8k8NxDobTaABoPgT5Q8S4VVkNN4p1bNzsBiz4n9RsHCYYup",
  "key13": "3A34kFcx89Xd3Uqz9twpTdRDBJFS8kXSTCNKHg3Rz636GgUBLiFcgbAGU3WDDvC9HtV35vBzwbDryQaof7KMnwx1",
  "key14": "7VXwHdBYNo5D5RgPBexJhfMwqawSbPGyitQd4RKwiWsTpQwJ3XZAusJDiQk9zPKYxsJAS9PSLWmvqsRdyE5pfzP",
  "key15": "2Jjyu53skRQEjVoomu2Szgv9JHNwyfU2mLiiMZD213UD9xwsxbM9Aamu4zBvdrXkv1zxba1XvX5H58R6dh8ttE2i",
  "key16": "2Ra6nbDeHpZJgpyZoNJuTKD49eyEpY9mro8w7DvSWMM1ytbRjkwL3QMMyJd4nKQ1mCuygJ9T9v6JyYWXpUMxCfmz",
  "key17": "2oSu54iArD2XgvNXKT6hvNPxBUPkC7EubqJsM1C8oqFB5kNhEKdKrGSWxLcMnnwScj9L2hXWoZy96Kmk54kvqDHZ",
  "key18": "aiy72TXGosoAFUjH5pQpTGp3hAk53wTBXdZs4bv5Fo2YszesoKsBbA7ZEGqCk9ViHx7mWpwYwHTRiitDu2PT48r",
  "key19": "2yx92piRnTyL7ocMUMr5czgxSqN2rWVvHYZ51SwkncYwDaT8m2pKX567Qk2tB4SokfrAYRMfwECaEgZqZPmiJ9cy",
  "key20": "2oUbD1QjXEbuCR9F6pNULWCUb8HkaLwywxX8dz3gRqJ6xoS1jcyi376A8jV8GPgCECqpuNBSN4LquVDe7brgBP2x",
  "key21": "2n3iCvNdjdNg5MkEhnUrJNaNkHmKDwFZ8rWAUfWiDPmWtv98RpUgdu7P7QxpByCy4Gx6ChGKJdP9gxDRFH4q3HHP",
  "key22": "2REnrv26saRV8egU3GYdBEo4rXepzGVbZjAEuxuC1ofi6mSRFYQEFBqqhqfnAKNLPqwT1ecF2wVrF2HfW3adqPxz",
  "key23": "3tyGATcmD72xpxmhrW3VMzQGzjAdr7A4fLfC5vSPh2ttzHQHjgYoNeB3dRurEkHVRjjqBuCCYypibLU1viW5YV5Z",
  "key24": "2htQEYSXjHHCLfTGTDG4vLyohjAEMBM7CTJeejZoFUZrkwyVaLQZr6yz3VtGuWGHkA92MPvEos4KVAybHckpdncx",
  "key25": "5bCM8XiEviFVCv8MHeompgGbGUE2FmTQS4TB5fNGYNozmYtHWqfGBpCWgsoEcAABWHFcGwFz1wKkFpk6n5R1WCoy",
  "key26": "2hs9g2DtFPSfztohGHE2AHNq8kPJWSfwMRetDZcFQFtSV79dNLmr47CrvGu8tk5irhtAw4Eb8i2z2xuYLNzVSFRj",
  "key27": "2ZYiXdmSASxPwynUVkUgfbHZWT7sjM3UUhYdkiZs8dS1eTKtxSMgdtCgx6YW5c71ujaLG44GVWFR2RJi8827Su87",
  "key28": "58sSoD7FwwH9KtJHPz12zYEMKZJEr7AHfEPjMJijseRw1tDfe9FKcqBLNLnvT3DX2WAUAwfrmpXbLZCvoWhrrh7",
  "key29": "54poFeouUUExuqBEEPKjep6mFBUDF9aVnApEUNSzNTKoYj5U5CvGovyp4h8fLr9yuLNA29Di93B2Bdvsze81CPGw",
  "key30": "438CicqGS24iN152jro3w8qjACRXSq92AFpAaND7XuMJfAWQaieUjERmrVVizc1ydkkMnNwZ7xrBY6rAbC5JWVQ1",
  "key31": "5wjqUjjx949EMpRGtqSh66Z1rXdUzrWz35hcHuyqbpQiqJwFht3nvKxjhCMRVvaFAmBvF16iGQbWWgcFzeQPDu9T",
  "key32": "4kFBqgJAUaa56E5hE7PjirsDipdiem4FgCN8n6WAPmFgkYaYReCAfML88u6hf5ws36ic6yBsw6jvWZUTVpRphpCg",
  "key33": "47pz6U9u1LVm1hfEdj3iU4ZgqREPsM7FmjXRPuqHd3UrSQ7JPpwdxAKrveexjg7acxdrdZpkjhf9zcqPtmqQzsCx",
  "key34": "5aTQnqRwJTa8y4nYyDLM4ciMAnLvq1pCDxFHYRdowsapD4ynfjGzWNV1uK6r36qkBVr2Cs9CFoWn5Wd2KpB3nfTD",
  "key35": "mA2T828GxZxUcSwEHgsQCDghQd5GLV2K3iKW9yfTzjXc1A3bQzcExFSQLQk7SSYKMiVw4srvDik53F2istSXC63",
  "key36": "3TCbt9fLwkAYNdFD42DAxV5GNtNyziTRSLrT5p22Sqk5yp5EFWrTJF5J2LTSJBmaYHAxeFrDf5ibcQu6a8hykapn",
  "key37": "3YU39sxLk2SNZ4K7TKxMzMkKugUwADGnJRjjzzhTSHKYpNGRW7BCKhj8FVCms4UukdwNsPU2GUyJFRR2pmeNj9Vf"
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
