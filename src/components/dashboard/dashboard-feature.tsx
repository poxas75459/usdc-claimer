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
    "3BHpYPRkjZfULkHU7mAPzRbirtHpYF4zbVQ9UqrramDErTdcxNxpagoHXQoYroo9X1rBqFx5ijr2cKrt22YNmGk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bgwb9BQV9Ksj4Ksf9j8dfkEH9EUoT5bKKNh3NYntdYCYMNQhBm8K8QXVM8gN3GUHtBPTPARsAsDTuifB2a5sidc",
  "key1": "4c8HrG4Wnf8DTX4pQmDTAXT1Xwhc8zRuBegg7Eyg2RsaiDxo5TfGRkh9PCVJJP6PexfwGyhQXsNUUW2SoWFA6XuU",
  "key2": "4kpbrJYN2kgzyz3zhtqo6487rqraNeuokk9NgbFuFydWVU8aUFysM2kaZMnaaKwLbiLtsX2dfvbYV1cF3Q1xjbdr",
  "key3": "v5PzKsybetT2VUZ8vPVBumwBtYdKkwxsdBNwj79XJQU3eo31hnFxgbAGrpx3VQw61DiUWbxAXeKJyFxWHJgpwYQ",
  "key4": "5Pdyznq4bBZBcU37dxUsjCNgZ17zwwzu3BJzx5V96FtBXnxT2kKPmbPr764KmYssd3mkTCBoEfmUmRb8fTvSPyzz",
  "key5": "5GTYd6dN6WsPm9KcCqXxNq3WhuB5KFgHcfnezXK717UMgdQ3c7GEyoncoHCtRdPoWNAxH6iaf2BRvaUdi9XfJzVC",
  "key6": "5N7S8uSXyQdkKUgi5m7Zf75kbmvd8J8nxbYhy6vUsXFnK7R9nAQLLbNfqiXS9QpRzcM8Ct4jR3qCxWn3ERWa15s1",
  "key7": "5hPpgxPCA1ZNgzP9VQyrBXacgWEnd3vECcr7EHSwMDFZp2trRz3hGcAU2RgAWqBt1i3GTXpbQfCpewEAQe9Ph7bS",
  "key8": "3FjTuPJrY6sHcpcjroWeN9Ws1UgdDMbPznuEF643VYcrZBT1JqyMZSTd3GTkfZisPTZRWc5Wx7iRU5fEj9oXmWyE",
  "key9": "4eRgGSbtfAdvi9LFFoU2qwA5cGc5vApa5xS8tHd1LCQZZR8cK6W4a2CvbdaTEpgtyVpEKXgF3vAv6DDoKr4MGUjD",
  "key10": "3zg8Xvd48aKsijrCj9tC9CDayJ4sQQ8R7MuKKyaZmNiAseXqxepurq4bgVtYJX3ckkCxpeAHaADFyMupjo1mHorM",
  "key11": "57KbsLJG6EaySyVRKjpqBB4vhTjc4tYH9E7RrVqkyimcQaGx19zrvshfDQ6cF24QDKkgX61CSvDWUqfVcNPqjPNz",
  "key12": "69UYJju8tPEY4L7JtEMKQBi6Q7TVXUJdB5vt3RHWPCug686qi2D99PMXL9u2Y8gCEvehKDCqgGbBjJTb8K5mmbx",
  "key13": "4RevPCJywZBwoJq6CTUQRWV92svCj1eLCV18NspV66ZwpXQNL42BBsHrn5F3jsRY9k1bew2td9YX9dpKeTfs6ky8",
  "key14": "49YVq5BHG2ydVY6pzFgmgzsSmzBQLndLaa8k3q2rHeK2UK8FNmhPxfFLU7TEDqPU1QpWzbNLUMwJrKYtEgkJDgef",
  "key15": "33SCWuG9CXBAQjuBqjMpATWRdYbX4Mis9S6XmpE9dzTB3cHzKRUFWZXnA1vui53ohuPwkwtdG7DTvd8q2aPf8JCf",
  "key16": "4sLoRF14s4jRYdZRqywH3Hg2kPA1HKu79vZzmw4txvF8VD9jCcmui2fWUVepUQ9iccn7D7McF1K5oxCKShoHkfhJ",
  "key17": "364inYXkhhD4n5TnuqbyAPxCyQfhpGtZQ8m9go2o7uybw4ad1jHLFtdqAXmrBcRV7yma1ULxHypdNiGmadXVzk37",
  "key18": "3x1EXyMxW8UaMqPzjbMBJhBD913vg3fRRUx3QZ1P7K7C9ytBUVFSxKjxy6xLruyap1RqyeV6VcPHR6Qwj2XgMVVz",
  "key19": "4DZ72S2LUUBm8VRGGgC51YQVYdoqjUFy3dayRnVVFRDnQHupRq6Gtp8H2w7TmfHejugpSXLqDxkX18iZ5KF3ThyQ",
  "key20": "5rCpxx72gvwRmr88gFd1UCb6Rw1Hwuy8q1cWcezNDRLLuDGEpPitjJU8ZWXnBD7BruaSiPe8yafgetcU26oSrmTG",
  "key21": "wb5voNe3mv9g6RxeQRaTNtQwRjQwMthnDsQMiL7ge6jgoKJUn84KiMTaWgn4UiRXcxkLFT9LuA9VmbCDPRAoy7Q",
  "key22": "3yegRA6qG661ikkWK7JvQAz3k1N37ppSXQQiTmmCLh7ZDfnkjNnA2x7knzP1C5bV7jG8JK8j2iAraLJV6pmjuQfV",
  "key23": "28AZSaG3w9cHuqMzNoRpm3KnZJESAduX6Mc2NKhM8WrXGCqQvxoyqHxfWWh7b88snsfeqPSEkjAjFFPt2Yi1PFTd",
  "key24": "23siVygDXGnFRbrVuiUns1Q5rTsRDFCk6ZgyDx1zL1eQMYKJWpGYPu4HRToo2gBWRXnngLb7e16jiH3fRjTG5LTh",
  "key25": "3RcAYJjrRZQsmBsNBXcKppoy8vySCbVw27u3YKd76Ba8we4fU5D7MyMgf9TY37u95n3A5faxfDQg8CPALdZWp6tU"
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
