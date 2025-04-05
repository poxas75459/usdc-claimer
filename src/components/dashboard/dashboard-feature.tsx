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
    "4PtmWRLgEBSZLB5W6rDofT7DRWBfZECRo494z4xhLCuQrPTiXSHigmNiTW5h6YWdPsqBfoTPBgQma3FRHKCVP4xK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RC3Vf5fww8CNAWrfZsxsAMYvp9z5cRwTGq7bzCvovPNhzEHXRZTWsAKqN3UTY5zir7kbEFzoftnCUjPAajZgypc",
  "key1": "123vvn8RsyVQnrEjWRuakUmqkF9RiGwQWwfg734fyh4mfeZrt9ByY7CLNRawjcB4g5nc1Aa4D5sLKXr6ouag7jZQ",
  "key2": "5B3gAAVrarLn8SiJkSAUVdpFnRuLB7NMxjVd8Zwv1nPftnp3auf98g4wAZbbWPgWsRr7MinPo8FASPr6L2YANrtW",
  "key3": "4EKBMX65KMEdwJf6HyFc4aHGgB8v8CUb75z1QcALzj4kJzBVyKmnKNLG8qhQJ13RBZ3JZoo4aywKaPnD5ZVzuZTY",
  "key4": "4ksQF8aRqZwbZapbgqZMAMmunB2awf8XPDtYpkxRmiriyXzqcGhsSccXXviVg4nrVdpzye8yPX1VryE585s5khFQ",
  "key5": "3e9A1LBFYFeDjYFpTipFkaAkXGPJSbo9YJ7dp9vMBXtwRCu13hcCZvD1XNomP32jHEJgavZ7DYmyJiUDj1MBYvBY",
  "key6": "3CAVQkFyYh4xTfpxAHVz47ZQhWnLB8aSD5T4bHBvCQXBmgtnnHMHjxDc4LASWfG4u8J964bpUiLmsy98B1idc6kB",
  "key7": "2DK3KyTJdq3aEEYM3AszsCmrYmZHAMubLb75J2un6ThKAxhuxLPiofFjoX5AtYhsxiDCgzHKv4Z6HMxebvZqGN7s",
  "key8": "4jpsP85ePub8PR5o4VNxQockHED4VmsmRiqNnWpzNuHtEi2R47MrL12R2XhWnHMVgNwNjptSzwy7cBeKT9uAq9Vi",
  "key9": "35H22rjfPE9Cuc792Mz1fHWMi5DSUyGd6ruYnPQXwFB6dFSrHRotYcAZpw5baCZa81TXUdgDtMnYFMzoV94eseN4",
  "key10": "3kTxLEVHf2MqmfRZdkFVLRZHqgj4g88YRmRocC6aYRbtgimLwrGhmNdBXcZf9N5oFpbSNWtsrFCz5MSPA6voLEbj",
  "key11": "4cVPB1Qs6waeF56YWg9eN72844YRyVUriFZu9VrRUaxZABRktcLtvxWzKSWcLo4EgfMMRkXVvbHpSaW41CGGnVzD",
  "key12": "2iRuo6eykcXaTStiJU4q8PzsyaKCsPj6fS8zRmqeZtmNzkGp6Fpvo51xgNyW26Kd6Rd3B7U3jBUXJNkrxjzpYqd7",
  "key13": "2ipWH98hEFTdnE4ndbqfVzQ1XR2aEj4U2cmsJJ7u9KqmGZSrScaoyisLPaQt7rcFJoZ3i84JJ27BhAa8ge8T95ge",
  "key14": "47pBm8wK2J9n3QujKyppK1JDFY9Ea9EF5NKauKnPLuwvHZgJ6HrNzH9ywp8r1KEpBL5AYMZiPNjtGdZtqjuUqFFe",
  "key15": "TgouUe7HKVDy8LNztUVcbWuxPSr9jQM8B9A3QEdjBB7R8y9AmeiPCiUsS1Hr96cQKawKFojirHzHdXfnNPyD4Nn",
  "key16": "2YQr9pwo6eJUnD6rDJYYCBTYXryD1mGyHCGPcFMhVqkhEPn7nM8H23CbDJX5MLyREeB2KBsUbxEJeiKdsUDZCSVG",
  "key17": "Qwr3Ec5kuwipqbHG4J77UiJrNyff19VLoYQvvmL5Gd9cw5krq4LyWEj4kRCfm21Rg1eE4WKGzxr9YUyYNChusTi",
  "key18": "2fdK8N5nxYrjeE82hoGGG2WxeQrWqjAVQyv3WPUghNC4m4sKENaxXgycfmTeMCJxvdmvqvjPCqGkRaqaUcXc5gWH",
  "key19": "dAZGj5vr8Zjid1NVSiBrAVPPqyCLfgEYArTSLhjjnqx5k5jraUJtnbTPzWMADGvgpVG2sQyrmwsbiaUa8DLsH81",
  "key20": "2zd2nAGYgjjJoQAVUVfuSpWchYFqYrwN2bpiUHwJ6A4LcgXoF6ybUdJ4cDLLwz391sXdRHhNPM7Qc2FLyoGU4AyZ",
  "key21": "3dduFZ2x13gBqQCNFk2fe6oGHbsaaa9dBZSJvj6MBzSAsjk5sEHKnHNSh4NVEhv41w4Ugv3F3QksiJAgZPoAF8oZ",
  "key22": "2SQHKBpLCvPRaQjTwsRwd1J68SkFQsJxcE5oynL2QuXpx2mwbKHndfpTZy4jNLznycCoinMnj2PS4XuZBuCasPFQ",
  "key23": "2a45kDfXmNCNFyvhpjkfbipnsVVGAGdBm8GcHzekujweJiUxFEYjtntjkq8tMDpjg8rekzeoEseYk1R6D6EkaStB",
  "key24": "3zNn2kRSuHGxCxCWSWpVS2RmyhVAxutDEWBBF6Y8LyTCLjAKqioURcv7mg7kVxgW6MLdGKmGbENpnd8FdHnkthLc",
  "key25": "4pq5bouFmWsXAFJPGXbK7PWrudDCnCS28HKkJyphzhuUDbRiWUGZq5ZgW5kW4yYHuzaD48DPkSgHCqn3dsGqWy5Q",
  "key26": "2SZXZ7ju71Y3A55Prnybvg6G4Hub2cxUGpdiwUqECe4sXN96HCYvBjhNTmsyUN8nFQ2H9dPjhY2zGc7bJ9NfCx5z",
  "key27": "hfeFxG3kkd1z87JchexD6qKFEF95uF8eHcFewdvL9x4pF2ufL9egra2MGhGSdbaTaJm5a8rACYL688AiXMKvY1t",
  "key28": "R8rQ36TxGEFW4AwW9e72n9nFKtszQxiS2vc8cox23R7PD15rT5R9yUUptNvRaBbA8uzutqogzXoy1hrQyXXtykK",
  "key29": "5FFcU6vAJf78kMtJ3NGad9qsCrFzbmiqCydM8AjqyVHQ3FzeWUVhFJMRUgziEUoPNDW6YekioACgQ7jn6GBKWDZw",
  "key30": "dKUsM7yuU4XohGQfpQJGPYk966UYZzCQyDUKi9XzSJcdRYbdD7Afx3WRUF8Gf7ZLYkEMxyf2aWGbeFTNwwQmKFB",
  "key31": "5WHEnU72aEDCwg6cUSnGxMQrsUT9dU2sZwwWFsc59M7Kkdg1Q59Yo8DQ5jc3u27UVgKNUNKgmJpFrSbF11MfSDXy",
  "key32": "53pLj5V8xo8rmUMS2eubAFjmU2AfWbCMiJpkJXPD4tQJWx8Ngh7dkdUJtbXGMNDaUDffMtjo5m7K7n4Xq6kkRLWN",
  "key33": "3KqTuXLKGUbHcabGr3tRwWuMv32nYYLNQQagnTZwVAGpes1hM27WVqL8Ccc9Wb7pkRUvTyNrvb6VUNXnQAmLrDiD",
  "key34": "5QRhvf6xHvNSS8YMpgT1DW9NDteqUR9Qp2GE82wThe1i3Mme4Ly2UhQU19T8yuw5mU88xca15hgnB8p79LsJHe1e",
  "key35": "PoEc1Ji1KopVsJteeG6LupJaNiFDFG7WxEoYDZY6YoMgTaUew5agaKYNi5PPBYGn5EmGbMp8BiwANPMi1Z9NNA1",
  "key36": "5FMFSLhM1CLwNnJBZ2nrv7PiW5mf2QSJFHxpzNgZnsk51Xa679t3fGh1MZ7qpTW259UWPa2Hnnvtw9ya976Luahv",
  "key37": "5KwAXuAGjanJ48sPUgNyZXKa6jFQz1mQtRUbUn2PgkGGjo15Rk5UiAeM3p3CH2ha7t6KUZhmM9aUBkjNKSHxqKBS",
  "key38": "4ZyvPnFAPx79XTvS8CCD8Fv6hV5u8TM9UUyjGzZjoNfZbCaxp84tkohHqpGg6yVRTtT3zzn5AwyXkygyHA4S618b",
  "key39": "2n35Pi8bur4uyvSwHg7Gix7kKaMxKLAdAKvpaobtLkX2poCY152sEr8wugjvcyXuhNAZrCsrFDSqkFNgXx1V47qP",
  "key40": "5saTKsHEXWpNk3CNjEWzVAq1NLV7KSDtEC21QhXEfBAr98HHLpUhxE8dRpmt2EphenwiY2CfYu1J5mzsbTDbhhAw",
  "key41": "3ALf8t8KSWeb8zxFu6cCophJSRq7yFK2UcKjedqg13gLAk5gvmGrPMw484DFkceUasqUXfhLGTAcDqaNGFT5qxtq",
  "key42": "2k64TrH4ubsHEEUkXabawNg2p5XnxwggAhaMFVQsYsn4uDafbsmTQtpxeJDnme34WUYziFbc9sKFBiLherESkqZB",
  "key43": "2GCX2jUsT1J6xzyczZpagEtjiimppyRyiCgEobvNiGfjWBZNeDe7ZWYxjsQmxfmy42j43UU65mVTRyD2MrjBPXtK"
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
