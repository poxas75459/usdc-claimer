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
    "ETVXwKju9u1ZrEASiFacwu9kQVMxU4G8Ak1e5hzbHHEMEt5ovQ5o9f5SBEq22E2iLPTmJTG53JcHv2SsRA8qmPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfChomFt4sGkpmQnujgZHHZviVkrQAsnftK4MmWwed9GkjMLDWugN48RmR8Y2VeYm83ix4pZ89k6WtRYEW2Ee1k",
  "key1": "5t12kyBJUqviyYm6Vue56xhNxg13JZAUMbqWFYDt9b1DAsGAtn55RNKWrFxej8YtmkdWacKBnoo8JrYavBn7FZHM",
  "key2": "565XHcfo2hboFEnveDVpYiKvE4sWFaPYaMvT3bEbsBmCay2f8JNQsGyB14RAUSaXLMix3Ck44whzZMqHNR66G8zT",
  "key3": "24MjjRyqNcY3RsBik2z7DrbsfsqSLLmeKBv5RtYG5NYpCNgaJ6Hqfbek2oYLNd7WKBpUmgKC121tQ2b4m8Hoa2qp",
  "key4": "5wyQcvov8DnmsfZuBpg9VZZ6M7pW9VwiDsdiZjQ7Wpt1ksZ2TPUEFeubLKiiBAvSGVxWRMkUbZRWjiYphJSbAFvn",
  "key5": "4T43czMek5faVMQ3BbQ258gkfBia6SpAAEkjrk57zPT28o7XyCZrF4gXK7LRmrZG3SddSrxPtAVKqaGvkkVT1sQF",
  "key6": "28nS1XvnLzJBbW9VDYtHs2VLQMd4jV5gob6ihzXxxVKYoZLZYBUUha64bD7dwZZJ1gn15vF9JLwa3oYbiPsQQx1m",
  "key7": "4BK5PfiXu5qVuLpTKGXwTrqcdRenJHEcXBgcHPWFnrLCiox58KU3T5AVH137aKyw2fRbpMxJcYo7xwKCLHXJz4eL",
  "key8": "3nprMkKo2h8roK2CMnErDWvMB2JxZCxmmw5vMYCucjYY6K9G2jKMdJWPXzPXWsTe6d2W3rKURq7zoRUhYs5KmMBj",
  "key9": "3QaMVPeHHXHaaxNrVoJeam9QXY9fTSf4HwqyGm4Ve3aFVZJ9XNyesMUKrNGEmVsD3f9hfTq4bMdByEt956KxayHa",
  "key10": "5d1TETDiKXywd45sXYUxmptPitpmeK4mLdyPuf8kMP3EgVHcRUuwyERygk3UiiiFoUU2vXFW5p348iw8cvJpxGTt",
  "key11": "iguuyJYg3kRE9ysZ4vVRFTh22ZTBXUMhyFFevVhJ4ZzkQQ6uzbNn6zJbXvgbapRHaU2P8e3dL3sa6rGnXHNFGoC",
  "key12": "5ejr8KrigqTwRx5vF28xEDQDg1C8v87kj5qNVw34eWQrM5uaPTXC5VTbcfa9MrC6aXwJqWPNp5okhLGoEoSsBQnq",
  "key13": "4QFhFes6mhBxtszKUbGxwxvp42CgAy79PtmMMshwwWoppapbdry3ybVPE1mbZm1yz3t72ehj3dXiWH6g3eTfmf1q",
  "key14": "65ASCwAnp2mXjQRoEtwCUqhiTWMW2TvmdoL1ERjhX81nD1H9XUE9j5KBcX3Yg5QCoVSY2dHhDkT5yeiFFDVQ1AFQ",
  "key15": "4XgKwuWbc4aM1bkcHwMVNUSVU84TNbsjY6Q1Z2FQDKh6735WsaUTKniYLwwoA7YPSLc2HJGip6fvLojtrYzaZYcj",
  "key16": "5sczzp318LZZvKx5XEJotctkUUFRtgYC65497Yb4oLGbvxUJYfyY2S6c8znHeZALpfS9mtg8rHauSAFciJuUEt3q",
  "key17": "51UrZfvQQ5yThabjrJKZCiVrYTAFcVbZmRpPYijgrZAUFVJ792RHmyT3boi7fLDXVqvz6TkVpoxajFv7KKWfEhN7",
  "key18": "4oeTmL64Wnyq7HtutVbm85apyKXbrZHfRYZpCvW9sdPpyho7xvZwqV8ozHJ64eEK3xEKX1jfmbPauYQaUkzuWCwR",
  "key19": "5EaAdGHCmSKWicL6snzZ7xxymorTap6uWEkzUwo1frktKMYYnMHRp911q1X4JSxypBDRq3urBkk64QG3hvunPsLg",
  "key20": "24kPGD7Kr4m6uzGZKKfsEw4dMLbHcqgwidUSC1RcCGZJ8TxDqc3o95B4ZWApziWidVPfYAMYYNBCJnTxpyPM2dwK",
  "key21": "4k21DzAPjE6XcKnSf7Dwu2cPzgaZ86EiTcRQg7vxrRyRCUHUx4gLGNsXYsYBRSTWzZbvFNovnxhQxQjYSx3Wp1t9",
  "key22": "5UH7v3Fv8zQjEpWW42JuJYTMq1iv3fitmwqKKkFymAsRVdBi1YAiQEWLozVkk7JstqY3VGDCPuysWZbHm7B7jRkB",
  "key23": "qyrywVQ5peDymXbwTLbUXLJLr9uRn68AvKnUMWgDgP8uSYKLzvd6kUB5jNXme1qiWm3Y7EMhnrEmDvWWh7u5ho9",
  "key24": "aYaboCUy8db2gBTTQsS3axWJCmoyuXXHBV9Cm7qNVFkrca2uFC1yqGPcGFbd6UDzvzbivDjj8ZdFYMi9hjBvwGV",
  "key25": "3RyGVYrDZDLew6ZpzfzDGkX8HzBfwjL3KLggHmSbg2RnPLKLJ1Ue8zw14P8ddctmHd9t8KRS7Ppsc1ytsvwybyxx",
  "key26": "yJWqZnrQ3VkVCKNHq2KFEGG3N2jqw4wGWW4XxWDFKSdn5wZxyGyHZLv19tKGNevTFZXA6UYdHwTNMwkQhZPUgGd",
  "key27": "2mtqHxxg2H9oQrnKRvoBQ94T8Wr8wYgGiAH8c6nXhJSwYvWusoF1tTHxr7GESyGQFLYLxg5xfvmZtthrFTa9Yh27",
  "key28": "3zHH2yEyhTgTamR3BUb8Fj4hrifdA9s9tdxC9J4MYEv65MR9RRXdYfYsWJ4aFRWtRH6fF3Ucagewf5dJZnvEBBCx",
  "key29": "5wHTedBVRXWuochCD9k44BvSphfwSV9eMnEWNd4vmgD3YiGhy7jB7qHqiCFY4ehScTgn2riMkcYfAnzeGA3Y5kA3",
  "key30": "5JtXWrzj8JByxjLSTaDtktGeR76L5Wi4ZUzW1U5mCiKESTGin4Y4WUxJiWtum6wV4BJ7dL4No5DYLG1tpdcms7iK",
  "key31": "28jUZcxHzuZccMZZ9hFTfXmEtpACDe1xuAMA4hojHFUUG3U9pLzRg3VEkqcEpHxeidzuA7j5rLfkmZYpHj5enUH1",
  "key32": "3nDECooM354zbaX7Mm7Ykr8QjqCLEFX7TXYRFch49Kqetb8LJMqcCx3yCfZzPJ65e8DgxpJqB4kUrQsXsVtnH59B",
  "key33": "2gZN5mPRnSt96J1k62gKGkxzBEzQczznR3mQojJFgoG6n3Ewc17k2tS7sJuUpbem7ny14m9YVup7Rc6SNgziVgFc",
  "key34": "3BvoTQnHDYEVHgQsXb8RCGMP9BTNrnZZU2aeDQPy2hu9myJrgizmzUFXoa8zmUBShEvcP7MMucR9dqM7zGVR69hB",
  "key35": "59w3Pc71KX79XKLuZxkHx6d6zqEZ1P8jbmsKYMeRvNDooVK4TwNbiySLtR1tB1ZeXNdb6oDKq6oSzccMungBoLYe",
  "key36": "6YdgyyAsU9sYktXM2vd5gA7cVgYACeQo76cG9D7ujHVnHUGMFFv28n5x4Tb6yF2qKuTs74C3aqjynBZgtW5A44E",
  "key37": "3eJrXvaK1kCzsnaeR4GqmX23MLy7bbRatqdva8YVEbs9iHXaW2VjBCK9TFyuBc1nzTQ5j58DVHz4jBYRTzRsvnUB",
  "key38": "5qjVYUvFY1AoC9GSzmBzWGw3iDxHH5B5aBvEnBi56Fkr7Au2HeSNbCfgfsbSPqK79vpNZfXEhSna7oHMGSEK6qbQ"
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
