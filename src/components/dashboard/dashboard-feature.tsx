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
    "2AWGXt1fz7EGfbf8xf2rbgn1oWtFPxaPBZMq8NC9b6ikYVVTtcaQ3b8TWDCiP6mwX1rcRjTzo6A2A1kCm8kjBPML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UL9AsQhBYb82HJJje1aGogvUsj5YqoJkyYBv3VVfBuaUFzw5pdZctPJ4PaADY6hve5XmWNCvzYn6BENm12pwmbn",
  "key1": "28wxsMT877Mhd7uFzMqScUN2uzQzp3V5p3QU5QzVL7DTJZkZiamJ4cHYDWZ5zkoBMeUSzAc4AH1hcgCZKGtXWAvv",
  "key2": "2fLcjhYf4Se7hNC4rQ6oz4JXHg9DVEWik8u9bGQjQ6D5y6ZQ7JY3x2gJqcfTHHPcfuw96cJNGd6MfC5cdUJvb4hc",
  "key3": "3gTHNFBQQRwgqGsQbQsJff5cFfwmqYpEzrSyYskwKb2bN5scFYGNSKHLyrTG6xirxMqXFRKGtVCiv9sVezMYY1Yu",
  "key4": "5e4SgpW4fwisqQnj8B1z6aAJvD1Q96fhF3fC6BmvLDsnMYLHQebm5jh3p9z5mwHHwXZnDoLbbAcu4yHQ2PS1bcbt",
  "key5": "dUHTVPn1gK6L1aQ597SYSq35aCPfKnZJ2beQnpeCGcepVt9qNEj1Pw9CAQPjccRrd3dRQyFgWyLaLa42sNg9aBW",
  "key6": "52hzpiRAXJUJbjRQQ9MmXqmLVDKCjvCHAGvVs2exJfXLZaYhwaw28zX1TYSQmHcvJuVbyRi35ZUDkoUdpeLcM5aR",
  "key7": "4CtasNas7LLKGFeoM1DFrKa7V6XqVEZEKmtsf7nFPg2cBb2QEFpZrCgQvKPRpoLmXsuHALNr8eijEftduQrYRUq4",
  "key8": "4H29WiFursPkGDygRGZXPxJQtEA7gzY92hhAvvXF8x3mTPeYDAt8xLPGCJNReBnbETipGPTCiPnnH9Ei1XiveSrz",
  "key9": "543mqiu4GBMovvrM2GgMHpqnyZV3bPXECqxRHHJBkcPYjLUctowkwEVZHPvLjAozsm2xrV5cjceNyBQmceueJj1a",
  "key10": "5mBUhE9q4mceMMZqbmkpRMazqUQm6vR1zFWgB4qfDJdPfiFyoE4WfZvxfMnP1HA7rdNTtTSRyahoY2GcAUnTNafe",
  "key11": "37BRSAEFsTr3HrvCNooQpEJjGtJ1Ncuk9ojvbv19oGjnAFewpMMPxK1pAqEGde9vq6oYX7ZHk7EBMU1am6hbMSHk",
  "key12": "51VPuPrCjJ7rCK1D62SHxTRdw4wr2Z93FCVMS7yzoCQPFmbm7EC5YVuiAGmCY7vVRbndyRMZd85pcnLbAa5QUVu6",
  "key13": "3i9f31yRjBz3CuinvreQbGtZsC7DHcSFuMhND4fBzsjs9rwieZWhA6uGJk6iudfTq6ZfZGnVyBNe9JKjEcyv4gKA",
  "key14": "28oLLSrhSYTByQDiMJDFsEKiVutyvQkxbHg8ZJJS8KaKZL6zREroe6JD3An7qvsJGzLriimbJGx5o8Ws9YAEfRTG",
  "key15": "34e2KxAxfefhxdBq66jC16QNiVnLGAG1Nnvvs6N3eqsw2togpGYDZnhWo2bogTZJkdsQTCm9zBAo79Lk7UrjoGJM",
  "key16": "2hA6t9AucvR3gesS6tmavqr9TaUMrj22Frg5RyJM7Kx89jTrJXHu2dwiVA6jg7skJEcQ41EVQ4Wjn9BUTCU2dP8B",
  "key17": "5fyGWoDM1p7Eyg8VrD17hwRUTEJrVHZNm9Spacm9LjuxrCWmxL5fXcADWqWcQ3GQg5ivmWPzKXb2XWTEprSmjVyX",
  "key18": "e8KRFV7T3RTTVzWNkXrRjwQMsfgqnrCZ7c1GcFRcczsG1KU28etikUr38VJaLs122vWJjTR4DuWXHzAySRVYB2f",
  "key19": "3EhtFMMbWJKuMCp1hS9HAVawxYCqzBhbTuSUXmgNko3c3b9Wgxcp4K3YtX9EWTmjivAVZ1vfN5PmjsgygQPqjL7W",
  "key20": "4iFmWxevMSuxSE8m8oT2BP9u8sR7zhmWYdAXGhpoUpUJ6QuDd2fQZPpEy2MgrwPFGviRoyjgRJYubF49ujqiu5gT",
  "key21": "37NSAmqmkJxGWDYToN91spVwhQh91tCZzdBNmj6ShSBY7jGLtWG4HXAdiAUbQZs771mGS6JCkrUXQs2yYzAt8WRR",
  "key22": "62gEMsWBjRLza7WgHSBCTTQdc7CV6jhtVvDz1abS7nmt7u74x6QZ8TwrF3o2q6fmsdJ3yEUZSgrCnb5MdfgLtsxg",
  "key23": "62Uqv5LyBeUegvPeYryKD23mK3Sjq8BSyZ6f52qzML4aWgoxaUcgWDFK3Aomt2iegG5rVvG4guJpMZdugHwuyCPQ",
  "key24": "2nVodrYEpnan1Ci5UzcssVTV25i7LeZboEoLVMqiAZEGhkBRMCaLEXL2nvxymZ6zaF2pyGxgdNGS6im9miTta787"
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
