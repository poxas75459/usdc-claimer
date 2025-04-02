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
    "GyTLfx4Mr8Sow3h43wqSY2ULLHTTTQPVDPeipDYetbQv6JJFvTFdEzyD2y9Nbu8Hvx4BYZi269eGxk7YGSaB5pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrX59E59JF2d7Bx8DzeBqD4PTkq3zSqAckwFG4syyCi91pPAYjkkS3nNYeqQD68zWw5NgDP5SqfEAXTbYrhYHzn",
  "key1": "2nzBZ2zNdBQPM4GnMgCEg6QPEapvAMuUZ4NiZbFF293JmkMqiGkzZfbPPZgFSS4tQ8jX6W1svZuxbuF8LA97zVD6",
  "key2": "zM7YzvDixSL2auv2gaEKy6pDycjUrs8xTofADZHTZnX7eA1p5H1nmnu5HNnnPmhV4JXZs7WaiuADqNt2vpFEAqU",
  "key3": "5afmBMBVwwyHjMVCqziPkEN4ZxaA6iQw14Z4NLVvgNb4HrFHb6TNzDkKQvdViJZyQq2v2j6g3qZs5AhhDvWa7B2i",
  "key4": "4gmMqsyQhUBVtfXam7sRE5h5pYYcwcaBPhmPMtFh66LnVweW7RcYhkPJQtLh3ZkucjPPgFavZymVJTH9GW8oqQyP",
  "key5": "64AR1eohNAds671m2hiyhWmQ2xQ4Sge7m8TcNuwTY5TA7C8e4eUW1UFZUsSBumMz5dyBvhzSUDEYadoRFCZY1Ya4",
  "key6": "9WbFhz7XaUN5oWSL2KgEhDLwBMXeNtYZdyQYpb3qCFCc4ivtoKEGYHwp5WpLhNd7s7kCnd14DPL87nx72LFJWtn",
  "key7": "5xn8pNGjv9vc5JTL19oPtTVpaiQM4Gr18rVZHpQhf3QrfN6dACsh6yfeWNn3feezQg6mkZGddC6csrAubpPrHKVx",
  "key8": "36AdMWpnS3uYfPu2MsLhQFaJ9R1hB3T2DjUwcr3JuUJM4QKR2jLBisLjeBff9fAiWvhJ7awFbNnPL5sjKtZq9uz6",
  "key9": "GjwsQakqmCYqPNMo1qqSczSoZ96tASymdND41zCEVRPYcnbxWn3S8pMpYBzDHZ3Ce4XLEtQjBC1vkR2ni6UQzE3",
  "key10": "5KCZCbBTKKcqWZ4kghtvCkpgBDHgtnymR4RtJMjfBKRSCF4RLKYqEKmTWw79yGuDER7JgnUJFvwnv6VHjf4PXr2n",
  "key11": "5qTSoKNpbRKHpTuMC9gD2nZmjyGKJKbhNPtjsGwdW3vvbF33UDmovFJrJoM6ydYiGw5ZzXPGQdP8DzHThh6NEY3B",
  "key12": "9b7NEbmf7X7kVLzTJuYjQs4a5UEUTUHL4pqJ6wLLBaDxXfKjQZoc4Z3aT19topTnk1VZazcBvRjCiBNRkhwQZjd",
  "key13": "XxSspsXR6Z3Z7i6YawMNvBQWsfn4c7quACK4gjbrJcabe6izSXvVnwRRC1axNsRfdTmHE9ND5jJVsUPoqncKPtz",
  "key14": "5GHawo8tYSTsXycncu4SZHwyUZocjb4mFbMsM5f5RsZ6qTWkJH18NpZP4c1TnqiW4cswbXN5vzjVCDn41FvRKbqi",
  "key15": "3NV8PJdEVxGqwjMCVLHWbNLAJUweUvv9YmHwFacbm6giD16FGnXzt8nyCLZcK4SGGFnJWPAUXxhrYBWM9U7WMa5C",
  "key16": "3mb4thvgE4Jjk8S8Sj77gCudT3zH8tLZZwhJmXt3QhYr2mnkhkqcbd9qjAruVPwZRQkmbg4JUaeM8KDsxKK9Yg7x",
  "key17": "2UQiLQo1C86SuPParBx7sonMys9wEyz57GjaC9GTuAbT3uFi33KBHKwBV8NYVrhti3b3dsY2gnGJczw4vKuwztcg",
  "key18": "sSYaCfdKzkeSki19tz4bFBq36LxmUGns5wiaDh4dSEUUinCofYsbvQwxTW4RFin41VwxL7uH1uhHnJCHG8imtUv",
  "key19": "2fgheHABBU7NNjPgwkSv34F9YjHC7sMq2RFvVpJmJS9J4MGdfVzGP4zMF5vJoNz4WyVx71MR9TkVGpAa3RnxzuuP",
  "key20": "XynUrwukJfyJtBVS86t3K79f3ruU2KaNRd9vo4gpB9t7VEPMkzQ57MZEyFJnPbXvu4ZbA7mxfeoMsBbeLH6ahNH",
  "key21": "3h2uCVXxH2Lm3u1xUTShF4RP925dqxbX4kPfQzfxqezeiUTAg8d24pASLabBSDF3URj8LJEMySTwKgKUALVSHAY4",
  "key22": "yuYJTL332gjgHhKn6LmE2YzVRTZXA1jxcMhBwCTXu5SFotTREKn8CuqwhGT3aHpywPPQRogxtC8RV3z5BrN1x7K",
  "key23": "3EobthGyfTKgkRcwxYxXeTSzREiGKk9covWrJ7xsAvn5iLesqjRa2LqARc6KYnKMUuRn9piEMys5AsZNMuusN6jc",
  "key24": "AZeZmLguto4QKYfDsFUyYq9mvYSXzcDeLxrKNMvQsSLCSFhP2ASP6g2mNt68FAMoBBjjJ1S9kPvicRiAAKqfpME",
  "key25": "4Sj8Mp4XEAsVEM2egghMfL9c8VcbVxaSqgPPhS1GeMCmPstx7QZ9rLcU22PRaAHM6UbKes6vgXCstAwrs7KLmLZN",
  "key26": "5GheEoNQFBvuKmzMMddpgz2RVVywFGuHQJPCmjJMeUzhkdUk9VropKFnGAZrRTTqbCy1H1r2nn4Uxi7NyRbubfMz",
  "key27": "5ejte3GZ96Jy69XzHXYEZacWQCMnX6EGhdXkuvxoKQJuJ1yyzVczTHWTJv47g2sZDVcCNpiv6s3AQfH1AWtr9bmm",
  "key28": "4jPioPLwVcHyP1ZpaNjHRhAACiXrVMG3gYFir7nB6MQmkizbUWetVTpR6HzbxWov4LQuU7M5EVPSNnMB9aQregqD",
  "key29": "9eVmam6rkgD8LStUR14vT7H9RYF92FKfwFEG27Yrfmn2nkFZn1XuJ7WxkECgM1gCT4wU8ddiWdL97Y65NUCuFht",
  "key30": "42K8aTrk68XGZbehy8mtUiTHoF1GM5RXi3kpjobAXKvgdrfmuUZ52c8Y2Q8S9VRS7QyfaqY7TQY3ebCr2ZyZdWYu",
  "key31": "5UVEA15TVXweLpUDGMcsFPQNrenspCg8XCBjiWP2Bt5RMxD7YjdGh2hFWw1zCigxCiGeN8zp2iTrsXDWkSSt9Bv1",
  "key32": "2QbPU1hbjQ5cNaQ19CtK4HMAKSpFjoHJouead9FDJ9PDLXN2awsQc9hg3GNnqBSLRRTgSGWoEp5ev2U9z5EBwDP3",
  "key33": "4t9iPQrYpdPwG6DekdAoCTG6PzyXwkcuMVwWNcGJD35bbdvZLiWuABcvArTTSGjo5dzuyXwatko32MTagtRc745E",
  "key34": "4uqwj7WUUTsw6UvsXKX8b31PG7RTbjyey8KXMBr4yUSfhPiwPEEBYXPd1P6RumgYwfCPG8oZMxXqeEFx47Jn67Lv",
  "key35": "5rR7ttSe7nmDNanoH93xRpak3xnqvdkqPhc6BBFSdmxeXWpoMfappRmHigC8KQZgH4mvDEwRn62tXiBZ4X3K84sV",
  "key36": "5t9d95SZnc4hTHBk7p5U376VHu1bMq5qSV6NSCsvwExaNaeEyuQQiPzgNPj8TgcvoyB3Eo88k29BFBX9g5BqLhgk",
  "key37": "5Jzi5L7bWUBEMcbhrnzXGjdjzsynNmrgio4Kt7t5SJaSBjJioGZP6C6Sbhx3fFHZhKWAyd9Q8GTkUrQH8BjjPYYi",
  "key38": "2U3mudXecBP77tEUFUw4gW3tbtzv6fBKqE6swkc3wPnu2FyThTJXFytWY4MMFz5ugvD8MS4gi3nQiUAuXaf9q4Gq",
  "key39": "4wS5QR46BsrU92hAncbn7JKPVMZy3mvKavb2fYsJL7n6sHQfEXHxiQV7wc5fjXzQnjBy1R86gXFxfCq7MEozmvuS",
  "key40": "569d3xNqhZ7EUx2vodYc37ZL1aGNnBUZKs76tApQwt7oMzxXH5WUFp1h5JpB6NDKqxGy4F9Sxnuy4oePkLBresMh",
  "key41": "2TcHiP5eAyH1wAJhaT1cma1UDYrF63s4sJH2D5E8dg9VHh77hdANVmZvgko8zMQK9zgg4XkEChTNGbEmErzqBYCt",
  "key42": "4fm2jGhHdVkmof5bMiiwmYsxdwUGCoH2JVMR9mNgm7f6A1ute1bneyKdQrE3JzypFStCWPdWTpsY5xR7wUFcfci2",
  "key43": "G9Y2vMZLsWraq4AkYNWkHpWpaoMd88ZXMubt1QTxY2y7AdsoRotaHvEqvHUJNjk77K4G8XF8R27pQWNhWmGBUii",
  "key44": "2m4hdpRbawTi9Tran1CUoCtk8NgetbukMrQC36WhXN1jQj4xgH6CfQvtf7p1y45FLR8p7dEXs56ZGRW7uhcogn37",
  "key45": "4hFdVijVxPnSBzBNi3PxCKVGqJ3KbYbj9aiMmCQTNFkPbZ8wsYkEkGQuZXRRiiF8PbvGULPn7cLxWdYAwCzQhZj8",
  "key46": "45LMqtvvCJXeaY9seepqZLCWdKPA4tYAJx6aAmAE2uaAkPc6crQSnDmSTRWhBsudsP2xLkT6U3UydbgAzv4neCxV",
  "key47": "3Vk8RANQWzre26Ce1agFqPx5TqF395eK1rQLpu7cULN9wpkPMuTHiXDBGdHx1aPhcbuM58tjunBs3wdPBFQRfDpA",
  "key48": "TJNqmmMDQcFPsdCHhLbpEsAGjrkJy9gie9HbAvz35jV9z8aKwHpZKrmxVYFnrJvcY3EWzm3mn43LGJKZKBURZUW",
  "key49": "2qX1vd891LCn4TL5qby5FzvMc6Y6U7wh2KXh8VSrAThkZo8pTKxKhTbrtCLy4qdbLSQbeJZh7HxC64Dwtk79dXoD"
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
