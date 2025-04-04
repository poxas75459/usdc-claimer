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
    "26Vz7bxsTjcG3nxqLRmwbBNWWYc7BcHrffSARPo8fpok96JoAEifTCSBmcTtb7ZgJZ1iwjsCjMMKk5nnPXQSy5SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mXKPHJEdubmwAKEWVqzM5sFt8EGYRYDz9HrpUcmT6kFtJ1XQdgGZsCku9ipgzuidpvq8djNCqPUWCcuhQonzWBs",
  "key1": "4MAcnZmK8zyty4pkXL2vfXiTVxF8bRd3oPU3BbHV1VT2vMDc9LjqHtRVs9i33BuGbaUem6qF6wsiEsF7kT2RBrVU",
  "key2": "5QrPvK3EMzkVxa7JuUoGLKc1sWToW6pnob425MJDeXL5K9mtyPVWza3V86FzXMLqjQss1Ugf1WDthCsRYK63sqyU",
  "key3": "TB9mc38tXnyB9n9ttpJ1doXo3Zn5ahH1Dj2JnfiJKkkwfwzAdQDgDECs8cf43Zw5mc3TSZFkgSh4dWK3kRq6ZLC",
  "key4": "3phR9Q6T6q2HtjrDybh5KEU3XrePxroXPdSULSAdVS9A69Ftq8RtjCinbV5tf6mXr5heUUAp3zDjE6EMRcUmFqQh",
  "key5": "4v5fMXoH2dDUaJgH9sjcwW9RVJDpt8svkTSGesDzyKCRyco5y3iBa4V1rbHcRNAogarWqmS6ggvURQWc1DgbPVrB",
  "key6": "4RXnFf2f7BbfkUuPuSy9QqrtEWpcwbYYaeLtxh9dSTEMLy8P1N7Yp1gPwgug1tDcg1GtzDNjqrFDdsGAaTeuVZbF",
  "key7": "2SF4SCyvGXEkmfosZQ4oHRfEz6rKf9TJuZbSRznUViijJ8hmLs3zxYyH3xpG9d6sqUpEmQvdcMu1kEZeNszGpuNW",
  "key8": "3R7GK8ZAgLZXynFVQsPQVHDM59egA6c3As3vvqDPQyj3QCWPJ51qZHi9EhUB1P6LgGSqiTzXLXtv7yQ9gUaBYJny",
  "key9": "5wVWtR4arfX7waHXhJsMC7Q6rfm1aeoC9qdAe8NDqBKY79EyzaZWNp8wEt1C5SFYW5txWJhkJ1w3vGPUBih9Xn4q",
  "key10": "2WtZNnknmsNNQwFsUxhyrpGmjH4kx5GeWjfLtFRbqQcTCqHAMzJQq1UkboG7NZoBrLoroDUFfzxkpCEgBLNq6grW",
  "key11": "5WvKsT2pHX97ChDri43zhvpNcAtMoK4FXoRgqnJ6hNKEftJMDSbV9tKHjTmAYZg4ZTqaf1xodEsEPV8XbwG5kzU5",
  "key12": "2JZRQWrugjqGneNdEbAge4Kp6E6AAtBiSg6guZv53xKgGhZoUsHC3CeH8t38Eg6cp8U4vRaXdq6CF2AgDVr16FzK",
  "key13": "2fyR42rf52bmD6TYktaCVmF1dGqC7EZq9QwveAJmcUB8RKZTf7vWRyTXY8yH8nwnMrWuNYf9Q3EsqYAYprXQR7CQ",
  "key14": "3GRuwhTi6j1bcuuspr5oZSLVJzy5WSkxTwbuR5h6joTU41mDEC4RKA2j2AXnSa3LQndq16CmFFiGnMcXmddepdhA",
  "key15": "3MKQS5ikNqSLUZNcdshPJFVRA8BrtdrVaLMoKpsZrNZinv6wn52Bw1dKiCSnXdWkwgM9jwfzCu5FbPuT4BCqQnK7",
  "key16": "5jMXLchqrS9sfckTTWaBXk83fiNbfqF3zseLNYPfP9hTftMmKAEU2ojqbUbfYCcc415y6aunurKLaGZGYmQRW4zg",
  "key17": "2nQmTNSTC7azkXGxK9qDCogmip3uH6TrZYJNLo5w7SeviVc6ZF6wV7yHvnSTnrWrwbiaMzt1cMTi4sfhuKCVxvH6",
  "key18": "274mVZCAET6iZM6wyrzLu7pEihx9p7f9NH3uqebZdSBd91kNxhitqueHnKdLb3wJtapK1KHEmT5D5twXBS9TfuQ3",
  "key19": "5ZJaquDz8dHx3GqnFnSpdRmfrTrs4q4j35a3v2FHuFctUgWyNNFjRihq19oYkmCLdzCFHzxhj13d2XZEHQTSwvb",
  "key20": "5fUqyUwVtkPa2vLi25ZywQAqYx9gDmhRZxEt8rnkYRK5HLJdf73LdroD6xcyHcgpB45jR7N2TUjZjJtraFXn3KAK",
  "key21": "2qj1DV5LAwtA9zw7LavohU3e3pezMQXFphsbrPUcz91Tf4Lxp5dCiVwrXWF76XtwKdYWqZsiog7c6G5tAhDSvgX2",
  "key22": "4JKGKKtJrnck2XEZJH5AJ1vMSWDkjk9784oFdSsU2QAYyBP71DKJ3Yv95t66oZ4VkjqnTtrC4879YjpCbbaxW5Ck",
  "key23": "3xh1X425DjBJZSRcy2cmoRYHJHkmuVUAyVe2p6BRR6xdmLADbfeW9kNkQ6Y3BNAd3amquWmR2xwm5cSgJCstqPW5",
  "key24": "5kHGV82K2xydTdVs2M3ABTVAX1GKmThnPyTvMtuUmmK2xkgRfLeffb1dxwP51ppEgGXdu6C3j6SzJX54ohNPRuJr",
  "key25": "5tjV7sYD1yhiHoE9cMayL2MFEv9fjEPtEJt8LjRTtyiJWwTfzC65KRVzEYq3SK96ZcuBnGuq7dMbasqbASY7M6z9",
  "key26": "2yjcHq9etjDRyRhdmDapJ3bs4dDZTzvMmo9No9fHVEK5Nt9LBbjifaeBuAWU9kPmsYJwgSJBXSBFBmuaqWjiyrNZ",
  "key27": "2tcvU3RzcFJvRwAYqFhiRZdTioQkzR4bsixS4own3TD94Eot7Sa4vGXfbu2Z2coLv1ZaCFTKHT2pT4iZRNoriYNg",
  "key28": "36MZFkMK9mLGHMGzpQEb8zm9GmDFAw29NDFzF133b2qVGfBbvgnyojmVXesHSWGvC5hy8sNdYCU4GEyP179x5d7g",
  "key29": "5Ax19sp1fYQkCau7nk9pE3zZic91BMDHUqLrMbFfpZUEW4yG2ww6r1yr9HAaQGqtURZB8tYXKb8aB6FTArJmzJRU",
  "key30": "dpBrQ8hFNYsCW4i2ua3sFsRNgmCJfvoDUTUFPgya9XpcBdP48p9vsv6S58BzZniFvxkhJGB8gs1zf3sG3VWqYJr",
  "key31": "2S3DMhnh7LCRjqrx2LNT1s7rN3q7EpRmdCKqqPxoc8y33PBcJpMhRDo6QCZG9pXp1uyNdXA2TCfwyXFkeZ6BAcDD"
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
