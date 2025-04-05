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
    "5FM5fFxUM52FqNpbHeKUH1czMwcFr3UY4CwyqLBS2QPyMToFj4MUT59a98tw4rNUWyiH52armG9nPfSYQcbqc8e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7HadT4QkxciJBFxVHBKziNQsAgQ9Cgo6ycrr8FoSpKZ4HHkXi8JotwSXLEqJW3cjj9c9wPw8ZwMUGCwBhDbgiV",
  "key1": "4Fh2gD1cC329Ca4v21wJK1zpi1fXetoZap71gRmJeKktZUMgfQqAw2z7hLjpvDp9gqrqZGDyNQo8W7VmdytKwztf",
  "key2": "3RJLyiT2sLU5nQT9Jz5MCYPpGdzgppCzwDstHFLfz5fLQXxmnGS14eMuDbiVV89v9i9P9XZXy1nNmKJMJiagvN3T",
  "key3": "3a58P9pxcquHEJnGzG1TBmGomeCgX1FctunzK14ucAWFFRLZaP5s4bC629L9iLVArvKZLAp73akK1hD4nZYCcgFo",
  "key4": "3c4QFp2ynxWbnZvVcuAQxp7vwo3KzNzcADFBFqcpMXJwjuzb7kHSvrfKxFh6xCJxVkmxcDEHCwZ7NUuB6UDATU4L",
  "key5": "2qkVjvkm52QWFhZPZ89Mw5XNBP8QEHmH4KoALqWGUbKCvwSDG6YtidPxRRL52XGKf4KEYqoLX1EDP8PwMZjigGwR",
  "key6": "5A3kWLndL3pNbnBJ5vkUwHpWzgKU7SUzv5y5UNjdUnYbF4cWyxqkugGFptDepZUHfS1MR47Qdhc23ECf2VtXXa8W",
  "key7": "33iotVuLzXE8vu9c1WttN7FEtVGbpM6wDWTCudXZrkKKEZRpC99g4tpDXAohdfwhxV4Xr8cHzfsf2Yiir2AQvXwJ",
  "key8": "22dYbDC88MvT3TkwHHK5D8x64ca24HdyeS6aDNEnJD5YQrTArq1jV8LwASutokF7PB5qoBHcNiNuZjwQAQM24PwS",
  "key9": "4ZfWVb741bZfGAAEjPcgWbuuvU278t3Sy3e1sxRBUkU7LvQnkYBFut8VyFd7qUse1NPnYJ6atek1FbDHGCmymKxy",
  "key10": "5zW1ehNgHumH8tpeMVQfwjiQkGDGkubdhw37yqSgaBg8qaqHf49xrXvP2wp1Lw3sU94wjiYvBbFvV5E8oChxKrmV",
  "key11": "5R1bUmR2DtWEtiAu2UdkpCMEqJBd6U62U1qapCzVSWsEb7JEwFwF2epPZnkPQVcjz1zL19tmqGPLRzni7sBh3F1X",
  "key12": "2tKX8A4SHpWMHuQkSRfsrwDugiGk2dq5tGSAsfC9q8DLJcHR7vzVELQ8gRaqKhcVkxmRWcxxoDj4wWaLiL7Hm19g",
  "key13": "3ooZBrn5GuPgpyJUa9z1iXrFb5HKqGUQqjwsfKjCcizuN5M4yCLsd5bzUK4CdQvkPVd1QJhkZ5iXMnQ2bpovPrz3",
  "key14": "nqGpBqx529mqDfhq5CXtbG21Hfm48zswFUPKh7zz65HwfDByz8ZWBJ13XkPa2N3mxiGCtAwKJqhW9LsZmSB6A5o",
  "key15": "iHTUZ2TdvLAfFk2gc26WnS9fU3yCDY9ZFRfvtn4sYBLKEi3MqAUtHT4BebtT514tkwef4hqB994jDY2GsogJuvx",
  "key16": "4hB62J2j3hMZQK6X3Sbqn8iBDr9pGVGRyE1kcV7xetjKM6iuGYvchCVCie2uBxFxwcyeqiF6parRXWohPw84Bt4t",
  "key17": "3kUWNP3cfzN6pWWTQWM8rWGxnvLTrARgFe4sQtEccBPVUFCqGyF9wsABqsAkD4fozs5V67xsEFGWZCe3nepfiv6E",
  "key18": "27Wexd3FEhjAchKWXsGnzqWP1iKgDNNc3drJapHnRHZFLCYoR6EfPuww2rVQ4Lzky98Nb6ueVF3TyMFVj6Wz7p22",
  "key19": "4bAVU4PaAoN8QhRnthCCwxWD4w3RWq864udfc8ej3szV8CKYX6PTPePNxxwwXmFLAGKebjxfHN8qkW6Cvq8J57uk",
  "key20": "3QtBruFZ8tAabg5Bs8a9aRqnyVupBFUSaoKpEKLDdehnTtGjFBPCxCfBTt5uBM9z9m3g2sqvHnCRVn89b5AGTg7L",
  "key21": "25yUp6jL4EqXK6Srigktt5y6M6HpT8t4pt7j8PA9H5MKC8SZ8KKZz3Y2smUySCc2oZLmmiufxDJ7q6dPc4BQdQPa",
  "key22": "2oCwHEEXzMUpGUDoWJh3EtESgfyVR2m1KQXUyrizkTTosf4UfiV2JjHLEw4pF3weCoj3N9nJcwmTs9sAcE465JQR",
  "key23": "3XDYMP61r153CmQgjfyRbTH3kEkcSykwX8zqvgQbTaMr1TuwdcvxBp9iaVSGVcvDDcW1K1j5A991iN5wWpntGJQo",
  "key24": "3u5gRriN1HMJWCQYxspPxNtuhWKoDybFcEQmBh2nCVvnerUBY2L4dM6kjF64TmpaoBDx3ETDhrzkLziR61kjEtnN",
  "key25": "4WRVJyvy4D8xo1bKcgQn9bvMnW31bjxp1yJXNKjyFJ4vDfjP6jTp7Bt9Msdy8Dp2WPGSk8j6f5UYmgmz1nDwFcy7",
  "key26": "2FMvQHKMTPdes8FRSgF1QJ9trRMrRkyQKnqXJ1YNuzdb5iRTqMYdok6y54UFVT7b4Yv2jmJ7kS9ibidpnJAtcpcF",
  "key27": "CnyrrJSo7oNEkb1eQJhoQDtm93cokV5fdD4ZwzhLnWpsVzheCpeTos5FAqdpvqBg44Na35BX2NuYqaoo31uQKBc"
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
