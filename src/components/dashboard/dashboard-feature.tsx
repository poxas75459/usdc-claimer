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
    "kKpkFuvAhmyK6tpgVZKPesD1RVrGsSd8dWCvfj68uGvGRUpxAr5ccMq2W5AYGVDSiV19ZnzpGBjN3CuzYZjFh1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GkQ2UknyswboBMmoFCHWHKthCXy5bJ2Yd4TKseZQRPr2JvPr81xtGPpZ8qDYYCfjnU6cjZa8SXHoHcxtRmEAwB",
  "key1": "hWXRXJgEYK95Me9i3qwemXzsP6XvZ3ULCJkqW5jWMaKgKLCBTKcdYkWi7UMMvaDmZwvFWJppQz2PBxxCWaJTXER",
  "key2": "3tCsCKEGQRacT56Hb3jzQXUFEsHR49boYLPV6KxtdLFWt9bA35g2Pk2bbWdq9GHs9K5YvZcMRaWRk9JZPJ2Z6PYE",
  "key3": "3BnWtkTbd5rjAtEn5Yw7LvKEzKW9ji3fKAtAzX2XkKToMkh5fBtHwxne8K7BnFW3SurWcCn4XXGfzwLdSrSeAN1K",
  "key4": "YhgHQ3cHaGxDdq1WCt5biGYLDdb4mHTsWTyoLNTBcCBmxh2BXbMYYDeLmyY1tWysgFymLAt2oki7xYaocHmk2GE",
  "key5": "358tBbJoFr1t7bvBQ7MVPCZeNNjMNjuDnxqMpg3S123D17J6h1JzGRNyGQH6qpmSXRdN1F97ed3SJ8kg3E7pJhyp",
  "key6": "25K1QC21TEnBGE6PNdvfjrmryjUYFqBepTcJRYow4q3GzuGN4vrmTWB5LJe89zKtYfiCs8KysnqmNiDWDk9c9dyq",
  "key7": "5H2A5X8qJVHZyZwRwRnS7z35gY2NKoeEgiyaWaJhURD3Sg1ELiDHRC6PYJWnVL6QFp3takBsEXYmxiHvv5HC7Tc7",
  "key8": "2xiGUmfFxBKUJr3zi1KtNs8zNddDSzJBXCcr1QDxyRQhB37pkLwobbU5YqPV559qE44yCY2jVEGSwMeEP1gWKyc6",
  "key9": "2hw2VFi6Ra7GbnyPdYhiDFeYFkAFi712rKJbQVrfCeEay1Bgxbpk4jnEoVVZjHAcbCE6BGVGXqUBau6H8CLDKDZC",
  "key10": "2Uxu4drgv6VNbzCWbwCjE2f4uGXDrBf51qfiArucGkTbqGxk92kG5uBqVtWgrq2UbprjEHiTmCgKjzC9nyutwR3G",
  "key11": "3cKqWQxvVN9PVkZHhXwjwuCvFdPo3XjaM9vwXRqvrgJraLn6ng4RLGrN2kAthBKhQQ4U7AcfmTDAKKvhjPrZWnm3",
  "key12": "3ii9Q8NeuuQfGDYj64RHDEKiCjV1B6BX1xjJaSVJbhoBrdAobmVKeHMJbVGRXygNfN7UUJnoRFDgXmoKkNpx8apU",
  "key13": "54kAqbY6YbJtuRRrvFsPfzZABAQegPgfoKd1taqEhyZUfMTRUrEkRfL8jJzyD52WDBGtbiqJSBM9NnW5N9SWWmVL",
  "key14": "4DkH3BRKqrNar8ag7MwTacfS7f1eTL54QWrBmmHp3uDepuTfAnJXTbFMGVXhhunxi4XqbvygdL8EM6EXSrGty1cv",
  "key15": "2EGWCCEFAmw7zEm87k2siimv4kJe4eFb49qoLHmCA5jMbqgqFH4aRGEC3XqqWMWFPXjzSQVBZQg5VxKMMz539pPe",
  "key16": "3iNwby1uStpYWKVwuo4WUAKdmtikMcE9cCFJ1XM92fHVLWXRGykKM5yu1hNZmtuJV13NrH2vkVfed5CaiKxbiN8Z",
  "key17": "2uVx3H4CSVqN3Rmnq4vG9MTJpDFp214hBNZ5dTAp8VXp4VnEBKMSSE2RK16EC9yYKXJnXzKkA8s7b2RbAFJ3Ro4W",
  "key18": "2bbD7C76nN7aqhr6b3mvE34wEegKrFFD3X6afQ2zmnx7q6TPZ3aWHnwAh2YpUTFA3eavq7kvWBHkk54pzeFaaJmg",
  "key19": "4Wnc6Kbw4JguKfBinRZc54uKMQH2sJoxXwG67bpFRveGArAsujnAq1EZMLA41RmioWNXaxcAJ3FFNvJbrgaUu1V1",
  "key20": "46A3LFfj4oWgKfcD7PVPjgPdjDwzQRyiM8kKCapsE4ggdFmhuY2B7ykAgt1jCwEVRodT2C6wnJRfkmFEas55puEr",
  "key21": "5tjuKkdrTSGYtHZTQMXJeykgiFDYJVnCmDTFax4AzXzKVHte4yiiGd475fHchX3NLvX7KxrahystDSu3L1kST8US",
  "key22": "4B3SNMwFFEWMkhSCmisMddMkSq5RBRjFF3sGFKk72VrWoAFtgTZusZ5AodapXcsmD4YQM3zKRwc2G8sCZisJ5E3i",
  "key23": "qM3RBtGrhVxEZqHjPSNSJxbp3js6gp16FkegN3K3aUmKTGaUwG5YqnvRV8wZhuQy29hyoTbjtuCsmxCX33y5FV4",
  "key24": "5c11VAacT943XQE8dE8NPEfkFUJ8bH6M62wH1QgutUsM4A8d9vkiEefTTGXCrJ8YwubhV8ADsEc4GMJJETxcRsFq",
  "key25": "cAeM53THNMP2GcqjefGPsM5fvsoTEDFk6XG9BS66BPWmsECynAaFepDGcWqjJ9AvdDku39j21ErfeV7mXe6qcM2",
  "key26": "4nLkg6nhWtrVqWHtgdSKqTD84NDMeMwvnQ5m96HX1HEyeUAbvhTkNvGufbmuWA8dSkBGRqWrSEfrd17NYY867uFU",
  "key27": "XyKYTBVHjYTh76eUp4JXRG9hon9LiweeKmGs49b5KaYy7bFGrL59hU6nAUBmmrWnA8RaPdQL9pecmJf5ZLJ7EsR",
  "key28": "5aWqtshp4W3QPtkcuo6yDfHdMtNGuFbXKjJRE2mwDVyggQYWygp412cA2XZdDVNZkhCayPhEYsUMdGUS5pGpt4d9",
  "key29": "3pDjKP9WFBBAZ8EG4FrQn32qaVKjXNsJ6TeXhR9tnG2pyrbhPy2ecCPjjUpCioNzYNoaahqFpbZxTAgcyGf7Jhnq",
  "key30": "aZeDXMPW6uxKzzGtgYZTnTy1FDq4QtPaVcpBKpZ9B137xX7n16QUvXATmjvb2sQcTUsQawsxVapWLd9uUa2B2o6",
  "key31": "51XhWfyTDq6RiZP692us5pTsiUqigXeLvNDNDXksWTEQFqiYQd1pE4NgJnQgfUf9cUrLXZsVScted1ezieE1n2fp",
  "key32": "2o7nwRsFvLvhskspn7j5WChaQHeHU58aXAUG5sH4UD3xxoyhfYvHiQWzh9iMfptwK1gZbrhmkMsvpXUrzhMSpiM1",
  "key33": "4mLs58w2NxsU6F1MdDY53rcWgqY8JtJ7kjLEHHycC5SwTouvfMUFgN2HwwxxUBrrPwHijvYRwsZkLjKh9uSA2ass",
  "key34": "2eHzFjG3ApmYb7hRxPTiVAxF6QaK4sPg4nV5wNZEy683FMRdWsY9CMJDMykNtE4CqfcTmjfJchEECggd9oWqwr2D",
  "key35": "4F76sDBeiRPm2XmsFXKGAWeQjuG9RNJ4M1x6pUio6qZGxQ3w1dpYop13qMkP9YuKzcgBeSckn5edv5x934zvnqg9",
  "key36": "3Phg3Pyj4EFvj19fi2jycraw28VVqYb8uXkMfLDWz3BcTArPsysKjaE8zQV59JqRTrmrSJYqf8NZAtDehuEBnjou",
  "key37": "sPG68h9Um9xumnDWDdK8tqZQ2UAZeH717hDMcDAv7ERtjNC6Xr96ya3HUFwxSBXBXveK6YXyknMxCvU5dLQgYj2",
  "key38": "mU9Ng5GVtqZqiPPxZP8eMbxENQjTv13sfnDCYkxfZbejMheSeEe245MEKyDfHLb3ee9NtS4cWBYucu9AxwFh5GZ",
  "key39": "5H3yrB4KWnCbgk14z1jhnVcCaQen6SWJopcKfwke6JU4G26oNyax4QxueK9jsdWgAS8VY3uTXAwnzxa6NSxmJN8k",
  "key40": "2q5WiHcJJyH6LG96d7QLVKd2SLTRH2aX8kHL23mRgqeEBgSYfsy6xQ6DEsQrACCe4HjVLNdcZwmEXMua5j9Kprq4",
  "key41": "2TjWProb6FBhuBkg2CjNMupbQFotewtYP9ej6kLSuotXaUvR2tXrfCRy96aHapbH812Hqx6iaYx3vScuadQM79ex",
  "key42": "53QrwjzEVxErc9pKpz1MPnr2RxcLLf1Hty46DYTJibM6xAJ4E7Ct3ys5Jmi71d9TeTb6RgZKbYi4tSuBBr1Ge5P1"
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
