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
    "2d3B2DRJqs52D6VGSmo3aTQ7xGKYYHZ8kM4cFrERi8chTvYxaEFuHvcZPdCoyJvZFyggHFCeQEFqMX6Du7ARHEir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kGaKttVYCzjMk7AUSuJGeVppdcj7UAWK9bc5dEuiD5Drm86TNjnPSNBvUaLpCtmAvfYv4niN5824H5zqgx66suF",
  "key1": "2611ozaJ9J9FWJcbcMinDyDtCKUWKt3tvtoPfSMZM6RGCUUYFwp84DaeoZftzsVDoTgHWF1JGfQYQcTFf7nMQ342",
  "key2": "2aXHqX8KvMc8VaFCWNKjyo6PGnrp2KShccsicvrPDmeVWwxJQhrdQxjkNPxsaeVRtqFd6iVhJMhRm4UUEby6Vqxw",
  "key3": "5Rj5k2rMMKbZo2g2qtHR5U11yuEF2nyqohu7SenLYwsqbiv6BvCMaQAdio1TCg8YCrTWuVAL8Kv6dZoz3JWaGvfz",
  "key4": "ZoTjL7XsXEd36JT2pDbnWwS4bdgrM1xqz4ELKyRFipjnsgu3yqFFXfCpin9jrWFANYHTpzFPHNMC87bJEEzDtXB",
  "key5": "5CZzpQk91CrkoLzK3s9DEftksSt9NGFY2fhvUFRrMCv4UVwurNdBcmUiGKg5ipfNpfqb58wxdH6kCSbNcC2idT4F",
  "key6": "32PXAgXEvKmBqguvccfN5TjuWknzGhWuvqcEmFJ6EbMRAkK7ZPcGBR5K4yBM5AC5GybR6RdmuJAYSA8zRayCmoUV",
  "key7": "iCHRFDoHKTWq4NChfbuMGhW9uU7Qz3N2VorhvT4SdMzS3CF77SMUBtkcmNWfNB4CJ1YxgWZFiB99LLiGqKdfWDu",
  "key8": "CaSDTdYg8kt58aTHho8XvAQXEkKqHv1u8Woo49vb4iUZWNv6WeVxVAz9H26ZVsVxUEA6f3QHRGsHcUDaKcRY45x",
  "key9": "nCezpRGsPuGYhotMejfg1ry7fJjHCmdXw3fNB8VeexUFm9zR6rmKuQ2igv1qrFG7s8tM9ou26wmsbxHkD4jwUZF",
  "key10": "52aCKCwvgTGzTt36hZiyYo2ySe7wSNzYZaM8XhCdhfwnn1kydNJAW6NDGeWVoeZQR3eBFSCyXpZzvD5Je3CFprEs",
  "key11": "RhyYVDiHn7DHRmthcTZe1zFUqdriAh7MkX2sKKuW1k9L8oKouX1gftycM2uQDXN3D6FYSDiK12gdk2buAKaWoQp",
  "key12": "4ACa7E32azBNeT1n8j2TjKnYfcTo8Grf4UzYsvdpCcw1WTQdFa2M8PriQQ6jUTszRhEpE2WpimtRVkFuEKWH48kG",
  "key13": "3C74vn6Sn8iCeRYqmMLXx9QEgVsG1BFbou2h1fQ7YWQhfYvbM1n2YoxUTpb2ZWMvDupExyqXKVDWpttbKDQFY6H1",
  "key14": "57YS6wV2nNwDuwmTfdmJpN9goPoWN93jM18K9jK6tyXdaDazr7RzqCHhu6Aww93jmGxYZr7cbHYdN8iTrDpxoAvj",
  "key15": "3QU9r8eNfK5uE7p1we2tyEBtgxbPi8MAhhEABBuS69jwkspBN2whzBtP4Wqg3NgLLzu8RFzRXSE68MLbrWUtioNN",
  "key16": "5d6DvcSeEYtXV9UdtQMpPk1ceuhLykDSM58SKa97wPCZGsyBXTvdpSna6i73fGVuUewoJE9uqP37wtPC9nWMsh3d",
  "key17": "4vtjZ2tZ7STUrjpNVbWfcHM4zbmH6A9CJiT95b3qhaAWJBuWYRszUapgtGjJyvsFrZh16QrSgVPfFfovafMqW4w8",
  "key18": "38i1x9cx4LsCJynLAPda7nY6URMfaQVex9TsMCc1iCujSwLixRoL5Az9nEmf6qLFEXBDiGG44gCKAG76ZFTfPs3A",
  "key19": "5HYLywSHAjUUkNo98kpLjBW3g6frCDUDbL9Exgu1ZHAU3hTJWU79RYXjs9ztTPUo7gVu7J3ChiGMb63g2dBeoT4J",
  "key20": "49UY63Xakejbw9LLy1mBcH8bRWk531Jhz17n6rtt5yiSnFFvWySkcg5s11bfP3bH1Y8nGuU3VJPBC584y6Aufz4A",
  "key21": "cB3P91QLMwtG4sZ4brc64xxz3JD44uNfGoTsU362FamwdTvREDnSfp8Wc76MhX3T3FYhAtfjng4zx8PPymDFBpj",
  "key22": "3LfGe78f87ACmYGTUHC7DTmztb7eS5ZdB6WK1ppDVzWMVVxazdYyAnoX1oj8v7UjyTCzLuyhCRnEjVbaxrdZe2ej",
  "key23": "42PngwZhadxGTdibswm64UQFHVm7rvkiduU7KThrLgcRpimTAFwcGp6Lw4pkz8YaTJzdfTcSE4sC4yJnfypwkc1n",
  "key24": "KhUpp1NCshUKLE1MwZK8hCNKWLSCiu4qF64wNKWhphspuFppPFXR7v7eYVTfdDbQSBxmBrYVh22pjHFXLuEE2pn",
  "key25": "2KTxALJrNcLovyEnjsjC4FJWEvmmTbuNVt5HVf7HZAnXes3Nu4Q14oeUvUczEkMzXdQcb1uRakKTXCjzV3DbhxTW",
  "key26": "4Y3SDpjpw4maikdbKUT3nbVf16ndnKRSUGq6yksu7asXp9uqUzY7HraWnR8FgjvNMzH3Bq8YUvUrhQnqJg3jmx41",
  "key27": "3BDo5TJ8hEpKCrjdnkg74NSsYBug3rRZ1qHX5HGEMSybNe88GPhQUES7raedxmw9yGLEUjYhdj59SJwWK5QdjJpq",
  "key28": "2ZPhqjk3xqA7YbrGK2B215ycs5xr5zpPBjaxsAdnQhE2JmkJU73DgVkKMQr6TXMfBCXDx4y7nQ5X9CWLFVWPNfqq",
  "key29": "19MqE52pktbJg2Dur6BhVUQi98ieeS6BhBKG1bgMu52Cjd1VqLRymd4VQUnCGsfKWJDU19E7Uw8jXPsVAqMrp4Z",
  "key30": "8FkhP4MjnogoyLankEN8GLaCEGeiSwDkFEMHSa9GGPCHpFKKvjuRnUYiB4Jt4fjiUxeRrXH4DJCe6UhymS83TMv",
  "key31": "52DbzRWiyvBysV5CevhvaUuR8XnYhwQnbLfdKVAPcYNNp4Dfa2m4vFmG6XdUtUbw7a2DPjNVxg8r3mPmGD8KriLW",
  "key32": "Wrr7Dimnibq1CrKeqaJeKDpHpv9X14kfAcMkxRymFagHkjzVeiTziecexQKejCWZx7tpJpGzvqTjCFeEB7azqWT",
  "key33": "4vbn5wDHc9cnS5y7nPZwVXxXV3sXMcgdeWTyogmRV142AhwFhhqBjozxYzG5MDKPmSGr2Am8ZwNmJyyEzLLUcE1c",
  "key34": "3fPfqdsForfg2kp998amu4QUdj7AdJvHSmv9vBcjne2X8HUCDkgUATHk1dNn2F35oapoV2k9gUqhzDD7r1JpTsrz",
  "key35": "4QLAS2Ed1vxkurdhRY6KF6uRhRDvXbBHMAbhbRWXCjRWQuXZoAHjpeLx1hyXMYid44EfZm4vDCKfgZSmcL2oACK4",
  "key36": "65pHaJEMU6bRcaT8qSCizF4VM9QVnzZFkbVAH8iv9YZK1Pveb2LTpYhM7KnvRvHUUaibB6dVN3yHPtLnKUoNFRQh"
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
