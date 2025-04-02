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
    "5v4kqTpqsUkPuGZsWQNjbQ5wHPG3oeem4MiJHTUQmHdNpCJ6QFZrb7CvxyfAXxWtJeeHN9V1qq7wgUVDQUZhGBWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTJSVH1PyvbDD7NAwiJBf7F8zh8mxHqRoj1EoxKXj1bNrbxZkDB6Rx4f4ohbaWG2xFaUUTbRQ5JYJPGHnpgKKJR",
  "key1": "3ephY8R3csebLNSvWp4qPHbADDCmXgorNwwNu6REcJTx6dP61KgaK9sB9WTWwxHH7AF1mAW8xHw8waypG5e6q9ZH",
  "key2": "3EeP2pHyTKu6ypTAV2DWCL8QQcgFHyCDMt29CWk1Hhj7dc8ncvoy4DQgv1iCYY7dbUq1jVMXEsJNPQhPjQDBvrGE",
  "key3": "4A3puXLewujz9Lnr1rw6SQAz5kE2X9RzCuqWKTQwXW1LxFvU554iNUKM4MhhQCSsa59TtCeYyhvqRuhCLc6uJ84b",
  "key4": "4kjMvHUmfJFaEjizh54RK68UHgy84paZgPPf55N1jQKpiAXfRyfEJGkUyDWqfpXiRY3LMVu5n4SpZszK8CQdybrP",
  "key5": "2nujDn8TDCEF53kgLthHvyqmR1VSGqge6aHofjkqVqTHumrTTGSfPkmS6RTp9F4Mz6yhLfqBwzW55pFmsdgxjXts",
  "key6": "4Ca9CPSSou22Y5q6eABXiduMRE2DDaVC18QoBTesF6y1tqmCW3Yp3mNhuT5Fo3PWLzkzfdLJhEDu2uENm88v4Puw",
  "key7": "4TBKJYPsmzuqSphhb5Gi3pzYWu4VxCkXSnj6oPxCPVcUkM6LM6kXzPND1ThJdnfRFaMojxY4WB1qkf3CzuRcnfiM",
  "key8": "mka5X3LbjuzBnra8TmFJXXVSxJtk7r4r7iJwxUZUnQnZnEDi3WAk17STovpy5zETJTeXJuUNh3keYiGU4XQbokx",
  "key9": "4TdwsxpPA2PjxE9bmvZokzGGLbFVYMgZmcV6d4FUqHrnB92epzUkX2Xxk96Bb7jUdgR1jVnYbJUCUzU5vo2nFgMV",
  "key10": "3kCtFApDaCmfTkJWzZyx9djnKEp8vEvzcKe4CCxL2spHuNthjYdzVdDSgbQoKZG1Ytuoj68CEmMpFrQBD3XLUAVG",
  "key11": "4QVfqZc9apbponLFZpk6whXgzNAVV8EyRsLwcquyWarsCnzi3xfSD7AWrUzzAyp5Zraztt9fVS4REj3j39nnaiWd",
  "key12": "453E4NLgrSJRvYy954eRQX1nPqSqERe8aHaipath6JSj57cgUqvnvcq6dqxwQBwJqGcZCqp7zwzNZPHKw9xfx88d",
  "key13": "52KtYskWZXC6GVNDgWx8KwSEc6xXdU6PKteZSbdY8cxG1uHbe4Pay2bsoXUadHA2WRv6G5fmtYjVG1td2V7Vktjf",
  "key14": "43Hs4wfQPdCYPgndTgvftgNuPxTpHZyutX8Vp9myFhiyTetQxg1BzqRupXPuYCHL4k8WoVAPX38FiiR7KoXjyaNH",
  "key15": "2mPrWXRDSYMmauq9yXVAPU5zsoj4wmKoU5QP35uH3psWPjCUgnesvu1VpBD8uJA3CdSJZHXPYep9KMrt2tXKLMJR",
  "key16": "PMVdgCCUcLSrcFBVfNw5UMesEkRbC6TBAbSZAFpNDD2sTSnnYzLZuGdGXJCvpmGJDmt6dy7vLtPGwQLgyo8Mexu",
  "key17": "22nwgbRU5A1hbwtrmmXGu1Y8S5E7TX8Hf7S7S84Vubtrzb4Hp1odkKSbsZSdy2HjRzMijYjgUFExP5u9JfbrjeXN",
  "key18": "2BFViLxJVMfXHB22Pu9KVHHhdosXqWCrwFmKi8hSDxJidWM2Wf8HX8XFAkQmEiGqaLbheVAubZrr6L6M4ms8nqXs",
  "key19": "4TfSeffhYHdFUvJN2Hc62vmw3FA1WvJgj4kTwJyVgXsmYWEQiJ4M9XpXWXczbX78Lk8a9UVq58exdd3EddnspXAB",
  "key20": "35hfuFwaqDUC1xk57QDDr5nvbMcRY4AHnsd4pfqf9xYjZ78tWFLcfiEQdZJ65Uyd1cA53T1XXiSMrg5U6KkiJYV1",
  "key21": "4vxTpCy5Q55NSXv7Ax6hVGWUjBFyNrYxUzAXFJuwKtSvZ193xUo4d2KTBKf7LiSUY9UC19LP4opHBEEdknoKteeV",
  "key22": "4fa7JmfXK5kJgyM1rshWRxnVDPy3RqJFDwvwS35fHhoGWjLTDyyEyjfpPMuBkEyqw6HnknaPPsWw7sG3ayWgX8wn",
  "key23": "4jfeG3u9jyEAkPjzUQdeHboktM3DKW2xxy6djvqL78BcN3zBFB6VkP8BUtQF2n3trB9USPSAzggf4Lag7MnewdHQ",
  "key24": "49KcMag9CQ9xvD4MRaDxnnD61okEEQVH6RxvtaJf3JpXVPSg3Wnv2q1kpjESEPQmTKjuRj4jpMhfm3FA8DeTVcEp",
  "key25": "ykxTHff41EUKNuDBkTGbQfywp6F8VS1zS3SyqJUJbaHXiRdZG6zRPWYB1eT5c26v7xJ1TJHeRP5pHs5X8Wy8gY8",
  "key26": "uJKm78E4LNZFTW7Rw2VLKAARBmLqQBjKqAqNEsk4RxTYjW4cU4UenK1zUaiJarLpUw2gfzxUEPZX8SZy22DTmwC",
  "key27": "4pDf18GnNsiMcusMgBU4fV8KbwxPLmc7KQzu17nwhNkgtmEjSTszdbWQk7GmC7UQQ64haR9cpdXBYKGXVdxcLcnE",
  "key28": "4i3htV24tyjrwEQnUbq7idxeBKrJqQL9gxcog2E7FPyKfHy9iQmeeLRHRgxTnUsCXjy366ggpLzhhbZFbAScd7YN"
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
