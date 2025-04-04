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
    "zNL63mBnn7g7924xHaPc5UF711r3biDt3BTC9fcfM3vuJ3wz4EbtDsvGpXnWsaCVSD8kUscEEu4YDRHNpU61nWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wvqn91Agf2zBJ5m7c9hKSbsqtodaTr7Vm7VnMFrCCgvvnrsVr7JDeCumx6ugXyCTA2vpjC8X23CGochAUgA9xQw",
  "key1": "2jXTLSsU3v9o8Dwc12dStKMHYmrm13mPm6Syw5769JFjpzC99Ab1p84N9dpjsqMJjda7LZePV4sVLDEAR9vBYAxh",
  "key2": "5eRWoaamdPTHuTTUNpTso7A9szXBoBpHFmHhhyQwUKtwvLTPWhqPjq1HjB4z8rLNVnp52r4ypv6c3vM8iTuCReo1",
  "key3": "27JTiJrPxhbsmT5bRZnK9o2kiYHkz2dmj6wRDZKoEowfAnxpKXceEJDcRnFQhoXZhKAWjFpJRRi16EYuoFk3Vdse",
  "key4": "2WyyhfUhhZMVtQ296pbpXXNaVWecp58MoRBasJtfWqoSL9t4vZ96MtbDY1uuy57jLuy9NkqfcSn55XNtj2q6QcwG",
  "key5": "638YfbqBouy7M55qz3Mh392xrJ23f4gnXWVyAjtmF4LfggDQB2GKRstX1ygafLghqdxxLfa5A8DU2yz7EpWPDDEz",
  "key6": "36vzbRY7witGYfmhLQ2uCXjKRn5ioPythwLnAEuZcJAwLoiyVG8Xfmmi3mzC941FoKoHDNB2ZAZ1rtj9GTxWyNgj",
  "key7": "3LoMcw5RS7YJK4HwmtVBpX4vBEwZfZFgQtykAX4dDN2nhUkfCDsABtjAJRFPkTDMBwrHNtWHPNf7pwFbHCLET1WM",
  "key8": "4XRC9YzTbuLFR4MT6MM171hJqCK8nUyji9BVPeYoUfea2aE9aUM1x6TQmEzNuRBemjRkwSKXJT4iZVVoyyUqifjo",
  "key9": "2i7WfMCXw5FbX3jVNbEs6QMBZQnJM3z3irZDyEVApPiXgiHavT4taQj5vsT3snktTgXjMheaBXnBum3h6shyxW2",
  "key10": "627UBZeQyD9SSCq3Tzn32yruse7ZrTUoneUp5JX2DDiHcawvzK6HcTDyK25hySb6Q2KXEQe8ByLKn1bMhHQdAz5b",
  "key11": "4GGLhaDx197ZQriqYwUJ93UDdbaxFmzLujBeqPTF37kuutjXeqSuap5oiq9wPnvGCGVcAtFjcKWDHWC7PZA1CH29",
  "key12": "52Vp6vo6Ymvj8ASZDc8qmrPb8gQfHcEguN7CMqUhUhZwjz9hxnguXewBQ36Bb84LotAfwN8g7qeg6eTXnQknDssv",
  "key13": "4qeiNJiCDckcMET5eVu4yN2EEpDBfvAJh7UeESL5XSzL23X1xSN47Mvs8yxrpF7KkoEXYTBKbsCQqob7w4s1YvGS",
  "key14": "5VVggXcAAvEbDMnQf4YoJsw7V2ZHFszrKx28mJiYc92XEuUa6mp2QecaxU8wNymVBkEtt56P9C3qUrMWbrZ7zBtn",
  "key15": "4M4y6As4i7dWYP6Wb2cLFYHRYkJdDGKDgnNMDgpDzWaKtfzRMYfjbRhGsatchXapksBkWpVvrEN1mcF3C62py6PT",
  "key16": "4mAb1e69zkUAp5KXbdmwRkV543nkru6YBZYbA4izCUoMAGEz8cpcTWvXca9h1UTRb7NHsRWG4FQB3hmd8RQQ5h1z",
  "key17": "2budLgGEFsSdytfBCVM9r21P7js17aSTCnxFmxSp4wC2B3Bhv85D8anpvn1pSXQ2NcaAZsKjWAi6ESE94awLoyH1",
  "key18": "3DHup7ZR6tcxNpQ4oicKTRZ4otHSVtN1EyeYFsUyBHGR4tXvtfWoZAM1bm5QMbZLBnWTA613Jm9zF2Faz5r34Qq2",
  "key19": "5RmsoHsS3ax5pDAPhstdJ58JJoCBaKq9XggipKTQSqgUcCNSfvz3tTWeo82QUamqbCiKJWgE65dh8Fbuucwigjmw",
  "key20": "523X8L84VNAx6mitaBT3ndv4xonYRmoYGLcdzhvk5nzsEiYG3zKKksTj3fYQAJ4kqXB76DPEcR2mLrbZvvbVRv5w",
  "key21": "5bM5aMgmcHDii7qZJsoC9ZqaeKAyUu2ygNaqyUWvPCpwKj1GTjkHzyNmGSuyXd99MR1yHrzCSj74LKYDYwKCkSEs",
  "key22": "2vRiy5zPodmhbZk4gHr67x48dvCN3kKeVoy4gQ6LB8RxVDmoYmiqP9DDaX7QFBdkQvfXCErHBB5wHLCG6sU3ma7R",
  "key23": "5jUHUpyumtpFjRSnYssW1qUyrG8RTp11nyDyQMEMjusGeVoz2G1w4uN3YW7g5T6nKVV3fz9NtUikcTChse66sJZ5",
  "key24": "5jB6hUsscBvK7f3G7YwjqCt3TYpuHL6jv3t1ZRDoAuvhTgM4RjZHvpGB9jpfqomWhihjVVFbr4eADZtggYQT36K5",
  "key25": "3wQc3oHbQKH1yp4uinKsvQpg29bAXHkm34kaQNuzGpJm1xj7yngicax4GaZvL351vN3a6XK8kCRENTKJdr1rXHuD",
  "key26": "22Gn5APWUSG6gbFrrbT2JHU8HvpREa3BB2JoCY4rStjxu9KSrm2GbuSmsPRkiVSsC7iq7thmwiUN5fjo3h8uuE2W",
  "key27": "4fwWCzo4iAYqRpn7VJzkS9BDFviA7KrTpZzMkKFVaE5jevyzBfRrFVQ4NmMfyuKGxKzsQaFVHtYo33FGBzMNvy8i",
  "key28": "45NXf5HJq6eqEYz5MkU3UfW2xA7tmmqXw2bm7tb3J9AY1haVZdgw2vXGF9HaKZnpd5TRaUJULiBjDvqx8CaNhPp6",
  "key29": "Fu1Wu1KYCgCUzWn5JJmuEXCTVQrFFtMyMWa7Gzx549Du9F6FyoMS9uHEruaVuhbnqC2TU8mb7FZ66SJCod73CVN"
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
