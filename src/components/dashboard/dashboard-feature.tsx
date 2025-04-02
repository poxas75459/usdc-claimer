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
    "4uPBJ1XUbm1Tr8ek15G3uMmH6qzuv9CK25Auv6RhFJjKnfkcNzimhku7JUpu4AVw6DAjJfuxJbEagNXCF4z7Sjbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E91iWpzaqrU9pQvRHifbt98EnrKzPaKC8m5mdZxk9vCsztAFvDoXyUMruFyc8216sNmwCMrCDxQfS6Cbcsip8a9",
  "key1": "fN456C8E8n96CqzSUSn5Cu1nuLZkkPvBBU4rKiPc2ZhduLmakpiFDPkw26ChLjoS1jH7KanxTiqZgj5eFCkshKE",
  "key2": "3aGfKEMR48AQvWb2K6dkRgY1EHgUVCY9sLZLZoxgGeZLtxpYQXHqywvthsGpMjeq1Q5ghW8KUoM3dKtFgS6dRa4S",
  "key3": "3R5DCJYmCC6H6H139ZGeYGTSSGzKsVmgsouHn2Eg6dtjuP9WGmiq7s6XGn22KjJ81rfiMQnq51KTEUZHfv1Y77Av",
  "key4": "57Nm1FxUAYC8AyiPkcnnYjUQj2YbSucoMde9r7eHuSgKtwFQHyJuyV5vNXGNZU2QGMhVLStviFH3ykk4rFtxgMiH",
  "key5": "5w9KjEpgHW8KgVS1BwWWnka3x618iK5oMRcQR8RYb4AGpHi34PgHrJ5S2cBSThpUict1Qhsa9YwbWUCghEZztJZZ",
  "key6": "3KUvYzNZ4gv7At3Ai9dQLSK8gZTWDKnutQXJoNQjJZsJbupm4qPi7oaTHwFb49VuhnXNZGcV41L4ZrmjUhSxxoF4",
  "key7": "4v1zqH432bQPWSY8tgWLQZhC9XmLCjR7Jtbt5ych7xCoFQEtBGaNfoBnBnmmHdbjZ8FjUb9jk2NCyBVMWTJxV3Rd",
  "key8": "M4hAs99p3W62nMxkLR2jw4Ft64MxJoBeac5a5QHG7Z93VC69XUwFSqb6TnHxyY6St2xLCi5tVRRZuEEQL9WRCH7",
  "key9": "4jZBkvLnnhnU1mtW6Fe2pEQiiywX16Nd84gzX5UPaEAwgevmGVjpaGmYE2d3pmZjusMjzkAYw7wrbLtgQaFUcp96",
  "key10": "4DL963bdxrTeXMhsbcKBQvjEmotC6RRS1nZV2wSaetUt72YejjF434sMJfFehBt659rSC41GMfv4dGTZRtUgCzRE",
  "key11": "qfskHggaMfFhE6kqusBeY4tJbHfS8wNzbntmCVEYoCc6ej2dBhYNrC2pqfEuKBJQsxFacjhJqdkcD63V5z8th8L",
  "key12": "2p7eufJS3pe8KWmA4DAx1tQ4JykEpUsPnUEw9XMcJaqXwymMZxMFNtNZQ6BPb5feggCBCqTxE6GEiomHn8SNKX3u",
  "key13": "42nMg2pDc6jH7fb1UcWvK8vMMfB49dVaN4EfMbk828HGu5S3GY22RMQJNbzTkwvAHWTf4p27eNbfcFnnr9zpcjj4",
  "key14": "5j3MgZEuMiZqe4oV4d4ayx18HYj7ctK9wUxYfWB9RdqgzxuypnCwcvECWCWQLQAXaWDrHg8kCTa9GA2oqJvR3LuZ",
  "key15": "TUoKbnYTUmFS3hjgcqwzgyk6cDvGwooVtr6EyvefwbyhwgBm12qpUjkPkD2s2R1HJW4HqgzdMEkGYybBUAMgcHK",
  "key16": "553jcCe7z77KNMf4cKVCZFGvzNuiYA8ET9zgBBNSRae8vrZqT21a96pwsjNo1jxKMzkAUasGBi92N2xBcNNvoHFU",
  "key17": "4q5ihrkarNjSqwAvHagaDqzaq5e4xmSWhkcR71HwEVzdwEePdfkC6TGTWKYsrX3Tm5hsNh43PSo3TBvDot7QmSU7",
  "key18": "5dWJKMiHTJrVPnem4aJEyKEdUR9WSWu8Xf8DSjcLvYzSnRWQG2fdTvMyo9LuFdySoLazR4roe5GJbfc1eKEAPtJN",
  "key19": "bGmYuzcJok7qGBQdF24srmsoc5XmxGG2kcKDXKpT2Q1rF8dy7pBvKCMGJmNp7Ab8R3gVZBUcZu7ykzJyUtVt9Tp",
  "key20": "4wxfmNaZjCyPgJcEcS9N7miEiDk82afCXqGy3gT4H5oz2dkjuNaFyiYKppFMpUsGAGhwjLv7BA2CV7X2iXQ3ohF",
  "key21": "25Pbb8oZz3pNJZJNeErSkiAubFodFvM7xCvP7tMMLDmnhFbfkGMsQUhgNfKHFmVTddeTejub7jdNB2XGSzyUsocJ",
  "key22": "3rh1afB717t5RTeb1XjD5Zvx6k2b18V1aeHUBcWqeYv6LEUaoW8LTjWbEfRVkWx9JSmvr9kifBXRj81GUtKj21SZ",
  "key23": "4fqgvJhLy3rtP8EUzTCVTXH5LsZg8iRq96AYtWXNVEoAfwh4Y2WBxMqWYsumwYLiP3bVTVHbfy1cYGRqLah7NLcN",
  "key24": "4awpVz9tiLG9z2bi6FdfMsnJ5Su22XjnAkR2DqNkBBTnTSbGS3bdhcbWcoMwtUAwbvuSx56Md3yrKcgXy6NEkAJP",
  "key25": "2gMLfDMfkq9McE7Y93qS2xz2crLvCcrPrqzXq4aSkXHjrEy97Vc3TM3aDCPB3g5h78aqFFa5gSPCtFbyBAzPSXoT",
  "key26": "F6aemLZPB1rLmQ3QFtndHqkeQkTy68A937eYaaTNgFbpi5JSKRhWggPprmgSK8idSSzUxJSUD7yRcu43KAoPPuL",
  "key27": "kAukNGaVMAqhid89wVJmUV8MsKAEhANWyfRi6HSSjhNg51gJBgzGDbRYSvj31N5JTvENfCWsTXK7Lze5aCVmzPh",
  "key28": "5mv7G6C5BjZBAmG17MuKnmGPAUKUbd1v9xidDbSkBj4Jo6Vx5fHjy8yPJCx97CwYZP45mPdtLfHAwh2poFHKNARK",
  "key29": "4CahkTrK2muXJQdEhWzPUjMebkWT3ANLBJ3DzCdBBdc6ByWVxUjYGpva1UANRT89K9HubZXkZqjErVrsGhZWncyT",
  "key30": "5Rcy3fCeDf3vq8R1aEHQMcZjDe54qhK1cfnBuZPz2VkxLcmNzvDZucd7F6iwXnjGJ5S6M3fgbz6HsFxHXfwzrkMi",
  "key31": "3sXcebY6Jrttw1YjrSiDzgMbTvFiRPADeGs3w4o2mqjvN6Rpy5tyzy6J3oBMAZirtNaRywEVuYZZSnrZcz9hcRYg",
  "key32": "228vnHWJ9Tem1PNUqVWVrXkk772qdiSGthvsXr5FPBMu1XVav6pswTVYLXXgvhnxcTH76YW1yBDyFzhvoyEMKW3H",
  "key33": "4DmTMQTXNCox3rGuHuV7rcHK9JAZXLUfEQQifa4krwhLpjPsvW4Pit7YHZFbv13xCr4tSV9EwSGLCsjJDiHT2sKT",
  "key34": "4qx2TGNxazVxY1baoAa1hSvPETTULtkD8r5UMaTmt7ZBdTW97DzRgsKoy9KXoB3QY7y6YL5WkQLYrPr24APdzgoQ",
  "key35": "5RwukZieo7JJAaYaPfgswdmTwjv4qhi6GASoaue3cVaRKas3q3L93p8VD965EZPmqYdFjA2oL1EtKHD9N8Ezn9iz",
  "key36": "63ZNETc67yG1FrbbPKpYtTvs2MXCRh4rDWK27VvJfH9RD31kRgLKUoZht8XDKziSw15AiUNfqg5vR2V9b638eboa",
  "key37": "5vNHqa52T5MyxtyCNT2yFDxPHgYNFC2xV7SDERhfYJi44HeUzCBKBnAixjAWosXGmgJDAtKUs38RRsX7UsYZkvp3"
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
