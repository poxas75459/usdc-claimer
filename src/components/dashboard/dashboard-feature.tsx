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
    "4PvSQj2KL2HKDG9paBAdZv8fbiwWadDqfgJKksbzDMTK62TtoFh2CARpwNSanCAL4jQnE5ahVnCumTk58458hnCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxTBvVjfPDsUo9vrR8PgrPCYzvhiwC2AzkJidSM5N4oWc66jCLDXhfxaNu5RAAxNtE3x6aLM3e5y8WK4GWhjthv",
  "key1": "5ki9MV2qf6KAkFeRXToFwFqCNNwGdPbSEf87zzqcNoRpPjq4p4sm3sQMaXDemnNKFXpSgfTg3yXerh97nKty5hzj",
  "key2": "2V6CXewGX6eKtFN5q8GDR9UpfqX3PSLNYm6bpuN8UMukfWS1a7Nw3MfBEHcXqyUx4PTjhKusFJkgMvZP3kFSnVCY",
  "key3": "ndHRE1HSEfFrednqLohNC8E1NgudQdsBprYeBcuFAHn65u79vkNhpBoPhDxe7cPtmRMWJVCgNzRMrbPstemxgJ3",
  "key4": "2rSCEQuTqCiPE3EV89EZMLDe5XYNYGAr4wmtc3FsULKnUvyWHU5Y5UzuwJqreCgDcSwPpbG1wiK6aCMUMds4N9tt",
  "key5": "3N6o3J27kwovvKnTW9upY4nascGFxceqbqVGhrCxvG1EjJeroTwLL3SvHzrbJY89enQ5Cdm8FFJB4Mj6rB9wTfFu",
  "key6": "2sNtqLgt2geJ5CPrYo3g5SYqLPf1vE16twi2oRazm5fwVm2Vne8hvWiuo1eBbZqaS5zJ5Ccdm1yfKrXhYYBy1V4g",
  "key7": "2GRqxrtk6bS8NpbUx6YboDqYifBpVH5YXtkZ6MJsLA3xnzyw9knisKojRwdoUJFuqQQdUZSVBoS26rvbj7Ct163T",
  "key8": "3EyXZECMSLTHACsZmsiWYsXXYcQrvyTJjNTcyQebNKhXT4WKqjuEk1nr54H8Khy411LKZoJN6bWv85jA6hqYvzN5",
  "key9": "yRv6ZYpwpxxnR9JF34BcJRQPU3fXurjwodu9ZTBRJLfXcPYLG1MAUmd5bDMQEvaGm6q8uA3fK6JUUXQsKBeUcdE",
  "key10": "5s91TZx9NwNYzNL6bdfo1QtNqgvogyx1GupoVHRVT1HUHtj56UFoo3JshVsbn2nTgbkrhSNRheQRzGUsJTbioHAB",
  "key11": "ZiRTZJVyhk6UbTe8V8SEzWzK9a9Gm4Sq8ER5zMfPu4firyE2mY3Fj9rTAnCdtmbAnKf4yJNAmx5asiin62uckww",
  "key12": "5kL56PZWGDBDrtYjWyZpU9JFxit9B8B1o6HmBPMW9WpaLV64y9ajeh2YvpBFXV46GeeUdDfQEhR49E421dhuYmeW",
  "key13": "3HErRu1Yn2Lv4dJuZKVCVUo7q9ikNGDQUSHRE8C8tDshDVrqevuomoXiMviVWVmk969iVtUhJqn2TBZUTnuvLRqC",
  "key14": "652WMHWkkXWoLoRK2mEDw9MBvBQGRRyLHCTFg5ky8ujdB4VTAd7ioQwiNMJksxAYydFoqLq9JKDCK8Qu43S2Nyvq",
  "key15": "2HcqC52GrGTibHikjUGxt2nnJPGAo5XcDvGGfjojky9toNrH4tBchgsrfDHemWemr71jQPsiYuDFi2qeL4WYfBct",
  "key16": "4T9EbuYfJCZ1u2gPWtQje6tmUgZHFuf9CzqaKSkLJQoARKoZBHUTNEgswPHBhg5BbDYQaXNAwzxc5EXjHR6dUDG4",
  "key17": "2QCZ6wbPFSS2gwXB6FxJUq3vpjszpNAZgsXUwkvj7BkDSmezF12AAsSukVCDRHAMRc1gjdkY9exjZX1AasQ3MKWd",
  "key18": "3srAygJf8531EtvbyJJFCpKfU8HUdSqyR4XEMiydudwYJNq5fNhGKkZm18ewKvybKx1EtCULATVskApmHMFYvWhc",
  "key19": "5fHy6nFdk1WVvkVtD8E1p3Ey8sGgfdRQubvtAFwLyfddFSVp6BGUG1YLKzeqwTcH2daXHnsqbCJXikuMDBvTWETK",
  "key20": "3AfE77p1hrmoFvqGcmWzxVGGoYPXVWxz31HX62NPvSVADtMWwgvmcxY3N5jjTAZtN1ZGtbNQThK4QGMa9DSmx3ZQ",
  "key21": "5VduucNL3NDMczUGVQD7GW7TnXfaRvYRmAJx4dngioM2H4pKL8YCDgTYn46zwvZfKS1Euuq7UuZpJ8HuGUufRN85",
  "key22": "4bU1Lgtq1xPE5QaWJQdQfQT2TiUSX1EWUKgAJefRodo5mKKpfEE9QAbKoGRPa5Q3V67gFtWPLvxo4XqALWWNf4Hz",
  "key23": "3JbE7r5nPuuXCxEZBEXeMKpKQWVmbbBEhK7mVebbFrDRdBpNNfgwx4e9Pr7W45Bpay35iAaCcVv3LSoRa7JuhdDh",
  "key24": "53crokL8h4CVaK46ZZr9n29bD82kP3jEjTgc1nJRuUABRowfMNEYgiLEDpkN2h9soU3hPyuBgNgdue7B8BRjqRi7",
  "key25": "34xch6Fmd1WnQXTtXufXvkWnrEQmLBiqvyD16NQ1d3JaogE6zbLTU3ELnnzoVBJ6wPTTV6Xs5YxG4viuSCmrtugU",
  "key26": "4BLkf7d1K8oe3LmaHhYTCmqGSt3w1JzirrPFvftQq2qbuWsSKSKgwsZ7p6UGgyn7CrXCs397C8C3JVEuqyGH9eeU",
  "key27": "26n8tUhrNGTMmqvfdDyZpUjNh7u1yxgxnf7VdyJjHMgHHhAf5v5Uksbnem2BWse4otKWQ2ysr51h1B7CNWWVnNzi"
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
