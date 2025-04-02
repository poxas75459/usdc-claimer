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
    "22ZLQ9U9Auq5i5KG2sFLbZRqbpsxojt2BMvePJvDMNzBUdCAC2nPQ1waegqC8ZTvA1nRJQgnvan3x6LbDcnPCFai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xe8HKNL4fRNquHDb2XtESAzegvkgjKjFTWsTvzKsHi5sUqBuLnLfFt3NUfjT9WMfUsLrQGDqbckVHQk1zyqkmo8",
  "key1": "47PikiMvsWTsVC8x9LVX2hZbnyBzwiU6BxK5Lq3ZaqPxYENJQuhhj9Pa54QMH1FcLAMnxKhXtrFphsDikT7u6k99",
  "key2": "4pTb9eEkXBZNEvYDaJHksWimyzVpbRNSE4t25LzHBnSkzA89FigDWuzRHo27KxkB9YLikMYmbv7YhBA8FEYkzfip",
  "key3": "2saYdDnw8r9PYzySzBzKsPUTHXPG7VKoafmNWaynZfCzFH6jPcdN6rVAv8AWhC6fLce9EB7mSj9LUYRNkAkrjcBw",
  "key4": "3C1iQ5cYBkdsLfeJMhTY87dHASzqUUZQzFXaXAoEWgMSRhaLN8F3EL9p25JtsR94gnuXbU7wYGFdom7PsqLeQW3A",
  "key5": "2GZATxUdtxJAudPvK4Xyangdq9Hw4YghmBFfRMra9BZ7vpkHwMxbA7aQhMyTVvJjxL3af1LWPQf7LZKzDsR7w8Tp",
  "key6": "G581tedYa6hbPctKGuugD8mzZa4wR2qfJ7FwEZjpVRLsyHWfNm2Mm8Ko6QfHNHnRQ2gNMRQWaJVWoCgZWkfGof7",
  "key7": "25GYLBUePGV2UogXxhFPdxRCWRYHykBQPFPMLSuir4karnfq4zow3beH88PR3iGEvE4PWgNPwd7JveqFfiLoSVrL",
  "key8": "4PbpearUXQd8ZmvJsfxRirEwQDRPCJY1S7NQpP36Xmc2oQQ5WNX9iVujXsWN7idYv4VmK7NAoEJHPDbBdrZmr1mu",
  "key9": "2zaQSz88ofxUd8wuctnTgNvSqbH84WU199Mb2VfGiJ4PFQ6FxChj6vd3XeK3faC45kWQkwUgjVW81ShWneGV8yRA",
  "key10": "2DXj8rhPiAX1t6YwNFFLqcK6gt51doRJxQ7D4Wi7ijAnfYC1SQT5ugTeQxe1WjZuGQ52r85FxLzEVrArNksUxGrC",
  "key11": "vV4vFboiZqbUUR9wdrG8Dnn1E7wYfkRGdMA1qzRTakDUYGwUa45bmEjsWreZ7TjG9ev1C19jHyN7bCjgsqfspRd",
  "key12": "4gm5QCWVJxZVPT7Ltp6rRhUu4qCnnwnhKUPwDtN5LCqcR6hjuw9CWUvfPrF2Y8Yt9nHKtRyfvb4t78oHz8NZn2e9",
  "key13": "4W8Nvm5Periujj6xkejQi8NNaYGp7w3PPxy8f5UDeQH6ZkozsqJ8yJ8is6aTozV2oUr6x5yMAUBcaDWwZdddbpaq",
  "key14": "5ANdeGGyGYJDGZnvrmzVoC9JE1Wbmaq6R5ZyEmdr5MUb8L8Ez9DqhUgbv3YTgaEyzsgXBTMqm5qXC6RXsf5i9Up4",
  "key15": "ewYLqcPFD5fNfhnLzMBvdq3NGUXtRtxz67BmmqAbwisxTK8wX15EQQaHEskmbkb6HANkBTxRqrr9xpcoAP8b9pb",
  "key16": "2YyT9oSDw7j6SLXSqVsyGswQYdM15coVmKAbti1wndAcwZfhooyqchdqyof9dQUdrq7SWUVS5yDmkudyk1BPNr6G",
  "key17": "4Qv132fBm5XqyzFFTqMvte9MGkj1vYSLGnphpGBCyn6Y1sXyNd1Q9QdnctrnLopk7QAdYHzw2HJx5sasRBaVkUWm",
  "key18": "5abLF9DzudwSWzsuUxoxeUAU3cpat1LWYPSH1h4thoWaQgaJC5Cs84fveeyhWMjRREJEnkqFjpzV2XbctYwxmqra",
  "key19": "vrYx7hEFDxgefuUPNuF81LpMwUC2naEnzZQHNaa9eW1jBSEBUFVxqDyQ35LZa85m4fiweN1MuYAtdCbSrz5xWy1",
  "key20": "4hFPV721MjQLKYosXNTJuLxebiuJAJw2PmiRZuX2MpXQLG8WP6rwJMHp8EBz2j7D2UqTrH51F7U1bN8h7nYC75ku",
  "key21": "x7pc7Nxp9CFD11sZc92scNyXBvVgKeQ611N6nwU6Kf5hYZ5mZeLLnPAMHzrqXL7nUmV9fL47e7T4sNFyCqavsu6",
  "key22": "2cGruSEsAEA6q8nnJvZVHP86JmGFptbgRe2wAPNWe4S6mgLodC8bs6ooQFSRQdhiKfcs8SficYG4rgstrgwzUcXH",
  "key23": "3ir9PdjM43w4EBSvBq3bRdAsWu5ChJSx17g4WBc3e6GLRQQ58tnRAuXMw5bfV8YB2ZyBvwEMFunNRptoD43G5Lda",
  "key24": "3u33wnBUrGA31PFWuDLz45NQm9EWs7eSiuVhpfU4FpW3ixxbEq5Pm6MrVuJzfVZBzhsetELwTREUEqUD1t4kysVc",
  "key25": "4FgjtLkLGAuWDgGasvVwDZLyNZoZC5Sx3zsDETWzkzJeQGJ5Tx3s4JFxyKvyTdEdQ2Qp5sh1N5GCeFFxnnoxATD6",
  "key26": "5yfGtXFxtcjGBQXjG7KhuQu8Sc7Kj1czThoNHZSVyqrWoaR41EmSqWEo7cUBM21TeQXFcGB5WLvyJm4JT1ih9DoU",
  "key27": "5xcrWzay7pBKLGFD4UXjzDRjEiWFgfBNQykhfbsBRUxyFLYnHBr6dnskRUvGKPoyn5WUqepXtNwAGYDjjkYcNLtK",
  "key28": "4MfH57MPBbZ6hBQNYWt1A6rnJE6xkwFRuzt84fuL47UwJpc9Qti1A2KgBkfyp4JEiDjdoWTZtHMg8Sbf8mxTwRwK",
  "key29": "64t4Nkwp4gHN52C6mvJbs59egLd1FeELPW7m7apBpB9AfmsH3uZFayaK3N4b5G13ESa1qpSwMoJVXhvmpjP3njcx",
  "key30": "5oTFoAJpqRJ7yx9umSz7sDFVjs4zURvzMD1DW1AfU4q4xfRo2q1HqZvZKVnKY3oaPKr4JtGv198tDyZ7LDZ5W7hx",
  "key31": "35CQFuWzuNLJFUJW7ZBVfbHGvQGGFH21ZjLcdkvG4JUS76FcZM3XHVYyaAdo7Fq4qYemdJ5T6y9XubxGx5VDUgL9"
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
