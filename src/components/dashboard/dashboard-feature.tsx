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
    "4njjSbfieb7ZDxXZjsawy6zH2gxSywDrKmBwfWLJnXTAvH4U16wqQsWnYHQsX6PpokBEGPSnHMLA9v5N37MT7k6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5EXgUotKbzPF95DbnUPvBgnGzRed7gbLMPZvJHdjaLYmz4Nbc2CMBidNzpMzTi71pC4X6xrTe1imhu6en3qhMG",
  "key1": "oB6mTibEckYr8XjX4dU8jyzXPNVwgfrEw8w1km4uC4CMtkXGsAZLjmhfiU1iNAQYumpZgVBKdBx4gtvFH9gtWmJ",
  "key2": "4Pb9xYnS78UoHf8rA3RP1W6RbQPt7DwfFkraMGtN93Ksd7axQZ5dujNPTck2zmk295DZW1XkDPXEvgAF7Q2fSFM2",
  "key3": "4DdYYKneYmGvkiKbwnnUyXJDEFfqf6K2aujziGgpbtRWiyqZeVGwJJFtScCnY5NgvxokhkEZ1JsMMdCQZqeSUN4K",
  "key4": "434xFaS8zUQ7WtoePYwQ3fieonqD2mppr1gyxZueLXhu6T6Bvb2dQzN3Z7hqd5YpRAfxFrdW8ZYSneq6DruzJV3E",
  "key5": "3RTxixPzfg3HB5ccRHzcUVj5dZ5aYJdUtjn4styXshXrz9rmNtRHnC5rtos9Bj1FLhnhS21UVdHZZQTpTkqzmX4z",
  "key6": "44XBfcxfvrwEqgLS93nsgctf429DR4xz6ZVGws6Lk7TaLCqDbcdszCMWtWQg6mnXFGQpLPdzVwrr3xctf5yLHr1c",
  "key7": "2Y4RSAoiPQ94eXTy35CMsiKxXZm699PjVuPYx4c4ZQxEGTM8gK83BkvzF9Hia5ZbEahwiUcusr5Z8PsoJUD2LnZR",
  "key8": "5DbFNnvBLdNeexmP5qesW51QXRpZ6h8v7cqMqcGNxtpUXJ88FwoVDu9dAFvgL4J6VHzCN2JGJ5U9VPW5feAMYdEk",
  "key9": "54NuyaA52V2kcRqhNniDW3MbKw8EhDgfxd8EGZymzYRSgMKydkpXuXEbjXjiGWt2rBb1SjVYufr4RFgGYbrNRw5V",
  "key10": "5ntUZ85jahDV2KF7qvBmu8txTRtH7zEWPrUummDm6gajtVQcjWWSbqxe1asHAoPFAmRCptH2zUakhtahktGGMjeP",
  "key11": "4Aftu9AsoZntLf6tJ4yFazTiXFApppPkNvM8BquSsvG1gY8kYFzBWU2c1SwrEhjGGaYb7NfL1zfgb1iVaXUNT5mF",
  "key12": "3jq7uXMbKpAdM4Njbu73AoHGA6e6DGseZLpkB8GeoiauzDHETgVXThc6dByWCAzKkmffFfG81fEn9J3EPBzdb8DS",
  "key13": "67iz56Yvs6bLdjTb8d259pAYE9Qz3zv7tNyqaBeSe7RQW9SKqa2Z5mJqVhGa33VsEPndpn36FFiAbweTUwNhD7pj",
  "key14": "oo9Qe5DPV3qs23Pm5qprFWFSZiCYri2iqBvqYR9HuT3VfhPbJbGs1cLEfkttBpksQPNfqHrUdhMGPCJUhzQrhYU",
  "key15": "5uPn9tSBtAdPjEgY2wQFB5tEECDZdQTyXtveqXHaALCPyNyNYF3BZZXBrKpLTpSb4buVRBF7DjkFY6axW3L3KMdN",
  "key16": "UfUR9HT3xr6QGnekb6y3U28qhgu4Bm8uUMw52pxeoMTa1Y7zoKczu2wyFDz32JamM5wJbD2Lyc4KkywT7mHQABY",
  "key17": "43oJ22vx4fodTkHLavNNBv9pmBLWDaj3JhcaC2p189K17i2Qoyfb9yQHFseh29KYu6ht9nzAQWbPVsMhDBGmEbn5",
  "key18": "4HuGeeFsyWMN9JFFWT4KLbJF5HPFv5Af8GKESRxcCsHHPaSLsYFHXDftzf31iNFKETWE5gaqA78i5NS3icx33YVJ",
  "key19": "5yECVD7DpjRfp4mqbMUkqLDjPLfumouEMN9KFwio6ktKpeLUDkdak5gdTk7wQRKHxAxDDVRK6Vc8c9ZWfsCsNcDf",
  "key20": "5X1Ko7t6QPuBWeHgvugcQTHbTZecERu19ZmdaGoaoWgXzX8LroEnYDtWptaPTGKAZATyeeiyJB42ULqysWoS3T6T",
  "key21": "57mMcMUQkzZ6UiPTmPYvsZ96SsxyPuTVFNN5JSygB2SnS1YSjUUdoaSKd1dCvL9onvqGtjnFoK8g71cSQ2ghFXnD",
  "key22": "3T8iUniLfrQ3XRRZYT4E7G28SXthNY4MJ1pYaRx2is23E9vSopSaThRVEKHzmzKhFCLiAjGYHW6sLqijocPKacWv",
  "key23": "2zMzKMBdo5jk6LUpW9mmq7RGJT8zvUk61BiXKwwZt1HiyFci9vvJyTkRyrQPKChRV5nSpTNXaBbomhVbdMxCv9Sm",
  "key24": "3SZuG4CXT6sHrt6zrANtToL93UihNvPtRMthcuKSA9Ze8JoLyK6pRHZk4iT9UBpMD7bdDeF1pvdbrtiLaMXNmXp9",
  "key25": "3oHLHbyb3LZNvn6jZ9P6wkLhYz8DriT3YK2LxZtuqyLPgo6u9bmuP1TVuL6VLFqj3C88YQcDpUUkR8JUWGCrP8HZ",
  "key26": "2q2Zh9k3t7qURwRRWMhRCwJPny7WHi4hnE6KvkrG63LAYqg8FkiTYsYnMD85EvR6jXBWKa1e9jpr8r7LZ14UNr5H",
  "key27": "5E4uCQSzZTU9U5b6XTbYECXb7sgNxvsAc3LeMugJE3FvoTnWqAuTyBzJTnRWf1eYxM1Np5jSucHgf9gHnMuCPu6d",
  "key28": "5kA75tn6NijSJF8xHpJrpawf6Vy9B54cMqfN9oYFreiTtBcMzzybo91YNAiaTBzyB3hGBXbfZUyitXapGYfQs8ng",
  "key29": "2yt9vU1aGCvWGRXCFh8F33DBisHCVFRSat9KbJarsLPyCUXsJr4mqyfoLzduhcyYHdNRgdZw151LNYr5S3wQkjgb",
  "key30": "4j4wJxWQTcmzNLWaQrKNcn7haSQQqnr56dB4k7bXCTQE5RWUiomrSXxfAERkswggcFTkVMiQuGWfzcPtpir1su9i",
  "key31": "5kDENYZSg241rjb3JeYFheXYGFKshrAf5V1HdFBEuPpLgsoNHqR5SARHVd1iwz3Qpk9Z88CmUqMyEqxyCZiyub2D",
  "key32": "4vbhJ25sJLMsmY4UXkAvhXRSyPaM3A6X2HEiE2C6DE6Wg6VjF9aTX1sZSEf4wZutM8pYQ1gfp9WTNs4vRyhNYLf7",
  "key33": "3R3BzUzHKbwL8KziGuHWczntd1wE12qGYLt4XBdZx4WUHphwVhkxpvXnBSkoSCHadF5JEaxa77P6A3N4hXW21StT",
  "key34": "4G9a978u3Y4PxEPnKDmsxNHhzvnpyHBspZatJwWS2aniENLkWzXSPLeWzuSm25SKLHRvfqKvALymDEbs5fK2rLev",
  "key35": "4fznMukm6vihyvh6Y1MRXuDWCvNvonft9v77tCzPwb8iURPtJQcCzMsbJRwWfc6yywqHknhevG9nGZhmxkRv3ANF",
  "key36": "2he9h6W8SfxUKwWRmsJqVVqJX2a3J3y7rx8UHwVruCvwQgQeTga9QxhxrZcstgcSU6pR9fyi1efaRJJha9cBBDXg",
  "key37": "3VPHH5k2pVGxC5D4PMXumxqnnDHB19NxDXSP8whvtYMqs8qAmTHyn3Zocqo8iRXwvLCPUW4YUjVWMCRN7CD9m7r6",
  "key38": "4pLTVm12h87GFyFBnoHdWJ2nsfUmfJYGPRcujvBjS6mp9Samdm3yrhgNfeutm9dKeSbFUww4zHygTZggdfgbPdfM",
  "key39": "3aooHd6DtzFdmnd7Bjbo6fuvbBb3xNtcUCbQPHzuvb6tEXGZdggg7VCGMw9qJaUMnFNmJjYp5bHfbLk86nRX1yLQ",
  "key40": "5413Zof3TKMHR26rkx7DGNCRG8FvpSBdrn7ZG2mmrNXGnjEZDTZHNNTiRXdAQtdeLHa9EDd8RM568Fu7ATv7tTNP",
  "key41": "2LcFjaWAMxu1MuMkn1yMgXZzafH5vBpHucMPCErxCKXcjnFXLbvdf1BMaV3PL16Hxy2TDXBL71FTYtA4NigzTX2o",
  "key42": "3DCs6FDCZetd9bYTaxpBSx4JoeKUgmxDvXWPW88ksNVazjgE4WEVEy9x1T7cv1zV4zWvBv4SXoytmxgqc8BGv6GF",
  "key43": "3TMPe3sbcivovzUzSZM74GH3QwesTMJCoTb3A4TBiXqcKSYDSuvyJZN7TtLvSsdkdZcnrigo6VJ5rQGb179kENY3",
  "key44": "ebTC7SBEc4h5cCubTmmSP7kAmp17FNTjjjDQPfXp9KUxUmW5hxHGanxgU8sMT7MHGSt3dVHpf8BtwKSQYcZrkbH",
  "key45": "n517W9tBXGEs1jfGdxaZgdVviyf8U78qCHDn9yCQ8CZ1P2Kup8ntaz64HnH4Mc2bx68421a8xvfJY5c9eJfaMPU"
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
