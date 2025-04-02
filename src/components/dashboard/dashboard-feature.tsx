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
    "2V6DfErbMMKpbAs44Se1MN7jsNQDdkme36EMR1SV49J8hqvRCCdTDPUVXLABdiUj2DQ2h4wRkEGga7BEzUiXHuzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NrtT6vEhYm319zuAt2w11zAWNTdsUcxpNU5Wo2ehgNYM3WQLvgH3jQrUmniiZD6xy21w3MsnRVgouZg2dNq6K3L",
  "key1": "3MXacnmfbFU9o9DfXi9EmY2pxmN9QxztN7QwzSWGVgMWW88sxbaK6oLcPAYyE3NKM43vXzysqFjtLSxMbLWv5cpa",
  "key2": "3XRwN4GmCwNZRzx2eaTxdJocqmL423NiTAo1djSMcGKHtwpk8QmusMFkWwnJkHrxaNg8SYPL7Q2gwiBuadinB9Bg",
  "key3": "2bXrQwgkj51pQRTWZLHbZrgqa8KVTPQ3jjjntvjv5UG9gn4Yx9FhEH5VbRpKHVqmzW51eaYSfg17SrvcvW5X2xTH",
  "key4": "5tG35A1TZFUtASJZ2PCh1bvn8h5Hj4ZKxcTpWxdaJ22isaQxEmxhHF7NLifRQsw1jxnWVLKzJmgKiLfng6XdTmw1",
  "key5": "4HAyMqY8AxuQBS6CU7pbZHp75pNxwmv3geh8jeziHq5PnGsv42MBnTyFS6girR684fv3PXvjPH6rxWcj5ruPckHn",
  "key6": "3KtXM2umQSD8cMhN2wtoGrchB2sJnqwiMACwVveMaHFSHo4Qvf2wdAwF8Q7QS8HDLJwBcVsqYKB5irbtL4jPPDiC",
  "key7": "5DU3rC34Zo8q9mVGaUd5P3fewtxW5ESSWVS6NGzUJQ3ejkG7KuDET1A9hDa9hgfuHBJiXYjZP4tQCycdkhojgNK9",
  "key8": "5RUJEaCotaWfAZmLkpbLtXXqvnUfxx59uBxhNrsKNBzcfjGiSTTL4hkwEAHhzDtjdQ3MWZ78zvQ65D9M2nKxxTF6",
  "key9": "3nBPh2b5gUZjxpg3M1nsSePJehedWGQNpCudWLYaZcbz4DZawBzTQSmfJb73vV5xYBqHNdmDFNoXqcsRtKePcWCW",
  "key10": "2Lj3VGf5ypCBAiPpfQ2ryaRBUpipoSxoUFJdvapepi3MgemweqcKctM8UcWrpzESLvjH5NKDNAQynj17fqnniiW5",
  "key11": "3f2E11Je4Mz3BsoqGCqddipaDu8gqmuk1jm36EXzuNizdNmJCBMEcVPBfU6VkL3HnTVwYng7uYSPF5H7qFSPD9gB",
  "key12": "4NmmQzWmGZPwyt53yotMZCpqVMtkBNXjXKkgpgMJ87obaSkPyPGcnJ64irJnTtEwmAr2rFb6ScWeE7CRcgF9nVCo",
  "key13": "5gtB22kRNeC7KFvXjZnCGmdxgnvLTLFf8p5gBZZ4T2b78gwmw8X4A6erCjrrGXLDwJuMSRPyTuk6AV21SkTMjTnf",
  "key14": "5vcfA2uUJxCT2gkUpbGgpqxfsqrZCzeYziNbBpN1n8Hy2NDiWkjG947uzcvoRwxMpHuMzH23UugsaRX3GNYb359V",
  "key15": "4q8B679boQrXHfbZhbDyGqMDKq7GdC9P9oJfeEmgU313sGUw8docMDBruK9Y6dC45eQMhEBLJ8ZGiWYCkt9BRwzq",
  "key16": "2hYCY68NsmPk4kojC8ASamwQYS9CLsfciKPPfEvxf49ud8pk5spNhXrP6HSCmwy9jRCjAccKfJhi8jz1kgBDQeds",
  "key17": "2uSogkU9DLEqmsXec8XsyK9fbe9DPCHaA9jBH8YvqAo8Ee8mXQp9fF2EFMvoT7xjCuohR6yt3Dm4zjZtGvHvxsio",
  "key18": "qaPAB5D6tRHrXWMPrKQThKze6mQTRxuuSp7FxqXGnTyVYkQH6MXw5npf52jBNukpKpQp2XMqMK5EMo4fevpTTJs",
  "key19": "3HbhShvceRgQ8eGpGL3Yc83ybffcTCeMWBgpnmm6oHvJBvBtBSQPRsByvR9DAPzVug3B3ukvh9mgqTFBBVv9zHKU",
  "key20": "3HFZDgCzgHPjeHai3i9FKifwhy6r4tpjcSXSr1dwrk8RPuiAeYq8EpDePvhxptt6tGZW5W4AXCQyg8zkeKXX7KWt",
  "key21": "2DZqUcaH3CvqfZFoRMPSUmS7s8LLpYZM3ZN2gXnsXfkQVoemv5Mf3rMLvVPUH7uaaGHXp2nuDMd2BHTx3ykK8gSk",
  "key22": "5qQUd42AFs5U9QJq1WjkCM76w5DLtqBiujz2ZAyV98UCh6x6pnn9LTQJeeNXet4QXFttnS9FF9trqP5ji1eL3GqX",
  "key23": "2hozZtJyVcYSGQcakp1ckx3BxmD3izoRgJTT6UH7A5ji5C1UCNssXY7CoVF1PCtm46uL6ei4V1nPK2f1bmzgi8gm",
  "key24": "3fZYsUkeShoYui55PKsJSF9uG3YQFQm3GcZS2mRbhU27ZuRZMVBQfydCHMYtVSgFjbhbUGZBQdphHsnkLzexaNS5",
  "key25": "39pMDQWKS36gRHzwEXAnMLy4VogCZFJSnkrVWECH28J3fHZqDqjuvBXXJvnQWGUZ7b8JRoSTT14XbasCD8uyrycr",
  "key26": "21FWWHUHffJsGP2MHVAPLB55B4Vfqz75JVyop1oGTSp1WsAv6VCR5UDwEW21wK54hUnMJGPeimoUW55fAYet1Rhp",
  "key27": "56BMq29We6n1tJiTDd8CFVLwoc9HDKDdUvNPkE2ZL9UEy1J2zdhG7CXeTmBzQhoEYxTYdehrgGgCBNjFCyLwGvX7",
  "key28": "2p7u9X6h7NjVvCr1bW7iMDiGFmnH9S9Ww9bvD9UQxwp4WvNipxhTruNP19uxDCQpLsAP3yW99p3oL98C98yNrteR",
  "key29": "3GZABUdFZDHqrcxgMUWQa2vE39XtKrWBzWQG2ZiLjeDn8TvUFXw9CmU8QwnMATja7AXGesfpBAFijWF1kVGXYLVP",
  "key30": "32v4dRJ2WssdTaAwVRWwDpMmtmA75MNmDTJdGpo5bfNfJ3xX7iKfGfnZLbYiQwTSY6JKNyg3n7u9wxbkRgzUNQ1P",
  "key31": "5DtDhHPpnvLet1SgaajGwwSqgLprQfeAQuaxY9DDJdh1v124Z2iaY8kHeatWubhGR9h1ybDp2LgHnFtMQSLJDT6W",
  "key32": "4pzkV2zBWmyxgp5dCdiCYgHghyNhgqs7j82dsZxrp7nJgiLY3BN7VEF9NtHksecggRc7Pd8fcJmwAJS4UXKYcQUZ",
  "key33": "5uY7w6WEKKinWsgF8mX374HJw88UofxJgDqTLBeXqfD2p3eN5BmWojSbqtxWELYLMSbJoGJCpQGPToLp8DYwmQGN",
  "key34": "3Nc1wpXtX5PbNVmggL7dsZkY42EcLb3QtxDghCCLKza8rtLLFj19urdrmAR1ypK9DQDwtQbbTrNM46bVqS72QgBY",
  "key35": "3TWoVzx4HVMGs9aXhVTFA4VkvitfWFZqoPfxbUwX4CRyGkjNPQrux2hpZAwHqM7MY2NSmxEWy6jsyMc9sRoXGFKW",
  "key36": "gxcMP4NESHsxshucM9tRbWxmcugwwNXusLuAEf5MmfG9VMw2DbQSHShWFwqiLNLJ5U2fgkVbDKTGrQzCcVhmNxD",
  "key37": "2HNofPey18vSTRgVEPXqWxpGr27dEmUM8BBvqmYn5moZCtAUhffYiBoXjoCUstT9xf7BL1APt7vqCBQmAevg52PR",
  "key38": "4tUeVU5q1f792EzseB1bcwXbKpM5p2eKPTHwk35AWoodwi7NLVwbv3MxpoaaE8sq2wViv8JMKuk5CALDWpSTkK9t",
  "key39": "4VnfNUFZa4MmBSkGBPC5LeqZTtntYYoWRpt7EcNfYgPoXBzX4oHFqpZhuv1VuYJXd6ACcvWVgNkn8STHjktkRC5P",
  "key40": "2aCxCw2KsWP2KLM8sYpj23gwb7YKqttGBgku6J9F51Z3J5byHavpc8k2jN9zpnQJXhpDN4gRsUwQEmbTmd1oSga7",
  "key41": "5z6LLqyxU2YBoRFaH4gqiS6pWv7rMJr87ReHYypGQxDSZZkReFyzm7TFcSritPyVNhdrJvTCyxz8raevCbRmbNNo",
  "key42": "2Ae4XCD8hMpLKakjrPBJVquzqE1vBrzNYEef7uJkbw2ok2P6tKEnJVrYSRTmccxefU5vRbjQ4dFFSLr6KNgVJaJE",
  "key43": "5d2v3oZdedwkcnbQP3TuvKaHExyxq3nc2TQRuowKu7zB6AtbgatZhUJpKZ2qKPN6BenNrmPLva6zVoDGJbTMW7hi",
  "key44": "3ckrh2Ck8KPS8guwWiyEASbUTGhBG1UBFx7eApSB18upPhJjxXqaveyr7mhtH3QUKBfq5VkfT7FxGSxff5Pxo4vH",
  "key45": "3zYQ8b6LH1UpZnxp1eA6k4aMRSc88FY7ReCWHcDEXRR4HYkBm5kcFEMX5SBKyj3VW791ygLG6sH8q5NGtfKKRLfa",
  "key46": "4UZrpY4shMf7igog5ajDbiDYmoyopFUuCbAwDb2MRmZKbonhB8o39uB1346e2uHmf5seUfCyXv92rHtT2LUeMTPx",
  "key47": "5T9Rtd73U93fbWMhwmQYNE8sUmzUPbsk81ctspXDbPSTwWSsbvfWtcug4zBkd3QMHQ8eCYituohA97w3KYfJR4Ys",
  "key48": "559ZmaZSXge7comNKTpn6k6om3T6wpd4iP9CQMXw4r62y9CsaKnHCszxLYdcvKrYZdw8LWAvxuV4vDm32vaTccs7"
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
