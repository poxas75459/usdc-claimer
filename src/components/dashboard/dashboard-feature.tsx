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
    "4LrQ6Ybm9gUQThiKLWS1Gj22mzxMpaaaP7xtu27Mn8iS1KEZtfA1pRcaU7RffxeJfasjdAvHhNGVrPRYppMdyd4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QUmUy9GTJvaoaGJ1VWHSDdb4Xa9rJ41myRG8JjerNujopqyr4uziU41mr8yG2pShPXbWmqNpGkEmt9YY2seHxgr",
  "key1": "DcXUpWhUuTMZPueXtnofqwQjEobRfwPn6UFg8uPzzXB5wnoQukwvkwLuFsYYztRwcfgozUk6MEYT2LnYksNhjDc",
  "key2": "4SmUPtCMja62rV1kNSnjKMjG31BRS5XZJNbByg4CVu6i3GX7SXLqKzyRJRqjAu8NqNxsT6bp2iFvF1JxPmGhmDJS",
  "key3": "2x2ANvAT2bR8pJ29CzxrbQ2k8kLFZhzDfYkPUCu1CBc1sdwUXRe9qygRZLbtuQJ5Eit8Pwq84HaXDxkyUeXfgn6p",
  "key4": "3PBy9ikcFwMZ2c3oWg85JTrbam6m7n2yxB3yyToPVjMhJRxdML1HNvsQaJXZPk7NynpmKN4yM7ZUw9kX21CTATcD",
  "key5": "5kRYW14tYCkpVHfMyGuczcuWtbA3njNvW71Fm4xu87AV92mFoyqX1nyLiAvhrnoBsmrCedfY2qbGYoxnUuGeCzzN",
  "key6": "5u5nQioTvdB6CyBwvRDTQKUk3dNqjcv2vgsRJGzwUxW9CGGXR3CB1y4SrvzPm54onu1zjdEok9wFpA2SzPoDXmhC",
  "key7": "3D54a6CGFP3MpRHVTuadxLDcK6SN2ZFLLyeMy4oCHRNqwFPhNwcEjwAe41mC45QVxh1jcHZkJMyJ5E6qy6Fm9m7q",
  "key8": "2sWq2Abqw25anT1anS6j7HKaxBdQyw2aBoPiXriuy85MBmDUNofB8c6qm2G7AodC75vEFCQzrN3eVCEuxipJEypV",
  "key9": "457tjui5qoLfMidMiEicVb57n9dsPtXtSAdyefngVZVKxZYWNCBivURLkGH6KNeBkuzrgcqACdyXAUCrEEyLT9Fw",
  "key10": "3Hrfva9LjwadJnV1wrouV52m4xQUtRKbg1P2uHewTwkfqusbSKzt2qBcXTWUpNSmGwQsqE4znmUCH5CcAMCCGCk8",
  "key11": "26JWRZq9zbndtwDdgE7PEe8jETPy5DBh9Pov2T1nme1iw6p4nkqXpHrsU6GPMfkshTTCdRnHAE7a4ENoX3xb873m",
  "key12": "5XHGDp6jpmXHgg2U5pRc3wBXDDty7HAcLD9ciDrjSRL9pe6WaErsxkvfXZCu7cGvE9pE2GEcSrrHvkUNUsZ2mjvm",
  "key13": "4DzJHuyRD8zziVbHatHMKB7iyjgDvZvTiUgtxBYfxM7BU6F7f2LQ9eob6CjLkA9nthbxeAyCGhnowsuTGp8JhnMp",
  "key14": "5R7q6qnUgRidXVNeis1mdVSrVm64sMmn7uiP6XTq2VeFyT8wcAkAV73vCGd9B8eo5hveaY1MhbsJqJZcGK2qVVUS",
  "key15": "wkuyKRgz4nTyaGLuuFaAM1otCYuNiU8LyCMTz42cdXsNZ9bTZwFftCQoXRzgEd2mjn4H89xjaqwHkA4hsshLeAG",
  "key16": "4fTxVKNtAZAzJ27jr73a3KrCdhUcqvTYD7otXsUcuGDQ7xF4u36Lu3k2ykSnjPEvXaAK4Y8karpuNiKemywfn257",
  "key17": "2mUQgCNjAGbVYYBt71VwxToxC8iYa6FPQZN83mXH2bJoCAvAFFVjHPF9U1wQaEW8AV7QJVj5VpDsjtbs64Lr58u7",
  "key18": "4KSb1vV2WE1qJhciPsM4BN74CJwoYitJz1c9hJRHY1aj3oGX6FMKtRMwpjuGd92n8M9QJmArDGYxDcTRCcARigry",
  "key19": "2jNgVVqnC4iuXoRpWdYGhiVKeb5NQE31VqGi16m554faiaACqiFDaD25YiKTnQVJ79vpctZqBtAyVNJNDjkxC7m6",
  "key20": "2RGwd9BrignSpvBf5oPcF218o1xfgnnbSDVobxezW3HFt8YiMzu8ZfBVwZNbxCcHN1qw8MVgNkCemTNamdCeLv5p",
  "key21": "3Gych8JsHfXMKW8oWtMPGtVNUj2h2rho7ddHQ66GhCdfdNVAYC7HcjrgPAad7T6AceErD6GbQ8Drr28KSnig3AeG",
  "key22": "zmQpVJ1hMKz9Ld46mKu2bBCuLuPpdjE97h2Qcy4GZuSJvGunrqEjrusmqUnv5EH3zFSGzbYzkcUJRP8qpc76e64",
  "key23": "5mdeZhUdbmPJR8FwCtPE6qVct9KSsXHH4q88V5otkgPjYUSGS4KbNKkoRfwQAutnn9c6W8YSmMs7WEc1j4KNhCF",
  "key24": "5CJ5rY9ikmWkYNv2nFwSrh4Va5nBjHJ34tufejwGJNuksZFo9SJi8GnBpLAezycXLiwW91uWNhxemRPAEygE78dK",
  "key25": "3MBJpo1uSr6RAR7FSkr9STS2rnsQmHvoV4Djoz8BipJzNcRb8BdoKSdDsk1hvNMhqX2ji2LuJb8dUEWJ9Ear9on7",
  "key26": "xtgJo2jza3GbSQnJCMZEehq3pLnb94udcKU3LDRBTqQg7SFFtt6m36S3R2cezBDFZh7rLgUVXn9Mg3hSQy8gaTs",
  "key27": "21uo7HaWXcuXA55kuFJBC76sYkitECHggFAHRmtK9QYKpkHmTqp58dKzBYr6F7P45gbJbdoEdzAzKW2srMCqJj2K",
  "key28": "3QBq48izTu2V21QsEMvnAZfBUShEyFWXXonQSzxNypxFefZ1DiGWVTmUsATipcHLSc713vbNoKaxGgJKp6jAqA8e",
  "key29": "22pNPyCKtRrT2oCLEBHfxMnXtEntp94Kfk5U8CMFLLnX6Vw7UCAXZxApYoRoNHaizsNQJLfD3bzA8qmtzCbfvka9",
  "key30": "fzjK4tXbQfVpP4Csfzz5NC5nV4N6i9oeTqe14bNM9ECAX4ito9bdrWRr9RuPsYEvV8xJmf2jBG8T4bPTt3Zf53C",
  "key31": "5zwPpY1f3JDcLwCWyYFQtY6AyfqG1vKpBaw5t9BtwzujDHbqL97dR4JJVGTMXhpnJnzQVC47UFiVUFD8MT1JTvFB",
  "key32": "25v1qKnxbvQFePaAwHTvG4HmgkRE9CEk8GXzVFCaAMTFW1uJLj5rXBf82bWcTjuojHmqUFHJ6gRnuNS3hMFwLhcT",
  "key33": "TNRQHb2BoxKzzD2EfNLKzRok22oUBG5S7KMQVLPxTgKgNsjj86gVhQfpSfTsfCScTvdTUHCEtKUAbhTG1sN2Dr4",
  "key34": "5UiX3Cmmc9xyrymD8pYSH6c7vM38jD9xomHfRZtVuAKhrQcYTFauFULjE3LucRhjy1EkotL6VtgDCazTqfCcNr5A",
  "key35": "D6wBKF4KWmKMYaHHBVy88w7wCNTupcnrMaPFhLFFkhNHhLqFmK5eEfr5S9V3htbs9cWNVU5e6AZA4N4RMkXwK61",
  "key36": "4rYAFQbxn8XnPo1GThiQn1VuawokKRgjV36dKwDpk4PNhkBnPvrQ3EhviazeGFo3wdwPAfEL51kyhrq6KuLsK1WB",
  "key37": "4v5eks1vRzfBteMt2h4VFg9vhF73nQpMriUwi95JS6tKBgCq4KZRKo9zzggbSkK7seej1WGQeTPD7n91bek1vuGK",
  "key38": "4YefeMHwR5v7gdo2sBhpdW8QTTNieS7KvMg65WVS4y7xDm2vk3PfnCGh4Mar5BSz56pJHPbFRnKkrUiXX9K9Mo4C",
  "key39": "51N64jiDV9DigbyUgz1xvpYqpp8SxzcAweLPKBwsV3zUa9EZRKBrtM2fJWREVA4oRHjFLaGU7jzqVo8xx2bVRXq4"
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
