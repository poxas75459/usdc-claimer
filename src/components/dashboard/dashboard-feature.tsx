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
    "4tBBeG3bXjM5X9WtZ6YQBdA2HGELxap87JvkRtgm9H1aHqiZunCWUB35XoMMy7JgzPM4Tb27guBYVgyqkmULvfCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PGzhsh8Z1sh63TXfHuFn18FwK3CepzZmkyTBX4tbK2a2g9YKJ9MSgJbxsX2E7WxGXQNXTNAUD2A5BkSLU9Vigv9",
  "key1": "2MoLzbRuztC4e3XAjNXXefND8VBVYuS4sFTkcNcZRtxZpxMKPArqr5PBbpUXrGEdXcAoYbmTifNfyHoFGWsQ1eGK",
  "key2": "2kWrd9XSLocJebkFiPXTudmnduyZUXRuMvPh3pSso8ViR7A5Q7bLhu9AmwQiWqAishcBYDhR4DWgjmkY2z4tEZHr",
  "key3": "37226bFEVsBAiZVHd9Jrp8KUYPhZDYcz99bCq9TNVffBa5KXENY3Cxgv23H9p3NrDvrCyysg6FrE6tDLCXhUPWyS",
  "key4": "4hv4jEYxJ4Z68jTGVqgZ9aWMBQnBo4fkbfXpo4qPUak8zkBvHXzEydTgLYbMXVu2L1dT7WutFJiHkD56F89bp7sp",
  "key5": "i8s8NHtd2ZQGRMxiM7QWiwcQAwYzeqC2SaXAJYnV15sPqVuC1VvGbUMYmZP54tVUKbq2NU62BHvpvAPkkA4nKpY",
  "key6": "4wTqLCmZqZZMWG5gLop66WiiaeSeEJBjeUN8bPmLMUpWSUzRhKWR5FUbyNJYYB2E52Rf6qNXZtdCD1bv2q7LSho4",
  "key7": "5wQZy8ZEdt8J4ziapZeGZcSGb24M6yvi31EZAZ18xMhsQTnSU3eRSFhEkMvVCheVLd5YRhgTR5kizmiveCoggyC8",
  "key8": "5nNh8Z33gjEsGhbPtRToW1zBN1GJ8QRg6Hzh4TQFf4Pd6Y4jkAXjuHgBgGg1dvATs8NeH1qcFeTjsCJ89BoiHBFP",
  "key9": "2sM5XZ3cmx3Kj1YyK33yK7eMuwqCMZwBJVqsgpqvTEBMuiCJY8iGu7n7DhPxLmjqFTVLMqYQokqRTHHuwanT7LuA",
  "key10": "4eDZfuAT4BDCYd6uR3m1Co9nJJNrfXscFMVNybuD3Fvv8fGd9r1bekvZ9WWonPVo7J2sPNz12AYmgCWX8kgxpFqL",
  "key11": "39oNxncCERmN1QbpE6bwBnzyqJCXBAgQCXAZbc8gmpNoFhK6iowY5DmZVmVbGiMZCne2TDcriWUA3pnp9zWzyXZ6",
  "key12": "4dvtaRWXWrpDXULamnWmFCrPkqWLy7zcXy8WtLwhDgfNiHRt3N2KAFf7bPttyJ8Y3T5pq48hTZMB87NvYAmrQMD6",
  "key13": "33ds4YxXYEDSvsuEjisuvpy24qfrVXJJHsnqgx14kzSuohngBySaA3p7Uh74uPfFp61T9mTapguvdubuPUQNX8Zz",
  "key14": "5Z9vFkMBfYWrZPM9tzcqF64KkwiaC3xw41LdMJkLwzg2uQzCGy86ddE5oA49395QvVXc63V2uLs73KzLkAPDACpX",
  "key15": "3FeFGWu9s6asPJZ6GdUFz2YYtYjDDCZhS8UTkxpAQqe5woyi47LtWHQd5c4vScqrStkQEjZJDfzw5zsckVU2dYZ4",
  "key16": "7T6jPezv2mrRvv9ajz3nBaomGuuEhHkse4T4ZMaLRzqgZW3cko7o9bn9Pmu9ZUp2SGM3CTe7tAV21fdd8dig2ir",
  "key17": "z4UaW5MJFod3MS2UostwDL9MSd5i4DBHkPELwu4XiwTvjk8WJG8Sg2G5H8ExRNPNw63BMyWuJxZ21pgsNaoffNG",
  "key18": "64c6JjfrGKaqQX5EgT2M3b35hT7bnyhuwR37rjQNSPM7NocExvxyu4Cmnzj9trTt8yPR43kKTBRPSdEL1Vxzhk6C",
  "key19": "42SxukmcXMJZPhTZnhKgntRekXD5N5yboZEp1hHS6hSXCFUKsTxtDpjuKZvpfLJyujTVadhhzRaPrLNe5GV33KyZ",
  "key20": "5t9dTKtbtsp7L1BfZyPX2551HDtFGgXP5tEMgMt5C4cxx4Ex1vuHujvKaUBbBRG5aeLtJ6MMi6gQjQPKQGfmLmkF",
  "key21": "LZc6cmCUbsgM67dzBUebLMXRAdy87a14KPD8XUtPTzA9hCM1EH6bfEU39ddjLBjG3MbcgY8ugdxsbdSA5upfQsp",
  "key22": "2c3KR5x6W1hgQJeUD5rbZidnxVpr7BjVFbsJDCLqDfL8kmfErmmeJeirBSKLypzV1M1CMsW2d7dqeiCxDgjxxQbb",
  "key23": "5u7CFcjKgaHjEnheETcoYQVqFDStFY4LucqoyrH2CYPNiqNmVRobF7Y7Xf3rdK5t1qnJK7AbM75YG93CqYVHAbMk",
  "key24": "7tLj4kcn7u2fji75U2q9wcVZ6H3gjADa3xzxaVhvL7CLu8rXmLqT1nJeidUmecVpmWd1kSFivfekDUHULazYheA",
  "key25": "3BT4koZi1u4eTE2fHZsmoschxGY1Pg1ZtJLWoetdPfyVXLCdSJr3HuyBLCXASb1SHXGnCqDqAD4BHcJ4CPBSxZV5",
  "key26": "wAiqYsKvrGHiBHid5wZKbB4LnMYr8D9dU7rsxJbKifjAbKT2agbdJNisk72ZZAb3c43jXdoZuP1sPUHXp8oUjqJ",
  "key27": "44JU9o2DHkpStnMKJrSqK83seihWWgMUVUzkA5TV9Voc7RZKRFJGSKZtuLmDr39oYPchSDcErvRXUrZBckDssU5U",
  "key28": "2YHsr5wNfLABZaYpjSXDE2b7Hbh6Vk3KL7dswZVZKUpiT8f1C6yaMk5dFWo9CLZocp5ACGpPm4e7MmVdB1LsUgEb",
  "key29": "VhJzSgemy4APsDxMxeeMawVeJCctRNkWo57xjUMGJY3H2cqeJUgnxZPts6QduQD1UCufUjVtL5bmZpzJ8yrducz",
  "key30": "SuxourQMcKAE4jz2s7uCS55j6gUezdLZGAVDRh8kDSndBJqkdZ8xgJRt7LebFQF3kGNvpBSt4e7AN4gRi3RvP83",
  "key31": "4ReUxgg3ueATKiQGZkFKYcoLR2iX2WWY1cgwqCfMnspEzAmTCYfcWP1AetiZk5xYSQtybfLGdai9pffxPUa9hess",
  "key32": "3dXNBbFJfnsDoovcqMLKfRRk4qF4a7KHKMGaqsvsREaHb9ho7eTNj7Hc4VoRMZCvv1bg5KA2EWTLHnG1C7EmBwh2",
  "key33": "63S7DPDxNxejGoYMzHyf4hyKXNWSqcTCTnzmvQ8bSjvTYdmfpZt8Fe3rtp7efR6LEQAHUes5UNoYZHCqCUt6iM2U",
  "key34": "43KFnfe1hYhTsR8p8oKuHFGPH5uW68AFZokcZX7GaWGB1b3GM5Pasyh48kkxUog8CgmeSvbpAMJqFQ8pK4EH34VM",
  "key35": "k2utaSDtBTxKD8t4fScJd97EnXeKcFs194wu9TWjpU5zAzpoMtcxx2QPvjuEjXhYgMaPn6iLd9FhVSZ1JnVLNo9",
  "key36": "2XRC4mJjkGoST6enqw8irTe8wfigbMMt3ujMWFvdNCtvsUg2NjZrTs7DGk5s2vXQer4XiSAc3wmNSmFKb5phDeXK",
  "key37": "5rcAmqswrink2vTvLWEjUiyTJ3ecZwqaYaKoEHtMH9wh6kwrz21sxY9uG4LkLjhZpWAWGy6k7DC3MCzwGTNGaQ7s",
  "key38": "2uQ6vFNHj73AvzbGdZjgWRaYF4qUTi2CBzH7sV8WyTJyYTembL1TqN72R77GLinaDCK7bgonJ9Cfy8RaaDZkf6cz",
  "key39": "5jmvyEFFYRxrLYmLyr1EJWDgNGuFinJeqMTqqbGhyRQh53GkZbjpU9e9LLfpkebTKTnwunPJHSuxMrpDkrHe7by"
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
