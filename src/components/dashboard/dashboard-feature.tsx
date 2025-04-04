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
    "XiBUsLLxTeMUjiBEQtvV6WkBceQXSZg9FywnwkuyPsLsuzhQFN7Xs4TNNuQLaU6kSvapvrpmvuwwCuvXpQzTaJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p248MjFEDpDThEgp1Sfn6Ku5qC9c5BwUfN7cPWox6uvPfdRpMR6QSDNu2hgF9EcSpZgobCLMMLQB3boS7F9pv2j",
  "key1": "5piSqJuHeLDX2PSWmvJ39L2GCEdai5HN6PjdCsUbcFpMstmxGAbHbzPp3gADFi5YvjN7HaYFSPHVumP9YxygEBkA",
  "key2": "2yWYHng1sk4au37EhouxV2F1FyVerFtLYDPBwwh66XvhGtieNTCnWoDe3vC2UJPhbdWxYNt4gReGWNmCorairPLH",
  "key3": "5UM8o29hMMJnu9zzJWyN8zw8g7gZSAQNgLcMmHAtVNUDPBxxW6ZCXR85tw8SW4jXaF8YKZmWV3vsg7cVJNfQKRrm",
  "key4": "5P1SxZKqB884K5cetpyfGa48hSg4Y4EyBQvXHp2VJsFwC2ETN65beoRdRPagpNVbZVnWFxCu7BTq6CEuVvD6WXTC",
  "key5": "2K3JGSFZwHBk14M8WLmjqrBdqB452oFpEQ2uQzgQLAW9jKqXP8KqZmkRbzRA4BirbSfuTbLDdsqGXjcJSp4S9Nrf",
  "key6": "4qMQcWQkzzxttru13gsjw3ih9sStTZ5UfRvhFnWwbEH9Nqm5v8CVpWtsG3ZpcCcCNp25hgY6mRpxUFyZqEFRJJ48",
  "key7": "22tkpi2cktgYJBmzRbc8ZX2xboDyS5SG35a3mFM3N7gQySHmNjZBDmhqe4Wg1s57GmPdtS31rQ9B6eett8v5i3rR",
  "key8": "48aXjqdp7KzkT2U2scZjhJJ5k11M773tReH9QhUvRDv1GuxmmAAJANYGPuUBbEDcCkT63jcj5DkRwkpYi6CdC9X",
  "key9": "2VHivVwSqssVFj9xBcancjoi3hzZF96Qnm9UwSHWtTbEe1ndisfc6aMZTZrKSwpQF3eHKYjNd8Ls2bYMct5J2GsR",
  "key10": "645XfxybUP8yEwsbqoAz4gXUrZmnm6ryiXQ7JRiwpoiWiYLtTgvBBUxKS919bEMH3H7CSfShokAiVZuMUZURCyDs",
  "key11": "422ZzNRH3G6nMerX6gmm62tYF6JAdLw9wnWDGDECNHR54bDXPfxLyGnxV34TxrFXYQxKHgeSHViCLWK4Gj78eZ32",
  "key12": "3GfH7kxtdpEiRCHUc5fi9EoYYaJkYJAzUBWs2CnuzghNUEQHCQEjGbzAVqY2mKzC6XwAmicSH76cfouyPjPXtv59",
  "key13": "25jBiXkKdXRuXmMZNEQaJ5nzJ2MsbFnkvRuDgkQMwBLdTDsmH1EgUFx4rFxHpcRj2mNhJiNtmYjqrnY6SM2DBYBr",
  "key14": "4F3TVvjCch2jJdoWscJxmRGAponifHci8wLfbwXe9v1grSEiFjRBfa4LzX55pofdbZDWg1s5Ev2BM8GxY9DWYhgh",
  "key15": "MTK36aRMWrYdX1JCCnwjRamtjgjE97m18cdeEF5RSjUetJPBULK3eADUAUsMDBN2RRXmzZ2Ai1EKuKxWzwPZD8J",
  "key16": "2zfumAXDe5hQRe1Su5Lk1Brw9REsVovGrvZBbLthgMoD1rgmt7uszh81skZ8hMZEeF8FW1bHWzosqZnMAT769vGJ",
  "key17": "2NLz21FbTweHgo1nxYJoEc4a5C8mBwVooCEA86pskeRnXJoMDy1NZ2XbWieQRUZQvYe9EVjpscGnxgQCEpeGTr41",
  "key18": "2eZqUkM5JLcPZbAay4MMqmX8GYFpbEYCWpHtGzRniz9H2xdNbbtYeNhT433kVaqaJ4pmZHq5FeqoKPbnNJvJfTJj",
  "key19": "u34UuGyd3N22hs14q88LxJn5SgTcJxT6xkxRWaPGLAfLAnFKXJqYxvZ2MS47Ja7chN3NGGkiaMeKERK1fC4TMki",
  "key20": "pBEZyjgUp9Kz2xhMAz41MqALeBJY9ToZhTFBAV4z7R1rvqCEKFsgBVKyrEKnZyEgwXNQQDcGixZEaehqya2v238",
  "key21": "3FRdrhJqKmBeuvN1WS5UkFF3xBzdTEsJ6k8xLYmBxa3m9Th9wgcJqhj4tQyCvAuEMdxpiC6f6DV5GMsbiefCT3AH",
  "key22": "4kGjxQVXJeu49Jx5aSzyA8JoNW71RGc3G5j57bzouADxcr4xfetBMF7Z9yCj7Hh629nRb9GV3PqArLpZ4i6m9MrU",
  "key23": "5ioVVPTtqSijwNUB39vYUsRTLUQEwUuxXooBjCMbGiJhmUTe2pZkpLGPX1SuaNqJaWoMoDzQvZSQF9hLNx7wbCLy",
  "key24": "419NtYRfU2UuYN82sNjNUPLG8QwiuM7XwGPKUxdadcfsJPaXySVPBkHccnE2SCuLRaYjqmHc8GL2GEGFn4SicLN4",
  "key25": "2ZRUvxGN4nogwchc5NjcEX4jG6pZdpe2QYudzhvZXMRVSfZAyxWrRXKT2Z7om6BScf56AXkwZysE9nwVmi6dxYsv",
  "key26": "21mrF5PYPGjVFcw9CgPrkZBzJpabdj5pZHXwGZorFsfnz9ZqfjAs7HmFGWLRB8ZTu2f8xsADYqbWjZFp1Ur3S2PC",
  "key27": "2hhQXsYVwA3oDw3LNK5LJKMNYtSowbAhy7CodmRyPvMVtsqyctgoonhk7gu4Rce2CZ5gp996ADnBq6pDFkRDgfRZ",
  "key28": "2iZRL8gJGmK4FdkHxBWAoiy51FyHLhvA4HbwhAGofzwmT2ChCDXjyJwMyPpYhSZB8U23QDFuFpJmiGcCKvCezVZp",
  "key29": "3M2V1tsCGYV6QCBBF6MNazCfWQLitgcP5LzSCBDpZqwe9WNJsPmimMtoQ9HNZjkjCZJAbzyTzPuekWCCR9jFdzsi",
  "key30": "5Chxoq1S4RgJfKQeqAWH9M9HfryAqfARW7fkgiqmWypG1b3xdHNwkP2XMS6Gb7s8zoCksHThMBvt6DdozYYuf6Jb",
  "key31": "E1aXVfyDCeZMDWjYP7ZdQ6HCQ8YUjmFZtM5J2X4dY9L3nrHd9NZA8Vz44YkKTM91s8bq6JxP4m1XF5MaTXReSNw",
  "key32": "2j7RU4jZHsCyRkKsZvSN2t9YgXG5V8iFCTS9oJbvFFJC6ak1aTo69kDzTZJ98WrRQKY9FhDoMQetRTagRYsSf5GQ",
  "key33": "3Bpv8VYB1AqqZYQtC8TNn87uELWaCb8NTBEk2zdbVCf12bLBee2yC5WxsPiC2eWUtae6NntJMKgBH9ts3YNbtCF1",
  "key34": "5uRG8TDN6MpTrUZTLAbthguLSSXpwwtMNN3fqFdTbZJou3GC7NMF9Vwkgk5zUzTzxuNGZha6iCWx4wRZWu5jMSyy",
  "key35": "64fLmWuUYYDd9rRLUSvAtzRKQNYgFYaeCpViskYo4EaPRxmVYMboAxjhQ7sXAQPstKWhAqoHBWiE3voiTqJApzVK",
  "key36": "3syMBZuya7cCZQ9mnVuTaf1BRUaeKic8Z4GAckFovtVnEdCbdzVfPsbBpa1cnsD1XjqxNGFyRNLbYBrDsYjtqD8E",
  "key37": "3L6stNVqfTkXTFiJFCUdAwn34CuBAYef1AcNo4j7vaf77X2ZjCUJbVKgdowc5kt15ai2XhB6E2GDzH4y7rgY4S52",
  "key38": "5SPmdsNkLW79fDdKjkdivRpiiatPVpJtKA1gqk4bWiaVdSxKD5XfvPSTugXzWTUpF7Rg7qWZoQGNnwQXKZZjwkTE",
  "key39": "2qJ3KpS86RajWJvWdt6N2raeJPtw1uYQKmvwqWQoELXSAqnjfyKAHWGtBbXAQs7cRZDJPHLkD2waBc1LYMRgBNM8",
  "key40": "44jfd6rvbrKzd8VjGuDLgZsErDgixcXn4EX8ubLu9frEG9obqPqFDNH2B6ETvDbSJ8cGV6TsqfYSpeVCLtBrwjTT",
  "key41": "469neqdvGzbvbMENm7vT693KwhRBkwFrkKpUdQMkwuFBKp5jtH62uFvCVHedPYAgzmL5h3RaGYe6Yyj5r4wXmUJq",
  "key42": "43iqqaEdePG4eWoio6BjbafxH27xFcpNZySwjrqKcSdzPUQnTknYh445KiT9U5rJ7o3rx9gPDkvxcV5bSy8PdChb"
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
