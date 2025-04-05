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
    "2pTWH2ePKJD9MRvXkqkeCjgeRdXHT1ex9QAMRZip1hjF8rbwrdmZscr9x8QtRCoM6c71uA7gjvNvcTLnwRPcW5Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enJrqaDYr6otLhgYLo5Ci9oNqsdNR1Rw82js7UYkjzYid3J9sdjyzDrp9WbFDojSie3oRb1ZjZeaChVkHJ5sm4P",
  "key1": "4qE9VEgrkFsRAfWHB2qmtjArk7wcuxcjFiiCVaEME6vPxNjX8LH5UGGsj1HUpoQUm635EvgKehDiPbGnvVCHbUBM",
  "key2": "5utihdcqotp8pVgw9A2RPYhvvb19u7yd7f638eHkYpHvWy5oyaED9uBikYd7GoWheeVQphxpVQtHwrj1uMu3dVLp",
  "key3": "3Z6W2UAL8dAaZ48Yczxyk67qKpuXegDS1TyW67QWPLiig6354K4EuQR1uBWtYDa5wJGLwG2ruKtRzTUPCx469qm1",
  "key4": "1pxqa2cATnumHnn7axBvzcvuuQ3PdJqFQXKCotHLwChBtWVED8n1C6qcgyNt5TUbg3QKLFtuH57cEJDUJv4LwFg",
  "key5": "3BggEgnE8Zkqc1RiWmpF864Y27ziYDVJnmyeaVH8tD7E6isq59n3ZXnfZyg2Kn1AFseRtBo4VDQGTxojvZs379ou",
  "key6": "4bttwnwv4jgu8eTZ64X5ULpdfV6ioT5FJityDwyD9KwoPNNi5SgA5AUuj5WJT8YE3tubreFRT4Geje1195kwnRz9",
  "key7": "37PaMQ4FD8Hzc7VxUKndS4qAEC2yuKEyDhAeFeTtP2xb5BsJNyD213QoKQwQLGPecBakQkNTJcGTatiEE9zbPnMM",
  "key8": "5wj7HnZmvSUv1XXjAATJCsQtJjZdgze2tUkDLEDmXq3uQgWdoatUs6GGZqhXAPvbM9vSE3r9pW9Zuv2tbBzacq9u",
  "key9": "4hzsApqg9QXinhjp1WMKoX46HeDFNamBLNHLeu7MrgnUHFRneYyVAaiYgvNwcRWciDGSKesuKqbZ4hUTz5onLgKv",
  "key10": "5CupbvRacSne2VkWTvHKojDTTN7vPjajRGoYLNP6qKq4JpPr4guhDQNuVovys79VGDNizKPPuJv6LP5DLiR4jmJV",
  "key11": "5WTFGysfqJfa7xL1G6h6HYYCrLqWVworzD12zqXyrQMteMNfc4JVCx5fZ3NbJQkoSkVytZKmdDn7DL6xb4TRrENp",
  "key12": "5x6h7JCYhSivzfvFc4gD37N24Eyxxb7UR8FMn7qMBFWThPuxrYnRKBqmirP15qnoH88SpRhs2GQcvoZrQXKWzAj",
  "key13": "4hYePwScDQH8x7ADQxvVi7XupH6Ufy7vm1HojSpJsbJCxsGCft6oPXM9piLdZ4FdzEDN71MsnoPbqG8V39SuQM94",
  "key14": "3TFEYco4RbPeWPjAE5gKXrJGGnSPzQCrHeZnRUQAJ1RkUpLRc4UsZ92TZSuvpaCy7LKCYHyyeweBQany8UhktCEY",
  "key15": "38SPkBYBemtpsSZuASCTMqZFCVsxNLTantAaFX7Z1ozXMj8gw3hdvSeaj6qz1sTkv6GxmKCZNCwjoCWmLQvBhCAa",
  "key16": "5ubaGETAStPZJP9QhStiG38otwZa6idhVRZztq4E33jNQAo4kTFUjgM6X3GJZkDVBCtEkLwQsduMcpipfRdi78Kh",
  "key17": "3qFFc4eTeqJ36rvWyFa1GYKKVdL4h5tDgdDtkTLR3r8j7UviWSaNFY8kZvnpQHvhtBA2TtEPFTHw7WxmX4Qj1tv9",
  "key18": "j5jzxfYyj3wd1RHbJqtyPyZf9XE9KjrUGnZTorLDuW3CsSz5yJtbC3BP8pA6MC5AepyqGwZ5qjGpaAG3dLvz8kB",
  "key19": "3AwSksP7gwoe3uBouQj2QzXcCtVCYu4ESMTWQ9GXPiY4Z4djF2u73J8wk69ww92ADVciGJsKnwNitAPCvtsZiuDp",
  "key20": "2bQToMKzcGy9umptt5jNQLgoK7wVMC8FqH24d31gztP8F4SZyM7ao7U4dPpsZfn6pBktmrkRQ5iU22CocW6GeFuP",
  "key21": "3JVxXQknbmdHK55cZFJDhHfuezCjFAuRhEKFpdYyA3XLBnFq3df7SjLNRjnSnQqKE4X7dccrvNJNeKD6iivaLaL9",
  "key22": "56EDjVsvqJNyeVv4Y8HGbjgVURhaghUEZBkNQa9bb5nwXFrQpHiweQwEkqwpxq2PS9TH77bGVLzU3bBuJA7E3vty",
  "key23": "122RVWXUCZmM7Qt26tfNNe6s18xVMgmXsJDaCBPrHGL5SNBn76eSmCyT4QDrXTaQYoUZkigTuwM5FsoN1U1DKQxG",
  "key24": "frrRQDGAW5JUMncBkfb997ZLWimHE8Sx7vVesxqa3L4wVWpDZn4NkvcqdzjKGThaFF446sDFqnR5wz6FdhuiQjT",
  "key25": "uqtBk8KgGhPFy5yTBMumeHVErU8LjHkoXvhsjiB6VCj3PM5ihdvHfykKp9ZyQ9W3JW2BuaYBBSZE4jXiuV2Q2TK",
  "key26": "3ta8zyPUAX7o9B4jrdCsMskWtFD1oHSbDaUEkhfC4NWJZB75UMjU95Up2fEuQkiagsXDgwEGSQRWTdA1qFSvmWaT",
  "key27": "3HErH566ojBecoYmkqqaKg91DFGts2HrDqtLSbvpYRkVrobgt7H9Zg19F2AWpnHnjh2GYbmb1yPtbStQLPCieHfe",
  "key28": "2sM3PoxJKuXAH3rbRJmtsA2snsf14CKFY4RktEwTMm9Fs7CAsS9pNJuXRryfTH86B9vqoDfX7fXLkayzbwghyfQR",
  "key29": "5AH8Xyg413indzs8XyBKAn2D7CJuR4QzuC3FEPZkPzvVwNFpQuwp6Wn3wrQc67D4wFXhyySKwTn4zaa235PjPj9r",
  "key30": "2b6CR9mNGHiAK43SkYYtc6nW9E21h8eCTufdbk1pzERy7p2kLyiHWx8xWxUiUn5aGR1QtsphZaSgFnh1ez3hPKoj",
  "key31": "4C9GiJWKiefJEAyEcDrxF85DRnx26a9zksNwh4Codk1jSH4kAUXDx5grB2h3eRfbg8Kke4nRoLLXpVMDE9Degw8L",
  "key32": "5khG58Gy5RGb8vS24eF4pdTE7eeGzGc89BVvim2gMC3smv4oRMjCiTT1LPbYjoQPwbwfjnhav2aikTgx4zy69DQC",
  "key33": "2Uojik2p28mSe2ZczXca1pDLwVhapgT7T3F489pDifKFt18hkQUrJz8YCpv9uY2n7XskDU7sgUfWNgj3BpSE4VQw",
  "key34": "5DpSBUxso578Ebkje278A585wGdr3hPJohPvXUFwcEcPmPyGVekQu9Hp97wdZw8easTdNPzaDT5Utra5JLvyMxZB",
  "key35": "7qGQVQFQ6AUGpYAyW1FbqgCxtYcKfgQPDhU15zD9jajDqiaFFj2CqrptCDzETmizn1EAEEGKgf7WfCcKMaiUicW",
  "key36": "5kaEzym6TWKFGmp9mUbDtM6XQArPQmKS9MsuRd48nqzg11qGWHJbriqPUfmTcBocuUG4eFQW7yJ5tFkpWXe3i4HC",
  "key37": "jdvr1JkcU6B4hjKpuAtGWrGg1guurxXcAK4BZdgqF8kMGW73RHw51GH668CcLRVRa4ja8U9Cuvv5bm1QLFAXXqF",
  "key38": "5wa8vJjEA5sKEgYMWYLtbgm9A5GLk26hYpCharDSdmjRLAWKVyBB9S6Wj5Q1YxSwv7xCMEhPLQqQuzbTmdNL8Ey9",
  "key39": "51oSR3RdgCSjVj8BjHwfS2ykmkj1SYXeFn9UBJ6CFgfVsiMSEZZFBytQCQ5ZZNNrx523zQmJiTEiuJh39YxuHzUa",
  "key40": "2p4LSif18ofE37XVZeLvo9YATRMs6SxNePRrLo92MybvxaEaRLR722G8YWXz3VCMSqf3M8WB18DxCpBaysFjzWSH"
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
