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
    "3TxWnyaY2qy2P3ghaJuXQYweokn2mwsPhsXGDDyF7fpmYjfJwgzFYF6XRNmsmGQn4o1ViAWyNzZsTkV3Vp9aSzfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s95m73pqAHHX39kmXLp7oxn5Fj8xYcVG7VuQVZNtK9dWMH3sdyvYohkcgqUpp1begUnJ4g7MgVvgUMfwmZ2C5c6",
  "key1": "2zeopSXBHSfPdoeDap6yDeHXisVxuaQDAhuYLGKCMUJupFkbC1RbpgMvwAok4KFMmkywM9s14M3uJSWqzFzWmBwX",
  "key2": "35XSCe8PmVtFJYMLu1kd5Ka9CzPMjkicMf6Y5NDZ4VTjNdCX2gTyy3hmKsEiEsknwaR86Z9PpjJ2UiNrSteXR3UY",
  "key3": "5CehjY9synYsh7M7JzCeDEfAub4RxGGjJL1bbcivqcuHsA9Gpd18nd4hHU2fioxSBkmzLwRD7VJf4GKQPntmyZpZ",
  "key4": "3xyjC3bSLwznae8akkLCJNrjnoEPhHawaBZDYo44tUN4zw2f7uQjpQeGx9BasPvku6S5SdccUznDtQG1Wc8mqgWj",
  "key5": "ZQwtMiPNCNB3VL1o8psdAsRtF9i5o3z9bbGVp7BsGmNCQjeCGwQFrEewzZN79ByhoaPUnLbQCJ69gxJdo7ewEUk",
  "key6": "d3NQ5ihywybWc9NLuCfzoAFyoeWuoSp41kKJvwjh1sJFq1AzjfA4MmUiosivPiX8ztLKu7B4P6cPzD7UZQv218Y",
  "key7": "2hJSCy4sG2rjLXqMg6HYQSFabr7EwAfufDEZbKTVC4nfm5Yohq3EofnHPCXvaEKqH2QMShCRCFPDgyyELdTnFWqe",
  "key8": "5RpFgvVFQ2zPrM5U7YqTipsFZ7A8PWVpCss38aZMtSrtBNZkciWVU9cA5iC7sLyNgQxLu1ikpvosMPC8zbPJtoy",
  "key9": "26ttqLCMh3SjXLyWYtity9V1gctubvBopbnrh32KQ22acjcxBfaW6JsuzGMyFW8Gr5SAmss1HjE313aBbPSBMA8c",
  "key10": "3L61Na4m5nsqhsqFJPP19u2txbUCDMPyvzkHBjEMJ4q7LDfLxsN481mms4DukeF84jNPnDXuwX8c9EQDq43LCdWQ",
  "key11": "4ccJ6W459VXJQBEaPowhTaVopxhQRWdpY3S1GZhcPFNnXfjY6pw9FUt1qrJB7MtgaH4Lhfpxdabsv2J8R22euueT",
  "key12": "3BFVTjBJrYDozQZcx3XYaNDbLPPjSFM7wQirSBjgyhxVXKNjachPwqndar96DDbV1vF9B9paFtZWbyMUnGPziazh",
  "key13": "PrHyhipzD2C1tXdem5mr3rvk9oiRM12ubujX8FBMz67rsfoa1bXKNtKxjm7o9vMJHzHfzWgDxF59wHaCcYWRdq9",
  "key14": "vvPoaXWgBFeQaCfcD6REo8EitZwRiUKrCji1Z45B1LZaGnR6aMQ3CzByP9dYW2TD8tVeycKxBJbNR9Xi46u7GcJ",
  "key15": "pDcSw3u7vvmonhwybi6vQb26Du64YgGo31nfUFwbkYNM4tZVyuLLx6FByc2Xj3dyvCMpy437fPFxs4ZaUA6s39r",
  "key16": "31gPnkvMJt6aEaYUdicYBdRGRyiQRPnUmF5H6ngwQDhWykh3NTtahwPNc2R9jJBx6WRKbcYNBfZF726sHzqYKkd7",
  "key17": "5eRUU3oTHV9t6Xu1KBDqVNACoqKQrxGCHqr1V4TD9BqDm1rzLW9Gcc4mJK9RaWFUBK5mpmwYYJqT4GnYX7aWYSrJ",
  "key18": "56osHTLa49DgzDRrQdQEdLKv3XfkAbRPkxnnRqQB4Hv7gd824nn3Wh9zc5iBMEDXSM7Z3eQYErKcCSpu1vrURjdc",
  "key19": "3eLGm5RWjrdNRNgpfM2DQeamXxin9k39LTGpykKoqPRfuyXczJnk66LbCBnrz82mBWsvkTheiza8EddFL8zjuKcB",
  "key20": "5XnDfP8KzZUnkbRZvuUvTHVyfqDy7PeCS4pxhCq4ZnCWvsDMKx5fwT1dTt614EjXsfw13biNUyaw4f45e2oczQYQ",
  "key21": "3F6vhgAxFWGWDciXoFDZ2UvbcWujcFcEV8cgRVqMa7Sw6PCNWkWBmkCDFCLHJXxXuBBBHhYKxogEoGMmQEURoZmM",
  "key22": "4jiNSPJyUgDmpCQDB83W9iEto73MQDCkdKtekDm7uW1ULXZeqo6oLPvsdyak83V2idJmc2a5kSuuUBHbHniRvbsY",
  "key23": "4sJW27RREodtphe8PYyRKZLneR6uEThHkrpgiBUn8Vkhoi3BitqAcpLN7juxJrz97NkhuwyVScTdBnKnjMZTcB4G",
  "key24": "5c28pzD7TRcS2rmNkz62Vo8B7ZZbFmDWzfaJATDt2jopZpi92AqZjWpJcEmuXax5aJxALCkaSH9kArGzxmFfGRX4",
  "key25": "35oDm2CfRG3JbZPzvF3CowCHVbi1WMh5eJT3JX2cKmcN2QbayRDBTj1qB624LHXf4gisnLZDJNxnp4rmJ4fDVFox",
  "key26": "isic4CUqDCyy2yB2WC39vCuQiLmujpMdHGrqqKiC3QNC49jfkVhqn77VTzCpDpQKWRZbg4b22HwNbftx2grYjwC",
  "key27": "5GiTuy6UmquXFKAyy6DhdPqvVjABa6pZa175rrrhvPamNwtga15dpzrUCcWrS4szPMraHKU3oEEZz4WAE25LMETm",
  "key28": "4ziwXYkRccZ4K9xryJGPsWAxFnBA6Vo1ioNKDsb19CoSiRpdthHXxNYN3kyv6Z6FAW39c2sHzN9o9ogwF68oNXQ",
  "key29": "kH83A1QGhfdgTzkLJq3AnY4Dt1sTA8j1YraaeG9TWtfMVKcksuVjg9ZEC1ZT7sL96dBg932SL7ofcaYMx26H6Y1",
  "key30": "5u2ssY6ujTWuo981pvZYyy7VARwGLDy4zTyqQtQSyGKRKW8y4F9j7BBEzFWXo2NoHuwjCj9f7nmcEFosmMKNeCPg",
  "key31": "3AzunoRDuyDz6k7fE4zcPcqpLNWd7vrQ8CyzUaXVpSZTYt9FjpEVX4gffooF9adtSBVisuBXrK1WE2cLc7q715gT",
  "key32": "2WWAbRUaCF1zZpduzVCDF8XXiH4Fo9TzKwJUXk3QYdm1fy6bEziSD4cvVfhCxx3ZUrCaHhYaw1utJyTjZYPMy85T"
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
