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
    "3LQShgDFn5TxBMqsek85x81xVvMo79oqXTmA3f2hNirH4Ey52MFtcWeWBFB8x9oE5DPA4hBESCNqNkGD3TC1FW97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qv3o1eYuWcPH2QNW5kngUpMBnC8pzndNzwDMvNnCJ8rP8fJsFwbaRt5wyC4wFKDKNXtWMV35gR4gHXrQFQbAxyu",
  "key1": "5QgQdSE5LUm6t95FgBx2yK3rqn6eiBtcVgi3xxiTSSovZYovKVV3DWvKcvDVPoK6HsJsh916x1V8VmXoxHnJPwMw",
  "key2": "37k2cF5Fy9mh7t6zdLAHn9VNziktjPXLLHEtfkbkEppwFqwQwHnBcMy8t1d7zdecumUdQ2YDHrUpqtk9m81WPgaP",
  "key3": "5XnVeXcFsfrGmnXtPvbVtM4nWAagVeKf58z1vz5AMzvBSbXQ9nuVxx6c31qda6sSB4NSNHFbFUYSdQrBWVTwgH3V",
  "key4": "BXwDHiFRraR3UcuUgkTzRfGoshoYoxdfRGAj3bT4czgPgNFuyHutDXpMvygmyoLsACVCNcZZxranJ2MrqX2WmZr",
  "key5": "3ADpkj1yrNy5C6PPckHGbMoR3UefGKFq8dBndycVZ9dt5WkwPnwyor1stXybnaRfmjKMmHCkfF3x2LTd4oTbFwq8",
  "key6": "3h43yDzsaSg7eQqD2ViX9Qp929dwHS1MPA7o6SA1zoQee4iPvh188KnUy6ts8JXK8shaL8JSzQKzchR5X3RbrrEV",
  "key7": "56xMpFbcBTfe8dZ5uaEEGd5RSz3sUkXmFKSzHk34pW4Var5UeMhi5Ccmhgk1jCo8ogQGJFDGBFJjVpn3tuTQpPKi",
  "key8": "442KqY3MQt2P4tMyxFqtmnHbFjW7xR95XGATKgG2J1CZhtVsFxWycBSAV8sMBunNjJW4xAFXTbtnvJ36rd5b8aGU",
  "key9": "fn34WrrpwdXf4YN15CcyZiGn3ZtDUErTyWNj1neE1gTx5nvWUiNahFvDVTYBP31dswQti4uf3BjtQzpUKciXzz7",
  "key10": "5knauQ1mLQzxo9cxAokhVTsKtU5q7vMW3WK489r9HYFWk3ZA4zL6RvLaf3XW1gn4HgWqbmxmNPxiYNPPBm3SKvoF",
  "key11": "47X1yjkVSAzGb1xFaaMTW4DcYzjQTqtEHmcphnXGh5fLv7wzra4xPBj7pE3MYxAWv2ArmVz8xDigVZcXDQ6UifEx",
  "key12": "5Te1MBRqZMpXoTHhsjy3gNmTLnYQ8x76bRsQdAuCeT7EGPDcLZHdMpo2kwgADbHx5Q5mjTAj6WvY3acRtbYG3W2i",
  "key13": "2VYF5EaWoehtikhZ6sCzQpF3DP4YgRWqE42tthdFHnfRyQdCjeRF8LrBpRxiffobqugUx5EqrtWVHszqUnDqmatC",
  "key14": "5B7k9ye95ppGtrtRjQjpaePz3ipKmcCCY6fiVps4TDxACJnumWxjD8YXLa9f9mL7MikaDc3TwbeTiEs54AwH4Aie",
  "key15": "4HzmK8uw6Pq1SetfwfRfFmTsbn9jBW3XkeFpquM8BeduytDjoCCg6TH9zfmpd9bJe7ExnNfps16vPLqTdkvZ42qU",
  "key16": "3dpF9XY4AvyYV6ZTNwHmY8TrStd66xWs2WbKzmBv8tAp1kHFZvXMpuTa1HWxe6j5KmS3i5T684VoWqE2h614zi68",
  "key17": "47pMHsUmXEDH1iXDyptXEjeXicNLG7KtbW32rFbu8oiMmDGMC3Dq2pG9T2FJiRpWDeuiLpssFpXVw9KBWEx4gvga",
  "key18": "83CcUAfztNfDJ9VzEMKuXeienB1yvPZ34maAx3ExxTT3Zq2AfenpwLseX3jYgGfCymULFbXkUFnUNtccToPu8GN",
  "key19": "bwapmMC86xbzG7W3E2u1oUtrvdvHH59EjpiMoacs5QUmzbBB2KqQpMndacuM1zaswM9C31AuAo1pgrpmvrLmooC",
  "key20": "rR7Wf5PdmCkFPjSTsp6xQn2J4gUyyc9dMNnDzQscBihGbAxGfV6kJgdkhXeyKFy9qYKxCjLHuSijkRaCfXdcQAX",
  "key21": "ucjTkQXWUXCNqGcfsxyS25unwcGdYMtzkraLiJ3hUdxfbZx21dc7RDugt21f7ksa7wV2MMi8YBfsx9qvga2ugHn",
  "key22": "SR8gndegVWtj3hvbYqjHcxTAs2R5yZTQ654iyjqf6iWqA5k3ntxiawhuFcw7CSTWNsjs7hSXVS8NzPzmDxc7UXB",
  "key23": "3WnL2VcEvSJ1XkarY7eQiG8ATmdJW9o5skDP1qxZYMgmJPsPodcZBVne97TYCTEWMWNjttYL4W3QepAd48wXpXpn",
  "key24": "2eVCVrx4nM7WFDKd8wDsSpBg6zKsh5F8GCYf8LH7M97CEb6mLj5MFh6kAxR9bYHPax7E8k6SBR4AYahtfknp3QgH",
  "key25": "4MCfn6AfCMZPbSgVZpE6MvVcSsChsDbAqqxsmGKnHS944XWdrNTgtRPg4ipb8aMFJANdSNkuaxRJhvk6FfvRSxFv",
  "key26": "NDY7QFU7xT9YHUDvs86QC5pRcV5i7zJ3Up3ybMChqTyyrt76CS6e4rckgDwSSvP9tpgnEPuvA2XygCXEaoJAvyt",
  "key27": "2NR4SxXbqReBU9oAYKbSKQQvPodEf9qKa3Pcbwi97TJotXcEPDoXu1huL1dd1dAYZRUCEqUCNE2mpwR96zRouf99",
  "key28": "4yCZ7FudEEdq7naQfM2BYr6fCvVLXDgcxedoRCBfuDhxe91PqMDUuS9g6DAG4D3pghpX67Y4EnTHGyN4TLhQrifA",
  "key29": "61VgDv8TWgXA16z15hcfFWPbZNDt3LHsjmxrjBFY1WSmsCjzuQkF32vrgf1EUrqDq6US3wDVB7HGexekeoBuE8kc",
  "key30": "4WGQk7UQytuh6CVZenuXtgjcAj36ysqRcfTWVcwFbHZdsNENw3bAWjXyjTbspPHN7agQmy3ccm3WzC3KuMboSH6",
  "key31": "Q1DCvz9ReFJgyAhgYA86BKb94omm8qWnhWA28NsZh3W1w6Bi7DrbaNYstwtsEqYuttgtjkTgPq6h1jjdnNUL4WR",
  "key32": "5mfGNZUq4twjtP5rHeu71zh8o2gjpnj5afPa9vm67nwDYmccvyoemHkirqKdeMoy9nMtMQXN64saZzvcWnZnNVYt",
  "key33": "3jqCrqWKpNs27hxsDUinfUBwzNsUFJ9FbgQrxi1EXq9BJADPAoygt64Am1q8pMpfTfZZ4mezyh7MKA6ufxETCUGQ",
  "key34": "2JobmtZjqQf2mY6vdB2nHKWiLkBeQCgigc65Puq22dChxcds1GNTntQWrDaEMGvdCGBWRE6auTMJFn9BNMhqJCN1",
  "key35": "24qV4iUCxK34ucG59Z1EQoci4ZALmL6gcd4GqCdGHL88ZyrGCGPcYNfP1vDLUEaj4LcQsDUKRhZtTi5RJouMZ8qP",
  "key36": "4AX7jKSm1E63XuCDXhyQiqFLdUB8pmMVbBv1fcXpifTpKTsfk4k5jULAEs6vnxTbj5AXsXPAHMCym4qnXuV2cUVV",
  "key37": "5ACx2VYriot5eREkxxSLt93oVWYubiSS3Z3QE5eAgY82W67ZQ8kSde2fqaH185pDdvnzrCTpGP2iZHF3dpK7uXJj",
  "key38": "2VApedLLpx86BbLwR9uzR13Rv5K2fvGySnAMskXLFEj33jmTvzaKAdTHtzmXe4Pr8ndyCii3eQHkm6rfWPae3apM",
  "key39": "36dbWM9kmgXSPDTSQJ3GLWcoqauwba4ixxX8Pym2c5XHvEntVDLLSndvM3GhVF9d7QsCegdiUgZ7yrJ1JZiz5ZxW",
  "key40": "7HfCKu3eZCjaju6w25ZjG1SL3Q2zuQeWk2koaFacrfhfH9FE21VY3hpzjEGZ817oMCR2WVZn36wvt1mXpT4qh9e",
  "key41": "5noNKZtpiN5f58n9T9fJG3Bi23ykCSMjSp3A5briESMAzgCKgCPQWPVqfvU5jrWrXhYqN8BpzhWzwCTFV7QjMWQu",
  "key42": "g6YqwNC362YwWs366y2GPLcPpyhnK5rr7u13QNhDsc6kmNzVvj1Y6WmdMnwEvTxQBihEhsCqkKtkZTcBdYQFTJ9",
  "key43": "5jYVhB7pwMxXgkmSiKAtaE2GqkNMkYvK7jCoSBB741SWyq35HNaEU78s3MEyPj8hHU4k1Aux9pHW18rHyBjvtZu1"
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
