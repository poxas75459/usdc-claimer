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
    "3i9cjjPLVTiyuScyaeboh52zg9ocR9X1bwV8mBeYYD2vkiNN5zNnb2KJZ4wxHy1WdJXhn2h45ys3YfhD2J5shEYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PDVPi1kKY73S4FJzQJrBXRBgFzAgagxLpps88GRW6C2vS74wKEfiVr4A7TYJ3D1VoTd33RaWcbMFYvcv5XNKDA",
  "key1": "jvvqKhXcCW2KQURFD9QiJjJWZJdDC6MzfrjX6oc4nsNJGvd51jvT4jV73bvwJPUkopWhYDX6XrH9nKibe8GkJFd",
  "key2": "4EutGLeLh2KhF3y6hDX1vNBMpeCpDpP7UynhMbAr7bEXyLyBypmNkRohvpww9k5C5BLgz7V2fHKx2F9AiDzGeiFC",
  "key3": "2QvCWqM85WBQ8qEGQPGfeCCmsqvw3rZpigD9h4TDBqLhqMjMey7N3GSeVtD9j4J4aBZddRrCAZCrqqR4vY7eL7em",
  "key4": "2Wqmxpjh1zKesbb4Kp8zgeCr6YW22Bab4d84buzFFqVtRBMfXYrL8hQCUMJ9YGaDrj6mqgqXgr6jGgvpZH8dd7S7",
  "key5": "5Dkv5gZLvbP7yeoT3veHrHNSPn8FAFLTxL5akutYQef4QEFSYAgZVE21oJFy7BpujzB6HgiYhjkhJUBmb9HdHxuW",
  "key6": "47texhbYx1qX1VfnSYM3wMTdyYmbBnidKR879WQLuYdZxFSwYeVQiGuPT4vQxgZo1foDJC5ZNc6VLcsX4ktZ34hZ",
  "key7": "5YZfHLYjKGawVDsFH5VzAWQsH7A9CVQvGtQZK2yYB7zVf5ASLTBVti8KACmhqkahC5xfGNrqEhoGQAftJLHYoDZh",
  "key8": "3VvBhUv8Q9Ge4rdi28Hqwss5f3RmxX8v4UiXCTsxnZWZu7k47N7DQ5ePtWfEttQsCvkjwkaNnTsdVP8pD5A1aK4x",
  "key9": "3vJ5KQC66F9Us6UAtY3v1ZHLP1MVYH5vxAA7pcF2P2j9e7c7MRUKqBWHCfqT5ZuuLKmfbr7bNfAwVsMu3GKRs1YV",
  "key10": "2dRSREUa3EFdUCUiDQCrwbt5ekvKfEJVELi4Ej5brohxNLfzGSk4TG1AKmpJm4Lcihupd9U8o7MyzacGXKQKzwJC",
  "key11": "5A5UoSojuqQ8fQZafUYMbYifQuGQ8BkMmEq7YiZffBVV5JCzV7vxm3KvJkHeZAEL5z9BQmURvgg3kmxcgJA2cdsb",
  "key12": "3vzEVaGXh6Jcp7nGoFD1HVJYpwifupiGnxwe4a2EsrQKkC7gqXZUtFyf9qgZhwc6fpFv5j3JDXUsd9uVHgex7D8T",
  "key13": "5BYRG9GgxseB7r9AW1RdeWpSwa5sPvcuBsW1eBMqR4BKd9J5xAJ2zUg7o2CK5ex3XTineBSAE4sY8Pr39FYhTMYr",
  "key14": "4Sw61tAWwBkgqDACtVdSSC4ipuheW2pUToANHj5X7fAq6oRG8teteeh8Hd326NLWux1dQkuzdcsdddg2fWiZTDtT",
  "key15": "5kowbtAFTiz4bXQsQK1BcnzCTo4VXGuWNF6aRX9JLMdkP3Duj2uBksVQYEXiMTKebj5YUAFbavLovNPa2QzBtGi9",
  "key16": "3cqk28WTTuRUfGzxudTpKEzU7c2U1ZEz156LzUQStcmWYLY1BmvKpSrE91cqwYjm8qaErKCVoXx1nb69w9Y9XrFT",
  "key17": "2U6fAuzcRLThuSdedMq3kkJSwpURE3HfVgnpA87TzHipaU2BNCjJ9i7fCkre24cnUQgP75jk4vzDdBCupJ5jhQjG",
  "key18": "53CfSFwb6HgHJVVXcjLRza3sfeUFNKBghVVs7BgE997S3ejsVXnhRH4i5Zg9YnnWA1hbyV5DjdddMWoxz6WMu8Xh",
  "key19": "4t9gisHVcVtmt8KWYymqyGSm7J7fcPdHzgu1XFP3amMywu9zQCnAnXZD5TwrJk1i547ibMVpcsTBnwqC4TSBNvXa",
  "key20": "P9LEJuvNZNudsjXB9ukHK8q5SRqDVSnkV2xNiioWTzT8VCcADRSqeLjPCbkua7uM2oMPnffysPHVndjy69E9WNg",
  "key21": "38pQYEHE3u6bLeXwU5QRXGcLiPXxCtobhfgJj3JK3os4gj79JqifbMFngdzN8eaPiqKF7p2hT2boEDb9CQQydihM",
  "key22": "3xMETnrhEZXCacVjtqNVJ4BxqqFJYE1gWKRALUHaLrkSvQi2NoodUBUCQLkmPUHS4q9xyKwdagJHM7KDikmwcaB",
  "key23": "xmbvaDKbzSBnVQLYoz6qCoHdkH5x27tvDr8ZkhRy6kfau146kgPNmomzbgaiLBRH16NUW1f3a7cZRoNj9txZ1of",
  "key24": "takPM9Z2nNaSS5YR1LPUi1sFuE7KEtBtqjDZyCE8EWhTmzqPYvSk6B9Mya4CAFrvZbsuUni5wfTWKw4ZT53vsH2"
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
