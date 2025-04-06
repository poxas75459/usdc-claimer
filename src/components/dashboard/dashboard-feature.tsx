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
    "4d1w3ce4wSYfxuR9aA1M9AwN3JPJN8ZLJjMjypvAy1MfxB5ekKNQAhmJN6epgvBoR5cXLdRWNERbrRK35cKA1Dpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYpYMvDp21jhKsoNNnGNPp6utoVf2rrKj95HRYcL8YhZkx4FRZetnmkT9jXCbrEGSkRoX4GoscvcgvCFd2LrV7P",
  "key1": "jg9c3kgZhrprtbRkgkkvYpiYNXPwsPfgroSgomWaEycv6Kyo28nFBga2wGEDWcQ7jVuKYp2Du4FzVL6GezuHvGZ",
  "key2": "4Dr9RWRo7taFtQ9K7vBdmo6ad7SPCN2khrHa2n8v5f9kVJo7NHk5xqMusNrzGEx3XnNNdPT2ngu7DDP4Dab4rDvN",
  "key3": "4CU4PZKKiQHbh8DSViWHYQUdp65Mvv1YCf98dAWhAxdvg3uDMzidwiLbgbGLS2Va9F9ku5wV89WcnDQMStjufFad",
  "key4": "4iew4Ff248EcwSq1U6pt8ZYjuGvizQYfqqbmDU7DzP95kVPkRsG3AGXz1c17wvgVTryDYpU9JHHQL6zdA37qKK1k",
  "key5": "318og9ns6dCmx6SaqNJo55Pd1Ujnwgth8FyE2rVyDLKhmAk4seMyasFcmwe9Fm6cQHQ3Qbv4sFyKr2z9WGhphCkf",
  "key6": "4RBKhLpPvnXTfDRmFrBHmUYgvprpzsq7wghJ6NbNsymHeyPEeVXenZCq2axiEjSUKUg7bmXNByvUKpzKWS25voXL",
  "key7": "3K5yHkYHSCxokuyPh88hYUne5F32S4ztHyg3ZZo7MuyqR7QbXVqgf4jADiivxZQHyTJA71VnUX1cds1igWaZx4N6",
  "key8": "2WqJGMFyn3if8w1Ncp4VPt3FSaAmKsbBQbykhkken6o4w9nk2Z6UgckV7KGpqwrcnt328qfAh7yX7D19f7m3XdUp",
  "key9": "5LfBK9XpG2zeNTCjWMe3VSthQFzuxqwtRUuU6v3jhpiiGCLJFW8xdFBQi4cTh2jCx8GQDiZFRTBEVmZtB9aCuGvb",
  "key10": "d9ShbkSowqjRVYH61DY1azewYsJbMW7hBMMLAJW7ucPB4NiETvbJgfjt9TJFXGneYxujKKwR6RBjjoknRWduLVs",
  "key11": "3ERixPL6iSF4PzoANjvtZyASJLoPPJF3VeNC8MVXeXubKBb4gVQDZyTui4xTai9334JuEJhAE3m6NJGED18YoBLj",
  "key12": "2ef4qg4dYnbgU3gKHmdwpuJn3R6raciirdgNse41EucFjfXzECgr82enVvYzASBaetxhCLYmj1yXZHYn8N3n51Zr",
  "key13": "5rKMHuN6Kvh3tiAnLSEtscnLeaFUkMm88VgNnidSkxJ5gjAF7rGKPqj94oAPQhEs5DoPJhTmTMWfimug6TGM46Pq",
  "key14": "3yWpAYw3PJQWcGCQXFy8VzT2kUPMuoeR4XW1uBBRLS9FMTYSYtn4b3e2HQz9xDqnCTRwUp6QWct7iZkDCyJjEUhc",
  "key15": "38oXfkRPcG9BfVKrRjNWXvK95uM4UrBRgC3FiAJ5GoyJcVjW4irVdh2LmWwWGXpumfEJfgHD15RcXwew3CoQ56hQ",
  "key16": "5FGANRHY4aBaxBWXtWxDqbfYNqSZKUTX2Ze9Rm4twrrMrmWvM2eoDjJJCBoae2qXW5VuxTPLvN6gDBC15rBXbx7a",
  "key17": "5quSs87bvGmHbp7wPXHHnkuaHz8AgrjyrtxdaRa1XfsEZRAd6yP3XzW1UL23VUqcKdnbbtR7CEdWniuncLtKcSwg",
  "key18": "E2XPDrjuYPTEonLzw7acEWD7iLiB8DYfGJQ6VcMa9CmLLztba2LGPGH9poQEyujDwvMf4n6SDEsAH9yfgXJRBfo",
  "key19": "4daAw6q3B7v2NoMD3x3X4YUXcHkiiFaJrJwhXZPRHRKwx2KwFp58GUZQT6Wk3r7aiqHUX5ruZgt8piXYKUuE6UuM",
  "key20": "5txmrF49m79KAns2EyK7dh1F7opHzezvdKXFBWTwo1ReNNpMXfB31vzH8LtHCcEviQXq4UP1SYxDzFk23npXsSsW",
  "key21": "22bv5JnP9jA4cdH5d3mNrTehjqUkLpAmtKdTKieHVNwf2Nf28or8VZhyyvUbZcqP5BY5FzzKpuNuYU3j223ocaxZ",
  "key22": "4MaGcRzdo9wfpJSZZf7aK2Vc6hd3VhQLCaJGxv9r7RfVByo1o1xC5VyZZ3RECekSg5p1DtLmkckrYMZWPsr4BMjT",
  "key23": "4sPyXLWirWjdnkP9y4EL3FPcqq2guMVfDV5jPw2rSRfxkYTtobniq4M84JmgySAXYegHMEbF4wj2N9yQYmBt9p5e",
  "key24": "3skJ1S5eBjhgp9bWasU39w1tXbfWkiND1WoX6jhqqbiVsvDGBsPdhSQjr1ekYQmeXt8B3qTwXyfzZabdRzjPBarw",
  "key25": "t2ZifYRgE2Mc39hTkaD7NiTZYa8UbXYYGxxRUY4UvCC3CZ4r4ZHE5dmZeWEc9A3v6rubDwGWdCj7K59VoDSD6X8",
  "key26": "5SoMnLeDVpFfsrYHrvVtnZAXjRT1H1s2Bjk55WwmLya9Nm648k617ofaibS24jJXkHKuWAoJNVhKptdYBvV6uGy6",
  "key27": "4ucwkVotyoTB6Yp9wYxqhPY6St82yUm9vzii5PSBoRVQ4ov4zUnZTR1CvqoBpbS4nbTyUQZLtT5utwYozhC2eeWw",
  "key28": "25A3MVKafHJ1f5qD9YQBMQrghpXUC4rWcTYa73Tar7KuGjdHxfYRTgcF1EEGLiZ8jEG8HkEcstVbR2F6MbdFPiKz",
  "key29": "4iH4RQqhKLvwMD5FXH8ztk2tpsXNkWSaUNg5FkTzymb4CUcnNSeturAZmYLQ8ZwN812tGivF7tGzuf39wyzSSGEP",
  "key30": "4x9wZHWnXrgL7SoEMfiZN8eeDuN8P8UkMLyEBnN8pTmw63dMzZg5XnPRBjcJ37E4c4VCiyUuwp3kQcJwbzCy834a",
  "key31": "4zvk5BUS2WjVCBU6XhvYkpMXmTQyjfHfubhHA1pCRazDswLeTSXn75e4dLetXeE8ipBTM3QBJgLiv6e4XBotyXX2",
  "key32": "4oaeaSyAz7F2NeYn7z9KasZWs6PwmyuHxYEasTFa91qJDgAEbVMtFRvY5wRe6ikjjUgBzxXtaRcfcXvaQnadiq2T",
  "key33": "4jiv1Cm5MjH6H74qR4DLq4AAR9TFymQz81Rh5aPF6sriWp5pVUcueuf3Fnde4HcEJVLZQNnGLMm717LVh3tnNXmN",
  "key34": "2aB1pqbgwdeTfYXvuravx6Jda4oVMX6zUKw89JV1BoLGqYD3xzSvNLHze7vLPquzqY2D5yHc8cQU5hgJQUSApnDn",
  "key35": "4gFCuyh59KSnSzjkFh5iha2SK7YvBTZaEjpejyTZsNHusucoW7ZrtXwwWeNQbKYMMoHiNkcBhzrcn6u9rG33LYst",
  "key36": "3CEJipR93Eb3Xd89QhwJ6ErANin1eAtbxyKZueoBLyo83JSJgEnFWSqCLFtsgsBg9apLDp8y7A5fAv6JGRCAJQqs",
  "key37": "5fLMoGMUVKJ6xsVpaAe8qjSdyQCrm9xH3uHE4ygbHUEortBiBAoiaZ2cUpwRFP9wGsH8NfUFpiStVTuZkqMAJkNe",
  "key38": "BLNwjAKihE5s1onvFXa6JwAPCJfYpixgVcVAt5p7MY5nu9V2S3LXphwjYzHwvMzaEvYpvNaQYS6o1h3TYPXgWcd",
  "key39": "4zkyMLcEWJn4Tvxa2mFyAUKC2xHzpd7nVWysxYfj8YH7bg5jjUGX7PgK7sTjksXmowKgUiHeFHjaTkGina7x1tnR",
  "key40": "ozjsySQQbzXeNj4cSEnXpMkGtGHv9cfA2mkmUHHyse6no4YCnN9UCsHqyK2eh63tGpnCyHRk2LgfAtpWrVbpoQK",
  "key41": "5vY6nN6U2Mb6dDFCbQk6SzBWimWnjsE5dLmfijHSaJPQhMDE5EorjFHDmYEeQTBwsLhBVigJEtTcBsWnkqxXxoMM",
  "key42": "2DPBYxx5XAP4dGBPurCdmgZLbPeTTVK6eVSNVCQ1v5yfyCBkisE4xcQwTyTnuJHXDtA3FvAXX21CrQFef5VhZXo",
  "key43": "2Tnz8LAfoPCqSERRPxRmfuUvJ7mox8nmY3zW94Z7XXzofcsGsBS5hfJDAwGJN7ErcwKMvbem44ruWaHrqgKnggd2",
  "key44": "5pBpCTTArAsPAJkuAnptrR1XSeE3Y9qAsXziK56EX4FnjZubsLsTqnxC6Jawp6FKntj2QPLCZhmNQ1J2xDh1Hfxq"
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
