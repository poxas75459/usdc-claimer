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
    "4Fe8Kran5U3ub2xmJsXngEQqsz3tBmgAhPS7KhKBjg5qxxemtvvVj9Q2LKEfcmuHPP7MSRrqXfLodK1z1uv7GjZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCUzLpZ7uKmoGAqt5n1jQJYvVm6F6sXQv7qFHp8D1uE61WvBRGtNWyBgnqPPHnVqq6o1bpYB1UB9L4Cyq36sjyx",
  "key1": "5XnH5eJ6Ygn4dNaiMnP5sVAeoyC2kwcwAK11kiBvc2hgKDCDBc81YmRg1oejUSbBmJWBiYutqEVq7oV7x4d7Tn66",
  "key2": "5Nstdhup6AYfGFkugXTFXBtAMW4c66HpBQugdcXxtWC97s2ur3fDD7dJJXVmDgcSwd9ZuLGY15CbnNUK642655Hs",
  "key3": "2H7XBfCaXXH5K7afqQ5Ra8JkFNuSQ5cNHkujn8poNAV2jpuY3x972ZDZMQrg25VPpTRH8oaEn9n8yfAG6S1nqZhk",
  "key4": "CMoKnYu4wHs8CDkeHoARdeFtq1WTxWEMZFbr8or4AprnmiTUU9iRwCZGiKVoQwwVzMXTEaipKHP3iU9qxAtQNjS",
  "key5": "ddpWx1kpZh4CSC446mQ134zx4cp1AvDAWNVGrUCFee5wx9XiiNen665Atve42w4WafMznaxndFHJt67Dafr1spX",
  "key6": "653fisy3xfuy4acX99MS7aU5HCbCYiS8tFPM8FLPHYEJ7w6rkboB4aASuzhFxoNvbvKbWzzN4gGD9BXZmPWP69DR",
  "key7": "5qFTHCWxHEQeh7kRJ8TQ6X1oz4XcsbMZ19Zv1MAhZ6eQcVvwGG9GKuaLsUygemTh3KHd8JsgLX7R6cHvQ45RPy7",
  "key8": "2RZXZozBtTvdXxSoooD4TP9x1BqFAWoAMXunRK7oJp4wY9cWNwZEMfyQNdEF4BEw4yAiR7JUzh4PWweqDZnzQHQ1",
  "key9": "3ff21NAncUbAPweS57Qquh5aZEckFvwxTMoApnYK87MDv7xHTv1Mv6QuAsqkmzPwPMAMQ3CPs4ZYNqgtKY7383Nq",
  "key10": "43BUEFq7shdKexwu29CRCaXNB4oqnSo1mUuoPkntKx8MubEGdWAFAtddiSvWVkj35wx4qkNj1ap7kLZy7sqnJYMu",
  "key11": "3LmLnzQmz8aPWwgLtvKDWugFkVUbri3nFZij3mswNcLHuwZUwVp3gAty9AgUJV74wN7AidL3B8PU82JzaYMfR4JV",
  "key12": "FWFk6Mjvd7EqeL63XGg1y1nHMFXt2Q2WTVbGEaZsUyUaXqHid35FyGSQ4HmXL5iSEdcMuh7zuRsnKCDE9Ts6Qpp",
  "key13": "2WzeLYaZKxgZ6ZXS77DQVuD6XxYa8X4a7r9BsfctHrjuxw651dwUWqEUEoSzcxhNPGvVYoXW3fBijE51a6pgkNLf",
  "key14": "5YwdL4JQvjJ7KWYagQ2rJ1Yu18cfM5SXU6sWnL3Sd6L6PWvc7q1DLW4zw9CDv2fQXmB4DncJzd9LpTJMaV2QFXxC",
  "key15": "3gXtWrLEW6UbYxfdgsSrficbCiQs2g8dHDvrpAzuPrwLeuouwgkwJouT7WSTBgGcxmnYQKEgodVt2LSFc9Af5Qre",
  "key16": "4R8aMLasv6HLyxfAqGwdx2M2A9acdBAPZHXQ6Bya5HRVQA1g9yC6Q7kfLtRHa63rVyVDcpY7gGXBcQxrKEVa81La",
  "key17": "4uS11rvcroxkp4YzmhuGD7EZWs3ohnpxhK6wXcmnrDyPiaRy2NenzGazSFCa1Pp4YjH3KcsZPvjzEYw8PmZz46Fc",
  "key18": "67eL8EDXfWvKXN3fyVPLAHPavcQGjZe9T8P81gUSn6Gi1g9bPpAgcQew7ub2diohaCVVm48N5d9epcm9eDzUt1zE",
  "key19": "66aHvL6kCdiVkEVHroCUFrAnMoawQdUYT7rjVgPUK7YgsV8XoAi3PbCG4YadMsnQiMGx4PEth7JUfTeeKXnHvRcn",
  "key20": "4cwQQ4EUjR4CDrkx3zt5Ntjx4F1pX6q2WU3ED9GABJ84Z4YVyN2ko9c1SVh1VNeSVFvmUfEG6ibQqobFk1FiWK2o",
  "key21": "2S8tNakjMaVEy3gxzLSS1sfDM1osGo8WvAvHxioMXdhLLcverp85NinZoCrhVsHFwR7h8JYBszmRZBew5xwhZPun",
  "key22": "3Mna7VCa7rwa4qmKWjC84LgouF3vvzVZcyrME57bo8fYwDCJUvibspGdUeRaV4UG7r9C5vH4H36bP3phVmkr2uxd",
  "key23": "4mFMz7Yt8G8m5X49gudpaF7ow9GRiECLq6LX3X1rPzTN8h3yaibByZwFfRiM1VcdSeAdW5dpT62ctr5nV34Q5tac",
  "key24": "4EZP8y5ZTj3wHX2pCjgNyUB1aHLa4xSCfaE2RLvb9StYuTYJNJKsU4sXbvxv81Y6v1TX28rk6bNByeGQ4ns5kDEu",
  "key25": "4Mz4GmkZrrWUftPv9PEcaKJr55yZAF2X1p4LFQW2L7gkANhkVz7govydMmVCd62Gv7Y2VidfR1eR79GSkeUaz7wx",
  "key26": "2jfeujjXazZR5wqXGu4hUVuKDATU75zSsqgU5pw5LUF8FyQkGgQrtJBYBcJ1kGvoUhfN9dtCnJpoqBr62yS66pRs",
  "key27": "5D9JUE2T4WsQ292USuNqoK4uAS8vN5WRpPU9rQoqmhP7h7iTgWtUKHtDXP6BQSukyShXLFMnMCZSSmFvaCRHe5gi",
  "key28": "4VYH8uvoRGFgFfHa8bNZrQpznNMCLXkAyRM6PebvXPhZzgc2UfZjcrMoCggPgeTdpjQsnEKGg9iZJcAnA2pYnMb6",
  "key29": "2yFe1bpsFgSUjyBAYPWcRqV7aJEYQdwR6cVLAxFGFSA3F4nyM9x4Bsom3k7279T1PtFnc9zqtqsuMy8LYRjJuyz4",
  "key30": "5MuwDhGBoeMZDYvzEVspcjcRFPVqvkbxM56rzaExczepUVyrDSEGHrFYo7nAbRU46pqTkgqFVtmv8cjSfdQv2CqK",
  "key31": "34mwhxNbQsH24jTJGaKbyYmD1w6u1PRC1HLgQ7Ev3sToZrLyrCsyFtSs7uP2qYNugLQXhpWafcxpcwFYVGtAcuDR",
  "key32": "hXHJWfvf77Ucqk8gVE5n3n3aoSgNfTkKUjFjZA2GkfhRZ6zqJCdTXU788UXVJWB1F7MoPo97hKY9HtRDg2QF4GV",
  "key33": "5k6zhEewGHSgrQLQsXLVsz3dDZpEc9v66uAux85R97RrS5PQ3yrM5YYcVC5rPjfoeDFFHSY8pXPDqdDqokn9dfHd",
  "key34": "5bs8eDPxX8nVxaRswHFZ2DUW4zpE7ftRfquc3bkLwCbUhdW34YqbtkzqtBqDEbSE9rWdz9NUxFsy7zm1kpi8VLV8",
  "key35": "2atQVFqVkisDP4yTrb5JizjmKAHh1kdBfeqJDjwPspspuzNM8srkQWSdbxSWzniakKiJ2wtKDjPrFsRMFar38PHb",
  "key36": "5UQ1fYFmBw4pWSj8KrCp1XXt6sbECYbzKhKfWfi6nq9jM2vyYRDrwwjX6KUFSi6nqewz92nkS1EYsd857qYgECn1",
  "key37": "2JPpUmKBfnRo5egrnh9qrBARvST3ZSpZHnd9khmW2Dfe7qacuK1FNi4P7Z3vDehCq55QkSph1cfLSa8Q2LL2W1At",
  "key38": "5eaaiC9C4bxQ3WafBBCs1Uja63VzCATYyzsvUUui1mx5NPMj9kVyEhmCmUXAh7psa6Q4PZgUzb3ZCSqtnLU9JSNW",
  "key39": "2dyhjjyq3Nj8jDJb5KRpPs6c5zc8croqZ69w1AsACMzCGJJ23TWb5jfCFepQD2JmcX4TGYCM5Sgvenb1ZcrmBa4k",
  "key40": "4QEoervYNEE9W36hfyP1rvuvkxTZKg2P1cXDwAYH2v2KattkPuB9nUup36iGdtrUNKrnLwz3hH2cQcK45XVcm1eF",
  "key41": "5kCUGowxo1KDsN1FbFHXJrWCVajxqsc8XhFVQokD48d1TVsd1zYFMzyrc2j5aiysQqbs8jtFaWP1GcoE9ePTjv2o",
  "key42": "3RRsi5iMf3jRd24YsEXzcaKfQGqgGQBBNTB8RL99sAgq5hduN5gVYRqo2K1QPpFpnQdwDSJXmyTVnLyKiYpGgaCy",
  "key43": "3E34ZdbZ1B63ghrCJqM8kBzNPtSTrpWxzgECiSQN8af9bBMHoF3KYfjnvBwwsuuU5z5KxFznJg4hhSVDHHHsbpgf",
  "key44": "3k5mnBocNQdDbFBdLAWUCWUVhvdXqtWT7X5EQVgiuHAJArArGcaapLaYzp5fXGuf9nB68XSvtzhJcog94b7YWPm5"
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
