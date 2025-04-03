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
    "44jCb3W4oYwPrEJAM962XPaj7P3X47n9uXEu79bJR17sJnAVBaM4Dm2XqGkKPHn86p6asom7sZXdiefSC2DEZUxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47go1reoeiYArLTjcfyqwhNuMiZvjcZQGa9SSLaJF6hpQ6EP5tbChZsWQWXqV2Dot3pDUwLz3MndT4SP7UY4GsJY",
  "key1": "2b4MVcre75t144myavtsrBpLPETnCznNnhiuyjZF4QzAFpzxmp5ApwJUshGfu1uMjbPeEcW4DFMksRgRdexXQh7",
  "key2": "3aA2h292gXyDUeF9etx8UmRFHLVdKbhAfhNo8DH4xFeCiEVbunJtUNsV2QCmsDYhARNjzY8XkWr43GKFiqYVpxYv",
  "key3": "2v6BvGFJe98D7iau25gYmqqNwSdKZXM9QxuDbfdSe59kTJyFwZmcRJYNzqhopLBHa15s2rxopAwTea1yMzptHpfm",
  "key4": "gJbqyXKbfAnhQ44mD6CWuaHWsD5ip2rp8qF89dsdDDvxRHLHAibaQ7nz97XLVzSyjgiP25khtvzynxS51TrD8qf",
  "key5": "5Posxui5n6kZhTpk2Ve8Hj24fGv9xjnYwhmHzY1VKL1N9KXn51TCpkdPrmXioNqFkyPYnpL1pZdn41n4EhkVq8EC",
  "key6": "3BpHC6s7CyLtA4sKSJYXJ3BVcs3xgtfaHJ9GfQ5usYtqMeKuPB8a4ZALJibMRnLHdHY8gBrfWswwM2R3nN4Y81uT",
  "key7": "2253pwrnqq3nHoGk2mB91bsfmnHrGoivSN1Kk4zSUtUFmThEhGLty5eSqgCkCinkFvuhrUszfQU8Fvc4LWjGWunx",
  "key8": "5KsK4NRBdVu9okndZFLLEuUwUwcNKjidfGShjtLpnfeunHRDAjGbHF2pEhpNPEfUuajrUsMkFiJW8hCRfJWVj52",
  "key9": "5weCxjwaqmqrJTgvHdoKHpcg2UAmus3j6apMe2DD6cUF8hEBF2dJLtSrFy5e5q7fHtuo3NAZMkgh8Xm2qyJxfp5j",
  "key10": "2TfccvhB37DQMXxKEcgbgxYL8Bit6D2ZvnJaaiuXDY7urjBpkKDiTFptiMkLhyNJr23VYkYmSTVzH8uUozr2651j",
  "key11": "tQb8KGkkCXkuxsY3WZUk3tAvWRuyqTm3tujCDyjxaf7oNTi6rQjz9DqibvQU7panfCNZnKgAgcERx64YuuhAYUR",
  "key12": "5JCFLshcw3aNXZjgfNNGbSaAFNwL7QvBeSz6957V6nhkScPPtggSw4KRi7QWPyWUXwDcaq2Emhk82PPxFPBWKzk8",
  "key13": "PhqVAo2xHGCHYjj1cVp3syWLW7HDcJo23B83ggWHjaphuM7p9Z5TYmNJRtx6r37fF5NuazE88ocauSQkmPxgZEd",
  "key14": "4tnKD8QheqM5bJMcu2iTTP6Z1EzJEUr3d4RMBz7M6U1Yia8oVacvgx4dW6Qzssm3usdxfMpjeBykJGdrsnDfuVGz",
  "key15": "5CqCLzAPrWj4iXSB5a8UDdUeu6gdccBq3WMhYmBZr5vcEtwbukSfFrKbnj3EPrAccED56DJGZ11NvLMSrPN2ChUL",
  "key16": "2HA7ybGWjDeLakiciu1hQF7Mc1nsHRM3NqoxZuYiXBsD1wUVZKPDr54HvCXe2pRQJ7AVrZ3PdMCzeJ3JVbeuhmmu",
  "key17": "2znYYXU5rNmAiKX4XaXGgiBmWdB4xfSsL3rbhr8mB1C1ciKDhakSsra4W4ZqFeJ3B6Qqdw6f3Q1FXBrk1pndcaqp",
  "key18": "yjQXqLp7Q6gGcfi4U5HnXHVb2us7K7ZmYN4oMPYJcf74Kb59FFtqk3EwmAfLPz9ggWU6SPHB1NwwM2jUhATQG9m",
  "key19": "2D5ndSD4YmH5MGNnLKfYRZ6Y7xKv6FtP2KYjYyBnTMho4ZrYFbroWYYHe249W8mVE9QJdL121Kvzk4JJPrF6L2xY",
  "key20": "4pBiBKxcacxcn3fKB4SSpuNqvJn9Wopra9Vw5zwrjMaE7SeQ6ccrrVuFYkd2iGWqHhkgrhqM2Ac98UFRKFFwfaQL",
  "key21": "5jXdnpJF2jMZtAMRY81NwsadF6gAa1Pen4rtxCb7uMqzmBWGhXUwkNDeNTcMmaGmAWjjgrPnMoSRjnxhcgpyAEWc",
  "key22": "3QM52KcrwDeRfnQLD6qxsrZyJN5kTZ8UqELCNtNq4hHv6yYdDkeykUJeqBzsnnDcp4uLeJV44qMTDte8BK5Q7UJy",
  "key23": "2w4fjNKnzxgieBfpXNaG7bKVw4YKCCxLcV97y8Pa8zgsU5fqExtk2MsunMCjWVDYEPcDUmXv8aDeRBGBB8PVjXcP",
  "key24": "3HQsginhtoCDiR5G8fsX2Jy6ScNF5TKAWZHZUTCYaG1FqwfK2HTacu48U2KZLbnCrGe8vcsp4SnGrwAKku1EcFCR",
  "key25": "4LV4Y7XoH8oK98eGCak2iG1bRpWos1FYYQecSjqmWmB6KC1XqX4nR6FaqujTK6fmfLEp9WVmGFmi89ByLAC1gHGW",
  "key26": "64enb466sajmtnfsaTYQJP2CrRNgCteyEgATGAEdtbyTEDLBKZsUS11VQ7XApixMigbEL4fvLnUyshCADGy5pkty",
  "key27": "29ApViexJjqzCvUFsPoABGWdZMQmBE9DpdoRxkxr4Hd3X3MzSphv8nmzXkFnssBdUDkLSvaCrTNM7wAkoycAhEj9",
  "key28": "5dgfCJpYuyRoQrBCMJpb9hUY79xEAG54tbPRjaiHG4geDC6uaLTjXdT8wQunyoGohBCQHZUUrzM8CXpUaNqCydeX",
  "key29": "3givwJobkqemDiQKVK2JyzYWrEzu4sZAGiBDHfPGMx7NLEETdr2xvBxk6JkUTW7gkD4NntFCAzPMgr5qprt9oEBs",
  "key30": "499zuELHWLV7aP8xqJuTPvLfFdBcgnfV3PGyLGYnyQwnvbUeBUsD2fNDosDdCp2RoAQNUKBWn46m4Xiz9Y7FkuD7",
  "key31": "2dGM9mTw6gwJsDjS8GfLuHRGuPFLVwezApLhBU8G47DejsvCtX8JfsrmnNqG8pznqT8efCvnLhXTN8CSAW5ku4KH",
  "key32": "5g2zzaZam1DsY887Dn2uz4AUQkXUAPMEn3S5VMDkwdLQqzpJTroDJJGgexbCtshcdp3NSYDjXzyLE2QmXDMZY9Qe",
  "key33": "w3FA1y82wJxcfZuPSVB7jBbc7TEf2jeWKFj3pbEQ5wHjFf3shw4v7qhPtjrMDtopM7Ttx7uEXFiqE9cqnnKhxqR",
  "key34": "2tDeu4nquwrDMHhbo3oXhQkGN7MT1fQK25rLzgXQk9Y3eKzzy98i8CbzKH6DiDktqEetqs5kbYz6AxRFGapt9JJC",
  "key35": "2ArKqsSC73mdN3uVC5KR3zKKdGLnzQeXf4qpQmCvyjm82QukKPXnrKRAh54f4TFz2aRHscUeorHFTX4Bs6SRExUy"
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
