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
    "5fEtsAK2ZqYDutVkScoHKqqibgZMDbTNcHqWwSuvSjAW4FUKWDGiPVUE6tWo5MvsXzkaZgMWa5bQRreHAd6cqbUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixbAj3hqNfaDzS6vG4dHuKQniVq8g7t7TDcxsxWiP75BSrqoPzDWtAVRKNhUkf2YKvdkqfKSyvu2Si5qjuAF6WM",
  "key1": "jeuwvYkfZSxV9dSgMQxhhdfUhqDFhHP4BgqeSD2EuiJQkhe5jmbcxSYXjRvypPNnPZTYA1FxqfNCVC4KNsPCXVQ",
  "key2": "38mZ1QX9QEj758fhmX4JwyXMADMFu9H15EuMiz6JgGXYLrQFjteQxRRCmB7Wv9ae4PBRWWmW5fsrDuwz2iag4GBS",
  "key3": "4wJvjbLsrJMAUPsJDSY9gf5PbogUHmf9WYZ3JwNoYe43kc9o2HczfSUg4h759yfvaDUWDUPmcXspza3F89KVsi7G",
  "key4": "3ohu2bt2RboszeKferhYoku28FWgdWKKGWMtkRHC9wCpEFXthaaVP2XN86YT5hBdCGimNWTZFosfDS3PNMWeNVrD",
  "key5": "44juzDWBPKNsd6pFFMW7FzF2snrUjXU2DQramhwrnAwKZjESmBXXbhBWMNGVfZGVQb6SDeLDX7gaaQKnXhd8ZKyi",
  "key6": "5GNNHG34nGzxknoNA8EuJjcKzLeKSUo9S6zzsphJwkqTjV93kQT972WyvpCJpNpoHAGYMf2edsK7PN5A6HqvkMdj",
  "key7": "5NkYcx6FtGaYKhfyQ3jZxZTUk1Et5nqQ9Hw2MixZp3zkGDv9MPKWRbynuAAsSB8Q4pSdhnLkWAyFh2BVH9Bx35Fw",
  "key8": "xPbRHQR6VGwUTXSqfnjKk4ETvnAZVGapAX93V4zp9AbkLtJhWcmhFRgYQjJMvm2UPwSbjanxAAymBdDdofcJ9V3",
  "key9": "eNopYMBNezwqsm8joFkwyxyP3REWk6LpobBMuvJS3BLiNWD1hJHSepgfP62nDbN4gvKqcU9HawdbGTFmjCMHREa",
  "key10": "4QGuQEaWTXFJSKEwvwAXCiJnvT8QZygJSnzWrtd4ZAfqgzjRezv37LruyWV4s1hXuVbi7GRKfVjHS368UabdBe3Q",
  "key11": "2ys1coo8MW6T1RmdLHnh3dU12Yd4A19i2d9QRj6ZptCziRPU6z73qzoqo3YXLfj83iFGiRomHv5LMMtqPgz4Nrr2",
  "key12": "45E3rnGjFKhZjuWee79uSMEWcyyEdyVDWPGzevzPyx5A1nT5Vsf3JmWEyKh3ZZvjjGaobbijojZLjeZGEVCm2Wy6",
  "key13": "4ve5pnTsCAMVcc5T9jDiMLKjWxNpwFhpAZyL2sWsVfu5rvzCaZYEMmgfssgShsscnXwkbVoxWhoaqFXUcb9vgCkg",
  "key14": "32DkRLvBzJp5VH8YTKc9kiwFunp4PQyHnXirfzLoUdreE58WA83dxs6d5XUMk5sXwVyq7GkmPuRXmFM8PgsTJ9E",
  "key15": "4bKbNvVmuAqJ2TTgTtBG4ce8GZibNWjEgmQn5zPyAc6q8kXuBGjprWpcwutNiKQCRHSUT7kVcMxzzxjSkbZP45dh",
  "key16": "4aJe2ptEmQk2RrYmXgoStLhRGXxy6joEnt2tUzhWU6GZShscsugMJ4K9a9wATfYDjpGcSaNspyqzjepQxgvfXrRP",
  "key17": "5fx93xiAR3En8CpofF99dmuyCikoGBQsQfqSLQ3QpivASFouB88r68USX91yUs2av7iVmWAviv2jutkbxJ9ajmhB",
  "key18": "3hDaTiH3Qi2WjohAcNkEUCWBnusZxYvftBjwdhNAr1NEgs8tZvjau6y3PiR9WG4URGk4AUoiwZXvetWjuWRyEKAP",
  "key19": "5x1rVZ9vKZSGUBbfcTs51Cic2E1DLX4jK3b4YjcKTnGKbxDDxC2TzXY6BCPyubMMacjW5wySKy9QBuXpx7daunmQ",
  "key20": "54nzTBvkpCkKWwEfZBgVqKCofNbyphNGf3b7QJ43zdxjZQCZyuhLTwkUQZAjYEVoXcoWHqJKPNSL8GX1YwFLSYtK",
  "key21": "4QaMgohJoaEwzEZYjC1siXJQqjf12YwtQSWb2oBU5CpCS1aBkZYowWmEKE1cnpL2NpzVCWRbuse7roUegwXfEojw",
  "key22": "42dzsBAiuBc7EzFqqfuj1cufmtXsFE2hHCY5ywD9b481RnpXapUfHspz3VLZHRzoPHPR2TW2Eib9nCitjzQhfDdu",
  "key23": "LmsHib7P4tyGX47YpUQbFp8LH4rXRJwj7upfMxJ7N4SGcz7FwYt6Js6ZC3zDWhqtQczDAjs8rvxacVx19gP2Bfo",
  "key24": "4r4Cz6qoKErjN6xSYJueYW7LjuH2eYNXEEHu8kG5zxodU17CddNj8vbFSr3o6QpoEm7npzvUgxUJ6sEjqSzkyzds",
  "key25": "2L2Zo4godn5qbdEuDiMdAJ1nv8GT2CYe8XcMhVMg5BGCRHPd43fbLYNeYFdrxEinQhg9WwbLEQM58Y5hwheCTuDR",
  "key26": "45Q5VH7znG2bvwfyrNJsFD4uW5bdr2Aa1yBma7x6ucPkcKAWnr8gAvEvLmaXvtpTz8V5MKXTeupLRh4W7XfA6EWB",
  "key27": "3o8ayaEAHfvjNQmC1gC3fueWALz2yewu321hYehU8hLzcqdxjz3KX6XdNcFVeRSHxpEbFNTg8hb4HrJVLKcBTF81",
  "key28": "25CMJQbfRHPLw98Qstd1xLH4xS1awipYSPgpZDK3JGubwfzPvr3rVT9xNFtm44sjxdp7fkDXNudwQMnrahJSCBNU",
  "key29": "3GmsNaXccXWRsXgdKJhv7bFnjUKAGGQ94JvL7ivcnQdn7UggQY2mAjE2cL6ZhhvUvwsWXYduftz7m9gL9AT1cAR5",
  "key30": "53cGUEJtAXfgNB3PnULQrSvWB6cf8kgRvdCYW4Zox8KdYJhDywN1A9fztbyiZbrnLnGGzwsPtZ9TvNurup7rJcZA",
  "key31": "xoFer8CJsVWtV61ttonvvwG9Ekztt6JTyZDN1iaAuubtTFmFCDyhybx8CLbiYjdxGHyD4qjHXGtxFoPSVgb6GwM",
  "key32": "4bt1X9jA4n2eidmo3H2PdUDMq15Sngg1wfQn4nJCykFcr8R8NqDhjdHzc8deeRnMrkR3UhBXRBWJxCTQVsZ2yqdY",
  "key33": "4BAT5wkeCSMq52tR9ewm24wmTNd6yKyX9wWvrW3xpB9WQx7qZHud3MAmHS6zTxccVSJTh9tMdqhfoXxGrh6VNwCK",
  "key34": "42NN7nqwAoCYbRnoEVDW7PNGbEhwka81VNea5k3BqJ1hHkwAsQcBN1cG2qKXJa1e37AAo2w7rDaxx41GyrtSfvBS",
  "key35": "5JRUdiar3bVVqGPqgeg48e8Zwns4Moka5dXdyYDyXom8mHH4wqkqcEtL8nMi3Q77eJwZj6trGjqXtTWjjamC8ATB",
  "key36": "2tZXp54fUH1jm35zPTezP2kKodxJJoNu2HGuqS94wxkuUcSXJmfZ7mp2v4wV45fYRUunjEdkfV6xVqodMi7LXsJm"
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
