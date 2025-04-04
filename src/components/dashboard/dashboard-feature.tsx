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
    "5tCgM42yHtTny5fgqhsC21ZPjzSxzHNx78EBBX8JvvHDnE35mNDjwK1bxC7S3ythpNhjBFe4FZoqe2TtVCHM4NKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qk88zKpp9Nwj6r8kNqpJiRryiTRy6CgskNXprSiEHYTk1k3Ex9j4gJ4iyYnutvEnSpsEqZLs1MGH3asSaEVb7oP",
  "key1": "5JrKPDbveSDNHCMyciccspemXQXaAjtLNSZS2TJUu7T26EqYsRAW66pQn2BkJ2nmggeUSAne6c5ZsYfkNX4tE23Q",
  "key2": "2KLZVGJNmxah7BjWQKGXJFyB4XprEWGMWMLF5RN2MaAFmgtAEpbyYYCFin3WhG5gX8BQbptM6g2LCwSNK24Zpkpm",
  "key3": "5dtnzqszzniWDo581XmmnnTZYGjNwTMmgp8Jr4HJ1nfnZdQYRE4oD5GroAo5Uq13of23E5DgjbooT2Rr8qvpykWo",
  "key4": "2PXDfE64jX8gwA5M3LS1edZcA22JdyYxzJmnPZhQGkLT1faYToDYACNSfQFUzpHB578VzrHLX2CHfWsncNed2ZRv",
  "key5": "3pdivXhe7hnsE93RwoaTE2n7wFtD2acz2LQUQeuTPtqHeE7KCiUcVwcwgC162jrdky4vpd6h4vZdzbABKgVGCQhg",
  "key6": "4PvnZTTjJKokrJvbS2uutadQxKsKAsAB4HCeiXdB2zseqXwXdFYWLTXdtHcDsFaS26BApE7fFhkdbm5cMoaJoULt",
  "key7": "gJ47ervKvQVFbaRqEtcmM619F55ywxjbfxzjUH48ChsfSM8wwZG6u1KKMEnZ6PkodyY7JrQLXfnTrddha6UAYpD",
  "key8": "4xbck4V5txNj8MkBfqktv5QEHcwvh7Wq1Qds25X6aXZFpPrmaJuk7e56TXwrGoTMDnABb2R6uKwiuKBcRpUVk1JV",
  "key9": "21zwUdF62RecfvAQwa9Ncw3aLFwFC3M9PgLEtA2Du4YSVnghtJpdyZrp7EWYutRisfSu9aBHwU4sY6Tbe3pqNmNW",
  "key10": "CoSYPwWJpYbV53qtmg5WEUE79o3iJXuiZm4kKnUgqw1viuVEk9JVqwC1ouYsUxbsfpTSq6YQvx95DBd2Sa8FH3q",
  "key11": "5QsJn9kaaSYoeRHz2UvmnGd3HeKcDFLpdmwgxzsYSREoEwkGTRbKbmY49XrjiAn7e4Fpjad356ySmiqXU1cwvzu3",
  "key12": "NHeD7v8hGfxyzGwoNepQPNYZU5eLtjz2pTfaYV6ptjXWNyf32RUwEsGKsaMGUpiB3dsAdNkRP2MDwcvoJbtiXJv",
  "key13": "5hHkyt8vCPmQ3pKgsgrsKdVVRZNQdjELcmpXjZSB5riRY18pr3r7eXt5iFYEroVqkjAsS53bGbfZiAF9ewikyTY3",
  "key14": "3cRZHg7cosQVV7pfSjVWz2DasfikcsHEQ7PVn4X8xbSfy8q5oBBC5ppYeiNvi3958jh8xs8FWPCdJMJvDqGmVYhG",
  "key15": "SJPUJGLvx3cZyn1U5SLJK167GPmtppmMn4UiHBxvXFG4tyA3TU29sFwm8HHW8QYugFoELQpWm2Rrd7SRM2ES5x4",
  "key16": "5PorfnfjpxzVGtvrxLwoVjtQ5bF3P2hoJYxrq7rTK9ZwX74stGofMuu4hLpmWhHnjuy5jys6PQN4odCDmSSaL3v5",
  "key17": "KofPGu6HXHa2z7hqKp4EsVXbkPF9fWsLpMMCAiRAkdxiRDM8um3VdYijfxAqh8jfMzKdTrowhMrouTMRQ1JdPfd",
  "key18": "3YWasLSQXoR2NSkefQtfDwzN1n2yZgG2sU6xmJySGBwZFLZTCDhJNJ5uYFQsWz88BTYHunSQKDSMWWGb6EyAYVzJ",
  "key19": "qBpeAyuXBM6t8jP3hszdcrB5ZTomkXPtRYb9fb6ifgdXPR3T1hCACpGuny8mdV7cjdVdgMaHmYNcn5nSgNiQJxy",
  "key20": "4vtsREQaHiQzBg1z9qn9zWtPHC9X6T3Wv2zTPjYCs44pC5vC1KxqZh7hR6HBEiQCZHRKTgfWrA2iDgA5D7cck2ko",
  "key21": "5JzrzjzfPxznfMMU8HvbZ7hFSJetvjbQjg63eeGkCtJ9njMPth4viceQ2pqFY5y9ztvsEyYgTKu8oCpUqiVC2A6B",
  "key22": "2xAeFpUJKAFHjzWwS8cya4nMuGM2b9K3vU9grxf2NKbTcuVQQAEZ6j11ZVxdU1bskcWc7XgRmGidjai6Ph7WfoSX",
  "key23": "5D9jDSdBj1XfZtqsELPwa6b6bwvwGnWXVU6MXmqY4mBCodwXxhsSfBZnzGx5x6WVP6DR9qWueDGGPi3rEpcGzT6E",
  "key24": "4DxvHV2hCob1GpRTB8212GFMxB48regtTWfQcrQw6LEbEq2B2ADyd6TWz4cegE7GGBzCqZEPyoFJZEKFWh8raej4",
  "key25": "45rcXpQRWB4zjFzKrt6roWxAGwFWy8MxHTmxpSr6sDZyvPXJn3GmBFSbLvfGj6hjAFcEmrmMo62SvkkKYGMXdtXc",
  "key26": "3e5ukcm2whmSvjZ3s7YiR6MjkpQtbvEMLj2PmP2G6V9z8YyCKDb4ATm6g7hMBqcoV7pEbE494ztoFViUATRxu8ZH",
  "key27": "5zmB4x93DioAYJ4HgbArx631rSKEdMH1tkjpQTgfNv9SoGHGHs74J7zYiZrpPLAW9m2kVcCaxudHq9tZVbRQJveC",
  "key28": "2TudDcSXTq27L74KCNWmwyWX7XXVREbPLxTz6sQwuLq2SwwBYYM3mNZGSBjGR7DFLZzYtt4ourR7mTrb5UbvfXW1"
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
