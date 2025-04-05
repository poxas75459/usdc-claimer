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
    "2mvb9U5xZv7UqipNQvTwhjuaofLrGzyAUmTuu7FstJyCTuX2d7j1QSzh6BWyC47yuT177763oPyeQpduxToJiKGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWbxzaSdG5tP9C114qgUJH1mZLwaikC2fLKYUP8zMdJy8Hcy3KqjUB4EWbFKJy6e6YXtFSN1evk7RMSMrudX2De",
  "key1": "5cL67xinHW7uoFiBkV7gVswQoEXtugGkkxaLuAAGXAK4ZP3iXh3MJUHhJa6HfJX6ZB4vbatP3ypJZZMsbuShmWsy",
  "key2": "4w8NbwQFdWmMBU7aHqYakcZQg2e3ihxZsNgaX6RSuEi38WThE7tg9bxLX4bBG4dbBMWxbYJXKA7fGoMnUcwdvhRU",
  "key3": "4vbjB5paWyp7VwTiVw1GemCH6anPUn6QAqDmLiL19azcJCC6REC5Vet4NVdxEwbzJdjWeXmmKrqdMs6t1dVyiLb8",
  "key4": "5byB3qceYSpVwDWsE7DkPxHsEVVtex272G3grN23onRr4JDAq3hXjUJNvZYwhrm6nzDSmrNt5AxqV7h9fovLCaFr",
  "key5": "4P9xxFN71QXHby7nCbjY7S3CeJyPeNJS6eWL1EwRz2NWEC8ZHz8U3E4gvvi5G1U3TTSbKBvhervejxRuJx8e3Pg4",
  "key6": "2uyoumeDTatFcsaPr37gUMbCo92Sehgerzzmci1KpRGVS8JiGQHvUCWwD1tXLKqbS7XSen64rZrhxuFBsxgxSmN9",
  "key7": "4tTgstmRa3PU9jQdMBccw8AD3oCFvPjabxct4tfkwMeEsDEGgyMUxzbCHKDCA6F2SASg2C5WJjrgbtwfDTpvP4hi",
  "key8": "619iPbVK9LzbUz5aCSdKvkV8JvsD6hm3iVEB64ay1DThEFNmZkJvdQmySPtxAeFoYW4UTR2RyVCbMQpqsNJWkRYS",
  "key9": "2nVkFC8777jpBDpHQUoAqXSNtnGKPbx2ZWBfWzV3A1wJF65zRZb7soYjdQmiEuLVRjPFa74krhvnzxfNzJQxqZU",
  "key10": "UC3QCiE8gdFvhcQhP3sn7TjPyABatiQayrXoanS8zZM3sxiH6C9hJDoNdJ9SCiJFtQ8mW73sinbkj3v1skssms6",
  "key11": "3RCm33mSV2VRyGF55HHB67nVakZdZGpAwRmGnLCQXsZSUR9TDfWz1zUyjnkNCGcjmmWA28oLzcj4Vv7piuKuEjXs",
  "key12": "vHNTDGsZALTFZgfuc5bXA1izxq8bpX6sfnHXncRAequQQdZFmcYBrQUESa3Lm2T7Fza4WTpnLR7fJ78gwuUaRJi",
  "key13": "zp39HmERcaBF95Ya4wNeHPAz5iZWJjHaRrnfYjvKrGa4HwfSyTbUE7AGuo2SP8JZzidYBrAMUWHJ4wmQodgk63j",
  "key14": "2EJ73Zu5Vm6uJiwwacvN5QSkVhrGdqHcjfTLf7JBspubtVMqMNyYY2aFRur3eSSbnkkdDG2YWRQNeFhgKFqRJR2M",
  "key15": "3mSH9Rzp77HLvUoPfWgR9yhCiA3n4vhDmDBpkJZZgobr9d9x1fmxrv9c25BoU5ZDcLj6zcpYPHE4ZgSUZaPAWTVd",
  "key16": "BJCkNevT3V2QWD174qW8zb5rAzzQydmFEPSXc3t4N7v6xyLViE4TnS3bsRhVLxZQ8jnz2s6E5QS9mDLADzXPaF6",
  "key17": "4TmAEpYhADa4PwthZFePVQCuMRVc7hNZjpJScrA5j7FiW15AStyx8gNL2DaHAefP1pFxWADhrVJqwrK6bHm4YVXp",
  "key18": "3nHEpH9QTUcS1SbZkx4DMxiJritrDK8SjcAy2FKaVSBSU63UBQeCiQgm8VbdFL1rv5DRJGpSk1e6efeVpE2eSKMB",
  "key19": "4Su4BFu9jEL3BCCWRGyeWWSBDBNyDptXHUbzXjVKJnxKKVajw695j4AhF2FwAqLSqeX54AFkg2hfj5SYewmcCFCp",
  "key20": "BpToqKqv5AmystqYnPQQ6VnFXPiUUFXdXEZdWBDU2r3ezWuyCMETHrg86e4nznvNXhw3WtRUr93Do4d6pHCBcrD",
  "key21": "5qBW4GtmiakWj1iis67p3zYgxCKk43rg8Yuad2kZskYrAxsCjVgkdfPYdRNznRhCHp3RRcA2qiJNj3hfT5BtsmTp",
  "key22": "3G5JSPhgUche7DMk6c6v5f5ANbbmxSo43v7wQdqg3JA41nUNDDcJkuFFdbSPjVopN59QCYFgV7Fe8Xpkw5nmqsoT",
  "key23": "4uzG12XgsopY8mcF79cv4bKw3KmFKRsKByhvrDZbk3pYrNtUzfCg7nUUF9YKSr5P8riwNfMJ2CX6bmr7sAqAFz6m",
  "key24": "wFCwt1kw4mKJ563ekcxuCRVKyAVEBANxzK64Humg6UbrQ8gFL2HvrZkzBHuvx6tZ7c4nraN89CmyEmhkqkKJ5kh",
  "key25": "3B6ctXfrxF7CUts5fJiLEdATXyzgB5wcEAJykfvZuwU3gdL14h1SAGkSGVrJGj9CMR4dwtR2GEbX1fwRwEWdqZPx",
  "key26": "hSEGzJh4iArC6ZBdBxKZsoJWf28mgLEoKWbWvY6YZyjuKSknG33EY8qSJE9cE73YYUGmMGYPi9XWVvVM8sgPaRs",
  "key27": "2cxgsJaAxv6HTpTfKuNJU29BS1J3e3HAUYundW37py2uqvRKWxaC2dTqZofnEZpye638d9Gt1LxxA6McxTVgk8Cg",
  "key28": "J3eJtNqdragC5MMe7BNKR19AhR6d8kBm1bAucSBZQPYS2YfgMsuNiKSqvzPf5u7a6tzPFR5ndarEMJWfZM9UqEq",
  "key29": "53HceytY3tWDcs3vPUuyNZYPd4AGVNy9FeNb4UH1Bbz3sK3ebvia67puiwixAhKcQ81bY3eawZHeZQqJSq7H8DiM",
  "key30": "2V63nxXEAuKtFVgbBab5S3AMwkMe5y6jGXVimK8dxvDv5VQMaeB7Xcn6wGxvqsYizEfp47gtxnRSxva1fuTvuYgC",
  "key31": "4oHdcPPKaNm9QXdLyfNWJohS52Bxg3QqZLimH4c42aRYv1EMeN81MN9iAjmBf5zqMWCe4QBTKki2nkLDAZHfMKNw",
  "key32": "4AayHaMVc33HPCzDFy9MfwrQiRCrKiKugpnn6JAxoYAehyQ6dKa2nXwy4VYoCRYcqy81a4ncM7mgcftmfdmVAvDy",
  "key33": "5tCnFEKjKNjnC2uXNhzxA9FyBegrhSPwBLgQbMdtJ52uLbrKKCWuTUeRYw2kTHMpZKPQHyaLnnmHDPsyaYP16nmL",
  "key34": "2WG5rKD7ZAq18GnVVsJC8VzChNSixPTPmprnpLLdVRwb32cjKQ6MqVimnzrAUFBdak9FURrER27Xeije5kU4SFMj",
  "key35": "4KC6TRsJnkbH684rRx4Y52K9pfWcGVCUBJ9LayUhSo8RqhyocZgBT8PiertLy7kpzbmj7in4JcpkmxFuqDwxqssw",
  "key36": "57cNbD2GQgCM7jrHufdBKFXWvNQaZCMege7N7qqQuxndeKUx4pARxk4uHgLbcrR1XJZyEdQvPKCnBsbqrLt7QMsq",
  "key37": "4swTnT2cezCwtVhMg3r7pZieSAwS2cwgHbHsbp2vsAv4R4uBznVfGfUrjWbMdcW857kTss5cA5gqzje4e1KPu4Qa",
  "key38": "2igvMGiuC16Pr8qfavoCbfisZFfWqzUxM435FzJ2v986Hd9ncepxxbdvCqwrokhbN8G1yskpgDqRDBGuFzn5Uxch",
  "key39": "3kAAvpvhvDBQvm3AeSrQjUgoYUH34Qnfnty6pgHDAZv3UQYRwVMASoQSZ1qXreQP1PAxBzRscbKtkGB3sFkU3rSK",
  "key40": "4j1yXmZpHgCNMYdDySc83TUfG1vaL3rGbwGLqamEWqXADVk1N9Dx1nRJygX2Nufr12aQiAdhU5NjFCT8niJkTUEr",
  "key41": "Cjb2qNAf9B2w2mB3G5h24i9uJg6f1x4N94SBizanR1GrwuLd2agLsdJW47ogo14KYhXuLZmVFhtxssuVEpvR25W",
  "key42": "5byLLmEZMoe7oeXqusNC7K3YPxiK4bvLGRm7YB5R2Pf6sBwNvS2z33pWvGsorF7ErarTnvJhtMyTr34Wn9iVFUuZ",
  "key43": "4BPVQuZJ5UTnZMpFo4CTyTBQMChX7jceXisuif4WBeHrfWKRkmf3oBG4NDiPr7ccw2XMD84yduYXw8wZpB4xjP6A",
  "key44": "2T8kwN6ShcZw62ups9Bx85hR9mf3wD94uYH6nWKWe9yY9j58NjtFGSdNC1VJKZ8cujqrLUBabRqYUC6CvTTK9sdt"
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
