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
    "3nESVqhBu4wwyqCExBsfLvok8VNAu5h7g1Cbu9DjPHXvYGW9rsB3gZmE4eUSs71XCcM2NkJpWHio77ki8Lbq2kCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnsgL7L11eiRLxa6LGg2DJnfWGwVtnSASkmdLu3esP4NRZqFgBF4ZX73CuKQp9zcCeBfeDabCDMa67jV3Vggith",
  "key1": "53QnkCzmzptsNQFYVNMduvhqpri8qsdbAWTfJZf2rwk7D2FzVipDyutbBuQfMHSTFxmqwzDBovgfpY5eeNshj3qr",
  "key2": "3CAP8NE9TCCGJHTBTNEz2jMxLnAc3vabZ6ztDQNbTqhtKw3BQkumsLd99dbstQ3YcLSE8Wk1y5GEvG8YYCM3Yu2z",
  "key3": "NMnTUEktCEWtedsYk4eMjAPawCswK8W8DzbCXNiJaseizPEsqxbVAxsVL1wxJr88WQkbF1znquHG342ujMZHZ8k",
  "key4": "3uy9TCyy6ffHpHWoj4DTKD22boVwUL3NuBovXoBaX5DXLRLdYVEegKcrELgDz9m7ZjRUhnQBYyt2F8Cadv49xJp4",
  "key5": "51DtWMjTM4KeSRNoMSLsiWrZ6mWFSuopLkVo1kRcADsJVAwK1wy8EBPk3xjUWGg5bwWob6HiddoZgiHWkQ1Lt1iy",
  "key6": "RbSq7oJxUmXntoxGoWo3vj4EQmkuysNTw2uoBtN4ga8TEpt5C5gUERK3C1mmpe1d2JejJ778VxfVQ3Y99TGUHan",
  "key7": "3DELdUJdwvzgsLBS4LwBsxByjVSYmiqXn41UT3cg2kSCVSTxpSxnrAgypuDqMkqv3p4n1mtYt7sfmM1xVYg7Roe3",
  "key8": "5tjSjGCB1nZ63WE8snoGUZSeBBTHzW77K4iRPRrNpM87SMJgM2NDQjCqxGPUgYXxvhgD7L1Cg6Ys2wwtciMeFrXd",
  "key9": "DiuEQXcqpdh97j9GZb8Qk9kCbBZmAxsg62Et2skzDnFN3vKYwwAV6vUCt3ssnMgT4rwgLWK8NMijHXM1PrjUj7j",
  "key10": "568mMuq7WrHun2KfLFjAe7K9rfvjdCGuXLeugiKpu4KEHh16neCvtgWBuSmWG6ShgTuC1nTPihVeMoV33kXo66Ce",
  "key11": "25qx8pCKXrGM1fPdSmPZ6Cj4QVgyjg5KvhX5qDgXve4pg3ketgnS42XDxgNjNceg1yiRGkfZs7duMegapE5DiU8v",
  "key12": "3DS3j16mqTFNZN4dmP3JcKy1FGxk7FxRmHkGMiuoenwbZNhp3EFa8iW7hnnPz7vp6RECFuNw5UNsWN9HFkXVG5jn",
  "key13": "512jKTa5uPA6U5VYfxTaLt4H3N7Gdr9KWmZDXyhovXTqaE3ygDiJzsDR3tVDH5fa2QBQ6Z8Qz5xDSh5Cbcyqufen",
  "key14": "4NKz9LYY7CPnw9NoiL4pbomyg8jCUvqMm9ENmqYbuqeio4ZhUrsb7hUmQxtn8Y3DhA3MhEawY3fgonRiqhtAQJca",
  "key15": "rTxQhU6dVhrh7JBqJ8WJXD4SoKA4kBCSr1fWPnHVGTSLkP1LfLUKHkR7VbHgQznsWKQ7xy7qYTyA299G9qv27VX",
  "key16": "5AKm3pXJeAEDwXHVLxsrzJSs7LCcCxg7CLJxs4BYEujXegMzW8oV44myzXzDN3XBCwrGF8yirAjGVChcyY7L5yM4",
  "key17": "4bV9BF2ApsLhMKxxgFYpDQnzmTpHY2RnEWNe23bsqutRXxomTT9msvK44KNvWbJNHhwm7dDfUiTRhGWXNDVsaz4K",
  "key18": "nn5yj7wHvRFWynTLiZq2xFENXxgfC9HZvLjXGqRWw4HaDBrB2SicK7KdotBQbzcXKuukCnsa7gok5pobWR65vGR",
  "key19": "47S4a3voRL4D5KfTTMKvYQJ4AGnbMR98CvvzBaWddmKccqnPbQzdPZ8KRgiKGZ3sDhWkB5qBQd1eNJdv4jiu1NE9",
  "key20": "2YiS3GXc3c6mC8RQWdcNLjod8yf2LHXjqwdB3YBaGs4bWhqrK4wh8QQTqUghBG2CCfgjNdoWcY4yhR95ZDZ472kf",
  "key21": "Xa7jcnEDhz3zEnhkPneBtfq6qWhnGCqmHxSVbdJbE4VzPdeHY52aU127sEeEPLybtYgGsqZ8VTBFEYEH1cPxwGH",
  "key22": "2kNVergNRHFi1Kyp3uDydzwqgT7YuE5VT4zFdLxgkAXDnpsak1RTCLCDjaCfsi2XoUVBzc8FsBe9MtAzwTU79zDx",
  "key23": "5KNzKsjM79p5uZBaMdMz5vo5NdpdJXa8BKLUtthj4Xc3kicG2PFQNjzjrVAxxsQj9AgPX223QXZHFgj3HECvBN9",
  "key24": "3gCy3n1tRsfXVs9x7km9QkNhmLUBonbLDWUFrvxiyLYaZ8zCkzhHs2U3NHvQ3Sp3rLGkw2VPrAD66YrfhKxkSCdE",
  "key25": "2FpsTeRc1gPzGAGm7rjHWZHmfjAdwzCVzzb84B23Rubj6KeTC9dMdcDC2WcoDMYBGPJeKyy5UYra8CvmBBPzWsxx",
  "key26": "3r7afTcfbYCV3YWTF2XTyPLJpcWK1wLgQfxKahSJihabnx6fDqy6iMQhBUkjF7Nav9JRAr1pU1CWxcj2r5yfu4c4",
  "key27": "4u7FSMVzzBTC2DzqR6TDSQSpFuRxxZwvcGoYoeoPGvFHRqdgScq58NhUFpEKZj7PP23ys5JSUxQMQN7UvPSDbvxd",
  "key28": "3tBrq3iaTW23VCWHmF9EjNux6GxEXtCfw2tw5tGhJSUdaZosoEQKxPBYCrS36V7MTbvFbj91Uzc7ZvFh8YRoLbQV",
  "key29": "3mjAYizzCbMzpBYQuvRFRc3jR6xEbbKXS8zTQ24N2Qquhoq43QgxPm9Fv7AQ1hD39M2sDQwu17eRozPAd8d96cnF",
  "key30": "JRFjxiCN1mZtbmSSsDg5QQEVCwdGZzL1p7ajTg3VQNwF6eSx4JQdDNCbEXdLNP1doTqciUs3mvuUPuLvTnuWNhw",
  "key31": "kB6s4X6QVA9oFGdFgy42hQeQb2roSQbwAbFG2EhHzAoCapjphWi8vmNsJEAiMvRU21FdYHL8teov2zqser7n9i5",
  "key32": "3YaQkfV5EsXx1j8UCNrX67JNQxemLCajTXa19RhL8B6BJ2c7QWkSQYygNVPMHUkh6eWJYe3tbtEkFmeMzaSsC9uU",
  "key33": "4UjvSBqLRCPAqXNucf62mTXVWc34WgRgVb5vmjwz1tUKGPSTSPHaSirjL6ebDyPaDptRsgKKkqSnyuJSa4JsHrsw"
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
