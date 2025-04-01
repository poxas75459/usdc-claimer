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
    "5kL1j8gxU33sdtb9vpYNXb53c5LiRfWXZbaos1n5kFAqU5X1iRNmp8PPRXcZHxJbwxdxVTDpFtBmUrQdhLoUMrAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syUpCGbqJcwtwEtWj8eVCe6iYzP6m5vj2N86DbLDg816xmYKqFD9HchMs1G3jWHBDo9z2TAYADimDJn5ntXyt8z",
  "key1": "62BZ1JBuLV5Qt7hCm9yDme8R3hpGZnRqapJxFmRrdKJgpT56hxDN3YfQL2ZvY5egDQBBRbtCAURq56sfHABdhWBN",
  "key2": "4R1NntpaKWusvZQhvGq8xqZWxqqfWjtiyKdjriTDwSSpqXAJQzvUNk1mjb9TaG4FdzELAKNjqSQGTZV9U3WGCdpR",
  "key3": "62uxYQ2NavTzKZBdeqZg31D3xpUgKHTchzCpkoyryQURmyYrqYBXw6ZGLg9Gk2zotRZaojS3mC2Xc1GZCBqtUgNR",
  "key4": "4xSfcPmhCHrkKEbBoJKXZpLwQ4moA3qzdwzZsQh41mhJXBwcmBJNTe5mhE7yRCTuHRV64AvzLidZtTxaMgn9Yxet",
  "key5": "57EHaWZLPeF36YxUVj4CJY2u52H2U4wubETkD6mR9MdrupiEPzQqSEFfpy6y9TJUJ9hbcVCyUW37xRPb1t3JeT53",
  "key6": "5NU21XoTu3gXYVewTDvrdp28SMGZBjQmzdMChtywUrw1pn2p7qno1cW1gPThb6Dw3nkWBoZGR9bYDhhLpmJtQ6zY",
  "key7": "4VqYnSoaegjvHKMVMTdY4r4iK1775zTnge5hMee1HNQusLVEzeS4KxxLrrZi9RH6n8N2jWbHA47opdxyuwjjFiji",
  "key8": "4FozMVfjYpncEYVAAYvjMyLdNBy99djU6fFL6kPD5TQ8dWeYEsmHHiG7F36Rt7EP8BKdpBcjEoYZ7kZL21sFsXVy",
  "key9": "2fvsND12m4ggGwbhpimxuRpPZeTvCH26pELH5fSZrqppBk7AT51MmGVGqEFpwmHjFh3E6iwHBeVnzKqk6wGr4Eji",
  "key10": "m6ntxWan1LcowfphPwzkHP7oSVUs6oWCuDQigEXTnq3WBzdo5uiYLy958vnJ2n8zHR1Vp7hVXepSByyiinCBuM9",
  "key11": "322Z6E1ZAiJ4svqmsFuE862ZGN5q2hbttYtjdFpvUR3ykMf8yDq4Pwdthh5Emg9QGM2u4Pkhz9oX6ZJMqGNH2B95",
  "key12": "2t3ajGQCNeigvmz1bzZ9A8RpaYmoZJ7bx4q5NJ3g8xeZsYCdmdQvQkYUQTyqiWyY2iyVyv59yiQvdhchCL83VGEF",
  "key13": "2i6t2N2MFzpPhYjsHsK2LxP4ARLXsWqHQb61Vz5oSEGEMwoNTe8mTW9FdsF6kPb6PFKVKUj5u9uSJYaQ9WYkUmJN",
  "key14": "2qU73KopAkNijLGhYiaJZy2vZyJFnBLjYBeG86s2uUBToe5Wtgx18FXYyUyCK9LhiFYtPYhhBVCrJTaRg3BiigX4",
  "key15": "3S1gSQ7k3dM1BU6rVGQk99jp83ih177wZyZMEopiFDj3DkYEJAzemfjp81XAWMASkFfpZ2weYHTDu9KDgerW9u82",
  "key16": "5eQW4p3EB1SEcTViRnFoszoBRQ6SGgHTTb3GEQ36SziscsgFgxa7aE38AiCMGrysnr8j1ricUQ7EHXxeAfqY8WvE",
  "key17": "4udUeTizJmRGEhgcUQuBxT4XiZ16RJuo95j9gRA6thX56v3QUwQWtnvaCKBirDVa99Ag5UovELPJN6bZpWp5JWrd",
  "key18": "4KDS8xGVQkA2dUVujT2csGe9zEwBWzTbzgyyxDyW3xoGwGxQqYb2ptPAS2p1xATXCL7PGu1n8Eq61PKdmLfq7Xtz",
  "key19": "4k6TBfmfoHw2uPaaUr7GbEJi9tW8gLACM6PAp6M7QcYgbveRfVzLHuT7LHjnTCZXKEUavXiMVegKGTPx8LNYsc1z",
  "key20": "5GEe1HCoZ6G2rnY4C115Ph766dZme6ea6KSy9PmWNiwo4v8LGvDrJSPXDR9Wzwoks7tLCzAXgdgAMUA8T5nHN5UT",
  "key21": "2xxsHWpMWvkqCMbPVrd3H1RHLQGkecbnT3N6kmErZK3LTKwPT7ftdyYWtoS1bwygZSfKSMUBHwa6DJbiD7knXjRK",
  "key22": "3PJPsKoXom7C9ZMbgjLSJqf6z6E8854prvwTuweXeegvDFvoqTxxyvnwAQL3uVMJ5Gou3i2KRD3WV2Q8CRctj4A",
  "key23": "b5T8TYJ7uECAk35sTgbwMtMfbjZdPjFBasrA9gAWCRB7ZH4zf9bt3JAwE3VU7UvxHaz8ZuGuJSyCukSr9wsa17v",
  "key24": "3GsmqmxUSmHL9Bk8c9DF4iSjB4bkMnyYg9fTTKyxcUNzKMdEtXrybsNP8sRstYYugKYRzsUChHEV7tcXWhGyu46b",
  "key25": "GzG12KBso9PGHUEZ4gWf4Xg2YUs7a7Pham6DegovsqXDKP4UuEPGBWfHLB5QrePTvVdBmvHjErSqByUw8srpL2Z",
  "key26": "3TsfMp8gVgedVS236EoidsKPdN65qC39bYsoczBytrmf3gx5UXCSa9iACmNxmfDC3AZyikmst35SUDE13rkvYqUH",
  "key27": "54cWh4bZt28yQrLYvbymfWMEf5bVAfiTwr5dJpdbp2iKK1CfCykX75uvH9Dwo1nUfRHhBvC8Vga9TJqWg4kHDMmh",
  "key28": "Bie5kiTduf5hrmbrQ9nceBVcWH6bmftGTfaqFDBGEiS92hKBXnZ2XtD3yvhF6QHgDa44Brv6sX1Srp9zcZFyxSN",
  "key29": "3AWA3wUMDpXdi7VQ1iAgMugziRu1KDyGkuNR2WcGUkj3kLd8VNynn9QGMwpk4xRti6fXpixtuWqLsCkfkEnM8Ve9",
  "key30": "5BYXN8LBpdVGFmyJg2UrAUNPwrx97rXNBuY4LKoiKAExFSv9YQNZd95Ak4AFSxkd6xp6y53dG7LkE1wFUmMyY6GJ",
  "key31": "4NYVHyZ3Puniit585TmZnsqMFsevidGZRnCysSHJtipPsAocpfTioxDgou5Fg8393ytBNaYh739eGhGGziux13Ht",
  "key32": "5rBhGzGGYFjzcCSWxLRJk3kAbPQpha6d1ftq5RqsU7xcm5WFh9diLwfT9WEQsXE2qAcCx6sL5w9321CLf8PMKxYW",
  "key33": "3M1vCg2eMfZNyND8xqHYkDULc3dPokedn4T3opaGksDqNeuyGtofdgdqiF9M5MtAqtzqZ1UyXDwFkqKLrmLy9ATk",
  "key34": "2JWaCNeCGjpx9w8CpeZRGV6NRQHouVR1YgwMy4xoDt6zDCkKqPFnKanYDGoS7iYvDrmjkweeUDpxN8AxxS1vrcjg",
  "key35": "3eMi4zgAY9fHtKn398esXeKmBrNPRQ6KCdanp7dV7HPrTwLmdGzNQYPXqeXW8GfrBavPbuYgJjVnMKgvRcWFPBsS",
  "key36": "rztQ1pjCLKFy7EYhj4b35kv1PMHdXibekaFMX5RQSdG6MSCZMW9uhY1yxASSgYPaaMynEr9otYPD4RzqkNAfXFS",
  "key37": "2tCob3eG7aCjrTHnPKDSyhzMhrWJn68UGBpMZHaMV1EZgk8qnHRDkPBJ2qD5nooqVyqSCmNiV66UZiLsVnRqTG6j",
  "key38": "28v5MUSkddpKXsfNT4gVv612MTCUGjHQHgRTnoRrSEyqwHV8URcrzawgkWneUzgiCJ7UYq1zaRnUv65abUH7NzJ2",
  "key39": "3YyCQ9BB6FhohmUA5QeEHXok5fNSoi9BKTQdoWthFxRymyovsR9ke9jjmU398kvrNRNc47AebBGktE6zkP4DX1MQ",
  "key40": "5jF2ZFXNB1LXEhEJXAoFNbZpbLsGCzJRxW7bkj2RxQiv7o1GLoShETR7isY4xARgZsA3jbB3ocX2nzgC8uaoTr4n",
  "key41": "3LtEUQFf4taQ5Qofc8ZJxCfVoEA3C5rU5y4X8Q3XzCViDSuxbnYsoqPSNCJ72N4SGmh1WcxiKjiZJgStiW9NFmiU",
  "key42": "5raMigyqQqsfG7uDcHhDiDE7RDpLDy7spfctNAyD4kmuwGe7cwD9W3DGKpfvTxWnJUQPXLiyVu6r599dTN4Bdhqz",
  "key43": "3T6Myi9VTrGcxfFr56ffzWL2sQQrXGLqCDjZDqrCJijU7c4bJdxptsnrxn3zzScQv7SdLAbLboK6pBF8vJR2dqt7",
  "key44": "2z3StZrDf9x7wnY1zjQfYLyGx5s3XggxL6PiP4bbuRLBCyet4CKbSaVstkFgtr77r4U9spuiJoxKyDADF7CmAzbm",
  "key45": "2kW1JtMKKUwFBAL5CYDA7YJPuDGpdYXov3DXG3ZtBi58TWPahSfYxS5wyUvRvCuCYBtV97bhx9YwDaaMqhrMsmfw",
  "key46": "LNiyoTzQDMep2eS7CSB96GJhbUCnCjFdsA36vtBTrHysv9JYA77fjkaaLbCJUT73CA3ykGN5WJcWt2cav1LFKXH"
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
