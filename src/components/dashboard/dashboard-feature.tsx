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
    "4qWn1HLR7bFzcrHemRm9zjbuUkJAhpNcW5VWYzUKTi9EsjreSoet8bmJwPK1MKTtGymKUYN6QnxyVCAXp3aZNLC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLSdmHqsjgV9JXy8t359nhqNtskStneTEnaRzo6Rdw6FMoXZ7SZKf2X8WMQRwZP26ncuHrDRnpZxhEi5K8Za9TC",
  "key1": "64k8gik5bL4vmMrNuBjaFrkV1gDhAGkUm38eiJYS4kLcgYdvd6A8vuGwsvauDSb52awhK3A9tDZdBi2ZfJJis8mC",
  "key2": "2DWvfsB3MF8CZ7NVKWeHooW5AcN6kZEecR5FyQkQxKkEtXWVadQPU2LAoCuuSzXhUFtTwqWP597ZqKDG7tEiNzS9",
  "key3": "26nhx5uFKZ6v1yK7EP27zmUZBcxisv2YxA8iFLQCMU37PWgTsy5JnUWcjBUh3DyaFk58mVUcQKE56G67mVA5cu7K",
  "key4": "5eNiTmSEJno6wuvch8xJeuJc4jgkwYnE4G9AFUXCpmAA4tT73P9zDQDNJASgL5GP9gPC9pCxGPSHS4cgtk1vsWiR",
  "key5": "5tb3hWnLheKRAWdVMKyq7AiYWY7XcJeyGUdR6RfpS4LJBv7tUJhXk7VGAMQv26YWRy7rqBjtzPok2rjSXWsfLAHf",
  "key6": "WS8RXPXW3tZd6MZoN6ZzBFiugD4ES2wQVYA8nf5k1aY9ebr5AKHJUxcrkQhFRtnZTxNvChy9K1RpUfcogMhZ5wy",
  "key7": "3sWDGJRx4zMRApTSpQ7Jee3fTpnGaKR9BUX3tvky6kD79Xxakvj2zvvdoCthraK5n1EfpRtanJmWNP7DSg5g9YmT",
  "key8": "XLrchJqgpVraPzgawVaRWytY7CJBcweSFj6HqWW6HgFpD3TnVhZaNNsLSgQwHqW5LhTgSyiSk6KZbMsR3SMdPpB",
  "key9": "245Akq8Pmrkp72tLEuPzfny6sbhMA3UCoBfipkCHkibFuiJNR1QrBXUCoa2zUojuze2vbpxJJb7hfKiYQ89vuQBi",
  "key10": "65e1jJhcxFd4MbS2JYFmaBLVvc9FzoTFQgEzBQkug4EWSh4GHQYvtwcFQSnw9BVXJb4u2VKHv2mY1xw5zAjbowpB",
  "key11": "4kVJWTMy7j3PDxDz4ctZG9ywtxeqTmCtKLtLMRsiiEmbyK272fUVaDnG8Q4mNwSwHe6SiPQgaThDC6v35YpDCWDH",
  "key12": "4Haxh5w25FfpPQqdFyS8i8nyiucYPCYAYepXTtv88GRzmPE6gpVfSmZPq1xCBdvt36YtKWZNGXpfYVEK89xkySnz",
  "key13": "2Pk71JU8HFcn4892KhzdDNSbhmdEMzZQ4FbqLBW8vFUH7rrzseV4nApv55SDux5ZUKyZgCrabpkpxoVtvopNqd95",
  "key14": "2sKctSJxH8n7X3a1TUEdv1ue4NjcZEgRHFBqfQB9gsuwGkd4xx5kxRnWbah1S5YbD2KXPwBciMjZuSKzWW48h3QE",
  "key15": "5hknLJZnrWTLtT1K6wPTkuqbreuQ7zxK2o1XMQP9JFMGiYpUbjUYGyaPFaLQ2LK9TYAfbUSXnmMCrKK2wKmnKezw",
  "key16": "HN2S9cS97hmNxgabsu2pR57SDyvE6Fad5Hych5ZBADom9PKYfprSGt8skMYUYi5Z9v2kLJ2GB3gnUiQjusVneZ2",
  "key17": "27sVAdHQxzCK4WQQQaK2KzWbGXT3Pfqx69WyegxsbLbhiDrCJDNc22HThUggf3EcaVyGSHzPizBdiL3VJCoY2Fud",
  "key18": "5qF93M6StRVxtzb7Uf8ehUZzsQ5z1airMXpYgZgkHLDBfoxaQJy7FNDbXH6ZCwfoMgYj8Cu8gZmsmpmDscpYuXQX",
  "key19": "wF69qYzuFfcYrgaC3Gf8PEwBUtWWcHnkQW3pevWzPmUJ9gvwZEvBfRhVTg9KHhJ3EA6wQhsFNWePRdbhiYafkTw",
  "key20": "485A3Yp3W2uibHHhkGYgMgd1toboUQSdz2MNRTHL6MhoNuZtsywe8XuaxrLsXBaQ7eNmhNZCMrim9oqnTWPeurPg",
  "key21": "3eexUF9HVr9ohBH6T1RPKRFQKz8vu6yE9XmrvnFnAAwXF5wUoDmEzbNRBiZnTMgn6hQEemPMB8xQyxjtGZJNaKLT",
  "key22": "38QtJSW9JbyD1EZaZz4XxCNwnZaDLehKKcCgR1YcLCUWuJLQS1CaZHRZtUtsquXMEtRHuqwyx2h3rPADqXridKJv",
  "key23": "tzg84SjZMXqjMgv5nQmpFH4nqnpfDhEVynkJ1bSvrqyzPGdKEyuJKEGWAAx9uutvr96EqSAu5q5z1pZrHXSATV6",
  "key24": "5362bCtpuQiTwnXRkNoeWjMF2dxMXkTjGuDJcv1m39H6wAgXZySKkvESec5iuzeENiSKrBnc4V245pbMyM8ox1wJ",
  "key25": "5KydYdJd7qaQpi1ASrDvGR8BYoaCgfcM2XDQa1A6wx7gKFtCHg5bQm2zXt3GLbNSjstL3RXiwBu3Lb3yzjbHwHsF",
  "key26": "5CSbRJ98Cqe4RBLVU98eTpQf3cw7EHQTYRAmXmTUEx3GepQkmZYxjjjcNhzoHFbpHhCAHKEGNyLVCQ2Ff2VfYiDZ",
  "key27": "4YNJKw4FFAixUL1AZpYipvK7BF2mkA9xEjMZFQyxbMs99PD4UxXGMYCo6s9euvbEZnLZRUFCZRXpNFvreqJx31cw",
  "key28": "4x9BtkKgeVo1f5VCRNMDXVeGVANMfFC2kFC58LQR3eVT4GQXfHkMGGyTsYvpbetHKRy2SyQwh7kR32Q4quT9yEb1",
  "key29": "TXfb2VnPoVuVwiUg73FvD7zWH9fnttjCY76tvz147B4qwdQdzS5kib7EwmJpNitfQ6sCN4Nem3jxdHvCsypuQfm",
  "key30": "3Ff9pKvxkP9Y3GMk2rBo51MGhTMoyB294bMPwggcZmPC54cqQzuTt2Yn73JiSdZSR1AUSK1Y5fZkPd5y6xNemrXx",
  "key31": "2QF316QpJvzNfCHvbLjSonG2owqCTQYVwZy6tKY7RGbPCokvvDNVQtfprYPV9YRn9T7pHSpcdLmCn66MZbrNBcjD",
  "key32": "4FajAqrhYkm4D5sSc2CogpzBPZ8QNosfT9Abe2516Yc7VXhPbar1WAAd9BLJHTYQQNoHqoQUroo97faDEojW3cFM",
  "key33": "2Zre8FgJKhdTYL5wRADsBWfRYVxtKDBcR4AxXw8BDMykmFjmVcqK6dKibgajEQAo4rBjDai8YSMeuNd4CasokE7F",
  "key34": "4z9yf6FcPLNVk32LoNcPkaGDsGtmiGti4PhQjHMxYd6hzhYRmwRdCqFyNHN6FTBRzsvsBygn6TryxVmGDKPGJXvD",
  "key35": "angmxWtqxuALT1K1yBS57ipfSoChcNtC9o4FZjogXHCtsZhcPPiUKtNMjSnr4gq4baNj753ZhtyDicEm3JiSfxu",
  "key36": "25B8hLyyADsXEhdBF11LEivmYoVPTzGYHGErjxSHL9TmTBwX5Zro5hfkbWxwWt3eZHunt8AMTgm2fsA7hibhfr97",
  "key37": "4HjokG9sWhvaEUa8o5QWmXXz2UxjA6JbU66x28KgCXpiLWpBaRFz4NSPuP7vTTCXcZAYhBnawuUAsxJokx64Z2Pd",
  "key38": "4JRASKnd4jCK7aHDnQL5agvP9QaqV1vvyh9Y6y9aNna8qiybKLksuz5ynKJ1vok9GwQC8mmE5h56haEocURvjMEm",
  "key39": "5ewTv1Gw915eDhPAU416GuTK9Y1Hfapn6yuTGzD6s6e4pHAGvVozHgCExhAkHekEFaQENKJgKxTMo1GMK6Wk2QzZ",
  "key40": "fAM9KnLM9u5HFEQUXZU9eJGMuw291zEXBDRdTX5BSivw8BidYPj5a8J99NUHejtCb3ZiBz83PSTbn5f3hEXZEqt",
  "key41": "62uMjiAdTzBPrHnPBM3vn3hakXndHXcm8VGkvyfHhn7fLUeyAY9rT4pCm5PyBkqccsUXraZx5VAz4r2s7xLLNfFj",
  "key42": "5HdC6ttcNe5xuCXSk3V5f1CoYim8fDEN2PoLBLkSeqgKL68ANQkgh68juZDLXUXS6bMKwUXyyWyUekXQWEoAnB9V",
  "key43": "4NfAc4NuswAWcK1u3c2cXZjQH3E8snUXPrYycL8b5EH2GYP6qBndKBgcpCvABABbpgggJjxzqJKefjUuz2DWVUmY",
  "key44": "2ApMLmxY4CUMQomBcWh19R1s21pE5AZeKVVRix6mN7AgoDf1qJXrXc2GxY5Cy3sp6TynEA34s9Zt56EugEDxtHfi",
  "key45": "kvpvxD8XEd6CQj419ADqQh2uYxbtFLtWkV751MSf1ZpdPorzvosMiVtkSD8ov3os5h3zNfBk52mYGxqrRs6Lhco"
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
