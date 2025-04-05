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
    "5wvLvxTGpDCrc48GxvkvfppTndQXi4VJzMWEckQAPzjkGfUhLLqmdf3h2RxS6mUxJ41tX5YLSpDhLPUicJQq3qwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EyAvVhWiqBmo8wZVipp8BJAsa6h1cvok76bSgY7xaxqZenCE4BpT2VdDkWgYJZ7JjqyJQ4MQnSBzogTVoZvfASy",
  "key1": "65n6LgTM4ke9EwAMiMpkdxYCbZxzepdjNbuX5WjSBCEYQSKDH4FJ5iFtXsGb1YJfrvZMkfXjz5x9KhFynSnWVz6M",
  "key2": "Jj8K1Nzi3kdR2yG4mHDANUKHRo3sWvv6S6Ujea7aKcpauokKRfxvVUc9hZxrByqJJaSjAawSh2LhyWKXHDDU9rF",
  "key3": "9X1ggeKhHTQtDwQteXFcJhYWo4xFibG7cVfAFqfWVcoos7YY7opaAYtP9EUDmNN8wpLwbBGQRCLnq5CGUi1S8WD",
  "key4": "BhYxVMQo6k4tbiEwv418aqcCjBv3q5TaT9jkuHRxCxxwvC57RxzvnaSKk68dBQmXJDEAkBoqvL4Rru6PAnTVfcH",
  "key5": "44WV1fih8dg4q6RNfQuG93eSzugaHmaiuB1ieqVSWoqtCuj4RnMTZKCs5efAvVQVYsjoqqXug2dv4jbMP4hT7RmY",
  "key6": "4hWNEh1syJHgTkX85RLdTSbMGCwJzEPuuANErioxdUs4V1QvKmR8fuihrwLsGbho2KCdA15tp7b5egQtHiLtMbMS",
  "key7": "3NDdb74kCL2KvkcCjmHA4ZXy6ipYMRci7eCSJsy1msZL2qvhZgtH429EaTJwAfx3ydwfmt7e8TKdoBSPKkkJ7feU",
  "key8": "5wFnrihm27Uyx2r6DkGLQVq6CGTabXB7mYnSnLWZccPgxQMc5Jvt5GXHSux1LeeLF3SzyF42XWp18ogXw2RrdFGJ",
  "key9": "3sN8voSmvVJrjkpFqjMDwDw9nGjdpQ35ir9sSm68PqmMr8cAE37Acxp4f1rwCURj1r4bd3aPJYu4baZHqJk4aZ8C",
  "key10": "5DR8he4y2tuVY24B99h5LwrbikR5gjkHpSJvRjrL83m2tgyVFSNMno2Xdmz69Rg72rtYKZ4ctEbtVzLXbwuGTEs7",
  "key11": "4Qh6fHnE9ngA3SkHLgqjp3L4puS4t2Gm4Vaf2zomjPsRf5VRYPyifnM5WzXKs9dFkPkMARNSBmPfJHMEmo6yxU2L",
  "key12": "4cAZmdoAh8PVz6VW7RYR2LbubyvuiByw12eRkXPXWbn3t3bZKb2kNkc6x5w3fE31G3h46rPNDjEjb5QScEteQcqW",
  "key13": "3mpwZZ3CnbYUXJz1Y35C2WwnKyfmewFMiGKqjN6jUSUjApHSaLqcakQbKZdbYcWKwTCHJfu5VBysza4SDZFprR71",
  "key14": "5q12cxjktaa7Qo6BMnULkak6TT67py8JtgFfvSrTnaBDi7YJ9mUWCsYEh2EgtAxRFRekYmNMoRYjC5aWVCbLYeKX",
  "key15": "44gREUc5sBwiaEx6C2uH6mJsantAdeTahoRB6eRSrvCrGdNuvyd2zZSRSj1kmr9JMEvf8VZvZXr1WWMQXf1hGvpt",
  "key16": "4hegqHb1Q2wF7uNZkc7AXB8yysD1tUvU6bSfb3FCmNHJof4pMPJBCrHxQouVv8LhWXcchBjQ1JWjLbdwhNtEDnH2",
  "key17": "3fKELEKHek3MzUUEgjyijeTEMBfAHjJi4tN9kbSG5sSNhJiMnaJ1NTwF1omcKkXKB2SHN2Wkz2vkVhMm8e4Um94R",
  "key18": "5kCsF7vBpB5w4v3KbVsRXM1ZR3ihMg1VsxHViJPM8uKtjuZG3q1xWxXVDT1zbEaFAUezecrnSYsMgaB2egAQC1WA",
  "key19": "5fZ5hsnW4uFhApYw1QeHFKNNvXjdjwC558RhHSjUnRrwjGRnQBNfLMb2sgk8hejn4hip9oXvcDeg9w1tpptNMBU8",
  "key20": "227HWwDGFF4GXJdvT1gb8bn1cMz7jkRAmzBaYxEG5WW7onsEbbqHY9y31vXcDTT2cAwHyFAcfK2Fj8kVvT1vJZsf",
  "key21": "i1cYaPcNsLzzQS9gFMMysL6HxhzLWeRfbGB4g2m5FxWWmeHnYCEdWpMJKmEKZ9nCQwsEc5jHXSoJYemc6Q3d3k1",
  "key22": "2EpEhnpnBFb76ARVBLpCYyCNnWhLpofLLq8RQAMftiwZWjGvWGopYqRBYV39TjgJSS7f5iY43M1DCHJeXQdTGgn7",
  "key23": "2xD9wnKkXkYdQesz5L5B6PxLFxJBdwd7kxfGYkBU1urUFU2Bqcv4BD6X5egjn5de612DKuEQtt5d6B1e4ePDZpcu",
  "key24": "2mA6n9WRQ2HKUsH7Kc5ZPRACPnLRw4fk9vP8F8Raz9uUWPHHmvFFWr77DyHcaUfjJYpwj9r5dos7nmeL9kTFihwJ",
  "key25": "2EtGqoq2ptGL9XjYq4r7B4ukjYAr3HMDD4SdGsPw3TN9mhWysrLjHeJJGHDdjHuQWicWJRSq1RYPD2Uu5rDShXLv",
  "key26": "y2vneNCpxkHCgPPHG3ZCAWQimq674DcJAKmzehyHQHAnsJnYTBZQE885PaBRxhEkZXdJ5wCkRtYCVKEQKJc6c5H",
  "key27": "u9PgpGjQSrnYtXchdSrCrv9A6DBmUD3reSmteZN37ah9SyMidtpKQF3iTxrq6PMZT9x15jVDSmYgwSzwSCisRtE",
  "key28": "4hUb7ZcJpwa3jyh7G7xNDfV4611ZpxZpdTtq1fqJfR3uCHgjx5yKyMH6LtfqHCfVGVyEP4awDDHijYozV5cWHL6R",
  "key29": "4qBTi5vx3LLWMMhnxddCGR4K3yzACSfLVPMTA9FUopyV5jsJo2Ct4qeetkkN7UkbM76kufUYzUoBcymfgsKRqdFE",
  "key30": "n2rameUeK5DVkBoUHcpxMP4FNz9JJRznWkwsB28KjhiTyepVijQcst7moxr3s84pHvSvWcun9GZ93GUTSPpgMmV",
  "key31": "5cBQHXLbjF1H3DBi7A1k7PvbDUWYaYcpwx1aFsseeHzYsiyM7u74AgRzBpoWb7FHhK31EZRJzZ5WQLZAfvVUYU6Z",
  "key32": "8G7oUWQ8xW7cVS9hKnT8PogEM1tbaGYSEBjyiftaccaovFto8mFFfffXri32vFDN2t1d4WorUeP6dnQUQTXVDub",
  "key33": "pGAKTraf9FA94SARbBB5EWxZgSfMjGmd8QssWVk3rMtscYzXYJsofg3FHfaKTEaidnpTyEn91PmHgwnyZW1UyjU",
  "key34": "2qXbG4D1pyXxagnbLHLyYwrAHrSXc2ox6mNbZAru7hRDJczF1KjwGMxuSGx6yn5c55BEShJAjLoAa83AsdF89nkG",
  "key35": "2p5qEQZWEn7N2eAEFtfi2b62HVGyPMe3o3VpKSqa1HibBgVwBm87M6jA75chQxiPKkRz7yvuLg2E6Mrq3pxSMQWP",
  "key36": "3FwC6LeA4jeU831rrRGuvhVCfYf983gspDnNAVk5EngcQneUqX51F2CUJmMbfR7p3ysgPSmbBMwJ6hspPEzPxLyr",
  "key37": "3hUfUpJV6Q5iwxp1fmoB4Y8eBtsQjPzsxmLHRjFdxQBj6HCYnM6RfEGgeeRqWEFHJoQPDL5n98LHrWXAk9RwKX7e",
  "key38": "3tz2bmWgXxkftgSj5EFjGbMS3akGuUvs4PWJJVAxA3TgM2JxFE3Xp7Vq3pXEX1D1fVqsgHY7p1qqFg6gb4Q9KLHD",
  "key39": "2CYscJ2ga6Z3m2LH8i1D6wCL6DJkbzicGPFwJ6dkDnmU7bmT8Bi6ZZVjwmnxgTmwUzJHa4vUw4TyZQgrQaCgE3iN",
  "key40": "4sspj6FUe1WHbwMsTEPzYawx7KnhFGXZQczT1BTBVMEfoSMrZWrqcEmD2MdPbZC46ZYHbdNKvQ4CeydJ4ekXYyW9",
  "key41": "5gFb8bXuybq6bXU5XJFNUtShV8En1UDZurjGfHvsXvsLqcvc9e9ZDdR9xjqeB1PmnmYhg2Y5n7Rf3onaYVGKpdMP"
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
