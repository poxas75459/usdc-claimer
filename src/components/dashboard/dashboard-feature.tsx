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
    "5YuqW3cJYFtMWi4azkyFWYuiochH4YKscz1cbjzPTze1hm2ix7VtCxakAC3dtUimhEYNeBndvSHV6MwjPh4YSxWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdkatvhAQntm9FfW6KATLAGkjn9Who4CPYnVpDpHtq9aXQN6WXu5zftwi76v51xuRd6ZmjAeYSBN9qqWqCuUR2S",
  "key1": "3sJ7E9msY5ysPqjDxdhmC7NrHF2K8GFVrpzVuSN1iADUu1VfpT8GB2F6WWk6wxT526xCrLFqwAgjWvYkB46th14C",
  "key2": "3n4FFyfDJRH7jZ5Qonpo7HGCk6XRcCx9ZTTvkK3EgAEtUYFT8ZdDhNhKVhKNcwoMmgxi3NNH6QuTS5iNJH43FkAv",
  "key3": "25gwmvvoRMB7W4JdAjLuAxbpjWRL8J6JETDCt2hXNSVZqTLq4WF96ZAqNTu3m6ohKVme5KHkVjYoYQWqixrndzsA",
  "key4": "4hEwNYDnXfJLxSPdfu5wT7BU8ccjtDPwAnvr6gRjUUt4HNhYcAN52quSEQZcWWuqwsRdtooyb3ySLmC7sweHDGso",
  "key5": "4hE41FE238EjVtQPmFXpmGUWQtNGwEGPBpUMX99bAQ4DwHqVqdFUGPjtYyN5KPBqFtfgFP1EZ7y3rAwS5uv1UBjS",
  "key6": "8ZNxXwicxjZz1w4CdzrviAX3e4ZKcsfZFiboEEE2JgJhVzFLW6pui56mPrN89WnxwSd3psYXemkTFcTDUJGmsar",
  "key7": "2kNSx5uQn8r1Lk34MX6LE9NmSms3T4pyY7mq5VXYAYL7NK1HqkvKUKkSMUr3sZCarmfJ9U62vFZhKJPcJqf964Qr",
  "key8": "5wvtDgS7Ki24bK9X23FxpxXsGGmRXr6Ni9J5PHgwpwiUiRqbPg5pH1PJsn5689DstqTJLsyWg9U11zhpzeU1RXmq",
  "key9": "3KrN5iPv6pyokJuaR1wNtRfE1qwxn5fia4Nr7AEiNvMHhkirYu1AbVKGWfgrfpeVpb9SAFMkurt6i3vtSDMZvaDD",
  "key10": "5tDV6PgTHxd4oDVbWDrFiuDjQbkSvp9rHDx2dtLNirEcMWKYv2qAqLoUSNDbTVSAF96yYrKjwRyj9TR9fzVBZXBK",
  "key11": "33Da7vy1UkZ9C9JczjRxfmDcQGaichbBaX4zjbJ3B7rWyUpTgm3yysQ5RWyetWE6GS3UpDGukrs4FFNKj3Ht3VDg",
  "key12": "4t7xoHmi2GuiYEDNWpdfwpUdicnVFk1fbN3fiQ499ebsidRXzjoyuZ636xTBmDmyoDW6bFzpUhvMzxkGVfHji3wb",
  "key13": "4p67aeJsz6J9AW9phDAQYby4UCU3WfG2nkPVQfkPCNceoXqfPDxhAmqt2cf8PFnEZ2JCPenEeSTR1uadZHY6viuq",
  "key14": "2eTCEmMiVEgyCP5xKuzExpHHjFjnHTCevP2MZTCDzgRVfS4YJ79pknK3dDpN5eAiZfmn9db67cjXcZFMQ5hFdeGh",
  "key15": "3dkRzqHJr4EKaxe42ySHHC5L7mSDbNxXwxYEeCZHjiNgcafpdLfNz9GpweLGA2qxLa3jV6CYyVMesujtA2TA62vx",
  "key16": "5PUACNVxXq5x8jXq6X9mmSrUB6nXJPEZs61bdY2eCpqRCJpefuCdjFwEE2wp6hzSA77Q77A1WtiGrJo48ZJYpA2h",
  "key17": "8dytyvVeJkwBaWZdsmvTBMb18hqN9PyXA9yyffNKNv5uEctoWhQvdUB4QHjWa3Ua1rfmsZ4PsVnPXFYjck58kvQ",
  "key18": "Zq8nxVQrtpxAChuwhP5gFqLbd6oP7iZGPeA3myMF78N3dZxzXSSgF9517hovVRVixDZYN4pYsyDcYJXX8TdaZpN",
  "key19": "3pdyTGbtBzjbMhLdfFg3X3e7NMSM96L6WRYBsvNBxRqEnwr76ehnhGcT1PT4WNEo7oA8mzhp4usoSfxmpWSyKPpJ",
  "key20": "34fz9VMZZnWSZcAa5qiJKBWRTBoCFYBy27MgwaDMPo5NnrGmQnNbfeWTV3bB1UucAR2Qad3DJ1jFtU2LF6FHc99T",
  "key21": "2JqPntyEAgQQPP4wqgVFtCQAAs8m75DgoToocgXvWd742v4cgPDWs4CHQusb7TVopuxPXBPc2wLpuM88YAs1Mbum",
  "key22": "5jN4UB8vHoztAEdVVaJBTL7yvktzwkbKZvNuGNu9qMUcyDH2rfaSM1SUcPc3rBjbeGyHiFSwqd64RLhQgwPCX8HK",
  "key23": "5fkSq8TJP5YSepXKWRprmimUvKj9s5MuzeFS6f7BtmbXoH9P7yzNAuMDy1Kj1gvd49s5Ar4QRNA7onaLmwQFcVZr",
  "key24": "2dTLKRKngvq1DChpcsWuCX52h572r12kd3rHg6KEqWNjmru6tToVGaygDywCd3xmqQybrFccJcEeRAc1pVTBUgsy",
  "key25": "3zyuPBu3RyejYqHn5uWFMdNjyPof5RkoB2P81t9BrT1AYp5PCD9pLDYm2ZqcCt1GtVCnf3odxeAy6aCYNSNW2nMy",
  "key26": "61drimzzYTAJBdsApki69ssg9yJbZGPGSckcMXH934pprcCaBTA99ra6QZWpKTu9N7TUrWveSwLAwSwVjSGaKFhk",
  "key27": "LqbZW8Wpx2isp8G4YxfC4wfSHTnu1LtPwkmyaiCiTdyxzSe2GqfGMTbnum4fNLCnEgqqLihtyBfvcgh2WjVqdks",
  "key28": "57YcH1JnnRt7iFgeDCGctP1xdXdyB7NpXpbSz2cmYfu9n9VTR83ViNCZ2aJ34ww15iesWLyJG7hdJ21uwoCaqnCT",
  "key29": "2Sn2mEcLBD4S2n7SiWBzps7yq8D6sV36gegkcbP4LzK5RP8sBbkXYnAWjPqMvNiAr4co74BK6AajN9S3su5UjsQ8",
  "key30": "4YTfyQQBK42ZWQYqny7Qgp2FfKEo9WUDSCtwtfiCwHyDWHC4w5GhJ6dKwax1BKuzEPhvwhptViECHxLtpnBZAFcL",
  "key31": "3MxJbFu7qVDSo9shLdiMQErDPGPArQYRheKXk95mskBePjJGS2RL1itYov9bzP52cw2jyqMi3G1WQZHUipdad8dz",
  "key32": "4VgnbdFzZ6g9HPGzYwmUcVuZ8hPKRTyWSDeUzobvb4e2AaVmBbFoNQxMef7upbYiX2yT4VavifRcy7fzgN88U5rG",
  "key33": "stbbwY3NK3DZGEkiiYAc7aCvaVSzmS1HfFuRNsBkGCSTsDMCg51Ygai8tQfCTfaS8ySAJYNW8pXSp8QipLxZho2",
  "key34": "35wiCbTeDhZns6bfS1LL2ATHxSTiSRaGW53734awyxkg767px97WvdASQZTuok9YxhrmG6byFM6up4rMJAtZZFMS",
  "key35": "5Yy3djjQjAE7JsdJ5fJ9HBwqXWGMaMKQXAcJkyCYDn7GEs5FPZiKkA7xNhRkEDcNjmqGAbW7ey2dH56Xoo2BTnAm",
  "key36": "3BShPKjxGhTo6hRXV6CrUPRD2LhUZGocfb8R8q2yXZm7DaTmAgXn58EdjRucs7xAR9Hnkatdm92ZL5Gr6b1HNFS4",
  "key37": "4iHbbPGBzmoGjbw2QzyoRKe5BFyctcJRxA3b4rvMH1zojV99TtTk15WS8pu8P94EiLEWFFWLj2htt1UjM4NRLjeQ",
  "key38": "DtEVrZuS3Kn6VqYGfcojr8nV4S6bnutXz4czXCk6oU1usr7FUCkKqdMgKVMzaAaana2XSx2c2vF3Z7g1sfNVvub",
  "key39": "2hUUwC8ZR1LmKeRYiEViJPiKye82zpDDUQcPxSdg43gykD6WaEh17oeWCDb9qnJ8DG9josnsjonLDKxu8cEk2wV5",
  "key40": "ZEneMUxTFvzzuPRBU6NyBkHV1tdkcyPieH3qw283KGTL82AwxHnnMGw6X2axybRkDT1iZ4f579tBs7JGiBMAPVL"
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
