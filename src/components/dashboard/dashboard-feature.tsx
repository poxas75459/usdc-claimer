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
    "3QQoT42eAETiusSDQvE5d2fqEaGZJ2rZ7Bx9Rc3fnmDooC5b3bLhb9hZRh8KjaftzTVjmvmsUhcpfvSpG7aUqS18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SL15fV8293zeTf3vdvvUu2tJhDLP3Kmco6B8uGZ5n6GJ13inuVU1poWmXqBsSsGKDRtWHwKqXEz3qTqPJVQZv7t",
  "key1": "4AWDEA4b5HPgzZ7h3xULxXzCEnAbCHwEinii6cLcAU1cuA6HsVkLdHVGN9TPrcVLKgbR7Erb8J7uNDveox96uPGq",
  "key2": "2mE3z5FjixTS67ARdwfSY1cS6QDyK2d5xqULWQ9zfbDdFGodeTFZ98Dohs3p3gkDXzn64MFoZNHGHD8EjcNK8ywr",
  "key3": "41B4tPJThBgfFbs6zBfc7pAvVmafHLNnmJqPpjB7pfBZNzJ7KbZP4rT6b2pNwvN2xsFQhmGwE8yYBCiCaLZy6yp7",
  "key4": "44oKNkEab928SfyCu5ZQP7vtQZVzUcUUitg1rQwBUofN43CQf9oCE5y4g7dX2gKZ3uqS5PdXPYqkn6PkLMiK3y5L",
  "key5": "44MHi66pQLxviLp6s3xGxsfzeUFWGKYD2X1GwUNVWew7zDrF7WEJWgZ9mhCNd6Wb9RsHDvp51zfWgxGwevjGKsWM",
  "key6": "24MvgUjE3pKX2cZbmpW7tjVj1DjtSFxfpZ6YEMZPhY5JkBJHJq8ZnMtf5NoCw3X2a6iJx5zmzqziUbqKfagcLzVr",
  "key7": "24Tgd1HzhMXfaDqh5HVEVyYqwBRrYUzhK9Ti7Ri5Lo57Rg9H56vpBS3k2PLFXuwAuuiLZVCk4mBcRuvmHfgzVdWj",
  "key8": "3h3z9GY2gZYrtHnYUFCcVW3Y5WPfKWsn7Gk7TvouYHpDwicbLfQjqsHEQXLuHQw7wcwwV6HrJ8D6yMWSbN9RBE1N",
  "key9": "4FULwKr5FXSaknCvg34YvQzTXPFMy8N4nmghZZzgdvxVHQp2F1JmJc1H9uX1aYpVfYqSYvcv4jNpm4SndfdWDmRa",
  "key10": "5u24YttBF72BBiAZXZR9JJKNhJ7uBmcF3xVW7HFPDgrEpbnQHHabFbqtTfMGwZjg54sMqi6vnMMJuwZQv7xT9PGZ",
  "key11": "4QDzabzdqU6mgf8CJS1wGkLHfZmT4CvGx3gzLvfoxgi5ss9crsckxjBR5zVtK7uiefpZSRUzPUMnNLQV6FuQwxQT",
  "key12": "qeeWkDMopmzRg72Ptd4PLrmkPJK1cBvi8SoW9r1ezrbHPZhNM9CSdQgi1ZHNaxApkR9KhXo8QnQBaXJCxMLhHMw",
  "key13": "2Ls4y1Q13maRKUg8vzyPJabYB5jYJ4TsD43w1DVAWbKc85Xt9B9Z4NEuEo9bgAn2Cs8m8Md8E5iqCtEkDCKF9spu",
  "key14": "3DE6P33gt1w5u1eRcK4xqXAoerQgrXMc7NJkxTrbX3tNbonpmN3CCanMLWj7cRp6YBLsmorguHTWwTkr1a1YRrXy",
  "key15": "5w9QuZ1KwtYPuFVYCL66hRH8ZrqCF6JCD4Yf3zHpQzVDziHyRo16eBkGE4AaC5J2cVJ12UYgDRy5XTXV6nCrwuXY",
  "key16": "4BkYARLxi63kVQBhehd6LvvSKumkMXBVmPX8utXBEFmWzXgEejP1vqy9WjWe4uiCQaqpsGkZUBrVeSazakW5oRtX",
  "key17": "4n2NaAkCYMubB1QCU3uDvC5g5rXUqEQNHJnhXyPuubMBDsswznhRBz6D55UtnfkJWjuHtscbTYuvHfJKbZKz7pEm",
  "key18": "3fCsHLm1r5wP2v2DYiDzFcLr23cJ6T1WTNtZZ9WeBdxJuC51JK5fgmDPAc4tovbxn534UCcis8yHFZ5ZrxPzxktK",
  "key19": "4sBkryUJXpa8V8tRJNzMogDybDzXnn3KeFGZEksAyGu6ktLXorNEa18qGnnXrUu6wLBtHNKLKM5jVNV2jXx3FeAF",
  "key20": "zBC7kCDaq1gFEBkwCeApmQ5v9kqPAehZaNoogspSdfanMzgm9C1j1umzLNV1aESCePXYbGGcgZkLj9Q7NdkWSyj",
  "key21": "5bF2GdTnDWtw9Q3fjHeT2WZEgdgpC9CFuTyKJG3nqL4N4HisiykYXFMq6gHYFa8pneq2LTkzZjsmteifLXu5BAxJ",
  "key22": "4fQfvLCXnyHnc2Huy1wUiRHwm35bDRiPLGgKXihoV6q7kfCcirsZw9nGwDeMCDWtw57f2uKVefkgsXA1hhCV2w4x",
  "key23": "2Db8wLu2JR9JM5iZnA8VPScxhwCQp6ZV1WW8QNanN8zFmA54FciLty7knYa4c3y5oqbaARrUKgBPUav2NQQ5qMUd",
  "key24": "5PzwzGP3bg5cjyUri9gp7a8Dg5MQHmDD9kfVgAt8Ycx4343zcNN5ajd6hpQCfWmVDXfdbKBMzobVztvEFXKLq4uS",
  "key25": "3ffNvnwcJHh2oao2aMJHU9g9Y5f2AHkzywShYNzqWNUhPwtVxNfeYVfneE1fSQAY4Dr6gMaCtCW2iB1FfwfnhwsC",
  "key26": "26XvfJfD8i5KW9xBGn5a1YdAGq1GgEtzGHdaA4h8mum31HSzdw1AGhc38bpS8RjiFata7UKPoxMFF7R7aPnM8C3b",
  "key27": "34FMPcGAzBYzsQMYnUADxe8efD6WVnh9kxjwGUakhsHh5CK84xa1GxhoC3xBf7aUFDqBybkiUJ1B7MPHdH8wKCxt",
  "key28": "52Tpqhaf9QFHccnULi9wWvtM77Rg7GYzzK1kwgHxkqHmV2mpCmrqJdxXBCoqLAphSaydngjmDx5k7AnkZ1e94pGe",
  "key29": "3NVNKUhyrndFULf3fFtuW3hmHfmsA7VTnNkcEtrQuHYBdX9Krhkvmo2mGENBCBHWth3yaVCzaenQVWUdtFWMFseH",
  "key30": "2amPqYGRdhNwQaRzEE7zH7wmwEf3p9aNgD9SQBdPwYQeZYaba1g2Z6PMwbtcXvsbjPrNX5p8QptJiu2Ecq1TxWoD",
  "key31": "2aStied9te2MfwWgoe6jPwyBvocUKsU2aHzbeRmaquHELhE8E9KDuvvgUHPbZ2SWjsrCq8jfoQh2egeWLN7yRfxi",
  "key32": "4f2jddFHESnfmE7kAmBjF4DVELW8yJv9TwVzRXRBxXEz3E59qrkuiW6oqrquNpK7N3ZfyfU63vCxW2MmdfKeuM6z",
  "key33": "2WVaBpdwLDypczddyjMy6o8tC6K2prmwXc2N1bCP2ZGfrrjNF3y9XU1qBBxpwq8DTE36KvCCtgbwtbSrrtff2Ggt",
  "key34": "5NgG5hDLTuM4bqLR7Gm3acA92jQ1yV9k4wvSDDvGf4SFD5MoQhsRH9nTHQS4F5H2Xo6oUSp3biaZLW9d1oZ9ApjQ",
  "key35": "26GjVRF3ucKA7AeNV8LKUYhmu9RW3YiSuQKvc1qaNEmMk6d3PEcn2RNKryJMknyTiuCMQHGCbdotuWBwFDbgfVB8",
  "key36": "64ZKtUHLNXVy87nMTvz3wNN43Drcm5o4ZneFaRcq3ZDwojGVe1QCFthT16je3jszRaeFmSjS8Mk5hyLSvxb15Hyk",
  "key37": "25nrSdvrGqj7pxVLeJLEmxMrqzzLDYkchuD9E2XAuQokwxJ47ZLbNWNhVjxUZtJmWPbdZWr7A7FJsvDTjPidv9KF",
  "key38": "4ooDULHyEb1CMu4uBRmgh7QNdaRFJHDnNx9jhqMwHz4X5w3FTbmNtsmrMRDdzpZ3GnpFDVFtMp5jcH4njRaoH5gk",
  "key39": "yuLtu4hTpfjeB8nCedrQrbVRpEsMxJdmTfXaQ8cwEAyD3jjDGB8miPum8HteVgG1xrMdK41spwVa8XbjS9oXw9Z",
  "key40": "5xQgqbyq4r5FjyuwFCZ6kqb6Gwc4jp5x5XYxqaNajLW87zybcP8kNUSPxpGqDKfDUsWawAvdPxiupg1Gtv8ejDLU",
  "key41": "5QXGKcCJsy2sSAZocF9czr6e15sDqdz29eoh8uC2YnCR8tbdrBbSss3AXNZ9qLGctmGeb2ySFqxjrwNG5y9xi1g6",
  "key42": "5qGkondWB3Ehp3v6by29uJ15hRh4H9VWZ4TsZKUdBZLQ5rXhnd9hijGXrY3iq4vKW84jYcLxN8mEvqGyzB1tvpWa",
  "key43": "4hNuBxg7gUbcvT8upEyDAnv8SCK1REbTXJCnGDBXuNq6R1RafZjD9k2yeks88Zuu3iyboiNFja3njZ78shUQqcWp",
  "key44": "5Cp4JtVeyQ9eU48iRomFxGQpMKoGFPPyFhNmxn5in7udUdCYLaepXFmoMSdMLd11C7i1rD6tvWtHweSYnP2LMm5",
  "key45": "JzUKwabuqNtFmFmJq7QFVFViV2zrzsPfPJpso8sztRDkjkUJyrddXdoBbJiruRoBGgH45tCfFDKfQZVrR3nBepb",
  "key46": "2CMhUAu2fSXPbx1KxpEZX7tEKF7TWepdVEKeRn4KS6VwgPg5S5ofJneqU4ahuWZVQcK8zee6iCJ3FkutQT5q53BF",
  "key47": "v69Pf3MVdVcVTN7ZmCfUzLiHqNviBE7B39mPN8td42iWnNTmWd9qCh4MHXxRS5K2cFLoeRJALvP2GuWiGaVYAuT",
  "key48": "4cWQh8Y271jFswitnwSRRHvZwg5LttXUYX7zfQ35GqAcxru8bo4dLUM5HavDPBRSkkW6hYpsAgKK6m2DetP4yom9"
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
