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
    "f1A42y1tKM917S5kFosVtN7Gbe84PVXvSbdEPv44eTpnoXVuBACM23NA2DDuvCWqvtNFvESszWo2TvZb8ogEUNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZofU1QmmTvPgY1mdcff259VyJvjtEiWXKT3FCPURevFDnAKs51taxPGWFNWnRmVp2mHdvNPusbLxEc5Hq3CvAo",
  "key1": "3uZE8LXuYKrHQN8JZvZnU8LpxwNRbJAUJdm9SA2kEUq9Deg5EGPQQ6HdAZCcrJdHANzKWmAv93bMLuBGdxmRMHAS",
  "key2": "4RcFmaMLo4dchLn3FkHtXw1JSLQ9FKFcmomFzNgYPYrFCP8p4odcEoy6fxLQWz5kEG26DqqikZyPrYVjZaLRyQRn",
  "key3": "2CJ5qeiWThjotPchW6fb5WdvoowcgjWyu1FNKN8AXwmtB1CCy4pGWPv7Hcdvmni6VBWe1pPnzave3ctHnhQkpUCx",
  "key4": "4j9CTwCe3M4QuVNi42GmyvBW5GXpSnjzJN6Fmmx5Hn3DbLApctiHbpqAekrrDte7zwzP3hpt1Mc7V5wvMdngxkU4",
  "key5": "591SB8FsgVccxoo2nRVqzn6sC4Cgtj6VZCVVHg2gskdvVNqByHphV3m3JzEnpXqBc7yHHoKn9JN6odYiV97KVoqZ",
  "key6": "3GGmWytw1obXwHoy9gpK3pmZCV5fpKmHb52enn4avCYxXeBb7wJtPUefXJ9FKDgzkyEwFZXdyjbWRmtQNh6QxHBc",
  "key7": "3KStGH9rh9d8TtcaVw9RyZkHp6Wqud5JCGUiGCj2e1v1SRR3y2DvxPB6DgR4kYf7WkUDB29HwiXYa9x2wcWh7bBK",
  "key8": "3WH3LVtMLABBteTbdq2yuRMrvX5m4YNCV5aeqx8uJAzzEmJn3jqne9Q4iJjuWDsUCchbw2JwKN7cY9KEvFVxiSd6",
  "key9": "4Mugt3SD5bLWB1kjbMxS919tfUhuAF1t1Hx4SVFaNiMrEPvcLhkPxixrSS47yoCnBjXUypWfvooZmW7Hb3bN8Bnb",
  "key10": "2VMpfeYApw7JyVuKJfE8VQkKAX8NdWr4Y5PZ2jWWizifZwuC8Yes1CLRndjacEpjbVY68KoDYp1BdmnD88T9QPSz",
  "key11": "3VAiVgoM6uPyJFAVCCDmfpQy929rUymWsga9uG5zgNbhz4ACQGoYNHjRzEwbpcidoL7cQjLHmerhHZLeLdxF4Gqm",
  "key12": "2iD2Kd1VnP26LzMLbUvquLyCP54hEhKcmUr4WEaZJw2mGmmyPD85cUCfvcZVNdqyCaWsbtPhBUae8c8pTLsDk5Kf",
  "key13": "51isByoGHByDWrz1FCHk5rmUw3dFbGztKM6k69c8SPoKffkXMVNitai4Xc5mJmB3rouJVDfQVYvuMUbRwftZjkSg",
  "key14": "cL2iySt5Dabvi9WNsAC1YMenvDGyFRk5dvGFVGrmN7DUCi5u1sasyri4fKWffcupq8yfaDwW6SkqPMARY4ppaZi",
  "key15": "5kADid6oPmm6RgWTuuuqcd7PyXWP6a6V83yuU2JQQfqk2nBoseWQcgJEJRkHiEBGdtRseHPY1XqxQVGLRjgGZsmr",
  "key16": "KotacG3ZbZfJmFqycNR1hPkKqFeZs3gWT7qjRsHvv2QrAubNwTQn9ry6ZUd36SdchgLTRZbL7zym5zuc9dDGm7x",
  "key17": "3AFgxmQzBh48SfrzCdqvFpqxqxYrJLpPkN7kqQcjDNRm3SQKULZjyf6gvR4Ci13LHrKU6bmBToV2UdQdQm9VNZsw",
  "key18": "2dcKpXU3K6L6YMr72njghYxTSRrTNiFAF6aNxNLe27nx6GMWKZQ3kHCvUQvXNaKHyb7nwMNYYSatXkJxEBESxzhT",
  "key19": "55WK3PcAUn7iVeB29FxaHLGENS2KYc7Nwkp523Nadtnzj8v1pAQBYUgsDRnbjGuaKhoC88xC3rirkrePcPGQ8XcU",
  "key20": "57W521URfMoqMGChpbywYCu3BubgqEA3ZBMnk1yzG9V85dpQNUG7HT6EdhykMp7nQekqkq5emY1FzRkVwKBoWEwz",
  "key21": "21jxXeygsB1ze8Nb4VRHbmFxsYtxmHM8NCTLgeFH7QHELypTRvg5AhBn6yLKvk6RcV3bAPfnFeJJpSEZRAVfZVAC",
  "key22": "4Y5HXQXfefu18ZsS7tmz4VYJUbzFT8qLMwq1gRvorh5H2LsSeKy661G8cJtydJYiHCo2Khfk5rxadZAynpgFhQhZ",
  "key23": "4vjepqMr2GHG497FqNvQchvoDuK5bCWhkEDaHFHjJ6cXfZX6Yu2i3pZu6MRQA6KPt3xntdhzviL5FhPH8GAhkUr1",
  "key24": "5aTLgsCfhdRM5nFehNSvkRQiKqyoJg3eHR3BoAqyJeXcVBUup91S7JDWeRnBLd3WRJkSK6Dbioe6R7X4jtD1yyYR",
  "key25": "Bvg9qBsc2Et7rEgDp3NQzhGrUiKMiVe3tNpYk9oWi3LUNiG5wqA2xkq3dcddj8nhNsgE7aauAfMkhRFSkSneo9x",
  "key26": "ykGvvQka4oke2VvPAuXdrGqWppZBhRnJ8SeH2jGKd3RyL1agkLV5Bk6MXo8k4CvzmDkPqBz9TfgeUyX7ZNdxRJS",
  "key27": "6DA24Nw6TWjw8R13CSSeKjfpNdFpZF5xrNbuKTZ7Tu7qnQkH8y2pVq8CRbmLJphdrUo55YJS749WGrp9X7CD15B",
  "key28": "eWtqRJ37eud4M7218m3bEB35mBpF5tndUeQCPqbexbVig7dU82GhfMp7apL2FWKoSLAJY8FvxFMsdGMDJPwMqnq",
  "key29": "2dvjUrYEyTee12yNEjWkphXHmHxRNE4w7paz5o7tCJ82K6YuA9UeRgGF28vTSuDLK8fhvfGyuHkvu8vhCtF4xy8F",
  "key30": "JCSz29yfctPLc72rLhwrexomjxhAK7iYBaaLWYrWjtJ8uh1Aw9EhAqXcpHBwk8HNSamT4T3soyw4wPb3dtiZRzw",
  "key31": "5DLNjmZweHN1gumrso9yNTRs3uPzS2mxu8RZCzYPQ2ZTf3NMW7cLvWtAFnQZ7g5NQUdG5hrKeQoUWeJDrwrZK5QD",
  "key32": "5dkLDz4qqAKYZPxvUaP3jHdVqq8wLETi1LKZwHhAQrRY8zL6BsokQpuJmf6gYRu4i2BWqshFVHUCpS2Ggr32dxwr",
  "key33": "5oyEQZXKZ2sKk2RHwnK9Mhn5mgKkJAPpVPUJrtAki3mscLs1QSZxCnceWnZnSyEF4VBgjznc67HjSExeMfPa7Yc",
  "key34": "3cBEZw4qhD9JQZsKbbtdqhbe17BZsbD8V3d9g1V2BqKDGbAKoGG1Sf2h2fKj5SrvuZE41EFhKLSC6qivWdowEfou",
  "key35": "fmJzA9TSUeud8j4zjByStsdDZnGCCTqWVBicW3JrPLZoyZcKNYXFKgvpBUhn6Rwx8ztDcUbqTCUhLkju4wdKZsM",
  "key36": "fm21jwvJqjshWteo7K1xYYxBeWs4uaxB8vMtFBYz2T8hqkacFTLEyCixmX6X42kUd94LMZPq1mQy3WA4JVf6ZqP",
  "key37": "fUDb6cZ76ABJP9erEDT6E6bZgj4NxbbNabyhgb3NGBswvskrwAHFMnftZDiDCTs6t4UkREKshM2yXcFkzcD1Jc5",
  "key38": "hukG4XsqMQZbwkgtgaJTT2dVuhBmiKdWdMWJocSzDXpidHoHxe4ZbNBtGrNbhXYns5gUqkroUSYj1JtPhWKVo5d",
  "key39": "ENzvD1HekoCZDFb9v25hJxrK9zkfr55cVtkg2LH2zDU2DtoitHBTofwE9X2gG6Nr6ra8QscMAqbkTRpyC4yuTox",
  "key40": "3VK4wrsygsfVKo3FcxVGwmpkPhQqz2bvinZwsLtE1F6jGgckNcyuZp2ZAMtEKh4AePrpMQbQZSsvZ1opaxGn55Qk",
  "key41": "4jDRkgQdw9E1JCEjhL9tqb5mMW3HhHiJd9hfC9tXEdZxdjAwqAZo9EUNRYm8N2ers5PduqBw2UVhomt5CABWdrES",
  "key42": "2nwVXntYkRqCiRPRriwyaWQbWfNWyzKweM2i3djSXqpNzQkRCokJFpQss8bySq4m5jbAk1JcnNF2xNa3LALi5zqN",
  "key43": "3ZiTvd6DYnfcNUsdZizUxsPfNziQpR3Cu4Em6FYoc9KicH9G7Fe1Qi7uVMXpSrQyFR9o5jKiHCv4V9ocgu7RcasY",
  "key44": "z8MP2YacaYa8i9sXboGjwLgRkd35E1RWUD4yKiZ8xEPHWpjtT1b8DP3QxXGZLsXafv3Cyz4YD9BZZPF31TB7qAw",
  "key45": "5ZPBg3qwjLb3vGofCiXzW5e7eRhbNVsVreMuvjrCAHRsAzxzBsbMT6uzsdMJN8rduYuFA52HVh1vHGGeq2RQmF1t",
  "key46": "5pSqasrx7FSqxQpCasKVdkd91t2PZ4AZ5ifn75rDnLCqx4CwfFiKwQzEvRquYThoEEVaYyXVdKCXv13Ma86ZybWP",
  "key47": "4zEDrPKTxoZw6PLuxSmgjv2HAioommmMLWcBefodGbj8XwUfok3CAEmkRozrhu5mWomJWNnQ7sV8yzCBfSoStHSD",
  "key48": "2CBR2Y4VAnygqdfKRV3A6akWnX3XbY897ewa3hpJFurioSNvUvaoJzxcrT5P6wySyJUM3hofJtxPGd77Y1uNQSbf",
  "key49": "66DWupc8LsZ856bMgPveCyNuRjeyjWxNEHsdqHA7NpYwWESiC8zyBKRDDFfrG16UmWHmrNEM6JVXLZNAAtrfmAH3"
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
