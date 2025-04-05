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
    "3LLfKb3pWVHGdTud4Sbudg2mKg5fD7Cd1A6rJMkVVNvMx3po2rP8ZXjNYCZQAM6vxdMF1HU3TEsrYSRQWYUqLKYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sPmysnq358YjME1y8pzVi8w79NjXaH7GpCwTAdgEbaTwGPUHNj9DrVXsvF9DiV3hVT6ZU2TMZKPtMyMdp5yXdz",
  "key1": "5T8uKGPRd3sNCsMsdZwdVPFTAYVBTrwDGvfsiXVhsb8fTrKRL7L5dq4PDPAMCp4oJhAsULATERPM4hqYJvLGL3kp",
  "key2": "4ENK99bZCDHXrBFitEAaYjZHoEn1yonUJ9evjATws8p419YRdWs9ELiGkHPx2g7GLe4ytjoPRfScEmXFnZWohUhx",
  "key3": "3jA5YJ5YPh2bfXo6k5wBKY8WKbxGRDmmdR1vENXQ2EDycpFK5JM57FVrLQ6TwiNyUXw2dD3LnWAHudXwaTZgP9Ng",
  "key4": "3EpuhuCMz8Umfb85VaBWu2SRuYDanB7HeWg2XQbBchgNpSCnCaZdXdXzxvrTza3D7V9CqZcPk4T5dcg4b3Qpx3d5",
  "key5": "2tkdSAY48j2WiMgmynMK9q4GjnE3RZEYi5YRzvtL5YJA7nW9hp8gJs9iXbyCGFJjqUpPqHrfdg76em7PAC8EKdwj",
  "key6": "2iayk83XBfkHWwMaj36ER8RbFDwTKNdC7pszrnennjTp2NgVaAXa4pp5LaqR5QbhM1KCQ43rw8r15CR4SH8aWbv2",
  "key7": "8tSMfuubai2HuULf12rvca6XjWVxxpNXAosVGnCXbrTy4EtJSFWA5iBK9wa6J17WmDL15WPAvnDuwM1qjb2oHQv",
  "key8": "2nR3SXd6boPskNX3yp3oezDjgSARa9TnQ1cVa5DQJyAQBoGcRa71UqSfCH8q1Lf4AKfHFMFVoXf5UjiJtCrDb1wX",
  "key9": "672QjEXjy1EM6zkhv6iZg2SJeiTp3Z9AntvTpxRgbwroTWX6c16NXpHXqefPU2ic9BXi3RCGN756KwrJ9HiE3JmS",
  "key10": "yHVthA58QZ6DUNDm4kaQmfLA5bL6ZDhHZ8oSmyg2otexxB1BbNgX4iRCUnDGojZdmBij6bHZEJurQ6H9bJNyHur",
  "key11": "3hdGyyyZ2CRVdyZxwM2yjosXhTDX5jSB5PfeWPAhF2G4LS4JqehBC81bdrSjNdKdMYkFkcXWJtjuzXyqZnYezVSo",
  "key12": "4EqcrFzoNqhGfKREcAT3p3wmSY4faL5SwDzDcJoFAzAZVkWPQraMMQD6ocA58EJWEbohF3nHmr7SjtYcvdMEibnN",
  "key13": "2HE15fM15JedUJaPqqbABRymWHHMhdcbSXSncvT74AbKWasrqmgrzpegGVZxRiL5PkGGV71aUSuYEkirhZcxLCr7",
  "key14": "4DYmuHKJPVjLZ5UBPPaTJYeqJcKVT3m3VwpupKb8Z6Z7oU48EaypVcDaMV1piCWR5Znic9pHVzVadtfahTnrXuRp",
  "key15": "2ipvKTdg9L1mQyw7X6DHvxXgUUUYzubqifQxGXTXbNkNrCzsXjdkKznuCTau5oWYDfrw57QvNbAhebjVKzPhbk9c",
  "key16": "52ibZxepAxdxegee1sdnJ87fnAdTsDifNQNrgxgpUcJ3qYGXPjhLa2smR8qs3pYwMEA7xznrCmnN166Ls2HvRDKy",
  "key17": "4uSj4zTKC76ZSx9MTJDpYKuCMCy3b7bDFxULACstzgqo3F1WXFjqkHrtmowrmePi3VjjsS1x2qPKoKSuysxnyQMs",
  "key18": "5pCGNYcYxvuLcuYna9JWS5sKGk7h2ZzfQMpFPccYqBAuRNUCox34XcGXvLp5J9s7EcuCUa5mFcgMHfHdSMa9FvzS",
  "key19": "4Bj1AVRZ1Rq6WkcmFkW8CzE3X1omFT1GQUAFTyo5P3esaJ9iHpmjpjULbf5hsJsEzfeWcGFcmWdwoeDLkc1UXBKb",
  "key20": "4ExVbCcr461WZxKHiHLpcMpLhC9PXSW8dsyHdDt1nqxqmJRUNKyeLts1HmLoc8iwfztqmPGrHd4YedgKbp4CRBtF",
  "key21": "3PQgwiFqd7cRTzFw6FKVizthWMK18JJp2GtmwwCv88o1jVVspCsENfaQPbn21spBjyAVErF7SyHtp1PxSc3gk78v",
  "key22": "5mLHQqUNXbjvF39vmTu2LMqWJs3qBddo5GMfvP1EX5zfWYJ11C2vA7Ud4aXY8yqWm21wmCM97z91XhVC6Z9LFAi7",
  "key23": "2XZ6SvSWXkbwXNGDKJTm4gmwptHRvHqDVVkRZYhc6ojL4Zv2RgvhuJMP4xHwSsg6toJFd3rq5t21pDKCJNTupQ4w",
  "key24": "4aEpo4TZRHnRifHwArV2XPiHb95EmqrfgCpbCF5NZxQSN44aYAxJvBmyeS8meHY6BQbjQp1YPsWDV7RU3bBEx8Be",
  "key25": "53Mow1JUyEj9ZZmMnVfNhPZCWiXioJbum33yoMNLS1rAbVvhGKbbeECjTJe6ixTAWyDcGURZ2V6Haz4H8a2XSwWR",
  "key26": "43Ptkf2c2wh5FT6b3NpouvM9eKaoXQNyY6KFPTpqNnQ792Kqnza9v2t4fgxUESLTh2uk6ssKjKhcQTvvWom29Wgq",
  "key27": "3KJHibdKzA3E1tQ28jvxP1R6zZ5v4LA5SDic1zXQ6m3SNBq3XmbJGADt6KoaokeJ9u5cLQXwYZVb9ztK22i4BLWW"
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
