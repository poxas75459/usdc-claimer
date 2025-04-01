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
    "2D6aiCjYtaMMgMJD8jUNfJGroywYuHYAYc91TDR179WWNM2FYLDS6Aq89vAPsxXueWhd3rj99MMQ21P1jaNStBXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55RBZxhvaehKT85YuPUiBCTcGCgxHgA2AWPSAHNdcAknL6J8GLPnqH6eaSoyso33NT4VJQ12MPFEA9eGrnvLEs37",
  "key1": "4mBYvkPBaHkYDLP8FYa831WDM64FNXUdG7RDNKjhNFvPCM9typmK83gHfxNa8N1vjCnUy4MShNM9oLMg6VU9oebU",
  "key2": "3gSN1cG5vn3KrCVhcQvbrQL2v1K6pBNQ4GCaQdrKgSJqauAPHBZngRgHRw162xrYvq1UJXpoq1D9W3FYvs8HA47R",
  "key3": "4Le6o1bGoPHar4HhLSo5NNqkfqLygpvYpNWn7AGLkVDmZBUp2RXp768pDeimmp3heCoXFCNaeYB2mBkivrjYVoAg",
  "key4": "2npxAsH8rkRgsAzEyqjEpQYFdF7cVgUijGuhQo67F9TRK14SmG97cesqwAtDCKF9bQ29dFgenKS9jtV4dK4wNw4C",
  "key5": "4Bw4QGY92kziMAsQkdpZyCwqf3Wrc5qFPvtxHYf9FtEcwzYZhfrBwSPcaZAtMKbaUp9RJePifvQbNA8PKCUN1qDr",
  "key6": "2sY2FtF27BTVpXXnHxiSjoYmXDWCbg6XyewKpzFg8Z2R544xSjsH7xMmtENjvQtKhCNxNufpMndwABM9BWkfVxuR",
  "key7": "48NS9DYYyGQwoLkn99UbzKnmQqAj1TYK8nQgnxKYSGR6MRRLVHohqFY7N75fjyAinrRmrpcvpLMsXhoGUXTpz8Em",
  "key8": "4VbdjTY5S4wuP12dYxFu9kZugskMuzkSFV9TBx9kNwbEQ6yTdecgYLFvRoAiRiudHfCtHpUiFAGpNbjs4ZSuWKez",
  "key9": "NFUyfUvUe8AnMZkTG7mCM9NPzpRtetnhxBjdtFzCLJHBuWSX156xzG6fgLE1R4sZVngUFnqkNUVr1NZroDcesYn",
  "key10": "31HbPFf9HV9wn9pcCyz9RB7nheSBVRU9PipKnebB75cyFX1drrCENzLniwu5qX8FTXi5feYJgFWiZc3dasEKfZv",
  "key11": "2w2GaNZdhyUPDzVVJkFGes4MC1efwiZTxfips8H6Snn63X1XBn8g9iweqB3zgGD5goUTsx2AuWu2BV8DyT1zx8c7",
  "key12": "5wCq4uS4vM3EYtNqk3z1ySSHjvKA82T8xGsCeqWj7YryHVJUfa8eSFh3ogwonEc8t4XmT6VFuDikwz8LEhZiVBMD",
  "key13": "2sa8VJpKbCt8H5MKwjr1EUC6Nckf42rtofjer13tWEYBVRiwAXWzqUgr6eoTVT5pmN1CAzeSF3o7UmJC2FDWHhGd",
  "key14": "3SWGhJPyUHnJNhBJUmdHfkNVJ2XhkewL32ieZiRRzKzkL4FN9Vj8oKMeSkmAidSJqdVRUCtRDSMbGCJTPZFcQbVC",
  "key15": "1MSkiLQC39yc56BiaEwwDravdawaMbMmiHaZDxkwycMv6f1KbMpVP7NWvSYQqxEvrGVvBGFEyRQ5xbP8pdmyfCs",
  "key16": "3r8K5EAahsJkgvuQ5VGBY5LWMfUzU3Q1vK9wTTBbpCR2MA5L9avtDWqtmd2B1REu7SvG8KRY18x4kiSoFk5bBSrJ",
  "key17": "3pZzLPpt4juJitn7TT4k9dEoCxsdmrNm68WaPvGqWZMA3K3cvvNWojBrYqRBtyUbNPPVcyNfPjSjbWe3exQ35RbA",
  "key18": "4fmgfKfXKBJU3TVFj5Fu6E4oYvN7LgvWpzGjggrLDnkcE8xmR1J86XfQc77cQMQvkPJGruyRo41enc4tMidU1AyM",
  "key19": "Sup7yhLXamq8Cq1zRaEKGhGnF47GYHq9jKwZqRvowu35N7kWp3YvjNtvV6Cayc7E3wphQJRdQ1w2vsCJ6Bre4wj",
  "key20": "67ZUEEFtLMPAvUw92N6x69BgafBoHjepDodLLiEEcEeuNvxLafyEsDhXJrAzXAYArpBWSMYVuwv4FU3FBenEBHRN",
  "key21": "1S4TdvKeFCPnWvmFzqaxLEfach6JMumSTeMjNCs9HvdtJ54bCrqZ1CyeQNaYvcscGqFjtpk2mKDmtnURmo1JNFJ",
  "key22": "3hcdMdk45D6KXccHNtTseJ5r3cadvuxkpiJu318Wkc3oaTkBu5JEjAXrLKRTvhxHw3UiCSnVjVtXirajeMMXe61s",
  "key23": "5kpqypgBWUusWL28uRpR9Xzr4p1qStmeYpkAWXUfiNXjFvgDh5SbrDjzaPtgao13QMYGV2nWvwiXK5DspzEXFshy",
  "key24": "2frxWWcNnkVwSkf37fwSMdQB5JUSEZutwu5YpB5AaMPgSKr6jWLcX3AoLggBgSwnqLjVz3Rk38BwUUdsZ1ffvSqZ",
  "key25": "UgiP8nFYARPqh9dYXp9zHa5vR5MvuKpo2F6YN8znsQ9pvxmJafdFXPSxKyLbeXx12ZKdF6nrwBhgPrDrP6sEbRM",
  "key26": "P5WZHK39PU7uswkicdFwpmUYL1PHrCSsj1PEDEpKY6ktGK62jMU2qPXNw9PpGRyTApBQhiVJWeFrY8fFXgfWoDr",
  "key27": "5FpwS6E85S7UAma1iZiK1S3HkskqzR62et7zN7tqXsr9su3vQVevpAb34Uq7aVE2kTSMDa2KWjroF3rTVUhHHpQX",
  "key28": "2Ud4GmVoh6LrD732ZhLtvmS57628EuXFtNdDdpfoUgKpT8o9yUV3mbU77ar5obXxq6u9UpreUr33NZ9zrq24HxRb",
  "key29": "3j6rS4omU34iqCv1xxMx2KX4fWzWqA6hMf9MdzpDRcuUQYVb1XZ5epaRQHrShN23NAik36zPAwgwRbRJVwdpTRGG",
  "key30": "3SD8g9Q7GrNXynpW6gKLrXp2GAPLj8dKj8DjQ4QkuyZkhG4je3ufNGnhmMCmNcRJEWDJMF1FneTvKKYq193LzrNV",
  "key31": "2Zy3m6PLW6TfTWEhyTYTVPGSK6v3zusKKsfFqZy9RGs5aukxecp19MTHqaXRFcVaHmCqrkRgtsRJUvikNK4mV4D",
  "key32": "5Hkx4FidZETpPttY1L2f6eSasLbw9X9vWzDC1mmmJMQGJdJqUXNxPDDjSxaEKVLv1yPQmds8Baf8ZZUXXqn5quQX",
  "key33": "5mQRDRXsJLonifGfhomN9Tuxt215XQYdBDPE2suLvErgZEfgEyD3deW1S2gxHKStyus6T2ozCcC5chto3rCQEKFa",
  "key34": "2uMKCni9HyLbLm9SFchAAyFHbybYX4EG6TU71twerToKL8cw8rbx1WJiQNNGfrZ6jPRkWs9MWa4a8rkcsB7ZnH3E",
  "key35": "2hAhcybSqmDRiBarkwCHDQDLWF3n4WmHPCCdCLLV69G1jvZLc1FBXzM8roouPHWumxRhBXcPYogtwUC96t5JqhaB",
  "key36": "34oGeJPZtj5VwEzYDhJN3YH7pHmN6hMKU5VFowqYYi8mq2QtLs7ygJXnLZSa3mWXaEXYhgubNLHuuACXqQLMRo24",
  "key37": "3eM3QVd7PGVrfGx27tjC5ct6MCG1ZcduM7gL6mJ7t1DVTqctujB6JmJXXvS4jNqSuAjdzWEn3G4jAq65tE1DqJfW",
  "key38": "hMsmF14e9ahxHw79FrCwCgzcW5CsmqkChc3Q8ZoZARLQCZTVkF9ND3Ze6F13bJ9VvykgeQmQBGThUBvcEDrHNjk",
  "key39": "2K3y2NnuDLQdTD8Yyvgu9CHXn5JEFCG37nodNV9u7VAgYw3nhgwF8tx4NrkZx5EY6J1roaro9mL2BkSWCpx3fqA4",
  "key40": "3VHTYgwPphieM6ocb4D9ADBeZ8YHE6GAr1q6gepcaJjT2k3vx7QfsiWTSgDUkoYMiHZjVehW7CbMX598t31u41Qz",
  "key41": "5eydS7bbBSYzfx848wKxcSJcTjz2Ffmvbqo7vrtVGvuiNzKuPnFrLaPMgah8r5j8CPjtbznD4yrmZ2t9ERVLrP6M",
  "key42": "2Y6Dg4nu6tzaaB9K57xb83ddmZjMqn1dX93HZgrerArfvxuRfREBobXyhnfA7XbPGGeGt4WnnkLDZ8vLzRxRYrqr",
  "key43": "36yuhjDNQ59U7AZ5rqwWTY6dCdNoufbJ2LEEGtwJPzJxEGbuPoNwHW4nNSm53xU6LXXHXUPFYTqJkRcyvKA6wS5c",
  "key44": "3D5t8DHuTXPXdVpTUSfvUt5zvxGKcUpSsEqTwEXsXw9yxvrFzK5EzHb3AyKnnWdrVESoP1Thz1V7UtSsrbtW9v3V",
  "key45": "45BLiUxPWSNgZNYaYPXRTLRHE8zXU188qhZiRVpRTKMQTfs5HaY9LWTLkdKj3AnQSZErNWauACnWrC4NdmvUeKvG",
  "key46": "3T7qv8uXxQpa39sBP8V4QN5sbdZPasmFUZjU8B6E7bQrwRDfjqDoquNWrNFAdWu8q9t1hNvhDgeEZ7NA2KLBnUZw",
  "key47": "5Pp7FtURTJwFUXT8nwYjs9ZAJLETV8BLdRV37BJape7gLBvMfPuwo6hDFQUfChgH8wrmhJPzDUTeqJCfmWVmLqRp"
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
