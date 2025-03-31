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
    "5qnXgab8WvNKuwLaAttteUW9AHpq1BEtjRJNXGq6sf4feuAQW6AVmv3u1An9VbVPTvH3C7og2XMc4fNnmWQFDXNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N9iBfR98hv4NWEJjLhguED7cs7ozSKwxD1waUzQkt61sQZTbuoeuwpsf65nX9BjFGWYiPKcEmqCDSphhuXiqApQ",
  "key1": "5vPBpwXeZXq6WoBxCkWkhFgeUhxMKTYFc1y4wcLZrqNBWTywQbmFrG3YtzxhBYBJBz2jXctnzsyrdLYpMJFsQCea",
  "key2": "2wLyHQKK39fWgbeFLiDn1gRm1grmu34zbG8EbDgyHwC55BATA6B9bXj6TdBJMrirDfamGdEJUWbjq7xaSBdi3kcL",
  "key3": "4pbCoLPnfYtVMf3dHAKtPTg1cQvJfFkz5jYTtd6fZPw6pkpFVsZTapNJK86A9K5k33jPm89PzXFnXtwf7ZYpkrxK",
  "key4": "4sLgHDphh8tpj9NGGhHSEtQ41JEVYCxABiVLtqND6Bt7P5DQLjCnHEnPFwACNVfZ2RpQWC3V47cZGTfQ54yHqbhQ",
  "key5": "3u1UH9EyoBr5o9GgwYpg9quWSmSTq1rVjpdj9Ghgr39CYFpM5wAMf7rZ31j8iNWm7r6femVHJYPeeu6K9M8X883D",
  "key6": "2MHnPhWxUp9mLQNokBLhRpgVkr3MRLv2vuLfHPWS2X338zMjadBaCBPrUZKaAQgkGoxWrNkdZKAJts62QMFL8F6A",
  "key7": "4ER7ZwKG2ra7qHdaVsBkyLEQRGBrhpedWHoASMzvk7ZA523qxRctVm32Zbfr1mqa4D9q9xSXw4zRQt8jnGwpWY8H",
  "key8": "23s9hpZNesGkSJhm2UUujBsspi43g93LKZREk6Dkxt2Ldi8RJBZNqmorRqCtbvF5M8AwgHcXx2osKT79keUcWfTn",
  "key9": "C3GAzEhAfWhyBsVNwgpbSVEsDFjZfEyqrmy9UUnDTKBD8n2cJNYH7FVkaCrcQAqdGL4HauQE9mK4sCXKwj6M9fD",
  "key10": "5Rdoje7Bvfr3vtDaysiK2XxoBayxmB2b4ZQd5SLwCSQW2AXEuAfiLPE6HLhv5onuEJViiZV5R6MpgLc6A52WsY4t",
  "key11": "4jxn2CR6xSkUTCMxpfckr5ovsNw2BSq4TPGCxvGk8SFu3CkwBjjjLXtHUqGWBxjtBdCF35MdVZaujjZFLgebzuGq",
  "key12": "3rPR9X8m2BpwtLntpXcmxdSk5d273Bv5fKZtt6nKRZGfYNfDEub6dJ6QcTSyJd9kgEbNP2duutdHnMbNzdRVCWfE",
  "key13": "4fSczH6hwaojBGNJZWtwQCU2KYeL2Z6dKXaAVdjsAqVEgEjHFAjapPYUCx1xyFsRbFX2CHbLZ3hMQWaKiuL5s3ny",
  "key14": "4YvhmRvksz6kP8VEpY5VMJRMDuwbXbmpqecywAcCzLrLVwjUiaT3adpquf8FkRv9iCcR8uXQ8CsiPnsoJXfk1G9W",
  "key15": "2AhMG8yPZyHpLDf1qkh6yR5WUirThS7HLMKA9oiYsbBJ5sWsJjK4xPpLX9pz3dJdtpQhP6BP9TofWVfQegMrzkCG",
  "key16": "3R7PHhKAkTTUkKkNLwM3AqFpwiznjoZPYe8TEAvfhFXuBQ5DNpqvw9Cy7F9pDYkvKNEYq4DrQorC8Fj3kZBEWWHb",
  "key17": "yVFDHoPafnxsqJyyhaWv8B8nJ5C27bx4xjPayN8xaVHKXeJGhBgUGHmBRtPiQhDrCq5WuTNHCr1BG65or8514v7",
  "key18": "3xgrVA7wzyCXg5tJr9rANzQDCaxt7Hd6QFbdh8qgkgkXGL7RLiVy7g5s9HnBDiHeqctvucAoNAXi9puANNFciBar",
  "key19": "KhtKYBt7Wm1pDJSkuLju3AhuTJB2YvDPF3X3gc7WcpXmHKnN7yYfF16X3XXZDvwPMFc6BRvoB6iNJu8VmWbZs27",
  "key20": "3mK8EGyvfvteQRhcmfvVjmJnZqfGdU6Q9bsRiyZ6D8ZgYe33F4LGmiLMnAnjac5RnQns89YBq7JCS4t3y9JyKCPq",
  "key21": "3EkDWFAAivFqBbgiHWQkN9nvP4BiQE2E76F7UqCNiJGkC3UgRFDUMk2kpjgJPS4Q6DWR1NFTTCKP1Ni1gCT4Uh6d",
  "key22": "2vR23t9N2ZC8uqSkvAfAjBV1kZFUQRTjtChdbZEVXgXnBNALZqnoiLqnBsFvhRJmLV43JXkyfQFXygC6VjY7x3pq",
  "key23": "5ianVVZGQKqnbJgJauC6Ly6gXGbNc2VWEGmVkGgCvBXs2i6s55ZUdajdiiSokP4aAo3AaqJZRsJ7Mqmoh8uvDEiU",
  "key24": "4rb31NvELyTaYJNDUpFL1cExWu9Kc6AXTs6hp9XsNxQL9iJpvfeb4ZZD3NRfDUkEqMo44cSwru1fnPnUZQCYGYHG",
  "key25": "4fAyW76NFLVz83J4Wn2euy32B1URYX6PV9VXQH9RwULrCg4vn5twhB4JDvvBWLAuaErZFGv8NZtFHZPqS9m6n3zP",
  "key26": "5e3bZqPsLRa7aVWmy5tuib1y5YQCysrzxrkcje2scTw83Ydd3hFXfHGBEXkvFSE3hVLLHi6NJw8NT7VFKZKvM3Fy",
  "key27": "3tbngKVFBBb8mMUCBagXWpah799meHPfpfkwsq19vKX3xJc8SVRJypYGBFWmzRaX77CZg63Zr8PufQLKoTB1Hr1h",
  "key28": "4oxK9qM6UcdVZpmz3KUspwXbTbz9JbXoWPuiXr5rwCaVSWP44dgyo85MvUMKN8xZihqKsfCVoDXmUx69ZVvP5bXG",
  "key29": "5Au34Y9piZnoCL6jqC5pWnhp7gyjU4PWTs6FU36GjWQs1hne3XLzMTLJFQ5c2kTioat8Qf6ycVfcBvMA39bheLDC",
  "key30": "3G7Lts6388uPTuYYze6kfhppJPXuKLbFgAVG5VwCxBLgS5eqmyUQX8aFWuvaju4zmr65ueJSCZCKkSWCEoJaF1Lc",
  "key31": "349BiDVV3FbsjeSGitXVkyebEpeHT9cK8ERFs376rctRN9yXw3qKH6FdRyw5TVhbwJhegsQ2EKHuEm9bTZPgQPpT",
  "key32": "FuRYz6sVJxYbfxmVgL2zRZH9xvfgNEeKBieBfjSE3BcetakBjZvyjp49TbPdKcYwHSMJySnLK7QmKKzzeohR4T4",
  "key33": "63P3MxWQsKAoSDvtT3CjjuCnJQR4wKDYsxDHJXe2HHY9io1h9FNRJDFdEehykXpPQC19JPaJfVDhwhu35F5YeJtd",
  "key34": "275EqSZBrCBJitNxfDKoAfAz9CVamhxBff4rgPNtgw44C2AxZEFCJYFnNwLFNjyY1NGz27opzJxchQYoZBJyXxu5",
  "key35": "t7N85e1LQL5FX8ArHNnUYZjxwo4NsXFEydjyp3UE5gNr3K7Hq2NS89Sp3rtyU5WjeKqtvPNfpipzsVe2FFZrmVS",
  "key36": "3c5F7VxaVLBkUssRNEDYF7WJ11vsBYmwY86BzopsyTef42HkZGXmQseQBT1eidUjyfBvRjjoGhjJBjcYG9qrwCQF",
  "key37": "21FxpykDBMr7vvXnLyWVFSiM4zsBwmXe1qq42VtyG9QgsWsutsZd5W2niV68nxpnXRcYSDgU1NEja7wwbUPUXTnx",
  "key38": "328jTCucGFWkpSPM6rgAqPUCXnLBN3EjSBRsYNjTQfmZPcSnjtfFNeWahkzt9ecQsRcBEu9AMdWprwXovhrNbnfa",
  "key39": "gc91KvH9aUgwXHM2cAFQBF6akG5u566EzNEkzzZqQabCfPPFvST6FWnSw7vBqrheBHM4Mrd43y35Dyug8sT6ajw",
  "key40": "2yPFtau1u2WiMhDetEjUDTFaThptnsXuXBshXwTw3XJfZZ5vEQmdvhfGwHupUXf5efkZEARQuWiPcpKa4fB5pa2x",
  "key41": "4cgCwVBc5mpGuvCWjL8mghLmBBXfia2MkyouR7zsnsjtxGfytqFkxPKujQRJDhU5FeEe5V2D5izXQCnYxfUYVZtD",
  "key42": "25JqcyrCXHKFDaHv7MmJ8UJtkBjJxwvugMHdqiPZT6FwaS5mRZA81eAULKxtwywoCkBvyjvZ4hHDYfA3ds8zMshw",
  "key43": "cGAqmu8ebzZPn3aAzopzduzq3XosAgwAFMZPDnykLMPydx9uD21Ns2BNyiqPiiCuogYVHKSBpvU85U6GcJXL3fZ",
  "key44": "63csWXBW1MXjVyimsJnrpdqbbashy2v3KuSwCeEKj16vGMPJZ6jc3PNxnNNkYYsTgVGKTu2z3CCJmWGKo5x6j52e",
  "key45": "4q2YSgwfmUUdjGwpPUxabzE89s8iHz9BGVBkSoL7g1p7YXijyNww7Ze59yet4HPy3HkSubuxPVn57Lta9XuF41fb",
  "key46": "457UmC3uGHV8bvfj6uJkYAPMdYG19oDL8U72yz3KEwdc37KxiHRygJTAMSf868G2n1oTppdyHEpsNKpx8HYHQT1c"
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
