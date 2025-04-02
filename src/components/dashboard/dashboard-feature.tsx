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
    "35gPUr6jpqVnjmnaQKVqhVh8aU8ASdsnwc7MRFUb3vLMyafshbvt1bX3TezXAYDZWuQY1Yoxyxp1rU5YAFDYChDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLQ7TiBJuHiwsFpB2k5LEwZXw6ooutGeWAPgEfw9XbS5a5taG2jjummAxWwHktMEKDrsxjCSnQfWJfGB5s5Qk4b",
  "key1": "5NcUPEjNL4Z47YcqJ97yaB6oMgXkYyWGKG4LDEkPFqVRTFhe2Yxohn5P429Zyj885gb6A4cTxjkNc6qydMWQfN5b",
  "key2": "5vD3EsfPpj84DEKGHM5mCBEGhcSyVbA38LrVEB8VPfHAH4LhnFcEhsFJTCGabyWxy2jHUKTMLVHcsoNKtWXZLQuX",
  "key3": "3Ut98YQNgXQZLQFmE4tfdqgm3ZtkNeaAKDWPUqgTUCKqwnkUh2XfkHeVJf5ZVtXB5xLmW2rvxj469PBhA64vXzXL",
  "key4": "LiqWRi4zFcgfss3SKdxFFLdpLjCqahzJmgJB9yYKBDyp4GLESmiP7nRVjNCq6VkShGiABGpBreYwNXktMSzJFQK",
  "key5": "4M7MZbdx9LSdDcMZ8WkkoCb1gDu9f5FJ3WmuUoB5dtDcd2Fqs6ziRLBnkSFEPpmmgxKpAxB8w3hxuQ2xcFZ7TyMD",
  "key6": "48xP32DycJX42bptmZfeAfZo7na3KyJXdMME4NvtkzE61zCAt95rZZrZo7AXxe2gC48SKRUWr3b9NpvXqc4nxeV7",
  "key7": "ZPkJoovq3xzNvFz8KvYb2GesjjEKNuQCLbEVZRtJ1Z3regtZXkU7AkUTv3saS8pbqzqTr258UYWcUA1Eu6oD2R9",
  "key8": "T3ingcAmnhGo3iX1TfsgZLY1DeqjZucFRpWqebYr6Lti2sY8reHbmefJ945wPLSxesS6ALMU7pZAFyQnvEiDqrg",
  "key9": "5KuqDScnRnje6fWQ8Xm6aPqqe4F3EoCqpMjGBDTAguFt7gdFKnJuM3rchrFU4FJ2ZKKHxXqB1Psixp8dAsRVftNn",
  "key10": "4DRSbf9ZhH1sRwjwjH5VgvivDUR9DYRZ55n5krDCkxAkuBk7hk8b3FRvVXVsoM64JY5pqxPtY3P7k8rdyubDk3rM",
  "key11": "5392h6Ugo4PFHz4ebNFJPZvGwaRRHVwiQS2cdixnVaVQfg8caBRYb8Nucer65UprRxB78jvXZBiWjZTdiWF9Bd6d",
  "key12": "5HWMmjzYwEEZbrZaaw39fCYCjpAzXird1yaN95b9ejh3Nb9MKaTBgX54MwUtNfQpLdzwsacwyg8Nd1hcouV9EKdL",
  "key13": "ohttdRD5d3uLQmBzrj59LcQcLqzw7Nge85xue3LAzu4HGvhtf7KGbX7TYK12a3uqbUGhgWet1DQCK6sWajuRrzT",
  "key14": "3TVFyy6RNQgEb4brPTEJpKNdu2DZ11kSXbHedsVHhgdCVMb9F4FFiodXNmiimRoe8GynBhyUApUFvujz5dmiK76C",
  "key15": "5gLtvigjaq4SVmUYEWSf1wrC6bvwMVqoGKFTywd2FiJx7h21MVW8G45yxtWPYTVA6PN2DY8YceNS1iAUpBrZn2cz",
  "key16": "5aGfjzUFKvqhqMJyMEuX1FZbBnZHyCSzFBLk8ChKyYTrdDpmmN7stJNMPtfq6Bibj9eEqhzrBHFmcEarHxfHTiS8",
  "key17": "3EYnqMSxCgAcx9nEUvtfgsFp6mceGyoMKjp7s1Gee8KHy8P7P7vGYXnWoEGqRwHbaqwro1By3G2UsxgTDMUXXFxj",
  "key18": "35gARPmFoWj4xkZkXoyYDcfg6CMzavca2yKsFq5iiHJ3BKjBANzRwJQvQdTmrdkzNVqh6eNwhS8tXySEboqM2G89",
  "key19": "5QJNpCCxu8hpEC4wCgHnNqazzQrNJXCYGYDjqPhk6xHgCjMhgQ99s1SJkVKC7vt4sSrNPNbzPxm8kA4v9MLsvudz",
  "key20": "2Zv12QqRzp3awMvQqJT85qrV3iRY4dRqPhhMu8C7h9KbNkMNa9dn8NzaXXwPa8t5BCQuWp5msvjC7MSiaWtTxLmb",
  "key21": "5bmiZPuJutKnabGKhRiynuuPG7vHHdDJr4zCUCxFCeFZcg3CCHREBikXWVoBtyN72rZyDnumTzErXouf6cPuYdZK",
  "key22": "3wDbwRB2BNy6ZRBmgc2LVHEVQAqP8QVYcziLFLDndBE32x1dThz8g6fhVoKA8UwGJAuJCtFtaCv5Ev8KSBoTmojK",
  "key23": "pLETYSgGHSUEUVbyCN9W13s9ECWzVgRKnoB1vDCvLkNdr8AtQuUZcRmovHedMzRp48ReHZUTsB42WEGfXsADH4i",
  "key24": "2Fdhcg2E5JeZzf173CBQ882Z35WovD6B37KVFMm5UZvRz3qaXXM4ZUdaNLpNpx38wnmgWUJsES8ELtTvCprPmoBd",
  "key25": "5puH4Kn3iEKmDYDnDpXTQkMT64wf3frVVZK7iTftSXRVfpCcK4FpSYyeuxFZ89a85A2WCCTuL2kMhRjRkB8ZD9eV",
  "key26": "5v8NQkNZvLRMYNvW6cqE7SzFKBaWo2K3syZfPAAtGBsTg2FrXbhHQdpemqEZLpgPcZH9AJ12ZiQvrmXYkAysAtCy",
  "key27": "nZVLBAxwx1sEW6NRjtH5ZUJgQiapzrr3H6iVcxR2HTggMk99umPmwcQGukceNFQknFQodB6yBrGupCGkVvzY7ct",
  "key28": "F4A1xMgnnxM4fyEs6QLng2amhxDnUwzM8yCqtBuiaaNzsQogsSKCUmXJLTeiHUuu7HB21cvbNVKKWqz7iZcQd1E",
  "key29": "ZVht9KLGSCvRmz5VNNxbczTbx3BgDQNiS2wZHii9Uy2B9rB7meHZjcDBgfFmSzLhvsAR6XnvCoDCufR3zQiGc6S"
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
