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
    "3SWydToQYPoeLMdepPzdXywJutrwnPaFNLofda8rtxNuc1pH7MBneEJTdRZxuYLkBo3jGxhNKfXABe1cKw23FRMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJk8cS8Amd77zcAtq3BEsUy5qobHXVuWRAGqM9dxicN5uiyAXyB8biUBZe2eNAAeozzqnAjv7UZHaRfKWCuiz83",
  "key1": "UBUcLWLg79BpAXEdTEjq1ZaeLCwVznW736uwb8k2XiVc3E3fzApqmHZSHTtY3DeoYN6g7SUpYbXPJqX276PxrEN",
  "key2": "5vvoqr8AyVqvhQm9nkNNubbVupTuYm5ydgJ9YHzfd8wRkEMXNcHCRqAa6TS1w8KSfsaV3ydn43JgwH8PbuUTchAS",
  "key3": "4PjqYqJEYmVLwtCC1kEKrKhdTrZhw6NHJ64FY1TWHRNTygdcjj4YHwEuF45nc2K2WbSZYZ4U86kuhQx1syKHkszf",
  "key4": "2Bgjwv7KicKtQ514DRbG8CHP9jANmjHj5wBTA1jZykyx9xLURK6Qi4fZpcoJya9U5xGEDoch3GyHPz4g4AX82P9F",
  "key5": "3adc8pSPWmZ37LaFFrg2jmugTFoFCWxaQ4vhaDLvP74r5iJ5jWFTxqR57tNtxXrv26ARHDW5SP69opuhNJCoEoPr",
  "key6": "64GmfBnStrq6Xvb6T6Ss5VToZgpxsm8r1FqfS7WG7FnVR1Qx64djdUGYnN5xQ8awYxn1GGoAk29kySza3LhBrG9z",
  "key7": "3Nc45kNsd8BVwEwmegeqRAU3sXWZVhFNi32TozEL7PrYCAonQxTc53qrX9PbmmJyLXMZfoaynmc5Ss8zCUsfofKB",
  "key8": "228qZUMJGtkD7eif7CYvGmW5oh2c4deM3GXdbRXYeeYhPwGYSLwCWnx77ireqPgRotUc2FKLZ93B9M2hdt3pfDmQ",
  "key9": "4RSJE4mEUg6BqoUBuQMeYsqgZJAYmMPW7pNJE9jLwTqnzsqUGAXwTQUdDvwSTqyCNaHczsLpivPhbLF3bJM6sfVY",
  "key10": "5uy5wLiKfdeyFNnwt9ZDDbqAgMf3TwKgx5LaSwGCRgm3iKxWS1Hj6V37je4iBKiyACX7WWTXJAQZy1bpFGveM3GT",
  "key11": "A16HnTSHcQM6PMrcUVejdpQoJzentAvTFM87ivgVfBiG45dSzypHHaAwpdBbkQJLqDEYbtEN8kNcNvq4oPw3URX",
  "key12": "5f3T9oxnynwPVSVo7W5pZJ57T1Z6QvmiCgTfMsJhpFT7dS2jU9FzqoAFZHHfwRpqja8u8njA2e6TT8YFBoZuJBEe",
  "key13": "r2CvAvX5nFbEnNXNs2i9upykRwUFjZv4nSSLaTNAoU5WuLzpbdAxdMdQFc1P1V1bP5fsNua33wX6kBJWwV8wf1w",
  "key14": "4yG6HyWo5nww5GepcGKRK3fb59zGfD6eUXe4pWRx3KsTzYNsvhowoktKTBMaUixp7JyYbSNdjeCCFFZUcycqKYhE",
  "key15": "4ffyLXXkXVnLJ9tr8gVGhJLExqFbHXBWtXD6J9uVkgrhNt55nscCdoH4QSFSbNMaYQVBhSJ1f3EWkL8FZq7iv21i",
  "key16": "39oYYtEcC19g2CsK4SSi5oKA36oSKAasuhrT7Xjzg85cLjouaY37ghnFdYkd2tzy9vwWTbHw8obTTAKZTVT7e4GC",
  "key17": "2z3gaWyf774vjSrB3QWjpYErYpfzHwNw5G1zUBLtcVkz7fQ15HxDFRNrtz1qqfHN51UbdfMWMA1g4iFJ2wKyDbP6",
  "key18": "4gGWJLyJ6Kte6ZJqGGWYYSGnLGgeEZfkep49gYQSfVSNoaMVZUTTZTEtet1R5tr2NiGjXVvtCyL55RKt6bg8mdw1",
  "key19": "nWmgx9fqb4dzhXbDc4foFdVriPksbyn9bjVY3iyYWaJhytuZUqfKrsG9PPg8tPBnaiGHVKFVinjBAfGMC1EE8BP",
  "key20": "5SVoJJ2oF4YfuqoANadQmahBuLL52aUijcWQiFZ3bGrxEARf4veQkfUspoUpwWUM2Pir8BPkxM3cAZZnRhuX1dZM",
  "key21": "2XsNCMtR7uh58FWmeEqX3y7zFAR5BX6327RhSGNELK3L9C21hZAzgEwvbz4fF4NXT1giynQqJaBqZyCh61RfcwVe",
  "key22": "aQVrTwd3kCUm8Q4Nu643SrGtvcUJXWh6HGoGWFU2o8k2Nk6apDUnLWT4UAS7MqKvS8YfhtouMJ7nHYKkxAHLwpn",
  "key23": "2yeQXTdgCGkvwgJbihwoEBsTjpZ4iD7VCg2YTvAJ7tHn5TkwBiq7Bi5NBno6Sr66j5W9MAgoF1Pf8EouY6mTg4LQ",
  "key24": "bWfQf2X39HfzPwL6uxQniWUDwDvVBXzmKbnvpKfMPH9mQcEAFyEM1mW8cPswAUM6focTC7nUHgXtPYsTjdiywDe",
  "key25": "59mE3pdNARfiiQfXNerpgYio6vkXVnLkBJRhRCs1DdXBkGHyAFJvw6E3nZP5DB9HjiiMUrNFvU9D6NZ77aUinukD",
  "key26": "5YrqgmqpZAmmrJBi7VyuVy9Tb2tBXfHHji28KLw9mi7J5iuVkJPzxr6YprLJnSe6XjqTQHejUuNTA6jsQB1ukDar",
  "key27": "BWxAoNumAqXiY4JNN6BxE8sR8qbdyP1Thum8aTxEEmtddCSTuC5ALzW5BLdZVWfD1f65hebngLFLvpdhQusq6ee",
  "key28": "JgcaBdTptgDZSfrcdSGyuendZTfaUqN8heh3seUrmpGau8kJUMW9cEworPHrmP1rDYtfjB92v9Weh89TUwPMunV",
  "key29": "2fC7qdeLiARjEdcYTm6dEC2qVWdCY5KSbtHnuV6SxXoChbjNyMvLURk82zwwKfccQv126GhttakLB3gNc2kvk48Q",
  "key30": "HMzXiTSFoPPEaQU9d8B6ALMMg7Cbx9j7XTb5jZBZhbTxdY52w2P4byYSGX4FCVSJzRMQmdnjUbaDc2RG9tazuwr",
  "key31": "3cM4C7fV9m1zaL7xBX7hbEGJbC9cSDtzLdaoE1ga79EHAyBiZjFRhTGvt8F6U42dKdX6edqFaykx5sqcPg3cuPdr",
  "key32": "2LQMRttHPuQ5L73Vbs2CiDASxi81hxVBraY6XTKyPFbZYrtdfXhVeL2QGHoYkmsSncxmXbNKoh5TvbRVHtnyhtPB",
  "key33": "2wJUjenETCQ3ufKcAHBCz2fDXbKWdUTL8PacMuD4aKsPeEGsWL4t3Q2o4gmvtuyxyPHhzEn3Fi5GoKq3b3fwRHFt",
  "key34": "CRSYXAcPboFj6jPkkc3t4yrLaa3eXUszsFK5qxPhVBt6e4E7UBV6BJBecRenxZS6mQ518DyBMAuMRmPmL2pKNuF",
  "key35": "4AsThsTasfRcNVSxPaDXC67Q3PvFMXEUjifJdyVoLD6y8DrCunUryFNYs6QLjvnqwwpmJK6jafb9MoUcrx6THRq2"
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
