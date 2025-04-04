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
    "4ELdUQRB5zZtwqeFwHLVZ92xJJrb9ni333bqTHMv3CCPFm7CG68Fw2aRxuLpFi2K6ckBXYYurkF4ZVS6GKaFtDeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzgXJbRqT5CWopYMFi3JxNyAiShJyK34Y5okM4WVS8FYpoW1AjD9iomnZYUf3d3T8JhfrwGLD6VYESEYLyTjjmQ",
  "key1": "5ZmG5aNrWu4NfzixA3bXqmbWQ76Zb2jhzeRhM3bvvmX8V2VuCjmA9u4b1CC6NkUaB8PEpKZ1xTcXKwG2KtGZPDHW",
  "key2": "2DMvuPaAYq4n5hZWLjVcvf4muQssHTrFJ4gu87dyqDSiCKvKAeAQB5CafeYypKkmrLEsv1vLD8J3zJcE2jvMs3wU",
  "key3": "3Wy3mJqtHWGsZwQvVqcvGw7SDdrvsmF31LLZgRak8pNWwux5XkFdhNhsxRMtJ26cAqMnPZkuSKCoGWXNF6K6ywqW",
  "key4": "3pSFLEDJwpWdratG2rMtrLXemeoD6VdKp6JJJNkjASuwv74XVLDmLh4tFTLRKFbmkKMQrDqFjhB5yEJ9r2RRYcHY",
  "key5": "4vo3oTXsrm6tuzHTFdc3Mh7onYUBgPWYDvXz4deetyPaWCaFQ1DyaauRuaLeKg5J42tX3EAtzZxZL71c4kxWDp5X",
  "key6": "yHVSEEk2PfTswXVDFqsgCGhFY9xVDkwu45p37oehCGke7CMMsQCgBXjbsQYCw6CsAb7WJ8DuEhFA4S3k1DcuAsp",
  "key7": "4DSiJ7ChbAymKQGrMhuUGXHgMVxpbao2mJKHmGCxkRu4ncSibVmucgLrvqFyD64YrY5sEFuYBUui1T4sbHZVQKnp",
  "key8": "2AfM6LhEnSRe84KvhpEZ3Nj15vvya5H4JDFGECnzUdknepUnHwPikjyh4ov5gAnTBwYvXVfxR6XkEXGczjaTJhFs",
  "key9": "t7Ef23CfRyGMBxL4v2dXaPQPhwSdLFJAv1gCk6F51G5LGnWbTrkLpcypmbgF9Bc6CeiVQqMVqaX6EEaq9DDfWx5",
  "key10": "223ofq8YjqmPTWwsc1FbTRic8aj4Qu2LHkmptbht5b8FU6B5G3eP8eENu38hBKmUFmm4j4U8ChMnMxArEzJNWtvS",
  "key11": "3H5WRE6rhNumTchNihrewnRm3pHUXRd9h9htxKR1MKshTRsi4y8MfnKzTNh2GARi7uSnHiiVKG3FYwzG81p71chf",
  "key12": "3maAUstgJMpDzvDLz7jGSUkLo6GdLea4Fwf57AJtJhrDMtgzm9juxqLxZiFYZVPR9nniC5GqggyPRyyDKmzyUh1k",
  "key13": "3XKyVuyWq8N96tqz86f8tRSUx6h6T7em69FYT8BUvUxf9bNpZeqshJdFgZ65RmC1u9y29Zx5LMHC6DeJaC7yDAjp",
  "key14": "4N78ETdDTqNjiReURsvsifiHg55axRJyByFkMQbtnvDxGn1TazhWTcz8tMYDbHdoaB75edrg1EfwLd3WzAq2tiog",
  "key15": "4aqAaPedV94UYsJvj8yRKZLyV9YVVJVLWXTZoQB5jfKmrUwzP1zwFDF2VaC4Z7af18Bb2SixSmL6GdCrDobNgxrX",
  "key16": "XjxcAhaYwyH7Eq9QUgeSzinTwz7CGPguDadAtw81rNY7KAZbhqd4TdjV3R6iyPwxQJdtRyAbYj7VMswe7T348wR",
  "key17": "3FvEV9thdbNtNyF2vrWQca8C8LLFFEwAKGKhjeLZwHhE9Wj4vdwrUokcws6JhQp89sN6MyQt34oW59QQeQQZ9MeG",
  "key18": "3khemGaN7BmXJUgpCaMdeCipay4i2SNYG8CmprKXgZPCKdKSP1WfZyLmPSffH1y9ZwmCUdnqjRcu4q8qDmUKBhAy",
  "key19": "2UT3yWn2j5t6B5LFhxnH5k5MnMNkRaQ6eMqNhoK9Avyt1X2VLHRB8ABXqrEBVjZYSr1kFW9wbmFUaNHTAh7PqkH4",
  "key20": "4ZevhTiqDTDNfqx3nugJhYTrMvsKAQm9kKZUXQAAuHfhScnaqyqndBBhDBgJ6YTpdqbbAUj3YqnHAiMuu7V7gx3J",
  "key21": "2ZxE2oRoLPBGRr9PUz6wquhxJNimAV8CRvJuSGb7fzdg6UQHe33TRKaXXBf112uEhtZANhMAzmYb9xn8oZ9Gt2He",
  "key22": "4KFhWvomsZGD2AQcjmaSZcSNs8fjLCvXbdf6fBePYjG9vehfNfDBerXMyzeHcfziddz9h2JBmXvBKd84C8XpFPkX",
  "key23": "3xUfvThhHZmtrfDEYpU5xsV3j6V8E9rH5r7X1Nf2vwZmPkngqT7CT1irB8xMNodL6S6CgNuWghpqBT3BXw44XSEZ",
  "key24": "2ryFJ1157xszqcYQQxmMduCQcaf3AdTnVRK1VgZzEtmVuCpX4FLABnLcHxZ5Cs5URzYMoTVa3w4qm4Sbub6eC2XF",
  "key25": "3eKjPT3hFTZVhFVNtRsQ3PdhRGP9zjUZ4JMumaLmczbSFvpGC9ttv3gGPZzUoqdRagd88KWDEafKSuFA1EvauziZ",
  "key26": "4HZAr24pdxvyViYHfFS8q2AAkUdc9t9gunkDtRK7UwFNygY1SbsNLA5pBqsBCRCfKAczPrGKBAptKMvVveFvSTBV",
  "key27": "5yvqMMEigFnByWstuQnPfL8ea7kCgR1uYyK6ZT1EhaedC4RhpoxrzvVz7ToaFv8zzAvKvEqHQG5GMWN6dSbLVYbH",
  "key28": "5F3GJqKm3zcAgrbgAUNAN6n9mxsz8CNaiGLuzsXuvR8K4ir5FX3BHqcyEm7hGDuyMXRoB9xEUKPiVpRDjmjUQwpo",
  "key29": "3AqEp7ELGAHMd1Xosg1BLA2LBioXSTAhfaAypz5ULoEys9p3Wm7JqrT2ZBT47WvcdA534iTvRw2Yi1qKfiJvnJWw",
  "key30": "2sJvib8nmid28hjkT328gm9bG3bWaprVTkmULy1rYUHEsf5pF82v8i4Bo1AuMnufDnAdDMytAiwGVPCZXLiYmLeb",
  "key31": "2jjGYz15S7L4Drsex6duYTGo9VujyNeS5fdTJo114bq5W8ukFgwUnMVhr7xYsby2HdedLT6qNh9Ru7PURktXyn4t",
  "key32": "5qEfzBVbbBtSkpuxE3s7GfvWJWnGbzGxGCfsJEgMuv2ZkxTyvTL1hq3PXYZA7x9wdPkqmNpbZg3rwnzg8f9ke4xo",
  "key33": "3eCfqLpZFAWy7yeTz5s3AnM3k9K23Ny3AoiGgcZ2iUHtCtPdeFAWDrK8GtBDNcG6f4G56VvsAT76tjBZEsR7bPEj",
  "key34": "4KQNaSZzXuaQvqvKJoCKQNWd1bu73LpkKyAR6EfQWGupmS4rqwu55gA63na9nwmqD3MEcp2iVWFWACA12ocF8tSA",
  "key35": "2NtQqjvUc5AyYP9WBKu5RnYPn5DGbSrCnaTuV2THUc5Ln9BEevZhjC9dZ3TKJKqJ1hgKsmu41NehVEmDBBhpfx9x",
  "key36": "2B1SVmcGqTGLVHMGii5hH6rjsmDkb1WjxANhZDauhAVCsBSNg2gAcaPb4kHuz918ghf4ntHJSXDYG3vm3qzFPmDe",
  "key37": "2DknZBtn9H3GZVEkUZPagGmwQ54G21dhSNvxoR3jTGw8QrCNynVGSsTFMiyFLimYEh9sSsQaJkrQoYXF3hDrSnYy",
  "key38": "447Xi2LzkEBvDtiX7HuXQiQuutKW8bPREX5ZQ6yqtKni7EgUCybJ9ocXnLkUyBJmuKYiP6d9RHkdvWvhAbHSPvQ4",
  "key39": "59PFeL8tKWu2dqHxFrWJGdJqKBMjdzkC5XwCYjDbhVWSzoDrYSPcFxEu38bUXGN2KmUfrD6XHbsfpfkB9gW9V8jQ",
  "key40": "ZQgey7JRBkmi59dR6bBCPkGDiyNqkXRHqjnTzZvVxG7HZ4ddFhQwT5c49vfb5EgA1E6UNpau5eTqFXi3jZsZcu7",
  "key41": "5uCTyyhjf5W6thtgsmKRJB6ivWWbGdWMUyiLBxJsh3uP1amqoFXyQWZqwQvQ7wS92UJPcehyzGFn7G4wYzmB524E",
  "key42": "2jLEYh8qFXmQ1DK1PP1YZEkuRokZHfMq3p2xb4KKpwsviZWFMWixwaJ2K4jUwoAwa2EU5RLfAGwtsxdY3pAtaYVW",
  "key43": "5x4AroTGKSd1DsFMitb63DStmJUcrNufxdcxC1eJTymbgYzUx94DWvTy68xp7EMTq1o5853dwgmKmhe1dMZCRsAr",
  "key44": "2tfEkehYXZ3Jd3UcstAeSBj6XVDR4zeDgowitxraKzT2Qp9oTUxMtwZtA8rc59rM2W6Qw9NBWhzGdidz82pFhj1i",
  "key45": "4Ezw31iAPhGMGYgpW6YPjvUTEecQ7uiZ4ivxnig1q7tMHw63YMmKBVjvR3BWHmTZmB96mxwwdRSFFpLW5QWw7Ggn",
  "key46": "4MAVVEps1vM2mHDNaovDHiu41nxRuhk1Vp5cVh1hC1wn1JsiHZqiBCBpbJ9MnxhwL1zb7i6BcYaMxAFs9u1sPSqx",
  "key47": "4HGiHJkGvh2X8Tj1pdZEQ9zWNqfW6ZUyjikKyHhoh5aUyHhmnxECcZQtAYCiBTbaERGWMyXSpthJYeaXRVZMmBN4",
  "key48": "h9iRrMhASQwQS4pXQjnzjWF9JrRb7yYhY56pgWxKGLm8fx2qa7efeSaj21Q2d4KaCHMZcvpNPzRpuNwFqdsvWDC",
  "key49": "fzVe7oQF2xK6gWrby7qnT1CPzFxG5EzFuhvU5EYNvEAgwNpau2MwkfHCRccmEZa9wGDz4y9kDKzbbRV47gB2xWb"
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
