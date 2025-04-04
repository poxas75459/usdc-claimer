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
    "3QD2LqJDsPPDTQ2yJMJ9sHHt6Wr7BFcCmcAdXuV6grvidBxxJrA3847xRh28hUc18nWo4jp5oErsCHw8QQTMaun9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWk8snUA51YQBmbXbSWRhGEAqTqPti7aZLvjPQmERtcc3Xt5AjKcty6ShGKsXqve2uQFKSQe7YFrnvhg9B7CYXy",
  "key1": "jobWky53CytdQ3nDnmgL2GxENNiQdzKyc5T4NR5xiRekYUu17XxqFLbHYsv99cfXBJKvNCB7LkY4bau9Xk1swX7",
  "key2": "5L2ZyiqdLebjtxGnN2KKxJiWa1GmAuGSuqCgjvLUCeYBe5JtLH7c25NZEYCoAQrwz8dxqCfoi9k6pkkwo1RigrMo",
  "key3": "5vtGMKuAjK6rocfDkuebtd7Fg7EGm8R3vZ6VTuYRohXmerfPT8X9o7zfJqeGLSLk9Ayg4yMsPVH6bgyUZ4jwQhGs",
  "key4": "5Ut9BChGnZjgyKN38Hk6DSzyUFTyTMpfoMtNjJYvZyepEdtwcqaSj54zsndP6SfxCpS2cFZ3WmrNUdfcgEyyEH1J",
  "key5": "7zovqobFok2hXGsurHYkMpgHdVHrw5Tq4guVzNfueNBMWDsNSnHAFXr9fAsqtJj6uFedsdQ9B9tQtqm53AV2JKW",
  "key6": "4dDhENYUF5c5u9eNWmroVw4Lq13F1pnqs1KZtQTgWP2sQWmuoBth2jdUDDTaykh6sYrRMiMk7z4xrvV2GFWi9bb3",
  "key7": "Rm4zcGwUmTLGeGyHzc7uuvYkPDu4C37vQhJMsMtzVTugdsZfaukcxhVgCLpyfgy5grNfdd7DEGU9PFKjHoZoHYX",
  "key8": "3sGNKCMnWFrJ1VqcFCBM7DU1N3yZBRXgXknXXwbXTVKckTtDXAp8YqtDPZNhhvAzNJqjYLFozUM3uEq3KqJrv6z",
  "key9": "2UbcwbMSiTrn7RjYpmyLK46cJbLptxDDdSmntsqzcg4WSjZuM3XYZ8w1A4czXLTfYT3hcLPTrYpqxkkymHnU2kLL",
  "key10": "5viE6THjQLAzsakJKo5gbeNbaCChbYUNt76BAu78amtbQt2XNfpGQJL3B6uiKDyPGEchnk3osxeoD4DMahHLvcG3",
  "key11": "3fUDHveEvZkVjFxeDTGtswRmb8A1dNYsN7vc2RyPs8qJYGzZYYZxAKtteRAEBgRgL1g16R8kwQQgRXGnnsTgoKnD",
  "key12": "TVgKHyRP3b3CzN8yiCvRZq2ksqW7adELkiz1o2y6G9xbqXmbtzkasRDcvvsm5tqZSwvsbyS372YK3SN1xDhbvTu",
  "key13": "3N6uzM1TDL4e1P3xmNMKS7FkAA3GD2McYGq6WS7eJLjTtym2cw5jejaF49v5KgLDV2WBXnorNgN4q24GnAcjt3mP",
  "key14": "dseWobrU436Surpwz5Zz4ZB8RD6KFxGxYq7mdMfigs3koKNRK7BRKBPmjLadDfvjt2BMQCabTCQ56KBYD4Vy7bS",
  "key15": "4UgKzRXfVtEwAZiux4UdfxwhEEtKpSaXatwuFguh8XdSjUxZKJZo1fcuEy6wZ67QJdbAKbXLX3yqUPPQ5duAwft5",
  "key16": "2UjjuaHUvWw4uB2kTwNVV1BKD2BfG26LjG2SLrVQH3Au1cYvLu8DTWGL5ScriBF2pTgrMuyyovfnz5rxKhPHx9Ck",
  "key17": "5rY1N8zNmebPcSiz5BkNiB6GMoJ32jiHyYZrPcHZuWWnKuhmoBM4VAH8MEhYQvV3SW83Qt991m6JZWy2sdHPeVkP",
  "key18": "2RgfKW8CTAt3vMyW8ghEV9BJNmENKi7Vw5hPZG6eAxQ4KjAxyM9L8UxfmrEfU4TFmqs3Y7ptXXKE6fEf3CLjGTaQ",
  "key19": "2jkm4S3mKTuXC7qia7ZcCZNZdZD8UUq5nKsxPsVVZu7AaBuHCUEvGHshDDJArhaxAcuLmCKQVJL3P6QviG5QHXDP",
  "key20": "3MyFpfL2NiCb4QFMQfz4N1rnQxzb6Ukid6j8uPbjzPB9m3yaknVPhWpZsHWhYzkkiEaCwKncwey7gCt228qEs1g5",
  "key21": "4mYKzbJu2e8QDozSkoi7bwQpAJL4QkFDHDt3Yw1J76To5hSVBksxVEwjmzjQ1TW9uWxSPKLJVjUygc2VYx2mkfzh",
  "key22": "3vyyKfJcTzUJn4u7MMX2gEiosMqGYpc1BcdEMRMjod7UJ3QWcZMjzZfkfseHFcmBZLenuyaHmGSXfpNuRwiLVSrA",
  "key23": "35nU3qbEwQRFp9if62PpWn9Vq3xtgdYVDJFm36pmaWPrCzoTpeFAd1PRnqBWf6LU9Eu5P7ZQk2zgB8GJij2Ch8tv",
  "key24": "268fcScRRjYqnUPN6KjsYSqRNZRXSygs24GYhVcjJDkqQuAda6vuSZS59rpbA7rEZpz8UKKgDeXFuVXP5EmhxkTP",
  "key25": "5mPt4BzNN31oYKHyi4LiFiVUxHRwBYWsvVwpVPfyFNPxfwaqUqRzhukRbZphZvZHfdh2opW7eG7edssPwcgLP1zg",
  "key26": "2BZNhjDnjm61GV7idURKvu6wyZkvUeZrRURvaBmD2rzmmqS7cFMTu6Xa8SWtTyoQNRVTmCny3hjBjZye89B2TDUY",
  "key27": "3DMFn23o3TsuPKnaMuxTsvDNJMo2wch2cPHBL1ahcU5MHftCwkTB53hSdY7ug9pkgE3UbXY3oswR4uCdANRX7jW5",
  "key28": "3n5h2UxSaqGKSLGM8LD5YpQ2vKByiWd2SfHfM7r4HEikf6TtNFqTpcbe17jUqQSyQL5g2Pun2DMaqQeeCqyvySQQ",
  "key29": "3hMeJmY4RPXaH7RfcJKoHpx4yCYeeis6ek3og4aJuXMteKzfzg83TzUYsZM1WyAirTF9w4qxyDt6Nfgkf18mqfW5",
  "key30": "xxRYwvQ6hVLkPzevrkXvQnYPWg2XatUe1B2SLi97ArEcnV2ahtJkefbn5GVrX3KXmZXtmUyzwDMvm47AbNi16QD",
  "key31": "fSkvTokkEdgFatS1dPwZ5Q5EG5s97mKEBSUh9ppdLCDaQch778QeoTcMuT4sxHkjU1QVE5XmKA7VmXHxvqoNRU7",
  "key32": "47MCPY2z7UyV9yj55Md8Poa8k2y1N4HbYuZ7qp5o4tWzZtqc7Q2CAPeDKCFJGZrbb6uEFEZjdjoFRhzunFxMjBU2",
  "key33": "5bXT9p5PpuXrr5LzmR42Dq5oyXYapv3k7srp8sCrj4oZM3iW7duoJ5uAqbA1Uft6rHr49Mst9CCnyPsQkBfYhhj4",
  "key34": "5PHuXTHTfuKf324iSLPAnnVLfhevT4FAQMHnuRT82eGWw2U34VvzjjUSL3wMndS5xFujpHrzcpEbGbFwB1PAn8dL",
  "key35": "5hGcnQ5jPgLQ3rVgBywrH8ZWgfwejyNG1XCiPGhpvbG2xMrZwAZDmqTRt8pc2MYAJYMjdNh92wqQnAE6vjFooa5t"
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
