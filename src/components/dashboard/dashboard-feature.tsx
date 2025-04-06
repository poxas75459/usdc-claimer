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
    "28rmW3eKkJnWku5iUEtsz7FYqskaa9bpJ6vFCCa5AY4ETMUzYcxG5x3QaGthmbfNuTtoauR6Erhvskgsmi7dX73c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPjo56CNcyrgU9BDw3T1PQRRV2FRvEyYS5Tvy2uVHms9UK8ATf99oCX6aEEjEStkuQKunKjTBPAuAmKMrB6wg1G",
  "key1": "4GPeoBEXVtx6A2aPopUwxUGepZ6FSaQbdHE5DpK4fijyLNjJYSwC6tAtzwfjsLPMXDS5vMbeF4ZeBZSwGHyqzrqx",
  "key2": "1nxmWtiLfgUjpebDMDigXxNL7LifiTg8JPJV3b2NEDEm5SsFE35NZFYLRzEuH1DS3j8yjLsbqvJ6AnvpekU7wav",
  "key3": "4iv1cZYKTckNuvL1CJLL9MoQr1J5tkF7NYZci9H3T67kUa5dGCLCv6iZ4DMoQtX5KXh7oWVMYcNJ5NqF3z6J599Q",
  "key4": "4rguCjh3nNk645GeZ4pmR2V1MC3fmbgWYSDWnhe8N9bnue4kFqGbysGwLUAeAHHWVc4zVmPbxfcc7QhoMqTqFcUr",
  "key5": "5kiLM42xAfQJZDcBEwuu2Nm8sE5E43AN2P1eiWzNsjc4d2usGfaXKJphkLbAdQa7UgFiyGvy69CHKjo34HsBeUbj",
  "key6": "2jaaDMsuk5ctFeH69M2WTbP14GMHTs7GkFTchTczWe34UrJDADnN7j7UAAKFk28rkB192teoxUGHkh4Kf9seKkZK",
  "key7": "4SKMGquhysX9qY1HkYJY6AgkScas5wZ99BnUSWwTeMaCSFHjEFbzeTLaagBg2VKd4eLohzRZE1JUvjfmobWxTa4t",
  "key8": "56UsGosyBcY8EKS1JimuzcW6so1MDmeAzWTxK2NeeGeMNaoL22b1v9yimhMbcEGKMtKmb61avtebbaESb1sLBqbT",
  "key9": "EkfieR63c18UKNExAvvmEPnMeZtzhECojF7NXEco3VPnWTVKyVHkTyhcWxenrtVeBCA2tphi8gNgCWk51YsCQRF",
  "key10": "Z4yqzDGuHR56ykSyi2xwwgRGhLxLmgc5aYnmSBybmhQCG7NcMBa6PFp9bLA4Gn7rBDRRpJXBwPhad4mNeLYLQwp",
  "key11": "2c2fHkNk52wmBarg8mbyvTy8GTPxSWLiwoJsAQQVRAqKYkozqoQBg5SHEqJqCbcxkUEfe5X12jjVTSYxRYybyPQE",
  "key12": "5ghC3pDkF5tHkPnrHBXLvWCGq1UutwtLR9273UdyJgLNMCnkZu1ESS79dP8vNC7CrqyjJkLM4syhTDN83GGigw2H",
  "key13": "5stLmTvXbCVDSUVYaVhQxL7rfrGF2ASFYvrQ3AxhKAqzuj1J2FMzQmdNZs1CzTMU8CvhSteZVfPNhmkuUii4QN8k",
  "key14": "4tD4YhkSbiEjmwBPeXqVhfhKJifnsy7Vbqcc4BZioT5U93qQjeSH9zMrnSxy6eWTnTtFb3a9bu5UNNn3Bus7LMZj",
  "key15": "45PihkHYarrbxcgTs7J1aXrvvSP5oY4VubM1ubgh2RvWHXyQistWp9atp396ykW1eTuWkAdYHHCs3BCGm7SXir7D",
  "key16": "2YiEHePLyhLEv4v3aRFA3qtRdzJvqM3LF7mBAP7hFuZq4zirjoDP65vD5hQFbTZf79bVrWg3cDWsv55f5TaeqzLR",
  "key17": "3zkPtfpeGpFfXV8HXE1kqWZSrr65JTfEXmdsHwwfQFbNP14sxJyx6DeFGTUxWFzifxChpMxqLVoGXBZTV9rAGBrP",
  "key18": "5dVzGbWX88Az1xzJbZiHqAjFXC8HvmydLRchQALm5iE72EewJ1AC4rTDaG6Ffm1Tpi3Jdm8666Rhw9JtSdDN3equ",
  "key19": "8j1xMKpAWwdsCJ1aTLDJkmSCpM5rJCTByJbS58cFCgohDZJzXThgAWnq7kHBETfhrvK5gsRKkoeX9aFTFUjE1yf",
  "key20": "BydfARTkwjUTGJVLypE5QR4ekU9suarsTg4ocyfue7TM3Hd8wqqhztwXyywvjCMbeMzBbocsyWf7a4qVmTx7Rr1",
  "key21": "2PNncNznvu5B2JY6Sbm4BLxwFSLZsBmzD2kjsMqzESFJvg3eYYZRkZ1iPtzgPAm576r52vTPTepA1vdVfqvHNst6",
  "key22": "2PddqDAqoTKYnzZJaNmn6kHaCSgS7qoFRZZ2pQ8M9snm24pHnA8JJ8GAUoTyLc2QWCZqhNBuhK5oqeTUbkWRF5Gz",
  "key23": "3CzJcaYbds9YyZCH8Cj7QUoBUpk5dsJMAd8jhzrdrDxXCnCcm6BE923Z6uUqYa3FQHhzVAG2wWK3sY5fj2xqsmVN",
  "key24": "44YrqkYrzWXCNUv8RkqrNi7kC3x5GBzFvTE2QPjjDVgWYs59k5fELg6CdULHfmfgAtoet5Hx4dRp5KBam5APv5hu",
  "key25": "UrkZ9hunGVYGFDbJ7D3s2Kmr8617kDNCMowy3xFkBF7n1cZ7kJncHnUJ82FViVZQ26MXosVCVGecLfkR3SieBVT"
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
