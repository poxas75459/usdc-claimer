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
    "43G6AjjED3m5vcF4c95wxaLbHQbySiW9KWnpr31NiXBqSBMUxgewJToR7ZKe7otv8ei9odD18jYrGqMAyE2pU1gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHrMTivKmdWKwr4bXrgHZMBZCQaQxvD2eya5JozGGiD3G8XNkzXirjt2kJPMUF1pCz3EQ46vS2FQjrg9b4iRwUC",
  "key1": "2DxRNozNQkgCQrjB61GNRKBgJ7gUR3aCnHgEmqHS3eV13ZcbVTTktwrLCJAxkBfjkHGdZhPsmReR7aSseb26L6Mv",
  "key2": "2oQ4Di6rd3UsoSdAyKMA7VvYZDqboRaykKgrJWeGJNvccYuzKavdN3fgTGwZJMNyJA74MHBmXBURRVTMTTeVyW6u",
  "key3": "65fuMfdzVXNQgNhgwBGjAqpZow8KvXUo8RkWWZ1FWhaPk8ykRAeVxTbgbHVK2hnRDPb7Ww8oCBVA8qrhYcvD79Jo",
  "key4": "5wNLVGY5GggH3q9wZETTpBJdaGCGjS85vW5iJSG4eTMBBP2zEtDfBgNRMmCUzZgCQZsrJz4tg6Va3eXt7Sb2Wz4K",
  "key5": "4MUuFYNN5hVDTHuzLxZDEpL8ZEfyQQAkRnVinXqUVvS4ow59DmszBaQDpoJT2utee461NmpzdNxZ33JUvj3bovHQ",
  "key6": "4qs9j3zhXkF2Xz6xLpBcT2FfYxuUmYjYgQYfrTZCy6UyQVjGX1xqrpcKvgYZXK9n3g7NAb7EQSxrpcWSergCfPBo",
  "key7": "3hd2EoXZsYKtjHXSxjSVd7u3JWvr5fzcm4w2pwN15trTKC6nbiEaYYZUvSCtknzs32gPdJmUPahEmgByesYupXfg",
  "key8": "5x11ZxMX9FiR74ZCfm8C7BgAWFrGEi8313CfAihjrGbcwCz57y3AQaC2iyWkDfBE433r4c4xAzPR5uCn6hRjJG9s",
  "key9": "2F8djRBgHh9WUvi6sdaMPLCxFev8F6AevcnJzGVapKxSiFUNUjoTYtKKgr5UbSQWRxNFmjYno4ggWNh6XGhu75bd",
  "key10": "45CPQE5P6CE8vjK4gW24b73F9r3BbjhoiUXUzHJLGFtpqZ8pGgXsYfa4Xj4xYHMfamrwcFBf9FKWxJgXv4WRd8Mv",
  "key11": "3irwBxX63zcvDQquUATbdBShkg5Hjniw1xymfoD52CtRoRzPdSFjBVWAAMPgJB7xHLYGWLyd8Wm3c1dCKzvfcpMa",
  "key12": "2EXXgYF8eGVvXDQffPCR55CpA47NoFVpS1H3cBJdHKHymD72V7vSWX8CgaFysZhzPSHBCjgrx1n5LT1qMYSq8RKB",
  "key13": "4naivxQefbkTMHTF8CucdDe1hqBeQGBGm8qpjdNh8RgZ52b9rMY6SZbU9PPzFSx1QMZ9XtzhcUJaDnLF2DQX4D55",
  "key14": "2BUmi7P5BHR5b1T3BWirUxp52uDQZ4rSJFeFTyvXDpmicd3bwESFAMJCtEaLWkw9Aw3BBvtjTj3VNo76D3gxo7TZ",
  "key15": "5KoBwDzEoQvMyf69gfUrhwdZoiRx7ty5TrGU3dwQHVKAK3k1N8GF3ouNqWb2B3aUpf1Uy6uTXi5LiiuupfHuXDt2",
  "key16": "4HcZcjgPwDjFJCvVRffmmKvDJozFjibxbCvB2tQ7CiPNwdkS1gyXXY8bykRhB2arShStBPnUY5eHotTzDJNwx6ne",
  "key17": "gpq2eFkG2aXA7kuQ6Yfo6Tnko2HQDs8jAUwnnyoSzYyXMbfAYCJhxceFuse5BEawtazaQMKiWY5MoAwonES2f1G",
  "key18": "36ZMBvNgyAturiQV3xLzMJvBjyRtiYbw5tp27Gyzw7SRJ8FpLT2Ux7yXmCDptJeBRLxVVwJzv8zSPg7AoLhSLobS",
  "key19": "i29U78jKhCJihGWyz4RjFKd1Xg6TrQME2VX7fg1aLY6fEnh4ndoGdf2FXenVCoQi4JNjG8UK8LrSHTV4hC8RVHz",
  "key20": "2dmL3Z7Sd9NxcDgPnDRfR87RJeRonZf9RehFmvjoyoZKVtbiHTgNKNVKvphEvWNH2r1rn8vvhpQ771Pz77G3eL9S",
  "key21": "593e2K5HTWkhqrpFLMtyd1ewummxuubU6uPDcsgo4nzuPtJWeqzr94r6w2XBLaoassR5mSymZrRExZvPacWekUBY",
  "key22": "34dKhiQpVReB4rBF5XBycbEi6C7EY7TgepnugqLEUnoz2wh4Xc5Zu2ZB2PRaafahbkjftUcdizHhfPey5aTeSLMT",
  "key23": "XqGSj4C8pCeskXHdyUm9Azi4bbTdUeLxezBa1i8uApL1zVs2qU58pwWkr84AcbGEkQVBJxYMPXH1hZxeMDupBKS",
  "key24": "2w4j2MMyM1AFbWAPYzqMbwEGZRiDcbCda1vgcLA9QnFWMFM7Wi4kcifW1tPw79nXVwHHXU87CcWMfU45sHu91D8",
  "key25": "5XRPWZbLRNCJmL15JjNNBr2s8hmB6mcCVW1JUYSmXC9GVBiz4woRVn5oX7e3VxyiCGbdaFCA8PPDcYu2k7m29skr",
  "key26": "5vWtWguE4QgRLMt4o1m7QSTYbx24CkkpWVktWihGbCa9ucRqtABbpNWLUL9nXtUv19EBa6rukEVM2rwx2fW6aVqg",
  "key27": "3o5nNCd11eSk82b7PZn9ecPpyvNpsTFCkx3R6z2QKChXxpxwaxqVqo74vaAN7YnSVhxPqAHsFJCiM65PfaTHW4xt",
  "key28": "JLwF4ZykwWHadYzsGdNdjJ5DKe8jnFLXN1cwNsskrRBjuoKXWaLyuKWL3PegggQ738VRNNXjK6hofMu4nuTwHco",
  "key29": "5VnMyAcewnokjrMj43bErkkjjQuuG4EX7wmaCnRsusVweZvFeGUeTkDnfJ6khsbfr1mhbCfipYWn4RP24HbSgmXV",
  "key30": "3xGm6Q39RbU9uM8x1JQEsuspuFt5Nsz7AgapV2i9jFGJ9YzPFJsiKx7wZNdvozJoCtGF8v3CQJAgrRGSimAUXiuG",
  "key31": "BHzCTZ1UR46B2f7ZiRcHAoJ8XoLcJXtJqW5K1tbukJDcuuoWvMGYJjD5uaz2Pa555xVZve3YLfPyvR1QanxyzgX",
  "key32": "39uc1oBgq9wfTAfLRkaWS7GeLY8MyK1UCdZ6ePoJ9DxAYfzFviiUnpatGWs5BpZ2b4gcffmq1r3QgwGyhz3nyYnP",
  "key33": "5n8nQ9K65upH3nmB6zqk2ciq9dJjaiMszpVaLFAfEoHpDiYgobQiMVLYG98kE92yWkPdYuWAyep3BjomDc9jcisi",
  "key34": "4sK6CRyiDaxvD2cxaLkbj7aEamHjfGGzV9QwVuqDEmexXsb4htUSWLNvVwRy2KopEPx3WPrFfuUyrw6g9PCwZLKS",
  "key35": "2uQ4yxG2p1QdnDysQh3duoeKenEDhXUFgynufpLdJ8TwZTFHH7kGB4JQ4cpB6pNUxUmBkXUg38yTXofPiRYKcJVW",
  "key36": "592SteCMddPA3teykziVa4EqkfyNdaGGxR7pJdyaU1w9KqufQjbT18DVZR6JPtnZekzUpNugkCS3KdiDqfQEipUR",
  "key37": "3CUhoHwqoF6FxE3rBded8dm4fC47e3dkiVuftKPUeWo35hXQWa853UfizZvTu2MQqdRR6TKXRaXbBsD4rKrrC4ad",
  "key38": "N4rr2mq4a2X1GH8TeEja3tBqZdXckWhTTgvDZ6StVGVjpsAPdz4YMz9asN1ipzcP3rYCZipYvxLwoiYsx74bSd4",
  "key39": "4m1X76pv5Sey7fJbmKGgcgyyrJexxyDKEASfHzTEd7s9rQu2rBhhJH5WuuVnuGfVRveyne8HQQtjPSwyk8pj689i",
  "key40": "CA443VWSPTdEqjj19bVniE5nYuJxGJdGCt1YP5SmnJVzNCg5DhQSvXg7GC59A3yz9maaNxiWg91bTL6566X5SJ3",
  "key41": "2mfnqK79GYnFY9b4xi5oJz6hK1hxd7Zk9NCFAiSnpNFYJRvEk37VobDHyKPNJud7XvZM9x598Mo5Mx76D5vfkoJF",
  "key42": "3KA4CL6Yy4uK8cEGNQj6sVe2YMuikpEugoer5iUisPBiDfrqAnnyweekBQ8hxCXoZBs7CBQkmwTW3Pbd4sXoyPNS",
  "key43": "3V2Fjow5CMhYvqvpoBtMs5C8yBEP1wFGWfjTnWiGcNN6XBLZVJe7XVGwdzjjibJTc2dCPKAg4STrDYxdVuYBu3cP",
  "key44": "5YQJH1iEJ4xnqgQZGpMsfzxhDCyXkKt2QCapYvyJfTpdC91eeqaGe1mbgrwbL54aRxRUjAbmVShgDSWbuQ532CVm",
  "key45": "3qiBfdYHvbxpf5zyZDVFtPRs7Zb1weJ52Pfnf9ftNCNLZeNbCnrvK5oYq6qrRh6oAQK3wqhesr6x11JMXWf4Ho6t",
  "key46": "63AGE9i9V5bzT7aFW2Gnb8Y1dbbwJjCRAi1dbLCcq6FowvSDQRA1vzhz6odp6LCi6xoGJ7bxVX87Yqd4Fa6wxrsr",
  "key47": "4NyUxgE1NZtrAKkfoAjqgGCuzpR6PpAd7EwPyWMH7f1Mg6pZJhVqUSoaydbi3Mx6SmLqCahg8XkwGrcqg8KJdZQo",
  "key48": "25AY8jtZAYywSQGi8iFrm4eLuobXuy6zXKQUV2E2e6mpp4kED9jREFQwg6FdNTCmvLQ2NEMAbKAYCJySiaw71eHV"
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
