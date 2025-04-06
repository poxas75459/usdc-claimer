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
    "4E9XE37QJJWeGtYZzmBfJKy1UJ2z3MeRMSMkGufKfeatnnh3N7rAM1tKRWXXpog4eohLNbHEFac65qkELtNuBV57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gebjhigP8L2jDSp9Ymv4wAByL4DEm9bgNbTyN96Cs1VZZQfjAx1eKkxks1WgoT7YmpX8yeusxo5ookTgQxYLNz6",
  "key1": "HtDzUt1QWCDXRzi93hMdgfzrMdXRX6CLmPHuBi8qMqmkG2HGxHsqznaCxsrEtUnA8wLfdvsCbj1oW37eySm2LrU",
  "key2": "5QygQZPjVcGxkHqYZkHaM1iK4ok2Y5RApE6pcMSUpsPm2chxwfkyZBp3XXe5y21XhS17EHMsBEQWBT3Y7qM66gU4",
  "key3": "5wLF8p1SYS9MLBcEhxzCjJG3pQFBLiW6g8GWnTcBz2Yj8NSh9xXf36VGfmF8rYhi8259jL61utG6GCUU3VnGgEFG",
  "key4": "kbW2p4NCeki64ZJhizydQqcQaLcYukibGAXB1i5nuycsAs2E9EU2vBYH2JntNUatF3Q499ME3EntkrbpSHb3fBS",
  "key5": "5d3FdwmTYej9VhoKcACXQpRgXDWaCdfQ9Rcd7x4rmC7aS7CTjMBPFryESv8xcfLGcMVrCyYdDdN25FzsFTyrSHKH",
  "key6": "3tRRVvUj6b4VRSu6sK8FkwHyUQJwT7BoHjBby3RL4MLeGswxtVjTgnfBRxZ4L4z5hGbFpyGJwQGA1jfNWfv3ESiE",
  "key7": "4XorFDEWmf9FxQ4s3Dxk4LEGV6u3bM2tcnKLmoFYkBaj7NfkPUS8pqBCzwpeNbwWBzLSSzfDhg3VZ3XZyhmGH15Q",
  "key8": "25yPqnoJqiPmjLNHT2x3ZdpLeXcYcmoMBqwmpMwbWzj1yNgPCjudsYjtLjVrg6UxsYPVVFuX9sW6qq1XudacE69R",
  "key9": "4f5x8qd6hf8LfT45Pxhwb6GEbm2q7sQ6KcBv1AHw9FkNCrVZpwLejY8Lgkaf9P3KtieYNmwrn19ACmRqepTd7AF2",
  "key10": "3iAa2tDfxXUCPDod57ZNR2vKHTTXvT4sjZBo4B7ndUQHfWduHYbNZgRssrdg8vDpmfgZnH2oYUbDs84MEPne5jmu",
  "key11": "4bLUai2dVkNMKeZAtVhPUDpDTtp5bVopuW5pfdMghMjawQUQwF46XSwwiBmjAN7SqJ34K96TFdj4QKtRVy91D6Wu",
  "key12": "h8ouxq9uX9PcSew5EMUJoK8nvSVxMjfYQTcanNAMZQQrMoTZY633sSRRa1MNNf5tYRs5wkMG62eXrrLQjYYruGP",
  "key13": "5Dt3qUpEEGXfDUkYxxjvBjxjqFpiENHbCp4Jzd5DN5J6WezPAvYTcia5ewRwTPPoNMVWs3rhN2qDubFLFoaHeGWW",
  "key14": "qbyQyHdvDzR1iHFVdES4TDBVJ1Q7Ek3Ho7QTRouk8CPnn4yu1Cdq5E48Ysat9aELpyQrn35xSd2dBquivPQ7A5N",
  "key15": "2resjMDwDCUpGh6Z4KHUm1MH62mzbGAzLKocLShqdeYaC1dF18rpefTgMYd7PUdt1zvSwE19T9N4xs7nci3hCJSa",
  "key16": "o2vGv8krvrq5oNJ95wJKc9s7o4W6m4A5dwjsnbpYjecBJETLd1nLRLMiVGoMUUJrxsVPMRMHfxRnvhEFDH5z3VE",
  "key17": "4P633juyrbRJ1p35SsLtkmQvHVQGCjDAmBAo1kRttfGGuLbzxRp6ihW2yWmmCkRrcyVh9irGpuXhULiZWVB4pERj",
  "key18": "5B27w6JiKVsiBfwcNfmG52CKRvk5e1ZKo49c3LK8MnYfzk4T29ZoHJWSHn8RHXjCeJNXPMcfbx7ys5PtkfNpuZnN",
  "key19": "4agCVwT6e6r1vL7KQNuev6ChBaoKx5StVFD9PWEUTDNhYfwvTLPi23C82o6BrDvp1nZSg4MjjjVNapQBukA21rqP",
  "key20": "3LKAfu6SeekkRKLZYnJAyCy7zJahomsxPqnPT2iATuAn5VcNaXYkhgUExbyhcweDk2SaPJGKWz5kq2YiHsaPP1Y3",
  "key21": "5HGQM5uFBWHBvARDXosWmvhP8PseRx9pA3cChv1eETTVZerx5RXzAykthcsg66pXhANHnaCYyChVKhNYxg4y4sCZ",
  "key22": "pAd4fNizu4Qka6gpTpKuhsRwB3hEooF2xWBPLbVHi5PFdv9otcfA7vkitT8YvroWaHChBrjdq8kseumehvNfsod",
  "key23": "3qWQeKji95uPWRtRVh4HYCUVAe26UQkfbLMd9wLqLTqtHdWMUDSE8VHKo4TufYdhZZGLWzf6fMcdSdzRmuW14k7N",
  "key24": "4tJpSdrMiRPn8roz8YSArjjRP9J1A6CnLq6wV3FaKX6p6xBDXCUhLaU86r57TFRMTFtneC1sJN1X9Df8F5MAQFwz",
  "key25": "5X9FamwypYGAykeFP4tAkXsCsHcwtWfiifT7h7sBJ7DKhuN1dwoJqWSVfs3nS9wSQybAmKKbRdmzGf7Vsx9wUhx6",
  "key26": "3ZXPARjQSF4e9CnVdeR7YF1op2HaHWRNcysp7WYjZfkrsujE6jVVSA9gvzmi4XHoqEGfQAANdaxyyUwGbCus5UXr",
  "key27": "3m2SNjEF1yrVPjndxuyneCLhFpNzFh13siWcHap7ihnjdbNbyqHq3o1TkhWrsLAYLU772tVEA5aH4m3ZgKPb1Kkr",
  "key28": "5VCatefGw5Jxe43sRiJS3e7N7e5dHLT6fLoabV2SbFjBQ6ECwwk2w66MvqEA6HwjKpXqAKSqHEU4weBKa12V51Bi",
  "key29": "5K7kYe4TeVkY2m6PxWpAwUEHsNucmFHPhuG6ZZL3iuss8fNyjb2vijViG3CpBvm63GcVpCgyVrvTvY9XyqDmDLhU",
  "key30": "3EhdDovdvUP3QtPsCUgUD4MZTLBCeBqzqXkhFXKxBA5LLY2PxRqDSTA4UpUQUxRifvs5keU8btY8GpmMM3inNEDX",
  "key31": "4ifeXNK9PjGVfJEou6wCuT7HQS89MXnom26TLazmyYH86qo4jLjvjDqFkEqxrsAhMn31RehK97xw9DE6J7BV8wTm",
  "key32": "3Dw8TkRG1dV9NpUdTzXUFdP2oEDCC5suC6GTC3LKYSMn9QaLyW3RKXMjePEg7cMGNM326Zk9WPQaqWYc6X5AEzGD",
  "key33": "2crJ6aqQguVRzzF9xNq4TrNfsBg7G7jr17MEoCbnBesHGybH27E3fi25GvYJof3R5VxTFwqQHnbegHjprTRYSs2G"
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
