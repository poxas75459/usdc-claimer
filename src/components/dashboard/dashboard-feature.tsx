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
    "3HML7yWhrcKjCbjB3ZDQEXmAiM4zgCfji6fWC7iiccKHfHsTKusFjLCuPpiqo9TS4fG113qMNkz1iVaw7wdJGtUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DB8gBt7KYzXr1rMz7bQ9mnYKsQHK9j35vmsCEaY2RD4nwysELfkTdeV7tK92yRh6dUcVKzZXZebBdRUJAEMJxex",
  "key1": "4SGwkwsCSvawTEoiiMsY3vqWjHZwvDuR7KQpHqX2shHL8fHp8YJeCeFvn4BhF7DLeYfeeWEyGuLhLoPZXYJvNQqK",
  "key2": "4CJQdabXjJSjPrRDG7hLUmhQAH2Bz19M1eqPBramNrjwTa3m99YuVww4JR9v2SWRZ7BYXHZe3YF6jaXVkiCciiCY",
  "key3": "3xYPSTaRXwe9zqwWsfiyp6C385ntr1ErQ1zkxdv2ha2R18MwW1ZKuQY6EspikZwnPNHVMTZg2Ptze8hSFGMh45zk",
  "key4": "3nZQFMpHSnk77aEc891NVa7N1qLujXkFdWymQsJxFsjx9tK83q3bH6rVduKTzkpuEfdT6HLj3Y8nywkWpgsRSgzq",
  "key5": "DzBNUedtfz325EUMwzvdusbEvJjmMLp59TfZeDL1mZBihjdG9kLxBAUHBoAnoWNxP6vPSwn9tJLbsxTaAzbowZu",
  "key6": "3gsw62ooadedLa2nEakxg7xjvL7E2rjm3v1MLS9ZggVAiLH7nSwGJbJMMGhCTuFQ756TqdtLVx8aEUm82xsy6GL4",
  "key7": "4XxFeeKeUimbWcjkx71wkovqhJzP5tXaMDXMs7gXiBkMg6Qgo7EBxJ3zshzEMQEQkAdBuSimmrkRZio6cSM4XrZK",
  "key8": "2hiJ3NbLLM4pru8N67Gq3p9seKGaG7V36L1FvioWK32rRD9YZAuqgDC7aoKRqyPD86FrxppSNWiQWHn8Wy88Hdj3",
  "key9": "3etuXDdzM3XHu7sifAQqkJJYypt14JxchiKbjPZZ89br6U5HYXvAzK6D19Gr7NBbgkdtrNw73eGbWMWFLwUJEyrB",
  "key10": "2jywBogRAMTuwn8kvk844Nqj3GHTo5WFJQ7i5rgiTRFddzYWga8onFjaz7uJzCyRqu8RUMnth7ijDZPNiw2KpdNS",
  "key11": "3ECjdQxGYMF71h476rsUSg3yE4ErxxJvTtdbLKtB38KvBdeLedoEVssRjGZDYk7rcodUs9kHgY7cozTDCka7uqEZ",
  "key12": "2z5qma4oBurHkG14yj2RtBu4prtspSZgKxcJU5eoihU44sahohbJka1T81jMAaWZpndQnAjvEJ1u4vsUAuQ6Cc4M",
  "key13": "eirrY3BqskvF797XZ7VJaKA8pvMW6NURvmjf6PGfdZKnwRABtx2p2FpRnPBfrRdemTgEEy1j3hMvkS6wPmi2jgu",
  "key14": "4JcjT1M3we9vy9MCkBrjHpidYyLXqEshoGafW6uEYGKuLGV78Uw4HdA7pai1T9WUQZLWiyPsVifpaWswuvdrPTb5",
  "key15": "23ZKfFnrEFEXNSK2YjiKdyP9nhvxoseASvSBUiGzRMSV4y5ZVcaBY7iW15yFJrenrRut84Hxt3FCviZUYQ5QYgoa",
  "key16": "2uhRGxAc6pYHyF6PzaDuUCTeKhPnWj4N4EwVs17paipNGF7xMc1YDKvHHHAJAPk4VcTD47R5Cuvrx3iRv6T2WWSY",
  "key17": "4kP2WTgr6yCze4AiAbdkwTRPc3eU2gw5BcMRMRL9n4oJwN4z3XwaCDXW7wA6AodkEPHaWatwTf1SNcQjqNBaQ4cg",
  "key18": "5xaJrZFhLrTJdZm8m33LqwbYL4pRbAKa7HvetHk6MkfgcC5xTrr1JdqfvTNpJWPgvmVr8rjng6z3xHtKbDzrbxn8",
  "key19": "4VEVSAmRamJbFQY9j7pGwF6tAPBNZDRTCKtgw1HWvjpGuas1q19LzyTbkWWWfx2h1kkACKJiZr91tdnvJQvhMTPR",
  "key20": "PnZtjzV42J4RifGvK5bbjv9hnmE2VTKzwQwD97bzhx8nM8q7ZQzpiW6bwgpH19KqUUbYvvDBKEJrKwZWipkAxXn",
  "key21": "5R61YDaNFNppzX7L38dJZvXHegJULNuDfmGZFsA3CKDKnNvUQvwKfPyyrcgtuyyS2kYQ77SVDpCd2wUSdZz8Ktdb",
  "key22": "2KADRF4Cy7qDrQQDMhgRSdXNyYbrWJx8xksETXUAnmd9kssTjjzsd8Lyrq3JmBQ4rrs62ci3pmVjQ5WvT7WpHCni",
  "key23": "24GaxDmu7yfmhZXzH6r36RAG7mPCqC3KoXWsanziJAwDb6XnTD3PmaCxCyzmv88pGEQcK2WUWXE1PzwgqBVcXnf2",
  "key24": "ZKoZTxrxk8CYUMvYpxpxqgLqdcztocgZUHaotxb1RV2GyWgEee375X4dRiDgqpFfYMnFjjSDa6oi4S5gi7Hy8vE",
  "key25": "4VKmM1BR4rriGdr6ymyQGEQLvTEYhZuZUQSXyZAs6PHKcvK94DEYH2wYsdvkB3NDVnftRZLk3wTRpojSRCGy2Nao",
  "key26": "4UE8DqpzJsQQaK8kJPs2cqoNmaYcqLQmLG7aZUmxjDNRDbQgobPxwuUAv3UE8iwAWXFAAJznSv6CdSmpkmdb7nZH",
  "key27": "3GRpukUqayot7GE9anDVcufccWuYW4GXzzAGMN5i2FMnLLCyScHT1Y2GXhth7GN4RzVij7m1bRfyQC9JU87nf7q8",
  "key28": "5dVTnxH5rQfT8JU9P23WqYbafdzHCY2ajgPytAsPRqfoTm6YqSwiuM3s11gyo8cwGeTVvzn8RUBJzd6yadf5sWTK",
  "key29": "5ezDh17AXcSkCrBu4Q8ACCrHuDfoVSRU4AxKrXYyRxHXPLaaY3P3MXiPu8W9bEKrCymW31cQNtjFj4nkh9XcboJd",
  "key30": "4mYzcCdUriFfeKFqw9VBjVGVqiJg5YTg1F6ipYa7y8oNxfeESEary8ePAyzRch9ZGtZtn6aKYM7XmwEdhxRDCLJJ",
  "key31": "5boeza67QKNsTWEVSxYarMdNrZn4kuTN9dtusUSWtinJCtAsuQibjhEbr9ztkn5J5KfgLkLFryQV39Mf8iAdhxdn",
  "key32": "3Ghtehu1vcrBRTwh1CsBNikpFUSJ8iDmUx3oD8GVtmtR3hAHDr82WkU7QJqTM1j6LD9MMEDJezrmFuNyrE77o5Ao",
  "key33": "5NjDb6TRjaBGJsW37nV3obErmSzpU9ebzeZDvp5B8GvpVWzRwAkwFLUcnQHRutG5hzofaeUbikC8xMWx56vB4B4Y",
  "key34": "3ZR7RRYhAVcy6grnYrsUzE6u81SUvvLxj2yGxkScaYa8Bb6WLYvpyKGsofytPJCFUCQjjiY8ZJ6knivChH4Ne2pT",
  "key35": "3ZP9C7kqRfYq98WzxuwsHxwR3ogYRrpbGS8GENwMW63ZoBjLpzw6JRdhnwypT1ybDChG1rPnor9PM5nSY7QAX9aA"
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
