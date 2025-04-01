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
    "4J4wGgcXJ569u3Qu1dpgqAJwBVx6K21oD8PsGpDB4DVkZYhWNHLZZQb6mmoYc7u4LoZAUCENRWahrXDe76YbbKh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBcn6Ec8Xvjr7CzKz3Aus47d9sdHFnYaPxSLGqhTS698dhsuni3v4MCbLB3U1TAA1SP7mAhWfwRcZLMhWcokpr3",
  "key1": "4cizQh8kQ6gMwYRFuXb8jWaGMcfqzvbCujZtUwihWFQzYK9vsCAjsGzzexKhSpzqX9fDF66h3P91qUxVLb7b19o",
  "key2": "yuJ25RymszpHaBpYejUCKRCZJH8sgWvv1aPAgnMmakKkettTcicFgZ5GNGQLDGv2cZEeVFD1Ys1zuHPn2VHPUSh",
  "key3": "XV9fbaH7MKLNH8fSGP4m75Hf3MAenoycWr3MkN6XpwHRbgGBeRwMpauBt5fWuBU1F6j93ANhy9BRcjN3W5JCio4",
  "key4": "246nsaFVHFiNjxQkA7GZJqi11r58H1B2XWS3BzuTmhdK4Mp1TWXytxUTACcn7Vqe9KkqFv5DL539SPSVBUQn6Jxc",
  "key5": "VTce91ktXT8LqypFTAVcFhxarq19ErBReo6SZQ9nRfNpFJiviLn87b9mJqNPvg1VkwdMqNDWcgqRyPrXbbMcJWr",
  "key6": "F3iieaEWGDAgF6ycVZQjajzRsqdzqVDp5LiDo8CSk1HzZup4b9CjkPHGEqZyJzH2SMZ35aSKg48UMaLJUhvTno4",
  "key7": "3UUmgPTk7XAUJt9TnUXw97uySJXJE1TwvdS6xBEWBA7dFVomU88avcE7LUYgvEFLu1k7BwxgRevreDo9xNsrXcEY",
  "key8": "53QEMcQmreRk2KBYRA3Z96Ayc3g2S5reDw86DrN21r2DChzmbaswh2Yj4FPd3ehm2cfqXGWyBvDyckoVS84qucCV",
  "key9": "3VVjNAwywzVCSJnxmHEHzccBa8fenYQtLNwYvNKut9oJXFPPcxpwm5JcSRJrRF65CzCQSyNq6WZnqoLjyrois4Tp",
  "key10": "4XfosjU1CcKLFbgntohaeMuH4A7tVxirW8P5GAniJ2qkHBY1jKdJjLkEwQdKHty4Hc87Wd8aoZ9AQDyqyMVqoYdF",
  "key11": "4TtzsL9wgN9vrxj6oigtYda4LQbHjpHTPfmawHQSqNHUbAsBtKCkVnP6UVfJKs562YhZoMcW42tfhX7KLSYTHnyp",
  "key12": "4f6tLF4MvQi2SBYe2ffrQgW6gS6uLrdHHBGCyArZ8EWL7yiFhkUwde7p1HK1fS1Brcq7BHSHfvXk1KpeREy3JFhu",
  "key13": "64ptAdXLjr4EDvSUBzqRKHBwupeK2mB6va5wpihvYTyFWhvg3ZgNcSDaTvewFMxtQZePjZURnJVBXqTsAxf2G1jZ",
  "key14": "3ChAfmXYAwzNHep1fy2Khchu4UpPJwbdG4UmDMgSSFXTAz9CYYW98bs16G3jVx63RxyJrKg4NZ8eEJjxnNSzzsFJ",
  "key15": "4cEGTZBaooZeBZJnWXUPET4qL6YywtduBLG7JmMFvem6QivJPmpGX5jK28aYEkDZJQZz5FEmpwXWip1aCognzoVe",
  "key16": "3tZgTZ29G9jWzLFwJbgZiR8dQa6FC5rXerZm2VUzhLpTYk74cgmEEcjjpJ42Fn8zGwrqdgPgNe3CqaV396aFkxo3",
  "key17": "5mFxjjWhxhxaNx2dSPwVwqckqFNEsZ8AKbKHHJWk45uVNNZMtebK8utMPHniNUKEPp92T7syynX1ddN87hLWJZB6",
  "key18": "4xsPcV2r8pP8ns63NfUbaDc1LgABQPwb75Xy8pvcNsGfM5RmnS5sX9JZWAFVP7X1Fjet4TLBtxXWgchhbQ6ueFht",
  "key19": "1EXEWNanaxPj4cDBPYxpAH3bPtBCZvboiPf8JfyDUj5mH4dBGA2CC6YaMUx49EYQhgidf6xc2Pm4SAreBg7dtRE",
  "key20": "NbL38TjzaBrBTZBgWYHu2181JscbavkCo8u1YCeu21kDKZPABm8GbKf5Cfv5kU4sPKBvvvqLRejkCstLmHNKo9i",
  "key21": "24jJ3sNaec8V4S94ZbRSzmP8a9goJK7iLGRCzi6WqTmNEYHgaxtJwdxJY8N3kENMygg9mYvrzzRX9ULNdWd7KarU",
  "key22": "4zMadT6iV9GxFzy3RpC3YL7XdTifGXVrgnLPeL9WhThWZbXPVZQPzDwq2kdxcmU34dvX54V7yXWybgWiXs8shyyC",
  "key23": "2ogyr2ey67EkCyk8mKaMCo1XuU9BH7doq6BYuSLCNgU4jioEknyheEfKykh9jUZGzjTXkGxNdPrwKwFxsuw7gQfU",
  "key24": "5fg46jdXurWSB6VLUUAPv1eX3M4svMMNxFGD6pakf2rqNzxgsHuNJU3sExoDLk1Tc1ue7Tu1Ft6mhVxu5kv5ajeo",
  "key25": "4SdcBAriXGqxk78WLKG8SGkz7dPaBAuKUBkyJvM6qW4Kc6SR4ZQtcZW21Nz1w27X8jXXdWjjqYdQZ3eYaXWXstL4",
  "key26": "FdpVnpKjYhW8r3NuZRg8KdRHgvUZC48L97ZQ5ZwQfVcFitWxMSv1XYSdUngE6Q8AJoXmdLVq1xTQjdbiHj7Xife",
  "key27": "3EShBhrwRcFD1QdXSf6EuJX25TEu8D7YvLGKTgyZD9RnLkP4Xto19RcTwcE1DYhVaD28nH4zt7WZiN8ZRPvMXrmu",
  "key28": "3CWKnwwC687izQvesVtqPJEzFcNNgyPDc2knCrupKdfyHP7g7vXbVHM9VRfbUx9mchGdaqa7hppmGo498phkCiC6",
  "key29": "5Y39APJspghrkYW3suUf6ZDSM2e7ktHy27BAkq5fAwJBV1zMEhDm4FnPWX89juY8rE3LrSuGj9K6WTXQQfRM1XgX",
  "key30": "2RyLw76QFbDgWhp3uTN8uPU4HnGwh5ERUbHYSdDkkeUBZswaZq1uzk2J7uWQ1MHvMUoe4Gaucq8fNekMs4i2m3sS",
  "key31": "2bpXQWNMaXYiVH5Dg4JwruYcUQsXGiFn3oH7Ky3KU83fK8wdsAQV4kiwvb7EL7tkiM2TtGNAnVnF1jMwzjDsSGUS",
  "key32": "yasuRQXXG3bhPNvD8Vgn4kSMQcbTfkapFvouXUq8SQhp19ZMa7pjLEixhE59YQSUr2FnkjB9ZKr5L3dPBxx6dyC"
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
