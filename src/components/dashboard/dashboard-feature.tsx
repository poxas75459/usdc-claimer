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
    "3NA6uBmYaHvEq4hvtQ5E4aHBmF2dFCsAwQHburH6X1sfRUpHbcWgUUC37j6FqqZmd9ZP2aB8VYX9gLiWmTMpFAtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwVUnjt3MJsNwPej2tAf55apwmgVDYCXKfC62QfaKQDD4oTssuJ9x8RwHGJEjKnA8HXEvU73BDyi5z6oHV3HDrw",
  "key1": "3pq24mEKv9TFeYZdy3UsgCVrCVoZBi8Mz4iF1i5JA7MPdnVwqenKTaxkSz7Zh5bvdWwjAmn6uUspgisMGactV6p9",
  "key2": "3V25NTm2eoHPHCqxWq46KsjZ2Hmyi596WKDvyDsDg6R9nFmu7EvtWUBDH6Jo3XXUsWkLXh47aBTS7Lh8UmjPzAv",
  "key3": "5o7tRkzgyNAcF5ufcHkYfYEHcUAiHba8TtUwh4EbAoXsvjVbbHTB5F7wRtVUHg836TfQbQhjGbyPA2tunwn9PRh9",
  "key4": "4bEtqNKo7XWrK4NgYju314pSyosS6x9BxXSSqwEq4kymX2Zj6SwHPCX6XbKnN1wn4JV5Nph49rLc425KCcMFedK8",
  "key5": "3SvC3uZEEL8imiCd1P3HCpMu2EFX3vA7tyyP6WWwZpnJ43n2sXjh8E2GiUDGhDcbYt7eHcN8Kuc9Uw2oFS9H6gtQ",
  "key6": "4j8w1dEHD9CHfrWkWLNXrqLsmRqumvMJkRRszJsAY1Jzss4tLE4Cah3VFJmP1EbKo7YxyMWRbW5tiSJ6EZXWGt6w",
  "key7": "22xv78MVmmVhRXaRTujB5HcaYhEUNG6Caj9u8xHd2h6JGBETURyhsDysLDG6swtEQohvh7MtF3tTihyv6CiDkkyM",
  "key8": "jSujTT8PUiiXWwgG3fzFUuDEpbKNruq5kVQSAGKXBhaQf1gnXbhyGkyeNgEQy6wSFSSQFckdndxkHzjBZuE9xQK",
  "key9": "4kf7dETk4bHvV8rqdUoSoyG5HK38NB43mpe8cEBWzRVRKQz1WVujqbR3xSjFEyvGryMfUhP2dJK1kTj4mwr4rF7B",
  "key10": "4BXH8aLRSVA8WhvFESNCQRmjZBRVHKx2MpGvgN1iqnftJRwFjdGym4FjfDFhgouweb4cwURKRhRTbKJ8HewEJmFZ",
  "key11": "5tUsNSisEQfQqzEbAmhosjhxfdhLrLNQr1AYutWU6WyjasgRcQsFTwmknHJDzhobThKVkqbHA1Kcz4NXqUwwmJBi",
  "key12": "54VrVn3P8bS98oZpwpHu1wXt1DDz6ZndBGmWk9cGNo6cQDA3SvoBTE8Skovdcov5mNKjxruFnvUg2VNBkHRp66As",
  "key13": "2weMKasqbPP173k9dEJPvoWBJrPUD1tvLASa3Xw5oNUbe8tiJmCYZdLdJGZef5ykMbq6C9q3R1mHPeRWMfoZmp7j",
  "key14": "5WmjE4rijbdqK6nvoZbkmT2DNpZN1BPUUcL3i85DDJruseXUMveRMCPnBhu6EMox8G9dko5LXwSab3qqBjTsjTxN",
  "key15": "5V2DgjJErVcMsxogzqzy4kQGKVsGzxH6snLC1fUBnJm9GBVH8roEcY9ufC88X2RcJpePcofsBpqVrVorKvF8bjwr",
  "key16": "46L1dM1zSa2vWyt2sNt8kGC3rAbRWVLpU4quMbkSrqykC3dzTcsu3jV8oYoMHio6qZwZbdkc9XGngwrGaqJFACvf",
  "key17": "r22jiDtf85APX3DK5HtUHiNS2hr9fcSi86KxeyyKsYPUC4s6uwbUej9afU38zPKRNQKpjKUmUkRvzTmtMtpx2qR",
  "key18": "5GdSCotz8U1axtFqpQAUKmEnkYP89ShTsf5EQLsUJm67BX5dGAAZp6rQkAR1KHaBoy3EyQBrzrPfftj4TBPT2Jms",
  "key19": "2sqx5wdKR5DNnLebx12pgbyY8TzbVJHZvSQmvnizknZii2QLSLjJiWYd66hg98V45w2SSvjFFQEMtPo61RXXjKvm",
  "key20": "3g38bA6svWZdEC9XaP66d3V6FLzr7ZD92Lh15Z7xFctDhFFMM9U4HFjWVP89fr17WovXBoVbW3JjVhF65DBMJhnX",
  "key21": "35ASkPxipJQVu8RjNAKhdiZFjDy4UFEuzSQMQ31e6fos9KL4AeynXAEPT8SK1YifwsmasirXtNz1arXtbCsqyaLP",
  "key22": "2wz5p6CC27enrRy4GVjJCYLjUZQ74oTgHNxdkcgwbCrvnuxYNMbLtFFrZBxojegkjg4WFj7kzxt1NFQ4pQ4AbqJo",
  "key23": "325t3gHbu3P7AbPYgP8kzgRKcHBNk6eDAPnTSJ8B1uwc3NgCvAoG6RPKaYETjDwgjxMWF5Ye9JMq7Y1sUEu6L7XT",
  "key24": "2GGCoBcRvaHw9d7wSxbHt7Erw5VZKVo4H9QGjJPvekE5LAvdFUFyG1YjEJrBbsk73zyZ5C57i5V2eMnm3DsFJ1GJ",
  "key25": "3eiAXdC1UWZ8jQgrpbBhD6tZakwp6ppKyPHYc6cFo9F8SQfCcEB54aZYbUBENT1ZcMrfJQwnVN2rFasoGNMs88wV",
  "key26": "MYEQcSwiLx5carTgmdYUMWH46PJ5ZB6nL1TNkDtUAVFt28oozkKFpcK3cyantpaaKY1aY1S4cn4nvZJ5BzRxJf2",
  "key27": "3Y2YyK9YhoboPMNPKJbQdhjNFBocduALZtwuV4y1srZmi1wpgQbebarJ64f4HppuAr2K424XFD4CuHWptFi1yDSR",
  "key28": "49wpc8qwht53x1SCEuVYYD8C3aS36ZG6mBL9UEDXWG9hKYpaRkVu89NtmTm1Lw6hbPDR5vF7u33Np78jgzqpowwb",
  "key29": "3cVYhsmEN3WGbeKaCCjtQ1xPobeEY978GhpPYt8dPVeUTz8DNNziBtQC513gsUJ6QUVdHFjMvcGEUMR9ydgWLUjq",
  "key30": "x8VkJqah3QJhUZfSPcE1VqVnktemqB7DQMS1wxerW3SaBHf9oWjaCbEeRxBGyNx2zPsKrUf5dgzvEzCBe4Kjj9z",
  "key31": "52BcnerWKfVahwiXuRNeBjLGwK9w27UHji6UfLSXCPTMxyBRSu6GyJuhgTrCcY4qNrEvAhxd6P3zdfq96jD82CzW"
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
