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
    "3LuEtP6ycAL3bBGmkAkGuCV4W6ssGTEJ8TKQH1Rmzp6K1HXEzLrqDqyqD6mDuHVTJMGC6NHVZtHFky9DDLhtQq3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KQXMGV7V2fUow2AtYzPzDpSo28G1eMYnay1ZFBTsqFeNznkrgK5WbrrCqgzMy1nBd4TSfc16hPNVswigYzaXH3",
  "key1": "3VZonNsGwAWXsqAyjnF6pv8wVQN3avTKMoAPqQxGTF6qqdwp6RSxiuZtszn793Cb7tQVzJ4d2VExovy22vTrLnK",
  "key2": "m1w8zfUSpHbd7xuGDC9wgwXUCyXwY9u9N4GwhU88m5Ujp114cBNsk6vvs5Uge4SYTYUi9tUh95JTmG5qT2PFRvp",
  "key3": "3zTWeTQFD3h4fRJdK4d76QQnSkwjTHSWx59bvdXwkaW36ju7D1vb61xXztuYAW9SYMwGtYorUPJ3BAXqt86EoPPe",
  "key4": "sJ9VLGksC8iAjPDibcMQ9onC6QeNLp3sbkd8HrWj7YLoKrdV9pSWkSakJ4mTRB35tg1xcFWDTGXmmkWifCnicTj",
  "key5": "3TWyE8pJQFyfQKmTJ8gndrpy2Rqq6aL9Ke3k6iAP1TyQve3VQxZPmTH2LdAYJ7FuCoCx3MN7dgSstTT5Liw9t8Uy",
  "key6": "3bcEND9WrGZiUwbGcyGs1ggwRFNPNpDAmrxEGPhg8gZ6A8Z4cQnogFe4S9WZJPJ1h1WV8AKoRDtrAPSeFPi5FUWC",
  "key7": "4cFRbgr78cHrse41esATZLT88tQXS6Fr41kA1LPAHz8vt6aqU8G2Hohv3hFF26PzaBMEYjYrdN2EevPssgWoH1nh",
  "key8": "5zxssmkb2AWCo8TTR73cHhe4TSktqL4hq4isqHknfkfHhuq3rpxKrgjFKiYnHurJeKevn7L52T5njaAghXcqjYL4",
  "key9": "5ko9NLoexP3z59du3oJxML9onz7djF6U8L9NS6oitPzACSo8mRQf4VyvfB5r9sdWX3VxUVbh6B2MtivvJZwQ1hiP",
  "key10": "3A4TejGeAoqoKbZansbUA2nzZzVDctDURTtKJyRLo46MtqP4eJM25vuqpGyNgMnF1Vyjha6WqwkgJyPTc2KT7EA8",
  "key11": "3Wc242grsdao4NBJ7PtfWKDJpu6uzsTqRrnoymsQswvE1Dt8gAuiV5FVk6gESS5jzf2GdjLabCZsXFzidw5U1iab",
  "key12": "3d6vT821KYckvYcrFtBcvshbZvsZzdwVHt64sTXQcC3D7ae5AYjrDcEAHEM6BTTfzs1j4fXbKmxqQ5jGqjE95nux",
  "key13": "4ZP3Xt7bYAeKwocvHDyf9K2ojL3ffK5CXXWAe7Nw14ETrkPpUeEVyHEEh1XU1jMj92a3rdQTK2KxqzTEnVQWSrLS",
  "key14": "gu6VHiejDDT4s3vt4dZamH5tBH2a57izLDyt3Bg9h9s6NW45LHoxzYG4e5nmyiq5Y1D9SedHMuCA4yauDaBA9YL",
  "key15": "H18HqSdi3XF1ngNFPaRiqpMhqCjbtyvdC21NM7twXaqZ2P1CvZQGbr13G1z1M4px49hfy2rA1hJ7TEMXUMrhZtP",
  "key16": "1WrBZVqV715KGHdtjU1CPok2Py8vRB8MJNBP2W3jW1H6HizprtSviX4jurq5zaB891hiJSyytKVHvpevuz93ceX",
  "key17": "3sFcENtauZYQfVDPwnCrjBGtmV9czKosi62QnkvQkHW18tD5yN3RW7zrLWFpELYQFJ4phywvkvM8CpQqhSVrpye9",
  "key18": "2httKuqSjspDa4DUA39wFp2vse7sdz5FC3P2feerm2KSEJRfTbbCDtri2xMViYk2cfikumtq1QCzJqTi2Gt8ixwo",
  "key19": "22eKNwRjJtPZLPWnU5EEXDpcuC1ZB7zrwPzPhqYDvEZx7Mb9V4LcHDZi44t2LJdy2WXFQHBRde1h4zXaR1sKRRPv",
  "key20": "5wGQZN4Mny1NZRJL5z1EmFCmAhyGJY51WJwuEWZYNkjp3uwoYHCnaJmm8U8ShWhd1i651PJVjB7Zp2wpHP3T7r9V",
  "key21": "7fWTjhi1wwhQiV7YqDXUyZfco1btm7EAkg3rU2viDBi3QaXAmz44GUKzu5YfLWfZadF1Y7WtuaZobXiUZFwHGBE",
  "key22": "bCskQkhkmYWkaGzB9XvqiXrs2Ht5VkyHcZNkYcXH15KQeXBLk6VyXGtrNAvR6h12MTjzpucMTp4gmRrniT9rtMG",
  "key23": "2eQjywxSELB1sazMjUqNTSxoR72rwsnnxffEDfWkJsWVWWrALRLF3bJrJdkUw4hKJuNL6tsoB1m9hfE1Jcp1mt9D",
  "key24": "2FVhkapC3YssvAGJoxyG9ktVBoh4c3bMHeebdGTCa6Dephjzo8jgbnhkWxKfatdUucTCqPMxHRtWGJ8TL26VhtPY",
  "key25": "5yKwGtfLsyHgTbKxRhaoF8ktD2wPG6414eXwGEZUj6J1cTQF1qPTYA4wiYktR48Z67ZQZ9U9NjwWL93LmymUxKYF",
  "key26": "3TvhkenByQHXcetFKQDZAQJbj4Qff4n7w1DXDRLNBtnHEgp4an7aw4iY4q4jB58VghdBPoSZTZom1hF9gfKUk85R",
  "key27": "4zzB12VHi5JVENu3sXcWdNnhwuzFvhHVFwQdWDsUnjrHdQW9m4vbH9x3UMdKonwkmFMks2wHYy9dT2R2x6mMm9PJ",
  "key28": "3MVuytT53cgek4PfMP9JYfk456TE7nh4rYKWZaM4fwfD9TYZM3THzD1TrEA7F1RqxjjsF5EJNTu3TQ6fAg8TPuUQ",
  "key29": "5eUHpT354v2gmNnM1Mc3Ts962YWmkUCEsLo76j52iq81ZCPkm8kw5VBM5JWsjz2VDSin19WQPjptYgpbPnRLkVsp",
  "key30": "27thLD75t6MuBtR91x5GUHcxpxJDYi9M9hJ1eEp5zYzXRrD98Fk2i6Gx5HxyedWgsRwef87q16Jd47bx8ftc9o3M",
  "key31": "5iL7YZj55uaFAU1zroGcsoSa5nK533e1x2iL6Vgae3WzXGnCCCgpuvVzD5Lz1eQ3F2JzpCfSBXkFUsQWZTBvFCxE",
  "key32": "Z3iNwk8BFQJdFdkEXd296fnjKSn2M9Xx6QfPM3M9qXskGCM3ifY5DExqX6YapGjiyWRgaZNtyfPch2yAHFMNx9J",
  "key33": "uZgchDUgfdV45qRQcPSAhbsiawdbcoLEURqL2jPDP2drm5TqvBy8SGecfb8TNPZs9B5HWFZkrFjUBKac67mRUXc",
  "key34": "5cfmswz421m7ofRqgoD3VVANdZRp64LUua7YgRfEDaaePZ5Ht1zwaPDok7BAs7Q1yr8yt9heYerpxFXRGJKCJr27",
  "key35": "2zKXxxbZJMk6Mq8ERrvgnmDQ1fTjiqCBjW85ZiceWZnwDK91QV9VJ3Xdqg8z4EJJMbwpf4zb2PDphFYNNRtEhMSx",
  "key36": "Qhcw8BmdYCJ8wFNKJDgCjy1XxBcm9BL2hfJNjzvway4oKnDVhVh6V4AdPUmLGfunKCf1x9g8VytuP9Crty5BoHk",
  "key37": "5cznCwuTxGc5GVtCm7ZYFfmyfrqqrWQDe7NNg5JoaG9aTFefwcDPuB9cdx64xoWjWi2DfhAdFcEkQzoEL7vBczUj"
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
