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
    "3JfSHHXkCjAWzqK5akx9TjfWwzE2Sn4oeGHuGABGbAnPTweT3VUkLB3uTScgZhXpRSPPjSUUWG43YiyhGx3uHcGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rL83sQzor9HhZ9yBJTjHY5WJPC9dnsasFEERQMa6A2GgDNqqLAsTQUtis5kghKZczy218xfibTn5zrrMxiZQUdp",
  "key1": "21LWKeKfmqvkpUbirvd4FfFPSPWzRRBVZ59NMjpudxFyc38qdAXN1kjPmCTUFuSURXsq5Us6ciAhNfyeNNH2n4Wh",
  "key2": "4ioasiKLzmdTtB2enCqnqzDysBhiKuhqoBBJ1TrMSRzH1aDRjqfpLdB8VJKayYF6UodTP9MLQGvppX55HtuCUKcC",
  "key3": "371h3zbi4QgnAYfaFgt9qGAMHYxB4bxdRZWyCNeyswxf1hxQhYrAUnkHtVa19y6KD8XP3HjotZRfnqJXZ85uiDSQ",
  "key4": "4p8Ca6kRf9DdX6KuGfV9fJLZCBXUqe9CvKTaBbbt5bkQ5mjdndShhVJzmHvskv5XAhgrkZktBe6XrKGzA1dDRbQ8",
  "key5": "KY72wMsmrse1gxwoH1zaYmtksJTR7M6GbJSaKnLUn43vkCZ6dCya1ymJmGEDF1p6yjQArU4JdZPK87KAiVQFrUt",
  "key6": "4kRQChu2d2nUx7AXZbHQDMhbdX41gWPPt8pfwm1q2opmBBqzhK1bcMJPEdaVwHqv6PH5EVjWCtT61ub7KaHxAK3b",
  "key7": "3JyFiixykaLpGic6oQxETMwAZBbLFJxLKWHjR2bZd79vQTdmBYT5bmvZXS7TdHn9WQDTSqVBmdzmkgdWxnjy6KJa",
  "key8": "zGZSDcQkBL34Wp46ZKUmGHNNUa3NXYN4P5eVRy4yjBeYZmDxEQE2X3PYBMZwuyuDa3G1JKaudWQcim4i8P3eUss",
  "key9": "moCZMcH1eQSD5mDNqhKk6mmu8ey3D6BTrvAwZsdqZXybk6RNB8RzDRbFzZyKUisua9hxXLkTg1BCzRM4czbU1y8",
  "key10": "2ADhFZMKQN6W9LeufMqipyZ55HhGRHx6RTv1uw7PSWKxutSuJ8BGfmnPBzshZVe52vKbLi371SybSevbEabo5yK9",
  "key11": "4Z1GCYYdCAJm1yPHmqFvnwTuQnD64VC79Guj7bvTo2khJvGjNduXWebCsyynQEwWM3bFLnWW7dkQ78HvjK2obwCV",
  "key12": "4QDyZVAaoxWwGPosBCNYBrXVyyB6e2SQGQfWUXgVykcDE39oQem4KTVQqHRtGnj6LdKnrWmXgvDnTRgdHuaXxQJL",
  "key13": "4h21n3fDUkrE2M5vzbcHeGtiCDrf7GKoKqaSnHupnWdds9sozM4Cw74Vwrrxsa8udDhuvFebmGzDydxXYpQsCqbz",
  "key14": "2LM86t4p1ToCawWmRuqQB4FmXccYWoKdjPBn2PpU6NqddKSXBzfsBM6SAbkMo1oTGu5xAQxW9Nc6GDXEMG9NNYGs",
  "key15": "3hAxZHNiteFMa5oh6uTedEpJD2HE64Ef8hihijGPhCHVh68jZVS2uJgobbEo7vYYhF34U7PH3ERLsUbVn7QNKmSY",
  "key16": "2idxFDDBsZvD7duVkjru72T2ZXcmL5jcygdg9JHFCL3m5GXFMpMa72K9yLN2KZWW6ih4xWGY8vHtRGBsFGw65oqZ",
  "key17": "5DSMF3r8xeFxBfnb9f93eLLBv4s4zX7tGsUADsVbgQTv2s5Dq87Q2Rnue1Ut5dHAuXc7f7hzeasGDgwGyj2KyqDS",
  "key18": "4jDkLi4h7FLkye29hnqnWX4J22XVsp65d4rJrQiJDwG3zYGq4VVNBdXYeJK35yBHZMTfmguhovviVKuxwwh6wWLh",
  "key19": "5N16FcFRZ7YyNSubs3avNXeVyrKnkMRvvoGppfUUy6EwJGNAH3JTRfzuQy4WAjw8uED5XB4zNVfUGVm5A1QQ3SNK",
  "key20": "3b4aMkU1wnUsmC2oeyt9oXgRLkaiN1JzUdKpB5wJcXXWponGaVJX7kwDo9qJr2JLQunFKXQYkdUkaBKPdXcrxD9s",
  "key21": "4EWEudVaVZuDGC5V7xvE4fSr3JFadhmbuTzTPWPL1FALiUfnfMEyDqj4TNPd9TyWkYav4P584T94YZzFmRnV8kiN",
  "key22": "65CPXJix6fjhrgVFWnRr1JHxCNQ2P3keCsutjiQt16KCNGX5qc13CKGUcDRG76zTnVSjcvcLCap8QChkbn65WjGh",
  "key23": "4w3ngBeJtWG7dY1cb1szww1F3PPeMS41J8QpzFV8DqqfPpeq2SZVDTGRLAP2vSDyQQ53DZH3G5zmQr5xPGqUnT4C",
  "key24": "2gcUQEVH6VS21X3bSB9XtWeoaGQq9NSh6dkifL458xzWLBhzjHqrV6X7J9DVZbihjBRZjPPrE2GNE5aA4gpJ7RD8",
  "key25": "2mCPLvPDVA7GvigAgJDz67TRxTiAsnc6CZPyvopse7QiH7D6ZbRSUid3TzzCPoYUnSU2mpKmbjYiXmtrHMBYVXAb",
  "key26": "4iAjhF1DfNZS4gU62CGMwv5HPwFuhtLe41hSnUBn2SmN49XpQXSgSuWMWcCPBF4ab3YX3mY3cFTCCXYZjhQF96K8",
  "key27": "2zYrQgQZ7d3A23jF6NtiPZtZoiSvgWPq7teopoDoW2XaLwhwzxA3ptev5pTjEQW1BVvnSYKeBi1AkmkFHLmLswCc",
  "key28": "5RSHGLc1JE465qjcVUFvTqMdBGiUnRYrM2p6oMcrJsbbFqdFyJxieSqh5F31BJhTimra1RERLbwD7ToVHXdCPseX",
  "key29": "5dXg1fBrnn3D7HMVUwu9cUa1mEzRo8akz9TwLuc19TjubEhFYAvJRxbzx4gNpfPtPDBpvB5hkeBgASwRMRotaXha",
  "key30": "2Qjg5w9YEbD7eKLNNTJX3X8Mpc1PMDRUmDM2aEX1iQ49Qd1P5NzCjmqrjzdS6HmjcK84bVy7QoDGNHQr9ScEELv4",
  "key31": "2sx9t4rF7aKycF6A95ZNaw4YkHwTCskNKebJoWB27ejx8Tc7nmxWXVu2ZbhgMTPMya3GhT6yuDjZvYXfJzMc9agz",
  "key32": "4QZkVFXRV6QUL4EM71ZDGPWZTMgUh2RySvmkK6M2xAQhjqsL2PBqnWLc1iURi9ECFvzgfhgjc2TKQuqzkFb8fFR9",
  "key33": "ATCkPdpNafiHavTWGu7WvorTboaTD8RGT8UGzwSqLRPPmdohBYxge3i3ZRuRPQdbQpDrNmzYE2nSd1sPWadpVa4",
  "key34": "2FyfaupBMCktnosoeCr5ZrLnWNDfkgQJRV2ow8fh8vq1K3MVrLfCWeKwzsmRvUPZsiLZ12yQsdjhHAh5oS7GMNVg",
  "key35": "4cDAAoZeHeuFjg38Ddrkm93GfbPFvuKfPmj4tZbpksJFKi8S5KjWTAnEVdWg857KegK4XHu2r4eeDenWZffmdABA",
  "key36": "2ucFYhAVvS34F4VvSq9f1G9efzsDjkXYD7Umi1WGp6Jr3f3uhFjYTi6zdEDV6Aj8kjU95PFqZxsQnxndmEezEhvN",
  "key37": "4qUgZa3qbByeA3EGDeJxDMmc8aTeoMkh2dpno8AsG3vD3dgjywodGmEEEne5Mqio3jvp15EJ3kgkgS4RYpNTzXcs",
  "key38": "2z2BtFhsWeZV4SWiUQTmjkvCw2UGmwn18Ct1baE3YTvYJ9kbymPxiN4FbR898QF62JR5e5Xz3s1rVGBBYf8NJaEG",
  "key39": "46tSpin7Cf7aE99DwMPcrkBku3z6PTrbnU21xAjQs9stdgG4Y5ec6cxKsemoyXqdwpmMHhjpH472amwLDpxe59i3",
  "key40": "4Y5tDkbr99bDyPph3MvwmThQ5vjvag4SK6DhBRKq4BJwhkTisSrpgoHTk49MBcUzE8niTDXoaPVTfDFftTkksZK2",
  "key41": "3VDUGcKanH1N9GfmJx3482pAKZqgDd6dezZHYooTNhKRTzSHc7jaW621kFh6GFqa45tR35pFB9PZuG5q1xAJNs9N",
  "key42": "45Ww5uwT7QA5nJDNFFH5ngnoKQwqgn2KX35WRBNAFztCZKy7VeVt81m9GknoSx2bs3AYtgdH9YKbZsnwyLwwmLeP",
  "key43": "Paa3VHQqGNP8Vt9jLdN1paujJ7wBEBcqHYwWdzX9NK5mo8LPyBc5mVHeYnBcAFqLtLR9w1RtJEkcUHREn51sb3P",
  "key44": "2xuhj1Lpe1JkDdSvroBBP9zSDpyKZFmfkeNYjDSpGLLEXxhGepMSVCzdn4tN416MNz9wNn6BTmfK3qbm6pzd9TzN",
  "key45": "tZhszp6HJiLgNY32Efekx5yyUbtb1XwZCaBsii2xf5viTW5gg2H5hByqLwJeSwC8DA4QZs54oEtxCk5r3pZaW1k",
  "key46": "4ht3Dek3V1HoPcBhsUB9eUxap3iGyBhs573Nzp91HqMePTPD1uvfoVq6kzW8vsNg9XNYCTxvp9ks5fAfUmq3FJPx",
  "key47": "5o15w9mwpPRXGGwLeK31d9HwGUJ9xGgvbkzJyUh6rWfryRiqXFrEHCitT2mQf7Nz4N8xCmj5DR2S8oEaCBEfcju8"
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
