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
    "2DjnZUxpk6FYvFgy8ReoDA64cDEitaGpGf8jfD1C6w1vUuLNvTkrUp4JwbznLFiuzqAdDJfMHhWZh9ptowgm2HZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWMMNNExWSD9kyjBaGCym3GGh4wVVQMdLv6cHS28mxZFFuiEVYHN5wuRpB7YmfEhHrfm8jCGQzEBVF3Vu2tWMVf",
  "key1": "2NZc2mg7gvXDHXacc5xxd3dZ4pYgyXVJSqhXM2wxWr1ASo42Z9AAMpLzPUoSkWyAP6s2D27AfxfgMy5Q4ooRq7ZM",
  "key2": "4rEJriBuo32d2ySxtmx5cTVptwfyBAstbzK1BozwpPNhS8Qd73PB1HEcBToySEDDCWRAjaFy3wgTQcjN5RJYezz9",
  "key3": "e1BGfCVzcfrQJ9rWJhzag8x5GWiFgbmoKY4b5rLBcArrJypHHRQLgf5Cq14JTYW3FBLyEQdAuuHYY1AkZ534cWA",
  "key4": "4kEDGUZKMGT5SfeKU7kadLisEyRKMXu9TKAy3ftJ562Jp6KarzADqxRzh7M3BFQ6iJcgzSrJ5jea9m2Fxdk4GSLi",
  "key5": "kmc2eP6821air9DSBGXSioV7p35PxFasvSpEAAgJnem3ujfCmw9dmkB38s4uERBrrZPbVxAu44xHfYaPQMydaGS",
  "key6": "2E3vtzHPaCvsEdVK2yq3rUAWJFKqAkD5gVi2XXkZQWdB6k6bECpZDynhaSoDzgFQe2EEfoGAzwEGB8ukVxGo4XAY",
  "key7": "piB22XtP9HpLQ1NjUHBsu9H3FhicBMA5FA8Zf8Vr8rRvKB1XCzSqheMXQm2HHvRYcaq8yczZ7z5Q77TbJJi8R29",
  "key8": "4JreXMY2jP13SPmUWkQK63gDS25yfmTLNPTcbMjUxa8FsKhoBHbxMKins7BmwkJaqb31nYSpyB5gGSLGVXCVnFUf",
  "key9": "AJNZffqh64t2uZkAPPFiVNDNYhZ8PsSwTe5SbhxM8q3TL7GsJJ3Xvj2yx1ih7jer1mvVcgER4yCqqKat82pFJ7J",
  "key10": "5Xdzt8w3PfpmMNAfXSJhB5tinwfrQCuG8ykMtXfP79VTZDnx3v7e9YfvZmJZxWvMco9mLbTGLWxX1DgHUxB1ELH9",
  "key11": "jXbE5ooFfzA1PAiEFubVrPCTvjHRY8pBtS9PakRaST5Ew4zPuVn2jfFM2irvS1Her3bsfvcrRHuZBjaCjftpHub",
  "key12": "Smbhdmo71JRPJpVeFcUBQhmfUkXSTwXPnRgmSpyfLmbhPbndGZ8DxodaivPT3Dro6g8er9VuPSG8LPJTYMDXybB",
  "key13": "35Akr6UDanhUoxCNNpCdHPPXh12zz6H24EmhajsGYdfEnANThKHfF6ERZdHyHiqKSB5eMdJj2dqJfqExbr83BvkQ",
  "key14": "3QGNA5bwA3H1JWvBi381YMtbfwXwmke9EUnYK8qkLLDeXaG7BrcydEqtnhNoboSsjJYRhmo7zpyu9Cdzvm2aU3jS",
  "key15": "VhFdfeaJtQM5Dv59m7QGyveHRdPtxyL6wXagsnuHruFkKsr2SCsXjuCVrkjY6brXutQnPdoji3MyU8rZYvP5apU",
  "key16": "4yCapRZogaA8WpHX8QBoEJusBd5v78xw4AQcQ5LfJB4eFVqNoCrZM2oyo7EXcruCfYeCtXTi39TTqSKND99RxzXs",
  "key17": "4rE6vBXaTdVsPSnmtGKGDkvnUnjaJz7h9HfjUJ1PiJrg6YCEMgTPV4WQp6upeVwnXXjqxW4Hd7YmeevhfhoH9VF",
  "key18": "3RUjuk7tHbJ6MeZyU7wprV9sU1CRNwbzXmMsfGYY5DWmk1EdiLL7sYUS9v8pW2tfrLQCTNZdAGABRVKcGr2oL6wU",
  "key19": "2toZ5pSTVEnoXmrABwcWBLUVA1tSs3nQ9J5Vb9TGYFqtud8cm5Az3DwrDbNapcwT8G9UjTqFJnSKxCCfT8VFPGpF",
  "key20": "2HFw8aA7u9Yovj1QdEtU9RMPanTHpKqhMcNtQ9gg9DLAfUupw1T2UAL2V73WPwCZKJwTJBLu5mTTaAU65UHfztZF",
  "key21": "4FyJbAvqUDmBnMn6B9C5hmzLjC89Q6SFxDv2h62a7JT2siXp9CD242R5XfdKC6SXopgRn5kz3r6NSMKQdsGMdi9w",
  "key22": "67Am6VU72xBbisaYt89kzHkWtNBTVybAFjb4u7xDYbvrE98Uv7L6yh3YSCCj9xs6c9qRZcCgVTAHyB9Sj2EcnTJw",
  "key23": "2Cpa9HTrVJ6AA1AAwY5RLqUnAVYoxbN2xpTndM6GFBhkzRoMtUoAGoPgSPZTMAAjLcpApL6hxrbSseza2CJLcZzn",
  "key24": "3TN4s6WAmMeLZh3q23estKzGWQ6fHYskVprKzTWyAjcXP9gMNiveWFWmH4JMVMpH291BnbHRHK7PiNfvgxXfBXSn",
  "key25": "3HtQU1trYfSt1vDV1b9U4ZzTuMt146hzWbuHpE28kzPTBgVt2NCuoHq9s69PP4gUZ9PZ52XxF6hb4EK8WNCy8BMw",
  "key26": "44v4hKFeqJNBXKS7NyFJY2jjYDSbadqc4r7BSDs9KsaB35QvnPG3wUjoPvsiha9swYi7TBaqdy13fTa4CbmzrrMp",
  "key27": "5H9e5YwGimmdgG5hkpRJXebGJEz8PXSMCZr81Vth16iaDCmfswJNhoXANu5swBKQj8CN7rkq9aYuAJ513njcgKSn",
  "key28": "4iz16s8Y4Xf3rBfPpKrowW4UpvuVWsnaZ8SeT7N5CaegvHHzWrkAz3ZxmJgd3odGFfjXE4w7MbqehJu9LMPHyXpE",
  "key29": "2n6L61gS4U8LLAtDMWnLjzLt2YYTtEgEnSLMTxBUwieKcPTDM5NDpVM4bw5RUofUKeJLgxJCkCSXi36oQ5iMbCcJ",
  "key30": "4UCTYgiKxf6pfTDoDD6c2iFXDoELdMxUGziAhnzioR4S3rWJHMWRDXmbcRfhZiwNkkSEZCuKtmS4zABed2mzKUMc",
  "key31": "vzcvFNhcjWRBpnNQQgFgqjTDrnyQENmcAmEynBo2qjPS2BNsvMrckJGqee6oKTjKKgwf7umcTXQNx5LCQqt9Nmi",
  "key32": "5G2wWQzcMTyZWX121Qyj4f8xivVYsTUodMdaMhZ9fvSW9n4yZfzRakYLQwe2teDbcrpYCmw96UhJNjah2q7NHNVM",
  "key33": "3Vj4VHPkzChEArd5jmnKLm8TMYGyLGYgqi5jiLB6hBstiJXvQ7eiA9DJAyj4naBmmGArhmJ3MY7a9ARC5b1S9egh",
  "key34": "42brNjJYrTDwveCMHfMxXEpPUsX93Bqyz8aEWJPmSs5TkFQQyH3LT73TTLUBpKgstbfbVrG5LPfxZZj3ugEG6ASV",
  "key35": "4tAwaFvNzJEuJfpeALZmA9yci5BPAmNiv4iVApzQrnKfHytiBbc9ZFoiuFte4mpcKzqbiESndw2pUDxJrttB274e",
  "key36": "28ty4Ldn1PNw7yv7z1s9e6tPss6fC9dgKstq5zUiDUrrwtUDo8WB8ZJhaGNQqapHJvGJzy8Znkx2UyCJaZkNSbnG",
  "key37": "4WP8wDrUhdhkN4aPoQM1ZFs9Jz5VC5pDNsuzA8Ui3kLfcwppHiBf7GyoVHc3Yb2zjqN5uvwZjGyB3MYyzAt7f7Nv",
  "key38": "2z9S6Tt8GbLqtZeYwfymtk8pESjU1F5rphDg6k1KjW4nnvtFSiQvbr1wWu8uwVeUSxpRcB4ZvU7sx5WQjsJjXTQx",
  "key39": "xfzns5irgTx53YETVZXCdKfapGpWenMvuEFKaqGyJ5S7kNSG7d9PLtWsyeSceqN3qKKfS8D25JojazKcokJdXGY",
  "key40": "2mKJqxkVK1gM91hFRpxgDVpBLw7A5HxFArXhUeiLfZ3nzkUMU7hnnBedBdpaHe9fQJtv7o3vH7QXYVEoPQXLMazA",
  "key41": "415mrx1yDVrNYZgNVcodte53Cbkgb5auZdVHFUNtFzDhmBgDLWYAWBaXMENXDXyjr6rwKWJ3YR7Y98KYi6aiRahH",
  "key42": "oGZfr2r8KzcPxfvgQPQKRBvb9nFisrvDm3KnxJYu4NpdQEvRCan2E7J2LZhAKGPFjPkkwwRubxvxGxyiuxYZewf",
  "key43": "7trDZaRp5cNU4V9a7KWYy16QhedB3YrJpTgF7RdPgigUVXUn53J2GNG8UczXVL4UoMJnhhNGVnD6ftcNAdQvubP",
  "key44": "5Wh2Sis4nW9taowUNCsarQQv5LSyxQa2ryAsb4Cnv3HWTxxkNoUtVpGY1WTwL1FGHvpJ88TaTiEQp9QhVyUhL43c",
  "key45": "3Vk7oGB6jHrNYR3toR4EvG3jfafJuuEqETuYwQBjhq5wX6PbK7HfZ8frPFiMgNb3TwTKrNuQGsphRLdy3fxgxJ5G",
  "key46": "4FYKucGgdPDb3wBFjyYv3aa4CtJ9uUwoXZ2ccbXGECFcCcjee6t7BodqrAjj5Y5eK5SyAMaMPikJURaPSxkoeena",
  "key47": "31MoPX1Abuuif5uYP728RznCgweNP69ruSxwKDTpBpZQPBS8J8p55rSibTfXf2Qk6AJRjdsVZPGoJyYEHWQUmbT7"
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
