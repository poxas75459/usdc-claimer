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
    "4jGKsTi1rwFshiRbGDfkTh4ASuTGpSJ65ecgvsdtj2AvDtYgweiAkJWpfQXcLNFtozx26z9qXXXNMvRCsmYmEy9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KXo73gV9mdLLLJbpmvGVurpAirQoKQmMHDDbB7iWCMnHh4gQJ5HaXx1rxqFCjuPkgTrNPfr85x7Hf9E4F8b8NE",
  "key1": "5zpowpUcjiDJ1sHfVzYgEivHjyVUjGRxSa1C4GBM8zg4jhLsU5GXb8pt1F2xgjyMkGgtieFwXem7HZ13JiVnTRmo",
  "key2": "3Uaj2uurAjSEaeq9JsLfT1Xc66eBdDPgE6NW7GpsTyVBcxNLK49GbDrXHtXkvAvcTSKmySH1uBsaqMnP5XDnaC3b",
  "key3": "255VKBYWGRADh6HrmPb7YaDenxw16dqXfEovr7zYCMaVUvsqd6zKsopYwUnMi7gKSE5odY843Q7zRD6heXedkAva",
  "key4": "LoWvcjbAkW1mmCiYwNYhWK4vrpiKsCUiDCX5fQfFESV9w88BvMRaei2NssqCD9nPUJz1o9RZGs6EkBUUmTF4pNx",
  "key5": "1JwpPhWiimg3Gt5V96YUaojbQfDU9x1xfrx4eoDyvtuXDjpGnvnk8F6jU8XDV2UGZg6rJ9XzjSSRVTQduHGZ8xC",
  "key6": "3qUSMJM6vSDD46vvP1KPBQBa2fg1ea3MkhgCU82HZBq17Pkp26itv1vb3SAtbov4uvDhSDv4TPweZ5W5XB74cCWc",
  "key7": "4uiWyxBzxRYtUf3jrS6zuvZokSMjwdVbWdhQtyYmm6uFQracdCFugY56991awHc4vCJA373ZT5hgteRN4b2rrnuh",
  "key8": "JB1G6ST3vMuEACFVqXZtD7wjt9ybhycnhvejY41xc3YfC6qoN4BVFErhnD55rJUdQtW3aysYrXypr5FVhRCNKZR",
  "key9": "4CvshKPLR3EhTY2tTrBQho7RaGgNQQkTbcVvf6kgSKUg4XGVusiU9QrGDc7d4n1vS1hcg6fg56kUmwE3bLARchEg",
  "key10": "1UaqENineF7BMzShGkfdz1BjezXq2iJWcfogxsLC3kZXxNF7RjfSyThqoFNkHr7vDrtHoE8qE1z7cyz9HTA394J",
  "key11": "3WXCwHvyfpocRYRwMwYKhQ5HDy3ZZdkgbVeiPxC265y2vmWKmLVLcPqfMdf5ZcG1G82NHH7CSYbX546cUtKmX2XE",
  "key12": "o6q5SKuSiyuGdnjf1dHjaTVMP13iLEPzhS5SZ89XJq1aSY29TYRbrrFcKnkTm9E88XhjbpSd4YMYMSd3VFFnKAS",
  "key13": "2h4muRaRGS3CnXiMoiM9ahQ8RVbpgziA2ZpTJchn9tjtYpFFjVVF8oqMXFpqWh5CKfxfwKcE4eTD2exZP5N4RYtj",
  "key14": "5utnx7QkbVqEAfhpCKGWHqqrRhQhSMcynSQ2mnBGjkvtri87xFPccuVtQMffXdRksTGoAkBYVfJ45F7fcFBuPiDF",
  "key15": "64RqFbdxFqw43czPd9ZKHe8cxfHSxUh4LZRfdUGdmWECE5zawRhYSa6eQ6Svd8vg2JetugnZUTDg2QKUcDPqWug",
  "key16": "5ERF4kwwivGVQN2A9vDWrG8kEot5F128qYFF2KK1E7ocpQTRVS3GzVUmjDhpvU3MSbqr8K3DnRsZDZ53zLXM2Uj1",
  "key17": "2MW9PmYDRu3KVF1kDZVD3yUdA4A6TxkUfdmFM7qspkra846nDmp8Ca5JSbpyNGQfakjgA9RKbLJ4E8nxMSUaFoo7",
  "key18": "4tovitV1zBUumg3UfZvkcj7sFL176cvHnhH1wR5VYks1kyUsdGn6c3koftb85a6TQTF6fAnVyGgtgr8ANfMRMkoF",
  "key19": "5G88w6Wy3CqLpxG5d1zMr8rbcZUEtoEFcakphAKd29ZmDv2uBCjRJy2XQxQerTmWauVJmJGDg5YyG2VNduepNDS4",
  "key20": "3TnFs9iqwGszL7XyYPXK9Az76pP6CYb1dcZtqy7kcLtW9wvzqyGBJ4dFcJfyYs8i4i1qjcwx3mtVGaJcEaxWLqyN",
  "key21": "Wty4ft4yYUTkmroF7RsTWNrd9VMib6QAXg5MEd12bQSkUb2AEm6miJXN5GkRerGXQV35t6USKHCL4cbJcUWyY48",
  "key22": "5QqgkUoNJeZF4MxDqQ6TubvrKYt1gxRNKYPnNZdVM49Jxt4DEpDBQ7cxM4w3uQzwSYfiBHvAjhmxTXjcUts8dnCc",
  "key23": "5qivGFbb6nLdyKYSR3sxmdMmLdcSFySTGsR2haB9oRGNfra4QpdjM8EYbdzJJ9egpnKn3PkzwPJARQoeSJH31gxp",
  "key24": "3WJRp5E7B1YeBcmfXmTbaQ8bzWXceAqN8FqJtz94uCuYaDwLoLDG7fo88TPjffZhcbcGgsSVANhPtKipQ5tLSrgk",
  "key25": "5WWCnSniaUBJcQpiSwAYDXd93zNHSJKR8iRTX8aSurcnQqtTarNDSk9v7WcicUEdPVFCkiDGgzUNSZB1NnjhTSXX",
  "key26": "2GxtsRJLNCDcQ8wpNeNX4yNbboyVxSaGqZmvk8ZPKFGkAhvBsJ7mtfAGuJJsrjsHj1MV3Lnyk7SNQ9YEEM41QTFn",
  "key27": "5BDi5pDhdy6v9bDRztWGuiKBtHyEqg93miymFjukPPRHzbufLfKpqvbs47s5EmvJ1RAKe7PfDTUFHXnHyhNnJVNr",
  "key28": "vrc8Kj1DRzTCenw3RiteYNU1fiddyfNDKtwa8WiZuPSSTvYSAfAeqRDpgk1NtAEkcAHp2nBym7ZCmsmvsv46hY5",
  "key29": "16NCntBvdrEo9NbWHewP8ErEjooNter1gyuLWMeKhzRE4gpPSqFsksBduJYTgvkrSHQqaeH58sjzKK8mts96qDC",
  "key30": "5rA4eMKrf7TiMmWSdZip3n7YXzqUpH4rSkNrBsLjh5Cqd24XHWFK2niNAbisrMJQXwDngEAMXbU7zwN1hhZfY3sq",
  "key31": "3CBbFWUrka4cEsYAMxbXTfECC4JNQcAYfXXxtK2Sscq9bdPr6QQRBXHkDAJH273mqysw6gjgCfzGofvBWovac5q6",
  "key32": "fbYHgZELHeQtTBcEM3dmA5W9iNbp5gCU5aBow3BavYM7nRERs7D1AEnNaNU7A5CYudEVh3StJWnLKJVf7Kv5f8n",
  "key33": "3LWxbuWzrbMchxD9mX7ZcqdoyewdsENTz2DUYFqeYgtDV6GU6gmj1CUsgCewDTTbCMmyS1VyKuYz2sqz3M3ADWPV",
  "key34": "3iUy58LfwAUENUpE45JPYVb2LE9n6gXTtWWUqJ7feKveXZDB8gASGjB8kNfbrpTiuAnsLjWzPBXYj7qDRy1uevxD"
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
