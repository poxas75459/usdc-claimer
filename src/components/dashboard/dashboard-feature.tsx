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
    "5ZUNtvzc9DHvowDAUYgvTafibvafZHAMVhgohYkVDGb5DqFqbyoQQSHcZSyhEr8c8enMxYW7hkm1riFnXtUP6pez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553opAe3bsfnMh4Qvkz9YmG2DvBBe6a9ZXWbwuSv6SW5w1fP78BPhjEF2ZT5tnxMavTsNJJxeWoTdLrqHCfNJsr8",
  "key1": "2bRgYpW4qdEhRgxx8BUUP47m6vFZFebPvMik65vs7nvXtBHUggcKhQDes8xWhqAE515ocABVqE9F28VTu4MTMNsg",
  "key2": "37BtTejhZF6JiH2gL6sVi2mNjUqW8KSzcq67T3HxfFxZwqfyF5j2CVMwCG7XPHpAMBC5BhK51bnJyEmgyZ2ZQzig",
  "key3": "3gSJuLyRFT4yynFGCdhHsHymxspoELjrvhXnosh9LzH2hGH9nsbwAwUtJeH2ys8i4L289FWx5nBR8QqpYa3zXaxj",
  "key4": "4Ga8QEtGdr7rpfyBR9eBw9YzKDe1qFBgnG7jsSwCXo2wSnEt28ZsEnKm3WU5r7LpS89RhjCZsdbwZ3EkYdFyQZoW",
  "key5": "2FVokEm8wncLsdZeeDLkGitHveJHkPmonuHj1y2PCd1HbF9PJzJwcEWy9ABwz1ETp1zpoEBboGFWNNXLVw2StmxN",
  "key6": "4PBzGEG5pDGUVsKKUwcYVS1NQft2SDHEJJUUWvjSWNvW2kbTZcUBC5TnVmYd37Y6DiyS7yf2t9ziYcck6cCm6hnj",
  "key7": "2MhSvbCcHTNa9gamdSJKMotEnr8R6CAu2BuZTd9cPWrcupWfSUM97Ve6dNqFZSdsZ9XvQzA2Ap8QyTjqMZCzfTJg",
  "key8": "2LZgGrYJKa5H8WzLfR8MjLCdAHzavDZXVmoqqP9bcxnxbesxWhUirUZU9dRgxcHkJbphWm2WCdf7aooftmPJaeVK",
  "key9": "2YcQ28RrvaKyrxC6vnwcCN9YWLcdhQHbydSVzA9rMYa83Azq4gwAHTeknCHHBgC4cRkd1Aom7GZaZdWgZZ9oa3MR",
  "key10": "3xmo1oau8gXMjtZ3rAPVTHaCtqNVeR6kaVhWfY2L9UmhZBuBguJwGV69Xp1gFbQam3TLy1MhpXBMGcMKzWohWvyS",
  "key11": "4XL71SGSUD2kZfGAiRvuXmEt8gFfVWUJarW1vREwNAyM8GhoziRKGcXgswkEkqCYJzMiKcQkrCXC3uQnzSyEcBtx",
  "key12": "2ok98UXX2ATWC2vpd1TfC7C7zP1PEqANs8MB4shFdueafWJWACX7nmGoMMgnfgYjLCEd1McG2mV7rpnFf3sWeZA",
  "key13": "2URWvaCViQ4RDDFkynVN2sMZsXYcYb8is1DgRAiuARGZJdK1jv2uVKiigpKjtr1i8JtUerjfyy6Xt3mx2VdQVJxe",
  "key14": "3HtkKpC9kaeG6ezVYD4k8RfLFuUiPMKWRSb1UanPSY85Gv4h9ktRpPY3QX2wn5wCKKYDtaafvdDRKeMzQx8QgwE7",
  "key15": "5ht7CNLoFnWvpbkQG3V9s42Jfni84HJJsVXVdWYXpbh97KqhhZ2nQuis3QS8yjzjsKnFWFdVcVzGyUNVU3df7cxL",
  "key16": "52cenzycGPHB54xWpvUVJbZ5yJNhktndfJHZWjpNQi4HHmAVTpGosEQgJx4oTkcnCEpRuomEoXUFv8cCoM9t7EuJ",
  "key17": "ALq97R2eTTjdYPhGzzyq7CwyycLKDHXwBH36JiXitz1pPpLJsG46f2jtChYYPzBEC8Fr9VpYFhtQADXBPiAkrMc",
  "key18": "4khNmeCFKwd5mpgKh5XLAzDxXYE9aEv36rJ6UVRkc1d4frQRwG8Lc4jfA6rV4EyexLudTUi9gwarz3ELHy7ZNwrW",
  "key19": "4fMNmanS9GMWGet4rt1qcD8cAT9B1GouCnLL1Gx2BHEmFtMgAaiykju8CqTsLvHaFy7vjqqD8gzUSwu2HvK9HVg6",
  "key20": "4s8FigRGGLyAmyYCUMXGewDaVyGviZwcH9gX6gxEHDW2SXs49zTzjTScRzgu5uzePYVgfAjQdRFzggKxt8p3Cjtq",
  "key21": "2eLjCy6V494EFLCSR63B6N1rKpT15UBgnTLhDpuhTTfcwbkkCBsUkJCFL6PSV142KD2UsUXucx3PyCuygE5eo6Ak",
  "key22": "4ZfbLH9g1NZBUk87Sz7iupZdFDHsNxytUgTkTXD8HGxMPu893qkB6TYZ41X1rCmunDMuKbX8P8vjtb7ZobRJUE7Q",
  "key23": "5pfdJYmERuXwzb7V7ej7gwXFpSdDVCW2PVRTHiNndukM3sXQV3vBkHMW3hKz4kb53EzvscS7XPA6JUZ7GTLnk1UA",
  "key24": "2bMz9ABTNRA6R58Y2ahdhheWJtapygesvkMHTGDmupy1mXjHeAm6mn6SdRHZ4hct4umq1sENszaT3i8oWa3XtV2T",
  "key25": "5ccKYNDSJSyXp7DsxFfBhX1f99CaPwkcp4ox9caQB9m7X7zJpP3C3rSr3rz81gcdcxHZsmVij7ucX4CTxgndVz3E",
  "key26": "4t4inKcZBuZYt1zciSoWYjyZCtQ9cjzNvSkMq3krpCLPT9MiTQEh6xMnUtnckkanyDykM86VpftgwvcXzunhrbZj",
  "key27": "4VJ1ChJtAjvRTcrqsBsJPfyBN8CKkRL29T2nboiUZ7f9HJnMN8r6kJwHsBiSND3NbYz9WzjH6noxnvwSTwokPmP5",
  "key28": "4qzbgMyFLUMcXPk16dwfWMUXNeKCbjRv8JK5tNjMCgZQkrRrzK7rYVcvVSxZboLSXDhtfYQyxL9pYxDVFVwV6nFo",
  "key29": "634pqWEavNigB7yjnkSBbQz7bAgCYni8t9YRnAXqACMPWB69Q7A2GXHXNAUwGCEo9xi2kgTZ8temxzboEjNJLz4z",
  "key30": "2b1oZF9waQZJy6CWkVUwHNxxFpmgzqmkbE1rW18Dj4wt81PAz5LEWdCErqLH1jWRbM8xr8RFSQWgJGKCjZPZh4Vi",
  "key31": "5EvyQAT3TkcTkyfnqmmDYvN53v9e52BbK8zZ9WQp4TKtBNha2BRPBysr53Pjg7zBvuHyBzsEPNo2aZyydpNoWADx",
  "key32": "4tcA42CZfPgrFMYjMxfdS3fHUPVqSbbziPYED3yDdbeFSziieBmth9NkeGtm3JDZfuFsJm6DqEBbcBXscwzabpeR",
  "key33": "3ZqyqNPbiEr4EfJEkSkmYU9VbYBm3hHoG3GvMWaS4f2oHVQTCbLp78EprAkcdP55KNX48wYeVjH3EM8aJiTYTyFS",
  "key34": "3davSM9ebcqi7ranibNJkJEGe9ycVGB1qb8XRkKRumXsbxktuNN4wsBgMrxQB7nK7REJ8YyHvFWy28wrY6Zc5SGf",
  "key35": "KizXvRq8utfFKwM5w7WgDLFL759ujgZfbdgTKPDM9w18PuGaHKnw2t3Lesjbj4hGxkuQn7gTWbEcCpUKdXSASSD",
  "key36": "2RjiCeMVuDaL1oY6U1qqJodohTupvK5gWQ1UaQtf29sW5tcZaNkJDvSz5WSHFMqgG9YuiMy5gH1am3tBn9CiFR3f",
  "key37": "4k8DJamvMyHbfGaXpCEEwGoHtEKiA1ersYGsAnJp7cFSWf743i6mCYgu2CQukMusmwCdbkxcy99cwNzJaY1uErvr",
  "key38": "4ZikMxfUPnTeiGrCKXqZx56mSBAUBZRmhr147BhXJW9jPs9ms8P4crfMmKEDEt7GVxYuZLa2Gd9FY5ywHcrDMUPn",
  "key39": "877Z66DPWLqSA6GaHCMDjvAPp2g2RcraDfamxpY4QjLx9iytPM8VQLwt5QXK8GHgEHJ5TFar8kfvG5sbVVK54ng",
  "key40": "126sHiXxZELjiNyCUqUbx1wS2b9EcwuMB978hZGgBnkhPArQDMxFeptm3evDL4asqyQYL2bXoXCEmVo1Aa516Ds2",
  "key41": "x8HoSm2ecnM1edW43h3nLg4qRkc1NiuLQwAj4qQdDKTCJFESLtD6b7f4DTMffdjcAFT7hRNE1BD533U23qSnefr",
  "key42": "2RvQ15BE7JfsTbJqrV64xwEU48yhbcPoV6iiej3hQYXSSZqeg1Vj829cUKvByHucZCrbtGMDK2ugFpkmiisnvzHD",
  "key43": "5BrY1wyy8RsorpwT3bLmVUz4GQEegAG2FqKuDEiCvsQd1vhGwB7LXaJMMyXpRQqeZ5WiknVW8kkBBQbKcf8oYRe4",
  "key44": "4A1vCXvKZTVdqbhw2a4dAJ1x8LkoH2NGzJQPSCNKLhVMfVdiRPCBCE4vd1qTJPKa7jvcE4Ch2VQyNkJGLwcZuMJF",
  "key45": "63ob3mvGjX9AWZ9bAxLgr8chs2A6QyBWkBbjQBw1Yu6f2rjfb6SPjf8FSdpLxiDruucpDYrrV88YmUNNXVqERV7N",
  "key46": "2jrna7xswjdK4R9z6Wz9qK9B9pBG6cUejVa1kytofgcMZqjLoBiq2TyDnwpCTtfffWLgYYMR732HJbkJzWRva14y"
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
