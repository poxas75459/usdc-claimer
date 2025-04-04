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
    "5xdMg6rdFELzQhQtrFJPtMFmYRfj5vd7pDVF1CktiGAxAAfrZyvi8YVrmtZLVD1LRTSW6Pojvm1BjFLdvsLEsYzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGKSYGZTDDph3udhRfJ7aT8gQ86r4X8ykQXk5dM8RL6d2xL6qGZCGPd5zKnFbhJpfbATBnZCCQhrJxMLTXmKbqg",
  "key1": "57tRLRU1vqrPLz7Xv2GDF8iZGQ6QoM7e1QnrEMumYXY6tAefWLGoaU3NEtn3exTgx71TC1CYvFTkTAqFVAHGPsQW",
  "key2": "2dPqYPAsxVtDjhqUSC9Ecyz1ptGoamLkfULcu4P7h2HyiWhjcUJBVDSqAx3bY8CfbDEL9mX4FStDMANUaHLxhjPS",
  "key3": "3vBHTtVWpzRw4thiquSV7e9i8GTX7y2gvXQhVuviDVcMaVSfMANEjoLuNFtGvGzE34GS2ALt3uTK9eCs3GXw41RY",
  "key4": "2Mmc4qVe5pq86KtrHXb4jPSnz2ntQcT9Rk11LPicVYkNpXEJfPsumPTjFs8qQa9gb65q3AYUsjB2W3B4apkoLriA",
  "key5": "4o6bJCYtYzzAiCzGhfPxSpaFwT42ZFp1NrD77RYQy9woMmiktQHZHNGmeSjgebPtGZ23MX35dHpC5GXm46seSD5x",
  "key6": "4qkWEfKoYFx6d3Nkm5HJ2f9qSHPCdS6L1BTMBFbcJtaJF3sb87Tm1mtj9JkN4u5AKWKosjxXAMDxPrgt6MzbGDXV",
  "key7": "3eru1pvuZkgZw3UJUq6AxwzEmdhNhFLfdVjx1H895tE6hy1TeaxFvwjCvefScwi6dWwrKcQvQ9nYJZ9joyHHpwrX",
  "key8": "5zqk7ba8DPmzsj2di9sKJDVLb52JbGeMiJ3pHL8CxtxCTfdMSecCvtbyAASzkPH5SAxftk4y1Skk9QPQrqNNRgt5",
  "key9": "3z1X5DBuUeFiebvz1vfenrZLVmF6aewm5QvcNi8rykHtsUYpot5JSrVkP7J1cjUkmnpvhahzfJWWdKi1qk4paRkP",
  "key10": "3XhBtvMT44666SJB2pEXMKHWbi8RCH54wTMzoas93h977wmGyr9iiz2BegwCthDc3K6gmNrLEYBMDCwLBHhYsTVR",
  "key11": "51YT2xC6CLovGWtFuhAf95kQSFEbS6vA7rVQb4AdkfopryHkKFvPDupWJQ9DdEomWJQWKiv579zUDVunh2pUT5aj",
  "key12": "ERn5HvaVb3SXcgmbf9QeTqCpkvz1V4nsxNN3DPC68sdMRGrhdEokg2Ccyj36Ev1xCLPRWHszDqnaQQvFKi9UGdc",
  "key13": "41vqHAHvmUEWRsqncAfHNBarF4H3LMXjGKAZVtEHAJeY86axrf6eEdiMUSJrSKG66bYoMkpnvN4ZhEAG6ySsr4RT",
  "key14": "EeLyBG7srKEXU8gYPCMfXZMt91D2e4oTWbohB67JHEgJJE1NNVtXjfH2ZrzHhtvi3GyAZGY7o8FH7W5Fs77mSaD",
  "key15": "2KVS3RrA1bjLT7i1F3wXLjxVsTHtjnRpwmM936pLX2fay2vT7rToWMcJfKJgfRQJBGqgtuKxPSKTBgDjKBrv9eqC",
  "key16": "2Na9pVL5432pjTiGRaw2rzmrYGJ8FC9bW1EAAmbEBdzxuwB1VNVcHtyGShHwX6HCWSPtGTnZG9z8mZZhoMAKBYL5",
  "key17": "4AnZdhw54yjDDoL7YcqiBiQuFkn6dxMASTtE8FLoYWdz8hpZZpKM99nwobJcNQDEr6jEXLzHj8PtLi29LB1DVmCw",
  "key18": "2xvbqZHdMqTAge8zxqVoYMVcQkUDqtZ3PQaJSs1rBxg4v86HgevoYrnJtpDxnuxooj5KfyiSq91PDLRAgTQ4BUEo",
  "key19": "5pdeEga44esimtCvWEHRiULay6z8f7DY8gwpcrQKimyE71KSNVS5hhf9RqnP4kXb9wzx5nAAE9xcTYNaH3nvgEzz",
  "key20": "41tKJfUTWLe9E5mJeJ3ceRcjZRiDJGbv55pK1pcDTNuutykTBvzzqYzWmeikqRpasThyp7VS2fsoy3omZBJKn38y",
  "key21": "4Ywi897Gcissod2iU2W9ZtViy3EZcmXQXPEZaJwEgSLCSs8Rv8VCsw29ja3gwoQ42EX7gXQxiPKCZkcRA2nPR6t4",
  "key22": "5oAKEA4BHmQrCSecosuU5wjVeQRpjyhUALqDW9fN417wJ4qfogsErfn4ERyaG2zRFhx7M5YRNxtjgZJyHzjKWDy3",
  "key23": "361pZbUY2VmEoCBMiLNKrJjBgrCQdd5X2gDEFFqZVcPGg6QUidXyyxwCnenKjcBtY4wQLaFfncFwhzJM6h48SvnW",
  "key24": "4bPznKvkZtdnpuXLrJNFBf96LD35dX5edBXoMf6VGkrdNwDcNqHfaADXEUWc3ymbmJzcTVmsSLvFeumbFpQuFAae",
  "key25": "3dTMnzepjKghJA8gDnfyHTALTu771NqFebkU3wUxPNaGAy4krwypAMNyrCFggHswWb7ZGiuESqSD1PWdhDhuoS9F",
  "key26": "3fiLuGbUsXbBforh4oJ9UYQC1hgBxCNvWpWpvNXq2HfDZ2BaxDZAKU46mXVxe1X7okYGf9YwYGSzCUQcxDp9X6ZF",
  "key27": "2xrQ5GDRrKjhr88367rThRwubG9C3sFGrr88EtA9onRZSjWs4SCVjHvV3RvBHMLMevRg62EM9qXFq5x62MpBNcx3",
  "key28": "2rdbqiatVNTcPd82zkDte9TExzsJ17yD8HQeQYanEKnEWfiJnyQsyPyC2uFPjdXwFVjSo4TXt1tALVukqVMBFn5b",
  "key29": "4kM5HhvEfFmTz5PR5kFLSq4FGqhTtaJnqpJKdLxdr6zAYJ2AuZCWwnoY76zaUtnudkN4yKNJuE8JqHuVBXRR1LDj",
  "key30": "3huyDJ5A5vCqLFYWzbsb6N9za9RkEfWCCpvcmKKqYB4JRHKx5FMHS2Hi8xGvH2NRzStVjaKsXFMovAmnrq4Bo4wo",
  "key31": "5DJGkjB5KgpsJZbwkv446FVQy2X6s75jyAAGdUHhNp7CX8585Vm3TdoFSYsb2tbo9pN38Cyg8tLhJ5TnLwtX7Szw",
  "key32": "33Ms54Hi8zad4biCsSbNsGL7dTgRPLs2MEnbqJHEsSqNMZsd3xPBpeBksKwbSrTuELDjDZkmfQZyu5j7XNGQhWhh",
  "key33": "3pGY28vYmhbG3wt7F2XB3sQSwbzr94whG1Vnw3XDZ3brnYKNvmXzdkAJtNrE8S96J5s99R4FTpUfzMZig8LwN9Wk",
  "key34": "4nJHuK7DKvJi3621j7Ewz2u6ZQuMmwFsvFVLJs2o8fG3qn3zcHGLP2DgraKuMgwGFbMzide2SUyPpmHZFBEUH3Jj",
  "key35": "5eFi8wvpZJfA2D6iZ4H7CzwyVdUVGz8GphznDhKC2GD3aRXXfJxEiWKyDBeEp4eyTpFF7uDFeRQ1gejJ2xGvSKmV",
  "key36": "2vgQzBUsnZ4xh8uZtmpBN7iMFTjvSTD6PL4kvFmqsZ6ErCs5oTZ2TLcm7mcUPSLGdKhTbgB5zKo6ttbgXAEwxxVW",
  "key37": "2CoqaeqzCTMfdb7ML955txq34Gsnm8SJ1MnxZNRieZsC8ei9CNG3QzMmV7sMy5WJuLcVXSY3neuppbKUweCjLsn5",
  "key38": "2MZ4i76L82gYMweXMQAJ6DRgiPEE8J5yadXes6TgqDKYGh7Xbr1aym4ChvTLuBXouzUE16m7zDdGaGLoGQRSsdde",
  "key39": "5N9Jpdoy2XvbHpgPYZ59x2sNdEhBti8mBbD1aN3enXhGhMB3NheDFSun7KHDpx5mmTny8qzWqZrWGnM4Ya6PMgcH",
  "key40": "3HNStagGMADuZVe6sRaBnBRVuEw7F5yC4dfnpnqjnZQq84Y4stxbooa4bVrsUFgpPfowH9ZHdJvaM8pAPTAJN4nR"
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
