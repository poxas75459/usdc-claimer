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
    "2TjZMinYp8cbM1wHvZbEQEtLG2yKRWsG3mLPPfU1tFkppFsykj6jmZgQ2mmJyxv1bJoFPFuXDQ4uTvinmzaSihDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2WaR7Xa5BUQjmEPgtzhpePXGeWanqy7Z7MAV5wzHn3WaTiemBqhrwFjPpBa6HWGFY1EhuaR8N9qJYCiKPdLDMe",
  "key1": "2jdGGzQf4sT538Pn76hisMuhbS5KECpNkh9ViHCwmrT4m8iGW5jNMtZo2SRJ1hQe8bqUN3X7dE75vm9j9GDvjLWX",
  "key2": "36fk2JNJzo9kErPeSebL49iYVoxaGDKB4mreiYEr1BtLbQN9LteqRt5o8r5aKekqqdBQz6pwv3YhFqFCcBDgDjZw",
  "key3": "5rJzy9zMLxfyeF7RVYhG9zAYfDTeD6DhbrH9DYWwskrr4DoBjeoXtyqTu8DzHGcARntdHR8foDTBYLvFXwP6YWbx",
  "key4": "52ETmiCPbKJCEN1UWxw66yBuvDFqaxrbZxvnQMkPYDqQYcNT81WsWe5ebhKqowLTbR6fdF7J4VbSswBzVjru7zKT",
  "key5": "3PxsVUNZgnn8MyXfpZ6zjcbyGGqv9wwTJp7h3gVY59VbkWJwyTVSxYGaLLwbN5Z4tzLazCNR4qckiAqEARqQNma7",
  "key6": "3Su1ieU4q5sL4iFjitzuxQ5Vvjx9ifUoFErUJ5qvAbPfLNAxmcHv1mUvxBT2XaWFKi68p6ZX2DjTfA5iMJjqhjag",
  "key7": "2VpmDT1ZDQxbzrLh3yy7dLCFkYMQMb7ey3EBYcxQeSZnfP2vVw6bFNQyaEMkEifPxwKFdBC4rF9Z37herzKFcnh2",
  "key8": "64AjteSKMpTCHwFYRTw9uDYgLUeSavG7FYj2KUxLRk1Lw4dX77b8Zwi5EWcR68xJzpahb8xxNERdbWcen8vKRjmQ",
  "key9": "4yXgJKVX3iykjEvFN8zijGAUvZUnsuXDTP3R8wg7JTm1obAbVQwSuooYcDdvhx7ATnQWbqv1esKGdWbkCFpyTehq",
  "key10": "5MF5XGk5RgUK2TWN1pgkVbtPReHV7JAa73ksxFavBrHVbhkrPNw7G31rdy2JY9Wkha23RRzC1g4XQnfWJ2p9s7qM",
  "key11": "44EbCj5w3d3K3KzTay2ity6s713f7Kzvpyj5K691n4mSY1pumXjmegRmhVJ766naeVhkVJ8sC6Yf4zy887oE1tcp",
  "key12": "U3Fehrvfd5BSsEVzpM6poVgULSTB9SWeLbQu9cQ9ZfZbxyBECFB6G3LishshnwxEmKUwgACxe35UjTYJigBqzj9",
  "key13": "5MkyCkrRGvdCLsmaQmS5gmzSJVTacSPgaCVsF6CUmRYETQeeN3JyzrAB9oKX7Ct38ww46eAeXRR7ZS3QuWoVQnoE",
  "key14": "56bztcQTZW3Rpgp16RNeLcNnCKur47P4uJFAYdK8uXDYz1PsGQ9ogaCJ1AriDciR4T5Rxrn5Ui28uvM4DYi8Spss",
  "key15": "2KCWrgn6qTZEyzd68vwV4x7NrHnMrXsc9DuaFwLK1izdtWs4nUGJRLkbPhctjAf1J6T1iWo8RK4CAMuZiCtms8iG",
  "key16": "2nQkXdNfnBTREhsDetaVTWSHagVMPo6fUHQtR9QY7BGBBMKS1pcnsjbGP6pCjorV84ytd7kmcNkeLLut1oQGCv3n",
  "key17": "3msL4pYpsFTzqW8o5rFatg4VSezFauP6nYF3pZCauoYDUuPnH78uvVaEyhvdN9AZVPMZD4G5Pe2LT7pqPaWCNrVj",
  "key18": "2ex2FjJofWWmXzLbYCaqH4Gda9GLFgZuH9yuXDS7VcJ4V3h31jgbGtExPxpBVaFqUsJPDEvi2SezAuu5VMwTxtip",
  "key19": "61SfEoAH2T7DwtFjRLmwcUEUW1t9gKuP8bDVC9V3kxb9NFk9esM87v9vR8RQYfFh5ShmRBThXjgBMJ53oXt73ihi",
  "key20": "3jSRXfHoMeJmUfhoQAGx7ohBEf4Cz5MUnGER1Mxu9zQ2kdCcR7ScXCB5fAQVLo1PJivc3tHQzk9BucmqryQDX3UP",
  "key21": "4zJbDdZ8cjxBUzHg37sQr8McQxb1m35R6Ra9ipUXJdMVyzVMbXW6f9g9twaLrDq8ChD7QzrUaq8e8WgPMhRJiDMj",
  "key22": "4ZjG5ji9knuw5PoRC8a9LuTjLPudahZta99ccgaXGsM92upSLKNC1Vmsov1p4gY72fJaNKjJ3skm9XPUJW8uXXX8",
  "key23": "4Yh3QAcHwNYRLwZAE33Z4iwZUZ4xsa6h6vy63z59KZJfcaNebQusbxGn2DTf8KwgvGte88iqqkJbAKp9w2mxC2gL",
  "key24": "3hz44GpVU1fRptDFjcpQP2NvhEx2trnPaQ2C6eFPoKcFHzkSt5hDT85EGcZ45FgkaHeyRxQqugiomvD7wT9dde5j",
  "key25": "kSoMshUmuTT1URMFGDUjqkLZxLzf6XE7ZnrZvs9AbKgov6JzymwQm82YQQzMVqGmkXHL5AyMc2tY3zvYxE34EK5",
  "key26": "4JrpMGLZwZXNPQVjMnr8RnndrhZTAaJQRMXei8bvwtwUDdkU9QXrjBV4jG8ienvjfAFWB22yDeFzFHtTVFng58eo",
  "key27": "4DDREjRi1rLbZ2LLNUnBNqSkiRT3QKt2sY8W2HbwV9amfEnxDfvoHjHtgPKejzDGZ7AkZqoCBfqs6JYsEVprasCu",
  "key28": "42hqZVqi8Wfr7mqXQ2kSrdJRgYFn4PZxzzSuzfT3nJwayftvPwxsJ1tXaLxBGVvTKxobtLDxPfZf88bLv1iP8mA1",
  "key29": "5vadtxAs5sv6CynY8C3sHsj6U9RrCFAuVfwomJhu2bjmDMUs9bmB8fe7BY5gkKL5hmwanTq4Ub5DpRt5MMrK7oNE",
  "key30": "3oyA2VanjpAGAupKfMNzae6itS3YyJBBsYRHsm7EYY432L1W4vg41JWQqQWS4KTjytVW45Lx36QMYdKjsqiik2D8",
  "key31": "3Euhu5LDkzTVVQ1bjJ2kfUQWxER6zpfwfp5YHmr8wELSmfvfray2HgDwnxDicoM9gksKVWdbWRBAPHgxCoMgP2M"
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
