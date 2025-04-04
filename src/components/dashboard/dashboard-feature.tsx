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
    "3iNko6Hx1cfGhy4r2A7gSdnGzdRbfZuTjRL7XG7M2kcnh8596y97apFAaUikjAEGDkENxwQHbLGGmn8YQTpK31cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PtLxzQ2cPiLu3hBjCUVNBkkxFemWiG131vdTvsuZLoxjEvM7gD3fhknkb5ty2F9MHWQcasEXm8uXFk5qi3K1ouf",
  "key1": "5uiy5pULwoTmFZD5ZfwrXycEXoND4kQtkwC89Uidkz2EAvsHosms3nd3vef2GtyTL8j5Xod5CnHsAEDkuftxVWRj",
  "key2": "5jwa1T8ExJvCRHChSGtxfg732gQ8pHWRfLMRffEWUw784JVovpRkBLQHQ33WYMTReY5uYUGejpzjFQ4AsU4xnr27",
  "key3": "5MKyY5TZSYkeTqwpt3Bsk3Bk2KsdU79GBc8o9VzmbEGeg8e9JUk3ofa8wjfNtKsKReq13EJaKYj5Wr3SS5yZ1Zw7",
  "key4": "4R2uwgW5tyDyDnq7ZfETRZhvNUVKjEr4nufnUgfqswL8mzBsZrN4rneYNp9TH95PteCX1jDPth2FiDkgTPHw35dg",
  "key5": "51tcRJcsZyXN1c3assDwwth8Fpx9UfcaMNaLMkXH4S3CKXP1GSxFb4QybprAquZBt4JvMxWhf8gGTgCY6y7fxB4R",
  "key6": "39zgKff3nVDCC1x2PtRyf4tnq9yR7y7HgxTygTZU2fbPP4ENsNWeGAtNBssdxY9d2zurby8CG7ea2Q8debEzpfCW",
  "key7": "5SCLbzCZDUyw6d6ZeZSS8XDZ7YzCyJEBbnkJHGv8MeFTab1DBynf2rxFtZ1RumyjZv8J6Br4qP1E9R7EQrqFYQSh",
  "key8": "4fxNz69smumTnNrfkGJxAFwYoAct9yzNfGbuT4YQtL72hZwWmwoTeZ3QDqEHbF3r9vfZuRebc1QhDsQB5kssFSAt",
  "key9": "57oF7fHq8C7sn5VMjV1KsN2kGgK7hX28271Qaae9STtQ72NENHS6w2GcaN1zi9v1C9Y4wJZvnSe5HxZtRbr5CiVJ",
  "key10": "5DMvf9kiPk1Urtij9Nxh1PcKbU5R1NUKgWQ9YSsxUP3XMGJBCxxyVANG7ZiKvPUF5zAWxNmWkX3xsN1FrV2dMVqV",
  "key11": "42Q7gY76amesVo6ZHrbtCQ6f6AebCs42i32NW9C5cR68RQkrKqvZvqWrRfgYGWkg2e2xYpZjaVPjRbgcbE4QTUkT",
  "key12": "3nQ3L7YHkMbAPWGA1D5uSDP8Diq5eQCmCTsNjsMDZt5vxSh8WGgmmiLNUfw1xs74g9dzCEDeqijFDWi4jpGJWAx6",
  "key13": "5WyQzxhLjBMrJ8EYBE4ogNFzXexWw6PWc89GrzDvhnQBqg3katiuE6i68n2H7hyQA6Kd1D15txopV923pcLQT14r",
  "key14": "uWP2zAo77noiVN14vG7d16EH4KGBzNbchxz5o1GJLSgCVyZJ2Jmv76qzBJoe1ZAmiCwnGCykUAigPf6FtfGiBGx",
  "key15": "4zYyYMSikK3jY8Sb2uRxXpL1hQLzsKjL2gqSWe5KLycunxdLFuXQ9YJGSgtdV2QNqb6RuPDkDq1UGrARYMbjKamL",
  "key16": "5GcvPDH48BnqDNv2hEDMLXXwAxxN9r2fXxpCN4owXfMRpsbbMRUjEvCcYebqCmfMQD8UJC2bnwPGpvJUvSnUy5UE",
  "key17": "RCkHaFnmFraWaYTmC1ZfGLHY9DsJS9twaxzhnKNhXCKYxjzntUW3vuE26o52L4nxQb5ch3c1NHTTuAsS2df318P",
  "key18": "5FiFv7r62LZMvFFydSpyv7QVSdPTn1CDdrznZaLPMwDDMW6i8ZBNKweLeEtjbvAUwSWTg5tRe2MHv52hMVGxHXcd",
  "key19": "5dURcVWvDeQMp1yn6AV3LdSya9a1G7p6UZm3P6WpkfpvhzBRrw9YUj9Ucq2oaxZUxgqKfTCbaBvfwGiK3UMLBBbg",
  "key20": "61ymXMMijtC5wPFFj4ys6qhtz2Lg7CLCFNQmEDPbDtK8whV93iz8obKi73mxSgztLSaGZfdcch7knYaCiLa8nwfL",
  "key21": "4ZWHuqMA1WxYxMLfVLRr7pcioxwDDHKFgaXv4U2wLx7sHPMEX5Bs2idExSMidad6TsVqk2FLhDVvgAz8e3KRGuug",
  "key22": "2dq1xLYcbcjiVbAd9j5LJ7CtYQpVSn2Ju7UdcwpHzuxxftUPUD2NKLwkoTzwJQ2SWMwriNota67bdCGZMn5A3Uru",
  "key23": "48XgkbFbqg1TdgRaJJPB4ijhpoxRZESuGtaf5evixu5LGQ4zaBoih4asNJusojut9kUKXAfNcAf3w8YT33e56ijh",
  "key24": "25nrhTwov8gj59qKbUrfw6KTtJbXJJTkiCuPPYmAbQ4eKMtff8hGk9DQr4vHmpYTCGBfz5r1BThY41HK1dWBZ7dk",
  "key25": "4XrTZKT75Zux9V6vpQ78fUKk5fiK5UEs7q2zWvMD2X8njpBoMHCvEtaUWLKA4sTMx6nVHim84XEcbQRrQGNf4Xke",
  "key26": "2yptMdRxJBf7TWNaK8EoRi16mbf8GU1XVAMj9f8iuv8eWr9J7Vq3oxPh6sQTbJCVfJB96ZhtDsWpRmnifrCb3orx",
  "key27": "3yRe7cjZGBQNTBpttNQ1LaoRyhQfwhQJ3EukjKhioXuV8EBUqLeWFW5hsfovcj6rFvEprNqV4fK16ptt5ZNuwXK5",
  "key28": "3C9tWyNQsWxdeifd3unPv7ryLpVAquxCEL3Nya2gLsSDfrCTNKKmsG33Gtsb1qitiKz9Yhb3wpVEMknCimuXQTVG",
  "key29": "3aRs3qKEpQ8LqM13YKqakyvVurAzH12RAtunUhMPc5ccG3jZCLSdPx2s4hdo7oGzVX3juxYVJxcj8LzzNvXEgnsd",
  "key30": "4BFF6JkqAZN2Dj1TNp3JXAwJEqqjkwVSB2FLN45W23ffFp7EibrQCZ9uYGR9WuAHKfk6T1M1s8auJxvVaGLGkRz7",
  "key31": "F6imK8FDwxDoYggpRXwD8qsS1F99BKwib2Uq9zdhUumh5fG3LpvWCyncH7ZCLXAM7Kyys3pNaiu4hpfwWQGusQF",
  "key32": "5EtWV9jrQFcncqZgmYSUeym7enUackh9nDHgmoGM2vfTv8bmLcyCfEc9PXPUWZ7wbz1ZWM2Bd2H5T5zqdDS9TVgH",
  "key33": "3SpWwrdvyVnfqKXrit5pFPkNTKPvp1VphCcJUt4Z1wri17CbKx1udpj2CjeiHHePe2MsNh2RN4FvXhcd4e4DCTg6",
  "key34": "3ij6GgUh5Kf22ZBofMXCQsM6DHMKfL1RnN5JidbQUBzhME4gvdSayQxu6ZZadobqxVE1z5kT6uLje8C52hEvj22D",
  "key35": "nzwHvDYtB3GeGJfivTLvupbpVJHs2kxPkpWHHqY2AHJnt8GSkfmo1kCRUCb2os6dHBa6pWrP4RSPVymsiQXSnFp",
  "key36": "xS2auZfoa5zbmqptBNc4Kz2jNkBEuQZcBcDKda169ZEWAxYdkiJDs3smMciK32qrW4KRFFHCXMNyNXvJcxQZVj3",
  "key37": "3KboK25VC8bXUAV1kGs9AwqQXFqWRqxoSwYJXNPK5kgXQ6s5UeLWKt2uYts3xSHVt4KcaMfGB7gjk6UKnk34HNQQ",
  "key38": "3xRj7Q6n19FQzeim1jKqv4i7tGbYC81i56Yn7bycZCay3rksVWU7mhkVRz5w6nLx2HR4xxxonagKdVLeXo9fGifB",
  "key39": "3yT8owtaqvwPYRCnDitQnyq91EEAiZzKFK57zbmoUto61DEbgBbUEAyikDwkzZkGZmPQmJAE9kXbsKSR7ChUVXA6",
  "key40": "5nbJgZzU7XQVuAwQyrKMSMxHPc79svxmddLS5rrQKhURhEhReZ5asrkbYTcLnyhhBrxuAw1jreXb8fPx9joy6eof",
  "key41": "4hK1mo3M4DukQhtt3Ebswf6eN2UDkQ1cDUwkqueJAcC3cjQptPFSQrN1546NJi7iC4sRyoNsWa2QY8bcGG9xWnQh",
  "key42": "28higiZMsTjFBVAnXoJzxy2otfbdSAovvYT1PScjQBPdx1V2YLbXBg8Ld9sA1ztENKVBjcUGJeLw4GoyV2GB6Dqx",
  "key43": "hZwbtgS2aQzVed6k83j5whbgyVRFY9tUwJeqm6fnkXMi8Lb3EWt43J76MHMD11FX2bFBtF2sNXqAGpe9s1gECnB",
  "key44": "2E9VWBz3CSAD2DoNb14dCvsCUX5775XmMnffpHEGxXK84fwTxAtiGbrDSqf9LRMJkuvZmUvujnomyeegKvKSwKnh",
  "key45": "2SmQMcTbL91hH2ZLQRz2LCXGuTGwf1yPosyqUa8ccUX6fSUeeHPV8jheSpRJ5xsaffeEM5PeDVgLZ8wbpkXPtWkx",
  "key46": "59ZgYhHitYAHAicBpZPR2yHP2LZ56RzoorUe5xQu4DXekCuncB53bCaXQSWU8p8jvi2WpypuNrSPmR2GDxBSniAy"
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
