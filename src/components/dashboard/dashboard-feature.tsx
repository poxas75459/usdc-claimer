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
    "3bWsVqDfjPMM1PBZQR7UmpjHhNRQzwpvP3r8JKV2z7BTfNQLyPcVuUnohNCVaNYfAzSxKnetTshC5KiLXfLTd5dH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJZAq8LWf3R5khLcdm1VgDQXyRmJNRDTQ9sY9ZhFsgarWjRzLktQiksGiLdsoPhLUveApmmNb35zV5BtnuJmv4b",
  "key1": "4Vy9LL8WXFCmXEHNK1viMB5e7UkyiVGddfw55yhEtWqPQAD6gC95fnj2zym6eJjFeajvkE9g2PCHMsFNFXhgTAzN",
  "key2": "44Ny7WSNiddSuf5VWhwULXpAKiRRwT4cNdwEwxFf92YvNEP4d4v6hrPVvVtqv9b3cWzpnShNqTru6AqheZvjxur8",
  "key3": "nkmqtPuZGRaZj6b3dCcoyTudt31ASYPmEFd9gHxV1Ed7vvWHP3YgWV7cyEdPCWNt8cQqgoxWBXj8P9eKJYRLrsP",
  "key4": "2n3P5jdH4NS3R1FWZ9LQ3mfEBE9ximQqrHFZGYS4gnVDZk3N2qfSxPyJ76RBsePC5Q2kga5ivZa16cA4t8Ffyyrx",
  "key5": "2VfNNEBfdGy7pgij1fS4Kia7m8WpvU2muha6gSrDHt1ZBYmWpfouJwgcENCqUJ6mS3UNUVqv1RTHxEuafMeZtV6Z",
  "key6": "4VnR2RNBPe3aHvUtPwe2XyXRFFv9do5D4DZoN5xE4kgakWE7YU5xXZXiBrkWmzBhZ6Ew2NhHjYigWo4F6nhvhwAM",
  "key7": "2zoUooMFJECMjVBidxNMrY4pYuTcoGoPS6kXQ2ESgDXHJ84zPz1qUp5jmEct8K2VeVUKe2UqV1m2c6q1SnwRYF8b",
  "key8": "3S5Q5E5KKuU4RM8Tm2cgiCgLVJun4vGFq8YVGTcv6DFkbo75aW5LWKEc4kzYo3NE6Bif2sxtp5aeDz4dZAJXP3Df",
  "key9": "4vs7R1xPuFNUmuudKHCTdTBgsdpdqHAp2kPDTfAuAMCL4K97GyJNwCSieknKPYXanHamP54fsA5n5fN7d63q26Pe",
  "key10": "otuEmhmbEiKkuDHPTuM5hAcJ5SE4b1nwmKwMvuwMyaTiYhJMiCbvjbLzmoBv4M37szfG1NTGmbZAPDApd5AAZaH",
  "key11": "5jPP5toQT9gSdFLYoT47vwzpd3BEj2FHyKP54HxHPfwTst6KVzVDrKu49S6sLSh5cjCSu7tDjnTisSXNJCsScAYm",
  "key12": "ar2TsHsAZ3xLLMxJqeUKk84hqcNfDBsEDEwrhc2HNjrZmXMkBQ2161o4YPPfz84J8pTWu6pchri3WxJWEjxK64U",
  "key13": "5xom2VwSwVA5YyE2yiAe4BYDZUKviGXgrpzQJ99pQdUvrMWwjRUJu8goLnabuGXL272u5FMA1fcR45XTtboGnbu2",
  "key14": "4AMqqK1YY64HVxtwQygqfxctU99quG5LKhwozNjLH9FN1LT5eLmVQrVvJ96n9LimNJb6EaQYkN9eUKRvLKMYWyuQ",
  "key15": "2rY5Y2ijnRjbAF5et8DN9HJVBuHqAau3pgTfRMfN9SFgFPWDNJm8WanV6KUb3PkCJgb8TDaXDenkjQzKPHWGEex8",
  "key16": "35QeuuuL98YTfBKMWJiUZov3rViwP33Ctz8ALrWqqRFYHFN9Y4VWHjcc58Sp6xk4Txbri95LaK6Bn3rwDjHMQDKW",
  "key17": "5v4ZHq1AcQbJWPuuz1EkvjnZRiPtxrGqDW4P2dk141fNGYnXdmkpEE3qqW5qHyQQn2eTDy5rfgg8T9ojYW9SZYbJ",
  "key18": "23nqyvUQgEAx6aoQTbKggbLsmK3swEHg83Npr8AYrjPBk7HKTn3m5L5oSJW9AKcfewMYLzdrC6k34KA9BDsmQuW4",
  "key19": "4gSPiFResNZW8N5SvR4Hh94CiAHVKspaS2YJb68kVgPnZuW2CxAW9vkBjX2j1syFhf4G3KKKXJi11J1bSsgxSmVH",
  "key20": "5ismSavzu3Ksrx1iF7oUQCEsX6UJFcbvM84zb64388cdSMgz8XzYbRQwgAaTsPMfqA9jvD4LXzRNw2Tcp2uY4RM8",
  "key21": "3eUFDWiaUbVf5q9NY4Nx3aNUihv8aroJCVMwdaizrXCrLCwNGWYizmzaKmjKnnMmfpXUeaKWgQg9k54eWBsS5TEu",
  "key22": "2AoHMQ8FVsAaSKnS6LA2NqaDh7aeZXxZ9CSWHxs2QmGWhnqVR74PSnNkY3R12Nzx1s2wfRTpcrkMKWNEP1XGpYDy",
  "key23": "4JNCbMhmFFdvZLtkWFcEK5jmZJDx4nAebdvUst1GMwWujELg3Ez3BmkR6X52kwpZv4iSE1YAKTgWJ6T5qPjjYzAe",
  "key24": "de6iwu8ahRc9ZkGfHbqnSa6422yeXAFmyxD7VvXqSyTnkLfCov1BDFrmUP1vW4QueejCPJw8YvrL2UVmNY9Edtw",
  "key25": "3kGqv2S4cmbkN2Siezs9WN6r7BbjYehWVV7D55y3mA9KK5uuqmNvzxjfmhw5dku3pmo7QCkzPyZtYg184Lqsxr4i",
  "key26": "5xbPQ48uUDUqEL9wePu4xoaSWGpbEd4aHLZJgbnDPe6vEKqAntG6e1f7dX53WBYQgSAex8XV7kckb56pihw17gwN",
  "key27": "4evaBsgdDbcN8swPKqcm6zMckkCmhvV2Rjij8GL3PSornyZjN2gnA92Cu3xe4mcgGpFvqQKv8nnnMDH9PC5GSheE",
  "key28": "2E9B8XkNu65DRnUJWB4ZGvMw9546kXU8q6zkgM3R6BBJQCCFF27PAUUjncp7KYziX4kaUgUVaNhg64ibfpgRT4uw",
  "key29": "3Bh83dP54xEBeB4p1KQDzuPrEvXvW3wSyHrLkeAjynuoWuyUGyvae7DzhxHxTbaqwQYb5FyMTb49KnP2VmByJPdA",
  "key30": "3PABFr7RJ2c2JeDqaZbofwQo4VkgRpuKhGTHruHr9Qbz1F8XGM5EjRoahuqF8EmJpUt9Pn321EV2aLKsiBtsjnuA",
  "key31": "56hUtsVEWscPtwG3J9up4wR22RURfp4hC38ZEoHRdSF4kkQ4dzQrFRUbjV4eVZFWkPJnpWM5DURKyBTeUhzgfr7U",
  "key32": "99P15oFZy78LiAvrq2SR8s24eiafH9NGesnMRnG76gDKxuEwp93aiXLPdn4C1wHWtdeQRLEjmdLsDKLAhgzV9nL",
  "key33": "4jsyMBVtMrfZq5eRGzatWcHpPFWg2oUvbs6MxzABgLD6Qi4tvLa247f8kLpYG8d9GruXgmMybj4FatwFYh1BxgQi",
  "key34": "4hwLwNYZRS13kfUrgSyPFMw83ybs5s6EFTM494Q1nZp5CGj8mbvkAevoRe74G2J5FFbDLP9EyPY1pCzkUCEF1XgQ",
  "key35": "carMD8NXRJdLXBjA7gDZp5CC6rFs9mA8ScRx2MZHviNHHTLAd2ZAuJHC14erXxpJzFNksPAyoEpZpqhvDZvZ9Ck",
  "key36": "36x7wZiQNQQTtdrnkGw8TuHowm6uaGSrGwFyn2MEmLZFbwsFim4MRxePWwJHai9wzjyVwYUevYT2eGHXF5yd2C7F",
  "key37": "5oR1zczq6BXtocpm8AmQaPaYUPmN3uFjNDLLSwE4cA3Ui1iPbokjpoRs4fbfdMpbGpt9hD3iWj7uVtEAGc6fRSzW",
  "key38": "45sQ9fea45JmrDgL8GVQF9f1PdDq8r532A9BSCVzcZA6Tv2bQUkMy8Ree3pwnyJYFYUAcD94PRtKg9UMxzuoXCWe",
  "key39": "2jNGLKbR1gF2oSpaiKfmJzQdyDn4RVnnrSTFndS7CbTXLU9keH9f6qG4PmNtzVVZSLKfCjctmjYJd9wEfyMKeWBU"
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
