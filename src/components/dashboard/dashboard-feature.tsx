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
    "43pWKFpBGpHTTuXb6VNAucT33eikXj1GaUxsZ7QAyn3HwvecC8yG8kenaymbbM6Rrx2yzCkQzTnHmNvQpyPJNEvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y5GiT67p22QaWHwxTMjuzJ7hPArLKZdYHfvw7FXaY7AvkP1ZqGabZCPV89NKaMQZXLRVkoSQiLZuR9Vo1J4wWnj",
  "key1": "2ckofJGp71LevA2pGrzndS2j8aang8GSg6B3ikNmihnjdqWkzhSrntoVuZPVeq2ZAzsyiDqkuX8aqzZQLMhQPq21",
  "key2": "4sqfPMLMnFL8FbLHJLV4Gu36DYUMbc1mCnkjew9EJrzPe4sg8wbgxAc3v4eAviHarvZsz98NXBHMtqqJvFyNUn9T",
  "key3": "4ZQN7dk8RfSE76EEqe1wridUrcV2bS1Y9RbgFouQ4ZHmdGZstym1WYUDNoA85K7uKty8MBmDTs7uMgE5oxRLJi8G",
  "key4": "4Ybzm6aD9pHXoFfLmHoy7LvFyqYz6cBkX8t46YMwrgVa2nUbpjU6ZutR7iRFqzDxfmrKsmMjX7j2zM6nfhVxTSA6",
  "key5": "5CyFEasHbzQBPnMZp5K33Rd7AeevUKE9GaWii4Q7WF8HNQe6QZ3tyb6M88nknhCMEkNVQ2TR6rMCndY3J1fYWqxX",
  "key6": "67Qy2GoYgNSyygosWnSvzRp1RNHygWPcvYCNq496iuBQvgzj2htb2mR4EdU5fc4mPi6iz79TCt8tc8qds3uTX7zZ",
  "key7": "5FNMGfwEVv8brd9kYnoWTuJeZ9NkGWfhbv6NhrDzjtN9msTx6qi5hMRArKiyJeZQeBpPwStXXiXoU59oL6wwRxKx",
  "key8": "3e6fgw6yfBESbarrhRdcQhmRMvyhuPuofr7ycSNAUMeb6DpCtsy2yChBLHhfKCNqZ9dQms6b2Fsig8xqfrw61jd3",
  "key9": "2aMgBU6XbgQPkPcWNVunvJktSoL8XHQQQNR2YBqFxCfimMSwFXfZRMd8f6URekExYr44meeajuoCiuMyztXvkrHo",
  "key10": "3UKAXNX2KL7VvqhWwWXhoDLwwdCTkYoNHtL4huUNu5ZeABeYq6nSrsCCamU5XqbdvhTtvJe1NEzpSLXtA3CRhZr3",
  "key11": "5iN1yNDcPJa5PdvN3bKK9KjoEueGLgSWKNQz9De7Q55jyEHizDcNnuTqbJnLf1UVJNGak4HkqjKwE58WrX8dxhLH",
  "key12": "3ioWL7qJHGUUpayvgfb9LPZSujUEgfRKSaKM86bQpJFFuPwab7yFYqMPBN3TRd2N4kgmBrqXvnXUzMnzQaTVRG1a",
  "key13": "4ERVT2oQiDmfnevrGnoGfK5HdqnXWPEVAdN3o64JtnWecxtczLPXrzXDGzBAY6ZD2esghbYEP2RHC5pG1J8tnM5u",
  "key14": "23uTVWrMezqfpLMGuE3aw4VdWrARNDreLsX4nZ3YyxaPJSzZxLeqpDeyBEgW71epXTtxQtdTwQnUEPtAdWQW8gfj",
  "key15": "aFAVSNvbqbJ2xf6mFow1xqEPr6T4TzdcQNAtqYDuRs32KaeQVfHk3UHs1gZ1BZmELsqJfp5CtyLTYqj7w69xRE6",
  "key16": "BaNakxAiUfPJ4ZhEMnZHXnvyDnBuEWW4qywXKGXtNFFMHt2hRmmHRQiCZ2SMNvPncKjaa9eEc3fJqaGzaNQDsqv",
  "key17": "4utj1BM1taP9JA3Wm3gsmShjFBAXe1EQ1QXoUjaKAbPRzw5ekd2nRjnjN3gAYcq42cbVYaGMNV215Lw23mQWRPb3",
  "key18": "5uDdXDC1ejaz9t2wk6LcDsiFJAzWUCPkoca3zGs3fD5b96KW4268N727dW4mcnB3VxZCJ9f46LpEb4xzTHHgHvHD",
  "key19": "iSuKmUy7UNrAKX8K4ieSQjt5GErcMFEfj5aFo7f4GYRTZgvzpjnf1KtGJY4kWfVecqzaBQLAZfqJANLg1FSaFpA",
  "key20": "3VZDeC3RhoBpoZyjYowbJkXVgrvuRNVByCeLuaEcd86tPcbvGqKGb9MwXTWtuDJ7iC5U3WNF3UQhiyv5H3hhGwvb",
  "key21": "5oYeXSJXReLU3zW3d6YmDLdjSW7CwvPUgqTsNK1yuuZNjRvCN1k57CXqEytbC3Xwxs4kMDNBzLvbfevtyCAQ3WXd",
  "key22": "2Vkakum29tMGD2VVRETYSsNeDyoi12fZbPxmvz4kD1WePTgSCFSbJZiX7cPc2du8ZPKuv1WHSe95rYesFFiyJoyg",
  "key23": "jLfuTxP3T99fGpHQF1EVoit8wfXSzQmsJGxk1rmhbaL1juzckyB92i13uQUpAu4CGz5QKo2KZEw1o7znYkGhz2K",
  "key24": "5Xvn2QxywcSoyf3qw7dWFjcDZrvLHLGJNhuSK7VakNXQTzY1tpSPvJyVuUjTouMmeyYidNy4covF9AFDmtZCqSY1",
  "key25": "2rP5JAu5QwNGL7zVggMz16yugAJdN3bJsJQx1Uk3xfnuCANNnLkTnNxWcMyBS6QR55isFwXPygjUwvaM6QrqiV6o",
  "key26": "4F3eUPyyizEXM9yzjzqrmYbPnj4dczkyxxZyVr56ypTnC1KjUtQudhr6FBVRN4pkUPaUbAZFV6ogdNsXA46Hx6vj",
  "key27": "3jiBnbei5dMH8aFHn52vi6UQL2binGQ54C9LqLncJPsbLogvrmQKvoyREmU3iNgmdHCHzFQnM6SL8w5h6pacjc1L",
  "key28": "657Vgrx3fMDFErsJnPFKgPCwZ5E1VTCHhyb8HKNmxdrFZxHntLvANB3hP4C8wrxXs7FVVBjb4tU5rXewEHf9bpQu",
  "key29": "2cRuPPPbmCnuCwFCkCahuUoSH9yt8rU81SbSN2cQXeXYsotUxfERgSroth3WeVLZNUp7m3Rfez9bsUE5WCnxF7TA",
  "key30": "hLXjftpPTxwd2VxXYKDzhGiyMnryh2tKZtZ8XzEbp3RmNSz6Jc4TQv3EHTUPK5PKQ7pruuSenj8fmMCe4h3pZGT",
  "key31": "22YtYrrYSMZpQfoHmdCmBPqQHXdcUuaheV37EQ9qRQMcwaBxsFgPsV2Vzz45PRhRBGCeoGr9Fwx35XfBahmmQvHN",
  "key32": "5Bwy7R8U2Lr5Rzu3nLY9BYMiqnxS8HZS8TZ8Tmm2RNyB9ypgC9i65vfFQ2nDr7CwEph1tg5taErKyTvhst5yDC2W",
  "key33": "5VYJogTQP7nwde3GJLogMs6g14McGv3jhW37fV6mJ4pgFcm8bCsuCzydLdAuDZYfPRGatrc8pTHqhBHeCD7LHWLu",
  "key34": "2jyhAR7kR46UCy8fhDnwxG62mkgsLQ8Xp3P2726rxQhhe4KgMsYty3ra11dL3iKg7b7HGfiCmzqBVw6iBNqTgxTt",
  "key35": "4FGoJW1gpoizCzq2MMn3uqcPXGHhkY43ivR7R8X55tBQSKNJY89vwFRsdNxWpBzkp8nqsBAS7zCs7fXsMBDF2DSX",
  "key36": "4JjRbhDB3VzjU5s9pHQYapYWEx25KYkorcoAGd2Gt66XFiRPa6EAArVxsSkMSucHPRs5VSkHNww7Q2MU4PH9RFF1",
  "key37": "4oxcidry6LBr1FF2s31GsDJEFv6Ehouh1JGJcss3351nKkTNyPMNXGGfDHesCSJdTsPCrfZs97agto9Gy9ThBjcK",
  "key38": "2dcdyPZu4ojKSRrgSsFcVyv3zhKkxLotpspsFRdGbGhzDDCVrLbEB5mmrNWFJVPAczG8dhqP2jDTpCdEytUzuZP4",
  "key39": "2Y1UxjqqvjSnbkFfxiepfbjtKhu8vWHnZdHoKMuukKneEaxobWmmWC3uXAeNZqXqyTtDHnchocmudHRBhmd4T1CC",
  "key40": "59gcnLcr8nfVMoCHfs7ZvbwaEzCN6EnrcjhMagX2uEYvTAioBPY8qHweVoY2Kcc3ZCMvehRxGet3K92m89tPGDFQ",
  "key41": "3LoZS41tfJxyF5i9YVErERp3gfDjY7ALM7TwXo4zx6ZDepqFfp14vyDCidNtZ2tJmQQQyAGyuJ3pbPZrGXCp4AHj",
  "key42": "5QmUxnrK7eLweb5bDhLCosCF5KqA5HyUyuBn9Gy43K43JaGmmT44M8KhExbCbrPQS4XjBV64WRfh4SqEzktYdqBt",
  "key43": "3k6iS58mRKDfqYdUHYDwP8CCvtXjfEzYrY8ZbSVDLUM5DL75GGi3wngEhbkEiXS7Lwyx2njwKZw7w6XhViNy6wsA",
  "key44": "5zPvndQiD5YrVUVden8mv4LSybrvSZLUjauqhBQcXjLq5SHR9SzKvR3WV5eVszQqkv5CXLTVTpm5fSQDkxFZ4YCd",
  "key45": "5RdeDgngPHkJ9vwJJMAi88yDdWPo5LNtwf3SBf5HwvU2gsdDm7MizqjYHvCgQZa4k7xixtScfLGHLUVu8pHjQ3Gi",
  "key46": "5x9YZrAALBm2P1mPcugFzLYpTDL3p9iukzMymghHegkg952LjdtU2eGWMwQWN7npTruxprxZJS1iDLnvc1gKVzkN",
  "key47": "2XV3LMtmn8eoBe3K5AcRXryCfUbM9W45rMyUUn56JEr8oW56DmsAW3yHq82YuhoxdYgxNsTDGLXqfThmBxNrguMm"
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
