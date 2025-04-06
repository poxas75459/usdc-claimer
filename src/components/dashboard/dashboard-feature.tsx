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
    "4XcQygA8uo4ngbhksQfSbuwcJAigRrMWLAh9AzeCQGUuXwyFCFLnVBxykiNPhEETqX8GqsqhMhNwhyRyj2WtZuin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqhrkREuM7XLiFt2ypYVEFoibV3ki7CVSbWtXpHEwCunrUMxUArHdogFmiiMiCBoCpccKco4Ku2mYgM5311pZw2",
  "key1": "5ZMzw9SDgPW5WibBFbsZQc25yyuZgNj2c7TSGzMgFiXTh3nxEnf6aS1ktPaqwQmvrwJrjyWtweGhD1iZovi2Cbcx",
  "key2": "64pDWKEzwo2CPK53KYK9Fs9TnVq4QCgvUZVt54Msxe3bdW3JdWUj5syyaLLHjJQ5ZFtUyqRbdX3UkwyFiptFLPV",
  "key3": "2xeZqL1K7vEcxF98Vo1Gr6ZjAUgvZtgUxSxJKqUSW64PvjaccPsC8gQ4vk3Fya7MqWhnSCewsR3Sv929ucZtXcfw",
  "key4": "4dVQphxnV8PW5dJEHXRZCeqzE6Zu6d3LWaTxHioini4Y8Cs217mw5Ttspeqi2xLr4nC8fcwCKCEAREGsfRpLQHES",
  "key5": "fjbgEBbmQwRBs9xkshDY7bh8YFjXDZtqNaLWP87M3gELQ8zNRt9KodLea1pXfFinHaNpBXLxy3HBP3vZMzJZN2N",
  "key6": "3kfShUEcodjsNvM7MzYW4pTbnNkK6ERve7MzLMxMdG32JJNmXYJKt7K9EH139TYDiZ3Rtsc6sCJk7SdNUdcpmMNR",
  "key7": "5yx4oCJLrLbsDU7y3cwETJY21hnYyP1zpZcE3WnTMZLABBDn5Eyvhat3oeUZ6gYnfEzdkUdKFmNe5bDYGL2UDAW1",
  "key8": "3xSJzrspSuwLUaY23MucUPPbJnNkWzdZWKGr3GVg1bppZvqpN8FM9T7y2F8DZ5pRmQqmj6qk76wiuWtnDJGfaKn3",
  "key9": "2tCZRePw6uEWRBWZga5TwF7TSRQCNoD59h6xBLsCgRnxaCK36SKpPwuvuipnngoWLRG8325eriMoYRnPi3yt7P2J",
  "key10": "4QD7fRRuAxjcQMrup3knNG81F3YGVZhv4hjTDx4HYLckQK7jhqFFAkBMewU17Yqe7gTd2zWfsem4kSS2JnWste1L",
  "key11": "5SfQyDHTJfbbVtBwgZJasXwaKe2Q2qvn26zd7846BN1Xw77uFvJQWsEfRmS298PXBmWY2UJkuKimLEB5RSHpfrCC",
  "key12": "21r6YPXUShUxteYS5qxwda5Gf5MTxW6WmmsQA9TWs5USEYNbmiqzLmLUCaVTaA7Tr9ugA4uPT9BsfsTJZtFzojW4",
  "key13": "4F4s9QEa6pEwoDRK99EDkAjaWz61xVNqGoaNC5tasSuLDY2mXt2c3oLAcjHhPZygmtt3J2crrnBXZeXtAU3kjAbp",
  "key14": "22jiAVZY5MDwdfwnGzFUGZkiE9Yy21BJVAUfyqMMSsDhwqoCuZgzfCEuAHSXXP8XJkoqb89y4FNkpZeqsa4Gpi8X",
  "key15": "5fg41pRZq6RXDZDd5jke9KWbEYfhrpNaDVHe97awxAsAzeQV8J8PrXzvb2ukrYkyDzHWVtwk41bEcVBbNSxQqyXg",
  "key16": "3nRgVMNrLRMTAuL2EHNnQQLUcH38NsVPVy59cRSYFSaumCPhv2E6rBxwexpigg4coZizSPeS6AqkD7f1wa22ViHy",
  "key17": "2nMDdjpw6aN64vVcrkaGkBQqrPLerp76AWE7qceS2VDQeAGtq7z9ejQMJ66x5NnAx5zQd8Yt7BuncuXysQ7HjMgH",
  "key18": "4jUSp6zGvLVUzUjG6ryRgubG79kfx8b3ezNARDFtgMxwUYiDepuweZm7SFf6RTRXnxd7RC7wJSpUwzerTk7h4Kef",
  "key19": "2UAAdN1rgp6fKzE6QVjn5F36bXDyEzVrHoWQ2Tqcm66yhbvJkJTNYghHTvHHS1zqjMatsAwV6Q9JAgcTirMzdynw",
  "key20": "46Cd1xosdrvPTNdny6RMQxA74qUoTWheFseAegkXPfmkFG6wqzMsNco5RZK9JptvcioZGY8uHnEKaJwsXURkPrLS",
  "key21": "2iSqj7Coi4tP3x4UeMNWqMk6YdNzkSTpgnKCbP33YFC69bxvnHYfuVSiGtak1iYWmNgfdpNoTT3YdNDWd8bunUki",
  "key22": "5Dj1S64Vcebu9GoRgUttXWBpKyVkCjpyHzG23u3SAdmWP3jafs46LhAR39Fworw1nWnG8nUhdYWyKutnzmnGn1Vp",
  "key23": "4x1mnLR2ZWFAKstNiPqNcoNPXCxaJXQre8oY5p77pEGsArUoAM5FfyUWfaVRrcRek4bKm17RARWjvt1UsMyV2zi2",
  "key24": "3grXcFnVo9WQ2DUHpad4c1jk9beiFzi2LCn6W3s9ck4qimWofzBunRAkFiKQRGuvJBAK2jmwTpuVzWj2ABsaaXmd",
  "key25": "597wUSM3xAA4V9hmtud8HUDMwqPqoYMD2iv3mwhKvZMECe57ukLAuuWRmox4BHLZbjJDmpMyEM4oadrz9TUm99Tu",
  "key26": "4wdBkj53V3222xBvD76rVJhscs6sVPEYbopdgYEFdDFP2ScPV4nCqxfgUxMq2QXCJGzPtSDcBWpuAV9qMFqj117M",
  "key27": "c5mZGKXe2M5UDYbamMYDRhUsHxyamFD7ySuiHoSrgfGhVoou5pGk9wHtbZgUawuuNdYR3tmsgFG9dRQZzvFCeuj",
  "key28": "4g4FKKMGeMj3fZoydWKXG7HyvkgU4Jn2tYv5o3fXmTtDp5gqNJ9GYYcMPqJQa2ZhYBm7EQhuSi8QefkKnTt3xjXg",
  "key29": "22JhyAT7XAXtHqN6hzCHdL2LmB84hHwndMv2Eyf4Rthx9TApzontrY7ugV2zhZzP1K2jHJKBrDtcUHMeXxzGoRwM",
  "key30": "6xWudPM9nFcqpbgzMM8vtS36qVDd3vZ4PfJ8RWQBJjsdPAhyGUtmASQR7mCQGeLJ8GMuTpzAs5rvKvGqQEj6ad5",
  "key31": "HgpaYeWH58SzQiYPaztU1hQYUCUvNtZM9woJhCPzxTcxqwYHz4MfgrXNCXo7Fw8kMNy3De2U5nnoEcw6N6gHA7Y",
  "key32": "3j4to1TGAUrwwxgtXzSr1JeEgibCsqHXpxDNBhGSKoooSXkiuCpAkBKNKp7e73CkwZLWuyikW1eBnYjQmjLaNnuj",
  "key33": "4hu6YEmjkeSVopuPbUvAWAK6HGmG7F3aa62J9PUA4253ECqBnZKApVW9RV65KPbZiRWCZ64SZ4gKPzpZSUdh1wsV",
  "key34": "32g7RHqJwQw7PLSw1FpH7FkA3z9SCTXyPPa8RtTgQcNaHMSRGNTJZYVwwQNBre1oNrLmTETtrbdLuzq6iCdrYNSD",
  "key35": "5vL8LxUPD1BKaX57PfC5SgHMhur4qH3FgTzWqeZTTMvFD8yqFuXvAB8efM7xo5UqsjWMM4WQuBY4moBHrFcrYqJU"
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
