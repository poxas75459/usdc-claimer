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
    "5SxVhRngFYc8C9zcyvQzyt12JeiUUKpSpFnDXMmr9By4pPsn3bN66V7HWqWFmoSKpZyWJwUmo4yzA84NyzGNBGTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z38bK8pDjFux1eHACprEEb8GgYYv3tKKXGk1e1Kb3qKqcyh1k6NaZQc4naxBWA3zJMkNw5kaXuaAPJVtk6dJNjf",
  "key1": "3zrfhYNAfgBXpS8R1Mm2EDUXKQjebHx5MkqXNjXgCG7WNULbrZBEatrQQvwTDQJaXEjkDhCzFZzSLjTLLHL5aW4t",
  "key2": "5QwAaCrJpZv1BgbLhXsGLnQn8RSHiYBYUUsDHn5PrhEkc4d34vU6mhTUaLdmhc6Hfb4UTS35W17ibkB6JoairZSc",
  "key3": "3USPpae94Z3BQfJpEDVkNTtr6xbApiKQdF1XGVo4HfFfrGRvCY1mQ24EeqihmHyes8gVHTSjdrATbHzX73Mj39PK",
  "key4": "3JGiR2kzmP69Xjk28kBWi94Bd7wp9yz2rqt8AwWBLeR268N2ibpxt9ZDXTP9p8AXvZxBQUh83hQRtnxDZjDHEraQ",
  "key5": "44xv8CjEqbRKD1MrCxP95sGEVxrqyCGrsjgvr93pwhMtAehT7LjLUu3kPULGPpvR63gL4HgdcSq6bjLFgbMQT9J1",
  "key6": "ptdM48RhErSDTkFQnubXRuDGSh5fgJutUdJptJaNLfEcMPrqMmq2bapJjY8BBVYhdKbwRWe7a6vdgkqbuVVLnvA",
  "key7": "5jPCNJPUSTXDx5iTFPvycoHB533BaStk2sFUiAPx2MjanUwqybewDtDz2QCdiHxEV3JeBPzznUmmAPpkcGKHzDzT",
  "key8": "2nrB3o2y6M5mSYea7XEWQgu2CP4LpFCwzKZ7SngjK4i9KQ1fdAcr38yfuLjfguWwhpKMavQ3ovdTfSNEhEa832H2",
  "key9": "26mbZZtgeqQ7ryX3j6TrUgUMucDYmNpwtfJUfigPjAqQs7zd3UNKyFNY4tkhaJpbv7PimrwmVqhWAcBuP6AwnY3f",
  "key10": "5tdt1FW5cT1fbSKi1ERoAyc5XCJxiAZSHdbYx7PtyTGCienXtQa9XGZcnZRoKxEwt7nmEUXoaThRrg28wGZekH3U",
  "key11": "2Ue2fogGCd9KpXYHiPvLDrVj4iWLYBKcfwGrSKek8LxBUkFBKhQkpMMASEHagtmok7Ud1vtGGrt266JAazGnaqxL",
  "key12": "W86epb7yyPiPPecWMG8HhMA3qeibJjTkyvEexDK1cyTWf5WAbZWwScR6YrHmyNwuHMPoX9ArYHRhNr77f6G5j7x",
  "key13": "3L7xVPDyUhVd7rwDheLQPVVF4s6MumpGoWDDuamyaWehvRm5jkYKwpegpwYiVVidFoL1Erm8q3gyXHm5DSckycyA",
  "key14": "4XhBrqpZ8kYGAwNyjn1mmZGdjwvT4S5ohinTyqDbYyFW9j68R6kzbTmSGdtwtRRoc85KRN6gtea4awE49SdC6zuU",
  "key15": "4byT5jrNGUv1qsDPFddeg8SEDyJpzhcPXZb8gxa4DN1tHf6jTtzqkxxsNrN7xQa1CFZzs3BsTvrvwJ8bZk5AFak8",
  "key16": "5buQ42GXuDYnPHCTRnHTzitJBobhi4w3b3hX9EChUVEZGbf2vgLNx7hTnMfGpvCp9swzczyPXmQMJ2UwHAPhRKgg",
  "key17": "2jsTsno8EVoTgCqRnNwucdp64hcNm2U8a4e1wntLCe4mKqNbY3Gj5GZ4FNd1v14U3Nkm5RY2YraGnin73okXytf4",
  "key18": "66nsQaFG3wP4H91SCi5GL6osoZAwk4hFEvn8B4fyaXSjAejGHiRPgZiUM46rgtEFvwXNBbnWfMvKZwXeFjhgiAFT",
  "key19": "2CbPKMjv9kinP7qQhzfNpnmT3LasPzjYYP41Lc1DDxnDR3S1R379Gh4kkZhMbAy4yEJ7FrK11nX4vqDxqTjA8Rzd",
  "key20": "3TwDAtyLEmsJeP9ZTM69PpZnxp2Up285scKkya6DRov6PZR7dFjmR1dEwcv2ct4qoHhQ5GX2nNdGwphziP8iYBgs",
  "key21": "BHvmk5nteyL6mAa4xvQfxLXtjiHYdYG1YuCvwUiNL8mUGSbwSjaN1PW5KY3g1mK6DbJ8qxLNivdpwvqj33XyiuE",
  "key22": "5FgDPNMArH57mYaVMaWpjP31A9for626WV83CdHkLxtaAZt3JQtoNynu5BiumjoySn6TSJbWVzvUHx5MsXtUGqki",
  "key23": "4WPnNvjESsL3miT6qy8YQr2Hc6VkMhd3Dh4BFw2iJhhxMKSibcfw3aY77y137tDxMd8qmjT11rTfXKwf9S5hsH9L",
  "key24": "4ZyWATazZ27UXEr49dqwsScPRq3pCsNjWhKmE23fkfc3WSUXeYcQo8EgNEqe6ViPRshMB4qmQxR5qKK8L81QFxUg",
  "key25": "5r2zvR3fECwf5TBKkevgMYLcidrhVvzm3FYawndDWN3rrNAsFxWkHmT3aRy9E5RS9YdwNGhQCiaxmTKDjeXL987",
  "key26": "2zhzxjkfMQBM7QgTWiBKUTk2cXZgyTB5vF9QZKLKfxG6dwrfTxDU6hNXqegCGVXdySMnTVmfBTxmVH8bnabL7zZB",
  "key27": "3z27as8KmCQCqEA1gNvXU2PccxNN3fsAXxV1F9ZhMK7TzRtWN3zMVXyZezo7NogpTnhMfRp9sQJg79b8UcsiU8Qn",
  "key28": "3etb9q7h4ffgJ7gYw9YVbUVpGrV8bKNUbzSCwrrsCLu3FFY5iQvxgd5ajoGmwNy9L9AJfmG9Ey56TAyaCsU5WNc7",
  "key29": "37hPfxXp12pucqkMzo4ekyzWTAZKQJBVoVzNK85sUxsR7inLpGmJyFR5KaNHFTkHuYXgTXqotNpkCUpMEH5FXcCx",
  "key30": "4stLJCMdKvrMAJCJnZqk1tfpeSsCGeoMEdNTSxcLyGYDuWHzVWBp65Y6MaaznHvAJgrvg2mGkci3DK18tx4fxVrB",
  "key31": "toQQnS45ERFntn1wMXrgjLGpsf7v5i97q7ugSKpppFFHN4indZ5S1QZVocrEozvvsyoN5EFNk48C6DXU6Kzimk6",
  "key32": "4UBZA7BjQBCCRzMxfZh552hnw3s3oNq64zU5DYRZddd5DMUPtCfoMxxydZEAJ6mywisgwFfPxaZNtFwKSHo1cUHu",
  "key33": "2d91R2EqvNNkK72CwbZ3G6LZsYReWENh694R5wisUuFMC7buKkMbMp8EDpYjLDUK1KwfXo64Xrnk1QKQJsovFuh9",
  "key34": "widuGYP5AzvgTbodGXGnmyReM5urj4qPufC2u17n7ziMDFawkHi8UyiB6gRcdxLd5t1G6kEAH8QvNXo6tcgXgCJ",
  "key35": "Vnf2k6FH5H7Na33jFovjNWsPsgrwhjKST6e2iVYto7vVQ9Vonuusbz89B1ZngCTCZ5co4YDUfHYrPtfBxTxm94W",
  "key36": "2nsdq3cTpcardXPpLBT75Y1FrVRkJ1Ksw2vvFegiBqBu51kMwyWNZ5abAc55uZHh3CHtQWreYdquzcueWLNPyPMV",
  "key37": "2qhgmPGoLQ6xEDX5NcFRLA9eoHeTVFpFB82CGDKucuH9hfV7XCeV48EJhpvnSbkxbc3k1ipqmz6TnNcnZfT6APAs",
  "key38": "v2EUzAMdJu3UpVmdKxsFaqkePJMFvQtY7kPHWwF5E2WRmc6sBk15TGMNjysZCtTNWJVCd8DPNyHkUqwLrLWdfjG",
  "key39": "4TfX1t2fUbX9s1ocLtyNqHVUbn2AYA6eV3fFaaethzL95N6Kz7vbo9Z33ZS2oRSfPEyKqTDuWJU2np1BcTZhmj5S",
  "key40": "4ca3q9M9bVppeWoVQaRMt8uxYaHwmJoQWTyRXhKACaWMcxVgV2jssw6g5Rm7cTYSvyWww9GnYVv56KofncjTd3AL",
  "key41": "2JZHozSiAJ9r7HfYQSvMZMbzWPC1w8wSGKYtTWa38sDCTA8VpbJemSr592Esc8Tw1CvJKyg4wgMMUYiafQjNYuCG",
  "key42": "3WMVdsDksig3ZCjKBJ718wDUBEjJBCNLfXRmuaWw1tx5yZvkwtiECZV7YWCYuib1iME2RQ1b7sXs1CWHU4RUF7H9",
  "key43": "4XgGdfoA7pXQX9xjn9znLdFBTVNXbU5SAZxo4wRkE3r9BsMXJn2VdWrGp8sha5AXwhsqezhMA8fPKzzdktJFoVd6",
  "key44": "6SbkAXU38Y7JcNc64QVpRstRceuQfCMQwbhfEoZepMnSMDhzGpTBaJu5oswZ3bA8j8wMKTppJvxdp9NM117f8A7",
  "key45": "RheLpdvmTX2gxWxx2X69Q2GMyxBhZkMqVyLbpsKz7jp4inETQ6sETjjJSZmQEefb72VEAgyzK31rDsKn7rH9Wod",
  "key46": "2i37aihfGuxVavGrhWDS1ameLx6kTX7X2uJ8asxA1AX5ngRzY9gioVfEQyM1Rz77UMZpPD57LCju8ReREMyBvc6B",
  "key47": "nYLGRhus8CzwDVG76onBSDKxXnDYHLrtMSMiK3dd72PiVc6Nzueqt3Lr6dmH5rt8kMPwqKfE82NGc8jRqLAeH63"
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
