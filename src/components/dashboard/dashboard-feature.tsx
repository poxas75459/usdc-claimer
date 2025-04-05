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
    "2ywP5CiH7vcjkARrhiqnZjXe6n6FEd78GDCM1rcesXhZMhbZ9USHX4GcoTVmtiCJU6wiXevmHwGRARyNnvFjfKrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pHpqXcMdHTZougnXoLkdoJwRZjcZxYdn81jGoJmWGLEYzo59zEqFio15pQQDax9gP6mcPmqoC7NqkVKbtUGQeZ",
  "key1": "3uobMNF8miAXAufzov2V27kN5g6vthCAroXfioJKvzXtXwQTkwojKrsFujFtCfYf2vusCCHttnwXTbtdo1auAsFW",
  "key2": "5DWP1LaTku8vLHdeERgcBsG3WR8i58WQu1EZUxvgTH1HBTL4aUvu1ZAzDaqEw3khYoEc7iPZZbayy3gwRdLLi1am",
  "key3": "2w79GP8CETDHNYkHjufrwVWyEKHuqCLQzp1m5YGC3w4V3mQYV5ZhT1B11GQ63V3gNTrvogozFuEtWKqzC2UEhkLJ",
  "key4": "L2D4929ksqKiMEgBpWNPfJpRwWCJeanKCZ2H8e1SJp47kMj4RZBjNKcdBsPMfnj8muT1yhLJo9WJFgLLNnnJzcx",
  "key5": "2VXs3AC9YSK726cDXLby3VZC5Lz5cwgZKmLWvZP6SaCg6efACs24KnuJGcjmVTzBYev8CE8Rodp7ALFXL4FaXuoC",
  "key6": "4vGEHwpRDbYCBJxvZU5pHMYW87VFxe5Pmu6qbFt8PFEMCMed1WfYPuQ45E4txUGneSm6f35n3LvkkZnv95fNKqLt",
  "key7": "4beKUGTEbXTZasY141xxha5FHKQF8eS2ueym5LQs1veYb6RyxLoP82hkrdhAq97EiPJ5YkK3QUQtaJ9YhpMCKNFv",
  "key8": "TwzTAYbrfbLBh8UtPxEi4pExXXLsjPrSwDWcrtaAa6JexUjHuYhqrP9AwRsqsQ2LYnRgMxUckxGwh9Y21Hx6HqE",
  "key9": "Rcrtbk1aVZS9gtPYV88c9GtwAz13zHz9dFpaSTFt3LLT7UAT2NKCLbsqb1M7Nv9MmRGdvvcpGuyYZydJRC1wu5p",
  "key10": "4681rGPbL2EW3vyMELMF5XqKsmu7wCJsS111SukGSy3iuccPmoZJmxCWpjsjGdzn12MvMmA29q5TWctzgfqxTELw",
  "key11": "hiM7daHscwaLWYPqCkhWkyZGFRZ2r8fukGgpDCVFZAoRwKUNY1wJkJAhjktKaneejmoLP8U2cMxxMksQV3J9zpW",
  "key12": "3aeUYCkdqBoqp2NQ798678tEHxKS3BurqqP9jWwbvXVoZi83tew87XQ7Fn6P38Bga7uNjMKxGsPLwpAxNWHGHokM",
  "key13": "5ZcRmBftMQpjWUa6jEpMFoKSZfUBDqKbwpHPTJiczS43w8ReCLrC6zZHQ4YLobhiS3kqeSwF6myoddxgozdqdvoa",
  "key14": "63q5FChvAF2XCs9pfaGknHjw35obQuhVQoKSydexcR5ijniBwGSWKiy9TPNFNv1k7u7Ccz5PRVyxK9Qd1fUpcHB9",
  "key15": "2LbGhdXzqfTFqtfVdKj8XQG7XKdw3iNvEwokqEyvxYUbagRfbw45uvPsKdFjXkMu9uPHFQXJ6WvxTV5xTqfydXsg",
  "key16": "3JMvnip7nu7M8cHaXg56x4oBgnP7KWCzVaJT6gj95eK7a4guiT9YwrjLWHjrVPcqAdP3JxjnqHQb8zrtAzfTfhEp",
  "key17": "4Vd8YGLQFYJkvQM7xRJCG7b9x4f77wAVoK991DXc2DFpUv5HyeeLwwg75KJ3rxjF9epL2v2neKSG6Wka1zkexGsb",
  "key18": "w3cqsfwZzRBeajcfqcu1J9ynJ5rUPwqwHRyo7cZhwBFuD5zxUwxis3wxhRvcSZT2TN5BC3w6XcwSeTFWEYAXLdb",
  "key19": "3P39xhQQfEbhzzpmagRM4TiimsyDLFnfav2yG1uJj1g3FaSYyNesJMEtRR3RLpmZ8FhAkqZmu4USYqZjckRaHkSS",
  "key20": "e8HWSEGiqhSNzsCRXHzyHxKietfkLE4CR8JzPXNy97iaxcLuAfFt4L6qnBgUgYRohqY3FhzsmXQmpLc8ubr429y",
  "key21": "3sQ2oc8u6XeMKRsqK2YznU1jL3g7hbMzRopZNATh3JqeHPZwimQd9UWjXSLWfin6qreaWE6TJ12dYfgpzLwUMkwB",
  "key22": "3zNdcJH3EvpQ6fNBq8qGybrzxseER1oDa2KCmAVh5oMNJZgL4VLhuB8gbdzCDfMky6c3s2rdgyMBCNut2QMdTAFJ",
  "key23": "1mnfryFH2YnBX2yBotA4UbnZrxh4fxNNDejQsM8T4i4xfQjqWkguMzJJpYUbKk963GEqLMMAusMKH8kUJgxfGYW",
  "key24": "3LW9yB5pQpeWhXtwBD9K6NAHumksRRboPigUKDG3hCny3aoKidPWebdhjgCHgPjqpavhQE74AW454ZsB7fB2ChBm"
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
