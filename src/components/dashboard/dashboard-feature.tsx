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
    "5vxpxjwzLM1RGBzvdjPRtoDmBcSkTEFmjMhiJLKcwJe77DvF4qMV87H1VGRbASroY5bhufzV2X5BmxYyYxnHy5Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GshLBnrcAKV2McvqDAoLK4M6RN8KruD724XKUvhgnFSP1iSmY4oWL2MNcTM95SLVrvNd8STv7XvkiYhjKcq8DFj",
  "key1": "5xWefrUqcktSGoXfNvs1JCBv37e1QLUFKQ2QUA2zJYbSLwgk3PHF6pWQHo9mjrBda3dmCqitGbFpWAxnvD7hDvEX",
  "key2": "495DafpaThzz1GPcDBvGL4fTCfFFseiomE3RFXNnAmrSHYRRg5KpEQcJxrGwpy1WuwJ65AKfYznaWsZDwKrfqFUM",
  "key3": "2ZJcnFXiVCKN4MAovv1p1EdYs94RBbFH7WbcZzkk7Xzys5wFEbQ97bRqdSQ3wP18H2ZbVC9WBuN8TdYjwsrpnG97",
  "key4": "5t6Fpoqm4yysMEGSpzLHfH7s8CjVhs3JkMeaQ2uBsKqcXp7BJDF5dFhszc9nwz2bRn1oGr2n7DNWYKJMGv5td6jk",
  "key5": "4SYNJph32qcLNjvxHPmz5KUTW6JipWXJBqmhJZV1R18NTAyEZ3ni5P8xg9RaiQjC7Bd4YQL3Wsjv3AmBb3j5zuAt",
  "key6": "56pKPBhApid7uoWUypZTu9CGT2JJpdj5M1yfrKhXgXJjDBtxRTrgfPoeVkQgdcJz4di94bLpVQGG96xo2RsrWRAP",
  "key7": "4pciECRukc19wY9kihRELHD7Vrppza28f7LS98uo7cv4t12QbM9a5V4kjyF8FyGiSiVu7jCdgEsEaZFJHKNcxZPz",
  "key8": "2RfWXY2AMPmhN58MUtyfAk6DNev9iWPFo87pXNA62FTvrFc5avaByeP7w6iRGb8vK3n7ScjRtQDUnBWuS1bbo58E",
  "key9": "5SZjbmMXDLPcYBXgVWaQEYMLGSKNtgx4DuWUxCQ1wdxkwNX65KBJ5FtqpNmJte81PP6accbpDELJnucEnNp6nwZw",
  "key10": "3VQJh5cbnpAiT4MmXXatyKDtDcCFjjHCZ1jtkbYwRQsVCUyTByZJKwJKCMGhfnYUKJGGtu5ZWGGrRQQbZbBN42AC",
  "key11": "3NTGQX3i8p8imop4546oeUJhfNkNn7BrRgH9eX45WnL1NT747C24qz535SuwwVk4ioKdr3XCWb3BZXkM2Qo6gKjy",
  "key12": "5ZREYdKyPu66KgevxMbDqvmpVCrtu7ey5N2sEJo8fKNQj9srPwpTwSYGkQLeWu7mgoVgRRKVFaxLNeeozqxsXzs6",
  "key13": "5JBdr3rKfPPTYXPbFg6XSxTxWn1nyYLNVeTnbqXRz31iWf4ZPzHpdfc3U5YEfSzaeYzkt78DmF5u5LEHddKH62sg",
  "key14": "5pWSULJKaCxYK1vAMAEi1mHqRGGfTqqRJ3Ts6po5EGRw58fTERo1o5LVQnfPpSRYJvWEZJerrMvcMYvJjZUn5tY",
  "key15": "26Yoi6Amm1Fb2Jw1TMhUs4D776Grej2DG4Them7WydSdCQtic4BdrCa3C2m9NvRiYj49BjQjsgBk4AabJUSbjKv7",
  "key16": "2MYsK5w2GWukGsK2XRA7B1ABWjjcNQwEmAYJCGrSQWMzSJ6jxy8C5uaGvCExzLjXQyBF9YJByKhFqZPikQtuxkDz",
  "key17": "Qi51R4DnxdskdpKddvGF4LhpUEn9HjpcdYc3KX46rR4GL79NzAVy75uiBsTA3LwJNwJzCC2kdwBsoYbvdkX5awj",
  "key18": "2VBh5brmn3iv94XRiAwKeWFdkXgmrxWp4QHHnfHGcnzWrYLBduxEokLvqvpLtrFaS23kLNEbLotr3vhcqm3dnqxm",
  "key19": "415o1vg9TwQUHtnFrS4WUwFbBiE98Ux3srgjYkyKZRQRQ93P9JfXr6HVRZjmDfyNTYsVaPwRDSMirdWWnBD42yUc",
  "key20": "3q1pb5AMqYJi8c62PR52xjG2t3oQGqM8PZ6GxfLQf2jUyhmzogydM5D8VUFNZ48JmPBjxN63SkrZvJMVsjYkWiUu",
  "key21": "uMiRzkdKvUcKpEruzWzXPLykK6dyw14vaRpRQLekJPURmNfda5tJnSyxXc45N6Xgn2qBFUCLPo42nc4UHvPqKfx",
  "key22": "3Fb3xXPT1WfFKY9DM9UPTM78FutxUVwg9zicJr22Ccj2URAsYWabM8N8Xt8kjSTDM8gGF6Xnz1hb7QFKiQLopGeF",
  "key23": "2Vaevmow13FnyPV5wAWyCGev8g4YqA3uoZ1wrihYhbc5Wyi3FanxJ8ohomZELY2ERWX76HtS6maEeKYSvDxz71LU",
  "key24": "Meh98KnNivnjoCFXKjUx8mrXeMmi7wQ5yYgCqeCWD8e3A6Ko4Ao6wGbmk5k2Sz7Vt6rJ538SX8oAp9HaeaNNFjU",
  "key25": "3goKuFbNk9mzvuoVmnj2GWHpoaGe439fHshyY3Sd7Y1kSCcgNENHzQtz9KQG2zFjhAuGxN5AqQGPt3XPSvUgjYe1",
  "key26": "zCdwBGVPePGG6i6VfhKYZbSrCawm8pTn4WJKa3pCugt1yocxgR19i79EYbaarhkyXF1W6rGRZ5wVyMaVPBuJU6L",
  "key27": "2zMPTkMuMq37sCbc2Z39pmfqv6raWj93zDbrh3AWdNvWbJEEbnPA4h2j8oX18u5tms1smAXy8wKK8WTvB94xChR9",
  "key28": "26k18b4o2knXNujcfXihnWL8Eoptu9JUSNGVKKf6NzwGmMDMDbiZPT7ReGJxsbgiQXwU1L36YQSg5bib1YXuoesB",
  "key29": "kknccpsb7BP1UmSs12p1aCguTHboXCWdx1A93jGSW4smoGEKTYBeUdNHxg4vGWb9LpcsGSmHTwZeDh9dC8jrDWC",
  "key30": "KyTxhdS17fEf6xHssfJSVz3BSnHVa98bYnshshhVQxEcVrJvEBBR7uf1JayQAy6Ge3XWeVSjvkyqabGWrHWymgL",
  "key31": "gfbjfroXDPvUivHJhHLjaaBugQgnNpFCqmPqAgy1Utc8BFLYREK2PkurcpteYQZ9q43whoT43F6K8C5oAVzXuQr",
  "key32": "ePPQVwTfnKxuEHgwx3No7bfgq8UWfAA1y6MbRLdmycaUzfxGTwC2mm2yzEVFzhR9g8ZyWVzCyoWhNCpKGCCS3Ya",
  "key33": "2wPrFE4ofTvDEixRtrkLGtXYizaRgXnySeD4KBwvaNRcYqL2a8FfAktpGBKs7LBKqjn8ThY6tgtjKbThS7PC886Q",
  "key34": "3TJ8R1bD8fLJ38xrmCm6L967rUny44tZ637hb6x7s8y3JttoCoDNhoBh28vh91uNRqSk1CtMnDXoAFQuks4oAFK2",
  "key35": "5UEXmnTqVJostDJMCvZEnPQgScv51pW7nLboVL7yJdvLezYgANgcTbJqVtNr42bBD2EzLYdR1Dg2xQEa8Mh14LQW",
  "key36": "Dm5nnVHdWM8LMqzoMJP2tPY1NJXx1HFUPK7LP3YucNwqF6ThFD4mV7a1HMgndPTmdJEbWcMa2izHGkQWHBHjwDt",
  "key37": "2Dtx7jRZz5S8DKdrJBTnuhJ3z4SCC3pD9i2CdwdeXWmGAojBmWEYhcwiJ1tqZzKFCbw8CQEtCWwNR6Hyq7Kr7SRm",
  "key38": "3bsCR8NdzqJK9PceXz2KnWZ5izVGgvQwZRbX28pzGhK7SJqDBkPTjJADagxfWgWbiZ91x9rKZm86RJfjWVX4w8Qf",
  "key39": "56apXUhL55dAXrdZTTe1noM3JQTz4KM6i3tgZh7f77Xd2ztrKwEz2SvxKUGQGKH3C9pP63zaQZ8aPXrp5cUYbTHv",
  "key40": "2r9rxfJtvczzrvqDaGudHkyiYs6pm59qebLcyQU38YWN5hm9sy6fnVZ5ieB6FzAQFqhyjXRXZKLRwt3QzMYShx81",
  "key41": "4q9yBQ3ovGHp8YRhACcjxpf6ZLQx5ES4AX3ubxxGCJJeKbWEmurbSmyigtqLotDxbGWowx23sZp7TaqjMYkAyBdH",
  "key42": "5JtqyWeEQiLe7A5qQug1gHtK5nqsjv5y2curS9BjjnaVNmswes2dUG7aqZgWtsQF2chiAY9o69WdkdvdUzN46nAN",
  "key43": "3CVbtWwiHrrAXAcVV3GLtYh4A8wZLaRznx58dEJRRJjUHUz3T5z4DDfEt1RziW2ruP2Et1VyYMemWJdxUnZhU2pS"
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
