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
    "JvTMegzUxGxEj7uNShfAmBua5kzcsJpJnAWR91cFu8hHYccGLjigVtDqB4HzStuP7PUBF2TenrMaiWZHskyuHUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5expRnZoRWGzWwQgk1LrcujywBqqQDBx3WqfUzpZcJpWmLoFEZXpEGyT1zrebQ39jnmDgojVv9rNCXuh4vQTbeoa",
  "key1": "ane8yGTRGJJj5PrdSVeUSAStEGnVe2tBshPxfTf8i8VRWZdhoSyiorPb5MKYb7rQJnv1Q8tgojuqWgT1anni2zk",
  "key2": "coErMs9wvMwhT96HcrfK5UG2h6HtWus2LSMrjhrh7xyavyRoNk7SKgxaDPbRrRzSSo7nXrmyz4GNsQ8zZvJrUpU",
  "key3": "5RdRboa6jDXTt3hm56EJegVgu14VxDsHXkzJsXRfXS11TXiHfR69GTp9rKYGQtykBZAeYwhWhACc1o95pgVm2uKA",
  "key4": "5YW7T1UKP3YYEdvB2acQHvUrvcVSC4MQwth2dRusqfoAZ5ZHSJ8R7xFmx2K7rPT112SK2usKphPVGtTjjhYqjDU8",
  "key5": "4ZQU4WNuCkvcCcf9PcKZkz8h9DmD29NeybHsravCWa3etpYwDxLaWrRPUSbETFgk9k26gB9yzht8FSQKgXVQ6jJy",
  "key6": "2zSnJm4LdsdWszBfqtAvfX5SKRoCDhpvhKtuN6TED3X15SZXamYF2k2paNKwLiDmymsY4SHtcHKMkPh1gVE134dN",
  "key7": "3AWW13WowM8gKN4yHVPTqAMs3THqrqLZcSngKwPBaAy9KDwM78edPwGvYvtSsjQKGHGtcogv4xGVWEF7LzjqfR5t",
  "key8": "4VJpAqTNzNpYazT5frPuaXX36SeT6jo3tNkmWLCTn6LBf2hyQotnDUQ9tnsAhxxMq7tLoeYEoi6RSzrizud7XaRG",
  "key9": "5Gg5YaPW3vdpDbU9d75CuUhLCDHDkskpn3LWFThfy8eaNyRrA5xesVyiqTtK14PzputzxxfVhXyt54d2sj3ZSM84",
  "key10": "5LmfQBAcJV5TStNixncTgM7JmYze1xCBvBKNduqFGYUg7jJc2ZbYiRyHEYZaCjC9rj6zGJTbzA8F8gtusVGEN3Ma",
  "key11": "JwpMP3kSzWjm9ibBKkEKvu7kqanGNZXKJY3gFw3NkPNN1mutGT9zwqqZZB9cfvEGnqrCefHHPEayNwtbSVm9Ymm",
  "key12": "58Eek8ZXdrJn3UmH2WpV1M1W2Zp26zo8iKzFA3ev71dfKJ1gWkTprBHQ1Vz54C5naEfqKfezPckZmGKdJAqTwQZz",
  "key13": "8yZHzkUCmDqJ1f1632QPwg66h5Bz9je2UNZzbKRBRsZMi4m4APUjuPppMf9kJZ5uDFHAwKk56u2HyVafWwyBKiy",
  "key14": "5ZMzdxzTDhvSBvkUzyVWU3LKPVo6uZErZ7YCkZM2vULm7aSHu2TyB8cnYW4gngVuodfDbLu81tiHZPzxV7Wxsbmb",
  "key15": "351mirWbAcMSMy6pveDEq5rHmMhzj9ukgP2ymJJtxmL2HVnjYQRyo4kqcxJ992yD7hEVnW61qgG34WNasRs3JYzZ",
  "key16": "35szxyBvkSfKtQim6ZMPqpvThU7RiZ8Qn8rkwjquHqSWsjrW1WrLvLxiqfAKDBi1iGGmRkrxmd3DB85LKsz4D5j6",
  "key17": "SYCyo9Ddmpi3Cv2NoMQyDLCwUgQF6X5FN1ZYhRgx4VuBTzA3HeWFFkZKRTUyttWm8nZrdFWZYQA7dtmU9sQe3Wy",
  "key18": "4aHZWA4bpxFKAPawRroCaut1H2SueBnJEMcy46ujzqPmgefj9bw5CDqwudDmroXthLrGBKwceZQEHgqHeG2vFngi",
  "key19": "4uTfQxYvL2iiEbux43bCWMefBzSZS39sF5jLCRvLjRBSPcLDMjmfVvGBDbSfEgsVrSC8s7W69ZwTS86nMbjD9K6Q",
  "key20": "37SSoRePUmPSyGJfWcNu2tEroNiocCwZJAiyL57pX1bUvonuAQTfs6bGfyU3MHBafB3yHz11j1a2UhjZKSq3kgWc",
  "key21": "45446XGwww4isDLowHCya4DS8Khqo4iGdjyTZrH1ob1pWJUw9uvuT3riEMXCwS4PQxuer1E8Fpj9PRb2UodLzVJH",
  "key22": "2BgxCDYWGevkNBzfkDfzqFtauvTTiZ43qTPeXbEDL8mdbnCcjrBgzWPtc3jSqMddMUhFpwJp8pozjqLMHifanRaC",
  "key23": "2rYEoBAsfLju9ZJut6AxWyt9P6zQRwaooNVXSxNHqWXHjN8Pi3KL6jp9zHbRpsUtmz2eeHVGLWsgLptoHFc2GJeG",
  "key24": "5Qt1uigpfXzT16XRMShcbsMdnnQh4BzBtpEFsHSsy2HWg3M9HVG3kSjtbiSMh3vRgzq3wD9KSHxz2xw4Dx4VPCtu",
  "key25": "Zwz1i5eNkwbzwfKUbBFPCqjtMz8HPjBA3M8dvUixGMHRzYt2azLwXU2EVbmtXrnQDPYgXbmKuGpFrb2KGTHxU62",
  "key26": "5unW7wSZ4ECCmY3y7nxnvLWRmziTxxvp1hpo1qnue2cJ5cGjLHxqS5qJBnqsP2FZ4AQymJ3iD2PhZqtBuxgE8A8n",
  "key27": "3uUNdxLAZZwsCYh9hvnPnuBdRw5THWhFvwAU9fvBbLuomtTDTSfKMGmfdLBamDZtLt5Hb5WxoUDYR6UUv1RLx4nU",
  "key28": "VNTbgHykRs4CK1HXSYVvRjjPaHK8fbXy2uHpztqFBRyYX6gFJ8rzzkRdDAfqPwB6VegrB1WH1DynF2TEyWD4bRX",
  "key29": "5s7q12R9sDRx5ds5iENa7HqWi3FRxt1RXLPRFrBRH4uLT4ecLemr683DiqT4mgSRUMEQrEZUNiLMSdn9KzGdfqw9"
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
