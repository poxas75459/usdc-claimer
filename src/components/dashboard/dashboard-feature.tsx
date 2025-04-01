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
    "5wChMQ3AUCgNkhWjNcTHqjaREUyrvFxWCaf85uFfNDW77pw8cU8r9bkXTjbC1RxA4TJn1ER6vZdM99tKTqS29NXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TAw5NqcPZbUAhhNZUJ7oLB49hwwUcBEAa2wYzjWVzBEuVUdZx5kRziimxKF1NEmowqjZbV2DJ9whfK4kUBAXn9a",
  "key1": "5hEYzWYyo1RK2z56bou4p5fKgxcRk7xZ37gBmbrgu3G5wh4HYTbAKoAy4FqAQzedspcBxmN17UnHD1b5evC8UuoK",
  "key2": "3BwEYoQ39RnUHbBseHziYbtfaX1u2RsrsBUF9fAaP1NxeAEKePu1yywKA6cS1QfwE78gQdwYCMfRXhisFd6Gm3vQ",
  "key3": "4t1ZVu2pwQmjoYjgQCfLFzRDGzV4DWs2SQZJZEvRnSGJr2qd7pAw3z5cHscEdNT5WhCdZgj5VN2BCVfsD6LZMUvC",
  "key4": "61FDK27DKU4W2jA9w5ysPDRjLbsSM2fEfhVbojvPQrbXJSVgHTLWwZbSyeu387BSXwbTSjLshTSG5Yyusxw3M1kR",
  "key5": "58rASkBdymzG7TBhCqu3oL1rUoNQZ9mbbAkULTPETUm6duw9eF8jA4FimAik9X2pbt3qxMyWrEt9idYvZjGMnYL6",
  "key6": "SaS2GVKu95T1hxgUQthQ8G7ojvvayA9QUTY5L58owmL29A7AkTP2Vnex5knDEc3idwR4VMMJLJUoNwiChoX9AaQ",
  "key7": "5ZbUb4rBKyFAU2MKcZfc2VmJyYJByAScsdjQKGQRVxwmetv9ibDrAp8786dx2ncnW1GZKSoQwdbyycGNunjkPbTC",
  "key8": "2aLoLWpAMpmSY5X4oNs9RihjEpy2518nm6yCKuTL7mBpepTHVJ4RmuHqLd3RNdx3HQzw7DPJn2RwKEZRMyBdBwiv",
  "key9": "26y3fa9ZVHn164MfqXa9VRjfLQEuNvJNN5kTxdGRycBK48GiKmXWBBWFQ3vXoqma7zTwrfZfrTGipZbnWpcxyejV",
  "key10": "8f8mt9bD9ksiKvMDUXmESxqkQNitJNyRB3nRQfxyexaZDHXowF8mFeDnBXg2gnGYAFTL6eMXbPsk4NCEY1cFRq5",
  "key11": "s5erzVVVPwizr76JyGJeLj92Lc9DSgc7Bx33uM1RRgUVZXMrtUKLFho5xQsNNDQsMF7WwFoYtCumJrfn6bFj2AD",
  "key12": "eN18d6bTH23nH2ycnwzXfxUgFNDyHoAx3ZzHWCPwpZpgUYNBVwYpoGH3FHGox6mo1ciDK1z8XMwymtfMxuD6gud",
  "key13": "4g8oWztgtBb4yVUE2mbXiSjceeaBwB1FnVbCnJ8E8nm4k7spRtTPzEBpEdttjwScVJPgN9LJuY1K6aZVL6a8nozt",
  "key14": "3G1ivxVG8Ykh4EDi2wNNRC1p36dEY9heqWimw52g7PvwJaoScx1ELxGWXP4trBvkZSFUbg1PKhHgafLQ5EHCqQ34",
  "key15": "4saoDEWXZa3eXbHY1gdDbTUmgXiqXFwuUGAEcWkerMtvdwtzAWkpCXkJ8PwVWcmJ5aKUgtmBc3p8H1VWSiaaVo98",
  "key16": "VJxxtF32ecoh1PMcHbvJiaqgycZsqKyq5BVdjUkuC1m1MHKVdS3FhJz5M8x8c2bqhGtwj5s6f63Hzf4SKtSouDc",
  "key17": "NMxqTdRUHWnnpq95Bs9xLJqJDiVJpqVKFtFxuhb3V7yppzqa2HvqL7RimjT5V6uLv8KgwnthxtKcVncVAw7pQmj",
  "key18": "4db4yHLQLFkdFWi4YKJ34aUk3u44gifcUmLPEHry9z3Fj5SWkhZesiVx3Au1fMDUBSVbVTvHkmduwoqRht83g3bg",
  "key19": "5PXApr6rxH1ZmgSwsR9hEz3DVtbUZ9mCE7pNRwbWaVEzmbtTo7F6Khv5AKaP955VasHmDXYeGAfoS1etPm3mka2z",
  "key20": "i8F7d4iyeN8Hiat6rf34UKEiyYxAv8PrfRjf1UawDEZfGsqt7KBW378W8BFkZwP1UYDjU2bs86oKH8vCwCpiBuh",
  "key21": "595pt2MMaXz994TYQyHGZKFr91ws77kdJRPwcae8g32czaDAERTBF2ass8HJSc2cz1fpUMLooF4g4Wxr1tPAk6N8",
  "key22": "61CDsj1SYTm2W5WfrSMencWFRJsbTChUTZ7A5R2cS8biNJ4NZ2wfX7psQqd7fCnnEUtijAS3yZ2xWLnSDLLveEtB",
  "key23": "45JtajJG42d2UY5DcwJf2ubwRQrRLv3xXVoViT1DbFgxba7c5uQ9WwYYS9ZxXDhCMxW7dg4LvLTpJaoA3A5u2yUE",
  "key24": "5Ynmxg3L38sZrWFbzGbkPiZxjLyzStERiYb5vzgPKieZKnwSuh1jQqaGQyg57PnmzGXuTSRQjocCt2Mu1r5hpp7B",
  "key25": "3W68CYgABB5AK5TtGychG5EMN31LFy5ArfbEbEEWmkgaiwPqQhzSohXCEnV8Ec6UtAzVejocR7kwEN1SQD2hXnJM",
  "key26": "62MQB4BBzDjAcHjs1ms4obnzgVhEvH8wESRSnMyp1pGBH8ahgDzvHeWQKHvJD68LweoNKeVRyysSqRtng1FfqzRj"
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
