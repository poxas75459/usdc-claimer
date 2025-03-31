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
    "2KrAkEqm1iDD7NQY4E7uEF1Lt4zSaTKxJws5PGf8L2XeZ2W6jjs9EupLBVtQyjejCqbvKndgD8RcYem5RSCxqfUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TPjDQeXrFcA6CBeYMhh6BTGJmP98PoyqJ3ibN3H2g9ery1dUj2e74GQk8j6VddSB6weqYz9c86fvW5xJNJ8uyPP",
  "key1": "2t6w4c1ovR5JFryBCHVu2UZLj88SFmArXvebRaRtjNtF8yaHVnpu1LnDZHcfi74rxzhVE83dWFfrBz6FmLT1vMhd",
  "key2": "5VLDXN7FCCMbHEdsnBhviZ8Lz81zTbTrkVmu4N6xHRkBjDTp2m1pa2nsB4SYLtzhiQ3Ld7UYz8sH1sqykeTS668X",
  "key3": "3rzvh34MCbGZRkpUWqDyRjAY8Zn8zz17Y5KLRakMkQaGxy4z5m3LEPfa4ujZzFmgCq5yjUGw9mrnAyc7uUhggGuz",
  "key4": "3vekpgTEhdqEfp4oMWvvLh7w1e3aLLRYhXHcutjqQ9vYLjtb49PgQ9xT643pZ9hSfkMSCz97xELneinN67HUcvX1",
  "key5": "5EZDBsiWsAhkJ1iFgHXvZ31W5FjsfPyjsUouvMCtxeCyoM98Aj9FrvXwDL7g844yinNgfhELrmYKL27k7TXN2yS4",
  "key6": "3ywiEhUnSqxWf7w3CzUvS5N8TuaU8PxLVwLXANGHXQiUXKFgzB1siZmWkZLAMA2PeiqA947kc6Hz6sGXU77dTfYE",
  "key7": "5tHSY4pivcsNXuG4ESoc76pJUxUqwUYJqgEg5zUPPDjkPH6HNK5FWj9fSrQWCxeiUaXKvJNcpRjFZzCoTBJxL5iG",
  "key8": "5n2NHRSDA1D31Xv5Ss86gdhv9d7XA1d1HH1bKynF117najLas8fZo8phmzpAoNNaQevqSV9ZsTV5opbVqa6miv8B",
  "key9": "3rANm87Qfo2zfLiz97cXG3wDeDhrDjPN1VUxp2TFUgiQb8CnchRnEGRfj3bcsrDSkXfrAwrCLuf4YeKCcMkPXYPP",
  "key10": "5NkMvJf6iL53hQwT52AFyGpHcZ9hUPmU827ZLT4VWZ4PGdnkQtb6Zj94UbRXA7wqrr2FQ26qLHSobe9URJDExjcv",
  "key11": "5gt7DwWGuqqS8EsV1LtoLLMgQ2uPJfPnVK5yXJmUFsF78gku6gnCTPCT4qT6vsNbfJHrvFxSbbgK6j2Hy2NKYcXQ",
  "key12": "4jrxSFDvgAGQRc3DVkCtx8hCA8QNsVS1EvFs5p1JyeTztNjLpvqHx7fmLTstG8CuZzAhkKHorBSoPhSAEnvDhW3i",
  "key13": "4ZcvUwUSyALFRfzR6yVcPV5ZEjA9fXvaAFSiuMysW8YJTpEFHrkRowXJCCtYRzveqLhsoeYkPHhVR5B5XA88MCbH",
  "key14": "38hSJiVX3EYeu5YxF4yfkStBeP5kv9M5xS33e8zfTazJEAfMx3djsTo1q3ssPQ2X3TCAq5UEb6KwAqHmw6tcffdm",
  "key15": "2BXAJPofvvxYTShkzdQUwxCXWVfW7GRNbAz1F3Kwh1s8NR3oxjaCqJmRkKF3Neteg6WHPbrzSM5yY2RANDiQget9",
  "key16": "P24virbCErejN2ngb98Q1f5oLowna6HFVZ2bpnBAovPcsQ9xY2yMarevwKuNjxV7DHUcj2Emd1nQwwUyvoZzjni",
  "key17": "5rqmsTti4hh5vDMZwHiyHXun7VWwwAFx4iR4UPtHdAKssbHh7GDw13oiDWHEWTuRwDkJpPpMWG9KaVagT5x95gUi",
  "key18": "5igtF7L4i1pxxVKupKcKNWYo8unUGJnuuLaCndkniZZCHg3njKFje8VRMmWcmsYpRk5H5Q6KH2d3K138Vhk2hkHU",
  "key19": "5FT8thmQpzeL86yZw6qS11Soq8uV2Xg1tzQLxrfhNRF22s38Njs8Ztv5uxK2QhpyjbraB1JsRdoGMhiPEsVFkL4R",
  "key20": "2oZ8DW4Dsx9b3HAYMfhY4sxdp1X4mbbsoxSUByi2YT7F8PzxBczMDSr7TtQAt2LgvwDvYNRysfM3Nv2UakFodZbs",
  "key21": "2LsEBnBE3PD8dfCjrx9mg841Lmv9EHF3DZSGDoDfRcoCQiPcZwv7o1CpMEvSP5pqHxbiALriUnGqGzQr3qhZgBx2",
  "key22": "xyauyfwbXAQCEJd1nKV5LbxnADYJvXxwboq2VTwkYj7iEXHFsdpUuArnKH7fMjNdA3T81P4xiGiKGtBWLoQxqsK",
  "key23": "5aY54KnJKGHVXUX8PrRW87K753GWrZMFG41NTjbRoaKx5WMYJmxvB5XjpXVhXJXTi1QfEK1st5y6WZ3qoQ5iUWva",
  "key24": "3wjamdQoTu1GuRQin8yZrt5AxEhYRQ2UjKLsmman9ByxGE58CDXXMKPG3rkR6rPWMAex2zcNeD2HFAqYUhxPknxK",
  "key25": "5dsBn6973QogjtbTEA4W5FTjZmgsgPWzpVCti3wYPtpuCn4onCisW9M3DWHigxFq5uR6sSChb3QNdaphtZRqzSbo",
  "key26": "WDBo7moTn5BLp6t1hbBgn4Z4Ui1zZ8yPgjVfAkQLByWF1H5NHwj9H5R1AEsvPwdqJ4kRbQShKvajXjDWNiTC3Rm"
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
