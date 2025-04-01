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
    "3Ugn3VgnKs9pTFE4SPwWAbNfvvWHTdReyjuwHTLL7uLLq2B8JG4jQQGHd9VVa5BNBUaEfL89jA3oeHna2FrQm1UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEzy5dYCiKNAMtqPpMMG5fDEeKgidG3XAdHuDTvUidDwcKcMH1hdXjSPdV7WiYs25oXUXEe49YmFLtqNPfhnpv9",
  "key1": "2SjUDF9wDCUne8gzNTbxQdJ9E82x9VT9danZTziSnCfwF1T3FifyAcgCrSVkpsEuLHMB2qY4Uzp9Cj7wzZMQvRd1",
  "key2": "5MnvDPZ7cckVsbse4EkEGHbtrFQAUNEPECfXr4UCpbtVdWT7rUM3vzqknxEpA2TkV71tFNBdvTYWHwBoTZJ6NBz1",
  "key3": "4LJ1Lb321LfwZ7tb2zjTUzzJY2fzxs7wiZ9niyTqngCVNqDX2ZhR2sjx8kSPNeQoU6gNV6XAtbCLGNKnEaLLCAFF",
  "key4": "2P1bxQzzkBekU4Z8hyccm1aVBEYQkqod1qspxLzdYL6q6wTZQnmMfytwVPPvjmvZqu51m33N9zDrCp54s3v9jKr",
  "key5": "3fucKLwXVy5iP5nP5PnZtXYcfsGMcRhJ5XP4gpNZauYGhA4r4izvNVCAi68CdPHJqjcTSd3z2rkk9p3qCWbyEat2",
  "key6": "5L8p7oUSzWh2UGF6uLHVs9z1Eui37ZGccS9dEzbUQp3wrmbtnhf28Lu5VaqhTWHREYC1jBUvaYMRdruBqrsPA6zv",
  "key7": "RonVV8EKLRBZvm8mHpvCHZCQAmdNv7F9rKT6NBrXhHDoDc8cKSvKtup7zi5RFKaZxEoA9jiLanDkvnqqSE4SqrV",
  "key8": "5FFnw7zLABh7VFAvLbYiPWhjyU1UbYhnjhsJHNNQYoPn4js2UxZ1HxeBJQKQZSPc9o3ycYdpNj3xR8boCxNnKWFr",
  "key9": "FXFyjq5FzqFqiXefKipkQ3CskFLLTdTo1Y8qoq31HtUfASnWgAKZW7WrHkTpckY8LC5Grdhs8B6YV5Ypkbpgqmr",
  "key10": "2C1wzD4uEop29fZV7kRDeFYn7cmsK3Krnyn8SnTnEMdHAC1ozH2edwGAyiLAjNsgJDqfsSsv2kWDaMTge9ZjB9MA",
  "key11": "4o1SFaeMuQdKziSyfq4JWKSPAhKNzmjXcmZ2S5n96CvnzBbZHPEZwPYjkNkouqnnFxFCXSCc2A9zZ8n3THDHapJ1",
  "key12": "5RUjRxPfEbeSaM3cZg9ZNJcPWjKt6uqkJMoYfJRzFkBTzhXLhi2MNzvXH9p7SGSs9yaeJ9kGBF1RJzJUUq8Qswh8",
  "key13": "2A4gVRj9oY3mNN993pVJEamWVCPaQCiY1q1SzWGfJh2r8bRTkhAkjQi4DJdiMoyzJguPDovs5Pf5u8so31sTqmPv",
  "key14": "3UC2o2ZPuLPHHp4sviyd5pfKypHKxEGSGZhp8CkLmsmmobUDmc8naYX4omSKPKNtf4abRkinKtoW6TaZAg4aHewg",
  "key15": "vx8F1eAx3MnZccXkLXxRUwaN3AD3jzb3WW3TjBi46igA2cppLJAkShD4jB2gQqLs1P6sTL17qzr2GtuhYmpoUp3",
  "key16": "5K7GNfbNbYvoRX6FD4amn2foE2AfvGZwgrTbmytv4b5WejUFZweBEXYZ8t5yoysXtcS4k5ZGYkVd45AayPmcbHxZ",
  "key17": "4Q2vtdwLMxiNyxPayhstVeAATtTuEMASQJW4HSrKS96RFtT6HewVA8WhrvZ6zc3wAS8T6psWrZVTcV4wRZVTbxZk",
  "key18": "5uQtagz3mB4bTj2E3W7BuzCNn7ubyBZ5HdnurJXzaVaXDmSPY7RcS1HuWqRypb9tP7piR1rUj2r888zgFd7UNrwS",
  "key19": "RbYjUncbfboReSZ9H2kPz4cME6VSRdd25azwMrgfwZsop11EVfyKi8LYsL1sVetKc7SSkTzTMQvEpPg3TDsUBHE",
  "key20": "4L4Mmo8WuvMBWTooUP2TYpDz3raLJVyUUTtNqamx2B9mbF4evZyAajDj3voxQ4cfCv61zGnzYQbmTZ8rLywxk6Ha",
  "key21": "3DTNMurNJouHPKGmAngUKNsXdmw9JStUFDw3tnSYW3GHpCF8CsMdg5rzfe6Yn4R86jPsB9gqxdHe3hnD5LwQxtdZ",
  "key22": "2L1E2ZFEfWSCqVWTNENmezy8r1c1kB5TVVA68ry26rEvLxdAKXik4piiJ6DEQpE22M5nryJSiYmkcavvUJ6Bcgz3",
  "key23": "5n4vrBKS1pegmvVLxHcA1JMTj2SmMRhH1Pzqz2x4D93t3DUdPNQFMqKBVy7Wu1sjdrnafDp4Uo1AaY6SDac6S4v",
  "key24": "47aoCiYwfp6DSqbvCKWhohyuUwgTu2YErmQT6hMxbZqPJbbGRxTRzXAh84PvUz7aKK5BTENyLew72fxJMasSSqwa",
  "key25": "sXcvmsv8NobHV2FSKurgahLwLxY4WV6218NYfNCc7rH5ZG7sEhCHo17HcriC7bFDduZLaVpJhvdjpGz7Grx2gQZ",
  "key26": "WSuKcxEHief9U2ViLE7N4Uzp7oW58xW2gsHockJHUeiqK8B9yULBwd8RbJfRLYg3VxPjApNwEzEDZBqFTXcdJjE",
  "key27": "3Hd22bzY2pTbRL9kS35xtiL3Mwj38Xnr4aFyPMsAe3C43mkGFYoL4bppT7DpfSeJNnUDtjufNXDjttj8THGtbcMC",
  "key28": "7CqBCJjhSd6neJheC8b5LTnGJsTwM4TCfeaa62AwcvE2vmDaQrmbPG3UTsnEjk6HJTq7mBcFqBh9NpUfQXieN49",
  "key29": "3hN3emmiEWVbvc8VVMdK2gr2tLtPn4E88CCkPwSbSsGLE5uzvmoSowMa5T77V5M7ss4wbiYt13BuNTm7Lyv3fLe7",
  "key30": "2V88H76x3sZpgCzB2gywEzRpXJpxtu8STLB24vn31m2tY7hxmtXkxtg8ME8Fgjm1HNirxudS38zh4QZ3T52X5Ukv",
  "key31": "3T5KJLB9b8ZcFQsKT23gYT2zJGsJQeBk8zMth35A82GHH2b4NAsT9Pa7ToVJX8DunFXxYCKaN53pgJXGdjSzS7Mh",
  "key32": "429piNqfgLsARz92sRpEpH54TNvJfsPqHE2JmC73sfV13d1yxLYhZWNH6d18Xyhxm4owp9f13zZoWNkKm7TjvLGE",
  "key33": "2wGRDgHpmxJJL6B7pUyNF6LQcLaejopDdeZwbwAieTHLj1DdETSvC9c78gNdfvbrAqGF6a2QFc49iSUhV2MunA1w",
  "key34": "4dbwEpsniDDQQMGdXAuva2ZdUpWtuXAwwNBWSVuseckGdMZmu27Pa7RBTR9JD9Srv7V9MTzgFJp1ZtW2xHKvn3wn",
  "key35": "5nxYS1eDgiUbYn9Ca73C72MYWpMf34f1F4jqz7PUXFg7J2bd4scD1hXjSe4KRw5gGtGgNGG2FYTtGJYYwy8v9CAD",
  "key36": "62iHQLJ6QVYtQwfY1MbAiMBjAj2XCrMKmSQfQ9Qrmc5J3nW6zCT4zoLj3TAk9QacNmnHf8ZZRcbirx1xdVj6QXME",
  "key37": "44Y5iLWVmeiPWkxvgdnobnGUbwhAhZR6FPezVDDyz9hNaxevXEXeGWRvv7qzGqkBuMfcj1jmL9nnULVYtbRQsrC8",
  "key38": "5iPmTVCJMthbtw678t9ZC5reRmoiGfS43tSFezZ8PduAbLe9zhD1e14RSfUNT3VLX9Q5RpLL5iZjkH7Cueb2Rzf",
  "key39": "4LqBdNof23e8N2D2xWCHXFbrrXjhAbEG9j8fJNX2KLDHB9BE882qVbJULrE2ugad2aUyF5HQREj3bR6FRC7ggqHY",
  "key40": "3BQy2YAY1rNhD12r9xvMtGAHze2Fn1zGscgFohPAvprHXDieHQ9JuHAaGo8Hg4WuxyB3s4EoPuw8DqR2jGdVCLWY",
  "key41": "2YuZ8ae8XhPi8tKTFfWDsYqDiR1Auad6P6rsXJ2vcVtxT7DBk2KoTen4bTxkUfrtvmCpX8WUMEaRRmhi5Q6AY2bc",
  "key42": "4nBtrW9U1XmAC8Ynbgx7N6D1jDnS2sed2aS94H3aZg5gmm6F6Tyx2GCuzUY5knyJKY9Je7NRtWzzqwFoxtaHfnRt",
  "key43": "5JNyvZhVBmrYqFiZPjUJrsZyBDynJNTuwKgTqAWvFU8fiCmK7bpGX1eBJoiXBA8YzM2ocK6Q47sJduSE4GkHDeM7",
  "key44": "2RkFAZhWPJahhcCdXypKRMphNakzeN7vScR7HGWrTXtMa4gdqtq3diPJXAsGB6ZsZK5QBrhdkwxCvL49AN9pgHzc",
  "key45": "L3HTRgx4wKQZ3UfpUHJH6tK7shU7jbFTdGnakNWfbDEtRuXvKMFF5M4M3aGhne4o7FTQtwAepX1STAbwQWyy7yg",
  "key46": "2yEy4nKvHy4NnmeMEZsRpg8o3exYSktUm9VEkhSGCqT6WBg5neSgWdUceExFCrrawBZskkYeU4UYA9DB9nXm5SZJ",
  "key47": "daBJGtTLVv1yQDuwmoBC3Fio4KSotm1KBmZ2DQafogeo43VejEziTQdiXH8upYw61TzPQwXJUYEoZpjSBtDwAPk",
  "key48": "3kZwror2Qe6W9MbdQD62afw37eJJ19xSCPJMb6FjLFVMwsjggTwdZzmhw7dzXExxtXMRjpq633MvuRfZUPUoEu3V"
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
