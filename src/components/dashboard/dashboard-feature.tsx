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
    "2noxGsZ4szHtoQ8BKtkUm19ZcNEkKRRJVfvo6Yqxzdt2LqMvSMzzTRtAMDEQJGTiDj5e1dRHKxv24WEnNJVSFUgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4epAWTuCCzLDBhqnc2HMse2u8N9j6cpabQzasWwgrYtSeSLKa8XCJUVrda6zLX2cYng37LJvqyckay9Pev9iV5Gk",
  "key1": "489ftrjfTgutatRRbXyt9KLs8W6Cn8Xb7KDJUXGkd15NWYD4eiX8R7dCKXTwdscQNHU4SeoruapV6GaoDwAeSRcV",
  "key2": "pdjyELedAukHd7dX2irF84K6F6o9C2kdP7DdDV5wcseKnHqTkKr54fC8TrLr8vLAUxu1mQgKdt329ydaeShmeP1",
  "key3": "2Dt7egRzCuxWxABvYZQVHjbznhsnEXMW5vovoMMq86idPyLnHdJncBoX8iaKNwnQiChYobzpsWscBzTJBJtRo532",
  "key4": "2R858f27fGYcBbnwaSAEZzfe9vsm4M4xqpgKWxxBxQ3dFpkd7zxHFaHJAXhyp2MG48oHDbsTcUAboS3v4i61zhF8",
  "key5": "4xm9txvWqGg45v3Qc8mLXQTDUAWMoWTZHpWXXPzSHT1YQ3sqnrqRE1DPLQx8x9NRTxbJ5wPQwkbNQa1ojX92YPuV",
  "key6": "4gZxrYcbNbiiJKbX2NV88evbbeKqskKEAk85K7J3fugtfVD5fosXP1SSmHChzpL9hM9KBmoBc5Ehp41AwnjYkT7x",
  "key7": "5MJwJQJjNF9yz4uh8ByzefzVCzTqAPiKMnjq372DBHCPgFo197xRHGxJRt3nfixrQHy7VFuS1G1nB6sRbtQbXbMF",
  "key8": "3idR8WUii9ZoMug4amcPaP2ftzDjbrry2W79yCtwwbMXjnvar9J3Ay8C89aS69C8pCrDYxzYBYfiVxpMasK4qkju",
  "key9": "2NXUeA9CKjm1ke37EKU5EjmsH95Ge5aajQX2nd6bzEroYmJ3PYX3tPAdwi4dqH2pSaL3HPA6mhEeHTycoC6ocQ1N",
  "key10": "x2zCd8kNEcbWvsMtR7pRL5B9ruYZhGpoXbnR9qF1UqRsaer7mBVNCMGqeuVy1jca892pQ8FUV2pYpzFFP2wpKaQ",
  "key11": "exK6VTJQ1mJiCBG9MCodnA52kPLH2PnpYV58jZvQcKTydBL2vWX3xckpp9gP4zNUWJofbEoYh2rRZqEvvwbsYoU",
  "key12": "3Uoq31PH5mQfhmMDnnoFq5QALevRXRY3iAR8xW2TRwmjDrYbUPeuK5hxjxHVbNvPKyw7mgwLn7pQ2vMHtkApnsoV",
  "key13": "zgXpt8YnnhJMi95VRPKLns8WWQh1buUw3jx9pr8YJunqsg5m6SCZNfCs7ZyHYj5gTj4enwKRpe6ANk3wiC42fUM",
  "key14": "2x9FhWT6Ewx69oq2za86RdthWu3E8Y8PiyaPJmEy4njszNqEmapY34yo3i5dPsjwN54d8tnpTAvV1iLPLSTAd6PR",
  "key15": "6LULLbw9XmZRsDKVi2xLfx3KtGTB2ssEYAuJKby26Z4AT1aYua1TTw16PKibo5gqcVb2coZibWwBBQ6K6hTuJn4",
  "key16": "2W4PyYYuB5D6VPUSWTE6An1czfpRsspx86EaRnbsEFEuXtuttSwPkgazVVJnBfim4oD9FYSLXWa7Xwm6LVeCTfV6",
  "key17": "64RwLip5CSNKjY96ZUma2i2HKTzvyHW9ETCYW9HXufg7RnsvJaND4kTw6jU6x7wDDvU92GMo8CmXh7viS8Bojoqb",
  "key18": "3o6tkcsuJiya1k3EzdwnYZLBbugqqm9RzRqo6KcE9Cg4YVZhTxsUR1LhYEKwHx8Q1WhUVrL3PqZCumQiF8XDtoKw",
  "key19": "RThn294Ywx3tm7Dx4jFAsk5TAKbTRKQAJvJ6ApN11ojhokGcVCHGKm4y1bXXS9dHFG9c8kbEXMHSdpQc1SDgtuP",
  "key20": "5xha4U34eJEy8HHbruDWnoQAfFwLSmD3GYnwzmgTffkXrXETgANgFP2UpJZzt4npdfhjjk2vbQcFHpPtbApzqLPJ",
  "key21": "4Tpvm3TozBZAh4fPXkCKxDSoVesPghM9itwupMrcHqJSwMEnaCnK7E2tHxETGGVknjKGp4qu6xCdHHNX28yxtMKJ",
  "key22": "4EEZF1pPyJqcSdaMaspsxfxvBsKjB9dvyM7s12uHh74BswqbjQcBeYRBUJvTYQrk4ppPxXyxwfBzKqpxpyrVDzwN",
  "key23": "vuZ43VymJPuywXUa2Jv2rngi8r8kUgZfPhJubfuQ2eV2V3WKHNEoRZdz93bf9dy4rqUDYraWciMujSkoG3Xz9S3",
  "key24": "4WCCQr8fFWmzP9usnpL5Pw9ek2Tudav7feGwzwt8Z7mBMwx8isBUzTLoGGJT8vx9EMd1jc6M8j1eWaXWtfqsQX9t",
  "key25": "PyQpQaifBoBhev9aneZ6uY8pQc1AMENjEx9wzKw4JsrW6eCMxg1p2wNWJuHEstSzzyxaCT7cLRAaFHGujPYdend",
  "key26": "4kNZx1A2DhU3yAEYyELUpJxZMrCVNJsTia6qTdEH8rLEmhVpfTrRoxAA1QvKfHGUukRTW47mUJgwqPTxftZ5x6jV",
  "key27": "39qZ1DHrXC69wnSKJXcN9xTki7rfEmPKv716JR5CgHrx1htewnGdLKDCHKtTdUrzDfLzu5nJiVnivj7bixMvHfWm",
  "key28": "3ReHkwExJafRSnZEK4DQEpEkLWNAbRUTJSDLDfeoUXSAb5AJxLCPQnLNQ4zJiPC9WfBVWgRcHp88mqUCSs8C3fGt",
  "key29": "5CwZXeUjU7jGkR9Tnt2oUqWAWCSFo2SSKrzQotfcgFQwR927DBFbTKRNYtChosYXNYHZsoYu6WcF3EzjiBLrdwMM",
  "key30": "63cw7t5rEDV2rirf4Nv3XDzn8DHc4D8Gf9AQFtB6zPucSUouG7GAMsJfGjQJiycPK44gvT248A4WR66ZnUt2XZyo",
  "key31": "27kqQRJyiSBFQrdhDaFmNmU1gfd1gKiCSGVuo8B7dQWghYNwUXDztT7L43DM3FV8byDMcHz4dSEbuuJqyem2Rhyc",
  "key32": "3a2PP5mUbHUzzf42rF16n7sViqnpHC7M2U6K84umAjgdu5UFTdJh8LVJxJtCULgo9nbvwsob8W2b2My6zw1bug8",
  "key33": "58UCRtXantfsho1JK7aKh7pUDTHgLnG6Ew3puAJK9X7LNJadwNqeh4v9ggutRMayiHymboQjD3o1dQPPEuGxt75K",
  "key34": "3vPi1sKm8vYbtCbjpTz4LMSEH6WwCXVz6LGNgyFdXweLkv6sKGhx4JPMUWhkVYibHee1xyoLCNcmP1U7zUUC3Ku2",
  "key35": "4tDiJsWTQSRiG37xgCG3W11ovLRstZ1XZf326BGWmQvxsH4LWBEeYsAvE5qsx36RosZPqYm3fqtsp7E7fZiuZWPu",
  "key36": "2246UxpB1HtXRsLHCQCfs3trmYrbVwRWBdSkoqgvgrTq6GcMBJdtN2y4HPh2XmRo1YihuMcDpDwh9oNoJpSNcXWD",
  "key37": "3LWpcVRW71ULrcBzgDfRtSPDjFHp7CW7s25xje9Pa8Ehg4jLTWnrQMN8CnGap81BY2ivdxk5TkatQt84JdEyzpXf",
  "key38": "ykdMqAfbXsGxz8iqBuaJeDyLZA1Vpyu9mhd36r1DCUV1KexCCFKfCqUyFtbJUHh9BYUDQABg5TiqHVbAYHKpTqd",
  "key39": "G8jAacVsFewGPUiAww9c2K33yviJMrs8iKD3EuqXidwt6VC3TQxzEPSM6R2XvGdz4Jo7wnXHjoDHCBBUo6LRwMp",
  "key40": "2EDQwBZ2gCzRBrygBy2CtvHr91xsg3AKWzzezAtQUD1jqJumC9qfdRuGajvkzLDLFsSUsjYmUtmbhtKePL2jh9ZE",
  "key41": "go7kM7MM8dApdsL5HVWKZwyoiDjTqKaXd2gmNtZcwEzDzoiCtzNjs9Wton5jH59SkwmXCfCHKmpbmfxNJrFfP7G",
  "key42": "51AKUDYEuW58toaZKp6uZSfxevm6E9Eja32Vakt8Pj4LHtX86xL3YkXyTdbBy2vHCkFpxccsixziuaqL8ZPvJ4Jt",
  "key43": "4CgFaC6q8YK4LnpZhtcUDqyqGN61vEVvh22DWnwi88LVCnVJsW8YAs9YkdUHT9mWGFAL6HEZNrLUnfU5fZD6DAC5",
  "key44": "3PAVhGzLEocMZo3iJxEGX7JfeFVmvF5EwHcWMDjTSphUzVKS4QqjTvLE3WbzkzC4qp6Hwx1n2dyVzzjX5rqXsQfQ"
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
