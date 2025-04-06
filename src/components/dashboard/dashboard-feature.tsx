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
    "2VQaL2Qpk9mnmDGuxX7qyWenvmvtkryZw6J6KWSAN5ayHE3QZqojZX3P5Abi5jeTQGHZG84ksHzKAtDjKaVR4jx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvQfbx1m5sRyPRni3YmFRCgCjtnP9jSpo4pjXqTJZpiVdiz6FMmPvXkWbqZeNnnnGE9n6hVrwkhRmKPMnQ6WBDr",
  "key1": "2YqYQNcZ31TfBYbJmQsSKRfYD9j1ZdHKvoYGzjMDEDzWcebSSdRN6rSUdNR3GLXpHwuEpcoEXjhtKhr1vc8RbgdC",
  "key2": "5ZzkJEAWbaVerUt3pbuRctPjWjaccpKrrCenCqb9v7XJNSmLGtWDW1xhE7BeLiE7N9GAcTJF1igmHndQnbzU5QJq",
  "key3": "5zZrmfUfZBvLTtv2ezJCmjMiEgVScqeGVQB9G6px5avNriaTo41bRUR8JMyhqPw6DT9cYB9DLTPJ3Wn5eYX1fzFt",
  "key4": "4JJQgqNqifktBGVfHzezjmw96gsB11VSwAys7p1CcRM2pUiig9kaGQH6ubKTPAEh21rBALjqnWwPTFyrUH82VXb4",
  "key5": "4TQ2cm3PeCoqV7bKHCryrJQ2ymQVDKqagW7afnGjf3aP6Rm8KEEMR6DyvnW9gVwEUQYmNzVQFHecwcERvbcEDFPb",
  "key6": "2s7yBr4BrQwVojNfRX7cSjYf7dTuEoBPN32QZp8y6qzNyVWCNuwy1gmY6zZhKV2XyDDuFFz4jVDxDrQ81hfgXSrT",
  "key7": "gwaTuRkdC8S7aADxhrCHrosXEGNMDkkSxkPT7qCbPfsxwHNquSWyk6zgAzoSSHXS8g92AjcegyyrCdjEEvvzv5d",
  "key8": "4iDuBEZn2AFN6fin7wmBPuUR1tfn6oNTFkj6ngAPdt9S6nL3ejyPt7BFKdn5LKTPXHcASiAXH777k8zgMmq8RxA2",
  "key9": "5do9PpnkycR5rBmMogBfpCmYGthKzYngE8y8YucyQPLBGD2NUqxBex5CSqLBZZPZpnHT4D4TV5qhBAQtqCPujmS6",
  "key10": "2YnsKcR2GU8N571uonKCgBTZ3z6BdX1Pr5dKa1TDtXdPTj3y7ejYVxqGnHityPWxdNvYcLRGqprkxK3mphrPrvGb",
  "key11": "5cmHjS5CftCSkMog6NaxACd4JeBcqqtzfscVUg5V6uPhZuNkJFFJyQJ3ReoyJZnz8FPtNPVFhay3mYpDRsETXa7J",
  "key12": "WDqSNffTiFdPNhL68ZpcrBxTRXEbg7PGFsDfzRfkgrzvrsmGw5b6acBaToNmwVaQL6ZsvHAyyigiVbuZcr2k4MK",
  "key13": "MQfUw56trJR411nupwYgX1q9zXheYNWkHob12HXUT2pjM6wDeM1pEscpVUEzSuozpPntRE26RD7jEzKDkyYL1mB",
  "key14": "3ofxm8MW1CU23MHe6VXEGdmYCdPBVUbBM1HdPzzBf4LBuhDXWPDu3AZn9mXs2mfKao4fwBS9TaRoxewEyvbyzm3X",
  "key15": "2HfBwAsRJaexWkw2TTVksv1uXWTMFj5296gtQ3wwUmkBvSwtBdjMf3wcHY76xB5TVgzQpf1MeqzfsW8HnQ2tcJA9",
  "key16": "2HdZGuvCE5oUCTRchtcLLYcCtZxE3Hf4jrKs3N6mLxQUUrW7XQjkp7QNrw8e7k1GFoinGurJUGHzJhSZNM7xPy7F",
  "key17": "62N9B6vjM8G9nKYU76RH6Nm6JaMMoqDaUKNhiEr8fRSp6g9N2egcsZptVyL9QyrXVjky9JWTW96Seq5K5aiEh5DF",
  "key18": "4GM7Pq6oZD7jEbeSvwKwK9qE2uwZREiXnWMimfGmjguEQesrjza4gpL417ddhi9GRcF1yXmvpFQVwsQkxU5cGUiL",
  "key19": "3gRDeCQNkanYMxAm2vdxCvnV6dsS1WLREfvxEp6oZbrLMJsJXpF5bbMcecWaBmCmQ3K1g5gy2UjbwYXMXGmPs58e",
  "key20": "xdWBxpWYy5xS268tgDNGiCiL7tdTLumJKAmWsPFdrCT7mQYbfUe1KfYog4Gqni1uhdSUFRHxM6h7kmU6tYxsYfn",
  "key21": "5ZPtkHbsehpMqygnp9jBGah6hkFQGBuQATLvG51RxqJsyaA9RQZn2USa4U85myQsmLyFStbQinCmtSf3Mcses7oa",
  "key22": "2LLxJRzXnABAuVjVVWJGH9bn5kgXiKtbbRkYp4JfrFwKfpTab19fa1vfX6hpMzRjsA8JrNnTXharEfANTekfbyBf",
  "key23": "2nYkLQUZCHXwn3PjRbnv6z7HHnnh5wvq9nvzVyvw5V6jVAuXYo3ZuDthfKmA9URQw8s9qaTURbMgAYhB5nN28vWo",
  "key24": "yYTkpuZmbSeDWAy6yqLVJjd7TAw9AvSciTArQaJ7b35jNNktVhZ7syr38QVxscCEp4EEexCvTEoVt9PuQZHAyYA",
  "key25": "5Epvtw5mzJEu6C1e38oxfxyqNw2JWdicAw5Abqdq9NxQ7GoT6XUAQYDyikxe4U4fWCeqvKuZsX5pktp6myRMWEsZ",
  "key26": "4rynsLgzpSbNV95XEcNu5QSz6rM4BpnXHuF7o3rUKvPBeovJErKaJ5iW3P5k7DuhFPLt7bNnGsuqu2xLvoGhoZS7",
  "key27": "4KxwfU62TngJ747KBac8E917MGD8MXUtJD17mL8y1D8i66hAcW6YaFUBdH62QRHXMWpC8iSsJyKerLyRmKqiq3KM",
  "key28": "3FHeWUQMNDd2ctDDz28k1pRMq2CrpxjfCj3PneekzJkrtMV3gdJQUYYyB7awktxz4xD6S6meUHddRvjt96W2Ln64",
  "key29": "3jKY3D7hewfTtCmoCUPL5xAT2jKucXjqCQ1qCfXFxDvoYrP3NJK7czGrxhao3Z1589Vjg3oxpVegB8CvCxGunp5o",
  "key30": "5ygUndZ5TvnjTQUKAujiBm7GzorkotSxCu8fENyiZTr34gTgjor5VCUtxm94s7vfJhHxhmyizRVtS5csUxsGh9oR",
  "key31": "3BrFy1XymAUzieq5ZkhaN8U7WShQANCqZkBTddsyWDEYiKxst5uLnoroXkUd8anKZdipTvwQuACyN2DjJvvR8D6S",
  "key32": "5Bf4kJMBsTtwrXQWpkrcEYrHjHtzTm88ytaFSBhwvCjwQwLF1wZ2M5hmmHJhhiJWfJNkUX857W5KMKw6ozPfTxBY",
  "key33": "4iKiw1Lepr1zXVpnVCgmdrqBoFXDa7E6PjpXhJrL5aKpeRK9EuPM4GZPJgsKLLuixHzTZkznBH69XV2F55ePkzL8",
  "key34": "3u5xvfCjRnH36UPoREQ5HQK6dVsfUjEZuv8bZ9CF3e1FmP2ggJjjwRuyEoiD9PFB2Xu4x26HiA2c7y4krEbbJwFe",
  "key35": "3tsTQdPM4daFfx91sLHHGzfuy7kDBBfDDFvHvydHBX1dVHxBMJtqKrYk8ANbBYZ4joLHUPR8tW3BCMQ9Dv1ZbQph",
  "key36": "2hk2NFyQFiJ94SfH9Lv5rTYeUieZmDYvWCxmRZAncUZnvfHBaedxxh7q9LbhJ6sqiPW2WYvQXDph3TyuW537Cmyp"
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
