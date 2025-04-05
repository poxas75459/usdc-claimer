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
    "4e7gqmcnsZ7QRYcnBn7VPHvLCYGbrGXo7JdhfFQGXCcqPxzvwv6hAEY6YL2Gr6k7p5cy4ermBN3RoKrdwLTXbXhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4417htQzc92JcCssdhaUeh1Fo21kE1FhXvjF2bUbAPys8Hn71rUXRR8VUZ1RqDZjD1dx69uk2UxEMtgWuEFoCuMp",
  "key1": "57sFZjDtd99pdSGJyXucSdc4RHsTSw7a7ju84b9uxvDAe7cWQWnreJnXqMy4gWqych2PFYBqiLgK4LqfhkSC4JFH",
  "key2": "v2n5kAMheQz8WicLbVpe8b6ihDayRgBd1VKNtxin6XtT4iQ1WwEQcVkTKksZxV6Z54VsqVLwtJRzgvWmXfqbeFS",
  "key3": "36ZCtp6tVSe6gWipiQXD5PTLBJbfafim6yN8hYzmUkzXjTUvWHDZjaSDhHeLfEit41g75HmQb8xGYuUkRt7wjYaM",
  "key4": "4o6uvHaWupJY2BJ21r8bGJ6SMgwiEwsNaB4Y1ht7587SN7NQRqhrS92xiqz6evFEwJAJd29SNnkdRu7NxzZTKx4B",
  "key5": "5gGqd9erYuqWRaAxno6XYb7keWVYoANBsKpusUQ8hQWCyRTQ9ACssf2gWdK3aTCmZZCzpVbRF1ACY2zWHNU3ZbAr",
  "key6": "pkLMazYyANBybw7crQy3WJz4SybD7ei1FADqZMRhKteawBuTLjBqpZwzZPWAxXKEJ6Ufuk89A5F7QKmzCtA8PhN",
  "key7": "7Wx6kaVP1QocEkcMPYgW7mpDQg8x5y6sEUn8WJDG9aDxPgMJogzpm8t4BAZ8vML3Zifhb8fvKUcYF47R1nRPytG",
  "key8": "B8TSiPXyc3JcHaMf7C15b5CQnDmXEsaMTXj9ze1VW8QGks8SLAC8skYcvHoi871q8LgrbYG7rz6hnxeq2PvUw34",
  "key9": "axbbPbdcBQ9RyjaJaKE18oC6N468LL9jXHJoKXQWPfmsuLKNeEP94FryyjDGYqaATUPHsQFMCZQuv57MyoUwHYe",
  "key10": "4KRUijRDGBmeG4jgVLA43KD24UsvVrpkiRPnSQ7vyGUq9pkfiv98a2QsYG5J1ob3ncEPZxrPbqemmZ8dQk58mR2T",
  "key11": "2UdVzddfyCJrhbvdkeHmtu6r56mw5wYConG7JvgUG97NGzBfiuaCaYo5SwaHZA9DnxsW5Mc8oyyZXH2vaYN2QmqL",
  "key12": "3bygUS9DnD9SP91HDHbjTyur9D8jSqwJVdJS2GSismqU93u5jh97ccmqePrSvUDHuYcaKjWCFqbfK5xmSsathLcZ",
  "key13": "2gtWg4wvxiU1u6zqEthS9mNeB1TxogJi8zHuJ3k2euSVaBHuCuaqKeB4Q6BTaQK37hU8Jj3puQC3i8tmjJhAVoTJ",
  "key14": "5EjHR3YLDVbQCVVVJWjALTqtKjRjqKyPPekkrSqYb2YGP77mswvRpyxe5ruSPWfVCCAjUs4HuKaKQmC1nHWfutvP",
  "key15": "4y1wB26LASRfeKcTeSGDBSLEhvYHGriAAVsFmQA141wRi1s2PsYGCmEng5sHkRgjf59fXmuztRdBou3ygUgLsfDf",
  "key16": "56FLBqvrLavgjfHxUP89Rw64kBBkHMHQyDUUs1vbd9tBtpoqQkxdVZaBpHq5Xm9T9sPAvVpT3RVn5JKT5bYxhBPF",
  "key17": "3C2wS5jU3gv5ksB5jVF3zodMS6aoio2htJC5J3uqENS17EgNq14SqwmwnVPhe4muhzaSbYuNSzjWw7veC5XtmUT4",
  "key18": "3MfqUUHwjr1Ed8xEJwPuWKQc31cERBSNCUHJcwDpLC1t84iEZLJU5b7moUPfXeQ4rBa5W8hzq7qAM2XokVD7du5x",
  "key19": "4FJy1sYHznDTHp8Tj6TCig2yxAojHmhPhcjBFQz5z56MonkfGLRY5dHoERP9F68XHVMcrEyeQta1aNBDn6tMao6L",
  "key20": "jwkAJMrCHt1Zg5w65XPNRqeLgDBnnUcz2XAptA1F8s1qpCwXLaRBL6YZjB3p7xQe6nKVrkoaHyFZD3WJurNmYZ9",
  "key21": "YMzxtFdWDpDQAm5sRLf8XrJMCvVqzzbSmovH72vcrQ1fVhmVswiFPfmjLV77eqJ9tThjKcgjj1MmASHg2ZcN7Yp",
  "key22": "3ggrMn4zcxc1AtSqrM7jRzhFuCTJaG1skdQFLzwBMH49ZUh45RwxA8UskFfPC9UbmaBRYpD2AV66LuL6WExRz9n7",
  "key23": "4nSSrv7fBj7ZEtZe8pt65dGxCeCwPtV4XYb7wneRDrB6qbjBq83jeUSxFriwKBCtkY4sGHbXth72VUaHrAR1qfe9",
  "key24": "3q2uGzVTyLtMvxanAq68vcSXy4dXZYF3dWfoWcgaf4AWHKWhXzRm3x3v3bJHhikYdmn3d4awpYLNEcvUeTuzzGL1",
  "key25": "4toCubZ3dWatf8nGeKc6huDAuZngoJSgi87Bvu55dGbUETQLmvAsVuZR3nkSHuddqGduwXcrmWZCMAEh3SLc6k9E",
  "key26": "4gyxXTEHNfNqjUYej6CojdroL4F5CzywFSb918XZLK9khHbs9PNViZZjrYmFMW1eoPg9Ne1yfCSTJikobipDgvji",
  "key27": "5rFCFbRDT7kzrsMaTJtMhuRVj9p2bHr1V9GnUPLNaVYSY3ZgeEy5RnchaVufXr6HntXi48HFWdonEYR7zfAjMPNq",
  "key28": "42BBZcxYFN93sAR1999m64z5cV8pUrn77vj57wghLjz9VSkF3WcFQ3RU7Lmf9ck9GKDotfJ67Q5yRgHyBmbJNAvM",
  "key29": "2ZZawFjfahYuDoUmzkJB6UjB1GvVH8m974VDoHRXSwkxQ39s1H6VUN8zvxFgjKcnZkzxgMWea96cXET9WNorK8Af",
  "key30": "2JrkxHRVBXLqSDfzxXz7RuGP8BV9AWahMcJDEb5pe41xTiU6xFhsCgw7MezZNEVzDSrHSfgVPPkfhKfB5zc89aio",
  "key31": "4byWxmPuNX2aHjWnmTp4Qz7fS8aiXLDmqnmAt8idmHfhkNEviJvqNfDCLJmNsEC7r1AvyFykQeB1z4zhi8nBFCLk",
  "key32": "xCTxn5zEPAafikXeJZ1daFbYrMRqgLNnBHjW829oJTmRcpGGX6S3v7157ZR8QmnAWJiX1uLCBmcZPENoNfMiXpi",
  "key33": "3PU2KBkxfz5m2aMq65wFP8SMKtS2ehbeo1UJ6SGyoTwiCSaBCUimfxARRkmbUtga3HqziccvQLNrACnXUeAshnQz",
  "key34": "5SGS9uyEwHuEyx2VE23WTRceZociKcQA9YZNYLoGbX8brNAnoetWDohqCxN4Eq7USrJb6GyPiF2GFSLNRBWMhQUo",
  "key35": "c37sW43MaHphKJkGRgg1ccjLgx2t76XMLYNkf8mYLHh1jxHaj7uddRqSjdqyP8s3KnhUWS4G3PpcyDDkw5nHYfZ"
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
