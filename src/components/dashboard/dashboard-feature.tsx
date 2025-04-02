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
    "3hpNXBWLCRadAYqoG9Vmd9MNZbf9CEFLXG9ppry9vGr6BYHjaRev7HroNHS8WiCpxFSuQcVNi8ezRXa4CnPQLNzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDJdGo7wWZuEi5gE92aaC9J5B6KXEesikNMZCoUeG5qs6cGu5sN5hwC6Gy8qV8bzuuzXfh8U1gYcbwcPkBchzbA",
  "key1": "4T3211RRMJC3WBcKirAKAgtYC6nymFG4inyGmBay7ZW2ujoFuFA2cBQZgpfd6w2maDyVqtbGxa8NLDVkoJat37c5",
  "key2": "3hkW5pigtpDtokbDYfDnt7Y8KYxbmEZTgsVMKu7UG9ZqZimDaPZYaXQUSVGaeVcxySxE3fwWUyAAvoDrEzUXAvxj",
  "key3": "64q9pGiPuJjD6PYPDqFfkkSxGoETk3BD1GbMFxv9jd75TDpZ4PbgGGMJBUtsW2XmvTZ2aB8qcfMgtaAqGu4ivf44",
  "key4": "Q1xBJLhN2JaYfQM847oEE81y4LE2BVqmRHdGaBSKXAD7uwHuzTizvWAHjcMgn7AqRSsvx6mZhJxgHGc2P4aYy2k",
  "key5": "4ACXJKygm7JMW9rS8Lv1GhVWbCssWQiytQMZEug8sbb1YSkgxWZbgezZeZfD4jgbMkhpj8M2r1SPqyoZSbwugmiL",
  "key6": "2tx8i7PbJ6Upmdw7TpMB9CA6UvewdLqkrN7SAM5chgu3e2eFUNM9xgTVhrKP58rtDkNCmwaXb7PzhGT9BVyijiEq",
  "key7": "26TEbixEc7k7U9SCxx3ooTMPMLV4w8ZMfyYHD3yMhV5FDeXDiDjCV9ENz6CdF4cG1zi9gEyFBcTGLHT7ASUM1P73",
  "key8": "4iFsto9KhaGAwg6JFWTeEWv6tFrf5VRpyijJpgv2hLY6WsfoeSWGyDwHuGiCyd8nCVaB9zLDgdKAmMyfeEvQCBsT",
  "key9": "5t6DmJMFgkugYCeX448G3RaBTATV2RymD2r9oaaaMDBFWiYHks53DXRS29oewiZTcYfnNBqFh1C1SniQgYiTBaWA",
  "key10": "4Fud8Rwz8Zh8jb6dpXfpRDmVjrZee9oK8uzPaApibzSUahiBYpQvgA1SqkvnEGfC2md9Z5XhXCyRYsJRYno8U4SH",
  "key11": "2jx5NW3BnuiRjPPrWGtnXTtzZ9LXaz2AM1LAknFycC8KNgDMZNK3zhq1jWia76dq9kXtMAU7MftCFKuHYEzXVWZH",
  "key12": "ybQbJc1iGr9R8JupETud8PSgRCv6cqYHQSJQPPZxJVPN97shYuA8PvjXH9EBaVMhrtZKWHCsDTJsmWRZcvN1E6h",
  "key13": "g1rC4dfm76QQ8gf7qdWbHwRPZr5uGJrnCAb3o62ofUumU3kcAjKwFUaWtnUbnFTW31xtaoTkyJt5APh3UGqCq5K",
  "key14": "61rP6PQAPanTXDn6u7BaHb4kK4JrgtVFFwbBQ32qwRayVJMdkV4bvZv6Nkx1sYCZYk5x8rSN5ryrgCUFb5oftgr6",
  "key15": "y7hNNzPUE5pW9eCVZAWDXNZWe9vE8HyRLDSNUFMSJZjPLfhznsrjFff6JwHsVYQEwNuDA3nnrGiMdiHrRdkVoVQ",
  "key16": "2Q8BupBfeQBZ2sM9U6GmTotYm9ue6hyXcZjFmP8EkEtfWxhJh4xCBJU2gDUfqcPMVhTqkL4ZC9eoTqFXxWYGGG3H",
  "key17": "3mESZVjDJxkbC2LfdTMxjWJo3QDB4iZzsdTQdHx7yUMGMuJdFRhMKySz3XGCFfKJqkJ8GkWWQHeRY9dDBDShhpQ6",
  "key18": "5KrhBpbM2LfQ1wj4rmS7HRjAMm1N9vnud5h69Mo47jL3tH67QkLCx5KVq6ehEmxQ145WmnVUBKT7eonR9xbKtYr2",
  "key19": "5U4taAYYzimaVHgStJCd3FGm3SV9eV4ucc9AksJyMxfYhPn6sgcVCzX5f2nukn3WknxaMYWG1vBgQVYmSrVKA74f",
  "key20": "5uscUUwiJFxSjWicA4xUC5PGm3DEZY5UyQVSXdq1tFDz6wkwevY3UBizUAYisg5LJ7T1uJYbmWRKZb98iCorZcpK",
  "key21": "64gZPsDEyNjrC5hMJcbkcbDgC1ESXa7djYJUfe61FPD4QaHY7XWwEYV8HUcWx5tE9QGR2P9meJrLRncMixA6d6q4",
  "key22": "2tkwLu6Nqmrr4nLdFrSuY48HWU6i5zg5ZtfKSjzg1iWaQDDUQJrpzY8fP8oERP4LQCFDEH68UDDewkHxXFDCHg74",
  "key23": "45K99Roww6vdDhq2HDzuZuv3woUHz8mFnQDEvUTPji65mesiG8XjdePM2TWz4qujzYovCJE539Tje8woc6EWRtKa",
  "key24": "v4u9ugU9MsDUF16UkZxFfKNEkmoCVawZ9dCq7XyVghQAYLX9TRzJgktazNNHbXimbkUcwUpKiX3jwkkFG7VdNiG",
  "key25": "2XNm1JH1Qm3qfyw8JgVAaeP2phJEpHJLYQMQK2MaBi4dQuLb9Fv6Y8z69badT9idrsEW6PS32aNFGkV8CgmehTRv",
  "key26": "59k1P3MfYgY6Z3eMYjA3eCveYEHm6d2GFuqKQ3dybe3mEsHkxhMrqfydAUj1UbQQHDDEW3Xe67rbnKzX5WtHwR4c",
  "key27": "QCjC9gVEyjMuwsevPgZGzQFrDTMSk351VhGM7EkGbdsXZN9Txfq6Z59YzNBornYp46tuppXsBBekiwPJpxE5iqu"
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
