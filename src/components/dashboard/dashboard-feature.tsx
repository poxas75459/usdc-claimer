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
    "2tbFQ3EtFTVbzmb8ZMgxuUZEdQ8HnJksvu3sPpBNRMZXmpQTsZQnHibbhK6QxGthSXEzDYcvQVKvT1GT5P8raBby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGoqShAgSk2Jh314NyW73N8Xk9DX6cmVx9qg4kRGNGghBhPdhWxspaGMibV5KcNX3whakri2a3XkgK1zT6pPPLf",
  "key1": "juDdee7Bsv2puaqFJZ1y2xuAUS1XNH4y3PWhJTAt6GmrKQKeof7Zj9oUsgnncaJyiHvVQpxLbVA8gj7YJZqRB7R",
  "key2": "qvcqqwKQsYVSk8vTkdDnc5s2yY9jtnMe7dxwm1TSqq5entyMcSFVV73bZQ2fDZ4h44EnV8KKsdBiW6V9VEXiqtA",
  "key3": "5j6DgbLLnq1VFdFw3qykweVGwcf6CAFTHxAHJkPLFyLZdYhEGuFpJS6AGnsPMRq68y3aSh1XQAUrUyt8fDG8Sewi",
  "key4": "2MXzNDx5qndWnJJiAoTvw9qaKAKUd154v4n73oC5Q2wwk47xrP5BYC9oZE6hMkZo2CrZVCTAMq1RnGjn87YC5BXv",
  "key5": "3JEY76LyEHGHmU7exfV8Rz5pD6MXmr43BRV2RAtwNUshNJXCDo5VjLPejr6m93N7zr6xCrBukEkwKDVAFtoL7gFj",
  "key6": "3AViLarqLifVNpdocsESCzBk8UYXTuVqRrwc6CRE1Rx7paTMcmDMPDzgefTxjhiVgVBbMoEgPAPApVKRhsg7t6aT",
  "key7": "2me2hj8KkN2yw1jEs76FDWrQWFPXMxhvMccD1ZFZyL7SWyGcdberbkzWmVCyhermR67D3Quk41MDfrXKoKfVND1z",
  "key8": "5nQ36U2dHjVMFNeNJTfm4F2Q2sHca53AekcT4iPavgag2CWNWWSvCLpk66wV5J3cfpSsdjreGwJVgMdfxCjFAsgH",
  "key9": "2dXUMpPsfJUCB6fo5WvibyctoXQ4q9BvhKm3SaVPGGf43k8ochHhyCKqX6FCriNcAcpymCmL7BP8f7taKwZ96n49",
  "key10": "ccS9iB1bqFBVjNNcmWMHPCKCdnUGURnzcsJ1wavVyip8BKsiYLHwgTwBRKm6S8QpnzFkmsyH7T4y7qTv83cqsJJ",
  "key11": "2mue8PqT3UF8Krpg3y5W4x2uGpaESZyGaz3fqLSbMNgftwVcnVcKsMQdjZir1TGUiR9YUXeFhLkcyAfQxFP43PQR",
  "key12": "eg6d9r2dWz1PWuyrUrDaCWtmqFx5ApBDq1zwvzegWwRiMJQUvK8Hx2QsCGwKnEKMVhUsfPaiC8zg9cBjTeXQ8Ld",
  "key13": "61tGk6stXsCDGwf7FKq5Mf4FKqab1uN7DERP9kSVjpVZm3ZCNKWyp64pp6NZdfhv16P5gbyTn2vB5BPDvEjaxaRb",
  "key14": "3iNQdzc6njm9HQpeT9XmJCq675n2ANoKs6dg1PextN3VNy34YYB1biLb3pTF5wynvcQ2mkNhfib7LwGjuqsHtjcG",
  "key15": "61Ku9Eq6QZ6qQtzRKSGcngcNzEvfrxP7QGDtny8mEnyMLaosWjNQCQr1hNBWWyNT7x9aFD5jFTPa9Pks1rMi2tjK",
  "key16": "4a2EAbKLU3Yj8ysgcgHiq9QHGhbfqaahRsYu8hhgqkttC5dJUR7fTBfAM8AJwDerReL2zYhn8hXva7nbDmxiMfsu",
  "key17": "4cu6QTqHyWnwGx1u7EvPQTW2ZWeCDaYNp7YXgFR3sKV41nn3MVZhVEehv5TQ6tC1MWSSMtFXWpobwdWsitRw1FZz",
  "key18": "3NwnxH51RJ4LBtxJJgagt755oCoiZuM34PUZR6Bqkmip11998QrEgFEDsnSPBoeNdYkz2iRFx7KYB7QWkUcjhCWu",
  "key19": "3ut8gjbtounLdTuFYoDmwCUeMaAA5bmtos93UAT7ZviArTMqSYMupXCjrZ8PWdaSCwyrwAH9qQdW6Y4fPZLfM5TR",
  "key20": "5JT2pzx2HpXd1FUQ6LpYZihrJ6taWbMFf9Xt5o4dxUQJqHXpriGN3byzYN48rd4T8SqrsEjvz5XdrTR55wnVKK8b",
  "key21": "fSExFTk8ieC4KFs7oNsycXN7qrYG3QQpKg8yJHDNTAhBLTE1TtFWtKr81G69HJQRPCNKcJCU9rWKAfsWPT5Tu7M",
  "key22": "5wTnFQhYQhSJZ2vHCDgffQri7jx3iF9qH4RCSyzwP5WM7WTvKnPLc3Uj134LrjDe2dVJnrcKXu6yxRGdNHHt7nAt",
  "key23": "2gD3GAYs52toAc1PKicMZeCSGQ3xEdbxgZmCqzGV1GPvVu9Zkz1B9MkoxiPKchPCddzECYqcLBKqt1TzCJydDvke",
  "key24": "3gq3hqjrYRJx5ETXgBVYgoEkJHnxuH7miDjSU7HZpSXem9QJZzHGoQFYu6myR8jwJkq5XJogY1rcznwbjUZjjWEx",
  "key25": "3YZjXd6QSQLenwGr2xbECMpazcWknUK5X6Rd7hozQf8VYapugUCLPu4x8jMhhfWC3RkUrFb3iBr5NomoGcfK3Lwm",
  "key26": "2ba9LAZvYANhJymDCcbTqnhkY4BiV4a863WLURpjRJ8gskJKmYeVdBa1DEhiZmBCTa8bkruivSPMTF6nbqTLWJKi",
  "key27": "2tZ2En7PHkH7eiLE42MhinbUJjUH7weVTvgrmsCzAWv5h34pYeefAG5tPudzHvz1fuFgzwRF4DB6Nu6yYvhRR89a",
  "key28": "33iRDV66StUJmHZzaEE3NcUAmgcMKFKUGQxP1RjfEeAcBrWGsZyfEcxzewxFGKPjCnsrkspegeMrn2QXWFKherWX",
  "key29": "3Ar4p8ZGHR3xFJSBAvCgs6BSWxGMHBDfPeLWDRnoux3N4ZJaPfuktTu6vvRKNQrpDaJ87ah6p4qUEYNwdYRCNxTQ",
  "key30": "36PzweTyzE9E2sXD69kCHautNmbTBZwNvmmMaSv59WcLcPnQAvKM1DtWskCiPuP931AU9ricchg7XUgSc6DpHVyi",
  "key31": "5aKtmBqy7e1baHatZx4ngaT1iceYMMg42fuFrkiiitUn2Rv2gWWDWh5GmK96E5eLg3FuC8j6nMwWM7KBtoScbTYk",
  "key32": "2gwEiC5mRcMzYDhemxAoNkQxNWGLobb3tTKrZ7tYnuqzLSjDFZb4eqn7gT1CEJU3fb4jhkJ547QGWyDmqXAtJ51Q"
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
