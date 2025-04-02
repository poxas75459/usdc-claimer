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
    "5G515T24GsRYTsUVexYhY1yDnWVYs84awBxvBZFxW2sqmCXqzpSTkrDtheodRqmQGianPndmuzR1Kf7qzPP4Kedw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K732ZixCfDrekmMAjB8VYQAZMnXpV5RQSYS92ERZCsAY87fA2Lhbh4MjXZLitvoXCR3561XmwzrGAQc95KpA75E",
  "key1": "3nmWzPKfyuxbHpQPQR4XgDHRxZFnziZNbfkFxrhGx8zGCkAF2G8L2nCGGQPJqrWUPMg5kNmu6Ff4qWrzkfScjqEt",
  "key2": "2YR5dSskuhTWXwicz9AN4TCejo5DSACkt4b3xQXTCXCBBnZyQ9A1iqqh6naExtJb6Jm69S9hX3XhsR1VpwA3G4j1",
  "key3": "2Bt1YDnH3a51PEEWFwrYX8mfin7LfmZ6kH7W7xBxeGrZZVzQZ3uL9pfE4NRUBCfV5MVp1MdRatbpqe6ygjuoh23z",
  "key4": "4pCJEYeMpkedhfw3BBwpYYtpnaYvNDWJE6A7T1iR3UjWHTxW23nEs5i2HuQ6kH7vtjosYfzEmxZJ35rJDQHaYE1k",
  "key5": "zyMX2ZD1rq8pHE4orwAULhhp9Ch9q59e97q66YNLf1h5xbbMmBfxD4wNCyQXdWMDPNNeJpWvpDvW7Y5GirThNkQ",
  "key6": "4VMKGsC5Dkw51fUp4VJoJcLz14avaZpyxRBVJetVYeAxHCXMfGS8iWgp8ERpgTyxK9tceZD8K8oL5F6Vr86MyJPg",
  "key7": "xFHPwBH99pa7bW1YBghrMTiF7YXK2z5VJRMW5ENwHBkXGMRYo2WdsFndssizbAZef3Ke4m39yffvRW34ZAgFtaJ",
  "key8": "51TfgzmwQXG4qthTGZvzT6stmL8g6aPe4Daj4j4wUDprRrm8zCuzSkvUQMa6iP8vRk53gRuJxYRKAxyThzgaysGx",
  "key9": "3hLYfN9jLxdHjmLjbHbfGtTMfbHWJV5u2aHEK9Ws8CdjZ5eN4A2DEVYe2PuhKQnZgLYmwxmLMLV693KDnrHdFZAA",
  "key10": "3xcgdiX8KEstXs7xztE3V9JKBruE1AqbvZyU5t6ToecDb3f1eTrKaPM2HVCqCNKtD7Vmn2LYpKGAbxzZyFymHVLV",
  "key11": "49CSmm1Tmt8DZf77SWbN2CyychQhjoyvkKmcWz2fVWP67UiZHtGyyqASgFz8UUBY2HQDwc1upF3dDAMHYGnD9mvs",
  "key12": "YtjDSyHNo8GGeT3pY6JeEZ8U1gzyQ8Y48uiK99fJ1Uk7AohYUnq1koKvWqKETe4WBXBMo9ZcPC85bYkEtVQCXEp",
  "key13": "5s1ZnqHbyZUntWQau2FPyUwseHt81ae7vqKGr7FMHPLQdDqFvGDfrmkFXSh7o2J1mYnCvKJ8rhUykREdQAgdAN8J",
  "key14": "4dVUtHzdDiXeXHKsUhMAuBgNSnjvcwKvTkB4TphHMGp8ni3PbrTdrqYQMcf68JzTCrZgCJohgMFdZCmgMJSpr23M",
  "key15": "2JtvRMCUHpyRBBD8JgkMs1YN46b69qC1SCcuLebyn4W6mToFe2ehvJz6JsVdkXPGNY1yLQxvAETrv6CitLxSyBso",
  "key16": "2EWWGnA2oHBBQFTWVFoJWP4vD5cJ1rqnqXXiCA8dQBhQEDGiKsNegeXcBVMpjhoKRb5mrUFYL3RiZmHhHDP5QzDN",
  "key17": "2MQLRwGJxNxYYyzV7zMq6SsJg3daKrL6435NFgMYeGA2SJQjMv4PzJa2gLYFMnttuF4c7GDaxKVVSGtEDNWRDhzZ",
  "key18": "dsj9yF7KbkoAEUYYoyXdHutmBYAbBsqaLfgn82ib3bcXSapqRkWNKp465JGawsgr1ugjaizBRbxjWvdYfgKwy8K",
  "key19": "ck5cMSkSWsCMPaJMxQn7Z3ksqbJrwBdYfy1g8b4By4Xb1RBo7rCCBPspAKD9S1x8Wm6DyvDm1pW8RK1zoJCh4ew",
  "key20": "g6vA3jxAarcpVXN8CpsyXkfGTX4rt4RiihZcwWiBMNrYRrzRHxkJL8QUZmnAtMt5givvMePD2askjwpgNf7ZUfJ",
  "key21": "3UPYigChAKgzSos4bdhvCpsfpt6P99iKwruM1aXxAqUvf3bdpvSrZN1HV1jBk4ZMmX6kdPxJyPYtjuokUKGBff1h",
  "key22": "2ZUNiTyEdeYYv5MDV8BaDJzymCxiT5ZmSdpXHHRx6MNJfZjXEWML59g37ritgzKcPF67fqV7sSEMMDe8VWrihHcN",
  "key23": "4thiDsZ6gvGybvUkBp25KbhdjA7CJ3Ku6bWwzd3U3ieTHMBKmxezt24mGypQH3aX8tDsEEJYNhq9VE1W4F4w52su",
  "key24": "2fsehEt8ZgDXDWYer17BBhXU8xW6oRWg194MaNg9Me2auEQABdNEjHhX7roQx7mZQ5uM5s6D6Sxqkh7VaDYU3QuT",
  "key25": "4sYxWyrXne5rD2u3YyeWvH2qrJqWKThdwc8mQWQQxf2TJmsb9t4ijkRfvhNDiamN1hKdhKg4WiYAPuKompJoWhpn",
  "key26": "2MVYtHmENVwB5MppnjzVPxiJv4t4KpizhWPw1HyCeALJgzfLf1KQcYZUs1Xg3UNWukpUb1LAUz4osjPY5AUf4fbC",
  "key27": "54q2ni4Sjwoqi8TaCzXroxCWy6GjzLft9hhm4hSsHmzb3LPrwyi81d1oJ517MShwo5Z7pZ38kmd2hM3V3x3sjrA5",
  "key28": "3U2V5EyDTbdbALgt3buChRLB4jwwJ93R46b9x4TZukTJRns8tgAGsYRUBEQ8knVfxtHxhh1xYRqCgQBSYCUfgzvz",
  "key29": "4sp8CtGfjaS2jLVubbuMAA2WKDfcEQ22Rsw4N4Y8uJNPRxsnbVCaTnmNGWdWADzE69opK1AfXPXMfwyXnwVoYK4s"
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
