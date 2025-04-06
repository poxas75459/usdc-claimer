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
    "4Xha48R5Bc4qprLg3QNgVSUBqMV2JkVt1UqQMZzpJi9K3QcCDJ1ZNHwei9CcsFC8TP38h2cU2yic6SzkaBJkiJtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8ZTApiEq81yAVF4AtUgfGE8e8Ymf9oXmo85tA1gWCPPE3wuu1fAmPdfgc93fNYChh6JuLHhRHKxKJ539GU3GEi",
  "key1": "3WTE8vCEgPU3CCv3Lw9YPp2TJYvz9LxqWrJGg1QnTwNicrg4bNsxU1h2aW81h5JQnxxYXhuuznMiveps1TPQwMV4",
  "key2": "5JhB41DWTCBht2Mo6go6xW9BkgaEkMSDTxPrKajkhQ7QfLJhppfz2paceATynJfcxJp88KZiPLevC4Fr9FHcYTk9",
  "key3": "3473kgYcYzmshmqUTFpsVsYQDuZiYu7YkJNncPLD3DSavS2DuQ2iyhVjWj97Yq4S21PnvHgK5rW4TxqY7KtTqcWD",
  "key4": "5QQP8xZfyRzbc7TkDkkFPvPfg1jJebQZ1Kx4M4dLbKNwmJTgEDK5gHfeqRVo9Ay5rBHEL9TfHztvBB2D7rD4C48b",
  "key5": "36343wxdb6kahNhekHoXSpgT7SRJVRKxnuSf746a3cBMWULvTmKQ4AoZTtyUK1giEWoEPPweZJef5DSfQSMTUB6N",
  "key6": "2Vp1TQEkHb2FTWdjEDseepfWkzGXkbyM3hgzcfgYKigdbx3YW3ec85RtdwZbs9wxFvNz9Tr4D3CGgqPNzcWh4V9D",
  "key7": "3U5n2vKDuxrE9uh1voxVHr2tfVFHQn7dd3kuiamN77wrLa8fumiDNckFfzDZwa9XsmMpWdkpBW22scVwCP6kRR9A",
  "key8": "2jRt13dV9VAHE1g4s6fwWNr79QC7GUR8QRaJ4WBh5z81bDfNYSz4RCbYUDqA8ugy8mXThftbij4PubS1Q3vCtXfg",
  "key9": "4VvfpKgu5GLEdhq2t2XGm3rJWttodhkU3hYASpNMppBT4UxpPmgM3P89YjUaGXD9t91M4HrZqnYHWmvSHe41DzQA",
  "key10": "HJtUUDyA97Wmz8f3zRPMCE72gLZv55ozYq2LqDtFfakyKK3gFTb38W2nsrTL6UoRjiVt37oRDk1YnW3dLRRwHgw",
  "key11": "2VrGZjT8VeHfTrw4SdLJVfCoZn1HfvywCswH87ZFNbpHoXDkntteh6utEbYKgFGRboQaHuqLmBevhkuqH7Z7MfQn",
  "key12": "5bChpt6vs8kDv4Ts2x8puFjhCHMU7bKWK2zHPM8e2mNwubiwd8eLsp7DBN4efBbaLyh2w5m4WH6rcDtV9NmbY8ps",
  "key13": "3R2D7XRZEcHvBmk1SPPFvUL15d6EnngiPwtSJJw86LzkqJerhPJsToAApanT5jyv2xDwRYFmnQ1zu9CCChVMZzc4",
  "key14": "4AtVjvA7NYadexjEq6jxNyaQ6jVTWvUztK128m2kiBNMwNJfhmpbe3rKSrL1tioESwT4t7ZAE2mnT8L5KfyTqwGh",
  "key15": "5ibzPiAzXcdNkoAmLFthJzB7U3LBGZYcvS72TNtP6tjkCpcihyALu9cpufKN7bQZFwAKkL8MkeveXbgEX2dC5LR",
  "key16": "ZAExnopvD9VVdggYvvo1BaCNzZhoS5P7gqqAJ8ZGLHFhZFWffL1LkvLwq2Zk35nPkmjqmtKc4m6XtTfGswg61Ah",
  "key17": "4n9i2DWaYA7PQNJXqSvAZtZg2BK38Kbn1FpP4piBra7TPixYbAB2guAq5xgxRonqTud5ouEekmURPAmF64TBZdJR",
  "key18": "2FTXNRnkGQG52tT9cFJeo2H5fy4zeMpiUHtskfQGCbU5S3CFZbYA5YvsBeme9HqzXB2dAqwLH96JiMDpvnVTFaMX",
  "key19": "5EM412tNt1VU8jez24wFqggdst27D62y84NoQ1RnH5mVbqeU2Hm1uG7nTCUJMX1X2vW8uTRvSjxZbxnXvEVq8ixL",
  "key20": "5K61E3iw1TeZbBCxbWqSYq7yRHggn4wMrD5ihgTLWvuE6AVoTCDdpvMgve7mT4WLCejeMJyTHiarH7gAWf7WU1Me",
  "key21": "5zMLC5Wg6AMtSTUYWVpyyKbKg7xCmKxZ4vpNKKjMMjwL5uf7CKzPTHLUjogWvLe1xeo3Payar7Pgt3in9YuEQxex",
  "key22": "2oJeNxpbiPsXgNPv2BsdhoWTpHW7tzhMd9XinXveZvnnvoKEYgb1hgHRwNX4SUnP7fT4szur7QTy5asNWw5FUuLT",
  "key23": "5v2CLoiG9mEip5BpWp9Pq1SF3RQsdhLLiTRypvRw1NnuPjevDWvu9B2vHtQjx6B6rZZSnFFgTFKKxniJPArWqyt8",
  "key24": "5W2L78B19m4SUCCRZb9f5SLFkBixMWkzPNoPyXh4oakqcXymAged8DD7q2CDgDkWznm9jEGBYUUXeDZ3vHivQhaJ",
  "key25": "4ygEDPciYevsJRT5SoGnBGQp37UFPq93qQbWuJM55krpaSWJpsvNjxuLPDxP53Z4VeXSVF4SzzGt7QS46qc1zPjd",
  "key26": "2qaUjMtP15qhMhU68kZoMBxqS9nS8qdLjsqgcBuyQCy9EJ7VXxG2i2CV9JgPr33oUTH4j5esS7XsfnpRFApJFTpL",
  "key27": "4RDdBTi22PgQAkqneJRaGWgTyzxsd53x1nZ7zzW9yWCfm6WxptFZKWebp3tpyRw8f43yXqCVDYXSBKDX1s2bM1fE",
  "key28": "rVigUC2qmra1kYSC2G2833bX5rprGW6sXPKxfxLrbLNyT9GaWnwxdrKgrSMoUFu3EGwejCrAV6TzhXMZFG83Equ",
  "key29": "3oeGgSciyPiCq6AeKiCSawF74ys8fZpa8foxjzq5tCzZvfFVkuvX9Wb7KBp1TCNCMTb6rdKcbt1dkstw3E8KDuKH",
  "key30": "3PpGvtnTqKKPsJjVuEZWWNaFLFch8FjTkZYWZ1K5DrYB63iamPTmP7c1GQyYdnattWsebtKYWsxYTTVoaranVZqZ",
  "key31": "4bwtACE93iJW2sztE2TetYJP1iCJ5fttvuD2BkNpbbYgKenentzeLiQoF3THC3f8b9DVDAV9s3ErC52ZtLgdqrpE",
  "key32": "5gZiJNMFntRTkZJAHxvJoL8YcDchpSVi3gNZYcaYC1AcReBEEizD3HiU3Mh8zDCT4zHbo3oQS9oasYVif6y2FRmW",
  "key33": "3u3Fr4n6An5xXq9ruNee3ZAMY4XWAQcz3G5weTyzoLmMkfdoUijrpQ8rNaKgxwt4ti5jtzWGdexxf1aX6S38ux1Z",
  "key34": "4BjRCpwejSuvZZrtJocK2WeKS8JHeP6V9CNNX7vKWDW1Rs3ZrfkyBczjy3FpjLPWcfZUNgkz7UmwgnZnH4nHnk4G",
  "key35": "2fxiiUeqXScR365KTUtUNd8yE1r5dm98fHcYLXB4ArTxtaXhGvxDjPE5qnCxMguPDF85wXMNmi83tkc7MZoVV4EX",
  "key36": "gEBQDexbUEauE6kr4Eje7WFtBoxQzrcoxhtTLiG8h9oJfbB5xNQhvRMZohBYFcR5xbUJ3BeRGV3W7DMcBcNTWT1",
  "key37": "563qexC4CRSowPA53c9wAJ52GwhePNs42BdMLv84pRqnUyYbVfiQCCJ2sPZs4yngRz38NntBxdGx73RRHpc6QAtZ",
  "key38": "2u1szxDvwm8UHhgWkdDcLzo63hbSmnDaJKd2LYMk8xUSM4s3qnLUhy8WieNrHoYu1xmLMA8CnMpxwE664axXgqY",
  "key39": "3bgsut9BE1oRHTzNmQgWUujRT5ZhjspA1mdczHQkZoLf2aRuL7vcMzvMarKC1uw29yDf9jgrrkJxFkz46zwnvLiX",
  "key40": "63RXUfxN1img6kwPLrNqcmh52Spm8g8cGDimygtMtCwmSagAj9C22mwuNwFHgKvM162v9UGtuQJZppMkWKQRhkZf",
  "key41": "2Qn21io3tkHGR86csJ8vL82N5YuYn9spTZT78B4i2WEBAzY4k1ambccpF3LX7nykLNa79WTMvyeMp5qCQQEzptWM"
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
