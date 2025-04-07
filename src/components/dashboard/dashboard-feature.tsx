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
    "4xJcQLUpQtptTFvwjJLHDbLmxfVvbw9qJZeWZEHfAv31arFJe5LXj5kTdrTPKEoMifeHzuAqBqm7KntErm19XyMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBzLew5B4Pt1WG9aKajVRMuhDokot6QurXZKg82H2xfvmWEfvibFGxUbYBgppx3afoo1egYkoMQbrfVknDJBvfz",
  "key1": "5VfmMNH847aRW1rSxevoMVHdKxoPZX4NxqyNFMAb5opfAE9nkw8LP7Z3RRdyU1UPnbTNjRQNm5kpUFUPSS5hSWFM",
  "key2": "4EVs1yyYr5PUErevdSqNwCGiDvHtrqPp1jhPssKignsJ3t4AfcpWdxrWV6T4gNcR3YYCjb51uWJiwC5uAXbFXR9S",
  "key3": "48Qha8nFDY8Rw7vBhSMgM4sLB5VQSzjmLaHtygmfcQDWMgpN9bBwKUJY18gykwwLyhqZiarEW7pzaqu2WHhR5V5R",
  "key4": "5kA6HZZjCXUxtJ8vNg9dpT9PXTsYkxXavAfHtJ64KvpqfJn3QRQ1RdxJzrJtbchtG4a98spdwB4LKg4xbgWQMJBa",
  "key5": "3qTa77Qpg68cjhsM9YeKFzemgxACxqPg2GxH6fTAy6K6Cuuz24rqCcLCRLb4cNcZYrQCsTvuwaTSZdgTiHKrSmju",
  "key6": "2sotGjXm9CJdmzsGJeCgYanhJP72Sxvg6dbv2bYqKV3LuvQLQ7udyUEHA1YJDY8FzKjkCox9vgPKHEXPWAkqkwJo",
  "key7": "3X4nF5EKv4XkKq2fTq3gdMgTwE1cnKm36NWUJRntZLdszTWXbWNySzfa4Nen3WMV2E7DA5RNXoxFLhVHYttWd28g",
  "key8": "ajLrPntiwHJ9wRbaBipk2vi7Nx16RXNPiQuZaUaA3i2hP4eRt1QHz7jgEFaFjzGpmj5rFN4BCQARbkbWPFWEQNV",
  "key9": "2RUq97MyPkP8gXZBYZVRUKqwx4QEym4Kw7sA1U6bVCm4p46VBGzHC73bRgY2m3ggpgLNMUJodP4ym7ojgBfX7ms3",
  "key10": "j9GAerpiuhXgfWHeDESV7G4hpg4XXNDgkXxSTQEgLtjHDrVVTQTFnbnXaXzxigXusvWE6yvbnc98z2KAFtXqoT3",
  "key11": "2kdii4jLCJwJzyVPcNthBxgMXRXew9tZtR7azaEh8KSHXsCRGiTBSL72ranCWrtWLhi3RWwRzhyejGxvtkPdGvgw",
  "key12": "2gnJFi9w7B5sAavHPxEUW311ZZ4enSeibS7YUraPqBvHCpmagAxLBTZD3pjvC8DxEoF2i4HBrwDZGbmKavCzYZVN",
  "key13": "KHGbb3ar7s8fi3oa2ZA14mChkp35MEYdyg4JiXzNMfVkRowDsYPmoJpu3gXCdWXn3dfbFb31GwkguqzXVM8NbCo",
  "key14": "62zhghNrUbdxqB8BiJVV6NQ68AzMRAUZnoqvzGgNqVm9pQHNTTGFCXwBwuWRHuj5fUhtyZvYRt3trrw3W7tbjD25",
  "key15": "2E1766nT1P1th9Q8g9gn9P4bcER7LpRFBcs9bCw7n1wLHzFjggkefWuMgwySXmzx6Fd4seG6uz8gL7BgchtCJ1ki",
  "key16": "5ycjVpD6BTcwLXtj6JBA7hFPeAvVCueYvbTNmYd2jMa4qDLsWLiFhnRH2a1cZbkm2T1bTYa97Mksp9ms65vbdJGb",
  "key17": "4WYzDrZfJmUhjyw4h5Pt4j1eNKXXsY8dBfavbjGzSWZ9u9itn6cBsZmciJkfYdweDd6PZEtbXyvRPdcGRbjhn356",
  "key18": "an6AHhzZZKKhbaVpKvXYHk71S3idBqik78MfbMXHZGu8yaQg2nJ5qGAd2FkK1LkQpF7ys3qRxoMGTaZZE2xccAh",
  "key19": "2cxyK6sSkLXaBVX32M74B2M5i6SNukTgym2BDeLEanQuw8UUcEZg7jHyWLmL9gf71EKuGbGJ2wpvrucDkKc1Mspo",
  "key20": "66JiHtxWznhUYRutbth1gvc4PMMJNAu2C4ythf3EiG6gi7x1MaiEi9As4TawETTW9oGvhsnEN6VNMN9Q1RjGqny5",
  "key21": "fwHD7gbRohD2abF7Tzfz5tKezpWAZJ8W5cL3H6XyDEfMGo2SnKDVMPZ1C2PpcHH5YLgfh3LzuGVHiysxJ8iunZs",
  "key22": "5MVDjscjHCdBCbFBCLwTxo9wBRWCqbVFEJV994QJsYvGS9qg1BYf5HHnSc6hxZMVLj2xQdjQTNLmAGG7WmqnuqZ2",
  "key23": "3BHcP143kxQYFRHzJBaYhJomdZenZ8nQJ2XU3h6jXBGcdBnSd8PSXQXoeHtqJCg1DEq4JXKUUGEKMESBSmkFj6v",
  "key24": "2cgiS2gRGoLRXTJ8ZgMBfvDoxTM3JXsQ3vvBd63qvyZk5yfPioPWzNarqsRqiTf5Gso7v9ir2xGCuFnk2YRtjcqr",
  "key25": "2BxTfpTqN2Zch9D5DiwJdnfc5hW4v8dGh83KToq76dQhsCEFm7RkdBhL3r7HRfX5LghqXABUTgHFcNCac5pPaFC",
  "key26": "226qEnUw55j4ZbAyYnsRg1Sa9TAREy11A1YE1NWtn2xKh85wBE6rgCr9R6CT23BfW4dps8DokgC9sSNqnc264BW4",
  "key27": "kWYizoY2WQgGDBRriKGasXmvvxs8cStYtS8PJyi15yQPn3u8pRh2T7F7JQ84Qp6WMqNR1hE4Up8GkHWKVJaFSCJ",
  "key28": "2mBRQuW91ExdApPo7572bz33rktVqQ246wwQcCS3NFa2QVRVSGeiD2k4GvZxynNXKqdsJ8XZGtQEbzcC38gzH3Di",
  "key29": "5mPj46cLeEyXzse7jL3SjvTTquZeBvwaiWqH1Uqx2Svh8LHn4FPiPqdEJzoLtgWTEqv7THPiGv3wUbvpTo9qNrN5"
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
