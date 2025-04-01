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
    "42M1pXfNW6aC3aTd76jVUo7EjxEi7X9JN4fNCf3YcismByRtdkmmYfyWDzHXDbqeqTfHQWLXCjT3moPAHZ86gDPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5TEWfWydHoy44BE55XAAqXJaQvGm88wVZKfU6d9ZP81rHVSHxXRvYbASYcckPxSLhC8RvQsxToaeu17uzKAfX1",
  "key1": "41YJULYWhwA2JSbfaasqk3Z6Acs8mY3iRDrjAEMsGLYRMuqJrerkrkzDngkCJGsQZRMF83JFfdhmAEKBvNGQKvpE",
  "key2": "2eG4p5bYU8MJ37DBvRrBtjEfeMrFki5XCMYmg9wvQnHYbbYzA2LE7BaH51cCawYabtBvBJthH32Edwpmf4Heq3s6",
  "key3": "5QDgsWTc9MWPtBUoLUBCZSwAxkJyeEcN4dkJP3yZ6gJty7QXwUkYEJ2bnUDMHiMtrHqxj5YJNTmBVhqujWMjd3YV",
  "key4": "5HAYtAMTuuAiapQwPa17M3rCwWYoUAgcsrtQDihfyTp2Zi7RQ4tRUYxazHju6YMZpbwdc1sYLojczTkNAb9ZpWdK",
  "key5": "2gPxF4cmTMAXbso8esjynAV7QWH5LDStGyMN5vsqKJ6ChbHzviSQhRwxUhbzAvmYZA6asy2vJPaScdSFdTmMthGc",
  "key6": "4hpfrtjAs4or6JV4ZBbbJ75dhbK6UApwzSWEq58iUPScAQ48CGdb3212K1ALnLjgEvyQP1gFn67XVoXLqs4ySp2b",
  "key7": "koMUssbZLo4GocPkhDQAZYbN4dw4ku2rbbpNeBYFHLRa8EdA94Aus6zLoTfncHAamzvya8ttRErvng7Vb8xp5jf",
  "key8": "L9oazM2aGVt1gFy6WsqxVM7DyrrqMotUd8hYT7U3fMtcxm45rR2Wnj3SCmhJqH73qaq21nhgmJcMDKPDwkxqoLq",
  "key9": "2n2VnUiLdFsH1r5wUFcHj5MgYD4rB15Mukrvr5Fd6j3RxphqfPZd4QUfmRSZ4QBPfQ7rAJ81s9JdVNksGfDxzGKW",
  "key10": "3k9Yb1Ndjda4esvADhR2VCbRDqXZuUUJs1CRE8pxGx2jx82TMhhAL3B5SV8vrgefMnhkTtFA6WATbFEmBSzgLVsE",
  "key11": "ojd5j69Kexd2sAn9hz9dW9WzwqHMVEpE8Vx8K8KqsMnpjcqsQd1QbHyFirWpEp4DRD3Gvz6kYnJ8H63y9YbRifZ",
  "key12": "5fG3BfGvjBUxFr7QUvuXkEyAi9ob8BpJqBPkM5hbbJHzkbtawJc3drpz7LNjXe41NcssUCcbrbvC5EzUnjRj72qD",
  "key13": "2oT3EzRhueP1UKNbaUqx53bTvCQ4KdUFRgq2pRm553aCAsegKWXvdKcVhxzxjtN4f2zZ79NxmfDJnq2JSWRoWrWs",
  "key14": "2UQPa2EesQ5CkjQLWFYrtR5rbUgNsQccovoUcvmjQ4jP9WpgazRMB7QhVEaAjdGmZ8DHy1yPJ7iMS3A2FdNZ96um",
  "key15": "5hki8tjN5wxCk1YKTdMCRTyC44Asu1SuTYMLbx8hGHQKRvmfF9Yj5WTjb119VdH4Havb55VUfLYCHRSFXp5uDnFe",
  "key16": "61F2a2WxusnFykTVZadCsP3NWfu49EA8MmqgADP4Yio9Xhskk4PX7j1X27eFf76yg8tVqRDCb8xeBGeBTeujVLa5",
  "key17": "2TEg6i7NKRT2rEunwhiWSY6HGWbJoSiYJLEc22wAh6Zf6jTb16UG4JCbXz1zHNYPanP87HMXJZzFc9mSMfvrGPVb",
  "key18": "JmQyx419YjDtaNVqh7RWGgJhiq6GexGKJVHPv61JWGTsuWsSw74xGjzt7rhqjs3JfQbKfW9ZzvyP5L9iGAUo5ya",
  "key19": "5HkSVf7Sm1UM4bPqhfgZNdiEG2D3LphLzm6TipUCHMoWgFd6Sa59Kn729KGPv1gG9Smnemk2sKTwK75h6cekWuDQ",
  "key20": "4GjMga3GDLXyHhND5ZSMXDmzQKbYkGDm5pdCaEMeTMHMNbgxQLz9vED4PkfebVt9V7c41nKFaTwyqrwbvJrjLKWH",
  "key21": "33bq7qQqWU4rdXLy8DNGEeLXPjhX88djqE6QWM3KWgEL2vrQvWDn193aNNG5sugJUte5MZSvLrsqRmvRLzLvLUBs",
  "key22": "5VnrHN8ER5hDuYDFjhPkYR9aPyVjjq1xCVho25FcPEj3u4RbuQuqVU7Gp4Qua7L7Lm3xMWkvyVwCqHPkNHbmVhFj",
  "key23": "4M5xLV3KLikYLwi4imqse3adA5SwZ56UTbS58hKpJJ2rJq95ZKkMaGyjS8stD3uoFZNG2Exgd9V61J11aNq5FxV6",
  "key24": "4qd6qv3fUVnqN5iCazpbwfCZgN553mo4d2JAxqSdypr8DoVriD4gGVq7RTmhcPfiFKX8DAi5sSGtXibRvNkT83xK"
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
