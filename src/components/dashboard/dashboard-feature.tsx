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
    "5nnYj2QcrzTLvuAhxkUXJ11qBVx921YscPBMP3My8Dm2JrKSxpfHBFnC74RSjT8HQmPQQCkDTh9cYmzQ655Tgy65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5TewiruuiSV1rU3YYEoSDDe1gupbJmdc43UVwhwH7cMCKNNuSr5yKtMMPNvS6EY147KjWg1K9zwsoGaxnodbfG",
  "key1": "qrJ5KVy2Hi3huYpvybquUCNjuuRvMhQnLtpfsAFSnBznHqAPvjK5qAZQ9oRTiwxrqnjKACF6PYiAsYUtnbBsRbT",
  "key2": "2q8ZbNX2r5oqA5Jb5Qyd6u2wMpPxh6FX7ZK7tyQR55T6CzHfMEuDAPyojwr95TfcjE7BhrfXVxpzyiEpfQ4ye1ou",
  "key3": "56gA3Pm6fFuyx9pYNFuSCEULveVPeKCYqeE7V8c6vtUy2LT2ywz3VRYEfK9oR7mPfhwXt7yfNGfYPNTb3dWMHj7s",
  "key4": "BaBgU3DpZ69UfSCFUCnncRhpwdeqU3JquuUpucm7FZUNPCnxEWheMDr1Xg95byGmTQiabsqHftvv8QAhiDfYP9k",
  "key5": "5FqkhFAaZPp35EgmvGuaV1GCme173986DFTqhXhQDkUXsWQUsmG1YTQjjz9Cct2xCTVosYtMyLhs6mkcSaTFokYn",
  "key6": "2AoataJ64mco4atu4nB7FZdwSayuS4mx2u9FJnq4FzkwjQfyNdt5Eo3DjJ4DUoeA17CYNR3PuDqggo3fM29Lt1x5",
  "key7": "2oJAntqJ65DQh9jibdD6Ag6E44Xna3UNEX4MgGqnEbRf5DvJUZ3FZsa9aSJsm7L1E4u1uz5rvae5et4kN1fUeuwd",
  "key8": "35LnSy6XgKjZE97EmCTZb7t2foz7uGoZJuEd94mQLPvHp3M8PXEHRX1FYy49E5aqeGrRsE6DBaxf7YXHEDYVf2g",
  "key9": "2H5DssuC9stE8qTScLz4s9G1pecx4ViRmFVQ6CqKjskQBPg4gV2x83FrGUCaskXSSeAj5EBiLfnUapp624iYDx3g",
  "key10": "4Vv3JXMNojniCiLxRyBpYGYNRVT2JviNqxoPgTWNiW7MWSw2SvNQQamwBn3H4KkBXmUjox6d5hw78y6sWkciNzFQ",
  "key11": "3y2zM2qrLS3v8GqPyHFPBncSnS5mU9rAgCKo9UAZ18QgBbEk35MZh8DUbV2QaGKhsQK5JdBKmJRy9heGGeYAZ3Jr",
  "key12": "37SWHYUsgRVfuCmHjYA2yZRta8qFEMQzQVqmSaphJFqVKoJGMo5g3crVrqn7v8BbYa8BJKv5tRK2JKDHSXVnzsK8",
  "key13": "Jy3PKxy27PLCAZaWbN7Hqp46opCDhvzUQX7W8C46uWHRZJqqDEFq3MwgGv9oKWA4m3dLKhS17vFFUnAYqj72Stz",
  "key14": "5ikkdeCmGgXFadkN3HXmtmSMdih8HyUHKm3FjmvyEnLiLh7Drhnt2jzHeTVAM3KxnNRwsPya5sKT1NAreKnpZiEV",
  "key15": "G73ng7pU6kRGnem88ye28hfuUdGLHqJSANTXsTJKpaV5sdjnavY9gVgM97Ar2Fd6zigx22DQYDAehi93qqqf5sB",
  "key16": "5emji5iWa2m3QTUWDwvvJyxekwmahBeCVe9hKqtPucud4F3r2MRo953EH1hXFRrvTFrfM3CX72y7J2jhrS7u8BKL",
  "key17": "4F2M45Wvqaa5xjqYFQwJyYKRfQMfTzaQxrnEybgpuDUmhwiFVDWBM8tE4dbVjmpbJdLZ7rRQX9dvBUjqNfPZb3Bo",
  "key18": "fkhgzn6yLBckeiXzesELDnDfAZ7eZmgT2chUvxqjsfeaATbJM9ZWxRATBnCaq9HULZUQPBRC2HkLpPPPVCEUbMP",
  "key19": "67YsWVZLzXSJqhp1zu7s9qpNdmC5SkfCC7qBWpCCTM18197vMzqZD1FGLn6GoNavBgP12EW53xrD2G1QuymqFNAM",
  "key20": "2Eq85PruiCgBhn3ffC55t67BF64yHGKRPeiEkcnNqqdng4KbJX4Yp19gHs8bKEo53BrpjDftcorcBMnXkBh4gtJz",
  "key21": "s3V5SgdtHgs5rBxVszanH7cEi81rB3jtf63vHioxbdjGNGkmmBTjBU7uCXC2VitP8U83d4wMBtg2KsgA3PejNor",
  "key22": "4KgXk2yZL457xWTAEZn6EXoE4uVCBG4ZJUKHsGu7Dk88MxgX5skYzF67hveF9HuejPqAP17cZekNGtiueQA1yJmX",
  "key23": "2pdbk9asrmjPhP1jAqVWQnwpWWKyniWuc1VHazNYLWqrBYng1PJU13Cp5AJppireDo1RtauXEND3tjug1JtrxJpX",
  "key24": "3pueHYpSahSbQR2da7PuWkeFtc1484NaEoPysqmE6yrYEPWXSdf36xMmgSMdA4csKiC9KPWDnkCRW6bz3G3YzbZL",
  "key25": "5beXKMhAS76yAm4AMBNuZbZdaLPggECc3K2afuRK3uJsXedzNQ4G7bn6SP11SCmqZscWHQofDfjZSNqwBfNQmksq",
  "key26": "jQm7SnW5GJfJbCF6KkZxBjnGJf5rP1xiRgs6bF9kvtbvFoZUrGxt6krJ1caQfXGcs3Ke8ovWDSxjUZthTXwUydo",
  "key27": "5pWVkroAso7e6gGDbxevF442BYASbJzre6ymiDKVAGFJiZ9Z6CNBusuAUEdrPSmPxiJxBJF28uLTyMKJDPc2va2A",
  "key28": "4RKYusd3Uuv9gvZGgvZhvz8tjyJPGTFd4o2rdBD8rRc6oUDRw4sUatRcvU7h4CgqKDaSDaifBHVTruZPzoCTmb2c",
  "key29": "4Hd3aaqak97m9BT951JcLC9PiPB8wNEB4wTSVuv4bJNRKX1u2namjVMn6XNxh7FfQUZJnyJRotVtdfmDKLpsUmCx",
  "key30": "efMMbGAy65qasazHwb7HsDK3bcrxuSZXad3NaeALAuKNu4fueq5tpw8upry5tuGbev6Hx6X8tp5nxJSU22qKavK",
  "key31": "XZNRDC4pEqi94SSs6JK4Mm8BWtbvsxCZLU5E1kEKUuLg8kM1nmpN79PfrZ1Rrpd4nKXExEHVMKHkv9cAXwx5JyA"
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
