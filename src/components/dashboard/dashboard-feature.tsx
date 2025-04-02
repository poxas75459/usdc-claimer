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
    "4j6LdvCW7DXdwY9EVGTKhBrPtc8QngWs6EndpQ3WWrVM7ji9ttFxwPhWX3HrYDH5b2mKdXyonwKF2KEUL8w31cVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsLbzrURSMgvqFQ3kFy83QjC7S5pQF7KtmmX5mCscL5JfXymwpviyDuUSMAX1DDzq64v9HfdRonNVFxfcAUprMY",
  "key1": "3byxmyWWjTNTT1Dtmc2yJcANbctKqvdexg3qRqmmti8k86wFsbWLevnjnj4cbYPAJdnQEhAD8SNccend1QK4UyFx",
  "key2": "2uHrM2z12JQZYThAmR75ztmXbhD52srw6AemUmxrgxYVWotuS9Re5vy8tnVLWX4snfGV2GAbJECYD3h37ogtSxMf",
  "key3": "2QmwU139fA8mPjsNvmPn4wV66XmJnCpUNx8W9Ro2bTRjMFNAJifHgZ34yaubZnLWYHSXES4NYHCf6dRLcHJoizaX",
  "key4": "55B6MB76SV7BDxY4AJERLidQ1efUutDDw51EiSqDKBynTYP1QK2eXXcHGLFrn3oHSLLHe5HqMn1mbTY6yvQEZzxf",
  "key5": "3J8wcXfB5GqFnHqnaUZ8YHaq4cAAREcCm8zBWeuwThCy3jiEXXiEA5TfE3oN59SViq6a6VdBRJzZyCY25LsJ2gWK",
  "key6": "33sL5m28rp1Dn8K6DCjLEL66VFo4kqUzjEnjyx6TViBU8YHfaewbzwYXDX8DCjccfeZwqgX6Ye8P4NcXg86r8VeT",
  "key7": "3sCCTrwZP6pPxA1Fu4qyLz7juo51JDJnaJJwsC2RpaYLtjFu9o9eiHydeukGvTwN14E5VBcRe8kBi82PJ7yvvGrn",
  "key8": "aPF8nHXHESfRZampQCPyRwmwsbhq9VE2XAZReaQYNAqm74PWV5u9KEKEYxnCqCPwQHEGZ5QEz5kCPtRVLfwYwCf",
  "key9": "5bnj9z5NvExEa8whZHQ5tCYSg4J9V5fsQQLs9kbjXCBUmNb7TS6AudKH1FFe8kb6E9pLLvpqJy492yHf7a8MvyK1",
  "key10": "4exFGP1dQHGdWLCqUrEwCP2bzsboZuzNtj1pEaMYQK8FmEHq4CMToPUURcxF4qRKKTPZPRXmEz5vHwNnpGLXbLaV",
  "key11": "ytCnxQm4t5caNAoVYYhUkR1BGLXXHfM9py3XfVLz2SVMxANnwLcHTwMqJhztCDgTpJKJUL1vdTF9uPTsrBfHHvo",
  "key12": "2wVuV3pCKiBZdGiFJ2ZXaC2TFNXdy6zvUGtqXbb3uigMf6XpbbUGCp6sYszFsvDHWQtGzZfMPVoZbBnHX6B7zM8A",
  "key13": "3rya762AnXCo98dupfTKPffpdNoLAMiyrKn1d36L7GjirqUhWB7B5mLBoH11L99dqn9r4sd7qRJ2FjGzEL4Gs26T",
  "key14": "2jPoMewunyKC1KYn89hBMRMfKJfUao6i3z8fbW7eVaGLJqzqHNvWFA2Getu2dayn4zH5BSHXm4GmtiBdqW2zQuHv",
  "key15": "kCGZEztyxRHk51JoLhhjbLJ5gGomh2zvMZUcGk4QHDwtqpdbq2QsAoSPXh1fVgqnvLCofzmTYTKiPYNZpc3btqU",
  "key16": "44ZhTWj69tsMD1FvWXXMzXdx99KmZzWPmDJAohRvGdsDj32fTqHH8hguq3hu8yGtTL2hfG9KfX5R59LPA4NEXLt",
  "key17": "5y8CLLQgkgV47JNeKdqx3UCqPif9p7hGeX3D5AZp3uZFbXUVmJBp1rnw7pzhjDu2T2GQdThSJHWYdFZN7mFHa9D8",
  "key18": "5CgvwHXArQ1SSMReKH5aMnR9PGQkmoLsP3QS4MpL82xSRHLcwVvDP6tHQNEAGpZaFJkkAFF5fn5LinBV8wVXjwfd",
  "key19": "4LjXLSYmRPLkiuTeBErTnq67w4GxdhG5svseVdoKqVrgi4NyQyFDZDCmU4CXaKwHuN3r2N8Ve8a4BgwX3gBf73yN",
  "key20": "2dpDtVv1m9Cm42ZV35iGahZpqcGULcpWjx7kwHiYx7kTDTDuJTeQunFJt6y13vv1W3mxfWXTihD23rpsaydBPqXd",
  "key21": "31Yh1w3AQzn8keWiFNgLCoqGAuXrW7Gr85oXXHsUuo4zSAzrQHXN33FhVqiu7Qs9WrafZVHYwyk3szoE31ZCbipe",
  "key22": "2e1D2wAcffFKfxAzqcYwjtt9ikKodrzESdmdvBUBdyoGGGvafLezTX1p7biHMkmXxppkFSLD7zmEtdymt9Jddjji",
  "key23": "4rfVBhCSy9xMYCFiutfVBqxWLveyKfDDyoLnAhPcJRBiLqsP4LoE1q4tM6Jq6nkWxnF9J7eweZ85G5dCr8fVys9a",
  "key24": "281anJ7NZbSD13CKzTpnnudcSDuQX2vgzR79tPyXUMZExem7jqvYz3hgWGFmrtgNVVsGpePcwBjLi6or3feDpE5r",
  "key25": "j2gogPyG8ts5gCy7yTzphkQ97nvcpjnt67tbZEy8UPVETKTkvxKmx2Zt1seYFu6FsQvSa9T8j1gQk4D5e4EDMEV",
  "key26": "45cgkqFetPiEj1oLBvQBrzfytPwtNwQRtYuVokiPmtQv6ZJYbw5s8Thi3tqLmCVyagJjCMzWezTGuUesREZefv69",
  "key27": "3VwYhkchMAaza4b9y4vmyxMTt9JUbvAYzvPfPKkXaQZ6TGoham1njjSVkrJAofWtZi6R97kPTPKthozivb55kiHs",
  "key28": "5iPUAVJQ2K9Dzw7HuyNXu7GcNxK4JHcQ7iLqeXKSbRbPrPWyZYFbuvUVZ4EVg5kmhnKiURfvUjT1y8xq5kXKDCpk",
  "key29": "VFe1UrLpExHZPBuAUD8SsGa5TSuRPN7gpBtTiQt1WNoW7WtenAa2DKrdKUbTUUNM85F6rw4NDpP7f7EXF6qp8rF",
  "key30": "3sTLNga5Qioj1xj4HhmTi8gnhDuYpmeic1Mtoz5ujkE2TQrHUv62hhSnuFpNKj8Jf9aqvFziVm5Mn1BCQ9tMVEUJ",
  "key31": "FkD2VtUhLE8rp8c6C39XFoW5PiPWtFyJvdqk4ahUdNt5Ezq9LbiKaXftfAUuyo4M19tyFQiW9JPUk3R1FkgvXUn",
  "key32": "533wT6y3Ks3tmTHCJdxGxHz8F8XGfpKBKUe8vnvfEHK9icnNxSCztsK2foGXh4mXNaH4BHNRpcqMdgHpQ1jBocgM",
  "key33": "2TtUquQC2Nvxy739CotFNn8nY73oVJVBQR1KBx2Xjk8qidfwGaLtBPiExxXULm5u1kmt6xEyiXTSg6RFAJHPTb8m",
  "key34": "2AsbqJKhhEFwEdQuhmr3mQR2v34SnhpqRfJkYLcV3GPsRNJiRFe5uRoJuH9fMUhWc7bsJhNN7sK3ucKvohqqt3nX",
  "key35": "2nGNFk2GPihvaYTstd3e5Ns5omT6kAvTKTnYpEib7fuS5pWF3kt3tGj8x41SDdrZEyxxkT6wiyKacrpVNFDv71kw",
  "key36": "2ANVoZbE3Q7PYcKSC5t6MqQzez3BfqKeEpnEpPLwL3Z4w8gXhWqAYHWAMFVYrHRc4knZny3z4odfntzzaVgys3gH",
  "key37": "3g2PWxxZNqNBWWadopuAJpocp4ZFwC2d8oGvFCxiuSu4Dvi88GHUpSdeEVWDaaYzLdHerNd4rwbqzTEfEvo21Fvm"
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
