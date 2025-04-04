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
    "JvqqaYaEy8iofxvv8WtWscfQWG41ypkr7euzbTST9GAU9XbANYDx1Hz7J6SEpGnkJm7X18wt3KR2wmbQGxn3Lp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ToAdeyAr9TQCAdQA4ZZLHF9tbHSrB4DJSSd5qxSwKPHbopwHPM7E5jCaMgPv2jRHD5xWQae3QrscDJ4PNLQbhZ",
  "key1": "4SPoTJaJHdX9dMiLYCUH1F7w4VrE88GMnrWRGDtMqHRrixxEsDfnDGZxJ5zURvkcyFBGN6URJs929fkSjYiGqW5T",
  "key2": "NaC7S88dTN7BmbB6xHPy3MmJqU3q7z7o2Ce21FVc4zYqwzSQ38E5QqBTU9ZcSJ6VLTEkzsgeFsNtzGAm7PgD3Ti",
  "key3": "3KfsJmqxRCapZReQKMueReomZTYm2AStXUUiRG9f2B6nLVxNCySirGPLRcBhpCiFoRzWYRzLBGYubaGDFENuPzra",
  "key4": "NZ2y4PYGquWyzAQgvXn45kuTjUN8Kn7jLVrbZXp24QX3VWSYXgSJdi4ZHmrAkBKL7qUWPxfRGQn6zJFWcnZjPsZ",
  "key5": "4KwunW5RYQpvLPSmEj2gZx7Q8dy9P5PY2d1dyN5DQrwAWVcLnq3w3DcrsB8ezLL2S5cWFkcTZcdzKf5nbbpYkxWS",
  "key6": "5NEC5D4sPFwYWfBa4eBVBhUApiawUaHCdggNvpSGnLisSmqtzEW5UwSFi2S6XNvD74nLJTSo8hGcdeQ6RvpDSNd4",
  "key7": "4XZxs16t42GvweR2FUtkmzkLCpAGK7tkwSKUseqk5ibAywe93LPzbeKQ6G5swRdSTBDrJxz15hVpZaZfXP6cX2gh",
  "key8": "wAWfqQ1g2VBPbPLCnb6L8p1Dkj2vpzqodr9M3fwsjWDRpSTBMSXTEsKzqEDTfzqr3hPc2MzUw5b1i2v2Pr7Hzj4",
  "key9": "26xYebyxTCiMRV393fENNUoQj3yecw7peSianw6WwZCQJYe4jHxVYFAUXFUn5u8QQYx8TQ8cw5nTp7sUYJu6GLLi",
  "key10": "4X7Q4zcJFnjuyMhAFesWr48simjiASaToAjE81DDy77qzwQ9atMQhMuRREKNXqJSqGRZBH6249xZnt6xvDbVAXQq",
  "key11": "65ahhxGoewDgLXgjbLBN4cqRTx9eoeRjfscBNEiZhoui1Mn4QjKPCANM8q8XfDpku4zRy1bNmPQAhmQJyQCVqTpn",
  "key12": "3YMfWXiTT5jRXpB9YjtxS9At64HWfBv1vNbf7ENejZogC74uGsgLS8s67k5rEd4CZMhzDRwERNvcjmYuTPJRfkLY",
  "key13": "59BcBnVwDkSXnFJ27sbgYsd2b2ZewXzj7pRwdYSK1jaRD98YAvBgHJTxnN1Umh4xTrZDC5qqzePZsG76g3LRWH64",
  "key14": "WfDwtkuKywFHWU5sZ1tkju5PjCen9iNkWC15weyzHyffAWLvf4rchmpjQgrnbYjAQDPJQzuZWqexf2TVmiB3VFT",
  "key15": "4bZoVEgWoaau6rQYvHLDoBpL3DZLMGhKd7wDzDsmd4ayQWug1NAkxdEQzkAEKLwWaSEbykYswwuLBJry4fybg1za",
  "key16": "2VTBsjxtnYXCAq53NC6kVKzF4uXtYsxeeiRQjG83MoCFpfbv4ngXqC9K8kMecLjSxghsZcyfkgzRBVaHjS2rKjxH",
  "key17": "3eFtxetrbumba9GjNGYPm8weKQb57rTpom2ZpEzgyHETxrowCEHkYWKukAQ5YVRzjmVjKfA9pz7BTJAhm8XCD5b3",
  "key18": "sjqB7YkghVPmDWBoKScM71KoJdtFhdZgJfzU47Hn95hz9BrjSnkZ3s9bNZRDckZZZeBLTa3zdXpG7EY7UaodyRn",
  "key19": "9yFTybkVSUSYd5VeY2UcGjcr5Qhcf9fgFYXGu4yssxXCPt7xshNt5pL73HadPx95cYXti1YvgjDTNmGQvg1pJ32",
  "key20": "3ZHJdorDxLfK6SuxthzJydWvUvtbBj2sNiXZoT57AmvSggpz5cPHEYommkZrZoYWPCbhLdtqHMtbFb6KpwzCZixL",
  "key21": "5wjxJHcigWffPenMrDJGngFgRYmE9TxDoynty2s4v8WJzxSWLZ7eZS8YJJRTZdX1nbhkhjcToRQ7Q8pd5AMgyttt",
  "key22": "4o6rou57tu6vPW9HbKg1kUsU5VA39h1PJfaRJaMq32h1ycixedENAuziQAREFJtynM7YZz7zehqSZxwmCn5X55Ep",
  "key23": "wDW1PcbMjyWF5VAdMjmRbi8671fQKLooTYhSLT76sL5nYr4NizGoySwVVp3xf85NzYhQJEp3zuXovn4gV3WwJrq",
  "key24": "2mw5EJ49BsuGB5JBrXnVrHSJfV2SDL94hWaE2VEJD7pNeM5FJXi2i5ZDCoQVoiTCEoEECETDzcrXTtYsnA4hVtXA",
  "key25": "paY2uTJqYMe7wS7iFMGwSyh96JH8j4Yvf2r2eovcMieF8aFazTAFmBBzxCQ1ovoD6qYXuHKYpG6w2koFexa969h",
  "key26": "4DXEeFDP7i5yLkgWjkDyLW4pdNq3ymxys9W6JPjK9vks9nfPaD99gwT1urXeSZWrcCgT9gHve1MfCVaYfzDSKZMG",
  "key27": "5cGdG2LKT1mRogd4xPFK7tF7wz4UHugKqsPzBxsRwngdp8TsS2Vs8EzGRfcjRAYXcEjjZ695uhLVvf3VDq7Gp5Yj",
  "key28": "3ni1arC4kRcbTiv1gFsezMfnnJvU9ezh8STw81pCLGuECtXAFtCsjCqbo2AxxTDJHsYMimDtTphpS7AoXR7rgaro",
  "key29": "7rDq75n5KA8s42a6fwdnSyrNK2wrHqTXEvuZh3CVbHiN2mxX7PK5psijitSPQcbhpqsLsKw4UAYbNpatUBVkefM",
  "key30": "2o8CaEmpZSEJiL4Nmq3cHQYJqbyKcLi3NwdZAy3CRczAAchnWRkcRo4AH34wkgD2BVgqoqWoCQeqCYuvzg21NztM",
  "key31": "2bJT4SZkzmUzgTg1in3yu5AVQKQJ7ZwiqoSzug4EPAihGr6MCkkpjrmG34c1ysJXqTMnGHxMU6Z8cRUvxJkpZ9PA",
  "key32": "641yQhFF38Cj7LEkbJStGeSeiVZuULYfypURpySdW998HPuaxqUewYsC7KsYCSN5rAeQr9cM2zTyG7LiZuXKJrRS",
  "key33": "3MUdVjxCKcn8KYsVZMxNE9mV8cAGk5CNMumUKNhbkbpWiPHmFwc2ej4fMFTCz2h9t6ozZo36uKjouQV2EmdgCPvx",
  "key34": "4tG9M4Lw8rgHXecBxm7ooxCbJcpPQX3Rt7py3JcLRfnHxFUWpcQPxaHomJMD1FgPm34LjN3tdnVtqyymAP9X41fR",
  "key35": "2CA8nxso76jVecZrSZJQo25BFhVM8vaQGvnp3nzLnaUb5ebTEH3d34Zo9L9PsfqCouX94wEUfe9a6jFUHTrXp9hb",
  "key36": "6sYSRv8E76oQLWbsmMkj26sAvGL62ub54m5Y1ic3e4qSPyeRWw42Z3GnaXtU1YXHZ4jvqbdMWfKMCNpHHQhKmNT",
  "key37": "3iLgHs1gpRyymLErGNNJsSCN1czqNwY6CZZk87MC8xRXHiEN5ftLAbDhKTTMA6uUHm26h8bNgkDyQ9q2oT3psBJs",
  "key38": "4KGXXTQmYTCfiw8Ya4YvC3CPdBn9sK2mTHNeQDznhe8rFwSkBrRn29EPoDchEi7Db2Kwf4ktmfYdsq1M4zpbRHGV"
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
