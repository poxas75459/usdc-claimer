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
    "5a49G39n1bcSAe5Rm9NUArVrzBhNec7jomZxuCcjtVPWn1D8xhQqLk8am48tTdLJbR1bsLDfhmZEVGGHbpNY57J6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYQGk7Wms2SEXiRjZVDbV9cdHLAY34HSfkHzuR3k32sme8tBKw1vCBmTdS9Jzf2LjVY5rbuoepbE9y4ceVAo2K5",
  "key1": "41UJ5kVyBroGGwSRMmLuHxbuVBBZfzM6Jv4hyCxTdkibwukzvPSvBm9FXdt8fy8esi7uV6RqD6gvXPxDiTNm4ef4",
  "key2": "4qGEnhiv8BorHeQRvoYD6TjFW6BhhJKNGBjmctAjsHgR86tBaL4GEiQfziE7pTR7NH7e2ujWQkr43tL1QVSAwdhc",
  "key3": "3cywk9Jqk8tMFnQaWHFCfK8KmZDyTnGUivnz9X75g8CE2gMLm9vC1YGsJDV46EZXMtSrPTBSUG23T6Tkfcxpxuon",
  "key4": "EMvzbjRgHSVBpvefQRAaJ3LeSryBDKh2eL5J7p5kPXvX7kCUBRGVniLGpCVTktvMCB2XP5BTg5xgLAY93aJC6Bo",
  "key5": "4SaK2wamwgdvpQey76uaYRUHSXyarxfvrhk9ysJyR5FzWAqZWsVsHqbivp7M9fjbcK6J9tbMHqaWucPEt1M3P2ng",
  "key6": "CvkRLaVA8nkVxFYtk4QKZ3shxF8HUYb6bUrUHPECebAiBQk2V73Y3cAk89wmsyMKakxtZdMYi65LerMV8PFR9ns",
  "key7": "3NiBNR22pkwrqSs9sqUiuFBm2hmiJ5rwZBe9CtGAvLqVJMEYCdF2JbfCs8ZmPnbhiP1dNZRm6tsZZvXzzTBmmLMZ",
  "key8": "27f6WLxdevnTuzDqAng2sHGnMdvykdAxCXbcd5RFiFsJGQt6L4nUJp4nxUSZ7HA2vq1bJPyMAHwLsHN9wsfoXTNJ",
  "key9": "5LdoWnS5PUwpYLkBVw6pFLAWZoyANxHX4BZXQmHKFZpSSSs6QuseSopiCecxGi3DvBw2T9HPC6SPfebUWa6WCXGr",
  "key10": "3GdnJtphfY4cjY4wECZdsVFbUuPY1r9WWAuRhXtGLoT3pLq58wS4jGY2f97io5pZJ1t2bhXwfvsm6WubG9b3ogsH",
  "key11": "5AQ7rFGGw5TYVBdXgcDVfD9NKD3m9qwDNeciBrLJXjBTSnHBsFnt3QG636NKPRnN4SqS9LPyVGkhg1AKxyymYk38",
  "key12": "5XeUQ76co7cRZfu4vyD4AMpYKSLCJhvGx8W7i1f94LZ39j5WsHWramJxKdKvoyx2x69frLsE9XPBNVdKp4PLEwfk",
  "key13": "ChpbFmhM952FjEYr2FYx7F5yj4EW6TjL3XESdDq9GHeD1YeXtqSbamTJrBQssujg91X7N7padsJtkpeGJSKrKKe",
  "key14": "3w3KsLowgMTfWsMbmE14LFcYVy5xEbRiox6JrXksSx3AymSD1jwPehXTB6pqroohveD3tk8szDWSp3baFKL1BRaa",
  "key15": "2L1NJkWosErMcvqfm4xWZWTv4JtkRKG9X5scX9m1wiqyFGdWnsRfEmQpCtizsdNqYzy6WpztVSGfKHo3zWGNKFGS",
  "key16": "5bPQc3ades1yVq7DM5WVxqjoraRWV3HJmjVTrbqt27nWqLj5n8PhPLDKXE3GJc5ud3irh3q7psMymYDwRjYP2L1K",
  "key17": "5yff6VcALqDnjyMPVgCw5GmywotTX36LbDUSrPg2aDuJgP5eBHthM2Yp5CUjtZQpCmvnnsQrJh6fsrzWmSFn6tjp",
  "key18": "5JCK3fgixjuCnDb2cYx7b3tVzfJgFiYSLMKxMRhwpmgFXLzszxvgTVFFUtXKP6LxwgDsxrSBNWkeXorPfcqkqQYo",
  "key19": "3bNkqDmto4YEXrFn8rxvK9Va9M2fvH3rJMPZaSmQrWSjKAUh3rAijSHf5bnAy4Q9oCXnCFwhpSvfR61aMnQvLP8q",
  "key20": "3v4zuNg3NvuorYFfq8tXNPXhnYND3mbqLaiuYTxZhL5MFAny1D46ypoFVea6vjigZP8r6FxA9G3He9fStysvFSno",
  "key21": "6EBZ4QfFowWwNPkHPFpzwmq85ayUdiW5ikgh5daBynxeGgUj6TTV2pDMZHzhANsEU5NnscRuLk5Z6oZZFYsXChN",
  "key22": "3tjGPcS39aiWEMZaXJ6DET7bouhTDxtsRHBdYyQV74ZVHBzrMno9WPjfTsovgqJ3EGMv13sYATTP6sJP27oy75TU",
  "key23": "22hsrDcHMuGgXwDjkXEoFA58LVGs9Q9S9Ww6xti59wZh6nm6y3mTfQeuyGgkxC4d8CKHKpM5RN7nTjy5zHCcqNNh",
  "key24": "4tuSKggQ7spGDZ2xcC34w3ZKZDf7VZPfadCnFwzx1UcNharomhmmjMf3evkEX7vtuUNqDqZ9Rqv61iGi8m6BvdFm",
  "key25": "XApRzajLdBuKgroK3zmyBhi3ABXZrRpNt9aYtSTotdX5GM6XpPbmyGPt22zcZ1CWwGyzTxMLM9kKr7W3TgeKNfY",
  "key26": "2VGHfvkebHfrG1RuWveSz7ZfuJinQuChR9yhVNihCZPTGMobiGC4CXz2pneT6PcvxB7sgUnTWhM71CTRb1jUhzCJ",
  "key27": "3YwDKkRoDFc9DzgUzvf7yLEgewKUpuimjoNYbZdeoZyemd8jg3dykRoQfgBhjP9c6sobHsHHh1xq78mFpgTtMj98",
  "key28": "35j2D8jFpSe4rTNcAQwqhp6ZZaTxMvhEkaPhJ3BEDw7syDZGbh1JhEXJFzGpLMPySeif2WHfupnKpC2sywuW3d7u",
  "key29": "4pE5ddA6fjEBKP6pGjdkBX9uxgBexXNWAabn5yqYEwaWRtoaEfaoQvNUNdEhf4QGzDsQNyBQHKEsX719n7Dq5zod",
  "key30": "TUY7hsJSJGmdZjdNej2wAybP16i6utiUudzymvXiZFPN4WsBBYEfkAu3WZwh4AwxuBhoWBVLu7TNxxQYG4axr58",
  "key31": "2bxp2qHcYhmTysYQQekBHGiQ1hsbVyFzpgBRfiGE37eh11L2XLqm9US7TL9qhRUowknyabnHfKgycrtmAeuhVkbM",
  "key32": "2FaAZ5krnzmcVGSPGy6dqFy1p5crD7bkH2jh3VzP3fN6XdejEAENLqzKNnEHc4AzQzmUbAd4aqarctAW9Gg5Zhyz",
  "key33": "5W17twf3ouNLsWTmiNg3SiHUtWGY22RpBgdHPnBJsL2NJfdtDsg6ME5uaxaEfAXEjBFjzh9saFwLCG9oCFNkhsjm",
  "key34": "3Qrrx1LMsLsaXdXq5Bgv1xWknsVBAQV4fyuZaj6eUwvshXF41ZHTDL7Mj8fs4DAHYr7gw1a6K7K6Ee77ZYT9oVUd",
  "key35": "2dsqxomLLMQBp2nxbK3hiurbwTYMrNQ2gFk8WJs81YisLXUZW5sPea91tt9GkcfTCg31To7TQXaqEWi87JBQyfsY",
  "key36": "2FjXgjir5cR9KM1ZxGiVMAVSSqdVp73NxYgGFtkHyJaswzf8fTVsFAVFJGnGNM7ELuQPqjtYyGfd3ygDptroXvEp",
  "key37": "5qnU3As8nGcnoj9ZhmVJJ767eZ2TM12GmqTETaqdToAVS9Umk8fuJdBYwPE12En4GZmoK3C7KN8CFSw9dgLp3Z9U",
  "key38": "EqeqNcKMdmcFrVKj5zXBZ9x2A4KcqQ3KrLcodX1sypDPyRc6YKHP3ANAaNW1PsieXomYhy4pWpQJ1DnsTwFXBD8",
  "key39": "4m31VNFvSYo7DsEY2WXzYBvSbQ1tb5gw5dsmaNvB1aLHTnRvo57BQcjv981KaBAvLEK12cXnHWzt71ouDWV1BgpM",
  "key40": "5e5d3boR43L935AsZ6qMhxu2GN7PC2xxyHZqRRGBZuKU2vXxqV6h9SitzxBgE7PVgdeN8EomnWrAWDWvyqzsWNAJ",
  "key41": "4mR6mNDXR3UBxSe57eFfznWB4n8HVn4XMPkD9FBd34RTsn3UQcTbWXPndFJkUHQjQtTQnCWdeP5RgvVWLQsoD2MD",
  "key42": "5J1fnSurxxVgYSR9Jp4wQyLEtWtxskjBy7A1BpkoLgX1ieYBkg9NLLJ9qDhbqKV1fS2mViq4pP7f4FdgBvzRWVeH",
  "key43": "3XmPZ6rCbHRmtFno953y7DCoVghNaBJXigju3HNSXBb8gMdNKoYSEjKQS7X6NhWMvtt5VynYS6V36WXV8L6WsP3F",
  "key44": "2cdzRxCzs98r7D3zNaFGC3UUDMVfjj23YScmtCr8A3UXtDNCi1LyNfFT2AV1zjiMPN13qXURES6xnhTFGP1QE5zD",
  "key45": "hb9XpRVJiegCkrKRy7kgmMYBBbfRB43Y5hkjm622vLYVLGbmr6E7qfa6GoenSZUzgxjNexig7RDLy5zkpcBWD4r"
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
