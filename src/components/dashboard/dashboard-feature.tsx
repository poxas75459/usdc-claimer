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
    "3XqJ41KEKq73FdZNF3fpLaw4JTQfCMcv1nMjCXgwA8e4a7hgVYSMGVjyt2CZJ9NdhgUnnAqu5jEZxke7b3PNS137"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjdwoBWM8S5NpyQojw9NHdnKQAUMLZNyxf5TUSgrFm8T24jAspnNG6s3AtEeXTzBL5TkEERUb7FUgan1o3yZB5N",
  "key1": "2T1PVfg4gdydRUbGz6umZnJgedQgayMe9RG8vQ7f3ZFtaBLYt9w5pCvycWix1aAht1Gbc7R9a28iFf2MiCSGL1UG",
  "key2": "pKLXUPjSewjcNn3kEdBrUsEp2ojTEa9xbdrA49M3GnYAzhPPQwTFLHU76F6dcPNgLdFrqGxA86dbyanXTkNeo7k",
  "key3": "54DJp6nGDF2EZeGTT2vEGEg83rv6qYA5QxfbeRgBQWx3QCdpCuVQS59K5dygyu5tAoGhxNKsKa2bMaVMuL6xpBH",
  "key4": "45oW8nU5LvtP2GbASzCzAiSVmNy2WstWVg3cirEPi8yuDH5PppRA1oBxhKeKEb2QdFxjqvvosPh9HmksHgbfb5gq",
  "key5": "21Wbe3kKkC3peP3vkLGPoNFNEfhDK9aBWZFx3WNTR6QNVK38NCW9ySsqSWZxbeoLuA5LkmKQNcH7uaV8V1v9Dxqz",
  "key6": "2VyChQggy7zBJHv57rdKBkugV1yH9yUXEbhhoode5hhxjywueW2Ac5tjvbZUhMkVehqbSAvdEYKkQgxLba89uZos",
  "key7": "SD4PmGBLpbMpBAYM2xxPAbrNPLyQKFyk2nHXU9UkpDaFava6YZnpxGkD8y54dZvbDz8zHipvVKBG3Pqdgqaubzs",
  "key8": "VYPY13ZeurNDrcJp7au5r2FrjDPGPZw1k6NY8e7ZuU34UnAyKeF6tFaRk2Nmng1bnvPLDX3n7AjNbyBhvLyJSaR",
  "key9": "4iYitzKMBhsyzcummDRLhi5zSc9wEKQbrwCYfhECdd2w6vVfNLWLpQueUaqvK4Cbygcxe45ZAoDTAPscaYSgeeHQ",
  "key10": "5oEh4xViYEg71WLEkRNpMbFNrsw7KpqJg99dbgErNF4BFpSMY2DfUwiCotmVnRtTrWXzH9dQoZ6JUt2gUBmiAKi5",
  "key11": "4iwEeyNy9RtqjL7KKT1YyYCEbZAjkz8MYgvh79KyED3WX2c794T1Ddu1pWMNgizQh1suZJEBv5TphaASiszLfF8k",
  "key12": "4H5Hr6xvFSVfEY9emVLaRC5eRKUfXFopmkTzoEV3MzDTZHK2eqPGPuoYwbRqc5wnaPHZhh9qGL2CKhxXgQrWSX24",
  "key13": "3kgsmdAyXA74VsYV15aFMXeyPrPWA33HFzDtU9z6wkJawo3XHdKNcP1UX7ybS9ARmqsy42YjjVqHLKBRS16sZsA9",
  "key14": "VsKUhuw69xszK5aTkXS53Tmj2QBkaqJMYrxda6tCVwDVv7TjpxJuPfaDGSQisuydSTRLicrUr8LoPPRzfezNLak",
  "key15": "48CEt36gvy4WHiWkumRpqMqmmDCb94f5d8kMvDpsL9Uzz7MDRNbg8NiEB7uGDz9pHcdmUYigYNm8BmKwCcBr1Z5V",
  "key16": "3YkZKzgyWdrLc2YFS8CeqSgHXqJKquus4CbUCdJGN9BfLfoLqeChddXu6LVkxaHn8cCRNrxrCyvJzQ8ntY6CjLez",
  "key17": "4z7XryFCnwr1wkPMMLbJLBs95H542UsmRDJL1DPackGPYz4DswMbBiGZik33ArVbrAax5VqGMJ7vqdNoU2oMUpqd",
  "key18": "5c1r6woAPhffQ2gKrTpCC3rXASa2tvepUigSRVtfTA1jPuGtpwE5W7XT6iTDZ1dzzohEcc6iYzHFYsDvm2mjnDmN",
  "key19": "3YptGSkZ2ojvBEvF8RJqyBhixUwwy8c8zDDhYamu9gAMdsC52AbYUftujaEwKw5VEtQw75tpZfEDTEqp7m6NDX9H",
  "key20": "UxXFT5zNra5susUN1gWMMmY4USdgqgpDf3iHqF4n3MmCKW1DmTEceCkwSiwLPek63MDvdXx9T5wMvALyPsWgcdq",
  "key21": "UFtWc7E26poJBJjf3tnV3A4fTGDF4RTSmg9s9g7ZRsf6scD1u8RrnB9chHRKEt293ddHWz1jK3nXMrmko9iKhCB",
  "key22": "53nTScspuhLYo4etuVNBKTgHTi6hjdEJbiTNpSN9dpAPaDPs8KNMxEDuXjRkwKmFxmMbVcm8rYMbSE9WVVWzvu52",
  "key23": "qYVQQzAfMYdpKJkMuqCHvPStXc95JuyYUCYeXx2HNRCVfB2bi4iP6TAHVFbzQo8tzpSfcK3WuqmRzXgkxPTVBXC",
  "key24": "5voXnHPhkoHsijTtc8H6Lf9Q7WaTC1tuTFRN7XuuQc9fkVDgwDGF94f1hRqGzhgyUdhEQmj6byHLF1kyGyNTrjz",
  "key25": "3Fuj7PXHRUQjNcCeGozemeDQUWJF42Nn48AQq3vezMBCnFYyuTEeF8w1BroftbfmB29hCPcAuNLsEmpji3g6hFke",
  "key26": "3qi8dnPvqS1cHWXDzv71RuTrGBM8oSkAdZyW5zXtzsftEAYxBLUPpSEBVqgTMQAmSaYYz18P7SMaB6QD8A9SqJ1y",
  "key27": "Spq5BRSTpwrDfNr9kvFB2w7ZCpyq26TL9NXFyKT23QSYu9Di8RE4zAb1KqPw8Qr1T1xjezQhBvZRsGchXBb9rPJ",
  "key28": "3z51Sbn98fTx4BQihKKMvXTkVVipxjCX9r4TmkvwCahr5f42MnGxD9eyEMWN1VYJVPAjYd7H9HiPzgNshg9zRF1V",
  "key29": "gPSKhGSVppQCbyUAm524rMomZAnoVGMFSK2AbedgH3vphXDwZxWjsigy8EmsbQcrTiWbe3uHCiBd2GkRaXbAnbt",
  "key30": "4SS6Rt32FAXLqhPZ8bRJLRASJNMf5AeHcNdkpoQC7mv2sCGEAPCHf6LJC4t6uyG7YhuVHRjkcYnAseuSTfjUngFC",
  "key31": "4BvucnUDoEBxQK622sp7aRQfpJLMyEwHbVu7MRZNb46sUwgzKeqi6pHqVN9ZPetWsNRTFf8RcSJdqGADfoiJ7Hqd",
  "key32": "67SvQpKUZLAazQvS6MxKvSvUDgXKVaUPWX1ztGo7fjKcBJiZ6r36nPAmW73D6A8mv26yMb6ArfugsZftdCyAtNrt",
  "key33": "2XtHbBzaRpt8bDvGwpvRPdhmxvNs2ovB7wyZ4NJcznvZHNe9Vb7hZFFg6ocxmhNZfkDe1vARb2WpTTduTVxCgURT",
  "key34": "DotFECByq2FiwXJ7Fo44UP5P1p6T86XSZ8Nk3e9CkDSJbYaHyhLwqKu5u6zyRfw1Dca94hTmEe3a6wp5BcZsroT",
  "key35": "4y1nCmPa6GgA77Lt2r4ixNsfowPdfMhDPrCim7UcCcVi2E8vKQtw64kcsHXRYBjTym5KY6d4vnc7VVRYfzyoBPMi",
  "key36": "4DfbFwmcLQQSExiVtE5CA7vrwh8RLEbZdSEJxQb7UD8hZyK1CGEaPUdcdHu519v2C7tiwZb6ewqPhBARS96oCkpD",
  "key37": "8nv4X3bkZ5375Av3HkrVheYMwNFy7BjKpeDQ1sxqfrFFdXMynKdPXVHaufR38FsZXk8TXKcHwn73yihKDzZ2DBS",
  "key38": "64gyaqrPPtRKsfebCu9DxEE2ef3H2brojdT3CPX9ksDMUs9pzaD6EppqH2XrFSz6t65Yr2LvBJELaisqtHReQCd2",
  "key39": "2fi71oJYkT3dWXs8WGqraeVDjZLUXJXX5MpHxSGFRz7XM1ZJFw7ccA8TjFALw5HDtqsgrMK2FyHU2hbFXWfBrBhg",
  "key40": "5hMWhcXx72mifn45xhnkHXGGXJq1E6aAYBLTXQg4ioWSh491CE4mhNdtvwByjz9kGDLh9QWkCBDE9RibG9qcbeBH",
  "key41": "4ZEpakZpsZWf6mujieL7xYSZhEHt41rZpet5KToNq45Q4J5o6JoK8HNS92DLp86nXJr3PTPUfRD5rcd35tkHsM3f",
  "key42": "44q8FgfqbZUuWEd9AXzru2oFbgaiZnSEKCvq1MeSRKfMa2EfjLj3q1w5cX2Exd5GkbsoGHmSfdrXwCEYzLV2xSBc",
  "key43": "4TpcPfsxBN7fCNXwXHD7X19LoLHjtq5U4p5gXuv3T8ro1CDCqJpLuPDhet8zWjK2wZ5tQnK1P9YgXoY2wEw3kXC1",
  "key44": "efy4XMTkdXt9pVbvJ4uymiiVNHLyVbaGmovPBrd62mmUJUDTfJjmc6Nxg6KLAxeEuxSbsUSEFogAi6pSqo4ex9K"
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
