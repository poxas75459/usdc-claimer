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
    "2hsDyf6bvHjBYEpS2XFNPuZRdx6ztCVPUYLovi7e52oC4itHt4Axvgoek1t4XN66mTHU9xw5pfqzRXY2w1goLvpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625KEEyrtB4bwhpBrDyRBj8tPcA1VRmESEyS6P8QQi2E3tJzziyZGe9UvwiAkm7LAHJ8GzYhfB8Str3gbpeQ6WqP",
  "key1": "2myyQ8BZRXGynaa7U9iJaG32X7t2LytmTresRLsPaUcKC1LK6trjBD1FnzfNyFJEdcESdeSZeD9Tz15ybx5TJrxb",
  "key2": "2f3fv7nAF6WLavEm8dpQrBwW7StqFLLnDanVAMRVCztzZof3b6uU8TDEpN1AXfosHUvHPgH6cv2CMQiDRQQ6bh71",
  "key3": "2QnoBbgJDePQX6wTZDyrJQMZ4JEErYDjabC28WtBUsD2G7XHRyha6FYeA9S5qfB554EqR9bpA7WFECZYVHgQ64K4",
  "key4": "3SwyA8FEHfQQuVKPMNVyn8Rzo9kWETq1UofZvb4DkSYruehoVSpG64gBo5EGTm8U8CLqiqKczjXsNup2513gV7Fn",
  "key5": "6vo6aGmYkmkpBazGtXbT2uJ77QpSN8S72eKrVW34LAiuaM8NExjwPNTXhq2VPpsxCK9QAq7SQXHc1vFi7Vc2qCS",
  "key6": "3eBpPEzTeK7MxaUEcE7cuN42PQTxNE13NsG46NoVPWZjWRWA5wS47mbBng2Y8sfFoRznAJJqxfMXanKpE6B6GLJB",
  "key7": "2SrDDwnpE5hyEPg22AF8ZZ3oQVZCQ6vJNxa3EQbnAp4GTeyp6XfmpkmJd5zsFqPuqYwEitLiz47gzzrNE1nZQ5iG",
  "key8": "5KmRF49UwNe29KZ1zn7oMUiacfJ4BVmueBXjdT4e4sZSsANtrwbQQug3mzFeXkS9c2KWdkS3Fwidz8HUJEdJh5si",
  "key9": "4rgzG3sYhhJcSRc9chKHW6bkxyfPcWGmbzmZTGZuuPTwRWucFAMH2k6CeHjktfgTHuSnur8nBAgF78ivXLXqiaYg",
  "key10": "5UKrcDWj8cMHVBt2xMxwFedohCadeNwmsnrzi2vVJdF7uiK51iRTkNMYhBqi9uwLEktEKGZpxDtZWdSnb3bnJPXT",
  "key11": "5a2U4MBqTC2evda3iaYhrNCwskCYqHSEjMyHRmtevTedmLr4nwbPJTZ3uqpVPwFgzrWNMKU616cAiviCkRXCu6vt",
  "key12": "2UJFWNsEoihEgo5vH6BtDj56z1c4RSExR32k5fHNQhx6FhNkUm4jhWntVJZ7oQwCF9QWjSEdfEKmkCGojYeCDXbH",
  "key13": "3xpMoVtXY4MFwWcjRbsk7j8LaVSGtKoRRUCHXUGUjyYXh8q8NVV8cGoqUQkhwNzxCwZYZbGco1rXJ6WhAe2RCo2d",
  "key14": "5asWPH9MmLJmfpSM9TNXKiJh5HaczyiprfiyZAB63RvUBjmckERe4xh8y3u6ppqUFdJpTzcksKT8UhfRCWMsjqCK",
  "key15": "jSKJPsTGPP3V2WYXzfLyf59ymJMM7grTPtJVSJ1gat37UbHyKZDLecnrfpsjMqgbnG3kBUcCCyaTsu4Zn5fDBxZ",
  "key16": "3TzcyDedYAu6FGgcgiUuCMVJg9oBc4NYD4RPsJcD2byVrDbDNd8qsezybZChnht5xJdNbDG8MpZgXoF19rM4HBMZ",
  "key17": "em4wDChJuFbgreHvYZjm3cv4QWcywTpmVHrFHdkUnsXqsaoDoRCD1Q4idCfyNqg238L8cyfw3KhaivZspJp42Xx",
  "key18": "4MVngQMkcynA6inJYfKTGSP7BwH7NPmMtTxKaLjmUKAsT7JSrPm9MK9num37Sk86dZxas7GXk4ddfHhHpPiSZHNE",
  "key19": "5ouQPnowuHFCLjSLjod3QgDiSozg2PT3JW413uJfB1NEtKkRHw7rZMFTcku8xJSEXCBmibNZz5KieEs9VkUwhnUA",
  "key20": "5eQWUWLCMxhA3NvkFNcm83Dt22spQozLehsmHVjHQpyR4VMGnkmVWPvmnFVwF343L59qmyAaMxUrT2SC5bTicUoi",
  "key21": "5CJ2jaQ2TRwF5ftuobPsWtiAwFpZ1suoQyqjfwJftUD4MqEmusgdy55s4ci7KRcwpn8aL7UrPb8TFpVSkRBu6dzm",
  "key22": "21gmgEdtf5fP3tRCL9eQGuvzYKBCgyQQRiNc5Nt85769aJzxoc4VCAQtm18qqCfDdYvFstzMGKXyX1uHan6xZX7z",
  "key23": "YcYuRPVdKe9Tfsexj6FPTf4LY2xwPkCnQJV1tUmP2duNLMFS2oNS8kYmCVDmTjyQBVKiVCA1wUiY38Am7sJUSW2",
  "key24": "4dt8ZsvWZKiQWpo9xUBowsxzoygfJFnYmzUFCB4hEx4pLuNzTn44MUNDTPbBNCQFh2eZqfZXHSChcEtZQEsJczSF",
  "key25": "HoGxaMJSdFjq9rn8ji6NHe8eG42nz5er8CfeSUDTESqDYTgEobLMFieQdSvA4x7tCY9WZhyWYyvNZK4nSKZU8Ut",
  "key26": "5j6R8FLDfwtrEsCnAZtsW8jatJyN8acpiieTEC86odHGKhdRMjudwq88bzKZt59bL8bnWPapLAzdaDq4MCo7epLt",
  "key27": "2iwEqgjwoqJMzLftLuR2i7yjSYXpaLC928GKfbaL76EnosU2wPBrKKVXzxGMEjK7aMjh5Ca5K5Fc9QKggSVdTFcA",
  "key28": "4W34aLicTqQv6MF1DWa1VhjDJXppDadcGmDiu8QkYAfYKzaV16aJMc8hVcLkkQPD4kMTVc7d2ffok1441QttPrVs",
  "key29": "P6hvafmyAvxAMAPvctvbQrM4UezBP8iY1MoYN7QSeSKAvvxzBiApe51K7PtGMod63Cv8FHUTv9oJjMvxJVDuY9q",
  "key30": "4xaJ7ZjvRxwuXPUvyc9o7Qa7kdCA26RZzHxskWPc91bftqXgzZ67DiGYEP4PswJW9CHSqriuciKwPwnEAkKXgmvD",
  "key31": "3wHSarxJ1PE7uxH8A8o7oq6X52qTderYHcriLegw1nW1HF1za8zYGnmvxmNeY8q4FSZGQEwTnFbCya3pKtoTmFFr",
  "key32": "5myzJGwmQEaxVwPR3p7AhBuzoHVJsJUYvHWrRhCNkxSowuNZjYw7rJWbcDfUJQd1xP6C7x1iU638j9SbMQUH1B6q",
  "key33": "48DdEDq3RBtwJGgNhzibE52hH7rxEGNoJbx1k74FzJJ4VWcEWZ9fACwPGUBnTNciDm7XYHbABGLvbpMWnvRT51jY",
  "key34": "4U7P7rK86RsaSyafz4y7HE5UyyBt3DTCiHC8TCM6rjnx3mLdrt6ZfMQThkQSWkBVsyDJvSUk5Fw8GGMaDfPeN6eE",
  "key35": "5Rb1m9LL4JXyE2vViW3kpfLrZC8iFkt3LBovNv7CuuAwL269WaQtgbtiDY2fMKKiCC8yvcT2NAydeyEn3iQ4YTSq",
  "key36": "5MgEDBBn8p8Pz69yEykDqzjr4AtEhEZqLE8ntbG8SrxZ3DdDp2ZzikKCQkxuvy32KXgGUykSDELDypL2GUrQKU5E",
  "key37": "3YDUBUKySbJviqB87eoDCvBK3guZT8jesPk7oHaBnZuZLps95Kh1mSq2XWHpg2SZQ1Lczx1rZLfpCPfVKE44tPiT",
  "key38": "1cZSdmg16vc8cx18VRkH5Ljw2yAAMko9qgshs6SFFWJVorjfLQPtFCAgpdneGp74eDmrz75X99uAKrpgGPwDMN5"
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
