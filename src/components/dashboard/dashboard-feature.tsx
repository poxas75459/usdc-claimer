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
    "4shhna8zGYArcjE1KVa5DVTzXihBHcJtDJaKAuARPkK5KX6GJ2wriDuVXQyg3rjq366yCgpeCe11jBF8BVtj4Miw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eBYpfY5nraAoLVswXthVe6ekGZygsHopB6hFKL3EsSJJWF1T8v6EhsLiRRQUbvDbdm2zZDEzS3My6M5ntN29Cmj",
  "key1": "froGkopLenFxz8SnEZP9s3HmdcKUD28RNepAQJYozpUeQN69VtDPCoNLBcJddy7DRLo4ySkcJwsh86XCoHzKtPQ",
  "key2": "3Wg2TKH7nnz3pvFcm6C4sLkY1Pki4s8dhcJ9SkwbYYaeu7TC38dcbAp4ZJe4L7aaiXpDxknNpzKi18HFQz3m1oQb",
  "key3": "55Hy3AKVshhwV2CDu4oSW9iKb2TJZjPYZFMbFe9Homj6zrXQk7WneS9uP7DeepF5aUV6rawDumnw45kK4FaJQX71",
  "key4": "ir32cxvLX7tixWh44E76G3UsFarATEQc89fHPG1EA5JFBLAWrGPeDffoW6Qqg1Fnz7cz4nyr6RxCYvWhWDzrGnC",
  "key5": "3z3qgHzckNkcFLF1iZ1mw9fVY3VDGoWKyTNDyXLf6PQ2kUmb6shiBdQ5cakdVWharFLr3GgRkRg6FpVrrUKU3oL6",
  "key6": "54rMJofZkcnUHr9mi2eKUQAmuJhk9t7xhm6JqVdj6VcofRKpzFoSzJTBDoq77jPbx3pX2BfeS6GF2k86uDkX3KW",
  "key7": "3UACx6ptfPE9jwSrLAyAzaqGLBXz856Nxx5gZZ9AVrS5CVpst9Dgg8EavzTdBvtZzguQHB3c4gcsXGXVWZi2ep39",
  "key8": "4CgRs6zHTBub3rSH8Pt1vNvKU5Sv7ByM24nuyy1FBsa3f2fRxCfWZ77rtrqNE8ZRQfoydiwz3VSFP1Se1k7j72V5",
  "key9": "2gR4HLTUHQxs9mAJyPeu4WkoZ6ct8nq3H99P7o2DcDYKdnkqdA1xGg8D7rLXMo5SFwahp4L5o7uxTGWRbk2WvyAb",
  "key10": "W86E2pUSPjTW19wBEUMrkGNiX3K21xVYNBWHQ5QCLiuaNY5MYRovgtpvHHgUUXsiGhpLjpm3AQpuUC5W36VHaoT",
  "key11": "5sA3qds5T71YeepwTLUusQHrGqiD6dhjfY4DzB7MveySa3XkeVUFvroRgE6m9NRmLCAFBwiB6TmENsJZ1v8pzEp7",
  "key12": "5cW72GjLbCJ6wwTfwB4pH4Lc1yys7czesmYwBirhR2amiaJ1uNPeVinKkHNSksxSxSaKcsk7VcYNvRK8wXvYme6q",
  "key13": "3zJxNC1QeBnyWRQSGt8ATX9Fuw9QVXEABre2NDMwwC1MZpNMDKjopM8GRn45DcZdNyCSFA3z5jbDkUwqMuVH3bjv",
  "key14": "53nnxsULTHNrNovSmZ9ZB9W3yUG4HrUewWzxzPAdfaNfth3MAnHt6ypXcPDc4r4mNrXa5NSKp2bvJ2cGbfZNBK65",
  "key15": "34RNBqAXo1HhN6iKE7AsQsPmEcW9tdssrU1sqfsudHPtmhABPRLDN3jtQQeXBjg2n6kWJ9rEVb77QBUJkfSFnb9",
  "key16": "4PeDFUsasDDMgFawuQwDsLeogs15YfQQmkCMbf5RAFRGyDaM7s4VB2AUtJhxY4vAre9GdwH82zQu2uwE6BHbymor",
  "key17": "232wXaBzYoFPc1KDat9myfMmagdTFoV6yYzFW1iZwVyo8CWM4a8kYSw5VUgK9scJxJCJtAFTAq95i5UGRT5jCVim",
  "key18": "5NjvivA47TwZJrcNsKFKQHtHXG4nGAeKaPgzDv3L8ZXp9HH1DojAfsMpTxWQHWU9aFZJ6jiQuRB51m89Asvd79oa",
  "key19": "2oqWaNfpiBdC9AV7yNCGajgJkxGVfefDvXbh7RdM4y4YkGf9JpLqtL4CnSPvV722PPBgDHAWA2GcVSctUfx9jAVs",
  "key20": "2fHrjgQqsMn3aRTnzeYFS4AsKzBnL2xxVc5EM5q9d5okX6vmoSmDbLLNwNwtr35BXVCZqcyf4gcm4uD9bvnAsEp7",
  "key21": "4GHQXmdG7odwMB8PaihQjPA5iqwD78m6GHRCcXtRoJj2zZZzbps7SKUH5iDzkVisUXuMGyDW1ySVdArPBBaANZ9d",
  "key22": "5XFsvvMrSiapXJjVpvwsYnz6YveB7A84FnBtcLUZgu8qsAdmYCxSkoLcS1LQGKwkgYtWJcm5VpMdm2XEJ4B4RDCe",
  "key23": "rpNij6n4HFiZLWijwhGrUoC34v3nyuYKpKjrE4niYGCxPRAv5fCUndHt1eiShPbrNaujzHN5tsD6W1hy5RTziHH",
  "key24": "5HGJfm9kQv5iRTLKS7SYcq2fEtqN73q9jXUjmJcRZXS1XtDRL3X2t3EoCU8B3MXg3TNFAaNMdaH1cjMLQvTabK9x",
  "key25": "5nyYjXKRYzbLk5TG26PchNedgypuLdx6ZbJofUpZ5T657VY25fcvGvdQVH52QnyNeKNCJRM32QLBhqqFg5Ahj5v6",
  "key26": "2cZkozKKG7daL142baW7BVFfN8fr7K6VaAPuz2725ZGMtKWGMEUHSrWHT8NEZ48ak2xeFw7uCNKwAYRWEeHsqCRa",
  "key27": "S61FThWP4G5jff6axxnoQQBDneSxsJD6yU9yFAabTSbwxj7THCnfcmhikY9LwsJ5osSy5mykyFqnnzv2MJPMxcc",
  "key28": "4h4cNE1hDpGyCBLkKRXA7DsXKQKKYz1MfdPQgj8KX5EL6L6NtHLg7VGe4LLJR5GEBqduS7Uc9xwZiCqCTdvi3PDu",
  "key29": "24G6vCyVPRE5ShTWNuYFK3vdbjXmoMmS36cgtHbgQjAHjyrgxjUwrWGBwMGWD5MT7y555sMBJkwUvPGHNF2x9q4D",
  "key30": "9GdYtYy9bXvLBG6EeXLcVUVq73huoXVxs4HtCU1NPSsmt5JSGvibFYrkkuJ5dLBe7gDikCddHG1xgBhZCqASKGj",
  "key31": "3BWnPm8qaZwgPNwZYxgn9ENnR55PaQMFkEXFcHYMZsSuTm1j54RStWzMQnLxi5y8qb3ytHQNncUkVY1bYFeZ2i2W",
  "key32": "5AFZgaKSt2hDwEHbG6ZZG4nDSYa8EpXM9YUonuPK9capfDpZNKnzRG9GHkqTAQKG9LvRggQFcWbujKSvhZJVpTVs"
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
