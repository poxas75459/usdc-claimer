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
    "3dMe5ZtNtKY4g7YL5hCj47Mrw9jB1CxT87euN7GJHbxDgzss3gzQko6yhXLgbCnX84WxZbs64wWESuVF231Qyv6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEwuARkCY7SPZV6MrYi6fnmMyKWLFS63w1KFHbgPZT5cuqNNiAQSdotqFC2rUMquAKRMhRywKNrLYH2TCdf3BAo",
  "key1": "88nvjLUfzCXx6mz8GQ1ge2EMuL1iKX2fM4pzyrX14XAgjtDXtv9AMnj9kbSvPBAVamfb6ZHkAD9dBk3HnoWgp3E",
  "key2": "3As5B84qcn9TJkZrYLXN5yQTQbdUWSTREzugKviCpgnmCFn1iF2YiwkqWP6Y5oi2bRSXqQnCTfAvJTQryc5xRh1z",
  "key3": "2gSW4XTUmicjaJHfeLeyaxheih9FFTEThswwkhsCvXe4CHWzfDaSAHcjBbxFdPKXnX9Ahu9cNRdSHxnV2EfMx8jA",
  "key4": "kta4Qhu1CzsWzYwTGd1B2YkkU61QztmJPeMvtBaR767RKZWYR99xHfDzTWJWRvbbYsYSZaLhu2jxz9QLgwHYVMK",
  "key5": "373zBfddfhpEA1aXxosV8KSJoDM94bybWuYyY818HSm8KzV2jREh45W3UYqGqeRzUZBNgpWJ2SGkrBSpp1QiQ8oA",
  "key6": "5CCXUQbmeVqP1LRD2YPG5EGpYJrJvoVN9nR2dSwSLTedWW2XT2WBWy1rje8bRV8QYCzvXzHLwDWHsBHpVKTzwxw6",
  "key7": "5PUjrQitQQWXWNcKhuC2uRCuH83w5dvqfPnUyhH3YN9zqdgQseUKUkwX2grLVhMNFL5QAbwTVfTSswkvrRPzFCJa",
  "key8": "4HvKeAqeToptZwYfuFb9M1gMUt6aMEgfcV85FxePmfjNBWYCjF33rTfPWXRAKigdD61heCzzyh45hzHKs3VzwxZx",
  "key9": "5k6r2tjH45mNaN6GGWrb9XFfnVcfnoEahR7v8AWf979YUQE8Mj65nxK1aQxavRyQ8ErfyKfDrBcoR51rzP1G2QjR",
  "key10": "4Ty4e97a6fsTEkMddEEZ9cEgQ6wVeu9FUFKgvRWSdmRkw7igB9WtN8rEtVitJKvxH2EnD5LJ4JzJvLwtuV8uBmcr",
  "key11": "4FUjDSacQXwUJBEZBGwXiETujd8ehQwZ1gSkBDgdASaqeS5yhRzBTAQybAMyknnqgpjV9XjD8BZFiBGNaYPZKazP",
  "key12": "2tqSeiHEDzQ44fn58pFPqt4Lm3utzKmq5hAyseydhfwGiyikQBkrrEmPAgz4o14Pad3gv7ySvCuq8MMBtFysmeYp",
  "key13": "2kYde8yKqkP3Bn23V8aLVzi67QW3NeL1mw44i3txqgMFeevktPVYN9fE5AmfdBm644ASphF9PynBypwQSdGQ58E8",
  "key14": "2LrSUendd77p1n8iZ1Cd5ePgjqENXfoxFiKvXautbj57xNWSL91WENSFZDrJPC4ftAHftnvCrvXihhLYNRYrgyfK",
  "key15": "5ieKscAJRuZ94Wrcdqs63VdsV8hBG8CzRZUeuuug6rKpc3BBPyhPfBsGBzxDhmm75gG1MxwWT52bfwFCj1R3phVc",
  "key16": "3Gnw8zFfo1TsGcv2KftJxijHayHJJQYkRmcQBQv1QApMG25MXj5SBhEQpQwzLu6s93GdTxvqMEtNS98L19gEwRLt",
  "key17": "2dpZnwgYKfEz2nFCZCivQAqrihfwepokQGBqpaaM9wYYjcT4QBV6HnL798n6ocpw47YErse23c7C8Q9hepBTTN9X",
  "key18": "5baV8qrMbV4jXVF2riFQ3ZkN1o4tRrYZM8vrR2J9ugWyAJsA2bXa2bGsYQ1pnxxQLKsk5MqW6fXnabDhdomEbgD5",
  "key19": "2mKyZvbAAgmiwsjS8YZc7reCzsKVZ9SfCj8zSKYrWM1XzvNi71a19uoYUTPJGrddrPfW8JcSjXgWMcYBYpR8gxiR",
  "key20": "5J6FkqQdsBC65quS57kVhDkQG31yP6T7N4NxSzrQJnpWGjMCYaUuto2Sp2sjLazPyV71fpBvqZiFmSmACynngjyz",
  "key21": "2qLFZJuurWJCNMU5C1P4PaXXAfosmcJzzXa3k1MuQAPMs1rPuMza3M6uxFt5mPYERQG8YMaagACStjhNUSDLTrjy",
  "key22": "3J7d7vXGdPuGstinNVEn3jPYebCKDuqBxYx5HJBAu45KaWk2VTwQvcRask7cWdYCebrFeFrqysUyteoLGdA8npJN",
  "key23": "2saVVK1AEiA7X8upfHZDqp5FCzX5u9ELZXWXezAVD6P1dKockQSE3XP4SVKPYJcHzMGBTcm4t3hHicoAqwVncmj2",
  "key24": "5T4rZBz1doXv8QNE8nSPYjUCXrgzSNqit3geMEEEXew8cVErhqfPDcBi1bj5VyZWaX9CA2gjVuEX9Sjz2mcdebLQ",
  "key25": "2k4eBXsNRdtkEcwN371eSA6RX4du2RrWGXMirnhfevYVK3TPmPwxVKWN4t3URuq2ysezSaogDyPhM2TeTKib9bb3",
  "key26": "3XzYpSvCeFacJj3Zx8Zu4tt1qFmmMdD4ZaBEaLhGGKNzWnQvXmRT2DHBeuFiBkVivdDYomW9LL215Gu6a2iHRYzg",
  "key27": "xVn7gKxuAUyL5Zsu7etjmZ5xfUuenuH26AQGL81VguG93oHeibRWkp6g7KJnP3eeJnfWK5T5Y6GPeXwcGtayx96",
  "key28": "5uxJ9WngALLP6JaWFnGv7rjnrJBEgR8BvDd2L7MdYGe6KhuJrKjzEzXDVNxQyCiA2LXbR2C3SXh7m5Ve7H3eRzfL",
  "key29": "4zJYXESirKGetL6LTvs1HCy7De3kphu7jpbPvfJ4pRUYyDL9JvMoLrVZDyopuf5YztgRRdqpjBPtNyTPzRiiqUV9",
  "key30": "4dtkudTmPr99krs4kQ3VUZAZcdsJPx1gezT12zu1ZmnJdP4uHst5xwVXZdc9GAzJmw73J7oUc52t8AqaZ6H47iWD",
  "key31": "2f69pyfbXMEoMNazdLDcGuQwu6bWDDap9Kx3RHMZLsCTb7Kj6dTQjUS9crVSRymstcvFN8LWFzAJjLK7RHQHeHoh",
  "key32": "3CyaFrDhWPbKkqwzoU5yeWhaq6pwdY2UDmiXZcNqJftcW7hzNLBB2fuD4oMwd4bHUKVwrokgT77NheeTnP4A61ux",
  "key33": "x5VpLmY4Rg2V13cL2hesVGith4MbKkPf76FZDtBhueezrgvfrRQhLyUVj2kN1v6WxG3iPhdgaKnzsvp2MmJKp4q",
  "key34": "38MLy9eh9sGQ1MBD6qnVLxtRT1fz8xFnFF3DHQsNj1yr1pSvfY2K3RKVCJN4VUPBM6XZpN72yhrDPyL2mot3i5fs",
  "key35": "5y31Rsbq7KrKmbxdVP8gAvuxdv2kkVXWtFZJKxxMSbQ35pdWxAXRpmJPyKEcATPAob1A1mszvuHQ9DsYr366TggD",
  "key36": "5E82QHJjL2xoVgfLDZXY1LYxSSN5vQ4vmjTWnB7Fx9hPjrHn3HfaNKSUijocy5pPevVN3EEvggTdGmaHXijCazb1",
  "key37": "qCQTj1X1R2TJh4PWe7BgPKut1nKieBDn4KFiwKSE6jy1SHETz34BZSwn6jGfzbx1yNKCuyJ2rhv1tBkhKVtU4cA",
  "key38": "58o4whZfcAnvcdh3JwtSXDX1P9mo3nYegL5womBa2UDZ2Nys9MWXZyYZTRNiYo7b5odriqjtBr3XXQ7LAvFMWSCM",
  "key39": "3W8ypUWapUDLj35rzUxV3rUqZTyF1ZF7AyBk9G43rdds7noEp5xz2UYHeTdmsMCu8vgyQLMZ4x2v6M4KFnUDVYbu",
  "key40": "63qxPrvSWYt6DwUzFVG6wozPK3tcYp5jNqzFBAbyMcz6d77npWu6WiYFe4G3kZeTR93evmC14s3j84WkBtPKwVrf",
  "key41": "5vfVp4b2ncPnkxhuJfSQJgE57cNFkzhNYSvgZ9MQfbhfAJpari56rqmYymnNVjr4nVZmWETKY5mqZ3ye1RktS9Rs",
  "key42": "3h8CxAPBhx1RfMVg1C7EoAhdtCffyzcjrfBKWr1HdeGtJAsYzH5hHE4CGgDhzRPxU118Spv3WQtXvuTwDAxGok2Y",
  "key43": "2cbqk99ZyMn71yaiPHGkdJFY5YNCh1iMiWBtJPXnZBdsdUEZrsGnugiRhTZiHFutdsyNVaMXHD6XkDLd8V7L7y5g",
  "key44": "3rgoomGeMPEurwkYxo6BZc36aiCBd3UCpi8ZsakCuWjMAWhKNMfNxHmYLfkSuiy3AaUArjCRYmn1EjaADjZC2Hgs",
  "key45": "5NztV5QoibC6wQwxAm3mpmRoqJgjAp6sP1RLfqd5SKwmkJCUZUPJToGpFrpjmQfZFa5URSfm7Dep33UvPGhqHpVq",
  "key46": "3dEUqPchEicACHX6dvSksHfoKyhaZDzc4Vcs8xXVmzy1KSCtXC84TawRYhb7ZxAduw9h6dFqzFbQB44Aj6XiiFMa",
  "key47": "9vZzEDyDpDv6JBJ5GmJp6LrxGYeSYZZiDfD2BDaQotPDB58aFmykcPnTeqcPqQfi1rkzzqzDHibcpDLToY2Dyko",
  "key48": "3qGD41rLzBBT37Vg8JpKqpo3BkMjvd5o1AMviPGN13h6sMfzBopzbYffHqZQCPwGC9wQ2gdRiEY7QTF7hzh1PSno",
  "key49": "h7qz4b9myZUFZLR3AsMrijcVcsXjDm53rC7BdFwLa6L1B3CTc5kXeWGswWXRZpCePz2NC8brPwv6wM8LcQsTu9M"
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
