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
    "3r48oGR5XWzrwoL3dnMAfo2rqWhQL15kAuYZNuiKPiaLDUHmiKgz2FQ9FcZrhbJrvGx78ayY43cAQVSzLeDdTznz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LFnJ3W582PJvDfSrGMaC5itdVvdFAp86JG2SjNCBqEpJTmhRdiSno3HZ7HzLGUtxxR1k7cqXxpJmHgSWG5hmwe",
  "key1": "4G5s4vvZzTTSZSq2mAGYX6QGozrco1nYWy3nT3W4HPTEdpPtBoAj8RkpqrNtmwJEQ75S3MozRTb5uV28WPSmMUZM",
  "key2": "3FgSzDP1DMu1kuSa5YpEWNQfbh75zScMPhAeqkDbXyC9V88i23tuYj3sjSRoeWHLhve6Kk5YjEW7ZcT5kuLQPK3j",
  "key3": "468jyRbYVG9ZhxXh5oXHtmCZsqmWB55UpGS3wGYHfdkniVodoEKvY4DGmae9hLWcc5kqMAu9yBvXvPrvtZ9u4X3y",
  "key4": "RTffdcgaEaXrEwKSmyB9ypHknm6kcyntxYJX5kzxmThU5P4vRVVfXb82pSkN2VjJ8z3bMF6WnDPuAQAuaPSw4bc",
  "key5": "3tznTDfXjqokBKuA7LNpSJaUAag5QLTTdq4zYsqSpBtG5NMNQ3D3Gx5WisNoWNGBJnDdbWRtD3AB4DMEae4yg2Q",
  "key6": "K8CbV1B3uRYtWWa3gtF2c36KPmGLJETnXkPDoWGgcS2CGhmJjKfTBaQSrHiWPgCLbWSAhNyp5RRV2XTrALpLqFZ",
  "key7": "2iANCa7FXXrH38YaXEmUEvUsiBvan164YFY41K4JuBX9eXjcNGe1MjbGq1b78MSP95A58ZMbhgEmDS7MyEXq7zED",
  "key8": "4vpbJcGDZReKdcya9Wnt2f3gGFAvWmWYz5RDHGxe13TeXZ1CxuGtKeQzU9DWEqCdWdHdZ3LYNLcJgfMNARwCweZj",
  "key9": "p5NpUgYLC36qnaZyBFHGDaSmLvhpihBW3QFfx6VoyDFCsy6vEUb4DUAcwhSuZPD8RFivc7mqLD4iWJ1zETUQ7oY",
  "key10": "3FuZtLomrQW6VxD41VDpYPfa1XLsN8u4xzydiey5DThVtXcd5LLKx9b7JGrrWderTA946tcMuyotMM4iHDKuzo8g",
  "key11": "HPu7xLecPxtEfjUC4snBdd45JprU9QtNfodx4FKkUdnZY8ojDVscjbi9ZR8XLhV2oekd4yLPg9sjCDAPMQes91s",
  "key12": "3QwbwF3CtxfioTcaf2VAEA3K9t79sydM9DTAmjNxNd3c8jDCkh9oE9byxoVmqqugtiJpm5MA5JhgoqZHUWJScPti",
  "key13": "dDwmzo5AeoFTobJcAST1dqoBbx8K5ena4ZoqYxFar1TDN2eGqZL51U1ufYuy3JY17W8Y6qY88D7m824F4yrhR56",
  "key14": "2fL5gr7wSyA7oU4W5J5i1pcDgMfccWNwTBg4YZ8f5q366JNzPxzCSspFscTxGzZQ5nC9fsCZwWahAo1dWS18JTCw",
  "key15": "wG8ZoYQfQRhV5rJQUxBa1BRGAyBrXrZnkYArGJtQmKdTabPsjVq5DHQLyBtPhPxF42uPKCw2HjrL5hiB7QPp6Z8",
  "key16": "35wfDW7NERobcF7jeQ2sNuHTZACyqNu2wQkX5LFTRzULtKJNvMm9EBiFXkdbXCBDzm4v76svLUZZwQbCBz5sR1r5",
  "key17": "2Hq9KP3vZL4FTQX6A83fH9NtXHiGtXLmLHxopbUwoiyKrFt71srgkLFBvtSyYcQYrZ7QiZZuxjJ94a7v3c8ubJfV",
  "key18": "ZtAjstSUridvM8jxF994J3ZxmvKNjyKLsyZfUgrUMDCHtaKrXwfmD4FtVuKSYytSkXTWzUrPHQG4nRsnJt4zWPP",
  "key19": "5qMLVKEyZekYuY6JmKt5yHyiomtkPEvDD5YCn5brzRB57fA5J8GJRCbmViJPqhBpssWJYbmPvp7aoBgnzs4yaHKN",
  "key20": "5hB2HxHzws8mjAvkpWAfNJyxaRYz8PKwQWHchFky5MnD1Sywd6gMrm99FrdveHbC7qwsVe9qWGE7ErCHaAAut8DZ",
  "key21": "5MmAR1gwao9BsKH8kYXpPTZUWm5xw3sWhPxZbmCxncJ42o5Rbqsn3oM1HbwMyVU9tA8FHcTQ5S2EdE7vsfNiNJqt",
  "key22": "5HeCakEyDXJXaeQg3SMNQgrnKsptTahJXjJGYe27f2sqZeWbWfwDwBCMnS5m9151Tstdw5748MGDsc2we6AeGNn1",
  "key23": "2ptXLyHHgxQRjGzy519AoRvFiQDCwKdRLZVFp8FbCkkcnvUyyd9t2MCLxNDDVD4XMvZ7PckFYK9dgihFf2Z7cwMb",
  "key24": "64dGKecqnvkhrRSzt2vRTC2zc9LAhKubJ8b8LcBREhqvCwMNj3An72nvgRugxMVox1AnKDvrHrykYxB6FcY4zG4d",
  "key25": "DH7bwEG1AY4RW6GQTXvY4EDRdrRgj4sB7QENwE5y6afQX6RmcUm4tok1CqczDxPfV7ZiBhUqz6ycWt19TNuVBqi",
  "key26": "2hb6Skp93hm5kktZXdHE8D9SGpNc1ZRh1ouZXsMZiSj7takZLhH6RCg2sxGv69xxp2DQKMkMuBY5XxXsE9rzqVLJ",
  "key27": "bo83WxMWPEAf34N2ABKiPPS4tAjRb5tYidVyjwhF5hPUiwD1MbKvfiPCJUDzPStcjAb6B6SJqk1GgEbvjWHRgA2",
  "key28": "2Pt62HvtNgtaUW8bp7UEZM8bY8kbjGFUzjJTcULG3TPV758cHZLK2M5jdiRfBBeMyJSZJXS57mtY41Q4KZoLWdUj",
  "key29": "5LkU1Uj7ycprBMGarDQHFm1nnw9oDH9ChM149zBYNQYWYsLbuVp4ohfyXUqCBW5CZUiuC8h9hMNJyFwqxTrzMsU9",
  "key30": "63S7ZARZmQtPMm4Js8V9xxBm6tao4JeR3Jsxqiix1toeETrxioxc3KEaSQU9wPLyNZBMtu8eispFtxSd78b3rpmX",
  "key31": "52NiLTdbiWFaS8P8rfWYj9MdqkUK5xofWSCsecVrLQ1wayPh26Em76AWvvuUtsoXQBF1ycb4eTipBE9ct6A9WvGL",
  "key32": "3sGuA2VTVdDhbpCjQnfcUh6PrnEdFAyDkFrxoFd2HcDSG3nUp5SfEedeWpZzbkyYTXerfgX3TvMc3kG1inEL3ozD",
  "key33": "YD7De9ZNHMXi9kex1ashsSSvSdmfApLJ5qQaFeRNoxK9RfLVDgZhyj4UUEbXm6Th6z8A22mbQ6dvPhYwnoHeyHF",
  "key34": "4GTtmtZTCNb54MRELX8ByXckS6a24yFYAf21NoDBcHiWkHCPj6EdvicsLyG3schQiZPtWztSz9cyoBVN7qod3VZu",
  "key35": "4Y2q7DWrTVtkYMiyavPxbgJfCdG5AXQsPhkNbUqrfr3YVG7Sa4hzSDCULqdNTFVf3HdaBUm1co1znuoDAYscjqpg",
  "key36": "S8tRgFCAU3g8Y7hJvB7G6eaQWMcboKZ5CXr83GxCzxb23AA8VuQwkzLM391iqZ8gPwx27hXEEG1XJBqHEwkzroL",
  "key37": "5eiSQpnKk2x2r14hF2CqVLWuxJEuWDphDAfFyRAiPceFWKKT4exL3WmnMVGefkhCBA1Kp3ZEU3NgtSLHaHCUjFK5",
  "key38": "nVyvJpVDveg5r9y6bwmS5bweu2RyA4KgpPSqCMvRk89PdMiXHpJfjV7jdTtP5mWQGqMxJzBtYBebZVVwUxzZfAU",
  "key39": "3Bj13PcXb7qNCP49hZecVukxcFhVahKQonyw3KFL5C6rfhHs5wbNtfXCs3eTjhGWTKmPY8w59bFKjSzCF2z9bV4S",
  "key40": "4frM3viAPdGAPtYUuxoVzVprr4o16H8hLQsVM4tYLgmpX8LV7htXviKZZYFhyw7DWDfG2aLcDqAqJxRkR8Ai7aif",
  "key41": "2DpV3VydBSTG5YcXTmomq4TDM2SfTP7Dxdo1QP9y8jAeAtCYgycgCFme9jq7LE8W2y5SnNy32jQKKMs5NHGeGgm7",
  "key42": "3fvgpgZrMqsdq1KFdAeYeaxUHxAbeMXebRybv4aQCCbJ2B76bVxvYRGkhygr8kucab4dYum8RRdZf4gV5gDt2kyr",
  "key43": "27ZrSv25W5K7QbgXNm3BnUicmgzRMpwxBcGzEmhHVbmk9ian4MBGWt7XomFsV6hZGi5AAQUzD3m69AjnjagXqUMZ",
  "key44": "3Tw3CTrAkVqGUVFYaDqhgqyvghNTsqidmmd8Re3ofyEvFXsyF5R5SsU85FGJjsFXZ77RAEA4q4d3cZnyR1MYMdUr"
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
