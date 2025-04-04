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
    "5PwcxXXdkhiGhQRu78y4hJDs2hyjMdXK39VKuPxNEQiEDR7JcxC96YbVghfnEfrQ6Ybi8SEsTE8UBTmtSrTVFCPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RwTvaaDDXmFsLNNRyWjtz84VZVi21W6osiLtcaSuWmUvk1C4xgpVWAeXPUiyXndJU4K3dsQtPGDWR7qyQp9R6gj",
  "key1": "4z9rzqGmWhghAPVDsuwdWdFcadTmQaxwroshvDt7Rg4VR45ERaER7btBgf4DU4afx1R6ZHnvTbqZj39MvVWpkc1h",
  "key2": "5WL8gJM3TAVGLJDptztTSVpuDyd2sNFZmgsTrwfnMaRWpUz7M4jjnz5r5xXRayxc4X6s7gTkCcLGiHHSb6YJAAwN",
  "key3": "5eGSrqgYYR61B2QVdL92ud995PVBSdujYaK3Yb5uRfuKFUG2kZMNetDM9YkJyzGrrRPpNNUSqy7cu2SALCNsfFDt",
  "key4": "3nuof54Lur9gVJYsf1mPU4h3D8WQhBP8FfZS9D1hNAt2vS5GwJ4wyXNS7i5DYQu4YCfX3wDToKWZK4vjt613c9tk",
  "key5": "5MPZoDWuiDfKhbrEq49fjwDdjYmipWgUhoSY1zQPezAoLxkUaH47fGbjowiQNpHfvVucNwCMkwwtmRG31yWvwrQr",
  "key6": "3A5ipFqnZwEn2krviQBBtsFm4FBg23bJ4oNArYHaqrpeJrMQwHv7LXbSeahvxbrig7mRtAy4Qi1dBNypDcCZGUre",
  "key7": "57sSgn1GFuqmbZHgGtBygtWz9wws86vv6QTbssutJnUYzBaiWg1CjyhWVRNrjHZGmo3aLmESttA6mQn3HdmtdwNU",
  "key8": "4rnc6kCCdKRxw6gpxbXpQpTWDoLA3dA7bX8HD4S2TruhbSY6RvKfFoGkkGepFtnVxMz9MCQ8gb85aQjsYSMh3AQu",
  "key9": "3P5HcUvUVxL5uaHzenx6atDaBRVPZcZeq7FPuaF4M9JAMEyy4mhKMiwkEECaH9CikhXqQywYDKnLAsxghCZgDvrk",
  "key10": "5y1Xo7o94zgFyhuHDzJyB6NuDpXJUd1VzVtqQGjTx3VrvEfguyfwPo6f9JxbwAhBfokPmaprAt1EmRX5LQFHVZ72",
  "key11": "4RtBUzNidiNrwvDjFYz5cpqP9c9wi4G2JGd9zf63fnzDVvafLKnPFX64tBerbP6L3qsNNnqCS6so2y5dPYpJDJ1n",
  "key12": "4jYrZCjqWULE9Vcxbpgeqw1jPBJHgvQ9eUPhZdpYJTwYJC6HgJpLP68pSEePA1wdV325a9pW8qeW94fUwAsFxPMd",
  "key13": "4PBrZ9QGUhTPouMGduLJfffTuwSCTngwCZzUqqJYUpR4cKmk2FVdMBRsNSnaJJnZabhu5Z39AkwS93c3Dq2WDx8J",
  "key14": "5ESuDiMhEsDMd9H6gwTKu16adGvnbS3FN4SPp4iMCdtjLCejNpMN3FvaFL39yCFkgQo6EjEJjVv5QKyJT6WXuuxP",
  "key15": "5EBnt3T6LRatTUyC7VS5QArxCMaCqMoD3fBqfznbysFiUAeyBsrPM7V9bnJUBLZB94PQLUhN95zc8ZcvygCn7gre",
  "key16": "5ZcfjfyGZJzaAiJTha1PTGpbRgDadpE3JmSyfWGoFsd7tRsNK7T39Y1ofrafW7wTroDr4kAXwfvXbD1rGEL411j4",
  "key17": "64FyfpgHFd2Ldqb67Q6Hxh9qQgyAJ6yGy9MRnjw9yzfu1ro7YDvVFJNj9tL1y6BUSxNiTgeNMbPvN1351zkPGV5t",
  "key18": "63bhKqhejzhA3LDRRhByXPRMuhDDPuZ4VnadkPkbNfXBEuoBWNUJK8XVVMRawjwWDfe9TESQQCMfpkxoT78UTEdE",
  "key19": "QmTtyojSA3RVZvQULAjnNvUbynZa1YTPVPFbFMo7Vd2SFPqqre15uQb5868SCbZC4EDPxzFcrtDjAUf7NkfMZqA",
  "key20": "31ta64HkR9diNezzCNhdbKTEpwV6nY2eWvYrYK1ZrPaDaSKDHQFPi2mVk4iyJT8YkzNs9P83AePLRsWAhDs9u8rS",
  "key21": "3wXYabnY8EJ6BkCsTj6mfWGJmUnFWng2tZ3yfp96r2rzgXURByFnuCiuEHVUPFmfkFNwjzAEjX7XznGtzt7VcG4H",
  "key22": "2w1MdoggesSuou7Va6dCUqnfMwCm6yJWw7HmjEiQihq42mDnWsjdpsLAtTZhVamuUYxnFD1ZnA8f6dRNU69d9beE",
  "key23": "3xBMkgXcF2PZxQv9HyajKEx4CFXHPzt6mbSXbwoFiBJbn9R3W7fPXfhAFs1hJH6F73ukjUxZMQzkknKPS6cQbrZc",
  "key24": "YmvwsBsV3p22Hjprj8HTxA2h6tcSmJajn1m5rfgPTYreWTnrMFeziVCbz4jMps2hUE599XHqUhAeHR1dCnSUDLQ",
  "key25": "3y13mQ2YL3p9UeRAeKszC4ycpmGFY1ppWeVJkCYA1TRcmirgp9dVgBdmsmNnsVsFozsStuz62dE8xYy6Gaq5kuXU",
  "key26": "5Mqpe88AmJKdy8TcWaXsj4ctKgbmfTx2NUht91jpZxqdsJo8hn6i3iTsWwSMbgKCdSioSaBMLsWDc15wrA18jGMA",
  "key27": "49S2G3DHEQ827uY6Mw8hrAT7ytkPPWLBPXutudB9PTHpzVmu5icLVQU8rjqbHtp1stS8Z4sE9CAPjf6KqAC8MHb6",
  "key28": "5BeEV6v6T3rtCTtbGVnAeJyNssXtiSKGdCYyaWGu7GRqazByMuEQJiAUrqRyyTdCkUjCt22KkGbjuQ8RF1iBqsa2",
  "key29": "3NHZMeQHjmPEVb17EfTUf6FLGGT8yELTrKvc5HZBErYKF9kLRY1jDHcV8goRjHxhdy4aWm6828ciXADJQPvAmaTk",
  "key30": "2qsTPfvDirqUtbshkiuTf3Pcc2BXJt6edhvWnTjwEhzXr3668BkjmXZbnWzrG7gVFyTxz9uN79ccsMT38casHupe",
  "key31": "3F7eEPPvHLz7EcPJ6UkC8bFtz2dEmn9xhhMr6Z355m5sxDXq5Xafpegqd4JhfZ5dHoGM1FpZnppzQ1MD7r8jk3RQ",
  "key32": "55RNRDSn9kg1W3XHGUHejoYSNj4ruBAaAnQfueLUi9PN5MHkACmmqhkSTkw3r3KXnwgMNQsDedqiEXNMJj2pQZWP",
  "key33": "4UiT9XzudJZHhsvWypr1owNPPWBs1D8jNkXpb1sCHh4UXsm39uJEnzjhmVxEPhBczfEkQZpu4Hs4d1bFrh9k3Ua6",
  "key34": "5EvRe8xKrj923y7uz7did5zvHUsp8bgK1yz4JpRdFDgMu2Z6LPwKKMAmWBW1Dv9oUWvJYucsmGsZFSKS8xLA1pYW",
  "key35": "4uMfBwhRTLLpK7s3Yg6nUk9MMgJUnYL4thtziTpnYMeUYStHMpP8WKKx36GxvrQsPC3XsDSN4KevkRjVfQZsDkCq",
  "key36": "4o3xdHmJoPheaWsampVPHciKvirdtbLRq6p6mHK9F9mfuKfR5Tyc3rXrgNWHrxjo5nAPooaLKjk3Zj4RX7BjyLnQ",
  "key37": "2c3yFprtx7AQCUjnkUrwnsTWsToMtcu74mjDEtMubhyG7py7YtNyWLkAeBcbvCSZgiKax4r1RYXd16GvEfwHTut",
  "key38": "2Qgddmwm3DP5Hy21Rio68U9VWtUiAHeJ8zCEtCYKaeudDQ3BkYVjDf3mqMdzjBK3YDCj1bubxKakhJBrAZzMCd9z",
  "key39": "3yUk25KCG857jKEE5orw2xfcegR2VrTc1dn6f2CEdQp2eP6tSH85rUTBV3HkBGaxDa6SNpxCzcoPGzhmpRg2TKpF",
  "key40": "2yoYoPZv9p3ek3rxkJeumXPn3QoNsaJRpQZEJLAcbT2bsSSLrYb2zP7uNZhhMqopBvVSKmpJ3xGNsfwB3SztnWUc",
  "key41": "27kuetzPXM34UgXAAdAGQVfgEFRbm1eadYnGVyDwXZXTKsipDHghtm9DN4RND7oob9gD9Yxyx47xnMdk8caJVZAx",
  "key42": "3rZzXRjYV5FZA1TZqvX8HqYYgUqbxaPDQ1Fpwza2ehpWWRLvt5JEg4Vf9kLVYMkixb2pts3QFxyudmQQ3MSFHmoa",
  "key43": "28YPi5rQg8meBHzGF6ehww6pKnSy41x8hgJwvvaKHMRWKZFBMpfMNUu6UnrzFEbQiWPiDAMRxnVrHFV2Z5hCwbxx",
  "key44": "4HtJ5fQkhfdLhuxbhTMtqksf1gZWB6YkDRYTfW43HEt3LqV7Z5kozMdZPuhSPuFZ8pytiqGshyos2tw4KM61YGfZ",
  "key45": "43QdeNRwWRQiyz1faLMBmtxYgGK6jKLuPmBJ4Txz2vRokNfP1uJmTfMYm3LQzyxtEi2mRqTwUv8YCEya3VwrbZmo",
  "key46": "3nCtXmJSQbWDnvuqJYZ8GeKggKj3DdaMurPrDzi8fPYBv8tzkdLTDeVHmvoobFHLRG1oa55ifwySDjJv2pFKZurD",
  "key47": "22zUxYYRgS6m8NY358FLWGiepqCSovnjy8rutWkV4WCjashuFsaKV3VesbED8Xaw8gV3QAQLSEL7QoNkwRJrwN8b"
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
