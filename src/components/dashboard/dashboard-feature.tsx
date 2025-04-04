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
    "EjczQ4Lknkm6CPuPa8y3crpDQfMK9wYCqKKo5xPdV1Cns2F5sVcK82J7mmgJkaK8tU3NkvHxLPaEhy9vzFnkdsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufr3wdHjFav9dynj1NZLHhaAAMCA2SWWNRMaHeDudUuoApncEa6N337RsJE36k2X4K5iU1FSrP9ypYck1WptfV7",
  "key1": "5JGP44WZG37NdZTdPqmMi9Zs2tUCig3S3i7eFUhMQ4c7R5meFrUGREN5LaJrPW7zynUwaEMeSZHhRe4ua3fURZDN",
  "key2": "BiGcutjbq7h5x8wXFWnM535hYZTEahd1CY6ygdY2uEeHChTCv4SdYU3CJoHYKTWFd5XaiHdSCJjQLRUR14eK7M2",
  "key3": "B3r1bPdDjtckar7mB6cDQJpfxLNj686nmybfAS382KcmScHydvNjvMnoHeeaFfxtUdvtwPqit2h4kKihzjAP9us",
  "key4": "3qu47kPdhbmSrkmyZA2LCeYLGyLR9aPpbKnbPBmigpe8HH2y6eoNGLk699fHBYuRkQU9muP3FEBh4AyoEaAULJ83",
  "key5": "2jWhZDdFd5jhB9pKQCWKZT34eRswDt55J7gpxLYU32E1jS5dL2vF8ZQyKHf7MCwyagkw5NaNvfhwpoYRDyJ3MzF3",
  "key6": "KACFcYrHkMQey7CvLukRJPqEeSqxwPa28PM6umWSbYNZZVxcZCqqNGZQHcWCutYUdraTqtcSrF18P8uPBpbkFYM",
  "key7": "54gMZt1kgiPnwpoJDweHvKPGyRwxwRHZAuyyrntQTNYaVyBpHwDPxix3GjWoX5RPpC6nEofgD7Zpo2QgBK4vvxod",
  "key8": "5Kaha9He8mT2afzeZ2cdwQ1rcuXNnkx4L4h2mEFZUrqyHcKCfCnA7Tp7trtMug47MDebJzf8f2bnMafa1Eq8uLod",
  "key9": "5fDuqqCdVvwAo6SUxGYVxgCMq9ZznB67Sn2zERntDUtJcAV5iJr4V4kfJLAbiBPTYiASSpZWxuEL7rPEqRrxrxT6",
  "key10": "4ZzhPJeroPjvysFHHvgKjc1TKwMXYaeznks7nJBdxNsnHq8YZtoLFrzEPfmge43jMnYvDF7nDP1YvBWxrZYP5Wsr",
  "key11": "36XRSog6iiFUkbKwLRmRPPVng8tmabMrCFBFykA3NnZr3zTtk1cVBE97YEU5fVXc9jut3CLtRXsWBapbmQj2Uiv5",
  "key12": "2HeKc9J2nwmKBaw3AwtiygDaUMFPuSwJ9ZFMtGYstixygnRnEaP8p7nwj8Tryhgja9n3xPopuFGg5U6ZytWXmumE",
  "key13": "4bYwWQdKSJmRLwgUzAB8o9nmwB1rpqE2aoDAGjfKjYfTsjh1qv3z3ZT2cd2M7Bd4RWAuwqYRSJN8bkxs9F6gPGeY",
  "key14": "4LayfVHaEnnk1FhexziFWfhmHjhNXNu3PHb9haUcoQnaeNQgS4ZLcUM1cNzjHV5d5HNS1JnW2PpXuzCxqM48jEeu",
  "key15": "Zu54T9q8BUr98Bv7eof6vGAT1rLSGDJogdevatj2v8hvMhU44oSiko2MbXMD1LSWPYjgpdKRuLJihVzqEqRHLSF",
  "key16": "8uehP4pdkbxxTWgjFj1u2gFT4GL4dnRwjoKsnE3V1kAbfRkA7zK9Hbmwqj3L6AkRDkFvmkAT3NTU8hUqFtKFw1h",
  "key17": "3LT6r32DGasw3L1WwPvoz9dXLhy51iZtB8CmWHUQcCVCcUYNeM6ZHTGuf58HWwcnYqKgi81bbrSpsby8fcR9gZpC",
  "key18": "4RcPs6YWSr27jyqY3zg5eYk7PJ3iFm4pdBJ95CuSGxA9vZeKbLJJ2BNULjwTsfsMVSSU6eUmyd91Xca4pxj1RPFv",
  "key19": "5km7FfoHUSfT3bUqP4X7uSzwdienHqFpKHrqfepVCgxYyxHnk2D2M6hLDpRnj11Ph6BMuHD4aoa3iHEARSLzE5ne",
  "key20": "3PPGFRGDoPsTVPYtkRFCFPTdcexp6uymt4TiTT1HnDCesen1ysKjpVWf6Px27EC9sSQiBkGrYGeTnqLE5mg6goZX",
  "key21": "5BCWhLiZPWmaJkfyWdhoyfAdYUY5noUJ3dDdhnrC2J72U6MRw7AXV8GwfB2mG8XGggRrGTmWnxHxX5zTRKxDzKXf",
  "key22": "3Rh1UaMKQ9UakeVCkxbjLNLELf9Ct6X2gEjZHxyGkq7VqeBEpQ5gNUXnMKBniyVSkaLzeAYxm1duC1zZHwfxhszd",
  "key23": "4XfzUGmB3h4VMPPajDyuHYVFCQFE6HhVAHcTfDSgQsHnoibWgPBkssKtVvaRBmiJzf3ZMzFijpVjJ8UoaYjwpHZz",
  "key24": "HQrB8BBQMgA4dwntNzWFdYnVkSTwQjvjPneXe9f1QcMCB3pnuEVvgBhfvwZCLn1SenPXAVPTWYCgS1Wd7ZsmALR",
  "key25": "59Zz6F9TCQMxTxsPRWxoXRA1YdGoaGxi8rpKAbHH1SZEotQtiDy1mobbVtYRUpkKH52MNR4U8U2CJmszZyociAnF",
  "key26": "jZhhts2SteuXBNCfFj6BeYBy8aNfPifyUxfC1KQ3tii7o5mZiKifQ2pRwUr5Abx1hoPmd55f4bVWpT3hZHXWohG",
  "key27": "3S5xFLGn3CpRoqBTcbtYz5fwAsBdbagGWX9F8UA3xkhkwJhXVAz8pSQHhV2xoaEgQzJDsbnuFZLpFtrzHu2AeXwt",
  "key28": "3dkB4byQuoHr5ubjQH9rN5jDNJWD3RMqPABsV6j53GALQYjU7gvzg7F3Kv4bcr4cnPj4u3hRgQn6FkVHyHVM2VP6"
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
