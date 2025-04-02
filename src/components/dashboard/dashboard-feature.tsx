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
    "4BLJE6CmyURzEqLgkb4ThJJSvFia7vboekPxBswbYwvp9auyFzfnQRHsyvMmcBUeuhbNSXud4p6Tx9bBNeP7PoHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbY9srkBKq3rDQAxRBjqVbpS89Z2SMQQjLRgu9zJiYsZTqYiyvtBCcpuT98wGopqtsaGbDfNsumzSPqqkuJM9qF",
  "key1": "2XYzvfZLPoGBzp5MU2XuccKKhz3VjewX65777hqVKEuzDr2N5AD4yTFUpVy1TbBJiAv7AGuv5Qwzq2CrHSp6AKZC",
  "key2": "64Wy6gZjVn8f1zPNv4hsoR8fWXBGva5TQErYWXZfDNgg5oRAjFNNTxrJxQ4yZwonp3DF9h7fMHwwg8DGbP1LwodB",
  "key3": "FbWsmdEGrNXnDBiaXVjJVJnbHGEVHcqsrd2G9gwVivbCTYKCvEYNWFPXaKnjj4uShMT1hEdbgkkuDmMDUa8sVVa",
  "key4": "59XP12NyZgGNMtWtH5xsbuKAXehMHXnLfokTQvkZGwTP3DG9yJXiiJfTL4fLzhYifjnPUGoEzGimy2E75RdJPdfh",
  "key5": "3bX9tQmsTjbfJEwhzVfiZZEUotNCLKw8kv7ZrM7p6kXsd1bhxVjgDECoaPK76h7f9j1UQTAiNsCVmeBsKkVtsbA2",
  "key6": "4TUec1kW6mfeX3NMLGjZWF447azJKfUJq76mXA5XSWad5Tyn7u2api1SGWWSU5VvNiqZZ4U1i9H3m4Qtd5CCq3nk",
  "key7": "31S4m4qpCUjzJ4fLmnUApppSGmqyGanomug5rqn6WcrVhLeW7kkJViHMUMG8A7r1amVDNWzuSGrmkeSGunfNQ5Gp",
  "key8": "5LctHXiyuNg4aDrdfHPj8nP1Je2L8kZojYdJnxG61sF1m8ToGqwJGnVunq9HcuNJgmxqpCbxLmoDTsY7SMQDBvgM",
  "key9": "3ERpzkcapnaLpcL6C4NkUB4vamMYcp1mZdyoLhgK9DzUMak9PoL3zsjHpTyGXayVpyMiqLHwiCLpKzvh3eZgLh68",
  "key10": "3izZvh2P89XXM6zWATpLCZP1XDZN6bPBt2UNVZzYpAV1X9ELeZuSQFk1zNfdzbQpAysf7pG6oZbrh3tEzQb16AzE",
  "key11": "4NMsZyuZS2SLocPhhhFH8ppFGLg2rQHRTFxybLAhR5vRrNLciwm811YikUwfCRfUzMXZiYasHspv9mdNbazP5Lwh",
  "key12": "qiSLW39YCxYiQEZNiy8X6w4tpVteLzrB6Mzb2R3GYQ8F9NKmiizxwm7wkvg5nJwBHbS2Fn1MZV9P6hpVLSt4LqG",
  "key13": "jKHUrDsUNSMXL1B1BpBsjUDTjSzuy6fBngcuu229fALfSjqxksxk9DMuhR6zRh9Mm9rfwDhhqskmaq2zXFZVphG",
  "key14": "3sz9hX3igPAS5A9FWv6tZWyrF9CVzdGekN5FY5SD46RTdf2subAK9H9S3xXTVSWsXM6PkDWu9gUJmef1P72pX7iY",
  "key15": "32CWeSTVt7eJ35p9tXmm9cKLqs5NfK2yHFKgLwyuh6vcr1U6zb1oSpaACAJJbYN5bahiRYo2Aef9gdncQzVLYsqG",
  "key16": "5f36Me6SAExZ2MzBXbcUeVpeKv13yKfefJb3RiAwRCckVhkbRKvYzoEDoyyF3oLA1du2UJg3bMEP5pWUGSARPiPk",
  "key17": "2GNJMAkXACcFpPKE18fwqGooih6jgwKtW7vBqkW2pX4nPgS7XzakY2jb2Myqasg5WnwTf6ss1wRCQfBKTJUW588W",
  "key18": "2MnuW1WaVSdmSzQQuTB3GDVZhqE5nWAwc6UrUHEnXdwhNh4YrBkPYzSapnHMhrU7yWGd6E9ndXqFxu6SuKmRcUVw",
  "key19": "5AXRN6xkng8uZUm2TGkenBQjrTyYLbkVfKdrSb9WGSLLQ376m5S8uYAbnw82UEFrnX1iuZZpyA16hn7HKgiJ7d8K",
  "key20": "2ASdUGxfjxq4dNdhpvGPPDQp9eDDYHYaxavsQpZGrRgYiBNEHPQyNAXB6sUJxp8gSpbhSLo493PdCm4T8ZR1qtnv",
  "key21": "4uANL6KTy1x52gYsRMs8MWmj432V48wDi4YxwRtQQqRhHpzxHk81V7KU1n63m1z9ib2RU2otWqZTXarQnUsELJmP",
  "key22": "ywarniRf5kZTeQAG6aBYfoacjawmzYAxDYKvCp7B6spBVtQ3WnQTRp21it6yqdNZfXxmTi8fZKzwKkH4ko9nVmN",
  "key23": "jmqKJh44uxo9tLyWBoS9tvBzxKkkxf3weyqc8BFnT8ghFk1t4536souANyjv8KQk5eSzFCkbF46Jn4G18yNasvR",
  "key24": "2N8kGnRUYm95UM9FoefbUxD8DemqmCkMLyBXEg2dBwftqLRFjm46fxk4TGjSDvgGMwu1KBfNmWT3BKuPR8ihBCHF",
  "key25": "2QVnrxvN6PYsvFmS2jctLAMaMfTtWE6A16Jx1wXo6GEaWFpcBTmx8SSYJprTZuVYmszw5qGyd9ChBTpHFbay8AqV",
  "key26": "2cdEgKKTwNwn8SVKqXQCFyZqSLoLvdTy1UCAumJ91vmeDdWGFybWKC7R7JyqWnMsKLEryBf3vKNsmieCZjoNHEK5",
  "key27": "RjVPz7jSqjNuhnWF5ZA1qGh2iU3Vt6K6EBDo8Wc7mfW2Kc8CY76DiHPRqmkjXTQHVLqjXksgCi9EX4KTQ7bhSb3",
  "key28": "29uNDp4pJwRqGQXrJecuUHxHKezVpSV4hiPMSV9yXYj5Pdm7ritn3YcCei1zc8bmUFgREEHvgEyXpx9GnceD2icg",
  "key29": "3p3sAq8uj1KEzKbxPC2DKh8W1RV2RDf6bZk2vCiDFBfY4BYJicXrMQ7xMvXtrjKwyAYYjMpgtVB3NVeLF6ySKB7j",
  "key30": "3AhdGVFABhCzJxLK5ndp6KW8eyDbiruNsnjnCxuM6kiJNkbETP82XQ4VgoLAHapUDyUvPCRmjyVBUkKF73erWBc",
  "key31": "59EezF559cJZVR3zU8zctJ3CUr9wRbtmh4e9yfjPipy8PdT4iZVn8bqjAtJMQUp6yjw9xYJX9wWwtvfT3oeNAkJK",
  "key32": "5Na6Qc6HSMeuuSoWoQtVxZnpu364g3w7KfzcQ3cik7KMRar9MAaiFExmgnFnp2me7fRLA1Kh3Gx8x1eLkgMaPjMu",
  "key33": "yaDMJGTt8Rt6kywyM2K86fSRvdDRgaHZzuoszqjxSXEJ4wmiXjnPGTqRhEWpzj8WzEPDG7Le7Z4FqHNHtzurgXK",
  "key34": "4rA7QEbRdWQ5B5yW7iXDJ9MEFJoU4bUSdZCJhKsXcAjT4mMJH5hMG4YKmZurhkDWxZZ5pgVDgpfu8nKGJ1vriBv",
  "key35": "4quKwP5PsVGSc7yCTtMaAZH1VNsrjMX93Bhy35h9SrV8jWFxWHfdVHs1YnA3MJWdPmR5dQ3a7JWeHeLAEGT3VFJ4",
  "key36": "2HxvpxNUEv14N2SLEbtQKxD9YSx9ywam6PN2kr2ZV2AZ3hRcoNxg8TgX3YJwCKXDwR61WQzh3iNo8eN2Pa6wahbi",
  "key37": "GU21jK5XPwdkeR6735yKTWDo36iLdURKARzjASKLtEDvJgX3KFvhs1svtyuceLdaCB4UEhA6Es9wdwEEpetfcG5"
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
