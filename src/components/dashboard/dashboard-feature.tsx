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
    "gpJHaT582pXeJfkmLqm2QyxyXYiXzwAX6fmXKuJjtsyrjayGdV7e7aL9YTraew3nvaTRhrXq2EFjAKaeChJw45q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYiDVbHPT3PPjr2aa6BrZAavuqMkBsLApj9s8xDMKczn1hiMRMv9xBBha6deBih7JXZfWNtF7dB9d9iFAdGNpYj",
  "key1": "5xMAXZyK4zqKom4HarKmtRrBoNMnfV3CsN3Czd5fM4cdkhX32tmSHpUFPp21FaGeCPh3sPgcKvUr6mUHdbuLK3Rv",
  "key2": "LuR3z8WT36f3JDpugqW1Jg8byRzJVACu4svCRwPcZ9LRuShL66oAVvnMH7Yw7pneX7YsK3AqkwkHXgGdH8spjr5",
  "key3": "4LzeLYaMD9FndFHKkjKNkhBXGw3YbXvpYCUL7wQQsNWT9pYVoT2ZUgsC38mZ9KH9EXHim5yKkgkb4aiEQVKjQdzG",
  "key4": "3vo2Hrj1FQbVTqS6ZHXg9c4wf4dRjoXyKWwpEorU6CrqfFxqZSRwgFK7Lqi1ZFi8KcVwkiBqUYKFyLvf2Gg3QChD",
  "key5": "2XgFmmxJELbcXEBHXdKFRwHt4jN1QgnK352LEWxDGBDxJd5GtaxYXMgX9svphofk6SGSnT17zn6SEFzWkgf5d5yZ",
  "key6": "5dkYQcHRY8W5BQkmjgHjEeAJrzSmpovrZJ2bGm7v5yRRV3NgBkMjhPJgfTNnnP4NSn3u2gXKVV2KseWsyDYMY5tt",
  "key7": "2NJTRPty7VPJ8HN6g5CVn2eADU3d4v21yCHv2FLBGaxuBNgwSpQAnwcN3yYkMS3yELmWUDT8UVZrvfc3iPHUTLs5",
  "key8": "5jPQEaWEC4mGm9i2BmqD1jBLUHRPbrrrDXkmXUFZwjtytJM7C7yK1R1XfNquMrYqsdVv4PKKrgnvXrTzwLTkrNEL",
  "key9": "4HfB84TCWz1RzUJ4TkYrVgKj5LNGiPC2h7u5M51Km4a5U5QadpVU46ybSYE5W277CqRLvDn7uV5zQzPsv7MVwGX",
  "key10": "dMoePrToUTZawT7WMQyqaFyQXXSQ6BuV7bYVgRGpthKvMUhbzcCzX1UjjbZjjJL562Bfc76ksx1XDMeQTmAwwNn",
  "key11": "48tj9uUerAcVzHTeLRXJNwB7wvgPAPGv2khJThb7e67Hnre4B1L1bJXdXXmdYBXEY4y5gprtQwCGycX5qFwrs4XX",
  "key12": "3DYrP9ucH1E8W9r6HCatjCf8UgJFTgjcc4s77B7dg8afsD7J2Us1n93o6GYUmYamMxK6TrFewEbRkh7EDuTn56jK",
  "key13": "29oJBhnuNxiAFWXFcrKXUdhqmrxvHsqmAJDVKt2Woofbi4QoAFMEAFJMcLBXkkRTZWFwXi7YD68a7bxNQPYKM5xS",
  "key14": "49UXnAZn8W5MN6zrckvXwEddvXyGmVanWWxWQRqs3Y3BbBhSf64YqbmJfPFMmyBa1RkENZALogjGB82BnuqdJt2b",
  "key15": "6uRh8YTQ9g1cEQdWDjbwpdqmsXxx28D5Qq3f7YJVSm3uxPLukjwkXz6kXkLeer3khKdhhXtgEKj5GcPVtrPqear",
  "key16": "2HFHcrpZzum8bDvf7c5gcDCdvfngNpZWRqUyrzQgvpGn5fsanj7gDmg7SZwnyTHhaTwAbL8vTkUEMZr4wwiznuDK",
  "key17": "5YeiNN3onnGsm7yLtVcmsEgfAP3D89DdeHq1Egsvv1aVPKEWwia5L2UM8mTJxoCYHa6xCzKRzTBXiEpjKhY5G9Xw",
  "key18": "4zYAPDTU3JErmemWd9uNMv5CYjvLDb7JPxGsgd3Cf9CzQEckXsM6D4Hw1ijFBzbXkJnZkWKraZumZWcSra5Y5Cqx",
  "key19": "3W6CPt7N1G3cyoDNx37UcUVP1ixVdJs8XQPmpFvYKHmS3uVi9EY32Pa9mrhuzQJ36HsztVM4Y67ntaa8FctSmJee",
  "key20": "5eo5iUoddhRxj64ngURtFBbWbs4rV3vrcFpFdGA2avMgjpQsBDT2djRJF26UtFzfYipJDA8WvUhAjYvt2BcLMPZ9",
  "key21": "4ai3cUR7L73UEwZSXV1mXhUFoqn4K7e4DvTqqnaN71QBJJrxEGW5UvT7rP1o6Xmy5QtUUz7mQNKUoiDYC6jdvThN",
  "key22": "2M5bh39jXnbtb7Zmchc6s1cezRDEd41qWhJ537mzzCuEJNgFTJDSq5R3QwzChh91ERsgwycMAW2tZ4qePL9GzM1g",
  "key23": "4GFpY6vEDVAnHEQHxtuwRKZKwkiMo8MMC9M6daS9LAnu7mCLGUeFA89NEscwU1LrCpDqk8XB9tGtjw9MK1GhpWi5",
  "key24": "2QALZ8j369fPra3Qw7KL85f6sUBP1YoB6mmeoE4XQhdNgXGhB11za9FgjaSeAEyX2jyeR6BFhJzWx31EGPG3iB3M",
  "key25": "4baqBmVWLSmGAHYTAsdpKcs93cuU38SkkBY5VPw4myHdAPFsUtXNuFMBEZe4TMK9uS6rYrPuGwbdQBqwQpDC9ihy",
  "key26": "2zA1oLEQNPcwYLjr2GCsxHoZ7Kg79NDKjaV3a6mqFDkEQxBsYBsKHHCWrjjo5xeQARSa3LWF86awKBuxwRpoTYmB",
  "key27": "FGb2vG1qYtmfaJWxwkXMnQS7ezdFM13RpZK2L3YzvApJC3AfooKX9M8FvVpX3DdSRfcSk3kWA8Tq16PudKetdwW",
  "key28": "VvdPqU7Df9u2AbaobmgKhf4x3ZMAfq1Bbc6kPWo7BeM8BEbEmvGTihsB2aTm49ZB3uXxGCRhKdKRZ6wv3oduvQq"
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
