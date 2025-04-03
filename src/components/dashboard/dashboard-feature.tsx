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
    "bk2Ys1Q7onscZLTmv6vifzkqagahcyBGv5FoswsAeynZPEcEQE32LBuMkqRHHTdtZdADfQJ6MXFYkzfPvxzrUy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPveE5C3v2WzHuvEDfF8mCDQjTVRUpfL5K8uLpkjM1Q8gQe1Pz1HPfQRy41p9mKqtp3cvqbrDFV5nuDXRdwqqqX",
  "key1": "Jq5k3mHah2ssDRYupgJVUTrM9oW1vWSu1AhA8mV7CiDGA3t1BdT417dNpvbfDafXNsLS388b5S2QmMECEZaAPkR",
  "key2": "4a21oDRythQ2vBRmHBoTECCDGorkWGQxU7Lz3Z4MdBHrLgAeEaipPKdNoCBr6bGsWbSXFv4xLjQ42AseTP4SbBJ7",
  "key3": "4Byg9vUo6Yx3EgvLEAVKajwyodzZUHX4VYEvuwBaZmnQJDAm3cNw8BQQZnKLr2tg2oGihLvRrqHF2aQzGrE7aipQ",
  "key4": "5atsYYKHxQKz6zzNWj71C5GtEdSYMJ2HWx2jUSnomJhit9FhnMANSaRCDohvRCKvYFB4n8coGDES43YMiLE3F79N",
  "key5": "3AjYwErbJwuMouTCZr5JSZ1JMjUdvyAfG17dWfEYD114x7obK7Rtk9mK7AHVMWVhbqMXAidT23ZZC7Vc8Gj1wQEg",
  "key6": "FT5X3GUi6B7EnLrH8UdyTsAQaijVsgVweYfnRTLHvg7BmiYda8pcapKdDUukjjdWHxVj94b8LPgic3izH36TG6m",
  "key7": "howRJSqnhKXkx1eNYCw4eYX4o98jtPXHRphxt3EjZvjRoKYTmGMMQHojH47bZfBN4dBPmr8wkBWF2SDCZzpUwDJ",
  "key8": "5H5UnwaYVpS5zjgiYX1ov4bX4myfTNiXSBByALqfu9ExdU91uRM4U7Uwef6S4A8gPHhYmQbJqDWwCjyZEjurip2x",
  "key9": "5LqNwttTs4ztJLo9eYXBnodqczH3Wm5NEGEHy9FT4JRMjm11BUF4g8y8AwUmhWZakW2FyjLzdx6iwSNvhmjhJ5ky",
  "key10": "5HySfVTv8xoiSBArH8BUdBk5H6SMu9g3tUBT6mFbgHn1EuPr8cxiZPVo2tM5spA7PygQz3LcNN5Hoe9CywXPfJRe",
  "key11": "wDaDUmaCmVH2qDBYoXMbCo6FgvZv73qkPgS5BFadTFsSVAFsW7nhL6f2by41zkimvhJPZxRGSVFTYy9uNhLY2ma",
  "key12": "45mBkcP8torSmJknprennFsojpefXT99ZHtid6ot9WRfFcp5xHTkGHMfwUB3Jt3E264Cxi3XP3u3J7EGkzx14YDu",
  "key13": "5gioSf9CXJUyBkzUdEb4QWuPmNw5iQuVVb9Zd6U3bLr5yB1kGdeGyd4pjz3V5WPfrDbUMfcgK6Kz3vVu31Hh3kgE",
  "key14": "5BYW3Qd7xWHbzovgyGbVZw2eqWDMjFTvxCaRYhs85kYMmNJHD5cKPKM4dSg5FNYA2e1dPfqQS4mWHwkGy1gJjbvq",
  "key15": "3ZdZVgDG6caWeP3qzze92UNgzKT9A5ZnNSi3Jeufz3VrnJqCU1V5J2pKjaRZiNQdc5odfwxwMFa2un3HqPYREEh3",
  "key16": "5tjR845pBqFgVLxZNm16dx4RRSj8gJXAMjKJXkryC3aWNR1a6DSG78aFCQSSujAMiuUpFbyUyFwjdh3miyzuspQr",
  "key17": "5bsu3i1wpjMX9amPTW6umZqhhoocsbZvKB2Vt8ceHkqbRJxrUMQqHxUMzbUdoqaSToef2pzvhbo5DBdnGZLiLEiU",
  "key18": "2QQZECXHZ6fCehSHyrL6BtZquwKkveic1QzJkSwQuRxR2UZn1YSNByjb3W8seLyMDQZEn5DHrWtjYWppJwjT1psH",
  "key19": "5suy5CLP7Vqw8btqEZZotokg5dmbA3cKTCMCCrsvY9SiuRwDfrVdmeBLeWGf8uUi2snFUZEPKNHW1aNMB74fUBNC",
  "key20": "65aSWviHXrDPY7cXxrutN7gVjeoJg4wAf6hLg3mhyk6sfHcRYh54q3g845NQTFPy6x2QfKoc6ncQ8uPCoBtQ1QqM",
  "key21": "46PqbD5xZcWTWzYiGMmWJvqgqzUj4BACGYDiz3J8Jw8BwEGGNxUh3NZGzk3vNCWexXkUiwzoA2W49sCTZXtncKRz",
  "key22": "53t3MiVfyJKbtLF9MsY77jVvpXuAqcVDPDh3uRZ5FPgAN128t9u4932VYvL8B4We1y9bvnFb5LsWWvst1QZzXQQo",
  "key23": "46RGxhcmym6ZqaFjgJkRg9yqfZxPtYBHPv3DS2WXoPgGAsHe18iPa6ZVXkj6YkyqkiMtmeemrrKiWsoVLtrkWW37",
  "key24": "5dtkoy9AmAPDJZe1Frhpn6GgAzp5XT3v594DGrghKChfiLdEANrG7YUxqY68baeSKJRD99zSwSgK5qH9KegPqwSk",
  "key25": "5u7LECzWzbvkXP6VXKjBsxhhub8HsAUufDUFf25hVGGjQpcEnxoNUR4VgJGT7xYaDr29LQQAYiUmM44QiJjBCUV",
  "key26": "5EKjDyqExeF6RhKsHh6XrrL17nmPWbwhYaJBn9NuTFY2itKQMMLJ26LJqro6q6NjEr5PFwjDU76qvP7HqxR4coqj",
  "key27": "3D3irMfSmwEEdHqD6RcZpVzh7e7xz9GqFBx18khCe7KFiPB8XPER4hFJAXg9BwYgKnWD47n1yp1hfdxZepNH2mqw",
  "key28": "5wjZdLCBECq6VqjumTwxGue7Ejt4X3WDawHL3zUwimN8ZPzJvC75pb5BLWcBgTUhZDXzYmNdLyeMqmyicr54U5vh",
  "key29": "3CvtZcJ4sBgij94Y6cdGsVqeGWsUqgw9MLn24VP9qYcCR8tjRzUtKf3dGfMeN9G9Uj27Gs9LMqxWpMmMLNe475Vi",
  "key30": "562jeeKGUTkv8ngW7bajZhmtH3tLm5Jc4VRKRb1jU12hXh9HWVvHFVdpX8oEmnbcA55SPiLoQMF1M4rzsojz1jDX",
  "key31": "jj7fk32rAJ8G7PhKjKf5eCUU8Hf9ZDPyUuC4frmD15kHp4YQNqdgvHdAuBD6oLFMhm31VsqGd6zgKiKrzCZj2JL",
  "key32": "2X38q6seJdF8xynM5E6kXrc3Ny9ys9EZssiWebeBe7pVsafmc9jP7wyRGpZD6Bg2wu8ZMjtx2HgrGdqNdm6rwAfy",
  "key33": "pTR8FYNycNCQ7VemGXRZporM8RQ65PPy6TmfnVvEndghjauYEiNqft8T7yrsVrfCASW9iArYh1mJWXyLK8giDHr",
  "key34": "5aWNKQDHKuTR9udtHWvp4t5t2Kc76PQtsS5zkGpzg28k1ydkRxTeK3VAqTEcZ2Tr6Vs3AD2NMq8ebUpojxcffsfL",
  "key35": "2zmBauAo1NPVzJHnHtc5jUdgEJgNWxp6xmKU84D5cGcq9oXKFiMtZ7qm2urLfDdwZXh1mbSiCrHdfA59QEhyMoQ4",
  "key36": "55BLftDMKtbqdwveb8XrLiTU8dJxNV6FnnzqDeTYuFMeYiLLBWu5pi8Km9EUaN4jcxRfeoynY6hiqSbnk7vNk1wA",
  "key37": "2ykDmE9mR27AtbZY2ZG2LJbM7LEpLBC1MHuoC51v7g3HFGgBUC4r4hYnLjiay5iBpAATnXyYRLrW2yseU1PfzPEv",
  "key38": "2zkEaD6E4Kf6HGqXFWXeBgf5AgdLcSLAdK6DqMDiARttE741h3rf77ZGYfEQ9JWgc4tCHFwXQoJWA9oneHH9s8mT",
  "key39": "JuViR15FSjHLqRFajV2jAjHFuufmGRk4JFr9T2ZJYoKy9hWJybKxtDBxuTSPoWg8UCh182QKqCRmhQ9t8oooS8d",
  "key40": "4j71zmr8pM1ZJVZGdvcJfETvkQnk9j3X5d9oybGQHy1ZCE7afnLK1c6Sesd857Woezabi2QXrq8UwTqs28VRtwTh",
  "key41": "5L1AXS3BhuyrqkgDadDPxkriy1SGNa6HLKPB7usGqpfhTZW1wWYXVEBFkvn3dbrANzQxzB9r7HwyyenCe1DxoGSX",
  "key42": "4MXh5S88ZdHZWdBMT4XiUT1swUexjmogHXr6pzzaVT1GnzY3u2Z1ULBnQa3vd7PpY433Y9mSpn6YLZvd4KSKh6sh",
  "key43": "2FaudhBKq9jzGjob38WwtsmrtkLuje8RHYcjEwRXd2pkXrVt6akxWuyVSJG5Am3RUQoKbsgN2eE3kQ3VQL3bqo8b",
  "key44": "JNXb2nrcTtAauFBhDfvnikwchZ1tzDP1ghzxzg1SWtDaFxsK3GxYio2Dtgdexp5hCxgZC7MgmW2MjFvZP92dART",
  "key45": "2n7gBHkZPMPRCvfttyYBx9UEVg45tCspoJYTvKyvpMbMY3of1qzNZNJBvqXpbMExTX9zE1vRuwLr3NgU46osUnNx"
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
