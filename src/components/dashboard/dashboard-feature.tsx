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
    "3byefVdJ8a5BQtF5WCpCtedcsUK3d4HdgqySHE5D62wbhSpHLh2GNaKvf6e96ETe4zFt3VooSkoDQ35oENThtLBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agqibeUnL4ho3eb1sqiVVWgTDynur4v8qVqnhKh43rQcTvV5m6E8i5yEUeaJJQdkRkxghR6FJmvtioYakAE1D5k",
  "key1": "5THPZzbuw9SWyp4j6pRWyc2PUg5uJjF6TAt7RiLFgXkM4vReenk68YAQ4foZ7ypFxxxkcdkcFxUtrzkQUF9avMYG",
  "key2": "cg89ognFUy4rTex5xXAY9u8M4Sd3nFg2S3vAKzgvbiRSeaTt7uKm2nJM4GYQsQtDvv1WHCAjdxxKL9DosCwJD1n",
  "key3": "5Kb7RZX7ntUoZRi2f7RDk8CxsYVFiPxHTavz3Y2mDSjDooSDFjvYrJShBFEmYbfHPgi61ZeioV1bP3vctAgJTGdh",
  "key4": "394D9r5ekKmdC3pEPtpL9TFNZsDGiXhX4TphXYVpovf5CrYTLWtP4xz1JVJZxTn6NrPk86zfj9APyw964j1Z3V5T",
  "key5": "3E2WNi3Rg8AA9Lyt39VFu42K5AAkczJ6mfHcKh45ZeiB4bw2nqdYDRkMYNFhrEdqRv39MRGPDmt4JSos54JfjErZ",
  "key6": "56m4heH1ArY2CY5Jh2noC7RU3pLtirLsEgcKtCn3hZc9DnBNyWzXJQQ4JgQhMQu97UEno86vTWYLZdVL3pyuHXCS",
  "key7": "4YLYhA2mpY2WyoHht7TXaE6Q89VarYTC6aHnyGcYug7SmKG55VooQiZi2Cuq1TnFP5ZE5g8x8ymsLivRiCfKXJPX",
  "key8": "5BsSx3ob665RRXGwcRp1cZBN574ZZtYre6bqCC66aK3RnCyZYBtGH546Ln512uQ5XNi6kjAE5ZHoumWGV3Qb4caG",
  "key9": "4UuQbZLetEPgc39deC4aLZh74nBJQSzaBskow8eZ92yHM2F9uY84X47h1jmA6iTjuk6TVkn6mVY4inogiSZ9raVE",
  "key10": "4UWkQsEVhQmUCZeVz7yArywSmYTzYJCGpcm66M1iCskyBQqnhXXXCuxWhf4cTekJZnKFAzJ5cK4chW6dd3y1N4R6",
  "key11": "62dnDnmRyDuSFXXRc5qNhqPBUVZCMoFSd6C4Mp4g5untyha5JwhCTsb9UgVsRpe7a3AetQ8jNsFSyUS4i7qeHRfZ",
  "key12": "5RY9XWsktsiuzg2Pv5aB3eit2ZEEWfxUbQw1LZzLQxbZDod6Nv69kAtyZpiVo7JKjDwEvueGhY6bgfsk2Cupx3xv",
  "key13": "5bdAYuJLHFjc5kfmh5zSFtzfs7etgZFruRkmBx4YYoHsCYP9NNx2i5nSdVNotdTaJWkdSXLWnnKC9zh13wszo7qF",
  "key14": "4TdvNuRtRBpSrK2pAy2NoDciQoRR68tguSQ7DLhLqkazg5u5rpoy1JHVWdgwRB1s3BFh9pEPXq76SKsA1FuRz241",
  "key15": "4AZ1GvUy8g7Cxmwjf7NKQSVKoPsACTqbasazXcyLz51AenZgW3ChgX2KX652qK1p7DMp872SiqRgTcM62oD2p3Uy",
  "key16": "ghPX7yxydDLuwJCMjajB7jWSbgitc1X35FZaZbRgxWkUhBZrFPtLmEba34rPpCiXWNQqZsY13inZLizT7TeNe1h",
  "key17": "4azKPnhhKSE2Vh6Ey8AvQWL7Fh4Hzfmz6T6abM4doSERKSzMSfgJsRNnw7B4SNw4p1U5LNjafZwKFTDDYFryqvBi",
  "key18": "4N5aeKaZ9TsQj2qXcGnUEdEwcSysim2ULW1Psz2A2vF9v7ERkPsdrJj8TAw3LZKHB79D77d71mb1A1kN7dEjjWCe",
  "key19": "3KMwMzCEkkGrmk2SNBqh4QfUwYNBg6Uqcy8NexwhpNcSCEDQaXRWyc7JXDVBEYCVu2Eeb3jxYXPnq6jAkHQXrfyf",
  "key20": "4NmTBuHJK5XZEtTaSi5fTUqGn4zBdTqTQL2RR5f4pqz2S7yY4aM9y8UKHp2grVQneykjU7JtAWgQD2A7rHztDbfW",
  "key21": "38s7oxrmPFBG8xNcCh1BfjqVgN5tLjRBXNPfVWyRKS8dVygb5cA7ad8yazxAYcQyRBtVTkWqpKG7PQ2C49iLqutY",
  "key22": "qZ6kTADKYqH3WkPihYWCpCfFEnBVYKPhyyqbz2jWPN1iNR21xmJ2uhSPbz7ZPTWgPEm8owsWnnXZfzNBnb7fnT9",
  "key23": "3HDBN4nCgreu8FQaxvxNPg8FFK9QwC5YC4QqSrtmgtQoY6Z7T4xxap9mgXQ4QGuXxQG1Bcw4CoMbEnf6cfU4Fvv5",
  "key24": "iarBif9pwhF1HJoyVpar53rYqQ9zhcELu7Qt2pSRFzLmeWwGNqz3vPw67R3Px4qYfxP13rbSWsLSNrZY8yCWknQ",
  "key25": "FUcW4GQGY1iPDBXRTARJNDopDpCpBcsBmE7woxSti82SekYYjMKB4kVaAFopfL6e2PmXRKLPBeDXAb2y6uMik1C",
  "key26": "XTeNp3Lv2cz34JUJLzmPRsQNzdeqKcEzsT35ANTdYvpSZbDUDZYoUMtuq5mcGVYDeiYhh7Y3EZxbKfNEZDxL6jk",
  "key27": "5SQBdtDezRNz1rf9iFByB582eUHRxwTsSCDvkAQTqoNU6e31XMUL8NTfe5PZtuX5ivgFBQceAR2ag67ouQYDvN6E",
  "key28": "3WBYHU3stukvuzDiBJ4nM1VFh8MKazS3joEcQo118cKeJxDf3vbmq7MWYbTwKARC1Xa5YBtU5Xdcp8XfyPxkXZza",
  "key29": "4pLmz5SVr8p1GtZ9ggq2ZRU8XfWjoVMr9doKsf9zovvUY2w5yNHqcfUhGZmfEnfazJsgYzN5LPujFtUdTVXsTQis",
  "key30": "4VyCBPefgrLerEvAnHkPWt4jDzgmJ5s2owaeTpDQAnfB2RdgN5VhCSD8isi2AQuo26KPSDUryg1T51fcDw8eev7L",
  "key31": "L4ooUQJnrmPTEKzgRLjnGzzkEH7mFe6zJBXMfpbHAtQ21age3PJEtLV4iytK3rJRDo393FwyvJn3ngfHdmGrHQR",
  "key32": "615xh5WqtHg1JTKa8H6wtzm8AMAiYSAu7aWgKCEEgh4FyS3eG8enuVxjtQ7qeJiAEqCLsJY5JfvTPEc2CbSQAYQF",
  "key33": "3Fap3amLQieEQRRain7QRBzCogAfcGkLRPQyDK3seo73hW1zWJjT1Uczbo3GHwSEzVa6iaMKWBtDKG6kUgTGHTFm",
  "key34": "5QkmvoLDvh1aM2pmZWAKEhyR8LqntmkXZnJHGFFoRhrN59h2bMUdKAzxeJ4UmsCCYXK3EkLeAC6u9r9L4x1ziGgj",
  "key35": "4X3XBN35kGekDq7qCdzvZoz3DCTa2Bez9jGzfs8GFUox8pfBbmwZTxfa3mFv8C6SXGbzEAz89JYXuVCksnsNZYnC",
  "key36": "aF1TPFyJGskLXyPTT5dJJJTeDBGnUVzT7tAcFxmmWoDPA6tBrFtQ9wSD8zSV6DNFCKiVdvaWmxCxfB3ZoHr429p",
  "key37": "2VbLSCKsg8SJEZ9rSrqKEAWny7gjtXLQpMNGLF14kBFT2xbhXbjKUzJghWuDTxCGt5PyWJA1G4Y46myfSUCvFwYE",
  "key38": "eZtw9xYGTxHfZKyRZTHRrb43vbTpcTCwvMrSXDAAbvQMopzFxmPgA3SuGgeqEHT9Md3X3gD9pbYhqqE2oboGNoh",
  "key39": "2wEm2aUUgXZx7ygLkTrgaRn63uhWVhy4uPTH32mVdEBnfSd1L2ntJQwZA1c3MavK6BCENTc3LWn9mJRv7LXuBwiQ",
  "key40": "215Dvjjw6Ld8DhdPRHtjiH7ddC1mWBHdsdKDWoUkLAGzBKLNtRrXeE86RhHrEt84CwkDfPdYeZX8gsx13jMRCnMx"
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
