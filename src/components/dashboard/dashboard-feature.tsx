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
    "Djqp7nncAJEPhCWZFTXny1qaKVEmGJGCFUyBiE6t6rzaYc7Dv1krR4JiZ32WjEgWpcexkLbzKV5P6JgbqdvJkRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iuvGmrNdqGLULu8JwcHYc517B5cTBmeVHSk39VStLe9gYiJZrc8Uyhv6ToTgn3dVLU12zRVSykCTnkvxrQ5VDaL",
  "key1": "66yPzCb6pCKKbEqaVP3QbpsnUU22ajKmTfz12ECG5ZSNfEES5PN1Roz9MLTqmCdPFb5GpdLdtGU6Ey6pETNdant1",
  "key2": "5x7fSfUrfuE6qRqGcTS31hrCru3p6sbhDV3YTWmMokoYkza2R5N9oHVRrCA4KWQk1Zrb4MUwb1NqjButU7YS9G2t",
  "key3": "26tHz3DFretCiw86synBvw4b4QJkrTwb97gRYLWbZYbZ5Wo5PKXujpvBo6sTDv2br3vzxzMgHiUpgBcmVgUpwerP",
  "key4": "4mwW47skSvdE89CFKDYkosACpu4roDo9WDKSWtDN4fWXjiU4UVqvDAPqzH1akYV6Svh4ojf7MzjWp2q52gmpxY9q",
  "key5": "28LkF2bHYRTZR5NVrSHssScRc5T5ScS2FrzwKiMyg9Bm7jfF7Sp4S7nUfZfvYU6ovKtAX9vbj2rbqEDD3baUYd2H",
  "key6": "4p2WG3pzzUoKecbFcYEGiAVFUWKr8tQD4ixbB2mWw5KnymmSDTWZp7FuUCJESBsWDJAuSQMVBz7BhJo7iuY1X5A4",
  "key7": "4iofGoDNumTUp7qK5Cj6EPtreK9GwuSzZ3tUcfLfKMtGX4WjSCKoskPG1scPA9fXgdJSYHuRNU1abc4as9Yv1WvA",
  "key8": "7GMoZn6y9qzKVogu8Myd2YmB8wUAuCQYkANvZnW4oGAZsaALjx6GaXK2FqKWpXo4FJ4PMfrP1GT5qnRphXCKbY3",
  "key9": "o8CWvvSQMkL4dGwoD52uHEEeibJQYBaHXi5y75N8TxvHi1JuHZR765u5RxGcpsaAco6zAVz6A6zXsDbyHeR5qkR",
  "key10": "3fY4gxsPHY9X5AeoKBQfFnhhc7YwRcQJduPKnTVPeJkDrBskmpfiYRHkrM5wUixh6ELWHg8S1V7FA9VcDM6fhZx7",
  "key11": "2KXi5333UH4cAbWUPYh2PeByMAfUZLxY8Ke6yHohBDKcYWuAMk3Lgst2hKvFW1ixVc1DLUgMV8QJ3S3MPatTDPhD",
  "key12": "2MuaR9rJjX9979BVq8y3MzP1GeJ51tXfWgbwtvXstqv2xiw6oFAhXSdX7T2CMLKFTubWSUaTuWmaoVGPLNkNGmwZ",
  "key13": "mogXMPjXcwAx5D6QtmyNiVroBYwgoeBQo4hstbKQZ2efWtKWAfUMMSSPatrdcdxKHLn8EbkrL4KpjEQjDMA4E2J",
  "key14": "GXox2yFRcCjqZqn1vXTkt2o2Xq7yoHnikf9JjdaV5cX5VSHiUZ1mk6RyHSUkUwWG4UPLMoo2cm7yqq7bD6jc6t2",
  "key15": "4RZBgn2N6513Aso9rwxmGQzyVwxrCpQMFzq4xpqj7HHdCggRLDHJQNWQnWtY5oSnBM4jKzQgw86MTJfaBkhB89t6",
  "key16": "5shFDFBBDCrtqWfWngpEFAwmqapnPMj1uU1T5LqnFFN2Z51iLer3vwcRHruqoXKJqW4MmxBc8yZTmbxisXKxSNQK",
  "key17": "2Yy2pSwyG5CYHsfc9J5VL8DHRMJ3aJfqUcDUHLGq88DBxfZvKohSmHW1xF3JscVZg9TMPrUv3wqvpmdomB8kwcKC",
  "key18": "5mn5ow76hgrchqseVq83G1JwvKvbdp4KJm2F2GAdgFCc3ZiVMZsh2qEdZGCdoqgkZsMRMBemBHjYWseJgh1kXccP",
  "key19": "5RdDhMLpPW4CLFVNj57cJ6iA2iVWZp5RydbZ7TpT8VnG2V29CyvsfoU8U32kdJbk9DGnYo24gX6fEQPHRuF2L5Ui",
  "key20": "5eu1gcRaXrMpEtrsebf8GL8dkgqCB9xLNYZEHwzX7rKKVSGKpDmkLfAXxqUPHrXztSB7UHSiujv4haBU2E6aVLTa",
  "key21": "569vpG1MyUZkQ6Gq1px9chYTozUJ4TorTwUx7TNrsnwfagB2zZHxJ8chJiAFYCj7uNZ4kfsnvrZUdkJGQGHqWU1Z",
  "key22": "3U5oVwCuTHgjwb9DbqK2wAnTvorEiyyZkuRzKQMhLbwajLdoDur7JPZbzzvnGkoMQLv5B7ptv3Lz8Gg3JdBX8zZg",
  "key23": "Ymiss6GSDVr6r4JMBUFfPxQH21tFwFfCxbiaAfvf8WqtARCrTEPaLEch9jzZy94dUoiNJKJDSsfP4sv4HnuKfnp",
  "key24": "5bFBZb2mS7YP4mg1wxdmXwhM7RJkrmKs8KWUA5FBEs2A4dj3GqRX2zBWZuoz4g1ZdrHnunonyEnWpRtgjrLAECpx",
  "key25": "q4kT7XwKhczLy1d5zesNy5E2Krhq8s7etpyQ5Bcrb7o4avwoNQ8q1a4MqantDNXnJp7Bx92xYKVQP9TWDLvqYvU",
  "key26": "3cyaWe5ExMcVeM3eRXyPY7FpeEh1eUHuVKM68ugjtzQHwB4F69G9BjAKgtoQs7Z2md7MvGmwxQvToaqoyXzwm33z",
  "key27": "5KwwKoCdZSxuqKtrcd3VHVsfx7uUZ9G1FvsDugmN2eqnxS3mKntJUhZtwFkFX4rRHKKo2aEhJT72US6j39W1yHQ2",
  "key28": "62woNRiTwFLVnavCJ5GdxxjXThZNiP69wTarizAwFam1tbu3bNPCgqohDyGMuJh1YDPzktWkesZroLDdbtHSyvio",
  "key29": "47u8u5RN9cDMMP8CpGXRuCRjRETW3FckTeoHU8CfWW3AJ7Bwa2Qkd7okZLo158JScQPfEE9pnMug6Cd8iWQUzSoF",
  "key30": "66MmVBbHAkHhm3RkHn6ZZigPZ9VUzADFsH9HEQPhpPCFvWtgqT1PvvjNLVaxqUZmhwTu5YwTAdug4p8LXaEukY7f",
  "key31": "5hcmskQaSXseVvWmnyvzU17vYzxVXrbGu8RMTr1vhihxUJqRnJE7i1ijEvPwGXTv3FJH3S79vkKr3CkG8SsGCJPz",
  "key32": "34j7bCKTrBFFywcJmjSTShZbodeJBMhS9EapCvuuXSwC3sXPUmW7XLxnRefX8gHMvZPwR5gEMSYzC92hga2jnRDw",
  "key33": "4U9bYjLzmrC97Geo5e2maMaZD6WEgn3XaoCpQWS4DQSsQZ7NiZABCUBHS3TzBZVugwaDLUs9WLqsmjtKHyryTrMe",
  "key34": "65kQfnWZYvc6ymBMhMWaHjr8xMgdK3RQAELYew8D334MdVyFDj3XaEXvY69GncRASZPcoJg3J1Th1csoNgJ1ZS7Z",
  "key35": "3GXfiJzLBEUojwFgJ9jXhiuXk4JRUS7usA7ZjZ1x6zVP1mQpESaksjNR7rr6vcnFFHZqWwb1QwCxmHQ8ZcmiMY6F",
  "key36": "3kyooGM8hLKKFV8dhFGLVxQhHzQfiB1keqbhHXUgxFk8rkewTPj8HaEotL5PWAoJ3dnaswBtUcNLAc4qTAsoEs4H",
  "key37": "2nUg4F6KsvHcqYnVvTzL8WRZcqyx3XZhvyNgUVwApA6ugA88sBp1EJsusHicTWQKMwmAYQr2Z1g6nvVSMbWEW3CQ",
  "key38": "5ccQYxWhq7PhRzfFbyUv9ftyqRz9F8JSofwtg9wtrcquGosty4jmv9bPE87J2M4UQ7owqi7QtHJ72q1x2vN3t12u"
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
