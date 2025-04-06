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
    "5JQMCyfga8diKPrTvSAgfYGYKL4UbiT1uyQ2UR9cXawkkVqNTpWCSQzbCmtvYEZj7DSnUcyAfjNxhb5qejzxHqNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtpS1XY1Tei2AnBsXjDqD7YVjjBnLuLNisZ3Z4QL3w9tLriMdeCFxmWDv9dAvMzt2RjJBLNz5UtXzHNmLger8bd",
  "key1": "4fycRU6xAGnNumDU6uN7J6oVTEYeyNs8e5gKwMts1VRYPxKbTyTEkJCvkMejmnYLjXq2eescP5rio4fZGbrzzSDN",
  "key2": "3uNkXUgRsqQ489yqHRRhWTmGkeL3zoeq3wivVoyqCP7SskcwyGd38dspuCoscEYNsu1bupUcEifJNqinXAEse3jh",
  "key3": "5j7nUQnJondEyjwHy98zJtuL2oScRKkcZ6boX8aLMutkTUD4UJRShfu7bpfwA7koxyYzWZoaCKcsWZwDhErWbXjf",
  "key4": "38cUryYXgHUiCiakjrEdG6Wdbyqf5oAVwmHaEF9DkABg6C1ZxX5FrgRX4bbG3ZsJ6HNQJBe3hCj4prjnmhrKWv3J",
  "key5": "3CH4cu9cQyFXzvkJrCEvTAwQWLGZtFDXsKHYZGSQAaesyUWCiHb2je4zyyo42iNGV8VjZnDz5QGtqa3yNYYNrAso",
  "key6": "5izRnUo68zjgBFAgmovkSdoNB5Ssoidevib8spkuTknLxLzs3mDUYpAfDd3UJXMHBb8Yv74A2o1iDStJk6Cai9ZD",
  "key7": "2w3MB7cF78zb6rN7zmqStdNUbaPoR3CX6WCzE1m4PcSMhg8RbLjXuxPGFFMxVTSBHoCniaPwbm2PW6JYHBW61qeM",
  "key8": "3if28hBfaUeTmJYnmtT9hdf2wycZ7ZfMfAxQy7irR4t7H44WptUfF5Ehw8thZjjADy7aPSApwNxHh9bCirCirmEf",
  "key9": "Mg4AUowph29LHJ26KRyj7T3tkdey89iFXffGjCCNufUB2izdQDTzPgwVJRY6y3eWJoYAHZ9ftPkaPXc3ZYT3Rpt",
  "key10": "24ryupYQkSyBxkimzGTxHUpuztWAA1fVCfXh4TF1q69stmbwbS1jD6STRV7bRhWXg4hxgAXVXVUATnW48tPFaipy",
  "key11": "4jDBAGcb79CDh5dQyqmoqiHKP9x1BkqdbcCAtY3JgB2M6Kmz7eomtY2hWawo1gRUKsoB8U9YJqZ6djv5MTm3DbdH",
  "key12": "5k6yXrNuWqyTuQfDABKWbpoT1M7xnf22RAB5SHZiCpsE99q5QHPMULAkJLPoGmLxqmG7LthQKCaG36kcaDsZPT28",
  "key13": "5kj9grQWnPvd2fSDixMtMG9H6LWFLeb4ATqEz8FixEn2b6QHfC6sMeeVz6aEUPGG2fenp7hbVNA6sQTBdBjhhzXj",
  "key14": "3uPAf5QgU7DrdmdGgqKY4gaUFzA69ibrL1ievyu76AGn3HiyNWwBejvuRtEiUaHSwBpcZZPW4MMW73uLHNmPwg2M",
  "key15": "5qcsX1QnRghPX589MSQepgkiHVEoEe7rcaQcd7aSvRFnp8sDFmW2ZCY5z1Khj6Ymw3JNweNggQ1rtAnQprKN3oT6",
  "key16": "5s5ehmjwtsc9PoPxiVCh9tmf1yNXRtE4vY6MPiEa1GDxj11CHS6qViawtaXsiKuYwZEDCJ1WTfRMk17ZZhiqsMZW",
  "key17": "2Amt2nLzPyfPvTd3VyMX4668cebVTyaUMRVQrCGya9mrbZNEmJ5WxRVBPLdzKkErgtHmjPaeunC2FCoGXYmue1Dg",
  "key18": "51GWr3yK9vffZdkbt25nqjMdDwZ7VS8HmMPVGFvFnptjEqbvA5rymVHu63dFbcv7qv5S6dNRnb24xkYHQ4QK4XK",
  "key19": "2LnpEVGftN6cwUELo6ZZGBDFpvJANpZYpFqD92L2dBTqUJzGETHGUkJJs6jRBqqvWXWQWS24ih6drLVeXh2Y8Ymh",
  "key20": "24pJFQSeiRC4a4vWdEpFwFZ6nJ9R9mxR7NMEYUJUrUF1tKSCEzYbhDCDNBL9KtH8RUEufgAvKegpNR1V3sLzwTnq",
  "key21": "64jYubtb2gu9DgunfbzZkFY49LMVfYid5tem9kE39cAmj4REm7UEfi8e6P3vMPHZgnrw3V5pDjt2uLQAk6cQebt6",
  "key22": "p26DEG4tmS3TyxPhkcguZaz29jTvpSFQBtdVFLhpki1EwFCv35Y1wB2rAqn5289pbzKT4QhSN5ZjG3fxfkjJFsM",
  "key23": "5FXqeoEFEmGMoBiCPK5Qnug6ML8HrHtAC8hCBSKuAZ9FREGU3wWf9hya67mveJa1uULFSxa69Knn8SRMJt6tzVp2",
  "key24": "2QxsQTW4BPWjmMtGFc2xLgyKEGUdfXs7VNgWKAhK2WwdhtJMhVKrJrKSSziJTWvybP9VneK4arUWxX7HkBVistwd",
  "key25": "2fpr2JcCk3FsAiNAwbUPmfPyoPKv9VRDx4hegc7Nw1m9QYo9ahctdCZ4VatXEjMfVoqFVXYSCecx7ZFZmK7wB6mE",
  "key26": "4L72EX1b9zT1uPGvc1GqTNDLMi6MeddpnVzjZv58oJmxp8pZBAEzE6pNPY7oMVt6R7h5Wa6wHFQSHRVpgYGNpTC8",
  "key27": "3fU8MyyNZNqkRMvx1XP28gPFs4TAPQ8wEVCGDiqntMBpJPDxik5tPy2ersUvWbuFqAT2Z1PnSCLyrXnQyAvSvgaz",
  "key28": "2zQ8LqJKwj3L9WnZb1vBoqNq5SmX2EhcVBWo9w9ff6hPYJmhUs5QGTLogbAQScuCbBKuq9TjotaKFFxAGsFD7H7f",
  "key29": "4NXysR1qUkg3cXMzfFQvxfVpT77WeqzH7x7kDPyRzV5jerS5npHomGfGptKRHJv5jQYJUndte5YReQjF41B8Jzi5",
  "key30": "2hUYHPPYoBrK26ZTuqqxrddbLZHLVMayiCZVM2Ej3H7x3jtQehUtVXxnWkfUdSoE82HZQer36A8jHmBvGGFWkU5P",
  "key31": "3mQy4ctMbQHwrLXrErM8UX6c4GwVttrQS6yHVM29MP6VB4yv6JrQrSse6CTmQQoCzUZKF9FWBTWgXqNMFHqbLR3T",
  "key32": "jx1iA3qGVo1nir4EXgVYX1j8sL2GwkQwcF22bN96FcSycipTYHttwR2WsfP2hFq8kWWJdjug4qqXcoYr6BneCWc",
  "key33": "651oWN6qqoRRkJav6HNU3wCYcob7taqUs5iGUUxnffGJ8mCsAAnbu2h6E7pK3yAC6LF87Fzwdzon7HBGcMKSZ6Cx"
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
