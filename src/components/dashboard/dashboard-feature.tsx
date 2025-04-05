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
    "2sQfP12S6SZPokqXQU2iQcR16QNQJeMWn7Q8oN7seeCbsbdDW261E7uTyAK9Rzcej2AQhjYn3niRgoZw82TJS2oU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YpUCZ3HxkEpM4EF34LB4s7aaNbVGBtgpq6BnBdEHgb4FjXZt9vug5iDQQBpzE9a7fxbQENMiUmivxVziSWNGfVP",
  "key1": "2tp5FgJDRJ4JDYWviiwZr3vgP9pfZK6KJ7extRJdnighk79JABdGbWPT8rVe2oTQwb7DqgiuGvq9aoKg1jstCd5z",
  "key2": "4zKBTUQq4rTYyDmWMJSFQnAumdSMVt8yQEnRuCU5k2qKZWMTz4higRR8tYinq7Jn5mbNpWH2uer5HbdwnLUwfnxK",
  "key3": "2vpseR8PxNiYZ4NqN5HdXWHUsfzaBUTvTUCAaiSV3UEtJQW2FtVYEw2E56Cp8TiJUUM97J5aTpkuoScTAP58gvp9",
  "key4": "5hAKsEcA8WuGwt23ukXnR8SAdqmvYPZCxCy4znS4wiqyd4KY2pQUvhqv5BibzsKgEdidJpVpwWCZTN9R1E4pUeMv",
  "key5": "2KdMVL2fSQrjyYqi86kNems1w2XhhizuorBy5e3mbRcRpCh7NvnV9aufugCbdRqhtriF4rtjppjrSrhr4pgdRerB",
  "key6": "wjqX3NHCAmWRHoW2pFZmp7Te7ck6NgWr6RWXY18bjMsJJvwwh8uUkEmDFnUgBPRPMDuiZL8p7rqXaQo6AgtGPzh",
  "key7": "EcTYGNX21K4ohCFwCNUaqppLZwkayMA7aCLF8Wju4BWwiydN1owr63nmJLwLLUfUXgfUCjVKwN1j4woUMdZMary",
  "key8": "DGWXvzNnGJc4HzvTn4cPqfwiJKqVwAikyrrANSDsvUnTPP75KLZCS6Fxxk9vBNLxENjqfTXfKQXafwWyRrgXnFz",
  "key9": "2eBL9F9CdzfE796aj7E47wQiSrTe48hVx3EQtF3EAaqEQBqzBMjvhj56g9YL7ptdzg8xeSGzajnjWYK1w9mdJBLE",
  "key10": "4GWzzPo5YB5PrPJZsLFB9PUNrA4iUKmF7tvv2XKQXTSj9X7Ei1qpiFrikUkjRZf81E2Aw894zxXbhYMZRKm3NNpN",
  "key11": "4tZZoXmBk5ce4vk9BXEZJBZ9XtPJNEWJGZYdkPJymgbBq4G8YwkerQ6XPNLtqLxaY35qwkLRxSZAt512RzPWKVsg",
  "key12": "66AaqNskm4S8QH2Fdj6E9ubDrdDxainrm1DjN79LptYTn6gh3oadddowiiSVgcdZNbeuWQpEKLPVemoVaKHfHtTE",
  "key13": "3p2u1KGr4gUvYqPBEjfjPewSkvLKwzBS9EYhjDgMvSeVD2k4US1NEZ1CobtkHQrpPE3Wy1cVwu7JfdnNBXYUTRis",
  "key14": "4uf7JGnWsHtAZ1A5EvFjnDsVqhZ4UhBFED9YgPByFeuLBWQNpyJspq61gUFWM7SYwAwFBLd8gBApfk1yLUiF5RED",
  "key15": "94LbETrhfi3cYgqQA1ffNrW3YgEi3piNNZXDpmijHuVX2zFASPK5Hv9eN5Gr7QEgN5dC6pcCZJv5h5GbfsBd4vs",
  "key16": "3HfEoShKdNG54DgYKmV6Pv6E1iZK1JtpY2TR8iQgW6s1yvwXEnAifKQtm19zKAZeNoWNszkUGMQM3bH1NAcKQn2C",
  "key17": "RoQbXPGLGzDycqZvJaXroreB2sHmput5otWcShbR9c5SZevRPWDvb6NhY6UKa458WBoxVLVra8KbyDqD9LsWJHB",
  "key18": "52e32MLaiNKmrdf2UK14mrwSuCDHaRN5XSz4mSrFAEYyJX9iWcuUmci4T1eivkgniGhzXaatPuri1zixXdjUSGKD",
  "key19": "5phFuLZs1dDnvHGvwiaXU7s2hDiS2LWP8X2rZAWg51xEmLV4BLeBkTkGSFzCSPYdh5diKsM8yWK29YQDiXzHC9T3",
  "key20": "5E3Sn6NeddXM6LzYTzU1NFBFwW2FjNsSa6Gdy2EyHD3tBFeXrPM7kJHMTMnpJ2xnHqN1KNL4FB9KfTEL8uy3XUYT",
  "key21": "48AVgAgFDQUBsXKKxCSWVLDqD2mSVYLJPjUDccThtrYVg6cyBkgt1LxALeLmMkvntaFi7JVE4zDbtRSBEunVHRSw",
  "key22": "4K9qbPfGLMTMK7yZgBzMu98HQc7VfaMvf3a1HNXNXs8iLS2v2ewDqjbmgJQqC32sB1c69EHk2WchmmhLT1KGK1xU",
  "key23": "31jTptNP3epvJ4DQQDcrsRdYmS6qk6eosAWejViXXEEChyjeomaMDevvQe4fbhNyWtmCs9oy3B8tuSok8ibyT7DM",
  "key24": "3RhYDMAcrhgjVZ42WyBd6y1PhUY5HnsBxeGxVc9VRYz54Z6z2PDCTDP74oK8ZEHYJ5fwdsKh8CRwhZ2rQzCx8CH4",
  "key25": "29zTPRiHy9SDPUNkQV37v2bNejXv2RAW8tYSi5QbhxZT6NabpFtm9EGkXVLx5UTHAHJwMPr4yzcHZ649SGab6Y4c",
  "key26": "2FjkYwzQEYKwsQ39N3geDseP3GN74bbYvcSZFACSvnsvqQttCEACNU8ByyjCYQ6kXpZn6vS9ukq4mew8fh6eStNJ",
  "key27": "d1qgoFavSraARrmhxFtQibc8arij5GHjCkoognnuw17vsrW1JewcDmNY56NoM4vZAGXi3YAdmMEHmSpWGjMPiCd",
  "key28": "4gydESVLj3AEDAKrN6FuCh1mUWFg5VMfrto4EjKv7c3u3DuE9GPX7K6vGEBX6PXCd5caPtTL5rW1LgwwJnxBVTtj",
  "key29": "3hfhJtV9N4NVAZpH3YVnQ5H7QQ91EQ8zWM2R5y1RvAz1La6GxTLYBH5X34gmpYFG5oX3Q2r7ENNjvhqhNqrhUD7A",
  "key30": "4KW4eDANBEFyo5vGkEZHhRsvhdNKDW6NfXTGtKyvYGtWxHLk1XELWyQWeLzD2cwRuCGtwxFDxRf89BfQoyTyxuo1",
  "key31": "3DEoTZjRY9xeyM6hj2Y2jrZnUA97ThyF95xwyM6yr9gPjzyFWnBb8oszJHJ7czQZwD47nFz6UqTm4n41VKn4akFF",
  "key32": "2ywnAadgXpp8qmw4SkZmpHapLh5GkeYnsuyhxvjcn5Cp88kYPAzZHD4raBhR1GKHPM1yMFmw5TcV1yUwtcHQdgyv",
  "key33": "4w4nZFCory5rerfwCXoSxVsJRLwd35KBraPcQvguVG8mxg8HknmYMwRTqYcze1D6e3g336aYKLkTeZdA2v1W6GhF",
  "key34": "EvVM3N9sWjcXF5YRUE9rKvL5aSfxmPTXmLkWGkeQZnCVF8PgLokUycuvYpgjXAuzejVk73sYNykThXJqjjJLE5x",
  "key35": "5wmrRU2dNRxSt86LsKcS3ofsAJss6tNUu5opDzjiJtC8nK5XbpBmX8vq15BphcDJ4osbyahRLaCYasDQtD1VVV15",
  "key36": "Y7onQSivMkj8mvMXRCeLMnAUWZfo9U8gnosJETE2cupjjYbq8wmzj1SG4d8ibr82XrxcGtt817NDPEnSzgJMWPp",
  "key37": "4mj8D4McEjP1Ui1HtJKCBogJd4N4br71GtUPTk5wwfsiGm5H5sRN9KxkY7wvH5TgjSUwpFpbboygDmVWncmByXAx",
  "key38": "CYYz4xEZzVaokktjAtoAN8YuzxPm6zL3MMjzJr3DeQb7gXAqhZ9rxZNocLr7ywfPUKweRLHZszyT6ogpKVXUJLK",
  "key39": "46SSgKJFxCTJy2EzaUEaAn1TsLTHKZUnP2ZNkDfvgmNsEJ5kgYXCHMwv3FZYHNnhkZ6XVafN8vPr7wM3PwagpQt8",
  "key40": "245h79YmpXs7nN6GkZYzx1qrLV8LatrezcZ9NzFptvBfVJrn3TmWFsarKmFEEjbcG6ZWmMUsmBDaMtQYjp2Mezvs",
  "key41": "58j2XfXriSNFrs1jc844gXQvhzcqCod6fAAsK5Yrh2GVfTmtwGcuqd3sZX8GrVBonwj7zxeRuWLv42HZBY78wHfD",
  "key42": "32Rk8dw2LgUCsc8mppgGasbe8BnCtn2Ap672obxk5oKef6hGcoQy7PjPbTAAGbRKu6AizwKmtgjpjfHd3jhqQHTk",
  "key43": "mkcN5STJPhnRaaa9unPEyLipw1geuQFGQfF1nnWnn9TJqcb6smq5rWiMmPz2QG5mvAhEhijFbTrvcqHSTvJH5RQ"
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
