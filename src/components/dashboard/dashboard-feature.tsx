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
    "4MT7oo9Cc9y83aVrrn9ckzjuAYHvrjWrDjKVduvfADsdhaXpoHnxEiQthQJJntqvXQ1D84CcEKDYbC3sZBaLXQ3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPesRWmsHLrHqPtHkDQ41CQHWg5N2ARe3rV6CcvQiHvbyd7BVyex9pPMoZWUcWvmx6RfuFLCXXFEPk1c7bzXxcj",
  "key1": "3d3AtoiF5VfqzJQ4LorWdKF21xnmjz1i96whFfrZGyniQYWhFQpPVXWriEtkXWLit4Z5wEJbhimrJgJfQGjg4nb4",
  "key2": "5udQxGxqoATCopHokjJUsh79ds4sstVebjSip6UNTwpEBCeP5JnKBrnpzNqMpQnihsGc1VWL9MSgYYSfAQJJPeXF",
  "key3": "5WggmjqqKzLXjeChmd4zoUVTsvkRhe1aoJMa7rxkeVh3MLJeRYz9u2QwjSiqQ8PLvdwzdJTKoQ8MQdMFiWntS9KH",
  "key4": "4MSx49jbkQubCDK98rmocdQWcQGQ3WsXc2A7ckduy58X8HBJxmS76GUw9PKYP8HSWLDsL7XDiPigM4KdrLYbxjUn",
  "key5": "66qMZT7wYLgQYsKinAFSQvBtrnDPWeZwdyTMLudoFYTTM32qiERTRfYAbnqYHgEfrsyuJRMkYmyoLDZcMtavK8TN",
  "key6": "5QYp41pUGNvjzS7vVQuG8R11XgxGkG724mUyBm1SmSPNMDeX1Rc49GtFVfALm3yMdi3ceySdWiQF7vVy7fLxBmt8",
  "key7": "4wNfc8nQzKyz9gx1WrdQpwd5FJ1s5qu3fJE6ebNie3qbkb29QU4aJwbgiVmxv72SfKAZDdwjTJxf1fdUQCGsgorr",
  "key8": "dxrW5iog5fdLYd4uKZbSPopNzeyZGkjsBkbaXdLAojabd9MkgDnc7NAR7pj3QZEdtFhWSt5fipbwCXBMumxVdAm",
  "key9": "2mYu7MZopZT8NdWro1aii9AQVaYXGuwfrh3vXcPUeU3VdwFXAWu9Zc7YZNQGbLvmbJnpLWD6sNwJxTj6HGZun62y",
  "key10": "4K6XhM7wALvpQvLFqBP8yH6Wx7gj59ivy94LFXyqcsUr9bcXLhX8vgPfvMwdUJ7XX3Z8tQvkwLCY9fh7CJqrogfF",
  "key11": "3YYNHTf1TGQ5TjB3n5LQsbTJLdEWjoySFo7U27Rz4yrK1HK41iBtSeicQbKJ44waCFqWUMUGgvrVU7MiGvTN364q",
  "key12": "51cXXh4cNijvAHxx1uAAr6hhiAPLtKxftrsaUc4hbTzdZJZ5t2v285VXrg14hByeDv2WkjHErzGFpbFRxbq4GTAF",
  "key13": "25Ly2imQBzLFUUWMJC97SjnnDsK8EUydhBDhrgsjTmokG8cZCgFjjnqmr9jZV36AGVTxbtGsh7DeB5XH3ajmh4v2",
  "key14": "471fPqYARCBNT16TydU1twCt9p9WvBj3gscMm49X5xPS6J9xNuTCPfmRCqQJQejeekhucvHjweKqEEk3q5u2XdD3",
  "key15": "2bxv79FECbvvMmLVSFCxQeDVEvZceGUR1AVJwMHGywizF4tg79t5uG9V6BWPYhkQJM4ZvuVMRPDWbUMNQYpbLs54",
  "key16": "4TDR6QqGJ2MrtPKhJv7pLMs1mr1jA81Hat6vdEDUDLCNXukSRRVHhUrSGc9AbsUiLKLcmfZSpBj8U2secZJFt4A9",
  "key17": "2zCjMdsGaXPQKPZLA33YQwwGjz2Etd8QUZ9G8NfSJbsZsHVkKPLG3kb8BhViH5JKQmaiJhUAQnCdimEPVpy9qU14",
  "key18": "reCGFVLcsJe39bdv3FYpvMTAjEy7kJKeG4kds8KyGJAYiqbnKrPf59sYb3pmbLPDbw9W7WzQTDDDDaF9f2d8LpT",
  "key19": "62Nj3kSccgTCfJjivC2ctMycm1wVLb75XqQ941oAM711W5eT9TQKDPsvvCCnbEcJ8GxCxYVivMhKMRnqBzTe3J6Y",
  "key20": "5eeW9dgREZ7s696X9h2Q11HZCKV8eSAoayq5JzHnccRsCKH3n6BHhj1Kr8dWpxr67EsjGmmSm274QQxRu2qdWjsf",
  "key21": "QCGXtZWaSi2e14yXfPUnbfb12f5G7jRE5g39yMQJkz9VxYgxp8fTjJxjZVQMQ1WfsfXJozS3X7HT3kKKL2oVkXS",
  "key22": "2mgsNuaEsanXyBkiDxADnJ6PR7m7aTc9baHygSNDwysA48XdqLuDoYLX2JKoEK6mRahvHE3XHWHBx9B9K3HrAmYj",
  "key23": "U5Cu4NTmtaChEEa3X6xiRABBjGAyyq2gjpmHf3kud5cfvY1s3CtTHKtpv8DFc5H2qej9BqNr9rqaS3JxwtyuHLU",
  "key24": "5VcF6rkEkGXJTJPSAsMc3iLmmf7MeakcV2tNcqsuZq6rAn3T6ozc4h5diQgMCixuuMP1erEvLjkwcBafX5AEM9AV",
  "key25": "3zwiHL9YrfxzXCSs3YBy8yHopu43tZ9EYUbWA7SEWYWPJBeSYh1gTxKjW88LTrqVdKxifW62jvDispZsLxZ1Hquf",
  "key26": "4XaRnh3FqpmWddgyPt7HVzC7ErwRHs8UYzZzeNCCoLGLhwVf4c1pfNSJ9kBcTDybZdw8Dg9F95QotUxPv1x8LMTa",
  "key27": "2u4JxDQR6ZS9zkmqC2rSpiJ1oVVXT7K2fhrXXmtBsbg9dK8PpnGvNLNAd8pNaGxYLiHGMdWpua1915ZKmHkgzcoN",
  "key28": "4fwR3emkj4AEuZuT3pfDt6p4aEjWkE1iNQtm6L8fe83P6eUSvBAzXUBGyYqxUrJRfnXaziXsiFdsD9ZyaExLKBks",
  "key29": "3LaAW6UWJ5Lf98audUospYTqmHPdghYwU2rcCfLFtt5y99NcgSrppEGTmZcfDJQNTRTMAToLGw3SBahRi5m3X9FW",
  "key30": "uDv6mpQpABkPfLLNy3TAg77ALtH8YV59uDYfc1fzjZBMKhVDDd95HA4ETqXpF9GxggeFFr4tSbqcXPZENJxzUfs",
  "key31": "21AvaYhwbWiw5ktbPXByb7Gyt28ToqSgNF58ig92cnvfDhXDHWFH8EnBvg1t6g5BjcFJ2hZf9poMQnFwhUE138DM",
  "key32": "59M7tgnbgWgFVp1icSrBcQX5995gx7PhyYKsgK8LpT2GwJuKDUKXdkMs3y3Jbp7qJUkkRMgQyQQ5tTg2kKD6PtZJ",
  "key33": "2kHGjGMSTPBYqqz7u8j42bkU8W2yjpGbvhprRrnP4HgrUkSEVWm9acSesd6PC2sL911rfEjCeSBFnidnThaKridH",
  "key34": "2BF4cfjwDCcnt5bt4mn9LaZVjSnPpcGu7cpvb5SycT9H1YVFPqAbLwthpqvP6Z7J5CmmH25NBKydR4xmftNoAhYT",
  "key35": "3YKWXJMBcbh6rqGLYaSoCJV8BLSpfAUnJ9ofNFmHhRdSNKzTcYeNqY23qjQH2TWEC7xakbfSTApj6CbcNBwQHGL9",
  "key36": "PN2XNmwxwAri9BShru1i5f6WV5gzanMeRqCsyuWMNj1Q5DWwFGXXhKaKvtY1f66o37tkhdHnvHzb35TTU1sEguG",
  "key37": "3zsRzdsQrkh58W5KwpV3zUn7EHtkHUwxKmeP47KEkw4u2oM2cLCmE3u5kPvVeGvriGCTJhVuFkyuJGHL5zsqo2TG",
  "key38": "4a1oGwbx2REK3ieKQKivq57oAAe6e2uNRSQFfpBUVcPFnmZU8ptknSRwGhEHgQWBtVoCDaPdsQuEVzVsav15unmi",
  "key39": "3z1NQv8zB4wfM7QCNf8pUj8DvHyQmWW679gAbndjNnNVRXABT8KotgicgDYDFM2AtvgQKK9XfjFyJomGQP8bBcUd",
  "key40": "1Dx5zSe5SstcJXZGGE6eXcuCyHyocAfW1kbdWLGBCfazxWT62hKMau6wrj4HV99GoSeG9gH99VkJZRh5HQZmahz",
  "key41": "65E893qtpADP9f7VabzWZGyU3GTcmwUYH4iXr98vL5zmoFRwGFAab8vw6RxC5jC5eCzdGeWjWXuq6ExhF5ARyuWh"
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
