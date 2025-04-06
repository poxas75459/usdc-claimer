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
    "2DpeoREUzfJBqbUjmcM9jRQ2T8nWTFHuaH5W6gG6jtjDKjoVwEQHhgWDxyag3kGrvaNdT4uAktMjLZ9ELq78K8Lc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QaXPrdzWeb9WBVbhhqdUdQ5qDrYF8F4Pfyg3Y9ff7TMvXQmAqKjeRWsZAEf58JcPCYGqjHnwTXv6DmuZZpJDec1",
  "key1": "3n3gYS5bcEnZjrq95kyfqPdiRxU5TDSHthYDpVCZmXqXnQWXqaR3jkofTLhCHDv12gppq3f7A4QgKUGDybHe2Hsr",
  "key2": "2fNFyGEearmpfPiNVPRvKKVAcPkPpzk1QpyVE94jjLM24xYcmCqN1qcyne5KrPSimex6vUwhGDL9rd896mgPd9g2",
  "key3": "o4xgLTZzMhfXhvFJcddRkLX1TZuzodUYDwpAEMZnv5QWFnNofNeES4Re8Hn5BZQTDU3ugyHewxKPD6puZK5Z17E",
  "key4": "3WELxEMii2fskckQ5jzfiuYcMQQL5tN1gNdWFfwBCqqJi5ZRUzYnYQP8LWfEYKX2Maduu3L7RDGC4dQeT7ZnNXb",
  "key5": "FtnxPRZPiEtuErpBgmJs2peQkFxdg6piHjMWD62ZP9hfwETqfC43L7oLnnopjeJYEzfK56tmS61exPFVq8DwD99",
  "key6": "5rJfXAq3Qov6n97wQsieVy3tN9uQXzNnVs8RyYHZ6cqhvrDbd3PN4vgwLL1ntnVrX4YR9wUnAW3iuohsuCKxhfEG",
  "key7": "2VnbWCnEotU7CBCsL5Wwy3KCiMWvk3DuNW7T99U5LjtJWntJ4aKpbhJFC2LAteBW88c1M27MRxxHusof5A22CDQn",
  "key8": "5wA7oCEk5U43HkTmXtxEUz2ThXhkTVNFYY9dZPGno7EvsEDSZT52rCzSGLZmZgu7BMm6HyFNsVW1yARFoNFqL6rX",
  "key9": "jAk1KT7kbNkCGgFTSP3VQUCqS4exxTKGZhYgx1guqqERPbSwtdGDoYwWdNNY2GAJFtYaAPct8fKTrBBhR4RYGa3",
  "key10": "2d9xV9UcRBcwGh9bkzwVsbBmd2HTZ4TRcbfiSXNGxrNMQiQPr3ZVmjLJUd8jG2gAvSBND9sBW5ZrXMGMXNv4xeC9",
  "key11": "RtqJqudRwDiTq3MkuCPxjKvXvQY1Vpo3TDzTKK5EDtpyApq7ZjpoXJ47gJMCYR5cX3g357Eu6tGdGKqhTjZBJ5F",
  "key12": "2YgPHESxRqEcKsveMbFbHDLLnhPscWjaMUNAtQPdUFkRU3KWnqGazf52LkyMqq12Xbe1zNtGjjLNaVRRpGDVuCVa",
  "key13": "3z2g9TvGBow3Wqd3BZizG74kgXyQfXXNSo98JvLU272fijVHzvH7DTFjpygjnHvHZizqAivD5okotxRLPQYdUeqQ",
  "key14": "38JjVLNRUXaHTYR5d9ed5UGfQQRyV8Se89ckGJbamHwCrNSdfVf1W87xfJzYAr6PKPovbT3ysGZHXZVvDHZiDxxY",
  "key15": "ShSSvi1PxwJSd5N4VyK52JFx8A2652Bs1cL9iqUFvB4KNm1qjtCaebXPiXcUhpaLuuJmfGW3Jq5Jsuw22GCJHug",
  "key16": "5cnifgd8wS4QW7t8pKuacLue5ndcF8hWih8HT5bk9ukg3bQnL3MqMMox7v9AKAjRQGLByJt1fYsMxe1dwUDDfkjW",
  "key17": "3nvWnaEWRr5sjYVitKRygYbcwc3mizkwGk886FPEVcXYc1SGhpibsKQKctRzKsTdyMS41jLuZ6CaudfcPeqvq5SU",
  "key18": "EVRWmLrtjeV42qtWqnCftDr526HsNuYEKEppK4qmbGGzcBvaHD9KtbWavxMnBHLyYCrC6gepWnCrXXcksppQ32o",
  "key19": "3NC16KPQ6X1BWsPtYYeHZ4G3ZGpwvx2eDMiMpzPpoHasAR9oA5fsNRohbzm3ZdtgusGhuyjKwvjLYhmwnNdJasp1",
  "key20": "5Y6RFPr2QkpfXZq5hv2QcQNun93CjK9v7k5o3jahYMTJhHbpLHxBc9uWnkX6dnkTniuSNG9LH9bn8dtn9U8KjmhZ",
  "key21": "2M66EGUWZCgGiiLFBKpaMWC9qkFTATRSJnZzDqVjoZNgodadZneYG8ysPEv8UtV4LqZo5DNW7D3oy9BpeMjGE7mq",
  "key22": "woBuBdqrLc9BwKZpK8E15i9VbceqcdJj4rDnU5YRxdeZS2DF8bGUTLZM15Up9oUANt6boPqiKE9P2c6aP6nSzdz",
  "key23": "3Mnz7AEU6sMHt612zU59jiMttEMbainTJRkxoVnvA1wDya1K8tPdZe3anJR2psmHsR2jTEsJyTj5Yaib3nJHL2fb",
  "key24": "5aamAeGjfqqA2v43a1TG6bxw7Gfb3HNsZPPNptK7VmUDhKY6BtT5PLKe5gJHe6Vk4Wrp4iu5YBYBphAvy1JiyUQr",
  "key25": "23YhuWwBmsAxU861r5dpDn8b6CCsKxeVe16ErK3k4itxkaPCQx1swi3sEvTdN9erVhQdpDmXHK3tCkopPCMGcrV2",
  "key26": "CvWg4VgjHrD3BUuti64ggiCftc4TdsWjtbhbUEgHMWi1jJwzhJewuiqD1JJN3oSN7FtGA44W9Qzfj4MHKSNNHy2",
  "key27": "28b8RZQQFvUWNaTNZRsvjt7scKSi3eKYSQgMzV3JP3cp7kKET6whwPLGa3D2jjxUH5csrD4Y9PKbqsy8kbkVM6LT",
  "key28": "2LWtBLoWiaWuJYWJWyBjANvpH7jGVeSerizzCHwWUXDzWWPwUyVRymBSHdYqCpWW6pNbeNABnoTkz8k6VUn8zKS8"
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
