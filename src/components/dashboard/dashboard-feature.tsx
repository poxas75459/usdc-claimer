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
    "5DvrYMJrdRyPK9yQQwp96pkMEHt3CV7kduRhDSv6A6iE9x3sSLoty5XdecRLC8DQ9nJeVTEVNn9pqzxuUzd17hXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625YxRqxmTFHhN9EHhpudxGC5ra2MZoZFsLV4swpdDom9t3mq6Kn3v72hr4ADvwhknZJ1zpEnA7cuxohU6KBaNLT",
  "key1": "2Qkq982Ahk6ciXsivjRrvzqgSDK2UygQJnmrDjPDiSjPwq8tuJ4aSRHaELHNxF27ge6WaKQx5SoLqGHaW9oyBjEe",
  "key2": "2Q6mpzQvse3H9ffPyVGJCHvW6NyYfu5JNomvNZoyEbsJSBf4XPh7mwfFncC3AxNjuBEav5jikAFEMm4tfuTj7o3g",
  "key3": "2qPrd4dVQy79X1654KF81EPDBkuLjuGvgURYZH9gWEhnbudNx3wUg1KortpXBCMKti2A6yiY86VWLcpPWrFf6CxD",
  "key4": "3eF9uK5tBx6NCyJEnHtWtvLvv7B7FJNHVGKyY92dj1vKWchxVhRtqN3vH6zPupnL587yzxcbUt6fyg1S3VqB91Rf",
  "key5": "4Doiiw84ZK3KssFQQUgspFK2EzU3PGtbEFpu8vvDGYGJ9bsvDY9n3AgeNstG52i7gtrPQGN1uLqZBKCwjzG2kymD",
  "key6": "4vWtvzkt7wQ9TLvyCDtvVgajf1rMfHifvJsVbv2ypmuv1TbU1UYb6vfdo3NSwYAVuuSapvAafZ1fJmYULwYsxba",
  "key7": "2LZ3CGtK27QrUESRjZQ6JNHoRtMht3QrJ1Zpj2tMR7r5tfWMBmCfoa67Z5J5QVT3j3ZpBzoZmesUAwPqeABLqNV3",
  "key8": "2ZEnhRzvYCadJ4m4eaeTndGjN2uXFYtqQHymrvZSzbyywp95pqykuSz4pHuwygfuGkkoT6aa49qhNKJL2fP6EhVw",
  "key9": "4A7ztVEM6xCGkGMbdfhBdMmmyuScukcuGHeKHgwT8XHfrpQptW3kqBNxtNhHfU3LFogvG2iTtYFmfq2VMcbqXGAT",
  "key10": "3F1q6hDtWEVqQ7CnbvajTfFN1FamC624A54SCnLNRFRt5ymMMkVLvqKCtaam4rnZvgvJ3WV5EMpM1y8h5KB2J3m4",
  "key11": "5fCTM3i61KNuWFkDS6TNcGfMcSAgHwMqegimGDkvrtJAuLjn23Ud6JAoLaQxCVf8PQhiaNc6YqHfxESmpYNtCDc5",
  "key12": "67QHUZEJPk6cf66AV8EFVL8PrpZ5fsi2vCcLUtnJHmv87jnWX5dnDqK9ao8b8GnDysniwGLwuptmQ34SBQbxvkW9",
  "key13": "5fGnuL5Dqc2oLpWhzPAh5TJVGdARQkNYt42HYxWrPWDNeTfF9zhVmkCWUUqDegXZgBFwPWMcLErstvS2Nx9xHfoo",
  "key14": "5K1i9rPuSRpGtwoqv8ZQrZd4wAwA2hJyg7nVW756d6LFjjsysYLAAjqW958knarggPUT83DdS69Fe7rwXuijBkqy",
  "key15": "44aE9fRo5ZiMN7MtZgRj68c2muPrpxyDx2MaUgUFYyKSDymyvJHaCFf9KMaG4XvPWmuvHgnc2gUJiGsdGrC4wQk2",
  "key16": "jqBeH9y7sM6addEdyC249fYV8f4Qo5JgjdXpTVXWHgzjVgQD467ytee7pyrkYMQ4GoChD3ateWt11yUAcvSihLa",
  "key17": "2xNGNWppQDur1VshPs6N1aBRD53aa89wNrpwoKDMLhYHFYfz2jsWRiPDfmUJcvCrJVkkicLUtD5xvvdLoyT6LD4W",
  "key18": "3iNt9cPxaXY9Bdj7WxihZPrbiNE78A7FEjghQjVx7XnYD2TEExVwEUe2PFiL2uDan3i6pZWvehHpRCpjznqjyiLo",
  "key19": "67PZrmJLnhndVYzmBADGaa1JUwBgDAUeLvpwMcnZgN3rJgsbBwJhDzFXj3Cov6hBy9BpXfB1ZEKNPSL4YqmmMv1G",
  "key20": "2p4SfpWWD6JD8jjQzF1Qvs3ZzJJgfEJjYhnQtW1b3u7nr3pM765MnmwBxkNroRRZoHCKFMANkSAmWUBuwig7p436",
  "key21": "ywoAiys8TjX8gViM7BE6HnMf7eCLwstebdPSKU3dUEbdTLppPFZz45AFSGKPfEkdZdj5RLoZ59czHKD456K6MTD",
  "key22": "2oFaixHBBnbUAvWe3Xkc4iEQegTf2DHj8oyBbpBSAwY4fJEZcc687nZPuTbD7ETquU9GtivFYq7tZ3L3U6APRoTr",
  "key23": "WorioGxNDMwwJYcVWgUykcuxtRahT97ve9ahPPZGohE3j47JUdzv6NA2fuB8s6yF6ChkbSdQ64siG3SwqkUxzu8",
  "key24": "LJoo4NZFP9WrZqBdJ2TnsUAaeruSpui5z1dGrxeywqYsT1zhmUdPwotZia1JDWvWPDh4EKfUmEcSjnXHnW81LZN",
  "key25": "5mHN4RyvuKDC7A9BDE9rLeFvaM6dRxdk9yVW1GmZiNLQZFQEZVS5hdu37T74jxBF3kMP5G15fGtiEu7dHdSV8gUF",
  "key26": "2QeHT6y1i9wiAd3ENBkjgBwvzN8xk8MNuyW1tyvL2LFm4qhqq7UUXaHu6nfQ3J9iEbmFtN7DpxD9bVu3p6u6v8da",
  "key27": "3wphDxeJMPdQBdA9oUpRU1t5gCp9nzncMyjADn4C3LFfMNTzHUYtm9Fc3ut3yTAajUc4b9G74sPdt526cKbjeY7D",
  "key28": "2oF9u3s3kb3NYAniFDCq3q8piEi4G5fqyzQVYMxVY5M7TaU8Zr5FWbonoGF8k5t117G1xnvt6xq6APRsTr1hEz5T",
  "key29": "wBt9RbgdtXMwnnteUw9qJudk5tmCfqPVL93CrDGqVZ9xSwwejtbDC6yuq1TPpdbUpFCbv5Wyg66DPw32CJJPYpy",
  "key30": "XvojjmbtBsCQRp8Nzxan2JiuDHRq2M1E2QKcWPti82KQq1VY31uJQnLSZLML18hheDnwcP1dS9LfoTX72BPJwe6",
  "key31": "3gnxdykb5DSTpMpeVkJwFgZdJDX941mmA2X1JBSbscUgrWWRPaoSFMxpigzPTANGDr2hnA79CTubqUUeEJtWesdC",
  "key32": "56xDxctq1qgbZw9s6BvkvdUk2cqaW81w8fsKmBpqdB5PykivU1xrV3wcdNxbWSHpkj2N89vSE6qeASU5Ft618cGx",
  "key33": "hvbf313ZvHTztS4LeQ3AxrJDjp2Jc27q1n9YA4cSj98PqYWbbn3Hjv26wuBtU4Zhst97cXYPNGZWha5wM4AsHEN",
  "key34": "YDzAh2P1xRnmEWVNayKsBh1zTbYcBwJk3GXcBWhQ1QyWYV67xHtB9QJmh8TGjhBok3iYeVoAD9L9Qd5PVZK27Zi",
  "key35": "3VoBZTGsuCUe4Mv7vpWcnfa7uAjDXdy827Xe7uERRibttTJxZGy1dJVWNu6RX8erNuXapjKq6fWEheRajfqNUsfp",
  "key36": "2Ape25kq5Y5W7e2F7Q2W2dKWLUj59744LUWr6xhgRfyfCHvogebYoDfqE8EL7g9HP7FgYJRcwYiL6qJ2NYAwkL6v",
  "key37": "5XwBe14ETzfMjY68HC6URF6QGPSPayw3pZDWC6iRcNtBPCbwhRQz7FMvbhYKDgpPng9hCv2yNdW9YhEqWpbvaxC",
  "key38": "4gySVTQMjB1wJf2HCX2o3RpS6UdeE5ZV6PwSvqZRvpRgf74o2QzbYz81CGvs9SiauTWg1Ep2dEx3mnFgbQJ4DoA8",
  "key39": "2BR3ijpUtXVFGfZBJPzjNVaUXhDzs3afAKwuHSjNwwSCuNpc1JocZs8etFuq87rydkMeHYHLE8qrF97bWNx6AWAS",
  "key40": "2aV9XUqAr17k98cy6hwQVmRgMfs6AoHjSwu2FEXFB95gYgoEtFBpFpHJ1mSBFyetGjtLyAfo8ex2hAYPhVwyiF5s",
  "key41": "4QaRY7jsKUQR4LGduE3DMwzCRqMgS3bqDVuqfWYMCaC9ALfcEgWRpyLywC57QPuHQeBwmD29khCAAsUUQdG8jpea"
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
