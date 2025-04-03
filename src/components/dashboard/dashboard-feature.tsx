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
    "3mBuLEhqWqNeRh9efg2TUuGjRzjMqRkqbo51XCBiAoxrw3WH3rs75xpZDP9n3ky9hxZWL2MquJpcVPPMRmX2aAmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sL2MRr1pQPeRiYWcZK17SPCVtQjJQANxrryotjNFoJf6PYAew14DgBERZ76LawCEfzNjqEZNFRPJsrwPKgshhU",
  "key1": "5rDxU5SvGVdxLX2HrvtSR9MeR1aZgGkjGueygAGXi8nLwscue2hG3eXaQGyLsEARpWwmJjLqpCdiPVZNXzDzAFLa",
  "key2": "3ruLgm5op6HTzQWF7dUuSrX7cD9k1JKYWY5Z8mVJGL5nUx5dQDVTrhbXgQcDGqCuvbsf2ZkDg7JjxpmfZ7woXTEz",
  "key3": "34eDZiwLwtr4zfzvprvFzKaLYHcTT7BqAewKMi3jp6JstrC5LiohoB8FuXybzXTBghHmPpD7mNtoxzaKUjFRbpRm",
  "key4": "4Ho9sAT9MEjm8v2r3X27z2jhFa7eNJuJzKvVzwf3Tp4HJ7oJk5t2Myqaw46KPXGiLNNokZi2sYhHiLV2WYmCxC7E",
  "key5": "2yd2Zmgp8q1SPJBRL1sNpqKoCC5GqTrXyJWdaMJpg6rpRJ3ViLWLKj8nbyu9LgU1kaGULGGDex4N2LdQQHnXnURu",
  "key6": "2h7Po641VrtPvsN5p66ZyTBpXQxG7MG26r5W41DFv39s48wLeb7p3LwKS5TXxe7F18jMUFmX7bSQ8zfMEbCRdmov",
  "key7": "2E5PweycVAsTMGY87H4rDqcECvT5RGhViFLnMabr7tCkeL1rn6Gpbbz16Bfb9kVuDgd6jveQoZrD1Lp47NnZX2xJ",
  "key8": "3wAcFfUWsQATDbG1E8UA6TcSJyfMRkxxVf5t4U6KRrry3k762wggUgfUrTe8MYNnjMJxzNWi1BbzAz8DaDSA4Kt8",
  "key9": "2g34bT1Ltmso49Vss8xiEbHMqGoKziEnUHFs77tFDUwRJih5axzd29ACfKe4HcnPqVvUumgkpfhMrwZ8BWzFVRAj",
  "key10": "4p1WACV42vRTkBxABFEojbhxHcBstYvRQiykF3VwYH5taM97yfBrCjP74f6wz1viEE5qHSvW3uwBKKVVnkR715GQ",
  "key11": "crvTxkL38AoUP8qyXkf7FsaNPxE2SfFHPHCwH7ViWSfEQhq3X5PTV5EszRHzLBiWyEpQ5Hh6urt2QyAQSFtdPTv",
  "key12": "2BLu3jMaQBgt4CnS5VugrdKTzhpAvhw5cmno3zfMfcwwsokk9AyvTfwwbFoGTDZnPgV2osAV2TUx4aAPfV2UUr9h",
  "key13": "5PfGwUuw7vZS8wityHWHaqZfsFF3KGcccev7ondDLen4DftSh6ikjYmW7aZ3iBHUkRhKW7fvMEo5dxjUpSsnpcL2",
  "key14": "639aSPWhxvQGSqNMFWXNnNKubhjvkE4qBoNPRPUU2ACdiQtNi7YZRsM6MpCJQgJ5hyJ1PjHXVCaiXuTmYFPzJghH",
  "key15": "3nF3LsqS82dMgCxWW2z9XcoL7tPZYyZpYs7vhNW8cXkyrg1U2fNDd8s41N7HUD7yPyvpmHMx8w5XVNQC53nPJUt3",
  "key16": "33GWyNcpcWw14ceZjApx36rzaiwh2wi5RBYSrRXZesxgaZdq8d7pH1xvGppa6Afx63zvdsZMgrsFDJ2VSy9zGRfG",
  "key17": "DDvzws9SHB1q2GHGkEXQaJdDmUqtCpvvaLD7NFEaXVUb3sEF1DiMF1sEYEUSHgWTcCZtb46mmfcvRNRm7TEvytX",
  "key18": "26x2KJ1p4V5RmZZb33TefQSHwpcCEJYU6A1oqkTJXoSqkorUoehZfnzLzvst97vSRKLQerAYQrSL7PpekcQbg8k6",
  "key19": "2d9sehffqeEePufuH8Ztn8sg9tf134zGw6uV5ktFV65SQFjGr7YMSUoxS3hLfMaB6Kbb9YfzfvUJXB6Yt6wrD4zJ",
  "key20": "HfqtGp1LRsxmVPpVqw4fPHsNCCS89QVuDAUzdzq3UqxiwtjWYi69jcXXf1GK5UKQJ7hRUUoTyJz7tp5CYzD9AK1",
  "key21": "4BNYe8MrXMtnJGFHkiFgDkhAnhqR3KKRpih3Mk5TghqzDp1Ah3Kzc7hgEqtvWMfak1H6RKF9DbKgiTqc3FXvpy75",
  "key22": "2HvvmpUpADv9fdK5pqcgCRnP6f5V3aA98mRRyz2eRuPfxymACcq9aqNeJNDprx487MQqYkFzGhk5EFYMwEVDTHp6",
  "key23": "2PVs34PxeHya5LGTWLyfTySkCVyoHxmgfZCVdz2jjgEbse5JNcpmCZmMs482bjVNZ6ucxdPKQ1ZMb51hyrQ3vdjP",
  "key24": "2TLy5StMPsVZJYvsAXUh9vyzJdLXnguwTEbPt9edfosG4BAH2AGei38BaxMAyf9Br67cHAXwQbPpFYPpxrM5uyxf",
  "key25": "3LEB46SH9RZphYFsDJx7PzZPrFBsA3oJobcxQi71dsPEEsVySo6M1aQU1uWWzH3fCbzH3So4zjkXtfz5PzybQkbo",
  "key26": "3CdPvVB7F8efcZgzStvLZpmbvCd2J3kRwDT9oYsA11JQazqwrqhpdhvJTM84epfQPsn9dwR47g4RNZNJTqnMeSBz",
  "key27": "5BJ29ZPhkwkfRuhwzq1atNSE5YjDYJfQqPCm3FbiJKwGfieWekzDdP2DzmrFxNMMoEBgzZdt1mN1gZw9pGEXbMzs",
  "key28": "4wzHyDR9Vu7RLpGrNrhM3g4PgXkWBbR3EnEGpWpSQ23NrFaS7zpkfoWY9T2BGEXvhdFRGJ5n4fXB7En2d4gjSeWx",
  "key29": "4Qj3TCypkPR4BXWv7Ywystaw6Fw4cYWnTiWzrBTxyiwwGpLBtRRRXBKteYrgdXPGHrbQ46k9hCaqPBhDsMYfAjQ4",
  "key30": "4SXsffdk8BG3pjHkwL9F5KF54QfMNZYGmCvF6srR6wqeaCALMqDdo2V67YJuMNzfZbsGdWHhkWN1koJdk3amQx89",
  "key31": "2xhr3XjR5srSamqfYj6QYNZR2xJPKmEEkvxc9qBoUaJkSRVrJLJLpuLKxEU2gWweMtz9eVW2g8E3xdqoTARkfMtE",
  "key32": "2VFK75ndiPXTc2cjDpnh4V9g3cady1hodfrRjRyUo9rpwv692aQvnHWgTfJk3N1d1uKhKBWiBWxmnvQyTsckXD79",
  "key33": "3TmtmAiob2kB8rttMXC899F1oNfeBS74AE2TVR9FyjjX9LYCCQgWeegCL3Q63k2Fo5tmUWXautQsxYwGkTeauDoW"
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
