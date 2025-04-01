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
    "1aRktc9wi8nungAyuDQMyqG6GjG1qBQhFVpJvcRiQCgzDgUegGaYdUmYZSLUKAnwTUTRva8kTQLx8tpNKSG9DvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tukKmkbJc8M5hPJ2DZAHC6uNmU8TdCCfnKqrCdmpPHRPvv4EnYLrbL53nTAKdvTM9UP8ueK6SQ5DbczJASjoMi4",
  "key1": "4ySH2XsJnDBRuwyygZyZ6m932roKQjvbSoYCvdiQve7dX2UBd7zy4hVtFsfik9xR1rqRmYyoLtDwo5ssB2SbfAKF",
  "key2": "4sh6cBb4eW3L4zxdeVvpbVmp3T64EBz2nHEH27xcBuvMNFq6Ci6ZDRgaHPPHAkNJCdojm6FcW9heB4r4Bm4XbPsj",
  "key3": "2H7DLYGpKSTLtoq5yAfPaT6FL7JQ5mKezUvb3csfQsrqQUhg4UGCsVK716NcZJ2RtxuYW6UYsne5bQcC2Np9g18j",
  "key4": "8j5N2xikq4bfXpjcNpXPUH5yLgKYsQdYa85XZWeQZ4WUY3mqxpLLULzsJy5ArHmLeMhyAD7xugyefB5yeJK1gPN",
  "key5": "65KH8mfwHcoXsugqYftNZgtJifUqRyNA9EMfE3ejf2bCQPHKpAkGn9sjfPSR2zJ9i1GU2kPwhSdjqn7KnCtLwfVx",
  "key6": "5kURpTZg7f6fT7ahvzCAapnaTDp4h9xaUwmjH6XV8xhUE4wDH1qfT9qrDwSwt9Eeonyri4rKz5qC68inFtDsJ12S",
  "key7": "3XtVtc41APxgAn2wXf7SPc3u4vq55wo7fJfTabVL8mMXaAJs3GkmZZrPQg693PySB7mubgtX1qj3o4FpNjGyhksu",
  "key8": "51zg8Sch9Lxn45AxXpqgVYZ3GEcPHfBgm1qUWq1T9GnjpKZ5ooDHhWdvjoRP4ZWabWQbNygEvrSpzhyGTfAQ1CfR",
  "key9": "2FekA9gQBJsemSjWmyhSFsSJaJbwHJMeZq8Pn8hkBE31zAHVc1q3MrqDXYfpfHcNzCoed1VFm16WruuD8d1mzKZx",
  "key10": "5XefuVQ13zLTv7EwufMeywXByA4YtRCQjxEU6tZjQiBcUWagkFsvAFbhP4QgJowC1q1vD5tv333Fzmc1U6ciBhU7",
  "key11": "nq8jHxJw2g1GEeXGQJowQBkF8u15oaYkSLonwt9V1TuGZPSY76gDyfsHatEBsX1NeJFrHuM81KbNKZaamCEyxyu",
  "key12": "5pS6ABksqE6goVkbifYywcBz6q6gZ81oVPr76FNakaV22gw55aSmbkU4NFQQpZD2iTgcw8yhLtypyRnFJSSAzvgh",
  "key13": "29ZX66W8KeS4dUH53j15ecRdQ2AWzQzVHzuY1Hs5EUcGfN4FrZo1aA144z7g9T6D5vFEnBZwp4tFUS2GLSt83fAZ",
  "key14": "WYTh65sY7X679P6F4Ft7jUu4kighSmQyaAWxPFsZGnEwdw1RYi9fMQdfS7bXpwgPHEEU2EW6gYJ2BsjRxSVwk1p",
  "key15": "235AGimXnSxci2tMDMNSyxD14nBJsscZgS7cLRt9K4TCoLtUqFAP22o8m6fRyzAJvkoUr4QKsQhiepuEUCjdB4Yy",
  "key16": "3FxkbSCLCQqFfjwtQEq5PZ4RkXij9ugCxbg7wDfgCk4fpJFSCnFEzaWgxiZEFooDNjjD6MMcQCZogN1VNA9RWrfq",
  "key17": "skhjD9FxJUS3e99APcjM7k8kBfheApB7uEYsbBBcjXMYmpEYdiHCDbBTvNwr4Tbn2LXK7QHNJWkqSAy13rMAJN8",
  "key18": "4fWJn6pX8uVcZtDvC5xPMAuyeXJrnMUVhbbWfX6H8VMCpWHanVXw6aiNtbQpcXj222jDuiaafgdN2hJ4mtyTx4Pj",
  "key19": "3iKoE82RUL9dScnTapHGUrTEfD6SRZPbGfZP3sdAkXyMyp9x6Yw8j6Gfw1LPs5JexKH6VU2eN9AVzMR6WtpZwb9T",
  "key20": "22mLjpcKtyATVV3gp5umi1wceuJkjtUYQKsLkpBPV6qXFnG4NVFK28B7muykRE41GC1EdiUbKJGDWoBbp1CPqtKa",
  "key21": "2iEaBwenqfKzBcuQdGDACSZ3NMyYU1iZ2rtK9Teotx8YDKzikGRUbuD4WdGhFnDbszebYu3C22Bh3jeaYr5DwChg",
  "key22": "o5ekBA78aiurnP99tGTtbLwRgmrob65uqnB1Di9LsHQpy3ey6WAE7TvuC216iabgxnHd4b41MSRojN8saPQ7itK",
  "key23": "4ZhLSLzaJ4i9icunc7J6VkSvT7x94FTdn7xLB9SyEX74LB4pnQZmRS5yPWCbWtwFGTJHynvwk5GiLiswP5RRhv2x",
  "key24": "3eFB1CKQRRP4NvoDHGYykLWGsm2VCSnxmJNL81wFBzhmXaeAnCxpavGzyTUTymZsgthF1p5TNtR77nCx63DxwRiE",
  "key25": "26TxiwPnPxRgoiNLu8TrVEe1FV8hryurAB6gYBqyX829uHd59FisW4Qcy1pxYUmQ3oFwYQ7or54i5mqxyo7rkHus",
  "key26": "5puvqNe5cfbTuPTLCCq9aigsENn3M1XgXG4DmnSLyqN6pCkUTM9FXz6DpucJ47jWRJY5vNfAJ1UKaBhZo4b7BJCa",
  "key27": "Aogu6fVxWwyW62fJvAm9k1LSLjCqLafnweCzkgbgh9CsWmFA1mncAKPE2D4tzUkHLPTQtY6YyvMVKcUViGh8pWE",
  "key28": "wtpb3gCnBFvo6cpbVaMewSTTNXxYbBC64aJVxCE2Hcy2P5xgb8rk9aBudATa2VnjubVZvfk25t8m1kVC5VQy1iP",
  "key29": "3gbxnCgmniBHmurAB3rSr1FGLudzrb12yLVfuTwkK7Qw7FqzW9Xgd29XAVJKsTfn61EqGUg89Nm2XNnYg3oLw7Es",
  "key30": "5UMsWbyyShD86nUpZ5iSjCNPnJhHBMRNMTT7Dr3uxEPgZ6CfLaWiYNRTPKBsWdTHbyRndfQXKZ2Nz3Ke16CFYbqw",
  "key31": "ZNFwnmawFGg6wVTMS8yquNVJifdMmD3qRYy8vsRxw8nkbNDKt6eTDA4izdxC4KATcQ9tsirCCwHbEmgv4Up4yPS",
  "key32": "5UubcbbZiVJwNsEfyPC1MpAnC1BcLD6x2XtrYE6DrVMrzjde2dFBNM462tih5McKqAnpCaFsj3UDeigHWevdxEz8"
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
