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
    "4YM1PcaGE1AcTYmfXRe6Kss5FnJ5FZWqCf52wFtcpqGLjSgYJYFo76QyDKtRAyukuCNmbeMDC4pNQmNvGCkL2kpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CCs8gWKr8GLinCDYzgPAazbhoN8Up9f8SkRAjix1zH6HvuMqTRWgjUiEbSLVfWAPwEJEK6THBNKdA6ag8aJvMc",
  "key1": "3tFT87S48Pmdr5yundAt5pLQGZzmLNddpBD2RTHrDgQ6sJqPc8t4UP3J6Rw8bQRCZPWYvEzMKoWbZjRrfamh9hPc",
  "key2": "398HT5zqHtpN7edKxFV6ggEm6rgMcgdN2TTxi2HnebEUhJv3cVVW3NXTa6FvupCwfPBVVrZ4r3tu6iCUmzm316vf",
  "key3": "4XfRpRcDkzpkbr9Q3T8Lg1c1yTVNDBB9JGbZSPVFQ91jW4mhfh4XxYv5XJN3iZUqhqcD4Vehy6xsoQJybjgkf87R",
  "key4": "5v98wyD5UTKpYHrc8pAZX26U2c7ZdnAK9vXqjk7thGNbtMzKYRYRgmFcDjv1FXhxHtuyc34JLBdXdLDn6S1RtbnY",
  "key5": "2xsCvhnbB9mKfFcB8yNoox3rFaPSaRGCnCxNNB3QRpA5dd2SwsJv8N7yYGmJGUfG9y2KiAnTKN2R4SWpWDATkmtz",
  "key6": "4AzmRgztf1Q7cg85yi56g5SJksUES4Wp1uT6azVHMBQdVzLWJmtNhEteQYYmApu6tUW3idu5X9FjTz41aJcaKaF5",
  "key7": "5KmakRRQxFmmNHftew6ZQZCeV3kMZDCQGhtzyWQk2d3CJ5GK5oi2736GLXfsRKgwu8BwL3JNFHLCdDTy7gp8CjJb",
  "key8": "2B6FbeQvW5N4xiiiXpzusVyPhT6KkNtRyPCAf5G31YkYuJ4TVSUctoXLw3qnEhzbaqkBWC47vkSh4ao7s8oZjXov",
  "key9": "5qg6tE6BcAgxWaFNCDWxvgK4DZYHLYVpDJnz58A5CPNaYuX8EgsdZCxfAeSQ3R1FVEaiRKRwf8dYr2Kz7rzs7rXw",
  "key10": "2xQbr5KWR4no97WpfeepvdhCoRSi6SWypFTQ5R3GcwVUEgr6tBABfEWXKJHT5qvVUMXmoPmx4MAamxuMj993qiKz",
  "key11": "26Bd4wtEN8k2jiEGquYpAaTq9dd4ETNu3pmLX3aHfQcQwkj95om1rM8jF8nx9hEM1gNf4xZxgpKjJP6Lonm8Kafh",
  "key12": "9JaD7UDtdsu2tu1xFpKXewBoK1b4aisu2aWgEtzU5c5EPff4x2MmPwLcktkWiH23hun5pbVvdSbiE7qVbhKKyJf",
  "key13": "3jybrVQq1DZ9sH4aDhLPaCXR4n9MR3ydryAFh9LPopxcErb3ep5uUMoguFMcm2T746HobBSAjPguak9gnbaYNntF",
  "key14": "5KLQqAkcjwii8ZBaJukiVv772wTFiCeQRWUZ1PCMFSvDQPNvjLAZq7r8cd1QMJUfvA2JbP4M8t3oX6JHTv95qwrA",
  "key15": "2JseJ7j5E8R63ybh7R9Ua6xGwLp6QYmxWUAQaaJLHuEoYgqHmgVcnZtL3rZZtZV93qEkumZd3nBvAhz4WRycY9GG",
  "key16": "3GFeQMDJnEfKwPb3EyiUbUoUhtEJ5EGwK634bjtrLzZ38qsf8kjtzC1wy5BVAoimKB41doJXLAcyzuxarUxj4s8r",
  "key17": "RCQW8jmgMZgTqphSzZuHTdKr6gtBPeTKDCULPF8hAEVkBzXtQgEEGREXCQpcuLJZTmS3UpKpEeAXmKqN4G9YZck",
  "key18": "3PoHnMJVqBR6jVG55qDc3Eua7y57S5wWqrTsTdKoCPJAREDGJosfJyh6cB5N9KbmJ5V2FaK5btVKUYYjUUTWczF8",
  "key19": "5VXvghbEVff4UPpaeik29TLaL8T3i5DxGAyesA6utV7y2esNuSKfrpWYs6okquguFpJvU1CHNXXV1zAnfdVb4tga",
  "key20": "YwSG2q556vpmMpfYQkVcJSvy65nrpS2UbxZadKHNBU8ad9ehbjBRXgNxZqrugFycEVBvSxTaCbKFfNRvjJM8FVj",
  "key21": "67TyszFc6XG2wWRZRRZ7Z6Cu4cKCsYobn4eUFVWTypeBDgv8mxPuMN83LkR8H9JkWCLt4v4L3Ae9FtQaXnCRKp55",
  "key22": "449VnwTcy7NnrDPxedsSV7dThHuhn1yLFy8eH7tgE1bB9SJBU6iAMrMxXxb39aVxqXHL73qLfeWLtY3pNDaQRR6Z",
  "key23": "3g7XBVft46KHpswDSdHtAaGap2eaUWhL99CYEsXjsBo1rYU5r49uNGrrhDzQeXcQFMmFBovwcLNsLxgHkFAQKwmZ",
  "key24": "3nRL9WaQjxQuXumpr7EdE1ZLQ1EFj4TR41KsbHt5yZhGFfAhNH1sY8Q6iigBCrUaoBeBpBnXkR9miu8vwuz1H1FP",
  "key25": "5haqXrZ5yv3MyLT6LR7mVLRDdy9NjBUKd2Vxyy8RRS2EERmcLxu7x1MQ35Bxn9EAPPsWZkoqQ49tZeiPYTtjpR8d",
  "key26": "4iBCyfDC9qB1yQ9aNeXjFf71c85oQWcHq6iL5UdoDb9A9WLMGcMSNqTDagP8yV9rDGVsHLL3o79pEnjjSVfRTqgT",
  "key27": "gJ4LUDE3TUVJ6feQBrAL47m8Px89sBWTnRbLpkKUBLwyWPpX5RGjut8kds9ctdZabd17HV8TXKmd5kJh77FesKc",
  "key28": "34QqpU1LLBRhfibdhQ6GnrrqzquthK4nn5rcync5SrvdPskwrtPKb9W6eoyWSGMQp2HnAn1RaDBZkiLzmQe7Vw8V",
  "key29": "tTJTqRU9KgGDJJB1oQauomm4SsWJhiKtaUNDE7b6qD5uJ5PXvQK4pScThWy1Yx3y7yj9UDC2icgiAWgMWtJyHWB",
  "key30": "23miukHsGQfBZ54u5Eb8jXSxq6msTvQv51orVS2hR4pp515tFJxZngUFhxNiYM6uHU8JhxA4rrBK45JWawweeUkV",
  "key31": "5DFeK4izqUgz755fx9wshady7DyaEBJrahoEptwKCCKWR5AZoriTtoGm9b1ua23B74yranJbhXgL2TxQVTYSmdqk",
  "key32": "WbCe1zTXL5QTaxYfbtNhJBX8Mdc48G2hbXJoQtzukxCUhcAdsZXDkNZJtrtDccGetQs9GnGHpncyocra1MAS46R",
  "key33": "33WveBn1nam8RUKf2D6MipgUULBRw8E3BLfQnKyaE379nXK7BccPxJ5XJMagbYCW5EHN3CNWcKCEQZ8Y4GULrTLM",
  "key34": "4Zpukjd8FzjVwuS1wojgYazGS5D54SEXnsRz1yHWfovM3cEubY9EQmxuHdaTtDsA4Tr16bwy6xcB6QozU2uYeG1x",
  "key35": "3pe1LvUMi97MyEyYYVdsUBibyLwLSydmn5Tx27XrxV67bUjws5fJXncxd6ngTHSYJzkRWND2CWZw3cyCmfuU2nQd",
  "key36": "B1XHVtZr3fCDiLreAqNSsjJe2K7W3bP8u7nGzpUr5RgY1PPwuWkgBfsKxqj6cgxT18iXwLFb77awKGbBaE4tR1T",
  "key37": "4LmuCk7ZUXSNfj1kiS1EDx2Jvyn65KC8AoVmQbAGVbUJj8UmBJvvLw8sAMiPAaqV3oe3N2LFWshUednKKGxsu4ha",
  "key38": "2ppvaN1yYSRH2Uiw4cnBWRTfQKrxfT62MLsrm5kULyDznMW6ScGbHvuarW9L1nxAL7WcSJ5dXL7vyLdwKz3SE7UE",
  "key39": "4ZdaTDRNTnmfVG5DmacpAgCEjz5CN3Rqgj4yFESWvu7tJ4J8QCdsGzNQwRyArucNrTtcdZNMcPKdUqFceBDaNbkK",
  "key40": "3qeizqCMEiku1wWurHZMrakBZhasBPJ3Eg15pJP5pGXxE3VjfBKrfNXwVvckrPgN7xXr8CJS1HewvBuPjxFnVnUZ",
  "key41": "42spuEDUyePPbzuJmtDsLQ4GXsgjgaPyTSFesrZK7hSAd2ZQn4PyVhydeWLBHfZ5r6nCTGP1XwaYCVKaJj4Aawm9",
  "key42": "65P7amKcpQhMEr29VKNJKz1ovZQYomS5PDiKUpmbP6utbQvLRJw6roEcZAVvGzcEVeku935pM41fgtJ5TqQU6oGR",
  "key43": "2pT1hUxerbWqxb77ff5GCSSZ1yeGtgKfGXjybjCTJxbsmubtRVA1L8tH2KKLM7w1645k8SDv5m5BpkF13UtZebvD",
  "key44": "3iMMaqNZFamDYvGK2ebB2MZa2Ust7z9bBFni7mxEMWHfoyC1EMw6ciVFFxv6j8Yvbh3iqJWQ4dz9Awv6WWumSkZV",
  "key45": "2rNYBTo6gXuy4nikRbw2eJsmEBkJDBqbkCD2ztR37uXfov2oXoNgpZvKFKaWFUYDjzDxtdukVbRrn74Mq3RYxHkd",
  "key46": "2UdKg7WoJcuUK5G7zFV2RQ3iVarZpyhN4ySNyvncnHtLGw5Ws1evccv8bdtPEmiWNcKoEfYSbEPEVYaKMNXd5eFG",
  "key47": "4hYH84HXuhFyU9ntSFLppdCw5YnoEHN85yqgdSLKjqJfB2XZY6YKWE8oqtpwT7dMqW3ZKrCjxatZaVWrarxePeoD",
  "key48": "2VXVisHQi2FU2Cc6swznvkwUD2p8NNWMwcR6AL5JHg2qxjV1Zd9knmwK7Pymxho6M2h5TkGpFVo5MWJ7uxyuh5h9",
  "key49": "4sbZFKiFsTUnQwTKQanfsfbaJSN1Xwhireh1KW61rrDLerXQsVWVp2ATk4w9XxeK7hNcedgnZsXhWPZXKMPdmNst"
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
