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
    "nEY71kFVtGTX4kMPH49Xeo6vejmJyC3sRw8MPVVdCgtzdgwjc5tZpKZ16hW452w5pzxTg1oy4rnPqwFXzr6jY5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7tbxyJAHVv81yJx71VaRf6cTkzsMLCASwfdhwZJd8ypBPzYSL9vPqpAaLriUYx6EC3atgE4XXpb1F9n9tKzphW",
  "key1": "3AczeuF6E7LQUiotLUopTrpiM7tRmyuu4xgZkFg5xV1SzdBZBn2mnYQtqkDSpTKEMo8LCPaYmsAUj19nkUAo9bhW",
  "key2": "5NNrYgpZ2kAfrH1K6Uy33KpDogZoy9Jfmbgq7WDHsuHb9SiqhxQto23yMAwRxqM5pBCEW5PifRR2x8KXGw1bbZX",
  "key3": "rJ1DXsfiEfMK5m1QPaGozDhhfM3mcFQHygn2cR5P1eFvGG2muNCLri7evoQZKzzsAwQzwjy9PxDUYiSDfv2EzmY",
  "key4": "x23QCt3dLz9jN4hMqLfrzjD7DBwBARt6PJ4td1UyM4akfqWPrW9pnGXHEgvSqxNxditxUAeUyjMoBVcPYbKc9yF",
  "key5": "WZVLn7hc2DxJ6VSTNkCqDK2AwxtTuHzcdDknzdyQjqWrk4sEj8AhNSDZMLgxymcgUT3BTeUhVWjFnwCSkiomTbr",
  "key6": "3Qejb8cub4hch6RxrxgSyGuNpDk3sCCsVEyeQWo1hT4kCRJbES5bYJC8ZBhkDP73CYFh9cJENMc4e7sLNfAQZDzK",
  "key7": "3rjZkUadFUbUCg23oLNDfxgjX5MF9hHLbnucdWiEYPJLeMzpswwE2zCN3QfvXaucwW7TstKqbusYEWpxCQ4nFXbj",
  "key8": "3vSMQX2FyggyHfSq52TsQD9QYVcymQeN8uR7bhs6a95o1dR8AmD5H6ioVsdwsfwscKgC2ZgX2SaRamXkdDcw4y5b",
  "key9": "3urdG3YEpdmpvBXGZaW3jtQepzdY7sjoCrM32r71Nu94si17RiTMn5mN6iccEp5HwbbofhYTuQYSPWbRcomTo6e6",
  "key10": "toAVZKn8eXZDrU3EonUqCt3KjjJq5MzvxLmiW6FvuqQqftNqWivYoxyQXajzp51KqatSKcW21hxXQxKTozWNRk4",
  "key11": "4m4nMXv7mrunbAd5KnGZ5aS51shtSqLZdSfYLt9QtMfWBpakgJT8mnEXgdzHqtXaxzsK63MmNg4AjpeEEzKVdDjz",
  "key12": "4hENtzTJiTq2WXW5PTAi5WMWk2DAGqKgTkK43KwB8UYRQobAANXpSjAefZwgkQNAX2qZZ4ZXT4Lsg94fRVhbbuPq",
  "key13": "5NE6arxFxkfvSLvAqa2DUccG18yjGYPg5AvVbr6jiTBDqKCfqrMm7MmdJffjFgd6W6iEwZ8wm41nZuhCfxQDbmXM",
  "key14": "SpBzqFfDrnBVCywEQdd3ntYLeTJqMpxoZJxSXZZvXdXdwpQFcQRnVoXinJuhfGJf5omYhjfs8b9pUuTiNfzvXBB",
  "key15": "5nKjKcgWpZ5fgTAcne6cdiNWYgUQUGtLrgjGNx7XtGpPact3vwLY2p45yicHCVnmVQYc72mZSc2KH6bwCrYqa7bL",
  "key16": "5NQ5a8EKYLGrXdZgvVF3NKcNCdJhFgG4t6TZ69iwQZPJ81aA68E6iEC9Kav4Tx9DYzDECvcuYapNHuhZLLWHAdvt",
  "key17": "36PjKy5Dk2XLXzRmeuY3YHJ5aJCKv2rZcopUpRTHKYdRLYcy3Jr931MuREXAcWQRGNXPh13mdts5dUU5CNZFpRqh",
  "key18": "43G1XxFBkTA3hEc2vgz7FUzxFbcCcykPFvoSQkmWHdo8GePqoBjCE3JBYtm2ebfayo5nRUA6iPiaZRrsCq2mPSYQ",
  "key19": "2hXZxE6nBtHVGHYFq3qB5dHesz7SPGqhjuaNe5zafev8Cy9dRxF7pBuNGWXVvD7oMHNNd9zJCRfiMiRVa2n4weXa",
  "key20": "5oVUfV5tkUkoFbiYiSz8vcdu8ZB43sgqC95Rr1h1Vs8chVexUZbkh3d5Fn8QmGy3hYM5Jv3Zzp9SMqrYEuWiVMvE",
  "key21": "3cHdZrHNUYH5faf1nzAnq1mKTzNwPqP7ngEmJFZUbUaPXAE9sMiuUiKhqf6Z1yHFzXKWF8nTihcML9vsQSN6YdXS",
  "key22": "2ci1GMvYRuob8Tm2znvNodQmQm2F4tkWUidtGCvt3Atx5fFtpmefvUAZXzX1NwscBpQudp5rGGr6UCMBUL1XgxyV",
  "key23": "7FkWkyJnkSn2LkZeMMjsnbD1fBK2pbNmpUdGirZGX3CErTonudmBaT1UomY3xkma1bxFbjSYZjE3Wmm75ZL7Ljt",
  "key24": "252NEHrQEQDkZdwnvgysqbjhSEypz5T2HX6jtcuUbuvVqY5XXfwGfFL686sTuL2LtASyJGXK5t7kgQy9bjasr4Cs",
  "key25": "QhbM3h6oUikNZAvbW7RC9EhTFoRdzPHS3x71jHHyodXaQmzaQtroiPBYR4j6qaieZvmbzJ22xXaNFVd395hHCM4",
  "key26": "wThabryduMPdqWbQExiJ7hb65BTbd7ojhpC4LKKDa2JwoA5Psndw7Qk5LEXuWdpjt5jhiFMUx2k45VQmvbaaS9p",
  "key27": "3gCwFvK9VR1EbTWiwS42sHHcdo9h5vp4S6LTEHq4sAdxo2yr2TvnnHjkDJgGey79x9iVa5qfYJrTms6ABVS7J69d",
  "key28": "5uM9gQXN899D5FgYyXxjTLsXrtjJTozQVqJ529TvmvzUnavhxtGZQNPUXiUM6kARJ6th4wtBsTBtXdVWpYKiDGEr",
  "key29": "4ctZAzbvGj9PgkvVz1dYJxgPESTfSx5zPQwzT2HrLnshMP86pBjeCCDq9VpnXpwgupEk77onwvrE9kT1DzzjDKrb",
  "key30": "37houFkLjMo7PAVReQFanuMhRrKza4JVEwheKh1X8sV8EBT26oyLni4HzAXkSB923Duin42umzZR2C5mLRiwctEp",
  "key31": "4X4XRLJYyyMqtzgaVRvaXaT7G5myPDLHTmKuJatqWV1JzvzeNTgdabVHhJQfpw7WNNv4136CJpcwHmr4sdN7iAbW",
  "key32": "423ygrSskcs8PJNqoBhxktXjGvAu3RSfxmV7HebNLDABn7NP3V9LvrCHAzS2pfibCwy19pJVjcqTR4kj2M1uJXak",
  "key33": "4SNdhRzpfCu1eVnCUPhyVi6s351P5LTfnMbJC7Qt2HG3LyZQdGodbvBXqjnjmVZf8HEi5sLcU5GWgiiFEWmi1rB8",
  "key34": "VcjNWuy5CDMRm972apzeMoguqnjDAxX6KvnVfzcur7GXtpkTDtU1YsFYGabxWgGBXDJiaNGfegzxZRyb45N9oKf",
  "key35": "3pxAEy5thaUshrjPQxgUB2TsPZaPwBcRAKWbuTbEkyWJ7DgneLeprM2phtu23CupLkydcjRNDafdtJyGFTtkYWYC",
  "key36": "3XADhUeULpyNpdigfRv4hPBdJ7LCFFYTaEbrbRMsXwdG3n7LPdddHUMUf2gxqTsMKwkqK97pK77TCfMdtGTkmm5N",
  "key37": "56HLUr22Mcbd8j39bXEiGpZyJrtSSp3umjEYTa25xd2CVm4GrRxybj5xsc1JVjgem6N5jPQgvMNhpXRbdSMHZFVq",
  "key38": "5Gm2KtTzUoLgASFAp35Vas8tSJafnfjCCRutyuGSa2YNZ7pRAaCwSPeq7bmAtwTtJ8Y9tUTiUN5dDnA8cD4GxcZb",
  "key39": "66d3inU6qsUGvmcjNoeqjqq6j3KeGvNN8WQsyxYbGWK5gviGNd8xSpvxFKeMrbT9kym79CeQaDsjrukavdxz9GUz",
  "key40": "3sKn1iGmNNfMG6c1vqEkwMCvN4rc6ga1anj2AyrUKT9JxjWAFiwbXTXVXZCrWCYMkrapQuEVcej5EzANjCxS3Pz3",
  "key41": "25QNY1Ky47WwBLfoZt6Qoy4CL9rtz9rb4SCEsF1tv3juysVCvQgboFYBaA7C2G8AGnHiY4WHyjPhp5e55ZQ7DLvp",
  "key42": "5fpNSHfG5wT6z7uYUCpLb9pFTTqTdCVGvbi6Tt46x1ToGtJ27UN5TN8eqbNgiimeDM7cceE1kpb8xmWRYPqq8j36",
  "key43": "4LukRmNm1GNxC3SQ69rQqU6RuJf6LWQAGP8L6gfd6a4RXqwMV7nXpvCN4czmVqbcXbFLzgJrueGvTFS8UNKERP9z",
  "key44": "3idRJ5ArpbkHQcihVmyqf6GAjDd7zAH5xZ684ALK3zDu5vALHBcNJiEVZcYiJNAuDZiFoXpuF2Sz74ZvjDdV66o4",
  "key45": "2QTcBwVFM5EQ98A78FeCJTvahR3WWt2XhEbVm1kQhE2af8nwhwBDXdXMTZzsZXv5qPya6Hz1MErwavuxGYGuWqW",
  "key46": "32c9QKeLLKtm8k7bAve3ziaY5A7q55mTuVnie429Q5cG5QmeeQffcAuQDXFTwHk6wVZSGgcuH5i8LhXFwuuEhuQn",
  "key47": "3ay3nfvU4TK6kNdsyLMd5WyucDKyBvcuj1psZhiJMzpMZLfpUghxg65RXBVE5VT1xrAXpVYCXzpiQY5rDBZJFCcb",
  "key48": "3pWtrjbDCtdv7TV4qxz3EvARYfe3SPhHfWz5FhcCgZWdzBSwUzc8Rgr36mVtytCp3kkfwsUVCNRQcM4DgqnCZErH",
  "key49": "7Sfo3P5ZJe6b8eyd5EnjWTjAdDGLLbGNEH1WFyiQwmj4pGbUXt4DjW8AgvgsAZaS2EE3thwP6tzZyd8WDHxwF33"
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
