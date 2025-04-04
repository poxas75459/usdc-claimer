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
    "24qFfskEac4jSAMKcKmX9eLoGS32j8WqXEJCRU3qaVEukreyWKoDPEUJLHSZM1cDP5ETF1UCxicfmDRwPPuKX753"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvwtcVbXbFHfrdwmW57iTsECMamp22425JYuY8aKwqi6Ry4Rr7KxqdrSu5pPn5K3nTdbi8iGcanrY8ZNsSUf6HX",
  "key1": "MYKEvoJGa4gnUaHBEtJgZGiMLorH6xWzupXWHGqCbGSmtJT9XWUhoN3aPQCGtMVj5KQSMux9BtVkRtL1pbprfUG",
  "key2": "t4hsC3ynAnFTNB8XQrUdRJcgZvzS1qLVQML4jj9NugmzZRpGgTHBnJy14gMN6D8ZYRrqLyK8HhQAyuh7AJ9umT1",
  "key3": "hmEXJX3kQLCNmi9nc9SKERU3A4Z9XL5LoEWWartn3UbyFVkGoMEwbNQbPwBtYWQj5xE5iYz4DcP85BwvopySwem",
  "key4": "3WiZuPqBRUjvsHRt1dRHDcCtrh66tcAiWVPDmh6NrwxQvu7LRY3Wh2MD5bQzA1uwtf3mXGFY2DWS3Q5utLjibJni",
  "key5": "54RxPdLdJtM6PSfFFZdBST9LjnE6N1DvrpkuJucnWAzvkHZ3TobvETy7pmZAPs1RaRYK2w59oRzw9u6nKRfWMynH",
  "key6": "22WsQP91f85ggt7GiZgSB4ALhN6uHWaoozeGWProS1eecThHdCK7FoyFKybcB9yK78vz4VEJNKjNRDUu9qCuWsYM",
  "key7": "4ToyhWTYy88uFFDboVkSKzwuTBe6TNCJjLsGkFDyiCaGpJvV6uFkTsQn1eSvvEiBWH9f4uY4S2qDamTCQxvMkyup",
  "key8": "XWid3mLnYnCHkAxZe4M9rYFYZLzLMNgvwGa67LVxMtjt2DPMCAdLGSroZsymB1zyzvWYh47MWJ7kGLz1ijeDqta",
  "key9": "2zTNSLxzV2jihG4iP4ENhAFbmaeQ5VVxJSz7tFJzoU1HCXthRcwX4R4adwW78bza4k6vJwngTNo1Rw2NHqEdKAeo",
  "key10": "3azYxAavXyiegqjdyR5N1Yx8EvizRiZ3CQpkCBcoroFUj9YXRmcnApGVpRmVPXxLJcLdqn83gP6Urtzny8UjLkum",
  "key11": "5fRAuM6pR5UvBR31Ug8oRnKmPkZVmokQJcBms3B2V83iDjfcqvJzg3e8AB13XDEr3VEFioBMpyJmHqepofk7htje",
  "key12": "4pBmx9HK6NbZmkJXYAihRtvL8z6eNp7WDZUQ9MpPF9z7cqyX5X7jLQERpicJkQhjBX8FwM9xwmVMSRuLAwbRn7kZ",
  "key13": "5fH4MWmG4jyY6Tcs4n4VrPhP4zye7kUoCcMtx5Y7qsQsJPrkeGv2jvh9RXAtATbVQJg4Xi1jDH19oV7q3P2SFaQ3",
  "key14": "29xNJEcGNFUsiUTBkGZsG5Y5DRSRF4dA3gaBWMe9qpyurLGoJw58kzGYMsvv9URZzAxADi22scM5d7Ubu1Njg5rW",
  "key15": "pJTdR7NL7Db3t6YxaFFjFuBYQjNdSgbdjj5zPw6QTCzHVYcaH7EJ9QDweFjTUmNiWhGHtUy5bfn5MT8ExMVoYrk",
  "key16": "HTd6SnxhHB3PXd1MvCwatjTVhheQzRFFkQSjPToVmxeRorgkMqdMJYeDzQGWwGsp8dMHaQmT3oG8P1NW4mYMjeR",
  "key17": "PQSXRdBHbePuFNBz38J6Tb69SKd8Qmp8xnjds1ScsFvkzSiSGq9u6AsmBwGfrzRJKK1Pv1x7XN3e5a1hvN1N7cw",
  "key18": "5Dw2bNVEbVfB55zPBadamKKTmZnFNwhzq6FbMLNDAUHPbBHTZhBiiGjS8wmkuNt6htm9wQgpTy5D93GMegroJv2c",
  "key19": "32BkuRYQwG9AC3ciRWDhafKFCocEmiqmmqj2bi5oxf5Krb5xGwDWeqUCdUV6xiJCtRGmt4dwVvTftLBK6FncZnhJ",
  "key20": "4LjQcem54JwpW8WykEDZ27kMp4uNfe2od7YmZJWv7wK3aJE9sbYqgWwXyzk5iyT4J6zPFe6VHdESvbiyZJjKDnb5",
  "key21": "4NPzELzN2BD3AcrRUNHri5tZZFfdCH7Df33rUMWeNEagh2vGnwFcbiSJbZYGXLqp4zVcP59sWAYsRurjCjYSskqR",
  "key22": "4LasFG43yToxVV9kotxuPQ87QWmpbPEN4bPbJhUqMrqaNBULxaae9QTijzc1xqhVig22eaeUCeRqKrYW9vkuVL5e",
  "key23": "rRcgHoEm779Jx6SxiUNEHAj52J99Tqz5TyjV56BGTRvPkMMax8rPAbaFXs2nF4Zg9zwUqGFwPQbST8XDdB7ANav",
  "key24": "wUKCotAo54KGz2V6zDF4pjUtucY9Fu6YHnzwnPgHaDo5EY3668NoqCTKke2b6c1uowc7x8KNYPQagu7pKpbXdrN",
  "key25": "2Hrx9D5vS84JtX4oGkDmDuKETD9NcRWx1ep3K5uVsaRRDShw9KJw5Vw2yyUcW3PJk1Sgf13bmuQK9bQznJ9AFJrz",
  "key26": "4ZkjL1uarN9zdDya5PAaHfUmKmitzKA7ZiT1TGVnfjErJSYdP78P87DJWs35XvAUPyh6391e342yA5whc363E2rs",
  "key27": "2eN8PVCiTYGtUzKF1pvQE2NytdXEw3FbQgGakfG2wtmmknQ6XrcfMhdNKLJYQLtgjEzvjFX9XcPqH4QxAkuf3NPS",
  "key28": "3h4rZ3FRFz3zEnNu9sNCEJZc8jyQi4musykE6dWZWXvi6vkFeJq3zK1YspigGUWZp6AevQ5Y8P6DTqA4VnDAxBFJ",
  "key29": "2Et7GUUm4LkXK2SiX8712HwzjNmARaEDQBtP9NQ2nX8R4B67X1XVbj1DzxRd2xaXWwxuNfRfKRUk21Vd3WtuWBhE",
  "key30": "5gMjpu59euLThPmUGwKN9pz9GQJ9ZwW6Y5M8HfHejDa93vDbuyDs6u2Y6RYWPAXVKCaZJVMCVgdv6eMisEh82yAg",
  "key31": "4SHX1YhEHwtdwiw8e5XPTQVt3u5pjMEVVHZ2xvz8KavkxJnXp6LRtgLZLsKWzaK3nfZ8FCxmRsDwV9ZgPqTrw1u4",
  "key32": "2pRQnTJQ3WvWFtauX3uNyDWLip8dbTety1XXTycgb5jLFgXktxXjBf11beGHWDxim4usNgxgRTvz8u6zLWShf51b",
  "key33": "4n3CzqSxBFASgA48wzAXFdBoY5quMxHxE4rBeEP3Jp9zyu6Sw1G2PrjzKpPJLhgeax3aKjDTTMbozEanV9GmohHK",
  "key34": "5cLSvdZMF8UGQR2rCvUhQ8kUxoNLCBp8ZFB19ShPrsmcpC45pfNW3owj2Xw4vb9iSEHLi6Tbp7KPf4TuXDzm5s69",
  "key35": "2PeVxKn7bboABD4ViJupsD6y4MzXH7jNyNd4J3Mikoh7Ni1px5M7V6zJoSGjcs9hmFa5ViZrRUWmtP6GsSKhStAu",
  "key36": "2e3M2BJzgNCRLUi9rRe6jnS9M9zrDuuEdSjqBwg5nDaVQMRvEyDjExn6SUptpbn7Feg2MrQv1BEpfyGwuJuV9Ake",
  "key37": "28XqNikiCzdRoyW1xQ1Pm7FL8oFH5grp8Ddm4cLBzJ7RJa1WjiBZV78guspPu5fNzBq9vmeFdTgc23r1Zac2jYKr",
  "key38": "2WP7PDGt8bU29VXCWS9o3xsUQou5BzAYfi9CJzG8QX6Ki1HbLJJSbDcBhQQED76oz8wio3yEPpbLUFtVUMKUFUdB",
  "key39": "5qqeEMrxgN1AuJUsEePWbkCCguFYBh8fCmogiwbezWWNFnoFK7kBxdoLRwHQeYZTgZTMwz2aGvn6jfRn5ty54wpS",
  "key40": "4SoqidkTxC9DAfMuVtpTDMy3y1KqPgpMr1uRMFY5TcaJkmrMy3U55yBwcwoMSmr1PpU9h5Z3tgGPjmCH3d8dTfZ",
  "key41": "beFEMjSL4QtAMu9CwrjBpcSUTQ7ondR4iE1SF6mABXDjSz1x6Rzjqdfo5ryJNrTPFUS511uHXefxPVRWrk3JwFw",
  "key42": "55B2QjbiLwXs7PDw8Zzh5Q3y6foNvqcSTUeH5zThtJP5AH87oo5t7VesKFwKjnCsJNmdFqVbDJDZVbf3Ma39VkJJ",
  "key43": "4DazopikkDG2iUqqLsZyKqCoZcT56fwJGUavMHtRbHpfjDJ3AfPKwzxGWUH2yaxk6jwMkZGAamndEdxzKbbVEbJ4",
  "key44": "3EjJCFjssZUzKzUM3NU6K8gosfCY1Xpz2umTS5e9PtKTCBVviaFFrYUqHR9iznfCMQrC6eCu6GcnsSp7G7ruHdAr",
  "key45": "46o7kTku3AmqsaRp2FSdw4TbEvkG63aqL4AZhrQuk3u2R2S6EzVKtxwwevpE69tYdVwLcZpVDhMZkMPiDGGc9BwB",
  "key46": "3rRNy2AkNjpwx3a6MNjQUAuLt5MmXYwf5XrPKthZt2nhuvDvcTc3BXjkb4KWNGrWuY4hs3A5yLFmUcSGAgAcKtJc",
  "key47": "2VUsuqSjz2RXZqt8NvrRKahV4nscigzSbZUGZkkY3gXX48fWp55NTCQ6tVV14t1eKz8UGvm8B2r9LhNijuJyMKGU",
  "key48": "57A9zuUxiGrs92vnC9AuCwwEMy1dbYU29ja4nqW6NvtuFf5qyRtUxChg28bfvsPJuSSvajFNsDuRsDTNHVDy6U4o"
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
