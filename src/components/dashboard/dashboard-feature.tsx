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
    "288o6qJdQJzQi5PF1fchGAafSJJgWpUmGXbdyoMBUJHb9FkDQkV65kvbJVX73JFJagyrtb4LfXqeP9BnLciq1JQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXr4rJns5VHnVXjzF45dj71aVdGW2LYpaMznbXdFUCgrMCfL1JGSNsVvAgDjw7vUsn8dxrBrszzaG4Q2Q5Cmqov",
  "key1": "4D4PBnWuPq3fdXm5hGzQp47zfgfgp3LGj8DeTADGzMeoCuRwEvDajFmJYT2wXFh6SVUM6A8EHKeu8vCAp6vbHrxU",
  "key2": "1zqA22sVshWGLJTyK4PA6hErMTqvS1co9NQazNh8a9SWPa9J261KRKU6yL23oVv3NYU4mFGoiyuipx4kKKtLDqq",
  "key3": "sWMDEgn7ZP4HW5EvGVy7V8NhdXqsoyWsMQRCxQSyYx5CnTYAp8thAzEm64Fb2JqpWmwHRNSV7zraikeYDv1ZqDr",
  "key4": "xz5szzW8HPbyjWmd8gCAhcJpQETGzDmLjiQhqHKyeZ1E9vQc8sbuj8FVGCMrLMc23JwAPFg9xS7f17vRVwMykTK",
  "key5": "28j8qjjhi7AX4aFeVHd3Y1Ci2aa1mtqpxup1k8rRCcxKcbBXp8hEXmaU9DGjk6BazWCrLqQJpHuTsSoKJxJGTJyF",
  "key6": "4N7n16TShTcDWoXszCXtVnHPNJAhEB6amSRLTU5wHTjREKEUWTU3sLZGrtVTiYGobHFk6EUNMURTVA7aqRuj6ihu",
  "key7": "NbcsXBVSfHxiHT5c7xiV7CGeDn2Hh4AtrNwGUnPz2sWhK6shQJnPL9QGmd62Ud1UryKNeB12xSq4kzFyaDjgygM",
  "key8": "64a1FkNdAuN8ZoBxubTDNpoV8Cppyjp6TnSH2qXY1DJ5fuhMTmHnnbn6EnhNgi4tdjkyp279hDqJKvvpZRv1HK13",
  "key9": "rbYGCid6CrJix7VEJ4opgd4MLavqPS9Pp7WZ1aM52NktiwtBtoCGEoHxzM4Yfbe1dnK6J3zWjSfs6M7m5PaiKyh",
  "key10": "YouoDDu2UwjBmLwi8oxBpARjie9BCauHes1v6ta74QYceGU3S6AeP3rtrgrYodu7g4D6nGfyamg1o2htYyfREqR",
  "key11": "3Xc5n5yHqtUi9rNz2vo76R5ZCfFEojP8DHkEJ3MuoiVzof5zvMz2p5tLHPdjBLLCxciv8r5kxcckZjMDvnvhK8UH",
  "key12": "2uFHGTsiRfBPvn9BEzdBa3TSjDosWTWokALM221EUiNp7JcbYSpVJW2jRBAXsfTSGRJMgR9ATiegjwxq9YCU4AEQ",
  "key13": "5Y4aXzwejae8mQB3BUQC326PNuFUsfSvmXS35488HdZybXvW3rt7tUAH1QPNjB5W7Uypn64C7Zcgi6d8uFGnYKLj",
  "key14": "2aSHBnkkR7W8rzkPbjWqcK14XViHfKbfLJw9dnu2fqmV6Q9pqMV3rMsSxg2EjDx3HUUUXyDpgowvbamgaixgAcUT",
  "key15": "4pv42YceGfjxZGP9aCwvCpScSxroJXXQMcPTyQcCSizqA1FQwKDBvSKB4qGRQW8kvXdQdJutJDcr1un8u39VTpQr",
  "key16": "2NasQfUatH6K9tF1nmj6dps7qaRdsmTNZb65Zy6wWbHr3Rj2LTxVheu38e4GpPdvFqi29Aq2zLqhy1acC5XWAjAM",
  "key17": "3dGB4Aw5h2xqPBEqC72rkn75mbAr37terrgX9dFj7oNSXEuQmRpPFgNpuvREjkFHxHoFBFVFX4xkiMQzX5fdvJCR",
  "key18": "MaxmGmmojwHR1uuaDoRoTdKWCcyVHFQFWY3u475i5i1NYgT6fMMjXd3LT3mKMyUFjE5e99MpZNq9yHdZfrx3XcV",
  "key19": "4BeUHRo3aeiQ6gasjU6ZT1g8KpNytGtV5qWFNCpqJTFQ9EvJYH8ZtsT5Tz2Cfa7hhkkUAnYorBLqx2AEaNUbNwna",
  "key20": "3hjPKxXPVMBgjuz8xuDzbDEyNg6RHAecxN8TG1W1C5sBuzoeKG8xYxjq5Jrin6XUN4YcVhQviFm8vywR9xi4dz6X",
  "key21": "2FCiMSKK5WxUTXmm8z67USEonbLj6GmDpH92d8YnGZicjnJUud8J5sN7BT5w4aG4UCfRRNEg4NboJqFVLD4dgxvD",
  "key22": "5wdasNDZ1BzWenwM8h41yuuPSWRaQvBmzjTTswgguh4fQG1PVCDcNFh1MmeeUd3XiNDCRMFtKGpNNZtBYjvZXrxU",
  "key23": "3jsfkCSVkPm63zFFZxVZvFki738ngKmWAS7oGqjYt7jckCUmijvXhLnAENPgBHbGjxAWFqNjNbsa1Hra6ktFsBzk",
  "key24": "1i9PZfTpHrBdwTuHkf9AyVoBT7uTTUaGEH2cgSL52cR8BrZjmn2yBMktT6sSyJ7P5L4SBqs8vMwBaGzJUt1W98F",
  "key25": "49SSRuB3Q33DR8bKPupks1otuRWzDBAoF8pBW4b6QhfAr93Gqr8KtT6aPX4b139i71zJkJQWD5yAzocmDaVpDACV",
  "key26": "3oVZsqEoQFPD7s8UyqfgSYb6XX94ECdE99YPTRpEdNFJdTaLpdA1oVusU8ZRiZkp29Ao8shEGigtzz8rWD91RcLD",
  "key27": "37UAqfF5K9QUUgxzgtVFXhDKviJGPGCmGHykNtkns4GBCivBsPSqMu8vk1vMEZKxuh5DURqgPA1wx7GtpP5nR7DC",
  "key28": "ReM6Fa79wCzU9cjb14EGrSuzwQvxe7bts5siwtU8y5nfNfjmn1s5qJUUKGcQUfuPBHFrXFsA6cJ2g1FYs72p5CS",
  "key29": "4gTwjAg47T7uAzkzYg4VDZHHLYWm56QVm81xzjRWR4GB6eCBAWpQMS6SAPTrpVpQPdZfCvsKT7GqEJBrqgxzFjhP",
  "key30": "2GxwYfTeDpBYLmZmW1YsmVQrw2cnkuxD8nCcBPcvV8MHFy6Z7BVgNs8cxQ8BqRVnz6zYUPQzsD29sjcWZ3YUyfN5",
  "key31": "3dsPMF21j9weJV6oVeYVcNaHmKUWQKNCa5ihWjX5fgjGSQWCRPD4xcWun8PSKcsBwtNQXxLk55tmm93zEbyuX1KZ",
  "key32": "5jFQwsJz3HwQUYu91skaHGqk5bGH6VpAQWC8g61PHunZrfSBWGKqt6CHm94AYRyCkmDoJJimVJ6ZBGV8HXkoVJwS",
  "key33": "4ypK1UZ6rt6gchzDbgLQDdwyaU4CeihGviJD7up3S8jbnbFrGVS9pLhA7v4YNX3tYDM2g1eFobLMt3v2fvSBCvVd",
  "key34": "45Rmqg56iSENhDMepNXhfyFC1xidZFmuNkiZQxsd9GKffGHDtBFhFVa8dxobFPn7fTTAxSg2avVYiiKUV6ajTuiq",
  "key35": "5Rbv1kJ5EtksfbKy3v17Henz2wZqhKiDpZAyLqzUoi8PPmZBs5LTVhbhRj2aKQQdqqEu5q3eYjvtq1AkQqyxQyx4",
  "key36": "2XsJe6TkJtXgZppCrZbUTtKnwx5Twe8YeqwUqy6Ya6zYDBSjv7ve1kWvwgzcUG9juiZ4Yd3ergc7k89Q5gjqJTLT",
  "key37": "2abdV1X44hWVcms5EgRJrAA5Vxg9ThStk5UfGwTKUk7Jpaatq3SN2EFrcNySvyi8eC2UjJNLjjk2TiaioMaQM7pM",
  "key38": "498zNcTsjWLSECSB2fmMStBVfzUDWEnASue1UP2MgMyVNgMAvQhyTn635XLeTnNApht7H6G8VmDNWjC163rG5HRc",
  "key39": "2owPjFmph69NSVqGq51tta3oMHWKiQ9zmiznMNMg5coFm6hfMxMcKKcS6pYRkjtUHpHettL1HjZ8xZttNwDbFaJh"
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
