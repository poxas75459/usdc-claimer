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
    "3aehhJBsBpXWNGfJtX827hQji119aCmNUxupEMHKdYh36knfJkBco84XLVvRAMY8KHA2jAucseZPinKqiTmC5bEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xf37E57AzkKkBZXfJEVoFkQ79zPBq6CWAHJpiLf4r7spbKz4Bhwey3xMQzWigc1ZXvx99n7xQ6fttkNW8DpUpgT",
  "key1": "2gqP2ReBNGbyLmLc3Fqks3G7JDTwwQTWc1ghp6CMTJ8TpXjsf6CB9c8hrTyaRJJnSohe9xv1kxxmq9jNqPfVCwyE",
  "key2": "5rByVzEmgijWYBMUSivryAGHKv4vdrY7TxVqrGN7ggdVxUejzyhu8dKkXxcFNxHGv8T6zSTkLUcTrDkUzQaChjA3",
  "key3": "2rWo7ngQDTbZjT8UoZ4svuXAtKmipT9jS38vmiNuBqau4o62Q52qjdu1QhTTgfmzK2AZNTQSgEDLSjYFmv4CPQEZ",
  "key4": "37XYSGXn1E8iXvPME9hGy8Fpcdr8QdA2CiYD6tPJFuVMUYFGT1bAQQNnDzpvfx5xxeMJrt5bqDwGcY2tUsBqLkaA",
  "key5": "3jxzgsndeESwV1bQpoZGLgDMazwE9GMnLVc9oaxB4RySZRziTEyN5424ukrayzgepG2KTzFydRbdEmCDaizViLHX",
  "key6": "2TErJRdkk4SsYykH8aJTGaigMqrptBwUpEaC4mCG7D9CHMQwSBjuYHysT2y48v2esBkn1E64P95yqJJtQyK7o6as",
  "key7": "4ZCtPC5n25nFVNjRvbqPrh2K5tKUn13xeVyQaimDsaNo4468XG5NVH3w194RvYe4JThLsKXtjhXbvdpHWvNBZfds",
  "key8": "3qCeYTmbSRpTLAWGZNCUmsm3baYq9pHBoARrSEg7zRo3PtHUFr6RsETbBq2KXCRQBXBfvubyVhcYMWo1duaciNkW",
  "key9": "21TRXXrrao3nU5CjAmaBRxJsDKZJz1JN8XizpATSaCFHtzniF334avUz9JmL8a7PdSWWLCBxCJ5ue5MKhYiMhcNJ",
  "key10": "4NGj9KNRGBKdJNCyUqxPWgTUYMdRqoJk33Lsun5rDqswAAr4hpP2V9cGeG3AMojGjTgtQvmbbnqaXFQKk3nHDiQv",
  "key11": "5bg4WgbUcm4LMjqmWVVFXrF4dKevHRNtq253zwc1K54KtPd1AvRr7Tv6dsqgbxFAfSM8SPVHtGb1qCxVexbcPw1z",
  "key12": "8PANxkgCv9CHyqXj9biX5a42mPztuRDqKKj7VWFUL3x28AyBq9rTRsDRwBwgeNxpnuVppwpvnWUyPUnMjyam2CU",
  "key13": "5F3p6F6UAKdg19sBNh9YsDa5Bift3kbmpAYDwtjvTk1NKX8DPCv5jtEAFSwAiztBNtLrk4F71APjvLxBCGK1w8kd",
  "key14": "GmQZ9JSWjPRg2AiVwuGP135NXLDUj2dbeJ5AScKti1o3fpJTNdQdduAfiAksaMEZEwrCwcy93by9a2wRYAYdyYT",
  "key15": "3ugW9C89i8jxMfGACRXSjBgReawhnujZ2KCK7wJ2uDycbkbcEM5qfqfsstEgEq9rrwJJEJqk3tjwfNRh2qsagfCT",
  "key16": "5QNni9feRMzADiUwqUok7PKAPZi6rDhYvnp5LsqMkXoFqLYWniZatDY6eTjg2DTEntJNmu48VvXJA63zC593g5p1",
  "key17": "eRwFxqEY5D4BgnYWVtCoPhuDrJMzKp2iKc4nvFkN8vzJS75bcscpfQXK4t2MCjczLU5iaAcsgAXkMdMZ5pCSUr8",
  "key18": "4Tg6HHyggNJyhULtDRSEvgEnJMojJ2hEZeuV3hu6HBLN4AWprbzCvuaES24vfJwNa73zu79kBcT4qH314S27cEjg",
  "key19": "5rJLsdqepxuWVAB4hTm4CFtQhbosjXoATubLnYC7KzDdhMX24hj3xJTyARTFjbpmsD57XiWKwEBqu8Ehz5R1zbrW",
  "key20": "2jnJRf8rMTxHPQzuw98h74BqLSVNC28gC9zqC9ZU9KAP1xXRvYJ7ZUHU1UVvsuuj4b5zDQJAa95XunnbEwAxAaZL",
  "key21": "3R7qg88FzCVP2CFkdFZLc4Cm9zFznQFCvF1VwJYAdRYeNULsqsVyT47Vbc4GtbboXXo6niByzsP5Fu1syAct4C2K",
  "key22": "39RdjRZDpskpvswQ1GpPRdG7obbx7MBw1nFLZeQFA2PUfkccyG8TXN9gSmZ1JjJDRn12Ro67UtsSsQe33sAepSzq",
  "key23": "2wfNEViuFQEjc8VEmWSYnE6Mc1TC3Q5nWQ7dmagHEcQKnNqDCVdd4norcNCGznjUkNRDagwmPHWVmPUC91QM7Tp5",
  "key24": "2kFpAcQaWZpWiwwjikxNUoJkyLHFVVzDspzREoSpvakqJq1gfFdnyFUpm3QJ21tivVSmHn1N87is54kUt7GuYQHK",
  "key25": "5myookBNz5efpbK83wvBvNnUNAQADPbX4yCTm69bdDZf5CUVuoGb7cuu86gcTt9sb9HSscS6FEJjkAkexS3c9oy2",
  "key26": "2YqZR7xrefAU17fu8pN6DiG5ayhdT1wFeZ9RUEEWed5Z1SSmeSHtoSpAT1yUNkygtrnydNPai5rniSGibAaJ2WDY",
  "key27": "5Vbt3aGy3456ZJoueY9oJ16szZazF3esF9vUiXq7S42gqCqsqugSN9at4oV8pZW4h5sWWoqS4Tf8MSLknCkUmH4h",
  "key28": "2kzzsJM64QX9H68RzasTtEm6fh4gJX2yupm8u45vuqLTDba3QN2gV8CejyiSEQ2yLNHFnN9pANoA5pmx7starVrS"
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
