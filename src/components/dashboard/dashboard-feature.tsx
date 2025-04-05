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
    "5zjJ1gQd41fnxVw8YatM4Yr6FJVds644wXk3Je2hoV2QdhyZXD2abVCYi4VQ8Xk1JUWKkFGnsYZbExKWRZXuSZqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrainEnL3yTSZ9GpDPXxzHecLWTNrEaLxjUcSpUjuB19pvPJszLyL3cfWqLbuTnmC44Uxh8vB7srTuZZZUPK283",
  "key1": "63c5hmwhej8GCxzSbYLWwWynJM3U6ri6ZBcKGn8y61TpBY6kMhDo8KnqQyxchtPsRUZVsqHfx2rasC54m4EZ97i6",
  "key2": "3TvPG6dmrNrUPGUq5Rp6AWQ1bGLeyYSZHDVDDwSD1Z46Fyy557SunkiK6zazkuRNtgmDc6VdhQ3cTVwgo2V8jkDF",
  "key3": "5vyoN3uvLodRS6g2Lxq7omsWGizSicwuW2iJQ16YiUeMaDQBkZRWntUBbvoZeo5ohNK1w95whRWRYdSKDpez5PRc",
  "key4": "2d68xpDYed1BbcN6bdBe2CxoFusKCC7UkyYqYRZw7ovaD7U2PHMKCTAAftcLsrbj3eqx9kUgRQCCcBvMJJ8KxToj",
  "key5": "6nT8tBLPtxCiypqfB1phGcfs8kEpChcq547D8a8cJ6ZPXrmds2DvzTffbRUbwvpZfPLhoqUvHPL3UNyEKL7wehH",
  "key6": "4vGc2eGf95r5yXur5eCpsaywYMbZhRPEqkfpB22mFd5b9uNs6SGZoe3uHK9rjngoXGLEwQyTC44ZDwXcerzN1ZBz",
  "key7": "3Xu51Y6A54bBUmQ4zJdQkDf6oHhCxaxxgMyrMdEHzdyk99ibjCavMfrkeEdhdkyXwWBAHtsq9zioUn7bn7Lgm6nn",
  "key8": "2Xv9nptDiyAGwwEg9fsxyFCdyTVqrWzPeACb28vZqBRmK6C4GnmZp9ccjFvoTck63kSDeekWXRfNhqXcSAjcMs8",
  "key9": "JPDsbSnaf81N1UR5cMqUWKSkkjQUqfRp1NoSqXUmGwMrrPD5wfbAK2q6BrbdmFXxMngukouFDowfNYJFJ4dSrzg",
  "key10": "2CxABrjtpnNWvjotwLMmT6jW6GTtAsTKceEV4opfDBva1vMBD6mq3mpJH5yNV7FGYz7BVDRLWv7PXggYDLSDdBJ7",
  "key11": "4Z29BvSCdXisgtFTyvkubYRMeLSkDwmXwgWkBLpoPrGDGxpby2MLSPocWr11GEjoekpzntYMa1n6DLwnavxfTgkj",
  "key12": "2N31rKp8KRLHmtEEXLLdVpPHxodTE8NULvU43AZdmUn4bKAaTHnE36npJNdaEmj76v2fi1Zr4oj45B1xs12K6Bw6",
  "key13": "3rbZjS6mxaryRh7k35HPGSFFDjnVYch5PJZz6gLa2ZPSWjKsh7iCs9bmRCmscr9oQ4UAJF4kc3a78e3eZWT5xVe2",
  "key14": "5wmdE12rivKpRLZWz9UXNbBARSTyr1QGLK2qNCm3FLwHQdKXyNWjekbBwhiS2xnPjk2mbhwvbf9AgAzvGEAUStH",
  "key15": "3fmXpuStJsYPieJwUpHqUPQTJcSArWs6ubmefVuX6JZRww77iaS6JNs1E9b9HwkiHwbN9RGZCqZvRnBNN9AcdPnR",
  "key16": "5L1hCmHFFFRtEarQTjjTUtBoCHRnpPAHi4BtxaimaJWprvfXXKASH7iMa4AvuZnm8KXRyhBq6qPfUvD938gBVLmo",
  "key17": "42AGHfG1s7tb7u5jsfvVeBv7dU3CoctNqMxS8dwtJWevNTF7DgkZpFqqZWup9Ax9hfMDYnXDXxvjPHvV7mY9v2TG",
  "key18": "4oiauXsLfm6JkEobkqG93k4PdQuMqu54Q1HDY8rT19pZaky6nfmeyXPnntxqUgr2hp1hJe3mNGKhgQ7cZZfZHPAT",
  "key19": "5S2hmJs1e7RXU3Ds4YwhfzswQJ58s76Qg5m3Cxbn2CyqerwDWCsLFAgQD8kXCjhbJ1GwJij6xb8ruUU5qm5gogJx",
  "key20": "4NxUeF6NVDTYFj2M664e9tXJErfCLqYM3cVdsbPh1DPay62afF7TAMf9ro3aGCgxG2HSrrAo99tvFusWEVQhb1dh",
  "key21": "pPr4dkotuFa6tzqhNkU5iQWy4kH2e5zjRZ4GmSdeeXRVsrjkfLEjhDRTYSkzmq7uBsT9gAgRJ6m4on84jG7WtFn",
  "key22": "4WTDdLfegFWzWcSJiUoi6d3Byk2b2j6rMEZNWwts7cU7CsLkLrBR7CeYzJRLzFzwvLkS1F3DtwttxvJCGDWMeVSN",
  "key23": "soiq4x1Tx5FDS1jk5cPw9i9nhPq5EzMyByeotU4iE59d6rBir1D1iMgLBtbHeZ9K9gbBpYMgnq1bqt3gzHeh8Fq",
  "key24": "5X4cY2vaGM9DYs8n8Dm33GMw8Q14MnascgL9iv4d37eYEg5fYeNBCAjGQmVkM255HtX9zRTxTwjJseEVNWe2Y4QU",
  "key25": "GQwBg8y2YfVqy4RrggCR8jzpxKgRMcnsv2gYsvbaVBQSbRj6qmZtTp6BA697y1wcWq2xHcB6Bwvg1YWXFQj6iNu",
  "key26": "5jfydw1wNZ4a4BxR1ENeRor3wRxPwv4bijzMeaytgL9ozynvWzVexxXPhAuyHEq4YXEeA5L22QQPcusNzdggtAGK",
  "key27": "uVZXp15pv8rYwwWRrQEFP3oVAvrurADNcj2JBTbhpNfn2u4LfybrqnyrkkZi5gZgHgdwPhXuuJU6kZDyBhUsPvH",
  "key28": "5DBpH5VHhjif1Zqag78mDwZPAaVskgVQz7z7kjVHZBS4Qz8RxZJxeokbK5c8ieVoHLwctJwaRd1NTFesb5PUVVKV",
  "key29": "3xEzHUQXyF3BuFR184U2QpoYqF3qJKWEALdBYBVZptcjR4iyfHebYQ5SCtaJ1yUTJCq6WW17a8Tbcu4HU2VSLJAB",
  "key30": "4JXTLLeDiEvmZEMwbVThkoRnKGRcGqhKz6B6NSyJ9gvtnrmDnP1bm3oDhj3TudKtJzP4JWRKXLsmzE7UspnkaYqx",
  "key31": "d9yxKGaZytLE9GomKDrAZg9WyhmpfoDgEnch1T1d7uWjj3GDodaDuihKj5tSYeL6prF6Y9hxA5o9FB2AJXSd2WU",
  "key32": "2g7JqWatLS89vzUapYgjNx5mmiL4KLqMdhjiF2PJpvKdGz2JyF3JsCJWGN5UJLhtGPCcpTn6yTgWBPPe4TQ1zo7K",
  "key33": "9GLMcuZ3CRRdMRCxnHAE247UAzFbjZuB5UoxkAYgGrpjscB6cESssDprorZuiF2WBzAemSQNrEg2R1tz45md7UN",
  "key34": "3PhHLrRqMWZpPFfLqYK1Qsxqqf8vA8HFh3XVWQCspTHooPe4kV3KVSQtNdAKJWF2NTc4ZdCFBkH1uzbTvpFEj73e",
  "key35": "2iHgtpqSpZsKXwXh2taNKXCxpJdkQBNq2fx2bWxjPVFCNA54js72dnggmsSGHbkHyscSqHCzxBs2oxL5vejiFo6C",
  "key36": "3ZqhhSQkG3LGo6bc8VQ1pX6GwFnFE829qPS6ruYVdYNVU9W37SPrw75rxEfxoZZsT9PkBuyXkYEx9XQMujASusVR",
  "key37": "zQUEwZfca9PhKz4dvDdr7LgnCJqS3Kt5Jf5EiqUsDuW8FTDnos5LpbzYntHpYt23TPj3Vn9VEWVAAqV8ub55WV3",
  "key38": "kbXY9J5okS44Dq2ppKx2E1FopYXtJ8zScAKo4EfUbLVY7f8CsxFBZ3mtQbj94p8NSJadTUvtf1KPN37SSQa5KYy",
  "key39": "tMY5ZDJc6172LHYaiUFweDXqxV688Ch6xgHGByqYBjF5YoAFxSWda7uWkTFK8ck3aDmv96zecicR8pUrSvDcrW8",
  "key40": "43LPqacKZ42SeMpZs8BW3Uzkc4MkTJzWGM2JvQ6sk6mjCG5T6eUStSX8kiZCMYSPxPgGNjhHhsu9i5vqsD74DKwe",
  "key41": "4Titvj3P91nHUUXQS8Ym7mXg7PeA3XKbW1GsVGpaGpTUyLoWJYUJMfST3cTsjAax1aNGCaMAA9v2xSkbLQyd7zgP",
  "key42": "hi6yaFniWgociV8EK1UmhNE71eoxqxeLPKQ2bDefFhcy9E39QcnjEzLJS6DTihTGcWYy6zDiHNHRLg71sbtwnre",
  "key43": "zwAvtpEd1Xm6DCp9goF6pi9AwbE3RZp1CDf6FrCPddpB2m9HFUw8SQctwsjodT8VdVzep9V4NVvwaQbRNV1gVcC",
  "key44": "HRTZ1rgJcAQLFNgDZW9rZCao2Vq1QPJZUynw2Ptjz6zcktFcj1PgtVYuhKkzfMV5HHEBJ5ujsZW9EDSey9nYCwt",
  "key45": "5ToTdxTzHQSeRrybn32KvD1oCigYW6xanFz8MaijWukYphg13PsyPjnoQz7bjwrF3tDJkXhk1dENy2sbSL4KjNNL",
  "key46": "8HXPyKPo8YzR88v5i48FTQYDguNVfM8QYwa3w2oaDiF3zSYHNfTuvXkcuomb6gKAVRJuFWn7vsBgVNFEHAebeBm"
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
