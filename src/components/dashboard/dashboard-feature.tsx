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
    "5cXJMW1ZfKFaGED4cn3jG3GWUKPGqVTLqEZF2Po9Sv6joXTvLwEeEcRVQrdLs1HrxNjjvJg6FHAoUzYrPLij9oSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNkfaNghaukBPAgJMtmuJ3BDkUpTFnbpnqubfNCQDGgXgY36tfKRLYQgVAdfu7WiYo7Xz2m3Wh1jGP6xVXWm9WB",
  "key1": "3C2RqhgeZHpCG7bqG8vKzjFtCM7xg7iJEFFZHt7pingz1iWoLsx1WpjLBd4dSM64TpH9x4iEtLriuGyR8EgamB2J",
  "key2": "4PsGu81cQDaaNhxHNEDJdUST4oKJrJo69XC23vMVNz6cVXm7pHRxUkSv5QVRMPKcMr8hjbz4acZxrGBwdRitcJSW",
  "key3": "237CmjYv3rG2DNL67gg6zofxv8mARrMs7VRuSAejdKV3zUemKP5AX64mfDvu3tZ6em2jsC8ghSmpHukk2iBefPPB",
  "key4": "3ik845LfqpCYGmAmcuNQkwoyni4RLP4qaBNPmrXmgKLBhNBtwqpAmQq5LwLaeYD1naYbkPVaJ4o3BjfT24EpUr9c",
  "key5": "2RPq7n6XWZeDFdqRCJXdCTQq8oLzDnTAZk5ERd2PMMgHJVuhEhHMkZ5sGDvKhd7aA7n4Y68sDPCnXHdiDJbGL6GY",
  "key6": "3doEhigNHCpVETsoesBGPFNrdP44qy2ZDmBfpquLigomLiWjEwyQLTuZyskpX1jsWMmp29gL4vQ9Dru3DQxboYYv",
  "key7": "2kKxfB6dhA8Z3hzkdUdDjvmqq8XAFRbEtjm5aUpAkGiGNM1GVLrKRCLx3HSEAiZtv91cWcWp7nUyQmKNeZXsUrRh",
  "key8": "31onRMixpHotaQNeU7HqNQ8PGyTtLUm4s514dJJuqbrEbFy1ar2GteFnkYvqcs7dkwBygiZ4GnUE5DAuV54JxXSH",
  "key9": "4GqYq9LP6r8dK286LWRa5Xr6xSiDWcFBhnb6FMyz4fyLSyZyoz8UJDPerWNd1NkKxUFJLWwFh1ohoXx3GuDmoAC6",
  "key10": "EkC8cbZivEcTeqAE7xYz3dEX1TjqDvUuEQoxPGMhbQuXc8Rqqk5vnejaYamQR3v7vLW2kXY3us98ADPccFp7abj",
  "key11": "2ULR8oaU8UhGPUGoAnwEc1BeRJnfC4M4taBMfXPTdZgSsFoa1QodHt4GEVQGaBLWe7uyBpk22JH4CCB5mbFwLJPx",
  "key12": "2dJvzKmLCCBZdtSMSLh6d8f15PccPwsL5v3kvM5cThN5NEydx3U3PR68VSwMKR9AnndUCpAqoFuDNX1KbpC94w1H",
  "key13": "5sSTYB9mzrn6RNXL9wCYQbNNgAwqYy6uAnvXTWAat3CtNYS4WDKHtUXXvuFUYft5oyAzJTZu4oEVwMwkBcq4CEsn",
  "key14": "3LWFFuf4ddmKUpsMcfDZMo3AySGBJA5pDd74mJTkF36ySHz8gUahRchoUnNGMrfCU7UKjbLf229HizKto7roD1jq",
  "key15": "3fSdUA5jZNMVjRsvoqZKrkKJ98to1ezwXtTYX3sz8MmWMPPomtkV5XxcPjxnsppDga724vyyxSNJFeteFA2RW8bc",
  "key16": "3LBX9iaaTAyuYP2tFxmgL6CufbHxdrambSzYJdVVa3iLaPovqrbhn8NjrFVA6h49VnkCUeXrG6vG8gLW2ikseEfc",
  "key17": "5pnCRWh5VnEA5oYxQLm9f4KG62rAJ69nqpdPAcgPSdeYeid54Yh2kw847CrHKVNeifgDDadS5ZtXTxnnMKHoeBgP",
  "key18": "36L5srio4NVgBKcFBMaevR5aV4DyU8NiXadeaTbu97ppFBWqxx9NDfnMuTb6aFBXie6vW26fix6FuJaFbWi3auZL",
  "key19": "2V8YNjM7QkewJuawPcRP2FeoXn1hKXrpRpaZ9p3nTkSDF4tCBYWKTTsWUu6wvgUok5aoHUUK79w46MpWN4y8M4mZ",
  "key20": "KX22eSS3VibSBzmfztssA3G2rFUkeMuj7ftpNu13jn88zZfAk22VqQq7QVLFgLEf3aAhhqXzzxSCi3NutFSw5P6",
  "key21": "3Srs6hExmoC9RaCLuyAyj1PJ3EDjVnLq7GhmpRtoig2nEpgER8737vwCAeRefCDdURbYTApazd2VzsLESob6e4SA",
  "key22": "4LEf8RrmraPDBSuKV7s6NRiQUqZ3sXBnUEqs9ZioS5kTdQ6DwTf7JizsNDKSnJ6N1eNuznq7dzcLy8BGggz3y9Yy",
  "key23": "35WgV7ySE5s34MuHhgPuiLKv5bysb9mboBqtzY5AyGwp1gg3AV1F1LEZmiGvXA4ft83AdMpmHM2QewoQuMRcgUYd",
  "key24": "2oULSxrUZR3An6QNobRUiVr7ArmyuhXziYEK3xrpQwCQ1izQE78GSn4uVLBJZhH2VagT9USjHLXDqxDjehpCsooe",
  "key25": "8DjG9VrwK864F7vA5TdqnVzkpNgRyVQfiiLBoAMn7mzZ5ShmZzxLimcMAt3uvVvBxoQYHqNaQycQnKzfCrfGv71",
  "key26": "28iFjd2HiG4Ams2JJosxRaDkJ46h5QaYX1kNA93QigcSzfW39NWHpcCMFh3Z4VUb9PJhDVmUHVoRTSE6v7SWbAkp",
  "key27": "5h8tApXpyEquXGdy548TfHP75ffV6JKF14GBHiZQxMXZH1BVbChrUo9o2GWZo3oiNPNXssTyk1qyCXzVanmtKTMo",
  "key28": "2wSfZxpFtCbqCzxvLRwquhF5QGmEjwnYqGFyTJPgJJqsFmMREa1sNzN1XA3dTibgrFUdVwJCW4KEtSwhyVMDKGuL",
  "key29": "4XDPn2DboMvHLSt1ZefVhPuNcK4GaVu7zf8jPekysKMRdJYps2tqcDpuq8iqWL6rZF6oA523C5gaT4izwWTEkSPR"
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
