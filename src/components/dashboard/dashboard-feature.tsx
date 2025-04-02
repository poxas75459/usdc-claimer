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
    "pSBBA7ioas8g5tUSpFaUrnyRgWczRScYYNrAsmXJ7hbBHLb4toWaHxtvRovh21rHwyCiUE4aj3m2au9WcGrzuXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wdbi3vjWk1pLmGMBadJCvJETnLHntHcqar7VUfVs2W5D1geisUaQfi8mN9wLkjANnCup5fwYvyKyacJYbDoLyMC",
  "key1": "4X8Q6wnhA4px7J2r7cs1a6qbWW3nAwekU6kP32BcsvqUz5Jfhqc8guHzQBaWdzBRWjTgsidvRJwtFs2QWwKBebSs",
  "key2": "2VMwoAtfgp682f9RPa5bCo2xBrBqrAGBkpirgKc5rPscnBdrFu3x9AaciEkzMYKQbSkaB6veEhQortjFJDtbmHjS",
  "key3": "3RcGLQxH6qfSZ9DoQVZFz5JppTnKrfqjXeze2q2Uqyedk7Q1HHsgtLhv28zwNfZoEAQwK8rN3zECe3zb57Y6ZrqA",
  "key4": "4M9WEdK6w3hJznGcKYpdVAU5uYqb2teENW3WVWt2cDsnAMqNAeA1Xid3MnKbBb9xjHHmZHzGzFZdgi9vxbvF1Zab",
  "key5": "4DUoDWYqST2XU9QXrzX14EqUizHCaTEGhzEqX9f5F8DaXYwgRMcUTXEGJLR5Z92ahRTtQ5kv2mhf54ZgDcpTJvbN",
  "key6": "hnN4cSJhssYLDgPSbQGty8Jwd3EuSjwb4wjw3ThtuW6K1SVnD9iQ2SvubUFgJQ8LR8K29oN32RXyJTYjjfZeUQu",
  "key7": "2k5JipgsbJeEyZMK8YEHZ7cQfyoAWUYXTLyun3V2eNo48L6c6yrcBMveKJSrR4bGAgiXv8eraj8j2qrzUSwwEYUj",
  "key8": "5T2MQqc6knK3digmGVFxqaezMdVrVr6bokripViY11cyzffDc2mEAfxNvMWYypW2dfcqdjJArvpWfthXTHu1eh1b",
  "key9": "2fFYfQqQDW2Wwm4gcL38T1vmLJMb6ZjZMuxSkQn6MHvzYM1Nz9jzqkVTsD3QehZtYPUMNv5yopdmEec9VWL4uMk7",
  "key10": "geiCP4J8y1vZkJJae9Q1kzv1qbKXpZN6eV8XTUoPvQvHC1pjUBvCyZULDDkbwRF7QBKhx74B5j57Ljqr7UCqByJ",
  "key11": "fKoxmpZXjVZX37DTViuqiLf2DjtohmuhVNv92bJ96LJkz77fnTr4BgGueZVxZ2PqYZzZZFj6J6EPHgYADwkt9T4",
  "key12": "41ETaGcCxuw2fimqiA2ME1CvsWBvtJyUN3AcMZ3L98MSRnN6HxcuhidGj5skEvDPKqFCk15fVJoCo5Ncu8nVFK8d",
  "key13": "5c8FhxNHYAAH5vWt1kyhMV5xeB7zhrP7ERhtuQ1JdH2Md1L6cMHobihNaizh6DEVxtb8zgjT1ssf7AiizHsZBGkb",
  "key14": "4m4oK2AMj77vWbZUJNRTyXRe4jt1NY9Ec4b31goPmuBJ31P3P9HMuNavAfJ1zFcwGxLtNRs6Qg6T14fJJ7b7zpWx",
  "key15": "48cqQKZAVS7tC4XtJaLunVsNmYQL1zArYAV1NhmcvAHRnbmxD2bE2cmiUXRxLeVGqPk85pfQ2FHjnrHFiSgJ8mX8",
  "key16": "3SdG5JeB6yuFj9iXFAS4Jqw3ANgX1P232d6phZf9FMKNwGrBB8ADD5syxhVuL25pgfm1aAPzVw3EJPu8xJ2wkCnb",
  "key17": "4iZS5imRkDxqkzuo8u8ArAczJWdCJ9fHvQKRPGSzLNKHK45ZrjRcxGpZxKESxXbYMb36sfXU76ivoNRx43EJnK2t",
  "key18": "36gY7RJRbdYBksDyVyCfYn1sv6rot2aEuKXkWpVcVwdxvQH9BSPHJf1FCv3CZcA8NQYSa1cBQ8ARovWhQCbGWYTD",
  "key19": "5t25qjsThHXxaL1K4DwL6TbWUasrwQo8WYgBTTrWWuWXxWo7Bk9sTJ4gtjDALdwp7S7SRxBjMy2Jr4FXH4Wzq29z",
  "key20": "bqJa5BpXiN3NWeTPAEDEMptV7MXeLAPQZj6H73DUn612nocgnT63WQmRQax94FrkfLo5qsxitvxgmNFDjSEHanM",
  "key21": "2cVdicYakZubKsg2Fw8v14kDjTRDMspq1W7uoByoiA87p2ds7DphijzJdc9fbe4QyYnvhatNVmBBRoyjudivKoeP",
  "key22": "4npTuRV93dfVHyoG1pTu2SqUiEwHLgNcqRD8AjKdDznVjGchZGgywrvP5PKDf73Lc6gRdoasMhG3asQaZHJ379f",
  "key23": "3Vt4vLPnK3AX1emZbj6Q66iX3MxmaQ3T34BqzZiqVc7Upx8WDYnia7hkGY7FFHYWaoxUvKegauuZi3uffvL2oddp",
  "key24": "4r2fqFPmBQjutm7Py419NNj8yYwqjTNtsnhjsrw5aG9sqyy1zJ5Dvn95GwsY3FUssC1daLpVWYzm4nTgMD4jJvdB",
  "key25": "5BwKxE2g1SZD3inb74JJsPMZLmviwBfa9z5dnhoBzNQcC6nbGi2FxKD5HGQkwPCW7xWDEJh8GjqqZYvYRmpexmgV",
  "key26": "5e2anFYTN44M5DeNPuR1Y94HSn6ygd91D4icRUp2UHM1rMeMUBKpy5hmwKfqban3VgMdDPiFY35o9T4HWw2CSMxj",
  "key27": "2kQPJBi45UfhBBFvG3epFTFhPUUqc1Q7hDCGJhtcd2LXpsMzXvi48ApjyhYgAVz7Hvvpn78SKd7WJZonNCDKTzW4",
  "key28": "3erhyffVCHs2stXfiqXyXydTCFB1jw3nvzY6wZtw4Q3PfARKHHpKXJFZpbhgznA3TTEjmP33Ycew9946XmDvsFds",
  "key29": "2ZfuQWGeoPNYnqSNn6rTuW4yNy85nE15GkhWtKYXvSFNav4egrQ4WgD2YvMEdZWyXnPeSdkRHbWRVYVG7JhEEfmr",
  "key30": "hrq6BoikjPmJGBbbUwdXiwFzfPN3gpSiPaQbuwuvcfZbPgQwth3YVA9fNqgM9UxLFMXNG7DXxycBrJVsM7ECm6C",
  "key31": "2obqx2e3dFmfypySi1RkgT8bcVcDDyDW9i75Ri94dnzYpzmW3cH3M1Dto9BidXj3WsXS1UHpRg3DbXqwv5hsecDW",
  "key32": "3irtZmVKnFnWmo1JxPHARGK93GE3TQDZXNetBuP9zDnFgXW8m5N3zv8J43vZuSDEuEXv1NV7wN6EF1zLfTGtBdiV",
  "key33": "5hqmqhwuo3Anodis3mFE7QzFH6Y6rvs254ByxTh7vdfqbCfBoNxkwVZWv9117Fi7WY9kVthsUwSpm8ELo8NsoH3G",
  "key34": "5s3QtmKbsrmVTqNkAn9QUhFkPtqPEuH6dGua6Z5hLqVVs9uYD8RuwXAPnY6RGTni8k3zhyzNHaTZPgkGPJ6y8Jvu",
  "key35": "qnrB2WL4dbct7MhbumdxbGncSnVjSfZDXc6RJeS2qfSfBWUgX4Qxv4kYwYhpvdTgcFyMJDWKVA9P7N2xXqPBsYf",
  "key36": "2u1fQgvqpipokBZBpjobYTVuQc9uXMiGD8BwyAWAMN3swLJQkHjD299SVFnswJRHKGYMofHABZaVfSMRqU8VVtaY",
  "key37": "3TaCEWEdT8d4zh6BMEdbpgsMPAcwnURyHP9Lu5yWbEmXa2UmTqSAGu78faS3xw19eC8xMx3yoLLHwEGRua7YfUe7",
  "key38": "5XYaFXG3eJuourW52KEEMzj2Wpq8aP6q9MEZSh7asCVagd8Ua7jo4uu9GrjxxvihwXb7cNkXvPzMhc3r8WVV3y8c",
  "key39": "65M7gLVxwJniHyULvhSBeV832yd5zQJJMU1A8LQTNr2vyEbyeZ6uDAqX1UiQCDJ2qcx8ncG1KUie5gvz9s7TXAUm",
  "key40": "LKmd6qpivtP8bKb7622fZY9dKN2CqwmUzjRsnjTmJxgskrUaZRS6c48DKMovcY1rxchG1dr74ah8XpCf3TFMUtg",
  "key41": "5Adn8cSZc9CGniWqrGcKaiwtURL2V2AMEnCoXkW7ThfvEa9EySTjjyfbcUMaFwT4Z1SYG6Q4E3359FwdJYyvC3Br",
  "key42": "qch8K2ir2sSjTdPbQDeXjv5sVei2fjuwNX2U7sbGb8XkxT4ZJnfP3d1P9gGqwzWgESwJ4qXs3xfDm1f2q3Ytma4",
  "key43": "27a2DxSbM3ifPaLuvGGugP2QX3pUMZAEoVnsLycKZohcocX9KRwmitvpFPN3Hf4rB7Q88BL85fXriwtN9wYaVTyB",
  "key44": "2YBwhtAEGQSunnPchEHmxdzBqyDgz9QVvViaEhK396UGADQnNuGCsxwAbNZXFdHTcJ2BSDxDhUMuACnxDdKg5ZM4",
  "key45": "uXtPBGMSeEzHoamFS5yFwQXAqWMPnVbNKm1ZKWYwn3jagYyks2PTr4sGU3ejtJgyL723yhMdTfJ1XCHFxvqGUyT"
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
