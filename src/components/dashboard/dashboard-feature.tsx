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
    "4dLJE1zhdh5nHdnkQAiyKoWyQpWCHYxfC4rftEJWKskVxRUQ6EXgi6ELmT8T9n5WzhYoe4BehYofuP85VpWutjnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L86Yyp38CnrHFBdxdhkeoZ6emm6e1TYEP2MkRVbEtGoskUm3Z5c4P2eWT7qmNJvyp7sHJafaMwkNjqcNPhYkgxh",
  "key1": "3qKsnwLw55iNYtCgHpqZzwk939CKQLAvtC83mAiPq8tmyZR56kFv1EFoqSJmXu5tNuxNYnPKTxV6cehbMynHmxzx",
  "key2": "3MpRqpBFMkPJUxeB5Xc1hPz26hWSYCd5wPntKa26thZsCvMcX7M55snukrGk1ZjGoo7rJRE754G7V5qUmcpowrAu",
  "key3": "ZWrujLufSwSpLhWHfuQ8XGXPRjNHvfJWSSnnUL7nChiiqKTtR3aPaWZrX58ng1QHHw6hKYPKWmT1zj7ZyymZRVW",
  "key4": "63tuvYFTPUZuMwoQuALepgZMwN1H6FfSJxHPVRDrRRrFLNFxc6kmdjx9ZoE1NRwDpTXWbm3JA1bUsA5mCM8qdwPN",
  "key5": "2TevMCaHvKs373QLxNmgLncTVUnjrmhfvFRZNuLGFVXAg9SqdHS2s4Xro6yNc9cfDkFKFWskRkVR8t9BkbWSEvzP",
  "key6": "5HWNJLEP9tRvHYF3j6cLC5rE2J2jCAhiQHDCLEmZmN4Nb1PsYabF5qiza1DJzj9GH7u73rjinTTGUXtZUoyJP3tA",
  "key7": "3MMK2XuV72of21Pu5zWhuTsM6LqpSGuV6ErxrC4iGN37oMyuCXh9yGgXnos2WoH7CCLJH7gcMT47jNygVZ68kna",
  "key8": "2Yoq2TPu6TxhZrLzKyuCiqCr9JxnSoMZJ5NWyZ2NhSpQQGn84f4ssQR2vUwVFkM5K6CntYtD3sSCqL3KGj7S8onz",
  "key9": "SS4sbnTXik72jhLRk3JyW4y4ZfosM7FfP7VK14Sm47vokEWvFx4g5cppNhVc5H19rYSPs4njhT6EKPiJqrHSQY4",
  "key10": "3EmktLy6kNLp4WEPrMJ185AvD5xA4iiuGNArs6g33ysZMAF5LZwLx2ZbMwkQ75Eg8h8oz3bTNvYmp58hKac65e4u",
  "key11": "4uByiSeAr2PnzECx3tDNnPsAk1spDyqTnNakWzXy3oVLgVoHJLoQ8W3niChdyfBzQMfYaP2F2aFpUySMBGve6hBD",
  "key12": "2Y1GqtzdsVrc8C9iSSiiqEGiaVfxkVhA8BNaaP4W191WngnZBEuM3bGczRVBQTiTJF79Hj2gJ6Lx1ACyxTTtmTJ",
  "key13": "7USnz3UZDK7YasbzNWGTQTfs2B6pLQUC168z1UVwdLf43bYs8fchNY2MxPBzHfxuVA8bkFQ7DYNLHxL4HDcDgs2",
  "key14": "57zPQsuj4RStXAQZPWpviqf3TxGZpsomfKD9VwVHCq4SeZdFGkK8rsrtJcKe4jneYL3jU5kkBUJTCx4kaCmToZF7",
  "key15": "zKLKYQwwJMKgqD32Qy1hz9sDnSxYRqAqNeSvpF5QxHfPWJzY2VooVdvwWk23krgCJN327ptBoJ6agnekibTD8YV",
  "key16": "2TztdPomF6XbepLxdHBHxFf19stbh1nKnwLjnoVjePNm2ygQ9T1xQ9cNAWf2LgYzqkq9XX2CKDg7mFQ8knSELBSD",
  "key17": "3bkPi6HZM6Tzn5gM9jvGPeCDzekackFzfA39U2yd5ZD3gwpL2Ya19FAers17VfS8oadyJiYMeXGhY35JksGyxkfJ",
  "key18": "f1GEfsEpTk2EjYk3T6jMhDtDexzcoBuH7vzUVzAJVz8wiyF9A5BdkXjhjgverYgYmtmnT7NyqkQnPRzb6HAhbJ1",
  "key19": "3JudwKmSQ4wvxusZA4VYEjHZLcYwydSkWQKkkxUhfnA8TecR3VL8otFVXkTwbq5mte9MyQELYJe6wERAEUnM3AoJ",
  "key20": "4mgXB5Ma955y6hYee5DMfHNudBqPWNRmXy78dEAm39TSbNHD1MZH4e1aDv9mwj4ZtpNi5XXVaL87DPAnw9yWzxmp",
  "key21": "4SFZFdjr8cxtwQaBoreECHo5PkoVmydKtYURHtf7fZ2HsdEDapKfK9hUGNQtrtL863BX3wyrBEwPn5qeDEDoVd1e",
  "key22": "2jKXJa9gz4MJY4e75iMd89EZmwAWMvNzEuWBqsoU9rfqwxsBL89xUBimHSgh6FXscP8bFb1bKC3McCrNSY8wqVXo",
  "key23": "3RXKqDzfWbJ1y6WNTBvzvQmvuREWQUNRjM51CwiB91pNToGPMsMTXeG8BM3EwqjQJUdmDwcqMR91bkEbinHWaa7z",
  "key24": "oPW7xYbFRuWqX8MHM7tHhjVzbhqQHVgUedd3UdZMh98N8f92ftHUCmk8MBeiPw5S2UCFhjPgmqniURzensCKLzh",
  "key25": "s2GRby4GdQJTGzUAXDu4d2BrxToGmvK9Xy1SfSiWFfLFmWvxSpXWTnWiFoepZUiDtUbRdcSeKKVHyYxNBBA7e6g",
  "key26": "3iT6fyqQQ5KbWSymEs77K3motF1KJJdEUJ3YUH7BtkFxcK83HxeTYtDudzsyT1xjgi7AX6NMob2uYBQnKeAL84sv",
  "key27": "tVT1SjBwdxXAdcUJbdYDu4pKwyXCwXdTovGRctm99XcBdp9hbGibmNrxYa1HGsdBkUgWpeqjmBhA1GpLJxQmXKa",
  "key28": "5X974WriYGh7DBAMPTvnUME1Ch9n6f495QchUvoDNFZhfKRtySddpgPCjjcFnvyKnfg1z7Z5KXjgfncMn6mV4jM4",
  "key29": "51wx5LfYQvBKWMqtxiDxMd5ogGhjFKYHDN77W8M3GBxeATQZLDJ7eZ64inH3kbyjqydAeKuP6eXsFqjezHrvu6TB",
  "key30": "LVQyW5VNQXX9TV6CPYyVr2QxmzpgNcGUsfQM34ax9ETizeEo2EPupRNUWygAydbnH7FnaeufUdPBGECt5Lzm1qm",
  "key31": "2Y5yN3JifNmKAgQENjy9Lk5tUWHzjf3KL2yZE6bzfxreskpDQF2FSin2sUoBCVranugDToEorebUp2wBLAW4UXhc",
  "key32": "4EZCRJzS6C6EX7kX8KKhmL15foqQeEUUSREA5TVPAUbPTp1zLugkPH8sW1dNciQrwBPkuTXazKPygkWvWQTXnPVa",
  "key33": "4EyDAJN4YRGWXwHXjpk6Jbdu3D1NFe5ttf5aihfsYcSCejtXp3qD4vmMLe3AHXQ1fyTtEZ59hPhDm6NxG3euXa9",
  "key34": "HzypJzB6UFTnUCCrE6ts5sK9uiBRXrBvjcoK6M6Tzt7u3V759TpfM8w4BUs6gALyq43Wdv7riqURkt3zfkKNNw7",
  "key35": "oyG5TF5wvyiMXmSTmYcyrWFz6Vk3FkMhy8kc6hQGnWFHtySmz8GqAds38nQgCNJDmBUEqmrTjEnDwKktPnBeijY",
  "key36": "5Jezce7GDNyp1mG1TCGXsr3JakLY1qDTuYENE69Q7oAUV9KehPWUtAdYDUGcDTJHCm2WtHvxroQVek17HanW1NLd",
  "key37": "4q4v1j3UjUYyHAnjFawKn5gRYBauCKx7VytfgA551k1MSLCoE6GvP44mKJR4PuVzfoLzjiovX8qCdEpYY3qkJ88A",
  "key38": "3QBFAvt7ErTJhYtdKaBCj4DEECJaSnBTnfEcxTPHVdJRCUw9hQpo7KeVBZNkq4XDw2KqGAtFpGAhtyhKRR3dMPm9",
  "key39": "3sDKccG2dqQuz9J6GhN1CQq14Xd1RtDGZbwBXsPf9Hd9CetLKMEQVVdvmhSHZfzNwgocKAZ8cDy67AY9vzHZrkxf",
  "key40": "2c4GxpovMpjumCffUpQJskdLXJADxW8zoJyWBvJYoaQgjHZZAYzqRjWDoVKZf2PaUYgmyn4R3TfkppSSvEvPNNnL",
  "key41": "5WGBf7gzUhfVabSfuBMNPpvtSHML9u6EinEPA2C5r4fC9nKKVhrBNV6yXTfcXFHnFHxTPwTDwKT8HtBzeneARbBP",
  "key42": "5DtXuK74sSiLkF8GztR5zQodhUDLzJ5jM1jjYFiYij4YMBvLTGX2rtXBWeezitd8RydkkiNnQgSU7aQ5wBKgncwm",
  "key43": "3gakd7yGUeWqdpbm8PDm9FmjnTnqKcT27788R6fGiktvJBT3g5sbfiUzMCHJdT31Rfx9jRHWTEkmkKhbTTC8H7Tg",
  "key44": "4YEHdgGvtieNsWVVNwagehZA3qCoNcUCjF8ACwyvQD2WNyYPxAFPhBfE6fTYKoeg5VrkYgW2L2orp8x3NAV3rFW8",
  "key45": "4KXrPGdNFPbU85qXF8shNtJFK6nnazGRQfnuMYhEyYJDoZzrGziWTpBobUiev6Dhs46U6WMAGsE5pqSsGdTHYXZw",
  "key46": "21BM8NJmnrCb5d69fykV9sr5qSnY1ZYyJYSQLAHbgf6CLKMETpL1Xzdm434BgEuDcyPq5KSA3WohMyoNAAGJXYSm",
  "key47": "25WgF3EgGHrrAHaU2nDJHhYWbiaHcoZsZsJD3meGL5mLDeqMuqEfrb2T2CPLimiVgQTE477KV7W8mDPsmZKAk5gF",
  "key48": "4kk2prfzKJ21tZ1H6uFGp5UJZRWVCMw4w3Pe4zM14djPLbooVufz13ekxCwSNELSizTSzh4gRGNpbJb5uLK9REJS",
  "key49": "4EtcXcXxZZPMzQo1yFC1UPmixm9cETbgUa7fu5g2yin7izJMcMBV7jxqvqBR2RfPj2KwXiCCF6ZQ2h8LDsePxRpM"
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
