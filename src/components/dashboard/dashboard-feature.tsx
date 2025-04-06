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
    "5j4PBdD6znDifcYuEfiJRMkJcT8at6NHh3yScMRZ6kmepN8RYkuj9KWgSfTQa5MZAbDkBaDvDZYpLjgdVeNVGstm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtVAanFR86z5K4B4CePumDgQikpWRUEXB264k3JmXCRV7pZBu891s8KZf8jmSnoXUWS5b6SYT7MbBiidRJue8mw",
  "key1": "3HMRgL9Gq3eXPAKiK2vtAisH7YZ5Gxcs4S2dCzDzXrmeM3eNWNV3so59kAs9MF7o5KBzkmqWDKoaemJNQCkZrGFb",
  "key2": "3Vw2oDRrBycb6eBJiCwBZzjJwUZTxxkSacHS4VXUWrXTzA6HyQA1ZbXxigXeMMUeVBqTtYSp9u1JUJHkwakzTMXr",
  "key3": "5Yf9QoyqpdNWG9Ka6EC82qmpGHnwLt73J3m8muG3wd7JoiR1eEcGvFkcFHJo7gezwNHvcug6VgV8z5PVMJngWjRc",
  "key4": "3R5PhBH46sfA4fzRJfi4RsPTxHZ3fuUud3tXoEGXuqD8AaUkT2pi51YCxyq6UhprnymknyeSRUGgvY1uuawwZ4PL",
  "key5": "3bZmiBknJQXfcEMFQg3GiHd2trXq1JMpBsXebUiMjRJMcWrrDwvATkViyAAJ9ot7rpjzXPoVondSKTTex1aZ5RaP",
  "key6": "5FN3hZWNGRhzonUVn7yRCnSkuBxe7SiDnXt9vArkQRa7gpdprFKBfgMvcNdTFFsAYFnzPUMmvt9hWvwfBG1RT6tf",
  "key7": "2XB3C1mhxpCUDoqxxNaXqbuXJmfSRQ5Tz51TUwF771xZGt1yt4McVe9jrUSRsQFYSeRCztHto6HB7x2BqtwxcL8J",
  "key8": "7WC6regH3XjwUzED9KaVxMaxpagrNXJ7zqHzkBmAgaMZiP7RirbTCdk4pQqS4yutijkoJgjKRU8RzwtHxGXYDwF",
  "key9": "27K6bJF5dyKDP42iJTqzZhJ7ibKdRSR5iJsSPJGuDnUkdCLEqDb7obLt1aDmRBADXbRCiBrYfLgiVQ4mRizTzZiG",
  "key10": "2xsLNiL14HBTPxws9iivmeoKxF9eKRE15MtjGwM5GinAs78m14aH2s9sEq2yGg7PoQkMxykkKVJp4k455ps8hP6h",
  "key11": "2muD7fLAsQTap5tqn5GHJLDTs1uV17UppLQvZx68XgUGfKoEfXgy22CVc45BBDnWTr5rqgpACnTVTz6B91PHRiEQ",
  "key12": "47tGwZJGPPQkYoSBbXZRV1nGwLFVUzafF2ffnvwMdo9zkCikwdz2mZQCNbQppT3xT9AVZoWiRz3ovASjVVVwcSCn",
  "key13": "R8AeUc3p2bRzUVioHaZ9jX2fYfLDS7oUEM3TW6ikHVD6FfBk9jE85dk8y9UDaCscTLExAxvrLKVGrDzMeBNFuLW",
  "key14": "fAgfrkqZCYZtuDVvDGzRThtQBUK69DXBG3oDXKHUvroJc2BExW8AA2qahAciVmRoRRA6Mh6EdpXzTGLvsdWHpcE",
  "key15": "4xLoQ3YZDsm5utDgSFv6RTo6HmLMjZ7dGZoPX89BGtC4WJuH7u8dbSq839QEP4grMVmr979zsrFbhUGYB5izpSAm",
  "key16": "56D68mXYwHD1YBjLM9gndnz3RDc55ccQAPXCLvVHABwD6GK89ysaEzvk6FLXMdbVSQv54EDe1p28QXTvKu7aGjc8",
  "key17": "3TQTSmLWjC4QzBjoRBF6cCXskn3Nh1rjUrx89XHn9xkkc8qWiBJeACvZg5etQoKU3tx7coFq4WTgtspjhTSN8KDP",
  "key18": "QPqCMH9PiaxkXUvyiWUDnzY1Zcgqzs1RH7rasKtBDKWd2M2jNaP95Pa2nX3Av12ZVJbAsVZYvVyksJwpTV7UQ5U",
  "key19": "2zwJJnRpjcq4x5LoS7GXMxakMzgXCFiyE2YHSJWwMFQ8zhZxUqBowdoxWkVJeTuHNoqomsxLqZJ6PzmsbZ8k81eh",
  "key20": "2ydouiLRiMWBDkVGL9RM9fpmjbFRk72Vvg3t6aiXWpitiJeVtrx2SsSSqASry5TEPTVGUyUrwkgKhyNEtwF3NjS4",
  "key21": "6191FueNRsYceKaHzATX1STk5GRd6j4Ky9DgG9ZRxTJ5tiPy9LhoTz8TvDzqb3f4mMxeg5VmhVxSCAzrZFK9BTxw",
  "key22": "p9t2oYoTJ76fp1hMZxJhjPKj5i7VF1j5BXDGhZWm7PcEod947RdK4GjutQ4xs2ctnYTakELuhc7NniEp2RwixnA",
  "key23": "51NFXoQc4BTd4VNWWa8EeZAZYepNbZs8NMYpZ49JKRLNkkr8YDhAgRe3UpwgPVqTBgkYi7bEVHyxoPNL6FZ9qJCY",
  "key24": "2EUDB7Hw1u5ern81vD5VNqFK64MbhRfHdCoipEaaWiQC7E7wtGWd1iyCVLqDYe3MWfTrpMcTp1wD8CKb8BCq9UhD",
  "key25": "jFtrMHbzrfUFQA8KiJ3WBGc3qyTTdgcWvQpUDjXFkmMV4unehnU1j8cNyssTQMMFXMaVgopwRshEFBxKfS4zELR",
  "key26": "4j2TVaArjJv1w2KjoWARzn8wEqDakgamEobBhjdZF9vp31pUf1zyGACbQAMANACfTKwJbw3xFik19HmXw9g6GzJm",
  "key27": "3Pi4WJQnG7MRouevW3AqsirjnxDHdMAzgJNZVgApAebjAnWDKkvWopXvaAxpyakQchxPNLsqLoMQftt27E3T46eE",
  "key28": "5sKVbYRMxvbNpfonYcrk4px4B5Kx7ZCAcJJPsvJPxWcicZoEVKHf3H7s8HbAdkjWD2va8VgX1b2g1Xa3w6Tk8QC7",
  "key29": "5sdpMmtZqCza5cHKCnaa2yF1ZCYTRVisp4aeSkyWgiUEnJdu3gxfMNAv1TNfMLjEZKtgCTpEtUPGrRPNtVKRAdbC",
  "key30": "5wVHuxyAuefszXqwkU1AU2eDssWDBoDbthZJCHjWVMMdaVz2h9wfL1KVUXMk2gAWvu3nWZJHHBGFBnMnBBFQjtfB",
  "key31": "5fASd8snEHePUikCgXseafxLfgrTdoa4LNcdScTeJcUEwbYa3ZLSh5vQRKzt9ZU65bikUW8CYcssTKPoCa7NHzoJ",
  "key32": "tFeVyvHnkgQ1stS2NNUhC8FNA1EDG1URjKLLVhvKVpYNyMWn9TFLhR4xGjcDaksVENjCAYZ26nqduiWzYbz6roT",
  "key33": "3t51G7jko4kDQjKuYrXzLXjNjAwV4R4ZzHkaJNtodbRLUAMBEjf6eJ2HbWKS7gFPejzDth2SDJQPLN1tygWigY9g",
  "key34": "4JkugoQ7opprcMndkWeqVWwWeMaNTzNod875pQQwq5AgKgQPdsG2s3UTU3U72Z5wPwEmCVKSzWQRW46UxEA3T9hQ",
  "key35": "5EfpfSFcYwTNNeVmMYYsRS1nfESJm32bDs3KyuDvDYo31nh68zbznQPDH9UyRnEhxW61bDMaasNewPyRKvD3LWgb"
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
