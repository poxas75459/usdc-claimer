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
    "3jGekoStjStERMhbcaiVK56aoFbYRWPzkR6AZMcts2m8zzbHABwnr6BZ9Pgr4w4UzmTLceQACKkRqxpgdFgHpUrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TeKveE1YogAJg7zDZQzGekpAgND3RrjzEv7rhgBBgHpMMNJVKuZyxLYQLZA1aktmfQe2iHNCt51FBhGxD7nYZLr",
  "key1": "3pdSrKfxVTw1bF8pPem8y3Q24h3UCodxv7va4PUnX8SUNDuSwQwpbP5KAqW6uU8wv7PbVsBxxwCV133JqSqq1KNe",
  "key2": "3Q8WZqwqom4tyNN95agmtPpNRhjxZBU2xEGc7BWTqkc4NaW5s9NEDGGFCfZAH2wAdLDNEph1zQvCxMpJUwNjtg7D",
  "key3": "28tEFBTGAXgMmTQKJLSjfZV7pUSdgAzxKTMPkoRdr73iumQVXzey64VhPFBXgznJpVxZYAB99bXGTh6tjXhzmeag",
  "key4": "3z7ddDiLYVxBqCCxxkHP619pCjV1PUAMwHsH1sZKZJUEa7fzWRHLDaGxk6jpFbYP7ib9EZhTvUwXyiApmWLqqnaA",
  "key5": "3JYphCkR3EWg6azLW2MNXYCeztzed7sm8mbkGu1a8pLcwEaqKJV6TCewRhXAjZGAMHBqjqS2w17NcAQvnJSfXDF4",
  "key6": "4ogoDtiUb3WU4W3AmoaUeVee2WKfuAesg2hmuAWAnE4GRzF1GMsvsbcmo7eLKpS6gGKZh8VTCrQfiL2G6dAqLzN9",
  "key7": "63nmXdeTUWx9yo5KpJcNU6iiQ8BuuzqF3CRY1t14Pxv7f37vs5osqQJd8sTSXnKeMBTXhThAnd2TooYgzA2QXvBz",
  "key8": "3AD5K3geaBt84YvuZF2RZUAVpb3th5TUbScifzNMYqVpzwSYwtyeuDYBhyQum1rkMqVWgtF7eEQcPAsDWbsGfhix",
  "key9": "2yeGFbhiVnamb89YLhvivE9C4b3othzJA5DPq6pYPMJTCy4b9wWoZuiFeZF63GD1jUXLD27RAuX73umDGkT34ipq",
  "key10": "DHPys3yNi1vrGSRjKMLzYTBzuhtmeqMnCpAJWeVQ67UnKc4U1VuKPS2in51evusQgdbPRpCWd55Zy8yCxjFSVTA",
  "key11": "5isKsKfAY6bmGLen4oNhdDrfk9BskDoefAoJF52sVnHscmPaoud3J6CTrLSyvvc37f3m31gUHrEu3wg2G2UNjECS",
  "key12": "51KAFK4A5DCYUHPB2jTsPwJaCBVyfb8ujCgYs7EYSnab6r1U7sYneeDJb2MsxuVfcZJKnuhjuG46dP6uUkca4QBH",
  "key13": "44x7dkDZBN3edGVvxg5BscibXteAMFwh8nWFJintshBChJvHCJdrJ8bLAAXVpsaeaJPGkoJpqzLeozj6tBtKqFdc",
  "key14": "3g67tY86EHYgQLUZto8rH5bJWhWVk9184j52RnA6QYQ4QuCVrUC75cKUW2FgGr4kzCewBAL3MdnjeGCRij7yyyxK",
  "key15": "2ewg2uJHvDBFHR3jcxHpu78Sb24sFruMX1SCtM5bJt3GrMpWuADu1cY6BP5H525sbPcM1asWrwS9mvQ9jea6MoW4",
  "key16": "3YVdNGV3biEVruHFvUTJLfTycNp3v4CiD7m1AcD4hUbVGYzWfPTsvwSZPZmM49WHcMX7NmtMAXkpprJTntvjRR1F",
  "key17": "4NCfVWN1Ex7vRfGstWCh5L2n1xok6hdPUdogPjAvXWb3EoNpvTsNCKPVRbTXmKBh1uoNq3pUfwph2TqdkwG92BM7",
  "key18": "5Ukgk6FgXdHJPaNH3YzDsL8p4V3V5jFJMwL91GGCzyeh8aymvBEMD9urfpaCGXgi7exWc9hryc1afJHHw2dcyNis",
  "key19": "3PRkDAFUd3pYbK1kBYutbn8AVyYSMLfm3PjuUpkzZxraEU6m3BC8xm757wJX7NXLc7KyZYfgpFwVtjfUPm6Z3Xer",
  "key20": "4tFdAdLrPhCqXuftzpTcdMzJ2nLqM16zMV88aPGhiAeLxTCT5STvedUkjP61P4YTpfEvBud1gzXDUDA7pmrgp5t3",
  "key21": "2dhuKepmrpjjfGJhVtWqo3TSDd287i2nK9xrkWiJJt5RdDMyCqk7s85sjtkmSVhoZ6TGSkxLLwBMmPn4THEBiA4z",
  "key22": "SjFP2k4SzZcF6NujSuGhtNHYfpKP9XZTY7LFP1VoCC3RgcGSfdZf1mNH2EaqW5ivWpYiEjGYrPCfYtXDzyVA1NU",
  "key23": "4uAXFAsZ5mnzPbsr6qYVAWgLm2X8tMnDeujFpRH9rAQzgxoDSDjzouafUQszKDaMsut9MW5QLvKy8AafA8xFJD12",
  "key24": "asZbQE9wwcdwNeBkbJxnDqDpEiCHHnfaXsvpoU7CNFepb5zaRt1sSkmrtjW5nguCxEUFB96LE8AGhooQci6S9q4",
  "key25": "4SFosGuSRkMXas78tqpCEMoQey1vaaWZxsQLAXVrdDsRhLs5N95P3CwnpQx6HvraBGTNeykC5MRz3ZMbFxPT7Edz",
  "key26": "42yLPfzq5y6zoNZRwwei5YLcaqo9FwBAbgvMTWwDovWHgdNbhSeBbX1Ex7M95emcQPVwTLntxjzEbEJfwbbNXb3X",
  "key27": "3xNCM6vZJqPg6ZRbjrmjRuMdUZ5VcTjBrUvfjdvwUtTKGNVrEzvARWjmBtnLcuBc2nzWuxLXYXdKTYZ2F2zTWuBY",
  "key28": "66pMM8fBCb5NSgGzcwfScw3jsMQQziwu33NhMvTDHNMvjnJKRfLvBDYuVUvMiuzSoH54d3bWABTbTAiQKHx9yajY",
  "key29": "3NFj3ck9CQCTRgqwmu76ocNj3nkvPgNoqyGbUfMpS2zVctCSRfx6JREF4i15jLnmfATYXQMUPkpEJFBmGK4Suv84",
  "key30": "2hnxMuYHu3drHtsqZzuW1Qy54CM1t1M5bGnuFNJ8Mk7NcLLN7LvDAvHAB9KVbSrN5Fwo2p5BVgVj442CEKXzkVJH",
  "key31": "2qdBeoJUPy8SW8DGxSdzpJa1KMaAy1eqiJYkPBKesrdMQ9HJxxfBgew24Xnbxq6HWur2GjbU4cAfVYrzUbQw5mBe",
  "key32": "4Ps8saQqMWj4diwzQjzbxXWS4HMairHuHHkkXv6L6dqpMFR1YgcmJ6jUFZbw2r9CMRvC4tL1aWw3XUoMUWfy54VF",
  "key33": "5UURvYyDsFcvbYajYrCxndZkrkvKCinDXJBdBk4P6nwAzQ9Roh3ba4qJRbKaM2WCMy33UhHegPuwo7xBRTqN4cXb",
  "key34": "5pF6tJLxCZVozhCspb7ktsuX8ifi5GC8P6EeQkzV9Hf6zqZipTGiwkrw2xEvNSXf54ZMPnBonxFUt14a84mTpGkJ",
  "key35": "5Yo9vrC93Tr2BLYMJscDSJbjzmpR3aHGzPpoUwQBq6fut3RHhtPXEfvSnjKr4TUSWjEbn9F1smdbSs23XJ9DtanR",
  "key36": "3yJyPGtum3UNLbVNvfCnp5UzUm7a4RcMGQZU3LcGRPmwSMYS9vxZGokKEpY8T6syd3uGASLDW3jo57bHZ3S7fq7x",
  "key37": "WS2gNeuNYwW3jo4VBCSVjxG5c3JcBZXowwmJjtNA5aAfELdUBrVw5FWtNE6WjScS1z1YuVcp1e6FGLiyuhYC9XG",
  "key38": "3AMn1M27gtwCmMGpU23L2gky6uUEmDrioxUg8fLcXB1qqBtxxFoYGcgv2uStu1dwKurYVyEWggaqJQ2v67zX3Tad",
  "key39": "W7u6ufABQqNRxC2NyQdi2i7zPubYsAxDVxDcR6Hg5SLqgofv73ysLepNHZdJaVwbdEPrXyihfsqn6iZRgoy8YLL",
  "key40": "26QWWFBAVCq9UgHrMVkmSo9asx9YpnKdGbsVKecJNHMvrZp6wMKfEyxvS3Rat5bmqSqPU7R95feAp3pQs1VtbfYe",
  "key41": "4VbF8WvCUsMBLH18ehpjV6mcR5kRV4WGRZ9nrJhpbepfgsJowKKd4D6nK7N9BDuiVKcifYoudxfJfANYA4MaJ6M9",
  "key42": "eRt7ow2jkDncu9VZYpsXoS75AojWLBS3rp4jpCkSFMbRLeaGa3P4mvj6c3fHPyoDsssE56Es19Q8U7cqtAjpnjT",
  "key43": "3iwqnj4pjdVsCnQJ7gQ24okrc8iGgR1V28wWNFsgmypRU3R7jPprMRikDMiiAx38KPch3h7naW2VR9YioJs7u4hT",
  "key44": "5t1MrzeTeMVeVYn1QiLiUNwZZYkMyPw1auUxgD3TA41DD2WwfpBNYzbyVEZASAiny4dxdpv58QrVQBgRWEUbBwVz",
  "key45": "2XKC4Pk8Fhv7JSJvMqfoApHM6bvUogfsGLqyw2KC7j738hCNWMtBG8whrkZfW75qWMUftEeCwVAjpY8p2WCBRMBV",
  "key46": "Fg6CMLXBzHHXAJYXT3dZFv7PhV3DYi3TQXLN71Xk8icZZjWxn5SnmY4HHmjhza3hvpKbHz8mfoPZidnt3fixLde",
  "key47": "5zHMkx7Dpngu1XAMLA5RsfBrA3ZQbtdssATsiGu6DnUDFJTNYWjWvfE6dyQxu1z5kDJv6TR13baq7A7x6DiTYjKE",
  "key48": "3X3oeoH94nMUdfD5BdjP1rub5fow62btqkg3srQKPENXNvVpWaEUwj8e3xm2qWuVvLLnz4EdmhJAqeZgHMn9BkSi"
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
