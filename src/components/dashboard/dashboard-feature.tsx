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
    "2VjZVioDyU6heP6ZpxjJtAxBfoefuF7jX17dBNR45varBZpjqis6c4ArSnLoq6UnN4Uv8GniyyW11Ff1MsZzD3HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTq5Bnwt1RNbYeQJJELy3RxeaiJXo88Qafi5yvDMg3dGfwZdQ4zqsLQ7nL1G9eHeyU9sUmHo8vCq7UCguPF5vJh",
  "key1": "MVGPr1WAuZQqJDQp9jJhM3UHhVfm1jk4RHqSAQ8BmgdjerRXq9PGtufTKXvPUeyLUg5bHjNadZmF6ziareMTg9N",
  "key2": "5qHbdnzB9XmMVLVGidjgsMBM3gBkNmmgBqemi9wksJFjM7caT9aDTEmk3rivCYuot1Y47QnRbBpus3Jba3LhyhfZ",
  "key3": "QvdeDhqmpVi4x43ej5VTYyK3rrFGtuyyErcoTj3u1pr26NRGjUM7JhweVGLdqUNXTySZfxHrq3f8UKu1nP9NeCo",
  "key4": "5UtwTNPgG999iXoZokmSXr2vV423AeF8LMeEmhqggm6wnxXq6DVTYSg326YZQEpMe7FcjRHhHBGZQ4eZisUhbzsT",
  "key5": "4rZq7YMciaDJVU5pozXKyftcWRmxcbQBivghEskPPASumNSCvrufwhpiRa9k2CuZyKqNTruSVgtdPkYvHnBbf7XB",
  "key6": "39iWGSv1Neu8PeTpmvPZwyN2jvvVUvfSruyiVheX5ZVSmyD71ArkABmwebKZzXtLFBhtHAKE1yz9d7GR1nw7Tb8y",
  "key7": "1DVTpNDUrcTakUKLM1B1UawEKagH1EXzwRMG7vcti9SH6WjYSHdUBiwTpEjxNXjKL7XVtWwXDq1nRAeLDgxT7EV",
  "key8": "2gCNBoVydP4mCcETfpdSv15PQuCTwthSBQ4faZCPtWkM6xFN373m8EN2S8GeFEP2D92o1ewtq5PziEre2wzP4bkv",
  "key9": "5qFLxfY2FzvDSR34AmQBKsmPRWgLppTRWfWrtnGEuccrCFD9v7DBoSGUJKW9JzarxBm4CwpJtCCn93raCVxZfskx",
  "key10": "3oocEmpo7BR5dRpA3dkL7YaJrGuwEv2Tpmfs3yRytp3BJUQX9oE1FMshHFZFxxXfbyFqatreoQtJHF6YGGD1pkZR",
  "key11": "aLiWcwVALRaEZiBnm64NXNfyBM6DWZr455ZuyGFpeHh4SJMcuoQadvT2dUgj4n2Uo85UM3Vi3o5wugVecWpRwev",
  "key12": "4ChvzcpXgtqy2v2YbgMLazd88hKuG5guP2cSCrZisf72XueycG5hMDXpVudazXRvVp27AZrviQ4HmyCALocAAXZU",
  "key13": "4yn83T8kZ4Tkk2aRvuJwfE7ii9eh5EFrYUTRgfpR1PwSfMdbBseceSWxEoqnCjTZYaKoNttQB1K6SrURykpQSVVs",
  "key14": "44WoLL3rJGyUhiryQyp8skEnFtVR3i9KxdofHS51HHPLt1wEkT8eUBWJ288bbE7Z8y7FYYiq6FvSCFo5NzByw6YM",
  "key15": "3Zzn1TFh6tTVvuvbpU4vPYZkNryDc4PXNHahZkm7spncP4HSRvqYjb7XmCjYK7jnfqRBCRze5gJrPtgcbA7h4JKU",
  "key16": "61bUcN3ZjJ7QUpGy11Z2DJpCxRnjBcLtVGKh1MHfcmPJVsPPcpEyrX9eLdFFaRjeBRCjR8jt9LB2RoYpfwEKc9AU",
  "key17": "33vkCtPRehiHfAGLfNvUwDkGgPzYk1Qg1VUhEcqKJYJEUE72JCt6LpFqLKrvnjvY5pyYzDAK6vCFiyYY1kLix21Q",
  "key18": "468S4eG196qLc79vKZ1wK7AZvjxhWVALB9BZJThjefGLmuhkbFVowxWz13uJR4BLQkzq35U1hxLW4Dfx1roDNPyH",
  "key19": "3HNNQ21KAkdcDBpaKJHPaiZULg7xu1i4D29bU2HYQMK38TQorhm6TJw85idFsbDiS4JwJfnwxWDbByaQooT5P7Uo",
  "key20": "5tdVBvax34bc5xEZiDRGpy37QjRmANqTsC2NDvK1BnWpMNqS9QvQk1Sm8paS6yWMUr8oFd6vefxkL2Cqrtt7vB5c",
  "key21": "MaqMPa6deeLDWqsHP5ypmEZgYfu7ZnzURomNzn555Y2JYEYBB2SiCKX6rxHY3VPHiCXeDFYAkCNu244o9k7m2Qv",
  "key22": "2PC75uZJd9LaZRx1yeT1VaWSTCAsfQChkGFttLBKkkhT9GgfWchJsMJT6XpR7eJKxCn2uKT2in1pvEcumaTiasyU",
  "key23": "22yEfARUvkM1ijtC6L2ucCG7Re5TGRq5wmRpbdsvLVJfsXVmAGAqAZyzg5FA7pEi2yPPbBPHbkd7m7aJ48LgdhnR",
  "key24": "3aKL5bSAETxTaENo1WXA1yDKCyvZ7xEP4dC9bcRUyi88raYDnBq793Gcx7xYRvJ38fvUhAp2sAT22Hc23mrT1KS1",
  "key25": "2DN41DV3AvYpi1bF7cQhnA5oyyYbaCXHo8JgaZ7uy6E8ufHqRSg3EFGr7uxLTQgb1CQWYTxxjG48RsMkCXHzz8Mx",
  "key26": "3qB9NQseeaWgpsLrco6WAMPdLQtumCrPpVkNdnevBmrgyKSDiw3eGg67k1kWxwa9VHCfaBeXDodrQt2tsAoXyxU",
  "key27": "4wfqAk422mGop79bpUVnmzfQ712BE877erQ7AGj8x6driwd7oq6d29sCaSV6d9nUoCtouem6Vg5XJAAPVcti88um",
  "key28": "53boMGDEgLLLDEAALiqZCPsi1HeCC8PMZ5n6panVdtEr34LTVN2936VwCoDp7wCha9BaQXjSMMnaTD3ykQMowW5C",
  "key29": "4jtbfQ1yJrht3ZpzBkeph4t75xr8oWpwst6zLkBx3uLcwkdrBFJ931KqwMa8hoSWFmCDP145DXo3FWuLT4BeZ1pJ",
  "key30": "45zELFDoT6oLW7RMXHFKJ51BPCSMuips8LnxSvo7ZjHgUvT9XLiRjwCaLGUX93Ji2k6L1WwGYN91Uh6oexTTLnry",
  "key31": "4jUWorE7YGQRoYeYV1C4dYUx5h3vTX4wW9MKq8SaEN39AMVrHba43Ti2K3BRWBwniad2kJPMYDhc1TdapQVK2WBf",
  "key32": "5nt2q33ipafbJGfNJo9j287YCvW7yVRu1VQtuDExKjwNtGTybwoNzBeCvno6zHvzmJ4X2GTZUUbJKr4PSXjP5356",
  "key33": "63An3DbbTF2qrC57egGcBPxT7U13qto7jgMVLFPAwXbaTghit31vYRHvnXB7ttqZbxLJRUpZzzsCdWBhgQKNZCkQ",
  "key34": "4dzjUWA9VSBv92udzrKcVRv18AWANEMxeHyMCyWwj5ZHxnwYgvnacdhyPwPx2yRtKm1R15JfPz3bvG9sh3Bn1rVE",
  "key35": "2MLk5xeaLKjb4icpAmMh6ciN2D4MhYwYEcroikXoRPGiQhP79d4kuBc6ZAd4kf3Lk5HuNxAoTcyupvPj4Mm5tnAN",
  "key36": "2S72wueXAKFJ5aqkhRcLeJjT4mrUppwjiNeiRrZPnDxWyphT5xL2Bn49SDH3vjyMa2ZFJRft2HTi5K2ZRtWYQaLb",
  "key37": "4u9VV7FSTqLbu4oqUKQnDCBkPLUsPpf51x43ShHkL8DxNJPtqihhghZXR25bX3sS59j8YHbEf5Lyn7toLHcUfyKA",
  "key38": "5BUAQHqhSzAvcedgxTRUfgYB9nNXMc1cjo1zU2esv7NPYEMsoapKL2TZ5cG8WWbnAnFmiXQ71EYvYMNCJL3ib58Y",
  "key39": "3Z9qoBFyeehwmFrwvKPAXKRMRuxVgeEd8cbHkoakJU1rbEct67RsU8CMukjDYj9EWJUiRUNDSwGRnzYCaW8uNqc3",
  "key40": "35zwoJQGma23oYRtqVqgBVSd8iCjDCgimqkSAXXFGRajmaToeP6MkXtLyrUxSyRJmcMPD55sWaiu8SuNjoQbtBWz",
  "key41": "3Snib9pT6m9PzeZJNPFSQoZEMqjtMmWVZ1Msujh8kktgLryovtmRkmXaa3LyYw6yEwy8dWCUgexRr6nsor8raCLX"
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
