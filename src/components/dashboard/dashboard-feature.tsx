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
    "3k9t4WDrN7nRyQwhJFgZs6o15ZYujQB6FUsxwgjcNh2R7bbcaqAdq7fcoDuCzE46D1J4Qa9nfauDUJBri29N5AcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25fSQnpuqR3jaJbyEmQCTYDLrCfAtvRitwgJu6JH24DL7UtoMYBcHwQG6R5ZuYCuE9e2bh6pPT4nqXwQYcaCEreL",
  "key1": "4t9uMuXEyPeXZw57PAmiHAL8MNSAiDUQUgz11etMVyiwnd7jbMhwAG7QvDU2UJsm1uZnRpRJpJikcENuCq3fgq51",
  "key2": "Y4SJASmuPKvzhb23SK3nHpFhDuvku33s4zaBSTkEhEJ2SA1wtuCCZ1zwKvMBrMAWnCN3MyVFLoeveAef4gz14gV",
  "key3": "ZnZUaTaSwoNQdd9kzZUW1p7xcLFEnHdHkZcMUyU2NjUFELa7C2EKSXRAA3r6Mr93Ht7kBV4mFGiNMAm9Wp8vMLe",
  "key4": "HvXk2m3U6e6gscx12guJVU3U1NUHdfCwE9RvfBXumWfxqgnpuryKqAw9MUdbuhwiGtET3xY6Yq2Ev2TPckjGvU8",
  "key5": "2MGD95ExfGCxsEqbJ6fBGr9doeC2ua5tQD5g3GyYi9jwW5SyRjWZkjgS4wDuLCnBq8EFc1hkkK44YdkM3X3diVLC",
  "key6": "6Umai3ze97nnMtJqVRaXkRsfD8XuQUn3EdpNCTQo9exmx6jQzSPWrMQDFwaTF7pbpjwLHzZp7hakqj9eBYdUtjU",
  "key7": "4SsFi29nAqB58iVuoYLqpraYZmf6tAdvvSSzocrtLg2yRxU3V2nb9Zn5QWVqWTSwcobBFHAjq8iZnVwZUdmQi8md",
  "key8": "4d3esGyTNVFX4Y3A1aFYe1bj2Gk4hSKCveqUswwHDgVghtk5FkyPHzGAYiwYXaB9ghQvPLcGJAMiEGCYSHQry3rK",
  "key9": "2HARSAvRvVTH2mckier4RFX32r5ZehJv65H6EPw61on4kTPGukvmYWJEYc34TKxPvfvNd3TrJAGqgnPBFgFhs7Hg",
  "key10": "2WRKcx7S7SH8qnDutCx5KpEw3WmZrGBtfATE4XCjKD6ou2ysENznMaUX44ZCfNedQHzeJEB1CAc5Wig98d7kQqTs",
  "key11": "3hWphvy58BcaLyyuhGKEpGb1kPhHJS5fGntNs4Y12aabkvWPhF4Yo73k1eNJBZkizdcVAUookmK9RcC4wfrQUts7",
  "key12": "5JcJCa6o6rPVGh11rmpagKUPTgDtku356UFmxUyoBA2JPrhLcEzNdMdSp4f81KyX2QRB5PHvrdsrxBkYZRLatYuh",
  "key13": "5oYiS2KwuAZifVqYoTMFywsHRfyUcg6tmXSCuNg7XTiEhPxSTwfjjVxrtafHmZpwkvS45uM5NZK59x6MSGTWFtZi",
  "key14": "k2kR8Xq2wxmcYYAsSXDJ15YVvscH2cV24ysmqiJB8kgcijAwwJ4ebPJGEPJdQ1ipzb4zuSeW6DQ898j7DajPTSU",
  "key15": "rVsTQd5Erky7ZUGDFf4ju1kMW2Ji44S8MPnH27QW9zut9jo5ZjZhb5QQp35bSBvakJFxRVv88kMozkDYG85AvvX",
  "key16": "4YMh8XkwXrqBC4frVdyEQZtRnnFkXFyfrHqh2gt3oK3uvFWFaUPivgc599cWNkKra9asPiRTgcAdjooMJsCm8L3S",
  "key17": "65ySeq8BbqsLcrQCHhgAwDPrHvysnRV8V3JRkn8ZKmHoVnyo2c6fQg58cCZ5DAaf5HZs9NtmHKpoD3Kxea7DXS3K",
  "key18": "3cTB69EyWfEhc4T4dxHUG8gjQ3fY2sAhr4Bint1oCDkggxpwKD2YP6x5tggRowANZhGn4WUBGGC2FBaWmGccYcDB",
  "key19": "wpc94rTsb3yGRnvZWwYuiQfhAoTEhsWeg8GoQKtHMZYhDjRmq6cZ3wWeDke6ciXTmRkb6PGTusrDtToAxnwX4f4",
  "key20": "5MxKmdMmd9313DcEfy96hN5fsVrRgzAaytDURDXofvgEj3DcXLsuic84QvL9MqHYynrvMa11DWFAEpP9JLSc7PF9",
  "key21": "4nZxRqwNDfgW1kLUsBV19tHGyx42kngQk4diTFnymokgH9tXjcJ4b68dRp6eeSvSxgT4vpLq5Z4MQXLhj8uLRPRd",
  "key22": "36wsesWeU3BKnLKXjVTL35Y3bCd1NHuAGVnLW465JXV7p9nYax5H9qwXa85gx9VfzjrJr6yQzj7vqAadCddKcrUw",
  "key23": "6QYPcumqxDiJqLZsDkKQFhRLfbnJNpvPuZqEEniGEppCYwx7Lp9A1mFXhB8eCmci6CFPA5xM3KkFcrZtckRe4Cn",
  "key24": "3wsYnMSdFk31ugr9T9U3vhZn8MfsEbQJdCKXffoLX6iAWErGxEreBoGPkZuRdi2HRspFaxJTazLYARn4XbdJDp1R",
  "key25": "bZq1UDiGVw1QtT3KMPFbfvds7A8aCYGird7jkpS1nQzXaNQHnP2UKoQaoeYpFrwhHZRouUprCtws1JtGaaAkNUW",
  "key26": "WkkggTDYBozQwHSVCKMSxag3Up4Qh1Mp6HVi6MpR8KUDzwbMmkQqgRSohAcziAZNDQaXRmqpsQuqSK5JbT5Hdfd",
  "key27": "2RoRHrDCJDsykLy4DQcktkDVY9Fg6N7KUrcZR6TiqjHzGxzAaN3uB19Ur8ZYHkTFxXPL9gkUdMfHCmWZPKD2XMkn",
  "key28": "27ujpThqEzZSF17Ygo61eQjstXDPUBn8iSenSh2azTfhDYWNbqx3HmMT8UwtTEaFkkw91x8dLfG9pqUhHTGzRHSk",
  "key29": "27Lcamq6m12vzxTmyJwTPR5djCBXcxV5EtAkeGnBdrhG91fhKs5fEmTiYzZmFvGpDGAgrHWc6sfktoG6doRQ8qXc",
  "key30": "sLkzHfDfSRK8HqWosmqEJtwZo39hacuCuPQHpfSTTHjBwZ5cxffhhicQNK5xUn5t84Yx6T4k1UKVd3CvM3w8b4n",
  "key31": "53abcu47Pa1uxMRYEnsV4xUjARHdgB1E3WfXiY1VuguXxLVGftJbRc5Rf72Fb6U7CZB9PfbcxvZKxqkAek1q7Qw1",
  "key32": "8bQnoC34oNYMea6H3VmmpU6MCq9tq3FrrNLV7Hkm1cLPWKmQmhjhXAbRpfTbsmEJErrDmxDRhBY7KRCifWPfs67",
  "key33": "UANA7ZmX4W1Z2qsyowcTpMTqMnsazgSiRa6Ea5GnZHEYFwUUBvAy2W51WgFL36TioNNYnU4xM2AkNRP1JUHFVsH",
  "key34": "2ktBHCJimTfhLqxXCMozwJ4yKsXaN1rBjfyFz5KBfQ9RVJFYp5L6ze9jEt8WiddxNVRKHQDoeN1bRrZHS2ZwRY1M",
  "key35": "2cvJQibKfAzDKeVoTK91msgJJsuSi2xjLeREZoMcbenJNTfQsw2Ry18boyrW4v8YdtHHLgvH6jXfK2DTBsjbEJbL",
  "key36": "489Z7ZeapkxGSFYY1L6ThCKzwJ3jrj3HpMEU3EYNH27yKyqnfba9CpMwU5trRooLCBoqKK4XYBSGrxpH6mZ353U6",
  "key37": "34nZuSbPhFmMdB4qyK2jtH7sVhLzcBZfoDeMerdDMmJp4vUbzFu21sZDp1Zbbp9ihioR6sUYNZiuWsfkbdpLEqLn",
  "key38": "i8xNMYR8CKGF7ahhkpAwEPeAjk6UAURyqmfQXpPgfqyaeqo2xLuV3bZ1f5uzM5G99T38T1nW4idNfzigNkBgjeL",
  "key39": "4qAgduaAHjL2ffwxxEdAZa6QP3NQQgXD5LewqjVMnmpgng4kVC4FLd1dTDR6pZedaCuJey9c5gXSL4HVw9WzcyNt"
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
