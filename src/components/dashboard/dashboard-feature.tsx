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
    "3eipypAZgaPUyhBRXrH2gT3EtFMkLegPZrrdnkABwb1DmZLJev4GisTRXwed2EwM9hkQrDSn9yatZwxdKifPsGDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CS4LLjJHoBu5pMm2jPZaK7qmPVaWpnC1xa4Gqrz8kbDeQqaQBy28NS7c9RZrUzGUfuXY6JjpSiqSBUCNhKwn2En",
  "key1": "ogzamKo7DDf5zmSo57Lnk3otZV9p7bVjPHArmPfMkfvcJgeunTcj4T8pWcbRFqDi7CDHHxzbsTD8Jkqi3id8Y9w",
  "key2": "61i515Szxx7yxwK9AGnj8KmMaeSaFXmN1YTENLqq5SoQqdtXmojyDko6N4y9Ly5dWQXMRQWu2Z91afcSSqNyuiDp",
  "key3": "2EuxLTwfaesj6Vh6vV8fdDkHc2AJQYDAFDdYZJAmbxEQFHnzCqRBN6KG8HubwbM1VqJg1xpug4YM6hQQPcXSiy9j",
  "key4": "2a63m7qNV5q7SXSTi7rFEyS2bPo8ZWoUC8N925oV4YzHwKMLTnTcSkyNZTpGBcRf7zUbWiSpfm4M45khWsgC9cuM",
  "key5": "23F6kS6uNuS45673St3EkrMLt39EiSCyDZgcTJWtAixpWzqGaySCbQXqnxnScAZuNe2x64fx2xZNTqrwJSCxEzvm",
  "key6": "5sXmFWn3biJmsoaiUvKzGj6Qf4XgnSaMfPw3wU9ZHZA3nziEXFzCEywUkEMNWGnxdYzUj8Cb5zrMfELCiXCowVpK",
  "key7": "2YtnDioM9JnL9xuXfCqFrFJjh3dV9oYTNx76rA4NL29fJrRoyXs3XdhrDr7rbHZMDDm4CvnFufNnZpMWwX5KfZ9n",
  "key8": "3c9BkqRo6MSTkiPAXR54VBHsQgTCvnkhQpwobkHSWZoag5vyoDEu8zjYoGEppDugq3nCcSdHCjvmZjsDkQNpUaXG",
  "key9": "4N7noJ8Fzap2JtoP13T1WuVvdmt6rTKa4e9CmejgQER5Qf4PAprFqAk6rdL4wP6eAemyXG6L6tHnHk1UvJEnAqDY",
  "key10": "4wbWJtmYFwVJKAqnDmjSNiiu9P4muPyGmYUQQa39Gh8f8er1MnkVt7KRvrjQxNEFj35YjNmS4shRi8EVsVTYuYQs",
  "key11": "3ha1xUAZakNo9uZxDF6K9PYh1Cm5eWTbryeeEGLftyTCSVCkWsrTufd5U52gpRRUwcQHzxxEncBRT1g4U8K4W8Lj",
  "key12": "4BLNBWQPSPNg3gXbn7e2h8r3NUETDAZR9c17P3mFoMu3fExQnxbGnmSWRVpoEigeQ4RSe4JXcb4utxPoXrZWNfhV",
  "key13": "4SbNPc1gN6FcXfS8vfuzbTg33brUYFWDxx2jo96r1mxfW8DtQxGVfCqeMrtvsL2hbn8aMkHMCSGb94P9P7Cep5ke",
  "key14": "e2Ji4DgBmMQNroWWb8zMwe3UYj2sP8QuUQ78JzGjYRjmBkWKHR1LSWvsotWXXf45NUwt4T2HLHy7rJMxptkUm96",
  "key15": "4upkNfZ4pNF7jCLDMqpPoFHL91WuuYCGxHiBY5vYcUu45ntJF6vHAwBc2teouuwwsQW5ctz9GTjayiat1m6D3Unp",
  "key16": "59eQZYvKUZwmafXdRUtiwKA6m4bwj7hn8kRVsfsSjyLSoPebrqjBmVxQVJ3zEPs3m3oLBzXawgNtewp4HzJMBRhF",
  "key17": "7E9peAFwaMMpk1YuzLafPXHYqvwjFapLXpnk65sWLru4VRSo8s4P79ufmzqdYGVi6j9mLFj1oTWCDAxFFkiphDQ",
  "key18": "4VdSXgyA4BVaj9dZMdfe2anwSM4r8BiY31CUhBv5xz5k8sELopStPnQjcsY9zpiBY2J94tMxNfobeiDTHMYzuU3T",
  "key19": "51tfH6y6tQjZePuqiio95Aierk71q4GCM8E8gMr4e9DSTDVewRBtrCpkrMBqmfBFj6BQhr2njpTj3C1CwP1mguJ4",
  "key20": "2U2QtsCS1fEePQr84qJ3KjvGwNp4B4oR6fthWbLx3nPiouXf4zQpf2pU5W3twsAE2E25Z1FCU7nNAQEhtF23cxNc",
  "key21": "5nLKYN1unBHKvKJ9BUW5PXWQ1htoBufuHDNVgNrHczMQpdyxJ9oC1jKwSrQbLUPMLpmY9dG47TM3K8DZtaFbD2f9",
  "key22": "Nk6LJdKxM1fmphk4Nc3MQdju1iBHgH5P2aVUJ5CVovwC8f75sAuwKmyz6c2Ezizq5hYA8HsweSZGwwth7nYwC6X",
  "key23": "24jxeoF7CLk6KzMsiJ8BC7HbyEKBmPox6pV2PJvkSareYYf89xq5z3yRpiv5jtXyCfphtaQRrmq32VSSjKZWaNK9",
  "key24": "2ug9k6w81d2skdLpNadW5N2e8g6wEeBq6rRDVhuv9ec81a9yPZFRr3b3dHbmzPPWxckpVoCK7hWkN1F8ymjvfasC",
  "key25": "3ySHrW4XJh5PAXeJ69kMimmh2qG1FnDzaYD7dEFet7ZQRAw3LAtBesNCHgu2kT7xRUH7abw2dp3pjmdxsuqt9j4S"
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
