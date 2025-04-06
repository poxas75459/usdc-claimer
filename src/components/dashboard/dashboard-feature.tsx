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
    "3FJoi3YGzBHQUpN3NqwxEtXSjCVv76SmzdMjdqbxinaaX8ncjtQZuw45FwfsiY4Jqvcaaitzcpk2ktPmovZQJq8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k562f9g6B6Chidrs22beg7nBN2didkXEQXGgTiJo1E97zPDFi7pYSWfCmGJn5Mc9ExqTzuDvG3rGqw1j1SgcpDw",
  "key1": "64e8abhepb41uvGyw3oVV8BnpX7uAsVzwUy83tV4dssbjzvxPhAxM9aFLWwJUXoYKY3JMpsJkBptn1pNYaUoZn6c",
  "key2": "3GiF8PvzjfRM1t8SnN6XKab3NPRofkDShzwyosRmHpZfnjY9WKsQSvbRzPwj2uJb9Ko2P9PC9XJhrSrCTAwDUc8P",
  "key3": "4LyWbpiTQCjrRxD5fmRgFucT2u5i9fvtqqqFZs5yxoWYaKfpMrwDwMquMGCFa36D45S43CJRq5NwiRsYYT38Jm3H",
  "key4": "5eiUwkTrCFtjc7cvPJSitZnXferUPSvYeov2EKSxedvhVeW9hGchgZy68cEZRmsvHCtw9RRWmk6zjddAy1iGYgbi",
  "key5": "4avLK5pyLsFh1quxUD8QxczMwWjPkRnm3YMjUbrXq7tXmAM5Gh2z1V8ejRrhjwfcQkWxZQxo1XUb3uUwph79xbAN",
  "key6": "2gjakNUfFgbeKEqVzkrv3De7vJ1DVhyeyH27hETW2E2dP2QbwMZDbASq9HZnBDgoVEMrssUtixRVd7kVrnAsw9YC",
  "key7": "4pBGgNYMtg16V7uTgL74BrF3xeN8qihc9omrriFiyA2rRJY6xSfycmzYqzk6Z6eptbqZAf7EZqhBf6JNvUX9pyaU",
  "key8": "qmnnnhtbH8EvrPrCaSBWUo7kCiZKVc3MK4U8jGZUiDYZ5kqPXKBnV1Ap5D9nMguTakD9pHc1HWNzdfsMdS2KPmy",
  "key9": "9eyX5VaEMMEWvq43jg9QuRJnT68Pp1pPwJVZsxixXAFpGeoU2oHE2v6boNtiDF4HGJF67W2DosPNi8xvWXyCeq7",
  "key10": "61DvhgYyduDu8ZqozvyHnZyCgEoTeUKWBwT6N1nq9q7MJ7tBSzaox5CSSWckDVBdmE9s7But3cdjfd3z5BYpwNZK",
  "key11": "2njZ9MurErxqVKFXkYYyTZ5kiiTUKu4GT3RvwT8fZWqueCTVbGnbz1ckkcb1gVwhqSht8Wj5vWVNLoMcY1xvA2F1",
  "key12": "RBQYajuMV4QBotEkBsmdxzUqhCvyXH9zg2xPrWvV9zowAufzrffsgu57LcP2poCLkH3d2cYXzw9mcWKkb5Ci6x2",
  "key13": "24zoQJPhepbnZqxBt85ZyALn9huM72bM6yHDSaSjpND6rpew5DarsDMaLxMAWaJUyJZSivh8F7XzUgwC1gLAoahZ",
  "key14": "4aME689dGscpumz3JpEFg4jGMM5PhBEKNGEFM5oNYxGa4Rcmjc8zZC6LQCEUYb2cX1YA7XDpbVpZ7Nt6jUtwWA6j",
  "key15": "2pkG2s3awtZ2i22vkMW14nEPsHZKHCdtgyBXJ1UdZLrUHCm3Jya8CJjZpQFc3QpEQB1XJNeu1JjDXefgSW3fmH7R",
  "key16": "C6RtEJz9djdGQZGhikNXHeA7ofmZKHcgHPi46dcrDXPgYtYCUrnVjmiYDykdBsuQzP4SoHcQNhrxFvbb1TXjw8V",
  "key17": "22tDa683KaXWLS9dYJCVT4zhqvej7d4KnX4QQxw9GFGc4fVZqX4g3YwLdM6u1astvNxdXiEBmw1tfDCLJg9xrepf",
  "key18": "3cR1ZB8kPHcjGV6y2vvZw81cjbmhDh7eSMvyqtp19GRdVy6PURBnodNQNC438zj7GvNmnQCHLyiYwif9czP2TgdZ",
  "key19": "5PvSUG4fsjHLEJuSk8V7XKXJBZEDhdgyUbS3LNq7Jq1TUR8dwh1tshsxMZ5fk5uRzNAN8PfqzidK4qEWq2qPsNRo",
  "key20": "3PetCUpPXgNDAWdywRLYkxoqvmqXgdtSaGHqi69wUmAjvfUCsYjs7tvLVBKfXDT6a1gFMxPywrRc3czQUHKiZnDg",
  "key21": "45SPWRoTxag3gj2zy4sEcKzrFo9jopNVk5bt4Yxz3dt4URRCVcocDgo18wzfkavSfL7dNNpYgPVQ4GxaaymRRULV",
  "key22": "21uJF5GD5rYP7LZoJ9RSzeUTuWci1RdKRQsmWLZGjM7KaUvreVsG15ggubXeCzEdcgJt68FDusHZxXbZsKJFX6Bp",
  "key23": "48NpbibmEcc9EtiLaE6y2JRnmXHvJA8h4MfMRqJzjundyzkopipDBsp4SQK7DiXqXoCSwaQCoiVxBA42hVHfW6uj",
  "key24": "3kGwFsePbLGSBp3KjJVFfVPKNHQ3GbujpShpKVsfBJVTyFTdTrv1nXoi9QbB8pgAmWQNTRG42Psosnyv6jheuttM",
  "key25": "2qVxFbtcwXG76feKiSrXF9xBF7anQjUaoLxATSYQ8sAvYUJPmtrsfpkJoEKTgPU4kLP9C2HYpo84NGXkHqR7pwmC",
  "key26": "28yHra4VLr8cZFwFttfQX8AfwdTpScdvd8YgpSpwLmxYXMnLK39Ysn9bdzXeJoMLrVzq2zGD98QDNBxxnNPNhPZd",
  "key27": "5nWvzoHwSGtJJ2vmHUQzYXM3UuBXW3mKHcp6quCeaXthMsa8SkoxdnnP4YpqiU5Dso51xEPa4rEKGPNhBPr9DBbd",
  "key28": "SSNavZBEqspZYQsCrGgxyPEKYecAErBBNfqWtpSpmvtiTtNj4YtSrzLD6RUc3d8sHRtsVwPK8d2wmmZUHTxDb9v",
  "key29": "5zZsdeUcuRpr7yNvRsZjxzykGbWSqCNmvtG9M4du6VAt4uoKNhgK35KsjiGfAU7GLCZMqKTLSCbYLqWB795BrQkZ",
  "key30": "4eDVUNXUHAm1JANgx7oFZDvMC3Jmkx5JGthur4ANphAVhosF1d7KWZjYgyLxnzC9TFXPghxzRCqf1Z5FWTZ9hPFN",
  "key31": "4jZz5ScdTohhX5X7d6YoEoMFquyb9ezyKZcceC5erAna1nb9HugJF8txhKLV7w14uKZCLk8P2LB7pgTEKamN3iC"
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
