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
    "5B93PAVey3jKgi9c2rvmrsGHrhvDNYvEq2SoAvwFm9ShtPyBRPQFmWWahLVe9ZG8Vm51ggKDi7j9TxgQ8vfp8WDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fn6ZrRANab52qkPHdgaZ5mok7WmDrCWpBZwiWvjyq1K6gXdhMAHbL4R1PZGjXA15JNqBsxqixHxnKkGah79NLv8",
  "key1": "rTwuMBLd1LYKACmHT67jeBLy9fmNXw7TZurzJfrm1NhVydQuZW3p9uSfhgZU58DquC618hXPdqk86vPdo2kzxLz",
  "key2": "uEqRXhDPSfvrENeEVnu5mDVhPgv8m5TCSN3eZQYSCFpR3nKsTzPv9Jab9UgcKSDYNQGaJcUpbx9NfMoeZcWXiJM",
  "key3": "3LsimWuQJ6kytWwYD8zVchwyPGnDAvZmsfK2uFv3G1jUwo6mFz2dCVJn9uUWyvmy4gEkXL1DebiKvZ7W4EDHgxyk",
  "key4": "XQUBbJakfr211eWpQH89Hvu4eNPNkL1SJtAUNhpvXi4ngjsaqfKUSzHx1Sk7pV4xZmvEmkWRFjs6VJjJ7WkKJPK",
  "key5": "hqCCChGS1QvV1Qjs9yvHP4HMroB7mwqZr6Vukjn8bpA1tnkkVQW8qyxxKXukb98DGEhpvTTcNEvEGEfV2JDLooA",
  "key6": "5QGJiDMNkkYNpNz53UvcbtN58yn9iVKVkST7yXP1AfHonhxKCKY67SQnCqwvDtVdThyeVsXi45xrWxUbdSufypsc",
  "key7": "3PrVu4E8b4GSN8jaBYqJi9nby7txaSYCtLEY1UyTtkxAAZzWvmxzETY7KJtuABJFdRNxY3b9Z7vAe8Zxb2eXW6KS",
  "key8": "3tFT5duVKxVFYAZb84HEcKo1EBrks9hR8etLxsBtWFDr38qGsruR93p2NcecEwFnghf9UtwV1vyp3G1VguYzkBdb",
  "key9": "4qQJYsRPFKG7X8Tj5eQyRKg5qNus6Ltba9hVhxvkREqSJaqeSM6zqcEVgoB9SXpoBxNc2cKkHu7gTrhfwmHPNb47",
  "key10": "2SRbVFieYsyKCSoMfnV4RVWgYXLjLu7PwxkKmAV7X6NqWfQ7EGUgd93EcFpPtk8ZYLxwQFv1wLqyu3xrn2ErvnVY",
  "key11": "53sajRyzAEKCQWeJfNYBcZXMX91ZBzggtwcqtv9jhNT8pwUJvUoNzzihU4vH8VXR9PKyiqd94WFfCZv7PCFQjd7E",
  "key12": "46dwVYWMx6bkDQZnXzycgv4BbqqJmtHMJs2n5YVWAaZ37VSVsLQQtYWZqsaj2n16kjpBBukm66PHdnNeY6Poi8PW",
  "key13": "k2Vs1WUodjQnkqQW3n8Z2ctmSMWNWXwqKx3EREMjsmhRx5C34N6sjXnoiS1qo31anvhhZb578fUmpy35daDBKZc",
  "key14": "2WfQCW5CWc4RU4Dk8q6yCgS2XMPEKqddEaJWRCTaEhbMPREPWMqLySHnXPCAbtmCS1j3hhaXQ43KQC85f9noKmLe",
  "key15": "3iDhvs29ivpCfohcq21pRSkNW4nwq6VnTtijEyq6DyRLd7A4CyuRBjSFkfFhvr5jAsiMXofSFaKFCFwv2QQ1ZYD5",
  "key16": "2Qjb5KFYh7s3VBRgrQLX383LK4nzEUvVeFQSYwZ3pr9j7dtsuboRqypxSyHdhgUamAbFxCsowrA5o4nLFtPDXq3D",
  "key17": "RXbY1nToKz69sKUMgDhEaKewKWqn2eYUsvveqszbQC92oeeBVjyqL2uLwRDds1616XyTDr4UpGvdDhAucgoBfP2",
  "key18": "3j9uDt3nx5JrhGU9cz9ixwiSZtKtFHDgBUMnpVy2vL414vDfNMLZsSZay1moFz4n7wsnqssujgt7TDnjQQ92n2W4",
  "key19": "5m3r11gqgZnzDyyySydrwtAmu1BKXKmPGbmcZdzBgyfWmhPCZ1uks756567kxi3CXzyiC1TRcrgm4mQ8ThmDufsH",
  "key20": "3fDbCbicZymtRD9P9WbjaWz31X9MMBY5fmTWwk85TvDba1YwiK5UHr45HMj4QH1nQuh4d1SZTCMoqiGGxwMyDtyi",
  "key21": "mWLgm42d39UwQRfrM86bqvu64YFRstC6sEC7oekrtBUkzkBtRGc9Lq69uuQXKiEE9bXQsAteQYHn8gzb6it8EUE",
  "key22": "482wFdu6jjaUBZ2cBc2CP9yWeiFhYC2M3KtKdTJCJrfwj3KMrjQGpEzT7hwKWRcWTHj9L6nNbFCTMj89fzpSVo2x",
  "key23": "124BuNvvuLRBzy28zRHggCQRPBGK7NoWRfBqe9yrnCZppqbmrrwqaZDyWprKLBnm1CvAkzX8n9sw4FcNTfJ3vKNB",
  "key24": "3jyp6jsXmKMAjJSurHz1EKaGz1SLzSjWKRXwgQ7N2BBXnTiRcZ4MHmince6JQUzXxL4ZLUBkTa2i3nLxXERFRAsB",
  "key25": "3MZPfH73V1QPy6pGiN6rXc1xwqiY6LMxaAGeQL7oXwCYnRJ77k1jdVyxmbpQDVCT9PzDjfArupHRHsqZfPaFbSuz",
  "key26": "4A5dEUoLTYE8u7CcspX4HPpCtdQqiCo5yXyc6RX6yua9qUiLFVqRxcEtyNvUvCQ9NczCbwxeaTvHbERMCQLckkqx",
  "key27": "vLynNGbFkQpdroEJ5Z662B5zXMe1v8ixqu1gYQMJ1TMcsvi28pSD1DHaBzDEc9aDUUcYbCbCSeDCPt9MG1gTqUt"
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
