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
    "3yJj7qyuoCQVmNG5GYvxDdVEkAKfwt6rbYKETEURMZQMe5c4HwZq2JsU9HrNfuChf4TFZCQuUE3jMzLRuPa8jnPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZKiFuMtBzxpv5FrcxJ6LLVBrAXR4fpmcNr39Ybbh75FEvqoZvDkzVN4GRUp1aUa54uv44gYH6DFj8BSD1oT216",
  "key1": "481PWxNvWF3MyUNqWShVp7Zfhej8sSwa1ahZThvEiP5n9XHZMomJ6VRr8LmyoKnwU68N6XKNTpCar8uE4BGDrpuB",
  "key2": "5cU9EABdpizCmnGXYwL71RGpHUCyVb2Dv5xZavk9qeLRubyYxMBrNbrtNGTbYkdhE9G26QbesYmaWPrpPZk21pYa",
  "key3": "FYbkxr8Fm5W6UQNWaD9EBhHCEhozV1JvH2gEDiksr5VjFFyRbmPWCn8XpEtDuLYErezMmPHAh1q69ZpUZbm29ce",
  "key4": "pHsstqHmRFy86TqfLQmPbUUuicH8qp7hBammPY11KyKt58t5NaqfW7CGNZFjZQGZUWd49s1oaSuSwghhwy8PQdv",
  "key5": "3oKsKMmZiqpue3CW1KCEtbb5bMaeAzr4Vz2wLLVyEx3Q4B8jmmv431smy5sAUJVviwrJ53iQKLeAyM6FQC3Qgiso",
  "key6": "58cwCrsHoteVhWBxHGk8waE7BsRFqa3rzRYnANXPaahyum8YQxc6d7913VJc2TwQENhfV1keu1Whaby3AgaRBYx",
  "key7": "2weAC1hQwBGKUqJwpandBghuLZr3GEhJEGB79rG3EL2UcLZdLN4RDn4KMwFoXTjBqXxc6pbnBnToDADyb52kkDT9",
  "key8": "5uepSPFceeCh2tQKMxwMoq5Ufpx5ufogQ2WEfpquCJzsHDwKK3hB8t7hNpZQzFt6N2B3GT5JPUncbTT1eeRC72Hi",
  "key9": "4q9c59yos7GPwLARsYt7szhiuFfnzysVNvBFcyyAM4njDy4WG88UvpiZcZ6EUG3ywXW6LTu9ydeVbmJDZhSbkYWF",
  "key10": "27sND3x4CirWcxB6SmKTC5HrGL3shKJLxB7C5w89LjGp8ctnFdWPsEUcLoBHhVosyqQWcKT4Vx4VcFgYByTshaEe",
  "key11": "KSSseCvgWrMc4vGH3LA3jK1pGDD1kJhgvT3uZ8aBEtLdcmo28kBm34HbM8XWzdYB15SDgYd26QAJkSEvdKARWtM",
  "key12": "3pMXsqPpreWzwfFCYiVFnEwQgrwkZqbpjryy62TJso4YFkyEwFjtLczgs7nX33tuMk23K5nMnsL5v2aMwb3Z1iNx",
  "key13": "3PTjQCR1FCufRJQe4anSdLChu7Th8HQhd6LTdTMJWhSFBNMQAgKRe2wJN2wh4BDtLBVM3gezt41EDy4CW22FES3d",
  "key14": "2zhmQTjMYHaxkKUbWvKUwB91iKbmZVhcrSZUdyHJ6jZA4a7d6jEtrkAoPf4ew3YhAXmf8ZWKMyFKcFqbXzk8Ma3Z",
  "key15": "2rvHL5WvtrnUy2CZTpaSxt6Z2i98dQQFBc9SYkxvo6VNoofcCeRLhGAHHdbvaFvwpemLCyoA3L9MzjRGK4V8cbHj",
  "key16": "5pvtHtMnHp8fwn2QsFfT1j6mxWiaHkXjdjLUrXuM41qY65GfxHmaKxMMErzz4xcKkHn4kqLwJhuuq5krTHt8xrtR",
  "key17": "kRQ7xvBHpKc5ydWsQ2VG2z76xd7sfY3qgSzgQARjzHXbAcNZos3oSBSeJYiZeKPvNvEZKsG2hBiXWTiKkaRHJbG",
  "key18": "3t1BE7mvbz7Xf1FyvxVA4n99Vd1Wcjdk3YAiKMsgCuVq91xKhXJ4y9JgbmvaY8ypUSpE5fbGDW2Enn2UWbSJfUPN",
  "key19": "5boh9gfNoWZ81d3sBgk3Mh4gyYsoWsxrn7FXnWhT47h6Qd4MoQgwjqh5jpkRS8TgjSUXZYJQLhsgFQHbERCgzjiX",
  "key20": "2BkkA2HgDg5rY6dczfyDcF1cUhzSc5nQDLRVhipFKJTuyoo4Po8F7LGh9g9PkpKrJ7q5LncpVeemsk9tX1L1eWf",
  "key21": "2JZrN3rE4LLDCHkjLC32ZwrdGPYzd9iUWnBdnYRaiByDaEDx8S7pm17ydhHCEyNqyn2LuYJ35c1feSh5mYcXfvkb",
  "key22": "3RH8DtsttDnZEvrRHZjqTRbEYZjvjUM7egpN4nFUrMHZiRL8Z6zRerS5DdaFNKuzXpQc5GjFzrAca4HfbuwWfW3V",
  "key23": "5WEvvajADcnBq83AuKB3nFA5G9Qp94K3d4tNeTFJGrHCJz2oSn3LT6SS2Lhq294hjtL2F3pAbmcSfsx8nwbVfDiD",
  "key24": "N49AECUR6HrYyLuSLVHySP5z6WcmF5bkppZHn337Nzpzv2e4nSYMGxw5SHPFYXfbv7g69jVT82TymxXBypJBaH4",
  "key25": "41ernNBauqU8K7CgPDYzeNkeLtB1sMPQz58h9gPcyRZGgZkDnw5WjLd8QSmDry9mJXDtkAS95Ns9aHndGfBoeh7c",
  "key26": "3JhjDtJFW233ZXBMkNASgNdhoskGdChu2BzbS1HJvgG98popjV4LMEPmuSCy4yvVDgw1aYTwrcrLVBzJCb7qpXvt",
  "key27": "UhDCLw74RUSM5mbKFJ6a19LjjoYp9mEH7F7dswHr7XzKDTueuTULo1iq1oTUMTvhq2KQBHJkFE5aGsUUf6BXgbU",
  "key28": "42Kw37hyMLGAMhW9ks2rKsw1rhJ49KHoJMaJbL3UZYxfmALYKfDR7qDgMEHcsQYR4a2CmhjQ5TVGUSCd1cG6KvbF",
  "key29": "3p8eJtQfzWBUSdSwCMoyNYKJ7C1z2koBZgbnSUztRp1VXGeCibjKaE7YVPybtwa4AZ59s4EsdotNSC8LCUNe1qtk",
  "key30": "3eFibULQsTUrLBM4YnpB5Z1ChnJb7hub5ePdfgBtMgAr8YJR1jtpxgqrsmaCQK8vea1ZxLtbiUmQwUeGNdhbZqq",
  "key31": "zfRpiPxH1naHneEwSz9uHdzCTazD5TKm7UkK4e1mNjGgd5T8JrEDFesgdHTeQ5pe3yu2i8WT244p9S4FyfQpxc3",
  "key32": "4MqZQgrV1v9R5GMHryzN2deMUSSceTpSPWmFKLW1umZ8fv8otbz6KuaxeHQRcuHc6hwbned1GF2VHfhJb2UGVLRX",
  "key33": "4o4i4LV9bGTPmEMEBFFVHuFy32zMXifnZeGVFNYS5CMACe9HJKMQSuHSkhTv3H5CLRfxe92aCL6GhqNQbozK9C5H",
  "key34": "2FDF8xmLy4nC9facgxENEfrDhub1AgPsXwwuKQCRu98ixELkUFRkHFAD9LqBzG5T3RkBDfAJP4mQ8aRN7ixbra1"
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
