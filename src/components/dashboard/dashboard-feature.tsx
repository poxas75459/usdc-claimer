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
    "ujUhjsYjWChuYbYbbm9hQMhMfozU9YJQ2y1d4jpF7KVjsZSRGYW2gtWjVCzYBYncdt3ZMeACcABg2GDd5VxEtAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eX8Sqf5j8DJMRb8KSiU4HAd1Xt9kqRdrA7TPYNTcuTqiaTbK1eWGAmeye7oaiNJ4rmpzY5qCNbdkLEhF4rdmbHH",
  "key1": "3u2rbje5tF5G2BEfsaeaRQCTL5pYPBtcD1JdN4Q6s6zrDmbzsGGuLnWGsLSKmyQLQ8yUZsqPVhCZ4843Lqbx9kAz",
  "key2": "EuYr2JZcM27rfbNzNU64tKHJPHXTuE9frEmkgLVK75CtY1Gjadjrc6nDkMWmwPHwxkx2dyVb9Y52vgPVLQmVKcc",
  "key3": "3K8McgLUWVsyGxtpJ5fn5Pxme5ASAt7p92FYks7RV1zCbskhhtPCSNcjMWLW954xpsPx7j5oWdssUUCrkbm8T7o3",
  "key4": "57q9fytQSTy2GFjZ8PsXjzFB31W8W92NNA6m3HAN5h9aX8oVt6cmpDDVNRdBkG8V8QyVbxRPVqnc4cHeghMZxLB7",
  "key5": "ruevQ1sNXKALm8Na2AQcFiDLFdHZ3SaT3aP1uQBH8cwr7XTzUjEScp1uSyDjvDSiy3CwsV11ShMvNCp4wZyu9Gt",
  "key6": "SetG3GXzRh6mzE1PiBKbXCWyWpCCFypp5nB1rFXgkfK6gapycxpQ19f1T7sVK73r3eAzjZm966VsiyzEqZsoKh9",
  "key7": "FEft3WNWJsSjvLLYEMXKyskbp5py9gN3JFp3Xn6R7Xit9XTwe5V8TJJPDLWfFX4Sq2SmZCXxg9n7ZxspCeMEB1G",
  "key8": "2c3UUtjr19dhTLLQhAR1WNk7Gc6oDmcTnvA46haGBE4WNvspWfgVqU34qZRi6vkxT7Ru9fbekESiGeDwP4RjgaJh",
  "key9": "2c2d9QqgKPiQNRcFLpdY3R1NES5Awu2xvKmvW1PkUXrXZHvnHDzMDYMc1wdfijXVDvXUs95VWJoQbHYGFYeyj1tK",
  "key10": "tMmE2psZd7YESS26ckSwh2C4BLcpDvnimDGSCscX9fUfwrt75MVvowyfgCa3Bs7645C5TWD94kcCNEw4Kurhpqf",
  "key11": "4QwWLxvvph4FWryJetAdnybKpoemP83b4uyDPrGe2bGRgCXwDP1Zeo4pd54edocJ5KAmPr7cNXbSUMo9vqDEFXwy",
  "key12": "4GN9Ckp1nnyWEexo8eiUWh8FzkQ5MYUScW61vjEmf64h48TMcBi7LtGRYZ3TCgHzPxvAMemPH7xzN851m7ufzrEc",
  "key13": "4pawFHA57vRkLrwzQcnPoY18r4qWyZiyyJbA7d2dZ3RtM1sEGs3niofax4Wehi4CRfSEAcZHCvToZfS7JZeku6Lt",
  "key14": "4SmYRDeDTESo92LnRNnavMi9fqQdDKetmaCHuCPdLSNKjxH1jXek1LJa5SEvFsSDispJwS8w1WuAoRiWTYRmDhLG",
  "key15": "33zRek7a7PUvwhStrMx7a7N73nSuGvmGWCi8htJZrpXLbU3c4DATSa72kczys3XrTB6DBHuuVBobe2RFDuKegZ8D",
  "key16": "3ySzksgmt9aKuRUkguehRBJWuCQJ7aG19eBPPvJ5ZthT3pgHG6KXxSSrR1nyJRGao8RoiaaUZGHgru2GPVQiJaJR",
  "key17": "352nuJpoY6BiTX6C57ER9CMFaMzNp9vKXjjADumt1CRhBKbreqLQ8Tjo37GZxqkwtFze13vhpQPL5Y9DjxHJQZjH",
  "key18": "qA3wsNPSpUGdXwa7E87TtB2FZoGjWwo8kZNe3G3hRgNWURM9uheQ219Hs8x4rWhnizZ9UhhzgBuCBGYR7oJh2rL",
  "key19": "LM7SxPyD36xtfELzCMM8rLrhHvZCSbrG7tE331SCd5wRYZFyrRyxvBwQVB4xuMCftqtnxa6j5QqaZPovmHRBLMQ",
  "key20": "22T13yAFYrzuXQQbu59u1uGEuAspKbSE5LyrME8EPi5pm6GzZGS8jFhixBe8YNLZ4j8vhboVKQqPzFrCV9Bv8HyB",
  "key21": "3pgtHGZEZqtjGmkzXPknCiRS6i9Nwinx3XeGKVzzoUViUfoRTrJetFVsEKMaqPctstpQMRHz2ita9CV2fzcXK5Lz",
  "key22": "5DTJpwXsAHSovHoTo256kUpNVgq46b9V6DqiTJ5Hx29pwBKH8Nq75PfN3GTXPYmMCLkUbgyDVZsRXeTpfNK3mfqY",
  "key23": "ACa5f8LhqhXnqodofpJb7rRAi5MvwU8a8LGzP77r8pi4HZiX6iSkEffh72ZZodJTa1rgLXxjipXWhNi5uAZuHNH",
  "key24": "4mkzG1WkB5yFqvjCps9VHwUQHMqPYoX9rYZCVDix4ppkdR4n5bNrUUTA3JQHS9PmMkRnMfhYUb2968K3B32LfnGW",
  "key25": "3n523ZgZPThfihYao8nr4b6sPAy6D343CVSr53AN1wAxaXUM25kcWcx3gA6kuKY2vJ4B9m41gUDHLjwP3JeRVdSE",
  "key26": "63tkdndgBJYM81uFsKGg9BCraCD7bu8FqzznneUKN24iWS9GjyDwEyGkRgJPUVBMNEtjPF2crV1m61nVtHW76GLr",
  "key27": "rUHXt4v47vqr71XH6NKxU3zy5ifhh85ANnLnrsczK1SaAcx6LtjmEmnRX4CP3JhtWHdGWjUiHdHEACpWgU2ZtFq",
  "key28": "vmCNuSksMxjAJrzTeMoN5TVT739PvCUt7DvRtsd92R1D7ystx48onnAuvEwVmLw7f5msLJcUS2AFdfFt21o2bd7",
  "key29": "2B1F4ZaNNwH1JXzZNdywAbKMx9sabUqYM79vAmxJ5LQtVE4agC6R7VnivWPysWfqbijzZJTMtBE3wPd3wuE1kX64",
  "key30": "3U7jGspJEAQpsTfXz2Dw5or7XgTcb6ECsbLFisEXeSinSyZGrjniuuuba9K6R1DT4QG5tGNCdT6SXvwH9qu2XPKa",
  "key31": "5hr7sfsH9evt1gnVzHtwXpRyogxadj3FdBoW5BV7hCrSWu3tTSP2W9ukuYw8sr9fCCn42txdBkENVCZtfNAfenqd",
  "key32": "2uX7fXjKJfc1sSphtxavyvdaaU7KRzMjNDTdKCUWCCTFcNkUJbDZenP1xhHyDEqo5DioS5gUNUMfFz5C6SpwJ3yZ",
  "key33": "2My1JGPEcBLJj42juTyN4PVBMgoDTGWQMQnSNoQLj6PYSfsjVJzGHEovGTHuazHERTDZQFtAQ3jZT2FvooPUYxus",
  "key34": "4RGU7qBy97HaT5eUFR4dRq4mYR9k8ccxcUnvHT4LiknDjmG8NDMx7xJLorcZ7iZNJGpG56cDswqkEdbQPR3esmTs",
  "key35": "tta7dnMUtxW9vsByWEHMvoWRPvwNezKLjrVdBA6dVf5VybVDwFt2ek423XPwyyihv9vfZ2bbwh7AkzjiFS8f3FX",
  "key36": "5QFd9zsunTxg8VjaPz3fxcpQdWpJPHfQ2dDDu9scVF6i3ZhfAjDHwLfVqsu2T8jwWB4aRkmDX1eRwJEadybhzhpU",
  "key37": "3QZmr7E9ZQ1GK8LjgzkcppHm3mQzNqQUyvPVenACDDyxRsPvqgteXHkGhRP6bUrF94fgD8gQ4g33aMsX1DHo1G4b",
  "key38": "3aJDaGkmDTdVzY5hwc19HV2TkBSsuPkhNeiHyD29yzF2J3ZcUc95Efw1A6USyHhV8wrwrcifUcadp6Ai4C9h44tN",
  "key39": "KK3hG344XBDf1voe9M1SS4Ryg4EHjmaS5org4ooqj5fPX3jtfi6WKCzPvy5dApMmnHbcPcNZ9c9dZpvS3X3hsMS",
  "key40": "4be6WTjxe8Ai2ghCXPxwjY4o6Y69PYY3sPR34qa382tHAtimqMQ4KCxBQG3zie3JeoQwhoEg462S9HFH8c4jfDUX",
  "key41": "uXPuRMpNd1zZKY6zYsGLKnN57Rqjjmt779GXpR9ra3pavyo2x8s4b9CxP4qdd4HcjBKSVtEyQKMjfoAx16kRPa4"
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
