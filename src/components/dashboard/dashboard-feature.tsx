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
    "2bFs8xVVoC41kne7AQq1T8Fk6xPmigXYXBRpYvcN36sMw8ZPBdgX5895FnfaELGLQrccB1GWugUeEef3HzqpSuVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BY3d7X4gK1QFVQW1LRiskv7YsJqpcSoH99R26XzD6nzMFwecxECqTH1W77ZkfRFKZrpp3KJmtt6fpov1nAm2Ngx",
  "key1": "vrYMZ9LJfaWujghJY4QguX6vJQwyqdRaHjq1r6Qhidfc81NnnkGstwihqPtBft6FaEsZvoVW58gycXuaS5tSapE",
  "key2": "ezFTYSw3n9RHjyLjufyTgkshDEWzFprE7nMtRdRxJh55PLhiXEc4KF1fhjDnc6G8zXBED1WQyFD7PGS3fUygiWx",
  "key3": "5frdkrEC3vUtESZiaXYDRmwURRHbJKA16JeAGDXiwVaQDRhJ9aNQNGNq5tRnRHGrLxCsb2BxjjA3iM4nCecRZjvB",
  "key4": "4dj3Hz1zm1dM6rj3voxEF8in6KZPPLuViBuC5GWMHd9e5WN7wot9gJtvuBwrDK3rkCQxcbuWxEQ6vpcgmLUHPHAn",
  "key5": "5dY5zbsVBxVaaJY7VzdGkEBAxXyWc9HBfW3fkgPaR3Rb7MiZMCK1RHntVhmAXWx2Q5YTGL4y8s7rZr7uEhJTuShQ",
  "key6": "2bHf22XJvfbv6Q8BhaSSA4mAEZka2jhihaMhaWaahdb8qSv5UYDQe9hjMEdmEqtZJs8AKBhHBXioQ5ktiNyGmQX6",
  "key7": "WWxT8dLL924zH2EEb6Je5ZviPdsfXX1tFd8g1s8aAPh45rwk2uLR75CDuspRPiTLg6cLCrTJ261sXrUiQyjqZim",
  "key8": "5bJnjzfLYsFQUwD6FpDr1S8DvbY9i7An5RcT1BrmPmxTGYM9Fd5NNAEZi1aaHU2ci8bQ8Q1GQxidAHdG8F59bLyB",
  "key9": "LP8NrHYJigXmTjmsZZBkwNFB9i3S3y6mxFgaeSXQFqKRGnSLZwqf2iuARprX5UguoBTndtioU9vMjmyo8m1uE2q",
  "key10": "5UxUQdfNJB8Snn6nm9afFeGN5k1SsFoUi9L7s59ZLG6r8jDjRcDifzz6x1N77vZ5jZs7mmXWD1Cf8UhPeArjcLh",
  "key11": "3VVqSWxdbvSdJtx4yeu4nWKPvzbcZCf8h3BDT21JxZMmfpAyUEGRxvJdfEw3qYgQcgh9oLc2REnLkukziDcs1any",
  "key12": "3oXAraY7sbokbcAft1ATv2nW9soxxQwqai6R6MqgDSJnubwmKQBbgMF2DawToibqm8Trw9hZdfSqhtxK1HQbes1A",
  "key13": "4zQHhjfpxAjWMKs3hCTPiKzpoQeCgxTy71NA3N13FuAFkrAbhbJGgwiDHfCfJBtD9VY7R94VjypQgaiee78qsnAV",
  "key14": "2W1sxAhCkWP2exUxbt121md1kzYgpBC47xx9bZgcfRAchiNyV8djXbKoAwoz5rGZxcuYkzUht8NziDSCmj2hz8YP",
  "key15": "THucxk24oZXEweuEk8hVb5Kf6yVr8czRuLnEdoCmkLm7BGdoVuCXg2CKx7SDVAHX84hmHTU1zPExLKsiHe9f5gD",
  "key16": "4oX6U9X7NCGvS85YZZkuVTme5dsPFh2UHF1MSta4M3FX9jr28RkrM2SEYLXMbecmewZtzi7941UFmYxck2VVtfDZ",
  "key17": "2SsstU1FxqQaaMuSoWXpexj6MndqDvouxcBp1Gmu1zpE9nrz7FgApZL5yXSv9bzMvFREE1bxyschLXAi38j2hx5",
  "key18": "37Vvr78cswBGSDGaohoyLU1wKaZqp6YUvJsgdR7Cdjuxe1ATnc1HFRqcoi4ZhNAy6doEfeEMgXupWVEV5pWTfEFd",
  "key19": "3xUGdweiQ9bcUrswntNS1HBF993zjf8QYjoADfd64AUBFcZsNyUf8YBWLPwQP9zb1Bqtpd4KRiQXTwXi46YefMc2",
  "key20": "3ZasG7UgaArTGZSfHV3GcovivyaTE4oQcQCaNQxi53G6M34X1WqFFmvo15oEKGhmWfQ7XT33sf6v1okhVWHY2euh",
  "key21": "jupxhx1zKK6fyge9s3aovmAPn3ckb7zG8MMwm7nkMAQPCb9y2rnYpKKg5sfBb7JVBy9VSvVQiGQt8aVDW1Kb4FX",
  "key22": "3DEaF7YEkidLWS4vXe4kz7Fmv5Rs1FmDY1sbvnH8WaBBMBxVifNJ5hHxRB7aqieGUUVnAWefrWyNs69N6LWiVLi7",
  "key23": "2d6dauPN8RrXqrLwDBEYsFVetSuErFNcbAkMpzvjLkHCob21z5KPkiW41aBe8Kn88yfGcdbKtiRpt9vahKPgC3t5",
  "key24": "5DJtju5J9ninLQSFRzVxdo28CeGM8LUtzj2rJdsvPFLgaBgQtXgModDxi17LP8wyStJ7uwk4ZR3niCRLbTd5YvSb",
  "key25": "4xVtsBCsAoDfLbxJfD9Ho1PaeZimjPXTcXbqe2S8Sp1TQaDwH1PrxusvRLJjoWAMHfP9eNYgtbiqWjv75B4QugEE",
  "key26": "34WbHPH2y1EZFZ3e32EQHWXdqGY7sRyMgyNoPuxqtS7kH9QSnisNUrDLwTdaUF9GhBqR83Ft4jyHHkYfUEmYiFws",
  "key27": "7wfP8PnC753KZso7GyxuEF1PbCicyVTgx8b8MnVkWkd34e9asCioX2Zf7utp4yC9dUYChBxn4GwonEyRjAfhRYq",
  "key28": "4CCz8JmEHr6UZw1EtufjYGtthRhXpFudfKuF4jHB9ybW1tiFpTf5Je4ShXY5fnvTaaqv5d1P2WfzjoKPWmfAg6a3",
  "key29": "5C8iudARrbSeWmLruQH86pRDtfzawT4Vp7TNPa5NR6FtkDbYcSrxCHHqqoUG33KzproZPitDy3vBstPixFGtBmxX",
  "key30": "9dJPVkjAoJ4jZyKHPPLGyjWww3iCFZ9SK7ceuTjTfnw9bShhXjS4sfDmH3WWT1d8fTKTbkJbX7qKCwYKhK7e4YV",
  "key31": "3PhBEQ7mbHqjsNu4TWNp6MBuFcMF1xeyw3b5Pify1BSmoJayoZZvkVxApYdbXAdHRxsNV4zJdK2kEuHcimCnd8sS",
  "key32": "25C5fKskwVCT7Rn7YYH41CnVXYU8uLbnpwFuudye2zZERdrZYJnqi5aHpGKfUWSfSFuHfxeNXdjSGmQgu5DCGwAe",
  "key33": "53TBDTwn5vJXkn43JKyWj2gK9gsLCX9LSNMUJHwWmP2EJiZJo3UotVqdPwf3GCoyTyFJE5Wdb7hMsW7ToWrMVbZf",
  "key34": "2dFYszcQCUxRKVARHrYpYew3ARzj4GtwM8UjYiTskXkGQUaVnKQ7wRvcLEfyqrhf6VUL2mQt4ECnqhB7P3GGPjnC",
  "key35": "5fpWdoDs5BRnDyqbYYDMQDnwRjp2uhi94HfcgiTYfr5z8EjBFkCVWH6mBqrzR5FdPF8t6mSskBjhyNthp2cGRFrD",
  "key36": "3AGDS9ZKv3pkPyUtyywrJVFN1A6143asoXQGY8UWiRcgETKtWZe2FoWe9rKnNi2NH13P8KKzdreJMHGqZ1sawfEu",
  "key37": "zvpWKksxdFArnCBfNqScxUBGe4iSFtcrHASHBSEQpBcikH7Ng5zwm2aVLfGdbsBxZuCit6PwVBHdJq2ytpQT65M",
  "key38": "2Hyb1Um9swaT1CM4qsqXVuF2fFj65sbMMetH2VY5zEc3AKrPb6rgPB2XDKxsELpBiJjAS8Qx2utzFMDfg82qwvoJ",
  "key39": "4Pj6jyAb1eS7hBmUXVfdPTAGHwHmLC3N7tvGa8vXRU8uvphWmip8pAhdpiXNPkx3uqiegBQS4MbuBvvfv3CTEu5A",
  "key40": "5HSNzE4Crtf7exYn4W5y63LwnHX8EupeEBps6zRgz3wtWykX6jqfgG3Db6Ps8e4n3omjymSB8zqjkQ3KuotukGX5",
  "key41": "2VfBhhyuzfez8PY13aehyq99nydXHkvehyNsywis2aeQDDZgK5WDhAgrQVMaE3yCo56ehE2ChM7tefzs5xY247sr"
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
