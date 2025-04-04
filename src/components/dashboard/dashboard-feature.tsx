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
    "2GfLYbifPD82oCBCqmBcN6mMtGUaUUkmX9kjVB99DhULt1rgP1VnPPUDNvtgqR9t7gK99YkxdQCyjJUsd9GCxQbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDffsNPH7zNjyKQY6VsuMdWpL92DHuJ93PmGQSsqk9uxJ58FGHCAHtjRbjCco13ShkPMiVNemmfTgGz2DsJ6w4d",
  "key1": "NZ5mSKXKjCuX41tQV9xnp6vm6Scs9hKderFWEjrnTx1wSr6dhAjn6LrqRigb7mTaqcJfjVVsKBDUyAnkiqfVy49",
  "key2": "5nXCDZZT83EAvhy8W5r3ECpwskDXv38YzZJmwEc17AeC2YCo6NtNWDBBsP88gTEDYtXRarmLYL3eftfgmMpF363F",
  "key3": "3VwgSQQuvijb5AszhGm3wM1f32kPzZ5hmshb94tNaAKwaP7RJbNwzTvrffgp6Q87upLeuE8GFEiCyc1ykmTCaMZA",
  "key4": "43VRUCJSNVxVFTae3Gm7TQyQcWBkW2LMEPz5aRYaP2v72Brgw6uxTSaFZNjyQZRx3TyTVJYs8GBVmpsFUi6HWnWX",
  "key5": "2gZTUn6k8UzMezAhixBaPerZD83piQHvTkWzztQZD1jG4nqCP9BobzJCPJ6C3c3bsgRbxjgFSc4C76Rq7UYkb6i7",
  "key6": "QzBKzYC7heCGu1GDdfUBp8JVvEgexLyWbFogyQfnkRYavooz9tQihwSk2VKs2hCX5KQNuEvbFndJjQuRRjcqob3",
  "key7": "66sva9nbz11VhYjfyfbyWjykwRLtt8tf9he2pBjvigPpr7tp2t3e8aiLEVhFtRMJMYyN8BmDnaAnEKremyduMweh",
  "key8": "2z8TezzaRfdv3dmNBadhoSqaVpB8D6ynXg1q1niDGXYzdLtEopuu99nW2v4JitehKPp7W5YAVJo1kBjbXjYNcfmd",
  "key9": "A4HoxMPR93TZLCxosbKnCvB6WoXgQti5kEiA8Rqd2x2uaifJFyiuWd3EtWyqLbGHL1iMEEp7TFijj48zMEdzYoH",
  "key10": "2kpG19ZqsL9VbUoRpcar7JA2LvbHAWXGGST3XMhUxFWLcs1BARJg7RAvW5EmDa4UyFSiyNW5d8CwYv5aMzGxhnzE",
  "key11": "epPv7VherERXsKwvop79iCpEKfDDgvCCzXMuNbJmoGFvWen1zSvQo5pR3BqVVZ2VRxSYoUkT6hLPWoVVSEkYYps",
  "key12": "5VnK6VjaG53yzHPgM9nLKibXGUxcJPfQLHdciPgTvMiWJhqJevA8n42URBqUuu83VTRnBmmYf4JdQiESZsYbhJP3",
  "key13": "2iKBhBLwNYGmsYjGtEtugxZKP7aAubFWvV6v6zasYuNPBqn1Sr7En7uQ7HXoQpw18b1LB4k211p1y6an7hagwnKh",
  "key14": "4jf7Z1vwD7cog79fDsf4y38ibw8zNUatNNzfyZ62DRHS1QgLTrA6sqqhtekEneKKQ6jyJB5JmAZs9M6devZvJ3qi",
  "key15": "HHpfHcrxEeHtZsRxxihwufqcsMfZj6XnuVXVSviQA3DBhjUmJwxDnwYNcHbA75c8rKSGKYt1FNVJSxXYqE47AJX",
  "key16": "2nAT7VtuQeMESiUNeDMUhnnKibHHwok4PA6cfzuydVRGba19jPAxbn8EDD8fKjL8tbuoNJjVVJnCfdWd589MfHUE",
  "key17": "38LT1rmB1ZgEbn36oupSPH5unyVDVCV9bDyno152WUJiewVXVFq7P2ndDtMCHsdsXNQaczYurseC8gy9KSeYpi4r",
  "key18": "uqs2UxC2EC1ufDV6KaKggJkmy9WqGY36C4yvQ8tjNLCxkKDMkJwFPWsSVMMNCDeCCQGsFrYFbRKFPZSHbVdqdue",
  "key19": "fQbWi7TqZ6m4GvKNmnHhHKxyfqSLALKgaihnxvzQejZeRE9nUsr3zTaUzwHbkdaHRBcsYVF6pVTHFoaSRbK62Wa",
  "key20": "4yhzsfrzZCYY2vGEfH2a7etwp2NLPGT9ehHEsX42CvRAwu6f2VVds8RcMw4y6nVUv58WcsjrpydtgvYSVkZvibYb",
  "key21": "fArYEvEiXE4rjy9wLhJaeJ7Htf73SjixJFngPyhaashwdYYixwbN9i2wuoVTJ2vGp9WdoXmtkxjmVYHSDma7e8w",
  "key22": "3nkWFVrZBQPjPiYtYQ6Ck1ggagznQ77HJCZSM9nUyHQkdveANjy82cDnQiih5QVA7rUA5HukecujZjfUswC2RPDJ",
  "key23": "575p5hrcKLhpyztUMw6uujXyMHdyVq5GpTtoBqUFxXBbfGynGeed9d7go8GwE2E6XrqBsAhAQMZ4P8DGzaTs6u3t",
  "key24": "2nhrMo1HgDwGPue1g19TvF7vQvLU7gnSACNi1GsvQnCwm187jvJUeSJhawNpqRjrwUJBsrDnR2j6ur53cLUDZaHR",
  "key25": "414suwnUYgrU4ojrB6avt1wvtVvwTgdBsGMCUokQzwpgQDMHd6ZhyTTtFJ47gyamy8qj6u1MPzthSBfjTam9Gmm1",
  "key26": "4UDJ6WmsJbfcUE3pKmEMj6W4PywqEgr4118tWtFhmYXYShsooLVeKbhMtHJiGiveZPMVFuLm33Y8Yd54zLBXrekH",
  "key27": "iu9cqLZyyYVf9BegoXLPtL9LabvLCCy52KLaadNCeVAKixvsVDJgnXpJjpvgWH5MYXJd7vKRzSdxL4KpbRjTMp3",
  "key28": "39rzLAbSVfGo7hJ49sM76XbHRdZGLumnGAyJNtxjW67aZQAYK6uRZstUmnKwXJgh13G7w1e33Q7rGaJPGELHUkEV",
  "key29": "kjH1Hht7iG6Mk5xHkMachyMk5foMpEXNLhyJcprBYVUmYegfGfr7ZQNCRRabMsaLBUSFA9ybnb1jZT54CUe1VB2",
  "key30": "56CVEwykjFCthJjj3N15jLQCsFdRV66s88z6Wfsd4PB7NLkYPY2ZG6NLxXR1ezpLeSqvhNn86tWEM9cEDzgYHqSY",
  "key31": "3mCuZbNMuNGZRyXdKMQPv4cGMQ2qibc4Q2yAboEShDCd7FdaKXKtxkDTBsb2HE3ERjSJNVS6C8SJBUcGXBXRDbJK",
  "key32": "3RyNFCC9n8z2VMsD5zsuLfSBJhd62y9Cq2M44vNGm8cb9UtbERkCiggzf6LyMCBmEwdkaDiLJcGJ3XpibcYDazpv"
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
