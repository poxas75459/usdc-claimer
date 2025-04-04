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
    "kgFmb45rgjwNoNc9Kj9kHm3j5y5rg1BZN5AgVmum9h2kFqfm5dTcvMUsTeidHGx5nvs1WZYJCHqLbo3T89cVwvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sY5Kbe1jkfWsJygRAmQWpAeeqmjeMdMdPCHm6nNsGk47P4yjJQ36jX5SLnP877HqvxeNvwjWEsdEGU2ETLTyUt2",
  "key1": "3WUcrSXuD53V2Vk2f7qrZt3EN4dNwLpSfgfgqfE88cMp1EXAn2nnMo2zVaLRSRLMXgN9SZatFj9uKAdPjNCMsDwG",
  "key2": "2dUQxGaUe29V5VJegnKBRXgfpCoxhXcQtmXADiZC8noDrj3U6RToZTjUc2g7QF9CovZjsgYwqZxUUtLoZ4eh1SU8",
  "key3": "gBVcjn68cT8mg2sTSdkCjcxNu9crcJR6M9i2wRHd1KvnCKiZDvECwDrbtwzJV5eDK5co6MZZoh91hr2H1VWzoyt",
  "key4": "5cHkdXifMG9wpj88iTcTwoqYoQQ4vbXnoRHKzDjyLKBxGqQCCFH5DxxSwxwcwiZWZjsUoZhmt8yVp2nZRGqnFskP",
  "key5": "5p58gSR4c4VEZj3uuAHK6hyrLEKvN59cXVTbXsxHVoaYrpKwtjg9gJS1rpEc7JvsJqn2KTgWXTFMi1nnGCgsZ6Pv",
  "key6": "36yQ7iRcX42qLWVryPJrV5aeJ9fvuvdsjAYDV5qeL7ef5Nkt7rpL8H5JeZERiUpbEhgtdc2FYuut7YJSSN7neNKW",
  "key7": "5gKEkMz8EGiJTWsU8DPZZxTkPNGXZBZ2BSUGay13po7cxPY8Lukp6YvxGYo7N5nSnqV2dn867jo4xfasd2R9vQiq",
  "key8": "4ei8uhWfADjFPuz6nYuTYxr8Kfd5myx6D6yawbdz1YiRw42TDeuEhHb8KNcmZKDJQHnYoKgiBeab3PTZukBxRmSR",
  "key9": "bbmkBTgoqxN3YDqJXXTntwZRxwX1VrXpsAgLtvPVMFy2z3XJxXutg5C68rdrC9pjuLSWzr3n949dwGy4wVEktAS",
  "key10": "3kPhm81qYa6jKxtJryFds2Vkbjs351bAnVekB5zb39VFpwHdwn1BuzZkSvhXk68XqiRy21qCm7uPW9ypz2jWep9d",
  "key11": "2bJYvgDT8DpBnLGhuqoFQ4ES8VvDytSJZ1wHuYkSdh3S32bfZtRX4rUCGKFxZM5Vxi5ABQPWAtJAepmfkLxsxmdS",
  "key12": "3dkUHvd6jfqzmPMCc8ixcjxwrN8bAQ3fcvvo13F7k47GJ6EYXL2U4LqmLnFRB4niAzMrJCTW9xKyoxd8X5VN6Xvu",
  "key13": "fSvzW2NRkDkmZV2ijUrTvYJJPHqakX9dVSGnn9rQMbi1GxaPs3CMQPyAraFWZ5jNSLUdekgEUaFxCYL2g8Brp79",
  "key14": "4ghDsQTfLPkL8g6GWf5YMVZFgkChqH61V6azMzAUKxEvTkjkV6Bi3bQym4e8zFBxPSoJ61PgLALWRUSshddi1UmB",
  "key15": "4YRyJ3SDrvjDvBj8pzgh65vJunbDTCJC5gLF7k34qP9Zm134b1QE2c53pJzqF4wbAm2uqmBxJAmMSf5fB5RQc3sB",
  "key16": "4WCwspBE8U5kouJbVmjDrYu2UGSwysfXHEiSm1taeVGzTFrhY7YmXBRVKyEfqiASVgLitExykpnyEhDabn2DrrxH",
  "key17": "5kik6krv9Ro7uz4D6FT48ispsT5o54oR4ALQnkYeqnYPqEU4NbC4yGNFydxMV9uGkHtfTbPmpNxd6Tg9SDe9JfVf",
  "key18": "EqNwM598UGZEjay2LwMhJFbANF1UCfj1kTNq8QKZQamxQeHTHNYsTCoGZm5d3rhThnN75Nwn9QcUXZm3aFeX18s",
  "key19": "3fKwsBfLSJ4GVqeZbLZxvAR3M9G2rdQB8vRUdGQnCpvcS8vFzbVDEb2Bj3BXkUkmiUh4nZVUt5mSnTSb9yhpk6nv",
  "key20": "2uqcZGXkKCrhztGN7JXdw8a2uVLXQ4dc178SKVPQoPZiGcpsKFQ4tXv9aN5u686p1v8wz452V9CbhBtwWB5SLs5V",
  "key21": "3BE1mhJ8V7nGoTz6b7UYCcd3FoZGLEtgZptdjXUM1oosnr4NiimftdGK3EdKQf8spVDiy8HTpAVWLjKowKyHsyAk",
  "key22": "4rxKrnxqtR9exxXU87ySdKARHefMyUDcKN4JtajkkHM62vMhpDrQZaPhS61HJJULkGHV36VZ2N6patJ2DGLG1mnf",
  "key23": "yW6Q8XimpUbuSUDE8J4WjdSo9uq6VNWgyJ8zANKiENtPkLaBzUzUfPehmj3UnnqBcdQCo4ubGp3sxx85za42sdi",
  "key24": "3oMDRAvrNk8WhPWtcXLThUDwBgNHXJGWXAFBVZ9ReY6fr7kfpLBWNFfXJHwmXoo2Qk5bFoy9xffgHj9HWLX3s54q",
  "key25": "4YocjGbCxkYvhhmFxRYCsXjsRkA3wt5NhxUuNo5WTWrrA3vJb1JR47c7iRfuBvhFJVXS4SrfiAiBNQpYw2NKjhzo",
  "key26": "88FqYhNmvDFwTaGBRTyjyjDhHCJkQLbKvb7xypssSH4Q8Qes7F8aiGBLkxpP6BnZCmRbiX7btqNXigiKwz77DcT",
  "key27": "4SQrfimrUxciPrBcZoxP9KM3hfG9iNvRdrdFKBnR9j9GYANXycQDkhbp6HK8vaZ5SmyTo8S1zpcA4qX7JNQGsHo2",
  "key28": "67MGgoQMh62zB6jFTEu78NRXpweCJZwQwmtGGymbqfU2E25YwboYvQq1AFWbiSorAoWyPox5FPqRw8eiuWg1yANf",
  "key29": "4HVXmGnbV29EXAyavwJay8QFEYczmFoUCewjDuQcA1C7ADGmr9rw7jPzz5pGDaytr7XvJPtrKTVhHH3RraDddk5R",
  "key30": "pd82qQQQgQkrTD3zrYYkCjS8H4dBZgWvNHvrA2aPBaSEs67ghXD9vWavX14mkZG149UfcvRVFzg4NqUStELXSZY",
  "key31": "574r5aYnxp44Z4PNSk9aDtLAM1V1ZFU6YhEcQVFpKxRKemCNd9gJuSLe4TaymXq5XrDUHDW7wEBATBqA2PpLwhDt",
  "key32": "43oXZn4hPz1vgApfoya7sKwzqvUgrqZgonGsgbH8BoPuWSSf3QJHXHVU8mbb3saHT1o9pbX6DXVk9oMc2RHtBevS",
  "key33": "5eGshGzi4Ks493HWNEqs8gwruhAF9P1m84DHxpSXYUUAXrcFPYpiX1avqZCHwSLbLpUwYvjGwDsShk3c1ZGuYY17",
  "key34": "5GUZcxPGVAZpyiquc6qvZUEQVKTNbJsHYZG8EmFqpXeeNb8WrBtucBkbYRLdfHUDduQLKKxJ5ky5ELtpS5YAyCwa",
  "key35": "4XMSw9xjuYtiwr7uSYAHEQSVXwMhSri5EEhifY5P4aFAmquMZBNACk8HUMTQABZ2mHjgichWPs2vXVuvbddvFaQs",
  "key36": "3oas7fY1THdBUouqiZMHt6KsvA4fZjRe2VDz33PUCYggkBGyTWmW2pwcRKy4QPzqcwVZwQHpH68u1vuwEGiyvebK",
  "key37": "KsiMofaAWBrhEjDnb7SuBxbKULXu4Ury32R612r3vf87Rzx3DZCtyn1sf9YGFaFZMyXVm2PA76Y7KBsDxuCCaY6",
  "key38": "56E1PMj72SfHeNRU8Pw3TggaeCEqcV8s622NL8egSqQxkxjxytSBLoZFNtThGwin3G5VAcc1WR9yHSsu1vzkXhsd",
  "key39": "427feTBHxcDsnF9fqVQf5JAfKXaPXMZ6njwMFiqw33UdzsVj82oCBKH1Di1n6HBeZGRJs5E8FVkwFRFgcx9se7MP",
  "key40": "53GwEVEvmxCX1kD2qW9PxVtvHWNjmqvr5LiijMKCeX511gPgMN4eDbbBUwsGzwdr4ZCVHmrJb56A7Es4j7XZ6hu1",
  "key41": "5YzVynVCgFRrMs2EPkpTz1zB4qnY2QhRQveieLRkm67WpNs7GdJEtTYAmzg6pfTLUNVW15GYdg18idguC6VJFWXf",
  "key42": "KH13jeUFu4fsh78SA9Rt65Rzt4UhQyWUVbA2yKMaRSzsb1LbxZHcUdqQwJTLbNb9eQTJQveTxmZHtxjAFKHmYGY",
  "key43": "rcurFaPUqdNgFYfm1sGWE95sDn6iTWu9VvBFv3PH2Fzhyve6FTb7uaQgPnttjpNLJPvhdT2t2cquV7RRf35eoqm"
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
