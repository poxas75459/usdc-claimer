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
    "4LP4RTSK1F2BrVmVcoywjxG1GPiYsD1gHqGaE5ZcZoMKVov77Kpt789uP7czgHSuJfEUdywEMHcC36FHTBM3GM6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWbF7uXQsrFe1z8NAMtFSmxVSMiJ2zXftPiZPBRYekGafWJY8n7DpGtB8hFBLxfV2QxLA6rgDedGxo283AVHznm",
  "key1": "3PSLtbsaWMtJzVQvmzPsqZ8LGGy5UYJVorQMaprgUL8KFWFqpj6zpZFt9pm8EGFJA9w1rwbWgJ913QorxJRiMstg",
  "key2": "uB5VMyjShdZcUYFgyFbRjLxU3bQT5vky2YE5wgKiqgU1qPyfGs1K5SVY5RsnR1RyHYXEJ9DbHvH631LyRawQKia",
  "key3": "4JRrhHpZ3UAyyu82uf96CaDQ4GtxJXsVF6yXx8zybdCtbGFpk2cW5C2axJ35UHE1EVnJgNSoguRMvXnxKn3gKUuW",
  "key4": "2zUm3d5vZYMXd4rXcFT6uXRSx1phzMEv77vEfG2pGYowcVMqAEaiMevKsNaWyX8cNQtLCxxnc899qmbBxkrfjp7V",
  "key5": "5gkjCL4y1ceSzuPNmKqMvLDBcnDagJtF63a7CJW9Z6dbMXtz8W83StuAsaFa6qQq41LThFfqTF17T1fuRgzZYAsg",
  "key6": "5Wmum21kvZxRxcwaQKuAyNBnFYjzXxd8koZjxMjXfbKdoibkCa95wnYW7oKKQXxS46dSidds9N38jqRDJMxs6ji9",
  "key7": "a2YPvSgbYc16eGAkYPNacFJmYUMxJw8nkWbo6KpujbZRKoAyDmvfLuTziU83VYiD6vMpAFMXJMQ5ZiK9NCU6A97",
  "key8": "4jRBeBSTojcNESyZqVW61VJCYyrJJqp6kCGo31AfJT5g9sNQGd3CBV65n4MMDd78yPpBiFV8sggzgVH9kmnHZBZz",
  "key9": "5o4AR6iY2QHJ8NHUz9SHvHt2sG9QbfYDBBTqfohrUks3HQXwPm2pQMxiMYtNzpqiVtjZ3T2PUGVdp77PxaBCuYMH",
  "key10": "4RRMBgpRQSp3vDL8qfN9f47Sa3NqP9docZGstewtGFXQknCxRu22KSdNdtVaJfsnoi6yzNPL6xVXuEkWJMoCRqoA",
  "key11": "2Ai9gPnVMSrAZJ7YJJs8EQP3bKdRMVP3XPe7A18sYd9mM6CdJryqJzKSUP1pVqYgoWNDuwdaYgVseqkMuucqP9uX",
  "key12": "4qqPeBBghsVCXXjF8kZfsnaZXkxKhTBiNSqrzpNxJwpbNfEtTuFsSQYKWa61fZDybpaxyJkjaCXwR1d1cpemkLhy",
  "key13": "3Pk4QQxpazMjKa7P3V4MpFLzHZgcvAuSaFDuBWb9iMewaUVmnNb9EFCmsFMnNdjeijfBeuapik1CAu9YzyaH5yJV",
  "key14": "fM2ME9VsGiQ8y7Rw7GwhFfLzxxwn5ct3gXYns13phi9rDMKZna8Y2z1ANrNDSH3MJBhCFrsVuoXNkn8QhHFvGrR",
  "key15": "5ae1cy32gSXzjsT8B3Yxy6rHw2yTi5vWQn3vag29RBziFqtwLbui9a89RNomX27gm5KRoTuXEBGprA2vo22czyLo",
  "key16": "44V4mM4ZUW5htCVceiLWnmKR6MBkEEDEZttxthAi96RZPr3B2iQVQdQgrcJRkGZ5797tr1VdJQg6k4o6qXfHFCWh",
  "key17": "5z5ms98ibq81GSBfh1m1gCi7Pdo3K11Sg3oSRaWuzvMwLUtKeAddkGRmyXWKkK4DyPkC2JEpg6ZsRiSFETnkPSpu",
  "key18": "468AdKqi1CzgzHHaxAWv2vBCoBC3Fj61BgH93uQtFkivJ6Y6v7iruToPUPookchhgefzjJnoz3tatwZqEJuYmnBK",
  "key19": "31B1qCmX4fNUqUvMUHBJZW9uggXCsHV2Qrt7nRWd7f65Sjch7ebN5aqWorCPqhA3PP1hhGt119ZR8C9tTWYuoeRc",
  "key20": "5b65j3VH9EyTDKnySw5ve8Yq4Vr7Gjq3rVpjkTU7erY6b6Li9mmeNPboNu4HE3rZNmxoYDcL716A8UePFWr51wKZ",
  "key21": "3G7vMj6pNodJmtApTeeoV1qafV1JGuRHqeSRzhKAij2BUNoAwvYe5AXzhpxsEY9XTKfatW2fkr1191eEmtkyJg41",
  "key22": "5pSCNS6rRXabQPsksHcF9HUe3u4vfdscsZn4mZuPyvbu9Znz1hbiSAPZk3PQRuJj8SQFLXB6DFYyMFcE5tPDHjZ",
  "key23": "SYcaZbPbHEfKF9JqhwfNc8GmpvpbfdZ7gBpwGA9UarhTQpSFs9MdD9stTjEGF3p3datDpgXF3iYTHzd1nz5vnb1",
  "key24": "52ipwNsV5eBLTza355GN8ZKSw87XVsAp1JgbFHGJwuDRfqxSVXpvpoZAJCtb2Mu5C486D5PQ14bhz6XY2eEH4s1w",
  "key25": "3Bj4yyYH35m6aCo4LicB3hZ7sdnM3BAXZ7MPuZE3CbLR21LervLP2wsZVVnev3eHVYKe4yoiij744BuJ5o8Fxxdq",
  "key26": "2D2Zi3WnmRHSAmzg6jozc9xaV67Gpi2c3FJVjKE68m7SwxEZdYNQGttXmEsGox9WfVpwV6AmCETMmqGoc6E6Mn9E",
  "key27": "4FNTRKWY7BoExEbKB7hQhj27MpTxNCMDinkogbYVvHkMRArBemiW8nVsRzNeuXUnwRmrG5KyXdk6MAsqGy2VvtBB",
  "key28": "2171QzWgUd7BLVpp16BqXSpQuVijJDdMEL1UCDV2gA92xgwh8J92jCgNSsGUW48rgAL8JgRRbcWVjrYkkrqPqR6h",
  "key29": "22DeW1KWHNFpVn2GUXBQyvDBHuzCq9DSFVEZVJHsA7ynvSMDwkGyK7H6DJu74A3VkimdA3QVbFohzbXSzMmRixoc",
  "key30": "2fb7jNuFvWbYPguWTwN6gApiqu1n2JUH8P7vpL7FLq77UF7Q9S5P84bT9o95EJSg3yfLWsijwcgEf8keqTkUubXu",
  "key31": "4mCgzbK5yx9gGFLGex31tSychLyFEGeNsowowqnTDy18PkbbamytK8tQpdm327zdUcNcypFyn6E9zH62P4kgEn4c",
  "key32": "4dnsvEafM6KymaFpz1AC7Uj3uWGvmoK6B7DEqiQBsz1jk8Bq45rdgAuXU9X7apTXpTnbtJY3uGtnjmbzL2nDj8EF",
  "key33": "4jKx4GCQmYmVB14tQMqDv3Y4rJ6ADf72EgQHhByxDABP34RSJpTfeaUNSsV8gF6kTE4wxQhtcPKytg37foeLbtLB",
  "key34": "3a7xT1kdDh9K567DdCjyFEaR77Vrh8dbLXtnEtdmkTxjMpvBNqokaSafdT5B7kUHamAiFKRmFJSpAx3Nd4foLccw",
  "key35": "LZt626hEukxg5WWZKQc9BjCYi1eN4SPPQXK44ev8BgBinG88JvVzTA8GktsBRLcCNixHcwCLn9JHqYUyVuRpuQc",
  "key36": "xeDns6R6EKqYsDBbeEipqPPyHy2ot6HHLUM72WkLuqQ8qNFKMajMiTRgyDQ57wj82WReeEKnmNLcyCsTuBQzTZh",
  "key37": "4FDvGHKKBcAiXCMPn3CnYxpLxG94KKSsTH9EmjQJYGY4LiDUzoo7ihgkrym37tRfsPPAZ38HPYtD29ZygDEEg5VQ",
  "key38": "2JVQvuoaLBFM3UXvwwQk8HVNFohjBPpmSQdENs3YywRYsrvjJAPjwqWoKhwNoJ2pn8dCYWZrVQewvWmYs3cPqPmx",
  "key39": "5E2P3rz3x2iyh2pmLXvo7D98EyBWHPZWvUVqDzC9mJfqpXXvSCNNfXLP7TauGdex2DtpnGPWXJwLBgfro9X8vsqs",
  "key40": "3yLxttK3GJBLCJ2THKU1RRSw246S1HhVTE51Qv3BRN5JdzKyY69ev89VKaXGXLc2wFyjaZNL2oWHA3isGBkn8Bxc",
  "key41": "3qAw261x6j36BycheJcLzKQ2sU95NDnVdzCZi4P6dwxT3x3gkEGZwKFkWANHMwiUD2YFAqedRoYTWTBa9yu9o8j9",
  "key42": "53BURRgN3YXWN13xGkFhXmbFcq3muhHuMN9uy9STgj7V8Z3RWtrW91TwFxiqhKKe5VLp8EtufpZvDseqK6imfmm6"
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
