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
    "3MkHtofh3e64fhBoYqCAB1Ybk2NrxemRp7GP7qY1M5pcT8evS6mUgSNByg63QzjmdKM6mm6j4WrZecwpUtbp2HZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZUErMPVGqF35h5KzWEPWoEQrcsGMKNUJ1z6YBPdK6uz6fNvRrTgH4STaAPANuRNmngXwCzKrCn2S2VwLz4AgEq",
  "key1": "2WYwjhekU9r39SNgbvrUZ5KCQXcbpGVVEXCjzqguyFaDkZeY1754WABzAmYTC78x4bRSU46BrtQTvLmGgEUxXMjz",
  "key2": "vFtiZVNJEzUcYmc3rdFkgzJAG27St9Kz6oFKDQQM9XKWTaaj2pMAUsQuiqSmFT3C14ZMF44x3yRWCFS1gZ7Gyuy",
  "key3": "3Wp3auBWPAmxpNjkg3kER24WyF1GAYz3EprxktbCg4TxJcZ8rtGsqBom48ExdxQ88Uxt7g2YT5G1yVFw89k47kuC",
  "key4": "5tgMLW3PVRPT6eMUZa3ojc45Jf6PFsRwKnbtU4D1QKZTzXWGQ4o4vJzzdm6enafmijoThcsgLASchcqVmJ1zTJ1b",
  "key5": "faKybJXQbWTFwm3vKmGGyzcayEsBmzLqVHfTryjEVgBYyn2hNaBb4urVkeiNSCaEQQYQ4uH3CZd1y73WTGjdWni",
  "key6": "3xL1p1CVBayCPFUNmnKXtMGrgUKbSQQSNB96sg33uqmDzkmzGtgYrfJDUG1W5cbY57iLMjRM2XpQYMqaEKLr9oGa",
  "key7": "2azK1Cxe82vQrknLH5QKDUJJ2Q5GthzJm4cqLRnMzhWcYB2VEsViW8keKT5TJJucamchRWvn14gQmJnuD2YUqxf6",
  "key8": "22VwkSib61WBeAZGKdcso7KkCcEmwUciabq5kPL5nKJaacsWBfiqDhTLUHyek4ZaW55z58R56wgn6tzXAXn5xZDb",
  "key9": "2Ztx6ZFqpmbpw8Xa2Gswc4Fb5ymj2Rx79Grx5mfkw5fqcKzSBCBHB4WG9mSqSeUSvinbteQ6m5ud5WG8D2huVzAq",
  "key10": "FEdLgKeotxwDQ7b9Ptyq7wenBVLak3No9FtYJRcrvzrXHoJJBRFFovA9qfV1abCDaPcMicvHLtHNqHD81zcQ1Ks",
  "key11": "4u4cuCEFPxT7hicdYMNnNqCLp6vJUW4ij4AcxBRoEPCiUf1oxrPzFSDgz2UQZMgvi8CmymW8xKH231jzSE6Wc2B4",
  "key12": "Eh81iiwpdmhgcXYLH1BY8Fz2UhJbDX92aQ3R2tDCAk9nXU7KKyfxazTLALeHAR6BsKVUbJZJUbr7NGswvWovgFx",
  "key13": "3NZXR8xRRtM1QCrDtpvszDdRzML7QMCe7E26QXyF7R1MTyAyF9Es2w6B3DHzsh3Wexf5jXGCxzoQi2rRfvDoJcYR",
  "key14": "5WJBnTLsdtBHu3RAh19ju3satEDjMsNkvhEqAJN16sNMuiS5iC4A3a3tLMpmvZZwbkctfDV5rh8cj3nUKDdPYTi8",
  "key15": "54vsJx4bu7LmGQFhvMEZWjJiGxD6DUFaXA3rzqX31zVgkbugFRvPt1juEyBXQAqD2X7ySGLJY6VhuBxDjicXvt95",
  "key16": "3U4NnrYUZdFSaGtvVo8W41SY2cALaLqQKbxXbw1KRtq8RWXohELnTynysQz2zycFkAxixiiZhynmHHJ4cXNHHVXy",
  "key17": "5BGJ6gp6W7EpHSihTLSjreFtvWf9jf5PRBpuVhZzkXq7QPtuZ6WoxcqixUL5yDKKrr8dKcTLG4MZ9Yc2tx4zANyh",
  "key18": "pbG7DfXY631fVsggAVE1wVnBKdgp5oS8A9eqXJjukuXpHxvykTcx9T8rmyxyvnrmdTQxFxrCz3WB3Fi2f1FqLAy",
  "key19": "2C8N7sRnGuHYyaWRxVCRo8mcQEJJwMWJUKNhFKvapsYiPQZbXppFEtBUu3SoDGS3mqHzNnrqaTrxdaQDrscHNpAw",
  "key20": "4CK5QQAhgSTNPoFnQ9Dnch1mLZ2UavzDYLWYZY1EQBkGFXy3cufDrqe7o3Szi8BPRdnYv7yHCrYytTyPdK74f8pi",
  "key21": "mbYb1T4RSLKvn5sZ2XFN667cDHZ6V2n5tovqxSnWtGxYKTsU3j4H3yPoL3GP1T8LeTU8sqe5pEbb8SoWgBqwnxV",
  "key22": "5cGeZLFep5tXynMC7JSm2Su7EmDvS16qUAVzjRnViEHQEni7AgJpHbp8T1ij5iHNdqchqjjgh6EHMD8W8HM9bfbh",
  "key23": "4Qo3wNu72usLquPY8eDFsk12yMJMo5JYFqD95YJ71c1YC5NPCo4mtjMzeE5oC6zuq3LX4bwE7rHBbnuyBtiQLmd5",
  "key24": "2MakMEK1P9U9E7JFrCkfSLyY6ZRSvnpMXMGAJmCfE29Tr3r4mBgEC29CBaPnqm42ecKFan2pM2w9Vme83Z5X3Gkp",
  "key25": "2taGJgszBriEaV82Cz249JTLFSiJHW4LX7Q7GwBtRpUq7HKQKA7MSA63zrcF2E1n9uFHixHGDgBJFh5FJAC99dqw",
  "key26": "54og3isz55YFZ4zVGBxuxN2FzDfbp3LN8rB2MqX2w4SMAoYCg9tWbVTukBPPrPuKzda4MudtmzkQCAtz6X9s18x3",
  "key27": "5eXgu1oaoGJCJCciW5qLVphqADAh5arXQ5kKPGHFrNej1F53WG23uMeJJ6rk3zczMso9ktBKWbMPu3CAaDPXk4aW",
  "key28": "3WiWDfFdkFJns7Q45RJwcMNdZ7RCiVHQHsq2PQBmWNYSVPaxsSWFtavVAqMPgoFpbYVLhCeNLs6oovTDayNkJ1ME",
  "key29": "32RWwwNNd4W3WgabQ7ZDi1ykzw9ZcyXio5rfTgdMaxXjnQnPHRX6Xjw4KXxVusbF5B6dxaXshFHusPvzdEab3wrW",
  "key30": "3F2aHhPBANDRf2fpjWx9Lqg21k13aLwAKt5r3jcrfWaMRCVaNnas7GC4m9dyPRCzX4UFSfgX6o1UFghM2w4CvNQX",
  "key31": "3K3ey7WVS5k5FPRMfrMiwupdiqM7XUjgiqdFrgJMfq7cuyHJJQ2bho6aykgEzPjPsZp1RCRiqqprpEv5qenTMFww",
  "key32": "5auFkHRCv1JpuQX5HWSw3eqDZzXrReajNttTxWizj9fsq6sLAwuPaMdC9G6sun6MPce1EM1ejBnmcgD2jkDSViBy",
  "key33": "3A2uYZX4Tvuu9uJMyLRDAgLbWidXLQQGip22qFQKb29uPULMDbFTkAvoGZHV6FQACFbJtJ5V788ULfXiYso4Nqiy",
  "key34": "nmWLGGcsPEGxwtwVQJu69mSMhBZFkeNdGabW2DqGjLP7m9nwPxzZpuJL2fvMA2BvDcmf8rswX88c43G2rby3YVB",
  "key35": "4isX3u1SCBjDjChsV4bzuDPRhXgQjsr27VgXFmFXf4kommdsdc1qjjZH7uuyT1dbHHhUpgP8dp2sPCmUZEz7LgEL",
  "key36": "5RVAdxfyfkYMqyFCxWSeVNYVs3NbxXm3YcLhu5qqJZPGcruprNKyB5X5sSTgTwVG7DBB1seqtJ9hEGLWsmMmeprZ"
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
