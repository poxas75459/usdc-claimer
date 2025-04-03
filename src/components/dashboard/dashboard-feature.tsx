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
    "4nxty1asSTDH5MmmcwkKyHCkD8gXohDWbfvCrT6xuH2Zz4Jyn8teaP5TSyR1u7LFxTRejnsbM975bU8pjqYXo4rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmRQCEedzyAo6q37qX67jqWj3LX3Ap9We2evH9MeSzjNKLjpaFMgQjQop4QXNzhrqpSWSnpxfXkSBikEfFNyz2i",
  "key1": "8uf3PiVYjYtE6xbGi3yBgmrU4wFYjnzQvLycVQLLqLp4oyzjQwVAgo9PHbcR6A6PEWjtB3ftTTjCuF37aXozjnq",
  "key2": "4LSAcfHntf3eX36PAke6AhJZk9LAQDJooUkBWSx8ToqfFsjqRJWLuBndiQCPbQmmRoorcH3YQB2LY7pzxDs6U8Zz",
  "key3": "2aDiE9xupNufouViYM7vtTs831x3HwAnoaNEFT6mjJJeUDCpQVfTQEiP48UmrKSXpeG9pqYjCiomWbKe4NbnqNGH",
  "key4": "NuDrwbS31C7kDBmoTjiYMwWtWevuw49wgDK1RGAWsQuwfPsWV4JdnhT458rYe2Jprw46Xdb6LRC2ZWVN62RJZPY",
  "key5": "4wejpNDMXzQArLQnhtg371pB4iFiTXZZyuGdzH52xrP6Nne5vGdXHLhmUrmHPKKJFEeYSznecBffAFz8DvWmS8yG",
  "key6": "667iJfUWkDd8GHNg8tP2WZmSpdZ6J5HaMdLjYt9qpNk4FPbm6yngpZ7UCQsqyuMvpRy82AQwbyhwic4C8DKcgu5s",
  "key7": "2XHJuDy9Vt9avBTbjrT3bzvXanWL97w5pV9FH2jUK8EV9cvPssSuhd4YBkKNQeKxuo3ycEtquPm6E7hh5LBhr9tQ",
  "key8": "3B42bGHtsffRKmNQXf12KQCHppUARYNVriZdN1bQia37vzEmfg2yCUr5oy9UehEpHmPbk3veVjLg7Mtceb6Sg1wo",
  "key9": "25AuqnXeeXP7dug4KCYFbS8tZmRKGkSoMkMLFefPkGWPwexXj88UQMRVaojjqPLeh8XmkD3ZiuRw4zyDXEECc1wm",
  "key10": "2SKPCzL6rvUFYEfpPNh2qXCbL31S5viYS4oorwgKpKKctQRH3LKa11gRqWccQCT7J8ShF4yJSPQUVyY2ZuD9Kvpu",
  "key11": "8tExtFAzqBuUnFTZrESWLgHFZ9MBjtzU5sYaB2puGFDPbd5iq2WyTgyrEH973XpMSzhLWdDZJshvA1UsMmKSfDi",
  "key12": "dDtSdPLpoRdMatcJv6HjRNCm3aGHfBVyzJJyagyEB3QW6Wo2iMvVhrm1RWBNMoUsqFdTv4chz3qEhcruoGCtpvx",
  "key13": "5K8gRtKKTEe6uuiiGLrp78Rnm9AuyoyjXu1itaXpkXMm9ZR2nBM8NqhhNEX2ZGLhTSkeyM8UXTBVw8dZGVaaGHVU",
  "key14": "4azR12xizYsDUBQdMANr5Qz88iT7upzRknJ3hHKwxKTuUdGdqFFoT8m6pnJPc6A1W4FnPFmqLcgHhwyDmRMWGfGz",
  "key15": "2mkcKRq691aDM5HudEeL9xkPrTakXvaWvtZuBrvr6JNVv1x7B6WNz9Y37tkM1YnSt3ghiMFbZ8aJx8mpqcbeiDgU",
  "key16": "JxhqBTRyhuHT7NmR3935LaVHkAuNgnMmfpB7KW6X3sR6YCzA4eGtdU34qea6cmJY3dcWr1dE1m12zxBjhqAs36N",
  "key17": "1zWxrsUMRjwHmLhhoDKQqzCVJmuyNMm14LED37cTXUzyWnTV6pvuZCthcQcoqsoed9DwY3MrBrncxZxMFeJ4tU8",
  "key18": "4dxDksjQDW2KBupgFLk2tAYArdBUSfP6FBzxuv4s3ZYAxp9Hgiv6UNj3VWJBy9fkmdmicnyDKr2coM8SosTCmGko",
  "key19": "2aCPMoW5SNVx7MhhrXKPhGNVdNNLqc5Kj78ZwvyMGRDJV3kxkgEjW9djxYWJSZA8vcCzt2cv85nD4WbsHVVTWvZf",
  "key20": "R8jiBWnkAWtbjkRZam1L1hT5yWJHR9KdNc2BsDgL1HbPGG49UtKJgUbEs3ncV2yUjMgV3WqR7YZw1dx6iqncvoF",
  "key21": "t1uQYjTDr7W4bHs69yo2yaKXsAiqwyF5E1yoNzvgq5k3LU6zftGMtxAvN5ctR3cXwRogVafxxJtcs4NziUQaZqs",
  "key22": "251VZSFuszzjrqfqkXXw9NZGHMHTB83CHMCubqgQN4vRp1yDBSfRPYvpVEgitNEXQWNDXUuf2EciMQevJ9CxUNhv",
  "key23": "5i6ygz9MARSQxCccPRcRpSt9dgU3Q6YdTNu3fQwvg11cGCaXf3Gg5GVuD8mRqgmeE5euNGFiE6pWnkUoMZv21L4U",
  "key24": "yFfy7cwNFLxqG1sEWJKov2WA8TwqSvLR9D2u549D2rQTjXUB9yg4f6XuvTTSjXCCFmcSb7wVCtfmUBJLboGFGAt",
  "key25": "5bGH7gCJjmqVXSRprWA1cq9HCcupahjPjrwBqg6cUWZMqnfrPhWc22tHkscbuKPp4okQRU6Kttv7on8oapaAUDQ8",
  "key26": "nWHgQBzzTQJKfM9PQcbqSoN5YvQWHKD3KKkXjnb9PeoQnE9eAhG1sta7qVuY9xvVRtCm7LaKEwK7ni4rp9hznBi",
  "key27": "5M9D6u72LjzMTn2MunhdN3dzmh3k7gzCF4GBa7R9JL472hLjh3rH9GmTawtJjQZBEsKp2TxvUArMuSMjy79BxmZf",
  "key28": "3ZvRrrHBxDg1MQr4bRdjsS6uKALYER6dKrLovgSapXmBq9jbAsjLBrU1HkZB6PkXEbF1K3JaJ98kgVgkqFTGcTjb",
  "key29": "anwMsM1N36856UAoyPnrE4FCEdEyiGz2955LLzdu65TT1fzXAgQaJ3hDstLzAFZe6A1R366hPgqArPhHppZtpn9",
  "key30": "2EyDVFFeruwvTr6p458KtJxLWPjGfPjMz8Lukxguc3HEixHzCHdiM7LAYPEL9Ewxsab4R9VtG9rRTGS2Lzddnb8D",
  "key31": "38KrBFzNpjxKYVNsxJ2ah2S5ja25uHtKmUv1KeHyXDed7gKHoHTVLymPDy3A6Whe5Rb8mGJ1DwtTAomCg7e9ipRf",
  "key32": "2XnfBLDjncnw4D661ehTk1CQQ1iPe7Be3T6miBYwDpc1Z376YJxvZnYepTNrpydbF9BhHUjLkeyXgJYzx9bgBJag",
  "key33": "338VbLLnkSs2kWmMpBkB9Nk8BZKkzRDQTMRujUPNjxeYMRkZAb8p26FoWGZWUEavNj3afLCYkxZXTYMvkJjsVe7V",
  "key34": "3HyrthESQ6eYVYJcMJRamyvfSZ3ZPLUcd4jh5GE7jrJViAcc8FiWF8T5LaphMb379CUcqnmLwbsWZyHkMGWw2BAM",
  "key35": "48VgVy8hCknss5F4DY8YnPZ5BtGa2LRZcdjeXHsFDPwZV1KCRgWmsGdPh14qUQZ2tv9HD4KFP6YEydgvdwVhX5Lp",
  "key36": "4F7qPbfnN8f3M71mqmoZwrAx6TFT7LLSQJS93zfzwN9TQBxJ3ZTyaYcJBWMmefg488FugcXXXMY49gGbiW6gCAjo",
  "key37": "57KJFc5jgB4QCpACu7mAkGQjvq1C6XAnhhNGMwomKCnBjsUzt2tN6BNs3HTcjWGEgDsWnTYvsZHLagt427zJKQMF",
  "key38": "5jnDqqESNTiQEuJ8ZrG1HSpVxW3LFwaWkF8MhmU9VSriDupTSZESjFgJgwaL4zZoKuCnFra2SD8q8e35zZxHo36y",
  "key39": "4phtgM9JWaqwRFAvdbWWMzHZiYvYSRRHN3ehYeykyUiUP2fXYXVYRfeQFN7PS6HMbRFGkCzmgFh3p9g3PTDBh9ux",
  "key40": "3YiUVQfSsc8KsiRTdQd1h7BcPwrS7ijgkiNvJAmbcpAdSpiGDFFHRzvRWgtUDLxNZTSgVPsvFpJYZ8q69de5VNyZ",
  "key41": "2x2EYoaZB5Ndo8tCoKhrw4EqAQT6ihAAEu1Aerrgpcigqa7t8xGU2YpJqu1Y5E4EWQhSkiDzhCM4pMPGT5unFdqF",
  "key42": "3U5H2MXm9tq3UK8tfacrXKgt2rLfdgermd28WMHuAGHG29q8KbQGqhnoqzCuuYo4s5nCB66YadtrJBWdaTUhxMzg"
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
