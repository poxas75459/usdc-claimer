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
    "UYrgBN57hQHKWX5fzBBxwgJ156qZiBcbDPjsL14SXPsSTztreEC4EKzeqsDA4JNouYb3umjq2rVVmVGoWw7U6jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4sUPLixp8xRUTShhM8XbtKARa5QXMDfCKz7LEBdAQD93ZPnaCHQH4rcotRpMKL3XCZ2q4HqSD6fA16bYpPTxMH",
  "key1": "3epjddU2aTKa5FwNV3EZrQCgokRjRUnZvSTK4nusTA8XX3YaHnyeWBhDxYqLydGdhRicKR9qdFniaZuER3Vy6tTk",
  "key2": "29jQJSdabLEAXHAhEAaV8VQbuhU4hJ9RcsRDDMkgjNL1xu7L9PHgnRYHP8r53WKdZfyJeLJqyUm67FNiP4BSBNwp",
  "key3": "2x4coQbqMGuyfhSBzmMwY6xZA5mAvx7enhiw5YL5QKu8Zp4TePwu5yL3NcZfJCBsyBLGSHvQCo1ZXgZXy4DUKCAz",
  "key4": "2FD9FRDRa3yPx5oAjZXP3VVXo8vVtXkACCT8CfZgjcMVzKwHyXc62Gz8iNAx64VBfrtQwHmq6d7nwfw7maYvwFt3",
  "key5": "3wv4uJQnWx7NEKEqD4r14kEUHiDEBCkHCf7wnCmJvpqiiXewXYzZvDpjhaM5Pcc26TwAprMePqWFWBzgAHk6ysMN",
  "key6": "3utt5j36kfwpi2LosMHpe9iDxebfvvrK3T4MvyndVE92DnboeySC2EuESzvGK8JGC8PHPRWUtZK24XHFhYw59qBb",
  "key7": "5FftzuD9uXjNZDgw59K4jQ8uVCmQCqJXpXvyC4A6djEQLdR9eH41cENULmDXRpLQprtStAox5CVBLdyhpMfPsox4",
  "key8": "2MzsHD8DvZ5vEGGJisLRoM4ZzuUVqCTipS5hEn446czTfuxYTBSaPY7QYyYeodoKc4Y6D54fegw4Z518FLdGsMYa",
  "key9": "3S82qHVuknLpxNjeu98c1ygLpuL5SGzYeAS6hzNTLbqfUtr53sZxyYR8LNBTQ2pmmgBgbriHzFkacjx8UQ11PUPZ",
  "key10": "4DVLoaMNfNiSfjBPoDwuqEWMz5TGBnLPLpgpaHPLW919Hs37Fsybq2CgeszYH1S9CQMDy5Q85nm6yAxfGa3dVEeC",
  "key11": "34jGaFiv5K2Corviwf9NRHsg2b2fVpvUzjTjxJBy42pjghKtDiwLwYPEFcatyqcwzXnqGbG3vipwcRAMA571WazH",
  "key12": "34PtH22ippyDgHu3Nv6StRotptGn4M2onK97xVYKRavgKKcaZgfptb9hhpeFoFPcS7qiUPpSmMw9t7ePYk5bs9H6",
  "key13": "2JbXkJGZaonrZgXp57xPdYfdf81nxW1N1ysbrQRUpJ2RbqqWWSQp3G6xZGJ6L849nSPpYNSTx2AoHyZDKH9DK374",
  "key14": "4PKCnMvyueRQKHWusHAXhwGyekAboYnf2wADwzATqehMxeDHBtkiL3MJi5SK5hTB8Aa5UnjYcqBox1ro8S84t2aL",
  "key15": "26PRVr3DiukHwF8u3m9cNJ3HEGtX3wpSVvFppKNdXuPz8VncCoRqvbFQPkh6wioWxXa4S2KBcjaeSSqn2Gfb3Bsq",
  "key16": "3RKtfCTHrHY4NpT9NBVePJL7VWAt7HUUKFzCvpWzp3aoB2nu4a75r5fvVfc3qGD9ZBBwGn9d2aDcdNpySgJhMNAQ",
  "key17": "4J5dtZAzPmiW4GYE2miqh6PzfUp964beHLZHFk4Zqo3cpqTaHSqkuuNBwjmvySaEaqSL4tXd24ujHnGiQbn1Lcey",
  "key18": "5QmhpStjr1qwzNAHnDowarzbxGrKRsGPZMgawC6A6GnXb6zRFtsW9o3NCg3jHjTrwDbX625ryiajZdzkACBxpFzu",
  "key19": "WBCv9JoQTCvHTzRngRho25oW45Nf5Aq3Zs2t26qqC8n8YkRayWmtdufD2azk5KwLSf3HGAh2L54p1vGN5Rkivyc",
  "key20": "66CFWhK9VEHFwAGXoyZbcPxaNH3aWgffrxvHZ6zuHHQiR4HyDWd7EcMVYPit2yJwqWaXyLpzqbtD4EYxPucm8sB9",
  "key21": "pj1jCkRbSgT4pLBieyHNDdWDLySQBAAXoDMQqWrFgLrw22iJRgRzVzhATHsCoWjBjg57xN1mvBzEYJMmhoqjibN",
  "key22": "3gJFpF7r6CQzAP2JqTZn6Ye3zT7GfJJqkNVJtZQvLb2ksTcbJMNrGGsdoRBan24gUyn6DnEoNAeBuxvUc27FAqfp",
  "key23": "P4tR5oT92g4iQWKonNBuvtB3JKADpwoJqXzAS2mSuUUaTeM8nT1DgiVH1Y5p7JiLPzSXCRecFBiG8uid8JzUmb2",
  "key24": "5KJATufCDEcHEaRSaCrbAUtLZ4vSSfMK532SUUdiRyZCKt6tj9xGfTpNDcskzZEyDURUuhnfaKY6ubRzaGTzvAgG",
  "key25": "F1fzQGcfyXhgMFrFN9YwHdU3nhwdbAuxj81RrNrTjyJjrrrjKJ1BxLqgUYCTh8bTHv6oskkLzC3yGW2vfwdSnLM",
  "key26": "5XizEuButbjVyzg3yg99BVBUD5VaxV9ex73su1v1ruBpw6ebKETZqoJD7e7pQ4GntBxoeBUQTUaBSyt2EZWYccru",
  "key27": "3gqdKXhXvE6hVyJdPLePnvH6VAtNZaLqavqUSuUqUaGNeCaWuagcEmqqCgbC2J3Cuwm2AdzRBdqNMbbsYN4tgULN",
  "key28": "5zLzmtDfgBbsdSBHhzEkL2SBFv6QcntwzKhdyZPj6vPRYAgUHHv4dmaxSZMckocvnaah3A6ouAv4sGMEN88FcAo1",
  "key29": "65BFyyED38ymHooYfAXkUXPEb7X9hSRFdSGQygRUmhZKAgQ6MTV9nELzyw4ytpGebtn4hEFoUJuefHdi5vCoU5RP",
  "key30": "3FyaLTwERi6EExYyxuGDY7Trf3xUrikDFcuodAAaiW8o7h9FPteZ9ZEnySFK21ZNPmzo15P529aTwwTwQT43RKgc"
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
