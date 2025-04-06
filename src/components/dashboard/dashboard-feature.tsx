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
    "4JzzNXTEwbFYAV7c3jc8QZD3vkUnG6WDoqBca2RnzEsyhvfKPFKssXbGg7hVfs4fiwUw7gCLD5tfSWKJAo8CprZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mnwh7ctV5cfmkZLbLxYZscmDwvf81bdL959KiL1KKZLXxz4s92DXngVq3ECNPFsptnhZDHERoy4xwSrebe5kTCy",
  "key1": "517uE1XSV4yMFuLMPqbziSzpQEc8w6N2pu4KLq6wBcw6itsg8EeyAfa7nTdN2VocjthDz2xoWTNnEuMzqq2XGVQo",
  "key2": "56B2w4FsMTYcsXPMbqw4LAgKHkiLyrtvj35ThiproN5YGNbrxhFfkrXfeedqYX9rPwGLrBLu6CUhbqrWYBDEkzz",
  "key3": "3rxzPyxwP3F74S8ZgQ762iwodBS7wwLDAYuZPzUAKc4eJvHPssfCtPeMSuC5fvXiXJZuidE4zxenimMmCN2ECXaW",
  "key4": "2t9NgTXUuJ6JPGsHR7XRARaP1Dm3C4XEk1mM4rBJHWPTwQkE76jokKd1KjuXRrPb8tyn46Ze9Jvsr2PtDfpjZmhc",
  "key5": "3Hh4tyQHiCyFub3GmGNuRFNY1KQH9WGAzG9FSeaqp4Sfa76EjQE2G4aUwv4TAjpoTzoCGJ6zry5Q4LZptUN4ktX1",
  "key6": "24YRLVPg23dJ3rZvCHtNUMSGz2Jrz6wEW9XAYkizFnVa17NNHssXneFUAh87GpLp8FsZbzJQFVmE8NpjR7RdsfbQ",
  "key7": "2fdmG3JBibTck3cNRsUkuoDbUXwyQg5mw1gTy3u5b7sPMLQFgJ8ZnFBm4Xr3yovuTn48XYCn8ZeeXjKm4JsS6imA",
  "key8": "3G887YDtW6V1r3ht2JMdsdwLcmi9xKJepCgDBz57Q9QumgCzaGBgSRhz6teLWAnfQ7XAjCvrx6Q77me7okgGt7RK",
  "key9": "2wxuih9JGRzxCGQHnk8uhkVnM7LA8pgKrtsxTSydXnmZzMo2sEQiCyhXyisuye9zdQr3V2bqvSf368nqa96BRcRy",
  "key10": "4AtGoVczuNsg6jki5cxgY3j4x2B1ikxdjAm7yD8NtHgMi4Qwzqa6637Z668GNuQSq6e7PNfs3zkiyN9yrvK6Fkt1",
  "key11": "5vSASgtPXfWXrvAQGeMiqbhxhZt6Hi4Xtc8AGLSA83aU4S9YCcjHgANXVLYkQMpQHhx1zKhpPsbm2DKCFaz19oNy",
  "key12": "36a6e55XjjfHyS7VUyegyZ5FC5puvGNTccFjw832KmK3F1vyFCAQn6EMBUQ99V5nSpXHukzfpJbsEo8TScg3bisH",
  "key13": "69n95xzdYipuSQ6Rbo47dvXug2eVVv2tQzHojW6X8YuJqHYDX8jcocWKTpF2RiNtSGYVHVZcFeURdeRkZFyoqr1",
  "key14": "mFjNoHy8rAoAjvnBms1Qa2CZH3JaHXfG2gf3X1FfXXGuqGXYY9oydHgrxpJtyNXG2mAxPBJiUV3Rj4ZJXSoxVm7",
  "key15": "xBDk4qdb3ESPD5XGaRz93mnYorkEdMatPKMRrTDj2vQDqUELydF7yVGpwWAciZFWtBY3X2nuVvT4aghAEJDmrGo",
  "key16": "64RSzuwYeCowdqMDW6nFdyfa3rH7W2rJMw9q5Ck3fEw2FjhmxSXjwRVEsSuWC72bJK8gopGVbDYFgeUAqsRc1yKJ",
  "key17": "57EZF1vH7uaXQZjMsLttQLvMEAippxzv6DY4QSDngF7Q8FFb6Xu14176cAr9NToLugRcp21AR5iMvJ636MbA5vDx",
  "key18": "3VBb5CxTPZqfrqVzAKJ5Hm22qTaPQDX5VzqMJcTzKZ6v9YEKE9KhTYRq9YrarPiSc6BbYBrtSNg7NzzUWN8NvNZA",
  "key19": "5CjccU163wZeGsbv1Ak62GADmbjBBeXy5FzGdi19mtDHRDcHkbEqmaS8MmyViXdxVVYHgyNeRyGhvvAeZZib3b83",
  "key20": "4oZEwa4RQRHNm41J93exDWoRpVGXeriasBRcQPu1xAEFvww92UxwUKAXHvKH3yAoQna6QDS359r3AoUhYj4Tyofz",
  "key21": "HVR3u4GFLuBrQnP5ebz2w3RWmBpPkwGxLdkcbBt9f7oYSzz3srDyfrLBocqzwcx96vgH7XN3PZG9W322ddKLyzB",
  "key22": "51QJNqgn1dbGH75iRBgtqepmw4SFs5pBE6CvUu2rM822GCpHYjEGsDcSMhBJuQrhTtKvnx62SqakjZz41psYSA4g",
  "key23": "np7p1PjZdCde2NugYapRQDgUwwpqDPMmX2jBHhPZrapAtBiCQw7jQgUuo1ofRxrtSFJggz7djnadQYTxphkkJ5K",
  "key24": "mk3tJFiTSQTTnRcvwUGU59nm9h3Kc4gCrrZocb3B97Qq7pVkKtfLyb966qtttg3efXTmSZwHtG7aMBaubc2LKtz",
  "key25": "5jJ7AbCkz43yKcHDVRqSbUuQ2BUrnDnAYxFTVa5vUQ7Xb1Agu3uAUABURQu3eqtuiyc9FcK2XzvXyXmGLLFaqP7R",
  "key26": "Aqgnwaq8KsKqQGE2bHma29YX65PYPZyaGAjXHmS7Z62mYt3aZWbwjknUVCk1kAPSSAdCfUiTE6JRWRYcNGGmuSN",
  "key27": "3KB3QHJMEoe9TpUUWLqeCoKNp1PXXMbrmexNUPBPuB62NSmFZ6DGa11hBZTqT7BpjS8cHHVzKY7bvSCm4xdkoN1T",
  "key28": "9sq6fKH8GA9p3vgDnJ1GoLy6z2THrR871Hyff8tQoR8DwzdFkN69MMT5ohEG5q6aWq5V8d1FTVMrHfhPkyJfMYk",
  "key29": "4kJwywicrLaMZdA86ojBb9zcvMf6sxHmnJsiNchER7r3d2YereMwLy8sCdGfMaUggPSWPJh6GBxoRWjAVqgQh7D5",
  "key30": "2ny94NYx87tZRQqk57q3sZaYCRApjwaG368n52tL4NQzixE7w9TTzgkW76BRn4VtXa8Pac8MFAm7ex6VVXoH4bfF",
  "key31": "5ZZ9q1J4h6DxpRma5XeDQQUkPYzbcbmhJ3LxZkdGRkjJgDdPHhn4yW7LYaTRYrs2GPrNaD68eMCgh9ULHMkFZRVg",
  "key32": "37v8XaRK54Y9yUKWoPja3J5F7sektrtrR6DaCnTCuSTBt95sACjFh9fRRPFHUfPTwzR5LDrW5mcHJG13M3y7RRze",
  "key33": "4j5B8aqAbuwHht6CcyUf2HPkzRWZZn8UMGV1mCJqKxTJw2UAXkvR53GwX2856bu2ym8PBE7NNQLimPvvtA46hjZE",
  "key34": "34kHuEwHVrVqXtPNZxuRuLSrj1eprJn63J1okRZ3w7ujLwARyWDV7ta6xUwWHLnM4MTvdHAFdgxxfjzpZuGWP5Zj"
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
