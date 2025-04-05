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
    "2tEXUV5Vnr7TinuBEVUdBVPvvNEg5LvF8Y1juZhvcjREJ3JWgM5vuLHkgZMgtiXPPuQJTuxZisq4FuLWSiHFoKqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3V8gx7isB7nsGQeQWr1Ukr5JoUWUkobrcoWYUr6sGBnKCYeM3t4m3pvh6w3HxAwRcvAkLswi52jM6Ni4YrtR28",
  "key1": "4hsGqy5gszTxzmo8r4dLbo8RDCHeyC13jZtrAMBjkNuRQKmrKnhRMMPq4eSskpZzD2E2a5AvfeiVqoREAp26k7EB",
  "key2": "3EKf7SW9PtWiKCz3ihFviZV1c5FYeLzg4WvMuVcHMaSwMceDogLCfFvLpZKwJ2LGry2LENBfm2GjqY7qGtFTo3B7",
  "key3": "VXgt23jve8saVsazzxx7wvcAaaubCSPmj16h5NVpr2BjMGfMG44XFZnhVdShjfV17jz2uzDwbGPvtFvmNNUZzqG",
  "key4": "2GEXLrQJkQHVYHcT8JtgHtGy5Srmhq9XZKLH5HPqBKogYqnsHs9yWiB8PWtqrjtLBfimhZgJjQk4AuduTUM4zZiu",
  "key5": "5qorhYKht8Q3erDBjNDeonPwCLY2GeoTuCV6DLXZpWtYiQexNbGeycdqm81Md2Ux6XTJk9j4UwfQE3rRZ2njRVua",
  "key6": "3aRC3e9BSwvcDXDNr9JqKxBGNKG78xig83kHjwMD9G88Kbgh3i5dBDrjhz1oujXk5isGDfQ6pTfn15yRmFZfQ5RE",
  "key7": "4hGjwPBZFU5CorfQkxPSqnuyRMay63wDqcBVk5qreW5LVdKB1xGFKiyFaoupt5dZYpfHBWkvgpPbzxfVmFXhqEpQ",
  "key8": "46187itmN59n2LGZumaXt6ZuMNVMGN5UkkomjNB1dzYZ9PDefRmxVpZX7FrLxqjmWdZxpEuPsDeiotkhHmLUPP4D",
  "key9": "WrTrPsDWk2JZFh8JZwrG63p5th718y3jHZso9tePY29qzvL6je3QHuo3imZqayp5hSJi1dhrVeT1Vy2gjYMk1RT",
  "key10": "5FwJgo9vYbeJTqDAjTXmY7RzhoZoY8AZoy8PAPh8iZqz455gn29MmscXo2gkKVimrrE96pVKcnUQiKEW8765dxj2",
  "key11": "66KQFLAgWBVB51bvdGEqz2yHeJjDNoCFu8UY6gr9xAvFcag8ijxUhxbj1KHeCHMqwFW9wHAR5Y69XxZLkaSQ7Wmr",
  "key12": "2Vx4RGYceXyuqABpET71Kgq4q9jK8bVbwgwRjR2VckZPvud5AcKfrgfvZxvWeV383nse8HtiJuHMZ6J1T8f6DKS4",
  "key13": "BvUpj24mNMA45dzxKdopZR9J8y9mvX5ELEij5PWVQtpULSxWf6veCHYVz39XGDxX7af6UezonBi47S4ZZqwfn1J",
  "key14": "2VsPSd7JcaKUFuz5mMpsUZU2wJBeKPKUrBzxcZ3fbKFVcNFBN97M5iXabEyiQPN2J4En1ugSRpfkMsQHDKeGq2Ux",
  "key15": "46Ezc4sdBBQjafJMjCy9T3LvLnWonVtomwt7ST23vWzQgP777gQ5WCZmveJxbG5TXp8iX3GfW4NbkA59mgsY3JNb",
  "key16": "KKy3fyP96PFvLxq46oMZwcaXLA4Pd7Sfrdrw8osAHftKH8uchY2EK2a26EH6f44tnFCSS5St31bXX5u7CL51Hsr",
  "key17": "2UiU7LQkjsdr1fy6GRt8UB1pt8kHvjRss2RTANDxUn2DpNd9tdARxBvbfisossKiwbDuGpSjB88GhoKhXRcuDNQ7",
  "key18": "3bps8ci4Xq2Yubtq1RE199kqtRuNxH5UgiYoFcqePkGMXQxgyE3DBPJHn11anaJ6Z42JoR9G9z69o5ZaU9Sb1dzR",
  "key19": "2h4YoABbW8abogF6ACMRkz4PGv7Vfg2vRJzvaLgvtxVsutiDoidB4FBi7KwWHof35VeXDLV8vCcZo4BTYr9jbrm3",
  "key20": "5aASBRezhq911LmcTG4TJC9gGZaJ9AS6XaX9HFUSu8NkMufPVqk6YzVk9t3e36GUoNFzam7c1E6qVNSDDyztKTfH",
  "key21": "9kLPmsUFqBXHjuHvX976ECdMKEBsZq12i2xHvGsX8DFVGfxYPYuSFKhyDcFfLs1n4gRrWsDX4AEED3c2fF96vJG",
  "key22": "3NhZhLPU8Kci7khs5jjFu5Zh4SyEP6hJ7CPruf6LeBSBkPm1JVymeeXe7Nvy9ATSWLNz5GQ8sWL2wABA7rMX15X6",
  "key23": "ANsFXot2QZCNz5xchiXzrdJ9qKPcnGhhnpBB8X2sdpTcCwPSsDc6ABVMwCuWB17BGYdqEn4qD516fvGvaK6Ac9L",
  "key24": "5ZXDwErvemVg5MjHWUzFTVCUufCg5ixoFDe5Wr4QGcrqqtCsV4wy6SQbcKiQ2rWvuDpLbYnYCssd2KuzSg9YFvff",
  "key25": "5T3ykLG1wSXyrem2pozwUwnVF7NQtXzmm5Tyma2a6wxY4QuXzrEw2abq6MHVYKaJaD2RWqzSZKWtNFdy3dyex4Ni",
  "key26": "ZxduuruisjQHUUMBDYS5YnUjZjivPf4yRqs1sYhje8nfcP7NSvY8rRZdzs3pL1Sko3XPRrWLAx275Rv3mE1RfwF",
  "key27": "GgDwsnoEiP8DRm7yVBXubCebj3joPB7WCXSMUrNy6rkmYVX6u6HmLSangcenTuM5BqCR9xVpZnGWtP4wu1WajcZ",
  "key28": "3AaH1uKeZQGrgCR21JB7imFFeCCXbjE5JzdCcE5xS8uw1w1RJ6pwupRqhcEreTYEktbxw3xAzf7bwPrACWY8usRp",
  "key29": "2uwdbAEC4PE3Z2C7y4SRA522waiC8pSVprDL8shiBzZQ5qzuPGaLd3FCDYmDSiGRDidr9QV8kqqQQjNXGW6uoxy4",
  "key30": "2cypUdmqonkUHgLyR7sX6eDCNHNE55XgFct2j1wvm3LoBMyiGVPf7LjKnQ2yKyqXRpk7ptq1t3CoVygX6kJ9KW5H",
  "key31": "5jJPmvHd2WMFnchAn3wgyPN1NTsKAMZZACJaG8pn2JVmozzac16o6W664me6eFYuvWefGbC5mUvKLuWHnkt3EhHN",
  "key32": "3D1G7cDsGam91tcT9mrqPS63WN2m6ToR1h2eHr5QpEq1kA6i3SerQADRCYUdkfWVPj7jhjtUrCBuue16xSvfveM",
  "key33": "4qmaEtmR2Wi5haYf9v15gNZv9HiyNUtER8o8PbQt7QFKHNbuTe7NZ7LdzMS7MY1znJy77KCpeGgb96UqZwfJP6Gr",
  "key34": "5wtTB2VUeUpVgjkVh1o76pwm3uBqmzQhq3hT11a9cWh2UB8HSWrWnvmvNS9cMoxrHApH91Urwvtn5YCRnGfoHsdd",
  "key35": "6HuaUcBKopWdj8mmvzLv4DMKSS59rhsG5xihNKH3vpEm6V74gz6cR5iLiDHJPYk6q2RLdheBi9i2GjrwU84JQ9P",
  "key36": "4ExT5LhmZXCFtTdCyTS8rmPk8HNYYnHWQHp9rYAALuf1hEWnXV965MVpmtxoRjdJ8B3jN7gxQpXo6Q9DKB2jcubh",
  "key37": "5VHsFBNCiWk4n5hdLyQNzdaudLoNJTr8HnQWf96Lm72ptjur6djMQ6VynZLuNCrDPz4Dcy5iBrwMq8Vub59r7uXb",
  "key38": "5fbk5ydDm56du6KEiCsgLQgGa519HihH8AsSNGifKffCBuXSgd6F8XDKP5k8qyJQzitSxg6qJ8bwDcviAnEv6rHa"
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
