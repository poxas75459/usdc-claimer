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
    "3xN12Df2vyqmg3ZffLbbexkWaDDACdSLoDarsN27tZGzX2NRRrQSYev4Nduj83zqx4VWJPvG9HcMVKj938syjnuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3852cExK1DBAEe3wi95s9Y6QnkzNpKaqNwK8YpcUvm839DBxnhBwz6y3Z8nUwbtzi5DHk733a4RHUJyjuSnTb9tu",
  "key1": "2ki6uWxdwFten9TKpQYCvDmnaEfUoUQFKDbNCuSFfF2AtrbPxH7zvKu5VL6ZVJxNjBdNpSv8CayXjsNqmY3SfkW9",
  "key2": "3iuU3GWrz3baoap7z1rXgMWEXErNjH58uJMumfo16GoW9RZXuT2UVrftqtL4o9Cz2Hd6j6XEJAfu44povCaiwutr",
  "key3": "46X229YqPopB3QSV98HtF7jPxa4qLugDocEiEcGwnEN3qEMGWwXAsH3skhEX4ZpVVi7TXGG5mTLQ5TS6dCSiC6Xq",
  "key4": "4Rp3ezzmtjdMYBSvAGxpo35wvxFY7bioLdjARNdFJ3zTupoYWvSvDqWwkHWMc1BQjgL3jH4jCdKXTymScS4pSfhy",
  "key5": "48nz3fLSo4QQkN7V7HNuhMEZWUJAhSdwCxcdMRxyRzeFgcLTpiokDVNr7XvShTdSoFrdLAhVSbjmHWCU8Wrn2P9K",
  "key6": "4F7M2URpXYCX5gxiuBXsiVV8JrUAdJxMr48fAxiaheRQHbaCkta4mqJUJJBe71psMqqbaRos4N73jf4rk2GkvkWh",
  "key7": "4PAKM8NS5vJRHpRVJBB9BNTpZtxK5qgB9n577HZpG7ppUETffZTZ79T2FCRccVc9onRLB633UK9i26HoGVM9Cgpz",
  "key8": "3xph6LpPJbhC7uqCrL49m3toGgbUnzAnMTUbK5jK3qhsse6WoSKoCDEY2XtE77AdvLXfjC4C12HkBVeat4NoWz3g",
  "key9": "3CndkadrwWjwDVZQLesshh2JPw9Pq33yo55w78VG3fCGkX5rnKRrGLNCxLKsiCUyuvv9v8F96GdsE9B215Am7gDJ",
  "key10": "21jxkpvk9Sz3zRgLBUH8F1Hmuz1m4uGJpJa9bfLrBk4W4LaSkhQ186MvFVwPEp3D3F2ik3STdtUdfD2soZPfX1Yb",
  "key11": "3V7YiqvJiL7zCB6VJTXzVccF8SziSip1kqL5NJxE2LLmBiEGocotY7uc711hFzLExFQbpfnUMmy4xAfKhbxx1iap",
  "key12": "2b4sYDKDkvf3uWbPSZKaGooJoTnW1FmXUvHESJmzwawgtFNo8kJsKsSk4fTaRrpeH5bfJu5TVxUARZYm2YBrkVYL",
  "key13": "8R33KNCRqyp9NEpoLcjN8K677nk3zq36NA5srfhXkbHW9yGGmwzq2Gwo5m4P9gUTPYNC6ztsFcGkcywzoHboas9",
  "key14": "a8camkm5x52jAAoCUjcRWcZz1N8j3QGxaDd43nJqYCkbofwNWa8uCt5HoYLwdNPFxAmKchZCgPuUWcx9T6JJhki",
  "key15": "nBNDKSVccrDZcPuAgmTuGPuRvt8H3fhy5Dyeo7a2r9vt5zZhEL4r3BfA8Psu6vTkD17o9a8eUsKXpQ5unVKnLcH",
  "key16": "2dhDZCwMFLmjB9StoeeG5QbJ1ibvAaB7vwDycrinjt6YA43HDGzfGcAKQYr8xbLDZSWyqXVuLKfRAgQDRtCKfVif",
  "key17": "t5MFg44RZgem5RYPmiqNGERiEvJE4TATnQtcqi6jN2g32tYpXGcZMPqN9xhnWydpDfquVakfoxcGDFmDYK39nXC",
  "key18": "3GUnPyFuaChk4EFR1wWCWShc8yyLJmgE29SJ6vqPbo1YqfdCfkq7ZcGNu8tfUA1Abc75hT2PTbin5tVWSgdyaKxV",
  "key19": "3Z75hHZYd4K2GvWngANsSuy4gYukYUS1ix1W5h7U4DdigwiQ32iSCYQMN4svrgr3AHyuuLUjhgsQ6Lha3Qoxawby",
  "key20": "2vE9RdeGQJL35BtLwD3ANrv7FcSi71TrsAVDaw96Ar3PnxjJ34f84PzspV52L8wWgWe9XZ21GkKGf5kZsxPDaskY",
  "key21": "3DVtLRZE3grwqH5X9HoZ5RarbPktiV7FYvaRUoKnGftWew7qFpzmbXBgg3czxKmzGQBGBPRfjNSGc11YgdkQTfKQ",
  "key22": "5DEWz867Dav882ivWQDqzE93BSFjNSa64NsnrqZ1rbT4A1yAB7iCTnU84zF2RyvQrQZm4H8D71LVPKzQ5PJzyUYP",
  "key23": "2D2w3ikmEEQ9fBYAJV8CVn4uaEnEyt8xmM18YFmHrYiTrYgn5TMWfAtapqQRVdTAxHE3nZDgXeJEsNUaPED2fsL4",
  "key24": "2zsMnV4Qbm7JR9TKDcbt2qgZeVZDCd1SdZNisPfXPNnkEhteDCudEj2hHwYnVQNAo8wCMq5X1g7T6xqYgaamhzZu",
  "key25": "5H6BpDfL4HugdT4JekLEyUMZWLHYZviCJXNFYMGJsmECdSw1r7GqzdEn6kfXVXdvaYZBd2iQxvxMjddqot1rEZDD",
  "key26": "4mTArF43Va8obnqe4fTKZzyXMssDQrjMhdfaF34kcKDKkwYpjDMsi2J4B9toGgjooTDkF3KhjU5TKCYk9daLNK5o",
  "key27": "J31dBgYM9hFN13KHFbTscg7u5hPU1Rn17Dvr6JVBkHCkJ624igaYmJEY234hE8j8A4fc17Mm9DWLTSGtruk2GGj",
  "key28": "MtiTBMcMS6VnGTSLb3LzYQmZHyuxFgvEEtRKi4d1KA3FTFWLMupsmdg11huYYH3ejESua7RYeChr4A6rvG4xidb",
  "key29": "65iZPb3ZiLS7Nr6zoGvfLHuKFCmeaU3gF4hjN99N82YWvnYxMpbS3JKh97CVr839VH3g5kMYyjxNSHPUs24osf7p",
  "key30": "woramNiAHJfJaSHha6ZrbpEEFZjxiP2fLxZLP651kN8H4hcBoYrcQErjVKeJwa55CNV6MZstJYFT3TF4g9fs5CD",
  "key31": "4MLHL9EVNDeRLGxwvzS3mcHnHkdRHX87F49u3XJ1jpjDwyXyEnqq9gFXwFvdvMzfJLsQMa24Xpc6kqhr4b2QBRDZ",
  "key32": "62Lz7YJwmkUsYnrxZ5kjYC5hYT4fGqeb6aY1RuurwFe8tKF7CfXrPXtSjzUxwRNy9rRpYktsaQqQxPWaQ6TyxStX"
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
