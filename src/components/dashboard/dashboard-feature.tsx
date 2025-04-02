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
    "U3rYnPdY8tnMbGDy6ToS9b7xPL2kK2dckeMwYqWAqL49pSmGbYPQ2B1Mnxupdw9UAZZHCRFbMPeMiZi48jsuD2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyFy9pgLTDy7B1VAQtFzEAmHv133oWimN68ipjQYmw43fzbMhCoYEXVcExYAQL3DZd3T48JCS3yjN5Q2m5obu5V",
  "key1": "3pUNHeVG8pJoRkTq7E5qrJ1H8ETDQXL61iG26C2gipGgrM3vCbJNAt1o3cLfkgXuxvPVWWwau8ewfXsKFKetFHuw",
  "key2": "SRh1cP3vCG7CrEjw4tWppp4AsebKsa5RLxwNiUHHQkXnoq99iXcTdRh8sLaimwqbB4xgjBoFuxWcjVmvKScGYpE",
  "key3": "51Za28q22cJqLHC7WGapzxJMQARWeh1m4mFqvi58REDRK2PgqBvxmusZkt7aAX4Y3nUTbonXxreCqfrAXAMRYqMT",
  "key4": "2GrxsDBC9SePbqov2SYwVwG7CPiHJkN1ZdMRugad9ScsgeGmqNvYK5BLtuq7z5ttpkBbEGJVmfxLjWjrzyyzNv8H",
  "key5": "63hxzgJcztywBg5mx49JFZk4uFUHEhx5T5wn9kxqAasqn6SYviRark7xSxk5wGQRKcNoYguAwrxA1dLTd9uX8Sbv",
  "key6": "53EYjKhubgAkTDEeoFD57sJCf5ocLAuvYMZA5NAVNmyTedmCqFkPSSrGf1bL3HD68qLdeQWxDAYfZiU2fggmwoS2",
  "key7": "2LurUZYn7TdYRqUbxMfgmwvxNnu1cRLPnEdEaZJYzb1dpS4cFQ4VD4oSzjaLSW4P6ognpLDN11YU9DMe7dkiwJXL",
  "key8": "3QSyvur95p8d8wr2MB9F8foyit2e14bMhG1FnLcEMfPrUV7ndPmEzyBx5mCqnuV5nFkfZBkA8QGCyp3qk6pQeASZ",
  "key9": "69e4LRBQWvcvyHXRinAZucSi21CwQysfPXAw2NGFH8ixNu5aRggPwTVCGcYA3ge1fXdv3rJUzn93fP9VqQ8ARc8",
  "key10": "22GhuSbrahVNWYYGa5KNWUFz1QLMbqX6h4WroYDRtg4AdnDDpsWeRvmZR2jj4o1cD8QkEH77QkDd1bhsfwis3HyN",
  "key11": "5LHvgnp9yT133UtXniDarf1kAs2aZDzFcVaMXyxQGw1uGfSAd7zQ7KED45yocjo72ZZx2LCogyNAWXP5NvZij2iK",
  "key12": "4a9bmuZRbLDnJk5rzS8tzLoKvXWFM51LuuaMa6rQJjZhmVtxsBmxnwzkXxjAnwNruj3kUv7BHGZ4uKWDcDmLhgrL",
  "key13": "2Afe3hYd1wUJpXGmLXRRrRrW4KDjfxiUexV9L1sXsPazbj5wBcmS6SRt5xfYb3yL8ZEzGMQPdXtQoeK7a9As3yzw",
  "key14": "2exaJEADQuaioDqr4Ev4U1Nr6hRt8HNcwBTPV2veBuY1CvR5gLySBjtXDKtWnegeH2DdxHmu39G62PFyVss3RXHg",
  "key15": "fsHhNBxsL8j66XVmhYKZF9ZjwcMYYH3iPsQwKcb2y3vCr1jvfhB6wFJzzJSR3fkDDHbgiSQqVy2qMFFuxFVAn7L",
  "key16": "6HrCoX2SCm2F4MhJaPi82V2MBNmskTz7AxKUpCaLkFGevXjuUesig8yrmy36YfQg9iiZs3wra1wZov5Nxn6wcAq",
  "key17": "4AS234qi2iLFMjg9hSFoVF2YhSyAwH7X6TRtmf1pkTchJKSakbg4uMMT5ASEvxxafqw9ovUUzqrYpfcePxturkmq",
  "key18": "9Uj5pX9wWA5Fwqjk1RoCFqzxQWwYqDFV7xJj3hQuZdSRNNPuaimNZT5shZZkgErJPDjh4Gpm5ZFajokU91huSgc",
  "key19": "cGKfBDFNQiSd5ayCFaQmhKu1Aiqe3PD7XUwhbxSHfGCfaRQTHaPorVU3yeo4JqAyVd27HtYgvPfeF5nngcThCBQ",
  "key20": "kjFy5mLEFNYMMZr3JGzq9hg4REHwLvYNxdKf3r6DueFUgANT7JAnC1k54yzfyeDwd9uKUsmG5DgW1eK2RKVpg4h",
  "key21": "BGHxPmNLyo7AhbLvSttFepwaeME293Gx1Kra5unhRM6wSnZ6KuqAEB1PRqBiWDBdDPtPnz1FEP8i5hKh3iJiXWn",
  "key22": "2qAWCmw9eS8gcUbphj13UVfoU1XypZYuPeENX7rWPxV4BBu8NYMpsD5VPsBZA8q9Q8wDxY97AbzAwxxyY8ZrugnP",
  "key23": "wqdPbpQG2MHVZNyYZrF3qHtPNA1iP174ALyzGkgnRBrXTRKFkq7k8M4ei9F3zFfFq1XhEQrBq1Tmw1WHiuYSFse",
  "key24": "aoGHtHF65gutSUrC8LtoDX2UGSFQn6NehM1CXk9GgvM6sbSECRzbbVRGmziG3N7mNQagqLgdXTfTLGimSUcESj7",
  "key25": "2XDQAg1FhFigyWyXszc3XYfbd6qAsxTFGt8tBB25yEVQ6YdWABPyYsq9CwNPaiNTWjwYwpvGYhqJ4suM6RvrKtdu",
  "key26": "61gAuNoDe5rvdmwJrYSgKbiz8mgotfxZ8w2oQbFwTAzHEK4LBbgpUE1ApKrfZ39PgYKiXYGgMENTXBZ5p2FPyDra",
  "key27": "5Ts55L2cFuAQzfMjvu3swLD1kW3PBBqB3AJJbC3nr7zdEQnz7DG2cuJYnHnbzHD3eJs2ZwhB5EWFEjQygxkn8s4g",
  "key28": "5fp7jcwUn9DQuSfEBWkrSzLN8qUrzyiaQVR19mY5nvANhg1riQQwrPAL4GzqU6DvCuBohcAStjokTNrNyajQcAYj",
  "key29": "3ji1nt255gBFhRkmLusZGvKXDfKTp8QHxyXnUsdWT9cGRTjFUnaBeuNzz8demMPczjQ56uEsPRs38nR1mskE7yD6",
  "key30": "475GAj5gmPrx1iaCZR26GBLsoxFPSgCHWbNKi7teeH4yQhLZ2BbrY3LGdA18AP4N2buTTEeFDVEZR7UxDq1YeiVt",
  "key31": "3cRLidubLZAditi7SQGqHoNsyFUJQPf8owB4TUFxGkB2Tpi6Di6v3CnkigxLqXZR8Z1zaF5TZTbLpVbrny1JitKh",
  "key32": "ZLamKPJc4S6sGtxFwXPKGgruPR4S31R9WEYtk9SXszrkxrjDBaY9JnR1NJiCQgZxQq9oh3BV1KLeZ51tCAiPpUY",
  "key33": "QKJR8eSXZsmr1MvSUyerh68S5GxpX8iFVareWJ3x2J8bJzAYxSBbfuv8zRranhDNTDi8GHE2CbZGwtwU1Hhz8Ur",
  "key34": "3en1s4M1mmq8igV7YVEPbVhFbdxfsm3HqY2qWHG5ja97UJiNF43vYxdjQjPgY7Ebb41zZhK6y2ubhEJTjufJpbCj",
  "key35": "2ZUarLZ2UZQ1yp2o392Kqg175tkR3uNpNnhkCifp4QETQFWM15n3xU5kZJ8Rhx1iNA2Bc9tF4APcKDYfw7kmvY5o",
  "key36": "4JZwp9WL3ZkFvm2a4ZNAvjU5U4ak4T8dbF9wZR3CVyFm4jVM7WZVwGrYrZ5phYds1fqqDSojinz5ihpdyQyVkjcg",
  "key37": "64fnv5TkgBGQjQXjjsEyCsfJ1MyaRRbk5EPLxE5eyoq94d5nWfEcZnjD2Pyun7jrBzr6A6eNngzPHJMjb3R2Ec1b",
  "key38": "4N6xys8dKBqvr8fFREk8qu8yzeyUf8by6NPVhfjUzJhTZvd5SJNYWukvKx7D4SvRDdhwtmmgegUj4uwtWvXdydyF",
  "key39": "4mv6bXjVk25mmFGFKbgYVADxsVTHkzqTcKLpYphvuX3kFoiWKuCV6H2g1mQxcEyXcNDnt3H69hQJUNs1wkLFuveG",
  "key40": "2mPBGPjVfVohdQ2bqrBbut1V3hzhYC2SV3dy89X1bXxEDN4rT9Cakdc6VTHGFM3BYNDndMN5KG2tpSXjJ7BP8a4J",
  "key41": "4j2jub2z3qKus4DkawZQcGs22oPLXVnMn4dRq5Rnz8R19waHCdzVZKwk9jTWe1kDtHLJmHSvH5KuybnLkhvmGHck",
  "key42": "dGyypj6FKUKrtJcqdL4RTzV4stRpSJwBFT75LXXcq84sYivA9LjKvT2aTFm4VgwxRCE8YjGzJCEjBd6DQ1aFRwz",
  "key43": "3LvmVD6hp4BMnV33QMFmikNZctNQkUy7c8DPEggMVyDetS98pjFghoyBudPqQp3KbdW4vsoFaTpqZ8HnpcUXZkBA",
  "key44": "4ZEoFLmubkhcHtK3QU9QDeoZWVXEmBYkJNGj4mWwNkYJmVp5q2TCKjqJN9zNjQbPYmvW39BtQhgrxi7gQ5AcfxiS"
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
