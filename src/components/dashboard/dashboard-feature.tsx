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
    "2cWnZzqwHo8ix8VVPQWyGGsHxRPR4Xia8svwyFjvDNd8NEUpkonbUnHHBoKcNwDr1cZvN2BYN429SZ9uZHwU8Q8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p5b9MB1tZQProBM6neTM8b1sjT6t5kmx6e6HPq6LqbuVatw3KREGCNQs8mdC7iypyYvkJ34NjkMeGXgTLwjzFtk",
  "key1": "4j3EujdsD5sf8u7tCMY7XY9d5E4ctRFNCVVwdRDHZNvop1iLYuAoD7LX2UYFeVpsiwQkRbb2coogBjvL6mK77eXf",
  "key2": "3K64rYwBacKpcLwryV6W45VYm8hkBsJ1Gm6K7UDXz8LjanHLYSGFBo5Xt4yjWE6pxAA1Ko4w5A8LQfAwyF73iLX8",
  "key3": "2xK2s7XdGJTtKGaK9Ldic4EM5X9AqZTNPqmyrdibHr1MwFNcUvYp8TH4aK9ZrRrUwdAvuqUCoWStAeab38vvUgYg",
  "key4": "2AKfFBCE31A3fYFidpywXVkyqhg12NgigxV4Szai53WGW7xhq6JJJUJiju4mzYeQF6csjooYMKmg1fxXkgHDdxtc",
  "key5": "rUp7xvprTCzuMX82UftfAVvSejpnGJrzQAa7PoTpmRShymbhF85vBg2HoCkj1LDz4HRy93udq9UUL3Q2Z7xdgJa",
  "key6": "7wkSpkXXuAXc3WHeinowMyGviPMFMx6jztUpdK7GnKe6zVHnvfDFDub5piRKCAyPvcGdDyjrfaNyCjkcM1C7P8f",
  "key7": "5xXJK6BvVd4PG649mtFSwSEMUxB7yDCgyYy6GVMa6fuEFhcJ4wkzywdtkKF9QCYnuV6UEGT9Tvoa4BtfUw9crvA",
  "key8": "5RoCV7BJ68SQhjvLvZtJKvEPMzukpMG9MePmcNDGwR7h6Vq2uawxQDq8AZYHfh92BBohHRk1WiSYBb8BPw3kSDGf",
  "key9": "2ZgkQtiVKfZredwjjaP9T7pTERbyHfcGeomgc33p14fFvgwnc23xKtEGYmkRBCQiWkDBUfYsAKWgJy56aGoX8yzC",
  "key10": "5A3hvgg1r7pVbk8Crh2M3NeLSnH4Gaym5KnbFV7VSihL6tUUohNHL681fdGx1YTCM2wT81BnU34fNkoaSVek5H4u",
  "key11": "34fAAXoFRToWVi7ybZnamimNv65QYgLpjJBRCFcyz4KtvWNQcpxYskikrCWXPR21WgKFmnre78NAsMzeMrCs22Cn",
  "key12": "disz7Nw57yN4k6spP4YwyuWxzCNK54dVpyqc9TJfBWVPPi4gTbZwt4jEvdKE8QZDGGFVcgrnQG3FsNamXDTNVWS",
  "key13": "3qnYdVDHQ7Gqhigm9sJ4JwTVXUYfFs6WVtY5YkUCRBD7NBC3fnLRUAxdFq1iynyjiQ5fBSnVxkHF9Fgo3YrpiGuB",
  "key14": "29aUrgLT5AMqhXHoKAxV9rqEiRe2qH4VrEaN1hcSwpWqeAMVCWWRHXLMErZ8ugVC5Gyycd5Lr6fcZeF8Xx61k93o",
  "key15": "5MN8uoY2mw2fRJP2r8BcoewXAETyzKkq5RYWn3veFPNJi5tn3f7oUdq7ibs1PrWinvHkJc7c6vmAQqbWSgq7KBPP",
  "key16": "2c3Wu1FRRCpgJiAHndeyt8Gyt1dCqH987kxxPnxZUVL6MHtBCEb7izZHDhNffL9pHcG61SXR2GKiQyYjSDmQhD8k",
  "key17": "2WucwLrZ8hk6Wi9sVKn2siJAKXG6AsnK9u6Qsb1aDrM4inYCDbkAYioBMuxnDqbu5Vg7dSUKVtmC9GpnSx1NgenM",
  "key18": "2XcRhFMAMXpycL8MKfUSx7zgGUz34Nrv1qnDEHyrVkyHYidRtQx2v7naWid52tCoCYQja3GTMcWXzXzamhNNBzsD",
  "key19": "24b6CPdKDfBfBTMJMGh8qoyujnSi3A6BqiaCFymPZ5NMULuyJr6EivPWVNvEy7Zjux5sgREzvH6BJ8GiGBiefCPz",
  "key20": "2HXLKSQGSwrzyLjR8ZSZy6Y9rW6mXJpZf4P5YyVC8T2NkVqTW6iPgBQMKUb8q1gXCgChif2aZTFKAxTuR5bcZV25",
  "key21": "5MXT8oEqbs9MZKdjj1kY8hNeyBhb85jEZ8k1n546ECoxUAoVJwsdRe66tidoGCpu2WGiobuuU2wZ7RjxPumQsKJQ",
  "key22": "5rS4GPNifQgVc94WzC6KQjKyq2FSSuecTW5z2Pw4KZUPM3YMYYsmQgj1wQv3ZzDsSM9PxAKNX4hDpA3hVHmx8iws",
  "key23": "2LCor6egEVb7kmaLhCMo6Jz2Y9dABgZrqtdr3gXUejypDhyHYMd68QARtp77WKSrM5m1jGGjweSUHSxeSQZuzPpU",
  "key24": "4dbP1recHrwf86adAWwgoX5gS8XsrqKwYm2kBHq31FTn61Nvrgkd4H7YzMMKCSeFKK5pW64tyjgza6RTK1ShBhu",
  "key25": "JYfUEa2GShRkQkwViAe8ynxWK9d7sg2Ee3nxCdAafSfyVJZswwXa87qWhxcsPD9trXN5patceukw2D7daYAqqT4",
  "key26": "3GsckvfSLzNDN8gsyKKbKRK42vHzhd8Wkmjt5ybj9WtPGsAidjDvv44Na8ggMgzuYjf2pt7i6CamfNToksujQLnA",
  "key27": "2Vmtrk1CGvEjPVmiEdrVQjKXCRm8emTCwACBQkyvZ7pQVNMbnDs8Zij5Fmyuu87F3qx6iHzW2oMbrJQjfdqVm4HL",
  "key28": "3qjqwZ5eNMvM3XDkdLeaMVao2GvjdboosEYNmzNQd5qFM9B1Q6v8T2HJ6DqvvP99Hmvt6m7SYPLBsGetQMuqk8NR",
  "key29": "xZ8qRdEkF1e8BoRxXC8uvFuKD4pBFE7pH26RVpCeyxVf7o4VRqq81uCMGrBCc5Y2A5ykG69gvACPSw9oT9TZbia"
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
