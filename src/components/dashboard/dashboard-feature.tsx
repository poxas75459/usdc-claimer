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
    "3nLdh5WWmpBkLQod6SLrmYFdcuDMBX4naiq1YrKaa7SdijT6y66Ny7xxfrDF6rDkSuoTM6pS6pmFKwvTi7M42Ur9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zn4pbVtGJ6TGLe29K1uTcJsEpzKtsv3jmYf4bzdD3SLA3CA7Rs32aN4dy4JeuXZDtPQ3AYY3AfTYtWGd9ttrt8D",
  "key1": "4dzxMwpPHAth56Y6yLDcAaPBp8StFxkZQidjX46UZ9BrxGKCMSPhB6A72Uy9z8T7wsSXNAAZHoHMwQVTkzyky8px",
  "key2": "3ykTj6k8ZAMmYvJRJpPbRENZWMTAeohsSB2tgUbdXXtthc2qh9kxNRnRfuDUApor4yygVXFVqmsgD3kNbU6wxHCk",
  "key3": "4jf6eXRc6fnBduyicL6BLv1NfXqkmunq98mPQxtHh8Nh4LRic2J15PDgp36QXDNpJv81sZXyyTAHaGCB8ANaWto7",
  "key4": "26rhP8YRvRk2MjWwVifUACNLRQYzEJRr7NKbUq1ACCf9Kis8sAP6Qqedt4A52giwP8jzhDRQ84kPxndqKY3jfq7M",
  "key5": "2Gc7dPr1i7UE6F5yvSWLEjQHd7yMFLfRhYz4ZN7vhdBoQSLzyrHLqsUjhQxxTPZ4ARqzuePGPELcN7RxEPCLsnok",
  "key6": "3x9FSJrYQqhSSXH5WVCLuB3KmjJQoAxaLiAMniMt15cUXwXUxJqQvKZZzbUkv45KZomaE8NCGo5BXXKq6ZwGgaXH",
  "key7": "2cw5THaWiYKpNKskFTKKCFpa6AzRXZbF69xpwFCvgUf8k9XGt7cbxtkT2XrWy8vBZTE2eBcVbZoS2kdaNc7umshb",
  "key8": "3DRSMyxdqWeq42bURRLSa7Ft5Lb6hvFog7CUye5wQbZ7eeDD2TnbBKHBt9Rr7uR8bKRQXwU8LriZ4LPDAtgTtnVD",
  "key9": "2t58mLZVJFRCNm92wjoXRoL2dWXQFbgosnPrz6j4ayjkdoo9BAH1YuE9hxFncHNjh4Je7LQVccaENVi9uDHimG3z",
  "key10": "2LonKJzpcgAxqzNqZEvJipQkULEA5Zx3uto3YGc8wneAzHxZNGCi2ury5UfFxLpSkzW13wGNwg3eb7geKtHKEEiP",
  "key11": "5tFXDFQ3VQZn18M8uJ6MH8yWKsNYFPmYYMqWT29bj2TWXZsnptuvLoaiq1fFvnASoaBVCUNGCHw7oshaQjiCdTd",
  "key12": "4tnkUF56QMou77YweU157bKe2DmsVTwEEbLWnChQPEdyQb6e3SjZ7ey9t3hPdisvJVUHCDKVjJCeiNHuv6bbPxNx",
  "key13": "3UQUfLVcWnSC1F2XphnSgEFMYBs6UgJohieQrBYd1iUk7D4dXNaheimM1Pj7tKgg7N7YsL269de9bBTCEGzqwB2t",
  "key14": "4X4X8Cjuo53XgFdBEu734AmCxgn2Cjnv4Fn1HeP8LcXDWbHVELzxwXDzxuYFP6AZokP8swW3h7r7zHDNvt8CWRxf",
  "key15": "Q8HSA8XtdegNgoU1kWCzr3Vnc74HQXGfk7j9TxmFYLd9k5cdC3SvFgQ4r92fZuaVtQFyButzJN9cGYQULp6znYK",
  "key16": "4EwZuGg9vFARVDjBza3Pk42FDeEmEw9EWXEgwoqE2U8j6JqNzh33rbz8QUyqZ6FYepeE1SwYgJyfTHwCk6ztyRcX",
  "key17": "4Chbh2wjwrUSHvnFBEVemcnX6ZarT7y7wpwQ3bwpAHaL2R5yvDdH3p3WdcJmwTkf3Fcpcm87cjXbXLonUNfJcDay",
  "key18": "5Sobg4T7Ypc4twhssUuCwxXjVqyqAN9UxUoFhLMTKj4ghXqWYabShQt8HNViDFUEv4jcsMnRE79afD1a9zZ7wYai",
  "key19": "4HkVcWhSvWNA4BhsJrATre4cgc5BVnjZ8rZi1ndiPWiQ96ZwTMsR7mpJuv2PsQQPs1hNwjjnjZHpAB727ZJEe5Jb",
  "key20": "3618McxRnW8e6H69PWmAbWhFDP5k5DKcJpgnpwtW1fFyo2USEowgRgap8bBT6N5qin8NDb5uiZmD3XbVh7EKNgGd",
  "key21": "5HevMEWNBHuCwriQ13r1mauvz8Lc6iTEZML545HrfH1J5JFFMLiqVrdBqZJwTk85C8Utb1C4PT6YeF1uDr5Gmycp",
  "key22": "2Y47XMi7YYc7Ecn6vNpMWwL9Z6T9tXEM5gr1GsesAnL6pF39gJwuZ9FL7is7x86kcK9kQ5rEi3GP4d2rj1wq5bWB",
  "key23": "3uYcX8FEL9xtTFHvPySYR8aSegSHTRWvDZ2TRj5Kwu5UFVDXCPuFkeZeF1kp5Ta6LnnhBrSmFphqTc58WfVADCgp",
  "key24": "3ayQbYCK2e64DikVgyAWSN9LKNDzouxiyjdRQAemTC8L9zaXqh9qzETgwrnv12VoGJsebE5CTTZ1LUqosPWN9wJN",
  "key25": "3GSmS3ZWUPtRvDKtRSMdxpi2rZXBCT6RaDzeAq3f1Ezz3MC2GYLboqFM3NGQVhLWYSBsAsjngHPvF9LJwUWHJHgG",
  "key26": "5rS4MXZ5ZYxiqiBL1tpn19kzxhVoniksSaMw7GtuFQLqQjC4ga29VJxiu1JPvX5wzKp9GsPDHTaNu3dQsxT3sBDE",
  "key27": "3K4jgEhH6LmjmWLEnGKy4bYiFnXi2CECtnR71fjJgQwTKbBtcpSrgv6WAYJE55p6e1yP2uSPQupNuX8ph8D9LcwQ",
  "key28": "3SX4mo7YxXpkexC8N8FJBGn6tFiEEooyETSjxx9noY9xSk7ykPQ69VZjmER5w9MZU3hKwFU2agX4yoyLDJrY94w8",
  "key29": "2KHEBs4PCt6wKWkSxTooYAP7SWCdS6c5Q2Za1yJXAeod1Y46c25DhsHkGUASuDfgyT17S3pQLCPKe2xQcwsEmpgL"
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
