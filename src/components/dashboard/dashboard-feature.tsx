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
    "54azjkK6pRPS6gzWwVfR1nYPs3wKCEkpD6rnri35qV5Z6Yt29CEY5e1JnWSgU6CPxcpQZhRFFm73ABjrZJ1Tzsad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caTvvuMUkS5MFW7gwykcPeFXRasscNywcUnefuSR6kWPhGenTX2sbwvg4yw8P2hD6E4BnDHU58TeYA6tZjfWgy8",
  "key1": "63vJs4uYdkwjZLvB3wEQrE4JDoZ7CksCzYLLpwzGYsB2vYnRXSDShpBVijVLedieQkGRvKak5fHkWTbg5ZWMuFHn",
  "key2": "4vzuDB3s8jABbfB5gj1eGj4fze2UbWZyZDbBohrsPdfanL5pkcmGoHj18TWok87pJQUcrDRuA5Tu9Uf2RjAm7qNx",
  "key3": "2EK2D1xXUQt5g8vAEyMmps9o2hEMP3kNrZHgiv97LTHYRKjmrjn2Zq2RaZ1X6BTwfPJPsUT62HgnDR1LR6taUGCi",
  "key4": "5gJ3ovJ3chuMEZxzstKJvigqEYTLbiEAC4bpdLyat351qSYxure18rPp8WuBuxkxJhtEroTcii29i7P7tUDo9iYP",
  "key5": "bNH5uphRHRUbNtoV9nkL7A2pztf15nG6fnDM26RvYVnxhfGJcqSJZ5tPWrTouy3g8aJWNB1YnNQbcktqmUTQS3j",
  "key6": "4ootxZD1FBrf6g53yy7hFYpuP9QJdhHKfpccosxoz4JruD3gcraL3A7jb4PH9hwEdHzQeLT26tXcbXxg1jAtuqiJ",
  "key7": "49iVRc6tEUGm8QQ3hjn2turtBb8sqy9iMbqzhrrHhw3ujyKhYyFuPDeEB1f3qwk1reemM1kThpL3fLQvRiNxL6B5",
  "key8": "4b8ob7oSk2pr3iMLKcdQRHY9XMvZFcnFkb8qP8SswWuXSEeQ9WRps3D8UTcYjNaEbv6FkiTAVYzsTzf1rkKAN4Qe",
  "key9": "3cFvKPzefBT7ZBRnWd4yB7zLArZm72jjP6hQMwudyCBjpwheKFPGHyTC1gaApnHbQ6LzJKvnrAAiYG86hyKnjqD2",
  "key10": "2zYuJeSrJSofHoDmFNR2BsHyTuZBZnL12eQvwCgVBg9M6w1PjVf3bHaccoUrhA4bUaoHYk3zxn4zkWxWci4VP7Qk",
  "key11": "sQwU9rx3Y1nguiYZb8agk67V2vnga7RfoV36etkuSJLLkyfGFxCAAvaMh3Xo1tyLnJ2wrs4FhUHCB8kABM1FqdQ",
  "key12": "31GwtCm5BM3Ft9AbRyDQ3TH4sRCrE3FEVHPKWn18v1Fuv9Sv5R5GRBJqJSjZBvVTHbvtoHYfMRDfiZGC5qN5Hn2T",
  "key13": "ErsQH2B6FiPTEAv17DGeH3ocGBV8toECQintscCG1rpnYomGvSN8hG73NFyxSjSidmfA5DnJky3gXyfpE2itAWL",
  "key14": "5e9eAQRLALKnqR6ME29kFaJ1yEddKeuNRJnwiFBF1Vh6L9muhdBACr62fXyEjxMc2A7gxRwstWze1bSvUXMTRvD7",
  "key15": "5SCGWWzRp4QZYXYb8gZBMGxhNLykhFQbYZXNEhHw7cPWC3aDHfJ3oAnFeiJFuZuawuD8mwMHeG8b7rcTs3dPtQgA",
  "key16": "3XcDoSq5RrqowAwYXPZvrBz8415rnUQCbWPuM9ci9rQfxuxsbaufrzVCBVAFxbKg3XQwWrQr3HeD9dB6TBN1WExw",
  "key17": "3EeTVnfLcmmFeijA2bwXGq6iyxCKdRpu3Qq5hA3z7LkAHtWPPoZA42yU4yfJkEhWFao47y8pAAaJdqFA2CRoJ25",
  "key18": "2STig8h5SeD6rMHtbbPPbSwMJ11LTmB2Zccro4CKVY8LymEjV4qd1wrxrww7F9Z9VuB4A5VngfRgUuFnbTfmLtK",
  "key19": "23xyDmCFcpt1frTqaqqhCMunzPevwyAQ6Laj4KAzRNNGdYi5KgJUQWZDprqHPucVrNRvqn3nh2m62y6SxAE2pxh8",
  "key20": "NURNA6EmaXWMHpNj463rWTXGppx1K2WZ5gkJd8oXQAHaGj1XiKSyoRB3KXcQRrvqbkt9W8aFRG6fyTNEvndCFvR",
  "key21": "4oiueNMeRDKoKZ5f2RLSAQThgB2KVFGcrHBrF8UgUAM2CcHUuUmxuvmh9ZG1aJgVUQAzhqKBc6YZCa12iyWEyK5L",
  "key22": "2FZXCXMM8y6kyPSp1njPybBUs8qsX4PvTgy79sTy6StQS6cfUKkyrhSYjZFsns3ffesKsY4CXb9LkpyNLMae91wb",
  "key23": "4dYxTEnqueetQhVgfGTVsZ42oDbwwrCGYcEX7JAmdD5zpjMSm58MMABymNtjpo4NUgmha1kNiTrfiofRs9H2P9nF",
  "key24": "51Sgw7ChXU8ji2i4FjczHs3MFcx7DCcMtthWjox8DTD15tYV55z6uimMMu753qRyeHESjQFrkaA1LYR7vfp9naiF",
  "key25": "X2Dpi5pPD9UcuJhLBhjibEAa9LjEhctiNwdBsq2PLszJwF13wVgj7vEWsztSp4Tt5k84pX2hXnwnbMNg3XrMTTw"
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
