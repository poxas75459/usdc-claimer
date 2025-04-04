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
    "5s7gUYbzqYWmrHSYeMdARsV4r3nLFrGfyykUwvKjQjN4nkCSExiZvso46QQLxYNgxvhjtap3byAAXMKj1hh9ZcJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxUHdd8CpwbyhRhAEQdS4PWgb4txLQnavWHziZZ7XUVgFV3bN2ESjefc7JtfvPsBx91fLYvRaR6GDXs9wLJ2Vez",
  "key1": "5gGJuraRZxqrVAqfuWNe4vMFvao4So3sFttES3poizHmXCtjby4CazCVeAv48mov8EgkzGYfMxqYPfJGuZQ4DZb5",
  "key2": "ZmidTurGdJZBdcbTNbYDvyTUEX3V4JVAQhqfoFSuaYz7Rc8RbWQFyiCLfLxxdrbS6hmr2ZkBmtw1FmiEoex3zw4",
  "key3": "49w8avMoKF6ZhxdV5SGAUdoRFWCNct4x7KYKrvAXQ6wTjCfGaBecPV9Y2utA2GgZ6zG316Ag9b9P4uK4traFKzo",
  "key4": "5TMCf4n3jmCKsgTnFvoy8KC7tQ4HVjA7AhbeY1mxbqAGGFHWBearUxAAFNXGovog6TWJn3y5SfY6WNPi4BzSQDyo",
  "key5": "f1nVy6PchHB8icTVyp2K7Aeb3GCqzgcAY28G9hskdgHknMku7J2ebdFRtrZQHLRDwJkp44LgFZiDb9WHwoYp8dk",
  "key6": "5qKcQDS5R9ZEjf4P3Az7nY8Ry4LCs8AyPiz6qkeBj1DJUQqzE2rHHQfAuirtEyTW9zzgyTmrZW49g7cjW8HTCfez",
  "key7": "eH14jrrk1gAB9TYysrUF48yB3VbB4cys1DDRwZX8bCvqncGwv6PsCKbAAo5HFZJ38uoZQwAQE4rwrhh22PwN6x2",
  "key8": "2VY1oe6C4qBkiYqKpZAKk6KkQWJBc8mW5Qhq1SdC4PhAXGXSgQ3ffbotFDGn8xSewoHLMGpqre4XJtjRy3jtfUTZ",
  "key9": "3Mf2h2HdRazLSFenrvFaVeXgMavrbpeSHFnWAWRQHy7z6TFTpPaJJb9xtdYEGox22uN6PGvrU76qN4SP9TipLdeN",
  "key10": "2awM8JNmNQdDRz7FfCccof1zbMgwrDKHoRJAPPQ8buHyz9nREmj1jHgR5NynnHq6nxFfkYUj9vzwyMR1Wtqo3vDW",
  "key11": "5UNWRodZieKJPXkMXxRnDTJCAgxE1JfM6p8iE1mHECqi6DLvnwHDw8MoHU8wAYqf5amM6KS2DcS2dNxuBg2VEYgh",
  "key12": "S9t2ppU9LGqftyV9QkAz63BNE52KtRQScU7fEQKaLzX4kVaoitztxkj8k6uPnYMVkG3vsrznTzmQirZrbjniFHG",
  "key13": "5ut14cCJaAQTPKrjbweih2rZSpzfQYtREc7KExQbXGj8TRcVx3jfhiUtaixpcBxdt8TP2mKjWZ8UE16swYG8H5ob",
  "key14": "4W1g7saFTcYQYD9zBZWBS6vXthe3FVMbSH63hwdieXkY8R9ehUAMGPjmWQo9gCsw8n7JTW3AvTcPZBivaGvasErX",
  "key15": "3PDVcpUqw2LEn8KagrTqeto33aXeonrYPZ6LqV1u1QVmLcp6q19Bcq6RpxPEjhgBeBptNi71iZ7kqUPMdJENH32z",
  "key16": "Xik4cRwpQpZe9ndXBzZ8fQsgpdogz6B7jW1czsvY5rfLiRXBPYQU777FjLCiMzQru7TAWprUTXxapPCLWVa3U43",
  "key17": "3mjZgKMcShPmaQo4ohMd3pmkPtpuAxjwTdmwyEmjsBu2c7Vk4tWSesHu81Qx2myFZm6mbhoHuHGQWDoUDK8UJDgf",
  "key18": "35cAzf7TJaKqymYEdZ7JmzB3t6HWTDTyJvmqV77nLDDVdJyhURFKHvc3aiyD6HoKKKdnbw6Pq2faKPdc9xzdJtYg",
  "key19": "4vaqqTRuRjwAGSQJX7Az2QedPMzqA6Np7r35RWuVqrHTN4eX6c4R9QnDbAKDWsuHN9UaVQ7oQhz7JKN2k2scpM7h",
  "key20": "5xmy94orjt3ewtzSxx26U8SBbBdnKV2yVCD7ntuDL25uTtAx4Btf51m5tmKAZiKzsJxkfJ6b7Z1T27gzKMKEckhJ",
  "key21": "4ZStDfnon2nKCtTeSNbFGhniN1RQh8LsVm5BPc4Y4Bvw8YEAadvM3dzZvbosz5Nu95sHsUaC6QfNaBHBXWfC1oBB",
  "key22": "21F5fqygVLEoQMWHHJebXZjiUCdY1J7BFwoiU6jPyjtHPG89eHQhDxQwjrBfzkBmRtGJo3NLDLnMuRt8rUwdX2JG",
  "key23": "5itPi36attSwztjyXwMCicxLyhnYrHD127eWBwBm6NTYZNDaM9C7eUDudLb4NViE7mee2ph4nYsJfzjdAPHFGRKT",
  "key24": "2vHPw2NQqCA8hTk5fdWdWzkjogdEnUXWKcyXpwajHqHJyJacAnKTgdi94yHZbiTHGzYkjVokqwKBwxZh8nEpS54G",
  "key25": "5EuhqvQ8bMLRhqLgRhDnXFqp7K7zEEWABToC3NtRGRhfBEHvE2z8TxqSRLazVJjLDEyCJgdBzaEpYGCfUJymqoj9",
  "key26": "3KcjMYJJJ2n9WuY3N7RzcmX3ojAEmo5VHZoQhvuua9VMsUTma7gFs7V8wE3QxCe6gKh2MZc6SdpEqGj7C76W1biE",
  "key27": "2eL7uPBpDtMj9R8RATpYkSan7eipXtxUF2sNGjPaS41h4XgD7YYbdjkUpdbaV1X26KtYR6KDeor6EvHsBu2vL3up",
  "key28": "WzVJkamoSi7Qay5uf9X3jgqCJ79zoh1pVuRLN4qnXDerXDQ5oMURenohuBw9KmZQ2RXUPwZt6VN86Jn16b9BRPM"
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
