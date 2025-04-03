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
    "3iMZ5Z2krrCoJ8hXz3AvnACqD6ZeN9WtY1jaaBEF5R3TcvRit8J1HNqFcTJdHsEGxjXEJ66oweb1JGF3z8CXPkrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KLYe9MHy3nNd63zJHZxrvxzyku13a224XmDgGNLQ3asDjKEYyKvxUXLTL7VrbYqfGhybKF2Zm3NNNHGyQwk5Ay8",
  "key1": "5JUvuFJzgvWBH1whSnbGooYqxrG5C1anR8zyipd3jL4TrAfTAxczE1uJ4DXmLUEV8257v99F6iV44nqNGV6UCW5A",
  "key2": "4rhnmJSjmPXNgyVmWQq8t236pUFLkRdfGcyWDZKyFHcHZnattYK2yZiS3FfMz4TTNRvjicRpzvvdxVhpjYuGUNQw",
  "key3": "57BKCYv9bd1s4EuwwDuY7iN5ry8cW26wNNwXJ8ssJPyXcKseuFVXGkFjM8cu51YhXAaScN9yH3Yj5Tjxxm1jiN9A",
  "key4": "2f5fjPdGbxhGCMkzkrB4FJ6e729B9QeSTFa8LN8SgTHkL3HZyU3HsTDAtVA5KAFRHyfCvvQ7xpf8p7Ph3Y4Nfokm",
  "key5": "2A8Mmyk7ws6vhZ24Lhg5caU7XZ3P5gjZBCCqmsWkCMpu7cvEbwvd4QUMa1vfdvwrQCJA7WwzMmvT8hPRsJ7oUNEM",
  "key6": "3EqfAXLvREJUQLRjUKkMh6L84PGfcs2BEGpSx2836XBvmo1EJq2BjzW6xvpg8dzedJ1PUqg1McMXsMdeNzgf1gjp",
  "key7": "4PPNqowaZVMs5bTn3NVeVVg1E4qhDV9a1uoiDhRxEuMHMhCTZQnwfAeHnXDrYShZYSvG7DCX6Q1njiPnXVRgPcdi",
  "key8": "2Wu5FWc6bYNsYs8HQ1QoGvrW3xoWi7eZRyXAJ5oVU9qJAi7qNPTiPt4ebvduDApz689azdpCcJY7KZpFCxWvrp2Q",
  "key9": "4MXHbFWNf24eMjyGLntiqyJRVtL5m851dhk8twuxPC3aj1xBdGUxLQVEhHH8QJsD4dwRj6RZRSa7Re9t6wkHg7vq",
  "key10": "gAnNnLjniLj7w6C2QziZuZKMYu8LvcX6bHnwXrmE4tGJ6HPtCSViDJnc2pVqPRBLbU2FYjapXZJAdGYrSaocX8U",
  "key11": "4YP5gk96KzFWsJ27iMUeGkd9vDqGv8S1XjWrLYXaKzGeq62eTsfuuhM7wd5smpQKYCzkfx1y7QgsQG6GJ7CzhvQs",
  "key12": "3xi2PGjG8yo2o1vjJn7PpxSS789ax5JByx3cBLsZTCQhoPmp3rDSzEAcHgAEv39RZMVFP3EAWvk9xLTpDgk7XT6r",
  "key13": "92QrWJWUfkLrYTDgtZyJPJQhF3H5bRUBNieawK5LrWnKQUqmRFLfPm7HXfAMZBFrRUKgTPudr7E1zWF7fqmdZ55",
  "key14": "4c3anE9LFSqpcoSi9ou5dRjVzNNbBG9LFHhWBPufFEVUXAye8FRV2WXK8PiA37tgAvoRHan72u6XrETRvGAqc4mc",
  "key15": "5BHhRunj2PGdUdrENxfSJ8E81b2LB4YYUkUGMS2mykJN6L3uHn45b7PaTQyMdnLt9FV2JGBj8K8pa93M88Z1sWmL",
  "key16": "3GkKg1azNAZDwyRLu5CGKAysCqhnAcRbcQPDSUdUnL8bXL9CyJgvyqY6mDW1neMsBxqrFFipuoQVBhpunWqDCC1W",
  "key17": "4EBszGttvHCh9QytdV6tXDBYh9YURMSbjpLGiJhaq8tYLGFf5G31nWzpXg73era7CA4VzrvkT4EBUceYf1CbWRt9",
  "key18": "2iZZFAyCjH7kMFvsvwwVFWMKNh1snTZNh5FQq7fBX9RRkRXaH1kstokgR3Gs1WK2zhKLhcymWHhBKgqDws3Rjsxb",
  "key19": "2qzRaD2dgLbXVLhPAhPUG1hR2QWbCQCfF1e5defrDVK71rMMffmFV816fp5wr4djHBnVvHv7DxXgH2aqujgx2Mmb",
  "key20": "57byMrnB6FaoTcsHriazpVoRCNWBLyhLkfi31y7eBQtjcJBiHBkKo6piKFEDf1E1NSM2yyicbNKe1LzPBufR5CtM",
  "key21": "61AqCL68hy6QxGZ3vp3X8FxwM183AJZDhMYpGgRYsL4D5EYMoEsuVYXvSdm2BfX33XkS3WTN6dE9c4PNbLHhWxN8",
  "key22": "32YsMx2oJBAhzL4ankkr9mXtrFcJjuXe8ywXryTcRPofM6GKqcXKnjXBxF56cuhm4ruA4EFy8RhiW3Ef2tZXD114",
  "key23": "BzRZScsriqk8oZ4C9pj5nijQZqaobybnFktJfhC52riYSW8wfRV35Jj5Eki1XwsZkUiB4dpHZ2yoWpwYztLp7Uc",
  "key24": "58ytYjBtzAe1JiJCCEapQkpgsKKi8QpBrW2Rgf5VF3sM1ZLKrcFTK12aZ4q8myizfvMvjZoMtqF5hbN3sdSrCX5e",
  "key25": "2hCzcJkXBk4BSGEf6ef3SbYiVMXKGHSF5vWNrAJfJkqoqUrGpFx9Kxv95QAbFNgRZCPwUpqwWBUpTJ53cbtqMHgo",
  "key26": "dpDgowgzpYiK2m4tft2aLheAm8WkLSNmSWcRZ6NWdFfnZRzNt5GFGTLUHigheuhjm9WEgah6kSQP5gHGFqidsJz",
  "key27": "4vpZKWzUn3pVQBRAd8UzUgyz3NF2sskRaCTsdwnowZVBPuC8JU4ovSsb6etPAzEyKpv9Lt9hp3eTjm5pngnaLJei",
  "key28": "5TkyyEHv9acCJcK9cSsp2GsZzKNbAooF39z1b55czh93bmkpi9q3u38wTxckGwgMn1yVGYXMH6awv18jJxo5gq7X",
  "key29": "3KfDEVKrTxBFns6g6fUbRdg4YkJDt8LcDcGkkjs1HYHhLc6TSoHfr9XjeCBGjsn31Gk5NcFitMd6xRpwzsQrSKke",
  "key30": "2Y3k3aHY4xKNaHfYvaiNvxNaC5rkaLKU467WjebJzbcyGu7Cy6RLJAegaZhKZZoVfnstXBPxjUGM8QiQGKY7sdib",
  "key31": "3wsQ5FmMm4DVjQqetppvwpazdCjrfKxEQs9dqE7NZU4fYDwgA95ZjFQeAepTNQb7u3HMZH68TkLHTjGUJ9MXanL9",
  "key32": "3ggCX3EDxcKmqrCKS45apxkiP4JNT1MoDGdZdxHZRAppW2skgayaX25JFfcyzKPWD9Dbak17FQfVNTysfhoZeQCK",
  "key33": "4mHHF9DR58W3w1DMWuZc5kD47VQfDS4QGXRuskWWUhg49JYUVjTFYwAVMYjEcNq2Rriw6yzGz9GkCMpwyXV6VHvg",
  "key34": "4VSnA52iqX3rwWwhgD2GTxXLC7tXU84X7njh8J74bvyve4k8j6VG9n9D2Rqv38D6uedmt9ZiX4JiQCpnaJFc5Su7",
  "key35": "BJnmhwDRXNbWGVy2WykpigxpXo6rDZiBfdczh9vRacmSZdL5NiTXa5X7gUNZNszMUyiv4qChrjdqrCTKv2L4f9W"
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
