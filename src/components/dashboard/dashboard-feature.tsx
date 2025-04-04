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
    "294PazwhohGvE6Kp3Qk9UaCJ9e7uy7oCJGmurb66c2vvxSPXEtL7gwcTGxRZmDRJd1QpwtpG3WEtJvTyhSQcoyFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4815UaQP9Nu3gYb1m1Ejxk2BW9piZeP2mqFfbG1z1eNUeJYxjj2PW8XJabJyo7hwvBZuutoezDxVtg1Jg7BQAMCX",
  "key1": "3iaq2j9EqFBkgoTzpCaXxTCHHHei4ekCAJLbys88615QpHxM8eaUusEsWqpzYMqM5X54WH9Hch6toWUeboHnhZrR",
  "key2": "4xhCrQNJ7gHtVSr7XfCvMqPuvj7B7n7DVAVojpgEC7beEju9pwNaqyizz6swB1C8n7ZbN2s4rkHRG1eqf6qDZW6N",
  "key3": "Yc8Spo7FPB3Hvv3pUwNVB9ukihGcz6iev13PLvzhK3uB1V4QWvuXhQpPtgz3cbVX2auHmYv1WLf7NTRtwM2Q9Pk",
  "key4": "2rFyWntAanm9DWyZKDZTyBBWNiV16D7XMbgK8aLX8fK76s5jhQqVYisvkL84VKXoHuAbhcLv5m62T29D1euioBwf",
  "key5": "5XQsyRA7R3Fd4XmLnVntg4FXqjRsXsWTy6Vjbnr4ExRwB7u3JpsF8Cnh6h3yTGkSWxPB2AnVvni3JfqcoE3KCvAH",
  "key6": "5Mn6D2RwLYAzsvWnnqst9bXWD9WNXB1fdCCGkcNx4nhZdevJ1QXChoRfKv4bFR9WuWCCWGVPjnzRGXXD5bPdqMKY",
  "key7": "5Yc9Fsh7fZ54J4XcGfPsLuE6HdohwedoZQR9jKmjNuwrbruGtaQ6G87dmnvy8bSSsQBR1EALWZJfjAiyUdxvEkur",
  "key8": "3zphXAS1hj1YRuzaemGqT4UuUWSsLJ74kMvEHpR5YvSJBQHL4kNNzCnnScrHpeNCop8upqtdifDwu8fniDSGxPYG",
  "key9": "3yQ11wmSZsLDuG9HfxGuFkBkSXVfSmT5W1fzLrU8N27zddfPbAipki6g5oUTfxsCmBT7gNWZKRxhaD51S6KhXR2v",
  "key10": "4B8k5k9qxLMVnYANJa8vVd8NcLUmMUE2NSsXnfuv1WjdyYAThGucc3drYKP5p2cHE4dZg8Pzg38R8aFbL12vJBH4",
  "key11": "9hW7qLFX4ivpRbYGcxFXr8EYv2vP31pRixti5pf1LruNCQiwUm2Qpw9tosGajhZgqeHzS3BkTfVwY4RYJkf8T6P",
  "key12": "5Hhymvh7HACWbJ444iJ8RMRjmvUCxxC5A3XWShZquypKrZezxU8nC6cGrpRg7iY9MMrzEjDn1H2JEfaxbZRmz1Ce",
  "key13": "24QPfrqiogDzZj2q6Cx2wU7EjNTFD5ivmNVPbPrS5jXjgE8cnM3n3LSfWWU3UaX2Ni3kyb4Lt5MqPTdxz5qPXdYo",
  "key14": "9RjCXZ5agg6naBMJ9ZAMxFFHjeW4TnHm4sq4K1AaTaEqBNLmm5maeBpoE8XhvNat8DN2kMB8XHYi3HCBTqdokN9",
  "key15": "4PkN6kdrb786vHWDjYAUqtsDJXPDo4DWQ6A6C8Si7UnDGsupZCD5FgocGuHsmGdQ57bTDxTPG6QD23jpF8yonRNW",
  "key16": "45LcSdUyBAihezRiH9KPc4oHg2Tv63S84Gnsmatft59VQ5MxVY7AjpQghUU4973xMUUkjcMtaWvu6cEFrMircpMa",
  "key17": "3jMmLmtK6KGJtbGH3PRtQcLp3raqZosqAZKnzf8iFzPwBV9EdkRTyyC3xKt9MnkUd1fWG5GYjezybEw3qvHHWrKB",
  "key18": "4TVfsqUBwcFSgX9dJerV51af4YyvNNeMntLqMMfgbty1tGQrdipV1c8bRQbCs56CsQL7YsjXYUJYtF5DjwYPvDRR",
  "key19": "4ni3vFmVHgddWxp23bkLQX2nuA1nK1kskwAStRAhq1pZ73Zdb6mVh3kyxKRnjhXV68sKSWfe8jVCFekg7GnAP9Yw",
  "key20": "3yqkYBVCifESU5sdwqi7xJ5XTUQrkH31M1qv7LbU8m3vgP8NbnEU3JViNo7jAuQHNfge3LFjHeZgxbtMz8BaEaiP",
  "key21": "3hPBRJKFY5oo4tZsY5GtuKhuWtLt8gnxg2TGYPNMLnMwPG2qCuEAiWz6YcxeQpwUKtgkpX9rWLKogh7o1MUBGAYL",
  "key22": "neM1H4bmxNQYdJRXCaPbh8rP8Fr98nY6SLosfeHZyMZHC9CkixV88fEoBruDciMaz4qSPrukwDijMaKMijF7cBW",
  "key23": "4FPrUbGN8Cwb9yDZxeBmc2EVB2NvRDT8XcWA6Dzn8ubhjbJCT1E81AmicgDJVbQsMjt1Eo7wXNAzGK7YqSx28Ae3",
  "key24": "5EmiFJjPTJJ6rVhKwN2dWGDPBRG7EHKzw2e4cczr3ScVsM55jrrtzKdzbHTyDZBP8dbkr8e5dXbDp5ehQFbsjP3S",
  "key25": "65xpKyV2syriadafbRqvacyouJfaYJwGEfNGBqrUk11qY5F9AyLKicQ3fjk78sYXZQwyMmKFBd3HrSjazHAChzGs",
  "key26": "QgTQmtg3KHwzs1ASZF3pq86YQ1onHbiiQ63Qarh5sUBc3f2Sh2gLBkuJCQGHaiMqu9erb6qybzw8fuv3rVtn5vp",
  "key27": "5xPD3da3MSDarhB5Wqxappx9eFb4siLyoE8YhMEeQfPT427v5pjVjsiCqTB2HVkKnZYkZS3bRwRftXe8yBJ15tAg",
  "key28": "3syiJbTPCVCdu6HPSoirFhH681z6R6hNLT1kXkmtt9W39BWVKyMvAYmorKdVjdYuWcUtnuktFa897PWBUvJvXBHz",
  "key29": "4A9wANYxHud2WPYoc9q57QMSQ8uTC6afmGz9oxGzGbd9VFqQY4driUY5186mDX6GoPfHiH8Av7VnH6RLGEEei3Wb",
  "key30": "3pPjBzSMXTBpc9pKPrFBPV2KqfqwnMS4tJ4FCKpymFohssdt3E7ih8Z4PfjxRvF21DASx3mtf3z1NT14SaTkFpb8",
  "key31": "3N8oL811VhcS2oN4ZgWZhWKExiT3rmQyGNFBTCaDA48VUJ5QcFh4XRU67wZwKU1dkJPq7GmHgt3nLjMQuxWkFjhm",
  "key32": "369w77eZLeR5NZDNZiD3fbE6DiHzdE2VFffqRcrE9SL1oyKHj2dSBu5uVtFqSpR1YDwaJ3QeoZJm3xxDVqBt1faz",
  "key33": "65Ctvr9ny2UkRdT5vbGdTput8vSwFKMDLm1C4GSjJW57KyhZGZALS4YYc4bzw5zkxyoJr3iqsWTsEbwVx47rFkHB",
  "key34": "WgfjBEx9cUetoGNoG8BxDbwtgxddEyYNrASvnvdGEoTTnrtpQ4vdat2KFNdZvTNPganBaHwd3Vuv6YzcPGtxCzJ",
  "key35": "4zwMF7Qa8CYhsaX6P634EPZYTinMyRoEAPRsaC37eUAcKUvkr4sES1BiiFCVDxHMHfGf3fj7sL9hyZEXa7s1EkhV",
  "key36": "rFAtu37HunJfLRSc4Tp72tx5N57XfsjpiDCJ8e641VMxHEdaySM8zcUq543xXotCK8XXPSZYKtCgaQNeafCLD3c",
  "key37": "4XxyxWoZu1VzCNvPGttNYjaSRWRVE8CaWAQb28tKCvmzeTDyvHvWtAqiw7wyJLcc4pLy5Ucfxg3wjCWJAXgAJDqv",
  "key38": "44umt4wKHiK8U8bJiLKQptMybn6QLH3xTDGaSoKqYiB9xabRCB7eCEbnSoDRkErL47rUCPje6QVhqeNe3tBRRKpp",
  "key39": "2g8AeD7cvsxH6g4i4ZihCeD6ZTiqbjhTWWyzFKARLqwE3Pefx3AKxDLiS3A9VZsUmg3PY8YX6zCiVcyQVM8VfNGi",
  "key40": "sskwd9YmDtgAgEpaPa2VnfGLyqPZXVzXeKGEU7tGygscwc5rw44JcR3TFxcCReEqrCs6wS4wXJGgMkTEQCinus1",
  "key41": "2kctwTVLpxM3VNXb4pAB3KQQ3AdoN6TDocn9oD2ae1oWJs1obgQTEQ9vYWqBrvgeCPpsDeP3Y13RR62cnaq5eCN1",
  "key42": "24Tc12h7LCBBQGXrHMMMdxYdKA6Nnimckm4TgZvNKJ7GHL84frA7WenmRKmUfuWVKvtWwuq8JFTH41npQJfQim7H",
  "key43": "VzNgh9VgA3pNiagQHEnF5VZeB9CH5xPLcpNDvhwrEwsspMa3r9KkN9H19PL2H1rcpkzCW6RfV1wAJrYpXJ4ypP4",
  "key44": "5HfrPNR2tsB1dzhZVCDe8nDFoeqMmY3fbqXuL2Wr32KcAVNi3TsAU78xKp2QM9yqY3CEPJiiDUL3bo1eKXYbtmFb",
  "key45": "3dfeiyZFmam6fi38QkJUdHvkrb7VL6sEpRDArabAgVeWrBhqKXAbSmr1swALVmfumAMdM3nzHPeSCr2geBNTGw3B"
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
