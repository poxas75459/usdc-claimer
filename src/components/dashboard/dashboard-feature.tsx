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
    "4oAiEY7gDUphxJRTf4w1RrFXBCjpzouUffkJ6vDpdybSrX71FncNp4Ya7WzzsbcCp1zVxP6gjGPNmLfCH1zofvUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4KRbJNW1BsstStcaZrEoVCX6GFpUD8GJhhQ6eJ1Axv17hnE4tTNMKkgEgZFxYCvC6fzjEMJuqs1KsrF7H59p1s",
  "key1": "3bfBuWCvk1DhqfckiwD7cRgtqm3UpWvG8Tn8ffn9RBP2v2Nem5MEuCM6XCH2kBjQqAJ1cGG535oeD2FSrGSUAWZE",
  "key2": "L2PmxpJuH7ekjXQbLGRDNaviiGqa2TyBN117i9UaaXtLH7vSGjvLimibDGBi9cPFYYsn68xpLqgkU7vsZZwP9sd",
  "key3": "3fdHNbzF7wTfZKiNQQrCxwyVG7TmHM4QknjYfTmhH3SQcGQexuDnis5ZeXFCcyvmZUPzQT6wL4txyGGhWb1GJMVs",
  "key4": "hNDJvw4pTfkjA6WP4FukpuuHLuTYWj25TfFWJCZ4DD1uMLewuZktkg7qLEMYdSgV25GcruBw26cfp44yeyim9AQ",
  "key5": "2mfErEDoiGiBD7MpTpDsF8BSHraXiFSueq88XkmqAL6TfcnF9ezEBtSfuqwndsHd2dZhqBWGhAsEK4A41i56YLRf",
  "key6": "XA6AJEexc7h3ysoW1x9Xz2QN8VFXvLzYvA187T4LETXvE1Gm9y6AKBjsGAFbHDwgPqYua4zpvMdqTyjkyANq4ht",
  "key7": "5ZHN9CvkNP6ns6jx6x8s4Sg34WMhBcjv5W7CgRqsBZZEFcg5aCzg3JWazFutoFjSgHNbfGZ6DMQ7qF2wvSXtd7Sd",
  "key8": "4rSdJ1qA83DUXZGfC8CXVPJ4JXbg4LgcEJvdz6JHk7cNMgjPmuF7MXUdWPyJcJNtzFwt15bKEHjnBKzkakSCVqoG",
  "key9": "5SSWwDyfvqQ2QbRZFow8BBz8zatPbqeJKDDcDLZuRABon9QCkCXGab7ehui5sziLxGZDHNpXbrvUsTYtvoMVDF9p",
  "key10": "28mbtHBvJBMdSkQHJxrMXKb9VYgVuVqCToco84idyfXXapjdv1tcFcGiPnCNGbNEF1dqJRw4YXQnEGrSnZcAEZpw",
  "key11": "Kh8Y53LH5Hs3vw4WtHfVHosrqDjShDEaHGXU5Z5BqDxLtAYsHD2d48cAJTCK9NZiKicRB3jpe5wpX7JCrVgnq7V",
  "key12": "2mPQUWsDe3VFFzzuXXYShAu9ZK6nhVRYaXtrCd3FrwJMhvyhR3asrZgHJUPiWdHsDpvFqkUzxdk5EJ2AxR7bmbJs",
  "key13": "2rsTecGAvpr25KmEKFbwX5tUeABNjQTQBXmQEt68VuGkoDoKK15xjc9aSyVbdr3RivQ2ceASoujXKSFEwsW6sKof",
  "key14": "3rT6d1w2XgcgNFFtPFvzcyGTmGxFf8PyBrtDandujQHcGVcGGakyHFNwBF97cbzYzdX7v7pNr4oLDQ2JvFtKPpeR",
  "key15": "2wthveiZPLzmHM6yyM1VnR6Lpb1SwPwEmt2uokYEMJYhLgfMZJwMRnppZoTdEKekZ3RDXVCXKr3tn7Rdeb51Sna",
  "key16": "58fe3LJRfzMrUz3wVTSB4sofmCVHfvrvZBTsv4hszkamcQJp6vmk8Ln2PaPZGToA6Ta4XJsKxNxCtHYK1ypzvRWV",
  "key17": "3wsajXs5cbTmEviFjqip2byb686gG8Vax8RHfaJBdRUDd8y2zfJRSCsGQ7Q8KeNf7NepTjz1FWogtqpKZrcwy3HH",
  "key18": "3acM3gBvDWFy5iN8J5kdBo3zzLXeyfWZmWWALVZL29McnTgS4AtoRX4g5wfFwQYUr3oskGYkQpBBsHKXBgMuMGZY",
  "key19": "3X3GVCx2bKVAqARV6q3qnjtLFAHji1X6cFDXwDir7g3jo2ed5GQxf6NZiNyTYj5DEkSeRSWbQPYpqNJALg67PTpH",
  "key20": "3kVMJQ2gyLUR5k1TvGUNkYqLQSjvs6cDo8wxQWngM1L7NonZMiRq81MGbKYC9LXRzfN6KUQrxLCUBhdnVu1zWdL6",
  "key21": "4pw4pSKz5eD33XsRqPPHtBGQxnrBEbkxPM6pnevbQ3rjd45jk9Lyv8nhfWEUqsbbKsMNGgLb1gB6ayiuUzx6mXSY",
  "key22": "4tTjkVvKJXGnfc5ZEHxpqRACwXN39egd9KqeaTdKFuLEnvkvCETuKNjARPcVsZoFzgD7bXrmVRHYfTLbN4Dw3ama",
  "key23": "3RgxbMffswVs7BZPgvcUYAq5TiGxnwtLWjb7F1cdKezRoJ9ygPiahsqDQomUeZqD5FV3UZ6kh3eK9kpPxvLi59u",
  "key24": "39q2q95V8G5QUihzy3i4xtbyWVGVEDoGTKucq9eV42ALu1YCajBi73tGk4n8AkT2dxoMJGEhHxtcaHvJS3GWKBgn",
  "key25": "2SoXHoAL5zmdBd23n2GQSs6LmkUATDnb6VqUornpXdCFNFJ13JM57aVCLnxsTsjqvCLyAPchnPx6mRdkaHRSuy9W",
  "key26": "3JrF6KJsS7PL2BBdi7iLqRWaQPYrVqJkQ6DHfksqfMg7AbBbRtVpwQzUCBZa3W6S2sSTKw2RwD84sHHEfpKA79Y5",
  "key27": "4kJcCxKdmkaeu9c6yxHynAgHR96znTANCE5gCSch16NWWPm5K1cfXpwsq27zU3X3pikkmfdxpp6eQDp9QqqukJax",
  "key28": "5vEiZCRzA4sYy48EJJoQ6JPSY76es4ppSb8iZjsvhCJQH5vc62w2GhVDyh4Ra4WnsNU3jto6YY34DQDvSeAJapA6",
  "key29": "3kt994ZcsmBeW5jmfHfyptFJ4XyGbGzeRkF4WsMr5MhA6FD1CoKeKK6UyWNgid687YAweMKSsmwUuoCdSV31Lfgk",
  "key30": "JpNSruhYwRwQX5h5c7KrucJyddYZRv69vYVfhawh6Lmcwyh2w5GxtneaRUELds83absqehuNV38MQNrN3rZvzGb",
  "key31": "nE5BQSxqyHgeU5bjD7r1DbPYrchFb5cJM8B1muXm7TT8grj21B3LgBFbinzyqtndHhLhZiHGg2A97GVw3egsrMj",
  "key32": "61L9zZEWiZVW9JqfBFtFVUB5wcv6ABsRgEX3ymt4wCSMRegaLiyimHrhCVPpDgwpU42hMvn98Ae4Qw9GJjRrUqJG",
  "key33": "2JvmAc68Z5sWzxtMVENBWmipgLp57w7p8cChzxsn2RTyiYmtNxgEoZbsDqbkUKKyshwVsrDvbkzhf99ZYbWNeKYv",
  "key34": "oeEArkv1PLfadimAUsaeCFSMeSH3rN1QMcxfnUp1X2A9nofxggo1v4q43VTddQeYXDLZBusVCnMDR8Nr9BkJsmr",
  "key35": "4G5TFkg8NomMDwZpeegqZ4GDoSzmRjLYY2FZwzG3MVgZXp946qpt2bvgy1pC4itmywfhmmGnNm8x5dxnR4fi8VNZ",
  "key36": "3HvGzaMpt47bTMtp3jr8sYzYAUZMJ177VkEcnVTb19PcZCYmakpVGmBtoQWFVhtfsDv4vBKUURSjM7veyBVJJSgW",
  "key37": "2TXZs1h5LgsqULswHGiM1LRTGVkYdrE6Av9WD37K3ptpmZCbYCqwQnrivYbu4yFgSUMjeRQBkVNVXYHe2ZCjWMQR",
  "key38": "5zmEsWoWbANaAKbiPUwGZTuAhAFYf8ZfyMgZJDQQC9MWRqbAL6KbA3euudfyzwC96FTco4zRWZKV7qe1h3NoNec5"
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
