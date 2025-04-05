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
    "2U8jwNhdxLtrY1NyMpaKCruZGcA9cpQPkbi3U8ggmNonFoHgaksxh29deRHqJz3XpinBpieKLsomuxRCQZMDn3vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMGyLeHjA6Nc3NMh6Jfr4L4yu5gP9wxzLLcoQRkSYpn6SQxFw6oKJy1o6SCz2o4xhzmK9tUSKRVPpQQpLVVMS8b",
  "key1": "5BzhVn8Bn4RpqfDSt9GLkJ2wB5qWdBfkPcAKpz7gP3WagdosduT41azi68D5NcCEGVcT9FHn67r59eMr886Ex9hU",
  "key2": "MTyfWvtvCPZyni1jAP7yKbcasgMzygbpp2d5yM9RoS2A8avhE3DZrVGHZBf6t9NhAcRvcArhnt3vLqqhhyDneLQ",
  "key3": "5ZCzVD6gNFuroPNVudt4VJUhxHNVA8NW6oVHjzMB88hDoUF963SqtH3xzTrTsgxpcD5LTgCGMVH43ChDY2FUGhcS",
  "key4": "3eiXFxovBFS9ccmyxHR8iw5wQo4YRtdxVuR7kFcoY1vtDTxQ6AVfAyomNDdh1s7MCX297Nbi4m1HseWZsJyYGMnY",
  "key5": "28NbXkyuRS6bBGGN6cxTAjUJq11Kb3KDFY5Bzt1Y6d6GXjXmTQpqJjfKG4JYjoxGAezoXfMDvmnQuNLWshbJdNPp",
  "key6": "5S39NNhB7ku2kupybbMPD588rmznqGrZq7NSuo9sm5YsjGG1mCieYbQzqULhorsDbWzBzF8gJW2tsshPyDUxphQs",
  "key7": "2aHyirgFZmBzbJHd8xEQeZihBxUZMryvQtjZcKo5rq9AhLwVHNth7nVWCgEevXH2nkLzTVb8LuL3MARd63hgGQHf",
  "key8": "9GZ5M9EcvTqjD7iNJKoo5VsQQqUWrqZzNcPiwfdfoLCLWykGPXuUtMX1a8zMFLMpbFQQv21X9WDPSsZPU9bHSYT",
  "key9": "3BFnN2YYh7NjaNgVvdFAMMKzMabw3Htn9fD6eCQpmuoCpxC2gb2KuShVtCh2jCMvAvCBkUPy5tWnYAB8FyFTp5fX",
  "key10": "3nvHWS723MF89MLUaMTbMJZCiDoPB6oernpaufVWFXaNsJCpzc3XCVg151S5pDf72kV9TwzqFC6KmBTWJ9vYTU3Z",
  "key11": "4JcpQwksDjsz3pr4SBQjFV3AKFjNQjCMM8awz5U13Y6i99Daa5vwo5NdKpBAVvbp39haBcW3xxmq8CTxWoyGhEwE",
  "key12": "3Tj5QwMTVMZCK7szS43Myt7wN3JPNJfSVBChQSoS7zmu4jBxR89cgvg3q6DbbGEwYZA6mXPJ4XivHNf4kbt9wvJ9",
  "key13": "2ytSSk3JrJiPFM6ikhCwvKXCApKCXies6YQTJC5y3CGpARGZG6fVoU2nTfFuWkrKyffGgoqqKm4qFycnNb977uBK",
  "key14": "4EJvb7oPMxuapY2ESU33k8HNtPhn3Equ79NkWZtKAfzfcvbfw62VSiTii9SpyBUM1ek3nchJCxnnY4gPKZ9Riqr7",
  "key15": "2zDxsQR36Tb4fiVPY65zDdTFFUjsTCnREu44PBFytypbSQWBxxtCwctEbNQVSg4qXRFY2JvSPiugSXSMgXk499HX",
  "key16": "5xzkJMg8ApMmp4Tbymh7r2kiiHD3tKy1nXvUhpbgiqV5VnM58TV9JdRsayFk7bayoUovPPXmGLbS1jQFq9xQnPcq",
  "key17": "5FY3WtTQgs7v1eAdT22JAPyqRmhYE6Gr9sHonE6bhLd9JYrQ9jSJMTXrzVXdSr88PkW5Pb4SmtdxPd7QeiAykwdg",
  "key18": "5ybbD38YKAJXVwj6E5GQ4L9TCm3YzNkVdPXTYTD23n13YgaDZGd8W1UZNA61XEgBdADHeh2G72jVHrgYnj5ttjs5",
  "key19": "4Ybd46Ykwguyxauc7WCfQ8s5pNxNEg3hN1Cwka2scW9NRPHacTyaDmpwVLEf5toFBBR9ZZzndh2kfrfNMu3F1jqf",
  "key20": "5z8NTZkANtuaXcZx3j5hRvpywMxwcWAFSKGVAzk7rqxFFARywzUrJ9m57uiFLuYqBVw2eR2pnJnkGQ6RBL8J8Ect",
  "key21": "JvF2UkTEsp8Uenp3p3aQp4AsH8HeWTWcmFUyzdAEJmwfTsjXApYtYQ6g18cjCEBcCh3nD23r1gg4odqQ4V3pRem",
  "key22": "4asqWL2DLQ6UscNV1Z99rpTQxC1MpfnP3bRK5fGLoixQxS5uUgN5MQ1BUKrg9bmxZUNm8dLBU6vwgG3pDwFuzYWM",
  "key23": "4gwgxvyHB62Ap2vEkdmANZMrPrxtNyNqTFRvkEsfAELdxAxdtk5KY742QyTBLQbJptZFdPV4BSrui7jrn38EKMrR",
  "key24": "5SsPsaf8dYksbVvuWzKZja1N6CzMjBiywH6VfC27rzU6UceD7zcR371LyP2jDaG21GMvE9kyZ4MXWS541SdJPu7c",
  "key25": "4mxV7TCsHCZh4hgD94WDTs76g4tuc7Ek9ymhbFmp3t7KBhjTzxVyfm1FJ4mDci1VhfH9UQzpAUrVYWDE8GaFkky6",
  "key26": "4RYnHj9kMMhnHDkHfAca2zeHLMuwfZ9W3CyAeaFbwHbe7ARMN7vUHnkBbX4WTmSdBYuAzPyjSHWRMC6RoBNtPh6F",
  "key27": "5sUcpPHe6CVsURNHW3x9unKKxgyucMwNHedoc8Z4jikkRJ1rJKSPGMofCRxUsgaf7SBYCEFaFePuLfYk2d3uMV1a",
  "key28": "4Lcn82MjCsEyvnCCy4QHvE7uPRGFWYCdkieML7Co7e6rRGAz7ZWAwkxj8N5BSFCKXshSiiM7jgVoL92yhLJMbtEa",
  "key29": "2n2wP23rue5BgdaPe4bYYCseCnQZwBNqW6LfPPAfihnYnCdhrLUAseKdr4Uw3dmZB9poasuDJFi8VpPduxVRoDHp",
  "key30": "2jhowr6WnHJCecYwEAkMfbs74UbU1cABmGNZzgz6coXMZ8uRJ54U12tbqMLhpq9ctnXZCZdFNSL1AJ2Ay6ZscnUV",
  "key31": "43bA7USagrbbTLVMyg8fCaXrbeTyBZepRUhZmu57tZ4MsaQeXNbsw433uaLqNLA5mC4VUmvUndZZQEP8VbcS4fKN",
  "key32": "2sN6JXaxRnwULNvybwp7GfBPVm96Gh8TE4tKcn6Jw8yfkCUfMmZhyzkZCNwYhRvYkR9uTCBA6VLXUeMozZ1YDoJS",
  "key33": "5rGQAWDevocMGWEqU5uhttb3uDp5H8RTGHkwFCvxEEKSULNzSL2FQANp5iH3q2KUFHgew9Z282hnVsf2L3ALqgYW",
  "key34": "458HeDM9qt8Y3CHhmtWLEqPLYEDM4sdEwpCzQ5wVnvmR6vLsU4mAi8rrE6DCnRV6GJeFxdebkryzmM47DXmLGkWm",
  "key35": "3k8pNeStu8Y98dLg5yz6iXjf9bqiyWFFQHqMvQQWdyrcRyshk4m1ZWYDGu2R3nrpJjb3joNvrd8sE7wV2giH3DGy",
  "key36": "3S66JwRsZ81oihxfgsVE4hLqhbuu4bzBaUc9wtDxsg4gba34qHF7bA6CbeiY96QMiMZtyeupDCRfWwBNhkcBFHFu",
  "key37": "3PKz7BvWKwJCPPrNxSMhLqkix8q7EYsUnkhrKUYpdnUZN1f95Z7HM6Aizr4xfwAfg5ARXk6GmoNXhbUciquhi9SB",
  "key38": "3MuWEPLm3ziLSdKjs1DJrahQM89F2863NiS89fxPjxoJbqzH8mSgykGUfgftfGh9hB134woytsmCXVK5BFD1Focq",
  "key39": "4YE378aXa1c4rpbQVVdpGVLBru4G8rrdZtZ6jmcTGSDUVfHXXPJgoNj4u4ZFQo2gNxeCz3FqB7E6SkQarQqZyWfx",
  "key40": "5UmTPqL8C8dPh6of3UsfKfN8BaRozF19GjPrekDqypnKmhJ9osKGgUwu2RcNxnFjQ2w6ftmTWp2AgEAxHLBzPvqU",
  "key41": "3UambZbPpG7VSSTvPWorGuq4LzkFZSu63gM2v6TtG7qe98gGZzHu7oRfYfizivi7MAwDvQ8PRKSQY7SS3R72ChLV",
  "key42": "2CMVF2eofsVFEGCeYWbqykt3845gy3fRdmLaYNrgBxSUL2MFEXdfaaWohVS7Fp1bvHsdYqYv9Vfh86FfMejSA5uN",
  "key43": "c8FhGHL42zNsgDcibQsaVQFwNJT5yaUNQYFN1a4yxwHmYaEZKDJhQzGkntRKcB9auBa2URz1zPEffPVrbXvCKhR",
  "key44": "2rSWS2KB4V2tGgGb7svSwPxFQfPB4VXNy8Q9Rozzx92adeeAqHVDrtLGQAg2sP8JJpSd9qYoFtRr5QdVEfpKDjV4",
  "key45": "7xDEeJwDaqhMTtavZArydAypzmjYG2sp6WgzUxxNoV47k1wFRL9312H3EetwjVmVojkzNoPLgjQe51egbv4o7z4",
  "key46": "4eM8gmTv9kA3Wh7P2daN8FHmznoGTP3HCHM4uMHWjPqePK2XuaiUEcZ9wo1we8VTpytbuRE6xDSaTzHMnWk7JbLv",
  "key47": "3yAytswHUHGEr2hcpKWJ5zMCVdsnfFBmtU1rSuoNnnRHo64EbZMnVPCQr74kPaPL8HWcWKhZPfVGsjvVDijdLPKk",
  "key48": "5EQDTzzzzMToL8JeAjRrTTS4ryn18tfrbtBQdaGi7Fr6iwsAgzAjWJYpZ5jUVohPZF2TH49tPVbstUTprLHun11G",
  "key49": "2WtSzGxDc6WMi1ymkUCF1R6yUuWxm9AVfZPVWRorhRwsZ9QM561cNjZicHZARtwrHPSxNAKtGnsatKcwQHWWC9yz"
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
