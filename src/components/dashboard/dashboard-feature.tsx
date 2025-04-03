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
    "392UFnEdUEXaiuBRas6M6oXcqYXCAsPA3iDbR5MDLvMxoAeqEpmnoUN9grcewFjDVcPFWwBiAmzMWtVbyjJBiK2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b7DE5h6U8NySmCM5qf2SKw2h6N777VNUwuy65CKk5LJf5p4xo9trNX1uTQThV3fYXzeEAXfJBbbG5kTPt5rhgA9",
  "key1": "3XSZ9VCexCvAVDazSiSyPCMjrSqZYupz8tjMhbQ3JDVdPg292EpY2XeJvg2TL2tCCzRcbqZ1QLuQNGW9b5w9SmGH",
  "key2": "2FGVDGmpa43LpTRiAZJ2EAnghRYpF1YpuRmNaGkMav59jTSGiBgN8Ds4QZ4FhoAkbptbd1QcTQZiePfDaH95pdju",
  "key3": "R2K1Xrg5Y48z3zGgjwAe9WPLNrkDmLWfH5Uk43bmvxqUunYcYM4ViR7W8jH3a69WNCTFQXHVi3cjyiXqHyrheUb",
  "key4": "5RCYAcvZuwQ7TCbxpSd4a3y8ZAUQuZQ8h62iEQDsNeYQva4Swaa9UQoTJbdkcygUfzG1KHL4YrEWJEMGD94kThfE",
  "key5": "wtZaNYUyLQJMnBBALWfjbK6f5vTGpdtAJ325zLBSn3gzsFKpTKqwNVUVDGrp9whhMmRiqEmjVqohnYG8czqofUb",
  "key6": "4c42wQSHQjfosXcVkjybJnzvJRJuVy3Tu6WY1hcUMzLLtS9dBbCjS9uQ1H23kqnNtgj9bSzjeuGyR1vssiBfRhbN",
  "key7": "4PJMvP22tNo35g76mXNZXjqehwmpPVo9noJyGRiHNwZ52npfYKNGYnEdC1eJDUL79ncfGrJHVnTGhUEwyrSoAqNQ",
  "key8": "2R8QDrWSfDKKNDyewhaWr8ds8dCZFGtPRg1zVeDrAKPkUUbARewSnGMPTvPMjKu29FCugeWrn7sTmPFVw9o5d6hs",
  "key9": "23v4xgu2JAPpVd41t91HmirSvkpobi329ExpvYoJ6UKfHQDPg2fq35Sf3t25HiuJfRJvdcMDVRoHnsPFsQRcQSxP",
  "key10": "61uyMYRJ4y6gDJeG1yCPkS4MEC2bGdjrSM7UishQzzy87AfUKfGKFVfG3HTiDMebXT758wdL2MwHp8dZ15oB8B1J",
  "key11": "44msZPFTvPZecJGaVso3TspcPNVNhPTVFXcUU4v8uzFH7C1u9gDwRTaEgmV1pfJjQVL9fi3W8ETaMbd3FgsKeC1u",
  "key12": "64dnGvy1evKCS1iH6iGjFcZn2vC75APB74qHXRYuXQYVrMpWGEyZvN8fRDWvwhvKBfnFcvCa27UyqAJi5cskE7dH",
  "key13": "66FV3AH61FwrbHg3FzpjWxjBfvYdMt2b3PdFE6JMrQjpkRay7NRD2pSncknWTjTQTQ8RKjAZsmZdJp4ziCjWdbWT",
  "key14": "QAE4MDQBtrq9UiCHBsfqcTo8J7zWriPXJNE6tuiKXqdtJySvPQNUbvciguJSnZiVpMB8sqcB3rvPT5V4YkSmucT",
  "key15": "4fU2DqWTvbzP9nFw9XK55Xxk5FPnoKCj12LHzErxbMeBXow2smSzBTVHRs7Hwe4xLwgQoXykjyt4SmzLuPvLeirR",
  "key16": "2HK4wyVNEkx3bb3PQ6GyvAdVPLF6AwrAbTrdPUdqBMVnxkTaG4pDaw9zu2678yrAJGGZdgWoG7C8ykTuRomoBuN1",
  "key17": "2LGkUsxyw8KUonsusmdiw4Gmy2J2Xbg9mQpLqVCtcPtn1Ljis84CzDYqT9sQZvH39ieUAYutqRdhqKvEXQSe83GW",
  "key18": "8HvGucoaEz6vzpCmoq3vTL1cE2sjsAe36w29PKjbJZXDFdu2tHbVEaPz52ZUaQQKN3LKKj6nDTwCg96gxGdVxRe",
  "key19": "2KMmDkCM1PPx6Y2bcD9RFRmirXtoWETKY9kugx8cSVQv1bj33h12TCt8rs58mGnr2QAQ5muGoXWMxeLFSh2rraH3",
  "key20": "4kakkuhhoECBPMegNe3K86faWV47WzGwWHDejqCrcuYtferz5ktUz7pNL1NsQAHCKxpPtHagzYeurhkYoiqPyDcJ",
  "key21": "TY2UPoQLatK5RRPpEifSjsLfHGgKpq2u4oXQ2TxKcrRyzxWYbo3hWdoQXbiJppnJLr5Bdtj6DSo8wygnsPu7TMh",
  "key22": "4B3k2MebyWxfNvYRGNWFnEmfAh92y22DgUcjVSGCbpWV6csSddEnC3ZNdnvBeBcVcewQBwsPwVfccRGxDKhSnN7t",
  "key23": "5J3bxdkWinVJNeywxY5XipDD3krdcxDe2SRjY8kgpCU3fGfnYtdmMdNGfbZVTNz5nFtPpsQMaX1qRab1PmBVvjir",
  "key24": "5amVYwHa98TmsAJJuexD7i2Lv5pMPXHKjRFhjhq7kNEbCXP39FDorrkJyj1w2zGzGJHz2y6rhE4BkbCiMQyXgFNn",
  "key25": "3J8Rh9U2HXsxFu8bPcyKMbojcEJWA1ZSVGMexeX9YJKaRj5UqKdVdRKBb6oxxq5Si6KrrV97XnV75Y1zSwB41gjL",
  "key26": "3t8BuMrPXM4rkvkKG1q83sy8hAPDp6xdiStthDYKTtHqRmnHaRRecCyfT8G2nAZUoJ78QMSNctZjGLghkHy9M3Uh"
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
