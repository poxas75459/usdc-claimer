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
    "3U5jGAMNSJr8tq6B8WVGsfyd387viAs9NDxxsNyhawZizTwePe7gwb9sL9DmkKxu3aeogWy4Rs8oKFrXkhjmAyQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngW8VWi5dC1HjeSVTMd6Qphw4fmaQFpsHjMDkDUpgw8vcZfi5nmr1HPZtyKEc6iwXfbyuQmr83K6gGy3SGhtRha",
  "key1": "557cv9L6NWwP8A3FSecHUzzGoka5rJW7zFCxn5XcftVct71wWNrEAFgi4RF6edsohwx5ei4G8HiCvWHUwJgWaZb4",
  "key2": "2yYSFXJtgpmUxh8GvMNN9C7DsKXuDWzcxCzqZrDqZcEtMFestTjXoSYrhj6hFGDpLqyuVXMhCgKaG2o5dxGzipde",
  "key3": "CDAeX5w3a6RFqBuS4YXnuGTXvtFfQsvadqGeQKNwNs1mWxNcXzdPrNHkSEXvewUfBhfkeBy4AsxmG4jfaYTVoUN",
  "key4": "2aGXUCFTEGxydDxRbLJD6kHjPY2uF2gmu4KCfnaioLsPRZNwUddH2joezxeAAi6jT98DLSECFT3U3PhiAQh1BX2w",
  "key5": "4Vh2PF3yzkF7pb7BhaZRRhWJdbua8vXj3n2EDn5LzaXiamVuaX7ATgxQyuTXxJ1GdM1vweLZjJAcKs3YpF3Pmq9q",
  "key6": "2VmtwDdQrMgyQz4r1fDDiRGKFCftPHH4yvMEjxGkKf4sRCrLhiyDx7qPqCrWHQb8jSxWA1EZU3YjYAT4hQBzD7yS",
  "key7": "64GYEtnPxyaD1b61NCHr3AznLBWAUFdwgKgguU5ueT5SPYmnWTsCyVxxXxR6abWATmXBhx5JhpqogRuS2QVjjANC",
  "key8": "5WVX3Gy7xj2X1Pgh8KUe9qaSqxWrCakqDM6jVtbUfdc4miGtMibBaiKMJHzjVuBTRAUVbMZjysLPw2bhGFiDg2L9",
  "key9": "2KAWPU2fkmNRXoo5GLBntKU42kAydV8vvwmGT4qQqSHx5R3V2jz5pcLM8gBCbfT4YTxYiFqfrHhKXuJJ2mJ8RTga",
  "key10": "5Dx1wFcS7v111dMcC6Erk8ReTnbHnUxvNPtHvBQaBDFHhJ4PNGSnJMtceGmPHdMdqFSs3U8hko3Q9pgAmVgsYfby",
  "key11": "2QKYP4mpHCT54ZSrdqn5ejVyXQ9pz3yXBJpJKBUXC6cpdLibCqFKubbDGU7AGx3dRfSU1QbtwdErx9vAT9Rp1fNa",
  "key12": "guPdZcNRAr6uJ1C6DBALcV3Bm54PmYHgxD7KJhfwTuLUnod2hg6YQ8LKt44U7PVWfu5HTrta2SEQyLtdWN9j7s2",
  "key13": "5kcbYxxCaWPY3DxkkymSU4uJSjBeVTuead7tvCXJGcTRxBLFwj68snpkqP1v2mZWHeaRjVvVR1AfuXRBzo6Cqh9C",
  "key14": "3HbHUvFZjJgioVEmyg2LbEbgh7fgnuM8GzP2ehnqxQXXLhJHjyV5eYuM9YiSVjcxD3CQdCZ7iKpz9nHoQY94FcE4",
  "key15": "3dKR2gws5gGraierpEFSiX9sg8oMu5CFVDNMzubk7CqNAqZHHxjLe4jt7VdJnwcCCCG52GCpyvuJyPcXVC1BUBvc",
  "key16": "5oftDgP44BENLjvQBUN1sgJYW9bJf5AUq4aMSs8FpxVuFArfrSARhMKRSP5dduuexWVFRhVNj1KFMzVoKzUuZcAK",
  "key17": "4DBnHUtaHz7mSSSXeQzWW6JKpCcCjY7BYjLvAtfEhS697JpDGLbnRpxaYEgSmvCUPmuCbjXDvzE4a3UJQpiTxdiv",
  "key18": "66TLFgantEtpNYrmcCLBG26e14nua9eQnYAX5wqjtw8DVKW5P2Xsw1JeJgJPQmLKqX3GpKq2XmPVTpucBdj8HxMk",
  "key19": "3G5x1WnXfehNkCbGMZNz4UuecGBMNc1FCk8KZfHkTatjbT8uHRZnSEc1ELbjbxv14m93DfYxNWCjGq5voALNe8EW",
  "key20": "3shpH9V527i2TmPd4fSv8mDgHVmusnmqJej2iCz1z1cJgyT9Rf4CkzVDzEhKF3isVzSxiUSJSvyw4pCgs8V2RvCK",
  "key21": "2ywu7sjxobU8j56joEFRAmLazpw31mFaySWzvXc9zyrV5QrqkY4KX6qjmgQoUyF5EwTe4wkHVHoz8ywiEwnD4XGt",
  "key22": "292dy7cAijupMx76n33KTCyLeVcuDrcq3YED55RDff2hjwsrYwbcrsN457Y2MY4jHcfwEERfiRefVETyKrKsimCs",
  "key23": "5utakPdn6oqQLXVMkTKZFHd2WmtK5mLZ9VhvpyPnQzTwbPg7Dow8h1UhuSUFmfqtBksiipbXpTuDW7NqpYbNaRuq",
  "key24": "REdaJiLwBTkzfWiagcN7WTRsd5FEssWR9fDxXxSZqzYhzfE3MvWFe7JssmK5XtRSLfDY7kXREEs6WtEU9rqSAeu",
  "key25": "5S8m12UXP8PSUyu91LwKjmEJuxyccUvXRjfpkeh7cZo4DBe1jLAd5b8MYsDZAWACgRfRnNhjWbLgdkZ2p1Ya6a8N",
  "key26": "RM7NwQ9gUEE7YBecFejUghjTnoG4fzsekb841CoGWaPG6LAQSxki6rVGysvdhqF8uXJqs4CSfnZ2WjWVmjZZUJk",
  "key27": "4yVgN6moPYQ2jy1qKsSr1BvRnoH3GnLaqZanZyLe21PkRWCHjf8jW4Cm6Lpt6pKZLSVs3tENtC1ubJ9enJv8RHey",
  "key28": "4noUcwM1B5PQDxTWXMN8PGnX1my4SQsbWZTYpTfoZBUHB2MW7oSRL7Q9oAHEoW2kBjXceBdk4f7qFcF83bzNYdpo",
  "key29": "23cLqPqMeeHcAC1PSQjX7rVvG4QLRC3wWijP4TU6eoAujMZYavyk47QCfdHo4FpBJb8J8g5C6DVBC54wv3JnGRT3",
  "key30": "2MRs57UB8sUUkUPTq2b16qW89SjuS2bx2LMudiiHKrA4sTBR6X28No3cWDcmz2AvkVz5wj4gA2yqZ6knqbT7tfnF",
  "key31": "9Zgs3ZwMXWsY7MSMzAANpfrtxzqNmetcvDDr7UeJtQ27kGvTXQqLQypvA18sLNtexzJsMYqmgTG1ZwozG9PFWKL",
  "key32": "2DrwZ5wkwprwkBneBU6tK9DnYNXv5HbLRBK7PFK2pqbAwo5zTmtiDgvXNoB1YyaL7PvWWLHFsxRY8Tjp9eo2u9XW",
  "key33": "5erR9Dv5rTN4ZFcL24xvMWXZhyAgyuPVURnjQrWRbqYhzeW7QXUSMhJkkifqDbn2DCkGG91nTM4P7scBBarh5dTu",
  "key34": "4AYJV8k1wR1hcjoBJcQ3u9GTAC7Hrq3ocUJZFuLin6jEZaPTVbSDd1P4mcdCQp8ec6dhVbTWd3szjJtWJk6rpwiN",
  "key35": "3XpUgzRg334xSPudd4seatxHKgRSGaKSNZmmTv3agyAAskgvffhrAxiSMMW2ZN4TcYMgzF8qmuZbMUb99Lv2N7Aw",
  "key36": "4jpbb2LEU7GypF3LedBq4WBTtntuMvdo79vvm9QcMpdqDp6MAYvuBLGaHjS5z6XQcqZmmAKZu2AQRXGpeioLLRhq",
  "key37": "2pYqVMpPDytTvRLQxKDgQTMvGhE4CZEbeM4jXp7SHk75sswwKgwkVChYGeXEzeq48ByFaWHAaaw38ujRjCY2DX32",
  "key38": "54LmjoazG9y6FrBiwmMnVBD7qrGp5tjcmuojx5AgTXKqUxNWLDhUisBuTikdVnXtfmmysoZ5kXfNaTeTRACFUaWp",
  "key39": "25LzoX7bMhe9b8nx4MKgfiDFDCrv8jC7pw17xdYSM5tBzrsdtcCzJim53FpUCS3mficAE3cDRiwoHfTVpiuxCfw1",
  "key40": "27hJpn3C7FzWeFNi6TgzUPYkRLs59xu8dMHPYM7MqKXCMCpD4RNMFwctTFngsQWNSKxHpfnMeJ2piYsrJJuNSwda",
  "key41": "3UzhY5qcpaMpMZiKaLNk44rWCCUJjmB9yqznBukuy8kakyYPMmgZahQXz5Feadep2NvWjqcDeom845s9sd4ZEY4j"
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
