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
    "vJfYr2awaZm1cakH2ihTZdCp7rVSkQNdd9x3uw1Dsx83tRfxwSJf3a54JM7GPHsCksNiCyo7Tg6xJ5WXzWQd56z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62C6VULxC3NFDrmkfMNvAMR5qCRJY3J39SbQaUmXAKcUAr3Tq5s5oWf1kTBa3pgD9WGU2obXc2Y5zUu5PbYqTX3R",
  "key1": "3HRFcxJTte1L1fmnCDpJTWbfUfQZ5RtdDyjCUS4Kjr7naviyG2FCpuYsCAa4jECz42CkVvqHkuxvFpUB4R1Kw7QX",
  "key2": "3vrKK4SPVwxHe3xd2TFkn6vgMJdCdEFQ8pj6P8PfbQsoWYtn8ZBFiTmfedQdb8HNW5SZG3b2xJkRrWPRnwYCeJBW",
  "key3": "4EZJdkm6weqTFzir3J85YgGhtKvkZUcoMfSan5fyvZGrYr8Q4Zat2mm8xjvri5fSTUZLKEkGHe1YGjAbDha37bxq",
  "key4": "2FnThK89N58gvjm8wbhGPd2ZQCsy6bf1jfUpgpPBjv1f4JttrWFmSQVWrk4AvYmrMSBaReoh74hsiJDJVEby9cxA",
  "key5": "ut4s4M2C5bUVbjwp1XemGWFeHpR6ccueGFJ4RvAV9wsiC1DK3KvqH3CH4M5sY7hSg3vLP5WzwCugwkCxFTNcFKx",
  "key6": "3r78msZuQu3WvYa13gt7Pbiue2wjEvz69b5NfSWB6zcFUuLRarUprA6GHaqH5ayp8tKQiRUGixMYMYygPNjASmPc",
  "key7": "2muwfLrhUothnssYwbmkjHqY7nPiic9GHrCq1XZhFpg5r451QvV2hA3mEAHHEgkWr26LuVf26XG4XxLqXUsAQrVg",
  "key8": "4ivNWCMoyAj7k4qj1CNC4tUavoSf7AwNcEzAf3x1KKW7Sse2P44HsahwzCYB947EcFFJLKjG4iSChYjkBaT7z4kW",
  "key9": "2UWzVtG3DjHjYKJt8GrgjnHMjtywBps8pPkFSjqCBVXDPpKzhPoN8qwtkFeXMten1Hu3K6ST91kiAWt95u7hmKEs",
  "key10": "3vQYU93qJaZEhqvS5VpMxsErXY8iVv73y9D8L2W1ga4y7bU3r24h8TqfWKz5xjp71BEjejnMsaprj3gUhYzajThg",
  "key11": "3a4aY6qbKV6shJRNeybY3747LK9Q6NZgKvcX3MfxBdw1uUBoNcTvNKNxKVqroXg4EERW2vjEdTThmVMEr8Ftd8Xt",
  "key12": "2HZao9xubVBBwuXveH6Uy452aUYbVVQgejTyxAPuUWQ3fnND6mqomJfviU9MQMFzzsfKKbaAFNseq2MRAvoyMsXw",
  "key13": "64ZsCbYWpHceD5sFv7Vsv13NHKXU7CUkVJGLSezi3vpG7QtxEUhTbyGCE17exkEfAmZFpXkE5AsQRFJBWZGbpXg4",
  "key14": "3n4px4gmK9QzaD8ur6qsn5a2pbs7sZLh78guqWPMQpwWoXGbqowbqhTRhdsUn972WDFBcFc8WHHevU6M1rcywvM1",
  "key15": "5GPTkkTSsFQVmsvsstHrVsynFRB2BR1ktLtDFRqHwbf7gZCPiSq8VRU61WvB9V8iZjL3H2amdGp4TRXiUrYwS1NY",
  "key16": "Z1jETy9NpTPhhFLoksC7gucQf5V1t4oimrgwA5c3qPtuPRXQxofF2ay8rD6ENjQjr5SufbbAcGorH1DLWYEonxM",
  "key17": "5q9GEtiHTD9oVg3W6yojs7iMHnKT4BpYmFpHSV1kvmkdUnwi8Ld4526NqJAZfeGTubaQMhHykbB1MMmYQByKbKWy",
  "key18": "36KGEAxaJ8J8efYg5hfxZdGE4ZoELJ2sBEsxzzXK2ikuxSxpoHpUQ4pBrhZsCV6mXgZrQFAc1ewDS4kwyk4Z2Fm4",
  "key19": "viM6wTTHiLQXxhBsh4HrhMCuz8i85e2Ti57NT1T1SPYYCinx4SqSZL9LJNZkE4tFPbd63MEVzd8C5SHm3YPswpf",
  "key20": "5YAjUqSDhxu8CaNNrcmF6XPVvRY51dM77sVGqKbmgLJbEYe6o71XBFeGBHWebZUi17uV8dkrVfachuJNM7ARVfeH",
  "key21": "2Kv3fQBqpwYGBzVk4aenYyRrWaSu2JrqvJr37d24rv88TdYugqENRuYbhN4hNJtXtQadLmGKD1cSFk2BkL2yuZz8",
  "key22": "5BvocLMDSWPqAcSuAZq4PTT2iCkUsJHgdcbSuG8jvCRucN9o9AeSFqiKLaPy6fHY51nsdqnvbt1HALET4KWAwo3v",
  "key23": "3nPVpmWJ8XD7Rd5Mgiegvx6EaqGWUMwJ8qt2KCUCEeaAqXaaATMSLtadB5Ueav7NpDCECfacjqpA5Udig1XuNiXs",
  "key24": "3jooaPHFPgSbpGYgKwVroUj7GjRebpJXeS48a3LyQLPcS3DGWoyBJ7NFtQfw4JJpf3j7HPpR4nwRBzvwwfV3xJRX",
  "key25": "2ZKxsYnEUjdjP35CEVAoFwNdF4HFonKykEAgG9gaGvWwzpo51aNeTHdJTbP2gZMvZ79x4Xd7h2FP11U3cwH96z1H",
  "key26": "4ZHCc4XTqZ4c8uddRFM3bLRjSVwqhmnatb8djffC1B1Mr5TfStUzD4xJ8vQariapBcyvD8MHrYM5JcT4d3ttPJnW",
  "key27": "Ry1VmFB5prq1hbkdVdWoXmGWQxpPnGPi9hjGjQAnN42HMYBtVjKkmAPAzsyAZxgpViqu4ipDicnK63aBiDcGGYu",
  "key28": "4rNd7WUrwDqpguSs3r9CHiE8cWm3VPx1aFUd72caBBkSM5kK7j6FKUJzyx2CbmCeXXGZHu18Tam1kMuASjiEtyKN",
  "key29": "4bWK8VMTYd9KjSFrNGBpcJYojfMAq3JFQvVbcZereoAPC8Ag2zhCcGpDf3xRtGdJY2zffDvFiZgVEnXk1GXym8Zv",
  "key30": "3H76AFUoQARyAe95Zxf7R82fEjJZh1dUC4ifETm5McBBGDdsXSuNPFddTP2vmWvsma2qPjoa17CWusTPdKbD4KA5",
  "key31": "2WvyC897c6DwfVMw9Skhe5SByGJ5S3X3hVdMKUJo9KYhhg7va9M6cMgXmscc643ScDiQ91Bi7zYNnVuGmwo9PLNs",
  "key32": "56suELdKH8nYuCArzgAbRFvNr5XVq69rMYVRtTKqvNV8eE3N3qzC4Cb7djRojPukf4atMbuwQkB3iXd2kGoeXQQL",
  "key33": "5kp2HkzFYZ9Zy4hc94CmUiJVcXvrfmbozttbR2KSo6sksqE8rQGpYzJmxdN4zZHo4XWaRtu8u9UKTXULzNuPffpD",
  "key34": "3qYZbQNzGW59WEnz2rKyHcNCNtUa6QPMZdXGhgNjHy3WgCr3mRiAGHUJLzdT7U93sB9Tk2u42Jjw1ymwhTg6nsYi",
  "key35": "WtuN95cLbTcvHN8e6euh6NFdxkHzjRwcHbr6ncFNVxMkkDSxKCo3EfEZGPBHfoghfUrZzuAvuQcpNXHoCyayyCR",
  "key36": "3Pv6aDx2yYQaRUyt9a5WnuBiWghNfYo9i1HchaYquqUNQ1ifA3rnMvSJTiD2pqXEHkmuvHkmLM89xFsU8cXAMg6b",
  "key37": "5ZDMTAmgxVQGegSdGL5FSLT798DSYMifv67Qk53bjUrxGGmLKh6WsgEnJm8HdZrRGN3f2BBTorEqfJws8Qyj6RWr",
  "key38": "Mh1dgi2L2RsoH5MDgcFCzaGetetK4EJ85No2s8kVrGtdy8jjAPPKGJbSBymcwZGDA3VtFLsUUqi8PQbpKn4dsfp",
  "key39": "4gwqNN4EYn4Hx9qZCrBUdzD849s4ztikDv3suYXr264LYBdX7PgxCd4YQdXwt6DGGFKdMuBTJ4MdEczZxn5QvRmm",
  "key40": "2W7R4Ss91THNrSN64JXdLw6hdTkskuaBTTWwjKFXhXZsPKdW6tfEqaTutTTf4dZfnSA8MjmaXhhdnVhXJifZ3nvw",
  "key41": "5aQoX8SxrWHvXGQQDe5RuaTrEe6aTqUJ1SLMMRjnUcUfzXEcXV8FedRHtPSwYg3zR8LwNMRPkeQHhJLPnPEFiHyr"
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
