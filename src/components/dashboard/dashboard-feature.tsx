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
    "5e5ap4HxUZuDTVvfijy7E94wokW8uizoXg8KqkrHWcDC7LwMSuj3cRfGLwn4QV2a7xJ49cyXHr9yEteoDFPSCE8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ViUCJixU74SLVqWehZqF28Co751Xh2v2hgbBbnWW4oCoFCtdJFe9UTquGvHHFb8zH4HsryHRhg6Z6J6ApaQqee7",
  "key1": "39fABMs9jPYzYAF4pcqyi1ZV4LreKazhfm8uQ7AY8BHrMh7Y6LpmdwnBW8mjkqZTF1fdbJ5N56Ei1TLAPqDoCtf1",
  "key2": "2Fm5fnGZZVh2L5ArjnamqKXNFUj3Gm9uXUi9y6zPTMVGeFNArRi1TPAGPR4M6ZvJfxA8QWNSL5YkqjA7kRwcAKrf",
  "key3": "45kGwJomPGb7Prua5cRn6S8o9Fp8hDjC28CvYZLcSqqGM25oMoW26z4M9x82u61NHXwksA9ErbHuYpxGrL6NKiKR",
  "key4": "5iBLAHS44Y6NMn1UDX9Hp2eABSZ4fFv2nCwYE9v99yGET3F9p6Cx67X1YP6DxFM1AkTxB6wAcAUDS6sGJCdFgbTn",
  "key5": "32adX9BRu2WWLYdysz65uGeFk5kocaT2Kx7yjy1eJJrJ5iHjW43cNrrNKb6ppwFhu8a6mHLcjtZsCsyYrQ7fsfjX",
  "key6": "4uqDZ2up6N1ueAZ2e8ZRcsnVx8zcQEePnS7b4nKiovc4wnPZbUSrSiiuuY2MToPQHMq3NhFxNHnD3WcWz1WGHi91",
  "key7": "4uTuuUHxk7roUu3gw7W6fCTGAo8jYgSKMMQwu7vLVcYheCtPF63fvDqg7oXGYcYXHB47HfBtKWfcWW3Qq41P1Scg",
  "key8": "4Y6GynCVkfmKN43gJDFxr8XAwKBXD2JvAofDWQ6EZ9uXt4wF8Tf1rTLPXziMfeVrEMZZ3LJkD88tdBHEu2fedZPW",
  "key9": "2QRsucwBtGxFygzpovH4RgjfWLbDJeGPtHsg55PukoxXjkaYnrbFxGQD5UnCDnVQJYvVjvMaDw59hGrSa2ihDdG1",
  "key10": "65cwKjzT3fUL3SRn315RAY6u1Nmj5wTNAZnSq2WFc2swGo5LwgVVkRUux5eptBVhonZmEcuPjd1uGfsW6QL8ruPx",
  "key11": "3ZQTy9GXMeZqYPxroZMtQfQtudCLh9YqR4aUhXa6SgFAm3RoNdBGU5Kwo8bCZ84CdxyjtxVaH2WjG7uKURa4E8Wv",
  "key12": "3s5PDBrdkKFowp9qBfnUHFggsAsyZk54gy67sYiYJkcCKLmzvcEvbNteW9bwua25QsZtwKTsmDxyUauDyoj1aSET",
  "key13": "64xVBp8Zjism6UDdb4Y3bidBzHyLjvyATiM2JSVKXeqg1ouHRTr71mJDGvVWgJwy629gvpwmd7Ti6DPQcm9nQ39w",
  "key14": "w7sWLfd6areFfofjFEmMEuS9dA8HPaQuZX2CCn7dwwRxRopMP4nyYrqFsawTXVjM2oMrdkTxuwQBYxYSzx42dev",
  "key15": "54sSRLYXEPvb8PAMFXz9E53tzRpMRXGC3X7rgbHgtwZN99SDNypLEWqLHw7FPiu7kurAhVk95t5j2Upxbv5M76qa",
  "key16": "5qtYuJSnZi4u4r8T5aW9rwqqbFyk4g4TXKtNCtGVUDQuD7RcYbDkqrbTyGR6be9psjdVJYpCJbPCwAZ3yPwFr5yG",
  "key17": "2jB5Mb1GBeY6hkZyUKTHximd96tnYUznodyfXVN3dMviw6x3pbBZVQzEB1YMxdMNseiJbWRLomDBkQcuUWSsrTT8",
  "key18": "43cJ8ddAXZDHiMCW7XyfCXh6v6VA4AVhjG19cukXAXCmybJxbCtFjZJE6ziKdBA86CDcU9Yp81Q8oVBAPPBejPkU",
  "key19": "3hU7Wo2Kq87PS9V663EFw1w5RhPrzTGfY5pChpzCAFQ6diLczStn1CWvquTUt5Dioh3JKkPd161vWzEUXzfhnSF4",
  "key20": "3esXVSr5XAjxGpLEmc3JqbgQXDHXhpJvqv5KAfsPi9Qn54TqGh8jHNYhiBDYe8ASgMDzDD1k7Jj5obXNJnD7cxuL",
  "key21": "2hMA5DjhS3udUy3hrBTpz1PpAUGna5fQ6VeTpJYWR9pcXEsciTF1pAvxh5PAG7TChwe7oYXjep7sKRvE8kVGRamp",
  "key22": "67c6QnXnkJuyzDYHqc4AtUrGjvKGpo5PYVnvqrSYsYV8GQR5nzJxEdU3wbz1YDNxgF1Cj3Ayt4ckbJcE2UkPFhJr",
  "key23": "PHTNxbfK6QeRYUdxvxycwKVeSbMqNoa4fo5KUdWV5L7QX3zXBE9JFk2SsBVDDD8oV6RJ6o1hQgaUbWMsnmkqHPM",
  "key24": "56ZSaFGQD3SEjwTmGqmGhupCxFPEyt1WM1uU1zjLEEoHHf1JSdYuvJTeyvFKF4oSwLppPAcFGZNjPsyvvTkX857h",
  "key25": "2bDY9ihY1gBDSxnn4MG5HZ5c9XzQzJeWNRaGM5SS66PtKmXY9hKv45WhESLZkZBbfwLEUKSBGYGJxkxhPUoZeEhh",
  "key26": "5wLCwxMo6cS1PbHCRQcxNGK5iNBgGKuh9qxFwD7jyj3gogN1FnRDBYrKnWbTcvxPzSfs2DtnJmYYvY1jACb1mUyZ",
  "key27": "2YtKKhHqNdhmK6sMYs9sCKEjsUCpMeHzUziADUpMpNXxjvSxWodgiX9XbSFrkJduB5YZczsZhezG7QeDnrPAfUfB",
  "key28": "5jgY1TQzF2YvH691MUmjz5xMcEuBy2Q6eiLedo43V8kK3pPDuDapDE2BHhcgS3vdqu9QfQPTQgmSgknoRuWKvrgG",
  "key29": "NZwXMmtzqsno2WS8K241eMN2zemMCsZht5vJhSvXz5A5hSaJFE3cEz2p7Tji9Gdqpjz4GZiHbXotDsKbRUT8oxr",
  "key30": "4L76g2AHMer15igxammVbeQxmKtFbn5ireBg6piVmGSFAUyxraS3ugvccEW88BuAadwm9m2wgc6qoEJq2jGxF7VU",
  "key31": "4JTNxVrrPhJUFsAmLow5kYFDf1tEsN2NNQvMstk7iGCCfdeL6BSqfvnyWgkDP6yxAu3xhNqXwD8M3f8G6pRC72uJ",
  "key32": "45b1jHqtAAxng9GJQCNcB45d5nqv7E76mG7JbgcdX8ZJQZ6wXj8cpdQboJnLUzp2Nrubwf92pYCzFnvC841fS2nT",
  "key33": "3gPv374erDLGSWQ4Hr9oBnA6vsXRYamQiUedrCUTfNdUWZou8m8pFB9QcCrR4tCsMKcoy8mv4MzypVzyotpeiPBu",
  "key34": "2mw7vv9kcc5sWj8PXEXHhGfsXf9fMzALnswo6eEZEEbz5YJGc4XSLTjd7mP2fbLQSnZPPVeZ1xFg4AaUdAY5tyjj",
  "key35": "15MQh14snBJYLxCnYeU5Wn8EodTQR3hsEb5WxtsZgaECxpt6piFCpkj2HH4JDwCQ6eyusZWnsgwiEPgoF6cHNE6",
  "key36": "5kFnne6jwhj7yv1ayPZpqJ3gNJHDrunFT4sgAAWiQm27mm62L3oKJ2J5DNH8o29tDkazj41GXY8zuBZXUJuuFXAz",
  "key37": "5icTzAbzbmLr4JVAG84EzfUFqwjTKNbbSPKuQM9MRPwAkfjbKUrQtcKWBumSnQR7LzTHvj3d5eZSDnRnekBSbyVq",
  "key38": "3sqeesx2od4W7F4vajFXp7YCRFcuA475oP7poyi6nheLmFe4DxU9HJsGFqNkqyfvatxyMpKfUQqDy7LdXHjFhfqz",
  "key39": "2EhtYa34t6rzvDYYKLy6fQ86kwVfj7UaYw7Tse3GQMXdzFQcmYrsi1KWNcyeLFjnjMP6trcC4ba7gceryLNdPRyM",
  "key40": "TvsxTQqKdDTmsfUyjisNw8qMnaQvQtzhh6h15dUUKi6NwyTUqd5v1DFEcH9f2okTDjdmQfp9oCVfXEiq8xwFfev",
  "key41": "2fGEAQuXFSj1aChz89dFXy9KiE2cFY6zHvEeKZqDDP1VDArjUMHHfcfy6VJ82KgBnH8KbUpLyKEmxMYjd3e1rtw"
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
