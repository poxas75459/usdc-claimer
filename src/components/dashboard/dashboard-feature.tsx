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
    "2GnpCdeqTyprk44C69kGHhNoEFL35zGT8u7FWin6LxLR7MFud3t6GB1bvgT7fVtLcJJqsCjVgGhSBZNvC3AZi2jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2eiTTJu5B6muaa2WMVRYtkkSEZNSgko7asSaFeBCa3m1HTpvHygNzUmaKyA2WMZcFmxnfDk6xkqij9gnbDQNP",
  "key1": "3MuSbEt3vQ5TVHKvGgjKzZdmRJgTtxftcmfupNnQSHVBjytfmabqfR7ZeVYSRhyLyuUj3wdnas5zDsqsLsVMiFiL",
  "key2": "5FMzdSSUn1Lbm3EbTvs2EjRubmsja1Dx3DbU6ysTAaWv1seTH6DHmk1SsKRYX8MAmvbfXmq41MwDVTqYNZ3SuGVS",
  "key3": "2UHDsdQHG6LGV5WNoEBEvZLG5WbeoDEwEidnuQQeQnXAf4WLoCzCWsR85vBazxuHNYmvo5uyehWDd4J83mocA2mZ",
  "key4": "iUUtxwUCD6LEaZP4G5bzs9yJioFuXBjVEkUUkTQVDA9eoZ7wPsfUyPf2ser7ty738eJyHFLQRngK3Cqc4XrYpME",
  "key5": "4q8dTTHA6mWoVRtmA9eDfVhiNUhjLSKZERFsHYqSNhAjQhH7cWuLubEumcVfwUPo5pK13rVkd34GbNbZuyT2aQ8t",
  "key6": "4qVmghjt7T1pYCrTJLrk66dcrJUs4StCDbxQUwUuJTZWh9jUkZREXqEdzQKkTFeoeqTvyLSbPkuw2PH2SANk5pPg",
  "key7": "3EHK5pCqCmUWnEWAbakqEjjQ9VydboxfmFyobTMF21gBAgQsRR1jCXmMq8P4TE3r77x8uX13Ny65WMXP2YpjcxxR",
  "key8": "2Yq8rXghrhwL2ZGMcVa9LR1WqGcFF3BtrSPXUoCh3gR8R63g1z3rXuiCQq5b33crhopkx6rgKCWPG1hkY7NckwMN",
  "key9": "5vj5ufRYvvQL9yAEb2hCbFxqjWr31kq8nSa4RH5QLKSP6pW7T2scoEtBpQMa4R4giwetPZfhTj9MD2bwXTANc63G",
  "key10": "4gVjCB3n5Z226UfaMetx8ZQt8YcvwsaakDDRn2YEjdWh6ueVqccm54CmzPEb8qHKw6qDBdioafB7ctca4kZLpkLd",
  "key11": "2BkGhjuVsDBH69MwgZeC7BgxtLFvKRG2VXbx9zuusci8785mDqVAsJYAWnbujvNPtWjVzmsSHnGD89Ha5u2jWtgU",
  "key12": "5s9g6mv7n2aq12aCYaXAuWKCjBKLCU2yZoSGNgf1UtBdYmEGTHguNkh4LnwxMMP9ztSDoFPgbXAJaQUGDzQNPjRi",
  "key13": "2rxZrLwARDF2LTFaAYmCwJHbX1v2tW8PeZA4JmdnXboufy2iR1hJDRyz6kQ2ntDy9f8pJYmXZaR3ZvEbukDD1C5X",
  "key14": "66JjC8FHYqyaE7f9Tswqk5QMtcfRp3Wa8Yy23rcTuvJcsGJAD5HgBKBLnYeejAp2w7KqQoSk92kwMTGo2A3nujEZ",
  "key15": "61QYhRoxkHU8zSHjFDViezJhZRrRs66udAhWwLa9QU6TWkb3w6DJEH3wp7S48ZAYURjD2JGbD7Yw6J6qPZLd5dWK",
  "key16": "5jHxM5nWnfW9joo3emrQbZTQFBbK9UASHxZ28t3NprtZ8pqkRAkAdBfYtTfjenGXkRDYB581RfCCF6LPGgNarCWP",
  "key17": "3mcpp4pCXyqWEBZGcsEjip1ERkXPRq9ep5r3a5wTPnRPo6ERp27k654Kjq5HQCHnpKU5GVYG6NQHYfUAtTvwWsXy",
  "key18": "42fA2jJDhZYms5dU52CHFK9VKk2ianTmGJKMThkwZQy29M3q9GKAkQyGw9xfeGzjFkLDv5Hhf6DEEUVX8QnoTyhE",
  "key19": "3YbMSSrnU4wjxFJ8kWTL1RZ4z4Rfcoy5FKSYunUfFgEYfsrWJX78g7VMoEg9oEVF7e82u7UwGAvheYaQgCXAw2kp",
  "key20": "hkPpc8gFSVWTxJ9ctGyWkEKH1gsU26b74tYmGF5Bso7YSx7moWXCz6SMs55GkXu6i9BXK9j1WePx3jp9TBj1JbL",
  "key21": "3hYMNpfJJGcrmnUiy5JHcEcnQRPUcsPnmJSgArzkDnSQubb3GYPjmrE28su7EdyYMGKt3VRMWjMotV3MfhS4htY",
  "key22": "2rseC2MUadFu5gVWj2GZ9ztdjPhdMYrTKQBn8eN55rxWGKDZGEWQMFtDm16SpHwFk3UbymBU87tKAUfrgEejFb21",
  "key23": "2dE8WBZtviwUeDfYvnGb63DrP8s2C5cGZGyMCUBaV2zAiZtDyP3S5qq2CPr5FNch2c7ADWwCQEiFZVDnjw3owdby",
  "key24": "kCatq3ZJZ26n2Aj5aCjRhrKBwVYaXo5fvjB2NtWiQrqWYnJMtPtSYKLtP7kxg6TGoKcdLxY4eNF2kpCQCr3AfRn",
  "key25": "4Re2CxXMQJLsZz88L2M8GzsDZCcM4JNBRxGBqV9uRzPDZtSwBh4csbYnmHNK6zXjS6efKXSg1mNnJZAyYSYku7hJ",
  "key26": "2q1Hi4uyDZds5XUcPSBdcMGHvjQMn2iMomTi33XfyWrrAzTcSQ4e5DN8rgbJHTXadQyvXvwvAcKZBSNZXAgXVmrg",
  "key27": "38GnfDgK4AaWj9h5NBJgiuYUzdzRS4yi15p3bR8msCYxEk2TesLeqiimour3N6SC826AgjXPLXbqmdk47G1PfZYk",
  "key28": "321atB9cEKJApKwqukHVJYdjUutBfmP8sYzGAxaweCDEw9grfPTp2fgf1hah7Ngfkp5NDEK5GurHHCyLkgjrXrH6",
  "key29": "MX4AbFZCPs8QVSLujVPNX1BTiX8MU2UGkYvJ9HyoVFQXE85aKRWWkAtdGBitxX5Lzvc513MDLjm4HzxuzPqwYj5"
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
