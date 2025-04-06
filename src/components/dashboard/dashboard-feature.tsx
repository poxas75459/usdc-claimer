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
    "h9F6KKMYN1k3AMykzW2PYmSV9wHnmsh2bgMicyXGTKBgahDXxv312tAjZFpzpzMKqCjuULCgWHtq9BtDT1fLDb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAFyykqpAtNBjYnbepBpFs5x9UtR9kULAFyF8acjfzfuQkGnuaR52Q8kz8mKxZ4mdgvyQqqvbMRK4JdjTRH7mXM",
  "key1": "4TpZBHSwK2x2YNXzqH8SysgEKrzmzbZNosXwWJ9YmEDu6Z7Z69vgkDwRjAaoTdLJo9kp5EDhYAYjgfoUDFEUGnvU",
  "key2": "4g7QNEKyMAj1RewbYghtVZvp7Q6dyyH5TFJzAdH7MeporzpBBZixZQeyfypA6PfX5Jtbxb5g1jYyLEcGVQoR7bdL",
  "key3": "3dX6nsqCGEekNFLf2Haqrpt4bLHxwGQkixoUJSwQqsc8cLm4bKESvvGNRGFKYM3scvnqygp4CpPRjtpmx67zAc6S",
  "key4": "4ErbyzioUFVfiq6c7iJwZ2uzZKSrPe7fBYoo7KDSjbVpwyLvn3qF1jkMDkQmRm6skWLtuuVb5Kia24h3pCqR4UWs",
  "key5": "3xvqQcmFkavEjnPTEQiu9fyQJJN9AM5pryLP1BiX25oWNVKDkp4wENKUrhDkrNtWCKxEzngyHfoAiFGn4Dk8ewnq",
  "key6": "5iBXC7RKk1zQKoNJwZLcWMVQusKhPD6guooDeVYpCFBzEUi63FUhdWWghAQMdDMqRDpDu8wn1ntUdxMsRumBpABc",
  "key7": "4eD2sKcMaQ1b8eYsbGL8z4drF1AVYRoJYom1jwV6pRAyjfCDG535exen9pH5xeExpFr5mwMQpJk3NststkNnFpzX",
  "key8": "3ZnJEseyoXQEMqfWxZRvqhVSF6fBy2juRbE59vRfY5pbVGcMNZnNJUWem7bYbxiuR2YGrv2JvFRbPLmMAgukajuC",
  "key9": "2CvgEEUCw1nnBfk8KsWyL3fNshXLDV2VQUUXSkVNwVPdV7RAtu8SwApm1KgEZDj6yvEf7Gxx3ma9XzaqdQ4AiUu2",
  "key10": "om5wZ1nRKcWqRfkthN9goff91xsN1ju8RHEHMkQr6e1g9T5QrnXQLNS45jfHTzvTzirrXJhQ7a6DF8SX2E3SBkS",
  "key11": "XW8yePBBhbPKM3DH9UfGTJvjToe8LBh2NUscYW46jxZEN2Dq7bBNvQPxiJctPhea93Hmi6B6KUi346fXmQ7MdJg",
  "key12": "4D3fF1wxA22df7NnwkVhmLGhTgunEyyLpA1PivfpMRchhpLGUnGwaszTs7FVSqncDYDnHeh7gfBuzH7bDKBFzt1s",
  "key13": "rB4hFEdJfW1TrAKMR5yBz3uuav7dawu8kaw9HJHwsnVwHtACw7BhqEfqxPdGA2DguKNaLTKs1VtwnUmQLdut4uh",
  "key14": "j7M8cZyaFVCj53bMyXLPSxHVURDxV6EreDgtnLTdxTi8zjVS4ri5Che8N9c2JCNgmsFYCVQc9aWbvP9UvUWXAHJ",
  "key15": "333nd5WDBnV3WXjVbyLn9MWGnmMFgQpp7Uck1GmVj48F3dfUq2jTg76mgRdBcidtatQe6fWAzLr9b2Ve8FZ8y2wU",
  "key16": "7ip11neUp7f4y4wpsedqxwjWZS5dzspE1zyUfVQvuAnRPJM2Ybmsv385VhgcYTgj7b3XARfBuMH6z9YEXoxZSDQ",
  "key17": "4yMZcCHgUyc5xjnihmktfzCPXZVkzKbgPBpGmXyGoDZpqW55AeUYnBqiUiXMTYr1JHvJosxMwLZGFJAJqurNFbRY",
  "key18": "5CtHF4y8k3BnWW9RRZB2rdFqu3xS9KnDfoXwUeTNg9j5TPasNJh9miKSjjEUqRYAUHu4seUM29RicFjzWgyhWdoy",
  "key19": "4TgiuoWKQzto7kZJox3hzVRvVQ1BfnCXiqo2uUC4pH5qEox1M3eVKNArKRdikNHerLzns86mWAb7BUsVF7ADC9UA",
  "key20": "2TnJU5XLj3MghFP1EVRbbzowHCbaGjjDhAQAfc4NqUZdPRmjmE3AZJnb2Y27PVp31Jj61WC3BbFwiL9kvCCDEFbC",
  "key21": "VYtFBU3DGvttpw8BA3rrdd2gwGofkWpL1G1KZwn15VUwY28Ker2znZfpbMHVmWYmHGEEyYvpV3H2X2Mcywaz6g3",
  "key22": "4Z5fA6agoTidGXyXMYfpyGJGGSgaqLjq91j2zG7Yd5A76jMGewLo5M5Y7fixPt43rCXXQAvQJZxbr8jxW37fj2Q9",
  "key23": "sGqUNZ6WnpmbMDoUPZ9kBvDvAnAqu2eYnGUSxPSfgDvXvZmLt7z81KpBsihPwQKBBnGd9vpcuH9c83S1rierdqT",
  "key24": "43boLxcna8zZZbi3g6STG3Wgfo9NJKZPpV6C9CZKUa6WwiBdV9daL8opkt5BjvHU3LfXRsUnME1rDwQGyestQbkq",
  "key25": "5kkvsVqpe9G11eC8U3pduxqgz3x7sKE1dvPFFKcS79dBeiWMiZ8gJXcZUFxPAqfNj2XxR26u2F9fAbUb6ybGcmZD",
  "key26": "2fE33uXRuWaCZC2zpz6BNagJco4qCQhE2qKbbTSch1kM6Hpz9UJU1zoWvYwyMNAxAngFzsiTdWtSHJ3upi4iEwRz",
  "key27": "2JhqUTfr4bxDn1aBvtteGAKfWEo9CoFbbA6PfyjFc8P9cVEfHPWDC78HHZG7QnQ5xdMZRM7qygiTZnNN1DQBgrmL",
  "key28": "637CbzNhs1EUcPxqXFAQ8bJvGCzdG4Qtwhw4LtqHRG4XZhFf2qUMfCRxUN9HJo9XjdaSQuZrcmEGC7cwU9dMkARM",
  "key29": "41AEsMzS2LD5HpdmRkgFjyKULja937DSb2x6ESayjRgZU1ANeXA1nnV5JMGZFcSfxHXUds5XfNVgHhjrEsZo8ANc",
  "key30": "2SgAM5RawkcJDKpNFjA1W3MVCRMZywe4sVvaqUc3fKjYiHPnSUJkm8cTNjBfSrR4mCRrwoagDJ39CAYRFAu8ysB3",
  "key31": "35mTfLzhDbGJPNByWbjNFNz8uduYmResX9QA7AjgHjEK97oszvh8mUpczPMujn6YWS1Tt3BUiJ91R6LW6gYuceyv",
  "key32": "4HcmPWLTB5QrfGmbp4i15LS1hGzJm6yMonu7DJj6Eb9J9pybdJZ6Y48RxNFwJ5xg1fumVugR8rFPvUA3SXmGdck7",
  "key33": "66gtvYgei8phndsXASBDuBYpyWBFUH2n5GLWWY3Lwj23CkGWCCSuNRafzUX5cfmwVUUrSx9ZMLJPm3ZYPpWH3cLi",
  "key34": "3i7nxhDPUkgxemB5SCeTy6DN1zKCc8ZANTakXNBJD2htrdDyoxGMYWWk5VvPSpfp5LhYAPdtmp1hFfZHW3j811LB"
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
