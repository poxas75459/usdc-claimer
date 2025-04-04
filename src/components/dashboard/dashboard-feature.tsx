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
    "31yhvHE5hYjM6noSr6bxfL6BuJCdzRWMG1XKvsrTe878a27A2T4PvZrh9L1AhiwBN3QaSJi6Fb2QCRYHs3rbffDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r5q5oK8G4WcPo4CsJi2bJSp29fw6qfTxDfktoK3Yx4uEhBpHUdWpyCYQHnsqVfSS9o2bag2tT2BDix4xjfLyX7M",
  "key1": "mGEifoE7P66Md7jDsRmoC59HT7YhKU26seGBPQfz7g5B4BvPNtxAe19F5dZ1rgU4SZygx5dQd1Ve2hbXxZdsZdC",
  "key2": "2rXPDHJhM26icXEx2e52NodCr23EkJXJCqDq6BiCTuojkQphDXQds9rcH39JodXVnjGogBQW6cfQDw5UqbAFaCzF",
  "key3": "4wcuQMT3ytBCvcoePQmhyQin7Pkq2vnd5CVQji9wG9uhfkn3rxf54Kkw56hXxNTjd5LBG5Y5KQLJmKMfUcXDzQrQ",
  "key4": "3dA1RJFMwsCfFVSJbKhiQhjf4UpBBj7gFM2Gaq9Bhj7VNikCbebvWwAkYDaLuCQaKZ9KggKzc3iLxKqvbCiCa1GK",
  "key5": "66Dpk3zoMuFYuCw2LtqVKikaBJf4staX6EpYkv2EJ55qT9z8j5B6QcyPCzWA1t3GGpi4v736eqxqSRVXBrbwSUKf",
  "key6": "amGeXEMT3xFL9qTfSiA13jAjR4xG9SqVNkbWTqEEqStpbezFBm7gyVvjfVnD5WYhz5ouBNnmD5ygZvnuVBBE1rx",
  "key7": "2np66vNuaG1fHfakpze2TkXsqc234eCBkDbsKFpzVCUebEpaVxr8fDM48kHFrPx4tUdpoagc8UBi3KffTvwYLPMx",
  "key8": "41Tpq7TJUFSTNX35tuuAUSwErqyjfKxuSE596oJqZPrimT1HxhYHUxRfxtxM1gSHxVg6MJ1MMorTTTZowG43u6z2",
  "key9": "5KiNnHTaPgudrBYF5fpDp4WLigix9yeX4oj2JCZrZAnUCy2CDoHMz4cDjYAVNYXyDpJDuVypmK5hbHhvY5VKCfyc",
  "key10": "2uyY6yUqRK6jzYUMgEFfBy7EfRKsmyvBtbUX24ajYeaheUMHjp6ZC91J7oHL2dB5u1Kaoi3xZDsJpZr2uEK4UwYV",
  "key11": "57oFqYXkzReNKn4iQtihXWZhnzWRaKgByjQgvH4FCxj6ASHLVCYDExFGt2UqV4jb4yxrZQFUAhxwEQa7bckmyTAa",
  "key12": "4kQ8krz2Hkv5s4uAAMxfXFKpwyCb22168hvpvEWrFq224xTbBnTWPqcMXHfQ9pBnfnmE5dhmuffZc3iK2tTXwnsX",
  "key13": "4QhKD1c75VcEzQVqhD6vbTz3rFnF26rRPQ8sRMwyUPAnUzkk3wi7qedCFQkPcx58LxRyoRTi751ogmP72USrCa41",
  "key14": "4bXBNBcpWpe7Rk3CoTwofR3vXT9oy9bhrKCr2s1neKZWaDiMtKec9SPCafBbEdXySPbcNVW8WZs9z9pEsKfhrCzn",
  "key15": "2R1xtkFX4DUbEVqZS6Vk9SBx14P4uQ59fHgNwd6X5zRWdahv2nb6V8LUcWY1FxPzsei7YT88tXRnQzorCM6MR5Ry",
  "key16": "4ttVXGiU8rNTfxrN9wqzv9oXNdGym7CHhyEfrPFfGkrfpELkVgisy3eH2cB1NzzofKTF1nBVpXNGBcsm7ZDcV5kt",
  "key17": "3xTfmDwBwJKowqsC3cLJzygangS5a3ZXbQ5MDKNuHV3K1T1eXU57iYMgwJZwyE3vityL8dUgTjru5S8v8UUVnP11",
  "key18": "2zs1td3jnHYqViTh4R6TLNvCGex3Cp5JBy6XeMB2ygFts6NqsatvM8kZzdWv2HXBCXriwRbohY2cswhKmmgsc7UH",
  "key19": "8WnniEN1KeeGzkfrhoDm9Yh4fe4whs41f4jgAAkrZAYq67BggFmm5aSu1UTsv4z5YuV1G7v36fQosbMFFqjT4mX",
  "key20": "3KNfsMoix8J2kEGxhRf7jiJFu2M58pfBHEMbxfihz6vkmGmsWkgbSq47URX4aj6aBkRoZ4zNuDHsyUavqsuHof8Q",
  "key21": "3wtziAkUUdinwQRuMRdqLLYhZQ8VMXuvi4wF6bQ3z1ivP3YizMGcVNBUdmisP5knQUqDAyniwCvU9uNEcfdTeb8r",
  "key22": "4SAP2nW2vsqHBPo1LM18gKUcCTD9QgupgpDULzYBHGtvAvE18yK3KtoMKcoh9RnMMeRuovhfwBZoRBvDzpmEzDzK",
  "key23": "3hERwkCCLSxbdCUJV9wdFu8gSZsfqUS9yGYmcLc2UTQjWUBWesx2Qu7bccB9odDzAuwd4HutVBUot9qctWxrWmFr",
  "key24": "36Q554x52MPLy2TNkJc7NjzVtqSRn2z7rzqbNqvDuEd6DmdKDV4p2M7jUvZ1RvEr5kKtUK2h7BxDb1B8THAXiNq7",
  "key25": "3ETE11kTPj15CAdCMb7qGQgDpppdWYhwusXSkN3Tokv4Hn2Jj4Csuum1tzetJSV1LrQGcZyeAuUTry7ChoECdyGn",
  "key26": "44tAi3M163HVT4jwnY4Sr51fuNHwX8NZjjsDgvwc6Gfs1tvmPufGij5vyzzhCawvWaJNnywWNxsDMuwebk9dshpy",
  "key27": "5tvQtAvBZ5NixffJNMdsCMUgLroXEMpZZDkRMiwYcgmbx47d3H27JsyK51fTikgLYAJVJ6bAgo1g6q25Uvo4rxP2",
  "key28": "4pLPkzvkqzNWVfcLivmAgkGBauFiouE7kQxoBVbodjF1K3mxLaCNRN5HpqkgREinRXbULrEE5swv7zRruE6Rf6JS",
  "key29": "2cJdYTXzoWVTuR4aW9FXx7q9abs8DqJTXm8nnqeS9ACeWa9fw6nRJikNveKSvkc48Mdjhs41W3nivtN6FjZfqmUY",
  "key30": "4EULNFNw79ueVbeQK53BftUkt5aZ7hBGTfXDiPvnYno23E34jy1FoA8eTnjveNkvzgJKZsBKU5SLgcK6AZiYcRFj",
  "key31": "3N16idrnH6RSTSkKaiGwKqhqRxDQE8F89nnWkkofbaNuqhVEauU353WxryzZzBXoeSEaRG2wC4TDrBr1gpdji9Ga",
  "key32": "3FVvMjemXwQzXGk7JERV3Ww3J7nRTVovh3NNX2x5aNiRZ2Ch9v3LFhCHizuCc5MrfrhT3XFFDnZEHJAEqznQiWmz",
  "key33": "4F1GLPFhe2m25eCr7dQ3EhLgUuChEYqECVj3mf2ZEpTafTQY9kEDwxEZygjLGFZMwf6Qwvg1pWNoFAyUCswLWQVr",
  "key34": "2U4kzTcDHnTw54GtFkk8jMKUo1C3ovSAcjGtmSZcpwMXQrgxQcKN8dCcZ1iUBsL9QM4ve47dBThd4WZHumKsP7TP",
  "key35": "5x6mYcUBUK9d8P3XugFN7icDQfE26jNjYkPZ5ERJyVW3PCuCqaTgKxgC64KREytFJ4w5nZXy3EvM1mhQpmJpDewB",
  "key36": "4nJNF2y7GziA4h5TzYnesfZ9qrrkN6cVyNargupkjQZqs8uKfgHZ2QpPBeDJwJDAWQx1wY4VbFE7jAB8K941LS4g",
  "key37": "ATFBhUBMP2dTRofZNmhpgCVrsVtTwGchCbN9AwsNyNKgEKBeUjuL2ojYca5bMQZUzaFEAHzFvqH3VEvGAWDKUkP",
  "key38": "3y5FDpMhTmA8gwvpN9d6AuYbqQFn8B293G8133gKKzso7rrbEpAvmFXP2eDwtk2Js594XUJ2AXQjqzkrf9s2eFX8",
  "key39": "2ixNpBK8owipS2UuFj8RCpCsBUj1TbtHmhewKqGF85E6PL7rZwSh2quSuiRBhuto5fsRa8hQPJmgfMsva8V5V5Mg",
  "key40": "3yMVPBQjYoaCf3iU6Gv9mgaW9nh69wpEpy8FHjBNZnhXgHSzVU5R8XXHwTwdhA6FBMTbnCGACGMtYcungM9ejXtX",
  "key41": "5zMkJk5FECSjjbqCeQve1Juy76RyhajvDaJvLeU86xnP4rNC3fBjZPPxA6GG44D26YKL9ywZ5YcS1cP6TTKqkoXb",
  "key42": "2KJ4uJaReXgEKqhSbDonLpw4YRdRK5BSqmhEfqAdnxPukxxELXrncKgatwvnUpnAjefZQoFLbGGQbds9tNwzoLmt",
  "key43": "4GAhDS97ydKoyjk9hXdfQKCZtAEcCsZQpUt5bKGVBBaBYFoMHnJGvo71hiMCnSSJX6KFEdFCZE7iDxeyiWAxkyhc",
  "key44": "eHbcAYULfsR851T8AB1JSqLmEd3PssLGcgokXLGmR6edVGhFRZZBgWA3dbFueTS7uQ9bbST5PqvHbUAZbRoPjAm"
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
