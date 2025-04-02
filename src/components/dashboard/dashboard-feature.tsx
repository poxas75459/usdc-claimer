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
    "9yabtQNJnpgGKKFbcbdFzEpT8RZJkXGpJ46orBnxcUrUgTEn9AVspof8MYeCjxAqSy59GiXrcW2CuD5E8PrtGdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1M8eGknWCAdSrnr5xDpAcZ4qWvS6xXWcpzPZFVQ6F2WgCnyma1orGK1tTqqZUH86x6Qmfj631t9w5PaRSMUc91t",
  "key1": "4jwEhnjR1YYbhG46PTED1HfSNdcv5Kx1MietwncvwKTohXVPRqCKdbPKcSeG64MdDYbw2eCb6qAxWYAAo9ACStYV",
  "key2": "5cvyrjXeRHGpd2qSmYjGReWcMu8PTQqFAFkXzNwjRDvK7W4Yy4Kz3qgu213ndf6b6jB5ZySeLWAkaXpKZBcWkd13",
  "key3": "3BH18Mdi6M61VJCLFE1UwaFxKrmWxoycn8b2fHsF548bPXcaR8HMg1YDcENUCSrpd4t253q8phpgK7oDnn7skU7g",
  "key4": "4yt9Wy2qo9oPeeQLtujyumhoUZYRxCw7NcvxLY1QYowZFSxGNbq86JYCcb5NqCRh9o1Hv68Gn3P3BLfjxEDxkFmQ",
  "key5": "3jT7KzvfFrjafuhAoSmv1MQ3c5RXyywDS5hQf8kEGpyYqy9gYA8RSEKARqGoUoC5o35u59ffR3G3AmGc3Q8rK7Ng",
  "key6": "375D9vG1QUQkzNLrbErWDDCgUXNgMzwt7iMrBhGCktyW1hujnqfZx9DAbGCMVJ9o3ohnNMN168mWq5RLCVRnf5Sh",
  "key7": "3L3SXLyDMmJFw4LFjxntDcip4jCFivDJFQhe1Wvmr2xPCnAAUaAaKgGQELSVAtcsYod3Ud3Wbt1wiLhiZneDqkDb",
  "key8": "4k9JKJNMZNgpfp6LoK73PecmWmmdN5uKXMayEUhxZcdecmwbRejxkkaM6yyQSUhV6MUa1PxEwLY5pYRBfGwy1hbb",
  "key9": "2q3Ef5UbnJABX1BcC42USdsoMy2Mza9E3VUSMYhJWHuBe6jJ26ww58XPrptxgztSJs8SH2nywBhgDzEmbX2M186N",
  "key10": "obZHhTjZFqCGsFqQSbAZphGmWoK8nwJNDgxEL3wXBUinLURnob2RMs3BfT4aaVRw4g6t9wr3MtLLbkKWeDyk3TW",
  "key11": "Duz6ZoWMYgGn3LxpmYLrZpLKHyAEBdFNvNJKdNuMt3JeuNquATFki22WaQ5cge8An3tQuDp1AypBZFmB26jYHpX",
  "key12": "5jmSx8uktL3bxAtAkVtcErzBYRC2Gd7TR7CYcdQnvQUaFvoaTvdSUwJ1b5D7EjdvvBwcxKgvbg2HXjWPjY4uDtDw",
  "key13": "4DxDzU7LiZrbVnHEK6Qq5U8atLX29aTMJiw67o97Ya3jCv19KByhGLk8FTuXK6DFGePJ2F2yETgGeSytkeq4Z5m3",
  "key14": "47PiAvxvzNGwNYJAg8kEL4qcKBAEjD2Mi9TgQJQ6TUcuazDmtU4eXJhBVDC7wTzhkkpC6CavGfFbgxyMhrYZwd4X",
  "key15": "5HQa9PRDmzNDrB98Ckewxo2ZPzhdvWsEZ6YWNcwMEuApFJ7JimFCFLGT5nZZ9MX3ZDjBj9xfJ1Cz9x57xQMovCmr",
  "key16": "3inVpQWdviwiJxXnSC7WjBeqqhyrejBVSaMoHjLpaMX3wbJYLLDSmsaLoi3DV1CXKfW7Gj4G5Q4VajXVxSfMaAqv",
  "key17": "4z9At1vxZR3dtkjMTmtryiuCZKxZxGgLRJpQJG4pCRZUiiaQeVJdBKTna5DYQbyvTKmFX8SzNMxxyHpgtV6JWUi9",
  "key18": "3KRDUsZaVW2jsmL8csNsEdhst8CinobhNZr5N5DAf9ETVPT4HAZ1hPQdJncRGqVPsGjNg6q1QFL7AnWnZKSruTfi",
  "key19": "3211LRasRuTMiUaZVXqgAspxQ1xQvjL1je1NLLQc2WZJ93a1MS22T6hYPnHEgQV4pguJPYsTmAXXTdkWMia7MDpz",
  "key20": "3padguqkBBLAKDEQLb4ivhuh1i2wHk4bLBBnyxwv9Ct3jV3v2UVWHrzKKE2whFgN4yEzEMzr2hiMVdDbgMyPNQV7",
  "key21": "2FcLZtiZYmgu9LfZTsPyGPgtmkoEdJijcNqkTHz3ErGLrPWetzNx3mF9jKS6FArXv8ZxMmzxR4VChZijmDh4k1Ln",
  "key22": "5Px6tR9qzh6PvA28jymXvb7pdX2TKMBXnZD7VddMZddqtgtN2P7SLdbB4MwQzMuLH1WfXLG6K6yZ7aYLu2MYdRe9",
  "key23": "55ahE4XXcfrMqFbDbzNPP3sinwMUiwNydiuipeSGSab23XHGHHNr8BWy1yptJgpT9MSN2sPvBgxsJY4SMTKBREfR",
  "key24": "4jP7uocATEeq69wbcdhRfvH1g1FjurFsqSbFj8ogczRZcezH48gmzs7WWcSJW1T4KD5XV1GTZFRbQ6ywpTi1J392",
  "key25": "5GR1NfFySiL8QzpABbMJRwumv51v9g44agqqGcxHpUKTx4PJkechLvstZZKE9sgyKxx1QFqty2u3jNixtMbGoAga",
  "key26": "5FdAWSnA1trWeoBBVi8JrgStzmLNJpbDxAZJ4zoUPLWXWPXecJDPfy2GkuazqDqwvxGAsLRZ49HzSNHQBf1pGaKs",
  "key27": "5nmRi3xkxmYgDx5uP4r1yGsUAXFrT62g1fBGfSR6e56a823YyLfmYgHf8nZxG1gRzhA6WLJe6aPu2Rcc3W8hnpMc",
  "key28": "2PWLTXeQezyn3yEUnzNer4w8W6Su5a1bY9VzAguKFxSrk2oEPYWjA9HrrmoHUXRKttz2H3KUfLqAKHrJBQquBXoj",
  "key29": "64SaHKQtD8CbSJ7mjyfy6nbokUBMa4iP6c1CAVEx3hhsbmXfvqgHB5mAfXgb4cMiPpBxHv56tR6XXnbCGXbhHha8",
  "key30": "4xt1UcoC598V7iDgEkV4oVBMraGuFdsh1JJRQHomDFHo174AbZvicdHZ5zbe4hinargQkoZPYjs6FZk6Rfz45j6b",
  "key31": "YQhQkqYTCE314RH5NcqihTSChyQmpR4y4Vkm9s4TwNbBbwA3zwn7HhNk8Mydc1yRBG4YwfxeGwzj1Q8qQxobLoB",
  "key32": "4nfeFZJrGtFyE22BW5H9iBMP5kYNrRvTNxBoiGrtxyxqgidkQgWUX6J4ZDixwxxXw1xTkLjFFmVkBUgZ15qmVmFA",
  "key33": "3WfhAX1kJbcJPEGChun2S8J8V81Yf3oZJi8byLr53ci8ph12bCiZx6Wf3VR2zziTefeETKiGTxhtvGjTWcY6DsKd",
  "key34": "XFmZauntJzKeMddLex1Ri8x1aW7xbJJP6xNpbR7Gc2i3SPgkV1x3VwnZP67vxDVuBBXhj44D378GrTMhMcruMqJ",
  "key35": "2aUGfh3AxUp8kkUqsA7jgTk1a8Wvzhr2RwuHZYYYa4n26cRKu3jAuNiKccmvQRKcXM36gc5JzEnb48g2P5wtpUqp",
  "key36": "3Ye4A7cNo5XLn81oRhtWsJu4DpTB9B5Zk6er5JwWbAJMkMDXgeK8WLeFeqTFNmM4wFXoNysDAjZpvkbDvgqtXH8y",
  "key37": "2ptDq2EBaUVHHfBXcKiCAf1i6rQLQmK3F2t91diiRRbGgAYFgugLbckUvq4pDYuqD5YPe9pxs2pPXxr68fQ4Doqb",
  "key38": "4MrhdZUiWhDcu3QNh8e5QtLwR85uPDd9o5nJ93KZiUrTN6UzrEmW2UhEGGAmsXkD2Q3Kp3hpKZ2tSSFzn69CnytR",
  "key39": "52Pk2KRKA2aP6GRBwjAT2p3TwkFgH75cQpGCyEhHHh1gNhANMTDfa8PEZQEHDTThERzVWa3juhNQp9V8u6juHTqe",
  "key40": "4MKwqE5szCihX5nQvyZPWJ9s9caU9mPR5XfbFfMSXwRPVkKyEEnT2Po7GQ9pKRMJzpWJuMu2hLeC4cV8JmQtF9rr",
  "key41": "2DGXjv6SzHqQgsKf1h3Ang9VCF9utnKdp8WxrCAW9nwzPWncKRWrhdbzkqJzFaTG34ZHPsGcbtfYTdyUkqHXy7Dc",
  "key42": "2uZwoiR8CCsCwrLZU5iG6sAPRX83nNMxXrPUyaZcyGgs5rMiMwuG4dSfjXC9SPxZPTeWfLc4kvcrRhtXUSjHQJF4",
  "key43": "2guwxR1SBrc2Ced1eiEUYMaoAN91vFbSUYRBA7nq6dHBbBtcKA2bBMVBxYvReyb3ULJepoCbZhXd9271vTCkEhFL",
  "key44": "4qukpiRFzDqJmFFJ1mpQr4vwAoBe1ZvVdJbrrv5oHroMpz3VapUiBxatRNdBYpbuuTCYTt9aoCAxWSqGNSmyTbaD",
  "key45": "58P42gpwLsgU7HdoaZ6pWpTuimzJQNqG6fvAXFVviF6W9KcsNAuVkY9vbdmR7qcf5qe1rxAsAbG7TL3nbnPatkDd",
  "key46": "42Mj9nwhYfpFwxRpBf7ECMatDLUpa1NpQkRVh3QfV5mmRPJwSenF2aiiaTs6FBuMcSi3HS8ucyFc3yKbS3ovwPq7",
  "key47": "4uYCyWcarPeqx488cbqJw5ebEjMLVHMpWGvxCe8peBiG4yT6Urh8uqmxdnb5jfwsq5JpVn5oHAs43AyB9Xrxw159",
  "key48": "4zRpCNRrmJ97JJ5Tt3PE2H9rSwRdjVtksVWidkARcHBm1Lwoa2Xe2soBmxrEWXQJ2HLnqQMhhY1hH5tF69jZTFUn",
  "key49": "3SUhaB3Gw1zDEeGf9jSqodsUaMeUgy9JqEJw6JivwFQnfbLsgGn3AUgqeUwQVrEMLH49jjePdP4LTyxuxtvLjGQv"
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
