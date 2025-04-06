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
    "5H3RJyLjzmnfnPb41YtNp36vZLi2R1aJJnNUH5bfHEmBX7Q1EzEXcSaPV7mEZUEVC5GjGEnXnnu1bdhnYAELpPX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zce7XitehV7ikpawgn1Q3u1uBLbzMDpmttRTKRDvZfuvacZiBZXZUcaWmv9WkB7QDPebUBXKsB9vn279We3XabW",
  "key1": "36ziatA9CG7GCmg1to4uRjY4YHZo4P4fDwtWL8iTLi6JDJoMENEfhW5CWyCcVichxzgHM9bNJkmZCPMk1wBYd6Wk",
  "key2": "iq2jTF79hXP9DXJEqcVpBjHXmqN8ceyPm1hbDgKJK7DLWk4kGXkxfKqdExVDTdPP7JFNo5cCnwcRLkJkDpQr5o4",
  "key3": "Bxm3CjV9VAogRJXjasU6RYFmPibbLa7BDcF3BReE69XFBtXRXPNWXe8hPDoYtCWsGzvaKwtoccjcYUSHCoWo3dc",
  "key4": "4g7A7JMLNswipnZscrmQ46Si62ZuGZ5WVpC4sPFQ9deeLFiJWZgmh2474uQ1T7uAY4mWjBiZBjjocKse2g27u8ph",
  "key5": "4VFLSo9zexfRfFhJSgaS7JGrnhWVqGsmh4ReXoHoB84D1vBMo9Ja8J45i5LXdgSCx3dq4iasHa64gpNMjdRhD87A",
  "key6": "5sEKDSn1kdgvFpEwAMbDCqPaByT7J4Ba1SUZoHQYgqBo4STRwAoS2EQ97okPHB9cFBnRXsZVbb2BWwXQa5Z1hCZK",
  "key7": "4MnqWR7fVbMYKZdRVGEQ5A7ugUHeo4H3QjTZmGsvKs8jNGPuCAaBD9ah8UYR6QimXgNuUKK44Zb4XCM8h41niwKS",
  "key8": "638PpUKZsoMLts2ZNywrvvsMN7K9c1GSdavbBXyikkJhJE4ZXAzbhjLTbkoSz7wYVxdXDwtxtQenac9CYxYCyLz8",
  "key9": "3NRGNjU5unBrnZbcTz69g1udiy3vEuQ9bmJeCGB28Ufz5pbu7z8PixyNcqRKz4jjnjkQyVoZCcmPjLV4i275bUcf",
  "key10": "5YBMjXKSGV6xnyDoWu3GuhSHu3P83aGzs21Y15hqXqj2u8xSwqiPmjYahVSweE7N3NUAqDM9b25KmnuEzYwpEvKM",
  "key11": "4xo7rxxp4oXqepqmNXFoikmhJDvqHEyTiUyqL4ZWkeLKLGKBMYcAjum3EqepZmiiTQJRuCE4MMe55ozhHg13KRKq",
  "key12": "35GY19w3Ekt1brZhRF4kpmcXmCMDA2sYMgAb5fbacWRPSiqJVusmCZeDbyzngYL3HHLoqaz3eWFXUMZLhg9DWKYK",
  "key13": "4aELN2FSRxFFSKNfcwPf3av8PqbsdHpWUmcxN9T9iLuKgPHVxqMUmTAnBVeyq4mre6pvdE7kYAaQkZauiW7QsbEe",
  "key14": "5xRfTyrvxwNVVBHmFJTHy2J2mMWsSR3zyAxC5KPJu4ckETUSx4fPPaRAGdRFWEZfXy8vaXQJTKGfaU37Tk2KKXQu",
  "key15": "4aZwyGZ5RcpfSyEN54FtAUziUrwnj9r3WvWB1gt51m1J1iANDAS19Dy5vrrwxsdEzd3i68ZBsSCKnSLsPBEZcVL6",
  "key16": "66Wo3AnUvYGGvo9zx5q1vDat9g3eaDorQiEkX2bYLzELV8StXnciqBi5cBiWJgfxQ3KcMPnTRiEhmPgdndBxz3wc",
  "key17": "5hziAtBipkRe42AcGJv8v9fVGvPL5cGM1TBShCxedGuFJ2Lmq7LZ7Cyw4jCsR5KZWRzdahKGrZ3bd2XRodoFJmUH",
  "key18": "4QveHpLW14xc9KkaPnEvfT3t1R2edirFas6mqvptmSosnzajeZS95Lfge7HKM1vAmrRLc9xF1AebyxqBrt8kZK1y",
  "key19": "5vxfU9r1tRGsvk8CpjfFHVHy6wbmhwdBzpLeNNzT1PZS95WSvzeaMP2q9tCi94LEEhCak6BBv6FkTmjjXb7SMXvc",
  "key20": "kQSXjPEinDmDsQGLKrUtpmQJBzifbQ1c1gSZNoWaAHcB99kihbRXw9LTW5kxqUarhogoxMFkdEcm2y3tW9Fmxx5",
  "key21": "5LEcfsziAJY9gwabrfkmrUT3AsxwK34nJqtUGn9xMcfUvd4z9A3n3G2ar94MfJGvWLt2wNXcaDe6PSrNCvAWSBc3",
  "key22": "3kScFjwZmig6UCxgsgdrycn5QMCk4XrFrFy6L1XmrYxz47YtZVk7nE14omwBfJ4jmFUq8DwULLWgs4LxLWafCSXq",
  "key23": "2NgLmfqNBQbUW5HHD2P4daPVn4kPHfqfqoUR7pzRYSSUZwTphCyizMho5yTkP5xvEGJUudhKbhEMwJDXC5id3txC",
  "key24": "3hpLot2cQ3K7KtXayhQrAtzJ1uvLAvG1fm739haMWnEomV6AsMVjpm44TxDU8jZfLfwSe4PzhUHvHyBMryuCKVYy",
  "key25": "4caCC8Ttwbp78dbXSyMuhppJrpSdxhMjcfqaJsmRMj1ME5af7HQoheCBRBp5mYFRbfgXeZNEucddGmmuvFjwjddK",
  "key26": "FiLJpyp6QcMKmN7d24XxqTnJhWPAwRTKWb7SwASL5Ko5ekFD9GWJbPcoT9CqVuBrYdckSt68Y8o8ViCoKsbnkWN",
  "key27": "53NtsaRuVFvtH5XBkQXSPZyt5fFB7hPJv2teiv6Aw3AbMZ5df8jjgJ5q9sKHC9Sp3CX1mLXcuNqst5je1dTFXGi8",
  "key28": "4P47z2f6B9QRyMpbyPTvbZVwnrW4cQwiPthbA3TDok3zjkUZ5Z8TVpG7WP1K79JPtY6JBdtuX9zQaXRW7T61vecX",
  "key29": "5ELbUDkJLQF2dpDmTdP6D37AL4kAp9xJDAMqCTvEF7ZovD5XkYXmfErtbj7TPMVCPxGcrQKCre3fw3PMEL9y2adE",
  "key30": "2Z1GS8an3cVq6a5JCPQnViVcn3VXz8mhP7f5EjAz9eH7PppSP1SZhiY6Khnyqwn1uMHxqTYWmyX6fzXdNJbt6BvY",
  "key31": "2Yuhj6VGDp1Lea2YFYzuBo6yBx9Qtbc43DYYwc2BPhacLq3nZiqAxqUgDbtD9qHoiPbUyKSssK3K2icokNvDQZjD",
  "key32": "5czmZRAKqj3PRBniDYZ6qfmv7ooonGNK6buwobSJ2YbBDR1o8ByWnz8SufogAHemvpSatXzda74rbZVsGTwKBunc",
  "key33": "5HfvWhe6quobkVpKnQDrYR27fmZWQXpWpcpi4j6MEveLarW2pJGGcjwJqEDKJe7YjCRj9VY7LjGCaM9G4L7yKGmy",
  "key34": "5BrqSagEuo6z31F3xNnZsu5QkX37t1DAbBrgoXFamFoWBBoqMp6cSFfcPhY1zXqU6MvwAtbxTpgX2DFqMgwwDrm3",
  "key35": "4kbBsatwBYFQXuShfciVg3GXD9nBZ7Job5k1otc3uSP563KN9P4bbgGSxkpByJGxiLakGY8hykdyKsbLoQvCjACG",
  "key36": "3fk1gAkVB7TBRydFpTvtcWZ377XCyazu7twdxt68WvyqgFAxFZtBdzkvJ4WMA4LiwZhfE6DNKwcQyEv2RqjKXvLe",
  "key37": "3KTSbJLF6MK23qNSJXvhVf3Gn86iJg5C6KFfaLPyo2yqLjhpYS8tx8A6CU1pCRWqA8mqw6YfNfgaZsRHsdGkvJKS",
  "key38": "4JMmGsp9KfmMj39LPWRuUFnoEEMxt2Z5XNZbWCwqwYwigPDfbiqJVEYJ3q9VuvWRPGuDkZtq4FPznx7vEZrrZdNv",
  "key39": "4sn8zbj3ftK5g6GGCXmFtkJCAUzjUGEQrUgKynaRiSyEzScPGT2hJ6qziwuuxjZBBDeZEWZYirQrFPhwmYj6Rptw",
  "key40": "4HCq4imPTioSa9KWsQaqgGsb2Y5ffWv5f7UyjhhNsixrYvhhdexFqYntrzDArE8ECmErY6hZLwR4ty3CojTgTLvf",
  "key41": "4BbfPM4BWRs4xNZ2groPfQw2ve6CXkHdudeNbbP7E1LBcN5pHGQvYtL9pfqBX4JVqTSW8PNW6TdzodjAft4bxVzc",
  "key42": "24tS8LPhDY9XuqgSV4LDQGvVMkrq2LyxyssWYSAFYj7hy73KXRJEH9uMByXayi8UUCyEjGAvwbDaNi5cq9ToRNMs",
  "key43": "29DDQGKQ4wRnwuhEf4461tytrQfUPnpt7QE6HZsxHXLjaxcwY2fin6DA1pp5CKUWj24eQXWBF44E1dgHZS417Mx6",
  "key44": "5fkGnhySCeWm5GVQ5hrR31RWcSTaypggVNCVmCRGrmVB936FK5nMDNwz3peB5dSrZrH8SfnEXvoFVh8S5eKJVaDG",
  "key45": "3d4FYx6S399VpFAmZFxvw2u78cn4HjEbfqc9gS9znrVsq8aMaL6TgvhYr1nKcDkNg3EXkWg5YQXYStGZHSpGMmhx",
  "key46": "Br6bQmr7ABgLCiM7hrYaGsyQJYm3mquCFtpW976nuhWenYXeTGjGmYtSsTyXGcezYyuEhNYC6BPYak4WxYBkWtP"
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
