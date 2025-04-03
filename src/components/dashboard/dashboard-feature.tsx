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
    "4btc6wDmn8SUrh2JCg6bvZz3vzdDe2EzaGRgtKMjYoEap6gAY4jfBoS1ZeRff8GENgfvVDqcFyoYj6GpukFUgEuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNLtmeMT9zTok3f9aSwyarQneZzer5tgc6qzZnXp1Cjokjo5B5ht3RdeWcmRCy5AfoNFLvEuC8XSdZeUXHRtZFq",
  "key1": "3MJUiSV1CvHbxLyZgc4J7KBbCiamzwDyF81fqKJ4LUmcUMhGtWzfz3TWTAqeJRuTVJRiQcggJHLKseE3EyyT5ynw",
  "key2": "4PVSWMEWqRX3mzmaddANqd7GvaGL5NeAWhiwSV2iQdFcfXSEw9BHLGWvfnYfndTURqknLDzbtnvfRFtQemGRuFLT",
  "key3": "fHYk6HezqJQG7HqZGxv6sz1YJyvC1ZR3Xrjf2X6Mib55JexXruTYJi4Gy1BJhRwe8UczS9MSVNfpcsMBHfxUMdi",
  "key4": "4pwJQ5yzojFQRhrLab65CAaCrzJfbaavh9haHA3dwY8wDmwWEVhmkJ8bJEoUeUKt65cjqfbrgnaxkezf9BR46nBZ",
  "key5": "2nfPJc8Z8x6FWhnvkJS6pMkqBPSs8jkXepFcTT9dyZPvSDUwstqqwVC6CPbCw4wfdxr1pjBhe1coCtZPLJ7G8sWo",
  "key6": "prNSbUR4i9ntyT2fF1y35mZiGLUHzxmdSTXbAUhQ3JXHY2V1rdoqdMogrwtWtYRzXnpizgGzjjvxk3pSuUnKFtG",
  "key7": "2kEywtX1NeBNj4unF2a6yr4D7k5euUqMmPuPeXfKXrwkNHDFHHM2mrFR6SJXZMPDJ7w2ApUQCPxeyuKSU1M6Zj46",
  "key8": "3ttvHqxhZ3AAbmEGwgVADnqZZncKABGHC7GMbP86GxDrkKH9q3NrFdtNqrpBamKnh1Vu89Shh9JLEkFeg2jJMVoW",
  "key9": "3BPXASoCByp8ntcmibPXa83kfgrQzrDSFa7umF3wWt3QkFiwBzLGfUvw67FDhfKtn5cA4rj2oTMnWFJQtXAExXEe",
  "key10": "2rXup7DVCGn13sBuZk7pmSdDW6Sqg6yDnFq5zR1wNugW2F5S2QG3smQBhFP1wB2T8JzCjZdLMKvMG7f4sGPeMbZt",
  "key11": "3wH84tSaByKwvERaA3XicTmyeMnJV3tqNwfPv1dyJXmRDDaRgfctpSJDzwgBgM4oCmLnGysQkpFMCGSPYKoAuFaN",
  "key12": "53nFmnMHtr8UtUqxVKgRL4k52ErxoZTU5dz6UgGhNTaJ6WYzGndhmLq3oUL82XJkJqRRF7MpJyNjugbUyPL1czhW",
  "key13": "5aNwS4kWQhRGdNxv7V7sefBp8XFNe9X9dQtxsKnt3wamsKkDkQCUuuujNzuojP6dLx9j5aUHvfLwBQLSjGGoAfSK",
  "key14": "2QW6JreBCRoqcvD9spuwau5QnRjjJybMUawzS9Qzby39hUcsm6BYhtLUiwez82jD3BGg7aFU4AUoeE5Qgu1rPs2y",
  "key15": "2Px8FMyTtXYqTzMYQ4HS2RURNR9A37pJgCrRsMHFrTU3daGm3kJ7cqtECipw8yDWk1HEuLAHMKZCkCTt1hRUvcuF",
  "key16": "4nBSBe31kruHF6zu7q25Jo5LiRFzjNwJcAWp4okmBLRVa6BrWB46sWQFs2ifANW9fti8etghv668VAMcRwwrhSCe",
  "key17": "2NM5P5ufK3cbodi9mEGSdJDNn4ExELW9xQeTN7qrmF2txNevaCTTbp4r6FAy76d9avzp9XCLW77b3Rzd72s3aTPf",
  "key18": "5mDEV2gmB8mkKA4ji3N5PyVvai2Y74ByKLpkN4vSvE9YDB4zu9PjdBm1WaXct1y9ViajPVUKJTAeFy7xNc3UVrgq",
  "key19": "3X9x1a7gAQs8DVr3wsoCp8Vzjz5dv4pTEcxGBADjzVeQeQ9wj8AQg6vTXNK2tdVcSK8t7bvC8UVhGKH8xRJMDMTK",
  "key20": "3gmw1L4rZaKim16CmvR1qQRJtgxaYJLGRcMQRBJRqkgHASAEqbKrtkDC4KCv9xsR9HBmgKqckrAJDTZbaNf4PYQe",
  "key21": "44125utbVgEYXPqK5FftN1xBgixTq5B4bJprAPjPqt1iA4Lbd8JRoRrxUdVapVkeWKEQsBaniTufKMH3XBDaQCab",
  "key22": "4mR3PUFxdNSVee2CA4MPRxWKzNuASdHKrRzEzWkTHL69T3KuMgES7nM8vtU4PXSMjmbZMChR6KSo6y3KXSpFQF4h",
  "key23": "65cpGiceViWaEgNrRoBtAMGnJw751RtPqb9DyK33B2FA461aCqDY2gZ6heLxJrPZGUzM7AwrgaB3Z5drbAvm851v",
  "key24": "3Ev9iDRe4KWtoi8pcVC74y8GHsNRsYgttCnxHfw9ZobiK1FQEJCG4aNxgK92mriDbsUTieksVUgwyBeqKUFC99pw",
  "key25": "4jxghRKgBWBrQWp45n9n5JMLs1Ytrahr7NPTipinJsqxKgBe9tSPBrnajf7tVeDno8Dvft3e3G7SYWoTZopHmQeM",
  "key26": "6uxABVdEQvWZJHbsvrj9RexoqporEu4RjtriB3pPeQcPvomh3EnECjcQ6XaMZb9svSv1YHEQr4njkaa3cae4P8P",
  "key27": "5r4feiqAjDhmr2p8eZW8z9zQsEaiWwJru2XkxP1LyoSFUqF9NMAEwocNKaYPdkQRYGuW7JPYuWczmPRoN6wKZa9Q",
  "key28": "4nngHBKk9PAWjC6Qs9dSPv2uTBLeJFBs5oWHWxsWqPe3azKhXbpyB75976fAkWckx3La84GY52v6FefqHhXoBqqg",
  "key29": "3wcdngAdpiTavKJyhGBtc2L7RFjm6nVpdco5up629ufHzWkG59Z8Ff2dMRVmNZZDwxv4aotPPodnsjP55acxSRkc",
  "key30": "2XELFiYBahiWcuqLQUn9HbRZxfXZ415UFHEiAPmLFuqVHfFHr4yf7DNVkGua53zjTftci2rzH4M8D5FpE2QPTjWa",
  "key31": "4jP96Y8FUXGwHjvJ7988Mt3okPthxwLKqLNV9oj13k6M6PgmHBHARPFjuh7gJFcdQUYLRjdQ7Qb3BRAh6dYGxesp",
  "key32": "2zMiTdtiUtzkGA7BR52BHauvCePyMMEzUram2uCfWhdHJczoCpKiWZMDi2bEe9fFB8aGcXG6mvqZEzYQbgzfDi4n",
  "key33": "57DYKcZ3CRFKRrGMUzx7yHX7oHjbERYWfk5GzKZvNga6qWi63yKsZNSvR4ikkQwkm8dcZtq9J49qaFoFBJggMtQx",
  "key34": "g1qukbWmGdkgaFbU4tMfRE6p7XEJHVr2sr8Cp3ZZLiJtQbDkP6fAXj6JGxnNmg52wArD4oMMBA9VJkFkWP6GNJG",
  "key35": "5cfi9SMGZUwdzJbcndRnF8ksqGs4TQjJ1BpVHswpZjuyQvBJE2a4TSnHEsnaWfwzzw2qqEEzrDmGGMcN8iLv7dCg",
  "key36": "4A4xNjgseEWtEdmWGLRkLKKx5tHHCnLA67LiSHSjbpgGLf5X6wiaAAXDpEGJ6DSFoHq9sQPpY4g2TLmYm4iuiKh2",
  "key37": "3yRbF867ZVC9CmbC3uCr9QMcmvBbuhYqwJg5agXLshuDWD8Y1QKb1rRQ2qZv6d3ga3bqH7XCdmTxLs2kCaCfeacq",
  "key38": "4xJuLYUPJ9maYi1yFAW5EDs3viFrZQnEcVjktmtZwV6T92xY4Jz2wEwXAUCpDoKg6z2qq8KzLgr9WS3zxptAi8sF",
  "key39": "4wiwh2TTX3jDH3puc8iwRiv8S34dorRCo4NDY35ud6LYSvYiubmV2KEw1wmgU1uYXM7MQuWbkqwMeYYn54cYXAcr",
  "key40": "3Zj1kpgJXoBWw32P11qVKob3bsMkbxekF4TrAapAyqaCp3mZJKkfARu2ZvysSHzynNK6mPQPou1sanM1zU74VXRL",
  "key41": "3WRi2ghzLCbgCQNpW4gECzes17Gn9krddh9FMLDCAC9GQTduAaEvW5PX6XPs5FMsSTw2hTdASQYTodbevAa8GMnS",
  "key42": "4GfQN6XtAq2u4sD3kXjmE9SuBSP2NHwPx9Bkjwk4MDL2r9BPnKTdNuytYetSjXC4cGCHCUQnYNftZSFJTmxzitb5",
  "key43": "2hhpbXErG42pKjUGXVw38274w4KvcbfsbNYj9kfVx9M5RMVyhLAKfkx2FQBqzzAGTSx8v42CNzMucaGqepfUtnJF",
  "key44": "3D6MHWdHQPk61iMPov7M4VHkZLRSxQNnPecDGGiJ4jqLrwxchzo85c6p1QYuceV1LMnJrew9NCxtbdUeqU2cySNS"
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
