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
    "4sBJw6VqHFWFcfXG3giomkgQwj43kYrtbD2nRRhSpDY34p8QmSu71h6nVTCd5BnmK9vNBQaoYqGfm4XPNUYo76Jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPMsukjoVgk7bTsCxh9TZdnCmFe7oJAkX2rBCcqA4Zt6M7J9fy2Fqi5Bq3DFCv4yCH61pDVuubcYKq9nutQ4v26",
  "key1": "2xSXHUy4ZZkDYvZSYSpfp6oFv62FeT7cM9dnx9nC6W7gi85JPF2zJFUUQ2DHWNJsbFd9ovbP864zegzA4cvNAr3M",
  "key2": "4DqJJteRZVaoaEtrRBN9XBrDtNXqMzE6Rro2vqbdx7YWfDvNbfos8MFq3nz8ipQwjYif32N7Re5CDfhgbAs9mxH4",
  "key3": "4d1LqRUNkckQZxPyMunMKGtSSotzb87NtjimDgTF9ZZb8eLFDEiidZSnVZgndTdDc7zUKe5o7VohxgdoNSs4oP67",
  "key4": "2eydh2zCPXPZdLCVt5Q2cLZuVoVVuUKy3VYBvDqrzoHgogWyeujTK2SZCcGan8FHpddvgpKqzjH73Hty34926VAU",
  "key5": "58f76p9dQaHPHWLYKexhxfASLvEAd49oHah15UZwf9CEvaPBuLnsMaM5UVRTgBGmP75vdeWUg6Vzo4sjHUXWWQDo",
  "key6": "2ZtCwV46P64MxT9zVyTMCPwB3gFjcPvW5psfbhi9rbrWB9SpUpdtsxebQEHHttcj3gGssUntxnE1rZnFyKv5ZU4K",
  "key7": "4jvUVhEU5fPWmoRVj29A78M6LA77FgZiKRovZV9C8rPJmc6JbTdYZqDz6os5p4FFNYrDnYMFyubsnGYyjfvV42YY",
  "key8": "4j8Dgz57AeYz3e51KDiaApVafkCtLKirqETbmNRCHa3ZyRsv5eLjQQJotHEybNxNAdqpDhyxf8bd9D6fn9rApguW",
  "key9": "3rsC3Z9uLtao2Zp4PtBnjb3RWeQtoA1TdmWLPPF9YBRqJtqXbBF9YdnNvmEAFK7yaQKMtMdMuv9jNxkPEVj9q7VH",
  "key10": "5XjcQoA4B2UhX3dF3ew8U2NZbFhJ4EUJpkfJE2SF7Usav1H8d1yJXNfnEF1UxuUvQSUWGkVHEpUZKiqVRE872xJo",
  "key11": "4UrXnZRVJgW5rticJJ5PG7chcTabB9UbRaYqCitF9dCLhT7V4JLRZQ1tWvqv4HPSPfJQQs5vQCS7tvYxcy99irRc",
  "key12": "4cMmU8kzzo58MMNHvHYmSBvc86iUKafYovx7Q9kSV8eCNodjDaRLtWpDx3dVa7PLBMg7kLzt1YehEzsH5f3bMhpT",
  "key13": "3FHvdPo29YhS2sMDPMfvACff13AyN1Bd8nWcWkYYBiyRBn72GnK4kPNV7ECzofiaUzBWcVv1yiFCo1qxaayyyxi7",
  "key14": "555Sib5xLzbaXMekUu1vkyWrU76wZzXx6AJtkMsTA8tQWUfr4xKhBXT4FCGHAbVbHvMAXjuBRWUFV2t5wSyGPhEb",
  "key15": "28hs7A9MNeKViDNeCryyi9QBMNfLbz2SUqRvwu5ZAWPfeb3WhNRn2sXWrMB7S88VQJAWTPP37V8W3Yh1V8LDNatd",
  "key16": "5z9qXYtmcEabq4Fkrb6JEyXEuHEo1tPKkEppScskYrw2F3rBrdy8JVP1E3H8J7JcRrjnAGDXTW5nfXXy2Pz6yAx2",
  "key17": "552QFWbu2z3cxotj3gQCDuh6nj7mrR7tB18mqzQ34ozUstR1qc3mpjBas3ViHKZMY3oH4QJTTE8RLT3bn7gaeXpm",
  "key18": "4YZ5Jgp6ByLZKx8bf7uamTo4B594xzYJFWAqKu8u1KDftRwLq4xagsk1m7rXfevkjbUKZKEDj4EL9ZXtpaj1ABgK",
  "key19": "2vYDGbAc3err3G9DR3Ks754zwQwkzmDci1LLPjcTeR7aYq8zNohbGLoJHMZvVgm6G8vyWx8eTMVp88vpEum4Sbit",
  "key20": "2reR5j7VVqx3AUyMjhArk9SgtViRDSN69BK8ZETbsCdG21h9etsnxPftpz81b39CqrErC7EEk12M1zFW28rqpcJf",
  "key21": "EeRkaRaSG98YvAuVJ5WdST5Xxzx2F975khLEdYK43P6mtgpjMK1PmSweRctfCq5g2NsJZWB1ahHVkGXNXtLc6AA",
  "key22": "5BPdCSUzNVbR3YB5vv6b6YJS5j4UXAMUuHPS2GJgqHG6vvmFvzAjYp2FUpXi52or37nu3ervujBBnroK7R15iWLC",
  "key23": "4Qt2eAQmixThEZtrXfmaAjkZ1XY2TtHmMBfXdLPdBzXPFfZCdzBRvLr31SC65C65WJg7jfjVy8VCZm5bfJzcKdGN",
  "key24": "5StyEkBBNYpysS5kWqnGX3bU53Ht2M4CZKkmbgizUBvWgSxZAbzuUCVGdTgo1cHC7mdpYKT7ycRgF5FYSoLab7Su",
  "key25": "4Mx1hT1FpyEjDX3UpNDNEvaYcwWgXMBVmBdYrZnQBUpK8RhXopxfqzKhP6ifDPUquwJx8jo3b8b3MF6qjXAeJWiB",
  "key26": "4iP69A3j79Tf75DnNd6i25YpkhgLduBfbmN7AwtXwjMWLgJcE2ncSeySAZXVYUWea8FZkNdyAXaHS939GZfCdsg5",
  "key27": "2iRquAuD6aaedHwDU6QU9rVfzQtXqr4ZGfWFfMTMw7M3ThuHztPapZybneP8d8bDR6ek2Wq5k4ZiGR1XqXbk6NFd",
  "key28": "5iBBPgG3z7UQ2Y7jFULPtMRpA93pxBqprxYkumxy8rxD1DToT4Nu5KR7JEpFgz13LaGciY4e6Rr9VKrvJpkxBmDS",
  "key29": "5XoYR6vrarm3h1NwnXbhL3mh525EmjByuGwEDoTBqDkrEstx94yiUX3yncvh7RofCwAHeTbd39XQwdbje6Uj3fnp",
  "key30": "4FpmbSSErmpiTyLnVAV1MqGNQiRC9t4mZZHeWXRuYhmzuZEqsRzchov6bJWyKvAUtXDWqGjmZATAZNMBSnUMgfE7",
  "key31": "3kVXKHXYfxeiXEyqgxuoebqyCQWMq9EDVRceLGMaBb7TkyRDyJSmYYSNNaP6qHwe6u52qw3AJZmVuBxdhMPkQEM2",
  "key32": "2oVJB8rNWdJyJZ6qMt8mrw2AFHzRRjF42J8e2dyjje14nBGfjBQkZzZaJK5SoNESjAB2N5BFmuKjuqY7RxKaRpMJ",
  "key33": "4nucFSjRpEzMTYmKNxfNMLeXLYdzDbGTkn9mfNLqgRLyyo2SWxSYrRTjyFcxXGhjPBTcK7aHXJG1ZHhZwxg8nFX2",
  "key34": "x5Mp7okG5p5EasAr3iqVncFVv8Dz7C7rdvTFxfzbCk84GvA89dxbA4UfmnWMKbxbMbUUjerUcgDRbP3DLHrnhrm",
  "key35": "3nC55S4rc9BtFPPQrGaD3Lu7UxZXWpZGcgR9sfumW29pCEZmbAc3XCH5B5KqXVKtJgNuX67gAUm9thCGQhJS5eoa"
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
