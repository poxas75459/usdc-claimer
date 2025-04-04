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
    "2yVRADGuAPa2vx4483bWLLWjJ6bd3jUjajgE4SV8hwJ6mNvLfoqFgfAbC8Ns1qwhdJ4XfbjU5BBak7vZRMovd9pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGrEyAKz9q1iUEBnynZxRDFwaheUKpKF4cD8fnaaXahzRngYHwEYieqDpzgWVvvU1fztZtdj8ZfLgX7ycfttHcy",
  "key1": "373fEckKnmYAccKbV9mVdq3fhNsMk1m16sD8xUyMBUiDSGQRP4n1mDTsQVAdtN9VzxqPuJNueNXuNAFxYaZm2vjc",
  "key2": "3jqpcXr74cnXZZdem4CvA7dex7H9ihbgVGvyXUQoRRqU2LoN7RgTwF7TR7KQs5x7VQKehjttWB3MB9ZuFGCaKYRh",
  "key3": "59aN9da8p99ELMbtc1LEWfVFMo7KjHSXG1Uk599kdWBNhSkuMPjn8kMmVo6aXbAbYSYz8Ys7CY1ZXfyLhLLxwAQN",
  "key4": "5YkSZLnkAqpVXhDXHvFZJSmnzvva1wGhzCnGKTPwUefN9ouN7Pdu8mhJEp8TwtF723pxTbhz2LsjftdrNZX4LqzC",
  "key5": "29qGXox2Eez1n3FpXFFwVXcBQSYHck2z7aikkaWy4mscv5kwHeHv7NCztJi13QUMZyf64bWRwtcuB9dKGn8i9gDa",
  "key6": "4y64CQKvd4cENcecypPdzJtTmpUoFteA6CE6YkxQQ66HK2eW9ccT6dHZWRDkEqN8ib3AGEgEWxBNzQQKRXSxG3Ft",
  "key7": "2frLHBSbc4BxUzffpJz8553SPGPnnrJvAUNiXigagPKsweNgCQKgKuEgthA8rhCaFaTT8hamNUcJwkEk43mGhK2w",
  "key8": "3JJp4SVbR7716ophxbcH9HpCJHb84S2mAY7nMDbNRGQuiEiCcXgV1WWzdHPeG7qbLz3LfTSD34bo7ueJ7wQjafsb",
  "key9": "jGvh28oDbxBHxDHVCbjPvoVhkS5EVhsMjG6RaWYBa1M53DYcVQJWYDcYGmRu9wmkxzPUHSXcsezofBqfjW3ee2e",
  "key10": "6aLD6RxmG7nEfSf6TCLYD62daZpok24b8Yw7yzDsri1DFyiL1nF8z2uHivSv4tmUv84t81Vy3jBGg82pLQWrNUt",
  "key11": "mKw6hvPGyFQ8gaMXCWEtBoRXbPuH5sDDQxp5aymoFp3sMdqbgRD8aifBzhKYj6YKtWi6vu24k3wY3CsS5syvRMc",
  "key12": "4R8h3MeK8ed9qcKZqSg1J29z4skYAt5kmS6TeaG7BeQYttQZJ6EsdGZMGXvoKagSdHWJVKdtDL1oTQQBZuYkXZwP",
  "key13": "3uPxzLXRwc93H5eJrzTNL9gCUB2JoG4eKtp9QkiakpuzrQi7qDji9doZJLX64HvCruaBACcy5NFBvZnN5zYHUzPy",
  "key14": "3VfqjgYCxkBk1TcxPU8TMvPLZDq96w1YurnNmhfF9BgduZGrT3u4qWnwusLZ4N97kVcEVqw8ZWhiunyV1TFcWYmt",
  "key15": "bN4aQfaJM1kxJnEra4adtsjFttwC6NT16oCwWLDAxGPFd7VtNCG6bX35uub2R47ZmKgggev1qJKJBrtJxt3BFs3",
  "key16": "5goeu7Qv4Ktj6MPfdj5Dnug4gsZ4EQ9ByL23pbd8kM6KqcumFZSrtFCYgGU7EYuLe1a2Ky57XDpg9VVagCN7fRSR",
  "key17": "UP1J9zJeiM124bw8PLR1iXrXEPdat8ogNBJ6vT6hDVUoWN1r2itLcX1yzAo8HZPWWKyu8CiiwacZiy4z3BEZSac",
  "key18": "4Pg1s63iWGShwfoih9a7paPiYBMSQcVxtDJEYbLKLVnURAvZSp5urySZCWKhoeiMBWvxfdyGNvDYcjzDY9EN7Zek",
  "key19": "262WSNm2HiwWvc1w9X5DfWfgQWzEG8SgtkvSgHnv45tz4D37MK1PH834p7psMijxzzXVaxkzApk1Vs1iPaLLkVwa",
  "key20": "E4nChtbpZKzRg5Svwoos6hDPEJ1PCTcBmcJjk1D4s8zSQzJZfnkatqj5wi5zE1gpSxJLmdTt957hNvA3vBcDfZ4",
  "key21": "3fzZhkxe4LjqoN8UQ1HRxfVxq5sVLu1yatjhNhwePnJA5XwSoiLK1BVHvqzgrdTvYZegP6NWJXduJzkEUBtudWuF",
  "key22": "4TrFXBCS5rihaue2kP2e9N2P8f789UJAQWvvGXyoQCybvdbPhY2GRtgNrcSt2CL2yKqPgUo41jQ5mnoLa4GBUMA",
  "key23": "svMyVhSmJN19NB4rNTtHAEQQU2h5ZeMsYTXVm5zKnYvxPYxEMovGiLDBGUhNB37k9ZjFevzuncxi21Hx4oAUgiy",
  "key24": "3L7xo7uZ5q4MYTFcpzyiDDxxnPySKfQhKdiiJot9kkfeFSHM7A85MwBStk5L19pWG8ysbxuUQjzXYRC8eETm12f4",
  "key25": "2gbgQMpa7MwNL2kXLcdKB7cesGECiQk98EBDkEE4yKBE3sTwfKqgazRrf3c36pY1uc3tNocTw5Xmw7LDDyw5eSJu",
  "key26": "54jiwNzzqJLED5q7UZEnT24WvC64fTg3edbN32gCGiLsR7aqmD2Lcgd9b6m9UGLm28jDiqTcphxdBse2Z4kwqqDV",
  "key27": "2dUv3kR2HB7Q5iie5ZHdVgs9dpCKDunyoHAZ2PMpmNddGDSonKtrrhdzC3JALKsM1MwxbUeiffTYva3GRVUp2FeS",
  "key28": "xtsckBV7PAL9FRwDqKHUG74yewamWjbcnHEje8ZexwoCKHutGH4Rd2gfht6nV77rGU2EfFfCS48MVtFKhPPR86m",
  "key29": "3NnBJe3qqEAP2JrNNbLiHLAHitUyTNva3jc4toWyrYAJ94sLXuHoJgQtazFg2JWWu6Yu5Q7RwHYa3c5Yqoyopcgr",
  "key30": "4iyVTCdky1NDJKbywgdrtQYjU4i13RLf8ujKPqfiHW5CHtXfyQ47oKntLyJdFBZN5noP5GLE2dVJGRUXUZfZB9ok",
  "key31": "2hKFmFzPDyT91xfQYdb2FYVdA7ENu5iuw2YMZmHgbDr3cyyEqu96yFkijftz6NSHVHZts9CyiQGxtgRPdHfBXT7u"
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
