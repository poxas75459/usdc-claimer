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
    "34xnDN42k31hiqDVevgP1qDdmegmHKsh8cNFC6vfskCMYFydQqCdW1UggoqK4PjdW5XPhA68bp5xobspnEKho3tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e7ZwZrHJMHP4KfVoLTTskrXsWo1MVMvJoUmh2SPP2xJHRPfaiu3wM9izw7a1CRzpvN5jz7homR7L7csLKHUq1fX",
  "key1": "4bQA1Ctg7dmih87PYUvn3MC71HqWXarnGq7jJw7tz3sa9DYVEXRaoqrhRqe5duiF2PxvQoiaubtfbn5izcJ4FEtF",
  "key2": "s96J15S9Axy48RsksNqGwdQHDy1js814RVrSYhqAm62jBKXpD76WaAvrrudDVrbTjqDougAnjbJtv7DxDwG92XB",
  "key3": "3hUfj4sUgJWjFPkDei93AgEEFLLjhL8AtxWerzCiLHPTi3MHnbgvQdvVMQZGg75P6cFoYvrZVspnBnRvmX7UBLhU",
  "key4": "2V4uwvyaXqP86FQDk2hTNkprwukjHsBsaVHC8frw5exCVqjuDFmSsF37doSNSXDBdw2WRYomTdMH6tUoYbC2LzLG",
  "key5": "2JMydsWuKQeq357GsC9F2JRJTbqpyWZuQaegpWDM9gGn71QGArDeLdr5dxgMbtS87X391uLhgP4sECtvvVqJE3YT",
  "key6": "5uUB9kCfncCF7MYMZQf5nZuY7Eo4pgiY22N9YXFGWbKQYYFM7tgVup8UMSHLRgqUpCWuaoU24SuFyZBhwQhMbKWf",
  "key7": "3n1UfaBZYJAzLpMTUrGDY36QM412ttTirtyjd4qccxK4QNQ5hVk5BQ5SfDzyV8yNTTz8A1kJAfLBPJH9YD9kmapb",
  "key8": "4TTmazz7aTMZjMLMKao6GLh2PNgu4zBSRZy9PfeWgxtH1WUGcAR8Jrxa2uQ2xcs6xFCkNp66cNabGM7rye2d8ShX",
  "key9": "5mvRV8YTdNqmhs3RxPBmmaypxMUQRXbMbgrVUn5mG7fXnVg38sbXyx9XW1HxcjfMJgTWrQnjhsUFKPzQkGReHkGk",
  "key10": "2poMaTWKFBPPzuYEZSBcqc1cipF2jQ9Lh9zEQQujkKTcHk8c89gYi8pqxb42xhCtu2t8TUkpgajmRQ9iomxWBVbq",
  "key11": "3MgKT5eVGiddtbG5nwtXdXGJpvPDpuKsEfLnZDy5DqdWGvCeBU8sgRASdigDELa2DkwBmRUDJrZUEagF5mXmN8y6",
  "key12": "5BKsMADQy9cEumq82xHMHdgiVzbgezVdbUDGUwJszck9crpUEtXXkN3EXbMXRDJbyYPofK5ykXjnKe4yskyK7QFA",
  "key13": "7fb75o76ijNXJ8tdESEPRENUvWzp58MWRrA1Lx2v5zwToX5Er7pGc3bpFm8ok26byGycoxWwxycmrcHasRoMjaB",
  "key14": "2b7FTmTbvkzVa4wyUDvYWza4F2TW2HP7w4rTnNAMKFDq1H5UDSo9aZGm41SmMtQzAsKHtzEZQs7HFKdSt96KBkwf",
  "key15": "3PvCzL22YabcH86VBRo4z7iuAs9vQ7kM3wAp4gtXZCmXKCq4EBFVDL5TFPbHq1j2AeT8EZZf4CpL45StZVFYUZ47",
  "key16": "2Pwy9zGo8roHmWBDjwq8b1J7Z58JAjyE9NGuFUvqe2BveiQz1g7vMqP988M5rmRfXUbBu8k3gpAnVDMHnFnW88Uq",
  "key17": "4AGJAxxmsG72FUraSfmPVkZkYKA3eUT1UkygrjMX4px4X9AWXnXr53uz4V5jtGecjA3gKjDoHj6Eb6myUVYCKKbc",
  "key18": "5wRh9M1f6Rs3XJKrkCVsxZnvhS5gvNYTaFiVh9v32SiYtrmpgFd9g3Z5eHk4Mtdt27Trrn5s1zUTea2FP6o93tf4",
  "key19": "JoikvAiUTzrcN6cqgVxt48Kb5CpyMyiNpmnKqDgoQ1uviooGBHw4kuUBt7jKu79AQoAkDqy2BzciTUApVrTrSWG",
  "key20": "42iDxMa8R7jTvQUQwi8QCKqk9xmBksP82pZs5w48KmFonVLEzRJUyDufGLS3fJp1QE6psrp7FJdA1kxQLCav8t1G",
  "key21": "4mpTRnmNLz4qgpMuDVnvW8pzbV178M8vJhA4weVH1gVsyvNaDKyoTYF3yQR21w26iLNNiU44F1Hj8VcuRJ1RTdW7",
  "key22": "Wt7aVEibtJVdcGp71ni6bWbA8aGB8v2RgZao19DRKHcQB3dNiBFt7tsxa3r7N4W2oqr8b6kAnSP47XwjCi8Jzq5",
  "key23": "2KJmeDt9TpJjAV4LqVTvZkPPf5SSeLjfFVHYVs95vvwkrHJnDf9D6X1UJVVs3fkr7uHFigFX9Vkyqoc5N2NRHMXQ",
  "key24": "4RY92x95hW3BKdhHHeYm6hfaJFXWbkgcNj2cdY5QRNuYH4tn1FbNisu1DqNb5MajsYCiN6Xkeg2mTBrQ1deNQuck",
  "key25": "4HbUVN5zyM6Qmb4q9vgYGsYi4wiSweP2RfqXJm3spHCK3AHmUPpRcfgwc6hLXFv3DtY1yHQRsVUhN7v5PCo9XtFQ",
  "key26": "W4BHn2UpPNpeCQwuqfoyxwTZ36an13vU6L2tnTniKPg8kMFG3ZBWvYZpS7FN3BV1E46xjM6H3NoqSPsCkrdrwVR",
  "key27": "2crBGT4EiwSAuFHhMpwV3Vh6bRSz9ywHhZrSxJCBmUH2pTwievAxd7Sz3py2AGc9g7aZ6qMfi9oiA3rn4ZTVNyyq",
  "key28": "3eAWphH5GViFnEMe4gNdQK6ucFm4MsRMfQ4eedKiwNqd3ANKXoqVd5Lou9jNVQU93K6kTxmaA9G8L5nyLCMkKDk7",
  "key29": "2w68n9eBnAaJVKzuT6NZCHfAfvjEbKBVuuasnneEWco3rJ5SN36qGQ27FtrdytPXdmota4ossxaMEpPD1KRhnzk6",
  "key30": "2ecoRa7SVwvu6LxXq1DQDjLiZGvp1vo1DGqg4oyd3TK9zkcz7eTSC2Tgwjg5NHqvzVhXqmJqkbvX6N1Wd9gdRhvX",
  "key31": "2rvkenKxnSLdHsg9kNpwtxZCRDNSpogZ7KjFC2H3CimuoyzMSjQGNuvsCBxnvgtUaLkAtAdb2E8SFsY5YV3jAAAP"
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
