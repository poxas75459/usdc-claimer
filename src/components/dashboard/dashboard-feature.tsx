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
    "3TdvmYcRc9dWfpKqkyyoB34hGRQV1ZnCJtuk7bg44FVBJWmaptMaNGxDCHGnwTzV5fXcjRZWa5NKRxZAKLse2UjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5JcspyqnZ4EAfenFEcDpZmfVigVH3Dyor2UkXtYvJk36mwpxJq9jrJmk1vv7qgFF9eChNPRF7TzKDwvWTogFG1",
  "key1": "4Gu4Zusp91fjJp9HcmDqUFhBnwV7pDYgERBY4dDdKQP3tnKv9VvQ8AE3k2Bbbz9twZiM14jK65khxX8ne7GsaQQ2",
  "key2": "2dxCaFdVY3xmEwhoiTak4AWd8qVr9KjFpRr1ZKL42NmxF36E5LRBBLnRKSqh89hrWAfDpUJ9ywy6iPEhBzsiw72P",
  "key3": "5QWu7YZXzAqUHujcJP3Ym1NJ6C9D63bHqRSpD1BEyC8zivzhpFjMFn396q1VwYk9ow1nEZrbPFcikmnMGwUL68KF",
  "key4": "4zczTUHjKrP88x4vgPuE9W3Yq8Kqu79454k9pceD5MwkBXrGyftbTuu2xEZP3vnbqSt56j87BFBYKvYMWEgFwAQo",
  "key5": "2im5ah5YwFmoDtpMBK5Hz9LZV7d5gNbhJVuxKyGz3f3vjhphMgDGxUhJ9yVg5VT7bJyPerP2DQBc2JfDyjyYe2xu",
  "key6": "4hU3xAxa5cMhSGXeWpRWM8e8aw7gLuBCTrcBY8UpA7AZfrYRM1QCH1QgCU8kYyQ5cQT8B3mik8rvWEGQiyWhqmxG",
  "key7": "4BiD2y713PV6T3ViK6U8NXPguNX1ChpwRLEbrwtEvUnwQHJre1aueiE5p7DS2fvciiDEAFNiwEBhKQqrWSEZq1Hs",
  "key8": "81Zarafgk3NPqfQ8jQnxsvSCtbVQwuPMSSLpPRc3AMnWveqFv9tRRV3yksRpPhL95nrXWxkeBHWCJhuf3HbT92H",
  "key9": "5ahzgdZ7VdZ61QSRR6k4Upe6wWLjsa8xSUVq2qsrrusJaEbRTbR7VkDX1BUciVP1u538r3eYmFfq98n6QuJ94kVF",
  "key10": "51Jp1ui9dGZNyNM7CzCdNS59djBLxcV2gq457mYCG38AhcXM5nutZN3ggFtAN3harMkff9bWFJhm44PzF8fUEyHy",
  "key11": "jCmjP4HjooThiDhAzvZVq4rVnCSXwRWG73UoQYVQa3cqdtdhTRSMymWn6EdDvfCj4XSp4bnhgfH7Se6yNNTfiiB",
  "key12": "2gVvvYifY1AwPAiD3ibhZDdaWoLGQuUkkh2HbJjo6jBHVZsQ1NkQwSRrnsgNh17ygxMN2Httj4DkcVUNus3wFyQR",
  "key13": "3YYCQTgwVS8fkcfdvBtW1ry38bbtZP34RKAMUFidJCT9MgkofnAGJ8xtg1NAwYUAG9whJzMfv3WaKZuuQJ8YGrcJ",
  "key14": "2TnvmefKtTDKnksD71sRLcXfJj7z7eZLAfNxZEAAqB1kgTjgoFJ3hSGq53ypxLhBkF8ZYNLSpVJYLWzyNxDnQs55",
  "key15": "3sSzrRmYg8w5c1bKgr9hEHv3C4BKw3o5p9AjpwE9zANovd9aSNtXJKrsr2wMsGTh2DnYcxD68p1eRCwD1UYci3FF",
  "key16": "5HfLTQPdd4CuyoC3b6ehUsTeu1Kn9jcNjdR8KQRFQPSiECAAbrrrEK1hgzYNd5HA9yJRPpXUYaTsTP97TajtuLeg",
  "key17": "avNYVnAhKciTTYbW1MX5xnL764y1y44cWrne32rhPH9gzMEZxYxh4zPXBQczJ4bzP8S3kuwZ6LqCGJBFG4tZbHQ",
  "key18": "FFudtRXxuY2rZYTDGBCMnB2jhQZekF6YgsMdu3WMzk3pyV3MwYQ1W2ysHRNwH66f6FMhzWBcsVe8f65Lxx4NqVw",
  "key19": "4ayLWdiqWAWMk5LqWEHPDza2PGsd13NfUmRCqoTipnvHvYycab1mXvc389Yx9a1tCcpb9YXscvdxE2TpTtk9oCLu",
  "key20": "2LLUyWcBT3fmcktrZdzTVg1zS3pBBzVFbqys5mFd89x67RtwDiNzFi5RyDEZakJUdwNbkv97HmfjuhFnUvFTo2Ep",
  "key21": "3ytbZ4EnYAhVn1j7JXp9877MYLD1fJAkEuLvpV7Zdexn5DCJpH2U5G3WmfW8G9zPsQCjK5iUA8ei7nW6vaeu2dae",
  "key22": "4Rsgh8TJqv6vL3n7mixz2h1wo9jHUSdsFnhpjpf9QkhZW9SimsNMc362hPNQBGTTZtNTY71LkGWHmuX59zBPQ81Q",
  "key23": "4NQwiqqZ3P4wARhfNsxVAbCTxrXiL22erLA95uwWemGZZhWp6d5mk7JdeQaZpAPixBb5nSxmKepYj81WJPcXD4Va",
  "key24": "5NffmeRP9LBaxFZmymhoWaiogEbf7i67yErmPKo12VxtfdbkhnJJ7wxGbYp3wMgsXjYdgGWy1yjgLNHDrrJd52Gf",
  "key25": "3x8U5angR75AAgtHBy7bEynoiPcsvrUjK4gDnAruyWNwtBh4mvjXZyZqyU1nJb4wsFNPe94PooNwFVTcTfwexGjT",
  "key26": "2krsWWiHewaUimwZu5VaCBgU6jwDuStEs1PTZQhk91FhfUzSB38A7uJoyLyreBKSDzMShUgyao37Jo5o95r5iSFY"
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
