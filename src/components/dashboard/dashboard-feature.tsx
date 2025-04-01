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
    "5KzzpBNRCayXkvRrZRDdTpzXu9apseTaJXuZ1wUNEU978pwq42rtS8CZzomyMA713ooWoKai2jmPVe96CbHTT6ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63DVr9E4qdQpSSN8pqqWskMh4nmQenPevNaB6QHg2YmhZ25c7iz5YHyX1brKizFhpMvpn5KNdCT4grsWjP1SnEED",
  "key1": "4yzWTSfYQUgDA3yqn6CjnFGxehiouVkXR2i1tV58HzztfangWssCFNFgNPpNjErWUj5UQqoJV5dZbjbFWsPSgfcV",
  "key2": "5SmHjSAwpfQHmaSJGmXhJ9QVnsHK5auVP4WHwfE5Hwjg2K6XxWCSwKTPyJfo9JMuDQp99rTh2SJZmhDrcxmPkuES",
  "key3": "3C96AvN8pyUtNF9i39XLF8RaMR3zxs3SH1TMVJ8Ae9QSMoR5wBfzxuuWYDnSRdZDZTzzC98tafBWvA3CdSbSPmA6",
  "key4": "4jKFP3GVr67rDo4VaDD8Xmv88SPC2ZVbS8X9pEJYoN7nWNcs8GfHb3ZMNM7jCnmesV9Bt6mqLHDRCWWwa5F2PeZ8",
  "key5": "2WiKQNqVPgck7zBiQQqhigvN1F7mAHU6wRB9xXWRCYAhc1CmAPrvK6kB1Tuj3EeRELgWufsBMpiWmH7hnHAYr1Vh",
  "key6": "45rdPgiXymqtyXjTquGhEzgemcauudNJwHqfAbCydMz6nMKg1zCv249PdqCDWcVmw1SVnDnz5Y6KQSY6i9dDVm2j",
  "key7": "2WE66QCpTztCUMdtPY6peqCZbnqPmuMnXyicwk5dZzJRAsoz7oMqTaao3ukkGpeFqfA93ZqYLpayp5Pg9rKtLtZD",
  "key8": "2pHzzWiVyRtQm1vGnCDSvuKEEfHFUaD5ektsdTFeBVKXGDiUsW3nUCVW94f34Hd6jReMdCPes9uKL5gbA1KQsH3Z",
  "key9": "UoHddaQCAh2EV4v1xJAGeGpk6rBqa9deGt9JohFNJzvqC3farSdzwXGJeBSFUcdTTm7HczA5SrZcpbFEobsmdSK",
  "key10": "43nx48nL5awqTdQSZE4bNjL1DuS4YgVxkZwj29jxJ58nfhkoJBTH14jWABmhJtmzYoBCU2Cehy2zErLMeBaofeKz",
  "key11": "GV81e3vLDxHAih4kVktJPDS75y4XT1hkrWqGyyihvttC4uanozKLSCxy9ELaqJwFc9SHpXyZEB23mWi9qSWyyfr",
  "key12": "55q4bRd8FgfrouVhpg55syDbCL4bByRwK3emWPZctiCEZaHn6iHXCUzdfm6wcvDWMRXGrEgjAVQuVQFzC9n7f6V5",
  "key13": "bYWxqpX7PvCrscNCt2jFxAZK5Q1MicAJ7CWCDQkFjgsCTTJaRdFUrg2jaDTsu6LndsbVne3YsfmTj6kWyCsxnjt",
  "key14": "45Z4JppvGtMvoS3UJt1hf4Fnaht2k9SswtJskWR6khkw7PCdSvEdaMajSbku6trKP1v4yxt76xXwQqQGzhwChjvk",
  "key15": "3NxnEqp2cySi4V2yqogyADATBQPenMRWypqvAQDb74VdtCenW2WHJMrYg1LM3RLmT9Dm9tDwNj1SxAMtah4DoMPF",
  "key16": "3LKtjV9DZeV4YGRK7Z3ScSqYbQRNUW2EkK2dTfo7sCMpZcCLE2LqqPL6CFejgdR4wiQHZzMoYBc6d6Gihs9zDgwW",
  "key17": "5WVpny7WhFaBuq5ymxggzejrwq4yz2jAf3T62uEALe8eCUCBPHCcHLf5y3KW7K185Hr23k1pSzSNxJdbi4wA92nr",
  "key18": "2rkHQvzPCCHaGSkoNxPwMaLYmnDsmRreW97ZZKJaqmtjLBHXTY5Cvo4reqaJwXCZnUvq5JF942EDPZdkXpJKNvt",
  "key19": "5n78Pae1xLkDNNvikN74bD1uRJNmx1gm5Zv6T2uq6cYjmTPxbung6zqiSejJWQanffZB7R4k7sntnxdfjpzMwS6f",
  "key20": "4iua2cg9mGmocAR3mmVLxLPhp8CHtTZ7QnWTzhtunCgKHBC37FfXGkPXbNKfF9mGeR2iajopnm4xR1LtdJS45yD7",
  "key21": "3CNPHeKSX3MtnFpbbtH7nDEYM8gnn58xS7hVBz3tDEbiFE95NdQEeJavK6hvRQLKxJyntieNCAmLmmobDqKLyw99",
  "key22": "3FLmqqCW5U4ThVAXHYhxv1D5j6PQQzDEKm5s4mwMtEVAhun5k3ejYhnCYvbHLftiR59wS4TJcyWJXnTYQpmP65sD",
  "key23": "4XtB3L8mGLdSnPpAQ3nZd9c5rkWvqemWBqRgJyGFbPhPQqJmXVVYANeZjaTaZRHfkyGZr6M2Hhy4KaxPMDpvZdQV",
  "key24": "LqN1rQt9pd1WXJ7sbQ8i5xWefpYFaT57zJPnnzyg8WrvaFLu3t8ffi9CPoSSed6ce38GALuV8kCLnR8UfLU1WLq",
  "key25": "sYfWDu3JxAiLK7dBpQpMd9qY4chdXBKiPFGQjJFPSXdn7q9aVPmKu2oSxrkjC54RYLwTCpLCASAYzrgzjXRM9wP",
  "key26": "5g2xMvgk4YhaYrLLevouLeee5fiiFZRBd5sRYoDCG279XHExdbGS8T7MtSBBf5Wj7d75cjVfu64F9HivrmbfsoVr",
  "key27": "4eguBw3BZg8jKE7yGRy29rEuAHhN4GK9H75Xc9XUdTrPnpWw6tiFY4emBWUcq43CXn9bw9wqcRp6kSNxeMQZTh7V",
  "key28": "QbHSJudZjjuGDBPd9TvwN1Q5TjgB5CvmiKZixwfFMGk9Jxhdn9f5CuuS6SMARpzafxn3Nh4a1HGtEC6qS2JHsoP",
  "key29": "4ALzkVtV3yJM4RaayFkrYK8innDrRRwBE4ZFGzmCU8qAHZgpW6uQYSQMdLLthEoNVvYoqqm5QyFbCgUM2g7ibXQ4",
  "key30": "4BZA8AL3EftnMUt22JdiwMHRGPpsWSRSbynL6Er9Qi2jDF8hzn63uebYv9dJC8FnTKCZW7aqG6wHGRjtu2mgvC8C",
  "key31": "619PXfCHt5QFqqteGawr4RpjmPZMZDeTAvNSc7LY3Pe5Xu2fdXuse9BDjN29gzwnC2EhNZUePanhT7uwePGKda1x",
  "key32": "3fz5v5GZqMo32tSHxPtQoHVUKEJaXcXq4KJdhfdrfT8EQLHTafeWyzJkNxUfcUdAagS1r7BupZYaFhsb1vDvQ58c",
  "key33": "23jApgrLdo8mDrNVjVq759nBcGToQQimcGP8382RzBqXgWzRxjDymZ8J7bu13VXPm5hpAGBrDA9GYddAb1hvaWaT"
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
