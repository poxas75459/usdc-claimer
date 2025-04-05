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
    "5jYXmTi3fme9t8ePdYW1si933o3i3XyfdcvXsCWqysK2WeyHidioBUB4z8w63m3Ggfc9JBo1aZY2qE2kBDRGpEjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZruHYcPo99iVWUws7MYQ9tM6dQjqWboPcbrB87uYL5yRe2AX3dSbiiTBparkBL6jmFPw9H5JcJPgttFLLYyCNG",
  "key1": "3CSH5GyUENUtjT2JUMRLR47EcUtKLgFNi1RnCVD1atEEf4V3ZdrodYKXC8vemAq2UZUasovcyu2JJmB89X8EXtWb",
  "key2": "53KL6ythciKxzZqitwyGKxvJVCjKikwamifER4CBLY4WnFP8snh5S9gG5Xi5eR2vudQcZncqxB3kS3ynUHhhgviX",
  "key3": "4pJutfYA7bEhmxDwtKNdZdPX5inMKNnnQW84DD2H2KM6wniudRnh3bPXHZ12r7oviFUMfB9AFgDwbQ9XNGWUZPvb",
  "key4": "4MQ1LNmXg63uYPJcVh8CzL6KVcJJ5feVkWRdgDkcEsGf3jMxzyEFdhKpqtwGJrA3xPvCGkaM8pfSUad5cgTDdX9",
  "key5": "2h55548QAKCeyPpv2ChdwsxTTPndyrZMU1WKuTWWebXZAbRD6rteA3fgEiJJJk9GM39pi3zFFHGU9ad72r96paep",
  "key6": "5JkCyaXDQgiYuAj91fPHvVusPqEqytuav9KV7mnD3Va9oL2HFHDVBVnWGBxkGD7VANZiqszpKrNBkjibLVdcAMgM",
  "key7": "2CwBwh865ETSxvfVQqP2TnzHURsEi4yQ7867X2meUnW5WdnjbXSzww4Hzsv2J6KorWgK1rbrdiHjKvhRNptxq4BB",
  "key8": "24DkfCMFJsjj17vimqcVL2WuqMKzm6BC9UQYTFBZE2ftKjwcFR8GkCgWYLCamfBJPncSEWLxMX39P9XPWfgboqZ8",
  "key9": "4QZjkAmxpTR67A4X1KK4QkZ1yQM6zc55uB646AbrUwvoD5cV8X5zzgBjVXqjhXs3j7mTMu9hhNLnuX5WxxMusqpA",
  "key10": "4NgBHWFp2SAqPChceDb2RwPqsSiDjjHW8Wr5M2W7yzKPRrG3kQZUSporSkctZ8ym53tU5A8gxd3RVrZTxeUCGU3H",
  "key11": "3wdQkQqd9PLbLYRqt5erRQG3HFvuDZWD69snMhXeA5eRC3PmJLxQ2FyXQiHyz9QXtk67GZ1YQns7rvCz5RJQCNny",
  "key12": "5fKQKhubK9qCGXUyA6wFB6eTJGkGFJEoCtEHWZ3p9E44PWb7MwdHQwwrnqhUMp2mJctbANttwtf6G4sZ1AvEhiPJ",
  "key13": "3khZymJAWQ5WSR3h9RRSWUGgZCheTbzGgAdHajhMFc9C2CXVYwmcEXgg39j7f2JSHxyfAFxxjBkZ97ZU8m55YooE",
  "key14": "2gBpDV2ZFsou3BXa73a86Q8KGaeAYHdSLgqZ7EJ6hiY6UywNQeJxYrUR3viCYTUhwrTqt9saCmJx1eytxQ67V8hE",
  "key15": "66AUKN3zDViduxbLBEb27UH4BPp4QN1Aan9YnvtLu9JF2uqPjBobot4UWTGnfpkjUGxGk44E19EgykvLFbW91Z8W",
  "key16": "44zFXqcuomX2ko6SYYYGJVNpD2H9xQmdbdGxZmk5Mp2Dj6E4QPMtnE3narvmtZ7H4aTGhCTF1KDSnLwkGkymDmGH",
  "key17": "2gKmaRwzdF71LpeTJ9qsnK7yS5zHcBicf4uCMzyiEgK8VExWwZokPmAMoKd5neyRbTn6WQ7pqz62o1XR2RjXJSVt",
  "key18": "2G9VbnE5oKKbyZ4wLH6PEYN1oKmtCdLquPRMWiNTzXn1k8wVoYZ2vLjm4dGM9r6yrJ49dyNnm8H6YJYmM1GN9pQM",
  "key19": "bVYgvsg1DHfrwqzKf7r7diuJz1X1xj7SxStPhZPaZerqd29Wq6ZeJKAy3TkAQxve3ipyiYzVkWfp8xRZXjVPVs2",
  "key20": "GFxoWdukn8iAbXKMaxqEkYbPpD3kG2t3gib6ewzrqAiEzUEVZjCizcYuNW6HFVLk8kjcsPZQxctYTYFVMfPXFgf",
  "key21": "45RnhEZPeKQtfG94TVEnowNyHcx7HpnCEJJMzFG7ptjtnqktzzsHQgMJCT8ijAg4wVFeK6dW9w7gCaCcfeLrhBb5",
  "key22": "5yAahEaHwU5xng5egLFBYEKuWZSSeH5CgNBekg8k91okSbdkqbFa5NJ5DBUHdf4xgbU5auf7LAKVU2QJPc1N2Jzb",
  "key23": "2hLsD4DpErUeVkGpJjTj9agm4bJVU64jnqSmk7epQzatFLpgGx863apX9ykJyuPcup7PJq2Kr9YjXyqzscjjio7X",
  "key24": "Ecs7RPFgRiaLPJP43LSe2Nt9h4qcBr6ekpYghiUVmsEQDG3xzJJN4reQj1YX9mTK8yLsja9eD7GFG1idKXd7mkj",
  "key25": "KLBNzhosTUHXY6uTr2rQCzSVf8Pc1UM71wK4Hi9mvC32vH5UjhatVcukXtC1DYAPY23HW8WHuShwbQuWnUVL6dn",
  "key26": "3aeW3WYPam7NJcHCdbDPmA3imqWEWHQfzzyrbV3XKPxFuc1aoDnu6E4EcAhXASKRvAeVy4UFgAYJ3WTrX3w9Evgk",
  "key27": "3iSKcC7wZCH8VYY6qfLFutBbxkomGQbmSxBGzoCWQ5degZ3ZZcGmjz3WPJTCKbwTUPHFQ7w6VHEb1NZuJsaxV5kW"
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
