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
    "4YHgGd7MrRftASEkX3L3gf59Tx6fo1eiLqEpJuLuK2tiou5xe2ybrDqoLtqJvC3kysbpLVfhLsGdFaBpVAsCskfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbALLwTinwHjs2Vn2dK97Ew2Dey8cbGeLEUiL9MAMdY79QtbQQhJWoi1ayYFKox3fuyfS6Qgw5yTLABG89uBq6A",
  "key1": "641c1xBPeGMvKZuA7k86vTzYuiRHTjqooPVwbsXj5tzYNbeZAVLqPZT6c27fZuaUtyKbVvPbXH5fXe3vm1vizXtU",
  "key2": "hnfJswdvPonqVW76KKiUus4twcnG53GUM5ySo5gpHjRXLvJoKGAsixF9Sm3BSMV2TVbTv49aUb2x1UHor6p1hre",
  "key3": "3ftyYJMGbRe3FisXzQsL56PvqwSbt3BDEDA5g43W5LrPKKK5pYCx9rxxMKYKsbhPTCsJfNvD95CDtccvRAmNz8d4",
  "key4": "5HiPuJSw9qxsj9RWgqfdf3Cp1aEcRPnGaEMTj5KbzB3w3eVyLcq6Au6E39xeQgTsCgVYhzWkD1Wd9QfjUEqUzgdF",
  "key5": "4Ea3VnZkfnGrfam4AM5vMzh7v5MRFfEPCF4P6HSFjYdScgAk8RHvUmGr2HJSHPod9rp1DQeBUyTBHU8jBkk5J5sD",
  "key6": "66RWC9dMNEaFRULaesQHkvS8BgzxiDY1udTJq9Ha1gdFK1fZzJuMyryihnYegSjf7akGRKqM6TSGTKe8usrJuod",
  "key7": "2eKzSBq7dSNe743mgaytBoaErZiwVh4uMAuTtVopWhM35ZecAG4RPhxDmcaPk7vaVmtLnCYZuUFMsm8Qe1ehBY8e",
  "key8": "53h6BLDBSw6tLqk1PrG2oyYuoqfbcAU4jsV9cTk8UMzknqzV9oTk3oCEY1frw2tsKiP76jyy6oh747hYXsUagqpL",
  "key9": "Szuhym8LvvEhLzdXwu3BconocPEJvgVg82B3nkkCXjCaSyGzLaBLnascDf32ucenxrDZawT19L7hkdooDGuYk4t",
  "key10": "4TdpdmMQCCBgroPYujKnjhmLNafXTMABQmhyEynGYgLD6iBsfzHTKCFu7WdfLZ4dmy2kYTfFSMxyzKcHGobDpLqt",
  "key11": "43WGeNdr32tGCHPQamXGuCevAf6qPKJFMADRS4HnD4pEzhGnog5Uo4Ghus8Xz1noSfvsWw7Pr33AgQwjmxweZL9P",
  "key12": "5hVZnLpCxSsZ9VAxhxuHSysUYnk8Fx6Y4WknLt4kVFgo5XrhpHPf6CZc99AMwMKkMyopNgChrZWJeRB5Q4tDYxeH",
  "key13": "2X3LnhDcV8mZ1aF362nKBvp79XVoV3mY6NyaBs1ULsUnHpLve87mxfeWMLBLSrGLcihp8BCa6xf6yvcecfvJtDyF",
  "key14": "65wpgHJmS6pxBxDCnsQUTo1wDQfEFxkyD1AgtUdReZkSM6giqnmLpZMbER1izJDfPgQ4pioe7BFxp4UfUaYjTHRH",
  "key15": "3M9GStgKL4Ah1d8LhoAKodwWzBBTcRDeTWKuJeJJj3sSsyhZVn3SFQT8byRtoRR5rGXMjzn3rVXEHDPgRqBBz43t",
  "key16": "SiYCP7Kp6xUS29JNVJ4PEogZmw6VuJPHnWUMjGWEvGTEz4Cq5TogemoS86JHhv2b1kPd82k5viZj4roZX6r1bxz",
  "key17": "2p8o1gRj1te68H8oMfyMkhLEUCXgFNigtZZRnnzLRovZwgdYZ52gB2tVfZxCjibjKR6zrxWoSgHWcifTnRUXC7AZ",
  "key18": "5ZJL5CaM2ZdgkLREevqzw4DJWrak79PLWDuC5gzE1foLEch8kxDTdpxPD1SKDzJGcAacJi6p8yzqBLsoqfB8gQm6",
  "key19": "3Ds1s2A6ktQk7gmmA5GXYqAuAjN9i9Tq6fUcAV2QnnUg6x59A9ayhjawkucDaYD4SfSmdQ4vcWq8LZsWqT8YAoEG",
  "key20": "3NSEMabnCdn947tMMnV3hE2mXKTE4TtkvJihCQDZF4BM33U6PFCGEMZUcQEe3HAUbQvih4s8hFVtLtZ33mKCwnfK",
  "key21": "4W6GErM96DuZj2xfr3qyybW9E6e5u7WqY8G81ujr6MjMBupL2hGp3Czro1ph2AEKPBh5A65xjhHsX5kUiAmdWkGU",
  "key22": "14qLUt4Wvv67LMueK15G9ycNiXL2vZ7BV7wqa4uABdyUCh6YxgkNEqMCqW9xjaWVoxJqYjz7p1Hapb2gu5XQww5",
  "key23": "3ixorEweDyc7beEbKdehqMKzE7pLCHhdYAxfvaWbrJrfBzx4ub6qmLn6vTYtsQCjKYWigYHUh64Nq3o9899ZJpQg",
  "key24": "4RqVnUNNeVzrBWW3oMPvXsNMRpLqpUGq6Dmn6DqbZAL9LNXamze8V9xqwwuhmsbW7iAwPFtLTRacdd3z61UtuD4v",
  "key25": "dYwjHXm1gGWDps6THw8RfPcZVNPHy88hyrXbtvWWrxWT8Wk6WeQ8bEjqe5kXvkjnnCt5adBhCBcUhu7ny2nYcP1",
  "key26": "5N38961dgyTvGpaL9SjfkDoKxc5L3WkvgnfkFgiUAvrpev6s7Uu7FtnvQ4wGSwyep87XGbNTvULsGQfs9gauG5oD",
  "key27": "3ekrprLmfiQJWgXk2RaK1FTpcT8xWynf1gzcBTG8D27EyCFPaFrZmqryJABfvqima4pyUi6gaXz6bqra9m9yu14y",
  "key28": "4LinSHQUNhZwS5tHeL9FZhfqxwu1yjkMKB9T5cZAJar4ypjsBv3LQfbVibsY7ZDHonnstW61adL5AvV2C9q5HpuQ",
  "key29": "52QWwNngLpT286M2rJbG5wj5WgqDpNZ7fuBBjYWcYe2fVxgCtZDm9A4bLWv9Qg2WcQwvNLkU2yRcpPJaPnDTcVXi",
  "key30": "wtSjvwyhLh9WyWFkCCCvkMkiNwCKC4MbTJ7m5f5NX27m8j4Em1FkiVbGRrExws7WQn3zrjvhVZ8CDRFWnyTKQ2z",
  "key31": "2thCCwcr7Me29fN23iHX9TbQAAZSeVUGUD1CLxndX8VaukuEaKDFFUQedxF87imnEBdiRx5EAXANM5n4ES3CkpFt",
  "key32": "3ZYD3QGcPWEMRf1UeZ1LPCjXQU9a1v5Pa21KmhBA41FHqV6Z8NwXFXKMFBbptVGi9zpWddrKKLxFNMt9bm7emhk8",
  "key33": "612baxyxeyis4nTFhjcZSvHVS68qqd9H51Ldm46JZSUTtZ3hF8sRrLUmkffXTMh6jU6oyTySUkEXvN8BvdFJz8aG",
  "key34": "3WW78JBZ6JQpwHfuHfW43rCAVuwYE5nn1zTJzTN9yopzoEwNhHLYY8p6fun1HyhBKkkrfoXdgsXQsjMnkaVTYqP3",
  "key35": "4w2oiTiaWCFQnnkvpcLLg7865rk7wXu9CBBCtNjGoy1DGHX2zmoydVmpA4DY5e9V3WxwoJ5FtgE7aXpQmAX9QVhC",
  "key36": "224YoVD91vMTHwnpNwctaHYowywS6EfCoF7Ln7Fz1m9KjYmnFScsnQV9J9vHxoQVxaNSMQ1ZN7vyFxmYaHJqnKMy",
  "key37": "2FpxNoNdZUJb6PGywroa4LLbseHCf88rEDvyNaEjgwWa2qKG3S5X42G9goRCp4X6tbASSkZx9y7gJduXDBZZGbtC",
  "key38": "5xD4D8Z19CcZFyMFPuAU45fZD9kggD1zJjtSTDNLrafo5zL9ES7cDBnuEUfks3dXNVE2wuvzgCg8zgtC4WCRyFcw",
  "key39": "2xBX3TsiVMv6ARYNBDCzqGDhgToG4vdZ3XwkKotc5J3Y3SPArbcQowrUQozxcJc1sfnmsiXsc4YwHoUsVz7AGJhd",
  "key40": "2VZhb7ySu62omu9CLATf6Ghxw8engNDmzLhX9pWxLwwsxDoKawBa7Fpda8zxYKafRzxEUcUZroTSDegGo1JWavqb",
  "key41": "4AYFMonNPUKz7iJcXAoG2cNASXHVXTVKFH2gzSYA1HA2bujXSXLsUaz8DBUHtMQjVsyKzb214TyPpe2FkbZgj3BS",
  "key42": "2GBfTBTUkz9icBkAyryrxMaiyNa1o8PoZvD57n6cppF3GeFAD9uM2KymAHqkHvjQBA1PfzfXta4bw6Je3GrSuft5",
  "key43": "4HJWM7E88X7e37RYSE379exzJW7jdrkq3geY7TJipSTb8yzGu8dqMNmaWJeh1pVVAg7ywfNje1QWuN1eGvdnkZ3c"
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
