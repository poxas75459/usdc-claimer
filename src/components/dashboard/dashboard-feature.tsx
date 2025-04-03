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
    "3bTCDNB5CSteknA56CceTvRRVMvkLRgRoHTm4PQ38jAxpBdUCWDowkKB7NSs2QriK6nqwfeVMgCkVpkW5hRLc9A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjayFbfQnwd46bovFJf4i7TYbrMaJdCDPYvTA3ZiejHo4H2WcX1k5Mg66HY5ZHqTXhku75aMWjNKJCLA7BLP8p3",
  "key1": "hwuAKULvBvqtd3kay7DhbWMKCAHfW1b5rK31LaUs7Gb4ZnRUkieDw2vfVouqtZt6BmXRZ9vURyZjmBBLTNSKC5P",
  "key2": "5f3VY3sDDUFdAVqMFG5UUZN4dPYBKCsEzPEr1RTRFWAdkYnWoXtZe4kMaVruh7GbKJr4gvBskTntc8448WtBFGyv",
  "key3": "pfJgvEKNMjJqE7faYeBgxMhhEgYfReor2X7KSM8HJkm4QNiVdHiLPPMQ6u5eGh6KWruyutxQTnVYhzUryAiBt8S",
  "key4": "5XbWfzmE7kW3fKHjo9myWNGuCvU5HajgT3xCxexPGdS8CXNy5HaiK3vH1K5P6BfLSZGPPzkmH8tcUrRJQFxZwrP8",
  "key5": "3oY5JcwTxGjSc8qL7Y8fjuX8kNcHzjS1QKxrdUSarygviBo8tr7syWT3uXKZnDf8XHYkvCMXuZkvXq2dkak1tjoF",
  "key6": "2jK2yxwSBSZQmNRuy8JvyGCjteQEP2Gk4UDtnSPgcuMnp6oxbu25P4kqEmAowPGDzELrVmW9rH1RXtLDKbscLrMa",
  "key7": "8houzZo797BSLDYJ7heoJyXcfeB2CUMphxD6dFbHYQXWQHjp8UZwb9hYvAsKvGUt2ovj1eV9Wz3frDpjZriygvn",
  "key8": "3UGKkj2XJwvPXjSsQNtWro8j2ycEEzsYZbqMQchF2oM7GtebVcurCGSrjji8ucMkFrWKaGbhatApbe45Zuo9vopT",
  "key9": "3Pir3rzsFhN6ugLf86uxuinBkfeqHytWntuq4jtxjk9abQE7qCiEM59Szx5q2iQaEfbZ1qUnL1AVQGJjaQ8abFXa",
  "key10": "5aizcr4qf9eb58uLa36EDezC3qhB81HsgTfdNib193u1jBoYYJhLVqfRG8pXTKhMbU1CwD3SYD5NU1pjjDBKUGga",
  "key11": "2j4DV1YjsiBfyL1X89UrwULRCFaUWwJYmHKTJiV1fp6vsFgzCmWnjVKAaoRDwgVEEdyD48erVrzhNhVbWVErXgLd",
  "key12": "2dvvAtJGqfFMnStxXJH9yZgJeXrkJZNB4eswnNt87Nxs9r7dqCNqzctumjNh1zjWusNoZHRkrQWvTNV9D5YgRicE",
  "key13": "2sufzr5Y1BdPH6dZYADPHJr2vdBhMGXGEWN5avdM2uVH5RSFdFPSFCDyxxr2AYVrri9v23VYr6FLtyPNW2Qmmn9n",
  "key14": "2hbCVQUM7cgKA6eu9cXJWfSTieeCF8kxs1zrq818Avdz9oyV8Rk92dsv6pWLg6SQupkLMpeaT7LLRYVVvPcUE9EX",
  "key15": "5qKVxxPRHVHAUPTYrtqLdTf1fJBApBLgu6QLwjXhk3zZEy9GPTjw7AYz3ezip9ChUiHfQ9DuqRUDqWswyZJusNU5",
  "key16": "jcjMu3UWLn58xncgbwXHog6UsYfPu4wdDNQAkixwWPPbbTGv9yQE6nH5Nk3MhavUxQ4SneRN45zwYQtRNqz22ya",
  "key17": "2iSvCFNduCCgLbu4VG7f9s983WCyJa68wUwSeNhwP87wagNxBWTgqUEZdxdz6XEY888XMKuBojcnRr1HxeqHZ6kp",
  "key18": "Z6mBQTXKbmsSP7kfU8HWwsMm2vnN4mVoJsPH6dWzLe6X9wWxfp2pSAAHsb1b9UZqYVersQ12RpzUEHWE9x9sYh9",
  "key19": "2YaZXSirzwfmPYebepXHCshqxjA2sHJhNy4doG1JLykUYbgGSQRQdXa5cbbCfsAZURBDkyWKx9UvKVGEwDFC4pxh",
  "key20": "3m4dnhyk4KuRzzSy8PJ9ChtGdHjooyGSsGaE7t2C7XyN7x2pFk2E6trrS1JWNYYbLJjZvoNcYd2t6feicBMfCNXm",
  "key21": "4itkaKXevWHaX4iNaeExpkFo89xg4sndYwCe36EKkUzB9Kf2WXdVZ2mwKb1AFLdyzuENPaHJKX3CbcMJpiNeHdJM",
  "key22": "2jscjUwXKhMghNUM42iPEgoBo5Ecm6ck1S3R6gqpuzhvQBoKeg53Ffvmywfp5bQApcnbugJVNY7DeLnASeVR3b1f",
  "key23": "2NZ7Sqg82HBGWxRgie4Wc1AVxckvcquyq5Mt84bEG4HPLcNrBzcfLPb8H2NTVXSfFQVbqoFHbdGDMw5xJuV4voaR",
  "key24": "42Py1jvnkeaRz4WuY7HWdQ3tmSsjcjVzLRmsS12PR5H9NxXbgHJdJHxDhcekXp2i2mtnYPTapmD452Xy5EC7gYTw",
  "key25": "YcWykkwhgwNe4uBwSAMHK3H9CEKCKCuscd1D6B5wugDgef2PUPkk1zz8UcABMArio3VZX6o2uqYqduULY1YUK2q",
  "key26": "zZVcTmiUfL6F2BqvNTUsdksrcrTaC1EVFptnVTrU1t9ez8Q3u7zUMVCA7JzLRn6aBnZXgbaNMRwzAydHLpag7qp",
  "key27": "4mSsn2BFpTbn3yZUpxXrjaz1xfME2ynQA1ouqcKNaPx1GgVN5sb5EkJhtXozoTuYNQXhmNhxm26EYLAC8Lz4WjXP",
  "key28": "5qDVVhZcUg8c7tGMst5uCAspPNd4uYx2U3c47yBnS34QdAKYumZh82mRabhWC2fMm6d19QvfHUcH6G9nFrGP7ygt",
  "key29": "5hMcjeJhEQNv17kajnjFngqoHK2H8ktfUusMFGK3TUNc84ChaZzgKi9JaKn7ycV853h34PNNyxeVVzWJDFDrb2pK",
  "key30": "4uv7koEyPP3SoHQMxzvm6ABdWYwi1X8dxAqN9tTPNCXsMngx5qNi5vvuExYtWNVsiaRwmZY9AP1V4LCA4snLuHn4",
  "key31": "2XUgN6re3VR9o2QREmZgg8rvAjdvjgYFhJNExvBDg5157WVozEYpQXNDFcQ2V9SHBYrpEdTNEdU8wpe5sb3oHj3u",
  "key32": "5HG4PyA7u3eUGX9ZQo7xSh2GisAGysJTnF5V6m6jLuxVhaZeE9TToU1yJxgpVFH38B9pkivAWEy9kCXWnX5aBcvz",
  "key33": "4pKWEQvscyZNzh9NK5GEZFo5BzvMicSgxhziXPhod6CVFJ5J4HHPQ9kaa2bkniqbCrWwfKhvDcBG5CDghbC2JqBJ"
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
