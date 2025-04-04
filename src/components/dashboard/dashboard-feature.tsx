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
    "5g2pboM6dsmofMydeh3dcjNKdKorLGHrGeUDqW9saejufS2R4LUHdk3hXmgFA1mLj9wzMuQ3FyMD956fnPFRrdTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KkXuUqtorhX6dkjvUQrE1Ee2yVKDGmtAUPDEDnVHFqFPpbmUrZ49uwS8QSA8gWecQRgztx8VXgYC9SCNVwUB4TP",
  "key1": "5AXR9Cyd19nbVkQrSQkkCgFdEhPaga4hrvsreGEwCJcHfuAEnQ2Rd2UL9jBz1jmhYWervTo3sfD86yJQUaKy6gsU",
  "key2": "48bjUjUptabzMkr5xuUwv4J1Db7jQMfnrhwXbxWC3s5noucxSQxRpDshyYTqL3vjCQfdeEMrVqdrwgxwDfpG4xKZ",
  "key3": "4pHMGFUTYn9LHH24UsXB2zJsy1GDnSGZATSgmiWmupQKCQqWYSjUtwchedqZvdQicktUPEefnzW2JnpdtqEjLwmk",
  "key4": "4McAjyxFD9KDnKoA2bzgSamVpMYE9JFPX1MiM9raZvG4E6z3HNby5hCtsnEEWZcWyYM6cM3L2E1W31pdsjewwmnE",
  "key5": "2p9NBkN4ZrFsu6QR82qQGttZJpZ9hmDQzKUhb9tQM7p7YVB9n5JJESsyW8C6dZFhCh8YBB6ytfinviWufAZa2XkR",
  "key6": "4G7MZAEYL591Ce9DPN5oGohCppMT7pGdBJoiYma7gXZ86So1o4kqvW1uXiouXcxrcTWKhQ3m751bBeE4FJJLTLYe",
  "key7": "2eVEjZQwJZirY5xB7A86oWcNdFt6smZPEKiK1dQZ9hi5SQfZeG3eXoUDfKeCBDPvLzSF8JntiUbCUNQg6r5pTP4v",
  "key8": "673iRB8pBcv5zDQLfLjeQme2TkrEWTkFD5ro2NYP8xTt9Zu7wjSsMFJC86uHNbSZXimnYgfwnknZYsVzym42g9z",
  "key9": "27SvcNu5CtufawU2MVHxNHzQaCzq1y4gdts1de5ho2L6PgteJsQPf39e6mzZ81u6RvFS38YuUBXXnduX7kpHsPN7",
  "key10": "5V1MhaNYaNcKbHpw7vevcQbd3E4r6rEXmZUThWiPuzE4wasL84ZdYmZcuBauwCmtCdhQr9Mdb6U9tnPan2MHmau7",
  "key11": "5CRs9LEvf8ujQDhqaesN4E3tbrbVtTN1tmpQ9FVtBwqLQhT9bD4X1ZgTMcuK4SR5xWfzUQH9M1AKnYSMCPUsPgcQ",
  "key12": "4oDH6rBdVGEHMXhKN8m9YtnzHToWNXSTBfuLgxpMtWFCeU3wUaqUDANKn61JDrEMB82BXBsGeiSv1wNt25WrzdBe",
  "key13": "58etSJsFPEyyHQBFwThYxY8uUkSVCcQE3tsd6aXUN1x7QgFL4kWsZ7AXH4RVUKJJwjnmdnS2NagZ2hyXHXDbhDTU",
  "key14": "2Hi6Z8j18EWHtVg3QQNz7p6J4uLGaMKzccgK3cubkbhsSyMWKZDmezKHisdSd6Nfsuu1gNiidPhywG4tVhUNzyR3",
  "key15": "3s8sdE6BCrV21jP8SF9w8fLNqA3vZJ4SQS59tE3iTjtxMMDnWSZzamD3i6DjxKTxJMrMTwziFY98LvqjzGkT3pjG",
  "key16": "4KqgPvfEF9gPJSfNRCNSmCLamNsNrxqzhH1eXnUJ927z4HZkMAfmTJbLapbgGyqZkxsJ34cQz7xASUYP6Hg5WEjz",
  "key17": "56BaFxMcfGfBTNT1e2o9er8KpfKmJdwZKHNBLSebbRhSV8SMjKSyZej6dRSRKUjzJKxxuWWwJ1FSjECRp5Rrn2RZ",
  "key18": "4HYb2fUf9bKvhQSN9s8Zf5J4sfd97KPzSRRpzixMcWGcP25ovEAfGTfwJ5xqRbfkrmuZvbhHH1vMxq2Z7m2CMaiM",
  "key19": "3Ve5wUZfEuttzwWVE8jxT9qE3ma71k5uVRcANpJhTzGHizPuqaqgcpJTJZJUTxC3skQrw4twjNBQRV4P3p3F7bti",
  "key20": "3d7oDyofFKrdTKNLL5zUgoZsdcrSXUrtyxF6wPcbta84dTWEU1N4iC59jmSXAoy6gmFotjhnrg1VpDabBA9pbVGk",
  "key21": "2rgwVPHL3a4MoHrjmwN9SmpMwpTiWvGETWygGiDojADMCdCkK6TSqtuoZaVhXjs65N38c1wPpmwRCyFmhS6DEakD",
  "key22": "3KA3uqeox1RtV1A1Kt8mUAsYNzqS2ezCgWKVRAUAfspym93qYxPV49FXcLwScoCJQTQvYQWYJ8zi86UDMB4ZNSEi",
  "key23": "52WJPuSjBeA71QJDDV8EV3qrLw12zhVELqwPgX84NjkD5GyYG5BL8Zcr4H7WCb5KmcovhRxuHW8k4ELinqM13jVE",
  "key24": "5eqeBSnZ6fQDdbWLnXjAhpUrgPstpQ8LZTyVdTdoMTf9neP4v7juN1bzDfs1nvGVQ9dd6t7iwCp7Nx6e28sU5sBL",
  "key25": "2rN6yKziU5GGWuwxQBmUAU1zWx1YxeHdD2ctYCCrVQgBRichkeuubaZimWnbJ1kEnaE8YFdJeytfCSfe4qxZiDZN"
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
