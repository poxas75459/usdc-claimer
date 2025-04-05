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
    "5FCtA2QUZWzFcFXtjTRTRtFs2PfEPLYm5tAU3anSB4g9oHRFFP8aWwSiZLm7N7E8Q9YS5s4P6zEX37nUeQbnWiHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jz6mp1RhHTGz7FrDMWXFh8KhpgmWBDvehnjxuMp8VBKFxGGupx21DnYa1HLKQEHNhLo4ZXsuaFSLptQ32sHc8gH",
  "key1": "fjfbzqBbqZw2Hwy8fzR64itwJHz3BZ4aBMmY6bLwkF8RstmhiWr4WKviyMrcie9kivFjRo4opLMkNGhBq9FcV6o",
  "key2": "o6fqY3mcdYEXibs2ya2Hjk9pehnMBhAD9STCS66dyTycZAj76V3SHc4gZrLMXEWbg5sTvKKWzieLtSWwdALg8CE",
  "key3": "5CXrDedDXvUnZ6N1tWaen1KDHeEbEThFPhbmn3a7oY1sBzsUd8BnRDiBo16At86Wj1LnGFeeBGBLSWTjXtbdW8Mk",
  "key4": "4mBxRnnoPX8XmmU3TAh9RUvLyy6qJ3G6RCxBoSt8beAJhwzQbZxw7YoCGP699s41NgttGmDX9G1rvUbshc4SbD7C",
  "key5": "3TH65C4ksSxkohnnh9t5ps6rYx5D7rk4Nsqd9ihuzHhJeeyuMcyvYM35dAUMfYXeqCXduK5xc1nWjBSHcNrpikZz",
  "key6": "3R6atSesG5UbT6EKrykkroVxAiFzBdXHvcoh1okGkf5sr27M46MLdoH2t4ruymgHYv9abp61nYxpztcHuxfKXQhy",
  "key7": "44PQdrFud4zKjQtgt763yKFV3F3biWHhQHG3AyTge8cwHgmbBhjtpdxjtjZ77H36qtMkuMquGNWMmK4wPoMnVsje",
  "key8": "5447hVUmWZ4DTQa1rWq4j2QdkE2hWmauHs6U8aeaGBXYUcddB87FEPPq1CswkwYNxF92QrdjumNvdmsjwCTu937R",
  "key9": "5MBie6iafky2fXMuMH3ot34g7rWHn41mzS7KPC8ZcGx7qYtHmcZ53d5KUcEd4XnvqM7tC3ewc5sShDXy3q7ViBkS",
  "key10": "5J6r8sWVyx58UvoKgCrz6Fgcik7b7asCwNkmjertpZNCJFC6PRYxRBBGXFmbxHDRGYymYsCoSESumoxMNkaKb2s9",
  "key11": "B7T45SfcAiNpxeaJCQ8t8WeRS5BnAwcxQy3ivSq7YN5ni2efPACMdzdNfd2m86PddFWzY96cJhFr4Fk2sk37MEk",
  "key12": "1c5KqVVHmBUugW3uSCg6kseQVgdyC3bRT8XfDVGSkVhes2gEkvf7WghsugHwn4T6eGgdsAJPinGvLYhE6rexr8n",
  "key13": "4i7cpAj7bR3XUb6kA9xzQAxEW3SXVopJ98xELZt8hLaKqgV9iPnpNi1Y2P3T3kikrtqYk6WKNJfRYsu3FpUp6HPj",
  "key14": "3zKhFywMpHkux94kqRQ1BWBZE3pzMeu9ReaUm5T18eKv3h52FE9Q9zCUJupN5hTrXSYiJoBKC1WyD2EiaNk1v2Kp",
  "key15": "WFzyEbcapesGwEKGLKq2ug3keB1pf2qWLGx7eMyHJ9bZTX8MDDT6SiuuZMXtd6qSroi7hXNcGKJfzdv6Cn5MLKk",
  "key16": "5ZNWD1Nx7R4CznJBiwSaLKdhtwEdqnxRVEmtRuV28uq2FYq8uanwR5HEb82GnAe3fqEmEDPxWn8cBVFwHv1SrimE",
  "key17": "53s5uhgkLDmrcqJtJrr7NNScgdRNpp6XY6edM7YdMLApKE2ZF3d21N4JMSuyMP18zbWkPWDVoTYN9bPUAZkXnjyh",
  "key18": "2K4uX3HykoWCJDpEFUCqXbmCdn59MioDrKDMS5eo8YuZUnk6ziryRADtNKviaDvQ8YbcTegLbzyGrqWyGR8Jk8AF",
  "key19": "4pNBipe812TuJgWpkEEUbCSrFLcCeiDDfkoSdmzgfNL2AK1FiPDtuHbvPp6mSwQttVHetLCjUxobe4kzvdnBFhys",
  "key20": "5xSVzDAMQLDwg4LhExhSTTf75b2wgmLCs8Soi8Q1XaSbSUUVAX2u1PrSWborLw2aFrZsVkNDXyhcMs9hhFJHtwmW",
  "key21": "mEPgMQFqr8s8XeKw7UxcKSNpbbkbzWD8ZickftK5cVzmHjJaoXDu4V6JEJprjJbDYWosxREP97zGW6m1disSK3y",
  "key22": "5mQ1UyrFULczpLWv2vncUiRqZbSfJuQop1Yywwuihp9Bu8oUHty9dbqwikGpLUt1ScWdXVUjrzaboMKtr8L9zPkg",
  "key23": "qSn7sDdMiV5evg4X8TUyRDx2aMvF9st5tave37BHCii6fsdy3ZzavMg2tTFzQu2TyoViEPSmB246b5NncxFniro",
  "key24": "wHVHpH6iRLjyKNuAnq2zv1r3iDpy6vvL4LWsAos74677igfzGCtoqoZXCQvJkHfvNA4MputAuDFUnPRdHjRbPPx",
  "key25": "4aF7GZY4dLy13VgpTKzEWyR6pNUZkfKY39vofowuP5tmicyXTiPgqunZiRveFo1xZinruvc73Xi7kPNa6JzaSHgN"
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
