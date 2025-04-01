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
    "5pB2FGuucH8JGfL5kQyLum5HbLvZk4tWBzUZBSb1KBiT5ptpsq3wWeGpLuER4naqpsjne1xgNxfYQaR11pt3VgsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58SXk3kK25ce82UvtpSo87xbNWBCBTYYu7RYPJr4oRSAxR8pyjC6ojzNKy4pRerUBnvNcqpThugHSyE8fhsLcCYn",
  "key1": "DXcDGnJUzhvUncyLkpJbkj8HZtiH8UEmELuJoRoWAh8D3aTYCMkSn2GgX3Qt7VKfgReLBG8efcLHRUKA7sMpScP",
  "key2": "2WVFrazFZRzDNKRF1SFnyWbJ4t8myXH6Q8WTzKRbjtEjrR8YUT75ZBmyr2M5qWEw68ejmF76YbcK1ZDDX4WF7xNy",
  "key3": "53Xsfe1uzYfsJxqN8s9qZnw6JUUELLPJMTqr8mFRxGd8UkXecdmSzH76DrKSogU4Gk1KewdSYrBW18a9ucx9nYiQ",
  "key4": "4VG9E8Ke9J5frT7QNE89eQiTU9yHtAjq4d3cDQNQ1UCa7EVE4cZ5M8RMK51rrSkuoo66k8BYpDsoYbuWEToJ8Xc9",
  "key5": "27NwgGmJ6DTYBkuJPhFindGu3er4r79UUoKU2XSzYC6QfecFvMSSceMvU5TZPFrW3VnMyPiEPLP8nnWUQoweXbWo",
  "key6": "4mDKey6ta2aJniWPsoeRhkU7t6mD7XBG3ZYmc2BuYcM3fU31H2YtN2tiubnY1SxfxnQpj28FDDrJjyiRXvSQmdjU",
  "key7": "2k6F1c5JKRXvB4DDp75KZCxEfmAuLJLU2fG2GGAY4Cfb1Gra5KBZ6we7WP8qZ9CLDo3N2qe1tHTf5X3yKDKiSM4R",
  "key8": "2UZyJ8ta1YZnqt57KQm3GT1rbCwdm5yUoxTJwaC9BA72Jd9hW9FAChDJ3J1iKFYdQhNbDVZss5e2Q4LzT2VMbqNh",
  "key9": "4M6YpTHtnNu9UifiK43NBtfbZ4BsYAXhYYrt4MLSMpxXPNmcYr53nJPuckipEmaBXYHiGx3t9EnGXR8aaK3CCz9W",
  "key10": "3wu2rE6xhmHGL4U796z7WRYUysZYzHmv7Qu3EpJRAYECiNCkmk3tJ2cxJ3j8Yu5FABPm6WXWRNYmrposmmC7NyX2",
  "key11": "5uApQp6jmGk6rSSP9YSqZF5jAAC3vfAf4wHNURn8wR8AspGMT1tPEKsK7zG3wtX1dG614vR8rfHLMTWzXeLXhLG8",
  "key12": "39jTgY1382U8EHgvLJ64mGDzf55hsMjEZb9YUW6So5av8R7daT12HkRSdHfrA7MJeg9GWRurK1E6nzfpdadYy3Ri",
  "key13": "3fWXSUxoXHXwUr5NjJB4QrMJKuv3Q9c3h9dREs9wMiEp8GvXvzgM8PDSx8aN62xmqwfPZWomxTmzVJLxqR9STVm3",
  "key14": "3V49q9WpoiVVWu85dTrAJ86JPoK6v4LQDVpDAeneQSV4vezDJoLdwPjMUcagju5YwjpGu5ZZzy3akKDmY6W9RPdP",
  "key15": "2cAeaXwBrLnoikdM4TAwNFfLWRRBEhA73zfYkX1PRBDHJzteZhAriWYJiuGqrc2gKDD9Fzear2wW7ZwpGqvth6rh",
  "key16": "4EzCBLwqN3pRx9TZqTEZBmxb4JkGHUGwtAucFnqmt658QNxeQFKBcSgomSexgVKvb2zBQe7uqwQTGYw2sE2vsq1E",
  "key17": "38JkQ7F69oSUubCrrorX1NQ2yS9AkyDrA1DvT9usBsv2bPGXRnd7PEr7GqhD23Kj1LDQJCWkGMTPP5SGpE26cF2X",
  "key18": "mLBYdB6AjgygJV7qa2QLx1syXPnw4JUJYvCy7Gwts5H4V3evoWEwTFViHHLiYzRMp875D8AiSMtzTNcqra5hWu8",
  "key19": "5Pd7wQpst9qewpsEfgEWC2tqqzexhE8iAQkY85HBdszQpAJ3K6UvqBppikYAh93zKGx1RVsLBJaB8mregvK8Bu6x",
  "key20": "3hhv3PEhuxZvzBwtFECuE7ERbLU9RhrFxxiaY4PKZWRwMzx9MEFN3QPiU7mttPsJ4uV4uiZKfbK6jGnxjVsRnUWg",
  "key21": "2T8FjSkTtaW5gC9KvhYFE9hnQGYqt6WtxaKdCKog29MsWx4sLuyL8jEgsT65jev9qwo9n3ZPiZsDEbhosKaVZtUz",
  "key22": "SDyh8FK2sDZvZUCaVyDjnG9ZoTui37hD8TddQRxsL3a9z9mgLmszHnHPmokzKxb42VnM3t3gksUsGs4cm8i8CCS",
  "key23": "2gaq68taF39kETyURjLKVPvViGfuYBTovZvYGDvVHCdfNp9ctdsJr1r91dCkkz3Pga7ixJHWKu6N1mvgFGWLJeD",
  "key24": "5Kj3mUZJRYAY38eF1weRcwhoHLwVJhRTb8LVfq8bo8KLW6FpWGETXtrJYdFWbUJWUvQofjtcBJJ5BmLw8rAucitL",
  "key25": "3DV1DAz1ny61QDP5PgGuZCebSp45MsAapU2KGH82AAUgpWLeNMsCgE2MJV4hEFgaHyuxhJ1Dn91jSm7P5W7ETjcw",
  "key26": "5Mqbz16fuyq4hJoXQaZQFGR3avzV47CjXd3uPchcJj7NkRvZgbjTohQ3Pt3RtJSCf4fkJ2w8zp4qE7JadhWWFEDU",
  "key27": "3F6sZMqRFqE2f6MC1aC9HVm5G7uzhCboAwiREfMjoE4YfeWDX28aanXKR6zK4uh7ux6fKjjrpHpScYqPrBWeqwgj",
  "key28": "5ECYiNoCcXb5iUd6BXmgbHb9d6YfZzPeQ8X4hs7RPDFUZL6tazWmkPU2vzzEmbMnMHT3LpxoYFhnBiN2N82sM9xe",
  "key29": "3HLVV72VggmEcxGTygwEuqhXtooUy8n2QMe4U6owvC2RTSc6AwoL2uq1ygzarVAjNoYFRyB8R4nTdV62wqmNZbLr",
  "key30": "5NLd2EMfz28edy9bsvDK5HEZcgtv3jHvzHZRA1TL95XL2UDpppzYkGSE2yfZHr14gy92YzUpdx5Bm93g8rNzi8pJ",
  "key31": "3qfLbumMqqZAa2uCiop7mfs5R1rroMMseh6QebEzhGP2MKE6nCHkDD2skugQ9QQJRCUbd6Qn2arQatYvTMieDsW6",
  "key32": "gk7c4bd3AV927xvvn9vCSgQi9zepqCV6UCVE82yY4zmc8b82FbUWaZaMUjX1U8kUDegXtqXc9WUG4EPMnyjk1Ee",
  "key33": "2jauR1PnW5EgYFsbXzeRtBufhQwUUa9Lft4UeN6yDRu1iJ9dcLpHEZNZeiHhyyGiFs222fYiwDqhYwp4xa9sJEqJ",
  "key34": "46e7dknbLBgvEFLQQfCtBSF8SttMGsCo7kfHFwvAE2vahjxRfWd6Ewj1fy4FivxAgTfvycgtYi9BHcduxRcvdtyM",
  "key35": "3ADgnWNLDsN87WHCWSbfadnaceJqyLmCRBaDGBdvAwhSm8pSfKjHFmafpirTmJdbnFEjqmBJQ5qMvqnVYXL5Rro6",
  "key36": "4qDd5QM6fAFcFm2U6FUREyUoSrTS1UsZEcWHkTD178Q1dnxcfHZ952EF7tqHY4cfKW8DforoRtQMmu524Jn1GYZL",
  "key37": "2A9Cvw6AwVG4Ge78o3zYZpx2DgBfE1GRtBTfv7y2tf7tCKXVjVSYHXvDmhLD3iW7Ur5SRnLL62RyedYsU4tvhTeQ"
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
