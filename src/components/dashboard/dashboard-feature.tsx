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
    "92mJkHy5MzEavPEVsq6YSMijJ21hJu3wckfUg89pbxkr6x42Q3gu299UuW7jDZoVSQX1anS2QRhX16FjfLZ88Br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYxw5rJnJCjy9RhDFmHdqN39tQ22WV9CVTx4Yr5FSMhJBtZ59MTgus5Tzu2rMKnZYktfD1xupkraygZoz1XnwfQ",
  "key1": "dUYRZCSbz2t5W4qeESToLazBsvDNPfjPSWisrvPWMENf9AavZCpsKj7hsnQEG2ZTT9iEqBxLnbchcKfo8U2faiT",
  "key2": "jbpew4NTYYoYCDAE3ZPXf52S7YJc7TuNTa3TMQ7HTVsznLezRLruYkEVqCu9XKLiBNFV7GQ61cY1t3v3u7Sxivp",
  "key3": "5zPGsxt874sxnTUcyR2bjes2XZgSDxctsZbm3A8u6i17nZdon2iCtWMC4cBQ47KVah9obVmmWRKGvipcsUTHpCfZ",
  "key4": "3xB5YHDmTRaTd5PgixbFAE2FqSmMHZeZUx9zqz4JTmqwBtLZ9GGCyaagwbChxa4R6Nj4L7qt3Mb5jkLvagKMak2t",
  "key5": "3N5zUfsLDzUB2tbmBh9BXfs84JKkc7jK3UTaZS9tK5doXoYwJbVdHTAk4puwob8BkQoCofV2yNUGkW8ZgAkyQ58L",
  "key6": "2G4pimHeCq3yoz2iU1LbwVq7SLnLxqSh64Ff53DfJeicG3JDmx3xWaLzK6wotJV2poWGfBzDFmfi6QSdbpzWtedJ",
  "key7": "4rzcVfGcnty3wzmyKHF6EeJimbbMm3WSewKoTAZWURPR5ghdx2jsRxsRhrmrqXggEcuyhr6feGzycSricoaYR8Vz",
  "key8": "3mjof5ZwKf75zYs3WuP4tKfGpwJn5azzTZTkNcSEJ2px19KKPMmUw4MQah7yWS9iNs16FfnUyU6GG6xhwS3iYCNQ",
  "key9": "4XUcYeAGWr2FsdCDaKfj2wPjyLzazJqHVbXS1CDeALTwCbNY82HH4bYnBpq4jMDG6bET8Xp7VmXP9qYekYR2f8bh",
  "key10": "2Sw1u3jAeXZFVazhfn26fEpq969pZPLX5PJE4rb9KRHK8DGLeELSHC3yf5uDAmoFnJrbPfrfGirdHuXbz4JVdFgW",
  "key11": "FyA4eazRKK37J4gwNpgkhYB4YgFEQWcvshASHHCwCsJSEBZq7QyHxE3F5wkm28D1uuY2U9y6UkWJYFAdegqZBcU",
  "key12": "h3Mv31GDZ3xCxyJKevk2MmcLQZQiMAm8HbNDcy5AM755jGD3sfeVKr1ig3QYbcQwLA3oPUd5rfujtpiRXLNsHne",
  "key13": "3KUm6ByL4xc2jiTWTsk6eB7gywKmdzQbpKUT22WLSmonbZKktGsRrQ54X2YUDCRy1KyJJ8YPUvh7y3zVvGsXCpGK",
  "key14": "26YKJFLb9ZZ6rTy9yNr1bXVE58Uiww7ycUYsFfEK7uUA2HTsrptzKCDfZZJQ9d3S57ZHUvzsaiCgDpz1GvckFYv2",
  "key15": "3CSiwBzxxaRWJLuZ6rLKt7YXaFRkZ3ofKq4pHnxmQX1FFTxdvHZzYAnCtk7CCZtERNJvVPnBaVwveRaeH3mUzWeT",
  "key16": "5DfxESNHa84zJMAboT1vrdJoxWcwheGg44AX9W1i4L3M2YAvZj5H1MQDxRjcTikiZxRV2JnWQBu9RLhEbgKfANYp",
  "key17": "4iCa8JnvFEUH8JUPqeZFKiZfP2CXw322a1yctcLDu5e377AsCgLqwAeq1cdfKa8GonB6NxCVabH93XZ4cLzpHH4G",
  "key18": "j5NDAuaRpPmaVS9myeredCVMk8cBXDMQsn95k9R8n8HZG5DPYN3idVKqEzppZA5k8YJTEZDigdnE9mFBuGDqjBq",
  "key19": "dkupunxpcC7ZMULPrHbRUAzBooSrPynisfJCUWoFk5durUGBfM2oWVQhSQR6BnGYHWg85Gg4n8dySLPJrzcmpwW",
  "key20": "5bP7LCZRpt4v4np85iRqGZ4ufqDv8xtmJvrw4sgz8ZB4UvXUor6cG3zweyfLPmwyhyr8wXhjPofcgerEsKPJXKCt",
  "key21": "4mkiNVekFwCokHePEgEUpEqoB7WPTVa6Excu2QXdPJ4L6XA1n5Z6kW5tEErehDpBHPJF19YbkaTUfTozrTpgtMA6",
  "key22": "4vn26ed31BzVFR9ThvH47mUu9fSBYsZPfzGm9o1tFcP7UvQishQDaz3VyssGiFRESQ1e68SFULYrd8JTY9cTsQ5a",
  "key23": "47nL4gGLbmp84kNZUQBhLgyWwz15tPfHBgJaSXexG7HVgE3xczdusyx4M18oF4qEzyvRABswoJJNzMDsmwzmB9ho",
  "key24": "2qZ7Rxa5xsEPvfiwwYzjHNJFTZawJTBZApri9r8jiDcXGjWQUzffZN8Kw9iRgtMQKzQvZ5P6hKEhQ9EjurknQyJK",
  "key25": "5zMcFnYhNybsWD8Z3Gn4TksAVixqUWKWphhuhXCtsn6cRNu9awTWZEGC1bAh7bmvmSoKVFg9tcX97rNF2q328JHT",
  "key26": "3DvkiS7aKrt7jfXHURnYuWgtdY92Zj2SpVjNxgKPR9GXs8KUV4qy4JKwsvtEDmUWkQSVdamFxUT7BiWgEDCuHdBf",
  "key27": "3ndDWP7tayTkVdZWEB6gxgbKYmPFQkZJnQ5EGbYBKrxYKnCoJpvKvHrM8oZXpKK3dwh4r9zBY7N23LGvd14bLGmi",
  "key28": "26dqhaE68Ri69Va6MwSQXXpgWSaaYpevfzCyhvQcMsxJzdB6pcu1B5S1Un35n6yfAnNmwjvCniYusWzXbKCKA2vW",
  "key29": "2XbxfB6kFqh2eEDpttnBKuatiN1t7WUiofJxMm9wWoJzNC4He9NPmKRUtMmsEscwWZLCEmsEvxsENvYejxd12seX",
  "key30": "35YhWMTSEDoPA1NMmYFxs7oX1aw7SfX3eN3BRsHfhmowzD4RoNyDBinW1HL1Mr2bmpp7R8NfMWJ2fTSECWPJZvcu"
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
