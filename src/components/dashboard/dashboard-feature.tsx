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
    "4YBeNUGYTK2KHWaH6jkNfeQwFciFLu41tMVhHcnAx6sbbtVCvncj19fTnA1rFzsQyVqPvHruxY8Xkq528Zx5GeUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3EVPtPwtZpjceiwxiQ8MR6y2r8AagGK3hQwjNhwsPMYhU1TAWb2VXN5EwHJ9XtLAGDUaEJi8Jfo3n7XC3mr7Gy",
  "key1": "3KkDFtiFqkQZCuRDbMQcWQHannNdogxnBcWCaGLtXW65KiJSJFGzkgA3T5AosAgVuQo859qq7C4fYyR45DNmYU3c",
  "key2": "62uDhLH2bBdJiLU5AmSUkfMTwN4GuiLyFTNH6CxREJoioT5dJnBjJTwvgrSTWBD9vYDzkNsjCvmJipdoiHnF6UQy",
  "key3": "31pmhGFfvvrvqPxNX1e94nnissaZYU9Z5qD4aVN1yhft68apS6PrvFANqirGvKtTtxPDjhJYzjzWKyWkgeVs9hso",
  "key4": "3Gp3vWcHof5FNJAdccF3XA2JuRp9iEbT4Qv9wHvCZCVf9KWoQGrWZamAri5rcFd3tJBaNogbUq79ZbAgL1LCffJn",
  "key5": "4nEQPR5ZtndMNpKiqWpKbVARhogZ5J9hPvR2GsmuYFKvLj79B6huQ9gRLpKa5GmzssYEvBGFL6Q7KysfAi1BKgnj",
  "key6": "2nbB3Vgt8sBGtZmfSTHZX2BAgEQwuiBvvS35dbfmwDnWb9hZ4X6vRQupN1uKYib4Gnm4ZfNyZbBNcqdP5bQXqLnB",
  "key7": "4QYmMexeathRh6TUUfbrkzva8aoTMLhxM5pPp3cUoCNYZWhUTCJ8TkeZXH1nTW6jg5DHS9W5aUZUXrLrmwHG1saz",
  "key8": "3fNFhyrraKRf6LLMVMPw6gtUs1GDVKYcpKj9M7DPMJXn5Y1UXSD12VvB4B8YquFGo3KyPMJqVSnwKquNc2dRp6vm",
  "key9": "2S4DaMLPp5XmX7A4cVJaxtBea4eWqgHuEAPzWu7Dr5bWz9uo4WfMiGQCDiWbCAzGxWYi4zibw6AwxRpYMa9Vkv7T",
  "key10": "JHevjc1RbEoJadJuRL6ANuSnNQ9Se4CgmEQvp1x1du4Dyye5LRpPubWobwzmvjR9DH1etZjsi5YTygLCvkiENwU",
  "key11": "cgzZgvH7esgsdnQX9uzcihJheWjGJ2sz4kK7oxWyVREskdW5eVAekZAf5hZDonHRaJuKUqpvaBi4xxV5dyMCWVA",
  "key12": "ubZizZSZjLU179bKY7KN8DUipZEKwckWUqDctfr2hSgxkRvei4Rwf2wpQXy6UhLDd9YYHbBVqYbNVDxg19PNTM9",
  "key13": "3knB4tZGyEhtvoYnRwxyoo1B9AWgeLq5zvG9VYcRqKcqFL2Cr1Y87k12xT5jNeCzAu1Ec3NVdbaTSR9zkwhRHh41",
  "key14": "33Eij4C4kusFp1VzAxUksUkptqZ6px2SfzrFchTzQPP1SgM223iS82fXcoBzAcGkRDRa3QLyY2VxektqGqVvhC8V",
  "key15": "e5USUje1G2cB7BSNEFVyBrzsq48GRpG7Ee1GrwLvmSrx8ocf7i4azYDQRe9bVQ4YDciuF9A5kAk9q7NdiAN7j99",
  "key16": "3VcAu8FcdPwrX6kZHrFPkC8Vouktf8DP8VKmA5UxLt8bkLbJ35V1ESEiScJYF5dUzWvQuqYXRwasRyYEBKuTBPsz",
  "key17": "4Dzo9uFqQjjMbXGNdXvrAmbDhN8WkwGi9Ztt2yKUwNbqfkRMU79uQmkUg8cCVCEozkZzzdrWvdTeY17r5FQxazH6",
  "key18": "paVuyZU1cb2LbQpqN2NwKUuTwanmWY37AzM2uMAtgcX2jNfcp3aXBvtQjdg896pFYgN1i1csJfrr8HZa7VdTkDk",
  "key19": "5aHBFgnPJjBShZ5HgV5ctPGJrqZvQQ8Qqb7J9qGRcczXj5CwTWxYwEHz79kxqk2V1m81m4Rpc9JcAEiAAA9Fb17a",
  "key20": "43URHZdmdNCZFUJzcorn46mypujUxrtRvZw4JuvdZwRyyaixWJNR4dp18fQkhAV7kDhUP8mCFV3oWPvwxQuYqeP3",
  "key21": "55PZBzuDweJywZMo2K9scgSTUb3kiJPad5wDSxkkZSPa6Lpd56jGST3UP2rfTQ33LMaLMJiKSCTHciT4dVFpWZku",
  "key22": "4FqheuzqWSyHdnLmDVPfKM72SQLFrER5CpM6E4Fs88bzqrAriGRHBMRL3pkTBtfd3gqwLa1uCw1rKmpeYQSQWN2F",
  "key23": "4n4tGxHPzXZMeRHRDAkC1ZS3qML188ZvcZ7gjCkaWm5g7RBYydU36QehDAigCMJFbGfm6kB1m8zFafVHCN4bN88b",
  "key24": "2uSrqJaySvaHVGyuUnXvgtYgs1iRz3mZ6tU4iv8StJg6FT93NP9en4ERxzHYMGWM8N16Swdh9dBCwudnBLtKLZsK",
  "key25": "4RbAUzzi5jSuhBF9GfMyXBPEdyw4Q83ocZ6SVpFSEZ28pNEJbGUkLQWp4MgQAKoimdMrthQ3SepiUajaqLoGjLHx",
  "key26": "59ieUWcvc4wia9kHmmcLLqXUzTLc7KrCnCmcZtfU4oSDbz3ho67A33GTdDfE5iwJfKhMUBhZ37344oYPFLnmWMVy",
  "key27": "Dsrpo929wssRN4wduMx4GLb2E9nNhZxy3ug9qs4DDMJGh3exJ3zmvxk18ABG5fruBkwL2pQJx1DrNjm5Zgmqyg7",
  "key28": "CndccjFxKc46KERtoZYgfLLhzdg1bCVgNC2z2V2d7Sz15pNEQi33iAeJrceKa9iDGJyJgn97aD1iYqerV3762FQ",
  "key29": "3ZG5gPyXXJkRRftvnx4bt2C1kAqiz9TGPApX4aw1PJV4W6y5Tpwfjj3DFWmp5YiFv25LF5metXv6SPUwEwnwWw2q",
  "key30": "2XKD2uguqG6TpyTToUucMTu6JXRrTLVyY9tQqbbnLctLiS8k8DqRFED4o5AAg8jGawbtRAwj9q7CR5DKPB9XC4bw",
  "key31": "2RmZqsoQJZPVCB5SMK7yBw2jF6jdfBqarjVL2Z2vHaYt2fhfUYm8kYKYeirxb7fCkD8CVjj5LEV7B5TAaExcf4SS",
  "key32": "2ErjaVViQpwqccfKNPZisn69p5mZ3QrrXRViwwK8RFtuwT5VkkKpytwBHyLgn9vzTcipaYNJeUMV8UxyrrD8ChZb",
  "key33": "5ZcWq6X4t1wkC1RVcSqRxzNTyG8JXSs1HY1ffgjBdqYQpYkuWD9YcC9skDfvFSLoqzHL1798sqkzvdg1EYe683aJ",
  "key34": "2tQ4nNfDTmbwPL4uw7wZManX4QMjmTQxfsvitkFNEQizNJUqU91HHaS7X29WQJcr4MedRWmNs6TmJkyhhURRc7Bt",
  "key35": "jAvgrDB2FuHdZsphUPMdDxgQovxmpRN7wznM8Bhc7wN6FYp1ry9u86EWDeQYyo9hitJtBPNDNTjqeYJLoCW7DDv",
  "key36": "3agtbzgtL7qFPsdoM12LWjBZnjxAYJLooemg551QBFNjYeHz3pNvNAMYgJDAm9seZFB5nmSTVpj3sKpK2xv4cpSZ",
  "key37": "4ZjTkJ6wQtN2tUvPMhrdyL3Pp2cfGFurQ5vzDL3UD1NF3LXhYp6kh5TJ7cMHQtdRjsBRfa2dVri6dzoBidDyU9cR",
  "key38": "62m6anjtdKDC7MRAyktjX9Dvz3KbQgz4nYtG3MRoqAPdasokgzEbJN622exAJ8src7iGCe3CALR3WL3TqDkWc7pP",
  "key39": "4Rx4cPTGynHUb1vty7qSvj8fx8eA7uw5GXpxsZ5V3KpVmpErjwuZNAfYzYmogyEdu6dhwaNnd1bvqEbhtx8PkGGN",
  "key40": "ZpBezYMqRMx5t4QP7P7tndD5pTdgWBqMTFAvr4Y1ytapfkwtYgSCcJVjYFACEhJKMpg7hWYLSmHwS7jmd73bGRT",
  "key41": "2E12ZxjcoWb67gzBo4z1rHTexmHvZ1u53CLUPyagCK3XhfoufcbTvWJWYTffErzmQrEtPPb1R2ZBQdpcQsdNe6nN",
  "key42": "2QVhRBRY9mrdiVpzSxHMMTcjYVjuXymnaT12jaH6K2x6rJRTib5NrVWVybPjJ1m6qQfbgBomesBDUiCeYMSz8A1g",
  "key43": "3fuBRjzPBux2Xbtcrqq8LW7oSPa6b79xnPX7zdd9Cd6VkgkJUnqnzcbHqDtRpjgoh9epmUjyNoLKoUxZ85v7tHAM",
  "key44": "4JexT8eTAT84fgpmE7AAXaL24dfVscZjwA95YaMa7iUp1pJWuJq2WPoYHodgXG1foLP1KkduU14smsJ7zjJ3DkYv"
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
