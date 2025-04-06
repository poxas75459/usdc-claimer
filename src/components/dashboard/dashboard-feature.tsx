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
    "24rcwPBVwwkUjfd19YbEbcPwaLNfpbTYspSaj2dxMiVAj4g3JtaEzTgHWZKm9A2CUXgWs3cmtSrruhdhoNJSwnRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmG5kNgshJueqyBt43WqWKmHjy8YbW4W3U4gjmCrVcLGiDNScYurpzuwSwnfVvBADRFuBZpjsrdtYfavSGj69Sc",
  "key1": "5wYhxdNSE6Zsk1aXvW1fDaPzrSGiQVsCT1cagdnGiMRuYYvB1aNA6HGsTu4sYYBNAANKizZ4LFKrxE4o3bu3srcN",
  "key2": "3TL2KVc6spkMnejA6mbdeW6VTiYe6JJtVCRYaUzpF9LzKjxodRHnoc21hsTVawDcEHo4LScESK15J86d6s2G9Rcq",
  "key3": "5yPR534NATD7fkFzqjpjEVuEuXGofDnc3oidDsm1msorktnFkt1EwoZzD59Cy3qxNtH8CxQYnLazoKMYnuRLgA8E",
  "key4": "5eXjwQjv71XpDDbK7mFMbfNPW1t79cH1Fibmz7ZemVzaWh9z1XfRejbGWWsW6pLMy4AxgNESrBTRyzwUM5qVLUu",
  "key5": "3iGSnGWn2MXKk45YVR1pgJvMJVcNXzdj7RbAGyM9uyNMEHi1UgdC6YCvvmrky7GeEGDGjrB6YZU9D5oRkgkNYu2m",
  "key6": "4WMeNsPzp52TKktKcLBXvwHnykihQ8jP9vQf5bqgH7JUNPK6buQJPE61EUfyoKxFNM3j7kiMu3UTmVUrY82wmQcc",
  "key7": "2z4Hs1whpVNVuyQvcqBrtoXM9bepaK34c6bjVFzKnngHhpYBhshmvRo9W8hc39Sg3dYynefuHyTsiy42WyBJyqBx",
  "key8": "2xVuSHrQyjtmbdfujKMbWsdWQr7pZvVDGkxCLqho8M6jbsBUnP6ozs2uyMxS87KmChvwxasP2a8Cse6wAxiH77bE",
  "key9": "4sxUAPskZyH7odCkbjhiXkX1FSwJPdMPtSAzWYkmQ751PPMXJbh5YjGwapen4UKSbEd1cSbKFR3sT8tYBEUN8eoP",
  "key10": "44eCS9eMiWn3t5P99WSxw9PKkV7QCkwjt1W4hWiwJkkreU9c4XR5z2qK4fY3aUSDBKLqermpixAiXhxfQVxZpUmd",
  "key11": "oWVtZgoTHZ8zbUGjH7fuK7ZMxvC41zTHkxkrnbxQKWLN5HecgBGsUXd5zQGACNnFMSUMLM5ucNHz4Xdh8FSr4R3",
  "key12": "5jRMhKPX53qS84MFSgSqzyVU72T4FktUkUYRfTv9peYgYGvzp4Kcsm9yWgVzpZQ9trPK6sfzSh4X4U34RwL9ni87",
  "key13": "ok8735V2mdS56GBNoF7vxSQ6qh2vWfXEtVV1GSDjndqFwuYqjHrT3gonYNC9ARxHq94Ny3gwPbt6y9L8UHqcYMH",
  "key14": "23cdxbDeWnjYxW9Q9eJz7ZboZH3KyUb7RxxRWqqjdCGPQRwhJAffPHwhnJWiWaDgBEwTfLJQ5UdB3HX4bb8Qqrxg",
  "key15": "4rzpJF6xVsMhpFXGXcbMUjAKsp6HWVEQhXnXmH8xSRGMMGjY6Nz4qTbazECguAZ83KuuHHhN7HKR98aykJpcrBfG",
  "key16": "49m4RfnAVQYT8tMqoV5ezhEu95FuutR2FsJZd6unamBSyAzFaCG3MHjWzYPvqCcLcdPrSdJvHn6Q2ByikDoNypd3",
  "key17": "dzKjWD21sypdX1PudDNMJzBsS8GXJt8qQUdgiNB8eVVkeHbzJDe6Yue4KsBrtUGiu7XrhFnb26sxoCqAuzaTBT6",
  "key18": "T9iBzn2Bn6Jge7MYx4YM6vv1Tz5GNiayByva2aAabGiRzkx18SnCyTsk2Wb5EhGtuWHGjKrKFW7YJFo3Df6GhkU",
  "key19": "4VxALHp5ka5fyrudESqeMz5wPJFxUpY98fjb1PKGdZrmLnMkmTE1z7qoaUcn8h8QZxHcH37BMoWXw8EqAkStZuRK",
  "key20": "5Fr8M591QDZq5ptaPf7QGZhCZsiJACAfkqB9FK8VSB36dyhQASRFspoWJDkNB5kBvKaPKtjZZ3staSYBHS8jf7z1",
  "key21": "4RemdG26LywFtKKPVbXcCnujGH2GsLPzqBWATBzw9sqbW4tmtPuxZfVZx6f8UhGxR2KPwzT66VjGVwDGtrS5r2JU",
  "key22": "44AubT6UJryiL1cgCgkE6GWSgRujKtcHUjAkVBMFW5kanuTFZmWcXoy8KKPest3dnEAs5ekGneGpDBAqEgzbvFxM",
  "key23": "47QjG6jTHktr73eEfLStjo2bSTZfCk2UNDSWirDm1Hno2vLhtPBCw6X2cQJ6BwEwf4bpkpWJvCrzQzcquJ5Knvd7",
  "key24": "hfuD4no9kjLtuLWPYcwwMLwJ65qo9Xg2vTjvGZfw7rUTYEek2ZUFCoZbn7S1ARCXv5Ewkp3VjvAVBFvxBcFrwLA",
  "key25": "2Swc7GSf5M5TAwqVe9CbktvCEtGw51ZgLrsSgCgcGLnsxmbafwCw2YEV68tEH2kavG7TGEyKYUFJVqM82xrVnaLV",
  "key26": "3D6kh9jtzg7xUpuVXj5qMRPtQMU5ewD7FngRUhh9KSRaQ7ssXian1smn2C69YyLrYYKwHt6ATpp6h3GwYbtAfDtB",
  "key27": "2dxf6Hhd2ohjPjnLd6Z59uJ9MCqpFCrvSuGJDBQ3Fy9XLKZhNSv8extu2ZZNZAYzrLrkE6zf6nx7epUYvCoiAMwW",
  "key28": "32FrRz7wUV4yH8P4QkwjLf1ypiYhHduaWRzJiiXbBa64zr2Gx1jwyTSoeuvGqNjA7TZXmz4AVmoyNsSCMFnVUzy7",
  "key29": "3rVw1fE6hTCNqeDEZi6veKCKAXrcN4XZ1nekpzz2qfxaCwZKuWQUmRzPi1g5po9k2Yagcsdh2bRCK2tvTuxxrwaq",
  "key30": "34N3JjE1M7KHQ3htKXMC63u7d4t9PEYfX8DEv7P5HzQZjBJwzFVuw3tc68RKz8NLMPuhAvsrHNCPKTubgjU2FkUH",
  "key31": "4GCxqwxStHJseVzH5p5daeAb8UUS7ZqKsLk1FuX5NHwxenUsTcKS1fJRHZsFuTdRPDYGJbLEPnNzJrmdyZ1J24Fc",
  "key32": "mJVvFsCnUBxRExiZGTwioQQUx7imhpfV4uc4o4PizwNUDEkg1C7JX2uLgpvkfQDiDFjr7YjKnBvZHMfiA7yGcNL",
  "key33": "8PsXqZmaAjXBAV5BDTceC1NukFy9n5i6cFXyiiANavPXGmX6fGiYeAV4sbrfJrqiEAokfU34KnTW2PsuFTFdNG4",
  "key34": "4HeVx43BTAAEg65hERCkhvXaRRHLJyFpm5thrSFK9ZjS7qXjhGieF2jGdeFxvkJDWVH7VPvYVGQ1HAp1xrsyGsnx",
  "key35": "KMAJPSuqwxKQCUsho9rfRScoQjc3QJ9vKokJiW3eRgtPJUxW2ZkYHX5c67f9HSxNtX5pGmL2MX7r5W7oTGQDivR",
  "key36": "2SZ1Jk3mgz5apt1z1QAEvNJpKU5DT7KUrHFnTuny3XrH9hLK2izgqsnMhqxhyDkPPEzcGx8rsLmxJazdaAJNVtKo",
  "key37": "4Jhr7LSJpWsCA6DyoufdtJXFWEyXZVGjrnWrQF6dD7cp5rFWdqyhoEFHqsfV2VASjhqyHsCAj2upZb9946iFxcQn",
  "key38": "HEvWTSYWLwsNyKdHgBbNeikdEddXMNSsFQWawH8C14Cz5AgAcwG97B3H5aaBoW9qeLEZbPTuMePHZ9hqVF1gCQ1",
  "key39": "4epWFdXQp6QQFusXBpyv3YDi7hgQRde6sHsXvvLLyfzPkje6t8qnm3kT1zm81eUY63hWZqQb1Mphud32r9i83ebu",
  "key40": "2CH8fZhNS8PJwjAbUo2kWoyLa5rdu86E5FKYAtc4NnQcb6jpXHxSASPzSXBPtNaxc4uRhrLuWYuoZU2ryFLGtvTL",
  "key41": "4WR72VnZ3NgjLRXKiqGoNKY7ao8wwbYMgqN67V4ZSvNpkUjbMdnYp9Pp4JmoooBuUJ7xSu9zfeoWbkVLxXrxNpun"
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
