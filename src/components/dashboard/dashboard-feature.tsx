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
    "5wE2WpgpG1wLdBidha6PsmoiNruYrQqUK1Y9ZEdE1KdSK5d35WRxmfCeEkS73LBkTiMxztYWtHAtEvECM9dmzQqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQYXvQEbeagDYeNfUTVu6BBBsokBTuu2wAHwjFT5dNr2ctfeoyis8uUgqPAKhxgbmM8doPV2t3NcikueqGhPNDL",
  "key1": "4AoAAQn4uKe1Gj3bkKRW5NFYA6t7uHkjgRWqjVx3aihmRmU2PDjiyHAkNDNsrwXWJHWiTtcpGxpeJr5MiUqhEdfi",
  "key2": "59Gm3GVdEawiLwv8AKPUrCUyDGVKeuqG6ivhZit1RVHRd94zcq3NQRcti4j9qFhkvnEXMiHAFJUMSuFzn1DTTGit",
  "key3": "QpvCpKGdTqHuuMBymBp3kESJV47SDU66cbMiXkScWTLtwejtyGxhHwMoqrE4ny3iBBkHrsJZ6vfiRP3pD178zk5",
  "key4": "tfpR5ohhhLfJahxJ5zE9Mrvt9UBEJZBgZieVNLn5WKaYZ6KC1xNk9SZaccK4YAPjLKbLBVhjozTjWgepj85aqDt",
  "key5": "jy2Fwo5AZMesb5Htb84kZpPsJ6UQ9THfpY4PgJw9c7e42hamCmLQ61hdSfx4C6ggwYCVvLoFBQ8TDrEQwkZCTwz",
  "key6": "3JbHzQxJRdPQURFWuucybz9x4R6tBNaqJpBXkQTFLE5a7HmJk5HhL83fjYZ8s7kq3MZdV6jEZZeWpBuSU8G9godt",
  "key7": "4jcjyVF1ooWyaYsmWhqC4FgEvqB3KNh4GF3fVDvmgVafbkkZk7huKr4tuN6eSeogYW86RtUAqY1494w4nZxnSLr2",
  "key8": "2cXYPRvZ6GzYno23Nmb4Ha5Rpi5QmRHnrDjRRTXiawDcvu8VUnzJ7nnJVQvjH8UcEoMTdV58jttiya4i89EjqkEu",
  "key9": "2mjqHTjdJVpjAit85jWt4FYShVNoyEtAqcBKLNxe2UNuHEQAYWpCVfD9ZGRET1feRCp1ei38Shph2sWEoJcsuU5M",
  "key10": "4UuC1hYr8B7A8wdoVA1PjwmUHmbWA6BH3Vc4AgfV3sSXq9xPac2fcntW98QzWQ2yh91KKLJAGx7mJgYnCPpChDkt",
  "key11": "2u4ztQyFCmdAUANX2VZLjpwZnh6VNcbnKVY4tetvgJS4zJWFmD2pkYDPbMFsijQ5vQASh5Zx6mwoXfAfk8hu3oBW",
  "key12": "2he7GvzeiTMSqppLX2i2wMCvWrQhkiigNEtwzuk4MekKoQGqf1xvdeErThepyKV7QaE4scpbEjRgYkKr5YwPQMXs",
  "key13": "2haCFpXpiZSsGwniZqFv6XBMZqZCvY62vqMo1TcFjQJxTsrwm91W5pjzrHg45usdqaYznNKPFZ19Q1SquSYEAf8j",
  "key14": "3ogPYkZKeiSCMFDdjeLFNYtPWcLkzGZjs1JhJBqMyDYKre7bVCasrUHr4VTCYLD2qvRb8dGATLRDqMPnJPuzzyg3",
  "key15": "3GczJTQcPHr4XDCfZr4v5q1cVC8sYv8VTiXaZE4WhGbaCZJDwcP3KLWymrHabdp8x2jvrEDgoSk2fwe79TuKnUv5",
  "key16": "57tf467qhrTMzHDtWiTrYSGpmqct7K95ir9q5rSMDsaqdDEZpQNPjcMaCqqZpCsZGrCuYf57uhEHfKc6R38vCRat",
  "key17": "62ofVCw1S7u6Md9fyTecZt9eqRo9LmVqBq6t3bWm3J7Tp6RgVuUu4UhqiZAkvk9uMKeEUpvYYm5s4r5znQM9NHk9",
  "key18": "4Y99QpJcnD4KXCRsrSECSegvKJBku6BgddBaCEpYcD7s91mCmgvex7oQPFt25H41aeCEmR9XCZBQ9A7GhmZ6zj33",
  "key19": "Q2g97yi5Va9LwSPdHpo7FPBisAyW1xZBToVTj6gRRaimC341fuuqYGJ64sGkpjcvaCymAFbHTG7QjedLorKJrGN",
  "key20": "2kSKK2zDfXKqp12FDtmkWfmNarapNaocXmEHtm17cykgC7zBjqPH3LCBVcA93yY8r9Jn2HQtpAMq1hR7bZhVH9hq",
  "key21": "5JLGKUAC9LYw59uXFNw92WuZofSHQikPRAcXdPYwk9iRw5mc8tQ6xu4jhnMk5nvnprn2Uj46G7BbJvbvGcaJ48H3",
  "key22": "4Yq3kmhmbSrvHUvwAXKHpjvwFHTBpVQZPbxYVuSXxLwKHnjpySAyZ2TekQAkvuNcV9vUcRS6ULmdJaHxxVEEqpyK",
  "key23": "aAMxeyfXZZqvwXimv2TzDVu8LQNnGvDUz6pTdSmxDBsjbQcXiNMYXwyHSaEfVoBPAD2xA9N3sUDUjhvZAhGvhg9",
  "key24": "34TUhX2SCdCHUf29iv2twUJcPxjTYbvLtJ4U7gChqmF1JtpEQU4cJLqkj1CSKGgS4E2JfWXKvCt9uds3JK41Szdv",
  "key25": "4op6hG4FhWjbYkieydLpiqRFAbEcac9mWBkF4wPLiEDdXEqbcwhdGyvanMTTjSt3fgn3BFLcAPBjTpHrEitNHdWw",
  "key26": "2LmRtoD6wfSCVEAKRQBkKaQXxtMXZ5cRKF3rMuyB8uA66w8FNoRNvjdpnn6svVVgHD2CTmzbpWuCW1cd4H6QC3r2",
  "key27": "PYeS2GhxLkfG1LSGmjGCadKNWQKhCGYER5XWXAGEvcJAE39psN34UKdCyYTrFSjikWxd7ukHGUioQUcLgHBmCCL",
  "key28": "3Zj16TAYyxAPjHWnmjhSx2qLko4P8HNvXypeqU99px7784KJEVcTz1PbgGVL7dDaUhNQzJ58r4s3Wci8CJqwhVZQ",
  "key29": "5aePcgvqRYM2MzJQYuSHwBjxah4xujMtt2XnPn2XQt1uR7F2c1Sn1HaY8zDMjLJbcfr8edfqsDZUfvhLpg37bPmm",
  "key30": "5J8ZBsygQNuANieZMQCUKT88KQHYUK47JwmmCV2LofKNa3B38fCRA5iFojoLZ3ng9bT7yotVfZ3JnxYsoPohdpKX",
  "key31": "KoDyPremX2HexuiCAE39evZCYbysToLJCdEJtmgMxTESPAmx4EToi1eShU29Y8hcFyqqrMzrCP6qbP5CB3br37p",
  "key32": "4RCPXC7kcPbL6TmZiWnCawrFS4gVKH8AH79L6rbkXAAfcUDu4WHFPJQzZ3b3dFRU8ku5vzpG5Abi5xSJPyTPwALN",
  "key33": "2GZH4y4rxNU9MjxBWVjEhoiEk8zcTziAH3cY6Ba5oYBsgPTBbYT27VNKDVVTPAw1bXnLkQzG2zP9WsCZ9uJoYJe3",
  "key34": "2vP86kKjbpKLJa7hYAPHNTTHGWKw5MH8cWagbY7P9f2bFpCV83qMrmFH4sdcrMLawnyCDacjVzKK2PGyFbDupXgQ",
  "key35": "AEMhBC7K4pxD6PGohmBU8pepug2AQL7cE3tMBrghiyRygprb66p62dX3ke9G9VzjKMRis2Po1LVetityy29SnKb",
  "key36": "3Bc9VcaCboMNhT1QqHGBi37JEw4Qqgd9tjc3kFPdTxKEYCAnXUjvYx7D64wCz5ymyvPTnoZkiGeLWTN2HLmoMrXB",
  "key37": "3x5HdrgknMrxVFes2L2bQRRsoym6NbRyZQQWPrmyiDFDfNygnaPyb6pmX8d9deRH861oTKAeHReMF7ZNrgmGJVNk",
  "key38": "2JARexKQKUK4ymchX7x81669PCnfrwWnv4yu4nmmfzfzEvPiiba4ktmsEAw8Pu652BHMEoNg7N7uLmhuqY6fawdx",
  "key39": "5BSS5nriyY8vTnwiQ2R3r5N5mi61Uk7CipH5yo3SJxDEc7fqUotBi1KGE7kH9jYqFRKg9DcQod9FiTtPuWYjntnQ",
  "key40": "5Dcrf6as8kjSywZHVesw5w5kCsQhdYVVM5fYtAuQarqyfLY1vdjSGEZXtyHEXqSKhwNgmTg9wNJsVzU5RDYB4kwg",
  "key41": "2Z1FFX4fCpaBtf1cMzRGCzXNsAr6RFoiyXzxPGd1JzngV2rtc6Q2yST7vpwu5BZrzMaGoANBVfLGKBDA2q2qeBoZ",
  "key42": "4Gw8WivNEdVx7uJcUKm9E9t1udDbDmeXZKuumPTvVuBZazYQZw7PjSGQtAMQG12v4rRHoT2bqrUdNi3TvdeDDNe9",
  "key43": "5PGsXvPPMW3dPUjxdYnQbp11FHcbWrMVu1mKt63h7yVMQkxmn5cxazFjBAuKhhimwQAdPkcNtY5WqHJsYNgX7bBC",
  "key44": "41CefKVXMqGnsWCdTDzv7e2FFkakQ4X1e94tDUmULza3qhgjRZ3y2d5Bo9cFqyjiSSA3NMYCVRR5SvHJ9jdpY4Aq",
  "key45": "4b7XkXkN94q5RDvJixTP4m6L5jV1FUCNfAe6aZ9xcongvR3Hc1ZneqsED2gEAAsy49CLZdTkUewXzLtWTxcQ8c8a",
  "key46": "32DR1t4YzogsTwc4nBVtQf5A2ARE2wxzYA8sW8gwzyvXK6pNH4JxT9GS6maHWy8CUHHwFvgX1H4W3TEqAbUoDzQo"
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
