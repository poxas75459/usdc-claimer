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
    "5116Ays8NusjhJMyts64RQStCojmZTdp6UKZkUqMhUeGtcEhoM6U4AKyPkv7cGCtx7ViJQtkH5WUmCn3TDcAqphq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qa8nbemdUWyZzgeRQmjR9AvHC9jaYi8psrEVHuY6esiQKk42cpLhBRsLf5DXamWSpgVAFqomunycp7LFHy8iHdH",
  "key1": "2mqdYyG47aHsVZGRqMRzWys5kNynqaanmENwARzRBWj4U6GmEPVYi8p6XHRMqrfd9Bzy13ixN7HC7uW8bjQYF8rN",
  "key2": "4vzSBYDm5FnETymvkrAG1dtoMGaRCegviX3qPacG27MutvXe4FWxBT5er1AsyjF98ij2r1H4SbacAxoAXtoRszpb",
  "key3": "1gY5zbRKxnwKSCgNoGUKEVsrzXVuNq62qvbbdtsfytUrptxewye3QNApQBzX7QmXFCMF6oFrbeKrfNq5nrsWJcN",
  "key4": "3pknfyrQX28z4MDwFWRx3nw3upjVcPztzPS1kNFwM9QxBPnjoNtNNLzRe2FQEmcSdHnpLAW7P8hGxkttyYt5ayV1",
  "key5": "3RETLHJjARNUL4Zt3TeeqJ1UgQGgj5SpqY5ekUpdMM7hD7GcGrBFXmVmjzTwXyKbGZoVnFVojaxA7ERoCFtC7TKr",
  "key6": "5ZdMyX7avc8t2fuKxfSqGsu2pgNCKGwc1ZfqTb8HqgTsYDS2jbBamhtoh2aU33C3CSetyXmDFHt1CSAd3JcDYGX9",
  "key7": "3CJdXBnZodiSHPTXZ9aj3KaZmnFicEsreeFCgdNFbAgzqsbMpArTvgNz73UJoFVdzLZ78HYiHUnXknqsVpWMzvif",
  "key8": "4jgvrvXNeHKAPrj4e4MJu6u7PoiadTtuVtdsock4k8Yj27KkeZSHq3N3q5gxKje5XYRDp1qnZBpMuMngJMRaWSH8",
  "key9": "4AgihofJD14XEmXMca4efRdudPtBZji6gkfDtZRQyvbHLXE1XVjN4r6g5GjTBKTEN7jQk73N8yX1hbBYtvupiyVE",
  "key10": "2hXzyQgsh1eo8MuZ6viLdWVypQsRVpX8PHP8ZFAzUNEoWLteAXoqR4NN2t5VzGXYVMFT3FChMSEuCVyfTU5kW1ZV",
  "key11": "47YAoqPwSR1AWiYPtiZwCpbPiakYzxkrHKQGkKoGsptvfbxyEnJP3TQPqXpD7xKU5h4EkyP5vhW7UEKnRtuD6QUj",
  "key12": "2qoqvcsAZmzz3eXxbymFtN88zwxNQydSZw3rMjq2PxVAU5teuC44LCRDNaBpHPdgYezFYw4RfV5gn1mp98qtMTbZ",
  "key13": "2mrbxKzqE9KvY1TeZFA28mes8MsuqtY31Ptj5jXXmfpBPBxTttAo9mFwyWiSSx1rfmppUFPcM4FFi9cWfCmbvKG6",
  "key14": "3H5uyRD2YbW2qeknu6vvf8AkY4NaVXCvjyzn11vRZWFaTgYa25yVKZJufmwAXpvqK1f7wXJijN2nG8cvZK1aWRXN",
  "key15": "2t9NKM76UQfnhzGLJQxGp2XcJ7BR68bMdf25vGLVNvvq43RpevJYK7ovTYpByt9JJxtfQW7VHjRMJ4jYst1CCKF3",
  "key16": "4jEju9KermDq5kUZ1dqmnP8VtptvUHYyMLw6N9cRHtAMY8RecYQo47xhJhhKdkYygzH9nC5tNT7ha6RuTX8U9oFX",
  "key17": "4QPAPNyehTKn5tKUhi782HQwDRCa5LCK4vaC9hRgy3U3okQbkeENDNELLfdD1oR4Y3VJvTRWYMfQpmsrYB7GNCCk",
  "key18": "3ciaGjyVEXV5HkFky7tQijuKYBb8FHhWx68LXeuZdJJCPeqvLXhMD7AHnHV7xh1YdWbSB8Pfr2UVgvmMy6eurAtC",
  "key19": "ziDqVuCPApp1FyjjdboReB2VdtnpS7Cu3gbzADVinKEwyAdTZZeCAcXJ12a9Zt2GctK6kSzJKTPNBV9D95Wy4kA",
  "key20": "5vD97N3bkxge4fMmucok9zp7WKbayfPELpfpGw7n4hoZuRmJEMijqQhdbY5CXr2PHsFFZLFGKBP1Gi4tscD5qMwk",
  "key21": "32dZEv5Vw35GJC4DUFG2fSNoAhyeMn7ZPiNAghhapw1dWS6mnS9d23aPsEyM81YWGscuppBJY89B4ptUKvv4xJbe",
  "key22": "4AL9GBq7u5iJdas3pNMj47ijysjw977tf8JFrtSMB68YVkeSQmAMAixFjudvaUWNUYhtAu6SqyZV4ssxhEDGPzXo",
  "key23": "3FjDSvVDzxKdQjpJNfURVR2ewHp1VtXezpK459TeE8P9zh8cvMTieqGyyyKA4zYkfyuMsKWj2EiHtPynKRwqe7Rh",
  "key24": "5unBQ2NFUKDLv77LyVySRbPwJ15V4aBrWS5roCqoNPzig2ZdAdgkShuYCTtUhimLALiRkGayEfL1AvsCtg5xwyCC",
  "key25": "2wHiB2UqpUAJSNoaHEcR4yDbfFLhQe2WrqALSQTRnUS5DbKdsUJ8JZeyTX4TcxVYTUMyDCmT7dDGDUBnWpvAw7F5"
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
