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
    "vSSWYdkDPzU9UaHDiyksL78SHkzFdJo3pS5UUQ7we4fyckFPCujdaAy8Hr5tiBAHXp81RTaBJtsigLUz6g7abn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8T7WwRjAVM5CMBfFMf5cqmBVNELUaemaUMpD7hXjXRhaDNSMyLP3nwa2sZvVUTiGY2Lph3dRL8qejcuW2mX81w",
  "key1": "vtW9NcjrHdQYAxhep9M6FHfzsxHTQU5xLGeMoPG9zu3NRe4pJeEevksnoS4LRdNyvF2YgELQi577tHj78pFvFVf",
  "key2": "5Qj7vLDDXBC63LsDa7eDz8huCHxpPZ2kAEQx2ZW2hwyeYGScXkB3aUW7eeHQf5Zrsq4qHiqjbWmgWoQ8o5ZLz8i2",
  "key3": "43FmBZ3xbtvrYeMHzvFj5hZ6UCRtywLg66BAhRjxEpxqLmZudZAnqLiqwyoKLMafD1ufKCUkPwVZ2Yt9JMCgmrZ6",
  "key4": "5QgvQ57TZP7k9QxVQVW8nLkyAC5MjETQiZ1pnpH1k3jvQUYuGU1ByUT661KAkUbPJcyi84UiWDGauX5JJZQkxXUN",
  "key5": "CqvmCJVCF3UccLdpH7CnYLU6K1wM68Pu4Lam3714gZJ5B9wu8jLrqf8GPd9dh82HgBCw1tZRuotLTwNqEVJ49kP",
  "key6": "4yuzA2gQGYcNSaAQ5DuXthvfNWGVqEDXN16K1SYFN5Gqd6oXtC4oJVetyRmAeF2yEA4kDjR6LP2ARTPNiD7qELmv",
  "key7": "34BUi44gu6LDtgPwGViPiPuEibQGwdqj8jskVbua1ZNGop3LtHSCmD2B5HYkUf42br9kQVMmovbA1EQB15sp8g4f",
  "key8": "4HXfs3nihkkS97PQegFtCPF43tMsCRbhtbCDo2vbrCKxbZa4LxxR7fBN4WVd7RftdKNr6JUmtPEfAwjmc9yzDzj",
  "key9": "wsLqbJptkRywTmPtrnMwLTrMfB7BVbfSBgumZKAuDy1CerjMpLjCetmZwxRZqX561eYCujt9R5q7W2mVuzDqbt9",
  "key10": "XYfChotwZJ8HyypWDewoq7oGQ13jBogfpVLTtPn5NtsQBd4WmiGWdf53Yxk65EJybazeA4wtma8AnSmUUrLCyB9",
  "key11": "5N7CnnY5wKMcduV7Bi8wzGdC7Vb5BKz49HKXwBU1Dj7J7Qft5VLnDBFXqBR29TesWvb95FAUyKDV4nHR2dkvjqtN",
  "key12": "4jMymM2xjxneHazDVrWZzmCLuK6KtdJ8RYFCcbF2oSov3Cn5LfvVAizBhn4uiepJp3BU1NiDxPuKtT1UqX2k4aUi",
  "key13": "3RXRH8QQPCkjkkiHRwEZtP7vfvBH5utV6NFAYCjjXGAWqHJhHUshFccTEsuBLN6eXMTX4QXyq1PWXrd8J5QGqQb6",
  "key14": "54nduTE76JgVAcooUoFWYdTzEW1eNotQTZKmiA6StU9gKRT8aVLxqe1NjsSUF26jhvv3mk7uJKHZM29QpGSV82Gi",
  "key15": "46qbHbsKkmAMbhJK8tcEQPygo9EpMc5ErvxTN9NdYSoPKZUtj4iD9xRfcin68VzxWHX4QqU5eMkXbHdinWH2LhX6",
  "key16": "4Tevq3g2wbu91ahzoKDAVX811aB5CMMZcnr7v6WseUd6L7VYrWCM6ukmat8Kh64UUHd44m2aZFaeUxTuiVKEAcsz",
  "key17": "5s9Z7pEsubFekrr92tTXjxZYD7NZVb82F8ASMwcR9ud3CqVw4nAaknS2dLXFh5huKUHJhh4rX5ZiqsbUH4LHVPi8",
  "key18": "2sSxA3n11nfFsVCCBeUt3yjUP3sgmrh1nTAqdVBcopNFWpmAigTeUGNMR7PfT54A7funhRSWH8H4SqaFSd8SgDrV",
  "key19": "dLSLu3PtYjxF2Q9wd3mGugHad2xuBgaNV7gRcB7Md2LSBVMA27xZNSNanikrYCF1Yxx3HZPmfy9C26qHkTNLJBs",
  "key20": "JkZs8k3QphKjA5Dwu9j6UwSas5yRKKBHQACg45m5AtLWnPRTj9awY4MZVTEjWgh7uoCCQNCfWM5CS9zuYtr7W7b",
  "key21": "KaLym1fNihh5hHRF42UGUSXVi9wk9mLwoXdKXkB6wsjUBAJzUfjaTxqnpDMUqaoeUYUJf3adzHNt9ZVBcTXux89",
  "key22": "3yqhUfn9LQ9SgPXBdVDacXHkY5HLPDTsRavx1keKevjTEF96LXBAkWhaK1itiB3Pzof5HSjdS9MzEUEvQJRe6LZZ",
  "key23": "3SF8zgtDw586qVPARRXoaPt5o84BfCiuoYwf5K6qtWWYzqC4kKBRcwjrNoyDjC99AsyR1EKjExp6ySCZchM8e9Xk",
  "key24": "5V7uGmZR7Q2RKAB8sz5EwcJ4HdVhkhxwguiiSWfZW3aGZQcE5qXA4M2CMSXsdaMvMZFuyh3EJemruqRc37M14k9X",
  "key25": "3iAQpLnj2qj9SU3kQNhuoVwxLf7dsdAmFvFVkAdm4dbb7jPPEywYygbcKLUq98rEu9LsmP32GYXiqUKFJ6hbasWY",
  "key26": "2zXsuqqjFjX9cetbqxuoE5unDh8bvw7pwSbS7GbbzqUFf72TcrXBZNEPa9L25MCeuZbHAQQHeWPsY4VySQmeSrWs",
  "key27": "5R8TZWhDBGAqsS4rTjD2SiwCbWxRD8FTd1MWCgnzUfUtHicjsTcV7zMVURqsspJVbu2jmKgYhDkwbJxM4me8rdpS",
  "key28": "29fnTVPDMv9Vk4SeJZD9Wcsqmqo6co1VomsTX5RiZ2CpcyDTmLr6Txk385Pbj2tRtcSPHMqi972TNkALcyVHQUn2",
  "key29": "iP9DDhj43HCwhs19cNu35s9qmCjrpDvSqAjGZ4XbVbkk431zxZaFySmxz9YrXipG1ndYqJzz4cGSKAaAAbeLCzW",
  "key30": "5gTWBPMoSKCcXnYD9NL6Xgp5hs4q1xBVD27HcVKutnFkFgFbqaxKf1BREtWLa3q8PSNEvyMo9Xa47JyBRV9qr7vb",
  "key31": "wtyq5qxcYoadHDXcsyHkjapjBdCNnHxMG5bNoJiBmEa4ea4JDnihxffvN5NgidpHDGemyebxNBatmyHMGSoCBdC",
  "key32": "5HAcS8RTymu6nvFRzb8dZnGsn3BanaozfiGGcteq1emN4BPyVU2dJhwXtUGgokHB4gW4xDhcnRPjYTbD2qz7ESBU",
  "key33": "56rYZWXkTUB7x9jr9MWzsZBAWVeFMTBN1JDmaMAKzp73rxxzMd4VwHzajJmAMAAouQmGX4psUzutXsXAXJ9nCWs7",
  "key34": "34Q4hWdcBrKZTczDacDfzdD3YYDu7qV5EeBvyna6S1YyfhPR8cBrEd55n3Z1d4uF5gkXNWXpjNviHeSYhYKp8dRA",
  "key35": "2Kv9geJ7cE8mK2sZPKYgPMGcgjHizyGDdECQyXBnp5mQumwEe574h8WDQM3ZERRzgX1yxSzYmJzGs7GfJ76F5F5t",
  "key36": "3YayA9bgmdevVp8X16B2unJL1zSc5CxqbzxodUbyU6exCTPtqb2EGGU1gDpNw1DnbtpNYf4j9SJFW8HbhfMCauYq",
  "key37": "3FzTu1wbyWghfCz6ZwDpZ9SADkWjRyWt5PXhADKWeuvAjtYTmXSBBUXzBs9CnQJ8DNu1kX8K2vdm8p1ciCPpzkjW",
  "key38": "3bYtWmo5WnewUMM5aXhdqhjGwSJ5SnTzWbb89RgTAEvtoEXUmFyHgaezTi48pAoiJxLGFccjoELXJdRWD8kusteM",
  "key39": "5KTXZ9zz2UDGtGbXaaWJc23MjuYqNKSi9ix9THPaceLkjc3JEmAWQxwGWzpQxyvJdKZm5BVzBvyCeghCMxQPVA4f",
  "key40": "4XdqjBij3PPxNadfiWVFHyPx8irubtgyihowx5bPiACiYdRP77wRoHRUCLFqrZwHcyPNgee9XWDsdS6aMYMuEwBP",
  "key41": "5W5na7WEqNRRSVgXFDEL8tSVehM9rqXxZ8zuWHbwBubWFfSSGGorcHBq4jF5i6F1rUKXUvq8kX63f2MWh3x5yjDE",
  "key42": "RJDkeFWTkbEnBktTME1iUQbXDUr3d8NTjv9tWRRGGiiMhb1e23C7JUpQd6DGybXab348TQnwq3Jc41mMm32VWdx"
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
