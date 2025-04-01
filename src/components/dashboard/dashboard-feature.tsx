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
    "4eo3QTPjSFf6Qm2MJ5gqy82yYSqgMkpBRaKsVjLs3bUGaU6jaD8ztkUqQZwTETzbTvy352FP6q9V112AYrGEJBUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52KpVbiNE8T8eqDt2BP59jW7jCXhA96pRzweJ4j6WJ6aUhS5kcuVzAJXMNPKFtSjfh668Wu4UacBQTncNdDCTvHD",
  "key1": "3hn2aiqZ1CdSjfRrshC4aFv8g1sQ2UMERPCSpXUrEjz8uiCUiYmQiw2PhC8zXXkzGg2z3tETMK1rw7TNySgW27cX",
  "key2": "3UMUNAthziTmkfD5q5bB2MSGZLmjqhW2ZdYSgKsiLkmJJaGJRD6kwA4VsNC7KN7KGJoABcD4RDk3DUCG75nVam9x",
  "key3": "5h6Qm4f5JWnRsewPsFssBipeZPzZa7iPa5YJFRm5FYZhMXcf4ibYKxP25F5xviZYDv9P6Pq5M1vwbvYf2dJ4fZAh",
  "key4": "46v2V1htCqA32FBdZ2vpsv8Fv4nCiCmNBv5BedQqUodxD34U6118S3UnX2f5XVhQP8adtCe9Jd68KK6brDKc6ugL",
  "key5": "4vwcBNRnk5zdiDKzHRKPgEXKnGuVceogT9EhQQoQSYEckSwq3CRuHmAf6HtgRj18sBSkFeBoEn8q9qcq5jM6Bf9V",
  "key6": "YJwZkQcuEjt5j36D8MBWM5aSRyJTGuAUxr7uvc2QFogY4QwwazsC3c4gEV3ebykXBzwkNvVNo7X1Muz3tKgK65o",
  "key7": "5SbVrDTVvhaojNqQxbqkYxKNVJYn9LmjouRW6jYVUE1zZbnBvGpyvwJX5fG2uLpCpKWqvnJZy6hkPshXkg9PhwKU",
  "key8": "4gAvNFuVAAjASeckbjgagQj5U7Z6WcqfGZsoyoAHVTfvdQT9sJRfz6qNdku3oKX9pyXHzKxKyU2cxZfbyRTE9L8x",
  "key9": "3LZPfLfEt32z4EjNQa9wcswhXcyUYvEgYGbaZBgn21Zg3EnJD4gy11u58TSox3DcVppbjiXKvChyoUdTGJ376zeN",
  "key10": "3MMASVx4voXqfNYA4JyoeuVWeMX3rRqXXcfsARxn4TVv5Yj2yX5UkLK7YfZeurci5xcPbigKiifZnEpYLYJwhE1S",
  "key11": "fGgPmeuHT8T23DAwEdYSkyQRADrcTusPQSz8E7dYZ7u6QKwnJt2FeKw7aS2VfeKidWvLkm4PccvEboQPpXFNmt6",
  "key12": "5gZnmysUZHYSoGtEUprV1eaTn21pSRDTMJ9mLbzRvZDdQmBazQhRi8c3qSPgSdgqoQieezsYUxBME7KAHW7SpwbS",
  "key13": "3w87vzpGuCt2EKqAg5v829PrQ1ZRkRxxGwHgspTH4qgBKfRX1bti5VGYbPzDbRDE6siGkWogXUoxFgCy2trT7z7g",
  "key14": "vfFJhfXSZmJxga9qiffvqMKEszoANGU5E4r4naXBXdBm8rjYKMvgmGAaTFGNgi7GyUsxygP74X4sPHs9j4fEuon",
  "key15": "3zokEW51jxp7Ve3AGVUh692U8Z7J9DRKBwqJHA6iNhTKd3jetj6xfY1p9CxTcX77nQfsP42Am7BvzvAFKf6x3fzG",
  "key16": "2BZEyK78G6kNd3HKrwH4y7KosbamsxA6zQeiQp6psMxVABBbs3YTmVXkc8o7U5nFbBFwyCUWxFcpX9VqWoKcjtmE",
  "key17": "924ZikoEaZDohPeAfKzgqr8GknE1cVtp6aHgivtcfXXWkKmSSzbGREWES2cSZpYqEezdHEzaPKGDzMu8eSFYx1n",
  "key18": "4Q5FdTSarzTZHPSK9J3ztqSZEGBqFQQGfVeEkiBJQ525SNdJ8UUEZQNbiBSrFFwp28zyGf6vZzSUwHbjgBbtypDV",
  "key19": "8Ys7bQhUoEYPHu9io7JYebgEsZ7bJUeDVBWPNzVNGG81xcbVqr32PvqjryYzcpBYBUet6ZJx8JhMSqypA4pR2fy",
  "key20": "8dxUcQWphEnXoJJ3oiTKoZwztFnbpMwHPEpKUGZST9CW2ec6EGGQd1FciXsHgu9fS4NGbHc8PPuhPWmQDUQ5bce",
  "key21": "3iAuaK5XXAYdNnBJFtvyJr9z8npT6p6ZdbeRWVCLk9ZqebCMSJoUjdNPRBRLR1oXSD4woPKNarSh23jqhv2SbzGs",
  "key22": "4mw5EvWnFJi7DnEtSdj1g8MfmzL4na9m8Uxe9xUdDRAq1jQssSNgEdRX3TCuqmWe2eRa3gWQ1NztuvenvQFnwYtp",
  "key23": "2aVVQ4Q6pX9E8zPTEE6wLpDaf8SrAd8iFh39DcbA4k9vzSL6VHBHg7pjuVGrHwnr9tisQKA9TfxEWVKvNf8oyPg3",
  "key24": "2j7VhyWkmD9gYaC7vprmBiihnfWyAkDbx5yEoMsHCtqeYANqjXrAyD3ZuPgruPyqK73wRjtNbbnLkvkMezJqycwQ",
  "key25": "2H7B4tzQfM1UVhA5sb9uZqbZDd39UbkmkFS4ikHWSUusmfzAWngJs2nPX2WgQck3Vgzf8BXhYHWrqcNXQFT2DxME",
  "key26": "4Gmi1kxTvgQ6J6hoFRRJgSrGD9u4LWTPrAN4hRfFPHEPPvCXQiDovww2QMkhc1tRbKEHzH3GnLMEb7TkAYxZdWEn",
  "key27": "3jpurh86NUjuLw5KZjjsn2nvqAEB9SntCtegbKSQNVktUvz1Y1fz5neSM3sZBhRsDNzLTvPMBNgoLeijUZeRESVW",
  "key28": "qdgeDaFfVrpJtF7t7NvTnBtCJ4P1PWqU13yTsffzVQQkCsWczz8WKcj2XxScpzMUrwZmjsXs1z7qoGADFBUmf3z",
  "key29": "4QqJx9LY79E8Yuj79eRKGSWwvu2Dj7JaCqs2sXbey7aT6hYTKHSaVhQ7tzpm8WRpnMzD2j5GqwtaVisoEpUgY4TZ",
  "key30": "zwYJjFFfp4XhM62SWtuDVyFuzRdtWdH2ZsufQ5G2teS1K3T3sdVMXX94k4cpX23TgYHMBi1uN7xYLatMsRBy4Xx"
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
