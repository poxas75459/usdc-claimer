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
    "2jeTJFjy5JPSMg9UcgCDiWJV71GmucodNva5mB85KQr4nzNvvtq37EcXdGM18KbNnfNvuTNnvssnH6j2gqmcTVJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wcv3HdyWBjJZKZt76eaMm73vMNvF3Gn8t2iv4g2iynJAT7BZQWUhjqjvPSnXVQXfJ7AUdZm9A3DhMSJXuwi59Ks",
  "key1": "26z4FmrLHuMq1weRvPyt2pAUScBAjUn9trWH1i2DGufngdLvWQp5AwazenowfMMUd5JoV7rqJ7bucH8VkPuiT4ka",
  "key2": "2yW4twWz3eSyAjF3htTNk8bih7GbRrWewgH1tvABZCS4cp4ziPMGXY35svB8GUY1tGUHEEwqnGkS4AXMrKjXkMoL",
  "key3": "2szZdVTfYuFXzCeg91gcPpMEMs56CGmagzEgvnwcE5fQwKHugP5sniknzCDuS3UaSeEdzJHAc1264oQYiDcNJm1Z",
  "key4": "2jo2xtVVhKQ8UYGHEfEFKfzK9ycTbGz4iApdQ65kV126s6cWvPMGVAwxLPBewGyhwAux6GVvkEx3feFCzgLEnJkk",
  "key5": "2QFN2Xcy5agWWWhWPWaThCnJa4Be8XGXJxhd5F4iCYoZGrkm1cFDFjjTuMAEyJ1CxZL3uwb1X5LqP7LUHiZd6zQF",
  "key6": "5tDfCDPMzMQzfjQzmpi6dWezTJxgeaHKamj7ZoaDuSGC1Xfkw1jtEruWdfwBLK7rV2NhrntDwEhbQF8j3PbmvAYW",
  "key7": "5JNicpvN3SppF3QJEZYE69veUhRK8BMk4SCAQChdokhBmzrvbsscs2eqoxRYmSD4oq6Nk2CeCxkhVMr4kfnx71nV",
  "key8": "eBJKg7yvsGrNmUTA6HEe3c6hs45HUMddmn2YukH9vrUiEW4R9eaBgGpauwGFCk6fgw8raqFoJw8uHtZewEKAkRT",
  "key9": "5DjQ8aWXD95gPsfSVGgiKwwmCMaGgNrdFBLU31Fbe3vhm8EWJDd43yctVvMrNAKaxQi1sxCXW5xDhYwEL4unN4St",
  "key10": "8w8mUjEaDvkXArigmasekZ5QmL4ob66Conxum3cmesmq5k189Twq1RdFEoXAb9gVCKQCpUp1exCMCahBXGgX3fB",
  "key11": "31fdeCGZRGkZrz7z18EThkLcKjU92DMKZ98Gagv19dAg7xGhaBsPDWLjH2DXhqGnZtz3cDQxjGhn1LXLhJu5ifCU",
  "key12": "2GZdYNpnozrFrkBFN4T3AioYmhtc6AtzLChMf2ajzFKhNUgLdNLq22wXigecd9WbELcAtkfWq6uAVRFZPJ8ZH6qE",
  "key13": "397AiMSV9MExTvqZP2QYJaW8m49pGCjDcfrMQegVK5Tbe8fKgK6wBLqYDGUdf3eh5mik4Vp92yrwbh9hmrLtnAUw",
  "key14": "3prxXJPFs4DVoAqtG623KNTWiTZmWogg4yYamNXpGonZHzinfWpwUbaRf58VYc8VHuxZySezk7WV9LSCXmer65Ny",
  "key15": "5dFbuE8fiFdwrBQrw5AeKHLjUUNvJU8Ep8kT9GFC78xVJTBsseyKPahL9HPJaBBHTKEDVi1SAtS4LA4MgDHfZiy9",
  "key16": "2yGf4MeCo4UzvVyHCWdYXf7aCCJDzZzTMBsTAkSdN7FaX6pG3JzmZMWMXJt9EAnvf4XzMSLLvDBfoPM6UL8ocN3c",
  "key17": "3P8KaE1hQmU52zAZfRbkvdRsiaMrfCp5tyYbgw6Rc5QmAhiKPsozHp7Ec6AWSLrKo8Gru13RzuYFVgGTyCQqMAwU",
  "key18": "5dPb3adNa3nJQZ7eo9ayJxgBxWgww1CEkUcVig5JW9ht7GXwSwUDguBKfEhg2L7nCAUuZdAjUu7D4Hc4KAqeu4WW",
  "key19": "3wGZzoEo8fkL2knJZ6wYXy9p9kapoppqqkD1TG9sugJDyZwtnSSoNkjNSPskfZ9wshNKkTo4N2MA45feFyjTGNXp",
  "key20": "zKNmzsZPcfSK96yuLfpALkuqCuRJQLF1DUKyGmejyZxAaqtenqLMP7v3X8RQZ7E42MicPk1hHJytGhqpDgdvMdk",
  "key21": "AB283viaCct6tJ2dy6TqM7ddPAJwBNvjgpreyzEJzh2QzoGq7xWtmH1RjHjA8wwQCWy6H3ZAqG45oMQnJ45Yn7A",
  "key22": "4WpGCVj5dfkMHJdGGyi7GwJujFfXTTipf9x9VA2TGXrKftgs3JrqYYbV3Xgp6ZCJJzHHLTJv27P8q1RfwpSTR5GJ",
  "key23": "5X7U1DSDsnpwdLEjbCngq7z5LDyjRgpDPJPGhHTvEMuwUNQTo25nhGgZms2yvSxggu4ewmQi33pj91p7bLKzGdN2",
  "key24": "2Qitm6gd39Xwj8tk4YFtVPF2R1P75Gmo3cwtqMPKP8qnds6tdZ5WjokweXFWTsa8kafFuVuCveMZkAULXBXNmohD",
  "key25": "5oagFcLLPhUZNc8KKmsUXpUNX8RjHC6RCvaC8xMwyWvta5UmPffbFuz9dztitz54uGHUK7gRoAybS81qhg7U954Q",
  "key26": "M9oG9Gy8jCg23rqbFi1Zt5sutQ2J6RBaicgdApMdM3yY4eqXFA9ZGYgdjiyZTDmfpqiiXeYjM2h8nJGjb74rTh4",
  "key27": "2rDj2wS859BKEhbtqkjxLyEmBZYno36HkLaJ54xFxYu2Ukgkp7pHg1i2BKCGsSK544y2zQrJGbWW23ZWgqz39smc",
  "key28": "56DH9ZvssqMXMGnhiLLPPWcccUefbSjTVBcFMwAS3h8qzD6YLH5RqnEN4SSFutCABnMPFwFhNiwm1JLAarUDMNy9",
  "key29": "4dU5yBuFjru8PqtxytL4g8uUMz6XCnKMgMyWL1fEUSRE7tRxqWvZASFtJswiE7BrPTsiUnSgoFCq9CfUYqMAdVuf",
  "key30": "4KxCDVoFRA9ytt4tW8a7SLw3oBpvdoafy7aHbjzxcmXpmk2fK8efcUtYTGkgVkH3k2BfDKoMpPBxC9nsAxPvQ3k7",
  "key31": "2sqs53JxpbyKKHviR2ddFV5xWNLN8hjQ1YB12853UpfEQVkvWxNrKWL9C1f3b4GpL6VAXSUBAMKLxqJbYC15RwaC",
  "key32": "VXqfiAJXfSrMydaecXnPCVaAdtYCSZ34mMU3supy2Rvg5bXNuYPsHGqNmoMnqbnGoJoncpSZ68QB3VG3fyLHMsB",
  "key33": "cyjUcqBXVFUT4pStKXCv6vC2YtbpmEAR7FAmwVdoRqYuEs4mNPMRurM9PaRJ8w7BpuHG88N1ukX1iPW96937Rn8",
  "key34": "37vXMQ5KeJx7X55pwdX8Ah5f7oPbNeTjUsidddD3zJreA79u2aXNCrKUknkobwDN54H73p16iuCDdBMddZTVXxRf",
  "key35": "zVctcCmJGETEaJpTTygD8GtZzGzsbthBpj4BGHtK2Rp6Hx724JxkdsECWfSYHUM3LECv7mdzWNTabRU349wDGwH",
  "key36": "FEM6D6XCEFDHoRad1o2vUSPKMnyeDkxBXyxFLMJueEbT4f4e29TkhuiqiQwkAirY6jepJwZzPDM935sioqpNZWM",
  "key37": "QecBi6qJ4Vg8HRX6WTBcetGbFuewGoCQyJSoGz98sLWyS4ev2U4oJCWEjFRxxZb1f5mM1ztHUnaaF1tHjRQoENx",
  "key38": "4LtX7gh2Nf5aap3qQ7WYKEETSgvB2L6gKsoytaHagVpVHM3S3LfnoG7StH5LTJxUFDuXyqt4yHxxg1KCR5y6qbPQ"
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
