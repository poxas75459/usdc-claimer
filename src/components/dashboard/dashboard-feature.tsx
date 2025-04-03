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
    "3kXARLFerq44CJcEfQCBEJAJfn1FeBa5eYgzc5oDJhRKgzPL7vB8hy82Vhzu7zRjAaYKYrH1tpxhzzYd6F4aESy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jw9L7RtRMSkLpo2wJEXoMrEcgsTMCSKbcX3NHA23kRQ9C45JhNGjn813FhsdCZBcNQXd3TQMsH9GSFwsZQvzggN",
  "key1": "3ezVzHXEGy8K2B8xQuKNanSzP1yU5G8RD1AXoPpuKtW6SPbEHdUeGbpDVqp1pwV3Vj6CZovYoF78xLMWd788ymwn",
  "key2": "3idkuaNvuX9BiabTzPgm78KpvGK8uv28cpCPL83c2qATFkTM5VymeHVgUzuKe6aHbX7KqsjYmMqYpwwMMHQMSsMx",
  "key3": "2XqLgAat8JcQ27V8ujcQQLd2ycpHyrPSBDUCxddhJtVzG347LRFWLMY76DxnfhWxxGw4MTbx9reJjjwEhsBZfWdV",
  "key4": "et7zTjUM7yeArNysbotypmjjYyBbJQGEcW9AGNj6nBrktrWJQ16NHkoyKiPj2KjwYGWQTS6J4oMRgisJbFxoBUv",
  "key5": "3sXEd3wHaT1nApksgz45fDuwM24gwUdDrnmuR3RJvcJWcR8z2tE994WRRnc6VTtJnhWzTnyasxV5ML6xf3JcbYCd",
  "key6": "2Es984kPjJSQfKeLzjtcivLhjU76gc1voDpTHSWRWppcR7uDAVXbmvMt56egeRBGHD7ydV4JtXR9VLG4MWoq9H4k",
  "key7": "3ZZn39xTfMHnAVazV6nEGj3d8X9VAHWue2E86BxPFvsYxDz4fSMSLicSo1sU2wPkmnfGbXXf34DQeW7yNB5Hacz3",
  "key8": "5gPLRisanCfm3EvXTnE8QSAzQUMvb8s18nXdeYnPG25cTdtLdFYFTFGJj6zwfvvnqa5U4yoefMU7br4i2ozFxG4m",
  "key9": "9YdcVkmynXDzHpLmNx1HuvtY4rgdXRc6zdFAjXAB5q5pCYnSAERiCvtU1sQB8Jgi6hvT4DAfMqPgabo3cKaRKCH",
  "key10": "3LgsYnBKxma8c5JrJNQrh266fWw8XqzUpw925eDcAk6mHgyvrH98JkZz3TEivJYZ9ZD8xbNc4T3aWYasJQPrVVam",
  "key11": "3ReTFkEXYZTjcX2Tv1tsNsETyPLDMddAB1gU1kx8FfZBEuVwBdKUbpV52Luvq93pyeS6E8jMN4iPa6U2JwQm3ETy",
  "key12": "26HwC68DZuQU9mvSzbZ9kxeuvd9ZyaQ9fbrs6cihPVdYYfoQMzSHxt8YvtWEUizsvvEzUqA968djBHvSomzx2p3E",
  "key13": "2CKDED65GQEbw368uaTNrgjLNSmdk4xHeBjpE5YGa3SgAmskWk4GShKSQjbgEErL73u3Hmo73sziJUzeH6szJow1",
  "key14": "2GoY9Zhmffypt6Dbhqp4VgVqHVz99JzhAm8TibVgtsWnG2FhdWk9DJrksFf3L5fjcSrnpjjEq1JEP8KVRFmkw1Wg",
  "key15": "5QngQ8WsqkbRWkbGzuEq4pN88B5mVMCzs1twrYrAzVxhMQ5AUPUdpEwFapm5R3YsJrEf2Vkx8gVmP1gfZisL3p4m",
  "key16": "3RGyApykYV2NhmbJEpUgJ45M8DbCxWaYiF7AiEAsaccK1ySGirgLsLi72bcPdvCvYPXV2bfaZeoNvdA6NE3pQhqX",
  "key17": "6Ygp6pmZsU542wQ61XsCwB5uM73oHRGMT7LVh72KpfyQZzjbUj81XXBa2nAmZvDYbCbTt7Z1CTavxizwX2chEvb",
  "key18": "pLBDcgSCtDKaqHB8hStp99BU3tumQAdrkbmSU3CCv7BhTvvFJdCyVj1Z7DkieAfqfyLAGFwM59A3FmTZqYPG9Ur",
  "key19": "2EqvH9ENVDwMmmqd5trUaiDzTDoS9xZtpPRkQmibsgLimss7fjZBfpozFrKFLTP3DPYKTyR19MSq2KCcVcwmYTzv",
  "key20": "2pc6eeQy48ktApfLweawvmnjzLn3dgTr79JTuuL4BrAXsVocgkVCXARJs7veXS3EHQsJiBhBqLxPgcbp9gaiFJQ7",
  "key21": "pNUqistMkJdZZ34X8TiQkP6B6pnRj1r5XxGbsVm6deUEu9CkwbhBUFhC1en3nw85TTSQCH8kt3mmH4bNrJvqGCf",
  "key22": "3JbfiGMBBdtL7j46Y3QrZmws44cd4L21eo7TPA5emUSNaTYb2SnVCqt6zmrSJBUo2TNQehCsepFQPT42NotMvgqK",
  "key23": "331RwCLc1yqf4aKLsMejuANTJxbzGeMsKuP3sZssW7ja2zQaecVaHovBWWTYCkkMQwJaaCJRi3RJNwdnHRGCWKYK",
  "key24": "4BnYyvZ6SY3WnJVCiZUwkJYHjC97haRzWL3nMf9TApVkBasFmXe4YPZPKNJp64JK79Ht7qpKx2xc1sBGNrAebcwU",
  "key25": "4xD1p9HMuDgkvUSaZQFQgAvjtxGLDCSC1JgPATF1ReePMCJGteQDizuS5Pu2mfuysG9zUDWzGwJ2QVxebf2wA4kN",
  "key26": "iPLrMSXpXxhwd1zxoBPzrfYB5QhYx8s1Sq65SB96rM9Huc6etR1uMVS9WofN4hfjKAvXZAmeLjNY77YDMHiP5dQ",
  "key27": "5SvubpvL7in5pGCVhYgtxgPSLKSc24Y1LCPi1cx5UW89Q8LX46AGEioUX4ys7aXJ1NeuzZd1GCQhfMRgqQ5QLXws",
  "key28": "32nJhujQD9jBCYD5R9c1rD2Mdq7fJWEL8XYtwtZAxKBnjLFBdmBBBc4WkFwSW5AkGc4Sp6NTLXNSaAAZngWGFpFB",
  "key29": "5GrFMNDNyE7DHKvvoRCCDH7pRWbDXdrz2cc3z1b5LSE6pHYbU61Vemjs5MoWLoKaSyLnZJVt7GQCUbdRXYpakYRi",
  "key30": "5R62Lw3HLNMVuvRvAWWpqTa8mcc3EhuC6adzKc2iadPHJBZazEe515bA61um9rp9asxnCZQuhphJBqsW68iXCW6C",
  "key31": "Hs7GB5sHGfpBVaMQkBq5jzy1HZpkKGFnGDV1UvbCghtqSU7sKvdM9LPUEZm3J42zGzsCvXp2qTZcDCStqSPcx16",
  "key32": "5FJamzougZ8kWkfkzG87QS91YZiR5KGgwNp2r47iov5ctcq1LrSba4Yivm6RHVV2mhsVazxZ6V4mzNmY28r3LCGR",
  "key33": "4RcqqsAx5uitKGyCKpv8AnbjdUoA4HYU4vBa2ECpeus7eTHck8h32UQsu4ymsYLNncEkA31wbewapjzUsKcyzvsu",
  "key34": "bh32KqSSxqrXzkVZCnWbHZhGejw92BTtoRYNqnmJ6aFqqDNUfC6f6jvSnRRx9wPZURi2uWStscQwu6e8XwQxJNd",
  "key35": "2RKXdJ5Eoo3pygDA79NJFeHzNJYtkfh46iuR3gs9iLQrQHQXi4iU5ywHosfL6xhSQ3dHnFt4jPBFYNYM4yQoup9q",
  "key36": "4uAaNedfJMUR3tiWZYtVkFdat9TXfqR9VpEq9nB18BWb3vgB2QDujkyiHFMB9PUqV6mJQM2X5KQisexaGbdc9VuL",
  "key37": "k4umfz5FQx4Nh4ozAiypF5aAUFTCPo9gf8raUJ6c8oFn6xpjVPwHh9RnCCeqW6jfHUXhStGPeZenfYfWiE71jgD",
  "key38": "7UD6h9r1h5osSUxkywJmuE9fXV6GSQckeBpBCsM6BUFRdBKCpyDrLxgLJq8ycc3KmcHC7NYuCU64t6RJwTUh448",
  "key39": "4wetbxeXiKd7LNVBZoy7Tknae2ZhsWReRP6svcVTcM12UR2KDaiNbgpY2r3XEdKK7ykGRjsjyJbDr4sMj4hubyd3",
  "key40": "38ZchaBPxEfDgeb2aLbRN7uYuYjAu2dwPEKH5Up5BmRBGqMAm73ngAeLAX3MA4qUxiNYX5Z4nvn3R7kTAdMoTmXU",
  "key41": "3uZTAeVjnvSZByrhHvYpbCAdPYduBMeqohFq7Va99qYh4Atd558FMALKWkQLdqPmrcw5HWHx32ooX2cHAK389Qvb",
  "key42": "RfBmF8jhdLy2hFhPf5kwohxfQwbHuK8khmPHgQ1Syx2rYEh4Lj46sNf3t1CWXZKtnJr2x9Y6X3JKwq7wqBhFtYk",
  "key43": "5TBKEzuZn4TfPr5rQMWj8uLFueVYu5Sj7CxrdAyYzin4PKsZddK3VqKUfx5x4HgLPmdKM9Y4KhTxm4P3Uu8AzXtm",
  "key44": "5b6rreif2Mgt4uE5ULVL4tyDB1fsydrjZAoNMQjJiua2AAULtwmHutzCevinKerTUeTX72gtGbFnUkH2ahfvAXDE"
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
