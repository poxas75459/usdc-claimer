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
    "2DxYpXuMuf2XdboxaEudDWfPy1xMmbtwSxG3TTv5mKQPDbqysS6cWshAXoJFbC8JDY1iPUY2v3SNpPu2P4W5P8Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUSf7eRHV2dKP5c4LzGh3nvUiydZb8ZFduwr5bS8KUKhHfKEyisKAoDJTS8TNkJEBjWTZZi6sSbu69TwH6HF9K3",
  "key1": "3KQN6uVmgCCwK6qcz1XYbZV1QZvWHFhM8HgsjZmvYeexARSCDRfDVdzmPCWLSSqXBs2gynkDwqja2ofuiHpQnUTh",
  "key2": "33CqDwo3exatd9cpJzHQUpMdjKGU4iKBi5HtZ2eDMYXNNzjbyUsnK6SDceDjYnWYxKv4wtvWSoA2XiazyPkFbBMJ",
  "key3": "2VWP8xKrgfmnjo5Um1wqpoEFbQcKSjEubEYBaUGiW1rAvnCvBxDPdrpAkwaebjH8noF1EAFdtggDmKTnhbWDCHvi",
  "key4": "3D9GGPgTNQsvpjFkx2xFxx7hi1dBTr8BYWmEiChamsvatUL2YzUNWQznFq11tuFBH37aKztzNvAXn9CBW4YXhpAd",
  "key5": "3Nf34CJyzvBigEo1MjWoapJzqoSh9ZwNFd2RYccPAZRLSNrcedkhXcKbebuzZQoRmGxKrUjwqrKHMfQ1Tt1J2Xy2",
  "key6": "4Pk3UFpbkEG7fchRKG2X6xMzM6Tq3CY5eZ7LCqk6mKCi5EMN2jVKGU1gNvTRCLKyXN8BSPSWVyAoLtd1miHTzPuj",
  "key7": "2PNCocnUw2emHZftNPFy2k1whaRhCheycq3SCB59g4JeF38bnNk5WVxNTaQ6BVdt1mwH3fCis9TLbXqiwtv5uEC1",
  "key8": "WVtWXRXadN99WLvutSh932rXdq64EcmLxPFV7N986tKUaLU31AeUXPiNVbnmQheYUrUGfbEwy8iFg7gwu3jNfdm",
  "key9": "3YCd3EKLdXruyWVzqTZrmUiN9TSiR7aRz3YrEELCCdMmDZKfWC8YZUQpzvVkENq8xBmDfJoLp9zjiNTeTz7JPbTm",
  "key10": "2ejzZfJ3WeawmBj2hVtbWM1p3ohAkCmL16VkoJ6XG9KLMoP1DonZxQuJrNTfVQNdJdFZgCfqyNMcdVWhi7WBnfFL",
  "key11": "4rVaymY7LG8PxxkiYk5cpbPFoQDngizLqc1an7CYH8hS2Vxju4vyuEA6kTgMFpwYZukbHUvn92FvKVeGhgYesUPd",
  "key12": "4GbsbyZK6Af1iLvzuf9uqGD7uvWQxUw3GW8z2zELaQJSdbC4SLKm9x5oUeA4BikxRvcmudCk4Ndy6bXrH75LyrPY",
  "key13": "5Y2SZN3EyeLFRGLpfMSgKdcMAyZ3Bx5QZXf6DpEtyQjrfYBV8ShRvzSE1FaGE4iCa3ieEAUxaig1L2CNqvGLAUsB",
  "key14": "UJzTzWKWjL19PswEwNcCX6N1JZyMe5hX5BfYt1xFvvhKsHScnjFe9nVwZAeBjTRv5y9NU9PF5e5cLJb7a5EzAJ1",
  "key15": "yWUZDRsTgWJa63eHmFCcHS7AXR2kNQ6YK92bTPGfMN7ouAqTNi4iZqmMZpL7RY4JkSdVuR9JUaMtazgJHiQUZLf",
  "key16": "uK1X4shnqonxRnPdx28HhAEMqomSKpvmUajAmNGbt83Jv2uTa7LwTvQhfKTi4fPikdLLeqrE3UpjJhzA9kwZJ3U",
  "key17": "4po26RxUc91qTz7TqT8xywbXPspa8BfohXJGkJziYt15dgi8YtNLCBJKssNEJSZeiFAiyUFuBwfJsXowPsEg3tZD",
  "key18": "3urFMeg6MQ3Wk9EnyPkFY4HJQLNJJfeLpeGmjUCmhX1a4gVJzJxRhhtYgTbDdFfknEFCcGQTHMpp5i1kmmp2ubNj",
  "key19": "5krnrb8exuJ4Eu1QRdiFQFmGrwn8Pygg6vLSbMha92WG4RYR5LCgrsU7BUtmaPLPNS6TcuVuaTahZQFvdyKLsexF",
  "key20": "TcjzvpP2fAcKE9wBq9MdyzTZhVXSF3cUjZE8XqcTkyEYwKJeHiFLURLd2FScB7obE8STASBPFSnbDo3oDTSphb5",
  "key21": "3xc7GCFDGgSkUiGsfp3osgy88wsMZJUm4tY98odrCTm1Ww6G54EzR6s44pcFsLkRkxvvug1AWZrqqgBqeieQvsLS",
  "key22": "FcmX96N5eqeetCBKj5qKPa1tAiHXYLUvYPngp2UDDQN4d9EKzFc17yJTGSvC2GvHSpQ441DfHBzno8rmaxukn21",
  "key23": "5PPGCf3xE3SzAfdivjK3pK12ZPT81n8NiKJsQ7T7SXZF39ExkPgir8DHeiuvYSFJShPKeMzDLDFbKrJFE1LMmdFe",
  "key24": "21kfoyu5ynknXnDjtrYc8bKV8CXdpKp7jzmc1JEb3DRSQnuUEdZjszLFQGXet3kW6Sb5qXtN97CmVnqiiM8iyPUA",
  "key25": "266L6LxnPF1mkt5EKybFpTc354owcSoJMUMCBxCjpRYdyczYxyLdKdt2KdBmzRnqfq1YeVeyBFFwxMjR5TzufYHj",
  "key26": "5p294BinRjvLtU3zt7Fj7Q4CKrCLo38SS6BKnU7T37n1QvdrYnYxiLhYRjHRZJQpD2eyq5iCbaVrKGXwjvAtCFrj",
  "key27": "3oXZTBTE2C1gsEQYEfJwFGTTWQ7xQ2xkEvtw3nhoewXL9ZvnFiqD9KHr1XqzR8BfLSAgHcK3mezhvT8wc9YcEHkx"
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
