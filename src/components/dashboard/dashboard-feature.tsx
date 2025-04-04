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
    "59BsLNgRnvSsVuAAo6t6TwSgnEhPUaEgkruLi5Xn5Nr3QyhvhGeTBq7N1b9DPGHQwTJKqHj4RtShmiGqakVFDciV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9H3Xmkb58xvsPKDMhx3EPehZ8k5pJ2y5SLvLPHm81rf1wsPYtU3iHZqoQCVKDDGEeDz5uFDKmoZWRUwNLkDKEy",
  "key1": "5JG6C4tcRHBBzjhN8byTQyj2ppf76MSyRTGLHTrVTdWBU39RkFNAvF9GXf4nWUz2xPgcTxMT9cSZ7GAeF4jiMvCR",
  "key2": "2mUtvnEN7a8jgK5uqAYhLS922Wn3sEckTUYmHXM49aKaa8dETJz5wMocLjFymTQhwgDwnApTS61sWLCx5DBm5Aig",
  "key3": "3vhMBupH3gL2yMmQUG7FRVERJ1UQv8apeRN1ZddnfL57mw54sdpZG3tyi9TyevejbZyi9hWVWCkJPCbLqdM1mdhr",
  "key4": "5N1GEtgZfRciUSoyEFqnoFfm76GbY4uvxUa3aVSuwMHQwccQP5TeB6LPSiKtkw9cys6ByKYtdvCtpEPYHtGVcAF8",
  "key5": "23U6dNsR1ibZpSdwky4YWJubcKN2gudA9H8wiHrdWFJeq1YXT9AgncTbmxTDs4n57UoEMcEjmv8AKeckeTJmuFH3",
  "key6": "5gVxi9k17MwHaAENmMpYuRXrrGwF7npdGYuif4SJr6NrUyL3X82BFDSxe6rJBXWxUigqxmCXcGUjQ18XakhPGo7H",
  "key7": "26VM5KuVb5i14qgm1LydpFXppQoDHkKxSq7mdEGv3yqYi3Qja45gSg8iVcnQbq4EjmcPUvCPSQD6muGiRuCnw3Fb",
  "key8": "56d3dcDd1tQXEt6j55E3bGR2WSGTRgfP31j2gGunZ2diSE6pmJqrpNxFvjYbnhe5KaNzeBWbvRvB55vDqzfTfMTu",
  "key9": "3jQb6TQQAcUkoXFFQoCDnPTCkCYW4RwkkdGBZ1uu6CGfmK7vLiYCzXtK1Kb2fQ9hgx9Kj8zzR6gusod7HbM1iDbA",
  "key10": "5r9DSpYtUruyfxbLp7oxdFmyZ7orX8YVQmim4DMyeuGmifoj1vr4jJFzCuTpMEi64zPs2dLghRUPnmnPE5e23bEt",
  "key11": "3fZ7q3rWqTVRPEyqYLRRKH6Di2Goj63HdfCANkQeXVkaCZqCsWTDd5FoqmUiGqTujVkiWYQDv2jdnzX3ZKPqEWw7",
  "key12": "5877XLQ97RxftA3kCqMSnqYmiEkCyySNeNsTCsQgSyGYez1KtnN8nJgnAccACW1iqizLkrnYcokBvtusWtNgGSvz",
  "key13": "LWv1yHtm3a56bBXYovtjwxAqjayidZ7L2Ze7PzzgBa5o3ka8SbixffHsiSDjcRvUqmQVFndxq3C6sDcAhyXZLvQ",
  "key14": "5fUJpUgtGxo9R6dxykDp32eWJ9zPUogu7bAukM8HmaZzCxigkbHbMMMi6WXEGJYBJtZEPmhwgw3u1secyrWZ3qr",
  "key15": "4pFSCUegmCSWhyfJY3gbAZSjTL343AD9Ya1oLLSF2D2LkHMZtfDQ4sgjXBBVxgFwkut19e6gdfVaVXiepGAqZ1Vz",
  "key16": "cQeun8qXBH9Ekxcvw44hY3S4XXei4KVhm3aAUG6ULcf6k27jXoT2JbXkcdLJe12mavKkqoyRK35DrYTTrBLyra8",
  "key17": "2CegfsjbFpqd7uqNhS2zC1H3rBJRKs6K7aeQ2NYWKcgd129mwM7HVQeBeCX3faiCrDLqyCgCFxaszUeEQzBGvkNe",
  "key18": "3xjMBkMEQDU5gcqpj2Q8drqom5CvVCdqidvgMSVF5hjM2gRucPVL3AJ8x9QqQy6ctJGZS2euJuAoJvpg187tG7VM",
  "key19": "3ztYnm3XtiqCBgNAEJkPrhD7dawBpPMsS5Af6vjXeVdsXKJshfCxa6bzNGncnMxnoQLvRtGnNn9hRLut7GFWMaEM",
  "key20": "3pnREvAKFn9p5MvcKhhu9TerZTWrNwS1jVhJvHGRTEbP3mqTSfwYCyN7avgxZm3KFdKeQEcAAnf2ZFUWVg1gs7KW",
  "key21": "4xCDGnvBNfXeuWprJWqrNREtDY7LgFJPKe9Ls8WLADC7LP5XCdceUTL3wbaZwGs1MFVM49QFaxZhwz4aUWZgPMSB",
  "key22": "3rkrR5Y4zNggy882bKFDCuvbser77xaDmkenUgAmSqXzAKPaL7yZYzVNVqsXMyueSwG8eguJE7J39nBzvnStnRTr",
  "key23": "56WZLmD92inzb9wqCJeydfqsVL772AieM2cy5uojJV8eDPxzV2Aj5NtD3W3PgNAdXZsWn3ejPyhf6bY7QHD6M6S3",
  "key24": "58m2QmFuXY9VVeRSCqbbCmDpAiL6UsfgWVrv8AwfR8cCjT82giaMrohMas4SSwrvwSsZFxtyv8op2rnDm1TYuf51",
  "key25": "XS2TrxhXLfJrFPgnVE1V1ahSZsPCVePQZ9DSj6b8Pb8iNNg3iCgkfVqmYbm8kWxejKD8xWhyg7P2Pf47CggYWwK",
  "key26": "2N9QPKDBGiLZogekKLdfizhd3ZKf6qUgf9pbuqLKX3ifwpCqLtUqJ4dJXE71cFgHYQfZAjYXgw9BUxLKaMPq1VLp",
  "key27": "txKZoRksNP3pmqqE66jUdTqFuPacHVSSSNedsr34F34yi1w1gbexMMcCvqKypu5PnntUGtWjWeuxC3EWp9c4csP",
  "key28": "45TjWx9jgcM1fEMsc61ek1h7byreGxVrsp6KeFeo6D89Bg7zTiME4z71cPd7DyD1q1KQySs4U8CqH7NNRVByanRM",
  "key29": "5UDknkQv2sdVLY7PphDtQXysiaXriN8QrjeLz81r2iEomcLkevhWWmjADKnRpk9cuSqX6y6QTzczRa9Jsh1jkfSr",
  "key30": "2hxT16xUXYivE8CbLUKtQYtFLb4GZdcrkDKdWXhntmV7zkp6X3kZKY1EBTarqD1i72FRDy2VJSrezTxUTzE6VP81",
  "key31": "58TBAmWVKCj6kbnpCoTdHBNTeR53Psbq7hfHxoPNywXN2VuokpeaLSsjiabQDr6eSzWyjUqnprS3o3XxJtQiH6f8",
  "key32": "B1iGrR451ez79QBnSgAXCssqm9mAeLDg4uEPUCxSEkFcraqKad3cjJfZ3FcYokoUdKFEdjg6ryF6jqRwxdHLru9",
  "key33": "29SBSWfaLgU2tW323AY4STAucHkckZS9L4rrApLP8ua4Seg5ypcTgFSV6bVuzpKW61tEacpPiNXXp39guDaf3ih9",
  "key34": "5vT58shNy72PpjRo9brTwn2ZtyFmEsAGNwfZqswpQzjG3rrxE552EmytCJ988anurXYcABisXCw7K4zd8dYq9jNZ",
  "key35": "jTLZuTm9XcMTj4R7pTZUWrKQmsP5tTUwPh5qTtTHzfwcLEiNZPBdrRVggMamQWZ6pU49iFEeJpehUqYXhUiReFe",
  "key36": "4KwZXf3uc36HDFXpu2wbmvWqmXRgkg28Ze4aefaTv7cML9k1t19Hz2sPAjJvoCDZHTC9485pzMb5QrUztaKrnSvD",
  "key37": "4xe9tppaToLwY5NhoMCSS75vALZxcAskEkdmXfkGcYnKWPjhSsbrRcfc1T8nsshohNfijY1GyWHTB3TZ7FEhCzbJ",
  "key38": "2u7mWPJjuVGkS9vLsumGan9HWkBmM6FNfWEuhnQHPh9DtXxpbKX6sUEiRScrfn5ykCNdW22RgA4Swn3QPWbxgH6S",
  "key39": "3vyc9RTQyYUBF2Gxh5NkLGDecg3cTRZhjaqqoAtUFo931bvpECKAL8xo3LKEWtPnX9QQpyQkMvNaPEK3KBz2iBtb",
  "key40": "5neyCkwf8oNmmkWihi5NZhutphNeQAazwbaCqfsV8fanAwuQvz7EwCdqKS26tVbvtfZMJPirf36Z3j2PArhTaLfS",
  "key41": "ZAFkPzzC3KeSNkD2i2yHgCqJvMThSbNQhgUk3KwoY3x7ztefdb4KVxfQzKcC9vCTwrDqvCCEwYNARHz9kvyYWtv",
  "key42": "4SPnJw6FEn9NJa1oUuaZRdaD9J5Z68gsb1K87JAJ45QoqoiG1HyXpvTBhbmudYCxRSizF1P8KE5XASvD6awMUpet"
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
