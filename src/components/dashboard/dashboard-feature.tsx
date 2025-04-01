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
    "5KwaeS84zm6dpykuQgapjFxUc5qRGbgHw1D4ae2Nz6XoHT8MXNjWZwjP1VkwPt5ZiBa4haNUk1wM8U512h29pQrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvee1Wn4Z4co15PwhJ3oHRTgtfXevxTVaK27krViGuy4gogzVf7jNPXicA5XShJbHzcXoz58m4AoeKZaNb8i6a1",
  "key1": "5F5wQdvXxokzQT6tDf3p9WpeCfGnR9aW3ASbsn9hVoj4qXopx7KBmBa7KPtC5K6edQUf6rPRyXFDZxGSYLJGQppw",
  "key2": "FXe92T64Dw2eBpGjd7Xq5WrcDECY2q2tJL7iZmPWTNpJe2XtVaL4MByfayfZQ2HLVaW39aVKygrnts31uKnqg4s",
  "key3": "5ZKXfC6YXvWpTwYH4UE1cgzVJFndAknerHR21AkDNsdC3zZAhpAXgsVrG9c8pvpELgZmLp8Am9ZrxavuZT7kz5CX",
  "key4": "3Mu25UcFvKEfWD3vK2xgaLsqLabQmrPxH75SZrjH5HNPBHFXKdt7QT4WLix3tFtgyxFKQPpNNuuJbsywLP3f8Wcd",
  "key5": "5bzYSYV8VXGViUBV7L98PqNWWj7NR7va6TsNy7gvxNHwQowfzb3nx122SWWYPwgdi3bQUMPzn7a4spyJZsXs2ABN",
  "key6": "3u1PYAtfCjJugv5TxMKka2B7MXRGpxDCJL5gSKb8kuRWrC127335ncpU84TPv5CKW77a491GQKR6QtPdp7xiexxR",
  "key7": "4kDCnbDTcrom9mDnQ6M9KCpQPQfdS3E6MmD7VXUibVp1y8Bf8Pwz2bVm2fbqWNYgaLxCnnD1rGHpoxXBpkgaZ1KL",
  "key8": "2BfV1pSLam9e2o7DXDH6uXZyi64LF2386YVvLnuMXEUua74vqh3cCZuUthkiY3C165ZUxkwqyQUdzoQ7eLygKSnz",
  "key9": "TbtZVBbsMyjHYj4uXuEPXWmZBtdERgMMH94WueDTqGUrDVsRG3bxdBRB41epiWABcTCEoMYh6om4iutajRn56kW",
  "key10": "2kzbzDiRG3YxcspyiEWuWHqXYW2HBBbM7QBvveaBDay9124gVrjJGfhQ83NjhLNVNGqMTjoEdKCPARwrzQKAERHG",
  "key11": "3adiRNPKUy8zCGxG27rvUeNEK4F6dztSrWAdBtLRzvLyXKVu9h2R1UhgjHpF3r3oX1YPnQjsxoQ6ZqQ91Rrfm3y2",
  "key12": "2QfUrCqj3orYBVyxaXNq53ui3pWUGN7WwRoEc2XyXKSJpDvYyYVrccCASyboZ1nNFJ1ZTqhN7h9oBsJkqptTEWtV",
  "key13": "5uiYYXQR4rEDRTnrjyo3FXKUpcvLCRV1exHtsC3hDVs86GcgyF52WwdFuL22aVYXgJXx6GigywhzXq49bfudHgBh",
  "key14": "22cBpn5FS4EPiz29N4huefVEmDxtnPn8kebbR9hF2ZJKvGx61oYaSyDKvCC6cPBi9G3UiY6K3inpvchGKTpDN1gv",
  "key15": "5xwKS6MsUHTC1cuRVDr3s9RVy863sdTTAWEsSftZgS3XkZJcfFggWsMzkGBadNkPMBPu5EEJWsMtrk5nNfFYMXuX",
  "key16": "3LANCq9FCvEHKZJPZXspkpQCn4TjucyofT5Xo2SRpEgQJkuMRnA7v5bTBCpmudCujFaBWMSsLUFc1HQfMhGMidze",
  "key17": "LqaEh1uGJaVqgu12shnw7mBmZqmmHJDxroNb5UsuyQuvZZn8w6Yt3WkKMcNDo6n2DxBGvqUwZeaBnrcpu9gjBDJ",
  "key18": "5AEUxJgp4FYGc3r2n4zyD2zs3RYJvQaRvyUrLRG8Vf3JajKL1xmqLrNqo8SDUXAMDpWod1MGYViBw16JTkzAo9cC",
  "key19": "5kjdwUPZsxzjXynZsfRVdY37PHpTLK3SBi6MpZf5a4ictEALFsjgJ9XQQzGfEcnSg5u78tSEu7jRg54gRuhy47po",
  "key20": "2K4f21E1w2jEGjkVonR3Vcen1pHWV8yJto6PWZTWy53bz8ySACjengb1niuqSHooCXmDZAY55bo7Bf8TewvbNx4j",
  "key21": "Gcav4PJTbNV6UR8kEXRie6bfkM4Msbd2VXnV83W3PRTPceTirWwCzhnhFJBzbtKCPyE9Jq8fK1azuAnur11wzB9",
  "key22": "245YS9k8oWwWyhEhDK7pHtZspk3UtK7s69XKHYtg8TvsoCFnWEdTPhiVLHjYNLR72orFQ9YzfvJu2AYwa86Ggh57",
  "key23": "a7FtarffMrwrKnM41avx9cqHAJEvUe6EpB9vqk8BShDGQuVJgjMfZUA8efhQwD6fWMtLfoZESCvXJQWxz5sLSWx",
  "key24": "59981ai8vFymWBt84Vxq4i2ww9tgYXSV28U6X1NgU5gA88JpvL4VEASiZNNf9Sd1SkqiLjaPfQr8hhC4ds5QaurZ",
  "key25": "44RVkV6JmUMieJ3dcysqvmPxP7Vyj8TaektZfD7AoXMTsRWCEYhLNM9oM5iC7N5eGbvVgWXy8397jN8B5dXVfhXB",
  "key26": "2XwMBupCwMrVFxT3Yicq5BLfXHVyKnexHR7BdaJzmPCTBaaDjvrDgtw2ixn5mMbfpFM3fs4FTbfYBXs5MEvDvECY",
  "key27": "5etnnPp5QVe9BGKrkharACiBfHvWGo9sECZxpkZp6bWvDwe7HFGKyvrevA3hwtqBrehqbiSTLbHC89cbZ63r85C7",
  "key28": "2ZY7BC95mGbwKAVmBYgFXURyUKPUfvL82nsyajWXEXzuDaw5Ez3p854GuY7vd3QHzx8oCVwqagVby2Csz7nCbocM",
  "key29": "3L3wXQ7mPw3QoKeBFA7JRqLRpTD3Z868E2Lem84EbmBqd1CFu9oMRRH61bQQBt8VghW6oCsDZnSpcoDitMDt2a7D",
  "key30": "ddWnGW9SPLscpvCqvEJFapK2jG6GAVW6vLbxgYedFdBLSK8Yd1vyfjj1yKm4fMu8Esw4Z377Xip8nBwcNBuuCSY",
  "key31": "26qQPf8UBWwoNtE8upo2osHYccasCXQMiHsWYLc7WqrRYhUysw9XA5e5JYwX9mZodcZTNi7hJ8L6FrfRKebEwqRq",
  "key32": "4RBKXWTsH6yrhRUn1RZFnzcUWvkH35GagdmtC6W9SVfRMiFXt8zuA4onWDKq1CVFLcNdEmhe36ftEHrjg5XvHoqx",
  "key33": "5dfB53YX7upqAtbGxvxkpx7h8iu1jQtrB4nLJbaGh77T3Ku9HTUXHVaW1xEwNzqx9LaGLTiZzsHvgWjr9XgdbfiN",
  "key34": "5thYhvkSLc7LXk5RC3LaTrRwhXKzanvYNwRBbSFWzRq1paziesTmB5LymtCsvMk2gK8Mn4MnruKYhzrBV3zA7o1g",
  "key35": "2MDC4FHvtgBGrKS8Zw8itZWjP9H7TNLY52zywVN1MxPfmwUi5yqWEaubrf6z6kh28U4C1PEY8tmo7Dk1VGUAA4MJ",
  "key36": "3iwe1uRv7NhUiZBXQVTUCaov9aXzyKw2TSrdC1Nz1yk2xiEEGe83rHCpHZDhjECvF5RQv49kFQNWMwSHZFiQrjEc",
  "key37": "3YPUyg6Q2WzhswwDaZoAmmaYC5xMoPhmXGgbrtjBKznWkEWPNFwwMusQbKwAPzrHJPet5MFUsCAf2LqtBs92x1Md",
  "key38": "3C5LVZ3zyup6UDPeedHLipqziUhRD7cFrZHKPFzE8ZwM9qh7mXsjgzeH5VjPivUNpdHvQKqiJCZjijWa4X493ZKU",
  "key39": "4ocs64qFogdTWkbJtrgvxQ5Dr2fpejaNS9Do7KgXuuUyA4vo98kAwgAzGy2jWyDArrdofx2aRpRjc88cs3ykeBL9",
  "key40": "6H8sh9UkXqP14a13BCYaAmoaY4apTdjBz1XwweVrkwYhuLr5QQPiFgN9cEBs4fbwxEFxyWR8BKnYLAoP6toDFkd",
  "key41": "5bHQNLh6CBKChzPAbotdMJbKMmEjiX7XQUfAu5NnesMZGLZoVVZMeKf6KC3a8nw2omMDQwvehacKwVDdUTzb6E4",
  "key42": "4qbhd5GKAk81JKGdTantFqk11FF3C2xSMczXEmm1TvK4CGQyVizS9ySEZPxxGbBNFn8UVw8jofm7EEpsmohPCvLB",
  "key43": "2hBjcf98bs9Y41pn3dZiphJg68ow87iHgNk4QbNj9WHyme3d1go9pEzR9Qab4eKirrPE8TC4nSeBaiB4iSA41xxE",
  "key44": "fDANejHddxLWj41ZAdC7Ux9oCtfWT3enEt2o3Vw3TQ7SToxPS9F2QSdNdHeUqSgUvPuV3jPq8AjdUJ3ehBt6FUx",
  "key45": "3fuGpJ1XMA2dBCzsps7Ds8QFAKaG3xiN4o1meJpB376DptfYaCpK7eUpAWQCZRFXMnvbmyyuCsNmCymSQ2tRwmih",
  "key46": "4TD35JBw5nNRTrDTXrFKXMT96uBbi79rdiB4cCxjNfLn6J3FMuhny6Vq9YjkTxyo6RyueobrCDmTDbQtBQZKDPUJ"
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
