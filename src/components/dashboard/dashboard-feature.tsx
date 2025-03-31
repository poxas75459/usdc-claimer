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
    "54JAMKFzz2rkwLxLUNA7KEtYSNzgvmZ8ywXfmMWqDgMdzhCJynFQXk8Q5vyaHKqPT261Jw1HahgDy71snEJkUmNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cra95wUCC9FZsx89eeSsAPAdfjNdLkTcrphs4jstt99SxJg7fffMyxaHcez2DDjDRfTbAww2UyAYH3zfGeZmUea",
  "key1": "3cp7bzH5wgpFhmrDfW3XA3DmJpPC9XNjJDkPASMBJ3eSnjmBbnRRpkWz8yMGUBUC7sp4Fy1FcS9eL9BvdoL5unhZ",
  "key2": "3Uuq9dygJfYHN3PLWhKJyjmtT2c7Qik1RsL5QEYxkm3DEZiZ4r6D5KKGKMJ6tT8nWNNhqknPeGyZfVMCqM7bgsLa",
  "key3": "2ynWoyKaNNh5hEKnGy3bT5A2k7kWZDzVTVUrPQucDVAqjm6NpcS3FDEiCEmRtJcsmvmqFomADcvd9CCvjzVaKVEu",
  "key4": "49puxWNLbPEKf3oWVowyheCCAANqNsAUXfUPMjnqrk5CXVFmY8hX5nPQnHc6xLadbgci6EBjU25ADfacyoMnEJue",
  "key5": "49TQDSsCNHopoqhmvmtAokndLfbytpCpNuYv2k9BrraoyLJVS9i8pgad6eaWEmWo4iHThJgEgfVKYzdHtNT9xeig",
  "key6": "5Tf4nEWngGHS282Dtys4Kjysj7wHUgerbMhXDtEcrwaQf9TgsSAuPVDbgwJfJWYye6fS4K9WieoPSTdP2Qp1mSQJ",
  "key7": "UJ1vLxCWnWpuWVA5uhvLeW3AHL426bdn4wSRyv8hepffsqxeRp4kkG7vKM2fJNNfqmvKNcCN9yK98edMpi1p2aL",
  "key8": "2qQ3ZoXmtNxnpMpJZu9qECDf9tZFebZ5XzA9guH3X6zzfSFSNA5rV3mSAf5rrvX3ZYck59CwgLDHd4f9MDHuMRd4",
  "key9": "2WtST6aBY8kagJd9PbdASHL8gppgAa7nhPi7wFSJTGuuBhQ4SUvHDD4jvyxeYsLPws8VU3cpXZxfRhBbgJSEFiZy",
  "key10": "4chpBVzHGn4TGEUHMnQgM7bjyUJ93UXA2AxQFPnzbSghG6TkRdLMtfBKVN5jNVqcCuHehVg5GWPHTEmekgydUY1u",
  "key11": "5kiqL5fbg8T8zPU3GjV6JPe3wwdxp4haggRaYWYPQ13DXeqMsaY2wTj8WhXqpmV1J55cs8oHDi5LmaAic5K4qEkD",
  "key12": "4ZH9QoHhL6LXezxYpZ2PHSmLvpM4V3xEHu8GtCGzwinYoR46Yey614XYj2QaXFYBMFfUmnZkKDmLyEzenxb5SMH3",
  "key13": "4sCGRM262UKihkx27cRFo4VJVZNTHezcnun2X9p6jSesmt1dQsNkWdMbvXgxGRe7iry94EmgKnPYJJwgztaCx1JC",
  "key14": "4e2QNXMUVmBZAXxBtQb91Dzbb5wpwFLGKYr5xEyKpYuYJMLuJPP2SdKXbDxuXirAeivsFrjKQ4LxhRsR2Fm3hHZK",
  "key15": "26Yf39RdGAkp1mWLp4dRujrPwYAPcDUj75jfifhpHJEHz4truRzgD9HkPoWYA9CHxDDCf99FRRb1DEb2GA42CY1d",
  "key16": "3TY9CM9ydQdC3D7FVohcg6HAXazNUp4UnmCnkg8GuUGTwduediVyFD4XfPRJAYTfGeJNqqmqSqnCD28BsLezrBhq",
  "key17": "462Fq2541SBXUVLT9pTxd2YyKNWaFKo4XRRoSKgB49BfioZbhVwz3jaLqTbvpk31qmGWhosczBL2LfyT3sy5vqgF",
  "key18": "4qeqvjVL8VV1jqQx2P5E29iTC5vLeQZtMsLMuKJ2DExPrHNz7R1sywnPN8TGvczfE9eff9Zrq7hYAArry1D41JGg",
  "key19": "HMcSV5vxNbGtwxuvNpXPmPvgGoLTjyN9mWb1oLb5nKPQLjQBf6GvqxhDGpaHmbLWga3iUMp1kG391UxFHrnQivN",
  "key20": "4SUQB8KrCRsNGN3nCRvFUGwQyYKi5nzEXka5gAS2eUNVXWy4Fg1nqfuiLrfNzwxbcrRdUQvgdqHqAUKgmrgE5dS6",
  "key21": "3NYMzpwCZDnT9iZfFTM3KWhQSySciXhmrugx5GdCKBARtizjQzbQtkE5psb5tCzypYdET1HNdFWiSF3nZToeB5fQ",
  "key22": "4Zn4aYnp23A8xqVZP6fnBdietW9rgevK3TsqVhpxofJ14Sbb4dPm2jsnqSkcZpFm8rEf3zoXMrsKdUUjNai1p8FD",
  "key23": "3d4uchAAYXo2D6LGcTJBAUbsu3BPsVCANdooQERBDh9oZbD5LtjcVmoo7CDpsghREruwHwU6uvTtHCa3keSbRaVP",
  "key24": "3SeW1dB7x7UcGBPZsUqbPeaW8L7cJhtKrpPvmmybc1go4a2UiX7jYJbKvdcLUENSHCY5AtSLSSUoLtRPfFsoa3ir",
  "key25": "56uzUCFHaN5vjFYYXkCLch3mLxQRy2FxDo8bMzG46hpkD8tCKDyKT65ErHefAzxTsF617dFs6GYHsMvKSNo6ZVxY",
  "key26": "4GhvPJEdqndjNSNgcreXm2yfvSu7PfRMUkxBi4sxXruHJbccbvamgpsCCoqxhJeZnsS9KSuUWQLKv1JfBZ117hcG",
  "key27": "Ybzpr3LGxwmWABavGeEEUUMXMCQZJQNbYLS4ow3BkRbLx2R46oPAZDPbtZLicCDQy9LJGTmmSQjEdHjVei79L17",
  "key28": "5EdHGVkNTJqeVUrAnEvy758DFg4DjFbpV6SidPMKkBQt9AMURDuUL957iUrPjvGmfwqmZ3d5x8p6vgPNMJ5dJWYx",
  "key29": "4rCv2ameGmvA64asY8a3DQqFkt7xeaWx9TWe9YwNLSqP2BmTboWq9hmdd63JAzWJ6GsinhVPH1Ks9eXoBB7tbcXi",
  "key30": "tvu54j2X9nkXrXzyhjtAbAiH9q9vCXRbt3gGeYxLtc4Lj2KgWLZejhh3m5bntzm7VstDfamhRFppTA2g5eUmLq4",
  "key31": "4HwRDGJWHmNVWbsDnrQKkMGcgb1aEDnJ9ZyE41UmHc8gxZDw6KA3QGtZ1Re8FNT5b1No1n1omZDBBnGWLA9WvgAa"
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
