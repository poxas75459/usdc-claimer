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
    "LZLiyG8mASNr2ewv6Rni9QbMKFRbuhBDLvxJAX1giqXriFg9xGLmRkvVQSDhUEYMSAYSjkNNLq6TZpjL86tArkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPCaocnK4zXcCMdScywswfEF57pEMb3yxsg1h2vosCPYiHWgkQzqHR2i9dujeVdp8kVqnHoggPcHTCGgbUiwd7N",
  "key1": "5pVybbVJaTtBvYdnkVLqpuhVTZrubGzycZhR9NDtePSucYtgJtKJuHyAagYcskCbfJfYvWKmx9VHpxLKFhbDPZQY",
  "key2": "Zi9x7QCsope9kTccixhijcdfuGRgKyufwd8eHGDHe6MJpLrQaHrxQ1m5Gc1qCG1noAnA4q9grFCbK5b6gDDLfBD",
  "key3": "TYXnnbhmQEYiSchH5FLJZebUBYvmRZGrBAHAWvBzoSd9qrz5mxYjHaqpe6CqvfUqYuZkpqhxBtzk8C5NhVLdKyM",
  "key4": "41jTBeturkicKDiyxiH2FUw8LfQekTZt71aoBdEgWQ5pW4EPctark1kB9gdMNif8jvtHQqGHF1LgSWmTmmask256",
  "key5": "2NfL7iYH2q46v2c1ruYnqynNJTmE9AiTnNp8NqGAbxTnzNE36Pnpq28BjFNhi2AXNppGQbrbD6dWjzKP5kwAxwKn",
  "key6": "2wYL6qKTmadtr9giBivwR7WWfj5FStafNwKfxQLbRLm6mFeHEHEc13YjWesqdzWSBfLmkycwEDqXmAtsZaijR2Qk",
  "key7": "EhgCU4zcfMVW2F2LpnsvBTFeG8Zya2EmfCHrPrp3T8QxWVG7GC8TjVmGGj3LwshYW4yQQrjVnebphGLFLmHC165",
  "key8": "45gWMd8vYCf2hCWj1nG2aAQV3bkPgnznhC8Mm4P45eXpLUJ544nzw6ikvDZHkx9aimeTwtujDsUpPTKeN1UyVMBf",
  "key9": "5NQaEFP8wFJJTzW2DnujzJxH1ga529VZeEzHciwWFNrUSYpdx6GiFVoD1PCftmHiJcMK6FW8pwCBC8B8RH93rmqU",
  "key10": "4E6a3vtCwBMG35DLFL8XVSnnsqv7NebXbVju999ENUJ3RFhFMcZUatjBD98aWTiCw4nzoWWmU8zGMSyxcCZreeou",
  "key11": "6WntLc8s39VGtjrUVVLAoz63rRseU9Ljjxzw391GfFk3KdsVDdsXLJ5dGB6MnE1twK9FAHrHT5AsKh9EgHr7ZmP",
  "key12": "ApJBVybKYjbRiemdSrgqoZ4bMyEmK9ha2LW1RcReWQt8BGyLxZ369bjWKoJQTfAuCoMQsDBvGeZKP4yeKke478f",
  "key13": "5Wx3iGGmYm6VFJDg1KaTtiN89jzvhSDDFRp6Zgh69snDmaHKCbb5WwnZavetp3EnrbeFJp6CegpAJWvocC8GT13Q",
  "key14": "2mUNgP7qktntTDEqVJ7fNjPwoxe3e5uP7buWrstQVxWsCA1bK7viedeyy2MxsyfMPC9hiaQBfw24xK3bU2XG9Tcn",
  "key15": "3Y9G1BgiQVHHcg1h6ZM225CDyMEAA7aFP679r7w6uVABrtvP7PJDPxeuAzzEQ8gP88YFdrQuaWjfwvPMF98fBD7Y",
  "key16": "2Ei1qkoysr6DxUSmExp42epDDVEZA2A33E87aQEi1CpuYWjzx1iPHQ4RRDH3bnaKjWp9eEHDTuThuHbGS5JoZG6e",
  "key17": "4Tqins9PGHzmjw6x5QYrg8iAjeNb77sHXkAVi9Q7He7tiXqiX2g5rkgrw2AHSdjPmf6w8A4tqW9r3hJG8Typ1GFc",
  "key18": "3SGfeQKHkpQ7N2ajnLJLiAxMs1fEo9EAYnCUjUvuLP4BCyYQrzUZaXjdUD1MgGRgiyuigfaCpszLV2ikwVvmNsaH",
  "key19": "55s6DrAgwYxhULf4HCNnSJxdXL4QCxD2sE7BK4Bm5abGs48aPDMnKcbpDimJCks5bBD8E6NdoDZeSynfpwoDZrxi",
  "key20": "EircQ3pEykQzeycgHpwPqKxtn3X7jpbhdvEickPLdJPuG4FiJdEjai9x8iRPpNRUmFKbXMnymAtApCj1u745RSg",
  "key21": "2CNoXsRdTAnMSairV8dwXhLewCbLPVJjaxs1c7vcCiGjvHmAmkUeJNKNm8ZKxThU9XXnqh7PyxEfeg7Zv5ZVm6Dr",
  "key22": "2V8eE6AExb22Ew1Fmk1bgkNCjT3ddHS75hVLdoUZXPPvfbictuBa1Z7eYfsm7nun9wR5jb3ZBbw3Z9MQ2MuW9dhP",
  "key23": "4QQq8dyH5EitYz5k7eJ3QGwd2QEZJ7JiDbzYKgCmihqMHMz3iL9N9Ui3LmtSHXzUAzoerij5wPnTAbGhdJDgPwGH",
  "key24": "2iRtRxqKEyiRfHGC3V88s1EYfRuZhSvsBNcRZ8o1h7KuUeJ6UhvpVrdJWkRCpkDdkGdcbt5875fu8GJXpcwrfQou"
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
