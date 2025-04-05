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
    "34fCtXFTLXJ1u1HTtbVGkNYsXJpnRocMQo7MUx1X3Z6ZtfYECW4Vfgp7ihcCuc7DK4VRcvGmHzdH8DUqDD4n555p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RDkJFouw2jqnS5wnEXTGe5mH2Fu5396tiSGhbruYwKBVb5zaRSAKJZmdXxGoNqF1gzRG7vCXbVwkGB3ZHhESQBf",
  "key1": "3Z4YiRTU1uZZ6mDYnqL396YtSS7HB968CXaWzM2mHWxMbsmcBXBQm7QkB8ZTHWKYNikr23zpvfMWVrjAJRfwLohZ",
  "key2": "4eNVigJJwJW9TPkCEArXBpKGbGSwNqyJTf9DCwwtaS5C8D9UzNZTMdkZAHHYiMtrHYtWpjiLML2ouGQFGP2T8TZa",
  "key3": "3RoJuCw3q6KfaizsMgjzRJZNYnKcciJKugaEqhjaf2P3xfFhfSdm6Vk1h5Ang6DpeqiupeskUwzxrgHELC4AQR3A",
  "key4": "6Lh1ueGRabRLTZm5yeHD6mtc5sAhLCkoAQAdxfRiHr3W64YUVeMJ2jhvKuC4X7m3nmuTVu2YPrw7Kj1QEdiuMwT",
  "key5": "phwm5tHWe7q9CtA4QzNqwE26pmgLdvdCqi5CSnMnLN62Bsa6UAbuaXikhquj2gPrg339ZbmtwARBP2PLCvJvGSP",
  "key6": "DXA1x8KSmpmBjjV2F3ZtdGdzb2PmJ7TNGBgcWtinCHyYS2nowKvSdsyQYeeC7XHR6Zxpc93hTRxtaD6BeSTG2HT",
  "key7": "4PkAZPSQ3JfRpN8uMAsLK1LMxYWtVxqBEhoHXsyEfW9zC6bvJHWBT4xc6kQX97PUS3j1QyDCcVaVuuFdGbYSJWoU",
  "key8": "3GDDWKgFvV3JqbtW5KN4Q58eySvMmgFiFVZhrK8z5xyKDuesdktdjoFpS7herZYRogdSBc66P5LtZRhLttModssK",
  "key9": "b6GavYhieK7wr4gqBLrKFbfqhuqCfTm2BY4LFL3v1n9rtpxb76TVa2T7G8ZSoAczvZ3xa7hnLCwwqdP3jet7P5V",
  "key10": "5SnqpXjbw8u4sALGhCqyuAf3KvE9JK6shvfiLk6vk9GspZaANrEQkpPU8hnNq7rzwQmCb3kmmDq54odzJt9YRTF8",
  "key11": "4Ve4xGMLoNXBeDQ9NamgqKX1Cfq1NZZG89BvY8jTSWWbSyxnm3x9GRmSN1jcx5TCqwBWokYpr3c6FXih3douyn5L",
  "key12": "4x9deT8f8bL2PVHNFpruTbtMuipSVTG5hnr2ciK9bVRMRLuTSDR7zjgm7wQP8ztCXNinSHgbqMtzZRJDER8rRkDv",
  "key13": "3WsngN65ZAVxgNapvxqG9JULrg561szKLjBvCUK19ph1VvCSyxi5zzGCDgrLerop7U7daxvM6WWyJmgpUTGyPY78",
  "key14": "3ykdd17JcLV2uWnCZBAoWoSyT8x1TMAri8HfBwt6w1t3s8iL5Pd1juAbukSuASuCFY5qF782bgjSQ9oiCsjhBdmD",
  "key15": "3JcHT7zTRjxL9aZkhC6N9EXgkLV3v8hUYfm2W4mNjwbdsK289iTch3ZFKksyGR3cLBJT116LAFxcee2WwJqxHxoH",
  "key16": "4MzU2HX8ahHLaB3tpUnbBwRtyRZYt91inhA6PZoWciLzC29hJUqMTHvsVkoPDADMDuRLnkb9TvrAd1iYs6vtBoHA",
  "key17": "4rsFbH33pLRzfyAWccsDDSpT2gdiTBvTEt9oKHHcZZ4dQuaHVtTSwpF7xksgmwKGS9fz5qyZ4UUCh8qiWhivFz8p",
  "key18": "5qTBibsQUMAbub8oFPcwxg7ZJXUgcXhHaDTwcKrtm7gvirYtBsxRRxsDhgowvWKtfGpeokxP1QKaszUFbUqT5Ndt",
  "key19": "4ibjkZ99WvgWGEKwL6LxkPazLTYEWsobzNtEq2NQKotBf7J9ZMrrH5aJwNaCQFQeGxqbaXPUurspSocbn2uK3wGX",
  "key20": "552DRjEZQSnMCW6VAgNjpzLQq2SyVjV4FrAFCvyerytmTu2CtEcgGnDjMemAeRquY3a22mw99o71jYseJ6NoxsKA",
  "key21": "3BBcsp8fGEDAApkPJPFwJYWKavSpjRT2M8noHFV1hRZadvVmSY9KofkyphyhLiGAjDRMa3CmKtDq1oEZX1YBjC2f",
  "key22": "3Dw1yA5BvQoVSFgpb4eGQgVbS7EGoU8MFphTEYb6GE35etYnVNPu5Dnm7KqrjEQkev4zKxZiazNXXYLuBST3DMgq",
  "key23": "bwewHdfvGPiDDsM6eHLBstCuVm3ctHdqiKjy57UkEpXyuYwmWAoPJeZJKHhZGyqM67nQ4Pcg4NkgoiNnZWPdSnp",
  "key24": "3rK39s5ncpmpaUHFUyna54N7sywAqfSmB37KxwVcmVvdh2kRmCgzkpn5tGw342f6t25LNGhgAJzKNprtpBALRQc5",
  "key25": "5LA9SJH3HqeVdyoWqDovF1PsoVU1PwG9iiWcHmbJHZkfGmZkvcUdW4FGyMAHdog1c4xY1dhL3fNjRtLNPtvyL76G",
  "key26": "3rE3U2CNkHyz5zao2SW45uHsy57C6trmt6Yzp2jeoLcNkYaWyNEGPjegMeQWbgWgZiKHigZDktLXyuTSpo3rrKDx",
  "key27": "4do6tYZcyCZP4upaDgusCkoA2nGVsoXGri1X3X7E1jGbvKWJG9roiWvFXsXHAdRvETrqaeGikFVhyqjth7p43rUt",
  "key28": "QHu8mNYF4xNYuTFtNSaPDanBC9zkJdnsHaGEfXJR8PiMMhGrm3htZphUHnZEbLnVHu3FQY22LiZ5NwUpUYzev3k",
  "key29": "5Z6cCnnrRiAKjVHgkrhLgT4yNY5d7xFKqQ6Ui6uSvvswz6QuwLD1Q236hXHGEYSZ5DMq1bbagtVJKTvSqFF6Q4wU",
  "key30": "ES97X4GeXaPANZJ1esLEUjH2SreWPfijKcNMrZqPXRwASR51RS2QCpXAESCj27tAaGjcE4ZHazjDkSPosKNuxkC",
  "key31": "4BxMBJJ8nnJzz8UZLsQt6Rn39EamUW4iKTedX5SLcfUQNuxxXjKrFEF32nvr7ancLFzPG6bFfKSgXrJkrPPRP3fb",
  "key32": "3A4FCh98ydZvUpgGCYtmx5VdgsmeTHiHXNnTWoruWiCQdDRW9YByuRwjvzcF8vSosAVU5SiTuD5sksvfXD9dvgmp",
  "key33": "2bbWH72jKEUt18UuJqPxaW7DWA6NxEnFKsKxCnZCNArxqmK5nCAErRDErCe2F56pLkmRUwrC4Vh1HzoQdT6HAKgC",
  "key34": "C1FE5BwPojD6Gt6TWb9YZtu8HE8YbaZmYMJ56Dj1XzsubNEeBVQr5w84kzcKJ3hP5Vh8gTqZHqBRqx6etyy3Pwg",
  "key35": "4KVXw5t9dv5iZK2VBAbpAkkVG4JjBm652VDNBEkZg4xuUUxCf9G33wZKkden8XZwQcJ1PNcqdvjVKaz2FpBSyxfR",
  "key36": "2RCFmzRZaAbqgBgKTiPpf9pjRv74KiAkTURftaXUeKVrHmr9CZ1k2w1eHfMArpfsWNbBRo1qxRsyqEJeTvP1zMtr",
  "key37": "62wSA1jm6FTvuUbAkZVe46dr5z6WtmU68eQvcPv2AeSXEqMf7uDjbk7ar2vrQSNVM3KpwU3ftz3ebyyo6DUFpueJ",
  "key38": "5sz1uBqmJ5iSPLmy16GLNm9mAZupHqPWRo6QPsvaTXEBnMKubs8cD2i1TTenyWM57tBDUgWdmCfu4cQKNuvH3Riq",
  "key39": "3Pe7NGKWsgBWGUqAigtSJDk7m2Z6kkAAjRrcF9NjFL4NTfYLvFEgCgbcyohpkdAf7bwoE7o9qpdDx44mVtujBm1L",
  "key40": "5rXJ31seQYPRNh1mG5SgN9KBUvk2H5V9wUEjo8W1yr9MxyW5DfJpjpNks7f9j5KAV7zMv17po1P6xnGb4ZgdYLXG"
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
