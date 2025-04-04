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
    "2Esjd8S5PNwoa9g81nL2LZTZW1ckVdUHa14RUk7k1P79UyMxp34zgajTVkarYrGDr466g1kTtDMv4AM5Be5mamyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38FmLnJ83q2unnXsSdLsdDxDoZ1nsLysyPf668j1XE6Buhgi6PC2ZgpcpokNSyXp4kDUjMFu9vuCCTTnek4h3DdH",
  "key1": "2qYV9MnNr41L45dadqzKipEV9Q6Nreq93Abu5545pgiBUefHMyaySnZ4hXmgdTgnNJd89hSnmUF9Tuqrdio7fhzz",
  "key2": "3YboJHGdarW9oxTNwFfVeEXb63Ymak9t4pnfNKt1od2d8f9CYmLVqW889r5usAXQ3NuomywFfWM2qzb29JWmBRog",
  "key3": "3z23cyWB9V5x2FjtJcr4Bj4uP7u1hY9kx89orAzEv7Q1BUNUZJQfESwCjoHJ8dzoAvTGuqnD8tGTr9XMX5EpZpoL",
  "key4": "32nSj1HxPfw9hZwGFwcFwqWL74PVbH4mA7BbKhRtHS65GN9MmboAHVdfzVMF64tqzJnNovqhM3RRp2xesPq8whaV",
  "key5": "3rMRpnMFSumkF3wtH1AMYoVzDww699jo2of22T33E4gt13hGiy41NbsPP3EviiGVyi27QfNgbJr8gAPLfY9LzBcs",
  "key6": "3ejPrBMGukYmPTRXToMnWCjFh1w2jGnRTyL9zbRrbAsNgjW7xU4AwqeW9XKSW1kr87yf4qiBDUvAtP198VNMDR5R",
  "key7": "46VVWTN9wzJPsACkvCzrRYJ1s3B38tZrJKLTESxApwcJdB5sXhRbRmE53BzZFx92BmPFMgmkF2w4JaFueVkLR7B6",
  "key8": "5bzibDVZQs5Sg4Up6B7GUK6QQDBxgHeE47pmeoninubEAGnCfonYMMFh3rq27iU2vgXLGPbNByJUKpc8D6NAxYhh",
  "key9": "27vBRAm15sPEQzd6dBKjAEN854K4m2RaRgQMDSJ315sA1HsbgKzryBBimE5iC6ZCzvKDNXdMw6Kmbm23ht38Ze5C",
  "key10": "5amj4t9xmBRTzgD8JnDGQM5ncCtsJCNDq5WE35amuT2nXWMGjDXBWNugGbjFF6xviRQgaU3L7zibnsQq8EYpF65F",
  "key11": "4kfKWTZMLEL7bCr7jVrph6QsdMgqXKjrPTyUdR38DTnqNqZwNt2eXV1UQdw2858hXwRD8tvcThCzNhnthJcsTN9s",
  "key12": "127JAH6bvD5sU9ZVxSAqdsPF5Qh94ocPDAaazVvbDe66h7hT1Hj5FfcHDux8PhVuYnQ39ibqQnvqvcQT51SeHdLv",
  "key13": "4kcK9qKfah1VJcsYuo4TVYiSqK7dELMzaANK7ShnS5C6wciQnc5hZbsLXGWGFeoZMPXeVE4ibLdWHuyXt1QqER36",
  "key14": "4J6YZvkrH8KzpALWvrUth7ur948CjBM8bA8WwJo5XQFB2fz8Y9m2xr3ZPARPjAuop5csCthfZRZXkFU4RetA6dfa",
  "key15": "3nz4JWT8BBC53w4H2AJKgLt1FTQ7KaGmpfNzRoSdwSVmLqgUFQDXASRXLqwATVuF3nRGn6zY1p8zvtoh15ZC6egr",
  "key16": "BycgedHwBjQ1JrLLtUaZ1GzjzahsEQAkyMcsnzGjWFmVsXDJaRxqqUkcF5kmgknEuUxY8kaEXgbqo5rEyAmtBGW",
  "key17": "nf3jiEv37Yuqhvz6qG2h4d5A43FaCpp8LXhBD1WNDfSAJvwDMXRJvAhr5mAxuQMTrT163xPHQVPG5UfyJtZK2NK",
  "key18": "54z4g2GhQBeVB1TVNMFDMMChVU3G67KHSzAduzLyJdfunf1bNJ6BtxBMNJRSgfeh6ASKbtbyV1X8dzDY76biL5X9",
  "key19": "5CUyxaNiv1neEaNnesD4dyEqHNrccP14w1zFEkrdnifu82hLnbAKEKtLbgQkBPxnYLMtdMztPMM3f75VBmdnLiwY",
  "key20": "62kEyZM3q9HCfVmgbECcTs8UxLQsbJHa4aXhRxS26dBV1rSER5gQewuPkSX6e9N6MxafNYvz8FDcfqkqLTtqtB4q",
  "key21": "27QPnHoPwfzpFnnXtuTNRrEhJNgwmxJ5Jtk8fZFfh9DETWSeMs8SRgNdfXdFZAxASRNobQfM76DrfwFFD3L27pjE",
  "key22": "4vCjty4asC5Kk1RYDXNaPRCi9vCJnSKkKoAMr4jmYVv2VgxxtjEdTnjNfK52LCvM8vZXqAL827v1BxBmqEjkfYAB",
  "key23": "J6VZAfuKpDtUyVFj5741TgkecGEhU8XBwuXvGcDpGMWZ5X32hGtP3SuRtCurxRSa2moVk3RDGRrAmk5K9Ez8ZCJ",
  "key24": "PHKEJbeCS1aZJnrxKwYPzw7reeLiUMLdAgiXhPRs2V1nopXZscS6QAQF7VQHtZXaDTjAngNEiFat5PKeDo9wGZf",
  "key25": "5ZGuoNybPL1TCtD69t42A5kkEsob7sycmntb4ggU6jnHSioGpXXwd7DSRLVpFqCrHwWEhQs7pKXxErkBNSggsAy8",
  "key26": "4AGr8XNZzHn9nBLN5yqhR217yrGpaJypB2Q6LKvMQcaVgTCHC4ozP8AHDr5FRJC4qRr4Tu9L5QHsc6a1D1Eui1cX",
  "key27": "2aJ6k4DtGZVwNNSzgrcYHWctALjJjdcu3syT2Lz3TuyreXJ2ubWxAnk1T6qgb84t9FQQ2KD6G9HdEqR9f8obPz1o",
  "key28": "2xuKA5hALhyVosPtrT37Fe5Z6fN8YQQcZdjRyBhqjt5LjMFDTXwBNtEPC8sycgfUg4xqwm9cZPsogHaYq9NGWzdV"
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
