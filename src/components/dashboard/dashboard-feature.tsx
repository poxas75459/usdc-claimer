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
    "4Va9JrnjC6JaYhtfJzy68bg5vVEn5WbKP6HMHncGd1Krn7UgzuDys9f2wnsZFcCkrrndwyNMwz2Jhjk5JUBSbY7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJkUiYdPoYkMED1sGcjkmqYrK7TrjxBYbDVjGuVTjS8cq7vUbHB5Kpk8eN4vJQDBJywCVy5Ay5FmZePSLfHsSnQ",
  "key1": "5ikTuqj76ZV2HvzhMzKSTLqdLe2ciGL86wuCzi5V4MGYuXMW8B8wH6BypgHuDpa4n43KrpUagZ47W2jXYunShN4f",
  "key2": "6LP3fGNWRvicnn13gUxcVbc7rs5aMsKrWyFdQxNuf1hcPwpBhqfT6xCSJevYd32kE6dh3MGcS5zzJQC5y3yquGD",
  "key3": "5dtoWf6ga8Ndsg1Pp6PR7NqNrbADhYtKwHF7EDpNUATXx3QAQrJTUFFYo1vBgSDMkdQ4BCYt3rQ41gV5XMBez2Wz",
  "key4": "43KEm8xhKv7fDvMg9ckUJYCunHy368u376xX4ZyqzVYYKs17KVPFF5u6JGvGS1R69zHkDhHxuKGQ8QuEPWCuSTzZ",
  "key5": "4aAkKiJ7JfoR2hGUxwK2rX6WDd3WMfbLhq8WwQkRiMNwB4XYhtxg7dEo6hSwxuzPphq2oFrQRqZfm39VEAgiugFs",
  "key6": "3j8W2xHTd6mTHTRbd1Nu97j83irM8z8Mek9Vk7R1hgdX76hdyuNeDiUG6VmWpBFdcvqEwriuy9efcFe3wsLc1j7H",
  "key7": "3jq7GCnongz1VrGjfoEixPkhTdhnS45W9CZ3UQBwBoVPYT3bAqqDDZ6m92gmMtYKde6bJhuvMxCnzsozF2KhQTnv",
  "key8": "3fDXn1am8APRdZXvFJduBRM64Gthw4uc7LW4CUSSGNa2UtsCZZqWuwwMZE3axps6uoFpbsLD9crL5q6zRWhTCGpe",
  "key9": "46UzNh4F9u2735wJvLm7B2J1rEK63yD6ryKK9ax1Nt1wiFPb1KvzTjyRXYFthnhPreqcBJEQVvMCqK9yACx5LnhW",
  "key10": "47uC1iPjMB2bo5EDnCv6fJ1mLXRq68YwAyTDhMSN5Afo37jZCi39GAEe4wMPqaNGnxctaWBJASHpCVFwJPcovDMB",
  "key11": "4Hf1DEs5WFiDXgyi1CgKLzo15Yd3fG1NcHWwXhpHgjshbAfscEJnAqChDwEaVHz5qpnyQwGQLKjjAiCz8MfyjckC",
  "key12": "2pBacPgXFrPdJ4jiy9sSGteti5a1iqdi5LeNY1JHCCvzXxjPLecwWNBcMnjvgSQmSw2pJvcU4VXCrb9xLRbvxVR3",
  "key13": "4HYdiZdNTy65P3TgX2zCrN2zeLvx4ZtPhMKPc4NvyV5TG4YrHXVDyEf7LTMmwXTcaYxeamX7gtYwsuwcX1DB1czE",
  "key14": "5xJK9soSFXJAMkyuuhK1Fkyj1QKCieb4xxN14iLeVZ3ceXxcPMrro6yCWHptUBNxcffTqf52Cf2AAr2VQAX8LWm3",
  "key15": "2pU31Ngb3NWtnv2cCSsPCRyajGo6r5LXi9vuYBpZFoeMsDKTvAV2gJLbgRvgHgMKP21d4BvdYi3mhkVaHAnEK7Um",
  "key16": "dKXhT2fizpTM6ztd4G6uDZqypQVMtxgJTqPw7MsSCEfurxhKMZ8LWtTUTuecKARoFWkBdBusqjnHjyq8DxCLcrG",
  "key17": "3HXUW39FxorBGhMsjzATUzYvc2tBZn4g2aZbWU3V3hYXMzCGte1yKtdX1s94By9QzVxu2dg6qDqgbAYgtHAnV6h8",
  "key18": "8LhiMUz53n4QcqBKiT2GKohapyEwANPWmZUKsPutY6TgbWKe3TQn1uTKb7aSAFArkQgHhskr1ScJwGwBjucW1zA",
  "key19": "2QLTGVQ6Z2s3zFbR6i2swxU4foYg8ryEmC2YZYvFQNHNRoLiKGn3Qa3BncEf4b2D3WVSGQm8D4SUHr5B75GCUyX4",
  "key20": "tC8yJ1zuwveHGz4Z89Po1o7Hpd4YfoSViVJeqgYLMDXeg3Wv9yJb4D9naV1THMevuVdFFH93U95PCESDuVffLWb",
  "key21": "5v3v4JEufASEz2oQkAU7QRKGBrmsKUPm9A8DzooDdxR4ZScgFhANvCpXXyXJwJvD9JH57UUvdj5B9VSaRtX82CTB",
  "key22": "2tT8GSyAr886EWzSbopYmAymS4Wem9tz4AnDLkf7ihMt4UVbjq1BXbNyrEMEPYTra6BSqxZhJh8nUh9NU8YRHTMY",
  "key23": "2Wet1oB3hQEhsbw3LeDAsednd5UxhksxTBXKUQEZm5cWrw9GrLZ6VHnvX1H9QG9BdE8vV6ps7XiCVmeH7hemSGVb",
  "key24": "2jdYViQ6xHmr6Frbffc9VDgd8ZrQjoPi8uRwVgFH5Vh5jaz8M28YyVCSMJX3FX7wvXBZLF6CnS62u17q9KKiqV7r",
  "key25": "TT81YgQKxpAajdkLd2uwbC24TPDyQwAUBzfumsKANMkZ7kGeDbMyka7gSyCKpkQ25uyEfGcZwzxGmZZbUMdupEp",
  "key26": "2B8DHzwREVFbiA7Zma4dncthZoumXR9osAc9NTTZdpVCwY1FYLt6cYiTtQXHBCksKQ8UPPimNioXbPzRV8LwrH4j",
  "key27": "QxmM3aHrVe7ewTzNVvjLYFuYUz5bVBRHm5P8r8QvkNQbDLq1i5MF3rtfYkFuGjRYjCt7Zf6uhgW8KChhAaVRprR",
  "key28": "3cbcbs2HM7tUjfVQ8EJDDxTsQGV2UjxBRLNXT6DfaEfZDfACEzx4bkrBa84xtX2Rfm7mjvWg2gU8pnebRHJuzEXB",
  "key29": "5Vq7CvxYfeqwXgxoHFVETgMAurv61pft2gMgrYQaZuGiBujJkyFaP6Xt9HJNAC1GeoNF6PUjuVNSCDW753PtuND",
  "key30": "43WLyXs1VvMifPr2MCrwbahoc9fRNtLuMmu1cKp45sufDkaeQWUSpqMaegDj1A4rGuxetWUnfRKUm9rn3AY6WqBf",
  "key31": "2ZiQBcYoJqyj2RzPWkPW1RkUxAagKXUxjZ6xEKZpbRKyBBqsiri7vyyX7npctHeRc5TKHH6ZeiRwZ1xY75JJbU9L",
  "key32": "25ERfNvmCY9q4NVPNomJLPrDVUqPg1vMqS6RawLChiGgLAyLhg12x2DweUyLb6KTPkHuLbZeuGXBygaTzVvt5mGp",
  "key33": "uGjtUYXTtmqYtYqG6H81VqtDpaBXn6n2Nh3JbvqGD7gLg74FMXPAJATsGkKBJQD8cUZ6uscYBWSDue8DfXSDQ8D",
  "key34": "36V8Jy2dMw98ZQCv8oMcfTcdufMHYxDwKJ2q9c6deZoTM9vQocYKUC1Kid9LAK6e5oFbVksZ53nCvUiRssNYY4Sm",
  "key35": "4crUvVMDSeNjwGvuiuEdrhoDZ4w5bgVCed3hR1x3h6XT1cBupvWX46R7Home8iSf9YXtRJk73F4kahK572Y36KJE",
  "key36": "2rKuAdL5HCdxRyGidmjoe4gqPcsujomAPVWmeCFW4os7JwbUm5fZDpyYSoHuxGTSqc7JAAAfEwzwRJZiBBaHTcSc",
  "key37": "2FUhV9tqzgyMqPsDx7c9MD7ghQU8FxgoEsaPJk3WYH4HTL5pf8QdAPfehd4x1xAqBgjcLRr6wPYYNsjYQCEZcjTH"
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
