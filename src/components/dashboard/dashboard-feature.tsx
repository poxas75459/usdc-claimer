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
    "9ttQvJtAAD5CNH5fDugDSj4yDU36huqSVL7nxgrJ3mtFbhovZWdtwRYP51PxUqH15VsJZXFXZvzW17S8XGausrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wkyV26nbyrh8vTbCpNgPUAoKW2ieQp1235mcVq8LcBmdbby6j2kesgw3zZPzSoEAmY511ijHDkCyNuLAavv4DVq",
  "key1": "QM8E1tDsmDe1Jy8qFbqutWkLM3zzoYR4nho4AQK3xLuWSeDq5zNYmd54rvc3eD7w6xaoyrswjiKhiWpGBr5HkbZ",
  "key2": "3AqFpMQTdyqUgsaRKjY9mbjkUP2yhVcXfh7CNuyfFWmHmwxB9qGUAoHZY1SP7cBvb47K7BsXXfS7RonjJBcqzdfn",
  "key3": "4WoeZXkc4Q4t7zWW3CbYnevPvyjsRrELQME5k6A6CFwTc3zYCkWpjdd8Q1jJEc3ytgYmUCTU1vGCZJpuLBismPSr",
  "key4": "35PdtYLeu7qJNUj5EFehpXm4tqoCE8YrJ9btMgkEhEHWLUjGVSJX9m126VQwhwsWceKceuJsNnpjUzRfqP4JBps4",
  "key5": "3e3nPcLDc4xQMsmEKuL146okSLb2weaoZm1TxHx9GqMQrQSzFkgAWBe9JGz4LRGzcFeGWwtortzriaqKEVbjcUQL",
  "key6": "2yXZm2pNLGb3wZUR41XoGuRM4k2zoWd6RBZcbVcuoQi1YcNz4tW6WogAXmsTww1e5PNJv1HTfFBNfmu8saGiVRuL",
  "key7": "2WzUPPZBLWSh2f4nCnjivnbnTX1ar87JUgNZtHPjj84F6ri41nqJjhX5KpzGGMkYpzBsvzfmAaVF3Nk2izHHXLyX",
  "key8": "5n3X1edCXuAufbn8jfCKdL6ewp19TuSTAEbJ3G4j7D8CCHfmFd5wEfDX11XmM2D9bnaMKGu6EVSGWXn9Rs52oQHE",
  "key9": "236EGQAzGsXLvKdNLAzkh4SgDK588zbmvkjjPUwi29jonALUEc94g4ZviAqzu9Kf5Zvk1SEMctjPzW7ERMEKNKKW",
  "key10": "64i4FXTdXVK8yN5QqKTaADycf5EWMPZJhncecG5FZfNqiCmQ9fVHFuEy3of1e6S6DwXRnoyDK3MChqjh9ngu3x8F",
  "key11": "3ZXsqzhFeXyS13KZy18shP1t6qFEoT9T7ubudnGnjz53oziNhW6Y4PwekPdS8wChHnuzkqyff7K5kFqMsSzkZ1i3",
  "key12": "4mFdEYzicvs9cF1b7cyQCzWDj92pCfkMdVf7BJva2FxbGoqkdSAc9x7HWXYCB62WHn1VttovUWrbWiVpHQvHhSRv",
  "key13": "5n8Jzh9BR5gfcx1cLzqKkMqfX31UAkd4GQVWpoZxDMbgMpF9jPD5d132y3Ewyudkwd95CcDr1HmbAXgBuVQ6R3ss",
  "key14": "5y95YefeJ3Jw1NB7LRR4p64oPKdCLJzMgxwLA4jw5hVavBoxzoPQn6uAHqPrzno6v78RCF3Q2sLsJfD6ho4tc2i2",
  "key15": "44RiUtrTfcb7fi759xYAm4WuTKmMavJ8gvZkDV634NRfx3ppjACopm6toArrAawrn9n9mpUEk9Q9RW9o8CsnahKi",
  "key16": "LBArNgSfUNRR3PXZxen7MEBSsoG9a9aRmEszSs5tFA9YnYPCoJdzMFDMP8yp1oQy2JzBrabovePwcrLTtTmTNKy",
  "key17": "4aQYUPrhPE2ohMtwKUZ363eJNQKzZL6hNtkNbnAHv6zUMq3evvwcxBk5mYcSjjQRg5r1R8kvUdazKj8xguPmv6uY",
  "key18": "2VTAZ7EDMXpE35PEnhDszPC9Bm9h7wrntGGw7tf9TsLDfKQCPJu3SiVJRb2VZTufwMpTpmzDDKBf6bZeXcEiq5rR",
  "key19": "55gEK73AxGhMVz5EYbrXow723fiCbBfnRe9xbsQRFw4eib5R9ga5oZB3T7vVKZWUuyxGW1r8mLftBMnSudWe2pjb",
  "key20": "2YPTScv6JGs345TcEYrk4x9dFWte95525tYFdYNDQuSp93NN7MRTkHBUAwdYy3Gd2xvSJ8QrNoa6fNZq67dssm3g",
  "key21": "2hCkmebcRUrYzHorHaZ3CsPSBSCdQsVb433jQLisF5YS1rYzJ8ghhetKUTLf4SRhVddxjVvJV1C5mCduoN5b16y2",
  "key22": "3KeZnjEPXLZ15s9nw1JzJ56dUeEjxXHTCJC4VWPuuppRWtjWp6UcrwERdB9FSVUuMPZcxshW9S2SrUCdDgv1Djai",
  "key23": "4AKdvt8EQHiVoYgaJncRfUKsJ7WEmw9sxqb986XJgZQoDdWRsWhLP1HLfNppaCjcSemW8tpvoDDJjw4q9JSJhi1U",
  "key24": "CaU8nt7oozFX5kBfr9jVknFDU7yTFvhha2yxYY86TKKeR9dBTZzKSaCo4FgTGh7yVQrgErnEhPJ9o8rZUcknsqH",
  "key25": "3w7GUQfugzvCafYKN1D1ZzUqv6QubHqDu5DyhGgKW5xiQfpt98R1NVEv9D2Q3pdvR5qdRfzb7fZJYRa92CWmczAH",
  "key26": "xKADz8KuSWHFQjq95iXwekZSa3sVmv13Y8Fi7ZYidi9D8PQcFtSnJcww9ogRMqddi1jrWEhaPtqBpUsqDaTGE8q",
  "key27": "5qpexp11uJPJH2mJ1PHxkgdqNcqVMFNmtsS13bbD4tQNRfpusdFhTTrinqMugnbiKevTkprzPZbsaqkb7MSnCLbX",
  "key28": "AGE9UkdwDNqWAXxAEF73Z1tJZP56buWEhg8TomnK2y5z288Pa6xgjQ5sqPxPp3PWSXgd33WEQPuXfrP49zVt92n",
  "key29": "2ZtpDzK8KFXhXckShBfj5wf9xzNMKXQMxjra7k5HU3uUCJTa5n6F93obd4N73EuHUSACGn2pFF7LsLQKG1BfgoJD",
  "key30": "5rmcbbSyYp3QpH2trJsgvcsmVb9bXHTg2XeWHKLTUVgGeTqRXi7pn9kbDta7FARNm6HzLyqk7G29FPs9WS3t7pz8",
  "key31": "5hLdnhw1kjUjF5kTjHSP6LHuQkPucBJQJmxSnFcNCMw8xUcGswuH4qW8tHwn3BFk5owb2qjf1ETTZquBvCy8vcvG",
  "key32": "57NW51RAAtKZBDfFd7noZzZGF3RHK8bFkzFNR9A5qC2SKeVmZZ8JCJhL4f9caeuqvVjDbe8v7h9MshTmyyirecXo"
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
