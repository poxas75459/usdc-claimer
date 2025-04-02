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
    "3uN1TJ5JaHVXKub5KeP9DoLxt4i4SPw5grMsmYLwNBQULdCyuE3PyCFfny8Ygu58eorVeaYwTFVf6de3W3ZXFufZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "525eqKkaEXFdDwNndWmTUeQZDPHBHG7gUgH2WqA5f5RdGQAFZKvtWAyH4U7Wg8gVCVp6GMcGoMeRQQhyN6vbKcXW",
  "key1": "2nFQe9gBWgQRpHXt7x9GVgHc6C6UWqJ4dLKaQzGaPQASh4WD6CFfrtQxpFTV1RuxhKdGjTnShKtxD85jFryxTGXV",
  "key2": "47Srt7WxGwA1WgpypPrPnHaKpgSA3fxM8ptpNUjv25W8R7JvsTRwYBRwH6H4RcqfEB3cJKbsUSUoHvqxUhpbGMej",
  "key3": "3WoR96LyJ5EDsjLtFEyiV3DN5F6YD6zucinadwKDtCwenGyMaBSP7Pg4jVSWFVSEthBFbSDzzTyt2x4dtpf2iwRa",
  "key4": "321EYK1j4CrnMfKX3eSAg1DVj6UERB23eZMBJ8BNwZsbrgRs816sVpEKYjwJBhLEa6cY9n3T8joJdRJYjgGUy5Pe",
  "key5": "2tbuDaQwgxdY8m5SewzdRyXoxQhzYQw7RRpTKQrsYcKxBKoU2SAR5TPqhqkjXv1qYtHsQG4mmauhmj9MW1UU9VND",
  "key6": "5VZBo6zAhVHhGJvAR96LBaAthUNZjJQYvwHaZHSZcpiC7Sb8N7yy1DSwHu1KoCtZ2AxJTJwDSAXrhfdCvYwuJRn2",
  "key7": "3R9xPVg6tVS9GyrAw7MKcwWbbcXhJm5CJZz2EQfCtEpVnTVhxdc7qwp15oxUnKcZQx1pmY2CqnA3PKr5Ku9xwg1y",
  "key8": "h2iiNmz3ek7PLDyrsEiJLG3gCf7X8LbcrHpXGrkXAvoX1rfp5a79LJKJbHz723jeoNAfb9N21UjCzAc52wshmHC",
  "key9": "QBzXmW5P8LNUh91SfbJj3bT49kcRN5zupg3bQefsEBr1PujvFa4DdgfvCBzmD2MiTcne8sc8EJaWJAoyLn3wjgo",
  "key10": "3EyU3dUobg29xhC4J5ZH4DVtUbxkrhjBxnrWWAve6sqXfh1R6ZeMYSUR1Xeq4JoXWEGY6uHkF8RXxQvxN9ENFAMc",
  "key11": "2LDMCw2bnqL8kBKhyVMNpQgkTTyGXhJdYjZVDd51X3KhZtBtucNQGvcLvZmqz25hXa28qYR61LG5iiwpHNoDYQ3e",
  "key12": "4cGwL2FA6LWtmiw7cusBhEjy2MZScA9ePnVVm6F9HomSqgabDieLu2vrzg8U3bAQXckmFw1dPKttmLDA3PfUi19",
  "key13": "4v6u5SxvbazeCNTZy2unQknfsJkvRygZB5GKxA7yFgc8Kus3tmGFkRaL6FVGd44moSdo5sxJckeBMzixoGZqXAR",
  "key14": "5GXnG8vVfoBgGt87a3netcnz7b7pp18f1ZDnuPkmusrecZcg8SdFRnCjB6UUp8DUkoLKFDzdvZbdTmQeB6vAveh3",
  "key15": "Lkq6jTwVvJv7ivNBCjzKHeCEy6TnQN3EcQP8a87YGbPn7rFCRmKQPNsVJfAZbXGVqtPmmw3mx8tzmwsnYwzx4pC",
  "key16": "3hVe3HQoNjxAP4y1xuiB3seJBGxnjr5BVXaRVJ1YPg9wB32wRGLUkU9ctVrnaFvyMHUgojxHpLQciCMQHaENKaAb",
  "key17": "5mqsyHbyPCsh93LgJvP4uWf6k4FZtui2QpxSQFad6FwbucW1Rgi7DW3F2KJcGfPsVLvseGVzUsRnhLV1sp4hrvAj",
  "key18": "sX6b7cJ3tbvQvfpMn6yGVqLefQ5zd8Q4NsZ91aRzxv564rgTt1SQKF5VbWsbK5RLPYTThe2LPtSfwDH3TNhsMr3",
  "key19": "3Bsr9PCpPCKosNUzpdv1XQfhwZaja7xeiNb5UdkYq8mB9EnZpRrSmFXiS2yWj7u4Xt393Y2igYpSth82UCo92L3z",
  "key20": "XWcsENH2Q1Y1GqDNREYhNV1Ccn4gu3XX5Kb21TVGJ7PgCt8A72Hy9H9H5Q6tgBWiwKSrp1dJuRzrNfHRTYAefBJ",
  "key21": "5icaqKU6JJfHXYFbitmqDEn2kH2az7CENH3oifdjof2umy6o4REUcbKdCExGzTiWDiPmG2y2ELPDp8ZvD65uUzsr",
  "key22": "2HByNMQLQBpRhqkLF3R4qED2A2cqNEg1B2ctzPZNo1ksHVuoQisF6rNk3e2rttStT1KYj2MJAKu8yn7G5i9as89d",
  "key23": "4fwK1AEs2mG5PSg98TQSsHFckLMRA7mV9SWRuLDsJprjFTxv5pU7KNA3GtZxYyHoq5P4PEBj6oPcurFHPh3xFCbR",
  "key24": "3Yz1U4igCgynnHyKYLXis4NWPAi85rH5w3R8Tgxona7Uv1JYhDHii9FAkMaJzdGzmJ7nAP4pqhVVj3NBZCS9RJLb",
  "key25": "3iLCnQ5xMxdrFNMgXcMXhpUP3SJZS93uQRBWu83HgoY9DKLJt1vXzpCc2SnC3AbkFzEWsuDEcR4FPsAKxFrSU255"
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
