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
    "62qFekExeQ13vZaW7Z5G25dTdXdZNTCHpR7DkkR8b5T4h2HLLBPcWq9sQgX17t3WEzN9b56W13biidiBFgYak8Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A6ZU3AwvCQCK8gccepHqLDJHkKPKLEModpWGEHgnvEtQ7fRybcDpbHmw4KoqX8TXNa9cc1vKTmHkckjGxppcWPH",
  "key1": "4ei9X6kb4xsUmQFVa2vwxAywwdN8Ss3S6fCsNucYxmSMooHJr8LnFsm9ZTbN9VbN5j1kAh73zEGibchBwF9vAbKy",
  "key2": "yyW13C8j2kgYpwHYeYuu4vynqjQbVGQ8ETQbmGKtMcVvBR6DCVNRJob9d49594QnaXQCWtpU3WhM9SCaiUGCYFD",
  "key3": "DYiair9rabvcMXFgfPDNPMBxkGNCVtvaqbuaL1HRzkSFog7pH5gD95xK9RrbEdRhiUmSYSP1vbs75X9D4zhAcet",
  "key4": "551AJRDj5Mk48bTgFuz1ckBMTxxzz8pJ57W5k8CfYemTCYwRKLzawP18kL3hsHCTnWSJsJUuh8ndySZpDM5XYBBT",
  "key5": "3QMjHL7AYDZ3G1Sf1fNx7YQTYtbcxoGqkaRATP8VmEy35C7GQMPSWy1SWfevsvqBGQpmxQKoXwX4rLGEwzdMSmaa",
  "key6": "5Cn7bjwg4UNdvZV6wBbe4sBzcrkFHzV9zkFtEvg1HsQqtnZgNPu6GNAtv8oQDYoxnLbnGADdqpT75GTQCLTzKF5v",
  "key7": "8TqVAPLbFNpsVemGsQ5yHFJfvxKbamcsJWFHjLHh1exFQjAY9J7CeAvqv6BQbLByLRdN5dQA2SGPF66fW2XtMJc",
  "key8": "4DfCkYC5W3dQSW2f1vHj9YpDoqYXYnGGjEgGpRZdDNRmvNgo7fa94HGoMMoKFnd2TuAnDnDZAeRWR73w3WbxseAm",
  "key9": "VfAB4aivmsbBw4utb6UXFQpruPbcrL1yDeW733RL9cXrbVf47x6CoMbVgkHKpgXHHAeyxQ4S6Mu6X5fWuTfQici",
  "key10": "2v8psds7idzVYRKarUmATEFBQRKFX1GGb3yecoKCF195zwYteTwfUknrzhLtn36yRn8qdXb6RfGUCuWNJwNKPVG5",
  "key11": "3XFsyPCzR7S7hCBgJ23gUDW1WAQPn3BtabrPCbiMzBvUokyJpaFwVEHV2U2xqcB6ak3Y3RfKdzPg5cb7Vt4T85k5",
  "key12": "D7pJV8dRViYJBfg9hNJUZqjYY2ENwmJJDwSu97RNXV7A8zUfWtzd7NS2VogCJDiuDxQvKLUGs9ixD1uKo8kMD46",
  "key13": "4QspwbgUfWv3Vr8VYacYTWZSyuMCzWFjC94KftwCHd9GcR3efhSgn9Jwos8bKuvXUqcotwo4LYbSFU32wkvSkgML",
  "key14": "5XRxigFPxFkCTV8NS7o69wDMEPqT8wKcuhUBA5fYjQtUvy4X7EvxLg8A9SpnwKHrzygGuEj6fQhtBamHNDeEFrvD",
  "key15": "4Dnfdc5B18nb83rHNJoT91azbpFHDYRoDz8qS6dMikSTtLNUhwiTv8fRWA28mqTgvC4qXTZDqXqzDCPCtcgjC8ab",
  "key16": "5FLjxW1iyNSpnsKCmbB5Tp4zqySmtZsi1ffXCvMrXoSLoCmQdLhj7U2em59aTHXW6a2hdgfwqmWnsXJjqrR2jb3S",
  "key17": "5GaQNwEQJdCscZVmz2chcigkp8f8xiYD6K5fAEGkuRzBZcjyEuXQadwQSxvqqR3u4NeutNqhfnK3RPZkLH2SorAG",
  "key18": "29GT3sTkaMEJyFM71yzHwLJHumvTYfBx1nGXpuUDtZyw65uDZaVwXgKcHvdonkCZNbUjdmVk3foUMuQQSyxQ4wU7",
  "key19": "5Jmzsn1Eai9GJqQ4jbtLKPcfuqMuWARn7rHUs7KJZiApyFJ1SFNbwkFgamuL85RKmeLYyFRQPFJtYJAKVLrVxqyL",
  "key20": "3ARRyYv6BgDogPqX1X8yJHDdfYURAAMsLLUZcVg8A3MsMfmEm2skULrVxf4mL583Jqv4ppFbKGXzCRdAiQgtA5Hu",
  "key21": "67feJpxdTB6fCf7xt7C1PCgWpdWbYwqZKvDNu8iykZguJCuA2p8R7ZPu5fQDLWNEJtut6UMatwRzoZyU9nfpHcDu",
  "key22": "sDfChEt5FWyU7x5TtRQLLYVgGVPRDJe6UBb1EH1zqwnszCd2N5iojhioJ43bTiGrGQN6yhXEKGgRvLBxGy2ZRXX",
  "key23": "ZApiz46jjbHzAZRZAnX12gxqTAU1d2jzWzipW3zBp75rjWxUvNLcY5KieDJiDhKNmyiCze7CmTEnFP9chUBJBnr",
  "key24": "2Luu2YkqzRgr8mchK3WfHv1YekG27UgP3KFi9ZVUCa4u7aQ26fwufKo4B8hGgnbmhJ482QMiEeL1WaMiD5j4S4cM",
  "key25": "SKaLbk4MtVRVrEXG4HKpEqvLAmmH4eR67gvmtYXgU6YfUPQ714GsRDaX7Z1bNKFKcRjoQArRCmufUoposQqnQdg",
  "key26": "38r9NHBHUzXenb19D3e8QMgsRCHjguMS6zAYPvDPHdgD4s29MjjfgdBKF1zDFEc3mmFk2t8C1AbCkysRpnA65mze",
  "key27": "4aHwdRS3bon4v9weRQVVntTkboE4nyoovs7ok1wqqzqE3jDm93ihFu2i2kRuBWX8XooontYMGHGAAAzwyXwmKX67",
  "key28": "4DvgtbzCoQjTp9Q7nYWSHhthi6JRE7fpaAosHbAJjiUi1WHakUEwQpH1Jnr8i4PZYYfyQ1UHCN5iqybR6BEQmdCP",
  "key29": "2ofWxEvBqfrPNU3xKZg97TTFGqKWwDt8q6MLpcnXCB4rUJLC7hc15o9fvMGACYuPxTtdZ2W4sw2mNn4dHXZ9uwwQ",
  "key30": "2AC1jv7vDcsCHGEhFNecmYWkEcZpDdqfQ2VyzDbvASUEWtWsc6Wn6hnkm6Ltv1wtj5hjihNX1vZtTrxLANFPemJs",
  "key31": "5MByLukHjxr81FfLHprHm28YALhNzo4ZsZzuhkuunkzVAHv2ZGrKSXazhk8JUu73973fcp1A4k1a9WmvdK4jDxtP",
  "key32": "b2NFWL9aT9PsxMjCTc9ULuTUmiTaRZaRX71jCD9YX35ukLbkddCVjJvvoqQtuSEFoky2CQSrSKHw1qYHq3iv4ad",
  "key33": "3QyQr9e9iWjnJS9b5WmcAMYg7qeGq1PMi26BCkkrrdPwrLnDBVZKDxFuUsWmxFnHq4CLK3bnTE6SfCZkZWwsgFBn",
  "key34": "66kVYcEBT7efrMqwHTk6yABKt7zP8ogtXCEDHTDdz4vvYSuknJfKqis9Up7rHup7LoQXovEiquqeS3HjcSkgQtwu",
  "key35": "4rKpdouJgVmSuWhaStpTykuZ3p1FQCQoWSrcHYAGwdDwjBga2XE64LoD18SxdxLrzB8oiRtUDrFdpZeMi3maguvQ",
  "key36": "8WghDyWC3UVqY8shw6qaN8Hccz9yVrGot9bsBcCDidnNRnaPYH5ipUZxBLuGF2GTx8jfuguBwqqehKgPCR2CRC8",
  "key37": "4WA8EMG33oEcWajX3PBGDf8qRS6iAdgJJ5pcsdeDeWDNFywgoXxV4c235zSkmAXe2ws2ZzPNMLbuf9yo6sLe8KWs",
  "key38": "5T5qLVjoXH1ujbQPsQSPxdAdFxDHsoNQJcDZ2pAmCmJfRqKgAzQhxThx9iA4nydEToYB7dkzeSpxrFGVKfVaWCac",
  "key39": "63VdJGehp3QeVgaDunrW8d4LcR3vJqGqFNatPQK4bhaFB54TxxeG7zjB9CWXbibPCTvsCijDA9kJeEjUmHUNwSeB",
  "key40": "iTpqYXGmW5BSwi7bsuFv6vYBFKr6mMmQgUshEZD8rDLDyC35mWRi7HGU16oLVbYrccaadBsED7xUeAS1XJjyvvQ",
  "key41": "BkicFQcwCx4WUGmnmL5XNWQuCoujRC1cRPAEYNLywYXZPirSFy8Eq1QWxr6Payy6n7R1Rfn2697PDzsWvLU7DJa"
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
