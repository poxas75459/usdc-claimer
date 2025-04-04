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
    "L3PWFa2J71nCtEaGdx1mWGMErmJf4choFB6p9EcdRMwCVBhApSeQh5oU2fU82RWXS9uBWKUBFJRbTt1LqxkJ8m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJ3AcLvNMkpSjf9e1x484xkLsr9eBYa8idoKfQgug5wHg2Qg91CVoqziA2BqbSzTztXUFnuJJVrHdnwpQuqs5WK",
  "key1": "HcBws9j4uTffV2SujLLyoU8sW8wSjyGxjoDYkqFkKdznYnfw31poTpfjcAEj7KPxSccE14dU1RjYXk8bQApPF2W",
  "key2": "3YqFZf3xeT1TXhFsghCJUbqYtAX8ZzF1gEV6BVS1o2GQKWyPyViRKbA7Cv28oj8Rkd8PTVmDRSr1nV6hxraFvCRL",
  "key3": "39u5xTM7AYa1yFWsSvyhoyj7hgMHKsx91jcjLXzefB56HgL3fFU4QWGjf3X3AU98vumHh2LFjFGETBftci2yKbFZ",
  "key4": "2py881CCDxFjDVmuo82drszunoj6tyC1QGWhLekvVj3o7VWjaVxESJLq6Dcyc3cmXgq6qoQSEwMpaBfGPQUHhHDa",
  "key5": "1qT95w8N9xzVBMMNcEW2kb5zfXTTTiAmZnhvDukVnQNBRSRYZ2jVCmw9LQMx4JnDx8ThRDbBBHSjT3KSz79aWfA",
  "key6": "hgKdtjASXZrnHC3TUL3RkbqmyxofYauMZNT2hXwM2G28hAR7w19Z4PsZ5HHC61qjwCZ7yTXPcqBE3PR1Xu2AzCu",
  "key7": "2kdt8jhAD15UPu8d75G2mJ9owBLNpoqKdgzrAMxfMvzN4CQPVhSsLFAFYHqA4LsFDArBHvu6jqA1j7ztBGtrCnb2",
  "key8": "4sWNHeeNqgUKDUGTPb9HzhmCouwKyQ1Ak8gyuqJMSrtVfAzrfaGyDk6t61v5nGJdBCpJLxuYj9nMVDf3TbmWmY9U",
  "key9": "5k1buLxqiEGDZ1PHV3gXRiK8Q4jGL9LfDEyh8pwsg9X5SFrNRNFS2bST5WR7kSxYsKvVS1DA3r7yo8w8hKeLZTTJ",
  "key10": "3n5oEQrua3XGvwxPBEidh8HQcc2J4mc4GjriZoUJiPC3ziJdxk7jrbntk336AVmZZwMPSAwPp4hWBeNT6SJbPVfk",
  "key11": "4yeDVS1tWbjNsNM2SC6eDvsJCM2Q9xktDBkvg89mezVwFcNfju9fMEvZ4QEaVxdMQY7UWJV8zg7UpsiqDs7R17wW",
  "key12": "5brQn5Xc5wyuw7mNW4dv7tUeXH73VyuTUh7ttDk6EH6VGN329BrXDVk5WDLsuXmp3uZYW9eU1x68pziUPv5LzsZn",
  "key13": "5raagj16eTZ8xpx7TsZAzMBuRSnr3UaRUkCbcxc3ubycVDyPYvxh5SgK9Q7AZ81xx5Bo9KkLuCDyftvkrytqsoU",
  "key14": "2p1eDN6hp1ukGqQ3ZWf3rbDUjZbRZvtu6v7sGh78YYMujkdeo3XU4GfH3SHbiS1CguqJ7QmNRyetGEeAKbAM1p1i",
  "key15": "5rHV4xWuZ2AZ4w8KjKPsKTE1s8v3xJgLXgJ9vbFNbEAcmYckpFhKFF79dVBRiAFBGpZ9PMbiVmdj4HdJBVzjjwwq",
  "key16": "56WDAAELdfw7TZx5nobLxFG5cXfxzHkSqVsrQBfB7DoZ6FvpPK9f3CYqs11kuTqRivgFqVPSw8wzDY9nLQgwgTmY",
  "key17": "2upegoqG44DX31H3fCFuNoGw2x2Dfv71jcbLQDBbdrcw8oTc9AeGcmRyvYFn7u3S246VDDw5GZWuksrh4aw6FDfm",
  "key18": "1XVh58z4wuYF2FhUuaDmN9jtF8K9MrTSQbXtRXtkNYQom2r7ALSX3kQmfacpcNbNcyWCV1GNKSLSAnxKmdmTCcJ",
  "key19": "44HfvyVTT5bdmqegjQoyVzLJHQw98MgMJSqceZ67AuwC3aDXKoq6UEhigj5hDjPsAhyUBTJXQfstJ4ZZ2E1qU5iR",
  "key20": "maq2AwBDZqBFzeyeYMsv4GvxH6jvPepz3d4FNAGbimyXEDYDAeR9zHoe223wCYMApAHTXkcC3fnhB6KXg6MvGQf",
  "key21": "4NfUvTBcFrmeRVtxYHWE62ZLMbDHGGNCXyVTW62tboVFihncJaeANuY6WbkMjfinfw6b6DCrLMQhuox8Lr8bbcNC",
  "key22": "3bxx6TTUdRmhWMCYJPJ6u3cBYPcQ8n8jFnEYvn8gVW5Q9ocyUGNGpPkr2fqYbTEWao4pUhwsY6SgF1JsWVp9qKzg",
  "key23": "51cQRxe43VJu7rgvMY5XsQ7JsdAnvmMUdCHiAvLruZqLFrqsesrCP7pVwXyqv88MCejEkMjB6MWRa7ZUFfaGoZVi",
  "key24": "3a5zNY8ExdWDCdbLSNFMS4NymQYoDRsoRMKZGUDMbjXDw2BPVDY79kHjTfFTDgdkTWYTTg3Qf6XLatSuzHB7Y5FQ",
  "key25": "5K7jVWPYaSwnpi4cWQ147MAp3cj5ShDbw9oV1keb9mjaEtUYhWqYGsddYAgfaaRDXt81hWvkk764iXs74e4Pv49m",
  "key26": "2eJ5Wydf1jhH2k5gmAUarAQvex3bnq1w9zqNs3iR9xRDUjJs7V8XkKgomgNXg4coYeXCECPgPezcJ2woNmsufzzZ",
  "key27": "3e7s3UP5yuZkj5fitQ9vRWpgMZka12EDnfB981U1feKH64aLfQXeiUHCBg3puRCFZyiFNLyo4eKqj3qoaxUc9ner",
  "key28": "3X1UJUeng11fxu2w3cTdqEnFAVnEquxhePJuP3nhfbsW8E9Y3QZrrrk2Qk6NtExLJd24ano5pTMtPQSuEC8r7Jww",
  "key29": "H7FiStnHb1axU4yjNTsZaUWeDBCEo8J9nt3c9QpbhqPDwx822wZ63ZmRjaUn3aJc7MoB4MibGrfMEnMZoQG1w5i",
  "key30": "2sebjCjiTBXTHRy3CrwcjEgLyjp2ugqT9mLAWMmmMnNFKNr7MhUn3328TqEFJSgjdcjqimZUGkmaoUyBHwkqWwa1",
  "key31": "da1pQcS1RYU5Rv5QMu4mzDc671p5NtiHHqh2RDTsYuHNAGx4nXZi1x65v35Pz66MaJZYVe4Bk3LAzaqYrF9VTEJ",
  "key32": "3XEyhtHSdmxCcYR5LGWcgwaWyMuH1rGAPcs3dgftLT5ckKfpZjgTCMBvbnyaAxhbPQZQdSZ2DS7cQrKovcpBsZ6b",
  "key33": "2xh2u7rMPSPk4rY8uZawAvHQWKJdQ29BDBpKZzCVWzLcFkY3uGHs1UrNkKHr4smnthrprTSpfnbVr64w1p7VcBWQ",
  "key34": "2qqKzmiBrytPA5hNGpm9XugUqHYZQYVkLe6yrDd5cpqn6KVZmNrJYD5bHTS1GbKpLNtLvmaLPxrrWsQmw8fGPYFd",
  "key35": "4CDHxXNGy4fbvB4VGHy4SQNwUwV8eKVYaGKwjGBzkK8fCdQETTNd7QhMW6rTso4gojc8rgx7JVFsHNuqn4Wx1QCc"
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
