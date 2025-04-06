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
    "4DEA8zeq2swnDmGVPhN6bJFdvFje8QuN67TQ1Zgm8QLTxn7YHg49UfasZsUxoJEP59nNJC91KbPWrpY1LB928TyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h55wQgJHiEVbmCHg9hQ14pQrw9F5eWgbEpndsJ8d843xgLQsvCEtCttiq9cNDfYwVkk3Lsun1iatWtTV8VtLEBn",
  "key1": "44NCnge6MqrHJoyfYaVPgH5C7o2bqBxVZ966K6pkXYEyZKH2Bk2nwWwGiMzYPAFcnbLENoS7B3NBaBJBKsUqFggR",
  "key2": "XohnJnW8rmCryyZztit9z1rZn61f6FnSFQTYyiaNs8C6AgXFRaqCiRPUQE6P1ScAssrJTcmA3KwAVfSot2dMbJr",
  "key3": "wgo8WBjcE3UpMUBWSq5RW7Q1Qgnz2PwE4SbepvDu5THMrrRxR7gzfgwbGAKVi8bQbYGngnT1UpoeEB54aDV17Be",
  "key4": "237L4pmyELKS9y5Bef9pPNQKvGGb5CFpAGps9DgFuKb2mLbxt4oqnDhZcH7inXSLwPbvSKT3khHZdHdmnXdnQmWA",
  "key5": "4zHiTHivXrdC12xoLMsf77xM3EY53NVHBFoxRUcqVnnvkF8sEEJvZGFxXh55MVAreY6NZWy5dxe2eLLyB3d3J944",
  "key6": "sS3NHyVKkcAvuGWy2n3JVb8PcDgfjJT5LAQsXqxLBbg8y9q3MTZBMy2FX36QNUAsjaaHWwAJ3AqWHwb7MhCY3QH",
  "key7": "6ZctUjVUEYHkk7N2XFVuxVoyFDoBp1RXiSDAmYBkwUzDCxwDbMRoe3s2iGWqERkjXDqoDv75ceJeNavEuG4X3KB",
  "key8": "5zqVHsaNoCiGHtFZnTXQ1sxhVnngjwRu8YxZbGBW1dioyG8n956TwCvkF7VJKyrYyLCKcBT5WFgntyMvQnkA1mSm",
  "key9": "3yB59z75Wu2AoJMhTFtxmp4ththGU7wvKPDaqKSyQL765V8T5yeZ3KzrDfwHExjw1SA22H3utYBcSfwm8Bg7yyFt",
  "key10": "33e5yzFeouzwiVfLcrScbX5E9jHqiXw42EptwUpmecvs4k42gnQpgok9YwtLUz3rbgosVfeuAkFCWsfbLZbveMdb",
  "key11": "4p5xfHocHKbFCKRw95B5jP6i6UerzqttyzKUt1CPiSH6nV5CjdibZUsTZPYmYotPQG2gNXQy9XwESc9MGQeZ6GkV",
  "key12": "3zoCi6mhnvkRvSt3YBgjgPWFUjn1rWY16ygy16KZ5bh1TDQhtMMu49Xsd9qCieRnoWerV6hbx441Ko41XhQqeALf",
  "key13": "5mayQSSbBFNXuKYbeKDxAGTRGuHdXiso6taPFHLoNACn9qN5faGD6BLt3CpmKFvk1Wz1jFCcv3urwV5HfTnsAet2",
  "key14": "2V1fELRVS8VTBhEBFwnidX8Pi1aLHebwemyaixdQERRhvzz9hc4kwCzVrpe5mreDwpBKJgAzSyZAhLCZWkh6NjEr",
  "key15": "cJ1bFd4jfXWxdzSDxVtqUHcyX7hRP7v2hMfuLqJp3k6FwaZytde6mxePDAZXguu3ZVC1NqsN3YNuKoZS4AkT5cm",
  "key16": "5UGDRgQPRBxLJ96eZftdTtAKsc14LNJs3g3qpAMzJo2Fo5tEAM8u97RFBvYjHwEomn6227FHn8m6fJRAuXFts3u5",
  "key17": "8HtvDvxGuxRhUMySiKZmhZ2grgVMFYuFwgjf7hQSUaaChPb8ChMREN6ppVQfjQEbQbLijt2oS6ZvrrBcRU7DBHL",
  "key18": "5yLUUrijqhAVxTJEndBcmqDWEwDQ6BimXck1dyY4iJM6nex4KNx2VEeD2tGC2mQXsvioH54iNKFeC3BBg95TiNP8",
  "key19": "57gwVhkN5GWDvx1hE2ua7EhJZ6vLGMcKh52BX8FNNpw45EjbyCsZY6V1WGdG3wFobUTU8eEWTR6x3ttFdGta2RPh",
  "key20": "j84ajisFqt6mbYJKQVsfiwyExtt5mhAXViinMyZ6KyYBQMFGvX2guCD6BswUAeDBMhedUaArx2PPcSjUDg4Jbku",
  "key21": "4XV59FRqaiCHQXdiTXf7UjMJnE7igEsdf2yvQR5T3bFZGP4jDZTpLXCgcXUR435o89YMea6RaohidJeCpLn2nS9c",
  "key22": "4XEatYRe2Zpp4yUduAMLHWn7dZv7LY4BgKattv7F17QrVdbTpNhPs2jmgupE4BkW8JFBbMQsoWK554qrmkwirPi4",
  "key23": "3Gp1jdLTHFpQSoHuEhTGhYKpR4ejjpWV89XNZkzgwqHvMqZNUe3ukwVX96TXZvxtJpDqwvsJVmfg15XaBxnLubF1",
  "key24": "5E3XDNkT9TSTYymDUzZCwgJ7V5xqgfkt1j93uJ2o4LNfaQzSvJxVpD19vCNrybhTwbxUajmgbGvpp1yrFDjWrbAD",
  "key25": "nYrNLoPRASAeMpSWYQk4PuSo3GWVXJVdHeNfd6r93SLCuahQRnPNLuRGz2uD1unAXsYbEFzkvonPiNFAMFHKkQn",
  "key26": "76P7jRCg5M5mB2veQDLdBd8geBeHhKSszEiegiQN8aCEG41xWsv1ecWzcCTzKuPgxZHJf3wJLouYrW838oPUXgp",
  "key27": "4Jta4aeRQr5n8Jd2nxcvuEqV91rhxafPWViHLTR3rxFh7E8ZeSKSbXpVzg23yBbwveeV5sF7g9fryTbxNbQy4rWc"
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
