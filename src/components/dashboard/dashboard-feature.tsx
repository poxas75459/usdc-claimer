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
    "2bi61PwgWuLMEbUCaJYCweBUaH8LgRB9xv3E9VQJD5n6xkguK4vbPyNRj4CbUDdaUegvYnJXJpAGhubWvVGpDmoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32FQv79cWRHr3nuKGzR8N6FXC2dR9VCPmjzPkvFufyhi2BqemDyd4JZVcQUQW7nXVdHjaqMxqE4QaAb4dTNT9Fqq",
  "key1": "2VHkMvqNJPuzqCBsAr68FtKXHzSWh9LtM8NQJvH27kEtciHprufrbqjawt5TAhzgzwu1QACYUuivhL4GhHsK7BUu",
  "key2": "4asT75PxYx1TMKP1fYZEfvPJC7GHEaDC11fJcrG4zhEiZ5QEfh6zKewKoaGhXnxCZNbm9YQydbXHYEkdXAi3cdrQ",
  "key3": "4cA8RT5oGnfyk1Lj5rESGf6bMDjNN99cYEYpBDucsrzsuWR1XJsU2dkqBqEKKsRvv4U6PkFEzgdatbcqPJvCVbrv",
  "key4": "455iihWk3tPuVs7kaq9f8UMACh76SMw18UVNdaSS6eTiX66Vpo3rtvz8fniXzPb2tzyjzY7DEDH8qMG1AvNcqeNf",
  "key5": "2Cv5wwiLBwqRMtHozaUFnxnfSXpQ68CYdQEjp51Whmd81KapJJ5bTSuuHm62NHdENCTGW8YRjVYvSL8xQs4SvnCd",
  "key6": "5jhiWTpvEwBFr7jJSMVzjKyYwhLybRZaGDNs1uJj6Yuwueaw7uinTUwqqWATUE23zYduHJMbTFwJyfLv1zk2xpDv",
  "key7": "4Xgz9xxCcRh3wVSmwN5oo5tXL6bysiVmanDqZ3bRctbLC1iBQgiPFKJ3JcDK4Kdep1PexvwYRM6NW9xbJFd5me7B",
  "key8": "63k7mfuh1PjVtaDuiqBQqTAxfba4iMx9vTWbKhLtXqNxqHQwhCjAfKjVa8NznxKAHERtz2BfBMGuQw5GLLPqBSqX",
  "key9": "e9AxHr9g31ZpsRcQizrxakC2LRdcpxinzbtKPLXTWKUKtyspnT9nMrURWfe1faGSixM47vptQ7nGGQYMoYAdxJY",
  "key10": "4SZtgm3xSanhMy1S3rxNsTZej56Ge6VPo24UpXbgeDU9ojsB4G7cNnuS3amUE73j2MdNP1Y9t4rRU5FKaiDxFGFz",
  "key11": "3sy3PCZ4zYGtivjukQFAnPmq3Ng4RZhwDqvSWPEmaPjYLzsJ1xwpEmawAqP74wSrpjdQocFJVHNkD5rPHHsawqsx",
  "key12": "2zG8aitH6yHQwCVXXoQUZN8WgnMmuwx7rnTMbqAJgmP8QkwS753pFnFwBGFEchW4gL7CaSf8EQCWrmFVYJKwSVtG",
  "key13": "4GdZE6yRcCHLZHRgxN94kPyeh3vHy8P9X58KzrGZXrNoG74HsyuZmBNJSuDpGR5oKzN3EaSqRx2Y6MvVE9wmBCPp",
  "key14": "3gosnbAhq7oWgN4Z3QNYYB7RfBwmK4TdwbzB8tLo4H2Z2jwWVjYp7nwEELdDma7jCvwzsCFYReve4n22srytxUfw",
  "key15": "4yxHKdLootQ9nDHznu39B1dzr4uLwji1GRxpU9q4uLoDD75q7vbthwNHoUsKSc789vug8hYA3DVB6sUvRpEqoQXN",
  "key16": "PbV5rsLBXjdLCKKCs1hnWoyUHGmYHosbFMj7gisfCze7U5jwrMQaMXYn1Vz4W8o2joouGhQiVh1SMitQNs7f5ru",
  "key17": "4yYNy1LprVhzDNDMC4rvkpdcLG6i2RYPzP5yFbe739BBrjC4tKrYs5UBgFtGrQkMXhXZiSyEKBSWTWKUZ642k1jJ",
  "key18": "2NeL9oCvT7HKwMTW9jEk6WNiUxXwTKSE4QmU6YfpuKFn2cvh5mt834MNZECfXYQT6WutNv1Cr872m8LSeWr4utJ3",
  "key19": "3Bvk6A9tKXnGGLg9cMi7FCv8cPUhfJUoxvYT1H8NKCV371WcjVh5xaJ7UZRjNq99cHDSXhEXi9TNXFbnTuNsgFnQ",
  "key20": "dT6nsNVhwssTw94U1SbEQVj59Aw2b5sTLaVbH6EsaymRF314Gc1H2Gfbs7BiEV3NFPkzYrsKXp6Dq2Jz3YGmwCx",
  "key21": "5HX2EeV1kLju7tLPyCQhZcJJtzhRHVsbK9FXf9bPmLKzwbn58GNb3PEQVHdfe8kvgaoDtEdKrL3K6f5x46mQRLAZ",
  "key22": "3dfMqwQphT92xRW3QSRqCn1jgQFYmiE6aKiykVKKu4kcPiPqA492mUaXgKHVXbvAwKw7tomvQ1m8jgNta8bsas2y",
  "key23": "4XVVV7GzfvuMKuutkBwAQyovx75mCFWxMdQJ5af3QWDX8Fm2AnLcR6pBZ21xhdvNVUzgbwYajeN48ggmQBvubd5X",
  "key24": "2cMayav2f33r4JDTVapbtFGZZbPdbUpxoADxA78BLZxuC6CRMPRwScCGKKuKShEeFV1wsxterigdEYVq6WBGjYem",
  "key25": "YfNSHEkchjYR1NUPG7qHeNg4kiThNnYkGztgxtWhzjweQ4wPgQF1NGF5xDUyQyVhcwwJE1PziH8HyQfhqwJbHnd",
  "key26": "5v8BrqaoBXRu4ezcknkewwJ43VminuBZidp8wJZjwJccRjYDhpsHhA36gWXd3fGeSxHJhWcyDY6Bpp763kHXjnfB",
  "key27": "66iscyM38mzA7G1iuEjWTx3L9hVTwgLioouduXHxeoahAf9Wf2B17GNHwqFUuz821CJehSLZEnYW2BnYEAP17q9P",
  "key28": "32NwaSq7Yt9fzTySooeUfZhbJnUyhMb2YmJ7AoDoUDRwfHgfK6nCDMigTeaf2Yx6FPhXnnX4hkXgSwJVKz417zZg",
  "key29": "22qcVwWd1kKBABTJ11SP8gFj2EbG4En36SHQMxzVzBt71kyMqUHEWZox8YWNiQyeSvMAABAniAGJVwHRsm44VCyF",
  "key30": "onvTTN64DDdKtcYtv1LUXG42z6mg8nh7FixxsAzG8QN2xWXtshE8EAZgKNdc6bFw6uSGM8jzRmGXZqACzLLSEg5",
  "key31": "2ydZKDK5Xi4JRRJ5DqSkGssQpiRXTBcNffjt8Qs6ESb9M5igxAFS7JdGpBn28VuZYZvFfdmsqY1izcw3WjhqDcfw",
  "key32": "54q7REQv3CkuL6p2AUi8ZritqcZMvV5ywFe6tc11iBNLNAWyU96za73uRWGbqaKEWG9ammuXPPbo2xjU9UmM6xRx",
  "key33": "BAUjrUFUvvayer83FNbbY1a6c2tcsa4AkeCodq9XaXFaorphJP5dEPLW3mn7QPvvxeATWgexigY5dFSa6AWzmvo",
  "key34": "MrgUSqTerGR8jRnJR3YVWNupLpkqRdfMN4v7E7BvDZg2LBWMogrWS7da3Sa3PKxEK7KXPeV1mxQXpdZvvKXho5V",
  "key35": "CaFbtsMnwASD4CUKDzn6jARaUUB9cJJjL1wj5WcYVZq67kT1oJfrQuifzD468oJbU3J7kXmfJ9hRTnhqd3GQdmP",
  "key36": "4RKzsBxTmGvG2AKTgQ2ybXLfJVyM2ouxD62FXNUbsDdeckhKrZqXP71MRSVFBYGP3r98X48nPArXchsdZCSsncWQ",
  "key37": "3jYBp7KHUfgtp5ZufpA95yLG3o55a2C5DRxqscCuYiEXZBWDG7RnDsacYV6B3axwExit1YbiNthhDT1wM6uH5Ctw",
  "key38": "5MAVBtBsf51N8PVpJbAP1wwSXGAKVhKdxoakBqaQ3aPuBrNkvV1M62sA2DDLZiLSPZknzKfwtVPMrTJ84NpoGy2",
  "key39": "3WURyhMm26hWdwoaebKLQZHptacWADeTX53v3yiJ38Aazz2oUbvC8BYAAy9qYjRaX923P6VfXnoepZfxMANEn7Xx",
  "key40": "4vGRDvYP1jkHsWrZysY4WaSDBoe8MoDsPa11AmiLEuDgmxmVx5yP98trgSxabhgsT7VqzfoXd8gqQotF79oUNifd",
  "key41": "5qQtdaQgMF2Jn5yMAUrwVntBAkPyDxyGGSuiZxfwJPBHTS9krSHw8ykJz2zanesgewyh8Bi6xQRFoSyKV7dtZPWe"
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
