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
    "45vesGwXwBc9a6Z5TwVUYqE7kexhZbuYLqAW9dVuC7kbsrXEpjrinyWLyxGWJDfymBbjZEt9yFxbhsaigKF7CCNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vx5MV9F2To5nLaHD4M9udN2Ec3TzwxZk6Q5swvt7Q99K7wUL8zKTpKRFDsjEaGNzxHTYv7HGR7PoQHuZWq5X38n",
  "key1": "2n5L1YxTNa72w6HqX1P4T6BPCD59cpcBuBAVCfNb1np6mW4NoxhbtQQqwBpEvi1jY7u1Kr3DAMJ1YcBc9ZjxbiEo",
  "key2": "ubdshTxRptjbAtVdTnWQBb8v4a49nxnXDBnyYRz7dPeGCZu2LHvSX2RNJ37k7U4Z1qbaw3WyPoobxYKdaCb1ELR",
  "key3": "4UnYDJGniXzqj1zddSNYrtM7sLZpgY4SuXUHhrRc12QC6yjD8bCj71WkQu79HsEBTDXtnpePvNAWoggenByJ8YJv",
  "key4": "GH4LGMzdk2qcgf3FfMFUrrrJXsq2866GfVFRKVc8ZYRibM1NS4bQ1ownMqHdYLBJrbaJnsvniaxerd7j59dwxHv",
  "key5": "KL21LLiEE3aGMMWWW2V3xvefYJsaRoZw8tdGidfAfgXJDjr5ij9L7QoZfMpPTz7EjcvkGMk9H3xfmGUfMYK7Eu4",
  "key6": "KJroBjADgnQftCqWJKVvVuexmHDX2aJLAnJpca5WkyYxiN5ye42AYhiCPDM4hTTWQPQNtb4JZqS2Rsjx5TuAEEE",
  "key7": "5L5NuCgDqH7WLDfFnsHHhXE7iDW7PGwHkRJNEMzivteqNiowU3Z9oLDKDjkTGZroaCY71wARpTZvdnVozKkPDRJC",
  "key8": "4vmuHXjLaY6P9wcFdyZ47z6axsbf7Caoa8z4XGnjL9h5iD1qhY3hAgF8gLk9eURzoDi7rw42RtHudgdXSsqyVPi8",
  "key9": "21kLHZYRg7EZz7SNx3mfhCpSFxtAjWmR7C8RnommdvZPsCxnTqYVgJgoCcDA2QShbr6EjqMJRnzoU3GQxbWVxNS6",
  "key10": "3czP1akgXJDr2DnB3qad1QiwVNNwQxnJdy2awTPLS7tJWfP1GeNE8id4oLtAyUHh9DG66hPaEQ9pdnSVvcXKLW4q",
  "key11": "4SzmvDYhdsrDeyPvHovLcyNJNzjXFJnttjUv9EwcfV1guw51dB1PuVbp9VKmkKVY8ephgDSrRJVNZTURd2kQ8U8G",
  "key12": "5xbqt2tmt1dmortMno1Vt9xYRKCxtMhyxwApZCQzv972vJhcq9gk7y7ZtZL8frjbc6k25orsRB3zPY48UbYupvRr",
  "key13": "4m5MuUoGx33BfRp9AViv6eCGFJpX9Qgkr7EgRGjocni2ExhyNKYgyXRxxMesbCxKoMx3xYFjEhTRX5cLYRjhyWQR",
  "key14": "39cqbH8deeeRV4SmaTKJiBhZ7Juk24AsNRc8UfEsLXGguTkURf5Wpm13cTketMqjjUucDX7groX8BaKFLcwD3ppc",
  "key15": "2he3vQq6TonQ4qD4ib483wmHjSawU9QkufpmSmnYKQwR34qbZ6tA7TBDFNVPt4owkQKbs4iL49GDQkx6xG1Grc2P",
  "key16": "3UhHpHNTG4YL6mD14ePm4vzYVygM18LfyheKRNYp58MHZGC2Wvygj32Y7ejQtUavMiQw8mXJ5kXuXdtFHKFQnJNK",
  "key17": "667xBVmnqwpAqEz9bSAVcYno8VXaygDfHxBh1pt5q7TE4AtcRvRViUtfbDHgXGRL6HbKdsDMGBY3yemFAL8N3jef",
  "key18": "dYRPRsgq3ZK1Gfn8oaajaaxJpQK8m4A2m4F1UMnp1kUPpKymmYMkSebGFNgrEMTdYmCwi5Wa1SksoeFwEf86R7g",
  "key19": "5VLH5PYYymcuSPUMeADZtjnNzeesbZ8L7khA4skNvYsKqGMGrYT5PjeAYJ6TJ9oHUDd3AKqhDbnidbrJHjTh2Dmu",
  "key20": "3KuwjYLBnHys27PqvZNJVxxxmrWXwMHebfLxQmzBqtJWviGMM9zFfvhHB8FdJgRtdqcwzMPtG7LGw9VF3knMVaop",
  "key21": "55uWJ5hvjTi83oFrmNg8AwioRFptmh2d26LDzJRaq37GYVoUkcsyukcp3NCJrbs35yQmNvHhn1sHBMay2AMuHQWw",
  "key22": "2K5mUwSE54HmiP5XQTJVDvLiJzL8Qxnakq1CpL94xKcvkHjBUQB3HqUBLMACMjPcvjKDwsnohY95XXKmtYN9NMFo",
  "key23": "3s3CUzMq2QEPkM7YZYJ4BX3aKBxEAQePXQwBzbVJTCcdpaxFCxo1iVihH26nvs3HxcodHmubK745PSoAPPqccx71",
  "key24": "5SNzSuZXYVS5RWxXkAD1ooJyVfcd1fbtQkZ7GVJ4P7zpTehSjbR3MvD8zMNR1rN2UUPasiT567qTWw22HTywihJi",
  "key25": "5rKN4f71mChQxaS4vR62bn8dxV5gYxrfbaKUTCvbpzyRT84pEt5CqR7HmvW6yraibXZik1xyLM9aQ3CaiGYfHzWC"
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
