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
    "3xoHDK5V2MGyvx13khJ5qAdc8Cg3iTD1iiCKEj3jUaf6Dkz4G3miuM59X2AsocDfaUP18DaTCzU3L6Mhp5RVV1Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8sNZPVmoeWoUj5KrULv1CVNL7Pjo1dZEf8WZMsrsmhHJmQRCqjq1gZYMrAPqciEuBci4HyAA9AnfT8abNtwckf",
  "key1": "5Vz3QAUznReiw5tWgVJfFJKwFqtLF2EaYEdr8JyPeyNY4182irkW3uyJ2NUGsXR4qQMSdgmEMBnVMmmegKJzHzCA",
  "key2": "ouLzLrAbj36ZB19d9rMpqp2wd7uDNWuVP92XRHZH3AMhKGyMgquwPx8yJyP8Je9SU6Jv2KwFvw1FYwvbtqvAeLp",
  "key3": "5ivzQDrh9hxx9rhFSR1wyypj1vVmtPUKP6nuBpNNr3EnFFnXwwqHQLX7ozL6nCHDeGzMVryuLDMoDSSijApy1zq4",
  "key4": "38aKo8ZSDGFtyST8vtvGLqxogkvySvjphx2e7VktYuDar5PodS1bPmtjBeSECEP5YjqsndJhrPQ8txKsVYR4j4vA",
  "key5": "4CdRkmkxPGFz8Luf3CURLfPvmSNKhVkXEH1rCmUawDcoPhQYZsEi97KeH5UYLLwqkpD133LjA9ds9SewpxSvSCvh",
  "key6": "3RKzJQaz7jgyncMw5BKACM2CUCAmAJzAxb7qZrgc4HygAF8tn81KDSyMndfFeikJSSpDvTeGg33uzzqLfjzgi3qj",
  "key7": "5BLmvgaHSc6SLLeKWNCe2XMHpN5AfMhVhxaLc8Y5WjTHpAyrrKJTspL3q7GqBuHrxggPqSnyAcp29mRvjRcuaxgN",
  "key8": "4v7izVho9K6ew3bmZqxSXxZoVhzGfCMiqFYKvmatuyQ8AishvGeTKkPReU4q7VxjXuZswRz46FvDDNr18kEUrog6",
  "key9": "fF2xCFNMGYUJ6sHqk6XphYuGh44T5K9WLY95KUjTgKKpnjjEuATwZuh8CrE2peVdP7YXcd4kngZoRSAK5TvEiEf",
  "key10": "skHNWaFPHdPQzoFFcxRUnuC5k3qyMGtQjUo17khvAqhCStWHiHpytGLBo3khRxorymJaXLjdKPopDcwwxQr4J2u",
  "key11": "7nrFGfwqy4PnaGhcf1Yy1zg4YS4hNaAgYWLdmqfuChLVfJ7j1YSatWp7BK8i6RsL6Qfj2piiGp4GFmS9SHvfndu",
  "key12": "3xTVcup3XQapGjqduEdm1cKjF8w1peJS85wYD4jw7KCRtAmUx9pcvDt2pkGh41J3zxXKpbLVznvU19ptv9DQ3BQ2",
  "key13": "36Eq9CEJKDGNhxX8FtjdReS7Zaaqka9ZGCmCEG7moMADwHEWYoJ29fBC5Nw3Er8J47oG7WV3p46HtJguomM4ieca",
  "key14": "G9w7h2tvGsUmsvPPD43DDiv8sSDZ3MWq56PPKC2QkqVQPg67kbsPeSXN13dmby8KjVFNjWaDMvC5RsMEVQJb4Qj",
  "key15": "2mk8zbDoZL6ttiYmoPwcg5Q6w3tfwM2qmdTftZAWwsggpxySAAaUkyirPDPEWLMCQqK56bQXzfqRfB6pmbsagnLi",
  "key16": "4pkBjzenuLFmip6FKmSRvWjLKxF7EPuSKimTEYv5eguDDQuNtZzwYR1ekDkPxQ22FpymGX1roZSuWDCnkcM2FLqg",
  "key17": "jG6nrAUhgVg7APrTSW5giyPFfYJkRPyoU2qJHWYqhk4QLXn7rNai5EtXyt4aLSFYgPRdjfmq4x1Wr2tQK7Xmbfo",
  "key18": "5MfBMwZUsuBfvpfH7nByhANeqdoPtk65E6c2EU8jzpCuDtqLhK9sXVi4pFa1ms7K7NXqXbXnUiXzPVjuCwzNd4TT",
  "key19": "5MwWB2PdqAGCtSUdyShcpsz5iGBkPiSFNztj8EkR5dvyc5UgyL9yiE1gEYpeHyJdPYgyNYfagoR8D6Wygr32nw9P",
  "key20": "2cuy4ymPoyMfYkte9EodzmXNt36EtohGj9WKA2B7p1e95DpdhGLCTRoUQ5oPNsgToAGeszrG5bYN5f9u4pW9ZuEb",
  "key21": "4avvD934X8DUx5GR6VXE8exoawxJcaJ8PMjPFyNSnzKgvRwFpV9TNzVNMXLKnw4qipUa5k4zGArAvniQs5nVkrZy",
  "key22": "37CyDv7HkkVnQAbqtfyENJtgcDvX3qH7dvttzhP8ccJxEXpnhtypuzoXtNsCTqrGZBnmF9ko8RTriNhLqc3XdxZ2",
  "key23": "5EouFCvLJKL9eDoBERZp6Hm2wzaFADQF8TDzfAN4SZRx99srwAd4urFQGo8917qpHECr5cTqQGaruiDRsEtjMcKh",
  "key24": "2fLAQoWYEdTohrq5ZkiaPomggpKZH8NRDdHJVLiWoDQUSuhXHN9vAhNaBeTiXvsP61BS4btPwUderYxdgyFRBvFm",
  "key25": "2FQZ4DULTwMJH5nvW8YcpK98LaEGJ3EfZ1pFGXxVj8Cw8EPdq9VLrG8TuqRHzpUqGVorTWWhLJRWTXV4ng2knm7X",
  "key26": "4xetBSq91rELdkZv5B9QKFUi9k5JUMJmZy5Gj1J8r1Hbbko8sgD7RLfxcaxa5QEymLxhkjnPQyuEnp7eVKm9WKVn",
  "key27": "3MK29N6scBHQZKMNs7mHhfzuEA7d1QLni5DWD7AJuqpjpoLXY1oi5jtvgPhCH2Czg3GJmS4fV6LcevZ8EnY749VC",
  "key28": "5ZhSDgpWhdXS8z15tb75hoNX1NcSDgqDSiZxuo3rCXCzn2EK9goTd7Qb1VKDhZpQ2xm4KDmnGQXfZVgCVjuzATzJ",
  "key29": "5LCtXtNpAAdtTRruyZc965RzbHViuzfpjUSa2yNJL6Lgq8CJYVmKgSAyPRWj7XWvxMsHygcpeiVTAtgHDSmNH3AN",
  "key30": "5RUwiqxipwim2mq637FeNHM8U36ExmqUKhmgaouBvBhd6oxx6Nh2zSHxMSYLAHtA5G757ZLSesMbLMgQg9Cruiqm"
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
