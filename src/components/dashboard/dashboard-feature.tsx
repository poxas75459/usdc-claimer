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
    "2DsQpRyeGyVyq7vWRymn9qb8Yr3vnxbSdpvoji826fW1u1p8HEH5b4UNBfnYmxyvQDFmWQCSTHVc4EPaKvEAB5eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7nphkT5FGcB6wrcCjusmanFYHi9ZRpEjksSzie8zKRkNmJA3nPLU8vyXLSVJzxrzemXguCAPJq1ncEVNZjcrzN",
  "key1": "5BgjphXMEJkmPP579opMemQbdwiWmyjWBJEXHJ1V12gXqKh52Bp3a2azLh8tQnRMi6zFRnZPhwmKXVpcR6DEu9wT",
  "key2": "2JDqatU65dDKYfBoPMHgxDtNLQCw8ug5Ucx4b4XYpEPpjaoYXncK4b3cVrGdWTzGntGKLFf2eHKCgY81yXeJzm18",
  "key3": "61M5gfbogDDggHtVcDVHZrYxC9crddYMN9VuzCMEx6zjQPiV8WjH6avrs6EaXAgnDcuqqNYbKH79dJbqrmzPRgYR",
  "key4": "55xbRHmBhSq5unDcaWKbELWfbadkboDSmC3nJ4wa2UWLWcnPkrzy3vd6XzQFmkjiTZmGL6SgNjUW4bpr1sS5VhQ",
  "key5": "NLXivgm5L41PbzxnQke5Mmraf9AjeKUF3JsQGm527FoSHx5KcYnKZ4mhALoma7cLN237juezc1woHLQpSqzmcBz",
  "key6": "2PEsfPk52kW8Uhs5b2o9uP1fv58Hr5y8LaCzBQKi8Mzm3CVUoPdyJfvQYgGvH7VqNNw8ZWUyXJQmtZB9pRauvN9t",
  "key7": "3bm6A52TcD17wjCbpSjsUw7YvFkr999MYC1uqJNJnTSYdXKAQUQRuucf2YM3Z37EnEfB8h249h2NfCgqn6cFkULE",
  "key8": "3SH4PddksUG3pN7T8zHi1ruA7HT1S37qzXpdudAeVdgt3w5NcdW5earjYJoz1zvjDBcfahzPzp5o6b8jhaWwSrt9",
  "key9": "3PaAWvwPr4F82StAuo65DEBe5KR24GKgDERdUngQ6xdm72tf59zEwhQWpHG6awgdFBjMRzjP8uGa5puSgS85koiX",
  "key10": "4sBBvbTQqh4qtFAUKauADyXgYE3PUkHJ3S1Y8aTZuPyNnPRt9TN9rDRJ8tyg2x2saBWQfWj79vnNN6ff31Uz3r3m",
  "key11": "2o3Snvbo3huabdG87L5rNM6nDXy9jWPBbAHhMf8jmWYpFnRdbxUGZUae4pGBQDCKeVMDfXoCQZ65VCZgqCDybKA8",
  "key12": "5WA3MLzxsoHgmjVw5np7dQsRkySfb6z7z2AKr2kAiVW43aooByBd6NMsav87dHGanGR6KTbfeu85St7FwP8X5YeE",
  "key13": "3zZFGEGEmSbuX6GN31K7Fm5eXrxPaB9EAcoLeRujSMjcMAVv2qHTRDtfaiugA7EF4k1y95Dsx4F53MuKg6jn1dZR",
  "key14": "4VrCVB7xgy9ACNWY4MEA9fU2gcL6gSkcnhpR61dawAkoe3pQFXCncyHvBAs1mFdjqanDDdT3U8LpkJYUn8u8iuKe",
  "key15": "xKgv9zfjnHEX2DyyjmmkfgStVhboGnQj9zEznAVEbm5H4eYP1zNEY4i9buftpBYpt9RYVMirAUnAAsw5pEE5tXm",
  "key16": "26Es8ghv7A1Wcy8kcUoxywoaAFRSVJsWwXxvuNLmz5iDUtR7xc2i6MjZYFJupMPFY9aUiLBaZASCuks33aFSn9R2",
  "key17": "PmHoKjBg3u5ZrfsCfviDd12F7g1wwCjoos8LffUVCiyjMLM5K8QtVu8comgbGxuJqMzs7gY8Hwp7dtybTdMbNN5",
  "key18": "3g1DsHAaqkQiq2R77vWLXnhqiksRH2JpabapBXo7dRo36QNCwPC6uQANxBTnTMnGt6oQU2eJVtv9naHJDg3U4b7D",
  "key19": "35xhAN8tkEm1GWzW9cibVpDGVTHrcHwNXVLJGAiaSeg63zvMtPqd2AefgQDWt6qkutpTD6rxDoPWEQDB1PnCPRPa",
  "key20": "5tAXeAiFu48KR4tqstKcKQMALc8v9WRYTqobUjgwbpCQzc7VJE958o2fzZB6zggiELAXRss2N9GRndRiv9RYsgur",
  "key21": "2aPdR5jS8qRMhnmQ4CrLfHsrYRTAbyDha5vPFmDpKrcgnGWdV2GNJZyLEJ66fmYR6GEE2YwwY72Vqw1YgN37V6u3",
  "key22": "2qbUge7jKvmKMGC1HiEEDLSPa7QSEyfWPkvfVGA3jEMpeHMg8s5y3sk43pTunMBU9ecWT5eZhADm7vMnkvZUzn6r",
  "key23": "4kxeo88y4kM3rMarpZeZfTbzVUCbW7c7kp8GbnHjaKuu93UiKpJga5ibds1VBgiVo4s3xgd7UMJ79sxXajbVmNfg",
  "key24": "tFGyqxVe3Sr7E4bWpmywA19rrayokxXZBe5GtRpAVe7XzRZxFK4pEW1z5SUWPoizb1G51nqcQ5wwjHF1KqrKzZn",
  "key25": "5imvXoXbkvYenVz3rskA7kWsha1G4fxtnkXbmqam4eod7kBNuBMuGjfkPA6eAi2hAjd4v1Nu5YienYJ6zSxxzREc",
  "key26": "53oCEkwCXsfDoZREREMjbBoxMre1a7vNEunXMTQawowceCH4YE3xM2q4uJmjX7JhMTopAEzjh4ucUg1ZW44SgsBd",
  "key27": "29RHa4ZRMkaRyXorkNDYM1Zq1C1TwQzpkUtuCtwJipJrDq7fAk6AqnHc8X7BEkAEEHvWM9QhzgXJWEvuXQFfFT7n",
  "key28": "3FU3V7Y5sLdvWk9WbLUspk71Zc3F1mDdouYUNziQYx6kBYdFzXYgWUCmUHp191j8KUhYD3pJYUaqLbY9Ws8FXDwB",
  "key29": "3zeJwbAwrYS7GHst4Xwz8MxxXacjRzT4ac5SuNfyG68bT63tgTZkARu7M5BSfayXUUmuqDte1ZaUEWiRahU41pHP",
  "key30": "4fojqB3vcNYZCzsYpg4dNWadDLLYDJY58gXsPsDctxZjt2Gu7qtAd6PAGQpiMy5ybDZCqRX2DWJ8TPN92BuaXGkw",
  "key31": "mesWJmsRsAi8FFzroVhryCoEL3JvxuDS4EgBoYPXDidfWmgWvbWNLmPVD8gzknePPuJfSKAnxwwHgjM2T2vp73T",
  "key32": "6J6AGLyVCS9Kpp8W3B5Y8BSR73yjqjdVpmBieSLVR6jfjF2f1SUa85UA3pVJ9UrA5mhPXFVKg9tMZMGZCDEwZmv",
  "key33": "3ydTeNAWu6TgjKdgR58qe3JrHvU5yXqWHLBpdAuseFHoeAZzdLbJsx3ZQzpAqCCPmgfpHZFRqYHJGr5ZW4e8mPec",
  "key34": "5ujw8SYznyWKLjLPHFeaDSJUZMeCessTKx6Xa7agmYtwy3JXWATFeu44y7hTUDTgyitjz1JRTv8KFWEwaCdkXmN2",
  "key35": "4oeyUcQAhVGjrFpuUxXhv6BqmWQcL9XsgEDy6Dz3Bh58oUdDox9qoLJAAccTqKD9p7ZeJ7dj319pn4rfUxnSY1hn",
  "key36": "4ZRVeCxrgda2m85iBCoJKEX2FZrUttSkJerNoi9NKqeeQCefyTpaGEeA4NE273HL4CVn26kWnMv91H9qbsPgmX8Z",
  "key37": "4pFt7QGt41gE2kevmtWUbxX6pzCKHUyg1BjYGVgHBdgXEXkpW7n2NACdwNywpyiQMbtfyfXTU6GSxXQxbbHiU6bR",
  "key38": "3nASJDBCQMdJnaZko2hCYQso4sMByuqgMoV1g3qWDmcntMkGACsQtvAP2S4PDyxaCd2cdz5S3M7UJokgeRSJQAkg"
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
