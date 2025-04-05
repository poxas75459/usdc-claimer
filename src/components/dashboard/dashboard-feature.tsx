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
    "4tLnc5QYUek9GssCU5mx3KPQp5nY8KNiJwRGFh8RLMnTek8f1Tzmotty2yXGAedQhnfqU7HXegnNZGbGjbXrTLKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kHrRfQGQyvnSgBBEJ4xbf8hUdcywdCJ9dMQ6WohqTsYCEEEDda6WKN92ycXwqJi2fwLNa1rKb1aeBdq59NcFWzT",
  "key1": "5UnyQ9b1tcdPVo6mtkav1ayX7b7g3LHtU48wpvEdnE9XEgK49VYcAa7uYUGraHBjVfJSPbnpQZ9PdG5sUF5MWnCk",
  "key2": "53xrWne835uncsHq9EPtyCzsAXiC6bdTfWwRvH7G9uH6uBYJRgDAaZPTkhBKFjygijBtXfuESKdufh7Gi5WPvu7d",
  "key3": "4StULdXjuN5jSsrR8VL7F4k93zKf8an7vuP8WJPB1b9nu6vBtkJMiW52AwdtobLRp73dKeSAYc4hXczHbVQ5BUTU",
  "key4": "2ANN9gbn5n8xpSTVWd3SvxuPe3FDwgrZbjLj8ChitZfbzKPenSFy7XZTwtj4amEf7XkfFcVnUQe4uXnpgsw9vgFb",
  "key5": "3FzmqcYVG1X6opQCkt8juacx2W2rB8AHywdsPvdyjPNEcuBkwXsVuTWSKPbzHtamDE6dar2L3j6FFckiZ2yzW3Tc",
  "key6": "4zD5n5YFHNcHWaN6eHbuSBWQYd4KezNLWtNBqh2qtLaPQh6dKrkeN9LWF39SjrDDo6KXtD8Ek5s7KzRNsA5DKgDZ",
  "key7": "mjoKAzBCMvpjtZ997NcFT8iKhedkwZk5HvFR9W3eejPrCbTQKZsqnrpLNY6dBYDvr9AumgAZfdiR6UJBbNUrzo2",
  "key8": "2Hk7HjcuZLvAZQJQA7ohazw5UNtvoUe7j5QN8z9JtLPqFiTo2sYTYLxZ9DuqawLG8iFgXzRtWuxRrxuB5YqXKv7h",
  "key9": "2HTcegXy98F4TBmNvAKqxwBWrFs9kEh7SR1tdPuAxShZMEDeAfrhz5qUp1FMf9Gpvr88c81JRdRDHWpwKD3GJcuY",
  "key10": "2sW1vnJfgZSm19uQHCWMZU73QcJxQvZt67XeLCssjqLLYb6NZn2MWTE6RFoFdUhRusjcC3RKg97sna1Kexy9SJAh",
  "key11": "MeDMe2ngin4dP62i7LWggypCUwMHEyGtzmLbKqWG4BMvA49NsPEsVusjEA5tZ22PfPDW4zcm47yBWiFsDBWKDeK",
  "key12": "2hPfZV19SRFLeMZJuSc6gmvL8V7kB2ZfY84vN5M7CFkpeioProudSVnGWPLjrJf2WYVKAfveKSCNnJSoTBSw2ueQ",
  "key13": "yYZdLnRTVxrcjZxNUpqV6GaZLkFPLtb5BBo2TAcJPSZYVZzAKhf7SihnsJCnm5sxoUyYtzmJPEeJJzuDExj4utX",
  "key14": "5kmPZAGV3MxfxbF7sttmvGJQMuyHJhkHY35nZjnjmJe6WmQjr2UamSQ2eDY1CFDSwHim8igtBi55xToNgYmnijmu",
  "key15": "3iz8RETVhN4Hqp61BomioVX2S1eiQK84jeEK626n5yNhS9kxMoyYZbH2gV2b1rzxFDVMkXTiP6g3cmG4f6tcTKJZ",
  "key16": "4Y1PcVbCzi9qC2GQ4XL37RBGqg3dmPNgTYcqhnHFVRxh1ejPTjjep4D4ppJaZnUrjz5jUQdR3QJXZBFruMf7t22i",
  "key17": "4SCjUEXZ6GauoCTf448KvGUTmRbBtbu5TFHcD9JhmDmnZ7ZMFX2zXEHcFBZbYQNn1wExFLq3QgcmXMTppuAGD6MC",
  "key18": "42WAuBjH1S37dBTkPREj3TCCy6GmMJMKToADEGZpWZ1BGwYmrDpmYgcX4vySMmdTJsR5RvVpQDxmeE23PjZBSCsr",
  "key19": "2smZndZ91tRAs1YhPXsp7FSGkgyYc4Z4t4nCyoz7CjQTPWLwRXySY1ax5ZLww35fXLSuvvPGJA3herotTttpf7He",
  "key20": "E5ziT99dwUohdy2FWG18NKbHbwfymJeWiibLFQa2TonaLuoJAynui7cbY5WZCJ2D9knGh6YfadHs3pUovYuzio9",
  "key21": "5txmnoBPpwBttVbjsAYqBF44XiiPcqYf2VCdB3LhKxN7qmPnzd24umg8EZBYKJug2acWhnQyy3jdM8fbqBbC6Hzj",
  "key22": "5LQvZ8Qcprhib7cfLVSk6ugCYwAV8edsTCFUJfBzpLU4abyHJyh2VqWDBDY79ts95vsdUHrduCtX615FUUoBMDny",
  "key23": "3SEJB8Y2CbdDENczQj5fashGN5MJYksSeLR9c4AK9DKXWA41rjR9GgHRg2GyXD2FfDJPQvdMG3wvnDNQRxPEbjWh",
  "key24": "5wGKTvwkGBckPuSiXtf5QprtuvybPtcBTaKhjBG9kHmX9wRiE119C5bmvtzLHLEdSHK38smfUiBP6fjM3Q1UH4sh",
  "key25": "2D9AWKoRdKyaGniMHoSSAuRy1q1QYHhEGmEvBqyHPuPhooHkipvAE3StUKCfNAsDs2W1bXRERXSjzx9pzyhprckS"
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
