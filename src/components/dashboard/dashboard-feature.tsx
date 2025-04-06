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
    "2A1hH55tD4G1n4rpZC3iqVPExKmAQLD9bN39Y8dyYRdCACVM89vqBaFsVWqAantEwPVhprTZTMwiPthfF9jzyE2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wU88yGCisCJixcCbijaZPZ7itSz4cWRYb25Wy3cGJSUW2T8m1HBityL4yTK7wokbFoJESxvudaYesHq3wd236WT",
  "key1": "5Ue2oobUgvs3ZdMqZuYfTHZvzYcu3QPAzpxojjLHLYN8HCX3TfLLTAkhgVfzysmFeuTvD5bdkoNq6uoQVBXsD3xn",
  "key2": "4CfkYX8r3jw2hVT1WA4Rg1P9KboqwTAqEK1gZUQCooHRxZgX62FzAzuxLr9BLZpn6UMmWkH4n3W4b8G6REZzi2Tm",
  "key3": "3bVjYxHoPpaWVVj77xpi5vz5CXugNMR9rM4jm5DQ125ZyJpjS9Wi9A3vkq9AZkRHEn4RpdRRkPCVo4FC8v89aqeq",
  "key4": "59XqD7xx5Dqv2tbv3nMnuYZJkwXfoanahTQGmC3v8ymuB8JjtCnJvVtLtPCZXVDHiVnxgjJjULFtzuFhvK4futvR",
  "key5": "4yicPkmtKYBmKMEj25C9qbeXezhAKwKibjTteZrr54Ek87axiEkZzbcCwK5eJv9uSpYEwuLUbfwj8iBZTBMoGe2M",
  "key6": "HMMnGBi2THNcBv23SxjZH9MRLUDe6mTsrZXW7mrNPfTQkr9Qahyfrh47BYMaxJeEdPCEPFRMjS7vnrQJZbCav33",
  "key7": "Qg6GeQ2JfxGhUjhe9Kp5EPUE1TwqPCRNG2GF1KQYEB2yRpahjtkSe7pSrZu4fCXW3igCJfFQXNpgwGL9gsZBiH5",
  "key8": "XVYDj7UM35LGXXyqGECoRJMn9PsE9JbtncFPVJNAVVV1hicSrBNKofnvhMbCGd5yjp4M1MufSXxAy1cGwcv1xvA",
  "key9": "4N9mLxb8a1oo6V686LvTrveu2pPDufYiLVhH3PhnDvPKEQJYCYGykagrb6WVpSGg2LP8iyn4dvZxuxGjVhAu1Nqs",
  "key10": "4ZSM6UBvsy1hfBEq9voD6mVNGqWFHrJbBcgpAL8wae1CYHfZeVbTmozNxvqKFXnGXy7Xhjst9odiqMRTsFTRrFmJ",
  "key11": "EsJKw1vfAEUSkndyfGQzoCgEq97gMwE8j4T66cHFdK9V4GSKrZr1W7ubnBuYnnvNKiWpucQ2vH7jcWq49uvhQLb",
  "key12": "2cF8djKe9iPvaQ7QkU4C69VTWRsjckvKw7VQVjroJBDXAudpgT619KrvGBSNqLSQ8Y17QP16yxMXMr1CoTkyqn5Q",
  "key13": "5dmaPrWc6cKGGL1Sv4MJ2A5Ld5jRfwN6Xag6WzDW28beLDdnga3VVxEwxTdeMJh36g7AbSjd6HrFU89RH7LGLKg2",
  "key14": "5NboEXxMqynjP8FVeQsrHw3BZ2Kbyr3DwkdQtgMURgncWjxUhpciLByWmZ9PsTqm6jmj2SMVQXtV8zWYzaBzjdcK",
  "key15": "4s8uhuQzuKDQT1KugXwzkXqsypW3jmdUQLAVDekU5JPq7TUEGrvxVXbC4xZDAWgdBX2X4C5qs5MdKyZBBYupYxCJ",
  "key16": "5Js1L77Jb685NGHKbMNJvbvPGFH7yWHhTicxZYUfnu4BAEq7qwS2uC4NVuTDPygr2gZgoU5c5EjH55tE2EyRq7r5",
  "key17": "2wNfXQdANXaLaLJKXTx5Sh7TLFmkVc3rdXLx3ieC4ZBgupFZJYqfR6Z5PTvLZmiun1hbySPKsCkNxgK84F7sEh6H",
  "key18": "4uJcCsQi1eNWL3rGHofPP35hoPNgGqFrK39kK9LHc2H1SWM79CEZ2jTPRAoDTQCa3ehsNmXnHrLNoMM9uWGphgw4",
  "key19": "64jHdSiiZHRin2LxfN1kSMeBKxfq2ZqupYwPgwgFFuAqkebRCgk7nVy3DS89tE7inD7Kd46F5p463VcQp7tXziEc",
  "key20": "4PLkMTMLRipJyZqnPERQXd1gY3bFUDXRCaKMxkThP3TsTm2gqQhgS4fLQteARKej8B41SWMNGXfDjyQAMiEE8CZy",
  "key21": "5QUsnfhCGWHwrSfe8caZL38bxWQFoLhNor9cvXkZv2x5fhdNDC3Bhd3oVkuWAhyw1uWAmg5H91h7htTRtLx6cPws",
  "key22": "9PoYU4w9UipPJ1Cc86ftDqVTirvVN2FGhZqKMLLq5QtzFC3ELKSKATX3TAhHibR4GbGbha63ovoxPBZ7WKcQ314",
  "key23": "3QVmkVSZ2bvvAEjH49vSSjrpb3hjgg1YFpUbtdYiqW8mp5Joh52DkhpuadM6vtc8jURXrc741Rsgzx4d95BfvT36",
  "key24": "qgYrbAVBeE3RfaFcVK7n3iEfLmfYL5SyU9xdy8tvD1FCk1sUhaYRRNhvngVy7Bcp3QQRdmZVcQBausSghp93uXS",
  "key25": "3zftvAd7RZ1APqmLauQcLwz49Av5JGUQwmE8Q1qduSJBCfDpgZj2Qg8fRP6UJVKLfhvsyDMeryyJMFAMvZnP6xid",
  "key26": "3wpNQus7tPXfUm4vAHBtRoJG4qJd316VyF4u3V9XyyqpvY3Dh6zDHR5Ey9krCfosZc6AGG49c7D5eoEU7s4AzV7L",
  "key27": "3NzVnq5cEY892g6PNJ4oZBeLqGVtxTioxj7HzQezJyQ6WyPtsrMBeHWPuAet5odaKLWMUyDXSM7amtyb2mmHc1e1",
  "key28": "4DUGhUbWZMJNr6ydvnmSTStjGXfRYR12qJok4c4Zj6EPP7KNjT37g4JL1hUd7YfPAPdo7VsdtyFcfQqxJxTRtNpz",
  "key29": "3ViSUcf62MQiAGG6ZAddbYAuLziGc63xvRXmtg7ACQYhdh34btGpxBMbXpXsbeMxz4HK9VGnkss967bfbD5fcwv3",
  "key30": "5bR6C5VHbS5SufmKWc1NJqa9EpNnvRV2e55oC8PCNbTL4XGWBg8yinhfqsYHLVTpjADC7VDt65T1FEemkgBe8KC6",
  "key31": "5vnrcM9xsbysJhGkhYwT513sBKWTYFmucUr4ZNEwY9Dt8SmGq9PjJGdYV8uaLuhCx2yevyDfT8TE3fuEvgWRoDhi",
  "key32": "2N7sLdnEGHodd746AH1UKVrLMBD5kRhTq11RdZqU98zhLU5nykm8yvMUcoiMuzJBqMVRHKWS9xwZkkPihqHm7qQL",
  "key33": "2XCF7NvtsYwajSSkosLYL4JPrEMjS1BsM4HhdENPjR7N4isyEgR414JydzBP1Bgdb6eCX7fMxELYJwrpSS5K8Bdw",
  "key34": "5g1sgs4vmYnADXEHsmLNdbUFR42TgKQPx6fMUztrPCwr8M9KbbFqPye63RpoyhCTtujpiytT7hwPkf5y79DBQri1",
  "key35": "5HQsPDEa79T4c6YhbApg39Hv98Qg9xfNJZUr4Z6T9ThBrEWynCX6PrAR8BoigSrGe76MrstiencmiuG37SXJawzq",
  "key36": "2SbrVFKd6VMFDih95Gyk86iTngB4ttpaUuXF6V2tH8qEiyT82AbwsZYr1HLBrvZVjRDP3563EGLEZ7aKdN9ZDWDB",
  "key37": "4mSv9TaEcFE1vrvMzuN4CNh3JcZzveUHikVEXSxWRHrYU1gFWxh8KLL4AddZfJdGsk4mUVQAVHpRWeYpzEEPY9cM",
  "key38": "5VvR6kpByFLgVzs6FqtW8hrkaHQzrYD71XvJ6ERfhEbinkrk4JvdqEAdHLfXZoqYmKzZt61CLBsdAt5rGhZCxUR6"
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
