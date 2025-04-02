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
    "5kCYURaQmo5n6wefQkNmMLGNVVWJR3GexqHvcY6XAFy8b7cnhjp885bSDyfs35x28FL2SZ28nUgjAwC8aczkr7cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SipX2xSQH5rnaJyJgkXERKs3NffYLDeQ52KmgLo6QjAiL9KZr6QEunfp5r2gcVcq5GwDq1923NnWuntq3c8HBh",
  "key1": "4YrqMkBXCn2kYADACCfNqTzXRCwQogHV65zedjzTSYtKgYYTZwFKDiDrWwWwz49QZsd8o4awkN1eqc9Xfq2yyrxJ",
  "key2": "5sipQyhYaHcXhvnpuTgTwUJamxSonpznULS9npN5fxZF2o57Skt6pQxFjWVAHmrABduMi2ZkVCyCxtV5K7RoyMbi",
  "key3": "2RSetqBEu16WJu8tZpDGLJBfk3tq3yBDtumXbWa7GZSDwZmFoKEwyCKsZrq5H3SPnezPx5J5stUF4a1ashrWguHY",
  "key4": "5XoboHrGUpFGq25pbV1z5BELtAuSV8uuq1GYZdPXUb2kbaHQfp7uArsLeB3aCiup3cBm1s3XhX9C58WfwxK1FNQb",
  "key5": "36VCQinWJaTUTGJZ86YK1P1vi3BGWekaTes8FDaet4UG2RH8pv1o6gc3nq4pk18ADnmbcJmqwDBenCVJnjz7h9V2",
  "key6": "2r1ZCY5zhpjs6Zn7oH2LpNXbTVrefvbHkQGSbHPxCkwdXuVznUVZ83A67WRCEkp28WDvLMaCQ45uHvwPySYdB3Ax",
  "key7": "63SxL28bvj1oug1F4LPqPxv6Hg7k8mzfeHsLJiWWqx7TBMjMvmtRBb3VSBvFXgFdmsFG1beDAyKQfWPvpb5Jzbjh",
  "key8": "2BHnmvRbNBu1nhg141mDN2rDSMt6ov7Eg3ppvZqFFb2LYXXsRJiu47W4Z2Wf4et9yhdXpHeKS5EFvDQsPeC1HZH2",
  "key9": "4hfcBCvo1cdNAAbBFfUzQB3GW6Lj1MpiCweJY2CPZ77izyzGfG1aZZsFUdzra1CnZKmhKsSvHNH1qXqF4Dk3VS4y",
  "key10": "qK7H4ULzxjRWAGwaNMYrWeZwy6PrT3ubBKAvMNy28JWg1ewYDdbpCa3fHSutbHSeTmCEnhhQVdZRb3vvsZbdumm",
  "key11": "2CprvBpJPyjctXhVEBJYCP2eA5s2PT5i3FGutyBT7HE8WPNZYgkGLVLABd9V6zFKMrq7RQTPe6AYYCeQ6X77JQqQ",
  "key12": "1LFN6PtBX7V4DTmqnnrxQFdTKYywarEmRZ7k9QxvFpopLYYVhVugNUTDDCDzhV3yMcM3ZkKkg9rMTfmSTDeESnJ",
  "key13": "3aQbkPzoTfJoReMcbZG4BmE3mM7kh2XcxQY72KACNk3r1bjLToTeFRLzbW6RUtRYo4nwUB8Chv62Dzhcbajsizex",
  "key14": "47DvTx77ZpwfRGYXv5qAc3WEqook3AapCNoYNEidxnbBdnrmmgXQewRdWsZGRxzp7GjjKHjPxUJbCysz8PWVJSSm",
  "key15": "3N4ajSCdVsdQkys3Wn54fAGBf1vt7GaMhkjDmtUx9Mnk7fis8LJTMFJCftA3zzAgEenSRyEQ8qyHiB8U5pP7Pog6",
  "key16": "2mgFgWbZubuKHhDGxsvRLpuiPryM3EaeZUqg8m4weoznoLGsnoS8N7vbTcttQJmVgb7uvtRUMKp22rCchbBqJgV3",
  "key17": "2pkwUd3fRYxaR6fPeq5vm9UQwhFSQcaqi7uRUrhc78VUTLuC1CKL7ZgUKJLkDNGrXu1JV9v3MsDLesppzgf9FPow",
  "key18": "3pNHfSeo1VMy3Y1eJ7r6dw3Xr7mZpxoKUyFTDADooJ3gt1YkWUAUFynf1wNPhu3qa3m3qwnRrAgDCthoJBWzNU4c",
  "key19": "35GroxVwp4nke4XnmgGX4QTvd58WixpVHhhnCmmypstvn3SKJigwHzrZvkwgrEXk9rYvtruaG8Y7aGRYuYqKXYyU",
  "key20": "4cmDaMY1kC4vM3v2uLRoh51ntXCZwjScSjQGKWNhTwEkMDCKAYfeqPw7NhFxEMZi4wrtd2Mz37bSYrGP4dFKRrdQ",
  "key21": "64cd8BzpG8BzkUSE4NdTw7vt4cvZGGgL3Dta5xQ8m37MatkfNPtKzzgajamixxeAkZZMm8RquFnzYTLVh55WSWQ1",
  "key22": "4f3Tx5nndyhwHAyzPGu3GXHcZkdXzrWAFQqNFBpypAMhSmrhrXueWp3zydG9Z5qKCMcG2wAPdC4oJanm9UmLis4H",
  "key23": "3GVnDL8WFt5yPKhjbjdQx1tT7xgHMBLFP1ZGoGV6e4EFLX2YgDhzCcygZV9hzpJwko7wz8ddLPtVSBV3bTdJM7Uu",
  "key24": "QJ1RqjB8phGFC1QPJN8KDysdVVvhN8ppkgTDrUx7jforEGbzmAVGfeG4yXjwAzRvFnzYSYto9p6ot5mUTYvvikL",
  "key25": "4t7Jf6Ro26VX84QtJcHdV9aQY87UwVaiXxqvkvzQimCTjmDYjx8qYwTvScAhfA36LXGGZi7bVkApBieeXPHfG2mw",
  "key26": "LUS2ihXhhh5Yf83Tx7icVMRDVu5cReDKWDMQET85tK3NUmCDpfp9icD7ba1EuRf5kTT8hPjHAcsP67JYA9T6aF5",
  "key27": "4MufV1QCjsCG46pZkMJPuKZdHp7KsXgY7kV4Ymh7ZU1nKrUi9DUEMbwiYFAjpHBZ6HHHDuYmXjuapZxz82P8Novw",
  "key28": "P5e4wZwfno1Pc25Cmvqqbr7G6x2BPwBU4MxoNGdha1eQVLkkqqdYo6b9BiorEwt1QM2yuSXo6JfqtKLHuLpxuRw",
  "key29": "2GJS83csE3VQm9LjxnE5LodHT3esv9Xxt3UkrdL3XGngxmVJ5SdLmTxccUtsmBRoRa5ntXmHQVDHpAbBrYf4Pw6z",
  "key30": "67R3aFWKvjWqNDhs2VVQpus2s8uRCbzYfLq3VqTFHR6DU6TcQ5og3V5k7eHz123chc8JCed8uNiXkvF9JaPWX82W",
  "key31": "36T7pke3HZCmudMpTMSMwSMcy91JDCECqdcNva2pQw2KsE9YvVwV2hknS6wakeackAJCy2Svf4nwLGRPUUA6YrB6",
  "key32": "56uAW5gtjxyGQjx5ghSsmv2W9DPpCiPqkqBX4uiG7UzmsMNUA3Px1TzxECX4t9oHgrjSxUJyjZNgtJ6NkyiXVpnY",
  "key33": "45ewPcca6BwNPCAFqPsDpZ9Sh5mKZRyYPCpfmKEBTxg3Whrqqru8pYY2iKJAGtNrbzBhzL7vuY86Loz3Avnfqor4",
  "key34": "2e25akztunDB1a23NRkqqFkFN1puNxvLsXDJswUEZevzJEuUSLCLbMPZroKXXnR79q3LW7JPwnRKvhPhrwFsGQyA",
  "key35": "4KVU5KEBMhDZ2CUM2QKB65PCjRDH7JNnKM9ZoCPTyG3dxsF6Xrc8JKvPXbK1L5iQ2thEZcmF3dP8cJNo6u348LK",
  "key36": "Vmq77PmUYcavXFccirFDDAz3s6RrX5ZtbpxdXxrUynpWtTGtCikScM2zPgM83NbM8etLGdABejvSX5Ado4dibjr",
  "key37": "3yQMdDCXkZ4eeBcysurv7nBMqPKhPd5dfYhiyYk2tuUXSuJCDeNYNU9nFNi27ZG1yuuwhSEhsNFxPztCZqZsGtFh",
  "key38": "4YywUdCaLbPyQBRkwtcv8ZJhn175agDPERwnG4nQ7iSHZWgkJJW4GbhZ5gdHaZK55n92NntV5G4q8mQD224d7G3P",
  "key39": "56pj5CH6oYViC1Ut6pXLFV6hqFg7cSfvZRi2eNjurr3Ze2ksey5n9L8biYx92eEXvAwNAbBfnBHD2YoCHHMSUHNh",
  "key40": "5oN6DsKCmZ9qHXfFfUzDhU6mo859m5XywGTZBY5ZsuD3CHuSPT5pGvxzsHAr7G6A25k89DzL8z5TnPzYLCmepzmY",
  "key41": "5F6qnj6jRuhhrKwouUcKAx92wrvkSscWwu9MGAN676bbzXT4xfhe2S2ptFUHj39kNWBzzuLEbUB6YqtLo2mDNM8S",
  "key42": "4TH21jgyRse3b9Lu9KgX2Q9vDQn7pyBrgqFvjVpAUi2xPUKkLkWvagP6BpyCYGPf5V82MpSq3PyQzdRT4wPTdJRM",
  "key43": "25M5vbS9CT678Qq4QPSuEF7tL15hgDM76tJooVsFpxwJNbuNgwzsxF7BbHAfvxnLtvP7iFT2As6TVRgCqFc4AK8Z",
  "key44": "Mh9FJykzQFnqRBgD2GHSbD4xedmKCiG3hp52edAtzJJCUXN8McwQ69uBHhzBkmNs7KdwxNbZBWshTPfax2QWvfx",
  "key45": "21H9cUGPuGjd1LmSkYUr2p6Sd3BKF1P1BEBHphmvWkdnD3Yq28QnuVygRNsxaPzih1PLu654vbxyagjncA4Kaf3B",
  "key46": "5wMrtA6bDEys1UULwrLHZAHqX2t4SXMkxrtpmW9Axjak2uSzgqtoebYgXyuozVLeS633vTpSKsaMvmKNPiUztHkR"
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
