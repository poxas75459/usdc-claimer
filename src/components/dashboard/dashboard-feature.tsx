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
    "2pG2Xo52v65KUEJ5gG9MSSbJBHmQ8fAHd4MJjeuSJZ1z3GjJLcNYW1x9m7BmvgmP7XYjxeAhb1tU3jbXLeLEctx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkuLbNBUkXitykbdjCyLiKTvKeBTjez9p458RnGhfdinzfSDznFGdPN1zuzSWrK3dZinWPr7ZbChuhsqcA9tEEy",
  "key1": "3DsEYyLBDFU6rnmmNGwy6xe2Z44sjWHSB55cDpHWQcA7zLTuUKxLc9onErPhk5r5Vh8uRX8ejbUVZvuMVH6xGAqZ",
  "key2": "VrLhz7YFhpT5kGpgJK8RkTqzLjwPGGfiNQ7vMfoDZ52Djvz4SBgNQsCTzT4oCba5VagS2ELPZ2d4QNHvEKs2UJ9",
  "key3": "5kVneiVubs2xju57SagPX3WDNDqBm4RaFWwQCrhuRb8c3F6o6MaTzAoy9ZyoQuLhzqCFtGZHscj3mZG5JKgoN7nm",
  "key4": "2ztgpeuDfcCRkpbYS6xDxJ8w25YHYv4H7ZnoWczrsq2qAvHr7S9CtM8bhPxKHjQRwaaBkgKRL5DaYtzR1dTjRSVm",
  "key5": "61upzhe9YhNdE1qr95v1ytDdGzbmje8oJwFZbti4H8tkFFBv3SPEdKcTqxdSrbMncP7vd1XL156snj3QAyLzMSsN",
  "key6": "24hktjVnFVPRPA14ywv5hGiUUFzVhCXJRBH2Sfq3nkQgwuQF24FV5WTGzp1JMnaeX4EWf5EDwxXWWjdVTuBHWy3s",
  "key7": "3atnR4VPaeTEkJnvoSGXeP3Ay4LfN6YZuQS33z7vLPRKVtJc1f5WjxyMCeQDxXXzetNd5wpfidePHN8fyTb67wha",
  "key8": "3Jtd1XjoMYKsgGuywyrLfP6wHVdDLpGREbdpefAdH3T7q1CqJpKZCz1QQsj513UXtBSLbwbWThSbPCtzLGjf5Jka",
  "key9": "VrLLPYmEpz9upmBpRrd2Sb5qPbtMN6GU7apAVaFXijcoXEHc421A9kr2RiYJhCCsQ6zXqvYzs5Kib4ZBRLRNpqR",
  "key10": "4oQh53pGpDWj5CS5vaMp7A8h1gN1XKZM4jpbcWJrdsRHMvWZhfLkLxL6Cnd4Kp41yUrtwEarwgaGUZDJyf5B3B3d",
  "key11": "3K2r9GTqvYVY6t3t8v64TzD8LasehnvbbCJHfbkQW2g5Kq1yV16qeCWjCfSvneHXmGGF4w97Z6zJX19GRxL3tifg",
  "key12": "2vYz1zHtVabxR4mc2ELkyPWx8ZMbdfWeTjzZx1kT5WpZE2tMNYfAyy3EjzxgvS3cotW1zshoeWmJvRAdAsXUgHri",
  "key13": "2MFpPxFhLgaSD8VqaUwW24iJSxBi31E5V4eWGxa8ZsTprNGyn8uSpsNnWEMVFA1SZBVaq6D91Q7jYSSzJub5HPfq",
  "key14": "364eic5433Vi3zp4j1rYYcSAp7xCJEWRUGVz1eofTxFdBZmWuRmSujF2TAWPPqC25LAA7hK6eX5UKp1ANr6XUB7L",
  "key15": "3fjF5D7N9ENhC3cE6ammDZjzNudKKwTKQuMofgA2L3PcyuhJey379FWhHi7jwxvUh9uEv5aXHZC175YGxp7RmvdZ",
  "key16": "4vWCPBnjc7TtsoCJiVmS6ifiDna6ZrozQQjpqCVoJTQC9x45LKSVscqT5Z1qhn4e8kG9EHAiFa2pPwAtttXBnYHv",
  "key17": "5g1M42sY5HTaeuUeQLKVcWwnJryLiYiVYniUiv2GgMBNW5YePwW52vSZrcuB768Z4m244R4KQGXsFZVRUC2LmG6P",
  "key18": "3uSsirPSjbQX9wjL9Ar45AMiRCK12D6VXF61BCZLF841ePDaUNC5UGrM6FV1Lxh8Ny2y9c9NDDg6sLDa1Q3La4ix",
  "key19": "2uHNWLWyNLmBmkbpWCXZywmaS1abK64SQCxq8WMHHzHdioH9CgDaxUvng4gPLXXKP9g65uTGiHmrGi2ZN15uD4ne",
  "key20": "4wxPt8jnUcYiMxmtqUfL9bpjk6uHhAp1vwXBr7xTHgC78QT3mYQGnN86zEcat1TVgExxiFDLN2gx6DWcBH7hPP6v",
  "key21": "56LzdWtmFQkaDJTy8RrXCPoFh5MZrdQjWLzrnzfbrTVHTHJK6NjkeyVncv1Q4r6Bvm436KodfEnkfYNQWwRsV3wf",
  "key22": "2omcrsEt1gUkcvC7NJKH7D9v7bHn64BVjxPfhZRzY2do4vHjqghsyS4HwoPM88VTZtw2c9qh3GkcvPm55rVAyCDQ",
  "key23": "eF5Ee2Yyf2ffC98tHr5wWZZAUpPTqPBzFfwe1w6CpWSmyc9m4n1TdGQZxukJH8Lz7zhUyAsaPpLTAgTQpnSdkRS",
  "key24": "AudPP4YfKx6MvtitsFFojQMXnUAp2CYADGp3z8g3D3YJDyy3vJA1w32xt8iKdZJRP5UCrAv53jaJBwkg4bQBcnu",
  "key25": "2QB1sMMCgFsUS9xAcgHeE2kq4wXx91HdZkM1kAA6mDw1jnEtgkPvXa3zu5rv4RhM7pRiTUrBspGzXSFsGZM8UcU9",
  "key26": "2CkvmAQf5EYBCnz8HKZ3Ge1yWNijJLvjuNGfnuR8pQc4UvCSABQPfZXL7XBNFgfC6QdGbPrMSGqdttDaNLJBAhC1",
  "key27": "5GiPuAbQXTNvo6YtgYp7FwsXt34FNPZzGdss3n9hWbFYxB8ySzh5bXu5zZMxyTJtSokwZQzpBC1nWxRwFJcR6Ht1",
  "key28": "5jdgV6QrBMyf5ZsyL2J1pB6gU1Mg5HGKtASczSiPsdDxu9jsgKBU3BRfh8T5DTwMNVkdo4hS4qpvYxe5AQUq6gSu",
  "key29": "45LDGF11Hes2SBpWjdPSLmnuUyb3sPogppoAe4LyhNShdnoE7eZ9k13PRRYhb6AiumcP8qzJgfNzWZVASQEmvLun"
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
