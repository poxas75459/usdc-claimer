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
    "4JVa9LvT9BDievyaUuhuXstEZiUMeS7hmkdKELV9bGbF82vGXEJXXvXK8T6zk9muHnq1yYG9ThzjpacRu1hsNxLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7vdFnS3T37mpAZQbmWpYft523ucKZ4G8GaTWhf1AeLF3UzfwfEJrXbgGj79jDwwhiivH6UBFCnzhdESL3dwbef",
  "key1": "677DaYJbjisMHyALRfHhA2cV6YRT8uWWGbqSdFFoQ2Htm58RJp35ZFTtxYQ6ooFCfuSQHM3coRxhPyfRcVRdWjzT",
  "key2": "3MyKEPxQ9Td1fi6qw1jAmrDpoSnqEtwRrXuqUNoL6Z6Z5SyQFgmtH9xJtDuHykJ6msmBsdFo6sjrSxiqzqS5jG7u",
  "key3": "4URi6Qm1igBqHmfqPCrkhP8d2Xko8L1o2vChPetcdee3q7mZ1ts4ydDaSMJFxR9Txu95Mms8h4kAR52pVGSkzrxG",
  "key4": "3Cwc5ejLUFijFvwrSnS1wxDZaVhw6a4qWtz1zXvNK2oKe83EPBxsJCpWcbxkvRpfNxyMsSBHjj8BLve9vtPwkGXh",
  "key5": "5EwDuRiTGwPQRzZ5h9ZtGwXiMM88ytMDvH6aRQ1jsJB5zY6owhygpAEVEjSo1mGebWrZJhqw9kB7LYm152G69zhD",
  "key6": "3yJet54AkUU8qPc73pZ9ueJteucssPAZXWcoGAKatTQqzFmGNbaZT6hPiPKK7z882rrRzTxfsK5kfvz1WR47eGB7",
  "key7": "2bg9hBdgrxUhq1kMUpW5PPLWguHZZhUNVmiitgm91AxgzsM7nvpNk2XPThzSgr7Y8dEYh4RrABtfZmcTxRSy7kv3",
  "key8": "4SGhWUv1iqcQQQtgdqxWvFVQnzLeXv9ZSgDVbMdadnSvp1JbQreYfmXQTzfTnAP1xmFG1RTdvwVnA2W6awyv6f4z",
  "key9": "4onYjs4S7iq2vRBdJRMTVLucYfimJ5mMoWZoX4K4R6EGtch9meDMFDeSGA3LukjNUhHXQMmHMB3Tc3sgKJfr5ZfT",
  "key10": "2JyeYVKKsENBY2V6j56fj9kZNyLSWc2TnKkyvEGagr8WTi9hzgdBEP2CNijye1TQpBUSPeXRE1iE9HhhQmfDMiVC",
  "key11": "3SP8GdPyQckWWsTGk6wZQ6e2iKKrqMwTx8PYmzWWtC1pFCn7WTz5ecbrzobkBtf527XbBLWw79ufrUZaJqWjrHVc",
  "key12": "2sxzr6HUuNeDabVVgDzSL6aPePteepp75WZ6d1d6wAe7PirVccz4YerJvYRWtCkJrPogQcoyeWYb4ydNBToXxff",
  "key13": "2caWQpTbN84sr7zxxBVcamZVcri6JChM1nc2vQv9cqAYo6p2kh7GxE39U8KnuJK5r423bw7sg5BwUrzthkiMhjUD",
  "key14": "53XEmWb9HoFjUuK86s1JDAWUfVY8hjYiKf6NfWAQHRbQbnJzDdhXFmYc3mY65zj7rkoisvBbmN1nTE7483KA5Z3X",
  "key15": "3qETxE1X2w51snw6WkbpcfxH6JSwhzVoohnx1hSVy7eeSVcmMYUcJ2s1LxUzfQPApunt3tBVemrVgGsymRUfF2Hz",
  "key16": "4Xa2eDvSaKuz5aEJNNG9XP6AWvzSXSEhbXbEoc5JJHCWfNK7ndn6YaSoLFox6Ai1nJgVk3vUiNHrAnsGCXBxqsk8",
  "key17": "3YdfZGjfTBVxmNDvgdyT2mWZeV1ckF5snKehU2UJDyqxpRF3GXCsejMnhtXjKLhgXjWB8JFnGCebC1jTkr8cL4AL",
  "key18": "oMJQUcoz9LXi39icMHthgTWdAZmbq5VMJDkWP6CLjh9oH46fZXwGSZivgW2Fc7ZPXrVpY8B2aPjhzZn7hkVjTpN",
  "key19": "2m9vnMg6eAKbXRmJ4nVxQTTWSwZJJdG36EyWPVU2dUfggjEe5PmKJuKqd9UFkDs1feKiRfpJPuhRtLSCKJ7F61uA",
  "key20": "3ZAc4soVDNdrfE9op1m2hN3JYcxgEjBckvod7LFfbXkryQtnXU1ifdUNzTQcyaXrUFgAeTZ7kQR2dMcymAz3M5gb",
  "key21": "5PxDVDJaWJQCYHgYFbdhGopUKP1z26qTmN575aC7T8XXUkEm1tw5pbpzFiCLg3nFkMvCh1UZ11qfwvaXHeLua33w",
  "key22": "4ECE4utDSeR3VyRF3ccCHoVvKYZ1jDxV2XsTjSnJAnrPAu4d3k5RibX8J8CEpKPRKPXuVWMThAq62RmqizroCpda",
  "key23": "4cW6386ahPWBnm86wApHfuDvzEQYcMt7L5s9zEitdR9ps8pcSAxvKkpgu2E6nX6vLJKm5Sn21NvtLrqouTTTKzT4",
  "key24": "51srsw4xrtUFwRtfAwWUgFPBMfoMXmsp66xrnuqJmrXqgPp6XZx2g9k772gsqsET3di68teairxgcLqe7w8K7Wec",
  "key25": "4okkcBM8srySZvRxh8xoP5C6q1u9TRqT2oh9Fty9Rcx5ZNaWNmqEG5LhF6gibmfm8efa3y6HC2nZSoaCQUiB84YY",
  "key26": "4wLmM4VJGdQg7tV367C1fambNbcUJt1MCCYFciGYAPHhyuaQ3oc3y6qcma3BRQrCb2fC2T6QCAaHBRAUFEj64cNe",
  "key27": "27qucLXunCGZDMBPnzLTWsvAxsVTHqYnwun4QgbmPhznxZaCJ7jhZYdaDyvwTcp4mEQWMEfauc8Zf6BH1twYFAXd",
  "key28": "5UwfbQY6tpPCw47jTE7C6hc86a6gbXNLcgB3XrPX2LZHbFhTC7ZG8e6YqLmcKQejQwLb8HETkRKjoQ9sCqMS4B8B",
  "key29": "4FAmCDkJAnPzCdepdp4JBG9dhAv9pw2H5T3vMJFtYVe1PEUD3rMXjbcrPmvPry1vy5qpVBrkvC2YHoUgWqDK1ucA",
  "key30": "4w8rboMyZFUwZM7V7brV8axTaXhTV1KCypPLxdndT1VdhhPjrjhr7mkoNELHTPvGNhXEB6SZZk1C1DPC8aY23zRB",
  "key31": "5y5zyquQW996XkgosRHpHWe5DzvvvrjTaRNfYbKY8NY15DAp2toKTKBGMvVHAJEjFpf7dZsFmsv6ao5G9kWKMJqU",
  "key32": "hnTxPVzRWLyT2SPaf4DXM1ybB9yrqmfSe3YtZzjALdPkfypioduyVi7dwRfv7GSfWWKBg9qcqRHHYL9jn3vS2mZ",
  "key33": "2fBWfBGmgJxWzn2pP5w4NzQPTFE3Trwr1ZVYAEutNdU6JbTKbPbxqvDvNvHoR2wBpzhmiTrean6bqs1gmYh7PKzv",
  "key34": "2yDNySF4XH1bzzM2PL35VEh8vG39cHaYE9bctKXWyJgaN1uahwSs1Yfcq1Xm1iyjrQtKrWXXJzyrwRKADf7XQe3g",
  "key35": "2CKP9bWxBLtvDt2efBZpSdGQLatYg5WDD5t4LYmdwB9WrrA1ro6jkC8kwHy9yABc53KUREd1CuwdAcA76h6kNFox",
  "key36": "49JbH3JxRbCBqSNhP6FZv6L1FDLLKqL9YLbfXQaVxVyS1iMvTRDuUopkAEwiu3ah2ufEEpYsAnGqRzT3wJ1XECfP",
  "key37": "4wyjwP8o1PSgbUnJrTv3GfgwVudwUcTrHrgHTm2ur3jgo9JGPa7GoZLGaLmFMKByxi3U1mevAA5wtqxQdWV3WEmD",
  "key38": "23FiuPbWDFGPfjFn9bZLh7kVT4o6v7zFs6a39bUdL9uCeL52ekAevLvJyzUVdbwmqe43SWgt3jcAinw2g8qfaRam",
  "key39": "hggFR7PwGfF4rUtgneBnsojSCMfo13QQc2Qu2QxtjRA9RZqk6dDynkwb5fSmu2YeWZ7HWsy3p1enYvGiqGL8gwo",
  "key40": "3ScVj8YArbTb17h9KicApiC62dW1UEGSorJrr3x5VBbvb5mR6hdrLF9mn6CpiJ5h7cer3mNMzfj99UKDKaBQFzFp",
  "key41": "2csd2qcstGMahF2NZivauknRPYRhAtpaU2wch2qsDHeFEYnxHTjzXF17DVeY5fvo5TCzqfCWs6x2P8HkVAg62PDJ",
  "key42": "4bAdHT6V4uaoXY449kEcE9TXRDNUdywy4HEDM5E9abYYCieMwVsV2jiV7dL1BQ7zARoKFX4xh4i5LfNZMVeeQAqS",
  "key43": "4b9BKtgX9h8sVJarT39nQUZxh7qEy6xQsXtHoLe33yJkvqzuhUxa2sMYkEtRtq2gQTSdXfbh3p1F7f5mhKp3H4oN",
  "key44": "4gxaZeVEcDdEMawMTfbn1WcLpY2JusKL8NcHLPLHD4bgXj1rUo4oHCXs4tFcnD8CKiTHTCMZTWFUtnxXUbQdUwEe",
  "key45": "2wyzhStBZMtYQ1DDTz7WegzH541ABSRFa9bTghMd8SxVVRq8xByWWYbdPjUxEbYVj2HoZkHu3qSCVid33Va2bU8w",
  "key46": "553rZRxf9LdbSw8pSrtzfXQq9szCeRGkQ3SHMWzkdz1tUYh7ktwcFWRqdKCZym8K7qVBm6DMmJdCLrPx45F5xiws"
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
