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
    "5nfa6tkkrxowd7UPoesfKhag2Jp5xLkQAUNu2Q5gVfe47XgMJpusM2rEcBWYfkfEs9A5UejTujLLKLT7rXnAVBfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HERX1h4fBD76d6GPgtdqxr2s7nsXXUh8nJien4xEhbD4goeu1Z8YDtNk3VXstdr5BtC3rsKn91i6nWRzQ2tqAM",
  "key1": "3maSpcmVDuGbqaB2JyhHie6rA967QXtQF8zs1REQ2aeyvi5K5kJAokUL5sifbiGh4fZyHWHk3ahLJ95P3KJYTnqx",
  "key2": "kxjTgTLNHvRFv7ufLuUoyiLsNFbB1m3V1J9mtAvE5G6TFb3KJMpvCC7Bx42p9BrMFCDPEJUy9rYBounkbPNYrsk",
  "key3": "5FpPdfs8nXGcfF8DVGZd7KNn8v1w6sbvKZqTU9XNwRyCJpDCmcst9THYZW5X9Vybot53vsFv2EQZvf9viaaLbwdC",
  "key4": "65WHyN5fGhmb5cBKgNkaQm1vgWymsRTub8jVG1GkLftvfvYMwzhMzqqvq1jxknmkt5J5uf6RCp5H9Xt283K6AKbA",
  "key5": "3bVtkhTFMFcDEckrtKQJsXKRvUaCJ3FixARxXf3R6WhMxVbCHP9KY93jjUQg6wsodV7BhE53LgMSGWEB95XUHe5X",
  "key6": "38zwcdddkE3qrsy39JLsHtoWBHKfQaZpRV4LE7RmzGUrNUmTaG4oKYHwBi338iyMgfoVB15wRo7Vuuwc98T6miSo",
  "key7": "454RL5doNBbUeJRT56FQZkFsfeuZAxLqHeegZqgJCfKF91QD7FqwY9cS4XiFY1nnJ7Uf8bEg42cAypnEYG7SKJqe",
  "key8": "2fXbUVSburaTNX1wvZpGUaUCdPPZu5mGv1qM8gidKRRwF3JbpHKL4sTAXrXFewEWC4tBLBQRFRa7M6TnnJBkPQjs",
  "key9": "8JdivbZLiWNzYDRgcMkhDgKyCnFqBJsDsZ7uqAy7YnNR2jdtLpErUgJMFac3LN3ukUbjF4kLj1edg3y5ZhxwrEM",
  "key10": "2v6Cj4SrvFUZZyWzVQGk4ox7HVdW3YUxpGjLDbstNCPRiAZDzNB58ByzXh2TQ8uhtR8gmsmg9L5E1soihxC6JDTi",
  "key11": "3LU9VKh9pr1uzit4NMmxzB4AA3p3jJsVU8ybGdA53G7A1HxmhXvXRDfdkfzu2WLJwkMf7W3MpWcRGf2crxXsqhCS",
  "key12": "5X3uEDZKR8zT5CPhUmBys3FLrrquZQosm7wkg3wDtUzTdSfQhfJPoWzRWN9kvxZEt3rdSMMDdCwPqg9fR2Wnmehi",
  "key13": "2aRnhz45RQfmtiqRotKtyVuk4CCFLi4mRafNh56K4TLysAvaApEepfXM4E8kKt5ZqMxQGntZqXVDTrBU4mHMgGTL",
  "key14": "3Aw7g6kKMtFVGasKpjTt5f7RoYAyWGGCWfjjHKTYGKczgk3semjEJ8RDrzxW1EpdLndmYvVjom7h79h1PY96UFvE",
  "key15": "4n1ofrSL9sbWhfNh4XMAPiaoSA9E1UomZrz5vPMr6J98swoSjcvzAMjkgGWsTeoiNua5tN5LKejZ52DvSvUuQsTJ",
  "key16": "5wmR4GEGQDNF22ubfoeLaSVmmsAP6AauRVbPL5rAMQkzQK6eCPu338ci6L6XFQsKWSn5jBGxCCoqAdJmrNJvHuWb",
  "key17": "apwMoseRaUem8FDj3YTvMo7p4Yu2DW6wG1AuR5y5WnbEMsKExb738P725jGQSZ6D9RmMN2qugdCQtoha5j3XfoY",
  "key18": "3TXmRVKkpm6M8hubLwBTLy1cC1zBM2s1Acmys5eLSKcyAd31X4YC82SzeW1WfTYG1vukYxcChDJTzbMNi27m9Ybp",
  "key19": "2jK4uU4QHCgVaKME6PwDo5tdXmGnM71UgPThPBnfYcQEQNospPN5habaro461Xiny9uCX2GidabqN979XTxQ76sB",
  "key20": "4N4D8ERmobjZMJWoViUoGZLsE4btiaHTpc7phMgB41Ln8qruzQHPuy3sWb2oswmGadMjdoAgmGRE1MbycV8iVVzQ",
  "key21": "33oKYCxYNw79LuF25LpMtfZ8FcKSEckaLJrqyaRoQsnc6t3uYKunCtskbtNmibgf4fSzpzvtYaxeAbuwJCVhxGZG",
  "key22": "39sedJJ5qGgjddRgcXaaspxJnW1JNmeFPWoPzQnSJf8uHyuKAqQN4nEvaGtwYHwYqDFEeVMVAPmHJXFhrvYPFT9m",
  "key23": "NTViXtytVdRbWvEUZazwTdXDpgrSjW9xoGnCgMyXjfAgjH5S9A7DXbSsaED3V9WjepjMJdPRRH24RQ5nn5ig315",
  "key24": "5gKXPYSw8AJjpoTGBmUqt5zgXCbvt8ZJdyRGDriWqiAqKEopC1WoZkKrpmBHPchWE8UYhucte8Wp1XqP8YhzzxZW",
  "key25": "a84xhdkrA3BUFyn7wKSZxwrxVixRHq513gQBq6qzNFUKX2ZGBYV5vfrUNNq2jyHp8aTsuKVKXEccBALxNdvg4zq",
  "key26": "x99teJgTVRuRktyAb6QGSZxfEbTTN988SX1eBMA9m9Jj4KcepXRA4Sf7Qg6mUxKuFYPkJEHfdWG2ecgKvVJFRY1",
  "key27": "4zhE4egtRYCYeFkzSxGmvL6z14sGFL9mrhsASA3AjtFE7x293u3QWoYnE5a5PbUUXBVn4iQ8h8GnMuU7u1XUWdhu",
  "key28": "2Nenj7vv63gAVpTjUtiuKmfFktrGgKwgyGjMDkWHZUBSxXtVVLpP79XezefGwovVJaK2xzJ1So99RWbvdgnsAb3X",
  "key29": "5c2FoWTrieysWeY4ZKYDLoNNPXDvYWAUWHBLJRFa8bb3dBECC3pLJqACbsiPTc7J3RfeNz79kTkm7bT6fugT1T5K",
  "key30": "4D7zEgV73quzvT5uRTMhE1hFc4c8oD77th12Vcos9hks234iqYgGRvpYNguVSKKD31MDUvHu4VUK3Jad9KYGqB9t",
  "key31": "3izdmKEyhT5RMP2jSoB2HDs7HzqgyXsAGRigDNGPrSTGLKECUUKXsEPUnkRtQe93AHEpZ94eXngfT1TP3R6TnPWd",
  "key32": "yLCQMy4qVM9MUrTYmEJxjqFdAVqnziU5FnPF6LjwiiFuABXpoKHHumsjRQpVYajNGSzGA1VdvAeMRF3gr9YcJxY",
  "key33": "3vUFG8Z6ueofAdmojtb3o5R3rCN8oYkh9jfqzbNbBq4JPFvC1J9zF3DNmHxHdLmRBMEKXQSt2QqueWdFsMFW3RT1"
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
