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
    "2K86n6uR1o5hmLWSUdcgCcukxYMtcXchbHjLWsZmchESmSf3BUQthaSQ9NV86sBG7nsc9zvzUGcvF8Ueq19upsmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZun9YJmJfR7wqHXLtJPMbJiyvsosDpvBX4K9vzFf2Nuir7nM9hsP1BxdPQC8zjQKZNdmZ2tJ18xzQ3pQ3bs7af",
  "key1": "22Rm2LBPhZeKP4L4mRezdP3oh2gXFuKTJbDb5LdR8z3CkrYr8tjeU7NRw9RW3hyyaNAExZD3HuwFSTmdWUhMvHBb",
  "key2": "EN99egXZHwDJjJ9nTht6dr277AF7hnNw7iGXGcGV8bq3XkA2TLNEiYscCu2U7jAKDH8KFubNDs84gQGAjQBTEnx",
  "key3": "4xYatwsCwsikf1QMgarc27TUiuVsZ43NmdTHKjVT4ZeR9Ni49Ek7oCnhyM6vDReRmfLB4RPTngyWCdRuXK5SSmFR",
  "key4": "56zLENxRJqMsELpnxyK4VKTQLZ4S2dfPYvTZ49ASkZKwSy7jmCHS6gvd8DBuNorA3qM6e7L4Q4xnS9vfouWr1mav",
  "key5": "3wzYtsakpPY1dBiioi2G2hcwMX5L8bh1HuuS4bmQF1MST5dJvZB2vCtsaHpEhQoCGhZEaVCgeuqvFyx8GRbC5K3b",
  "key6": "2mqWt355d9fdx4d3XpNn624xvU6jNi9fqTtLGopYjxTymBMuf9QpGGHfE6JcbYLXYBM5GUPJhLUFmTDY9n9R72vD",
  "key7": "3DLFSCVxi6pRDXDFC1DEpUnp6RkRHkdcCvM7N6H4i87U5EfMXFpcXMZEJ2Fj5FZQ4w9A86nYjVwgT22jG8Ziq4jB",
  "key8": "2cdC96ndw2FfnWixsf6ZxkH6tuJ6Ee9p3Xz3Z9Smk12VLZuaA9MXWohkA4LTGVpJB7LHwUKMj8XpJa4s2VvzqDwn",
  "key9": "5BnFL5QTPeQdZrvrpgKusET6mCZ6SCgSyZcKAwnadgBpY31sTTGo4Vv4zrKjscCL1CKeme1gmGnuNcydRpqS9EWJ",
  "key10": "FUN9eqjLwt1Qix5qZPAxJWZUkHZvyEmp8TWTdVUk5crjk8g8EUHpX2x5ebt2qmhzhNAYTRPHRtQZUTrrj42HVw9",
  "key11": "3S15LYAGgT7byknjaSn454XLkA7yMU9eUWQiRtzL22LUkW4W5aBaDCqNsbWhKqqT1kwZ2RUhrx1xPXBdF2kGRyK",
  "key12": "3tMMnDTsKq3pff81WBQtue21QPQSXCpN4KdJiwFE4grQtMWE8hGD33i6fmSw9Nq2qtkz4Jmf5t93mq1Z9E14Bofv",
  "key13": "4TL4bnHANyAHAP1jioebAdGCjSbR5w9BQvYZo7Lcmy8JFhJ8PjvYjyjveAVqTgE9MTFHjfUfbzaeBmo3j1SUWhck",
  "key14": "5T8JveJuVrQmFC2fH8oMvZs1wNTuNasBrfdJ2B4r73orFF9Kk9hjCZK8tTNCyqCMy1Uep7dMB4c3wta4XrCCTeBJ",
  "key15": "5hWZmpn1rkHwycXZT4p2vsmVQe97nnVbFJZqK3HQwFLwaVjWVYR6hmiMm47viFWbXnscqKXrQWCcarTyNxnmEpcX",
  "key16": "2PPZVDwgAcKSbt7Kewqif7AMRHAHncFHDpV4vstgno2kG67eLWr3XygujJPi16cSNfr3aBS6pXLE26cDNCw4LsoZ",
  "key17": "4EaX7FmC9BZL9fiMAM4Zvdaa8rWcrC2hbXE38zEaPEgjmTuzQaLDA937zFhc7k4wRdXVjtM5dUZvUdVKbGF3sRUP",
  "key18": "3gcSTw13vbsiRLBR2vd7mxq8bM7dTFtyFwiEtPvGYb6N7zQ8wyeFPrEUBoPdRvzCfLzYeoh3TvxpoHsNdvLhshx3",
  "key19": "4qVqj4zo4q9c9gn55nucqFGVSoQLYQwMDfV6F1cNRGqRaucD2s1HsSrcjaiKtpvBzgEMukhCDz7Lg1g1cte3bkNx",
  "key20": "5J9eFKwfmLvZWrRCErVjP6gktfzP3GqNkfaDFag1FvCNUpi58prYdGmH1ypjhZo1TTbZvKxgT3vZfvQRDJpfeJgC",
  "key21": "huAKcSEhYzhGEBpgN83G8NAXBUXRsJznEVhzswYfHjm29sgwPUKQLAYXdX2Nx2pJKknec15sWtnZksiLwBogKAE",
  "key22": "2AJxD9CQXLJKiMkj954vaXiwz6bCMizQESjwTbCX7EqKnZbhBNVg4p4GwTeBqqCLizYubWS4qhQDjvho4FJaTxmD",
  "key23": "3WS47Su6xXcGz1MdTeonGFMQbEMWVttpCS3b47HYdChsw9jYDx8gFfN3e9zjPyoRosCHXUkPCAH3KSZqaqXitnbT",
  "key24": "3mBJ2rHyLzuJfg2ccuF6YQog3hrtBj4oQjEqtaPs5EFYdKBgxmJzR2j2jnJ5KbUDf9PkfEBySQFpszDgsaNdzVTy",
  "key25": "vwmFBY3CoFNoTsFjyBtWaD3rTvRkoqekZqcfdATc1cYyStvsmeZTX2D1K2UugUW4sWELpDgqB65AXofzYxs7zkE",
  "key26": "62RxC318DU59vkxaUoEVLFs1zknLNdA3avZegRV1jE9SGfvutnGcpFBXnSmVF3KHFxxLhukBtrcdtFLGc9nqQyVK",
  "key27": "FqhhHjThagvRz1t3eq5GcPmZ5Rx5BVLijU27UbfD11Rk4E7FtSb5CCyng4qW4A85xcScvvrfVXp9jbzPepEF4kA",
  "key28": "24Vt2egrkhRcyqKw4V3piJGmTxcnnyuW6uaK8odHFe1NWebzEqu43CS3kyiLaesgrPZ5eoA33fbvrUicKPM7hUc7",
  "key29": "Vr8pDpGQwhgzJgdeVcqaubD5jsYSVr1jc9fdoaqbPMxejnDWE7v5F8R24nHxnfB3TN9M1JnazbnBgfbgSThPBaK",
  "key30": "4afVqxpQnAb4Zf82vKiD1oFvW6mNQXX6y1syEJ6nRASTGfjCcSukJW4ohPNxjwFusnRXt6zPSB2NqRSrxAwNBmmL",
  "key31": "CuE2ZpgS8VnAJQxXnxZwEcEmodsC6148zwrScR7v5sJ1tv5ZnJRGhPejnQP83jGbFEwaHUeh9McTzJFG2jnNNa6",
  "key32": "5AiR9TFfQnxAw9eemcEk82Xy9S6T2GYMRvzzXjfTdnMzmrsCGsNNjVffU2uRsWQPYceBBAqGayy8Zo1SumszcuyW",
  "key33": "3y1tSouttvYVpERD5W83xgeJDRYQJdgpzWUvs2NhpR6YcDRQsUQRXVqEpKPEwmVq7xfHNG7aYbtvQDqN96D5GqRZ",
  "key34": "cHVJaKTFN8aJNgSqzSWkbxbvMoDQvDtSzEddMcnA8nfYdhRwQEhvXfNLZKzrJF2u5pHY8YSiVUs4ojXffNdRnVa",
  "key35": "3MT4JQFNcT92NHEdgjwLkKXZETEzg9v9U2mQorWE3KiZ7jmXvumAkQ4pzBAfaxUJ4GthC4Xse22JN3UYuzqtaMdx",
  "key36": "56TuVTCCkaFdf3YbsK6JgZx9LWeYwPAfigmzjtF5EAcPvsE9h9bRnJCX91jpmQ4bWRYBr1m69fYLf1jUgcUHvAGQ",
  "key37": "3opYPYpRJs9bcfg32NcPFyg999q4Gx4JyerA7oL9NZtDKkpNLNf5V8UVQAvGenmeVUvPGyP8DnkCM1VEjgqZkpWY",
  "key38": "2dmsLu5sBdgyxdP5bApeTBw56taS7zDsSKG4Z9pAUz3xhkYBjFQNnFEV2cVKz9LDxksrEbLuZWeawCvGvsmmoU3",
  "key39": "3XX3ZL1VrswPuAFxzdPABZicuZ1HFuoWoGb3wCVs5M9JkqbVVef8g5zJsqNiy32QU69xi4xCDyKAo3c4KoLNNVed",
  "key40": "5trntdn7Hxz8KCcDD1rub4zXeaGWXD99GxvtMKAwypZzpzMi3rD7KvqqUgtgpyM2cTuK57xKCFV9BtKteyVpKHry",
  "key41": "2pQaSJVowJ8wFpNQqtdJ41DsX5wqDzWhmsDGATEw2r142ZbSFE1VAKedD1jscm47Twb1GwWvuwBGsDrH52WoG9Hr",
  "key42": "266cVhCDU2yDAj8qnY9gq4mupbFqfJrxmd5x8jDsoU9e39V1YJ5kVa27499AkZqu8SR9h6VPRfK3UDgybrCVztRf"
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
