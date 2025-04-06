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
    "5GgXUNu4QwpAsHtkAfzHQmNKHhWPCvbj25sa2tVNCfyxdNnUpGBKXYhZNT8X1At1bSWEvsYbm2S3S4WrnVcXYLQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKYqAmteaS5PKLsKPvJ7pzWqqMfd5rV6nG9zfguWvsRVMU7ZJCaxnSP7bMrPogJ7pwBr3aFHwpcMxdN9hPRtNZh",
  "key1": "wp2gEQwrTdeeQvVB3LPZKqwn8KMTucPX8Uzjw1HhZo6E5f15KRK65ANBPfzASwnqDgru9Tn6KVtyS4qmbfuXXeY",
  "key2": "2NasfzMCF6aFRtUKhAVCWaEQ9JNUAik4cg24XsgTW4EW9decZsrLTwEjkUSF9VkQRQKYj6xQCPzc3QYJALNGmudJ",
  "key3": "3hfRdf3WP6zLc2i9tRU7dp6YN3vaGtFHB3iFHMyXnsLMRY3HQ6YtE55s9uUWewhutSrBLM4jYQfYYgP6tRnxQGgi",
  "key4": "3xHamAtdWnFV3nQQrMqDhMhtuY5ytizFZJdWZYWJ3v5kUVhoXRscywLfPdvyY9vdkgR47RXkPwkFbNUYJy4EgcQJ",
  "key5": "3fm6oN5pVniaXiPgMow9ZjQ7G4WpJMD8q4tZPHavTMtyZ9eGjbyPay8eBK7Xithqcr2p8QQwXYSKfEg9pyNpysE7",
  "key6": "2qE4QF9JSie575nGpFo1mL61mLbWnyCfEWLpLr8y8WgNJrL4x1xnXXQZgCmVycHJEEJGvkHm9ivsjmZ7wqx9eC8C",
  "key7": "36EP7oGLVpVhL9jZhZnXpJ6HAV4oRmy4f5zaf9Fdho79hdyv4v3CwRGN9Xwooot61eixPPzMjctjCki7nQNWLffu",
  "key8": "F1qsqogaZWrCGQf7YKBeNyZcRVZGnvL8Ci6r5bawVAdRRpY8Z1T8gjdbhyh9xNa78T4exNV3twAYZWdmCzhtA87",
  "key9": "2EjEfVDDaxbr5nJHbyL8DeHiwiLStnSWpDJ9krq4H5gKhRXv3f5gQ6mAvfaVvQ861uD2nSStvfhnoP7kmRUMuZJe",
  "key10": "4oMypMiXPSpMgKvB7dJLoABnhsCYZUAnvKEjoVvCBAJJc8UH5gq7Cez8wGvk1RMngoS5Ytm98fzWichCwrJvcUEQ",
  "key11": "9FktUu8JZzgCzFMqwv2wAAasLdB4XfrjGZaWvWfW49XnMC68Ny5dkfkbzbMcsHVUEuWEMwoxaoZauJeqxJEw9BM",
  "key12": "3bzptvtr5Dqwof1b1JzLKxMs9CyMNDQcL6bnYLCsyxFwUq7GdUyx6o4km5z17LHypFyKjX76Ngg813gphoajhyn2",
  "key13": "2EbhzGMgnZ8Q1CU2vGweRzrwhqdAppREBRVbLCyZNYNSm436mjGtj6u4fpbuEz2s37xvJc59dxnc2nZuE6yEVjYV",
  "key14": "XduXqmcz8q6nJYkLqG4m2RGNbLB6C5Wm6o4JaNSFrr3BEjBsioDyvg59DvftNVXowtrQQddaTM4jFsMzE23tmXT",
  "key15": "33HqNhemMnemjni8i3gWYKBa5s1ZhM3iKoonzMMeMHyvnKT56ufr1XL1e7jbHu2zpdbDrJYkGD5b4vDqFtdUq1nv",
  "key16": "4NwrK9f3cKk1owoGF5zVBngWF7AT2JBb9SvL1fgp4skq3ChnQ3Q5kbX2exVLwWsMV83AHcvcw2t8gbotVi8uha5i",
  "key17": "3wuaoDzP1ZBGLzkSdJDznCQVFLaSRPCo8sZumFLkTNA6D1rMxA4WJgavujYbie2rP4ChYBwXeUCgossrSTcTBKSU",
  "key18": "dUp89aGda78jSR1td5edPrxDVdbs3HGiuXKXWMDNNMhp91GywHeaJoptQMDG9XwefDF6QigMZ1ExfhbwoXtgUiG",
  "key19": "4EULRXdVFvHP4W6zMnS1XHCDehwcxqrQe9ny7pwijxD2uSMVXDHxyvpoUZnwk41damCnzdyxGBqU5uCuh18QaUcg",
  "key20": "3PLNy3LUqGWEaDCkUXpqFqSrkBPFX522PZqdo9X8AG4jAmQFhAcMdCYWbcUTbkML4GLuQ91w9JEqvxt8qEEXyukM",
  "key21": "35GzLPJYahdcUbzzbN7zMKH2pKTsrcQ35g42vnsqAoqSMapTvEd1qKp4bZcnZFyb6QJyWuyWdsQcjx7V2Uq8VRG5",
  "key22": "3SnNV6yYqPxfB8i7RTTEk743xPEijKjA96kXM8NuETa3FxktZ2BcyugS2KJvAzHFx7DtVwUQfMM6dvhbRXfaMgCe",
  "key23": "3kikD59SS2qm4Uj5m94K97LdWViZLw7j7u3wWejoZZs3QkgKxdLLpKsTSkpuR6hHRNuNXzrkWNxkeZJCxZKcwKja",
  "key24": "5B9xkMooTGtE98jrhL9b8x1TEHagvZi13EkZV8df7ViwHBT3K7Mdx3QNmi2VB6gR8WWUWLjKxwH41z7hfPu6Rh3T",
  "key25": "5qVPs1GjjJA7HqJW8jGWS53qSnQQsXC4msf25XFWEFdx3f2EstUqnE3gYyHJMcvzHZtstcAD94MKwre4eBw2RSbA",
  "key26": "3eEuuSkUfZcmTRAoksZc2Ry8Yo9JUKbh4LTYTTqLNT5GH1RWz7EMkZTZMkBnT8m1cAkyRWA5zijNGpUGkLNbqD4k",
  "key27": "4cHcUaBY6gGGV8jdkYsY63xNz7cXG2BVPDKenGny9UvaXsnwg5LTsFudZ9cLicU86nSKFMRUYYBAHdsF7BAx6uxN",
  "key28": "3aA8LxNyGSDovPToJ671riZSc8XVfue5eMyQ2HwxP8TfUh1QUsBeH4bqAztRi5dEGuTNBcBsuKCCKfLz3m2W87nW",
  "key29": "7AWFPBF8x25RxiK8pZHd44JfNjdvVtPUXw24SNy6jBTmqJtQm9EhdRJS9CFQBPsyJpVZMww55m31Lcas2DmbpTm",
  "key30": "zykY7unYuRs6J5Vx64oVYurjD9hAnyz6Bf9a9FdV71vUHzzLdUEVLYmHxo6oKwFXaG8pVyBXv8MkFg6qJfDphn3",
  "key31": "3DU8mdb5FSjKhq81DNkvFghEM9vNrALq412bUZdDRZjPRxeuYtKNnWzhQgf8dKQTuRyAFJpN8TAfsY1fS6bkEVRV"
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
