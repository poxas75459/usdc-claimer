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
    "3Ri1bD6aXyfBVW8X4gr6oRj6tZYwTfQCYC31GQmrLqXLkvtDn1vXunnngjdasNQ8JNf4rvuZWSpP3TewoRu1WKPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33WWQ35FGR5T191gGaqNqDC3CKX7P93tsThjq5fQjhzEtkSuqWKDsUKCgHpCJw4ZS6xZTn6FLE984XtF35uZxg53",
  "key1": "5NcyrPmmpT9EAMX9szfJ6tQhrwMhayi9vybbkWiu2PEPkpJ9ojoZ5MqPBM1mkAhc2j54cnTjeF8RQVkqHN6dWCqC",
  "key2": "CNqVfLCGnbxEbUCzThwkwrZw3Mkxego3aDQqe5Uef3oC9vCmnMUdCvvLcDTaviwsWwWBuAoxFQXPxTiBwzUDtmS",
  "key3": "Ag48PX3RfpNU7kpoQNtpd4oGDSXUCe5Nh813ozusKcD4uCCDj7FCfc6g2jotaPbovwoPfnJeBsLhyqxycNS5SD9",
  "key4": "2guECWZKsBMFCvjYpcXcW9uaFQkYQ9vnoGT9wFFboM4zKwGgqM6mktJEnUbgSpsgfFQ5Cy3wn3JBKFMgHWumBaTA",
  "key5": "64c1xCUfH5A63ktnBkxL35Y121LQZfxyZsXoi1VqFh2DztKQQ21fRyqtm2kvFwkEoUZV1tbRuRhFbu2VN3YRjWY7",
  "key6": "25ikWV6gb3e3deMiturESEatqhwMiSjUmrJdLtc8NxWszrjPjj2hQaZvtsDYKQzZecWTyyHemdcWD8DDPucGicq6",
  "key7": "3SRnAuCzsdEsbXewLfzF7F7bmp6Gfq8G6d5YrXFW1ynXSr5R5RZYyWiqB5x82gCJVAJfvExofiy2WwNZEAmZEGeN",
  "key8": "2Q8UT2VQnWos14eiFCRAKiqB6xZ7fJRzxA3UQbQUEDgPryh8Tn7FJ6tnx1rTwgM13uuEtYBYjFyw1et9XZGiTh2m",
  "key9": "67JkKU3UDWtGHQ5a5dzkdzZ9quYNNNCEGPPPj33uHQj9mo9bicCiaEnnpJaLTjDFBUdFWWakCgws2n4ESXzXYvTA",
  "key10": "2ZYgMmQdo5wnebtwUNiH9XWtXUHjrEEDy7sDDmAoMtCRfa1MXAP36pTgcoDdHJ69cVyBULEk7jfxVzKZZue647eH",
  "key11": "aHPKNMzKzpRp89ED35F6EGQk2foDEZd7L9EkWDahVgCDa1BCdPeYKST7aKeBQ5PLSNSDjhghBJyjuyMpTXQtsXg",
  "key12": "3hDDm15eZNjG8ee6VLS9fQXAHcWHbKLBCTDZSSdMkQTEpYwPFuAy8MqRd1sfyQbUwE9KU9q7xfVxgM7dYVXih6aw",
  "key13": "de4GSQECAK7jHERUJsJ9kiYa348QgRFb4UPmtd1SS4jfZGiqLVGJemv9Fxz6yUWWn8FTPAHqn8wCoHe8cbsCARh",
  "key14": "58cyUCqB9LcHvN1RM2ENzHkWtqnVqEa4Lsz3YFgg6xnRNpUWM2XrZ9rcDhwiCDqTgfcs4dLrvV3dXJGk7wfQ6oUz",
  "key15": "24kBFgTqf8tkUNRcDimW6xnUHLbh9oBbg22FqyRZDjVVLQ7JUyrB8nQf1nfRtDhneXZqBa3gUp86UQDTbzUA5uQJ",
  "key16": "2ACJ9tRdn2so56MFKdDAByEehgZC1zQCeTrp2i7f766D2RYXy1GwMQymLa4vi8P28mPXhTusqcEPskL5S2nsnaf1",
  "key17": "3AaMAGVGd7Rmxg4DHA7guLHELpG9y8rCN3gtHmv5BARTvfXachLGYpVTWfdJcRyQMZm7axZaSewJLv253cY41ySG",
  "key18": "5jMECukymakvbzcZ4CvvR64t8bkTxKnQ5tiaYK3S4JJRoUJP1qKjpKaWGY547WsE6C4cqQyoQgmTMMHYf41n6n1u",
  "key19": "2urY1Y4BigXZ7vQrGDnaneD9tYHTjCZswEiGt66NrkuBnpHh6dW9Vup3wXRKMoEaN7r3HMXEBs7GQ71RhMhn56E9",
  "key20": "2L7hiK3pnv8V1ieQtUZ4Kb66YxRXxTZXWP2poxa251hpYJt11uPrhyyTw3B7pK1mqGxk6S2xk89dTat7Kn7rYnEG",
  "key21": "3FVckbwqsa4riRJ1Ai3rRMYSAaPzeu6kWYADPKoegumweY8eEhaCEn8Wyxg9CaVdAGYhYAp89aCjod747dPRnGDg",
  "key22": "4HyKmRWP1uNspyP3PqNRYSqp9HBVDtMaYMJ2mavLiNMn2MdzpeqHBSFC2KCLYi7gKQmh5G9Qi7sU34M4G1idKVEv",
  "key23": "2yNTvvMJBNoPyrSuhxmaq9RMVNeDNrS6dXbFSusk19ybkddvdJjt1Ez5NDRjygJNBaRK4uQWQCCxWdmBXjg6gWKm",
  "key24": "3ct4tmsVTUquSkKBFP6yhpkZHzQx1rTwD18oywnyHTqquWG8ZoiM4vUg2iUxcJEXB5QrTRx4enb91VU6v95iyewf",
  "key25": "Wu7f8nd9qEAz43tUvV3VbiHkbAJ5j6cQW1rqb2vLKRGvs7jZ4Jieczug5ZPxByfuUkJzzWSsJuTeRYARZAPNYRT",
  "key26": "57aWd6Pii3RHp3YtmMucVpuZVfqxZdorvzg349oRNwk7ciHtoZP4B1QdTsCQb7Qsq9yD7qxfB86kk9tgqaDKMtqP"
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
