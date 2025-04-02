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
    "3e1qmHSxc9aQdwnNGnzVTT86ou1eAFPjpSM8FbDkcHPCSzbmHPuEU8zQ3JKxL3DyCJZBsfEoYuR2JBqcLLy9ZQHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmow67MFY8NVmHaEuHe4HdFo1pwtDjVbDh9t37TaeHSDmfHZFdSrxhmJsjZGndfHMH9dW2ttC9jguT3taKDaYQb",
  "key1": "5NgZnXhDxeiC8hMM5wJN9zkAJb5KdxWYFWTUtULC9uNwKKoDQxp5pqshfiBQ8YYNfMaddEjrCSmHwpvMSWvQtvBz",
  "key2": "5j7Cp5tpYfRCTgwWVhGxLtmZBXbCHGQnJPwfGAcammiX3Pm5WFWkpag4DmeY3TrE2URDuSyXGW6eEH1i3ULBb8rh",
  "key3": "3pqu9KNsuaCsxDuqTj5tV62wxwvFCyY2XJpWhNW5Pwrah6Dv4gqgsvgsgYqRqfj32kXM83ao8hAzdZ66TYbkK4TN",
  "key4": "5HMLqA8kRxmicQqoYKxsXPsdtxHr9H3yK8CshD7SmF68So2SMvkhDioJtAR7nUTeGrky8N3tSQfHnWYHD5YceTyS",
  "key5": "3UvCsaPGFU6Fcbf38yC6tRrVz6nU5io5xm21sjLH8kata2srHq4StwEwGToCMFryYcr6EFYvTHb8TGgAyDUhctC9",
  "key6": "aLTNMhsvydSdFgpAHridUcroorsMh1eH9oveLycwe5tYhjUpwYZX4tpYuLkj82fGVp84zMKSxXAZWfbp2yzYymf",
  "key7": "3A2q4NxHYUUUq5iP1nguJMdRU5E6XQrCqSJNuESq9btGhV7uKjSTVEbWMV7HDDqAv9a9nS6mqaYH1kxAmfyqorGg",
  "key8": "48GRch5V3Zk13VS18cdTLu8zp8hMC6TVUXTCCWWdCRXkbnZmGw5rV723SWjDjcSnJGxMdktUQyLuPD3Jh3uuPtYT",
  "key9": "3Q3gh7iZvkg85m3k2gvZsuzC48iEZj7mTJi9TpAEhWXuYpiLiWTfEqrzvzzPgWPz2ED1Z2qCTZgi41XEJdDaNL9K",
  "key10": "49K48435XmmNxrAZ7LCcTsWcVRyxrcHgP5pNgfdWZbNjngvza4qAQSZpDFV9hiRVHwUNyngVkoRbwFZwxf2mu8VW",
  "key11": "2YchvG4EkzNrzueXJ5HgohfxNYh2JRncmQbqGyM4BV95uhwGCmYGLAiWPkgLqRidE1U1ayqPG6GJPyNHAUv3122K",
  "key12": "2sKgay9CyKRrecKGugYgaDHnWaioYnPyvw3TCaW3TySL6LuofQHfesESJLA8Nu5qpFCjakHsj6FNQVEoPr4WQKBt",
  "key13": "445wPvt7W5KAuarDhAccRY2pYWv3oQF8n2drDyrsejAs2gL13T1CsM4FfPL166tBZWpGzQ1rmaRrHaE9amXR65GR",
  "key14": "2V3S9LHEw7UiLtEjM4DQfZZqFouShH9NMBTjc63qXvD1RWuH5m4fcoCGU39iDGeB9Xfj96dqehVZtTMLoDsTDVrB",
  "key15": "5ky6tbc89fLeacazTSLH8HpRy9s2w1PZKQFdZDwfLMkg3H41aV4Sb2hBxuiSVJfN1DncFhYRr1NRMkfXSVPKmDWY",
  "key16": "4oHp3bmmtLxUQjpJipET6fFDiUaGBcEg7HxSeJKuqj1KkWEo15zyMAg2UooeJKQDBTadyGwr1FZTaHWXbrg69jdV",
  "key17": "4WgBFbihFaFjn1SVm56Dan9VpSrej5GZjeWXmoaqseZ9TyCmUsqrjwifnUDdWwfYmgNBmjZg1uNXvdQ9cpF6TvT9",
  "key18": "2CPXJA2dVezWKXQh7Sj7oJ787KyZJStRN1PKvFyCFLTLEEDkFBBgUibcWJKdbbgPXLLaBwENTo9A86CrZ4cxQ8r9",
  "key19": "3vEDYaCS1x9dhooQNX6i8LH7xr31CTywwogWyxiKD3j5iV5Fi74aEZJtmsqXeg9YQYNzsT9vjUaravNQuzMhgvmc",
  "key20": "5fFLAVqXV45oSDh1cPz883apo5FNByJN2nfrvToDg6D8d3V3oSao349e3voj3SBdek8j9ZgWnVutyRAj8aaFWKXV",
  "key21": "4kKo8o7qbWdaVKZxhUJV8ti4LtSp4pxX3ZXiyqDVJqdWGKFSRaWEctpAKZHBMdWrGNTF1mnC1FjJvj9jYxTQvKFs",
  "key22": "4hC1pJYzmGMtE6r35axUhNZUKuRMz9Vvd8sYvsUYw7iKg3yrzCFo1FCYFVG1SaqAavLEPpzKz5XvW1VVWZBURdTL",
  "key23": "5C1r5AeG1vRcpHtUBNZsJFM4UXRs98rB8pBTWMBEk1ApdmZ1hJFMiek6VBWvRdjxh3Vrtbqnk6KjKL2uGgS2BESP",
  "key24": "585XYiVH76Ycr2xDiZXpuGvVVXxpeQWpSPNQxwXj2r7zy2WYSV1s657NTsJ9qSK8GV8ry5wM1nXNnMB5emFhkQuo",
  "key25": "5jdGxct3N1VLzP6diRwrraqmTmzzgvHbu4JsrUe3apq74wpMebR4ehKFamoyVmC7w6LM4mK21cMwA69A2WpYwMby",
  "key26": "2YnK8ArpSMGAQHJj4XCWn9s6wuMPMebhZH3HgouDajsMMwUqSyfiNF1dT4NWc9XN7KkhDzahiSb2xsfM31AggbUo",
  "key27": "5teCdg6epm8UunvsjWrWUDx3BCm5DFoLsXjHX4CBcBtWhYmGePgAxCKnepQbyh7o84DxJkJmKtH8usdBdcDEvhUP",
  "key28": "2k4pg8Mu7pEdiHDuWcjtNBM8FYwvFNKHpR2Z1DqTV65N12eiBgYi2Jt6JAMkjoH9nJi41HXKfPQpoZv9sovkSKWW",
  "key29": "28LBNKFbMUQM1PUkPZwzbTe5J5DMbsPJGgqnMuGQEU5vQLVa5GgykQgzXYV8NyxjiU6QiobNoqzLTpHpmFH92GGm",
  "key30": "hzwLp2pfmr4u3Sky4zFmfMP6UburfQNdLhVUVRANDyPLnRpii5Rs34tcmoex482Hio3QHAk693kV9Hdg4UvgGJ9",
  "key31": "24CZAtNTiKC9Qze9stYQFKkJYULLj2ckNRhZzW5QPTSAoWu6atUPi32auqe2oECmFZivFZpwYon4hVAuspyMgYuG",
  "key32": "34K68LwZG2Ba3EJpL8LxmKp1xS1d5NKETP3E7DGnwQur9Sg525oNeBFi5aERVFLhiAuRHYbc5WCYmxZxBmuiMw2D",
  "key33": "iDra7jS9bNooKA2TfRHJX5P7TfEenToKV7bNQMkTAc4UyxKyNkzoZywPLSUogFAF5u6fN21KtASKmpnKjHFcsCX",
  "key34": "3uh6aLE3gwGg98UkMX7HMFx8z2UWpWaF88TkgK34rVNiL9PDcAnX94eWch1q5tL31U8pWgf9Tgu2Mfd3dj8HC25c",
  "key35": "5pChqGh4EjcCrNH6WNwurdyRdS34S9q3FpkRiH39NzMtCCPn1z2wkBvtotgBf6Yf64SqqWDw6A8vN2Cnc8h7z5PC",
  "key36": "4iJYsVHvGYXSNEPC9bzW4hiFwCTiZe2vG1DES3RHiPrbDYTdTFJf3qFvBEEyXd57o3B3Tg8RFZEo3FPG8QS3Qp3T",
  "key37": "4fpF7bMr5tPpDcZMxAtPxUSkiNfs2wzsNVGCxPLBrJo9kUozVi148KGzn57TVwKAdefN3AiYoWCYrmtJY3x9TibA",
  "key38": "zmT5sJVU9kqr9hfEvjiTZ8g7WM8qnKJTgA2nnMnJ7uokyoYN26esKzhs3Nh8jb1n4yQsBXyrJMsC5NdTqrDAnZN",
  "key39": "2Cv8eWrTwjMRog2b9F4m257xHFJdrRng1V1ukqE19TDtfWvcxZbhUh1Dn9SrRofo3bbTWsBraFsKqP3NTm9CYzaE",
  "key40": "4xo8C3wYJ8957x6rLSVucQWowxWWGFWyKNT2KW9NpdgDvW2uRwp9xrNQFrrRzQx9NXB9yVHpvievWt8AkzkDQfFR",
  "key41": "5NmfiLUB7vWP5bjjT8xXiQBKFoSKBKaQCYF5zJXGkDDuTRqwAYtnwj7Jc5tUj2WH1LXMM4ESyg5WzVFR8Ph3EDGV",
  "key42": "24eetT93qo78JvRjKgjNQAfVC4NavwniNtTd4pnV2kcBnWSES5Wf75FxtWq1MB1MUsNCBT1MSusnxk3EbA7QWcw2",
  "key43": "2NmaNV5AqpAHZpBTgYERbCcQwZwDS5tu2ycZFXRffEW2W6oKWQzHQ6GBAfbUxmoufU27eEx8fYjZZShc3Aq3GVrn"
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
