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
    "67hhjxwZ4bY1gAMfPFKp57aL3WRKgXbVAxWonvFj2qow9YChD8TwXHgC92FY5M7dVmgwSzrbBcALXzLwW51tLJBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtS1nXsBiyDcJhuSa3oDyU1UrPeJybqTKiNtRsE6kGC5H1DZjKw5dMB2YDejNMiZKPoGcES49Q3UoQRGXEiiFrU",
  "key1": "2amNZnUBAD33Vmyysk4cVeTnj3axggugbM5WbCYRM2sTn1qr1ZW6q2SZTEejwNdfbrGQhAFHQ4C1VToP7gRNkcSm",
  "key2": "2SeKgouzQ8sjFww55WKMkVZzVRGrU6DdzRkmbg7oCo71JBhHYFC3fwcyzypq4XA9cc5X4xhDDujX2c3UoRxPdAzt",
  "key3": "4ZUMHULdSAmMUrTQpVCq6qsjSE3zggLo6j6bFMKs2RWKbTNY9CNAAyiRcHAgHq8YiYv9NrW5oGsEFRZHP7ziYiUU",
  "key4": "3SGvqGwA5aA5jfqCewrSjSkRGm1yqjj7acPwXGWSTPbEivUHQmuy7sh6vmTXiHxqpzqk6fK6oFybVAy3FeySRvgA",
  "key5": "gyUxmwKuwCzTimcGTXSp12sorZADjFxtavCQ4QjAZm3pKAfrCZxQAU4a2XvjUBJktnSS5n1zsQ4ao7Jyiy6v9MX",
  "key6": "32XNGqi3NQVbEunNVebZ1BnfX9TVDosK4pLXWDtnTkgfHh1wDojeXsnBenpXtSjMVYDwqaCezc7M4PKNdcDtE26E",
  "key7": "H9qmXtXezdDavnUGbVQ3CUCjfYyGN3WfrefAF9SzGHken9EkxNjRrXHdQzdKmKMzpzQGWRCRZZ2M3pxraJ4cFB1",
  "key8": "51Q6NfTZshnfkSdbhtsTos92LcmZXjWF1ouhyuZnGqHyXbzfgivBxQqE1dKFSLioTQRBA2eASLmed2aQ7PzkVRRu",
  "key9": "7b2nXwDukdL1Gjp5yM9Z2dx9h97MiQqr4PTLL2LQsA39WpNxzfgwcbX1KzcJ6ALpCtf9XAGNCyKGeWzivFwnn1J",
  "key10": "65R5u1huGB7dUJkeFPquT7uFTQhhPJDB3chppTCCA2PH7GQqWX2LQUzdp11hT5veF5FetgrBd7QHPYMqoKwDY4QC",
  "key11": "2hBGSSCFvTe7V9n8QH5YzpLyXAr7buYE9xRwCVbn1DhvDxMx5tNjZmQuVKEZwUXCzG8XSeujqLyTCtBjLX7nRCr",
  "key12": "BvXJZWJUgw8mVxELF9sdxBqcrfVvy52LJzCED5m4m2k1NESXAosz3m1YuSQ9CtfDzuQPfHYbzg5aot9jkK3g6si",
  "key13": "UW1NNAseANAkavY4suVCDqgcwEgA6deLp2nB5tJjqUokbAZtoPLfKTFn3JQFTLuEnNDrf1ZizugFErV8zSt4fW6",
  "key14": "5NFrFzLExBeUT9rGmw9dfasKo7vHmuCxGyWrDJBoeFvcQtoeKXwHQE16k2kEPUZHQxShN5VVRLy1ZNhyVqYEuaax",
  "key15": "55CpVK6bYdrFWhmZUVn3A3KzFif5bkCpouZ3Tzkut7rfr4nbsyT7pfThSuN9RgdmwseXi4Y175rGeFVqdBYo5e7p",
  "key16": "5S1wRoGrNhVXGEeuWHBwLXV6TEfd4ZGaWaVTTbTNCpFuBBnxwohh1TY8HBtSQLmPGegaQNqCh95jrtEd7CyjAXP8",
  "key17": "5wWQyQVogBPVnB9cvbX5uWxDdac8AACLGbrtXJuBpKtMBm3S5FtD8KvNFHVKT7B4Zh5gT2se5bdU6jRmvbYrPzXv",
  "key18": "5tTtokiF9rUDTcGCdhzaZadqYGcGnx25APbXuDqNMQwvX7rgG44G9tVjkuDp1oLqC1rChdM9eKSFLDyrCD1odTdf",
  "key19": "ZWUoEWvY5TnW2euiZz9zG9eTMC4X8zU9Fvj6LNXUGkeT2UQ1Egb9Vi7JvuTjR6tX1dJwVpfcLJxpZBxhZMyp4Xx",
  "key20": "4uViMCRa3eFZP6SM4pkp6j8XTCwNKLvW4ytdPb6jiC6o5v2mCLU9xFF34zFuYqhfz4u9JtRBmU8EaJkjmxxpXxaW",
  "key21": "LNACihMr5FyUbm7DXQXtcFhCZDgtgRHwwbXww1QZMW6C6dommBGDBUcCPrZBW3yLK6fJ4dV2ghc7ePZnhRb42dL",
  "key22": "2cgLQ2FDuJYnUSaWvUhvwvpqAzNzA7srnHJqsx5U38chSB4MT9XxJUhDPQbCKjYQ8WwKJUVkqxqdjkqL1WTsMvHB",
  "key23": "4aF9PmtFzFw5V2SjdSbFE6xh47kUzmDwrz6H2PSrQKUwygNkqAUdgQ83NACrBntKNTKz1iwC88EdZbZvcrxLqDG5",
  "key24": "4qUH3b3ebMQmqLc77UzMShRtXNRnBTnhk48jAJhGaG6ESDnwUCaxn496DeP5q3WYa59HDk4GV6N8EG2fQcMBpXHz",
  "key25": "4TZU3TmiE4MX75qojgH9BFXCyciy6G8mDLZnuB45ipVfkRBcyMWB9UWAcJ2MNgKyDLCkG3xpsRXuK28tR1YHWHao",
  "key26": "4zHjqVi7sp9tq442oKvDBKYA7pe1RC9yKNU72YvVFrYi9phqr1y4pka73SHD8CcgZ2UekGcSPLgcoXGvasqUzJCb",
  "key27": "2Mv27XkRNwsjBgphMeVVHqicFszdFfFDeAXnwnCs6131iQ9V8LHSYgUsmpkY6bLaPi7M2dNcRKTkTPSQEHcrHXCf",
  "key28": "487niaqmwUa9AA2j46wX1TYLQxi9ru3oWQtNEZtM3ZZ6BxSLLK6jjmF43y7up4Dpb7B22wC226efSPxvYKtJ8Hhj",
  "key29": "3yMAPFAcgHCxroVYBEMmi4agmqikNNqFdoaf3Sm29PcAxA7QYc2aPNf116idyZVbReyiEwzqpHZbMaMuRZdEcM5U",
  "key30": "2tyA8BQxbJPCuD7NeeEGq3njr2txSPz1hLvmuZqtb7oHCMnYbWaw3YphJNUNbRkUWRyw8MZTkNkoKcSKd6Gojq4J",
  "key31": "2ckMyUW5ZHAnkXAquQYaBY33MhknwotKCEAH9AgnUUhvwJ53L9Tvb4eoVuksg544hzt71UsyVBZDvfsytEGBzkH9",
  "key32": "5G5PMjL95Q2J2sYtqaMKPXY2cpHgcqV9PfqwUAzYQ75MDQCbDy7aUzMX2RUEtKwyeEP5WcioonUaGeYs94nYQQLz",
  "key33": "kVmpKabnmMMtYVfKj1eFN5kVKgVoP3VuuVa22yNcVstp33J5XbT9LCUfPRyLAb8sH6X2fEHHXw2EoCNB283WSHV"
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
