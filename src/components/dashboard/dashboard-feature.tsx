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
    "4fjMaMc8VX8a92zx9k8mqhhkDAdnt9W2aiMDA7xLEcjk9GHMeiScomFGU57EYufaBtuABE3ik5X5GT3CnmHvgMVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vFkk8Y7uCwyXT7YDPDr7bE3uN7AM2bEB5kLJKdy5jZUwpVnotFXxrg3T9PkLHr7T49akDK2VyGvg5yZcAKWZCLW",
  "key1": "4vv4w8HWB1cBYN2XxH5d9SEHLs5GSnbjb5zCo5Y1rHMU4ExG813DNdGcZCfZLaofnmjkgQVGzTjCEfMndzvGGmeh",
  "key2": "4fyvkNMQBxSRU6JybQSHA5xHjPQ7htik2phagU63M15RnE1UVZtjCy8Y38vNcBLBjMzahD1SwvfjubP5LbZdfQ5Y",
  "key3": "4yk6WKLFSaUEJAiVWdX8ZdYXPKHdCpbRqJ6NabtWhDFK1MgbfYxSV9CHt4b9vaTk75m1J4ffHEADykBHaXagtQHb",
  "key4": "3LYutjpBZVJPxQxLZecZcNTSz6yhtGZ66Hubo6C5H4uiJhRjED8aNFRVFZw5PZbeAj4MJCxRrDWvDvXMAfbFREeD",
  "key5": "2Gv5mGXqqkV7aKu4rkLPNv3QXtQNrYBy2UEDf9zP9Ucem7wpfiCXZhf7Geb7Aj2xKi9xabiUCiWPnFzVVWfDcmZB",
  "key6": "47QZQnZtJYvzKjKMyGyk1GAJUG9tMXcDmjycWwM3BapTraeDzHA1zwJtTnGsL1rUT3LC4kBsqF17sUay4vwDsxxE",
  "key7": "t33rKKsVZtHK4PFpqKymw8DMX572LdSEwphcGsJu9UjEfE7ij3p6AT8Lv5a1jDtq97GSPmgLpZovkEaoWhwx4gm",
  "key8": "5WWaK258bzLYhmuywG1nhfMWwU4aWYmdXEw9Vy7mo5HasvgSv1ThvcoES7vt7Vbax1ejbyrq1naiyYPxoUksf5Vd",
  "key9": "fN3ptvPebGu8pAWpBRon7ACjho6k5kKqBaAdfrCRAvQSemwKkBG4FN8dVH8xnPYu4142kdCNnsXoF4D19uTvhF7",
  "key10": "bRa2fGZ6oETq3JSfd2ZMi1mWPkAvygbhXpgBE4UQETnX7ikvyh6JRzEijAC4Yb9GLwtGUr9TrAdYQi41NEXzuih",
  "key11": "5QS8T8xTVKNhmSR8bWNmpiEajguoFFgdSFaG2bsk2FUXGFEKjRW5ykJxvGv12VtyLoG2NNNCE9dmgGWEeovyDnf9",
  "key12": "4ph3FgVrZWaSzVA8SA21u5QbN42q9sJNLBxTRDWkzyHF3NQCk7NqHiCjKx8bzHgTE4YUPw4aBH8my6cwasfRRREj",
  "key13": "5n6KFdNuH1AFwg7CYruD1QBJ56Pxu5iksiq6jErNDo7jiHnw2b8yx6PkyXHCfcdxuYerSY6wz6CQbRV8po3LEAk3",
  "key14": "uxPB34D2BTDzrtj1SB9dhLRzFqwusc3a4EPHGwffKGCHA5z5y5KFkxAHLdqUgNhhr5yyvKPQaUqhNom2Ubognuw",
  "key15": "3UKQvE4vLDDbEBGYf1GeFmDuvDNQa2f8h8AVJwpkto5GxanC8qVyXgcWQxnF66MnyCggkw57r1pjeCPMHcub7Euz",
  "key16": "V8vR3isLiHTtd2XssAZqJZdHgTjyGxn63GB3jJakzgAa6SN9rgyFvdp8aRx2Hb2d5fJqMkLTS12mW8FZ1T8RjFo",
  "key17": "3Epy7VDruPEqGG2NQndFWjTimG1XkFSrHuXPmVNt4pyMh6RAYZrqFZG1TevsSceUTb7Lb791BMRaD39Pg5yDQDSf",
  "key18": "P6ag5qhTjWFpRjJNTAKcaVLbZh4cWMnGN9uhoPMwQJjBWkwNuvJmCivyPc3gnsX6wrzezfJBVf1YJA2VnusEXd2",
  "key19": "39MNRP8x2EhxKtpCwvEL5USqCHRNt6xibXoV3C8gjTovkvMx38QHVHrE2gj79R7B4whL9VeeXfsNCzVumraWsRtb",
  "key20": "2fjtVBg3gKnH9eRSWHTFMNCLxYbjSJDcT3aqcNaNsS48zFfsFf8bTG5Z27PZgcB5DaXJ1B8FUpAxWygsVCDyMs7d",
  "key21": "2RcPEkdbaNdcQ5cxhePVcSSevtaTCyBEaZL5o4iMpW45aVULUK768CzWfrtYGfkZPtoTvQqqQs9n9au2LETwmVrr",
  "key22": "5Kx3rE5KPjSumAiiJ4T4oFVu1b7zWrj6KmDT8tvgWKMwvKTqbfihouoHVxKm1oNKFMDMGtLHvbxwTfXEqv7oycjZ",
  "key23": "2aVsMAXvwvvhpZJtw4d8UDgBBSVzhELjhoB5MtLXdWSYhGeMDvLtHZ9AvPDhdE4afzebQ1mYQ5AHLGSgKsDHn8Wz",
  "key24": "4yiCGm7q29YJbS249B3WmXV4bH23YdGfXR7hgePryAWq2JVKLUmhBtEghPXDKF3CGSaSsSzNEMMQcsivow3C6nUg",
  "key25": "3YgMyKqHE2UoavmdpCmETBME68XYqT7wSTsCQxVDGKdZrbhUeePAzMxSV8kAX7NXtt1cuXaU3CRhmtSU3QkhYAR9"
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
