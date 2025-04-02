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
    "42qs3WmxZQr4xu4Vd5VATrLZoxHxXfuUEQ4a9Ng7zC8w8uPSHha23UHj3DJdjYvsstecwGsWe7GxBiWLmd418v5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bd8Gwjn4Jfr6eFbHuwxfvyrDvJ6HbXTkaJDAedhPomcQiZKzdRZYjDW5Fc7j9BvSpeh5t7AtGN9LkT2jz7pbV4z",
  "key1": "2pz1dG4ctbAcZEaSqUiQVwt7Z45MFLokcdgV6JeXgvjTqBpf8ZBsKdmqe5PEPCEgGsb6k9kD5XoCJWDoVSuqgJDt",
  "key2": "2ssmZbvzx6Xox6CVvBHHdy1u2vJJEWnqccZndDRoB258HqRtjVU2y6Enx7n6Xc17Wt5jM4b16ZoGZ3n2PSYHHbg1",
  "key3": "5yJZiMyMqzj95bUfggjokxji7V5vLASmxGqTc2ineTa9LJS8R9deoonTZku4pJeQWSxXvD8SqDNFxBGcm2oWNDch",
  "key4": "77txn5JmcbyRbKaWoeQ4tPHyjUEbET2xqGqhMbxKbdSQR5R5iS8tE2EUo8VRdUWu1e4ndrvfSqHPLseTZF74ctV",
  "key5": "3TABC4mwvY9u1cft8ALPUPwnxCGgxzhw5HMJ6m6yVJHEMTT4DFjiqEvRdXZeMP46BBY8fwUAfazZGidTuadRi61o",
  "key6": "2ACgnK8Uwf4UcrYTv3h1rgULr95xGpT2AYzBHEeEifQQ1Yh2ukJCU91me1ue4iu9baf5qdhdx8HUksxqSTf1Um7j",
  "key7": "wHzs73tBHizyUNaM8W7Z92XzEHtVWpu87xGkndDjpPPknhRpdJBhBYu9pL4XpVKgTSK6AFG4bb7n4pRAkWwoWAS",
  "key8": "3Y67ekEDgFwrjW5GATXqHYVw31B37wZ7pQUL1RvE2jn7S28BiUhuXh5qYpxn4ehys5cVaMfYqwujyPHj7h7B8Yy5",
  "key9": "4QhWs48QPjypYeDPr4qMr3BUyC2Fb7qgTK1jV5Mzo1dpi97yhuwAKHmvbUWZxcWmgvwjpXGxJpgwWpZbYr41wxoj",
  "key10": "4W7HzFZTC9d2aAmViC544ALNYPzQr51jmynwBQ2uJNBVdDpmogdYPPp47axHzQkmbsjhh7NZoVQECLXAHwxoG62c",
  "key11": "33fxs2Mj2SFcx2DNiuYNv7WPaWH4ain5gFTp9k36wzFMHn5oQLMw9LsDrsyQkdjJLCN7u2CNLZgARtiGApxkveAR",
  "key12": "3s7V4dMXWAm61xFVSzgHj32McgbtZcjkcF8MY8iKxoG6frEoj8pev6mYjQRU9CmpU29KAPibE2cVTQcassXwJeqe",
  "key13": "23AcFX4Q4XMDGyEsxPwzJBP11wxoJB7jdrUCqc4Agv297MLw14rrYhNqYxWAcnWGVtcmumUwQK5PWxFLmkVKKMeQ",
  "key14": "21H8cfKwhtrQvSxXUNEJ7YEXWvtD6SrL9D66xL6ipr6B2QRyEqpfVRpC73VKUbbEKxnEPA1YzVetiCDLSDATJqTT",
  "key15": "4FsPdHnjFU8PQx8WbzEZcTxm4rphHYN4zaAEp8CrVnMjCGuVAwNaMND89yT7uNL6aozBejhDVriEn4pndqH8ahqL",
  "key16": "2KnkNS1gRJ3UYmvpokoRFWrWRcnKm89NbpnoEYpdrkuo4VSPeAtTHUahTM14meWyshiY524NmMfSyMUYHmNX1uxc",
  "key17": "2yQhZw2zUBLoVaniWUTPXydfsdzn4JUVHtgv6VCijDtLqaSnWJFNjNhnhXp9ehXPEf6oxgDt4eKt15A8phqU8y19",
  "key18": "2dPbgU1UZ6TnSnwUCnbYnUxmPoqV6ejKK8FM35Ydr3n4uV3MhBSDyRvqM1aeyq6JAyCQkH3raLUEPipVwrJKKByR",
  "key19": "egyLGdZ2bZ3TAZ3R4KhLyY8TxguCNASLLK3dFpoBGX6R25Qt2Tu7ootekDTa7UdWUtaextAMvETvid8dHFToJvW",
  "key20": "4F96BfBavsoSELo21zVbg9GVBxQ2fENHJp8khXbUqR5hD3DvuY5mBGPeysvVQ7NTYcmCu2FeQxA5UmwFVFctBFpS",
  "key21": "48QZFYgXv4biEKKsm1N23pvbf7Y36JwAKmo1CXfgA3o6hFFZ5GLFStx1QjkzsCmv6EnogZzeNr7XfRZdBMT8qtKi",
  "key22": "FsYLW2fcdqbnY5mCKxo6zRmk8vZRUv76xoFJRj2dcrRhdgoiRhgmWSEpA3eKS664gYJx5Y4sJ6da8MqqNXnPd4H",
  "key23": "Q4vGoTm1n5xpmv9PYHLrJdsVVgXKrzraSTm6MtovLEuJ1M8xXSZN7jpgibSfx67f2WLBYHZjD4yAS8pazTZ7R62",
  "key24": "2P4PfFFuhNeDRh43zSrneCPZE3JwAdjcTMisnLr3JQfo8g4oFDQRY5L2FWWEDQkUioGRvkMwsvdZDkfqjGe35JHs",
  "key25": "4qu9kJ69pVsRiaPoC9hL4WAJvcfHvBHofEBxNzbstFJbDq7jLUmupBenYNHwYuPRaQJ7LkasBwYMSNDtZQYL3gHF",
  "key26": "5vhb1A2nsUa4hdBEPhT6KdfdkqN4g1j4YGNjLct9sPsKh1mfaBUJoBiMkCh5wP8odbpLB9AqX4Mc6TRHvUNfvxt8",
  "key27": "49pD5nKZjfCyqDmcxhWDxAhF6VxHsvZKNpgmQgpaqDFUwXopsrVRwbiYYwDnva7oVntJymgrQPMKF1Nvt1NY1BWQ",
  "key28": "66PaDX24grv7TmyrabPoF9hFiJwiXhPsm4LSFtG9C22b4SYyFGtFZiCuGvF3erTbnRN4FZhoYRA9a84XhNaXcjvX",
  "key29": "36g6Qvbq33AGnbZJ3uomyDesSoyp9qmJxWwLkgWBQNo5CcyNvKX6A4WJN7DQEfThUXXh4CvgaVfbTMKQS9NVYD1D",
  "key30": "3nm8bt3EJExN2Rh8GmB3KEkoZNRwzhCvWyfW27tjfXdnw2VQ9xfDBe4J9xc5aXrEH4ub3RJVwx1Nexi8LetEdmEf",
  "key31": "2XnwkTjUrgRy7xdFX7aVu3gzT7AubypVSpidmoJWGnNM8mgNwjP1LezWk3TnF7RYcs6Q39kg2s1MtM5hYsqHEQjS",
  "key32": "2USVBRSE77gSDRtUHysggnmEZVDNuXzst3nn2coHnaRxtHpfXspqfEr8j5MMBTLtdBCsukRSS1aNAEttd6aLThrd",
  "key33": "5nMFV6Kng7YBJv3udn5Q4PmvUCjmbA942GMQWDnmZKPq6SRRK8nwdrZPeqYPaWnqj57PWSZ6DxbgpFYVLwjxxX89",
  "key34": "cXz7V8acSk7UkkDWdZKWJYnyZYJLZpvHqVP1aaZKApHYqMUpzQfnxLhBbxz3qeJhKMGNq5fKDfJJLS6x7B6jPMD",
  "key35": "3MXMfRGfSsGJwqjPYoRinWRHUseC5ZnMKki2QT5X3dMu2RaDRyz3MNbZpH1JRHqtyYhwMaprxB5T424Bju3Gf1y9",
  "key36": "5orc5Dv4epbuHXZiA35H2wnzYi1CDHziqYtC2XUk9wHjcBYoCmY1NG4CACcfgTSuz8Gr8BCwh2zN2HFNBhjGe8ZK",
  "key37": "FAbrQqVweRGwq669wg42ASWmMhKybngmXxNfqiTYRJxz6ERVyGkHPgtH9Lg2BVv9STjANcgLi9NDyAJMB7Pw3TE",
  "key38": "2Wpac2VJ5tXiCd8w1kiRRSEmZTGjv5ML15YFhN8ZQYBmRJmeXa9Gb4w95Ex5tjUTE8mfAMwuQFJpAUwrhvkALJRi",
  "key39": "k2GqzxFUJygaeJWid31zaGRkGxdz7oT8GC4pZ9cwRz5NH5D3ynhTmN45Js3j8cwLhqJPw58Rt6ur8LV8bs4DNnY",
  "key40": "2EinCmEtFU8wpGHkcgEEuhgvr1g2wxoDMDmmPT24T81WEisQ7wZj2fzN6SdkmHN77wAEBJWQuL87LdctJBTDi8HX",
  "key41": "2gH2vtvspKkjW92zEa3LMDfZCHsi3X3vCY6Ak4RGkAhRhS1ioLTiy52beVZmT63u8keRMSMTvssVL6ZVvDZ5sxR6",
  "key42": "3uAHfWgGmKV9G7qX7JkRd2hcwHzcsgHdEgHqQ2SW5FiHytRNPeF4ASrVkP2YLm8muVX391VVP6sUSHkx55p5j8RN",
  "key43": "366Wd4KSW8PXnCd9Gd5mu9GhpLrPdMewFxcwYrqL9E2uraj7Ddci8m3HnFVozd8xoosiVbXsiEZ4mqdViP995Nhc",
  "key44": "4agok4HD1p4tjMFVLxqwYFdKwsD7o5srxrgU5MHCJdLB7663qKViofzw6EPo2y5pAHCWovQ8f93fTT24uQNcAe7R",
  "key45": "NAbd5VjGYQMvfHtNL23r7W45bbEt4PGakcM5mdHc16JE5t9BJK2SXtxzHFbtnCGchdxCGZ8RY58MEQi1qgwK2wK",
  "key46": "4peHcxmXc23u9tpfZYSSYRWJYZScaTaFMuyNfbbbDKvvvvwX7htgKbk4w9NLS3HbQUV6EvyVq6zcVDSWMErJJbUq",
  "key47": "3Y5TTUE17dLQiAmpHDEKVMGDF971PEishJ9dTQpCqkD73K1PQ4EsBM1jzkWNT1xZbYrjsZMTCs8jqUez4aM1BwrK"
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
