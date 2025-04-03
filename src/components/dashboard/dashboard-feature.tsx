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
    "HJbRf88zj1EB7CSHse2GTAB7g7XwGhRVfricFMfiWU4xFtz6Fzre8b6FDTYo1CbN1cLnbXuUf5o6c9AZGvRKv1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTuy6CT3BT7kjMxUVWiWV5eYXmSZwPCXzPXimks23LFiuj6bZtrYRfm6LX53io4kzRtK2TFPRnyKFGs2hg9SqAS",
  "key1": "4a917tKeZ7Ec832eaDe7N46bNECcWiWRavHBGKtfNg57gJs1tWoX7TdMJQMx8gqVyeqxhtyut7vmiR8K4esBT1ji",
  "key2": "3HKN1sxKxhpoPXFFsMxGWJsySXRbBFEFJdsuyus1BuQVTpK4jPAxhTduBRKBjpX3QK9vNnB54Sxfv9vWYK6KLzDJ",
  "key3": "g1e5daHa4hNSdrzeWJfQ7d4htXuLczdewSioqT92mMShsyYmEdXDnNTvuRc7M52qRh3mHNjv2v1WwX67SkWZhBw",
  "key4": "4LqBhnTjRtuQfAFq3wtSk8Dymdhvn2q4tgts1LZmQmcmTj3q434ppGTjPZefBmskcvcFLxi9sFR5DmupWjZtJBiU",
  "key5": "2dDWhjDz5142LAgF5JfLkesTwPpxQ6Kj54taVgFJe18JG7ngsoGmuSPTwJuoBbaa2s1NFGrPkKrsw8uwQve6wyvW",
  "key6": "4JsPa979ta8ri4N1ox5WhtgPQhjskpzznriPUeDSACuAL3oWBY5aPy5cmfUz2jnfBCuaepDbKGmn3Ddjkr6zzQ7N",
  "key7": "5K4phRdXznEeTC3BvqM8DofLXXSbxWNoQjM56gJqEhfJ4pNeDmLP2ZMF1S416AWqbTvb9MRrQ5DjfeMuDEdGbxY7",
  "key8": "3qYSavY7vDvFoFeRqY8FbjqFJvawHRzKqm8rtVcPEPgePqNxCT4MHbGhjoxR5tZm28VCKkC1fwxzVJvMSbQ9NsaW",
  "key9": "34vgaZVzDhTGrxKmEfAxxNoEFAJveKFWsKtmEfgRf59SSKYTRAAhs1GXmDps5ti9grmSkFVXZV1dAY7n8hLxxSfe",
  "key10": "4H7ucb1uybjFgmcL4h6p6n8US2DmPesf5kqySwght8191nQLo2HsbEdftJHV4Hb87R5weUPD9BpqGz8ER3WZm8HV",
  "key11": "4zFuSUeq7wMFawHdYEuvWTNfQNEbVnBdtDk8Myjyeos9bDDaKvRqUYvdKnfugFs9kURyRGGWtbXp5dJ7CpMkGGsr",
  "key12": "3XwhVorKrnmmksynz9Dhu8yXa4t4xAUZ9iiQD9XqkouYvhrDiLs1rFaXk98yRj38MRjveRiGEQgVJJrpCdzDJTru",
  "key13": "MuJm1hmHBA5yDm9H1BiDngsMaeKDRfa15Gv5V6T2dHZSC8vSQoMc5VPoJQuPZ3NiqW6z1oWHZmWiznwhjBatKGb",
  "key14": "2ZaPnFjgBpS7Zm6kX8iWE2cTrJqfHfjiEihdurdDC9JyMWg67sfEQioD8edmCJ3u42E8L565DP218RhxWWdmdPu3",
  "key15": "W3Khoptvm72iSdKJJLTeDWiCeqWv9vZYVhfq8BeLghKRpuqJ3bWUHafyqjVo8SUTC9uZoFwo5JHRCEdgKpex2rf",
  "key16": "9H9ZrauDBDrTiXoKxPFLKFgHsfhgvHj2iLsttipkH5ez1q9PxepEfjXrdYqSQzcWYwifxCCtk9nAzt7f7abtBQm",
  "key17": "3WC5h9v2VGf61Mh9id4MphdwThRtsgTd4fkKGu5kiy8vqYMR52wUk3jNUwumMyLYf57aah1E4is9pYQK1hF4nJtq",
  "key18": "5XYMwP1b4HBGHsApCK3hANB92AbG8bjKsyyghnYDiSWvbXgwrzFUTxC5H51WmkrLSjS5aETH4MK6oQzTsWMJyF12",
  "key19": "28thAhjw7xKUEkEW61q3qmXnEVq5BX7BT4cE3HFA5dV5QK8gQBtf3WTfb3TM4w7LYsvrVTVMzorWXTpE9fh2tQPL",
  "key20": "37u4rbpnjyiAf5bdh9sPqwV7Mzt2fyatnzqLDtdbNMLF9T3y6gPVDgeN4kqj9SMCYsPUqanX6xWDuRVuM6hwk7VR",
  "key21": "3g3R5aps9XQQwneZ21jhgsSTc4oVi7iQSzEEMuXtWoo6oaj5ycgnxTsaPcFQDsDCugNmMY953wAadgn7MPC9GpjG",
  "key22": "4xqqYgfZR9GMDdGRAQMWHZnYBEcgcCSjbNE2SKrMiJLHHQRLtjiZxPrjUh6QDC3wdipvjDBh5Uo5oFLrDqA5q4e7",
  "key23": "3PTFMZNHW7xgG5ExU2kcrCUPL5nfVRdiHnRXNreUkCL5pYvZGaJiae8UhLx4BUR8wHGpSM5W1wS9zPJvzajWfn53",
  "key24": "LD9sE8Xq8hxxt1sDBZz2fJCaqeU1UZqiRGYShMycJ5e1iVaYFDMLYsn1enGcNAmBSY33dCpCkcHzQxVzpoquxzt",
  "key25": "4TPMa4wc2AJuwpR3sieurwxBKPKmTjksjCdAPhWfvTGXqtWapjL11vj7sB3nwCCmtNACtY94CKDTPjXq7w9vJvkB",
  "key26": "4wo85KHQ36svsnqfip5WYqMVb1XsZcBTpbUyJp8ku8tB2Pmq1GNvoMfL7qFXBgMbkPEyTUP8b9NXvwdyiHGyFwVa",
  "key27": "27XaiN8ocydrEg6sw3cTv8nhSD9PXwjizfd2PNgGtqqmRpaacLYTJLqLMxWxVEKeW9MAa4CwWMVzAXx7QASki1pc",
  "key28": "291VrBmFTKcGr7XpWoewZ28MC2ejkvuTVtsB3ACq1aK27uQyJM2iFgYemCkvRp65af3WSLUYrYyE95RhcC978g13"
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
