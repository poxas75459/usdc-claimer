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
    "5H9WRyNWDzG8FvZFQioF6THtrBRS2YJas83aPnCtR7iKbBfUorNaDAoFzVy6x33wxX3f2nrRS7pWKQE54bk5eVrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWs26uraM2w7YtLgnoQgKDNicrexhGXTpCzfcve7dT4jiCwAEQ7hFB7P8ss6FcJL8YT23VsKb4aUpS1U9g2Gytf",
  "key1": "cesTRwfBydvx9ksQU1LLbCrVXvZSKWSSmFWBR87LPfV5dVDu5RybZSd84doUhgfA1LwSCeEqvZCD1e12ZTWwLdb",
  "key2": "2V4TxSWJaZ36numRReArNooyDuAp5LRW8AtCvVqGhTYdAKMPEWADh7pdrpHpCGVGxb4NdQpHDBFszCVd6G94agj9",
  "key3": "3PLjAX8D8EX1PA6wMueqxCTiuMipvTkez7R59tajuRZWLAnZ7AApxp6UUAnQRz14xmxMVwxhDSoFnEwWsQinQMGe",
  "key4": "aQsRoerndVRJNw2u6qgZKfrWtTiWQyqXsKjWjauPwDWKG8grctZbavSwtnisFoZy3Hvy1F1cCYpQ4JKxUh3gz8o",
  "key5": "5rUvH1LR7HaLNAa3m5VQgfk5NgTdH1yo7zPDYaHnbMLShBchzS1KmJ7vcgMSkdy35kYWxAjsBqGpv9e5dfhFuCpg",
  "key6": "27QA6ju6fx7cvv93BCxibPWfHHEb7e1g7e4SHmBFt5sZgrDdMb9cjnfmGXx4XV6sEryy6w3ZgSM8josmFoBRWpjn",
  "key7": "5PTayjZrZ5FGaqzFVXipahbgebVBdL3XwcxscFoyuM3xWgxaLUoa4tMyygYfXaFiZ6miw4Wr3oNEbfrTokY8oGvH",
  "key8": "5kAGM8bf2nT4XD1KgMD3KrQhqauGwDjXs1hXkUPaHUXfHxF1B451qyX2Rorb43TtUHUiGE28wJsBHeWoFbr1DCVV",
  "key9": "2iBzfjQKYUB9NuWCDDcyvd2DJnmTjWGB5nB6uTDgWCEd2sHiJz8Qs3Lk7Ds7vytZiyUs1TftdHdzgoNmaoTcTd9S",
  "key10": "2i55NB6fXbKcLdi48Qw37y7vQcsuiUznwnRsx4TKCXzNsxFgfKzNKEW3GmSPykFDX3qoF3FsTiTZ5UrSn8t4mok9",
  "key11": "3BVdz8teKVUZpGqkurgCsYeis3PANWjC6ZkfxV5QgyfPgs1zdSxyPaJMBy9Swj9Y9D7CzybJcmWGPDeftat6GRiJ",
  "key12": "46H8bNDSdARj8Ef9LFSwvQJS6vDutZZhZoyxz6ZHkzRuQrJggZdziAtmQnM3GhxiqWKpC41iRUqJFja1HvRr7UhY",
  "key13": "5FDhpvN3hTrUPFLw3kfdHU32CJJW3RoBRUnb2qX2DEMHrx2voXJf4rdBpa7Neqj5TRNmFNNco13KiG6F6XwACHxH",
  "key14": "afBsc3viydHyN7n9MWJNtaXtYdTo21zBdrw7KGEm9nXesAzoEaoMFoR18xdnEueUCQ9QyErETHFhrZQEQVjS6mw",
  "key15": "489hxd4zxNXSkHN9e7hX27e4xEFyAymA5ZnKrEQAVHHEKPZBttsue1fGpcSQTSzh3QTqpS3y4xUaQbttBtpiyobE",
  "key16": "28id7RkBku53vd4BNKBDtHg6y4CY1LdbHCTWcZGnm6wxV1ti7dbGuUyA9B316hVWwVoozD7xjHQ5kCup1jBHnHHP",
  "key17": "4FSrziTWAFD2YEEXEH9Ux8XjJvA4UdKjWftJTQK1S1YbpCi8fR27vN3ifscZcMFtBQVh3FRsWiho5sjFqYVD45tm",
  "key18": "2zbYq81SrFrFPsvT6yej1cpoPPPgYEwS2JLUHRKcgYxoYGZ2gFzja185GV6h1wkekmTG1uvipRKjrLfFDDY2GZwN",
  "key19": "2cPi8UTfFp71P7ESpMAvgNaZQCwD9qBw89tfTCFgXWN5tpq5VUGrJpGATEa63wL2Hcs7BrMFxot2PCxftD2vMiP",
  "key20": "a8BmJPsP4UkkTNpg4RWqwWUrupPsk7Vh23ZCHasFPxbN4zQnNg3n212JMtXQojkW8bEANSGPx6ULGCcKZ9mtXUn",
  "key21": "3iz4Y49Wi3YwnTBHixWc8yjQRwcdqbzasxVPh385TqSaJuzar5dtaozhrQ1nZkDebNxrsm54WRHkogik8hHK5JG2",
  "key22": "4tZSLSanRFqgXMz2i8RdiXAyBLFoPGxPcduJABprBimgqrSEfGC5Nav4YimG47ZVj9jYxwvgKJwGwpSeuXU7PNKS",
  "key23": "5WvK8aEDHXZT3R2ZywwRapGy96LE8ExvVN2LuSXkCw4sYRq3urt9agbNQ8LFWogdBfJZc1orCE9jRJD1DfrNnFdi",
  "key24": "2bwLb4rKeS9cGqR4tVkUKcUJNQzpxS8S1v5s5gzPNfZzn9SFd1NnY63d3pPP9iwNvUpMdkLa18onX4VUkDusj4rn",
  "key25": "5XzsE2Y24871KrresiW45EdowCiNE1ekSb5dTWUXEewYwGH6C5FAgwjLAg8JkEBuPcow6oKB5w4DXpnPsTEU7Av",
  "key26": "3C3q6NiJFCqb9Y8vJif2J7xz1riTTANqvRdKVRMbk3aRFUj5snH3AacHPL6QrBG13sxetMvcZ3N9y7MmM59s55xJ",
  "key27": "rrDqxicFD9bmt6UTJuvvTkurfTkRMjW1hksKH43txviK8KMs6NgFMARW5cSS7eiwWxM1kYHXmsfpJ9dbEnSCKjN",
  "key28": "4xf6FuUr2LodZPYS2WEZqZe2bKtsJyaDgxWfoFvF7KDeCPSssk2usk4FK53QaoJoB1z9x3vZarMKucMmM34TGiTV",
  "key29": "4gDmVXyn2A9dcmiHsX6LQg8AQTBF9ioJjyukrqMGhHiRfTvUCmQFpYg3FiWGRmAqXJQhDTBQRwrknPk91JYjkjSq",
  "key30": "ntgRQXqkkidtXXEQqzwBhwcREf8kHnupK3j8yLeGx4fo6MDpY4hBtjfUo4HHGCou8iW6dq24RviSDNCBXwmA7mV"
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
