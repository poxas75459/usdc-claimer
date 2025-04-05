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
    "3UxKRmhLrh8mph9N61oHuXaacUg6drQ51m4pPxLnxg8Yv4ZTFEvhiN2t17LN2hyfKFe2CNXoufcJMpdMU5HTP7Pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzDUouhaXUdh6d6ba21NcQuvcTZ5bnj7shxi1H1k9efFn1N9fRXCr972cBHtu42gRk7NsxEXhncbqVg3X6HHsg5",
  "key1": "2fjUdAUyo3SeFaAXFiwydQP2pLYsjB5znLu1wesJBwfzGri6KiWJLwjmygpuxF9oidtQejqXLb6i7urACdEQ2emu",
  "key2": "38BQCzwNK9nRyPJvKDNtMhg83o5qwFkS1uT8B2VSdUhWPkV1KHzj2GDqYdutsXZvcPkgVX4oXW9yGAb5ySBQW26u",
  "key3": "5tFrByr9FqyfXrFDJ93KGEABGo66f9YVa5vZeLE2EiGsGJgK7nKTNf5D7Pamqwm2Fzxcz98mxa9yum8kej9Aj38b",
  "key4": "2vLRdhc9CwDHDgNd1i7LCGvGcpFMCWXf8vp8VKrU6EdVjyVXmeTLThg2JqWZFwU8KCJBDqoA48gTeKxi6i4Y8Cxk",
  "key5": "3kYBMMnmuXXyTf4TimhT9Uaz1TR3yzmEJ4aPhySXMM4JFiUmqxAMSvLfqijhqnFQnFv34kAuvpBgpc1RwZ7xVaZX",
  "key6": "4ckMxTK6vqo8ZnzvKNKAD3tmyoXfP4mMWsc5dPSy9SLDBB2RkjvrhmQqUVkFJ8p55ed92kPM9gbgLYB3ipSWg2DA",
  "key7": "5nJz5HQRsQdkWh2cpaFxYPQCgFBnS21CHrGszLaY4Kx9HQHmu7381eogbEELopUYodTkyAbht3fN3xWp4Rz5GheY",
  "key8": "4K5XD1QuPTPutEZdY3nXzuHXAVdoXrgjanHwJ2DPhBGzCg9UDACJ2yvv1TVJ3WQFswHigBQQXMJ6WkSdf8czykaM",
  "key9": "28o8ZfgapzjUPrydthQoPDjyxrFZbZynjgmxKoV7qumVArk7rBs8vC9REYrtzkPZStynnKsWAtop95uLeaFjX6fA",
  "key10": "23ox4SaNEs697qovymZX7uNCK8FkSVWtrgYYPsNrgecBqEvwMwvwhAuYRMnyNfjx4YqdJZAd78GnnaQMFza79i15",
  "key11": "3suNWRvQwYNcWbZrP15Y4Y2Qvayf1dhkCPVsZnody2qLjNS682mQqhn4sWL7EWenVkgJMBP29V5EV5cw7K7G45eF",
  "key12": "2Uk98MnXk5VrU51bZkTNbdrEPqn1odM9D52vx7T9EyU7w2kfZWQ8Pux6ieG9hv1gcTEnHpCQNtAoZ1XT9pxEJmY7",
  "key13": "5svJ35WgjVQP5Zs8ZAD8VLKk9eJ5hzGHRwcroDAf2r9rtA6uCgqsQiRvGwoHk4SEhWfJCzFxPT748oxRFnPRENUd",
  "key14": "33dFf44A5hLB4eTJi2vpU7yQYJPF3qb98ArDqtovuT9yqw38SYTnL9qBa5ga3QyWhSkSzUzunD9xGsJeVDfhNsA6",
  "key15": "2FthfhiPDRRiT6yXEVi7y1z5TQgNijexHFKCqbiFvSJHv3mkzJagn5srxqLn8jzU2C4Sm1gvGyNrdx1v5dFY3jwh",
  "key16": "M68USpP4LqhHy7VYt6Uhppm9bZwK7WDPafQmo8o8TPUcJNpfEwERfPz149B3K7XRz6DByq6gVARjeYHkoNtVVRK",
  "key17": "2aULHporsEGB49z5mjSBa7YV8Ljxp3geoAsMq852wcpnA3uu4WjT7MvrFfxxVJHeW9B5qniZxvPBv9acZ31Ygqtt",
  "key18": "YVWGyiTEawVGrc5bzePkc55GMR3AadAb2wCwDzJeWEZYyVFzDYiAmwiycuTb2D8EF5XH8NVocS2jRxfbTiUYeo8",
  "key19": "3vmAhjCr7vHwPF3RAsocEssBB15xLHScX8Gk1b3RuMSK4KLSkYytcsRhLxgsNSSmu765nAhsFuaqoxcAL7r8mW9S",
  "key20": "5tx3LHomt2UjgsaZVEmYbwuJsdBVL8H4TvmCN5FqEtCdpYjBkanqst8Dp9Q5kzbE9FvHZrh431YCGVSKsCC2kS8a",
  "key21": "tNYeUMoqicD1rvYoEiuwVWSVEW9kXb8vSBmiM11JeQ8MTPq2VS3L7hbp25zvfvouMdbr7grXb7fkNQ68YyyZZiT",
  "key22": "4az85J2oPPZrRS3VDdZEmbVvdLk5rhZHJSaRfzf3wGuHXSwzRXvsNpmD2EBTZUGxsJ3Crb9yKEA7RMEwkkaS734U",
  "key23": "3abBcZ6tdsrEsFopQycgW5hzKZFdMJkkgEPsUmak7d9Whuw3KAspPeicfRzJxyQoozWRxDm5dBF1S2Rt5YKyDLFN",
  "key24": "3suaRq8pWhHuMmkaLk49NCjVRGBVgaoGWgBFJ8y1V8dJEviJQumPzzmszSE6XcS6m1ak755Adc8qNrPuCo28Ybff",
  "key25": "mcgVhjbiynoyvCphbf1LAMNAK1K1XnjK7qy33Uy758nUtMiLz35BrgSX2bXEQQsxEgrS7QVBqpmTiUDREkzKium",
  "key26": "4iwitArXF2P1mfRAKMhnzZvcDyVq8vkS1DLAeq13mL6nzD9WJwgBW15iE7DFjfmz469MM7gUUeQd6qTsTWy7o6Dq",
  "key27": "4JobrELxrUnNEUsgYFutEEtsrtvmrPhMtBZcSs7Ldo1mLNCSb8ypFutYkKpGuu8PMtHqFb3cUfrksLxYAPJAci5r",
  "key28": "FxMZUvXcT5UbQnfdiEsbUaDrXChvk8kst52x7PKSthu3R2a6MAEKTrmdti4pNV2eANLiAaEubCferp5yV8XWWbY",
  "key29": "4GzrF3eAZLDsmhsgjzhJNeKJnyki44CoZjMhtN5ZqqaTLxshDuAca1DDr6AGDVAhPY3YxLR6rjmC9Q5jrvN2aFxF",
  "key30": "3HYFdKxGeNWHvNdBFZfeAguVCRpZCouPQHCe2MVDEWR6Z4NWoUAFNr15pPBSESHYvuCDXzrdNWjAPpxt1AmE2dnY",
  "key31": "55tuy5x2cYAZnnumpk2a1xm3Lqk9AmnNvVXjYQsqU9AQxYNHqmRdLH772cz6wz6MyDQqbrgas19MdAcY9KUZ4nJW",
  "key32": "2M8z898GhWY88eRHBH3fuJCMLggzEtTowENtfosHEk42tBgp9icew8YWzmJ1i3dUXXjFwZ15mSfbNSsaTz5edrYN"
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
