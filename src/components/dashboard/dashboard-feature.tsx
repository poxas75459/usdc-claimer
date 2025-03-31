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
    "3mB9pC2UQwbCrd2kGr8ipCwuGSvkMU72QRAH8HFHJF3LXpWeGcWCMAqoSy6NaoHezmXkkfcxjQKgqhTspVzVbfNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BEhuLRLuZv9s8u2uxLMTRLyHHs1odoTcZauymyNJ8zGqfdeLCepHC5RyYS1DCzzSJHEtmFkJC5gavFkFngRvqtv",
  "key1": "2sUnfcyH2mLSHvo1fw5xsFjVKJA1eL8XtMXhgQ5GQ4pHzVobzf3SZxeTHbcpzCyMJRRFV5uXvxGvYTirzYfqRUq8",
  "key2": "2f4Q2ohjFc5emJ7jjxcpm524D8DuiEurBbXabGrmB9jUXXczEnLryzr3vKesaGQu5NCFqVBDpxhbpUo4Jf6nt2TD",
  "key3": "3zHjiW2YCepygnLhDpB3PGLNAcmtqJA8tS9z1r8vDFn6VoWHj3CjEXQWubuF9BZwxwEgKL9GecsD2eqTErsEKKuo",
  "key4": "zrTd817RBnyYDXxsMQgd3vJr2JVaKMjuaGNBLZZmUsSeFCVj6Nx4ySueVLUwGZjWJS2PkWW8RUFjs8A71QCRKuJ",
  "key5": "4N988rGVar4rjjxaEBAtCnZSnNxh95sbzv4sj2qxEcDWBvCujfEZTVmegdtTEwSWMAkoGbshUmDEK7gX6Lv4eLWW",
  "key6": "4d4TtPK5buzi5cUu2BsyFXdjLh6yS2mYDXDbFGS3tsux9Yi6nqo7gDUsn4Zbm9FS995eQ3oBmkNzzGpZ3VB61N4e",
  "key7": "3ffycXwxymB6TMkoRNTs13SSam53vyFb4QhEntpTmsy3dDKjxWdLf2yTD7Kbq2dJBVr6cMFPt95Hz5xeRx6LZ1Ge",
  "key8": "5FqeYy8pd89fkSs2HWbZyNqdU6g3v9VcGDtaYhPhx1SVYMaSh7o3HQqTqThMJG9bw1mAPyjuRFvMGXiXx4QiX5mm",
  "key9": "4CeyU9pLDr186KpxKxn3nMrchmPTvAvFQfNQGs8BXZRfEdwzAKLuGQ83EKcvburF5nhsB5EiYYxXYb585LVLfjog",
  "key10": "rxKPQFsABWDKsvxWvp7CBzAdh93vLnkjcCQoFpsnx7Y5GoAArHuPKgKf1dfv1fQ8uHz4vkLsiCuydqMJynbGXZ3",
  "key11": "3pnm6Yc7txH1NQy1mBvQVdGozS8fTbPy1EcdiWhAUJDzwSwt7oGfKm5HKWWMs6Vs2K8bD58wxKLFdUzkCqxyNqx6",
  "key12": "39HG6AGkBZ9VnTiToHTALkjKyUJpoNMcXdyX6vRXDzMPhEqC9R55mjdj11ix3UrEGvRUMH9Jeaj5BZ74xEzXXPSu",
  "key13": "kguNgknf7G14PWZURmwi8dfR4P273fwxsbX9H8NGAUuf9NkQ99bxQuVrcLiLCKKaci6BUoyJzPLBtDEGqGpEbX2",
  "key14": "4uusGT9VzJwkjGVcFHAhyerdySJcQtMmoqzNa59SHgio7j2G3fXMXZkJxjsdbuKaJV3qnJeAAw1cc6KuGy4euteN",
  "key15": "3JgZwj2Hh9qTy3d1B5spJc669F2ijroBQPF46PvYVzU3GnU2698WkeqeaLRY7YAcs6kqeGFgtxEzTN9DkbDBNq9w",
  "key16": "4veAYNn5Uk7waKezxR6FYx5RCSyKxWbvHQxzVb7VCQqz8EJSXMKk1ZRF88f8HN45koZ8FG2NPv598LvLoA7kKERr",
  "key17": "4CU8CEFfwoJjR7b5vxw3R6fkJPKEeLo5rKkiftqc8gkEoDwcyAyryob1nTWdwssQqYy1nXB4aCV4L1Xr3BDJvYSf",
  "key18": "2vfH1CMZpxshqoa4sTbKvaoLrqihSE4r6hWUtQePV2hrJLetuiCbQzrTBCDHG8gazvZYyWbwEpZB26azKEJ7jWK4",
  "key19": "3YsaNgZji3ZpEdpXopXoqbDa8FwjkcimFQApDb44cw6JgfpwwC5sX5kWxxEkXnZT5FJhcBeW3nWRXDvfF4JBjyWo",
  "key20": "4QvuqCK67BRVCPCKvNP8DpupE2SFMjGznFmAbbqH5Q6VDLkFwkFquyZTjeGynqMn6ErZEutR38tMnxQmhFQ8bnfS",
  "key21": "27UdgxVi1aTRWSrzADgT7D2s8RYndnHNJbZkSUBpEg26znX3fsRB2QHg5iS1CbQ9YRcRf5noCCUkGv181vSJQ5uu",
  "key22": "DukCATVbj3SbvJdmZ1PVLz1YciWhPEx1RDS8kmCfmy9QKvSCbMqxzFFdy55bp4gFP3KoyoivKgkHAQnN53CPXv9",
  "key23": "4atZzLSD9QN1W7cSmv2WDH5UXiHYSfsuLnotrrGwjMtDZtzKs429MV33q14FGqjZDr1TAG9Jos93VGanKM5veDfq",
  "key24": "5cbw5ZHyHUgVuYx9UtWfnrrdj3rZ3rEFxLqVFR71m6vrgx44hivYxVWgAssPqYKTY5jzHyjiPaoncKxeGMFKwPXw",
  "key25": "2qpjUe4KgJYHHf47JJx44icP986w5ghWji3qvb4wecmQjEWP3NoQXMbexwcWic32eKvBPfsYeY72dHSJjprMVCVW",
  "key26": "LVWdDZr9T9HSYU4yom6diMZmo4HYLzzMw3guKxbPAQABku8hue4W9Aq4Ze4KPmUpSrF4s7jg5vjF2pmTyqbVttA",
  "key27": "2AUcGrRqRDD8wJFqWmosKoALtKV3qCAeYfayXUWB6xYbAMUw41izHfXXpjC1yKfzsSW8WtfrEbECUkWFcDi4H7Qg"
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
