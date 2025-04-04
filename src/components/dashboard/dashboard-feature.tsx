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
    "5Y9dHgDA527sUcgvVR7qtNAnKA4fQ2ERzFtFzCXvrm6BVhhg71CKsW3DEsJhS4xmyiFLyrHfGm7z1NTmWZjN7MYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptyzDEPDKwgGzMqqoApfCuZAvVGyxT4xLBk5NfccqWeYjx2vDRRbAdQtamh3gBgQZTztRJ71f5grmSWgLrnNyrY",
  "key1": "5jVgb6yjgCLGibw2NyLdQMfSyhAcVC4Xpaf95wX1i4NDmJnvKFYaHeEGTYXkfWWyxMwcYvb8ogfK1UniQcUAN2fF",
  "key2": "52jBeZ4vtDsEJ3RCjGsJmw1TJTa6QSm3d8jpxWjhbkSvhKzyt6A3qXH7e2oXvJ3KFeE9XEnRGXoziewztTKESemF",
  "key3": "4RAAsuvNcdCXFLvFmsLYgWFPgi6d9PJDrwjxBCG9ZPUUkurgAzbsjeF49iFTgVBXo3Wop87VFwwaAnLCYQd5QXp7",
  "key4": "5XrLj1jfGq4uXpXHHF9Z5z76dueWMx5Xjhuj67t8QHhiniRLGZ1suLW7cimm52tgtVLypFztwvNoXReHcLLU1qLT",
  "key5": "2gXGRUePJJCjnN1niXW5AtNTp8C9LpPXgheoqs72W8FmJKTmqBQZhpVQDwTLH5u8wVF113T5K4htkQBbmqiKnZjF",
  "key6": "K6tPaemxrVmRQV1MXZcccYSvij3QAjg3fY9RRULo5Zf8ErFHzKBs8Y9hPXdq3ZoJy1wNYrKHKYgYhp341nWPQoG",
  "key7": "445TfBjh3deAcKV1jW1v7F1MwieiRyoudjxzHGRqQX6iSu7eRKygpoxviokyXvKBKWsMR813ju8yf2pPbtf1EDjJ",
  "key8": "5nDXbbb6LWzHGZ3GZEbpaL91cYDQ9JgPPoFukB6CCAVCxrQ8ppoX99a1T9ZVuaMnW7ySMeYiNJRNyBwJqPyAFTiP",
  "key9": "5E5RSF3fzF8FFfvSNcHkFBmf8mFU1pdLQtUSkqJpkZeqokc26P2jnUqTV3Pv6HsiZ5qhGL6uoRySYUhXGYD3LpzB",
  "key10": "47s2WkawmAQ5e3oXQqC9UGmYRSqqpdeYD5Wo57qaGB9XpxKYyorcjTWmsREmYEkzjTTcyiH5jzsJXV4nx1K2pRLP",
  "key11": "5FtzF2AEZTtwzqMkfQfR2BGBuJjTQXh1apJtqmY1LgcHv8iYPaxpmfy7QrmCj2tPddTE5woBiiHWoPXKAu786AsA",
  "key12": "R2rqYSXs6dFNDjv3b8LUXTS63jxjttqzTY8yfBjsYKW9oanEBvhEyc9m78k68snJLMF911NnWFiGM4849Zw8qin",
  "key13": "2UhkJXg2FAcoVqyryf1hu3b8J1nRB4GhV48TQhpJGRoxLdY5TvJ6deFHc5C64i2NQsYLNdEeec1mpEAHxJWtbbSz",
  "key14": "5PrG7nGqnE19rQzdUxegwx5TzgWVPJ6ecCxAry31KdhDzJZFf3GkwnB7DUeRPm1eMucd7JjB9fXJCvh5DntMWQDk",
  "key15": "3WSp4yqgHXfamSymH5LmNpZMkjaLHnM2K3YbGay2wYhgWjgqN8QY945KLM4JDbDLf7qY3outSLYk8XECtkHs4r8w",
  "key16": "2K6awJTq1C8yDpyHFzSnaPmZVBs4SSdrQCZBRBXKGgwVeofdTqU1yD2HCddy5wR768mXnpoWHwDojTXoMeTVMK2H",
  "key17": "2negB4K1nghCXscds4VTumtfRYW6VrxcT7GXGPGTrMw58ssZL73oSv384tfn4rKCGF8y7f2AvX7xrSVhUdXvr8AR",
  "key18": "61ibVEU8eEn2k1MU4DWLDg7Xcq1UNduSGUUPZDJYMWEqWSpwG9XvumFip5a71rMMUb9DPw7Fi3DcNnjL3bZ1izsS",
  "key19": "2eVfQDiFm8KdfUc3KTYgWJy9PCBWB9h3sLsgjPZqV83uuitQ8rpAufqDwnvHj2s1FpicJLaA275FJF5Jyvrzbi8e",
  "key20": "2WXL6G2RNSjsjGniitvYsjGvd9q59wor6T8mSUZYkF6QD2p8o9dqMnsA4wB2X6i1EztCev9FXmMNjT9ksYSfHoeQ",
  "key21": "2wV8Ssyyq45e2h7zp82iYTpz8qWwMcDcA87W7mM6WC7SF1pSMPRPWBrqTFLbasnTZDp5wMN4H1b3aaJy7yYnXmWZ",
  "key22": "2j5giGEhQQEejG21S2KYYZ3AaoQKvezZwvSAnFNV5c6LQBaJ84twdJzrifp9fbRf5xNkBAeLXiqgsPWzt4aDESTZ",
  "key23": "4vBZ97CBMWfvUuY5hSkHNnVPErd8CwYziaJfNEeyYfGZJoGuAU6nPW99FaLmPaqaKCNkHXE1aHUrHdbZ9fXVnuds",
  "key24": "Ka96D4ftL1WaPeJpjTDUqLu1fbqqvH1b6YuDoLEJPMP7hWDPP4d8RaY94YsiHBGxSWi7GXjsUrxXhUbWmKcLwjx",
  "key25": "4tGWHg347LJ6Rhsy2AYv5AvBkxyG5DkmcpXAKRLqR7QFwHicgZiXRA9z7fAyEjS8MiHWpYiNwkUGnod3FGV3seQH"
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
