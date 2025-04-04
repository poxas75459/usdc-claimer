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
    "4ks9RgBZK5cY49bGLoEyheqdfd7cWiukQDjUaHX35pUzcriv3wBoZLrioHm3PoHn8mCt4wtbPT8gBaD9M3pnLx5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AzxkUHa1tmGHhtEFAwDLNCbE57UJmZe8Wn3cnrPqfzt6XARxMKPFFJUN6ibSjvzGcR8T64XiD6nDAQPkADZUsAe",
  "key1": "3V8HBiu9wwk7ydZKxz2wAWWkrN8AEYcdh7ZNABg5WXQ9i9WNFzYE4dAgz9R8P4Bdi7W5qNB2bebCkn7uTmG7KSUg",
  "key2": "67jJjHUZeXWJ5i6sWhLMk7QAVdvWQRoZtYhj66E8VkFC4hC6FXFFsMnhr8KyMc8eJZnQSQ47KUFyPgcmn4dPoecu",
  "key3": "2TN2m8dRiPBmGS1pASyodGC6AJDbqiLwRADrAXFWAmXi1MypDN5L7y9GAN9N4agoXbceiR3SBXniHoNwtDD6HqZh",
  "key4": "39NNcUN7pqMNgMHa3ppRCw7oeEpC4j2AwEuuoFNarqsAf61JFLdiuXdwdtGPSgArAw2hJEpBKcCQbSWsnXp9tWpN",
  "key5": "3MmP4XbMac9ibXm95jV1ELus7hnRnxtiQ8Eon9uLYsyQqjMcKZ77PBhp4QiiDy9S4iqmhbPSkfShURtpj7zTehtG",
  "key6": "L9TW4GHWDQSvgmg72GHWr3Hcz8f6mWkRBMGwFzUtte2B8c4s3HbTW6oZ43zKsDnY9sjwCmwjuhhghF7nEoZ61mB",
  "key7": "2ta7Wf9kJ4DQfZm4VDgPRwRVnhn5t92Mk2Bae9xe28KZgNgaJy1aQcxFnwysJpVN8Q6Ak76L3bkRactzyBUfB2hn",
  "key8": "61vU4DwJdqG5mTwNUaWFMz2Z9ixSzwE4r2f8GgXXtKVFTtKii2ka7WWjmeeE64EoWshdT7ipqGBDDzzbTQKpYH3N",
  "key9": "5CpyCR2vu6oYwx43euN5NuVXmv2DEzSmJ9Ni8nK4hQPPu2V8KwarvMCPZrbABezZiEi8eGGVEANuuZbtmTo9pwKQ",
  "key10": "4HvNMsMjFuSQ2qiRGtdDrT5wLv4SDbB4VJ5UzkBVtvjJ3ASfFUgoJUzRg6WQk1AzJvHpdEwp5LK2411N3TMnoUvr",
  "key11": "NJXJ9tyzzvXs8eeAR6NPD5sDS7KES3NrsiSoH1CazQhSDAr5tFS4V93rQgLFVx1GeLbW8Yib7vScwdwm8CeXBW4",
  "key12": "52bg9AmHDWm5w8Mq1r6hZZp9M9kFaE3kwBcDkFR9823rhSk3sbVcbJsnFsuiguBrvDb5FmMBwFi8BtR4jtH6pHuR",
  "key13": "3yuksYh1rbi9bSUdVee6Wrf2UDR9SgosFybo9cTvJTRFmzJZeV5mARAUnqpwD59RuhN5PYtEWoWghMLZk6ByUVLV",
  "key14": "KKfMukDQ5LeEsAeT34WW6kybvqGebY6hPhyb9GjpLa7DQNM7FjJPNVcTU744KTjuJF3DBL655EPL8Vq6EASQhbo",
  "key15": "5zKaoCyS5sRs4wqNscYdUzoUPKK6SrrsGUQtZRhwjo6UsyEv86tHYuBQyotP3LdQy1uu2XuG21th9V7eJEuvndgE",
  "key16": "5WZL9WbiwF2S1ygUkN8iNJe25hHwzk5nTaTSAqwqTGbzrDLxeS6KhUyL7cTqvTshpks2xadMFFBrD2WUUeFfxmCv",
  "key17": "2bGoRoq9AAAYeHAcjUaiEL78rhYXtGorn68NuuN7E7iGrdDXDtuf3YRqgZofD8exqE1ZWAzBD2hk84YYdUi97XMo",
  "key18": "5D3qULEHWFUzmcn8KNtXP3pfW6htX8KQYfKHNkfgM5ygDv4xS3n1hQ5Esg2bPv15Zo6t4nQWKU1seyqHScthB9cm",
  "key19": "62T1GVVBxjQ8uyjE8rGmYbinR4NYvRPJwfAETVVpwjLvhkfgW9G5APzjo55jrQJNYZbqu8RDMNQ2xtnph9cUB4Um",
  "key20": "2tDRtbRuR5Ue5HsABr83vFiAmyqWpFMkRKff3mphbRx1qUr8oXnx8EUQ2owLwdBYBA9FmLfv34ftYTLGoMfjZytt",
  "key21": "2BHdSahJiZ9ZSyZD3vHBNKcRK6yiNrKGjQxn8dm833AYg6NGna3A6kxoCrwn6FQ8dqKHtNqiAwtQtMFdQ8CFc8xn",
  "key22": "3smrZBP33ngEgbF8EwErAUbnpe7tFiXhpwHbcrD74Qmisc9BtLz1tP5aT7yZPHKQSrZUzY9u9cCWMV2oZKZSnK8z",
  "key23": "oZHxTCgZfqEXdqvmcQ1317HYu7ng7w9xczNBdEJUzpFhpUx2is7kcsdQXdv6YDbCe74F9HZBGj4FdmRvnkvZYi1",
  "key24": "21MZ2eTp1Kb7ux9LT5A8FdzNWedSuxWzf2xQN7JHDYjsCrEedSq9MYWPkwERqro4dhyz5HdDFgCNKzMieanGTJrC",
  "key25": "4hiuhE9ykvXTdvbJK22YEZyupETcSAAXCM2QWdM2Pce4FxExcPqqarVpxReSisEHsrqo9tpGjyMH1Tuu7MLNkNqu",
  "key26": "ywwPevCvft7FFNVhxgbGioBBF31Gf93KMTwMFRY33GauGP771zrhXZtaJUoGqka9wjKbUSAtyZAgJp9BTGJe9DG",
  "key27": "4KaQWy9Ua8STmaCYgDrm6XVDC915FR841UnXUgabcnCRCHF96RyGVVgonSgbdBL5xZJfzLNLQ9m6zuAKikBiG2ij",
  "key28": "VqRMYSRoiTUXTNeW3kod1afVwXkmMgfLjZMRRNUEjRcJHuPvYLJXT7VDKDdoSCBHWRmU3PKakwAnBVeYTJRgefT",
  "key29": "4xj2HRfyUEHHv2FzZ57rwm6F5MZcDDrTN5thKeVKhboMT3FZbvuCxFqTXgaoKeAH4QWnUtCnxikZN3ShGyKbUu15",
  "key30": "4SMpp3WQ4y1VXmoT5rQE95VgjMd4gSMUXvePvaickg6K36WfwbnENKD5zvZc1fvKom2fnWaMLSzUcZSKQtXQJkEF"
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
