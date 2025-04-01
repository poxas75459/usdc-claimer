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
    "2dqPsG3QJbhYGrqBcYnY6dyyWKSjGEBqCQBS5qT3poGd4YE9uiR6RH47o5r66TwDMGiYJNMc9gud1MUeXsL38Pxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDjBoQWqyLKZoHV88qE8zVnZkbymEyX8NvjYDchea4WCX1Heg3X8MqZFxznfuW7ujovdASAAeAbq4JhpV7qNXC9",
  "key1": "4iNKTRsT7q1suDtfWX8M2gsnCHnCi4koTv6P3gsf4jKgwNLpsT889bwNeNKwPWfDrXvBhywiA9YFpRu6NMZmfc7F",
  "key2": "4H6UzVnYG11nXmW9FGFznBDxUWgLYxUKhJY1ZN4fhohgNW4YS7v7fCRmZHUyFfPiJ2aJ4WN6RkcJqteqbZrgVdAC",
  "key3": "UBfVNnmasTaXMdbJajfEHv8PXCHggHwmSR7KC9QUjF2a7rbTi6oFndkaB8tagVy12AQQ7xLqCT4SPLigwLQTB1T",
  "key4": "4zuTykcHd58uKG2oWGfTbLZnaAwS2zTSA4vyLPojmzMyyX8r5vokzcsCqhn6DWjpMaqmtD7wLDa9GbgWr5WR5Ed7",
  "key5": "2rNVBgGxUUWYrAnD1qtBUgamtohyAryi6UBCsEKo8ewKmV5t3vKfkjQZMPz6dpiCJ7ZmZ7gjrzGmBY83wibsQ267",
  "key6": "3KA4FS3RxC82KitqPgxqCPPR8VMpziLExVZqYwY2wipLThUGpvVG3Qdma8F2TXaKzxHiyVg9L9TKFYbJjWaF2uHj",
  "key7": "2Dtmb4zv3YAKBFUq97GWuGzc4AkNAKvsm1MgMh9kxssEQYLoe6RgMcFnPnMhRL9E6adkJKEiHiUiuCYpS3UG7Cqi",
  "key8": "58CrV4XJo5tLQtgQ88oPx8f9mHQBVt936durjWzTCHtszZCyTza4TNaGrzCGFwvhgGc15Bq7UaqJ4E3tdEJuCe9N",
  "key9": "3GJ5HLXFvDrg1LBvkkHxZ2qYvfL5uFF5kKm1y19yunqBDyMQtwgpgqvmZpupRtdE6HbtQymmU7uB1vU9xR5Sun3G",
  "key10": "4rckWKwqgrvP89MuVfvnvrvJafAGAKRaNnqgdrWicCsi2k8oGbT7HrHsKedM6uNT2DnNPp5C4oCmwDH1HutHYFiw",
  "key11": "3n3RkBHdzy2TKkHwTjZsrjv9hSQJSZezgi8sy9zQxMBPAtDQJUvt5TUszsSRR6bJGYakc6mRzH7twqpnaa2xjT8H",
  "key12": "4xjJV8HBmGNJWzjfvTCM8bdNytqh7tXMxp49qNxRf3c4XFUugU9J2jsGggutaoQZUMqRiTyUZLxeZq9H5SnzqHza",
  "key13": "3CoirYTWVPqsxRGbfVEHwYSMe48HxC7BurMSfdgXMaTtQrCNfL8FfRtTrP66bK11Monavi2mfJeVTFF4n8BNaPR5",
  "key14": "3uUcvM2QQkeSy1HK6XR5MwrkuVagqMw4PmbCx3tKM59rj3UdMebn7udxmZMZdz6CKWNdHqtnt4kU61D89TjhCPYe",
  "key15": "53LQpVhoYrMbDXsoR3JcyjbzacACDiPDVYwaHErQ4pTXS1NQE9CBYcCuWYNXc1hd2WcVv851tFAqFMhzgkkAwWKx",
  "key16": "5CCZZJ9WnHh1KALyzYjSfs4pgsSdzHKaBec57xPiLY6CZ6TuGProJ6NULwVu2Dau2XwZNL7pPKcbKkhZV9QVsAqb",
  "key17": "5s9P6HnJMCWvUvSSPChn6vZcExgHhz9HjYQdsbmsvWHYCp8FhjQFzY9799B5NVxMZ7yPAc8gvqNSBuhw2kQq7Ap3",
  "key18": "5mSwin68rAshiW15StpEiTRdK6mPN79mbHyYtJeN5fXBgzzDcZGGWR6ytPEWTZQ9b6LrrqXq31tMSCoBK6RUFs31",
  "key19": "2VuQtGkZF9zFZj8aLATULTHXMjmHYmcSdntPhZXtReQWjMsrBZgL6zBC5AuNiZC1BveepwcyGTi4uVFxzLUKooU6",
  "key20": "5wgwY28H8UiEZxiLJW8KWBqedyQ1yFD56yobmcNNea5b6jnYRDPqTE5QfBSh7Dc5PGBVDu4Z2A8Tn5oiB81461ea",
  "key21": "Vd88crtDeWhiX9FeTaGPf9S2yxFKuY8nUwhj5RGw53coZptVD5nzYVpQFf9txBzbUFRdK2KXsCburmPoL2ZuYC3",
  "key22": "5UvDjvJFG5gtC7SLif4ht6FYMZ1YD1TqMXMrSdeT4Jq9zkcL1joYJ7HoNC5VLLV1UXonbA3twpyW6tmt5nVE1gxx",
  "key23": "5mUCHZmw5TS98WxiivBNphdZZaHHQGnLWLtEAfSp3vvTkb3Jj7u69vytZPq2o8JXegEg56fT7jBsX5oBEnsQDQ7K",
  "key24": "SDjYUMgVgLFYgKvqFx2bBeUcAgc4HEFrEQ3sq2FfeSN9eVqRYDkNxbrNSk3G9HQ8Ks8zwoSq6PKzM2g4Yhq7JJJ",
  "key25": "4HYmakb1yXuiuvZcoxLTKqYou6B1XdMGHGta2R49nExjtbxiR9JbtMaHJRyATxuaNzTzSxGpFrHJszcGYH5A2agQ",
  "key26": "4bDg7dar7e8jdQLJg9Pw4rtun4FZWsWRw8tMRMxU8WoRn4qhu4meVUSTMrgQ7Vj6Uq3gNhfZrpNxNmwoLQyVtSsV"
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
