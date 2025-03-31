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
    "4V7H5Sq3PMGNom7SzGWketdsraec1kgNy85pa96VJzvpcVW3X84qtFAv8986B24X2WXXh1WcutdT4XJfAVAj8gnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbpuH82KruFBk7Yhzh5us5ui5ag3YaidawBYbVHd6KqQ51igHERdGSqJ9dBVgetpg9W3DzQS49ehFh4Tua3jwkE",
  "key1": "5pUR8sg3UfwQxqF2WqeCA4291A9ezmHy5sKcw2tuHS6aYg3skuZBpT2GF1RmZULi9qftGsdQBjEb7myF7SQivJJ9",
  "key2": "4H4Q9Hav7Qz6Jv78vEwy4otVdvbHikAgo48K4Pfn7SBDQadPYApEDodyWcvWBtb9RqrSeFCWxpJt58BNJ7mGjKEM",
  "key3": "2V9TC93SQfK115nhUdV3XgryBDcM3ZLJvQMvaPjZT1SMjyX1yDgs9FzgNwFpW8bV3zMKSnUwpQCEPvsBoNyasX47",
  "key4": "2uhBXvhPLtqTZsUS9UZ6Xgk4TfSqqYPtFFt4g9HAVmEm5SbwiuNojDjNZwj39LtqUowq19Cf4ayLpjeSwbUeDfZj",
  "key5": "2D7y4USW9xpibbCsc6r2VAtF7vKe6FTsdnCiswzaDwvJB4cd1RSc9MRuFJbyGypRLwUNiA3crRHafKG8JLidSc5Q",
  "key6": "57ZkqLbMhPF9Jzyqhs7ptp3cmpxKWxLJ5VUsQUGXUqgRyjQAr8ux2ncR9Mtnzuxu6gLVZLemquDmCYK6kZuZDLEn",
  "key7": "rYzVbmdem5NVtpmeZJFnSD7UdYt63gBvwC5zgeodTaNveb5yuzi865zxSWUJ61Lu1MVP7CoKFqcgjRyZmbN6zs5",
  "key8": "apkRu3jgymAxMnHRozD1ps3Ce28SCdzdaUCMn4JQ31vqaprLtv4FaHnK8UjbefQ8xhKarFirEitptwPin9CqAGP",
  "key9": "4YdfPBN1nLHGpgyWY71mQiubp5kzbVEgyD9P4L6icX9YW8GWGmDw7BchJAhZAQBv2jeTQXNMMtmehBGbKHbxLnjN",
  "key10": "3h1LmRdCbHceJ89JWoshYMybhC1yoEFuXLRA7smcZdby3n8YBWqegFUu7HbKgkcPqb6zg7wjkCXeQrwfuguAffSQ",
  "key11": "44YCP8XMunBtBCZDk6yQ7ZPi1snVvBQiH9jsNZmHWajFAR6BjwRmCtotmbLWd6ze4YWUfdAxecieJT9jr1MXvWHB",
  "key12": "5G5iT5S3uoNXBp5cef7Wk1DQqkEGN35dvtC24QMvTwun2iemD6fKeRBXhW8gxf8vboM2jcwqvELzYAqYv75yVMEy",
  "key13": "66F7CU1CVcN9fHBGZLuTqjFoSpkBjB8Y2bCuPP6cGMy8bD8vAKZhnjqFxjBzdzDQj9BbissyaNcyo1TDUg81VxxH",
  "key14": "32aWE9MXfU7oHwTdRe8vQPAWQDrQCu6mPGqpLRNHkpzSFosJFLgRiBZezCJEPGkp45uoLmPhQuyvNc943JtfizWk",
  "key15": "2ScXmZ7NppsaPBWL2N1MDxhV3BZ8r7mXp9v69Q2HgL49NFK2Hupseuh5BCQpUNUAyr15hxRTcrSt974VSq14Z4aa",
  "key16": "5D24T3wnZ48AT8C4CEhEkR455o86zqzCy8Pu5nURQa2eL3MZ7rQpLJpruanKtYZsGGv7JczrsB3VbpoYKk4b9617",
  "key17": "2nFYpgGT6vPUqEvneCGUY2xkcUdJZtpcU3JQYyHAvH7XjqNSj5p46EnTdhPGK2BLna7o5CyLm2he5BYoKu9Vc6L3",
  "key18": "jNNjTaDxejNwxCEVTy5LY8TkW7fzRN9KhEwYsLU94jMnFdYQZUgXytzvP7WBJwrGzo8sQfYfJQ94VE2Doq6cg7S",
  "key19": "zEUKGRtMSm56nfU7qiCfQCZVCnEVQM34G8BXsBQ5t9drq3wgAvpeLDFaKA5BCazSXU4Jte55vHieHk1CV7jJUHg",
  "key20": "4CYNj3JLceW68jxdPvA1ef5xcdPBxK1kqUTeomx4vv43mFTSpzH5RxqEZ4vFLXt8DQCYnJj2HQo19xJ1KNpYZFbW",
  "key21": "4SKqxr1LLPv7AEZqW15kU6ASmWw77ECXvrzCvTpjo9eY9wLpajaaEietLp4xo7HFmbotLXuUfwLhR1x8ooBoo6fz",
  "key22": "CdaieFvwwAZ9VPi262vc35L4vxFafKSTtDtNzHdXeGeC2kBKfq9c1mhEQ7xd1Dd1VkW4MVbUy46LfcX2LJrBh6B",
  "key23": "4JC941bcGMB3LwhzQAGSqFrbmE246RFGKVdm2fZEyskg4KNCr9Q1JF66yNuXxesFvoMTdJWFiTh9WZ58z5bJ6NAS",
  "key24": "5QK16e5p5ZvZ3DdodpFrRiY2ZHr41QebhLhheDJbHSWCBWsBzYrFRtJMdHqPJBDr4GT9R1VoFKAyh3Hw4zyFA1qe",
  "key25": "2wa1U5gbkcQp8WzPZmrnwLDAmvoTQDju37jVPENzZdTexRRrTcgcNfJA1qUN9TUoMVEXEuoPwtHmeCRVUw1TsVft",
  "key26": "5wQqi5AsH3bCkggP9JQSiUuBpmD3qhZ7y7xPPWEHcQhMPWkW5SNBhCVycutDa1GbYobPbUVZuNAhRaRi1njgcdBD",
  "key27": "FERgDwUhSxj7vNnoPCM4eu6BySSCHBp4jvyfWxNRH3WXzD144pDYFrqYFNPD4j6feVpgaKPFnN6SzewCATuyPew",
  "key28": "3hkDLYFhJqEWph3kFL1mBPBBNoasP8KZGBjf4bAG2QF2vr3a1Hq2eMYtb26J3Z62jpgZSAqtK1CSy2LmnL6Mad99",
  "key29": "596MArRh9bxAdEyNx5UF78ftP93MeH1EGitnnZ8udZf4oT98CCEKPdzyt8Mkgt1YpPrmepjej4mK3vZP2Ca5ADmC",
  "key30": "5w7WSPvVFE1T2Jab2ZgH8zK96UfB44US17qd31PdQNaexr541FtgX8im7dy4bKyBvaLwYU3ewkFcznZVXLGTon7Y",
  "key31": "WyvibqxhP9NTaeRur4fsw8LAMjPwuU1MtVJCGZMTdzHC7ZUwEo4chACDWwcAqW9KYMPAURveFKgxkb7pzB9q6HX",
  "key32": "4SQafXFXXwZzkTXVh8Y8xAgYHcfVffTfSxrb6x9DFRFFYmBpFDSNRPNRmNfgNLU5wq62pUQVvcwUimVDQwZtUEiX",
  "key33": "4ug2nYScacumSbvQi8oRFjMc3cHT1UeojrzGcZv3aawwR32PaRfhfTGSSTekn3LuCxk7RV1xHjadWxXRZgRFsBqo",
  "key34": "3fzvehXKnj6jmeGCTNG6KAZ1gntgHMop7g1sTVdtEGu5yPvVSV7vfkaSqGFp5xGNcDWuqnZdJ7y9NtaKTNi6rCqc",
  "key35": "5kYxwTP1SMEm6kS39BGMfAzJ16RSDzCZiFDFfL7rSPKyoztN6nky2HrN6NUAgwBQsu7uCR3w664thmHKnc5rZccF",
  "key36": "2dTXgZ1dAmU9uSt1iDjniXdAR76R3YunneWe5D2VpXM5wPiugMo15jSDXCsKbMKdFgkUPEVJPugeQzCSjRtC4tEG",
  "key37": "5J4x9HLJT9brY6dcmw9i1gQNXiw3tphp7BXQSzaeQsQfmdmJWEF3V2Z1AGf3vk7SgDNT9VSZ7epiG12THkBcY7mT",
  "key38": "2ePvigMiTM9gByqgD1bKSBuiYcVyTivmGAHjY4bw6KZtAJ8TNc39HgqvP9hy3DVaemhrPwHrJDbRTeqwnXNAHCdN",
  "key39": "3uUwC1f3kJkyAubW9fEQjQJiCL8L4YwLe7s8QnghqV2jZ5vbszdEiB1QoVDhSsECHPDbyhLd1SDDYs1PnE1f2PGN",
  "key40": "57quzXjRnyKvfEwTvRZHK9wN1z8vwfVuqJC5Zhm8QiQFH5b51T1obUi3urv2DRbeRvsWxvZ9sLUvMvsdu68A4b8h",
  "key41": "5e8FPVbBcFb68ZtYhx3SP59YLtBs1HHB18Lgn4icsHcaQVT3S2EkzjMFweyYgwNrXyRFL4BTMevb6yUYhZehGBpC",
  "key42": "icX48FUd4iHZifLdZKN7eejm6sJqoAiZKXmTADr3y4dumEfwqJUgNo61w7aRpbBRiNNWyXsDF63r1zNYqYiGbAu",
  "key43": "5coi6BdEt7GL7aUxun7uN1TdS3zYG9XyveSR9udHvr1GuvvtuuLpag1iu9LTCeMJ7sGSD6HuYiJpZixpHg965nhW",
  "key44": "2U632wzdmyxTX1UdugrLtahpaGuDAGRJUVHxrd7m7tFmB7LYjmWCX5dzrU9gpjNnVxqJ4K6FHzAFRjiuYUo7LLoZ",
  "key45": "rioCJsx8gGpJhuA4dEfRkMyfvb6kLJ9X2rxqZFdbTCKJt5JxUPJNjFSjS7VuPxtojobuJdZXVJo16ye5gHCXSBo",
  "key46": "4b5kCcjsvHP8B2esFUEeTkbfqiCtCoVcpeA8mXuEYtvttb6Wea6CDQv3cr3Ez24wKpwd3kYYg8BXciqtnPvi75hB",
  "key47": "4XYo6rPJNHcMqeS8ArqsVfRFVDodU5Xpa1XNgxfibyCERi6fEnguQCWY8W5vuzjqb7sFxPtRqDaWuzeQWT124VWM",
  "key48": "5jpeqM1pJ3auydwxSDc8mC8uCqNin2wssEYt4UYSVCQJaHSgPeMSUoWPeZBTnccbyUJQdNMCP2qgDaqo9QEQKQ51"
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
