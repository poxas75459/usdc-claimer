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
    "4QF2qdeZt3QhuxRHsshe5aiqxsFsxogNGwZ99R5u3EfzjLZMQ7K7v2XRmC1UDwXxMHdSbw5ZTD3dhnC7HQorhdhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ddw9z8DMNNhHyDT4hYDvqf1MjkTByzS1jXwgfxqX9a3nVnvGVHjBRkyN9Fa1pvRxXpAkQ5Mg6nqmATXXbLxJQxZ",
  "key1": "64Hn8B8Rehu23hR66cPfdJapanQDF1SbkZWbr4riTGbLDaphMFxfdNNGiXiPxb2onGW4bjzoyYxSTCaY7umTjGaY",
  "key2": "4e5Np7LFizsNhRpVSWfj5VG8kn2JzqzBydWSm3EubLscfznnwbaAGqZud4B3Ump3CWkh9gYLcBHJiTv33MdH7o95",
  "key3": "4JEqWfJSNBnuMEnYA7XHZG9BoZ75YJpHdWXrJeowfCrMKg6uU2GG7EzB3HhRdp9tYaamfzUMqi7mabT5rRFFFXNJ",
  "key4": "p7jcftWmZghK1cZsRuB4waTyhSARvjVhJRPLkJEXwDFEjPLnD6NncJnQtSGYr2tUJwT3j83CrveYrLUm7LrF8fq",
  "key5": "25WVBmWhVYZ7bqqEvkHkF6qD3u3cu7yutDeTYamiSiog4qRE1ibjx9DPTuqRV6iW4T8zEzfhRDemdHfQhBGxavHi",
  "key6": "2RDMjiGHyoxP76j1XHwmDTG3C2K8ebDFaryoUUEsW9XfcU2TbKusGJbD9NGwZ62Xjv6jeR8rd6s2oQysxgMtStc3",
  "key7": "Qdr2M5cmYhtE31VEDty5GpRDd8gZqbCs5SPwf1vTGJxHeKKwodoVUiQEVyNCY4QSFUkaiFAWRVajgre6hgEwavX",
  "key8": "ux3x93GecTvHZ5e4aoszW9sDVKzoXUr8rsbYwCm79PzdhFYRfQVgk8fcH7jfGmXeZquP6ksXFUCuZfV7wHxBsL2",
  "key9": "2zwXTLVdK3bEWyrmmt6Fs8Y3a6vvoKmh6e26AxdXAWEoJyaKDzH3vDZBMc78W2fbCfT1T6ZiF9vr888YqSspxgZF",
  "key10": "38ui5J4dNAoNe7gc4GxKbJAFz8fmiWbKTHGNASyKNJ3tpkAL38dUHieEb9BryrAdXQ8TMkWcdiLPdYy6MJhjpQWW",
  "key11": "4FYDz3aYZjrhbcNi2R38xFrMoTLHMw8wRKw5HayqAsDRPGScRTXkjDnkKswr1GEU7wqZhKbvGagjVhLzeyzcVVbf",
  "key12": "4WfMJ1DwMW58EeG1Q1xkhy1CvBRPnhKy4iQeCy2fZBVh59GzqEmmgkTS5LRhHszoLvoRJSjMPGxC7fMmHF23kAZD",
  "key13": "3QMzW1wnnqaGd5cvMsXyFaSjTtU6tfiMoNkyr1aiWya4pWx3xTVPGvKbvpGDxPveTPArrv4rYsreuHKBW5bFdiLF",
  "key14": "R64EUB4wwWwKovMe8qC8UeTSyY5zWP6DEatJsEZiSHaGRGJgtTSDpBN5XcGH8NzZkTTrvo3Yr2RYmUapNdFSauL",
  "key15": "554L2iGRaTHU4ZzUpzu3y5NTNBhxKGY1QQqFcMr9Tfqu5nGjMzjBwD1xoB8qKKpn3q69NTk9PX5mtqBpbFhZL7wQ",
  "key16": "3fQqGHD12Rws4Ux5Xr2jv2FWgzhdrEx6tTh5HB4S6PnThnpnceEWhHP2st81zVDLrTo7FmTYvHt23Byr8WZJfidn",
  "key17": "4AsiHvAac5qAqPV726RYx4tJ3hTS8nwFHkp7mjmzHrPVznhw4CM6pLL2y1Et1aEbbHQGbzgqeFcJQGE6MzTsiWjU",
  "key18": "5baYS4kHeYhT4AXaGB3t24PdF8Kyp48rwT6xfjoaf4zbK8Dk8kqoii5CRWHaC5mbnMPhbmoeeHeyGDVNS9W8rGkT",
  "key19": "5iUtgXVdZzz1jPUU1hDZEiJrhXEcR35sWHVA1L7yLeG1jbHsXkggBsb5iam9FB7G5z9ZrDf1vXNNTjC3pmbgjAAp",
  "key20": "2jC4hvCN1n4hYqATC6hyRd35nH4xUuWcHcoK9JmCqf2PdgJLPZn7oSc5984xJypGfHrcUkw4yB9bFyw7Ni97jxT6",
  "key21": "4upd6Sb9CGC6JUVdT6sKW4LMQSMNBWZFNEmQBa5jCzHstKRGoDtAWTokm9ehHGZYQGMBemHwWzAGDgv5bTrftzSe",
  "key22": "5oJMbbHVau5m2zfkKHqnoHrk2grmLeY57UHfQgnL6HknuwgxfTZDLEhxQL3hM1o94qw6HXbStK4MvVNMMVNFvVrF",
  "key23": "67D5abxLN5gfBvLZBvG3anyC5tykmX6nTDhNkw3NKQwMYZqrtXL1eKJnggcYGV9qnPPkSKyJgrwchwByWeJ8qxws",
  "key24": "4snH5hpjcmR1vkBdkx6q7qarC6TtymUqPt2BF2UuvYUiZU48UrT2AEc9rk5LUAuDwC4tjP7rYGPqiU6G6mC86i6o",
  "key25": "4KYpX7jagJmbByobVVK8akMxq7DJ2jSfCmD1MCrf66DR1jX7T7Rvxp6D4wm9o5oS1RUMkwbxH3mS4zAALzf6y9xy",
  "key26": "37M99sweVRHKVEJZ4HQUq3gvif8TswS74C5GcPQGVHkRL4mPxrAuktTjMVFN6gnSj2WbMXH8GSrhRMpeT3ATLNKE",
  "key27": "5ybvEAzR8tm2Yeznxp4gR3ir5SpwCV9xgx8oQzz6THGfsmSqpP87KnFSvGVNhWxUHTMXM1pWge7EaxvoiuvQWrFq",
  "key28": "2zBs9tVGiuV3MvUcw8mVwjD84eHv3yY2ZGm6FFhZkRMhiuWtebrFtyxdFaozxFDrkJC6C7rzCAmAf48CgANtBLGx",
  "key29": "z3SHShKdY5ohfSavZembFpwBHyq4LWaBgdETfQVNuDUzeiZQ7uhT2GWxwLq3W78R8oE1R9ENXgDEUqfMJskmPU1",
  "key30": "VNyWp9jv9szCTHLouThkaxj3dBRtLc2puJEtXAG3Pew7P1TqviKZnZQgCCsvhrxxo6gTCAT186wxmUj4vq7UyeC",
  "key31": "nHm4UwoTqvYSnRtrTnG9f2jkJYPUL8V6dPv8TaLok7FRDxHUtihmMD3XEmLv11TkFmpJBVjNNHGRMEkBtQ2xHt5"
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
