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
    "4kobxvHm4HYC8rNdouBQhxMBqiU1umwLzUjoefNc64Tzh7ATvoNFgYm36DdnLbvNUv6yhwesdtVwj78b86nwkaPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326mB4S34YP8cdLzZndNv3Z4NSUjndY7b6mL1PxpWb7z6Kt91PzPCwymjC9whDJ34XtjTMczXhdqujGt1wFj5a8L",
  "key1": "26EHCiKRZRuy6ktkuq4j6XE4mJTmB9yoa79TrZ5EtBRqxzDNYwjkmj5vSRK2ThNKFUpXTuzzH3U3rTQyXdNWGGwU",
  "key2": "2jy4rM1g6LyTT2r3nWQSVJfYAeTArRcp58F1VxVjQzD8bWnhniEcsHkjN1ZrNrF1Q9h9EExwGGiLbSG8Xjkyu7Nm",
  "key3": "CfFuyJjzXHAs2Jonn4mcPJKcRmTxbtHKE7sy5iuTGGkuSW9yB9BNeYi52N7mQdH96HejirpjJzxzPA7B6359Jkg",
  "key4": "3oHBRS6KPa77BucGMZ7RVYFcxkdNTjKHe1aHE5i9on4YeU8DQLtUBqt7TTdeJxAMiqb6oW3RHNiPQihTAcSivbjJ",
  "key5": "4KCrxY95pVu83AiWfCinykMsbaduzm5aH8Jfhp27jkK42Ag9sG5Lxn9hXhZr72RMRGq5FmuqQaonHZSXE8uHwyKp",
  "key6": "5483e9njBx8J2vXNNBKpQygWZwWTXxVgwecCogMfQsGExbY3JRTM8PdFYi6uY1vvsNC3SEwfucBcxCisEYimxZbn",
  "key7": "4BgZemkbpfh644fkfUPm6kPwdVsJRpj9pxm6bPBN4bQGpHStJuRjrtpoGnx9Kbzadizw7KUA5e7bf4hyhQs2yaVz",
  "key8": "51kUdDqFTSzPWc3bS8YE8eBrA6vBFLRg7c8R2xNBXoCnbJKkno9DkTtXEu4N81BoXbxYWh7V6UhnNMcZqCZPzyUA",
  "key9": "2VundTXimoiJRwKAUvuUAe9t52hnTtBJNAAMbLahKer6C4QhaziaGnkMfwDNxAKoQa2jsNbviYWhqHWxYAGbsQhA",
  "key10": "JCNh2AVSNkrip2CFEHjF73Ps5JfoRAyyCeS888qtdEYLBMKQFwGqgBfxp1rkuv4Lf5mVM5ppapBoPYYZeFHG7k2",
  "key11": "4PVJCUHQ26d4Zyc3r9uAPhBLaGzarCnpPg15ZTsuL6bGukPhqqWAWj8mHzVTSkoHdpTkwpctptjD4noch96QmXWU",
  "key12": "2dtij5GprVY76BxVSHjuPXso4tojfLgjZCTNzr4zfCKVDcc8yDJGcCk2HE72d8uSFcugybYcxPtx5JY6ogvr9a4D",
  "key13": "4gMdcqMYTiwnfbsnyJEC2r5vCttB6r3sE3wnxpQAgXNbgVLhx1qt2FXnic1qbnjyQLcaNEKG8uRVd3i1cG5NqrZC",
  "key14": "HFs2AVKMHfdKStbj8fwwCXNbaDNXhrvLihFc7n3H67KKNzfnRaLTeRXfdrL2WUUes8S8uvem8ZSFDwj7PqQE7j8",
  "key15": "Ds79ZJiRkDWimKcaxWEeKZR3ctcjCxDvWoig3mAxnxzckaR2S3iZcUzqiqMHLYEiRbzicnSQ4JbjFiv7pnSswNq",
  "key16": "2HbjkXgmeubHpESRWnBsiHts7cxKqmy7aqaXrzX3QMKsmVgUeJFurjKo7uS6n8KecAWkgG97nWdCHm6Jd6KV4Bpj",
  "key17": "LReeaY6aUF3nVBLKUaRXxGYMkBfyTCBRu8a4VFGhiwWWuBTPQSSqS7P4rEexPodbHrMe2L7xWqPGXTNc5vFG3oe",
  "key18": "kXQdYDugs1m1eNqsxyEyJAJCwQ7uzgQDcqSgowR64aNy3oZJxovKpjHHFpjaa4pawEF2pTqLsBNmBBouRxsVEWT",
  "key19": "3jauzpTnSKonbth5cCqaJFhSivGVGQyBzYgwa5tkEjggK7ENkJ8e6vyCsXj2KSKCt2msNdXY4rkSsLDzhgmiv2cc",
  "key20": "2FxRFAv83YyQgCmUSHg8yjtXZ8VBKNY91dUB8qvjEbreTvi4dkCKNy2onN6z1LBSFnRZih4Tx6wk8rs9wP2webpz",
  "key21": "5HM9d4p2NKwgn1A55p1MCyCvtzrK5H1iAKGMeVhDZTuM6njSAa9Eexie7ZcqzpQpgPRLtT2cVNtKDhMGFKQ7PTxj",
  "key22": "2cP2rPM9kefUCD3HRMqXv8TmW16BCbcgW4AkCqxSyUsX2ZAwYCk7whzSayBCiB4ZxjjQhaLfSNJ8nRPnQY2f3cce",
  "key23": "3dBqPTqWtWSveivsYfw2vQbGqaKryE4FNKjzTynSdz8ei8wYj3PCgeP89K2VnrB27j3brXLhEvPungjGDkWPNX5y",
  "key24": "xCkriPYRwkYVDoKfS2HrKh8PiTVxG6USaFhsrCNUKQekMgYMRLxmdhK3kYhs99g17cBNqXNXzuPMhYG1UAgWweh",
  "key25": "2CfYgkYxYsBHREYXwqHy9xca5Q2kr1mWFuBHtiizNNvPZsRsxo58x2GCBHhZBnyUw8AQYceDXNjiF5DFbQo7fq7A",
  "key26": "5cJEGNU5turtjPqWGtW7XvjjuLYE96sHiRnm8N73Z2NVTyo6M1c2NV17Pung7sKpCyQVeXXdMgVhbHX5x4n2z2TS",
  "key27": "215QDGeRaBombgMbgteDjDiAfxCdxztZh3b9NsmJZp12GoA8WLgR488FhjVEmvnPLmRj5crWNu8u7i68FvUZhWs1",
  "key28": "2Mc8zbPPak2kxySaC5TtukUvfkeHRW7gUpQzKYkgeiCXudAA1iyF8Q7JXihZzMquapMev2ER57z5RfnRBYiChahe",
  "key29": "4vULPrvqAED2f8AEG81VQXsHzenfypW4tv5RTqTDVKPyP6cSbMagTQdstos1AiKzBhdCRvki2dy8Mvc7fHqFVVxG",
  "key30": "5H1ALVwJ2mhcQky9YBMUh3cxmU1gnhs26i5WZQjQupLxWzuPJCHLDGmiXJm4Vu9xVmwDtgWCtZAVpNnZQnpuK7et",
  "key31": "TrG7hWXnbybxwY8LQ1Q8gsbQqc74oaowR5xjSMGpML9exXYu7bmW3TMnhhRhJuE1bQiXNxxrqB1oNVuH6fgop3v",
  "key32": "2xzXqMSeDNcETbmTRpYLyFQfs9MMXUAMP5vUEuqtsfz2WEWHqXPJjTmk9MmTUhKQDN7gkP8xz5nLQeJrWwnecLkL",
  "key33": "5tTTSTptEknE8tw14nuorqP74jrnhAjGpJX7wpjN36QhanimGF5gxA8tgps3837jX33nY6iqgGULtXqYz5c8UaVv",
  "key34": "4rUjvex7YLSkWM3mkpPhgiv1tccB7CXiJUWWNX89hDhAhZXUrv19Ps8CULZBPm1y7JnF8PW7aC2bJQt2Rf7bfqX",
  "key35": "5HngdxFHqREcSSqqy3KMgZ4tAvCY9F4w1JnK2L3v5bCBUjeMkMTWED2EqNgFm9Yyr8FZ5nci7B4Q9RPUeAqxHydc",
  "key36": "27ZCMDHi1teyKePdtLBkxX4iMWnJquTiX1i1DGFRn77mH1FsRu4LHBFLXiZv968JSnvQS5V9ULoWtJXjjmgcSFke",
  "key37": "K6KYQpNBtp9GHMRA4V7qxizVJNZ26nZZchGuofNMFdoxCpySf459mZ8iz7nMhhFbA1xuSgkJ8V5b8wc7yAsPrUQ"
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
