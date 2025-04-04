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
    "3hrmUq22nogcrHJpaQskfnempWaoHHF17hXBtfMwph94S872Jt9jtHkUVTYLbaKDpoRMLF9vzwbQJNoFvkkMLqhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Uj5YoawC9Abj1PzTtdgBHRw1S3QeiJDysBW998QK5iRQPcLmqKRJ1AxXUVVZQnRYZS6puHTf9F84XCvHAKgvJG",
  "key1": "4V3EiDoQVeFbLMyh2hLTq6i1WaeUCVtoBKiKJ25ByTpiQZGYxDi7z6j4hLyzscaKWNuwjyuyy8Qt2jFnLYUotsag",
  "key2": "2m9Xegux5MbdUQd2CKkLArrasWYuZQdWp4BcK6Ryp8n2CZqhnbgZTJAx1zeRmaNkimwX5QLQbGEAJrmEJF8zEqq3",
  "key3": "5LhdcXKpn9KGcHAm5SeZduGji3b2XpfWB73TiVRLm1BuHa362xNfGLzBgfAe6iRYw6D4KApagXqLDe7177WuGnpX",
  "key4": "uZzZ7ZqAJqAmLxUtWRyKeYhkW16qYXjBYK4Pmz6vkdK88HoAnBN8vujWmFjSmcgnJDBNjY6N4Fqs9RC8oFApjFC",
  "key5": "5eGEp6Sewjui8UYUpJxptmet5RM9xzxUzX1ipbMcU6vdJuyGeckrYXcoUrio8JLBjh136SBGPehZf2usG1fCoBD9",
  "key6": "4j97X3qATbeGxxJE6cxUxjR4B9KEPekH5yc82s32Sodn1YPbuRMVPcGtk6JKsNYWVh4DfEHS7SndwxZMnhviXNaB",
  "key7": "8N4nLGKqPpC4bAQeDxWyXV26nNsn1KJcu9n6zNKrLvZeGRzVL6YbfBnyvUpFDJ7HKfFGLiYhchufhxG6s7w2ZEd",
  "key8": "2bKF45Z1vwa8m7Xc3jSQGs9wV96YGD1oPYu9WwhnUzuPqA9WftsBh8ExvGW7EoJxDyZGJJcN5kTHCqgrUUQw8Y9y",
  "key9": "4RPkK6TGnbuMFQhC1864teDM2JzRHF27tRV7k49ZFDMFniX7jDJjcK7vw5gXHztb9phdqrozJhUNnx351WajbHXy",
  "key10": "3SXKCx2cUyVEChBimHcVhVe7bUAHSuxKuPGn9kFMaQVyy5rZdctcPtSNWCuNdfweMHVHEvF19qLixMw2Jomntcm",
  "key11": "4EY4jsYRad7nHH9peEqVQB27qetjzozKqFARFmJpS58j85iGi6De6nizas4PTB3Z7887jqDDsAnFJNLep3o5LqHs",
  "key12": "58HpGn7k7iT19jhVqAiZqpM6bjLTriR7VrezVNj98HTXX4kTSWEYJHP4Jj7CAPFpeyJHqEwad7poc74337EBRS1x",
  "key13": "2aDrHyNfDjU7uWs5GpNCK6ERvy29KPbspEQ8smkUkbCmZcCpcnQDz7rXGGG5rdbMa1DrGa2sAgAhpjoaxNSUEc9M",
  "key14": "5zdTLhjB4iBr3pGQHCwcm1vcrvsVZfW9gDyuxoqXEeYYYdbiTi7Ci5KsbAkaL8vP8XPPYWcGZv8d2TuhocUdom9L",
  "key15": "5Tit7EBmST7jq71voGeTPPRvMLjVt44fH7YV5FgiTDW99GyYfhLSjv5hv7sDDgHFfFdyeopbyTmjrvCMBFwxvNJn",
  "key16": "4kAVMeXSWRGa5u9LqE8YT1uwZcbE4EKgZTB3szZ7pDwygwqDk7cjbDKbXFt78Yc9RLUAuofZ73ko5BiBoPxDExYd",
  "key17": "4EoWjEE7NZN2sKKhdNBcLLVLx9dgFNEKN78ZaWRwTppXBGQ8HPx6PZayUJzSZ4g18su31PV1LZkeQeKcoaXgChmb",
  "key18": "2EswaH9vHL9MmqXRu8swk3m6Vjeh2PQJLvtN4iKnx8D5GGWSz66aAK3ndXiH9ndfz1b9EYUJUmvqic3D6vDpXMbr",
  "key19": "ivuscD4UijEiqC4uS1uUgmVYXi5spCeh35TngRMJUBdh1ipEt3Ny6dxcPVotk42PGRH2gzTjewCFgVRrmkQi7Pa",
  "key20": "2uArfjszonE5LMcPPTcmHirUpd4836GmTMDXUYqtFypdAchogcBXRGdcB9YDGNJLdJMJXLmsmLSQnkLZTPngTKGh",
  "key21": "67p7YXy5B1jUFRo639QvrVjeTkTQj8qETEh8DLiB1j59jKXyXXzhE9VNdaBvQMc5dpsDQ3vRgmPb7j8gGfHqpiHq",
  "key22": "3MmwdchsCFw3mRE8XCNkvmcpuk9x3BDh3SrGM3CJ7s7wEm1yoBxqcd8r8xjyiQBZZ83t8Xv5fE6pyoaWLD4AMZXW",
  "key23": "9RoMK8P2UnAgLgkrCWF2i3CH9seaPRykAenTTBHZfRYBqQgBB1wbxt13vv8sgifrKmQFSdio97NztjFRxguwc1w",
  "key24": "q8RYzioikds2XWunWCqevtQ2gLyuoGHHUZA7943LxVRNenDPtZM2HHxRFaQb8EdJGyo2YkjTT1auTrZvqSh8HkU",
  "key25": "M7GGoiHRPS3TRGF1GrjN2BW1c59EVvV6SUkcjj16HyWiYojkb6fdNn6nYUQihWgjjkHfMG9XfM39WTWXpQYQCgx",
  "key26": "4mT34r1uXNQnXErAeNn4G2hX6AewYzsP47MjYH2g9PaXhA5QninCf2yuNKfLousxgsFN3676k4RwY2S4Tk9oicFo",
  "key27": "3qHLYqG8D1xy6EqXoB7WvKRd5eeo6Rhw4Htck1eammCTULyfQhzpvAaf9sVJqv4R6D6mjETA5tG8kXMQ39yM7ei1",
  "key28": "5gjUa5pGXhxnmrji6Xo4TUxndn3xbYzRBhTotmAj64DE73XNb2cok9noAzciP5D5SfWYoyPKDXj6mcsj36EiLiPJ",
  "key29": "ZT87Cy2rmw7vwRR3V43GNeAQETN9ShBoyoS9PmAjzpty4ZnELbdatwziM37PkRWzt1zuy2de28d996hno1grPfW",
  "key30": "3Ev75VJGbBkCF3thad2VmgHopwaqjorF7UyKxkwu5J9RRERE1ojjzFpqJPQQFeWJ4mPdodAbqqZMTDyKCzgKcpcT",
  "key31": "3tuR73MWsHZ1FagmhEJFZRD4Y84dGjkC47XkeUuEbvJQqVW4DXhcBfKaf26gNVfgtaJcJWcwgwa5WgfH7ZDnQxyQ",
  "key32": "21r2LFENighs3y2SxMuk28pNVc6aVt2DPxV6iExzhZKKvMaeJ3fGSaGx6qPLgWSi6UkXjMFSyYaZ9fAtWGWwzrQ5",
  "key33": "43qLPWXgJ5jhagaKtwmszqYN1KbG5NYFbQAEwBcEYts51WhYL3Cot2rLtjMFKqhCGsBb51c2yBF87aNpTmqT3iL3",
  "key34": "onUwhmQWh3cENkEfMiFiKvSxRkgwu4vm4xfaA8JuMiRofHeYu9yt6YgS729WKW59z3LpzfGHUmJRGLWXWN9suwh",
  "key35": "3B74k91uHsrWbG74fs2YYCDRxpGyEXjAboJkGbLDudbrqH9TZcb1XtNTpL5ApSfNRrQ1HsQpFkBAeKV9Pyv6F8ue",
  "key36": "2WcTTF6TAfbn58gV17BQCMC2evX5nkaE8ktXegZKYvGbDuCLwKTsCYUvLaDbQyhCaB9kKweitBfujbH8CjyfkYVN",
  "key37": "QJ1pUEdaXFpAi2t3SiJgYh4irTK5g3Bv3P88YR5Y5uHraAiPKKD5zHyxtKEgBX2ZMD9pSNgXPkXM3W27sR9dLTu",
  "key38": "2zgm6ZuDFYyL93UwiPjHDqAVLTLMRtxyBpJsgRvfZLtRrXHDpX7bR8ea1tiUAn1hbpMexbSjqjabtogCgE1FYve5"
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
