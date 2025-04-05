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
    "2sLsxRvSW7a43rKNPRFzYCR3Ef8CfPkPoCudJ3znS2t5NEdLrrkBfWQVf6tAbGfKLjLm2LLEy9hPpm4k7pv6cUoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbW6S2tVTLtCNdD9qR9L7azdRk9zS3DYDMjt9yu9MztMqTGuueMyaGAuhaHZJdbfKTzFDx9aVy7mtWZP3zYWDcN",
  "key1": "3RMfKz5t3yAfcoYm86H9o5hhk2a1Yxe3h11tnnL6c25BP3KvtZi2NvRtHX2GngMzHnUK9LRRmoRjnzWKVW89zAM7",
  "key2": "4uPZuTYGwCQgDnX6tKs7w7nnAvqaVVJWaGxkXoAw2gk9yhjrQpxmbXPjCX3o1GarZn3k8dcAkJ7ebJoW8hk2NveK",
  "key3": "2bdBoQ7mJhStiLjGgnJahGhP4f7fTMpgvQSTHRT8GzcQHwgiRj9oDe5uxMat5JsqZ5B4XtM85osLpcc9ReX7TBgH",
  "key4": "2gmYYETRQMxwH65J5NDnUtmk4Zir1CQq99KzcnQU2PjkCTsBADsZg3pRVTVG8DZSt3gGgtCj89Lyr7hWGqDPWm5j",
  "key5": "uYZfKFJg87JWXtAaQrYhVp2E9LJyzUd2tXR97QJzmeXFQAiDwkrJNMesvs2BwCKV1ipTaVzP58H475RE7MzchtF",
  "key6": "2maY83qbpzZAzvpLm37BQpYUumBSRiXFPuxSp87syb5ywAA43pGF4C5H1GYY9CLwQC5BtojoYDpyiXM4eG2xmmvw",
  "key7": "2M5DWnbGwLvoALgFonPjvdWr9Cr77UccLr9WEaVdW83qAvnnWWeGrtN83aUiaBbjRqiWHQpoQHARY5D2AhUfbdyy",
  "key8": "4nR4VUTdgbkm5ax38RcpCKiPqmLdQt8X5QmdSJFADW72ChBBUh1V8DwehWpSqDmRKtJGQGFBNRdwkPfDNANfThNF",
  "key9": "EaoPr9qakMHgdRkTJ6LWpqyDEpqEXYbZ6X7V8m1pfY9JgF9qXWauGoDnZPG54C8pkCd1o9zcmTZGZfxfphzwcwU",
  "key10": "pnYf5NYFR1UB3yZ7bsmmm94oGbCfVM8L94RibjDUHCp9dw9hSmRoEw4X2tLjEzbfo3QdHjFs8sm8R7g5vVpnYzb",
  "key11": "2z5z2WJ6pjPC5bjckMswxT7VJrfHrVhrwUxCgijxqagypWG32RjxgKnFQwecHsEVXNjDnMJHJ28UoXHL6nYQaTzX",
  "key12": "5rDhb9gbuar4NZciMa4QYFHpDx3jSvYMzwMELdCqBfjzL9hwLBMuawgStUZQEH9t9GdQUrqMEyLTkuZqYsaPGEGt",
  "key13": "3Xa1MMHppw2wsrFExVd84bZjsAiDtgh1JPru4nJJ1x9yqkU1hLyQrQUQtxsNPoejCYAPAfxfuyZDY3RXsLZi8XZS",
  "key14": "5tg1jmyShfafNmSaiCtkw5uE1rq4DwCRdTx1sQ1Qc4ZmcRu5sp372pTN2Emv6g3JSG3UJ914jaVJWyX1ANauHhWJ",
  "key15": "4dSB7nFEY6mNbRz1s6Z6j9AXk5ygYoDGuzz9p2iGfpCSUHQR8oLSsTxt3xBLiye3mbEPzj6ZeHKeCXCZuVgfxABA",
  "key16": "4F5rqWiAzpkiBsV5fdMBbqYwSLwmzTR3VNTA118AdtAmuYHJ5fWkXgDB9mAb2xUCMZZdAUVH14bx8MzW3GYoLowb",
  "key17": "krCXDdVzkRGJw95JTCTwsg7Cx8wkN9mpzsHP7kCWmgKyyc1tYbsuVukW6GLsxQoYJ5MTZray3fN2Y1rcZqSEX9g",
  "key18": "5Rhqgf9pfGoZ2b7smxwcDWSpw78j2zsZjbWfzJcewBd6WXmY7veyonSHXHADshbHyktSbLcfXNy11wQxoat8m8hU",
  "key19": "NmVo9WfLnG5qDMrGxTw4doQ9sGRpFsRBeiqaS69ekePWGqFB223WaNEZd6YNJ7uNPNfBKqjTGGrGruYof9p9PnG",
  "key20": "3hq4KdpCKRPtwJKVSG4gYLs319ZHAKHduDGi9racMmXnVsK1Se1xKXXypC5dkZ4TZU5ZWGLqAa2ZiqjyjRKshtzA",
  "key21": "2sK5EidYDTWJkS789R5Q84eotVSBthzkmy7MJm9fKkMTU62mNdaM7oryLB5oXATVg2NRwW9LLZFS1Zr3MdeA5uxH",
  "key22": "5PGN5raJgkTP92mRfStLG17b3YbAmTr65ucszxdzEkKrkuxa71ntRRzc4NXehjxhqXonnGpxVFwyT1RookCVFyDT",
  "key23": "XZkanq4Ca5dV64A4Brb8rChYJCXbv4siAhJncB1R83fhkJzS9wUHeqjhitHMzyrp7Uo6jb8Z4oW8TznDEVdNqzu",
  "key24": "4B5uuwbMk1WBkd8vuz6iFBkSc39trSuxXVqM36heuLQ3yPZ4GbhFAii3Kw72tN6yicLzNuFcJXHadZ9fpdsvzbjv",
  "key25": "2KfmxkSvs7E7ZBT6Ch6Kb1Yv7xmHfciPrraKSjW1kb3B9wPTnu3gxfczh7mBtx8rv8Ytm2x2XR5QWaGCkRiGdnuk",
  "key26": "3Nk4ucYVsHDDVMFhrZSUTzmYFboPqSkLjKgxrZXRVACiicTZj8Ktmg6LkxKouG9AD6bX8VpHQohip7h2Vd1umRyy",
  "key27": "4aZcFVD2yuzeeTAQZs7262kRW7eCqaNpk2TJbSEWdL1jXz2zdhFBX6zHrnczsxx9McCfoUmy7j2VU2VXaUt5EgwQ",
  "key28": "GpCkZXRKDqUFa4HzD2sTire5zgoDbhJegud5JPULGHft7tp47iAXj26vsTpxfEgj6CgtEEJLPFsbpzXU7no79Vy",
  "key29": "4HwaoY7Qytt1tDDNTfMWd8sU5mVkmfZJM6RgjCuEmsbHU4diCfNKHMjNLTSa1jgnQy519ZdoicU4ZkKwRmCrdwVp",
  "key30": "g5zx1FVARBfHefbZnipUfjMZYwqqBWgK94LbLJJSyYFnuFdbZjb8urArcyrqHRbp9YFZzv4bkVtwdQCHvUa1RJF",
  "key31": "JwCEGsN7cEEFzYMn9K5zH4Quz6YxcirppwsZT8Y4Vg88VBGsMM1EbjoJQC63MbQL8TTBxD8LG2v1FwWnyy3EP43",
  "key32": "3mqnA5DMKjXonQcks1R87Zger8nqC4oJedqquwDcsFEUtiAUTScr8kymEewUZQ395unbb2UhcBzRTEafkvemGzpC",
  "key33": "3Y7r2DSLShey8rSe7i9hS5gFQZrk4L4Wbi6dgFVZV7o74YdtxMvh3RSshCYvzxGAXYqDmLPYskd9ZuP7PFmSHvnY",
  "key34": "36tfmAMQTTQ6WkHVPyLUQ32YJf3eLnJbk5psdkFFprPSLB8hDjLAxVELUuxvsvGT37qvGyd3TBfVUu1RTxJuusFW",
  "key35": "31zYhfHXWPA3bd67VUGEyEkCQQ2CbL1rxHw2az3E8wDm4L2ZjThUejotN9G38r2m2aKXF44vQQA2isMr6rkKK2nF",
  "key36": "64HWrrLRKRQxoPKh15JpWFJwHSUxu8FCquGXrFa1jBU29DsJwdszjg2D7KpX3y1jYfaR5dmzKqBKt4BuptUGL8Pv",
  "key37": "5aKk6qGKjwZ4DXgvVJJggX2stbpcg5xMVgksndEkjkmGnceV8dDHxqDfdT4Df32zJzXgLjdRJgvFpENoGvUcPiUS"
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
