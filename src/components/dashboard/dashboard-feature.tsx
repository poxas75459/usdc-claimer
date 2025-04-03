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
    "NxSsAMqLLBu7NmyFyrQcAFm2gJVygc5TR6Ch5h3NSg2ngxtcpvPRvL2nzXNK4PHwQRSyDktQ9uKodq1qjcv2F84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTKjJiNWMPLpPyuGNmntQGUH9vy5Xfepmn2EjjSFE4Y8ixJvPQFcuUi6QtCBE44XNyAgUirwTWqrWrZJh5YMs6J",
  "key1": "3MfpzDutHAqmMfPGgsNtyKx9HJPwtD94Mdvyvg9bv5qqXg9NpoES9ZnGVzSVLBEVJsq1YqK9gepxnC9Si6KBoJi8",
  "key2": "5twr7QdvYS6AevHwQzCqTpAKyv2Za4zkxagt2pbHT6LACe9ZrewXPQ4JT5vkF1HtGuLdBCw88dqwryCZa2DmxodC",
  "key3": "2WcnyoJFULCY51Ld4gZb1vFA6irBAYRRyt2VVp1oQ8TZtG3Rkr2dDZrkffu72pcEo5FGmkv49VxiprfncYmhGGFi",
  "key4": "2UPL9b7AtDsJ5bTmQizH4RJTskcJ2gXBPvyReJVqygHumC4j1VawKNvD3bRRj6VMDW18WN4zF55NhMqKWCtMtmWb",
  "key5": "3RgCKqntzhN32YjVXaXaEzeaWtLT5woKX4Rw4B1R6yFBKrBJEM4uSFsjF76EoFjRcM9N3vpyL3Rziw9FsBhV8QtC",
  "key6": "4ZJmcgFieL3qnLP6bvdAjQUiyyRku6xeKjpw4MBtRikHzTy7jAS7BfjE9dAiGCU45C39HcFuAj58bL5sNTZBjUnG",
  "key7": "5gBarZQS3L7fM8qfr6jrpf3FhgRvQUbnfyGPWDvkvkkGJF8xT3KNx3VMReZX9kDRGm8NDkX6PNwgWkZRNmaRWtKg",
  "key8": "PbUzVEoLiVSdp64XW44fRHzE724U8VEP5Sach6cHyJgu9oNqMsLUjesWh7fJ7kAmZpTrsePFbPxPEU3yuFWYe9x",
  "key9": "ZHoP6xwXDZTy5EbupWwpCyTCnP83wJa9M4tSqmAn7usFGZeQ3jRZDXwTejD2Dz9MYzZgievt5tVoJXh9qDE4qeb",
  "key10": "4xKvPYewtUc7n5UxotJS4hU9N18gHztjxQsKVhuCBF648dTFHsKpBpahtDxy6ex54XkisnJRCMoqop5vdHGrEHrj",
  "key11": "5mx2g91LUEqqzo4cvaka1u8TGJAMTmX1FRjdrsRTJAFRfFxxVdaAcgePyxBgn8dYXJoCCLcwj2xfpG21UF7jsgpg",
  "key12": "2HyETmin7jftM5wXa1hQWBiyH7pSeJwrpoCQjYwwA4TJpJLLTjVSMmGJxYEzNLbbmWTvVmgRJeCnhCXJfdpAkLgJ",
  "key13": "e6XJkMQSkqP1kcz35JMj8CBxSB5dppp2cJ4zjWGnB9shGgm9H4WhQLZeLnsYqfYwLWcdNG6vJt8CYbD2TiBUxxd",
  "key14": "uR6c21t5KPaHYJmwkhoNwRnbx5Fi3kLN93AbaXqusXp5CjGkdNiR1GVPmcoNTTsfzqTTCV8xMFgPAM8aWqV74UK",
  "key15": "UQdk2z2VjxDCENRDgLwfGptyARj5uoYHAf51JLVMRcSpMyp5Ep69eUZacZsChGVYQsSZoDfpUhVVUPNcRBSPBEc",
  "key16": "29jV4JjSyaSikiheaa6LzAvN37uUJqbi2xVKBoWunCSMdExtLPGWPAqbE6WFSw8CLnGYV1ZTnUwLjGWwRxA46zbH",
  "key17": "2mV6r2SoZnBn9KY9twLJMPn62A6CzCntwbQxFUdWSv1mgiYcH8GWPDKYLZb5f6BTv54upfBDY7Jdimd1PzLrhTrM",
  "key18": "4uLcmCCD8hGz17BA66UoKnD6t2z7ohek3q461o8y9rtmXgbQxVWTTGMSkyH82qbTud1iKmLpKFRPtpETPdCrHvCn",
  "key19": "3LYbz12XWL3q6tNTbXsfNKL7VLNmKTqVaJktAmsse4EENYjWeMQ7wRRcwNG3n7AAR9nkx2NZVJrjaCuBkzG7JUX9",
  "key20": "3QaQJGW1KopRewJRRVgbH8G5bznjpPexq1MLJ4wFFrNBAScDfWvyp8rTmkmwLbegKhMz9fQSBaFcpk6ZPtMDTyTd",
  "key21": "5DvJdosQyyVvZ7CUfhkDcH1uZvkozt4PH313TYDNSE9ykAsmo776NuhzJrkDKqYMiXkDPgisrF5fPd2zQZeXNRN5",
  "key22": "3zhi4QJXqgr3AY4YQL3CXsb47PFtNvvw81jX7BBN1nzzQtVPkgxgHAVb8bmCuWAgec8mUrQnfaKjC2vYj1VnxjCD",
  "key23": "2npsEzvZwCQhHTcw8zGKLTtgnnr2TbwT8Qxfdje9JAyaP8FyTajNK4GKv8tDkrZW8jxyCHAPKUcVqvFFnFiionjz",
  "key24": "5f4goyKi8xRMzzSqvDBnpnuKUoq67Enujakq1V5CJ4DWnYmXHTWeME4A7xUkYV9uyXAzr48LSW83FnB47WfAm8Gm",
  "key25": "3FsYFNvViqryJGR6iM3kaC2kC8bE3UKFP78UpJGHhht9v6y8Q49oRSwQEjvbrgb5JnyVyQjzby1kQrYkYXCY8ZhR",
  "key26": "2p2nX6vJdofiYAfVcQ52BHjFsjw3f5iCAyDD5g8F5X8PskJB2XbWZ9xEiN1Ti3uC5YEd3fyTb16EUPStUTMqdoVw",
  "key27": "fmVrb1U3RigACnN88f1zyp6EdTJdWwAwsQ7bDQMHsGhQzeruZ65kxuoPsf6E3uDkgpTVNux5oJYqtCxJBsbHU1i",
  "key28": "2PWXLY5bfz7T3gZxk4KreXTsuou6vncur4SzqMgYgv82vJWKgfg7YYRWAKHwCaut49iiMstpWZLwXKsNNb3ybVzS",
  "key29": "4GRjjt8UV5ss6Espk8RWnkVCS4mTtcPP2gKYJie8cAME9zgTLdNNoPMmxvtFhe8njXMwSBhRsHbayTxFT2SV7nxo"
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
