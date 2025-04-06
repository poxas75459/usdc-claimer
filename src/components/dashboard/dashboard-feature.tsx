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
    "3LdbWHWGtRd8NpxKvzq3qvDFaTi3a7Vzur4qN4hmtarKr1FL887QXkWQXjzau72pHiyHsPigUBSuaNtWtApcnuam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfeBtZH6m55ZKt5peCqLcRX6JEVzNUsVpHt1zRKSQwbpSRQQKgKV1sQfw4HDTCDHaEw39F6v3qxWs865Mpqqx5a",
  "key1": "268QwY7FA9d3onDdoaR8wvJg5s1uAenaFAPxUX3o5b6dH4HhHZ9Sz8ChaX6r1quob6LQ2U4yY6P1MuY2k8dtwkZx",
  "key2": "5eYj3Jn9ZgjYqx9xMmwFyedkWTh813GCMRBpSEBvW7HjBz1h1z7WyyrXirymVVhR9C5owoSRUTCHrd6PwXZLDYwP",
  "key3": "2RSnAVVTH3TmjzY19ekToP6xKAXvNkyNNw13fhDsDRDyjVdDZ3nC1G1YbePbF5Q7o34HzS1XHxgGZukpjFCU5Ffd",
  "key4": "4zdvJLowrw9NZAZ29cUfrQv2PUfkpZUbsCfk8FQzRKbHRBbmqJ7LJiQwFHhy2vg7Po9DLUALxkG4o9SrCkhRnhUK",
  "key5": "3dZ2d3WDzB19m8mxaoYgdHeESpsUaufuugiHKtPRGiW5WCkxfpwMutEECVQLCMaFVGgUXw9C7wFya3YpnhJ4DMqs",
  "key6": "5h6r9JT7vjZSSBjXtgLCo9Y8hzdDJZ7bGKfu3wHUGLN2EzFXqzPU2mxRCgdnAXCSNxSobdpqF9mm4vrACJokg15n",
  "key7": "3jkqL9LpuLaJDbccydYhB8krxN7MXy4B4a6XKmdcMxKLXJhrCnuWDCn5SoWK2YWtbLPghjXbDct9WxSwehyWa8TM",
  "key8": "4rkmq5qZ9qdRTpKQXnsXfJoJq2gnaYmkpqq51VcokPTBB4dBtpEhaDcLtKMetoDcVX6fLzNKmTz4nWBoFCn55peM",
  "key9": "5a9kGiNAZUG3GBaSZv1zvXLdwnKaG4ZBzH6QLmNmBDS6JfeVYZ6ZzuyWu1M2cnmxQQbGYemrAFwnBQWFPZrwvgem",
  "key10": "49qTqB9N3WEKHfrQ8iS1nNRVePLJSkT9zB8HdKuv6LXLHNUkJB2sE7SS8oWKbtdQjZ1rLNF4d3eYiWZhAgcPGwZZ",
  "key11": "2vcCE6hH7S4ymy4G6FG8dQorCfTprKBcaffEW8sxfBu1YUwHU571wdE477jdey3q1ZKFMBtjN9HUcGszUbz5pMzt",
  "key12": "3gZDYG3Y6tpVs3MP6JY75hyHgWpwVVDiE7DsejagjZEVNN3pGAmSZKEovjEijh6EiH4cDWaXnZ4q42tRkHVPjZaV",
  "key13": "3UPiduMt11DxV1v2f8ofKFXFSRrK8ejWz16Lg3pEhW5J7nTJJmdXwD8xeP1NRc5Yq2Ve9MafydAiSAUAryZphhPD",
  "key14": "4iYSMyHZVZ9asrHZs8PUzQig9UoTw9ncvKWT7ZGhG2HTdLwbksKgoNZ1aW4Tf7i1eE6Jfw72pNSaPpM8gr7BcQhM",
  "key15": "5WcR7PrFNtcpFAtGwuDcnpKCT2JuGguJmxhEm1zz1YS6xdvrbxzSo3rexmMAparvqcZuR25T4DhRjET1kMv6TARx",
  "key16": "4rBbyEJUV7crQEXQGWxHqd5eMLQ7SXhMKuE4svedb6U1bVo2DzrN5fwon47B6WLTmRzHSgpwugTD2JiqZP674V5N",
  "key17": "4xUoyc8LL6aYMKq8H5FVnMRShTAkrneNuCvX3MBpHCVxcptmp9g8dyZn8TMFWhJck87hhqrPBk4fgoJrRkhZubJw",
  "key18": "3FdWVYb8RjFMJd6s5jjmKi6r1RoJLUQXU2TKvxLiTLMeuFatLVartbGVEAZzimEBuMpC6Y5SXcHW3Ea42UX17mkP",
  "key19": "52DWPYBare71RWMG1svC8gaGp8L9cPkChAZupCLS2VnTGHSa1pFGDu3GUS14bfCGA4wH6ZYi77XsDF7mxzsSwdTZ",
  "key20": "49ihZDqg3U7Jge6p7hKuRw1nXiUkhDtKNDPHh3pNc6N3bLvsVjWdRd4hEhuUe8yL5nEjEH9N26k64d1PTxU4szuU",
  "key21": "43Sgf6Yd4pm97p7FW26f1hwfbt1HV6KKf4NSTQ2JnBpx2zjRNWphyva1cYcGBMmVY56snJn2tt1tH1LPxTgAnhFK",
  "key22": "YMqo8EahZmjXJM4GAqtxekR5jMBVCzW5HrEjVGYpvMPZrvZcDcuTRYiKNgVK1tnERSv6gp8c8pmbBLHbGzRhpSE",
  "key23": "3DGBcjXYLaMkg5nfCWF2Px9ffy6eUhSNiq2XPrAovSzZAJeiYmEcXVdYogQtZ76kiKDJskoK5XLKbUHhtddXkxQF",
  "key24": "3irXiC21SnbwdwUiqSGHSDfMnqRNcEmJxDYNPy68ryfqkMeEX6PWiKWJj6ienX2DaZ2hdtpU3x32A35GvTnxeu48",
  "key25": "4BEZpDcDrgJnJUpunb8YzABcULVXW7zTgENJdtipbEGk65BKpQ2rz4Lnu44yKmdgcYuqqjdjThbq83qikzog1aRR",
  "key26": "3HNHPa2tfqtogQYgjtyrgyb1VRCAawQPbqsF2QYVXxSXbm5ahPJHUEvFPD4WavoBXPLiWFehWGFbkgfiEnfZpH7C",
  "key27": "3PujynBxHeT5YpcVCHC7qugeAgMyNL3JKdRpuH6Y8UEhitKXy2KyktLrY6xQBZUykqo8KhK1tcuaFquYCooBwR22",
  "key28": "3fLVi3uGg8oxbVghcVHDsxXpqgqw49DKQotzaZ75VgLZNP7X6hn1NkyacCSXbEfmjuSeB56ca4G8hU3ZpFXCaheR",
  "key29": "4gEh1YqYqaJ439vY4QSCNFbvY5Ue6QovUPussrsdNsEWeKveeFvLxwHjiwUpEtVunyNt8MCPpMW9H1dqeNm1wBe2",
  "key30": "h9iGZJ6aHpFBT77gjm8LLeUH7G4sxWDhcVmzQJ3cLUJGVuua5Df5upx64NLKmhAhiidXrbs3neHnTnBLn8btDxE",
  "key31": "2sYoDVB8Xuxw6aSLxmELXPA9PFeKCMCXHdYHqMmGF6iAUd2SXAVg23DssF3DHLsSTys39TRNzs4r82JWbUXq1uDg",
  "key32": "xmDRoimZNP81jmw22fZ4BLdHL3GtnUcP3JezEhHe9osgM87VrvpKsSLQCyFV1WBveU6LnXYEaCUFpGYRytw1Ev5",
  "key33": "5NNZUKMiNzWnWj7mUEYo3FPxMmKS2WpQZPq7Q33mv5jZrHygkLspAgTfgjhLQSqjxSBtMbB96qF3eAhcGGqqNbaT",
  "key34": "3yStE6a3YtPLRPysNjBzXXMhzH47tEofjpk4Ef8ijyyF65SNDqDmPWS5P18voQmtJ5yzHzviB1eFG7tCxd5ZPzMo",
  "key35": "aJNiCUghiTAGzG336J2e7ZQJdxzhH8FMhrrDbtbfGFWuPhSruDsqTxnFnYsvFZW3zG9mSAWbCTTBVQ2NuC7v3kS",
  "key36": "2Q4tt5t7bcPputrdpfTV5rzhw1k8x31Ma2cXgMmPBF593gB1taUNb1Aj4kKgNfHZprgXLxpkrHbvpJh2jmaig9aV",
  "key37": "4YMtTf5ZqWGPxfwJHBAjZwE5axhnTLUh4UxysvCvDvuMPHir9cnL5hHSyPAYLV2Y2NEHkrnhTB2Gy777KqaJL2bs",
  "key38": "2M9NMmCANHJk4Y7zAzjoZ6HnHjNCkmsjXqocjNcttjrM9KjUCUBJYjHCxKDsebTG6KBqDH5XMoR3KsA1CEoyfRZ6",
  "key39": "3cMLwqYpMBnX3afkLfzKHRbMPY9fohNckDDFR4DT31MkVqZbXrQpQpprN5UCAczqeU8H1HhaZDThBsoJcuws8TBq",
  "key40": "3QCuXvhBdSzgi6r1Fze3LTyursqLwoCd8mrQ3BVpAHPgsqzgctNUrKSk5zdk5HeV6QbXWJmkAXYqvXsubQMwMjaZ",
  "key41": "4dBYJDF3oVwvaahPWg97aQAw6Wc91cjT1qDNxW23N3wgoHHw86uRQybS3TkGCXz3ZwDZyS5d3Rv5wRHkMRsD6xAw",
  "key42": "2L64iEALPCrD45Kof4W8DguKhefomrYCAKGomP3prvDBiw8UmX3PgTPBynwKcGc3vzNj6N2MJiC6xRaRRe9ocL4H",
  "key43": "2bjawdPowdjhTd7DaJHa6J25eitzEsHbaX2iunuj26jomdxyThzCH9XuM6xCa4PMpNyKgSidbAQwSuT7m4fCfjpb",
  "key44": "3jprk16CZ4KJMXCpm2xaQWszWh9yfiQ6DUHhdAi29w3mX7tgCnGVwEZK6a2cGAvzuZue93ZtZ4Pv8fpS6GZ44ZT5",
  "key45": "66Q4KaNdymcvNY8viHzNbc6u4k3Q1gAgmMfyb1KBYTeZAtWPe4UwsJ2Fn6GnxmDsdj7dLEBHP4Ajmo24XX4zZu4",
  "key46": "3775jtSHyyzwWuVsihqhVCMQVFTGb1SsbLe1sR1U39tovL5iaLPtU564jMFvGLbR3myhA4zfSWxDKwmpchck3m34",
  "key47": "uBrLziNSRPuwUqCgNpKjvvrhtojdvzZozz1CAobDzmjjExHAJy8KMnLXaofC1NnznDUXaSkRjvbhYvsowrHRPmw",
  "key48": "4mnyxs7kXN4ZuBy6ZjbB6whvxsL33eWjZSSwKfKCvGd1Y12Wgx2DVfuxoBBkHcrVk61yBU7NWZx1R5HQSzAuC9Mk"
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
