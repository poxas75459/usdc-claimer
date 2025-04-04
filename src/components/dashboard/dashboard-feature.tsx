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
    "pzNHRuhZYmiumHaCamwEmy51CQBhHN2eLvTJnHFdsCAeQPieR5GLFg65oBonyBjTXiXV9SeHJnhNMdpwH2v91oh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZnLVtWvk4Z21g4UUSS2e931AGeww1XbikYe7AQQE9x76nCUjpRVUdYbRssXMpe9Bv9oHG5EqwW3wcxx1MV2kWt",
  "key1": "3Frur9wHRWJhm7MTA3q4cH9j1Ya7hbyh1i8TC27BBpWSU6w3iiSPRde5FmKXz4gGkwCe82kw6e1JRna96bjN8A8j",
  "key2": "5jaGHKZruqhpc4BQT9w2JeFjxbw9jfFqEoaZzWqYsuxg15UvSdi77asGaxveP5JrPq17kCVTVN6cDdrY12f7kbNi",
  "key3": "agextw372TwcAi6n5SQzuvKLgfxGhitG2tXwadpzNU6BQm1kZANSF5qCKHzEtRNnKg5wvwifEVGLNUJSxJksVgb",
  "key4": "4K9paxsYi5csXs89e4A6wYkqzpRh8gxBZr4fRkMWqD7u7KzUcdTmAF32vkJMoC2eX54BN8wAzoy7xxaVgxj3mAb8",
  "key5": "5oQfcLAqLkoBkGz4tPLsct773J3sDUeCEfQhVEjqrEDwcEQrGmqDzCttxJSMEEbVHZoDYuhPYgtgGt1dGaxVJtUB",
  "key6": "4MkpGDvoJgr9n3qm9L9zF8QXNWTHHdktWRys474uZRBxqmCZ2JKa3CgBgYHgj8DfDgz4VRpvSAsBLgExpJHXr3yn",
  "key7": "UvLDBu839jDDN66SSvirj79G6SRDtm6zu9HYeHE4aEKWyr7B9y9JB8RLZyd3uG7zkZLPoynjyUTX1zyAujDp7HM",
  "key8": "5DFANFRduSbTmNQujwNd4H9GTtpysmVE66b46AbetJSoJ7MopQH2zj8AqzPfH2AiExaGGgkQxAFSYtWpacBYMYQ5",
  "key9": "2Wp4Nw1Ac2dDTBrHC72tSdP2D39do2LVJwPcpNQYSSwxSKrXvEiZugLueHrd7hXntysNdj9Zp7afZHdK5G86YnfT",
  "key10": "SzxfEVjuErFUFCvnYEDS6ztBB4seiJv1uD3RSNczHf96fP3pvidqW9GpWQtdRdem6dZ6jg6JnqMkANwXuMdjtEt",
  "key11": "BK3hH9yMGRJwJA64W3JMwP7SqBQaTw2yjDhRUid7K9Gkr64js1rR8FGqhv2MBXTCpq8gCS8TUqTt1HZVduPppbT",
  "key12": "2Ydv2TiVWdG2GX7cyht6XTff5HskFP3VFRE5yyMrVuvqwGYfZLPsKfMheyxte4P1VWbMjH3GKdMomEVYbUD9oLSB",
  "key13": "3VgaEnXLoorkegUXceDc3VT4SL4vZJTng7z1G9HXejQ2birQCHnGrUZHEgZp6Yzik3Azp6fNi2A3rUJwtQ3XDsFG",
  "key14": "5AhLrALgiQ9pntTQM1Y2sfjiRj1oaXHEMXKYopR6jV4RfxhSkb8Nhu6EjRF8punJszFQ9TMNKxHXyW4h9g4pvaiz",
  "key15": "2y7u4a61UAuuG8kHTc96AjLuw4BcMSF66PNcLnk85fpqiB6SwHJtZYjdnafN2zeEQF9nF6vZLP1tes4Y2ucQt7d7",
  "key16": "4Npj4CRhoCoWNNjPHsFi9b5FhziiHgSF2LXULn3fwJpMp9FeuuAN1u2efhxwRYt9vxmB5xaHMczXCdwDDko7kX4o",
  "key17": "5cxZk9UbvAxfRSHqTs1CCL7sN3rvQA3FfkJrqYptj5VRvBFn2gDxuzLGgTFPWbAMrUBEPmwkhckTUsskrJVPg2vi",
  "key18": "9Jmto4Rcd91eTURaUm2gLVqRuTuRaRLJn5gPM5F8gPq72oJw2q8XKCZ22i8iNsvhySmXQdRoViFdHUHsKuHPJPh",
  "key19": "3r74oyVpDRGxKURus7khsW3xY3PxhQCQu1Zev5rpf6Rtpa4Nt3NN7hTKAzAJ18PhMuAv2fEH3P1vDgbmYFzGQAyR",
  "key20": "2rBv8jErqmDKhVP9DVw7QiebHTBfu89VXfmajJTcyiuyCggfpz1qkFwzd6jJZhjDmrnKh9xEXot11xjE4B15iiui",
  "key21": "5SQckLh7kuSuA8irwDk4er2Mw79CQeSjbpfYRqUVRrSnMsd481ZVjKcESnHv9CkR8XqQVqEXGLVGbb8pa4fd9d5j",
  "key22": "4bZ6gVr7GgdFhkf3kCrtXbMYMLAnuxatnexedjsg6j23JEXfwPbtaBL1DQfAXoHuutCqyk8joViDoc9To17LBBxD",
  "key23": "5ZM1qFVoqqeVTogcMyAnPNtzgSaWbgYpXBmtAGc4TYEeh3fKEVo4dCqqsdzCvyr8ypoG5wnbafFksPLmYMFt5ieL",
  "key24": "5vXxghaydCqf6hRKKvJsdvt3iQ8FvnLSuVAdwKPRSU5BFYmpoiuyhKinoWj8M5GnkMAdWf7EBMVaevmMiK4tZXC2",
  "key25": "4cjr92dzkAtjAJDXyjoYf3ztpPqMwisomjNiRPyn7tJJyLkQNpwoqMAqVq8csGY8S7GsPsRvo2NgMz9XNRpo1mdv",
  "key26": "4JZETg5iWxDPtDZgBMV2Zt399cRo7vNBW7UMLqCoPEtiCGo3QKT2DB9U7TqzSCVxkActcwKDQDKLwXjucw48wezy",
  "key27": "5oFdHykaTCWem6ovqHVCqG7MAXyucHFD52QKZdiDD6zcCRm5DykbNeZ6jcZcKd1iu6RgPvkiSZnkkXop4mxei9ZS",
  "key28": "3qXLFWSJ4M4Mr8q9f1HneJAZLYWh6TSoiakBcR9uRBiKt1QKPJNziJEegLQxuHpSZadBex3FQVnvxVhuRyyvF46e",
  "key29": "5Us313YGuFowQ56fFyCh9PDX6ETqFZo3W2MbqLiHNqFWXy4dMniMy3anKjry7TdKwnTriP7KDFmiAV9gQkd2VQEz",
  "key30": "4fzkaUbBT21VwH9AXLJiEj2a5SdaL5rJHMUd5xLYnHUrQFPVSXVnbRSsATPyQBZcZ7FzTrcdvANpEGy3EXJg3zxR",
  "key31": "3sS9TvtYnbup8QBWXcdddkDeaTSya1qLcSD88swhLrc19hSY8nLVxFVFQLPPiSYc2uQWGS5rP3LaBCBRZRRWv87f",
  "key32": "naiPjUcH21HtxAzqaTLBWpEjhUJw9QYB1bhRAMRcHMr9sfaHLttUWFVZxYS9Fk5QUpQzDJxX58iUs2E3x8QycUs",
  "key33": "5dfQMagCTNyJM8Xrvxa7S4EygqrEBRaiin3LDNpRirdCVJ6Gwvi1waXe9CRj5ew3eFpaUxYm3HpToMuoGaz3MQW9",
  "key34": "4G74U7ZD9JjXAAurJwrzCbKRd76fZMzcyQ7MrZqQDynfTsm6BD5B13c6aBWRsBhbZBUdg2rHnfkLQi24TYWZhnqC",
  "key35": "Zk8ofzT6tsjjR7sArZwgsYoieAjZCN6xhhhr3A63VJKBCjqSWDwMCs9a5C4JWyTBBqAT74WwgS4cFAjeBv23zUW",
  "key36": "3mVJsAD7yegVQDYkVkbN6jWjuRLxH8zQmw1fg9nhEFba6BfdHVoaH23n1G1Y4hVtCtjoi5gfhTLAdTpbmM1DnxoB",
  "key37": "43UqT5NEbjTec2Wyt9bP1kd4pRTKY5Kak2xcFfY5z3ex87u4sirjbj2a3s2zMK1WuLqp1bbY1uTDWtSKCYfmrZSw",
  "key38": "63bL4ZYmHG7eNwBdjzNBZCvBxBz8FYfeohMhGVJAq9ZBtYWpK1nFCa5AfLbtGjhs7YTiTwkGJWXhRcqLybjg2WzJ",
  "key39": "5GPMV1BpSDWYARWmV9BLHDTHJQoCgMzNjef1xTmGE9ZFRaAihdZcZj63dafAKEEz8Lppzn6Zvqsfwcb4Lva7Ns7B",
  "key40": "3d55i8D8oLhoPyZoRWAFrTxwCLu4NBk3N5Rx6o6Lrsmm4NkpkZxknRV1iYFx44ZHeJWbY355JHC9CvCYWKdzq6xA",
  "key41": "4p8AUAX31F4LqHbg8oPX1v1DZZ7veWcYEshdeYET1XCSpG4T2oUTPogmUBV87af4aXnTBr1NwwPmVvWjUHKb1uMx",
  "key42": "3A8q3Fiit7S9xYhuVsUFkpT3vV3CLmkt9x1SjAHw7bviVqi5R4QZjkyRHheeoagCweUAYXvsofa9FDVxAcsS4FWc"
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
