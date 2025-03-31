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
    "2VPuszXYceWo7FWXtryoxF4yQLfqBmjm2mt8LQAFBvVnpNpA9izHA4TPzJxGBL6XGsbJ1o6hG6hj5uTtk5j9DeLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMKGRjog3nLe7dmCRNvrJpuAQ3cBqiFMamM959FBXvkNbXoN2Ni9j7X5WH9Aw9rewnv6XE5uyejTNRwWjZPBF9M",
  "key1": "2btcCwHpmc5HbV594hTmVKB8p1RWth6oUk7e9UiHai1whUmioNu2i6jYQY2sqvzUMxZBmWvbE4HmKzRKMGguimKf",
  "key2": "5UEA1oempqpFZ1WhXoE6NVSiVbR3sjgRU2djw8hfyW1J455huJrGtH7L7nQa3R22VJaD8CorGBMueVXh9CmTsNBi",
  "key3": "2DGgd9x2ids61we1uU3SbEHn5Zo6nPYdxUfpwvub2mEefsyRcwnYSRFWVzVhW4SsdGtbAZgzxq7vcUMxkiyZek14",
  "key4": "4GrHQQui1YgJffZb1qorsCzDEwJichBxVcHNj9TiJjXW3KSzRcdyyBR79z614ps3yyrtdwui2FQSvWTn4kdyhAci",
  "key5": "3URNbTKay24gxoY4q8SacrQeoKYPJ19MV8G349SXGeUB4V4koiTX2yf5Xuwz51oKkRUGVSXihsTWD7GWAedJbKvG",
  "key6": "4sZTa84i5r4Af79chg5hJ2qBDqFN4MHgF3s9sC8Yx3a7M7RgZ4WLFgvSq6qBMgHWuHpMdA45jBpbgSP9kz5nTpT5",
  "key7": "2vs5jSWgv6oyoSvCeGza4eZ96FRuhtmrQSRnEog1b5V1Y6p1AkZa5yAcFfYK7Ka7G7gPQnZtBvXTNVa5GVnsVSY7",
  "key8": "26GnHrktYHY8cjhZ8zMW6oZNRn54cXATQBLnM1tW33DeiBAeThfmxNXj9SaZv3RQa168i8xfKAArhiTDqjmd6CZx",
  "key9": "4LCVH5y2ntvgLjFr9GyYvFAqThMqgNLrgtMkX61oTUaAWrEMVGykUo4UPfinpvznsTHoumjuTcG84tq8jeKENqYT",
  "key10": "BDwkjFMqApqoodLN5G4c7ja47TEBgeYyfPwNMTD5BiWdnn2gGUhK8buQymPLByc2FW35JhH4gU6A9WiqsW8jVMB",
  "key11": "UhvZh96abBVxWKzwGb1KnRU7h3vLk2k6PhibhZ3xYfTEY79dKtV2A76nnyHwhubcauKZbThkKDBaDhACBhJQG18",
  "key12": "4KFUesUfWSkM25DwdXN9NZVJUj5TTv7GD6B597TZcmM3kBFARpGyG3jmAkjSvSvHMjCwjNffYWTm68vEKd2UxgDH",
  "key13": "3bDFoQnxFLQWQAwLGMnmsttbzAAuxw1kzoc9ReVyqK5kRPXxErZFo6R4ARMCmT33M65W3CeGfppRroQeLFCPcDat",
  "key14": "4LGmyQTJEeA3y67EnsjNm54FTHYkt7aUrzKJZ9e1Siq2ZTexB27zRMEiaeTozoAFU9sYt7xVU7CY4TpQrXprkrLy",
  "key15": "24mpLqwuRR1HADUDEvMKTBuj55Tb3Nxv6mkugCjT6qGhvbvNQiqSTFTw3GgEBRAau8G9UkemajNNonFPnXetZTuC",
  "key16": "3JwybTDrJShGyu7dEsMGds9fezz4CNiu3Lg7WLGeY5inD2xH68JGL9c1fu4geF5vnEYBQtckz6qik26Pe2PZn5JC",
  "key17": "4a8JcoAuirp8N21wHHfdNaijj63wwsx1PEFT9a2aJfsscv6VdxZUmXrKvQohuFrhy2fLJWCzm3YgcKqs8mJowFZk",
  "key18": "65BRDgP1t9XFF9YVYZX1k5oi6jafzCKvm3SEB3i9yj1dMhCHsV72RsyranDrzgbtByR1mB2xdLCKgHzs8Vh9XS9L",
  "key19": "LkLAwjgQXbxHZcxwchVDKYKEexD6seB8dwYsxdDDiTZc5SEN9ejv9epFkC27uAHPKHqsPRSCUVZem9BU7ELC4ut",
  "key20": "qR2LT5QezQR6R2sBsA9WeGgvPYhGaMAp5GqDWtgNZ7oVEhkUDC1DEs2JUxfozw9yTrVagnX2daFZZ5kBKcX5VHA",
  "key21": "KY19LC7U1DQyFXqWxBSktGYfyP7P45Ts9B2AEeRr42veqgB6PowgyRuLgbjQXX8p3RpFPEgY21rkraQtfXzF1zt",
  "key22": "5dbKzTNaQaJKuoktQK4LvcJZz1XmPGzMnhtb7YRDHQQzz5aLaKr9TkpFgckucWxCy4KkiqzgNHuFu9uRHWotK1or",
  "key23": "2NbPQEi9TKcp3WAHyK4mHyReC6Cc1Q33ezhnd8sSPSoGrzfcFyos5Djxs29eo6WfCtoZF4gR8xgUCSqArDfQe7rD",
  "key24": "3fNuPv5FqiDioXQ37r9xdu5xQgJ5sx3CaRKWP9vVr7E2gHa8GQdDYsdo5gmSbzgXSwPEDRZX15hKQphxuiF4fJu1",
  "key25": "2Z42UJyB8dJw2DeWyJrsH8nGjaBVirMPeLoW8mBd6gRNVBxSstn9aytC52qkdriDGDRnoGeHie39RcQMQUrJBHTN",
  "key26": "U4sJN3gThxWUWQWqo8ceSHZxsQH2dNxpXoMnBniUPVKRAVJNrQFccDWKsH3ahP6YU57y7bPLKuPfaQnrAkkqSDL",
  "key27": "3ZB19NRLVJEPVBZwMqR9Zwavr59hXVNGycYfTCZn37yCiyrjjK9FTqbx3z5tYCDBhtz4KhhNCV2TYDSxMKJEkdzu",
  "key28": "3vHRHNjXwBKSDu8ZQRL3d4YGU1ytQd6yoDznM4iBbwDC6FmeknSaJotpAf5fWv9vTNvu3r6Dw4HsPZpuFVnxVkky",
  "key29": "3cfQD9vkr7gSaDeC4KNFng5QR1yyt9HqXSvhRtMGMMFmsNFmbnZCXKmq5bdNuLvYsjacnggBkWTeLcgLkjZzeQch",
  "key30": "4ojfsbQNpjX4dyDYZMifgFCUid4u9fTpptRPQh6pmTdqqVoQ6SJVypqhJGonZ9aLhAw1Pzjn4KheGurM2d4HEBaP",
  "key31": "2ZF74qD9ptjyZoiUEbrCxDWZSejvkBjNw9vyvvgypdTQyVP299LKnG95tQ8b5TGvyHdfxFNJVcWPqUmonAyqifLA",
  "key32": "qpLdxk77PnZ1Wj4XgTcfGmqqfnbMQF5SJYyQnQ2tiET2y4kn29tEpkZKVd1XEbF4zMvu3G8AwC19UpEG4LHeif2",
  "key33": "3LQfatCR1KzMBMuqwytG5rtoF6spmDTuBEjmRVCdkxxh8XSBAqjDR3V9XsCDY3JHEmjeEwK9CxdFmBdmhEaHaJ6b",
  "key34": "PdURmd4yPnF4bsA7N5oCaDzGLZy5cU5NUj3p8dKouFozpTdWHzhk8ffbDoeHiiHaFTPbd4K4t9AGc8wzK7fL6yX",
  "key35": "4gxqBjC2TBmMZPJb3wJEZVH7dFVLrmhDTUiXBFoNesfHYYStaTfrwvTBsKH7n3yDaAJc1cnFbd4wgENVYTqW57p",
  "key36": "53M5J18w5enAMdh3LaC4eRHHQcara8am3yhXDhzAqJVojpG7AwAH6JWxCDPeJrgHfAZxrfRCWZhJyQedrHGNs7qj",
  "key37": "2hmBrkfKoKVVdfHz9z9MCMthm3sC23MPcyjHYhhVRG5aQA2SvPQ5aaKcX9KRNpFbBQqCvyc37Xr8NYfuJVQqA4c3",
  "key38": "2voyV7otXMwkK4KxPt9NeAoXjSMwuBeuxvwsnr79hfNct4FXxL9PSnodNDKZGLmVk3KdgwdtoCc8VQHN6WHJzEKZ",
  "key39": "4gdruy58SHytwGrPin6fn8n6mvghtKQ4zG8D3BNHwzNpE9byM2Ca3TP1tZjmCzQfQPhxWPWKGnvxVodwBvXzvXp7",
  "key40": "5nhydYKdYZ499ttGrmeUjYAv7kxhPMJRSkZzuGSsNLoFU9gS1xQkk5VYhYPFGqyNbAQHc5o4uaP9aM9ebvfV1kPb",
  "key41": "2zEA9Xd577aYCoomPRcot1EnuT33NveudHCsCmBcEcYbB3uiZW6SQmiettgECGtF7U1K2ZFrKdWB5k3oD5qh7pwB",
  "key42": "5heJTZuZNnX2Azd5Ee6yUdMNBEsmYg1YLiFmLCW3msGA9GShYQwV5QYrpaWAwSga7xgSAkYYZa6xyRnYGMChYgJn",
  "key43": "41GkQt71EBhwD38u7mvRbeH5ULdvCiCw34yQo2YY7pm3jm7Z1bLDktbKDqwrkJE97vamq4zr3rr8Sw3JpYEWjQCu"
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
