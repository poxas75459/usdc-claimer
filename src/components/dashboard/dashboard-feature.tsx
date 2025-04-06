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
    "34eMDSTVeADGRcjGcEhCSo1Ws3Cvn2shd4vYFEPGW4G4KLYWJ6AUNeS7NmGrggo9eRkWKi6Cw9gAEUnkpBKuzpSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FjgeV4wDHFbrdQo7sx6krjj6UTwMmBVFssZxt97BC2MFvecUxV8yW6RTV3QfrbPz6aL3QVVsj5rtT6xf3oQoAD3",
  "key1": "3gDUoU3ZomQKmkn8hoxzTwchVirDMvterpo4zEttEVDx9szdM7Zju5cGZYDM2aQ4mtzftmZ3guk5jMcWL6TNX544",
  "key2": "jhFLJTSAn1uUAMbyZFaRJRcnz14icfxDBLLaiXhHZw7kXReXCEVo5axPUqUc9igvBRf8s5jaxNnqcEUnKnHFKj9",
  "key3": "bBJLL2DFumWjFXYduVv18wUELio1zwEkCir1eFFc4EgdWFagQq8mGN4NRXnwnQKbxVDgbaAbX5Uv8qzKougQ8tv",
  "key4": "48zG9vamzHVqJtdrGmS4damG6C3zYdh5rmXaosbZy2zyhxGMhNbZV37AMFMcpJHZreMxJEhortPydKn9BEBAG2K9",
  "key5": "M9dC4exTwmey4dykV311XHWS3x6dtQvJ9nxw6GBss1zbwJcTADwm7zpQTAi4xMasjTtv72oXmNAhi18b3gAgUF2",
  "key6": "4Ve6MULPxCQWaqVW9nXm8p5bHNJTKhHfBHDYdbLwM7S1T3jk38AbKz5XmQhkL928Q298PwdGYLNmK6y8pEaAZXaa",
  "key7": "33KzEHz87tQQEWgMAx6ZkQEsALqvcAyUgpopk8uWbSKgN1FhaWdkN4xM2Pq8QCQFvr98N8nCRWqH76VHg8irru4G",
  "key8": "2Y14isK2G8hqFcubLRZ54Z1N69xj4u2MQdTDuYCe1mC1DjqxLfw4SFEp51xVJA1ABAiRu3j3mCLceGoB3nCjgdyp",
  "key9": "4RTzhc5EvLpeEj1ycdQvSYfKJbGbvFaL4H1U87dp9fxwRVCJbzWjATezS6HRK9j2V1dXnH31mRhVpWsamG1MU4V8",
  "key10": "5LF4vzeGvxY4KGuRRGR1tyhizqDgmXGr3drVBttUZBNEc75ADK34mtMaD6KxdL6VPjxRRRVWzZKYxW1maR5q4i7A",
  "key11": "59UKkDFd9k1rsdBMbo6bXUbzcxnW6Fn3kRiXt2ZioCp9bsRbqvbZEA5fLnqKYbVZBLRKWeJPEzoUHgLCrXKuFX2h",
  "key12": "o8hW1QHH7jWStfevx4WxZVgwacDLXMDW7GE7Az5yaoVmtbc9hXoh8JV5XYrkt9TCBKMhBiYm4jmT3MbgKG79hNa",
  "key13": "4DV84KqLR3Fsy7DXFdxmiaCivnJcfMgvnMrSHzmtzcgWc6Qc56Ebg21umvJy4Tkm7Z6dgiuZ9rdrtbGnW3L9144N",
  "key14": "4N31bQp4WYf53oYXCAgKyEgNh2aYoeJzbgFT6Dzvgs3arnrjk3jTSTFG6sQWxZMkfjAQ8nugoekVoQ8EjJB1NNde",
  "key15": "63Fg2sxtpYLAZXBX3PZuXRHPu4qXhDw1SkTLWR8EJggSVg3jj6mQsib9ANL8jbSiF5m6cXMcoXMLqb63RNgDYV4C",
  "key16": "Sp46ZDDETsWoRxkYuQrr7e3tr28Sc9GE1qYHVt6zoomLMv9dSVi5DBXAFBHCsiYUBs7uoF3YBUKYprUKnn7afaZ",
  "key17": "4oNKiPaU2rUTbgsMSQ3SUZjykS6ZoNLu3TWeYgQZJeN1HJCLxXFL21bsy5hPtc3eVsuRvDPvNFsKuWLYvYHRKgXx",
  "key18": "58qa7LppaiR96ScDX5AQ9aZS2C3LkGFNMDCc6TLmBapCRrunVD4rYAFQCjxZC6efGgPVj4zEkr5C3Y9GCUrx4h3u",
  "key19": "3VXuuQ6Bij9FJTXi5W7d4g2hktu3K11LwRmdRkXtCUBeuycMQy9fyqedfaRJhLMRyUi6NQ9Xw28qu2mw7aVQWo1W",
  "key20": "3Udd9MAJDYo7vEWgUFKLo3WbQPs4iWijDQLCs9A7duYah9yWM7unsuZD2FR4dXHmj7BETyrBd1yACGcd81CrfZWN",
  "key21": "5FUPTMWgERrK8hi4m8FDdNKZgFXyTFh9gLipgJvG46T1RrSx3RZHpE1VFnoy9TKCfLaehehi8uJU66WurDDmVNun",
  "key22": "5zMPno46ZCAPiv8GEZ2LPbYYh5oDV6hdv4UATemH11nZsmdDnNk9HRAMWZmRe6fthkeCJw1tq8EbnuyRZb1zwGLy",
  "key23": "3AfJhMvFW8wt1vkVpnFuh2HyYzPHRBMrRwuLgdZcDnuVLiq6KwJAGQm5HxHjmq1wouYkQH18am5WEGheEFJYHbUp",
  "key24": "5zGMjRZ74zN4LwAyqZC8Eddq9SY2gtV87sf1rEHoub8KjGuopUssqHTSa2Z6WqLmqCDSrSz8QJsYnHyqskSLQBjp",
  "key25": "4NxrwZ93UEM9dVKKKzanfsCdiwY6eM1KkutKLEyV8zqXAMpyFN8zq1KjQLrsYUZ4CZXyDaDD6fzd3FpUxVqfDqhz",
  "key26": "4MdK4Uqw2q2svGeJsfDkCq1XiGeGA8Y4dnPoM5pCGMzDU9fYLWFMUzYDq8gsbZ1qzNMk11rRnFQc83KEe52jGvNL",
  "key27": "2fRrmDq5TMY9SED7e5bcGTZvvL4FixUh3QX5SwNAwDXofqTgZuXf6HvC56g2Zx3X7c3UnnQQZHM99DuNweUZREA7",
  "key28": "5hde8Cmc8kNw1iMSZQjx4JFowS14v38tTfwME8a3uZFGkSauuaNWCBsbSn3vpK78LtAo2D4yQLwXL79QSRSV8Z89",
  "key29": "4fAja9tqyj1ertYrX9tVay3SKsCH7r78TtEztMLuWJzkBPc8UUC38ccCAw9wiDLK6QY5CPb6KQJMmyiMKNvHTXag",
  "key30": "3apuoftvyevMiNUy2aACyuuCZR2gJ5Krh2VuCGMycvLa4NwFsCTCu3W4tiAjpeNsrBR5daNp9bk9AwexHvhg7mrD",
  "key31": "3UfRumukU7JCS8kn7oTWKinvuaCss6xcV81BMDu1PxXvwkD6UCfca6SRctYPesqD6rm4DquYsAUEBRQJX86Rxiv8",
  "key32": "ibJHk3tEFSmKh1KFgHyWzxLRQRD6q8K1pAHoX8V4RsQnqoQmy4N6wtsEAe2qPgEn4RpkeuJg9vXPBxcF6kTecKA",
  "key33": "47Nq22EsS8YNJFM9stWbbnr41wQeKwN9gFo4yECSZL4hciM7cYaPTNSpKtNP7k5XpF3CUfwYCnUGa7Fqmhia1G4w",
  "key34": "5HznWJHYADJp3BWQ3jxXiAKPwktripZRvKQfn3jtF2th1ZZMofcb31KYXAx676h19RrDZp7fpQyj3WygWPzD6y6b"
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
