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
    "3eez7VMBh8YBnS6qrfyLxvJ2ysdnZWNMDb6y4QxUMYW3pAHuos7g6rmfhJsC6EvkeruU1tMdNkduHR2ZqvxNQ68M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22QFMy2VQkVR9jL6Xx4tnr2ZyJ7DXB7yqALyeRTGgHA2tZ4ZsxSgA4gdmvVCardyPgK2hPPRwLCXrG95dM9CB1wk",
  "key1": "5MVZWudKq3D8nxnapweCiSzAa8F1aoRuhkghBurbDWDfT9NCCsgMCTeyBQXFJn98RRwG3fyENsH1DbctUVBaoEuF",
  "key2": "3mPiKt4Xh8SMo5WWyqGoL8WmD458nJZZnP2pwvWirLJuZNdVCe7WWXpoFZbEfWN6KQ4QQe12mAqqsnS9kNqZfU2k",
  "key3": "4ZipkNbkhN7LqfXvssA7vZubfjQHqWDRUWkRPs8n6ZNuYQXJDZkme4zVu2NNhi6p7VvJTbsbwmCAQDWCQcXek7cJ",
  "key4": "2Xweqde8SDnEcCoMQ7RjV51jbfJ9ihi53Yd9gBvq94tyb8PXqHmWJW5Lu33sJSJ3D8bosBQKgjqFbvDsUriP8MvF",
  "key5": "4YkUVaWfnA2GWTXLRtPE37WbmAd3x2LvRSV94rmsP3NM8fJRw7kodKEECpNBWWBNQDHr55ttfFwaa98JQJTszvjz",
  "key6": "37rwSuLaECQrhZQ6cPRRaP9dChd8jvtgAzUjozqAkScpKV8y1fQ33uegqJUe7Me1GTJrQsDZ4AsS8Nzc9uoeCQpT",
  "key7": "4vy9ogyaUEJqjC4axuuNKRghwjfbjpNoSKixxF1AfsLPufXmtHeztCGFuDDjWWUfaJVf5SgRkNW5wTjLjxRiULxK",
  "key8": "3n5jhTu6WTEQYxAUa7QYnPXUyKMpSwh699Vf1XmdPxmvtzGMn7nk9GMJghgDZLSuPhV5JBYZ4GDQpgSt8tbZoW3v",
  "key9": "MyQcoKnrC3oJjHX7fh3Zkb553NspkTfnrQPiZs856Avn2LNPpf3GEBu6Gk97cLnjJLqyLccDan3mRu1zHRauhV6",
  "key10": "iqSggYigUU7XwQCTnWthdS85VA94KLVCtpzxK8pybWKP9kY3THxtj9mm8suPq82vNBisvpnrjBeVWXBgFxQKB1h",
  "key11": "39YQ9x8ShuL6wqCcKYYZDWQEk3UTdJgHUwVkNBEQx55cnM8UxAjCJ2QYopJxqizj6tLDUHzwQiybJMrxRkaZx4qV",
  "key12": "4bLhyTovbRYm3LmzUA2oM2i2FJrNtbU37yUCv2C5MNo13kdrr5wQUA8Sp5oRU4Lsq2WZShfXEWZ2j6enf4bcjECh",
  "key13": "2AjkBdvh2xgcWEhtNBjqVX5xhXbxiZbrf63MthyeZngDqfSSMUejcmNXqZ32qWZCrJsVogH2DjPXMH8LKprRLuxm",
  "key14": "4wAUFxithfXkQpyUPA9vp9rvHvGecCGskgk7qtibHmB8TvWpYmYoEh97c5wboZRcFL8CoSPiThYvsAt2GsQ5juED",
  "key15": "eAHLB6LhurJnnLiF6sCaPp1tTC4sBpgHhdT1Ey51AmBKd9CgJ46bxUq8dLRFk6FwXwqRLc6VqzYYqDjG1DUh4nN",
  "key16": "44pHvGcZ1avSvnXxz3PkPtn4Eco2v6eytMCeDXvj7B7kfLooAN2zDb2t7KRDxThHp5zaNMCaJ6EFqhcrkcbf8V6v",
  "key17": "4rxL1QW4gesSUnAjwStAPLoSZtwrEPmaWTpzLBCHqHKburF6sk57rSL7EmPrJLJeDgCijp2R5BSj5Fk36No5v6fN",
  "key18": "TuALRLKsU8Eo8dxdmJkt1eV73iRgk1jTLhGHCC4Da2XkjLsmfvut6PTKDsT8JzLqVrBZGRMQCo8rAmFZnEBY2RE",
  "key19": "MvP5LT1UHVDsQQJ3BJuFBXoD3nFV41j3LSouzt9tDoK9LK7n28dnrXXMTnWMLRkpH1ziTQhu3DVGNPc1NKHYnRE",
  "key20": "4k8mVFnGuG3tgGhz7Uosts4NeopXrue35Z1JKnmvqMuSAiTobCCYPuSxEW5WNAYugn2FczJ2nNtm3XNJVLH6wXnJ",
  "key21": "aeHudyubv68WHtosAtT5LyeyF9dm5yuY9R7p68CNg9YrrfJLqMCQiZvV41sbEc9NkxZCmtQ18JCXCEPAB6SURjw",
  "key22": "42TqLrqCGGEHj3jzaEVTGgFRrgdw5Xu3sDJwEwa1WdkcYVJKfKtDMB5P4XcD6G4hczfXVQ9zX6Xf7VmQyjRzQv3s",
  "key23": "2uVWW4hhdoT3hH2dK7nG1Ta9twRdMxJBtURNsEuo3EPWrn1uxbSnUXF2Y5e2NEz89DbKbwAXnMJa6HEcLaq1i4c4",
  "key24": "4MxGbHV1fj1yvoc12BhERPccvLCcNwEs2YN9sazfP4CE8NioV5qqzVZiCTd5hZzbTW9sMpXAtSctz52Xej82etD8",
  "key25": "2ByCzTCKCxr2yPiyyajNvCq2VbUHG8y79ANevAj3FmEz6TqBv6L2HyKKECzprz6nB3b9ChjahGScYhzWtkKzgza9",
  "key26": "5h89FWjp8QPdenJhD3aMBwTfFHYxLxTJa5xEEUMaNdv9qBw7vEZosH7gqt2FvGhsXbBTscRAq7ZenErXPs6yCPzC",
  "key27": "3CRj8eKF5HBPvvLwGcaSDzYKDasRAF9m3ZwZGwsDLXxQmeVMoTzK4jXgEv9cPkFu2FfY47wfrdUzsMdHss65dMsx",
  "key28": "3X8tSAHKtvkpqo5PTZBSpx5NtumSsoVxudF3y3Zx9Q2VuKuTWtZeZtmqzJTaHWoCMEFTR79dX1aAuMpc43pmJf2R",
  "key29": "4dd5duVVdjb67PLYZnyknWePXXwEuVoPC3MRRECqU5CM2t9HNwAQ5AxnGuDkpwupq2GFeta99zdjLwgit1ETUD1w",
  "key30": "2v7WEGXod115xrrHCZdjzzVnFD3X9taUwBoyTZrjrCB8dt9y4B5oVvXVxiMA8yH4heBixMf3Q7nLL33tH1EqApWV",
  "key31": "3r71DppCDp6QcsK68TK8or1fCH7e8rQWJ5oanq1bc75WHFVdP7s7GDzRVSjHrBVcTeAUcQT5JTpCvZYJho8R8LFK",
  "key32": "5WTB7KgREAEMSTuGzBEaqGcEyWHPQSC6bHPA27nVWibpEGqkn8jcuDHEXNzFkbs9EFJRMtcjL6R7G6RzMA13Hb29",
  "key33": "4CLN3hN7dc2yaCTff47cxXfraCQMqCVMeiYCFSa1RyFgCyLKaSViQjCMKTXQmdJZFgmcnJujE3DNiXTSsUKFFYsk",
  "key34": "4QTXNx2rrqRjzNNYt8o7NfJDMiQdQ1meGK1BYwpYDPqX5EFBzm16BX1rj1HcUgdbz8oG6sCaepVTNG7yBo4ZKbdg",
  "key35": "GrPpwXNCEbFPjiwkkj4QCbXRxCzzEvAAkpf8H27vgAs62SVTCDMKdfgEYTRcb3H14GBWPqLgwEiFVuZHfMrps1L",
  "key36": "648zYuCzcdQZs7fVaqR7vyrZ3vvgWBcgMBtjTieG8ccRe57gUWybYcc3U9jxbbJFcHsLxduojqGKK7oAbSPotpca",
  "key37": "3Zt6r4TrvvKzTbLSX3gWZLEko1Nz2NmADbiufBiVwLWNKYavvvELWfkfzNu2RYbCWPfdhxt68cJUuknPJAG9Nw2Z",
  "key38": "38RuX8xrNLhqcVecm6nJvK1HaimFipPgHfrqk8JVYm95rBpKyjVRaX8eTjuMTGGPcB5JXbgKZ2PnUmUjTfCjFNgu"
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
