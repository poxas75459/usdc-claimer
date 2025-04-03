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
    "23VNjJKnqUKBtBw78gcKD3hNJU9hTRhpBEckRp5KJR8pWyujiB2YmZzAVYdfhVev6d1ufJm6Red8hcvk6bibVaJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPh3TWzTcmtHMSCjL5AQo6xgZmEry4g9mhRLZk2TdCuSDuQyBNujpQwdkFrEfAabXTByQ731UK31hX7U7Ztn9mQ",
  "key1": "555RqDNfDn6Wb96qesuQPRWEh5ieozUyrNJZyeoSmNaFFDzeiar4FXnFanyJme5Zomf3BA8DebouyxtgPYnHKb4a",
  "key2": "4AP2htatAQyNby1uFCaaC9PdFkdCCWZArgbp2Ny2xzRMAwPevVjnDq8SvG3inWBbMhKVvz6eZ6MWMzkgGEf7Lhn2",
  "key3": "H7j5yzHF9YqmcU3maKWYXpysANA1XPZTCsY3iwDDmjhgmH4GdE4msHWy7aMVCD6y79PCXwcDrqaBZitcARdfJP1",
  "key4": "5BcmnvWxY3YcNr4uaKtX1KRpZz4JQSWnK41NZeKTpVxZVc6TuSEo5BdwQJf4n38BhDuXL46xEAcqYiKkXyoTFFqq",
  "key5": "5fMc7gGGAC4cTJPsQNZ1ew2sZbnjUhketZEogSJfbLyhg64mGBLS8q61q4n9MFAiKHa1568L88MmGF1TGWWL5qJU",
  "key6": "29dtqhbR8UPwkwApaRp5KFPLnVennxUrGyorwSWDW6CKRJRXYBuUCS2pTukUdksz6jXcqavKAojBKYvLGUZB29Qi",
  "key7": "2tdZH6C9cjkQJwudLjxHWopzY7Ey7kF4aEzspyRZhY8Gw1c8Rnxt3MEGai9wMLSYbEUYZahUaJns9xvym2vqwLUH",
  "key8": "3yXx2qSPDxC5KYCpZYjMTFda5JSbNVARQkD79kXLwW6AD5f89GCsGtWGQJPeTjr9u3jQnX3r8WrvE9D6cb2qVGDW",
  "key9": "57b5c9dPGvG9H7gH6uRyUs8g6TCjMV5roL389GMEkW9hw5H1XnieZYgXaW9qVds3o8NQZPuTsH4U8GCMMvyX1P47",
  "key10": "5tZWqvg7zecPFeRa6HBph4reapkAHgkAxVcir5xt2f9g38t74vo7g65D11keEuJ6zapywAtqmi1hHXDsSbx3mWod",
  "key11": "4KMpzPZLRQZfdoq5wofzvsrwUgrcDSvAHcFoMMuiRW3CVBimnTmEFb3SVipZU2ETfJuokjpXwF68WtrYFMshGjRE",
  "key12": "65Dc2p6UMZGnGAiHwo2t3XWbXULmbv286mwjyqyGsYp7axTcbH2rkXGZLCLCb2cmrhCvm2gAs9DnKPqsGkdwSYai",
  "key13": "57N9jsqEKVbZS53GHYhys7Qpp7PG7Zu8xwE5yWYxr4GbkEgfbSW6GHDaMRqCr8nhgQdWQiJsdBiaES79374xUtpS",
  "key14": "4BP4S69iiUXkRwdmKy4i42XBN79vSmcXvobjUVR1pkGh9DWi51piAbd6dozLeMBzsvdL2D7MvAwXBFdyFzgYUiS6",
  "key15": "2EM3WGdLbyJMMMu8bb9diPbF1VjdoVeJmrr84UNpZCWcdvbJo1LrgwMZHJZkFuueYMYafwjCPXqXEeQP3zNJPW8N",
  "key16": "TLmHT8iqURcUGyhbWRTp4sd7L4X4jTbCfdxz8GoDnWMqVVs3yX5w6br3sYn2aUzSnP94qZqmMsFsMQrygPXNqSN",
  "key17": "5aCw3WZmxYP47nehjVYJJ8jhDSAUigxQvSQBnipZwTr6rhgzMnQ7LoE4fbLJNUjmv9yrKLo8eCGXgUne2jta9jvE",
  "key18": "22amVHik6UmDrcSEbT3D9JxD8Xxjsxdxy44H5QdXs68MxNUHK1TDFNHrsvbofdSiamwTUGWLeWKXXHXnJo7aHzim",
  "key19": "2EfpSVg2hYnaUsDDgumqNcYY3SMspLXDiCNhzxBpt2C4cY97TfHCdpzKcwHh136B4ZHKMjYqDa9Crnqr1T6CL9Bm",
  "key20": "3NNZ5zi8c35ALEDpggy3BSPB8HKawBALiKw32i3rC9uQgkFEEnLFAcPm2E9TdqP5CREwkk1DoBXseQ7sYp2Ujy5g",
  "key21": "4McpW5HvAUp6NANt2d2nMHJ9bVmohcCx4ngjAn5bZaskP3Y6tyPH1Ai4aHVUzaDWouowhX9FtNJLNjVw8PH6YyiP",
  "key22": "5TtoksVT5A2igT26ao7CFZd3FKPRSu4v5ywDjzStjpWDsW8J9nnkZ6PKK7rYLwqJ2iiq4MkH4n7eGTW6DoczZtTe",
  "key23": "3GUcLgz626QSjtHfNrheuBPgKqhCvLhD83MzZEi8eP7KZZmHxtELyFJaGKVij6uU2Jigno3esMBATSEudoziGExb",
  "key24": "2hHmTeE5WR6fAdY2wA5F7VjibySQfDXYiCsnLrdRqCPmpbRmZ6ozLSgJgDf8wvNNuDpHrQNJHFQKh5YUa9gzfHAp",
  "key25": "4TfFanTAZAzDLUWGWbwqa6HNgxDy6brWrLWX1Mqx2yKKvRup51n3C6xB8fLoxXkAsYyr1QLD8cvRic1ZNMkRkpRi",
  "key26": "2aruqkonvgfq6ZfqBaiSwUaUpC5UxMTYHDq6Sd1x6zDvyqerHxtYYvvcuf1Cq9yR8fUSTr2tsPQWziFvJy1E3W8P",
  "key27": "2YrTzU1jKsTDKAHrAw4q9C73frkgi9chAC3wsDe3GpJH6T4cFAyY4KSqtFFQjBRGpySZFxW5Wb4q4eSBvscLGVxE",
  "key28": "4nR9LXKR1yQ1dxRn7skRFaj88qKSrkvwP9BM9zhQehjtLg1bFHU19ToVgDkMSuZejSWrKwZ6uetEtYAudPDjchk6",
  "key29": "4hfLQkWgzWAheVnaC3gmVtWjkQP73pjqSjZS3zkGT9Q9YGnSgrger9Ktb3PomhhE8CTrN7SZqEHLjAoHYmRvp4gY",
  "key30": "3QPWD3YxuCcq8g8YPj4QMsKKWJbLTF5zW387um3GEmGVMPBcnG7BoGX2NVdBMcuqnFuVJDNPpD6Eda5PDv3YdXj7",
  "key31": "44QbNpVtbmaZhBRvcACpmEdojsHdTweUzhbXXzHKXjp2EiT8KPi8nF38Dfz13S37h2rS4EchRGmnTHAJ3xFb616v",
  "key32": "51j7YDpg9rGukhCvSSNLYFRcU27YSvFvGiQRgc1wFurtoTMwEcKtz3RiLXYr2LWPMwXmjB332f6eB4kVEZ4919kS",
  "key33": "5MRCTy94iUrgcaycfNZVBu4sKgTEkD6Y4Q2BtKHitSA7pzWJqwjMYnMPBq5dc6ernCS5QQnEjkzXbunZbgXgyJm6",
  "key34": "3qoPoGwBCU1FudurrBJKspm9PiyQT2tEAtxgeqxivJc8DWtBvLqvVdtSAXVpaUq139A8nRL6gfDNuXG7B6FhFNcP",
  "key35": "eBhsN8ucPqaaQknoVw6cmaF1e3h6tpuzjawFr3Sb2rWud2VtccoS9SSgcEZAPVt7pZFSrXejt1LyCEzSoePZamy",
  "key36": "3pAZK4a75ghMRmrzYLuNeMBCZRcZZbBzMXwgkENeytdbA3xw4JhsWDgfx3Kpav9rL7uubbVLh6tXqiFN7dRKSbau",
  "key37": "2nD4hAqGY4TTpHX6NVr3KfhGLhsGkNEVAdj39PzQKa8xzJp1tP8EEyd7fVvaku7sqHL4c4X7JNfdnMPKb4fSGfsH",
  "key38": "4UmCxuCzmtvcYUChCCeExmf6n1zZQVEUR6TnHduHDmrCWq9WgGP2EDZ3C5oQvdgrQC1iSZ8JgiSdcye9nfqN4mEa",
  "key39": "2XGFD1o4th73EP2fiDqHjwThu4SSfqH4cNSaBur1myDfmMSQBuMng6F5N7iDejwPm7uDNwMTywnyeDVURXYjmDxJ",
  "key40": "3GfHDzxtRA5AhRMC4fRKm2UJa44T7Dbc7zdU2yr9zaxgCvsH5hcwc6kFPANdNFmeEGEwVYRZd7sS59DTvUQrY6Ln",
  "key41": "481d3dmthUcPLo6nnf5YLsyjDAFrohKDsajymeDdPE1pE7BiLQkmbEafQjmpNL6kgMsGo2YVMz9GsJtWomy5jHkv",
  "key42": "5F2d4msyPe18dSAHLCXiXycJ3cwgXrwNdJtDbVkzN5L2qZvJwesde2oUmXndvMxq8q3D3MvdUUPzDDK2ZH8SDvZz",
  "key43": "5jyZzS8P8Cx8GpBRkzoXm3kefShVM3yFMvdbSAxEAqpQP1N9hVH1MKyThjAFYFp19PSR9Gw7edVj7RkyX8YBfhMe",
  "key44": "4ZocgTekdEqNjChC46bn3JLdQWi7pq9jPjd3QF4ovPpugueCuLftxzq2qWWcpNnPyAd7LU2XqwkNfNVhB2qn36pb"
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
