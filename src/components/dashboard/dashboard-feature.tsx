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
    "uFswSyFNHX6osuBXEX81PK5tEZjdBzU5vL3NUKnZki4nucSV4NRPw9h3KQDayw7DEawvU3V96PxnKkxKFvLSUrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jStSZcixP9sveHtDETD3MPoq2znFdbkjhBva923xEPx5k7bLNECuweMihJKvZjx5hH2Vu7zBbkVKrhakPoNA1fg",
  "key1": "3eTiX8buauQmSVnohcgH4d1TKmf1JX1tQ7Vq1H3D2wsAxRJdH9toiHJDtMyxQ5z2yYVY497wBedQsX6rH4wBj3p2",
  "key2": "4MKPq2cs8MCsUeyGrgc8r8ekQ5na19C6orzzxJXsEAXy41H7fadZNdmppiWbzL7Gqy4KWrf4fvTqXgSeKAvmxx9q",
  "key3": "284SWg4ckLTizQm6zTzPmH4MZ2eRxGoXcWPSd7PB7E2RooE7h8pBX9Cnh4PuepvGHSWrv8GjccfsnkwKfBLB96JY",
  "key4": "2g3VccrHCnRqpxSUCnzCu813va72hT9WVY9KW1NvsUtAfzs56y9VrQq8RYV7nLGZRHRFXrJPu8MzdbdyCfcYDNd5",
  "key5": "25cf4bbDWVCiFXX76r4uCrZmd1ajBvCsHgNWJo9Y6JNrA1SVQxDtQsnmmucSkrXL8biDU1DcLxw9yhECrh7LZi7J",
  "key6": "4QqWMR44a7SdKL7CicogKEPUdmgny8LJt2jB8CDcwprTcHUi947CMXUa6dtPzUtmCCqkow2fWmjhfccwkwc3Xvns",
  "key7": "2mUnKQZnMnPAwdkoHuT7Z8zVya4FCv6SEKfyjGVBw98Vc7ij8d68zwiwSKJeLeuAPpdBrHaTCxMXugZxfN77pnc1",
  "key8": "gsoHrRNyDwFcmn9oN5qGjUK4iwuuXLnUe7qEuqr4nRYoY1aXJowUaZJMHYnFAYxQFvsRbuwgr1dM3znpw7AU5U1",
  "key9": "3N5XQxFvdszjgC1KHDGocbp7XNtp1N5LHp6bxuAuRtLFYocQEBk9W8Azb1oWW5rfFt1Druj3Bi3KhqbNNHq8ub53",
  "key10": "5ajQfTLRoxPCvobJnMA2txNTyiSAYNCbgkxGFca1JEurBFjfyCwtuRJZLNG1tWEZFQQL7BpCqFjMC1YJjPepcGBo",
  "key11": "Ns27Wck6LY5BVrcQppTEm5UiwHqdMcLiRwBX8rzSybN3ZF6pp8gFLNaaJWWuc4WecArDdQJcRkUFmLx2YvoxzPh",
  "key12": "4AuBstwuxyry43KRnKvwAAaz8w6M5yKhBiNhGEKec7TE5v7LwrT4fZAp8knyMrDwLMFMUNak7VhidnJEM3Gb3dCY",
  "key13": "4gvq9kyXQgqT39eA52jCjqbx1mQdygBD7GgBNAFXTSQgyP51mkeznemrr1XS2RDXvPjLffxK3bxCrrHV7txzVreh",
  "key14": "2Uty9DNcN7mYcMtuJcXhCP8QzVAzitB7p3opTNXqsPBDj6WYoCiLDVGypgMGs8pkD7a6mceyDC339eN6ugdTNTs6",
  "key15": "qJmHn9TQvSKcPYdEEm6Ks66JKFh7D5qGPGKCqn3WKk8FhNWFMhLeWvjdeguAAPHFXxjHXqWSYSeov1ZzZAU1svA",
  "key16": "2cmdhmkF1P13Ub63Fi6VVj5NAFkrbB85rKnZPFs7dhapfYDV6yjzEeCWMK9bBoqwuPrfJr1NA3vNDLiRFKoiyUKG",
  "key17": "2at8wS9VsHSTS534JPQVCHCA1pU1fU5dqqM5EkX4E4aJUi5tkRZC5ZVu6CJkZRzBnjN3RyoYb5cJxFhpSt3TixrQ",
  "key18": "4dUpUemxqE7KzGgVghHspYN8AWxo4KFZB7brZegFMazYL1iEBA7ymcwsoih6maJXjHGSTnU2fRpTGmmjX2fPucmt",
  "key19": "369DZdJg5yXapnkjVuxETknL5xHrtJb56ZkmVaxnYxezRUxwq8sky6EhdCoqu9php2gVf5yqzt4GWLhJ8ERfFUa4",
  "key20": "3wqWQzAkohajYAJtHZbprGgMoHEeVCsfNyEPyjdX2qLNVkNJ4N6zYKaZUMarCU5Lj98UMkqeLE6AzLAjVjjaSrEM",
  "key21": "4dww9hDHFBwvLLYugciitJ3TR8GPYYSsm5YeNVWFwUxV2phQk3zJbsyJsbXhEGwf6RNTLkoGbHMYy65j9Sv8d97P",
  "key22": "24Gvg8sFMQtbqnGAZovJ6tzkCEeSY6Xk2PjfJUQVZTjvdE8mC6PeNX3qh9Du7rqCAe9euoHniGwT5BrphZXfVjEM",
  "key23": "3L2C3he27n2RxZvgbmMS8vcC2xgh6Kime3EYqzPWR1ih6aFDLHYuC3BZeYitxwBEnNsqMFXxo8C8YnnUwjQuZdQV",
  "key24": "NHdukKpBiETHiLgiGx6qSo2QDidk61ZVUZG8e3aD1Qd5eE85KrjVxMkYsVu3PHhqxPbm2p2yy5ddknZzUsWSaEZ",
  "key25": "4GCh1p9KGCVafiuCeQ6vCE6FF3T5KdgVE3f63tosBSAFn3NvVKvzZxAuPCkfiP3A9kEPKkBFd8325wVU3FR9LgbE",
  "key26": "61KVtqYWsuxBNjnmWXr2FFMAcFXFCpRqiGWcngixM1pQF4yEs56Y2L3TUbQKafYpPrt6fXVFixjRyum8S2aPr8pQ",
  "key27": "4L7RPfvGz3QJ9fTeSD4rGz86EhCgNwPm9Yb5SL9DUHzam7fBbiY5bbESAbFXGh7uA7EnR3yrzpw7hdwEakttqYnS",
  "key28": "4bJbyrToPvBCsDx1juiWDVgaaJnVSQsdSimta5gCNpPh29xTZr8KarxibxJa2ntBh4HNgJxemxY1jriURLeotN1e",
  "key29": "4SeVuqJoYaMaanweSzHzuwCPq1jLHY7RNoYq1uiehcrFnW92p1LUcejxfaUsQDRv2nBSVbSuiGChMgxdvCR3wtH9",
  "key30": "27mrduUjLSzvio3ueYfXrTF3jpkH33HUUVedb4LopCCjQBVw3DVZdCWzXmXb4o6x1JBqNUDgX54dSktfYbPCk6MU",
  "key31": "4dEbwz1hBTneUWiR6rYjuBDbfDUB3gcL2rqNnFBFroYeRttsHbr2bea3yYS83SwAxWNxCqr1mtoS3AqBaQoyRM7t",
  "key32": "2BnPPvu2X34umNNGHJ16Ae9k6sXv5pn3nsxJo4Q5fzsTh2zQDXQxr5ogG1Fb2FZYxvHRJjw4qLBW3FA2qoepyoRu",
  "key33": "4bNcCGaxkgzfpTkDHoL8PmYPPsdNv9X9MrG4vuTtuWS98dfZ7UQrGAUgor4FH54F9AwerDL78ec2xJ6defsopFzo",
  "key34": "5v7Egv2haRSegE7BrmmRwbEtPv18P2D4QF2kEiwqDMddpWNLaacAGV36ZTdgwALvLzxXAvwNFFwt132oUxXyAwKH",
  "key35": "57GsFHButC8aZMC1LsjR99XcUk76UsoFEdPTEYbMCZXwKY7w1A5dnehFhytbw5y6FyyMV9sjegjC7fmxqHzAJXtb",
  "key36": "522FwqtAZCoVh8MQZcphap4hoJE25SDforXepf1zBhKeAAvFfKvQCzdkMqjbZWm7igJwRVkxnBduwDXaqaFnJuvC",
  "key37": "5usDDcA1LkFZ9uAYhVcHAA8qbyoKWrU2LrzA1GiCQtpU7VQNujaQnpFCx38krV6CD5w4nXzJwiBBFevg3NCpx2wT",
  "key38": "sEccTNyfus2q34PkiQosA87v9zSfmfW7vFybuXiHyHYtNwMnGH8UQYDDRC9HxGUa3okMNdd1D3Qf19kLfQPMDqZ",
  "key39": "5pruSG94Y3x7gtGxkYw9NaMD7SrHbVh9jatMcCSgZcJnXRGznK45EgvQ3gbaCAtqAajVgiNwYDykgD9fmB3ea21K",
  "key40": "vC2uhEYX5u4TQxh2q4UFSTVVRbJrzUYJduk4cB2f4vk1fsrohj6LqU6pVZohoSzaaFX2ZLMbJCbCMMo5xznNPyA",
  "key41": "4owxTXe2SUoetCPr4fh4qsrgha1ZDAQA6TDRj5pvqBBXx11rj2tZ9mcW9KrAvktgYstsXgNnpD1yDsc2SgQJJXVN",
  "key42": "3XcJLZrsmTuCU4fKyXk5xDUVFxz8gWnLMe6u1yDqWcB6ztHNiEWEKbJsx34pp3EuVWGFhd1kL6GrwSewBuRHUCHQ",
  "key43": "3iNcaqPjeEYoPNk1zsDeuwPsSPfbND4aPwD7fBpCUimViiPkWXKGositz4UQhvD7aii8oTRPG4EEmj8xDXsMjSsS",
  "key44": "5aiXLi5woLdHVy3Vdgg29JNJ5MwUqtUgqpG13W6k4RKocRscZrzApfKBHRdHjUKMp53hTj2hD2eu9H6hnTtstMbK",
  "key45": "4vMwMUbhiK1GHpMBXdsWpMHHgQRUk4f53K5gQQg6kf2uudvGYAtihmrS5uRAEQSYrN9Dw3zf3YRkpWGzDEWrRmWe",
  "key46": "3fgXyDb2qzp4NZMumFzG2fiHeDurTnMoRkqqmFFmVDsKhAo2yMb6uRrcoELvvVvUC9EuUqzZrzG98ThiMTCmcNGp",
  "key47": "63FnWiJ5pDFnbHUhZoaLrQQF8VtJWJJWxp72HSQUTXVZzL8Z6YC7L1zkudTz7Np3Z5x5VJdL8nk5TiHw6rh6Q4yH"
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
