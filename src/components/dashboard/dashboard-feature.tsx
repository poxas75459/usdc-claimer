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
    "373xgBGHLzWAHC8qrGssfEsnhxFz11bfJgobsLU4aPbqC3ZXJxXdyGAKeQ5rJfsZukobMuqiHMvj1DbErSWUfYLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5fynUphQ6AwrfvD3WQe63inaF4djFDHLnhcxivjT7yzxVU6myGPdRvssFh8F3465BEgpWDg3iTmvXgZGch5u8S",
  "key1": "23GZ8DwazpcRpUtezf8JFK9SH5Zf3TP2A73r1ZHqiocWnbXHKaFmiSAdX3RWLa3KiwJUHicyWS3mM1DupnkrrjpV",
  "key2": "4Un6UefQfvT4G49zwB82FTsmrBFBHC9M4rpbjA3LywiLiWQBStHbCLaGgyugwQtb89rk9eu8pWTtRPrVquxcr3a9",
  "key3": "4zzZTBHmJD5edZrzicSdEHFFVJAnnd8tEL8wR91EKpDjP1pwoz1ZnZV4LX4cfVrsLuPiq861XQpKQerHcbmauz9M",
  "key4": "3s3cYRhjmMbg9nWg8ud2WDE8JPsy4ApjpiMJFtobXvZQbSwKHytMiqsvKYhsYM3Gpp7jXomGNDMpN8kdVTmuUBKA",
  "key5": "xF7w8drpW524tNbf6dXdeotVsjPJGMsX33V1KmeV1k6H5B2TZ8GEpdTZGBMwvSdwL1kCpqyoyKbg7XxUUm8vfeU",
  "key6": "3BM2FPSSmiEJCLdE5soPUNXUxZ1FCEPcWZdxD1spaHB9vrQLaec4cHo6V8rVeWYff3jMCzarM77g4ypvTktrp4zt",
  "key7": "3gjKKqyPCKdHTTFkXKcxMjKqg66T21iBw3UNKfcTrcNesT3ZpEmEKuCmMS5n14gVUs4X47pqUxJScikXRR7aiF7i",
  "key8": "4ZwRuYDrwSPFy9Lj8XUrdT4DEYpHE1GmFKq9ivF6tNcnrMJpuJXZcmWeSP96RJpQTojQ6Bid5F7gNXoGiiadd7M8",
  "key9": "5yjG1gpboe9NrgBWQgbk1x7MDAjmzoTb5AEuompvM1Pswxki6AbXV6NoEe1SuJTdSAdWnxEjX1jLjqtN1W1nvKb2",
  "key10": "2rMSwmTAkLLj1VDRApjVzb6whEeu7pH83u7z8GNbUdv6nEnKCc8KZEysoUvTcQPZfGXHFE6Jeg7PuKwhCBDAnSDh",
  "key11": "3CSGztQ9X8o16wrzPKoo7c7R4WuunCMyS35JsJCZimPFnmdtZhUFYEFGV5pfBnapi3Yd183yUNChJVyWoaoPgej9",
  "key12": "2U8CUsE4w5KSv318F87U5ZYG224HX9T2cngLcxQQJ3LTdrxFFNe7WSZwi5PGSDbZXkhVM8RD5evbEWEnLB5UNVKq",
  "key13": "3xtCoHQw535CdByU1J9h7dehqQmnKS18iEjYE4W6CEqLXjRFhPu248XYCofY3LxNW2oxTwCJQqFBTQw9rAp5FD4G",
  "key14": "5PJtszr9RF47R69Zdzer4GwPznyDNnTpe71BuSC4etQLgXoHHc4wXRHm4ZBf2o1uaXiUq5cQEzzJZuuehLkL8yRv",
  "key15": "2fP18E6k7NUkJ4yhUUHSPGDe3PuMrVrTjNvYVccLjcKsxUaA7oDo1vhNZi49wnRZLaLYP5ehYMok1BmkeA2DJGKP",
  "key16": "2P5rrMT7UuNvpcAatjVaKgyy7s9nmsGHsBoR8A1S4BFdE3GZu7nWrJxmhy4Pvr4ARHCzMDPAvGSdPcmYmK4ZDvWH",
  "key17": "2PZoGSVH6Sexzd6J1xvEKAdKAkFpFjZvuqJvSW3VizFr28jxPRWD1qgnUWywykLu1pbGauzCs9G6sBW8K8kVAvfL",
  "key18": "9vf5fGsPTStPKHefzYvZg7QERa9qgxbqvQVHYjHkdcrfGvHJVDHkr1t1aSLhr8NNAZP4SiLEycVoKdfMC4ae93r",
  "key19": "5HP6CbcZfg5EGqB1GrjViyCxLQJqZX446GTPGTzPfcSPmkusXn7QjufTL37dipc7pawfoetxsMWMXeaSFdhuLfUV",
  "key20": "5fCyNj32qXgfX7EJA5i9haVX3FbCf58G8c6SMnbNeTASgMXWUrmHTVvLvA9Avj7LFUXUFxL1ugVTwqUGkG5Z1wne",
  "key21": "3nbtDCoigMmyH7JG8bJSP8akioGvo35pZTG9FirRkenN6zCRtbweSPL56wDmThc4KryjKFNwEnN4MAqz7txFb3r4",
  "key22": "3mAKa48N1qqWCfwVK1EsL3Jh1vZi2PimKPkiLso8A37fVUYd1ZJKs7MtWGqu3PvAYpgvgjgGbH3CFNMr2h6JLHq5",
  "key23": "2YmnpFwSx4M5a7V9nGRaUa4bKPY6A1VxahnBnBvWmyNKHLHbtrGEjpwkseC3Rx83w8J1RuEfBY4zUmYpBz7A8GQH",
  "key24": "mVRmDCaHNZABCLzidzup7ykUEzGXZyNLkRtZ8vPzyx4QY4nD2mfoQT5zGUyM735zWptxF4rdgj54xpFErfBFvSN",
  "key25": "61TEwMXS7j2uiRS8btZziBFzFSh799j16ALts12Ty2fiHRChFGBMQAoEZXftkAQusNUJUb3r6LFhHaQK9FSKvNnN",
  "key26": "4q8bRtdtiem4bhQ3nCGVfos7DMQbzdJcV6DZdqHF4sf4fZpcKn4pw1aTkvNcskCBmePVbWgKHcdtZtpN9Nhm7msK",
  "key27": "2jmJZJWKHGMHpojp3hcF93BHiTrFq6JPxnU6kXoWRbBj61JE4DPvWx9LmXfzSxfFaKfsoHsfgF1PGaGiY45LLTjs",
  "key28": "5wsRUcBLuHSLU4SA7n86G3SboRzwr8qBphrRWCEyPeCsdHYV8wQrWN4YSp5MHj2yNCC2E2ScXXzXMz9sxm7PZfrE",
  "key29": "u7wPueGQgjoxBbVUCiEfgUrzv8NQihQZ7zU9B9rWAk6vMG6QHEC7HwN3Jn5sngjsetbbbcaruTbbCdc2wMsexD4",
  "key30": "5GmDh3SkychqEMGA8QubRTHM6N2fBW37gTMToofLBVUz16XHk6LVXjFUGkoMkAocgPYmS8MhzPvBoTufUX3jBHxf",
  "key31": "5Hz3bsfw89j7gffGfPXxRqerpmwRDfgiocxSwYkUXgKwFA4Gx17Lk6vNewWfeDWYjiHa3MQJQY18amxm9qkn2EUi",
  "key32": "4C95A4rg3fAhBadjTazfTaVeVehi8uExpWW87Z413w92U9FCyaUDVaDyqdgiV7sgTrqGzHryseKkutuSFur3gZUT",
  "key33": "5YcHQ3GaVQmqStSmaUbCgvFjBmWBAYefyHZrGqdeLrsR7FdzahoQKQ5QM346ER2DFdepgi9ZgwGnFqXUXu1Mfnm2",
  "key34": "2AGCHrrjA6PMYutmfyK9Bz14Q7WWbmdpeQbbUDMJKVfn3LSRoRSm2m5skhHjX7Ge8snRUy3L6V2yRtqTCuVBjvK1",
  "key35": "3NmUwNMcmm5vtMo2CEHTFTthfgyBorFbCe3uBTLdurbFgLoYTVYX78x9WB3pDUq9EePL9vgXpAMFGG4w2tFkaDT6"
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
