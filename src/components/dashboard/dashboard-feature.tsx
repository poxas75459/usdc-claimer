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
    "5CnFpPS591fHvuQYdb6CHvsqeuY6Q6sZqLkYFnPNk1sP1q1iwR8BjdXRTC3vr5HJCFThZZhEviHfBjNTrg9r8nbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQf4MBpijGLCejA9BEdHLuMnghAeneNTitjUDQyEq9ChM5WnQwsYYUi7UT8qPWnEC2KV42no9rBJLtVZN29irUS",
  "key1": "34MawNL3gRBuzWPZWGnX6Vvv5YE31j6pCrVusj1rnEQjd6E6eV4gT8cWNfEjQFjRv2k7zjriFN3sWJgM3E9gqq2B",
  "key2": "5C7EtPoRYDmtkYyFsRZYMKWiScqgfwtVwiPZFEXXNY5FKpRa6aJd7rBSWk3CYZwcRpswhwfkbcCKjdtZabHfqgES",
  "key3": "44o269Dh2WNnBEminW1n52chbHiyqNZdnLsLB3y6KWPH5FFBn3t7eRkwnNkPWhPD1HhmFWbPxKWA4N1G6KRZXmvP",
  "key4": "v3BDCigY7D6jjc4MrnYXf5HmgoCYmoaYJYVPQAcCMmM5BiJRekX3xH3q9JTTwzYTwgSqKEDMv8fwcR7rQS7SiCu",
  "key5": "5m66jPoFpXJoT9jCEUttzN7Xc4nutRj2Uyj1nS14XPvcqDpuwSsHVrRaBFyBK4JxQafFKkWHmHxS7ZYJXL6oq6jN",
  "key6": "KotKJ2AHYX7dwiEphGwUT6GPHX2rm4b2N7iKkUHcSSDULcBEqDAL9gnbDJF2X8jzzUGZnNbbX9vJ8B1VGpBxhzZ",
  "key7": "5etp5HoEViHnWLqmmDDC7dB6kbFZ8QvrzQD4Kxyi2mw7xt8fy9k5X9ihX2imevRLriPEWTtgSoBzoWSqCqkcVagb",
  "key8": "jSBkhfejQHTgohGnos2CzTWZ6D66JaS8ABHmKTqNzUgXTWxTb1vGrt3WX4pPwaYYBeT1qiRmPsj34ntb14ak8xM",
  "key9": "2HRJa593cVgH2DGa8MRBrDHcij3qFUfnRU3emfTcFE4ix9XjEGgAmdWh2XSUwCGSMXvLYrQYZS6vHA3WjK2k53ti",
  "key10": "4duDsxdW4y643q8iWgvKnCjvLJkubWqoyeStsKp9uaT22WcBBL9qM6FsTYVULnkHazACakG44K8H24hNhGYeP4eR",
  "key11": "4Dmi6gmTHCUBn5uhunDcp4yojyAW1ekyBn7y3rL3a6nQRzTvhZBrhUxiyQGiTfJPDpCxvrsxcTN1cYQXux9mMGvW",
  "key12": "4rW4TDauyq88j4ceknnpeaw4eyLCim5DxmDCRhS8pAeNjb3kem1gKjL5pMNM95D1HqK4uvg62WjDHi7M9JNZVQdH",
  "key13": "4KNGCs3EZ2J6aHWyn1vxEi9hLexvrtxdScmWnPADvkhpArQ2wjocQQLEizSkHKuGhZ6ypw5DRerTtjrQsRaPf3yg",
  "key14": "3M6c38rZp7ZQG7DFhKYj9EsRypicRDUCms81DGDHDGew5HP6u7yqywEpTYrZxJSKHZ3uyXe6gzoXtfcFPhuCtsaH",
  "key15": "5bhtTY1YVNF7vi89XnPze96UTXYwfy4aXbrqsobAWNapQ8uj9QFz8yZLLp8RvRWt53XxFbEsBiyE9TZ3r8yfaxYK",
  "key16": "4NSBfuYrtyucUwykfcVzJKhD1qwJvTmZRbQWhp8N8kREaXhKguc4Yd5y8AMssyWWXCWCCCJemmwfzZ49E4hHNx7j",
  "key17": "2Rv47zQrpXy2UAgSS8UeG4neXBusiPreLgu3gR2oWfHYx5T3gDwGsbC8bDLMmd2XevuS6QT9Au5ixLaG3gcELjwm",
  "key18": "51meRQXi1Bp2qjUrHVhnwNVWxtPnRFbuBB4ZdwAgoRxcCRgbdVVuq6ojLWXnBNDbLam28gNqLZkJV96MKYsNLpU",
  "key19": "4L61T5UxmXUZQTPjfqThXLMtP9g4WUUGr1xCdch2ARJRna1iXjhvGRpm3FJUgZW9qvsNisQAhAPzmRcuEXxsgKSm",
  "key20": "45M7RXa8uSwrYCzuRMdfzbddP3rQGV3GhhyC6Zhbn8mH7XboB3okC8uNDuYhN4JU2CHFvUrzpGjjGoc5HSC1gUms",
  "key21": "XTHSauhbvrkX5xpK4n9E3TLyANj37777hwXb6yAEiJvsN3Tjjjn1eVj9723zXt4An3pANgdxGVkZdCRDGuXfj8f",
  "key22": "Td3v3nykojM3cNgxC5uBhrx2VKHdzZSYMvuV6ZDKgF88z1Cnz1JFuTKyc9LgneyR4QNxR2AmekT8GN5iQtGwMfb",
  "key23": "5yhfHLvkhbT5WJRzTc3hEmzGdgsxSdpiKziJcCWZNfhBzQAUx3uhCHrT3De3dZegr58qJtE3wNn3TRgnHKQ2fbsN",
  "key24": "2KrEy4cHg3kM1wzxsX4b8V9Y27piSjiZ2c5bEaZJfpzfceU3rvoxugVQAx7fNqUtXHcwBTLiyC8E3Pnv1K4MJRhN",
  "key25": "4AHVU18SwcfbuL3idyjYRYCLXkVZ4JgnzASezYhNCMwN3hjqU2G3iSxLiYKrFboV3eA3rgmYfQQzHw32eKzyphWc",
  "key26": "3gsccAyh2TzwDkbdC9XtX2cYc5QQo8MBcR4wNyCsdj7hNR8U5e2cyF55cYURr8gagUuVCUfQEyDF4S3TQXQc4w7S",
  "key27": "53HSqgkUf5xJzo8pJopYAhSWDoqCEQty5xXW29ePC6MUSwLwH1SMechSMUrrJG27c9WvvCCjGxkRE75kmnti5sfk",
  "key28": "2wqWqQBbyWZmJPVvJS9oP5u4T2igsfVeDv9piWkWRULJe9K513y8MXQVpAdGvtpghu3o7DVBiYLoWxEYsb975UVx",
  "key29": "25wAScL74aiXUcMfCULwT6yzGt8LY53GzLgVZcDYLUcMdRDMH2dPzd2KHjx757aoGHBQcdxaA6EVetj7FgKfr9cS",
  "key30": "SLE1LAXdnXisXW6Ws6S6Prm5jGgGHiMHE6MsiTzfTuPuGV2EmDkrVo45369cyPbzAukN9fvzJ7GN1DHADBJLXNr",
  "key31": "4UBSuZwoNQ1ScTAD4vaCSgoREkfnwg6SEBdsbZwySWn8N8TgoTtSwqBbNGMmu55ZYTyXfxjCHsqRghwedJ4HL8fm",
  "key32": "VJFmnxeAAMsZGDNnVPMH9zNCJqCbAysoWAxmTcw7FjhFi2YwMJLGnCwFqfwKdYjT5BnLgNdPnoQVgUzPPciLPVV",
  "key33": "2gh18QNBwVYyiGa93GPqVcck5JyXyk5bXrAhGc7uKvnh5kPy86YbzWPu467aJwgKjdZtb2LHUGhdiBuKs8hc9ZCS",
  "key34": "447BTCoPxDh6RRXG5kApsbRkBSUXV4ci8s6rPZN7dDxKF5TTjWxARLTvteriDdXuVGzWjub7jUDzYLQFm8XkzX13",
  "key35": "49efuNfrPExWHb3ab4gjoBczB9PNGz8XM5poAuCfH6GVpgPGK9bLhRzotvgn1EDp57GZwDhCSRGVpJCyc3bkjxTs",
  "key36": "42MU93jgVp4GRaShXPoR9jQEg3Xpc81ti6thMueDs1i9Z1KrTpWMTATeZ7b2mHC25MFLhLofFtgXXzPzpxzCW6bV",
  "key37": "3YKLA45ww11tDzqsz8EZoS2vgNj2DGneGA7dq2LqvcEJx4LfFF8W3gxbMEcFvL7Go87wBpfsodCvh4ePA7FQMbtm",
  "key38": "2FyWaTZisyhreTUUF76HS3m3Tm3zvPj1tgwUjr5pYBU1MCLkkBDFyVUK7PwNhURpPhdzk7e9JBvgGUbfHMdKeyMx",
  "key39": "eNxnHCuLwNZfNb1uN4soMPNwiycjJG9RHCGykSWDKV6HSFw5cJwzVs3KtK4ED7AzdmrXD8GJkPxLGbHQTkLXz1F",
  "key40": "2rhTMg9wxeayRAmX79gaiXGrTruHYThGmkmrGQaprPfhd7aEU6UEQG8crqsAMrHH24KJT7WLEeaT2yFzX9TQEG6m",
  "key41": "5r6VdWD51vPLX8joRZM2a8jwXhFWJD5K9aZh3axzzM9fon53Ryv7sqT2Wq8sgFmQRMokZsxh89NayzDkBQXg2KzK",
  "key42": "3jKmcwh73sLXGbGgyHymLJMBFxpLynKucecJMVHqfxJe9TZPcqvZZuAF9KNjVohetxoGUQpf2JCPSiXy9UZJ4JLc",
  "key43": "49BzLXjiN2oRvX8d78PWYkPMGkBb8pZ2nHWT7RYi6fdtmHEUfJHW68M5P3YTMVZrJJKiDWoyAjGJxKUjzGcggn76",
  "key44": "dUGWE4hw1YP8tHUCSgt6etWFUZ7AZDwW78TByu7RWroNsxraFWpKNKEfT2pTDv1xRdxHQeza5pwNNJdmuArnZyX",
  "key45": "5yNSQjpMeMiJXJmo43phjUNqaZYGGoMDyPcxJkvrjHAjfyyDHXcmShvR7Tcy9abCVhuw3Wgu9f1vHyAeKoqsewLW",
  "key46": "3UBiMDv561ECUBW1Ftdbh6G613CgG7wPVpTfYqKeps5TMWygnmK2aryr9mPTVC4wymBsC1wkacATg61KuavgLSxp",
  "key47": "2Ayi63wYrkPJSCsM4iUzhQm8tthMyzEXzkkVr8zvdQ7Z9TqhQVFmEsUrdxZFLUpB3tWVMTCMxwb1ymoEELGpomFd",
  "key48": "NFS2UqwZaw6kbw61mduLaBVskSCDGBFAnPKk4t4YHB3j4QxPCWbin1WzxQeVxYoPMMnVFWBPoAg61iW4QHPe895"
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
